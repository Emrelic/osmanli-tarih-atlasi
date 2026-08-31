<!-- DURUM: YAZILDI ¦ 2026-08-30 ¦ ASAMA 2 ongorusu — OLCUMDEN ONCE -->
# MALİYET-MESAFE AŞAMA 2 — ÖNGÖRÜ

> 🔴 **BU DOSYA ÖLÇÜM KOŞULMADAN ÖNCE YAZILDI.** Sahra kutusu bu satırlar
> yazılırken **hiç koşturulmadı**. Sonradan yazılan beklenti ölçümü
> gördükten sonra ona göre şekillenir ve hiçbir zaman yanlış çıkmaz —
> yani hiçbir şey öğretmez. (`CLAUDE.md §11`)

**Yazan:** MALİYET-MESAFE · **Zaman:** 30 Ağustos 2026, Aşama 2 koşmadan önce
**Şartname:** ORHANGAZİ'nin dört ölçütü + `TAVAN_KM` kaldırma kararı

---

## 🔴 0. ÖNCE BİR İTİRAZ — ÖLÇÜT ① KOLAY GEÇECEK VE BU YANILTICI

Şartname birinci ölçütü şöyle koyuyor: **"kaç km² sahipsizleşiyor"**.
Gerekçesi sağlam — 28 Ağustos'u çürüten sayı buydu. Ama o sayı **`TAVAN_KM`
için** doğru ölçüttü, **maliyet-mesafe için değil.** İkisinin delik açma
mekanizması **ters**:

```
TAVAN_KM       peteğin YARIÇAPINI mutlak kırpar
               → komşusu uzaktaysa arada toprak SAHİPSİZ kalır → DELİK
MALİYET-MESAFE her hücreyi EN UCUZ sahibe atar
               → karadan bağlı her hücrenin MUTLAKA bir sahibi olur
               → delik ancak hücre ULAŞILAMAZ ise doğar (ada/enklav)
```

⇒ **Bağlı karada maliyet-mesafe delik AÇAMAZ — yapısal olarak.** Ölçüt ①
bu yüzden geçecek, ve geçmesi **hiçbir şey kanıtlamayacak.**

🔴 **Tavanın gerçek işlevi delik önlemek değil, ERİŞİMİ SINIRLAMAKTI.**
O hâlde kaldırılmasının riski de delik değil **AŞIRI ERİŞİM**. Şartnamenin
dört ölçütü bu riski **hiç ölçmüyor.** Beşinci bir ölçüt ekliyorum (⑤) ve
asıl sınav odur.

📌 Bu, `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin bu işteki
hâli: doğru ölçüt, **yanlış mekanizma için** devralınmış.

---

## BEŞ ÖNGÖRÜ — mazeretleri ÖNCEDEN yazılmış

```
① DENİZ SINAVI — Sardinya · Kefalonya
   öngörü: maliyet-mesafede KARŞI KIYIYA atanan kara hücresi = 0
           Voronoi'de > 0 (kusur zaten kayıtlı)
   🔴 MAZERET YOK — Çimpe'de zaten 0 çıktı; başka kıyıda çıkmazsa
      yöntem değil UYGULAMA bozuktur.

② SAHRA — DÜZ ARAZİ, ASIL SINAV
   öngörü: düz çölde iki yöntemin AYRIŞTIĞI hücre < %3
           (dağ kutusunda %10,4 ölçülmüştü)
   GEREKÇE: sürtünme = 1 + 0,005·eğim. Eğim ≈ 0 ise sürtünme ≈ 1,
            yani maliyet-mesafe = kuş uçuşu = Voronoi.
   🔴 MAZERET YOK — bu bir MEKANİZMA iddiası, veri değil. %3'ün çok
      üstü çıkarsa çölün eğimi hakkındaki varsayımım yanlış demektir
      ve bunu ÖĞRENMEK isterim.

③ TAVANSIZ MALİYET-MESAFE DELİK AÇMAZ
   öngörü: bağlı kara kutularında SAHİPSİZ hücre = 0
   🔴 MAZERET YOK — ama §0: bu geçince BİR ŞEY KANITLANMAZ. Öngörüyü
      yazıyorum ki "ölçtük, temiz" denip ⑤ atlanmasın.

④ OSMANLI TOPLAMI — kutu bazında, 1600·1700·1800·1900
   öngörü: DENİZ kutularında maliyet Osmanlı'yı KÜÇÜLTÜR (karşı kıyı
           kesilir) · KARA kutularında değişim ±%5 içinde
   🟡 MAZERETİ VAR: kesitler arası nokta yoğunluğu farklı; bir kesitte
      yeni nokta inmişse fark yöntemden değil VERİDEN gelir.

⑤ 🔴 ASIL SINAV — AŞIRI ERİŞİM (şartnamede YOK, ekliyorum)
   öngörü: düz çölde maliyet-mesafe peteğinin EN UZAK hücresi
           400 km'yi AŞAR — yani kaldırılan tavanın işini YAPMAZ
   GEREKÇE: ②'nin aynısı. Arazi bedava ise erişimi sınırlayan şey yok.
   🔴 MAZERET YOK — tutarsa "maliyet-mesafe tavanın yerini alır"
      hipotezi ÇÜRÜR ve emniyet kemeri ZORUNLU olur.
      Tutmazsa hipotez ayakta kalır ve tavan gerçekten gereksizleşir.
```

---

## NE ÖLÇÜLMEYECEK — açıkça, ve niçin

```
🔴 Değişmez 1 / 1b        ÜRETİM koşusu gerektirir. `uret_petek.py`
                          KİLİTLİ (koşu koşuyor) ve onu yalnız Oturum 0
                          çalıştırır. Kutu prototipiyle ÖLÇÜLEMEZ.
                          ⇒ "temiz" DEMEYECEĞİM; "ölçülmedi" diyeceğim.
🔴 ATLAS GENELİ km²       aynı sebep. Kutu ölçümü bir VEKİLDİR ve
                          vekil olduğu her satırda YAZILACAK.
🔴 gerçek petek geometrisi prototip HÜCRE ızgarası kullanıyor, Voronoi
                          poligonu değil. Alanlar YAKLAŞIKTIR.
```

⚠️ `§11`: *"ölçemediğini eleyen süzgeç onu temiz sayar."* Bu üç satır
o yüzden var — ölçülmeyen şey **`ölçülmedi` diye yazılır**, `yok` diye
değil.
