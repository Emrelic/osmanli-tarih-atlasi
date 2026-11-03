# GÖREV-DÜNYA-1102 — Sümer'den 2000'e dünya denetimi (KASA, tek yazıcı)

Veren: Emre, 2 Kasım 2026 (EMRELİC 1 KASIM koordinatörü aracılığıyla). İş yalnız KASA'da yapılır,
başka makineye bölünmez. Gece gündüz durmadan, onay beklemeden bölge bölge ilerle. CLAUDE.md'nin
bütün kuralları geçerli; bu metin onlara ek kural koyar, hiçbirini gevşetmez.

## 0. İlk iş
- Bu metni depoya GOREV-DUNYA-1102.md olarak koy. Sonuna bir İLERLEME tablosu ekle: hücre, durum,
  sayılar, commit. Her push'ta tabloyu güncelle. Bağlam sıkışırsa ya da oturum yeniden açılırsa iş
  bu tablodan devam eder.
- Başlangıç ölçümünü tabloya yaz:
  - devletler.js künye sayısı (EMRELİC ölçümü 2263 id:; sen yeniden ölç)
  - yerleşim sayısı
  - kronoloji madde sayısı
  - denetle özeti: D2s açık, yıl temsilî borç, D8a
- 20 umit-1102-* dalını DEVIR-KASA-1101.md'ye ekle. Birleştirme, yalnız listele. #156 (8b7d8b8ec)
  main'de değil, onu da yaz.

## 1. Kapsam ve sıra
- Zaman: MÖ ~3500'den (Sümer) 2000'e kadar.
- Kıta sırası: Avrupa → Asya → Afrika → Amerika kıtaları → Avustralya ve Okyanusya.
- Her kıtada çağ dilimleri sırayla: MÖ 3500–MÖ 500, MÖ 500–MS 500, 500–1000, 1000–1500,
  1500–1800, 1800–2000.
- Bir hücre bir kıta ve bir çağ dilimidir. Bir hücre bitmeden sonrakine geçme.
- Önce sitenin ve motorun MÖ tarihleri nasıl okuduğunu ölç (VERI-YAPISI.md, MÖ kayıtları,
  mo-data-hold dalı). Desteklenmeyen aralık varsa İLERLEME'ye "motor desteği yok" yaz ve veriyi
  yine kaynaklı hazırla. Motora dokunma.

## 2. Her hücrede (sırayla)
A — Devlet listesi
- Hücrede sahneye çıkan bütün devletleri belirle; kabile konfederasyonları ve aşiret yapıları da
  devlet sayılır.
- Her künye kaynaklı olmalı, f/t uçları kaynakla teyit edilmeli.
- TAVAN: toplam künye sayısı başlangıç sayısını geçmez.
  - Yeni künye ancak aynı polity'nin mükerrer künyeleri birleştirilerek yer açılırsa eklenir.
  - Birleştirmede eski id:'ye bağlı bütün s: kayıtları yeni id:'ye taşınır.
  - Tavan yüzünden eklenemeyenler kaynağıyla denetim/DUNYA-1102/<hücre>/bekleyen_kunye.md'ye yazılır.

B — Kronoloji maddeleri
- Hücredeki bütün maddeleri denetle: tarih, taraflar, yer, kaynak. Hata kaynakla düzeltilir.
- Kaynaksız madde silinmez: önce kaynak aranır, bulunamazsa beyan edilir.
- Madde ancak kaynak tersini söylüyorsa çıkarılır. Çıkarmadan önce karşıladığı bir d:/v: kırılması
  var mı ölç; varsa Değişmez 2 bozulmamalı.
- Eksik maddeleri ekle. Gün yazılır; gün yoksa yıl. Tarih uydurulmaz.

C — Yerleşimler
- Yalnız kronoloji maddelerinde geçenler eklenir.
- Önce mükerrer taraması: normalleştirilmiş ad + 3 km.
- Koordinat ve sahneye çıkış tarihi kaynaklı olmalı.

D — Sahiplik
- Her yerleşimin hücredeki s: dönemlerini yıl yıl denetle ve teyit et.
- Dönemler çakışmaz, ters olmaz, sıfır uzunlukta olmaz; her dönem devletin ömrü içinde kalır.
- __BOSLUK__ ve beyanlı boşlukta boşluk doldurma merdiveni uygulanır.

E — Antlaşmalar ve sınır kayıtları
- Devletler arası antlaşmaları ve sınır kayıtlarını teyit et. Emre bunlara "D tipi sınır" diyor.
- VERI-YAPISI.md'den bu tipin hangi alan olduğunu bul ve tanımını İLERLEME'ye yaz. Bulamazsan
  bana sor, beklerken öteki adımlara devam et.

F — Kronoloji ↔ harita
- Her d:/v: kırılmasının ±30 gün içinde bir maddesi olmalı (Değişmez 2). Ölçüt gevşetilmez.
- Koşu çıktısı geldikçe bitmiş hücrelerin maddelerinin haritaya yansıyıp yansımadığını ölç ve
  yaz. Önce KOSU-YAYIN.md'yi oku.

G — Renk ve bölge (senin işin değil)
- Bölgeleri koşu, renkleri HAVVA belirler. renkler.py'ye dokunma.
- Boyası olmayan yeni künyeleri denetim/DUNYA-1102/renk_bekleyen.md'ye yaz.

## 3. Kaynak kuralı (CLAUDE.md'ye ek)
- Yalnız bilimsel, akademik ve itibarlı kaynaklar. Vikipedi, forum, blog ve popüler siteler yalnız
  gerçek kaynağa ulaşmak için kullanılır, dayanak olamaz.
- Her devlet için kendi akademik kaynaklarına ve temas ettiği komşu devletlerin akademik
  kaynaklarına başvur. Örnekler:
  - Avusturya: Avusturya, Alman, Polonya, Macar, Venedik, Rus, Türk kaynakları
  - Hindistan: İngiliz-Hint, Çin, İran, Türk kaynakları
- Çekirdek eserler (hücreye göre genişlet):
  - İslâm dünyası ve Osmanlı'nın komşuları: TDV ilk başvuru; tarih çelişkisinde TDV esas.
  - Antik Yakın Doğu: Cambridge Ancient History, RlA; ORTA KRONOLOJİ esas, ic_not'ta beyan.
  - Bizans: TIB, ODB.
  - Avrupa: ulusal akademi yayınları (ÖAW, MGH…), New Cambridge Medieval History, hakemli ulusal
    dergiler.
  - İran ve Orta Asya: Encyclopaedia Iranica, Cambridge History of Iran.
  - Çin, Kore, Japonya: Cambridge History of China/Japan; takvim için NAOJ, Academia Sinica.
  - Hindistan: New Cambridge History of India.
  - Afrika: UNESCO General History of Africa, Cambridge History of Africa.
  - Amerika: Cambridge History of Latin America, Cambridge History of the Native Peoples of the
    Americas.
  - Okyanusya: Cambridge History of the Pacific Islanders.
- ÇATIŞMA:
  - İki kaynak çelişirse ÜÇÜNCÜ bağımsız akademik kaynağa git.
  - O da çözmezse iki görüşü kaynaklarıyla ic_not'a yaz.
  - İslâm dünyasında TDV, öteki bölgelerde o bölgenin çekirdek eseri esas.
- Her kayıt ic_not'ta teyit düzeyini taşır: "çift teyit" · "tek kaynak" · "beyanlı yaklaşıklık".

## 4. Donanım ve yük (4 çekirdek, 16 GB, C: dar)
- Tek ana oturum. Paralel iş yalnız alt ajanla: aynı anda EN ÇOK 2 araç koşturan ajan.
- denetle ya da push kapısı koşarken yeni ajan dalgası başlatma.
- Modeller: araştırma ve mekanik iş Sonnet; çatışma kararı, künye birleştirme ve tanım soruları
  Opus. Haiku YOK.
- Worktree yalnız D: diskinde, aynı anda en çok 2. Biten hemen kaldırılır.
- Bir hücre = bir dal = bir push; dal bir günden uzun yaşamaz. Büyük hücreyi ülke parçalarına böl,
  her parça ayrı push.
- Push yalnız push_kapisi.py --kim "KASA" ile.
- Tuz dosyalarına dokunma. girdi.py değişikliği gerekirse ayrı listeye yaz.

## 5. Süreklilik
- Onay bekleme; hücre bitince sonrakine geç.
- Kaynak kotası kapanırsa durumu İLERLEME'ye yaz; açılınca kaldığın hücreden devam et.
- Kota kapalıyken web gerektirmeyen işi yap: mükerrer tarama, dönem tutarlılığı, D2 ölçümü.
- HAVVA'nın koşu 32 inişi main'e girince (tahmin 2 Kasım 10:00–12:00) ağacını güncelle ve devam et.
- Arka planda süreç bırakma; yalnız kendi başlattığın PID'leri kapat.

## 6. Rapor
- Her hücre bitince bana en çok 8 satır yaz:
  - ① sayılar: künye/madde/yerleşim/dönem için eklenen, düzeltilen, çıkarılan; D2s farkı
  - ② bulamadıkların
  - ③ commit
  - ④ Emre'nin bakması için rastgele seçilmiş 10 kayıt (ad, tarih, kaynak)
- Rapor işi durdurmaz.
- Açtığın tavanları eski ve yeni değerleriyle ve sebebiyle bildir.

İlk hücre: Avrupa MÖ 3500–MÖ 500.

---

# İLERLEME

## Başlangıç ölçümü
Ölçüldü: KASA, 2 Kasım 2026, worktree `dunya-1102-baslangic`, taban `origin/main` 9a582db3c.

| Ölçü | Değer | Nasıl |
|---|---|---|
| Künye (yüklenen, benzersiz id) — **TAVAN** | 2280 | `girdi.oku_devletler()` |
| `devletler.js` içindeki `id:` satırı | 2265 | regex `\bid\s*:\s*"` (EMRELİC 2263 dedi; fark ölçüm yönteminden) |
| MÖ `f` taşıyan künye | 266 | `f` "-" ile başlıyor |
| Yerleşim | 5531 | `girdi.yukle()` |
| `s:` dönemi | 25647 | yerleşimlerdeki `s:` toplamı |
| MÖ `s:` taşıyan yerleşim | 197 | |
| Kronoloji maddesi — çekirdek (Değişmez 2 evreni) | 7297 (906'sı MÖ) | `denetle.olaylari_yukle()` |
| Kronoloji maddesi — öteki `kronoloji*.js` | 10589 | |
| denetle çıkış | **0** (SONUÇ: temiz) | `py arac/denetle.py`, worktree, coz-c sonrası |
| D2s | 3518 yabancı kırılma · **201 AÇIK** · 862 kapsam dışı | |
| Yıl temsilî borç | **382** | D2s satırı |
| D2sk yalnız-taraf | 6081 (tavan 2246) | ⚠️ önceden aşık |
| D8a | **182** (tavan 182) | |

## MÖ desteği (ölçüldü, kod okunarak)
- Site: `js/app.js` `BASLANGIC = gunIdx("-11999-01-01")` — zaman çubuğu MÖ 12000'e iner.
- Motor: `arac/uret_petek.py` `GUN_SAYACI = True` (C3) — negatif yıl sayaçla okunur;
  `girdi.UFUK = ("-11999-01-01", "2000-12-31")`.
- Ancak `girdi.VERI_UFKU = ("1281-01-01", "2000-12-31")`: Değişmez 1 1281 öncesinde ölçülmez
  ("kapsam dışı" kovası, `denetle.degismez1_kapsam`); 1281 öncesi delik borç sayılmaz.
- MÖ'ye özel motor farkları (F1–F7, `havva-1101-mo-ayni-prensip` dalı, "DAL, İTİLMEZ") Emre kararını
  bekliyor. Bu iş motora dokunmaz.
- Yazım: astronomik yıl, sıfır yılı vardır (MÖ n → `-(n−1)`); MÖ kayıtta açıklayıcı `gun:` metni
  zorunlu (VERI-YAPISI.md "MÖ TARİH YAZIMI").
- Hüküm: MÖ 3500–2000 aralığının tamamı site ve motor tarafından **okunur**. "Motor desteği yok"
  yazılacak aralık yok. Değişmez 1, 1281 öncesinde **ölçülmüyor** (beyan).

## "D tipi sınır" tanımı
- Alan: `data/d_sinirlar*.js` (13 dosya), `window.D_SINIRLAR*` kayıtları: `{id, taraflar, f, t, sinif|kategori, sol_taraf, hat:[[lon,lat]…]}`.
- `sinif` (bağlayıcı, Emre 16 Eylül, `oturumlar/GORUNUM-ABCD-0916.md`):
  - F = E + tanınma
  - E = hukukî kesin
  - D = FİİLÎ kesin
  - C = belge kaba
  - YOK = çizilmez
- `kategori` eski alan: D = koordinatlı hukukî.
- Motor bu hattı gövdenin kesin kısıtı olarak kullanır (`MOTOR-SINIR-KISIT-1015`, D/E/F).
- Şema: `denetim/SEMA-D-0916.md`.
- Not: VERI-YAPISI.md'de bu alan yok; tanım dosya başlığından ve `uret_petek.py`'den okundu.

## Hücreler
| # | Hücre | Durum | Sayılar | Commit |
|---|---|---|---|---|
| 1 | Avrupa MÖ 3500–MÖ 500 | **bitti** (birinci geçiş) | envanter 32 künye · 23 yerleşim · 55 madde. Künye: 12 kaynak düzeltildi, 1 tarih (Sirakuza t), 0 eklendi (18 bekleyen, tavan). Madde: +24, 3 düzeltildi, 0 çıkarıldı. Yerleşim/dönem: 0. D2s 201→201. Bekleyen: `denetim/DUNYA-1102/avrupa-mo3500-500/` | 494b4d546 → main af5301f8 |
| 2 | Avrupa MÖ 500–MS 500 | **bitti** (birinci geçiş; kapsam kısmi) | envanter 63 künye · 75 yerleşim · 193 madde. Künye: 26 kaynak sayfa-alıntılı akademiğe, 2 tarih (epir t MÖ 231, bati-roma t 476-09-04), 0 eklendi (4 bekleyen). Madde: +5 (alıntılı), 20 düzeltildi (4 tarih: 434, 448, 489-08-28, 406-12-31), 0 çıkarıldı; ~130 madde okunamadı (bekleyen). Yerleşim/dönem: 0. D2s 201→201 | 504052bf1 → main d4312aac |
| 3 | Avrupa 500–1000 | **bitti** (birinci geçiş; yasak kaynaklı kayıtlar öncelikli) | envanter 112 künye · 116 yerleşim · 124 madde. Künye: 35 kaynak alıntılı akademiğe, 0 tarih, 0 eklendi. Madde: 30 kaynak, 5 tarih (Clovis ölümü 511-11-27, Strasbourg 842-02-14, Kel Charles tacı 875-12-25, Lechfeld 955-08-10, Wenceslas 935-09-28), 0 eklendi/çıkarıldı. Yerleşim/dönem: 0. D2s 201→201 | (bu push) |
| 4 | Avrupa 1000–1500 | **bitti** (birinci geçiş, 2 parça) — parça 2: künye 16 kaynak + 2 tarih (braunschweig f, valensiya t); madde 60 kaynak/beyan + 5 tarih (Kiev 1169 yıl, Haakon 1217-06, Manfred 1258-08-11, Haakon ölümü 1263-12-16, Marchfeld 1278-08-26); D2s 201→201 — envanter 300 künye · 1108 yerleşim · 827 madde; yasak kaynaklı 84 künye + 185 madde | parça 1: künye 48 kaynak, 3 tarih (akitanya t, urbino f, padova-carrara t); madde 63 kaynak, 5 tarih (Tirol 1363-01-26, Perth ×3 1266-07-02, Kiev Aralık 1240); 0 eklendi/çıkarıldı. D2s 201→201 | parça 1: 289e1212b → main 23ce2f62 · parça 2: (bu push) |
| 5 | Avrupa 1500–1800 | **bitti** (birinci geçiş) — envanter 158 künye · 945 yerleşim · 540 madde; yasak kaynaklı 26 künye + 71 madde | künye 26 kaynak + 3 tarih (korsika f/t, trento f); madde ~54 kaynak/beyan + 1 tarih (Floransa 1532-04-27); zayıf kaynaklar (haber/müze/eğitim) yalnız not; 0 eklendi/çıkarıldı. D2s 201→201 | 430e4e8bf → main 5bf7ec87 |
| 6 | Avrupa 1800–2000 | **bitti** (birinci geçiş) — envanter 218 künye · 1187 yerleşim · 667 madde; yasak kaynaklı 53 künye + 133 madde | künye 25 kaynak + 4 tarih (mecklenburg ×2, anhalt, bavyera-konsey f); madde ~79 kaynak/beyan + 2 tarih (Vilnius 1919-04-21, Fiume 1920-12-31); Orta Litvanya 1922-03-24'e geri (birincil kaynak); 0 eklendi/çıkarıldı. D2s 201→201 | e11da56e9 → main b29b3316 |
| — | **AVRUPA birinci geçiş bitti** | yasak kaynaklı künye/madde öncelikli; okunamayanlar ve kırılma taşıması gereken tarihler hücre bekleyen.md'lerinde | | |
| 7 | Asya MÖ 3500–MÖ 500 | **bitti** (birinci geçiş) — envanter 90 künye · 49 yerleşim · 263 madde; yasak kaynaklı 58 künye + 120 madde | künye 44 kaynak + 1 tarih (saba t MÖ 115, TDV); madde ~45 kaynak/beyan + 7 tarih (3 Hitit/Bryce, Gaumata, Teymâ, Kudüs, Aşkelon); ~55 madde okunamadı (Iranica/Perseus 403). D2s 201→201 | 0edabe17f → main 31408a3a |
| 8 | Asya MÖ 500–MS 500 | **bitti** (birinci geçiş) — envanter 170 künye · 139 yerleşim · 298 madde; yasak kaynaklı 59 künye + 78 madde | künye 28 kaynak + 4 tarih (himyar, part, hasmoni, bitinya f — TDV); madde ~44 kaynak/beyan + 3 tarih (Şapur 256, Issos MÖ 333-11, Part MÖ 250); ~34 madde okunamadı. MÖ yıl kayması örüntüsü (magadha/maurya/sunga/kanva) bekleyen. D2s 201→201 | 818c70a51 → main 3cdda045 |
| 9 | Asya 500–1000 | **bitti** (birinci geçiş) — envanter 277 künye · 165 yerleşim · 497 madde; yasak kaynaklı 66 künye + 3 madde | künye 51 kaynak, 0 tarih (Çin günleri tablosuz, aday olarak ic_not'ta); 3 madde hücre 10'a. Koşu 32 inişi (04125032f) sonrası ölçüldü: D8a 172/172. D2s 201→201 | (bu push) |
| — | Koşu 32 inişi | main 04125032f (2 Kasım 09:45) — D8a 182→172, 3b tavanı 533842→742525. F adımı (bitmiş hücre maddelerinin haritaya yansıması) bu koşu üzerinden ölçülecek | | |
| — | Yerel kaynak derlemi | Perseus (Yunanca/Latince tarihçiler) + Çin takvim tablosu D:/kaynak-derlem'e kuruldu; `arac/perseus_ara.py`, `arac/cin_gun.py`; bkz. `denetim/DUNYA-1102/KAYNAK-DERLEM.md`. İlk kullanım: 9 Çin künyesinin f günü (xin 9-01-15, liu-song, sui, kuzey-zhou, dogu-wei, kuzey-qi, sonraki-tang, wu-zhou, kuzey-han) · Perseus turu: 17 antik madde (11 kaynak teyitli) | | (bu push) |
| 10 | Asya 1000–1500 | **bitti** (birinci geçiş) — envanter 412 künye · 1167 yerleşim · 1430 madde; yasak kaynaklı 35 künye + 41 madde | künye 18 kaynak + 2 tarih (musasa, maldivler f — TDV); madde ~27 kaynak/beyan + 1 tarih (Zebîd 1174 yıl). D2s 201→201 | (bu push) |
| 11 | Asya 1500–1800 | **bitti** (birinci geçiş) — envanter 261 künye · 1229 yerleşim · 549 madde; yasak kaynaklı 42 künye + 25 madde | künye 22 kaynak, 0 tarih; madde 12 kaynak/beyan + 1 tarih (Nobunaga 1573 yıl). Kırılmayla taşınacaklar: Zebîd 1539-02-24, Kafkasya hanlıkları (TDV). D2s 201→201 | (bu push) |
| 12 | Asya 1800–2000 | **bitti** (birinci geçiş) — envanter 335 künye · 1497 yerleşim · 648 madde; yasak kaynaklı 75 künye + 72 madde | künye 40 kaynak, 0 tarih; madde ~32 kaynak/beyan + 1 tarih (Cidde 1925-12-22, TDV). D2s 201→201 | (bu push) |
| — | **ASYA birinci geçiş bitti** | | | |
| 13 | Afrika MÖ 3500–MÖ 500 | **bitti** — 24 künye · 8 yerleşim · 74 madde; yasak kaynaklı 6 künye + 7 madde | künye 6 kaynak; Kartaca kuruluşu -0813 (Treccani). 6 madde okunmadı | (bu push) |
| 14 | Afrika MÖ 500–MS 500 | **bitti** — 18 künye · 12 yerleşim · 58 madde; yasak kaynaklı 6 künye + 13 madde | künye 6 kaynak + 2 tarih (numidia f MÖ 201, mauretania t MS 40); 13 madde kaynak/beyan (Perseus) | (bu push) |
| 15–16 | Afrika 500–1000 · 1000–1500 | **bitti** — yasak kaynaklı 3+7 künye, 1+4 madde | künye 6 kaynak + 3 tarih (ganiyeler f/t, tunus-benihorasan f — TDV); 4 madde kaynak/beyan | (bu push) |
| 17 | Afrika 1500–1800 | **bitti** — yasak kaynaklı 11 künye + 7 madde | künye 9 kaynak + 1 tarih (akwamu t 1731, UNESCO GHA V); 7 madde | (bu push) |
| 18 | Afrika 1800–2000 | **bitti** (birinci geçiş) — yasak kaynaklı 82 künye + 43 madde | parti A: 33 künye kaynak; rif-cumhuriyeti t 1926-05-25 (künye+yerleşim birlikte, TDV) · parti B: 24 künye kaynak + 24 madde kaynak/beyan, 0 tarih (oranj f 1900-05-28, katanga t 1963-01-15 önerileri tek kaynak, uygulanmadı → bekleyen); 19 madde okunmadı | A 24b6288ba · B (bu push) |
| — | Kırılma taşıma işi | ayrı oturum `kirilma-tasima` (Emre onayı, 2 Kasım): kırılma+madde+künye birlikte taşınacak kalemler | | |
| 19–21 | Amerika MÖ 3500–MS 1000 | **bitti** (birinci geçiş) — 13 künye + 5 madde denendi | künye 11 kaynak + 3 tarih (chavin -0949/-0399, wari t 1000 — çift teyit, tikal-mutul t 869); Tikal künye-içi günleri (Siyaj K'ak' 378-01-16, Yax Nuun Ayiin I 379-09-12); 3 Mısır maddesinin Memphis TN odak hatası düzeldi. hohokam/moche/tairona önerileri tek kaynak, uygulanmadı → bekleyen | (bu push) |
| 22–24 | Amerika 1000–1500 · 1500–1800 · 1800–2000 | **bitti** (birinci geçiş) — yasak kaynaklı 38 künye + 13 madde | künye 27 kaynak + 1 tarih (yeni-fransa f 1534-07-24, DCB); madde 7 kaynak + 4 beyan (HBC 1668 anakronizmi, Marquette, Palmares, Batı Hint Fed. fesih çelişkisi). muisca t 1538 ve Anchorage 1915 kırılmaya bağlı → bekleyen. 11 künye + 3 madde okunmadı | (bu push) |
| — | **AMERİKA birinci geçiş bitti** | | | |
| 25–30 | Avustralya ve Okyanusya (6 dilim) | **bitti** (birinci geçiş, 6 dilim tek envanter) — 54 künye · 147 yerleşim · 15 madde; yasak kaynaklı 8 künye + 2 madde | künye 8 kaynak (BM, legislation.gov.uk, history.state.gov; Nauru/Kiribati/Samoa çift teyit), 0 tarih; madde 2 kaynak + 1 beyan (Rabaul 12/17 Eylül 1914). Gilbert-Ellice günleri teyitsiz | (bu push) |
| — | **DÜNYA birinci geçiş bitti** (30 hücre) — yalnız künye + madde | | | |
| — | 🔴 **D ADIMI: YAPILMADI** — yerleşim `s:` dönemlerinin yıl yıl kaynakla teyidi birinci geçişte hiçbir hücrede yapılmadı (tablodaki "yerleşim" sayıları yalnız envanterdir). İKİNCİ GEÇİŞ olarak aynı kıta sırasıyla (Avrupa → Asya → Afrika → Amerika → Okyanusya) yapılacak. | | | |
| — | Emre kararları (2 Kasım, EMRELİC aracılığıyla) | bizans t 1461-08-15 → 1453-05-29 (TDV) + 6 Argolis/Saronik yerleşimi 1349–1460 mora-despotlugu (abi merkez Mora/Tripoliçe) · tikal-mutal → tikal-mutul birleşti (künye silindi) · Chavín t -0399 (zaten) · Danimarka Hindistanı → kirilma-tasima oturumu | | (bu push) |

## İkinci geçiş planı (sıra)
1. **D adımı** — her kıta × çağ hücresinde yerleşim `s:` dönemleri: uç günü kaynaklı mı, künye ömrüyle tutarlı mı, abi merkez beyanı var mı. Kıta sırası aynı.
   **Kapsam ölçümü** (2 Kasım, KASA, `d_adim.py`; dönemin kendi `kaynak:` alanına göre; çağ sınırını aşan dönem birden çok hücrede sayılır):
   kaynaksız ~18 350 · yasak ~4 450 · beyanlı ~2 500 · kaynaklı ~6 100 · atlas-içi ~170.
   Yoğun hücreler: 4–6 Avrupa 1000–2000 (kaynaksız 4 457, yasak 1 520) · 10–12 Asya 1000–2000 (8 169 / 1 253) ·
   16–18 Afrika 1000–2000 (2 682 / 1 411) · 22–24 Amerika 1000–2000 (2 641 / 59) · 25 Okyanusya (266 / 16).
   Bu hacim kayıt kayıt ajanla araştırılamaz. **Önerilen ölçüt (koordinatör/Emre kararı bekliyor):** dönem ucu zaten
   Değişmez 2 ile ±30 günde bir maddeye bağlı; asıl açık, maddenin o yerleşimi ANMAMASI (2sk: 5 579 kapanış "yalnız
   taraf" ile). D adımı = (a) yasak kaynaklı dönemlerin kaynağını değiştirmek, (b) "yalnız taraf" ile kapanan kırılmalarda
   maddeye yeri eklemek ya da yer-tanıklı kaynak bulmak, (c) kalan kaynaksız dönemlere madde kaynağını `kaynak:`a
   devralmak (betikle, "madde X'ten" beyanıyla). Öncelik: Osmanlı çekirdeği değil, yasak oranı yüksek hücreler (6, 12, 18).
2. **Okunmadı kalemler** — hücre bekleyen.md'lerindeki "okunmadı"lar; Iranica için Brill açık erişimi (brill.com/eiro, referenceworks.brillonline.com) — engellerse atlatma yok, bildir. JSTOR'a bağlı olanlar `JSTOR-LISTE.md`de (Emre elle indirir).
3. **Eski eşleşme hatası taraması** — madde_uygula'nın eski sürümü ic_not_b'de b kopyası olan maddeleri sessizce atlamış olabilir (hücre 1–9).
4. **MÖ yıl kayması düzeltmesi** — ölçüm (2 Kasım, KASA, `mo_kayma_olc.py`): SİSTEMATİK DEĞİL. Künye 488 MÖ ucu: 382 doğru · 5 "+1 (MÖ n=-n)" · 9 ±2..10 · 92 metinde yıl yok. Madde 940: 898 doğru · 6 +1 · 5 -1 · 8 ±2..10 · 23 ölçülemedi. Yerleşim 590 MÖ ucu: 8'i künye ucundan 1 yıl farklı. Ölçüt en yakın metin yılını seçtiği için gerçek sayı biraz yüksek (ör. Magadha f −0543 = MÖ 544, metin MÖ 543). Kayıt kayıt okunup düzeltilecek; ayrı iş.
5. **Değişmez 3b binmeleri (veri işi)** — koşu 32 inişinde tavan 46 → 51 gün: 1160 Rus knezlikleri (Çernigov × Ryazan 80 552 km², × Vladimir-Suzdal, × Smolensk…), 1060 Kiev × Polotsk, 1040 Bohemya × Polonya. Kaynakla çözülecek.
   **(a) yapıldı** (1c0bc7998 + df2d2b99f, kapı 534a118d7): 2 304 yasak kaynaklı dönem künye kaynağını BEYANLI devraldı.
   Kalan yasak dönem: iç kırılma 662 · künye kaynağı da yasak 351 · alan sırası farklı ~190 · __BOSLUK__ 53.
   **Emre kararı (3 Kasım 2026): önce (c), sonra (b).**
   **(c) yapıldı** (3 Kasım, KASA, `d_madde_devral.py`): ölçüm anındaki kaynaksız `s:` dönemi 13 948 (hücre sayımı
   çift sayıyordu). Dönemi açan (yoksa kapatan) kırılmanın ±30 günündeki, Değişmez 2s alâka ölçütünü geçen (önce yer
   kolu ±30 gün; taraf kolu yalnız ±1 gün) ve yasak/zayıf/atlas-içi olmayan kaynaklı maddenin kaynağı BEYANLI yazıldı:
   **5 448 dönem (dosyada)** (açılış/yer 1 980 · açılış/taraf 3 422 · kapanış/yer 1 277 · kapanış/taraf 2 739
   eşleşmesinin dosyada tek anlamlı olanları). Taraf kolu ±1 güne daraltıldı çünkü ±30 günde yanlış olay seçiyordu
   (1917-11-07 Ekim Devrimi kırılması 255 Avrupa yerleşiminde 20 gün sonraki "Hokand Muhtariyeti" maddesine bağlanıyordu —
   Değişmez 2s de bu kırılmayı aynı yanlış maddeyle KAPALI sayıyor; (b)'nin ilk işi). `kur:`dan önceki 10 dönem
   (Çanakkale, Uzunköprü — bölge vekili, Değişmez 5a-muaf kilidi) bilerek kaynaksız bırakıldı.
   Kalan kaynaksız ~8 500: alâkalı kaynaklı madde yok 4 520 · aynı (f,t,d) kopyaları farklı maddeye düştüğü için
   dokunulmadı ~3 970 (yerleşim bloğu bazında ikinci tur yapılabilir). Beyan: "olayın kaynağıdır, yerleşim
   tanıklığı değil" — taraf kolu yerleşimi anmaz, (b) bunu kapatır.
   **(b) hücre 6 (Avrupa 1800–2000) ilk tur** (3 Kasım, KASA, `b_envanter.py` + 2 ajan + `b_uygula.py`): 3 563 `s:`
   kırılma birimi → yer kolu 1 281 · yalnız taraf 2 104 (141 madde) · madde yok 178. En kalabalık 40 madde (1 667 birim)
   araştırıldı: teyit 1 208 · çelişki 50 · okunmadı 154 · yanlış madde 255 (ayrıca 2 madde için yeni madde önerildi, uygulanmadı:
   1923-10-29 "Ahlat: safevî → TC" yerine Cumhuriyet'in ilanı · 1918-11-11 I. Karl yerine Polonya 30/31 Ekim). 31 maddeye kaynaklı yer cümlesi eklendi
   (yasak kaynaklıların kaynağı değiştirildi). 2 yeni madde: 1917-11-07 Ekim Devrimi (FRUS 1918) ve 1917-12-15 Moldova
   Demokratik Cumhuriyeti (Scurtu 2022) — 255 birim Hokand 1917-11-27 maddesine yanlış bağlıydı.
   **Kırılma taşıması gerekenler (uygulanmadı, kaynak ajan dökümünde):** Hırvatistan-Slavonya 13 yerleşim 1918-11-16 /
   1920-06-04 → 1918-10-29 (Sabor) · Polonya: Kraków 1918-10-30, Lublin/Kielce/Radom/Chełm/Zamość 1918-10-31 (atlasta
   1918-11-11) · Hollanda: Middelburg, 's-Hertogenbosch, Breda 1810-03-31 (atlasta 07-09) · Alman İmparatorluğu 1871-01-01
   (anayasa) mı 01-18 (ilan) mı · Edirne 1920-04-23 TBMM'ye geçiş kaynaksız (TDV: Temmuz 1920 Yunan işgali) ·
   `macaristan-naiplik` 1918-11-16 için uygun kimlik mi · SSCB sonu: atlas 12-26, DoS 12-25, TDV 12-31 (çelişki beyanı) ·
   olaylar.js "Cumhuriyet'in ilanı" t:"1923-10" ay hassasiyetinde (gün 29). Döküm: `denetim/DUNYA-1102/ikinci-gecis-b/dokum_h6.md`.
   Sırada: hücre 6'nın kalan 101 maddesi (437 birim), sonra hücre 12, 18.
5b. **Künye kaynak borcu** (2 Kasım, KASA, main 534a118d7; birinci geçiş yalnız hücre öncelik listelerini işledi):
   hâlâ yasak 191 · "bulunamadı — standart akademik kaynak" 259 · ZAYIF KAYNAK 16 · countrystudies/globalsecurity/
   archontology 24 · "BRIT" kısaltması 11 (birinci geçiş regex'i kaçırdı). Çıplak anahtar 219 = `data/kimlikler.js`
   kayıt defterine işaret, zayıf sayılmaz.
6. **Mükerrer künye adayları** — chimu ↔ chimu-krallik, ternate ↔ ternate-sultanligi, tidore ↔ tidore-sultanligi, ogedey-ulusu ↔ ogedey-ulusu-kaydu.
   **Birleştirildi** (Emre kararı 3 Kasım 2026): silinen künyelerin hiçbirini yerleşim `s:` dönemi kullanmıyordu (ölçüldü);
   haritadaki id kaldı. chimu → chimu-krallik (1450/1460 maddeleri taşındı; iki madde `taraflar` atfı çevrildi) ·
   ternate → ternate-sultanligi ve tidore → tidore-sultanligi ("bulunamadı" kaynağı yerine TDV Endonezya + Ricklefs) ·
   ogedey-ulusu-kaydu → ogedey-ulusu (kaydu maddeleri Wikipedia dayanaklı, taşınmadı). Künye 2279 → 2275.
7. **Tahiti t** — Emre kararı (3 Kasım 2026): 9 Eylül 1842 himaye günü kalır (zaten öyleydi, Persée 1933); karar ic_not_t'ye yazıldı.

## girdi.py değişikliği gereken (tuz — dokunulmaz, liste)
- (boş)
