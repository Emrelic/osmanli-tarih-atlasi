# SAHIPLIK-BAYAT-TABAN-R5-1009 — R5'in iki kusuru: sabit "83" ve "15 dedi, 14 bastı"

UMIT yazıcı işçi · 10 Ekim 2026 · geçici worktree `C:\atlas-umit-r5` (origin/main'den, iş bitince kaldırıldı) · commit/push YOK.
Sınav dosyası: `denetim/ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py` (yalnız bu dosya değişti).

YENİ DOSYALAR: denetim/SAHIPLIK-BAYAT-TABAN-R5-1009.diff · denetim/SAHIPLIK-BAYAT-TABAN-R5-1009.md

## Kısa hüküm
- **R5 sabitle değil, dilim kâhiniyle karşılaştırıyor.** Kâhin aynı koşuda, aynı geçici ağaçta hesaplanıyor; ölçüt
  `kapı BAYAT ∪ aracın ATLANAN'ı = kâhin`, fark 0. Sabit sayı yalnız BİLGİ olarak basılıyor.
- **Zamana dayanıklı olduğu ölçüldü.** Aynı sınav iki ayrı main'de koştu. `3429ead9`te 91 + 7 = 98 çıktı,
  `b3fd8874`te 100 + 70 = 170 çıktı; aradaki 21 commit kümeyi 98'den 170'e taşıdı. Yeni R5 iki uçta da
  **fark 0/0** ile GEÇTİ. Eski sabit-83 R5 iki uçta da KALIRDI.
- **15↔14: sınavın kodunda sayan ile basan ayrışmıyor.** Ölçtüm: kod 15 ad sayıyor ve 15 ad basıyor, 15'incisi
  **Zebîd**. Ayrışma kodun dışında, çıktının okunduğu yerde doğdu. Kodun içinde ayrı bir D225 tohumu da vardı:
  KALDI satırı `[:6]` ile 6 ad gösterip sayıyı söylemiyordu. Bu tohum kaldırıldı. Ayrıntı aşağıda.

## ① Tam liste — gerçek Z5 v1 kuru koşusu (`--yama-glob ^yer_yama_1923_1945\.js$ --taban 67e9ec9d`)

Kaynak `R5_LISTE_DOSYA`: R5 basılan listeyi UTF-8 dosyaya da yazıyor. Liste dosyası ile stdout'taki R5 bölümünü
karşılaştırdım: 196 satıra 196 satır, birebir aynı.

### origin/main `3429ead9` (görevde istenen nokta) — kapı 91 · atlanan 7 · birleşim 98 · kâhin 98 · fark 0/0
**KAPI BAYAT TABAN (91):** Aden · Akkâ · Alanya · Alaşehir · Ambohimanga · Andican · Ankara · Ardahan · Bakü · Balyabadra (Patras) · Beyrut · Bihaç (Bihać) · Bosna Brod'u (Bosanski Brod) · Bosna Dubiçası (Bosanska Dubica) · Bosna Novi'si (Bosanski Novi) · Budin · Cabalpûr (Jabalpur) · Cetin (Cetingrad) · Coweta (Creek/Mvskoke Konfederasyonu — Aşağı Kasabalar merkezi) · Derne · Diyarbakır · Draç · Drežnik (Drežnik Grad) · Eperjes (Prešov) · Erciş · Ereş · Etowah · Eğri · Fülek (Fiľakovo) · Gence · Hama · Harput (Elazığ) · Hemedan · Herseknovi (Herceg Novi) · Hoima (Bunyoro) · Hokand · Hucend · Jasenovaç (Jasenovac) · Kabala · Kahnawake · Kanije · Karahisâr-ı Şarkî (Şebinkarahisar) · Kars · Kassa (Košice) · Kirman · Korfu · Kostayniçe (Kostajnica) · Kotabato (Magindanao) · Krupa (Bosanska Krupa) · Kuba · Köprülü (Veles) · Kızıl Kızılderili Gölü (Beothuk) · Luang Prabang · Luristan · Mahmudâbâd · Malta · Masindi · Muang Sing · Nitra (Nyitra) · Ocmulgee · Ossossané · Oş · Peşte · Plaisance (Placentia) · Reşt · Sainte-Marie-au-pays-des-Hurons · Salyan · Sarıkamış · Savannakhet · Sayda · Sisak · Taşkent · Toamasina (Tamatave) · Tokaj · Trablusşam · Tsiroanomandidy · Udbina · Uyvar · Vientiane · Werowocomoco (Powhatan Konfederasyonu Başkenti) · Xieng Khouang · Yanıkkale (Győr) · Yendi (Dagbon) · Yezd · Zagros içi · Zebîd · Zencan · Zigetvar · Şamahı · Şiraz · Şâbüran

**ATLANAN (7, hepsi KAPSAM DARALDI):** Arpaçay (Akyaka) · Ayn el-Ğazâle (Bomba) · Beri · Digor · Iğdır · Küçükperveli · Tulmeyse

**83'ün dışında kalan 15** (bu gecenin inişleriyle bayatlayanlar; koordinatörün listesi doğru, bir eksikle):
Aden · Akkâ · Alanya · Alaşehir · Balyabadra (Patras) · Beyrut · Diyarbakır · Draç · Hama · Korfu · Köprülü (Veles) ·
Malta · Sayda · Trablusşam · **Zebîd**. 76 + 15 = 91 ✓ · 91 + 7 = 98 ✓.

### origin/main `b3fd8874` (21 commit sonra, sınav yeniden koşturuldu) — kapı 100 · atlanan 70 · birleşim 170 · kâhin 170 · fark 0/0
- Kapıya giren 13 kayıt: Bayburt · Bitlis · Elbistan · Erzincan · Erzurum · Kayseri · Kemah · Kırşehir · Sinop · Sivas ·
  Tokat · Van · Çankırı. Kapıdan ATLANAN'a geçen 4 kayıt: Gence · Hucend · Kars · Taşkent. Kapı 91 + 13 − 4 = 100.
- ATLANAN'a 63 kayıt eklendi (7 → 70): İstanbul, Konya, Halep, Bağdat, Tebriz, Semerkant vb. Tam liste sınavın
  R5 çıktısında basılıyor.
- Kâhin 98 → 170 (+72). Eski 98'in hepsi 170'in içinde kaldı. Yeni gelen 72 kayıt, kapıya giren 13 ile
  ATLANAN'a giren 63'ün birleşiminden (76) eski kâhinde zaten bulunanlar çıkarılınca kalan kümeye birebir eşit.
  Çıkarılan 4 kayıt Gence, Hucend, Kars ve Taşkent; artış 13 + 63 − 4 = 72. Bunu küme olarak hesapladım.
- ⇒ Sabit bir sayı bir gecede iki kez bayatlardı (83 → 98 → 170). Kâhinle karşılaştırma iki noktada da fark 0 verdi.
- ⚠️ ATLANAN'daki 7 → 70 sıçraması bu işin kapsamı dışında. Sebebini ölçmedim; R5 bu sıçramayı kusur saymıyor,
  çünkü kâhin de aynı kayıtları görüyor.

## ② 15↔14 teşhisi — ölçüldü
| soru | ölçüm |
|---|---|
| Eski R5'te hangi küme sayılıyor, hangisi basılıyor? | İkisi de `ya = sorted(bay83 − Z5_83)`. Sayı `len(ya)`, basılan `", ".join(ya)`: **tek liste**. |
| Kodun basılan satırı (UMIT, stdout → UTF-8 dosya) | `yalnız araçta (15): Aden, …, Trablusşam, Zebîd`: **15 ad**. |
| Aynı satır PowerShell 5.1 yakalamasıyla, `[Console]::OutputEncoding` cp857 / cp1254 / 65001 | Üçünde de 15 parça. cp857 ve cp1254'te ASCII dışı adlar bozuk görünüyor (`Zeb├«d`, `ZebÃ®d`), yani **ad düşmüyor, bozuluyor**. Bozuk çıktıda `-contains 'Zebîd'` ve `'Trablusşam'` False dönüyor. |
| Eksik olan ad hangisi? | Koordinatörün commit mesajındaki 14 ad = 15 − **Zebîd**. Zebîd, `sorted` sırasında **satırın son adı**. |
| Kodda ayrı bir D225 tohumu var mı? | **Evet.** KALDI satırı `sorted(bay83 − Z5_83)[:6]` ile 6 ad basıyor ve "6/15" demiyor. Okuyanın gördüğü liste sayıdan kısa kalıyor. |

**Teşhis:** Sınavın kodunda sayan ile basan aynı listeden türüyor. UMIT'te 15 ad basılıyor. EMRELIC'teki 14'ün tek
açıklaması kodun dışında: satır sonundan kırpma ya da okuma. Koordinatör "çıktı kırpıldı" diyor, ve eksik ad tam
olarak satırın son adı. EMRELIC'in konsolunu ölçemedim (aşağıda "bulamadım").

**Konsol kod sayfası adayı (dördüncü aday):** UMIT'te kod sayfası adı **düşürmüyor, bozuyor**. Ama bozulmuş ad
grep / `-contains` ile aranırsa bulunamaz, ve ad elle sayılırken düşmüş gibi görünebilir. Liste nesnesi üzerindeki
assert bunu yakalayamaz; bu yüzden ayrı bir soru eklendi (R5d, aşağıda).

## ③ Yeni R5 tasarımı ve gerekçesi
1. **Ölçüt:** `(kapı BAYAT ∪ ATLANAN) − belirsiz = dilim kâhini`, fark 0. Kapı ile kâhin aynı koşuda, aynı geçici
   worktree'de (`W`, HEAD'den) hesaplanır. Veri ne zaman değişirse değişsin iki taraf aynı fotoğrafa bakar. Sabit
   bir sayı yazıldığı anın fotoğrafıdır (§3.4-⓪) ve her inişte bayatlar.
2. **Kâhin bağımsızdır (koordinatör şartı ⓐ).**
   - *Kullandığı kod:* sınavın kendi `KAHIN_JS`'i. Node, her girdi dosyasını ve yamayı `eval` eder (JS'in kendi
     okuyuşu), Python `dilim()` / `dilim_kahini()` karşılaştırır. Kâhin kayıt kayıt yalnız 1281-1923 dilimine
     bakar: `f < 1923-10-29` olan dönemler, `t`'si 1923-10-29'a kırpılarak, sıradan bağımsız küme olarak.
     Kapsadığı alanlar `s`, `isg`, `v`.
   - *Paylaşmadığı:* `_sahiplik_uygula.py` ve `_bayat_yama_kapi.py`'den hiçbir işlev import edilmiyor. Python veri
     ayrıştırıcısı (`girdi.py`) kullanılmıyor. **Taban rev'i hiç okunmuyor:** kapı "taban ≠ bugün" sorusunu
     soruyor, kâhin "yama 1923 öncesini değiştiriyor mu" sorusunu soruyor. Mekanizmalar farklı olduğu için
     aynı hatayı ikisinin birden yapması beklenmez.
   - *Paylaştığı (beyan):* ① okunacak dosya kümesi (`girdi_listesi.GIRDI_DOSYALARI`) ve yama dosyası. Kapının
     evreni ile aynı olması gerekiyor, aksi hâlde iki taraf farklı evreni ölçer. ② `kanon()` json dizgesi
     (sınavın kendi işlevi). ③ node okuyucusu R2'nin kâhiniyle ortak, ama karşılaştırma mantığı farklı: R2 tabanı
     okuyor, R5 okumuyor.
   - Kâhinin ATLANAN'ı ayrıca bilmesi gerekmiyor. KAPSAM DARALDI kayıtları da 1923 öncesi dilimi değiştirdiği için
     kâhin onları kendiliğinden buluyor (bu yüzden ortak = 0, birleşim = kâhin).
3. **Sabit yalnız BİLGİ:** `R5_SON_OLCUM` bilinen son ölçümü tarihi, SHA'sı ve geçmişiyle birlikte basıyor
   (`b3fd8874`: 100 + 70 = 170 · `3429ead9`: 91 + 7 = 98 · `36186769`: 76 + 7 = 83). Ölçüte girmiyor.
4. **Sayan = basan (`bas_liste`):** her liste tek kaynaktan basılıyor; sayı `len(adlar)`, her ad tek satırda.
   Basılan satır sayısı ve NFC'ye göre görünür tekil ad sayısı, sayıya eşit değilse `SayimBasimAyristi` atılıyor.
   R5c bu durumu KALDI'ya çeviriyor. `[:6]` kırpması kaldırıldı: R5'in ayrıntı satırı farkı tam basıyor.
5. **Yazdırıcı katmanı (koordinatör şartı, dördüncü aday):** R5'in konsola bastığı her satır `R5_LISTE_DOSYA`
   adlı UTF-8 dosyaya da yazılıyor. Dosya geri okunuyor; satır sayısının beklenen toplamla tuttuğu ve adların
   birebir bulunduğu R5d'de soruluyor. Ölçtüm: stdout'taki R5 bölümü ile dosya 196/196 satır, birebir aynı.

## ④ Sınav — iki yönde
### Hızlı kol (`--gercek-yok`, ~20 sn, `aacd6dfe` üzerinde son koşu): **24/24 GEÇTİ**
- Ö1 eşit kümeler → geçer.
- Ö2 kâhinden `Zebîd` çıkarıldı → KALDI, `Zebîd` ADIYLA basıldı.
- Ö3 kâhine fazla `Sayda` eklendi → KALDI, ADIYLA basıldı.
- Ö4 15 ad → 15 satır, assert sessiz kaldı.
- Ö5 NFC ile NFD ikiz `Zebîd` → assert ÖTTÜ: `sayı 15 · basılan satır 15 · görünür tekil 14` (birebir "15 dedi, ekranda 14").
- Ö6 satır sonu içeren ad → assert ÖTTÜ: `sayı 15 · basılan satır 16`.
- T1–T8 eskisi gibi geçti. SON iki checkout: o koşuda geçti. Daha önceki bir hızlı koşuda `C:\atlas-umit` sorusu
  KALDI; sebep, koşu sırasında başka bir işçinin `denetim/` altına yazmasıydı. Sınavın yazdığı bir şey değildi.

### Gerçek kol (Z5 v1 kuru, tam sınav)
| main | süre | sonuç | R5 |
|---|---|---|---|
| `3429ead9` (eski R5, karşılaştırma için) | 62 dk | 24/27 | **KALDI** (91 ⊄ 83) · SON ×2 KALDI (zemin) |
| `3429ead9` (yeni R5) | 37 dk | 34/36 | R5 ✓ fark 0/0 (91 + 7 = 98) · R5b ✓ (`Aden` çıkarıldı → KALDI, ADIYLA) · R5c ✓ 91/7/98 · R5d ✓ 196/196 · SON ×2 KALDI (zemin) |
| `b3fd8874` (yeni R5) | 24 dk | 35/36 | R5 ✓ fark 0/0 (100 + 70 = 170) · R5b ✓ · R5c ✓ 100/70/170 · R5d ✓ 340/340 · R2 ✓ · SON `C:\atlas` ✓ · SON `C:\atlas-umit` KALDI (zemin) |

- **SON KALDI'ların hepsi ölçüm zemininden.** Koşu sırasında başka oturumlar bu checkout'lara yazdı, örneğin
  `denetim/KAYNAK-PENCERE-1009.diff` ve `NEGATIF-YIL-1010-A.md`; ikisi de benim değil. `C:\atlas`'ın değişikliği
  koşu sırasında temizlendi. Koordinatörün 27/29'daki sınıflamasıyla aynı.
- R1–R3 ve R6 hiçbir koşuda değişmedi. R4 atlandı, çünkü origin/main kapıyı zaten taşıyor.

## Ölçtüm · bulamadım · istiyorum
- **Ölçtüm:** ① Tam liste: `3429ead9`'da 91 + 7, `b3fd8874`'te 100 + 70, ikisi de adıyla. ② 15. ad **Zebîd**; kod
  15 sayıp 15 basıyor; cp857 ve cp1254 adı düşürmüyor, bozuyor. ③ Yeni R5 iki main'de fark 0. Yapay farkla
  (Ö2, Ö3, R5b) R5 KALIYOR ve farkı ADIYLA basıyor. Sayan/basan sabotajıyla (Ö5, Ö6) assert ötüyor.
  ④ `.diff` LF, BOM yok, CR 0, 251 satır. Temiz `aacd6dfe` worktree'de `git apply --check` ✓ ve uygulanan
  dosya benimkiyle aynı (`3429ead9` ile `b3fd8874` arasında sınav dosyası değişmemişti).
- **Bulamadım:** EMRELIC'te 14'ü üreten okuma/kırpma adımı. O konsolu ve o oturumun ham çıktısını göremiyorum;
  "satır sonundan kırpma" çıkarımdır, ölçüm değil. Bildiğim şu kadar: eksik ad satırın son adı, ve bu kod UMIT'te
  15'in tamamını basıyor. ATLANAN'ın 7 → 70 sıçramasının sebebini ölçmedim (kapsam dışı).
- **İstiyorum:** ① Diff'in main'e alınması (koordinatör). ② İsterseniz EMRELIC'te `R5_LISTE_DOSYA=<yol>` ile bir koşu:
  dosya ile konsol karşılaştırılınca 14'ün EMRELIC'te nerede doğduğu kesinleşir. ③ ATLANAN 7 → 70 sıçraması
  (63 yeni KAPSAM DARALDI kaydı, İstanbul ve Konya dahil) ayrı bir soru olarak açılsın. Z5 v1 karantinada olduğu
  için operasyon riski yok, ama kapının "atlanan" kovası bu kadar hızlı büyüyorsa nedenini bilmek gerekir.
