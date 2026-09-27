# CEPHANE — ölçülmüş, tahmin değil

> `CLAUDE.md §2d` / `YASALAR G12`: *vites, ekipten ÖNCE seçilir.* Bu dosya
> olmadan kaç oturum açılacağı bir tahmindir.

## 🆕 27 Eylül 2026 · 07:35 — `get_usage` ile ÖLÇÜLDÜ (beyan değil)

```
abonelik          Max
5 saatlik limit   %1   · reset 4s 35dk
haftalık (tümü)   %17  · reset 30 Eylül 21:00 (3g 13s)
haftalık Fable    %0
ek kullanım       KAPALI (0,00 / 20,00 USD)
```
🔴 **Aşağıdaki 23 Eylül beyanı BAYATTI ve bir daha dayanak yapılmamalı.** O
ölçüm *"%94 dolu · reset Perşembe 00:00 · maksimum tasarruf"* diyordu; o reset
25 Eylül'de geçti. Dört gün boyunca en dar vites yürürlükte sayıldı, oysa
bağlayıcı kısıt kalkmıştı.
📌 **Ders: cephane SORULMADAN ÖNCE ÖLÇÜLÜR.** `get_usage` `plan` bloğunu
oturum kimliği olmadan da verir (`context` başka oturum için "unavailable"
dönse bile `plan` DOLU gelir) ⇒ kullanıcıya *"panele bak, yüzdeyi yaz"* demek
artık gereksiz bir tur. Bu satır yazılana kadar bu ölçüm yolunun mümkün olduğu
bilinmiyordu ve dosya elle beyanla besleniyordu.

⇒ **Yürürlükteki vites: `§2d` "20x Max, limit rahat" satırı** — tam düzen, çok
oturum açılabilir. Tasarruf hâlâ bir fazilettir ama artık bir KISIT değildir.

## 23 Eylül 2026 · 01:10 — Emre'nin beyanı

```
abonelik          Max / 20x
5 saatlik limit   %0   DOLU  (boş)
haftalık limit    %94  DOLU  ← BAĞLAYICI KISIT
reset             Perşembe 00:00 · ölçüldü: 22 saat 49 dakika kaldı
Emre'nin emri     "maksimum tasarruf yapmalıyız"
```

## Bunun bağladığı kararlar

**① `§2d` tablosunun en dar vitesi yürürlükte.** Tablo *"limit %70+ dolu →
yeni büyük iş AÇILMAZ, açık pencereler kapatılır"* diyor. %94 o eşiğin
yirmi dört puan üstünde. ⇒ **Yeni fikir önerilmez, yeni kapsam açılmaz,
analiz yapılmaz** (`G9`). Yalnız açık pencere kapatılır.

**② Oturum sayısı AZ tutulur — ve sebebi ters sezgiseldir.**
Paralellik token maliyetini **düşürmez**, yalnız duvar saatini kısaltır.
Her taze oturum `CLAUDE.md` + şartname + ölçüm turunu **yeniden** öder
(`§7.1`: *maliyet ≈ bağlam × tur*). ⇒ %94'te doğru hamle **çok sayıda taze
oturum değil, az sayıda uzun soluklu oturumdur.**

**③ KOŞU UCUZDUR — madde pahalıdır.** Ölçüldü ve çoğu zaman ters biliniyor:
`py arac/uret_petek.py` **tek Bash çağrısıdır**; 23 dakikalık duvar saati
token değil CPU yakar. Pahalı olan 164 maddenin araştırması. ⇒ *"maddeler
bitince koşu başlat"* emrinin **koşu yarısı bütçeyi zorlamaz.**

**④ 🔴 `arac/` DONMUŞTUR — ve bu bir nezaket değil bütçe kuralıdır.**
Artımlı motorun önbelleği (`arac/motor_onbellek.py` · `_motor_onbellek/`)
bir **TUZ** ile anahtarlanır ve tuzun içinde şunlar var: `uret_petek.py` ·
`renkler.py` · `girdi.py` · `motor_onbellek.py` + bütün `MOTOR_*` ortam
değişkenleri + harita penceresi.
```
yalnız data/ değişirse   → önbellek TUTAR  → koşu ~23 dk (22 Eylül ölçümü)
arac/ bir satır değişirse → TUZ DEĞİŞİR    → önbellek TAMAMEN çöp, tam inşa
```
⇒ Bu gece hiçbir oturuma `arac/` işi verilmeyecek. (`YASALAR M7`nin daha
sıkı hâli: M7 *koşu sürerken* yasaklar; tuz koşudan **önce** de ısırır.)

**⑤ Üç kademeli yapı yok.** İki kademe: koordinatör + işçiler.
