# KASA-INİŞ DENETİMİ — 23 Kasım 2026 (LAB 21 KASIM)

Ağaç: `origin/main` e8b854e95 (ayrı worktree). Ölçüm: veri Node `vm` ile yüklendi (`arac/dizin_tikla_sina.js`),
kod `git show` ile okundu. **Tarayıcıda canlı tıklama yapılamadı** (panel yalnız `file://` statik görüntü açtı;
yerel sunucu başlatma reddedildi) — aşağıdaki "tıklama" bulguları kod+veri okumasıdır, canlıda doğrulanmadı.
Canlı site (emrelic.github.io) bu oturumda açılmadı: **BORÇ: canlı doğrulama.**

## 1. Dizin yeniden tasarımı (7b551ac05)
- Yüzyıllar sekmesi: `tarih/` 21 MS + 31 MÖ dosya **var** (01–21, mo-01…mo-31). `en/history/`: MS **01–20 var, 21 YOK**;
  MÖ **28 YOK** (mo-27, mo-29 var) → `document.documentElement.lang==="en"` iken "21st century" ve "MÖ 28" satırları 404 verir.
  (`en/history/` 51 dosya = index + 20 + 30.) **BULGU 1 (düzelt: sayfa üret ya da satırı gizle).**
- Kişi tıklaması (`dzKisiOlayi`): 288 kişiden 169 bir maddeye bağlanır, 119 bağsız (tıklama sessiz). Kimlik alanı yoksa
  ad **altdizgisi** madde `kisiler:` metninde aranır → **7 yanlış bağlanma** (kişi dönemi dışı madde):
  Baltacı Mehmed Paşa → 1554 Zalm; Âlî Paşa → 1543 Segedin; Halil Paşa (Kut) → 1446 Buçuktepe; İbrâhim Paşa (Kavalalı) →
  1526 Varadin; I. Leopold → 1375 Feldkirch; Devlet Giray → 1711 Prut; Yâkub Bey (Kaşgar) → 1402 Timur.
  Neden: kısa/ortak ad (…Paşa) başka kişinin adında geçiyor, `ilk` = en eski madde. **BULGU 2:** eşleşmede kişinin `donem`i
  ile madde yılı ±60 süzgeci eksik. (Düzeltme önerisi: eşleşen maddeyi `donem` aralığıyla sınırla.)
- Devlet tıklaması (`dzDevletOlayi`): `olaylar` yalnız OLAYLAR* + `dunyaMaddeleriTopla`; veride 2315 devletten yalnız **43'ü**
  `devlet/devlet_id/taraflar` ile OLAYLAR* maddesine bağlı; kalanı `tarihAyarla(f)` yedeğine düşer. Çalışma zamanında dünya
  maddeleri eklendiği için gerçek oran daha yüksek olabilir — **ölçülemedi (canlı lazım).**
- Savaş: 168/168 `lat/lon` dolu → uçuş çalışır. Seri: 16/16 serinin savaşı var → tıklama çalışır.
- Yeni üç satır "Kartvizit" bağsız 55 → artık `dzKisiOlayi` ile aynı kural; aynı yanlış-bağ riski.

## 2. Kaynaklar sekmesi (da297043e)
- `KG.damgalar` 6 damganın hepsini tanımlı; sayılar (OLAYLAR* 5193 madde): dayanaklı 3686 · ikincil 556 · tanınmayan 873 ·
  bulunamadı 66 · kaynak yok 2 · güvensiz 10 (gizli). Toplam 5193 ✓.
- **BULGU 3:** sekme yalnız `olaylar`ı (5193) sayar; kronoloji evreninin (KRONOLOJI* 13683 madde) kaynakları dökümde YOK. Başlık
  "maddeler" diyor — kullanıcı tüm kronolojiyi sanabilir. Ya başlığa "Osmanlı + dünya listesi" yaz ya KRONOLOJI* de say.
- 873 "tanınmayan" kaynak = en büyük ikinci grup; katalogda listelenmeyen kaynak adlarını ayrıca dökmek faydalı (öneri).

## 3. Roma düzeltmesi (f872a0ef4)
- Roma Krallığı 8 madde: tarih ✓ (MÖ 753 → −0752 … MÖ 509 → −0508, astronomik). **BULGU 4:** 8 maddenin hepsi kaynakta
  "Livius 1.59-60, 2.1" gösteriyor; 1.59-60 Tarquinius'un kovulmasıdır. Romulus Livius 1.6-7, Numa 1.18, Tullus 1.22, Ancus 1.32,
  Priscus 1.34, Servius 1.41, Superbus 1.46-48 (benim hafızamdan; sayfa/kitap kontrolü yapılmadı — **doğrulanmalı**).
  Kaynak, 7 maddede maddenin neyi tarihlediğini taşımıyor.
- Cornell "s. 215-226" künye `kaynak:`ıyla aynı; bu oturumda okunmadı.
- Roma Cumhuriyeti kalan 8 maddenin 7'si hâlâ `worldhistory.org` kaynaklı (künye ic_not'u "WHE yasak" diyor — Kaynak kuralıyla
  çelişir) ve **odak_yer "Capua"** (Pön savaşları, Rubicon, Actium!). **BULGU 5:** Actium Yunanistan'dadır, Capua'ya çıkamaz;
  Rubicon Roma'nın kuzeyidir. Odak düzeltmesi gerek.

## 4. Şerit 3 sn
- `setTimeout(…,3000)` ✓ (`js/app.js` ~12028). Tıklayınca kapanma korunuyor. Canlıda zamanlama ölçülmedi.

## Özet (sayı)
7 yanlış kişi bağı · 2 olmayan en/history sayfası · 1 kaynak-sayfası uyuşmazlığı kümesi (7 madde) · 1 coğrafi odak hatası kümesi
(≥3 madde) · 873+66 zayıf kaynak damgası. **Düzeltme yazılmadı** (başkasının işi; Emre emri yalnız denetim). Betik:
`arac/dizin_tikla_sina.js` (`node`; salt okuma).
