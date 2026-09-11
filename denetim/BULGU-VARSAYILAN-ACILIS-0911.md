# VARSAYILAN AÇILIŞ — teslim

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (KITA 6)
`index.html` düzeltildi. `data/`/`arac/` donuk, dokunulmadı.

---

## ① DOĞRULAMA — koordinatörün okuması ölçüldü, DÜZELTİLDİ

Koordinatör ekran görüntüsünden okumuştu, ben `index.html`'in kendisinden
(gerçek `checked` niteliği) ve TEMİZ bir açılışta (`localStorage.clear()`
sonrası) doğrudan DOM'dan ölçtüm:

```
              KOORDİNATÖRÜN         BENİM ÖLÇÜMÜM        SONUÇ
              İSTEDİĞİ (Emre)       (değişiklikten önce)
⓪ altlik      ✅ açık               ✅ açık               zaten doğru
① cografya    ✅ açık               ✅ açık               zaten doğru
② yerlesim    ✅ açık               ✅ açık               zaten doğru
③ yollar      ☐ kapalı             ✅ açık   🔴          DÜZELTİLDİ
④ siyasi      ✅ açık               ✅ açık               zaten doğru
⑤ yumusak     ✅ açık               ☐ kapalı  🔴          DÜZELTİLDİ
⑥ tani        ☐ kapalı             ☐ kapalı              zaten doğru
⑦ kure        ✅ açık               ☐ kapalı  🔴          DÜZELTİLDİ
bölge         "Tüm imparatorluk"   "Tüm imparatorluk"    zaten doğru
```

⇒ Koordinatörün "③ ve ⑥ boş, düşük çözünürlükte emin değilim" notu
KISMEN doğruydu: ③ gerçekten AÇIKTI (değiştirilmesi gerekiyordu), ⑥
zaten KAPALIYDI (dokunulmadı). Ayrıca ⑤ ve ⑦'nin de değişmesi gerektiği
ölçümle netleşti.

---

## ② KULLANICI TERCİHİ SAKLANIYOR MU — HAYIR

`js/app.js`'te `localStorage` kullanımı tarandı (30+ kullanım) —
`data-katman` kutularının HİÇBİRİ için bir kayıt anahtarı YOK. (Lejant,
duygu ikonları, panel kademesi, uçuş kipi gibi BAŞKA ayarlar
saklanıyor, ama bu 8 katman DEĞİL.)

⇒ **Bu 8 kutu HER AÇILIŞTA `index.html`'deki `checked` niteliğinden
taze okunuyor** — eski/yeni kullanıcı ayrımı YOK, DEĞİŞİKLİK HERKESİ
aynı şekilde etkiliyor. Koordinatörün endişesi (☟) yersiz çıktı, ama
sormadan varsaymamak doğruydu.

---

## ③ SINANDI — DOM düzeyinde tam, GÖRSEL düzeyde EKSİK

⚠️ **Bu turda da ortam çok yavaştı** (aynı makinede çok sayıda paralel
oturum) — `harita.loaded()` 70+ saniyede tetiklenmedi, EKRAN GÖRÜNTÜSÜ
alınamadı. `denetim/BULGU-C-KAPSAMA-POLIGONU-0911.md`'deki AYNI kısıt.

**Alınabilen kanıt** (`localStorage.clear()` + temiz sayfa yükleme,
`harita` hazır olmadan da geçerli — statik DOM):
```
checkbox durumları  {"altlik":true,"cografya":true,"yerlesim":true,
                      "yollar":false,"siyasi":true,"yumusak":true,
                      "tani":false,"kure":true}          ✅ TAM EŞLEŞME
bölge değeri         ""  (Tüm imparatorluk)               ✅
konsol hatası         0 (sayfa yükleme + toggle sırasında) ✅
kutu kilitli mi        HAYIR — ③'ü elle işaretleyip
                       değiştirebildim, `disabled` DEĞİL   ✅
diğer düğmeler         32 buton bulundu, hiçbiri disabled,
                       `btn-dizin`/`btn-cografya`/
                       `btn-tamekran` var ve BUTTON         ✅ (yapısal)
```
🔴 **ÖLÇÜLEMEDİ** (harita hiç `loaded()` olmadığı için):
- Gerçek katman görünürlüğünün (Voronoi/petek dolgusu) `checked`
  durumuyla EŞLEŞTİĞİNİN görsel kanıtı
- `btn-motor-hatlari` id'si BULUNAMADI (32 butonun içinde başka bir id
  altında olabilir — koordinatörün andığı "Motor tanı hatları" muhtemelen
  `data-katman="tani"` kutusunun kendisi, ayrı bir buton değil; bunu
  KARIŞTIRMIŞ olabilirim, DOĞRULANMADI)

---

## SONUÇ

3 kutu (③ kapat, ⑤ aç, ⑦ aç) `index.html`'de düzeltildi. Kullanıcı
tercihi hiç saklanmadığı için değişiklik HERKESİ etkiliyor (beklenen).
DOM/etkileşim düzeyinde tam doğrulandı; GÖRSEL doğrulama ortam
yavaşlığı yüzünden `ölçülemedi` — bir sonraki fırsatta (sistem yükü
düşünce) ekran görüntüsüyle tamamlanmalı.
