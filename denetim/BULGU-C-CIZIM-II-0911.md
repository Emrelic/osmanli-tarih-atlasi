# C ÇİZİM II — geniş kutu sınaması

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (C ÇİZİM II, aynı oturum: C ÇİZİM KATMANI)
Önceki iş: `denetim/BULGU-C-CIZIM-0911.md` (dar kutu, kenar dikişi bulundu).

---

## ① GENİŞ KUTU DİKİŞİ GERÇEKTEN GİDERİYOR — göz testi

```
DAR kutu   {lat:40.5-42.0, lon:25.8-29.3}
GENİŞ kutu {lat:40.3-42.3, lon:25.4-28.6}  (Ege + Karadeniz kıyısına doğru)
```

Aynı ekran konumunda (`[26.3, 42.05]`, z8.3) iki ekran görüntüsü alındı:

- **DAR:** Osmanlı (kırmızı) üçgeni kutunun `lat_max=42.0` sınırında
  DÜMDÜZ bir kenarla kesiliyor; hemen üstünde gerçek A/B'nin (yeşil,
  Bulgaristan) düzensiz doğal sınırı devam ediyor — **görünür dikiş.**
- **GENİŞ:** aynı konumda üçgen artık kutunun İÇİNDE kalan bir alanda
  bitmiyor — kesim görünüm alanının dışına, Karadeniz kıyısına doğru
  kaymış. **Dikiş bu görünümden KAYBOLDU.**

⇒ Koordinatörün beklentisi doğrulandı: kapsama kutusu doğal sınıra
kadar genişletilince dikiş ekranda görünmez oluyor — çünkü dikiş
GERÇEKTEN kayboldu değil, artık **denizin içinde ya da çekişmesiz
bölgede**, kullanıcının bakacağı bir yerde değil.

---

## ② 🔴 YENİ KUSUR BULUNDU — geniş kutu Marmara'yı geçip ANADOLU'YA taşıyor

```
DAR kutu içinde nokta sayısı:   42
GENİŞ kutu içinde nokta sayısı: 40  (net azaldı — lon_max daraltıldı,
                                     İstanbul'u dışarıda tutmak için)
GENİŞ kutuya YENİ giren 6 nokta: Gelibolu, Gümülcine, Erdek, Elhova
                                  (Elhovo), Ahtapolu (Ahtopol), Karabiga
```

🔴 **Bunların İKİSİ ANADOLU'DA:**
```
Erdek     lat:40.399, lon:27.795  — Marmara'nın GÜNEY (Anadolu) kıyısı,
                                     Kapıdağ Yarımadası, Balıkesir
Karabiga  lat:40.410, lon:27.300  — Marmara'nın GÜNEY (Anadolu) kıyısı,
                                     Çanakkale
```
Doğrudan test edildi (nokta-içinde-poligon): **ikisi de** `_cKayitGeometrisi`nin
ürettiği `taraf_a` (Osmanlı) poligonunun İÇİNDE. Midye-Enez Avrupa
yakasına (Trakya) ait bir antlaşma — Anadolu'nun bu antlaşmayla HİÇ
ilgisi yok.

⚠️ **BUGÜN GÖRÜNMÜYOR ama YAPISAL bir ihlal:** Erdek/Karabiga zaten
Osmanlı toprağı olduğu için `taraf_a` rengiyle (aynı Osmanlı kırmızısı)
boyanmaları GÖZLE fark edilmiyor — renk çakışması TESADÜFEN kusuru
gizliyor. Ama mekanizma bu noktaların sahipliğini **yanlış gerekçeyle**
(bir Trakya antlaşmasının tarafı olarak) belirliyor; taraflardan biri
gelecekte farklı bir renk taşısaydı (örn. bu aynı kutu şekli başka bir
antlaşma için yeniden kullanılsaydı) hata GÖRÜNÜR olurdu.

📌 **Dengeyi ölçmek istenmişti — işte ölçüm:** dar kutu 0 yanlış nokta +
1 görünür dikiş taşıyor; geniş kutu 0 görünür dikiş + EN AZ 2 yanlış
kapsanan nokta (coğrafi olarak) taşıyor. **Hiçbiri temiz değil** — ikisi
de kendi türünden bir borç taşıyor, ters yönlerde.

---

## ③ 🟢 POLİGON KAPSAMA — MALİYET SIFIR, node'da doğrulandı

Sorulan soru: *"kapsama alanı bir POLİGON olabilir mi, ekran tarafında
maliyeti ne?"*

**Cevap: EVET, ve maliyet SIFIR — mevcut kod ZATEN poligon-uyumlu.**
`_cDogruylaKes()` (Sutherland–Hodgman) bir DOĞRUYA göre kesme yapıyor;
kestiği şeklin dikdörtgen OLMASI bir varsayım değil, yalnız BUGÜNKÜ
`_cBboxPoligonu(k)` çağrısının ÜRETTİĞİ şeklin dikdörtgen olması. Fonksiyon
kendisi HERHANGİ bir basit poligonu (dışbükey OLMAYAN dahil) kabul eder.

**Node'da (tarayıcı gerekmeden) doğrulandı** — `denetim/ARAC-CCIZIM2-POLIGON-TEST-0911.js`:
8 köşeli, İÇE ÇIKINTILI (Marmara'nın Anadolu kıyısını dışarıda bırakan,
dışbükey OLMAYAN) bir Trakya-benzeri şekil, aynı Enez→Midye hattıyla
kesildi:
```
orijinal poligon alanı:        4,588
iki parçanın toplamı:          4,587  (fark <1e-9 — ALAN KAYBI YOK)
```
⇒ **Bu, ②'deki Anadolu sorununun KÖKTEN çözümüdür:** bir poligon,
Trakya yarımadasının gerçek şeklini (Marmara'nın kuzey/Avrupa kıyısında
durup güney/Anadolu kıyısına HİÇ inmeden) takip edebilir — dikdörtgenin
"ya dar (dikiş var) ya geniş (Anadolu'ya taşar)" ikilemi bir poligonla
YOK OLUR.

**Uygulama maliyeti:** `_cKayitGeometrisi()`'nde tek satır değişir —
`_cBboxPoligonu(k)` çağrısı, `kapsama.tur==="poligon"` ise doğrudan
`kapsama.nokta_dizisi`yi kullanacak şekilde dallandırılır. Şema
(`SEMA-C-0911.md` §8.1) `kapsama.tur:"bbox"` diyor — `"poligon"` seçeneği
şemaya EKLENMELİ (bu benim yetkim dışında, C DOSYA YAZIM'ın işi).

---

## ④ ÖNERİ — üç oturuma (tahtada paylaşılacak)

```
🟢 KISA VADEDE (bugün, veri henüz yoksa): kapsama HÂLÂ bbox olabilir,
   ama yazım kuralı ŞÖYLE olmalı: "bbox'ın bir kenarı bir KITA/YARIMADA
   ayrımını (Marmara gibi) KESİYORSA, o kenar coğrafi mantıkla (kıyı
   şeridine göre) İÇERİ ÇEKİLMELİ" — yani "cömertçe genişlet" kuralına
   bir İSTİSNA: deniz geçişlerinde genişletme SINIRLI olmalı.
🟢 ORTA VADEDE (şema izin verirse): `kapsama.tur:"poligon"` eklensin —
   maliyeti SIFIR, kodu ZATEN var. C DENETİMİ'nin "44 nokta" endişesini
   de büyütmeden (poligon dar tutulabilir, dikdörtgenin İSRAR ettiği
   fazladan alan kapsanmaz) çözer.
```

---

## ⑤ KARDEŞ OTURUMLARLA — tahtadan paylaşıldı

`C DOSYA YAZIM` ve `C DENETİMİ`ye bu üç bulgu (dikiş gitti, Anadolu
riski, poligon SIFIR maliyetli) tahta üzerinden bildirildi — 44 nokta
sayımını C DENETİMİ ile çapraz doğrulamak için kendi kutu sınırlarım
paylaşıldı.
