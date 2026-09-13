# ② H-0012 · VAN'IN FETHİ (1548) ÖNCESİ / SONRASI — ÖLÇÜM · KITA 13 · paket 0044

```
OTURUM   KITA 13 · 13 Eylül 2026 · koşu 10 → data/ DONUK, YAMA ayrı dosyada
TABAN    girdi.yukle() · 79 dosya · 3818 nokta
ÖNGÖRÜ   denetim/ONGORU-KITA13-VANBITLIS-0913.md · commit 544cbcc
ALETLER  ARAC-KITA13-VANBOLGE-0913.py   37 noktalık kutu, 1548-06-15 / 1548-10-01 sahipleri
         ARAC-KITA13-ARADA-NE-VAR-0912.py  en yakın 8 komşu ve sahipleri
         ARAC-KITA13-GUNKUME-0913.py    gün kümeleri + yama BELLEKTE benzetim
         ARAC-KITA13-ADYAKIN-0913.py    "margin"/"bakur" aday sıralaması
         ARAC-KITA13-TDVPASAJ-0913.py   TDV cümlesini bağlamıyla basar
YAMA     denetim/YAMA-KITA13-VAN-0913.json
GÖRSEL   H-0012-2.png AÇILDI (yalnız "margin"/"bakur" etiketleri için — metin yetmedi)
         H-0012-1.png AÇILMADI (1548-06-15 kesiti ölçümle kuruldu)
```

## ⓪ EMRE'NİN ÜÇ SORUSUNA KISA CEVAP

```
"harita doğru mu?"            ÖNCESİ doğru. SONRASI 🔴 İKİ SAFEVÎ ADASI yanlış:
                               Çaldıran ve Başkale (görüntüde açık renkli iki cep).
                               Ölçümde bir ÜÇÜNCÜSÜ var: Şeyhrumi (etiketsiz köy).
"Çaldıran ve Başkale katıldı mı?"  🔴 atlas HAYIR diyor (1639'a kadar Safevî);
                               kayıtların KENDİ kaynak beyanı ve TDV EVET gösteriyor.
"Özalp · Kotur · Çölemerik ·   6'sı 🟢 doğru · "margin" ve "bakur" ⚪ kimliği
 Yüksekova · margin · bakur ·  belirlenemedi (Emre'ye sorulacak)
 Hoy · Doğubayazıt"
```

## ① TABLO — her yer

| yer | 1548-06 | 1548-10 | TDV (slug · alıntı) | hüküm |
|---|---|---|---|---|
| **Van** | safevî | OSM | `van`: *"onuncu gün kale fethedildi (**24 Ağustos 1548**)"* · `suleyman-i` [383]: *"Burası **24 Ağustos**'ta ele geçirilip bir beylerbeyilik merkezi yapıldı"* | 🟡 yıl doğru · **gün 1 kayma** (atlas 25) · + atlasta görünmeyen **1534-35 Osmanlı arası** (§③) |
| **Çaldıran** | safevî | **safevî** | adıyla tarihlenmiyor · kaydın kendi `kaynak:` *"ankraj **Van** (78 km)"* — Van 1548 | 🔴 **KUSUR** — iç çelişki: beyan edilen ankraj 1548, kayıt 1639 |
| **Başkale** | safevî | **safevî** | `hakkari` [43-44]: *"yöre ... Osmanlılar'ın Van'ı fethetmesi üzerine kurulan Van eyaletine bağlandı ... (ocaklık)"* · kaydın `kaynak:` *"ankraj **Van** (73 km) · **Çölemerik** (63 km)"* — ikisi de 1548 | 🔴 **KUSUR** — 91 yıl geç; iç çelişki + bölgesel kaynak |
| Özalp (Saray) | safevî | OSM | adıyla yok · kayıt: *"ankraj Van (55 km) … 1548-08-25 Van'ın kendi Osmanlı günü"* | 🟢 tutarlı (devralma beyanlı) |
| Kotur | safevî | OSM | `van`: Van eyaleti sancakları listesinde *"… Mahmudi ve **Kotur**"* | 🟢 1548 doğru · ⚪ 1639 bitişi (§②) |
| Çölemerik (Hakkâri) | safevî | OSM | `hakkari` [44] (yukarıda) | 🟢 |
| Yüksekova (Gever) | safevî | OSM | `hakkari` bölge tanımı (*"Van gölünün güney kıyılarından … dağlık kesimler"*) — adıyla yok | 🟢 tutarlı (bölgesel) |
| "margin" | — | — | — | ⚪ kimlik belirlenemedi (§④) |
| "bakur" | — | — | — | ⚪ kimlik belirlenemedi (§④) |
| Hoy | safevî | safevî | `hoy` [23]: *"Kanûnî Sultan Süleyman'ın İran seferleri sırasında ele geçirildiyse de bu hâkimiyet **kalıcı olmadı**"* | 🟢 1548 doğru · 🟡 1724→**1739** (TDV) ↔ atlas 1730 (kapsam dışı) |
| Doğubayazıt | OSM | OSM | `dogubayazit`: *"1514'te Yavuz Sultan Selim tarafından Osmanlı topraklarına katıldı"* (0043'te ölçüldü) | 🟢 yıl doğru |

**SAYIM (Emre'nin 11 adı):** 🟢 6 · 🔴 2 · 🟡 1 · ⚪ 2
**Ek (Emre sormadı, ölçüm çıkardı):** 🔴 Şeyhrumi (Yücelen) · 🟡 Mâku 1574-1640 · 🟡 Van 1534-35

## ② 🔴 ÇALDIRAN · BAŞKALE · ŞEYHRUMİ — AYNI KUSUR, TEK YAMA

**`ARADA-NE-VAR` · 1548-10-01:**
```
Başkale   safevî   en yakın 8 komşunun 6'sı OSMANLI (Hoşap 30 km · Çölemerik · Yüksekova ·
                    Kotur · Bacirge · Özalp)
Çaldıran  safevî   en yakın 8 komşunun 6'sı OSMANLI (Bargiri 21 km · Şeyh Salû · Doğubayazıt ·
                    Erciş · Özalp · Van)
Van       OSMANLI  en yakın 8 komşunun 3'ü safevî: Başkale · ŞEYHRUMİ · Çaldıran
```
Görüntü (H-0012-2) bunu **birebir** gösteriyor: Çaldıran ve Başkale çevresi
kırmızı iki açık cep.

**`1639-05-17`de Osmanlı'ya geçen 5 kayıt** (`ARAC-KITA13-GUNKUME`):
Başkale · Çaldıran · Şeyhrumi (Osmanlı başlıyor) · Kotur · Şeyh Salû (Osmanlı bitiyor).

🔴 **ŞEYHRUMİ TERS ÇEVRİLMİŞ:** Şeyhrumi (TR) ↔ Şeyh Salû-yi Ulyâ (İran)
bir **1923 sınır çifti** (`yerlesimler_sinir_dogu.js`, GeoNames, 8,2 km).
1923 için doğru kurulmuş; ama 1548-1639 arasında **batıdaki** Şeyhrumi
safevî, **doğudaki** Şeyh Salû Osmanlı — coğrafyaya göre TERS. Sebep:
Şeyhrumi erken zincirini Çaldıran'ın (1639) desenine, Şeyh Salû Kotur'unkine
(1548-1639) yaslamış.

📌 **VE BU ÜÇÜNCÜ KEZ İŞARETLENİYOR (`D059`: hüküm veriye inmedikçe metindir):**
```
0021/H-0019   "Gümrü Başkale Çaldıran neden farklı renkte" → kök sebep bulundu
              (ek26 yedi kayıt · `iran` hayaleti) · hüküm cozuldu (delil: iz-yok)
FERHATPASA ⑪  "Başkale Osmanlı? · bulunamadı · ÇIKARIM (komşu %71)" ·
              "Başkale'nin 1590 sorusu hâlâ açık"
0044/H-0012   bugün
```
`iran` hayaleti (0024/H-0001) `safevi` ile değiştirilirken **Osmanlı başlangıcı
1639'da bırakılmış**; 1548 başlangıcı hiç inmemiş.

**Çare — `YAMA-KITA13-VAN-0913.json` A grubu:** üç kayıtta `safevi` dilimi
ve `d:` başlangıcı `1639-05-17 → 1548-08-25` (D084: Van · Çölemerik ·
Özalp'ın aynı günü — devralındığı beyanlı).
**Benzetim (bellekte, `ARAC-KITA13-GUNKUME`):**
```
1548-10-01 cep (6 komşunun ≥5'i farklı):  yama ÖNCESİ 3 (Iğdır · Başkale · Şırnak)
                                          yama SONRASI 2 (Mâku · Şırnak)
Değişmez 1 — üç kayıtta boşluk: yok ✓ (1c tavanı etkilenmez)
Değişmez 2 — 1548-08-25 zaten maddeli (olaylar_ek5.js:446) ⇒ yeni kırılma günü YOK
```
⚠️ **§3.5.1 İKİ UÇ — öbür tarafta cep DOĞDU: Mâku.** Yama sonrası Mâku
(safevî) komşularının 5/6'sı Osmanlı. **Ama 1548'de doğru:** TDV `maku` [17]
*"**1574** yılında Osmanlı Devleti, Mahmûdî Kürt kabilesi reisi İvaz Bey'i
Mâkû'yu İranlılar'dan alıp burada bir kale yapmakla görevlendirdi"* ⇒ 1548'de
Mâku İran'da. Şerur/Nahçıvan'la bitişik bir sınır çıkıntısı, ada değil
(ölçütüm 6-komşu, geometriyi ölçmüyor — ⚪ motor koşusu gösterir).
🟡 **AYRI BULGU:** atlas Mâku'yu 1281→1923 hiç Osmanlı göstermiyor; TDV
**1574 → Murad IV'ün ölümü (1640)** arası Osmanlı ocaklığı diyor
(*"İvaz Bey'in ocaklığına verilen Mâkû"* · *"IV. Murad'ın ölümünden sonra
İranlılar tarafından tekrar işgal edildi"*). Ferhat Paşa kalemi, bu işin dışı.

⚠️ Başkale ve Çaldıran `d:` bloğu **1923-10-29'a kadar** gidiyor; komşuları
`1920-04-23`te `tbmm-turkiye`ye geçiyor. Bu da tutarsız ama H-0012'nin
konusu değil — **yamaya KONMADI**, not.

## ② KOTUR 1639 — ⚪ ÖLÇÜLEMEDİ
```
maku [22] "... IV. Murad, ... Kasrışîrin Antlaşması çerçevesinde Safevîler'den
           bölgede bulunan Kotur Kalesi'yle birlikte Mâkû Kalesi'nin de
           yıkılmasını istedi."
maku [23-24] "Her ne kadar kaleler yıkıldıysa da Kotur ve Mâkû, IV. Murad'ın
           ölümünden sonra İranlılar tarafından tekrar işgal edildi."
```
⇒ İran'a geçiş **Murad IV'ün ölümünden sonra** (Şubat 1640), atlas 17 Mayıs
1639 (Kasr-ı Şirin günü). Fark ≤9 ay. Ama [22] "Safevîler'den … istedi"
cümlesi 1639'da kalenin kimin elinde olduğunu **ayrıştırılamaz** bırakıyor
(`§4⑥` ön koşulu). **Yama yok.**

## ③ 🟡 EK BULGU — VAN 1534-1535 OSMANLI ARASI ATLASTA YOK
```
van [121]        "... 1534 ilkbaharı sonunda Van Kalesi'nin anahtarları kendisine
                  teslim edildi ve kalenin muhafazası için Şam Beylerbeyi Hüsrev
                  Paşa önceden gönderildi."
suleyman-i [244] "23 Haziran'da Van Kalesi'nin ele geçirildiği haberini aldı." (1534)
van [122]        14 Haziran 1534: Ahlat, Adilcevaz, Erciş ve Amuk teslim oldu
irakeyn [39]     kış 1534-35: Safevîler Ulama'yı Van Kalesi'nde kuşattı, GİREMEDİ
irakeyn [59-60]  sonbahar 1535: "Şah Tahmasb'ın eline geçen Van'ı kurtarmak üzere
                  gönderilen Osmanlı kuvvetleri ise başarılı olamadı"
atlas            Van safevî 1502 → 1548 KESİNTİSİZ
```
⇒ Van ~**Haziran 1534 → sonbahar 1535** Osmanlı elinde; atlasta yok.
Başlangıç gün ⚪ (≤1534-06-23) · bitiş gün ⚪ (1535-09-23 Ahlat'tan sonra).
**Yama yazılmadı** — iki uç da gün vermiyor ve Değişmez 2 için iki madde
gerekir. Karar koordinatörün.

## ④ "margin" ve "bakur" — ⚪ KİMLİK BELİRLENEMEDİ
Emre'nin yazımında **koordinat yok** ⇒ 3 km komşuluk taraması uygulanamaz.
Tek kanıt: Emre bu adları **kendi ekran görüntüsünden** okudu. H-0012-2'deki
33 etiket elle çıkarıldı, iki bağımsız ölçütle sıralandı:
```
"margin"  Bargiri (Muradiye) lev 3 · Merend lev 4 · Mâku lev 4    fark 1 ⇒ AYIRT EDİCİ DEĞİL
"bakur"   Mâku lev 2 · Kotur lev 3 · Şerur lev 3                  fark 1 ⇒ AYIRT EDİCİ DEĞİL
atlasta kök arama: "merg" → Mergui · Merga vahası (ilgisiz) · "bakur" → YOK
```
⚠️ "Kotur" Emre'nin listesinde **ayrıca** geçiyor ⇒ "bakur" büyük olasılıkla
Kotur değil. Mergever (Urmiye batısı) atlasta **nokta olarak yok.**
⇒ **Emre'ye sorulacak:** *"margin" Bargiri mi Merend mi (ya da Mergever)?
"bakur" Mâku mu?* Tahmin ederek hüküm vermedim (dün difflib Kiğı'yı
Kigali'ye eşledi).

## ⑤ VAN GÜNÜ — 24 mü 25 mi
```
TDV van · suleyman-i    24 Ağustos 1548   (iki bağımsız madde, aynı gün)
atlas                   1548-08-25 · 11 kayıt · 21 dönem sınırı
kronoloji maddesi       olaylar_ek5.js:446  t:"1548-08-25" gun:"25 Ağustos 1548"
                        kaynak:"van"   ← kaynağın kendisi 24 diyor (D144)
```
🟡 1 günlük harita etkisi yok denecek kadar küçük. Yama **B grubu** olarak
ayrı yazıldı; ⚠️ A grubu uygulanırsa B'nin kapsamı 11 → **14 kayda** çıkar
(`D166`: sonraki adımın ön koşulu önceki adımdan SONRAKİ durumdan türetilir).

## ÖNGÖRÜ KARNESİ (②)
```
②a Van 1548-08-25 TDV'de doğrulanacak           🔴 ÇÜRÜDÜ — TDV iki maddede 24 Ağustos
②b Başkale kusurlu, 1548'de katılmış           🟢 TUTTU — ve beklenenden güçlü: kaydın kendi ankrajı 1548
②c Çaldıran kusurlu, kaynak bulunamayacak       🟢 TUTTU — kaynak yok, iç ankraj çelişkisi var
②d Hoy ve Doğubayazıt zaten doğru               🟢 TUTTU
②e Kotur 1639 ölçülemedi                       🟢 TUTTU (≤9 ay, ayrıştırılamaz cümle)
②f margin/bakur atlasta yok                     ⚪ ÖKSÜZ (D183) — soru "atlasta var mı" değil
                                                   "hangi ETİKET" çıktı; kimlik belirlenemedi
③  sayı 6·2·1·2                                 🟢 TUTTU (kovalar biraz farklı: Kotur 🟢, Van 🟡)
```
📌 En değerli bulgu **öngörülmemişti**: Şeyhrumi'nin 1548-1639 ters sahipliği ve Van'ın 1534-35 arası.

## NE ÖLÇEMEDİM
```
⚪ Çaldıran'ın 1548 sonrası statüsü — TDV adıyla anmıyor (bulunamadı; dar slug yok)
⚪ Başkale adıyla — TDV `hakkari` bölge olarak kapsıyor, adıyla tarihlemiyor
⚪ margin / bakur kimliği — Emre'ye soru
⚪ Mâku cebinin GEOMETRİSİ — ölçütüm komşu sayıyor, petek bitişikliği değil (motor gerekir)
⚪ Van 1534 başlangıç ve 1535 kayıp GÜNLERİ — bulunamadı
⚪ Van eyaleti sancak listesindeki "Ağakis" · "Espayrid" — atlasta karşılığını ARAMADIM
```
