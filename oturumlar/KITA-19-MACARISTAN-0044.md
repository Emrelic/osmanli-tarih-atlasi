# KITA 19 — MACARİSTAN 1526-1566 · paket 0044

AD: KITA 19 · MODEL: Opus · DİZİN: proje kökü · ClaudEmre: evet
**Önce `CLAUDE.md`yi baştan sona oku** (özellikle §2 · §3 · §3.5.1 · §4 · §7 ·
§7.1), sonra `oturumlar/ORTAK-KOSU10-KURALLARI.md`.
Açılışta tahtaya yaz: `py arac/tahta.py yaz --kim "KITA 19" --kime "1.MURAT"
--mesaj "açıldım, şartnameyi okudum, şu dosyalar bende"`

**Dosyaların:** `denetim/` (ölçüm + `YAMA-KITA19-*-0913.json`). Yerleşimler
DONUK (koşu 10 sürüyor) ⇒ çıktı ÖLÇÜM + YAMA. `data/`ya yazma.

Üç madde de aynı coğrafya ve aynı 40 yıl — birlikte ölç.
```
1526-08-29  Mohaç       1541-08-29  Budin ilhakı
1552        Solnok/Eğri seferi      1566  Gyula · Zigetvar
```

## ① H-0002 · MOHAÇ — YERLEŞİMSİZ TOPRAK OSMANLI KIRMIZISI
Görseller `H-0002-1/2.png`. Emre: *"bu parça toprak içinde bir yerleşim de
yok ama Osmanlı kırmızısına geçmiş görünüyor."*
🔴 Bu, `CLAUDE.md §2`nin tarif ettiği sınıf: **noktası olmayan bölge en yakın
peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.** İlk soru: orada nokta var mı?
- görselden kutu → `girdi.yukle()` · `lat`/`lon` ile say · merkezine en yakın
- hangi petek emiyor, sahibi kim, o gün sahibi DOĞRU mu
- çare: kaynaklı nokta (YAMA) mı, yoksa boyama doğru ve yalnız görünüm mü?
⚠️ §3.5.1: noktasızlık İKİ YÖNE hata üretir; Yukarı Macaristan vakası belgede.

## ② H-0010 · BUDİN'İN İLHAKI — HARİTA NORMAL Mİ
Görseller `H-0010-1/2.png`. TDV `budin` ile ilhak günü ve çevre kaleler.

## ③ H-0014 · SOLNOK FETHEDİLİRKEN GYULA
Görsel `H-0014-1.png`. Emre: *"Gyula fethedilmemiş ve Osmanlı toprakları
arasında mı kalmıştı?"*
- 1552-1566 arası Gyula'nın sahibi ve komşuları — enklav mı?
- 🔑 Emre'nin kuralı (0043 H-0005): enklav doğuran bir geçişte **"ARADA NE
  VAR"** sorulur. Alet hazır: `denetim/ARAC-KITA13-ARADA-NE-VAR-0912.py`.
- Gerçekten enklav idiyse (tarihen olabilir — dün Erzurum 1514-18 deliği
  TDV'nin kendi tarifi çıktı) → `zaten-doğru` + kaynak.

## ④ H-0004 (veri tarafı) · MOHAÇ SONRASI BUDİN KIRMIZI NORMAL Mİ
Emre: *"Budin Osmanlı kırmızısı görünüyor ama diğer Macaristan bölgeleri
yeşil. Budin'in kırmızı olması normal mi?"* 1526 · 1529 · 1541 Budin'in
`d:`/`v:`/`s:` dönemleri vs TDV. (Şerit gösterimi KITA 12'de — sen veriyi ölç.)
⚠️ KITA 14 aynı Budin maddelerini (H-0006) kronoloji tarafından inceliyor —
**tahtadan yatay konuşun**, harita günü ile madde günü aynı olmalı.

**Çıktı:** her madde için `ölçtüğüm · TDV alıntı+slug · hüküm (zaten-doğru /
kusur / ölçülemedi) · YAMA`. ⚠️ `Değişmez 1c` belgesiz 4/4 TAVANDA.
TESLİM TAHTAYA, madde madde.
