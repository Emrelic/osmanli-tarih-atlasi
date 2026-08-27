# BULGU — PAKET 0031-0032 · PAKET 0031-0032 oturumu (27 Ağustos 2026)

Kaynak paketler: `ClaudEmre\kutu\giden\parti-emrelic-0031` (22 madde, 24 Ağu 03:22)
ve `parti-emrelic-0032` (16 madde, 24 Ağu 11:07). Yayın şu an r3410, koşu 03:13'te
başladı (~06:45 bitecek) — koşu bitmeden verilen hükümler o günkü YAYINLANMIŞ
haritaya değil, bugünkü VERİYE göredir; koşu bitince yeniden gözden geçirilmeli.

Hüküm sözlüğü `oturumlar/PAKET-TASNIF.md §③`teki yedi kelimedir.

---

## ZATEN ÇÖZÜLMÜŞ — git log'da doğrulandı

### 0031/H-0015 — celayirli Sultan Ahmed maddesinde I. Ahmed portresi
**HÜKÜM: cozuldu**
GEREKÇE: `e17bdea` ("PORTRE AD CAKISMASI — 'PASA' BIR PADISAH UNVANI DEGILDIR,
0031/H-0015", 24 Ağu 10:43) — OPUS HAZIR KITA 84'ün 6064 maddelik taramasında
hipotez çürüdü ama Emre'nin bildirdiği kayıt o gün TEMİZ ölçüldü: "Celâyirli
Sultan Ahmed" / "Sultan Ahmed Celâyirî" eşleşmesi artık YOK.

### 0032/H-0008 — Merak butonu konu içeriğini basmıyor
**HÜKÜM: cozuldu**
GEREKÇE: `0775e1f` ("MERAK BUTONU ARTIK SORUYU BASIYOR, 0032/H-0008", 24 Ağu
20:59) — `kisa` alanı zaten doluydu (14/14), kusur alan seçimindeydi (`kisa`
yerine `soru` basılmalıydı); düzeltildi.

---

## ZATEN TEŞHİS EDİLMİŞ (SONNET HAZIR KITA 72, `denetim/BULGU-RENK-0031.md`, 24 Ağu) — UYGULANMADI

### 0031/H-0005 — "bu koyu kırmızı bölge hata mı?" (Vidin ilhakı, 1396-10-01)
**HÜKÜM: sirada**
NİÇİN: gerçek kusur, ama motor düzeltmesi gerekiyor (benim/bu oturumun yetkisi
dışı — `arac/uret_petek.py` yalnız Oturum 0 çalıştırır). `denetim/BULGU-RENK-0031.md`
canlı motorda nokta-içinde testiyle doğruladı: aynı Sırbistan parçası
(merkez [22.5677,43.1133]) 1388'de Osmanlı gövdesinin DIŞINDAYKEN 1396'da
İÇİNDE — 0030/H-0001 ile BİREBİR aynı mekanizma (devletler_harita.js ↔
donemler.js senkronsuzluğu). Ayrıca dünya çapında taranmış: 46 devlet,
550 devlet-dönem etkileniyor, 13'ü oran≥%10 (görsel olarak bariz).

### 0031/H-0017 — Gürcistan/Karakoyunlu rengi aynı mı?
**HÜKÜM: zaten-dogru**
GEREKÇE: `denetim/BULGU-RENK-0031.md` ΔE ölçtü — gurcistan #e020b0 ↔
karakoyunlu #e018e0 ΔE=25,69 (558 km), gurcistan ↔ iran #cc1664 ΔE=37,06
(339 km) — ikisi de eşiğin (12) 2-3 katı üstünde, PALET ÇAKIŞMASI DEĞİL.
Üç ayrı kimlik, üç farklı hex. Estetik not (isteğe bağlı, renk önerilmedi
çünkü `renkler.py` üretim koşusunda parmak izleniyor): üçü de aynı
magenta/pembe ailesinde, gözle ayırt etmek zor olabilir — bu bir SONRAKİ
palet turunun isteğe bağlı iyileştirme notu, kusur değil.

### 0031/H-0002 — "kırmızı harita renk örtüşmelerinin kalitesini artıralım" (Epir kıyısı, 1386-01-01)
**HÜKÜM: olculecek**
NE ÖLÇÜLECEK: `denetim/BULGU-RENK-0031.md` görseldeki taralı/çizgili şekli
incelemiş ama KESİNLEŞTİREMEMİŞ — işgal örtüsü mü (19. yy'a özgü, 1386'da
beklenmez) yoksa sefer/hareket güzergâhı oku mu belli değil. Canlı motorda
o günü (1386-01-01, Preveze/Vonitsa bbox) ayrıca sorgulamak gerekiyor.
İstek de kendisi belirsiz ("kaliteyi artıralım" — belirli kusur işaret
etmiyor); ısrarlıysa daha yakın zumlu/spesifik koordinatlı yeni görsel
istenmeli.

---

## YENİ ARAŞTIRMA — arka planda 4 paralel ajanla sürüyor

Kalan 33 madde (pkg31: H-01,03,04,06,07,08,09,10,11,12,13,14,16,18,19,20,21,22
· pkg32: H-01,02,03,04,05,06,07,16) dört tematik grupta araştırılıyor:
Timur/Fetret · Beylikler(Akkoyunlu-Karakoyunlu-Germiyan) · Osmanlı sınır
olayları(pkg31) · pkg32 tarihi/harita. Sonuçlar geldikçe bu dosyaya eklenip
tahtaya bildirilecek.

## pkg32 İÇERİK ZENGİNLEŞTİRME KÜMESİ (H-0009 · H-0010 · H-0011 · H-0012 · H-0013 · H-0014 · H-0015)

Hepsi "ek okuma / merak / magazin / sebeb-sonuç" butonlarının belirli
maddelere eklenmesini istiyor. Ölçtüm: `data/ekokuma.js` yalnız 10 kayıt,
`data/merak.js` yalnız 15 kayıt taşıyor — 6064 maddelik kronolojinin
küçük bir ilk turu. `MERAK.md` kendi kuyruğunu zaten tutuyor (④-⑪, henüz
yazılmamış) ve **④ madde birebir "Otranto seferi Fatih'ten sonra niçin
sürdürülmedi"** — yani H-0014'ün istediği zaten kayıtlı bir kuyruk maddesi.

### H-0009 — Topkapı Sarayı'na ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: içerik yazım işi, `EK-OKUMA.md`/`MERAK.md` şemasına uygun yeni kart
gerekiyor; "Topkapı Sarayı'nın tamamlanması" maddesi (`olaylar_ek7.js`)
zaten var ve `kaynak:"topkapi-sarayi"` TDV bağlantılı, ama merak/ek-okuma
kartı henüz yazılmamış.

### H-0010 — Sultani (ilk Osmanlı altını) maddesinde görsel padişah resmi değil, madenî para olmalı
**HÜKÜM: sirada**
NİÇİN: kendi metni zaten "bunun için bir oturum görevlendir" diyor — hangi
görselin konacağını araştırmak (madeni para görseli, telif durumu) ayrı
bir görev; ben yalnız teşhis/tasnif yapıyorum, görsel atamıyorum.

### H-0011 — Osmanlı altını maddesine ek okuma/merak/magazin
**HÜKÜM: sirada**
NİÇİN: H-0009 ile aynı sınıf — içerik yazım işi, kuyrukta değil ama şema
hazır, tek tek kart yazılması gerekiyor.

### H-0012 — Fatih'in ölümü maddesine iddiaları anlatan ek okuma
**HÜKÜM: sirada**
NİÇİN: madde (`olaylar.js:49`) zaten var ve zengin; ölüm iddialarını
(zehirlenme rivayeti vb.) ayrı bir "magazin"/"merak" kartı olarak yazmak
gerekiyor — içerik yazım işi.

### H-0013 — TÜM MADDELERE merak/ek okuma/sebeb-sonuç/magazin/dış yankılar
**HÜKÜM: sirada**
NİÇİN: kapsamı en geniş madde — 6064 maddenin tamamına içerik zenginleştirme,
tanım gereği tek turda yetişmez; ayrı, çok-oturumluk bir içerik fazı
gerektirir (bu paketin/oturumun kapsamı dışında, koordinatörün karar
vereceği bir sonraki faz).

### H-0014 — Otranto tahliyesine ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: `MERAK.md` kuyruğunda ④ olarak ZATEN kayıtlı ("Otranto seferi
Fatih'ten sonra niçin sürdürülmedi") — yeni bir madde değil, var olan
kuyruğun yazılmasını bekliyor.

### H-0015 — Gedik Ahmet Paşa'ya ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: H-0009/H-0011 ile aynı sınıf, içerik yazım işi; Gedik Ahmed Paşa
zaten birden fazla maddede (`kaynak:"gedik-ahmed-pasa"`) geçiyor, ayrı bir
kişi/magazin kartı yazılabilir ama bu turun kapsamı dışı.

---

*Bu dosya araştırma ilerledikçe güncellenecek. Ölçmediğim her şey açıkça
"ölçmedim" diye işaretlenecek — CLAUDE.md §11.*
