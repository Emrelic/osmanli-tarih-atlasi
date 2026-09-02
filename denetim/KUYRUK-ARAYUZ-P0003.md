# KUYRUK-ARAYÜZ — dağınık `js/app.js` kalemleri, sıralı

> Sevk: 1.MURAT, M-2053 sonrası "İş ②" (2 Eylül 2026). Yöntem: 42 paketin
> `CEVAP.json` dosyalarındaki AÇIK (sirada/olculecek/senin-kararin)
> maddeler `arayuz`/`js/app.js`/`click-to-pan`/`tıkla`/`webgl`/`ekran
> görüntüsü` anahtar kelimeleriyle tarandı (26 ham eşleşme), sonra
> **gerçekten arayüz kodu işi olanlar** ayrı süzüldü (etiketleme/taksonomi
> gibi "arayüz değil, veri/içerik işi" diye kendi notunda işaretlenmiş
> maddeler dışarıda bırakıldı — parti-emrelic-0035/H-0034, H-0066 gibi).
> `js/app.js`'e HİÇ DOKUNULMADI — bu bir envanter, kod değişikliği değil.

⚠️ **DÜRÜSTÇE İŞARETLENEN SINIR:** koordinatörün verdiği dört tohumdan
ikisi (koridor · "H-0070/H-0072 WebGL ekran görüntüsü") tam eşleşmedi —
aşağıda ③ ve ⑨'da not düşüldü. Uydurmadım, "en yakın eşleşme" diye
işaretledim.

---

## ① ALFA-HARMAN — iki gövde aynı toprağı kaplayınca renk bozuluyor
**ÖLÇÜLMÜŞ, YÜKSEK ÖNCELİK — üç bağımsız rapor AYNI kök nedene çıkıyor**

```
kaynak    parti-emrelic-0030/H-0001 · parti-emrelic-0031/H-0005 · H-0019
kod yeri  js/app.js:837 devlet-dolgu (fill-opacity 0.44, ALTTA)
          js/app.js:885 vassal-dolgu #b2384a (0.60)
          js/app.js:891 osmanli-dolgu #8e0b22 (0.68, ÜSTTE)
```
Üçü de saydam; iki gövde aynı toprağı kaplarsa (nokta-içinde sınavı
`devletler_harita.js` × `donemler.js` çakışması — Pirot/Kütahya/Uşak/Simav
örnekleri ÖLÇÜLDÜ) ekranda **alfa harmanı** görünüyor (0.44 mavi + 0.68
koyu kırmızı = mor gibi). `parti-emrelic-0035/H-0070` (2. Viyana sonrası
Solnok, "Osmanlı kırmızısı ile Avusturya rengi üst üste") muhtemelen AYNI
AİLE — dördüncü bağımsız işaret.

**NİÇİN ÖNCELİKLİ:** dört bağımsız oturum, dört ayrı tarihsel örnek, TEK
kod konumu. Tek bir düzeltme (katman sırasını netleştirmek ya da alttaki
gövdeyi üsttekinin altına tam opak boyamak) dördünü birden kapatabilir.

## ② CLICK-TO-PAN — kronoloji maddesine tıklayınca harita o bölgeye kaymıyor
**ÖLÇÜLMÜŞ (bu paketin kendi bulgusu), TEK RAPOR**

```
kaynak  parti-emrelic-0035/H-0052 (bkz. denetim/HUKUM-P0003.json)
teşhis  görsel "yanlış" bölgeyi gösteriyordu (Kosova Ovası değil, Doğu
        Bulgaristan/Dobruca) çünkü tıklama haritayı doğru konuma
        odaklamıyor — kullanıcı yanlış yeri "bölgesiz Osmanlı" sanmış
```
**NİÇİN İKİNCİ SIRADA:** tek doğrudan rapor ama etkisi geniş olabilir —
"harita [X]'i göstermiyor" tipi başka şikâyetlerin bir kısmı da bu
kaynaktan gelmiş olabilir (ÖLÇÜLMEDİ, TAHMİN — sistematik tarama için ayrı
bir iş gerekir).

## ③ KORİDOR ÇİZİMİ — düz çizgi, rota-çevreleme/rozet yok
**KISMEN ÖLÇÜLMÜŞ — koordinatörün "türetilmiş/kaynaklı kenar ayrı
çizilmeli" tarifiyle TAM eşleşmedi, en yakın adayı bu**

```
kaynak  parti-emrelic-0027/H-0006
ölçüm   js/app.js:3048 koridorGuncelle() CANLI: zaman pencereli
        düğüm+kenar çizen genel mekanizma var, AMA düz çizgi çekiyor
        (Osmanlı toprağı etrafından dolanmıyor), rozet/bayrak yok,
        veri kaynağı sabit bir ağ (değişken ittifak üyeliğine
        uyarlanmamış)
```
Koordinatörün tarif ettiği "türetilmiş kenar (motorun ürettiği) ile
kaynaklı kenar (araştırmayla bulunmuş gerçek güzergah) ayrı çizilmeli,
yoksa kullanıcı türetilmişi menzil yolu sanır" cümlesi bu maddede
BİREBİR yok — muhtemelen KORİDOR DÜNYA oturumunun bu geceki raporlarından
(tahta) geliyor, ben paket taramasında bulamadım. **Doğrulanmadı,
koordinatör kaynağı tahtadan kendi bulmalı.**

## ④ İTTİFAK ANİMASYONU — tasarım hazır, kod yok
**ÖLÇÜLMÜŞ, İKİ BAĞIMSIZ RAPOR AYNI KONUYA ÇIKIYOR**
**🟢 ONAYLANDI (M-2104, 2 Eylül) — parti-emrelic-0030/H-0003'ün "senin-kararin"
sevk sorusu buraya YÖNLENDİRİLDİ, resmen ARAYÜZ kuyruğunun kalemi. Bkz.
denetim/HUKUM-P0003.json.**

```
kaynak   parti-emrelic-0030/H-0003 · parti-emrelic-0023/H-0003
tasarım  denetim/ITTIFAK-TASARIM.md VAR (commit d9b255e)
kod      js/app.js'te 'ittifak' TEK eşleşme (glif lejantı, app.js:3654)
veri     data/ittifaklar.js HÂLÂ YOK (2 haftadır sıfır ilerleme,
         parti-emrelic-0023 ölçtü)
```
İki parça: (a) veri dosyası (data/ittifaklar_<KISALTMA>.js, bir
kronoloji/veri oturumu yazabilir) + (b) rozet/ip/ışıltı animasyonu
(arayüz). Veri kısmı arayüzü BEKLEMEDEN başlayabilir.

## ⑤ "HAKKINDA / SÜRÜM MENÜSÜ" YOK
**ÖLÇÜLMÜŞ, TEK RAPOR — ama koordinatörün doğrudan andığı kalem**

```
kaynak  parti-emrelic-0024/H-0010
ölçüm   index.html'de sürüm/koşu-tarihi menüsü YOK; yalnız eski
        KALDIRILMIŞ 'Hakkında' butonunun açıklama yorumu duruyor
        (index.html:23-28). `?v=r4391` + data/donemler.js üretim
        damgası dosyada var ama arayüzde GÖSTERİLMİYOR.
```
⚠️ Not: bu buton Emre'nin kendi isteğiyle KALDIRILMIŞTI (p2/H-0010 notu:
"kullanıcı proje künyesi+BEKLEYENLER tablosunu kasten kaldırtmıştı") —
yani bu bir unutulmuş özellik değil, **kasıtlı bir kaldırmanın
yarım kalmış hâli** olabilir. Yeniden eklemeden önce Emre'ye sorulmalı:
sürüm damgası MİNİMAL bir biçimde geri istenir mi, yoksa kapalı mı
kalsın?

## ⑥ EKOKUMA TÜR MEKANİZMASI — 4/11 tür tanımlı
**ÖLÇÜLMÜŞ, İKİ MADDE AYNI KÖK (aynı oturum, OPUS 106 birleştirmiş)**

```
kaynak  parti-emrelic-0034/H-0022 + H-0040
ölçüm   js/app.js:5236 EKOKUMA_TUR mekanizması ÇALIŞIYOR, 4 tür tanımlı
        (sebep-sonuç, mağazin, merak, antlaşma). Emre'nin 11 başlıklık
        listesinden 7'si TANIMSIZ (tartışma, teknik-bilimsel, kimdir,
        dış-yankılar, kahramanlık, menkıbeler, şok-haberler).
```
Mekanizma var, eksik olan (a) 7 tür tanımı (arayüz, küçük) ve (b) içerik
(1277 maddenin %7,3'ü kapsanmış — büyük, veri/içerik işi).

## ⑦ PANEL GÖRSEL YUVASI — yalnız padişah portresi basıyor
**ÖLÇÜLMÜŞ, TEK RAPOR**

```
kaynak  parti-emrelic-0034/H-0044
ölçüm   js/app.js:5102 'ob-gorsel' YALNIZ padişah portresi basıyor
        (vefat_id ya da kişilerde geçen padişah varsa); madde-özel
        görsel (ör. Piri Reis haritası, Kara Mustafa Paşa'nın resmi)
        için YUVA YOK. Kronoloji şemasında 'gorsel' alanı da yok
        (1277 madde, 24 alan tarandı, hiçbiri görsel değil).
```
Bu, `parti-0004/H-0015`'in (bu paketin dışında ama aynı aile) sorduğu
"padişah resmi her yerde gösterilmesin, madde kendi görseline sahip olsun"
isteğiyle AYNI kalem — iki paket bağımsız aynı ihtiyacı buldu.

## ⑧ BAŞKENT YILDIZI — şehrin noktası dönüşmeli + devletler.js baskent alanı
**ÖLÇÜLMÜŞ (bu paketin kendi bulgusu, teslim edildi: M-1934)**

```
kaynak  parti-0004/H-0011 (bu paketten)
engel   data/devletler.js `baskent` alanı TEK DEĞER, f:/t: pencereli
        değil — DEVLET KÜNYESİ kalemiyle aynı kökten (Oturum 3'ün işi)
```
Zaten teslim edilmiş bir bulgu, burada yalnız kuyruğa yeniden not
düşülüyor çünkü arayüz tarafı (yıldızın haritadaki NOKTAYA taşınması)
veri tarafından (pencere alanı) bağımsız başlanabilir.

## ⑨ "H-0070/H-0072 YENİ EKRAN GÖRÜNTÜSÜ / WEBGL" — DOĞRULANAMADI
Koordinatörün andığı bu ikili aranan biçimde bulunamadı:
`parti-emrelic-0019/H-0070` ve `H-0072` **zaten "cozuldu"** (Halepçe
koridoru + çöl-boşluk kapatma), `parti-emrelic-0035/H-0070` (taralı alan/
Solnok, olculecek → yukarıda ①'e bağlandı) ve `H-0072` (motor T-junction
dikişi, arayüz değil, kapsam dışı) bulundu ama "WebGL" ya da "yeni ekran
görüntüsü" ifadesiyle eşleşen bir madde YOK. **Bulamadım — 'bulunamadı'
bir sonuçtur, uydurmadım.**

Ama ilişkili, gerçek ve TEKRAR EDEN bir kısıt var: `denetim/HUKUM-
ARAYUZ.json`'ın kendi kapanış notu — *"Bu oturumda MapLibre/WebGL bu
ortamda RENDER OLMADI (haritaHazır hep false, bilinen pano-compositing
kısıtı) ... piksel/görsel doğrulama yapılamadı."* Yani birçok oturum kendi
arayüz değişikliğini GÖZLE doğrulayamıyor — bu tek bir madde değil,
**arayüz işini kabul ederken göz önünde bulundurulması gereken bir
altyapı sınırı.**

---

## ÖNERİLEN SIRA (etkiye göre, ölçülmüşlükle ağırlıklı)

| # | Kalem | Bağımsız rapor | Ölçüldü mü |
|---|---|---|---|
| 1 | ① Alfa-harman | 3-4 | ✓ kod satırıyla |
| 2 | ④ İttifak animasyonu | 2 | ✓ tasarım+kod konumu |
| 3 | ⑥ Ekokuma tür eksikleri | 2 (tek oturum, iki madde) | ✓ kod satırıyla |
| 4 | ⑦ Panel görsel yuvası | 2 (ayrı paket, aynı istek) | ✓ kod satırıyla |
| 5 | ② Click-to-pan | 1 | ✓ (bu paket) |
| 6 | ⑧ Başkent yıldızı | 1 | ✓ (bu paket, teslim edildi) |
| 7 | ⑤ Hakkında/sürüm menüsü | 1 | ✓ ama Emre'ye SORULMALI (kasıtlı kaldırma) |
| 8 | ③ Koridor türetilmiş/kaynaklı | 1 (yaklaşık eşleşme) | kısmen |

— PAKET-0003-0006, 2 Eylül 2026


---

## ⑪ `SAVASLAR` ÖNEK SÜZGECİ YOK — bağlanan savaş dosyaları SESSİZCE ELENİYOR
**ÖLÇÜLDÜ (1.MURAT, 2 Eylül 2026) · TEK KONUM · KESİN**

`app.js` `OLAYLAR` ve `SEFERLER` için önek deseni yazmış, `SAVASLAR` için
**hiç yazmamış** — on bir yerde çıplak `window.SAVASLAR` okunuyor:

```
OLAYLAR_*    /^OLAYLAR(_[A-Za-z0-9]+)?$/      app.js:2684    ✓ VAR
SEFERLER_*   /^SEFERLER(_[A-Za-z0-9_]+)?$/    app.js         ✓ VAR
SAVASLAR_*   —                                                ✗ YOK
             app.js:2317 · 2653 · 4209 · 4423 · 5247 …  hepsi
             `(window.SAVASLAR || [])` — bare ad
```

**Canlı zarar:** `data/savaslar_ok104.js` → `window.SAVASLAR_OK104`
(Böğürdelen/Şabac kuşatması, 1521-07-07, tam kayıt: taraf · sonuç · seri ·
lat/lon) `index.html`e **bağlandı** ve ekranda **görünmüyor.**

⚠️ Ve tehlikesi büyüklüğünde değil, SESSİZLİĞİNDE: süzgeç tanımadığını
elemiyor — hiç **görmüyor.** Hata yok, uyarı yok, sayı yok. Bir sonraki
oturum `savaslar_*.js` yazarsa o da sessizce kaybolacak.

📌 `CLAUDE.md §7`nin ADIYLA yazdığı tuzağın üçüncü vakası: *"app.js süzgeci
ada değil BİÇİME bağlıydı — yeni yamaların biçimi tanınmadı, ikisi de
ELENDİ."* Orada biçim yüzünden eleniyordu, burada **süzgecin kendisi yok.**

🔴 **VE BENİ DE BİR KEZ KANDIRDI:** bağladıktan sonra "emildi mi" diye
ölçtüm ve kendi yazdığım önek sayacıyla *"SAVASLAR +1"* çıktı — sevindim.
Sonra app.js'in GERÇEK ifadesine baktım: öyle okumuyordu. **Kendi ölçüm
aletim, ölçtüğü şeyi değil BENİM VARSAYDIĞIM şeyi ölçüyordu.**
⇒ Bir emilme sınavı, aletin kendi önekiyle değil **app.js'in kendi
ifadesiyle** yapılır.

**İSTENEN:** `SEFERLER` deseninin birebir eşi. Ve `<script>` satırı
`index.html`de ZATEN DURUYOR (kaldırmadım, gerekçesi orada yazılı) —
süzgeç yazılınca kayıt kendiliğinden görünür.

**KABUL ÖLÇÜTÜ (iki yönlü, `C13`):**
```
GEÇME     süzgeçten önce  görünen savaş sayısı  N
ATEŞLEME  süzgeçten sonra                       N+1  ve Böğürdelen ekranda
```

| 11 | ⑪ SAVASLAR önek süzgeci | 1 (koordinatör ölçümü) | ✓ kod satırıyla · canlı zarar |


---

## ⑫ HİMAYE ŞERİDİ — ÜÇÜNCÜ GÖRSEL KADEME
**🔴 EMRE'NİN DOĞRUDAN KARARI (2 Eylül 2026) · YÜKSEK ÖNCELİK**

Emre'nin kendi ifadesi:
> *"Himaye ince Osmanlı kırmızısı şerit ile o ülke topraklarını çevreleyen
> bir yapı olarak görülsün, iç bölge ülkenin kendi rengi olacak."*
> *"Mohaç sonrası Macaristan himaye olsun — Macaristan etrafını Osmanlı
> kırmızısı ile çevreleyelim, iç bölge kendi rengi olsun."*

```
şema     v:[{f, t, k, himaye:true}]     VERI-YAPISI.md, commit 39278dd
         `himaye` YOKSA bugünkü davranış — 155 kayıt DEĞİŞMEZ
kod yeri js/app.js:885  vassal-dolgu
         js/app.js:891  osmanli-dolgu
```

**İSTENEN:** `himaye:true` taşıyan gövde için
```
İÇ DOLGU   devletin KENDİ rengi (bugünkü tâbi tonu DEĞİL)
ÇEVRE      ince Osmanlı kırmızısı ŞERİT (line katmanı, dolgu değil)
```

### 🔴 BİR YASAK — ve gerekçesi ölçülü
**TARAMA DESENİ KULLANILMAZ.** Tarama bu projede **zaten İŞGAL** demek
(`app.js:970 isgalDesenleriKur`, 83 kayıt). Aynı deseni himayeye de
vermek iki ayrı siyasî durumu tek görsele bindirirdi.
📌 Bu, kararı destekleyen üç gerekçeden biriydi ve Emre'ye o hâliyle
sunuldu; şıkkı seçerken bu gerekçeyi gördü.

### ⚠️ KATMAN SIRASI — `§11`de kayıtlı bir tuzak var
Kuyruğun ① numaralı kalemi (**alfa-harman**) tam bu üç katmanın
saydamlığından doğuyor: `devlet-dolgu` 0.44 · `vassal-dolgu` 0.60 ·
`osmanli-dolgu` 0.68, üçü de saydam ve üst üste gelince renk bozuluyor.
⇒ **Himaye şeridi dördüncü bir saydam katman olarak eklenirse aynı
aileye yeni bir vaka eklenir.** Şerit bir `line` katmanı olmalı (dolgu
değil) ve opaklığı **tam** olmalı; iç dolgu zaten devletin kendi rengi
olduğu için ikinci bir dolgu katmanına gerek yok.

### KABUL ÖLÇÜTÜ (iki yönlü, `C13`)
```
GEÇME     `himaye` alanı OLMAYAN bir tâbi gövde — bugünkü görünüm
          DEĞİŞMEMELİ (155 kayıt)
ATEŞLEME  `himaye:true` bir gövde — iç renk devletin kendi rengi,
          çevresi kırmızı şerit
```
⚠️ Veri henüz inmedi (kademe işaretlemesi ayrı bir kolda). Sınav için
**sahte bir kayıt enjekte etmek yeterli DEĞİL** — `C13`ün bu gece eklenen
üçüncü ayağı: *girdiyi gerçek kaynağından okuma yolu da koşulmalı.*
Veri inince ikinci kez sına.

| 12 | ⑫ Himaye şeridi | Emre'nin doğrudan kararı | ✓ şema yazıldı, veri kolu açık |
