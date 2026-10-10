# SABAH 10 EKİM 2026 — Emre'nin okuyacağı tek belge

Gece boyu beş makine çalıştı. **Senden ÜÇ KARAR bekliyorum**, hepsi ölçülmüş
sayıyla. Altındaki bölümler yalnız dayanak; karar vermek için §1 yeter.

```
koşu 22        HAVVA · taban e54e60df · başlangıç 00:57 · bitiş ~09:30-10:00
commit         bugün 46 · iki günde 91
ders           269
```

---

## §1 ÜÇ KARAR — her biri üç sayıyla

### ① MÖ PENCERESİ NEREDEN AÇILSIN?
```
SÜMER kutusu    🟡 yoğunluk AÇILACAK  26 nokta + 1 dolgu ⇒ p95 111,4 km
                🔴 ama NOKTALARIN HİÇBİRİ `data/`da YOK — ölçüm ÖNERİ üzerinde
ANADOLU kutusu  🔴 atlas noktalarıyla HİÇBİR KESİTTE açılmıyor (455-620 km)
```
🔴 **DÜZELTME (04:3x, kendi hükmümdü): "yoğunluk AÇILDI" diye yazmıştım, YANLIŞ.**
Ölçtüm, KASA'nın bir yan cümlesi üzerine:
```
grep -rl "Uruk|Nippur|Borsippa" data/         → HİÇBİR DOSYA (0)
devletler.js: ahameni·makedon·selefki·part·akkad → 0 · yalnız `sasani` → 1
```
⇒ **Sümer kutusunun ne noktaları ne künyeleri `data/`da. Hepsi `denetim/`
altında ÖLÇÜLMÜŞ ÖNERİ.** p95 111,4 geçerli bir ölçüm ama **inmemiş bir küme
üzerinde**; kapı AÇIK değil **AÇILACAK**. Ve bu, %83'lük sahiplik boşluğunu da
açıklıyor — künye yoksa sahiplik elbette boş; o rakamın "%63,3'ü künye var"
kısmı **ŞÜPHELİ** ilan edildi (hangi künye kümesinde ölçüldüğü yeniden
sorulacak; yeni sayı UYDURULMADI, eskisi sağlam sayılmadı).

**⇒ O HÂLDE SORU DEĞİŞİYOR:** *"Sümer'i genişletelim mi"* değil,
**"ölçülmüş Sümer PAKETİNİ indirelim mi?"**
```
26 nokta  +  7 künye (ahameni·makedon·selefki·karakene·part·elymais·sasani)
          + 15 sahiplik zinciri (MÖ 539 → MS 226)
hepsi HAZIR · hiçbiri İNMEMİŞ · inişi FAZ 2 (koşu 22'den sonra)
```
📌 KASA bu pencerede şehir adlı akademik tanıkla bağlı payı **%7,7 → %38,2**'ye
çıkardı; kalan %61,8 için kaynak (van der Spek 1992) sırada.
**ÖNERİM: Sümer'den aç, ve ilk dilim MÖ 539 → MS 226.** Sebebi: 765 yıl, kutunun
en uzun kesintisiz boşluğu, ve sahipliği tek seferde **bir** imparatorluk
(Ahameniş → Selevkos → Part) ⇒ 26 nokta için karar sayısı az, kazanılan yıl çok.
MÖ 3000-539 sonraya: orada şehir devletleri sürekli el değiştiriyor, kayıt başına
karar sayısı on katı. İş KASA'ya verildi (`KASA-SUMER-SAHIPLIK-1010`).
⚠️ Dikkat: künye açmak haritayı BOYAMAZ, yalnız "sahipsiz"i "boş"a çevirir.
Boyama için şehrin künyeye BAĞLANMASI gerekiyor — o da veri işi, koşu sonrası.

### ② ANADOLU MÖ'SÜ — üç seçenek, biri reddedildi
| | seçenek | ölçüm | önerim |
|---|---|---|---|
| (i) | MÖ Anadolu kesitlerini **KAPALI beyan et** | bedeli 0 | ✅ **EVET, hemen** |
| (ii) | **höyük tabanlı ayrı nokta katmanı** | 118 nokta ⇒ SINIR · 498 ⇒ MÖ 500 AÇ | ✅ sonraki faz |
| (iii) | MÖ 500'den başlat | orada da **378 km, KAPALI** | ❌ reddedildi |

🔴 **SEBEBİ TEK CÜMLEDE:** *Atlasın nokta kümesi bir **MODERN/ORTAÇAĞ yerleşim
kümesidir**; MÖ kendi nokta kümesini ister.* Sümer açıldı çünkü oranın noktaları
**höyük** (Girsu, Tutub, Eşnunna); Anadolu açılmadı çünkü oranın noktaları
**modern şehir** (Ankara, Kayseri, Konya). Bu bir yorum değil ölçüm: MÖ
sitelerinin **%95'i** (MÖ 3000) ve MÖ 500'de bile **%89'u** atlasta YOK.

**SENDEN İSTEDİĞİM:** (i)+(ii)'yi onayla. (ii) onaylanırsa tek alt soru kalır:
MÖ 3000-1000 için **SINIR yeter mi**, yoksa AÇ mı istiyorsun? AÇ istersen
Pleiades dışı envanter (TAY vb.) gerekiyor ve onun fiyatı HENÜZ ÖLÇÜLMEDİ —
kararını bekliyor, çünkü SINIR'a razıysan o ölçüm gereksiz.

### ③ `kaynaksız s:` 1841 — BEYAN BORCU MU, YANLIŞLIK TAHMİNİ Mİ?
Bu, gecenin en rahatsız edici ölçümü. Yemen örneklemi:
```
7 kaynaksız nokta · denetlenebilenlerin 4'ü YANLIŞ çıktı
2 kaynaklı nokta  · ikisi de DOĞRU
Taiz: 254 yıl boyunca YANLIŞ SAHİP
```
⇒ `kaynaksız` damgası *"kaynağını yazmadık"* demiyor olabilir; *"muhtemelen
yanlış"* diyor olabilir. 1841 sayısı o zaman bir **beyan borcu** değil bir
**hata tahmini** olur ve önceliği tamamen değişir. Daha geniş örneklem koşuyor
(`DENETIM-OLU-ETIKET-1009`); sonuç gelince sana tek satırla bildirilecek.
**Şimdilik senden karar istemiyorum — bilmen gerekiyor diye yazıyorum.**

---

## §2 KOŞU 22 — ne zaman, ne getiriyor, neyi getirmiyor
```
taban    e54e60df  (Z6 indi: 80 değişim/11 dosya + tavan 181→193 aynı commit'te)
yayın    dal kosu/22 · koordinatör `git checkout kosu/22 -- <dosyalar>` ile alır
```
🔴 **İÇİNDE OLMAYANLAR** (koşu başladıktan sonra hazırlananlar, hepsi diff olarak
bekliyor): SESSIZ-7 v2 · SAHIPLIK-KAPSAM + hüküm listesi · LAB KONUM-ONERI v3
(Van taşıma · Kandehar/Angkor ikame · Pantelerya · Balasagun) · Z5 v4 ·
KRONO-ONCE1281 A+B+C · Timbuktu zinciri · motor partisi (TUZ v3, BOYA v2…).
⚠️ Bunların hiçbiri koşu 22'de **görünmeyecek** — iniş sırası
`KAMPANYA-SUMER-2000.md §10`da yazılı.

**Rapordan adıyla istediğim dört satır:** 8a Hanak KAYBOLDU/KALDI · Tehuantepec ·
Kıbrıs 1000-1192 · 1000-1280 görüntüsü.
**Çıkış 1 gelir ve tek ihlal `8a` ise: YAYIN DURUR**, kararı ben veririm.

---

## §3 GECE NE ÜRETTİ — başlıklarla (ayrıntı belgelerde)
- **`CLAUDE.md`** üç yeni bölüm: `§5` çıktı yüzü (yayınlanan harita dosyası
  `devlet_harita_ust.js`, `devletler_harita.js` DEĞİL) · `§4` hicrî yıl tuzağı
  (`YYYY-01-01` kaynağın söylediği hicrî yılın DIŞINA düşüyor) · `§11`
  **çağıranı olmayan kapı, kapı değildir**.
- **`HUKUM-KASA-1010.md`** tanık kuralı artık **beş katman**: `§6.1` tanığın
  hatası · `§9.4` çözünürlüğü · `§6.2` gösterdiği nesne · `§6.3` zamana
  bağlılığı · 🆕 `§6.4` **kaydın kendi `tur:`/`ad:` alanı birinci tanıktır**.
- **`MIMARI.md §5.1b`** TAVO hükmü: `provenance: TAVO Index` etiketi `kur:`
  kaynağı SAYILMAZ (etiketler antik addan değil MODERN ad girdisinden geliyordu).
- **`D269` kanal da bir alettir** — bir aracın çıktısı, onu taşıyan kanalın
  kusuruyla birlikte okunur (altı ölçülmüş vaka).

## §4 SENİ BEKLEMEYEN, SÜREN İŞLER
```
UMIT   SAHIPLIK-KAPSAM + hüküm listesi · SESSIZ-7 v2 · Z5 v4
KASA   SUMER-SAHIPLIK-1010 (yeni)
LAB    KONUM-ONERI v3 · 42 ADA noktası mekanik taraması
kıta   NOKTA-ONCE1281 (üç dal) · KAYNAKSIZ-ORNEKLEM · HARITA-DIL-OLCUM
HAVVA  koşu 22
```
⚠️ EMRELIC'te **canlı bekçi 0** — 7 Ekim'deki `KOSU` darboğaz ilanı (token
gerekçesi) bekçi kurulmasını yasaklıyor, bu yüzden buradaki oturumlara görev
`send_message` ile gidiyor. İlanı yalnız sen kaldırabilirsin; **kaldırmanı
istemiyorum**, gerekçesi hâlâ geçerli.

## §5 🆕 KOŞU NİÇİN 7-8 SAAT SÜRÜYOR — ölçüldü, ve ÖNCÜLÜM ÇÜRÜDÜ

03:55'te "bölünme devlet SAYISINA göre yapılıyor" diye okudum. HAVVA kodu açtı:
**yanlış.** Bölme `uret_petek.py:7002-7009`da **LPT ile AĞIRLIĞA göre** yapılıyor
(en ağır devlet en hafif kovaya); gördüğüm 235/236 eşitliği, ağırlık
eşitlemesinin **yan ürünü.** Üç kovanın üçü de "yük payı %33" basıyor.

🔴 **AMA KUSUR BAŞKA YERDE, VE DAHA İLGİNÇ:**
```
kova 2 (işçi 2)  236 devlet                      ≈  10 dk
kova 0 (ana)     payı + Rusya (301 gün)          ≈  76 dk
kova 1 (işçi 1)  payı + İngiltere TEK BAŞINA     ≈ 115 dk
                 ⇒ aynı %33 ağırlık için ~11× AYRIŞMA
```
Sebep: ağırlık vekili (hücre-birleşimi, kodun kendi notu **R²=0,96**)
İngiltere'nin gerçek maliyetini **büyük ölçüde küçük tahmin ediyor** — İngiltere'de
geç günler pahalı (sömürge gövdesi büyüdükçe gün başına süre artıyor: nabız başına
18 gün → 7-9 gün).

> 🔴 **ÇIKAN KURAL: ortalamada doğrulanmış bir vekil, UÇ DEĞER için doğrulanmış
> DEĞİLDİR — ve paralel bir işte çalışma süresini uç değer belirler.**
> `R²=0,96` kuyruk hakkında hiçbir şey söylemiyor, ve kuyruk burada %100'ü.

**KALDIRAÇ — ölçülmüş üst sınır, benim iddiamın çok altında:**
```
ağırlık yamasıyla      ≤ ~15 dk  (aşamanın %13'ü, KOŞUNUN ~%3'ü)
                       çünkü tek devlet BÖLÜNEMEZ: İngiltere yalnız ~100 dk
devlet İÇİ gün bölmeyle ~45-50 dk (koşunun ~%9'u)
```
⚠️ Yani *"bir gecelik koşu bir öğleden sonrasına iner"* cümlem **ÇIKMADI.**
Kuyruğun büyük kısmı bu aşamada değil: dönemler (KOŞU 21'de 2s11dk) ve ufuk
bantları (57 dk) bu ölçümün DIŞINDA. Yama yine değerli ama **%3-9 bandında**,
ve motor partisinde iner (tuz, koşu sürerken dokunulmaz).
📌 Ucuz ikinci kalem duruyor: işçi bitişinde log **açık bir satır basmıyor** —
bugün bir işçi sessizce ölse, bitmiş işçiden ayırt edilemez.
⚠️ Kesinlik: süreler 5 dk'lık nabızlardan (±5 dk), devlet başına süre logda YOK,
İngiltere'nin bitişi tahmin. Kesin sayı İngiltere bitince.

⚠️ **Düzeltme (§2'ye): LAB'ın `KONUM-ONERI v3`ünden Balasagun ÇIKARILDI.**
Taşıma kararı TDV'den sağlam ama 6,02 km'lik yeni koordinat **tek tanıklı**
(TGN) ⇒ ikinci tanık bulunana kadar kayıt yerinde kalır, çelişki yalnız `not:`
alanına beyan edilir. Kalan 9 taşıma + ikame onaylı.
Ölçüldü (LAB): Pleiades tam dökümünde ve al-Ṯurayyā'da **Ak-Beşim/Suyab kaydı
YOK** (10 anahtar denendi; Pleiades 884869 "Balasagan" Kafkas Balasakan'ı,
ilgisiz). ⇒ `ÖLÇÜLEMEDİ` beyanı, "yok" değil.

### §5.1 BENİM AÇIK KALEMLERİM (koşu sonrası, kimseyi bekletmiyor)
- Karantina listesine şerh: `yer_yama_1923_1945.js` çıkmadan önce Kandehar +
  Angkor kayıtları **adıyla** kontrol edilir (LAB'ın önerisi v3 raporunda).
- `VERI-YAPISI.md` alan tablosuna `not:` eklenmesi — veride yerleşik (18 + 44
  kayıt), tabloda YOK. Yeni alan icat edilmedi, tablo eksik.
- Balasagun taşıması park: `-v3-balasagun-tasima-BEKLER.diff`, ikinci koordinat
  tanığı bulunursa iner.

📌 **VE BU BÖLÜM BİR DESENİN BEŞİNCİ VAKASI:** bu gece beş kez bir işçinin
ölçümü benim hükmümü düzeltti, ve beşinde de ölçüm kabul edildi. Bir koordinatör
olarak ürettiğim en pahalı şey hüküm değil, **ölçülmeden verilmiş hüküm.**
