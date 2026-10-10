# ÇALIŞMA TİPİ B — Emre'nin 10 Ekim 2026 kararı

**Otorite:** Emre, 10 Ekim 2026 ~13:00. **Yürürlük:** derhal, BÜTÜN oturumlar
ve BEŞ makine. **Yazan:** YILDIRIM BAYEZIT (koordinatör).

> *"B tipi çalışalım ama rötuşları hayata geçirelim."*

---

## §0 NİÇİN — ölçülen israf

```
koordinatörün bağlamı      396.511 token (%40) · Messages 292.032
bir tahta mesajı           ~1.500 token
⇒ koordinatörün BİR TURU  ≈ 264 tahta mesajı
haftalık limit             %75 · 2,5 günde · kalan 4,5 güne %25
```
Emre'nin teşhisi: *"tur üstüne tur, mesaj üstüne mesaj çok token gidiyor…
bu limitler işe dönüşmedi."* Ölçüm onu doğruladı: israf **mesajlarda değil,
mesajı okuyan ağır oturumda.**

🔴 Ve prensip (Emre'nin kendi sırası):
```
① doğruluktan TAVİZ YOK
② aynı doğrulukta tasarruflu yol varsa O SEÇİLİR
③ hız için tasarruftan taviz verilebilir — ama YALNIZ tokenler
   perşembe 12:00'ye kadar bitmeyecekse
⇒ HEDEF: %100 doğrulukta, EN FAZLA iş, EN AZ zamanda, EN AZ tokene
```
📌 Tasarruf edilen token **önümüzdeki haftaya DEVRETMEZ** ⇒ limitin yarısını
harcamadan bırakmak bir kazanç DEĞİL, bir KAYIPTIR.

---

## §1 ÜÇ TİP — adları Emre koydu

| tip | ne | durum |
|---|---|---|
| **A** | bugüne kadarki hâl: her teslim tam metin olarak koordinatörün bağlamına, her teslime anında tam hüküm | 🔴 TERK EDİLDİ |
| **B** | bütün haberleşme TAHTAYA · 30 dakikada bir TOPLU okuma · koordinatör İŞ YAPMAZ, dağıtır | 🟢 **YÜRÜRLÜKTE** |
| **C** | her iş için tek kullanımlık oturum, iş bitince oturum BIRAKILIR | ⏸️ sonraki aşama |

---

## §2 RÖTUŞ 1 — TESLİM MESAJLA GELMEZ, GİT'TE DURUR

🔴 **Zaten yazılıydı ve yalnız BİR YÖNDE uygulanıyordu.** `HAZIR-KITA §3.1`:
> *"ŞARTNAME MESAJDA DEĞİL, GİT'TE — git İÇERİĞİ taşır, mesaj UYANDIRIR."*

O kural **koordinatör→işçi** yönü için yazılmıştı. Pahalı yön **işçi→koordinatör**
çıktı: bu gece 15 teslim ~3.000 token olarak TAM geldi ve hiçbiri seçilerek
okunmadı.

```
TESLİM BİÇİMİ — ÜÇ SATIR, fazlası YOK
  ① ne ölçtüm      tek cümle + SAYI + BİRİM
  ② ne istiyorum   tek cümle
  ③ commit sha + dosya yolu
```
Ayrıntı **git'te** durur; koordinatör GEREKİRSE açar. Ölçülen kazanç: teslim
başına ~3.000 → ~300 token (KASA ilk mesajda uyguladı: 80 ve 60 token).

## §3 RÖTUŞ 2 — HÜKÜM BİR KEZ YAZILIR

Bu gece aynı içeriği **hem mesaj hem commit** olarak yazdım. ⇒ Hüküm artık
GİT'E yazılır; mesaj **tek satır + yol**. Gecede ~20.000 token.

## §4 RÖTUŞ 3 — TOPLU HÜKÜM, OLAY OLAY DEĞİL

🔴 Bu da ZATEN YAZILIYDI (`§7.2 ⑥`): *"koordinatör tahtayı olay olay değil,
30 dakikada bir TEK özet satırla okur."* **Bütün gece ihlal ettim** — sekiz
teslime anında ve tam hüküm yazdım.
```
okuma penceresi : 30 DAKİKA
işçiler          30 dk gecikme VARSAYAR ve beklerken İŞ YAPAR
ACİL/DURDURUCU   istisna, ve DAYANAK ister (tahta.py dayanaksızı REDDEDER)
```
⇒ Koordinatör turu −%60.

## §5 RÖTUŞ 4 — OKUMA DA SEÇİCİ OLMALI

⚠️ **Bu rötuş bugün ÖLÇÜLDÜ ve ötekiler kadar önemli.** `tahta.py oku --son 3`
bana üç mesaj değil **binlerce tokenlik eski gövdeler** getirdi — günün en
pahalı tek turu.
```
Kanalın ucuz olması YETMEZ: OKUMA seçici olmalı.
  --son N  bir filtre DEĞİLDİR
  gereken  --kime <AD> + tarih aralığı + OKUNMAMIŞ süzgeci + gövde KIRPMA
```
⇒ `tahta.py`ye eklenecek kalem (`§8`).

## §6 RÖTUŞ 5 — KOORDİNATÖR İŞ YAPMAZ

Emre: *"koordinatör iş yapmasın. Hep iş versin, planlama yapsın, iş dağıtsın."*

```
KOORDİNATÖRÜN          ÖNCELİK · SIRA · KAPSAM · RİSK · kaynak paylaşımı ·
                       bir işin YAPILIP YAPILMAYACAĞI · DOSYA TAHSİSİ
İŞÇİNİN                ALAN ADI · ŞEMA ANLAMI · KOD DAVRANIŞI · DOSYA
                       İÇERİĞİ · SAYILAR — bunlar bir DOSYADA yaşar
```

🔴 **VE BİR GERİLİM VAR, ÇÖZÜMÜYLE BİRLİKTE YAZIYORUM:** `§7` *"`main`in TEK
YAZICISI koordinatördür"* diyor. Diffi uygulamak + `denetle` ÖNCE/SONRA
koşturmak **İŞTİR** ve bugün onu ben yaptım (6 iniş). Çözüm rolü kaldırmak
değil **üçe bölmek:**
```
① İŞÇİ HAZIRLAR   diffi uygular · ÖNCE/SONRA ölçer · kendi DALINA commitler
                  ve PUSH EDER (kendi dalı, main DEĞİL)
② LAB DOĞRULAR    bağımsız ağaçta aynı ölçümü tekrarlar — rapor ÖLÇÜLMEDEN
                  kabul edilmez (bu gece bu kural ~19 hatayı yakaladı)
③ KOORDİNATÖR     dalı `main`e alır. Tek komut, ölçüm YOK.
   BİRLEŞTİRİR
```
📌 Üç ucuz adım, bir pahalı adımın yerine. Ve ölçüm disiplini **kaybolmuyor,
sahibi değişiyor** — doğruluktan taviz yok (`§0 ①`).

---

## §7 🔴 TAHTA İKİ YÖNLÜ DEĞİL — ÖLÇÜLDÜ (10 Ekim, 13:00)

Emre: *"tahtanın iki yönlü kullanılabilir durumda olduğunu kontrol edelim."*
Ölçüldü ve **cevap HAYIR:**

```
YAZMA   ✅ çalışıyor — her makine KENDİ DALININ upstream'ine push ediyor
           (`tahta.py:558`: "push hedefi dalın upstream'idir, origin/main DEĞİL")
OKUMA   🔴 ÇALIŞMIYOR — `oku` yalnız YEREL `tahta.json`ı açıyor.
           Dal taraması YOK: for_each_ref · ls-remote · --all → 0 eşleşme
```
`oturumlar/tahta.json` son dokunuş tarihleri:
```
main           2026-10-10 12:15   ← bugün (EMRELIC)
makine/kasa    2026-10-09 23:26   ← dün
makine/umit    2026-10-08 22:03   ← 2 gün
makine/lab     2026-10-06 17:45   ← 4 gün
makine/havva   2026-10-05 21:08   ← 5 gün
```
⇒ **Dört makinenin tahtası DÖRT AYRI TAHTA**, üçü 2-5 gün bayat. Tahta bozuk
değil **PARÇALI** — ve uzak makineler dala geçtikten sonra onu kullanmayı
bırakmış. Bütün gece `send_message` kullanmamızın sebebi bu.

### §7.1 ÇARE — ÇOK DALLI OKUMA (yazma yolu DEĞİŞMEZ)
```
① `tahta.py oku` ÖNCE fetch eder: makine/* dallarının HEPSİ
② her dalın `oturumlar/tahta.json`ını okur
③ mesajları KİMLİKLE birleştirir, zaman sırasına dizer
④ yazma yolu AYNEN kalır: her makine kendi dalına yazar
```
Niçin bu, "tek paylaşılan tahta dalı" değil:
- eşzamanlı push çatışması YOK (her makine yalnız kendi dosyasını yazar)
- izin sorunu YOK (`main`e push edemeyen makine de katılır — UMIT)
- bayat dal kendini ele verir (son dokunuş tarihi görünür)

🔴 **VE BİR TASARIM ŞARTI, atlanırsa çatışma üretir:** `tahta.py` numarayı
YEREL `tahta.json`dan sırayla veriyor. Dört dal bağımsız numara verirse
**M-5908 iki kere** yazılır. ⇒ Numara MAKİNE ÖNEKLİ olmalı:
`M-EMRELIC-5908` · `M-KASA-0041` gibi. Mevcut numaralar korunur, yeni
yazımlar önekli olur.

### §7.2 O İNENE KADAR — GEÇİŞ KURALI
```
AYNI MAKİNEDE      tahta ZORUNLU (bugün çalışıyor)
MAKİNELER ARASI    `send_message`, AMA ÜÇ SATIR (§2) + git'te içerik
                   ⇒ "acil durum istisnası" bugün KURALIN KENDİSİ,
                     çünkü tahta o yönde ÇALIŞMIYOR
```
⚠️ Emre'nin *"doğrudan mesajlaşma acil durumlar hariç kullanılmasın"*
emri **§7.1 indikten sonra** tam yürürlüğe girer. Bugün makineler arası tek
çalışan kanal o; yasaklamak haberleşmeyi keser.

---

## §8 OTOMATİK COMPACT — koordinatörün cevabı: **HAYIR, YANLIŞ ALET**

Emre: *"Bir mesele bitirildiği zaman hemen Compact atsın sistem. Otomatik
Compact sistemi sence mantıklı mı?"*

**Sezgi doğru, alet yarım.** Üç ölçülmüş sebep:
```
① BU GECE COMPACT OLDUM. Bağlamım şu an yine 396.511 token.
   ⇒ compact ~2 saat kazandırdı, SIFIRLAMADI.
② COMPACT BİR ÖZET BIRAKIR, VE ÖZET BÜYÜR. Her compact bir sonrakinin
   tabanını yükseltir ⇒ yavaşlatma, reset DEĞİL.
③ KAYIPLI VE DENETİMSİZ: neyin kalacağını ben seçmiyorum. Bu geceki
   özet, sonra yeniden türetmek zorunda kaldığım ayrıntıları düşürdü.
```
🔴 **VE TETİKLENEMEZ:** *"bir mesele bitti"* bir OLAY değil bir **HÜKÜMDÜR.**
Onu yalnız oturumun kendisi bilir ⇒ "otomatik" olamaz, ancak **disiplinli**
olur.

### DOĞRU ALET — ve bu gece KANITLANDI
```
MESELE BİTTİ  ⇒  DEVİR DOSYASINI GİT'E YAZ  ⇒  OTURUMU BIRAK
```
Bu gece devir dosyaları durumu taşıdı: `INIS-KOSU22.md` · `SABAH-1010.md` ·
`A-SERHLI-1010.md` · `LAB-INIS-AB-1010.csv`. **Bunları okuyan taze bir
oturum durumu ~20.000 tokenle alır** — 396.511 yerine. **On beş kat.**
⇒ Yani Emre'nin **C tipi**si, compact'ın yapmaya çalıştığı şeyi gerçekten
yapıyor. Compact onun yarım hâli.

### COMPACT'IN MEŞRU YERİ — tek
Devam etmek **ZORUNDA** olan bir oturum (uçuş ortasındaki koordinatör gibi)
ve bağlam ağırsa ⇒ compact, hiç yapmamaktan iyidir. **Varsayılan değil,
son çare.**

---

## §9 UYGULAMA SIRASI
```
🟢 ŞİMDİ, bedava (davranış)   §2 · §3 · §4 · §6
🟡 BİR İŞÇİ TURU              §5 (tahta oku seçiciliği)
                              §7.1 (çok dallı okuma + makine önekli numara)
⏸️ SONRA                      C tipine geçiş (devir dosyası biçimi önce)
```
📌 `CLAUDE.md` budaması (27.444 → 12.191 token, `84ec7833`) bu kararın ilk
ve en büyük ödemesiydi; `§0`ın hedefine doğrudan hizmet etti.
