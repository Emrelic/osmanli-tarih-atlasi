# KASA-OZ-ILAN-ONGORU-1010 — ÖZ-İLAN taramasının ÖNGÖRÜSÜ (ölçüm UMIT'te; bu dosya YALNIZ öngörü)

Görev: YILDIRIM BAYEZIT (KAYNAK-SAHIP kararı ①) · Öngören: KASA · 2026-10-10.
**Mühür beyanı:** bu dosya yazılırken `makine/umit` ve d50ddbedd sonrasındaki `main` OKUNMADI. Benim son `main`
görüşüm d50ddbedd (`C:\atlas-kasa-wt`, fetch edilmedi). Güvence bu commit'in zaman damgası.
Elimdeki tek veri: KAYNAK-SAHIP §1.2'de elle okuduğum 60 not (Y 40 + Kk 20, uzun ve tanıklı dilimlerden seçilmiş;
temsilî DEĞİL) ve gece boyu okuduğum notlar.

## 0. Varsayımlar (UMIT'in tanımlarını görmedim — kendi okumam)
- **Evren:** dönemin kendi `kaynak:` notu taşıyan `s:` dilimleri (~1.225 tanıklı + `bulunamadı`'lılar). UMIT kayıt
  düzeyi `neden:`/yorum satırlarını ya da `d:`/`v:`/`isg:` notlarını da tararsa adetler büyür. ⇒ adetleri **evren
  ~1.250 not** için veriyorum, yanına PAY olarak da yazıyorum; evren farklıysa pay kıyaslanmalı.
- **Sınıf sayısı:** mesaj "beş sınıf" diyor ama dördünü sayıyor. Beşincisini **HİÇBİRİ** (ne öz-ilan ne dönem-içi
  yıl) sayıyorum ve onu da öngörüyorum.
- **Sınıf anlamları (benim okumam):**
  - `ENGEL-KALKMIS`: not, düzeltmenin neden yapılmadığını bir ENGELLE açıklıyor ("künyesi YOK", "kaynak 401",
    "taranmadı") ve engel bugün kalkmış (künye artık var vb.).
  - `OZ-ILAN-ISABET`: not KENDİ diliminin sahibini/aralığını/kimliğini yanlış ya da yazılmamış ilan ediyor (Malta tipi).
  - `OZ-ILAN-OLCULEMEDI`: ilan işareti var, ama kendi dilimi mi komşu dilim mi belirsiz.
  - `YALNIZ-A`: notta dilimin İÇİNE (uçlara değil) düşen bir yıl var, öz-ilan yok (Rakka 1371, Mardin 1185/1220/1260
    tipi — gövdeye dair tarihli bir şey söylüyor ama ilan etmiyor).

## 1. Adet öngörüleri (evren ~1.250 not)
Elle okuduğum 60 notta öz-ilan işareti taşıyan ~20 not vardı (Malta, Hama, Königsberg, Mljet, Çehrin, Akçakale,
Karakoyunlu ×5 "BÖLGE CÜMLESİ", ZAMAN-Z6 "kaynaksız gün" ×6, Lifau "ÇELİŞKİ", St. Louis "DOĞRULANMADI", Tanca ve
Tekirdağ "YAZILMADI" …). Ama bu 60 uzun dilimlerden seçildi; uzun dilimde not daha uzun ve daha çok şerhli. Evrene
taşırken yarıya indiriyorum.
| sınıf | adet | pay | gerekçe |
|---|---|---|---|
| `OZ-ILAN-ISABET` | **35 (aralık 15-70)** | %3 (1-6) | 60'ta 4 kesin (Malta, Hama, Mljet, Çehrin) ⇒ %7; temsilîlik indirimiyle ~%3 |
| `OZ-ILAN-OLCULEMEDI` | **80 (aralık 35-160)** | %6 (3-13) | "YAZILMADI/kopuk" notlarının çoğu KOMŞU aralık hakkında (Tanca 1269-73, Tekirdağ 1261-75, Königsberg önceki dilim) ⇒ mekanik tarama kendi/komşu ayrımını çoğunlukla yapamaz; ISABET'ten ~2 kat |
| `ENGEL-KALKMIS` | **8 (aralık 2-25)** | %0,6 | engel + bugün kalkmış ikilisi nadir; "künyesi YOK" tipinden bu gece 1 (Königsberg) gördüm, künye açılışları ayda onlarca ⇒ birkaç tane daha |
| `YALNIZ-A` | **220 (aralık 120-350)** | %18 (10-28) | GOVDE-TANIK C2'de İKİ UÇ 338 + BAŞ 430 + SON 185; bunların bir kısmı iç yıl da taşıyor; ZAMAN-Z6 notları çoğunlukla yalnız uç yılı ⇒ iç yıl taşıyan ~%15-25 |
| `HİÇBİRİ` (5.) | **kalan ≈ 900 (aralık 750-1.050)** | %72 | |
- **Toplam öz-ilan (ISABET + OLCULEMEDI + ENGEL):** ~125 (aralık 60-230).
- **Oran ilişkisi:** OLCULEMEDI > ISABET (%80 güven). ENGEL en küçük sınıf (%75).
- **Bölge:** ISABET'in yarıdan fazlası Akdeniz/Balkan/Kafkas (EPOK-SAHIP, EEK-BALKAN, ZAMAN-Z6 paketlerinin
  notları) (%65).

## 2. Elle bulduğum beşin MEKANİK taramada yakalanması (yöntemimin sınavı)
| nokta | notun işareti | öngörüm | sınıf öngörüsü |
|---|---|---|---|
| Malta `napoli` | "napoli YANLIŞ, kapsam dışı, yazılmadı" | **YAKALANIR** (%95) | ISABET (%80) |
| Hama `memluk` | "kapsam DIŞI, yazılmadı" (1310-42 iç aralık) | **YAKALANIR** (%85) | ISABET (%55) · OLCULEMEDI (%45): ilan kendi diliminin İÇİ hakkında ama `v:`/`d:` ayrımı yok |
| Königsberg | `prusya-dukaligi` notu, ÖNCEKİ `almanya` dilimini ilan ediyor: "künyesi YOK, dokunulmadı" | **YAKALANIR** (%70) | ENGEL-KALKMIS (%50: künye artık var) · OLCULEMEDI (%35: komşu dilim) · ISABET (%15) |
| Mljet `macaristan` | "1358-1410 ÇIKARIMDIR … BULUNAMADI" | yakalanır (%60) — "ÇIKARIM" sözlükte mi bilmiyorum | ISABET (%50) · OLCULEMEDI (%50) |
| Çehrin `altinorda` | "14. yy'da yerleşim YOK — nokta bölgeyi temsil eder" | **en zayıf** (%40): VARLIK ilanı, sahiplik kelimesi yok | yakalanırsa ISABET (%60) |
**Beklenen: 5'in 3,5'i yakalanır ⇒ öngörüm 4/5 (aralık 3-5). ISABET'e düşen: 2 (aralık 1-3).**
**En olası kaçak: Çehrin** (varlık ilanı sahiplik sözlüğüne girmez).

## 3. Neyin beni yanlışlar
- ISABET > 70 ⇒ öz-ilan sanılandan yaygın; gece okuduğum notlar hatayı EKSİK örnekliyordu.
- 5'ten ≤ 2 yakalanırsa ⇒ benim elle bulma ölçütüm (anlamsal okuma) ile mekanik işaret listesi farklı şeyleri ölçüyor;
  "öz-ilan" tek bir sınıf değil.
- ENGEL > ISABET ⇒ notlardaki "yapılmadı" gerekçelerinin çoğu engeldi ve engeller kalkmış: bayat-not sınıfı asıl iş.
