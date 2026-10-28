# UMIT-W5-DALGA3-1006 — D7 734→732'nin sebebi · Brest-Litovsk / Kovel / Volodymyr-Volynskyi

Görev: UMIT İRTİBAT (dalga 3) · İşçi: UMIT-W5-POLONYA-1006 · worktree `C:\atlas-w5`
(origin/main `6ba25049`) · motor dosyalarına DOKUNULMADI (KOŞU 20 sürüyor).

## 0. ÖNGÖRÜ (ölçümden ÖNCE mühürlendi)

Ölçümden önce bildiğim: dalga 2'deki iki `--ayrinti` çıktısının farkı (düşen iki satır ve
`gecici-cephe` muafiyetinin 77 → 79 olması) ve `degismez7`nin kodu (okundu, koşturulmadı).
Kod: dönem başlangıcında (f) ≤5 noktalık bir ada, f+365 günde hâlâ ≤5'lik ada ve aynı
sahipteyse İHLAL; değilse `gecici-cephe` MUAF.

**İŞ 1 öngörüsü:**
- Düşen iki kayıt: ① `1915-07-01 Radom (Polonya) → HABSBURG` (ada: Radom) ·
  ② `1915-10-01 Kielce → HABSBURG` (ada: Kielce+Krakov+Radom).
- İkisi de KAPANMADI; **`gecici-cephe` muafiyetine GEÇTİ** (+2 muaf = −2 ihlal, birebir).
- Sebep: **Lublin'in yeni kırılması** (1915-07-30 `avusturya`). Lublin Radom ile Habsburg'un
  Galiçya gövdesi arasında köprü olur ⇒ f+365'te bileşen 5'i aşar. Radom kayması TEK
  BAŞINA ikisini de düşürmez (Radom 07-20'de yine tek nokta ada, ve Lublin olmadan +365'te de ada).
  Łódź / Zamość / Chełm `s:` zincirleri DEĞİŞMEDİ (yalnız `kaynak:` metni) ⇒ etkileri 0.
- Hüküm: **KÖRLEŞME DEĞİL, ama "iyileşme" de tam doğru kelime değil.** Kapı iki kaydı hâlâ
  SORUYOR (ada eşiği ve 365 gün sınaması koşuyor) ve "geçici cephe" CEVABINI veriyor —
  çünkü artık veri, adanın bir yıl içinde gövdeye bağlandığını söylüyor. Bu cevap ancak
  Lublin'in yeni kırılması DOĞRUYSA doğrudur; kapı burada verinin doğruluğuna yaslanıyor.
  ⚠️ Risk: Radom 07-20 → Lublin 07-30 arası 10 günlük gerçek bir ada var; kapı bunu da
  "geçici" sayar ve sayması doğru.

**İŞ 2 öngörüsü:**
- Üçünde de `s:` zinciri Kongre Polonyası/Volhinya'yı `rusya` olarak 1917'ye ya da 1918'e
  kadar taşıyor (Polonya kayıtlarının eski kuyruk deseni).
- Kaynakla bulunacak: **Brest-Litovsk gün (2 ± 1 gün, 25-26 Ağustos 1915)** · **Kovel gün
  (Ağustos 1915 sonu)** · **Volodymyr-Volynskyi gün belirsiz** (Ağustos 1915 başı; Bug
  hattında, Chełm'den hemen sonra). Toplam: 3'ten **2 ± 1**'inde gün.
- Kaynak riski: Kovel ve Volodymyr Ukrayna şehirleri; Lehçe/Ukraynaca akademik kaynak
  gerekir, TDV kapsamaz.

## 1. İŞ 1 — D7 734 → 732, ÜYELİKLE ve SEBEBİYLE

**Yöntem:** `denetle.py`nin KENDİ `degismez7` işlevi (kopya değil, `import denetle`)
temiz `6ba25049` verisi üzerinde, bellekte dört varyantla koşturuldu. Değişiklikler
diff'ten birebir alındı. Yalnız iki `s:` zinciri değişiyor; Łódź, Zamość ve Chełm'de
diff yalnız `kaynak:` METNİNE dokunuyor ⇒ D7'ye etkileri yapısal olarak 0.
Betik: scratchpad `d7.py`. ⚠️ İlk koşuda varyant fonksiyonlarını çağrıya geçirmeyi
unutmuşum (dört varyant da 734 çıktı); hata bulundu, düzeltildi, yeniden koşturuldu.

| Varyant | İhlal | `gecici-cephe` muaf | Üyelik farkı (TABAN'a göre) |
|---|---|---|---|
| TABAN (main) | 734 | 77 | — |
| YALNIZ RADOM 07-01→07-20 | 734 | 77 | ① 07-01'de DÜŞTÜ, **aynı kayıt 07-20'de YENİ** (net 0) |
| YALNIZ LUBLIN 1915-07-30 avusturya | **732** | **79** | ① ve ② DÜŞTÜ |
| İKİSİ (= diff) | **732** | **79** | ① ve ② DÜŞTÜ (Radom 07-20 de ihlal DEĞİL) |

Düşen iki kayıt:
```
① 1915-07-01  Radom (Polonya)  HABSBURG  ada: Radom                     ana gövde 171,1 km (Krakov)
② 1915-10-01  Kielce           HABSBURG  ada: Kielce+Krakov+Radom        ana gövde 184,9 km (Zamość)
```
**Sebep: YALNIZ Lublin'in yeni kırılması.** Radom kayması ①'i yalnız 19 gün öteye taşır.

**Mekanizma (bileşen ölçümü, f ve f+365. gün):**
```
TABAN   Radom  @1915-07-01  bileşen 1  (Radom)            komşular: Kielce=almanya, Lublin=kongre-p, Łódź=almanya, Varşova=kongre-p
TABAN   Radom  @1916-06-30  bileşen 3  (Kielce+Krakov+Radom)   Lublin=kongre-p  ⇒ ≤5 ⇒ İHLAL
LUBLIN  Radom  @1916-06-30  bileşen 10+ (Chełm, Kielce, Krakov, Lublin, Lvov, Radom, Suçava, Yazlofça, …) ⇒ >5 ⇒ geçici cephe
TABAN   Kielce @1916-09-30  bileşen 3                     Lublin=kongre-p  ⇒ İHLAL
LUBLIN  Kielce @1915-10-01  bileşen 10+ (aynı küme)        ⇒ ada bile DEĞİL
İKİSİ   Lublin @1915-07-30  bileşen 2 (Lublin+Radom) · @1916-07-29 bileşen 10+
```
Lublin, Radom/Kielce/Krakov kümesini Chełm–Zamość–Lvov üzerinden Galiçya gövdesine bağlayan
köprü. Tabanda Lublin 1917'ye kadar `kongre-polonyasi` olduğu için köprü yoktu.

**Soru: iyileşme mi, körleşme mi? → İYİLEŞME.**
- Kapı iki kaydı hâlâ SORUYOR: ada eşiği ve f+365 sınaması aynen koşuyor, evren daralmadı,
  muafiyet listesine ad eklenmedi, eşik değişmedi. O7'deki gibi kapsamdan düşme YOK.
- Cevap değişti çünkü VERİ değişti: Lublin artık 1915-07-30'dan Avusturya. Ada, Lublin'in
  1915-18 arası Rus görünmesinden (veri hatası: Lublin 1 Ekim 1915 – 3 Kasım 1918 arası
  Avusturya genel valiliğinin merkezi, Lewandowski 2013) doğan bir ARTEFAKTTI.
- ⚠️ Şart: bu hüküm Lublin kırılmasının doğruluğuna bağlıdır (POLONYA-GUN-1006 §1.1).
- Kalan tasarım muafiyeti: Radom'un 07-20 ile 07-30 arasındaki 10 günlük gerçek adası
  "geçici cephe" sayılıyor — doğru sayılıyor.
- Öngörü ↔ ölçüm: düşen iki kayıt ✓ · `gecici-cephe`ye geçiş ✓ · sebep Lublin ✓ ·
  "Radom tek başına düşürmez" ✓ (ama Radom tek başına ①'i 07-20'ye TAŞIDI — bunu öngörmedim).

## 2. İŞ 2 — Brest-Litovsk · Kovel · Volodymyr-Volynskyi

### 2.1 Veri (`data/yerlesimler_p0037.js`, üçü de aynı desen)
```
1281-01-01 → 1569-07-01  litvanya-buyuk-dukalik
1569-07-01 → 1795-10-24  lehistan
1795-10-24 → 1917-03-15  rusya
1917-03-15 → 1917-11-07  rusya-gecici-hukumet
1917-11-07 → 1921-03-18  sovyet-rusya
1921-03-18 → 1923-10-29  polonya
isg: YOK
```
Brest kaydının kendi `kaynak:` notu: "1918 Brest-Litovsk Antlaşması'nın Alman işgali
(1915-1918) `isg:` olarak YAZILMADI — bu partinin kapsamı dışı, kayda geçiyor."
⇒ Bilinen ve BEYANLI bir eksik; üç şehir 1915-1918 arası haritada Rus görünüyor.
Kovel ve Volodymyr `m:"Lutsk"`.

### 2.2 Kaynak ölçümü

| Şehir | Gün | Hassasiyet | Kaynak | Güven |
|---|---|---|---|---|
| Brest-Litovsk | **1915-08-25 ↔ 1915-08-26 ÇELİŞKİ** | gün (1 gün fark) | Jarosławski 2022 · Mikietyński | yüksek (±1 gün) |
| Volodymyr-Volynskyi | **1915-08-16** | gün | Khomych 2019 | orta |
| Kovel | gün `bulunamadı` · Ağustos 1915 (çıkarım) · üst sınır 6 Eylül | ay | Khomych 2019 · Klimecki 2008 | orta (ay) |

**Brest-Litovsk — iki akademik kaynak bir gün ayrışıyor:**
- W. Jarosławski, *Officina Historiae* 5 (2022) — https://czasopisma.uph.edu.pl/officinahistoriae/article/download/3081/2792/6025
  > "Wojska niemieckie też parły coraz bardziej na wschód, 20 sierpnia zajęto Modlin,
  > następnie Kowno (23.08.1915 r.), Brześć Litewski (25.08.1915 r.), Wilno (18.09.1915 r.)."
- P. Mikietyński, *Niemiecka droga ku Mitteleuropie* (UJ/Historia Iagellonica), s. ~121-122 —
  https://ruj.uj.edu.pl/server/api/core/bitstreams/a8971df6-7f06-4ce2-8bc8-f1df831593a0/content
  > "Na koniec, 26 sierpnia Niemcy zdobyli Brześć nad Bugiem i twierdzę Osowiec."
- İşgalci ikisinde de Alman. "25/26 Ağustos gecesi, savaşsız (Ruslar tahliye etmişti)" ifadesi
  yalnız arama özetinde ve bir blogda geçti — KULLANILMADI. Śląska Biblioteka Cyfrowa'daki
  28 Ağustos 1915 gazetesi (sbc.org.pl) ve POLIN Sztetl sayfası: bağlantı yok / Cloudflare ⇒ okunamadı.
- Hüküm verilmedi: fark Łódź'daki gibi bir gece olabilir, ama bunu söyleyen akademik cümle
  bulunamadı. Seçim veri sahibinde; fark `ic_not`a yazılmalı.

**Volodymyr-Volynskyi — 1915-08-16:**
- Петро Хомич, «Бойові дії на Волинському Поліссі під час Першої світової війни»,
  *Науковий вісник Східноєвропейського національного університету імені Лесі Українки*
  (Розділ І. Історія України), № 7, 2019 —
  https://www.istvolyn.info/storage/uploads/vEXigKNszHz2nAVII1prKHdRC2o2B85jUvcC7WPi.pdf
  > "Однак 16 серпня австро-угорським військам удалось оволодіти Володимиром-Волинським."
- ⚠️ PDF yayıncının (SNU) sunucusundan DEĞİL, Volın bölge tarih portalından (istvolyn.info)
  alındı; dergi sunucusu ölçülmedi ⇒ güven orta. Cümlenin dayanağı dipnotsuz (komşu cümle [10, s. 294]).
- İşgalci: Avusturya-Macaristan. Destek (aynı portal, Volın konferans derlemesi): Volodymyr'de
  bir Avusturya "Окружна Команда" (bölge komutanlığı) 1915 yazından itibaren anılıyor.

**Kovel — gün bulunamadı:**
- Khomych 2019 (aynı yer):
  > "9-10 серпня 1915 р. австро-німецькі частини розпочали наступ на ковельському напрямі [18].
  > Російські війська, хоч і на деякий час, проте стримали цей наступ, залишили Ковель і змушені
  > були відступати вглиб Волинського Полісся."
  > "Отже, на кінець серпня Волинським Поліссям проходила лінія двох фронтів … Орієнтовна лінія
  > розмежування між ними проходила по залізниці Ковель-Сарни."
  ⇒ Rusların Kovel'i 9-10 Ağustos'tan sonra, Ağustos sonundan önce bıraktığı söyleniyor; GÜN YOK.
- M. Klimecki, «Legiony Polskie na Wołyniu 1915-1916», *Niepodległość i Pamięć* 15/1 (27), 2008,
  s. 107-123 — bazhum.muzhp.pl:
  https://bazhum.muzhp.pl/media/texts/niepodlegosc-i-pamiec/2008-tom-15-numer-1-27-1/niepodleglosc_i_pamiec-r2008-t15-n1_27_1_-s107-123.pdf
  > "Maszerowali za wycofującymi się rosyjskimi jednostkami … 6 września weszli do Kowla."
  ⇒ Bu, LEJYON'un girişidir (D211 ⑧), Rus çıkışı değil; üst sınır ≤ 6 Eylül 1915.
- "25 Ağustos 1915, XIV. Kolordu" yalnız Vikipedi / Austria-Forum (wiki aynası) ⇒ KULLANILMADI.
  "16 Ağustos'ta Kovel, Volodymyr ve Horohiv alındı" yalnız arama özetinde ⇒ KULLANILMADI.
- Öneri: `1915-08` (ay) — ama bu bile bir ÇIKARIM (Khomych'in sıralaması); en sağlam yazım
  "≤ 1915-09-06, Ağustos 1915 içinde (Khomych)". D213 gereği gün yazılmaz.

### 2.3 Öngörü ↔ ölçüm
- Öngörü: 3'ten 2 ± 1 gün. Ölçüm: Brest (±1 gün çelişkiyle) + Volodymyr = **2** ✓; Kovel gün yok ✓.
- Brest "25-26 Ağustos" ✓ — ama iki kaynağın iki ayrı gün verdiğini öngörmedim.
- Volodymyr'i "en belirsiz" saydım ✗ — tek cümlelik kesin gün çıktı; Kovel'i "Ağustos sonu" saydım,
  kaynak gün vermedi.
- Zincir öngörüsü ("1917'ye kadar rusya") ✓ birebir.

## 3. BULUNAMADI / ÖLÇÜLEMEDİ
- Brest 25 ↔ 26 Ağustos farkını açıklayan akademik cümle.
- Kovel'in Rus çıkış günü (yalnız wiki/özet adaylar var, kullanılmadı).
- Khomych makalesinin dergi sunucusundaki kopyası.
- sbc.org.pl (1915 gazetesi) ve sztetl.org.pl: bağlantı yok / Cloudflare.
- Bu üç şehrin 1915-1918 işgalcisinin `s:` mi `isg:` mi yazılacağı (Brest notu `isg:` diyor) — veri sahibinin kararı.
