# ORTAK KURALLAR — KOŞU 10 SÜRERKEN (13 Eylül 2026)

Paket 0044 şartnamelerinin HEPSİ bu dosyaya bağlıdır. İşe başlamadan oku.

## 🔒 ① DONDURMA — koşu ~19 saat (koşu 9: 19,3 sa ölçüldü)

Ölçüldü (`girdi.parmak_izi` + `girdi.motor_izi`), tahmin değil:

```
🔴 DONUK — YAZILMAZ (yayın inene kadar)
   data/yerlesimler*.js     (girdi.py GIRDI_DOSYALARI, 79 dosya + göl)
   data/devletler.js        (motor koşu başında KOPYALIYOR)
   arac/uret_petek.py · arac/renkler.py · arac/girdi.py
   ⇒ değişiklik gerekiyorsa: denetim/YAMA-<ADIN>-0913.json — koordinatör indirir

🟢 SERBEST — motor okumuyor
   data/olaylar*.js · data/kronoloji*.js · data/savaslar.js
   js/app.js · css/style.css · arac/denetle.py · arac/renk_olc.py
   denetim/ · oturumlar/
```
⚠️ Koşunun *"girdi anlık görüntüsü alındı, SERBEST"* satırı yayınlanabilirlik
hakkında DEĞİLDİR (`CLAUDE.md §7`).
⚠️ **Zincir ~19 saat sonra `git add -A -- data index.html` ile YAYINLIYOR.**
Serbest bir `data/` dosyasına yazdığın her şey o anda yayına girer ⇒ **her
kayıtta dosya TAM ve AYRIŞTIRILABİLİR olmalı.** Yarım dosya `denetle.py`yi
düşürür ve yayını durdurur.

## 📡 ② HABERLEŞME — tahta, yön yön

```
SEN -> KOORDİNATÖR   HER RAPOR TAHTAYA
   py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "..."
   🔴 --kime "1.MURAT"  — "KOORDINATOR" AYRI KUTU, okunmuyor
   uzun metin -> denetim/<DOSYA>.md, mesajda YOLUNU ver
SEN -> ÖTEKİ İŞÇİ    yatay konuşma SERBEST, TAHTADAN (§7.1③)
send_message        YALNIZ işi DURDURAN bir engelde ve tahta çalışmıyorsa
```
**Ne zaman — dördü de ZORUNLU (§7.1②):**
```
AÇILIŞ    "açıldım, şartnameyi okudum, şu dosyalar bende"
GİDİŞAT   bir kalem bitince HEMEN — biriktirme
AKSAKLIK  engel · kaynak çelişkisi · beklenmedik sayı · yetki dışı
          -> İŞİ BİTİRMEDEN, BEKLETMEDEN (§7.1⑥)
TESLİM    SAYIYLA + dosya yolu + NE ÖLÇEMEDİM
          (bulunamadı / ölçülemedi / okumadım — üç ayrı damga, D107)
```
🔴 Kritik mesajı yazdıktan sonra `tahta.py oku` ile GERİ OKU — "yazıldı"
cevabı teslim kanıtı değil (§7.1⑤b).
🔴 Kendi pencerene yazdığını koordinatör GÖRMEZ (§7.1①).
🔴 Commit teslim değildir; teslim MESAJDIR (§7.1⑤).

## 🧭 ③ ÇALIŞMA DİSİPLİNİ — bu projede ölçülmüş hatalardan

```
KAYNAK    §4 — TDV birincil; dışarı çıkarsan akademik. Forum · blog ·
          içerik çiftliği · YZ metni · popüler tarih sitesi YASAK.
          Vikipedi TEK DAYANAK DEĞİL. Tarih UYDURMA: gün yoksa YYYY-01-01,
          yıl yoksa `bulunamadı`.
TDV SLUG  302 = ölü · 200 = var AMA GÖVDEYİ OKU (ordu/saray/cin tuzağı).
          OLAY slugları çoğu zaman ölü — bilgi YER/KİŞİ maddesinde durur.
AD ARAMA  Bir adı "atlasta YOK" demeden önce 3 KM KOMŞULUK TARAMASI yap.
          Dün koordinatör üç kez ad aramasıyla yanıldı: Gvalyar (Gwalior) ·
          Şehirköy (Pirot) · "Farafra" -> Ferâfire 0,0 km.
KOORDİNAT Alanlar `lat:` / `lon:` — `y` / `x` DEĞİL. Dün bir ölçüm
          olmayan alanı okudu, her pencere BOŞ döndü (boş küme her
          öngörüyü doğrular).
SÜZGEÇ    Bir grep/regex kendi görmediğini "yok" gösterir (dün "Cizre 234
          yıl sahipsiz" böyle doğdu — gerçek 7,7 yıl, zaten beyanlı).
İKİ UÇ    Bir sınırı kaydırırsan öbür tarafta delik/fazlalık doğuyor mu (§3.5.1)
KUSUR DEĞİL  Dünkü paketin 6/19 maddesi "zaten doğru" çıktı ve üçünde
          düzeltme veriyi BOZACAKTI (Erzurum 1518 deliği TDV'nin kendi
          tarifi). "Teyit et" diyen maddeye önce ölç, sonra hüküm.
YENİ DOSYA  "yeni" dediğin her dosya: git log --oneline -1 -- <dosya> BOŞ
          dönmeli. Dönmüyorsa DUR — içerik başkasının işi.
AD ALANI  data/<tur>_<ek>.js -> window.<TUR>_<EK> (§7)
D022      ölçümden ÖNCE öngörünü yaz.
```

## ④ COMMIT
Yalnız **kendi** `denetim/` ve `oturumlar/` dosyaların, **ADIYLA**; pathspec
`add`de VE `commit`te; `git show --name-only` ile doğrula. Dizin pathspec'i
ve `git add -A` YASAK. `data/` commit ETME — koordinatörün.

## ⑤ PAKET
`C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0044\PARTI.md`
Görseller aynı dizinde. Görsel metnine göre ~30 kat pahalı — yalnız metin
yetmediğinde aç ve açtığını raporla.
