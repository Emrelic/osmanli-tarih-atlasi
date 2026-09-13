# DALGA SINIF2 — 14 Eylül 2026 · ortak brifing (her paket işçisi ÖNCE bunu okur)

Koordinatör: **1.MURAT**. Plan: `denetim/PAKET-SINIF2-0914.md` (senin paketinin bölümü) + `denetim/PAKET-SINIF2-0914.json` (`is_paketi` = senin paketin; madde listesi, sınıf, dosyalar). Emre'nin madde metni: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden\parti-emrelic-<paket>\PARTI.md`, önceki cevap aynı klasörde `CEVAP.json` (YALNIZ OKU).

## Okunacaklar (sırayla)
CLAUDE.md §2 · §3 (Değişmez 1-2-7) · §3.5.1 (iki uç) · §4 (kaynak kuralı, **ATLAS REFERANS DEĞİLDİR**, şartlı komşu günü, hassasiyet, bayrak kuralı) · §7 (dosya sahipliği, ad alanı, pathspec) · VERI-YAPISI.md (yazacağın şema).

## Kaynak kuralı (kısa)
TDV birincil (ölü slug 302; canlı slug yanlış madde olabilir — GÖVDEYİ OKU; dar slug ölüyse kapsayıcı YER/KİŞİ maddesi). TDV susuyorsa akademik (Iranica, Cambridge, hakemli makale, üniversite yayını, IEU). Forum/blog/YZ metni YASAK; Vikipedi tek dayanak değil; 15 kelimeden uzun alıntı yok; tarih uydurma yok (gün yoksa `YYYY-01-01` + `kesinlik`; pencere şartı). Okumadığını kaynak diye yazma; `bulunamadı` / `okunmadı` / `ölçülemedi` ayrı damga. İşaret ile kanıt ayrı.

## 🔒 KİLİT TABLOSU — bu dosyalara YAZMA
| sahip | dosyalar |
|---|---|
| UYGULA-BAGDAT | Irak yerleşim kayıtlarının geçtiği dosyalar (muhtemelen `data/yerlesimler.js` dahil — tahtada M-3927 sonrası listesini oku) · `data/kronoloji_iran.js` · `kasr-i-sirin-antlasmasi` slug düzeltmesinin geçtiği dosyalar · YENİ `data/olaylar_p0053.js` · YENİ `data/kaynakli_halka_bagdat.js` |
| PAKET-TEMIZ | METİN alanları: `olaylar_7a4170 · ek2 · ek5 · ek6 · ek14 · ek17 · ok109 · olaylar.js · kronoloji_altinorda/italya/italya_sehir/portekiz/venedik · ekokuma.js · ekokuma_antlasma2/celali/dalga2/ekonomi/mimari/savas/statu/tartisma · merak.js · padisahlar.js · kisiler.js · gorsel_madde.js · devletler.js` |
| PAKET-UI4 | `js/app.js · js/suzgec.js · css/style.css · index.html` |
| BEKLEYEN PAKETLER (açılmadı) | P01 · P02 (`data/yerlesimler.js` inişleri) · P03 (`data/devletler.js` · `arac/renkler.py`) · P14 (arayüz) |

Kilitli bir dosyaya yazman gerekiyorsa: YAZMA, değişikliği `denetim/YAMA-<PAKET>-0914.json`a öneri olarak koy ve tahtaya yaz.
Başka bir paket işçisiyle aynı dosyaya ihtiyaç çıkarsa tahtadan YATAY sor (§7.1③): `py arac/tahta.py yaz --kim "<SEN>" --kime "<O>" --mesaj "..."`.

## Yeni dosya adları (ad alanı §7 — değiştirme)
P04 `olaylar_p0055.js` · P05 `olaylar_p0058.js` + `yerlesimler_anadolu_0914.js` · P08 `olaylar_p0056.js` · P09 `olaylar_p0057.js` · P10 `yerlesimler_uzak_0914.js` · P11 `ittifaklar.js` · P12 `ekokuma_savas3.js` · `ekokuma_antlasma3.js` · `ekokuma_mimari2.js` · (P01 ileride `olaylar_p0059.js` — p0053 BAGDAT'ın). `window.<TUR>_<KISALTMA>` = dosya adının büyük harfi. Yeni yerleşim dosyası `arac/girdi.py`ye, yeni olaylar/ekokuma dosyası index.html'e/`_EKOKUMA_DOSYA_ADLARI`na KOORDİNATÖR tarafından bağlanır: satırı raporda ver.

## Kabul (her paket)
Yazmadan ÖNCE `git status --short -- <dosyaların>` temiz · `py arac/denetle.py` ÖNCE bir kez koş, çıktıyı sakla (taban) · her eski dizgi kaydında 1 kez (assert) · `node --check` · sonra `denetle.py` tekrar: Değişmez 1 sahipsiz artmaz, 1b 0, 2 açık 0 (yeni kırılma günü → ±30 günde kaynaklı madde), 2s ≤121, 2i ≤3, 4c/4d kötüleşmez, 7 değişirse kalem kalem sebep (beklenen 658) · `node denetim/ARAC-A2-BAG-0913.js --hepsi` hata 0. Başka işçiler de `data/`ya yazıyor: fark çıkarsa dosya damgalarıyla kimden olduğunu ölç, tahmin etme. **Motor koşma. Commit ATMA.**

## Haberleşme
Açılış: `py arac/tahta.py yaz --kim "<PAKET>" --kime "1.MURAT" --mesaj "<PAKET> acildim, dosyalarim: ..."`. Kaynak çelişkisi / Değişmez ihlali / kilit ihtiyacı BEKLETMEDEN tahtaya. Bitince TESLIM: madde madde (paket/H-no · ne yapıldı · kaynak · durum: cozuldu / sirada / bulunamadı / Emre'ye soru) + denetim önce/sonra + dosyalar ADIYLA. Rapor `denetim/<PAKET>-0914.md`. Tahta mesajını `oturumlar/tahta.json`dan GERİ OKU (araç "TEKRAR YAZMA" dese de — §7.1⑤b arızası bugün üç kez oldu; yoksa yeniden yaz). Son cevabında aynı teslim özetini ver.
