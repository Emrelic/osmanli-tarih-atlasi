# RSS YANLIŞ SİNYALDİ — aynı bant hem sağlıklı hem ölümcül olabiliyor, bir gecede ÜÇ yönden.

> Kimlik `D197` · 11 Eylül 2026 · nöbetçi/Koşu 9 bellek alarmı vakası,
> commit `e147ea9`, `7e87e6f`, `905f5fb` ve `denetim/BEKCI-KOSU9.out`.
> Slogan `CLAUDE.md §11`de, vaka burada.

---

- 🔴🔴 **RSS (SÜRECİN BELLEK AYAK İZİ) YANLIŞ SİNYALDİ — bir gecede
  ÜÇ AYRI YÖNDEN ölçüldü, ve üçü de AYNI nöbetçinin AYNI gecesinde:**

  ```
  4,02 GB   GEÇ öttü     (eşik 4.0 GB, commit 7e87e6f)
  3,30 GB   YANLIŞ öttü  (eşik 3.0 GB, commit e147ea9)
  65 MB     HİÇ ötmedi   (BEKCI-KOSU9.out, 07:41:11 — tepe zaten 3.38 GB idi)
  ```

  **① 4,02 GB — GEÇ:** eşik aşıldığında makine ZATEN takas ediyordu
  (`cekirdek kipi %87`, sert sayfa hatası 1425/sn). Alarm doğruydu ama
  hasar alarmdan ÖNCE başlamıştı — eşik "artık kurtarılamaz" noktasının
  gerisinde kalmıştı.

  **② 3,30 GB — YANLIŞ:** eşik aşıldı ama bu **geçici bir açılış
  tepesiydi** — motor 166.966 hücrelik ızgarayı kurup `_kv_dijkstra`yi
  modül düzeyinde koşturup BIRAKIYOR; 8 dakika içinde RSS 3,38 GB'tan
  1,50 GB'a düştü, çekirdek kipi %81'den %8'e indi. Nöbetçi bunu
  **kalıcı bir sıkışma** sandı ve koordinatör bir kararı (sıralı moda
  dönüş) YANLIŞ bir teşhisle (*"takas geri geldi"*) haklı çıkarmaya
  çalıştı — karar doğruydu, gerekçe yanlıştı (`D049`, AYNI GECE İKİNCİ
  KEZ).

  **③ 65 MB — HİÇ:** aynı koşunun `BEKCI-KOSU9.out`ındaki saatlik
  örneklemede, tam 3,38 GB'lık bir tepeden dakikalar sonra tek bir
  okuma **65 MB** çıktı — eşiğin (3,6 GB) SIFIR yakınında, alarm hiç
  ötmedi. Koşu o anda da SAĞLIKLIYDI (CPU +2739 sn/saat, sıralı
  imzayla tutarlı) — ama düşük okuma bunu KANITLAMIYORDU, yalnız
  TESADÜFEN doğruydu. Aynı düşük okuma, süreç GERÇEKTEN çökmüşken de
  görülebilirdi.

  ⇒ **AYNI RSS BANDI HEM SAĞLIKLI HEM ÖLÜMCÜL OLABİLİYOR — belirleyen
  motorun bellek boyu değil, MAKİNENİN O ANDAKİ BOŞ RAM'i ve süreç
  içindeki hangi ANA denk geldiği (açılış tepesi mi, çöküş mü, GC
  sonrası mı).** Tek bir mutlak eşik (`X GB'ı geçince öt`) bu üç
  durumu AYIRT EDEMEZ — ikisi (② ve ③) o eşiğin ETRAFINDA rastgele
  YALAN söyler, biri (①) eşik doğru olsa bile GEÇ kalır.

  🟢 **Doğru sinyal ÖLÇÜLDÜ, iki tanesi, ve ikisi de RSS'İN
  VEREMEDİĞİ keskinlikte ayrışıyor:**
  ```
  çekirdek kipi / toplam CPU     sağlıklı %8-11   ·   takasta %81-87   (10x)
  sert sayfa hatası / saniye     sağlıklı  9-42   ·   takasta 1425-1473 (30x)
  ```
  Bu ikisi RSS'in HİÇBİR bandında ayırt edemeyeceği bir netlikte
  ayrışıyor — çünkü ÖLÇTÜKLERİ ŞEY farklı: RSS "ne kadar bellek
  tutuyor" sorar, bu ikisi "makine bu anda TAKAS EDİYOR mu" sorar, ve
  ikinci soru asıl önemli olan.

  ⚠️ **Ve bu koda EKLENMEDİ** — `D010` gereği, canlı bir 20 saatlik
  koşunun TEK nöbetçisine sınanmamış bir dal yazılmaz. Bir sonraki
  koşunun ilk işi bu.

  📌 `D188`in aynası: *"sayıyı bilmek, sayının NEYE GÖRE olduğunu
  bilmek değildir"* — burada üç kez, üç farklı yönde tekrarladı: 4,02
  GB'ı bilmek onun bir TEPE mi bir ANLIK OKUMA mı olduğunu söylemiyor,
  3,30 GB'ı bilmek kalıcı mı geçici mi olduğunu söylemiyor, 65 MB'ı
  bilmek sağlıklı mı şanslı mı olduğunu söylemiyor.
