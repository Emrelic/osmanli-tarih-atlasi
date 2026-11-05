# KRONOLOJI-1104 — öneri dosyalarının okunuşu

`oneri_001-050.tsv` (öncelik listesinin 1-50. maddeleri, 4 Kasım 2026, Sonnet alt ajan):
kaynak bulundu 36 · tarih düzelt 3 · bulunamadı 5 · çekilemedi 6.

**Bu dosya ADAY listesidir, uygulanmaya hazır değildir.** CLAUDE.md kaynak kuralı: "arama aday
üretir, GET doğrular". Ajanın beyanına göre:

- `dayanak_cumle` hücrelerinin çoğu WebSearch özetidir ("(özet)" işaretli), sayfa açılıp
  okunmadı. Açılıp okunanlar: Encyclopedia of Ukraine (32) ve TDV arama sayfası.
- Basılı neşir künyeleri (Song shi Zhonghua 1977, Consolidated Treaty Series c.64 s.453, Hoffman
  1951, Pravda 6.8.1943 vb.) çoğunlukla bellekten yazıldı; yalnız Zizhi tongjian 1956 Guji
  künyesi bir akademik bibliyografyada görüldü. Bu künyeler kütüphane kataloğuyla doğrulanmadan
  veriye yazılmaz.
- Gün teyitli (Britannica/Iranica/Treccani): 13, 20, 22-28, 34, 39, 43. Gün teyitsiz, yalnız yıl/ay:
  1, 29-33, 36-38, 40, 42, 46.

**Tarih düzeltme adayları** (ikinci kaynakla teyit gerekir):
- 15 Tantauco 1826: 14 → 18/19 Ocak (14 Ocak Bellavista olabilir).
- 44 Sardinya 1720: atlas 24 Şubat; Lahey 17 Şubat, fiilî devir 24 Ağustos (Britannica) → sınır
  değişimi fiilî devirde: 1720-08-24 adayı.
- 12 Madrid/Godolphin 1670: 8 Temmuz Jülyen → Gregoryen 18 Temmuz (VERI-YAPISI takvim kuralı).

**Gün çelişkisi:** 3 Amiens (25/27 Mart) · 35 Cenova 1797 (6/14/15 Haziran; olay hükûmet
kuruluşu) · 16 Nagpur (1853/1854) · 34 Granada (2 Ocak teyitli; Britannica Crusades "12 Ocak").

**Doğrulama geçişi sonrası (`oneri_001-050_dogrulama.tsv`):** Madrid 1670-07-18 uygun (TNA
kataloğu, birincil kayıt). Sardinya 1720-08-24 **ADAY** kalır: yalnız Britannica'ya dayanıyor,
Treccani ("Sardegna" / "Vittorio Amedeo II") ile ikinci akademik teyit bekler (EMRELİC 1 KASIM).

**Sıradaki adım (doğrulama geçişi):** her "kaynak bulundu" satırında kaynak sayfası GET ile
açılıp rakamı taşıyan cümle okunur; künye kataloğa bakılır; ancak ondan sonra veri sahibine
(KASA PAZAR) öneri olarak gider.
