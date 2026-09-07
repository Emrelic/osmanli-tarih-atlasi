# 🔴 BİR EŞİK, ÖLÇÜLDÜĞÜ TABANLA BİRLİKTE TAŞINIR — taban değişince

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 800 token

---

- 🔴 **BİR EŞİK, ÖLÇÜLDÜĞÜ TABANLA BİRLİKTE TAŞINIR — taban değişince
  eşik geçersizleşir ve YENİDEN TÜRETİLMEDEN kullanılamaz.**
  *(5 Eylül 2026 · R1 dikiş sınavının ön uçuşu · `NEHİR SÜRTÜNME`)*

  Koşu bitince ilk kabul testi `R1 dikiş sınavı`. Ön uçuş koşuldu ve
  taban **birebir tuttu** (gövde 232 · dikiş 640/34.318 km² · kıyı kenarı
  42.233 · kapsama 357). Ama ölçüm **iki tabanın karıştığını** gösterdi:
```
 96 /  9.046 km²  aletin KENDİ başlığında — reçetenin sayısı,
                  **2731 petekli** yayından (koşu 4b ÖNCESİ)
640 / 34.318 km²  `TESPIH.md` — **3805 petekli** bugünkü taban
```
  🔴 **Ve sonucu keskin:** reçetenin *"R1'den sonra **< 10 parça**"*
  hedefi **96'lık tabana** aitti. 640'lık tabanda o eşiğin karşılığı
  **ölçülmemiş.** ⇒ Koşu sonrası sayı 10'un üstünde çıkarsa bu tek başına
  *"R1 çalışmadı"* demek **DEĞİLDİR** — eşik önce yeniden türetilmeli.
  📌 Bir eşik bir **oran** mı bir **mutlak sayı** mı olduğu söylenmeden
  taşınırsa, yeni tabanda **sessizce yanlış bir hüküm** üretir: geçen bir
  testi kalmış, kalan bir testi geçmiş gösterebilir.

  🟢 **Ve ön uçuşun kendisi bir yöntem:** bir fark çıksaydı iki açıklaması
  olurdu — **girdi kayması** ya da **alet**. İkincisini ölçebilmek için
  önce birincisi elendi: `donemler.js` ve `devletler_harita.js`
  değişmemiş; `js/app.js` **değişmiş** ama alet ondan yalnız `parcaCoz`u
  çekiyor ve o fonksiyon son **29 Temmuz**'da değişmiş (`git log -S`) —
  5 Eylül commit'i ona hiç dokunmuyor.
  ⇒ ***Bir farkı yorumlamadan önce, farkın olası sebeplerinden
  ölçülebilir olanı ELE.***

  🟡 **Ve bir oran, testin kapsamını görünür kıldı:**
```
boşluk toplamı  53.783.178 km²
  KAPSAMA       53.415.578  (%99,3)   → VERİ işi, nokta yok
  KIYI KENARI      333.282  (%0,62)   → görünmez artefakt
  DİKİŞ             34.318  (%0,064)  → R1'in konusu
```
  ⇒ R1 sınavı toplam boşluğun **on binde altısını** ölçüyor. Bu bir kusur
  değil (üç aile bilerek ayrı raporlanıyor — aletin kendi başlığı bunu
  yazıyor) ama ***"R1 geçti" demek "boşluk çözüldü" demek DEĞİLDİR.***

