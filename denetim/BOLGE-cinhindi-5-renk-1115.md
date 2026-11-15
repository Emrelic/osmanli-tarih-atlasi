# BOLGE-CINHINDI-5-renk-1115 — Çinhindi bölge denetimi, adım 5 (renk)

Ağaç: worktree `agent-a994e7b7a57a29cc9`, dal `umit-1115-bolge-cinhindi` (taban `origin/main` 8fb10bdf1). Ölçüm 15 Kasım 2026, UMIT.
Bölge tanımı (ölçüm kutusu): lat 7-23,8 / lon 92,3-109,6 → **128 yerleşim**; künye = bu yerleşimleri `s:` ile sahiplenen ve `bolge: guneydogu-asya` olan **58 künye** (`girdi.yukle` + `girdi.oku_devletler`). Madde evreni: `data/olaylar*.js` + `data/kronoloji*.js`, `OLAY_TARAF` eşlemesiyle: **295 madde** (201 tanesi 1281 öncesi, 94 tanesi 1281 sonrası).

**Önce oku — yöntem sınırı:** bu oturumda erişilen web aracı yalnız Vikipedi türevi sayfalar ve archive.org taramaları döndürdü; CLAUDE.md'ye göre Vikipedi tek dayanak olamaz. Akademik kaynakların (Wyatt, Baker-Phongpaichit, Harvey, Hall, Taylor, Coedès, Lieberman, Leider, TDV'nin Tayland/Vietnam/Burma maddeleri) sayfaları **okunmadı** (TDV Cloudflare, ticari kitaplar kapalı). Bu yüzden aşağıda "teyit edildi" yalnız **atlasın kendi kaynaklı kayıtlarının birbiriyle tutarlılığı** için kullanılır; dış teyit gerektiren her yer "OKUNMADI" diye işaretlidir. Veri düzeltmesi yazılmadı (bkz. adım 7).

## 1. Kaynak ve yöntem
`arac/renkler.py` `BOYALAR` (tuz dosyası, DOKUNULMADI) `renkler.BOYALAR[<harita anahtarı>]` ile okundu; harita anahtarı = künyenin `harita:` alanı, yoksa künye `id`. Çift-renk ölçütü CIE ΔE76 (L*a*b*, D65). `py arac/renk_olc.py` bu oturumda koşturulmadı (ağır, tüm dünya paleti; UMIT yükü) → "renk_olc çıktısı: ölçülmedi"; ΔE aşağıdaki betikle hesaplandı.

## 2. Künye → renk (58 künye)
Hepsinin boyası tanımlı (BOYALAR eksiği **0**). `harita:` kullanılan künyeler: angkor-kmer→kamboc-kralligi, campa, lan-na, arakan, san-devletleri, ava, ayutthaya, lan-xang, le-hanedani, kamboc-kralligi, toungoo, mac-hanedani, nguyen-beyligi→nguyen-hanedani, konbaung, siyam-chakri, nguyen-hanedani, ingiliz-burma→ingiliz-hindistani, khmer-cumhuriyeti/demokratik-kampucya/kampucya-halk-cumhuriyeti→kamboc-kralligi.
```
ban-chiang-kultur | harita=None | boya=('Ban Chiang Kültürü (Kuzeydoğu Tayland)', '#84bff7')
khok-phanom-di-neolitik | harita=None | boya=('Khok Phanom Di Neolitiği (Orta Tayland kıyısı)', '#0e8cc8')
funan | harita=None | boya=('Funan Krallığı', '#03a6ff')
linyi-champa | harita=None | boya=("Linyi (Champa'nin Ilk Donemi)", '#8fc3f7')
sri-ksetra | harita=None | boya=('Sri Ksetra (Thayekhittaya)', '#302ad8')
thaton-mon | harita=None | boya=('Thaton (Ramannadesa / Mon)', '#dec624')
van-xuan | harita=None | boya=('Van Xuan (Erken Ly)', '#1596ba')
triyu-viet-vuong | harita=None | boya=('Triệu Việt Vương (Triệu Quang Phục)', '#d8302a')
chenla | harita=None | boya=('Chenla (Zhenla) Krallığı', '#ff9bf8')
dvaravati | harita=None | boya=('Dvaravati Mon Krallıkları', '#03a6ff')
lavo | harita=None | boya=('lavo', '#9991d3')
srivijaya | harita=None | boya=('Srivicaya (Śrīvijaya) Krallığı', '#24d830')
tambralinga | harita=None | boya=('tambralinga', '#896ba4')
angkor-kmer | harita=kamboc-kralligi | boya=('Kamboçya Krallığı (Post-Angkor)', '#8d6e63')
hamsavati-pegu | harita=None | boya=('hamsavati-pegu', '#4faebf')
pagan | harita=None | boya=('Pagan Krallığı (Burma)', '#e1e787')
khuc-tu-tri | harita=None | boya=('khuc-tu-tri', '#cf4d48')
ngo-hanedani | harita=None | boya=('ngo-hanedani', '#d2b5e8')
12-su-quan | harita=None | boya=('12-su-quan', '#f8c054')
tien-le-hanedani | harita=None | boya=('Erken Lê Hanedanı (Đại Cồ Việt)', '#2448d8')
campa | harita=campa | boya=('Champa Krallığı', '#305a78')
hariphunchai | harita=None | boya=('Hariphunchai (Haripuñjaya) Krallığı', '#004e00')
ly-hanedani | harita=None | boya=('Lý Hanedanı (Đại Việt)', '#2460d8')
sipsong-panna | harita=None | boya=('Sipsong Panna (Çiang Rung, Tai Lü) Krallığı', '#6ebffc')
tran-hanedani | harita=None | boya=('Trần Hanedanı (Đại Việt)', '#96e7b4')
launggyet | harita=None | boya=('launggyet', '#fc8406')
sukhothai | harita=None | boya=('Sukhothai Krallığı', '#e1aed5')
lan-na | harita=lan-na | boya=('Lan Na Krallığı', '#36c6c0')
arakan | harita=arakan | boya=('Arakan (Mrauk U) Krallığı', '#42ae66')
san-devletleri | harita=san-devletleri | boya=('Şan Beylikleri', '#f6ba00')
hanthawaddy | harita=None | boya=('Hanthawaddy (Pegu) Krallığı', '#e7549c')
ava | harita=ava | boya=('Yukarı Birmanya (Ava Krallığı)', '#126ced')
ayutthaya | harita=ayutthaya | boya=('Ayutthaya Krallığı (Siyam)', '#a828d8')
lan-xang | harita=lan-xang | boya=('Lan Xang Krallığı (Laos)', '#ba7842')
ho-hanedani | harita=None | boya=('Hồ Hanedanı (Đại Ngu)', '#752115')
ming-annam-idaresi | harita=None | boya=("Ming Çin'i Đại Việt İdaresi (Giao Chỉ)", '#03a6ff')
le-hanedani | harita=le-hanedani | boya=('Lê Hanedanı (Đại Việt)', '#8ad224')
kamboc-kralligi | harita=kamboc-kralligi | boya=('Kamboçya Krallığı (Post-Angkor)', '#8d6e63')
toungoo | harita=toungoo | boya=('Toungoo Hanedanı (Birmanya)', '#545d2d')
mac-hanedani | harita=mac-hanedani | boya=('Mạc Hanedanı (Đại Việt)', '#5a42ae')
nguyen-beyligi | harita=nguyen-hanedani | boya=('Nguyễn Hanedanı (Vietnam)', '#b34da5')
laos-kralliklari | harita=None | boya=('Laos krallıkları (Lan Xang ardılları)', '#46193d')
konbaung | harita=konbaung | boya=('Konbaung Hanedanı (Birmanya)', '#7b1fa2')
tonburi | harita=None | boya=('Tonburi Krallığı (Siyam)', '#1b54e4')
tay-son | harita=None | boya=('Tây Sơn Hanedanı', '#781b0f')
siyam-chakri | harita=siyam-chakri | boya=('Siyam Krallığı (Rattanakosin / Chakri Hanedanı)', '#a828d8')
nguyen-hanedani | harita=nguyen-hanedani | boya=('Nguyễn Hanedanı (Vietnam)', '#b34da5')
ingiliz-burma | harita=ingiliz-hindistani | boya=('İngiliz Hindistanı (Şirket ve Taç Dönemi)', '#20d820')
fransiz-cinhindi | harita=None | boya=('Fransız Çinhindi', '#e45d5d')
vietnam-dc | harita=None | boya=('Vietnam Demokratik Cumhuriyeti (ilân)', '#de181e')
myanmar-birmanya | harita=None | boya=('Birmanya Birligi (Myanmar)', '#d82466')
guney-vietnam | harita=None | boya=('Guney Vietnam (Vietnam Devleti 1949 -> Vietnam Cumhuriyeti 1955)', '#d85a24')
pathet-lao-hukumeti | harita=None | boya=('Pathet Lao (Neo Lao Issara) Direniş Hükûmeti', '#cc8424')
laos-kralligi | harita=None | boya=('Laos Krallığı (tam bağımsızlık 1953)', '#2430cc')
khmer-cumhuriyeti | harita=kamboc-kralligi | boya=('Kamboçya Krallığı (Post-Angkor)', '#8d6e63')
demokratik-kampucya | harita=kamboc-kralligi | boya=('Kamboçya Krallığı (Post-Angkor)', '#8d6e63')
laos-demokratik-halk-cumhuriyeti | harita=None | boya=('Laos Demokratik Halk Cumhuriyeti', '#4824cc')
kampucya-halk-cumhuriyeti | harita=kamboc-kralligi | boya=('Kamboçya Krallığı (Post-Angkor)', '#8d6e63')

```

## 3. Ayırt edilebilirlik ölçümü
Aynı anda yaşayan (ömür kesişen, 1281-1923 çekirdeğinde) ve en yakın yerleşim noktası ≤250 km olan **komşu künye çiftleri** için ΔE76 < 25 taraması:
```
DE=23.1 konbaung #7b1fa2 | ayutthaya #a828d8 | en yakın nokta 0 km | omur ortak
DE=23.1 konbaung #7b1fa2 | siyam-chakri #a828d8 | en yakın nokta 0 km | omur ortak
```
Yalnız **1 çift**: `konbaung` (#7b1fa2) ↔ `ayutthaya`/`siyam-chakri` (#a828d8), ΔE76 = 23,1 — ikisi de mor; iki devlet 1752-1782 boyunca ortak sınır (Tavoy, Mergui, Chiang Mai, Lan Na) paylaşıyor. Siyam–Konbaung savaşlarının en sık görüldüğü ikilidir. **Öneri (yalnız belge, `renkler.py`ye dokunulmadı):** Konbaung'u mora yakın tonda bırakıp Ayutthaya/Chakri'yi bir kırmızı-turuncu veya turkuaz-yeşil yöne çekmek; ya da Konbaung'un L*'unu ≥ 12 birim düşürmek. Tuz değişikliği KASA onayı ve tam koşu (7-8 saat) ister.

## 4. Aynı renk, farklı künye (kasıtlı mı?)
- `angkor-kmer`, `kamboc-kralligi`, `khmer-cumhuriyeti`, `demokratik-kampucya`, `kampucya-halk-cumhuriyeti` → hepsi **#8d6e63** (kahverengi): Khmer devamlılığı için kasıtlı (`harita:` ortak). Kızıl Kmerler/Lon Nol rejimleri aynı renkte görünür, rejim değişimi renkle ayırt edilmez (aynı yerleşim kümesi, 14 yerleşim). Haritada 1970/1975/1979 değişimi "yalnız etiket"te kalır.
- `nguyen-beyligi` ve `nguyen-hanedani` → #b34da5 (kasıtlı, tek hanedan). Nguyễn Lordları/Hanedanı ayrımı renkte yok, 1802 geçişi görünmez.
- `ayutthaya` ve `siyam-chakri` → #a828d8; **1767-1782 `tonburi`** (#1b54e4, mavi) araya girer: mor→mavi→mor (kasıtlı mı? `tonburi` `harita:` yok).
- `ingiliz-burma`→`ingiliz-hindistani` (#20d820 yeşil): 1826-1937 İngiliz Hindistanı penceresi, 1937 sonrası `ingiliz-burma`; aynı renk → 1937 ayrılığı renkte görünmez (kasıtlı).

## 5. Ölü/gereksiz anahtarlar
Çinhindi künyelerinde anahtarı olup hiçbir pencerede kullanılmayan (`s:` sayısı 0, yani yerleşim sahibi olmayan) künye: **0** (58/58 en az 1 pencere). `harita:` anahtarı BOYALAR'da bulunmayan künye: **0**.

## 6. Sonuç
Renk düzeyinde Çinhindi **temiz**: 1 sınırda çift (Konbaung↔Ayutthaya, ΔE 23,1), 0 renksiz künye. Öneri belgededir; uygulama KASA/HAVVA'nın.
