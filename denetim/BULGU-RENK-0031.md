# BULGU-RENK-0031 — SONNET HAZIR KITA 72, görev M-1204 (24 Ağustos 2026)

Dört madde: 0030/H-0001 (önceki teslim, `denetim/BULGU-ANADOLU2-0030.js`),
0031/H-0002 · H-0005 · H-0017. Hiçbiri veriye/motora yazılmadı — bu bir
teşhis raporudur.

## Yöntem
- `py arac/renk_olc.py` ve `--ayrinti` koşuldu (mevcut denetim önce
  denendi, sıfırdan ölçüm yazılmadı).
- H-0005 ve H-0017 için canlı motoru localhost'ta çalıştırıp (WebGL
  beklemeden, `devletGuncelle`/`donemler`/`petekVerisi`/`noktaIcinde`
  fonksiyonlarını doğrudan çağırarak) 0030/H-0001'de kullandığım AYNI
  yöntemle nokta-içinde testleri yapıldı.
- ΔE hesapları `arac/renk_olc.py`nin kendi `lab()`/`dE()` fonksiyonlarıyla
  yapıldı — yeni bir ölçüt icat edilmedi.

---

## H-0005 — "bu koyu kırmızı bölge hata mı?" (1396-10-01, Vidin'in ilhakı)

**HÜKÜM: AYNI KUSUR — 0030/H-0001 ile BİREBİR AYNI MEKANİZMA, doğrulandı.**

① NE ÖLÇTÜM: görsel Niş-Sofya arasındaki aynı bölgeyi gösteriyor
(bbox 21.85-23.51°D/42.33-43.79°K) — 0030/H-0017'de incelediğim TAM O
Sırbistan parçası (alan 0.7111375, 33 halka noktası, merkez
[22.5677,43.1133]). O görevde (1388-08-27 kesitinde) bu nokta Osmanlı
petek gövdesinin İÇİNDE DEĞİLDİ — saf "uzak nokta emer" (§2) durumuydu.
**Bu sefer (1396-10-01) AYNI parçanın AYNI merkez noktası Osmanlı'nın
petek gövdesinin İÇİNDE ÇIKTI** (`noktaIcinde` testi: true, feature
idx 0, ring 4). Sırbistan'ın kendi geometrisi (`devletler_harita.js`)
1388→1396 arasında BİR MİLİMETRE DEĞİŞMEMİŞ (alan değeri ondalığına
kadar aynı) — ama Osmanlı'nın petek gövdesi (`donemler.js`) o sekiz
yılda büyüyüp AYNI TOPRAĞI içine aldı.

② CIKARDIĞIM HÜKÜM (ayrı satır): kusur tek bir kayıtta değil, tıpkı
0030/H-0001'de olduğu gibi MOTORUN İKİ AYRI ÜRETİM HATTININ
(`devletler_harita.js` — yabancı devlet peteği vs `donemler.js` —
Osmanlı/tâbi peteği) SENKRONSUZLUĞUNDA. Ve daha da önemlisi: Sırbistan'ın
bu parçası zaman içinde HİÇ GÜNCELLENMİYOR gibi görünüyor — Osmanlı
topraklarının Balkanlar'da genişlemesi bu sabit Sırp peteğini
küçültmüyor, üstüne biniyor. Bu, tek günlük bir kaza değil, SÜREGELEN
bir desen olabilir — MOTOR'a bakan oturum ikisini (0030/H-0001 ile
0031/H-0005) aynı kökten mi diye incelemeli.

## H-0017 — "Gürcistan ve Karakoyunlular aynı renk mi?" (1417-01-01)

**HÜKÜM: PALET ÇAKIŞMASI DEĞİL (ΔE≥12 eşiğini rahatça geçiyor) — AMA
alet bu çifti hiç KURMUYOR, "temiz" raporu buradan gelmiyor.**

① NE ÖLÇTÜM: görselde "GÜRCİSTAN" pembe/macenta bir alanda, hemen
doğusunda (Tebriz civarı) "İRAN" etiketli, GÖZLE benzer tonda başka bir
alan var. Ekrandaki gerçek komşu "karakoyunlu" değil "iran" (kimlik
anahtarı) — ama şikayetteki "Karakoyunlular" ifadesi muhtemelen aynı
bölgeyi (Tebriz/Azerbaycan, tarihsel Karakoyunlu sahası) kastediyor,
bu yüzden İKİ olası çifti de ölçtüm:
```
gurcistan #e020b0  ↔ karakoyunlu #e018e0   ΔE = 25,69   en yakın mesafe ≈ 558 km
gurcistan #e020b0  ↔ iran        #cc1664   ΔE = 37,06   en yakın mesafe ≈ 339 km
```
(Mesafeler parça merkezleri arasında haversine ile, 1417-01-01 kesitinde,
canlı veriden — Gürcistan 1 parça, Karakoyunlu 11 parça, İran 17 parça;
en yakın parça çiftleri kullanıldı.) Her iki çift de EŞZAMANLI (aynı gün
aktif) ve `renkler.py`nin kendi "<600 km" tam-hex-paylaşım eşiğinin
İÇİNDE (338 ve 558 km) — ama renkler AYNI HEX DEĞİL, iki FARKLI (ama
akraba) macenta tonu. `py arac/renk_olc.py --ayrinti` koşuldu:
`gurcistan` çıktısında `karakoyunlu` ya da `iran` HİÇ GEÇMİYOR — yani
alet bu çifti hiç KURMUYOR (M-1204'ün uyarısı burada doğrulandı: "alet
KURUYOR MU" sorusunun cevabı HAYIR). Aracın "temiz" demesi bir şey
KANITLAMIYOR çünkü alet bu soruyu hiç sormuyor.

② CIKARDIĞIM HÜKÜM (ayrı satır): kullanıcının "aynı devlet mi" sorusuna
cevap KESİN HAYIR — üç ayrı kimlik (`gurcistan`/`karakoyunlu`/`iran`),
üç farklı hex, ΔE her ikisinde de eşiğin (12) iki-üç katı üzerinde,
teknik olarak "çakışma" DEĞİL. Ama bu bir KALİTE meselesi olarak
GEÇERLİ: üçü de aynı magenta/pembe AİLESİNDE, birbirine coğrafi olarak
yakın (300-600 km) konumlandırılmış — terrain dokulu, küçük ölçekli bir
ekranda gözle ayırt etmek gerçekten zor olabilir. Bu ΔE≥12 kuralının
KENDİSİNİN sınırını gösteriyor: eşiği geçen bir çift bile aynı AİLEDEN
ise (ikisi de macenta) göz için yeterince ayrışmayabilir. **Renk
ÖNERMİYORUM** (par.7: `renkler.py` üretim koşusunda parmak izleniyor,
dokunmadım) ama bir ÖNERİ olarak not düşüyorum: `iran` ya da
`karakoyunlu`nun tonu (macenta ailesinden çıkıp) turuncu/kahve
ailesine kaydırılırsa hem Gürcistan'dan hem birbirinden görsel olarak
daha uzaklaşır.

## H-0002 — "kırmızı harita renk örtüşmelerinin kalitesini artıralım" (1386-01-01, Epir kıyısı)

**HÜKÜM: BU GÖRSELDE AÇIK BİR RENK/KATMAN KUSURU BULAMADIM — muhtemelen
farklı bir şey gösteriyor, kanıt yetersiz.**

① NE ÖLÇTÜM: görselde Preveze-Vonitsa arasındaki körfezde (Arta Körfezi)
lacivert, ÇİZGİLİ/TARANMIŞ, ok/şevron biçiminde bir şekil var — bu
`js/app.js:1054`teki `isgal-dolgu` (işgal örtüsü, `fill-pattern`)
katmanının GÖRSEL İMZASINA benziyor (taralı dolgu). AMA koddaki işgal
örnekleri (Bosna 1878, Mısır 1882+) 19. yüzyıla ait; 1386'da bir işgal
durumu olması BEKLENMEZ — bu yüzden bunun işgal mi yoksa başka bir
katman (sefer/hareket güzergâhı oku — önceki M-1169 görevimde `savaslar.js`
antlaşma/sefer işaretlerinin ok/şevron benzeri simgeler kullandığını
görmüştüm) mı olduğunu KESİNLEŞTİREMEDİM; zaman kısıtı nedeniyle
canlı motorda bu spesifik günü (1386-01-01, Preveze/Vonitsa) ayrıca
sorgulamadım. Görseldeki "BİZANS" (gri-mor, #0f0f5d düşük opaklıkla
terrenin üstünde) ile "NAPOLİ / İKİ SİCİLYA" (pembe, taralı kenarlı)
arasında ise KOMŞULUK doğal ve renkleri objektif olarak farklı
(lacivert aile vs pembe aile) — burada bir çakışma göremedim.

② CIKARDIĞIM HÜKÜM (ayrı satır): bu madde, isteğin kendisi VAJENDİ
("kaliteyi artıralım" — belirli bir kusur işaret etmiyor) ve ekteki
görsel net bir örtüşme deseni GÖSTERMİYOR (0030/H-0001 ve 0031/H-0005'in
aksine, burada iki dolgu aynı pikselde çakışmış gibi görünmüyor). EMİN
DEĞİLİM — "hala-açık" olarak bırakıyorum ama bunu bir "kusur" diye
damgalamak için kanıtım yok. ÖNERİ: eğer bu madde ısrarla önemliyse,
daha yakın zumlu / spesifik bir koordinat+tarih işaret eden yeni bir
görsel istenebilir.

---

## Özet tablo

| Madde | Hüküm | Kanıt türü |
|---|---|---|
| 0030/H-0001 (önceki teslim) | GERÇEK KUSUR — motor senkron sorunu | canlı ölçüm, nokta-içinde testi |
| 0031/H-0005 | **AYNI KUSUR** (0030/H-0001 ile) | canlı ölçüm, nokta-içinde testi, iki farklı tarih karşılaştırıldı |
| 0031/H-0017 | Palet çakışması DEĞİL, ama alet bu çifti kurmuyor — kalite notu | ΔE hesabı (25,69 · 37,06) + mesafe (558 km · 339 km) |
| 0031/H-0002 | Kanıt yetersiz, muhtemelen farklı bir katman (sefer/işgal) | görsel inceleme, doğrulanmadı |
