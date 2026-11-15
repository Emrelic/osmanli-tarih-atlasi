# BOLGE-almanya · Adım 5 — Renk (UMIT, 15 Kasım 2026)

Ölçüm: `devletler.js`'te `harita:` anahtarı bakıldı (renkler.py okunmadı/değiştirilmedi).
- `almanya`: harita "almanya". `brandenburg-prusya`, `brandenburg-markgrafligi`: "prusya". `salzburg-prens-basepiskoposlugu`: "salzburg-baspiskoposlugu".
- **`harita:` alanı olmayan** (id ile boyanır; `renkler.py BOYALAR`'da id tanımlı olmalı): bavyera, saksonya, pfalz, baden, wurttemberg, hannover, mecklenburg, schwaben-dukaligi, thuringia-landgrafligi, braunschweig-luneburg-dukaligi, teuton-devleti, magdeburg-basepiskoposlugu ve 13 yerleşimsiz künye. KAPSAM-OLCUM-1114: "harita anahtarıyla BOYALAR eşleşmeyen künye 0 (harita: ile çözülmüş)". Bu oturumda `py arac/renk_olc.py` KOŞULMADI (veri değişmedi) → ölçülmedi.
- Görsel risk (öneri, renkler.py'ye dokunulmadı): 1281-1806 Alman kutusunda %47 nokta `almanya` tek renktir; Alman mozaiğinin (elektörlük/serbest şehir/piskoposluk) ayrışması renkten değil sahipten gelir. Yeni künye (Köln/Mainz/Trier, Hamburg/Lübeck/Bremen) açılırsa her biri için BOYALAR girdisi (KASA tuz değişikliği) gerekir — ayrı onay.
- Öneri: yerleşimli olmayan 13 künye boyasız kalır, zararsız (sahibi olmayan renk haritada görünmez).
