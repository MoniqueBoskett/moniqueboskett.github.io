# generate_posters_windows.ps1
# Run from your project root (where the 'public' folder lives)
# Requires ffmpeg. Install with: winget install Gyan.FFmpeg  (or download from ffmpeg.org)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Join-Path (Get-Location) "public\recipes"
if (-Not (Test-Path $root)) {
  Write-Error "Folder not found: $root  (Run this script from your project root)"
}

Set-Location $root

# For each MP4, create a poster JPG if missing. Uses frame at 2s; tweak -ss if you want.
Get-ChildItem -Recurse -Filter *.mp4 | ForEach-Object {
  $mp4 = $_.FullName
  $jpg = [System.IO.Path]::Combine($_.DirectoryName, ($_.BaseName + ".jpg"))
  if (-not (Test-Path $jpg)) {
    Write-Host "Creating poster for $($_.Name)"
    ffmpeg -y -ss 00:00:02 -i "$mp4" -vframes 1 "$jpg"
  } else {
    Write-Host "Skip (exists): $jpg"
  }
}

Write-Host "Done."
