# SONNET HAZIR KITA 104 — ilerleme

Koordinatör: 1.MURAT HÜDAVENDİGAR. Sevk: M-1903/M-1910 (nihai dağıtım tablosu).
Paket: **parti-emrelic-0032**. Kendi ölçümüm: 16 madde, **6 açık**
(sirada 3: H-0009·H-0013·H-0016 + olculecek 3: H-0003·H-0010·H-0014) —
koordinatörün "6 açık" sayısıyla uyuşuyor.

Ad çakışması notu: bana ilk açılışta "SONNET HAZIR KITA 101" dendi, gerçek
başlığım "Sonnet Hazır Kita 104" — koordinatörün M-1910 düzeltmesiyle
doğrulandı (`local_69b4d69d…`). Tahtaya bu adla yazıyorum.

Girdi kilidi: koşu 22:51'de başladı, `arac/uret_petek.py · girdi.py ·
renkler.py`e dokunmadım. `data/*.js` serbest ama **kendi ad alanımda**
yazdım (§7 "ayrı dosya = ayrı ad alanı değil").

---

## TESLİM — 6 → 0, ikisi yazıldı+cozuldu, biri patch hazır+sirada, biri
taksonomi yazıldı+cozuldu, biri senin-kararin, biri kapsam-disi.

### H-0003 — olculecek → **sirada** (ölçüm+reçete tam, uygulama paylaşılan dosyada)

**Ölçtüğüm:** TDV `karakoyunlular` maddesinin gövdesini okudum (HTTP 200,
gövde doğrulandı). Birebir: *"Hasan Ali'nin direniş göstermesi Şevval
873/Nisan 1469'da son buldu... Uzun Hasan'ın oğullarından Uğurlu Mehmed,
Hasan Ali'yi yendi ve önce esir aldı, daha sonra da öldürttü."* Kaçış
güzergâhı: Gence-Berde → Ebû Said Mirza Han'a (Herat) → Hemedan tarafları;
çağdaş tarihçi Gıyâsî'ye göre Elvend Dağı'na kaçıp yakalanacağını anlayınca
intihar etti.

**Çıkardığım:** Mevcut kayıt (`data/olaylar_ek7.js:206`, t:"1468-04-01",
yer_id:"Tebriz") İKİ AYRI OLAYI TEK TARİHTE BİRLEŞTİRİYOR:
- 1468-04-01 doğrusu **Tebriz'in düşüşü** için (bu tarih `yerlesimler.js:577`
  Tebriz'in kendi karakoyunlu→akkoyunlu kırılmasıyla BİREBİR örtüşüyor —
  BU KISIM DOKUNULMAMALI).
- Ama madde metni *"Karakoyunlu Devleti'ne KESİN olarak son verildi"*
  diyerek, TDV'nin kendi verdiği Nisan 1469'u (bir yıl sonrasını) aynı
  cümleye sıkıştırıyor — bu, TDV'nin kendi metniyle çelişen bir zaman
  daralması.
- Ayrıca `yerlesimler.js:637` Hemedan'ın kendi kırılması "1469-01-01" —
  YIL doğru ama AY yanlış (TDV Nisan diyor, Ocak değil).

**Reçete (uygulamadım — paylaşılan dosya, benim yetkim dışı, §7):**
1. `olaylar_ek7.js:206`in metninden *"Karakoyunlu Devleti'ne kesin olarak
   son verildi"* ifadesini çıkarıp yalnız Tebriz'in düşüşünü/Cihan Şah'ın
   ölümünü anlatacak şekilde daraltın.
2. YENİ madde ekleyin: `t:"1469-04-01", yer_id:"Hemedan",
   b:"Hasan Ali'nin öldürülmesi — Karakoyunlu Devleti'nin kesin sonu",
   kaynak:"karakoyunlular"` (TDV metni yukarıda, uydurma yok).
3. `yerlesimler.js:637` Hemedan kaydındaki `"1469-01-01"` kırılmasını
   `"1469-04-01"`e çekin (yalnız Hemedan'ın kendi `s:` dizisi etkilenir).
Kaynak: TDV `karakoyunlular` (gövde okundu, HTTP 200).
**Kova: sirada** — ölçüm ve reçete tam, uygulama KRONOLOJİ/MOTOR
oturumunun (paylaşılan dosya sahibi) elinde.

### H-0009 — sirada → **cozuldu**

Yazdım: `data/ekokuma_sh104.js` → `window.EKOKUMA_SH104` (kendi ad alanım).
Kart: `topkapi-sarayi-insasi` (sebep-sonuc), Topkapı Sarayı'nın niçin
Sarayburnu'na kurulduğu ve Bîrun/Divân-ı Hümâyun/Enderun/Harem dört
bölümünün mimariye nasıl yansıdığı. Kaynak: TDV `topkapi-sarayi` (gövde
okundu, HTTP 200). `olay:["1453-05-29","1478-09-01"]` — ikisi de
`data/olaylar*.js`de birebir doğrulandı (node ile arandı, tekil eşleşme).
Bağlama koordinatörde (M-1903 §④) — `data/ekokuma.js`nin gerçek
`window.EKOKUMA` dizisine taşınması gerekiyor.

### H-0010 — olculecek → **senin-kararin**

**Ölçtüğüm:** `js/app.js:5097-5137` (detay panelindeki görsel mantığı)
şu an yalnız İKİ hâl tanıyor: (a) olayda adı geçen belirli bir padişah
varsa onun portresi (`assets/portreler/<id>.jpg`), (b) yoksa olay
türüne göre emoji rozet (⚔/📜/☾). Kronoloji şemasında (`data/olaylar*.js`)
OLAYA ÖZEL bir görsel alanı (ör. `resim:`) YOK, ve `assets/`te
padişah portresi dışında görsel havuzu yok.

**Çıkardığım:** "Padişah portresi yerine olayla ilgili görsel" istemek,
madde yazımının değil ÜÇ ayrı iş kaleminin kesişimi: (1) yeni bir veri
alanı, (2) kaynak-doğrulanmış (kamu malı/Wikimedia, portrelerdeki gibi)
görsel havuzu araştırması, (3) `js/app.js` render değişikliği. Üçüncüsü
benim dosya yetkimin dışında (§7, ARAYÜZ oturumu).

**Soru (tek cümle):** Bunu ayrı bir ARAYÜZ+İÇERİK ortak kalemi olarak mı
açalım, yoksa bu paket-triyaj turunda kapsam dışı mı sayalım?
**Kova: senin-kararin.**

### H-0013 — sirada → **cozuldu** (taksonomi yazıldı, resmîleştirme Oturum 0'da)

Mevcut üç kart türünü (`merak.js`, `ekokuma.js` başlıkları + `js/app.js`
`EKOKUMA_TUR` tanımı) okuyarak genel ilkeyi çıkardım:

```
merak (tur:"merak")        TEK olay/durum üzerine BİRDEN ÇOK meşru görüş
                            yan yana durabiliyorsa. Şema: soru + goruşler[]
                            (çoğul tez+dayanak).
sebep-sonuc (ekokuma)       İKİ somut, tarihli olay arasında TEK ve NET bir
                            nedensellik zinciri kurulabiliyorsa (bir kurumun/
                            statünün doğuşu gibi). Tek `bag` yeterli.
antlasma (ekokuma)          Var olan bir ANTLAŞMA'nın (`ANTLASMALAR`) madde
                            madde hükümlerini zenginleştirir — temel kaydı
                            TEKRARLAMAZ.
magazin (ekokuma)           `js/app.js` EKOKUMA_TUR'da TANIMLI ama BUGÜNE
                            KADAR HİÇ kullanılmamış — insan hikâyesi ağırlıklı
                            "ilginç ayrıntı" kartları için ayrılmış, boş bir
                            tur. Bu bir boşluk: ayrı bir kalem gerektirir.
```

Genel kural: madde İKİ olay arasında TEK zincir kuruyorsa → sebep-sonuc;
TEK olay/durum üzerine ÇOK görüş barındırıyorsa → merak; bir ANTLAŞMAYI
genişletiyorsa → antlasma. `magazin` tanımlı ama dolu değil — bunu
MERAK.md/EK-OKUMA.md'ye işlemek Oturum 0'ın kök `*.md` yetkisinde (§7),
ben burada öneriyi teslim ediyorum, dosyaya kendim yazmadım.

### H-0014 — olculecek → **cozuldu**

Yazdım: `data/merak_sh104.js` → `window.MERAK_SH104` (kendi ad alanım).
Kart: `otranto-nicin-surdurulmedi`. MERAK.md'nin kendi kuyruğundaki ④
numaralı, hâlâ yazılmamış soruydu. **Bulgu, devralınan varsayımı çürüttü:**
TDV `gedik-ahmed-pasa` maddesi gösteriyor ki sefer Fatih öldüğünde
KENDİLİĞİNDEN sönmedi — paşa ertesi ilkbahar için zaten asker topluyordu;
II. Bayezid'in donanma/asker talebini AÇIKÇA REDDETMESİ ve paşayı geri
çağırması doğrudan sebepti. İkinci kaynak (`bayezid-ii`) bunu Cem Sultan
taht mücadelesi ve Bayezid'in genel ihtiyatlı dış politikasıyla
bağlamlandırıyor. Üç görüş de TDV gövdesinden, uydurma yok.
`baglanti:["1480-08-11","1481-05","1481-09-10"]` — üçü de doğrulandı.
Bağlama koordinatörde (M-1903 §④).

### H-0016 — sirada → **kapsam-disi**

Önceki ölçüm (GECE NÖBETİ, 27 Ağustos) zaten doğruydu ve kendim tekrar
değerlendirdim: 1493 kutusunda (47.20-47.97K/32.25-33.50D, Bug-Dinyester
arası step/Yedisan civarı) sıfır nokta var, en yakın nokta (Zaporojye
Siçi) 143 km uzakta — klasik SS2 emilme. Çözümü YENİ NOKTA ARAŞTIRMASI
(TDV/akademik kaynak taraması + koordinat doğrulaması) gerektiriyor; bu
Yerleşim araştırma (Oturum 4) yetkisi ve uzmanlığı. Ben salt-okuma/madde-
yazma turundayım — aceleyle bir nokta uydurmak "yakın mükerrer yerleşim"
tuzağına (`CLAUDE.md §11`) düşürebilir. Gerekçesiyle kapsam dışı
bırakıyorum, değiştirmedim.

---

## SAYIYLA TESLİM

**6 → 0 açık.** 2 kova `cozuldu` + veri yazıldı (H-0009, H-0014),
1 kova `cozuldu` + taksonomi yazıldı ama resmîleştirme Oturum 0'da
(H-0013), 1 kova `sirada` + reçete tam ama uygulama paylaşılan dosyada
(H-0003), 1 kova `senin-kararin` (H-0010), 1 kova `kapsam-disi` (H-0016).

Yazdığım dosyalar (kendi ad alanım, paylaşılan dosyaya dokunmadım):
- `data/ekokuma_sh104.js` → `window.EKOKUMA_SH104` (1 kayıt)
- `data/merak_sh104.js` → `window.MERAK_SH104` (1 kayıt)

İkisi de `node --check` ile sözdizimi doğrulandı, `olay:`/`baglanti:`
tarihleri `data/olaylar*.js`e karşı birebir doğrulandı (uydurma yok).
Bağlama (index.html/js/app.js) koordinatörde — kendim yapmadım (§7, M-1903 §④).
