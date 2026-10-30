# KOŞU · YAYIN · ÖLÇÜM — çalışan belge (yalnız gerektiğinde açılır)

CLAUDE.md'den 12 Ekim 2026 budamasında TAŞINDI (BUDAMA-1012). **Koşu (HAVVA), yayın inişi,
üretilmiş haritayı ölçme ya da motor koduna dokunma** işinde ŞART okunur; öteki oturumlar açmaz.
Metin taşındığı gün CLAUDE.md'deki hâliyle AYNIDIR; koordinatör/tahta atıfları tarihseldir
(koşucu artık HAVVA'da Emre'nin açtığı oturumdur; `main`e push `py arac/push_kapisi.py`dan geçer;
`kaynak_durum.py`/bekçi yasağı tahta düzeniyle birlikte kullanımdan kalktı).

## A. Üretilmiş haritayı ölçmek (CLAUDE.md §5'ten)
- 🔴 **Çıktıda canlı olan `index.html`in `<script src=>` satırıdır**, diskteki en büyük dosya
  değil (`data/devletler_harita.js` takipsiz yerel çözümdür). Dosya VARDI ve YANLIŞTI.
  Üretilmiş haritayı ölçen iş tabanını KENDİ çözer — elle **İKİ komut, ikisi de ŞART**
  (biri eksikse D8 ölçülmez ama ölçüldü sanılır — **eksik çare, çaresizlikten kötüdür**):
  `git worktree add <yol> origin/main --detach` → `py arac/kodla.py coz-c data data/devletler_harita.js`
  + `py arac/kodla.py coz-c data data/donemler.js donem`. Alet `arac/olcum_agaci.py hazirla|kaldir`
  `main`e İNMEDEN yok sayılır (`coz_c` damgayı doğrulamaz, alet doğrular). Çözme ölçüm
  hazırlığıdır, yayın değil. Rapora **taban commit + boyut + sha256** yazılır.
- 🔴 **Koşu logu başka makinededir:** koşular ayrı worktree'de koşar ⇒ ana checkout'un
  `uretim_canli.log`u tanım gereği o koşunun logu DEĞİLDİR (tek belirti mtime). Log **dizin
  adıyla** anılır; koşu durumu koşucunun ölçümünden okunur.

## B. Makine ve süreç (CLAUDE.md §7'den)
- 🔴 **Bu makinede ölçüldü:** `Stop-Process -Force` → çıkış **127**, `taskkill /F` · `TaskStop`
  → **1** ⇒ 127 burada "dışarıdan sonlandırıldı" da demek (ayırt edici: çıktı başlamış mı).
  **Genel bilgi, bu makinedeki ölçümün yerine geçmez.**
- **Koşu nöbetçisi** 60 dk'da bir canlılık basar; sessizlik "nöbetçi ölmüş olabilir"dir
  (tahta bekçisi mesaj yoksa sessizdir — §7.2). [`D222`](dersler/D222-nobetci-altyapiyla-olur.md)

## C. Komutlar, koşu bayrakları, yayın inişi (CLAUDE.md §9 tam metin)
## 9. Komutlar ([`D283`](dersler/D283-komutlar-kosu-bayraklari-1010.md))
```bash
py arac/uret_petek.py     # harita üretimi — TAM İNŞA 7-8 SAAT · koşucu HAVVA (§7)
py arac/uret_devirler.py  # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py       # 🔴 VERİ DEĞİŞTİYSE ŞART
py arac/denetle.py        # değişmezler · çıkış 0/1/2 (§3)
py arac/odak_olc.py       # kronoloji maddesinin KAMERA ODAĞI — kapıya BAĞLI
py arac/denetle_yayin.py  # yayın kapısı
py arac/surum_damgala.py  # index.html'deki ?v=rNN damgasını yükselt
```
- 🔴 **KOŞU BAYRAKLARI ZORUNLU** (yoksa koşu çıkış 0 ile "biter" ama EKSİKTİR): `MOTOR_YURUYUS=1
  MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=0 MOTOR_SUREC_ISCI=2
  MOTOR_DEVAM=1 MOTOR_SINIR_KISIT=1 MOTOR_COL_GIRINTI_KAPALI=1`
  🆕 KOŞU 26 (15 Ekim 2026, Emre): `MOTOR_SINIR_KISIT=1` — D/E/F egemenlik hattı gövdenin kesin kısıtı (işgal/fiilî hat HARİÇ, Osmanlı taraflı hatlar bu sürümde HARİÇ); `MOTOR_COL_GIRINTI_KAPALI=1` — M-BC C (çöl girintisi) kapalı, Libya binmesi arttığı için.
  ⏳ BEKLEYEN YAMA (17 Ekim 2026, Emre onayı — not #7): `denetim/MOTOR-YAKA-KILIDI-1017.diff` bir sonraki TAM İNŞADA uygulanır (`git apply`, temiz sınandı) ve bayrağa `MOTOR_YAKA_KILIDI=1` eklenir. Örtü aşamasında yaslanan hattın öte yakasına düşen nokta, ham hücresi o yüzün sahibi değilse yüzü almaz (Zimnicea'nın Tuna güneyindeki ~700 km² üçgeni). Logda `🔒 YAKA KİLİDİ` satırı düşen noktaları sayar. Uygulanınca bu satır bayrak listesine taşınır.
  🏺 MÖ KATMANI (MO-MOTOR-1020, 21 Ekim 2026) — kod `main`de, bir sonraki TAM İNŞADA devreye girer; varsayılanlar bayrak
  GEREKTİRMEZ ama `MOTOR_UFUK_BANT` **80'i içermek ZORUNDA** (bugünkü `40,56,80` yeterli; yoksa koşu SystemExit ile durur).
  Ayarlar: `MOTOR_MO_YURUYUS_GUN` (10) · `MOTOR_MO_SINIR` (`1281-01-01`, Emre 21 Ekim) ·
  `MOTOR_TARIH_BASI_MERKEZ` (`mo`; `1` = Emre 19 Ekim kuralı her tarihe — CE haritasını değiştirir, Emre'nin koşu emri ister).
  CE günleri bit bit aynı (16 gün, `denetim/ARAC-MO-MOTOR-KUTU-1020.py kiyas`). `renkler.py` tuzu değişti (KULTUR_DESEN) ⇒ tam inşa.
  🔴 DERS (21 Ekim, MO-MOTOR): tuz dosyası (`uret_petek.py`/`renkler.py`/`girdi.py`/`motor_onbellek.py`) değiştiren HER commit aynı commit'te
  `py arac/uret_altlik.py` koşturur ve `data/altlik.js`i ekler; yoksa `denetle_yayin` "GERÇEK BAYAT" verip herkesin push'unu durdurur.
  ⏳ BEKLEYEN YAMA (18 Ekim 2026, Emre onayı — not #80): `denetim/MOTOR-KISTAK-KOPRU-1018.diff` bir sonraki TAM İNŞADA uygulanır (`git apply`; tek başına ve yaka kilidiyle birlikte temiz sınandı) ve bayrağa `MOTOR_KISTAK_KOPRU=1` eklenir. Yürüyüş ızgarasında hapis kalan kıstak/burun kentinin tohumu (Aden 1 hücre, Sinop, Cádiz, Özi, Kılburun…) karadan ≤ 16 km yürünen anakara hücresine taşınır. Öngörü: logda `🌉 KISTAK KÖPRÜSÜ: 39 tohum`. Kabul ölçütleri `denetim/MOTOR-KISTAK-KOPRU-1018.md`de. Uygulanınca bu satır bayrak listesine taşınır.
  ⏳ BEKLEYEN YAMA (27 Ekim 2026, Emre "devam etsinler" — not #51): `denetim/MOTOR-KUR-DEVIR-1027.diff` bir sonraki TAM İNŞADA uygulanır (`git apply`, temiz sınandı) ve bayrağa `MOTOR_KUR_DEVIR=1` eklenir. `kur:` günü gelmemiş yerleşim, o gün yazılı sahibi olmasa da devredilir (Kalas `kur:1445`, öncesi sahipsiz ⇒ 1369–1445'te peteği İbrail'in batısını sahipsiz tutuyordu, eksklav). Dar kutuda ölçüldü: 1369/1430/1440'ta kuşak İbrail'e geçer. ⚠️ Etki küresel: 1369'da devir kümesi 4 → 1703. Kabul: tam inşada İbrail eksklavı kapanmalı, `denetle` değişmezleri (özellikle 1, 3, 8) gerilememeli; 1700 yerleşimin sonucu ayrıca incelenir. Tuz dosyası ⇒ aynı commit'te `uret_altlik.py`; **push `--tuz-onay` ve Emre'nin o değişikliğe özel onayını ister.** Uygulanınca bu satır bayrak listesine taşınır.
  ⏳ BEKLEYEN YAMA (27 Ekim 2026, Emre onayı — not #127, 12:12 "a seçeneğini seçelim" = KUR-DEVIR ile BİRLİKTE): `denetim/MOTOR-KUSATMA-BILESEN-1027.diff` bir sonraki TAM İNŞADA KUR-DEVIR yamasıyla birlikte uygulanır (`git apply`; tek başına ve KUR-DEVIR ile birlikte temiz sınandı) ve bayrağa `MOTOR_KUSATMA_BILESEN=1` eklenir. Bitişik sahipsiz ölü/doğmamış petekler `_kusatilmis`te tek tek değil BİLEŞEN olarak sınanır (birbirini kilitleyen Tiraspol+Slobozia+Dubăsari+Rîbnița 1676: tek tek %33-90, birlikte %100). Eşik ve `kasitli_bosluk:` aynen; "kime" `petek_epok`ta değişmez. Ölçüm (44 gün): her tarihte +345-454 devir, ≈2 M km²; 584 ayrı yerleşim (230 kur-tarafı = KUR-DEVIR ile çakışır, 354 bit-tarafı = yalnız bu yama). Kabul: `denetim/MOTOR-KUSATMA-BILESEN-1027.md`. Tuz dosyası ⇒ aynı commit'te `uret_altlik.py`, push `--tuz-onay`. Uygulanınca bu satır bayrak listesine taşınır.
  ⏳ BEKLEYEN YAMA (30 Ekim 2026, Emre "a evet girsin" — not #157): `denetim/MOTOR-TOHUM-YAKA-1030.diff` bir sonraki TAM İNŞADA uygulanır (`git apply`; yaka kilidi ve kıstak köprüsü kodu `main`de iken temiz sınandı) ve bayrağa `MOTOR_TOHUM_YAKA=1` eklenir. Nokta ile kendi ızgara hücresinin merkezi arasından nehir hattı geçiyorsa tohum, noktayla aynı yakadaki en yakın 8-komşu kara hücreye taşınır (Haram/Banatska Palanka: hücre merkezi Tuna'nın ~30 m güneyinde ⇒ peteği 310 km² güney yakada, nokta dışında; 16.11.1716 teslimi haritada görünmüyordu). Kıstak köprüsünden ÖNCE çalışır. Dar kutuda yayın bayraklarıyla ölçüldü: 7 petek değişir, en uzak 130 km. Öngörü: logda `🧭 TOHUM YAKASI: ~115 tohum` (motorsuz sayım). Kabul: `denetim/MOTOR-TOHUM-YAKA-1030.md`. Tuz dosyası ⇒ aynı commit'te `uret_altlik.py`, push `--tuz-onay`. Uygulanınca bu satır bayrak listesine taşınır.
  🔴 **`MOTOR_DEVAM=1` 11 Ekim 2026'da EKLENDİ ve niçin eksik olduğu bir derstir:**
  `uret_petek.py:511`de duruyor ve gerekçesi Emre'nin kendi cümlesi — *"hiçbir koşu
  bir daha çöpe gitmeyecek"* (M-4535, 18 Eylül). Gövde aşamasının devlet başına FAZ 1
  sonucunu `_petek_devam/<ön aşama izi>/` altında KALICI tutar; ölen koşu aynı
  girdi+kodla yeniden başlayınca hazır devletleri DİSKTEN okur. Gövde koşunun
  **%81'i** (KOŞU 23: 4s17dk43 / 9s15dk42). ⇒ Emre'nin o kuralını UYGULAYAN bayrak,
  kuralı taşıyan belgenin zorunlu listesinde YOKTU. **Bir kuralı yazmak, onu
  uygulayan bayrağı zorunlu kılmak değildir.** (Dizin koşu başarıyla bitince silinir;
  ön aşamalar ~1,5-3 saat yine koşar.)
- 🔴 **ÇÖL KELEPÇESİ KALDIRILDI — `MOTOR_COL_UFUK_SAAT=0`** (Emre, 10 Ekim 2026:
  *"sahrada artış olmuyor bir tavan mı koyduk burası için. tavanı kaldır, 5 7 veya
  10 günde ne kadar gidiyorsa o kadar gitsin"*). Kelepçe çöl hücrelerine **banttan
  BAĞIMSIZ sabit** bir eşik yazıyordu (`uret_petek.py:1934`
  `_YR_ESIK[_kel_M] = _COL_UFUK_SAAT * NEHIR_KM_SAAT`) ⇒ 10 günlük bantta Sahra
  7 günde kalıyordu; Orta Asya ise `FEATURECLA == "Desert"` olmadığı için
  kelepçesiz büyüyordu — Emre'nin gördüğü fark TAM BUYDU. `0` yazmak kelepçeyi
  tamamen kapatır (`_YR_KELEPCE = _COL_UFUK_SAAT > 0`) ve çöl de genel bütçeden
  geçer. 🟢 **Kod değişikliği YOK ve bu yol SINAVLI:**
  `denetim/ARAC-B-GORUNUM-KELEPCE-0072.py` YÖN 1'i zaten *"parametre verilmediğinde
  tek küresel sayı, çıktı BİREBİR değişmesin"* diye garanti ediyor.
  ⚠️ Kelepçenin bir yan kazancı vardı (`:2484` *"Sahra ve Rub'ul Hâlî'deki DOLGU
  noktaları"*); yerine ne geldiği İLK KOŞUDA ÖLÇÜLÜR — **§3.4 ⑥.**;
  🟢 **YÜRÜRLÜK — ÖLÇÜLDÜ, BEYAN DEĞİL: `KOŞU 23`** (11 Ekim 2026 03:31:33,
  makine HAVVA, taban `672acbc1`). Bayrağın motora ULAŞTIĞINI tuz söylüyor:
  `810b524268d5` → `9d8751049cf5`, log *"değişen: ORTAM"*; **ÇÖL KELEPÇESİ
  satırı çıktıda YOK**; ilk aşama ▶ YÜRÜYÜŞ 03:42:09. ⇒ KOŞU 23'ten ÖNCEKİ
  her harita `56` ile üretilmiştir ve çöl bandı o haritalarda **banttan
  bağımsızdır** — iki koşunun Sahra'sı kıyaslanırken bu sorulur.
  📌 Bu şerh niçin var: *"Commit mesajında yaşayan ayar KAYITLI değildir"*
  satırı ayarı yazıyordu ama **hangi koşudan itibaren** yazmıyordu. Belge
  *"kaldırıldı"* der, loglar iki ayrı kelepçeyle iki ayrı harita üretir ve
  ikisi de "doğru" görünür — belge ile koşu talimatı **tam bu boşluktan**
  ayrışır. Ayarın ADI yetmez, YÜRÜRLÜK GÜNÜ de yazılır.
  📌 Ve bir ölçüm kuralı, KOŞU 23'te kazanıldı: **"taban SHA farklı" tek
  başına bir uyuşmazlık DEĞİLDİR.** Sorulacak soru *"aradaki commit'ler
  motorun OKUDUĞU dosyalara dokundu mu"*dur; dokunmadıysa iki SHA aynı
  koşudur (KOŞU 23 `672acbc1`de başladı, ağaç `a4a0ef62`ydi; fark yalnız
  `denetim/` + `oturumlar/` ⇒ yeniden başlatmak 12 dakikayı yakardı).;
  motor varsayılanları bunları kapatır, zincir koymaz. Koşucu bayrakları loga basar ve teyit
  eder — **beyan yetmez, motorun gördüğü kanıtlanır:** tuz hash'i değişir ("değişen: ORTAM") ·
  işçi düzeni KOŞU 21'le aynı · ilk aşama "▶ YÜRÜYÜŞ" değilse koşu DURDURULUR · bitince AŞAMA
  BİLANÇOSU KOŞU 21'le kıyaslanır, eksik aşama ⇒ **yayına aday değil.** Çıkış 0 "iş yapıldı"
  demek değildir; kısa süre YAPILMAYAN İŞ işaretidir. **Commit mesajında yaşayan ayar KAYITLI değildir.**
- 🔴 **Zincir yayınlanan haritayı üretmez** (yayın `kodla` + `paketle` ürünü) ⇒ zincirin
  **"BAYAT TÜREV" ile durması DOĞRUDUR**; türev adımları ELLE (gözetimsiz yayın bir ürün kararı,
  Emre'de). İniş adım adım, HER ÇIKIŞ KODU okunarak:
  **`kodla.py yay <girdi.js> <dizin> <hedef>`** (DÖRT argüman, DÖRT hedef) → `coz-c`
  (İKİ dosya, §5) → **`uret_bolge_pencere.py`** → `denetle` → `renk_olc` → `paketle.py yenile` → `surum_damgala`
  → `denetle_yayin`. Hedefler (`py arac/kodla.py hedefler`): `devlet`
  (`devletler_harita.js`) · `donem` (`donemler.js`) · `govde` (`petek_govde.js`) ·
  `bant` (`ufuk_bantlari.js`).
  🆕 🔴 **`uret_bolge_pencere.py` (Emre, 17 Ekim 2026)** — bölge sınırını o günün Osmanlı
  gövdesiyle kırpar → `data/bolge_pencere.js` (~3 MB, ~5 dk). `coz-c donemler.js`den
  SONRA (gövdeyi okur, kimliğini sınar), `denetle`den ÖNCE (8b pencereyi ölçer). Atlanırsa
  site ve 8b ESKİ koşunun penceresini okur — bölge sınırı yeni gövdeyle uyuşmaz.
  Çıkış 0 tamam · 2 gövde yok/uyuşmuyor. `yay` yazdıktan sonra **DİSKTEN** gidiş-dönüş sınavı
  yapar, geçmezse yazdıklarını SİLER.
  🔴 **ARİTE HATASI KENDİNİ "KOMUT YOK" DİYE TANITIYOR** (11 Ekim 2026): `kodla.py`nin
  sevk tablosu `if a[0] == "yay" and len(a) == 4` biçiminde; eşleşmeyen her hâl düşme
  dalına gidip `__doc__` basıyor ve **çıkış 2** veriyor — ve `__doc__`un KULLANIM
  bloğu `yay`ı hiç saymıyor. ⇒ *"argüman sayısı yanlış"* ile *"böyle bir komut yok"*
  **AYNI ÇIKTIYI** veriyor, oysa **çareleri ters**: biri argümanı düzeltir, öteki
  başka alet arar. Koşucu doğru okudu, **alet yanlış söyledi.**
  🔴 **VE ZİNCİRİN EN PAHALI TUZAĞI — `coz-c` BİR DİRİLTİCİDİR:** `coz` tanım gereği
  parçadan `.js` üretir. `yay`/`kodla` BAŞARISIZ olup `coz-c` koşarsa ESKİ parçadan
  ESKİ `.js` yazılır ve **koşunun TAZE çıktısı ÜZERİNE YAZILIR**
  (`devletler_harita.js` · `donemler.js` gitignore'lu HAM çıktıdır, yedeği YOKTUR).
  11 Ekim 2026: `kodla` ve iki `coz-c` TEK KOMUT SATIRINDA koşturuldu, ilkinin kodu
  okunmadı ⇒ **9s15dk'lık bir koşunun iki çıktısı ezildi, kopyası çıkmadı.**
  ⇒ `yay` çıkış **0** VERMEDEN `coz-c` yazılmaz; **tek satırda zincirlenmez.**
  🟢 Kaybın büyüklüğünü ham `.js` değil **PARÇANIN DAMGASI** söyler: `yay` gidiş-dönüş
  sınavını geçmeden yazmaz ⇒ parça TAZEyse taze veri parçanın içindedir ve `coz-c` ile
  birebir geri gelir; parça ESKİyse kayıp gerçektir. **İlk ölçüm parça mtime'ıdır**,
  yeniden koşu kararı ondan sonra verilir.
  **Doğru olgu, küçük yazılmış ağırlık** da bir kusurdur.
- 🔴 **100 MiB GITHUB EŞİĞİ — BİR SONRAKİ KOŞUNUN PUSH'UNU REDDEDEBİLİR** (HAVVA ölçtü,
  11 Ekim 2026, KOŞU 23b push'u):
  ```
  data/ufuk_bant_parcalar.js   91,48 MB   ← TEK riskli dosya · kalan pay %8,5
  data/devlet_parcalar.js      33,23 MB   ← sıradaki en büyük, risk YOK
  ```
  GitHub bu push'u **UYARIYLA GEÇİRDİ, reddetmedi** (*"larger than recommended 50 MB"*).
  Ama 100 MiB **sert sınırdır**: bant verisi %8,5 büyürse push **REDDEDİLİR** — ve o an
  koşu BİTMİŞ, saatler harcanmış olur.
  📌 **Engeli ona çarptığın anda değil ÖNCE bilmek gerekir.** Bu gece bir koşunun iki
  çıktısı tam bu yüzden gitti: engel (`coz-c`nin diriltmesi) hiçbir yerde yazılı değildi
  ve ancak çarpınca öğrenildi. Bu eşik şimdi YAZILI; çarpmadan önce ölçülecek.
  ⇒ **KOŞUDAN ÖNCE ölçülür** (push'tan önce değil): `ls -la data/*_parcalar.js` ve 100 MiB'a
  kalan pay. Pay %10'un altındaysa koşu başlamadan çare seçilir — çareler: parça BÖLME ·
  bant hassasiyetini düşürme · Git LFS. 🔴 **LFS yayın altyapısını değiştirir ⇒ EMRE'NİN
  KARARI**, koordinatör tek başına seçmez.
  ⚠️ Ve her koşu bu dosyayı yeniden yazıyor ⇒ depo boyutu koşu başına ~91 MB büyüyor;
  bu ayrı bir borç ve ayrı ölçülür.
  🟢 **ÇARE KURULDU — PARÇA BÖLME (14 Ekim 2026, Emre: *"bant bölme işini başlat"*):**
  `kodla.py` `bant` hedefi `bol_mib: 45` taşır ⇒ `yay` base64 havuzunu ≤45 MiB'lık
  dosyalara böler: `ufuk_bant_parcalar.js` (+ `__UB_B64_PARCA=N`) · `_2.js` … `_N.js`.
  Kesim 3 baytın katında ⇒ dilimler uç uca eklenince bütünün base64'ü BİREBİR.
  `app.js` `ufukYukle` ek dilimleri sırayla yükler. Sınırın altındaki havuz bölünmez
  (çıktı bölme öncesiyle bayt bayt aynı). **İniş komutu DEĞİŞMEDİ.** Sınandı (UMIT,
  KOŞU 23 bant verisi, sha `1bae2bb476f8`): 3 dilim 45 + 45 + 1,48 MiB · DİSKTEN
  gidiş-dönüş BİREBİR · birleşik base64 == yayındaki · eksik dilim ⇒ kapı 1 · bozuk
  dilim ⇒ kapı 1 · tarayıcı 79.582 halka, yayınla aynı örnek özeti.
  🔴 **İnişte:** `ufuk_bant_parcalar_*.js` dosyaları da commit'e **adıyla** eklenir
  (`git add -- data/ufuk_bant_parcalar.js data/ufuk_bant_parcalar_2.js …`); biri
  unutulursa yayın kapısı `kodla kapi` ile durur (ek dilim YOK ⇒ ölçemedi = ihlal).
- 🔴 **Yasak betiğe değil KİPE:** `kos_ve_yayinla.py --yayinlama` KOŞTURULUR; `kosu_yayin.py`
  ve `kos_ve_yayinla.py`nin YAYIN KİPLERİ KULLANILMAZ (çıkış 1'de bile yayınlarlar). Zincir
  içindeki `denetle` `coz-c`siz koşar ⇒ kabul ölçümü sayılmaz, elle yeniden koşturulur. Yasak
  riski İÇEREN dosyaya değil riskli KİPE/YOLA yazılır.
- **Palet verinin fonksiyonudur:** veriye dokunan her koşudan sonra `renk_olc.py`.
- **Odak nöbetçisi** (27 Eyl 2026, Emre: *"denetimi yayın kapısına bağla"*): kronoloji
  maddesinin kamera odağı `denetle_yayin.py`ye BAĞLIDIR, iki ayrı sertlikle. ① **kırık
  atıf** (`yer_id`/`odak_yer`/`odak_kimlik`/`odak_kutu_kaynak` yazılmış ama çözülmüyor)
  YENİSİNE 0 tolerans — bilinen borç `denetim/ODAK-TAVAN.json` `bilinen_kusur` LİSTESİNDE
  adıyla beyanlıdır. ② **sayı tavanı** ODAKSIZ 485 · BEYANLI→yabancı 669; yalnız GERİLEME
  bloke eder, iyileşince `--tavan-yaz` ile indirilir. Çözüm `arac/odak_cozum.js`te (node,
  `suzgec.js`in GERÇEK işlevleri — Python kopyası "yanlış temiz" vermişti). Sınav
  `py denetim/ODAK-KAPI-SINAV.py` (İKİ YÖNDE). 🔴 `kapsam_genis:true` + odak yok ⇒ kamera o
  günün OSMANLI sınırına uçar (`app.js:11835`) — yabancı kronolojide odaksızlıktan KÖTÜDÜR.
- Ortamda `python` değil **`py`**. Üretim logu koşarken boş görünür (normal). 🔴 "tüm
  yerleşimlerin peteği geçerli ✓" satırı **kabul ölçütü DEĞİL** ("tüm" yanlış, hata çıkış
  koduna yansımaz) — yerine ① `denetle.py` ÇIKIŞ KODU ② AŞAMA BİLANÇOSU ③ o satır yalnız
  `d:`/`v:` kayıtları için kısmî sinyal. Yayından önce sürüm damgası yükseltilir; Pages ~40-60 sn.
- **Koşu çıktısı her zaman bayattır — yine de yayınlanır** (Emre, 17 Eylül): "YAYIN BAYAT"
  yayını durdurmaz; durduran yalnız koşunun kendi `denetle.py` ihlalidir; yayın inene kadar
  motor donuk. ⚠️ BAYATLIĞI affeder, **GERİLEMEYİ affetmez.** [`D229`](dersler/D229-komutlar-palet-bayat-yayin.md)

## D. Motor kodu dondurma (CLAUDE.md §9.1 tam metin — özü CLAUDE.md'de de durur)
## 9.1 🔴 MOTOR KODU DONDURMA — koşular arası (Emre onayı, 25 Eylül 2026)
Önbelleğin **TUZU** dört dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
`girdi.py` · `motor_onbellek.py`. Biri değişirse **bütün anahtarlar değişir** ⇒
tam yeniden inşa, elle karar yok — doğruluk sigortası; ama tuz her commit'te değişirse
önbellek hiç isabet almaz ([`D284`](dersler/D284-motor-dondurma-kapsam-1010.md)).
1. **Veri koşusu (yalnız `data/`):** motor kodu **DONDURULUR** — dört dosyaya yorum satırı
   bile yazılmaz; zorunluysa koşu ertelenir ya da ②.
2. **Tam inşa koşusu:** biriken motor yamaları (`denetim/*.diff`, `git apply --check` temiz)
   **tek seferde** girer; tuz bir kez değişir.
3. **Koşu SÜRERKEN dört dosyaya dokunulmaz** (koşu parmak izini sınar ve reddeder). Kapsam:
   donan **koşunun OKUDUĞU ağaçtır**, "hiçbir ağaç" değil — ayrı makinede tek kullanımlık
   ölçüm worktree'sinde dokunmak serbest, DÖRT şartla: ① önbellek izolasyonu ÖNCE ÖLÇÜLÜR
   (`MOTOR_ONBELLEK_DIZIN` / `<arac>/../_motor_onbellek` koşucununkiyle aynı olmamalı; ağ yolu ·
   OneDrive · paylaşılan sürücü ⇒ izin düşer) ② `uret_petek.py` koşturulmaz ③ ağaç push
   edilmez, sonunda kaldırılır ④ koşu bitene kadar tuz dosyası içeren commit `main`e girmez.
Kural yazılı olmayan kural değil, UNUTULAN kuraldır. Ayrı geometri tuzu (`MOTOR-LEGO-0925`)
yükü azaltır ama kaldırmaz: `uret_petek.py` tuzda kalmalıdır.
