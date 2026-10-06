# GLM1-TDV-KESIK-1006 — TDV önbelleğinde kesik gövde sayımı (şartname: oturumlar/GLM-GOREV-1006.md)

Durum: **BİTTİ** (6 Ekim 2026, GLM1) — teslim üçlüsü §3'te.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (kural ⑦; sonradan DEĞİŞTİRİLMEZ)

Evren şartnamede 35 kova · 2.682 dosya — yerelde DOĞRULANDI (35 · 2.682).

Korpus imleme taraması (HTTP'siz, aday ölçümünden önce yapılan biçim keşfi):
```
0 bayt (boş) dosya          482   (%18,0)
"KAYNAKÇA" geçen             2   ← şartnamedeki sözcük dosyalarda YOK DENECEK kadar az
"BİBLİYOGRAFYA" geçen     1.216   ← gerçek bölüm-sonu imi bu
"Her hakkı mahfuzdur"      1.312   ← bütün-sayfa dökümü ailesinin dipnot imi
```

**Yorum (kural ⑦'ye göre öngörünün parçası):** önbellek aletleri üç aile: ① bütün
sayfa dökümü (dipnot imi VAR — W16/W19-g/W23 ailesi) ② gövdeyi ilk BİBLİYOGRAFYA'da
kesen aile (çıktıda sözcüğün KENDİSİ DE OLMAZ — W19-varsayılan/W22) ③ arada kalanlar.
Kesik gövde yalnız ② ailesinde VE madde ÇOK BÖLÜMLÜYSE doğar (tek bölümlüde kesim
yalnız kaynakçayı atar, gövde tamdır). Çok bölümlü madde TDV'de azınlıktır
(hindistan sınıfı: büyük yer/kavram maddeleri).

**Sayı öngörüleri:**
| Soru | Öngörü | Mekanizma |
|---|---|---|
| kesik_adayi=1 (aşama 1) | **≈ 670** (%25'i dolu dosyaların) | ② ailesi ≈ dolu 2.200'ün üçte biri |
| KESIK (aşama 2, oran<0,9) | **≈ 70** | adayların ~%10'u çok bölümlü (hindistan sınıfı seyrek) |
| kontrol grubunda yanlış-negatif | **0-2** | dipnotlu aile bütün sayfayı döker, kesik olamaz |
| BOŞ (0 bayt) | 482 (ÖLÇÜLDÜ, yukarıda) | çekim hatası sınıfı — oran tanımsız, KESIK değil |

**Birim kararı (beyan):** `oran = onbellek_bayt / canli_bayt`; `canli_bayt` =
düzeltilmiş çıkarıcının (`ARAC-TDV-CIKARICI-1006.tam`) **gövde**sinin (kaynakça
HARİÇ — çıkarıcının kendi sözleşmesi: "kaynakçadaki rakam/ad destek değildir")
UTF-8 baytı. `onbellek_bayt` = disk baytı. Gerekçe: ölçülen şey gövde kapsaması;
kaynakça dahil edilse tek bölümlü maddeler de eşik altına düşer, sınıflar karışır.

**Aday kuralı (beyan — şartnamedeki "KAYNAKÇA" dosyalarda geçmediği için):**
```
bayt = 0                              → satır yazılır, aday=0 (sınıf BOŞ)
"Her hakkı mahfuzdur" VAR            → aday=0 (bütün sayfa ailesi — dipnot imi)
KAYNAKÇA VEYA BİBLİYOGRAFYA YOK      → aday=1 (başlıkta kesen alet: sözcük çıktıda olmaz)
VAR, ilkinden sonra ≤200 bayt kaldı  → aday=1 (şartname kuralı birebir)
VAR, ilkinden sonra >200 bayt        → aday=0 (bibliyografya izleyen metin: kesim gövdeyi kesmedi)
```
`kaynakca_sayisi` sütunu = KAYNAKÇA + BİBLİYOGRAFYA geçiş sayısı TOPLAMI (iki yazım).

## 1. AŞAMA 1 — ücretsiz eleme (HTTP yok) — BİTTİ

Çıktı: `denetim/GLM1-TDV-KESIK-ELEME-1006.tsv` (2.682 satır + başlık).

**Baş sayılar:** `TOPLAM 2.682 · BOŞ 482 · aday 886 · dolu-aday-değil 1.314`

Aday havuzu açılınca **heterojen** çıktı — sınıf sayımı (her aday dosyanın içeriği
okunarak, adıyla değil içeriğiyle sınıflandı):

| Sınıf | Adet | Kanıt (dosya içeriği) |
|---|---|---|
| ÖLÜ SLUG kaydı | **482** | gövde yok; dosya içeriği birebir `302\n` — alet HTTP kodunu gövde yazmış |
| ARAMA sayfası dökümü | **379** | `ARAMA-<sorgu>` adlı dosyalar; içerik 76 bayt site menüsü (`duyurular · gecen-ayin-ilk-20-si …`) |
| TDV-dışı kaynak dökümü | **18** | `DIS-*` (9: mfa.gov.tr, ushmm, britannica…) · `saho-*` (8: sahistory.org.za) · `strategic-dp` (1: VAKANÜVİS dergisi) — URL dosyanın İLK SATIRINDA kayıtlı |
| ALET ARIZASI (ascii) | **4** | `kamboçya · moğollar · moгol · mustegan​em` — içerik Python hatası: `'ascii' codec can't encode character …` |
| TDV gerçek aday | **4** | yukarıdaki 4 ascii-arızalı (TDV slug'ı canlıdan ölçülebilir; önbellek tarafı hep boş) |
| boş çekim (`' '`) | **3** | tek boşluk |

(482+379+18+4+3 = 886 ✓)

**Adayların dağılımı tek kovada yoğun:** ONCE1281-YERLESIM 861/886 aday — o kova
1.129 dosyanın 861'i çekim-artığı (379 ARAMA + 482 `302`), 268'i gerçek madde
dökümü. Öteki kovaların gerçek maddeleri dipnotlu bütün-sayfa ailesiyle çekilmiş
(aday-değil; örnek `giresun` 47.160 bayt, BİBLİYOGRAFYA + dipnot VAR).

**🔴 AŞAMA 2 HTTP havuzu kararı (beyan):** adayların 864'üne (`302` 482 · ARAMA 379 ·
`' '` 3) HTTP GÖNDERİLMEDİ, çünkü ölçülecek gövde hiç var olmadı: `302` dosyası zaten
bir ölü-slug KAYDI (kural ⑤: 302 ≠ boş ≠ çekemedim — üçü ayrı satır), ARAMA dökümü
madde değildir. Bilinen-ölü 482 slug'ı yeniden istemek TDV'yi boşuna yormaktır (kural ⑧).
Doğrulama için **hariç sınıflardan örnek** çekildi: 10 `302` + 5 ARAMA canlıdan
denendi (beklenen: 302 / gövdesiz arama sayfası). HTTP'e girenler:
**22 gerçek aday (4 TDV + 18 TDV-dışı kendi URL'inden) + 15 doğrulama + 50 kontrol = 87 satır.**

**Birim (TDV-dışı satırlar için ek beyan):** `DIS-*`/`saho-*`/`strategic-dp`
için `onbellek_bayt` = dosya − ilk (URL) satırı; `canli_bayt` = aynı URL'in
etiket-soyulumlu düz metninin UTF-8 baytı. Bunlar TDV maddesi olmadığından TDV
çıkarıcısı uygulanamaz; kesiklik kendi kaynağına karşı ölçülür ve raporda ayrı
sınıf olarak okunur.

## 2. AŞAMA 2 — kesin ölçüm (HTTP) — BİTTİ

Çıktı: `denetim/GLM1-TDV-KESIK-OLCUM-1006.tsv` (87 satır + başlık).
**Toplam istek: 107** (99 sayılan + 1'i çöken turda sayılamayan + 7 teşhis turu).
Ara bekleme 1 sn; `000` 5 sn sonra 1 kez yeniden denendi. Yönlendirme izlenmedi
(TDV kuralı: 302 = ölü slug) — yalnız TDV-dışı 2 satır için izleyen (`-L`) deneme yapıldı (beyan aşağıda).

**Havuz:** 22 gerçek aday (4 TDV + 18 TDV-dışı) + 15 doğrulama örneği (10 `302`-kaydı + 5 ARAMA)
+ 50 kontrol (tohum 1006) = **87 satır → TAM 46 · KESIK 5 · OLCULEMEDI 36.**

### KESIK 5 — ADIYLA
| kova | dosya | oran | sınıf |
|---|---|---|---|
| ONCE1281-DOGU-ASYA | `moğollar` | 0,0042 | önbellek = 86 bayt ascii-arıza dökümü; canlı 20.304 bayt tek bölümlü TAM madde |
| ONCE1281-DOGU-ASYA | `kamboçya` | 0,0064 | önbellek = 85 bayt ascii-arıza dökümü; canlı 13.322 bayt |
| EKOKUMA-0077-C | `DIS-ushmm-tr` | 0,3289 | TDV-dışı (ushmm.org); canlı sayfa önbellekten ~3 kat büyük — sayfa büyümüş/banner şüphesi |
| EKOKUMA-0077-C | `DIS-ushmm` | 0,3690 | TDV-dışı; yukarıdaki ile aynı |
| EKOKUMA-0077-C | `DIS-mfa-en` | 0,6406 | TDV-dışı (mfa.gov.tr); canlı 16.403 vs önbellek 10.507 |

🔴 **Ana sorunun cevabı: TDV gövdeli dosyalarda hindistan-tarzı (çok bölümlü madde ilk
kaynakçada kesilmiş) KESİK = 0 vaka ölçüldü.** KESIK çıkan 2 TDV dosyası kesik-yazan
çıkarıcının değil, dosyaya HİÇ yazamamış bir aletin (ascii kodlama arızası) ürünü.
Kesen aile (W19-varsayılan/W22) bu kovalara girmemiş; kovalara yazan aletlerin çoğunluğu
dipnot imli bütün-sayfa dökümü ailesi.

### Doğrulama örnekleri — hariç tutma kararları ölçümle desteklendi
- 10/10 `302\n`-kaydı canlıda da **302** (ölü slug sınıfı doğru; dosya adları TSV'de).
- 5/5 ARAMA dökümü canlıda **200 + gövdesiz arama sayfası** (madde değiller; doğru).

### Kontrol grubu (50) — yanlış negatif **0**
44 **TAM** (oran 1,14-2,64 — dipnotlu aile gövdeyi ve fazlasını tutuyor) +
6 **OLCULEMEDI** ki bunlar kesik değil, **canlıda gönderme sayfasına dönüşmüş** maddeler
(çıkarıcının `gonderme` sözleşmesi doğrulandı): `colemerik→hakkari` · `urfa→sanliurfa`
(2 kova: EKOKUMA-0077-C + SAFEVI-DOGU-0081) · `tuareg→tevarik` · `doha→devha` ·
`dimask→sam--suriye`. Bu 6 önbellek dosyası o maddelerin bugün canlıda OLMAYAN
gövdesinin tek kaydıdır (③'e bakın).

### En kötü 20 oran (altı kesik + en küçük on dört TAM)
`moğollar 0,0042 · kamboçya 0,0064 · DIS-ushmm-tr 0,3289 · DIS-ushmm 0,3690 ·
DIS-mfa-en 0,6406 ·` sonra TAM'lar: `DIS-tccb-2014 1,0258 · hiristiyanlik 1,1426 ·
camlar 1,1855 · zengibar 1,2148 · gana 1,2380 · izmir 1,2489 · filipinler 1,2490 ·
DIS-mfa-tr 1,2570 · tayland 1,2679 · mengucukluler 1,2771 · sanliurfa 1,2957 ·
van 1,3176 · kucuk-kaynarca-antlasmasi 1,3237 · senegal 1,3402 · hamidogullari 1,3607 ·
atina 1,3681 · imroz 1,3991 · ace 1,4034` (tam liste TSV'de).

### OLCULEMEDI 36 — sınıflarıyla
- TDV-dışı, URL önbellekte YOK (ilk satır başlık): `saho-*` 8 + `strategic-dp` 1 — **ölçüm imkânsız**
- TDV-dışı, erişim: `DIS-agmi`/`DIS-agmi2` 000 (site ulaşılmaz) · `DIS-britannica` 403 (bot engeli) · `DIS-mfa-am` 404
- ölü slug (302): `moгol` (Kiril г!) · `mustegan​em` (ZWSP'li ad) + doğrulama 10'u
- gönderme-dönüşmüş: 6 (yukarıda)
- ARAMA dökümü: 5

### ÖNGÖRÜ KARŞILAŞTIRMASI (kural ⑦ — öngörü §0'da değiştirilmeden duruyor)
| Soru | Öngörü | Ölçüm | Tuttu mu |
|---|---|---|---|
| kesik_adayi=1 | ≈ 670 | **886** | ✗ (+%32) |
| KESIK | ≈ 70 | **5** | ✗ (hindistan-tarzı TDV: **0**) |
| kontrol yanlış-negatif | 0-2 | **0** | ✓ |
| BOŞ 0 bayt | 482 | 482 | ✓ (zaten ölçülmüştü) |

**Neden yanıldım:** mekanizma yanlış değildi, **evren** yanlıştı. Hindistan vakası
W22'nin çekirdek çıkarıcısındaydı; kovalara yazan aletler ise çoğunlukla bütün-sayfa
dökümü ailesiymiş (dipnot imi 1.312 dosyada). "İm yok = kesik ailesi" tahminim, imi
olmayan dosyaların çoğunun hiç gövde taşımayan çekim-artığı (482 `302` + 379 ARAMA +
4 ascii-arıza) olduğunu bilmemden ötürü isabetli çıktı ama sayıyı altta tuttu — aday
886'nın içinde gerçek gövde yalnız 22'ymiş. Ders: aday sayısı ≠ adayın kalitesi;
kesişim sınıfları ölçülmeden havuz büyüklüğünden KESIK çıkarılamaz.

## 3. TESLİM — üçlü kural

**① NE ÖLÇTÜM** — evren 2.682 `.txt` (35 kova, şartname ile aynı; kova kova ELEME TSV'de).
Sınıf sayımı (içerikten, adından değil):

| Sınıf | Adet | AŞAMA 2 hükmü |
|---|---|---|
| dipnotlu bütün-sayfa ailesi (gerçek TDV gövdesi) | **1.314** | kontrol 50: 44 TAM · 0 KESIK · 6 gönderme-OLCULEMEDI |
| ÖLÜ SLUG kaydı (`302\n`) | 482 | doğrulama 10/10 canlıda 302 |
| ARAMA sayfası dökümü | 379 | doğrulama 5/5 gövdesiz sayfa |
| BOŞ (0 bayt) | 482 | ölçüm dışı (oran tanımsız) |
| boş çekim (`' '`) | 3 | ölçüm dışı |
| ascii-arızalı alet dökümü | 4 | `moğollar`·`kamboçya` **KESIK** (0,004/0,006) · `moгol`·`musteganem` ölü slug |
| TDV-dışı kaynak, URL'siz | 9 | ölçülemedi (saho 8 + strategic-dp) |
| TDV-dışı kaynak, URL'li | 9 | 2 KESIK (ushmm×2) · 1 KESIK (mfa-en) · 2 TAM · 4 OLCULEMEDI |

HTTP: **87 satır · 107 istek · TAM 46 · KESIK 5 · OLCULEMEDI 36.**
**TDV gövdeli dosyalarda hindistan-tarzı kesik: 0.**

**② NE BULAMADIM** (bulunamadı bir sonuçtur):
- Hindistan-tarzı kesik **bu korpusta bulunamadı** — kesen çıkarıcı ailesi bu önbelleklere
  girmemiş. (Bu, "W22 hatası yok" demek DEĞİL; "kovalara o aile yazmamış" demek — W22'nin
  kendi çekirdeğindeki kapsamı ayrı iş, şartname ④'ün ilk maddesi.)
- saho×8 + strategic-dp'in kaynak URL'leri önbellekte **yok** — kesiklik ölçülemedi.
- `genocide-museum.am` bu ağdan ulaşılmaz (000×2) · britannica 403 · mfa-am 404.
- `moгol` (Kiril г) ve `mustegan​em` (ZWSP) ölü slug — aletin yazım hatası kayıt anında ölmüş.

**③ NE İSTİYORUM** (öneriler, hüküm koordinatörde):
1. **Birleştirme (GLM-GOREV-1005) öncesi yeniden-çekim kararı:** 1.343 çekim-artığı
   (482 boş + 482 `302` + 379 ARAMA) kesik değil HİÇ çekilmemiş. Öneri: bunlar tek
   geçişte yeni çıkarıcıyla (302/ARAMA sınıfları arama-adımından başlayarak) toplanır;
   toplanamayanlar birleşik önbellekte `ölü-slug`/`arama` etiketiyle kalır ki bir daha
   ölçülmesin.
2. **Gönderme-dönüşmüş 6 dosya korunmalı** (`colemerik` · `urfa`×2 · `tuareg` · `doha` ·
   `dimask`): canlıda gövde yok; önbellek tek kayıt. Birleştirmede atılırsa bilgi kaybı.
3. **Kova şemasına kaynak-türü alanı:** "tdv-onbellek" adına rağmen 18+9 dosya TDV-dışı
   kaynak; birleşik dosyada tür alanı olmazsa sonraki ölçüm bu sınıfları yeniden keşfeder.
4. **Eşik 0,9 kalsın:** TDV satırlarında ölçüler iki uca ayrışıyor (0,004-0,006 vs
   1,14-2,64); 0,9'ın konumu sonucu değiştirecek hassasiyette değil.

**Yazdığım üç dosya:** `denetim/GLM1-TDV-KESIK-ELEME-1006.tsv` (2.682 satır) ·
`denetim/GLM1-TDV-KESIK-OLCUM-1006.tsv` (87 satır) · `denetim/GLM1-TDV-KESIK-1006.md` (bu rapor).
Önbellek dizinlerine, `data/`'ya, `arac/`'a yazılmadı.
