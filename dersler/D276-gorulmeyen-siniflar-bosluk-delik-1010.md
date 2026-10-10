# Denetimin görmediği sınıflar + BEYANLI BOŞLUK = DELİK (10 Ekim hâli)

> Kimlik `D276` · `CLAUDE.md §3.5` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 3.5 Denetimin görmediği sınıflar
- **Hayalet devlet:** yeni `s:` dönemi yazarken devletin ömrünü `data/devletler.js`
  `f`/`t`'den kontrol et; bölgesel teslim gecikmesi aylar mertebesindedir, yıllar değil.
  [`D203`](dersler/D203-hayalet-devletler.md)
- **Devlet var, yeri yanlış:** `4c`/`4d` "künye penceresini aşıyor mu" sorar, "oraya hiç ait
  miydi" sormaz. Yöntem: kimliğin menzilini sayıya çevir (boylam, kol bitiş tarihi), veriyi
  ona karşı tara; ölçülemiyorsa `ölçülemedi` yaz. [`D204`](dersler/D204-devlet-var-yeri-yanlis.md)
- **Künye aşımının üç sınıfı, çareleri ters:** ① devlet öldü → dönemi KISALT · ② aynı polity
  sürüyor → künyeyi GENİŞLET · ③ ardıl yapı geçti, toprak dolu → ardıl künye (kısaltmak delik
  açar; ardıl künyenin penceresi de TUTMALI). **İlk iş düzeltme değil SINIFLANDIRMA;** ölçek
  ve görünürlük sınıfı belirlemez. "Kimlik yok" demeden `devletler.js` TARANIR (tahmin edilen
  id aranmaz). Üç haneli yıl dizgi karşılaştırmasında `pad()` şart. [`D205`](dersler/D205-uc-sinif-careleri-ters.md)
- **Ters yön:** bir sınır kayması önerildiğinde **iki uç da ölçülür** — düzeltme hatayı öbür
  tarafa taşıyabilir. Noktasızlık iki yöne hata üretir (yön komşunun kimliğine bağlı).
  Devletin yıkılışı ≠ o yerin fethi. [`D206`](dersler/D206-ters-yon-osmanli-fazla.md)
- 🆕 🔴 **BEYAN EDİLEN BOŞLUK, HARİTADA BİR DELİKTİR — ve bunu hiçbir sayı
  söylemiyor** (KASA ölçtü, `KASA-BOSLUK-CIZIM-1010`, salt kod okuması).
  `§1.5` `__BOSLUK__` için *"Kusur değil, BEYAN"* diyor ve doğru diyor; ama
  **beyanın HARİTADA NASIL GÖRÜNDÜĞÜNÜ** söylemiyor. Ölçüldü:
```
  renk YOK      `uret_petek.py:1069-77` — `d` ∉ BOYALAR ∧ ∉ `_HARITA_ALT`
                ⇒ "bilinmeyen devlet kimliği" ⇒ BOYANMAZ
  devralma YOK  `:4803 _sahipli` kimliğe BAKMADAN "yazılı sahip" diyor
                ⇒ `_kusatilmis()` (:4921) noktayı ATLIYOR
  dolgu YOK     `:6797/:7188 delikleri_doldur(sahip_ix=aktif)` — halkada bu
                kümeye AİT OLMAYAN yerleşim varsa DOLDURULMAZ; nokta o gün
                sahipsiz olsa bile halka KORUNUR ⇒ komşu gövde yutmaz
  arayüz        `app.js:11316` yalnız ETİKET basıyor ("kimsenin değil
                (boşluk beyanı)") · `suzgec.js:513` boyanabilir saymıyor
```
  ⇒ `__BOSLUK__` **renksiz ve dolguya karşı KORUNAN** bir delik. Bitişik
  noktalar yazılırsa **tek büyük delik** olur (ölçülen vaka: doğu Cezayir'in
  16'sı bitişik).
  🔴 **KARAR ÖLÇÜTÜ — ve soru sanıldığı gibi değil:** seçim *"doğru renk ↔
  delik"* DEĞİL, **"çelişkili renk ↔ dürüst delik"**; çünkü o alanı bugün
  zaten kaynaksız ve bölge tanığıyla ÇELİŞEN bir halka boyuyor olabilir.
  Sıra: ① **şehir adlı tanık ARA** (bilinmeyeni küçültür, `D208`e uygun)
  ② kalanda, `kesinlik:"bolge"` gibi bir yaklaşıklık **kullanıcıya
  GÖRÜNÜYORSA** bölge sahibi + beyan · **görünmüyorsa** `__BOSLUK__`.
  📌 Gerekçe `§1`in kendi amacı: atlas **eğitim amaçlıdır** ⇒ **beyan
  edilmemiş bir yaklaşıklık, beyan edilmiş bir boşluktan KÖTÜDÜR** — boşluk
  kullanıcıyı yanıltmaz, gizli yaklaşıklık yanıltır.
  ⚠️ Ve `durum_tablosu.py:98-104` bunu ZATEN yazıyordu (*"deyim KASITLI ama
  MOTORDA KARŞILIĞI YOK"*). Yani sayı basılıyordu, **okunmuyordu** — `D265`in
  ters yüzü. `§1.5` üretilen bir tablodur (`D199`), bu yüzden cümle oraya
  elle yazılmaz; yeri burasıdır.
