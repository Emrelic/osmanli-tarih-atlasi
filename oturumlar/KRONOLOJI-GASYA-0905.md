# KRONOLOJİ GÜNEY ASYA — teslim

> Koordinatör: 1.MURAT HÜDAVENDİGAR · Şartname: cross-session-message, 5 Eylül 2026
> Kısıt: koşu 5b canlıydı (PID 21540) — `arac/uret_petek.py` · `renkler.py` ·
> `girdi.py` · `data/*.js`e DOKUNULMADI.
> Çıktı: **YAMA** — `denetim/KRONOLOJI-GASYA-0905.json`

## ① NE ÖLÇTÜM

`data/devletler.js`den `bolge:"guney-asya"` künyeleri `bolge:` alanından
gerçek `id` ile sayıldı: **50 künye · BOŞ 1 (farukiler) · 1-3 maddeli 13 ·
4+ maddeli 36**. Hedef küme: **14 künye**.

### Kaynak yoğunluğu — hedef kümenin kendisi için 12 sluglık örneklem
```
farukiler 200 · kesmir 200 · malva 200 · multan 200 ·
orissa 302 · ahom 302 · nepal 200(→YÖNLENDİRME DEĞİL, gerçek madde) ·
kalikut 302 · travankur 302 · kandy 302 · bidar 302 · cunagadh 302
⇒ 4/12 CANLI (%33) — ama bu ÖZELLİKLE ZOR kalan alt-küme; bölgenin GENELİ
CLAUDE.md §4'te %57 ölçülmüş (36/50 zaten 4+ olduğu için tutarlı: kolay
künyeler zaten TDV'liydi, kalan 14 doğal olarak daha zor kalanlar).
```

## ② NE YAPTIM

14 künyenin **14'ünün de** üstünden geçtim, orijinal listeyle çapraz kontrol
ettim (dördüncü tur, dördünde de EKSİK çıkmadı).

```
🟢 4+ MADDEYE ÇIKTI      11 / 14   (%79 — dört bölge içinde EN YÜKSEK)
🟡 3'TE KALDI             2 / 14
⚪ 2'DE KALDI             1 / 14   (multan-langah — TDV'nin KENDİSİ "daha
                                    fazla tarihli bilgi yok" diyor)
TOPLAM YENİ MADDE        27 satır
```

## ③ 🔴 §4 UYARISI UYGULANDI — DAY-HASSASİYETİ SINIFI

Koordinatör `racput · manipur · nepal · travankur · bharatpur-cat · cunagadh`
künyelerinin **kendi `f:`/`t:` gününe kaynak olarak dayanılmaması** gerektiğini
özellikle vurgulamıştı. Bu turda **üçü** (`nepal`, `travankur`, `cunagadh`)
tam da benim hedef kümemdeydi. Her üçünde de:
- Yeni maddeler **YALNIZCA bağımsız akademik kaynaktan** yazıldı,
- Her madde `kaynak:` alanında **"KÜNYENİN KENDİ f:/t: GÜNÜNE
  DAYANILMADI"** diye açıkça işaretlendi,
- `cunagadh`'ta bu disiplin bir **94 yıllık çelişki** ortaya çıkardı:
  künye `f:1748` diyor, akademik kaynak hânedanın kuruluşunu **1654**'e
  tarihliyor. Künye sahibine bildirildi, künyeye dokunulmadı.

## ④ NEYİ BULAMADIM

```
multan-langah   2/4 — TDV `multan` maddesi KENDİSİ "sultanların ve
                savaşların spesifik tarihli bilgisi yok" diyor (bu turda
                AÇIKÇA test edildi). Mevcut 2 madde zaten TDV'nin verdiği
                TEK iki tarih (kuruluş 1451, son Ocak 1527).
cammu-kesmir    3/4 — dördüncü olay (halef Ranbir Singh'in tahta çıkışı)
                GÜN hassasiyetinde doğrulanamadı.
kocin           3/4 — bu künye ('Portekiz ÖNCESİ Koçin') 1102-1503 arasını
                kapsıyor ama bulduğum iki olay (1500, 1503) zaten künyenin
                SONUNA ait; 1102-1500 arası kendisi için bağımsız bir olay
                bulunamadı.
```

## ⑤ KAYNAK DİSİPLİNİ

- Farukiler (0→4): TDV'nin KENDİ maddesi tek başına dört tarihli olay verdi
  — kuruluş 1370, kurucunun ölümü 1399, II. Âdil Han 1457, Bâbürlü fethi 1601
  (künyenin kendi son'uyla BİREBİR eşleşiyor).
- **Bu bölgede de "atlas ufku" deseni tekrarladı**: `kesmir` (gerçek 1338,
  künye f:1281) ve `orissa` (gerçek 1434, künye f:1281) — künye sahibine
  bildirildi.
- Gün uydurulmadı; TDV'nin verdiği günler (Mahmûd Şah'ın tahta çıkışı 16
  Mayıs 1436, Prithvi Narayan Shah'ın Nepal'i ilanı 25 Eylül 1768) aynen
  kullanıldı.

## DURUM

✅ **İŞİM BİTTİ — boştayım, yeni iş bekliyorum.**

Dosya: `denetim/KRONOLOJI-GASYA-0905.json` (14 künye satırı, 27 yeni
kronoloji maddesi, hiçbiri `data/devletler.js`e UYGULANMADI).
