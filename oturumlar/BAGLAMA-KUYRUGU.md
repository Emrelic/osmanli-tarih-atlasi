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
