# ARAYUZ-UFUK-KIRPMA-1010: "tarihe git" ufka kırpma ve en yakın olay (bayat ufuk varsayımı)

Oturum: ARAYUZ-UFUK-KIRPMA-1010 (UMIT, yazıcı; APPJS-TARIH'in doğrudan devamı) · 10 Ekim 2026 · model **Opus**
Ağaç: `C:\atlas-ufuk`, `origin/main` `1d5e2dfd` + A2 + APPJS-TARIH (ayrı worktree, detached; kaldırıldı).
Teslimde `origin/main` = `792bf4a4`. Aradaki commit'lerde `js/`, `index.html` ve `odak_cozum.js` farkı 0.
Dokunulmayanlar: `suzgec.js` · tuz dosyaları · `denetle.py`. Commit, push ve stash yok.
Yerel sunucu (8768, kendi PID'im) iş bitince durduruldu.

## 🔴 Önce bir düzeltme: önceki teslimdeki yan gözlemim YANLIŞTI
APPJS-TARIH teslimimde şunu yazmıştım: *"olaylar[0] ufuk dışında (680)"*. Ölçünce bunun doğru olmadığı çıktı:
- Ana kronolojideki 1.800 maddenin hepsi ufuk içinde: ilk madde `1281-01-01`, son madde `1924-01-01`, ufuk dışı madde **0**.
- "680" bir tarih alanı değil, maddenin **`gun:` metni**: `"680 (1281-82)"`. Bu Hicrî 680 yılı (`OLAYLAR_EK5`, "Ertuğrul Gazi'nin ölümü…", `t:"1281-01-01"`).
- Durum satırı bu metni `olayTarihYazi` ile olduğu gibi basıyor, bu yüzden bir MS 680 maddesi varmış gibi okunuyor.

⇒ "Ufuk dışı madde en yakın seçiliyor" kusuru bugünkü veride YOK. Asıl bayat varsayım başka yerde. Onu bu iş ölçtü ve düzeltti (aşağıda).

## ① Ufuk bilgisi nereden okunuyor, tek otorite ne olmalı (ölçüldü)
- **Tek otorite `arac/girdi.py` `UFUK = ("1000-01-01", "1945-09-02")`.** Motor EPOK'unu ve bitiş nöbetçisini buradan türetiyor.
- Arayüzdeki **tek kopya** `js/app.js:207-208` `BASLANGIC`/`BITIS`. Yorumda "hiçbir yerde ufuk tarihi ikinci kez yazılmaz" yazıyor.
- Bu kopya kendi başına bırakılmamış: `arac/denetle_yayin.py:740-790` "UFUK EŞİTLİĞİ" kapısı `app.js` ile `girdi.py`'yi her yayında karşılaştırıyor (`VERI_UFKU` dahil).
- Ufuk JS'te ayrı bir dizi olamaz. `odak_cozum.js` ufku `"var BASLANGIC = gunIdx("` satırından kesiyor ve yorum bunu açıkça yasaklıyor.
- ⇒ Yapı doğru, yeni bir otorite kurmadım.
- Kırpma kararı artık **tek işlevde**: `ufkaKirp(gi)` yalnız `BASLANGIC`/`BITIS` okuyor. "En yakın olay" araması da `[BASLANGIC, BITIS]` dilimine bağlandı.

## ② Kusur: `calistir`ın `!kirpildi` şartı (bayat sabit)
- `UZAK_GUN` kuralı şöyleydi: en yakın madde 5 yıldan uzaksa maddeye değil tarihin kendisine git. Ama kural **kırpılmış hedefte uygulanmıyordu**.
- Bu, ufuk = veri penceresi (1281–1923) iken doğruydu: kırpılan uçta madde VARDI.
- Ufuk 1000–1945'e açılınca iki uç da boşaldı. Ölçülen eski davranış (APPJS tabanı):
  - `"MÖ 50"` ve `"500"` → **1281** maddesine gidiyordu (ufkun başı 1000'e 281 yıl uzak).
  - `"2000"` ve `"1945-09-03"` → **1924** maddesine gidiyordu (ufkun sonu 1945'e 21 yıl uzak).
- Yeni davranış: kural kırpılmış hedefte de geçerli.
  - "MÖ 50" ve "500" → `tarihAyarla(1000-01-01)`. Durum: *"Atlas 1000–1945 arasını kapsıyor (yazdığınız tarih öncesinde); ufkun başına götürüldü: 1000 — ana kronolojide bu yıla yakın madde yok …"*
  - "2000" → `1945-09-02` (aynı biçimde, ufkun sonuna).
  - Kırpılan ucun 5 yıl içinde madde varsa ONA gidiliyor ve eski "en yakın olaya götürüldü" metni basılıyor (sentetik B5/B6).
- `enYakinOlayBul` adayı yalnız ufuk içinden seçiyor. Bugün ufuk dışı madde 0 olduğu için sonuç birebir aynı. Kural ileride ufuk dışı bir OLAYLAR maddesi eklenirse diye yazıldı.

### Odak gezintisi: ölçüm koordinatörün tarifinden AYRILMAYI gerektirdi
- Koordinatör "en yakın ufuk içinden seçilsin" dedi. Önce bunu odak yoluna da uyguladım ve ölçtüm.
  - 865 künyenin **125'i** ufuk dışı madde taşıyor (`kronoloji_cok_500_1000` vb.).
  - Bu maddeler odak listesinde **okunur**: `ufukDisiIsaretle`, "okunur, harita bu tarihe gidemez". Yani tasarım onları kullanıcıya açıyor.
  - Ufuk içi süzgeç, bu künyelerde "tarihe git"i ya o maddelere hiç götürmüyordu ya da "madde yok" diyordu.
- Asıl bayat varsayım **aramadan ÖNCE kırpmak**. Eski kodda "500" yazan, 500 maddesine değil, kırpılmış 1000'e en yakın maddeye (ör. 990) gidiyordu.
- ⇒ Odak yolunda arama **kırpılmamış günle** yapılıyor.
  - Bulunan madde ufuk dışıysa durum satırı bunu söylüyor: *"Madde atlasın zaman ufkunun (1000–1945) dışında — okunur, harita 1000'de kalır: …"*
  - `ODAK_GEZINTI.enYakin`'e süzgeç KONMADI.
  - Ufuk içi girişte hedef değişmediği için gidilen madde birebir aynı (C3).
- **Karar koordinatörün:** "odak da ufuk içinden" denirse değişiklik tek satır (`enYakin`'e `gi < BASLANGIC || gi > BITIS` süzgeci). Bedeli: 125 künyede ufuk dışı maddelere "tarihe git" ile ulaşılamaz.

## ③ 1281 / 1923 / BASLANGIC / BITIS taraması (bütün `js/*.js` ve `index.html`)
Kod satırları (yorum dışı). `1281`/`1923`'ün geçtiği bütün kod satırları:

| yer | ne | hüküm |
|---|---|---|
| `app.js:209 VERI_UFKU = ["1281-01-01","1923-10-29"]` | veri penceresi (ufuk değil), `girdi.VERI_UFKU`'nun kopyası | **bilinçli**. `denetle_yayin` eşitliği sınıyor |
| `app.js:3863 EPOK_DAMGASI = "1281-01-01"` | kale "fethedilmiş" bayrağını epok penceresinde bastırıyor | **bilinçli, ama kırılgan**. Anlamı `VERI_UFKU[0]` (veri kapısı). ⚠️ Değişkene bağlanamıyor: bu satır `odak_cozum.js`'in "EPOK" kesiminin ilk satırı ve o kesim `BASLANGIC` kesiminden ÖNCE koşuyor, `VERI_UFKU` orada tanımsız ⇒ odak nöbetçisi ÖLÇEMEZDİ. Ölçüm: veride `1281-01-01`de başlayan **2.527** d/s dönemi var, `1000-01-01`de (UFUK[0]) başlayan **0** ⇒ bugün doğru. **Öneri:** `denetle_yayin` UFUK EŞİTLİĞİ'ne `EPOK_DAMGASI == VERI_UFKU[0]` sorusu eklensin (kapı sahibinin işi) |
| `app.js:3361` lejant metni "1923'ten geriye sarılmış" | D hatlarının sarılma günü (veri) | **bilinçli** |
| `d_katman.js:415 _D_PENCERE_SONU = "1923-10-29"` | D hatlarının sarılma günü (veri değeri, 196/349 kayıt) | **bilinçli** |
| `d_katman.js:432-433` *"29 Ekim 1923 atlasın pencere sonudur"* | ufuk 1945'e açılınca **YANLIŞ** bir cümle | **düzeltildi**: "atlasın **veri penceresinin** sonudur" |

`BASLANGIC`/`BITIS`'in geçtiği 29 kod satırı:
- Hepsi değişkeni okuyor, hiçbirinde tarih yazılı değil ⇒ ufuk değişirse kendiliğinden uyuyor. Bu siteler: eksen, `gunKonum`, kırpma, oynatma, ⏮/⏭ uçları, yerleşim çubuğu, `ufukDisiIsaretle`, odak penceresi.
- `VERI_BASI`/`VERI_SONU` kullanan 7 site (`osmanliAkisiBos`, madde farkı vb.) veri penceresini soruyor. Bu doğru.
- **Bayat yorum düzeltildi:** `app.js:11871-11873` "BASLANGIC günü atlanır: 1281-01-01…" diyordu. Kod ise (`:11963`) `VERI_BASI`/`VERI_SONU` okuyor. Ufuk açılınca ikisi ayrıldı; kod doğru, yorum bayattı.
- `index.html`'de `1281`/`1923` yalnız yorumlarda ve dosya adlarında geçiyor. Kod 0.

## SINAV: `denetim/ARAC-UFUK-KIRPMA-SINAV-1010.js`
`tariheGitKur` IIFE'si `app.js`'ten metinle kesiliyor. Sahte giriş kutusuna **Enter olayı** veriliyor. Ölçülen: durum metni ve `tarihAyarla`/`olayaGit`/odak çağrıları.
- Eski kol: `--eski-app <dosya>` (benim koşum: APPJS'li taban) ya da `<ref>:js/app.js`.

| | yamalı | yamasız (A2+APPJS tabanı) |
|---|---|---|
| sonuç | **22/22, çıkış 0** | **13/22, çıkış 1** |
| A: gerçek veri | "MÖ 50"/"500" → 1000-01-01 · "2000"/"1945-09-03" → 1945-09-02 · "29 Mayıs 1453" → İstanbul'un Fethi · "1000" → 1000 (değişmedi) | 1281 ve 1924 maddelerine gidiyordu |
| B: sentetik | ana akış ufuk dışını seçmiyor (950 → 1002, 1948 → 1944) · ufuk içinde madde yoksa `null` · uca yakın madde varsa ona gidiyor · odak "500" → 510 (990 değil) | 900 · 1950 · 990 |
| C: GERİLEME | `enYakinOlayBul` ufuk içi **her gün (345.399)** fark 0 · ufuk içi **4.638 giriş** (946 yıl × 3 biçim + bütün olay günleri) durum ve çağrı fark 0 · odak tam yol 865 künye × 380 giriş = **328.700**: gidilen madde fark 0, beyansız durum farkı 0 (beyanlı 7.528: gidilen madde ufuk dışı; "✓" yerine "okunur, harita …'de kalır" notu) | — |

APPJS-TARIH sınavının A46 sorusu `_durumYaz("ℹ️ " + _yilYazi(hedefGi)` metnini arıyordu. Durum satırı yeniden kurulduğu için düştü. Soru aynı özelliği sınayacak şekilde güncellendi (yıl `_yilYazi(hedefGi)` ile basılıyor, `idxTarih(hedefGi).y` yok). Güncelleme bu diff'in içinde; o sınav yine **79/79**.

### Isırma (`sinav_isirma.py`, `--taban origin/main` `792bf4a4`, 0 geride, `--diff A2 APPJS UFUK`)
```
A çıkış 1 · 12/22   B çıkış 0 · 22/22
ISIRIYOR 10 (A1-A4 B2 B4 B5 B7 B8 B11) · TESADÜF 12 · İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0 · çıkış 0
worktree ikisi de kaldırıldı
```
- A1 ("MÖ 50") payının bir kısmı APPJS'nin, çünkü A kolu MÖ girişini ayrıştıramıyor.
- TESADÜF = süreklilik soruları (A6-A8, B10, C1-C3) + iki kolda da aynı olan sentetik uçlar (B1, B3, B6) + eski kolu doğrulayan sorular (A5, B9).

### Odak kapısı (yamasız = A2+APPJS tabanı)
`odak_olc.py` iki kolda çıkış 0 ve **`cmp` ile birebir**. `ODAK-KAPI-SINAV.py` iki kolda çıkış 1 (taban kırığı aynı) ve **`cmp` ile birebir**.

### Tarayıcı (yerel sunucu, `127.0.0.1:8768`)
- ⚠️ Gerçek klavye girişi yapılamadı. Pane gizli/küçültülmüş olduğu için sayfa çizmedi; `triple_click` "tab not on screen" ile reddedildi.
- Bunun yerine sayfanın **kendi dinleyicisine** `keydown Enter` olayı gönderildi. Sonuçlar:
  - "MÖ 50" → gösterge 1000-01-01, "ufkun başına götürüldü"
  - "500" → 1000-01-01
  - "2000" → 1945-09-02, "ufkun sonuna götürüldü"
  - "29 Mayıs 1453" → İstanbul'un Fethi
  - "1300" → Köprühisar
- Konsol hatası **0**.
- Kanıt "sayfa kırılmadı + giriş kutusu doğru". "Elle klavyeyle sınandı" kanıtı DEĞİL.

## İNİŞ
Sıra: **A2 → APPJS-TARIH → ARAYUZ-UFUK-KIRPMA**. `js/app.js` ve `js/d_katman.js` değiştiği için iniş commit'inde `py arac/surum_damgala.py` koşmalı.

## ① ÖLÇTÜM
- Sınav 22/22 · yamasız 13/22. Isırma GERİLEME 0, EŞLEŞMEDİ 0.
- Gerileme: 345.399 gün · 4.638 giriş · 328.700 odak yolu, hepsinde fark 0.
- Odak araçları birebir.
- Tarama: kodda `1281`/`1923` geçen 5 satır var. 1 bayat metin düzeltildi, 1 bayat yorum düzeltildi, `EPOK_DAMGASI` gerekçeli bırakıldı. `BASLANGIC`/`BITIS`'in 29 kod satırının hepsi değişkenden okuyor.
- Önceki teslimdeki "680 ufuk dışı" gözlemim yanlıştı: Hicrî `gun:` metni. Ana kronolojide ufuk dışı madde 0.
## ② BULAMADIM / ÖLÇMEDİM
- Gerçek klavye/fare ile tarayıcı girişi yapamadım (pane çizmiyor).
- Odak sınavında `gezListesi` yerine künye kronolojileri kullanıldı. Gerçek birleşik liste (`birlesikTopla`) daha geniş olabilir.
## ③ İSTİYORUM / ÖNERİYORUM
1. Odak yolu kararı: kırpılmamış arama (benim önerim, ufuk dışı okunur madde korunur) mı, yoksa ufuk içi süzgeç mi? İkincisi tek satır.
2. `denetle_yayin` UFUK EŞİTLİĞİ'ne `EPOK_DAMGASI == VERI_UFKU[0]` sorusu eklensin. Kapının sahibine ayrı kalem.
3. Veri gözlemi (bana ait değil): `OLAYLAR_EK5` 1281 maddesinin `gun:"680 (1281-82)"` metni, Hicrî yılı önce yazdığı için ekranda MS 680 gibi okunuyor. Kronoloji sahibi isterse "1281-82 (H. 680)" biçimine çevirebilir.

YENİ DOSYALAR: `C:\atlas-umit\denetim\ARAYUZ-UFUK-KIRPMA-1010.diff` (`js/app.js` · `js/d_katman.js` · `denetim/ARAC-APPJS-TARIH-SINAV-1010.js` A46 · YENİ `denetim/ARAC-UFUK-KIRPMA-SINAV-1010.js`) · `C:\atlas-umit\denetim\ARAYUZ-UFUK-KIRPMA-1010.md` · `C:\atlas-umit\denetim\ARAC-UFUK-KIRPMA-SINAV-1010.js`
Taban: `1d5e2dfd` + A2 + APPJS-TARIH. Diff sha256 `b97007558e0c8c3e04ffe39cb3ec42c9f11675ab916d884928fb26758e7f4e50` (382 satır).
`git apply --cached --check` (geçici index), A2 → APPJS → UFUK zinciri: `1d5e2dfd` ✓ · `792bf4a4` (teslimdeki `origin/main`) ✓.
