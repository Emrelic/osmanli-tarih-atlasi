# NOKTA-SUMER-1010 — Sümer kutusu noktalarının diff'i

Sevk: YILDIRIM BAYEZIT, 10 Ekim 2026 (görev mesajı) · işçi: NOKTA-SUMER-1010 (EMRELIC, model opus)
Girdi: `denetim/KASA-SUMER-NOKTA-1010.md` (+ varlık uçları için `KASA-SUMER-KUR-1010.md`)
Hedef dosya (koordinatörün kararı): `data/yerlesimler_nokta_ortadogu_0917.js`
Ölçüm ağacı: ayrı worktree, `origin/main` @ `1f08064861cb5e1cda2620d16747e8a50406bbec` (ana ağaç 0 geride)

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı, sonradan DOKUNULMADI

Yazıldığı an: Pleiades kayıtları indirildi (27 kayıt, tasdik dönemleri + konum kayıtları
özetlendi); **mükerrer taraması, diff ve `denetle.py` koşusu HENÜZ YAPILMADI.**

Evren: KASA-NOKTA §1.1'in **16** satırı (15 Sümer sitesi + Susa kenar noktası).
Ayrıca §1.4'ün **10** "mevcut aday"ı (Uruk · Ur · Lagaş · Kiş · Nippur · Eridu · Umma ·
Şuruppak · Adab · Larsa) — koordinatör "Sümer noktaları atlasta YOK" diye ölçtü, bu 10'u da
kapsar ⇒ AYRI bir diff olarak (B10) önerilecek, ana diff'e karıştırılmayacak.

| soru | öngörü |
|---|---|
| 16'dan yazılabilecek nokta | **14 ± 1** — dışarıda kalacaklar: **Susa** (Pleiades tasdiki Safevî'ye uzanıyor ⇒ varlığı 1281'i aşıyor ⇒ Osmanlı penceresinde `s:` ister, bu işte `s:` yok) ve **Borsippa** (ad tasdiki İlhanlı 1258-1335 ⇒ aynı sınıf). Durum (Tell al-Lahm) yazılır ama adı çıkarım diye beyanla |
| ikinci tanıksız kalacak (`ÖLÇÜLEMEDİ`) | **1** (Durum/Tell al-Lahm: Pleiades'te tek konum kaydı, TGN yok) |
| mükerrer (ad-norm ya da ≤3 km) | **0 ± 1** — tell'ler modern kasabalardan uzak; tek şüphe Susa ↔ atlasta bir Şuş noktası varsa |
| B10'dan yazılabilecek | **9 ± 1** (Uruk/Nippur'un geç tasdikleri — Emevî — 1281'in altında kalır; Eridu "fifth-ce" 1281 altı) |
| `s:`siz inecek nokta | yazılanların **TAMAMI** (bu işte sahiplik yok); `bit:` 1281'den önce olduğu için **Değişmez 1 sahipsiz sayısı 309'da KALIR** |
| negatif `kur:`/`bit:` dizgisi | motor dizgi kıyası yapıyor (`"-"` < `"1"`) ⇒ 1281-1923 penceresinde noktalar **hiç canlı değil**; ama `denetle.py`nin en az bir adımı negatif yılı `gun_no` ile ayrıştırmaya kalkıp **çöker ya da ÖLÇÜLEMEDİ verir** |

---

## 1. ÖLÇÜM (10 Ekim 2026)

### 1.0 Öngörü sınavı
```
soru                               öngörü      ölçüm                                     hüküm
16'dan yazılabilen                 14 ± 1      13                                        TUTTU (alt sınırda)
  dışarıda kalan                   Susa,       Susa · Borsippa · Tell al-Lahm            TUTTU — ama öngörüm
                                   Borsippa                                              KENDİ İÇİNDE ÇELİŞİYORDU:
                                   (+Durum                                               1. satır "Durum yazılır",
                                   yazılır)                                              2. satır "Durum ÖLÇÜLEMEDİ".
                                                                                         İkincisi doğru çıktı.
ikinci tanıksız (ÖLÇÜLEMEDİ)       1           1 (Tell al-Lahm) + B10'da 1 (Adab)        16'da TUTTU
mükerrer (ad-norm / ≤3 km)         0 ± 1       0 (≤3 km: 0 · ad: 0; en yakın atlas       TUTTU
                                               noktası 13,2 km — Borsippa↔Hille)
B10'dan yazılabilen                9 ± 1       9 (Adab dışarıda)                         TUTTU
s:siz inen                         tamamı      22/22                                     TUTTU
Değişmez 1 sahipsiz                309 kalır   309 (beklenen 309)                        TUTTU
negatif yıl denetle'yi çökertir    "en az bir  ÇÖKMEDİ — denetle.py çıktısı tabana göre  TUTMADI
                                   adım"       YALNIZ yerleşim sayısında farklı (4300→4322)
```
📌 Tutmayan öngörünün sebebi: `denetle.py`deki her `kur:`/`bit:` okuması önce DİZGİ kıyası
yapıyor (`bit <= g` ⇒ `continue`), `gun_no`ya ulaşmadan dönüyor. Negatif yıl dizgi
kıyasında `"-…" < "1…"` olduğu için bu noktalar her örnek günde ÖNCEDEN eleniyor.
⚠️ Bu bir TESADÜF güvencesidir, tasarım değil: `gun.py`nin **`negatif_yil_kapisi`**
(motor sayaçsızken negatif yıl ⇒ ÖLÇÜLEMEDİ) **hiçbir yerden ÇAĞRILMIYOR** — `rg` ile
ölçüldü, çağıran yalnız sınav dosyası `ARAC-GUN-SAYACI-C0-SINAV-1009.py`. Kendi kalemlerime
elle koşturdum: **`OLCULEMEDI`** veriyor (uret_petek.py'de `GUN_SAYACI = True` yok).
⇒ `CLAUDE.md §11`in *"çağıranı olmayan kapı, kapı değildir"* dalının bir örneği daha.

### 1.1 Taban ve ölçüm ağacı
- `origin/main` = `1f08064861cb5e1cda2620d16747e8a50406bbec` (ana ağaç `HEAD..origin/main` = 0)
- Hedef dosya taban blob'u LF; çalışma kopyası CRLF (`core.autocrlf=true`) — diff LF'tir.
- Pleiades: 27 kaydın JSON'u (`/places/<id>/json`, hepsi HTTP 200) + dönem sözlüğü
  (`/vocabularies/time-periods`, 220 dönem yılıyla ayrıştırıldı).
- TGN (B10 için yeni ölçüm): `vocab.getty.edu/sparql.json`, 20 terim, hepsi HTTP 200.

### 1.2 ANA DIFF — 13 nokta (`denetim/NOKTA-SUMER-1010.diff`)
Koordinat = Pleiades `reprPoint` (KASA ile aynı). `bit:` kuralı ve gerekçesi §2'de.

| # | ad | Pleiades | 2. tanık | `kur:` | `bit:` | kesinlik |
|---|---|---|---|---|---|---|
| 1 | Girsu (Tell Telloh) | 912855 | TGN 6003285 0,09 km ✓ | — (A) | MÖ 1600 ↔ `-1599` | yuzyil |
| 2 | Bad-tibira (Tell al-Madinah) | 771224406 | TGN 7032798 0,14 km ✓ | MÖ 2000 ↔ `-1999` | MÖ 540 ↔ `-0539` (açıklama: Neo-Asur kaynaklarında) | yuzyil |
| 3 | Zabalam (Tell Ibzeikh) | 921099766 | TGN yok · iç 2 OSM + CIGS ≤0,27 | — (A') | MÖ 1000 ↔ `-0999` | belirsiz (binyıl) |
| 4 | Marad (Tell Wannat es-Sadum) | 912901 | TGN yok · iç OSM↔CIGS **2,28 km** 🟡 | MÖ 2700 ↔ `-2699` | MÖ 539 ↔ `-0538` (açıklama: Yeni Babil'e dek) | yuzyil |
| 5 | Kisurra (Tell Abu Hatab) | 797093165 | TGN yok · iç 0,11 | MÖ 2700 ↔ `-2699` | MÖ 1600 ↔ `-1599` | yuzyil |
| 6 | Isin (Ishan al-Bahriyat) | 912868 | TGN 30,7 km SAPIK ✗ · iç 0,14 | — (A') | MÖ 539 ↔ `-0538` (açıklama: "until **at least**") | yuzyil |
| 7 | Nina (Tell Zurghul) | 912909 | TGN yok · iç 0,08 | — (D) | MÖ 330 ↔ `-0329` 🟡 Y-R yedeği | yuzyil |
| 8 | Dilbat (Tell ed-Duleym) | 893987 | TGN 16,5 SAPIK ✗ · iç 3 konum ≤0,10 | MÖ 2700 ↔ `-2699` | MS 750 (açıklama: "down to the early Islamic Period") | yuzyil |
| 9 | Kutha (Tell Ibrahim) | 893977 | TGN 7032802 0,10 ✓ | MÖ 2000 ↔ `-1999` | MÖ 540 ↔ `-0539` | yuzyil |
| 10 | Sippar (Tell Abu Habbah) | 894089 | TGN 6005491 0,28 ✓ | — (D) | MS 640 🟡 Y-R yedeği | yuzyil |
| 11 | Tell al-Ubaid | 339709658 | TGN 5,07 yuvarlak ✗ · iç 0,02 | — (A) | MÖ 2950 ↔ `-2949` | yuzyil |
| 12 | Eşnunna (Tell Asmar) | 90720956 | TGN 22,8 SAPIK ✗ · iç 0,18 | — (A) | MÖ 1600 ↔ `-1599` | yuzyil |
| 13 | Tutub (Khafajah) | 490043590 | TGN 7032790 0,21 ✓ | — (A) | MÖ 1600 ↔ `-1599` | yuzyil |

"iç" = aynı Pleiades kaydındaki bağımsız konumların (OSM · CIGS · DARMC · DARE) birbirine
uzaklığı — HUKUM-KASA-1010 §9.4'ün kabul ettiği "zayıf ama beyanlı tanık".
`kur:` değerlerinin tamamı KASA-SUMER-KUR-1010 §1.2'den; sınıf harfi o tablonun.

### 1.3 B10 DIFF — 9 nokta (`denetim/NOKTA-SUMER-1010-B10.diff`) — AYRI, seçmelik
| ad | Pleiades | 2. tanık (bu turda ölçüldü) | `bit:` | kesinlik |
|---|---|---|---|---|
| Uruk (Warka) | 912986 | TGN 7016635 1,28 yuvarlak ✗ · iç 0,08 | MS 750 (ad 'Warka' Emevî dönemi) | yuzyil |
| Ur (Tell al-Muqayyar) | 912985 | TGN 7002485 0,08 ✓ | MÖ 1 ↔ `0000` | belirsiz (binyıl) |
| Lagaş (Tell al-Hiba) | 959120263 | TGN 7026090 0,18 ✓ | MÖ 1600 ↔ `-1599` | yuzyil |
| Kiş (Tell Uhaimir) | 894028 | TGN 6003114 0,93 yuvarlak ✗ · iç ≤1,81 (iki tepe) 🟡 | MÖ 140 ↔ `-0139` (açıklama: "abandonment under the Seleucids") | yuzyil |
| Nippur (Nuffar) | 912910 | TGN 6004270 0,03 ✓ | MS 750 | yuzyil |
| Eridu (Abu Shahrain) | 912845 | TGN 6001911 0,31 ✓ | MS 499 🟡 (OSM konum aralığından) | yuzyil |
| Umma (Tell Jokha) | 44626252 | TGN 6006206 4,3 yuvarlak ✗ · iç 0,31 | MÖ 1000 ↔ `-0999` | belirsiz |
| Şuruppak (Tell Fara) | 326150788 | TGN bulunamadı · iç 0,16 | MÖ 2000 ↔ `-1999` | yuzyil |
| Larsa (Tell as-Senkereh) | 912897 | TGN 6003327 0,31 ✓ | MÖ 140 ↔ `-0139` | yuzyil |

Niçin ayrı: KASA-NOKTA §1.4 bu 10'un ikinci tanığını "SUMER-KUNYE kıtasının işi" diye
bıraktı ve `KASA-SUMER-DOLGU-1010` §90-91 onları "SUMER-KUNYE'nin 10 noktası" diye sayıyor
⇒ başka bir oturumun yazma ihtimali var (mükerrer). İkinci tanığı BEN ölçtüm (TGN, bu turda);
koordinatör hangi oturumun indireceğine karar verir. **İki diff birbirinden bağımsız
uygulanır** (B10 dizinin BAŞINA, ana diff SONUNA ekler) — ikisi de tek başına ve birlikte
`git apply --check` TEMİZ.
`kur:` yazılmadı: KASA-SUMER-KUR-1010 "SUMER-KUNYE'nin 10 sitesi hepsi A sınıfı, `kur:` borcu YOK".

### 1.4 YAZILMAYANLAR — adıyla
| aday | niçin |
|---|---|
| **Borsippa** (893964) | Pleiades ad tasdiki **"Burs" — ilkhanate-middle-east (MS 1258-1335)** ⇒ `bit:` kuralı MS 1335 verir ⇒ nokta 1281-1335'te **CANLI ve SAHİPSİZ** olur (Değişmez 1 +1, Hille'nin peteğinden pay alır). Ayrıca §6.2 sorusu: İlhanlı "Burs"u höyük mü, yanındaki köy mü? — ayrı nesne olabilir. **Koordinatör kararı:** ya `bit:` İslâm öncesi bir uca çekilir (gerekçe ister), ya 1281-1335 için `s:` gelir. Koordinat ve 2. tanık TEMİZ (TGN 0,11 km). |
| **Susa** (912936) | Pleiades tasdiki **safavid-middle-east (MS 1501-1725)** ve "sixteenth-ce" ⇒ varlık 1281'i aşıyor ⇒ Osmanlı penceresinde `s:` ŞART; ayrıca TGN 7017509 modern **Şuş kasabası** (§9.4: tanık sayılmaz) ⇒ höyük ↔ kasaba İKAME sorusu (§6.3). Atlasta Şuş noktası YOK (en yakın Dizfûl 25,6 km). |
| **Tell al-Lahm ("Durum?")** (912953) | Pleiades'te **tek konum kaydı** (CIGS), TGN yok ⇒ ikinci tanık YOK ⇒ **ÖLÇÜLEMEDİ** (ⓑ). Üstelik ad "probably" (Pleiades). |
| **Adab** (787747618) | İki konum kaydı da **CIGS** (aynı sağlayıcı — bağımsız değil); TGN 7002486 "Bismaya" 12,48 km **dakika-yuvarlak** (§9.4: sayılmaz) ⇒ **ÖLÇÜLEMEDİ**. |
| **Akşak** | Pleiades 156790694: `reprPoint` YOK, konum kaydı YOK — yalnız "twenty-first-ce" etiketi. Koordinat **bulunamadı**. |
| **Keş** | Pleiades'te kayıt YOK (KASA) — koordinat **bulunamadı**. Yeri literatürde tartışmalı (Tell al-Wilaya / Abu Salabikh adayları) — tartışmalı yerden nokta UYDURULMADI. |
| **"Eridu çevresi"** | Bir site değil ⇒ **somut siteye çevrildi: Tell al-Ubaid** (KASA'nın önerisi; ana diff #11). |
| Dēr · Ç1 dolgu · T1 | Bu işin girdisinde değil (KASA-DER-1010 · KASA-SUMER-DOLGU-1010 ayrı kalemler). |
| Opis | KASA almadı (Pleiades↔TGN 92,7 km) — dokunulmadı. |

### 1.5 KASA'nın öngörüsüyle karşılaştırma (⑤)
| KASA'nın iddiası | benim ölçümüm | hüküm |
|---|---|---|
| "Akşak + Keş = koordinatı bulunamadı 1-2" | Akşak `reprPoint` YOK (teyit, Pleiades JSON'dan); Keş Pleiades'te yok | **TUTTU** |
| "Eridu çevresi alınmaz ya da Tell el-Ubeyd'e çevrilir" | Tell al-Ubaid somut, iki iç konum 0,02 km; ama varlığı yalnız Uruk dönemi (MÖ 2950'de biter) — yoğunluğa ancak MÖ 3000 kesitinde katkı verir | **TUTTU**, ama katkı sınırlı |
| "TGN ikinci tanık 6 ± 2" → ölçüm "6 TUTAN, 6 SAPAN" | aynı rakamları teyit ettim (TGN id'leri KASA'dan; Pleiades iç konumları kendim ölçtüm) | **TUTTU** |
| Marad "Pleiades iç 1,14 km" | 1,14 km reprPoint↔HER BİR konum; **iki konum arası 2,28 km** — iki ayrı tepe (Wanna · Sadum), reprPoint ortalarında | **EKSİK ÖLÇÜLMÜŞ** — KASA uzaklığı merkeze göre almış, tanıklar arası mesafe iki katı |
| "Durum: ad bile çıkarım" | + tek konum kaydı ⇒ ikinci tanık yok | **TUTTU, ve daha ağır**: alınmadı |
| Susa'yı "kenar dolgusu" olarak aldı (p95 −35 km) | varlığı MS 1725'e uzanıyor ⇒ 1281+ penceresinde sahiplik ister | **ÖNGÖRÜLMEMİŞ**: KASA varlık penceresini sormamıştı |
| `kur:` önerileri (KASA-KUR §1.2) | 5'i aynen kullanıldı (Kisurra · Marad · Dilbat `-2699`; Bad-tibira · Kutha `-1999`); Borsippa'nınki nokta alınmadığı için düştü | **AYNEN** |

---

## 2. `bit:` KURALI — ne seçtim ve niçin (koordinatör değiştirebilir)
ⓐ hükmü: *"`kur:`/`t:` dönem aralığının UÇLARINDAN"*. Şema'da `t:` yerleşim alanı yok;
VARLIĞIN sonu `bit:` (motor okur: `uret_petek.py:4933` · `denetle.py:1253`). Uygulanan sıra:
1. **Siteye özgü Pleiades açıklaması** bir son veriyorsa O (Bad-tibira · Marad · Isin ·
   Dilbat · Kiş) — KASA-KUR'un "açıklama siteye özgü ⇒ esas" ilkesinin aynası.
2. Yoksa **son Mezopotamya/Orta Doğu dönemi tasdikinin sonu** (ad + konum tasdikleri).
3. **Yunan-Roma etiketleri** (archaic · classical · hellenistic-republican · roman ·
   late-antique …) SAYILMADI — KASA-KUR §1.0'ın bulgusu: bunlar Barrington Atlas'ın
   kapsamıdır, sitenin yaşı değil. `kur:` için onları dışlamak doğruysa, `bit:` için
   dışlamak da doğrudur; aksi hâlde aynı etiket bir uçta sayılır öbüründe sayılmaz.
4. Hiç Mezopotamya tasdiki yoksa (Nina · Sippar) Y-R etiketinin sonu **🟡 YEDEK** olarak
   yazıldı ve kayıtta "terk tanığı değil, kaydın üst ucu" diye BEYAN edildi.
5. "modern" · "twentieth-ce" · "modern-middle-east" etiketleri arkeolojik sit adıdır — sayılmadı.
⚠️ **Kuralın en zayıf yeri, adıyla:** Pleiades AD tasdiki ≠ yerleşim tasdiki. Ur'un adı
'late-antique' tasdikli (büyük olasılıkla metinlerde anılan "Kildanîlerin Ur'u"); kural 3
olmasaydı Ur'un `bit:`i MS 640 olurdu. Kural 3 ile MÖ 1 (binyıl çözünürlüğü, `belirsiz`).
İki kalem bu kuralın dışına taşıyor ve 🟡 işaretli: **Eridu** (MS 499 — OSM konum kaydının
-5000…499 aralığından gelen yüzyıl etiketleri; Mezopotamya etiketlerinin sonuncusu MÖ 540)
ve **Kutha** (Y-R 'late-antique' sayılırsa MS 640 olurdu).
Kesinlik: dönem sonu ⇒ `yuzyil`; binyıl etiketi ⇒ `belirsiz`; "ca." kuruluş ⇒ kayıt
geneli kaba olanı alır (skaler alan, `VERI-YAPISI` "kaydın tamamı için").

## 3. Doğrulama
```
git apply --check (taban 1f080648)      ana ✓ · B10 ✓ · B10 ana'nın üstüne ✓
node --check (iki diff uygulanmış)      ✓  · node eval: dizi 6 → 28 kayıt (22 yeni)
girdi.yukle()                           4300 → 4322 nokta · bilinmeyen alan uyarısı YOK
denetle.py (iki diff, ayrı worktree)    çıkış 2 — TABANLA AYNI: tek ÖLÇÜLEMEDİ Değişmez 8
                                        (devletler_harita.js taze ağaçta yok, §5 beklenen)
  taban ↔ yamalı çıktı farkı            YALNIZ iki satır: 4300→4322 yerleşim sayısı
  Değişmez 1                            309 sahipsiz (beklenen 309) ✓
gun.capraz_kapi (kendi 27 tarihim)      24 negatif tarihin 24'ü metindeki "MÖ n" ile TUTUYOR
                                        (bir yıllık kayma 0); 3 ③-uyarısı aşağıda
gun.negatif_yil_kapisi (elle)           OLCULEMEDI — motor sayaçsız (bkz. 1.0, kapı ÇAĞRILMIYOR)
```
⚠️ `capraz_kapi`nin 3 uyarısı (Eridu · Dilbat · Sippar): `bit:` MS ama `not:` metninde
`kur:`un ya da dönem aralığının "MÖ n"si geçiyor ⇒ ③ "metin MÖ diyor ama tarih MS" der.
Sebep kural değil ALAN TASARIMI: `VERI-YAPISI.md` MÖ tarihine `gun:"MÖ 3000"` gibi
**tarih başına** metin istiyor, ama `gun:` yerleşim kaydında **`BILINEN_ALANLAR`'da YOK**
(yazılsa uyarı üretir) ⇒ metni kayıt başına `not:`e koydum. Kapı bağlandığı gün bu üç kayıt
YANLIŞ alarm verir — çaresi ya tarih-başı metin alanı (`kur_gun`/`bit_gun`) ya da kapının
`not:`ü değil ayrı bir alanı okuması. Karar senin.

## 4. Değişmez 1 ve motor etkisi — `s:`siz inen 22 nokta, ADIYLA
Ana 13: Girsu · Bad-tibira · Zabalam · Marad · Kisurra · Isin · Nina · Dilbat · Kutha ·
Sippar · Tell al-Ubaid · Eşnunna · Tutub. B10 9: Uruk · Ur · Lagaş · Kiş · Nippur · Eridu ·
Umma · Şuruppak · Larsa.
- **1281-1923 penceresinde HİÇBİRİ CANLI DEĞİL** (en geç `bit:` MS 750) ⇒ Değişmez 1
  ölçümü (1285-1920 örnekleri) onları atlar — ölçüldü, 309 → 309.
- 🔴 **AMA motor onları YOK SAYMIYOR:** ölü nokta Voronoi'de yine bir petek alır ve
  `petek_epok` onu "varlık devri" ile komşulara paylaştırır (`uret_petek.py:5426-5435`);
  ayrıca `_yr_aday` (saat matrisi adayları, `:6580-6582`) `kur`/`bit` taşıyan her noktayı
  alır ⇒ **koşu süresi ve Irak peteklerinin geometrisi değişir.** En yakın canlı noktalar:
  Hille 13,2 km (Borsippa — alınmadı) · Kiş↔Hille 16,4 · Marad↔Dîvâniye 16,7 ·
  Ur↔Nâsıriye 17,1 · Tutub↔Bağdat 18,2 km. Bu etki ancak koşudan sonra görünür
  (Değişmez 8 motor ÇIKTISINI ölçer).
- MÖ kesitlerinde (motor sayaca geçince) 22'si de sahipsizdir — künyeler gelene dek.
  `bos:` YAZMADIM (sahipsizliğin cinsi bir hüküm; künyeler yolda).
- `js/`: uygulama bu dosyanın penceresini (`YERLESIMLER_NOKTA_ORTADOGU_0917`) okumuyor
  (`rg` 0 eşleşme) ⇒ etiket/işaret olarak ÇİZİLMEZ. Not: `d_katman.js:593` yalnız `kur:`
  süzer, `bit:`i süzmez — bu noktalar bir gün `window.YERLESIMLER`e girerse Osmanlı
  döneminde de çizilirler.
- 📦 Dosya `data/paket_23.js` içinde paketli (`index.html:1609-1619`) ⇒ diff indikten sonra
  **yeniden paketleme** gerekir, yoksa yayın kapısı paket tazeliğinden öter.
