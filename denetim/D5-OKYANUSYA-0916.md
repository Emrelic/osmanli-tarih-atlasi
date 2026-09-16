# D5-OKYANUSYA — kaynak envanteri (29 Ekim 1923 kara sınırları)

Şartname: `oturumlar/D-1923-0916.md` (DÜNYA KADROSU tablosu, D5-OKYANUSYA satırı).
Aşama: **① kaynak envanteri.** `denetim/SEMA-D-0916.md` (D1 şeması) henüz tahtada
ilan edilmedi; bu yüzden `data/d_sinirlar_okyanusya.js` **yazılmadı**. Şema gelince
aşağıdaki tablo veriye dönüştürülecek.

## Kapsam taraması — sonuç: kara sınırı olan TEK yer Yeni Gine adası

Kapsamdaki bütün bölge tek tek gözden geçirildi:

```
Avustralya (anakara)     kara sınırı YOK — kıta, komşusu yok
Yeni Zelanda              kara sınırı YOK — ada
Nauru                     kara sınırı YOK — tek ada, MC C-mandası (Brit./Avus./YZ ortak)
Solomon Adaları (Brit.)   kara sınırı YOK — Bougainville'den (Avustralya mandası) DENİZLE ayrı
Yeni Hebridler            kara sınırı YOK — İngiliz-Fransız KONDOMİNYUMU (ortak egemenlik,
  (Anglo-Fransız)          bölünmüş toprak değil; D anlamında "sınır" yok, hukukî statü ayrı sorun
Fiji, Tonga, Samoa (Bat.),
diğer Pasifik adaları     kara sınırı YOK — hepsi tek ada/takımada, tek yönetim
Timor                     KAPSAM DIŞI — D-1923-0916.md'de D5-ASYA'nın "Güneydoğu Asya" satırına
                           giriyor (Hollanda Doğu Hint Adaları), D5-OKYANUSYA'nın listesinde yok
```

⇒ 1923'te bu bölgede gerçek bir **kara** sınırı yalnız **Yeni Gine adasında** var:
Hollanda Yeni Ginesi (Hollanda Doğu Hint Adaları'nın parçası) ile doğusundaki
İngiliz/Avustralya toprakları arasında, 141. meridyen boyunca.

## Kaynak — International Boundary Study No. 160 (ABD Dışişleri, Bölge Uzmanları Ofisi)

`oturumlar/D-1923-0916.md`'nin önerdiği IBS serisinden: **IBS No. 160, 7 Şubat 1977,
"Indonesia — Papua New Guinea Boundary"** (US Department of State, Office of the
Geographer). Bugünkü Endonezya-PYG sınırının doğrudan atası; belge kendi tarihini
1828'den başlatıyor. PDF WebFetch'te "metin çıkarılamadı" dedi (`§4③` tuzağı —
bkz. `CLAUDE.md`), `pypdf` ile ikinci denemede tam metin okundu (7 sayfa, 9261 karakter).

## Tablo — parça · taraflar · dayanak · bugünküyle aynı mı · kaynak

| Parça | Taraflar (1923) | Dayanak (hukukî, 1923'teki hâliyle) | Bugünküyle aynı mı |
|---|---|---|---|
| **Yeni Gine GÜNEY** — Bensbach Nehri ağzından (≈141°1'47,9"D) kuzeye, Fly Nehri'ne kadar 141. meridyen; sonra Fly Nehri'nin "thalweg"i (ana akım hattı) ile 141. meridyene geri dönene kadar; sonra tekrar 141. meridyen, üçlü sınıra kadar | **Hollanda** (Hollanda Yeni Ginesi) ↔ **Britanya** (British New Guinea → 1905 Papua Kanunu → Eylül 1906'dan Avustralya idaresinde "Papua Bölgesi") | İngiltere-Hollanda Sözleşmesi, Lahey, **16 Mayıs 1895** (onay değişimi 20 Temmuz 1895), Madde I-IV — sınırı tam bu dört adımla tarif eder | **AYNI.** 12 Şubat 1973 Avustralya-Endonezya anlaşması aynı hattı modern koordinatlarla (MM1-MM10, Fly kesişimleri) yeniden işaretledi; hattın KENDİSİ 1895'ten beri değişmedi, yalnız ölçümü kesinleşti |
| **Yeni Gine KUZEY** — Fly Nehri'nin en kuzey kesişiminden (141°01'10"D) kuzey kıyısına (141. meridyen) | **Hollanda** (Hollanda Yeni Ginesi) ↔ **Almanya'dan devralan Avustralya** — I. Dünya Savaşı sonrası İngiliz Hükûmeti, Avustralya Milletler Topluluğu adına, **1920'de** Milletler Cemiyeti'nden "Yeni Gine Bölgesi" için C-sınıfı manda kabul etti | Hollanda'nın 1828 (belirsiz) ve 1848 (Tidore Sultanı eliyle, Cap Bonpland'a kadar) ilanları; Almanya 1884'te kıyının doğusunu ilhak ederken 141. meridyeni ZIMNEN tanıdı; kesin demarkasyon **1910-1911 Hollanda Sınır Komisyonu** raporuyla yapıldı (yeni anlaşma değil, mevcut hattın arazi tespiti) | **AYNI.** Manda devri (Almanya→Avustralya, 1920) hattı DEĞİŞTİRMEDİ, yalnız doğu tarafın egemenini değiştirdi; 1973 anlaşması yine aynı çizgiyi teyit etti |
| ⚠️ **AÇIK SORU — atlasa yazılmadı, veri DEĞİL:** Papua Bölgesi (İngiliz tacı toprağı, Avustralya idaresi) ile Yeni Gine Mandası (MC C-mandası, Avustralya) arasındaki **1885 Londra Anlaşması** hattı (Mitre Rock ≈8°G kıyı noktasından 5°G/141°D kesişimine). 1923'te ikisi ayrı hukukî statüde (biri Britanya toprağı, öteki manda) ama İKİSİ DE Avustralya tarafından yönetiliyor. **D-KUNYE'ye soru:** atlas bu ikisini `devletler.js`te ayrı kimlik/renk olarak mı tutacak? Öyleyse bu iç hat da bir D parçasıdır (taraflar teknik olarak Britanya-Almanya, sonra Britanya-Avustralya/manda); tutmayacaksa (ikisi tek "Avustralya" gövdesiyse) bu hat ÇİZİLMEZ. | Britanya ↔ Almanya, sonra (1920) Britanya/Avustralya ↔ Avustralya (manda) | Londra Anlaşması, **Nisan 1885** | Statüko 1949'a kadar sürdü (Papua ve Yeni Gine Kanunu, idari birlik — ama hukuken 1975'e kadar iki ayrı toprak) | — |

**Kaynak (ikisi için de):** International Boundary Study No. 160, "Indonesia — Papua
New Guinea Boundary", The Geographer, Bureau of Intelligence and Research, U.S.
Department of State, 7 Şubat 1977, s. 2-4. Belgenin kendi dipnotları: Convention
between Great Britain and the Netherlands defining the Boundaries between the
British and Netherland Possessions in the Island of New Guinea, The Hague, 16 May
1895, British Foreign and State Papers Vol. 87 (1894-95), pp. 18-21; ve Paul W. van
der Veur, *Search for New Guinea's Boundaries*, Canberra, Australian National
University Press, 1966.

## Geometri notu (D1 §3 kuralına göre)

Her iki parça da **1923'ten bugüne DEĞİŞMEDİ** (kaynak açıkça söylüyor: 1973
anlaşması aynı hattı yeniden ölçtü, taşımadı). ⇒ `D-GEOARAC`'ın bugünkü
Endonezya-Papua Yeni Gine sınır çizgisi (`ne_10m_admin_0_countries.geojson`'dan)
**1923 D hattı olarak doğrudan kullanılabilir** — kaynak "değişmedi" diyor, D1 §3
şartını karşılıyor. Yalnız coğrafi cisim adları 1923'e göre değişir: "Endonezya" →
Hollanda Yeni Ginesi / Hollanda Doğu Hint Adaları, "Papua Yeni Gine" → Papua Bölgesi
+ Yeni Gine Mandası (yukarıdaki açık soruya bağlı, tek ya da iki kimlik).

## Sıradaki adım

`denetim/SEMA-D-0916.md` (D1 şeması) tahtaya düşünce: iki parçayı (güney + kuzey)
`data/d_sinirlar_okyanusya.js`e (`window.D_SINIRLAR_OKYANUSYA`) şemaya uygun yazacağım.
İç sınır (Papua/Yeni Gine Mandası) sorusu D-KUNYE'nin cevabına bağlı; cevap gelmeden
o parçayı YAZMAYACAĞIM.
