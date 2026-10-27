# MOTOR — KISTAK KÖPRÜSÜ (post-it #80, Aden) · 18 Ekim 2026

Emre onayı: post-it #80, 18 Ekim 2026 17:44 ("a seçeneği"). Yama:
`denetim/MOTOR-KISTAK-KOPRU-1018.diff`. Bayrak: `MOTOR_KISTAK_KOPRU=1`; bayrak yoksa
çıktı değişmez. Bir sonraki TAM İNŞADA uygulanır (`git apply`). Yaka kilidi yamasıyla
birlikte temiz uygulandığı sınandı.

## Kusur (ölçüldü: makine HAVVA, KOŞU 27 çıktısı `C:\atlas-kosu27`, taban db9de100)

- 1538-11-27'de Aden çevresindeki 1,6° × 1,35°'lik kutuda Osmanlı gövdesi 0,0083 derece²
  (yaklaşık 100 km²). Yalnız yarımada Osmanlı.
- Aden'in 10 km kuzeyi (45,02D 12,875K) `yemen` gövdesinde. 12,825-12,85K kuşağı sahipsiz.
- Sebep yürüyüş ızgarası (0,05°). Aden'in hücresi (45,025D 12,775K) kara, ama kuzeydeki
  komşu hücrelerin merkezi denize düşüyor. Çapraz adımları da boğaz yasağı (`_KVSU`)
  kesiyor. Sonuç: Aden'den yasağa uyarak ulaşılan kara hücresi **1**.
- Gerçek maskede (ne_10m_land, tolerans 0,002) Aden anakaraya bağlı, tek parça.
- 1538'de Lahic yok (kur 1728). Ölü tohumun toprağı epok devriyle canlı komşuya,
  Taiz'e (139 km) gitti.

## Kapsam (bütün tohumlar, aynı KARA reçetesi, yamadaki işlevler AST ile çekildi)

- Izgarada hapis tohum: 194 (yerel bileşen ±6 hücrelik kutudan taşamıyor).
  Çoğu küçük ada (Kiklad, Karayip, Pasifik); bunlar hedef bulamaz, değişmez.
- Taşınan: 16 km karadan yürüme şartıyla 39 tohum. Liste ve km değerleri
  aşağıdadır (sınama dökümü).
- 30 km'lik ilk denemede Sakız, Korfu ve İbiza ada içinde 18-20 km kayıyordu; sınır
  16 km'ye indirildi.
- İlk tasarımda "aynı gerçek kara parçası" şartı vardı. Kıta tek parça olduğu için
  bu şart boş çıktı: Kılburun burnu Özi yakasına, liman aşırı taşınıyordu.
  ⇒ İnce ızgarada (0,005° ≈ 0,5 km) **gerçek karadan yürüme** şartına geçildi.
  Kılburun artık kendi burnunda kalıyor (31,625D 46,525K).

## Çare

Hapis tohum, karadan ≤ 16 km yürünerek varılan ve hapis olmayan en yakın kara hücresine
taşınır. Bu, "su hücresine düşen tohum en yakın kara hücresine kaydırılır" kuralının bir
adım ötesidir.

- `_kvtohum` tek sözlük: üretim, iki etiket, epok devri ve saat matrisi tutarlı kalır.
- Eski hücre tohumsuz kalır ⇒ Voronoi sahibi = tohumun kendisi.
- Boğaz yasağı aynen durur.

## Koşudan sonra sınanacak (öngörü)

1. Log satırı `🌉 KISTAK KÖPRÜSÜ: N tohum` — N = 39 beklenir (aynı KARA ve aynı veri
   ile). Farklıysa sebebi yazılır.
2. Aden 1538-11-27: (45,02D 12,95K) Osmanlı olmalı.
3. Değişmez 1 ve 8 gerilememeli.
4. "tohumu kendi hücresinin DIŞINDA kalan" sayısı (KOŞU 27: 26) artarsa listeye bakılır.

## Taşınan 39 tohum (sınama dökümü, KISTAK_YOL_KM=16)

```
Sinop 7,3 km · Özi 2,7 · Limni 6,8 · Aden 12,0 · Masavva 5,5 · Kopenhag 2,8 ·
Kefalonya 15,8 · Cres 11,2 · Brakya 10,5 · Korçula 7,6 · Dahlak 15,4 · Masira 15,8 ·
Sûr 3,5 · Douglas (Man) 15,8 · Lerwick 3,0 · Cádiz 13,2 · Nykøbing 5,1 · Koçin 15,6 ·
Makao 3,6 · Moulmein 3,4 · Ambon 11,5 · Kılburun 10,7 · Montreal 14,9 · Songkhla 10,4 ·
Rote 5,6 · Kimberley iç kesimi 3,9 · Louisiade-Milne 9,4 · Iglulik 2,9 · Aberffraw 4,1 ·
Peel (Man) 5,6 · Castletown (Man) 7,8 · Iona 10,5 · Basse-Terre 6,8 · Çake Çake 5,7 ·
Port Louis 4,9 · Portsmouth (Dominika) 3,2 · Lagos 9,9 · Villa Cisneros 9,7 · Apia 7,0
```
Aden hedefi: 45,025D 12,875K (Şeyh Osman yönü, anakara).

⚠️ Iona maskede Mull ile tek parça görünüyor (tolerans 0,002); taşıma Mull'un üstüne düşer.
Koşudan sonra bakılır.
⚠️ `arac/uret_petek.py` bu yazım sırasında başka oturumun kilidindeydi (oturum-4c287b).
Yama 619d0b743 hâline göre yazıldı. O oturumun değişikliği girerse `git apply --check`
yeniden yapılır.
