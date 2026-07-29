# Oturum 7 — Kronoloji yoğunlaştırma (Parti 7)

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-7-KRONOLOJI.md dosyasını oku ve içindeki görevi yap

Model: **Sonnet**. Hacimli içerik doldurma işi.

---

## Önce oku
`CLAUDE.md` — özellikle **§4 kaynak kuralı ve TDV ölü slug tuzağı**. Bu görevin
tek gerçek riski odur. · `VERI-YAPISI.md` — `olaylar*.js` şeması.

## Senin işin

**1453-1923 arası Osmanlı kronolojisini ay ay yoğunlaştırmak.** Bugün 799 madde
var ve iskelet sağlam; eksik olan ara dönemlerin dokusu: tahta çıkışlar, sadrazam
değişiklikleri, isyanlar, idamlar, salgınlar, yangınlar, imar faaliyetleri,
ıslahat girişimleri, kurumların kuruluşu, elçilik ve ticaret olayları.

**Yeni madde sayısı hedefi: 150-250.** Kapsam derinliğe tercih edilir ama bu
partide maddeler **tam** yazılır (başlık + detay paragrafı), çünkü Osmanlı katmanı
zaten o olgunlukta.

## Yazabileceğin tek dosya
**`data/olaylar_ek7.js`** — yeni dosya, sen oluşturacaksın.

**Başka hiçbir dosyaya dokunma.** Özellikle:
- `index.html` ve `js/app.js` — yeni veri dosyasının siteye bağlanması için bu
  ikisine satır eklenmesi gerekir ama **onu entegrasyon oturumu yapacak.**
  Sen yalnız veri dosyasını yaz.
- `data/olaylar.js` ve `olaylar_ek..ek6.js` — mevcut maddelere dokunma
- `data/yerlesimler.js` — **kesinlikle hayır**

**Commit atma. `arac/uret_petek.py`'yi çalıştırma.**

## Dosya iskeleti
```js
// ============================================================================
// DERİNLEŞTİRME PARTİSİ 7 — 1453-1923 AY AY YOĞUNLAŞTIRMA
// Kaynak yöntemi: TDV İslâm Ansiklopedisi birincil; her slug <title> ile
// doğrulanmıştır (bkz. CLAUDE.md §4).
// ============================================================================
window.OLAYLAR_EK7 = [
{ t:"1478-01-25", k:"antlasma", etiket:["antlasma","diplomasi"],
  b:"Kısa başlık", gun:"25 Ocak 1478", yer:"...", kisiler:"...",
  d:"2-4 cümlelik anlatım.", kaynak:"dogrulanmis-slug" },
];
```

---

## ⚠️ Haritaya dokunmuyorsun — ve bu bir kuraldır

Bu partinin **harita etkisi yoktur**. Yeni maddeler yalnız kronoloji akışına
girer. Bir olayın toprak değiştirdiğini düşünüyorsan **maddeyi yaz ama
`yerlesimler.js`'e dokunma**; not düş, entegrasyon oturumu değerlendirsin.

Sebebi: haritadaki her kırılmanın bir maddesi olmalı (**Değişmez 2**) ve bu
denge bugün tam oturmuş durumda — 424 kırılmanın 424'ü maddeli. Tek taraflı bir
müdahale dengeyi bozar.

---

## ⚠️ TDV ölü slug tuzağı — bu projede en çok hata bunun yüzünden çıktı

`islamansiklopedisi.org.tr/<slug>` **olmayan slug için de HTTP 200 döndürür** ve
sessizce arama sayfasına yönlendirir. "Sayfa açıldı" demek "madde var" demek
değildir. Ölü slug'ı **yalnızca sayfa başlığı** ele verir:

> `<title>` içeriği **"Arama - TDV İslâm Ansiklopedisi"** ise o madde **YOKTUR**.

Her slug'ı bu kontrolle doğrula. Doğru slug'ı bulmak için:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>` — sonuçlarda gerçek
slug'lar listelenir.

Yaşanmış örnekler: `ordu` askerî ordu maddesini açar, şehir maddesi
`ordu--sehir`'dir. `haciemirogullari`, `parga`, `canik`, `asir`, `preveze`,
`derbend`, `samahi`, `salih-reis` diye madde **yoktur**.

**En kolay yol:** zaten doğrulanmış slug kümesini kullan —
```bash
grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sed 's/kaynak:"//;s/"//' | sort -u
```
Bu küme baştan doğrulanmıştır. Yeni slug'a ihtiyacın olursa `<title>` ile doğrula.

**Vikipedi tek dayanak değildir** — hangi olaya bakacağını bulmak için kullan,
tarihi TDV'den ya da standart akademik kaynaktan doğrula. **Tarih uydurma:** gün
bilinmiyorsa `YYYY-01-01` yaz.

---

## Çalışma düzeni

Partiler hâlinde ilerle, her partiden sonra dosyayı kaydet. Oturum kesilirse
kaldığın yerden devam edebilmelisin.

1. **1453-1520** — Fâtih'in son yılları, II. Bayezid, Cem Sultan, Şahkulu
2. **1520-1566** — Kanûnî devri iç olayları, imar, hukuk, saray
3. **1566-1603** — III. Murad, III. Mehmed, uzun savaş yılları, saray nüfuzu
4. **1603-1656** — Celâlî isyanları, cülûslar, saray vakaları, Girit'in başı
5. **1656-1703** — Köprülüler, Viyana, Kutsal İttifak, Edirne Vakası
6. **1703-1774** — Lâle Devri, Patrona, ıslahat girişimleri, matbaa
7. **1774-1839** — Nizâm-ı Cedîd, Kabakçı, Alemdar, Vaka-i Hayriyye, Yeniçeri'nin sonu
8. **1839-1876** — Tanzimat, Islahat, kurumlar, Kırım, borçlanma
9. **1876-1923** — Meşrutiyet, Abdülhamid, İttihat-Terakki, savaşlar

Her parti sonunda `oturumlar/OTURUM-7-ILERLEME.md`'ye hangi dönemi bitirdiğini ve
kaç madde eklediğini yaz.

## Bitirdiğinde doğrula
```bash
node -e "global.window={};eval(require('fs').readFileSync('data/olaylar_ek7.js','utf8'));const O=window.OLAYLAR_EK7;const s=new Set();let h=0;for(const o of O){if(!/^\d{4}-\d\d(-\d\d)?$/.test(o.t))console.log('BOZUK tarih:',o.t,o.b);if(!o.b||!o.d||!o.k)console.log('EKSIK alan:',o.t,o.b);if(o.kaynak)s.add(o.kaynak);if(o.t.length===7)h++;}console.log('madde:',O.length,'| farkli slug:',s.size,'| ay hassasiyetli:',h);"
```
Ay hassasiyetli madde sayısı **mümkün olduğunca sıfır** olmalı — gün yaz.

Kullanıcıya kaç madde yazdığını, hangi dönemleri bitirdiğini ve kaç yeni TDV
slug'ı doğruladığını söyle. **Commit etme.**
