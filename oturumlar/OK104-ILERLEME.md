# OPUS HAZIR KITA 104 — ilerleme

**Görev:** `parti-emrelic-0019` · 12 açık madde
**Görevi veren:** 1.MURAT HÜDAVENDİGAR (koordinatör) · tahta **M-1903**
**Kimlik:** `local_0aedd4a6-8a8b-4d74-afa4-5fe4d2dca791`
**Açılış:** 1 Eylül 2026 · **M-1888** (iş isteği) · **M-1913** (açılış raporu)

---

## 0. Taban — devraldığım sayıyı doğrulamadan aktarmadım

Koordinatörün tablosu *"12 açık"* diyordu. `CEVAP.json`u kendi diliyle
(`json.load`) okudum:

```
paket parti-emrelic-0019 · 81 madde · cevap_tarihi 2026-08-29 12:03
cozuldu 41 · zaten-dogru 18 · sirada 11 · senin-kararin 5
tekrar 3 · olculecek 1 · gerek-yok 1 · bayat 1
AÇIK = sirada 11 + olculecek 1 = 12          ⇒ koordinatörle AYNI
```

🔴 Evren uyarısı doğruydu: `denetim/HUKUM-*.json` **yanlış evren**, oraya
bakmadım.

---

## 1. Teslim edilen dosyalar

| dosya | ad alanı | kayıt | madde |
|---|---|---|---|
| `data/yerlesimler_ok104.js` | `window.YERLESIMLER_OK104` | 6 | H-0026 · H-0076 |
| `data/olaylar_ok104.js` | `window.OLAYLAR_OK104` | 1 | (H-0026'nın `2s` kapağı) |
| `data/savaslar_ok104.js` | `window.SAVASLAR_OK104` | 1 | H-0058 |
| `data/olay_yama_ok104.js` | `window.OLAY_YAMA_OK104` | 2 | H-0045 · H-0067 (yama tarifi, bağlanmaz) |

**Ad alanı dosya adından türetildi** (`§7` · M-1903 ④). Ölçüldü: 147 dosya
tarandı, **çakışma 0**; tek tek okuma = birlikte okuma = **8 kayıt**
(16 Ağustos'un %74 kaybı bu testle aranır).

🔴 **BAĞLAMAYI YAPMADIM.** `girdi.py` · `index.html` sende ve koşu kilitli.
Dördü de **bağlanmaya hazır**. `olay_yama_ok104.js` **bağlanmaz** — tariftir.

---

## 2. Teslim sınavı — altı test, altısı da koşuldu

```
① sözdizimi + ad alanı        3/3 dosya temiz
② ad alanı çakışması          0   (147 dosya)
③ tek tek = birlikte          8 = 8
④ 3 km mükerrer + ad çakışması 0   (en yakın çift 21,2 km — eşiğin 7 katı)
⑤ dönem sağlığı               0 kusur · 10 kesitte Değişmez 1 temiz
⑥ şikâyet kapandı mı          ölçüldü, aşağıda
```

**⑥ — şikâyetin kendisi:**
```
H-0026  1467-06-15  ÖNCE  OSMANLI 14 · venedik 4 · tabi 2 · arnavutluk 1
                    SONRA OSMANLI 15 · venedik 5 · tabi 2 · arnavutluk 2
H-0076  1570-06-15  ÖNCE  OSMANLI 7 · yemen 2 · adal 1
                    SONRA OSMANLI 7 · yemen 5 · adal 1
```

**Değişmez 2 / 2s — yeni kırılma günü açtım mı:** kullanılan her gün,
`index.html`in yüklediği **67 kronoloji dosyasının 6115 maddesine** karşı
±30 gün penceresiyle sınandı. Tek açık gün `1393-05-01` çıktı ve **maddesi
aynı turda yazıldı**. ⇒ sayaçlar büyümüyor.

---

## 3. Madde madde — 12 → 5 kapandı, 7 açık

### 🟢 H-0026 · Arnavutluk — `cozuldu`
Ölçtüm: 1467-06-15'te Arnavutluk kutusunda **21 nokta, `arnavutluk` sahipli
TEK nokta** (Akçahisar). Etiket basacak gövde yoktu — Emre'nin gördüğü buydu.
Yazılan üç nokta: **Mat (Mati)** · **Leş (Alessio)** · **Debre (Dibra)**.

🔴 **Devraldığım çareyi ölçtüm ve BİR KALEMİNİ ÇÜRÜTTÜM.** TASNIF notu
*"Lezhe … İskender Bey'in Lezhe Birliği'nin merkezleridir"* diyordu; TDV
`les` **iki kez** aksini söylüyor:
> *"1444 Martında şehir, **Venedikliler'e ait olmasına rağmen**, İskender Bey
> liderliğinde … bir ittifakın toplandığı yer olarak ün kazandı."*
> *"**Bir Venedik kalesi olan Leş**'te bulunan İskender Bey 17 Ocak 1468'de
> burada öldü."*

⇒ Öneri olduğu gibi uygulansaydı **Venedik'in bir limanı Arnavutluk
boyanacaktı.** `§11`in *"atlas seferi değil TASARRUFU boyar"* dersinin
toplantı hâli: Lezhe Birliği orada **toplandı**, ama şehir onun **değildi**.

**Yazılmayan iki nokta ve sebepleri** (`gerek-yok` değil, `senin-kararin`):
- **Svetigrad (Kocacık)** — TDV gövdesi Kocacık'la, TDV **kaynakçası**
  Debar'la özdeşleştiriyor (Tomoski: *"Svetigrad, Debar'ın ikinci adıdır"*).
  İki özdeşleştirme arası ~7 km. Varat/Varad deseni ⇒ yazmadım, kararı sana
  bırakıyorum. Ve Emre'nin 1467 sorusu için **gerekli değil** (1448'den beri
  Osmanlı).
- **Petrela** — TDV slug ölü (302). `§4`: kaynağı bulunamayan nokta yazılmaz.

### 🟢 H-0076 · Yemen — `cozuldu`
Ölçtüm: 1570-06-15'te imamlığın **iki** noktası vardı ve ikisi de yanlış
yerdeydi (Ebha 400 km kuzeyde, Hudeyde Osmanlı'nın en sağlam tuttuğu kıyıda).
Yazılan üç dağ noktası: **Sa'de** · **Şehâre** · **Kevkebân** → `yemen` 2 → 5.

TDV `zeydiyye` Emre'nin sorusuna **doğrudan** cevap veriyor:
> *"Zeydîler'in Yemen'deki iktidarı **1848'de** Osmanlılar'ın tekrar bölgeye
> hâkim olmasına kadar **iki asır devam etti**."*

Dönem günleri Sana'nın kullandıklarının **aynısı** (1872-04-01 · 1918-10-30)
⇒ yeni kırılma yok.

⚠️ **Kaynak kusuru gizlenmedi:** Şehâre ve Kevkebân'ın TDV'de müstakil maddesi
YOK ve `zeydiyye` içinde adları **geçmiyor** (aradım, 0 geçiş). İkisinin de
`kaynak:` alanına **`bulunamadı`** yazıldı. Kalsınlar mı, geri mi çekilsinler
— **senin kararın.**

### 🟢 H-0058 · Böğürdelen — `cozuldu`
Devraldığım ölçümü kendim saydım: `savaslar.js`te `delen` **0**, `1521-07` **0**
⇒ kayıt gerçekten yok. TDV `bogurdelen` (gövdesi okundu) günü **tam** veriyor:
> *"Rumeli Beylerbeyi Ahmed Paşa'nın kuvvetleri tarafından … fethedildi
> (**7 Temmuz 1521**). Burası aynı zamanda **Kanûnî'nin ilk fethettiği kale**…"*

⚠️ **Bir sınır bildiriyorum:** `data/savaslar_ok104.js` kendiliğinden
`window.SAVASLAR`a katılmaz. `js/app.js` ya `SAVASLAR_*` önekini taramalı ya
da dizi push edilmeli — **app.js'e dokunmadım**, karar sahibinin.

### 🟢 H-0045 · Halep — `cozuldu (yama tarifi)`
`yer:"Halep"` → `yer:"Halep, Antakya, Deyrizor, Rakka"`. Metin düzeltmesi,
hiçbir sayacı değiştirmez. Uygulayıcı: `olaylar*.js` sahibi.

### 🔴 H-0067 · Fuzûlî — **`bayat`. ŞİKÂYET ÖLDÜ, İŞ ZATEN YAPILMIŞ.**
```
TASNIF (21-29 Ağu)   t = 1534-06-01   "altı ay erken, iç çelişki"
BENİM ÖLÇÜMÜM (2 Eyl) t = 1534-12-04   Bağdat'ın fethiyle AYNI GÜN
```
⇒ M-1903 ⑥'nın (*"git log — bu iş zaten yapılmış mı?"*) tam vakası. Bu ölçüm
yapılmasaydı kayıt **ikinci kez** düzeltilip *"anakronizmi giderdim"* diye
teslim edilecekti.
⚠️ **ÖLÇMEDİM:** hangi commit düzeltti. `git log -S` ve `git log -- <dosya>`
bu depoda **iki dakikada dönmedi** (12-14 MB üretilmiş dosyalar). *"Bugünkü
değer 1534-12-04"* diyorum; *"şu commit düzeltti"* **demiyorum.**
🟡 Açık kalan: iki madde artık aynı günde — **sıralaması** ölçülmedi
(`js/app.js` sorusu).

### 🟡 H-0003 · Ankara Savaşı sonrası Doğu Anadolu — `olculecek` → **ÖLÇÜLDÜ**
Kutu 37-41,5°K / 37-45°D · 70 nokta · dört kesit:
```
1400-06-15  akkoyunlu 21 · gurcistan 9 · OSMANLI 7 · karakoyunlu 7 · timurlu 7 …
1403-06-15  akkoyunlu 21 · memluk 10 · gurcistan 9 · timurlu 8 · karakoyunlu 7 …
1410-06-15  akkoyunlu 23 · karakoyunlu 16 · memluk 10 …
1420-06-15  akkoyunlu 23 · karakoyunlu 17 · memluk 10 · OSMANLI 1
```
🟢 **DOĞRU ÇIKANLAR:** Osmanlı 7 → **0** (Ankara'dan sonra doğuda hiç yok — bu
tam olarak beklenen) · Erzincan **mutahharten** (Timur Mutahharten'i geri
getirdi) · Ordu ve Ünye **haciemir** (Hacıemiroğulları ihyası — `CLAUDE.md §2`
bu vakayı adıyla anıyor) · Revan/Zaho **celayirli** · Hoy/Mâku/Selmâs
**timurlu**.

🟡 **TEK ŞÜPHEM — ve bunu hüküm olarak yazmıyorum:** `akkoyunlu` **1400'de
zaten 21 nokta** tutuyor ve bunların içinde Erzurum · Kars civarı · Iğdır ·
Eçmiyadzin · Gümrü · Digor · Arpaçay var. Akkoyunlu'nun 1400'de Diyarbakır
çevresinde bir aşiret konfederasyonu olduğu, Erzurum-Erivan hattına ancak
1435 sonrası ve Karakoyunlu'yu yendiği **1467**'den sonra ulaştığı genel
kabuldür.
```
ÖLÇTÜĞÜM   1400 ve 1403'te akkoyunlu 21 nokta, kuzeydoğuya kadar uzanıyor
ÇIKARDIĞIM bu muhtemelen ileri sarılmış bir sınır
ÖLÇMEDİM   TDV `akkoyunlular` maddesini AÇMADIM — kaynak doğrulaması YOK
```
⇒ Hüküm **vermiyorum**. Bu bir sonraki turun ilk işi ya da ayrı bir kalem.

### 🟢 H-0018 · Anadolu Hisarı — **veri yarısı `zaten-dogru`**
TASNIF şikâyeti ikiye ayırmış ve ② için açıkça *"ÖLÇMEDİM"* demişti. **Ölçtüm:**
```
Anadolu Hisarı   41,081/29,067 (ANADOLU yakası)  d: 1395-08-01'den   ✓
Rumeli Hisarı    41,088/29,051 (AVRUPA yakası)   d: 1452-08-31'den   ✓
Üsküdar          (Anadolu)                        d: 1329-06-01'den   ✓
İstanbul         (Avrupa)                         d: 1453-05-29'dan   ✓
Silivri · Çatalca (Avrupa)                        d: 1453-05-29'dan   ✓
```
⇒ Emre'nin ② istediği şey — *"o dönemde karşı yakaya henüz geçilmemişti,
Rumeli Hisarı yapılınca geçsin"* — **veride ZATEN böyle.** Kayıtlar kademe
kademe ve doğru yakada.
🔴 ⇒ **Geriye kalan kusurun TAMAMI ① maske.** İki kalem değil, **tek kök**:
Boğaz kesilmemiş, Anadolu Hisarı'nın peteği karşı yakaya taşıyor. Sahibi
`arac/uret_petek.py` + `veri-kaynak/` — **kilitli, dokunmadım.**

### 🟢 H-0019 · Rumeli Hisarı — **aynı ölçüm, aynı hüküm**
Veri tarafı doğru; kök aynı maske. *"Kök kapanmadan bu maddenin veri tarafını
düzeltmek görünür değişiklik üretmez"* — TASNIF haklıydı, ve **düzeltilecek
veri tarafı da yokmuş.**

### ⏳ Henüz el atmadıklarım — 4 kalem
`H-0007` (Gürcistan↔Karakoyunlu magenta · `renkler.py` **kilitli**) ·
`H-0023` (yeni etiket denetimi) · `H-0051` (`js/app.js` kaydırma) ·
`H-0056` (Sahra nokta yoğunluğu).

---

## 4. Yan bulgu — paketimin dışında, ölçüm/çıkarım ayrı

```
ÖLÇTÜM     `arnavutluk-bagimsiz` 13 yerleşim kaydında kullanılıyor ·
           devletler.js'te künyesi VAR · `harita:` alanı YOK ·
           renkler.py BOYALAR'ının 401 kimliği arasında YOK.
           Aynısı `sirbistan-kralligi` için de geçerli (Ohri · Manastır).
ÇIKARDIĞIM `§8`e göre 1912-1923 penceresinde harita deliği OLABİLİR.
ÖLÇMEDİM   motorun bu kimlikleri başka bir yoldan boyayıp boyamadığını.
```
Hüküm vermiyorum. Kendi dosyam komşularıyla **tutarlı** yazıldı — deliği ne
açıyor ne büyütüyor.

---

## 5. Ölçüm araçları

Hepsi scratchpad'de, `Write` ile yazılıp `node`/`py` ile koşuldu — **hiçbiri
bash'ten kaçış geçirmedi** (`§11`, altı vakalı kural):
`olc1.js` (H-0003 + Boğaz) · `olc2.js` (Arnavutluk/Yemen + 3 km) ·
`olc3.js` (Fuzûlî/Halep) · `gun.js` (Değişmez 2 gün sınavı) ·
`sinav.js` (altı testlik teslim kapısı) · `tdvcache.py` (TDV gövde okuyucu).

**TDV slug ölçümü** (`§4` — kod DEĞİL gövde okundu):
```
🟢 CANLI  iskender-bey · debre · arnavutluk · yemen · zeydiyye · sana ·
          bogurdelen · les · kruya
🔴 ÖLÜ    kruja · lezhe · lesh · mat · dibra · petrela · saade · sada ·
          amran · kevkeban · sehare · zemar · sabac · kasimiler
```
🔴 **VE `§4`ün ② TUZAĞININ YENİ BİR ALT-SINIFINI ÖLÇTÜM:**
`akcahisar` HTTP **200** döndürüyor, `<title>` **"AKÇAHİSAR"** yazıyor —
her iki test de temiz. Ama gövdenin **tamamı** şu: **"AKÇAHİSAR bk. KRUYA"**.
Madde yok, **çapraz gönderme** var; gerçek madde `kruya`. Üstelik gövdeye
alâkasız bir form artığı karışmış (*"sadece OSMANLILAR//8-mali-yapi maddesi
ile alakalı…"*), yani içerik taraması da yanıltabilirdi.
```
① ölü slug              302
② canlı slug, yanlış madde     200 + yanlış başlık   (ordu · saray · cin)
③ canlı slug, boş gövde        200 + doğru başlık    (mogadisu)
④ canlı slug, boilerplate      200 + doğru başlık, içerik gelmiyor (mazenderan)
⑤ canlı slug, ÇAPRAZ GÖNDERME  200 + DOĞRU başlık + 2,5 KB gövde,
   içeriği tek satır: "bk. X"                        (akcahisar -> kruya)  ← YENİ
```
📌 ⑤'in ③'ten farkı: gövde **boş değil**, ve *"kısa madde"* diye geçilebilir.
Ayırt edici işaret **"bk."** kalıbı ve **2-3 KB**'lık gövde uzunluğu — ötekiler
13-97 KB geldi.
