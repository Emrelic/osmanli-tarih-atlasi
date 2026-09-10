# SİCİL İNŞA — ilerleme

**Oturum:** SİCİL İNŞA (açılışta OPUS HAZIR KITA 402) · Opus 5 · 2026-09-10
**Koordinatör:** 1.MURAT HÜDAVENDİGAR
**Görev:** `kutu/giden/parti-*/CEVAP.json` külliyatından `ClaudEmre/kutu/SICIL.md`yi
yeniden kur — madde başına değil **KARAR başına**.

---

## TESLİM — SAYIYLA

```
SICIL.md      11 kayıt  →  11 + 25 = 36 kayıt   (S-001..S-011 KORUNDU, silinmedi)
bağlanan      500 hükümlü maddenin 500'ü        ARTIK: 0
✅ ÇÖZÜLDÜ    120 madde   (yalnız delil_commit DOLU olanlar — S-011 kuralı)
🟠 İDDİA      207 madde   ("cozuldu" ama atlas git'inde iz yok)
dosya         5.590 → 45.045 karakter · git: 759 insertion, 0 deletion
```

**Kabul ölçütü karşılandı:** *«500 hükümlü maddenin TAMAMI bir sicil kaydına
bağlanmış olacak · N kayıt · her kayıtta kaynak madde listesi · ✅ yalnız
commit'i doğrulanmış olanlarda»* — 25 kayıt, her birinde `<details>` içinde
kaynak madde listesi, ✅ yalnız 120'de.

---

## ① NE ÖLÇTÜM

**Devredilen beş rakam bağımsız ölçüldü, beşi de tuttu:** 45 paket · 681 madde ·
120 doğrulandı · 207 iz-yok · 172 iddiasız · 181 açık · 1 çürük.

🟢 **Ve bir şey daha çıktı: «hükümlü» tanımı `delil`den değil `hüküm`den türüyor
ve çapraz tablo TAM ayrışıyor, tek istisna yok:**
```
sirada 128 + olculecek 48 + kosu-bekliyor 5 = 181  →  hepsi delil_atlas="acik"
cozuldu 328                                        →  120 dogrulandi · 207 iz-yok · 1 curuk
zaten-dogru 137 + tekrar 19 + gerek-yok 7
              + bayat 7 + kapsam-disi 2 = 172      →  hepsi "iddiasiz"
```
`delil_commit` dolu madde sayısı da tam **120** — `dogrulandi` ⇔ commit var, birebir.

**Koordinatörün sorduğu risk — «çoğu tekil çıkarsa sicilin biçimi yanlıştır» —
GERÇEKLEŞMEDİ:** 500 madde 25 karara indi, tekil (n=1) küme sayısı **2**
(`K02` antlaşma metni · `K04` kaynak politikası), en büyük küme 44-64 arası.

---

## ② NEYİ BULAMADIM / ÖLÇMEDİM

- **Kümeleme isabet oranı %100 DEĞİL.** İki bağımsız 40'lık örneklemle sınadım
  (sabit tohum 20260910 ve 777). İlk örneklemde **~%27** yanlış/tartışmalı atama
  ölçtüm; kuralları düzelttikten sonra **ikinci, AYRI tohumlu** örneklemde
  **~%20** (bunun ~%12'si açık hata, kalanı iki kümenin de savunulabildiği
  **çok konulu** şikâyetler — Emre bir maddede sık sık iki şey soruyor).
  ⚠️ İlk örneklemi kuralları DÜZELTMEK için kullandığım için o oran bir isabet
  ölçüsü değildir; bağlayıcı olan **ikinci** ölçümdür.
- **Kaydın KARAR metinlerini temsilî `not` alanlarından yazdım**, 500 maddenin
  hepsini tek tek okumadım. Okuduklarım: 43 + 18 = **61 madde tam metniyle**
  (elle atananlar) + 13 kümenin commit taşıyan notları.
- `S-011`in ikinci kuralı (*«sicilde ✅ görmek yetmez, VERİYE BAK»*) bu turda
  **uygulanmadı** — 120 commit'in atlas git'inde gerçekten o değişikliği
  yaptığını **doğrulamadım**; `delil_commit` alanına güvendim. Bunu A/B/C
  oturumları ölçüyor.

---

## ③ ARAÇLAR (hepsi `denetim/`, hiçbiri `CEVAP.json`a YAZMAZ — D098)

| alet | ne yapar |
|---|---|
| `ARAC-SICIL-OKU-0910.py` | 45 CEVAP.json + PARTI.json → tek satırlık döküm |
| `ARAC-SICIL-CAPRAZ-0910.py` | hüküm × delil_atlas çaprazı · 500'lük hükümlü dökümü |
| `ARAC-SICIL-KUME-0910.py` | **kümeleyici** — sıralı kural tablosu + ELLE tablosu |
| `ARAC-SICIL-ARTIK-0910.py` | ARTIK kovasının TAM metnini döker (elle atama için) |
| `ARAC-SICIL-SINAV-0910.py` | küme künyeleri · **tohumu değiştirilebilir** örneklem · not dökümü |
| `ARAC-SICIL-YAZ-0910.py` | `SICIL.md`nin külliyat bölümünü **ÜRETİR** |

**Bağlanma:** şikâyetten 412 · ELLE 63 · cevaptan 25.

---

## ④ BU TURDA ÇIKAN DÖRT KUSUR — üçü kendi aletimde

### 🔴 ① ÜRETİM SINIRI, BELGENİN İÇİNDE GEÇEBİLECEK BİR İFADE OLAMAZ
Üreticinin çapası `"# KÜLLİYAT SİCİLİ"` başlığıydı. Belgenin **elle yazılan**
üst bölümüne o başlığın **adını** bir cümlenin içinde yazdım
(*«…altında **`# KÜLLİYAT SİCİLİ`** var»*) ve `split()` dosyayı **cümlenin
ortasından kesip ON BİR ELLE YAZILMIŞ KAYDI SİLDİ.**
🟢 `git show HEAD:kutu/SICIL.md` ile geri alındı (dosya takipliydi, kayıp yok).
🟢 Çapa artık bir **HTML yorumu**: `<!-- URETIM-SINIRI ... -->`.
📌 `D155`in kardeşi: orada çapa *"zaten var"* diye betiği sessizce durduruyordu;
burada çapa **yanlış yerde bulundu** ve içerik sildi. ⇒ *Bir sınır işareti,
sınırladığı belgede geçemeyecek bir dizgi olmalıdır.*

### 🔴 ② ALT-DİZGİ ARAMASI — `tdv` · `tabi` · `hatay` (D159'un üç yeni vakası)
```
"tdv"    CEVAP metninde her yerde geçiyor  → 92 maddeyi "kaynak politikası" saydı
"tabi"   "TABİKİ" · "tabii" içinde eşleşti → Cem Sultan maddesini VASSAL saydı
"hatay"  "bu HATAYI" içinde eşleşti        → iki renk şikâyetini 1923 SINIRI saydı
```
🟢 Üç ayrı çare, üçü de farklı: **kelime başı sınırı** (regex), **anahtarın
kendisini bırakma** (`tabi` silindi), **kelime SONU sınırı** (`hatay#`).
⚠️ Ve ilki tek başına yetmiyordu: `"tabiki"` de bir kelime **başıdır**.

### 🔴 ③ CEVAP METNİNİ ŞİKÂYETLE AYNI KEFEYE KOYMAK
Kümeleme ilk sürümde `başlık + metin + not` birleşiğinde arıyordu. **Cevap metni
her şeyi anıyor** — istek cinsinden anahtarları da (`ek okuma`, `tarali`, `tdv`).
🟢 Çare **iki geçiş**: önce ŞİKÂYET (Emre'nin kendi sözü), sonra — yalnız
**kök sebep kümeleri** için — CEVAP. Dört yanlış atamanın dördü de bu geçişten
geliyordu.

### 🟡 ④ SİCİL SÖZLÜĞÜ ÜÇ HÜKMÜ İFADE EDEMİYORDU
`bayat` · `kapsam-disi` · ve *"çözüldü dedi ama izi yok"* — üçünün de sicilde
imi yoktu. Eklendi: 🟠 **İDDİA EDİLDİ** · 🕰 **BAYAT ŞİKÂYET** · ⛔ **KAPSAM
DIŞI**. 🟠 koordinatörün talimatıdır; öteki ikisi veride **vardı**, sözlükte yoktu.

---

## ⑤ AÇIK KALANLAR

1. **207 iz-yok maddesi** — A/B/C oturumları doğruluyor; raporları gelince
   `ARAC-SICIL-YAZ-0910.py --yaz` yeniden koşulur ve 🟠'ların bir kısmı ✅ olur.
   **Sicil metnine elle dokunulmaz**, ölçüm yeniden koşulur.
2. **181 açık madde** (sirada 128 · olculecek 48 · kosu-bekliyor 5) sicile
   **girmedi** — hükümsüz olduğu için. İstenirse ayrı bir "AÇIK KALEMLER"
   bölümü aynı aletle üretilebilir.
3. **`S-013` (doğrulama) ve `S-012` (noktasızlık)** kovaları kapanmaz, akar —
   yeni paket geldikçe büyürler.
4. Kümeleme **%15-20 hata payı taşıyor**; bir kayıt aranırken bulunamazsa
   komşu kümeye de bakılmalı. Kesin çare: her maddenin tek tek okunması.
