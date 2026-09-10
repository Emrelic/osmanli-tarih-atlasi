# `C13`ÜN ÜÇÜNCÜ AYAĞI: GİRDİYİ GERÇEK KAYNAĞINDAN OKUMA YOLU DA SINANIR.

> Kimlik `D053` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **`C13`ÜN ÜÇÜNCÜ AYAĞI: GİRDİYİ GERÇEK KAYNAĞINDAN OKUMA YOLU DA
  SINANIR.** *(2 Eylül 2026 — ve bir nöbetçi, önlemek için yazıldığı
  kusuru İLK GERÇEK GİRDİSİNDE kendi üzerinde üretti)*

  `C13` iki yol sayıyor: **geçme** (kusur yokken temiz mi) · **ateşleme**
  (kusur varken ötüyor mu). `arac/_bk_nobetci.py` ikisini de geçti —
  ateşleme sahte bir adla (`ZZZ-YOK-OLAN-BASKENT-QQQ`) zorlandı, geçme
  temiz kümede gösterildi. **Ve yine de çalışmadı:**
  ```
  ilk gerçek dosya yazıldı  →  nöbetçi "0 kayıt · TEMİZ · çıkış 0" bastı
  gerçek                    →  4 kayıt vardı
  ```
  ⇒ **Sınavların ikisi de kayıtları BELLEĞE ENJEKTE ederek yapılmıştı.**
  Dosyadan okuma yolu **hiç koşulmamıştı** ve kusur tam oradaydı: regex
  `bk:[` dizisinin ilk öğesinde duruyor, gövdeyi boş yakalıyordu.

  🔴 **Ve tehlikesi şu: nöbetçi, VAR OLMAK İÇİN YAZILDIĞI kusuru üretti.**
  `bk[].ad` eşleşmemesi *sessiz başarısızlık* olduğu için nöbetçi
  yazılmıştı; nöbetçinin kendisi de **sessizce** boş döndü. Sessiz bir
  kusuru yakalayan alet, sessizce bozulursa **hiçbir şey ötmez.**

  🟢 **Çare regex'i düzeltmek DEĞİL, regex'i BIRAKMAK oldu:** artık
  `girdi._cevir` kullanılıyor — motorun kendi JS okuyucusu.
  📌 Bu proje aynı dersi (*"veri zaten bir dilde yazılıysa, o dilin
  yorumlayıcısını çağır"*) **dördüncü kez** öğrendi: `girdi.py` tek tırnak
  · `bagla.py` CRLF · `renkler.py` regex ayrıştırması · ve şimdi bu.
  ⚠️ **Dördüncüsünün farkı:** öncekiler eski aletlerde çıktı, bu **aynı
  gün yazılmış YENİ bir nöbetçide** çıktı — yani kural yazılıyken bile
  ihlal edildi. *"Kural yetmiyor, ALIŞKANLIK gerekiyor"*un bir üstü:
  **alet yazarken varsayılan JS okuyucusu OLMALI, regex istisna.**

  🟢 **KURAL — `C13` artık ÜÇ AYAKLI:**
  ```
  ① GEÇME      kusur yokken TEMİZ diyor mu
  ② ATEŞLEME   her kusur dalı için AYRI AYRI ötüyor mu
  ③ GİRDİ      🆕 girdiyi GERÇEK kaynağından (dosya) okuma yolu koşuldu mu
  ```
  ⚠️ ③ olmadan ① ve ② **aletin mantığını** sınar, **aletin kendisini**
  değil. Enjekte girdiyle yapılan bir sınav, ayrıştırıcıyı hiç çağırmaz —
  ve bu projede kusurların çoğu **ayrıştırıcıda.**

  📌 Ve bulan oturumun kendi cümlesi kaydın özü:
  > *"Nöbetçi C13'ü geçmişti — ama iki yolu da ENJEKTE kayıtla
  > sınamıştım, yani dosya okuma yolunu hiç sınamamıştım."*
