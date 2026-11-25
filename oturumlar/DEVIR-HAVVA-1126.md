# DEVİR: HAVVA 21 KASIM → HAVVA 26 KASIM (26 Kasım 2026, 00:57)

HAVVA 26 KASIM bu makinenin koordinatörüdür. Genel koordinatör **EMRELİC 26 KASIM**dır; raporlar ona
gider. Ona `SendMessage` ile doğrudan yazılabilir, Remote Control açık. Bu oturumda Remote Control
açık olacak; açılınca EMRELİC 26 KASIM'a adıyla "hazırım" yazılır.

Önce CLAUDE.md'yi oku. Sonra bellek dizinindeki şu notları oku:
- `kosu40-basladi-1119`
- `bellek-olcumu-kosu40-sonrasi-1125`
- `havva-yalniz-arastirir-kasa-iter`
- `eczane-oncelik-kurali`

## 1. KOŞU 40 — EN ÖNEMLİ İŞ (dokunma, durdurma, bilgisayarı kapatma)

- **Klasör ve log:** `C:\atlas-kosu40`. Log: `kosu40-20261119-004922.log`; canlı log: `uretim_canli.log`.
- **Başlangıç:** 19.11.2026 00:49.
- **Süreçler:**
  - py başlatıcı PID **5448**.
  - Gerçek ana python süreci PID **6424**.
  - Başlatan oturum HAVVA 17 KASIM'dı. Ebeveyn PID 9996 artık yaşamıyor; yani koşu HİÇBİR oturuma bağlı değil. Oturum arşivlemek koşuyu öldürmez.
  - İşçi süreç 3588, 19.11'de 0xC0000005 ile çöktü. 347 devletin işi ana süreçte bitti.
- **Durum (26.11 00:57):**
  - Ⓑ dolgu aşamasında: tek çekirdek %100.
  - 6424'ün özel belleği 33,8 GB, çalışma kümesi yaklaşık 1 GB. Sayfa hatası 0/sn; Ⓑ belleğe değil işlemciye dayanıyor.
  - Commit 47,9 / 54,5 GB, boş pay 6,6 GB.
  - Canlı log en son 00:48'de yazıldı. Yazma araları 10–60 dk; bu normal.
  - Önbellek: `C:\atlas-onbellek\motor_onbellek.sqlite` (~12,8 GB). WAL yazılıyor.
- **İzleme:** Eski oturumda arka plan bekçisi var: `tasklist` döngüsü, PID 5448 bitince "KOSU40 ANA SUREC BITTI" basar. **Bu bekçi eski oturumla birlikte ölür.** Yeni oturum kendi bekçisini kursun; Bash `run_in_background`:
  ```
  while tasklist //FI "PID eq 5448" | grep -q 5448; do sleep 60; done; echo "KOSU40 ANA SUREC BITTI $(date)"
  ```
- **Risk:** boş commit payı 3 GB'ın altına inerse yeni iş açılmaz. 4 GB'ın altına inerse EMRELİC 26'ya yazılır.
- **Karar noktası: 26.11 Perşembe sabahı.** Yeniden ölç ve beklemeye mi, yeniden başlatmaya mı karar ver. Bunu Emre ile birlikte yap (BORÇ D8/D9). Kendiliğinden yeniden başlatma YOK.
- **Koşu bitince onaysız iniş** (KOSU-YAYIN.md iniş zinciri), dal `kosu40-inis-1119`:
  1. yay ×4, çıkış 0 olmalı.
  2. coz-c ×2.
  3. uret_devirler, uret_bolge_pencere, renk_olc, uret_altlik.
  4. uret_bekleyenler, paketle yenile, surum_damgala, kosu_damga.js.
  5. Dosyaları adıyla commit et.
  6. `push_kapisi --kuru --autostash --uretilen-onay "KOŞU 40"`.
  7. Logda `Ⓑ dolgu DUVAR: aşan 0 parça` satırını kontrol et.
  8. Dalı it (**main'e değil**: HAVVA'da main push yok, KASA iter). KASA ve EMRELİC 26'ya bildir.
- **Koşu 41 yalnız Emre'nin açık "başla" sözüyle.** Önce `denetim/KOSU41-ISTEK-BOSLUK-KURALI-1123.md` gösterilir.
- **Yasaklar:**
  - Motor dosyalarına dokunma: uret_petek.py, renkler.py, girdi.py, motor_onbellek.py, dolgu.py (dolgu.py kendi tuzunu taşır).
  - Sistem ayarı ve pagefile değiştirme: Emre kendisi yapar, biz yalnız ölçeriz.

## 2. AÇIK İŞLER

### 2a. Ek okuma 2. kademe: Almanya ve Fransa (EMRELİC emri, Emre "üslup uygun")

- **Dal:** `ekokuma-kademe2-1125` (son commit 5d20d65d6).
- **Yazım yöntemi:** commit'ler worktree'siz, geçici index ile atıldı. Betik: scratchpad `dala_ekle.sh`. Yeni oturum kendi worktree'sinde de yazabilir.
- **Almanya:**
  - konu listesi (72 aday)
  - örnek 5 kart + hükümdar II. Wilhelm + 2 kişi
  - parti 02: 20 kart
  - parti 03: 15 kart
  - Teyitsiz kart yok. Çift teyit 9 kart (TDV+NDB); gerisi tek kaynak, tam metin.
- **Fransa:**
  - konu listesi (80 aday)
  - örnek 5 + hükümdar I. François + 2 kişi
  - parti 02: 20, parti 03: 20, parti 04: 6
  - 48 kayıttan 46'sı teyitli. Teyitsiz 2 kart: Komün ve Viyana. Çift teyit yalnız 2 kart (parti 04).
- **Eski oturumda süren 2 ajan:** Almanya parti 04 ve Fransa parti 05 (en çok 12'şer kart, tam okuma). Eski oturum bunları dala itip devreder. Yeni oturum dalı `git log origin/ekokuma-kademe2-1125` ile kontrol etsin.
- **Kurallar:**
  - Tam metni okunmayan kaynak = TEYİTSİZ. Hedefli (Grep ile) okuma tam okuma sayılmaz.
  - `ic_not_teyit` şu etiketlerden biriyle başlar: "TEYİTLİ (çift teyit)" / "TEYİTLİ (tek kaynak, tam metin)" / "TEYİTSİZ (...)".
  - **403 ya da engel BAŞLIK TAKLİDİYLE AŞILMAZ.** User-Agent, Mozilla, Referer, ayna, önbellek, archive.org kopyası yasak; engel varsa "okunamadı" yazılır. Her ajan brifinginde yazılı olacak. Ajan transkripti `Mozilla|User-Agent|Referer` için taranır.
  - Ajanlar kendi alt ajanlarını açmaz. Bir ajan 9 iç ajan açmıştı; bu, en çok 2 ajan sınırının ihlaliydi.
  - Kart metni 1400–2300 karakter. Üç Fransa kartı 3000'i aşıyor, kısaltılmalı.
- **Emre'den bekleyen kararlar:**
  - Tek kaynaklı kart yayın adayı mı?
  - Persée 403 veriyor. Emre PDF'leri kendisi indirirse kullanılabilir mi?
- **Kronoloji ile çelişen günler** borç dosyalarında; ek okuma dalında düzeltilmez. Bunlar: `denetim/BORC-ALMANYA-*.md`, `denetim/BORC-FRANSA-*.md`.
- İngiltere ve Mısır KASA'ya geçti.

### 2b. Motor bellek çalışması

Emre'nin hedefi: koşu 16 GB'a sığsın. Dal `havva-rapor-1124`; KASA henüz main'e almadı.

- `denetim/ARAC-BELLEK-OLC-1125.py`: aşama aşama bellek ölçer. Başka bir `uret_petek` koşarken çalışmaz (çıkış 3). Eksiği: yalnız `len()` sayıyor; GEOS geometri belleği için koordinat sayımı eklenmeli.
- `oturumlar/TASARIM-B-DOLGU-AYRI-SUREC-1125.md`: Ⓑ'yi ayrı süreç yapma tasarımı.
- **Yeni bulgular** (25.11, kodda doğrulandı):
  - `_ONB_OZ` sözlüğü hiç temizlenmiyor ve geometrileri koşu sonuna kadar canlı tutuyor (`uret_petek.py:714-726`). Muhtemel sızıntı.
  - İşçi süreç motoru baştan koşturuyor (`:595-600`); yani A kısmı ve belleği N kez.
  - `MOTOR_EZBER_TAVAN_PUAN` ve `MOTOR_SUREC_ISCI` tuz dışı (`:642-647`).
- **Plan:**
  1. Koşu 40 inişi.
  2. Mesai dışı ölçüm koşusu: `MOTOR_SUREC_ISCI=1`, puan tavanı.
  3. Motor paketi: sızıntı + Ⓑ öncesi temizlik + Ⓑ ayrı süreç. Tuz değişir, tek tam inşa; mümkünse Koşu 41 ile birleştir.
- Taslak raporlar eski oturumun scratchpad'inde; kaybolabilir: `GOVDE-BELLEK-RAPOR.md`, `ESKI-ONERILER-RAPOR.md`. Repoya alınması Emre onayı bekliyordu.

### 2c. Diğer

- **GitHub token 401:** `py arac/not.py liste` çalışmıyor; post-it notları okunamıyor. Token Emre'den yenilenmeli.
- **KASA'nın main'e alacağı dallar:**
  - `havva-rapor-1124`
  - `havva-borc-kosu40-1123`
  - `ekokuma-kademe2-1125` (içerik; js/ ve index.html yükleyicisi altyapı işi)
- **Oturum emekliliği (25.11):**
  - 42 eski oturum arşivlendi.
  - Dokunulmayanlar: HAVVA 16, 17 ve 19 KASIM; post-it oturumları (401 yüzünden not durumu bilinmiyor); kirli iki worktree (#195 ve DEVLET-LISTESI); ~45 eski tek seferlik C:\atlas oturumu.
- **Durum raporu:** `denetim/HAVVA-DURUM-1126.md` (`ekokuma-kademe2-1125` dalında).

## 3. KURALLAR (özet; tam metin CLAUDE.md)

- **Mesai:**
  - Pzt–Cmt 09–19: eczane mesaisi. HAVVA'da yalnız hafif iş: ≤%25 CPU, ≤16 GB, ≤2 hafif ajan; eczane işi asla aksamaz.
  - Mesai dışında tam kaynak. Ama koşu varken HAVVA zaten dolu: ağır iş yok.
- HAVVA'da `main`e push ve `push_kapisi` gerçek itme YOK. Dala itilir, KASA'ya bildirilir.
- Bitince ya da soru sorunca 3 beep.
- `*yyy` gelince üç başlıklı brifing verilir.
- Borç defteri: bulunamayan ya da okunamayan kaynak, yarım iş, Emre'den beklenen karar deftere yazılır.
- Tarih uydurma yok. Vikipedi tek dayanak olamaz. Atlas referans değildir.
