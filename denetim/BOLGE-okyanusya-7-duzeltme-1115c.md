# BOLGE okyanusya — adim 7: duzeltme (UMIT 1115c)

## Yapilan (2 somut duzeltme, ikisi de commit+push)
1. **Fiji Kolonisi pencere sahibi** (commit 1): `yerlesimler_ek30.js` Suva ve `yerlesimler_okyanusya.js` Levuka: `s:` 1874-10-10..1970-10-10 `d:"ingiltere"` -> `d:"fiji-kolonisi"` (BOYALAR #9067d9 vardi, kunye yerlesimsizdi). Kirilma gunleri ayni (1874-10-10, 1970-10-10); kaynak: PacLII Deed of Cession 1874 (kunye fiji-cakobau maddesinde zaten).
2. **Batı Yeni Gine (Jayapura, Manokwari, Merauke, Fakfak)**: 1949-12-27'de `endonezya-cumhuriyeti` olan zincir YANLISTI (Lahey devri Batı Yeni Gine'yi kapsamadi). Yeni zincir: hollanda-dogu-hint ..1949-12-27 -> `hollanda` 1949-12-27..1962-10-01 -> `untea` 1962-10-01..1963-05-01 -> `endonezya-cumhuriyeti` 1963-05-01.. (kunye untea zaten bu uclarla vardi; `yer_yama_halef_1946.js` bekleyen yamasi ayni zinciri tarif ediyordu ama base'e uygulanmamisti). `hollanda-dogu-hint` kunye t=1949-12-27 oldugu icin D4c'ye uymak uzere ara pencere sahibi `hollanda` yazildi. Dosyalar: `yerlesimler_emilme.js` (Jayapura, Manokwari), `yerlesimler_a78_okyanusya.js` (Merauke, Fakfak). Yeni D2 maddeleri (2): `kronoloji_sinir_okyanusya.js` 1962-10-01 (UNTEA devri, yer_id Jayapura (Hollandia)) ve 1963-05-01 (UNTEA -> Endonezya). Kaynak: BM UNSF tarihcesi (peacekeeping.un.org), New York Antlasmasi 15.8.1962 UNTS 437 I-6311 (kunye untea ile ayni; bu oturumda sayfa YENIDEN okunmadi — kunye kaynagidir). Hakem gerekmedi (celiski yok, atlas ici kunye zaten ayni gunleri yaziyor).

## Olcum (taban c317d2d85 + degisiklik; baz icin AYRI "once" olcumu alinmadi: "olculmedi")
- Fiji duzeltmesi sonrasi: `py arac/denetle.py` CIKIS=0; D1 306 sahipsiz (beklenen 306); D2 760 kirilma 0 acik; D4c 0; 2sk 14333 kapali / yalniz-taraf 5938 (tavan 5927).
- WNG + 2 yeni madde sonrasi: CIKIS=0; D1 306; D2 760 kirilma 0 acik; D2s 3713 (154 acik); D4c 0; D2sk 14337 kapali / yalniz-taraf 5942 (tavan 5927) — ASIM KASA'nin (brif); asimin bir bolumu birlesim tabaninin kendisinden gelmis olabilir (baz olcumu yok). Benim iki maddem +4 taraf ekledi (5938->5942), yeni-yer anilmali yazilmamis: yer_id var ama yalniz-taraf kovasina dusuyor.
- `odak_olc.py`: CIKIS 0, ÇÖZÜLMEYEN ODAK ATFI: 0.
- node --check: 5 degisen data/*.js temiz.
- Ceviri: 2 yeni kronoloji maddesi icin ceviri anahtari yok (KASA yenilemesi; eksik ceviri olay +2 her dilde).

## Yapilamayan / hakem bekleyen (adim 2/4 belgelerinde ayrintili)
Samoa 1889-06-14 (metin okunmadi), NSW 1788-02-07 (403), Rarotonga protektora gunu (celiskili kaynaklar), Fiji cumhuriyet 06/07 Ekim 1987, Tonga Commonwealth gunu, Hawaii Seflikleri/Rarotonga/Moriori/fiji-cakobau/gilbert-ellice/UNTEA pencereleri, Pomare Kralligi vb. eksik devletler.
