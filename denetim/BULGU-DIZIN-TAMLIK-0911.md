# DİZİN TAMLIK — 1281-1923 arası eksik künye taraması

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Taban ölçüm (yalnız sayma, henüz analiz değil):**
- `data/devletler.js` bugün **627 künye** taşıyor — CLAUDE.md §1.5'teki
  "617 künye" rakamı BAYAT (D069: bir hüküm dosyası ölçümün fotoğrafıdır).
- Bölge dağılımı ölçüldü (27+1 bölge): en seyrek — okyanusya 5,
  orta-amerika 5, orta-amerika-karayip 8, iberya 6, kuzey-avrupa 7,
  sibirya-bozkir 9, kafkasya 10.
- `devletler.js` başlığındaki KAPALI SÖZLÜK yorumu 26 bölge sayıyor ama
  veri 27. bölge kullanıyor: `orta-amerika-karayip` sözlükte YOK. Bu ayrı
  bir şema-tutarsızlığı bulgusu, bu görevin ana konusu değil, notu düşülüyor.

**Yöntem (coordinatörün önerdiği ②): ARDIL/SELEF boşluk taraması.**
Her bölge için, o bölgedeki künyelerin `[f,t]` aralıklarını 1281-01-01 —
1923-10-29 penceresine kırp, birleştir (union), ve pencere içinde HİÇBİR
künyenin kapsamadığı zaman dilimlerini (boşlukları) bul. Bu, Değişmez 1'in
(yerleşim sahipsizliği) dizin katmanındaki KARDEŞİ.

**Bilinen ÖNCÜL pozitifler (CLAUDE.md §3.5.0'da zaten belgelenmiş, henüz
`devletler.js`'e YAZILMAMIŞ) — aracımın bunları YAKALAMASI beklenir, D010
gereği bu benim "bilinen pozitif" sınavım:**
```
meysur-racaligi     1799-1923 (Meysur Sultanlığı sonrası)   ölçüldü: YOK
gvalyar/indor/kolhapur  Maratha'nın 1818 sonrası ardılları   ölçüldü: YOK
pejeng (Bali)       1292-1343 Cava/Bali boşluğu             ölçüldü: YOK
```
Aracım bu üçünü/beşini YAKALAMAZSA, aracın kendisi kusurludur — önce
buna bakacağım.

**Öngörülen sayı (ölçümden ÖNCE, tahmin):**
- Ham (mekanik) boşluk sayısı: **YÜKSEK olacak, muhtemelen 150-400
  arası** — çünkü bölge kapsaması ile SİYASİ kapsama AYNI ŞEY DEĞİL:
  bir bölge, kendi künyesi bitince KOMŞU BİR İMPARATORLUĞUN (başka
  bölgeye etiketli, ör. Osmanlı=anadolu ama Balkanlar'ı yönetiyor)
  eline geçebilir — bu GERÇEK bir boşluk değil, YANLIŞ POZİTİF olacak.
  ⇒ `§3.5.0`'ın kendi dersi: ham sayı KÜÇÜMSENMEMELİ ama çoğu
  AÇIKLANABİLİR çıkacak (D157: kategori şişmeyi açıklamaz, toplu neden
  açıklar — burada toplu neden "imparatorluk doğrudan yönetimi").
- GERÇEK (araştırılmaya değer, "muhtemelen eksik künye") aday sayısı,
  ham sayının süzülmesinden sonra: **15-40 arası** tahmin ediyorum.
- Bunların içinden KAYNAKLA DOĞRULANMIŞ, gerçekten eksik olduğu TEYİT
  edilen künye sayısı (zaman kısıtı içinde araştırabildiğim kadarıyla):
  **5-15 arası** tahmin ediyorum — bilinen 5 vaka zaten bu aralıkta.

Bu öngörü ÇÜRÜRSE (D022: çürüyen öngörü tutandan değerlidir), sebebini
raporun sonunda ayrıca yazacağım.

---

## ÖLÇÜM

(Aşağısı ölçümden SONRA doldurulacak.)
