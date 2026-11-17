# KAPSAM eksik ulkeler — EKLENEN raporu (UMIT, 17 Kasim 2026)

Kaynak: KAPSAM-EKSIK-ULKELER-1117.tsv (eksik_kalan_ppla_aday). Olcut: GeoNames PPLA (idari bolge/vilayet/il/rayon merkezi), aday listede sayilmadi = 3 km ya da ad esleşmesi <=25 km yok.
Tam liste yeniden olculdu (api/search featureClass=P/featureCode=PPLA, country=<iso>, okundu); sonuc tabloyla birebir ayni (22+16+4+3+2+1+1+1 = 50).

## Ulke basina

| Ulke | Eklenen | Eklenmeyen | Blok |
|---|---|---|---|
| Cezayir | 22 | 0 | afrika-kuzey-dogu |
| Azerbaycan | 16 | 0 | iran-kafkasya-afganistan |
| Tunus | 4 | 0 | afrika-kuzey-dogu |
| Dominik Cumhuriyeti | 3 | 0 | karayip-orta-amerika |
| Libya | 2 | 0 | afrika-kuzey-dogu |
| Jamaika | 1 | 0 | karayip-orta-amerika |
| Panama | 1 | 0 | karayip-orta-amerika |
| Irlanda | 1 | 0 | kuzey-avrupa |
| **Toplam** | **50** | **0** | |

Eklenmeyen yok. Silinenlerle (Porto Riko / Mayotte / Mauritius) cakisan yok; tum LISTE.tsv satirlarina karsi ad+3 km mukerrer taramasi: 0 mukerrer.

## Yeni satir sayilari (baslik dahil, wc -l)

adalar-ek 76 (degismedi) · afrika-kuzey-dogu 188 -> 216 (+28) · iran-kafkasya-afganistan 188 -> 204 (+16) · karayip-orta-amerika 308 -> 313 (+5) · kuzey-avrupa 317 -> 318 (+1) · **toplam 1077 -> 1127 (+50)**. Sutun sayisi her satirda 15; afrika blogunun 11. sutunu `adlar` (bos), 8. sutunu `koord` olarak korundu; `git diff --numstat` yalniz ekleme gosteriyor (silinen 0). Her dosyanin kendi satir sonu (CRLF/LF) korundu.

## Sapma (>=150 km, sapma2.py mantigi)

Taranan EKLENEN 563, bayrakli 27; bunlardan 20'si onceki islerden (Mısır Marsa Matruh, Libya Tobruk/Darnah/Ghat, Tunus Medenine/Tataouine/Tozeur, Sudan 2, Etiyopya 6, Honduras Puerto Lempira, Isvec Kiruna, Izlanda 2, Mauritius Port Mathurin). Bu isten 7 satir bayrakli: Cezayir Sahra vilayetleri Tamanghasset, Adrar, El Menia, Tindouf, Timimoun, Illizi, Beni Abbes. Sebep: Cezayir'in orijinal 19 satirlik kutusu kuzeyde; bu vilayet merkezleri Sahra'da ve GeoNames sayfa koordinati (canli dogrulandi) ile ayni — sapma degil gercek konum. Baska yeni satir bayrakli degil.

## Canli dogrulama

50 satirin GeoNames sayfasi (https://www.geonames.org/<id>/ , curl, ng-state) acildi: 50/50 id eslesti, ozellik kodu PPLA, ulke kodu dogru, sayfa koordinati LISTE koordinatina 0,000 km (<=1 km sarti saglandi). Sayfa adlari farkli olanlar (koord_kaynak'ta yazili): Gobustan = Merze, Samukh = Nebiagali, Khojavend = Novyy Karanlug (ad_modern api adidir).

## Notlar

- ad_1900 bos birakildi (1900 adi kaynakla okunmadi).
- Irlanda Swords: GeoNames PPLA (Fingal ilcesi merkezi, 40776 nufus); IE'de ADM1=4 il oldugundan PPLA anlami tablo notuna gore; satir ekleme olcutu GeoNames PPLA'dir.
- Azerbaycan: mevcut 36 EKLENEN satir ayni olcutle (PPLA rayon merkezi) eklendigi icin kalan 16 da ayni olcutle eklendi (Khojavend ve Khizi gibi kucuk nufuslular dahil).
- Commit/push yapilmadi. Ayrintili liste: KAPSAM-EKLENEN-1117-UMIT.tsv (blok, ad, ulke, lat, lon, geonames_id, durum).
