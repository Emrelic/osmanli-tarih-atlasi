# DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK — yokluğu TEMİZLİK sanmak.

> Kimlik `D070` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **DOĞRU KAPIYA GİDİP YANLIŞ YERDEN DİNLEMEK — yokluğu TEMİZLİK
  sanmak.** *(3 Eylül 2026 · bir saat içinde ÜÇ ALETTE, üçü de aynı
  koordinatörün, ve üçüncüsü DERSİN KENDİSİ YAZILIRKEN)*

  `denetle.py` iki noktaya *"⚠️ bu öneri sınandı ve GEÇMEDİ"* damgası
  bastı. Koordinatör `§11`in *"bir denetçiyi taklit etme, ONU KOŞTUR"*
  kuralını **uyguladı** — `konum_denetimi`yi doğrudan çağırdı. Yine de
  iki yanlış koordinat üretti, sonra bir doğrulayıcı yazdı ve o da
  yanıldı, sonra bir ölçüm yaptı ve o da:
  ```
  ① çözücü        fonksiyonun BASILAN çıktısını okudu
                  → o fonksiyon HİÇBİR ŞEY BASMIYOR, DÖNDÜRÜYOR
                  → boş metin "1900 adayın hepsi temiz" diye okundu
                  → gerçek: 1,227 km ve 0,062 km DIŞARIDA
  ② doğrulayıcı   dönüşü okudu ama oge[0]'ı AD sandı — o MESAFE,
                  ad oge[1]. Ad eşleşmeyince yine "dördü de geçti"
  ③ tahta ölçümü  `kim` alanını sordu — o alan YOK, adı `kimden`
                  → "2626 mesajın 0'ı AFRIKA adına" dedi
                  → gerçek 37. Ve bir işçi oturum, hiç yapmadığı bir
                    kusurla suçlanmak üzereydi.
  ```
  ⇒ Üçü de tek cümle: ***bir şey bulamadım ⇒ sorun yok.*** Ve hiçbiri
  hata vermedi; üçü de **temiz bir sayı** üretti.

  🟢 **Ve üçünü de İŞÇİ OTURUMLAR çürüttü, hiçbirini denetim betiği.**
  `DUNYA-KAMERIKA-0903` aynı ızgarayı aynı denetçiye sordu ama
  **dönüşü doğru okudu**: docstring 6 alan diyordu, gerçek 7'ydi,
  `IndexError` aldı ve **ölçtü.** `DUNYA-AFRIKA-0903` kayıt alanlarını
  **döktü.** Koordinatör iki durumda da hata almadı ve yanıldı.
  📌 ***Hata vermeyen bir yanlış okuma, hata verenden pahalıdır.***

  🔴 Ve zarar tek yönlü değil: koordinatörden gelen bir sayı sorgusuz
  uygulanır. ①'de `konum` 0'dan 2'ye **geri dönerdi**; ③'te bir oturum
  **çalıştığı hâlde** protokol ihlaliyle damgalanıyordu.

  ⇒ **KURAL:** bir aletin **dönüş yapısı ve bir kaydın ALAN KÜMESİ
  varsayılmaz, DÖKÜLÜR** (`repr` · `len` · `sorted(d.keys())`). Ve
  `C13`ün üç ayağına dördüncüsü:
  ```
  ① GEÇME  ② ATEŞLEME  ③ GİRDİ (gerçek kaynaktan)
  ④ 🆕 ÇIKTI — aletin cevabını DOĞRU YERDEN okuduğunu göster:
       bilerek kusurlu bir girdi ver, alet onu BİLDİRSİN.
       Bildirmiyorsa bozuk olan senin OKUMAN, aletin değil.
  ```
  🔴🔴 **VE ④'ÜN EN TEHLİKELİ HÂLİ: ALET SESSİZCE HİÇBİR ŞEY YAPAR VE
  ÇIKTISI SENİN ÖNGÖRÜNLE AYNI OLUR.** *(5 Eylül 2026 · `NEHİR SÜRTÜNME`,
  ve kendi aletinde, kendi lehine)*
```
öngörü      "hayalet+0 · 4c+0 · 4d+0 · künyesiz+0"
alet bastı   hayalet+0 · 4c+0 · 4d+0 · künyesiz+0      ← BİREBİR
gerçek      "Egil: 0 eşleşme · Ergani: 0 …" — alet ada göre eşleştiriyor,
            YENİ kayıtta eşleşme yok ⇒ HİÇBİR ŞEY UYGULANMADI
            o `+0` bir ölçüm değil, TABAN
```
  ⇒ Bu proje öngörü disiplinini *"ancak yanlış çıkabilen bir şey bilgi
  taşır"* diye kurdu. Burada disiplin **tersine döndü**: sessizce hiçbir
  şey yapmayan bir aletin çıktısı **tabandır**, ve taban *"değişiklik
  beklemiyorum"* diyen bir öngörüyle **ayırt edilemez.**
  📌 ***Bir öngörü, ancak aletin GERÇEKTEN çalıştığı doğrulanmışsa
  sınanmış olur.*** Yoksa öngörü kendini doğrular.
  🟢 Ve çare *"dikkat et"* değil **alet** oldu: eşleşme yoksa kayıt
  EKLENİR · kırılma kümesi KÜRESEL ölçülür (eski alet yalnız eşleşen
  adlara bakıyordu ⇒ yeni bir noktanın getirdiği yeni GÜN görünmezdi,
  kusur **çift**ti) · ve iki `assert`: uygulanan sayı ≠ yama sayısı ise
  alet **DURUR.**
