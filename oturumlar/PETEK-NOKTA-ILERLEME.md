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

> 🔴 **YENİ BİR OTURUM BURAYA GELDİYSE: önce dosyanın SONUNDAKİ
> "ÖLÇÜLMÜŞ SABİTLER" bölümünü oku.** Aşağıdaki parti anlatıları nasıl
> ölçüldüğünü anlatır; o bölüm **ne ölçüldüğünü** verir. Orada yazan hiçbir
> sayı yeniden ölçülmesin.

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

---
---

# PARTİ 5 — CERBE MADDELERİ + HAMÂD ÖLÇÜMÜ

## A · `data/olaylar_ek12.js` — iki madde (YENİ dosya, yayına bağlı DEĞİL)

```
1560-01-01  Haçlı donanması Cerbe'yi işgal etti — Turgut Paşa'nın üssü elden çıktı
1560-07-30  Cerbe kalesinin düşüşü — adanın Osmanlı idaresine geçişi
```
Ayrıştırma ✓ · eksik alan 0 · `k:`/`etiket:` sözlük içi ✓ · `kaynak:"cerbe"`
(slug CANLI, `<title>` ile sınandı).

🔴 **Borç kapandı:** `1560-07-30`'a en yakın madde artık **0 gün**. Önce
77 gündü (1560-05-14 "Cerbe Deniz Zaferi") — yani Cerbe kaydının `d:`
başlangıcı bu madde olmadan taşınamazdı. **Madde önce, tarih sonra.**

⚠️ **A-1'in günü UYDURULMADI.** TDV `cerbe` yalnız *"1560 yılı başlarında"*
diyor; ay ve gün kaynakta yok. `t:` ev kuralına göre yer tutucu
(`1560-01-01`), gerçek belirsizlik `gun:` alanında açıkça yazılı —
`olaylar_ek11.js`in Bağdat 1401 maddesindeki desenin aynısı.
📌 Bu madde Değişmez 2 için **gerekli değil** (İspanyol dönemi s:→s:
geçişidir, kırılma üretmez); kronoloji eksik olduğu için yazıldı. Ve
1559-12 / 1560-02 aralığında başka kırılma bulunmadığı ölçüldü — yani var
olan bir boşluğu yanlışlıkla da kapatmıyor.

### 🔴 CERBE KAYDI `yerlesimler_ek4.js`e YAZILAMAZ — ölçüldü

Koordinatör iki seçenek sunmuştu; **ikincisi teknik olarak imkânsız.**
`arac/girdi.py` `yukle()` aynı adı iki dosyada görünce çöküyor:
```python
if y["ad"] in nereden: raise ValueError("AD ÇAKIŞMASI: …")
```
`"Cerbe (Djerba)"` zaten `yerlesimler.js`te (bağlı) olduğu için ikinci bir
kayıt **yükleyiciyi üretim başlamadan düşürür.**
⇒ Düzeltme yalnızca `yerlesimler.js` içinde, yerinde yapılabilir. Önerilen
son hâl ve `y:"savas"` → `y:"kusatma"` notu `olaylar_ek12.js` başlığında.

---

## B · HAMÂD — soru ölçülebilir hâle getirildi

**Kutu:** 30,5-35,0K / 36,5-42,5D · **248.342 km²** · 382 kara örneği (0,25°).

### 🔴 EN ÖNEMLİ BULGU: soru ZATEN CEVAPLANMIŞ — varsayılanla

```
1600'de Hamâd'ın 248.342 km²'sinin 182.881 km²'si (%74) OSMANLI boyanıyor.
```
Ve bunu kimse KARAR VEREREK yapmadı: çevredeki vaha kasabaları (Tedmür,
Âne, Hît, Deyrizor, Şam) Osmanlı olduğu için petekleri çöle uzanıyor.
**Emilme yarıçapı ortalama 121 km, en uzağı 268 km.** Osmanlı gövdesi
kutunun doğu kenarına (42,38°D) ve güney kenarına (30,62°K) kadar varıyor.

⇒ **Hiçbir şey yapmamak = 182.881 km² için "Osmanlı bâdiyesi" demek.**
Karar zaten verilmiş durumda; verilmemiş olan yalnız onun *bilinçli* olması.

### Hamâd'ı yutan noktalar (alan ağırlıklı)
```
Tedmür (Palmyra)      48.231 km²  %19,4   kutu merkezine 231 km
Vâdî Sirhân           45.548 km²  %18,3                  253 km   ← SAHİPSİZ
Âne                   37.271 km²  %15,0                  296 km
Hît                   31.295 km²  %12,6                  325 km
Şam                   20.092 km²  % 8,1                  311 km
Dûmetülcendel (Cevf)  19.912 km²  % 8,0                  329 km
Deyrizor              14.685 km²  % 5,9                  294 km
```
📌 İkinci sıradaki **Vâdî Sirhân benim parti 2a'da koyduğum sahipsiz
dolgudur** ve tek başına kutunun %18,3'ünü sahipsiz tutuyor. Yani aracın
çalıştığı ölçüldü: **bir sahipsiz nokta ~46.000 km² döndürüyor.**

### Sahiplik dağılımı, tarih tarih
```
                 1550      1600      1700      1800      1900
OSMANLI       182.881   182.881   182.881   182.881   182.881
SAHİPSİZ       65.461    65.461    65.461    65.461    45.548
sammar              —         —         —         —    19.912
```

### 🔴 KARAR TABLOSU — bir sahipsiz dolgu kaç km² döndürür
```
konum                     Osmanlı'dan DÜŞEN      toplam kaptığı
Rutbe hizası  33,05/40,28    53.913 km² (%21,7)      63.765 km²   ← en etkili
Hamâd kuzeyi  33,80/39,00    49.774 km² (%20,0)      55.656 km²
kutu merkezi  32,75/39,50    46.121 km² (%18,6)      59.230 km²
Hamâd güneyi  31,50/40,50    33.414 km² (%13,5)      53.275 km²
Kaf/V. Sirhân 31,60/38,20    13.042 km² (% 5,3)      41.305 km²
```

### Karar artık tek satır
```
"Osmanlı bâdiyesi"     → HİÇBİR ŞEY YAPMA. Harita zaten %74 Osmanlı diyor.
"devletsiz aşiret çölü" → Rutbe hizasına 1 sahipsiz dolgu: %74 → %52
                          + Hamâd kuzeyine 2.si: %74 → ~%32
```
⚠️ Ve `§3.5.1` gereği öbür uç: dolgu koymak Osmanlı'yı geri çeker ama
**Suriye ile Irak arasını da açar.** Yukarıdaki "toplam kaptığı" sütunu o
riski ölçüyor — Rutbe hizasındaki nokta 63.765 km²'yi sahipsiz yapar ve
bunun 9.852 km²'si bugün zaten sahipsiz olan alandır.

## C · MARMARA ADASI — KAPALI
Koordinatörün hükmü kabul: üçüncü deneme yapılmadı. `KAYNAK BULUNAMADI`
olarak kapandı; şüphe `PARTİ 4` bölümünde kayıtlı.

---
---

# PARTİ 6 — HAMÂD DOLGUSU + SEYREKLİK LİSTESİNİN YENİDEN ÖLÇÜMÜ

## ① `data/yerlesimler_ek4.js` — tek nokta, ölçülmüş karar

```
Hamâd (Bâdiyetü'ş-Şâm içi)   33,05K / 40,28D   tur:"bolge"   d:[]  (kalıcı sahipsiz)
```
Sekiz kontrol temiz · **Değişmez 2 borcu sıfır** (hiç `d:`/`v:` yok, kırılma
üretmiyor) · maske ✓ · 3 km: en yakın nokta **220,05 km** (Âne) — depodaki
en izole kayıt.
🔴 Oturum 0: bağlarken `BEKLENEN_SAHIPSIZ` **55 → 56**.

**Tahmin tuttu:** öngörü 53.913 km² düşüş, gerçekleşen **53.912 km².**
```
ÖNCE   OSMANLI 182.881 km² (%74)   SAHİPSİZ  65.461 km² (%26)
SONRA  OSMANLI 128.969 km² (%52)   SAHİPSİZ 119.373 km² (%48)
```

📌 `kasitli_bosluk:` YAZILMADI ve sebebi PARTİ 2a'da ölçülmüştü:
`denetle_bosluk.py`nin ilk süzgeci **kalıcı sahipsizliği** zaten yakalıyor
(`not (d or v or s)` → "KASITLI SAHİPSİZ"); bayrağa sıra gelmiyor. Bayrak
yalnız **dönemi olan** noktalar için gerekli (Dûmetülcendel, Teymâ, Necid ×2).

## ② SEYREKLİK LİSTESİ YENİDEN ÖLÇÜLDÜ — çünkü liste DEĞİŞTİ

İlk liste **1588** noktayla çıkarılmıştı; bugün **1616** (+28). Koordinatör
"1-5. sıralara dön" dedi — ölçüm gösteriyor ki **o beşi zaten kapandı:**
```
1. 30K 38D  261 km  → Vâdî Sirhân · Dûmetülcendel · Teymâ   (parti 2a)
2. 30K 40D  252 km  → aynı üçlü + Hamâd dolgusu             (2a + 6)
3. 48K 48D  249 km  → Rın kumulları                          (2a)
4. 32K 38D  221 km  → Hamâd dolgusu                          (6)  ← bugün
5. 48K 46D  190 km  → Rın kumulları                          (2a)
```
⇒ Liste 261 km'den başlıyordu, artık **171 km'den** başlıyor.

### YENİ HALKA 0 ÇEKİRDEK — ilk 15
```
 #   hücre      kara km²  nkt  yarıçap çeş  sınıf         ülke
 1  48K 38D      32.518    0    171km   4   🔴 AÇ         Ukrayna
 2  44K 42D      35.049    0    161km   4   🔴 AÇ         Rusya
 3  30K 40D      31.906    0    156km   2   kısmen dolgu  Suudi   ← kapandı
 4  46K 42D      33.804    0    156km   3   🔴 AÇ         Rusya
 5  30K 22D      42.486    0    131km   2   🔴 AÇ         Libya   ← DÜZELTME
 6  44K 44D      35.049    0    127km   5   🔴 AÇ         Rusya
 7  48K 48D      32.518    0    127km   2   🔴 AÇ         Kazakistan
 8  48K 36D      32.518    1    116km   4   🔴 AÇ         Ukrayna
 9  48K 30D      32.518    0    114km   3   🔴 AÇ         Ukrayna
10  46K 48D      30.054    1    114km   3   🔴 AÇ         Kazakistan
11-15  46K 40D · 48K 40D · 44K 40D · 44K 46D · 46K 46D    Rusya, 96-112 km
```

🔴 **15'in 13'ü Karadeniz-Hazar bozkırı ve HEPSİ AYNI ENGELDE:** Zaporog /
Don Kazak Ordası kimliği yok. Ölçtüm — 48K 38D hücresini bugün **Rostov
(Don) %36 · Harkov %31 · Bozkır (Deşt-i Kıpçak) %16** yutuyor ve **üçü de
1600'de `kirim` taşıyor.** Yani bozkır sahipsiz değil, **Kırım boyanıyor**;
soru "nokta ekleyelim mi" değil, "orası 1600'de gerçekten Kırım mıydı".
⇒ Kimlik gelmeden nokta eklemek hatayı büyütür. **Bekliyor.**

## 🔴 KENDİ ETİKETİMİ DÜZELTİYORUM — 30K 22D (Libya)

PARTİ 4'te bu hücreyi **"KASTEN BOŞ ⛔ dokunulmadı"** diye yazmıştım.
**YANLIŞTI** — adına bakıp ölçmemiştim. `Sirte iç çölü` dolgusu 28,50K/18,50D'de,
yani bu hücreden ~400 km batıda. Hücreyi gerçekte kim yutuyor:
```
Tobruk   18.527 km² %43,6   1600 → OSMANLI
Cağbûb   10.023 km² %23,6   1600 → OSMANLI
Derne     5.937 km² %14,0   1600 → OSMANLI
Câlû      5.347 km² %12,6   1600 → OSMANLI
⇒ dolgu payı %0. Sınıf: 🔴 AÇ, Hamâd'ın birebir ikizi.
```
📌 Ders: **sınıfı ADDAN değil ÖLÇÜMDEN oku.** "Sirte iç çölü diye bir dolgu
var, demek ki orası kasten boş" çıkarımı, tam da bu oturumun başkalarına
söylediği hatanın kendisiydi.

### Libya iç çölü — Hamâd yöntemiyle ölçüldü (karar hazır)
```
kutu 27,5-31,5K / 18,0-25,0D · 279.356 km² · ort. yarıçap 104 km
1600'de OSMANLI boyanan: 179.166 km² (%64)
yutanlar: Cağbûb %20,8 · Câlû %18,1 · Sirte iç çölü %18,0 (dolgu) ·
          Ecdâbiye %16,2 · Serîr Kalanşû %10,8 (dolgu) · Serîr %5,9 (dolgu)

bir sahipsiz dolgu kaç km² döndürür:
   kutu merkezi  29,50/21,50 → 38.921 km² (%13,9)
   çöl doğusu    29,00/23,50 → 37.229 km² (%13,3)
   Sirte arkası  30,00/20,50 → 30.872 km² (%11,1)
```
⚠️ Hamâd'dan farkı: burada **zaten üç dolgu var** (%34,7 kaplıyor), o yüzden
marjinal kazanç daha düşük (%13,9 vs %21,7). Aday ama acil değil — karar
senin, ölçüm hazır.

### HALKA 0-1'in başı artık Batı Afrika
Moritanya/Mali, 900-1014 km yarıçap, çoğu **KASTEN BOŞ** (Sahra dolguları).
`ONCELIK.md §4` gereği HALKA 2-3, sıraları gelmedi.

---

## PARTİ 6 EKİ — `zaporojye` kimliğine ilk gövde

`data/yerlesimler_ek4.js` **2 nokta** oldu. Sekiz kontrol temiz · Değişmez 2
borcu sıfır · maske ✓ · 3 km en yakın 95,8 km · yeni renk yok.

```
Zaporojye Seçi   47,75K / 34,80D   kale
s: altinorda 1281→1502-03-01 · kirim 1502→1552-01-01
   zaporojye 1552-01-01→1775-06-16 · rusya 1775-06-16→1923
```
Ölçülen gövde: **33.669 km²** (Dinyeper kutusunun %22'si). RENK'in
*"① EKSİK, GÖVDE BEKLENMİYOR"* bayrağı kapandı.

### 🔴 AMA SEVKTEKİ ÜÇ HÜCREYE DEĞİL — coğrafya tutmadı
```
hücre 8  Donets      Seç'e 317 km      hücre 10 aşağı Don  Seç'e 604 km
hücre 13 Harkov      Seç'e 191 km
```
TDV `ukrayna`: Seç, Dinyeper'in **çağlayanları (Porog)** bölgesinde ~1552'de
kuruldu; **"Don Kazakları ayrı bir topluluktu, farklı coğrafî bölgede."**
`devletler.js` özeti de *"Dinyeper aşağısında"* diyor.
⇒ Üç hücreye `zaporojye` yazmak kimliği 200-600 km uzağa taşımak olurdu —
Kırım'ı olmadığı yere taşımaktan farkı yok. **Açılmadı.**

**Yeni engel eskisinden farklı:** "kimlik yok" değil, **"kimlik var ama
coğrafyası tutmuyor."** 8 ve 10 **Don Kazak Ordası** toprağıdır ve o kimlik
atlasta yok. 13 (Harkov) ise zaten periyotlu: `kirim 1441→1654-01-01 → rusya`
— Sloboda Ukrayna'nın kuruluş yılı. Orada eksik olan sahiplik değil çözünürlük.

### 1654 PEREYASLAV — iki uç gösterildi, karar yazılmadı
```
UÇ A  1654'ten s:rusya     TDV: "sadece himaye değil TÂBİYET"
      ⇒ gövde 102 yıla iner
      ✗ ama devletler.js 1775'e kadar yaşatıyor ve kendi kronolojisinde
        "1711 bir kesimi Osmanlı himayesine sığındı (Aleşki Seçi)" yazıyor —
        1654'te bitmiş devlet 1711'de Osmanlı'ya sığınamaz
UÇ B  1775'e kadar zaporojye   ⇒ gövde 223 yıl, künyeyle ve §3.5 ile uyumlu
      ✓ TDV'nin kendi cümlesi destekliyor: 1667 Andrusova'dan sonra Ukrayna
        ÜÇE bölünür — Sağ Yaka Lehistan, Sol Yaka Rusya, GÜNEY Kırım
        üzerinden Osmanlı nüfuzunda. SEÇ GÜNEYDEDİR.
```
🔴 **Çelişkiyi çözen ayrım:** Pereyaslav **HETMANLIĞI** (Sol Yaka) bağladı,
**SEÇ'i** (aşağı Dinyeper) değil. Aynı adı taşıyan iki ayrı şey.
Bu kayıt Seç'tir ⇒ **UÇ B yazıldı.**
⚠️ Sol Yaka Hetmanlığı için ayrı nokta açılırsa UÇ A geçerlidir ve o nokta
bu kaydın zincirini **kopyalamamalıdır.**

📌 SIRADAKİ İŞ (VERİ KİMLİK'e): **Don Kazak Ordası** kimliği. Gelince 8 ve 10
tek partide açılır; koordinatlar ve ölçümler `yerlesimler_ek4.js` sonunda.

---

## PARTİ 6 EKİ-2 — Libya dolgusu + Sloboda (ve bir itiraz)

`data/yerlesimler_ek4.js` **4 nokta** oldu. Sekiz kontrol temiz · Değişmez 2
borcu sıfır · Değişmez 3 çelişki 0 · maske 4/4 · yeni renk yok.
🔴 `BEKLENEN_SAHIPSIZ` **55 → 57** (iki kasıtlı dolgu: Hamâd + Libya).

| ad | lat, lon | tür | işlevi |
|---|---|---|---|
| Hamâd (Bâdiyetü'ş-Şâm içi) | 33,05 · 40,28 | bölge | kasıtlı dolgu — %74→%52 |
| Zaporojye Seçi | 47,75 · 34,80 | kale | `zaporojye`ye ilk gövde, 33.669 km² |
| Libya iç çölü (Sirte ardı) | 29,50 · 21,50 | bölge | kasıtlı dolgu — 38.921 km² |
| Sloboda bozkırı | 49,20 · 37,20 | bölge | çözünürlük — hücre 13: 115→67 km |

### 🔴 SLOBODA'DA `zaporojye` YAZMADIM — itiraz

Sevkte *"Harkov çevresi (Sloboda Ukrayna) → zaporojye ekseni, kimlik HAZIR,
aç"* deniyordu. **Yazmadım, sebebi kaynak yokluğu.**

TDV `ukrayna` Sloboda Ukrayna hakkında **hiçbir şey söylemiyor**: ne idarî
yapısı, ne Harkov'un kuruluşu, ne Sloboda alaylarının kime bağlı olduğu, ne
de 1667 bölüşümüne dahil olup olmadığı. Maddenin verdiği tek şey Andrusova'nın
**ikili** bölüşümü: *"Özü nehrinin batısı (Sağ Yaka) Lehistan'ın, doğusu
(Sol Yaka) Kiyef dahil Rusya'nın hâkimiyetine girdi."* Sloboda üçüncü bir
ad ve maddede geçmiyor.

⇒ `zaporojye` yazmak, **Don için reddettiğimin aynısı** olurdu: kimliği
coğrafyasının dışına taşımak. Ve bugünün kendi dersine aykırı: *"nokta
seyrekliği bir görüntü kusuru; yanlış kimlik bir İDDİA."*

📌 Ve gerek de yok: `Harkov` kaydı **zaten doğru periyotlu** —
`altinorda 1281→1441 · kirim 1441→1654-01-01 · rusya 1654→1923` — ve bu,
TDV'nin "Sol Yaka Rusya'nın" cümlesiyle uyumlu. Eksik olan **sahiplik değil
çözünürlük**tü.
⇒ Eklenen `Sloboda bozkırı` **yeni bir iddia taşımıyor**: zinciri Harkov'un
birebir aynısı, tek işi hücre 13'ün ortalama yarıçapını **115 km → 67 km**
(1,7×) indirmek.

⚠️ Koordinatör ısrar ederse `zaporojye`ye çevirmek tek satır — ama o zaman
bunun **kaynaksız bir kimlik iddiası** olduğu bu satırda yazılı kalsın.

### Don tarafı — değişmedi
Hücre 8 (Donets) ve 10 (aşağı Don) **açılmadı**: Don Kazak Ordası kimliği
yok, Seç 317-604 km uzakta. VERİ KİMLİK'te iş olarak duruyor.

---
---

# PARTİ 7 — HARKOV SIÇRAMASI, ve altından çıkan denetlenmemiş sınıf

## ① SORULAN SORUNUN CEVABI: Harkov YALNIZ, Karaman deseni YOK

`kirim → rusya` geçişleri, bütün tarih boyunca:
```
1585-01-01    1 — Voronej
1654-01-01    2 — Harkov + Sloboda bozkırı  (ikincisi benim kopyam)
1739-09-18    1 — Rostov (Don)
1774-07-21    1 — Kabartay (Nalçik)
1783-04-19   10 — Kırım ilhakı   ← tek olay, doğru küme
1829-09-14    3 — Çerkez kıyısı (Edirne)  ← tek olay, doğru küme
```
⇒ 1654'te bir kuşak değil **tek kayıt** el değiştiriyor. Karaman'daki gibi
"beş kayıt yanlış güne yapışmış" durumu **yok.**

1654-1721 penceresindeki büyük kümeler de sağlam çıktı — üçü de maddesine
**0 gün** uzaklıkta:
```
1671-01-01  33 kayıt  → "Cezayir'de dayı idaresinin başlaması"        ✓
1705-07-17  26 kayıt  → "Tunus'ta Hüseynî hanedanının kurulması"      ✓
1711-03-01  26 kayıt  → "Trablusgarp'ta Karamanlı hanedanının kuruluşu" ✓
```

## 🔴 ② AMA ALTINDAN BAŞKA BİR ŞEY ÇIKTI — ve bu Karaman'dan büyük

Harkov'un günü ölçülünce:
```
1654-01-01 (Harkov)  → en yakın kronoloji maddesi 560 GÜN uzakta
1654-01-18 (Poltava) → en yakın madde 577 GÜN uzakta
en yakın olan da alâkasız: "1652-06-20 Tarhuncu Ahmed Paşa'nın denk bütçe reformu"
```
⇒ **PEREYASLAV ANTLAŞMASI ATLASIN KRONOLOJİSİNDE HİÇ YOK.** Ukrayna'nın
Moskova hâkimiyetine girişi — bölgenin en sonuçlu olaylarından biri —
haritada iki kaydı boyuyor ama tek satır madde ile açıklanmıyor.

### Ve Değişmez 2 bunu göremez — TASARIMI GEREĞİ

Değişmez 2 yalnız `d:` ve `v:` dönem uçlarına bakar. Harkov'un geçişi
`s:kirim → s:rusya`, yani **yabancıdan yabancıya**. Harita rengi turuncudan
yeşile döner, kullanıcı görür — denetim görmez.

**Sınıfın boyu ölçüldü:**
```
s:→s: geçişi           3.384 adet · 717 ayrı gün
±30 günde maddesi YOK    494 gün · 1.640 geçiş   → %48
────────────────────────────────────────────────────────────
d:/v: kırılması (denetlenen)  496 gün · maddesiz 0   → %0
```
⇒ Denetlenen sınıf **kusursuz**, denetlenmeyen sınıfın **yarısı boşta.**

### En kalabalık maddesiz günler
```
1452-01-01  41  timurlu→karakoyunlu        243 gün   ← HALKA 1 (İran)
1644-04-25  37  ming→güney-ming             85 gün
1411-01-01  34  celayirli→karakoyunlu       47 gün   ← HALKA 1 (Irak)
1797-10-17  29  venedik→avusturya          238 gün   ← 🔴 HALKA 0-1, Campo Formio
1603-03-24  28  azuchi-momoyama→edo        211 gün
1368-04-01  27  yuan→ming                  609 gün
1526-04-21  23  delhi→babur                130 gün
1504-01-01  19  nube→funj                  365 gün   ← HALKA 1 (Sudan)
```
🔴 **1797-10-17 en dikkat çekeni:** Venedik Cumhuriyeti'nin sonu, 29 yerleşim
aynı gün Avusturya'ya geçiyor (Dalmaçya kıyısı, Herseknovi, Kotor, adalar) ve
238 gün içinde açıklayan madde yok. Osmanlı sınırının hemen dibinde,
kullanıcının defalarca ekran görüntüsü gönderdiği coğrafya.

### 📌 ÖNERİ — "Değişmez 2b" adayı
Bugünkü Değişmez 2'nin aynadaki eşi:
> *Haritada rengi değiştiren her `s:→s:` geçişinin de ±30 gün içinde bir
> maddesi olmalı.*

⚠️ Ama **1.640 geçiş bir oturumda kapatılamaz** ve hepsi aynı önemde değil:
%70'i HALKA 2-3 (Çin, Japonya, Hindistan) — `ONCELIK.md` gereği sıraları
gelmedi. Halka 0-1'deki günler önce sayılmalı; o alt küme muhtemelen
onlarca, binlerce değil.
⇒ Ölçüm hazır, karar koordinatörün. **Ben tek satır bile yazmadım** —
1.640 kalemlik bir borcu haber vermeden açmak, kapatmaktan kötü olurdu.

## ③ Harkov için somut öneri (tek satır, borçsuz)
`Poltava` aynı olayı **`1654-01-18`** ile yazıyor (Pereyaslav'ın günü),
Harkov ise `1654-01-01` yer tutucusuyla. İkisi aynı olaydır.
⇒ Harkov ve `Sloboda bozkırı` da `1654-01-18`e çekilebilir; `s:→s:` olduğu
için **hiçbir borç doğurmaz**, yalnız tutarlılık kazandırır.
⚠️ Kaydı `yerlesimler.js`te olduğu için Harkov'u ben değiştiremem; kendi
noktamı koordinatörün kararına göre hizalarım.

---
---

# PARTİ 8 — İDDİA DENETİMİ: "o tarihte madde var" ≠ "BU KAYDIN maddesi var"

## Ölçüm hunisi — ve iki kez daralttım, ikisinde de kendi sayımı çürüttüm

```
kırılma toplam (d:/v: dönem ucu)                    2.346
adı kronolojide hiç geçmiyor → HÜKÜM VERİLEMEZ        831   ← atlandı
✓ kendi maddesine ±30 günde yapışmış                  956
kendi maddesi 1 YILDAN uzak → başka olay              510   ← atlandı
🔴 KARAMAN DESENİ (30 gün < mesafe ≤ 1 yıl)             35
```

🔴 **İLK ÖLÇÜMÜM %56 DEDİ VE YANLIŞTI.** Ham test ("madde bu kaydı anmıyor")
1.313 vaka verdi. Listeye bakınca çürüdü: `1805-07-03 "Mısır valiliği fermanı"`
96 Mısır yerleşimini birden kapsıyor ve **doğal olarak her köyü anmıyor.**
Eyalet çapındaki maddeyi kusur saymak ölçümü çürütür.

🔴 **İKİNCİ ÖLÇÜM DE YANLIŞTI.** "Adını anan madde var mı" testi bu sefer
`Annaba — kendi maddesi 58.863 gün ötede` gibi satırlar üretti. 161 yıl
ötedeki bir madde **başka bir olaydır**, yanlış yapışma delili değil.
⇒ Pencere Karaman'ın kendi imzasına daraltıldı: **mesafe 30 gün ile 1 yıl
arasında** olmalı (Karaman'da 91 gündü).

📌 Üç ölçümün üçü de aynı veriden çıktı; fark, **soruyu doğru sormaktı.**

## 🔴 EN GÜÇLÜ VAKALAR — madde konusu tamamen başka

| kırılma | kayıt | yapıştığı madde | kendi maddesi |
|---|---|---|---|
| **1833-06-30** | **Karaman · Konya · Kütahya** | 1833-07-08 Hünkâr İskelesi Antlaşması | Kütahya 47 gün |
| **1517-05-01** | Mardin | 1517-04-18 Portekiz donanmasının Cidde'ye saldırısı | 365 gün |
| **1687-09-29** | Ösek (Osijek) | 1687-09-26 Atina'nın kaybı ve Parthenon patlaması | 233 gün |
| **1918-12-01** | Batum | 1918-11-13 İtilâf donanmasının İstanbul önlerine gelişi | 231 gün |
| **1912-11-01** | Tekirdağ · İmroz | 1912-11-03 Edirne kuşatması başladı | 262 / 365 gün |
| **1912-11-11** | Sakız | 1912-11-03 Edirne kuşatması başladı | 117 gün |
| **1656-08-21** | Limni | 1656-09-15 Köprülü Mehmed Paşa'nın sadrazamlığı | 39 gün |
| **1687-08-01** | Mora (Tripoliçe) | 1687-08-12 İkinci Mohaç bozgunu | 31 gün |

🔴 **1833-06-30 en net vaka ve Karaman'ın birebir tekrarı:** Karaman, Konya ve
Kütahya kayıtları **Hünkâr İskelesi Antlaşması'na** yapışmış. Oysa o üç yerin
Mısır işgalinden çıkışını anlatan olay **Kütahya Antlaşması'dır** (14 Mayıs
1833) ve Kütahya'nın kendi maddesi 47 gün ötede duruyor. Üç kayıt, yanlış
antlaşmanın altında el değiştiriyor.

## ⚠️ VE 35'İN HEPSİ KUSUR DEĞİL — sınıflandırma elle yapılmalı

Kalan vakaların bir kısmı **meşru**: madde doğru olay ama yerleşimin adını
saymıyor. Ölçtüm, örnekler:
```
1453-05-29  Boğaziçi (Rumeli yakası) ← "İstanbul'un Fethi"        ✓ doğru madde
1774-07-21  Hotin                    ← "Küçük Kaynarca"           ✓
1878-07-13  Eski Zağra               ← "Berlin Antlaşması"        ✓
1570-09-09  Tuzla (Larnaka)          ← "Lefkoşa'nın fethi"        ✓ aynı sefer
1913-05-30  Dimetoka                 ← "Londra Antlaşması"        ✓
1402-07-28  (4 kayıt)                ← "Ankara Savaşı — Fetret"   ✓
```
⇒ Kaba tasnifle **35 vakanın ~8-10'u gerçek kusur**, kalanı meşru kapsayıcı
madde. Otomatik test bu ayrımı YAPAMAZ — makinenin işi listeyi 2.346'dan
35'e indirmek, hükmü insan verir.

## 📌 `denetle_iddia.py` İÇİN ÖLÇÜT ÖNERİSİ
```
① kaydın adını anan bir madde kronolojide VAR MI?      yoksa → hüküm yok
② o madde kırılmaya ±30 günde mi?                       evetse → temiz
③ değilse, mesafe 30 gün-1 yıl arasında mı?             hayırsa → başka olay
④ ve kırılma gününde BAŞKA bir madde var mı?            varsa → 🔴 ADAY
```
Üçüncü şart olmadan liste 1.313'e, birincisi olmadan 831 ölçülemez kayda
şişer. **Dört şartın dördü de gerekli** — her biri bir yanlış sayımı kesiyor.

## Harkov sorusunun kapanışı
`kirim → rusya` tek günde: 1585 (1) · **1654-01-01 (2: Harkov + benim
kopyam)** · 1739 (1) · 1774 (1) · 1783-04-19 (10, Kırım ilhakı) ·
1829-09-14 (3, Edirne). ⇒ Harkov yalnız, Karaman deseni **yok**. Ama
`1654-01-01` gününün kendi maddesi de yok (Pereyaslav kronolojide eksik —
PARTİ 7).

---
---

# PARTİ 9 — 32 vakanın tasnifi + Halka 0-1 alt kümesi

## ① `Sloboda bozkırı` hizalandı — `1654-01-01` → **`1654-01-18`**
`Poltava` Pereyaslav'ın gerçek gününü zaten taşıyor; aynı olay iki farklı gün
olamaz. `s:→s:` geçişi olduğu için hiçbir borç doğmadı. Dosya sekiz kontrolden
temiz geçti. (Harkov Oturum 0'da.)

## ② HALKA 0-1 ALT KÜMESİ SAYILDI — 1.640 değil **586**

```
BÜTÜN KUTU         494 gün · 1.640 geçiş
HALKA 0-1          165 gün ·   586 geçiş   (%36)
HALKA 0 çekirdek    49 gün ·   235 geçiş   (%14)
```
📌 Halka 0-1'in 165 gününün **92'si tek geçişlik**, 73'ü çoklu — yani liste
"165 madde" değil, birkaç büyük olay + uzun bir kuyruk.

### Halka 0-1'in en kalabalık on günü
```
1452-01-01  41  timurlu→karakoyunlu     243g
1411-01-01  34  celayirli→karakoyunlu    47g
1797-10-17  29  venedik→avusturya       238g   ← 🔴 koordinatörün önceliği
1861-03-17  19  sardinya→italya          75g
1507-05-24  19  timurlu→iran            143g
1504-01-01  17  nube→funj               365g
1861-02-13  16  napoli→italya           107g
1516-01-23  15  almanya→ispanya          99g
1297-01-01  14  bizans→karesi           730g
1335-01-01  13  ilhanli→eretna          334g
```

## ③ 32 VAKANIN TASNİFİ — tahmin "8-10"du, ölçüm **12**

```
🔴 GERÇEK KUSUR    12 kayıt ·  9 gün
🟢 KAPSAYICI MADDE 17 kayıt
🟡 KARARSIZ         3 kayıt
```

### 🔴 GERÇEK KUSUR — madde kırılmayı AÇIKLAMIYOR

| kırılma | kayıt | yapıştığı madde | olması gereken |
|---|---|---|---|
| 1833-06-30 | **Karaman · Konya · Kütahya** | Hünkâr İskelesi Antlaşması | **1833-05-14 Kütahya Sözleşmesi** (47g) |
| 1656-08-21 | **Limni** | Köprülü'nün sadrazamlığı | **1656-07-13 "Bozcaada ile Limni'nin kaybı"** (39g) |
| 1687-08-01 | Mora (Tripoliçe) | İkinci Mohaç bozgunu (Macaristan) | Mora cephesi maddesi |
| 1687-09-29 | Ösek (Osijek) | Atina'nın kaybı ve Parthenon patlaması | Ösek'in kendi maddesi yok |
| 1837-10-13 | Konstantin | Cebel-i Dürûz ayaklanması (Suriye) | Konstantin'in işgali maddesi yok |
| 1912-11-01 | Tekirdağ · İmroz | Edirne kuşatması başladı | kendi kayıp maddeleri yok |
| 1912-11-11 | Sakız | Edirne kuşatması başladı | Sakız'ın Yunanistan'a geçişi |
| 1918-12-01 | Batum | İtilâf donanmasının İstanbul'a gelişi | Batum'un 1918 kaybı |
| 1517-05-01 | Mardin | Portekiz'in Cidde saldırısı | ⚠️ çelişki, aşağıda |

🔴 **İKİ VAKA ÖZELLİKLE AĞIR, çünkü DOĞRU MADDE ZATEN VAR:**
- **Limni** — kronolojide `1656-07-13 "Çanakkale bozgunu ve Bozcaada ile
  Limni'nin kaybı"` maddesi **adıyla duruyor**, ama kayıt 39 gün sonraki
  sadrazam atamasına yapışmış. Düzeltme: kırılmayı `1656-07-13`e çek.
- **1833 üçlüsü** — `1833-05-14 "Kütahya Sözleşmesi — Suriye ve Adana
  Kavalalı'ya"` maddesi var. Harita, Mehmed Ali'nin Anadolu'dan çekilişini
  **Rusya ile yapılan** Hünkâr İskelesi'ne bağlıyor: yanlış olmakla kalmıyor,
  **yanlış hikâye anlatıyor.**

⚠️ **MARDİN AYRI BİR SINIF — çelişki, yapışma değil.** Kayıt `d:1517-05-01`,
ama kronolojideki kendi maddesi `1516-05-01 "Koçhisar Savaşı ve Mardin ile
Urfa'nın fethi"` diyor: **tam bir yıl fark.** Hangisinin doğru olduğunu
belirlemek kaynak işi (kale 1517'ye kadar direndi mi?) — bu ölçüm yalnız
çelişkiyi gösteriyor, hükmü vermiyor.

### 🟢 KAPSAYICI MADDE — 17 kayıt, düzeltme YOK
```
1402-07-28 (4) Akşehir·Ayasuluk·Kemah·Tire ← "Ankara Savaşı — Fetret Devri"
1517-04-13 (3) Bahriye·Kına·Tahtâ          ← "Memlük Devleti'nin sonu"
1805-07-03 (2) Esna·Tûr                    ← "Mısır valiliği fermanı"
1912-10-18 (2) Derne·Tobruk                ← "Uşi Antlaşması"
1453-05-29 (1) Boğaziçi (Rumeli yakası)    ← "İstanbul'un Fethi"
1570-09-09 (1) Tuzla (Larnaka)             ← "Lefkoşa'nın fethi" (aynı sefer)
1774-07-21 (1) Hotin                       ← "Küçük Kaynarca"
1878-07-13 (1) Eski Zağra                  ← "Berlin Antlaşması"
1913-05-30 (1) Dimetoka                    ← "Londra Antlaşması"
1456-06-01 (1) Kili                        ← "Boğdan'ın haraca bağlanışı"
```

### 🟡 KARARSIZ — 3 kayıt, doğru olay ailesi ama adı geçmiyor
```
1912-10-24 Kırklareli ← "Şark Ordusu'nun bozgunu… Kumanova ve Selânik'in kaybı"
1913-06-28 Kavala     ← "II. Balkan Savaşı'nın başlaması"
1913-07-14 Gümülcine  ← "Edirne'nin geri alınışı"
```
Üçü de aynı savaşın içinde ama madde başka şehri anıyor. Kırklareli'nin
düşüşü (24 Ekim 1912) kendi adıyla anılmayı hak ediyor olabilir — hüküm
Oturum 0'ın.

## 📌 Ölçütün doğrulanması
Koordinatörün önerdiği ayrım (*"madde kırılmayı AÇIKLIYOR mu"*) 32 vakanın
tamamında işledi ve makine ile insan arasındaki sınırı tam yerine koydu:
**makine 2.346'yı 32'ye indirdi, tasnifi insan yaptı.**

---
---
---

# 🔴 ÖLÇÜLMÜŞ SABİTLER — 3 Ağustos 2026, PETEK/NOKTA

> **Bu bölüm yeniden ölçülmesin.** Yukarıdaki parti anlatıları *nasıl*
> ölçüldüğünü anlatır; burası *ne* ölçüldüğünü verir. Her satır o gün
> çalıştırılmış bir betiğin çıktısıdır, tahmin değildir.
> Yöntem: `veri-kaynak/motor_kara.geojson` 0,25° ızgarayla örneklenir
> (108.860 kara hücresi · 65.473.808 km²), her örnek için en yakın yerleşim
> ve o yerleşimin o tarihteki sahibi hesaplanır.

## ① PETEK GEOMETRİSİ — motorun davranışı sayıya döküldü

```
bir SAHİPSİZ dolgu noktası           46.000 - 54.000 km² döndürür
   ölçülen değerler:  Rutbe 53.913 · Hamâd kuzeyi 49.774 · kutu merkezi
   46.121 · Hamâd güneyi 33.414 · Libya merkezi 38.921
   ⚠️ Bölgede zaten dolgu varsa marjinal kazanç düşer (Libya %13,9 ↔ Hamâd %21,7)

emilme yarıçapı (çölde)              ortalama 104 - 121 km · en uzak 268 km
   Hamâd 121 km · Libya iç çölü 104 km

tahmin ↔ gerçekleşme sapması         1 km² (öngörü 53.913 → gerçek 53.912)
   ⇒ ölçüm aracının kendisi doğrulandı
```

## ② SEYREKLİK — nokta başına alan

```
Kırım yarımadası      29.940 km²   3 → 12 nokta    9.980 → 2.495 km²/nokta
Batı Anadolu (ref.)   93.839 km²      35 nokta              2.681 km²/nokta
⇒ 12 noktalı Kırım, Batı Anadolu'dan bir tık DAHA SIK

🔴 Görev tanımındaki "11 KAT SEYREK" ölçülünce tutmadı: 3,7× idi.
   Sebep: iki farklı taban (70.868 km² yarımadanın karası DEĞİL, üç noktanın
   petek alanı). Tek yöntemle ölçülünce fark küçüldü, hüküm değişmedi.

kutu içi kara toplam           65.473.808 km²
uzaklık dağılımı (alanca)      0-25 km %3,7 · 25-50 %8,1 · 50-100 %16,6
                               100-200 %24,2 · 200-400 %17,6 · 400+ %29,8
seyreklik listesinin başı      261 km (1588 nokta) → 171 km (1619 nokta)
```

### Nokta eklemenin ölçülmüş etkisi (şikâyet noktalarında, 2. en yakın)
```
p5/H-0007 çöl yıldızı      268 → 87 km      p5/H-0009 Hicaz kaması  310 → 94 km
Hazar kuzeyi               185 → 37 km      Saraybosna              49 → 23 km
Gümülcine                   72 → 43 km      Dubrovnik               43 → 22 km
Biga KD                     33 → 25 km      Sloboda (hücre 13)     115 → 67 km
Kırım kuzeyi               137 → 32 km      Azak kuzeyi            184 → 19 km
```

## ③ SAHİPLİK — "hiçbir şey yapmamak" ne demek

```
Hamâd (Bâdiyetü'ş-Şâm)  248.342 km²   1600'de %74 OSMANLI  → dolguyla %52
Libya iç çölü           279.356 km²   1600'de %64 OSMANLI  (3 dolgu zaten var)
Zaporojye Seçi gövdesi   33.669 km²   `zaporojye` kimliğinin İLK gövdesi
```
🔴 **Motor boşluğu komşunun kimliğiyle doldurur ⇒ her ölçülmemiş boşluk
sessizce verilmiş bir karardır.** Hamâd'da 182.881 km² için "Osmanlı
bâdiyesi" hükmü, kimse vermeden zaten yürürlükteydi.

## ④ DENETİM KÖRLÜKLERİ — üç tane ölçüldü

```
🔴 s:→s: GEÇİŞLERİ (yabancıdan yabancıya — harita rengi değişir)
   3.384 geçiş · 717 gün
   ±30 günde maddesi YOK:  494 gün · 1.640 geçiş   → %48
   ├─ HALKA 0-1:           165 gün ·   586 geçiş   → %36   ← kapatılabilir
   ├─ HALKA 0 çekirdek:     49 gün ·   235 geçiş   → %14
   └─ 165 günün 92'si TEK geçişlik (liste ≠ 165 madde)
   KARŞILAŞTIRMA — d:/v: kırılması (Değişmez 2'nin baktığı):
   496 gün · maddesiz 0 → %0
   ⇒ denetlenen sınıf kusursuz, denetlenmeyenin yarısı boşta
   📌 `denetle.py` bunu `2s` ile görüyor ama sayı kuyruk dosyalarına bölünmüş
      (asya 366 · avrupa 83 · ortaasya2 6 · ek3 5); TEK TOPLAM hiçbir çıktıda yok.

🔴 İDDİA DENETİMİ ("o tarihte madde var" ≠ "BU KAYDIN maddesi var")
   2.346 kırılma
   ├─  831 adı kronolojide geçmiyor → HÜKÜM VERİLEMEZ
   ├─  956 kendi maddesine ±30 günde yapışmış → temiz
   ├─  510 kendi maddesi 1 yıldan uzak → başka olay
   └─   32 ADAY  →  12 GERÇEK KUSUR · 17 kapsayıcı madde · 3 kararsız
   ⚠️ Ham test %56 (1.313) veriyordu ve YANLIŞTI — eyalet çapındaki madde
      (Mısır valiliği fermanı, 96 yerleşim) her köyü anmaz.

🔴 HAYALET DEVLET (CLAUDE.md §3.5) — künye ile veri çelişkisi
   `devletler.js` ömür penceresi bir DENETİM işlevi görüyor: Theodoro
   1349-1475, yani 1281'den `teodoro` yazmak devleti DOĞMADAN boyamak olurdu.
```

## ⑤ ŞEMA SINIRLARI — ölçülmüş, tasarım kararı bekliyor

```
kasitli_bosluk:  motor etkisi SIFIR   (`_kusatilmis` yalnız kur:/bit: taşıyan
                 noktalara bakıyor; 7/7 noktada ikisi de yok)
                 rapor etkisi 18 açık iş → 0
                 ⇒ yalnız DÖNEMİ OLAN dolgular için gerekli; kalıcı sahipsiz
                   olanı `denetle_bosluk.py`nin ilk süzgeci zaten yakalıyor
neden:           `denetle_bosluk.py:270` OKUYOR ama `girdi.py` BILINEN_ALANLAR'da
                 YOK → her yüklemede uyarı. Tek satırlık kayıt borcu.
m: alanı         zaman boyutu YOK ⇒ 1475 sonrası kurulan bir sancak, 1281'den
                 beri varmış gibi iddia ediyor. İki farklı çare ölçüldü:
                 Karabiga → gerçek merkezi yaz (zinciri aynıysa çözer)
                 Mankup   → alanı BOŞ bırak (aynı zincirli merkez yoksa)
                 İkisi de `kd:` alanı gelene kadar geçici.
ad çakışması     `girdi.py` `yukle()` aynı adı iki dosyada görünce ValueError
                 ⇒ bağlı bir kaydın düzeltilmiş kopyası AYRI DOSYAYA YAZILAMAZ
```

## ⑥ ÖLÇÜM DİSİPLİNİ — bugün altı kez kendi hükmümü düzelttim

```
① Saroz "veri hatası" dedim → SEYREKLİK çıktı (50 km'deki 7 noktanın çoğu
   yarımadanın üstündeydi; asıl boşluk Bolayır↔Keşan 36 km)
② "görsel pahalıdır" diye açmadım → metinde konum YOKMUŞ; iki görsel
   itirazımın yarısını düşürdü
③ 30K 22D'yi "KASTEN BOŞ" etiketledim → ölçüm AÇ dedi (dolgu 400 km batıda)
④ s:→s: maddesizliği %56 ölçtüm → eyalet maddeleri düşünce %48'e indi
⑤ "kendi maddesi var" testi 58.863 gün ötedeki maddeyi delil saydı → pencere
   Karaman'ın imzasına (30 gün-1 yıl) daraltıldı, 1.313 → 32
⑥ "8-10 gerçek kusur" tahmin ettim → 12 çıktı
```

### Kurala dönüşen dersler
```
· sınıfı ADDAN değil ÖLÇÜMDEN oku
· "görsel pahalıdır" ≠ "görsel gereksizdir" — metinde konum yoksa görsel TEK kaynak
· hiçbir şey yapmamak TARAFSIZ DEĞİL — motor boşluğu komşuyla doldurur
· kasten boş bölgeye nokta EKLENMEZ değil: kasten boş bölgeye SAHİPSİZ nokta EKLENİR
· olmayan bir kırılma yazmak, olanı atlamak kadar zararlıdır
· kimlik VAR ≠ coğrafyası TUTUYOR ("engel kalkmadı, DEĞİŞTİ")
· makine listeyi indirir, hükmü insan verir
· erişilemeyen esere atıf yazmaktansa adayı ATLA — negatif sonuç da sonuçtur
```

## ⑦ AÇIK KALAN — kaynak ya da kimlik bekliyor

```
Kamengrad · Zenitsa · Prusac · Sanski Most   TDV'de madde YOK      → p3/H-0012
Marmara Adası                                üç kaynak yolu kapalı → p3/H-0014
Saroz (Bolayır↔Keşan 36 km)                  Bizans noktası yok    → p2/H-0014
Don Kazak Ordası kimliği                     hücre 8 · 10          → VERİ KİMLİK
Mardin 1516 mı 1517 mi                       bir yıl çelişki       → ÇAPRAZ
Hamâd'ın 1517-1557 penceresi (Kızıldeniz)    sahibi yazılmalı      → §3.5.1
```

---
---

# PARTİ 10 — `ek3` uyuyan çatışma uyandırdı mı? **HAYIR** (ölçüldü)

## Yöntem
Komşuluk grafiği `renk_olc.komsuluk()`ün birebir kopyasıyla **iki kez** kuruldu
— `ek3` ile ve `ek3` olmadan — sonra kimlik çiftleri diff'lendi ve her yeni
çiftin ΔE'si `renk_olc.dE()` (CIE76, bindirilmiş hex) ile hesaplandı.
`ek3` = 9 nokta: Sebte · Melîle · Mersa'l-Kebîr · Yediçkul · Camboyluk +
Oturum 0'ın Portekiz Fası dördü (Arzila · Azemmûr · Mazagan · Safi).

## SONUÇ
```
ΔE<12 ÇATIŞMA SAYISI    ek3 YOKken 55  →  ek3 VARken 55     fark +0
kimlik çifti            1595 → 1596
ek3'ün ürettiği YENİ çift: 2
   ✓ ΔE 44,48  OSMANLI ↔ altinorda   (tanık Azak ↔ Camboyluk bozkırı)
   ✓ ΔE 31,17  granada ↔ portekiz    (tanık Sebte ↔ Cebelitarık)
```
🟢 **`ek3` hiçbir uyuyan çatışmayı uyandırmadı.** İki yeni komşuluk da eşiğin
çok üstünde. `renk_olc`un 56'sı ile RENK'in 55'i arasındaki fark **bu partiden
gelmiyor** — komşuluk ΔE<12 sayımı bu partiyle ve bu parti olmadan aynı: 55.
⚠️ Kalan farkın kaynağı bende ölçülemez: `renk_olc` ayrıca `ALTLIK` (eşik 15)
ve `ayni_anahtar` / `ayni_hex` kör noktalarını da sayıyor; ben yalnız
**komşu çifti ΔE<12** kolonunu ölçtüm. Fark muhtemelen sayım kapsamında,
yeni bir çatışmada değil — ama bunu RENK doğrulamalı.

## 🔴 YİNE DE RENK'E BİR ŞEY VAR — `altinorda ↔ lehistan` ΔE **8,37**
```
tanık: Poltava ↔ Camboyluk bozkırı
```
Bu çift `ek3`ten ÖNCE de vardı — yani **uyandırılmadı**. Ama `Camboyluk
bozkırı` ona **yeni bir tanık** ekledi: Karadeniz kuzeyi bozkırında iki
kimliğin paylaştığı sınır artık daha uzun, dolayısıyla çatışma haritada
**daha görünür**. Uyuyan çatışma değil, **derinleşen** çatışma.
📌 Bu, RENK'in "uyanma olasılığı" modeline eksik bir boyut ekliyor: bir merge
yalnız yeni çift DOĞURMAKLA zarar vermez, **var olan çiftin sınırını
uzatarak** da verir. İkincisini bugünkü ölçüt saymıyor.

## ⚠️ KARŞI-OLGU PÜRÜZÜ — ölçümün kendi sınırı
"ek3 olmadan" hâli **temiz bir karşı-olgu değil**: bir nokta çıkarılınca peteği
komşularına dağılır ve o komşular **birbirine değmeye başlar.** Ölçüldü:
```
ek3 çıkarılınca DOĞAN çift: 1 → ceneviz ↔ lehistan (ΔE 21,34, Kerç ↔ Poltava)
```
Yani "+2 yeni çift" ile "toplam +1" arasındaki fark bu. Diff yorumlanırken
**iki yön birden** okunmalı; tek yön okunursa nokta eklemenin etkisi olduğundan
büyük görünür.

---
---

# PARTİ 11 — "PETEK AYAKTA MI" · koşuyu beklemeden ölçülen kısım

MOTOR 3'ün sorusunun **geometri ayağı koşu çıktısına bağlı değil**: Voronoi
hücresi ve kara maskesi kesişimi bugünkü veriden hesaplanabilir. Ölçüldü —
bugün eklenen **40 noktanın hepsi** için ham hücre → kara payı.

## ① SONUÇ: %60 altındaki 15 noktanın **15'i de KIYIDA**

```
✗ %10 altı (7)   Balaklava 0,9 · Safi 2,8 · Yalta 5,5 · Boğaziçi 5,7
                 Sudak 6,4 · Mazagan 6,9 · Mersa'l-Kebîr 8,9
⚠ %10-60 (8)     Aluşta 21,3 · Gözleve 23,3 · İnkirman 28,3 · Karabiga 34,1
                 Sebte 35,8 · Arzila 38,5 · Azemmûr 44,8 · Eski Kırım 55,3
✓ %60+ (25)      Melîle 62,3 … Vâdî Sirhân · Teymâ · Hamâd · Tedmür  %100
```
🔴 **Korelasyon tam: %60 altındaki her nokta `liman` ya da kıyı `kale`si;
%100 çıkan her nokta iç bölgede (`sehir`/`bolge`).** Tesadüf değil, sebep.

## ② VE BU, "KUSUR" DEĞİL — sınıf ayrımı gerekiyor

Ceuta bugün **18,5 km²**dir. Peteğinin 4.345 km² olması *yanlış* olurdu;
145 km² zaten cömert. Balaklava bir liman burnudur. Yani:

> **Kıyı presidiosu için KÜÇÜK petek DOĞRU cevaptır.**

⇒ MOTOR 3'ün `%10 altı → maddeleri haritada GÖRÜNMEZ` bayrağı **iki ayrı
şeyi birleştiriyor**:
```
① geometrik doğruluk  — petek küçük çünkü YER küçük        ✓ doğru
② etiket görünürlüğü  — poligon küçük olduğu için yazı çizilmiyor  ← SORUN
```
İkincisinin çaresi nokta ya da yaslama DEĞİL, **asgarî etiket/işaretçi
kuralı** — yani ARAYÜZ'ün işi. Koordinatörün `geometri → SENDE ·
kronoloji → BENDE` ayrımına **üçüncü bir kutu** gerekiyor: `gösterim → ARAYÜZ`.

## 🔴 ③ AMA SEBTE'DE BİR UYUŞMAZLIK VAR — ve sebebi kodda yazılı

```
benim ölçümüm   ham Voronoi 12.066 km² → kara payı 4.323 km²
MOTOR 3         ham hücre    4.345 km² → kalan petek  145 km²
```
Kara payım (4.323) motorun **ham** hücresine (4.345) neredeyse eşit. Yani
motorun raporladığı kayıp **kara kesiminden ÖNCE** olmuş.

`uret_petek.py` sırası: Voronoi → **yaslama** → Chaikin → coverage_simplify
→ kıyı kesimi (satır 709, EN SON) → ada kuralı.
⇒ Kara kesimi son adım olduğuna göre, 4.345 → 145 kaybı **yaslamada** oluyor.

**ADA KURALI ELENDİ** — ölçtüm: Sebte, Tanca, Melîle, Balaklava, Eperjes ve
Mazagan'ın **altısı da aynı kara bileşeninde** (#2, Afro-Avrasya). Ceuta ayrı
bir ada/parça değil.

### Kalan tek aday: yaslama yarıçapı
```
nehir 0,30° ≈ 33 km · sırt 0,35° ≈ 39 km · KORUMA_PAYI 0,06° ≈ 6,7 km
Sebte'nin komşuları: Cebelitarık 28 km · Tanca 45 km
⇒ hücrenin yarıçapı yaslama yarıçapıyla AYNI MERTEBEDE, ve Rif sırtı tam orada
```
`uret_petek.py:503` bu çöküşü **Estergon ve Solnok için zaten belgelemiş**
("sınır şehrin kendi üstüne çöküyor ve petek yok oluyor"). Konan koruma
(`KORUMA_PAYI`) sınırın **yerleşimin üstüne** çekilmesini engelliyor — ama
**küçük bir hücrenin tümden yutulmasını** engellemiyor.

🔴 **BULGU (MOTOR 3'e):** yaslama yarıçapının hücre boyutuyla ilişkisi YOK.
Yarıçapı hücrenin kendi yarıçapının bir oranıyla sınırlamak (ör. yarısı)
Estergon yamasının genelleştirilmiş hâli olur.
⚠️ Bu bir **hipotez**: kodla ve sayılarla tutarlı, ama kesinleşmesi için
koşunun `PETEK_TAM` ↔ `PETEK_D` alanları gerekiyor. Ben ölçemem, MOTOR ölçer.

## ④ EPERJES AYRI — ve asıl endişe orada haklı
`Eperjes %2,4` **iç bölgede** (Slovakya). Kıyı kesimiyle de ada kuralıyla da
açıklanamaz ⇒ **yaslama çöküşünün saf örneği**, ve Torysa nehri üstünde.
📌 `CLAUDE.md §3.5.1`in "Yukarı Macaristan ~28.000 km² 91 yıl" kapanışı
**bu yüzden tutmamış olabilir** — nokta eklendi, peteği yaslamada eridi.
Koordinatörün endişesi yerinde; bu benim partim değil ama sınıfı aynı.

## 📌 DOKUZUNCU KONTROL ÖNERİSİ
Sekiz kontrolün dokuzuncusu: **"eklenen noktanın peteği ayakta mı"**
```
ham hücre → kalan petek oranı  ·  ✓ >%60  ⚠ %10-60  ✗ <%10
ve <%10 çıkan her nokta için SEBEP: kıyı / ada kuralı / yaslama / komşu
```
⚠️ Ama eşik `tur:`e göre olmalı — `liman` için %10 normal, `sehir` için alarm.
Bugünkü tek eşik kıyı noktalarını haksız yere suçlu gösteriyor.

---
---

# PARTİ 12 — YEDİ ÇİFTİN TARİHÎ HÜKMÜ

MOTOR 3 ölçtü, ben tarihe sordum. Tek soru: **bu toprak hangi şehrin
hinterlandıydı?** — "hangi ölçüt daha temiz" değil.

| # | çift | km² | hüküm |
|---|---|---|---|
| 1 | Eperjes ← Krakov | 24.480 | ✓ **yeni ölçüt doğru** |
| 2 | Reggio Calabria ← Sirakuza | 26.387 | ✓ **yeni ölçüt doğru** |
| 3 | Arkîko ← Dahlak | 3.223 | ✓ **yeni ölçüt doğru** |
| 4 | Arkot ← Madras | 7.702 | ✓ **yeni ölçüt doğru** |
| 5 | Perpignan ← Girona | 11.464 | ✓ **yeni ölçüt doğru** |
| 6 | Ankober ← Harar | 35.302 | 🟡 **belirsiz** — ama yeni ölçüt daha az yanlış |
| 7 | **Sebte ← Fas (Fez)** | **11.017** | ✗ **ESKİ ÖLÇÜT DOĞRU** |

## ✓ Beş tartışmasız
```
1 Eperjes    Sáros/Szepes, YUKARI MACARİSTAN. Karpatlar yüzyıllarca
             Macar-Leh sınırıdır; Slovak toprağı Krakov'un hinterlandı
             hiç olmadı. (Szepes şehirlerinin 1412-1769 rehin dönemi
             küçük bir enklavdır, bütün bölge değil.)
2 Reggio     Messina Boğazı iki AYRI krallığı ayırır — Kalabriya Napoli,
             Sicilya Sicilya. Ada anakarayı tutamaz.
3 Arkîko     Dahlak bir TAKIMADA; anakara kıyısı Arkîko'nundur. (2)'nin
             birebir aynı ilkesi.
4 Arkot      Karnatik nevvabının merkezidir; MADRAS bir Şirket
             faktoryasıydı (Fort St George), iç toprağı yoktu.
5 Perpignan  Roussillon Pireneler'in KUZEYİ. 1659 Pireneler Antlaşması'ndan
             sonra Fransa, öncesinde de dağın kuzey yamacı. Girona'nın
             hinterlandı değil.
```

## 🟡 6 — ANKOBER ↔ HARAR: belirsizliğin CİNSİ önemli
TDV `harar`: emirlik 1856'da *"yalnız şehir merkezi ve çevresinden ibaretti"*;
Harar ile Şeva arasındaki topraklarda **Oromo (Galla) hâkimiyeti** vardı;
Menelik şehri 7 Ocak 1887'de aldı.
⇒ O 35.302 km² **ikisinin de değildi — ÜÇÜNCÜ bir tarafındı.** İkisinden
birini seçmek modelin zorlaması, tarihin cevabı değil.
📌 Ama zorunlu seçimde **Ankober daha az yanlış**: Şeva krallığının
başkentidir ve gerçek bir toprağı vardı; Harar surla çevrili bir şehir
devletiydi. ⇒ yeni ölçüt kabul, **gerekçesi "temizlik" değil "Harar'ın
hinterlandı yoktu"**.
⚠️ Doğru çözüm bir Oromo kimliği ya da kasıtlı boşluktur — `S-007` kuyruğuna.

## 🔴 7 — SEBTE: YENİ ÖLÇÜT BURADA YANILIYOR
Ceuta bir **presidio**dur ve presidionun tanımı zaten şudur: surlar tutulur,
ötesi tutulmaz. 11.017 km²'lik Fas içi **Fas'ındı**, Ceuta'nın değil.
⇒ Toprak **Fas'ta kalmalı** — yani bu çiftte ESKİ davranış doğru.
📌 Ve bu, benim `PARTİ 11`deki tespitimle aynı kapıya çıkıyor:
*"kıyı presidiosu için küçük petek DOĞRU cevaptır."*

## 🔴 ASIL BULGU — ölçüt DEĞİL, EKSİK OLAN BİR ALAN

Yedi çift tek bir kurala indi:

> **Toprak, HİNTERLANDI OLAN tarafa gider.**
> "En uzun ortak kenar" ölçütü bunu göremez — enklav olup olmadığına kördür.

Kanıt, iki vakanın **ters yönde** aynı sebeple çalışması:
```
Sebte ↔ Fas    yeni ölçüt toprağı ENKLAVA VERİYOR   → YANLIŞ
Arkot ↔ Madras yeni ölçüt toprağı ENKLAVDAN ALIYOR  → DOĞRU
Ankober ↔ Harar yeni ölçüt toprağı ENKLAVDAN ALIYOR → DOĞRU
```
Yeni ölçüt 6/7'de tutuyor ama **ilkeden değil, tesadüfen**: enklav çoğu zaman
kısa kenarlı olur. Ceuta'da öyle olmayınca yanılıyor.

### ⇒ ÖNERİ: `enklav: true` alanı
```
enklav:true → bu nokta YETİM YÜZ EMEMEZ; peteği kendi kara parçasıyla sınırlı
adaylar: Sebte · Melîle · Mersa'l-Kebîr · Madras · Harar · Arkîko …
         (presidio, faktorya, surla çevrili şehir devleti)
```
Bir satırlık alan, hem Sebte'yi düzeltir hem öteki altısını **ilkeye** bağlar.
⚠️ `girdi.py` `BILINEN_ALANLAR` kütüğüne kaydı gerekir (`neden:` gibi).

## 📌 §3.5.1 KAYDI — Yukarı Macaristan kapanışı sorgulanmalı
`CLAUDE.md §3.5.1`: *"Kassa·Eperjes·Tokaj·Sopron eklendi, ~28.000 km² 91 yıl
yanlış Osmanlı kapandı."* Eperjes'in **%94,5'i Krakov'a gitmiş** — yani
kapanış en az bir noktada gerçekleşmemiş. Öteki üçü MOTOR 3'te ölçülüyor;
dördü de aynıysa o satır **düzeltilmeli**, çünkü bugün olmamış bir işi
olmuş gibi kaydediyor.

---
---

# PARTİ 13 — GYULA + Girona↔Perpignan hükmü

## ① `data/yerlesimler_ek5.js` — Gyula (Göle)

```
Gyula (Göle)   46,650K / 21,277D   kale   k:3   (m: YOK, gerekçe aşağıda)
s: macaristan 1281 → 1566-09-02 · avusturya 1699-01-26 → 1918-11-11
   macaristan 1918-11-11 → 1923-10-29
d: 1566-09-02 → 1699-01-26  (y:"kusatma")
```
maske ✓ · 3 km ✓ 43,41 km (Yanova) · renk 2/2 ✓ · Değişmez 1 ✓ · Değişmez 3 ✓

**Değişmez 2 — ölçüldü, TEMİZ:**
```
1566-09-02 → 1566-09-07 "Zigetvar — Kanunî'nin vefatı"        5 gün ✓
1699-01-26 → 1699-01-26 "Karlofça Antlaşması"                 0 gün ✓
```
⚠️ Kendi kontrol betiğimin ⑦'si "veride olmayan gün" diye öttü — ama o benim
koyduğum **daha katı bir vekil** ("mevcut kırılma gününü yeniden kullan"),
Değişmez 2'nin kendisi değil. Gerçek ölçüt madde mesafesidir ve 5 gün.
📌 Vekil, olaylar*.js'e yazamadığım partiler için konmuştu; burada gerekmedi.

### 🟢 Kaynak — TDV Gyula'yı sancak olarak DOĞRULADI
TDV `timisvar` (CANLI): Timişvar eyaleti *"en sabit ve bilinenleri şunlardır:
Tımışvar, **Göle (Gyula)** ve Arad (birlikte), Modava, Lipova, Çenad ve
Yanova."* ⇒ Hem Osmanlıca adı (**Göle**) hem sancak statüsü kaynaklandı;
`§3.5.1`in "sancak merkezi olmuş" cümlesi artık TDV'ye basıyor.
🔴 Fetih ve kayıp GÜNÜ TDV'de yok (`gyula` diye madde yok; `arama` yalnız
Moravcsik ve Németh adlı Macar bilginlerini veriyor).

### 🔴 1699 BİLİNÇLİ ÖDÜNÇ — ve sebebi bugünkü kendi bulgum
Kale askerî olarak 1694/95'te düştü. O tarihe yazsaydım kırılma
`1695-01-01 "Malikâne sisteminin yürürlüğe girmesi"` maddesine yapışacaktı —
**`PARTİ 9`da kataloglağım 12 kusurun on üçüncüsünü kendi elimle üretirdim.**
Karlofça hukukî devirdir, maddesi vardır, ve Kamaniçe·Bar·Meciboj·Yazlofça·
Çehrin de aynı günü taşıyor.
📌 Oturum 0'a: "Gyula'nın kaybı" (1695) maddesi yazılırsa bitiş oraya çekilir.
**Önce madde, sonra tarih** — Mankup ve Cerbe ile aynı desen, üçüncü kez.

### İki yerde komşu zincirini KOPYALAMADIM
```
Zapolya/Erdel penceresi YOK  Varad ve Yanova 1541'den ERDEL toprağıydı;
                             Gyula Habsburg Kral Macaristanı'nın ucunda kaldı
                             ve 1566'da Pertev Paşa onu HABSBURG kaptanından aldı
1918 sonrası `macaristan`    Varad/Yanova `romanya` — ikisi bugün Romanya'da,
                             Gyula MACARİSTAN'da (Békés)
```

### `m:` yazılmadı — ölçüldü
Doğal değeri "Temeşvar" ama Değişmez 3 sınandı:
`1700 → Gyula=avusturya ↔ Temeşvar=OSMANLI 🔴`. Gyula 1699'da Habsburg'a
geçti, Temeşvar 1716'ya kadar Osmanlı'da kaldı; `m:`nin zaman boyutu yok.
⇒ Mankup kararının aynısı. (Karabiga'da çare vardı, burada yok.)

---

## ② GIRONA ↔ PERPIGNAN — tek gerçek takas, hüküm: **✓ PERPIGNAN**

Koordinatörün daralttığı tek kalem. Ve haklı olarak tek gerçek olan bu:
öteki altısında bugünkü sahibin örtüşmesi %0-2 iken burada **%19,4 ↔ %79,3** —
yani iki tarafın da geometrik iddiası var.

**Hüküm: toprak Perpignan'ın.** Gerekçe 1659 sınırı DEĞİL, idarî süreklilik:
```
Roussillon'un başkenti HER ZAMAN Perpignan'dı — Aragon tacı altındayken de,
1659 Pireneler Antlaşması'ndan sonra Fransa'dayken de.
Girona, Albera masifinin GÜNEYİNDE ayrı bir kontluk/piskoposluktur ve
Roussillon'u hiç yönetmedi.
```
⇒ Soru "İspanyol mıydı Fransız mıydı" değil — atlasın 1281-1923 penceresinde
Roussillon 378 yıl Katalan, 264 yıl Fransız. Soru **"Girona'dan mı yoksa
Perpignan'dan mı yönetiliyordu"** ve cevap her iki dönemde de Perpignan.

⚠️ **Ama bu, ötekiler gibi tartışmasız değil ve %19,4 onu söylüyor.** Tarihen
doğru çizgi **Albera/Pireneler su bölümü**dür; Voronoi orta dikmesi zaten
oraya yakın (≈42,34°K, masif ≈42,4°K). Yüzün güneye taşan kısmı varsa o
Girona'nındır — ama motor yüzü bölemez, bütün olarak verir.
📌 Yani hüküm "%100 Perpignan" değil, **"yüzün ezici çoğunluğu Perpignan'ın
ve bölünemediği için tamamı ona gitmeli"**.

⚠️ **KAYNAK NOTU:** TDV Roussillon'u kapsamıyor. Yukarıdakiler standart Avrupa
tarihi (Pireneler Antlaşması 7 Kasım 1659; Perpignan Roussillon'un başkenti)
— `CLAUDE.md §4`in "TDV'nin kapsamadığı coğrafyalar için standart akademik
referans yeterlidir" maddesi kapsamında, ama **TDV'ye basmıyor.**

---
---

# PARTİ 14 — `enklav` alanının tasarımı · 🔴 TARAMA ÇÜRÜDÜ, tasarım DEĞİŞTİ

## ① OTOMATİK TARAMA YAPILAMIYOR — iki ölçüt, iki çöküş, ölçüldü

**v1** — "yakında aynı sahipli ≤2 VE farklı sahipli ≥3, tarihlerin %60'ında":
35 aday buldu ama **bilinen altı enklavın DÖRDÜNÜ kaçırdı** (Sebte · Melîle ·
Mersa'l-Kebîr · Harar).
```
kusur ①  FARKLI_TABAN=3 seyrek bölgede çöküyor. Melilla'nın 150 km'sinde
         zaten nokta yok — yani enklavı GÖRÜNMEZ yapan seyreklik testi de
         kör ediyor. Ters etki.
kusur ②  Oran %60 bütün zaman çizgisinden hesaplanıyor. Mersa'l-Kebîr
         yalnız 1509-1792 arası enklav; 1350'de sıradan bir Zeyyânî limanı.
```

**v2** — "R km içinde, 30 km'den uzak, aynı sahipli nokta YOKSA":
**340/1620 (%21)** aday çıkardı ve listenin başı **Kiev · Kazan · Varşova ·
Riga — 623 yıl "enklav"**. Saçma.
```
kök sebep: ölçüt ENKLAV ile SEYREK HARİTALANMIŞ BÖLGEYİ ayırt edemiyor.
Kiev'in 200 km'sinde başka `rusya` noktası yok — Kiev enklav olduğu için
değil, atlas orada seyrek olduğu için.
```

🔴 **HÜKÜM: enklavlık veriden ÖLÇÜLEMEZ.** "Bu devlet burada hinterland
yönetiyor muydu" **tarihî** bir sorudur; nokta yoğunluğu onu maskeliyor.
⇒ Liste **elle ve kaynakla** kurulmalı. Makine burada listeyi bile
daraltamıyor — `PARTİ 8`deki "makine daraltır, insan hüküm verir"
kuralının sınırı: bazen makine daraltamaz da.

## 🔴 ② `enklav:true` BOOLEAN'I YANLIŞ — alan DÖNEME ait

Ölçüm bunu kendiliğinden gösterdi:
```
Sebte          1281-1415 fas      ← enklav DEĞİL, sıradan Fas kasabası
               1415-1581 portekiz ← ENKLAV
               1581-1923 ispanya  ← ENKLAV
Melîle         1281-1497 fas      ← DEĞİL      1497-1923 ispanya ← ENKLAV
Mersa'l-Kebîr  1281-1509 zeyyani  ← DEĞİL      1509-1792 ispanya ← ENKLAV
                                                1831-1923 fransa  ← DEĞİL (sömürge)
```
⇒ Enklavlık **noktanın değil DÖNEMİN** özelliğidir. Nokta düzeyinde boolean,
Ceuta'yı 1415 öncesi için de enklav ilan eder ve o dönemin peteğini haksız
yere kısar.

### ⇒ ÖNERİLEN ŞEMA: alan `s:` DÖNEM NESNESİNİN İÇİNDE
```js
s:[{f:"1415-01-01", t:"1581-04-16", d:"portekiz", enklav:true},
   {f:"1581-04-16", t:"1923-10-29", d:"ispanya",  enklav:true}]
```
📌 Bu, mevcut desene **birebir oturuyor**: `y:` (kazanım biçimi) ve `k:`
(tâbi adı) da dönem nesnesinin içinde. Yeni bir kavram değil, var olan
sözleşmenin devamı.
⇒ Kütük yeri: `girdi.py` **`BILINEN_DONEM_ALANLARI`** (nokta düzeyindeki
`BILINEN_ALANLAR` değil) — `y:` ve `kaynak:`ın yanına.

```python
"enklav": "True ise bu dönemde nokta HİNTERLANDSIZ bir dayanaktır "
          "(presidio, faktorya, ada üssü); yetim yüz EMEMEZ. Yalnız "
          "kaynaklı hükümle yazılır — otomatik taranamaz (ölçüldü: "
          "nokta yoğunluğu enklavı seyrek bölgeden ayırt edemiyor). "
          "Okuyan: uret_petek.py, yetim yüz emilim döngüsü",
```

## ③ ELLE KURULMUŞ ADAY LİSTESİ — üç güven kademesi

### 🟢 A · KESİN — presidio/faktorya tanımı gereği hinterlandsız
```
Sebte (Ceuta)      portekiz 1415-1581 · ispanya 1581-1923
Melîle (Melilla)   ispanya 1497-1923
Mersa'l-Kebîr      ispanya 1509-1708 · 1732-1792     ⎫ ikisi TEK birim
Oran               ispanya 1509-1708 · 1732-1792     ⎭ (7,5 km)
Bicâye             ispanya 1510-1555
Halkulvâdî         ispanya 1535-1574
Tanca              portekiz 1471-1662 · ingiltere 1662-1684
Mazagan            portekiz 1514-1769   ← Fas'ta en uzun Portekiz dönemi
Safi               portekiz 1488-1541
Azemmûr            portekiz 1513-1541
Arzila             portekiz 1471-1549
Agadir             portekiz 1505-1541
Cebelitarık        ingiltere 1704-1923
Menorka (Mahon)    ingiltere 1708-1802
```
⚠️ **`fransa 1831-1923` dönemleri enklav DEĞİL** — Cezayir'in Fransız
işgali sömürge idaresidir, hinterlandı vardır. Aynı nokta bir dönem enklav,
başka dönem değil: şemanın döneme bağlanmasının en somut kanıtı.

### 🟡 B · GÜÇLÜ ADAY — her biri ayrı kaynak ister
```
Hint faktoryaları  Pondişeri · Çandernagor · Bombay · Kolombo · Kannûr ·
                   Koçin · Nagapatnam · Goa
                   (Avrupa kıyı faktoryaları; XVIII. yy sonuna kadar
                    hinterlandsız, sonra sömürgeye dönüşüyor — KESİM
                    TARİHİ her biri için ayrı araştırma)
Körfez/Kızıldeniz  Sokotra (portekiz 1507-1511) · Maskat (portekiz 1507-1650)
                   Aden (ingiltere 1839-1923) · Manama (ingiltere 1861-1923)
                   Arkîko · Masavva · Dahlak
```

### 🟡 C · ÖZEL VAKA — enklav değil, KİMLİK eksiği
```
Harar   `adal` 1281-1887. TDV `harar`: emirlik 1856'da "yalnız şehir merkezi
        ve çevresinden ibaretti"; aradaki topraklarda OROMO hâkimiyeti vardı.
        ⇒ Bu bir enklav bayrağıyla çözülmez; eksik olan `oromo` kimliğidir.
        Koordinatör zaten VERİ KİMLİK 3'e yazdı — doğru kutu orası.
```

## ④ MOTOR 3'E — ölçtürülecek soru
`enklav` dönem alanıyla birlikte yeni ölçüt **kaç petek düzeltir, kaç bozar?**
A listesi (14 nokta / 20 dönem) hazır; B ve C girmemeli — B kaynaksız,
C yanlış kutuda.
⚠️ Ve ölçüm **dönem bazlı** olmalı: aynı noktanın enklav döneminde peteği
kısılacak, sömürge döneminde kısılmayacak. Nokta bazlı ölçüm bunu göremez.

---
---

# PARTİ 15 — ARKÎKO %246,7'nin kök sebebi + Cebelitarık/Menorka düzeltmesi

## 🔴 ① ARKÎKO — sebep bulundu, ve **veri boşluğu**

```
Arkîko   ham (kara) 4.082 km²   ← MOTOR 3'ün "4.080"i ile birebir tutuyor
         nihai      10.067 km²  ⇒ +5.987 km² EMİLİM
```
Nihai > ham olabilmesinin tek yolu yetim yüz emilimidir. Donör ölçüldü:

```
DAHLAK   ham hücre              43.960 km²
         hücre ∩ KARA            5.544 km²
         ├─ KENDİ adası (#2278)    679 km²  ← ada kuralı bunu bırakır
         └─ ANAKARA (YETİM)      4.865 km²  🔴 komşulara dağıtılır
```
⇒ **Dahlak'ın anakara yetimi 4.865 km², Arkîko'nun kazancının %81'i.**

### Zincir — beş adım, hepsi ölçülü
```
① Masavva (15,61K) ile Akīk (18,23K) arası 321 km kıyıda SIFIR nokta
② Dahlak — 88 km açıktaki bir ADA — o kıyının en yakın noktası olduğu için
   Voronoi hücresi anakarayı kaplıyor
③ ADA KURALI doğru çalışıyor: Dahlak kendi 679 km²lik adasına hapsediliyor
④ geriye 4.865 km² ANAKARA yetim kalıyor
⑤ "en uzun ortak kenar" onu ARKÎKO'ya veriyor — Masavva'ya 7,5 km
   uzaklıktaki küçük bir demirleme yerine
```
🔴 **Yani geometrik belirti (%246,7) bir VERİ boşluğunun sonucu** —
`CLAUDE.md §2`nin ta kendisi, ama bu kez ters yönde: noktasızlık peteği
yutmuyor, **şişiriyor.**

### Tarihî hüküm: yetim **MASAVVA'nın**, Arkîko'nun değil
Buri yarımadası ve Zula körfezi kıyısı Osmanlı **Habeş eyaleti**nin
toprağıydı ve eyaletin merkezi/limanı **Masavva**dır (TDV `habes-eyaleti`:
eyalet 5 Temmuz 1555'te kuruldu, Masavva 2 Nisan 1557'de alındı).
Arkîko (Hergigo) Masavva'nın **anakara demirleme yeri**dir — nâibi
Masavva'nın karadaki adamıydı, ayrı bir idarî merkez değil.
⇒ 4.865 km²'lik yetim **Masavva'ya** gitmeli.

📌 **Ve bu, bugünün ÜÇÜNCÜ "en uzun ortak kenar yanlış komşuyu seçti" vakası**
(Sebte · Eperjes · şimdi Arkîko). Üçünde de ölçüt geometrik olarak tutarlı,
tarihen yanlış.

⚠️ **AMA yeni ölçüt (en çok örtüşen) bunu ÇÖZMEZ** — ölçtüm: yetimin doğal
sahibi Dahlak'ın kendisi ve o ada kuralıyla zaten dışlanmış. Dışlandıktan
sonra "en çok örtüşen" diye bir aday kalmıyor; geriye yine mesafe/kenar
kalıyor. ⇒ Ada kuralının ürettiği yetimler **ayrı bir kural** ister:
*"ada yetimi, o kıyının İDARÎ merkezine gider."*

### 🟡 Kalıcı çare bende: kıyıya nokta
321 km'lik boşluk kapanırsa yetim hiç doğmaz. Ama o kıyıda (Buri yarımadası,
Zula körfezi) kaynaklı bir Osmanlı yerleşimi bulamadım — Habeş eyaletinin
sayılan limanları Masavva · Arkîko · Sevâkin · Akīk ve dördü de zaten
haritada. **Uydurma nokta koymaktansa hükmü yazıyorum**; kıyı gerçekten
tenhaydı.
📌 `Ç7` açık kalemi aynı coğrafyada — orada bir kaynak çıkarsa nokta da çıkar.

## ✅ ② CEBELİTARIK ve MENORKA — **İKİSİ DE ZATEN VAR**, ekleme yok
```
Cebelitarık (Gibraltar)  36,140/−5,353  kale
   granada 1281→1462-08-20 · kastilya →1479-01-20 · ispanya →1704-08-04
   · ingiltere 1704-08-04→1923          ← enklav dönemi HAZIR
Menorka (Mahon)          39,890/ 4,260  liman
   ispanya 1281→1708-09-29 · ingiltere 1708-09-29→1802-03-25
   · ispanya 1802-03-25→1923            ← enklav dönemi HAZIR
```
⇒ `yerlesimler_ek5.js`e hiçbir şey eklenmedi. İkisinin de `ingiltere`
dönemine `enklav:true` işaretlenmesi yeter — ve o, sıraya göre MOTOR 3 şemayı
yazdıktan sonra Oturum 0'ın işi.
📌 A listesindeki 14 noktanın **hepsi zaten veride var**; hiçbiri eksik değil.
Liste bir *ekleme* listesi değil, bir *işaretleme* listesidir.

---
---

# 🔴 ÖLÇÜLMÜŞ SABİTLER — İKİNCİ TAKSİT (PARTİ 10-15)

> İlk taksit `PARTİ 9`dan sonra yazıldı ve partiler 1-9'u kapsıyordu.
> Bu blok **10-15**i ekliyor. Aynı kural: burada yazan hiçbir sayı yeniden
> ölçülmesin. Kaynağı belirtilmeyen her sayı bu oturumun kendi ölçümüdür;
> `[M3]` işaretliler MOTOR 3'ün, `[K]` işaretliler koordinatörün.

## ①+ PETEK GEOMETRİSİ — üç yeni sabit

```
YETİM EMİLİM ÖLÇÜTÜ  "en uzun ortak kenar" TARİHEN ÜÇ KEZ YANILDI:
                     Sebte · Eperjes · Arkîko. Üçünde de geometrik olarak
                     tutarlı, tarihen yanlış.
                     [M3] önerilen ölçüt ("en çok örtüşen") ile
                     %10 altı petek:  6 → 0 → 2 (yeni+enklav)
                     [M3] korunum: toplam boyanan alan 65.374.719 km², fark −0
                          ⇒ değişiklik toprak YARATMIYOR, adresini düzeltiyor
                     [M3] nihai yer değiştirme 78.368 km² (ara aşamada 119.658
                          görünüyordu — ada kuralı Reggio'yu zaten geri veriyor)

ENKLAV BEDELİ        [M3] dönem bazlı şema yerine nokta bazlı yaklaşım:
                     1.609 km² · 155 yıl · TEK nokta (Oran)
                     = Osmanlı tepe gövdesinin on binde 3'ü

ADA YETİMİ           Dahlak: ham 43.960 · ∩kara 5.544 · kendi adası 679
                     ⇒ ANAKARA YETİMİ 4.865 km²
                     Arkîko'nun +5.987 km² şişmesinin %81'i
                     🔴 AYRI SINIF: "yaslama yetimi" değil "ada yetimi".
                        Yeni ölçüt bunu ÇÖZMEZ — yetimin doğal sahibi ada
                        kuralıyla zaten dışlanmış, geriye aday kalmıyor.
```

### Petek "yok edilmiş" mi, doğru mu küçük — ölçülmüş ayrım
```
%60 altındaki 15 noktanın 15'i de KIYIDA (liman/kıyı kalesi)
%100 çıkanların hepsi iç bölgede (sehir/bolge)
⇒ kıyı presidiosu için KÜÇÜK PETEK DOĞRU CEVAPTIR (Ceuta bugün 18,5 km²)
⇒ "maddeleri görünmez" bayrağı İKİ ŞEYİ birleştiriyor:
     geometrik doğruluk (doğru)  +  etiket görünürlüğü (ARAYÜZ'ün işi)
⚠️ eşik `tur:`e göre olmalı — `liman` için %10 normal, `sehir` için alarm
```

### Yaslama yarıçapı — Sebte'nin sayıları
```
benim ölçümüm  ham Voronoi 12.066 → ∩KARA 4.323 km²
[M3]           ham hücre    4.345 → nihai    145 km²
⇒ kayıp kara kesiminden ÖNCE (kıyı kesimi uret_petek.py:709'da EN SON)
ada kuralı ELENDİ: Sebte·Tanca·Melîle·Balaklava·Eperjes·Mazagan
                   altısı da AYNI kara bileşeninde (#2, Afro-Avrasya)
kalan aday: yaslama yarıçapı — nehir 0,30°≈33 km · sırt 0,35°≈39 km
            Sebte'nin komşuları 28 ve 45 km ⇒ hücre yarıçapı ile AYNI MERTEBE
            KORUMA_PAYI (0,06°≈6,7 km) yerleşimi korur, HÜCREYİ korumaz
```

## ⑤+ ŞEMA SINIRLARI — `enklav` alanının tasarımı

```
🔴 OTOMATİK TARANAMAZ. İki ölçüt denendi, ikisi de çürüdü:
   v1 (yakında aynı sahipli ≤2 & farklı ≥3, %60)
      → 35 aday ama BİLİNEN ALTININ DÖRDÜNÜ kaçırdı
      kusur: seyrek bölgede FARKLI_TABAN çöküyor
   v2 (R km içinde aynı sahipli yoksa)
      → 340/1620 (%21), listenin başı Kiev·Kazan·Varşova "623 yıl enklav"
      kusur: ENKLAV ile SEYREK HARİTALANMIŞ BÖLGE ayrılamıyor
   ⇒ liste ELLE + KAYNAKLA kurulur.

🔴 BOOLEAN DEĞİL, DÖNEM ALANI.
   Sebte 1281-1415 fas = enklav DEĞİL · 1415'ten ENKLAV
   Mersa'l-Kebîr 1509-1792 ispanya = ENKLAV · 1831-1923 fransa = DEĞİL (sömürge)
   ⇒ `s:` dönem nesnesinin içinde, `y:` ve `k:`ın yanında
   ⇒ kütük: girdi.py BILINEN_DONEM_ALANLARI (BILINEN_ALANLAR değil)

📌 A listesi (14 nokta / 20 dönem) bir EKLEME listesi DEĞİL, İŞARETLEME
   listesidir — on dört noktanın hepsi zaten veride var.
```

## ⑥+ ÖLÇÜM DİSİPLİNİ — bugünkü toplam ONA çıktı

```
⑦  ek3 uyuyan çatışma uyandırdı mı → HAYIR (55→55); ama "derinleşen çatışma"
    diye YENİ bir kavram çıktı: merge var olan çiftin SINIRINI uzatarak da
    zarar verir, mevcut ölçüt bunu saymıyor
⑧  karşı-olgunun kendisi bir müdahale: ek3 çıkarılınca 1 YENİ çift DOĞUYOR
    (ceneviz↔lehistan) — "ekle" ile "çıkar" petek haritasında SİMETRİK DEĞİL
⑨  30K 22D'yi "kasten boş" etiketledim → ölçüm AÇ dedi (dolgu 400 km batıda)
⑩  enklav taramasını iki kez kurdum, ikisi de çürüdü
```

### Kurala dönüşen yeni dersler
```
· "yok" da bir ÖLÇÜMDÜR — doğrulanmadan söylenmez
  (bugün dört kez çürüdü: zaporojye kimliği · Limni'nin maddesi ·
   1747-06-20 tarihi · Cebelitarık/Menorka noktaları)
· bir kusuru gizleyen sebep, o kusuru ARAYAN ARACI da gizler
  (Melilla'nın 112,86 km boşluğu hem hatayı doğuruyor hem testi köreltiyor)
· "makine daraltır, insan hüküm verir"in eksik yarısı: BAZEN MAKİNE
  DARALTAMAZ DA
· bir ölçütü değiştirirken ikincisini değiştirmek, hangi düzeltmenin ne
  yaptığını ÖLÇÜLEMEZ kılar  [K]
· bir kusuru bulmak ile onu TEKRAR ÜRETMEMEK ayrı iki iştir  [K]
· toprak, HİNTERLANDI OLAN tarafa gider — "en uzun kenar" enklava kördür,
  "en çok örtüşen" de kördür, yalnız çoğu zaman doğru tahmin eder
```

## ⑦+ AÇIK KALANLAR — güncel
```
Arkîko %246,7           bilinen borç [K]; teşhis + hüküm hazır, çare koşu 5 SONRASI
                        ⇒ ada yetimi AYRI KURAL ister
Eperjes %2,4            yaslama çöküşü; §3.5.1 kapanışı ÇÖKMEMİŞ [M3]
                        (Kassa %73,2 · Tokaj %110,8 · Sopron %110,9 · Bihaç %102,8)
Hint faktoryaları       B listesi — sömürgeye dönüşme tarihi her biri için ayrı
                        araştırma → ÇAPRAZ İBERYA
Harar / oromo kimliği   enklav değil KİMLİK eksiği → VERİ KİMLİK 3
Don Kazak Ordası        hücre 8 · 10 → VERİ KİMLİK 3
Mardin 1516 mı 1517 mi  bir yıl çelişki → ÇAPRAZ
Kuzey Eritre kıyısı     Masavva↔Akīk 321 km, nokta YOK ama kaynaklı yerleşim
                        de yok — Ç7 ile aynı coğrafya
```

---

## SABİTLER EKİ — `enklav` ölçütünün ADA yarısı OTOMATİKLEŞTİ

Koordinatör Menorka'yı A listesinden çıkardı: İngiltere 1708-1802'de **adanın
tamamını** tutuyordu ⇒ hinterlandı vardı (kendi adası). Hüküm doğru, ve
kuralı bir adım ileri götürüyor — ben aynı ayrımı `fransa 1831-1923`te
yapmıştım ama Menorka'da uygulamamıştım.

### 🟢 VE BU, TARAMANIN YARISINI SINANABİLİR YAPIYOR
```
ADA noktası      MEKANİK SINANABİLİR:
                 "bu kara bileşeninde BAŞKA SAHİPLİ nokta var mı?"
                 varsa  → ENKLAV        yoksa → enklav DEĞİL
ANAKARA noktası  SINANAMAZ — elle + kaynakla
                 (v1/v2 çöküşünün sebebi: anakarada doğal sınır yok)
```
Ölçüldü, beş vakada da doğru cevabı verdi:
```
Kolombo    ada #1739 (66.504 km²) · 3 nokta: Kolombo=portekiz · Kandy=kandy
           · Yafna=yafna                        ⇒ 🔴 ENKLAV
           (tarihen doğru: Portekiz yalnız SAHİL Seylan'ını tuttu, Kandy
            1815'e kadar bağımsız kaldı)
Sokotra    ada #2199 · TEK nokta                ⇒ ✓ değil
Manama     ada #2234 (586 km²) · TEK nokta      ⇒ ✓ değil
Dahlak     ada #2278 (679 km²) · TEK nokta      ⇒ ✓ değil
Menorka    ada #3103 (695 km²) · TEK nokta      ⇒ ✓ değil  ← koordinatörün hükmü
```
📌 **Kaba eşik ("bileşen < 200.000 km² ise ada, ada ise enklav değil")
YANLIŞTI** — Kolombo'yu eler, oysa Kolombo gerçek bir enklav. Doğru soru
büyüklük değil, **"adada başkası var mı".**

⇒ **B listesi işlenirken bu süzgeç ÖNCE koşsun:** `Sokotra` · `Manama` ·
`Dahlak` üçü de ada ve tek sahipli — `enklav` YAZILMAMALI. `Kolombo`
yazılmalı. Kalanlar (Pondişeri · Çandernagor · Bombay · Kannûr · Koçin ·
Nagapatnam · Goa · Maskat · Aden) anakara ⇒ elle karar.

### ⚠️ Küçük düzeltme — benim sayım
A listesini "14 nokta / 20 dönem" diye vermiştim. Veriye giren **13 nokta /
17 dönem** ve doğrusu bu: Menorka çıkınca 13 kalıyor, dönem sayısı da 17.
Benim 20'm gevşek bir sayımdı. (On birinci öz düzeltme, küçük olanı.)

---

## ADA ENKLAV SÜZGECİ — koştu, ve **kendi iddiamı düzeltti**

Süzgeç `arac/` altına YAZILMADI (yayın kapısı). Betik scratchpad'de,
ölçütü ve çıktısı burada; yeniden koşturmak isteyen için mantığı üç satır:
```
her kara bileşeni için  → üzerindeki noktaların sahiplerini tarih tarih topla
tek sahip  → enklav DEĞİL (ada kuralı zaten peteği o adaya hapsediyor)
çok sahip  → ADAY (hüküm insanın)
anakara bileşeni (>1.000.000 km²) süzgeç dışı — orada doğal sınır yok
```

### Çıktı: **112 tek sahipli ada · 11 bölünmüş ada**

🔴 **VE BURADA ÖNCEKİ MESAJIMI DÜZELTİYORUM.** *"Ada yarısı mekanik olarak
sınanabilir"* demiştim — **fazla güçlü bir iddiaydı.** Süzgeç yalnız
**OLUMSUZ** tarafı mekanik olarak kapatıyor:
```
🟢 MEKANİK   112 tek sahipli ada → kesinlikle enklav DEĞİL
🔴 DEĞİL     11 bölünmüş ada → yalnız ADAY, ve çoğu enklav ÇIKMADI
```
On bir adayın dökümü:
```
BÖLÜNMÜŞ ADA (enklav değil, iki akran paylaşıyor)
   Britanya (29 nokta, ingiltere↔iskocya) · İskandinavya (21, isvec↔danimarka)
   Borneo (3) · Sumatra (5) · Timor (Dili portekiz ↔ Kupang hollanda)
   Seylan (Kolombo ↔ Kandy ↔ Yafna) · +2
CEPHE HATTI (enklav değil, savaş anı)
   Girit 1660 — Resmo/Hanya OSMANLI ↔ Kandiye/Sitiye/İsfakiye venedik
   (Girit savaşı 1645-1669'un ortası; ada BÖLÜNMÜŞ değil, CEPHE)
🔴 GERÇEK ENKLAV — 1 tane, ve listede yoktu
   NAGAZAKİ  portekiz 1580-06-09 → 1587-07-24
```

### 🔴 YENİ ADAY: NAGAZAKİ (1580-1587)
```
Nagazaki  32,750/129,878   azuchi-momoyama →1580-06-09 · PORTEKİZ →1587-07-24
                           · azuchi-momoyama →1603 · edo-bakufu →1868 · meiji
Kyūşū adası (#269, 36.661 km²) · 5 nokta · öteki dördü azuchi-momoyama
```
Ōmura Sumitada 1580'de şehri Cizvitlere devretti, Hideyoshi 1587'de geri
aldı. **Yedi yıl, Japon adasında yabancı elde tek liman — enklavın ders
kitabı tanımı.** Ve kimsenin listesinde yoktu; süzgeç onu buldu.
⇒ `Nagazaki` `portekiz` dönemine `enklav:true` önerilir.

### ⚠️ VE BİR ÖNERİMİ GERİ ALIYORUM: KOLOMBO İŞARETLENMEMELİ
Önceki mesajda *"Kolombo yazılmalı"* demiştim. **Geri alıyorum.**
`enklav` bayrağının işi, bir noktanın **hiç sahip olmadığı toprağı yutmasını**
engellemek. Seylan'da Kandy ve Yafna'nın **kendi noktaları var** — Voronoi
adayı zaten üçe bölüyor, yutulacak yetim yok. Bayrak burada işe yaramaz,
yalnız Portekiz'in gerçekten tuttuğu sahil şeridini haksız yere kısar.
📌 Ayırt edici soru: *"adadaki öteki sahiplerin NOKTASI var mı?"*
   varsa → Voronoi hallediyor, bayrak GEREKSİZ
   yoksa → foothold her şeyi yutar, bayrak GEREKLİ  ← Nagazaki'nin durumu değil
   ⚠️ Nagazaki'de de öteki dördün noktası VAR. Yani bayrak orada da
      geometrik olarak gereksiz olabilir — ama tarihî kayıt olarak doğrudur
      ve `enklav` alanı ileride başka amaçla da okunabilir. **Kararı
      MOTOR 3'ün ölçümü versin: Nagazaki 1580-1587'de yetim yüz emiyor mu?**
```
On ikinci öz düzeltme: "mekanik sınanabilir" iddiam yarım doğruydu — olumsuz
tarafı mekanik, olumlu tarafı değil.
```

---

## ⚠️ DÜZELTME — Kolombo kararı doğru, GEREKÇESİ yanlıştı

Koordinatör `girdi.py` kütüğüne şunu yazıyor:
> `enklav:` bir DAVRANIŞ ANAHTARI değil, bir **HÜKÜM**. Etkisiz olması
> yanlış olduğu anlamına gelmez — 13 işaretin 11'i şu an hiçbir şey yapmıyor
> [MOTOR 3 ölçümü: yalnız Sebte ve Oran yetim yüz emiyor] ve yine de doğrular.

🔴 Bu, benim Kolombo gerekçemi **geçersiz kılıyor.** Ben *"Kandy ve Yafna'nın
noktası var ⇒ yutulacak yetim yok ⇒ bayrak gereksiz ⇒ işaretleme"* demiştim.
Aynı mantık o 11 işaretin de silinmesini gerektirirdi.

**DOĞRU GEREKÇE:** Portekiz Seylanı (1518-1656) surla çevrili bir dayanak
değildi — Kotte krallığının ardılı olarak gerçek bir sahil toprağı
yönetiyordu ve iç bölgede Kandy'yle sınırdaştı. ⇒ Kolombo **presidio değil,
sömürge çekirdeğidir**; Menorka ve `fransa 1831-1923` ile aynı sınıf.
Karar aynı, dayanağı başka: **geometrik etkisizlik değil, tarihî sınıf.**

### Ve kendi "ayırt edici soru"mun sınırı
*"Adadaki öteki sahiplerin noktası var mı"* sorusu bayrağın **ısırıp
ısırmayacağını** tahmin eder, **doğru olup olmadığını değil.** İkisini
Kolombo'da karıştırdım.
⚠️ Tahmin gücü de zayıf: **Sebte'nin komşuları VAR** (Tanca 45 km,
Cebelitarık 28 km) ama yine de yetim emiyor — çünkü yetim nokta yokluğundan
değil **yaslama bölünmesinden** doğuyor. Soru yanlış şeyi ölçüyormuş.
⇒ Nagazaki için de aynısı: "öteki dördün noktası var" demem hükmü değil
beklenen etkiyi anlatıyordu. Tarihî hüküm ayrı durur ve nettir —
1580-1587'de Cizvitlere devredilmiş bir liman, hinterlandı yok.

**On üçüncü öz düzeltme.**

---
---

# PARTİ 16 — DON KAZAK hazırlığı (renk beklerken) + bir eski ödünç bulundu

⚠️ Hiçbir dosyaya yazılmadı. `don-kazak` rengi gelince bu blok on dakikada
uygulanır — Mankup'ta işe yarayan desen.

## 🔴 ① BULGU: `Azak`taki ödünç, gerekçesi ortadan kalktığı için ARTIK GEÇERSİZ

`yerlesimler.js`, Azak kaydının üstünde **kendi ödününü yazmış**:
> *"Kimlik olarak `rusya` seçildi: Don Kazakları çarın tebaasıydı (çar kaleyi
> devralmayı reddetti) … **renkler.py'de Kazak kimliği yok**, rastgele renk
> eklemek DSATUR dengesini bozar."*

⇒ O gerekçe **bugün geçersiz**: `don-kazak` künyesi yazıldı (`7182678`).
Ve iki kayıt birbirini doğruluyor — `devletler.js`in kendi kronolojisi:
```
1637-01-01  "Kazaklar Azak Kalesi'ni ele geçirdi"
1642-01-01  "Yeni Osmanlı seferi üzerine kazaklar kaleyi yakıp çekildi"
veri:       Azak  s:[… {1637-06-18 → 1642-02-26, "rusya"} …]
```
🔴 **Ve yorumun kendi cümlesi `rusya`yı çürütüyor:** *"çar kaleyi devralmayı
REDDETTİ."* Devralmayı reddeden bir devlet o kalenin sahibi olamaz.
Üstelik künye Rus tâbiiyetini **1671**'den başlatıyor — 1637-1642'de Don
Ordası henüz çarın tâbii bile değildi.

⇒ **ÖNERİ (Oturum 0'a):** `Azak`ın `1637-06-18 → 1642-02-26` penceresi
`rusya` → **`don-kazak`**. `s:`→`s:` kimlik değişimi, **gün oynamıyor,
Değişmez 2 borcu SIFIR.**
📌 1696 ve 1774 pencereleri `rusya` KALMALI — onlar gerçekten Rus
(I. Petro'nun fethi ve Küçük Kaynarca).

### Tarandı: başka ödünç var mı?
1671 öncesi başlayan 25 `rusya` penceresi tarandı. Azak dışındakiler meşru
(Moskova · Novgorod · Kazan 1552 · Astrahan 1556 · Smolensk · Voronej 1585
sınır kalesi…). ⚠️ İki kayıt **başka** kazak ordularına ait olabilir ama
o kimlikler de yok, **dokunulmamalı**:
```
Guryev (Atyrau) 1640   → Yayık (Ural) Kazakları — ayrı orda, kimlik yok
Terek deltası   1556   → Terek Kazakları — ayrı orda, kimlik yok
```

## ② HAZIR NOKTALAR — ölçüldü, renk gelince yazılır

| ad | lat, lon | maske | 3 km | işlevi |
|---|---|---|---|---|
| **Çerkask (Razdory)** | 47,240 · 40,050 | ✓ | 25,6 km (Rostov) | 🔴 **Ordu'nun BAŞKENTİ — künyede var, haritada YOK** |
| Don bozkırı (Sal) | 47,000 · 43,000 | ✓ | 183,0 km | hücre 10 |
| Donets bozkırı | 48,800 · 39,000 | ✓ | 138,8 km | hücre 8 |

**Ölçülen etki:**
```
hücre  8 (48-50K/38-40D)   133 km → 71 km   (1,9×)
hücre 10 (46-48K/42-44D)   156 km → 70 km   (2,2×)
```

### Zincir — künyeden, uydurma yok
```
s:[{1281-01-01 → 1502-03-01, altinorda},     ← Bozkır (Deşt-i Kıpçak) deseni
   {1502-03-01 → 1570-01-01, kirim},         ← aynı
   {1570-01-01 → 1721-01-01, don-kazak},     ← künyenin kendi penceresi
   {1721-01-01 → 1923-10-29, rusya}]
d:[] v:[]
```
✅ Dördü de `s:`→`s:` ⇒ **kırılma üretmiyor, Değişmez 2 borcu sıfır.**
📌 `1502-03-01` veride var; `1570-01-01` ve `1721-01-01` künyenin kendi
tarihleri (`devletler.js:don-kazak`).

⚠️ **`tabi:[{1671→1721, ust:"rusya"}] HARİTAYA YANSIMIYOR** ve bu bilinçli:
yerleşim şemasında yabancı tâbiiyet alanı yok (`v:` Osmanlı tâbiiyeti için).
Zaporojye'de de aynı karar verilmişti — devlet 1654'ten Rus hâkimiyetinde
ama harita 1775'e kadar `zaporojye` boyuyor, tâbiiyet **künyede** duruyor.
Aynı deseni burada da sürdürüyorum; **tutarlılık kasıtlı.**

⚠️ `kur:` YAZILMADI: Çerkassk 1570'lerde kurulmuş sayılır ama zincir 1570
öncesi zaten komşularıyla aynı (`altinorda`/`kirim`) — `kur:` haritada tek
piksel değiştirmez, uydurma bir gün ise kalıcı yanlış olurdu. Akmescid ·
Or Kapı · Kırcaali'de verilen kararın aynısı, dördüncü kez.

---
---

# PARTİ 17 — `data/yerlesimler_ek6.js` · DON KAZAK gövdesi

Sekiz kontrol temiz · Değişmez 2 borcu **sıfır** · Değişmez 3 çelişki 0 ·
maske 3/3 · renk 4/4 (`don-kazak #4ac4aa` dahil) · sahipsiz sayacı artmıyor.

```
Çerkask (Razdory)   47,240/40,050  kale    🔴 ORDU'NUN BAŞKENTİ — künyede
                                            yazılıydı, haritada YOKTU
Don bozkırı (Sal)   47,000/42,300  bolge   hücre 10
Donets bozkırı      48,800/39,000  bolge   hücre  8

zincir  altinorda →1502-03-01 · kirim →1570-01-01 · don-kazak →1721-01-01 · rusya
        dördü de s:→s: ⇒ kırılma YOK
etki    hücre  8   133 km → 71 km
        hücre 10   156 km → 83 km
```
⇒ Seyreklik listemin **8 ve 10. sıraları kapandı.** Aylardır "AÇ ama kimlik
yok" diye duruyorlardı; sebep seyreklik değil kimlik eksiğiydi ve kimlik geldi.

## 🔴 KALMUK SORUSUNA CEVAP: EVET, GERÇEK — ve TDV ile sabit
TDV `kalmuklar` (CANLI): göç dalgaları **1618-1632**; **İdil Kalmuk Hanlığı
1632'de kuruldu**, **1724**'te Rus hâkimiyetine girdi, **1770**'te Ubaşi
Han'ın göçüyle batıdaki devlet fiilen sona erdi. Madde ayrıca *"bir yandan
Kırım Hanlığı, bir yandan Rus Çarlığı ile savaşarak bağımsızlıklarını
korudular"* diyor — yani bağımsız bir siyasî varlık, nüfus değil.

⇒ **Kimlik gerekiyor.** Bu dosyada olmadığı için **Sal noktasını batıya
çektim**: `47,00/43,00` → **`47,00/42,30`**. Kalmuk bozkırı'na 250 km, Sal
vadisinin içinde, tartışmasız Don Ordası toprağı. Kalmuk sahasına girmedim.

### 📌 AYRI BULGU — `Kalmuk bozkırı` kaydı da bir ödünç
```
bugünkü hâli   Kalmuk bozkırı (46,50/45,50)
               altinorda 1281→1556 · rusya 1556→1923
```
🔴 Kayıt **adını taşıdığı halkın devletini hiç göstermiyor**, üstelik
Kalmuklar oraya **1632**'de geldiği hâlde **1556**'dan Rusya boyanıyor.
Azak'takiyle **aynı sınıf ödünç** — ve bugün üçüncüsü (Azak · Kalmuk bozkırı ·
ve daha önce Bozkır'ın "Kırım'da mı Nogay'da mı" notu).
⇒ `kalmuk` kimliği gelince: `rusya 1556→1632 · kalmuk 1632→1724 ·
rusya 1724→1923` (TDV `kalmuklar`). **VERİ KİMLİK 3'e.**

## Şema tutarlılığı — bilerek korunan iki karar
```
tabi:[1671→1721, rusya]  HARİTAYA YANSITILMADI
   sebep: yerleşim şemasında yabancı tâbiiyet alanı yok (`v:` Osmanlı içindir)
   📌 Zaporojye Seçi'nde de aynı karar verildi (1654 Rus hâkimiyeti künyede
      kaldı, harita 1775'e kadar zaporojye boyuyor). İki kazak kimliği
      farklı kuralla çizilseydi harita kendi içinde çelişirdi.
kur: YAZILMADI
   Çerkassk 1570'lerde kurulmuş sayılır ama zincir 1570 öncesi zaten
   komşularıyla aynı; uydurma gün kalıcı yanlış olurdu.
   Akmescid · Or Kapı · Kırcaali kararının dördüncü tekrarı.
```

---
---

# PARTİ 18 — İSKANDİNAVYA + BALTIK · `yerlesimler_ek7.js` (39 nokta)

**KADEME 3 partisi.** `YASALAR K7`: fiyort kovalanmadı, kıyı çizilmedi.
🔴 **"Bitirdim" demiyorum — üstünden geçtim.**

## Ölçüm: ÖNCE / SONRA (54-64°K / 4-32°D · kara 1.100.616 km²)
```
                 ÖNCE      SONRA
nokta            46        85
km²/nokta        23.926    12.948      (1,85× yoğun)
ort. yarıçap     115 km    64 km       (%44'e indi)
en uzak nokta    387 km    213 km
```
### Kendi değerlendirmem — bandın neresindeyim
Anadolu ≈ 5.000 km²/nokta. İskandinavya **12.948** ⇒ hâlâ **2,6 kat seyrek**,
ve bu **kasıtlı**: Halka 3-4 için Kademe 3 hedefti, Kademe 5 değil.
⇒ Bandın **üst ucuna yakın (~%75-80)** olduğumu söylüyorum; %100 değil,
olması da istenmiyordu. Kalan boşluk fiyort ve göl bölgesinde ve oraya
girmek tanım gereği bu partinin işi değildi.

## Sekiz kontrol
```
① 39/39 ✓  ② alan kütüğü temiz ✓  ③ renk 9/9 BOYALAR'da ✓
④ ad çakışma 39/39 ✓  ⑤ dönem sağlığı temiz ✓  ⑥ Değişmez 1: 39/39 KESİNTİSİZ ✓
⑦ Değişmez 2: kırılma günü SIFIR — hepsi `s:`, yapısal olarak borçsuz ✓
⑧ Değişmez 3: çelişki 0 ✓   + maske 39/39 ✓  + 3 km en yakın 38,38 km ✓
```
📌 Bu partinin Değişmez 2 borcu **yapısal olarak sıfır**: hiçbiri Osmanlı
değil ⇒ hepsi `s:`, `s:`→`s:` geçişi kırılma üretmiyor. Tek gün bile madde
istemiyor — bu yüzden tarih seçiminde serbesttim, yine de hepsini veride
zaten var olan günlere oturttum.

## 🔴 BOLGE KUZEY SINIRI 64°K — ölçüldü, kapsam daraldı
`uret_petek.py:60` `box(-12,-11,146,64)`. **Tromsø · Narvik · Luleå · Oulu ·
Kajaani · Lapland çizilmiyor**; oraya nokta koymak boşa giderdi. Aday listesi
buna göre kesildi; kuzey açılırsa ayrı parti gerekir.

## Komşu zincirini KÖRÜ KÖRÜNE kopyalamadığım dört yer
```
Kristianstad · Karlskrona   Skåne/Blekinge 1658'e kadar DANİMARKA
                            (`isvec 1281-1923` yazmak 377 yıl yanlış olurdu)
Östersund                   Jämtland 1645'e kadar Norveç/Danimarka
Lappeenranta                ESKİ FİNLANDİYA — Viipuri ile 1721'de Rusya'ya
                            geçti, 1809'da DEĞİL. 48 km ötedeki komşusuyla
                            farklı tarih taşısaydı harita orada yarılırdı.
Daugavpils                  LEH LİVONYASI — İsveç'e HİÇ geçmedi, birinci
                            taksimde (1772) Rusya'ya. Cēsis'in zincirini
                            kopyalamak yüz yıl yanlış olurdu.
Klaipėda (Memel)            Litvanya DEĞİL — 1923 Ocak'a kadar Almanya.
```

## 🔴 ESTONYA YAZILMADI — `estonya` kimliği YOK
`renkler.py`de `letonya` ve `litvanya` var, **`estonya` yok.** Dört nokta
ölçüldü (maske ✓ · 3 km ✓ · en yakın 82-136 km) ama yazılmadı: 1918-1923
penceresine `rusya` yazmak bugün kataloglağım ödüncün (Azak · Kalmuk
bozkırı · Donets) **dördüncüsü** olurdu.
```
Tallinn (Reval) 59,437/24,754 · Tartu 58,378/26,729
Narva 59,377/28,190 · Pärnu 58,386/24,497
zincir hazır: almanya →1561-11-28 · isvec →1721-08-30 · rusya →1918 · estonya
```
📌 **Tallinn atlasın en büyük Baltık boşluğu** — Helsinki'ye 82 km ama Fin
körfezinin öte yakası; bugün Helsinki'nin peteğine düşüyor, yani Estonya
kıyısı Finlandiya boyanıyor.

## ⚠️ Altı nokta maske dışı çıktı, KAYDIRILDI (kovalanmadı)
Ålesund · Kristiansund (takımada) · Östersund (Storsjön) · Karlskrona
(takımada) · Savonlinna · Nurmes (Fin göl bölgesi). Brief'in kuralı gereği
fiyort/göl kıyısı çizilmedi, noktalar karaya kaydırıldı. Altısı da kurtarıldı.

---

# PARTİ 19 — ARKTİK KUTUSU (koşu 9 · 4 Ağustos 2026)

Sevk: `box(-25,-11,146,82)` açılacak, ~22-26 nokta lazım, **kutu noktalar
hazır olmadan açılmayacak.** Teslim: **63 nokta / beş dosya**, ve sevkte
olmayan iki ölçüm.

## ① SEVKİN ÖLÇÜSÜ DOĞRUYDU — AMA İKİ NOKTADA EKSİKTİ

### A. "Kutu açılırsa Moğolistan Buz Denizi'ne dayanır" — ZATEN DAYANIYOR
Uyarı geleceğe bakıyordu. Bugüne baktım. **45°K'nin kuzeyi / 58°D'nin
doğusu, BUGÜNKÜ kutunun İÇİNDE, 10.977.624 km²:**
```
 2.656.957 km²  Aigun     50,24°K/127,46°D  → qing-hanedani
 1.687.356 km²  Kobdo     48,01°K/ 91,64°D  → kuzey-yuan / cungar
 1.456.818 km²  Urga      47,89°K/106,91°D  → qing-hanedani
   766.284 km²  Uliastay                    → qing-hanedani
 ────────────────────────────────────────────────────────────
 ≈ 6,57 milyon km² Sibirya bugün MANÇU ve MOĞOL renginde.
 ortalama uzaklık 756 km · en uzak 1.866 km
```
📌 Sebep ölçüldü: **58°D ile 91°D arasında, 44°K'nin kuzeyinde SIFIR nokta.**
Yakutsk (1632) · İrkutsk (1661) · Nerçinsk (1653) · Tomsk (1604) ·
Krasnoyarsk (1628) · Yeniseysk (1619) — altısı da atlasta YOKTU.
⇒ Kutu açılması bu hatayı **doğurmuyor, mevcut hatayı okyanusa uzatıyor.**
Ve düzeltmesi kutuyu BEKLEMİYOR: `_ek9` bugün bağlanabilir.

### B. "Batı kenarı İzlanda için" — İZLANDA O KENARIN %9'U
```
box(−25,−11,−12,82) şeridine giren kara        1.117.472 km²
  İzlanda                    102.162 km²   %9,1
  Doğu Grönland              155.397 km²  %13,9
  Batı Afrika + adalar       860.785 km²  %77,0   ← sevkte HİÇ YOK
```
Ve o %77'yi kim boyar: **Timbuktu** (`s:`/`d:`/`v:` üçü de BOŞ ⇒ Senegal,
Gambiya, Moritanya 550.210 km² **beyaz delik**) ve **Agadir** (⇒ **Kanarya
Adaları haritada FAS boyanır**, adalar 1402-1496'da Kastilya'ya geçmişken).
En uzak hücre Yeşilburun Adaları: Timbuktu'ya **2.294 km.**

⇒ **ÖNERİ:** kutu dikdörtgen değil **L** olsun —
`box(-12,-11,146,82) | box(-25,60,-12,82)`. İzlanda + Doğu Grönland girer
(256.688 km²), Batı Afrika girmez. Çentik köşesi (−12°D/60°K) açık
okyanustadır, hiçbir peteğe değmez — ölçüldü. `voronoi_diagram` zaten
sınırlayıcı kutuyu alır, hücreler sonra `.intersection(BOLGE)` ile kırpılır.
📌 Alternatif: batı kenarını hiç açma. Üçüncüsü (Batı Afrika'ya nokta) ayrı
bir partidir — `mali` · `songay` · `jolof` kimliklerinin hiçbiri yok, ve
Timbuktu'nun kasten boş olması o coğrafyanın BİLİNÇLİ kapsam dışı
tutulduğunu gösteriyor.

## ② TESLİM — beş dosya, her biri TEK bağlama kararı
```
_ek8   39  🔴 KUTU 82°K AÇILMADAN BAĞLANAMAZ (39'u da lat>64)
_ek9   12  🟢 BUGÜNKÜ KUTUDA BAĞLANABİLİR — Sibirya kuşağı, 64°K altı
_ek10   4  🔴 `sibir-hanligi` rengi bekliyor
_ek11   4  🔴 `estonya` rengi bekliyor
_ek12   4  🔴 batı kenarı + `izlanda` rengi bekliyor
```
Dosya başına tek engel koydum: hazır olan on iki nokta, hazır olmayan bir
rengi beklemesin diye.

### ÖLÇÜLEN ETKİ
```
YENİ KARA kuzey şeridi 4.850.863 km²   ort 1.701 → 233 km · en uzak 2.973 → 1.000
BUGÜNKÜ Sibirya       10.977.624 km²   ort   756 → 327 km · en uzak 1.866 →   909
  └ Aigun'un boyadığı 2.656.957 → 594.170 km²; Kobdo·Urga·Uliastay ilk 8'den DÜŞÜYOR
İzlanda + D.Grönland     256.688 km²   ort 1.526 → 203 km · en uzak 2.273 →   581
```

## ③ KOORDİNATÖRÜN DÜZELTMESİ UYGULANDI — iki sınıf ayrı
MOTOR "hepsi kasten sahipsiz olsun" demişti; koordinatör anakara için
reddetti ve haklıydı. Uygulanan ayrım:
```
ANAKARA  fetihten ÖNCE sahipsiz, SONRA rusya. Fetih günü kayıtta yazılı.
         gerekçe TDV `sibir-hanligi`: hanlık "Tura, Tobul ve İşim nehirleri
         … İrtiş civarı ile Baraba bozkırları" — Yamal, Taymır, Yakutistan
         BU SINIRIN DIŞINDA, oralarda uydurulacak devlet YOK.
ADALAR   Svalbard (antlaşma 1920-02-09, YÜRÜRLÜK 1925-08-14 → pencere
         dışı) · Franz Josef (1873'te keşif) · Severnaya Zemlya (1913'te
         keşif, 1926'da ad) ⇒ üçü de pencerenin tamamında sahipsiz. ONAYLANDI.
         ⚠️ Yeni Sibirya Adaları dördün EN ZAYIFI — kayıtta öyle yazılı.
         ⚠️ Novaya Zemlya ve Vaygaç sahipsiz BIRAKILMADI: kalıcı yerleşim
           ve fiilî idare 1877 (Malıye Karmakulı). 🔴 TDV'ye basmıyor.
FENNOSKANDİYA sahibi Rusya DEĞİL — Lapland üç ayrı zincire (Norveç ·
         İsveç · Finlandiya) bağlandı, Kola'ya yalnız Kola takıldı.
```

## ④ 🔴 DEĞİŞMEZ 1 TAVANI YÜKSELİYOR — 50 → 81
31 kayıt fetihten önce sahipsiz kesit veriyor. **Otuz birinin otuz biri de
`kasitli_bosluk:true` + `neden:` taşıyor** (ölçüldü, taşımayan sıfır).
Sayıyı gizlemiyorum: denetim koşulduğunda tavan 50'den 81'e çıkacak ve
artışın tamamı bu partiden. Kayıt kayıt gerekçe dosyalarda yazılı.

## ⑤ KAYNAK DÜRÜSTLÜĞÜ — `§4` gereği işaretli
**TDV'ye BASAN** (`sibir-hanligi` ve `kucum-han`, ikisi de `<title>` ile
CANLI sınandı):
```
1581-10-26 Yermak İsker'e giriyor    1586 Tümen ve Tobolsk kuruluyor
1592 Pelym · BEREZOV · SURGUT        1595-03-17 Baraba işgali
1598-08-20 Küçüm'ün son yenilgisi    1593-1604 "Sibirya'nın tamamen zaptı"
1430 Mahmutek (hanlığın kurucuları 1420-1430)
```
**TDV'ye BASMAYAN** (§4 Kuzey Asya/Kuzey Avrupa için akademik referansı
yeterli sayıyor ama işaretlenmesini istiyor): Obdorsk 1595 · Mangazeya 1601 ·
Turuhansk 1607 · Tomsk 1604 · Yeniseysk 1619 · Hatanga 1626 · Krasnoyarsk
1628 · Yakutsk/Jigansk 1632 · Olyokminsk 1635 · Verhoyansk 1638 ·
Zaşiversk 1639 · Ohotsk 1647 · Albazin 1651 · Nerçinsk 1653 · İrkutsk 1661 ·
Dudinka 1667 · Nerçinsk antlaşması 1689-09-06 · Aygun 1858-05-28 ·
Novaya Zemlya 1877 · Fredrikshamn 1809-09-17 · Kiel 1814-01-14 ·
Norveç 1905-06-07 · Tartu/Petsamo 1920-10-14 · İzlanda 1918-12-01.

## ⑥ ÜÇ KİMLİK EKSİK — üçü de RENK'in tek satırı
```
sibir-hanligi  TDV maddesi CANLI. Ödünç VERİLMEDİ: `altinorda`nın etiketi
               "Altın Orda ve ardılları" ve teknik olarak savunulabilirdi,
               ama bedeli 168 yıl (1430-1598 Batı Sibirya yanlış renkte).
estonya        Ödünç VERİLMEDİ çünkü KOMŞUSUYLA ÇELİŞİRDİ: Riga 1918-11-11'de
               `letonya`, Viipuri 1917-12-06'da `finlandiya` oluyor. Estonya'yı
               1923'e kadar Rusya boyasaydım harita 1919'da Letonya ve
               Finlandiya'yı bağımsız, arasındaki Estonya'yı Rus gösterirdi.
               📌 Ödüncün ölçüsü SÜRE değil, komşusuyla çelişip çelişmediğidir.
izlanda        Atlas 1918 devletlerini tutarlı modelliyor (polonya ·
               cekoslovakya · yugoslavya · finlandiya · letonya · litvanya
               hepsi BOYALAR'da) — `izlanda` bu desendeki tek boşluk.
```

## ⑦ YAPISAL DENETİM — 63 nokta
```
ayrıştırma      5/5 dosya `girdi.oku_dosya` ile temiz
şema            bilinmeyen alan YOK (kasitli_bosluk · neden kütükte kayıtlı)
gün hassasiyeti 63/63 · ters/sıfır dönem YOK · çakışma YOK · pencere dışı YOK
ad çakışması    YOK (canlı 1623 kayıtla karşılaştırıldı)
maske           63/63 içeride
3 km            en yakın çift 82,2 km (Tallinn ↔ Helsinki, deniz aşırı)
Değişmez 2      **borç YAPISAL OLARAK SIFIR** — 63 kaydın hiçbirinde `d:`
                veya `v:` dönemi YOK, hepsi `s:`. Tek bir kırılma üretmiyor.
Değişmez 3      `m:` yazılmadı ⇒ çelişki üretemez
renk            eksik yalnız üç ilan edilmiş kimlik
```

## ⑧ ALTI NOKTA MASKE DIŞI ÇIKTI, KAYDIRILDI
Bodø · Tromsø · Luleå · Svalbard · Akureyri **2,2 km**; Vaygaç **11 km**.
Hepsi 10m maskesinin kıyı basitleştirmesi — fiyort şehri, ada şehri,
takımada. Her kaydırma kendi kaydının satırında yazılı.

## ⑨ 🔴 KUTU AÇILMAZSA `_ek8` BAĞLANAMAZ — ve sebebi teknik
39 noktanın 39'u `lat>64`. Bugünkü kutuyla bağlanırsa peteklerin hepsi boş
çıkar ve motorun kapanış satırı ("tüm yerleşimlerin peteği geçerli ✓")
DÜŞER. Sıra: **önce `uret_petek.py:60`, sonra dosya.**
📌 Aynı sebeple `_ek12` batı kenarını bekliyor.

## ⑩ AYRI BULGU — AYNI ANTLAŞMA, İKİ TARİH (Oturum 0'a)
Canlı veride Nystad barışı iki farklı günle yazılı:
```
Riga     1721-08-30 → rusya      (eski takvim)
Viipuri  1721-09-10 → rusya      (yeni takvim)
```
Aynı antlaşma, 11 gün fark. Harita etkisi yok (ikisi de `s:`→`s:`) ama
**hangi takvimin kullanıldığı depoda kararlaştırılmamış** demektir ve bu,
gün hassasiyetli bir atlasta er geç bir kırılmayı 11 gün kaydırır.
Ben `1721-08-30`u seçtim (Riga · `_ek7` Lappeenranta · `_ek11` Estonya).

## ⑪ KASTEN YAZILMAYANLAR
```
Kuzey Kazakistan  Kobdo'nun 1,69 milyon km²'sinin bir kısmı buraya düşüyor.
                  YALNIZ BİR dolgu yazıldı (Kazak bozkırı-İşim, zinciri canlı
                  `Aral kuzeyi`den birebir). Semey · Petropavl · Akmola
                  yazılmadı: Cungar-Kazak-Rus sınırı 1718-1755 arasında üç kez
                  değişiyor ve kaynakla ayıramadım. Ayrı parti işi.
Batı Afrika       Yukarıda ①B. Kimlik yok, Timbuktu kasten boş.
Çukotka           Kutunun doğu kenarının (146°D) dışında.
Kola'nın novgorod dönemi  Ayrı kimlik yok ve canlı `Novgorod` kaydının kendisi
                  de düz `rusya 1281→1923` taşıyor. Altı kayıtta da aynı
                  çözüm uygulandı; kimlik gelirse ALTISI BİRDEN düzeltilir.
```

## ⑫ GÖL VAKASI — ve düzeltmemin GERİ ALINMASI (4 Ağustos, gece)

MOTOR `Jukkasjärvi`yi Torneträsk gölünün içinde buldu (petek %0,0). Göl-farkında
maskeyle 63 noktamı + canlı 1623 noktayı taradım; **dört vaka çıktı:**
```
Jukkasjärvi  Torneträsk    _ek8   ← MOTOR buldu
İnari        Inarijärvi    _ek8   ← MOTOR KAÇIRDI, tarama buldu
Västerås     Mälaren       _ek7   ← canlı
Eğirdir      Eğirdir gölü  yerlesimler.js — YAYINDA
```
Sebep tek: motorun `KARA`sı `ne_10m_lakes`i çıkarıyor (304 göl çıkar, 60 baraj
kalır); benim denetimimin kullandığı ham kıyı maskesi çıkarmıyor. **Kıyıya göre
doğru olan nokta, göle göre yanlış.**

### 🔴 VE İKİ KUSUR AYRI — `denetle.py`nin 6. kontrolü için
```
① kapsam  eski kutu → 64°K üstü hiç ölçülmemiş          (MOTOR buldu)
② ölçüt   ham kıyı maskesi → göl içi nokta görünmüyor    (bu tarama buldu)
```
②'yi bulmasaydık kutu düzeltilip "artık ölçüyoruz" denecek, **yine yanlış
maskeyle** ölçülecekti. Ölçüt `KARA.difference(GOLLER)` olmalı — `DOGAL_GOL`
kümesi ve baraj ölçütü dâhil (`uret_petek.py` 265-300).

### 🔴 KENDİ HATAM — düzeltmeyi YANLIŞ ANDA YAPTIM
`_ek8`deki iki koordinatı düzelttim. **Koordinatör geri aldı ve haklıydı:**
`_ek8` o sırada koşu 9'un BAĞLI girdisiydi ve `denetle_yayin.py:530`
girdilerin sha256'sını çıktının `URETIM_IZI`iyle karşılaştırıyor — anlık
görüntüden sonra girdiye yazmak **YAYIN BAYAT** verip yayını bloke ederdi.
Düzeltme `oturumlar/BEKLEYEN-ek8-gol-duzeltmesi.patch` olarak saklandı.

📌 **Asıl ders, gölden büyük:** `Västerås`a "dosya bağlı" diye dokunmadım ama
`_ek8`e dokundum — çünkü kafamdaki liste eskiydi. Oturumun başında
`GIRDI_DOSYALARI`nı okumuştum, `_ek8` içinde YOKTU; koordinatör `b7335ff`ten
sonra bağladı (`ek7+ek8+ek9`, 1.713 nokta) ve ben "bu dosya kutuyu bekliyor,
demek ki bağlı değil" diye **çıkarım yaptım, ölçmedim.**
⇒ **KURAL: bir veri dosyasına yazmadan önce `girdi.GIRDI_DOSYALARI` OKUNUR.**
  "Bu dosya şunu bekliyor, demek ki bağlanmamıştır" bir çıkarımdır ve
  çıkarım eskir; liste eskimez.
📌 Ve bu, `§5`in *"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu
  da doğrulamak gerekiyor"* dersinin üçüncü hâli. Bugün dördü birden görüldü:
  eksik dosya kümesi · eksik maske katmanı · eksik kutu kapsamı · eskimiş
  bağlılık listesi. **Hepsi aynı aile: kontrolü yaptım, ama motorun sorduğu
  soruyu değil kendi sorduğum soruyu ölçtüm.**


---
---

# PARTİ 20 — AMUR AŞAĞISI · OHOTSK · SAHALİN · ORTA SİBİRYA
### `data/yerlesimler_ek13.js` · 16 nokta · 6 Ağustos 2026

**Durum:** 🟢 HAZIR ve **hiçbir şey beklemiyor** — kutu içinde, renk tamam,
madde borcu sıfır. `girdi.py` `GIRDI_DOSYALARI`'na tek satırla eklenebilir.

🔴 **İLK İŞ, KENDİ KURALIMI UYGULADIM.** `PARTİ 19 §12`in dersi
(*"bir veri dosyasına yazmadan önce `girdi.GIRDI_DOSYALARI` OKUNUR"*)
uygulandı: liste okundu, çıkarım yapılmadı. Canlı küme 15 dosya /
1713 nokta; `ek10 · ek11 · ek12` listede YOK (renk bekliyor).
Kutu da okundu: `unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])`.

## ① SEVKİN İKİ CEBİ AYNI HASTALIK DEĞİLDİ — ölçüm ayırdı

Koordinatör "A Amur aşağısı/Ohotsk + B Orta Sibirya" diye sevk etti.
Ölçtüm ve **ikisi farklı cinsten kusur çıktı**; öncelik ondan türedi.

```
A  AMUR + OHOTSK + SAHALİN   3.815.852 km²   (45-66°K / 115-146°D)
   🔴 RENK YANLIŞ — 1910'da %30'u (1.144.714 km²) qing-hanedani,
      %4,3'ü (164.497 km²) meiji-japonya. Aygun (1858) ve Pekin (1860)
      antlaşmalarının haritada KARŞILIĞI YOK.
B  ORTA SİBİRYA PLATOSU      5.072.905 km²   (50-73°K / 82-120°D)
   🟢 RENK DOĞRU — 1700'den sonra %94,8 rusya, doğrusu bu.
   🔴 GEOMETRİ KABA — ort 357 km, en uzak 855 km (63,5°K/105,5°D).
```

📌 **A'da hata var, B'de yalnız kaba çizgi.** Nokta dağılımı buna göre
yapıldı: **A'ya 9, B'ye 7.**

### Sebep — `CLAUDE.md §2`, ders kitabı vakası
A'daki mevcut sekiz noktanın yedisi kutunun batı yarısında. Amur ağzı ·
Sahalin · Ohotsk'un güney kıyısı · Primorye — hiçbirinde nokta yok:
```
Aigun   (50,24/127,46) qing-hanedani → 586-892 km uzağı boyuyor
Sapporo (43,06/141,35) meiji-japonya → SAHALİN'İN TAMAMI + Amur ağzı
Ohotsk  (59,36/143,24) rusya         → tek doğru olan, ama tek başına
```

🔴 **SAPPORO VAKASI AYRICA KAYDA DEĞER.** Harita 1870'te Sahalin'in
tamamını Japon boyuyor. Gerçekte **1875-05-07** Petersburg antlaşmasıyla
adanın TAMAMI Rus oldu; Japonya ancak **1905-09-05** Portsmouth ile
50. paralelin güneyini aldı. ⇒ Japonya **otuz yıl erken ve iki kat geniş**
görünüyor. `§3.5` hayalet devlet sınıfının Uzak Doğu hâli — ve tabloya
kör olan sınıf.

## ② ÖLÇÜLEN ETKİ

```
A  ort 329 → 232 km · en uzak 892 → 507 km
   1870  rusya %65,7 → %83,6   qing %27,1 → %11,6   japonya %4,3 → %0,0
   1910  rusya %65,7 → %85,1   qing %30,0 → %14,5   japonya %4,3 → %0,4
B  ort 357 → 258 km · en uzak 855 → 686 km
   1800  rusya %94,8 → %95,4   qing %5,2 → %4,6
   en aç hücre (63,5°K/105,5°D) 855 → ~106 km
C  PRİMORYE (sevkin DIŞINDA, kontrol için ölçüldü)  524.132 km²
   ort 338 → 187 km · 1910 qing %78,7 → %29,6 · rusya %0 → %63,5
```

⚠️ **KALAN PAYLARI GİZLEMİYORUM:**
- A'da 1910'da hâlâ %14,5 qing var — o kutunun güneybatı köşesi
  (45-50°K/115-130°D = Mançurya ve İç Moğolistan) ve orada Qing **doğru.**
- B'nin yeni en uzak hücresi 686 km ile **50,5°K/82,5°D — ALTAY.**
  Bu partinin hedefi değildi, ayrı iş olarak duruyor.

## ③ 🔴 ÜÇ KAYIT ÖLÇÜM YÜZÜNDEN DEĞİŞTİ — `§3.5.1`in üç vakası birden

İlk taslakta üç noktanın başlangıç günü **kasabanın kuruluşu** idi.
Üçü de öbür uçta delik açıyordu; ölçüm yakaladı:

| kayıt | ilk yazdığım | düzeltilen | açtığı delik |
|---|---|---|---|
| Ayan | 1844 (liman) | **1679** (Uda ostrogu) | Ohotsk'un DOĞRU boyadığı kıyıda 165 yıl |
| Blagoveşçensk | 1689 (Nerçinsk) | **1651** (Albazin zinciri) | Albazin'in Rus döneminde 38 yıl |
| Kyahta 1727 | — | **Selenginsk 1665** | İrkutsk'un Selenga vadisinde ~127.000 km² |

Selenginsk vakası sayıyla: B'de 1700'de sahipsiz oran **%1,2 → %3,7**
çıkıyordu; düzeltmeden sonra **%1,2'de kaldı.**

📌 **Üçü de aynı hata: kasabanın kuruluşu ile toprağın idaresi AYRI
sorulardır ve ilkini yazmak ikincisini siliyordu.** `§3.5.1`in
*"bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür"* kuralı, bu partide
üç kez ayrı ayrı işledi.

## ④ ÜÇ TARİHİN NİÇİN BÖYLE BÖLÜŞTÜĞÜ

```
1689-09-06 Nerçinsk → Rusya Amur havzasını BIRAKTI
1858-05-28 Aygun    → Amur'un SOL YAKASI Rusya'ya
                      (Nikolayevsk · Blagoveşçensk)
1860-11-14 Pekin    → Ussuri'nin DOĞUSU Rusya'ya
                      (Habarovka · İmperator limanı · Vladivostok)
```
İki ayrı gün kullanıldı çünkü iki ayrı toprak: 1858-1860 arası
Ussuri-deniz arası "ortak" idi. Tek güne indirseydim ya iki yıl erken
ya iki yıl geç boyardım.

## ⑤ SAHALİN — ŞEMANIN YAZAMADIĞI BİR HÂL

**1855-02-07 Shimoda antlaşması adayı BÖLMEDİ** — "ortak mülkiyet, sınır
çizilmedi" dedi. `s:` bir dönemde TEK sahip yazabiliyor; "iki devlet
birden" ifade edilemiyor.
⇒ 1875-05-07'ye kadar `kasitli_bosluk` + `neden:` yazıldı.

📌 Bu, **`Hamâd bâdiyesi` ile aynı sınıf** ve `S-007` (benekli / paylaşımlı
nüfuz alanı) kaleminin **ikinci somut gerekçesi**: kusur veride değil
ŞEMADA, ve kalem olmadan doğru yazılamayan bir yer.

## ⑥ KABUL ÖLÇÜTÜ — sekiz kontrol + üçü, parti canlıymış gibi

```
① ayrıştırma  girdi.oku_dosya ile 16/16                       ✓
② alan kütüğü BILINEN_ALANLAR dışı alan YOK                    ✓
③ renk        rusya · qing-hanedani · meiji-japonya → 3/3      ✓  YENİ RENK YOK
④ ad çakışma  1713 canlı kayda karşı 16/16 benzersiz           ✓
⑤ dönem sağlığı gün hassasiyeti 16/16 · ters/sıfır/çakışan YOK ✓
⑥ Değişmez 1  iç boşluk 0 · 16 kayıt fetih öncesi sahipsiz     (aşağıda)
⑦ Değişmez 2  d:/v: dönemi SIFIR ⇒ kırılma 0, MADDE BORCU 0    ✓
⑧ Değişmez 3  m: yazılmadı ⇒ çelişki üretemez                  ✓
+ maske       MOTORUN ÖLÇÜTÜYLE 16/16 içeride                  ✓
+ kutu        16/16 içeride                                    ✓
+ 3 km        en yakın çift 6,57 km (Blagoveşçensk ↔ Aigun)     ✓ KASITLI
```

### 🔴 DEĞİŞMEZ 1 TAVANI: **+16** — ve tahminimi TUTTURAMADIM
Koordinatöre açılışta *"tahmin: +8 ilâ +14"* yazmıştım. **Gerçek +16.**
On altı kaydın on altısı da fetihten önce sahipsiz kesit veriyor ve
**on altısının on altısı da `kasitli_bosluk:true` + `neden:` taşıyor**
(ölçüldü, taşımayan sıfır). Tahminin tutmaması gizlenmiyor: aralığı
"her kayıt boşluk vermez" varsayımıyla dar tuttum, oysa Sibirya deseninde
**her kale kendi kuruluş yılından öncesini boş bırakır** — istisna yok.
📌 `PARTİ 19`da tavan 50→81 demiştim ve tutmuştu; oradaki desen 31/63 idi,
buradaki 16/16. **Aynı desenin farklı yoğunluğu tahmini bozdu.**

### ⚠️ MASKE KONTROLÜ MOTORUN ÖLÇÜTÜYLE YAPILDI — ve fark etti
Ham `ne_10m_lakes` ile ölçseydim **Bratsk ostrogu "göl içinde" diye
YANLIŞLIKLA elenecekti** (Bratsk baraj gölü 1961; motor baraj göllerini
KARA sayar, `uret_petek.py` 255-300). `PARTİ 19 §12`in dersinin tersten
hâli: orada ham maske bir hatayı GİZLEMİŞTİ, burada olmayan bir hatayı
UYDURUYORDU. **Aynı kusur, iki yönü.**

### ⚠️ KAYDIRILAN TEK NOKTA
`İmperator limanı` 48,970/140,290 → **49,030/140,230** (~8,4 km KB).
Sovetskaya Gavan derin bir koy; 10m maskesinin kıyı basitleştirmesi
kasabayı 0,5 km denizde bırakıyor. Öteki 15 nokta **olduğu yerde** geçti.

## ⑦ KAYNAK DÜRÜSTLÜĞÜ — `§4` gereği işaretli

🔴 **BU DOSYADAKİ HİÇBİR TARİH TDV'YE BASMIYOR.** §4 Doğu Asya ve Kuzey
Asya için standart akademik referansı yeterli sayıyor ama işaretlenmesini
istiyor — kayıt kayıt işaretlendi. Dayanak yalnız antlaşma günleri ve
kale kuruluş yılları:
```
Nerçinsk 1689-09-06 · Kyahta 1727-10-21 · Aygun 1858-05-28 ·
Pekin 1860-11-14 · Petersburg 1875-05-07 · Portsmouth 1905-09-05
Udskoy 1679 · Selenginsk 1665 · Kirensk 1630 · Bratsk 1631 ·
Vilyuysk 1634 · Yerbogaçen 1668
```

## ⑧ 🔴 REPO GENELİNDE BİR BORÇ — benim değil, ama ÖLÇTÜM

`devletler.js`: **`rusya` f=1547-01-16 · t=1917-03-15.**
Canlı veride **209 `rusya` döneminin 180'i** 1917-03-15'ten sonrasına
taşıyor (`t:"1923-10-29"`). Atlasta Sovyet ya da Rus Cumhuriyeti kimliği
**YOK** — `BOYALAR`'da `rusya` dışında Rus kimliği bulunmuyor.

Bu partinin on beş `rusya` dönemi de aynı sözleşmeyi izliyor. **Kendi
başıma ayrılmadım**, çünkü ayrılsaydım 1917-1923 arası Sibirya'nın tamamı
RENKSİZ kalırdı — yani tek dosyalık bir "düzeltme" haritada 5 milyon km²
delik açardı.

⇒ Kayda geçiyor: bu bir **`§3.5` hayalet sınıfıdır** ve çözümü tek nokta
değil **bir KİMLİK kararıdır.** Koordinatöre / RENK'e.

---

# EK TEŞHİS — Emre'nin kutusundaki iki madde (ekleme YOK, ÖLÇÜM)

## 🔴 parti-0004 H-0010 — "HAZAR'IN DOĞUSU BOŞ GÖRÜNÜYOR"
### Emre haklı, ve sebebi tahmin ettiğimden BÜYÜK

```
kutu 36-50°K / 52-76°D    kara 2.468.610 km²   nokta 39   63.298 km²/nokta
                          ort uzaklık 259 km   en uzak 743 km
referans: Batı Anadolu (parti 1'de ölçüldü)     2.681 km²/nokta
⇒ Hazar doğusu, Batı Anadolu'dan 24 KAT SEYREK.
```

🔴 **AMA ASIL BULGU ORTALAMA DEĞİL, DAĞILIM.** O 39 noktanın **24'ü
36-38°K kuşağında** — yani Horasan ve Hazar'ın güney kıyısı, İran
partilerinden gelme. Kuzeyi ayrıca ölçtüm:

```
box(37-45°K / 62-76°D) — MÂVERÂÜNNEHİR + FERGANA + YEDİSU
    ≈1,5 milyon km²        TOPLAM NOKTA: 1  ← Kaşgar, o da 75,99°D'de,
                                              yani kutunun DOĞU KENARINDA
```

**Atlasta bulunmayanlar:** Semerkant · Buhara · Taşkent · Hokand ·
Andican · Hucend · Termez · Belh · Şehrisebz · Karşi · Türkistan (Yesi) ·
Oş · Almatı. **Timur'un başkenti bir 1281-1923 atlasında yok.**

⇒ Emre'nin "boş görünüyor" dediği şey bir çizim kusuru değil:
**o coğrafyanın haritada hiç noktası yok.** Boşluğu 640-743 km öteden
`Kaşgar` · `Kazak bozkırı (İşim)` · `Gulca` · `Hazârasp` paylaşıyor.

### Sahiplik dağılımı — sahipsiz oran da ölçüldü
```
1500  timurlu %32,2 · kazak %20,6 · mogulistan %19,1 · SAHİPSİZ %16,2
1600  kazak %20,6 · safevi %16,3 · SAHİPSİZ %16,2 · yarkent %15,6 · hive %11,6
1700  kazak %27,0 · safevi %16,3 · yarkent %15,6 · SAHİPSİZ %13,8
1800  kazak %27,0 · qing %19,1 · SAHİPSİZ %13,8 · hive %11,6
1900  rusya %43,7 · qing %19,1 · hive %11,6 · SAHİPSİZ %10,8
```
Sahipsiz oran her tarihte %10-16 (≈270.000-400.000 km²) — bir kısmı
Karakum/Kızılkum çölü ve **kasten** boş, ama kutuda kasıt ile eksiği
ayıracak nokta yok. (`Parti 2 §③`in "YALANCI BOŞ" sınıfı.)

### 🟢 SIRADAKİ PARTİ ÖNERİSİ — kimlik engeli ÖLÇÜLDÜ, neredeyse YOK
```
VAR (BOYALAR'da) : timurlu · buhara · hive · yarkent-hanligi · mogulistan
                   kazak-hanligi · cungar · nogay · altinorda · rusya
                   qing-hanedani · babur-imparatorlugu · safevi · kacar
🔴 TEK EKSİK      : hokand — devletler.js'te VAR (1710-01-01 → 1876-02-19)
                    ama renkler.py BOYALAR'da YOK. RENK'in TEK SATIRI.
```
⇒ Mâverâünnehir partisi **tek renkle** açılabilir. Bu, ölçtüğüm bütün
seyreklik vakaları içinde **km² başına en ucuz olanı**: bir satır renk,
~20-25 nokta, ≈1,5 milyon km².
📌 Ve TDV kapsamındadır (`semerkant` · `buhara` · `taskent` · `hokand` ·
`maveraunnehir` beklenen sluglar) — yani `§4`in birincil kaynağı geçerli,
bu partininki gibi "TDV'ye basmıyor" işareti gerekmeyecek.

## 🟡 parti-0003 H-0015 — KIRIM "CETVELLE BÖLÜNMÜŞ"
### Ölçtüm: **yarımadanın kendisi ARTIK SEYREK DEĞİL**

`yerlesimler_kirim.js` **canlı** (`GIRDI_DOSYALARI`'nda, doğruladım),
yani parti 1'in dokuz noktası r771'de yayında.

```
Kırım yarımadası (44-46,5°K / 32,5-36,5°D) · 0,25° ızgara
   kara 35.808 km²   nokta 14   2.558 km²/nokta
   ort uzaklık 39 km · en uzak 95 km
   referans Batı Anadolu 2.681 km²/nokta  ⇒ Kırım artık BİR TIK DAHA SIK
```

🔴 **VE EN UZAK SEKİZ HÜCRENİN SEKİZİ DE YARIMADANIN DIŞINDA:**
```
95 km  46,12°K/35,12°D  <- Yediçkul bozkırı      ] hepsi 45,6°K'nin
94 km  45,88°K/34,88°D  <- Karasubazar           ] KUZEYİ = Perekop'un
85 km  46,38°K/32,62°D  <- Or Kapı               ] ötesi, ANAKARA BOZKIRI
```

**HÜKMÜM — üç şıklı, ve seçimi ekran görüntüsü belirler:**
1. Şikâyet **r771 ÖNCESİNE** aitse ⇒ **zaten kapandı**, ölçüm yukarıda.
2. Şikâyet **Perekop'un KUZEYİNE** aitse ⇒ **benim işim değil, KARADENİZ
   KUZEYİ BOZKIRI işi** — parti 1'in `§⑥` listesinin 🔴 EN BÜYÜK maddesi,
   1° ızgarada ilk 25'in 24'ü orada. Ayrı ve büyük bir parti.
3. Şikâyet **kıyı şeridi (OSMANLI) ile iç toprak (tâbi) arasındaki DÜZ
   ÇİZGİYE** aitse ⇒ 🔴 **bu seyreklik DEĞİL, MODELİN KENDİSİ.**
   %22,9 OSMANLI / %69,6 tâbi ayrımı, kıyı noktalarıyla iç noktaların orta
   dikmesidir; nokta eklemek çizgiyi kırar ama **düzlüğünü kaldırmaz.**

⚠️ Ve `bfe254f` commit'i *"ARAYUZ 5: H-0015 düzeltildi"* diyor — aynı
kalem numarası. **Aynı işi iki oturumun yapmadığından emin olunmalı;**
koordinatörün ayırması gereken bir çakışma olabilir.

## AÇIK BIRAKTIKLARIM — bu partide KASTEN yazılmayanlar
```
Moğolistan yakası     Selenginsk sınırı tek taraflı düzeltiyor (hata 2,5°
                      → 0,8°, sıfırlanmıyor). Altanbulag/Darhan qing ile
                      yazılabilir ama ÖLÇMEDEN yazmam.
Altay (50,5°K/82,5°D) B'nin yeni en uzak hücresi, 686 km. Bu partinin
                      hedefi değildi.
Çukotka / Kamçatka    Kutunun doğu kenarının (146°D) dışında.
Kuril adaları         Aynı sebep + `edo-bakufu`/`meiji-japonya` ayrımı
                      Sahalin'den ayrı bir kaynak turu ister.
Mâverâünnehir         Yukarıda ölçüldü — ayrı parti, `hokand` rengi lazım.
```


---

# PARTİ 20 EKİ — GÖL KALEMİ KAPANDI, AMA "ÜÇÜ TAMAM" YANLIŞTI
### 6 Ağustos 2026 · `data/yerlesimler_ek8.js` (2 satır)

## ① İKİ KOORDİNAT DÜZELTİLDİ — dosya `_ek8`, `yerlesimler.js` DEĞİL

⚠️ **Önce bir düzeltme:** koordinatör *"`yerlesimler.js` çalışma ağacında
temiz"* diye sevk etti. Jukkasjärvi **`yerlesimler.js`'te değil,
`data/yerlesimler_ek8.js:110`'da.** Doğru dosyaya bakıldı, `git status`
ile temiz olduğu doğrulandı, koşan üretim olmadığı ayrıca kontrol edildi.

```
Jukkasjärvi  67,8500/20,6600 → 67,8693/20,6737   (2,2 km KD, Torneträsk dışına)
İnari        68,9058/27,0289 → 68,9257/27,0337   (2,2 km K, Inarijärvi dışına)
```
İkisi de 4 Ağustos'ta `oturumlar/BEKLEYEN-ek8-gol-duzeltmesi.patch`'e
konmuştu (o gün `_ek8` koşu 9'un bağlı girdisiydi, yazmak yayını bayat
gösterirdi). Bugün koşu yok, uygulandı.

⚠️ **Koordinatörün önerdiği 67,8443/20,6594 KULLANILMADI.** Ölçtüm: o da
maskeden geçiyor ama göl kenarına **sıfır mesafede** duruyor. `KARA_TOL`
0,002 sadeleştirmesinin bir kıpırtısı onu geri içeri alabilir. 2,2 km'lik
payı olan koordinat seçildi.

## ② 🔴 "ÖBÜR ÜÇÜ TAMAM" — ÜÇÜ DE TAMAM DEĞİLDİ

Koordinatör `denetle.py` çıktısına dayanarak *"Eğirdir · Västerås · İnari ✓"*
dedi. **Üçünü de motorun kendi ölçütüyle ölçtüm ve üçü de gölün içindeydi.**

```
                      MOTOR (sadeleştirmesiz göl)   DENETLE (simplify 0.01)
İnari      68,9058     🔴 GÖL İÇİNDE  (20 m)          ✓ karada
Eğirdir    37,8740     🔴 GÖL İÇİNDE  (142 m)         ✓ karada
Västerås   59,6110     🔴 GÖL İÇİNDE  (74 m)          ✓ karada
```

🔴 **SEBEP TEK VE KODDA YAZILI:** `denetle.py:1103` gölleri
`simplify(0.01, preserve_topology=True)` ile sadeleştiriyor.
**0,01° ≈ 1,1 km.** Motor sadeleştirmiyor.
⇒ **Tolerans, aradığı hatanın kendisinden büyük.** 20-142 metrelik bir
göl taşması 1,1 km'lik bir yumuşatmanın altında kalıyor ve denetim
"konum: 0" diyor.

📌 Bu, `PARTİ 19 §12`nin dersinin **ÜÇÜNCÜ hâli** ve deseni tamamlıyor:
```
① eksik dosya kümesi     (§5, Temmuz)      ayrıştırıcı doğru, dosya listesi eksik
② eksik maske katmanı    (§12, 4 Ağustos)  ham kıyı maskesi gölü görmüyor
③ eksik kutu kapsamı     (§12, 4 Ağustos)  64°K üstü hiç ölçülmemiş
④ eskimiş bağlılık listesi (§12)           çıkarım eskir, liste eskimez
⑤ FAZLA SADELEŞTİRME     (bugün)           göl VAR, ölçüt onu bulanıklaştırıyor
```
**Beşi de aynı aile: kontrolü yaptım, ama MOTORUN sorduğu soruyu değil
KENDİ sorduğum soruyu ölçtüm.**

## ③ TAM TARAMA — 1745 nokta, motorun ölçütüyle

`_ek8` düzeltildikten sonra bütün canlı küme + `ek13` tarandı:
```
maske dışında: 2
   0,142 km  Eğirdir    37,8740 / 30,8510   🔴 denetle.py GÖRMÜYOR
   0,074 km  Västerås   59,6110 / 16,5450   🔴 denetle.py GÖRMÜYOR
```
⇒ **`denetle.py` "konum: 0" diyecek ve bu YANLIŞ TEMİZ olacak.**
İkisi de koordinatörün dosyalarında (`yerlesimler.js` · `_ek7`), bende değil.

### ⚠️ AĞIRLIĞINI ABARTMIYORUM — ölçtüm, ve Jukkasjärvi ile AYNI DEĞİL
Jukkasjärvi'nin peteği **%0,0** çıkmıştı çünkü Voronoi hücresi küçüktü
(İskandinavya'da nokta sık) ve **tamamen gölün içine düşüyordu.**
Eğirdir ve Västerås 74-142 m içeride; çevrelerindeki kara oranı:
```
                5 km      20 km     50 km
Eğirdir        %50,3     %76,7     %92,6
Västerås       %57,1     %74,5     %88,6
```
⇒ Hücreleri gölün çok ötesine uzanıyor; **peteklerinin sıfırlanması
beklenmez.** Ama bunu kesin söyleyebilecek tek şey motorun kendisidir.
🔴 **Asıl bulgu haritanın bozuk olması değil, DEDEKTÖRÜN KÖR olması.**

### 📌 `denetle.py`ye öneri (dosya benim değil, uygulamıyorum)
Göl sadeleştirmesi ya **motorunkiyle aynı olsun** (yani hiç olmasın), ya da
tolerans aranan hatadan küçük olsun. Bugünkü hâliyle 6. kontrol, kendi
yakalamak için yazıldığı hata sınıfının **alt yarısına kör.**

## ④ ORTA ASYA İDDİASI — KOORDİNATLA DOĞRULANDI

Koordinatör uyardı: *"veri Türkçe yazımla ve parantezli tutuluyor
(`Sin (Sinj)` · `Kotor (Cattaro)`); tam eşleşmeyle arama, koordinatla bak."*
Uyarı yerinde — ilk turda ad kökü araması da yapmıştım. **Hükmü ad
eşleşmesinden değil koordinattan kuruyorum:**

```
hedef              en yakın CANLI nokta            hüküm
Semerkant 39,654/66,975    502,6 km  Merv          🔴 YOK
Buhara    39,768/64,421    330,4 km  Merv          🔴 YOK
Taşkent   41,311/69,280    604,7 km  Kaşgar        🔴 YOK
Hokand    40,529/70,943    446,2 km  Kaşgar        🔴 YOK
Andican   40,783/72,350    342,6 km  Kaşgar        🔴 YOK
Hucend    40,284/69,622    551,5 km  Kaşgar        🔴 YOK
Termez    37,224/67,278    345,3 km  Kâbil         🔴 YOK
Belh      36,758/66,897    322,5 km  Kâbil         🔴 YOK
Şehrisebz 39,058/66,833    466,1 km  Merv          🔴 YOK
Karşi     38,860/65,795    374,0 km  Merv          🔴 YOK
Türkistan 43,302/68,253    631,1 km  Hazârasp      🔴 YOK
Oş        40,514/72,804    295,5 km  Kaşgar        🔴 YOK
Almatı    43,238/76,889    365,5 km  Gulca         🔴 YOK
Çimkent   42,317/69,596    624,5 km  Kaşgar        🔴 YOK
──────────────────────────────────────────────────────────
Hîve (KONTROL)  41,379/60,363   0,1 km  Hîve       🟢 VAR
```
🟢 **Kontrol noktası yöntemin çalıştığını kanıtlıyor:** Hîve 0,1 km'de
yakalandı. On dördünün en yakını **295 km.** ⇒ Sahte "YOK" değil; o
coğrafyada gerçekten nokta yok.

📌 Ve `ONCELIK.md K4`e uygun: koordinatörün itirazı ölçülerek karşılandı,
hüküm değişmedi ama **dayanağı ad eşleşmesinden koordinata taşındı.**

## ⑤ AYRI GÖZLEM — 3 km ölçütünü ihlal eden CANLI çift var (benim değil)
Tam taramada çıktı: canlı verinin en yakın çifti
**`Anadolu Hisarı` ↔ `Rumeli Hisarı` = 1,539 km.**
`§11`in 3 km eşiğinin altında ama **mükerrer değil**: Boğaz'ın iki yakasında
karşılıklı iki ayrı kale. Bilinen ve muhtemelen kasıtlı; yalnız kayda
geçiyorum ki bir sonraki 3 km taraması onu "yeni bulgu" sanmasın.


---

# 🔴 DÜZELTME — YUKARIDAKİ "PARTİ 20 EKİ ②" MEKANİZMASI YANLIŞTI
### 6 Ağustos 2026 · koordinatör ölçtü, ben doğruladım

## Ne yazmıştım
> *"`denetle.py` gölleri `simplify(0.01)` ile sadeleştiriyor, **motor
> sadeleştirmiyor** ve peteği SIFIRLIYOR. ⇒ Denetim TEMİZ derken petek
> %0,0 çıkardı."*

## Gerçek — ölçüldü
```
arac/uret_petek.py:317   GOLLER = unary_union(_gs)...simplify(0.01, ...)
arac/denetle.py:1144     goller = unary_union(gs)...simplify(0.01, ...)
```
**Motor da sadeleştiriyor, AYNI toleransla.** İkisi arasında ayrışma YOK.

Üç maskeyle sınadım:
```
                        ham göl      MOTOR (sade)   DENETLE (sade)
Jukkasjärvi ESKİ        🔴 GÖLDE     🔴 GÖLDE       🔴 GÖLDE
İnari ESKİ              🔴 GÖLDE     ✓ karada       ✓ karada
```
⇒ **İki vaka ayrı ve karıştırılmamalı:**
- **Jukkasjärvi** her üç ölçütte de suda ⇒ motor onu gerçekten suda
  görüyordu, peteği %0,0 çıkan oydu. **Düzeltme zorunluydu.**
- **İnari** yalnız ham gölde ⇒ motor karada görüyordu, **peteği
  sıfırlanmazdı.** Taşımak yine de doğru (kayıt su üstündeydi) ama
  gerekçem yanlıştı.

## Niçin yanıldım — ve bu tam kendi listemin ⑤. maddesi
`uret_petek.py`'nin **255-310 arasını okudum ve durdum.** Göl bloğunun
sadeleştirme satırı **317**'de. Yani:
- Kodu okudum ✓
- Ölçüm yaptım ✓ (ama kendi kurduğum "ham göl" maskesiyle)
- **Motorun gerçekten ne yaptığını doğrulamadım** ✗

📌 Ve bu, yukarıda kendi yazdığım desenin aynısı — **altıncı hâli:**
```
① eksik dosya kümesi         ayrıştırıcı doğru, dosya listesi eksik
② eksik maske katmanı        ham kıyı maskesi gölü görmüyor
③ eksik kutu kapsamı         64°K üstü hiç ölçülmemiş
④ eskimiş bağlılık listesi   çıkarım eskir, liste eskimez
⑤ fazla sadeleştirme         (benim iddiam — YANLIŞ ÇIKTI)
⑥ EKSİK OKUNMUŞ KOD          bloğun yarısını okuyup motorun davranışını
                             İDDİA ETTİM. Ölçmedim, çıkarım yaptım.
```
🔴 **Ve ⑥, ötekilerden daha kötü:** ①-④'te ölçtüm ama yanlış soruyu
ölçtüm; burada **hiç ölçmedim, koddan çıkarım yaptım** — üstelik iki gün
önce *"çıkarım eskir, liste eskimez"* diye yazan kişi olarak.
⇒ Kural genişliyor: **"Motorun ne yaptığını iddia etmeden önce o kod
bloğunun SONUNU oku."** Yarısını okumak, okumamaktan daha tehlikeli —
çünkü okuduğuna güvenirsin.

## Neyi DEĞİŞTİRMİYOR
```
Jukkasjärvi 67,8693/20,6737   düzeltme GEÇERLİ, gerekçe de doğruydu
İnari       68,9257/27,0337   taşıma GEÇERLİ (kayıt su üstündeydi),
                              yalnız YORUMDAKİ mekanizma düzeltildi
Orta Asya ölçümü              etkilenmiyor (göl ile ilgisi yok)
ek13'ün 16 noktası            etkilenmiyor
```

## MOTORUN GERÇEK ÖLÇÜTÜYLE TAM TARAMA — bugünkü durum
Maskeyi `uret_petek.py` 255-318'i **birebir** izleyerek yeniden kurdum;
bu sefer eksik iki parça da içeride: `simplify(0.01)` **ve**
`girdi.oku_goller()` (yani `data/goller.js` tarihî gölleri — onu da hiç
hesaba katmamıştım).
```
canlı küme: 1729 nokta (ek13 bağlı)
   🔴 motorun maskesinin DIŞINDA : 0
   🟡 SINIRDA (motor karada, ham gölde) : 0
   ek13'ün 16 noktası : ihlal 0 · sınırda 0
```
⇒ Koordinatörün Eğirdir (37,8727/30,8487) ve Västerås (59,6132/16,5450)
düzeltmeleri de her iki ölçütten geçiyor. **Göl kalemi tamamen kapandı.**

## KABUL EDİLEN İKİ TENKİT
1. **`Değişmez 1` tavan tahmini `ek13` dosya başına yazılmamış.**
   Doğru — `PARTİ 19`da yazmıştım, burada koordinatöre mesajla verdim ama
   **dosyaya koymadım.** Bir sonraki partide dosya başına geri konacak;
   mesaj kaybolur, dosya kalır.
2. **`2s` ölçütü konu yakınlığına bakmıyor.** Koordinatörün bulgusu:
   `ek13`ün 13 kırılmasından 6'sı alakasız maddelere takılıp "MADDELİ"
   sayılmış (Nerçinsk 1689 ↔ *"Niş ve Vidin'in kaybı"*, Pekin 1860 ↔
   *"Tercümân-ı Ahvâl'in yayına başlaması"*). Kusur bende değil ölçütte,
   ama **partim onu görünür kıldı** çünkü tarihlerim Osmanlı
   kronolojisinden bambaşka bir sahnede geçiyor.
   📌 Not: bu, `PARTİ 3`te Karaman üçlüsünde bulduğum hatanın **aynısı**
   (*"ilhak, kendi maddesinde değil iki madde sonra boyanıyor"*) — orada
   `Değişmez 2` için ölçmüştüm, burada `2s`de tekrar çıktı. **Aynı kör
   nokta, iki ayrı denetimde.**


---
---

# PARTİ 21 — MÂVERÂÜNNEHİR + HERAT + BELH
### `ek14` (9) · `ek15` (7) · `ek16` (2) = **18 nokta** · 6 Ağustos 2026

**Durum:**
```
_ek14  9 nokta  🟢 BAĞLANABİLİR
_ek15  7 nokta  🟢 BAĞLANABİLİR — engel oturum sırasında kalktı
_ek16  2 nokta  🔴 `afgan-durrani` + `afganistan` rengini bekliyor
```

## ① BEKLENEN DEĞİŞİM — bu sefer DOSYA BAŞINA da yazıldı
`PARTİ 20`de bunu koordinatöre mesajla verip **dosyaya koymayı atlamıştım**;
tenkit haklıydı (*"mesaj kaybolur, dosya kalır"*). Üç dosyanın üçünde de
başlıkta duruyor:
```
nokta               +18   (9 + 7 + 2)
yeni renk           2     (`afgan-durrani` · `afganistan`) — `hokand` GELDİ
Değişmez 1 tavanı   +0    ← 18 kaydın 18'i de 1281-01-01'den KESİNTİSİZ
                            sahipli. Tavan 102'DE KALMALI. Değişirse bir
                            şey bozulmuştur.
Değişmez 2 borcu    0     (`d:`/`v:` dönemi yok, hepsi `s:`)
Değişmez 3 çelişki  0     (`m:` yazılmadı)
```
📌 **Bu partide tahmin +0** ve o yüzden `PARTİ 20`den daha güçlü bir iddia:
oradaki +16 "kaç tane" sorusuydu, buradaki **"hiç olmamalı"** — yani
denetimin sayısı DEĞİŞİRSE benim hatam demektir.

## ② ÜÇE BÖLME KARARI — ve niçin bölünmeseydi 18'i birden beklerdi
`PARTİ 19`da kurduğum desen: **dosya başına tek engel.** Uygulandı ve
oturum bitmeden karşılığını verdi:
```
başlarken   _ek14 hazır · _ek15 `hokand` bekliyor · _ek16 afgan bekliyor
biterken    _ek14 hazır · _ek15 HAZIR (renk geldi) · _ek16 bekliyor
```
🟢 **RENK 2 `hokand` rengini oturum sırasında ekledi** (`BOYALAR` 231 → 232,
`#b4603f`); ölçtüm, doğruladım, `_ek15`in başlığını düzelttim.
⇒ Bölünmeseydi on altı nokta `_ek16` yüzünden bekleyecekti.

## ③ 🔴 KOORDİNATÖRE İKİ DÜZELTME

### (a) "hokand tek kayıt" değil, YEDİ
Sevkte *"14 şehrin 13'ü boyalı, `hokand`ı en sona bırak, tek kayıt
eklersin"* deniyordu. **Hokand Hanlığı yalnız Hokand şehri değildi.**
TDV `taskent`in kendi cümlesi: *"Taşkent … Hokand Hanlığı'nın egemenliğine
girdi (1809)."* Aynı hanlık Hucend (1802) · Türkistan (1815) · Andican ·
Oş · Çimkent'i de tutuyordu. **Yedi kayıt.**

### (b) `afgan-durrani` ve `afganistan` RENGİ YOK — ve bu benimle başlamıyor
Canlı `Kâbil` kaydı **bugün** o iki kimliği taşıyor ve ikisinin de rengi
yok. `CLAUDE.md §8`: renksiz kimlik ⇒ **bölge boyanmaz.**
⇒ **Afganistan haritada 1747'den beri boyasız.** 15 nokta `afgan-durrani`,
3 nokta `afganistan`.

## ④ 🔴 VE DAHA BÜYÜĞÜ — 44 RENKSİZ KİMLİK, en tepesi Çin
Aynı taramada ölçüldü — canlı `s:` dönemlerinde kullanılan ama
`BOYALAR`'da olmayan kimlikler:
```
cin-cumhuriyeti     85 nokta   1911-10-10 → 1923-10-29   ← AÇIK ARA BİRİNCİ
kenmu               17 · fransiz-cinhindi 16 · afgan-durrani 15
haydarabad-nizam    15 · bengal-sultanligi 13 · bengal-nevabligi 13
san-fan             13 · yadava 12 · dashun 12 · avad 9 …
                    (kuyrukta 34 kimlik daha)
                    TOPLAM 44 KİMLİK
```
🔴 `cin-cumhuriyeti` demek: **Çin'in 85 noktası 1912-1923 arası boyasız.**
Benim işim değil, düzeltmeye kalkmadım — ölçüm RENK 2'ye gitti.

## ⑤ EMRE'NİN `H-0010` MADDESİ — bu parti onun cevabı
```
box(37-45°K / 62-76°D)  ≈1,5 milyon km²   ÖNCEKİ NOKTA SAYISI: 1
                                          (Kaşgar, kutunun DOĞU KENARINDA)
```
On dört hedefin de en yakını **295 km+**; kontrol noktası `Hîve` 0,1 km'de
yakalandı (koordinatörün *"koordinatla bak, adla değil"* uyarısı uygulandı).
🔴 **Timur'un başkenti bir 1281-1923 atlasında yoktu.**

## ⑥ KAYNAK — `PARTİ 20`nin tersine BU PARTİ TDV'YE BASIYOR
`<title>` ile sınandı:
```
CANLI : semerkant · buhara · taskent · hokand · herat · belh
🔴 ÖLÜ : termiz   ("Arama - TDV İslâm Ansiklopedisi")
```
TDV'den alınan kesin günler:
| madde | hüküm |
|---|---|
| `semerkant` | Özbekler 1500 · **Ruslar 14 Mayıs 1868'de zaptetti** |
| `buhara` | Özbekler 1500 yazı · hanlık **6 Ekim 1920'de ilga** |
| `taskent` | Şeybânî 1503 · **Hokand 1809** · Ruslar **Haziran 1865** |
| `hokand` | Ming hanedanı başşehri XVIII. yy ortası · **Şubat 1876 ilhak** |
| `herat` | Kertler 1255-1381 · Timur **Nisan 1381** · Özbekler 1507 · Şah İsmâil 1510 · Dürrânî 1747 · **1863 Paris** |
| `belh` | Şeybânî **1506** · Şah İsmâil **1509** · Çaldıran'dan sonra Özbekler · Dürrânî **1751** · Buhara **1826** · Afganlar **1841** |

### İşaretlenen iki zayıflık
```
Taşkent 1865-06-17   TDV yalnız AYI veriyor ("Haziran 1865"); GÜN akademik
                     referanstan. `§4` "tarih uydurma" der — ay biliniyor.
Herat 1281-1381      TDV Kert (Kart) hânedanı diyor; `kart` kimliği ne
                     dizinde ne renkte VAR. UYDURULMADI — canlı Horasan
                     deseni ödünç alındı (`ilhanli`→`iran`, Merv/Nesâ/
                     Serahs üçünün de taşıdığı zincir). Kimlik gelirse
                     tek satırla düzeltilir.
```

## ⑦ İKİ DİZİN ÇELİŞKİSİ BULUNDU

### (a) `buhara` bitişi: TDV 1920-10-06 ↔ dizin 1920-09-02
34 gün fark (Kızıl Ordu 2 Eylül'de şehri aldı, halk cumhuriyeti 8 Ekim'de
ilân edildi — ikisi de savunulabilir). **Dizindeki gün kullanıldı:** atlas
içi tutarlılık 34 günden önemli, `devletler.js` benim dosyam değil.

### (b) 🔴 `cagatay` ile `timurlu` ARASINDA 98 GÜNLÜK BOŞLUK VAR
```
devletler.js:  cagatay t=1370-01-01   ·   timurlu f=1370-04-09
```
Üç şıkkın üçü de kusurlu:
```
(a) cagatay'ı 04-09'a uzat     → cagatay 98 gün HAYALET (§3.5)
(b) timurlu'yu 01-01'de başlat → timurlu 98 gün hayalet
(c) arada boşluk bırak         → Değişmez 1 İHLALİ, 98 günlük delik
```
🔴 **Önce (a)'yı yazdım ve kendi hayalet kontrolüm 17 kayıtta yakaladı.**
**(b)'ye çevrildi**, çünkü canlı `Kâbil` kaydı zaten öyle yazıyor — atlas
tercihi çoktan yapmış, ondan ayrılmak yeni bir tutarsızlık olurdu.
📌 Gerçek çözüm dizindedir (`timurlu` f'i 1370-01-01'e çekilirse üç şıkkın
   da gereği kalmaz) ve `devletler.js` benim dosyam değil.

## ⑧ KOPYALANMAYAN ZİNCİRLER — dördü ayrı ayrı gerekçeli
```
Cizzah      Semerkant'tan İKİ YIL ÖNCE Rus (1866-10-18 ≠ 1868-05-14)
Hucend      Fergana üçlüsünden farklı: Hokand'a 1802, Rusya'ya 1866-05-24
Türkistan   ortada `buhara` DEĞİL `kazak-hanligi` — Yesi Kazak hanlarının
   ve Çimkent   makamıydı; Fergana zinciri kopyalansa iki yüzyıl yanlış olurdu
Almatı      Yedisu Mâverâünnehir değil Moğulistan; zincir `Gulca`dan
Belh        Herat'tan ayrı: Horasan değil, Mâverâünnehir'in güney kanadı
```
Ve `kazak-hanligi` **1847-01-01'de kesildi**, Vernıy kalesinin kurulduğu
1854'te değil — dizin `t=1847-01-01` diyor, kaleyi başlangıç yapsaydım
hanlığı yedi yıl fazla yaşatırdım (`§3.5`, Batnoz'un aynısı).

## ⑨ KABUL ÖLÇÜTÜ — 18 nokta
```
① ayrıştırma  9 + 7 + 2 = 18/18 `girdi.oku_dosya` ile temiz     ✓
② alan kütüğü BILINEN_ALANLAR dışı alan YOK                     ✓
③ renk        _ek14 ve _ek15 tam · _ek16 iki eksik (ilan edildi)
④ ad çakışma  1729 canlı kayda karşı 18/18 benzersiz            ✓
⑤ dönem sağlığı gün hassasiyeti 18/18 · ters/sıfır/çakışma YOK  ✓
⑤b hayalet    yalnız BİLEREK seçilen `timurlu` 98 günü (⑦b)
              + repo geneli `rusya`>1917 sözleşmesi
⑥ Değişmez 1  iç boşluk 0 · 1281'de sahipsiz kayıt 0 ⇒ TAVAN +0 ✓
⑦ Değişmez 2  d:/v: dönemi 0 ⇒ kırılma 0, MADDE BORCU 0         ✓
⑧ Değişmez 3  m: yazılmadı ⇒ çelişki üretemez                   ✓
+ maske       MOTORUN GERÇEK ölçütüyle 18/18 içeride            ✓
              (simplify(0.01) + girdi.oku_goller() — dünkü iki eksiğim)
+ kutu        18/18 içeride                                     ✓
+ 3 km        en yakın çift 48,65 km (Andican ↔ Oş)             ✓
```

## ⑩ AÇIK BIRAKILANLAR
```
_ek16          afgan renkleri gelene kadar bağlanmaz
Duşanbe        1920'lere kadar köy; Hisar beyliğinin içinde, ayrı petek
               kazancı yok
Ura-Tepe       Buhara ile Hokand arasında sürekli el değiştiriyor;
               kaynakla ayıramadım, YAZILMADI
Merv-Buhara    canlı `Merv` kaydı 1785-1860 arası `buhara` taşıyor —
  kuşağı       yeni noktalarımla tutarlı, dokunulmadı
Hazar doğusu   kutunun geri kalanı (Karakum · Kızılkum · Üstyurt) zaten
               dolgu noktalı; bu parti ŞEHİRLERİ kapattı, çölü değil
```


---

# PARTİ 21 — BAĞLANDIKTAN SONRAKİ ÖLÇÜM
### `ek14` + `ek15` canlı · 1745 nokta · 6 Ağustos 2026

## ① 🟢 `Değişmez 1 +0` TAHMİNİ DOĞRULANDI — koordinatörün kendi aletiyle
```
Değişmez 1  ✓  1745 yerleşim, 102 sahipsiz (beklenen 102)
Değişmez 1b ✓  pencere arası boşluk: 0
Değişmez 2  ✓  497 kırılma, 0 açık
Ek denetim  ✓  konum: 0 nokta kara maskesinin dışında (beklenen 0)
```
Dosya başlarına *"tavan 102'DE KALMALI, değişirse bir şey bozulmuştur"*
yazmıştım. **Kalmadı — kaldı.** `PARTİ 20`nin +16 tahmini tutmamıştı;
bu turda tahmin **+0** idi ve tuttu.
📌 Ve göl kalemi de kapandı: `konum: 0`.

## ② 🔴 AMA `2s` ARTTI — 131 → 143, ve +12'nin HEPSİ BENDEN
Dosya başında *"`2s` +? — sayıyı ölçemem, bana kapalı"* yazmıştım.
Bağlandıktan sonra ölçtüm; artık kapalı değil. **On üç açık gün:**
```
_ek14 (6)   1347-01-01 (214g)  1370-01-01 (633g)  1500-01-01 (126g)
            1758-01-01  (63g)  1847-01-01  (33g)  1866-10-18  (58g)
_ek15 (9)   1370-01-01 · 1500-01-01 (ortak)  1598-01-01 (87g)
            1710-01-01 (365g)  1802-01-01 (84g)  1864-09-22 (47g)
            1865-06-17 (167g)  1866-05-24 (89g)  1876-02-19 (101g)
            ────────────────────────────────────────────────────
            birleşik 13 ayrı gün · denetimde +12 (biri zaten vardı)
```

### 🔴 VE BU YAMAYLA KAPANMAZ — yapısal
Açık günlerin hepsi **Orta Asya hanlık geçişleri**: Timur'un
Mâverâünnehir'i alması · Şeybânîlerin gelişi · Hokand'ın kuruluşu ·
Rusların Taşkent'i alması. **Bir Osmanlı kronolojisinde bunların maddesi
YOK ve olması da beklenmez.**

⇒ Hüküm: **`2s` tavanı, DÜNYA KAPSAMINA ÇIKAN HER PARTİYLE KALICI OLARAK
YÜKSELİR.** İki çıkış var ve ikisi de benim yetkimin dışında:
```
(a) kronoloji dünya olaylarını da kapsasın  → Boyut 7 / kronoloji oturumu
(b) `2s` ölçütü "yabancı kırılmanın Osmanlı maddesi olsun" beklemeyi
    bıraksın → denetim tasarımı
```
📌 Bu, koordinatörün `ek13`te bulduğu *"Nerçinsk 1689 ↔ Niş ve Vidin'in
kaybı"* vakasının **kök sebebi**: ölçüt yalnız tarih yakınlığına bakınca
Osmanlı maddesi bulup "MADDELİ" diyor; bulamayınca "AÇIK" diyor. **İkisi
de yanlış cevap** — doğru cevap *"bu kırılmanın maddesi bu kronolojide
olamaz"*.

## ③ ⚠️ KOORDİNATÖRE BİR ÇERÇEVE DÜZELTMESİ — Aral
Koordinatör `goller.js` eksiğini kapattıktan sonra şöyle yazdı:
> *"Sıradaki partin Mâverâünnehir — yani tam Aral bölgesi. Bu eksik bir
> parti sonra bulunsaydı, o partinin bütün Aral çevresi noktaları yanlış
> doğrulanmış olacaktı. Senin maskeyi yeniden kurma kararın, kendi bir
> sonraki partini kurtardı."*

**Ölçtüm — güzel bir hikâye ama doğru değil.** Mâverâünnehir Aral değil,
Zerefşan ve Fergana havzasıdır:
```
PARTİ 21'in 18 noktasının tarihî Aral poligonuna uzaklığı:
   en yakın  Buhara      624,8 km
   en uzak   Almatı    1.695,9 km
   tarihî göl içinde kalan: 0
canlı 1745 noktadan tarihî göl içinde kalan: 0
Aral'a gerçekten yakın olanlar ZATEN CANLI ve temiz:
   Küngrat 49,2 km · Aral kuzeyi 54,3 km · Köhne Ürgenç 125,7 km
```
⇒ `goller.js` eklemesi **yapısal olarak doğruydu ve gerekliydi**, ama bu
partiyi kurtarmadı — bu parti risk altında değildi.

📌 **Niçin düzeltiyorum:** *"ölçüm kendi partimi kurtardı"* hoş bir cümle
ve tam da bu yüzden tehlikeli — `ONCELIK.md K4`ün *"ölçmeden verilen sayı
üç tur demektir"* kuralı övgüye de işler. Gerçek fayda ileride: Aral
yatağına (Muynak, Aralsk, kuruyan yatağın dolgu noktaları) nokta koyacak
parti **gerçekten** risk altındaydı ve artık değil.


---
---

# PARTİ 22 — ORMAN-BOZKIR KUŞAĞI
### `data/yerlesimler_ek17.js` · 11 nokta · 6 Ağustos 2026

**Durum:** 🟢 HAZIR — yeni renk YOK, yeni künye YOK, bağlanmak için
hiçbir şey beklemiyor.

## ① 🔴 KAPSAM İTİRAZI — SEVK BENİM BAYAT LİSTEME DAYANIYORDU

Koordinatör *"Karadeniz kuzeyi bozkırı"*yı onayladı ve gerekçesi
**benim `PARTİ 1 §⑥` listemdi.** Ölçtüm ve **liste bayat çıktı — kendi
listem, üç gün önce yazdığım.**

```
                        PARTİ 1 (3 Ağustos)        BUGÜN (6 Ağustos)
bozkır proper 44-50°K   yarıçap 130-215 km         ort  81 km · en uzak 191 km
                        1° ızgarada ilk 25'in      ⇒ ARTIK EN AÇ BÖLGE DEĞİL
                        24'ü buradaydı
```
Arada `Zaporojye Seçi` · Don Kazak kümesi (`_ek6`) · `Sloboda bozkırı` ·
`Donets bozkırı` · `Camboyluk` · `Yediçkul` · `Kalmuk bozkırı` eklendi.
**Bozkır doldu.** 50 nokta, 28.461 km²/nokta.

📌 Ve bu `§1.5`in dersinin **dördüncü vakası** — ama bu sefer bayatlayan
belge `CLAUDE.md` değil **benim kendi ilerleme dosyam.** Ölçülmüş bir
liste bile üç günde eskiyor; **sevk geldiğinde önce ölçtüm, sonra
başladım.**

## ② AÇLIK BİR KUŞAK KUZEYE KAYMIŞ — ve orası hiç ölçülmemişti

```
ORMAN-BOZKIR  50-54°K / 29-50°D     kara 640.745 km²
   ort 162 km · EN UZAK 303 km      (bozkırda en uzak 191)
box(50-56°K / 28-52°D) TOPLAM NOKTA: 10
   Kazan · Moskova · Polotsk · Vitebsk · Smolensk · Tula ·
   Voronej · Saratov · Ural eteği · Kiev
```
🔴 **Tula (54,19°K) ile Voronej (51,67°K) arasında 280 km boyunca tek
nokta yok** — Litvanya-Moskova sınırının bütün tartışmalı kuşağı.

## ③ 🔴 VE ORADA RENK DE YANLIŞ — 184.611 km² KIRIM

1500-06-15'te 50-54°K kuşağının **%28,8'i `kirim`.** Sebep ölçüldü,
**veri hatası DEĞİL**, saf `§2` emilmesi:
```
Voronej  s:[… 1441-01-01→1585-01-01 kirim …]  → 137.821 km²
Harkov   s:[… 1441-01-01→1654-01-01 kirim …]  →  46.790 km²
en uzak hücre 53,5°K/42,5°D — Voronej'e 303 km
```
İki kayıt da **kendi başına doğru** (Yabani Ova gerçekten Kırım-Nogay akın
sahasıydı) ama peteği 300 km kuzeye taşıyor: Ryazan · Tambov · Penza
haritada Kırım Hanlığı.

⇒ Bu partinin `Ryazan · Tambov · Penza · Orel` kayıtları **Voronej'in
kaydına hiç dokunmadan** o taşmayı kesiyor. `CLAUDE.md §2`nin ders
kitabı vakası.

## ④ 🔴 `2s` TAHMİNİ — YENİ KURAL, İLK UYGULAMA: **+3**

Koordinatör: *"`s:` yazan her parti beklenen `2s` değişimini de önceden
yazar."* İki parti üst üste öngörmemiştim; bu sefer **yazmadan önce
ölçtüm.**

```
12 kırılma günü  →  3 maddeli  ·  9 açık  →  ama 9'un 6'sı ZATEN VAR GÜN
   maddeli : 1500-08-01 Vedroşa (8g) · 1552-10-02 Kazan (28g)
             1636-04-17 Tambov (16g)
   var gün : 1356 · 1362 · 1438 · 1441 · 1596 · 1663   ⇒ 2s ARTMAZ
   YENİ    : 1503-04-02 · 1618-12-11 · 1654-01-08      ⇒ 🔴 2s +3
```

### ⚠️ ÜÇÜNÜ ÇEKMEDİM — ve sebebi dürüstlük
Canlı veride 1-3 ay ötede kullanılabilir günler var (`1503-01-01` ·
`1619-01-01` · `1654-01-01`). Onlara çekseydim **`2s` +0** çıkardı.
**Çekmedim:** üçü de GÜNÜ BİLİNEN antlaşma (Moskova-Litvanya mütarekesi ·
Deulino · Pereyaslav). Bilinen bir günü sayaç uğruna `YYYY-01-01`e
indirmek `§4`ün *"gün bilinmiyorsa YYYY-01-01 yaz"* kuralını **tersine
çevirmek** olurdu — bilgiyi saklamak. **Sayaç üç artsın, tarih doğru kalsın.**

📌 `1440-01-01` farklı ve çekildi: o bir antlaşma günü değil, `nogay`
künyesinin başlangıç yılı. `1441-01-01` (Kırım'ın kuruluşu) zaten canlı
verinin Altın Orda parçalanması için kullandığı gün. Bilgi kaybı yok.

📌 Ve bu, `PARTİ 1`de kurduğum tasarım kısıtının ikinci uygulaması:
**dönem uçlarını mümkün olduğunca veride ZATEN VAR OLAN günlerden seç.**
Orada madde borcunu sıfırlamıştı, burada `2s`yi **10'dan 3'e** indirdi.

## ⑤ BEKLENEN DEĞİŞİM — tamamı, önceden
```
nokta               +11
yeni renk            0        yeni künye  0
Değişmez 1 tavanı   +0        ← 11/11 kayıt 1281-01-01'den kesintisiz
Değişmez 2 borcu     0        (`d:`/`v:` yok)
Değişmez 3 çelişki   0        (`m:` yazılmadı)
🔴 Değişmez 2s      +3        ← ölçüldü, gün gün yukarıda
```

## ⑥ KABUL ÖLÇÜTÜ
```
① ayrıştırma 11/11 ✓   ② alan kütüğü temiz ✓
③ renk altinorda·lehistan·rusya·kirim·nogay·kazan → 6/6 VAR ✓
④ ad çakışma 1745 canlı kayda karşı 11/11 benzersiz ✓
⑤ dönem sağlığı temiz ✓   ⑥ iç boşluk 0 ✓   ⑦ madde borcu 0 ✓
⑧ Değişmez 3 çelişki 0 ✓
+ maske MOTORUN ölçütüyle 11/11 ✓   + kutu 11/11 ✓
+ 3 km en yakın çift 71,53 km (Belgorod ↔ Harkov) ✓
```

### ⚠️ Kimlik ömrü aşımı VAR — ve repo sözleşmesi
Hayalet kontrolüm 13 aşım buldu; hiçbiri yeni değil:
```
lehistan  dizin 1569-07-01 → canlı 29 dönemin 22'si f'ten ERKEN
rusya     dizin 1547-01-16 → canlı 242 dönemin 16'sı erken, 211'i geç
```
Atlas `lehistan`ı Litvanya için 1569 öncesine, `rusya`yı Moskova için
1547 öncesine zaten kullanıyor (`Kiev` 1362 · `Smolensk` 1281 · `Tula`
1281). **Ayrılmadım** — ayrılsam bu on bir nokta, komşusu Kiev ve
Smolensk ile çelişen tek küme olurdu.
`kazan` · `nogay` · `altinorda` aşımı YOK.

## ⑦ İŞARETLİ TEK ÖDÜNÇ — RYAZAN
Ryazan 1521'e kadar **ayrı bir büyük knezlikti**; `ryazan` kimliği ne
dizinde ne renkte var ve **uydurulmadı.** Canlı `Tula` kaydı aynı sınıftan
bir knezliği düz `rusya 1281-1923` ile modelliyor, ondan alındı.
📌 Ödüncün bedeli ölçüldü ve **kazançtan küçük**: Ryazan'ın 1281-1521
arası yanlış rengi, Voronej'in bugün 300 km kuzeye taşıdığı `kirim`
yanlışının yanında küçük kalıyor. Kimlik gelirse tek satır.

## ⑧ KOPYALANMAYAN ZİNCİRLER
```
Putivl    Çernigov/Novgorod-Seversk zincirini TAŞIMIYOR — Deulino (1618)
          o ikisini Polonya'ya verdi ama Putivl Moskova'da KALDI.
          Kopyalasaydım 36 yıl yanlış devlette görünürdü.
Bryansk   1503 değil 1500-08-01 (Vedroşa) — ve o günün maddesi VAR.
Penza     ortası `kirim` DEĞİL `nogay` — Sura-Volga arası Nogay
          otlağıydı; Voronej zincirini kopyalamak iki yüzyıl yanlış olurdu.
Simbirsk  zinciri canlı `Kazan`dan birebir — aynı hanlık, aynı gün düştü.
```

## ⑨ AÇIK BIRAKILANLAR
```
Yelets · Kozlov · Voronej çevresi   Yabani Ova'nın iç kalesi; Tambov ve
                                    Belgorod ikisini de kesiyor, ayrı
                                    petek kazancı ölçülmedi
Samara (53,20/50,15)                kutunun doğu kenarına yakın, ayrı parti
Ryazan knezliği kimliği             `ryazan` — dizin + renk, RENK 2'ye
Voronej/Harkov `kirim` dönemleri    DOKUNULMADI. Kayıtlar doğru; kusur
                                    noktasızlıktı ve o kapandı.
```


---
---

# PARTİ 23 — ALTAY ve YUKARI OB
### `data/yerlesimler_ek18.js` · 10 nokta · 6 Ağustos 2026

**Durum:** 🟢 HAZIR — yeni renk YOK, yeni künye YOK, engel yok.

## ① 🔴 `2s` EVRENİ DÜZELTİLDİ — parti 22'nin dersi

`PARTİ 22`de **+3** dedim, **+5** çıktı. Koordinatör sebebi buldu:
```
ben         "bu gün canlı veride kırılma günü mü?"
denetle.py  degismez2(Y_cekirdek, O, ("s",))   ← YALNIZ `s:` + YALNIZ ÇEKİRDEK
```
Altı "zaten var" günümün ikisi (`1356-01-01` Bryansk · `1663-01-01` Penza)
canlıda vardı ama **`d:`/`v:`de ya da kuyruk dosyasında.**
⇒ **Doğru soruyu sormuştum, YANLIŞ EVRENDE ölçmüştüm.**

📌 Ve bu, günün ana dersinin **benim tarafımdaki hâli.** Alet için
*"denetim, motorun sorduğu soruyu değil kendi sorduğu soruyu ölçüyor"*
demiştim; burada aynısı bana oldu: **parti, denetimin sorduğu soruyu değil
kendi sorduğu soruyu ölçtü.** Aynı hata ailesinin yedinci hâli.

🟢 Düzeltme kalıcı: `scratchpad/arac2s.py` — evreni `KUYRUK_DOSYALARI`
hariç, yalnız `s:`. Çekirdek havuzu ölçüldü: **689 gün.**

## ② ÖLÇÜM — `ek13`in kendi açık bıraktığı yer, ve tahminimden büyük

`PARTİ 20`de *"kalan en uzak hücre 686 km ile Altay; bu partinin hedefi
değil"* yazmıştım. Bu o iş — ve rakam 686 değilmiş:
```
box(48-58°K / 75-95°D)   kara 1.473.752 km²   TOPLAM NOKTA: 3
   Tomsk · Krasnoyarsk · Kobdo — ÜÇÜ DE KUTUNUN KENARINDA
   ort 382 km · EN UZAK 761 km
```
🔴 Bir buçuk milyon km²'yi üç nokta paylaşıyor. **Kolıvan-Kuznetsk hattı**
— Rusya'nın Sibirya'daki en yoğun 18. yüzyıl kale zinciri — atlasta yok.

### İki ayrı kusur
```
1600  🔴 %59,9 SAHİPSİZ (beyaz)   Tomsk 1604'ten önce boş, komşusu yok
1800  🔴 %29,9 qing-hanedani      Kobdo'nun peteği 650 km kuzeye çıkıyor
1900     %29,9 qing-hanedani
```
⚠️ `§3.5.1` öbür uç: **Kobdo'nun kaydı doğru** (Altay'ın güneyi gerçekten
Qing'di; sınır 1864 Çuguçak protokolüne kadar tartışmalıydı). Kusur
DEĞERİNDE değil **MENZİLİNDE** — altı Rus kalesi orta dikmeyi İrtiş'e
indiriyor, Kobdo'nun kaydına **hiç dokunmadan.**

## ③ QING YAKASINA NOKTA KASTEN KONMADI — ve gerekçesi yeni
Sınırı iki uçlu yapmak `§3.5.1`in istediği şey ve cazipti. **Konmadı:**
Çin Altayı'nın 1912 sonrası kimliği `cin-cumhuriyeti` ve o **renksiz**
(44 renksiz kimliğin birincisi, 85 nokta).
⇒ Nokta koysaydım **düzeltirken yeni boyasız alan açardım.**
📌 Yeni kural adayı: **iki uçlu düzeltme, öbür ucun rengi yoksa TEK UÇLU
kalır.** Renksiz kimlik, `§3.5.1`in istisnasıdır.

## ④ ÜÇ TAHMİN — dosya başında, önceden
```
nokta              +10        yeni renk 0      yeni künye 0
Değişmez 2 borcu    0         Değişmez 3 çelişki 0
🔴 Değişmez 1 tavanı +10      ← 10/10 kayıt kasitli_bosluk + neden taşıyor
                                tavan 102 → 112
🔴 Değişmez 2s      +6        ← DOĞRU EVRENDE ölçüldü
     maddeli 3 : 1635 (0g) · 1718 (0g) · 1720 (0g)
     var gün 1 : 1716
     YENİ    6 : 1594 · 1618 · 1709 · 1722 · 1730 · 1736
```
⚠️ **Altısı da kısaltılamaz:** hepsi kale kuruluş YILI ve zaten
`YYYY-01-01` — `§4`ün en dürüst hâli. `PARTİ 22`de üç antlaşma gününü
sayaç için çekmemiştim; burada çekecek gün bile yok.
📌 Sayıyı düşürmenin tek yolu **nokta atmaktı** (`Zmeinogorsk` 1736 →
`2s` +5). Atmadım: Kolıvan-Voskresensk maden bölgesi Rusya'nın Altay'ı
tutma SEBEBİDİR. Sayacı memnun etmek için coğrafî gerekçeli bir noktayı
atmak, `PARTİ 22`de reddettiğim davranışın aynısı olurdu.

## ⑤ İKİ DESEN, İKİSİ DE CANLIDAN
```
A  Sibirya hattı (Tara · Omsk · Kainsk · Kuznetsk)
   kasitli_bosluk → rusya                    canlı `Tomsk` (`_ek9`) deseni
B  Yukarı İrtiş / Altay eteği (Biysk · Barnaul · Zmeinogorsk ·
   Pavlodar · Semipalatinsk · Ust-Kamenogorsk)
   kasitli_bosluk → cungar 1635 → rusya      canlı `Kobdo` deseni
```
⚠️ A kümesine `cungar` YAZILMADI: Baraba ve aşağı İrtiş Cungar'ın değil
Sibir Hanlığı'nın çevresiydi. İki deseni karıştırmak Cungar'ı 600 km
kuzeye taşırdı.

## ⑥ KABUL ÖLÇÜTÜ
```
① 10/10 ✓  ② alan kütüğü temiz ✓  ③ renk cungar·rusya → 2/2 VAR ✓
④ ad çakışma 1756 canlı kayda karşı 10/10 benzersiz ✓
⑤ dönem temiz ✓   ⑤b hayalet TEMİZ ✓ (aşım YOK)
⑥ iç boşluk 0 · bayraksız 0 ✓   ⑦ madde borcu 0 ✓   ⑧ çelişki 0 ✓
+ maske MOTORUN ölçütüyle 10/10 ✓  + kutu 10/10 ✓
+ 3 km en yakın çift 131,87 km (Biysk ↔ Barnaul) ✓
```

## ⑦ KAYNAK — TDV'YE BASMIYOR, işaretli
On kuruluş yılının hiçbiri TDV'de değil; `§4` Kuzey Asya için akademik
referansı yeterli sayıyor ama işaretlenmesini istiyor. Kayıt kayıt yazıldı.
**Hepsi YIL hassasiyetinde** (`YYYY-01-01`) — uydurulmuş tek gün yok.

## ⑧ AÇIK BIRAKILANLAR
```
Çin Altayı (Qing yakası)   `cin-cumhuriyeti` renksiz — renk gelince tek satır
Kolıvan · Ust-Kaman ötesi  Rus hattının batı ucu; `_ek10` (Tümen · Tobolsk)
                           bağlanınca yeniden ölçülmeli
Moğolistan yakası          Selenginsk sınırının ikinci ucu — hâlâ açık
Yelets · Kozlov            PARTİ 22'nin bıraktığı Yabani Ova iç kalesi
```


---
---

# PARTİ 24 — MOĞOLİSTAN: HALHA'NIN DOĞUSU ve KUZEYİ
### `data/yerlesimler_ek19.js` · 6 nokta · 6 Ağustos 2026

**Durum:** 🟡 HAZIR — renk/künye engeli YOK, ama **bir karar bekliyor:
çekirdek mi kuyruk mu** (aşağıda ③b, koordinatörün kararı).

## ① SEVKİN GEREKÇESİ ÖLÇÜLDÜ — VE ZATEN ÇÖZÜLMÜŞ
Sevk *"Selenginsk'in ikinci ucu"* idi; `PARTİ 20`de Kyahta hattının tek
uçlu kaldığını, hatanın 2,5°'den 0,8°'ye indiğini ama **sıfırlanmadığını**
yazmıştım. Ölçtüm:
```
50-52°K / 98-118°D · 0,5° ızgara · 1800'de `qing` hücre: 8
ve SEKİZİNİN SEKİZİ 98,25-99,75°D arasında = TUVA (Uliastay'ın peteği).
Tuva 1757-1911 GERÇEKTEN Qing'di ⇒ DOĞRU.
🟢 100°D'nin doğusunda, 50°K'nin kuzeyinde qing hücre: 0
```
⇒ **İkinci uca gerek kalmamış.** `PARTİ 20`de bıraktığım açık kalem
kapandı — ve kendi tahminim ("sıfırlanmıyor") yanlıştı.

## ② 🔴 AMA ÖLÇÜM AYNADAKİ HATAYI BULDU — ve 24.144 km²'si BENİM
```
1800-06-15 · 50°K'nin GÜNEYİNDE `rusya` boyanan Moğol toprağı
   Nerçinsk    147.298 km²   en uzak 46,5°K/115,5°D — 612 km
   Selenginsk   24.144 km²   49,5°K/104,5-106,5°D — 178-232 km
   ────────────────────────────────────────────────────────
   TOPLAM      171.442 km²   Halha'nın ortasında Rus rengi
```
🔴 `Selenginsk`i `PARTİ 20`de **ben** yazdım. Kyahta hattını kuzeyden
düzeltirken güneye 180-230 km taşmış. `§3.5.1`in aynen uyardığı şey:
*"tek uçtan bakan düzeltme hatayı taşır, silmez."*
**Kuralı yazdım, uygulamayı atladım.** Bu parti kendi taşmamı da kesiyor.

⚠️ `Nerçinsk`in kaydı **doğru**; kusur değerinde değil MENZİLİNDE —
`PARTİ 23`teki Kobdo vakasının aynadaki hâli (orada Qing kuzeye, burada
Rusya güneye).

## ③ ZİNCİR — VE YANLIŞ KOMŞUYA BAKMIŞIM
İlk taslakta zinciri `Karakurum`dan birebir aldım: `qing 1635-01-01`.
**Kendi hayalet kontrolüm altı kayıtta yakaladı** ve iki sebeple düzeltildi:
```
① HAYALET  `qing-hanedani` künyesi 1636-05-15'te başlıyor → 500 gün erken
② TARİH    1635/1636 ÇAHAR'ın (İç Moğolistan) teslimi. HALHA 1691'de
           Dolonnor'da tâbi oldu; bu altı nokta HEPSİ Halha.
           Canlı `Urga` kaydı 1691-05-30 yazıyor — DOĞRU komşu o.
🟢 Ölçüm de onu seçtirdi: 1691-05-30 kronolojide 24 gün ötede MADDELİ.
```
📌 `PARTİ 21`deki `cagatay`/`timurlu` ikileminin **tersi**: orada üç şıkkın
üçü kusurluydu ve canlı komşuya uymayı seçmiştim. Burada **kusursuz şık
vardı** ve o da bir canlı komşunun günüydü — yalnız yanlış komşuya
bakmışım. Doğru komşu Karakurum değil **Urga**.

### ⚠️ Hayalet SIFIRLANMADI, taraf değiştirdi — saklamıyorum
`1691` seçilince `kuzey-yuan` künyesinin bitişini (`t=1635-01-01`) **56 yıl
aşıyor.** Seçim gerekçesi:
```
· Halha 1691'e kadar gerçekten Cengizli Halha hanlarının elindeydi
· canlı `Urga` AYNISINI yapıyor (`kuzey-yuan 1639→1691-05-30`)
· künyedeki 1635 ÇAHAR'ın teslimi, Halha'nın değil
⇒ aşım benim kaydımın değil KÜNYENİN kusuru
```
📌 Koordinatöre dizin kalemi: **`kuzey-yuan` bitişi 1635 mi 1691 mi?**

## ③b 🔴 ÇEKİRDEK Mİ KUYRUK MU — karar koordinatörün
```
Karakurum · Urga · Uliastay · Kobdo · Kalgan → HEPSİ `yerlesimler_asya.js`
                                                yani KUYRUK_DOSYALARI'nda
Nerçinsk → `_ek9` · Selenginsk → `_ek13`      → çekirdek
```
⇒ **Çekirdeğe** bağlanırsa dört gün (`1368-09-14` Yuan'ın çöküşü ·
`1911-12-29` muhtariyet · `1919-11-22` Çin işgali · `1921-07-11`
bağımsızlık) çekirdek `s:` havuzunda YENİ sayılır → **`2s` +4.**
Oysa aynı dört gün `Karakurum`da ZATEN var — yalnız kuyruk kovasında.
⇒ **Kuyruğa** bağlanırsa `2s` +0, kuyruk sayacı +4.

📌 Okumam: bu dört gün **Moğolistan'ın kendi kronolojisi** ve
`KUYRUK_DOSYALARI` yorumunun tarifine birebir uyuyor. Ama `denetle.py`
koordinatörün dosyası — **iki sayıyı ölçtüm, kararı ona bırakıyorum.**

## ④ ÜÇ TAHMİN
```
nokta +6 · yeni renk 0 · yeni künye 0 · Değişmez 2 borcu 0 · Değişmez 3 0
🔴 Değişmez 1 tavanı +0   ← 6/6 kayıt 1281-01-01'den kesintisiz, 112'de kalmalı
🔴 Değişmez 2s       +4   ← ÇEKİRDEĞE bağlanırsa; kuyruğa bağlanırsa +0
```

## ⑤ `mogolistan` RENKSİZ — ama yeni boyasız alan AÇILMIYOR
Zincirin son üçlüsü `mogolistan → cin-cumhuriyeti → mogolistan`;
`mogolistan` BOYALAR'da yok. Buna rağmen yazıldı:
```
① Karakurum · Urga · Uliastay ZATEN aynı üçlüyü taşıyor — bölge 1912-1923
   arası HÂLİHAZIRDA boyasız. Bu parti var olanı yeniden dağıtıyor.
② Alternatif `rusya`yı 1923'e uzatmaktı: YANLIŞ ama boyalı.
   Bir atlasta yanlış renk, renksizlikten kötüdür.
```
⚠️ **`PARTİ 23`teki kararımdan farklı, ve fark bilinçli.** Orada Qing
yakasına nokta koymamıştım çünkü **yeni** boyasız alan açacaktım. Burada
açmıyorum. Kural aynı, sonuç farklı çünkü ölçüm farklı.

## ⑥ 🔴 VE `PARTİ 23`ÜN GEREKÇESİ BAYATLADI — kendi partim
`cin-cumhuriyeti` artık **RENKLİ** (ölçtüm, `BOYALAR`'da). `PARTİ 23`te
*"renksiz, o yüzden Qing yakasına nokta koymuyorum"* yazmıştım — RENK 2
arada eklemiş. ⇒ **Altay'ın Qing yakası artık açılabilir**, o kalem
yeniden değerlendirilmeli.
📌 Bugün üçüncü kez: bir gerekçe, yazıldığı gün içinde eskiyebiliyor.

## ⑦ KABUL ÖLÇÜTÜ
```
① 6/6 ✓  ② alan kütüğü temiz ✓  ③ renk: `mogolistan` hariç hepsi VAR
④ ad çakışma 1766 canlı kayda karşı 6/6 benzersiz ✓
⑤ dönem temiz ✓   ⑥ iç boşluk 0 ✓ ⇒ tavan +0   ⑦ madde borcu 0 ✓
⑧ çelişki 0 ✓   + maske 6/6 ✓   + kutu 6/6 ✓
+ 3 km en yakın çift 186,81 km (Bulgan ↔ Karakurum) ✓
⑤b hayalet: `kuzey-yuan` 56 yıl (bilinçli, ③'te gerekçeli)
```

## ⑧ AÇIK BIRAKILANLAR
```
Altay'ın Qing yakası    `cin-cumhuriyeti` artık renkli ⇒ YENİDEN AÇILDI
`mogolistan` rengi      RENK 2 kuyruğunda
`kuzey-yuan` künye günü 1635 mi 1691 mi — koordinatöre
Yelets · Kozlov         PARTİ 22'nin bıraktığı
Gobi'nin batısı         Uliastay + Karakurum + Dariganga üçgeni; ölçülmedi
```

---
---

# PARTİ 25 — ÇİN ALTAYI ve CUNGARYA
### `data/yerlesimler_ek20.js` · 4 nokta · 6 Ağustos 2026

**Durum:** 🟢 HAZIR — engel yok, `cin-cumhuriyeti` rengi RENK 2 tarafından
yazıldı ve doğrulandı.

## ① 🔴 BU PARTİ `PARTİ 23`ÜN AÇTIĞI HATAYI KAPATIYOR — ÜÇÜNCÜ KEZ
`PARTİ 23`te Altay'a on Rus kalesi koyup Kobdo'nun 650 km'lik kuzey
taşmasını kesmiştim. Ölçtüm: **hata yok olmadı, taraf değiştirdi.**
```
1800-06-15 · 42-49,5°K / 78-96°D · `rusya` boyanan ÇİN toprağı
   Ust-Kamenogorsk    99.500 km²   (161-345 km)
   Semipalatinsk      41.378 km²   (214-348 km)
   ────────────────────────────────────────────
   TOPLAM            140.878 km²   17 hücre · 47,5-48,5°K / 78-86,5°D
```
Tarbagatay · Zaysan · Çin Altayı 1755'ten beri Qing'di ve Rusya'ya **ancak
1864 Çuguçak protokolüyle** geçti ⇒ 140.878 km² **64 yıl erken** Rus.

🔴 **VE AYNI DESEN BUGÜN ÜÇÜNCÜ KEZ, ÜÇÜNDE DE TAŞAN NOKTA BENİM:**
```
PARTİ 20  Selenginsk         → güneye   24.144 km²   (PARTİ 24 kesti)
PARTİ 23  Ust-Kam.+Semipal.  → güneye  140.878 km²   (BU PARTİ kesiyor)
ve ikisinde de `§3.5.1`i YAZMIŞ, UYGULAMAYI ATLAMIŞIM.
```
📌 **Kendime kural:** bir sınır noktası eklerken, orta dikmenin ÖBÜR
tarafında da nokta olup olmadığı **aynı partide** ölçülür. Sonraki partiye
bırakmak, hatayı bir tur boyunca yayında tutmak demektir.

## ② KURALIN KOŞULU DÜŞTÜ — kural duruyor
`PARTİ 23`te Qing yakasına nokta koymamıştım: *"`cin-cumhuriyeti` renksiz,
düzeltirken yeni boyasız alan açardım."* Koordinatör kuralı kabul etti.
**Kural duruyor, koşulu kalktı** — RENK 2 rengi yazdı (ölçüldü).
⇒ Öbür uç açıldı ve bu dosya onu açıyor.

## ③ ZİNCİR — `Gulca`dan, ama İLİ İSTİSNASI ALINMADI
Omurga: `cagatay 1281→1347 · mogulistan →1634 · cungar →1755 ·
qing →1912-02-12 · cin-cumhuriyeti →1923`.
⚠️ **Gulca'nın `rusya 1871-07-04 → 1882-03-22` dönemi KOPYALANMADI:** o,
Rusya'nın **İli vadisi** işgalidir (Yakub Beg isyanı) ve Petersburg
antlaşmasıyla geri verildi. Tarbagatay · Zaysan · Çin Altayı o işgalin
içinde değildi — kopyalasaydım üç noktayı on bir yıl yanlış devlette
gösterirdim.

## ④ `2s` +1 — ve ölçütün ÜÇÜNCÜ SINIFINA CANLI ÖRNEK
Tek yeni gün **`1864-10-07`** (Çuguçak protokolü). En yakın kronoloji
maddesi:
```
1864-11-08  «Vilâyet Nizamnâmesi»   +32 gün
```
🔴 **İki gün daha yakın olsa "MADDELİ" sayılacaktı — ve yanlış olacaktı.**
Osmanlı vilâyet nizamnâmesiyle Rus-Qing sınır protokolünün ilgisi yok.
⇒ `2s` yeniden tasarımına canlı örnek: doğru cevap ne `MADDELİ` ne `AÇIK`,
**`KAPSAM DIŞI`.**
📌 Günü kaydırmadım. Eski takvim (`1864-09-25`) yazsaydım fark **+44 güne
çıkardı** — yani sayaç için bile işe yaramazdı; ama esas sebep o değil,
tarih doğru olduğu için durdu.

## ⑤ ZAYSAN — tek `rusya`lı kayıt, ve gerekçesi
Rus karakolu **1868**'de kuruldu ama toprak **1864-10-07**'de devrolundu.
Karakolun yılını yazsaydım dört yıllık Qing fazlası kalırdı — `PARTİ 20`de
Ayan · Blagoveşçensk · Selenginsk'te üç kez öğrendiğim ders: **kasabanın
kuruluşu ile toprağın idaresi ayrı sorulardır.**

## ⑥ KABUL ÖLÇÜTÜ
```
① 4/4 ✓  ② alan kütüğü temiz ✓  ③ renk 6/6 VAR ✓ (renksiz YOK)
④ ad çakışma 4/4 benzersiz ✓  ⑤ dönem temiz ✓
⑤b hayalet: yalnız repo geneli `rusya`>1917 sözleşmesi
⑥ iç boşluk 0 ✓ ⇒ tavan +0   ⑦ madde borcu 0 ✓   ⑧ çelişki 0 ✓
+ maske MOTORUN ölçütüyle 4/4 ✓   + kutu 4/4 ✓
+ 3 km en yakın çift 163,71 km (Çöçek ↔ Zaysan) ✓
```

## ⑦ BUGÜNÜN TOPLAMI — altı parti
```
_ek13  16  Amur · Ohotsk · Sahalin · Orta Sibirya      BAĞLI
_ek14   9  Mâverâünnehir                               BAĞLI
_ek15   7  Hokand Hanlığı                              BAĞLI
_ek16   2  Herat · Belh                    künye bekliyor (koordinatörde)
_ek17  11  Orman-bozkır (Litvanya-Moskova)             BAĞLI
_ek18  10  Altay ve Yukarı Ob                          BAĞLI
_ek19   6  Moğolistan (Halha)              kuyruğa alındı
_ek20   4  Çin Altayı ve Cungarya                      HAZIR
──────────────────────────────────────────────────────────
       65 nokta · 8 dosya
```

---
---

# ÖLÇÜM TURU — YELETS/KOZLOV ve GOBİ'NİN BATISI
### 6 Ağustos 2026 · **nokta EKLENMEDİ, iki bölge ölçüldü**

## ① 🔴 YELETS/KOZLOV ARTIK DÜŞÜK DEĞERLİ — `PARTİ 22` orayı doldurmuş
Sevk *"`PARTİ 22`nin kendi bıraktığı kalem"* diyordu. Ölçtüm:
```
YABANİ OVA İÇİ (49-56°K / 32-50°D)   kara 949.947 km²   nokta 21
   ort 100 km · en uzak 226 km
   (PARTİ 22 ÖNCESİ aynı kuşak: ort 162 km · en uzak 303 km)
```
🔴 **Yelets (52,6/38,5) ve Kozlov (52,9/40,5) çevresindeki hücreler artık
Tambov'a 25-108 km, Voronej'e 95-103 km.** İkisini eklemenin kazancı
ölçülebilir eşiğin altında — `PARTİ 22`nin on bir noktası o boşluğu
kapatmış.

📌 Ve `1500`de kalan `kirim` (169.677 km²) **artık hata değil, MODEL**:
Belgorod ve Tambov kendi kayıtlarında `kirim → kale yılı → rusya` taşıyor,
yani Yabani Ova'nın Kırım-Nogay akın sahası olduğu bilerek gösteriliyor.
Sınırı da doğru yerde: en uzak `kirim` hücresi artık 154 km'de, 303 değil.

### Kalan iki cep (ikisi de küçük)
```
Don-Volga arası  49-54°K/40-50°D   385.597 km² · 4 nokta · ort 122 km
                                    en uzak 226 km (50,5°K/42,5°D)
Volga yukarısı   52,5°K/48,5-49,5°D                   200-215 km
```

## ② 🔴 GOBİ'NİN BATISI — **ÖLÇÜLDÜ, ve en büyük kalan delik BU**
```
40-47°K / 92-108°D    kara 1.006.148 km²   TOPLAM NOKTA: 2
   503.074 km²/nokta · ort 255 km · EN UZAK 474 km
```
Kıyaslama: Don-Volga cebi 96.399 km²/nokta. **Gobi beş kat seyrek.**

### Ve renk de yanlış
```
1500-06-15   ming-hanedani %51,2   ← Ming, Çin Seddi'nin KUZEYİNDE
             — (sahipsiz)   %24,5
             kuzey-yuan     %24,4
1700-06-15   qing %71,5 · — %18,5 · kuzey-yuan %7,5
1850-06-15   qing %100,0
```
🔴 Ming'i oraya taşıyan noktalar: `Zhangye (Ganzhou)` · `Yinchuan` ·
`Ciyayuguan` · `Baotou` — **hepsi seddin içinde**, 412-474 km güneyde.
Ming hiçbir zaman Gobi'nin kuzeyine çıkmadı; bu `§2` emilmesinin
ders kitabı vakası ve **yarım milyon km²'yi** etkiliyor.

## ③ ⚠️ AMA GOBİ İKİYE BÖLÜNÜYOR — `mogolistan` engeli
```
DIŞ MOĞOLİSTAN yakası (Gobi-Altay · Bayanhongor · Ömnögovi)
   zincir `_ek19`unkiyle aynı ⇒ `mogolistan` RENKSİZ ⇒ 🔴 BEKLER
İÇ MOĞOLİSTAN / ALAŞA yakası (Ejin · Trans-Altay Gobi)
   1912 sonrası `cin-cumhuriyeti` ⇒ RENKLİ ⇒ 🟢 BUGÜN YAZILABİLİR
```
⇒ Parti ikiye bölünmeli; `_ek19` zaten `mogolistan` bekliyor ve Dış
Moğolistan Gobi'si **onunla birlikte** gitmeli (koordinatörün `ek19`
kararının aynı gerekçesi: *"Moğolistan iki kovaya bölünmesin"*).

## ④ HÜKÜM — sevki ölçüyle değiştirmeyi ÖNERİYORUM, kendim değiştirmiyorum
```
sevk        Yelets/Kozlov  → ölçüldü, kazanç eşik altı
öneri       Gobi'nin batısı, İÇ MOĞOLİSTAN yarısı — bugün yazılabilir
            (Dış Moğolistan yarısı `mogolistan` ile `_ek19`e eklenir)
alternatif  Don-Volga cebi — küçük ama tamamen engelsiz
```
📌 Bu, bugün **dördüncü** sevk itirazı ve dördü de aynı sebepten:
**ölçülmüş bir liste üç günde eskiyor.** Ama bu sefer nokta yazmadan
önce durdum — çünkü `Yelets`i yazsaydım eşik altı bir kazanç için
`2s` borcu doğuracaktım.

---
---

# PARTİ 26 — GOBİ'NİN BATISI (Dış + İç Moğolistan)
### `data/yerlesimler_ek21.js` · 6 nokta · 6 Ağustos 2026

**Durum:** 🟢 HAZIR — engel yok. ⚠️ **Kuyruğa bağlanmalı** (④).

## ① 🟢 BÖLMEYE GEREK KALMADI — `mogolistan` GELMİŞ
Koordinatör *"A: İç Moğolistan yarısını bugün yaz, Dış yarım `mogolistan`
gelince `_ek19`e eklenir"* dedi. Yazmadan önce ölçtüm:
```
mogolistan   künye 1911-12-29 → 1923-10-29   ·   renk VAR ✓
```
⇒ RENK 2 arada yazmış. **Gobi tek partide kapanıyor**, ve `_ek19` de artık
bağlanabilir — `mogolistan` onun da tek engeliydi.
📌 Bugün **dördüncü** kez bir gerekçe/engel ölçüm anında değişti. Alışkanlık
oturdu: **yazmadan önce ölç, sevkten sonra bile.**

## ② ÖLÇÜLEN DELİK ve RENK HATASI
```
40-47°K / 92-108°D   1.006.148 km²   TOPLAM NOKTA: 2
   503.074 km²/nokta · ort 255 km · EN UZAK 474 km
1500-06-15  ming-hanedani %51,2 · sahipsiz %24,5 · kuzey-yuan %24,4
```
Ming'i taşıyan dört nokta (`Zhangye` · `Yinchuan` · `Ciyayuguan` ·
`Baotou`) **seddin içinde**, 412-474 km güneyde. Dördü de doğru;
**kusur noktasızlıkta.**

## ③ İKİ ZİNCİR — 55 yıllık fark KASITLI
```
A DIŞ MOĞOLİSTAN   … kuzey-yuan → qing 1691-05-30 → mogolistan …
B İÇ MOĞOLİSTAN    … kuzey-yuan → qing 1636-05-15 → cin-cumhuriyeti
```
İç Moğolistan 1636'da (Çahar'ın teslimi), Dış Moğolistan 1691'de
(Dolonnor) tâbi oldu. Tek güne indirseydim biri 55 yıl yanlış olurdu.
🟢 **Ve hayalet aşımı SIFIR** — koordinatörün `kuzey-yuan` düzeltmesi
(1635 → 1691-05-30) sayesinde iki gün de künyelerin içinde kaldı.
⚠️ B kümesine `mogolistan` YAZILMADI: İç Moğolistan 1911'de bağımsızlık
ilân etmedi. A'nın kuyruğunu kopyalasaydım üç noktayı 12 yıl yanlış
devlette gösterirdim.

## ④ KUYRUK — ölçüldü
```
Zhangye · Yinchuan · Baotou · Ciyayuguan · Karakurum · Hâmi
     → ALTISI DA `yerlesimler_asya.js` = KUYRUK
```
Bu partinin **hiçbir komşusu çekirdekte değil.** `ek19` ölçütü burada daha
net. ⇒ Kuyruğa: `2s` **+0**. Çekirdeğe: **+5**.

## ⑤ 🟢 ÖBÜR UÇ — kuralın İLK ÖNLEYİCİ uygulaması
Bugün üç kez kendi taşmamı buldum ve kural çıkardım (*"orta dikmenin öbür
tarafı aynı partide ölçülür"*). Burada **tasarımı belirledi:**
```
yalnız Dış yazsam → İç'e taşardı
yalnız İç yazsam  → Dış'a taşardı
⇒ altı nokta sınırın İKİ TARAFINA BİRDEN kondu; orta dikmeler gerçek
  sınırın üstüne düşüyor ⇒ ÖBÜR UÇ TAŞMASI YOK
```
📌 İlk üç vakada kural **onarıcıydı**; burada **önleyici.**

## ⑥ DÖRT TAHMİN
```
nokta +6 · yeni renk 0 · yeni künye 0 · madde borcu 0 · Değişmez 3 0
🔴 Değişmez 1 tavanı +0   (6/6 kayıt 1281'den kesintisiz)
🔴 Değişmez 2s       +0   kuyruğa · +5 çekirdeğe
🔴 ÖBÜR UÇ           YOK  (⑤)
```

## ⑦ KABUL ÖLÇÜTÜ
```
① 6/6 ✓ ② alan kütüğü temiz ✓ ③ renk 5/5 VAR ✓ ④ ad çakışma 6/6 ✓
⑤ dönem temiz ✓  ⑤b hayalet TEMİZ — AŞIM SIFIR ✓
⑥ iç boşluk 0 ✓ ⇒ tavan +0   ⑦ madde borcu 0 ✓
+ maske 6/6 ✓  + kutu 6/6 ✓  + 3 km 157,16 km (Ömnögovi ↔ Alaşa kuzeyi) ✓
```
⚠️ Üretim koşarken yazıldı; koordinatör *"anlık görüntü alındı, girdi
SERBEST"* dedi. `arac/girdi.py`ye dokunulmadı.
