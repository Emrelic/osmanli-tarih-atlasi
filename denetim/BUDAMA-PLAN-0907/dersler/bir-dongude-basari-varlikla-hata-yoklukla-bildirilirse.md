# 🔴 BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 369 token

---

- 🔴 **BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA
  GÖRÜNMEZ — VE ÇIKIŞ KODU SON YİNELEMENİNKİDİR.** *(2 Eylül 2026)*

  Dört oturuma toplu sevk yollandı:
  ```bash
  for … ; do py arac/tahta.py yaz … >/dev/null 2>&1 && echo "-> $k"; done
  ```
  Çıktı **üç ad** bastı, dördüncüsü yoktu, ve komut **exit 0** verdi.
  Sonuç: bir oturum **üç buçuk saat** iş beklemeden bekledi ve
  **beklediğini bilmiyordu** (tahtada ona giden mesaj: 0/2254).
  ```
  🔴 hata /dev/null'a gitti      → NİÇİN düştüğü kayboldu
  🔴 başarı VARLIK, hata YOKLUK  → yokluk SAYILMADAN görünmez
  🔴 exit 0 = SON yineleme       → "hepsi başardı" DEMEK DEĞİL
  ```
  🟢 Yakalayan bir denetim değil, **başka bir işçi oturum** oldu:
  *"bölüm ⑩'un adresine giden mesaj: HÂLÂ 0"* diye **saydı**.
  ⇒ Toplu bir işlemde **beklenen sayı önceden yazılır ve sonunda
  DOĞRULANIR**; `&&`li bir echo teslim kanıtı değildir.

