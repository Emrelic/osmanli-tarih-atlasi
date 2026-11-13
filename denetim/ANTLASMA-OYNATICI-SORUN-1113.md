# Antlaşma oynatıcı — KASA'nın 7 maddesi (EMRELIC, 13 Kasım 2026)

Dal: `emrelic-1113-antlasma-sorun`. Canlı gözle bakış LAB'da; aşağıdaki "kod ölçümü" ile "canlıda bakılacak" ayrıdır.

1. **Harita boyaması güvencesi (YAPILDI, canlıda bakılacak).** `app.js guncelle()` petek verisini yalnız
   `haritaHazir && di !== aktifDonem` iken `setData` ile çizer. Aynı dönemin içinde (1699-01-25 ↔ 01-26 dönem
   kırılması yoksa) geometri değişmez; kırılma varsa değişir. Risk: harita stili hazır değilken `tarihAyarla`
   çağrılırsa ya da `guncelle()` ortada hata atarsa `aktifDonem` yeni döneme işaretli kalıp harita eski kalabilir.
   `js/antlasma_oynatici.js` `haritaYenidenCizGuvence()`: tarih değişince `aktifDonem !== donemBul(suanki)` ise
   `guncelle()` yeniden çağrılır; harita hazır değilse ≤ 8 sn (20 × 400 ms) beklenir; `osmanli` kaynağı boş
   FeatureCollection'sa bir kez zorla yeniden çizilir; hata yutulmaz (`console.warn`). LAB: SAVAŞ ÖNCESİ
   1683-07-14 / ÖNCE 1699-01-25 / SONRA 1699-01-26.
2. **Çok taraflı adım → odak (kod okuması).** `adimGoster`: odak, adımın `yer[]` işaretlerinin sınırlarıdır
   (tek yer: easeTo z≥6.5; ≥2 yer: fitBounds ≤ z7); `yer[]` boşsa KAYIT KADRAJI. Taraf seçici "Tüm taraflar" iken
   de aynı: Venedik md. 3 adımı yalnız o adımın yerlerini (Mora, Dalmaçya) işaretler, kadraj değil. Taraf seçince
   liste o tarafın adımlarına süzülür (`AKTIF.liste`). "Farka odaklan" düğmesi ise tüm el değiştiren bölgelerin
   kutusudur (taraftan bağımsız). Canlıda Karlofça'da bakılacak.
3. **Lozan/Sevr ÖNCE/SONRA (node ölçümü).** `onceki_t` verilmemiş kayıtta "Savaştan önce" düğmesi hiç çıkmaz
   (`kayit.onceki_t` yoksa yok); ÖNCE = `t − 1`, SONRA = `sonra_t || t`. Ölçüldü: Lozan t 1923-07-24 → ÖNCE
   1923-07-23, SONRA 1923-07-24; Sevr t 1920-08-10 → 1920-08-09 / 1920-08-10; Karlofça 1699-01-26 → 01-25 / 01-26
   (SAVAŞ ÖNCESİ yalnız onda: 1683-07-14). KASA'nın beklediği günlerle aynı.
4. **Kronolojide düğme tek maddede — tasarım önerisi (YAPILMADI).** Önerim: antlaşmanın öteki maddelerinde
   (Karlofça için 8 madde) kart altına küçük, ikincil bir bağlantı: «📜 Karlofça oynatıcısını aç». Davranış:
   o maddenin kendi günü bozulmaz; oynatıcı panelini açar, harita tarihini DEĞİŞTİRMEZ (ÖNCE/SONRA düğmesi
   kullanıcıdadır), kapatınca açılışa dönülecek tarih zaten yok. Kural: yalnız `ANTLASMA_ESLESME.eslesen()` o
   maddeyi yakalıyorsa (yanlış antlaşmaya bağ olmasın); ana maddede mevcut düğme kalır. Maliyet küçük (obGoster
   sarmalayıcısında düğme metni + `antlasma_id` ile kaydı çekme). Karar Emre/KASA'da.
5. **#101 (antlasma_harita.js "bırakılan bölgeler" petek boyaması) ile çakışma riski.**
   - İki sistem AYRI: `antlasma_harita.js` = "Haritada gör" düğmesi, `window.ANTLASMA_HARITALARI`
     (`bolgeler[]`, geometri `HUKUKI_SINIRLAR`'dan türetilir), geçici katman. Oynatıcı = `window.ANTLASMA_OYNATICI`
     kayıtları (`adimlar[]`, işaret + kamera + tarih), kendi katmanı yok: yalnız `maplibregl.Marker` + kamera +
     `tarihAyarla`. Aynı katmana/kaynağa yazmazlar.
   - Kesişme noktaları: (a) ikisi de `obGoster`'ı sarar (sıra: antlasma_harita → eşleşme → oynatıcı; oynatıcı
     ÖNCE-SONRA için `tarihAyarla` çağırdığında `ANT_FARK` temizliği tetiklenebilir, bkz. app.js 11839); (b) aynı
     maddede iki düğme. Çakışmasın diye #101 bölge boyamasını `antlasma_harita.js`'te tutsun; oynatıcıya BOYAMA
     eklenmesin.
   - Oynatıcıdan boyamaya köprü kurmak istenirse yol: adımda `etki[]` ({yer, once, sonra, not}) zaten var ve
     "Haritada (ÖNCE → SONRA)" satırlarını besler; boyama için ayrı alan açma, `etki[].yer` adlarını
     `bolgeler[]`'e eşle ve geometriyi yine `HUKUKI_SINIRLAR`'dan al. Petek boyaması sahipten türediği için
     (`sahipAdiGunde`) ÖNCE/SONRA tarihleri değişince harita zaten yeniden boyanır — ek boyama gerekmez.
6. **Performans.** Script sırası: `antlasma_harita.js` → `antlasma_madde_*` (sevr, lozan) → `antlasma_eslesme.js`
   → `antlasma_madde_karlofca.js` → `antlasma_oynatici.js` (oynatıcı son, eşleşmeden sonra: doğru). `?v` damgası
   bu dalda `surum_damgala.py` ile tazelendi (oynatıcı dosyası değişti). Veri küçük (3 kayıt); 375 px'te panel LAB ✓.
7. **`antlasma_dogrula.py` → `denetle_yayin.py` (YAPILDI).** Bağlı DEĞİLDİ (denetle_yayin'de anılmıyordu).
   Eklendi: `denetle_yayin.py` sonunda `antlasma_dogrula.py` alt süreç olarak koşar; çıkış ≠ 0 (ihlal 1 ya da
   ölçülemedi 2) yayını durdurur. Ölçüm: ihlal 0 (Karlofça, Lozan, Sevr), uyarı tavanları kendi dosyasında.
