# DURUM — 27 Ağustos 2026 · ORHANGAZİ · compact öncesi devir

> 🔴 Emre: *"Context %99'da, önemli şeyleri bir yerlere yaz, compact
> basayım."* Bu dosya o yüzden var. **Sohbette kalan hiçbir şey yok** —
> aşağıdakilerin hepsi diskte ve commit'li; bu dosya onların HARİTASI.

---

## 0. 🔴 ŞU AN NE OLACAK — sıra bağlayıcı

Emre'nin sözü: *"Paketteki işleri sırayla yap bitir, **bir sonraki koşuya
yetişsin**, sonra koşu yayın yapacağız."*

```
① VERİ yazımları   data/*.js         ← KOŞUDAN ÖNCE BİTMELİ
② MOTOR üç kalem   uret_petek.py     ← KOŞUDAN ÖNCE BİTMELİ · DARBOĞAZ
③ KOŞU             ~4 saat           koordinatör başlatır
④ YAYIN            denetim → kapı → push → tarayıcıda GÖZLE doğrulama
```
🔴 ① ve ② bitmeden ③ başlamaz. ③ başlayınca ikisi de **kilitlenir.**

---

## 1. YAYIN DURUMU

```
r3556 CANLI  ·  commit bfa5609  ·  koşu 13:23→17:25 (242,5 dk) TEMİZ
```
Bugün iki yayın yapıldı: **r3535** (gece) ve **r3556** (akşam).

**r3556'nın taşıdığı:** `TABI` kademesi — dolgu kapısı artık `v:`
noktalardan gelen puanı **tâbi** yazıyor, doğrudan değil.
```
1800-06-15   doğrudan −475.231 · tâbi +492.583 · TOPLAM +17.352 (%0,38)
1700 değişim YOK (Karamanlı öncesi) · 1900 değişim YOK (1835 sonrası)
```
⇒ Öngörü **koşudan önce yazılmıştı ve tuttu**: alan kaybolmadı, yer değiştirdi.

---

## 2. 🔴 SIRADAKİ İŞ — `oturumlar/MOTOR-UC-KALEM.md`

Emre onayladı, şartname yazıldı, `MOTOR ÜÇ KALEM` oturumu yazıyor:
```
① TAVAN_KM = {1:400, 2:400, 3:200, 4:100, 0:280}
   ölçüldü: 1243 noktanın ~8'i etkilenir
   k0 GEÇİCİ olarak 280 — içinde Viyana · Venedik · Kiev var
② B1/B2/B3   iç adacık · enklav birleştirme (≤800 km KARASAL, arası boş)
              koridor kırpma (d > w ⇒ doldur, dipten ağıza)
③ PUAN_ESIK  Desert poligonu içinde 4 → 8
```
🔴 **Üçü bağımsız değil**, ters yönlere çekiyor: ① boşluk açar, ② doldurur,
③ çölde doldurmayı zorlaştırır. Öngörü **birlikte** yazılacak.

**En kritik öngörü kalemi:** Osmanlı doğrudan + tâbi **TOPLAMI** ne olur.
`TABI` kademesi tam bu sınavla geçti; bu üçü de vermeli. Vermezse yayın durur.

---

## 3. ÇÖL/BOZKIR MESELESİ — yarısı bitti

```
✅ "olmayan yerde KOYU KIRMIZI"   düzeldi, r3556'da yayında
❌ "olmaması gereken yerde BOYA"  üç kalem düzeltecek
```
🔴 **Ve bir olgu: ÇÖL TAVANI İŞLEVSİZ.** `COL_TAVAN_KM=300` ama
`k0=280 · k3=280 · k4=140` hepsi altında ⇒ 2356 noktanın 2283'ünde
**yapısal olarak hiçbir şey kesemiyor.** Motorun kendi yorumu
(`uret_petek.py:789`) bunu yazıyor. Sahra çemberlerini çizen **A1**.
⚠️ ① uygulanınca (tavanlar düşünce) bu **daha da kötüleşir** — ③ o yüzden şart.

---

## 4. PAKET DURUMU

```
602 madde · 304 KAPALI · 0 OKUNMAMIŞ · 284 YARIM · 14 EMRE'DE
284'ün cinsi:  ARAYÜZ 32 · KRONOLOJİ 68 · VERİ 91 · MOTOR 69 · BELİRSİZ 24
```
⚠️ Bu sayılar **kaba** (anahtar kelime taraması). Bugün dört kez çürüdü:
`MOTOR 69→58` · `KRONOLOJİ 68→8` · `ARAYÜZ 32→20` · `k0 1363→45`.
**Devralan: bu tabloyu taban sayma, kendi evrenini kur.**

---

## 5. AKTİF OTURUMLAR — altısı, hepsi bekçili

| oturum | dosyası | durum |
|---|---|---|
| **MOTOR ÜÇ KALEM** | `arac/uret_petek.py` | 🔴 DARBOĞAZ — koşu bunu bekliyor |
| **KADEME K0** | `yer_yama_kademe.js` + `2.js` | ✅ **BİTTİ** — 38 + 1091 = 1129 · k0 KALMADI |
| **VERİ AÇIK** | `data/yer_yama_acik.js` | 91 madde |
| **ARAYÜZ** | `js/app.js` · `css/style.css` | 7 kalem yazdı |
| **KRONOLOJİ EK8** | `data/olaylar_ek8.js` | 8 madde yazdı |
| **PAKET 0035** | — | boşta |

🔴 **Dosya sahipliği kesişmiyor.** `js/app.js`in tek sahibi ARAYÜZ.

---

## 6. 🔴 BUGÜNÜN KUSURLARI — devralan bilsin

**① `olaylar_ek8.js` 8 madde kaybetti — ŞARTNAME HATASI, BENİM.**
Şartnameye *"data/olaylar_ek8.js (YENİ)"* yazdım; dosya **15 Ağustos'tan
beri vardı**, index.html yüklüyordu, 8 madde taşıyordu. İşçi tam dediğimi
yaptı ve **yeniden yazdı** ⇒ `Değişmez 2` 0 açıktan **3 açığa** çıktı.
🟢 Yayın kapısı yakaladı, durdurdum, 8+7 birleştirdim (15 madde), dosyanın
başına *"BU DOSYAYA YAZAN: EKLE, YENİDEN YAZMA"* uyarısı koydum.
📌 **Bir dosyayı "yeni" diye tarif etmek de bir İDDİADIR ve ölçülmeden yazılmaz.**

**② Oturum adlandırma mekanizması ÇALIŞMIYOR.**
Skill *"görevlendirme mesajının ilk satırına adı yaz, sistem alır"* diyor.
**Altı görevlendirmede de yazdım, hiçbiri işlemedi.** Çare: `set_session_title`
ile AÇIK çağrı — sonucu geri bildiriyor (`Renamed … (was …)`).
Ders yazıldı: `ClaudEmre/yasalar/gelen/2026-08-27-ana-belgedeki-mekanizma-…`

**③ Dört sayım kaba taramaydı ve dördü de çürüdü** (yukarıda §4).

**④ `EGE LATİN KRONOLOJİ` iki oturumda aynı addı** — 22 Ağustos'tan beri.
1 / 2 diye ayrıldı.

---

## 7. EMRE'DE BEKLEYEN

`BEKLEYENLER.md` · rozet **17** · `data/bekleyenler.js` üretilmiş.
```
14 karar   en pahalısı: Fransız Devrimi / 8. boyut açılsın mı
23 cevapsız sohbet   beşi 24 Ağustos'tan 🔴 OKUNMAMIŞ
```
🟢 Bugün kapanan: panel düğmesi → **GİDECEĞİ DURUM** (`0030/H-0006`).
🟢 k0 kararı: *"k0 bırakma, Osmanlı'ya öncelik ver, sırayla bitir."*

---

## 8. KAYITLI BORÇLAR

```
altlik.js          16 Ağustos'tan bayat · r3410·r3535·r3556'da da bayattı
                   ⇒ GERİLEME DEĞİL. Yayın kapısı bu yüzden çıkış 1 veriyor.
yetim 33/183       `yer_yama_*` ailesi — TASARIM GEREĞİ tarayıcıya yüklenmez
9 yakın-ama-değmeyen renk çifti   eskiden beri
körfez dosyası     `yerlesimler_ek_korfez.js` bağlanacak (+iki tavan)
kafkas dosyası     `yerlesimler_kafkas_duzeltme.js` YANLIŞ TÜRDE —
                   adı `yerlesimler_`, içeriği `yer_yama_`. girdi.py
                   yükleme anında ValueError atar. Yeniden adlandırılacak.
```

---

## 9. ARAÇLAR — scratchpad'de, kaybolur; işe yarayanlar

Bunlar `denetim/`e taşınmadı ve compact'ta kaybolur. Yeniden yazılabilir:
```
yayin_zinciri.py      uret_devirler → denetle → renk_olc, HER KAPIDA DURUR
                      🔴 push YAPMAZ — çıkış kodu kapı değil
hukum_birlestir.py    HUKUM-*.json → CEVAP.json · üzerine YAZMAZ, çakışmayı BASAR
bayat_uygula.py       ACIK → KAPALI tek yönde · onceki_hukum kaydeder
bekci_orhan.py        koşu bekçisi · iki tur aynı boyut şartı · 9 beep
tabi_sinav.py         eski/yeni donemler.js karşılaştırıp alan kaybını ölçer
```
📌 **`tabi_sinav.py` deseni en değerlisi**: bir motor değişikliğinden sonra
*"alan kayboldu mu, yer mi değiştirdi"* sorusunu cevaplıyor. Bir sonraki
koşuda ③ için aynısı gerekecek.

---

## 9b. 🔴 YENİ İŞ — KADEME YAMASI UYGULANACAK (M-1355, 27 Ağu gece)

`KADEME K0` bitirdi ve **doğru davrandı**: iki dosyanın da başında
*"BU DOSYA VERİ DEĞİL ÖNERİDİR. Motor bunu OKUMAZ."* yazıyor.
```
data/yer_yama_kademe.js    38 kayıt   Osmanlı olmuş k0'lar  (45'in 38'i;
                                      7'si tur:"bolge" ⇒ kapsam dışı)
data/yer_yama_kademe2.js  1091 kayıt  yabancı k0'lar        ← YENİ
kasitli_bosluk noktaları   DOKUNULMADI — bilerek
```
⚠️ **Uygulama KOORDİNATÖRÜN işi ve KOŞUDAN ÖNCE bitmeli.** Ölçüldü:
`girdi.py` · `index.html` · hiçbir `arac/*.py` bu iki dosyayı okumuyor
⇒ uygulanmazsa 1129 kayıt koşuya **hiç girmez** ve k0 durmaya devam eder.
📌 Yerleşik yama düzeni farklı: `data/kademe_<hash>.js` → `window.KADEME_YAMA`
(`denetle_yayin.py` onu tanıyor). Uygulama ya o biçime çevirir, ya doğrudan
`yerlesimler*.js`e işler. **Hangisi olduğu ölçülecek** — `CLAUDE.md §7`nin
*"ayrı dosya vermek ayrı ad alanı vermek değildir"* tuzağı tam burada.

🟢 **VE BU, ŞARTNAMEDEKİ BİR SATIRI DÜŞÜRÜR:** `MOTOR-UC-KALEM.md §1`
`k0`ı 280'de tutuyordu, gerekçesi *"k0'da Viyana · Venedik · Kiev var"*dı
ve şartnamenin kendisi *"KADEME K0 bitince bu satır kendiliğinden
gereksizleşir"* diyordu. **Bitti.** ⇒ Yama uygulanınca `TAVAN_KM`den
`0:` satırı kalkabilir; ama **önce yama, sonra tavan** — sırası bağlayıcı.

---

## 10. DEVRALAN İÇİN — ilk üç iş

```
① tahta bekçisini kur:  py arac/tahta_bekci.py --kim "KOORDINATOR" --ara 60
② MOTOR ÜÇ KALEM'e sor: hazır mı? Koşu onu bekliyor.
③ VERİ yazımları bitince KOŞUYU BAŞLAT, bekçiyi kur, sonra YAYIN.
```
⚠️ Koşu başlatmadan önce **tahtaya "girdi kilitli" yaz**; bitince
**"dosya senin"** de. Bu, beş kez yaşanmış bir kayıp yüzünden kural.
