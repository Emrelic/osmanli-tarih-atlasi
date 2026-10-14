# SİLSİLE ÖLÇÜMÜ — halka ③ (yer çözümü) ve ④ (yerleşim yoğunluğu)

*Bu dosya `py arac/silsile_olc.py` tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*

| | |
|---|---|
| ağaç | `C:\atlas\.claude\worktrees\agent-ae1a5d8fb426218b5` |
| dal · commit | `worktree-agent-ae1a5d8fb426218b5` · `f39458eb077243bb248a5dd53f8cc553cbcaec4f` |
| data/ + girdi kirli mi | HAYIR (temiz) |
| makine · zaman | EMRELIC · 2026-10-14 11:12 |
| süre | 105 sn |

## Evren ve tanımlar
- **Yerleşim evreni:** `girdi.yukle()` (GIRDI_DOSYALARI) → **4563** yerleşim. `index.html`'in yüklediği öteki `yerlesimler_*.js` (ör. nokta2/3, halef_1946) motor evreninde değilse burada da YOKTUR — ölçülen soru *"motorun çizdiği noktalarda var mı"*dır.
- **Kronoloji evreni:** `index.html` → `arac/paket_coz.py` ile paketler çözüldü → **187** `olaylar*/kronoloji*` dosyası, node `vm` ile yüklendi (`arac/silsile_yukle.js`); yüklenemeyen: 0 · dizi tanımlamayan: 0. Üstüne `devletler.js` künyelerinin `kronoloji[]` maddeleri (**1800** künye). Toplam **22795** madde.
- **Ad eşleme:** `ad_esanlam.sadelestir` (Türkçe güvenli; `İ`→`i` lower()'dan ÖNCE) · yerleşim adının parantez/eğik çizgi alternatifleri (bölge/ülke/devlet adı olanlar alias SAYILMADI: 137 alternatif, `h3_alias_reddedilen.tsv`) · `data/ad_esanlam.js` (25 çift, salt okunur) · `arac/yer_esanlam.json` `elle` (bugün boş; yalnız kaynaklı çift kabul eder) · açık transliterasyon kuralları (q→k, w→v, ph→f, x→ks, çift harf) — kural katmanı yalnız yer alanlarında, serbest metinde KULLANILMAZ.
- **Varlık (④):** `sahnede(g)` = `kur ≤ g < bit` (motorun `devir_kumesi` tanımı, `uret_petek.py:5047`; alan yoksa sınırsız). `boyayan(g)` = sahnede **ve** g'yi kapsayan bir `d:`/`v:`/`s:` dönemi var, `s:` sahibi `__BOSLUK__` değil. `isg:` sayılmaz (motor okumaz; sahipliği değiştirmez). Eşik tabloları **boyayan** üzerinden; sahnede ayrıca dağılımda.
- **Izgara:** eşit alanlı enlem bandı — 1° bant, bant içinde round(360·cos φ) dilim ⇒ her hücre ≈ 111×111 km (~12.360 km²). Gerekçe: 1°×1° hücre 60°K'de ekvatordakinin yarısı alandadır; "hücre başına yerleşim" ancak eşit alanla bölgeler arası karşılaştırılabilir. Pencere -60..85 (motorun `BOLGE`'si). Toplam **38411** hücre.
- **Kara:** `veri-kaynak/ne_10m_land.geojson` (motorun kara maskesinin kaynağı, `uret_petek.py:747`; `motor_kara.geojson` motor ÇIKTISI olduğu için kullanılmadı). Hücre başına 6×6 örnek; kara oranı ≥ 0.25 olan **11519** kara hücresi (≥0,50: 10887 · >0: 12689).
- **Kıta:** hücrenin kara ağırlık merkezine en yakın Natural Earth ülkesinin `CONTINENT` alanı (MODERN sınır — yalnız kovalama içindir, tarihî iddia değildir). `devletler.js` `bolge` sözlüğü coğrafî poligon taşımadığı için hücreye bağlanamadı ⇒ kıta + `SUBREGION` (`h4_altbolge.tsv`).

## Halka ③ — kronolojideki yerler yerleşim indeksinde mi

### Madde düzeyi
| kaynak | madde | yer alanı olan | tam çözülen | kısmi | hiç çözülmeyen | yalnız bölge/coğrafya/serbest | yer alanı OLMAYAN | — metninde atlas yerleşimi geçen |
|---|---|---|---|---|---|---|---|---|
| olaylar*/kronoloji* dosyaları | 10542 | 9210 | 8033 | 340 | 344 | 493 | 1332 | 445 |
| devletler.js kronoloji[] | 12253 | 0 | 0 | 0 | 0 | 0 | 12253 | 2939 |

*Son sütun = `yer_id` doldurulabilecek madde sayısı (metin taramasının katı kurallarıyla; elenen tek kelimelik eşleşmeler: bilesik-ozel-ad-parcasi 427, bolge-ulke-devlet-adi 1455, kisi-adi-kelimesi 1121).*

### Yer parçası düzeyi (`yer_id` + `yer` alanları, virgül/`ve` ile bölünmüş)
| durum | parça |
|---|---|
| **bulundu** (tek yerleşime) | **11384** |
| bulundu ama belirsiz (birden çok yerleşime düşüyor) | 10 |
| **çözülmedi — ŞEHİR** | **706** |
| çözülmedi — bölge/ülke adı | 376 |
| çözülmedi — devlet adı | 48 |
| çözülmedi — coğrafî unsur (deniz, nehir, ada…) | 174 |
| çözülmedi — serbest metin ("Batı Anadolu kıyıları" tipi) | 295 |

Bulunanın yolu: yer_id:birebir 7795 · yer:birebir 3094 · yer:normal 384 · yer:parantez 101 · yer_id:normal 11 · yer:esanlam 5 · yer:kural 3 · yer_id:parantez 1

`yer_kon` (koordinat) taşıyan **1155** madde: en yakın yerleşim ≤10 km 607 · ≤25 km 758 · ≤50 km 947. Eşik 25 km ⇒ çözülmeyen 397 (`h3_yer_kon_cozulmeyen.tsv`).

### Çözülmeyen ŞEHİR adları — **547** ayrı ad (tam liste `h3_cozulmeyen_sehir.tsv`)
İpucu sütunu HÜKÜM DEĞİLDİR: atlasta yazımı benzeyen ad (ör. `Şanlıurfa`↔`Urfa`) — bunlar yeni yerleşim değil, kaynaklı eşanlam ister. Boş ipucu = atlasta benzer yazım da yok.

| # | ad | madde | künye başkenti | ipucu: atlasta benzer yazım |
|---|---|---|---|---|
| 1 | Washington | 15 | 1 |  |
| 2 | Addis Ababa | 9 | 5 | Addis |
| 3 | Şanlıurfa | 7 | 0 | Urfa |
| 4 | Tiran | 7 | 5 | Tırgan (Traghan) |
| 5 | Topkapı Sarayı | 7 | 0 |  |
| 6 | Alamut | 6 | 1 |  |
| 7 | Budapeşte | 6 | 5 | Peşte |
| 8 | Ani | 5 | 1 |  |
| 9 | Polonnaruva | 5 | 0 |  |
| 10 | Trablusgarp | 5 | 0 | Trablus |
| 11 | Belensiye (Valencia) | 4 | 1 | Belén |
| 12 | Cürcân | 4 | 0 |  |
| 13 | Harran | 4 | 1 |  |
| 14 | Rey | 4 | 2 |  |
| 15 | Ulanbator | 4 | 0 |  |
| 16 | Ahlat | 3 | 1 |  |
| 17 | Bâbıâli | 3 | 0 |  |
| 18 | Berdesîr | 3 | 0 | Berde (Karabağ) |
| 19 | Canberra | 3 | 1 |  |
| 20 | Ebîşe | 3 | 0 |  |
| 21 | Guatemala City | 3 | 0 |  |
| 22 | Haliç | 3 | 0 | Mihaliç (Karacabey) |
| 23 | Kâğıthane | 3 | 0 |  |
| 24 | Kânim | 3 | 0 |  |
| 25 | Karlofça | 3 | 0 | Lofça (Loveč) |
| 26 | Kinsale | 3 | 0 |  |
| 27 | Leticia | 3 | 0 |  |
| 28 | Meyyâfârikîn (Silvan) | 3 | 2 |  |
| 29 | Rûyân | 3 | 1 |  |
| 30 | Şehzadebaşı | 3 | 0 |  |

### Künye başkentleri (`baskent:` metni →/·/,/ve ile bölündü; `bk:` hiçbir künyede yok)
| durum | künye |
|---|---|
| her parça çözüldü | 1115 |
| kısmi — en az bir şehir parçası yok | 112 |
| **hiçbir başkent parçası indekste yok** | 321 |
| yalnız bölge/serbest metin (şehir adı yok) | 123 |
| `baskent: "—"` | 44 |
| alan yok | 85 |

Başkenti indekste OLMAYAN künye (hiç + kısmi) = **433** · liste `h3_baskent.tsv`, eksik başkent adları `h3_baskent_eksik_sehir.tsv`.

En çok künyede geçen eksik başkentler: tiran (5) · addisababa (5) · budapeste (5) · otuken (5) · jiankang (5) · pataliputra (5) · valletta (4) · pretoria (3) · yaounde (3) · kannauj (3) · assur (3) · hattusa (3) · pella (3) · stockholm (2) · ras (2) · erivan (2) · sis (2) · marakes (2) · yenidelhi (2) · dhar (2) · bloemfontein (2) · beyteddin (2) · danzig (2) · christiania (2) · leopoldville (2)

### Sınav — iki yön (`h3_sinav.tsv`)
| yön | girdi | durum | yol | atlas karşılığı | hüküm |
|---|---|---|---|---|---|
| VAR bekleniyor | Stokholm | bulundu | birebir | Stokholm | geçti |
| VAR bekleniyor | Budin | bulundu | birebir | Budin | geçti |
| VAR bekleniyor | Revan | bulundu | birebir | Revan | geçti |
| VAR bekleniyor | İstanbul | bulundu | birebir | İstanbul | geçti |
| VAR bekleniyor | Buda | bulundu | esanlam | Budin | geçti |
| VAR bekleniyor | Suceava | bulundu | parantez | Suçava (Suceava) | geçti |
| VAR bekleniyor | Kruja | bulundu | parantez | Akçahisar (Kruja) | geçti |
| YOK bekleniyor | Ani | yok | - |  | geçti |
| YOK bekleniyor | Mistra | yok | - |  | geçti |
| YOK bekleniyor | Sis (Kozan) | yok | - |  | geçti |
| YOK bekleniyor | Harran | yok | - |  | geçti |
| YOK bekleniyor | Alamut | yok | - |  | geçti |
| YOK bekleniyor | Rey | yok | - |  | geçti |
| YOK bekleniyor | Yayçe/Jajce | bulundu | parantez | Yayça (Jajce) | BULDU — açıklama gerekir |
| katlama | İstanbul = istanbul | istanbul | - | istanbul | geçti |
| katlama | IĞDIR = Iğdır | igdir | - | igdir | geçti |

**Yayçe/Jajce neden BULUNDU:** atlasta `Yayça (Jajce)` kaydı var; parça `Yayçe/Jajce` eğik çizgiden bölünüyor ve `Jajce` atlasın kendi parantez alternatifiyle birebir eşleşiyor. `Yayçe` (e ile) tek başına aranınca YOK — yazım farkı `Yayça`↔`Yayçe`. Yani yer atlasta VAR; "yok" beklentisi atlasın adıyla değil, `Yayçe` yazımıyla doğruydu.

Bilinen-yok örneklerinin kronolojide geçişi (`h3_cozulmeyen_sehir.tsv` / metin adayı): Ani, Alamut, Harran, Rey, Mistra, Sis (Kozan) çözülmeyen şehir listesinde çıkıyor (sayıları tabloda/TSV'de).

### Yer alanı olmayan maddelerde metin taraması
- Atlas yerleşimi geçen ayrı yerleşim adı: **1191** (`h3_metin_bulunan_yerlesim.tsv`).
- Evrende OLMAYAN aday özel ad: **9164** (`h3_metin_aday_ozel_ad.tsv`) — **ADAY**dır, kesinlik iddiası yok: kişi, kurum, hanedan adı da içerir. `kesme_ekli_gecis` sütunu adın Türkçe kesme ekiyle (`Mistra'yı`) geçme sayısıdır — özel ad olmanın en güçlü kanıtı.

## Halka ④ — yerleşim yoğunluğu

### Tarih başına (DÜNYA, 11519 kara hücresi)
| tarih | boyayan yerleşim | sahnede | 0 boyayanlı kara hücresi | 1 boyayanlı | 0 sahnedeli |
|---|---|---|---|---|---|
| 1000 | 21 | 2869 | **11504** | 13 | 9721 |
| 1100 | 38 | 2877 | **11492** | 20 | 9718 |
| 1200 | 54 | 2880 | **11477** | 35 | 9717 |
| 1300 | 2545 | 2896 | **9998** | 1109 | 9708 |
| 1400 | 2603 | 2935 | **9976** | 1110 | 9695 |
| 1500 | 2666 | 2988 | **9937** | 1143 | 9662 |
| 1600 | 2857 | 3159 | **9799** | 1255 | 9538 |
| 1700 | 3165 | 3451 | **9550** | 1468 | 9306 |
| 1800 | 3440 | 3704 | **9311** | 1686 | 9092 |
| 1900 | 4161 | 4320 | **8711** | 2226 | 8572 |
| 2000 | 4264 | 4542 | **8637** | 2302 | 8476 |

### Eşik seçenekleri — kaç kara hücresi ALTTA kalır (boyayan; `h4_esik_secenekleri.tsv`)
Eşik ÖNERİLMİYOR; seçim Emre'nin. E200 motorun kendi petek tavanıdır (`TAVAN_KM`=200, `_dunya_bosluk.py`): en yakın boyayan noktaya >200 km olan hücre hiçbir peteğe girmez.

| tarih | E1: hücrede 0 | E2: hücrede <2 | E3: hücrede <3 | E200: en yakın >200 km | E100: >100 km |
|---|---|---|---|---|---|
| 1000 | 11504 | 11517 | 11519 | 11408 | 11486 |
| 1100 | 11492 | 11512 | 11519 | 11306 | 11451 |
| 1200 | 11477 | 11512 | 11519 | 11215 | 11418 |
| 1300 | 9998 | 11107 | 11339 | 6587 | 8868 |
| 1400 | 9976 | 11086 | 11336 | 6533 | 8827 |
| 1500 | 9937 | 11080 | 11334 | 6369 | 8754 |
| 1600 | 9799 | 11054 | 11327 | 5787 | 8478 |
| 1700 | 9550 | 11018 | 11320 | 4664 | 7944 |
| 1800 | 9311 | 10997 | 11319 | 3831 | 7454 |
| 1900 | 8711 | 10937 | 11309 | 2098 | 6246 |
| 2000 | 8637 | 10939 | 11309 | 1910 | 6090 |

### Kıta kırılımı — 1300 · 1500 · 1700 · 1900
| tarih | kıta | kara hücre | E1 | E2 | E3 | E200 |
|---|---|---|---|---|---|---|
| 1300 | Africa | 2489 | 2169 | 2403 | 2457 | 1303 |
| 1300 | Asia | 2678 | 2079 | 2527 | 2614 | 742 |
| 1300 | Europe | 1986 | 1513 | 1814 | 1903 | 1108 |
| 1300 | North America | 2142 | 2026 | 2139 | 2141 | 1307 |
| 1300 | Oceania | 739 | 739 | 739 | 739 | 739 |
| 1300 | Seven seas (open ocean) | 1 | 1 | 1 | 1 | 1 |
| 1300 | South America | 1484 | 1471 | 1484 | 1484 | 1387 |
| 1500 | Africa | 2489 | 2143 | 2401 | 2456 | 1201 |
| 1500 | Asia | 2678 | 2056 | 2511 | 2615 | 696 |
| 1500 | Europe | 1986 | 1513 | 1807 | 1899 | 1098 |
| 1500 | North America | 2142 | 2020 | 2137 | 2140 | 1285 |
| 1500 | Oceania | 739 | 739 | 739 | 739 | 739 |
| 1500 | Seven seas (open ocean) | 1 | 1 | 1 | 1 | 1 |
| 1500 | South America | 1484 | 1465 | 1484 | 1484 | 1349 |
| 1700 | Africa | 2489 | 2043 | 2387 | 2455 | 806 |
| 1700 | Asia | 2678 | 2023 | 2496 | 2607 | 585 |
| 1700 | Europe | 1986 | 1417 | 1787 | 1894 | 589 |
| 1700 | North America | 2142 | 1942 | 2129 | 2140 | 993 |
| 1700 | Oceania | 739 | 739 | 739 | 739 | 739 |
| 1700 | Seven seas (open ocean) | 1 | 1 | 1 | 1 | 1 |
| 1700 | South America | 1484 | 1385 | 1479 | 1484 | 951 |
| 1900 | Africa | 2489 | 1838 | 2357 | 2454 | 332 |
| 1900 | Asia | 2678 | 1954 | 2483 | 2601 | 459 |
| 1900 | Europe | 1986 | 1371 | 1778 | 1890 | 482 |
| 1900 | North America | 2142 | 1705 | 2112 | 2140 | 342 |
| 1900 | Oceania | 739 | 636 | 734 | 739 | 218 |
| 1900 | Seven seas (open ocean) | 1 | 1 | 1 | 1 | 1 |
| 1900 | South America | 1484 | 1206 | 1472 | 1484 | 264 |

Dağılımın tamamı (0 · 1 · 2 · 3-4 · 5-9 · 10+, ortalama, medyan; kıta × tarih × boyayan/sahnede): `h4_dagilim_tarih_kita.tsv`. 0/1 boyayanlı hücrelerin haritası (hücre, tarih, sayı, en yakın boyayana km, kara ağırlık merkezi lat/lon): `h4_seyrek_hucre.tsv`. Izgara dışı (|enlem| pencere dışı) yerleşim: 0.

### `SEHIR-1900-KOORDINAT-1013` `atlasta-yok` şehirleri × 1900 seyrek hücreleri
Toplam 1702 şehir (koordinatlı 1702; ızgara dışı 0; kara-hücresi-dışı 65).

| eşik (1900, boyayan) | düşen şehir | dokunduğu ayrı seyrek hücre |
|---|---|---|
| E1 hücrede 0 | 914 | 611 |
| E2 hücrede <2 | 1392 | 923 |
| E3 hücrede <3 | 1545 | 1011 |
| E200 >200 km | 36 | 24 |

Şehir başına satır: `h4_sehir1900_aday.tsv`.

## Ölçüm uyarıları (ölçülemedi ≠ yok ≠ temiz)
- **1000–1200 boyayan sayısı neredeyse sıfır** (bkz. tablo): girdi evreninde 1281 öncesi sahiplik dönemi yalnız birkaç düzine kayıtta yazılı. `data/yer_yama_once1281_z6.js` (1000–1281 sahiplik ÖNERİSİ) girdi listesinde değil ⇒ bu ölçüm onu SAYMAZ. Önce-1281 hücre sayıları "yoğunluk" değil "sahiplik verisi yok" demektir; sahnede sütunu yerleşim noktalarının varlığını ayrıca gösterir.
- Ad katlaması kayıplıdır: `Küba`→`kuba` atlastaki `Kuba`ya (Azerbaycan) düşer; `ad_esanlam.js` `belirsiz` listesi dışındaki çarpışmalar ÖLÇÜLMEDİ. Metin taraması sezgiseldir (kesme eki, büyük harf, kişi/unvan süzgeci); son sütun bir ÜST SINIR değil, kurallara bağlı bir tahmindir.
- Çözülmeyen şehir listesinde İstanbul semtleri (Topkapı, Bâbıâli, Kâğıthane…) ve bölge adları (süzgeçten kaçanlar) da var — liste insan gözüyle ayıklanmalı; araç sınıflandırmayı `arac/yer_esanlam.json` `bolge_adlari`/`bolge_ek_1014` ile yapar, liste genişletilebilir.
- Kıta ataması modern ülke poligonuyla; `Seven seas (open ocean)` kovası küçük okyanus adalarıdır.
