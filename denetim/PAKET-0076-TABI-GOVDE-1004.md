# PAKET-0076-TABI-GOVDE-1004 — hat yaslamasında "tâbi taraf" körlüğü

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi (M-5813 cevabı). **Öneri; koda yazılmadı.**

## ① Tâbi gövdesi `kid`'e BÖLÜNMÜŞ mü? — CEVAP: Osmanlı'dan AYRI, ama kid'e göre BÖLÜNMEMİŞ
Kaynak: motorun kendisi, `arac/uret_petek.py:7546-7556`:
```
kayit["o"]  = Osmanlı DOĞRUDAN gövde
kayit["v"]  = havuza(mp_koord(gt), …)          ← tâbi gövde AYRI anahtar
# 🔴 NİÇİN GEOMETRİ BÖLÜNMÜYOR: `kayit["v"]` bütün tâbi toprağı TEK gövde olarak taşır
#   ve kimlik `unary_union` içinde kaybolur (:4730). … Gövdeyi kimliğe göre bölmek hem
#   pahalı hem de B2/köprü mantığını yeniden kurmayı gerektirirdi
kayit["vl"] = kid başına yalnız ETİKET ÇAPASI (nokta), geometri değil
```
İstemci (`js/app.js:3406` `tekVeri(d.v)`) bunu tek Feature olarak, `properties: {}` ile çiziyor.
⇒ Ne "AYRI" ne "GÖMÜLÜ" — üçüncü şık: **Osmanlı gövdesinden ayrı, ama bütün tâbiler tek birleşik gövde.**

## ② Kaç hat bu kökten yaslanamıyor? — 9 (267 E/F adayından)
Yöntem: hatların gerçek yükleyiciyle dökümü (node, 13 dosya, 801 kayıt, 450'si çizilebilir; E/F = 267)
+ `girdi.yukle()` ile hattın penceresindeki örnek günlerde (açılış günü + orta + son yıl, 213 gün)
tarafın sahipliği: taraf o gün hiçbir `s:` gövdesinde yok AMA bir `v:` kid'i olarak var ⇒ sayıldı.
```
d1812-ru-bg-prut              1812-06-23→1856-04-27  tâbi bogdan (4 nokta)                  ↔ rusya
d1856-ru-bg-prut-kuzey        1856-04-27→1859-01-24  tâbi bogdan (4)                        ↔ rusya
d1859-ru-rp-prut-kuzey        1859-01-24→1878-08-03  tâbi romanya (17)                      ↔ rusya
d1906-filistin-misir-hidivlik 1906-10-01→1914-12-18  tâbi misir-kavalali (57)               ↔ osmanli   ← H-0120
d1910-libya-tunus-osmanli     1910-05-19→1912-10-18  tâbi tunus-beyligi-fransiz (35)        ↔ osmanli   ← H-0118
d1923-libya-tunus             1912-10-18→1923-10-29  tâbi tunus-beyligi-fransiz (35)        ↔ italya
g3-bg-ro-dobruca-p1           1878-12-17→1880-01-01  tâbi bulgaristan-prensligi (12)        ↔ romanya
g3-bg-ro-dobruca-p2           1880-01-01→1881-03-26  tâbi bulgaristan-prensligi (12)        ↔ romanya
g3-bg-ro-dobruca-p3           1881-03-26→1908-10-05  tâbi bulgaristan-prensligi (12)        ↔ romanya-kralligi
```
⇒ H-0118/H-0120 tesadüfen görülen ikisiydi; kök **9 hatta**, 1812'den 1923'e yayılıyor.
⚠️ Yaklaşık ölçüm: örnek günler (bütün günler değil) ve `devletler2`nin tâbi kid'i için ayrı gövde
üretip üretmediği tarayıcıda değil, veriden çıkarıldı. d1859 Romanya satırı H-0037 yamasıyla kısmen
değişti (tâbilik artık 1877-05-09'da bitiyor). Gadames hattı (osmanli/cezayir-fransiz) bu 9'da YOK —
onun "yön doğrulanamadı" sebebi başka (sağ gövde şeritte 0 km²), ayrı ölçülmeli.

## Yama önerisi — ①'e bağlı: KOŞU İSTEMEZ, ama "bir kol eklemek" de YETMEZ
Dokuz hattın dokuzunda da hattın 100 km'lik şeridinde (`_D_YASLA_KM`) **tek** bir tâbi var (Prut
boyunda Boğdan/Romanya · Dobruca'da Prenslik · Libya sınırında Tunus · Sina'da Mısır). Yaslama zaten
şeritle sınırlı çalıştığı için birleşik `v` gövdesi şeritte o tâbinin kendisidir ⇒ gövdeyi kid'e
bölmeye (MOTOR kalemi) GEREK YOK. İki istemci değişikliği:
```
1. _dTarafGovdesi (d_katman.js:545): taraf o gün bir v: kid'i ise (ve devletler2'de gövdesi yoksa)
   donemler[aktifDonem].v → { poli, anahtar:"vassal:"+aktifDonem, hk:"vassal" } döndür.
   🔴 Güvenlik: aynı şeritte İKİ farklı tâbi kid'i varsa (vl çapalarından ölçülebilir) YASLAMA —
   atla ve "şeritte birden çok tâbi" diye atlanan'a yaz (yanlış tâbiyi kesmemek için).
2. _dYaslaUygula (d_katman.js:1050): bugün yalnız `osmanli` ve `devlet` kaynaklarını yazıyor ⇒
   `yeni.vassal` için `harita.getSource("vassal").setData(...)` kolu (osmanli koluyla aynı desen,
   _dOsmDegisti gibi bir _dVasDegisti bayrağıyla geri alma).
```
Sınav önerisi: 9 hattın her birinin penceresinde bir gün, `_dYaslaImza=null` + eşzamanlı
`_dYaslaGuncelle` → `_dYaslandiMi(id)` 0/9 → 9/9 (iki yönlü: yama öncesi 0 olmalı).
Bu, bugün üçüncü kez görülen `v:` körlüğünün istemci yüzü (koordinatörün sayımı: Değişmez 8 gövdesi
`.v`yi sabit etiket okuyor · 4c/4d yalnız `s:`+`isg:` okuyor).
