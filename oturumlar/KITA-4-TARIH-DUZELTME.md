# KITA 4 — TARİH DÜZELTME (`data/olaylar*.js` + `padisahlar.js`)

| alan | değer |
|---|---|
| **AD** | KITA 4 — TARİH DÜZELTME |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **SAHİP OLDUĞUN DOSYA** | `data/olaylar.js` · `olaylar_ek2.js` · `olaylar_ek5.js` · `olaylar_ek7.js` · `data/padisahlar.js` |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. 🔴 DOSYA SINIRIN — `olaylar_ek8.js`e DOKUNMA

KITA 3 aynı anda **yeni** `data/olaylar_ek8.js` dosyasına yazıyor.
Senin dosyaların yukarıdaki beş tanesi, o değil. Ve `§7`nin iki adımlı
kuralı: pathspec hem `add`de hem `commit`te — ama **sen zaten commit
etmiyorsun** (`data/` commit'i 1.MURAT'ta).

## 1. İŞİN ① — `denetim/PAKET-TARIH-DUZELTME-0911.json`, 9 düzeltme

```
dosya bazında dağılım (paketin kendi ölçümü):
   data/olaylar_ek7.js   3        data/olaylar.js       2
   data/olaylar_ek5.js   1        data/padisahlar.js    1
   data/olaylar_ek2.js   1
   ⇒ 8 + 1 yeni kayıt teyidi = 9
```
Bu paket **üç ayrı görevin** bulgularını topluyor: 5 padişah tarihi yanlış
(4 cülûs + Sultan İbrahim'in ölümü) ve yanlış olay eşleşmeleri (`D196`).

🔴 **İKİ KALEM SENDE DEĞİL — Emre'nin kararını bekliyor, YAZMA:**
```
#7   Sultan İbrahim'in hal / katil tarihi — iki seçenek
#9   Patrona Halil, `gun:` alanı        — iki seçenek
```
KITA 6 bu ikisi için Emre'ye karar dosyası hazırlıyor. **Kendi başına
seçme** (`§7.1⑥`: kaynaklar çelişiyorsa hangisini seçeceğine sen karar
vermezsin).

## 2. İŞİN ② — 🔴 TOSKANA 1532 MADDESİ, ve BU BİR DARBOĞAZ

`PAKET-VERI-DUZELTME-A` Toskana'nın dönemini **1532-01-01**'de bölüyor.
O kırılmanın kronoloji maddesi **hiçbir pakette YOK** — yalnız *"adayı
hazırlandı"* deniyor.

```
madde yazılmazsa   → KITA 2 bölmeyi yazınca `Değişmez 2` 1 AÇIK verir
madde yazılırsa    → iniş temiz
⇒ KITA 2 SENİ BEKLİYOR. Bu kalem SIRANIN BAŞINDA.
```
Maddeyi yaz (`§4` kaynak disiplini · `§8` GÜN yaz), bitince **tahtadan
KITA 2'ye haber ver** — o Toskana bölmesini ancak ondan sonra yazacak.

🔴 Ve kaynak: Floransa Cumhuriyeti'nin düşüşü / Alessandro de' Medici'nin
Duca unvanı — TDV kapsamı dışı bir coğrafya, `§4`e göre **akademik kaynak
meşru**, şartı `kaynak:` alanına **açıkça yazılması.** Gün bulunamazsa
`YYYY-01-01` ve belirsizliği metne yaz — **yıl uydurma.**

## 3. NASIL
```
① ÖNCE ÖLÇ   py arac/denetle.py — tabanı KENDİN kur (D123: iç tutarlılık
             doğrulama değildir)
② YAZ        yalnız kendi beş dosyan
③ SONRA ÖLÇ  py arac/denetle.py
④ ÖNGÖRÜ ÖNCEDEN (D022): Değişmez 2 açık sayısı ne olacak?
```
🔴 **COMMIT ETME.**

## 4. TESLİM — sayıyla
```
① 9 düzeltmenin kaçı indi
② Toskana maddesi yazıldı mı — ve KITA 2'ye haber verildi mi
③ denetle.py ÖNCE / SONRA
④ #7 ve #9 için Emre'ye götürülecek seçeneklerin NET hâli (KITA 6'ya da
   tahtadan geçir — mükerrer araştırma olmasın)
⑤ ÖNGÖRÜN TUTTU MU
```

## 5. HABERLEŞME (`§7.1`)
🔴 Kendi pencerene yazmak = cevap vermemek. Koordinatöre
`mcp__ccd_session_mgmt__send_message`. Yatay (KITA 2 · KITA 6) tahtadan:
`py arac/tahta.py yaz --kim "KITA 4" --kime "KITA 2" --mesaj "..."`
**Aksaklık BEKLEMEZ** (`§7.1⑥`) — Toskana maddesi bir DARBOĞAZ, takılırsan
bitirmeyi bekleme, **hemen söyle.**
