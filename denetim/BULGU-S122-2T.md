# BULGU — Değişmez 2t (kırılmasız madde) · SONNET HAZIR KITA 122

> Sevk: M-2281 (1.MURAT → HERKES), 2 Eylül 2026. **ÖLÇÜM oturumuyum — düzeltme
> YAPMADIM, öneri getiriyorum.**

## ① NE ÖLÇTÜM

`arac/denetle.py`'nin **kendi** `kirilmasiz_madde()` fonksiyonunu doğrudan
çağırarak ölçtüm (kendi regex/ayrıştırıcımı yazmadım — `CLAUDE.md §11`:
*"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır"*). İki
bağımsız yoldan doğruladım:

1. Kendi yazdığım tek-amaçlı betik (`kirilmasiz_madde(kir, kir_s, O)` çağrısı).
2. `py arac/denetle.py`'nin tam koşusu (arka planda, 2. bir doğrulama).

**İkisi de aynı sonucu verdi: 18 (tavan 42).** Sevk mesajındaki "18" sayısı
**doğrulandı**, devralınmadı.

```
2663 yerleşim, 1303 kronoloji maddesi
kırılmasız madde SAYISI: 18  (tavan 42)
tür dağılımı: antlasma×7, savas×3, fetih×6, vassal×1, tür-alanı-boş×1
```

⚠️ `denetim/KIRILMASIZ-DEFTERI.json` **BAYAT** (2026-08-01 tarihli, payda
`k:`den `etiket:`e taşınmadan önce yazılmış — 49 kayıt). Bugünkü koşu
7 YENİ / 38 KAPANAN gösteriyor; defter güncellenmeli ama bu **benim işim
değil** (ÖLÇÜM oturumuyum, `--defter-yaz` çalıştırmadım).

## ② NEYİ ÖLÇEMEDİM

🔴 **"Hangi commit" sorusunu ÖLÇEMEDİM.** `git log -S` / `git log --oneline`
gibi komutlar bu oturum boyunca **defalarca 60-120 saniyede zaman aşımına
uğradı**; sebebini ölçtüm: `.git/index.lock` şu anda mevcut (başka bir
eşzamanlı oturum kilidi tutuyor — bu projede 30'dan fazla oturum aynı repoyu
paylaşıyor, `ListAgents` ile doğrulandı). Zorlarsam ya kilide takılıp
bekleyecektim ya da yarım bir `git` komutuyla paylaşılan index'e zarar verme
riski alacaktım (`CLAUDE.md` "paylaşılan index sahneleme" dersi). Bu yüzden
**"hangi commit" alanı ÖLÇÜLEMEDİ diye bırakıyorum** — dosya konumu (aşağıda)
her kayıt için kesin, commit hash'i değil.

## ③ NE İSTİYORUM

Aşağıdaki tabloda **KUSUR** diye işaretlediğim 9 kayıt için bir sonraki
düzeltme turunun (`data/olaylar*.js`'e yazma yetkisi olan bir oturum)
şartnamesine girmesini istiyorum. Ben yazmıyorum.

---

## 18 KAYIT — dosya · tür · hüküm · kanıt

Yöntem: her kaydın `yer_id`sini `yerlesimler*.js`teki gerçek nokta
periyotlarıyla (`d:`/`v:`/`s:`) karşılaştırdım. `yer_id` yoksa ya da
periyot uyuşmuyorsa nedenini araştırdım (bkz. kanıt sütunu).

### 🟢 CİNS GEREĞİ (8) — kırılmasızlık kusur DEĞİL

| # | Tarih | Madde | Dosya | Neden meşru |
|---|---|---|---|---|
| 1 | 1529-09-08 | Budin'in alınıp Zapolya'ya verilmesi | `olaylar_ek5.js` | Budin'in `v:` (vasal) dönemi zaten **1526-09-01**'de başlıyor (Mohaç sonrası). 1529 olayı bu dönemin **İÇİNDEKİ** bir alt-safha (Zapolya'nın tahta oturtulması) — yeni bir kırılma DOĞURMAZ, çünkü sınır zaten 1526'dan beri aynı. |
| 2 | 1672-10-18 | Bucaş Antlaşması — en geniş sınırlar | `olaylar.js` | `yer_id` YOK ama karşılık gelen nokta **Kamaniçe**'nin `d:` dönemi **1672-08-27**'de başlıyor — kale gerçek düşüşü Ağustos'ta, antlaşma (diplomatik tescil) Ekim'de. Fark **52 gün**: eşiğin (30g) az üstünde ama açıkça aynı kampanyanın iki safhası. `yer_id:"Kamaniçe"` eklenirse bu ilişki görünür olur (öneri, uygulanmadı). |
| 3 | 1724-06-24 | İstanbul Mukāsemenâmesi — İran'ın Rusya ile paylaşılması | `olaylar_ek5.js` | `yer_id:"İstanbul"` **yanıltıcı** — İstanbul yalnız antlaşmanın imzalandığı şehir, devredilen toprak değil. Asıl devralınan yer **Hemedan**, ve Hemedan'ın `d:` dönemi **1724-08-31**'de başlıyor (68 gün sonra) — diplomatik anlaşma → fiilî işgal gecikmesi, meşru. `yer_id` Hemedan/Kirmanşah'a çekilmeli (öneri). |
| 4 | 1727-10-04 | Hemedan Antlaşması — Batı İran'ın Osmanlı'ya katılması | `olaylar_ek5.js` | Hemedan zaten **1724-08-31**'den beri Osmanlı (madde 3'teki kırılmanın kendisi). 1727 antlaşması var olan hâkimiyeti (bu sefer İran'daki farklı bir tarafla) TESCİL ediyor, yeni toprak vermiyor — kırılmasızlık beklenen. |
| 5 | 1555-01-01 | İbrim ve Nübye sınırının güneye taşınması | `olaylar_ek5.js` | İbrim zaten **1517-04-13**'ten beri Osmanlı. 1555 olayı sınırın İbrim'in GÜNEYİNDE (Nübye'ye doğru) ilerlemesini anlatıyor — İbrim noktasının kendisi hareket etmiyor. 🔗 Bu tam olarak `CLAUDE.md §3.5.1`'in bilinen İbrim/Kızıldeniz borcuyla aynı bölge; ayrı ölçülmüş bir sorunun yansıması. |
| 6 | 1919-06-28 | Versailles Antlaşması — Alsas-Loren Fransa'ya döndü | `olaylar_ok109.js` | `yer_id` YOK — devredilen toprak (Alsace-Lorraine) Osmanlı atlasının **hiç izlemediği** bir coğrafya (Almanya-Fransa sınırı). Dünya-bağlamı maddesi, kapsam dışı meşru. |
| 7 | 1919-11-27 | Neuilly Antlaşması — Bulgaristan Batı Trakya'yı kaybetti | `olaylar_ok109.js` | Aynı sınıf: Batı Trakya/Ege kıyısı devri Bulgaristan-Yunanistan arası, atlasın nokta düzeyinde izlemediği bir devir. Dünya-bağlamı, kapsam dışı meşru. |
| 8 | 1488-01-01 | Safi'nin Portekiz nüfuzuna girmesi | `yerlesimler_ek3.js` (**KUYRUK**) | Safi'nin `s:` dönemi **tam 1488-01-01**'de merini→portekiz'e dönüyor — GÜN GÜNÜNE eşleşiyor. Kırılmasız görünmesinin TEK sebebi `yerlesimler_ek3.js`'in `KUYRUK_DOSYALARI` listesinde olması (çekirdek havuza girmiyor). Dosya çekirdeğe alınınca bu kayıt **kendiliğinden kapanır** — kusur veride değil, kovada. |

### 🔴 KUSUR (9) — bir sonraki turda ele alınmalı

| # | Tarih | Madde | Dosya | Kanıt |
|---|---|---|---|---|
| 9 | 1415-03-01 | Konya kuşatması ve Karamanoğulları ile antlaşma | `olaylar_ek5.js` | Konya'nın `s:` dönemi **1402-1468 boyunca kesintisiz Karaman** — 1415'te hiçbir sınır oynamıyor. Madde `toprak-kazanc` etiketi taşıyor ama Karamanoğulları 1468'e kadar bağımsız kaldı (kuşatma vergiye/vasallığa bağlandı, ilhaka değil). **Muhtemel etiket hatası**: bu maddenin `toprak-kazanc` etiketi kaldırılmalı ya da gerçek bir kısa süreli statü değişikliği araştırılmalı. |
| 10 | 1426-01-01 | Cüneyd Bey'in idamı — Aydınoğulları Beyliği'nin sonu | `olaylar_ek11.js` | `yer_id:"Sisam"` (Samos) **1281-1479 boyunca kesintisiz Ceneviz** — Aydınoğulları'yla ilgisiz. Asıl toprak kazancı **İzmir/Ayasuluk/Tire/Birgi**'nin hepsinde aynı gün başlıyor: `d: 1425-06-01`. Olay tarihi (1426-01-01) bu kırılmadan **214 gün** sonra — muhtemelen Cüneyd Bey'in son direnişinin/idamının GEÇ tarihi ile beylik topraklarının fiilen düşüşü (7 ay önce) karışmış. Öneri: `yer_id` İzmir/Ayasuluk'a çekilsin VE etiketten `toprak-kazanc` çıkarılsın (asıl kazanç zaten 1425-06-01 kırılmasıyla — varsa — başka bir maddede karşılanıyor olmalı, o ayrıca doğrulanmalı). |
| 11 | 1515-01-01 | Nusaybin ve Cizre-Mardin'in İdrîs-i Bitlisî eliyle Osmanlı'ya katılması | `olaylar_ek8.js` | Nusaybin'in kendi `d:` başlangıcı **1515-09-19** — GÜN hassasiyetli. Madde `1515-01-01` (yıl bilinir/gün bilinmez kalıbı) yazılmış. Fark **261 gün**. Madde tarihi noktanın kendi tarihine (`09-19`) çekilirse ±30 gün içine girer — **veri hazır, yalnızca madde tarihi hassaslaştırılmalı.** |
| 12 | 1529-09-08 |*(bkz. #1, TUTTU)*| — | — |
| 13 | 1513-09-01 | Azemmûr'un alınışı | `yerlesimler_ek3.js` (**KUYRUK**) + tarih | Azemmûr'un `s:` dönemi merini→portekiz **1513-01-01**'de değişiyor, madde `1513-09-01` diyor — fark **243 gün**, kova sorunu (#8'deki gibi) düzelse BİLE tarih uyuşmazlığı kapanmaz. **Bileşik kusur**: hem kuyruktan çekirdeğe alınmalı hem tarihlerden biri (muhtemelen nokta verisindeki `01-01` yer tutucu) hassaslaştırılmalı. |
| 14 | 1560-07-30 | Cerbe kalesinin düşüşü | `olaylar_ek12.js` | Cerbe'nin `d:` başlangıcı **1560-05-14** (Cerbe Deniz Muharebesi/donanma zaferi). Madde "kalenin düşüşü"nü (kara kalesindeki İspanyol garnizonunun teslimi, tarihsel olarak Temmuz sonu) anlatıyor — aynı ada için **iki ayrı gerçek tarih** (deniz zaferi ↔ kale teslimi) tek noktaya tek `d:` günü olarak yazılmış. Fark **77 gün**. Öneri: ya nokta verisi kale teslimine (`07-30`) çekilsin ya da madde deniz zaferini ayrı anlatsın. |
| 15 | 1811-04-01 | Niğbolu'nun geri alınışı — altı aylık Rus işgali sona erdi | `olaylar_ek21.js` | Niğbolu'nun `d:` dönemi **1413-07-05 → 1877-07-16 KESİNTİSİZ**. Madde açıkça "altı aylık Rus işgali" diyor (1806-1812 Osmanlı-Rus Savaşı sırasında Rus kuvvetlerinin Tuna'yı geçip aldığı biliniyor) ama veri hiçbir ara dönem taşımıyor. **Gerçek boşluk**: ~1810 sonu - 1811 ortası Rusya `s:` dönemi eksik. |
| 16 | 1896-09-23 | Dongola'nın geri alınışı | `olaylar_ek9.js` | Dongola'nın verisi `s: mehdi 1885-01-26 → 1899-01-19` tek parça. Ama Dongola kasabası tarihsel olarak **1896 Eylül**'de (Kitchener'in ilk safha seferi) düştü; 1899 tarihi Sudan'ın GENELİ için Kondominyum anlaşması tarihi — Dongola'ya özel değil. **Muhtemel tarih hatası**: `s:` dizisine 1896-09-23 sınırlı bir ara dönem eklenmeli. |
| 17 | 1897-05-17 | Dömeke Meydan Muharebesi | `olaylar_ek.js` | Yenişehir (Larissa) `s: yunanistan 1881-07-02 → 1923-10-29` **kesintisiz**. Ama 1897 Osmanlı-Yunan Savaşı'nda Osmanlı kuvvetleri Teselya'yı (Larissa dahil) **geçici olarak** (Mayıs-Aralık 1897) işgal etti, barış sonrası geri çekildi. Veri bu kısa episodu hiç taşımıyor — **gerçek boşluk**. |
| 18 | 1920-12-03 | Gümrü Antlaşması | `yerlesimler_ek26.js` künyesi / `olaylar_ek5.js` | `yer_id:"Gümrü (Aleksandropol)"` **yanıltıcı** — Gümrü şehrinin kendisi (bugünkü Ermenistan Gyumri) hiç el değiştirmedi, veri de bunu doğru gösteriyor (kesintisiz Rusya/Sovyet). Asıl devredilen toprak **Kars/Ardahan/Iğdır**; ama bu üç noktanın hiçbirinde Aralık 1920 civarında bir sınır yok — `d: 1918-05-25 → 1923-10-29` kesintisiz görünüyor, oysa 1918-1920 arası Ermenistan'ın bu bölgede kısa süreli hâkimiyeti ve Ekim 1920'deki Türk geri alışı MODELLENMEMİŞ. 🔗 **Bu, bugün tahtada geçen "Kars çatışması" (`kafkas.js ↔ uyg1.js`, M-2163 civarı) ile AYNI KÖK SORUN** — o çözülünce bu kayıt muhtemelen kendiliğinden kapanacak. Ayrıca `yer_id` Kars/Ardahan'a çekilmeli. |

### ⚪ ÖLÇÜLEMEDİ (1)

| # | Tarih | Madde | Dosya | Neden ölçülemedi |
|---|---|---|---|---|
| — | 1695-09-22 | Lugoş zaferi — II. Him seferi | `olaylar_ek3.js` | `yer_id` yok, Lugoş (bugünkü Lugoj) atlasta ayrı bir nokta olarak bulunamadı. Bir savaş zaferinin kalıcı toprak değişimine dönüşüp dönüşmediğini (dönemin akışkan Osmanlı-Habsburg sınır savaşları tipik olarak kalıcı değildir) doğrulayacak veri yok. **Cins gereği OLABİLİR ama doğrulayamadım.** |

---

## ÖRÜNTÜLER — tek tek kayıtlardan çıkan üç tekrarlayan sınıf

```
① KISA SÜRELİ İŞGAL/GERİ ALIŞ MODELLENMEMİŞ (#15 Niğbolu, #16 Dongola, #17 Dömeke)
   Üçü de "bir yer kısa süre el değiştirdi, sonra geri döndü" — ve üçünde de
   veri modelinde o kısa episod HİÇ yok. Aynı örüntü üç ayrı yüzyılda (1811,
   1896, 1897) çıktı — tek vaka değil, TEKRARLAYAN bir veri açığı sınıfı.

② ANTLAŞMA ŞEHRİ ≠ DEVREDİLEN TOPRAK (#3 İstanbul Mukāsemenâmesi, #18 Gümrü)
   yer_id antlaşmanın İMZALANDIĞI şehre yazılmış, devredilen toprağa değil.
   İkisinde de imza şehri hiç el değiştirmiyor (İstanbul zaten Osmanlı,
   Gümrü zaten Rusya/Sovyet) — kontrol bu yüzden hep "kırılma yok" diyor.

③ KUYRUK KOVASI (#8 Safi, #13 Azemmûr) — CLAUDE.md §11'in bilinen dersi
   (`yerlesimler_ek3.js` KUYRUK_DOSYALARI'nda) canlı örneği.
```

## ÜÇ DAMGA ÖZETİ

```
TUTTU (cins gereği, kusur değil)  8   — #1,2,3,4,5,6,7,8
ÇÜRÜDÜ (gerçek kusur, iş listesine girmeli)  9   — #9,10,11,13,14,15,16,17,18
ÖLÇÜLEMEDİ  1   — Lugoş
"hangi commit" alanı TÜM kayıtlar için ÖLÇÜLEMEDİ (.git/index.lock, 30+ eşzamanlı oturum)
```

## DURUM

✅ **İŞİM BİTTİ — boştayım, yeni iş bekliyorum.**
