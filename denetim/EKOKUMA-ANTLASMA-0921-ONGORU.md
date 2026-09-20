# EKOKUMA-ANTLASMA-0921 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazılma anı: 2026-09-21, ölçüm aleti henüz KOŞMADI. Evren: `index.html`in yüklediği
bütün `data/olaylar*.js` + `data/kronoloji*.js` maddeleri; kart evreni
`js/app.js` içindeki `_EKOKUMA_DOSYA_ADLARI`nın okuduğu `data/ekokuma*.js` +
`window.ANTLASMALAR` (`data/savaslar.js`).

## Ölçüt (ölçümden önce ilan)
"Antlaşma maddesi" = kronoloji kaydının `k:` (kategori) alanı `antlasma`.
İkinci, GEVŞEK ölçüt ayrıca sayılacak: `k` ne olursa olsun başlığında (`b`)
"antlaşma / anlaşma / muahede / ahidnâme / sulh / barış / protokol / konvansiyon /
mütareke" kalıplarından biri geçen madde.

## Öngörüler (sayıyla)
1. `k:"antlasma"` madde sayısı: **90 ± 40** (1688 çekirdek maddenin ~%5'i; kuyrukla
   birlikte evren daha büyük).
2. Gevşek ölçüt bunun 1,5–2,5 katı çıkar (başlığında antlaşma geçip kategorisi
   `savas`/`diger` olan maddeler vardır).
3. Bu maddelerin **%35 ± 15'inde** en az bir ek okuma kartı görünür. Gerekçe:
   `window.ANTLASMALAR` 41 kayıt ve "antlasma" türünün doğrudan kaynağı;
   antlasma2/3/4/5 dosyaları da var. Kapsama sıfır değil ama seyrek.
4. Kartsız kalan antlaşma maddelerinin **çoğunluğu Osmanlı DIŞI** olacak
   (`kronoloji_*` dosyaları); `data/olaylar*.js` çekirdeğinde kapsama daha yüksek.
5. `data/ekokuma_antlasma6.js` diskte YOK ama `_EKOKUMA_DOSYA_ADLARI`da ZATEN
   kayıtlı (`js/app.js`de "Osmanli disi antlasmalar <1700" notuyla) — yani kodda EK
   SATIR GEREKMEYECEK ve `index.html`e de satır gerekmeyecek (ek okuma dosyaları
   dinamik `script` enjeksiyonuyla yükleniyor, `index.html`de listelenmiyor).
6. Yazılacak 8–12 kartın en az 8'inde TDV birincil kaynak bulunur (TDV isabet oranı
   ~%81, D218); 1–2 kartta "bulunamadı" yazılması beklenir.
