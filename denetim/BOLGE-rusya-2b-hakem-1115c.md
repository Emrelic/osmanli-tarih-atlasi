# BOLGE-rusya · Adım 2b — Gün hakemi sonuçları (UMIT, 15 Kasım 2026, ikinci tur)

Yöntem (indirmesiz): `bibliotekar.ru` (Novgorod 1. Yıllığı metni, windows-1251), archive.org `/stream/…_djvu.txt` (Mitchell-Forbes 1914), bigenc.ru (BRE) arama özetleri, resource.history.org.ua. Okunamayan: rcin.org.pl PDF (sertifika süresi dolmuş; güvensiz bağlantı denenmedi), prlib.ru (tarayıcı kontrolü).

## Uygulanan (veri değişti; `ic_not`/`ic_not_t`/`ic_not_takvim` beyanlı)
| Madde | Eski | Yeni | Dayanak | Hakem notu |
|---|---|---|---|---|
| Buz Savaşı (`kronoloji_cok_rusya.js`) | 1242-04-12 | **1242-04-05** | Novgorod 1. Yıllığı 6750: «А бишася мѣсяца априля въ 5 … в суботу» (okundu) + Mitchell-Forbes 1914 s.87 «April 5, on a Saturday» (okundu) | 1582 öncesi kaynak günü yazılır; iki metin aynı birincil yıllığa dayanır (bağımsız ikinci akademik çalışma okunmadı). Çeviri/olay_taraf anahtarı yoktu |
| Roman Mstislaviç ölümü (`kronoloji_cok_once1281_avrupa.js`, `devletler.js` galicya-volhinya künye-içi) | 1205-10-14 | **1205-06-19** | BRE «Roman Mstislavich» + «Kievskoe knyazhestvo» 19.6.1205; Entsiklopediya istorii Ukrainy 19.06.1205; Scripta Historica t.24 (özet) 19 Haziran | EoU (CIUS) 14 Ekim tek başına; 3 bağımsız akademik kaynak 19 Haziran (çelişen + teyit edenler `ic_not_t`ta) |
| Aleksey cülusu (`kronoloji_rusya.js`) | 1645-07-13 | **1645-07-23** | BRE «Mikhail Fyodorovich» 13(23).7.1645; Britannica 23 Tem [13 O.S.] | 12/13/14 Tem O.S. belirsizliği açık (BRE kısa maddesi 12, ESBE 14); atlas günü hiçbir Gregoryen okumaya uymuyordu |
| Anna, kondisyonları yırttı | 1730-02-25 | **1730-03-08** | BRE «Kondicii», «Zateyka verkhovnikov»: 25.2(8.3).1730 | çelişki yok, takvim çevirisi |
| Moskova Üniversitesi | 1755-01-25 | **1755-01-23** | BRE «MGU» 12(23).1.1755; hist.msu.ru | BRE'nin ikinci maddesi ferman 24 Oca (4 Şub) der; PSZ XIV/10346 okunmadı |
| Pugaçev idamı | 1775-01-10 | **1775-01-21** | BRE «Pugachev» 10(21).1.1775; Britannica | çelişki yok |
| Moskova kurtuluşu | 1612-11-04 | **1612-11-06** | BRE «Vtoroe opolchenie 1611-1612», «Moskva»: Kitay-gorod 22 Eki (1 Kas), Kremlin teslimi 27 Eki (6 Kas) | 4 Kasım modern tatil; ortak aile kaynağı, bağımsız ikinci okunmadı |

## Sınanıp DEĞİŞTİRİLMEYEN
- Moskova ateşkesi 1503-04-02: BRE «Moskovskoe peremirie 1503» «Zaklyucheno 2 apr.» → atlas DOĞRU (25 Mart şüphem boşa çıktı).
- Vasili III ölümü 1533-12-04: BRE 4.12.1533 (Jülyen, 1582 öncesi kaynak günü) → atlas DOĞRU.
- Raciąż 1404-05-23: İngilizce ansiklopedi özetleri 22 Mayıs 1404 (kongre 18-23 Mayıs, Nowak, Studia Źródłoznawcze 40, 2002) der; PDF okunamadı → **açık** (aday 05-22).
- Uspenski Katedrali 1479-08-15: Moskova Kremlin Müzeleri «12 Ağustos 1479 kutsama» (kurum sayfası, okundu); ikinci akademik kaynak okunmadı → **açık** (aday 08-12).
- Moskova künye-içi Novgorod 1478-01-14/15 ve Tver 1485-09-08/12: BRE «Novgorodskaya respublika»/«Velikiy Novgorod» yalnız 1478 yılı verir; gün **okunmadı** → açık.
- Kuğu Gölü / Tretyakov / MSAT: aranmadı (dış kapsam, düşük önem).

## Bu turda hakemi değiştirmeyen veri sayıları
Değişen madde: **7** (+ 1 künye-içi). `node --check` her dosyada OK.
