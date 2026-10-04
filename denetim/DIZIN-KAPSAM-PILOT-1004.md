# DIZIN-KAPSAM-PILOT-1004 — Anadolu 1281–1500 hücresinde dizin isabet oranı

Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (send_message). Veriye yazılmadı; tek dosya bu.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (devletler.js henüz süzülmeden)

- **Sayı:** ~35 aday · **~10–12 boşluk** (isabet ≈ %65–70). 🟡 kovası 2–4.
- **Mekanizma:** dizin, haritada BOYANAN ve kronolojide anılan yapıların ihtiyacıyla büyüdü.
  ⇒ büyük beylikler + büyük devletler VAR; kısa ömürlü / tâbi düzeyindeki küçük beylikler
  (Sâhib Ata, Pervâne, İnanç, Alâiye, Tâceddin, Şadgeldi, Kubad, Mutahharten, Çoban) YOK;
  Latin kıyı tutamakları (Hospitaller İzmir, Ceneviz Foça) YOK.

## 1. HÜKÜM

```
aday (TDV tanıklı, 1281–1500 Anadolu'da hüküm süren)   44
✅ dizinde var                                          38   (bunun 4'ü yalnız ad normalleştirmesiyle bulundu → 🟡 alt kovası)
🔴 dizinde yok — gerçek boşluk                           6
İSABET                                                 38/44 = %86
```

**Öngörü değerlendirmesi — sayı da mekanizma da TUTMADI:**
- Sayı: 10–12 boşluk bekledim, **6** çıktı (%86, beklenen %65–70).
- Mekanizma ÇÜRÜDÜ: "küçük/kısa ömürlü beylik yok" dedim; Sâhib Ata, Pervâne, İnanç, Alâiye,
  Tâceddin, Mutahharten, Çoban — **hepsi VAR**. Hospitaller (Rodos şövalyeleri) de var.
- **Ölçülen mekanizma:** dizin TDV'nin **ANADOLU BEYLİKLERİ maddesinin kendisini** tam
  kapsıyor (gövdedeki 20 yapının **20'si** var). Boşlukların **6'sı da** o maddenin gövdesinde
  GEÇMEYEN, yalnız **şehir maddelerinde** (Samsun, Amasya, Bitlis, Niğde) ya da ayrı bir
  maddenin içinde (Özeroğulları) anılan **ikinci kademe** yapılar. Tek istisna: Özeroğulları
  ana maddenin "ilgili maddeler" listesinde var ama dizinde yok.
  ⇒ İsabet KAYNAK KADEMESİNE bağlı: **ana liste maddesi %100 · şehir maddesi kademesi
  12 adayda 6 isabet (%50)**. Kampanya ölçümünde "%86"yı tek sayı diye taşımak yanıltır;
  ana liste maddesi olmayan hücrelerde oran ikinci kademe oranına (%50) yaklaşabilir.

## 2. Yöntem

1. `girdi.oku_devletler()` → **895** künye (regex yok). Pencere 1281–1500 ile kesişen künyeler
   süzüldü; Anadolu'da hüküm sürmüş olanlar elle okundu (bölge `anadolu` 34 + `iran`/`orta-asya`/
   `balkanlar`/`misir-sudan`dan Anadolu'da toprağı olanlar).
2. Bağımsız aday listesi: TDV `anadolu-beylikleri` (43.609 kar., gövde tam) + 70 şehir/beylik
   maddesi (`denetim/_tdv_oku.py`, gövdeler depo DIŞINDA scratchpad'de — telif). Ad çıkarıcı
   (`-oğulları`, `X Beyliği/Emîrliği/Devleti`) 148 ad verdi; 1281–1500 Anadolu'da hüküm sürenler
   elle seçildi.
3. Eşleştirme: künyenin TÜM alanları (id · ad · `bolge` · `not` · `ic_not_*` · `kaynak`) küçük
   harfe çevrilip arandı; aranan terimlerde büyük `İ` yok (`"İ".lower()` tuzağı devre dışı).
   Her 🔴 için en az iki yazım denendi (ör. `kubadoğ/kubadog`, `şerefoğ/serefog`,
   `gündüz/gunduz`, `şadgeld/sadgeld`, `amasya emîr/emir`).

## 3. 🔴 DİZİNDE YOK — 6 gerçek boşluk

| # | Yapı | Pencere | TDV tanığı (madde[cümle]) |
|---|---|---|---|
| 1 | **Özeroğulları** (Dörtyol-Payas-İskenderun) | XIV–XVI. yy | `ozerogullari[5]`: "Özer Bey Dörtyol, Payas, İskenderun, Derbsak, Erzin (Yeşilkent) yöresinde Özeroğulları Beyliği'ni … kurmuşlardır." · ayrıca ana maddenin ilgili listesi: "Hatay Dörtyol çevresine XIV-XVI. yüzyıllar arasında hâkim olan Türkmen beyliği." |
| 2 | **Gündüzoğulları** (Amanosların doğusu) | XIV–XV. yy (1436'da canlı) | `ozerogullari[5]`: "Gündüzoğulları Amanoslar'ın doğusunda Gündüzoğulları Beyliği'ni kurmuşlardır." · `[24]` 1436'da Karamanoğlu'nun yanında. |
| 3 | **Kubadoğulları** (Samsun-Kavak-Lâdik) | XIV. yy | `samsun[52]`: "…Gazi Çelebi'nin kurduğu Kubadoğulları Samsun, Kavak ve Lâdik yörelerinde hüküm sürüyordu." · `[61]` "Samsun'un emîri Kubadoğlu Cüneyd" |
| 4 | **Amasya Emîrliği** (Hacı Şadgeldi ve oğlu Ahmed) | ~1360 – Kadı Burhâneddin'e geçiş | `eretnaogullari[40]`: "…Hacı Şadgeldi Amasya'da, Mutahharten Erzincan'da, Tâceddin Niksar'da … kendi başlarına hareket etmeye başladılar." · `osmancik[17]`: "761 (1360) yılı civarında Amasya Emîri Şadgeldi Paşa'ya … bağlandı." |
| 5 | **Şerefoğulları** (Bitlis) | XIV. yy – 1473 Akkoyunlu tâbiiyeti | `bitlis[47]`: "XIV. yüzyılda Şerefoğulları adlı bir sülâlenin hüküm sürdüğü Bitlis önce Karakoyunlular'a … 1473'te … Akkoyunlular'a tâbi oldu." |
| 6 | **Babuk** (Kayseri, Moğol bölüğü) — ⚠️ geçici | Ekim 1364 | `nigde[72]`: "Babuk, 765'te (1363-1364) Eretnaoğlu Muhammed'e karşı kazandığı zaferden sonra Muharrem 766'da (Ekim 1364) Kayseri'de hükümdarlığını ilân etmiştir." |

📌 Paralel kardeş künyelerin dizinde olması 1-4'ün sınıf değil tek tek eksik olduğunu gösterir:
Ramazanoğulları VAR, Özer/Gündüz (aynı Üçok kökü, aynı cümle) YOK · Mutahharten ve Tâceddin VAR,
aynı cümledeki Şadgeldi YOK · Pervâne VAR, ardılı Kubad YOK.
⚠️ #6 bir devlet mi, bir isyan mı — kaynak "hükümdarlığını ilân" diyor, süresini vermiyor.
Künye açılacaksa önce bu sınıflandırma (`§3.5` ①/②/③).

## 4. ✅ DİZİNDE VAR — 38

TDV ana maddesi gövdesi (`anadolu-beylikleri`, cümle no.): Karamanoğulları `[26]` · İnançoğulları/
Lâdik `[33]` · Sâhib Ataoğulları `[36]` · Menteşeoğulları `[37]` · Karesioğulları `[44]` ·
Germiyanoğulları `[48]` · Eşrefoğulları `[51]` · Saruhanoğulları `[54]` · Aydınoğulları `[57]` ·
Alâiye `[62]` · Hamîdoğulları `[66]` · Tekeoğulları `[69]` · Dulkadıroğulları `[71]` ·
Ramazanoğulları `[72]` · Eretnaoğulları `[75]` · Kadı Burhâneddin `[78]` · Çobanoğulları `[81]` ·
Candaroğulları/İsfendiyaroğulları `[83-84]` · Pervâneoğulları `[85]` · Tâceddinoğulları `[88]`
— **20/20**.

Ana maddenin ilgili listesi: Dilmaçoğulları `[355]` ("1085-1394 yılları arasında Bitlis ve Erzen'de").

Şehir maddeleri kademesi (6 isabet): Hacıemîroğulları `ordu--sehir[39]` ("Hacıemîroğulları
Beyliği 1427'de Osmanlılar tarafından ilhak edildi") · Mutahharten/Erzincan Emirliği `kemah[34]` ·
Sutay `erzurum[58]` + `van[67]` ("Sutaylılar'ın ortadan kalkması") · Ahiler `ankara[216]`
(⚠️ ZAYIF: yalnız bibliyografya başlığı "Ankara'da Ahiler Hükümeti", gövde cümlesi değil) ·
Artuklular `mardin[108]` ("Artuklu hânedanı tarihe karıştı (812/1409)") · Hısnıkeyfâ Eyyûbîleri
`hasankeyf[43]` (1232'de kuruluş).

Büyük devletler (11): Anadolu Selçuklu `ab[19]` · İlhanlı `ab[19]`, `ankara[189]` · Bizans `ab[24]` ·
Trabzon Rum `trabzon[55]` · Kilikya Ermeni `ab[122]` · Kıbrıs Krallığı `alanya[10]` ·
Memlük `ab[64]` · Karakoyunlu `erzurum[62]` · Akkoyunlu `bitlis[47]` · Timurlu `erzurum[62]` ·
Rodos şövalyeleri `izmir[89]` ("İzmir'de ticarî menfaatleri bulunan Rodos şövalyeleri").

### 🟡 alt kovası — var, ama yalnız elle/normalleştirmeyle bulundu (4)
Mekanik tam-eşleşme bunları 🔴'ye düşürürdü:
- TDV `Dulkadıroğulları` ↔ dizin `Dulkadiroğulları` (`ı`/`i`)
- TDV `Eretnaoğulları` ↔ dizin `Eretna Beyliği` (id `eretna`)
- TDV `Hacı Emîroğulları` / `Bayramlu` ↔ dizin `Hacıemîroğulları (Bayramlı/Ordu)` (id `haciemir`)
- TDV `Sutaylılar` ↔ dizin `Sutayogullari` (ad alanı Türkçe karaktersiz yazılmış)

## 5. ⚪ HESAP DIŞI — ama söylenmeli

- **Osmanlı'nın kendisi** `devletler.js`te künye DEĞİL (çekirdek katman; `osman*` id'li 4 künye
  hep eyalet). Dizin penceresinde başka yoldan görünüyorsa sorun yok — **ölçmedim**.
- `eretnaogullari[40]` aynı cümlede **Hacı İbrâhim (Sivas), Şeyh Necib (Tokat), Kılıcarslan
  (Şarkîkarahisar)**: "kendi başlarına hareket etmeye başladılar" — kaynak bağımsız devlet
  demiyor; sayılmadı.
- **Gattilusio** (Midilli, 1355–1462, `midilli[26]`) — ada, Anadolu hücresi dışında.
- **Ceneviz Foça / Amasra:** `foca` maddesinde Ceneviz geçmiyor, `amasra` slug'ı ÖLÜ → **bulunamadı**.
- **Fetret çelebileri** (İsa, Mehmed — dizinde var): bu örneklemde TDV tanığı çekilmedi; aday
  sayılmadı.
- **Çemişgezek Beyliği** (dizinde var): örneklemimde TDV tanığı yok — aday sayılmadı.

## 6. Bulamadıklarım / sınırlar

- **Kürt emirlikleri (Hakkâri, Cizre/Bohtan, Eğil, Palu, Hazzo, Sason, Çermik):** `hakkari`
  ve `cizre` maddelerinde 1281–1500 için ADLI yapı yok (`hakkari[26]` adsız "Çölemerik hâkimi");
  `egil`, `palu`, `cermik`, `sason` slug'ları ÖLÜ → **bulunamadı**. Bu boşluk "dizinde yok"
  değil "kaynakta bulamadım"dır; TDV dışı akademik kaynak (Şerefnâme çevirisi vb.) açılmadı.
- **Kırşehir Emirliği (Cacaoğulları):** TDV başlık araması boş; `kirsehir` gövdesinde
  cümle düzeyinde yakalanmadı → bulunamadı.
- **Örneklem önyargısı:** 70 TDV maddesini BEN seçtim (şehir + beylik). Seçmediğim bir şehrin
  maddesinde başka ikinci kademe yapı olabilir ⇒ 6 boşluk bir ALT SINIRDIR.
- Ölü slug'lar (11): `bafra canik diyarbekir amasra egin ercis kigi tercan karahisar-i-sarki
  ermenek istanos`; `ordu` tuzağı (`ordu--sehir` doğru madde) uygulandı.

## 7. Pencere farkları (kapsam dışı, yan bulgu — düzeltme önerisi değil)
TDV ana maddesi ile dizin arasında: Karesi TDV ~1297–1360 / dizin 1297–1345 · Hamîd TDV
~1301–1423 / dizin 1297–1391 · Candar TDV 1292–1462 / dizin 1309–1461 · Saruhan TDV 1302–1410 /
dizin 1313–1416. Hangisinin doğru olduğu bu işin sorusu değil; künye kaynağıyla karşılaştırılmadı.
