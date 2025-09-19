Param(
    [string]$FfmpegPath = "ffmpeg"
)

Write-Host "Generating JPG posters from MP4 clips..."

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tacotuesday-2016-08.mp4" -frames:v 1 -q:v 2 "public/recipes/tacotuesday-2016-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/appleenchiladas-2016-15.mp4" -frames:v 1 -q:v 2 "public/recipes/appleenchiladas-2016-15.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Cooking with Monique & LANDIN!"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-01.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-02.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-03.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-04.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-05.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-07.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-08.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-09.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-09.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-10.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/moniqueandlandin-2016-11.mp4" -frames:v 1 -q:v 2 "public/recipes/moniqueandlandin-2016-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/holidayparty-2016-02.mp4" -frames:v 1 -q:v 2 "public/recipes/holidayparty-2016-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/holidayparty-2016-04.mp4" -frames:v 1 -q:v 2 "public/recipes/holidayparty-2016-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/holidayparty-2016-06.mp4" -frames:v 1 -q:v 2 "public/recipes/holidayparty-2016-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/holidayparty-2016-07.mp4" -frames:v 1 -q:v 2 "public/recipes/holidayparty-2016-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/sicksoup-2017-02.mp4" -frames:v 1 -q:v 2 "public/recipes/sicksoup-2017-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/sicksoup-2017-03.mp4" -frames:v 1 -q:v 2 "public/recipes/sicksoup-2017-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/sicksoup-2017-15.mp4" -frames:v 1 -q:v 2 "public/recipes/sicksoup-2017-15.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananasmores-2017-08.mp4" -frames:v 1 -q:v 2 "public/recipes/bananasmores-2017-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/fulldinner-2017-19.mp4" -frames:v 1 -q:v 2 "public/recipes/fulldinner-2017-19.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Loaded Tater Tot Waffles"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tatertots-2017-01.mp4" -frames:v 1 -q:v 2 "public/recipes/tatertots-2017-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tatertots-2017-06.mp4" -frames:v 1 -q:v 2 "public/recipes/tatertots-2017-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Buffalo Chicken Pizza"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/buffchickenpizza-2017-01.mp4" -frames:v 1 -q:v 2 "public/recipes/buffchickenpizza-2017-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/spawater-2017-04.mp4" -frames:v 1 -q:v 2 "public/recipes/spawater-2017-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-2018-02.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-2018-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Cinnamon Rolls"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cinnamonrolls-2018-01.mp4" -frames:v 1 -q:v 2 "public/recipes/cinnamonrolls-2018-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/herbaltea-2018-02.mp4" -frames:v 1 -q:v 2 "public/recipes/herbaltea-2018-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ One Pan Salmon Dinner"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/onepansalmon-2019-01.mp4" -frames:v 1 -q:v 2 "public/recipes/onepansalmon-2019-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Smothered Pork Chops"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/smotheredchop-2019-01.mp4" -frames:v 1 -q:v 2 "public/recipes/smotheredchop-2019-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/smotheredchop-2019-03.mp4" -frames:v 1 -q:v 2 "public/recipes/smotheredchop-2019-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/smotheredchop-2019-04.mp4" -frames:v 1 -q:v 2 "public/recipes/smotheredchop-2019-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Cookie Night"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cookienight-2019-01.mp4" -frames:v 1 -q:v 2 "public/recipes/cookienight-2019-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cookienight-2019-02.mp4" -frames:v 1 -q:v 2 "public/recipes/cookienight-2019-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/frenchonionsoup-2019-03.mp4" -frames:v 1 -q:v 2 "public/recipes/frenchonionsoup-2019-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Burgers"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/burger-2020-01.mp4" -frames:v 1 -q:v 2 "public/recipes/burger-2020-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Shrimp & Grits Part 1"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-01.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-09.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-09.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt1-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt1-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/crabmac-2020-25.mp4" -frames:v 1 -q:v 2 "public/recipes/crabmac-2020-25.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-09.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-09.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/scallopgnocchi-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/scallopgnocchi-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/breakfast-multidate-03.mp4" -frames:v 1 -q:v 2 "public/recipes/breakfast-multidate-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/onionring-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/onionring-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/onionring-2020-14.mp4" -frames:v 1 -q:v 2 "public/recipes/onionring-2020-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Steaks"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-01.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-02.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-03.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-05.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-06.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/steak-multidate-07.mp4" -frames:v 1 -q:v 2 "public/recipes/steak-multidate-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-09.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-09.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/mushroomchicken-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/mushroomchicken-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/finisheddinner-multidate-04.mp4" -frames:v 1 -q:v 2 "public/recipes/finisheddinner-multidate-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/finisheddinner-multidate-05.mp4" -frames:v 1 -q:v 2 "public/recipes/finisheddinner-multidate-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/finisheddinner-multidate-06.mp4" -frames:v 1 -q:v 2 "public/recipes/finisheddinner-multidate-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-14.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-15.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-15.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-16.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-16.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-17.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-17.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-18.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-18.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-19.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-19.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-20.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-20.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/shrimpgritspt2-2020-21.mp4" -frames:v 1 -q:v 2 "public/recipes/shrimpgritspt2-2020-21.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Honey Garlic Salmon"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-01.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/honeysalmon-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/honeysalmon-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-09.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-09.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-14.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-15.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-15.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-16.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-16.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-17.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-17.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-18.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-18.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-19.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-19.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-20.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-20.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-21.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-21.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-24.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-24.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/tuscanscallops-2020-26.mp4" -frames:v 1 -q:v 2 "public/recipes/tuscanscallops-2020-26.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Breakfast Sandwich Machine"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/breakfastsandwich-2020-01.mp4" -frames:v 1 -q:v 2 "public/recipes/breakfastsandwich-2020-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/breakfastsandwich-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/breakfastsandwich-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/breakfastsandwich-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/breakfastsandwich-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/breakfastsandwich-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/breakfastsandwich-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/lemonpepper-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/lemonpepper-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/lemonpepper-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/lemonpepper-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/lemonpepper-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/lemonpepper-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/lemonpepper-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/lemonpepper-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/bananaicecream-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/bananaicecream-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/stuffedmushrooms-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/stuffedmushrooms-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/stuffedmushrooms-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/stuffedmushrooms-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ Jell-O Shots"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/jelloshots-2020-01.mp4" -frames:v 1 -q:v 2 "public/recipes/jelloshots-2020-01.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/jelloshots-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/jelloshots-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/jelloshots-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/jelloshots-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/jelloshots-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/jelloshots-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/jelloshots-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/jelloshots-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-14.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-15.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-15.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/garlicpork-2020-17.mp4" -frames:v 1 -q:v 2 "public/recipes/garlicpork-2020-17.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-10.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-10.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/cornishhens-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/cornishhens-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/thanksgiving-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/thanksgiving-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-02.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-02.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-03.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-04.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-04.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-05.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-06.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-07.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-07.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-08.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-08.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-11.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-11.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-12.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-13.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/pestocod-2020-14.mp4" -frames:v 1 -q:v 2 "public/recipes/pestocod-2020-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-03.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-03.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-05.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-05.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-06.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-06.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-12.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-12.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-13.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-13.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-14.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-14.jpg"

New-Item -ItemType Directory -Force -Path "public/recipes" | Out-Null
Write-Host "→ nan"
& $FfmpegPath -y -ss 00:00:01 -i "public/recipes/baconbrusselpizza-2025-18.mp4" -frames:v 1 -q:v 2 "public/recipes/baconbrusselpizza-2025-18.jpg"
