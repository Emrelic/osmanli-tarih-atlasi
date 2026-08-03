# PETEK / NOKTA — ilerleme ve teslimat

**Oturum:** PETEK/NOKTA · 3 Ağustos 2026 · Opus
**Görev tanımı:** `oturumlar/PETEK-NOKTA-GOREV.md`
**Yazdığı dosyalar:** `data/yerlesimler_kirim.js` (yeni) · bu dosya
**Durum:** 🟢 HAZIR — Oturum 0 alabilir.
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
