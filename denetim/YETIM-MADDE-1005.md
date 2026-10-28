# YETIM-MADDE-1005 — Bükreş yetimi · defter daraltma · 1750 sorulmamış madde

Ölçüm anı: 2026-10-05 · HEAD `910b1124` · araç `denetim/ARAC-YETIM-MADDE-1004.py` (çıkış 1,
koordinatörün ölçümüyle birebir: kapı 2018 · W 1158 · sorulmamış 1750/5 · düşen 3 · yeni 1).
Ölçüm betikleri aracın KENDİ işlevlerini (`olc`, `kova`, `_kirilmalar`, `ko.yukle`) içe alarak
koştu, kopya mantık yazılmadı. `data/` · `arac/` · defter yalnız OKUNDU.

## 0. ÖNGÖRÜLER — ölçümden ÖNCE yazıldı (sayı ve mekanizma ayrı)

**① Bükreş 1913-08-10**
- Sınıf öngörüsü: koordinatörün (a)/(b)/(c)'sinin hiçbiri değil, dördüncü bir sınıf —
  **(d) `yer_id` antlaşmanın İMZA YERİNE bağlanmış.** Bükreş 1913'te el değiştirmedi
  (Romanya başkenti); el değiştiren Güney Dobruca (Silistre · Tutrakan · Balçık) ve
  Makedonya'dır. Araç YALNIZ `yer_id` kaydının zincirine baktığı için madde "yetim" düşer.
- Öngörü (sayı): Güney Dobruca yerleşimlerinden en az biri 1913-08-10 ±30 günde kırılma taşır.
- Mekanizma öngörüsü: "yer_id = maddenin geçtiği yer" eşlemesi antlaşma maddelerinde
  sistematik olarak yanlış pozitif üretir (imza yeri ≠ el değiştiren yer).

**② Defterden düşen 3 üye**
- Öngörü: en az biri GERÇEK düzeltme DEĞİL, **anahtar kayması** (başlık/özet değişti →
  anahtar değişti → eski üye "düştü", aynı madde başka anahtarla geri gelebilir ya da
  madde silinmiş/taşınmıştır). "Artık yetim değil" ≠ "borç kapandı".
- Sayı öngörüsü: 3'ün 1'i anahtar kayması / silinme, 2'si gerçek düzeltme (kırılma ya da yer_id).

**③ 1750 sorulmamış madde — toprak değişimi anlatma oranı**
- Kova bazında öngörü: E ~%70 · B ~%50 · D ~%25 · W ~%8.
- Ağırlıklı toplam: 386·.70 + 256·.50 + 428·.25 + 680·.08 ≈ 560 / 1750 ≈ **%32**.
- Mekanizma öngörüsü: B/D kovasındaki dar fiillerin önemli kısmı (ör. "katıl", "bırakıldı",
  "terk", "düştü") toprak dışı anlamda (ittifaka katıldı · görevden düştü · tahtı terk)
  yanlış eşleşir; yer_id'sizliğin ana sebebi maddenin BÖLGE/ÜLKE çapında olmasıdır
  (tek yerleşime bağlanamaz), "unutulmuş yer_id" değil.

---

## 1. Bükreş 1913-08-10 — SINIF (d): kırılma VAR, madde imza yerine bağlı

Madde: `data/kronoloji_sinir_komsu.js:86-87` · `sinir_id:"g3-bg-ro-dobruca-p4"` ·
`b:"Bükreş Antlaşması: Güney Dobruca Romanya'ya geçti"` · `yer_id:"Bükreş"` · kova **D**.
Gövde: *"…Dobriç (Hacıoğlupazarcığı), Balçık ve Silistre Romanya'ya bırakıldı."*

**Veride o gün kırılmalar VAR** (`_kirilmalar`, 1913-08-10 tam gün):
```
Silistre                        bulgaristan-kralligi → romanya-kralligi   1913-08-10
Hacıoğlupazarcığı (Dobrich)     bulgaristan-kralligi → romanya-kralligi   1913-08-10
(aynı gün Drama · Serez · Kavala · Praviște → yunanistan — başka madde)
```
`Bükreş` kaydının zinciri: 1881-03-26 → 1923-10-29 `romanya-kralligi`, 1913'te kırılma
YOK ve OLMAMALI. ⇒ (a) DEĞİL (kırılma eksik değil) · (c) DEĞİL (madde açıkça toprak
değişimi anlatıyor) · klasik (b) de değil (ad normalizasyonu kusuru yok; `yer_id`
kayda tam eşleşiyor — 4299 kayıt, mükerrer ad 0). **Yanlış olan `yer_id`'nin SEÇİMİ:**
imza yeri yazılmış, el değiştiren yer değil.

**Niçin BUGÜN yeni çıktı — anahtar aynı, kova değişti:** `3f34a8b9` (bugün 13:53, "DOBRİÇ
1913 MADDESİNE ADIYLA YAZILDI") gövdeye *"…Romanya'ya bırakıldı"* ekledi. `bırakıl\w*`
aracın GUCLU kalıbında ⇒ madde `None`'dan (sorulmuyordu) **D**'ye geçti. Başlık değişmediği
için anahtar (`sha1(b)`) aynı; defter 4 Ekim'de yazıldığında madde zaten sorulmuyordu.
⇒ Yeni bir kusur DOĞMADI; eski bir kusur GÖRÜNÜR oldu.

🔴 **Aracın ikinci kör noktası bu maddede ortaya çıktı:** madde `tur:"toprak-kazanc"`
taşıyor ama `kova()` yalnız `etiket:`e bakar ve `ko.yukle` sözlüğünde `tur` anahtarı
DOSYA TÜRÜNE (olay/dosya/cok) ayrılmış — ham `tur:` alanı araca hiç ulaşmıyor. (§4'e bak.)

**Öneri — diff:** `denetim/YETIM-MADDE-1005-bukres.diff` (`git apply --check` çıkış 0)
```
- yer_id:"Bükreş"
+ yer_id:"Hacıoğlupazarcığı (Dobrich)"
```
Gerekçe: gövdenin ADIYLA saydığı ilk şehir; TDV `hacioglupazarcigi` (Kiel) onu ADIYLA anıyor
(`3f34a8b9` kaynağı); kaydında kırılma tam 1913-08-10 ⇒ fark 0 gün ⇒ BAĞLI. Kamera odağı da
imza salonundan Güney Dobruca'ya taşınır (doğru yön). Silistre de aynı derecede geçerli;
seçim senin. ⚠️ Uygulandıktan sonra `odak_olc.py` ve `ARAC-DEGISMEZ2-YERKORU-1004` yeniden
koşulmalı (yer_id değişti) — ben koşmadım, uygulamadım.

📌 Not (ölçüldü): **Balçık için yerleşim kaydı YOK** (`Bal[çc]ık|Turtukaya|Tutrakan|Ekrene|
Mangalya` aramasında 0 kayıt). Gövdenin adıyla andığı üç şehirden biri haritada noktasız —
bu bir kapsam borcu, bu görevin dışında.

## 2. Defterden düşen 3 üye — ADIYLA

| Üye (defter satırı) | Niçin artık üye değil | Sınıf |
|---|---|---|
| `kronoloji_cok_1dunya_A.js¦1915-08-05¦bc56336c¦Varşova` — "Alman ordusu Varşova'ya girdi" | Varşova kaydına `s:` kırılması YAZILDI: `kongre-polonyasi` →1915-08-05→ `almanya` (kaynak KASA-POLONYA-1005 · Jarosławski 2022 · IPN). Madde aynı, kova B, artık BAĞLI (fark 0). | **GERÇEK düzeltme** — kırılma eklendi |
| `olaylar_ek2.js¦1858-06-06¦8a84a9e4¦İstanbul` — "Arazi Kanunnâmesi" | `0a24f91b` (bugün 08:17) etiketteki yanlış `toprak-kazanc`'ı `kanun`a çevirdi ⇒ kova E → **None**. Madde zaten toprak değişimi anlatmıyordu. | **YANLIŞ POZİTİF temizlendi** — etiket düzeltmesi |
| `olaylar_ek3.js¦1695-02-11¦4f3d4ed0¦İstanbul` — "II. Mustafa'nın sefere bizzat çıkma kararı" | Aynı commit: `toprak-kazanc` → `savas` ⇒ kova E → **W** (kapı dışı). | **YANLIŞ POZİTİF temizlendi** — etiket düzeltmesi |

Üçünün de madde anahtarı HEAD'de hâlâ VAR (silinme/anahtar kayması YOK).
⇒ Defter daraltması güvenli: üçü de gerçekten çıkmalı. Ama "borç kapandı" yalnız
Varşova için doğrudur; ikisi hiç borç değildi (yanlış etiket defteri şişirmişti).

**Öngörü karşılaştırması:** sayı TUTMADI (öngörü 1 kayma + 2 düzeltme; gerçek 0 kayma +
1 kırılma + 2 etiket). Mekanizma YARI tuttu: "düşme ≠ borç kapandı" doğru çıktı, ama sebebi
anahtar kayması değil **kova değişimi** (etiket). Aynı mekanizma ①'de TERS yönde işledi:
metin düzeltmesi bir maddeyi kapıya SOKTU. ⇒ **Kova etiket/metinle oynar; defter üyeliği
"madde düzeldi"yi değil "maddenin kovası değişti"yi de kaydeder.**

## 3. 1750 "sorulmamış" — tabakalı sistematik örneklem (40 kalem)

Yöntem: yer_id'siz sahiplik maddeleri kova kova `(t, dosya, b)` sırasına dizildi; her
kovadan 10 kalem, sabit adımla (`i·k + k/2`, k = n/10). Ölçüt **T**: madde belli bir
toprağın/yerin o gün el ya da statü değiştirdiğini SÖYLÜYOR (haritada görünmesi gereken
bir değişim). Savaş/kuşatma/akın/iç iktidar/sonuç ima edilen ama söylenmeyen ⇒ **N**.

| Kova | n | T | Oran | T olanlar |
|---|---|---|---|---|
| E etiketli | 386 | 7/10 | %70 | Besalú→Barselona · Nîşâbur/Merv/Serahs · Bosna bölünmesi 1253 · Bosna fethi 1463 · Eski Hırsova 1790 · Tel el-Kebîr/Kahire 1882 · Doğu Grönland 1933 |
| B başlık fiili | 256 | 6/10 | %60 | Livonya Tarikatı 1237 · Chimu vadileri 1370 · Eystribygð terki 1450 · Valtellina→Cisalpin 1797 · Ruanda-Urundi 1916 · El Oro 1941 |
| D gövde fiili | 428 | 0/10 | %0 (üst sınır ~%26) | — (şehit düştü · esir düştü · kalesini alıp · Ablukaya katılma · yetki devredildi) |
| W anlatabilir | 680 | 2/10 | %20 | Milazzo/Sicilya 1860 · Tanggu/Mançukuo sınırı 1933 |

**Kestirim:** 386·.7 + 256·.6 + 428·0 + 680·.2 ≈ **560 / 1750 ≈ %32**
(tabakalı standart hata ≈ ±110 madde ⇒ kaba aralık **~350–780, %20–44**; n=10/kova kaba).

**Öngörü karşılaştırması — SAYI TUTTU, MEKANİZMA KISMEN ÇÜRÜDÜ:**
- Toplam %32 öngörülmüştü, %32 çıktı. Ama kovalar ters: D'yi %25 bekledim → **%0**;
  W'yi %8 bekledim → **%20**. Hatalar birbirini götürdü. **Toplamın tutması, kova
  modelinin doğru olduğunu GÖSTERMEZ.**
- Doğrulanan mekanizma: D'nin 10/10'u fiil yanlış eşleşmesi (`düş\w*` → *şehit/esir düştü*,
  *tahttan düşürdüğü*; `ald\w*` → *kalesini alıp*, *Ani'yi almasından* (arka plan);
  `katıl\w*` → *Ablukaya katılmayı*; `devred\w*` → *yetki devredildi*). **D kovası yer_id'siz
  tarafta neredeyse saf gürültüdür.**
- Kısmen çürüyen mekanizma: "yer_id'sizlik çünkü bölge çapında" — T'lerin 13'ünden 4'ü
  ADIYLA şehir veriyor (Nîşâbur/Merv/Serahs · Eski Hırsova · Kahire · Besalú). ⇒ T'lerin
  ~%30'u **unutulmuş yer_id**, ~%70'i gerçekten bölgesel. İkisi de gerçek.

**Ne demek — kör noktanın büyüklüğü:** yaklaşık **560 madde** toprak değişimi anlatıyor ve
hiçbir yer zinciriyle sınanmıyor. Bunların ~%30'u (≈170) bir yer_id yazılınca araca
GİRER; kalan ≈390 bölgesel maddeyi bu araç tasarımı gereği SORAMAZ — ona bölge→yerleşim
kümesi (ör. `sinir_id`'nin iki yakasındaki noktalar) gerekir.

### 3b. Eşleşmeyen 5 — ADIYLA
```
B 1852-12-20 ince_gd_asya   yer_id 'Pegu'    İngiltere Pegu eyaletini ilhak etti
D 1849-01-01 ince_gd_asya   yer_id 'Bali'    Hollanda Bali seferi — Buleleng/Jembrana
W 1789-01-01 ince_gd_asya   yer_id 'Hanoi'   Đống Đa Zaferi
D 1104-01-01 once1281_anad. yer_id 'Harput'  Harput Emîri … Tapar'a tâbi
E 1112-01-01 once1281_anad. yer_id 'Harput'  Artuklu Belek Harput'a hâkim oldu
```
`Harput`, `Pegu`, `Bali`, `Hanoi` adlı yerleşim kaydı yok (kayıt başka adla duruyor olabilir —
ör. `Harput (Elazığ)`; taranmadı). Bu 5'in 3'ü T (Pegu · Belek/Harput · Bali kısmen).

## 4. 🆕 Sorulmayan İKİNCİ kova — `tur:"toprak-*"` alanı araca ulaşmıyor

`ko.yukle` madde sözlüğünde `tur` = dosya türü; kronoloji dosyalarının kendi `tur:` alanı
düşüyor. Ham dosyalarda `tur:"toprak-*"` taşıyan 554 madde (eşlenen) kovalara şöyle dağılıyor:
```
392 E (etiketten zaten yakalanıyor) · 53 B · 38 D · 29 W
 42 kova=None — HİÇ SORULMUYOR:  10 yer_id'li BAĞLI · 2 KAYMA · 14 YETİM · 16 yer_id'siz
```
14 "None-YETİM"in içinde gerçek adaylar var: **Ustrumca 1920 Neuilly** (Strumica SHS'ye) ·
**Ğadâmis 1810** Trablusgarp'a bağlandı · **Gât 1875** Osmanlı bayrağı · Şiraz 1325 ·
Yezd 1318 · Kaşgar 1678. Ve **Küçük Kaynarca 1774 `yer_id:"Silistre"`** — ①'deki imza-yeri
sınıfının bir örneği daha.
⚠️ Ama `tur:` alanı GÜVENİLİR DEĞİL: aynı 14'ün içinde *"Şemmâiyye Medresesi inşa edildi"*,
*"Jiangnan Tersanesi kuruldu"*, *"Sarı Nehir'in yönlendirilmesi"* de `tur:"toprak-*"`.
⇒ `tur:`'u E'ye katmak kapıya gürültü sokar. **Öneri: kapıya değil, W gibi ayrı sayılan
bir aday kovasına** (F = "tur:toprak-* ama etiketsiz/fiilsiz").

## 5. İmza-yeri sınıfının yaygınlığı — kaba ölçü
Kapı kümesinin (2018) **198**'i `antlasma` etiketli. Bu 198'in en sık `yer_id`'leri:
İstanbul 24 · Londra 10 · Berlin 8 · Paris 7 · Moskova 7 · Ankara 4 · Viyana 4 · Lizbon 4 ·
Yaş 4 — çoğu başkent/imza yeri (ör. *Berlin Kongresi 1878 → Berlin*). Kaç tanesinin
gerçekten imza-yeri kusuru olduğu **ölçülemedi**: "±30 günde başka bir yerde kırılma var mı"
sorusu 4299 noktalık veride rastgele çakışma verir (1373 İstanbul ↔ Mergui) — 2018'in 1025'i
bu testi "geçiyor", yani ayırt edici DEĞİL. Doğru ölçü: maddenin gövdesinde ADIYLA geçen
yerleşimlerin zincirine bakmak (ad normalleştirici `ARAC-NORMAL-0903` ile) — yapılmadı.
