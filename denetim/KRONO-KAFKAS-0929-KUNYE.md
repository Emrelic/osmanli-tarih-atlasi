# KRONO-KAFKAS-0929 — KÜNYE ÖNERİLERİ ve KONU SINIRI

> 29 Eylül 2026 · M-5416 hükmü: (1) madde OLAYIN GÜNÜNDEKİ polity'nin künyesine
> bağlanır · (2) ardıl künyeye geriye dönük bağlama yasak · (3) künye yoksa madde
> ÖNERİLEN id ile yazılır, künyeyi koordinatör açar.
> 🔴 `data/devletler.js`e DOKUNULMADI. id'ler mümkün olduğunca
> `denetim/KUNYE-DUNYA-0929.json` `eksik` listesinden alındı (orada olmayan tek
> öneri: `guria-prensligi`).
> "bulunamadı" = bu turda TDV'de ya da okunabilen akademik kaynakta uç bulunamadı;
> o uç için künyeye kaynaksız gün YAZILMAMALI (CLAUDE.md §4).

## 1. Önerilen yeni künyeler

| id | ad | f: | t: | sınıf (D205) | kaynak | bağladığı madde |
|---|---|---|---|---|---|---|
| `kartli-kralligi` | Kartli Krallığı (1762'den Kartli-Kaheti) | 1490 — yıl kaynakta yok; `gurcistan` künyesinin bölünme maddesi 1490 (TDV `gurcistan`: *"üç krallığa (Kartliya, Kahetya, İmeretiya) ve beş beyliğe ayrıldı"*, yılsız) | 1801-09-12 (TDV `gurcistan`: *"12 Eylül 1801 tarihli emirle Rusya'nın bir eyaleti"*) | YENİ (ayrıştırma) — bugün `gurcistan` 1008-1801 Kartli'yi taşıyor; ayrışırsa `gurcistan`ın t:'si 1490'a çekilir mi, hüküm sende | TDV `gurcistan`, `tiflis` | 10 (`kronoloji_cok_gurcistan.js`: 1521 · 1541 · 1569 · 1588 · 1601 · 1616 · 1647 · 1728 · 1735-08-12 · 1751) — hepsi `gurcistan`a da bağlı, bugün görünüyor |
| `samtshe-atabegligi` | Samçhe (Meskheti, Ahıska/Çıldır) Atabekliği | 1268 (TDV `ahiska`: *"atabegler, 1268-1578 tarihleri arasında bölgenin yönetimini ellerinde tuttular"*) — gün yok | 1578-08-09 (TDV `cildir-eyaleti`: Çıldır zaferi, *"Atabeg ülkesinin geri kalan kısımlarının fethi tamamlanmış oldu"*) | YENİ | TDV `ahiska`, `cildir-eyaleti` | 2 (1536 · 1549) |
| `megrelya-prensligi` | Megrelya (Dadyan / Odişi) Prensliği | bulunamadı (TDV: Alexandre sonrası *"beş beyliğe ayrıldı"*, yılsız) | Rusya'ya bağlanış 1803 (TDV `gurcistan`); fesih *"Kırım Harbi'nden sonra"* — yıl bulunamadı | YENİ | TDV `gurcistan`; `megrel`/`megreller` slug 302 | 2 (1578-08-09 · 1803) |
| `guria-prensligi` | Guria (Güryel) Prensliği | bulunamadı | Rusya ile birleşme 1804 (TDV `gurcistan`) | YENİ — KUNYE-DUNYA listesinde YOK | TDV `gurcistan`, `acara`; `guriya` slug 302 | 2 (1508 · 1578-08-09) |
| `abhazya-prensligi` | Abhazya (Şervaşidze) Prensliği | bulunamadı (TDV `sohum`: 1451 Osmanlı'ya itaat — polity'nin kuruluşu değil) | 1864 (TDV `sohum`: *"şehir 1864'te doğrudan Rusya'ya bağlandı"*); Rusya'ya bağlanış ilanı 17 Şubat 1810 | YENİ | TDV `sohum`, `gurcistan`; `abhaz`/`abhazya`/`abhazlar` 302 | 4 (1810-02-17 · 1854-05 · 1856-07-10 · 1864) |
| `revan-hanligi` | Revan (Erivan / Çukursaad) Hanlığı | 1747 (TDV `revan`: *"1747'de öldürülünce Mîr Mehdî müstakil bir Revan Hanlığı oluşturdu"*) — gün yok | 1828-04-02 (TDV `revan`: *"çarın 2 Nisan 1828 tarihli emriyle Nahcıvan ve Revan hanlıkları ilga edildi"*) | ③ ARDIL — harita 1747-06-20→1751-01-01 arasını künyesi olmayan `zend` ile boyuyor (denetle.py künye aşımı −3,5 yıl, 8 yerleşim) | TDV `revan` | 5 (1747 · 1751 · 1808 · 1827-10-13 · 1828-04-02) |
| `cenub-i-garbi-kafkas` | Cenûb-ı Garbî Kafkas Hükûmet-i Muvakkate-i Milliyesi (Kars) | 1918-11-05 (TDV `kars`: *"5 Kasım 1918'de Kars İslâm Şûrası kuruldu"*; ad değişikliği 17-18 Ocak 1919) | 1919-04-12 (TDV `kars`: İngiliz işgali, *"Hükümet dağıtıldı"*) | YENİ | TDV `kars`, `ahiska` | 1 (1919-04-13) |

⚠️ `revan-hanligi` için KUNYE-DUNYA'nın kaynak cümlesi (*"Safevîler … Sa'dçukuru Revan Hanlığı'nı oluşturdu"*) Safevî dönemi BEYLERBEYİLİĞİNİ anlatıyor; o bir polity değil bir eyalettir. Önerdiğim f: 1747 **müstakil** hanlığın başlangıcıdır. İkisi ayrı şeyler — künye açılırken bu ayrım korunmalı.

## 2. Genişletme adayı (sınıf ②)

**`kaheti-kralligi`** — bugün f:1578-08-09 · t:1606-01-01 (Osmanlı tâbiliği penceresi gibi kurulmuş, madde_sayisi 0).
- Polity 1490'dan 1762'ye yaşadı: TDV `gurcistan` *"üç krallığa (Kartliya, Kahetya, İmeretiya)"* (1490 bölünme, yılsız) … *"1762 yılında Irakli, Kartli ve Kahet'i bir idare altında birleştirdi"*.
- Öneri: f → 1490 (bölünme maddesinin yılı; kaynakta yıl yok, `gurcistan` künyesiyle tutarlılık) · t → 1762 (TDV). Harita `v:` Zagem 1578-08-24→1606 penceresi etkilenmez.
- Bu paket `kaheti-kralligi`ne madde BAĞLAMADI (pencere dar olduğu için 1751 maddesi yalnız Kartli'ye bağlandı). Genişlerse 1751 maddesine `kaheti-kralligi` eklenebilir (Irakli 1744-1762 Kaheti kralı).

## 3. KONU SINIRI — yazılmayan Osmanlı içi Ermeni cemaat maddeleri

M-5416: bunlar polity değil **KONU** maddesidir; CLAUDE.md §1.6 8. boyut yalnız iki konuyla açık ⇒ **YAZILMADI**. Emre'ye koordinatör soracak. Kaynaklı liste (karar verilirse hazır olsun diye):

| Olay | Tarih (kaynağın hassasiyetiyle) | Kaynak | Atlasta bugün |
|---|---|---|---|
| İstanbul Ermeni patrikliği (Hovakim) | 1461 — *"genelde … kabul edilir"*, TDV tarihin ihtilaflı olduğunu yazar | TDV `millet` | yok |
| Ermeni Katoliklerine ayrı millet statüsü | Ocak 1830 | TDV `millet` | yok |
| Protestan Ermenilerin ayrı taife olarak tanınması | "1850'den sonra" — yıl kesin değil | TDV `millet` | yok |
| Nizâmnâme-i Millet-i Ermeniyân | 1863 | **bulunamadı** — TDV'de müstakil madde yok (`nizamname` 302); tarih uydurulmadı | yok |
| Berlin Antlaşması: Ermeni vilayetlerinde ıslahat taahhüdü (61. md.) | 1878-07-13 | TDV `berlin-antlasmasi` (*"Bâbıâli Ermeniler'in bulunduğu yerlerde ıslahat yapacak"*) | `olaylar.js` 1878-07-13 Berlin maddesi var, Ermeni hükmü anılmıyor |
| Osmanlı Bankası baskını | 1896-08-26 | — | `olaylar_ek5.js` VAR |
| Sevk ve İskân Kanunu | 1915-05-27 | — | `olaylar_ek5.js` VAR |
- Tartışmalı 20. yüzyıl olayları için nitelendirme yapılmadı; karar verilirse `CLAUDE.md §4` kırmızı çizgisi ve "kaynağı adıyla an" kuralı geçerli.

## 4. Ek gözlem
- `imereti` künyesi 1490-01-01 başlıyor ve yılsız — TDV `gurcistan` bölünmeye yıl vermiyor; `kronoloji_gurcistan.js` 1490 maddesi "standart akademik tarihyazımı" diyor, kaynak adı yok. Ölçülemedi.
- Gürcistan SSC ve Ermenistan SSC için künye yok; 1920-1923 maddeleri `sovyet-rusya`ya bağlandı (`kronoloji_cok_gurcistan.js` 1921-06-03). Kapsam 1923'te bittiği için öneri yapmadım.
