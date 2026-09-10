# BİR YÖNTEM EMEKLİ EDİLMİŞ OLABİLİR VE YERİNE GELEN ALET ULAŞILAMAZ OLABİLİR — o zaman herkes emekli yönteme döner, ve bilmediğinden değil MECBUR OLDUĞUNDAN.

> Kimlik `D138` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BİR YÖNTEM EMEKLİ EDİLMİŞ OLABİLİR VE YERİNE GELEN ALET
  ULAŞILAMAZ OLABİLİR — o zaman herkes emekli yönteme döner, ve
  bilmediğinden değil MECBUR OLDUĞUNDAN.** *(5 Eylül 2026 · koşu 5b'nin
  merdiveni · koordinatörün kendi gece boyunca kullandığı yöntem)*

  Koordinatör gece boyunca koşunun ilerleyişini **dosya damgalarından**
  ("merdiven") okudu. `uret_petek.py:207` o yöntemi **3 Ağustos'ta emekli
  etmiş** ve gerekçesini yazmış:
```
"4s41dklık bir koşunun nerede yandığı ÜÇ OTURUM BOYUNCA DOSYA
 DAMGASINDAN tahmin edildi: bolgeler.js 01:56, devletler_harita.js 05:38.
 Damga «yazma anı»nı verir, «hesabın başladığı an»ı değil — yani
 elimizdeki en iyi kanıt bir İŞARETTİ, ÖLÇÜM DEĞİL.
 Bu blok o tahmini emekliye çıkarır: KOŞU KENDİ BİLANÇOSUNU YAZAR."
```
  Ve yerine **üç alet** kondu: `asama()` (ardışık aşamalar) · `sayac()`
  (çapraz maliyet) · `ilerleme()` (uzun döngülerde satır — *"3s42dk
  boyunca tek satır basmayan bir blok «takıldı mı bitiyor mu» sorusunu
  cevaplayamaz"*).

  🔴 **Ama o üç aletin çıktısı koşu SÜRERKEN OKUNAMIYOR.** Ölçüldü:
```
kosu_ayrik.log   0,4 KB · 6 satır · son yazım 02:40:26
koşu 14 saat 23 dakikadır çalışıyor ⇒ aşama tablosundan TEK SATIR yok
```
  Sebep `CLAUDE.md`de zaten yazılı: *"`uret_petek.py` başında stdout'u
  `TextIOWrapper` ile sarmaladığı için `py -u` bile çıktıyı ancak
  ÇIKIŞTA boşaltır."*
  ⇒ ***Emekli edilen yöntem, yerine gelenin ulaşılamaz olması yüzünden
  hâlâ tek seçenek.*** Ve bu bir bilgisizlik değil bir **yapı** sorunu:
  aleti bilen bir oturum bile ona koşu sırasında bakamaz.

  📌 `§11`in *"bir ders veriye SERBEST METİN olarak inerse inmiş
  sayılmaz"* ailesinin **tampon** yüzü: burada ders koda indi, alet
  yazıldı, ve **çıktısı tampona hapsoldu.**
  🟢 Ve bu gece eklenen **CPU deltası** tam bu boşluğu dolduruyordu —
  ama o yalnız *"çalışıyor mu"* der, *"nerede"* demez. Aşama tablosunun
  yerini tutmaz.
  🔜 BORÇ: aşama satırları ayrı ve **tamponsuz** bir dosyaya da
  yazılmalı (`.uretim-asama` gibi) — koşu kendi bilançosunu yazıyor ama
  **koşarken kimse okuyamıyor.**
