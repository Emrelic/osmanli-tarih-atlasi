# PAKET-KAPSAM · 13 Eylül 2026 — çekirdek kronolojide `kapsam:"dis"`

**Karar (Emre, 0035/H-0062):** çekirdek kronolojide Osmanlı devletiyle ilgili olmayan maddeler
(örnek: `olaylar_ek16.js` Demak 1527 — Cava'daki renk değişimini açıklamak için, `Değişmez 2s`)
`kapsam:"dis"` işaretlenir.

Aletler:
- `denetim/ARAC-KPS-ADAY-0913.js` — aday ölçümü (yalnız okur, `--json`)
- `denetim/ARAC-KPS-LISTE-0913.js` — işaretlenen 90 maddenin tek listesi (dosya#sıra · t · b başı · kademe)
- `denetim/ARAC-KPS-UYGULA-0913.js` — uygulayıcı (kuru koşu varsayılan, `--yaz`; idempotent — zaten `dis` olanı atlar; güvenlik sınavları dosyada)
- `denetim/ARAC-KPS-KIRILMA-0913.js` — "yalnız işaretli maddelerle kapanan kırılma" ölçümü

---

## 0 · ÖNCE ÖLÇÜM — `kapsam` bugün ne yapıyor

### 0.1 Veride (işaretlemeden ÖNCE)
```
ÇEKİRDEK data/olaylar*.js   42 dosya · 1372 madde
   kapsam:"dis"   45 · "ic" 25 · "konu" 1 · kapsamsız 1301
KUYRUK data/kronoloji*.js   42 dosya · 4838 madde · 4838'i kapsamlı
   "dis" 2429 · "ic" 2409   ← anlam SAHİBİ DEVLETE göre (o devletin iç/dış olayı)
```
Kuyruğa **dokunulmadı**: orada `kapsam` zaten tam ve Osmanlı'ya göre değil, dosyanın kendi devletine
göre anlam taşıyor (`js/suzgec.js` ODAK paneli bunu okuyor). "Osmanlı'ya göre dis" diye yeniden yazmak
o anlamı bozardı.

### 0.2 Kodda — 🔴 BUGÜN İŞARETLEME HİÇBİR ŞEYİ GİZLEMİYOR
`js/` altında `kapsam` okuyan yer üç tane (css ve index.html'de 0):
```
app.js:4764    olaylar dizisi kurulurken YALNIZ kapsam:"konu" süzülüyor (8. boyut) — "dis" GEÇER
app.js:10801   EK devlet kronolojisinde "yalnız dış" kutusu — KUYRUK maddelerine, çekirdeğe DEĞİL
suzgec.js      onemGecer/onemSuz (kapsamOf) — yalnız app.js:10790 odakSuz üzerinden
```
- **Osmanlı zaman çizgisi (varsayılan liste, olay olay oynatma, kırılma-madde eşleşmesi, kamera/odak):**
  `kapsam:"dis"` **okunmuyor.** Sıra, oynatma, odak **değişmez.** (`suzgec.js:156` bunu kendisi yazıyor:
  *"Osmanlı zaman çizgisine uygulanması 1272 maddenin puanlanmasını bekliyor"*; `app.js:10742` panelde
  aynı uyarıyı basıyor.)
- **Birleşik liste (bir EK devlet seçilince, ODAK yokken):** Osmanlı maddeleri `odakSuz`dan geçer.
  İşaretli 90 maddenin **hiçbirinde `onem`/`bolge`/`dunya` yok** ⇒ `bolge` dalında `b === null` ⇒
  `puansiz` (varsayılan **açık**) ⇒ **gösterilir.** "Puansız" kutusu kapatılırsa `ic` puansızlar da
  aynı anda gizlenir — yani fark yine **sıfır.**
- **`denetle.py`:** `kapsam` alanını okumuyor (yalnız `kapsam_disi` adında ilgisiz bir kova var).

⇒ Emre'nin *"dünya haberi eşiğinin altına düşsün"* niyeti **veride hazır, kodda henüz uygulanmıyor.**
Görünür etki için iki şart var: (a) Osmanlı listesine `onemSuz`/`kapsam` süzgecinin bağlanması
(app.js — PAKET-ISYAN'ın dosyası, dokunmadım), (b) bu maddelere `dunya` puanı (yoksa `puansiz`
kuralıyla yine görünürler).

### 0.3 🔴 İleride süzgeç bağlanırsa: 89 kırılma SESSİZLEŞİR
`ARAC-KPS-KIRILMA-0913.js`: ±30 gün içinde **yalnız işaretli maddelerin** durduğu kırılma sayısı
```
89 kırılma anahtarı   yabancı (s:) 88 · işgal (isg:) 1 · Osmanlı (d:/v:) 0
```
Beklenen sonuç: bu maddeler zaten `Değişmez 2s` kapatmak için yazılmıştı. **Osmanlı kırılması 0.**
⚠️ Bu kaba bir ölçüm — `denetle.py`'nin KAPSAM DIŞI kovasını ve tavanlarını taklit etmez.

🔴 **Ve içinde Osmanlı dünyasına ait YABANCI geçişler var (D147 anahtar paylaşımı).** Bunlar bugün de
"kapalı" görünüp aslında anlatılmamış geçişlerdir; süzgeç bağlanınca kapatanları da gizlenir:
```
1527-01-01  Bihaç (Bihać) · Iximché …        ← kapatan yalnız Demak 1527
1814-01-01  Dubrovnik · Kukava …             ← kapatan yalnız Kiel Antlaşması
1882-03-06  Niş · Semendire · Belgrad · Kragujevac · Çaçak   ← yalnız Assab 1882 (Sırbistan Krallığı ilânı anlatılmamış)
1920-07-01  Kudüs · Gazze · Akkâ · Yafa · Nablus            ← yalnız Trianon (Filistin sivil idaresi anlatılmamış)
1922-03-15  Kahire · İskenderiye · Dimyat · Asyut · Asvan   ← yalnız Tannu Tuva 1922 (Mısır'ın bağımsızlığı anlatılmamış)
(Osmanlı dışı ama aynı cins: 1866-10-03 Venedik · Verona · Padova ← yalnız Cizzah 1866)
```
⇒ Bu beşi **Emre/1.MURAT'a borç önerisi**: kendi maddeleri yazılmadan Osmanlı listesine `dis` süzgeci
bağlanmamalı. (Tam liste: aletin çıktısı.)

---

## 1 · KURAL (muhafazakâr)

Bir çekirdek madde **`dis` olur** ancak şunların HİÇBİRİ yoksa:
1. Osmanlı aktörü/toprağı: `osmanli`, padişah/sadrazam/vezir/paşa/yeniçeri/beylerbeyi/sancak/eyalet/
   kapudan, Babıâli/Porte/Dersaadet/İstanbul/Rumeli/Anadolu, tâbi, Türk (Türkmen/Türkistan hariç),
   padişah adları (Orhan · Murad · Bayezid · Mehmed · Selim · Süleyman · İbrahim · Mustafa · Ahmed ·
   Abdülhamid · Mahmud · … · Fatih · Kanuni · Yavuz · Yıldırım · Cem) — `b · yer · yer_id · kisiler ·
   taraf · kaynak · etiket · gun · tur/k` alanlarında
2. `yer`/`yer_id`, atlasın **hiç `d:`/`v:` taşımış** 941 yerleşiminden biri (`girdi.py` izin listesi, 79 dosya)
3. Osmanlı komşusu/bağlam adı (Habsburg · Venedik · Safevî · İran · Rus · Leh · Memlük · Bizans · Kırım ·
   Eflak/Boğdan/Erdel · Sırp/Bulgar/Arnavut/Bosna · beylikler · Timur · Karakoyunlu/Akkoyunlu · Haçlı/
   şövalye · Mısır · Halep/Bağdat/Tebriz · Kafkas/Gürcü/Ermeni · Cezayir/Tunus/Trablus/Fas · Mohaç ·
   Papalık · İspanya/Portekiz · Kızıldeniz/Basra/Hicaz/Yemen/Habeş · Özbek …) ya da Osmanlı sinyali
   yalnız gövdede (`d`, `ic_not_*`) ⇒ **SINIRDA: tek tek OKUNDU**
4. Okunurken: Osmanlı'nın bir komşuyla savaşı/antlaşması, ya da Osmanlı kronolojisinin **bağlam olarak**
   anlattığı olay (Timur'un yükselişi, Safevî/Karakoyunlu/Akkoyunlu iç olayları, Mısır Hidivliği,
   Kırım-bozkır hattı, gövdesi "Osmanlı açısından …" diye çerçevelenen madde) ⇒ **işaretlenmedi.**

Normalleştirici: `ARAC-NORMAL-0903` eşlemesi (lower()'dan önce Türkçe harf eşleme + NFKD), eşleşme
**kelime sınırıyla** (D159). **Mevcut `kapsam` değeri hiçbir maddede ezilmedi.**

Kademeler (kapsamsız 1301 madde):
```
A  hiç sinyal yok                         23  → 23'ü de OKUNDU, 23 işaretlendi
B  yalnız komşu adı / gövde sinyali       88  → OKUNDU: 60 işaretlendi · 22 sınırda · 6 OSMANLI (red)
                                                 ⚠️ ilk geçişte 57 işaretlenmişti; rapor sayımı (57+6+22 = 85 ≠ 88)
                                                 3 OKUNMAMIŞ madde gösterdi → okundu, açık, ikinci geçişte işaretlendi
C  güçlü alan / Osmanlı-hiç yer         1190  → yalnız "zayıf" sebepli 238'i okundu:
                                                 7 AD ÇAKIŞMASI işaretlendi · ~25 sınırda · kalanı Osmanlı
```

### 1.1 🔴 Aletin kendisi Demak'ı KAÇIRDI — ad çakışması (D159/D064 ailesi)
Demak 1527 **C** çıktı: `yer` listesindeki Cava şehri **`Kudus`** normalleşince **`Kudüs`** ile aynı dizgi
(Osmanlı-hiç yerleşim). Emre'nin karar verdiği örnek, kural otomatik uygulansaydı **işaretlenmeyecekti.**
Aynı sınıftan 6 madde daha okunarak bulundu:
```
Norveç 1537 (Danimarka "eyalet"i) · Fredrikshamn 1809 (yer "Turku" ↔ \bturk) · Moskova-Litvanya 1503
(yer listesinde "Nikarya (İkarya)") · Mamûra 1614 (Fas Mehdiye ↔ Tunus Mehdiye) · Âl-i Halîfe 1783
(kisiler "Ahmed", lakap "el-Fâtih") · Dürrânî 1793 (kaynak "ahmed-sah-durrani")
```
📌 Yan bulgu (dokunmadım, kayıt): `olaylar_ek16.js` Moskova-Litvanya Mütarekesi 1503 `yer` alanında
Çernigov-Kursk listesinin ortasında **"Nikarya (İkarya)"** duruyor — Ege adası; muhtemelen yapıştırma
hatası. Sahibine.

---

## 2 · UYGULANAN — 90 madde · 7 dosya

```
dosya              işaretlenen   (kapsamsız→dis)
olaylar_ek16.js        39
olaylar_ek8.js         20
olaylar_ek13.js        13
olaylar_ek15.js         9
olaylar_ok109.js        5
olaylar_ek11.js         3
olaylar_ek2.js          1
TOPLAM                 90        diff: 7 dosya · 90 satır · her satırda yalnız `kapsam:"dis", ` eklendi
```
Çekirdek sonrası: `dis` 45 → **135** · `ic` 25 · `konu` 1 · kapsamsız 1301 → **1211**.
Uygulamadan önce 7 dosyanın 7'si git'te temizdi (başka oturumun yarım yazımı yok).

Liste (tek otorite `ARAC-KPS-LISTE-0913.js`):
- **A (23):** Kiel 1814 · Gaeta 1861 · Norveç-İsveç feshi 1905 · Somaliland 1884 · İtalyan Somalisi 1905 ·
  Genel Deniz Antlaşması 1820 · Granada 1492 · Bordeaux 1452 ve 1453 · Hawaii ×4 (1819 · 1840 · 1887 ·
  1894) · Tonga ×2 (1893 · 1918) · Yeni Zelanda ×2 (1893 · 1901) · Kasım Hanlığı 1468 · Tannu Tuva ×2
  (1922 · 1923) · Hârizm ×2 (1920 · 1921) · Buhara 1920
- **B (60):** Menorka 1708 · Cizzah 1866 · Habsburg Karniyola 1335 · İberya Birliği 1581 · Restauração 1640 · Tanca 1662 · Portekiz-Fas kıyısı ×9 (Arzila 1471 ·
  Safi 1488 · Agadir 1505 · Azemmûr 1513 · Mazagan 1514 · Agadir 1541 · Safi-Azemmûr 1541 · Arzila 1549 ·
  Mazagan 1769) · Bahreyn ×3 (Safevî 1602 · Umman 1717 · Âl-i Mezkûr 1753) · Dârfûr Dâcû 1400 ·
  el-Arâiş 1610 · el-Hüseyme 1673 · el-Arâiş 1689 · Fransız Sahrası ×3 (Aynı Sâlih 1899 · Tuvât 1901 ·
  Beşşâr 1903) · Serbedârîler 1337 · Kazan Hanlığı 1438 · İtalya Krallığı 1861 · Alçak Ülkeler 1516 ·
  Polonya 3. paylaşım 1795 · Şeybânî Herat 1507 · Venedik'in sonu 1797 · Vilnius 1561 · Feragat
  Bildirgesi 1581 · Rastatt 1714 · Nystad 1721 · Viyana Kongresi 1815 · Smolensk 1611 · Stolbova 1617 ·
  Deulino 1618 · Pereyaslav 1654 · Smolensk 1654 · Andrusovo 1667 · St. Petersburg 1703 · Amiens 1802 ·
  2. Thorn 1466 · Cenova'nın sonu 1797 · Malta 1800 · Assab 1882 · Floransa 1532 · Kasım Hanlığı 1573 ve
  1609 · Tannu Tuva 1921 · Buhara 1921 · Hârizm/Buhara sonu 1924 · Macar halk cumhuriyeti 1918 · Villa
  Giusti 1918 · Karl'ın çekilişi 1918 · Saint-Germain 1919 · Trianon 1920
- **C-ad çakışması (7):** Demak 1527 · Norveç 1537 · Fredrikshamn 1809 · Moskova-Litvanya 1503 ·
  Mamûra 1614 · Âl-i Halîfe 1783 · Dürrânî 1793

---

## 3 · SINIRDA — İŞARETLENMEDİ, Emre'ye

### 3.1 B'den okundu, bağlam/komşu (22)
```
olaylar.js       1798-06-12 Malta şövalyeleri — Mısır seferinin yolu (Osmanlı Mısırı bağlamı)
olaylar_ek11.js  1510-12-02 Merv Savaşı — gövde "Osmanlı devleti doğusunda kendi büyüklüğünde…"
                 1747-06-20 Nâdir Şah'ın öldürülmesi — gövde Osmanlı ile üç savaşı anıyor
                 1796-01-01 Kaçar hâkimiyeti — gövde "Osmanlı'nın doğu komşusu"
olaylar_ek13.js  1521-01-01 Portekiz Bahreyn'i aldı — gövde "Osmanlı-Portekiz çekişmesinin hedefi"
                 1861-05-31 Bahreyn-İngiltere — gövde Osmanlı 1871 Lahsa
olaylar_ek15.js  1564-01-01 İspanya Bâdis'i geri aldı — gövde "Osmanlı-İspanyol çekişmesi"
                 1792-09-22 Fransa Birinci Cumhuriyet — gövde "Osmanlı açısından muhatap…"
                 1659-01-01 Sa'dî sonu — gövde "Osmanlı'ya hiçbir dönemde bağlanmayan"
olaylar_ek16.js  1452-01-01 Karakoyunlu Cihan Şah Timurlu İran'ı — Karakoyunlu, doğu Anadolu
olaylar_ek5.js   1381-04-01 Timur Herat · 1467-11-10 Karakoyunlu çöküşü
olaylar_ek7.js   1335-12-01 İlhanlı dağılması · 1387-11-01 Timur İran · 1736-03-08 Nâdir Şah tahtta
olaylar_ek9.js   1884-06-03 Hewett (Adua) — Hidiv Tevfik, Mısır garnizonları
olaylar_ok106.js 1571 Kremençuk · 1616 Uman · 1638 Çuguyev · 1652 Slobodskaya Ukrayna — Kırım/Yedisan hattı
olaylar_ok109.js 1918-10-30 Avusturya Cumhuriyeti — gövde "aynı gün Mondros"
                 1919-06-28 Versailles — gövde Sevr
```
### 3.2 B'den okundu, OSMANLI — red (6)
Granbosa 1692 · Suda-Spinalonga 1715 · Girit'e özerklik 1898 · Malta Kuşatması 1565 · Londra 1827 ·
İtalya'nın Trablusgarp ilhak kararnamesi 1911.

### 3.3 C'nin "zayıf sebepli" 238'inden okunan sınırdakiler (kayıt)
```
olaylar_ek16.js  1797 Campo Formio (Kefalonya) · 1772 ve 1793 Polonya paylaşımları (Yazlofça · Bar, eski Osmanlı Podolyası)
                 1509 Oran'ın İspanya'ya düşüşü (sonra Osmanlı) · 1340 Celâyirli kuruluşu (Tebriz) · 1411 Bağdat Karakoyunlu
                 1441 Kırım Hanlığı kuruluşu · 1891 Müleydâ (Necid) · 1916 Katar-İngiliz · 1891 Tokar (İngiliz-Mısır)
olaylar_ek13.js  1417 Bahreyn Cebrîler (Katif)
olaylar_ek15.js  1695 Dârfûr Sultanlığı (gövde Babıâli) · 1857 Büyük Kabiliye (Fransız Cezayiri)
olaylar_ek5.js   1386 Timur'un üç yıllık seferi · 1393 Muzafferî sonu
olaylar_ek7.js   1406 Kara Yusuf Tebriz · 1468 Uzun Hasan · 1501 Şah İsmail Tebriz · 1828 Türkmençay · 1902 Riyad
olaylar_ok109.js 1918 Çekoslovakya (Kassa) · 1918-11-11 ardıl devletler (Budin, Erdel) · 1918-12-01 SHS/Büyük Romanya · 1919 Neuilly (Gümülcine)
```
Soru Emre'ye: **Timur / Safevî / Karakoyunlu-Akkoyunlu iç olayları, Mısır Hidivliği ve 1918-19 Habsburg
ardılları "Osmanlı bağlamı" mı, "dünya" mı?** Tek cümlelik bir hüküm bu ~45 maddeyi tek geçişte çözer.

---

## 4 · VAR OLAN `kapsam` DEĞERLERİNDE TUTARSIZLIK (dokunulmadı — karar dışı)
Önceki oturumların `kapsam`ı Osmanlı'ya göre değil, anlaşılan **"bölge/beylik"** ekseninde yazılmış:
```
"dis" ama OSMANLI olayı   olaylar_serhat.js 1428 "II. Murad Alacahisar'ı aldı" · 1454 Alacahisar ·
                          p0043a 1456 Şehirköy Osmanlı'ya döndü · p0043b 1514 Yavuz Çaldıran seferine çıktı ·
                          p0044 1556 Kostayniçe fethi · 1574 Mâku Osmanlı'ya geçti · ek8 1460 İzvornik fethi ·
                          ek8 1515 Nusaybin-Cizre Osmanlı'ya · ek17 1513 Pîrî Reis haritası · ek17 1711 Prut ×2 · ek20 1489 Cem Sultan
"ic" ama OSMANLI DEĞİL    ek20 1326 Eşrefoğulları sonu · ek20 1366 Karamanoğlu Konya'yı aldı
```
Bugün görünür etkisi yok (§0.2). Osmanlı listesine süzgeç bağlanırsa **ilk grup Osmanlı fetihlerini
gizler.** Öneri: süzgeç bağlanmadan önce bu ~15 değer Emre'nin kuralına göre `ic`e çekilsin (ayrı sevk).

---

## 5 · DENETİM — ÖNCE / SONRA
```
node denetim/ARAC-A2-BAG-0913.js --hepsi   önce 551/551 · HATA 0 · UYARI 141   sonra AYNI (çıktı diff'i BOŞ)
node --check                               7 dosyanın 7'si temiz
ARAC-KPS-UYGULA sınavı                     hedef dışı her madde JSON birebir · hedeflerde yalnız kapsam eklendi · bayt farkı 14/madde
py arac/denetle.py                         önce "SONUÇ: temiz" (2 ✓ 528·0 · 2s ✓ 1331·101 AÇIK·357 · 2i ✓ 62·3 · 2t ✓ 15)
                                           87 sonrası: çıktı diff'i BOŞ · 90 sonrası: "SONUÇ: temiz" · EXIT 0
                                           90 sonrası diff: TEK fark `Değişmez 4s` listesinde eşit sayılı iki satırın
                                           YER DEĞİŞTİRMESİ (adal 1 dönem ↔ katalan 1 dönem); satırlar sıralanınca
                                           çıktı BİREBİR aynı, hiçbir sayı değişmedi.
```
⚠️ Yan bulgu (araç sahibine, `§7` Oturum 6): `denetle.py` `4s` kovasında eşit dönem sayılı kimlikleri
**kararsız sırayla** basıyor — iki koşunun çıktısını `diff` ile karşılaştıran her ölçüm (bu paket gibi)
sahte bir "değişti" görür. `4s` yerleşim/künye kovasıdır, `kapsam` ile ilgisi yok. Çare: ikincil sıralama
anahtarı (kimlik adı).
