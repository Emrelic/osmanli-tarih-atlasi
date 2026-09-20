# ETIKET-0073 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 20 Eylül 2026)

Evren: `arac/girdi.py`nin okuduğu bütün yerleşimler (§1.5: 3921 nokta).
Sınav: çift = iki yerleşimin haversine mesafesi eşiğin altında.

| eşik | öngörülen çift sayısı |
|---|---|
| ≤ 3 km | 20–40 |
| ≤ 5 km | 40–70 |
| ≤10 km | 90–160 |
| ≤15 km | 200–300 |

Riyad ↔ Dir'iye mesafesi öngörüsü: **8–12 km**.

Mekanizma öngörüsü: `js/app.js` şehir etiketlerinde ZATEN bir çakışma elemesi var
(ikinci geçiş, gerçek `getBoundingClientRect` kutusuyla). Emre'nin gördüğü çakışma
bu yüzden "eleme yok"tan değil, elemenin **yalnız zoom eşiği değişince** koşmasından
(pan/hareket sırasında yeniden koşmamasından) doğuyor olabilir. Ayrıca çakışan işaret
bugün ELENİYOR — Emre ise ikisinin de GÖRÜNMESİNİ istiyor. Yani doğru çare elemeyi
onarmak değil, çakışan çifti iki yöne ayırmaktır.
