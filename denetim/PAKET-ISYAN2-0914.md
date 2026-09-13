# PAKET-ISYAN2 · Erdel 1599 · Boğdan 1600 bitişi — teslim raporu

> PAKET-ISYAN2 · 14 Eylül 2026 · 1.MURAT sevki.
> Emre'nin hükmü: *"kararı sana bırakıyorum, hangi tarafa ibre daha dönük ise o şekilde uygulayalım"*.
> Yazılan: `data/isyan_tarama.js` (yalnız `pencereler` ve baş yorumu) · bu rapor. `maddeler[]` ve `kimliksiz_uye` **dokunulmadı.**
> **Commit YOK.** Kronoloji dosyalarına yazılmadı; madde önerileri §5'te.
> Tahta: açılış M-3878 · ara bulgu M-3882 (Erdel'in 1601 dilimi, bekletmeden bildirildi).

## 0 · ÖZET

| kalem | ÖNCE | SONRA | ibre |
|---|---|---|---|
| ① Erdel | `isy-erdel-1594` isyan 1594-08-28 → 1601-08-03 (tek pencere) | isyan **1594-08-28 → 1599-03-29** · *(Mart-Ekim 1599 tarama yok)* · isyan **1599-10-28 → 1600-09-18** · habsburg **1600-09-18 → 1601-02-01** · *(Şubat → 3 Ağustos 1601 tarama yok)* | 1599 = Osmanlı'ya dönüş (4 kaynak) · 1598 = hâlâ Habsburg ittifakında (2 kaynak) · 1601 = Osmanlı'ya dönüş (3 kaynak) |
| ② Boğdan | `isy-bogdan-1600` isyan 1600-05-01 → **1601-01-12** (üst sınır, gün kaynaksız) | isyan 1600-05-01 → **1600-09-01** (kesinlik ay) | Movilă'nın dönüşü = Osmanlı tâbiiyetine dönüş |
| değişmeyen | `isy-eflak-1594` · `isy-bogdan-1594` · `isy-erdel-1601-habsburg` (1601-08-03 → 1605-09-14) | aynen | — |

Pencere sayısı 5 → **7**.

- **Sevkten sapma:** sevk ikinci Erdel dilimini 1601-08-03'e kadar uzatıyordu. Üç kaynak Şubat-Ağustos 1601'i Osmanlı vasallığı olarak veriyor, o yüzden dilim orada kesildi.
- Ekim 1600 - Şubat 1601 arası ise Basta idaresi olduğu için `habsburg` türüne ayrıldı.
- Tahtaya M-3882 ile bekletmeden yazıldı. Rapor yazılana kadar itiraz gelmedi.

## 1 · KAYNAKLAR

| kısaltma | kaynak | okuma yolu |
|---|---|---|
| **HoT** | *History of Transylvania* I, ed. Köpeczi, MTA Tarih Enstitüsü, IV.3 — `mek.oszk.hu/03400/03407/html/118.html` · `119.html` | Ham HTML (iso-8859-2) indirildi, 1597-1601 paragrafları **kendim okudum** |
| **Tóth** | Tóth Sándor László, "Báthori Zsigmond politikája és harmadik lemondása (1599-1600)", *Aetas* 26/2 (2011) 85-98 — `acta.bibl.u-szeged.hu/30900/1/aetas_2011_002_085-098.pdf` | PDF metin katmanı `pypdf` ile, 60.655 karakter |
| **Papp** | Sándor Papp, "Transylvania's and Poland's Participation in the Struggles between the Moldavian Voivode Family, the Movilăs, and the Wallachian Voivode Radu Şerban", *Prace Historyczne* 148/4 (2021) 687-701, doi:10.4467/20844069PH.21.045.14021 (hakemli, açık erişim) | PDF `pypdf`, 50.873 karakter |
| **DȚM** | *Domnii Ţării Moldovei* (Chişinău: Civitas, 2005) 150-153. Moldova Bilimler Akademisi "Moldova 650" portalında yeniden basılmış (`moldova650.asm.md/node/40`) | Ham HTML okundu. WebFetch özeti yalnız yön için kullanıldı, cümleler kendim okundu |
| **TDV** | `erdel` · `bogdan` · `eflak` (200, gövde okundu) | `lehistan` 200 ama gövde 2,3 KB, ilgili metin yok |

- **TDV ölü (302):** `mihal` · `mihal-voyvoda` · `mihai` · `mihai-viteazul` · `andras-bathory` · `batori-andras` · `zamoyski` · `jan-zamoyski` · `movila-hanedani` · `ieremia`.
- **Okunmadı:**
  - Kármán G., "Báthori András ahdnáméja", *Fons* 14 (2007) 339-348. REAL-J PDF indirmesi yarıda kesildi (curl 18).
  - Kármán G., aynı konunun İngilizce sürümü, Tasin Gemil Festschrift (Cluj 2013) 435-445. academia.edu 403 döndü.
  - Bir arama motoru özeti ahidnameyi "20 Ağustos 1599" diye tarihliyordu ve padişahı yanlış adlandırıyordu (III. Murad). **Dayanak alınmadı.**
  - Rezachevici, *Cronologia critică* (2001): gövde okunmadı.
  - Milewski'nin iki *Codrul Cosminului* makalesi 1595 seferini anlatıyor, 1600'ü değil ⇒ kullanılmadı.
- Vikipedi, fandom, Rador, historia.org.pl ve okul siteleri yalnız arama sonucu olarak göründü, **dayanak alınmadı.**

## 2 · ① ERDEL — İBRE

### 2.1 · 1598 — "hâlâ Habsburg ittifakında" ⇒ BÖLÜNMEDİ
- **HoT:**
  - 23 Aralık 1597 anlaşması; Nisan 1598'de imparator komiserleri Erdel ve Partium'u devraldı.
  - 20 Ağustos 1598 Zsigmond Kolozsvár'a döndü, komiserleri gönderdi. Prag bunu tanımadı.
  - Sonbahar 1598'de Osmanlı Varad'ı kuşattı. Zsigmond'un Osmanlı ile görüşmesi **başarısız** oldu, ardından Lehistan'a yöneldi.
- **Tóth:**
  - Nisan 1598 diyetinde feragat; Maria Christierna ve üç komiser yönetti.
  - Dönen Zsigmond Türkle görüşüp saldırıyı geciktirdi, ama diyete Erdel'i **egemen ve Habsburg müttefiki** prens olarak yöneteceğini söyledi.
  - Szamosközy'ye göre "Türkle barışmak istemedi".
- ⇒ Osmanlı'ya dönüş **yok**. İsyan penceresi 1598'i kapsamaya devam ediyor.
- 🟡 **Seçenek (uygulanmadı):** Nisan → 20 Ağustos 1598 fiilen imparator komiserleri idaresi. `habsburg` türüne ayrılabilir: f 1598-04-01 (ay) · t 1598-08-20 (gün, HoT). Osmanlı karşıtlığı değişmediği için sevkin sorusu açısından fark yaratmıyor.

### 2.2 · 1599 András — "Osmanlı'ya dönüş" ⇒ BÖLÜNDÜ
Dört kaynak aynı yönde, karşı yönde kaynak bulunamadı:
- **Papp (hakemli):** 1597'den itibaren Erdel prensleri Bâbıâli hâkimiyetine dönmeye çalıştı. 1599 ve 1601'de Osmanlı otoritesini tanıyan, savaştan çekilen, bir tür tarafsızlık getiren antlaşmalar imzaladılar. İkisi de Habsburg sarayı ve müttefiki Mihai'nin askerî müdahalesiyle boşa çıktı.
- **Tóth:**
  - Zsigmond, András'ın şahsıyla Türkle anlaşma ve barış umuyordu. Mustafa ve Hüseyin çavuşlar András'a geldi.
  - András Türkle de imparatorla da pazarlık etti; Rudolf onunla görüşmeyi reddetti.
  - Rudolf Basta'ya András'ı devirme talimatı verdi.
- **HoT:** Erdel Leh nüfuz alanına geçti; Krakov ve Movilă András için İstanbul nezdinde aracılık etti. Lehistan Bâbıâli ile olağan ilişkideydi.
- **TDV `bogdan`:** Mihai, Erdel prensi Báthory'nin Osmanlılarla dostluğa başladığını görünce Erdel'i işgal etti (1599).

**Kopuş sonu = 1599-03-29.**
- HoT, Lehistan'la anlaşmayı 17 Mart 1599'a koyuyor. Bu, feragat ve devir hükmüdür, yetki değişimi değil.
- Tóth: diyet 21 Mart'a Medgyes'e çağrıldı; devir Mart sonunda, "bir rapora göre" 29 Mart'ta.
- ⇒ gün kesinliği, tek raporlu olduğu `not:`ta yazılı.
- Ahidnamenin kendi günü (Kármán) **okunmadığı için** pencereye konmadı. Pencere ahidnameye değil devre bağlandı: Osmanlı'ya yöneliş devirle başladı.

### 2.3 · Mihai'nin Erdel hâkimiyeti — Habsburg adına mı, kendi adına mı?
- **HoT (MTA):**
  - Mihai 5 Ekim 1599'da Rudolf'un rızasıyla yürüdü; 28 Ekim'de Sellenberk'te András'ın kumandanı Kornis'i yendi; 1 Kasım'da Gyulafehérvár'a girdi.
  - Diyet onu **imparator valisi** tanıdı. Ama Mihai'nin Erdel'i Prag'ın denetimine bırakmaya niyeti yoktu; bu anlaşılınca imparatorun malî desteği kesildi.
- **Tóth:** Mihai vali unvanıyla, *névleg* (adı geçen / biçimce) Rudolf adına hükmetti.
- **Papp:** Mihai "Habsburg sarayının müttefiki".
- ⇒ **Biçimce Habsburg adına, fiilen kendi hükmü.** İkisinde de Osmanlı denetimi dışında.
  - Tür `isyan` bırakıldı. `habsburg` lejantı "fiilî Habsburg idaresi" diyor; Mihai dönemi o değil.
- `isy-erdel-1599` pencere günleri:
  - f 1599-10-28 (Sellenberk; HoT ve Tóth aynı gün)
  - t 1600-09-18 (Miriszló/Mirăslău; HoT ve Tóth aynı gün)

### 2.4 · 🔴 Sevkin öngörmediği dilim — Şubat → 3 Ağustos 1601
- **HoT:** Ekim 1600 sonunda üç "millet" Rudolf'a yemin etti, Basta Sekel ayrıcalıklarını kaldırdı ⇒ **Habsburg idaresi.** Ardından Zamoyski Erdel'i yeniden Leh nüfuzuna çekmeye çalıştı, Basta savaşmadan çekildi. **"in February 1601, Zsigmond reclaimed the princely throne"**.
- **Tóth:**
  - Şubat 1601 başında Leh-Türk desteğiyle seçildi, Mart sonunda tahta çıkarıldı.
  - Savaş öncesi politikaya, **Türk vasallığının kabulüne** döndü; III. Mehmed **Ağustos 1601**'de ahidname gönderdi.
  - Özetin İngilizcesi: *"tried again to govern Transylvania as a Turkish vassal (1601)"*.
- **Papp:** 1601 antlaşması (yukarıda).
- ⇒ Bu dilim isyan penceresinden **çıkarıldı**.
  - `isy-erdel-1600-habsburg` habsburg: f 1600-09-18 (gün) → t 1601-02-01 (ay: HoT "February", Tóth "Şubat başı").
  - Şubat → 3 Ağustos 1601 **tarama yok.** Mevcut `isy-erdel-1601-habsburg` 1601-08-03'ten aynen devam ediyor.
- ⚠️ Miriszló (18 Eylül) ile yemin (Ekim sonu, gün yok) arasındaki ~6 hafta da `habsburg` sayıldı: Basta'nın ordusu ve Erdelli asiler ülkeyi tutuyordu. İstenirse f "1600-10-01" (ay) yapılabilir; o zaman 18 Eylül - 1 Ekim tarama boşluğu doğar.

## 3 · ② BOĞDAN 1600 BİTİŞİ

- **DȚM:**
  - Mihai Yaş'ta "Mayıs-Ağustos 1600" arası kaldı.
  - **4 Eylül 1600** Zamoyski ~24.000 kişilik Leh-Kazak ordusuyla Dinyester'i geçti, **6 Eylül**'de Suçava önündeydi.
  - Mihai'nin bıraktığı birlik dayanamadı, Movilă yeniden tahta çıktı. Portalın hükümdarlık başlığı: *"1600, septembrie – 1606"*.
  - **Tâbiiyet:** Movilă 1595 sonunda sultanca vasal tanındı; 1598 ahidnamesi ona ömür boyu, ardından oğluna Boğdan'ı veriyordu; "Osmanlılarca korunuyordu". Lehistan'a da yıllık ~30.000 zloti ödüyordu.
- **Tóth:** Zamoyski ve Zsigmond Ağustos 1600'de büyük orduyla Boğdan'a girip Movilă'yı yeniden tahta oturttular.
- **HoT:** Lehistan Bâbıâli ile olağan ilişkide; Movilă Leh müttefiki.
- ⇒ **Movilă'nın dönüşü Osmanlı tâbiiyetine dönüş sayıldı; pencere orada biter.**
- **Gün:** yeniden tahta çıkış günü **bulunamadı**. İki kaynak, sefer başı Ağustos (Tóth) ile Dinyester geçişi 4 Eylül (DȚM) arasına düşüyor.
  - §4 "kaba güvenli" gereği `t = 1600-09-01` (hariç), kesinlik **ay**.
  - Tarama Ağustos sonunda biter. Gerçek devir birkaç gün geç olabilir, yani tarama **az** gösterir, fazla göstermez.
- Eski `t 1601-01-12` (HoT, Mihai'nin Prag'a varışı) Boğdan'la ilgili değildi. Mihai o gün Boğdan'ı dört aydır kaybetmişti. Eski üst sınır ~4,5 ay fazla tarıyordu.
- **Çelişki ilan edilmedi.** Tóth "Ağustos" seferin çıkışını, DȚM "4 Eylül" nehir geçişini tarihliyor; aynı süreç, iki uç.

## 4 · DOĞRULAMA

```
node --check data/isyan_tarama.js                  temiz
isyan eşleşme (t birebir + b öneki, index.html     5/5  (KRON3 ölçümüyle aynı; KRON3'ün
  evreni, 6216 madde)                                    isyan_eslesme.js'i diskte yok, aynı
                                                         kuralla yeniden yazıldı: scratchpad)
pencere kimlik içi örtüşme                         0   (7 pencere)
node denetim/ARAC-ISY-OLCUM-0913.js ① şema         sorun 0 · ⑥ bağlı 5 madde ✓ · ⑤ pencere içi
                                                         seçim değişen örnek 0 · setData 9 → 13
node denetim/ARAC-A2-BAG-0913.js --hepsi           önce 551/551 · HATA 0 · UYARI 141
                                                   sonra ÇIKTI diff'i BOŞ
py arac/denetle.py                                 SONUÇ temiz · EXIT 0 (önce de 0)
```

`denetle.py` diff'i **iki satır + bir sıra kayması**:
- `2` 529 → 528 · `2s` 1332 → 1331 · `katalan` satırı bir satır yer değiştirdi.
- **Bu paketten değil:**
  - Önceki çıktı 00:10:23'te alındı; arada **eb2e435** (00:21:58, CALDIRAN·BASKALE, `yerlesimler*` 6 dosya) ve **926d349** (00:29:05, KAPSAM2, `olaylar*` 10 dosya) commit'lendi.
  - `arac/denetle.py` ve `arac/girdi.py` `isyan_tarama` adını **hiç anmıyor** (grep: 0 dosya adı eşleşmesi).
  - Yani `isyan_tarama.js` denetimin evreninde değil. Değişmez satırlarının tamamı ✓.

**Kesit ölçümü (node, gerçek `js/suzgec.js` `isyanAktif` + `isyanSecim`):**
```
1598-06-01  17  Eflak 11 · Erdel 6 (isy-erdel-1594)
1599-03-28  17  Eflak 11 · Erdel 6
1599-03-29  11  Eflak 11                       ← András devri, Erdel çıktı
1599-06-01  11  Eflak 11                       ← BEKLENEN: Erdel taranmıyor
1599-10-28  17  Eflak 11 · Erdel 6 (isy-erdel-1599)
1600-08-31  27  Eflak 11 · Boğdan 10 · Erdel 6
1600-09-01  17  Eflak 11 · Erdel 6             ← Boğdan çıktı (Movilă)
1600-09-18  17  Eflak 11 · Erdel 6 habsburg
1600-11-01  17  Eflak 11 · Erdel 6 habsburg    ← BEKLENEN: Boğdan yok, Erdel Habsburg sarısı
1601-02-01   0                                 ← Zsigmond (Osmanlı vasalı)
1601-05-01   0
1601-08-03   6  Erdel 6 habsburg (isy-erdel-1601-habsburg)
```

**Tarayıcı: 🟡 GÖZLE SINANMADI.**
- `atlas` sunucusu (8777) açıldı ve sayfa `data/isyan_tarama.js?v=r8232`'yi yükledi (`ISYAN_TARAMA.pencereler` = 7).
- `tarihAyarla(gunIdx("1599-06-01"))` ve `("1600-11-01")` çalıştı; başlık o güne geçti.
- Ama sekme gizliydi (`document.hidden: true`, D118). MapLibre stili yüklenmedi: `isyan` kaynağı, `isyan-dolgu` katmanı ve `isyan-lejant` **yok.**
- Harita çizimi ölçülemedi. Bu *"yok"* bir sonuç değil, ölçülemedi.

## 5 · KRONOLOJİ MADDE ÖNERİLERİ (yazılmadı; kronoloji işçisine)

1. **`t:"1599-03-29"` — "Erdel'de Báthory András devri: Osmanlı ile barış arayışı"**
   - *Metin:* Zsigmond Báthory, Lehistan'la vardığı anlaşma gereği Medgyes diyetinde prensliği yeğeni Kardinal András Báthory'ye devretti. Erdel Habsburg ittifakından çıkıp Leh nüfuz alanına geçti. Krakov ve Boğdan voyvodası Movilă, András'ın tanınması için İstanbul nezdinde aracılık etti; Osmanlı çavuşları Gyulafehérvár'a geldi. András Bâbıâli ile Osmanlı otoritesini tanıyan bir antlaşma yaptı, fakat Habsburg sarayı Basta'yı ve Mihai'yi ona karşı harekete geçirdi.
   - *Kaynak:* HoT I s.118 · Tóth, Aetas 26/2 (2011) · Papp, Prace Historyczne 148/4 (2021).
   - *Gün:* Tóth "bir rapora göre 29 Mart". `ic_not_gun`'a yazılmalı.
2. **`t:"1601-02-01"`, `kesinlik:"ay"` — "Zsigmond Báthory Osmanlı vasalı olarak Erdel'e döndü"**
   - *Metin:* Basta Erdel'den savaşmadan çekilince, Leh ve Osmanlı desteğini arkasına alan Zsigmond Báthory'yi Erdelli taraftarları Şubat 1601 başında yeniden prens seçti; Mart sonunda tahta çıkarıldı. Zsigmond Osmanlı vasallığını kabul etti ve III. Mehmed Ağustos 1601'de ona ahidname gönderdi. 3 Ağustos 1601'de Goroszló'da Basta ve Mihai'ye yenildi.
   - *Kaynak:* HoT I s.118 · Tóth · Papp.
3. **`t:"1600-09-01"`, `kesinlik:"ay"` — "Zamoyski Boğdan'a girdi, Ieremia Movilă yeniden voyvoda"**
   - *Metin:* Mihai'nin Mayıs 1600'de ele geçirdiği Boğdan'a Lehistan kançıleri Jan Zamoyski ordusuyla girdi; 4 Eylül'de Dinyester'i geçen ordu 6 Eylül'de Suçava önündeydi. Mihai'nin bıraktığı birlik dayanamadı, Osmanlı'nın ömür boyu tanıdığı voyvoda Ieremia Movilă tahtına döndü.
   - *Kaynak:* Domnii Ţării Moldovei (Civitas 2005) · Tóth.
   - *Gün:* yeniden tahta çıkış günü bulunamadı.

⚠️ Üç öneri de Osmanlı çevresi siyasî geçiş; hiçbiri yerleşim kırılması değil ⇒ `Değişmez 2`yi etkilemez. Bağlanırsa `ISYAN_TARAMA.maddeler[]`'e eklenmeleri seçeneği ayrı karardır, yazılmadı.

## 6 · YAN BULGULAR — KAPSAM DIŞI, DOKUNULMADI

- **Eflak penceresi (`isy-eflak-1594`, 1594-11 → 1600-11-15) içinde kaynaklı iki Osmanlı yakınlaşması var:**
  - HoT: *"in 1598, he signed a treaty of peace with the latter"*.
  - Papp: Simion Movilă **Ekim 1600 → 3 Temmuz 1601** arası Leh desteğiyle Eflak voyvodası.
  - Pencerenin sonu (15 Kasım Argeş) Simion'un başından sonra düşüyor. Mihai'nin Aralık 1597 barışı ve Ağustos 1599 sancağı yalnız popüler/Vikipedi sitelerinde göründü, **dayanak değil.**
  - Eflak penceresi Erdel'deki ölçütle yeniden sorulmalı; sahibi koordinatör.
- **Erdel 1601-1602:** HoT, Zsigmond'un 3 Ağustos 1601'den sonra Türk-Tatar yardımıyla dördüncü dönüşünü ve Basta'nın yine çekilişini yazıyor; Tóth "1602 baharına dek Basta ile mücadele" diyor. `isy-erdel-1601-habsburg` bu dilimi Habsburg sayıyor. Aynı ibre sorusu orada da var (tarih kaynakta gün/ay olarak yok) — sorulmadı, dokunulmadı.
- **Kendi kusurum:** tahta kaydını ararken paylaşılan depoda bir kez `git pull --quiet` koşturdum. Çıktı boştu; reflog'da pull kaydı yok (HEAD yalnız başka oturumların commit'leriyle ilerlemiş), `data/isyan_tarama.js` o an değişmemişti. Tekrarlanmadı.

## Aletler (scratchpad, depoya konmadı)
```
isy2/isyan_eslesme.js   maddeler[] eşleşme + kimlik içi örtüşme
isy2/kesit.js           isyanAktif/isyanSecim ile gün kesitleri
isy2/*.txt              HoT 118/119 · Tóth · Papp · TDV · DȚM ham metinleri
```
