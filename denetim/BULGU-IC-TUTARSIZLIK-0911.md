# İÇ TUTARSIZLIK — t: alanı ile maddenin kendi metni çelişiyor mu

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Sınıf tanımı:** DALGA 2 TEYIT'in bulduğu `afgan-durrani` vakası (metin
"20 Mayıs" diyor, `t:` alanına 18 Mayıs — Timur Şah'ın ÖLÜM günü — yazılmış)
bir **DEĞER uyuşmazlığı**: yanlış alan seçilmiş, hassasiyet meselesi DEĞİL
(`ARAC-AY-KODLU-MADDE-0905`'in bulduğu sınıftan farklı — orada `t:` doğru
günü taşıyor ama biçim ayın 1'ine yuvarlanmış görünüyordu).

**Evren düzeltmesi (ölçümden önce, tahtaya bildirildi):** `girdi.py` yalnız
yerleşim dosyalarını okuyor, kronoloji için böyle bir okuyucu yok. Gerçek
üç kaynak:
```
① data/olaylar*.js        — ÇEKİRDEK
② data/kronoloji*.js      — KUYRUK (D124: ayrı kova)
③ devletler.js'in HER KÜNYENİN KENDİ kronoloji dizisi — ÜÇÜNCÜ kaynak,
   emsal vakanın (afgan-durrani) YAŞADIĞI YER tam burası
```
`afgan-durrani 1793-05-18` kaydının kendisi bugün `data/devletler.js`'te
**YOK** — `denetim/HAZIRLIK-DALGA2-0911.json`da bekleyen bir ADAY. D010
sınaması bu yüzden CANLI VERİDE değil, o dosya üzerinde AYRICA (evren dışı,
ikincil doğrulama) yapılacak.

**Yöntem:** her maddenin `b:`/`gun:` metninde geçen "GÜN AY(yıl)" biçimli
Türkçe tarih ifadelerini regex ile çıkarıp `t:`in gün/ay'ıyla karşılaştır.
`t:` günü "01" ise (§4'ün yuvarlama konvansiyonu olabileceği için) AYRI,
YUMUŞAK bir kovaya düşürülür — sert çelişki sayılmaz.

**Tahmin (ölçümden ÖNCE):**
```
Evren (③ üç kaynağın toplamı, kaba tahmin): ~8.000-9.000 madde
Metinde ayrıştırılabilir GÜN+AY ifadesi taşıyan madde: ~%15-25 (1.200-2.200)
Ham gün/ay UYUŞMAZLIĞI (t:'nin günü "01" DEĞİLKEN metin farklı gün diyor):
  10-40 arası
Hicri/miladi karışıklığı şüphesi taşıyanlar (🟡): ham'ın küçük bir kısmı,
  2-8 arası
GERÇEK ÇELİŞKİ (🔴, süzülmüş, afgan-durrani sınıfı): 5-20 arası
```

Bu öngörü ÇÜRÜRSE sebebi raporun sonunda ayrıca yazılacak.

---

## ÖLÇÜM

(Aşağısı ölçümden SONRA doldurulacak.)
