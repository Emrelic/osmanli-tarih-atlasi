# 🔴 BİR DOSYANIN "VERİ Mİ KOD MU" OLDUĞUNU İÇERİĞİ DEĞİL, ARACIN ONA

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 816 token

---

- 🔴 **BİR DOSYANIN "VERİ Mİ KOD MU" OLDUĞUNU İÇERİĞİ DEĞİL, ARACIN ONA
  NASIL DAVRANDIĞI BELİRLER.**

  **Vaka (8 Ağustos 2026) — bir koşu 83 DAKİKA çalıştı ve öldü:**
  ```
  MOTOR KODU KOŞU SIRASINDA DEĞİŞTİ: renkler.py
  ```
  Koordinatör RENK 2'ye *"renkleri yaz, bir sonraki koşuya girer"* demişti
  ve gerekçesini **ölçmüştü**: `from renkler import BOYALAR` bir import'tur,
  süreç başlarken bir kez okunur. **O ölçüm doğruydu.** Ama yalnız
  **okuma** ölçülmüştü; `motor_izi`nin `girdi.py · renkler.py ·
  uret_petek.py` üçlüsünü parmak izlediği **hiç bakılmamıştı.**

  🟢 **Ve ayrım şuymuş** (`uret_petek.py:253`te zaten yazılıymış):
  ```
  data/*.js    KOPYALANIYOR   → koşu sırasında yazmak GÜVENLİ (koşuya girmez)
  arac/*.py    KOPYALANMIYOR  → koşu sırasında yazmak KOŞUYU ÖLDÜRÜR
  ```
  Aynı gün NOKTA oturumu 17:06'da **32 nokta yazdı ve koşu ölmedi**; RENK 2
  bir **sözlük** değiştirdi ve koşu öldü. İkisi de *"veri"* gibi görünüyor.
  ⇒ ***`renkler.py` bir sözlük TAŞIR ama `arac/` altında bir `.py`DİR.***
  **Ne taşıdığı değil, NEREDE DURDUĞU belirliyor.**

  🔴 **VE İKİ TARAFIN DA ELİNDE DOĞRU BİLGİ VARDI** — RENK 2'nin kendi
  tespiti, koordinatörünkinden değerli:
  > *"Brifingimde **`renkler.py` üretim koşularında parmak izlenir**
  > yazıyordu ve ben bunu okumuştum. Sen 'kilitli değil' dedin, ben
  > **kilidin ne olduğunu sormadım.** Brifingim 'kilitli dediğinde' değil,
  > **'üretim koşularında'** diyordu."*
  ⇒ Biri **okumayı** ölçtü ama nöbetçiyi ölçmedi; öteki **elindeki yazılı
  uyarıyı** hiç ölçmedi. **İkisi de yanlış soruyu sordu**, ve iki yanlış
  soru bir doğru cevabı örtmeye yetti.
  📌 `§7.1 ⑥` *"şartname yanlış/eksik çıktıysa BEKLETMEDEN bildir"* diyor —
  **çelişkiyi bildirmek işçinin işidir**, ve bu sefer bildirilmedi.

  ⇒ **Çare (uygulandı):** `motor_izi_dogrula` yalnız EN SONDA çağrılıyordu
  (`donemler.js`ten hemen önce), oysa değişiklik koşunun **8. dakikasında**
  olmuştu. Artık **her aşamada** çağrılıyor.
  📌 ***Bir nöbetçinin DOĞRU olması yetmiyor, ZAMANINDA olması da
  gerekiyor. Geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir.***

