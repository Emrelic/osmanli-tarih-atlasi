# KOORDİNATÖRÜN "HIZLI BİR BAKIŞ" ÖLÇÜMÜ, İŞ DAĞITIMININ TABANI OLUNCA ARTIK HIZLI BİR BAKIŞ DEĞİLDİR

> Kimlik `D040` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **KOORDİNATÖRÜN "HIZLI BİR BAKIŞ" ÖLÇÜMÜ, İŞ DAĞITIMININ TABANI
  OLUNCA ARTIK HIZLI BİR BAKIŞ DEĞİLDİR** — *(10 Ağustos 2026, aynı gün
  DÖRT vaka)*

  Koordinatör gün boyu `grep -c` ve tek satırlık regex'lerle sayı üretti ve
  o sayıları **şartnameye yazdı.** Dördü de çürüdü, ve **dördünü de işçi
  oturumlar düzeltti** — hepsi kaydı gerçekten okuyarak:
  ```
  renk sayısı        330  →  333   üreteç (`durum_tablosu.py`) düzeltti
  içerik kalemi       17  →    6   KUTU DENETİM kartları saydı: 11'i ZATEN yazılmış
  içerik kartı         5  →    7   İÇERİK: "iki ayrı soru, tek karta inmez"
  padişah alanları  0/41 → 7·11·7  PADİŞAH: "lakap/esler/cocuk zaten kısmen dolu"
                  boş kart 16 → 14  (ikisi `ozel:true` — tasarım, eksiklik değil)
  ```

  🔴 **Ve bedeli tek bir yanlış sayı değil: YANLIŞ İŞ TARİFİ.** *"17 içerik
  kalemi bekliyor"* diye yazılan şartname, **ödenmiş bir borcu yeniden
  kuyruğa** koyuyordu; oturum onu okuyup 11 kartı **yeniden yazabilirdi.**
  📌 Bu, `§11`in *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye
  yeniden bulunur"* kuralının **TERS YÜZÜ**: ödenmiş bir borç da kayıtsız
  kalırsa yeniden **iş** diye bulunur. **Kayıt iki yöne de gerekiyor.**

  ⚠️ Kural zaten yazılıydı — *"veri zaten bir dilde yazılıysa, o dilin
  yorumlayıcısını çağır"* (`girdi.py` tek tırnak · `bagla.py` CRLF · regex
  yerine import). Bugünkü dördü de **aynı kuralın ihlali**, ve ihlal eden
  onu yazan taraftı.

  🟢 **KURAL:** bir sayı **yalnız kendi turumu bilgilendiriyorsa**
  kaba ölçüm yeter. Ama o sayı **bir şartnameye, bir kabul ölçütüne ya da
  bir başkasının iş tarifine** giriyorsa:
  ```
  ① veriyi kendi dilinde ayrıştır (JS → node · Python → import)
  ② ya da var olan ÜRETECİ çağır (`durum_tablosu.py` · `denetle.py`)
  ③ ikisi de yoksa: sayının yanına "kaba ölçüm, doğrulanmadı" YAZ
  ```
  📌 ③ en ucuzu ve en çok atlananı. Şartnameye *"~17 kalem (kaba sayım)"*
  yazmak, işçinin ilk işini **doğrulama** yapar; *"17 kalem"* yazmak onu
  **taban** yapar. Aradaki fark bir tilde işareti.

  🟢 Ve iyi haber ölçüldü: **dördünü de işçi oturumlar yakaladı**, çünkü
  şartnameleri *"devraldığın rakamı doğrulamadan aktarma"* diyordu ve
  **uyguladılar.** Sistem çalıştı — ama kaynağında düzeltilirse dört tur
  daha ucuza çalışır.
