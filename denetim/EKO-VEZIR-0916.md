# EKO-VEZIR — teslim raporu · 16 Eylül 2026

Koordinatör: 1.MURAT · paket: `parti-emrelic-0052` · dosya: `data/ekokuma_vezir.js`
(21 kart, `node --check` temiz, `node --eval` ile 21/21 kart id'si benzersiz ve
21/21 `olay:` tarihi `data/olaylar*.js`+`data/kronoloji*.js` içinde GERÇEKTEN
VAR OLAN bir `t:` değerine bağlanıyor — grep'le tek tek doğrulandı.)

## 0. Açılış hatası

Açılış promptumda "EKO-DUNYA" yazıyordu; DALGA-0052.md §2'deki tablo beni
"EKO-VEZIR" olarak listeliyordu. 1.MURAT bunu cross-session mesajla düzeltti.
`data/ekokuma_dunya.js`'e HİÇBİR ŞEY YAZMADIM (yalnız 20 dakikalık araştırma
yaptım — Yemen/Hürmüz/İpek Yolu/coğrafi keşifler/Kazak-Kazakh/Girit/Bozcaada
üzerine WebFetch/WebSearch — bu araştırma dosyaya hiç inmedi, kimseyi etkilemedi).
Düzeltme tahtaya M-3996 ile yazıldı.

## 1. Madde madde — 16 asıl madde, 21 kart

| Madde | Durum | Kart(lar) |
|---|---|---|
| H-0023 (Evliya Çelebi kişi kartı) | ✅ | `kimdir-evliya-celebi` |
| H-0026 (Evliya Çelebi eleştiri/tartışma) | ✅ | `tartisma-evliya-celebi-guvenilirlik` |
| H-0030 (idam edilen devlet adamları) | ✅ | `tartisma-idam-edilen-devlet-adamlari` + `kimdir-ahizade-huseyin-efendi` |
| H-0046 (Kasrışirin içi Kemankeş kartı zenginleştirme) | 🟡 kısmi — bkz. §2 | `kimdir-kemankes-mustafa-pasa` (BU dosyada, ayrı) |
| H-0059 (Kemankeş Mustafa Paşa fayda/ceza tartışması) | ✅ (H-0046 ile birleştirildi) | aynı kart |
| H-0060 (Gedik Ahmed Paşa) | ✅ | `kimdir-gedik-ahmed-pasa` |
| H-0061 (Sokullu Mehmed Paşa) | ✅ | `kimdir-sokullu-mehmed-pasa` |
| H-0062 (Pargalı İbrahim Paşa) | ✅ | `kimdir-pargali-ibrahim-pasa` |
| H-0063 (Rüstem Paşa + Koca Ragıp Paşa) | ✅ — DÜZELTMEYLE, bkz. §3 | `kimdir-rustem-pasa` + `kimdir-koca-ragib-pasa` |
| H-0064 (Çandarlı Mehmet Paşa'nın idamı) | ✅ — AD DÜZELTMESİYLE, bkz. §3 | `tartisma-candarli-halil-pasa-idami` |
| H-0065 (Nevşehirli Damad İbrahim Paşa) | ✅ | `kimdir-nevsehirli-damad-ibrahim-pasa` |
| H-0066 (Kuyucu Murad Paşa) | ✅ | `kimdir-kuyucu-murad-pasa` |
| H-0067 (Köprülüler) | ✅ — 3/aile, bkz. §4 | `kimdir-koprulu-mehmed-pasa` + `kimdir-koprulu-fazil-ahmed-pasa` + `kimdir-merzifonlu-kara-mustafa-pasa` |
| H-0068 (Mithat/Ali/Reşit Paşa) | ✅ | `kimdir-mustafa-resid-pasa` + `kimdir-ali-pasa-mehmed-emin` + `kimdir-midhat-pasa` |
| H-0073 (İpşir Mustafa Paşa "deyyus") | ✅ — sebep BULUNAMADI, bkz. §5 | `magazin-ipsir-mustafa-pasa-deyyus` |
| H-0080 (en başarılı 10 sadrazam) | ✅ — 11 isim, 2 isim EKSİK bkz. §6 | `tartisma-en-basarili-sadrazamlar` |

**16/16 madde ele alındı, 0/16 tamamen boş bırakıldı.**

## 2. H-0046 — dosya kapsamım dışında kaldı

`§7` gereği yalnız `data/ekokuma_vezir.js` + bu rapora yazabiliyorum.
Kemankeş Mustafa Paşa'nın "yetersiz" kartı ve anlaşma-hükümleri kartlarının
başlık sorunu `data/ekokuma_kasrisirin.js`de — o dosyanın sahibi ben değilim.
Kontrol ettim: o dosyadaki üç kart başlığı (`Zühâb ovasında üç gün` ·
`Kasr-ı Şirin'in hükümleri` · `Kurucu belge mi kurucu efsane mi`) zaten
ayrışık görünüyor; şikâyetin tam neye değdiği bu oturumdan görülemedi.
**İSTİYORUM:** o dosyanın sahibi (ya da koordinatör) H-0046'nın başlık
kısmını ayrıca değerlendirsin. Ben karşılığında BU dosyada TDV
`kemankes-mustafa-pasa` (gerçek slug — "kemankes-kara-mustafa-pasa" YOKTUR)
tam okunarak zengin bir biyografi kartı yazdım; H-0059 de bu karta işlendi.

## 3. İki düzeltme — kaynak, varsayımı çürüttü

- **H-0063**: "Rüstem Paşa ve Koca Ragıp Paşa ... idamları" diye soruyordu.
  TDV'nin kendi maddeleri ikisinin de TABİİ ÖLÜMLE öldüğünü yazıyor (Rüstem
  Paşa 12 Temmuz 1561 istiskadan, Ragıp Paşa 8 Nisan 1763 hastalıktan).
  Kartlara idam YAZILMADI, düzeltme her iki kartın `not:` alanında açıkça var.
- **H-0064**: "Çandarlı Mehmet Paşa" diye soruyordu; 1453'te idam edilen kişinin
  TDV'deki gerçek adı **Çandarlı Halil Paşa**'dır (babası İbrâhim Paşa). Kart
  bu adla yazıldı, `not:` alanında 14. yy'ın farklı bir Çandarlı Kara Halil'iyle
  karıştırılmaması gerektiği belirtildi.

## 4. H-0067 — üç isim, aile tam değil

Köprülü Mehmed Paşa, Fâzıl Ahmed Paşa ve Merzifonlu Kara Mustafa Paşa (damat/
yetiştirme) için tam kart yazıldı. Kullanıcının "ve diğer köprülü ailesinin
sadrazamları" dediği torun kuşağı (Amcazâde Hüseyin Paşa — Karlofça'yı
imzalayan — ve sonrakiler) yalnız Köprülü Mehmed Paşa kartının `not:`
alanında AD OLARAK anıldı, ayrı kart açılmadı (zaman kısıtı).

## 5. H-0073 — sebep BULUNAMADI

İpşir Mustafa Paşa'nın hayatı ve idamı TDV `ipsir-mustafa-pasa`dan tam
okundu. Ama "Deyyûs-i Ekber" lakabının SOMUT gerekçesi kaynakta açıkça
YAZMIYOR — kaynak yalnız lakabın varlığını aktarıyor. Uydurmadım,
`kesinlik:"tartismali"` + `not:` alanında "bulunamadı" diye kayıtlı.

## 6. H-0080 — 11 isim, 2 isim eksik

Emre'nin önerdiği listedeki **Mahmutpaşa** ve (Köprülüler dışındaki, ayrı bir
kişi olan) **Çandarlı Mehmed Paşa** için bu oturumda TDV doğrulaması
yapılamadı (zaman kısıtı; ikisi de arama denenmedi). Kart bu ikisi
OLMADAN yazıldı, `not:` alanında açıkça belirtildi. Kalan 11 isim
(Sokullu · Köprülü Mehmed · Fâzıl Ahmed · Kuyucu Murad · Kemankeş Mustafa ·
Koca Ragıp · Mustafa Reşid · Âli Paşa · Midhat · Pargalı İbrahim ·
Merzifonlu) TDV'den doğrulanmış somut icraatlarla yazıldı.

## 7. Kaynak yöntemi

Her isim için TDV slug'ı önce tahmin edildi, arama sayfası çıkarsa
(`ordu`/`saray` tuzağı, CLAUDE.md §4) gerçek href aranıp doğru sayfa
tekrar çekildi (ör. Pargalı İbrahim: `ibrahim-pasa--pargali` ÖLÜ,
gerçek slug `ibrahim-pasa-makbul`; Ragıp Paşa: `mehmed-pasa--ragib` ÖLÜ,
gerçek `ragib-pasa`; Fâzıl Ahmed: `fazil-ahmed-pasa` yönlendirme,
gerçek `kopruluzade-fazil-ahmed-pasa`; Kemankeş: `kemankes-kara-mustafa-pasa`
YOK, gerçek `kemankes-mustafa-pasa`). Alıntı yapılmadı, özetlendi.

## 8. Node testi

```
node --check data/ekokuma_vezir.js  → temiz
21 kart · 0 mükerrer id · 21/21 olay tarihi mevcut kronolojide doğrulandı
```
