# UMIT-W17-YERID-YETIM-1006 — imza yeri yer_id · 17 yetim madde · 3 mükerrer çift

W17 · 5 Ekim 2026 · görev: UMIT İRTİBAT (hüküm YILDIRIM BAYEZIT'te) · ölçüm ağacı
`C:\atlas-w17`. Ölçümler origin/main `3e4b3a98`'de koştu; diff **teslim anındaki origin/main
`2da07731`** + W18 `JASENOVAC-BROD-1536-1006.diff` üstünde yeniden kuruldu.
`git diff --quiet 3e4b3a98 2da07731 -- data/ arac/` ⇒ **AYNI** (ölçümler bugünkü main için geçerli).
`data/` yalnız diff olarak; hiçbir yere uygulanmadı. Commit yok.

## 00. TAZELİK DENETİMİ (koordinatör ek şartı)
- **İŞ 1:** dedektör + 5 kaçırılan ad 2da07731+W18 ağacında yeniden koştu: **95 aday, 3e4b3a98
  kümesiyle BİREBİR aynı** (t·yer_id·b·dosya). 56 kalemin 56'sı main'de VAR. **Uyuşmazlık:
  liste 57 diyor, bugün 56** — Bükreş 1913 zaten çözülmüş (`yer_id:"Kavala"`). BAYAT KALEM: **1**
  (Bükreş 1913) → diff'te yok. Düzeltme koordinatörde.
- **İŞ 2:** 17'nin 17'si bugün de aynen duruyor (madde var, kayıt aynı) — BAYAT 0. Ama
  görev tanımındaki **Bağdat örneği BAYAT** (§2.1).
- **İŞ 3:** 3 çiftin 6 kopyası main'de VAR (§3). "W11 gerçek mükerrer 0" ölçümüyle
  çelişki tanımdan: §3.1.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
```
İŞ 1: 56 madde · 37 diff · 1 meşru · 18 rapor
      ODAKSIZ değişmez · kırık atıf +0 · Değişmez 2 açık 0 kalır · 2s AÇIK 0..−5
İŞ 3: 3 çiftin İKİ kopyası da Değişmez 2 evreninde (kronoloji_sinir*.js 24 Eyl'de
      evrene katıldı) ⇒ SABAH B11 önermesi BAYAT; hiçbir silme açık sayısını değiştirmez
```
Değerlendirme: §1.4 ve §3'te.

---

## 1. İŞ 1 — imza yeri `yer_id`

### 1.1 Evren — 57 değil 56
KASA'nın 57'si (`KASA-TERS-MADDE-1004.md` EK) = 52 SAF + 5 kaçırılan (Uşi · Ayastefanos ·
Sevr · Küçük Kaynarca · Pasarofça). KASA tablosunu bugünkü veriye yeniden kurdum
(`denetle.olaylari_yukle()` + aynı dedektör + 5 ad): **95 aday**, SAF sınıfının 52'si tek
tek eşlendi. **Bükreş 1913 artık evrende değil** — `yer_id` zaten `Kavala`
(`olaylar_2s_0920.js:113`, YETIM-MADDE-1005 hattı). ⇒ **56 madde.**

### 1.2 Hüküm dağılımı
| sınıf | sayı | nerede |
|---|--:|---|
| **ÇÖZÜLDÜ** → `yer_id` = etkilenen toprak, havuzda tam ad | **37** | diff (13 dosya; ek5'te 11) |
| **MEŞRU** — imza yeri aynı zamanda etkilenen toprak | **1** | dokunulmadı |
| **ÇÖZÜLEMEDİ** — rapor, diff'te YOK | **18** | §1.3 |

**Meşru (KASA'nın sınıflaması düzelir):** Pasarofça 1718 `yer_id:"Semendire"`
(`olaylar_ek5.js:555`). Semendire kaydı `s:avusturya 1717-08-18 → 1738-08-01` — Pasarofça
ile Avusturya'ya bırakılan Kuzey Sırbistan'ın içinde. İmza yeri yakını OLMASI, etkilenen
toprak OLMADIĞI anlamına gelmiyor. Dokunulmadı.

### 1.3 Çözülen 37 — tablo
Seçim ölçütü: ① maddenin kendi metninde ADIYLA geçen ya da metnin tarif ettiği toprak,
② havuzda tam adla kayıt, ③ varsa o gün kırılma taşıyan nokta (birden çok ise metinde ilk
anılan / merkez). "◆" = kayıtta madde günü ±0 kırılma var.
Satır numaraları `2da07731` (W18 öncesi) hâlidir; `olaylar_ek5.js`te W18'in 1536 eklemesinden
sonraki satırlar kayar — diff bağlamla uygulanır, numara değil.

| dosya:satır | t | eski | **yeni** | gerekçe |
|---|---|---|---|---|
| olaylar_ek3.js:11 | 1403-06-15 | Gelibolu | **Selanik** ◆ | "Selanik'i … iade etti" · kayıt `suleyman-celebi→bizans 1403-06-01` |
| olaylar_ek.js:56 | 1479-01-25 | İstanbul | **İşkodra** ◆ | başlık · `venedik→d 1479-01-25` |
| kronoloji_sinir_avrupa_bati.js:100 | 1570-12-13 | Stettin (Szczecin) | **Östersund (Jämtland)** | "Jämtland ve Härjedalen'i geri verdi" (atlasta 1564-70 İsveç işgali YOK — veri borcu) |
| olaylar_ek5.js:206 | 1573-03-07 | İstanbul | **Lefkoşa** | "Kıbrıs'ın Osmanlı'ya ait olduğunu kabul" |
| kronoloji_sinir_avrupa_bati.js:135 | 1668-05-02 | Aachen | **Lille** ◆ | İspanyol Hollandası sınırı · `ispanya→fransa 1668-05-02` |
| kronoloji_sinir_avrupa_bati.js:141 | 1678-09-17 | Nijmegen | **Besançon** ◆ | Franş-Konte · `ispanya→fransa 1678-09-17` |
| olaylar_ek5.js:263 | 1700-07-14 | İstanbul | **Azak** | başlık (KASA-IC-CELISKI'de de "yer_id başka yer" sınıfı) |
| olaylar_ek5.js:286 | 1739-10-03 | Niş | **Azak** ◆ | "Azak … tarafsız" · `d→rusya 1739-09-18` (15 gün) |
| olaylar.js:139 | 1774-07-21 | Silistre | **Bahçesaray** ◆ | Kırım'a "bağımsızlık" · `isg:rusya→kirim 1774-07-21` |
| olaylar_ek5.js:306 | 1792-01-10 | Yaş | **Hacıbey (Odessa)** ◆ | "Turla'nın sol yakası Rusya'ya" · `d→rusya 1792-01-09` |
| olaylar_p0068b.js:93 | 1792-01-18 | Yaş | **Hacıbey (Odessa)** ◆ | aynı antlaşmanın onayı (9 gün) |
| olaylar_ek.js:75 | 1812-05-28 | Bükreş | **Bender** ◆ | Besarabya; metinde adıyla · `isg:rusya→rusya 1812-05-28` (Kişinev havuzda YOK) |
| kronoloji_sinir_avrupa_orta.js:37 | 1814-06-03 | Paris | **Innsbruck** ◆ | Tirol · `almanya→avusturya 1814-06-03` |
| olaylar_ek4.js:157 | 1828-08-06 | İskenderiye | **Mora (Tripoliçe)** | Mısır Mora'dan çekilme · `v:misir-kavalali` biter 1828-10-05 |
| olaylar_ek8.js:269 | 1830-02-03 | Londra | **Andros** ◆ | Kiklad · `d→yunanistan 1830-02-03` |
| olaylar_ek4.js:216 | 1833-05-14 | Kütahya | **Şam** | "Suriye … Mehmed Ali'ye" · `v:misir-kavalali 1832-06-15→1841-02-25` |
| olaylar_ek4.js:277 | 1840-11-27 | İskenderiye | **Şam** | "Suriye … vazgeçmeyi" · aynı dönem sonu 1841-02-25 |
| olaylar_ok106.js:64 | 1847-05-31 | Erzurum | **Abâdân** ◆ | Şattülarap doğu yakası · `d→kacar 1847-05-31` |
| olaylar_kamerika.js:118 | 1851-09-17 | Fort Laramie | **Crow Agency (Apsáalooke)** ◆ | "Karga … topraklarının sınırları" · `karga→abd 1851-09-17` |
| olaylar_ek5.js:379 | 1856-03-30 | Paris | **İsmail** ◆ | Güney Besarabya · `rusya→v: 1856-03-30` |
| olaylar_kamerika.js:50 | 1868-07-03 | Fort Bridger | **Fort Washakie (Wind River)** | başlık "Wind River Rezervasyonu" |
| olaylar_ek5.js:410 | 1878-03-03 | İstanbul | **Kars** | "Kars, Ardahan, Batum ve Doğubayazıt'ı Rusya'ya" (ilk anılan) |
| olaylar_p0917taraf.js:27 | 1909-04-19 | İstanbul | **Sofya** | Bulgaristan bağımsızlığının tanınması · §3 çift A |
| kronoloji_sinir_turkiye.js:24 | 1909-04-19 | İstanbul | **Sofya** | aynı · §3 çift A |
| olaylar_ek5.js:434 | 1912-10-18 | Lozan | **Trablus** ◆ | Uşi · `isg:italya→italya 1912-10-18` |
| olaylar_ek5.js:437 | 1913-09-29 | İstanbul | **Edirne** | "Edirne'nin tescili" |
| kronoloji_sinir_turkiye.js:36 | 1913-09-29 | İstanbul | **Mustafapaşa (Svilengrad)** ◆ | sınır tarifi · `d→bulgaristan 1913-09-29` |
| olaylar_ek5.js:438 | 1913-11-14 | Atina | **Selanik** ◆ | "Selanik, Yanya … devri" · `isg→yunanistan 1913-11-14` |
| olaylar_p0917taraf.js:33 | 1913-11-17 | İstanbul | **Kasr-ı Şîrîn** | Türk-İran sınırı; kardeşi `kronoloji_sinir_komsu.js` aynı seçimi yapmış · §3 çift B |
| kronoloji_sinir_turkiye.js:42 | 1913-11-17 | İstanbul | **Kasr-ı Şîrîn** | aynı · §3 çift B |
| olaylar_p0917taraf.js:39 | 1915-09-06 | Sofya | **Dimetoka** | Meriç batı yakası düzeltmesi · §3 çift C · ⚠️ §1.5 |
| kronoloji_sinir_turkiye.js:48 | 1915-09-06 | Sofya | **Dimetoka** | aynı · §3 çift C |
| kronoloji_sinir_turkiye.js:60 | 1921-03-16 | Moskova | **Batum** ◆ | "Batum'u Gürcistan'da bıraktı" · `→sovyet-rusya 1921-03-16` |
| olaylar_ek5.js:458 | 1921-10-20 | Ankara | **Adana** | "Adana, Antep, Maraş, Urfa … boşaltarak" · `isg:fransa` biter 1922-01-05 |
| olaylar_ek5.js:459 | 1922-10-11 | Mudanya | **Edirne** | Doğu Trakya'nın boşaltılması · `isg:yunanistan` biter 1922-11-10 |
| kronoloji_sinir_turkiye.js:84 | 1923-07-24 | Lozan | **Edirne** | "Karaağaç dirseği" (Karaağaç havuzda YOK; Edirne'nin karşı yakası) |
| kronoloji_sinir_turkiye.js:90 | 1923-07-24 | Lozan | **Rezve (Rezovo)** | "Rezve ağzından Meriç'teki üçlü noktaya" |

### 1.4 Ölçüm — ÖNCE / SONRA (37 değişiklik `C:\atlas-w17`'ye uygulanıp)
```
                                    ÖNCE                  SONRA
odak_olc  ODAKSIZ                   769                   769        (değişmedi)
          BEYANLI→yabancı           653                   653
          ÇÖZÜLMEYEN ODAK ATFI      1 (Ogaden, alakasız)  1          kırık atıf +0 ✓
denetle   Değişmez 2                623 kırılma · 0 açık  623 · 0 açık
          Değişmez 2s               187 AÇIK (tavan 189)  187 AÇIK
          Değişmez 2sk YER anılarak 1571                  1588       +17
                       YALNIZ TARAF 1665 (tavan 1665)     1648       −17
          Değişmez 2i               171 · 1 açık          171 · 1 açık
          Değişmez 2t               13 (tavan 13)         13
```
(denetle her iki koşuda çıkış 2 — taze ağaçta `devletler_harita.js` yok; özet satırları karşılaştırıldı.)
**Öngörü değerlendirmesi:** ODAKSIZ ✓ · kırık atıf ✓ · Değişmez 2 ✓ · 2s AÇIK **0..−5 öngörmüştüm, 0
çıktı** — ama asıl etki öngörmediğim yerde: **17 kırılma "yalnız taraf"tan "yer anılarak"
kapanışa geçti** (2sk TARAF tavanına 17 birim pay açar). Mekanizma: yeni `yer_id`ler o gün
kırılan noktaya bağlandı; kırılmalar zaten tarafla kapalıydı, artık yerle de kapalı.

### 1.5 Çözülemeyen 18 — rapor (diff'te YOK)
| t | şimdiki | sebep | öneri |
|---|---|---|---|
| 1533-01-01 · 1547-06-18 İstanbul | Habsburg barışları | toprak el değiştirmiyor (vergi karşılığı statüko) | proje kararı: toprak değişmeyen antlaşmada `yer_id` ne gösterir |
| 1555-05-29 Amasya | Amasya Antl. | metin devir anlatmıyor (Bağdat "kaldı", sınır tanındı) | aynı karar |
| 1681-01-11 Bahçesaray | Rusya barışı | "Özü nehri sınır" — tek nokta yok; Kiev metinde geçmiyor | `kapsam_genis`/kutu |
| 1713-06-24 Edirne | Rusya ile Edirne | Prut şartlarının teyidi; devir 1711'de | — |
| 1724-06-24 İstanbul | Mukāsemenâme | çok toprak (Tebriz, Hemedan, Revan, Gence, Şirvan…) tek başlık yok | kutu |
| 1736-09-01 İstanbul | Güney Kafkasya terki | çok toprak (Tiflis, Gence, Revan — hepsi 1735'te d: biter) | kutu |
| 1760-03-24 Torino | Fransa–Sardinya sınırı | "koordinatı haritada yoktur" (madde kendisi söylüyor) | — |
| 1802-06-25 Paris | Fransa ile barış | toprak devri yok | aynı karar |
| 1814-05-30 Paris | Fransa–İsviçre sınırı | Cenevre kaydı `isvicre 1536→` (1798-1813 Fransız dönemi YOK) ⇒ kırılma yok | veri borcu önce |
| 1816-04-14 Münih | Salzburg | **Salzburg havuzda YOK** | nokta borcu |
| 1823-01-01 Erzurum | I. Erzurum | statüko ("yeni bir sınır çizmedi") | aynı karar |
| 1826-10-07 Akkirman | prensliklere tavizler | statü, sahip değişmiyor | aynı karar |
| 1878-07-13 Berlin | Berlin | çok toprak (62 kırılma ±45 gün) | `kapsam_genis` + kutu |
| 1910-05-19 Trablus | Tunus–Trablusgarp sınırı | **Gadames havuzda YOK** (ad varyantları tarandı) | nokta borcu |
| 1913-05-30 Londra | Rumeli'nin kaybı | çok toprak (30 kırılma) | `kapsam_genis` + kutu |
| 1920-08-10 Paris | Sevr | uygulanmadı + çok toprak | — |
| 1923-07-24 Lozan (genel, `olaylar.js:223`) | Lozan | çok toprak (24 ada aynı gün) | `kapsam_genis` + kutu |
🔴 Bunların hiçbiri boşaltılmadı (ODAKSIZ tavanı) — hepsi bugünkü imza yeri `yer_id`siyle duruyor.

**Yan bulgu (veri, bu görevin dışında):** **Dimetoka** kaydı `bulgaristan-kralligi 1913-05-30 →
1920-05-27` kesintisiz. Oysa Dimetoka 1913-09-29 İstanbul Antlaşması'yla Osmanlı'da kaldı
(madde `olaylar_ek5.js:437` metni: *"Edirne, Kırklareli, **Dimetoka** ve Doğu Trakya'nın
Osmanlı'da kalmasını hukuken tescil etti"*) ve 1915 Sofya Sözleşmesi'yle Bulgaristan'a geçti.
⇒ atlas kendi maddesiyle çelişiyor; 1913-09-29 → 1915-10 arası `d:` dönemi eksik. Diff bu
yüzden 1915 maddelerini Dimetoka'ya bağlıyor ama o gün Dimetoka'da kırılma YOK — dönem
yazılınca bağlanır.

---

## 2. İŞ 2 — 17 yetim madde (ölçüm + sınıf, diff YOK)
Kaynak: `KASA-IC-CELISKI-1004.md` (190 aday → 17 gerçek çelişki). 17'si **bugün de
aynen duruyor** (HEAD verisiyle yeniden ölçüldü; araç `yetim17.py` — `girdi.yukle` +
`denetle.oku_pencere`, yer zincirinde ±10 yıl kırılma).

Tanım: **① GERÇEKTEN YETİM** = o kaydın zincirinde ±10 yılda o değişime karşılık gelebilecek
HİÇ kırılma yok · **② BAĞI KOPMUŞ** = kırılma var ama ±30 gün dışında (ya da başka olayı
temsil ediyor). Yanlış `yer_id` sınıfına düşen yok (KASA o sınıfı zaten yanlış pozitife ayırmıştı).

### ① Gerçekten yetim — 8 · çare: KAYITTA EKSİK DÖNEM (veri + kaynak)
| madde (dosya) | madde ne diyor | kayıt | önerilen çare |
|---|---|---|---|
| 1330-07-28 Köstendil (`kronoloji_sinir_komsu.js`) | Velbujd: Köstendil Sırp hâkimiyetine | `bulgaristan 1281→1371`, ±10y kırılma 0 | `s:` Sırp (Dejanović) dönemi; TDV `kostendil` |
| 1427-01-01 Alanya (`olaylar_ek9.js`) | Memlük'e satış | `alaiye 1293→1471`, 0 | önce TDV `alanya` — satış fiilî devir mi, sembolik mi |
| 1555-01-01 İbrim (`olaylar_ek5.js`) | İbrim alındı, sınır güneye | `d:` 1517'den (38 yıl önce), ±10y 0 | kaydın başlangıcı 1555'e (TDV `ibrim`) |
| 1789-01-01 Akkirman (`olaylar_p0068b.js`) | ikinci Rus ele geçirişi | `isg:` 1770-74 ve 1806-12 var, 1789 yok | `isg:rusya 1789→1792-01-09`; madde günü de `-01-01` (temsilî) |
| 1829-09-14 Edirne (`olaylar_ek.js` +3 kuyruk) | Rus ordusu Edirne'de | `d:` kesintisiz, `isg:` yok | `isg:rusya 1829-08-20 →` (tahliye günü kaynaktan) — antlaşma `yer_id`'si meşru kalır |
| 1883-12-23 Darfur (`olaylar_ek9.js`) | Mehdî'ye teslim | `darfur 1695→1916` kesintisiz | iki dönem eksik: Mısır 1874→1883 · Mehdî 1883→1898 |
| 1897-04-17 Yenişehir (Larissa) (`olaylar_ek5.js`) | Osmanlı Teselya'yı aldı, iade | `yunanistan 1881→` kesintisiz | `isg:` Osmanlı 1897-05 → 1898-05 (iade) — `isg:` d: için şema kararı gerek |
| 1920-01-01 Aleksandrovsk (Kuzey Sahalin) (`kronoloji_sinir_asya.js`) | Japon işgali | `sovyet-rusya` | `isg:japonya 1920-07 → 1925-05-15` + madde `t:` 1920-01-01 ↔ metin "Temmuz 1920" (tarih düzeltmesi) |

### ② Bağı kopmuş — 9 · iki alt sınıf, çareleri farklı
**②a Aynı olay, iki farklı tarih — önce KAYNAK HÜKMÜ, sonra tek taraf düzelir (5):**
| madde | kayıt kırılması | fark | not |
|---|---|---|---|
| 1339-01-01 Kayseri (`olaylar_p0058.js`) | `ilhanli→eretna 1335-01-01` | −1461 g | üç değer: madde 1339 · kayıt 1335 · TDV `kayseri` 1343 |
| 1374-01-01 Köstendil (`olaylar_ek5.js`) | `bulgaristan→v: 1371-09-26`; `d:` 1395 | −828 g | madde "doğrudan Osmanlı yönetimine" ⇔ kayıt 1395'e dek `v:` (v↔d hükmü) |
| 1381-06-01 Isparta (`olaylar_ek.js`) | `hamid→d 1391-01-01` | +3501 g | satış 1381 ⇔ ilhak 1391: iki olay olabilir; satış `d:` mi `v:` mi |
| 1503-01-01 Hemedan (`olaylar_ek11.js` + `kronoloji_akkoyunlu.js`) | `akkoyunlu→safevi 1508-01-01` | +1826 g | madde "haritada aynı anda el değiştirir" diyor ⇒ kayıt 1503'e |
| 1896-09-23 Dongola (`olaylar_ek9.js` + `kronoloji_misir.js`) | `mehdi→ingiliz-sudani 1899-01-19` | +848 g | Dongola'ya özgü geri alınış günü 1896-09-23; bölge genel tarihi kayda yazılmış |

**②b Ara işgal modellenmemiş — kırılma BAŞKA olayı (sonraki hukukî devri) temsil ediyor;
çare kırılmayı KAYDIRMAK DEĞİL, `isg:` EKLEMEK (4):**
| madde | kayıttaki kırılma (başka olay) | eksik dönem |
|---|---|---|
| 1400-08-01 Sivas (`olaylar_ek5.js`) | `d→timurlu 1402-07-28` (Ankara) | Timur'un 1400 alışı (kısa) |
| 1736-07-13 Azak (`olaylar_p0063.js`) | `d→rusya 1739-09-18` (Niş/Belgrad) | `isg:rusya 1736-07 → 1739-09-18` |
| 1789-10-11 İsmail (`olaylar_p0068b.js`) | `d→isg:rusya 1790-12-22` (Suvorov) | 1789 teslimi — ⚠️ önce TDV: 1789 teslimi gerçekten var mı (1790 ile karıştırılmış olabilir) |
| 1911-10-08 Tobruk (`olaylar_ek9.js`) | `d→italya 1912-10-18` (Uşi) | `isg:italya 1911-10 → 1912-10-18` — Bingazi/Derne/Trablus'ta bu kalıp VAR, Tobruk'ta yok |

### 2.1 Bağdat örneği — BAYAT
Görev tanımındaki "Bağdat fethi bir mesneviyle ✓ alıyor" (`KASA-TERS-MADDE-1004`) bugün
geçerli değil: fethin kendi maddesi **`olaylar.js` 1534-12-04 `yer_id:"Bağdat"`** "Bağdat'ın
fethi — Irakeyn Seferi" evrende ve kırılmayla aynı gün (ayrıca `kronoloji_iran.js` aynı gün).
Mesnevi (`olaylar_ek14.js` 1535-01-01) yalnız FAZLADAN bir kapatıcı; zararsız.

---

## 3. İŞ 3 — 3 mükerrer çift
| çift | çekirdek (`olaylar_*`) | kuyruk? (`kronoloji_sinir_*`) |
|---|---|---|
| A 1909-04-19 Türk-Bulgar Protokolü | `olaylar_p0917taraf.js:25-29` | `kronoloji_sinir_turkiye.js:23-27` |
| B 1913-11-17 İstanbul Protokolü (Türk-İran) | `olaylar_p0917taraf.js:31-35` | `kronoloji_sinir_turkiye.js:41-45` |
| C 1915-09-06 Sofya Sözleşmesi | `olaylar_p0917taraf.js:37-41` | `kronoloji_sinir_turkiye.js:47-51` |
`t` + `b` birebir aynı; `d` iki ayrı yazımla aynı olayı anlatıyor; kaynakları aynı.

### 3.0 🔴 SABAH B11'in TUZAĞI BAYAT — iki kopya da Değişmez 2 çekirdeğinde
`denetle.py:1104-1111` (24 Eylül, Emre hükmü): `kronoloji_sinir*.js` **EVRENE KATILDI**.
`olaylar_yukle()` = `olaylar*.js` + `kronoloji_sinir*.js`. ⇒ `kronoloji_sinir_turkiye.js`
**kuyruk değil, çekirdek.** CLAUDE.md §5'teki "`kronoloji*.js` Değişmez 2 evreninde DEĞİL"
satırı `kronoloji_sinir*` için bayat (o satır §5'te düzeltilmeli — koordinatör işi).
Öngörü ✓ (mühürlüydü).

### 3.1 Silme varyantları — 6 koşu, geçici ağaçta tek tek (`mukerrer.py`; her biri tam `denetle.py`)
```
silinen kopya                                 D2       2s AÇIK  2sk YER/TARAF  2i     2t
(hiçbiri — taban)                             623/0    187      1571/1665      171/1  13
A çekirdek p0917taraf     · A sinir_turkiye   623/0    187      1571/1665      171/1  13   (ikisi de)
B çekirdek p0917taraf     · B sinir_turkiye   623/0    187      1571/1665      171/1  13   (ikisi de)
C çekirdek p0917taraf     · C sinir_turkiye   623/0    187      1571/1665      171/1  13   (ikisi de)
```
⇒ **Hiçbir kopya tek başına bir kırılma kapatmıyor** — altısının silinmesi de senkronu
kıpırdatmıyor. (Bugünkü `yer_id`'leri İstanbul/İstanbul/Sofya ve o günlerde orada kırılma
yok; kapattıkları bir şey yok.) Öngörü ✓.
📌 W11'in "gerçek mükerrer 0"ı ile çelişki büyük ihtimalle **TANIM**dan: üç çift `t`+`b`
birebir, ama `d` metinleri farklı ifadeli — tam metin eşliği soran bir ölçüt 0 bulur. Ben
"aynı olay, aynı gün, aynı başlık, iki kayıt" sayıyorum. Hüküm koordinatörde.

### 3.2 Hangisi kalmalı — ÖNERİ (silme yapılmadı, diff yok)
Senkron farkı SIFIR olduğu için karar **içerik** kararıdır:
- **`kronoloji_sinir_turkiye.js` kopyası daha zengin:** `hat:"d1909-osm-bg-eski" /
  "d1913-osm-ir-1" / "d1915-osm-bg"` (sınır katmanına bağ) + `taraflar:` + `devlet:`.
  Sınır katmanı bu bağı okuyorsa silinemez.
- **`olaylar_p0917taraf.js` kopyası:** `kesinlik:"gun"`, `gun:` metni, `duygu:` taşıyor; `hat:` yok.
- ⇒ **Öneri: `olaylar_p0917taraf.js`'teki 3 kopyayı sil, `kesinlik`/`duygu`/`gun`u
  `kronoloji_sinir_turkiye.js` kopyasına taşı.** SABAH B11'in tersi — ama o hükmün dayandığı
  "kuyruk evrende değil" önermesi bayat olduğu için. Silmeden ÖNCE: `hat:` alanını okuyan
  kod (`app.js` sınır katmanı) taranmalı — **taramadım.**
- Ekranda madde çift görünüyorsa (iki dosya da `index.html`'de yüklü) kullanıcıya etkisi
  bugün de var — **ölçmedim.**
- Diff'teki yeni `yer_id`ler (Sofya · Kasr-ı Şîrîn · Dimetoka) iki kopyaya da eşit yazıldı;
  hangisi silinirse silinsin diff çakışmaz.

---

## 4. Değişen / üretilen dosyalar
- `C:\atlas-umit\denetim\YERID-IMZA-1006.diff` — **TEK diff** · 13 dosya · 37 `yer_id`
  (37 −/37 +, başka satır yok) · LF · CR 0. Taban: `2da07731` + W18. Sınavlar:
  ```
  2da07731 + W18 JASENOVAC → W17   ileri --check ✓     (ardışık, istenen sıra)
  2da07731 yalnız → W17            ileri --check ✓     (ek5 hunk'ları W18'in 1536 eklemesine değmiyor)
  2da07731 + W18 → W17  -R         ✗ (beklenen)
  W17 uygulanmış → -R              ✓
  ```
  Ara ek5 dosyası (`-ek5-BEKLEYEN.diff`) birleştirildi ve silindi.
- `C:\atlas-umit\denetim\UMIT-W17-YERID-YETIM-1006.md` — bu rapor
- `data/` · `arac/` · `C:\atlas` hiçbirine yazılmadı. Ölçüm betikleri scratchpad'de
  (`imza_liste.py` · `kirilma_yakin.py` · `uygula.py` · `yetim17.py` · `mukerrer.py`), depoya girmedi.
- **Ağaç:** `C:\atlas-w17` detached `2da07731`, `git status --short` → **0 satır** (temiz).
