# BULGU — YOL VERİSİ ARAŞTIRMA

Oturum: YOL VERİSİ ARAŞTIRMA. `arac/`e hiç dokunulmadı, hiçbir şey indirilmedi
— yalnız ölçüldü. OWTRAD/Viabundus tekrar aranmadı (zaten ölçülmüş, §②).

## ÖZET — beş soruyla tarama, adaylar öncelik sırasıyla

| aday | kapsam | biçim | lisans | boyut | bize ne katar |
|---|---|---|---|---|---|
| 🟢 **Itiner-e** | Roma İmp. azami sınırı ~MS 150, ~4M km² — **Kuzey Afrika (Fas-Mısır) · Levant/Suriye/Kıbrıs · Anadolu (Bitinya/Kilikya/Pamfilya dâhil) · Balkanlar/Yunanistan/Dacia · İtalya · Galya · İberya · Britannia · Ren hattı** | GeoJSON/Shapefile/Geopackage/CSV, dolaysız indirme | **CC BY 4.0** ✓ | GeoJSON 78 MB · shapefile 144 MB · gpkg 33,6 MB | 14.769 kenar · 299.171 km · her kenarda TİP (ana/tali) · KESİNLİK (kesin/varsayılan/hipotetik) · TARİH ARALIĞI · UZUNLUK · **EĞİM (derece)** — bizim maliyet-mesafe motoru için doğrudan sınav takımı |
| 🟡 **ORBIS (Stanford)** | Roma dünyası ~MS 200, kara+nehir+deniz | ham veri Stanford PURL (`mn425tz9757`, **CC BY**) + GitHub (`emeeks/orbis_v2`, MIT); arayüzü ayrı, tile'lar CC BY-NC (yalnız harita zemini, veri değil) | **CC BY** (veri) — kullanılabilir | ölçülmedi (repo boyutu) | 632-678 düğüm · 1104 kenar; **SÜRE ve MALİYET taşıdığı DOĞRULANDI** (arayüz "en hızlı/en ucuz/en kısa" rotalıyor) — ama bu bir SİMÜLASYON MODELİ, kenarlar coğrafi hassasiyette çizilmiş güzergâh DEĞİL, şematik bağlantı |
| 🟡 **DARMC/MAPS (Harvard)** — Roman Road Network | Roma İmp., Barrington Atlas'a dayalı | Shapefile, Harvard Dataverse'ten dolaysız indirme | ölçülmedi (Dataverse sayfası bot-engelli, 403) | ölçülmedi | Itiner-e'den DAHA ESKİ (2008) ve muhtemelen DAHA SEYREK — Itiner-e zaten Barrington + fazlasını kapsıyor, bu ÖNCELİK KAYBEDİYOR |
| 🔴 **Pleiades** | antik dünya, dünya çapında | JSON/CSV/GeoJSON, dolaysız | açık (CC BY) | — | **YOL DEĞİL, DÜĞÜM (yer adı) gazeteri** — Itiner-e zaten Pleiades kimlikleriyle bağlı, ayrı bir kazanç değil, EN FAZLA yerleşim-eşleştirme çapraz kontrolü için yardımcı |
| 🟡 **Peutinger Tablosu** | Roma yol ağı, MS ~300 döneminin ~1200 kopyası | modern vektör digitalizasyonu **Itiner-e'nin KENDİSİ** (kaynaklarından biri); Talbert'in "Rome's World" kitabı GIS-uyumlu RASTER (vektör değil) sunuyor | kitap ticari | — | AYRI bir kazanç değil — Itiner-e onu zaten özümsemiş. Talbert rasteri yalnız görsel referans, motor girdisi olamaz |
| ⚪ **Ottoman menzil/postane ağı (c. 1830)** — akademik makale | **Osmanlı'nın KENDİSİ, 1281-1923 ufkuna doğrudan düşüyor** — TEK dönemsel eşleşen aday | Bir araştırma makalesi (academia.edu, 403/giriş engelli, İÇERİĞİ OKUYAMADIM) menzilhane kayıtlarını SAAT cinsinden mesafelerle "dijital araçlarla görselleştirdiğini" söylüyor | ÖLÇÜLEMEDİ | ÖLÇÜLEMEDİ | **İNDİRİLEBİLİR bir GIS dosyası bulunamadı** — yalnız akademik bir çalışmanın VARLIĞI doğrulandı, verisi açık depoda mı bilinmiyor. Yazara ulaşmak/DOI aramak gerekir. |
| ⛔ opengulf/ottoman-map (GitHub) | Irak/Kuveyt/Arabistan/Necid, ~1910 | shapefile+csv | belirsiz | — | **YOL VERİSİ DEĞİL** — kabile nüfusu/silah/toponim, ölçülüp elendi |

## ÖLÇTÜĞÜM

- Itiner-e'nin coğrafi kapsamı **atlasımızın en yoğun erken dönem bölgeleriyle
  (Anadolu, Balkanlar, Levant, Kuzey Afrika, Mısır) doğrudan örtüşüyor** —
  bu beş bölgenin tamamı Itiner-e'nin "regions covered" listesinde ayrı
  ayrı sayılmış (kaynak: Nature Scientific Data 2025 makalesi, PMC12592351
  üzerinden okundu).
- Itiner-e'nin her kenarında **EĞİM (average slope, derece)** alanı var —
  bu proje `arac/maliyet.py` prototipiyle AYNI türde bir veri üretiyor
  (koordinatörün §⑤'te önerdiği "türetilmiş güzergâh" fikri).
- ORBIS'in TILE lisansı (CC BY-NC) ile VERİ lisansı (CC BY, Stanford
  PURL'de) AYRI ŞEYLER — ilk bakışta "kısıtlı, kullanılmaz" denecekti,
  ikinci taramada veri tarafının açık olduğu görüldü. Bu bir uyarı: **bir
  projenin lisansını tek sayfadan okumak yanıltabilir, veri VE arayüz
  ayrı lisanslanabiliyor.**
- ORBIS'in kenarları GERÇEK coğrafi güzergâh değil, düğümler arası
  ŞEMATIK bağlantı (kendi PDF'i "network model" diyor, "route geometry"
  demiyor) — bizim harita çizim ihtiyacımıza (yol ÇİZGİSİ istiyoruz)
  Itiner-e'den ZAYIF, süre/maliyet MODELİ olarak ise güçlü.
- DARMC'nin Dataverse sayfası WebFetch'e 403 döndürdü (muhtemelen
  bot-engeli) — sayı/boyut ÖLÇEMEDİM, yalnız arama sonucu özetinden
  "shapefile, dolaysız indirilebilir" biliniyor.
- Ottoman menzil makalesinin academia.edu sayfası da 403 döndürdü
  (giriş duvarı) — VAR OLDUĞUNU doğruladım, İÇERİĞİNİ OKUYAMADIM.

## ÇIKARDIĞIM

1. **İlk kova (kaynaktan almak) için tek gerçek aday: Itiner-e.** Kapsamı,
   biçimi, lisansı, zenginliği hiçbirinin yanına yaklaşmıyor. AMA
   **1281 öncesi (MS 150) bir kesit** — kullanılabilirliği şu varsayıma
   bağlı: *Roma yol güzergâhları coğrafi olarak (dağ geçitleri, nehir
   geçişleri) Osmanlı döneminde de aynı yerlerden geçmeye devam etti.*
   Bu TARİHSEL olarak KISMEN doğru bilinir (Bizans ve Osmanlı, Roma yol
   ağının üzerine inşa etti — özellikle Anadolu'da) ama BEN BUNU
   DOĞRULAMADIM, akademik bir kabul olarak aktarıyorum; Emre/koordinatör
   karar vermeli.
2. **İkinci kova (türetmek) için Itiner-e bir SINAV TAKIMI olabilir** —
   koordinatörün önerdiği gibi: `arac/maliyet.py`nin ürettiği güzergâhlar,
   Itiner-e'nin GERÇEK Roma yollarıyla (özellikle eğim verisiyle)
   karşılaştırılıp örtüşme ölçülebilir. Bu ölçüm YAPILMADI (kod `arac/`
   altında, kilitli; ayrıca "hiçbir şey indirme" kuralına uyuldu).
3. **Osmanlı'ya özgü bir hazır veri seti YOK gibi görünüyor** — menzil
   makalesi tek umut ışığıydı ve içeriği okunamadı. Bu, "bulunamadı" değil
   "ARAŞTIRILDI AMA ERİŞİLEMEDİ" — farklı bir sonuç, ayrı işaretlendi.

## SAYIYLA

```
ölçülen aday sayısı        7  (koordinatörün 4'ü + benim eklediğim 3)
KULLANILABİLİR (CC BY)      2  (Itiner-e · ORBIS-veri)
KISMEN/BELİRSİZ             2  (DARMC · Ottoman menzil — erişim engellendi)
ELENDİ                      3  (Pleiades tek başına · Peutinger-Talbert raster · opengulf/ottoman-map)
```
