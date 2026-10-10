# KASA-RIDER-MERSIN-BEREZOV-1010 — iki tek nokta (koordinatör rider ① ②)

Görev: YILDIRIM BAYEZIT · Araştırmacı: KASA · `data/` DONUK · salt okuma · main d50ddbedd.
⚠️ USUL BEYANI: bu iki rider için ayrı ÖNGÖRÜ commit'i YAZILMADI. Kaynak okumaya önce başladım; kural ihlali, adıyla
kayda geçiyor. Bulgular kaynak cümlesine dayanıyor, öngörüyle kıyaslanmıyor.

## ① MERSİN
### Önce: üç değer AYNI kayıtta değil
| katman | dosya | `kur:` | `d:` | `s:` |
|---|---|---|---|---|
| taban (yüklenen) | `yerlesimler_ek27.js:51` | **1671-01-01** | 1671-01-01 → 1918-10-30 | `fransa-cumhuriyet` 1918-10-30 → 1921-10-20 · `tbmm-turkiye` 1921-10-20 → 1923-10-29 |
| yama (BEKLEYEN) | `yer_yama_cukurova_isg_0907.js:302` | — | **1352-01-01** → 1920-04-23 | **`kilikya-ermeni` 1281-01-01 → 1352-01-01** · `tbmm-turkiye` 1920-04-23 → 1923-10-29 · `isg:` Fransa 1918-12-17 → 1922-01-03 |
- `girdi.yukle` tabanı okuyor; yama `GIRDI_DOSYALARI`'nda değil (`_bagli_mi.py:82`: "`yer_yama_*` ailesi … `GIRDI_DOSYALARI`nda zaten yok").
- **Yama BAYAT:** tabanın kendi yorumu (ek27) yamanın taşıdığı zinciri ADIYLA anıyor ve iptal ediyor: *"d: 1352-01-01'de
  başlıyordu — 164 yıllık hayalet Osmanlı"* · *"`kur:`DAN ÖNCEKİ DÖNEMLER BUDANDI — `Değişmez 5` yakaladı"* (10 Eylül
  2026). Yama 7 Eylül'de yazıldı ⇒ **o budamadan ÖNCEKİ zinciri taşıyor.** Olduğu gibi uygulanırsa 1281-1352 Kilikya
  ve 1352 Osmanlı hayaletini GERİ GETİRİR. UMIT'in kapısının yakaladığı çelişki bu.

### Üç değerin kaynağı
| değer | kaynak (ADIYLA) | hüküm |
|---|---|---|
| `s f:1281` `kilikya-ermeni` (yama) | yamada `kaynak:` YOK. TDV `mersin` 1281-1352 için Mersin'i adıyla anan cümle içermiyor. | **bulunamadı** — ve `kur:`'dan önce ⇒ var olmayan yerin sahibi (§9.7) |
| `d f:1352` (yama) | yamada `kaynak:` YOK. Tabanın `kaynak:`'ı TDV `ramazanogullari`: *"sahası 'başta Adana olmak üzere Çukurova yöresi' — Tarsus, Sîs, Ayas, Misis dâhil"* ⇒ Mersin'i ADIYLA anmıyor = **S** (bölge, D208 taşınmaz). | **bulunamadı** (şehir adlı) — tabanın kendi notu bunu "hayalet" diye zaten iptal etmiş |
| `kur:1671` (taban) | **Emre'nin kararı**, 2 Eylül 2026 (ek27 notu: *"(a) 1671 — Evliya Çelebi. Daha erken, tek kaynaklı."*). TDV `mersin`: *"Buranın ne zaman kurulduğu hakkında kesin bilgi yoktur, adına ilk defa Evliya Çelebi'nin Seyahatnâme'sinde rastlanır. Evliya Çelebi, 1082'de (1671) bu yöreden geçerken şimdiki Mersin'in güneybatısında Mersinoğlu adlı bir Türkmen köyünde gecelediğini kaydeder"* | **kaynaklı, AMA TDV aynı yerde ŞERH düşüyor** ↓ |

🔴 **TDV `mersin` 1671'i Mersin'in yerine koymuyor:**
- *"Onun bahsettiği köy Mersin'in yerinde olmamakla beraber köyün adını koruyarak yer değiştirmiş olması mümkündür."*
- *"XIX. yüzyılın birinci yarısı ortalarında yapılan ilk nüfus sayımında Tarsus'a bağlı birçok küçük yerin nüfusu
  verildiği halde Mersin'in adı geçmez."*
- *"Buna karşılık 1836'ya doğru burayı ziyaret eden Charles Texier Mersin köyünün Tarsus'un iskelesi haline geldiğini
  söyler."* · *"(Texier, s. 727-728) bugünkü Mersin şehrinin yerinde Mersin adlı köyden söz etmesi …"*
- *"1852'de Tarsus kazasına bağlı bir nahiyenin merkezi oldu."* · Davis 1875: *"1800'lü yılların başında birkaç
  kulübeden ibaret bir yer"*.
- Genel hüküm: *"Mersin XIX. yüzyıldan itibaren gelişmeye başlayan … yeni şehirlerden biridir."*
⇒ **Modern Mersin'in `kur:`'ı için iki aday, ikisi de TDV `mersin` cümlesiyle:**
1. **1671** (Evliya, Ş+): adın ilk geçtiği yıl; TDV'ye göre köy bugünkü yerde DEĞİL, "yer değiştirmiş olması mümkün".
   Emre bu seçeneği "daha erken, tek kaynaklı" diye seçmiş; TDV'nin "yerinde olmamakla beraber" şerhi kararın notunda
   anılmıyor.
2. **~1836** (Texier, Y): bugünkü yerde Mersin köyünün ilk ADIYLA tanığı ("1836'ya doğru" ⇒ `kesinlik:"yil"`
   en iyimser).
**Hüküm benim değil, Emre'nin** (4. sabah kalemi, `kur:` sınıfı). Benim ölçümüm: 1671'in TDV'deki dayanağı noktanın
kendisi değil, bugünkü Mersin'in GÜNEYBATISINDA, TDV'nin "yerinde olmamakla beraber" dediği bir köy. Bu Hudeyde /
Batna ailesi: modern idarî merkez ↔ adaşı ya da selefi erken yerleşim.
- **Yamanın `isg:` günleri TDV ile birebir:** *"17 Aralık 1918'de Fransız askerleri denizden Mersin'e çıkarma yapmaya
  başladı. 3 Ocak 1922'de millî kuvvetler Mersin'e girerek şehri kurtardı"* ⇒ `isg: 1918-12-17 → 1922-01-03` ✓.
  Tabanın `s: fransa-cumhuriyet 1918-10-30 → 1921-10-20`'si ise HUKUM-CUKUROVA-CAKISMA-0907'nin "işgal `isg:` örtüsü,
  `s:` devir değil" modeline aykırı (yama bu yüzden yazılmış).
⇒ **Öneri:** yama uygulanacaksa Mersin girdisinden `s:` 1281-1352 ve `d:` 1352 SİLİNSİN, `d:` tabanın `kur:`'undan
başlasın; `isg:` aynen kalsın. Yamanın öteki 14 kaydı bu turda okunmadı (aynı bayatlık başka kayıtlarda da olabilir —
özellikle 10 Eylül'de `kur:` alan noktalar).

## ② BEREZOV
| değer | kaynak | |
|---|---|---|
| `kur: 1593-01-01` | — (kayıtta kaynak yok) | |
| `s: rusya f: 1592-01-01` | TDV `kucum-han`: *"Ruslar 1592'de Pilim, Berezov ve Surgut gibi yeni şehirlerin **inşasına başladılar**"* (kayıt notu) | |
| **akademik (birincil, §4: Sibirya İslâm dünyası dışı)** | **ЭСБЕ (Brockhaus–Efron, 1890–1907), "Березов, город"**: *«Город основан в 1593 году для взимания здесь с остяков «ясака» (дань мехами).»* — ru.wikisource.org/wiki/ЭСБЕ/Березов,_город | |
⇒ **Kuruluş 1593.** TDV ile çelişki yok: TDV 1592'yi inşanın BAŞLANGICI olarak veriyor ("inşasına başladılar"),
kuruluş günü değil. **Düzelen `rusya f`'dir: 1592-01-01 → 1593-01-01** (kaynak: ЭСБЕ; TDV `kucum-han` ikincil, "inşaya
başlama 1592" `ic_not`a). `kur:` 1593 aynen kalır, kaynak alanına ЭСБЕ yazılır.
- Kayıt notunun Surgut emsali aynı yapıda: BRE "Сургут" «Заложен летом 1594» ↔ TDV 1592 — o not "TDV esastır"
  diyerek BRE'yi uygulamamış. Koordinatörün bu gece yinelediği §4 şartıyla (İslâm dünyası dışı ⇒ akademik birincil)
  **Surgut da aynı sınıfta yeniden açılmalı**: `rusya f` 1592 → 1594 (BRE). Bu turda ölçmedim, notu okudum.
- İkinci akademik tanık (Müller, *История Сибири*) bu turda aranmadı.
