# ANTLAŞMA OYNATICISI — GENELLEME TASARIMI (13 Kasım 2026)

Yazan: EMRELIC (KASA/ANTLAŞMA-1113 koordinatörü isteği). Koordinatör notu: `denetim/ANTLASMA-DURUM-1113.md`
(dal `claude/antlasma-1113-a63cee`) bu dosyaya bağlanır. **Bu belge tasarımdır; kod yazılmadı.**
Taban: `origin/main` a96162a9c. Ölçümler 13 Kasım 2026, EMRELIC, node + `vm` ile 293 kronoloji/olay dosyası (18.631 madde).

## 1 · Hedef (Emre)
Her Osmanlı antlaşması Lozan standardında: kronoloji maddesinde **oynatıcı düğmesi**; maddeleri tek tek oynatsın;
haritada **ÖNCE / SONRA** durumunu göstersin. Lozan ve Sevr bozulmayacak (geriye uyumlu).

## 2 · Mevcut durum (okundu, değiştirilmedi)
- `js/antlasma_oynatici.js` (190 satır, UMIT): `window.ANTLASMA_MADDELERI` kayıtlarını okur; `window.obGoster`u sarar,
  eşleşen maddenin `#ob-ozel` kutusuna **"▶ Maddeleri tek tek oynat"** düğmesi ekler; panelde ⏮ ◀ ▶ ▶▶ + kaydırıcı,
  6,5 sn aralık, her adımda `ozet` + haritada `yer[]` işaretleri (HTML Marker) + `fitBounds`/`easeTo`.
  **Harita tarihine dokunmaz**: yalnız işaret + kamera.
- Kayıt şeması (gerçek): `{id, ad, t:"YYYY-MM-DD", kadraj:[b,g,d,k], kaynak, yerler:{ad:[lon,lat]},
  adimlar:[{no, bolum, ozet, yer:[ad…], konu, kaynak?, dogrulanmadi?}]}` (`bolge_taraf` YOK).
  Lozan 143 md + 16 ek, Sevr: 1563 / 2183 satır veri.
- Eşleşme: `eslesen(o)` = kronoloji maddesinin `b`si kayıt `ad`ını **içerir** VE `|t − kayıt.t| ≤ 60 gün`.
  `js/antlasma_harita.js` ("Haritada gör" / "Savaştan önce" / "Farka odaklan", `ANTLASMA_HARITALARI`) AYNI deseni kullanır
  (iki dosya aynı desen, iki ayrı kopya).
- Harita tarihi API'si: `tarihAyarla(gi)` (js/app.js:12035, genel `function`; kaydırıcıyı ve haritayı günceller), kırpma kilidi
  `_kirpmaKilitli`, antlaşma farkı `ANT_FARK` (app.js:12727, `antlasmaFarkiHesapla/Temizle`) — **savaş başı→antlaşma günü farkı
  zaten hesaplanıyor** (`SG.antlasmaFarki`, petek düzeyinde).

## 3 · Tasarım

### 3.1 ÖNCE | SONRA anahtarı (oynatıcıya)
- Panele iki durumlu anahtar: **[ÖNCE] [SONRA]** (varsayılan SONRA; kayıtta `onceki_yok:true` ise anahtar gizli).
- ÖNCE → harita tarihi `t − 1 gün`; SONRA → `t` (antlaşma günü, ya da kayıtta `sonra_t`). Uygulama: `tarihAyarla(GUN.gun(tarih))`.
  Oynatıcı kapanınca harita tarihi **açılıştaki değere** döner (oynatıcı şu an hiç tarihe dokunmuyor → yeni yan etki; kaydırıcıda
  kullanıcı sürprizi olmasın: `AKTIF.oncekiTarih` saklanıp `kapat()`ta geri yüklenir).
- Adım başına: işaret + kamera aynı kalır (`yer[]`); **eklenen**: o adımın etkilediği yer/bölge için küçük "ÖNCE → SONRA" etiketi:
  `etki:[{yer:"Edirne", once:"osmanli", sonra:"bulgaristan"}]` (isteğe bağlı; sahip kimlikleri `devletler.js` `id`si).
  `once/sonra` yazılmamışsa etiket haritadan türetilir: `SUZGEC.sahipAnahtari(yerlesim, günStr)` ile ÖNCE (t−1) ve SONRA (t) sahibi
  → `_sahipAdi()` (app.js:12759) ile ad. Yani **veri yazmadan** "Edirne: Osmanlı → Bulgaristan" üretilebilir; yazılan `etki` yalnız
  harita verisinin söyleyemediği durumlar içindir (beyan/uyarı).
- `antlasma_harita.js`'in mevcut düğmeleriyle birleşme: üç düğme **aynı panelde** üç kip olur:
  `Maddeler` (oynatıcı, bugünkü) · `Önce | Sonra` (yeni anahtar; "Savaştan önce" düğmesi = ÖNCE anahtarının kısayolu, günü
  `savaş başı` olan kayıtlarda `onceki_t` ile) · `Farka odaklan` (mevcut `ANT_FARK` kutusu: adım listesi yerine **o antlaşmanın
  toplam farkı**; adım başına filtre: `adim.yer[]` ∩ fark yerleşimleri). Üç kip **tek kayda** (`ANTLASMA_MADDELERI[id]`) dayanır;
  `ANTLASMA_HARITALARI` (eski, bölge listeli) kayıt `id`si eşleşirse **ek veri** olarak okunur, eşleşmezse bugünkü gibi çalışır
  (geriye uyum). Kod tarafı: `antlasma_harita.js` ve `antlasma_oynatici.js` ortak `eslesen()`i **tek yardımcıya** taşır
  (`js/antlasma_eslesme.js`, ~25 satır; ikisi de onu çağırır) — aksi hâlde iki kopya ayrışır.

### 3.2 Kronoloji maddesinde OTOMATİK düğme
Şimdiki kural (ad ⊂ `b` ∧ ±60 gün) **ölçüldü** (12 antlaşma, 18.631 madde, 1.185 `tur/k="antlasma"` madde):

| ölçüt | sayı |
|---|---|
| doğru eşleşme (aynı gün) | **59** |
| gün-dışı eşleşme (Küçük Kaynarca 26 Tem 1774 "…Kırım bağımsız"; Berlin 3 Ağu 1878 "yürürlüğe girdi") | 2 — ikisi de AYNI antlaşmanın yönü: **doğru pozitif**, yanlış değil |
| kaçan (aynı gün, antlaşma-tipli, ad eşleşmedi) | **7**: Karlofça «Karlofça — Podolya…» (ad "Antlaşması" yok), Küçük Kaynarca ×2 («Küçük Kaynarca — …», «…: Kırım…»), Ayastefanos ×2 («Ayastefanos (San Stefano) Antlaşması…» — parantez), «Lozan–Sevr farkları» (ayrı madde), «Riga Barışı» (**başka** antlaşma, 1 gün farklı: doğru olarak eşleşmedi) |
| gerçek yanlış negatif | **5** (Karlofça 1, Küçük Kaynarca 2, Ayastefanos 2) → hepsi **ad biçimi farkı** |
| gerçek yanlış pozitif | **0** (Lozan'da 7/7, Sevr'de 4/4 aynı olay: farklı kronoloji listelerinde AYNI antlaşma maddesi) |

Not: aynı antlaşma **birden çok kronoloji dosyasında ayrı madde** (Lozan 7, Karlofça 8): düğme hepsinde çıkar (istenen). Kayıt sayısı
12'yi aşınca `±60 gün` penceresinde yakın tarihli iki antlaşma (Ayastefanos 3 Mar ↔ Berlin 13 Tem 1878: 132 gün, çakışmaz) çıkarsa
**ad zaten ayırıcıdır**; asıl risk ad biçimidir. ⇒ Tasarım:
1. Kayıtta **`anahtarlar:["Küçük Kaynarca","Kaynarca"]`** (isteğe bağlı; varsayılan `[ad]`) — `b` bu anahtarlardan HERHANGİ birini
   içerirse eşleşir. Parantezli/ekli adlar (San Stefano) anahtar olarak yazılır. Ek-gün: `pencere_gun` (varsayılan 60).
2. Maddede **açık bağ** (öncelikli): `o.antlasma_id:"kucuk-kaynarca-1774"` alanı varsa ad/gün kuralı atlanır (yeni kronoloji
   maddeleri için; mevcut maddelere dokunulmaz, doğrulama betiği eksikleri raporlar).
3. Düğme metni kayıt başına otomatik: `"▶ Maddeleri tek tek oynat (N adım)"` (bugünkü); adım sayısı 0 ise düğme **çıkmaz** (yarım kayıt).
Beklenen: 12 antlaşmada 59 doğru + 5 kaçan → anahtarlarla 64/64; yanlış pozitif 0.

### 3.3 Veri sözleşmesi (`data/antlasma_madde_<id>.js`) ve doğrulama betiği
Zorunlu (bugünkü): `id` (kebab, `<ad>-<yıl>`), `ad`, `t`, `kadraj`, `kaynak`, `yerler`, `adimlar[]`; adım: `no`, `ozet`, `yer[]`,
`kaynak` (adımda yoksa kayıt düzeyi kabul). **Yeni isteğe bağlı** (hepsi geriye uyumlu): `anahtarlar[]`, `pencere_gun`, `onceki_t`
(ÖNCE günü; varsayılan `t−1`), `sonra_t`, `onceki_yok`, adımda `etki:[{yer, once, sonra, not}]`, `dogrulanmadi` (var).
`data/antlasma_madde_*.js` → `window.ANTLASMA_MADDELERI.push({...})` (bugünkü); yeni dosya `index.html`'e `<script>` +
`paketle.py topla` (ardışık-paket kuralı ve `denetle_yayin` ③ "yüklüyor ama birleşmiyor" kapısı bu dosyaları zaten tanır).

**Doğrulama betiği** `arac/antlasma_dogrula.py` (yeni, `denetim/`değil `arac/`; node `vm` ile veriyi okur ya da `girdi._cevir`; ağır değil, saniyeler):
1. **Şema**: zorunlu alanlar, `t` geçerli gün (`GUN`), `kadraj` 4 sayı ve `b<d`, `g<k`.
2. **Adım bütünlüğü**: `no` benzersiz ve boş değil; `ozet` ≥ 20 karakter; `no` aralığı (`"37-45"`) kendi içinde tutarlı;
   madde numaraları kaynak metindeki sayıyla (kayıt.kaynak'ta beyan edilen `md. 1-143` gibi) **eksik no** taraması.
3. **Yer adı**: her `adim.yer[]` adı `kayit.yerler`de var mı (yoksa haritada işaret çıkmaz: bugünkü sessiz kayıp — oynatıcı yalnız tabloda olanı işaretliyor);
   ve `yerler[ad]` koordinatı `[lon,lat]` aralığında mı; mümkünse adın `YERLESIMLER` adıyla (`ad` normalleştirilmiş) eşleşmesi (uyarı, ihlal değil).
4. **Odak yok** = adımın `yer[]`i boş VE `kadraj` dışı bir yere işaret → uyarı sayısı (genel adım "ek hükümler" meşrudur: sayı basılır, tavanı olur).
5. **Kaynak yok**: ne adımda ne kayıt düzeyinde `kaynak` → ihlal (CLAUDE.md kaynak kuralı; "dogrulanmadi:true" olanlar ayrı sayılır).
6. **Kronoloji bağı**: kayıt `t`'nin **±30 gününde** kronoloji maddesi var mı ve `eslesen()` kuralı ≥ 1 maddeyi yakalıyor mu
   (yakalamıyorsa `anahtarlar` önerilir — yukarıdaki 5 yanlış negatifin bulunuşu bu kontrolle olurdu); yakalanan madde sayısı basılır.
7. **Geriye uyum**: Lozan ve Sevr kayıtları sıfır ihlalle geçmeli (referans sınama; yeni kural eski kaydı bozarsa betik düşer).
Çıkış kodu `0/1/2` (CLAUDE.md sözleşmesi); `denetle_yayin.py`'ye bağlanır (veri kapısı) — **tavan**: ilk koşuda ölçülen uyarı sayısı
`BEKLENEN_*` olarak yazılır, yalnız gerileme bloke eder.

### 3.4 Kapsam ve sıra
1. `js/antlasma_eslesme.js` (ortak yardımcı) + oynatıcıya ÖNCE|SONRA anahtarı + tarih geri yükleme (**~120 satır JS**, yalnız `js/antlasma_*`;
   `app.js`'e dokunulmaz — `tarihAyarla`/`GUN`/`SUZGEC` zaten global).
2. `arac/antlasma_dogrula.py` + Lozan/Sevr referans sınaması.
3. LAB envanteri (`denetim/ANTLASMA-ENVANTER-1113.md`) → öncelik: 1.185 antlaşma-tipli maddenin kaç **benzersiz** antlaşmaya denk geldiği
   (aynı antlaşma ~5–8 kronoloji maddesi) ⇒ yazılacak kayıt sayısı büyük olasılıkla **~150–200** (ölçülmedi, LAB'ın envanteri belirleyecek).
4. Veri yazımı (sıra: Osmanlı toprak değiştirenler: Karlofça, Pasarofça, Küçük Kaynarca, Yaş, Edirne 1829, Paris 1856, Ayastefanos/Berlin,
   Mondros/Mudanya/Sevr/Lozan zaten): her antlaşma ayrı kaynaklı oturum; kaynak: TDV + antlaşma metni neşri (BOA/Düstur/Hurewitz) —
   özet **kendi cümlemizle** (kopya yok), md. numaraları kaynakla.

## 4 · Riskler / açık sorular
- **Tarih yan etkisi**: ÖNCE|SONRA haritanın tarihini değiştirir (kaydırıcı oynar). Kullanıcı sürprizi → "Kapat" yerine "Geri dön" düğmesi + açılış tarihine dönüş.
  *Alternatif*: yalnız ÖNCE kısa süre (kırpma kilidi gibi, `_kirpmaKilitli`) göstermek; ama kırpma yarı-otomatik ve app.js'e bağlı (app.js ARAYÜZ'ün) — **önerim: `tarihAyarla` + geri yükle**.
- `t−1` günü **antlaşmadan önceki gün** = çoğu antlaşmada savaş SÜRERKEN; "ÖNCE" ≠ "savaş öncesi" (`ANT_FARK.madde.gi`/`onceki_t` savaş başı ister). İki ayrı kip kalmalı (ÖNCE = antlaşma günü−1; SAVAŞ ÖNCESİ = `onceki_t` verilmiş kayıtlar, yoksa düğme gizli).
- Harita verisi bazı antlaşma günlerinde sınırı **koşu sonrası** gösterir (CLAUDE.md: veri→harita HAVVA koşusu) → ÖNCE/SONRA farkı yeni veride boş çıkabilir; doğrulama betiği "ÖNCE=SONRA her adımda" uyarısı verir.
- Çeviri: oynatıcı metinleri (arayüz) 8 dilde değil; `ozet` Türkçe (Emre: çeviriler site bitince tek seferde).

## 5 · Önerilen karar (KASA/koordinatör)
(a) Ortak `antlasma_eslesme.js` + `anahtarlar[]` + açık `antlasma_id` bağı **EVET** (5 yanlış negatifi kapatır, yanlış pozitif riski yok);
(b) ÖNCE|SONRA anahtarı `tarihAyarla` + geri yükleme **EVET**, `etki[]` yalnız türetilemeyen durumlar için;
(c) `arac/antlasma_dogrula.py` **EVET** (veri yazımından ÖNCE yazılsın — kayıt kalitesi baştan ölçülür);
(d) 3.3'teki tavan ilkesi; (e) çeviri sonraya.
