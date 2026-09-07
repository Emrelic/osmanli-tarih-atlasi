# EKOKUMA-0907 — 8. boyut ②: EK OKUMA türlerinin tanımlanması

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · EKOKUMA-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · `data/*.js` (KOŞU SÜRÜYOR) · `js/app.js`
            (YUK-FETCH-0907'nin elinde) · 8. boyutun ÖTEKİ konuları
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

`CLAUDE.md §1.6` (Emre, 2 Eylül): 8. boyutun açılan **ikinci** kalemi —
*"EK OKUMA türlerinin tanımlanması (soru 14 · 11 başlığın 7'si tanımsız)"*.

Ölçtüm (7 Eylül, **devralmadım**):
```
data/ekokuma.js         EKOKUMA        9 kayıt
data/ekokuma_sh104.js   EKOKUMA_SH104  1 kayıt
──────────────────────────────────────────────
toplam 10 kayıt · KULLANILAN TÜR 3:
   sebep-sonuc 5 · antlasma 4 · teknik-bilimsel 1
alanlar: id · tur · kisa · sebep · sonuc · bag · metin · kesinlik ·
         zincir · olay · kaynak
```
⇒ On bir başlık tasarlanmış, **üçü kullanımda**. Boşluk gerçek.

## ② İŞİN

### ② a — ÖNCE ON BİR BAŞLIĞI BUL, SAYIYI DEVRALMA
*"11 başlığın 7'si tanımsız"* cümlesi `CLAUDE.md`den geliyor ve ben onu
**doğrulamadım**. Sen doğrula:
```
· CLAUDE.md §1.6 ve çevresi
· data/ekokuma*.js başlık yorumları
· js/app.js `ekOkuma*` fonksiyonları (5877 · 5898 · 5987 · 6029)
· denetim/ altında EK OKUMA geçen belgeler
```
🔴 Sayı tutmuyorsa **BİLDİR** — `§11`: *"devraldığın rakamı doğrulamadan
aktarma"*, ve bu belgedeki 11/7 tam da devralınmış bir rakam.

### ② b — HER TÜR İÇİN TANIM = ÜÇ ŞEY
```
① NE SORUYA CEVAP VERİR    tek cümle, kullanıcının merakı cinsinden
② HANGİ ALANLARI DOLDURUR  mevcut şemadan (`sebep`/`sonuc`/`bag`/`zincir`…)
③ ÖRNEK                    külliyattan GERÇEK bir olayla, uydurma DEĞİL
```
🟢 Ve `app.js:6029`daki dürüstlük notunu oku — orada bir alan seçimi
**ölçümle düzeltilmiş**: `kisa` seçilmişti ve *"merakı UYANDIRMAK yerine
SÖNDÜRÜYORDU"*. Emre'nin istediği: **soru sorulur, cevap kartta verilir.**
Tanımlarını o ölçüte göre yaz.

### ② c — `kesinlik` SÖZLÜĞÜ AYRI BİR TUZAK
`app.js:6029` EK OKUMA kartı için `kesin · tartismali · iddia · rivayet`
okuyor. Ama **aynı ad başka bir yerde başka bir sözlük taşıyor**:
yerleşim/kronolojide `gun · ay · yil · onyil · yuzyil · belirsiz`, ve o
**hiç okunmuyor**.
🔴 İki sözlüğü birleştirmeye KALKMA — `CLAUDE.md` bunu *"aynı ad, iki
ayrık değer alanı"* diye kaydediyor. Sen yalnız EK OKUMA tarafını tanımla
ve çakışmayı **bildir**.

### ② d — İÇERİK YAZ, AMA AZ VE TAM
Tanımlar onaylanınca **her yeni tür için 1-2 örnek kayıt** yaz.
Külliyatı doldurmak senin işin değil; **türün nasıl doldurulacağını
göstermek** senin işin.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/ONERI-EKOKUMA-0907.md · denetim/EKOKUMA-YENI-0907.json
           oturumlar/EKOKUMA-0907.md
🔴 DEĞİL   data/*.js (KOŞU 8 · 7 Eylül 11:17:46 · ~16 s)
           js/app.js (YUK-FETCH-0907'de) · arac/*.py · kök *.md
```

## ④ SENİ BAĞLAYAN YASALAR
```
§1.6   8. boyut AÇILDI ama SIRALI — yalnız iki kalem
§4     kaynak GİZLENMEZ · TDV esas · `bulunamadı` bir SONUÇTUR
§11    devraldığın rakamı DOĞRULAMADAN aktarma (11/7 dâhil)
       alan icat etmeden önce var olup olmadığını ÖLÇ
       aynı ad iki ayrı sözlük taşıyabilir — birleştirme, BİLDİR
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "EKOKUMA-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.
🔴 **Tanımları BANA GETİR** — içerik yazmadan önce tanım onaylanmalı,
yoksa yanlış bir tanım üzerine on kayıt yazılır.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
gerçek başlık sayısı ÖLÇÜLDÜ (11 doğru mu?)
tanımsız olanların kaçı TANIMLANDI · her biri ÜÇ PARÇALI
her yeni tür için 1-2 örnek kayıt · kaynaklı
```
Teslim SAYIYLA: *"11 sanılıyordu, ölçüm N · tanımlanan M"*.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."   ⏳ "BEKLİYORUM: <ne>·<kimden>·<ne zaman>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "EKOKUMA-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
