# UFUK AÇILIŞI — MÖ 3500 … MS 2000

> Emre, 10 Ekim 2026 ~17:15: *"ufuğu açalım ufuk sümerlerin başından - 2000
> senesine kadar olsun / tüm devletleri araştır indir / tüm devletler için ayrı
> ayrı kronoloji maddelerini araştır indir / en baştan itibaren tüm şehirleri
> yazalım şehirler tarihî kayıtlara ilk hangi tarihte düşmüş ise o tarihte
> başlayacak o tarihte sahneye çıkacak / ... en son koşu ile hepsini doldurlalım
> / ufuğu da aç ve teknik olarak engel olan ne varsa araştır ve aç"*

Bu belge **ölçümle** başlar, çünkü "engel ne" sorusunun cevabı tahminle
verilemez. Bütün sayılar 10 Ekim 17:00 ölçümüdür, `main 86b6766a`.

---

## §0 BUGÜN NEREDE DURUYORUZ — ölçüldü

```
UFUK      = 1000-01-01 .. 1945-09-02     motorun ÜRETTİĞİ pencere (girdi.py:739)
VERI_UFKU = 1281-01-01 .. 1923-10-29     verinin TAM olduğu pencere (girdi.py:740)
```

| Katman | Pencere İÇİ | <1281 | >1923 |
|---|---|---|---|
| Kronoloji maddesi | 1801 | **541** | **510** |
| Künye (devlet) | 897 | **278** (en eski MS 226) | **297** |
| Yerleşim dönemi | 16.506 | **143** | **2** |
| MÖ (negatif yıl) tarih | — | **0** | — |

📌 **Okuma:** kronoloji ve devletler dizini pencere dışına TAŞMIŞ durumda,
ama **harita boyası taşmamış** — 1000-1281 arası yalnız 143 dönemle
destekli, MS 1000'den öncesi ise motor tarafından HİÇ çizilmiyor.
Yani bugün MÖ'ye dair atlasta **tek bir harita günü yok.**

🔴 Ve Sümer paketi (`denetim/NOKTA-SUMER-1010.diff`, 13+9 nokta) **İNMEMİŞ** —
diff duruyor, `data/`ya uygulanmamış.

---

## §1 ENGEL — adı C3, ve beş gün önce bu projede yazılmış

Engel bir sürpriz değil; `arac/gun.py:168`'de **adıyla** duruyor:

> **GEÇİCİ KAPI (C0 → C3):** *"veride negatif yıl var + motor sayaçsız ⇒
> ÖLÇÜLEMEDİ". Motor (`uret_petek.py`) C3'e kadar tarihleri DİZGİ olarak
> kıyaslar: ters sıralı bir MÖ dönemi SESSİZ SAHİPSİZLİK üretir. Motorun
> sayaçlı olduğunu C3 tek bir işaretle beyan eder: `uret_petek.py` içinde
> satır başında `GUN_SAYACI = True`. İşaret yoksa ve veride yıl ≤ 0 varsa
> harita ÖLÇÜLEMEZ. C3 inince işaret konur, kapı kendiliğinden açılır.*

**Niçin dizgi kıyaslaması MÖ'de bozuk:** motor `p["f"] <= g < p["t"]`
biçiminde METİN kıyaslar. Metinde:
```
"-0499" < "-2999"   ⇒ DOĞRU gibi görünür, ama -2999 ZAMANDA DAHA ÖNCEDİR
"-2999-01-01" < "1453-01-01"   ⇒ "-" rakamlardan önce sıralanır, tesadüfen doğru
```
Negatifler arasında sıra **TERS** döner. Sonuç sessizdir: dönem ters
sıralanır, yerleşim o gün sahipsiz kalır, harita delik verir ve **hiçbir
kapı bunu yakalamaz** — çünkü veri biçimsel olarak geçerlidir.

### Ölçülen iş hacmi — engel KÜÇÜK

| Kalem | Ölçüm |
|---|---|
| `uret_petek.py`de dizgi tarih kıyaslaması | **~10 yer** (`p["f"] <= g < p["t"]` kalıbı) |
| Motor tuzunda `datetime.date` kullanımı | **1** (`uret_petek.py:2908` `KESIT_SON`) — Python `date` yıl < 1'i REDDEDER |
| `GUN_SAYACI = True` işareti | **0** (konmamış) |
| `arac/gun.py`yi import eden dosya | 🔴 **0** |

🔴 **`gun.py` yazılmış, sınanmış, ve ÇAĞIRANI YOK** — bugünün üçüncü
"çağıranı olmayan kapı" vakası (ötekiler: tahta sunucusunun istemcisi,
yayın kapısının çağrılmayan sınavı). Alet hazır, bağlantı yok.

📌 **Hüküm: C3 bir araştırma işi değil, SINIRLI bir yama.** ~10 kıyaslama
+ 1 `KESIT_SON` + 1 işaret + iki yönlü sınav. Günler değil saatler.

---

## §2 MALİYET — ve en önemli ölçüm

```
uret_petek.py:4576   tarihler = sorted(t for t in tarihler if EPOK <= t <= KESIT_SON)
```

🔴 **Motor her TAKVİM GÜNÜNÜ değil, yalnız DEĞİŞİM TARİHLERİNİ hesaplıyor.**
Bugün ayrık değişim tarihi: **2.414**.

⇒ **UFUK'u 945 yıldan 5500 yıla açmak, inşa süresini 5,8 katına ÇIKARMAZ.**
Maliyet pencerenin GENİŞLİĞİYLE değil, verinin getirdiği **yeni değişim
tarihi sayısıyla** büyür. Sümer paketinin 22 noktası ~40 yeni tarih
getirir: ölçülebilir, ucuz.

📌 Bu, bütün planın dayandığı ölçüm: **pencereyi açmak bedava sayılır,
DOLDURMAK pahalıdır.** Tersini varsayan bir plan (önce veriyi topla,
sonra pencereyi aç) yanlış sırada çalışırdı.

---

## §3 UFUK'UN YENİ DEĞERİ — ve bir beyan

Emre *"sümerlerin başından 2000 senesine kadar"* dedi. Sümer'in "başı" tek
bir tarih değil; üç aday var ve seçim bir ÖLÇÜM değil bir SINIR İŞARETİDİR
(`D210`: pencere uçları ölçüm değildir):

| Aday | Ne | Neden/neden değil |
|---|---|---|
| ~MÖ 5500 | Ubeyd dönemi | yerleşim var, **devlet yok** — atlasın birimi polity |
| **MÖ 3500** | Uruk · ilk yazı · ilk şehir-devlet | ✅ atlasın birimi burada DOĞAR |
| ~MÖ 2900 | Erken Hanedanlar | ilk kral listeleri — ama Uruk'u dışarıda bırakır |

🔴 **SEÇİM: `UFUK = ("-3500-01-01", "2000-12-31")`** — gerekçe: atlas
devlet çizer, devlet Uruk'ta doğar. **Bu bir BEYANDIR, ölçüm değil.**
Ve Emre'nin kendi kuralı seçimi zararsız kılıyor: *"şehir tarihî kayıtlara
ilk düştüğü tarihte sahneye çıkar"* ⇒ pencerenin erken ucu boş kalsa bile
bir zarar değil, bir ÇERÇEVEDİR. Pencere yalnız **en erken kaydı içermeye**
yetecek kadar geniş olmalı; fazlası maliyet getirmez (§2).

⚠️ `VERI_UFKU` **DEĞİŞMEZ** (1281-1923). O pencere "verinin TAM yazıldığı"
yeri gösterir ve bugün tam olan yalnız orası. `girdi.py:752 devirler()`
UFUK − VERI_UFKU farkını zaten "verisi henüz TAM yazılmamış devirler"
olarak üretiyor ⇒ açılış, mimarinin ZATEN beklediği şey.

---

## §4 SIRA — ve niçin bu sıra

```
① C3          motor sayaca geçer           → MÖ verisi İNEBİLİR hâle gelir
② SÜMER       bekleyen diff iner            → ilk MÖ kaydı
③ UFUK        -3500 … 2000                  → tuz değişir, önbellek düşer
④ TAM İNŞA    bir kez                       → çerçeve görünür hâle gelir
⑤ DOLDURMA    paralel oturumlar, haftalar   → §5
⑥ TAM İNŞA    doldurma bittikçe tekrar
```

🔴 **①'in ②'den önce olması ZORUNLU, tercih değil.** Sümer paketinde
negatif yıl var (`Ur -0316` biçiminde). C3 inmeden inerse motor onu dizgi
kıyaslar ⇒ **sessiz sahipsizlik** ⇒ harita delik verir ve kapı görmez.
Kapının kendisi bunu söylüyor: *"veride negatif yıl var + motor sayaçsız
⇒ ÖLÇÜLEMEDİ"*.

🔴 **③'ün ④'ten ayrılamaması:** `UFUK` `girdi.py`de, `girdi.py` motor
tuzunda (`§9.1`) ⇒ UFUK'a dokunmak **bütün önbelleği düşürür**. Yani UFUK
değişikliği her hâlükârda bir TAM İNŞA demektir. Bu yüzden ①②③ **aynı
koşuya** bindirilir; ayrı yapılırsa 7-8 saat iki kez ödenir.

---

## §5 DOLDURMA — kapsamın gerçek büyüklüğü, dürüstçe

Emre'nin istediği üç şey var ve üçü de **tek gecelik iş değil.** Bugünkü
kapsam, 1281-1923 Osmanlı çekirdeği için:

```
897 künye · 1.801 kronoloji maddesi · 4.300 yerleşim noktası
```

MÖ 3500 – MS 2000 bütün dünya, aynı kaynak sıkılığıyla (her tarih bir
kaynak, her uç ikinci bir tanık, TDV birincil, `__BOSLUK__` dürüstlüğü)
bunun **20-50 katıdır.** Bu bir itiraz değil, bir ÖLÇEK beyanı: işi
kademelendirmek gerekiyor, yoksa yarım kalır ve yarım kalan bir atlas
"devletsiz dünya" diye okunur.

⚠️ Ve bunu sessizce küçültmek benim kararım değil: ölçeği yazıyorum,
kademeyi Emre onaylar.

### Kademeleme ölçütü — `ONCELIK.md`in çöl seyyahı kuralı
Bir bölge, **o bölgede bir kullanıcının bakacağı yoğunlukta** doldurulur.
Çekirdek %95, uzak coğrafya %80'de bırakılır.

### Paralel oturum bölmesi — ölçüt DOSYA (`§7`)
Her oturum **ayrı bir `data/` dosyası** alır; çakışma dosya düzeyinde
kesilir. Önerilen bölme (her biri bir oturum, her biri bir dosya):

| Kıta | Devir | Dosya |
|---|---|---|
| Mezopotamya | MÖ 3500 – MÖ 539 | `yerlesimler_mo_mezopotamya.js` |
| Mısır | MÖ 3100 – MÖ 30 | `yerlesimler_mo_misir.js` |
| Anadolu | MÖ 2000 – MÖ 330 | `yerlesimler_mo_anadolu.js` |
| Yunan-Roma | MÖ 800 – MS 476 | `yerlesimler_mo_akdeniz.js` |
| İran | MÖ 700 – MS 651 | `yerlesimler_mo_iran.js` |
| Hindistan-Çin | MÖ 2500 – MS 1000 | `yerlesimler_mo_dogu.js` |
| 20. yy | 1923 – 2000 | `yerlesimler_ms20.js` |

Her dosya için AYNI üçlü üretilir: künye (`devletler.js`e koordinatör
yazar) · kronoloji maddeleri (kendi `olaylar_*.js`i) · yerleşim noktaları.

🔴 **"Şehir ilk kayda düştüğü tarihte sahneye çıkar"** kuralı yazılı hâle
getirilmeli: yerleşimin `f:` değeri **en erken tarihî kaydın tarihi**dir,
kuruluş tahmini DEĞİL. Kaynak yoksa `kesinlik:` alanı bunu taşır; tarih
uydurulmaz (`D210`). Bu kural her doldurma şartnamesine AYNEN girer.

---

## §6 BU AKŞAM — 19:00 koşusu ne olacak

Üç seçenek, ve maliyetleri:

| | Ne | Maliyet |
|---|---|---|
| **A** | 19:00'da bugünkü UFUK'la koş | 7-8 saat, MÖ'ye dair HİÇBİR kazanç |
| **B** | C3'ü 19:00'dan önce indir, UFUK'u aç, sonra koş | 7-8 saat, **çerçeve açılır** |
| C | 19:00'da koş, C3'ü gece yap, sonra YİNE koş | **14-16 saat** |

🔴 **Önerim B.** C3 sınırlı bir yama (§1) ve 19:00'a iki saatten fazla var.
C bütün gece koşuyu iki kez ödüyor; A ise bu akşamın koşusunu Emre'nin bu
akşam verdiği kararın DIŞINDA bırakıyor.
⚠️ B'nin şartı: C3 **19:00'dan önce sınavıyla** inmeli. İnmezse A'ya
düşülür — çünkü sınavsız bir motor yaması tam inşayı çöpe atar.

---

## §7 AÇIK KALEMLER

- 🔴 C3 yaması — UMIT'e atandı (`denetim/C3-GUN-SAYACI.diff` olarak)
- UFUK değeri yazımı — koordinatör (C3 indikten SONRA, aynı commit'te)
- Sümer diff'inin inişi — koordinatör (C3'ten sonra)
- Doldurma kampanyası şartnameleri — 7 dosya, 7 oturum (§5)
- `VERI_UFKU` ne zaman genişler — doldurma bir kıtayı bitirdikçe, kıta kıta
