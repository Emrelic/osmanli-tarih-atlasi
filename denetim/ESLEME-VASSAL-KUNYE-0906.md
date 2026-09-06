# 🅑 UYGULAMA — `v:` METİNLERİNİN KÜNYE EŞLEMESİ

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** Emre 🅑'yi seçti.
> Alet: `denetim/ARAC-VASSAL-ESLEME-0906.py` — projenin **kendi**
> aletlerini çağırır (`girdi.py` JS okuyucusu · `ARAC-NORMAL-0903.py`
> ortak normalleştirici). Kendi ayrıştırıcı/normalleştirici YAZILMADI.

---

## ⓪ ÖLÇÜM

```
`v:` DÖNEM 429   ·   kayıt 367   ·   künye evreni 617
`k` DOLU   373 dönem / 40 farklı metin
`k` BOŞ     56 dönem                     ← ayrı kalem, aşağıda
```

🔴 **VE ÖLÇÜM BİR ŞEY DAHA GÖSTERDİ: `k` İKİ AYRI İŞ YAPIYOR.**
Metinlerin bir kısmı bir **polity adı** ("Eflak Voyvodalığı"), bir kısmı
ise bir **durum tarifi** ("Osmanlı hükümranlık iddiası (ocaklık
lağvedildi)" · "Sahra vahalarının özerk idaresi" · "manastır haracı").
⇒ İkincilere künye açmak **yanlış olur**; onlar kimlik değil **açıklama**.
Bu, 🅑 uygulanmadan görünmeyen bir bulgu.

---

## ① 🟢 KESİN EŞLEME — 19 metin · **301 dönem** (%81)

| dönem | `k` metni | `kid:` |
|---|---|---|
| 74 | Mısır (Kavalalı) | `misir-kavalali` |
| 54 | Kavalalı hânedanı | `misir-kavalali` |
| 30 | Mısır (İbrahim Paşa) | `misir-kavalali` |
| 41 | Cezayir Ocaklığı (dayı idaresi) | `cezayir-ocagi` |
| 39 | Trablusgarp Ocaklığı (Karamanlılar) | `trablusgarp-ocagi` |
| 16 | Eflak Voyvodalığı | `eflak` |
| 12 | Boğdan Voyvodalığı | `bogdan` |
|  3 | Boğdan Voyvodalığı (Cenubi Besarabya) | `bogdan` |
|  2 | Boğdan Voyvodalığı (Osmanlı tâbii) | `bogdan` |
|  7 | Bulgaristan Prensliği | `bulgaristan-prensligi` |
|  6 | Kırım Hanlığı | `kirim` |
|  5 | Sırbistan Prensliği | `sirbistan-prensligi` |
|  3 | Şarkî Rumeli vilâyeti | `sarki-rumeli` |
|  3 | Erdel Prensliği | `erdel` |
|  2 | Hacıemiroğulları Beyliği | `haciemir` |
|  1 | İmereti krallığı (tâbi) | `imereti` |
|  1 | Şabah emirliği (Osmanlı himayesinde) | `kuveyt` |
|  1 | Şabah emirliği (Osmanlı kazası) | `kuveyt` |
|  1 | Sânî emirliği (Osmanlı kazası) | `katar` |

🟢 **VE EŞANLAM ÇİFTİ BURADA YAPISAL OLARAK BİTİYOR:** "Mısır
(Kavalalı)" + "Kavalalı hânedanı" + "Mısır (İbrahim Paşa)" =
**158 dönem, tek `kid`.** Üç metin, bir kimlik. `k` görünen ad olarak
kalır; eşleşme `kid` üzerinden yapılır.

⚠️ İbrahim Paşa gerekçesi: Kavalalı Mehmed Ali'nin oğlu ve **aynı
hânedan** — ayrı bir polity değil.

---

## ② 🟡 KARAR GEREK — 1 metin · 5 dönem

```
5   Macaristan (Zapolya vasal krallığı)
    adaylar:  macaristan · macaristan-habsburg · macaristan-naiplik
```
Üçü de var ve üçü de farklı şey: Zapolya'nın Osmanlı tâbii krallığı,
Habsburg Macaristanı, ve naiplik dönemi. **Seçmedim** — bu bir tarih
sorusu, ve yanlış `kid` sessiz bir hata üretir.

---

## ③ 🔴 KÜNYE AÇILACAK — 7 kimlik · **39 dönem**

```
16  Ahmed Bey'in Konstantin beyliği   (11 + 5 "Osmanlı adına")
 9  Mekke Şerifliği
 6  Orta Macar Krallığı (Tököli İmre) (5 + 1 Munkács savunması)
 4  Dejanović Prensliği (Kostadin-ili)
 2  Arvanid sancağı                   (nominal tâbiiyet)
 1  Kaheti krallığı (tâbi)
 1  Kumuk şamhallığı (tâbi)
```
Yedisi de **gerçek polity** ve künyeleri **yok** (tarandı: `mekke*` ·
`konstantin*` · `dejanovic` · `orta-macar` · `tokoli` · `kahet*` ·
`samhal` · `arvanid` — hepsi yok).
⚠️ Künye açmak `f:`/`t:` demek, yani **kaynak gerektirir** (`§4`).
Bu 39 dönem 🅑'nin **pahalı kısmı** ve tek turda bitmez.

🟢 İkisinin künyesi **var** ve eşleşiyor: `Dubrovnik Cumhuriyeti
(haraçgüzar)` → `dubrovnik` · `Crnojević Zetası (Osmanlı tâbii)` →
`zeta`. (Alet onları kaçırdı çünkü metin parantezli ve çekirdek
süzgecim `Cumhuriyeti`/`Zetası` kuyruklarını tanımıyor. **Aletin
kusuru, verinin değil.**)

---

## ④ ⚪ KÜNYE **OLMAMALI** — 8 metin · ~26 dönem

```
11  Osmanlı hükümranlık iddiası (ocaklık lağvedildi)
 6  Sahra vahalarının özerk idaresi
 3  Mısır ordusu (işgal)          ← 🔴 bu bir İŞGAL, yeri `isg:`
 2  Kabiliye'nin fiilî özerkliği
 1  eski Memlûk beyleri (Osmanlı desteğiyle)
 1  manastır haracı
 1  Mısır valiliği (Kavalalı hânedanı)   → aslında `misir-kavalali`
 1  Mısır Hidivliği                      → aslında `misir-kavalali`
```
İlk altısı **kimlik değil durum**; `kid` almazlar, `k` metni olarak
kalırlar. Son ikisi `misir-kavalali`ye eşlenebilir (①'e taşınabilir).
🔴 **"Mısır ordusu (işgal)" ayrı bir bulgudur:** `v:` katmanında bir
**işgal** duruyor. Doğru yeri `isg:` — ve bu, FAZ 2'nin konusuyla aynı.

---

## ⑤ ⚪ `k` BOŞ — 56 dönem, AYRI KALEM
Tâbi olduğu yazılı, **kimin tâbisi olduğu yazılı değil.** 🅑 bunları
çözmez; her biri ayrıca araştırılacak. Bu, ölçümün baştan bildirdiği
üçüncü kusur.

---

## ⑥ MALİYET — dönem cinsinden (metin sayısı değil)

```
🟢 KESİN, bugün yazılabilir        301 dönem   (%81)
🟡 karar gerek                       5
🔴 künye açılacak (kaynak ister)    39
⚪ kimlik değil, durum               26
⚪ `k` boş                           56
```
⇒ **Tek turda 301 dönem (%81) kapanıyor** ve eşanlam çifti yapısal
olarak bitiyor. Kalan %19 üç ayrı sebeple açık, ve üçü de **farklı iş**.

---

## ⑦ 🔒 UYGULAMA — KOŞU 6 BİTMEDEN YAPILAMAZ

🅑 **iki donuk dosyaya birden** dokunuyor:
```
data/yerlesimler*.js   `kid:` alanı eklenecek        ← DONUK (çıktıyı bayatlatır)
arac/girdi.py          BILINEN_DONEM_ALANLARI'na `kid` ← DONUK (motor parmak izi,
                                                        DEĞİŞTİREN KOŞUYU ÖLDÜRÜR)
```
⚠️ `girdi.py` şart: kütüğe eklenmezse motor her koşuda *"alan `v.kid`
BILINEN_ALANLAR'da yok"* diye uyarır — ve bu gece ölçüldüğü gibi
(`s.kesinlik` vakası) o uyarı **yanlış kayıtları** işaret edebilir.

**SIRA (koşu bitince):**
```
1. arac/girdi.py       → BILINEN_DONEM_ALANLARI'na "kid" eklenir
2. yama üretilir       → ①'in 19 metni, 301 dönem
3. --kuru koşulur, sonra --yaz
4. denetle.py + renk_olc.py   (`§9`: veri değişti ⇒ ŞART)
5. ②③④⑤ ayrı kalemler olarak kuyruğa
```

## ⑧ ÖLÇMEDİĞİM
- ①'deki 19 eşlemenin **tarihsel** doğruluğu: künye pencereleri
  (`f:`/`t:`) `v:` dönemlerini kapsıyor mu? **Kapsamıyorsa `4c`/`4d`
  öter.** Bu, yama üretilmeden önce ölçülmeli.
- Motorun `v:`yi nasıl boyadığı — `kid:` eklenince renk **kendiliğinden**
  gelir mi, yoksa `uret_petek.py` değişmeli mi? (`uret_petek.py` okunmadı)
- ③'teki 7 künyenin kaynak durumu.


---

## ⑨ 🔴 PENCERE SINAVI KOŞULDU — ⑧'in ilk kalemi KAPANDI

`§3.5.0`: *künyenin var olması yazılabilir olduğu anlamına gelmez —
penceresi de tutmalı.* Alet: `denetim/ARAC-VASSAL-PENCERE-0906.py`.

```
🟢 PENCERE TUTUYOR   279 dönem   ← bugün yazılabilir
🔴 PENCEREYİ AŞIYOR   22 dönem   ← yazılırsa `4c`/`4d` İHLALİ doğar
                     ───────────
                     301 dönem   (①'in tablosuyla BİREBİR — tutarlı)
```

### Aşan 22 — üçü de GERÇEK bir tarih sorusu, rastgele değil

```
11  eflak    dönem → 1878-07-13   künye → 1859-01-24
 7  bogdan   dönem → 1878-07-13   künye → 1859-01-24
    ⇒ 1859-01-24 = iki prensliğin BİRLEŞMESİ (Romanya). Veri tâbiiyeti
      1878 Berlin'e (bağımsızlık) kadar sürdürüyor, künye 1859'da
      bitiriyor. İKİSİ DE DOĞRU, farklı olayı tarihliyor.
      🟢 Çare muhtemelen `romanya` künyesi: 1859-1878 arası tâbi olan
         ROMANYA'dır, artık Eflak/Boğdan değil. ÖLÇÜLMEDİ.

 3  erdel    dönem 1541-08-29 →   künye 1570-01-01 →
    ⇒ 1541 Budin'in düşüşü, 1570 Speyer (prenslik unvanı).
      `§11`in "ad/unvan ömrü ≠ tasarruf sürekliliği" ailesi — bu sefer
      TÂBİ tarafta.

 1  Sofya    dönem 1878-01-04 →   künye 1878-07-13 →
    ⇒ 6 ay: Ayastefanos/kurtuluş ↔ Berlin. Küçük ve tekil.
```

⇒ **Hiçbiri veri hatası değil.** Üçü de `v:` döneminin ve künyenin
**farklı olayları** tarihlemesinden doğuyor. `kid:` yazmak bu farkı
görünür kılıyor — 🅑'nin beklenmeyen kazancı: **bugün sessiz olan üç
modelleme sorusunu açığa çıkarıyor.**

### VE BİR ARAÇ KUSURU KAYDA GEÇİYOR
Pencere sınavının ilk koşusu **191** dedi. Yanlıştı: eşleme sözlüğüm
**tam dizgi** karşılaştırması yapıyordu ve 158 Mısır döneminin yalnız
74'ünü saydı — yazım varyantı (`hanedani` / `hânedanı`) 84 dönemi
**sessizce** kaçırdı. Ortak normalleştiriciye bağlanınca 279 çıktı.
📌 `§4`ün Türkçe yazım ekseni, ve bu sefer **kendi aletimde**. Alet hata
vermedi, temiz bir sayı üretti — bu gecenin en sık tekrarlayan sınıfı.

---

## ⑩ GÜNCEL MALİYET

```
🟢 BUGÜN YAZILABİLİR            279 dönem   (`k` dolu olanların %75'i)
🟡 pencere aşıyor, karar gerek   22
🟡 kimlik belirsiz (Macaristan)   5
🔴 künye açılacak (kaynak ister) 39
⚪ kimlik değil, durum            26
⚪ `k` boş                        56
```
