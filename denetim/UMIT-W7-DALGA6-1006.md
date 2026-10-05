# UMIT-W7-DALGA6-1006 — `kaynak_zayif` (ad değişimi) + 1734 boş yer_id beyanı

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- Bugün `kaynak_zayif` işaretli kayıt: **0** (veri diff'i inmeden); veri diff'iyle **1** (Deyrülkamer).
- JASENOVAC-BROD-1536 diff'i ek29'un :255-261 yorumlarını DEĞİŞTİRMİŞ olabilir → satır numaraları kayar; veri diff'i onun üstünde temiz kurulur.
- p0063 serbest (kilit listesinde başkasında değil) → 1734 maddesi şimdi hazırlanır.
- Kronoloji şemasında yer_id gerekçesi için hazır alan adı: **yok** (ic_not_<alan> kalıbı kullanılacak: `ic_not_yer_id`).

**Öngörü ↔ ölçüm:** 0 → 1 ✓ · J'nin yorumlara dokunduğu ✗ (dokunmamış; yorumlar :255-261'de aynen duruyor, ama İÇERİKLERİ J ile bayatlamış — Jasenovac/Brod artık 1536, HE kaynaklı) · p0063 hazırlandı ✓ (kilidini doğrulayamadım, mesajındaki "serbestse" şartına dayandım) · alan adı ✗: kronoloji verisinde **`ic_not_yer`** zaten 4 kez tam bu anlamda kullanılıyor (ör. `kronoloji_cok_500_1000.js`: "Fustat ve Katâi havuzda yok … ⇒ yer_id Kahire") ⇒ yeni ad uydurmadım, onu kullandım.

Temel: worktree `C:\atlas-w7` = origin/main **45f6a33c4e565594aae9d415c1d7a97fa0b99911**. Commit yok · `--yaz` yok · motor tuzu (uret_petek · renkler · girdi · motor_onbellek) dosya düzeyinde **0 dokunuş** · ağaç sonunda TEMİZ.

## 1. Çıktılar ve zincir

| Diff | Dosyalar | Temel | LF/CR | Tek başına main'e | Temelinde | Zincir sonunda -R |
|---|---|---|---|---|---|---|
| `KAYNAK-ZAYIF-SAYIM-1006.diff` | `arac/durum_tablosu.py` · YENİ `denetim/ARAC-KAYNAK-ZAYIF-SINAV-1006.py` (+129/−2) | main + **1006b** | CR 0 | **✗** (1006b'ye bağlı) | ileri ✓ / -R ✗ | ✓ |
| `VERI-YAPISI-KAYNAK-ZAYIF-1006.diff` | `VERI-YAPISI.md` (+43) | main | CR 0 | ileri ✓ / -R ✗ | — | ✓ |
| `KAYNAK-ZAYIF-VERI-1006.diff` | `data/yerlesimler_ek29.js` (+10/−5) | main + **JASENOVAC-BROD-1536** | CR 0 | ✓ (hunk'lar J ile çakışmıyor — ama yorum metni J'nin 1536'sını anlatır; anlamca J'ye bağlı) | ileri ✓ / -R ✗ | ✓ |
| `BOS-YERID-1734-1006.diff` | `data/olaylar_p0063.js` (+1/−1) | main | CR 0 | ileri ✓ / -R ✗ | — | ✓ |
| `KRONO-SAY-SINAV-SAGLAM-1006.diff` *(istenmedi, gerekli — §5b)* | `denetim/ARAC-KRONO-SAY-SINAV-1006.py` | main + 1006b | CR 0 | — | ileri ✓ | ✓ |

**Zincir (sırayla, hepsi ✓):** main 45f6a33c → 1006b → JASENOVAC-BROD-1536 → KAYNAK-ZAYIF-SAYIM → KAYNAK-ZAYIF-VERI → VERI-YAPISI-KAYNAK-ZAYIF → BOS-YERID-1734 (+ SAGLAM). Zincir sonunda her diff'in `-R --check`'i ✓.
⚠️ Eski iki diff (`DOGRULANMADI-SAYIM-1006.diff` · `VERI-YAPISI-DOGRULANMADI-1006.diff`) `makine/umit`te İZLİ (git status'ta görünmüyor) — "çöpe" kararını uygulamak commit ister; SİLMEDİM, senin elinde.

## 2. ② Sayaç — `KAYNAK-ZAYIF-SAYIM-1006.diff`
- `kaynak_zayif_say(Y)` (girdi.yukle'nin döktüğü kayıtlar; kayıt düzeyi ya da `s/d/v/isg` dönemi; truthy) · `kaynak_zayif_eki()` → Yerleşim satırına **HER ZAMAN** `· kaynak_zayif işaretli kayıt: N` (alan yoksa **0**); istisna → `🔴 ÖLÇÜLEMEDİ (sebep)`, rakam yok · `__main__` adları listeler (`🟡 KAYNAK_ZAYIF İŞARETLİ …`).
- Eski ad `dogrulanmadi` **sayılmaz** (sınav ④) — ad değişimi gerçek.
- **Sınav `ARAC-KAYNAK-ZAYIF-SINAV-1006.py` 12/12:** ① enjeksiyon 0/1/3 → 0/1/3 (+ `false` ve alansız sayılmaz) · dönem düzeyi = 1 kayıt · ② alan evrende yok → `…: 0` basılır, tabloda satır `…: 0 |` ile biter · ③ `Y=None` / sözlük olmayan kayıt / liste olmayan dönem → ÖLÇÜLEMEDİ, rakam yok · ④ `dogrulanmadi:true` → 0 · ⑤ gerçek: sayaç = node okuyucusu (veri diff'siz 0=0, zincirde 1=1), tabloda ek basılı.
- 1006b'nin `--sina` 9/9 zincirde de ✓.
- ÖNCE (main+1006b+J) → SONRA (tam zincir), `py arac/durum_tablosu.py`, `--yaz`'sız, çıkış 0/0 — `diff`:
```
< UYARI alan: 'dogrulanmadi' BILINEN_ALANLAR'da yok — 1 kayıtta (yerlesimler_ek29.js:Deyrülkamer …)
> UYARI alan: 'kaynak_zayif' BILINEN_ALANLAR'da yok — 1 kayıtta (yerlesimler_ek29.js:Deyrülkamer …)
< | Yerleşim (motorun okuduğu) | **4299** nokta, 93 girdi dosyası |
> | Yerleşim (motorun okuduğu) | **4299** nokta, 93 girdi dosyası · kaynak_zayif işaretli kayıt: 1 |
> 🟡 KAYNAK_ZAYIF İŞARETLİ (kaynak var ama dayanılamıyor, beyanlı): yerlesimler_ek29.js:Deyrülkamer (Dayr al-Kamer)
```
  UYARI ① inene dek sürer (yeni adla) — borcun ikinci görünür yüzü. Sıra: ② → ① (dalga 5 ölçümü: ① tek başına UYARI'yı susturur).

## 3. ① girdi.py — METİN (dosyaya dokunulmadı, diff yok)
Yer: **`arac/girdi.py:290`** (`"not": …` girdisinin son satırı `"tersi (orada alan araçta yoktu ve beyan SESSİZCE DÜŞTÜ)",`) ile sözlüğü kapatan **`:291` `}`** arası — origin/main 45f6a33c'de.
```python
    "kaynak_zayif":
           "true ise kaydın bir iddiasının kaynağı VAR ama ona DAYANILAMIYOR "
           "(kaynak zayıf — tek dayanak Vikipedi — ya da kaynaklar çelişiyor). "
           "'bulunamadı' DEĞİLDİR: bulunamadı 'aradım yok', bu 'var ama "
           "dayanamıyorum' der. Hangi iddianın işaretlendiği `neden:`de yazılır. "
           "🔴 5 Ekim 2026'da eklendi: Deyrülkamer'de (ek29) önce "
           "`dogrulanmadi` adıyla kasıtlı beyan olarak duruyordu ama hiçbir kod "
           "okumuyordu — D265 ailesi; o ad üç anlam taşıdığı için değişti. "
           "Sayacı `durum_tablosu.kaynak_zayif_say`; tanım VERI-YAPISI.md",
```

## 4. Tanım — `VERI-YAPISI-KAYNAK-ZAYIF-1006.diff`
Yerleşim bölümü, `bos:`/`kd:` bloğundan sonra, `kesinlik` öncesi (`VERI-YAPISI.md:247`). İçerik: ne demek (var ama dayanılamıyor: zayıf/çelişkili) · 🔴 `bulunamadı` ↔ `kaynak_zayif` ayrım tablosu · türetilmiş değer bu alanın konusu değil · ne zaman konur (yalnız `true`, kayıt ya da dönem düzeyi) · ne zaman kalkar · görünürlük (her zaman basılır, 0 dahil; ÖLÇÜLEMEDİ ≠ 0) · **ad tarihçesi + `hukuki_sinirlar.js`teki `dogrulanmadi`nın ayrı ve eski alan olduğu ("köşe orta noktadan türetildi"), KALDIĞI.**

## 5. Veri — `KAYNAK-ZAYIF-VERI-1006.diff` (J uygulanmış ek29 üstünde)
- `:571` Deyrülkamer `dogrulanmadi:true` → `kaynak_zayif:true`; aynı kaydın `:579` `kaynak:` dizgesindeki "'başkent' iddiası dogrulanmadi:true" → `kaynak_zayif:true`.
- `:255-256` Jasenovac yorumu: "`dogrulanmadi:true` ruhunda" → kaynak YOKLUĞU = `bulunamadı`, bir alan değildi, `kaynak_zayif` DEĞİL. + 🆕 3 satır: W18 ile ikisi HE kaynaklı 1536'ya çekildi, komşu emsali kalktı; üstteki satırlar TARİHÇE.
- `:259-261` koordinat yorumu: "`dogrulanmadi:true` damgası orijinal kayıtta duruyor" — ÖLÇÜLDÜ, YANLIŞTI: `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json`de böyle bir alan yok; damga `koordinat_durumu: "genel coğrafi bilgi — DOĞRULANMADI"` METNİ. Yorum bunu söyleyecek ve `kaynak_zayif` ile ilgisiz olduğunu belirtecek biçimde düzeltildi.
- `denetle.py` taban (main+1006b+J) ↔ zincir: ikisi de çıkış **2** (yalnız Değişmez 8 ölçülemedi — taze ağaçta `devletler_harita.js` yok). Fark: yalnız UYARI satırının alan adı + bir küme sıralama kayması ("adal 1 dönem" satırı yer değiştirdi, içerik aynı). Başka ihlal/sayı farkı YOK.

### 5b. KRONO-SAY sınavı J ile KIRILDI — `KRONO-SAY-SINAV-SAGLAM-1006.diff`
Zincirde 1006b sınavı **62/63** verdi: `YÖN1 olaylar_ek5.js yer_id = 389 — yeni 390`. Sebep: J ek5'e `yer_id`li bir fetih maddesi ekledi; 1006b sınavına **sabit 389** yazmıştım — ölçümün fotoğrafı, veri büyüyünce bayatladı (benim kusurum). Çare: yorum-sınıfı 4 vaka (`ek17 vefat_id` · `ek5 yer_id` · `ok106 madde` · `ok106 yer_id`) sabit yerine **"eski regex − yorum satırlarındaki geçiş"** olarak dosyadan ölçülür; ayrıca her biri için "hâlâ yorumda geçiş taşıyor (>0)" sınanır (kusur kalkarsa ayrı satırda öter). Sonuç **67/67** (63 + 4). Öteki sabitler (sh110/sk105/ek8/kamerika/ek21/ek22) aynı riski taşır ama bugün bayat değil — öneri: hepsi aynı yola.

## 6. İKİNCİ İŞ — 4 boş yer_id'den 3'ü
- **p0063 1734-05-31 — HAZIR:** `BOS-YERID-1734-1006.diff` → `yer_id:""` kalır, yanına `ic_not_yer:"yer_id bilerek BOŞ — bulunamadı: audiyans gezici ordugâhta; kaynak (Salamova 2007) yerini vermiyor. Ölçüm: denetim/KRONO-YER-0075.json (K4_YERSIZ_ya_da_GEZICI)"`. Alan adı kronoloji şemasının `ic_not_<alan>` kuralından (`VERI-YAPISI.md:330`) ve verideki 4 `ic_not_yer` emsalinden. Zincirde `denetle.py` farkı 0.
- **p0917taraf 1886 · 1892 — BEKLİYOR** (W17'de). Hazır metin (aynı kalıp): `ic_not_yer:"yer_id bilerek BOŞ — bulunamadı: sınır çizgisi olayı; uç noktalar kaynakta (IBS 121) yok. Ölçüm: denetim/KRONO-YER-0075.json (K2_BOLGESEL)"`. Haber gelince diff'i üretirim.
- **Refah 1906 — DOKUNULMADI** (talimat).

## 7. Kapsam uyarısı — ad değişimi başka diff'lere de dokunuyor (yalnız ölçüm)
- `VIKIPEDI-DOGRULANMADI-1006.diff` (W18, `makine/umit` 20c393af): Maroa ve Şefşâven'e **`dogrulanmadi:true`** ekliyor (eski ad). İnerse sayaç onları **0** sayar ve UYARI eski adla geri gelir ⇒ W18'in diff'i `kaynak_zayif` ile yeniden üretilmeli (dosyalar benim kilidimde değil).
- `CRES-NOT-1006.diff`: metinde "dogrulanmadi YAZILMADI" ifadesi var (alan değil, metin) — yeni adla güncellenmesi önerilir.

## 8. git status
- `C:\atlas-w7` HEAD 45f6a33c — `status --porcelain` BOŞ.
- `C:\atlas-umit` (HEAD 6ee5e156), bu dalganın dosyaları — hepsi izlenmiyor (`??`): `denetim/KAYNAK-ZAYIF-SAYIM-1006.diff` · `denetim/VERI-YAPISI-KAYNAK-ZAYIF-1006.diff` · `denetim/KAYNAK-ZAYIF-VERI-1006.diff` · `denetim/BOS-YERID-1734-1006.diff` · `denetim/KRONO-SAY-SINAV-SAGLAM-1006.diff` · `denetim/UMIT-W7-DALGA6-1006.md`.
