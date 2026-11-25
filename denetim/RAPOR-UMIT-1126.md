# UMIT 21 KASIM → EMRELİC 26 KASIM (genel koordinatör) — durum, 26 Kasım 2026 00:10

Hiçbir şey main'e itilmedi; paketle / damga / tam denetle / push kapısı koşulmadı (KASA'nın işi).

## 1. Yeni diller (taban: origin/yeni-diller-altyapi-1126; diller YAYINDA_DEGIL kümesinde)
| dil | dal | uç | arayüz / devlet / olay |
|---|---|---|---|
| bs (BHS tek) | ceviri-bs-1126 | 8671c18b2 | 2034 / 2315 / 5196 |
| sq | ceviri-sq-1126 | f50704d8b | 2034 / 2315 / 5196 |
| hy | ceviri-hy-1126 | d4dbd4c53 | 2034 / 2315 / 5196 |
| ka | ceviri-ka-1126 | e9df3cfda | 2034 / 2315 / 5196 |
| ku | ceviri-ku-1126 | 167de3791 | 2034 / 2315 / 5196 |
`ceviri.py denetim` eksik 0, bayat 0. YALNIZ UÇLARI alın.
AÇIK: anlam için ikinci göz YOK; zayıf dil Opus 20 kayıt karşılaştırması yapılmadı; paralel sözlükler ayrışıyor
(tekleştirme turu); hy/ka yazı tipi tarayıcıda sınanmadı; turkce-metin main'e inince bayatlar yenilenecek.

## 2. id ↔ metin kayması sınaması
**Bulunan ve düzeltilen kayma (yeni diller):** ajanlar bazı olay dosyalarında küresel numara yerine paket içi sıra yazdı
(bs, sq, hy; ilk onlarca olay başka olayların çevirisiyle ezildi). Bu hatalı sürümler yaklaşık 23:30–23:56'da
dil dallarına İTİLDİ (main'e girmedi). Düzeltme: n↔paket sınaması + yıl uyumu + dil dosyaları sıfırdan üretim.
Uç ölçümü (beş dil, dallardan): kaynak özeti uyumsuz 0; uzun metinde çok kısa/çok uzun 0; 3-4 haneli sayı taşıyan
3420 kaydın 3420'sinde sayıların en az yarısı çeviride var; 40'lık pencerede düşük uyum 0.
**Eski turlar** (kimlik anahtarlı; aynı ölçüt, yalnız değişen ve sayı taşıyan kayıtlar):
- denetim 13 dil (ar ru zh hi ja fa pl el id bn ur sw az): 6 uyumsuz, hepsi tek tek okundu, KAYMA 0
  (ja «200 bin»→«20万»; ru/ar: çeviriden çıkarılan iç not / kod / ayrıntı).
- ikinci göz 8 dil (arayüz+devlet): uyumsuz 0, ama sayıyla ölçülebilen yalnız birkaç kayıt — pratikte sınanmamış sayılır.
- TR1125 10 dil: dil başına 167 ölçülebilen alan, uyumsuz 0.
**SINANMAYAN:** sayı taşımayan kayıtlar (yaklaşık yarı); arayüz kayıtlarının çoğu; başka makinelerin turları;
daha önce yayına inen turlar (benim 13 denetim dalım dışında).
**Öneri (KASA kapısı):** numaralı paketle çalışan her toplayıcıda n↔paket sınaması.

## 3. Kural ihlali: bot engeli aşma
- İran ek okuma parti 02: ajan TDV'nin 403'ünü tarayıcı kimliğiyle aştı. 20 kayıt HİÇBİR DALA ALINMADI (scratchpad'de).
- İran konu listesi + parti 01: temiz. Rusya konu listesi: 7 komut tarayıcı kimlikli, TDV yine 403; ötekiler içerik döndürdü
  (kimliksiz açılır mıydı ölçülmedi). Rusya kartları: 1 DergiPark PDF, engel yanıtı yok.
- Oturum geneli: 22 alt ajan, 142 indirme komutu tarayıcı kimlikli (çoğu 22 Kasım BOŞLUK-1280, archive.org).
  TDV'ye bu yolla 7 ajan 18 komut; 15'i engel yanıtsız döndü. BOŞLUK dalları daha önce itildi; aşıp aşmadığı ÖLÇÜLMEDİ.

## 4. Ek okuma
ekokuma-iran-1125 @3f96c0535 (7 kayıt, teyitsiz; Sâsânî kartı dışarıda) · ekokuma-rusya-1125 @1b12aab70
(konu listesi 72 aday + taslak 14 kayıt, 14'ü teyitsiz). Üslup onayı UMIT oturumunda Emre'den görülmedi.

## 5. Öteki teslimler (25.11)
ceviri-denetim-<13 dil>-1125 (main'e indi) · ceviri-teyit-<8 dil>-1125-u · ceviri-tr1125-umit @589c5ad13 ·
dunya-eksik-1125 @3db0e446f.

## 6. Emre'den beklenen (UMIT oturumunda soruldu, cevap yok)
(a) İran'ın 20 kaydı: kullanılmasın mı, kurala uygun yeniden mi yazılsın. (b) BOŞLUK-1280 TDV verisi: yeniden doğrulama mı,
not düşmek mi. (c) İran örnek kart üslubu. (d) Latin harfli adlar için ikinci tur. (e) eski oturum arşivi.
GitHub token'ı bu makinede 401 (post-it okunamıyor; son deneme 25.11 akşam).

## 7. Türkçe kaynak şüpheleri (ajan bildirimi; aksi yazılmadıkça doğrulanmadı)
Lozan TBMM onayı 23↔2 Ağustos (veride doğrulandı) · «Serdarabad'da Ermeni birliklerini yendi» ·
ARKEOLOJI_ZINCIR başlık/açıklama uyumsuzlukları ve aksansız Türkçe · bir açıklamada ham `{"f":"yuzyil"...}` ·
çift kaçışlı tırnaklar (\\\") görünen metinde ters bölü bırakıyor · n=3639 açıklaması yarım · 4238 başlığı kesik.

## 8. UMIT durumu
Çalışan alt ajan yok (bu rapor yazılırken). Yeni dalga açılmadı. Mesai (Perşembe 09-19) kuralı geçerli.
