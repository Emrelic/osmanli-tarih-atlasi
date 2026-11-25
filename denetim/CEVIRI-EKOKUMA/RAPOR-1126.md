# Ek okuma çevirisi: boyut, altyapı, model denemesi (CEVIRI-EKOKUMA-1125, 25-26 Kasım 2026)

Dal: `ceviri-ekokuma-1125`. `main`e itilmedi; yayın KASA kapısında ve boyut kararına bağlı.

## 1. Boyut
- Kart: 1.094 · ekranda görünen alan 5.113 · 2.480.243 karakter · 2,73 MB UTF-8 (`kaynak` satırı çevrilmez).
- Ek yük: 22 dil **85,9 MB** (dil oranları mevcut olay çevirilerinden ölçüldü; `ko` oranı varsayım);
  31 dil **124,3 MB** (9 yeni dilin 38,4 MB'ı varsayım oranla).
- Canlı site bugün deponun TAMAMINI yayınlıyor (denetim/ ve arac/ adresten açılıyor): 1.066,6 MB (0,993 GiB).
  Yalnız site dosyaları (`arac/yayin_paketle.py`): 629,9 MB (betik MiB basar: 600,7).
- 31 dil, yeni dillerin öteki metinleri (+33-52 MB) dahil: tüm depo 1.224-1.243 MB · yalnız site 787-806 MB.
- GitHub belgesi (docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits):
  yayınlanan site en çok 1 GB; kaynak depo için 1 GB "recommended". GB/GiB belirtilmiyor.
- **Sonuç: bugünkü yayın kipinde sığmaz; yalnız site dosyaları yayınlanırsa sığar.** Geçişte
  `gizlilik/ yonetim/ supabase/ img/` paket listesinde yok, kontrol edilmeli.

## 2. Altyapı
`ceviri.py --tur ekokuma` · `ceviri_ekokuma_denetle.py` (mekanik) · `ceviri_ekokuma_parti.py` (böl/al).
Çeviri dosyaları açılışta inmez (`CEVIRI_DIZIN.ekokuma`, kartlarla birlikte). Yeni `data/ekokuma*.js`
dosyaları çıkarıcıya kendiliğinden girer (siteye girmeleri için app.js yükleyici listesi ayrıca gerekir).
Tavan tablosu (`BEKLENEN_EKOKUMA_EKSIK`) boş: borç raporlanır, kapıyı durdurmaz.

Tarayıcı (yerel): en · ar (sağdan sola, paragraf imleri doğru) · zh (kısmi örnek: çevrilmeyen alan
Türkçe) · tr (kart çevirisi isteği 0). `reading 'points'` konsol hatası Türkçe kipte de var, incelenmedi.

Açık kalan: ① `kesin` rozeti, kategori üst yazısı, "Kaynak:" etiketi arayüz sözlüğünde yok, Türkçe kalıyor.
② `|ayırt edici` taşıyan kart bağları yabancı dilde tutmuyor (`_ekBagEslesir` hâlâ `o.b`; KASA
`ek-bag-dil-1125` düzeltmesi uzakta görülmedi, o satıra dokunulmadı). ③ Merak kartları, savaş künyesi,
`ANTLASMALAR` özetleri ve kişi kartları ekranda görünür ama `data/ekokuma*` değil: kapsam dışı.

## 3. Model denemesi
Aynı 20 kart (55.105 karakter, uzun anlatı ağırlıklı), en/ar/bn/sw, Sonnet ve Opus alt ajanı
(Agent aracının `model` alanıyla seçildi; efor ayarlanmadı). Hakem: dil başına ayrı Opus ajanı, A/B kör.
Ağırlık: doğruluk 4 · eksiksizlik 2 · dil 3 · ad 1.

| Dil | Sonnet | Opus | Sonnet ağır/hafif | Opus ağır/hafif | kart: S>O / O>S |
|---|---|---|---|---|---|
| en | 9,52 | 9,55 | 0/10 | 1 (sınırda)/7 | 4 / 6 |
| ar | 9,56 | 9,63 | 0/16 | 0/10 | 5 / 9 |
| bn | 9,54 | 9,53 | 0/8 | 0/16 | 8 / 4 |
| sw | 9,53 | 9,50 | 0/14 | 0/12 | 9 / 7 |

Mekanik denetim: 8 teslimin 7'si hatasız; Opus-ar'da 2 "yıl kayıp" bayrağı (1920, 1890).
**Karar: çeviri Sonnet.** Fark ölçüm gürültüsü içinde; ağır hata yok sayılır. Sınır: hakem de bir model
(Opus; kendi ailesine eğilim ihtimali), anadili bir okur bakmadı; yalnız 4 dil sınandı.
Öteki dillerde (hi, ka, hy, ps, jv, ku gibi) kalite ÖLÇÜLMEDİ.

## 4. Maliyet (alt ajan tokenı)
Deneme çevirisi/parti (55K karakter): Sonnet 145-194 bin · Opus 148-204 bin. Hakem 174-234 bin.
Dil başına yaklaşık 45 parti. Haftalık sayaçtaki karşılığı aşağıdaki ilerleme notlarında.
