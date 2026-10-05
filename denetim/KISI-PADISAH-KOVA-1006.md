# KISI-PADISAH-KOVA-1006 — UMIT-W40 · padişah katmanı kaynak kovası (yalnız ölçüm)

**Ölçülen commit:** `origin/main` = **`d0877829`** (ayrık worktree `C:\atlas-w40`, iş bitince kaldırıldı).
Kova tanımı: `fa1dd9af` `DURUM-TABLOSU-KISI-KAYNAK-1006.diff` → `kisi_kova` (BAŞLANGIÇ ölçütü:
`TDV:` → tdv · `bulunamadı` → beyan · başka dolu → başka · boş/yok → kaynaksız), birebir kopyalandı.
Veri tarayıcı gibi okundu (`node`, `new Function('window', …)`). `data/`ya yazılmadı, commit yok.
Satır satır döküm: `KISI-PADISAH-KOVA-1006.tsv` (41 satır, id · alan · kova · değer).

## Öngörü (ölçümden ÖNCE mühürlendi, sha256 `0696b0fe…f804`)
| Soru | Öngörü | Ölçüm | Tuttu mu |
|---|---|---|---|
| ① kova | TDV ~35 · başka ~1 · beyan 0 · kaynaksız ~5 | **39 · 0 · 0 · 2** | yön doğru, rakamlar tutmadı |
| ① alan sayısı | tek `kaynak` alanı | tek `kaynak` alanı | ✓ |
| ② `TDV slug:` | 0-5 | **0** | ✓ |
| ③ kapı | yok | **yok** | ✓ |
| ④ not/ic_not TDV izi | 0-10 kayıt, tarih kaynaklamaz | padişah **27** · kişi **21** | ✗ (çok fazla) |

## ① `data/padisahlar.js` — dört kova
- 41 kayıt. Adında `kaynak` geçen alan **yalnız bir tane**: `kaynak` (39 kayıtta var).
  ⇒ "Kayıt başına birden çok kaynak alanı" durumu yok; tam/hiç/karışık sayımı alan sayımıyla aynı.

| kova | kayıt |
|---|---|
| TDV (`TDV:` ile başlıyor) | **39** |
| başka | **0** |
| bulunamadı beyanı | **0** |
| kaynaksız | **2** — `fetret`, `hilafet` |

- Kayıt düzeyinde: **tam 39 · hiç 2 · karışık 0**.
- Kaynaksız iki kayıt KİŞİ DEĞİL: ikisi de `ozel:true` dönem kaydı ("Fetret Devri", "Saltanat
  kaldırıldı — Halife Abdülmecid"); `ad/from/to/ozel` dışında hiçbir alanları yok (biyografi yok).
  ⇒ Gerçek padişah kaydı 39, 39'u da TDV. Bu iki kaydın kaynaksız sayılıp sayılmayacağı bir HÜKÜM
  sorusu (öneri aşağıda).
- Ham metinde `TDV:` 44 kez geçiyor: 39'u `kaynak` alanında, 5'i öteki alanlarda.
- Uyarı: `kaynak` değeri yalnız slug (ör. `TDV: osman-i`). Tek bir slug 20 biyografi alanının
  hepsini kapsıyor; alan alan dayanak yok.

## ② `TDV slug:` varyantı (`TDV:` değil)
| dosya | main `d0877829` | EDIGU→01→02→03 zinciri uygulanmış |
|---|---|---|
| `data/kisiler.js` | **0** | **0** |
| `data/padisahlar.js` | **0** | **0** (zincir bu dosyaya dokunmuyor) |

- Büyük/küçük harf duyarsız `TDV\s+slug\s*:` aramasında da 0. Zincirin dört diff'inde de `TDV slug` yok.
- Bu varyant başka dosyalarda VAR (`data/devletler.js`, `ekokuma_*.js`, `gecitler.js`, `kademe_*.js`,
  `etiket_sozluk.js` …): orada çoğunlukla düzyazı içinde geçiyor ("TDV slug'ı …"), ama
  `ekokuma_padisah.js`te bile tam `TDV slug:` 0. Kişi/padişah kovasını etkilemiyor.
- Zincir yan ölçümü: zincir uygulanınca kişi kovası **257 · 2 · 29 · 0** (288 kayıt), W16/W7 ile aynı.
  Main'de **20 · 2 · 0 · 266**, o da aynı.

## ③ Kapı var mı — padişah `kaynak` alanını okuyan araç
`grep padisahlar` (`arac/*.py`, `arac/*.js`) üç dosya buldu:
| araç | padisahlar.js'ten ne okuyor | `kaynak`? |
|---|---|---|
| `arac/durum_tablosu.py:530,532` | `{ id: "` sayısı ve `ovgu:` sayısı (regex) | **HAYIR** |
| `arac/denetle_tutarlilik.py:252` | `from/to` pencereleri (kronolojiyle tarih tutarlılığı) | **HAYIR** |
| `arac/uret_bekleyenler.py` | yalnız yorum satırı | **HAYIR** |
| `arac/denetle.py` | padisahlar.js'e hiç değinmiyor | **HAYIR** |
| `arac/denetle_yayin.py` | padisahlar.js'e hiç değinmiyor | **HAYIR** |

⇒ **Padişah kaynak kapısı YOK.** `fa1dd9af` ile gelen `kisi_kaynak_say` de yalnız `kisiler.js`i
okuyor ve bir kapı değil, §1.5 satırı. Padişah kaynağı bugün 39/41; biri `kaynak`ı silse hiçbir
araç ötmez.

## ④ Kaynak dışı alanlarda TDV izi — cümleler okundu (§4 ⑧)
Arama: `TDV|İslâm Ansiklopedisi|islamansiklopedisi`, `kaynak` alanı hariç.

**Padişah:** kaynak dışı herhangi bir alanda iz taşıyan **31 kayıt**. Bunların **27'si**
`ic_not_*` alanlarında (ic_not_esler 15 · ic_not_lakap 12 · ic_not_olum_sebep 6 · ic_not_yergi 4 ·
ic_not_dogum 3 · ic_not_tartisma 3 · ic_not_dogum_yer 2 · ic_not_skandal 1 · ic_not_olum 1).
`not` alanı padişahta yok. Öteki görünür alanlarda: tartisma 12 · cocuk 14 · olum_sebep 3 ve
birkaç alanda 2'şer.
- `ic_not_*` cümlelerinin hepsi ya **"eski:"** ya **"çıkarılan:"** önekli. Yani bunlar görünür alandan
  ÇIKARILMIŞ eski metnin arşivi, canlı dayanak değil.
- Büyük çoğunluğu YOKLUK beyanı ("TDV maddesinde eş adı geçmiyor", "kendine özgü bir lakap
  zikredilmiyor"). Hiçbir tarihi kaynaklamıyorlar.
- Tarihe değen 4 cümle var:
  - `selim1.ic_not_dogum`: "1470 (dolayı — TDV iki rivayet verir: 1467-68 ya da 1470)"
  - `mehmed1.ic_not_dogum`: "TDV iki rivayeti de veriyor"
  - `mustafa2.ic_not_olum`: "TDV kesin tarihte 'muhtemelen' der"
  - `orhan.ic_not_dogum`: "TDV'de müstakil madde yok, tarih akademik icmâ"
  Bunlar tarihin belirsizliğini ya da TDV dışı kaynaklı olduğunu söylüyor, kesin tarihe dayanak
  değil. Ayrıca `orhan.ic_not_dogum`/`ic_not_tartisma` "müstakil madde yok" diyor, oysa `kaynak`
  `TDV: orhan`. Not kendisi de "bayat — `orhan` maddesi canlı" diyor: arşiv notu bayat.

**Kişi (main):** kaynak dışı iz **25 kayıt** (not 20 · tartisma 4 · ic_not_not 2). Bunların
**21'i** `not`/`ic_not_*`te. Bu 21'in hepsi zincir sonrasında `kaynak: TDV: …` alıyor; main'de
çoğu kaynaksız kovasında. Cümleler okununca iki sınıf çıkıyor:
- **Tarih doğrudan TDV'ye bağlanıyor** (ör. "X, TDV İslâm Ansiklopedisi'ne göre <gün> tarihinde
  doğdu"): babur (14 Şubat 1483), ekber (14 Ekim 1542), cengiz-han (21 Ocak 1155),
  kubilay-han (23 Eylül 1215), kemal-reis (874/1470), turgut-reis (~1487), evliya-celebi
  (vefat kesin değil), ibrahim-muteferrika (1745/1747 tartışması). Cümle yapısı bağlantıyı
  taşıyor, ama ⑧ gereği bu yalnız İDDİA: TDV gövdesiyle karşılaştırılmadı (ölçüm görevi dışı).
  `cengiz-han` tarihi TDV ile gün gün sınanmaya değer.
- **TDV atfı başka bir cümleciği kapsıyor, tarihi değil** (§4 ⑧ tuzağı):
  - koprulu-mehmed-pasa: "TDV maddesine göre" yaşı (~80) kapsıyor; 15 Eylül 1656 aynı cümlede
    ama atfın konusu değil.
  - merzifonlu-kara-mustafa-pasa: doğum (1044) önceki cümlede, atıf babanın ölüm hikâyesine.
    Doğum zincirde `kaynak` parantezine taşınmış.
  - pargali-ibrahim-pasa: atıf doğum YERİ için. Tarihin kendisi "kaynaklarda tartışmalı" deniyor.
  - lala-mustafa-pasa: atıf yalnız 1544 çaşnigirliği. 3 Haziran 1557 sonraki cümlede, atıfsız.
  - cerkes-hasan-bey: atıf Abdülaziz'in ölümüne (4 Haziran 1876), kişinin tarihine değil.
  - baron-de-tott: atıf öğrencilere. 29 Nisan 1775 parantezde, atıfsız.
  - jan-sobieski, karl5, ismail, petro1, evrengzib, piri-reis: tarih değil olay/nitelik atfı.
    Bunların bir kısmında `kaynak` kapsayıcı madde (polonya, ispanya, rusya). Doğum/ölüm yılı
    için kaynak kendisi "kaynakta yok" diyor.

## Bulunamadı / ölçülemedi
- Kişi `not` cümlelerindeki tarihlerin TDV gövdesinde gerçekten geçip geçmediği: **ölçülmedi**
  (TDV çekilmedi; görev yalnız ölçüm).
- `padisahlar.js` biyografi alanlarının (dogum, olum, esler …) alan alan dayanağı yok. Ölçülebilecek
  bir alan da yok, ⇒ alan düzeyinde kova kurulamaz. Yalnız kayıt düzeyi ölçüldü.

## Öneri (hüküm YILDIRIM BAYEZIT'te)
1. §1.5'e "Padişah kaynağı" satırı: **TDV 39 · başka 0 · beyan 0 · kaynaksız 2**. `ozel:true`
   dönem kayıtları ya ayrı kovaya ("dönem kaydı, kişi değil") alınsın ya da hesaptan düşülsün.
   Düşülmezse kaynaksız 2 kalıcı yanlış borç gibi görünür.
2. Kapı yok. `kisi_kaynak_say` `PADISAHLAR` için de çağrılabilir (aynı `kisi_kova`). Tavan:
   kaynaksız ≤ 2 (ya da `ozel` hariç 0).
3. Padişah `ic_not_*` arşiv notları bayatlamış olabilir (orhan vakası). Ayrı bir temizlik işi;
   bu ölçüm kapsamında değil.
