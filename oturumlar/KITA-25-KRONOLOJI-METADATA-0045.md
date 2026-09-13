# KITA 25 — İÇ NOT TEMİZLİĞİ + HARİTA ODAĞI · paket 0045 H-0006 · H-0008

AD: KITA 25 · DİZİN: proje kökü · ClaudEmre: evet
**Önce:** `CLAUDE.md` baştan sona · `oturumlar/ORTAK-KOSU10-KURALLARI.md`
**Dosyaların:** yalnız `denetim/` — ÇIKTIN YAMA. `data/olaylar*`/`kronoloji*`
KITA 14'ün; aynı dosyaya iki oturum yazmaz. Yama KITA 14 bitince ya da
koordinatör tarafından uygulanacak.

## ① H-0006 · KULLANICIYA SIZAN İÇ NOTLAR
Emre (görsel `H-0006-1.png`): *"'gün hiçbirinde yok' gibi bir yorum ve değişik bir
bilgi var — bu tür bilgileri vermeye gerek yok."*
Koordinatör kaba ölçtü: **88 madde** kullanıcının gördüğü `b`/`d` metninde iç not
kalıbı taşıyor ("günü vermiyor", "yılı veriyor", "TDV maddesi", "bulunamadı",
"ölçülemedi", "kaynak susuyor", "hassasiyet", "temsilî"…).
🔴 Regex KABA — "temsilî", "hassasiyet" meşru anlatı da olabilir. **Her birini OKU
ve üç kovaya ayır:** iç not (kaldır) · meşru anlatı (dokunma) · karışık (cümleyi ayır).
🔴 **BİLGİ SİLİNMEZ, TAŞINIR:** kaynak/hassasiyet notu değerlidir (§4 "kaynak
gizlenmez") — kullanıcı metninden `kaynak:` alanına (ya da varsa `not:` benzeri
alana — ÖLÇ, alan icat etme) taşınır.
Görseldeki maddeyi bul ve önce ONU çöz. Çıktı: `denetim/YAMA-IC-NOT-0913.json`
(madde kimliği · eski metin · yeni metin · taşınan not · kova).

## ② H-0008 · "TÜM MADDELER HARİTAYI OLAYIN YERİNE ÇEVİRMELİ"
Emre (görsel `H-0008-1.png`): *"Kasım Hanlığı nerededir? Bu kronoloji Kasım
Hanlığı'na odağı çevirmelidir."*
Ölçüldü: altyapı VAR (`js/app.js:7276 haritayiOlayaGotur`, `flyTo`). Eksik veri:
**6190 maddenin 755'i (%12,2) ne `yer_id` ne `yer_kon` taşıyor** — odak oraya gidemez.
- Kasım Hanlığı maddesini bul: `yer_id` var mı, atlasta Kasım (Kasimov) noktası
  var mı (3 km komşuluk + normalleştirici, ad tahmin etme). Nokta yoksa YAMA
  (yerleşimler DONUK).
- 755'i dağıt: çekirdek `olaylar*` kaçı · Osmanlı'yla ilgili kaçı · `yer:` metin
  alanı dolu olup `yer_id`e çevrilebilen kaçı. Çevrilebilenler için YAMA
  (`denetim/YAMA-YER-ID-0913.json`).
- `yer_id` var ama odak yine gitmiyorsa bu bir app.js kusuru — KITA 12'ye yaz.
Teslim tahtaya: kova sayılarıyla.
