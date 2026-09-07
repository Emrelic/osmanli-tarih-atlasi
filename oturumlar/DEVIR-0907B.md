# DEVİR — 7 Eylül 2026, öğle · compact öncesi kayıt

> `*ct`: uçmaması gereken her şey. Bu dosya bir sonraki turun TABANIDIR.

## ⓪ KOŞU 8 — CANLI
```
başlangıç   7 Eylül 11:17:46 · fırlatıcı `arac/kos_ve_yayinla.py`
PID         ZİNCİR 9024 · ÜRETİM 10780
nöbetçi     arac/_bekci_kosu7b_cikis.py 9024 → denetim/BEKCI-KOSU8B.out
log         kosu8.log
```
🔴 **NÖBETÇİ BİR KEZ ÖLDÜ VE 43 DAKİKA FARK EDİLMEDİ** — saatlik canlılık
satırındaki `⏳` (U+23F3), Windows cp1254 konsolunda `UnicodeEncodeError`
attı. Düzeltildi (stdout `errors="replace"` + `yaz()` içinde iki yazım
ayrı `try`). ⇒ **Nöbetçinin sessizliği bir ölçüm değildir; `BEKCI-*.out`
dosyasına BAKILIR.**

🔒 DONUK (koşu bitene kadar): `data/*.js` · `arac/uret_petek.py` ·
`arac/renkler.py` · `arac/girdi.py`
🟢 SERBEST: `denetim/` · `oturumlar/` · `js/app.js` · `css/` · öteki `arac/*.py`

## ① KOŞU BİTİNCE — SIRAYLA, ve ilk üçü BENİM
```
① uret_petek.py: `vl` çapası `_dn.get("k") or _dn.get("kid")` YANLIŞ SIRA
   ⇒ `kid` varsa KÜNYENİN `ad`ı · `kid` yoksa ETİKET YOK
   (KIMLIK-KID-0907 buldu · ölçüm: 382 → 321 çapa)
② yamaları uygula (aşağıda ③) → denetle.py → denetle_yayin.py
③ sürüm damgası → yayın
④ Emre'nin açık isteği: ikinci geçiş süresi
   → denetim/ARAC-IKINCI-GECIS-SURE-0907.py (0906'lık aleti DEĞİL, o
     motoru import ediyor ve `uret_petek.py:39` reddediyor)
```

## ② BUGÜN İNENLER — yayına giren, ama HENÜZ ÜRETİLMEMİŞ
```
çakışma      91 → 23  (dört ayrı kusur düzeltilerek)
sahiplik     ~247 kayıt · künye 617 → 627
Çukurova     6 TDV maddesi yazıldı → Değişmez 2i 9→3 · Değişmez 7 663→661
mükerrer     12 kayıt ölçüldü · 6'sı tekilleştirildi (NO-OP doğrulandı)
motor        `vl` tâbi etiket çapası yazıldı (sıra kusuru ①'de)
```
🔴 **14+ commit PUSH EDİLMEDİ** ve yayın kapısı BAYAT diyor — bu doğru
davranış, koşu bitmeden push edilmemeli.

## ③ SAHADA YEDİ İŞÇİ — hazır kıta 0
```
CAKISMA-0907        local_5f1ea168  23 çakışma · küme 1 (5 Mısır) TESLİM
KIMLIK-KID-0907     local_9927df76  kid 291→341 · yama denetim/'de · TESLİM
YUK-FETCH-0907      local_a7692d4b  fetch+JSON %51 ölçüldü · index.html AÇILDI
KAYNAK-DENETIM-0907 local_a6f8263a  şartname var, alet yazılıyor
ENKLAV-0907         local_c3fd502b  661 · C-hakiki 12 ayıklanıyor
GORSEL-0907         local_e9ebc14b  şema ONAYLANDI · pilot listesi bekleniyor
EKOKUMA-0907        local_6967b6e7  11/7 doğrulandı · tanımlar ONAYLANDI
```
Şartnameleri `oturumlar/<AD>.md`. Tahta: M-3100…M-3120.

## ④ BEKLEYEN YAMALAR — `denetim/` altında, UYGULANMADI
```
yer_yama_kid_kimlik_0907.js     44 yerleşim · 50 dönem (KIMLIK-KID)
yer_yama_misir5_0907.js         5 Mısır noktası (CAKISMA)
+ HUKUM-CAKISMA-MISIR5-0907.md
```

## ⑤ 🆕 ÜÇ KADEME — Emre'nin 7 Eylül kararı
Tam hüküm: **`denetim/HUKUM-UC-KADEME-0907.md`**
```
A  şehir etki alanları toplamı — benekli/enklavlı/koridorlu HAM hâl
B  A'nın rötuşlanmışı — boşluk/enklav/koridor/sahipsiz arazi PAYLAŞTIRILMIŞ
C  🆕 modern uluslararası antlaşmalarla çizilmiş HUKUKÎ sınır
```
🟢 ÖLÇÜLDÜ: `veri-kaynak/ne_10m_admin_0_countries.geojson` **ZATEN DEPODA**
(13 MB · 258 ülke · Sahra dokuzunun dokuzu). C'nin geometrisi var, bağlı değil.
🔴 AMA o dosya **BUGÜNÜN** sınırları: Hatay 1939 · Aouzou 1994 · Cezayir-Fas
1963 ⇒ 1923'e olduğu gibi kopyalanamaz.
🔴 HÜKÜM: C bir **görünüm anahtarı değil ÖRTÜ** — geçiş tarihi HARİTA
başına değil **SINIR başına** farklı.
🔜 SIRA: ① model ② çizim ③ 1923 çıpası ④ 14 kol fan-out.
**④ ①'den önce açılırsa 14 oturum 14 biçim üretir** (`KADEME_YAMA` vakası).

## ⑥ AÇIK KALEMLER — bende
```
Zapolya künyesi (1541-1570 Doğu Macar) YOK ⇒ açılmalı
Boğdan 1856-03-30→1878-07-13 dönemi 1859-01-24'te BÖLÜNMELİ
1921-08-23 Faysal'ın taç giymesi — kronoloji maddesi YOK
36 portrenin lisansı makine okunur DEĞİL — ayrı sevk
Değişmez 7 tavanı 660 · gerçek 661 · 5 Eylül'den bayat
`Mısır ordusu (işgal)` ×3 — `v:`de mi `isg:`de mi? ayrı kalem
```

## ⑦ BUGÜN ÇÜRÜYEN ÖNCÜLLER — brifing üç kez bayat çıktı
```
"OTURUMLAR hepsi ÖLÜ"        → 19 canlı, 5 hazır kıta vardı
"VASSAL bloke: girdi.py"     → kütükte `kid` ve `statu` ZATEN vardı
"petek_govde.js hedef"       → o dosya tarayıcıya HİÇ inmiyor
"send_message ÇALIŞMIYOR"    → 7/7 oturum onunla uyandı (tahta.py başlığı)
```
📌 Ortak ders: **brifing bir ölçüm değil, ölçümün fotoğrafı.**

## ⑧ `*SETI` — yeni kısaltma
`ClaudEmre/KISALTMALAR.md`e eklendi (commit `53ce88b`).
S soru · E eylem · T tavsiye · I itiraz — **dördü de cevaplanır, boş olan
`YOK` yazılır.**
