# KOŞU SONRASI — 3 Eylül 2026 · uygulama kuyruğu

> 🔴 **BU DOSYA BİR KARAR KUYRUĞUDUR, BİR ÖLÇÜM DEĞİL.** Her kalem
> ölçülerek karara bağlandı ve `data/` · `arac/` donuk olduğu için
> **uygulanamadı.** Koşu (PID 1268, 09:40:52 başladı) bitince sırayla
> uygulanır.
>
> ⚠️ Ve `§11`: *"bir hüküm, veriye inmedikçe hüküm değil bir
> metindir."* Bu dosyanın kendisi o kuralın kapsamındadır — kalemler
> **uygulandıkça damgalanacak**, yoksa yarın *"yapılacak iş"* diye
> yeniden bulunur.

## 0 — ÖNCE: koşu gerçekten bitti mi
```bash
py arac/denetle_yayin.py          # ✗ YAYIN BAYAT çıkarsa DUR
git log --oneline -5 -- data/ arac/    # koşu sırasında commit var mı
```
🔴 **2 Eylül'de bir koşu 10,5 saat temiz koştu ve YAYINLANAMADI**:
sırasında 18 yerleşim dosyası değişti. Kural: **koşu boyunca `data/`
ve `arac/` DONUK** — `data/`ya yazmak koşuyu öldürmez ama **çıktıyı
yayınlanamaz** yapar; `arac/`a yazmak **koşuyu öldürür** (motor parmak
izi: `uret_petek.py` · `renkler.py` · `girdi.py`).

---

# ① KÜNYE PARTİSİ — `data/devletler.js`

| # | künye | karar | dayanak |
|---|---|---|---|
| 1.1 | `prusya` | 🟢 EKLE · `f:1701-01-18` `t:1871-01-18` `harita:"almanya"` | `denetim/UYGULA-PRUSYA-0903.json` — TDV `prusya` gövdesi okundu |
| 1.2 | 95 Afrika künyesi | 🟢 EKLE | `denetim/BULGU-AFRIKA-0903-kunye.json` · 81 bloke anahtarının 81'i karşılandı |
| 1.3 | `kanada` | 🟢 EKLE · `f:1867-07-01` `t:1923-10-29` | dominyon ilkesi · BNA Act |
| 1.4 | `ingiliz-kuzey-amerika` | 🟢 `t:` → `1867-07-01` | aynı |
| 1.5 | `yeni-zelanda` | 🟢 `f:` → `1907-09-26` | NZ History (resmî) · dominyon proklamasyonu |
| 1.6 | K. Amerika yerli kimlikleri | ⏳ KAMERIKA'nın listesi bekleniyor | tanecik: halk/konfederasyon |
| 1.7 | G. Amerika 37 halk | 🟡 hepsi künye DEĞİL | GAMERIKA ölçütü: teritoryal yapı + datable bitiş |
| 1.8 | `kongre-polonyasi` | 🟢 `tur:"kralik"` → `"krallik"` | yazım hatası, bugün ben yazdım |
| 1.9 | `tur:` sözlüğü | 🟡 `koloni` + `dominyon` eklensin, 14 künye taşınsın | ÖNCELİK DÜŞÜK — motor `tur:`i okumuyor, dizin işi |

🔴 **1.1-1.5 için ortak şart:** her yeni `f`/`t` bir **kırılma günü**
doğurur ⇒ `Değişmez 2` maddesi ister. Künyeyi yazıp maddeyi yazmamak,
denetimi kırar.

---

# ② RENK PARTİSİ — `arac/renkler.py`

```
1.2'nin 95 künyesi          → 95 renk
1.6'nın K.Amerika kimlikleri → ? (liste gelince)
```
⚠️ **Büyük parti — `§11` üç uyarı veriyor:**
```
① SIRA BAĞLAR      tek geçişte "çözülemedi" çıkan İKİNCİ GEÇİŞTE çözülür
                   (ölçülmüş emsal: 20 → 7, bildirilenin 13'ü yapısal DEĞİLDİ)
② ENGEL KÜMESİ     ELLE YAZILMAZ — `R.engel_kumesi()`e sorulur
                   (bugün elle yazdım ve dört ihlal doğdu)
③ VERİSİ OLMAYAN ADAY  künyesi örtüşüyor + aynı bölgedeyse ENGEL SAYILIR
                       (kuba↔lunda: ölçülemeyen aday "sorunsuz" sayılmıştı)
```
🔴 Ve **26 künye bugün renksiz** (M-2395) — veride kullanılmadıkları
için kusur değil, ama zincirler onları kullanacak:
```
cezayir-ocagi · tunus-ocagi · trablusgarp-ocagi · cezayir-fransiz ·
mogol-imparatorlugu · song · jin-hanedani · erdel · bohemya · kuveyt ·
dubrovnik · hersek · zeta · kasim · naksa-dukaligi · mora-despotlugu ·
polonya-erken · sarki-rumeli · garbi-trakya · girit-devleti ·
oniki-ada-italyan · kibris-ingiliz · bosna-isgal · fransiz-misir-seferi ·
avusturya-cumhuriyet · tbmm-turkiye
```

---

# ③ NOKTA PARTİSİ — yeni `data/yerlesimler_*.js`

| oturum | dosya | ad alanı | durum |
|---|---|---|---|
| KAMERIKA | `yerlesimler_kamerika.js` | `YERLESIMLER_KAMERIKA` | 377 aday · kimlik bekliyor |
| GAMERIKA | `yerlesimler_gamerika.js` | `YERLESIMLER_GAMERIKA` | 🟢 45+18 aday · üç kapı TEMİZ |
| AFRIKA | `yerlesimler_afrika2.js` | `YERLESIMLER_AFRIKA2` | 178 zincirli + 35 K.Afrika + 9 çöl |
| OKYANUSYA | `yerlesimler_okyanusya.js` | `YERLESIMLER_OKYANUSYA` | 20 zincirli / 64 zincirsiz |
| SIBIRYA | `yerlesimler_sibirya2.js` | `YERLESIMLER_SIBIRYA2` | 80 aday · 16'sı 1923 sonrası DÜŞTÜ |

🔴 **Her dosya İKİ yere bağlanır, yoksa HİÇ OKUNMAZ ve denetim TEMİZ der:**
```
arac/girdi.py   GIRDI_DOSYALARI
index.html      <script src=…> satırı
```
⚠️ Bağlandığı gün **o veriye bakan bütün ölçüm aletlerinin tabanı
yeniden doğrulanır** (`§11`: üç oturum aynı gün sahte mükerrer üretti).

---

# ④ VERİ DÜZELTMELERİ — ölçüldü, uygulanmadı

| kalem | dosya | ne |
|---|---|---|
| 4.1 Wellington | `yerlesimler_ek30.js` | zincir 1907 modeline bölünür · **15 gün beyan** (`1840-01-22`→`1840-02-06`) |
| 4.2 Auckland · Christchurch | `yerlesimler_ek30.js` | zincir 1907'de bölünür |
| 4.3 Java hayaletleri | `yerlesimler_asya.js` · `_gdasya.js` | `majapahit` 5 nokta (dönem künyeden 1 yıl önce) · `singhasari` 4 nokta (**51 yıl** taşma) |
| 4.4 Rub'ul Hâlî dolgusu | ? | `18.80/52.30` · `20.00/52.00` — Bardaî/Abalessa inince **ya kaldırılır ya cinsi güncellenir** |
| 4.5 Königsberg | `yerlesimler_avrupa.js`? | **642 yıl tek `almanya` dilimi.** 1525-1657 Lehistan tâbiiyeti · 1657 Wehlau · 1701 Prusya |
| 4.6 Poznan · Gdansk | ? | 1793'ten `almanya` — Güney/Batı Prusya hiç Kutsal Roma olmadı |
| 4.7 Torun · Elbing | yeni | **atlasta YOK** (normalleştiricili arama, 0 sonuç) |
| 4.8 Dikva (Dikeo) | `yerlesimler_ok107.js` | `rabih` künyesinin **tek taşıyıcısı**. `kanem-bornu` dönemi üçe bölünür: `1281→1893 kanem-bornu` · `1893→1900 rabih` · `1900→1902 kanem-bornu`. ⚠️ Bitiş günü **kaynaklanacak** (Râbih Kusseri'de öldü) — yuvarlak yazma |
| 4.9 `Roma` | OKYANUSYA JSON'u | Queensland kasabası, atlastaki **Roma (İtalya)** ile ad çakışması · ~15 000 km · `girdi.yukle` **ValueError atar ve motoru hiç başlatmaz**. Doğrusu `Roma (Queensland)` |

🔴 4.5-4.7 PRUSYA-0903'ün bulgusu ve **Senaryo A onları ÇÖZMÜYOR** —
ayrı bir tur işi, her kırılma günü `Değişmez 2` maddesi ister.

---

# ⑤ ARAÇ BORÇLARI — `arac/`, koşu bitmeden dokunulmaz

| kalem | dosya | ne |
|---|---|---|
| 5.1 | `denetle.py:262-268` | yorum hâlâ `neden:"devletsiz"` diyor; cins **`bos:`**a yazılır |
| 5.2 | `uret_petek.py` | `girdi dosyaları SERBEST` satırı **YANILTICI** — koşuyu öldürmez ama çıktıyı bayatlatır. Bu satır 2 Eylül'de 10,5 saat kaybettirdi |
| 5.3 | `uret_petek.py:4354` | `kesilen … km²` → `km²·dönem (AYRIK ALAN DEĞİLDİR)` — *(2192eab ile yapıldı, doğrula)* |
| 5.4 | `veri-kaynak/motor_kara.geojson` | adı yanıltıcı: motorun ÇİZDİĞİ kara, NE maskesi değil. `motor_cizdigi_kara.geojson` olmalı — dört aracı bağlar |
| 5.5 | `kimlik_sina.py` | scratchpad'de; `arac/` altına alınsın (üç kapı + üç haneli yıl düzeltmesi içinde) |

---

# ⑤a 🔴 TABAN DENETİMİ — uygulama ÖNCESİ, 3 Eylül 14:25
`denetle.py` koşturuldu. **Uygulamadan sonra bu sayılara karşı
karşılaştırılacak** — yoksa neyin değiştiği söylenemez.
```
2731 yerleşim · 1303 kronoloji maddesi
1   ✓ 219 sahipsiz (beklenen 219)      1b ✓ beyansız boşluk 0 · beyanlı 5/5
1c  ✓ belgesiz 7 (tavan 7)             2  ✓ 536 kırılma · 0 açık
2s  ✓ 1029 kırılma · 79 AÇIK (t.121)   2i ✓ 26 · 3 açık (tavan 3)
2t  ✓ kırılmasız madde 16 (tavan 42)   4  ✓ 8 hayalet (beklenen 8)
4c  ✓ 280 (beklenen 280)               4d ✓ 432 (beklenen 468)
4s  ✓ 137 (beklenen 143)               5  ✓ 0 çelişki
3z  · zamansız 452 · zamanlı 445 · gerçek `kd:` 192
savaş senkronu i 163/171 · 8 açık (kuşatma başı↔sonuç kayması)
```
🔴 **TEK İHLAL — ve bugün doğdu, benim elimden:**
```
Ek denetim ✗ konum: 1 nokta kara maskesinin DIŞINDA (beklenen 0)
   "Issık Göl havzası" 42.4000/77.2000 — 25,76 km dışarıda
   dosya: yerlesimler_ortaasya3.js  (bu sabah BEN bağladım)
   SEKİZ dönemlik tam zincir taşıyor: cagatay → mogulistan → cungar
   → kazak-hanligi → hokand → rusya → geçici → sovyet
   reçete SINANMIŞ: lat:42.1718  lon:77.2414
```
⇒ Maske dışındaki nokta **hiç toprak sahibi olamaz**: sekiz dönemin
sekizi de boyanmaz ve Issık Göl havzası komşulara emilir (`§2`).
🟡 **Koşu 4'te düzelir** — PID 1268 onu maske dışı okudu; bu **kabul
edilmiş bir borçtur** ve kaydı burasıdır (`§11`: *gecikme kayıtsızsa
kusurdan ayırt edilemez*).
📌 **Ders `§11`de zaten yazılıymış:** *"bir dosya bağlandığı gün, o
veriye bakan BÜTÜN ölçüm aletlerinin tabanı yeniden doğrulanır."* Üç
dosyayı bağladım ve `denetle.py`yi koşturmadım; ihlal **beş saat
sonra** çıktı.

---

# ⑤b 🔴 ÖLÇÜLMÜŞ BORÇ — ömür kapısı, 1374 dönem
`denetim/BULGU-OMUR-KAPISI-0903.md` · araç
`denetim/ARAC-OMUR-KAPISI-0903.py`
```
`s:` dönemi 10 327 · künye ömrünün DIŞINDA 1374 (%13,3) · 112 kimlik
en kalabalık: zend 132 · musa-celebi 78 · isa-celebi 56 · mehdi 51
```
⏸️ **KOL AÇILMADI** — `ONCELIK.md` çöl seyyahı: dünya yerleşim programı
bitmeden gözden geçirme turu başlamaz.
🔴 **Ve hepsi hayalet DEĞİL** — en az üç cins var, ayrımı **ölçülmedi**:
çatı kimlik/dar künye (`lehistan` · `iran` · `sardinya`) · ardıl devam
etti (`meysur` · `maratha` · `romanya`) · gerçek hayalet (`singhasari`
51 yıl · `artuklu` 56 · `sirbistan` 53).
⚠️ Kol açılırsa **iki ucu da ölç** (`§3.5.1`): künyeyi genişletmek
hayaleti meşrulaştırabilir, dönemi daraltmak **boşluk açar** ve komşusu
emer.
🟢 **Taban 1374.** Sonraki ölçüm üstüne çıkarsa yeni hayalet doğmuş,
altına inerse borç ödenmiş.

---

# ⑥ SIRA — bağımlılık zinciri
```
① künye  →  ② renk  →  ③ nokta  →  koşu 4
   ↑                        ↑
   1.6 KAMERIKA listesi    zincirler kimliksiz inemez
```
🔴 **Sıra atlanamaz** (`§6`): kimliği olmayan nokta petek üretir ama
boyanmaz; rengi olmayan kimlik harita deliği açar.
🟢 Ama ① ve ② **aynı gün** yapılabilir, ③ de. **KOŞU aynı gün
yapılamaz** (~10,5 saat).

## Her adımdan sonra
```bash
py arac/denetle.py         # altı değişmez
py arac/renk_olc.py        # 🔴 VERİ DEĞİŞTİYSE ŞART — palet verinin fonksiyonudur
py arac/durum_tablosu.py --yaz
```
