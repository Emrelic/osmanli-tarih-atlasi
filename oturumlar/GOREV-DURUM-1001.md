# GÖREV DURUMU — 1 Ekim 2026 (akşam)

🔴 **NİÇİN BU DOSYA VAR.** Emre sordu: *"diğer bilgisayarlardaki görevleri
takip ediyor musun, rapor veriyorlar mı?"* Cevap evet ama takibi **konuşmada**
tutuyordum. Bu oturum sıkışırsa kimde ne olduğu kaybolur — tam `D241`in
konusu: *commitlenmemiş bir kayıt bir sonraki turda yalan söyler.*
⇒ Bundan sonra görev dağıtımı BURAYA yazılır.

## 🔴 ÖLÇÜLEN KUSUR — iki kanal var, biri uyandırıyor biri uyandırmıyor

```
UZAK makineler (UMIT · KASA · LAB · HAVVA)  → SendMessage → ekrana DÜŞER   ✅
BU makinedeki oturumlar (ODAK-KAPAT …)      → tahta.json  → ELLE OKUNUR    ⚠️
```

Vaka: `ODAK-KAPAT` 16:45 · 16:46 · 16:55'te üç teslim yazdı; koordinatör
18:xx'te gördü. 17:50'deki **kova sorusu iki saat cevapsız** kaldı.
Kanal çalışıyordu, **okuyan** çalışmıyordu — ve okumasını söyleyen de
koordinatörün kendisiydi.
⇒ KURAL: tahta HER TURDA yoklanır. Ölçüm komutu:
`py -X utf8` ile `oturumlar/tahta.json`dan `kime in ("YILDIRIM BAYEZIT","HERKES")`
süzülür; `tahta.py oku` KULLANILMAZ (hepsini okundu damgalar).

---

## 1 · KADRO VE TESLİMLER (ölçülmüş)

### UMIT — koşu makinesi · 5 teslim
| iş | sonuç |
|---|---|
| RAM yuvası | 2 yuva, İKİSİ DE DOLU · 2×8 DDR4-3200 SODIMM Crucial · tavan 64 GB |
| 5 kütüphane | numpy 2.2.6 · shapely 2.1.2 · rasterio 1.5.1 · scipy 1.18.1 · **contourpy 1.3.3** |
| önbellek | 1.013,3 MiB · links=1 · SAĞLAM · `MOTOR_ONBELLEK_DIZIN` boş |
| 18 yama `--check` | uygulanabilir 8 · zaten uygulanmış 6 · gerçek çakışma 2 · bozuk 3 |
| `MOTOR-BOZUK-KIYI` | sıfır bağlam hunk'ı teşhisi → yeniden üretildi |
| `.gitattributes` sınavı | ikinci yönde GEÇTİ + "checkout tazelemiyor" sınırını buldu |
| güç + RTCWAKE | AIO · I225-V · **S5 magic packet Enabled** · **RTCWAKE=1** |

**AÇIK:** yok. Tam inşa koşusu emri bekliyor.

### KASA — denetleme makinesi · 9 teslim
| iş | sonuç |
|---|---|
| disk | 96,2 kullanılan / 16,6 boş (C:) |
| gölge kopya | **0** — `vssadmin` iki sorguda "No items found" |
| appx + Projects | 10 Claude sürümü 5,57 GB · Projects 7,25 GB |
| disk donanım | 🔴 **223,6 GB SSD · D: bölümünün 108 GB'ı BOŞ** |
| önbellek yönlendirme | `MOTOR_ONBELLEK_DIZIN=D:\atlas-onbellek` · D: eczane verisi taşıyor |
| **künyesiz kimlik** | 🔴 1131 dönem / 23 kimlik → **gerçekten eksik künye 0** |
| doğrulama koşusu | sayılar yeni HEAD'de aynı |
| güç | Desktop · S3 YOK (yalnız S1) · **`PBUTTONACTION=3` = KAPAT** |
| yıl-temsilî 164>151 | 20 yeni / 7 düşen · **kod değişimi 0, artış %100 veriden** |

**AÇIK:** `sirbistan` 10 dönem (1402 Nemanjić→Despotluk) — TARİH hükmü, Emre'nin.
**AÇIK:** RTCWAKE ölçülmedi.

### LAB — araştırma makinesi (EMRE) · 6 teslim
| iş | sonuç |
|---|---|
| 8 odak kalemi | UYGULANDI, yayında (`ac61a8da`) · odaksız 212→204 |
| 5 dayanaksız `yer` | 4'ü uygulandı (`9d5468cb`) · #34 kendi yanlış alarmı |
| `once1281_anadolu` 71/71 | **VAR 0** · atlasta YOK 19 · yersiz 47 · bulunamadı 4 · BEKLET 1 |
| nokta dosyası | koordinat + ömür + sahiplik, Pleiades/UNESCO kaynaklı |
| Dvin · Şeddâdî · Eyyûbî | Dvin penceresi **1236** · Şeddâdî = kol ayrımı · `eyyubi-meyyafarikin` taslağı |
| AIO güç | Ethernet VAR ama `wake_armed` listesinde **DEĞİL** |

**AÇIK:** dalları (`lab-odak-1003`) **push edilmedi** — izin Emre'nin, LAB
haklı olarak benim relayed onayımı reddetti.
**AÇIK:** RTCWAKE ölçülmedi.

### ODAK-KAPAT — araştırma, BU makine · 7 tahta mesajı
| iş | sonuç |
|---|---|
| `cok_1dunya_A` 97/97 | A 18 + A-İMZA 7 + A? 2 · B 36 · C 11 · D 23 · sınav 97→79/70 |
| `sinir_avrupa_bati` 56/56 | A 6 · A⏳ 13 · B 17 · C 8 · D 12 · sınav 56→50/37 |
| **kova sorusu** | 🔴 imza yeri `yer_id` olursa kamera KONUDAN UZAĞA gidiyor |

**ŞİMDİ:** `cok_guney_amerika.js` 31 odaksız (EVREN İÇİ).

### HAVVA — eczane ana makinesi · 2 teslim
Kimlik doğrulandı · UMIT'le **ölçülen her maddede birebir aynı** (BIOS
TGUT1111 dahil) · RAM 1×8 + **1 boş yuva** ⇒ 16 GB siparişi tutarlı, 24 GB
olacak · **RTCWAKE=1** ⇒ ayar değişikliği gerekmiyor.

**AÇIK:** RAM takıldıktan sonra klon + node + 5 kütüphane.

### GLM — dış YZ işçisi
Şartname `oturumlar/GLM-ACILIS-1001.md` (`467be4d1`). Görev GLM-D (ek okuma
görünürlük kapısı) + GLM-E (419 madde gerçekten ekranda mı). **Teslim YOK.**

---

## 2 · EMRE'NİN KARARINI BEKLEYENLER

```
① NOKTA ACMA — iki isci bagimsiz olarak ayni duvara carpti
   LAB         Ani · Dvin · Harran · Meyyafarikin · Ahlat · Ergani · Semkir
               ⇒ 11 kalem (mukerrer birlesince 10)
   ODAK-KAPAT  Verdun · Gorizia · Versay · Compiegne · Charleroi (gercek sehir)
               Marne/Somme/Sampanya NEHIR-BOLGE, nokta cozmez
   BEDEL: tam insa kosusu (~2-4 sa, data/ kilitlenir) + Degismez 1 geregi
          her noktanin her tarihte sahibi olmali
② sirbistan 10 donem — 1402 ardilligi, TARIH hukmu
③ 1836 Hail — veri 1836, notun kendisi "TDV 1835 der" ⇒ kaynakla CELISIYOR
④ HLS 403 — 13 A⏳ kalemi insan tarayicisi istiyor (Cloudflare ATLATILMADI)
⑤ RTCWAKE=2 olan makinede ayar degisikligi (EMRELIC; UMIT/HAVVA zaten 1)
⑥ KASA'ya guc dugmesi rolesi (~₺300-600) — kasa acilmasi gerek
⑦ HAVVA uyutulacak mi — Eczasist ana makinesi, ISLETME karari
⑧ ag hizi: UMIT ve HAVVA'nin 2,5 Gbps karti 100 Mbps'te bagli
⑨ LAB dallarinin push izni
```

## 3 · KOORDİNATÖRÜN AÇIK KALEMLERİ

```
① app.js maddeOdakKutusu → D_SINIRLAR_* dali (kamera HATTA bakacak)
   olculdu: app.js'te `sinir_id` 0 kez geciyor · maddeOdakKutusu:12572
   🔴 YAYINLANAN DAVRANISI DEGISTIRIR ⇒ tarayicida gozle dogrulanacak
② ODAK-KAPAT'in A kalemlerinin uygulanmasi (1dunya_A 25 · avrupa_bati 6)
③ eyyubi-meyyafarikin kunyesi (LAB taslagi + emsal tur/bolge okunacak)
④ Tel Ifrin + Harran 1104 mukerrerleri — SIRA onemli, once taraflar olculur
⑤ 2 gercek yama cakismasi yeniden uretilecek · 3 bozuk yama siniflandirilacak
⑥ 4 kunyeden-devralma + 8 beyansiz yil-temsili kalem
```

## 4 · BU GECE KAPANANLAR

```
degismez4 kimlik korlugu   olculemedi 1131 → kunyesiz 0   (iki aylik acik)
yil-temsili gerekcesi      mekanizma TERS anlatiliyordu, duzeltildi
agy/ ignore                33 tarayici kimlik deposu acik depoya girmiyor
.diff CRLF tuzagi          *.diff -text (desen yola bagli DEGIL)
6 uygulanmis yama          arsive alindi (ileri=1 · geri=0, iki makinede)
2s tavani                  191 → 189
dersler                    D252 · D253 · D241 VAKA 2 · D250 VAKA 3
LAB'in 4 `yer` hukmu       uygulandi, yer_id 100→101
```

🔴 **Ve koordinatörün bu geceki hataları** (hepsi işçiler tarafından ölçülüp
çürütüldü): hiberfil · Windows.old · `git gc` · gölge kopya · "disk küçük" ·
yıl-temsilî gerekçesi · `MOTOR-BOZUK-KIYI` commitli sanmak · HAVVA'yı güç
kapsamından çıkarmak · UMIT'e "8 GB" demek · LAB'in rapor tablosunu dosya
yerine ölçüm sanmak · HÜKÜM 1'i fazla genel yazmak · tahtayı geç okumak.

---

# 🆕 EK — UZAKTAN AÇMA PROJESİ (1 Ekim 2026, akşam)

Emre'nin ihtiyacı, kendi cümlesiyle: *"19:00'da personellerin kapattığı
bilgisayarları 21:00'de evden açabilmeliyim. Sonra 24:00'te kapatabilmeliyim.
Pazar sabahı 11:00'de evden açabilmeliyim."*

## 🔴 TASARIM HATAM VE DÜZELTİLMESİ
Gece boyunca **"uyut / uyandır"** planı kurdum. Gerekçem: tek bir Windows
ayarını (Hızlı Başlatma) değiştirmekten kaçınmak.
⇒ **Yanlış şeyi eniyiledim.** Emre'nin senaryosunda makineler 19:00'da
  personel tarafından TAM KAPATILIYOR; uyandırma uyuyan makine için geçerli,
  kapalı makine için değil. Emre sordu, plan çöptü.
📌 Emre'nin sezgisi de ölçümle doğruydu: kapatmak uyumaktan **daha iyi** —
  S3 RAM'i tazelemeye devam eder (~1-5 W), bellek sızıntıları ve birikmeler
  SİLİNMEZ. HAVVA'daki İlaçTarif birikmesi bunun canlı kanıtı.
⇒ Plan artık: **TAM KAPANMA + uzaktan TAM AÇMA.**

## HIZLI BAŞLATMA — niçin engel
```
gercek kapanma (S5)       cekirdek bosaltilir, RAM silinir, 20-40 sn acilis
Hizli Baslatma ile "kapat" cekirdek+suruculer hiberfil.sys'e YAZILIR,
                          S4 benzeri duruma inilir, 8-12 sn acilis
```
⇒ Tam S5'e inilmediği için ağ kartı çoğu makinede **WoL yapamaz.** Ve
sürücü/bellek birikmesi de silinmez.
✅ **Emre onay verdi.** Yöntem: `HiberbootEnabled 1 → 0` (kayıt değeri).
🔴 `powercfg /h off` KULLANILMAZ — o hazırda bekletmeyi de siler.

## ÖLÇÜLEN AĞ BİLGİSİ
```
UMIT   84-47-09-0F-70-85   192.168.1.120   DHCP   Intel I225-V
HAVVA  84-47-09-0F-6E-51   192.168.1.171   DHCP   Intel I225-V
LAB    B8-AE-ED-90-21-09   192.168.1.147   DHCP   Realtek PCIe GbE
hepsi 192.168.1.0/24 · gecit .1 · ucu de 100 Mbps (kartlar 2,5G/1G)
```
⇒ Üçü AYNI ağda ⇒ **tek gönderici hepsini uyandırır.**
⚠️ Üçü de DHCP: WoL'u etkilemez (MAC ile çalışır) ama **açıldıktan sonra
  bağlanmayı** etkiler ⇒ yönlendiricide rezervasyon gerekir.
⚠️ Üçünde de `IsInRole(Administrator) = False` ⇒ her ayar değişikliği UAC
  ister, Emre ekranda olmalı. (HAVVA'da kullanıcı Administrators grubunda,
  yani ayrı hesap gerekmiyor — yalnız onay.)

## MAKİNE MAKİNE DURUM
| makine | kart WoL'a hazır mı | kalan adım |
|---|---|---|
| **UMIT** | ✅ `S5'ten Magic Packet: Enabled` + `wake_armed`'da | Hızlı Başlatma · BIOS |
| **HAVVA** | ✅ aynısı | Hızlı Başlatma · BIOS |
| **LAB** | 🔴 **kart WoL'u HİÇ SUNMUYOR** | **sürücü** · kart ayarı · Hızlı Başlatma · BIOS |
| KASA | Realtek `wake_armed`'da | BIOS (S3 yok, yalnız S1) |

### 🔴 LAB'in engeli — sürücü
```
DriverProvider  Microsoft (genel)
rt640x64.sys    9.1.410.2015  (10.04.2015)
gelismis ozellik  yalniz 7 tane · "Wake on Magic Packet" satiri HIC YOK
wake_programmable  kart bu listede de YOK
```
⇒ WoL kapalı değil, **sunulmuyor**. Realtek'in kendi sürücüsü kurulmalı.
🔴 Koordinatör sürücü İNDİRMEZ/KURMAZ (dışarıdan dosya indirip çalıştırmak).
  Emre kurar, kaynak Realtek'in kendi sitesi ya da anakart üreticisi olmalı.
❓ **AÇIK SORU: LAB nerede?** Eczanede değilse ve Emre'nin yanındaysa uzaktan
  açmaya gerek YOK ve bütün sürücü işi DÜŞER. Emre'ye soruldu.

## 🔴 UMIT'İN YAKALADIĞI BOŞLUK — yayın paketi LAN'dan gider
Magic packet bir **yayın** paketidir (`192.168.1.255`), yalnız o ağın
içinden çalışır. "Telefondan gönder" dedim ama **telefonun o anda eczane
Wi-Fi'ında olması gerektiğini** söylememiştim.
⇒ İki yol: (a) eczanede kalan telefon + ona uzaktan tetikleme
  (b) Tailscale ile eve o ağa dahil olmak.
📌 Tailscale **bu laptopta ve LAB'de KURULU** (ölçüldü); UMIT, HAVVA, KASA'da yok.
⇒ Röle, sadece BIOS'ta WoL yoksa gerekir. **Henüz alınmadı, doğrusu bu.**

## SINAV SIRASI — ve bir güvenlik kuralı
🔴 **İlk deneme UZAKTAN YAPILMAZ:**
```
YANLIS  ayari degistir → eve git → 21:00'de dene → calismazsa makineler
        sabaha kadar ULASILAMAZ (eczane Botanik'siz kalir)
DOGRU   ayari degistir → MAKINENIN BASINDA kapat → paket gonder → gor
        calismazsa dugmeye bas
```
Sıra **UMIT'ten** başlar: kartı hazır, 2 adım var, en az bilinmeyen.
(İlk önerim LAB'di; LAB ölçtü ve çürüttü — o makine 4 adım gerektiriyor,
en kolayı değil EN ZORU. İşlemsel riske bakıp teknik kolaylığı atlamışım.)

---

# 🆕 EK — HAVVA RAM/CPU DÖKÜMÜ (ölçülmüş)

```
Toplam 7,75 GB · Bos 0,82 → 1,17 GB
TAAHHUT 14,12 GB · bos sanal 0,76 GB     ← ASIL BASKI GOSTERGESI
pagefile 5888 → 6523 MB (Windows kendi buyuttu)
```

| kalem | ölçüm | durum |
|---|---|---|
| **Photos ×4** | 754 MB → 143 MB | ✅ **~611 MB açıldı**, boş RAM +%43 |
| **İlaçTarif** | 4 kopya, 9225 sn CPU | Emre tek örnek kilidi ekleyecek |
| Botanik (9 süreç) | ~840 MB | eczanenin asıl işi |
| WhatsApp (webview) | ~615 MB | Emre'nin kararı |
| Claude (12 süreç) | 723 MB | tek Desktop + tek Code, MÜKERRER YOK |

🔴 **Koordinatörün iki yanlış iddiası, HAVVA çürüttü:**
① *"chrome ~628 MB muhtemelen BİZ"* → kökü **explorer**, 10:22'de açılmış ⇒
  kullanıcının tarayıcısı.
② *"bizim aletlerimiz ~1,4 GB"* → **~0,7 GB** ve azaltılamaz (Desktop'ı
  kapatmak makineye erişimi keser).
③ *"msedgewebview2 Botanik'in olabilir"* → **WhatsApp masaüstü**; Botanik'in
  webview'i YOK.
📌 Ben süreç ADINA bakıp sahip tahmin ettim; HAVVA `ParentProcessId` ve
  `CommandLine` okudu. **Ad sahiplik söylemez.**

## 🔴 VE ÜÇÜNCÜ BİR YANLIŞ ÇIKARIM — geri alındı
*"Bir şey İlaçTarif'i kendiliğinden yeniden başlatıyor, tek örnek kilidi
CPU yakmasını durdurmaz"* dedim. HAVVA ölçtü: zamanlanmış görev **boş**,
servis ebeveyni **yok**, tek kopyanın ebeveyni **explorer** (elle açılmış).
🔴 18:58'de açılan süreç, **Emre'nin tam o sırada yaptığı temizlikti** —
gözlemcinin eylemini sistemin davranışı sandım. Bir hipotez + tek bir
ilişkili olay = mekanizma DEĞİLDİR.
⇒ Emre'nin planı (tek örnek kilidi) çoğalma için DOĞRU ve YETERLİ.

## AÇIK KALAN GERÇEK SORU — iki kusur sınıfı
```
A) cogaltma     → tek ornek kilidi COZER
B) ic dongu     → kilit COZMEZ, kod duzeltmesi gerekir
```
Taban ölçümü alındı: `PID 12716 · baslangic 19:00:38 · CPU_sn 39,1 ·
olcum 19:02:38` (120 sn'de 39,1 sn ≈ bir çekirdeğin %33'ü).
⚠️ Bu tek ölçüm **açılış maliyetini** (Python import, veri yükleme) boşta
tüketimden AYIRAMAZ — HAVVA'nın uyarısı. İkinci ölçüm bir sonraki iş
mesajında alınacak; fark cevabı verecek.
📌 Ölçüt: bir saat sonra `CPU_sn` 300'ün üstündeyse boşta %8+ çekirdek ⇒
  B sınıfı kusur vardır.
🔴 İşçiye "30 dakika bekle" DENMEDİ (`§7.1` BEKLEME kuralı). Taban alındı,
  ikinci ölçüm başka bir iş vesilesiyle yapılacak ⇒ bekleme maliyeti sıfır.

## Defender
`DisableRealtimeMonitoring: False` · `ExclusionPath` **ölçülemedi**
(yönetici ister). HAVVA zorlamadı, koordinatör başka yoldan İSTEMEDİ —
antivirüs ayarı bir güvenlik ayarıdır.

---

# 🆕 EMRE'NİN TANIMLAMASI GEREKEN ÜÇ ŞEY
```
Medicine (ALTERNET)   C:\Program Files\ALTERNET\Medicine · 23 MB · 2061 sn CPU
                      bu program NE?
Chrome Remote Desktop remoting_host · 4549 sn CPU · 13 GUNDUR acik
                      kasitli mi, kalinti mi?
BotanikMedula x3      ayni yol, farkli saatler, birinin argumani farkli
                      recete basina pencere mi aciyor (tasarim) yoksa KAZA mi?
                      Botanik'i bilen soyler.
```
