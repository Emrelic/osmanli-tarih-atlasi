# ZAMAN-Z4-1008 — devlet dizininin ileri ucu (1923 → 1945)

Kalem Z4 · görev UMIT İRTİBAT (8 Eki 2026, Emre'nin doğrudan talimatı) · ağaç `C:\atlas-z4`
(`origin/makine/umit` = `e28edfdc`, KOŞU 21 sonrası) · **yalnız ölçüm ve ÖNERİ**. `data/devletler.js`
ve `arac/renkler.py` koordinatörün dosyası olduğu için hiçbir veri yazılmadı. Makine dökümü
`ZAMAN-Z4-1008-KUNYE.json`.

## §0 Önceki ölçümler — bu kalem için ne söylediler
- **KAPSAM-1945-OLC-0930 (30 Eyl):** 90 künyede `t:"1923-10-29"` vardı. Kovalar: 70 uzatılacak ·
  11 arada bitmiş · 2 ardıl istiyor · 7 ölçülemedi. 10 kesin yeni künye gerekiyordu, 18 belirsizdi.
  Hepsi "yok" sayılmıştı.
- **SONRA1923-SAYIM (4 Eki):** 155 künye UC'yi (1923-10-29) aşıyordu. 72'si `t:"1945-09-02"` ile
  kesikti ve bu tarih pencere ucuydu, ölçüm değildi. UC'yi aşıp boyası olmayan künye sayısı
  28'di; başta `turkiye-cumhuriyeti`.
- **SONRA1923-TKLAMP (4 Eki):** UC'de kesik 4.225 dönemin 263'ü gerçek son (`tbmm-turkiye`).
  273 dönem 1923-45 arasında ölen 15 künyeye ait. `ingiltere` ve `danimarka` 1945 penceresinde
  ama beyansız. `isg:` dönemlerinin 61'i `ingiltere` (Mısır 57), 36'sı `fransa` (Tunus).
- **SONRA1923-HAYALET (4 Eki):** 4c/4d hayaletleri **görüyor**, ama 127/324 tavanında gömülü.
  `isg:` dönemlerinden hiçbiri taşmıyor; 78 `v:` dönemi kid'siz.
- **O günden bugüne fark:** 30 Eyl → 4 Eki arasında künye işinin çoğu **zaten yapılmış**
  (aşağıda ②-a). Z4'ün asıl işi sıfırdan künye yazmak değil, **kalan boşluklar ve boya**.

## ① Öngörü — ölçümden ÖNCE yazıldı (betik koşmadan)
| # | öngörü | ölçülen | |
|---|---|---|---|
| `t:"1923-10-29"` künye | 85-92 | **11** | ✗ — 79'u 4 Eki'den ÖNCE düzeltilmişti. Öngörüm 30 Eyl sayısını bugüne taşıdı; SAYIM'ın 72'si bunu zaten söylüyordu |
| `t:"1945-09-02"` | 70-75 | **72** | ✓ |
| 10 kesin yeni künyeden var olan | 5-6 | **10/10** | ✗ (az tahmin) |
| UC'yi aşan boyasız | 20-28 | **17** | ✗ (fazla tahmin) |
| UC'de sahibi biten nokta | ~285 | tbmm 263 + 8 küçük künye 14 | ✓ |

Mekanizma doğru çıktı: KOŞU 21 künye `t`'lerine dokunmamış. Ama 30 Eyl → 4 Eki arasındaki
künye işini öngörü hesaba katmadı.

## ② Ne ölçtüm (sayıyla)
**Ölçüm aleti:** `devletler.js` node `vm` ile gerçekten eval edildi. Boya
`renkler.BOYALAR` (704) ile, nokta `girdi.yukle()` ile okundu (4.300 nokta, UC günü `s:` sahibi
4.094 nokta / 116 kimlik). Dizgi karşılaştırmasında `pad()` kullanıldı.
```
künye 896 · boya 704
t = 1923-10-29          11
t = 1945-09-02          72   (70 pencere beyanlı · 2 beyansız: ingiltere, danimarka)
t > UC                 155   · f > UC 17 · UC'yi aşan BOYASIZ 17 (boya_gerekli beyanlısı 0)
isg: UC'de biten        ingiltere 61 · fransa-cumhuriyet 36   (TKLAMP ile birebir)
```
**②-a 30 Eyl'deki 90 künye bugün nerede:** 64'ü `1945-09-02`de (pencere beyanlı) · 11'i
1923-45 arasında gerçek bir günde (kaynaklı: polonya, baltıklar, avusturya, arnavutluk, hicaz,
almanya, somali, senusi, cimma…) · 4'ü 1945 sonrasında (sovyet 1991, yemen 1962, bulgaristan
1946, kesmir 1947) · **11'i hâlâ 1923-10-29'da**.

**②-b Hâlâ 1923'te kesik olan 11 künye:**
| künye | 1923'teki nokta | hüküm |
|---|---|---|
| tbmm-turkiye | 263 | **gerçek son**, dokunulmaz |
| tannu-tuva | 0 | **genişlet → 1944-10-11** (TDV `tuva`: "11 Ekim 1944 tarihinde alınan bir kararla…"). 🔴 Künyede "TDV kapsam dışı — bulunamadı" yazıyor ama yanlış: TDV maddesi var (GET 200) ve `f` 1921-08-14'ü birebir doğruluyor |
| bhopal | 1 | **genişlet → 1945 pencere** (TDV `bopal--devlet`: "1949’da Hindistan Birliği’ne katıldı.") |
| surakarta | 1 | **genişlet → 1945 pencere** (Britannica: "occupied by Japan (1942–45) … later incorporated into the Indonesian republic") |
| yogyakarta · cohor · tidore · san · buganda · agadez | 1-5 | genişletme önerisi **kaynak bekliyor**. TDV maddesi yok (302). Britannica curl'e boş gövde döndü (tuzak ⑦: çekilemedi, yok demek değil) |
| ingiliz-kuzey-amerika | 0 | 1923 sorunu değil (kendi notu t'nin 1867 olmasını istiyor) |

**②-c Künyesiz boşluklar.** Z5 noktaları uzatınca bu aralıklar **delik** açar:
1. **`kacar` t 1925-01-01 (yalnız yıl) → `iran` f 1925-12-12: 11 ay, 108 nokta.** TDV
   `kacarlar` yalnız yıl verir ("Kaçar hânedanı sona ermiş oldu (1925)"). TDV `riza-sah-pehlevi`
   iki şey söyler: "12 Aralık 1925 … Pehlevî hânedanı kuruldu" ve **"31 Ocak 1924 tarihinde
   meclis … Kaçar hânedanına son verdi"**. Bu TDV'nin kendi içinde bir çelişkisi (tuzak ⑥).
   Öneri: **t = 1925-12-12 ÜST SINIR, "gün komşudan: iran · TDV riza-sah-pehlevi"**. `§4`'ün
   üç şartı tutuyor (komşunun günü kaynaklı · hedefte gün yok · aynı süreç).
2. **`polonya` t 1939-10-06 → hiçbir şey.** 1945-09-02'de Polonya toprağı künyesiz. Model de
   tutarsız: Fransa ve Çekoslovakya künyeleri savaş boyunca sürüyor. USHMM: "Virtually all of
   Poland … liberated by Soviet forces by the end of January 1945." TDV `polonya` 1944-47 için
   gün vermiyor. ⇒ Ardıl künye öneriyorum; `f` **bulunamadı**.
3. **`arnavutluk-bagimsiz` t 1939-04-07 → `arnavutluk-halk-cumhuriyeti` f 1944-11-29.** TDV:
   "1939-1944 yılları arasında Arnavutluk İtalyanlar ve Almanlar tarafından idare edildi".

**②-d 30 Eyl listeleri bugün:**
- **Kesin 10:** **10'u da VAR.** Boyalı olanlar yalnız `suudi-arabistan` ve
  `mogolistan-halk-cumhuriyeti`. Kalan 8'in boyası yok: turkiye-cumhuriyeti · hatay-devleti ·
  mancukuo · vichy · italyan-dogu-afrikasi · hirvatistan · slovakya · bohemya-moravya.
- **Belirsiz 18:** 4'ü kapandı (nazi→`almanya` genişletildi · nanjing VAR · hicaz-necid =
  `suud-ucuncu` · italyan libyası = `italya`). 1'i kısmen kapandı (filipin-commonwealth var).
  2'si yeni künye adayı (Şarkî Türkistan 1933 / 1944, TDV `turkistan`). 6'sına künye değil
  `isg:` öneriliyor (Genel Valilik · Mengjiang · Burma 1943 · II. Filipin · Nedić/Karadağ ·
  Helen · Azad Hind). 2'si ertelendi (Çin Sovyet · Tanca). 2'si açılmasın (Vatikan · Karpat
  Ukraynası). 1'i Z-B kararı (Lübnan/Suriye). İspanyol Fas ölçülmedi (Z5).
- **İşgalci künyeleri 1939-45: eksik 0.** almanya (1945-06-05'e kadar) · italya ·
  meiji-japonya · sovyet · macaristan · bulgaristan · romanya · ingiltere · abd · fransa hepsi
  pencerede. `isg:` işi künye işi değil, **yerleşim** işi (Z5).

**②-e Boya.** `renk_olc.py --oner` 17 boyasız künye için koşturuldu. Araç kendi uyarısını
verdi: "**komşusu ölçülemeyen kimlik**" — 17'sinin de verisi `girdi.py`'nin okuduğu
dosyalarda yok, engel kümesi yalnız altlık ile Osmanlı ikilisinden oluşuyor. Bu yüzden
önerdiği renkler **anlamsız** (ör. turkiye #6c24d8, yanındaki tbmm #7e24d2'ye çok yakın; vichy
#7224d8). Kullanılmadı. Artefakt ağaçla birlikte silindi.

**②-f 1945-2026 iskeleti (yalnız LİSTE, künye yazılmadı):** 193 BM üyesinin 90'ında aday
öncül/aynı künye var, **103'ünde hiçbir künye yok**. Künyesi olan 90'ın 85'i 1945'te yaşıyor;
ama bu "aynı polity" demek değil (ör. `fransiz-bati-afrika` → 8 ülke), sınıflandırma
yapılmadı. Ölü 20. yy devletleri 31, 13'ünün aday künyesi var. ⚠️ Liste **model bilgisidir,
kaynak değildir**. İçindeki yıllar yalnız sıralama içindir, veriye yazılamaz.

## ③ Ne bulamadım
- Polonya ardıl künyesinin `f` günü (PKWN Temmuz 1944 / Geçici Hükûmet Ocak 1945 / TRJN
  Haziran 1945 — hiçbiri kaynakla doğrulanmadı; Britannica 403).
- 6 küçük künyenin 1945'e sürdüğüne dair kaynak: yogyakarta · cohor · tidore · san · buganda ·
  agadez.
- `nanjing-wang-jingwei`nin bitiş günü (Britannica 403 ya da boş gövde).
- Şarkî Türkistan 1933'ün `t`'si. TDV hem 21 Mart 1934 (Kaşgar'ın düşüşü) hem "1937 yılına
  kadar" diyor; hangi cümlenin neyi tarihlediği belirsiz (tuzak ⑧).
- Boya: ölçülemedi (yukarıda).

## ④ Ne istiyorum (seçenekliyse önerimle) — karar koordinatörde / Emre'de
1. **Önce Osmanlı halkası, koordinatör yazar** (JSON `kunyeler[]`, `islem`):
   - `tannu-tuva` t → 1944-10-11 ve kaynak → TDV tuva (genişlet)
   - `kacar` t → 1925-12-12 ÜST SINIR (genişlet; TDV iç çelişkisi notta)
   - `sarki-turkistan-1944` yeni (1944-11-12 → pencere)
   - `ingiltere` / `danimarka` ic_not_t pencere beyanı (beyan)
   - `bhopal` / `surakarta` t → 1945-09-02 (genişlet)
2. **Polonya ardılı:** A (öneri) yeni künye + `harita:"polonya"`, `f` araştırma bekliyor ·
   B `polonya` genişletilir + `isg:`.
   **Arnavutluk 1939-44:** A (öneri) künye yok; yerleşimde `s:italya` (İtalya mütarekesine
   kadar, gün araştırılacak), ardından `isg:almanya` → 1944-11-29 · B ara künye.
3. **Türkiye Cumhuriyeti'nin rengi (Emre kararı):**
   - **A (öneri):** `harita:"tbmm-turkiye"`. TBMM moru 1920'den 1945'e kesintisiz sürer.
     Komşu ölçümü zaten yapılmış, yeni çakışma riski sıfır; `avusturya-ikinci-cumhuriyet`te
     aynı emsal var.
   - **B:** Osmanlı kırmızısı ailesi. `app.js` Osmanlı'yı özel boyar; Cumhuriyet'i Osmanlı
     rengiyle göstermek "Osmanlı bitti" maddesini haritada görünmez kılar. **Önerilmez.**
   - **C:** Z5 yerleşimleri indikten sonra `--oner` ile yeni renk.
   Ötekiler: polonya ardılı · almanya-muttefik-isgali · oniki-ada için `harita:` öncülün
   anahtarı. İtalyan Doğu Afrikası · bohemya · hatay · vichy · slovakya · hırvatistan ·
   mançukuo · nanjing · ispanya-milliyetçi · endonezya · filipin · Şarkî Türkistan için yeni
   renk; bu renkler **Z5 verisi girdikten sonra toplu `--oner`** ile seçilmeli, bugün yazılırsa
   bayat olur.
4. **Z-B:** Lübnan/Suriye için 1945 ufkunda ayrı künye açılmaması öneriliyor
   (`suriye-lubnan-mandasi` pencere ucu kalır).
5. **Z5'e uyarı (kopyası gönderildi):** kaçar, polonya ve arnavutluk boşlukları · Mısır
   `isg:ingiltere` 57 dönemi `misir-kralligi` ile çakışıyor · D204 (devletin yaşaması noktanın
   elinde kaldığı anlamına gelmez).

## Dosyalar
- `denetim/ZAMAN-Z4-1008.md` (bu rapor)
- `denetim/ZAMAN-Z4-1008-KUNYE.json`: `kunyeler[]` 66 kayıt (dokunmadim 50 · genislet 10 ·
  ardil 2 · yeni 2 · beyan 2) + `kesin10_0930` + `belirsiz18_0930` + `boya` + `liste_1945_2026`
- Veri ya da kod değişikliği yok; diff yok.
