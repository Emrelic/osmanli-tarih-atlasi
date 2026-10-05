# D264 — `git apply --check` İNDEKSE karşı sınanırsa CRLF yamayı YANLIŞ REDDEDER

**Slogan:** `git apply --check <yama>` ile `git apply --check --cached <yama>` **aynı
soru değildir.** Çalışma ağacı Windows'ta CRLF, indeks her zaman LF'tir. ⇒ CRLF bir yama
ağaca UYAR ama indekse UYMAZ. Ön elemeyi geçici indekste yapan bir denetim, doğru yamayı
**sağlam görünen bir sayıyla** reddeder.

Tarih: 6 Ekim 2026 · Vaka: `ARAYUZ-BANT-TAM-1005.diff` · ÜÇ oturum sırayla yanıldı

## Ölçüm — matris (EMRELIC, git 2.51.0, `core.autocrlf=true`, `js/app.js` CRLF 16155/16155)
```
YAMA                      CR    ÇALIŞMA AĞACI      İNDEKS (--cached)
1005 (depodaki)           156   çıkış 0  ✓ uyar    çıkış 1  ✗ UYMAZ
  └ CR silinmiş (LF)        0   çıkış 0  ✓          çıkış 0  ✓
1006 (yeniden üretilmiş)    0   çıkış 0  ✓          çıkış 0  ✓
```
UMIT bağımsız ölçtü (git 2.45.1, aynı ayar): çalışma ağacında **ikisi de** uyuyor.
⇒ `git apply`, `autocrlf=true` bir ağaçta bağlamı **normalleştiriyor**; indekste
normalleştirecek bir şey yok, orada bayt baytına karşılaştırıyor.

## Dört yanlış teşhis — sırayla, ve her biri öncekini düzeltirken yeni hata yaptı

| # | kim | iddia | gerçek |
|---|---|---|---|
| 1 | UMIT (tasnif) | "diff main'e UYMUYOR: ileri 1" | ölçüm doğru ama **geçici indekse** karşıydı; ağaçta uyuyor |
| 2 | **koordinatör** | "failin ben, `js/app.js`e iki blok yazdım, bağlam kaydı" | **YANLIŞ** — ölçmeden suçu üstlendi |
| 3 | UMIT (düzeltme) | "CRLF kusurdur, CR=0 kapısı kurulsun, 1005 silinsin" | ölçüm doğru, **çıkarım eksik** |
| 4 | **koordinatör** | "CR=0 kapısı EMRELIC'te yamaları KIRAR (LF yama + CRLF dosya → UYMAZ)" | **YANLIŞ** — ölçtüm: LF yama CRLF ağaca UYUYOR (çıkış 0) |

🔴 **4 en öğretici:** koordinatör o mekanizmayı yazarken **kendi ölçümü onu çürütmüştü
bile** — bir adım önce "CR silinmiş hâli de çıkış 0" diye basmıştı ve fark etmedi. Sayı
doğru okundu, mekanizma yanlış kuruldu, ve ders dosyası yanlış mekanizmayla YAZILDI.
(Commit edilmeden yakalandı, çünkü UMIT ölçümle itiraz etti.)

## Kural
1. **Ön eleme aracı hangi soruyu sorduğunu beyan etmeli.** Geçici indekste `--check`
   yapmak meşru bir ön elemedir ama **ağacın cevabı değildir**; CRLF yamada yanlış
   negatif üretir — ve yanlış negatif yanlış pozitiften zararlıdır (kimse aramaz).
2. **Uygulayan, uygulayacağı ağaçta `--check` eder.** Başka makinenin/aracın temiz ya da
   kirli raporu devredilemez. Koşucu (HAVVA) kendi ağacında ölçer.
3. **LF yama daha sağlamdır** — ölçüldü: iki testi de geçiyor, CRLF yama yalnız birini.
   ⇒ `denetim/*.diff` LF üretilmesi iyi bir hijyen kuralıdır. Ama gerekçesi
   "CR kusurdur" DEĞİL, **"LF her iki soruyu da geçer"**dir.
4. Bir yama reddedilince sorulacak ilk soru "içerik mi kaydı" değil: **"hangi şeye karşı
   sınadın — ağaca mı indekse mi?"**
5. Aynı işin iki yamasının (CRLF ve LF) birlikte durması mükerrer DEĞİLDİR.

## Niçin bu kadar kolay yanıldık
Kök zaten yazılı ve okunmadı: `.gitattributes`ın baş yorumu `autocrlf=true`nun aynı
mekanizmayla sha damgasını bozduğunu anlatıyor (*"checkout sırasında her satır sonuna CR
ekler ⇒ damga UYUŞMAZ ⇒ yayın kapısı DOĞRU çıktıyı yanlışlıkla REDDEDER"*). Semptom
farklı (damga ↔ yama), kök aynı, ve *"doğruyu yanlışlıkla reddetmek"* ifadesi birebir.

İlgili: [`D229`](D229-komutlar-palet-bayat-yayin.md) · `.gitattributes` baş yorumu ·
`CLAUDE.md §9.1` (yamalar `denetim/*.diff` olarak bekler)
