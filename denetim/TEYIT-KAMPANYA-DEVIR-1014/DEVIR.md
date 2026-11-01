# TEYİT KAMPANYASI — UMIT devri (14-15 Ekim 2026, laptop oturumu oturum-7ea1d8)

Emre: büyük ajan dalgaları UMIT'te, eczane kapanınca. Bu belge kampanyanın kaldığı yeri ve
devam yolunu verir. Kural kaynağı: CLAUDE.md "Kaynak kuralı" + hafıza `kaynak-damga-kurali`.

## Kural özeti (Emre kararları, 14 Ekim 2026)
- Güvensiz kaynaklı madde (Vikipedi, C kademeli site, adsız beyan) A/B kaynakla teyit edilir;
  teyit edilemezse sitede gizli kalır (`js/kaynak_damga.js` `gizli()`; tablo `data/kaynak_guven.js`).
- ① `teyit-yil`: sınıra bağlı değilse t → YYYY-01-01; bağlıysa t kalır + "[yalnız yıl teyitli]".
- ② Takvim: kaynak Batı takvimi karşılığını veriyorsa o gün; vermiyorsa tabloyla çevir + beyan;
  çevrilemiyorsa yıl/ay hassasiyetine in.
- ③ Tarih çelişkisi: Osmanlı ve komşularında TDV esas; öteki bölgelerde güvenilir kaynağın günü
  (madde + harita kırılması birlikte kayar — TARIH-DUZELT-1014 yöntemi).
- ⑥ TDV başka güvenilir kaynaklarla çelişirse kural otomatik işletilmez: ÜÇÜNCÜ, yurtdışı hakem
  (o devletin kendi kaynakları / bölge için en güvenilir kayıtlar, ör. İngiliz kayıtları:
  TNA, Hansard, London Gazette). Hakemin günü alınır, `ic_not`ta beyan.
- ⑤ Antik Mısır: Oxford kronolojisi (Shaw ed., 2000). Mezopotamya: orta kronoloji.
- Aklanmış kaynak yok: C kademeli bir kopyadan (Wikisource-EB1911, erenow…) okunup basılı
  künyeyle yazılan satır UYGULANMAZ (3 vaka: D1-08 Kaheti 1492, Lenkoran 1813; D2-02 yufiri#4).

## Yapılan (main'de)
| iş | madde | commit/dizin |
|---|---|---|
| pilot P1-P4 (289) | 129 gün teyidi | TEYIT-PILOT-1014 |
| pilot kararları | 96 teyit-yil + 20/23 çelişki | TEYIT-KARAR-1014 |
| 1.+2. dalga D1/D2 (16 dilim, ~1.250) | 612 gün · 121 yıla indi · 23 bağlı-notlu | TEYIT-DALGA-1014 |
Güvensiz (gizli) madde: 2.561 → 2.445 → **1.557**.

## Kalan — UMIT işi
1. **Ajana hiç verilmemiş güvensiz maddeler (~1.190).** Dilimle:
   `py dalga.py C:/atlas <teyit_girdi dizini> <dilim sayısı> D3-` — betik `origin/main:denetim/KAYNAK-GUVEN-1014/guvensiz_maddeler.tsv`i
   okur, girdi dizinindeki daha önce verilmiş `*.tsv` (P*/D1-*/D2-*, bu dizinin `girdi/`'sinde) satırlarını
   çıkarır, künye bütünlüğünü koruyarak ≤80'lik dilimler yazar. Ajan başına ~300-500 bin token, ~75 dk.
   Görev tanımı: `GOREV.md` (bu dizinde) — aynen ver. Ajanlar `isolation:"worktree"` ile, tarayıcı yasak.
   WebSearch oturum başına 200 sorgu ve paylaşımlı — GOREV.md'deki site-arama yolu.
2. **Tarih çelişkileri: `celiski.tsv` (124 satır, D1/D2).** ③/⑥ kurallarıyla elle karara bağla,
   TARIH-DUZELT-1014 yöntemiyle (madde + aynı olayın bütün kopyaları + yerleşim dönem uçları birlikte).
   Pilottan açık 3: Bursa ablukası (TDV «Osman I» 1303 ↔ «Bursa» 1308 → hakem), Brétigny
   (İngiltere 1360-01-01 ↔ Fransa 1360-05-08), Ezo #1-#3 eski takvim (TEYIT-KARAR-1014 RAPOR).
3. **Teyit edilemeyenler: `edilemedi.tsv` (176 satır).** Gizli kalırlar (kural). İkinci deneme
   istenirse başka kaynak ailesiyle (ör. MÖ maddeleri için CAH/RlA yerine Cambridge Ancient History).
4. **Künye kaydı teyitleri (21 satır)** `teyit_uygula.py` yalnız kronoloji maddesini işler;
   künye `kaynak`ı için genişletilmeli (TEYIT-DALGA-1014 `gun|yil/uygulama.tsv` "eslenemedi").
5. **Boş kaynaklı 1.981 madde** ("⚪ Kaynak bekleniyor", gizli DEĞİL) — ayrı kampanya.

## Uygulama zinciri (dalga bitince, ana oturum, ajan açmadan)
```
py <scratch>/suz_dalga.py <teyit_girdi> <cik>          # gun.tsv / yil.tsv, HARİÇ listesi betikte
py <scratch>/tablo_ekle.py data/kaynak_guven.js        # ajanların TABLODA-YOK önerileri (elle süz)
py arac/teyit_uygula.py <cik>/gun.tsv --rapor denetim/<AD>/gun
py arac/teyit_uygula.py <cik>/yil.tsv --yil-karari --rapor denetim/<AD>/yil   # BİR KEZ koştur — ikincisi raporu ezer
py arac/kaynak_guven.py ; py denetim/KAYNAK-ARAYUZ-1014/esit_sina.py   # FARK 0
py arac/kodla.py coz-c data data/devletler_harita.js ; py arac/kodla.py coz-c data data/donemler.js donem
py arac/denetle.py ; py arac/odak_olc.py ; py arac/paketle.py yenile ; py arac/surum_damgala.py
py arac/push_kapisi.py --kim "<AD>"
```
Tarihi değişen madde kimliği (t|b) odak tavanında "yeni" görünür: gerileme değil yeniden
adlandırmadır — `denetim/ODAK-TAVAN.json`da eski kimliği yenisiyle değiştir (b092ded1 örneği).

## Bu dizin
`GOREV.md` ajan görevi · `dalga.py` `suz_dalga.py` `tablo_ekle.py` betikler · `celiski.tsv`
`edilemedi.tsv` · `girdi/` verilmiş dilimler (dalga.py'nin dışlama listesi) · `tablolar/` ajan hüküm tabloları + raporları.
