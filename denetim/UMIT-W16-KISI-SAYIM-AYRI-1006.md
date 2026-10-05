# UMIT-W16-KISI-SAYIM-AYRI-1006 — "kaynaklı kişi" sayacında bulunamadı beyanının ayrılması

Yama: `denetim/KISI-SAYIM-AYRI-1006.diff` (sha256 `b4d1123b0b30f016…`, 121 satır, CR 0) — **tek dosya:
`denetim/ARAC-KISI-ORNEKLEM-1006.py`** (benim aletim). `arac/` dosyalarına YAZILMADI (kilit istenmedi); motor tuzu dosyalarına dokunulmadı.
Taban: `origin/main` `167bb2bd`; sayılar `EDIGU → 01 → 02 → 03` uygulanmış hâlde ölçüldü (geçici indeks). Commit yok.

## ① "Kaynaklı kişi" sayısını basan yerler — ölçüldü
Arama: `git grep` `KISILER|kisiler\.js` ve `kaynakl[ıi]|kaynaks[ıi]z` — `arac/*.py`, `arac/*.js`, `js/*.js`, `*.html`, `denetim/ARAC-*` (main + `C:\atlas-umit`).
| yer | kişi dosyasını okuyor mu | kişi KAYNAK sayısı basıyor mu |
|---|---|---|
| `denetim/ARAC-KISI-ORNEKLEM-1006.py:17` (eski) | evet | **EVET — tek sayaç.** `print(f"toplam … · kaynaklı {len(K)-len(kaynaksiz)} · kaynaksız …")`. Okuyucusu yok (kapıya/tabloya bağlı değil). Zincir hâlinde **"kaynaklı 288 · kaynaksız 0"** basıyor (29 beyanı kaynak sayıyor — D265 vakası birebir) ve ardından `random.sample` evren 0 olduğu için **ÇÖKÜYOR** (ValueError). |
| `arac/durum_tablosu.py:98,111` | evet (`kisi` katmanı) | hayır — yalnız kimlik alanı `devlet` (harita deliği evreni) |
| `arac/durum_tablosu.py:532` | evet (ham metin) | hayır — `ovgu:` sayıyor (kartvizit) |
| `arac/denetle_gorunur.py:197` | evet | hayır — `tur` ∉ `TUR_ADI` taraması |
| `arac/denetle.py` | **hayır** (KISILER/kisiler.js geçmiyor) | hayır — dosyadaki kaynaksızlık tavanı (`ARAC-KAYNAK-TAVAN-SINAV-1004`) YERLEŞİM kaynağıdır |
| `js/app.js:9150, 9397-9400, 9976, 10131` | evet | hayır — dizin/kart/kimlik; kaynak sayacı yok |
| `arac/paketle.py` | kisiler.js'i paket_12'ye gömer | hayır |
| `CLAUDE.md §1.5` (durum_tablosu üretir) | — | kişi kaynağı satırı YOK |
| `denetim/ARAC-NOT-CELISKI-1006.py` (W12) | evet, `kaynak` METNİNİ okur | hayır — sayaç değil, yıl çelişkisi tarar (beyan metinlerindeki "5 Ekim 2026"nın ona etkisi ölçülmedi) |
| raporlarım (`UMIT-W16-KAMPANYA-0x`) | — | metin içi anlık sayı (sayaç değil); 03 raporu zaten 259/29 ayrı yazıyor |

## ② Yapılan — `ARAC-KISI-ORNEKLEM-1006.py`
Dört **ayrık** kova, `kaynak` alanının BAŞINDAN ölçülür (sabit sayı yok):
`TDV kaynaklı` = "TDV:" ile başlar · `başka kaynaklı` = dolu, ne "TDV:" ne "bulunamadı" · `bulunamadı BEYANI` = "bulunamadı" ile başlar (baş boşluk/büyük harf tolere) · `kaynaksız` = boş/yok. Toplam ayrıca basılmaz.
Örneklem artık yalnız kaynaksız evren ≥ 20 ise çekilir (çöküş giderildi); `3e4b3a98`'in kisiler.js'i verilince tohum-1006 örneklemi **20/20 birebir** yeniden üretiliyor (eski çıktıyla `diff` boş).

**Çıktılar:**
| hâl | TDV kaynaklı | başka kaynaklı | bulunamadı BEYANI | kaynaksız |
|---|---|---|---|---|
| main (ham, 167bb2bd) | 20 | 2 | 0 | 266 |
| main + EDIGU → 01 → 02 → 03 | **257** | **2** | **29** | **0** |

🔴 **İstenen "TDV kaynaklı: 259" etiketi ölçümle uyuşmuyor:** 259'un **2**'si TDV değil —
`napolyon-bonapart` ve `francesco-morosini` `kaynak:"Encyclopaedia Britannica, britannica.com/…"` (kampanyadan ÖNCE de kaynaklı 22'nin içindeydiler).
"TDV kaynaklı: 259" basmak D265'in aynısını küçük ölçekte yapardı (ayrımı basmayan sayı). Bu yüzden ayrı kova açıldı.
İstenen iki sayaç ile ilişki: **kaynaklı (TDV + başka) = 259** · **bulunamadı BEYANI = 29**.

## ③ Kapı / tavan — ÖNERİ, yazılmadı
Hiçbir kişi kaynak sayacı bugün bir kapıya ya da tavana bağlı DEĞİL. Bağlanacaksa öneri (`arac/durum_tablosu.py` §1.5 satırı ve/veya `denetle.py`; ikisi de koordinatörün dosyası, kilit gerekir):
- **kaynaksız kişi: tavan 0** — yeni kişi kaynaksız eklenemez (yalnız gerileme bloke eder).
- **bulunamadı BEYANI: tavan 29**, yalnız aşağı iner (beyan kaynağa dönünce düşer, ODAK-TAVAN `--tavan-yaz` deseni); yeni beyan adıyla listeye girer (sayı değil liste — `ODAK-TAVAN.json bilinen_kusur` emsali).
- **§1.5 satırı önerisi:** `Kişi kaynağı | TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0 · kapsam: data/kisiler.js 288`.

## ④ Sınav — iki yönlü + mutasyon
`py denetim/ARAC-KISI-ORNEKLEM-1006.py --sina` (veri okumaz) → **GEÇTİ, 9/9**:
- yön 1: `bulunamadı — …` ve `  Bulunamadı …` → beyan, TDV sayısına girmiyor.
- yön 2: `TDV: kemal-reis (… TDV'de bulunamadı …)` (burak-reis biçimi) → TDV, beyana girmiyor.
- TDV-dışı: `Encyclopaedia Britannica …` ve `Britannica (TDV'de bulunamadı)` → başka; ne TDV ne beyan.
- boş/boşluk/alan yok → kaynaksız; kovaların toplamı kayıt sayısına eşit (ayrıklık).
**Sınavın sınavı (mutasyon):** ölçütü "başlar" yerine "içerir" yapınca → KALDI (b, i beyana kaçtı) · "başka" kovasını kaldırınca → KALDI (h, i TDV'ye kaçtı). İkisi de çıkış 1.

## Git
- `C:\atlas-w16`: temiz (0 satır).
- `C:\atlas-umit`: `?? denetim/KISI-SAYIM-AYRI-1006.diff` · `?? denetim/UMIT-W16-KISI-SAYIM-AYRI-1006.md`.
- Yama main'e ileri ✓ / -R ✗.

---
## EK 1006b — MUTASYON KAPAT (koordinatör, 6 Ekim 2026)
Yama: `denetim/KISI-SAYIM-AYRI-1006b.diff` (sha256 `51d84bd37d1d0c82…`, 35 satır, CR 0) — yalnız `sina()` fikstürleri ve sayım beklentisi.
**Sıra zorunlu:** `KISI-SAYIM-AYRI-1006.diff` → `1006b` (1006 üstüne ileri ✓ · -R ✗ · 1006'sız ✗). 1006 main'de (15cb3138) yalnız DOSYA olarak duruyor, alete uygulanmamış.

**Düzeltme kaydı:** 1006 teslimindeki "mutasyon sınavında test KALIYOR" cümlesi "sınav KALDI = öttü, mutant öldü" demekti; sağ kalan
mutasyon yoktu. Ama ① TDV önekinin "başlar↔içerir" mutasyonu orada HİÇ denenmemişti (denenen beyan önekiydi) — o soru gerçekten açıktı.

**Eklenen fikstürler** (`TDV`yi İÇERİR, onunla BAŞLAMAZ): `j`, `k` = `napolyon-bonapart` ve `francesco-morosini`'nin veride BİREBİR duran
kaynak metni ("Encyclopaedia Britannica … — TDV'de müstakil madde YOK …") · `l` = "Britannica · TDV: napolyon karşılaştırıldı, madde yok"
(iki nokta üst üsteli "TDV:" ortada). Üyelik ADIYLA sınanır; sayım beklentisi (2, 5, 2, 3) her kovanın en az bir üye taşımasını şart koşar.

**Mutasyonlar GERÇEKTEN uygulandı** (`kova()` metni değiştirilip ayrı kopyada koşuldu; asıl dosya dokunulmadı):
| mutasyon | `--sina` | napolyon / morosini (gerçek veri) |
|---|---|---|
| M0 mutasyonsuz (geri alınmış hâl) | **GEÇTİ** (çıkış 0, 12/12) | başka / başka |
| M1a TDV `startswith("TDV:")` → `"TDV" in s` | **ÖTTÜ** (çıkış 1) — i, j, k, l TDV'ye kaçtı | **TDV / TDV** |
| M1b → `"TDV:" in s` | **ÖTTÜ** — yalnız `l` yakaladı | başka / başka ⚠️ |
| M2 beyan `startswith` → `in` | **ÖTTÜ** — b, i beyana kaçtı | başka / başka |
| M3a başka kovası silindi → dolu ise TDV | **ÖTTÜ** — h…l TDV'ye, başka kovası 0 | **TDV / TDV** |
| M3b başka kovası silindi → kaynaksız | **ÖTTÜ** — h…l kaynaksıza | **kaynaksız / kaynaksız** |

**Ölçülen cevap (②):** "başka" kovası silinince iki kaydın nereye düştüğü silme biçimine bağlı. 1006 öncesi aletin davranışı (dolu=kaynaklı)
M3a'dır ⇒ **TDV'ye** düşerlerdi — eski "TDV kaynaklı: 259" yanılgısının ta kendisi. M3b biçiminde kaynaksıza düşerler. İki biçimde de sınav öter.
⚠️ **M1b'yi gerçek veri YAKALAMAZDI:** iki gerçek kaydın metni "TDV'de" der, "TDV:" demez; mutant canlı veride doğru sayı basar. Yalnız `l`
fikstürü öldürüyor — fikstürün gerçek kayıtlardan geniş tutulması bu yüzden şart.
Sayaç çıktısı değişmedi (ham main: TDV 20 · başka 2 · beyan 0 · kaynaksız 266; zincir: 257 · 2 · 29 · 0).
Git: `C:\atlas-w16` temiz · `C:\atlas-umit`: `?? denetim/KISI-SAYIM-AYRI-1006b.diff` · `M denetim/UMIT-W16-KISI-SAYIM-AYRI-1006.md` (bu ek).
