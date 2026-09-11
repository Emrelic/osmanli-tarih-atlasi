# İÇ TUTARSIZLIK — t: alanı ile maddenin kendi metni çelişiyor mu

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Sınıf tanımı:** DALGA 2 TEYIT'in bulduğu `afgan-durrani` vakası (metin
"20 Mayıs" diyor, `t:` alanına 18 Mayıs — Timur Şah'ın ÖLÜM günü — yazılmış)
bir **DEĞER uyuşmazlığı**: yanlış alan seçilmiş, hassasiyet meselesi DEĞİL
(`ARAC-AY-KODLU-MADDE-0905`'in bulduğu sınıftan farklı — orada `t:` doğru
günü taşıyor ama biçim ayın 1'ine yuvarlanmış görünüyordu).

**Evren düzeltmesi (ölçümden önce, tahtaya bildirildi):** `girdi.py` yalnız
yerleşim dosyalarını okuyor, kronoloji için böyle bir okuyucu yok. Gerçek
üç kaynak:
```
① data/olaylar*.js        — ÇEKİRDEK
② data/kronoloji*.js      — KUYRUK (D124: ayrı kova)
③ devletler.js'in HER KÜNYENİN KENDİ kronoloji dizisi — ÜÇÜNCÜ kaynak,
   emsal vakanın (afgan-durrani) YAŞADIĞI YER tam burası
```
`afgan-durrani 1793-05-18` kaydının kendisi bugün `data/devletler.js`'te
**YOK** — `denetim/HAZIRLIK-DALGA2-0911.json`da bekleyen bir ADAY. D010
sınaması bu yüzden CANLI VERİDE değil, o dosya üzerinde AYRICA (evren dışı,
ikincil doğrulama) yapılacak.

**Yöntem:** her maddenin `b:`/`gun:` metninde geçen "GÜN AY(yıl)" biçimli
Türkçe tarih ifadelerini regex ile çıkarıp `t:`in gün/ay'ıyla karşılaştır.
`t:` günü "01" ise (§4'ün yuvarlama konvansiyonu olabileceği için) AYRI,
YUMUŞAK bir kovaya düşürülür — sert çelişki sayılmaz.

**Tahmin (ölçümden ÖNCE):**
```
Evren (③ üç kaynağın toplamı, kaba tahmin): ~8.000-9.000 madde
Metinde ayrıştırılabilir GÜN+AY ifadesi taşıyan madde: ~%15-25 (1.200-2.200)
Ham gün/ay UYUŞMAZLIĞI (t:'nin günü "01" DEĞİLKEN metin farklı gün diyor):
  10-40 arası
Hicri/miladi karışıklığı şüphesi taşıyanlar (🟡): ham'ın küçük bir kısmı,
  2-8 arası
GERÇEK ÇELİŞKİ (🔴, süzülmüş, afgan-durrani sınıfı): 5-20 arası
```

Bu öngörü ÇÜRÜRSE sebebi raporun sonunda ayrıca yazılacak.

---

## ÖLÇÜM

Araç: [`denetim/ARAC-IC-TUTARSIZLIK-0911.py`](../denetim/ARAC-IC-TUTARSIZLIK-0911.py)
Ham çıktı: [`denetim/OLCUM-IC-TUTARSIZLIK-0911.json`](../denetim/OLCUM-IC-TUTARSIZLIK-0911.json)

### ① EVREN (D124 — üç ayrı kova)

```
CEKIRDEK (olaylar*.js, 35 dosya)         1.323 madde · 678'i metin-tarihi taşıyor
KUYRUK (kronoloji*.js, 42 dosya)         4.838 madde · 3'ü metin-tarihi taşıyor
KUNYE_KRONOLOJI (devletler.js, 627 künye) 2.388 madde · 13'ü metin-tarihi taşıyor
TOPLAM: 8.549 madde
```

### ② D010 — BİLİNEN POZİTİF SINAMASI

Emsal (`afgan-durrani` 1793-05-18) **canlı veride yok** (öngörüde bildirildi).
Aracın mantığı `denetim/HAZIRLIK-DALGA2-0911.json`daki bekleyen aday
üzerinde **elle** doğrulandı: `t_oneri:"1793-05-18"`, `anlatim:"...Zaman
Şah 20 Mayıs 1793'te şah oldu."` — aracın regex'i (20,5,1793) çıkarır,
`t:`nin (18,5)'iyle KARŞILAŞTIRIR, gün "01" değil, takvim ipucu yok ⇒
**GERÇEK_ÇELİŞKİ**. Araç bu vakayı YAKALARDI — mantık doğrulandı
(dosya farklı alan adları [`anlatim`/`t_oneri`] kullandığı için birebir
çalıştırılamadı, ama aynı karşılaştırma elle tekrarlandı).

### ③ HAM SONUÇLAR (aracın kendi filtreleri sonrası — aralık + takvim ipucu)

```
                    🔴 GERÇEK   🟡 TAKVİM   ⚪ AYRIŞTIRAMADIM   YUMUŞAK(gün=01)
CEKIRDEK              13           0            2                  4
KUYRUK                 0           0            0                  1
KUNYE_KRONOLOJI        7           2            1                  0
```

🔴 **Araç KENDİLİĞİNDEN 26→13 (CEKIRDEK) düşürdü** — `gun:` alanındaki
AÇIK GÜN ARALIKLARINI ("17–20 Ekim 1448" gibi) tanıyıp, `t:` o aralığın
içindeyse çelişkiyi bastırdı (13 kayıt böyle elendi: Kosova, Prut'un
KENDİSİ değil ama Çeşme/Bulgaristan/Oran/Sultan İbrahim/Meşaleler/Aden/
Tomanbay/Yavuz Selim/Güns/Kösem/Sivas Kongresi/Vahdeddin). Ve `jülyen`
ipucuyla `sovyet-rusya`/`kenmu`'yu 🟡'ya taşıdı.

### ④ ELLE İNCELEME — kalan 20 aday TEK TEK OKUNDU (D024: süzülmeden rapor edilmez)

**CEKIRDEK'in 13 adayından 6'sı `gun:` metninin KENDİ AÇIKLAMASIYLA
zaten çözülüyor** (mekanik aralık-testinin YAKALAYAMADIĞI, DÜZ YAZI
gerekçeler):
```
Moskova-Litvanya    gun: "...25 Mart...veride 1503-04-02 KESİNLEŞME
                     günü olarak kullanılıyor" — kendi içinde açıklanmış
Habsburglar         gun: "...2 Nisan (ölüm)...Habsburg beratı BİRKAÇ
                     HAFTA İÇİNDE" — t: (2 Mayıs) o pencereye düşüyor
Tokar               gun: "...28 Şubat'ta HABER VERİLDİ, alınış AYIN İLK
                     HAFTASINDA" — iki ayrı olay (haber ≠ olay)
Anabolu             gun: "...29 Ağustos'ta BOZULDU, şehir BİRKAÇ GÜN
                     İÇİNDE teslim oldu" — t: (30 Ağustos) tutarlı
Sapienza            gun: "12-25 Ağustos" ama t:28 — ⚠️ ARALIĞIN 3 GÜN
                     DIŞINDA, TAM açıklanmıyor, ZAYIF bir kalan şüphe
Şerif Gālib         gun: "...12 Temmuz (kuşatma başı) + 25 gün süre —
                     gün TÜRETİLMİŞ" (12 Tem + 25 gün = 6 Ağu = t: birebir)
```
⇒ Sapienza HARİÇ (aralığı 3 gün aşıyor, zayıf ama gerçek bir şüphe),
diğer 5'i **AÇIKLANMIŞ**, çelişki DEĞİL.

**KUNYE_KRONOLOJI'nin 7 adayının 7'si de** aynı şekilde metnin kendi
cümle yapısıyla açıklanıyor — hiçbiri "yanlış alan" değil, hepsi
"BAŞLANGIÇ olayı ANLATILIYOR, metin AYRICA bir SONRAKİ/ÖNCEKİ olayı da
anıyor":
```
garbi-trakya    t: TESLİM SÜRESİ DOLUŞU · metin: ANTLAŞMA imza günü (ayrı olay)
tbmm-turkiye    t: muharebe BAŞLANGICI · metin: "...13 Eylül'e DEK" (bitiş)
zulu-kralligi   t: İSTİLA başlangıcı · metin: ÜLTİMATOM günü (gerekçe, önceki olay)
bharatpur-cat   t: KUŞATMA başlangıcı (metinde günü yok) · metin: kuşatma KALKIŞ günü
transvaal       t: baskın BAŞLANGICI · metin: "...başarısız OLDU" günü (bitiş)
transkafkasya   t: Gürcistan'ın ayrılışı · metin AYRICA Ermenistan/Azerbaycan'ın
                (farklı ülke, farklı gün) ayrılışını da anıyor — bileşik cümle
habesistan      MADDENİN KENDİSİ ZATEN "⚠️ ÖLÇÜLMEDİ" diye üç aday tarihi
                (antlaşma/işgal/ilan) AYIRT EDEMEDİĞİNİ yazıyor — BEN
                BULMADIM, YAZAN ZATEN BİLİYORDU
```
⇒ **7/7 AÇIKLANDI. KUNYE_KRONOLOJI'de 0 gerçek çelişki.**

### ⑤ 🔴 GERİYE KALAN GERÇEK ADAYLAR — 7, HEPSİ CEKIRDEK'TE, VE BİRİ SİSTEMATİK

```
Prut Zaferi              t:1711-07-19   gun: "21 Temmuz 1711"     fark 2 gün
Patrona Halil İsyanı     t:1730-09-25   gun: "28 Eylül 1730"      fark 3 gün
Sened-i İttifak          t:1808-10-07   gun: "29 Eylül 1808"      fark 8 gün
Sapienza Deniz Zaferi    t:1499-08-28   gun: "12-25 Ağustos 1499" aralığı 3 gün aşıyor

🔴🔴 DÖRDÜ BİRDEN — CÜLUS (TAHTA ÇIKIŞ) MADDELERİ, HEPSİ +1 GÜN KAYMIŞ:
I. Mustafa (2. cülus)    t:1622-05-21   gun: "20 Mayıs 1622"      +1 gün
IV. Mehmed cülusu        t:1648-08-09   gun: "8 Ağustos 1648"     +1 gün
IV. Mustafa cülusu       t:1807-05-30   gun: "29 Mayıs 1807"      +1 gün
II. Mahmud cülusu        t:1808-07-29   gun: "28 Temmuz 1808"     +1 gün
```

📌 **Son dört kayıt tesadüf olamayacak kadar DÜZENLİ**: hepsi "cülus"
(padişah tahta çıkışı) türünde, hepsi `t:` = `gun:` + 1 GÜN. Bu ya (a)
bir toplu-üretim/kopyalama hatası (bir script ya da elle giriş sırasında
sistematik +1 kayması), ya da (b) gerçek bir TAKVİM MESELESİ: Osmanlı
günü GELENEKSEL OLARAK GÜN BATIMINDA BAŞLAR — bir olay "20 Mayıs akşamı"
olduysa Batı takvimiyle 20'si mi 21'i mi sayılacağı KAYNAKTAN KAYNAĞA
FARKLI yazılabilir. **İkisini AYIRT EDEMEDİM** — bu ayrım için her dört
olayın birincil kaynağını (TDV'nin kendi `kaynak:` alanı boş, aday
maddede kaynak alanı yok) okumak gerekir, ZAMAN KISITI içinde
yapılamadı. **⚪ AYRIŞTIRAMADIM olarak damgalanıyor, ama SİSTEMATİK
DESENİ ayrıca vurguluyorum** — dördü TEK TEK değil, TEK KÖKTEN
gelebilir.

### ⑥ AYRIŞTIRAMADIM / diğer (özet)

`AYRISTIRAMADIM` (CEKIRDEK 2 + KUNYE 1 = 3): madde birden fazla farklı
gün anıyor, hangisinin `t:`ye karşılık geldiği metin içinden
belirlenemiyor (ör. `kirim` 1783 ilhakı: 8 Nisan VE 10 Temmuz ikisi de
geçiyor, manifesto/fiilî ilhak ayrımı olabilir, araştırılmadı).

`YUMUŞAK_01` (CEKIRDEK 4 + KUYRUK 1 = 5): `t:` tam `YYYY-01-01`
(yıl-hassasiyeti, §4'ün kendi konvansiyonu) AMA metin ayrıca TAM bir
gün+ay veriyor (ör. "Zebîd'in kesin girişi" `t:1539-01-01` ama gün
alanı "10 Mart 1539" diyor). Bu bir ÇELİŞKİ DEĞİL — bir **KAÇAN
HASSASİYET FIRSATI**: madde zaten doğru günü BİLİYOR ama `t:` alanına
yazmamış. Ayrı bir iş (kronoloji hassasiyet artırma) için not düşülüyor,
bu görevin kapsamı DEĞİL.

### ⑦ SONUÇ SAYIYLA

```
① TARANAN MADDE (evren, üç kaynak):           8.549
② METİN-TARİHİ TAŞIYAN (karşılaştırılabilir):    694
③ HAM ADAY (araç filtreleri sonrası):             20
④ ELLE İNCELEMEYLE AÇIKLANAN (çelişki DEĞİL):     13
⑤ GERÇEK ÇELİŞKİ (kaynak okunmadan KESİNLEŞMEZ
   ama açıklanamayan, kaydı gerektiren):            7  (hepsi CEKIRDEK)
   — bunların 4'ü TEK bir sistematik desene (cülus +1 gün) işaret ediyor
⑥ TAKVİM ŞÜPHESİ (açıklandı, hata DEĞİL):          2
⑦ AYRIŞTIRAMADIM (birden fazla tarih, belirsiz):    3
⑧ ÖLÇÜLEMEDİ (zaman kısıtı — 674 metin-tarihli
   maddenin geri kalanı yalnız MEKANİK filtre gördü,
   elle OKUNMADI — yalnız GERÇEK ÇELİŞKİ ADAYLARI
   [ham 20] tek tek okundu, TAM eşleşen 674 zaten
   temiz sayıldı ama o eşleşmeler DE tek tek
   doğrulanmadı, yalnız MEKANİK eşleşti)
```

### ⑧ ÖNGÖRÜ TUTTU MU?

```
evren tahmini          8.000-9.000    ölçüm 8.549                    TUTTU
metin-tarih tasiyan     1.200-2.200   ölçüm 694                      ÇÜRÜDÜ (düşük)
ham uyumsuzluk          10-40         ölçüm (mekanik filtre sonrası) 20  TUTTU
takvim şüphesi          2-8           ölçüm 2                        TUTTU (alt sınırda)
gerçek çelişki          5-20          ölçüm 7                        TUTTU
```

**Çürüyen kısım (metin-tarih taşıyan 1.200-2.200 → 694) neden çürüdü:**
Tahminim maddelerin ne kadarının GÜN+AY biçiminde bir tarih içerdiğini
FAZLA iyimser tahmin etti — çoğu madde (özellikle KUYRUK, 4.838 maddenin
yalnız 3'ü) tarihi zaten YALNIZCA `t:` alanında taşıyor, `b:`/`gun:`
metninde AYRICA bir gün+ay YAZMIYOR (bu aslında SAĞLIKLI bir yazım
alışkanlığı — metin tekrar tarih yazmıyor, `t:`ye güveniyor). Bu, benim
"çoğu madde tarih tekrarlar" varsayımımın YANLIŞ olduğunu gösteriyor —
KUYRUK'un neredeyse tamamı (4.835/4.838) `b:` içinde AYRICA tarih
YAZMAMA alışkanlığında, yani BU SINIFIN kusuru için YAPISAL OLARAK
BAĞIŞIK.

**Tutan/güçlenen kısım:** "gerçek çelişki" tahminim (5-20) DOĞRU aralıkta
kaldı (7) — ama BİLEŞİMİ öngörülemezdi: 7'nin 4'ü TEK bir sistematik
desene (cülus +1) ait çıktı, rastgele dağılmış 7 ayrı hata değil.

