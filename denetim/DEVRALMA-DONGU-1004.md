# DEVRALMA-DONGU-1004 — devralma çizgesinde DÖNGÜ ölçümü

DEVRALMA-DONGU · 4 Ekim 2026 · koordinatör YILDIRIM BAYEZIT
Dayanak: `denetim/HUKUM-DEVRALMA-1004.md` · `denetim/KASA-ZINCIR-1004.md`
Araç `denetim/ARAC-DEVRALMA-DONGU-1004.py` · sınav `denetim/ARAC-DEVRALMA-DONGU-SINAV-1004.py`
**YALNIZ ÖLÇÜM — veri düzeltmesi YAZILMADI.**

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (aracın ilk gerçek koşusundan önce)

Evren: `girdi.yukle()` (93 dosya, 4298 kayıt) · alanlar: kayıt `kaynak:` + `neden:` +
`s:`/`d:`/`v:`/`isg:` dönemlerinin `kaynak:`ı.

- **Karşılıklı çift (A⇄B): en az 1** — Bosna Dubiçası ⇄ Bosna Brod'u (KASA elle buldu).
  Tahminim **1–3**: Sava şeridi (Jasenovaç/Novi) ya da Batı Trakya (Sofulu/Dedeağaç/
  Dimetoka/Ferecik/Gümülcine) birbirine "ile aynı" diye atıfta bulunuyor olabilir.
- **Kendine atıf (A→A): 0.**
- **Uzun çevrim (≥3): 0–1.** KASA'nın tablosunda derinlik 3 yoktu; ama derinlik ağaç
  varsayar, yani bu öngörü zayıf bir öngörüdür.
- **ÇÖZÜLEMEDİ: çok.** KASA'nın regex'i 100'ün 65'ini çözemedi; benimki tetik
  kelimesine dayalı daha geniş bir evren tarıyor ⇒ **50–200** çözülemeyen atıf bekliyorum.
  Hepsi adıyla listelenecek.

## 1. SONUÇ — öngörü ile ölçüm

| soru | öngörü | ölçüm (8. ve son koşu) | tuttu mu |
|---|---|---|---|
| karşılıklı çift A⇄B | 1–3 | **2** | ✅ |
| kendine atıf A→A | 0 | **0** | ✅ (ama ilk koşular 1 YANLIŞ pozitif verdi, §4) |
| uzun çevrim ≥3 | 0–1 | **0** | ✅ |
| çözülemeyen atıf | 50–200 | **10 güçlü + 10 zayıf + 3 belirsiz** | ❌ öngörüm çok yüksekti: kaçırılan bağlamı bitişik tümceye bakarak çözüyorum (75 tümce) ve künye/olay/kademe atıflarını gerekçeli dışlıyorum (652 tümce) |

**Çıkış kodu 1 — iki GÜÇLÜ çevrim.** İkisi de karşılıklı çift:

```
① Bosna Brod'u (Bosanski Brod) → Bosna Dubiçası (Bosanska Dubica) → Bosna Brod'u
   Brod → Dubiça    [kaynak]  "komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi"
   Dubiça → Brod    [s[2] · d[0] · d[1]]  "gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi …"
② Dimetoka → Sofulu (Soufli) → Dimetoka                                   🆕 KASA'da YOKTU
   Dimetoka → Sofulu [kaynak] "1913-05-30 komsu SOFULU kaydindan (12 km)"
   Sofulu → Dimetoka [d[0]]   "gün komşudan: Dimetoka · TDV dimetoka — Orta Meriç bölgesinin tamamı"
```

### 1.1 🔴 Kayıt düzeyinde çevrim ≠ olgu düzeyinde döngü (elle okundu)
Araç çevrimi KAYIT düzeyinde kurar (A'nın herhangi bir alanı B'ye atıf yapıyorsa A→B).
Bulunan iki çiftin ikisinde de iki yön **FARKLI tarihleri** taşıyor:

| çift | yön | devralınan | uçtaki kaynak |
|---|---|---|---|
| ① | Brod → Dubiça | 1538 fethi (YIL) | Dubiça'nın 1538'i yalnız **Vikipedi** ("Battle of Dubica"). Brod'un KENDİ HE kaynağı **1536** diyor |
| ① | Dubiça → Brod | 1718-07-21 (GÜN) | Brod'un 1718-07-21 döneminde **kaynak alanı YOK** |
| ② | Dimetoka → Sofulu | 1913-05-30 (GÜN) | Sofulu'nun `bulgaristan-kralligi 1913-05-30` döneminde **kaynak alanı YOK** (KASA'nın B kovası) |
| ② | Sofulu → Dimetoka | 1361 (Osmanlı başı, YIL) | Dimetoka'nın `d[0]`ı **TDV dimetoka**: "zapt 1361 — YIL, gün yok" ⇒ bu yön §4'e UYGUN |

⇒ İkisi de **aynı olgunun kendi kendini doğruladığı** kapalı bir döngü değil. Ama
ikisinde de **en az bir yön kaynaksız bir uca dayanıyor** ve karşılıklılık bu
kaynaksızlığı gizliyor: her kayıt "ben komşudan aldım" diyor, komşu da "ben
senden aldım" diyor; denetimden geçen bir okuyucu iki beyanı birbirinin
dayanağı sanabilir. ① ağırdır (iki yön de zayıf: biri Vikipedi, öbürü boş);
② yarı yarıyadır (Sofulu yönü temiz, Dimetoka yönü B kovası).
📌 Olgu düzeyinde döngü (aynı tarihin A→B→A dolaşması) **bu veride YOK**, elle
iki çiftte okundu. Otomatik olgu düzeyi ölçümü aracın kapsamında DEĞİL (§6 öneri ③).

## 2. YÖNTEM

```
okuyucu   girdi.yukle() — 93 dosya, 4298 kayıt (regex İLE DOSYA OKUNMADI, D219)
metin     kayıt kaynak: + neden: + s:/d:/v:/isg: dönemlerinin kaynak:ı
          ~~üstü çizili~~ beyan okunmaz (geri alınmış iddia; 1 adet: Şeyhrumi)
tümce     ayraç " · " " — " ";" " || " cümle sonu (önünde 2 küçük harf: "St." bölünmez)
tetik     GÜÇLÜ: komşudan · emsal · en yakın kayıt · ankraj · X'dan alındı · kaydından ·
                 dayanak alındı · devral* · "<ad> günü" · "<ad> zinciri"
          ZAYIF: ile aynı · aynı gün · birebir · hizalı · ortak gün · kardeş · "<ad> kaydıyla/deseni"
dışlama   KÜNYE günü 531 · OLAY günü 48 · KADEME 34 · SINIR KATMANI/kd: 22 · MEVCUT VERİ 8 ·
          OLUMSUZ ("komşudan DEĞİL") 7 · KENDİSİ KAYNAK 2  — tümcede komşu işareti varsa
          künye/olay dışlaması UYGULANMAZ
ad        kayıt adı + parantez öncesi + parantez içleri (devlet adı OLAN parantez hariç) +
          " — " parçaları; ARAC-NORMAL-0903.norm; en uzun eşleşme önce; ardından
          "antlaşması/savaşı/sonrası" gelen ad OLAYdır, yer değil
belirsiz  çok kayda uyan ad → ana adı tek kayıtsa o; değilse BELİRSİZ kovası
bağlam    tümce adsızsa YALNIZ bitişik tümce (sonraki, sonra önceki) — kenar ZAYIF sayılır
çevrim    temel çevrimlerin tamamı (her çevrim en küçük düğümünden bir kez), tavan 20000
hüküm     1 = GÜÇLÜ çevrim · 2 = yalnız ZAYIF çevrim ya da güçlü-çözülemeyen/belirsiz atıf · 0 temiz
```

## 3. ALETİN DOĞRULUĞU — ölçüldü

| ölçü | sonuç |
|---|---|
| çizge | **436** yönlü kenar (GÜÇLÜ 309 · ZAYIF 127) · 484 düğüm · 315 devralan kayıt |
| **kapsama** — KASA'nın 69 devralmasındaki 92 elle okunmuş kenar | **86/92 = %93** |
| **kesinlik** — rastgele 30 GÜÇLÜ kenar, elle okundu (6. koşu, tohum 77) | **28/30 ≈ %93** (iki hata: gerçek hedefin yanında bağlam olarak anılan ad — Maykop→Edirne, Urmiye→Tebriz) |
| kesinlik — rastgele 30 ZAYIF kenar (5. koşu, tohum 1004) | **~%60** (Kalmar Birliği ×8, "Mohaç sonrası" ×3 — sonradan Mohaç elendi) ⇒ zayıf çevrim **1 değil 2** verir |

Kaçan 6 kenar: Drama → Praviște/Serez ("Praviste 24 km · Serez 34 km) alindi" — `·`
ad listesini böldü) · Gümülcine → Sofulu/Dedeağaç (KASA'nın kendi 2. turu bunu A'ya,
yani olay gününe taşıdı — muhtemelen doğru kaçış) · Sîva → Hârice/Ferâfire (parantez
içi liste `·` ile bölünmüş). **Üçü de aynı sınıf: parantez içindeki `·`.**

## 4. 🔴 YANLIŞ POZİTİF TARİHÇESİ — taklit sınavı bunların HİÇBİRİNİ göstermezdi
Sekiz koşu yapıldı; her biri GERÇEK veride bir sınıf yanlış pozitif ya da kaçış gösterdi:

| koşu | sınıf | vaka |
|---|---|---|
| 1 | **kendine atıf YANLIŞ** | Belgrad → Belgrad: "GÜN KOMŞUDAN: Belgrad'ın teslim günü … YOK" — ad ÖZNE (genitif), hedef değil |
| 1 | yanlış ad | «göre» → Gore · «(bölge)» → 4 kayıt · «Kırklareli» → Dereköy (Kırklareli) |
| 2 | künye dışlaması YUTUYOR | "Zincir Viyana emsali, künye penceresine göre" — 26 tümce |
| 3 | yanlış ad | «22 **Kasım** 1914» → Buraydâ (**Kasîm**) · «tur alanı» → Tûr (Sînâ) |
| 3 | olay dışlaması YUTUYOR | "Bitiş külliyatın **Adana günü**" — olay maddesi değil, komşu KAYIT |
| 4 | **kendine atıf YANLIŞ** | Krk → Krk: Krk/Cres/Rab'ın ORTAK metni "model Krk'tan alındı" — Krk'ta Krk'ın KAYNAK olduğunu söylüyor |
| 5 | parantez niteleyicisi | «Polonya günü» → Radom (Polonya) · «dolgu» → Katar Yarımadası (iç, dolgu) |
| 6 | kaçış | "ankraj Van" (sınır kayıtlarının sözcüğü) · "emsal" zayıf sayılıyordu · "Mâku'dan … alındı" |
| 7 | olay adı / fetih | «Portsmouth antlaşması» → Portsmouth (New Hampshire) ×6 · «Kutsal Roma» → Nanih Waiya · "Bolayır Gelibolu'dan ÖNCE **alındı**" (fetih) |

📌 İki kendine atıf yanlış pozitifi özellikle öğreticidir: ikisi de "A→A" çıkışını
GÜÇLÜ olarak basıyordu ve sayı bir öngörüyü (0) yalanlıyor görünüyordu. Doğru öngörü
(0) **ancak aletin iki kusuru düzeltildikten sonra** doğru ölçüldü. Sınavın ③b
sorusu Belgrad vakasını taklit olarak sabitler.

## 5. ÇÖZÜLEMEYEN / BELİRSİZ — adıyla (aletin çıktısında da basılır)

**GÜÇLÜ-çözülemeyen (10)** — hükmü 2'ye çeken liste:

| kayıt | alan | tetik | tümce |
|---|---|---|---|
| Niş | `kaynak` | devralındı | "1444-08-01 günü komşu kayıtlardan devralındı" — **komşu ADI YAZILMAMIŞ** (KASA da ölçemedi) |
| Divriği | `neden` | komşuların | "komsularin zinciriyle dolduruldu" — ad yok (ad aynı kaydın `kaynak:`ında: Sivas/Kayseri, ayrı kenar olarak VAR) |
| Arpaçay (Akyaka) | `neden` | ankraj | "Zincir bölgenin ankrajına açıldı" — ad yok (kaynak: alanında Revan, kenar VAR) |
| Digor | `neden` | ankraj | "bölge ankrajına hizalandı" — ad yok (kenar Kars/Revan VAR) |
| Jasenovaç | `neden` | emsal | "komşu emsali (**Dubiça**)" — kısaltılmış ad; tam ad `kaynak:`ta, kenar VAR |
| Bosna Brod'u | `neden` | emsal | aynı |
| Yambio | `neden` | en yakın komşu | "en yakın komşuyla boyamak §3.5.1 ihlali olurdu" — devralma DEĞİL (reddediyor) |
| Beyan K7.5 B60.5 | `neden` | komşu | "kova komşu desenden" — ad yok |
| Beyan K4.5 B62.5 | `neden` | komşu | "kova komşu merkezlerin desenine dayanıyor" — ad yok |
| Rēzekne | `kaynak` | emsal | "(emsalde de yok)" — emsalin adı önceki cümlede (Daugavpils), kenar VAR |

⇒ 10'un **6'sı** aynı kaydın başka alanında zaten kenar olarak var; **gerçek bilinmez 3**:
Niş (adsız "komşu kayıtlar") ve iki `Beyan K…` dolgu noktası. Yambio devralma değil.

**ZAYIF-çözülemeyen (10)** — hükmü değiştirmez: Vidin · Amman · Kerak · Doha · Kalmar ·
Bosna Dubiçası `d[1]` ("Bosna kayıtlarının ortak günü") · Krupa · Ostrovica · Te Waipounamu ·
Demyanskoye ("Samarovskiy ile AYNI YIL" — Samarovskiy diye bir kayıt YOK).
📌 "**Bosna kayıtlarının ortak günü**" (1908-10-05, üç kayıt) adsız bir GRUP devralmasıdır:
hangi kaydın günü olduğu yazılmamış ⇒ çevrim olup olmadığı **ölçülemedi**.

**BELİRSİZ (3):** Pucará de Tilcara «arjantin» (3 Arjantin kaydı) · Freistadt, Klagenfurt
«roma» ("Kutsal Roma" — Roma / Roma (Queensland)). Üçü de devralma hedefi değil, ad anışı.

⚠️ **Dışlanmış ama içinde kayıt adı geçen 116 tümce** (KÜNYE 94 · OLAY 15 · KADEME 7):
kenar yazılmadı. Elle 140'lık bir örnek okundu (3. koşu): çoğu künye/olay bağlamında ad
anışı, ama **Kabartay** ("1739-10-03 (Niş) yerine 1739-09-18 (Belgrad) alındı") gibi
gerçek gün devralmaları da var. Bu küme aletin **kör noktasıdır** — tamamı
`--json` çıktısının `dislanan` alanında `adlar` ile listelenir.

## 6. BULAMADIM / SINIRLAR
- Olgu düzeyinde döngü (aynı tarihin dolaşması) otomatik ÖLÇÜLMEDİ; iki çiftte elle okundu (§1.1).
- Parantez içi `·` listeleri bölünüyor (3 kaçışın sebebi) — düzeltmek ayracı parantez
  derinliğine duyarlı yapmayı ister; bu turda yapılmadı.
- Adsız grup atıfları ("komşu kayıtlar", "Bosna kayıtlarının ortak günü") çözülemez —
  bunlar aletin değil VERİNİN kusurudur: §4'ün 4. şartı "**<komşu>**" adını ister.
- ZAYIF kenarların kesinliği ~%60; zayıf çevrim bu yüzden "aday"dır (hüküm 2).

## 7. ÖNERİ — karar koordinatörde

① **`denetle.py`ye bağlama:** ŞİMDİLİK HAYIR, **bilgi kapısı** olarak EVET. Gerekçe: bugün
hüküm 1 (iki gerçek çift) — kapıya bağlanırsa ya çiftler düzelene kadar kapı hep kırmızı
ya da tavan gerekir. Önerim `ODAK-TAVAN` deseni: **bilinen çevrimler LİSTE olarak**
(`bilinen_cevrim: [[Brod, Dubiça], [Dimetoka, Sofulu]]`) beyan edilir, YENİ güçlü
çevrim 0 tolerans. Sayı tavanı DEĞİL liste — biri düzelirken yenisi yerine geçemesin.
Çözülemeyen-GÜÇLÜ 10 da aynı şekilde adıyla dondurulabilir.

② **Veri tarafı (düzeltme benim işim değil, öneri):** HÜKÜM-DEVRALMA-1004 §5'e bir satır:
*"Karşılıklı devralma yazılmaz: A, B'den alıyorsa B'nin A'dan aldığı bir alan olamaz —
ikisinden biri kaynağa bağlanır."* Dubiça/Brod için doğal çare zaten KASA'nın E
bulgusu: Brod'un kendi HE kaynağı 1536 diyor ⇒ Brod→Dubiça kenarı kaynağa bağlanınca
çevrim kendiliğinden kırılır. Dimetoka için TDV `dimetoka` 1922 diyor (KASA E kovası).

③ **Aletin devamı (istenirse):** olgu düzeyi — kenara devralınan dönemin `f/t`'sini
yazıp yalnız aynı tarihi taşıyan kenarlardan çevrim kurmak. Bugünkü iki çift o ölçüde
**düşer** (§1.1); yani o alet bugün 0 verir ve kapıya bağlanmaya daha uygundur.

## 8. SINAV
`py denetim/ARAC-DEVRALMA-DONGU-SINAV-1004.py` → **8/8**, çıkış 0.
① temiz A→B→C susuyor (0) · ② A⇄B ötüyor, tam yol (1) · ③ A→A · ③b genitifli öz-ad
SAYILMIYOR (Belgrad taklidi) · ④ A→B→C→A · ⑦ çözülemeyen listeleniyor (2) ·
⑤ **GERÇEK veride Dubiça⇄Brod** — aletin KENDİ komut satırı, KENDİ yazdırma dalı,
`PYTHONIOENCODING=cp1254` ile alt süreçte · ⑥ iz yok.
⚠️ ⑥ ilk koşuda KALDI: `git status` farkı sınavdan değil, aynı anda
`ARAC-BEKCI-NABIZ-SINAV-1003.py`'yi değiştiren başka bir oturumdandı (paylaşılan depo).
⑥ artık sınavın dokunabileceği yerlere (`data/` · `arac/` · `*dongu*`) bakıyor ve öteki
farkları adıyla basıyor — gizlemiyor.
