# KITA 3 — DALGA 2 KRONOLOJİSİ — teslim raporu

## 🔴🔴 ⓪ AKSAKLIK — `data/olaylar_ek8.js` "YENİ dosya" DEĞİLDİ (bekletmeden bildiriliyor, `§7.1⑥`)

Şartname (`oturumlar/KITA-3-DALGA2-KRONOLOJI.md`) bu dosyayı **"YENİ:
`data/olaylar_ek8.js`"** diye tarif ediyordu. YANLIŞTI. Dosya **15
Ağustos'tan beri VAR** ve `index.html` onu zaten yüklüyor — 15 gerçek,
Osmanlı tarihine ait, bu görevle hiç ilgisi olmayan madde taşıyordu
(İzvornik 1460 · Diu 1509 · Nusaybin 1515 · Kalender Şah 1526 ·
Şehrizor 1554 · Fizan 1577 · Nahçıvan 1585 · Deli Hasan Paşa 1603 ·
Azak 1637 · Limni/Semadirek 1657 · Knin 1688 · Basra 1779 · Londra
Protokolü 1830 · Şammar/Reşîdî 1835 · Sevr 1920).

Şartnameye güvenip `Write` ile dosyanın **tamamının üzerine yazdım** —
19 DALGA2 maddemle. **15 eski madde bir an için diskten silindi.**
`git status` çıktısının `??` değil `M` (değiştirilmiş) göstermesi
şüphelendirdi; `git show HEAD:data/olaylar_ek8.js` ile eski içerik
kurtarıldı ve **hiçbir şey commit edilmediği için** (görev zaten
"COMMIT ETME" diyordu) kalıcı kayıp OLMADI. İki içerik (eski 15 + yeni
19) **BİRLEŞTİRİLDİ, tek dosyada 34 madde**, hiçbiri silinmedi —
`node -e` ile doğrulandı (`window.OLAYLAR_EK8.length === 34`, tüm `t:`
alanları geçerli tarih).

🔴 **VE BU İKİNCİ VAKA.** Dosyanın kendi eski başlığı, **27 Ağustos
2026**'da AYNI hatanın bir kez daha yapıldığını, 8 maddenin bir süre
düştüğünü ve onarıldığını kaydediyor. Yani bu isim ("YENİ dosya" diye
tarif edilen `olaylar_ek8.js") artık **ikinci kez** bir işçiyi yanılttı.
**Sistemik öneri:** bir şartname bir dosyayı "YENİ" diye nitelerken bu
iddia doğrulanmalı (`git log --oneline -1 -- <dosya>` boş dönmeli) —
yoksa `D178` sınıfı (bayat şartname zinciri) tekrar edecek. Merge
edilmiş dosyanın başına bu ikinci vakayı kaydeden bir not eklendi.

## ① 22 ADAYIN SONUCU — SAYIYLA

(Not: dosya artık TOPLAM 34 madde taşıyor — 15 eski + 19 yeni, bkz. ⓪.
Aşağıdaki sayılar yalnız bu görevin 22 ADAYINA ait, dosyanın tamamına değil.)
```
data/olaylar_ek8.js → window.OLAYLAR_EK8'e YAZILDI (bu görevden):      19
  ├─ doğrudan (🟢, PAKET'in "yazılabilir_gun_dahil")               18
  └─ düzeltmeyle (afgan-durrani, 1793-05-18 → 1793-05-20)           1
YAZILMADI — "bulunamadı" (KATI §4 okuması, PAKET'in kendi
  gevşetmesine RAĞMEN, gerekçe aşağıda):                            3
  ├─ kazan, 1521-01-01 adayı
  ├─ mogulistan, 1462-01-01 adayı
  └─ buhara-halk-cumhuriyeti, 1922-07-07 adayı
YAZILMADI — zaten önceden karara bağlanmış (tui-tonga-imparatorlugu): 1
   (bu 22'nin İÇİNDE değil, PAKET'in ayrı notu — HAZIRLIK'ın kendi
   kararıyla sözlü-gelenek dönemi için hiç aday üretilmemişti)
TOPLAM aday: 22 = 19 (yazıldı) + 3 (bulunamadı)
```

### 🔴 3 KAYDIN NEDEN YAZILMADIĞI — PAKET'in kendi sınıflamasından SAPMA

PAKET-DALGA2-0911.json bu üçünü *"yazılabilir kaynak notuyla şüpheli"*
diye sınıflamıştı (yaz, ama şüpheyi belirt). **KITA 3 bunu KATI
okudu ve YAZMADI** — gerekçe görev şartnamesinin KENDİ metninde:
> *"tannu-tuva paketin KENDİ notu: 'adayların çoğu Wikipedia kaynaklı,
> ikinci akademik kaynakla TEYİT EDİLMEDİ' ⇒ Vikipedi TEK DAYANAK
> DEĞİLDİR. Teyit edemezsen bulunamadı YAZ ve maddeyi YAZMA."*

Ölçüldü: **tannu-tuva'nın kendisi PAKET'in son turunda gerçekten
düzeltilmiş** (nit.tuva.asia — hakemli akademik dergi, Wikipedia
DEĞİL) — 3 maddesi de bu yüzden YAZILDI. Ama **kazan/mogulistan/
buhara-1922-07-07 aynı düzeltmeyi ALMAMIŞ** — PAKET'in kendi "③ ÜÇ
BULUNAMAYAN" bölümü üçünün de hâlâ yalnız Wikipedia'ya dayandığını,
akademik kaynağın (varsa) erişilemediğini AÇIKÇA yazıyor. Şartnamenin
kuralı tannu-tuva'ya ÖZEL değil GENEL bir ilke olarak okundu ve bu
üçüne de uygulandı — **D036: paketin "yazılabilir" hükmünü kabul
etmeden ÖLÇTÜM**, hüküm ile teşhis ayrı tutuldu.

## ② DEĞİŞMEZ 2 / 2s — ÖNCE / SONRA (ölçüldü, tahmin edilmedi)

```
                        ÖNCE (yazmadan önce)   SONRA (yazdıktan sonra)
Yerleşim sayısı         3805                   3813   (+8, BEN DEĞİL)
Değişmez 2 (Osmanlı)    ✗ 523 kırılma, 2 açık   ✗ 523 kırılma, 5 açık (+3, BEN DEĞİL)
Değişmez 2s (yabancı)   ✓ 1327 kırılma,        ✓ 1327 kırılma,
                          104 AÇIK (tavan 121)    108 AÇIK (tavan 121)   (+4)
Kırılmasız madde        12                     11     (-1)
```

🔴 **BU ÖLÇÜM KİRLİ — TEMİZ BİR ÖNCE/SONRA DEĞİL, AÇIKÇA BİLDİRİYORUM.**
Yerleşim sayısı 3805→3813 (+8) ve Osmanlı senkronu açık sayısı 2→5
(+3) BENİM olaylar_ek8.js'imle HİÇ İLGİLİ DEĞİL (o dosya tek bir
Osmanlı yerleşimine dokunmuyor, yalnız yabancı devlet kronolojisi
ekliyor) — bu değişiklikler AYNI ANDA `data/`ye yazan başka
oturumlardan geliyor (KITA 1 devletler.js'e 12 künye+27 t: yazıyordu,
KITA 4 olaylar_ek2.js'e yazıyordu, KITA 5 kunye alanlarını
dolduruyordu — hepsi tahtada görüldü, aynı dakikalarda).
⇒ **Değişmez 2s'nin 104→108 artışını (+4) BENİM 19 maddeme
ATFEDEMEM** — kırılma SAYISI (1327) HİÇ DEĞİŞMEDİ (benim maddelerim
YABANCI kırılma sayısını artırmadı, çünkü hiçbiri yeni bir toprak
kırılması eklemiyor, yalnız var olan kırılmalara YAKIN narratif
madde ekliyor), yani açık sayısındaki +4 muhtemelen EŞZAMANLI
YAZIMLARDAN kaynaklanıyor. **Öngörüm (104 sabit kalır) teknik olarak
ÇÜRÜDÜ ama nedeni KARIŞIK/KİRLİ ölçüm — temiz bir izolasyon bu anda
mümkün değildi** (D129 sınıfı: taban ölçüm sırasında kaydı).

## ③ index.html — 🔴 SATIR EKLENMEDİ, 1.MURAT EKLEYECEK

```html
<script src="data/olaylar_ek8.js"></script>
```
Bu satır **BEN EKLEMEDİM** (dosya benim değil). Eklenmezse
`window.OLAYLAR_EK8` tarayıcıda hiç var olmaz ve **hiçbir denetim
ötmez** (D099) — açıkça bildiriyorum.

## ④ ÖNGÖRÜ (D022) — KARNESİ

`denetim/ONGORU-KITA3-DALGA2-0911.json` (commit 4a37d3d, yazmadan
ÖNCE): *"Değişmez 2s açık sayısı 104'te sabit kalır"* →
**ÇÜRÜDÜ (104→108) AMA KİRLİ ÖLÇÜMLE** — bkz. ②. Kırılma SAYISININ
(1327) hiç değişmemesi, benim maddelerimin YENİ bir toprak-kırılması
eklemediğini destekliyor; açık sayısındaki artış eşzamanlı başka
oturumların devletler.js/olaylar_ek*.js yazımlarından gelmiş
görünüyor. **Temiz bir izolasyon için bu ölçüm TEK BAŞINA (başka
oturum yazmazken) TEKRARLANMALI** — bunu şimdi yapamadım (data/
serbest ve paylaşımlı, `§7` kilit istemiyor bu görev için).

## ⑤ tannu-tuva TEYİT EDİLEBİLDİ Mİ

**EVET** — PAKET-DALGA2'nin son hâlinde tannu-tuva'nın 3 maddesi de
`nit.tuva.asia` (hakemli akademik dergi) kaynaklı, Wikipedia DEĞİL.
Şartnamenin §3'ündeki uyarı (paketin "çoğu Wikipedia" notu) HAZIRLIK
aşamasının bir ÖNCEKİ, düzeltilmemiş hâline aitti — güncel PAKET bunu
zaten çözmüştü. 3 madde de YAZILDI.

## ⑥ HAREZM/BUHARA — KITA 1'İN PAKET-T İNİŞİ — SONUÇLANDI, EK MADDE YAZILDI

Tahtadan soruldu (M-3534→KITA 1). **KITA 1 cevap verdi** (M-3542/M-3544):
harizm-halk-cumhuriyeti ve buhara-halk-cumhuriyeti künyelerinin `t:`
alanı 1923-10-29'dan **1924-01-01**'e çekildi (PAKET-T-0911.json,
"C-gün-belirsiz" kovası) — pencere artık 1924 bölünme olayını kapsıyor.

**20. madde EK olarak yazıldı** (35. toplam madde): Hârizm SSC ve
Buhara Halk Sovyet Cumhuriyeti'nin "millî sınırlandırma" ile ilgası,
Özbekistan/Türkmenistan SSC'lerinin kuruluşu.

🔴 **VE BURADA KENDİ BAĞIMSIZ ARAŞTIRMAM BİR KAYNAK ÇELİŞKİSİ BULDU —
bekletmeden bildiriyorum, ÇÖZMEDEN:** TDV `harizm` maddesi yalnız
"1924'te" diyor (gün yok). Akademik kaynaklar (soviethistory.msu.edu)
sürecin TEK bir günde değil ~6 haftalık bir zincirde ilerlediğini
gösteriyor: Türkistan MİK 16 Eylül 1924 kararı → Buhara/Hârizm
kurultayları Eylül-Ekim 1924 → SSCB MYK 14 Ekim 1924 kararı → fiilen
birlik cumhuriyeti statüsü ve ilga **27 Ekim 1924**. Web araması bir
ara "27 Ekim 1924" tek bir kesin gün gibi sundu ama birincil-yakın
akademik metin (MSU) bunu TEK cümlede doğrulamıyor — birden fazla karar
tarihi var ve hangisinin "the" tarih sayılacağı kaynaklar arasında
netleşmiyor.

**Karar (D014/5 Eylül `KRONOLOJİ BOŞ KÜNYE` emsaliyle aynı ilke):**
daha hassas ama KENDİ İÇİNDE çelişik bir gün UYDURMADIM — künyenin
kendi `t:1924-01-01` günü (KITA 1'in TDV'nin "yalnız yıl" bilgisini
YYYY-01-01 kuralıyla kodlaması) DEVRALINDI, madde `t:1924-01-01`
yazıldı ve `d:` alanında hem TDV'nin tekli beyanı hem akademik
kaynağın çok-adımlı süreç anlatımı hem de bu çelişkinin ÇÖZÜLMEDİĞİ
açıkça kaydedildi. **Eğer KITA 1 ya da bir sonraki oturum künyenin
`t:` gününü daha hassas bir tarihe (örn. 1924-10-27) çekmek isterse,
bu maddenin `t:`sinin de AYNI ANDA güncellenmesi gerekir** — yoksa
künye ile kronoloji arasında yeni bir gün-uyumsuzluğu doğar.

## COMMIT ETMEDİM — data/ 1.MURAT'ta.
