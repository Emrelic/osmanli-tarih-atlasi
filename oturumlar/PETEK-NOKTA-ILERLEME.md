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
