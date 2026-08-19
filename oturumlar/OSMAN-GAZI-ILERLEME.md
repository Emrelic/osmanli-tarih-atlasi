# OSMAN GAZİ — ilerleme defteri

> 🔴 **BU DOSYA ARTIK BİR GÖREV LİSTESİ GİBİ OKUNUYOR.** 20 Ağustos gecesi
> **beş yedek oturum** (HAZIR KITA 30 · 31 · 32 · Sonnet 30 · Sonnet 31)
> koordinatörden iş isterken açık kalem listesini **buradan** aldı — ve
> hepsi **18 Ağustos'un bayat listesini** aldı: A2 · B1 · B2 · B3 o sırada
> **kapanmıştı.** `CLAUDE.md §1.5`in bayatlama ailesi, bu sefer bir
> **ilerleme defterinde.** ⇒ Kalemler kapandıkça **burası aynı gün**
> güncellenecek.

## Son güncelleme: 2026-08-20 01:30 (ölçüldü, hatırlanmadı)

## KAPANDI — `git log` ile doğrulandı

```
5a90515  19 Ağu 22:44  A2 ARGOLİD doğu yarımadası — ada peteği anakarayı
                        boyuyordu, 4 nokta yazıldı                    ✅ KAPALI
ad42467  19 Ağu 09:58  B1 kronoloji sütunu / madde penceresi
                        B2 tepe metni tarihle senkron (r2595)         ✅ KAPALI
562e97e  19 Ağu 22:55  ODAK DÖNÜŞÜ kusuru + alttaki şerit (r2597)     ✅ KAPALI
4581d71  19 Ağu 23:24  B3 beş muharebe/antlaşma işareti — ÜÇ AYRI
                        SEBEP, tek sebep değildi (r2598)              ✅ KAPALI
```

Daha önce (18 Ağu): `0cf702b` 13 dolgu noktası emekli (taban 2589 → 2576) ·
`675201d` BEKLENEN_SAHIPSIZ 228 → 214 · `b55c262` EKLEYİCİ KAPI ·
`c734af9` DEVLET ODAĞI (r2586) · `f1873bc` CLAUDE'suz koşu + yayın ·
`9777657` `nicin_bos` `kur:`/`bit:` körlüğü — üç hüküm geri alındı.

## AÇIK KALEMLER — bugün ölçülmüş hâli

### 🔴 A3 · `veri-kaynak/motor_kara.geojson` commit'siz
Hâlâ ` M`. **Bilerek bekliyor:** M-0809'daki hüküm bu dosyanın motorun
**çıktısı** olduğunu söylüyor ve koşu şu an onu yeniden yazıyor olabilir.
⇒ Koşu bitmeden commit edilmez.

### 🟡 A4 · Solnok (`0023/H-0004`, 1686-06-01) — dönem kaydı ÖLÇÜLMEDİ

### 🟡 A2b · `uret_petek.py:1407` ADA KURALI Argolid'i niçin önlemedi
**ÖLÇÜLMEDİ.** Dosya koşu boyunca **kilitli** — koşu bitmeden açılmaz.

### 🔵 C · araştırma kolları (her biri tek oturumluk)
```
C1 İyon + Ege adaları     0021/H-0011 + 0022/H-0004
C2 Ferhad Paşa hattı      0021/H-0019 · 0027 · 0028
C3 Karadeniz bozkırı      0021/H-0032 + 0022/H-0005
C4 Macaristan üçlemesi    0023/H-0001 · 0002 · 0005
C5 Bahreyn / Safevî 1602  0021/H-0007 + H-0021
```

### ⬜ D · `parti-emrelic-0019` — 81 madde, `CEVAP.json` YOK, HİÇ AÇILMADI

### ⭐ Aletlerin EVREN doğrulaması yok
*"Benim komşu kümem motorunkiyle aynı mı"* diye soran bir denetim **yok**.
18 Ağustos'ta bir günde üç kez *"ölçüm doğru, evren dar"* hatası yapıldı.
Defterde *"bir sonraki oturumun ilk işi"* yazıyordu — **yapılmadı**, hâlâ açık.

## Kutu durumu — 20 Ağu 01:30 ölçümü (`py arac/kutu_dokum.py`)

```
313 madde · KAPALI 74 · AÇIK 239
   sırada 92 · HÜKÜMSÜZ 81 · ölçülecek 63 · çözüldü 59 ·
   zaten-doğru 12 · tekrar 3 · senin-kararın 3
   parti-0019  81 açık (CEVAP.json YOK)  ·  0021  30  ·  0022  5  ·  0023  16
```
⚠️ 18 Ağustos'ta **KAPALI 75 · AÇIK 238** yazıyordu; bugün **74 · 239**.
Bir kalem ters yöne dönmüş — **sebebi ÖLÇÜLMEDİ**, yazan bunu "ölçülmüş"
sanmasın.

## Koşu — 20 Ağustos gecesi CANLI

```
PID 4792 · başladı 19 Ağu 23:00:02 · 00:37 itibarıyla
duvar 97 dk · işlemci 93,8 dk = %97   (uyku YOK; 17 Ağustos'taki %5'in tersi)
kosu_otomatik.log: [23:00:02] ▶ ① harita üretimi (arac/uret_petek.py)
ölçülmüş süre ~3¼ saat  ⇒  beklenen bitiş ~02:15
```
🔒 `arac/girdi.py · renkler.py · uret_petek.py` **KİLİTLİ** — yazan koşuyu
öldürür (motor_izi). Ağır ölçüm yok: Dijkstra · tam GeoJSON · çift döngü.

## ⚠️ Arayüz dosyalarında başka bir oturum var (ölçüm)
```
oturum açılışında kirli : css/style.css · data/bolgeler.js · motor_kara.geojson
01:30'da kirli          : + index.html + js/app.js   (138 satır ekleme)
```
⇒ `index.html` ve `js/app.js` bu oturum başladıktan **sonra** kirlendi.
Ölçtüğüm bu; **kimin** çalıştığı bilinmiyor.

## Tahta
```
M-0813  20 Ağu 01:01  OSMAN GAZI → KOORDINATOR  · iş isteği (kii), cevap BEKLENİYOR
aynı gece 00:45-01:29 arası beş yedek oturum daha iş istedi (M-0811 · 0812 ·
0814 · 0815 · 0816) — koordinatörden 17 Ağustos'tan (M-0810) beri CEVAP YOK
```
