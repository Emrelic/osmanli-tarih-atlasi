# 🔴🔴 BİR ALET, ARADIĞI ŞEYİN NEREDE OLMAYACAĞINI DA BİLMELİ.

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 987 token

---

- 🔴🔴 **BİR ALET, ARADIĞI ŞEYİN *NEREDE OLMAYACAĞINI* DA BİLMELİ.**
  *(2 Eylül 2026 — bir günde YEDİ kusur, hepsi tek kökten, ve yedisini de
  aletleri yazan oturum kendi üzerinde yakaladı)*

  Bu proje aletlerine hep **nerede arayacağını** öğretti. Bir gün boyunca
  yedi kusur çıktı ve yedisi de bunun tersinden geldi: alet aradığı şeyi
  **olmaması gereken yerde buldu.**

  ```
  ① damga ≠ ifade        hüküm damgası dizi olarak arandı; damgasız ama
                         GERÇEK bir hüküm (Manama) yanlış sınıflandı
  ② başlık ≠ kapsam      "GRUP B — KARS/Revan" başlığında Kars vardı,
                         bölümün KAPSAMINDA yoktu → yanlış hüküm bağlandı
  ③ eşleşme ≠ doğru şey  aynı vakanın genel hâli: eşleşme bulmak,
                         doğru şeyi bulmak değildir
  ④ bir yazım biçimi ≠ biçimin tamamı
                         regex `ad:` biliyordu, `{"ad":` bilmiyordu —
                         dört kayıt bulunamadı
  ⑤ yorumdaki süslü parantez ≠ kaydın süslü parantezi
                         `rfind("{")` kaydın ÜSTÜNDEKİ yorumdaki `{`yi
                         yakaladı → "s: BULUNAMADI"
  ⑥ yorumdaki ad ≠ kayıttaki ad
                         `ad:"Halepçe"` eşleşmesi bir YORUMUN İÇİNDE
                         bulundu — dosya kendi çakışmasını anlatıyordu
  ⑦ ASCII ≠ Türkçe       `usku` araması `Üsküp`ü bulamadı; altı mükerrer
                         nokta yazılmak üzereydi (bu koordinatörün hatası)
  ```

  🟢 **VE YEDİSİ DE YAKALANDI, çünkü aletler "BULUNAMADI" DİYE BASTI.**
  Sessizce atlasalardı:
  ```
  ④'te  dört hüküm uygulanmamış kalır, çakışma 13 çıkar, ve rapor
        "öngörü ÇÜRÜDÜ" diye YANLIŞ TEŞHİSLE yazılırdı
  ⑤⑥'da Halepçe'nin `s:`i düşmez, çakışma 6 çıkar, ve rapor
        "hüküm uygulandı" diye YANLIŞ BİR TAMAMLANMA verirdi
  ```
  ⇒ ***Sessiz atlama, yanlış sonuçtan pahalıdır.*** Yanlış sonuç bir gün
  fark edilir; sessiz atlama **hiçbir iz bırakmaz** ve üstüne
  *"tamamlandı"* raporu yazılır.

  📌 **VE BU, GÜNÜN ÖTEKİ DERSLERİNİ BİRLEŞTİRİYOR.** *"Doğru sonucu
  güvenilmez yoldan veren alet"* · *"eşleşme ≠ doğru şey"* · *"kendi
  yazdığın ayrıştırıcı her zaman kötüdür"* — üçü de bunun yüzleri.
  Aletin bilmesi gereken iki şey var ve proje yalnız birincisini
  öğretiyordu:
  ```
  ① aradığım şey NEREDE OLUR      (öğretiliyordu)
  ② aradığım şey NEREDE OLMAZ     ← eksik olan
     yorumda · başlıkta · önsözde · başka bir yazım biçiminde ·
     başka bir alfabede
  ```
  🟢 En ucuz uygulaması: **veriyi kendi dilinin yorumlayıcısına ver.**
  `node`/`import` yorumu koddan zaten ayırır; regex ayıramaz. Bu proje o
  dersi bugün **beşinci kez** öğrendi (girdi.py tek tırnak · bagla.py CRLF
  · renkler.py regex · _bk_nobetci regex · bu) — ve beşincisinde
  aletlerin sahibi kendi kendine şunu yazdı:
  > *"Bir ayrıştırıcı daha eklemek SEKİZİNCİ kusuru davet ederdi."*

