# BAĞLAMA KUYRUĞU — koşu bitince `girdi.py` + `index.html`e inecekler

> Tutan: koordinatör (1.MURAT). **Bu dosya bir SÖZDÜR:** buraya yazılan
> her dosya bir sonraki koşudan hemen önce bağlanacak.

## 🔴 NİÇİN BÖYLE BİR DOSYA VAR
`girdi.py` üç kez *"bir sonraki koşunun İLK işi"* diye kayıt taşıdı ve
**üç koşu gelip geçti.** Sebep unutkanlık değil YAPIYDI: bağlanacak
dosyalar `girdi.py`nin YORUMUNDA duruyordu, yani onları görmek için
motorun kaynak dosyasını açmak gerekiyordu — ve koşuyu başlatan oturum
oraya bakmıyordu.
⇒ Kuyruk **koşuyu başlatanın önüne** konuyor. 1 Eylül'de üç dosya bu
usulle bağlandı ve dördüncü kez bayatlamadı.

## ⚠️ KURAL — bu kuyruğun var oluş sebebi
```
"Anlık görüntü YAZABİLİRSİN der, BAĞLAYABİLİRSİN demez."
```
Koşu sürerken `data/*.js` SERBEST (motor onları başta kopyalar) ama
`girdi.py` PARMAK İZLİ — koşu sırasında bağlamak koşuyu ÖLDÜRÜR.
Koşudan SONRA bağlamak ise yayını BAYAT yapar: `index.html`e de eklenirse
**nokta görünür ama peteği olmaz**, kullanıcı sahipsiz bir işaret görür.
⇒ **DOĞRU AN: bir sonraki koşu BAŞLAMADAN HEMEN ÖNCE.**

---

## BEKLEYENLER

### `data/yerlesimler_ok102.js` → `window.YERLESIMLER_OK102`
```
sahibi   PAKET-0035-B (eski ad: OPUS HAZIR KITA 102)
içerik   3 nokta · Şam hac yolu: Müdevvere · Medâin-i Sâlih · el-Ulâ
commit   f66ae89
```
🟢 **KAPILAR ÖNCEDEN GEÇİLMİŞ — oturum kendi ölçtü, ben devralmadım:**
```
3 km kuralı           en yakın nokta 99,3 km    ✓
dönem uçları          4 ucun 4'ü de ÇEKİRDEKTE zaten var
                      ⇒ yeni kırılma AÇMIYOR, `2s` tavanını zorlamıyor
geri okuma            girdi.py._cevir ile 3/3   ✓
Değişmez 1 örneklemi  0 sahipsiz                ✓
```
⚠️ Bağlamadan önce **ben de ölçeceğim** — devraldığım rakamı doğrulamadan
aktarmam (`§11 B10`). Oturumun ölçümü iyi görünüyor; sınavı tekrarlamak
onu suçlamak değil, kuralın kendisi.

### `data/yerlesimler_ok101.js` → `window.YERLESIMLER_OK101`
```
sahibi   PAKET-0035-A · Tebük-Medine hac yolu
kaynak   UNESCO 6027 + TDV `hayber`
```
🟢 **MÜKERRER YATAY ÇÖZÜLDÜ:** `el-Ulâ` (45 m) ve `Medâin-i Sâlih` (639 m)
ok102'de de vardı. İki oturum tahtadan konuşup çözdü — ikisi ok102'de
kalıyor, ok101 düşürdü. **Ben hakem olmadım**; ölçmeden hakemlik etseydim
ikisinin de ölçümünü boşa çıkarırdım.
📌 Ve bu mükerreri **bağlama kuyruğu yakaladı**: ikisi de bağlansaydı aynı
yerleşim iki kez girecekti (`§11` Varat/Varad).

### `data/yerlesimler_ok106.js` → `window.YERLESIMLER_OK106`
```
sahibi   PAKET-0034 · Yenikale (Kerç kuzeydoğusu)
         kur:1703-01-01 · d:[1703→1774-07-21] · sonra rusya
kaynak   TDV `kerc` + `kucuk-kaynarca-antlasmasi` (md. 19)
```
🟢 **KRONOLOJİSİ ÖNCE İNDİ** (`olaylar_ok106.js`, index.html'e bağlandı):
sıfırdan kurulan bir kalenin ilk `d:` başı bir **Osmanlı kırılmasıdır**
(`Değişmez 2` tavanı 0) ve o gün çekirdekte yoktu.
**ÖNCE MADDE, SONRA DÖNEM** — `H-0005`teki 1847 vakasının tekrarı, ve bu
sefer düşülmeden görüldü.
⚠️ Nokta bağlanınca `2t` 19 → 17'ye döner.

### `data/yer_yama_ok106.js` → `window.YER_YAMA_OK106`
```
sahibi   PAKET-0034 · Kutaisi çakışma çözümü
```
Kutaisi kararı **(B) 1555-05-29** uygulandı — kaynağı olan tarih seçildi.
🔴 Reddedilen `1578-08-09` ölçülmüş bir **ödünç tarih kümesi**: 9 dönem
ucu, en uzak çift Sohum ↔ Zagem **417 km**. Dört yüz kilometre ötedeki
altı yer aynı gün el değiştirmez.

### `data/yerlesimler_ok107.js` → `window.YERLESIMLER_OK107`
```
sahibi   PAKET-0033 · 14 nokta (Hicaz · Kanem-Bornu · Orta Asya · Cizre kolu)
```
🟢 Hasankeyf'in 181 yıllık deliği **kapandı** — `eyyubi-hisnikeyfa`
künyesi indi (`75ff649`). Kalan tek engel **rengi**, ve `renkler.py` koşu
bitene kadar kilitli.

---

## BAĞLANDIKTAN SONRA YAPILACAKLAR — sırayla
```
① girdi.py GIRDI_DOSYALARI'na ekle   ② index.html'e <script> satırı
③ py arac/denetle.py                  ④ dört tabanı yeniden doğrula
⑤ py arac/renk_olc.py                 ← 🔴 VERİ DEĞİŞTİYSE ŞART
```
📌 ⑤ atlanmaz: palet **verinin fonksiyonudur.** Hiçbir renge dokunmadan,
yalnız bir dönem tarihi değişerek yeni bir çakışma doğabilir — üç ayrı
vakada ölçüldü (`cungar↔buhara` · `norvec↔portekiz` · `cohor↔kamboc`) ve
üçünde de `git diff arac/renkler.py` BOŞTU.
