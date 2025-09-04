// pages/recipes.js
import { useEffect, useMemo, useRef, useState } from 'react';
import { recipesData } from '../data/recipesData';
import RecipeModal from '../components/RecipeModal';
import SuggestRecipeForm from '../components/SuggestRecipeForm';
import InstagramGallery from '../components/InstagramGallery';
import { layoutStyles, headingStyle } from '../styles/styles';
import { Instagram } from 'lucide-react';

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [sortBy, setSortBy] = useState('date_desc'); // 'date_desc' | 'date_asc' | 'alpha' | 'meal'
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [initialIndex, setInitialIndex] = useState(0);

  // Infinite scroll
  const ITEMS_PER_PAGE = 12;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const sentinelRef = useRef(null);

  // Helpers
  const MEAL_ORDER = ['breakfast', 'lunch', 'dinner', 'snack', 'drinks'];
  const parseDate = (d) => {
    const dt = new Date(d);
    return isNaN(dt.getTime()) ? new Date(0) : dt;
  };
  const formatDate = (d) =>
    parseDate(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

  // Unique tag list
  const tags = useMemo(() => {
    const s = new Set();
    (recipesData || []).forEach((r) => (r.tags || []).forEach((t) => s.add(t)));
    return ['All', ...Array.from(s).sort()];
  }, []);

  // Filter + sort
  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const base = (recipesData || []).filter((r) => {
      const matchesTerm =
        !term ||
        r.title?.toLowerCase().includes(term) ||
        r.description?.toLowerCase().includes(term) ||
        (r.tags || []).some((t) => t.toLowerCase().includes(term)) ||
        (r.ingredients || []).some((i) => i.toLowerCase().includes(term));
      const matchesTag = activeTag === 'All' || (r.tags || []).includes(activeTag);
      return matchesTerm && matchesTag;
    });

    const arr = [...base];
    if (sortBy === 'date_desc') arr.sort((a, b) => parseDate(b.dateMade) - parseDate(a.dateMade));
    else if (sortBy === 'date_asc') arr.sort((a, b) => parseDate(a.dateMade) - parseDate(b.dateMade));
    else if (sortBy === 'alpha') arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    else if (sortBy === 'meal') {
      const idx = (m) => MEAL_ORDER.indexOf((m || '').toLowerCase());
      arr.sort((a, b) => idx(a.meal) - idx(b.meal));
    }
    return arr;
  }, [searchTerm, activeTag, sortBy]);

  // Visible slice
  const visibleRecipes = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  // Reset paging on filter/sort change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, activeTag, sortBy]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;
    if (visibleCount >= filtered.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => Math.min(c + ITEMS_PER_PAGE, filtered.length));
        }
      },
      { root: null, rootMargin: '200px', threshold: 0 }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [filtered.length, visibleCount]);

  // Open/close modal
  const openModal = (recipe, index = 0) => {
    setCurrentRecipe(recipe);
    setInitialIndex(index);
    setModalOpen(true);
    // set hash to enable deep linking
    try {
      history.replaceState(null, '', `#${recipe.slug}`);
    } catch {}
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentRecipe(null);
    setInitialIndex(0);
    // clear hash (keeps you on the same page)
    try {
      history.replaceState(null, '', ' ');
    } catch {}
  };

  // Tag chip click
  const handleTagClick = (tag) => {
    setActiveTag(tag);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
  };

  // Clear filters
  const hasActiveFilters = activeTag !== 'All' || searchTerm.trim() !== '';
  const clearFilters = () => {
    setActiveTag('All');
    setSearchTerm('');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch {}
  };

  // Deep-link: auto-open if URL hash matches a recipe slug
  useEffect(() => {
    const h = typeof window !== 'undefined' ? window.location.hash.replace('#', '').trim() : '';
    if (!h) return;
    const match = (recipesData || []).find((r) => r.slug === h);
    if (match) openModal(match, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main style={layoutStyles.main} aria-label="Recipes">
      <h1 style={headingStyle}>Cooking Recipes</h1>

      {/* Intro */}
      <div style={introStyle}>
        <p>
          Cooking has always been a part of my life. My mom loves to remind me of the days when I would “cook” elaborate meals
          in my little playhouse kitchen, proudly serving plastic food to anyone who would sit at my table. As I’ve grown older,
          that same joy has stayed with me; only now the meals are real, and I’m constantly experimenting with new recipes.
        </p>
        <p>
          For me, food is more than just cooking; it’s about community and connection. Sharing meals and swapping recipes brings
          people together in such a special way. That’s why I started sharing some of the dishes I’ve made online, and why I wanted
          to collect them here as well.
        </p>
        <p>
          Below you’ll find a curated gallery of my recipes, captured through photos and short clips. You can search, filter, and click
          any recipe to explore the full details. And if a dish has an Instagram link, feel free to check it out there too.
        </p>
      </div>

      {/* Toolbar */}
      <div style={stickyToolbarWrap}>
        <div style={toolbarInner}>
          <input
            type="text"
            aria-label="Search recipes"
            placeholder="Search by title, ingredient, or tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInput}
          />

          <select
            aria-label="Filter by tag"
            value={activeTag}
            onChange={(e) => setActiveTag(e.target.value)}
            style={tagSelect}
          >
            {tags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            aria-label="Sort recipes"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={tagSelect}
          >
            <option value="date_desc">Newest first</option>
            <option value="date_asc">Oldest first</option>
            <option value="alpha">Alphabetical</option>
            <option value="meal">Meal order</option>
          </select>

          {hasActiveFilters && (
            <button onClick={clearFilters} aria-label="Clear search and tag filters" style={clearPill}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div style={grid}>
        {visibleRecipes.map((r) => (
          <article key={r.slug} style={card} aria-label={r.title}>
            <button
              onClick={() => openModal(r, 0)}
              style={coverButton}
              aria-label={`Open ${r.title}`}
            >
              <img
                src={r.thumbnail}
                alt={`${r.title} cover`}
                loading="lazy"
                style={coverImage}
              />
            </button>

            <div style={cardBody}>
              <h2 style={recipeTitle}>{r.title}</h2>
              <p style={{ margin: '0 0 0.5rem' }}>{r.description}</p>

              {(r.meal || r.dateMade) && (
                <p style={{ margin: '0.25rem 0 0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
                  {r.meal ? <strong style={{ marginRight: 8 }}>{r.meal.charAt(0).toUpperCase() + r.meal.slice(1)}</strong> : null}
                  {r.dateMade ? <span>Made on {formatDate(r.dateMade)}</span> : null}
                </p>
              )}

              {!!r.tags?.length && (
                <div style={tagsWrap}>
                  {r.tags.slice(0, 8).map((t) => (
                    <button
                      key={t}
                      onClick={(e) => { e.stopPropagation(); handleTagClick(t); }}
                      style={tagChipButton(t === activeTag)}
                      aria-label={`Filter by ${t}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}

              <div style={ctaRow}>
                {r.instagram && (
                  <a
                    href={r.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={instagramBtn}
                    aria-label={`View ${r.title} on Instagram`}
                  >
                    <Instagram size={16} style={{ marginRight: 6 }} /> View on Instagram
                  </a>
                )}
                <button
                  onClick={() => openModal(r, 0)}
                  style={viewGalleryBtn}
                  aria-label={`View ${r.title} gallery`}
                >
                  View Gallery
                </button>
              </div>
            </div>
          </article>
        ))}

        {!filtered.length && (
          <div style={emptyState}>No recipes found. Try a different search or tag.</div>
        )}
      </div>

      {/* Infinite scroll sentinel */}
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />

      {/* Modal */}
      {modalOpen && currentRecipe && (
        <RecipeModal
          recipe={currentRecipe}
          onClose={closeModal}
          initialIndex={initialIndex}
        />
      )}

      {/* Optional Instagram section */}
      <InstagramGallery
        postUrls={[
          // Add your Instagram post permalinks here
          // 'https://www.instagram.com/p/XXXXXXXXXXX/',
        ]}
      />

      {/* Suggest a Recipe form */}
      <SuggestRecipeForm />
    </main>
  );
}

/* ---------- Styles ---------- */
const introStyle = {
  maxWidth: '800px',
  margin: '0 auto 1.25rem',
  textAlign: 'center',
  fontSize: '1.05rem',
  lineHeight: 1.6,
  background: '#eee8f0',
  padding: '1.25rem',
  borderRadius: '12px'
};

const stickyToolbarWrap = {
  position: 'sticky',
  top: 72,
  zIndex: 20,
  background: 'rgba(238,232,240,0.92)',
  backdropFilter: 'saturate(120%) blur(6px)',
  WebkitBackdropFilter: 'saturate(120%) blur(6px)',
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: '12px',
  margin: '0 auto 1.25rem',
  maxWidth: 980
};

const toolbarInner = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem'
};

const searchInput = {
  width: '100%',
  maxWidth: '520px',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #aaa',
  fontSize: '1rem',
  fontFamily: 'Fira Sans',
  boxSizing: 'border-box'
};

const tagSelect = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #aaa',
  fontFamily: 'Fira Sans',
  fontSize: '1rem'
};

const clearPill = {
  border: '1px solid #413b42',
  color: '#413b42',
  background: 'transparent',
  padding: '0.55rem 0.9rem',
  borderRadius: '999px',
  fontWeight: 700,
  cursor: 'pointer'
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '1rem'
};

const card = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column'
};

const coverButton = { padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' };

const coverImage = { display: 'block', width: '100%', height: '200px', objectFit: 'cover' };

const cardBody = { padding: '1rem', color: '#413b42' };

const recipeTitle = { margin: 0, marginBottom: '0.5rem', fontSize: '1.15rem' };

const tagsWrap = { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '0.5rem 0 0.75rem' };

const tagChipBase = {
  borderRadius: '999px',
  padding: '0.25rem 0.6rem',
  fontSize: '0.85rem',
  fontWeight: 700,
  cursor: 'pointer',
  border: 'none'
};

const tagChipButton = (active) => ({
  ...tagChipBase,
  background: active ? '#413b42' : '#dcc0e5',
  color: active ? '#fff' : '#413b42'
});

const ctaRow = { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' };

const baseBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
  border: 'none',
  borderRadius: '8px',
  padding: '0.55rem 0.9rem',
  fontWeight: 700,
  fontSize: '0.95rem',
  cursor: 'pointer',
  textDecoration: 'none'
};

const instagramBtn = { ...baseBtn, backgroundColor: '#413b42', color: '#fff' };

const viewGalleryBtn = { ...baseBtn, backgroundColor: '#dcc0e5', color: '#413b42' };

const emptyState = {
  gridColumn: '1 / -1',
  textAlign: 'center',
  padding: '2rem 1rem',
  color: '#413b42',
  background: '#eee8f0',
  borderRadius: '12px'
};
