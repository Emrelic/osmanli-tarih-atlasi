# D2T — kırılmasız madde, ilk 40 (yıl ≥ 1281) — 14 Kasım 2026

Ölçüm: `arac/denetle.py` içindeki `kirilmasiz_madde()` doğrudan çağrıldı (worktree `agent-a5f2d58273ea8156e`, `origin/main` 81b566fc5; `degismez2` çekirdek havuzu `Y_cekirdek` + `s:` + `isg:`). Toplam 2t = **218**; yılı ≥ 1281 olan **43**; ilk 40 aşağıda (1281 → 1841-10-01). Betik: scratchpad `ksiz_olc.py` (repoya girmedi). Veri hiçbir dosyada DEĞİŞTİRİLMEDİ.

## ÖNEMLİ BULGU — 2t'nin 21 maddesi "kuyruk dosyası" yapaylığı
`Y_cekirdek`, `KUYRUK_DOSYALARI`nı (yerlesimler_avrupa.js, _asya.js, _h2_rusya.js, _h2_kuzeyafrika.js, …) dışarıda bırakır. Bu 21 maddenin kırılması **haritada o gün VAR** (aşağıda "K" sınıfı, `s:` satırı tarihiyle birebir); 2t onu görmüyor çünkü kırılma kuyruk dosyasında. Yani madde-harita doğrulaması sağlam, **ölçüt eksik**. Öneri: bu 21 maddeyi 2t'den düş (kırılma havuzuna kuyruk dosyalarını `kirilmasiz_madde` için de kat) — `denetle.py` değişikliği, bu işin kapsamı dışında bırakıldı.

## Sınıf dağılımı
| Sınıf | Adet |
|---|---|
| (ii-K) harita'da kırılma VAR, yalnız kuyruk dosyası olduğundan 2t sayıyor | 21 |
| (ii) MEŞRU | 7 |
| (i) EKSİK / yanlış günde kırılma (kaynaklı düzeltme önerisi) | 9 (7 tarih kayması + 2 gerçek eksik) |
| (iii) BELİRSİZ | 3 |
| Toplam | 40 |

Uygulanan düzeltme: **0** (aşağıda neden). `yerlesimler.js` kuyruğu: Beyrut, Sivas, Modon, Yanova, Yenbu, Peşte, Lahsa.

## (ii-K) 21 madde — kırılma kuyruk dosyasında, tarih birebir
Avignon 1348-06-09 · Montpellier 1349-04-18 · Grenoble 1349-07-16 · Poitiers 1360-10-24 · Visby 1361-07-27 · Nice 1388-09-28 · Pisa 1399-01-01 (yıl-temsilî) · Reims ve Troyes 1420-05-21 · Tver 1485-09-12 · Arras 1493-01-01 (yıl-temsilî; Senlis 23 Mayıs 1493, gün okunmadı) · Bolonya 1506-11-11 · el-Katrûn/Fizan 1577-03-20 · Arras ve Perpignan 1659-11-07 · Kolhapûr 1675-01-01 (yıl-temsilî) · Strazburg 1681-09-30 · Oreşek 1702-10-22 · Lhasa 1717-11-30 (isg) · Parma 1802-10-09 · Ancona 1808-04-02. Hepsi dosyada `s:`/`d:`/`isg:` olarak ±0 günde mevcut. Eylem yok.

## (ii) MEŞRU — 7 madde
1. Mantova, Bolonya, Rimini, Trapani 1281-01-01 — dört sentetik madde ("önceki beyanlı boşluk sona erdi"): atlas penceresi 1281'de başlıyor; boşluk→sahip geçişi toprak değişimi değil.
2. Bregenz 1451-01-01 — kontluğun yarısının Habsburg'a satışı; yerleşim Kutsal Roma ("almanya") içinde kalır, sahibi değişen yarı hane mülkiyeti; harita tek renk. (1523'te tamamı: kırılma 1523-01-01.)
3. Kutsal İttifak 1684-03-05 — ittifak kuruluşu, sınır oynatmaz.
4. Cezayir 1830-08-09 — Dayı Hüseyin'in sürgünü; sahiplik 1830-07-05'te (`v`→`fransa-cumhuriyet`) zaten kırıldı (35 gün, eşik 30).

## (i) EKSİK / YANLIŞ GÜN — 9 madde (hiçbiri uygulanmadı)
Uygulanmama gerekçesi: ya `yerlesimler.js`'te (yazılamaz) ya da gün kaynağı okunamadı/çelişkili (Gün uydurma yok).

| # | Madde (gün) | Yerleşim (dosya) | Haritadaki | Sorun | Önerilen düzeltme ve durum |
|---|---|---|---|---|---|
| 1 | Beyrut 1291-01-01 | Beyrut (yerlesimler.js) | `s` kudus-kralligi→memluk **1291-05-18** | 05-18 Akka'nın düştüğü gündür; TDV `beyrut` yalnız "1291" verir (okundu); Beyrut Temmuz 1291'de teslim oldu (Runciman, *History of the Crusades* III: "July 1" — web özetinden, sayfa okunmadı; gün çelişkili) | f/t=1291-07-?? ; gün teyitsiz → hakemli karar gerek. Kuyruk. |
| 2 | Sivas 1381-10-01 | Sivas (yerlesimler.js) | `s` eretna→burhaneddin **1381-01-01** (yıl-temsilî) | TDV `kadi-burhaneddin` (okundu): "783/1381" yalnız yıl; Hacı Şadgeldi'nin yenilgisi "1381 sonbaharı", sultanlık hemen ardından | f/t=1381-10-01, kesinlik ay (sonbahar → ay uydurma riski; "yalnız yıl teyitli" notu). Kuyruk. |
| 3 | Safi 1541-10-01 | Safi (Asfi), Azemmûr (yerlesimler_ek3.js) | `s` portekiz→sadi **1541-01-01** (ikisinde) | madde: tahliye Eylül–Ekim 1541; 273 gün fark. Gün kaynağı bağımsız okunamadı | iki yerleşimde f/t 1541-10-01 kesinlik ay; **uygulanmadı** (ay kaynağı okunmadı). ek3.js serbest dosya — kaynak okunursa uygulanabilir. |
| 4 | Modon 1686-07-10 | Modon (yerlesimler.js) | `d`→`venedik` **1686-06-01** | 39 gün fark. Web özetleri: 7 Temmuz 1686 (Pinzelli: 21 Haziran filo, 1 Temmuz hendek) ≠ madde 10 Temmuz; akademik kaynak okunmadı | f/t=1686-07-07/10 hakemli karar gerek (Setton, *Venice, Austria and the Turks*; TDV `mora`). Kuyruk. |
| 5 | Yanova 1693-05-27 | Yanova (Ineu) (yerlesimler.js) | `d` t **1693-01-01** (yıl-temsilî) | madde günü 1693-05-27 (kaynağı `temesvar` atlas içi) | gün atlas içi kayda dayanır; bağımsız kaynak yok → kuyruk. |
| 6 | Mazagan 1769-03-11 | Mazagan (yerlesimler_ek3.js) | `s` portekiz→fas **1769-01-01** | TDV `mevlay-muhammed-iii` (okundu) gün vermez ("1182/1768-69"); 11 Mart 1769 tahliye günü web özetlerinde (Vikipedi türevi, uevora/uc.pt PDF — PDF metni okunamadı, "okunmadı") | f/t=1769-03-11 kesinlik gun; **uygulanmadı** (akademik kaynak okunmadı). Kaynak okunursa iki uç temiz: portekiz t=fas f=1769-03-11; ikisi de ömründe (portekiz, fas künye ≥1912). |
| 7 | Yenbu 1811-10-01 | Yenbu (yerlesimler.js) | `s` suud-birinci t / `v` f **1811-11-01** | 31 gün (eşik 30); Burckhardt (II, 1831, s.345-6) "Ekim 1811"; atlas ayı Kasım | ay çelişkisi, hakemli karar (TDV `yenbu`, Tosun Paşa maddesi). Kuyruk. |
| 8 | Peşte 1684-11-03 | Peşte (yerlesimler.js) | `d` kesintisiz 1541-08-29 → 1686-09-02 | **GERÇEK EKSİK**: Habsburg Peşte'ye 1684 Haziran'da girdi (web: 17 vs 30 Haziran, çelişkili; ordu Peşte'de 1.400 piyade bıraktı) ve Kasım'da Osmanlı geri aldı | `isg` macaristan-habsburg 1684-06-?? → 1684-11-03; giriş günü hakemli karar gerek (TDV `budin`, Buda kuşatması 1684 literatürü). Kuyruk. |
| 9 | Lahsa 1841-10-01 | Lahsa (yerlesimler.js) | `s` suud-ikinci 1830-01-01 → 1871-04-20 kesintisiz | **GERÇEK EKSİK**: Mısır işgali (madde: 1836; Winder'a göre Ahsâ 1838 civarı) hiç yok | `isg` mısır (mehmed-ali) başlangıç yılı ve çekiliş günü kaynaksız (TDV kapsamı yok; Kelly, *Britain and the Persian Gulf*) → okunmadı. Kuyruk. |

## (iii) BELİRSİZ — 3 madde
1. **Çankırı 1417-02-18** — haritada Çankırı `d` 1413-07-05'ten itibaren Osmanlı (öncesi `candar`). Madde, Çankırı'nın 1417'de Osmanlı himayesindeki Kasım Bey'e verildiğini söylüyor (TDV `mehmed-i`, okunmadı bu oturumda): ya 1413'te Osmanlı kaydı erken ya da madde himayeyi anlatıyor. Eksik: TDV `candarogullari`, `cankiri`. Aday: Çankırı, Kastamonu (`d` 1461).
2. **Askiya Muhammed Zâgha (Dia) 1494** — madde `yer_id` taşımıyor; atlasta Zâgha/Dia (Nijer) yerleşimi aranmadı bulunmadı (yalnız Gao/Cenne ve Senegal'deki Diahav var; ilgisiz). Kaynak: es-Sa'dî, *Tarikh es-Soudan* (okunmadı). Eksik: yerleşim varlığı + hicrî 899 sonu (≈ Ekim 1494) gün hesabı.
3. **Eski Hırsova 1790-04-16** — başlık şüpheli: Hırsova (Dobruca) Avusturya eline geçmedi; muhtemelen **Eski Orşova** (yerlesimler.js: Orsova (Eski Orsova) `d` 1738-05-08 → 1791-08-04 kesintisiz; Sistova'da Avusturya'da kaldı). Web özeti (Giurgiu 1790 Vikipedi türevi) teslimi "7 Nisan" veriyor, madde 16 Nisan — çelişki. Eksik: Coburg'un Orşova harekâtı için akademik kaynak (TDV `zistovi-antlasmasi`), madde başlığı düzeltmesi, `isg` Orsova 1790-04-?? → 1791-08-04.

## Kaynak notu
Okunan: TDV `beyrut`, `kadi-burhaneddin`, `mevlay-muhammed-iii` (üçü de yalnız yıl verir). Web aramaları yalnız özet; PDF'ler (uc.pt RHSC, uevora) metin çıkarılamadı → "okunmadı". Hiçbir gün için iki bağımsız akademik kaynak teyidi alınamadığından veri değiştirilmedi.
