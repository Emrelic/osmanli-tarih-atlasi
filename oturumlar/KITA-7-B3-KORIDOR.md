# KITA 7 — B③ KORİDOR (yamayı geri getir + ağız genişliği kusuru)

| alan | değer |
|---|---|
| **AD** | KITA 7 — B3 KORİDOR |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **SAHİP OLDUĞUN DOSYA** | `arac/uret_petek.py` — **YALNIZ SEN** · + `denetim/OLCUM-B3-*-0912.*` |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. 🔴 ÖNCE: YAMAN GERİ ALINDI VE KUSUR BENDEYDİ

Dün gece yazdığın B3 yaması **geri alındı — senin bir hatan yüzünden
değil, benim sıralama hatam yüzünden.** Koşu 9 bitmişti ama **yayın
henüz inmemişti**; `arac/uret_petek.py`nin sha256'sı değişince
`data/altlik.js`in `URETIM_IZI`i bayatladı ve yayın kapısı reddetti.

```
🟢 YAMAN KAYBOLMADI   denetim/YAMA-B3-UYGULANMIS-0912.diff  (55 insertion)
🟢 YAYIN İNDİ         a8feb8d · damga r7487
🟢 arac/ SERBEST      hiçbir koşu canlı değil — ŞİMDİ UYGULANABİLİR
📌 DERS KAYDEDİLDİ    `D198` — donukluk koşunun bitişine değil
                      YAYININ İNİŞİNE kadar sürer
```

## 1. İŞİN ① — yamayı geri uygula
```bash
git apply denetim/YAMA-B3-UYGULANMIS-0912.diff
```
⚠️ **`git checkout` KULLANMAN GEREKİRSE:** bu depoda `core.autocrlf=true`
ve `.gitattributes` YOK. Düz `git checkout -- arac/uret_petek.py` dosyayı
CRLF'e çevirir, **içerik aynı kalır ama sha256 DEĞİŞİR** ve `git diff`
BOŞ çıkar — yani kusur görünmez. Doğrusu:
```bash
git -c core.autocrlf=false checkout -- arac/uret_petek.py
```

## 2. İŞİN ② — 🔴 ASIL KUSUR: ÖLÇÜLEN ŞEY AĞIZ DEĞİL, GÖVDE ORTALAMASI

```
uret_petek.py:1658    w_der = 2*area/length
```
Bu **gövde ortalama genişliğini** ölçüyor. Emre'nin kuralı ise **ağız
genişliği**: bir koridorun *boğazı* dar mı, gövdesi dar mı — ikisi
farklı şeyler ve bu ölçü ikisini ayırt etmiyor.

```
① ÖLÇ    kaç koridorda ağız ile gövde ortalaması AYRIŞIYOR, ve ne kadar
         (histogram · en büyük 10 sapma · km cinsinden)
② ÖNGÖRÜ ÖNCEDEN YAZ (D022): sapmanın medyanı ne olacak? ÖLÇMEDEN yaz.
③ TASARLA ağız genişliğini ölçen bir ölçü öner — ve `_b3_koridor_kirp`
         (uret_petek.py:1614-1685) çağrısı :4581'de, **kıyı kırpmasından
         yalnız 6 satır ÖNCE** (:4587). Sıra önemli: `D017` — bir
         düzeltme doğru çalışıp sonraki aşama onu geri alabilir.
④ SINA   önce/sonra karşılaştırma GÖRSELİ üret (PNG). Emre eşiği
         GÖZÜYLE seçecek — uydurma, SERİ üret.
```

🔴 **Sayı uydurma:** bir eşik önerirken *"makul görünüyor"* bir gerekçe
değildir. `D129`: **bir eşik, ölçüldüğü tabanla birlikte taşınır** —
taban değişince yeniden türetilir.

## 3. 🔴 KOŞU BAŞLATMA
`arac/uret_petek.py`yi **koşturma** (~40 dk, `§7`: yalnız Oturum 0).
Ölçümlerini motoru **import ederek** ya da küçük bir kesitte yap. Uzun
bir iş başlatacaksan `§7`nin kaynak kuralı: **önce tahtaya yaz, 60 sn
bekle** — iki koşu aynı CPU'yu paylaşırsa süre ölçümü de bozulur.

## 4. TESLİM — sayıyla
```
① yama geri uygulandı mı · sha256 doğrulandı mı
② ağız ↔ gövde sapması: kaç koridor, medyan, en büyük 10
③ ÖNGÖRÜN TUTTU MU
④ önerdiğin ölçü + önce/sonra PNG
```
🔴 **COMMIT ETME** — `arac/` commit'i 1.MURAT'ta.

## 5. HABERLEŞME (`§7.1`)
Koordinatöre `mcp__ccd_session_mgmt__send_message`. Yatay tahtadan.
**Aksaklık BEKLEMEZ** (`§7.1⑥`).
