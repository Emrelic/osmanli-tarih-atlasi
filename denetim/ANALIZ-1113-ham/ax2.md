# EKSEN 2 — KAYNAK BORCU (salt-okuma ölçüm)

Ağaç: C:\atlas\.claude\worktrees\emrelic-1113-analiz, origin/main f4b45bb0a, temiz ağaç. Hiçbir depo dosyası değişmedi.
Yöntem: (1) `arac/kaynak_guven.py --d2-yok` (CIKTI scratchpad\kg'ye yönlendirildi; depoya yazmadı) — site yükleyicisi ile (index.html → paket_coz → silsile_yukle.js, node vm) 289 dosya yüklenir; 24633 kaynak dizgesinde app.js ile 0 fark. Çıktı: scratchpad\kg\RAPOR.md + ozet.json. (2) `ax2_kr.py` (aynı yükleyiciyi çağırıp kaynak/ t alanlarını sayar). (3) `ax2_yer.py` (arac/girdi.yukle ile yerleşimler). (4) `ax2_*` regex sayımı (ic_not metinleri).
DURUM-TABLOSU.md: 8 Kasım fa6b1cbf0 fotoğrafı (5 gün). `py arac/durum_tablosu.py` 110 sn'de bitmedi (zaman aşımı), tabloyu yeniden üretemedim → ÖLÇÜLEMEDİ.

## a) Kaynak alanı boş / damga dağılımı (taban f4b45bb0a)

| Evren | n | guvenli (A) | ikincil (B) | tanınmayan | güvensiz (C/adsız) | bulunamadı | boş (kaynaksız) |
|---|---:|---:|---:|---:|---:|---:|---:|
| Dosya kronolojileri (olaylar*, kronoloji*, kronoloji_sinir*) | 18336 | 12274 | 3060 | 2195 | 67 | 738 | **2** |
| Künye-kronoloji maddeleri (devletler.js `kronoloji[]`) | 13373 | 3853 | 4010 | 1939 | 1467 (1462 C) | 177 | **1927** |
| Künye `kaynak` alanı (devletler.js, 2267 künye) | 2267 | 1231 | 563 | 234 | 0 | 239 | 0 |
| Yerleşim üst düzey `kaynak:` (girdi.py, 5628 kayıt) | 5628 | | | | | ~1639 "bulunamad" içeren | **2434** boş (dönem düzeyinde `s:` 26579 dönemin 8140'ı kaynaksız; `isg:` 690'ın 4'ü) |

Dosya kırılımı (dosya kronolojileri; kaynaksız): olaylar* 5024 madde / 2 boş (olaylar_ek11, ek13 birer) · kronoloji_sinir* 2693 / 0 · kronoloji* öteki 10619 / 0. Yani dosya kronolojisinde kaynak borcu fiilen yok; borç damga kalitesinde (aşağıda). VERI-YAPISI: `kaynak` boş = "ölçülmemiş", kaynaksız değil.
Büyük borç: künye-kronoloji 1927 boş + 1467 güvensiz (C = popüler/forum sınıfı) — devletler.js `kronoloji[]`.
Yerleşim: 2434 yerleşim ve 8140 `s:` dönemi kaynak alanı boş (çoğunlukla çok-dönemli kayıtta tek kaynakla örtülen dönemler olabilir; dönem-başı ayrıştırma ayrı iş).

## b) TDV'siz ve Vikipedi
- TDV kodu eşleşen parça sayısı: 14540 (tüm tablo girdilerinin en sıklığı). Osmanlı/İslâm dünyası kapsamına bölünmüş sayım ÖLÇÜLEMEDİ (kapsam alanı yok); aşağıdaki TDV'siz sayılar TÜM dünya içindir.
- TDV içermeyen dolu kaynak: dosya kronolojisi 9199 / 18336 (olaylar* 3471 · kronoloji_sinir* 1802 · kronoloji* öteki 5925 — son üçlü "tdvsiz_dolu" ölçütü regex: TDV|islamansiklopedisi yok), künye-kronoloji 9054 / 13373, künye kaynağı 1308 / 2267. Bu sayı yüksek çünkü dünya geneli (TDV kapsamı dışı) dahil.
- Vikipedi geçen madde: dosya 220 · künye-kron 2433 · künye 60 · yerleşim 161 kayıt. Vikipedi'nin TEK dayanak olduğu aday (başka akademik/ TDV ipucu yok, kaba regex): dosya **122** · künye-kron **1884** · künye **41** · yerleşim **108**. Not: kaynak_guven tablosunda VIKIPEDI kodu 3035 parça; `ikincil/taninmayan` içinde kalır. Sayı kaba aday — kesin sayı için tablodan "yalnız VIKIPEDI parçalı madde" sorgusu yazılmalı.

## c) Yıl temsilî borç (YYYY-01-01)
- `t` = YYYY-01-01 olan madde: dosya kronolojisi **8607** / 18336 · künye-kron **7044** / 13373 · künye `f` 1523 / 2267. (Gerçek 1 Ocak olayları dahil; yani üst sınır.)
- ic_not/metin beyanı "yalnız yıl teyitli": olaylar*+kronoloji* 520 · devletler.js 118 · yerlesimler* 136. "gün teyitsiz": 228 · 145 · 261. "yıl temsilî": 16 · 1 · 3.
- DURUM-TABLOSU'nun resmî rakamı (Değişmez 2s): **379 YIL-TEMSİLÎ BORÇ** (yabancı senkron), 8 Kasım. Bu tazelenemedi (durum_tablosu zaman aşımı).

## d) __BOSLUK__ ve yaklaşıklık
- `__BOSLUK__` dönem sayısı (girdi.yukle, `d:`): **698** dönem (DURUM-TABLOSU: 687 pencere, 1 kimlik → +11, tablo bayat). Ham metin geçişi: yerlesimler* 868, devletler.js 6, olaylar* 23, kronoloji* 19.
- Beyanlı: 'BEYANLI YAKLAŞIKLIK' geçen dönem 2272 (yerlesimler* ham geçiş 2457 · kronoloji* 513 · olaylar* 19 · devletler 8); 'ABİ MERKEZ' geçen dönem 769 (ham 898 · kronoloji* 112 · olaylar* 10).
- Beyansız `__BOSLUK__` dönemi (BEYAN geçmeyen): **133**. Beyansız yaklaşıklık adayı ("yaklaşık/tahmin" geçip BEYAN geçmeyen dönem): **128**. Bunlar kaba regex adayı; teyit gerekir. DURUM-TABLOSU Değişmez 1b "beyansız pencere arası boşluk 0" ile çelişmez (o yalnız pencere arası boşluk).
- `kaynak_zayif` işaretli kayıt: 0.

## "Bulunamadı / ölçülemedi" listesi
- bulunamadı (verinin kendi beyanı, damga): dosya 738 · künye-kron 177 · künye kaynak 239 (ozet.json). Bunların içinde dayanak adı geçen ("bulunamadı — dayanak: X"): dosya A 407 · B 10 · yok 321; künye-kron A 134 · B 3 · yok 40 → ucuz kazanç ≈ 554 madde (bulunamadi_dayanakli.tsv).
- Yerleşimde "bulunamad" içeren kayıt: 1639 (regex, kaba).
- ÖLÇÜLEMEDİ: (i) `py arac/durum_tablosu.py` 110 sn'de bitmedi, DURUM-TABLOSU tazelenemedi; (ii) Osmanlı/İslâm kapsamına özel TDV'siz sayısı; (iii) madde-başı "yalnız yıl teyitli" sayısı (loader ic_not taşımıyor; yalnız metin geçişi sayıldı); (iv) Vikipedi-TEK kesin sayı.
- girdi.py UYARI: BILINEN_ALANLAR'da olmayan alanlar (konum_kesinlik 126, s.eksklav 247, ic_not/karar_notu/kaynak_kur/dogrulanmis_bosluk 1'er) — şema borcu, veri değil.

## DURUM-TABLOSU karşılaştırması
Tablo 8 Kasım: yerleşim 5530 (şimdi girdi.yukle 5628, +98) · kronoloji 4732 (farklı tanım; bu ölçüm 18336 dosya + 13373 künye maddesi) · __BOSLUK__ 687 (şimdi 698) · Kişi kaynağı kaynaksız 0. → Tablo bayat (5 gün, yerleşim sayısı değişmiş); kaynak damgası tablosu DURUM-TABLOSU'nda YOK — tek kaynak KAYNAK-GUVEN-1014 (denetim/, 4 Kasım; bu ölçüm onu f4b45bb0a'da yeniden üretti, scratchpad\kg\ozet.json).

## En büyük 5 borç kümesi
1. **devletler.js künye-kronolojisi kaynaksız + güvensiz: 1927 boş + 1467 C = 3394 madde** (künye-kron 13373'ün %25). Tahmini iş: büyük (araştırma; ~3400 madde, çoğu Afrika/Asya künye parti — KUNYE-AFRIKA vb. süren). Dosya: data/devletler.js.
2. **Tanınmayan (A/B dışı) parçalı madde: dosya 2195 + künye-kron 1939 + künye 234 = 4368** — kaynak_guven tablosu büyütmesi ile sınıflandırma (düşük maliyet, ~30 tanınmayan parça tüm borcu önemli ölçüde indirir: VERI-MS1-1281 447 · T5-1000-A-1016 68 · SINIR-BENELUX 62 …). Dosya: data/kaynak_guven.js (tablo).
3. **Yıl temsilî (YYYY-01-01): ~8607 dosya + 7044 künye-kron madde (üst sınır) · resmî 379 senkron borcu** — "yalnız yıl teyitli" ic_not'lu ≈ 520+118 metin. Kampanya: teyit_uygula.py --yil-karari. Büyük, kaynak araştırması gerekir.
4. **Yerleşim kaynaksızlığı: 2434 yerleşim / 8140 `s:` dönemi kaynak boş + 133 beyansız __BOSLUK__ + 128 beyansız yaklaşıklık adayı** — Boşluk doldurma merdiveni (TDV→…→abi merkez). Dosyalar: data/yerlesimler*.js (127 dosya; en çok yerlesimler.js, _ek*, once1281_*).
5. **Vikipedi-tek dayanak adayı ~1884 künye-kron + 122 dosya + 108 yerleşim ≈ 2100** ve **bulunamadı 1154 (738+177+239)**, içinden dayanak adı olan ~554 ucuz kazanç (bulunamadi_dayanakli.tsv). Orta büyüklük; araştırma gerekli (sonnet alt ajan uygun).

Ek dosyalar (scratchpad): kg\RAPOR.md · kg\ozet.json · kg\*.tsv · ax2_kr.py · ax2_yer.py.
