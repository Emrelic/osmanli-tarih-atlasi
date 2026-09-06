# ÖLÇÜM — TAVAN 200 km: boşluk **Çağatay'da**, ve yoğun bölgede **hiç yok**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD/VERİ YAZILMADI** (koşu 7b sürüyor).
> Emre'nin `H-0001` paketi ve bekleyen `TAVAN_KM` kararı için.
> Aletler: `ARAC-TAVAN-KIYAS-0906.js` (🔴 yanlış ölçüt) ·
> `ARAC-TAVAN-KAPLAMA-0906.js` (🟢 doğru ölçüt)

---

## ① 🔴 ÖNCE YANLIŞ ÖLÇTÜM — ve raporlamadan yakaladım

İlk ölçüt: *"bir nokta en yakın komşusuna ulaşabiliyor mu?"*
(`mesafe ≤ Ra + Rb`). Sonuç:
```
200 km'de ulaşamayan 23 nokta · eski tavanda 8
en büyük beş açık: Rapa Nui · Güney Georgia · Yap · Severnaya Zemlya · Svalbard
```
🔴 **Beşi de uzak ADA.** Emre'nin şikâyet ettiği Çağatay/Altın Orda
şehirleri listede **hiç yok** — çünkü onların en yakın komşusu 400 km
İÇİNDE, yani ikili ölçütü **geçiyorlar.**

📌 **Ama üç şehir birbirine 380 km olsa bile ORTALARINDA kocaman bir
delik kalır.** İkili erişim, KAPLAMAYI ölçmez.
⇒ `§11`: *ölçüm doğru, ölçtüğü şey sorunun kendisi değil.* Alet silinmedi,
çünkü **niçin yanlış olduğu** ikinci aletin başlığında duruyor.

---

## ② 🟢 DOĞRU ÖLÇÜT — ızgara kaplaması

Bölgeyi 0,25° ızgarayla tara; her hücre için, **herhangi bir** yerleşimin
tavanı içinde mi diye bak.

```
bölge                              bugün(200)   eski(kademeli)   fark
─────────────────────────────────────────────────────────────────────
Çağatay (Maveraünnehir–Yedisu)       %83,9         %98,5        %14,6
   7.473 hücre                                            (1.089 hücre)
Altın Orda (Deşt-i Kıpçak)           %98,5        %100,0         %1,5
   7.353 hücre                                              (107 hücre)
KIYAS: Anadolu (yoğun)              %100,0        %100,0         %0,0
   1.925 hücre                                                (0 hücre)
```

---

## ③ ÜÇ SONUÇ — ve ikisi Emre'nin beklediğinden farklı

```
🟢 ① ŞİKÂYET DOĞRULANDI VE YERİ BULUNDU: Çağatay bölgesinin ALTIDA BİRİ
     (%16) hiçbir yerleşimin tavanı içinde değil. Boşluk GERÇEK.
🟡 ② AMA ALTIN ORDA NEREDEYSE ETKİLENMEMİŞ: %98,5 → %100, yalnız %1,5.
     Emre ikisini birlikte andı; ölçüm onları AYIRIYOR.
🟢 ③ VE YOĞUN BÖLGEDE TAVANIN HİÇ ETKİSİ YOK: Anadolu her iki tavanda da
     %100. ⇒ Tavanı yükseltmek Anadolu'da HİÇBİR ŞEYİ değiştirmez.
```

📌 **Karar için asıl cümle bu:** ***tavan yalnız yerleşim SEYREK olan
yerde ısırıyor.*** Yani onu yükseltmek küresel bir risk değil, **hedefli
bir kazanç** — yoğun coğrafyada ölçülebilir hiçbir etkisi yok.

---

## ④ ⚠️ NE ÖLÇMEDİM — karar bunlar olmadan verilmesin

```
🔴 KM² — bu ızgara HÜCRE sayıyor, alan değil. "%14,6" bir oran; kaç km²
   olduğu petek geometrisini ister ve motor DONUK.
🔴 KARA/DENİZ — ızgara ham dikdörtgen, deniz payı ayrılmadı. Bölgeler
   karasal seçildi ama sayılar MUTLAK değil KIYAS için okunmalı
   (iki tavan AYNI ızgarada ölçüldü, fark güvenilir).
🔴 YÜKSELTMENİN BEDELİ: 2 Eylül'de "tavan indirimi ek kazanç getirmiyordu,
   ağır bedel bindiriyordu" diye kaydedilmiş. TERS yönün bedeli —
   çöl emilmesi geri gelir mi, `COL_PUAN_ESIK` tutar mı — ÖLÇÜLMEDİ.
   ⚠️ Bu, kararın EN ÖNEMLİ eksik parçası: kaplama kazancı ölçüldü,
      YAN ETKİ ölçülmedi.
🔴 ARA DEĞERLER: yalnız 200 ve eski kademeli tavan kıyaslandı. "Hepsi 300"
   ya da "k1=400, ötekiler 200" gibi ARA seçenekler ÖLÇÜLMEDİ.
```

---

## ⑤ KARAR EMRE'NİN — ve seçenekler
```
Ⓐ 200'de KAL     Çağatay'ın %16'sı boş kalır. Bugünkü koşu 7b zaten
                 böyle çıkacak.
Ⓑ ESKİYE DÖN     Çağatay %98,5'e çıkar. Bedeli ÖLÇÜLMEDİ (çöl).
Ⓒ ARA DEĞER      örn. yalnız k1/k2 yükselt — Çağatay'ı çözer, k3/k4'ü
                 200'de bırakır. HİÇ ÖLÇÜLMEDİ, ama ölçülebilir.
```
🔴 **Üçü de `uret_petek.py` değişikliği ⇒ YENİ BİR KOŞU (~16+ saat).**
Koşu 7b bitmeden hiçbiri yapılamaz.
