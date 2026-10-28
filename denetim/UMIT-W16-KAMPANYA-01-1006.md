# UMIT-W16-KAMPANYA-01-1006 — kişi kaynak kampanyası, dilim 01 (TABLO-01, ilk 47 kaynaksız)

Yama: `denetim/KISI-KAYNAK-01-1006.diff` (sha256 `e56abe61c31e6e0d…`, 206 satır, CR 0) · yalnız `data/kisiler.js`.
Taban: `origin/main` `ae2e6bbd` + `EDIGU-1006.diff` (c8dbf70a) **uygulanmış** (indekse alınıp üstüne fark çıkarıldı;
yamada `edigu` satırı 0). Dayanak tablo: `denetim/KISI-KAYNAK-TABLO-01-1006.md`. Commit yok.

## 1. Ne yazıldı
- **47 kayıt, 47'sine `kaynak`.** ① 41 → `kaynak:"TDV: <slug>"` · ② 6 → `kaynak:"TDV: <kapsayıcı> (müstakil madde yok; …)"`.
- Biçim `burak-reis` emsalinden: açıklama `kaynak` parantezinde. **"Kaynakta yok" işareti de o parantezde**
  (ayrı alan icat edilmedi): ② kayıtlarda hangi yılın kaynakta olduğu/olmadığı açıkça yazılı
  (ör. `halil-pasa`: "doğum 1882 ve ölüm 1957 yılları kaynakta yok"). **Değerler silinmedi**, işaretlendi.
- Alan değişiklikleri (kayıt-alan): `kaynak` 47 · `t` 9 · `f` 6 · `donem` 5 · `tur` 1 · `tartisma` 4 · `ic_not_f` 4 · `ic_not_t` 1 · `ic_not_tur` 1.
  Başka hiçbir anahtar değişmedi (288 kayıt alan alan karşılaştırıldı; sıra ve `id` aynı).

### 1a. TDV'nin doldurduğu boş alanlar (kaynağı = o kaydın `kaynak` slug'ı)
`t`: mahmud-pasa 1474 · baltaci 1712 · alemdar 1808 · lala-mustafa 1580 · biyikli 1521 · tiryaki 1608 ·
kemankes 1644 · evrenos 1417 (②, kapsayıcı maddede ölüm cümlesi var — parantezde yazılı).
`f`: alemdar 1765 · merzifonlu 1634 (TDV "1044 (1634-35)" — parantezde hicrî/miladî aralık yazılı).

### 1b. ÇELİŞKİLER — §4: TDV esas, atlas düzeldi, FARK BİLDİRİLİYOR
| kayıt | alan | eski | yeni | TDV cümlesi | eski değer nerede |
|---|---|---|---|---|---|
| seyh-bedreddin | t (+donem) | 1416 | **1420** | "Bedreddin Simâvî 1420'de Serez'de idam edilerek …" — 1416 TDV'de İznik'ten **kaçış** yılı (tuzak ⑧) | `ic_not_t` |
| gazi-osman-pasa | f (+donem) | 1832 | **1833** | "GAZİ OSMAN PAŞA (1833-1900)" | `ic_not_f` |
| turgut-reis | f (+donem) | 1485 | **1487** | "tahminen 1487 yılında doğdu" | `ic_not_f` |
| uzun-hasan | f (+donem) | 1423 | **1425** | "828 … (Şubat-Mart 1425) doğdu" | `ic_not_f` |
Üçünde kaydın kendi `not` metni zaten TDV ile uyumluydu (bedreddin 1420, turgut 1487, uzun-hasan h.828) — kayıt kendi içinde çelişikti.
`donem` metni yıla bağlı olduğu için birlikte düzeltildi (aksi hâlde aynı kayıtta iki yıl kalırdı); eski `donem` `ic_not_*` içinde yazılı.

### 1c. Sahte kesinlik — D210
`kilic-ali-pasa`: `f:"1500"` **silindi**; `donem` "1500–1587" → "1500'lü yılların başı (muhtemel) – 1587";
TDV cümlesi ve eski değer `ic_not_f`'te.

### 1d. Tartışmalılar — `tartisma` alanında, seçim yapılmadan
enver-pasa (f: 23 Kasım 1881 / 6 Aralık 1882) · seyh-bedreddin (f: 740-770 arası; 760/1359 rivayeti) ·
turhan-hatice-sultan (f: 1627 "söylenir", belgesiz) · davud-i-kayseri (t: çoğunluk 751/1350; 745/1344, 1335).
⚠️ Bu dördünde kayıttaki **mevcut f/t değeri yerinde bırakıldı** (hepsi TDV'deki değerlerden biri ya da TDV başlığı;
uydurma değil). Görev "seçim yapılmadan" diyor — alanı boşaltmak isteniyorsa tek satırlık iş, söyle.
📌 `tartisma` uygulamada görünür ("Tartışma" satırı, `app.js:10200-10203`); `ic_not_*` görünmez.
Listede olmasına rağmen `kilic-ali-pasa` f'si tartışmalı değil sahte kesinlik olarak §1c'de işlendi (talimat gereği).

### 1e. Tür — kemankeş
`tur` sözlüğünde `sadrazam` VAR (dosya başlığı) ⇒ `kemankes-kara-mustafa-pasa` `vezir-pasa` → `sadrazam`, eski değer `ic_not_tur`.
Kayıt dosyada hâlâ "Vezir-paşalar" bölüm yorumunun altında duruyor (yalnız görsel; taşımadım — sıra değişikliği diff'i büyütür).

### 1f. Alan adları
`kaynak`, `tartisma` dosyada zaten var. `ic_not_f` / `ic_not_t` / `ic_not_tur` **yeni anahtar ama yeni biçim değil**:
dosyada `ic_not_tartisma`, `ic_not_not` kullanılıyor ve şema `ic_not_<alan>` (`arac/ic_not_uygula.py` başlığı,
`app.js:11573`). Eski değeri değişen alanın `ic_not_`suna koymak bu şemanın birebir uygulaması. Uygulama bunları göstermez.

## 2. Sınav
| | ÖNCE (taban+EDIGU) | SONRA | fark |
|---|---|---|---|
| `denetle.py` | çıkış 2 | çıkış 2 | **çıktı birebir aynı** (satır sonu dışında `diff` boş) |
| `odak_olc.py` | çıkış 0 | çıkış 0 | birebir aynı |
| `durum_tablosu.py` | çıkış 0 | çıkış 0 | birebir aynı |
| UYARI satırı | 1 | 1 | **yeni UYARI 0** (var olan: `yerlesimler_ek29.js` Deyrülkamer `dogrulanmadi` alanı — bu işle ilgisiz) |
- `denetle.py` çıkış 2'nin sebebi ÖNCE de vardı: **Değişmez 8 ÖLÇÜLEMEDİ** — `devletler_harita.js` üretilmiş+gitignore'lu,
  taze ağaçta yok. Kişi dosyası D8'in girdisi değil; ölçülemedi ≠ temiz, iki tarafta da aynı.
- **Kişi kırık atıf 0:** `data/*.js`te `vefat_id|kisi_id|kisi|odak_kisi` 61 atıf, kişi ∪ padişah kimlikleriyle 61/61 çözülüyor.
  Hiçbir `id`, `devlet` değişmedi ⇒ devlet/vefat_id/odak atıflarına dokunulmadı.
- Kaynaklı kişi: 22 (taban) → 23 (+EDIGU) → **70** (+47). Kaynaksız 266 → 218 (EDIGU dahil).
- **LF:** yama dosyasında CR 0. (Not: bu makinede `core.autocrlf=true`; çalışma kopyası CRLF açılıyor — yama `-c core.autocrlf=false` ile çıkarıldı, betik dosyayı LF yazdı.)
- **Uygulanabilirlik:** taban+EDIGU üzerinde `git apply --cached --check` ileri ✓ · `-R` ✗ (`patch failed: data/kisiler.js:27`).

## 3. Bulamadıklarım / açık kalan
- Yan bulgu (TABLO-01 §D) `edhem-pasa`: `kaynak`ta adaş uyarısı yazıldı; `ad` "Edhem Paşa" → "Gazi Edhem Paşa" **değiştirilmedi** (ad başka katmanlarda eşleşme anahtarı olabilir; ölçmeden dokunmadım). Öneri: ayrı küçük iş.
- `konstantinos11`, `halil-pasa`: f/t kaynakta yok — işaretli, değerler duruyor; başka akademik kaynak bu kampanyanın dışında.
- Atatürk 1880/1881: TDV 1881'i kabul ettiğini yazıyor ⇒ "var" sayıldı, `tartisma` eklenmedi.

## 4. Git
- `C:\atlas-w16`: temiz (`git status` 0 satır; EDIGU de geri alındı, indeks sıfırlandı).
- `C:\atlas-umit` (HEAD `c8dbf70a`): bu teslimden `?? denetim/KISI-KAYNAK-01-1006.diff` · `?? denetim/UMIT-W16-KAMPANYA-01-1006.md`.
- `data/`'ya hiçbir ağaçta kalıcı yazı yok; yama yalnız dosya olarak duruyor.
