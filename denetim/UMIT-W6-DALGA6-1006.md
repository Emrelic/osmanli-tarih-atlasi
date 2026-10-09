# UMIT-W6-DALGA6-1006 — TR-1923 üreticisine kopya eleği + `zincir_kaynagi` yazımı

> 🔴 **KURAL: `denetim/ARAC-TR1923-YAZ-0914.py` KOORDİNATÖR KARARI OLMADAN `data/`ya
> KOŞTURULMAZ.** (Dalga 5: koşarsa 6 kaydın zinciri değişir; bu diff indikten sonra da
> geçerli.)

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (dalga 6). Kilit: `denetim/ARAC-TR1923-YAZ-0914.py`.
Ağaç: `C:\atlas-w6b` (origin/main ae2e6bbd). Talimattaki `git -C C:\atlas …` yerine
dalga 1-5'teki gibi `C:\atlas-umit`ten açıldı (aynı origin/main).
Bağımlılık: alan tanımı W9 (`UMIT-W9-ZINCIR-1006`): `zincir_kaynagi: {yer, pencere:[f,t],
tur:"birebir"|"birlesim"|"pencere"}`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- **Elek (alan tabanlı), bugünkü veride:** `zincir_kaynagi` taşıyan kayıt 0 ⇒ çıktı
  dalga 5 sınavıyla **aynı** + 28 kayda `zincir_kaynagi` eklenmesi. ① bugün GÖRÜNMEZ
  (Norapat/Kliçatak'a Revan'ın d: dönemleri hâlâ iner); ancak W9 benzeri bir beyan
  verisi simüle edilince görünür. ⇒ ①'in sınavı simülasyonla yapılmalı.
- **Serbest metin geri düşüşü** açılırsa: 28 seçimin **4–8**'inde en yakın komşu değişir
  (Kafkas 4'ü kesin: Arpaçay/Iğdır/Gümrü/Eçmiyadzin metinde "ankraj/aynı zincir/BİREBİR"
  taşıyor). Ama yanlış pozitifler de elenir: Sohum/Urmiye ("BİREBİR alıntı") komşu
  adayıysa yanlışlıkla düşer. ⇒ Öneri: **geri DÜŞMESİN** (yalnız alan); metin yalnız
  RAPOR edilsin.
- **UYARI:** geçici çıktı `girdi.yukle` ile okununca `zincir_kaynagi` için **1 UYARI
  satırı / 28 kayıt** (bugün 0).
- **Sınav ③:** bugünkü dosyayla fark = 28 × `zincir_kaynagi` + dalga 5'teki 6 kaynak
  kayması kaydı (bunlar elekten bağımsız). "Başka fark 0" şartı bu 6 kayıt yüzünden
  **harfiyen tutmaz**; beklenen fark kümesi = {zincir_kaynagi} ∪ {dalga 5'in 6 kaydı}.

## 1. ÖLÇÜM — özet
| | Öngörü | Ölçüm | |
|---|---|---|---|
| Metin geri düşüşü: komşusu değişen seçim | 4–8 | **7 / 28** (3'ü YANLIŞ eleme) | ✓ |
| Öneri | geri DÜŞMESİN | **geri DÜŞMESİN**, yalnız alan | ✓ |
| ② beyansız: eski ↔ yeni fark (`zincir_kaynagi` hariç) | 0 | **0** | ✓ |
| ① elek, iki yön | simülasyonla görünür | 4/4 ✓ (eski betik seçiyor, yeni seçmiyor) · W9 benzetimi 45 beyanlı: beyanlı komşu **0** | ✓ |
| ③ bugünkü dosyayla beklenmeyen fark | 0 (beklenen küme dışında) | **0** | ✓ |
| UYARI | 28 kayıt | **28** | ✓ |
| Diff | — | betik +30 / −0 satır · sınav yeni dosya · LF, CR 0 · `origin/main`e karşı ileri ✓ / -R ✗ | ✓ |

🔴 **ÇATIŞMA — B1 hükmü ile elek:** W9'un veri diff'i indikten sonra betik koşturulursa
4 zincirleme kaydın komşusu DEĞİŞİR (Norapat → Revan · Kliçatak → Revan · Beri →
Doğubayazıt · Küçükperveli → Kars) ve Qaţţīnah'ın birleşimi Ceylanpınar'ı kaybeder (§4.3).
B1 "4 kayıt ÇEVRİLMİYOR, devralma KALIR" diyor. Bu iki hüküm ancak **betik W9'dan sonra
koşturulmazsa** birlikte durur. Koşturulursa B1 fiilen değişir. Karar koordinatörde/Emre'de
(§6).

## 2. Serbest metin geri düşüşü — ÖLÇÜLDÜ, ÖNERİ: DÜŞMESİN
Betik değiştirilmeden, kendi seçim mantığı (`sahip`, `km`, 40 km / 2× kuralı) modülden
çağrılarak ölçüldü (`geridusus.py`, geçici çalışma alanı). Metin deseni: gün komşudan ·
birebir · deseni · kaydından · en yakın kayıt · aynı zincir · ankraj.
- Metin beyanlı (elenecek) kayıt: **144 / 4271** komşu adayı.
- Komşusu değişen seçim: **7 / 28**:
| Seçim | bugün | metin elekli | doğru mu |
|---|---|---|---|
| Norapat | Eçmiyadzin 22,2 | Revan 41,2 | ✓ (Eçmiyadzin kopya) |
| Kliçatak (Suser) | Gümrü 37,4 | Revan 73,3 | ✓ |
| Beri | Iğdır 17,5 | Doğubayazıt 43,4 | ✓ |
| Küçükperveli | Arpaçay 30,9 | Kars 44,4 | ✓ |
| Qaţţīnah (A kolu) | Ceylanpınar 4,3 | Rakka 133,4 | ✓ (Ceylanpınar ankraj kopyası) |
| **Stérna** | Orestiada 9,2 | Çirmen 27,5 | **✗ YANLIŞ**: Orestiada'nın metni yalnız bir DÖNEMDE "gün komşudan: Edirne" diyor; zincir kopyası değil |
| **Küfkaynapınarı (Azatlı)** | Havsa 11,5 | Edirne 23,2 | **✗ YANLIŞ** (aynı sebep) |
- Dalga 4'ün 20 yanlış pozitifinden 14'ü elenen kümede (Vidin, Sohum, Urmiye, Kuveyt…).
  Bugün bir sınır seçiminin yanında değiller, ama yarın olabilirler.
⇒ Metin eleği "kopya" ile "§4 dönem komşu günü"nü (meşru, tek kuşak) ayıramıyor. **Elek
yalnız `zincir_kaynagi` alanını okur.** Metin YALNIZ raporlanır; betik bunu yapmıyor,
dalga 4 aracı yapıyor.
Bedeli: W9'un veri diff'i inene kadar elek hiçbir şey elemez (bugün alan veride 0).

## 3. Betik değişikliği (`denetim/ARAC-TR1923-YAZ-0914.py`, +30 satır)
1. Belge başlığı: 🔴 KURAL "koordinatör kararı olmadan data/'ya koşturulmaz" + elek özeti.
2. `kopya_beyanli(y)` = `bool(y.get("zincir_kaynagi"))` (gerekçe ve W9 bağımlılığı işlevin
   yorumunda).
3. `main()`: kendi önceki çıktısı elendikten sonra kopya beyanlılar da komşu adaylarından
   çıkarılır. Adları `adlar`da KALIR (ad çakışması denetimi bozulmaz). Elenen sayısı basılır.
4. Her üretilen kayda `zincir_kaynagi` YAZILIR:
   - birebir: `{"yer": <kaynak>, "pencere": ["1281-01-01","1923-10-29"], "tur": "birebir"}`
   - birleşim: `[{"yer": A, "pencere": ["1281-01-01", T], "tur": "birlesim"}, {"yer": B,
     "pencere": [T, "1923-10-29"], "tur": "birlesim"}]`
   ⚠️ **W9 bağımlılığı:** W9 tanımı tek nesne veriyor. Birleşim iki kaynaklı olduğu için
   LİSTE biçimi kullanıldı. W9 listeyi kabul etmezse bu kısım yeniden temellenir.
   `kopya_beyanli` iki biçimi de okur (truthiness).
   Bugünkü veride 28 kaydın 23'ü tek nesne, 5'i liste (Qaţţīnah · Ḩīmū · Jadlā’ · Babū ·
   Gōrabī).
Yeni alan adı icat edilmedi; `zincir_kaynagi` W9'un adı. `BILINEN_ALANLAR`a eklenmedi
(motor tuzu `girdi.py`).

## 4. SINAV — `denetim/ARAC-TR1923-ELEK-SINAV-1006.py` (diff'te)
Eski betik `git show origin/main:…` ile okunur. Yeni ve eski betik aynı sarmalayıcıyla
GEÇİCİ dizine koşar. Her koşuda iki `assert`: çıktı yolu gerçek `data/` yolu değil · çıktı
geçici dizinin altında. Beyan simülasyonu `girdi.yukle`yi bellekte sarar; veri dosyası
değişmez. Koşu: `py denetim/ARAC-TR1923-ELEK-SINAV-1006.py --eski-ref origin/main` →
**çıkış 0, GEÇTİ**. Koşudan sonra `data/` değişmedi (§7).
### 4.1 ② beyansız
Eski ↔ yeni çıktı, `zincir_kaynagi` hariç: **0 fark** (28/28). 28 kaydın hepsinde
`zincir_kaynagi` var.
### 4.2 ① elek — iki yön
Revan kopyaları (Gümrü · Eçmiyadzin · Iğdır · Arpaçay · **Digor**) bellekte beyanlı:
| Kayıt | ESKİ betik seçti | YENİ betik seçti | |
|---|---|---|---|
| Norapat | Eçmiyadzin | Revan | ✓ |
| Kliçatak (Suser) | Gümrü | Revan | ✓ |
| Beri | Iğdır | Doğubayazıt | ✓ |
| Küçükperveli | Arpaçay | Kars | ✓ |
📌 İlk koşuda işaretli kümede Digor yoktu ve yeni betik Kliçatak ile Küçükperveli için
**Digor**'u seçti. Digor da bir Revan ankraj kopyası (ek26:52). ⇒ Elek yalnız beyanlı
kaydı görür; **beyanın eksiksiz yazılması (W9) eleğin doğruluk şartıdır.** Sınav bu
yüzden ikinci kolla güçlendirildi.
**①c W9 benzetimi:** dalga 4'ün 45 elle kopyası (54 − kaynak adsız 4 − bilerek ayrılmış 5,
W9 Ö1) beyanlı ⇒ 28 seçimin hiçbiri beyanlı komşu seçmiyor (**0 ihlal**). Komşusu değişen
5 seçim: Qaţţīnah (Ceylanpınar düşer) · Norapat · Beri · Kliçatak · Küçükperveli.
**①b:** Norapat ve Kliçatak'a "gün komşudan: Revan" kaynaklı birer `d:` dönemi hâlâ gelir,
ama artık komşu Revan'ın KENDİSİ. Bu tek kuşak (§4'ün izin verdiği şartlı komşu günü),
zincirleme değil.
### 4.3 ③ bugünkü dosya
Yeni çıktı (beyansız) ↔ `data/yerlesimler_sinir_{kuzey,guney}.js`: `zincir_kaynagi`
dışında farklar YALNIZ dalga 5'in 6 kaynak kayması kaydında ve yalnız `s/d/v`
alanlarında. **Beklenmeyen fark 0.** UYARI: `BILINEN_ALANLAR` dışı alan taşıyan kayıt
**28** (beklenen; W9 kaydedene dek).

## 5. Diff — `C:\atlas-umit\denetim\TR1923-ELEK-1006.diff`
- İki dosya: `denetim/ARAC-TR1923-YAZ-0914.py` (+30/−0) · `denetim/ARAC-TR1923-ELEK-SINAV-1006.py` (yeni).
- 13.748 bayt · CR **0** · LF.
- Ayrı temiz bir ağaçta (`C:\atlas-w6c`, origin/main, sınavdan sonra kaldırıldı):
  `git apply --check` **ileri ✓** · `-R` **✗**.
- ⚠️ İlk üretimde `core.autocrlf=false` ile bütün satırlar değişmiş göründü (çalışma
  kopyası CRLF, blob LF). Normalleştirme açıkken yeniden üretildi; sayılar yukarıdaki.
- **Bağımlılık:** W9'un `zincir_kaynagi` tanımı. Tanım (ad, biçim, liste kabulü) değişirse
  diff yeniden temellenir.

## 6. Hüküm isteyen
1. **B1 × elek çatışması** (§1): W9'dan sonra betik koşarsa 4 köyün zinciri değişir.
   Seçenek A: betik W9'dan sonra koşturulmaz, 4 kayıt bugünkü beyanlı hâlinde kalır.
   Seçenek B: koşturulur, B1 fiilen kalkar (Beri ve Küçükperveli Türkiye yakasında
   Doğubayazıt/Kars zincirini alır; Norapat ve Kliçatak Revan'ı). Önerim A, çünkü B1
   Emre'nin hükmü; B için yeni hüküm gerekir.
2. W9'un `zincir_kaynagi` tanımına LİSTE biçimi eklenmesi (birleşim kayıtları için).

## 7. Ağaç
`C:\atlas-w6b` (ae2e6bbd) `git status --porcelain`:
```
 M denetim/ARAC-TR1923-YAZ-0914.py
?? denetim/ARAC-TR1923-ELEK-SINAV-1006.py
```
`data/` temiz. Commit yok. Geçici dizinler `%TEMP%\tr1923_elek_*`.
