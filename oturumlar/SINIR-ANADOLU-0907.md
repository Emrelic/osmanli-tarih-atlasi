# SINIR-ANADOLU-0907 — ilerleme

> Kademe C (hukukî sınır) · bölge: Türkiye 1923 + Kafkasya + İran
> Ortak şartname: `oturumlar/SINIR-HUKUKI-ORTAK-0907.md` · şema:
> `denetim/ONERI-KADEME-C-MODEL-0907.md §②c`
> Çıktı: `denetim/SINIR-HUKUKI-ANADOLU-0907.json` (75.067 bayt)
> Ad alanı: `data/sinir_hukuki_anadolu.js` → `window.SINIR_HUKUKI_ANADOLU`

---

## ⓪ KABUL ÖLÇÜTÜ — dördü de sayıyla

```
② PAYDA — bakılan kenar                                    19
① KOVALAR
     🟢 hukuki      6   C'ye girer
     🔴 bulunamadi  7   arandı, dayanak yok → A/B'de kalır
     🟡 ic-idari    5   ÖNERİ — 1923'te uluslararası sınır DEĞİLDİ
     🟡 tanimsiz    1   ÖNERİ — 1923'te sınır HENÜZ ÇİZİLMEMİŞTİ
③ `kimlik-degil` kovası                                     0
     bölgemin 13 uç ülkesinin 13'ü de NE'de `Sovereign country`;
     Baikonur/Bir Tawil tipi girdi bölgemde YOK
④ ölçemediklerim → §④, adıyla
```

---

## ① ÖNGÖRÜLERİM — ölçümden ÖNCE yazıldı, İKİSİ ÇÜRÜDÜ

Tahtaya (M-3173) ölçüm başlamadan yazıldı. Sonuç:

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| ⓐ | kenar sayısı **20-26** | **19** | 🔴 ÇÜRÜDÜ |
| ⓑ | 🟢 değişmemiş: **yarıdan çoğu** | **4 / 19 (%21)** | 🔴 ÇÜRÜDÜ, sert |
| ⓒ | 🟡 değişmiş: **en az 2** | **3** (Hatay · Musul · Şattülarap) | 🟢 TUTTU |
| ⓓ | en az **1** kenar 1923'te iki ucu aynı kimlik | **5** | 🟢 TUTTU, tahminden büyük |

🔴 **ⓑ'nin çürümesi bu turun en öğretici sonucu.** *"Değişmedi"* demek bir
**iddiadır** ve kaynak ister; kaynak bulunamayan 12 kenarda `ne_degisti`
alanına `False` değil **`None`** yazdım.
⇒ *"Değişmedi"* ile *"değişip değişmediğini bilmiyorum"* ayrılmasaydı **12
kenar yanlışlıkla 🟢 sayılacak** ve NE'nin bugünkü çizgisi 1923 için
kullanılabilir ilan edilecekti. ***Bir öngörünün çürümesi, bir veri
kusurunu önledi.***

📌 Ve ⓐ'nın mazereti önceden yazılıydı (*"tabana duyarlı"*), ⓑ'nin **yoktu**
— o yüzden ⓑ bilgi taşıyor, ⓐ taşımıyor.

---

## ② DEVRALDIĞIM İKİ ÖNCÜL — ikisi de DOĞRULANDI, biri GÜNÜYLE

Koordinatör ikisini de `🟡 DEVRALDIM, DOĞRULANMADI` diye damgalamıştı
(*"hafızamdan"*). Kaynağa soruldu:

```
🟡→🟢 HATAY 1939   İKİ bağımsız TDV maddesi, YIL hassasiyetinde
   `iskenderun` : "1939'da Hatay Devleti'nin Türkiye'ye bağlanması üzerine…"
   `suriye`     : "1939'da … Fransa ve Türkiye Cumhuriyeti arasında yapılan
                   bir antlaşma ile Hatay Türkiye sınırlarına dahil edildi."
   🔴 GÜN TDV'de YOK ve UYDURULMADI — `degisim_t:"1939"`,
      `degisim_t_hassasiyet:"yil"` (§4: en kaba güvenli düzey)

🟡→🟢 MUSUL 1926   ve GÜNÜYLE
   `kerkuk` : "5 Haziran 1926'da Ankara'da İngiltere, Irak, Türkiye arasında
               imzalanan 'sınır ve iyi komşuluk ilişkileri' antlaşmasıyla
               İngiliz mandasındaki Irak Devleti'ne bırakıldı."
```

🔴 **AMA MUSUL'DA ASIL SONUÇ TARİH DEĞİL:** Lozan `md. 3/2` sınırı
**ERTELEMİŞ** — *"bunun dokuz ay içinde Türkiye ile Büyük Britanya arasında
dostça belirleneceği hükmüne yer verilmişti"*. ⇒ Çıpa gününde
(1923-10-29) **Türkiye-Irak kenarı henüz YOKTU.**
⚠️ Buna `bulunamadi` demek **yanlış damga** olur: aranan metin *yok değil*,
**henüz yazılmamıştı.** Koordinatörün öngördüğü kova gerçekten gerekiyor.

---

## ③ ÖNERDİĞİM İKİ KOVA — açmadım, ÖNERDİM (biçim ortak)

```
"ic-idari"   1923'te iki uç da AYNI devletin içindeydi ⇒ ULUSLARARASI sınır
             DEĞİLDİ; antlaşma aramak YANLIŞ SORUDUR.        5 kenar
"tanimsiz"   taraflar sınırın yerini 1923'te HENÜZ BELİRLEMEMİŞTİ.  1 kenar
```
Bugün `hal` alanında üç kovadan en dogrusu duruyor, öneri `hal_oneri`
alanında **ayrıca** taşınıyor — onay gelirse **mekanik** olarak taşınır.

🔴 **`ic-idari`nin dayanağı bir ölçüm:** künye taraması
(`ARAC-SINIR-ANADOLU-KIMLIK-0907.py`, 627 künye, node ile okundu) şunu
gösterdi —
```
Georgia · Armenia · Azerbaijan   1923-10-29'da CANLI atlas kimliği: 0
   ermenistan-demokratik-cumhuriyeti  bitiş 1920-12-02
   azerbaycan-demokratik-cumhuriyeti  bitiş 1920-04-27
   gurcistan-demokratik-cumhuriyeti   bitiş 1921-03-16
   ⇒ üçünün de 1923'teki kimliği `sovyet-rusya`
```
🔴 **Ve TDV çıpadan ÜÇ AY ÖNCE o çizginin hâlâ yeniden çizildiğini
gösteriyor** — `karabag`: *"Dağlık Karabağ Özerk Bölgesi'nin tesisine karar
verildi ve bu karar **24 Temmuz 1923**'te ilân edildi … Cevanşir, Şuşa,
Cebrail, **Zengezur** ve Kubatlı'nın bir kısmını kapsıyordu."*
⇒ Ermenistan-Azerbaycan için 1923'te bir *"çizgi"* aramak yalnız zor değil,
**yanlış kurulmuş bir soru** olabilir.

---

## ④ ÖLÇEMEDİKLERİM — adıyla (§⑨ damgaları)

```
⚪ ÖLÇMEDİM  1932 Türkiye-İran sınır düzeltmesi (Küçük Ağrı). Bu bilgi BENİM
   HAFIZAMDAN; TDV üç gövdede de DOĞRULAMADI (`iran` 308.849 kar ·
   `agri` 9.653 · `dogubayazit` 14.385 — "Türk-İran" dizgisi `iran`da 0 kez,
   "1932"nin beş geçişi de EDEBİYAT bağlamında: roman/hikâye yılları).
   ⇒ VERİYE YAZILMADI (§4: tarih uydurma). Akademik kaynak aranmalı.
⚪ ÖLÇMEDİM  Türkiye-Bulgaristan hattının hukukî dayanağı. `lozan-antlasmasi`
   gövdesi (19.059 kar, TAM okundu) bu sınırı HİÇ ANMIYOR; `bulgaristan`
   gövdesi (124.918 kar) "Lozan" kelimesini SIFIR kez taşıyor.
   ⇒ §4 TANECİKLİK boşluğu; akademik kaynak MEŞRU ama bu turda ARANMADI.
⚪ ÖLÇMEDİM  İran'ın doğu üç kenarının (Türkmenistan · Afganistan · Pakistan)
   hukukî dayanağı. Üç gövde de yalnız COĞRAFÎ tarif veriyor.
⚪ ÖLÇMEDİM  1975 Şattülarap Antlaşması'nın İÇERİĞİ — TDV onu ADIYLA ve
   YILIYLA anıyor, hükmünü (thalweg'e geçiş) VERMİYOR ⇒ değişimin BOYUTU
   ölçülemedi.
⚪ ÖLÇMEDİM  Moskova/Kars antlaşmalarının MADDE numaraları. `batum` (8.863) ve
   `nahcivan` (25.468) gövdeleri ÇEKİLDİ ama madde no için OKUNMADI.
   ⇒ `madde` alanı üç Kafkas kenarında "bulunamadi".
⚪ ÖLÇMEDİM  NE'nin Abhazya ve Güney Osetya'yı Gürcistan İÇİNDE göstermesi.
   Bu bir 2020'ler tercihi; 1923 için önemsiz ama C çizilirken bilinmeli.
🔴 ÖLÇÜLEMEDİ `hatay` slug'ı: HTTP 200 döndü, gövde 2.457 karakter ve
   **"Müellif" 0 kez** ⇒ BOİLERPLATE (§4④). "TDV'de yok" DEMEDİM —
   içerik ALINAMADI. (Konu `iskenderun` + `suriye` üzerinden kapatıldı.)
🔴 ÖLÜ SLUG (302, ölçüldü): `ankara-itilafnamesi` · `ankara-antlasmasi` ·
   `kars-antlasmasi` · `moskova-antlasmasi` · `musul` · `erzurum-antlasmasi` ·
   `kasr-i-sirin-antlasmasi` · `zuhab-antlasmasi` · `cezayir-antlasmasi` ·
   `istanbul-antlasmasi` · `lozan` · `karaagac` · `irak` · `ermenistan` ·
   `zengezur`
   📌 Ve bu, `CLAUDE.md §4`ün 2 Eylül ölçümünü BÖLGEMDE DOĞRULUYOR:
      ANTLAŞMA slug'ları ölü, YER/KİŞİ slug'ları canlı. Bütün antlaşma
      bilgisi YER maddelerinden geldi (`kerkuk` · `agri` · `kars` ·
      `iskenderun` · `suriye`).
```

---

## ⑤ ARAÇLARIM

```
denetim/ARAC-SINIR-ANADOLU-KENAR-0907.py    NE → kenar (19) + birebirlik sınavı
denetim/ARAC-SINIR-ANADOLU-SLUG-0907.py     TDV slug HTTP taraması
denetim/ARAC-SINIR-ANADOLU-GOVDE-0907.py    gövde çekme (SERİ, kesme YOK)
denetim/ARAC-SINIR-ANADOLU-KIMLIK-0907.py   NE adı → atlas kimliği adayları
denetim/ARAC-SINIR-ANADOLU-URET-0907.py     hüküm + geometri → çıktı JSON
```

🟢 **DEVRALDIĞIM TABANI KENDİ BÖLGEMDE YENİDEN ÖLÇTÜM** (§ortak③ *"devralma,
ama yeniden ölçme de"*):
```
KADEME-MODEL: "342/342 birebir, tolerans YOK"
BENDE       : 19/19 birebir · eksik tepe 0 / 3.060 · yalnız noktada değen 0
              değmiyor ama yakın: Iran|Kuwait 0,216° · Iran|Oman 0,442°
              ⇒ ikisi de GERÇEK boşluk (Basra Körfezi · Hürmüz), artefakt DEĞİL
```

🔴 **VE BİR ALET KUSURU KENDİ ÜZERİMDE ÇIKTI:** `node script.js arg` çağrısında
`process.argv[1]` **betiğin kendisidir**, argüman `argv[2]`dir. Betik kendini
`eval` etti ve `RangeError: Maximum call stack size exceeded` verdi.
🟢 **Ve çökmesi doğru davranıştı** (`§3.5.0`: *"bir aracın çökmesi, yanlış
cevap vermesinden İYİDİR"*) — sessizce boş dönseydi *"künye bulunamadı"*
diye 13 kimliği birden yanlış damgalayacaktım.

---

## ⑥ TESLİM DURUMU
```
✅ 19 kenar kayıtlı, geometrisi içinde, hâli damgalı
⏳ BEKLİYORUM: `ic-idari` ve `tanimsiz` kovalarının onayı (§③)
⏳ AÇIK KALEM: §④'teki altı ⚪ — hepsi akademik kaynak işi, TDV tükendi
```
