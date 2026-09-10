# BİR DÖNGÜDE BAŞARI VARLIKLA, HATA YOKLUKLA BİLDİRİLİRSE HATA GÖRÜNMEZ — VE ÇIKIŞ KODU SON YİNELEMENİNKİDİR.

> Kimlik `D068` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

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
