# SINIR-DÜNYA-0077 — 1923 sınırlarını belgeye dayandırarak bütün dünyaya yaymak

**Emre, 24 Eylül 2026.** Sekiz bölge oturumunun ORTAK şartnamesi. Kendi bölge
mesajınla birlikte YALNIZ bu dosyayı ve `CLAUDE.md`yi oku.

---

## 1. KADEME MERDİVENİ — Emre'nin kendi cümleleriyle (BAĞLAYICI)

> *"İşin geçmişten gelen temeli A kategorisi. Hangi şehir kime ait ise o şehrin
> bölgesini boyayarak elde ettiğimiz A kategorisi harita işin temeli.*
>
> *Görüntü güzelleşsin, girinti çıkıntı benek eksklav boşluklar dolsun diye B
> ayarına geçince yapılacak olan, A'yı temel alıp dolgular ile ilerleyen B
> gösterimi de temelin bir üst noktası.*
>
> *Anlaşma ve belge ile bölge bölge kabataslak çizilen C tipi sınır bunun bir üst
> versiyonu. C tipi sınırın özelliği belgeye dayanması ama milimetrik olmaması.*
>
> *D tipi sınır ise modern sınırlar. Hangi dağ hangi tepe sırtı zirvesi eteği
> kime ait, nehrin doğusu kime batısı kime, ait şehirler köyler araziler kime
> ait diye neredeyse koordinat bazlı çizilen günümüzdeki modern sınırlar ise D
> tipi sınırlardır."*

**Merdiven, yukarıdan aşağıya:** `D` varsa D · yoksa `C` · o da yoksa `A/B`.
Bir kademe ötekinin YERİNE geçmez, ÜSTÜNE biner. A hep altta durur.

### 1.1 🔴 TERİM TUZAĞI — okumadan tek satır yazma

Emre'nin **"D tipi"** dediği (modern, koordinat bazlı, milimetrik) şey **şemadaki
`sinif:"D"` DEĞİLDİR.** Şema harfleri 16 Eylül'de yeniden dağıtıldı
(`oturumlar/GORUNUM-ABCD-0916.md` üst bölüm) ve o gün "eski D" ikiye ayrıldı:

| Emre'nin dili | veriye yazacağın `sinif` | ne demek |
|---|---|---|
| **"D tipi" = milimetrik, modern, koordinatlı** | **`E`** | hukukî kesin sınır (antlaşma/protokol) |
| aynısı + uluslararası tanınma kanıtı | **`F`** | E + Milletler Cemiyeti kaydı / büyük devletlerin tanıması |
| **"C tipi" = belgeli ama kaba** | **`C`** | antlaşma metni büyük şehir/bölge sayar, koordinat vermez |
| fiilî/de facto koordinatlı hat (işgal, ateşkes) | **`D`** | hukuken geçersiz — **Emre'nin "D"si BU DEĞİL** |
| koordinat bilinmiyor | **`YOK`** | çizilmez; iş A/B'ye kalır |

⚠️ Bu tabloyu yanlış okuyan bir oturum, milimetrik hatları "fiilî" diye
işaretler ve hukukî görünümden DÜŞÜRÜR. Ölç: `sinif:"D"` yazmadan önce
"bu hat hukuken geçersiz mi?" sorusunu cevapla.

### 1.2 🔴 BİR SINIR ZAMAN İÇİNDE C'DEN E'YE GEÇEBİLİR

Emre'nin verdiği vaka, şemanın tek cümlelik özeti:

> *"Kasr-ı Şirin Anlaşması 1639'da çizildiğinde C tipi sınır idi; bölgeler
> şehirler kabataslak veriliyordu. Fakat zaman ilerleyip modern döneme gelinince
> bu sınır sonraki versiyonlarda komisyonlarla D tipine dönüştü; milimetrik
> olarak hangi köy hangi şehir hangi tepe hangi dere kime ait artık belli."*

⇒ **Sınıf kaydın değil, PENCERENİN özelliğidir.** Aynı coğrafî hat için
**iki ayrı kayıt** yazılır:

```
{ id:"c1639-osm-safevi-kasri-sirin",  sinif:"C", f:"1639-05-17", t:"1913-11-17", ... }
{ id:"d1913-osm-kacar-istanbul-prot", sinif:"E", f:"1913-11-17", t:"1920-04-23", ... }
```

Kurallar:
- Ardılın `f`si öncülün `t`siyle **birebir aynı gün** olmalı — yoksa arada
  sınırsız bir aralık kalır ve `denetim/ARAC-MILIMETRIK-0923.js` ①'i patlar.
- Geçiş günü **komisyonun/protokolün günüdür**, "modern dönem" gibi bir his
  değil. Gün kaynaktan okunur; kaynak yıl diyorsa `YYYY-01-01` ve bildir.
- Öncül kaydı SİLME. C dönemi gerçek bir dönemdir ve o yıllarda ekranda
  görünmelidir.

### 1.3 Çizginin rengi bir ÖLÇÜ BEYANIDIR (24 Eylül, uygulandı)

```
iki renkli  (her yarısı o yandaki devletin renginin koyusu)  = D/E/F · boya bu hatta OTURTULDU
siyah       (tek renk)                                       = C     · boya bu hatta OTURTULMAZ
```

C'nin siyah olmasının sebebi keyfî değil: koordinatı kaba olduğu için renk ona
dayandırılmaz (`_D_YASLA_SINIF_*` yalnız F/E alır). Ülke rengi taşımayan bir
çizgiyi ülke renginde çizmek okuru yanıltırdı.

---

## 2. BUGÜN NEREDE DURUYORUZ — ölçüldü, 24 Eylül

`node` ile bütün `data/d_sinirlar*.js` yüklenerek sayıldı. **723 kayıt**;
1923-09-01 günü **197 hat çiziliyor, 73.645 km.**

| aile | kayıt | E (çizilen) | D | C | YOK | çizilen km | renk hatta oturuyor mu |
|---|---|---|---|---|---|---|---|
| (Türkiye) `d_sinirlar.js` | 34 | 19 (10) | 3 | 5 | 7 | 1.944 | ✅ |
| AVRUPA_BATI | 159 | 68 (39) | 10 | 9 | 72 | 8.536 | ✅ |
| AVRUPA_ORTA | 205 | 45 (27) | 13 | 0 | 147 | 4.680 | ✅ |
| KOMSU | 53 | 16 (9) | 1 | 8 | 28 | 4.226 | ✅ |
| AFRİKA | 41 | 29 (19) | 8 | 4 | 0 | **21.348** | 🔴 hayır |
| AMERİKA | 79 | 26 (17) | 0 | 16 | 37 | **20.943** | 🔴 hayır |
| ASYA | 133 | 30 (18) | 0 | 21 | 82 | **10.066** | 🔴 hayır |
| ORTADOĞU | 13 | 8 (5) | 3 | 1 | 1 | 1.174 | 🔴 hayır |
| OKYANUSYA | **6** | 3 (2) | 3 | 0 | 0 | 728 | 🔴 hayır |

İki büyük bulgu:
1. **Çizilen 73.645 km'nin 54.259 km'si (%74) renk için hiç kullanılmıyor.**
   Hatlar ekranda var, boya onlara oturmuyor. (Koordinatör 24 Eylül'de beş
   aileyi yaslama listesine ekledi — senin işin artık ölçüp iyileştirmek.)
2. **374 kayıt `YOK` sınıfında** — koordinatı bilinmediği için çizilmiyor.
   Merdivenin en verimli basamağı burası: `YOK` → `C` bile büyük kazanç.
3. **F sınıfı SIFIR.** Tanınma tablosu (`denetim/TANINMA-1923-0916.json`) hiç
   yazılmamış. F iddia etmeden önce onu kur ya da E'de kal (`D107`).

---

## 3. BÖLGELER VE DOSYA SAHİPLİĞİ — çakışmanın tek panzehiri

🔴 **Her oturumun TEK bir veri dosyası vardır ve başkasınınkine YAZMAZ.**

| oturum adı | SENİN dosyan | ilk kalem |
|---|---|---|
| `SINIR-D-KOMSU-0077` | `data/d_sinirlar_komsu.js` | **Yunanistan–Arnavutluk** (aşağıda §3.1) |
| `SINIR-D-AFRIKA-0077` | `data/d_sinirlar_afrika.js` | 21.348 km · kapsama kendi başlığında "~%40" diyor |
| `SINIR-D-AMERIKA-0077` | `data/d_sinirlar_amerika.js` | 37 `YOK` · Kuzey + Orta + Karayip + Güney |
| `SINIR-D-ASYA-0077` | `data/d_sinirlar_asya.js` | 82 `YOK` · İran · Hindistan · Çin · Rusya · Orta Asya |
| `SINIR-D-ORTADOGU-0077` | `data/d_sinirlar_ortadogu.js` | 13 kayıt — en zayıf dosya |
| `SINIR-D-OKYANUSYA-0077` | `data/d_sinirlar_okyanusya.js` | **6 kayıt** · + Endonezya/Malezya/Filipinler/Yeni Gine |
| `SINIR-D-AVRUPA-ORTA-0077` | `data/d_sinirlar_avrupa_orta.js` | 147 `YOK` |
| `SINIR-D-AVRUPA-BATI-0077` | `data/d_sinirlar_avrupa_bati.js` | 72 `YOK` |

**PAYLAŞILAN DOSYALAR KOORDİNATÖRÜNDÜR** — `js/d_katman.js` · `js/app.js` ·
`index.html` · `CLAUDE.md`. Bunlarda bir şey gerekiyorsa TAHTADAN İSTE, kendin
yazma. Sebebi ölçüldü: 23 Eylül gecesi altı oturum `js/d_katman.js`e aynı anda
yazdı; 64 düzenlemeden 1'i çakışıp düştü. Kurtaran şey yalnızca `Edit`in çapa
disiplini oldu.

🔴 **`Write` ile paylaşılan dosyanın ÜSTÜNE YAZMAK YASAK.** Yalnız `Edit`.
`Write` çapaya bakmaz; saatlerce iş sessizce kaybolur.

### 3.1 KOMSU oturumunun ilk kalemi — Arnavutluk

Ölçüldü (`TK Yunanistan kuzey`, 1923-09-01, hattın 5 km iki yanı): Yunanistan
hatlarında doğru renk %50–71'den %96–99'a çıktı, **ama Yunanistan–Arnavutluk
%36'da kaldı** — çünkü o hat `C` sınıfında ve C'ye renk dayandırılmıyor.

⇒ Çare "C'yi yaslamaya sokmak" DEĞİL (kural haklı: C kaba). Çare **hattı
E'ye yükseltmek**: Arnavutluk sınırı 1913 **Floransa Protokolü** ile
kararlaştırıldı ve 1921 **Büyükelçiler Konferansı** kararıyla teyit/tahdit
edildi. Bunlar koordinat taşıyorsa `sinif:"E"` hak eder. Kaynağı bulamazsan
`bulunamadı` yaz — uydurma.

---

## 4. HER OTURUMUN TESLİM SÖZLEŞMESİ

### 4.1 Önce ÖNGÖRÜ, sonra ölçüm (`§11`)
Ölçmeden önce şartnamene yaz: *"bölgemde `YOK` sınıfının en çok N tanesi
belgeye bağlanabilir"* + sınav anı. Öngörü çürürse bu bir başarıdır, sakla.

### 4.2 Ölçü birimi — HERKESTE AYNI
**Hattın 5 km iki yanından örnek noktalar; o gün doğru renkli olanların oranı.
ÖNCE → SONRA.** (Yunanistan oturumunun kullandığı ölçü.) Gün: `1923-09-01`.
Ölçüm betiğin `denetim/SINIR-D-<BÖLGEN>-0077-olc.py` olsun ve **önce bilinen
bir pozitif vakayla ateşlendiğini göster** (`B9`: "0 bulundu" ancak aramanın
çalıştığı kanıtlanırsa bir sonuçtur).

### 4.3 Kaynak (`CLAUDE.md §4`)
- İslâm dünyası/Osmanlı ve komşuları: **TDV birincil.**
- Sınır tahditleri için **IBS (International Boundary Study)** serisi meşru ve
  bu projede zaten kullanılıyor — künyesi `dayanak` alanına açıkça yazılır.
- Milletler Cemiyeti antlaşma serisi (LNTS), barış antlaşmalarının kendi
  metinleri, resmî sınır komisyonu raporları meşru.
- **Vikipedi tek dayanak değildir.** Forum/blog/YZ metni/popüler tarih YASAK.
- **Atlas referans değildir** (`D207`): komşu kaydın günü, atlas koordinatı
  dayanak olamaz. Çelişkide atlas düzelir.
- Gün bilinmiyorsa `YYYY-01-01`; **yıl bilinmiyorsa yıl yazılmaz.**

### 4.4 Yazacağın alanlar
Şema: `denetim/SEMA-D-0916.md`. En az: `id · taraflar · f · t · sinif ·
sol_taraf · hat · uzunluk_km · geometri_kaynagi · dayanak[] · kesinlik_km`.
`sol_taraf` YANLIŞSA iki renkli çizgi ters boyanır — hat yönünün **sağı**
pozitif offsettir; emin değilsen yaz ve tahtadan bildir.

### 4.5 Bitmeden önce koş
```
node denetim/ARAC-MILIMETRIK-0923.js     # ① anakronizm 0 · ② belgeden önce çizim 0
node --check data/<senin dosyan>
```
Kendi dosyanı **adıyla** commit et (`git add -- <ad>` · `git commit -F <mesaj> -- <ad>`).
`git add -A` ve dizin pathspec'i YASAK. Commit teslim değildir; teslim mesajdır.

---

## 5. HABERLEŞME (`CLAUDE.md §7.1 · §7.2`) — kısaltılmış hâli değil, tamamı geçerli

- **Kanal yalnız tahta:** `py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>`
  Türkçe metni `Write` ile dosyaya yaz, bash o dosyaya DOKUNMASIN (backtick ve
  heredoc Türkçe metni sessizce bozar — `§11`).
- **`HERKES` kural altında:** yalnız ACİL/DURDURUCU ise ve `--dayanak` ile.
- **Bekçi:** Bash `run_in_background` + `py arac/tahta_bekci.py --kim "<ADIN>" --cik`.
  `2>&1` YOK · `--tur` YOK · Monitor YOK · ScheduleWakeup/loop/sleep YOK.
  🔴 **Boş uyandıysan EKRANA HİÇBİR ŞEY YAZMA** — bekçiyi sessizce yeniden kur ve dur.
  "sessiz", "bekliyorum", "benlik bir şey yok" gibi cümleler YASAK; her biri bir tur maliyetidir.
- **Yatay mesaj serbest:** komşu bölgeyle sınırın varsa (hep vardır) doğrudan
  ona yaz. 23 Eylül'de iki oturum tam bunu yaptı ve çakışmayı böyle önlediler.
- **Teslim TEK mesaj:** ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir
  sonuçtur) ③ ne istiyorum. + değişen dosya listesi.
- İş bitince bekçini KENDİN öldür (TaskStop) ve dur.

---

## 6. NE YAPMAYACAKSIN

- `uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py` — **DOKUNMA.**
  Bunlar motor önbelleğinin TUZUdur; birine dokunmak 279 MB önbelleği çöpe atar
  ve 23 dakikalık koşuyu tam yeniden inşaya çevirir.
- `data/yerlesimler*.js` — senin kalemin değil. Gerekiyorsa tahtadan iste.
- Koşu (`uret_petek.py`) BAŞLATMA. D katmanı motorun girdisi değildir; senin
  işin koşu istemez, yayın yeter.
- Başka bölgenin dosyasına yazma. Orada bir kusur görürsen **sahibine yaz.**
