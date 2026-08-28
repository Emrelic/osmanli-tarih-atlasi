# BULGU — TASNİF-F (parti-emrelic-0034)

Oturum: HAZIR KITA SONNET 94 / TASNİF-F · Koordinatör: ORHANGAZİ
Şartname: `oturumlar/TASNIF-BOLUM.md` + `oturumlar/TASNIF.md` + `oturumlar/ORTAK-PAKET-KURALLARI.md`
Kaynak: `denetim/HUKUM-0033-0034.json` → `parti-emrelic-0034` (36 madde, hükmü sirada/olculecek/tekrar) +
orijinal görsel/metinler: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-0034\PARTI.md`

⚠️ **NOT: `denetim/kume/SINIFLANMADI.md`'deki 0034 satırları eksikti (15/36)** — orada yalnız
"içerik talebi" olmayan maddeler listelenmiş, İÇERİK TALEBİ türündeki ~21 madde (Sokollu,
Akçe Krizi, Kanije, padişah dönemleri vb.) o dosyada HİÇ YOK. Gerçek kaynağım
`HUKUM-0033-0034.json`'un `parti-emrelic-0034` bölümüydü — orada 45 maddenin 36'sı hâlâ açık
(9'u zaten `cozuldu`/`zaten-dogru`/`zaten-dogru` olarak kapatılmış, PAKET 0033-0034 oturumunca).

## SAYIYLA — 36 madde

```
🟢 KAPANMIŞ                4   (H-0009 · H-0010 · H-0020 · H-0045)
🔵 KÜMEYE GİT              26  (aşağıda kümesiyle listeli)
🟠 ÇARE İLAN EDİLDİ AMA
   UYGULANMADI             1   (H-0028)
🔴 YENİ İŞ                 5   (H-0011 · H-0017 · H-0022 · H-0023 · H-0040)
```

---

## 🟢 KAPANMIŞ — 4 madde (bkz. `denetim/HUKUM-TASNIF-F.json`)

| madde | konu | kanıt |
|---|---|---|
| H-0009 | "haritada yaprak kıpırdamıyor" | `js/app.js:6510-6519` — Emre'nin 24 Ağustos "2-panel" hükmüyle `panelCarp()` yazılmış, kod yorumu bu şikâyeti birebir alıntılıyor |
| H-0010 | tüm anlaşma maddelerine "anlaşma metni" butonu | `js/app.js` `EKOKUMA_TUR.antlasma` — 41/41 `ANTLASMALAR` kaydı bağlı, yorumda "0034/H-0010" açık referans var |
| H-0020 | Deli Hasan'ın kendi kronoloji maddesi | `data/olaylar_ek8.js:126` — ayrı, TDV kaynaklı madde zaten yazılmış |
| H-0045 | Satu Mare enklav mi | `data/yerlesimler_ek_macaristan.js:254-280` — bilinçli sadeleştirme kararı zaten kayıtlı |

🔴 **En değerli bulgu H-0009 ve H-0010: ikisi de görevimin başında "sirada/olculecek" görünüyordu
ama kod YORUMLARINDA bu maddelere DOĞRUDAN referans vardı** — yani çare zaten uygulanmış,
yalnız hüküm dosyası kapatılmamıştı (`§11`'in "çıktı girdinin bir tur gerisinde kalır" ailesi).

---

## 🔵 KÜMEYE GİT — 26 madde, üç alt-küme

### A) İÇERİK TALEBİ (ek okuma/merak) — 20 madde, altyapı HAZIR, içerik YOK

`js/app.js:5100-5170`'teki EKOKUMA/MERAK buton altyapısı çalışır durumda; `data/ekokuma.js`
(9 kart) ve `data/merak.js` (14 kart) VAR. **Aşağıdaki 20 konunun HİÇBİRİ bu iki dosyada
geçmiyor** (grep ile doğrulandı: sokollu, akçe/tağşiş, kanije/tiryaki, hezarfen, lagari,
evliya çelebi, kemankeş, kâtip çelebi, merzifonlu, hafız osman, sultanahmet, kuyucu murad,
deli ibrahim, barışın önemi — sıfır eşleşme). Buton altyapısı hazır olduğu için kart eklenince
otomatik çıkacak, arayüz kodu değişmesine gerek yok.

| madde | konu |
|---|---|
| H-0013 | Sokollu Mehmed Paşa — kimdir/merak/sebep-sonuç/magazin |
| H-0014 | Büyük Akçe Krizi/tağşiş — Yeni Dünya gümüşü bağlamı |
| H-0018 | Kanije Savunması / Tiryaki Hasan Paşa |
| H-0021 | III. Mehmed'in tahta çıkışı |
| H-0024 | "barışın önemi" — tüm antlaşma maddelerine genel ek okuma (H-0010'dan farklı: mevcut `antlasma` kartları madde hükmü anlatıyor, "barışın önemi" yansıtıcı denemesi ayrı içerik) |
| H-0026 | Kuyucu Murad Paşa / Celâlî isyanları (bu maddenin "standart liste" kısmı H-0022/H-0040 ile aynı — bkz. 🔴) |
| H-0027 | Sultanahmet Camii |
| H-0029 | I. Ahmed dönemi Ekberiyet usulü |
| H-0030 | I. Mustafa'nın cülûsu |
| H-0031 | II. Osman'ın hâli |
| H-0032 | I. Mustafa'nın hâli (kızlarağası) |
| H-0033 | IV. Murad |
| H-0034 | Hezarfen / Lagari / Evliya Çelebi |
| H-0035 | IV. Murad'ın içki yasağı |
| H-0038 | Sultan Deli İbrahim |
| H-0039 | Kemankeş Mustafa Paşa |
| H-0041 | Sultan İbrahim'in hâli ve katli |
| H-0042 | Kâtip Çelebi |
| H-0043 | Merzifonlu Kara Mustafa Paşa |
| H-0044 | Hafız Osman — görsellere hat sanatı örnekleri (kısmen görsel/asset işi, kısmen içerik) |

→ **KRONOLOJİ İÇERİK** oturumuna (hâlihazırda aktif — `data/olaylar_ek17.js` üzerinde çalışıyor).

### B) SAHİPLİK-TEYİDİ / EMİLME — 5 madde, VERİ SAHİPLİK'in aktif kapsamında

| madde | konu | ölçüm |
|---|---|---|
| H-0001 | İran koridoru benekleri (Ordubat vb) | `_yer_ara.py`: **Ordubat 0 kayıt** — doğrulandı, gerçek boşluk |
| H-0002 | Halepçe enklav görünümü | Kendi görseli açıldı (1535-07-21) — Kerkük/Halepçe arası dar bir "boyun" var, İran koridoru enklav ailesiyle (H-0001 ile) aynı kök |
| H-0005 | Abadan/Hüveyze alınmamış mı | `_yer_ara.py`: **Abadan 0 kayıt** (gerçek boşluk) · **Havîza VAR**, hiçbir zaman `d:` (Osmanlı) taşımıyor — TDV'den teyit gerekiyor |
| H-0019 | "bu şehirler kime aitmiş" | Görsel açıldı (1602-01-01, Ahvaz/Dizfûl/Şüşter/Havîza bölgesi) — **H-0005 ile birebir aynı coğrafya**, aynı soru |
| H-0036 | Kırım Hanlığı Bozkırı / Don Kazak Ordası — nokta yoğunluğu | Görsel açıldı (1637-06-18) — 0033 paketindeki H-0006/07/08 (Çağatay/Kazak/Sibir Hanlığı, "bozkır nokta partisi gerekiyor") ile AYNI KÜME, farklı bölge |

→ **VERİ SAHİPLİK** oturumuna (hâlihazırda "emilme" kümesinde 16 madde işliyor — bu 5 tanesi
aynı yöntemle kapatılabilir) ve H-0001/H-0002 ayrıca **DEĞİŞMEZ 7 ENKLAV** oturumuna (İran
koridoru enklav sorgusu zaten onun kapsamında, `denetim/BULGU-ENKLAV-SORGU.md`).

### C) BAŞKA AKTİF OTURUMUN KAPSAMINDA — 1 madde

| madde | konu | hangi oturum |
|---|---|---|
| H-0016 | Ferhat Paşa Antlaşması TAM sınır taraması (Şirvan/Karabağ/Gence/Tebriz) | **FERHAT PAŞA 1590** — M-1382/M-1386/M-1388'de bu iş ÜZERİNDE ÇALIŞIYOR, mükerrer atama olmasın |

---

## 🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI — 1 madde

**H-0028** — Libya çölünde (Gat/Zilla/Sebha/El Katrun/Calu/Ecdabiye/Tobruk çevresi) anlamsız
fazla Osmanlı boyaması. Bu, `0033-H-0021` ile birebir aynı kusur ve **ÇÖL BOYAMA oturumu zaten
teşhis etti**: `denetim/BULGU-COL-BOYAMA.md` + motor tarifi hazır (dolgu kapısının `TABİ`
kademesine geçirilmesi, öngörü: `−791.491 km²` doğrudan Osmanlı → tâbi/sahipsiz). Tahtada
(M-1340/M-1341, 27 Ağustos) "kilit kalktı, kalem hazır" diye not düşülmüş ama **`arac/uret_petek.py`ye
hiç işlenmemiş** — karar Emre'de bekliyor. Veri karşılığı hâlâ yok, kusur hâlâ haritada.

→ Koordinatöre: bu, ÇÖL BOYAMA'nın kendi kapsamı; TASNİF-F olarak yalnız "hâlâ uygulanmadı"
teyidini veriyorum, motora dokunmadım (dosya sahipliğim değil).

---

## 🔴 YENİ İŞ — 5 madde, iki ayrı konu

### Gürcistan'ın tek kimlik olması — H-0011 · H-0017 · H-0023

Üçü de aynı kök: `gurcistan` kimliği 1281-1801 arası kesintisiz TEK kayıt; Kartli/Kaheti/
İmereti/Samtskhe ayrımı yok, kuzey Kafkas sırtına dar bir "üçgen" taşıyor (H-0011 görseli),
Tiflis/Gence'nin İran'a kaybından sonra yeni yerlerin İran'a mı Gürcistan'a mı ait sayılacağı
belirsiz (H-0023).

**Ölçtüm:** eski `KAFKAS KRONOLOJİ` oturumu (`tahta.json` M-0872–M-0923) tam da bu bölgede
çalıştı (Şirvanşah, Van hattı, Kartli/Kaheti köşe kimlikleri) ama Gürcistan'ın kendisini
bölme kararını hiç ele almadı — o oturum kapandı.

**Ne gerekiyor:** Emre'nin kararı — Kartli/Kaheti/İmereti/Samtskhe alt-kimliklere bölünsün mü,
yoksa kuzey koridora nokta eklenip tek kimlik korunsun mu (`CLAUDE.md §3.5.1`'deki "iki uç
ölçülür" ilkesi burada da geçerli). Dosyalar: `data/devletler.js` (yeni kimlikler), ilgili
`data/yerlesimler_*.js` (nokta/dönem). Yeni bir KAFKAS-tipi oturum gerektirir.

### Standart "ek okuma" taksonomisi — H-0022 · H-0040 (H-0026'nın "standart" kısmı da buraya)

Emre üç ayrı maddede (H-0022, H-0026, H-0040) aynı 9 kategoriyi istiyor: *ek okumalar · merak ·
kimdir · magazin · bilimsel-teknik · dış ülke yankıları · şok haberler · tartışma ·
sebep-sonuç.* **Ölçtüm** (`js/app.js` `EKOKUMA_TUR` sözlüğü): kodda yalnız **4 tür** tanımlı
(`sebep-sonuc`, `magazin`, `merak`, `antlasma`) — **5 tür (kimdir, bilimsel-teknik,
dış-ülke-yankıları, şok-haberler, tartışma) hiç yok.**

**Ne gerekiyor:** Emre kendi metninde (H-0026) standardı zaten dikte etmiş — "senin-kararin"
beklemiyor, **kodlanması** bekleniyor. İki ayrı iş: ① `EKOKUMA_TUR`a 5 yeni tür eklenmesi
(**ARAYÜZ** oturumunun dosyası, `js/app.js`) ② her yeni türün kartlarının yazılması
(**İÇERİK** oturumu, `data/ekokuma.js`/`data/merak.js`). Sırası önemli: tür kod'a girmeden
içerik kartı yazılırsa buton hiç çıkmaz (`EKOKUMA_TUR` süzgeci tanımadığı türü basmaz).
⇒ Önce ARAYÜZ, sonra İÇERİK.

---

## AKSAKLIK YOK — bekletecek bir şey bulmadım

Şartname net, kaynak dosya (`HUKUM-0033-0034.json`) tutarlıydı, tek fark `SINIFLANMADI.md`'nin
eksik listesiydi (yukarıda not edildi, koordinatöre ayrıca bildiriliyor).
