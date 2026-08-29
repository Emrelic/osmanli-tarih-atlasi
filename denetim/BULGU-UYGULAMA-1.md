<!-- DURUM: OLCULDU ¦ 2026-08-30 ¦ UYGULAMA-1 (eski: TASNİF-D) — GECE PARTİSİ eklendi -->
# BULGU — UYGULAMA-1 (TASNİF-D'nin 🟠/🔵 kovasının uygulanması)

**Oturum:** UYGULAMA-1 (eski adı TASNİF-D) · **Şartname:** ORHANGAZİ'nin tahta
mesajı ("UYGULAMA-1 — artık tasnif değil, İŞ")
**Kapsam:** kendi tasnif ettiğim `parti-emrelic-0027…0031`nin 🟠 (8 madde) ve
🔵 (12 madde) kovaları — TOPLAM 20 madde. Kaynak: `denetim/BULGU-TASNIF-D.md`.
**Dosyalarım:** `data/yer_yama_uyg1.js` (`window.YER_YAMA_UYG1`) ·
`denetim/HUKUM-UYGULAMA-1.json` · bu dosya.
🔒 Koşu 2 koşuyor — `arac/*.py`ye dokunmadım. `data/*.js` yazdım ama bu koşuya
girmiyor, bir sonrakine kalıyor.

---

## ① UYGULANDI (TAM) — 2 madde (denetim/HUKUM-UYGULAMA-1.json'a da yazıldı)

```
0031/H-0003 (+tekrar: H-0008)   Bağdat: timurlu 1401-1405 ara-dönemi eklendi   → data/yer_yama_uyg1.js
0031/H-0016                     Şeyh Bedreddin isyanı koordinatı düzeltildi    → data/savaslar.js (satır içi)
```
İkisi de Değişmez 1 (süreklilik) ve Değişmez 2 (±30 gün) için node ile
sınandı — ayrıntı `yer_yama_uyg1.js` içindeki `gun_dogrulama:` alanlarında.

---

## ② UYGULANDI (KISMİ), ASIL ŞİKÂYET AÇIK KALDI — 1 madde

### 0029/H-0002 — Sivrihisar'ın Germiyan ataması
`data/yer_yama_uyg1.js`'e Sivrihisar'ın **1402-1413** parçası yazıldı
(Fetret şehzadeleri → `karaman`, TDV `sivrihisar` + `karamanogullari` ile
sourced, iki kardeş kayıtla — Kırşehir/Beyşehir — artık tutarlı).

🔴 **AMA bu, orijinal 0029/H-0002 şikâyetinin KENDİSİNİ çözmüyor.** Şikâyetin
görseli **1301-06-15** kesitindeydi ve "iki kopuk parça" görüntüsünü üreten
şey Sivrihisar'ın **1300-1354 "germiyan"** ataması — TDV'ye göre bu da yanlış
(Sivrihisar bu dönemde Karaman'daydı, Osmanlı 1356'da fethetti). Bu parçayı
**uygulamadım**: gerekli üç günün (1356-01-01 · 1362-01-01 · 1363-01-01)
yalnız biri (1363) çekirdekte maddeli; 1356 en yakın maddeden **366 gün**,
1362 **59 gün** uzakta — uygulanırsa İKİ YENİ açık kırılma (Değişmez 2 ihlali)
üretirdim.
⇒ **HÜKÜM: sirada kalıyor.** `yer_yama_uyg1.js`nin Sivrihisar kaydındaki
`not:` alanında tam gerekçe var — bir sonraki oturum (KRONOLOJİ İÇERİK)
1356/1362 için ±30 gün içine düşen madde yazarsa (ya da TDV'den daha kesin
gün bulursa) bu parça da bitirilebilir.

---

## ③ DEVREDİLDİ — yeni nokta gerektiriyor, `yer_yama` dosyama YAZILMADI

Kural ORHANGAZİ'nin kendi mesajında: *"Kayıt YOKSA bu bir YENİ NOKTA'dır,
`yer_yama`'ya YAZILMAZ — `yerlesimler_*` koordinatörde, bana devret."*

```
0028/H-0001   Kırım bozkırı, 1504-01-01, 47,19-47,96K/32,10-33,64D — 0 nokta.
              4 aday 117-149 km uzakta (ek_bozkir.js'in DIŞINDA, dördüncü
              bir boşluk). Canlı haritada gerçekten boş mu (Browser
              açılamadı) TEYİT gerekiyor önce.
0030/H-0013   Selanik/Üsküp seyrek tohum. Aday şehirler VAR (Kumanova ·
              Kalkandelen · Üstrumca · İştip · Köprülü · Kırçova · Kratova)
              ama kuruluş/dönem/TDV araştırması hiç yapılmadı — ayrı bir
              NOKTA-EKLEME araştırma turu gerekiyor.
0028/H-0007   Kuzey Afrika/Sahra nokta yoğunluğu — VERİ SAHİPLİK'in kendi
              HUKUM-VERI-SAHIPLIK.json'unda zaten "ayrı bir Sahra nokta
              yoğunluğu projesi gerekiyor, tek maddelik yama değil" diye
              kayıtlı. Tek madde olarak uygulanamaz.
```

---

## ④ DEVREDİLDİ — motor/`arac/uret_petek.py` sorusu, koşu kilidi altında

`arac/*.py` bu koşuda YAZILAMIYOR (§7 + koşu 2 kilidi). Sekizi de bir MOTOR
oturumunun ölçüm+kod işi (ikisi zaten aynı kökten):

```
0029/H-0007 + 0030/H-0002   Boğaz ızgara çözünürlüğü ailesi (İstanbul) —
                            kök bulundu (BULGU-MOTOR-SU.md), 4 çare adayı
                            yazılı, Ⓒ öneriliyor, HİÇBİRİ uygulanmadı.
0030/H-0001 + 0031/H-0005   Bizans/Osmanlı çift-istem (devletler_harita.js
                            ile donemler.js aynı günde bağımsız Voronoi
                            üretiyor) — BULGU-RENK-0031.md'de 46 devlet/550
                            devlet-dönem etkilendiği doğrulanmış, BÜYÜK.
0030/H-0007                 Saroz — ızgara teorisiyle açıklanamıyor, "düz-hat
                            süzgeç" ölçümü hâlâ yapılmadı.
0030/H-0017                 Niş/Sırbistan — "şüpheli" boşluk, sırt-yaslama
                            mesafeyi açıklıyor mu ölçülmedi.
0031/H-0002                 Preveze/Vonitsa "kırık" (bowtie) taralı bölge —
                            kendi kendini kesen bir poligon olabilir; görsel
                            AÇTIM (H-0002-1.png), motor ölçümü hâlâ YOK.
0031/H-0019                 Germiyan eğri plan — MOTOR daha önce ölçtü ama
                            görselde tarih damgası yoktu, sonuç belirsiz
                            kaldı; tarihli yeni görüntüyle tekrar ölçülmeli.
```

---

## ⑤ DEVREDİLDİ — arayüz (`js/app.js`) kod işi

```
0030/H-0003   İttifak rozeti — TASARIM TAM (ITTIFAK-TASARIM.md, d9b255e),
              KOD YAZILMADI. 4 karar sorusu koordinatöre açık (dosyada).
0030/H-0010   Çorlu/Lüleburgaz + Yeniçeri Ocağı aynı gün — tam çözüm
              (her maddenin ayrı oynatılması) js/app.js değişikliği
              gerektiriyor; veri tarafı (Yeniçeri tarihini birkaç ay
              kaydırmak) da benim dosyam değil (olaylar_ek*.js).
```

---

## ⑥ DEVREDİLDİ — hazır dosya var, yalnız `girdi.py`ye bağlanmayı bekliyor

```
0031/H-0014   Akkoyunlu'nun 27/161 dönemi kendi ömrünün (t:1514) dışına
              taşıyor. data/yerlesimler_kafkas_duzeltme.js (21 Ağustos,
              19 kayıt, TDV ile sınanmış) ZATEN HAZIR ama arac/girdi.py
              GIRDI_DOSYALARI'na bağlanmamış — `arac/*.py` bu koşuda
              yazılamıyor (§7 + koşu 2 kilidi), ben bağlayamam. Koordinatör
              daha önce bunu "yayından sonraki ilk veri kalemi" diye
              sıraya almıştı (bkz. TASNİF-D ölçümü) — yalnızca hatırlatıyorum.
```

---

## ⑦ 🟢 YENİDEN SINIFLANDI — sahiplik hatası DEĞİL, muhtemelen etiketleme

### 0031/H-0004 — İran'ın 1393'te iki parça "İRAN" görünmesi
TASNİF-D'de bunu `sahiplik-teyidi` kümesine koymuştum. **Bu tur ölçtüm ve
hüküm DEĞİŞTİ:**
```
Isfahan/Erdistan (görseldeki güney "İRAN" bloğu) 1393-08-29'da `timurlu`
Hemedan/Tahran kuşağı (görseldeki kuzey "İRAN" bloğu) muhtemelen `muzafferi`
İkisinin de data/yerlesimler.js zinciri TEMİZ ve TUTARLI (ilhanli→incu/
muzafferi→timurlu→karakoyunlu→akkoyunlu→safevi..., node ile sınandı) —
sahiplik verisinde HATA YOK.
```
`devletler.js`de `muzafferi` kaydının `bolge:"iran"` alanı var; `js/app.js`
`devletAdi()` fonksiyonu `id`/`harita` üzerinden `ad:` döndürüyor (bu ikisi
doğru çalışıyor gibi görünüyor — "Muzafferî Hanedanı" dönmeli, "İran" değil).
⇒ **ÇIKARIM (ölçümden ayrı satır):** görseldeki iki ayrı "İRAN" etiketi
muhtemelen `bolge:` alanının bir yerde (henüz bulamadığım bir etiket/lejant
kodunda) devlet adı yerine gösterilmesinden kaynaklanıyor olabilir — YA DA bu
iki disconnected toprak parçası gerçekten `muzafferi`/`timurlu`'nun tarihen
GERÇEK parçalı hâlidir (Akkoyunlu'nun "iki parça" emsaliyle aynı sınıf) ve
etiket bölge düzeyinde okunduğu için ikisinde de aynı isim çıkıyorsa bu bir
TASARIM, hata değil.
⚠️ **KESİN ÇÖZEMEDİM** — `js/app.js`'te etiket metninin tam olarak nereden
geldiğini (devlet adı mı, `bolge:` mi) izleyemedim, ARAYÜZ oturumunun işi.
**KÜME DEĞİŞTİ: sahiplik-teyidi → etiketleme.**

---

## ⑧ 🔵 KÜMEYE GİT — hâlâ açık, sahibi yok

```
0030/H-0014   "Dış devlet haberleri hangi kuralla sızıyor" — cevap: KURAL
              YOK, editoryal takdir (SONNET HAZIR KITA 73 tam ölçtü, M-1190).
              Bu bir tasarım kararı (Emre/koordinatör) + ayrı bir dünya-tarihi
              boşluk taraması gerektiriyor (icerik-talebi kümesi, sahipsiz).
```

---

## ⑨ EK İŞ GEREKMİYOR — zaten doğru rotada

```
0030/H-0018   Kayseri-Sivas-Elbistan boş üçgen — MOTOR (M-1202) zaten NOKTA
              oturumuna sevk etmiş, doğru rota. TASNİF-D'de "Teke/Antalya"
              yanlış alarmını görsel açarak çürütmüştüm (koordinatlar
              38,19-38,97K/36,17-36,64E, tam Kayseri-Sivas — Antalya değil).
              Bu turda ek iş yok, sevk zaten yerinde.
```

---

## ⑩ ÖZET SAYIYLA — 20/20 madde işlendi

```
UYGULANDI (tam)                2   0031/H-0003(+H-0008) · 0031/H-0016
UYGULANDI (kısmi)               1   0029/H-0002
DEVREDİLDİ — yeni nokta          3   0028/H-0001 · 0028/H-0007 · 0030/H-0013
DEVREDİLDİ — motor               8   0029/H-0007 · 0030/H-0001 · 0030/H-0002 ·
                                     0030/H-0007 · 0030/H-0017 · 0031/H-0002 ·
                                     0031/H-0005 · 0031/H-0019
DEVREDİLDİ — arayüz              2   0030/H-0003 · 0030/H-0010
DEVREDİLDİ — girdi.py bağlantısı 1   0031/H-0014
YENİDEN SINIFLANDI               1   0031/H-0004 (→ etiketleme)
SAHİPSİZ KALDI                   1   0030/H-0014
EK İŞ GEREKMİYOR                 1   0030/H-0018
                                ──
                                20
```

---

## ⑪ GECE PARTİSİ (30 Ağustos) — `oturumlar/GECE-VERI.md`'nin ilk 11 maddesi

**Koşu CANLI** — `arac/`ye dokunulmadı. Dosyam: `data/yer_yama_gece_v1.js`
(`window.YER_YAMA_GECE_V1`).

```
UYGULANDI (tam)                  1   parti-0006/H-0001'in bıraktığı
                                     Bahreyn zinciri — Manama kaydına
                                     6 yeni dönem eklendi (1417-1861)
ZATEN-DOĞRU (bayat/çürüdü)        7   0008/H-0003 (Divriği·Arapkir·Malatya,
                                     zaten düzeltilmiş) · 0008/H-0009-12+14
                                     (5 madde, aynı bulgunun kopyası, 3 somut
                                     örnek 8 Ağustos'ta kapanmış) ·
                                     0019/H-0048 (Şam/Beyrut/Tedmur, ihtimal
                                     kapandı)
SIRADA (kısmen açık/devir)        1   0019/H-0056 — (A) çürüdü/kapandı,
                                     (B) yeni nokta gerektiriyor, devredildi
DEVREDİLDİ (yeni nokta)           1   0019/H-0026 (Arnavutluk/İskender Bey)
DEVREDİLDİ (farklı görev tipi)    1   0013/H-0001 (akademik kaynak listesi —
                                     yer_yama şemasına uymuyor)
                                ──
                                11
```

### En değerli bulgu — Manama (Bahreyn)
`p0006/H-0001`'in notu 20 Ağustos'ta zaten şunu bulmuştu: altı kırılmanın
(1521 Portekiz · 1602 Safevî · 1717 Umman · 1753 Âl-i Mezkûr · 1783 Âl-i
Halîfe · 1861 İngiltere) hepsi `data/olaylar_ek13.js`de TDV kaynaklı olarak
YAZILIYDI, ama `data/yerlesimler.js`deki Manama kaydının `s:` dizisi hâlâ
BOŞTU (yalnız 1861-1923 vardı). On gün sonra bile hâlâ düzeltilmemişti —
bu tur uyguladım: 1417 (Cebrîler) ile başlayıp yedi devlet kimliğiyle
1923'e kadar kesintisiz bir zincir yazdım, altı yeni kırılma günü de
çekirdekte 0 gün farkla zaten maddeli. İKİ ŞEY BİLEREK ATLANDI (`not:`
alanında tam gerekçeli): 1281-1417 arası (TDV üç öncül hanedan sayıyor ama
tarih vermiyor) ve 1559 Osmanlı seferi (TDV ile batı literatürü sonucun
kendisinde çelişiyor, önceki oturum zaten "seçim yapılmadı" diye bırakmış,
ben de tek taraflı seçmedim).

### "Aynı bulgu 5 kere kopyalanmış" deseni — 0008/H-0009…H-0014
Bana atanan 11 maddenin 5'i (H-0009, H-0010, H-0011, H-0012, H-0014)
**birebir aynı not metnini** taşıyordu — sekiz orijinal şikâyetin sekizinin
de aynı kök sebebe (1281'de 101 boş 5°×5° hücre, ~%81'i "veri yok") çıktığı
tek bir bulgunun 5 farklı H-numarasına kopyalanmış hâli. Üç somut örnek
zaten 8 Ağustos'ta kapanmış; kalan genel bulgu belirli bir kayıt adı
taşımadığı için yer_yama ile PATCH edilecek bir madde değil — nokta
partisi işi. Beşini de tek bir hükümle kapattım, ayrı ayrı "araştırma"
yapmadım (zaten yapılmıştı).

---

## ⑫ GECE PARTİSİ 2. TUR — ORTADAKİ 11 madde (devir, M-1717)

Beş oturum ölü çıkınca UYGULAMA-2'nin VERİ kovasının ortadaki 11 maddesi de
bana geçti (UYGULAMA-2 hiç başlamamış, `git log -- data/yer_yama_gece_v2.js`
boş). Aynı dosyaya (`data/yer_yama_gece_v1.js`) yazdım.

```
UYGULANMAYA ÇALIŞILDI, GERİ ÇEKİLDİ    1   0031/H-0007 (Mersin)
ZATEN-DOĞRU                              2   0033/H-0016 · 0019 ailesiyle
                                            aynı desen
DEVREDİLDİ (yeni nokta)                  4   0033/H-0007·H-0008·H-0009·H-0014
DEVREDİLDİ (büyük araştırma/başka görev) 3   0021/H-0028 · 0025/H-0009 ·
                                            0033/H-0019
DEVREDİLDİ (etiketleme/ARAYÜZ)           1   0034/H-0001
                                        ──
                                        11
```

### En öğretici an — Mersin'de KENDİ kaydımı geri çektim
TDV+devletler.js'in kendi kronolojisinden (1352 kuruluş → 1517 Osmanlı
tâbiliği → 1608 doğrudan eyalet) üç fazlı, dikkatle kaynaklı bir düzeltme
yazdım. `_sahiplik_uygula.py` çakışma verdi: `data/yer_yama_p35.js`'te
ZATEN bir kayıt vardı, o da aynı kusuru (Mersin'in `d:` 1352'den başlaması)
düzeltiyordu ama DAHA BASİT bir modelle (ramazanoglu → 1516-08-24
Mercidabık'ta doğrudan Osmanlı, tâbi ara-dönemi yok). Tarsus ve Adana'yı
(aynı beylik, komşu kayıtlar) canlı veriden kontrol ettim: İKİSİ DE bu
BASİT deseni kullanıyor. Benim üç-fazlı modelim tarihen daha nüanslı
olabilirdi ama Mersin'i iki kardeşinden FARKLI bir desene sokup YENİ bir
tutarsızlık üretecekti — üstelik 1608 sınırım Değişmez-2'yi 70 gün aşıyordu
(en yakın çekirdek maddesi 'Oruç Ovası zaferi', 1607-10-23). Kardeş-kayıt
tutarlılığını esas aldım, kendi kaydımı YAZMADAN geri çektim — Sivrihisar
ve Bağdat'ta uyguladığım aynı ilke.

### 0033/H-0016 — "sıra yanlış mı" sorusuna doğrudan ölçümle cevap
Kullanıcı Erzurum/Aşkale/Palu/Siverek/Urfa'dan ÖNCE Bitlis/Diyarbakır/
Silopi/Nusaybin'in fethedilip fethedilmediğini sormuştu. Canlı veriden
sıra çıkarıldı: Silopi/Nusaybin (1515-01-01) → Bitlis (1515-09-15) →
Palu/Siverek/Urfa (1516-05-01) → Erzurum (1518-01-01) — güneyden kuzeye,
coğrafi ve tarihen tutarlı bir ilerleme. Enklav yok, hata yok.

