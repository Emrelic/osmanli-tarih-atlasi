# EKOKUMA-0076-A — ek okuma, 1856-1896 dilimi · 15 madde

> Oturum: `EKOKUMA-0076-A` · 23 Eylül 2026 · parti `parti-emrelic-0076`
> Şartname: `oturumlar/ORTAK-0076.md` + `oturumlar/SEVK-0076.md` · tahta hükümleri M-5023, M-5024
> Teslim dosyaları:
> - `denetim/EKOKUMA-0076-A-YAMA-ekokuma_p76b.js` → `data/ekokuma_p76b.js` · **`window.EKOKUMA_P76B`** · **33 kart**
> - `denetim/EKOKUMA-0076-A-YAMA-app.js` → `js/app.js` `EKOKUMA_TUR`'a **bir satır** (yeni tür)
> - `denetim/EKOKUMA-0076-A-SINA.py` → beş soruluk sınav aleti

---

## 1. ÖLÇÜM — sayılarla

`py denetim/EKOKUMA-0076-A-SINA.py` çıktısı:

| soru | ölçüm | beklenen | durum |
|---|---|---|---|
| kart sayısı | **33** | — | — |
| ① şema eksiği (`id·tur·kisa·metin·kesinlik·olay·kaynak`) | **0** | 0 | ✓ |
| ② id çakışması (mevcut 561 kartlık havuzla) | **0** | 0 | ✓ |
| ③ çapa: kronolojide bulunamayan gün | **0 / 63 bağ** | 0 | ✓ |
| ④ `app.js`te tanımsız tür | **1 tür / 4 kart** | 0 | 🟡 **yama şart** |
| ⑤ kart içi geliştirici sesi ihlali | **0** | 0 | ✓ |
| söz dizimi (`node --check`) | temiz | temiz | ✓ |

🔴 **④ kusur değil, BEYAN:** `tur:"bu-ulke-neden-var"` yeni bir kategoridir ve
`js/app.js` yaması uygulanmadan bu dört kart **buton çıkarmaz** — `EKOKUMA_TUR`
döngüsü tanımadığı türü sessizce geçer (D099 sınıfı: kayıt bağlı, buton yok).

🔴 **Sınav aleti iki yönde sınandı** (YASALAR B9 · M-5024 ①). Her arama bilinen bir
pozitif vakayla ateşlenir; ateşlenmezse `ALET KIRIK` deyip çıkar. Nitekim ilk
koşuda **"33 kartın hepsinde `id` ve `tur` eksik"** çıktı — sebep veri değil, alanı
satır başına bağlayan regex'ti (`^\s*` → `\b`). Düzeltilince 66 → 0 oldu.
Türkçe katlama (`lower()`/`casefold()`) hiç kullanılmadı; kalıplar ASCII.

---

## 2. MADDE MADDE HÜKÜM

| madde | hüküm | ne yapıldı |
|---|---|---|
| H-0008 | `cozuldu` + `senin-kararin` | Yeni kategori açıldı (tür + `app.js` yaması) ve **4 kurucu kart** yazıldı. Kapsam kendi başıma AÇILMADI — aşağı bak. |
| H-0011 | `cozuldu` | 2 kart: klasik dönemde banka işlevini gören yapılar · ilk Osmanlı bankaları |
| H-0015 | `cozuldu` (kısmen `kapsam-disi`) | 4 kart: güzergâh · İngiltere ayağı · Avrupa basını · seyahatin önemi. **Haritada güzergâh çizimi bu dosya ailesinde değil** — aşağı bak. |
| H-0020 | `cozuldu` | 2 kart: Midhat Paşa şahsiyet · Cevdet Paşa şahsiyet |
| H-0027 | `cozuldu` | 1 kart: neye direndi, hal' nasıl kuruldu |
| H-0028 | `cozuldu` | 1 kart: övgü/yergi/nasıl bilirdiniz (kartvizit alanı zaten 41/41 dolu, ona dokunulmadı) |
| H-0031 | `cozuldu` | 2 kart: dayatılan program · konferansın dağılması ve sonucu |
| H-0032 | `cozuldu` | 4 kart: şahsiyet · istibdat tartışması · toprak kayıpları · dönemin yenilikleri |
| H-0033 | `cozuldu` | 2 kart: seçim ve yapı · yetki ve âkıbet |
| H-0034 | `cozuldu` | 6 kart: Plevne · Gazi Osman Paşa · Gazi Ahmed Muhtar Paşa ve doğu cephesi · Ayastefanos · göç dalgası · Kıbrıs |
| H-0051 | `once-cozuldu` | Dolu kart zaten var: **`bakis-bulgar`** (`data/ekokuma_bakis.js`, `tur:"karsi-anlati"`, 4501 karakter, `olay:["1393-07-17\|Tırnova","1878-03-03\|Ayastefanos"]`). Bulgar millî anlatısında Osmanlı dönemini, 1990 öncesi/sonrası ders kitabı dilini birebir anlatıyor. Mükerrer kart açılmadı. |
| H-0063 | `cozuldu` | 1 kart: "hasta adam" tabirinin doğuşu ve işlevi |
| H-0077 | `cozuldu` + `once-cozuldu` | Mehdî yarısı için yeni kart. **Vehhâbî yarısı zaten dolu:** `dunya6-vehhabiler-kimdir-ve-arabistan-sinirlari` (`data/ekokuma_dunya.js`, `tur:"tartisma"`, 4403 karakter, `olay:["1818-09-09\|Dir'iye"]`). |
| H-0079 | `cozuldu` | 1 kart: Mehdî devleti 1885-1899 |
| H-0090 | `cozuldu` | 2 kart: örgütlerin kuruluş sırası · ne yaptıkları ve iki anlatının ayrıldığı yer |

**Toplam:** 13 madde `cozuldu` · 1 madde `once-cozuldu` (H-0051) · H-0077 ikiye bölündü ·
H-0008'in kapsam kısmı `senin-kararin`.

---

## 3. BULAMADIKLARIM — `bulunamadı` bir sonuçtur

1. **TDV'de "Osmanlı Bankası" maddesi YOK.** Denenen sluglar ölü (302, arama
   sayfasına düşüyor): `banka` · `bankacilik` · `osmanli-bankasi` · `bank-i-osmani` ·
   `ziraat-bankasi` · `para-vakiflari`. Bankacılık kartları bu yüzden `kaime` ·
   `sarraflik` · `duyun-i-umumiyye` · `esham` maddelerinin içinden derlendi ve bu
   eksiklik kartın gövdesinde okura AÇIKÇA yazıldı.
2. **TDV'de Ermeni komiteleri maddesi YOK.** Ölü sluglar: `ermeniler` ·
   `ermeni-mes-elesi` · `tasnaksutyun` · `hincak`. Akademik kaynağa geçildi ve
   `kaynak:` alanında açıkça yazıldı (CLAUDE.md §4 ara bölge hükmü). Kullanılan
   literatürün taraflı olduğu **kartın kendi gövdesinde** söylendi ve karşı anlatı
   için mevcut `bakis-ermeni` kartına yol gösterildi.
3. **II. Abdülhamid döneminde kaybedilen toprağın TOPLAM km² değeri bulunamadı.**
   TDV vermiyor; dergipark/ttk taraması tek bir kabul görmüş sayı vermedi. Kart
   **rakam uydurmadı**: kaybı altı kalem hâlinde saydı ve toplamın `bulunamadı`
   olduğunu okura söyledi. Atlasın kendi yüzölçümü DAYANAK YAPILMADI (CLAUDE.md §4).
4. **"Donanmanın Haliç'te çürütülmesi" iddiası TDV'de geçmiyor.** Ne doğrulandı ne
   çürütüldü; kartta `bulunamadı` diye kaydedildi. Verilen tek bağlam, savaşın
   kaybediliş sebepleri arasında "Karadeniz'deki donanmanın hiçbir varlık
   gösterememesi"nin sayılmasıdır.
5. **1867 seyahatinin ara limanları ve Belçika-Prusya-Avusturya durakları gün gün
   bulunamadı.** TDV yalnız "Belçika, Prusya ve Avusturya'ya da uğradı · 7 Ağustos
   1867'de döndü" diyor; incelenen iki akademik makale Fransa ve İngiltere ayağını
   veriyor. Kart uydurma güzergâh YAZMADI, eksikliği beyan etti ve ayrıntı için
   monografiye (Nihat Karaer, *Paris, Londra, Viyana*, Ankara 2007) yol gösterdi.
6. **"Hasta adam" görüşmesinin GÜNÜ bulunamadı.** Akademik kaynak "Ocak 1853" diyor;
   gün uydurulmadı (CLAUDE.md §4 tarih uydurma yasağı).
7. **Cebel-i Lübnan Nizamnâmesi'nin madde metni okunamadı** — mutasarrıflığın iç
   işleyişi (mezhep kotası, meclis bileşimi) TDV'nin okunan maddelerinde ayrıntısız.

### TDV tuzakları — bu koşuda ölçülenler (D211)
- **② canlı slug, yönlendirme gövdesi:** `tersane-konferansi` → gövdesi yalnız
  *"bk. İSTANBUL KONFERANSI"*. Asıl madde `istanbul-konferansi`de okundu.
  `ahmed-cevdet-pasa` da kısa künye kalıntısı; asıl gövde `cevdet-pasa`da.
- **① ölü slug:** `93-harbi` ölü, canlısı `doksanuc-harbi`; `osman-pasa` ölü,
  canlısı `gazi-osman-pasa`; `ahmed-muhtar-pasa` ölü, canlısı `gazi-ahmed-muhtar-pasa`.
- **TDV arama sayfası JS ile doluyor:** `?q=` sayfasının HTML'i sonuç bağlantısı
  taşımıyor (yalnız "Madde Başlıkları (N)" sayacı geliyor). Slug avı bu yüzden
  doğrudan deneme ile yapıldı; aramanın çalışmaması "TDV'de yok" demek DEĞİLDİR.
- **Müellif adları tek tek doğrulandı.** İlk taslakta üç künye yanlış yazılmıştı
  (`berlin-antlasmasi` ve `doksanuc-harbi` müellifleri, bir akademik makalenin
  yazarı); maddelerin kendi atıf satırından okunup düzeltildi.

---

## 4. İSTİYORUM / ÖNERİYORUM

### ① H-0008 — kapsam kararı Emre'nin (`senin-kararin`)
Talep otuz küsur ülke sayıyor: San Marino · Andorra · Lüksemburg · Belçika ·
Slovakya · Slovenya · Kosova · Moldova · Belarus · Litvanya · Estonya · Hırvatistan ·
Bosna-Hersek · Çekya · İsveç-Norveç · Danimarka · Portekiz · Pakistan · Azerbaycan ·
Kuveyt · Guatemala · Honduras · El Salvador · Haiti · Küba · Şili …

**Ölçtüm:** bunların kuruluş anı büyük ölçüde **1856-1896 dilimimin dışında**
(Belçika 1830, Portekiz 1139/1640, İsveç-Norveç 1905, Slovakya 1993, Kosova 2008 …).
ORTAK-0076 ④ *"ucu açık talepte kapsamı yalnız Emre açar"* gereği kendi başıma
açmadım. **Yaptığım:** kategoriyi kurdum ve dilimime düşen, kronolojide çapası olan
dört ülkeyi yazdım (Romanya · Lübnan · Bulgaristan · Sırbistan-Karadağ).
**Önerim:** kategori bir sonraki partide **dönem dönem** dağıtılsın — her oturuma
kendi tarih dilimindeki ülkeler verilsin; böylece her kart gerçek bir kronoloji
maddesine bağlanır, "çapasız kart" üretilmez.

### ② H-0015'in harita kısmı başka dosya ailesinde
*"Güzergâhı ayrıntılı olarak haritada göster, tüm durakları teker teker"* isteği
kart değil **sefer/ok katmanı** işidir (`js/sefer_ok.js` ailesi). Bana verilen
numaraya sadık kalıp **kartları yazdım**, harita tarafına dokunmadım. Ayrıca
güzergâhın gün gün ayrıntısı kaynaklarda yok (yukarı bak) — yani harita işi
açılırsa **önce monografi okunmalı**, yoksa çizilecek çizgi uydurma olur.

### ③ Kronolojide gerçek bir boşluk buldum — Ermeni örgütleri
`data/olaylar*.js` ve `kronoloji*.js` tarandı: **Armenakan (1885, Van) · Hınçak
(Ağustos 1887, Cenevre) · Taşnaksütyun (1890 yazı, Tiflis)** kuruluşlarının
hiçbirinin kronoloji maddesi YOK. Aralıkta bu konuda tek çapa var:
`1896-08-26 Osmanlı Bankası Baskını` (`data/olaylar_ek5.js`). İki kartım da ona
bağlandı — ama üç kuruluş için çapa uydurmadım.
**Öneri:** bu üç gün kronoloji oturumlarından birine madde olarak verilsin; o zaman
kartlar kendi tarihlerine de bağlanabilir. (Tarih hassasiyeti: Hınçak "Ağustos
1887", Taşnaksütyun "1890 yazı" — ikisi de GÜN vermiyor, `YYYY-01-01` kuralı işler.)

### ④ İki yama AYNI commit'te gitmeli
`data/ekokuma_p76b.js` + `js/app.js` (`EKOKUMA_TUR` kaydı **ve**
`_EKOKUMA_DOSYA_ADLARI` satırı) ayrılırsa ya dosya 404 verir ya da dört kart
sessizce görünmez. `index.html`e satır EKLENMEZ.

---

## 5. KART LİSTESİ (33)

```
H-0008  bunv-romanya-1859 · bunv-lubnan-1861 · bunv-bulgaristan-1878 ·
        bunv-sirbistan-karadag-1878                        [tur: bu-ulke-neden-var 🟡]
H-0011  banka-klasik-donem-banka-islevi · banka-ilk-osmanli-bankalari
H-0015  seyahat-abdulaziz-1867-guzergah · -ingiltere · -avrupa-basini · -onemi
H-0020  kimdir-midhat-pasa-sahsiyet · kimdir-cevdet-pasa-sahsiyet
H-0027  abdulaziz-neye-direndi-hal-1876
H-0028  abdulaziz-nasil-bilirdiniz
H-0031  tersane-konferansi-dayatma · tersane-konferansi-sonuc
H-0032  kimdir-abdulhamid-ii-sahsiyet · abdulhamid-istibdat-tartismasi ·
        abdulhamid-donemi-toprak-kayiplari · abdulhamid-donemi-yenilikler
H-0033  ilk-meclis-mebusan-secim-ve-yapi · ilk-meclis-mebusan-yetki-ve-akibet
H-0034  harp93-plevne-savunmasi · kimdir-gazi-osman-pasa ·
        kimdir-gazi-ahmed-muhtar-pasa · harp93-ayastefanos-ne-getirdi ·
        harp93-balkan-goc-dalgasi · harp93-kibris-ve-ingiltereye-yaslanma
H-0063  hasta-adam-tabiri
H-0077  mehdi-hareketi-sudan-1881          (Vehhâbî yarısı: once-cozuldu)
H-0079  mehdi-devleti-1885-1899
H-0090  ermeni-orgutleri-kurulus-sirasi · ermeni-orgutleri-ne-yaptilar
```

Tür dağılımı: `sebep-sonuc` 11 · `tartisma` 7 · `kimdir` 5 ·
`bu-ulke-neden-var` 4 🟡 · `teknik-bilimsel` 4 · `savas-hikayesi` 1 · `dis-yankilar` 1.

`gorsel:` alanı **hiçbir kartta kullanılmadı** — kamu malı/CC0 olduğu doğrulanmış
görsel bulunmadığı için (lisans jetonu doğrulanmamış görsel eklemek yasak).
