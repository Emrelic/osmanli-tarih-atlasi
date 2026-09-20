# ANTLASMA-KADEME-0074 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

**Sınav anı:** 21 Eylül 2026, hiçbir sayım koşturulmadan önce.
**Evren:** `data/olaylar*.js` + `data/kronoloji*.js` (kronoloji maddeleri),
`data/yerlesimler*.js` `s:` / `isg:` alanları, `window.ANTLASMALAR`.
**Öngörüyü yazan:** ANTLASMA-KADEME-0074; yalnız `js/app.js` 9160–9270 bloğunu ve
DALGA-0074 şartnamesini okumuş, hiçbir sayım yapmamıştır.

## Ö1 — Antlaşma maddesi sayısı
`app.js` yorumundaki 13 Eylül 2026 ölçümü **117** diyor (113 `k:"antlasma"` + 4 karma).
Kronoloji o günden bu yana büyüdü (§1.5: 1688 madde). Öngörü: **117–135 arası**,
merkezî tahmin **~122**.

## Ö2 — Üçüncü kademenin veri kaynağı
Şartnamenin önerisi: "savaş sonrası fiilî durum = `isg:` kayıtlarının antlaşma
gününden HEMEN ÖNCEKİ hâli". Öngörüm: öneri DOĞRU ama YETERSİZ. Üçüncü kademe yeni
geometri istemez, `sinirIndeksi`nin zaten okuduğu `isg:` penceresinden türer; ancak
`isg:` kayıtları çoğu vakada antlaşma gününde kapandığı için fiilî hâl `o.gi - 1`
gününde okunmalıdır, `o.gi`de değil. Dahası bugünkü "önce" kademesi de antlaşma
gününden okunuyorsa **bugünkü "önce" ile önerilen "fiilî durum" AYNI GÜNE düşer** ve
üçüncü kademe boş çıkar. Öngörü: bu çakışma vakaların **yarısından çoğunda** olur;
çözüm "savaştan önce" kademesini savaşın/işgalin BAŞLANGIÇ gününe geri çekmektir.

## Ö3 — Kaç antlaşmada üç kademe ANLAMLI?
Anlamlı olması için antlaşma penceresinde (a) taraflara ait en az bir `isg:` kaydı,
(b) bir `s:` el değiştirmesi bulunmalı. §1.5'e göre bütün veride yalnız **125 İŞGAL
kırılması** var; bunlar 117+ antlaşmaya değil birkaç büyük savaşa (1768–74, 1787–92,
1806–12, 1828–29, 1877–78, 1912–13, 1914–18) yığılmış olmalı. Öngörü: üç kademenin
anlamlı olduğu antlaşma sayısı **8–25 arası**, merkezî tahmin **~15**; yani
antlaşmaların **%85'inden fazlasında üçüncü kademe BOŞ kalır**. Emre'nin "tüm
antlaşmaların ayarını buna göre yapalım" isteği mimarî olarak karşılanabilir, VERİ
olarak bugün karşılanamaz.

## Ö4 — Mimarî maliyet
`_antlasmaHal` bugün `"once" | "sonra" | "koyu" | "yok"` alıyor ve tek katmanın
`fill-color`unu `["get", hal]` ile çeviriyor. Öngörü: üçüncü kademe **yeni katman
istemez**; her petek özelliğine üçüncü bir renk alanı + `_farkKutusuCiz`e üçüncü
düğme + `antlasmaFarkiKirp` sırasına üçüncü adım yeter. Öngörülen dokunulacak satır:
`js/app.js` **< 120**, `js/suzgec.js` **< 60**.

## Ö5 — Boş kademe nasıl gösterilir
Bugünkü blok "YOK dürüstçe yazılır" ilkesini taşıyor. Öngörü/öneri: üçüncü kademe
verisi yoksa DÜĞMESİ HİÇ ÇIKMAMALI (pasif gri düğme değil) — yoksa kullanıcı "veri
yok"u "değişim yok" sanır. Hükmü 1.MURAT/Emre verir.
