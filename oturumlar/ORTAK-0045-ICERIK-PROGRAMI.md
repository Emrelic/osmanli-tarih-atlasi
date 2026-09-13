# ORTAK — PAKET 0045 İÇERİK PROGRAMI (13 Eylül 2026)

**Önce:** `CLAUDE.md` (özellikle §1.6 · §4 · §7 · §7.1) · `oturumlar/ORTAK-KOSU10-KURALLARI.md`
(dondurma + tahta protokolü — BAĞLAYICI) · `ONCELIK.md`
Paket: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0045\PARTI.md`

## ① NEDEN BU BİR PROGRAM, PARTİ DEĞİL — ölçüldü
Emre'nin maddeleri "TÜM savaşlar · TÜM antlaşmalar · TÜM padişahlar" diyor:
```
savaş maddesi 1288 (çekirdek olaylar* 370) · antlaşma 548 (152) · cülus 303 ·
padişah vefatı 245 · imar/mimari 373 · kültür-sanat 553 · paşa geçen 527
```
⇒ Bu turun işi **PİLOT**: Emre'nin **adıyla saydığı örnekler** + şema + sayım.
Toplu üretim pilot beğenilince, aynı şemayla çok kıtaya yayılır.
Pilot KALİTESİ bütün programın kalitesini belirler — acele etme, kaynaksız yazma.

## ② ALTYAPI ZATEN VAR — ölçüldü (KITA 17, D045)
```
EK OKUMA   data/ekokuma.js (9 kart) · js/app.js:6481 "EK OKUMA ... ve MERAK"
           EKOKUMA_TUR (app.js:6524) TAM 11 TÜR:
             içerikli     sebep-sonuc (7) · merak (17) · antlasma (41/41, ANTLASMALAR'a bağlı)
             kurulu, 0 kart   magazin
             buton var, içerik 0   tartisma · teknik-bilimsel · kimdir · dis-yankilar ·
                                   kahramanlik · menkibeler · sok-haberler
           kart alanları: id tur kisa sebep sonuc bag metin kesinlik zincir olay kaynak
           🔑 `olay:[...]` bağlama deseni VAR — yeni bağlama alanı İCAT ETME
           🔑 `kesinlik:` ZORUNLU (TASARIM-EKOKUMA.md belkemiği)
GÖRSEL     kronoloji verisinde `gorsel:` alanı SIFIR · şema önerisi
           `denetim/ONERI-GORSEL-0907.md` (7 Eylül) · padişah portreleri
           `assets/portreler/` (36, kamu malı)
EDEBİYAT   KITA 17'nin "edebiyat" tür önerisi: `denetim/SEMA-EK-OKUMA-KULTUR-0913.md`
```
🔴 **YÜKLEYİCİ (D099):** `data/ekokuma.js` statik yükte değil, app.js dinamik
yüklüyor. Yeni bir dosyaya yazarsan app.js onu GÖRMEYEBİLİR. İlk iş:
`ekOkumaMerakYukle` hangi dosyaları okuyor, ÖLÇ. Yeni dosya gerekiyorsa gereken
app.js satırını tahtadan **KITA 12'ye** (app.js'in tek sahibi) ve bana yaz.

## ③ DOSYA SAHİPLİĞİ — her tür KENDİ dosyasında
```
data/ekokuma.js          DOKUNMA (mevcut 9 kart)
data/ekokuma_<tur>.js    SENİN — window.EKOKUMA_<TUR>  (önce git log sınavı)
data/olaylar*.js         KITA 14'ün — maddeye alan EKLEME; kart `olay:` ile bağlanır
js/app.js                KITA 12'nin — değişiklik gerekiyorsa İSTE
```
⚠️ `data/ekokuma_*` motor girdisi DEĞİL (serbest) ama zincir ~19 sa sonra
`git add -A -- data` ile yayınlıyor ⇒ dosya her kayıtta TAM ve ayrıştırılabilir.

## ④ 🔴🔴 TELİF VE KAYNAK — KIRMIZI ÇİZGİLER
```
METİN   Kendi cümlelerinle YAZ. TDV/akademik metni KOPYALAMA, uzun alıntı yok —
        özetle ve kaynağı `kaynak:`a yaz. Alıntı gerekiyorsa en çok 1-2 cümle.
        16. yy metni kamu malı; MODERN çeviri/sadeleştirme/şerh TELİFLİ.
GÖRSEL  YALNIZ kamu malı / CC0 (§1.6). CC-BY-SA DEĞİL. Wikimedia Commons'ta
        lisansı sayfadan OKU ("PD-old", "PD-Art", "CC0") ve `gorsel_kaynak:`
        alanına dosya sayfası adresi + lisans yaz. Dayanağı olmayan "portre"
        YOK — yakıştırma/temsilî görsel UYDURMA sayılır.
KAYNAK  §4: TDV birincil · dışarısı akademik · forum/blog/içerik çiftliği/YZ
        metni/popüler tarih sitesi YASAK · Vikipedi TEK DAYANAK DEĞİL.
        TDV'de OLAY slugları çoğu ölü — bilgi YER/KİŞİ maddesinde (§4).
TARİH   uydurma yok · `kesinlik:` alanı dürüst.
```

## ⑤ TESLİM
Tahtaya, `--kime "1.MURAT"`, sayıyla: kaç kart yazıldı · kaçı kaynaklı · kaç
görsel lisansı doğrulandı · ne BULUNAMADI. Açılış mesajı ZORUNLU.
COMMIT: yalnız kendi `denetim/` ve `oturumlar/` dosyaların, ADIYLA. `data/` commit ETME.
