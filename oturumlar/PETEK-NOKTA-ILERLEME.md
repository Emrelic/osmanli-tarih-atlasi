# PETEK / NOKTA — ilerleme ve teslimat

**Oturum:** PETEK/NOKTA · 3 Ağustos 2026 · Opus
**Görev tanımı:** `oturumlar/PETEK-NOKTA-GOREV.md` + koordinatörün 2. parti sevki
**Yazdığı dosyalar:** `data/yerlesimler_kirim.js` · `data/yerlesimler_seyrek.js` · bu dosya

| parti | konu | dosya | durum |
|---|---|---|---|
| 1 | Kırım — 9 nokta | `yerlesimler_kirim.js` | 🟢 **KAPANDI**, bağlanabilir |
| 2a | Çöl / bozkır — 7 nokta (listenin ilk 5'i) | `yerlesimler_seyrek.js` | 🟢 **HAZIR** |
| 2b | Rumeli/Anadolu maddeleri | `yerlesimler_seyrek.js` | 🔵 sürüyor |

⚠️ `yerlesimler_seyrek.js` 2b ile **DEĞİŞECEK** — bağlamadan önce 2b'nin
teslimini bekle, yoksa koşu bayat girdiyle çalışır (`CLAUDE.md §7`).
`yerlesimler_kirim.js` ise donmuştur, bugün bağlanabilir.

**Durum:** 🟢 Parti 1 ve 2a HAZIR — Oturum 0 alabilir.
🔴 Commit/push YAPILMADI · `uret_petek.py` ÇALIŞTIRILMADI · başka hiçbir
dosyaya dokunulmadı (`yerlesimler*.js`'in hiçbiri, `arac/`'ın hiçbiri).

---

## ① KIRIM — 9 nokta eklendi

`data/yerlesimler_kirim.js`, `window.YERLESIMLER_KIRIM`, 9 kayıt.
🔴 **Henüz canlı değil:** `arac/girdi.py` → `GIRDI_DOSYALARI` listesine
EKLENMEDİ. Bağlamayı Oturum 0 yapar.

### A) Han toprağı — Bahçesaray zincirinin birebir aynısı

| ad | lat, lon | tür | k | TDV dayanağı |
|---|---|---|---|---|
| Gözleve (Kezlev) | 45,1904 · 33,3669 | liman | 0 | `kirim` (sahil şehirleri listesi) + `han-camii` ("Kırım Gözleve'de bulunan Mimar Sinan yapısı cami") |
| Or Kapı (Ferahkirman) | 46,1600 · 33,6900 | kale | 0 | `kirim`: "Orkapı'daki Ferahkirman adlı kale", 1538'de Sâhib Giray inşa ettirdi |
| Akmescid | 44,9521 · 34,1024 | şehir | 0 | `akmescid` (müstakil madde) — kalgay sultanlarının merkezi |
| Karasubazar | 45,0556 · 34,6000 | şehir | 0 | `karasubazar` (müstakil madde) — Şirin beylerinin merkezi |
| Eski Kırım (Solhat) | 45,0281 · 35,1078 | şehir | 0 | `kirim` — yarımadaya adını veren yer |

**Ortak zincir** (Bahçesaray kaydından birebir kopya, yeni gün açılmadı):
```
s: 1281-01-01→1441-01-01 altinorda · 1441-01-01→1475-06-06 kirim
   1771-07-01→1774-07-21 rusya · 1774-07-21→1783-04-19 kirim
   1783-04-19→1923-10-29 rusya
v: 1475-06-06→1771-07-01  "Kırım Hanlığı"       d: []
```

### B) Kefe sancağı sahili — Kefe zincirinin birebir aynısı

| ad | lat, lon | tür | k · m | TDV dayanağı |
|---|---|---|---|---|
| Sudak (Suğdak) | 44,8494 · 34,9747 | liman | 3 · Kefe | `kefe`: sancağın beş kazasından biri |
| Balaklava (Cembalo) | 44,5000 · 33,5997 | liman | 4 · Kefe | `kefe`: "Balıklava ve İnkerman idarî olarak Mangub'a bağlıydı" |
| Yalta | 44,4952 · 34,1663 | liman | 4 · Kefe | `kirim`: sahil şehirleri listesi |
| Aluşta | 44,6764 · 34,4103 | kale | 4 · Kefe | `kirim`: sahil şehirleri listesi |

**Ortak zincir:**
```
s:   1281-01-01→1475-06-06 ceneviz · 1783-04-19→1923-10-29 rusya
d:   1475-06-06→1783-04-19                (Osmanlı DOĞRUDAN)
isg: 1771-07-01→1783-04-19 rusya, kaynak:"kirim"   (de facto işgal örtüsü)
```

Ayrımın kaynağı TDV `kirim`in tek cümlesi:
> "Kerç'ten itibaren Balıklava'ya kadar uzanan sahiller doğrudan Osmanlı
> kontrolü altına alındı."

⇒ Sahil şeridi Osmanlı koyu tonu, iç toprak tâbi açık tonu. Bugüne kadar bu
ayrımın haritada TEK tanığı Kefe ile Kerç'ti ve ikisi de doğu ucundaydı;
sahilin batı yarısı Bahçesaray'ın peteğine düşüp **han toprağı** boyanıyordu.

### Kabul ölçütü — canlıymış gibi ayrıca koşturuldu

`CLAUDE.md §1.5` tablosu bayat (`951 nokta` diyor, gerçek **1579**), o yüzden
"denetle.py temiz" ölçüt olarak alınmadı; sekiz kontrol partiye özel koşuldu:

```
① ayrıştırma  girdi.py'nin KENDİ okuyucusuyla 9/9 kayıt      ✓
② alan kütüğü BILINEN_ALANLAR dışı alan YOK                  ✓
③ renk        altinorda·ceneviz·kirim·rusya → 4/4 BOYALAR'da  ✓  YENİ RENK YOK
④ ad çakışma  1579 canlı noktaya karşı 9/9 benzersiz          ✓
⑤ dönem sağlığı sıfır/ters/çakışan dönem YOK                  ✓
⑥ Değişmez 1  GÜNLÜK tam tarama, 9/9 nokta KESİNTİSİZ         ✓
⑦ Değişmez 2  kırılma günleri {1475-06-06, 1771-07-01,
              1783-04-19} — ÜÇÜ DE veride zaten var           ✓  MADDE BORCU 0
⑧ Değişmez 3  m:"Kefe" olan 4 noktada çelişki 0               ✓
+ maske       motor_kara.geojson: 9/9 nokta İÇERİDE           ✓
+ 3 km        en yakın çift 21,58 km (Eski Kırım ↔ Kefe)      ✓
```

🔴 **⑦ bu partinin tasarım kısıtıydı.** Bu oturum `olaylar*.js`'e yazamıyor,
dolayısıyla yeni bir kırılma günü açmak kapatılamayacak bir Değişmez 2 borcu
doğururdu. Bütün dönem uçları veride ZATEN VAR OLAN günlerden seçildi.

### Ölçülen kazanç

```
                       kara km²   nokta   km²/nokta
Kırım yarımadası (maskeden)  29.940      3       9.980   ← önce
                             29.940     12       2.495   ← sonra  (4,0×)
Batı Anadolu (37-40K/26-30D) 93.839     35       2.681   ← referans
```

🔴 **Görev tanımındaki "11 KAT SEYREK" rakamı ölçülünce tutmadı — düzeltiyorum.**
Orada Kırım `70.868 km² / 3` , Batı Anadolu `129.265 km² / 60` diye alınmış;
ikisi farklı tabanlar (70.868, yarımadanın karası değil ÜÇ NOKTANIN PETEK
alanı — petekler denize ve bozkıra taşıyor). Tek ve aynı yöntemle (kara
maskesi + 0,25° örnekleme) ölçünce:
**seyreklik farkı 11× değil 3,7× idi; parti sonrası 0,93× — yani Kırım artık
Batı Anadolu'dan bir tık DAHA SIK.**
📌 Hüküm değişmiyor (Kırım gerçekten seyrekti, düzeltildi); değişen, rakamın
büyüklüğü. `ONCELIK.md K4`: ölçmeden verilen sayı üç tur demektir.

Nokta bazlı çapraz kontrol (yarımada ortası 45,30K/34,20D):
```
önce   50 km içinde 0 nokta · en yakın Kefe 96 km
sonra  50 km içinde 2 nokta · en yakın Akmescid 39 km
Batı Anadolu referans örneği (38,40K/27,80D): 3 nokta · en yakın Birgi 29 km
```

---

## ② EKLENMEYEN ADAYLAR — negatif sonuç da sonuçtur

| aday | koordinat | maske | 3 km | niçin eklenmedi |
|---|---|---|---|---|
| **Mankup** | 44,5942 · 33,8044 | ✓ | ✓ 18,2 km | 🔴 **RENK ENGELİ.** Theodoro (Gotya) Prensliği'nin başkenti — Ceneviz DEĞİL. `renkler.py`'de `teodoro` kimliği yok ve bu oturum oraya yazamaz. Renksiz dönem motor kuralınca **boşluk** üretir: 1281-1475 arası güneybatı Kırım'da 194 yıllık delik. `bizans` yazmak da çözüm değil — Bizans 1453'te bitiyor, kayıt `CLAUDE.md §3.5` hayalet devlet sınıfını (Batnoz'un aynısını) üretirdi. |
| **İnkirman (Kalamita)** | 44,6072 · 33,6061 | ✓ | ✓ 11,9 km | Aynı sebep: Kalamita Theodoro'nun limanıydı. Maske ✓, 3 km ✓ — **tek eksik renk.** |
| **Yenikale** | ~45,35 · 36,60 | — | — | Kerç'e ~8 km. 3 km kuralını geçer ama ayrı petek üretmez, yalnız Kerç'in peteğini ikiye böler. Kazanç yok. |
| **Azak** | zaten var | — | — | Görev tanımı "ayrı bak" dedi: bakıldı, **dokunulmadı.** Kayıt Don Kazakları'nın 1637-1642 penceresiyle birlikte zaten gerekçeli. |
| **Taman** | zaten var | — | — | Aynı: kayıt 1482-06-01 alınışını taşıyor ve depoda gerekçesi yazılı. TDV `kefe` onu sancağın beş kazasından sayıyor ama **kaza olması ile fethin GÜNÜ ayrı sorular** (`§3.5.1`: "merkez düştü diye çevre otomatik devrolmaz"). Değiştirmek için kaynak yok. |
| **Kırım iç bozkırı dolgu noktası** | ~45,8 · 34,4 | — | — | Gerekmiyor: Or Kapı boğazı artık noktalı, kuzey bozkırı Or Kapı · Gözleve · Karasubazar arasında bölünüyor ve **üçü de aynı sahipli.** Aynı sahipli petekler arası çizgi haritada görünmez. |

### Or Kapı: yerleşim SAYILDI — gerekçe (görev tanımı bunu istedi)

`tur:"kale"`. Üç sebep:
1. TDV `kirim` onu adıyla anıyor; Or beyi hanlığın makamıdır.
2. **Motor açısından belirleyici olan:** Or Kapı yarımadanın karaya bağlandığı
   7 km'lik tek boğazdır. Orada nokta olmayınca Kırım'ın kuzey sınırını çizen
   orta dikme, **500 km ötedeki** `Bozkır (Deşt-i Kıpçak)` (48,50K/42,00D) ile
   Gözleve arasında kalıyordu. Kullanıcının **"boğumlu yapı"** ve **"tek
   noktadan birleşen koridor"** dediği tam olarak budur.
3. `kur:` **yazılmadı**: kale 1538'de yapıldı ama "Or" (hendek) geçidi antik
   çağa iner. 1538 damgası vurulsaydı motor peteği 257 yıl komşuya devreder ve
   düzeltilen artefakt 1281-1538 arasında geri gelirdi.

Aynı soru Akmescid'de de soruldu (TDV adı Mengli Giray devrine bağlıyor),
aynı cevap verildi: `kur:` yazılmadı, gerekçe dosyada.

### TDV slug turu — `<title>` ile sınandı (`CLAUDE.md §4`)

```
CANLI : kirim · kefe · bahcesaray · karasubazar · akmescid · han-camii
ÖLÜ   : gozleve · sudak · mankup · mangub · orkapi
        (beşi de "Arama - TDV İslâm Ansiklopedisi" döndürüyor)
```
📌 `akmescid` doğru yazımdır — görev tanımındaki `akmescit` ölüdür.
📌 Gözleve'nin müstakil maddesi yok ama `han-camii` maddesi yeri açıkça
   tanımlıyor ("Kırım Gözleve'de bulunan…") ve `kirim` maddesi adını sayıyor.

---

## ③ SEYREKLİK HARİTASI — ikinci teslimat

**Yöntem.** `veri-kaynak/motor_kara.geojson` 0,25° ızgarayla örneklendi
(108.860 kara hücresi, 65.473.808 km²); 1.588 noktaya (1.579 canlı + bu
partinin 9'u) en yakın uzaklıklar hesaplandı. Ölçüm betiği scratchpad'de,
`arac/` altına YAZILMADI (görev tanımı böyle istedi).

### 🔴 İki yaklaşım denendi ve ELENDİ — sebebi rapora değer

```
✗ ham "km²/nokta"        Listenin tepesini Sahra · Rub'ul Hâlî · Nûbe çölü
                         dolduruyor. Onlar KASTEN boş (Değişmez 1'in 34
                         kasıtlı sahipsiz noktası) ve orada seyreklik
                         GÖRÜNMEZ — çevredeki her petek aynı renkte.
✗ 2° hücre + nokta sayısı Hücreler eşit alanlı; sıralama "0 nokta"da yüzlerce
                         beraberliğe düşüyor, bilgi taşımıyor.
```

**Kullanılan ölçüt — iki çarpan:**
```
① emilme yarıçapı = hücredeki karanın en yakın yerleşime ALAN AĞIRLIKLI
                    ortalama uzaklığı (km). Sürekli, beraberlik yok.
                    §2'nin kendi tarifi: büyük yarıçap = toprağı uzaktaki
                    bir petek yutuyor.
② görünürlük     = hücre çevresindeki 8 noktada, herhangi bir tarihte
                    eş zamanlı kaç FARKLI sahip var. 1 ise artefakt
                    haritada görünmez.
Sıralama ①'e göre, ②≥2 süzgecinden geçenler arasında.
```

### Dağılım — kutu içi kara, en yakın noktaya uzaklığa göre

```
   0- 25 km :  2.450.768 km²   % 3,7
  25- 50 km :  5.297.554 km²   % 8,1
  50-100 km : 10.849.852 km²   %16,6
 100-200 km : 15.819.665 km²   %24,2
 200-400 km : 11.533.280 km²   %17,6
 400+   km : 19.522.689 km²   %29,8
```

### 🔴 EN AÇ 20 BÖLGE — HALKA 0 ÇEKİRDEK `box(15,30,50,50)`, ızgara 2°

**Sıradaki oturumun görev listesi budur.** (`ONCELIK.md §4`: halka 0
bitmeden dışarı çıkılmaz.)

| # | hücre (GB köşe) | kara km² | nkt | yarıçap | çeş | ülke / bölge |
|---:|---|---:|---:|---:|---:|---|
| 1 | 30K 38D | 27.930 | 0 | **261 km** | 2 | Suudi Arabistan — kuzey Necid |
| 2 | 30K 40D | 31.906 | 0 | 252 km | 2 | Suudi Arabistan — kuzey Necid |
| 3 | 48K 48D | 32.518 | 0 | 249 km | 3 | Kazakistan — Hazar kuzeyi |
| 4 | 32K 38D | 34.374 | 0 | 221 km | 2 | Irak — Bâdiye (Şam çölü) |
| 5 | 48K 46D | 32.011 | 0 | 190 km | 3 | Kazakistan — Hazar kuzeyi |
| 6 | 46K 36D | 19.394 | 0 | 181 km | 3 | **Ukrayna — Azak kuzeyi bozkırı** |
| 7 | 32K 40D | 40.914 | 0 | 176 km | 2 | Irak — Bâdiye |
| 8 | 48K 38D | 32.518 | 0 | 171 km | 4 | **Ukrayna — Dinyeper bozkırı** |
| 9 | 44K 42D | 35.049 | 0 | 161 km | 4 | Rusya — Kuban / Stavropol |
| 10 | 46K 42D | 33.804 | 0 | 156 km | 3 | Rusya — Don aşağısı |
| 11 | 46K 34D | 28.446 | 0 | 150 km | 2 | **Ukrayna — Kırım kuzeyi bozkırı** |
| 12 | 30K 22D | 42.486 | 0 | 131 km | 2 | Libya — Sirte iç çölü |
| 13 | 48K 36D | 32.518 | 1 | 130 km | 4 | Ukrayna — Harkov |
| 14 | 44K 44D | 35.049 | 0 | 127 km | 5 | Rusya — Kafkas kuzeyi |
| 15 | 46K 48D | 30.054 | 1 | 116 km | 4 | Kazakistan — Astrahan |
| 16 | 48K 30D | 32.518 | 0 | 114 km | 3 | Ukrayna — Podolya doğusu |
| 17 | 46K 40D | 33.804 | 0 | 112 km | 3 | Rusya — Don |
| 18 | 48K 40D | 32.518 | 0 | 109 km | 3 | Rusya — Don yukarısı |
| 19 | 44K 40D | 35.049 | 1 | 104 km | 4 | Rusya — Maykop / Çerkezya |
| 20 | 46K 46D | 33.804 | 0 | 101 km | 4 | Rusya — Volga aşağısı |

🔴 **TEK CÜMLELİK HÜKÜM: listenin 11 satırı KARADENİZ KUZEYİ BOZKIRIDIR.**
1° ızgarayla Rumeli+Anadolu+Kırım kutusuna bakıldığında **ilk 25 sıranın 24'ü**
aynı coğrafyadır (Ukrayna + güney Rusya, yarıçap 130-215 km, hepsi 0 nokta,
sahip çeşitliliği 3-5: `lehistan · rusya · kirim · altinorda · OSMANLI`).

⇒ **Bu oturumun kapattığı Kırım deliği, o çok daha büyük deliğin güney ucudur.**
Bütün Deşt-i Kıpçak'ı bugün **tek bir dolgu noktası** temsil ediyor:
`Bozkır (Deşt-i Kıpçak)` 48,50K / 42,00D. Kırım'ın kuzey sınırını 500 km
öteden çizen nokta oydu.

### Balkanlar + Anadolu (bozkır hariç) — 1° ızgara, ilk 12

| # | hücre | kara km² | nkt | yarıçap | çeş | bölge |
|---:|---|---:|---:|---:|---:|---|
| 1 | 44K 42D | 4.438 | 0 | 124 km | 4 | Kafkasya — Elbruz kuzeyi |
| 2 | 44K 41D | 4.438 | 0 | 118 km | 4 | Kafkasya |
| 3 | 44K 44D | 4.438 | 0 | 111 km | 5 | Kafkasya — Dağıstan batısı |
| 4 | 43K 42D | 8.989 | 0 | 91 km | 4 | Kafkasya — Svaneti / Karaçay |
| 5 | 44K 43D | 4.438 | 0 | 87 km | 4 | Kafkasya |
| 6 | 36K 40D | 9.961 | 0 | 84 km | 5 | Suriye — Cezîre / Şam çölü |
| 7 | 35K 42D | 10.089 | 0 | 84 km | 2 | Irak — Cezîre |
| 8 | 35K 41D | 10.089 | 0 | 84 km | 4 | Irak — Cezîre |
| 9 | 39K 42D | 9.562 | 0 | 80 km | 5 | Doğu Anadolu — Ağrı / Iğdır |
| 10 | 42K 14D | 2.868 | 0 | 79 km | 4 | Alpler — Tirol |
| 11 | 35K 38D | 10.089 | 0 | 74 km | 2 | Suriye — Bâdiye |
| 12 | 38K 32D | 9.698 | 0 | 70 km | 5 | Orta Anadolu — Konya ovası kuzeyi |

---

## ④ AÇIK KALEMLERİN ÖLÇÜMÜ — "petek artefaktı" demeden önce

Görev tanımının uyarısı yerine getirildi. **Seyreklik listesinin ilk 25'inde
bu altı kalemin HİÇBİRİ yok** — yarıçapları 25-45 km, listenin eşiği 60 km+.
O yüzden her biri nokta bazında ayrıca ölçüldü:

| kalem | 50 km içinde | en yakın 3 nokta | hüküm |
|---|---:|---|---|
| **p2/H-0001** Gemlik/Kios | **17 nokta** | Gemlik 1 km · İmralı 15 km · Mudanya 24 km | 🔴 **SEYREKLİK DEĞİL.** Bölge haritanın en sık yerlerinden biri. Kopukluk **veri hatasıdır** (dönem/sahiplik) ya da gerçek bir kıyı geometrisi. Nokta eklemek çözmez — bu kalem **VERİ oturumuna** gitmeli. |
| **p2/H-0014** Saroz körfezi K | 7 nokta | Keşan 11 km · İpsala 26 km · Bolayır 27 km | 🔴 **SEYREKLİK DEĞİL.** Aynı hüküm. |
| **p2/H-0012** Biga y.ada KD | 4 nokta | Biga 25 km · Marmara Adası 33 km · Erdek 42 km | 🟡 ORTA. Yarımadanın kuzeydoğu ucunda nokta yok; artefakt olması makul. 1-2 nokta (Karabiga? Çardak?) test edilmeli. |
| **p3/H-0012** Bosna ucu | 3 nokta | Yayça 25 km · Travnik 33 km · Banaluka 39 km | 🟡 ORTA. |
| **p3/H-0016** Dubrovnik | 3 nokta | Dubrovnik 0 km · Herseknovi 43 km · Mliyet 48 km | 🟡 ORTA-SEYREK. Dubrovnik'in kendi noktası var; **enklav görüntüsü ardındaki 40+ km'lik boşluktan** geliyor (Neretva vadisi / Popovo polje). |
| **p3/H-0016** Saraybosna | **2 nokta** | Saraybosna 1 km · Foça 49 km · Travnik 72 km | 🔴 **GERÇEK SEYREKLİK.** Bosna'nın ortasında 50-70 km boşluk. |
| **p2/H-0018** Gümülcine | **1 nokta** | Gümülcine 1 km · Enez 72 km · Semadirek 74 km | 🔴 **EN GERÇEK SEYREKLİK VAKASI.** Batı Trakya'da Gümülcine dışında hiç nokta yok; "koridor" görüntüsü doğrudan bunun sonucu. |

**Kapatılan / durumu belirlenen maddeler:**
```
p3/H-0015  "cetvelle bölünmüş Kırım"        ✅ KAPANDI  (① — 9 nokta)
p3/H-0022  aynısı (tekrar)                  ✅ KAPANDI  (①)
p2/H-0019  "kıymık gibi uzayan gösterim"    ✅ KAPANDI  (①)
p2/H-0020  "kopuk toprak parçası"           ✅ KAPANDI  (①)
p2/H-0018  Gümülcine koridoru               🔴 TEŞHİS: seyreklik — nokta eklenmeli
p3/H-0016  Saraybosna enklavı               🔴 TEŞHİS: seyreklik — nokta eklenmeli
p3/H-0016  Dubrovnik enklavı                🟡 TEŞHİS: orta seyreklik
p3/H-0012  Bosna ucu enklavı                🟡 TEŞHİS: orta seyreklik
p2/H-0012  Biga yarımadası KD               🟡 TEŞHİS: orta seyreklik
p2/H-0001  Gemlik/Kios kopukluğu            🔴 TEŞHİS: SEYREKLİK DEĞİL → VERİ
p2/H-0014  Saroz körfezi kuzeyi             🔴 TEŞHİS: SEYREKLİK DEĞİL → VERİ
```
📌 Görev tanımı "②'ye bağlı olanlar için petek artefaktı demeden önce ölç"
dedi; ölçüldü ve **ikisi artefakt değilmiş.** Onları nokta ekleyerek
kovalamak boşa koşu olurdu.

---

## ⑤ OTURUM 0 İÇİN — sırayla

1. `data/yerlesimler_kirim.js` → `arac/girdi.py` `GIRDI_DOSYALARI`'na ekle.
   Yeni renk gerekmiyor, kutu işi yok (9/9 nokta `box(-12,-11,146,64)` içinde).
2. `py arac/denetle.py` — altı denetim. Beklenen: bu partiden **sıfır** yeni
   ihlal (sekiz kontrol ayrıca koşturuldu, yukarıda).
3. Üretim ve yayın Oturum 0'ın takvimine göre.

## ⑥ SIRADAKİ OTURUMLARA — ölçülmüş iş listesi

```
🔴 EN BÜYÜK  Karadeniz kuzeyi bozkırı (Ukrayna + güney Rusya)
             1° ızgarada ilk 25'in 24'ü · yarıçap 130-215 km · 0 nokta
             sahip çeşitliliği 3-5 (lehistan/rusya/kirim/altinorda/OSMANLI)
             bugün TEK dolgu noktası temsil ediyor: Bozkır (Deşt-i Kıpçak)
🔴 RENK      renkler.py'ye `teodoro` — Mankup + İnkirman hazır bekliyor,
             koordinatları ve zincirleri bu dosyada, tek engel renk
🔴 NOKTA     Gümülcine (Batı Trakya) · Saraybosna çevresi — ölçülmüş seyreklik
🟡 VERİ      Gemlik/Kios ve Saroz kuzeyi — nokta bol, kusur veride
🟡 NOKTA     Kafkasya (43-44K/41-44D, yarıçap 87-124 km) · Cezîre / Şam çölü
             (35-36K/37-43D, 65-84 km) · Doğu Anadolu (37-40K/40-43D, 62-80 km)
```

---
---

# PARTİ 2a — ÇÖL / BOZKIR (`data/yerlesimler_seyrek.js`, 7 nokta)

## 🔴 ÖNCE BİR DÜZELTME — kendi itirazım yanlıştı

Koordinatöre *"listenin ilk 5'i ile kapattığın maddeler aynı coğrafya değil"*
diye yazdım. **Yarısı yanlıştı ve görselleri açınca anlaşıldı.**

`p5/H-0007` ve `p5/H-0009`'un metninde yer bilgisi yok, yalnız görselde var.
Görsellerin künye satırları:

```
H-0007-1.png   1517-01-02 · 29,41-31,90K / 37,35-40,14D · z5,8
               "yıldız şeklinde üçken üçken görünümler"
H-0009-1.png   1517-07-12 · 20,07-23,24K / 41,93-44,99D · z6,2
               "işte bozuk görüntülere bir örnek daha"
```

⇒ **İkisi de tam olarak listemin ilk beşinin içinde.** Koordinatörün bağlantısı
bu iki madde için DOĞRUYDU; benim itirazım yalnız p2/p3 maddeleri (Gemlik,
Biga, Saroz, Gümülcine, Bosna, Dubrovnik) için geçerliydi.

📌 Ders — ve `ONCELIK.md K4`'ün ta kendisi: **"görsel pahalıdır" kuralı,
"görsel gereksizdir" demek değildir.** Metinde konum yoksa görsel TEK
kaynaktır ve açılmadan verilen hüküm yanlış çıkar. İki görsel açıldı, itirazın
yarısı düştü.

## Teşhis — ölçüldü

`H-0007` yıldızının merkezinde (30,5K/38,5D) **en yakın nokta 268 km ötede.**
Altı petek oraya uzanıyor ve altı uzun ince Voronoi dilimi tek noktada
buluşuyor — yıldız şekli tam olarak budur:

```
Maan 268 km · Kerak 278 · Amman 293 · Tebük 301 · Kudüs 342 · Nefud çölü 345
```
`H-0009` kamasının merkezinde (21,6K/43,5D) en yakın nokta **310 km** (Tâif).
`box(29-33K / 37-43D)` — kuzey Arabistan'ın tamamı — bugün **sıfır nokta.**

⇒ İkisi de `CLAUDE.md §2`, saf petek artefaktı. **Veri hatası değil.**

## Eklenen 7 nokta

| ad | lat, lon | tür | sahiplik | TDV |
|---|---|---|---|---|
| Tedmür (Palmyra) | 34,550 · 38,270 | şehir | **OSMANLI** (Şam eyaleti) | `tedmur` |
| Dûmetülcendel (Cevf) | 29,812 · 39,868 | şehir | 1836 sammar → 1921 suud | `dumetulcendel` · `cevf` |
| Vâdî Sirhân | 31,000 · 37,800 | bölge | 🔴 **kasten sahipsiz** | `dumetulcendel` |
| Teymâ | 27,632 · 38,545 | şehir | 1836 sammar → 1921 suud | `teyma` |
| Necid güneybatısı | 21,500 · 42,600 | bölge | 1744 suud zinciri | `necid` |
| Necid güneyi | 21,000 · 45,000 | bölge | 1744 suud zinciri | `necid` |
| Rın kumulları (Volga-Yayık) | 49,000 · 47,500 | bölge | altinorda → 1556 rusya | — (coğrafî dolgu) |

**Tek Osmanlı kaydı Tedmür**, ve gerekçesi TDV `tedmur`un kendi cümlesi:
*"XVI. yüzyıldan itibaren Şam eyaletine bağlı bir idarî merkez."* Zincir Şam'ın
birebir aynısı.

Ötekilerin zinciri komşularından kopyalandı: Dûmetülcendel ve Teymâ →
**Hâil** (Şammar'ın başkenti, `yerlesimler.js:829`); Necid ikilisi →
**Necid içi**; Rın kumulları → **Kalmuk bozkırı**.

## Ölçülen etki

```
H-0007 merkezi (30,5K/38,5D)   268 km →  87 km   3,1× yakın   ← Vâdî Sirhân
H-0009 merkezi (21,6K/43,5D)   310 km →  94 km   3,3× yakın   ← Necid güneybatısı
③⑤ Hazar kuzeyi (49K/47D)      185 km →  37 km   5,1× yakın   ← Rın kumulları
④ Bâdiye (33K/40D)             243 km → 180 km   1,4× yakın   ← Tedmür (KISMÎ)
```

## Kabul ölçütü — sekiz kontrol

```
① ayrıştırma 7/7 ✓   ② alan kütüğü temiz ✓   ③ renk 6/6 BOYALAR'da ✓
④ ad çakışma 7/7 benzersiz ✓   ⑤ dönem sağlığı temiz ✓
⑥ Değişmez 1: 2 kayıt kesintisiz + 5 KASITLI dolgu (aşağıda)
⑦ Değişmez 2: kırılma günleri {1516-09-27, 1818-09-09, 1824-06-01,
   1832-06-15, 1841-02-25, 1918-10-01} — ALTISI DA veride zaten var ✓
   ⇒ MADDE BORCU SIFIR
⑧ Değişmez 3: çelişki 0 ✓
+ maske 7/7 içeride ✓   + 3 km: en yakın çift 144,27 km (Tedmür ↔ Humus) ✓
```

🔴 **OTURUM 0 İÇİN UYARI — "kasten sahipsiz" sayacı 5 ARTIYOR.**
```
Vâdî Sirhân          tamamen sahipsiz  (Ruvale otlağı, hiçbir devlette değil)
Dûmetülcendel        1281 → 1836 sahipsiz
Teymâ                1281 → 1836 sahipsiz
Necid güneybatısı    1281 → 1744 sahipsiz
Necid güneyi         1281 → 1744 sahipsiz
```
Beşi de **kasıtlıdır ve dolgu noktasıdır** — `Nefud çölü`, `Necid içi`,
`Rub'ul Hâlî kuzeyi` ile aynı sınıf. TDV `necid`in hükmü açık:
*"bu coğrafyada tarihte etkin olmuş bir devlet ortaya çıkmamıştır."*
⚠️ `denetle.py`'nin beklenen sahipsiz sayısı bu partiyle **+5** yapılmalı;
yapılmazsa denetim yanlış alarm verir. Bunlar delik DEĞİL, deliğin İLACI.

📌 Ve `§3.5.1`'in dersi burada işledi: yıldızı asıl kesen nokta
**Vâdî Sirhân'ın BOŞ olması.** Oraya sahiplik yazmak Osmanlı gövdesini
Maan'dan 270 km doğuya fırlatan davranışı geri getirirdi.

## Eklenmeyenler

| aday | niçin |
|---|---|
| **Hamâd** (Şam-Bağdat bâdiyesi, ~32,6K/40,0D) — listenin **④. sırası** | 🔴 **KAYNAK BULUNAMADI.** `§3.5.1` "iki uç da ölçülür": Osmanlı yazsam kaynaksız olarak gövdeyi çöle uzatırım; devletsiz yazsam Suriye ile Irak'ın arasına **beyaz delik** açarım — kullanıcının şikâyet ettiği "kopuk parça"nın yenisi. TDV `necid` aşiretlerin "geleneksel idarelerinin devamı" ile Osmanlı hâkimiyetini tanıdığını söylüyor ama bunun **hâkimiyet mi tâbiyet mi** olduğunu ayırmıyor. Ekleyeceğime atladım. **Cell ④ AÇIK KALIYOR.** |
| **Saraycık** (Yayık, ~47,5K/51,75D) | TDV'de müstakil madde YOK (`saraycik` ölü). Yalnız içerik geçişi: "Sarayçık şehriydi", Nogay kışlağı, XV-XVI. yy. Terk/yıkılış tarihi yok ⇒ dönem yazılamaz. |
| **Hâil** | **ZATEN VAR** (`yerlesimler.js:829`). Aday listeme yazmıştım, 3 km ölçümü 0,46 km'de yakaladı — envanter kutumu 28K'nın altına indirmediğim için gözden kaçmıştı. Ölçüm yakaladı, kayıt değil. |
| **Bîşe (Bisha)** | TDV'de madde yok (`arama/?q=bîşe` → `biset`, `zeyd-b-amr`, `darulerkam`). Yerine coğrafî dolgu kondu. |
| **Büreyde (Kasîm)** | Uneyze'ye 27 km; ayrı petek kazancı yok. |

### TDV slug turu (`<title>` ile sınandı)
```
CANLI : tedmur · dumetulcendel · cevf · teyma · necid · residiler
ÖLÜ   : hail · saraycik · bise
```
📌 `hail` ölü ama Hâil'in künyesi `residiler` maddesinde: Reşîdî emirliğinin
merkezi, 1835 kuruluş, 1921 Suud yenilgisi, *"Osmanlı hâkimiyetini kabul etti."*

## Cell ④ için sıradaki oturuma soru — tek cümle

> **Şam ile Bağdat arasındaki Hamâd bâdiyesi, 1516-1918 arası Osmanlı
> toprağı mıydı, yoksa hiçbir devletin idaresinde olmayan aşiret çölü müydü?**

Cevap "Osmanlı" ise `Deyrizor` zinciriyle bir `bolge` noktası; "devletsiz" ise
`Vâdî Sirhân` gibi boş dolgu. İkisi de tek satır — eksik olan **kaynak**.

---

# PARTİ 2b — RUMELİ / ANADOLU (`yerlesimler_seyrek.js`, +6 nokta → 13)

Bunlar seyreklik listesinin ilk 5'inde **değil** — yarıçapları 25-45 km,
listenin eşiği 60 km+. §④'te nokta bazlı ayrıca ölçüldüler.

| ad | lat, lon | k · m | zincir kaynağı | TDV |
|---|---|---|---|---|
| İskeçe | 41,140 · 24,890 | 4 · Selanik | Gümülcine, `d:` 1373-01-01 | `iskece` |
| Kırcaali | 41,650 · 25,370 | 4 · Edirne | Gümülcine, **Bulgar kuyruğu** | `kircaali` |
| Trebinye | 42,711 · 18,344 | 3 · Saraybosna | Foça, `d:` 1466-06-01 | `trebinye` |
| Vişegrad | 43,783 · 19,288 | 3 · Saraybosna | Foça, `d:` 1463-06-01 | `bosna-hersek` · `drina-koprusu` |
| Tuzla (Bosna) | 44,538 · 18,676 | 3 · Saraybosna | İzvornik, `d:` 1460-01-01 | `tuzla--bosna-hersek` · `bosna-hersek` |
| Karabiga | 40,410 · 27,300 | 4 · **Biga** | Biga, birebir | (içerik geçişi) |

## Ölçülen etki — şikâyet noktalarında

```
                    50 km içinde     2. en yakın nokta
p2/H-0018 Gümülcine    1 → 2         72 km → 43 km   🟢
p3/H-0016 Dubrovnik    3 → 4         43 km → 22 km   🟢
p2/H-0012 Biga KD      4 → 5         33 km → 25 km   🟢
p3/H-0016 Saraybosna   2 → 2         49 km → 49 km   🔴 KAPANMADI
p3/H-0012 Bosna ucu    3 → 3         33 km → 33 km   🔴 KAPANMADI
```

## 🔴 KAPANMAYAN İKİ MADDE — kaynak bulunamadı

`p3/H-0016 Saraybosna` ve `p3/H-0012 Bosna ucu` için gereken noktalar
**Visoko · Konjic · Zenitsa · Prusac (Akhisar) · Kamengrad · Sanski Most**.
Altısının da TDV'de müstakil maddesi **YOK** ve TDV `bosna-hersek` maddesi
şehirleri sayarken (Saraybosna · Travnik · Banaluka · Mostar · Foça ·
Vişegrad · Tuzla · Yayça) **hiçbirini anmıyor.** `arama/?q=akhisar` yalnız
Manisa'daki Akhisar'ı ve Akhisârî nisbeli âlimleri döndürüyor.
⇒ Koordinatörün kuralı uygulandı: **eklemektense atlandı.** İki madde
`VERİ ARAŞTIRMA` oturumuna gitmeli — orada Bosna için TDV dışı akademik
referans (Pitcher, İnalcık) kullanılabilir; bu oturumun yetkisi TDV'ydi.

## İki karar, ikisi de ölçümle alındı

**① Kırcaali'nin kuyruğu Gümülcine'den FARKLI yazıldı.** Gümülcine 1913'te
Bulgaristan'a, sonra kısa Osmanlı dönüşü, 1920'de Yunanistan'a geçer.
Kırcaali **Bulgaristan'da kaldı.** Zinciri kopyalarken kuyruğu kesmek
gerekti — kopyala-yapıştır yapılsaydı Kırcaali haritada Yunanistan olurdu.

**② Karabiga'nın `m:` alanı "Bursa" değil "Biga".** Önce Biga'yı birebir
kopyalamıştım; **Değişmez 3 denetimi yakaladı:** 1300-06-15'te
`Karabiga=karesi ↔ Bursa=bizans`. Çelişki gerçek ama kusur Karabiga'nın
değil **Biga kaydının**: `m:` alanının zaman boyutu yok (`MIMARI.md §3.1`,
planlanan `kd:`), o yüzden Biga 1281-1326 arası Bizans Bursası'na bağlı
görünüyor. TDV Karabiga'yı açıkça Biga'ya bağlıyor.
📌 **Var olan bir kusuru kopyalamak yerine kopyalamamak seçildi.**

## Parti 2 toplu kabul ölçütü (13 nokta)

```
① ayrıştırma 13/13 ✓          ② alan kütüğü temiz ✓
③ renk 15/15 BOYALAR'da ✓     ④ ad çakışma 13/13 benzersiz ✓
⑤ dönem sağlığı temiz ✓ (Tedmür'ün d×v örtüşmesi denetle.py:1280'e göre
   KASITLI, ihlal değil — canlı veride 21 kayıtta var, Şam dahil)
⑥ Değişmez 1: 8 kesintisiz + 5 KASITLI dolgu
⑦ Değişmez 2: 18 kırılma günü, ON SEKİZİ DE veride zaten var ✓ BORÇ SIFIR
⑧ Değişmez 3: çelişki 0 ✓
+ maske 13/13 içeride ✓   + 3 km: en yakın çift 20,83 km (Karabiga ↔ Biga) ✓
```

## Maddelerin son durumu

```
✅ KAPANDI (nokta eklendi)
   p3/H-0015 · p3/H-0022 · p2/H-0019 · p2/H-0020   Kırım (parti 1)
   p5/H-0007  çöl yıldızı        268 km → 87 km
   p5/H-0009  Hicaz-Necid kaması 310 km → 94 km
   p2/H-0018  Gümülcine          72 km → 43 km
   p3/H-0016  Dubrovnik          43 km → 22 km
   p2/H-0012  Biga KD            33 km → 25 km

🔴 SEYREKLİK DEĞİL — VERİ HATASI, Oturum 0'a
   p2/H-0001  Gemlik/Kios      50 km'de 17 nokta (haritanın en sık yeri)
   p2/H-0014  Saroz körfezi K  50 km'de 7 nokta, en yakın Keşan 11 km
   ⇒ Nokta eklemek bunları ÇÖZMEZ. Kusur dönem/sahiplik verisinde.

🔴 KAYNAK BULUNAMADI — VERİ ARAŞTIRMA'ya
   p3/H-0016  Saraybosna çevresi   (Visoko·Konjic·Zenitsa: TDV maddesi yok)
   p3/H-0012  Bosna ucu / Krajina  (Kamengrad·Sanski Most: TDV maddesi yok)

🟡 AÇIK KALAN ÖLÇÜM
   seyreklik listesi ④  Hamâd bâdiyesi — Osmanlı mı, devletsiz mi?
```

---

# EK ÖLÇÜMLER — koordinatörün üç sorusu

## ① `kasitli_bosluk` bayrağı — ÖLÇÜLDÜ, sonra eklendi

Koordinatör haklıydı: bayrak **iki iş birden** yapıyor ve körü körüne
eklenemez. İkisi ayrı ayrı ölçüldü.

### ② anlamı — MOTOR ETKİSİ: **SIFIR**
`uret_petek.py:1495` `_kusatilmis()`in ilk iki süzgeci:
```python
if y.get("kasitli_bosluk"): continue
if not ((y.get("kur") and y["kur"] > g)
        or (y.get("bit") and y["bit"] <= g)): continue
```
🔴 **İKİNCİ süzgeç bayraktan bağımsız olarak işi bitiriyor:** ölçüt yalnız
`kur:` (henüz kurulmamış) ya da `bit:` (artık yok) taşıyan noktalara bakıyor.

```
Tedmür · Dûmetülcendel · Vâdî Sirhân · Teymâ · Necid gb · Necid g · Rın
   kur: —   bit: —   →  7/7 nokta ölçüte HİÇ GİRMİYOR
```
⇒ Bayrağın petek devrine etkisi **ölçülerek sıfır** bulundu. Koordinatörün
uyardığı yan etki bu partide oluşmuyor.

### ① anlamı — RAPOR ETKİSİ: 18 açık iş → 0
`denetle_bosluk.py:236` `sinifla()` sırası:
`① sahipsiz_adlar → ② kasitli_bosluk → ③ BOYANMAMIŞ → ④ ARAŞTIRMA`

`sahipsiz_adlar` tanımı (satır 336 / 521-524) **kalıcı** sahipsizliktir:
`{y for y in Y if not (y.d or y.v or y.s)}`. Yani bir dönemi olan nokta
o süzgeçten geçemez ve **ARAŞTIRMA'ya**, yani açık iş listesine düşer.

```
              1400  1500  1600  1700  1800     karar
Vâdî Sirhân   KAS.  KAS.  KAS.  KAS.  KAS.   bayrak GEREKMEZ — ① zaten susturuyor
Dûmetülcendel ARAŞ  ARAŞ  ARAŞ  ARAŞ  ARAŞ   🔴 bayrak GEREKLİ
Teymâ         ARAŞ  ARAŞ  ARAŞ  ARAŞ  ARAŞ   🔴 bayrak GEREKLİ
Necid gb      ARAŞ  ARAŞ  ARAŞ  ARAŞ   —     🔴 bayrak GEREKLİ
Necid g       ARAŞ  ARAŞ  ARAŞ  ARAŞ   —     🔴 bayrak GEREKLİ
Tedmür        —     —     —     —      —     gerekmez (hiç boşluk üretmiyor)
Rın kumulları —     —     —     —      —     gerekmez
```
⇒ **4 kayda eklendi, 3'üne EKLENMEDİ.** Açık iş sayısı **18 → 0**.

### `neden:` de yazıldı — ve bilerek
`denetle_bosluk.py:270` gerekçesi olanı `KASITLI (gerekçeli)`, olmayanı
`KASITLI (GEREKÇESİZ)` diye ayırıyor ve kodun kendi yorumu şöyle diyor:
> *"`kasitli_bosluk:true` taşıyan BEŞ kaydın hiçbirinde `neden:` YOK
> (Vladikavkaz · Kuveyt · Doha · Abu Dabi · Cetinje) … kullanıcının istediği
> tam tersi: boş bıraksın VE SEBEBİNİ KAYDETSİN."*

⇒ Dördüne de `neden:` yazıldı; **bu depoda gerekçeli ilk dört kasıtlı boşluk.**

🔴 **OTURUM 0 İÇİN TEK SATIRLIK BORÇ:** `neden` alanı `girdi.py`
`BILINEN_ALANLAR` kütüğünde **yok** ve yükleyici bunu uyarıyor:
```
UYARI alan: 'neden' BILINEN_ALANLAR'da yok — 4 kayıtta … girdi.py'ye kaydet.
```
Alan hata değil: `denetle_bosluk.py` onu **zaten okuyor**, yalnız kütüğe
kaydedilmemiş. Kütüğe bir satır eklenince uyarı susar. `girdi.py` benim
dosyam değil.

## ② HAMÂD — `S-007`in gerekçesi

Koordinatörün hükmü kabul: boş bırakıldı. Ve sebebi kayda geçiyor —
**şemanın yazamadığı bir hâl var:**
```
Osmanlı yaz    → kaynaksız hâkimiyet iddiası      ✗
devletsiz yaz  → Suriye-Irak arasına beyaz delik  ✗
GERÇEK         → aşiret nüfuzu: ne mülkiyet ne boşluk
```
TDV `necid`in *"geleneksel idarelerinin devamı"* ifadesi tam bu üçüncü hâli
anlatıyor. ⇒ **Hamâd, `S-007` (benekli nüfuz alanı) kaleminin şimdiye kadarki
en somut gerekçesidir**: kalem olmadan doğru yazılamayan bir yer.

## ③ SEYREKLİK LİSTESİNE `kasitli_bosluk` SÜTUNU GEREKİYOR — bulgu

🔴 **Kendi çıkardığım listenin yapısal kusuru, koordinatör yakaladı.**
"Nokta başına km²" ölçütü bir bölgenin **aç** mı yoksa **kasten boş** mu
olduğunu ayırt edemiyor. Ham liste bu yüzden Sahra · Rub'ul Hâlî · Nûbe
çölünü tepeye koyuyordu ve bir sonraki oturum "buraları doldurayım" diye
okuyabilirdi.

📌 Ama tersi de doğru ve bu partide ölçüldü: **kasten boş bölgeye nokta
EKLENMEZ değil, kasten boş bölgeye SAHİPSİZ nokta EKLENİR.**
`p5/H-0007`in yıldızı bunun kanıtı: kuzey Arabistan kasten boştu ama
haritada boş GÖRÜNMÜYORDU — Maan'ın Osmanlı peteği 268 km doğuya uzanıp
orayı **Osmanlı boyuyordu.** Boşluk yalnız niyette vardı, haritada yoktu.
Sahipsiz nokta koyunca boşluk gerçekten boş göründü.

⇒ Listeye eklenecek sütun: her hücre için **"içindeki/komşu noktalar sahipli
mi"**. Üç sınıf çıkar:
```
AÇ            nokta yok, komşuları sahipli   → gerçek eksik, nokta gerekir
KASTEN BOŞ    sahipsiz nokta VAR             → dokunma
YALANCI BOŞ   sahipsiz OLMALI ama noktası yok → SAHİPSİZ nokta gerekir  ← H-0007
```
Üçüncü sınıf bugüne kadar birinci gibi görünüyordu.

---
---

# PARTİ 3 — VERİ ARAŞTIRMA (`data/yerlesimler_ek2.js`, 3 nokta + 10 teşhis)

**Durum:** 🟢 HAZIR. Dosya bağlı değil, koşuyu bozmaz.
Kaynak yetkisi TDV + akademik idi; **akademik kaynağa HİÇ başvurulmadı** —
Pitcher'a erişimim yok ve erişmediğim esere atıf yazmaktansa üç adayı
atladım (aşağıda).

## Eklenen 3 nokta

| ad | lat, lon | zincir | TDV | kapattığı |
|---|---|---|---|---|
| Koniçe (Konjic) | 43,652 · 17,962 | Travnik (1463-06-01) | `konice` | p3/H-0016 |
| Visoko | 43,989 · 18,179 | Saraybosna (1448-01-01) | `saraybosna` + içerik | p3/H-0016 |
| Boğaziçi (Rumeli yakası) | 41,150 · 29,050 | İstanbul (1453-05-29) | `bogazici` | p3/H-0001 · H-0013 |

Sekiz kontrol temiz · Değişmez 2 borcu **sıfır** (4 kırılma günü de veride var)
· yeni renk yok · maske 3/3 · en yakın çift 6,91 km.

**Ölçülen etki:** Saraybosna'nın ikinci-en-yakın noktası **49,3 → 23,4 km**.
Boğaz'ın kuzeyinde (41,20K/29,10D) kazanan artık Bizans (7,0 km) — Anadolu
Hisarı (13,5 km) değil.

## On maddenin sınıflandırması

### 🔴 VERİ HATASI — Oturum 0'a bildirildi (yerlesimler.js onun dosyası)

**KARAMAN ÜÇLÜSÜ — üç şikâyet, tek sebep.**
```
madde 1468-01-01  "Karaman'ın kesin ilhakı"          ← ilhak MADDESİ
madde 1468-01-17  "İskender Bey'in ölümü"
madde 1468-04-01  "Uzun Hasan'ın Karakoyunlu'ya son vermesi"
VERİ  1468-04-01  Konya·Karaman·Ermenek·Aksaray·Niğde  d: başlıyor
```
İlhak, kendi maddesinde değil **iki madde sonra**, Uzun Hasan maddesinin
altında boyanıyor — kullanıcının `H-0020`de yazdığı cümlenin birebir kendisi.
🔴 **Değişmez 2 bunu GÖREMİYOR**: 1468-04-01'de bir madde VAR, sadece yanlış
madde. `CLAUDE.md §3`'ün gerekçesinde yazan *"değişim, o güne rastgele denk
gelen alakasız bir maddenin altında belirir"* vakasının canlı örneği.
⇒ Düzeltme: `1468-04-01` → `1468-01-01`. Yeni gün açılmıyor.

**KIZILDENİZ (p5/H-0008).** TDV `habes-eyaleti`: eyalet 5 Temmuz 1555'te
kuruldu, Masavva 2 Nisan 1557'de alındı, kıyı *1517'de Memlükler'den
devralınmadı.*
```
Ebû Ramâd (Şalâtîn) 23,13K   d: 1517-01-22  ← Ridâniye günü, Kahire'nin 750 km güneyi
Halâib·Sevâkin·Akīk·Tokar·Sinkat  d: 1517-04-13
Masavva·Arkîko·Dahlak             d: 1557-01-01  ← DOĞRU olan
```
Aynı kıyının kuzey yarısı 1517, güney yarısı 1557 — 40 yıl fark.
⇒ Düzeltme: altısı da `1557-01-01` (mevcut kırılma).
⚠️ `§3.5.1` gereği öbür uç: bu, 1517-1557 arası 40 yıllık bir pencere açar;
sahibi yazılmazsa **hayalet taraf değiştirir.** TDV "devralınmadı" dediğine
göre doğru cevap muhtemelen sahipsiz (Beca) → `kasitli_bosluk` + `neden`.

**GEMLİK (p2/H-0001).** Görsel künyesi 1324-03-01, 39,37-40,79K/27,47-29,40D.
```
Ulubat   40,171/28,573  d: 1303-01-01   ← 31 YIL ERKEN
Gölyazı  40,172/28,650  d: 1334-01-01     6,6 km ötede
Kirmasti 40,035/28,411  d: 1334-01-01    14 km
Mihaliç  40,214/28,361  d: 1334-01-01    18 km
```
⚠️ TDV `ulubat` ÖLÜ — anomali ölçüldü, hüküm kaynağı bekliyor.

**ORDU/ÜNYE (p3/H-0007).** Etiket var ama devlet adı değil:
`v:[… k:"Yıldırım Bayezid'e bağlılık"]` — İLİŞKİYİ yazıyor, DEVLETİ değil.
Kullanıcı "üstünde beylik ismi yok" derken tam bunu görmüş.
⇒ `k:` → "Hacıemîroğulları Beyliği (Osmanlı tâbii)".

### 🟢 GERÇEK — düzeltme yok, kullanıcıya açıklama
```
p3/H-0003 Karaman'a katılmayan topraklar → Alanya·Anamur 1471, Silifke 1473;
          Taşeli sahili gerçekten 3-5 yıl daha direndi.
p3/H-0010 Aydınoğulları hortluyor        → Cüneyd Bey 1421-1425 beyliği
          fiilen diriltti. Düzmece Mustafa maddesinin ÜSTÜNDE görünmesinin
          sebebi ikisinin AYNI GÜNÜ paylaşması (1421-08-15).
p3/H-0011 Germiyan ayrı katman           → Timur beylikleri diriltti;
          Germiyan 1402-1429 bağımsız, 1429'da MİRASLA geçti. "Geri planda"
          görünmesi çizim sırası — ARAYÜZ'ün işi.
p3/H-0021 Livno / Batı Bosna             → 1469'da Livno ve Travnik Osmanlı;
          Yayça·Banaluka·Knin 1528'e, Klis 1537'ye kadar Macaristan'da.
p4/H-0002 Bucak bozkırı                  → Kırım bozkırı DEĞİL: Tuna ile
          Dinyester arası (45-46,5K/28-30D), Kırım'dan ~400 km batıda.
          Kili (39 km) ve İsmail (57 km) yutuyor, ikisi de doğru sahipli.
          Gösterim kaba ama YANLIŞ DEĞİL.
```

### 🔴 KENDİ HÜKMÜMÜ DÜZELTİYORUM — p2/H-0014 SAROZ

Koordinatöre **"seyreklik değil, veri hatası"** diye yollamıştım. **Yanlıştı,
ve sebebi örnek noktamı yanlış yerden seçmemdi.** 50 km yarıçapta 7 nokta
saymıştım — ama o yedinin çoğu YARIMADANIN ÜSTÜNDE; asıl boşluk
**Bolayır ↔ Keşan arasındaki 36 km'lik koridor.**

Gelibolu'nun alınışı gününde (1354-03-02) kuzeye tarama:
```
40,55K 26,75D → Bolayır  2,0 km  OSMANLI     ⎫
40,60K 26,75D → Bolayır  7,6 km  OSMANLI     ⎪ Saroz körfezinin
40,65K 26,75D → Bolayır 13,1 km  OSMANLI     ⎬ KUZEYİ — fetihten
40,70K 26,75D → Bolayır 18,7 km  OSMANLI     ⎪ bir gün önce BİZANS
40,75K 26,75D → Keşan   14,7 km  bizans      ⎭
```
⇒ Bolayır'ın peteği fetih günü **19 km kuzeye**, körfezin başını aşıp Trakya
anakarasına uzanıyor. Kullanıcının gördüğü şey birebir bu.
⇒ **SINIF: SEYREKLİK ARTEFAKTI** (Bolayır 40,53 ↔ Keşan 40,85 arası 36 km
boş). Büyüklüğü ~19 km ve **3 yıl** (Keşan·İpsala·Malkara 1357-01-01'de
Osmanlı oluyor) — yani küçük ve kısa, ama gerçek.
🔴 **Nokta EKLENEMEDİ:** aradaki tek aday Evreşe, adını Gazi Evrenos'tan alan
bir OSMANLI devri yerleşimi — 1357 öncesi Bizans noktası olarak yazılamaz.
Kaynaklı bir Bizans yerleşimi bulunamadı. Madde teşhisli ama açık.

## Eklenmeyenler
```
🔴 Kamengrad · Zenitsa · Prusac (Akhisar) · Sanski Most — TDV'de madde YOK.
   `bihac` maddesi Kamengrad'ı yalnız bir listede anıyor, tarih vermiyor;
   Bihaç'ın kendi tarihi 1592 ama Kamengrad ondan onlarca yıl önce Osmanlı —
   zincirini kopyalamak onu 100 yıl GEÇ gösterirdi.
   ⇒ p3/H-0012 (Bosna ucu) AÇIK: 2. en yakın 33,2 km, değişmedi.
🟡 Marmara Adası (p3/H-0014) — DOKUNULMADI. Veri `bizans 1281→1453-05-29`,
   İstanbul'la AYNI GÜN; depoda o günü taşıyan yalnız iki kayıt var ve
   1450'de adanın altı komşusunun altısı da Osmanlı. Şüpheli ama TDV
   `marmara-adasi` ÖLÜ, fetih tarihi yok. Pitcher gerekiyor.
```

## Boğaz düzeltmesinin ölçülmüş SINIRI
`Boğaziçi (Rumeli yakası)` boğazın kuzey yarısını düzeltiyor. Ama
**Anadolu Hisarı ↔ Rumeli Hisarı 1,54 km** — depodaki en yakın iki nokta ve
Rumeli Hisarı `kur:1452-08-31` taşıdığı için 1452 öncesi peteği yok.
⇒ Rumeli Hisarı'nın tam karşısındaki ~2 km'lik şerit 1395-1452 arası Osmanlı
kalmaya devam eder; oraya 3 km kuralını çiğnemeden nokta konamaz. Tam çözüm
petek epokunda değişiklik ister — bu oturumun yetkisi dışında.

---
---

# PARTİ 4 — PRESİDİO'LAR + BOZKIR (`data/yerlesimler_ek3.js`, 5 nokta)

Sekiz kontrol temiz · Değişmez 2 borcu **sıfır** · Değişmez 3 çelişki 0 ·
maske 5/5 · yeni renk yok · sahipsiz sayacı **artmıyor**.
🔴 Koşu 12:06'da başladı; bağlı beş girdi dosyasının hiçbirine dokunulmadı.

## ① Kuzey Afrika presidio'ları

| ad | lat, lon | zincir | kaynak |
|---|---|---|---|
| Sebte (Ceuta) | 35,889 · −5,318 | fas → 1415 portekiz → 1581 ispanya | TDV `sebte` |
| Melîle (Melilla) | 35,292 · −2,938 | fas → 1497 ispanya | ⚠️ aşağıda |
| Mersa'l-Kebîr | 35,728 · −0,709 | Oran'ın birebir aynısı | TDV `vehran` |

**Melilla haritada HİÇ YOKTU ve boşluk ölçüldü: en yakın komşusu 112,86 km**
(Nedrûme); 1550'de çevresinin tamamı `zeyyani`. Yani bir İspanyol enklavı,
haritada Zeyyânî toprağı olarak görünüyordu.

⚠️ **Sebte'de olmayan bir kırılma yazmadım.** Zincir üç aşamalı görünüyor
(1415 Portekiz · 1581 İberya Birliği · 1640/1668 Portekiz ayrılığı) ama
**son aşama sahibi DEĞİŞTİRMİYOR** — Sebte 1581'den sonra kesintisiz
İspanya'da. Üçüncü dönem açılmadı; olmayan kırılma yazmak, olanı atlamak
kadar zararlıdır.

🔴 **MELİLLA BU PARTİNİN EN ZAYIF KAYDI ve zayıflığı dosyada yazılı.**
TDV `melile` ÖLÜ; içerik geçişlerinde Melîle 20 kez var ama **1497 tarihi
TDV'de HİÇ GEÇMİYOR** (yalnız 926'daki Endülüs zaptı ve "İspanya'nın elinde
tuttuğu"). Yer ve İspanyol hâkimiyeti sabit, **yalnız tarih sabit değil** —
1497 koordinatörün sevkinden geliyor.
⇒ Yine de eklendi, çünkü: kayıt s:→s: olduğu için hiç kırılma üretmiyor ·
112,86 km'lik gerçek bir boşluğu ve gerçek bir renk sınırını kapatıyor ·
tarih birkaç yıl oynasa da 1497-1923 boyunca sahip değişmiyor.
📌 **Kamengrad'dan farkı bu:** orada hiç tarih yoktu ve komşuyu kopyalamak
100 yıl yanlış olurdu; burada tarih var, yalnız TDV'siz.

📌 Mersa'l-Kebîr harita kazancı için değil (Oran'a 7,51 km, aynı zincir):
kronolojide `1708-04-04 "Vahran (Oran) ve Mersalkebîr'in İspanyollardan
alınışı"` maddesi VARDI ama haritada karşılığı olan bir yer YOKTU.
⚠️ Dürüstlük notu: Mersa'l-Kebîr gerçekte Oran'dan ÖNCE (1505) düştü;
TDV `vehran` onun için ayrı tarih vermediği için 1509-05-17 bırakıldı.

## ② Seyreklik listesi 6-15 — üç sınıf uygulandı

```
 6. 46K 36D Azak kuzeyi      181 km  AÇ           ✅ Camboyluk bozkırı
 7. 32K 40D Bâdiye/Şam çölü  176 km  ?            🟡 Hamâd sorusu AÇIK
 8. 48K 38D Donets bozkırı   171 km  AÇ           🔴 KİMLİK YOK
 9. 44K 42D Kuban/Stavropol  161 km  kısmen kapalı (Maykop·Kabartay)
10. 46K 42D Don aşağısı      156 km  AÇ           🔴 KİMLİK YOK
11. 46K 34D Kırım kuzeyi     150 km  AÇ           ✅ Yediçkul bozkırı
12. 30K 22D Sirte iç çölü    131 km  KASTEN BOŞ   ⛔ dokunulmadı
13. 48K 36D Harkov           130 km  AÇ           🔴 KİMLİK YOK
14. 44K 44D Kafkas kuzeyi    127 km  kısmen kapalı (Kabartay)
15. 46K 48D Astrahan         116 km  kapalı       (Rın kumulları, parti 2a)
```
**Ölçülen etki:** 11. hücrede en yakın nokta **137,1 → 32,4 km (4,2×)**,
6. hücrede **184,2 → 18,8 km (9,8×)**.

**Adlar uydurulmadı.** TDV `nogaylar`: *"Yedisan, Camboyluk, Bucak ve
Kuban… yaşamaktaydı"*; TDV `sahin-giray` Yedisan ile **Yediçkul'u** son
hanlık döneminde toprak olarak anıyor.

🔴 **Ve bu, depodaki açık bir soruyu bir adım ilerletiyor.**
`Bozkır (Deşt-i Kıpçak)` kaydında şöyle yazıyordu: *"1502 sonrası `kirim`
bırakıldı: bozkırın Kırım'da mı Nogay'da mı olduğu kaynakla ayrılamadı."*
TDV `giray` cevabı veriyor: *"Kuban, Bucak ve Yedisan'ın idaresi de
bırakılmıştı"* — bölükler **Nogay'dır ama idaresi Giray'ındır.**
⇒ `kirim` kimliği doğru seçim. `nogay` rengi BOYALAR'da VAR ama
kullanılmadı: o, hanlıktan bağımsız Nogay Ordası'nı gösterir.

## 🔴 8·10·13 EKLENMEDİ — sebep KİMLİK EKSİĞİ, seyreklik şüphesi değil

Donets · Don aşağısı · Harkov çevresinin sahibi dönem dönem **Zaporog
Kazak Ordası**, Lehistan-Litvanya, Kırım ve Rusya arasında değişiyor.
Atlasta Zaporog/Kazak Ordası kimliği **YOK** (`renkler.py`de `nogay` var;
`kazak-hanligi` başka şeydir — Orta Asya'daki Kazak Hanlığı).
İki uç da ölçüldü (`§3.5.1`): `kirim` yazmak Kırım'ı olmadığı yere taşırdı,
`rusya` yazmak Rusya'yı yüz yıl erkene çekerdi. **İkisi de yanlış ⇒ kayıt
açılmadı.**
📌 SIRADAKİ İŞ: `renkler.py` + `devletler.js`e Zaporog Kazak Ordası kimliği.
O gelince üç hücre tek partide kapanır.

## ③ MARMARA ADASI — üç yol denendi, üçü de tutmadı
```
① marmara-adasi           → slug ÖLÜ
② cezayir-i bahr-i sefid  → CANLI ama madde Marmara denizinden HİÇ söz
   etmiyor; eyalet Ege adalarıdır (Sakız·Rodos·Bozcaada·Limni·Midilli·
   İmroz·İstanköy·Meis)
③ arama "marmara adası"   → yalnız iki geçiş: `balikesir` (mermer yatakları)
   ve `cagaloglu-hamami` (Marmara adası nâibi) — ikisi de XVIII. yy
   idaresi, FETİH TARİHİ YOK
```
⇒ Şüphe yerinde duruyor (İstanbul'la aynı gün · o günü taşıyan yalnız iki
kayıt · 1450'de altı komşusunun altısı Osmanlı) ama **kaynak bulunamadı,
dokunulmadı.**

## 🔴 CERBE — Oturum 0'a iki düzeltme (kayıt bağlı dosyada)
```
① İSPANYOL DÖNEMİ YOK. TDV `cerbe`: İspanyollar 1560'ta ele geçirdi, kısa
   süre tuttu. Kayıtta hafsi → 1560-05-14 → Osmanlı; arada pencere yok.
   ⇒ s:→s: geçişi, KIRILMA ÜRETMEZ — borçsuz düzeltilebilir.
② FETİH GÜNÜ. Kayıt 1560-05-14 kullanıyor — o, DENİZ ZAFERİNİN günü.
   TDV: kale iki aylık kuşatmadan sonra 30 Temmuz 1560'ta düştü.
   ⚠️ Düzeltmek 1560-07-30 kırılması açar, o güne madde YOK (en yakın
     1560-05-14, 77 gün). Önce madde, sonra tarih.
```
