# P12-EKOKUMA — ek okuma + görsel dalgası · 14 Eylül 2026

Koordinatör: 1.MURAT · şartname `oturumlar/DALGA-SINIF2-0914.md` · plan `denetim/PAKET-SINIF2-0914.md ### P12`
Durum: **KISMİ TESLİM** — koordinatörün TOPARLA komutuyla (haftalık limit %95) durduruldu. Yeni kalem açılmadı.

## 0 · Özet — ölçülmüş

```
YENİ DOSYA                     KART   window adı
data/ekokuma_savas3.js            6   EKOKUMA_SAVAS3      (savas-hikayesi)
data/ekokuma_antlasma3.js         5   EKOKUMA_ANTLASMA3   (antlasma 3 · sebep-sonuc 2)
data/ekokuma_mimari2.js           3   EKOKUMA_MIMARI2     (teknik-bilimsel)
denetim/YAMA-P12-0914.json        1 görsel ADAYI (uygulanamaz hâlde) · 0 merak
TOPLAM                           14 kart
```
- `node --check` üç dosya: OK · her dosya YALNIZ kendi `window` adını tanımlıyor (ölçüldü).
- `node denetim/ARAC-A2-BAG-0913.js --hepsi`: **BAĞ 630/630 · HATA 0** · 14 yeni kartın hepsi havuzda göründü (215 kart). Yeni kartlardaki uyarılar yalnız aynı olayın farklı kronolojilerdeki maddeleri (elle bakıldı); tek ilgisiz düşen (`1918-10-30|Mondros` → kronoloji_arabistan) `|Mondros Mütarekesi` diye daraltıldı.
- `node denetim/ARAC-A2-KOPYA-0913.js` (gövdeler `scratchpad/govde/`): ilk koşu 🔴 3 (Kamaniçe vakıf listesi 15 · Sevr md. 37-61 cümlesi 16 · Sâdâbâd 1717 cümlesi 13 kelime) → yeniden yazıldı → ikinci koşuda 🔴 1 (Sevr ülke listesi 12) → yeniden yazıldı; son ölçüm aşağıda §5. **Kaynakta geçmeyen sayı: 14 kartta 0.**
- Kilitli dosyalara (gorsel_madde.js · merak.js · ekokuma_magazin.js · js/app.js) **yazılmadı** (git status temiz).

## 1 · `_EKOKUMA_DOSYA_ADLARI` girdileri (koordinatör / PAKET-UI4 bağlar)

```js
  "ekokuma_savas3",     // window.EKOKUMA_SAVAS3 — savaş hikâyeleri dalga 4 (P12-EKOKUMA, 0045/H-0007)
  "ekokuma_antlasma3",  // window.EKOKUMA_ANTLASMA3 — Uşi · Sevr · Mudanya · Lozan hükümleri (P12-EKOKUMA, 0045/H-0009 · 0048/H-0015)
  "ekokuma_mimari2",    // window.EKOKUMA_MIMARI2 — Üç Şerefeli · Drina · Sâdâbâd (P12-EKOKUMA, 0045/H-0011)
```
Türler (`savas-hikayesi` · `antlasma` · `sebep-sonuc` · `teknik-bilimsel`) mevcut dosyalardakiyle aynı; yeni tür icat edilmedi.

## 2 · Kalem kalem

| madde | ne yapıldı | kaynak | durum |
|---|---|---|---|
| **0045/H-0007** savaş hikâyesi | 6 kart: Koyunhisar/Bapheus 1302 · Pelekanon 1329 (+İznik 1331) · Çirmen 1371 · Rovine 1395 · Kandiye/Girit 1669 · Kamaniçe 1672 | TDV osman-i · orhan · iznik · murad-i · cirmen · bayezid-i · eflak · girit · kandiye · kamanice (gövdeler okundu) | **kısmen çözüldü** — A2 §5 listesinden kalan: Savra 1385 · İzmit 1337 · Edirne 1361 · Trablusgarp 1551 · 93 Harbi · Trablusgarp Savaşı 1911 · I. Balkan · Nizip · Sinop → **yapılmadı** |
| **0045/H-0009 · 0048/H-0015** antlaşma kartları | 5 kart: Uşi s-s · Sevr hüküm + s-s · Mudanya hüküm · Lozan hüküm | TDV sevr-antlasmasi · mudanya-mutarekesi · lozan-antlasmasi · trablusgarp | **kısmen çözüldü** — EK2 §3 kalanı (Gümrü · Kars · Moskova · Brest-Litovsk · Londra 1913 · İstanbul/Atina 1913 · Kütahya · Akkirman …) **yapılmadı** |
| **0045/H-0011** mimari | 3 kart: Üç Şerefeli · Drina Köprüsü · Sâdâbâd (şartnamedeki aday) | TDV uc-serefeli-cami-ve-kulliyesi · drina-koprusu · sadabad | **kısmen çözüldü** — gövdesi OKUNDU ama kart YAZILMADI: Büyükçekmece Köprüsü (`buyukcekmece-koprusu`, ölçüler dahil) · Bursa Ulucamii (`ulucami` 51 bölümlü maddenin 11. bölümü, Doğan Yavaş) |
| **0032/H-0010** Sultânî görseli | MET · Cleveland · Yale LUX · Smithsonian · Commons tarandı; **tek CC0 aday: NMAH 1 Altun, Constantinople 1478-79 (Mehmed II)** — ama API'de görsel dosyası yok | Smithsonian Open Access (metadata_usage CC0) | **Emre'ye soru** — öneri `YAMA-P12-0914.json`; dosya indirilmedi, `ARAC-A2-BAG ④` Commons-dışı kaynağı tanımıyor |
| **0032/H-0013** merak/s-s/dış yankı | bu tur merak kartı yazılmadı; 2 s-s kartı (Uşi, Sevr) antlaşma dosyasında | — | **yapılmadı** (aday not YAMA json'da) |
| **0045/H-0010** padişah magazin | dokunulmadı | — | **sırada — kilit** (`ekokuma_magazin`, PAKET-EK-B) |

## 3 · Kaynak bulguları (§4)

**Canlı slug, YANLIŞ MADDE (§4②) — iki yeni vaka:**
```
usi                 200 → ÛŞÎ, XII. yy Mâtürîdî kelâmcı (Uşi Antlaşması DEĞİL)
londra-antlasmasi   200 → 15 Temmuz 1840 Londra mukavelenâmesi, gövde 'bk. Kavalalı' yönlendirmesi (1913 DEĞİL)
```
**Ölü (302):** koyunhisar-savasi · bafeus-savasi · koyunhisar · palekanon-savasi · pelekanon-savasi · maltepe · cirmen-savasi · sirpsindigi(-savasi) · sirp-sindigi · rovine(-savasi) · mircea · usi-antlasmasi · brest-litovsk(-antlasmasi) · brestlitovsk · kars-antlasmasi · gumru-antlasmasi · gumru--sehir · moskova-antlasmasi · sadabad-kasri · uc-serefeli-cami(i) · ulu-cami · bursa-ulu-camii · ulucami--bursa · yesil-cami(i) · yesil-kulliye(si) · rustem-pasa-camii · buyukcekmece · sultani · mehmed-ii--fatih.
**Canlı (200, bu tur):** osman-i · orhan · iznik · cirmen · murad-i · bayezid-i · eflak · kamanice · girit · kandiye · sadabad · uc-serefeli-cami-ve-kulliyesi · drina-koprusu · buyukcekmece-koprusu · sokullu-mehmed-pasa-koprusu (2407 kr., boilerplate şüphesi) · rustem-pasa · trablusgarp · kars · sikke · altin · ulucami · yildirim-bayezid-kulliyesi.
📌 Altı savaşın **hiçbirinin** müstakil TDV maddesi yok; anlatı kişi/yer maddelerinden kuruldu (§4 "TDV YER-KİŞİ ansiklopedisidir" yönü tuttu).

## 4 · Madde sahibine (A3 / kronoloji) — RAPOR, dokunulmadı

1. **Girit/Kandiye günü:** `olaylar.js` `1669-09-27` "Girit'in fethi tamamlandı"; TDV `girit` + `kandiye` teslim anlaşmasını **9 Rebîülâhir 1080 / 6 Eylül 1669**'a koyuyor; kuyruk (kronoloji_venedik · rodos_sovalyeleri) `1669-09-06`. 27 Eylül'ün dayanağı okunan gövdelerde **bulunamadı**. Kart iki güne de bağlandı.
2. **Uşi günü:** çekirdek `1912-10-15`, kuyruk `1912-10-18`; TDV `trablusgarp` yalnız yıl veriyor ⇒ ölçülemedi.
3. **Trablusgarp savaş ilânı:** TDV `trablusgarp` "1 Eylül 1911"; kuyruk `1911-09-29`, çekirdek `1911-09`. Hüküm verilmedi (TDV'nin kendi günü başka kaynakla sınanmadı).
4. **Rovine yılı (TDV iç çelişkisi, §4⑥):** `bayezid-i` 17 Mayıs 1395 · `eflak` 1394. Çekirdek madde `1395-05-17`, kaynak alanı `bulgaristan` (okunmadı).
5. **Sultânî maddesi** `olaylar_ek2.js 1478-06-01`: kaynak `sikke` gövdesinde "sultânî" kelimesi **geçmiyor**; gün dayanağı bulunamadı.

## 5 · Denetim — önce / sonra

```
                         ÖNCE (01:15)            SONRA (01:50)
Değişmez 1   sahipsiz    324 (beklenen 324) ✓    324 ✓
Değişmez 1b  boşluk      0 ✓                     0 ✓
Değişmez 2   açık        531 kırılma · 0 ✓       534 kırılma · 0 ✓
Değişmez 2s  açık        100 / 121 ✓             98 / 121 ✓
Değişmez 2i  açık        3 / 3 ✓                 3 / 3 ✓
Değişmez 4c              129 ✓                   129 ✓
Değişmez 4d              356 ✓                   356 ✓
Değişmez 7   enklav      658 ✓                   660 ✗  (beklenen 658)
```
🔴 **Değişmez 7 farkı BENDEN DEĞİL — damgayla ölçüldü:** bu paketin üç dosyası `arac/girdi.py` evreninde yok (79 girdi dosyasının hiçbiri `ekokuma` içermiyor). İki koşu arasında yerleşim girdileri başka işçilerce değişti: `yerlesimler_ek.js` · `yerlesimler_serhat.js` 01:41 · `yerlesimler_anadolu_0914.js` (P05) 01:42 · `yerlesimler.js` · `yer_yama*.js` · `yerlesimler_ek_korfez.js` 01:48 · `arac/denetle.py` 01:34 · `arac/uret_petek.py` 01:48. Kalem kalem kovası: `cografi-tecrit 4232→4230 · kucuk-devlet 270→271 · gecici-cephe 59→58 · B-bilinmiyor 164→166`. Hangi dosyanın hangi +2'yi ürettiği **ölçülmedi**.

Kopya sınavı son hâli (🔴 eşik ≥12 kelime): **14 kart · 🔴 0 · ⚪ ölçülemedi 0** · en uzun ortak diziler 6-10 kelime (🟡, elle bakıldı). Son koşudan sonra bağ aleti tekrar: **630/630 · HATA 0**.

## 6 · Ölçülmeyen / sınırlar

- Kartlar **tarayıcıda gözle görülmedi** (yükleyici satırı henüz yok).
- 🟡 8-11 kelimelik ortak diziler elle bakıldı: özel ad, ölçü ve tarih zincirleri (ör. "841-851 (1437-1447) … Mimar Muslihuddin ve Şehâbeddin", Lozan tazminat cümlesi) — telif ihlali sayılmadı ama sonraki okuma bunları kısaltabilir.
- Görsel adayı (NMAH) için görsel dosyası ve lisansı **Commons aleti ile** sınanmadı; CC0 beyanı yalnız Smithsonian API meta verisinden.
- Gövdeler proje dizinine değil `scratchpad/govde/`e çekildi (25 + ulucami); `denetim/_govde/`e yazılmadı.

## 7 · Haberleşme

- Açılış M-3938 — `tahta.json`dan geri okundu, 1.MURAT teyitli.
- TOPARLA komutu alındı → bu rapor + teslim mesajı.
