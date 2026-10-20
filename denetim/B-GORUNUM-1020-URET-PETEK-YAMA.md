# B görünümü — `uret_petek.py` için YAMA ÖNERİSİ (MÖ-MOTOR'a, 20 Ekim 2026)

`arac/uret_petek.py` MÖ-MOTOR oturumunundur; bu oturum o dosyaya DOKUNMADI.
Bu belge yalnız önerilen yamadır — uygulama MÖ-MOTOR'da, koşu emri Emre'de.

## Durum (ölçüldü: `uret_petek.py:9320-9350`)
- B çağrısı ZATEN bağlı: A (`donemler` + `DEVLET_KAYIT`) belleğe yazıldıktan sonra
  `_bdolgu.kosudan(...)` çağrılır, `data/dolgu.js` yazılır, `try/except` ile A korunur.
- Yalnız **bayrak varsayılan KAPALI** (`MOTOR_B_DOLGU == "1"`). Bu yüzden hiçbir koşu
  `data/dolgu.js` üretmedi.

## Önerilen yama (tek satır)
```python
# önce
if os.environ.get("MOTOR_B_DOLGU") == "1":
# sonra  (Emre 20 Ekim: B aktif olmalı; kapatmak için MOTOR_B_DOLGU=0)
if os.environ.get("MOTOR_B_DOLGU", "1") != "0":
```
`dolgu.py` ufuk gününü kendi ortam değişkeninden okur (`MOTOR_DOLGU_UFUK_GUN`, varsayılan
10 = 403 km); `kosudan` çağrısına argüman eklemek GEREKMEZ.

## Koşudan önce okunacaklar (ölçülmüş riskler)
1. **Maliyet.** B-4 ölçümü (r=120 km): soğuk kesit başına 281 sn → tam koşu ≈ 4,5–6 gün.
   Yeni varsayılan r≈202 km + deniz kuralı daha pahalı (1000-01-01, 23 gövde: 5,4 sn → 63,9 sn
   yalnız deniz kuralıyla). 1281-01-01 (261 gövde) tek kesit süresi `B-GORUNUM-1020-OLCUM.md`'de.
   ⇒ Tam koşuyu HAVVA'da, `KOSU-YAYIN.md` sırasıyla, önbellek sıcakken yapın.
2. **Çıktı boyutu** tam koşuda hiç ölçülmedi (10–85 MB aralığı, `B-GORUNUM-0072-OLCUM.md` §3);
   `index.html`e koşulsuz yüklenemez → tembel yükleme gerekir (aşağıda).
3. **Önbellek tuzu** `dolgu.py` modül özetini taşır (`_ONB_TUZ`): bu değişiklik dolgu
   önbelleğini kendiliğinden geçersiz kılar; `uret_petek.py`nin kendi önbelleğine dokunmaz.
4. Ufuk günü başına AYRI dosya gerekir (5/7/10 farklı geometri): ya üç koşu (`dolgu_5.js`,
   `dolgu_7.js`, `dolgu_10.js`) ya da yalnız 10 gün + arayüzde 5/7 için dolguyu kapalı tutmak.
   Karar Emre'nin (`B-GORUNUM-1020-OLCUM.md` §5).

## Arayüz yükleyicisi (veri üretildikten sonra, aynı commit'te)
`index.html` 1887 civarındaki yorum bloğu: dosya var olunca `<script src="data/dolgu.js?v=…">`
satırı geri yazılır (`surum_damgala.py` damgalar); veri ile satır AYRI commit'e bölünmez
(21 Eylül'de bölündü, 5 dk 404 verdi). `bVeriKapisi` (`app.js:~1269`) veri gelince anahtarı
kendiliğinden açar — kod değişmez.
