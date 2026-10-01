# D247 — İki ölçümün UYUŞMASI doğrulama değildir: bozuk bir ölçüm doğru sayıyı verebilir

**Slogan:** 🔴 **Bir raporu sınamak için yaptığım ölçüm BOZUKTU ve tam onun sayılarını verdi — ve ben bundan "rapor yanlış" sonucunu çıkardım. İki sayının eşitliği ikisinin de doğru olduğunu göstermez; aynı yanlışı yapıyor da olabilirler, ya da biri doğru öteki tesadüfen aynı yere düşüyor olabilir.**

## Vaka — 1 Ekim 2026, CRLF teşhisi

KOSU-UMIT bildirdi: checkout CR ekliyor, dosya başına
`donemler_ust` 6 · `donem_parcalar` 9 · `petek_govde_ust` 3 ·
`ufuk_bantlari_ust` 4.

Ben kendi makinemde sınadım:

```bash
grep -c $'\r' data/donemler_ust.js      # → 6
grep -c $'\r' data/donem_parcalar.js    # → 9
grep -c $'\r' data/petek_govde_ust.js   # → 3
grep -c $'\r' data/ufuk_bantlari_ust.js # → 4
```

**Tam onun sayıları.** Ama benim dosyalarım YEREL ÜRETİMDİ, checkout'tan hiç
geçmemişti — yani CR olmaması gerekirdi. İki olasılık gördüm ve **yanlışını
seçtim:** *"demek ki CR içeriğin kendisinde, UMIT'in nedensel hikâyesi ters."*

Sonra Python'la ölçtüm:

```
0x0D baytı : 0        ← grep "6 CR" diyordu, dosyada SIFIR CR var
satır sayısı: 6       ← grep'in gerçekte saydığı şey
```

🔴 Kabuk `$'\r'`i yemiş, `grep -c ""` olmuş, ve **bütün satırları saymıştı.**
`wc -l` ile doğrulandı: 6 · 9 · 3 · 4 = satır sayıları.

## 🔴 VE SONRA ÜÇÜNCÜ KATMAN — sayılar YİNE DE doğruydu

İki yönlü sınav kurdum (`D010`): dosyayı silip `git checkout --` ile geri aldım.

```
81.147 bayt / 0 CR   →   81.150 bayt / 3 CR
```

**Her satır sonuna bir CR.** 3 satırlık dosyaya 3 CR. ⇒ CR sayısı satır
sayısına EŞİT, zorunlu olarak. Yani UMIT'in 6 · 9 · 3 · 4'ü **doğruydu**;
benim bozuk grep'im aynı sayıları **başka bir sebepten** veriyordu.

```
UMIT'in sayısı     DOĞRU   (gerçek CR sayısı, ve satır sayısına eşit olması zorunlu)
benim grep'im      BOZUK   (satır sayıyor)
ikisinin çıktısı   AYNI
benim çıkarımım    "rapor yanlış"      ← ÜÇ KAT yanlış
```

## DERS

```
① Bir ölçüm BOZUK olduğu hâlde DOĞRU sayıyı verebilir.
   ⇒ Sayının doğruluğu, onu üreten yolun doğruluğunu göstermez.
② İki ölçümün UYUŞMASI doğrulama DEĞİLDİR.
   ⇒ Aynı yanlışı yapıyor, ya da farklı sebeplerle aynı yere düşüyor olabilirler.
③ Bir rapordan şüphelenmek için gerekçe, o raporla UYUŞAN bir ölçüm olamaz.
   ⇒ Uyuşma şüphenin GEREKÇESİ değil, olsa olsa teyidiydi.
④ Kabuk tırnak tuzağı ölçümü SESSİZCE boşaltır: `grep -c $'\r'` bir sayı verir,
   hata vermez, ve o sayı makûl görünür.  (`D238` ailesi)
```

🔴 Ve asıl zarar: **doğru bir raporu yanlış ilan etmek.** Bir işçi doğru teşhis
koyup doğru çözdü; koordinatör bozuk bir ölçümle onu sorguladı. Yanlış bir
ölçümle sorgulamak, hiç sorgulamamaktan tehlikelidir — `§7.3 ⑦`nin aynısı
başka bir eksende: *"yanlış alanla ölçmek, ölçmemekten daha tehlikelidir:
sayı verir ve güven telkin eder."*

📌 Çare basit ve ucuz: **ölçüm aracı ile ölçülen şey aynı dilde olmalı.** Ham
bayt sorusu ham bayt okuyan araçla sorulur (`py ... open(...,'rb').count`),
kabuk süzgeciyle değil. Ve bir rapordan şüphelenileceği zaman ÖNCE kendi
ölçüm yolunun sınavı yapılır — `D010` kendi aletime de uygulanır.

## BAĞLI

`D246` (CRLF'in kendisi) · `D010` (iki yönde sınanmadan çalışıyor sayılmaz) ·
`D199` (devralınan rakam doğrulanmadan aktarılmaz) · `§7.3 ⑦` (yanlış alanla
ölçmek)
