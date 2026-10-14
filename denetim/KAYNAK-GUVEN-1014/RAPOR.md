# KAYNAK-GUVEN-1014 — kronoloji kaynaklarının güven damgası

> Bu dosyayı `arac/kaynak_guven.py` ÜRETİR — elle düzenleme. Yeniden: `py arac/kaynak_guven.py`.

- **Ölçüldüğü taban commit:** `212fdfb822d90582daef6232a9a392b6f25eebb3` + çalışma ağacındaki değişiklikler (M arac/kaynak_guven.py, M data/kaynak_guven.js)
- **Tablo:** `data/kaynak_guven.js` · 138 girdi · sha256[:12] `5cb233561704`
- **Evren:** index.html → `arac/paket_coz.py` → 187 `olaylar*/kronoloji*` dosyası (10542 madde) + `data/devletler.js` (1800 künye, 12253 künye-kronoloji maddesi); yükleme `arac/silsile_yukle.js` (node vm).
- **Parçalama = site:** `js/app.js` `kaynakcaParcala` node'da koşturuldu, 15682 farklı kaynak dizgesinde Python bölmesiyle kıyaslandı → **0 fark**.

## 1. Damga dağılımı (madde sayısı)

| damga | dosya kronolojileri | künye kronolojileri | künye `kaynak` alanı |
|---|---:|---:|---:|
| `guvenli` | 7277 | 2918 | 753 |
| `ikincil` | 964 | 3417 | 540 |
| `taninmayan` | 952 | 1678 | 211 |
| `guvensiz` | 597 | 2088 | 26 |
| `bulunamadi` | 739 | 177 | 270 |
| `bos` | 13 | 1975 | 0 |
| **toplam** | 10542 | 12253 | 1800 |
| ↳ `guvensiz` alt neden C | 41 | 2081 | 24 |
| ↳ `guvensiz` alt neden `adsiz` | 556 | 7 | 2 |

- `guvenli` — En az bir A parçası.
- `ikincil` — A yok, en az bir B parçası.
- `taninmayan` — A/B yok; tabloya uymayan (ya da K) parça var — tablo büyütülmeli, parça okunmalı.
- `guvensiz` — A/B/tanınmayan yok; ya en az bir C parçası (alt neden C) ya da yalnız adsız dayanak/not parçaları (alt neden adsiz). SİTEDE GÖSTERİLMEZ (Emre kuralı 14 Ekim 2026).
- `bulunamadi` — Kaynak 'bulunamadı…' ile başlıyor (verinin kendi beyanı).
- `bos` — Kaynak alanı yok ya da boş (VERI-YAPISI: ölçülmemiş, 'kaynaksız' değil).

**`bulunamadi` içinde adı geçen dayanak** ("bulunamadı — … dayanak: X"): dosya A 421 · B 8 · yok 310; künye-kronoloji A 136 · B 1 · yok 40. Bunlar damgada `bulunamadi` kalır (verinin kendi beyanı) ama teyit kampanyasında ucuz kazançtır — tam liste `bulunamadi_dayanakli.tsv`.

## 2. Parça düzeyi

Parça kademeleri: A 13276 · B 6398 · C 4910 · K 214 · N 1335 · TANINMAYAN 6645 · Y 720

KARIŞIK parça (aynı parçada C ve A/B → C sayıldı): **173** — `karisik_parca.tsv`.

En sık eşleşen tablo kodları: TDV 9634 · VIKIPEDI 3187 · BRITANNICA 2630 · NOT 2316 · AKADEMIK-ESER 1222 · POPULER-TARIH 609 · COUNTRYSTUDIES 511 · HISTORY-STATE 509 · IRANICA 475 · EL-KITABI 407 · CAMBRIDGE 400 · UNIV-YAYIN-KISALTMA 363 · UNIV-YAYIN 346 · WORLDHISTORY 344 · RESMI-SITE 341 · UN 337 · UNIV-SITE 334 · ADSIZ 316 · PDF-KAYNAK 307 · ENCYCLOPEDIA-COM 283 · SECKIN-KURUM 275 · MUZE 266 · HABER 264 · EBSCO-RS 229 · WW1-ONLINE 165 · GLOBALSECURITY 163 · LIVIUS 162 · TRECCANI 142 · WORLDSTATESMEN 116 · GEC 108 · ENC-REGIONAL 105 · HAKEMLI-DERGI 103 · MEVZUAT 98 · KUREANS 97 · SAHO 96 · UN-BELGE 82 · ARCHONTOLOGY 77 · NDB 72 · OXFORD 70 · AVALON 70

### En sık 30 tanınmayan parça (5525 ayrı parça; tamamı ilk 300 `taninmayan_parca.tsv`)

| # | adet | parça |
|---:|---:|---|
| 1 | 10 | D. Sharma 1959 |
| 2 | 10 | R.B. Singh 1964) |
| 3 | 10 | Zunes/Mundy 2010 |
| 4 | 9 | https://www.blackpast.org/global-african-history/events-global-african-history/the-zanzibar-revolution-of-1964/ |
| 5 | 9 | Shaw 2000 |
| 6 | 8 | Jain 1972 |
| 7 | 8 | Trivedi 1991 |
| 8 | 8 | Sen 1999) |
| 9 | 8 | St John 2011 |
| 10 | 8 | Livy, Ab urbe condita (gelenek) |
| 11 | 8 | Toronto east.library.utoronto.ca/node/28218 |
| 12 | 7 | VLE — LDK ve Moskova savaşları |
| 13 | 7 | Livonijos karas |
| 14 | 7 | Zapolskij Jamo paliaubos |
| 15 | 7 | Glinskio maištas — 1494 barışı |
| 16 | 7 | 1508-10-08 barışı |
| 17 | 7 | 1537 ateşkesi |
| 18 | 7 | 1563-1579 Polotsk |
| 19 | 7 | 1571 ateşkesi |
| 20 | 7 | 1582-01-15 ateşkesi |
| 21 | 7 | D. Sharma, Early Chauhan Dynasties, 1959 |
| 22 | 7 | C. Talbot, The Last Hindu Emperor, 2015) |
| 23 | 7 | R.K. Dikshit, The Candellas of Jejakabhukti, 1976 |
| 24 | 7 | Annuario Pontificio / papalık listeleri — bu oturumda web teyidi yapılamadı |
| 25 | 7 | Abdur Rahman, The Last Two Dynasties of the Sahis (1976) |
| 26 | 7 | Andrade 2005 |
| 27 | 7 | vdM |
| 28 | 6 | WebSearch çapraz doğrulama (ikincil akademik kaynak) — birincil kaynağa ulaşılamadı |
| 29 | 6 | Pskov Cumhuriyeti |
| 30 | 6 | Rus-Litvanya savaşları (M. M. Krom) — 1503-04-02 ateşkes (onay Vilnius 08-27) |

### Tanınmayan parçalardaki en sık 30 alan adı (`taninmayan_alanadi.tsv`)

blackpast.org 14 · east.library.utoronto.ca 8 · al-bab.com 7 · talvisota.fi 6 · pbs.org 6 · wp.arcticportal.org 6 · wiesbaden.de 6 · portalinvestigacion.um.es 6 · bsk.nios.ru 5 · globalvoices.org 5 · trap.fo 5 · liechtensteinusa.org 5 · jur.ph 5 · d.dccam.org 4 · dacb.org 4 · bakucity.preslib.az 4 · cambcomm.org.uk 4 · camer.be 4 · hiraizumi.or.jp 4 · austria-forum.org 4 · oca.org 4 · theconversation.com 4 · archive.kosovotwopointzero.com 4 · palazzoducale.lucca.it 4 · okupacijskemeje.si 4 · haiti.org 4 · revistapesquisa.fapesp.br 4 · swatreliefinitiative.org 4 · encyclopedia.pub 4 · nit.tuva.asia 3

## 3. Değişmez 2 bağımlılığı

Yöntem: `arac/denetle.py` içe aktarıldı; `degismez2`, `kapsam_disi`, `yil_temsili_ayir` denetle'nin ana akışındaki gibi çağrıldı (çekirdek yerleşimler = `KUYRUK_DOSYALARI` hariç). Madde evreni = `denetle.olaylari_yukle()` (disk glob: `olaylar*.js` + `kronoloji_sinir*.js`), 2697 madde / 89 dosya; birebir aynı kurulduğu doğrulandı. Süzülmüş evrende AÇIK olup tam evrende AÇIK olmayan kırılma = ±30 gün tanıkları YALNIZ süzülen maddeler olan kırılma.

D2 evreninde damga: bos 13 · bulunamadi 70 · guvenli 2032 · guvensiz 39 · ikincil 273 · taninmayan 270

Taban (tam evren): 2 → 642 kırılma / 0 açık · 2s → 2208 kırılma / 1264 ham açık / 189 AÇIK · 2i → 213 kırılma / 1 açık

| senaryo (gizlenen damgalar) | gizlenen madde | 2 yeni açık | 2s yeni ham açık | 2s yeni AÇIK (kapsam içi, gün hassas) | 2i yeni açık |
|---|---:|---:|---:|---:|---:|
| S1-guvensiz | 39 | 0 | 22 | 12 | 0 |
| S2-guvensiz+bos+bulunamadi | 122 | 3 | 68 | 52 | 1 |
| S3-yalniz-AB-kalir | 392 | 13 | 170 | 123 | 2 |

Liste: `d2_yalniz_suzulen_tanikli.tsv` (senaryo, değişmez, tarih, yerleşimler, devlet eski→yeni, tanık maddeler, tanık kaynakları). Teyit kampanyasında İLK sıra S1 satırlarıdır.

## 4. Dosyalar

- `ozet.json`
- `damga_dosya.tsv`
- `damga_kunye_bolge.tsv`
- `damga_yuzyil.tsv`
- `taninmayan_parca.tsv`
- `taninmayan_alanadi.tsv`
- `karisik_parca.tsv`
- `guvensiz_maddeler.tsv`
- `bulunamadi_dayanakli.tsv`
- `d2_yalniz_suzulen_tanikli.tsv`

## 5. Emre kararları (14 Ekim 2026) ve açık notlar

- ✅ Britannica → B kalır.
- ✅ livius.org, chinaknowledge.de → B kalır.
- ✅ Haber kuruluşları (HABER) → B, AMA yalnız olay tarihi ≥ 1946-01-01 olan maddede; daha eski (ya da tarihi okunamayan) maddede C. Tabloda `yalniz_sonra`/`once_kademe` alanı.
- ✅ archontology, FMG/MedLands, kureansiklopedi, erenow, Wikisource üzerinden Britannica 1911 → C kalır.
- ✅ KARIŞIK kuralı (aynı parçada C ile A/B → C) onaylandı.
- ✅ `adsiz` (eser adı vermeyen beyan: "standart akademik kaynak", "el-kitabi") → `guvensiz` damgasına katıldı (gizlenir, teyide gider); alt neden `adsiz` ayrı sayılır.
- ✅ .gov/.edu genel sınıfı (RESMI-SITE, UNIV-SITE) → B onaylandı.
- ✅ "bulunamadı — dayanak: A eser" → damga `bulunamadi` kalır; "dayanak adı geçen" alt sayısı ayrı listelenir (`bulunamadi_dayanakli.tsv`).
- **`el-kitabi`** sitede TDV bağına çevriliyor (js/app.js `_KC_SLUG` → islamansiklopedisi.org.tr/el-kitabi): arayüz işinde `tdv_slug.haric` okunmalı.
- **ENCYCLOPEDIA-COM** (B) ve **EBSCO-RS** (B; 92 bağın 92'si /research-starters/) ile **AKADEMIK-ESER** (yazar adıyla A) için ayrı karar alınmadı; tablo bugünkü hâliyle uygulandı.
