# ARAYÜZ 5 — ilerleme

> Görev tanımı: `oturumlar/ARAYUZ-5-GOREV.md`

---

## H-0011 · başkent yıldızı — ✅ ÖLÇÜLDÜ: ZATEN DOĞRU ÇALIŞIYOR

Kod `js/app.js:1468` (`p4/H-0011`) daha önceki bir oturumda (8f5eab8,
2026-08-03) çözülmüş. Bugün canlı ortamda ölçtüm, doğru:

```
1300-01-01 → Söğüt   1350-01-01 → Bursa
1400-01-01 → Edirne  1460-01-01 → İstanbul   1600-01-01 → İstanbul
```

Her tarihte **tam bir** şehir `baskent` sınıfı taşıyor, asla sıfır ya da beşi
birden değil. Yalnız Osmanlı için çalışıyor — yabancı devletlerin başkentleri
`data/devletler.js`'in `baskent` alanı zaman penceresiz olduğu için
işaretlenemiyor (kod içinde belgelendi, veri sahibini bekliyor, benim
kapsamım dışında).

**İş yok — bitiş ölçütü zaten sağlanıyor.**

---

## H-0015 · padişah portresi tekrarı — ✅ DÜZELTİLDİ

Kök sebep ölçüldü: `obGoster()` olayda geçen kişiler arasında bir padişah
bulamayınca (ör. "Pîrî Reis" bir padişah değil) sessizce **dönemin
padişahına** düşüyordu — bu da üst karttaki portrenin birebir aynısı.

`js/app.js:3240` civarı değiştirildi: `if (!pad) pad = padisahBul(o.gi);`
düşüşü kaldırıldı. Kart artık yalnız olayla **belirli** biçimde bağlı bir
padişah varsa (vefat_id ya da kisiler'de adı geçen bir padişah) portre
gösteriyor; aksi hâlde olay türüne göre rozete (⚔/📜/☾) düşüyor.

**Ölçüldü (canlı sayfada):**
```
Pîrî Reis'in dünya haritası  → artık ☾ rozeti, portre YOK (önceden dönemin
                                padişahının portresi tekrar basılıyordu)
Kanunî tahta çıktı (kisiler
  içinde adı geçiyor)         → portre KALDI (suleyman1.jpg)
Osman Gazi'nin vefatı
  (vefat_id)                  → portre KALDI (osman1.jpg)

1141 maddenin 564'ü portreli kaldı, 577'si artık rozete düşüyor
(önceden 577'si üst kartla BİREBİR aynı portreyi tekrar basıyordu)
```

`node --check js/app.js` temiz.

---

## H-0013 · Sinj işaretlenmiyor — 🔴 TANI TAM, DÜZELTME BENDE DEĞİL

Kod tarafı **doğru çalışıyor** — `olayKonumu()` `yer_id`/`yer_kon` yoksa
`null` döner, harita imparatorluk görünümüne düşer ve kart *"bu olayın
haritada nokta yeri yok"* der (§⑦ tasarımı, ARAYUZ-4). Sinj'de tam bu oluyor.

**Kök sebep ölçüldü:** `data/olaylar_ek5.js:470` — Sinj maddesinin `yer_id`
alanı **yok** (yalnız serbest metin `yer:"Sin (Sinj), Dalmaçya"` var).
Karşılığı olan nokta `sehirler` dizisinde zaten mevcut ve doğru:
```
"Sin (Sinj)"  lat:43.704  lon:16.639   ← ISARET_KAYNAK/sehirler'de VAR
```
Yani düzeltme gerçekten **bir satır**:
```js
yer_id:"Sin (Sinj)"
```
`data/olaylar_ek5.js:470`'e eklenmesi yeterli — `ad === o.yer_id` birebir
eşleşmesiyle çözülecek, bulanık eşleşmeye gerek yok.

⚠️ Bu bir `data/` dosyası — CLAUDE.md §7 ve bu oturumun görev tanımı §③
gereği **benim yazma yetkim yok**. Koordinatöre teslim ediyorum
(ARAYUZ-4-SARTNAME.md §⑤'teki "yer_id parti" kuyruğunun aynısı).

**Bitiş ölçütü** (harita Sinj'e gidiyor mu) veri eklenene kadar **sağlanamaz**
— kod tarafı hazır ve bekliyor.

---

## H-0003 · haritaya yay çizme butonu — ⏸ ŞARTNAME BEKLİYOR

Görev tanımı gereği kod yazmadan önce soruldu (bkz. sohbet). Not: kodda
`p5/H-0003` etiketiyle **başka bir** özellik zaten var (`devletiYay()`,
`js/app.js:328`) — devlet adına tıklayınca o devletin o anki sınırını ekrana
sığdırıyor. Bu, Emre'nin bugünkü tarifiyle (*"basınca mouse'la bir yay
çizilsin"*) **aynı şey değil** — mevcut özellik "sığdırma", istenen "elle
çizim". İkisi karışmasın diye burada ayrıca not düşüldü.

---

## Denetim

```
node --check js/app.js   → temiz
```
`css/style.css`'e bu turda dokunulmadı (H-0011/H-0015/H-0013 CSS
gerektirmedi).
