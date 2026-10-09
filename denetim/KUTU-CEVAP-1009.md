# KUTU-CEVAP-1009 — parti-emrelic-0085 · 0086 · 0087 için CEVAP.json (66 madde)

UMIT derleme işçisi · 9 Ekim 2026 gecesi · `origin/main` 9d76de1e (fetch sonrası) · **commit/push YOK** (ne atlas ne ClaudEmre depolarında) · git stash yok · paket görselleri açılmadı/kopyalanmadı · **yeni ölçüm yok**, yalnız derleme.

## 1. Dosya yeri — koddan nasıl bulundu
- **Hüküm sözlüğü:** `C:\claudemre\ClaudEmre\kutu\asama.py` `HUKUMLER` (tek otorite; `kutu.py`/`ozet.py` buradan ithal eder). Yalnız oradaki anahtarlar kullanıldı.
- **Okuyucu:** `ozet.py` `paketler()` → `GIDEN/<parti>/CEVAP.json` → `c.get("maddeler", {})` → `madde["hukum"]`. `GIDEN = ClaudEmre\kutu\giden` (açık depo çalışma ağacı).
- **Eşitleme:** `C:\claudemre\ClaudEmre-kutu\tasi.py` `_cevaplari_esitle`: `CEVAP.*` dosyaları `ClaudEmre\kutu\giden\<parti>\` ↔ `ClaudEmre-kutu\paketler\<parti>\` arasında **üç yönlü** eşitlenir. Bu üç paketin klasörü açık depoda `.git/info/exclude` ile dışlanmış (`git check-ignore` satır 86-88), yani açık depoya commit edilmez.
- Şema: mevcut örneklerden (ör. `paketler/parti-emrelic-0082/CEVAP.json`; 134 CEVAP tarandı): üst `damga · cevap_tarihi · paket · cevaplayan · madde_sayisi · hukum_dagilimi · not · maddeler`; madde başına `hukum · not · kaynak_rapor (+ commit)`.

**Yazılan yerler:**
| yer | durum |
|---|---|
| `C:\claudemre\ClaudEmre-kutu\paketler\parti-emrelic-008{5,6,7}\CEVAP.json` | **YAZILDI** (gizli depo; izlenmeyen dosya, commit YOK) |
| `C:\atlas-umit\denetim\KUTU-CEVAP-1009\parti-emrelic-008{5,6,7}-CEVAP.json` | **YAZILDI** (bayt bayt aynı kopya, `cmp` ✓) |
| `C:\claudemre\ClaudEmre\kutu\giden\parti-emrelic-008{5,6,7}\CEVAP.json` | **YAZILMADI** — kutunun doğrudan okuduğu yer burası, ama AÇIK depo ağacının içinde (git-dışlanmış olsa da). Şartname gereği yazılmadı. |

⚠️ **Eşitleme notu (koordinatör bilsin):** bir sonraki `ESITLE`/saatlik koşuda `tasi.py` bu dosyayı "depo değişti, yerel yok" sınıfında görüp `ClaudEmre\kutu\giden\…`e **indirir** (UMIT kutusunda görünür). Ama bu sınıf (`c_gelen`) **commit tetiklemez**: `ClaudEmre-kutu`da dosya, başka bir değişiklik `git add -A`yı tetikleyene kadar izlenmeyen kalır ⇒ EMRELIC'e ancak ondan sonra gider. Hemen gitmesi isteniyorsa: ya gizli depoda elle commit+push, ya da dosyalar `ClaudEmre\kutu\giden\…`e konup `ESITLE.bat` (o zaman `c_giden` → commit+push). İkisi de bu işçinin yetkisi dışında.

## 2. Hüküm dağılımı
| hüküm | 0085 | 0086 | 0087 | toplam |
|---|---|---|---|---|
| cozuldu | 4 | 0 | 9 | 13 |
| kosu-bekliyor | 10 | 8 | 13 | 31 |
| zaten-dogru | 6 | 1 | 2 | 9 |
| sirada | 5 | 1 | 0 | 6 |
| olculecek | 1 | 4 | 0 | 5 |
| senin-kararin | 2 | 0 | 0 | 2 |
| **madde** | **28** | **14** | **24** | **66** |

Kural uygulaması: veri main'e indi + etkisi haritada ⇒ `kosu-bekliyor` (KOSU 21 7 Ekim'de, bu geceki inişlerden ÖNCE) · kronoloji/ok/arayüz main'e indi ⇒ `cozuldu` + commit · motor yaması önerildi yazılmadı ⇒ `sirada` · main'e inmemiş iş ⇒ `sirada`.
Kullanılan main commit'leri (hepsi `git merge-base --is-ancestor <sha> origin/main` ✓): 658a7552 · f6ff142d · 23c08363 · cefc73bb · 04971c2a · e3604721 · be5cc3c0 · 8584cfce · 0e45a9b9 · 647bcf31 · a36928df · 1edf7f9a · aab05acd · bc3c467a.

## 3. Dayanağı ZAYIF / emin olunamayan maddeler
- **0086 H-0004 · H-0005 · H-0006 · H-0014 → `olculecek`:** hiçbir işçi ölçmedi; tek iz `oturumlar/KUTU-GORSEL-KUNYE-SARTNAME.md`deki sınıflandırma ("varlık sorusu"). H-0014 ("sınırları belli boş bölge") orada bile anılmıyor. Koordinatörün "66/66 iz var" ölçümü bu dördü için yalnız sınıflandırma izidir.
- **0085 H-0028 → `olculecek`:** görselin yeri okunamadı (EEK-DOGU-1008); Cizre eşleşmesi tahmin.
- **0085 H-0006 → `senin-kararin`:** raporlar "künye kararı koordinatörde" diyor; Emre'ye seçenek olarak sundum. Koordinatör kendi hükmü verecekse `sirada`ya çevrilmeli.
- **0085 H-0027 → `zaten-dogru`:** cep gerçek (①), ama kimliği/ucu kusurlu ve çaresi H-0006 künye kararına bağlı. `senin-kararin` de savunulabilir.
- **0085 H-0014 → `zaten-dogru`** (koordinatör kuralı): Sivrihisar doğru; ama Ankara 1404→1406 düzeltmesi 23c08363'te indi ve haritada koşu bekliyor — notta yazılı.
- **0085 H-0003 · H-0011 · H-0012 → `sirada`:** veri doğru/kısmen doğru, çare motor (+nokta). H-0012'de Emre'nin sorusu "mekanizmayı açıkla"ydı; cevap notta.
- **0085 H-0023 → `sirada`:** çapraz yok, çare `js/app.js` önce/sonra kırpmasının daraltılması; `origin/main`de `oncesiSonrasiKirp` değişmemiş (ölçüldü) ⇒ yazılmadı.
- **0085 H-0008 → `sirada`:** düzeltme yalnız `origin/makine/havva-h0008` e0b51b88'de; main'de değil. ⓒ Afrika sebebi bulunamadı.
- **0086 H-0003 → `kosu-bekliyor`:** "büyük ölçüde doğru" + Taşkent düzeltmesi indi; `zaten-dogru` da savunulabilir.
- **0087 H-0003 · H-0004:** karışık (çoğu gerçek / açıklama + Doğubayazıt veri düzeltmesi 8584cfce) ⇒ baskın `kosu-bekliyor`.
- **0087 H-0019 → `cozuldu`:** Kotor `g:0→1` f6ff142d'de, paket_13 aynı commit'te yenilendi, rapor "motor `g` okumuyor, koşu gerekmez" diyor; yayında (r11995) olduğu varsayımı 7a5e2f1a'ya dayanıyor, tarayıcıda yeniden ölçülmedi.
- **Yayın notu:** be5cc3c0 (ok t gününün sonunda düşer) sürüm damgası almadı — ancak koşu commit'indeki damgayla yayına gider (0087 H-0005/H-0021 notlarında anıldı). 0087 H-0009, aynı paketteki H-0008'in tekrarı; `once-cozuldu` önceki paket için olduğundan aynı hüküm (`kosu-bekliyor`) verildi.

## 4. Doğrulama — `ozet.py`'nin kendi okuyucusuyla
Açık depoya dokunmamak için `ozet.GIDEN`/`ozet.CIKTI` scratchpad'deki bir kopyaya (3 × PARTI.json + PARTI.md + CEVAP.json, görselsiz) yönlendirildi, `ozet.uret()` ve `asama.asama_of()` çağrıldı:
```
uret → (3 paket, 0 işlenmemiş, 0 yarım, 42 açık madde, 2 karar bekliyor, 0 soru, 0 sohbet)
parti-emrelic-0087 madde 24 hukumlu 24 hukumsuz 0 tanimsiz 0
parti-emrelic-0086 madde 14 hukumlu 14 hukumsuz 0 tanimsiz 0
parti-emrelic-0085 madde 28 hukumlu 28 hukumsuz 0 tanimsiz 0
KUTU.md: 🟢 İŞLENMEMİŞ PAKET YOK · 24/24 · 14/14 · 28/28
Hüküm dağılımı — 66 madde: ⏳31 · ✅13 · 🟢9 · 🔵6 · 🟡5 · 🔴2
🔴 SENDEN CEVAP BEKLENEN — 2 SORU: 0085/H-0006 · 0085/H-0018
```
Üreteç ayrıca kendi içinde sınadı: madde kümesi = PARTI.json kümesi (3/3) · sözlük dışı hüküm 0 · gerekçe şartlı hükümlerde (`senin-kararin`) boş not 0.

## 5. Üretici
`kutu_cevap_1009.py` (scratchpad; depoya alınmadı). Hüküm metinleri bu betikteydi; yeniden üretim `--cikti <dizin>` / `--kutu <paketler kökü>` ile (var olan CEVAP.json'u EZMEZ).

**YENİ DOSYALAR:**
- `C:\atlas-umit\denetim\KUTU-CEVAP-1009.md` (bu rapor)
- `C:\atlas-umit\denetim\KUTU-CEVAP-1009\parti-emrelic-0085-CEVAP.json` · `-0086-CEVAP.json` · `-0087-CEVAP.json`
- `C:\claudemre\ClaudEmre-kutu\paketler\parti-emrelic-0085\CEVAP.json` · `…-0086\CEVAP.json` · `…-0087\CEVAP.json` (gizli depo, commitlenmedi)
