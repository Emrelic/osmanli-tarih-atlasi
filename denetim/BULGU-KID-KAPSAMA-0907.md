# KIMLIK-KID-0907 · TUR 2 — payda · 32'nin taraması · 56 ADSIZ'ın hükmü

**Sevk:** M-3153 (1.MURAT) · **Damga:** 7 Eylül 2026
**ANLIK GÖRÜNTÜ:** koşu 8 sürerken · `data/*.js` DONUK, yalnız **okundu**.

---

## ⓪ PAYDA — hangi sayı neyin?

```
429  `v:` DÖNEMİ toplamı                              ✓ ölçüldü
291  BUGÜN `kid` taşıyan                              ✓
138  BUGÜN `kid` taşımayan  (429−291)
      ├─  82  `k` metni VAR, kimlik YOK
      └─  56  ADSIZ (ne `k` ne `kid`)

YAMAM UYGULANDIKTAN SONRA (henüz DEĞİL):
341  `kid` taşıyan  (291+50)
 88  taşımayan  ├─ 32  `k`li, bağlanmamış
                └─ 56  ADSIZ
```
⇒ **138 = 82+56** ve **88 = 32+56**. İki payda iki AYRI ana ait:
`138` bugünün, `88` yamadan sonrasının. Karıştırılırsa 50'lik kazanç
görünmez olur.

---

## ① 32 `k`li DÖNEM — `devletler.js` TARANDI (tahmin yok)

⚠️ **İlk taramam GÜRÜLTÜ üretti** ve düzeltmesi kayda değer: künye
`ad`+`id`+`ozet` içinde arayınca *"Osmanlı"* kelimesi `bizans` · `safevi` ·
`kacar` · `kirim` özetlerinde geçtiği için onları **aday** saydı. Daraltıldı:
**yalnız künye `ad`ı** + ayırt edici olmayan kelimeler elendi.
📌 `§11`: *eşleşme bulmak, doğru şeyi bulmak değildir* — kendi aletimde.

| ×n | `k` metni | tarama sonucu | sınıf |
|---|---|---|---|
| 11 | Osmanlı hükümranlık iddiası (ocaklık lağvedildi) | ayırt edici kelime **yok**, künye yok | **DURUM** |
| 6 | Sahra vahalarının özerk idaresi | künye yok | **DURUM** |
| 5 | Macaristan (Zapolya vasal krallığı) | 3 Macaristan künyesi — **hiçbiri Zapolya değil** | 🔴 KÜNYE YOK |
| 3 | Mısır ordusu (işgal) | künye yok; polity `misir-kavalali` ama ilişki İŞGAL | **KATMAN** |
| 3 | Boğdan (Cenûbî Besarabya) | `bogdan` VAR, **1859'da bitiyor** | 🔴 MODEL |
| 2 | Kabiliye'nin fiilî özerkliği | `Kabiliye` arandı — künye **yok** | **DURUM** |
| 1 | eski Memlûk beyleri (Osmanlı desteğiyle) | `memluk` VAR ama **1517-04-13'te bitiyor**, dönem 1517-07-06'da başlıyor | 🔴 ARDİL (`§3.5.0`) |
| 1 | manastır harâcı | künye yok | **DURUM** |

🔵 **`eski Memlûk beyleri` yeni bir sınıf:** künye VAR, penceresi **83 gün
farkla tutmuyor**, ve zaten *"eski beyler"* Memlûk Sultanlığı **değil**
onun ardılıdır. `§3.5.0` ARDİL kovası — kısaltmak delik açar, bağlamak
yanlış kimlik verir.

---

## ② SORU KOVASI — 23 dönem, `k` + mevcut `statu` + önerim

🔴 **ÖNCE BİR ÖLÇÜM, ÇÜNKÜ HÜKMÜ DEĞİŞTİRİR:**
```
`statu` KULLANIMDAKİ DEĞERLER (429 dönem):   vassal 421  ·  (yok) 8
                                             BAŞKA DEĞER: 0
js/app.js `v:` dönem `statu`sunu OKUYOR MU:  🔴 HAYIR
   (app.js'teki `statu_dogrudan`/`statu_vasal` KRONOLOJİ maddesi alanları —
    başka bir şey)
`statu` ekrana YALNIZ motorun `vl` çapasından ulaşıyor (uret_petek:4844 `s`)
```
⇒ İlken doğru (*kimlik `kid`e, durum `statu`ya*), ama **`statu` bugün tek
değerli bir yer tutucu**. `girdi.py` kütüğü *"varsayılan 'vassal'"* diyor ve
`özerk`/`himaye` **hiç kullanılmamış** — Emre'nin istediği üçlü ayrım
**beyan edilmiş, doldurulmamış.**
⚠️ Yeni değerler yazılırsa **gösterim yolu önce doğrulanmalı**, yoksa
`CLAUDE.md`'nin *"ders veriye indi ama makine göremiyor"* vakası tekrarlanır.

| ×n | `k` metni | mevcut `statu` | ÖNERİM |
|---|---|---|---|
| 11 | Osmanlı hükümranlık iddiası (ocaklık lağvedildi) | `vassal` | 🔴 **`statu` yetmez — `v:` KATMANI TARTIŞMALI.** 1830 sonrası Fransız işgali altında Osmanlı'nın **fiilî tasarrufu yok**; atlas tasarrufu boyar. Etiketsiz kalmalı, ve dönemin `v:`de durup durmayacağı ayrı kalem. |
| 6 | Sahra vahalarının özerk idaresi | `vassal` | `statu:"ozerk"` · `kid` YOK — merkezsiz vaha idareleri, polity değil |
| 3 | Mısır ordusu (işgal) | `vassal` | 🔴 **`kid:"misir-kavalali"` + katman `isg:`** — polity belli, ilişki vassallık DEĞİL işgal (Kütahya·Konya·Karaman, 1833, 5 ay) |
| 2 | Kabiliye'nin fiilî özerkliği | `vassal` | `statu:"ozerk"` · `kid` YOK |
| 1 | manastır harâcı | `vassal` | `statu:"haracguzar"` · `kid` YOK — Patmos manastırının vergi ilişkisi |

📌 Üçünde `kid` **uydurulmadı**; ikisinde (`ozerk`) önerilen değer
**bugün hiç kullanılmıyor** ⇒ sözlüğe ilk giriş olur, ve o bir karardır.

---

## ③ 56 ADSIZ — **KASITLI DEĞİL, EKSİK.** Ve hepsinin bir cevabı var.

```
statu: vassal 55 · yok 1        kaynak 0 · not 0 · enklav 0
tarih: 1526-08-29 → 1923-10-29  ·  10 ayrı tarih aralığı
```
`kaynak`/`not`ın **sıfır** olması belirleyici: kasıtlı bir boşluk bu
projede **beyan edilir** (`bos:`/`neden:` deseni). Burada hiçbir beyan yok.

| ×n | dönem | yer | hüküm |
|---|---|---|---|
| **35** | 1705-1923 | Tunus · Kayrevan · Sfaks · Cerbe … | 🟡 `tunus-ocagi` — künye **1881-05-12'de bitiyor**, 42 yıllık kuyruk (Fransız himayesi) ⇒ **Boğdan sınıfı** |
| 5 | 1898-1913 | Girit (Hanya · Kandiye · Resmo …) | 🟢 `girit-devleti` — künye 1898-12-**22**, veri 12-**01** (21 gün) |
| 5 | 1830-1841 | Girit | ⚪ Kavalalı Mısır idaresi — `misir-kavalali` OLABİLİR, **ölçmedim** |
| 3 | 1541-1687 | Erdel (Brassó · Segesvár …) | 🟡 `erdel` — künye 1570 ⇒ 29 yıl kısmî |
| 3 | 1526-1541 | Erdel | 🔴 **ZAPOLYA — künye YOK (İKİNCİ KEZ)** |
| 1 | 1832-1912 | Sisam | 🔴 künye YOK |
| 1 | 1741-1923 | Tabarka | 🟡 `tunus-ocagi` (aynı kuyruk) |
| 1 | 1830-1878 | Yagodina | 🟢 `sirbistan-prensligi` (1804-1882) |
| 1 | 1878-1908 | Prevadi | 🟢 `bulgaristan-prensligi` — **tarihler BİREBİR** (1878-07-13 → 1908-10-05) |
| 1 | 1526-1660 | Debrecen | 🔴 künye YOK (muhtemelen Zapolya/Orta Macar ailesi) |

```
🟢 bugün KESİN bağlanabilir      7
🟡 künye var, penceresi KISMÎ   39   (36'sı Tunus ailesi)
🔴 künye YOK                     5
⚪ ölçmedim                      5
```

⚠️ **Ve matcher'ım burada da kaçırdı:** alt dizgi yönünü tek taraflı
kurdum (*yer adı ⊂ künye adı*), `Erdel Belgradı` ⊄ `Erdel Prensliği`
olduğu için **`erdel`i hiç göstermedi**. Elden geçirilince çıktı.

### 🔴🔴 ZAPOLYA ARTIK 8 DÖNEMİ BLOKE EDİYOR
```
5 dönem  `k` = "Macaristan (Zapolya vasal krallığı)"   (Budin · Peşte · Varad …)
3 dönem  ADSIZ  1526-09-01 → 1541-08-29                (Brassó · Segesvár …)
+ muhtemelen Debrecen 1526-1660 (ölçülmedi)
```
İki ayrı koldan aynı boşluğa varıldı. **Zapolya `DORT-KALEM-0907`in kalemi**
— dokunmadım, tahtadan doğrudan bildirdim.

---

## ④ ÖLÇMEDİM
```
⚪ Girit 1830-1841'in `misir-kavalali` olup olmadığı — kaynağa sorulmadı
⚪ Debrecen 1526-1660'ın kimliği
⚪ Tunus kuyruğunun (1881-1923) doğru kimliği — Fransız himayesi künyesi var mı
⚪ `statu:"ozerk"` yazılırsa motorun `vl` çapasında ve ekranda ne olacağı
```
