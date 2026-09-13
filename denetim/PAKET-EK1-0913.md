# PAKET-EK1 · HANEDAN İÇİ KATL + BAĞLILIK STATÜLERİ — TESLİM · 13 Eylül 2026

Parti: `ClaudEmre/kutu/giden/parti-emrelic-0048/PARTI.md` (yalnız OKUNDU) · Koordinatör: 1.MURAT · açılış M-3843.
Kalemler: **H-0003** · **H-0004 + H-0014** · **H-0002 (makale kısmı)**.

**Yazılan dosyalar yalnız:** `data/ekokuma_hanedan.js` (YENİ, `window.EKOKUMA_HANEDAN`) · `data/ekokuma_statu.js`
(YENİ, `window.EKOKUMA_STATU`) · `data/ekokuma_kadin.js` içinde **yalnız** `tartisma-kadinlar-saltanati` kartı · bu rapor.
`js/` · `index.html` · kronoloji · yerleşim · `arac/` · `devletler.js` · `savaslar.js` · öteki ekokuma dosyaları **dokunulmadı**.
Commit YOK, CEVAP.json dokunulmadı.

⚠️ **Yükleyici:** iki yeni dosya `js/app.js _EKOKUMA_DOSYA_ADLARI` listesine **UI oturumu tarafından** eklenmeden ekranda
görünmez (`_ekHavuz()` değişken adını desenle toplar, ama dosyayı yükleyen liste elle). Tarayıcıda **sınanmadı**.

---

## 0 · ÖZET — ölçülmüş

```
dosya                     kart   bağ    tür
ekokuma_hanedan.js          5     38    1 sebep-sonuc · 4 tartisma (1 görüşler + 3 liste)
ekokuma_statu.js           15     57    15 tartisma (3 terim · 1 iki tarihyazımı · 11 bağlı yapı)
ekokuma_kadin.js (1 kart)   1      2    tartisma — yalnız metin/not temizliği
────────────────────────────────────────
TOPLAM                     21     97
```

| denetim | sonuç |
|---|---|
| `node --check` (3 dosya) | ✓ 3/3 |
| `node denetim/ARAC-A2-BAG-0913.js --hepsi` | öz-sınav 7/7 · evren 84 dosya / 6210 madde · havuz 17 dosya / 178 kart · **BAĞ 551/551 · HATA 0 · UYARI 141** |
| — bunlardan EK1 kartlarının uyarısı | **16**, hepsi elle okundu: aynı olayın çekirdek + kuyruk kopyası (Kırım 1475/1774/1783, Hicaz 1517/1813, Tunus 1534/1574, Trablusgarp 1551, Harşan 1687, Vâdisseyl 1578, Bucaş 1672) |
| `node denetim/ARAC-A2-KOPYA-0913.js` (21 kart, 229 TDV gövdesi) | **🔴 0 · ⚪ ölçülemedi 0** · 🟡 2 (aşağıda) |

🟡 kalan iki: `statu-terim-eyalet-sancak-ocaklik` 11 kelime = **dokuz eyalet adının listesi** (Mısır, Bağdat… Trablusgarp — özel ad dizisi,
başka türlü yazılamaz) · `statu-iki-tarihyazimi` 8 kelime = Karlofça murahhaslarının **atfedilmiş sözü** ("hür bir ülke… kılıçla değil").

🔴 **Telif sınavının yakaladığı ve düzeltilenler (2 tur):** `statu-bogdan` iç notunda TDV cümlesi aynen (12 kelime) · Kırım anlaşma kalıbı (10) ·
Ukrayna nâme cümlesi (9) → yeniden yazıldı.

---

## 1 · H-0003 — Kadınlar Saltanatı terim kartı ✅

`data/ekokuma_kadin.js` · `tartisma-kadinlar-saltanati` · bağ `1595-02-01` · `1651-09-02` (değişmedi)

- Okuyucuya görünen `not` ("Peirce'in kitabının tam metni okunmadı… D107 gereği 'okumadım' damgası") **kaldırıldı** → `ic_not`'a taşındı (eski metin aynen saklandı).
- `bag` bir dosya adı ve kimlik taşıyordu (`merak.js kadinlar-saltanati`) → okuyucu diliyle yeniden yazıldı.
- **Dürüstlük düzeltmesi:** Peirce hâlâ OKUNMADI. Metin kitabın İÇERİĞİNE dair iddialardan arındırıldı ("terimi sorguladı ve … sormayı öğretti" çıktı); kitap yalnız "alanda sık anılan çalışmalardan biri" diye bibliyografik anılıyor.
- **Ölçüldü:** eski metnin "TDV Vâlide Sultan maddesi bu adlandırmayı aktarır" cümlesi TDV `valide-sultan` gövdesinde **DOĞRU** çıktı ("kadınlar saltanatı denilen dönem" · 1656'da "sona ermiş oldu") → kaynağın biçimiyle geri yazıldı.
- Kaynak: TDV `valide-sultan` (gövde okundu) + kartın mevcut kaynak listesi. Telif: en uzun ortak dizi 5.

## 2 · H-0004 + H-0014 — kardeş katli ✅ (5 kart, `ekokuma_hanedan.js`)

| id | tür | bağ | kesinlik |
|---|---|---|---|
| `sebep-sonuc-1595-on-dokuz-sehzade` | sebep-sonuc | 1553-10-05\|Mustafa · 1562-07-23 · 1566-09-24 · 1574-12-22 · 1595-01-27 · 1603-12-22 | tartismali |
| `tartisma-ahmed1-kardes-katli-terki` | tartisma | 1595-01-27 · 1603-12-22 · 1603-12-23 · 1617-11-22\|ekberiyet · 1618-02-26 · 1622-05-20\|Mustafa | tartismali |
| `liste-hanedan-ici-katl-1-1374-1562` | tartisma (14 satır) | 11 bağ (Savcı 1373 · Kosova 1389 · Fetret 1406/1411/1413 · Düzmece 1421 · 1451 · 1513 · Rodos 1522 · 1553 · 1562) | kesin |
| `liste-hanedan-ici-katl-2-1574-1808` | tartisma (8 satır) | 7 bağ | kesin |
| `liste-hanedan-ici-katl-3-rivayet-ve-supheli` | tartisma (13 satır) | 8 bağ | tartismali |

**Kaynak (hepsi HTTP 200 + gövde okundu):** TDV `sehzade` · `mehmed-ii` · `bayezid-ii` · `bayezid-sehzade` · `selim-ii` · `murad-iii` · `mehmed-iii` ·
`mustafa-i` · `ahmed-i` · `kosem-sultan` · `osman-ii` · `murad-iv` · `mustafa-iv` · `selim-iii` · `osman-i` · `orhan` · `murad-i` · `bayezid-i` ·
`fetret-devri` · `isa-celebi` · `musa-celebi` · `mehmed-i` · `murad-ii` · `cem-sultan` · `selim-i` · `suleyman-i` · `mustafa-celebi` ·
`ibrahim--padisah` · `mehmed-iv` · `mustafa-iii` · `osman-iii` · `abdulaziz` + akademik **tanıtım yazıları**: Ayşe Kayapınar, Belleten 68/253
(2004) 741-746 (PDF, pypdf ile okundu) · Frédéric Hitzel, BCAI 21 (2005) (persee.fr, okundu).

**Liste kuralı:** 1-2. listeler yalnız "bir hanedan üyesinin EMRİYLE" ve TDV'de açık kayıtlı olaylar; 3. liste = rivayet (Osman–Dündar/Neşrî ·
IV. Murad–I. Mustafa · IV. Murad–İbrahim · IV. Mehmed girişimi) · fail belirsiz (Orhan'ın körleştirilmesi · Oğuz Han) · şüpheli (Cem 1495 ·
II. Bayezid 1512) · tartışmalı (Şehzade Mehmed 1756 · Abdülaziz 1876) · hanedan dışı eller (II. Osman · İbrahim · Kösem). `satirlar` dizisi
listenin makinece okunur hâli (ekranda görünmez, UI isterse tablo çizebilir).

**Emre'nin öncülleri — ölçüldü, kartta nasıl yer aldı:**
```
"III. Murad'ın 120 kadar çocuğu"      TDV: büyük rakamlar "mübalağalı rivayet"; vefatında 49 hayatta → 49 yazıldı, 120 YAZILMADI
"annesi binlerce cariye buldu"         TDV: Nurbânû + İsmihan câriye sundu/teşvik etti, SAYI YOK → "binlerce" yazılmadı
"Sarı Selim hiç sefere çıkmadı"        TDV selim-ii: "hiçbir sefere çıkmayan ilk Osmanlı hükümdarı" ✓
"III. Murad haremden çıkmadı"          TDV mehmed-iii: "saraya kapanıp idarede etkisiz" eleştirisi ✓ (murad-iii değil)
"III. Mehmed bir oğlunu da boğdurdu"   TDV mehmed-iii: büyük oğlu Mahmud'u öldürttü ✓ (gün yok, Lello'ya atıf)
"oğlu olmadığı için öldürmedi"         TDV mustafa-i + sehzade ✓ → tartışma kartında GÖRÜŞ 1
"I. Ahmed kardeş katlini kaldırdı,     TDV ahmed-i ✓ ↔ TDV sehzade/mustafa-i "1617'de, devlet ricalinin kararıyla" —
 ekber-erşed sistemini getirdi"         iki TDV vurgusu YAN YANA konuldu, taraf seçilmedi; "kaldırıldı" ifadesi 1621/1635/1638/1808 ile sınandı
harem ↔ sefere çıkmama sebep bağı      okunan TDV maddelerinde KURULMUYOR → kartta "bu kartın yorumudur" diye açıkça yazıldı
```

## 3 · H-0002 makale kısmı — bağlılık statüleri ✅ (15 kart, `ekokuma_statu.js`)

| id | konu | bağ | kaynak (TDV, gövde okundu) |
|---|---|---|---|
| `statu-terim-haracguzar-tabi-himaye` | haraçgüzâr · tâbi/vasal · himaye · dârülahd | 1444-06-12 · 1459-03-07 · 1475-06-06 | haracguzar · himaye · eflak · dubrovnik · kirim |
| `statu-terim-muhtar-imtiyazli-bagli` | muhtar · imtiyazlı · yarı müstakil · "bağlı devlet" | 1517-07-06 · 1541-08-29\|ilhakı · 1671-01-01 | erdel · sirbistan · hicaz · garp-ocaklari · ahidname |
| `statu-terim-eyalet-sancak-ocaklik` | eyalet · sancak · sâlyâneli · yurtluk-ocaklık · hükümet · "ocak"ın iki anlamı | 1519-09-01 · 1534-09-22 · 1551-08-15 | eyalet · sancak · yurtluk · hukumet · garp-ocaklari · cezayir · ocak · trablusgarp |
| `statu-iki-tarihyazimi` | "iç isyan" mı "bağımsızlık" mı — iki dil | 1444-06-12 · 1594-10-05 · 1595-10-01 · 1699-01-26\|ilk büyük toprak | eflak · murad-ii · erdel · bogdan · kirim · garp-ocaklari |
| `statu-eflak` | tâbi · haraçgüzâr | 1444-06-12 · 1462-06-01\|Eflak · 1594-10-05 · 1595-10-01 · 1859-01-24 | eflak · murad-ii · bogdan · haracguzar |
| `statu-bogdan` | tâbi — "rızasıyla tâbi" (Karlofça) | 1456-06-01 · 1475-01-10 · 1538-09-01\|Boğdan · 1713-06-24\|Hotin · 1859-01-24 | bogdan · haracguzar |
| `statu-erdel` | haraçgüzâr · muhtar prenslik | 1541-08-29\|ilhakı · 1594-10-05 · 1658-08-27 · 1687-08-12 · 1699-01-26\|ilk büyük toprak | erdel · haracguzar · suleyman-i |
| `statu-kirim-hanligi` | himaye · belgesiz tâbiiyet · Kaynarca | 1475-06-06 · 1774-07-21 · 1779-03-10 · 1783-04-19 | kirim (İnalcık bölümü) |
| `statu-hicaz-mekke-serifligi` | imtiyazlı yerel emirlik (haraçgüzâr DEĞİL) | 1517-07-06 · 1803-04-30 · 1813-01-23 · 1916-06-10 | mekke · hicaz · serif |
| `statu-garp-ocaklari-cezayir` | sâlyâneli eyalet · ocak · dayılar | 1519-09-01 · 1534-09-22 · 1551-08-15 · 1574-08-25 · 1671-01-01 · 1711-03-01 · 1830-07-05 | garp-ocaklari · cezayir · eyalet · trablusgarp |
| `statu-dubrovnik` | ticaret imtiyazı karşılığı haraç | 1459-03-07 · 1806-05-27 | dubrovnik · haracguzar |
| `statu-fas` | **tartışmalı** — TDV "himaye" demiyor | 1578-08-04 · 1659-01-01\|Alevî | fas |
| `statu-lehistan` | ahidnâmeli komşu · 1672-76 savaş sonrası haraç | 1672-10-18 · 1699-01-26\|Podolya | polonya · haracguzar · lehistan |
| `statu-ukrayna-kazak-hatmanligi` | müttefik → himaye talebi → Doroşenko | 1654-01-08 · 1667-02-09 · 1672-10-18 | ukrayna · polonya |
| `statu-bizans-haracguzar` | haraçgüzâr (1333) · vasal (1371 sonrası) | 1333-08-01 · 1373-05-01 · 1373-05-15 · 1403-06-15 · 1453-05-29\|Bizans İmparatorluğu sona erdi | orhan · bizans · haracguzar |

İstenen 11 yapının **11'i** kartlandı; her kart o yapının çekirdek maddelerine bağlı (bağ aleti 0 hata). Kartlar "hangi terim, hangi dönem,
niçin" düzeninde; Osmanlı ↔ yabancı tarihyazımı farkı ayrı kartta ve Fas · Ukrayna · Bizans · Erdel kartlarının içinde somut örnekle.

🔴 **Kapsam dışı bırakıldı (bilerek):** H-0002'nin ilk yarısı — "üç voyvodalık haritada vasaldan müstakile mi çevrilsin" — bir **veri/arayüz
kararıdır** (Oturum 0). `statu-iki-tarihyazimi` kaynakları sunar ama **hüküm vermez**.

---

## 4 · Başkalarının dosyasında görülen kusurlar — RAPOR, dokunulmadı

### 4a · A3 (kronoloji sahibi) — kaynakla gerilimli maddeler
| madde | dosya | bulgu | kaynak |
|---|---|---|---|
| 1578-08-04 "…Fas'ın Osmanlı himayesine girmesi" | olaylar_ek5.js | TDV `fas` ilişkiyi "Osmanlı desteğindeki Abdülmelik", hediye krizi, halifelik iddiası olarak anlatır; **"himaye" yok**, haraç/tâbiiyet kaydı yok | TDV fas |
| 1373-05-01 "Bizans'ın Osmanlı vasallığına girişi" | olaylar_ek.js | TDV `orhan` + `bizans`: vasallık/haraçgüzârlık **1371 Meriç (Çirmen) zaferinin** sonucu; 1373 Savcı–Andronikos isyanının yılı | TDV orhan · bizans |
| 1553-10-05 "Şehzade Mustafa'nın … idamı" | olaylar_ek5.js | TDV `mustafa-celebi`: 5 Ekim ordugâh kuruldu, idam **27 Şevval 960 / 6 Ekim 1553 Cuma** | TDV mustafa-celebi · bayezid-sehzade ("6 Ekim 1553") |
| 1513-04-24 "Şehzade Ahmed'in … idamı" | olaylar_ek7.js | TDV `selim-i`: Yenişehir savaşı **8 Safer 919 / 15 Nisan 1513**, kaçarken yakalanıp öldürüldü; 24 Nisan TDV'de YOK | TDV selim-i |

### 4b · `ekokuma_kadin.js` — `kimdir-kosem-sultan` (bu paketin kartı DEĞİL)
Kart "harem içinde **boğdurarak**" diyor; TDV `kosem-sultan` "Başlala Uzun Süleyman Ağa ve adamları … **öldürdüler** (2-3 Eylül 1651)" — boğma
biçimi söylenmiyor. Bu paketin 3. listesi TDV'nin biçimini kullandı.

### 4c · TDV'nin kendi içinde ayrışan iki madde (§4⑥ — taraf seçilmedi, kartta ikisi yan yana)
Şehzade Mehmed'in 22 Aralık 1756 ölümü: `mustafa-iii` "III. Osman'ın ortadan kaldırmaya çalıştığı … muhtemelen zehirlenmiş" ↔ `osman-iii`
"hastalık sebebiyle … zehir haberleri büyük ihtimalle asılsız".

---

## 5 · TDV slug ölçümleri (bu turda)

```
🔴 ÖLÜ (302)  osman-gazi · savci-bey · ahmed-celebi · korkud · mustafa-celebi--sehzade · bayezid--sehzade · mahmud-i · mahmud-ii ·
             kafes · ekberiyet · kardes-katli · veraset · kirim-hanligi · mekke-serifligi · mekke-emirligi · mekke-emirleri ·
             garp-ocaklari--ocak · kazak · dorosenko · petro-dorosenko · hmelnitski · bogdan-hmelnitski · zaporog-kazaklari ·
             kazak-hetmanligi · hetman · yurtluk-ocaklik · vassal · tabi · imtiyazli-eyalet · mahmud-i--padisah · mahmud-ii--padisah …
🟢 CANLI      osman-i · bayezid-sehzade · polonya · valide-sultan · turhan-sultan · hurrem-sultan · mihrimah-sultan + §2/§3 tablolarındakiler
⚠️ §4② TUZAK  mustafa-celebi   200 "MUSTAFA ÇELEBİ" → KANÛNÎ'NİN OĞLU Şehzade Mustafa (Düzme Mustafa DEĞİL)
             kazaklar         200 → ORTA ASYA KAZAKLARI (Ukrayna Kazakları değil) — kullanılmadı
             sehzade-mustafa · serif · lehistan · vahdeddin · hidiv   200 ama 2,5 KB yönlendirme kütüğü ("bk. …")
```

---

## 6 · YAPILMADI / ÖLÇÜLEMEDİ — gerekçeli

- **Peirce 1993 · Tezcan 2010 kitapları OKUNMADI.** Tezcan için dört akademik tanıtım denendi (BSOAS/Murphey · JEMH/Brill · Project MUSE ·
  Hathaway/academia) → 403 / doğrulama duvarı. Metinde iki yazara **hiçbir tez bağlanmadı**; yalnız "ileri okuma". Vatin–Veinstein kitabı da
  okunmadı; aktarılan iki cümle iki **tanıtım yazısından** ve metinde öyle çerçevelendi.
- **Yurtluk-ocaklık / hükümet sancaklarının adlı listesi** yazılmadı — TDV `yurtluk` "bk. OCAKLIK" diyor, `ocaklik` slugu denenmedi.
- **1849 Baltalimanı ortak Osmanlı-Rus himayesi** (Eflak/Boğdan) — TDV eflak gövdesinde aranmadı → kartta yok.
- **Hotin sancağının tarihi** TDV'de aranmadı → Boğdan kartı tarih vermeden yalnız bağlandı.
- **Kaynarca sonrası hilâfet (dinî) bağı** — TDV kirim'de bu turda okunmadı → Kırım kartında yok.
- **Yûsuf İzzeddin (1916) ölümü** — TDV mehmed-v'de yalnız bağlantı başlığı olarak geçti, içerik okunmadı → listeye alınmadı.
- **1808 sonrası "hanedan içi emirle katl yok"** hükmü, Abdülmecid → VI. Mehmed maddelerinin **desenle** taranmasına dayanıyor (tam okuma değil).
- **Atlasta günü olmayan olaylar** (1422/1423 idamları · 1603 Mahmud · 1621-01-12 · 1635-08-27 · 1638-02 · 1808-11-17) — kartlar en yakın
  ilgili maddeye bağlandı; bu bir tarih iddiası değil, `ic_not`larda yazılı.
- **Tarayıcıda canlı sınama YOK** — iki yeni dosya yükleyici listesine henüz eklenmedi (UI oturumunun işi).

## 7 · Kanıt / aletler

- TDV gövdeleri (95 dosya, `denetim/ARAC-A6A-TDV-0913.py` ile çekildi) ve ara aletler bu oturumun scratchpad'inde (`govde/`, `pasaj.py`,
  `pencere.py`, `dok.js`, `duzelt.py`, `duzelt2.py`, `bag_hepsi3.txt`, `kopya2.txt`). Proje dizinine yeni alet YAZILMADI; A2'nin iki aleti
  değiştirilmeden kullanıldı.
- Telif sınavı yeniden koşturmak için: kartları `dok.js` ile JSON'a dök → `node denetim/ARAC-A2-KOPYA-0913.js <json> <govde-dizini>`.

## 8 · Haberleşme
M-3843 açılış · M-3850 TESLİM — ikisi de `oturumlar/tahta.json`dan geri okunarak doğrulandı (§7.1⑤b; "PAKET-EK1" 4 geçiş = 2 mesaj × kim+metin). Tahta arızası yaşanmadı (push ✓).
