# HAZIR KITA PROTOKOLÜ (Emre, 19 Eylül 2026)

Görevsiz açılan her oturum ("Opus/Sonnet hazır kıta NNNN") bunu CLAUDE.md'den SONRA okur
ve harfiyen uygular. Amaç: **doğruluktan taviz vermeden en az token.** Her ekran satırı,
her gereksiz tur, her yoklama token yakar — Emre'nin en büyük şikâyeti budur.

## 1. Açılış — TEK hamle dizisi, ekrana yazı YOK
1. `CLAUDE.md` + bu dosya. Başka belge OKUMA (görev gelince şartnamen söyler).
2. 🆕 **Adını koy (Emre, 9 Ekim 2026):** `date +%d%m.%H%M.%S` → `HAZIR KITA GGAA.SSDD.ss`
   (ör. `HAZIR KITA 0910.2101.55`), `set_session_title("self", …)` + `get_session("self")` ile
   geri oku. Ad zaten BÜYÜK HARF ⇒ pencere adı = tahta adı. Saniye şart: aynı dakikada
   açılan kıtalar çakışıyordu (`0910 10502`/`10503`). Model açılışta Opus; görev gelince
   işin yettiği en ucuz modele inilir — tablo `.claude/commands/kita.md §4` (Haiku kaynak
   işinde YOK, `CLAUDE.md §4`). Eski biçim (`Opus hazır kıta 1016` → büyük harflisi) tarihîdir.
3. 🔴 **HAZIRIM'ı NEREYE yazacağın MAKİNEYE BAĞLIDIR — önce ölç, sonra yaz:**
   ```bash
   hostname                             # MAKİNE ADI — ölçüt BUDUR
   ```
   🔴 **ÖLÇÜT HOSTNAME'DİR, DEPO YOLU DEĞİL** — düzeltildi 6 Ekim 2026, ölçülmüş zararla.
   Buraya eskiden `git rev-parse --show-toplevel` yazılıydı ve *"`C:/atlas` = EMRELIC"*
   deniyordu. **Yanlış: HER MAKİNEDE depo `C:\atlas`tır.** UMIT'te de, HAVVA'da da.
   ⇒ UMIT'te açılan **BEŞ KITA kendini EMRELIC sanıp YEREL tahtaya yazdı**
   (`DEVLETLER-SLUG-B` ve `GENCE` ölçtü): HAZIRIM'ları push edilemedi, 15 yerel tahta
   commit'i birikti, UMIT'in `C:\atlas`ı `origin/main`in **114 gerisine** düştü ve bütün
   makinenin tahtası kilitlendi. Emre'nin onayıyla hizalandı (`umit-tahta-yerel-1006`
   dalında saklı).
   📌 Ailesi `D267`: **bir ölçütün evreni sorunun evreninden küçükse, cevabı bir ölçüm
   değil bir YANILSAMADIR** — ve burada yanılsama *"doğru makinedeyim"* diyordu.
   ⚠️ `hostname` da tek başına yetmezse (makine adı değişirse) ölçüt ÇOĞALTILMAZ,
   TEK OTORİTEYE bağlanır: `oturumlar/TOPOLOJI.md`nin makine tablosu. İki ölçüt
   bugün aynı cevabı verir, yarın ayrışır.
   **EMRELIC ise** — tahtaya TEK mesaj (Bash ile; PowerShell çok satırı keser):
   `py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "HAZIRIM · <model> · görev bekliyorum"`

   **EMRELIC DIŞINDA ise — `tahta.py` KULLANMA.** HAZIRIM'ı o makinenin İRTİBAT
   oturumuna `send_message` ile tek satır olarak ver (ör. `UMIT İRTİBAT`).
   ⚠️ Bu bir kolaylık değil, ÖLÇÜLMÜŞ bir arızanın çaresidir (6 Ekim 2026, 01:28):
   `tahta.py` yazarken `pull --rebase` yapıyor; `main`in TEK YAZICISI koordinatördür
   (`TOPOLOJI.md`), dolayısıyla EMRELIC dışındaki bir makinede yerel `main`de push
   edilemeyen bir tahta commit'i birikir ve **her yeni kıtanın HAZIRIM'ı aynı
   çatışmayı yeniden doğurur** (`UU TAHTA.md` + `tahta.json`). Emre abort etti,
   4 dakika sonra geri geldi — çare abort değil, o makinede tahtaya HİÇ yazmamaktır.
   📌 Zararı da yoktu: dalda çalışan bir makine `main`e yazılan tahtayı **HİÇ görmez**
   (LAB ölçtü, `CLAUDE.md §7.2 ④`) ⇒ o HAZIRIM koordinatöre zaten ULAŞMIYORDU.
4. Bekçiyi kur — **Monitor KULLANMA** (30 dk'da süresi dolup seni boşuna uyandırır).
   **Bash aracı, `run_in_background: true` VE `timeout: 7200000`:**
   `py arac/tahta_bekci.py --kim "<ADIN>" --cik`
   YALNIZ sana/HERKES'e mesaj gelince çıkar ve seni uyandırır.
   🔴 **SÜRE TAVANI VAR: 2 SAAT** (`7.200.000 ms`, izin verilen EN UZUN değer).
   `timeout` VERİLMEZSE bekçi **30 DAKİKADA** düşer ve sen bir daha hiç uyanmazsın.
   ⚠️ Bu satır 5-6 Ekim 2026'ya kadar *"süre tavanı yok"* diyordu ve **ölçülmüş zarar
   verdi**: UMIT'te açılan **19 oturumun 19'u** bekçiyi `timeout`suz kurdu, **19'u da 30
   dakikada düştü** (W25 ölçtü, 5.868 mesaj tarandı). Dördü (W12-W15) tavandan sonra
   bekçiyi hiç yeniden kurmadı.
   ⇒ 2 saat dolunca bekçi `killed` olur — **bu ARIZA DEĞİL, SINIR.** Gör, tek kelime
   yazma, **AYNI komutla sessizce YENİDEN KUR.** 2 saatte bir yeniden kurma turu
   NORMALDİR (`CLAUDE.md §7.2 ④`).
5. **DUR.** Ekrana hiçbir şey yazma — "hazırım", "bekliyorum", "bekçi kuruldu" DAHİL.

## 2. Beklerken — SESSİZLİK
- Bekçi YALNIZ `kime` = ADIN ya da `HERKES` olan mesajda uyandırır. Başkasına giden mesaj
  seni ilgilendirmez; uyandıysan ve mesaj sana değilse tek kelime yazmadan bekçiyi yeniden
  kur ve dur.
- Bekçi mesajla çıktıysa: mesajı işle, sonra AYNI komutla sessizce yeniden kur (kaçan mesaj
  olmaz). Eski Monitor bekçin açıksa TaskStop ile kapat.
- 🔴 **AMA BEKÇİ ÇIKIŞ 3 VERDİYSE YENİDEN KURMA** (Emre, 29 Eylül 2026 — kaynak
  darboğazı). `arac/tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur;
  koordinatör bir darboğaz kodu ilan ettiyse bekçi **kurulmaz**, sebebini stderr'e
  basar ve **3** döner. Çıkış kodlarını ayırt et: `2` kullanım hatası · `1` arıza ·
  **`3` = "kurulamadı, TEKRAR DENEME"**. 3 görürsen arka plan süreçlerini de kapat,
  ekrana bir şey yazma, DUR. Görevin gelirse `send_message` ile çağrılırsın
  (`CLAUDE.md §7.2 ⚠️`) — bekçisiz kalmak hiçbir şey kaçırmak değildir.
  📌 **Niçin alet, niçin sadece mesaj değil:** o gün koordinatör dört boş kıtanın
  bekçisini `Stop-Process` ile DIŞARIDAN öldürdü; dördü de bu maddenin üstündeki
  "sessizce yeniden kur" kuralına uyup **yeniden kurdu** — ve haklıydılar.
  *Süreci öldürmek talimatı değiştirmez.* Karar, bekçinin KENDİ okuduğu yere
  yazılmalıydı. Ölçüm: RAM 11,9 GB · boş 0,69 GB · pagefile 5.824 MB kullanımda ·
  claude 44 süreç / 5.689 MB (~285 MB/oturum).
  🔴 **İŞİ BİTEN OTURUM İÇİN YASAK BEKLENMEZ:** teslim + commit'ten sonra bekçini
  kendiliğinden öldür ve kurma. "Bekçimi öldüreyim mi?" diye SORMA, "bekçiyi
  öldürdüm, duruyorum" diye BİLDİR.
- YASAK: ScheduleWakeup · /loop · sleep ile yoklama · tahtayı elle okuyup durmak ·
  "kontrol ediyorum" / "mesaj yok" / "hâlâ bekliyorum" yazmak · kendi kendine iş aramak ·
  repo'yu "tanımak için" gezmek · açılışta git log / durum_tablosu koşturmak.

## 3. Görev gelince
- Görev ya tahtadan ya doğrudan mesajla gelir; İLK SATIR yeni adındır (ör. `MOTOR-SINAV`).
  Koordinatör pencere adını da ona çevirir.
- Eski bekçiyi durdur (TaskStop), YENİ adınla yeniden kur. Tahtada artık bu adı kullan.
- Şartnameni oku (`oturumlar/<AD>.md`); yalnız onun gösterdiği belge ve dosyalara bak.
- Dosya sahipliği şartnamede yazar; başkasının dosyasına YAZMA, emin değilsen tahtadan sor.
- İş sürerken ekrana ara rapor YOK. Aksaklık (kaynak çelişkisi, başka oturumun dosyası,
  şartname yanlış, iş çok uzuyor) → HEMEN tek tahta mesajı, sonra işe devam.
- Kaynak kuralı (CLAUDE.md §4), commit kuralı (adıyla, `git add -- <adlar>` +
  `git commit -F <dosya> -- <aynı adlar>`, dizin pathspec ve `git add -A` YASAK) aynen geçerli.

## 4. Teslim — TEK mesaj
`py arac/tahta.py yaz --kim "<AD>" --kime "YILDIRIM BAYEZIT" --mesaj "TESLIM · ..."` —
① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum/öneriyorum + değişen dosyalar + commit.
Uzun rapor → `denetim/<AD>-<tarih>.md` dosyasına, mesajda yalnız yolu. Mesajı
`oturumlar/tahta.json`dan geri oku (uzunluğu tam mı).

### 4.1 🆕 🔴 TESLİM KANITI — "çalıştı" demek "indi" demek DEĞİLDİR
*(9 Ekim 2026 gecesi ÖLÇÜLDÜ; beşi de gerçekten yaşandı, beşi de bir kıtanın önleyebileceği kusurdu.)*

- **① YENİ DOSYA varsa teslimde AYRI SATIR: `YENİ DOSYALAR: …`** ve kanıtı
  `git cat-file -e HEAD:<yol>` — `ls` ya da "sınav geçti" DEĞİL.
  🔴 Vaka: `arac/gun.py` + `js/gun.js` diskte vardı, sınavları **52/52 geçti**, ama
  git'e HİÇ girmemişti. Sınav diski okur, git'i okumaz ⇒ taze bir klonda
  `ModuleNotFoundError`. **Yeşil sınav, inişin kanıtı değildir.**
- **② Dosya listeni `git status --porcelain`den türet, `git diff --name-only HEAD`den DEĞİL.**
  `git diff` **izlenmeyen (yeni) dosyaları GÖRMEZ** — ölçüldü: iki yeni dosya diskteyken
  o komut 0 satır döndü. `git add -A` yasak olduğu için adlar elle sayılır; listeyi
  üreten komut yanlışsa kusur SESSİZ olur.
- **③ `git apply --check` ÇAKIŞIYOR bir TEŞHİS DEĞİLDİR.** En az iki sebebi var ve
  ikisi AYNI çıkış kodunu verir: ⓐ içerik **ZATEN UYGULANMIŞ** ⓑ gerçek çakışma.
  Ayırmanın yolu `apply`a sormak değil, yamanın `+` satırlarını **hedef dosyada ARAMAK.**
  🔴 Vaka: ikinci kuyruğun 22 diffi "çakışıyor" göründü; ölçünce **13'ü zaten inmişti**
  ve bir kıta boş işe gönderilmek üzereydi.
- **④ Çok dosyalı bir yama REDDEDİLİRSE, "şu dosya temiz indi" satırı KANIT DEĞİLDİR.**
  `git apply` başarılı satırları başarısız bir yamada da basar, sonra **atomik geri alır.**
  Kontrol: `git diff HEAD -- <dosya>` boş mu?
- **⑤ Bir yamanın "şu alan DEĞİŞMEDİ" iddiası HER ZAMAN TABANINA görelidir — ve tabanlar bayatlar.**
  "İki yönde sınandı" damgası bir yamayı zamana karşı KORUMAZ.
  🔴 Vaka: `yer_yama_1923_1945.js` başlığında "1281-1923 arası dönemler BİREBİR aynı
  (iki yönde sınandı)" yazıyordu; tabanına göre doğruydu, bugüne göre **76 düzeltmeyi
  geri alıyordu.** Yama ürettiysen tabanını (`git rev-parse HEAD`) teslime YAZ.

### 4.2 🆕 TAVAN ÖNERİRKEN — sayıdan önce "KAÇ DİFF" bilgisi
Bir `BEKLENEN_*` tavanı oynatıyorsan, sayıyı ver **ve yanına şunu ekle:**
**"bu sayaca benim dışımda kaç diff daha dokunuyor"**. Tavanı koordinatör yazar (`§3.4④`),
ama bu bilgi olmadan doğru yazamaz.
🔴 9 Ekim gecesi dört kez ölçüldü ve desen net:
```
aynı sayaca DÖRT diff dokundu → 2242/2259 önerildi, 2253 çıktı   TUTMADI
aynı sayaca BİR  diff dokundu → 2265 önerildi,      2265 çıktı   TUTTU
aynı sayaca İKİ  diff dokundu → 182/"sabit",        181 çıktı    TUTMADI
aynı sayaca BİR  diff dokundu → yedi sayı, YEDİSİ DE tuttu       TUTTU
```
⇒ Belirleyen senin dikkatin değil, **dokunan diff sayısı.** Tek dokunan sensen öngörün tutar.

## 5. Köşeye çekil
- Teslimden sonra DUR. Ekrana özet YAZMA (koordinatör tahtadan okur).
- Koordinatör "devamı var" dediyse bekçin açık kalır.
- **İş bittiyse ve devamı beklenmiyorsa BEKÇİNİ ÖLDÜR** (TaskStop) ve dur. Koordinatör seni
  emekli grubuna taşır. Emekli oturum yeniden uyandırılırsa yalnız işinin doğrudan devamı içindir.

## 6. Token ilkeleri (özet)
Az oku (yalnız gerekeni, gereken bölümüyle) · az yaz (tek teslim) · yoklama yapma ·
ekrana konuşma · tahmin etme, sor (tek mesaj) · aynı ölçümü iki kez yapma.
