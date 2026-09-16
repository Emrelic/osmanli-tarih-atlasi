# A · B · C · D GÖRÜNÜMLERİ — Emre'nin kararı, 16 Eylül 2026 (BAĞLAYICI)

`GORUNUM-ABC-0910.md`nin yerini alır. Oradaki "A = bugünkü motor" tanımı **geçersizdir.**

## A — SÜRTÜNMELİ YÜRÜYÜŞ HARİTASI (motorun TEMELİ)

Her yerleşimden her yöne **5 günlük yürüyüş** bütçesiyle bir yaya çıkar; ulaşabildiği
boş toprağı o yerleşime yazar.

- Düz ovada bütçe ≈ **200 km**'ye yeter.
- Dağ / rampa / sıradağ yürüyüşü yavaşlatır; bütçe dağda tükenebilir (sınır orada biter).
- Nehir bir **geçiş bedeli** öder: küçük dere az, Tuna / Fırat gibi büyük nehir çok —
  bütçenin tamamını yiyebilir (sınır nehirde biter). **Geçit / köprü** noktasında bedel düşüktür.
- Deniz geçilmez.
- **İki yerleşim aynı toprağa uzanıyorsa hangisinin yayası bir noktaya ÖNCE varırsa o nokta onundur**
  (çok kaynaklı Dijkstra, eşit-bedel çizgisi = sınır). Örnek: X'ten 50 km sonra sıradağ, Y dağın
  öbür yanında 200 km ötede → X dağın eteğinde tükenir, Y 150 km gelir; bölge bedele göre bölünür.
  X Tuna kıyısında, Y 200 km öte ama düz ise → Tuna'nın bu yakası Y'nin.
- Hiçbir yayanın 5 günde ulaşamadığı toprak **boş** kalır.

🔴 Bu kural **kara–kara sınırları için de** geçerlidir. Bugünkü motor Dijkstra sonucunu
yalnız düz hat denizi kestiğinde kullanıyor, kara sınırını Voronoi + 200 km tavanla çiziyor —
bu Emre'nin istediği değildir; bir mühendislik ara adımıydı ve KALDIRILACAK.

## B — A'NIN TEMİZLENMİŞ HALİ

A haritası üzerine: boşluk kapatma · enklav birleştirme · koridor doldurma/sığlaştırma ·
iki devlet arasındaki boş araziyi paylaştırma. Amaç delik deşik / benekli görüntüyü kaldırmak.
A ÜRETİLİR, B ondan TÜRETİLİR; ikisi de saklanır, arayüzde **anahtarla** seçilir.

## C — BELGELİ SINIR

Bir bölgede sınır antlaşma/belge ile belirlenmişse o bölgede A ve B **söz konusu edilmez**:
belgede ne yazıyorsa o çizilir. Belge kaba olabilir (Kasr-ı Şirin, Karlofça gibi büyük
bölgelerden söz eden metinler). Bugün `js/c_katman.js` + `data/hukuki_sinirlar.js` ile
harita üstünde katman olarak var.

## D — KESİN KOORDİNATLI SINIR

Her köyün, tepenin, akarsuyun hangi tarafta kaldığının koordinatla belirlendiği ayrıntılı
sınır (sınır komisyonu haritaları, protokoller). Veri ve teknoloji varsa D, C'nin yerini alır.
Durum: **tasarım aşaması** — önce hangi belgelerde bu ayrıntı var, ölçülecek.

## Öncelik (en kaba seviyeden ince seviyeye)

`D > C > B > A` — bir bölgede üst seviye varsa alttakiler o bölgede çizilmez.
