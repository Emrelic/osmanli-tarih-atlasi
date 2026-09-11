# BULGU — C MOTOR YAMASI (11 Eylül 2026)

Öngörü: `denetim/ONGORU-C-MOTOR-YAMASI-0911.json`. Yama:
`denetim/YAMA-C-MOTOR-0911.py` (v1 üzerine YAZILDI, v1 içeriği artık
geçersizdi — commit mesajında açıkça not düşüldü).

🔒 `arac/`/`data/` DONUK — M-3487 doğrulandı, motor SÜRECİ hâlâ
çalışıyordu (nöbetçi erken ötmüştü). Bu görev boyunca hiçbir dosyaya
yazılmadı, yalnız `denetim/` içinde hazırlık yapıldı.

## ① Yama — tam kod, YAMA-C-MOTOR-0911.py'de

6 mekanizmanın (§2 emilme, A1 tavan, B2, B3, yaslama, boşluk-paylaştırma,
çöl tavanı) HİÇBİRİNE tek tek "C alanında mı" şartı enjekte edilmiyor —
hepsi normal çalışıyor, sonucu TEK bir post-hoc "C DEVRALMASI" adımında
(satır ~2453-4581 arası, yeni blok) atılıp yeniden kuruluyor.

## ② `dogal_hatta_yasla` — şarta bağlandı

```
hat.tur == "dogal-taninmayan" → yaslama UYGULANIR
hat.tur == "cetvel"           → yaslama UYGULANMAZ (yapay çizgiyi bozar)
hat.tur == "dogal-taninan"    → C'ye hiç girmez (A/B yeter)
```

## ③ 🅰 vs 🅱 — kıyas SAYIYLA (tam detay yamada)

```
🅰 kutu içi devralma    maliyet KÜÇÜK (saniyenin altı, bu gecenin 2
                        bağımsız ölçümüyle doğrulandı) · risk ÖLÇÜLDÜ
                        (dikiş, C ÇİZİM'in bulgusu) · bugünkü motorla
                        UYUMLU
🅱 hat=petek kenarı     maliyet YÜKSEK (constrained Voronoi shapely'de
                        YOK, global kenar ağını yeniden inşa gerektirir)
                        · risk YÜKSEK (global veri yapısı, dünya
                        çapında yan etki riski) · GÜNLER mertebesi iş
ÖNERİ: 🅰 kısa vadede, 🅱 kayıtlı bir uzun-vadeli hedef. Emre'nin kendi
kararı (kutuyu genişletmek) zaten 🅰'yı dolaylı seçmiş durumda.
```

## ⑥ 🔴 YENİ BULGU — kutu büyümesi (M-3480) Değişmez 1'i de RİSKE SOKUYOR

Önceki turlarda yalnız Değişmez 2s (121 tavan) ve Değişmez 7 (dizinsiz
kimlik) "kesin etkilenir" diye işaretlenmişti — kapsama kutusu küçük
varsayılıyordu. **M-3480 ile kutu doğal sınıra kadar genişleyince**
(Midye-Enez: Ege'den Karadeniz'e) kutunun içine BUGÜN ZATEN VAR olan
onlarca yerleşim giriyor (C ÇİZİM'in kendi ölçümü: bu kutuda **44
gerçek yerleşim** var). Yamanın ön-koşulu (§②, `_fark_km2 > KV_MIN_KM2`
ise C REDDEDİLİR) bunu doğrudan etkiliyor:

```
🔴 Değişmez 1 (sahipsizlik, 315 beklenen) ARTIK RİSK ALTINDA — eğer
   belge (Midye-Enez, yalnız 2 nokta: Enez/Midye) kutunun genişleyen
   kısmındaki 44 yerleşimin ADINI TAŞIMIYORSA, ön-koşul (belge
   coğrafyası kutuyu tam kaplıyor mu) BAŞARISIZ olur ve motor C'yi
   UYGULAMAZ — ama bu, "kutu büyüdükçe C UYGULANMA OLASILIĞI DÜŞER"
   demek, ve bunu kimse şimdiye kadar bu açıklıkla söylemedi.
```

⇒ **Genişleyen kutu ile "C hiç uygulanamaz" riski TERS ORANTILI
değil, AYNI YÖNDE artıyor** — dikişi gizlemek için kutuyu büyütmek,
kaplama borcunu da büyütüyor (M-3480'in kendi §(2)'si zaten bunu
"iki karşıt yönde çeken güç" diye tarif etmişti; bu bulgu onu Değişmez
1'e kadar SOMUTLAŞTIRIYOR).

## Teslim

```
① yama: TAM kod, tek post-hoc devralma noktası (2453-4581 arası)
② dogal_hatta_yasla: hat.tur'a göre şarta bağlandı
③ 🅰/🅱 kıyası: sayıyla, 🅰 önerildi kısa vade için
④ geri dönüş: MOTOR_C_KAPALI=1, değişmedi
⑤ öngörü: kutu büyümesi Değişmez 2s/7'nin YANINDA Değişmez 1'i de
   riske sokuyor — YENİ bulgu, önceki turlarda görülmemişti
```

Karar gerektiren açık sorular: (1) genişleyen kutu + katı ön-koşul
kombinasyonu C'yi PRATİKTE uygulanamaz mı kılıyor — Emre'ye/koordinatöre
taşınmalı; (2) C KAPLAMA ÇÖZÜMÜ'nün kendi ölçümü (istendi, henüz
gelmedi) bu ön-koşulu değiştirebilir.
