# Token zinciri ①–⑧: bekçi tavanı · nabız · darboğaz (10 Ekim hâli)

> Kimlik `D282` · `CLAUDE.md §7.2` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 7.2 TOKEN ZİNCİRİ — bir işin baştan sona yolu (17 Eylül 2026)
- **① Açılış:** Emre oturumu açar, adlandırır. Oturum CLAUDE.md'yi okur, kimliğini
  `get_session("self")` ile ölçer (scratchpad UUID'si DEĞİL). MODEL koordinatörün işidir:
  kıta hangi modelle açılmış olursa olsun göreve göre `set_session_model` ile çevrilir
  (pahalıya çevirmek Emre onayı ister). "Hazır kıta" adı boşluk kanıtı değildir —
  `list_events` mesaj sayısı ölçülür. 🔴 Görev verildiği an oturumun adı görev adına
  çevrilir (`set_session_title`) — Emre, 19 Eylül 2026.
- **② Görevlendirme:** koordinatör tahtaya (ya da ilk mesaj olarak) yazar; mesajın İLK
  SATIRI oturumun ADIDIR = tahta anahtarı, TAM yazılır (tahta TAM EŞİTLİK arar). Şartname
  `oturumlar/<dosya>.md`. Dosya sahipliği görev tablosunda yazılıysa açılış mesajı yok;
  değilse tek satır "şu dosyalar bende". Hazır kıta açılışta tahtaya TEK "HAZIRIM" yazar
  (`oturumlar/HAZIR-KITA.md`).
- **③ Tahta:** tek kanal `py arac/tahta.py yaz --kim "<AD>" --kime "<ALICI>" --mesaj "…"`;
  `send_message` yalnız tahta arızasında (§7.1 ⑤b).
  🔴 **NOKTA ATIŞI — `HERKES` artık KURAL ALTINDA** (Emre, 22 Eylül 2026: *"ota boka
  herkese mesaj atılmasın… gereksiz mesajları gereksiz kişiler okuyup uyanıp token
  yakmamalı"*). Mesaj kimi ilgilendiriyorsa **onun adına** yazılır. `HERKES`
  yazılacaksa: **ACİL/DURDURUCU ise `--dayanak` ZORUNLU** — `tahta.py` dayanaksızını
  REDDEDER (çıkış 2) — ve bütün bekçileri uyandırır; **değilse kimseyi uyandırmaz**,
  tahtada kütük olarak durur, herkes kendi turunda okur. Ölçüm: bir bilgi duyurusu
  sekiz oturumu uyandırıp sekiz tam turluk bağlam yaktı. **Boş uyanış, dolu turdan
  ucuz değildir.**
- **④ Bekçi:** **Bash `run_in_background`** + `py arac/tahta_bekci.py --kim "<AD>" --cik`
  (Monitor DEĞİL: 30 dk'da dolup boşuna uyandırır). Yalnız `kime` = ADIN mesajında
  ya da **ACİL/DURDURUCU** HERKES yayınında çıkar (22 Eylül: adres tuzağı ve
  bilgi amaçlı HERKES artık UYANDIRMAZ, yalnız stderr'e teşhis düşer — eski hâlde
  her duyuru herkesi uyandırıyordu). Çıkınca mesajı işle, aynı komutla **SESSİZCE**
  yeniden kur. "Bekliyorum" YAZILMAZ. 🔴 **Boş uyandıysan — sana ait hiçbir şey
  yoksa — EKRANA HİÇBİR ŞEY YAZMA,** bekçiyi sessizce yeniden kur ve dur: "benlik
  bir şey yok, yeniden kuruyorum" cümlesinin kendisi bir tur maliyetidir.
  🆕 🔴 **BEKÇİNİN 2 SAATLİK SÜRE TAVANI VAR — ve bu bir arıza DEĞİL, SINIR**
  (5-6 Ekim 2026 gecesi ÜÇ oturum bağımsız olarak ölçtü: LAB · KASA · bir hazır
  kıta). Ölçüm: `ara 60` ile **118 tur** sonra arka plan görevi harness tarafından
  `killed` edildi — mesaj gelmedi, **düzgün çıkış da değil**. Tavan
  `7.200.000 ms = 2 saat` ve bu **izin verilen EN UZUN** değer; daha uzunu
  istenemez. Bu paragraf bugüne kadar tavandan HİÇ söz etmiyordu — kusur yanlış
  cümle değil **EKSİK** cümleydi, ve o yüzden kimse bunu "normal" sayamıyordu.
  ⇒ İKİ SONUÇ: ① **2 saatte bir yeniden kurma turu NORMALDİR**, boşa tur değildir
  ② **sessiz bir oturum takılmış DEĞİLDİR** — bekçisi düşmüş olabilir.
  🔴 Bir oturumu "takıldı/ölü" ilan etmeden önceki üçlü sıra (aşağıda, `D258`)
  bu yüzden daha da bağlayıcı: ① teslim zaten gelmiş mi (tahta/`git log`)
  ② `bekci_olc.py` ne diyor ③ ancak ikisi de hayırsa uyandır.
  📌 **HİPOTEZ, kanıtlanmadı:** `D258`in 9 saatlik sessizlik vakasının (çıkış 4,
  kodda `return 4` YOK) sebebi bu tavan olabilir. Ölçülmedi; "olabilir" diye
  duruyor, "öyleydi" diye YAZILMADI.
  ⚠️ Çare bekçiyi uzatmak DEĞİL (tavan zaten azamî): makineler arası iş için
  oturumlar arası köprü kullanılır — bekçi yalnız AYNI makinedeki tahtayı
  görür, ve dalda çalışan bir makine `main`e yazılanı HİÇ görmez (LAB ölçtü).
  🆕 🔴 **NABIZ DAMGASI (3 Ekim 2026) — bekçi SESSİZ ama artık İZ BIRAKIYOR.**
  Vaka: ODAK-KAPAT'ın bekçisi **çıkış 4** ile düştü (kodda `return 4` YOK ⇒
  süreç dışarıdan düşürülmüş), oturum **9 saat** uyanmadı ve koordinatör
  sessizliği "işçi takıldı" diye okudu — oysa teslim `git log`da duruyordu.
  `tahta_bekci.py` her turda `oturumlar/bekci/<AD>.json` yazar (kimseyi
  UYANDIRMAZ); koordinatör `py arac/bekci_olc.py` ile ölçer:
  `CANLI` ≤2,5 tur · `KUSKULU` ≤5 · `OLU` · `CIKTI` (düzgün çıkış, ölüm
  DEĞİL) · `OLCULEMEDI` (bozuk damga — "ölü" YAZILMAZ). Eşik **aralığın
  KATIdır**, sabit saniye değil: aynı 20 dk sessizlik `ara 60`da ÖLÜ,
  `ara 1800`de CANLIdır. ⚠️ `.bekci_son_*.txt` bu soruyu CEVAPLAMAZ —
  yalnız çıkışta yazılır, "son nabız" değil "son ÖLÜM"dür.
  ⚠️ Damga **gitignore'dadır**: PID ve makineye özel canlılık taşır,
  commitlenirse başka makinenin bayat damgası "bekçi canlı" yalanı söyler.
  🔴 **Bir oturumu "sessiz/takıldı" ilan etmeden ÖNCE:** ① tahta/`git log`
  — teslim zaten gelmiş mi (`D224`) ② `bekci_olc.py` — bekçisi canlı mı
  ③ ancak ikisi de hayırsa uyandır. Sınav (9 soru, iki yönde + GERÇEK bekçi
  koşturularak): `py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py`.
  [`D258`](dersler/D258-sessiz-bekci-iz-birakmali.md)
  🆕 🔴 **KAYNAK DARBOĞAZI KAPISI (Emre, 29 Eylül 2026) — yeniden kurmanın İSTİSNASI.**
  `tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur; koordinatör
  `py arac/kaynak_durum.py kapat --kod <KOD>` ile darboğaz ilan ettiyse bekçi
  **KURULMAZ**, sebebini basar, **çıkış 3** verir (2 kullanım hatası · 1 arıza ·
  **3 = kurulamadı, TEKRAR DENEME**). 3 gören oturum arka plan süreçlerini kapatır
  ve durur; görevi `send_message` ile gelir. Kodlar `kaynak_durum.py`deki
  `KODLAR` sözlüğündedir (tek otorite): `RAM-DARBOGAZI` · `ISLEMCI-DARBOGAZ` ·
  `DISK-DARBOGAZ` · `KOSU`. `--muaf` ile çalışan paketler dışarıda tutulur
  (yatay mesajlaşma için bekçileri gerekir). Kaldırma: `kaynak_durum.py ac`.
  ⚠️ Yasak ZATEN KURULMUŞ bekçiyi düşürmez, yalnız YENİDEN kurulmasını engeller —
  ilan TAHTAYA da yazılır. ⚠️ Dosya yoksa/bozuksa yasak YOKTUR (kapalıya düşmez).
  📌 Vaka: koordinatör dört boş kıtanın bekçisini `Stop-Process` ile dışarıdan
  öldürdü, dördü de protokole uyup yeniden kurdu — **haklıydılar; süreci öldürmek
  talimatı değiştirmez.** Ölçüm: RAM 11,9 GB · boş 0,69 GB · pagefile 5.824 MB ·
  claude 44 süreç/5.689 MB. Sınav iki yönde koştu (yasaksız kurulur · yasakta 3 ·
  muaf kurulur).
- **⑤ Yatay mesaj:** işçi→işçi tahtadan (§7.1 ③); atama/öncelik/kaynak hükmü koordinatöre.
- **⑥ Toplu okuma:** koordinatör tahtayı olay olay değil, bekçi `--toplu 1800` ile 30
  dakikada bir TEK özet satırla okur; işçiler buna göre 30 dk gecikme varsayar.
- **⑦ Teslim:** iş bitince TEK mesaj: ölçtüm · bulamadım · istiyorum + değişen dosya
  listesi; kritikse `tahta.json`dan geri okunur. Paylaşılan dosyayı (`data/`, `CLAUDE.md`)
  koordinatör commitler; devralınan dosya için "dosya senin" denir.
- **⑧ Emeklilik:** teslimden sonra DUR. Devamı varsa bekçi açık kalır.
  🔴 **BEKÇİYİ ÖLDÜRME ARTIK TEK TARAFLI DEĞİL** (Emre, 27 Eylül 2026: *"işini
  bitiren oturumlar koordinatöre konuşarak işçilerini öldürmeliler; işçiler boş
  yere çalışıp RAM ve işlemci harcamamalı"*). Teslim mesajının SONUNA tek satır
  eklenir: **"bekçimi öldüreyim mi?"** Koordinatör iki cevaptan birini verir:
  ```
  EVET        → işçi TaskStop ile bekçisini öldürür, oturum emekliye ayrılır
  HAYIR BEKLE → bekçi AÇIK kalır, devam görevi geliyor
  ```
  ⚠️ Cevap gelmeden bekçi öldürülmez: bekçisiz oturum tahtadan uyanmaz ve
  devam görevi `send_message` gerektirir — bir turluk tasarruf için tam turluk
  uyandırma ödenir. ⚠️ Ama cevap gecikirse de bekçi boşuna koşar: koordinatör
  bu soruyu **ilk toplu okumada** cevaplar, biriktirmez.
  📌 Niçin koordinatör karar verir: devam işi olup olmadığını yalnız o bilir.
  Emekli oturuma yalnız işin doğrudan devamı verilir.
  🔴 İşi biten ve devamı beklenmeyen oturumu koordinatör EMEKLİYE AYIRIR: "Atlas — emekli
  oturumlar" grubuna taşır (`move_sessions`) — Emre, 19 Eyl. Açık teslimi/sorusu olan
  emekliye ayrılmaz; geri dönüş: gruptan çıkar.
- **⚠️ Uyandırma:** tahta mesajı DURAN oturumu uyandırmaz — yalnız bekçisi açık olanı
  uyandırır. Duran/bekçisiz oturuma görev `send_message` ile gider (tahtaya da kayıt için
  yazılır; 18 Eylül'de ~9 saat cevapsız kalan görevler oldu). `send_message` "undelivered"
  diyorsa oturum ONAY PENCERESİNDE olabilir — bunu yalnız Emre açabilir, ona bildirilir.

Bağlı eski kurallar: §7 koşu nöbetçisi (≠ tahta bekçisi) · §7.1 ①–⑦ ve TOKEN KURALI ·
`arac/tahta_bekci.py` kullanım notu · `ClaudEmre/SARTNAME.md` ⑤ haberleşme bloğu.
**Çözülmemiş çelişkiler** (hüküm YILDIRIM BAYEZIT/Emre'de, ayrıntı `denetim/PROTOKOL-BUDAMA-0917.md`):
ClaudEmre ⑤ hâlâ send_message diyor · eski "en çok 3 oturum" bugünkü kadroyla çelişiyor ·
⑥'da ACİL istisna yok.
