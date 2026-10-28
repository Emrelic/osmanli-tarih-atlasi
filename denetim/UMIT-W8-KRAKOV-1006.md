# UMIT-W8-KRAKOV-1006 — Krakov'un 1918 devri (Polonya Tasfiye Komisyonu)

Ağaç `C:\atlas-w8`, origin/main `4487df9a` + zincir 1006c → CRES-NOT → POLONYA-ISG → POLONYA-BITIS →
MGGP-NOT. Ürün `denetim/KRAKOV-DEVIR-1006.diff`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
Ölçülen başlangıç (`yerlesimler.js:1006`): Krakov `s:` … `avusturya 1846-11-11 → 1918-11-11` ·
`polonya 1918-11-11 → 1923-10-29`; `isg:` yok; avusturya döneminde `kaynak:` yok, kayıt
düzeyinde `kaynak:` yok (krakow-serbest-sehri döneminde var ⇒ kaynaksızlık "dönem-içi").
⚠️ Sınıf notu: Krakov **Galiçya**'dır — Avusturya'nın EGEMEN toprağı (`s:`), MGGP gibi işgal
(`isg:`) değil. MGGP ile ortak olan: Avusturya'dan Polonya'ya geçiş, `polonya` künyesi 11-11.
- Ö1 Devir günü kaynaklı bulunur: **1918-10-31** (Polonya subaylarının Krakov garnizonunu
  devralması) ya da 1918-11-01 (PKL'nin yetkiyi fiilen alması); şehir düzeyinde gün.
- Ö2 Yeni sahip yazılamaz: `polonya` künyesi `f:"1918-11-11"` ⇒ 10-31/11-01'den başlatmak künye
  penceresini aşar (4c); PKL'nin künyesi yok. ⇒ **gün DEĞİŞMEZ**, 11-11 kalır; boşluk (~10-11
  gün) doldurulmaz, MGGP notu biçiminde beyan edilir ⇒ diff yalnız NOT.
- Ö3 MGGP notuyla çelişki yok (aynı karar: künyesiz Polonya idaresi, 11-11 sınır işareti).
- Ö4 `denetle.py` özet satırları birebir (gün değişmiyor; kaynaksızlık kovası değişmez —
  Krakov zaten dönem-içi).

## 1. Ölçüm — devir günü (şart ①)
**1918-10-31, ŞEHİR günü, kaynaklı.**
- Biblioteka Główna AGH (üniversite kütüphanesi sergisi), "Kraków był pierwszy... W stulecie
  odzyskania niepodległości" — "Przebieg wydarzeń 31 października 1918 r." (https://wystawy.bg.agh.edu.pl/KBP/31X.php;
  ham HTML indirildi, cümleler geri okundu):
  > "ok. 11.30 - poddanie się austriackiego dowództwa"
  > "ok. 15.00 - podpisanie aktu kapitulacji przez władze austriackie"
  > PKL odezwası: "Komisja Likwidacyjna objęła w dniu dzisiejszym władzę nad wojskiem i zamianowała
  > komendantem wojsk okręgu krak. brygadiera Legionów, Bolesława Roję."
  Sayfanın birincil dayanakları: Bąkowski, *Kronika Krakowa z lat 1918-1923* (1925) · Stawarz,
  *Gdy Kraków kruszył pęta* (1939) · MHK fotoğraf arşivi.
- Çapraz: IPN Kraków, Marcin Chorązki, "Wyzwolenie Krakowa, Galicji i Śląska Cieszyńskiego"
  (Przystanek Historia) — 30 Ekim akşamı Płaszów istasyonu, 31 Ekim sabahı Podgórze kışlaları,
  31 Ekim 10.00–11.30 Rynek Główny nöbetinin silahsızlandırılması. Gün aynı.
- Kaynak NEYİN günü: Avusturya ASKERÎ komutasının teslimi ve PKL'nin şehirde orduya el koyması —
  ŞEHİR düzeyi. PKL'nin bütün Batı Galiçya'da yetkisi bu cümlenin konusu değil (D211 ⑧).
- ⚠️ Sınıf: Krakov **Galiçya**, Avusturya'nın EGEMEN toprağı (`s: avusturya`), MGGP gibi işgal değil.

## 2. Boşluk (şart ②)
- Yeni sahibin dönemi: `s: polonya` `f:"1918-11-11"` (= `polonya` künyesinin `f:`'si,
  devletler.js:4109). PKL'nin künyesi YOK (`devletler.js` tarandı).
- Gün 10-31'e çekilirse: `avusturya` 10-31'de biter, `polonya` künye gereği 11-11'den önce
  başlayamaz (4c) ⇒ **11 günlük delik** (Değişmez 1). DOLDURULMADI.
- ⇒ **Gün DEĞİŞMEDİ**; MGGP-NOT biçiminde beyan edildi.
- Bölgede `avusturya → polonya 1918-11-11` geçişi olan kayıt sayısı: **1** (yalnız Krakov; zincir
  uygulanmış hâlde ölçüldü) ⇒ başka Galiçya kaydı aynı karara muhtaç değil.

## 3. Diff — `denetim/KRAKOV-DEVIR-1006.diff` (13 satır, LF, CR 0)
Yalnız `data/yerlesimler.js`, yalnız Krakov, yalnız `s: avusturya 1846-11-11 → 1918-11-11`
dönemine `kaynak:` eklendi (dönemin günü/kimliği DEĞİŞMEDİ). Biçim MGGP-NOT'un aynısı:
kullanılan gün (11-11, sınır işareti) · kullanılmayan kaynaklı gün (10-31, ŞEHİR günü, AGH +
IPN alıntısı) · neden (PKL künyesiz, `polonya` 11-11'den başlar, 10-31 = 11 gün delik) ·
"MGGP-NOT ile aynı karar".

## 4. MGGP notuyla tutarlılık (şart ③)
Çelişki YOK. İki not aynı kararı aynı biçimde taşır: kaynaklı devir günü (MGGP 11-03 BÖLGE ·
Krakov 10-31 ŞEHİR) kullanılmaz, künyesiz Polonya idaresi (Naiplik Konseyi · PKL) beyan edilir,
11-11 sınır işareti kalır. Biri ötekinin üstüne yazılmadı; MGGP-NOT diff'ine dokunulmadı.

## 5. denetle ÖNCE/SONRA · zincir
Zincir uygulanmış ağaçta ÖNCE/SONRA özet satırları (27 satır, dönem-içi BİLGİ satırı dahil)
**birebir**; ikisi de çıkış 2 (taze ağaçta D8). Kaynaksızlık değişmedi: Krakov zaten dönem-içi.
Zincir taze origin/main `4487df9a`: 1006c → CRES-NOT → POLONYA-ISG → POLONYA-BITIS → MGGP-NOT →
KRAKOV-DEVIR ardışık `--check` ✓.

## 6. Öngörü sınavı (§0)
Ö1 ✓ (1918-10-31, şehir günü) · Ö2 ✓ (gün değişmez; boşluk 11 gün, doldurulmadı, not) ·
Ö3 ✓ · Ö4 ✓ (birebir).
