# ORTAASYA-0902 — Bozkır ve Doğu Türkistan nokta yoğunlaştırma

## ⓪ KİMLİK — HADDİN

```
SEN         : İŞÇİ oturum · nokta araştırma (Oturum 4 cinsi)
DEĞİLSİN    : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN       : 1.MURAT HÜDAVENDİGAR (koordinatör)
ALTIN       : kimse
YASAKLARIN  : iş dağıtmak · başkasının dosyasına yazmak · `data/yerlesimler.js`e
              dokunmak · petek üretimi başlatmak · commit (KENDİ `oturumlar/`
              dosyan hariç, ve o da pathspec'li)
```

---

## ① NİÇİN VARSIN — ve ÖNCÜLÜMÜN BİRİ ÇÜRÜDÜ, ONU DA YAZIYORUM

🔴 **Koordinatör olarak Emre'ye *"Orta Asya 38 nokta"* dedim. YANLIŞTI —
kutu sınırı hükmü belirlemişti.** Aynı bölge daha geniş kutuyla **192**
çıktı. İki sayı da doğru olamaz ⇒ alt bölgelere ayırıp yeniden ölçtüm:

```
ALT BÖLGE                                nokta   M km²   nokta/Mkm²
Harezm + Karakum (Hîve-Merv)                30    0,70      42,9   🟡 idare eder
Afganistan + Horasan                        32    1,00      32,0   🟡 idare eder
Mâverâünnehir (Buhara-Semerkant-Fergana)    22    1,00      22,0   🟡 sınırda
─────────────────────────────────────────────────────────────────
Doğu Türkistan (Kaşgar-Turfan-Hoten)        15    1,60       9,4   🔴 SENİN
Kazak bozkırı (orta + batı)                 20    2,20       9,1   🔴 SENİN
Yedisu / Semireçye (Almatı-Çimkent)          4    0,40      10,0   🔴 SENİN
```
📌 Ders `CLAUDE.md §11`de yazılı: ***ölçüm doğru, evren dar.*** Sana bu
şartnamede yazılı **her sayı yeniden ölçüldü** — devraldığım hiçbir rakamı
doğrulamadan aktarmadım. Sen de aynısını yap: **bu sayıları da ölç**,
tutmuyorsa BEKLETMEDEN bildir.

🟢 **VE İKİNCİ ÖNCÜL DE ÖLÇÜLDÜ:** `orta-asya` bölgesinde **14 künyenin
14'ünün** veride `s:` dönemi var — **öksüz künye YOK.** (`sibirya-bozkir`da
tek istisna: `kasim` = Kasım Hanlığı, hiç kullanılmamış.) ⇒ İşin *"eksik
devlet bul"* değil, var olan künyelerin toprağını temsil edecek **nokta**.

---

## ② İŞİN — ÜÇ ALT BÖLGE, sırayla

```
① YEDİSU / SEMİREÇYE      4 → hedef ~18     🔴 EN ÖNCE
   Bugün TOPLAM DÖRT nokta var: Gulca · Almatı · Türkistan (Yesi) · Çimkent.
   Karahanlı-Çağatay-Moğolistan hattının kalbi, ve 0,4 M km²yi dört nokta
   temsil ediyor.
   Aday: Balasagun · Barsgan · Karakol (Prjevalsk) · Tokmak · Vernıy çevresi ·
   Kopal · Kuldja hattı · Issık Göl çevresi · Talas vadisi · Sayram*
   🔴 *Taraz ve Sayram BAŞKASINDA — aşağıya bak.

② KAZAK BOZKIRI          20 → hedef ~38
   Kazak Hanlığı (Küçük/Orta/Büyük cüz) ve Rus hattı kaleleri.
   Aday: Turgay · Irgiz · Akmola (Akmolinsk) · Karkaralinsk · Kokçetav ·
   Petropavlovsk · Uralsk (Yaik) · Orsk · Troitsk · Ayagöz · Sarısu hattı.
   ⚠️ `Kazak bozkırı (Turgay/Sarısu/İşim)` diye ÜÇ dolgu noktası ZATEN var
   (`_sibirya.js`, `_ek9.js`) — 3 km sınavını koştur, üstlerine yazma.

③ DOĞU TÜRKİSTAN         15 → hedef ~28
   Aday: Aksu · Kuça* · Karaşar · Korla · Yarkent* · Hoten* · Barköl ·
   Hami (Kumul) · Turfan* · Cungarya hattı*
   🔴 *Kuça · Yarkent · Hoten · Turfan · Cungarya havzası ZATEN VAR
   (`_asya.js`, `_ek20.js`). Ölç, mükerrer yazma.
```

### 🔴🔴 KUTU ÇAKIŞMASI — SEVKTEN ÖNCE ÖLÇÜLDÜ, SENİ BAĞLAR

`oturumlar/NOKTA-KUTU-DEFTERI.md` bugün **iki oturumu** "Orta Asya" diye
kaydetmiş. Üçüncü kolu açmadan önce ikisinin **gerçekte nerede** çalıştığını
ölçtüm:

```
🔜 yerlesimler_ok107.js   BAĞLANMAMIŞ, 2 nokta, ve İKİSİ DE SENİN EN BOŞ
                          BÖLGENDE:  Taraz (Evliya-Ata) 42,9·71,4
                                     Sayram (İsficâb)   42,3·69,8
   OPUS HAZIR KITA 107 · durum: ok102 ile Hicaz mükerreri çözülüyor
🟡 PAKET-0033             defterde "Orta Asya" yazıyor ama hiçbir p0033
                          dosyasında bu kutuda nokta YOK ⇒ ya yazılmamış
                          ya başka kutuda. ÖLÇÜLMEDİ.
```

**⇒ SENİN KUTUN OYULMUŞ HÂLİYLE:**
```
ORTAASYA-0902 · 33–56K / 46–96D
   EKSİ   42,0–43,5K / 68,0–72,5D   ← ok107'nin Taraz-Sayram cebi
```
🔴 **İLK İŞLERİNDEN BİRİ:** `OPUS HAZIR KITA 107`ye **yatay** yaz (bu
serbest, `CLAUDE.md §7.1③` — şartı tahtadan geçmesi) ve sor:
*"Yedisu'da Taraz-Sayram dışında yazacağın var mı? Ben Balasagun-Tokmak-
Issık Göl hattına giriyorum."* **Cevabını almadan o cebe yazma.**
📌 Sebep: `el-Ulâ` bugün **üç ayrı çift** olarak çıktı ve biri
`girdi.yukle`da **ValueError** atıp motoru hiç başlatmayacaktı.

### 🔴 EMRE'NİN BAĞLAYICI HÜKMÜ
> **"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."**

⇒ Hedef sayılar **tavan değil yön**. 18 yerine 11 yazıp *"kalan 7 için
kaynak susuyor"* demek **başarıdır**.

### VE BOŞLUĞUN CİNSİNİ YAZ — `CLAUDE.md §11`
```
kaynak AÇIKÇA konuşuyor  → neden:"devletsiz"   (bir daha bakılmayacak)
kaynak SUSUYOR           → neden:"veri-yok"    (bakılacak)
```
⚠️ Bu ders **tam senin bölgenden** çıktı (NOKTA SİBİRYA: Çukotka
`devletsiz`, Yakut `veri-yok`). Bugün **97 noktanın cinsi yazılı değil** —
o borcu büyütme.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN      data/yerlesimler_ortaasya3.js     ← YENİ, bunu sen açacaksın
              oturumlar/ORTAASYA-0902.md        ← kendi ilerleme dosyan
🔴 DEĞİL      data/yerlesimler.js · _ortaasya2.js · _ek14/15/18/20.js ·
              _asya.js · _sibirya.js · yerlesimler_ok107.js
              (yalnız OKU — mükerrer sınavı için)
              arac/*.py · js/app.js · kök *.md · data/devletler.js
```

🔴 **AD ALANI DA SENİN:** dosyan `window.YERLESIMLER_ORTAASYA3` tanımlayacak.
*"Ayrı dosya vermek, ayrı ad alanı vermek değildir"* — beş dosya tek ad
kullanıp %74 kayıp riski üretmişti (`CLAUDE.md §7`).

**Şema:** `VERI-YAPISI.md` — veri yazmadan ÖNCE oku. `s:[{f,t,d}]` içindeki
`d:` kimliği `arac/renkler.py` BOYALAR'da tanımlı olmalı. `devletler.js`teki
**gerçek `id:`yi** kullan.

---

## ④ SENİ BAĞLAYAN YASALAR

```
CLAUDE.md §2     noktasız bölge EN YAKIN PETEĞE EMİLİR — işinin sebebi bu
CLAUDE.md §4     TDV Orta Asya'yı %100 kapsıyor (künye düzeyinde).
   🔴 AMA TANECİK BAŞKA ŞEY: `kirman` 57 KB ama kasaba slugları ÖLÜ.
      TDV bölgeyi GÖRÜYOR, o kadar İNCE taneciğe İNMİYOR olabilir.
      Bu boşlukta akademik kaynak MEŞRU — şartı `kaynak:`a AÇIKÇA yazmak.
   ⚠️ ÖLÜ SLUG TESTİ (en ucuzu):
      curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
      302 → ÖLÜ · 200 → var (ama DOĞRU MADDE olduğunu SÖYLEMEZ — `ordu`
      askerî ordudur, şehir maddesi `ordu--sehir`)
   🟢 Dar slug tutmazsa KAPSAYICI maddeyi dene — ve kapsayıcı madde
      genellikle YER ya da KİŞİ maddesidir. CANLI ölçülmüşler:
      `semerkant · buhara · taskent · hokand · belh · seybaniler · timur`
   🔴 Türkçe yazım ekseni: kendi transliterasyonunla arama.
      `aceh`→`ace-sultanligi` deseni. ASCII arama Türkçe adı BULMAZ
      (`usku` ≠ `Üsküp`) — bugün altı mükerrer nokta yazdıracaktı.
CLAUDE.md §3.5   HAYALET DEVLET: devletin ÖMRÜNÜ kontrol et
CLAUDE.md §11    yakın mükerrer · yuvarlak tarih · sed/heredoc YASAĞI
```

### 🔴 YAZMADAN ÖNCE ÜÇ SINAV
```
① 3 KM    bağlı evrende VE kuyrukta BEKLEYEN dosyalarda (ok107 DÂHİL)
② AD      🔴 `girdi.yukle` ValueError ATAR — MOTOR HİÇ BAŞLAMAZ
③ KUTU    ok107'nin cebine girme; PAKET-0033'ünkü ÖLÇÜLMEDİ, sor
```
```bash
py arac/_baglama_onsinav.py data/yerlesimler_ortaasya3.js
```

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Ekrana yazdığın metni koordinatör
**görmez** — kendi pencerene *"iş üstündeyim"* yazmak cevap vermemekle
aynıdır.

```bash
py arac/tahta.py yaz --kim "ORTAASYA-0902" --kime "1.MURAT" --mesaj "..."
```
Yatay (işçi→işçi) mesaj **serbest**, şartı tahtadan geçmesi:
```bash
py arac/tahta.py yaz --kim "ORTAASYA-0902" --kime "OPUS HAZIR KITA 107" --mesaj "..."
```

```
AÇILINCA     "açıldım · brifingi okudum · dosyam şu · kutum şu"
KALEM KALEM  bir alt bölge bitince HEMEN — biriktirme
SORU GELİNCE HEMEN: "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
BİTİNCE      teslim raporu SAYIYLA
```

**AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · şartname yanlış çıktıysa ·
beklenenden çok farklı sayı ölçtüysen · ok107'den cevap gelmiyorsa →
BEKLETMEDEN yaz.

**Her maddede üç şey:** ① ne ölçtüm (sayıyla) ② neyi bulamadım (açıkça,
`bulunamadı` diye) ③ ne istiyorum (öneriyle).
⚠️ **Ölçmediğini `ölçmedim` diye yaz.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ

```
① üç alt bölgenin üçü de işlendi (ya da "kaynak susuyor" diye kapandı)
② `py arac/_baglama_onsinav.py` TEMİZ — 3 km ihlali 0 · ad çakışması 0
③ ok107 ile Yedisu cebi YAZILI olarak çözüldü (tahtada görünür)
④ her kaydın `kaynak:` alanı DOLU (ya da açıkça `bulunamadı`)
⑤ her `s:` kimliği `devletler.js`te var VE ömrü tutuyor
⑥ boş bıraktığın her bölge için cinsi yazılı: `devletsiz` | `veri-yok`
```
**Teslim raporu SAYIYLA:** *"4 → 18, şu 5'i şu sebeple yazılmadı"*.

🔴 **Dosyanı BAĞLAMA.** `arac/girdi.py` koordinatörün — **üretim koşarken
`arac/*.py` değişirse koşu ÖLÜR** (bir koşu 83 dakika çalışıp bu yüzden
öldü). Sen *"hazır"* de.

---

## ⑦ DURUM BEYANI — teslimden sonra SUSMA

```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"  ← ÜÇÜ BİRDEN
```
⚠️ **Sessizlik bir durum değildir.** Sustuğunda koordinatör seni "hâlâ
çalışıyor" sayar; boş kapasiten görünmez ve sana iş gelmez.


---
---

# ⑧ İLERLEME — ORTAASYA-0902'nin kendi kaydı (2 Eylül 2026)

## TESLİM: `data/yerlesimler_ortaasya3.js` · **22 nokta** · BAĞLANMADI

| alt bölge | önce | sonra | yeni | yoğunluk (nokta/Mkm²) |
|---|---|---|---|---|
| Yedisu / Semireçye | 4 | 9 | +5 | 10,0 → 22,5 |
| Doğu Türkistan | 15 | 22 | +7 | 9,4 → 13,8 |
| Kazak bozkırı | 20 | 30 | +10 | 9,1 → 13,6 |
| **TOPLAM** | **39** | **61** | **+22** | |

Şartname hedefi 84'tü. **22 yazıldı, 62 yazılmadı** — ve bu bir eksik değil
bir sonuçtur. Emre'nin hükmü: *"YOK İSE UYDURACAK HALİMİZ YOK."*

### Yazılanlar
```
YEDİSU (5)          Balasagun (Ak-Beşim) · Issık Göl havzası · Narın ·
                    Kopal (Kapal) · Almalık (Almalığ)
DOĞU TÜRKİSTAN (7)  Aksu (Tarım) · Uçturfan · Karaşar (Yanqi) ·
                    Keriya (Yutian) · Çerçen (Qiemo) · Çarklık (Ruoqiang) ·
                    Manas (Cungarya)
KAZAK BOZKIRI (10)  Petropavlovsk (Kızılcar) · Kökçetav · Akmola (Akmolinsk) ·
                    Karkaralinsk · Ayagöz (Sergiopol) · Irgiz · Kazalinsk ·
                    Ak-Meçit (Perovsk) · Sığnak (Sunak Kurgan) · Suzak (Sozak)
```

### 🟢 EN DEĞERLİ İKİSİ — ikisi de bir DEVLETİN BAŞŞEHRİ ve noktası YOKTU
```
Almalık   Çağatay Hanlığı'nın başşehri.  TDV `cagatay-hanligi`:
          "Almalığ devletin kuruluşundan beri başşehirdi."
Sığnak    Ebülhayr Han'ın ve erken Kazak Hanlığı'nın başşehri.
          TDV `ebulhayr-han`: "Sığnak bu tarihten sonra Ebülhayr'ın
          başşehri olmuş ve Timurlular'la Özbekler arasında sınır
          teşkil etmiştir."
```
📌 Bir devletin başşehrinin haritada noktası olmaması, o devletin gövdesini
komşularının peteğine bırakmaktır (`§2`).

## Kapı sınavları — hepsi koşuldu
```
_baglama_onsinav.py   KIRMIZI 0 · ad çakışması 0 · 3 km ihlali 0
                      en yakın çift Almalık → Gulca 40,87 km
                      kuyruk içi (ok102 + ok107) da temiz
node --check          ✓
Değişmez 1            ✓ 0 sahipsiz gün — GÜNLÜK TAM tarama
                      (234.626 gün × 22 kayıt), örnekleme DEĞİL
dönem sağlığı         ✓ çakışma / ters / sıfır uzunluk / boşluk = 0
kimlik                ✓ 13 kimliğin 13'ü devletler.js VE BOYALAR'da
kaynak:               ✓ 22/22 DOLU — 11 TDV slug, 11 açıkça "bulunamadı"
```

## Yöntem kaydı — bu partinin en pahalı ölçümü

**Kırılma günü disiplini.** `Değişmez 2s` açığı GÜNE göre sayılıyor. Bu
yüzden her aday gün, YAZMADAN ÖNCE bağlı evrenin **1509 benzersiz yabancı
kırılma gününe** karşı tek tek ölçüldü. Sonuç: 22 kaydın kullandığı
günlerin **ikisi hariç hepsi zaten mevcut** ⇒ `2s` kıpırdamıyor.

🔴 **Doğan iki yeni gün — beyan edildi, saklanmadı:**
```
1853-07-28   Ak-Meçit'in (Perovsk) Ruslarca alınışı
1862-09-04   Pişpek kalesinin düşüşü — Çu vadisi Rus idaresine geçti
```
İkisi de kaynaklı ve GÜN hassasiyetinde. Yuvarlamadım (`§11`: *yuvarlak
tarih yalnız yanlış değildir, ÇELİŞKİYİ DE SAKLAR*). İkisi için birer
kronoloji maddesi gerekiyor — sevk koordinatörde.

## 🔴 BULGU: Doğu Türkistan'da İKİ KÜNYESİZ ARA REJİM

`§3.5` hayalet sınavını önce kendi dosyama, sonra bağlı evrenin 69
dosyasına koşturdum. Üç sınıf çıktı ve **üçü de devraldığım şablonda**:

| kimlik | künye | veride | bağlı evren | bende |
|---|---|---|---|---|
| `altinorda` | →1502-01-01 | 1502-03-01 | 17 kayıt | 0 |
| `kazak-hanligi` | →1847-01-01 | 1868-01-01 | 6 kayıt | **0** ← zinciri kırdım |
| `yakub-beg` | 1865-01-01→ | 1864-06-04 | 6 kayıt | 7 ← sürdürdüm |
| `cungar` | →1758-01-01 | 1759-01-01 | 4 kayıt | 6 ← sürdürdüm |

**İkisini bilerek sürdürdüm**, gerekçesi `§3.5.1` *"iki uç da ölçülür"*:
Aksu'yu künyeye uydursaydım, 234 km ötedeki Kuça bir yıl daha Cungar
kalacaktı ⇒ haritada **bir yıl süren sahte bir sınır**. Hayaleti kapatırken
dikiş açmak, *"hayalet yok olmadı, TARAF DEĞİŞTİRDİ"* vakasının aynısı.

**Ve asıl bulgu: ikisinin de kökü tek — KÜNYESİZ ARA REJİM.**
```
1757/58 → 1759            Cungar yıkıldı, Tarım'ı AFÂKÎ HOCALAR yönetti
1864-06-04 → 1865-01-01   Kuça ayaklanması; Reşidin Hoca · Buzurg Han.
                          Yâkub Bey Kaşgar'a OCAK 1865'te girdi ⇒ künye
                          DOĞRU, yanlış olan VERİ.
```
İkisi de ifade edilemediği için en yakın kimliğe **itilmiş** —
`CLAUDE.md §11`in İlhanlı 1335-1340 fetret vakasının birebir aynısı, ve bu
sefer Doğu Türkistan'da **iki kez**. Çare tarih kaydırması değil: ya iki
künye açılır ya genişletilir. İkisi de `data/devletler.js` — dokunmadım.

## 🟢 İKİ MÜKERRERİ / TUZAĞI SON ANDA ÖNLEDİM
```
"Aksu (Tarım)"                TDV `kazakistan`: "Sayram (İsfîcâb, AKSU)".
                              Yedisu'da da bir Aksu var, 1150 km ötede.
                              Düz "Aksu" yazsam iki şehir tek ada düşerdi.
"Petropavlovsk (Kızılcar)"    Atlasta ZATEN Petropavlovsk-Kamçatskiy var
                              (5800 km ötede). Dizgiler farklı, ValueError
                              atmaz — ama bir sonraki oturumun ad aramasını
                              yanıltırdı.
```

## Yazılmayanlar ve gerekçeleri
```
🔴 OTRAR       ok107'nin cebinin TAM İÇİNDE (42,85/68,30). M-2157 ile
               soruldu, cevap gelmedi. Cebe DOKUNULMADI. AÇIK KALEM.
⚪ Sauran      Yesi'ye 33 km (coğrafî katkı yok) VE cebin kenarına 5,5 km.
⚪ Barköl      Hâmi'ye 94 km, ve Qing'e geçiş için ÜÇ farklı yıl (1697 /
               1715 / 1730). Seçemedim ⇒ yazmadım.
⚪ Troitsk     Kimlik ataması belirsiz (Başkurt mu, Kazak mı, Sibir mi).
⚪ Tokmak · Pişpek · Maralbaşı   3 km sınavını geçiyorlar ama mükerrer
               yoğunluk üretirlerdi.
```

## ⚠️ ÖLÇMEDİĞİM — açıkça yazıyorum, "temiz" demiyorum
```
· `dogu-turkistan` ve `sincan` slugları HTTP 200, başlık DOĞRU, ama gövde
  GELMİYOR (80 KB'ın tamamı boilerplate) = `§4④`. Bu "TDV'de YOK" demek
  DEĞİLDİR. `ölçülemedi` diye kaydettim.
· Yazdığım 11 TDV slugunun 11'inin GÖVDESİNİ okudum, ama "doğru madde mi"
  sorusunu ölçen ayrı bir sınav koşmadım — `§4②` tuzağı benim için de açık.
· `_sahiplik_uygula.py` / `denetle.py` KOŞMADIM: dosyam bağlı değil, o
  araçlar `girdi.py`nin listesini okuyor. Bağlandıktan sonra koşulmalı.
```

## Kayda değer: `§11` kancası BENİ yakaladı
Teslim raporunu tahtaya yazarken mesaj metnindeki backtick'ler yüzünden
kanca komutu reddetti — ve haklıydı. `§11`in tam biçimini uyguladım:
metin `Write` ile dosyaya yazıldı, bash ona dokunmadı, `subprocess`
(`shell=False`) ile `tahta.py`ye verildi.
📌 Ve bu, `§11`in *"kural yetmiyor, ALIŞKANLIK gerekiyor"* dersinin
kanıtı: kuralı okumuştum, yine de ihlal ettim. Yakalayan şey **alet** oldu.

## ⚠️ TAHTA ARIZASI — ölçüldü, çıkarımı düzeltildi
`tahta.py` M-2183'ü yazdı ama commit `kod=128` verdi ve
*"MESAJ SENDE KALDI, uzakta YOK"* dedi. Ölçtüm:
```
git show HEAD:oturumlar/tahta.json        | grep -c M-2183   → 1
git show origin/main:oturumlar/tahta.json | grep -c M-2183   → 1
```
⇒ Mesaj **hem commit'li hem push'lu**. Başka bir oturumun commit'i
(M-2184) paylaşılan index'ten onu da taşımış. Aracın **ölçümü doğruydu**
(kendi commit'i gerçekten başarısızdı) ama **çıkarımı yanlış**: kendi
commit'inin başarısızlığından mesajın uzakta olmadığını çıkardı.
📌 `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesinin araç tarafı.
