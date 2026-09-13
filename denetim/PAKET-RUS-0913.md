# PAKET-RUS — 13 Eylül 2026

Sevk: 1.MURAT. Emre kararları (13 Eylül): **① Rusların Eflak-Boğdan harekâtlarında işgal edilen topraklar TARALI (`isg:`), ilerleyen ordular KESİKLİ ÇİZGİ + OK; taralı desen yalnız işgal için · ② Kazak Hetmanlığı kaydı açılsın.**
Yazılan dosyalar: `data/savaslar.js` (yalnız SEFERLER, +60 satır) · `denetim/YAMA-RUS-0913.json` · `denetim/ARAC-RUS-SEFER-0913.js` · `denetim/ARAC-RUS-ETKI-0913.js` · `denetim/OLCUM-RUS-ETKI-0913.json` · bu rapor. Commit YOK.
Yerleşim dosyaları, `data/devletler.js`, `arac/renkler.py` koşu 10 yüzünden DONUK. `isg:` önerileri ve künye yalnız YAMA JSON'da.

## 0. Özet — sayılar

```
SEFERLER     HEAD 74 → ağaç 85   (+11 rus- kaydı · tur:"sefer" = kesikli + ➤ · renk #0d7d8a)
             node denetim/ARAC-RUS-SEFER-0913.js → exit 0 (şema · f<=t [D190] · yol · tekil id · mükerrer yok)
             node denetim/ARAC-A4-SEFER-0913.js  → exit 0 (A4 kayıtları bozulmadı)
             arac/denetle_anakronizm.py §D       → "ölçülebilen tarafların hepsi kendi ömrü içinde" ✓
             py arac/denetle.py                  → exit 0 · "SONUÇ: temiz" (kendi ayrıştırıcısı savaslar.js'i okudu;
                                                   savaş senkronu 165/173 — SAVASLAR'a dokunulmadı)
             tarayıcıda çizim  ÖLÇÜLEMEDİ — file:// sekme boş kaldı; 8780'deki sunucu atlas index.html'ini
                               sunmuyordu (SEFERLER 0, savaslar.js script'i yok). Kesikli çizgi + ok
                               gözle görülmedi; tur:"sefer" → app.js HAREKET.sefer kodla doğrulandı.
isg önerisi  25 öneri grubu · 52 dönem×yerleşim çifti · 25 yerleşim
             ekle 15 · değiştir 5 (Yaş/Bükreş 1806 ve 1828 başı · Kili/Hotin 1806 başı) · cins 3 (Bender 1770 · İsmail 1790 · Yergöğü 1810)
             durum: HAZIR 17 · KARAR 8 (ay kodlu uç · 6 günlük pencere · müttefik mi işgal mi · Oltenya bitişi)
             gün komşudan (§4 şartlı): 7 grup, dört şart her birinde kayda yazılı
yazılmayan   14 grup (gün bulunamadı · işgalci Avusturya · 1877 müttefik geçişi)
künye        kazak-hetmanligi 1648 → 1782 · 8 kronoloji maddesi · renk #6a3d9a (yedek #d9b21a, ΔE ÖLÇÜLMEDİ)
             yerleşim önerisi: Çehrin (3 s + 1 v himaye) · Sol Yaka 6 yerleşim · Hluhiv · 5 yerleşim bilerek dışarıda
etki (C)     node denetim/ARAC-RUS-ETKI-0913.js → exit 0 · girdide olmayan ad 0
             Değişmez 2i  25 uç günü · çekirdekte ±30g maddesiz 5
             Değişmez 2    3 uç günü · maddesiz 2
             Değişmez 2s   2 uç günü · maddesiz 1
```

## 1. Kaynaklar ve takvim

| kısaltma | kaynak | ne verdi |
|---|---|---|
| ESBE-TV | Брокгауз-Ефрон, «Турецкие войны России», т. XXXIV (1901), с. 122—159 | 1711-1877 bütün Rus harekâtlarının Jülyen günleri |
| ESBE-VV | ЭСБЕ «Восточная война» (VII, 290) | 1854 çekiliş: Ömer Paşa Bükreş'te 10 Ağustos J · Prut'un geçilişi "на исходе августа, у Скулян" · Yergöğü 25 Haziran J |
| ESBE alt maddeler | «Прутский поход…1711» · «Белградский мир» (18 Eylül 1739) · «Ставчаны» · «Бендеры» · «Килия» (13 Ekim 1790) · «Измаил» (14 Eylül 1809) · «Хотин» | kale günleri |
| TDV | `akkirman` (30 Kasım 1806) · `ibrail` · `yergogu` (27 Eylül 1810; 1829 Eflak'a) · `kucuk-kaynarca-antlasmasi` (21 Temmuz 1774, iade maddesi) · `yas-antlasmasi` (9 Ocak 1792) · `edirne-antlasmasi` (14 Eylül 1829; çekilme 1834) · `eflak` · `bogdan` · `hotin` · `kili` · `omer-lutfi-pasa` · `romanya` · `ahmed-iii` · `baltaci-mehmed-pasa` · `abdulmecid` | gövdeler okundu |
| Babilunga | *Русин* 2012 | Yaş 12 Kasım 1806 (eski stil; makale stili kendisi beyan ediyor) |
| Kashirin | *Славяноведение* 2024/1, 5-30 | 1769 (A6B'den) |
| Goldfrank | *Encyclopedia of Russian History*, «Crimean War» | 1853 işgali: yalnız AY ("in July") |
| EoU | «Hetman state» · «Doroshenko, Petro» · «Chyhyryn» | Hetmanlık 1648-1782 · 1 Mayıs 1669 · 19 Eylül 1676 |
| BSE | «Прутский поход 1711» | Yaş'a varış 25 Haziran J |

🔴 **Takvim (D110):** Bütün f/t Gregoryen. Rus kaynaklarının günleri Jülyen varsayılıp çevrildi (18. yy +11, 19. yy +12). Çevirme bu pakete ait. Çapraz sınamalar tuttu:
- ESBE Bender 16 Eylül J → 27 Eylül = veri ✓
- ESBE İsmail 11 Aralık J → 22 Aralık = veri ✓
- ESBE Yergöğü 15 Eylül J → 27 Eylül = TDV ✓
- ESBE Yaş 26 Eylül J = Kashirin "(7 октября)" ✓

**TDV slug:** 33 slug 200 döndü, gövdesi okundu. 20 slug 302 (ÖLÜ): `yas` · `bender` · `ismail` · `akkerman` · `isakci` · `besarabya` · `belgrad-antlasmasi` · `bukres-antlasmasi` · `kirim-savasi` · `kirim-harbi` · `93-harbi` · `mahmud-i` · `mahmud-ii` · `munih` · `omer-pasa` … `plevne` 503 döndü. Tam liste JSON'da.
Britannica «Crimean War» 403 döndü. Vikipedi hiçbir günde dayanak değil. "3 Temmuz 1853" yalnız popüler sitelerde geçiyor, kullanılmadı.
Gazetteer olarak OpenStreetMap Nominatim kullanıldı, 17 istasyonun OSM kimliği `savaslar.js` yorumunda. İlk sorgu turu **iki yanlış yer döndürdü**: "Iași" Timișoara'da bir mahalle, "Galați" Bükreş'te bir sokak çıktı. Sonuç türü sınanarak yeniden sorgulandı.

## 2. SEFERLER — 11 kayıt (yazıldı)

| id | yol | f → t (G) |
|---|---|---|
| `rus-prut-1711` | Zagarancea · Țuțora · Stănilești | 1711-07-05 → 07-20 |
| `rus-munih-hotin-yas-1739` | Stavçani · Hotin · Yaş | 1739-08-28 → 09-12 |
| `rus-golitsin-hotin-1769` (A6B SEF-HOT-1769) | Minkivtsi · Hotin | 1769-04-25 → 09-19 |
| `rus-elmpt-yas-1769` | Hotin · Yaş | 1769-09-19 → 10-07 |
| `rus-rumyantsev-kagul-1770` | Țuțora · Kagul (Cahul) | 1770-06-13 → 08-01 |
| `rus-panin-bender-akkerman-1770` | Bender · Akkirman | 1770-09-27 → 10-09 |
| `rus-ozi-1788` (A6B SEF-OZI-1788) | Olviopol · Özi | 1788-06-04 → 12-17 |
| `rus-potemkin-bender-1789` | Olviopol · Bender | 1789-07-22 → 11-14 |
| `rus-suvorov-foksani-rimnik-1789` | Fokşani · Rimnik | 1789-08-01 → 09-22 |
| `rus-mihelson-yas-bukres-1806` | Yaş · Bükreş | 1806-11-24 → 12-25 |
| `rus-kisinev-zimnitsa-1877` | Kişinev · Zimniça | 1877-04-24 → 06-27 |

- **A6B'den farklar:**
  - SEF-OZI-1788'in Olviopol başlangıcı artık kaynaklı (ESBE-TV "24 мая … двинулась от Ольвиополя к Очакову"). f ay kodu 05-01 yerine gün 06-04 oldu. tur `kusatma` yerine `sefer` yazıldı (Emre: ilerleyen ordu kesikli + ok).
  - **SEF-OZI-1737 yazılmadı:** Dinyeper geçiş yeri ESBE'de de adsız, TASLAK kalıyor.
- **Yazılmayan oklar:** 1828 ve 1853 Prut geçişleri (geçiş yeri kaynakta adsız). Skulyani yalnız 1854 çekilişinde anılıyor. 1790 İsmail yürüyüşünün başlangıcı da adsız.
- **Ryabaya Mogila ve Larga (1770):** kaynakta adı var ama tepe/nehir oldukları için tek noktaya indirgenemedi, yola konmadı. Rimnik ve Kagul uçları aynı adı taşıyan şehirler (temsilî).
- **Çelişkiler (kayıtlara yazıldı):**
  - ESBE-TV Stavuçani'yi bir yerde 17, bir yerde 27 Ağustos veriyor; «Ставчаны» maddesi 28 Ağustos diyor.
  - ESBE-TV "6 октября пал Очаков" diyor; prlib ve TDV Aralık diyor.
  - TDV `bogdan` 1711 çevrilmesini 11 Temmuz, TDV `baltaci` 18 Temmuz veriyor.
- **Emsal ve renk:** 1877 oku bir **geçiş**, işgal değil. Romanya müttefikti, bu yüzden taralı öneri yok. Renk olarak dolgu yeşili `#4f7d4f` değil, dosyadaki öteki Rus oklarının rengi `#0d7d8a` kullanıldı (A6B `#4f7d4f` önermişti).

## 3. `isg:` önerileri (YAMA JSON `isg_onerileri`)

```
1711   Yaş 07-06→07-23                                         KARAR: Kantemir'in daveti (müttefik mi işgal mi)
1739   Hotin 08-30→09-18 · Yaş 09-12→09-18                     bitiş = Belgrad; Yaş KARAR (6 gün)
1769   Bükreş 12-01(AY)→1774-07-21                             KARAR · A6B Hotin/Yaş/5 Boğdan önerileri geçerli
1770   Bender s→isg (A6B P-BEN-1 artık KAYNAKLI) · Akkirman 10-09→1774-07-21
1789   Bender 11-14→1792-01-09
1790   Kili 10-24→1792-01-09 · İsmail s→isg 12-22→1792-01-09 (veri 01-10)
1806   Yaş 11-30→11-24 · Bükreş 11-30→12-25 · Kili 01-01→11-30* · Hotin 01-01→11-24* · Bender YENİ 11-30*
       Roman·Birlad·Soroka·Orhei 11-24* · Büyük Eflak 5 yerleşim 12-25*          (* gün komşudan)
1809   İsmail 09-26→1812-05-28
1810   Yergöğü: s:rusya 1810→1829 (19 YIL egemen Rus) → isg 1810-09-27→1812-05-28 + d 1812→1829
1828   Yaş·Bükreş 05-01→05-07 · 3 Boğdan + 5 Büyük Eflak 05-07→1834-01-01
1853   Eflak 11 yerleşim + Bükreş 07-01(AY)→1854-08-22 · Yergöğü →1854-07-07 · Boğdan 4 →1854-09-01(AY)   KARAR
1877   YOK — müttefik geçişi
```
🔴 **Verideki ölçülmüş kusurlar:**
- **Bükreş 1806:** veri 30 Kasım'da Rus diyor. ESBE'ye göre o tarihte şehir Rusçuk ayanının elindeydi; Ruslar 13 Aralık J'de girdi.
- **Kili ve Hotin 1806:** `1806-01-01` yazılmış, yani yıl kodu. Rus ordusu Dinyester'e 11 Kasım J'den önce hiç girmemişti.
- **Bender 1806-1812:** işgal hiç çizilmiyor, dönem düz `d:`.
- **Yergöğü:** 1812'den 1829'a kadar 17 yıl fazladan Rus boyanıyor. İadeyi ÇIKARIMLA gösterdim: TDV'deki 1828 öncesi Osmanlı topçu kaydı ve 1829'da Osmanlı'nın kaleyi Eflak'a bırakması. 1812 antlaşmasının Yergöğü'yü adıyla anan cümlesini **okumadım**.

**Bilerek dışarıda bırakılanlar:** Oltenya (1806 · 1828) · güney Boğdan (Kahul · Kalas) 1806 · 1770 Kili/İsmail/İbrail (gün yok) · Hotin 1788 ve Bükreş 1789 (işgalci **Avusturya**; ESBE-TV "где оставлен австрийский гарнизон") · A6B S-HOT-1788 bu hükümle kapanıyor.

## 4. Kazak Hetmanlığı (YAMA JSON `kunye_onerileri` · `kunye_yerlesim_onerileri`)

- **Künye:** `kazak-hetmanligi`, 1648 → 1782 (EoU: "existed from 1648 to 1782"). Başkentler, sekiz kronoloji maddesi ve kaynakları kayıtta. PAKET-A6B K-CEH-1'in yerine geçer.
- **Künyeye `tabi` yazılmamalı:** 1669-1676 Osmanlı himayesi yalnız Sağ Yaka'yı (Doroşenko) kapsıyor. Himaye Çehrin'e `v:{himaye:true}` olarak veriliyor.
- **Çehrin önerisi:**
  - `lehistan` → 1648
  - `kazak-hetmanligi` 1648 → 1669-05-01
  - `v:` himaye 1669-05-01 → 1676-09-19
  - `kazak-hetmanligi` 1676-09-19 → 1678-08-21 (Samoylovyç + Rus garnizonu; KARAR)
  - `d:` 1678-08-21 → (A6B P-CEH-2)
- **Sol Yaka:** Poltava · Lubnı · Kremençuk · Baturin · Çernigov · Novgorod-Seversk ve Hluhiv için `kazak-hetmanligi` 1648 → 1782 önerildi. **KARAR:** şehirlerin Hetmanlığa katılış günü bulunamadı. Verideki 1654 günleri atlasın kendi değeri, kaynak değil. Model sorusu da açık: Moskova vasalı Hetmanlık kendi rengiyle mi çizilecek, rusya rengiyle mi?
- **Dışarıda:** Kiev · Uman · Sumı · Putivl · Zaporojye Seçi (ayrı künye).
- **Çelişki (D092):** TDV `cehrin-seferi` tampon beyliği 1668 diye tarihliyor; EoU ittifakın ilanını 1 Mayıs 1669 veriyor. İki kaynak farklı adımı tarihliyor olabilir. Günü veren kaynak seçildi.
- **Renk:** `#6a3d9a` (mor), 1648-1782 komşularının hiçbirinin ton ailesinde değil. Yedek `#d9b21a`. ΔE ölçülmedi, `renk_olc.py` koşu sonrası sınar.

## 5. Değişmez 2 / 2i / 2s etkisi (C)

`node denetim/ARAC-RUS-ETKI-0913.js` → `denetim/OLCUM-RUS-ETKI-0913.json`

**Çekirdekte ±30 günde MADDESİZ (yazılması gereken maddeler):**
```
2i  1769-12-01  Bükreş'in Rus işgaline girişi (Kasım sonu J)
2i  1789-11-14  Bender'in Potemkin'e teslimi
2i  1790-10-24  Kili'nin Gudoviç'e teslimi
2i  1853-07-01  Rusların Memleketeyn'i işgali (17 yerleşim)
2i  1854-07-07  Yergöğü'nün Ömer Paşa'ca geri alınışı       (kuyrukta ilgisiz madde var)
2   1669-05-01  Doroşenko Hetmanlığının Osmanlı himayesine girişi
2   1676-09-19  Doroşenko'nun Çehrin'de teslimi
2s  1782-01-01  Hetmanlık kurumlarının tasfiyesi
```
🔴 **"✓" satırlarının bir kısmı ad bakmayan eşleşme (sayaç kapanır, borç kapanmaz · D145):**
```
1648-01-01  → "Kâtib Çelebi'nin Cihannümâ'yı yazmaya başlaması"   ⇒ Hmelnitski/Hetmanlık maddesi YOK
1739-08-30  → Belgrad Antlaşması (19 gün)                          ⇒ Hotin'in 1739 zaptı maddesi YOK
1770-10-09  → "Bender'in Ruslara kaybı" (12 gün)                   ⇒ Akkirman 1770 maddesi YOK
1806-11-24/30 → 1806-12-22 savaşın başlaması (22-28 gün)           ⇒ Yaş/Dinyester geçişi maddesi YOK
1809-09-26  → Hamina Antlaşması (İsveç)                            ⇒ İsmail 1809 maddesi YOK
1854-08-22 / 09-01 → "İlk dış borç sözleşmesi"                     ⇒ Rus tahliyesi / Ömer Paşa Bükreş maddesi YOK
```
**Anlatılan kapanışlar:** Prut 1711 · Belgrad 1739 · Bender 1770 · Kaynarca 1774 · İsmail 1790 · Yaş 1792 · Rusçuk 1810 (Yergöğü'ye 1 gün) · Bükreş 1812 · 1828 savaş başı (11 gün) · 1834 çekilme.

**Kırılma değişimleri:**
- **Düşen Değişmez 2 kırılmaları** (işgale dönüşen `d:` boşlukları): Bender 1770-09-27 · 1774-07-21 · İsmail 1790-12-22 · 1792-01-10 · Hotin 1769-09-19 · 1774-07-21 (A6B).
- **Düşen 2s kırılmaları:** Yergöğü 1829-09-14'teki `rusya→eflak` geçişi `d→s:eflak` olur (gün aynı).

SEFERLER uçlarından 4'ü çekirdekte maddesiz: 1769-04-25 · 1788-06-04 · 1789-11-14 · 1789-09-22. SEFERLER Değişmez 2 evreninde olmadığı için bu yalnız bilgi.

## 6. Bulunamadı / ölçülemedi / okumadım

```
bulunamadı   1853 Prut geçiş GÜNÜ (ESBE-VV, TDV, Goldfrank günsüz; Britannica 403)
bulunamadı   1739 Hotin/Yaş fiilî tahliye günü · 1769 Bükreş günü (AY) · 1770 Kili/İsmail/İbrail günü
bulunamadı   Hotin 1788 günü ve işgalcinin kim olduğu (Avusturya garnizonu; yıl çelişkisi 1787/1788)
bulunamadı   1806 Oltenya · Kahul · Kalas; 1828 Oltenya varış günü
bulunamadı   Hetmanlık Sol Yaka şehirlerinin 1648 katılış günleri · Hluhiv 1547-1648 dilimi
ölçülemedi   Babilunga makalesinin sayı/sayfası; alıntılar WebFetch özetinden (tam metin okunmadı)
ölçülemedi   BSE «Прутский поход» cildi; alıntı WebFetch özetinden
okumadım     1812 Bükreş Antlaşması metni (Yergöğü iadesi) · 1877 Rus-Romen geçiş sözleşmesi metni
okumadım     Ryabaya Mogila / Larga / Kalus için gazetteer noktası (tepe/nehir)
ölçmedim     renk ΔE · motor çıktısı (koşu 10) · isg önerilerinin haritada Değişmez 1'e etkisi
```

## 7. Karar bekleyenler (1.MURAT)
1. 1711 Yaş: Kantemir'in daveti müttefik varlığı mı, işgal mi? Taralı yazılsın mı?
2. 1739 Yaş penceresi 6 gün (bitiş antlaşma günü). Yazılsın mı, tahliye günü mü aransın?
3. Ay kodlu uçlar: Bükreş 1769 başı · 1853 başı · Boğdan 1854 sonu. A4 Vehhâbî emsali kabul mü?
4. 1853 Oltenya bitişi Bükreş'in günü (üst sınır) olsun mu?
5. Hetmanlık Sol Yaka: kendi rengiyle mi, rusya ile mi? Çehrin 1676-1678 dilimi `kazak-hetmanligi` mi, `rusya` mı?
6. Hotin 1788 ve Bükreş 1789: `isg:avusturya` istenir mi?
