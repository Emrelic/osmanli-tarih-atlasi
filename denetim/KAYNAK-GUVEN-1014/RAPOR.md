# KAYNAK-GUVEN-1014 — kronoloji kaynaklarının güven damgası

> Bu dosyayı `arac/kaynak_guven.py` ÜRETİR — elle düzenleme. Yeniden: `py arac/kaynak_guven.py`.

- **Ölçüldüğü taban commit:** `ceb0ce402101ec073aef56f01024a8f836ed9459` (temiz ağaç)
- **Tablo:** `data/kaynak_guven.js` · 159 girdi · sha256[:12] `ab7627019507`
- **Evren:** index.html → `arac/paket_coz.py` → 283 `olaylar*/kronoloji*` dosyası (17921 madde) + `data/devletler.js` (2265 künye, 13372 künye-kronoloji maddesi); yükleme `arac/silsile_yukle.js` (node vm).
- **Parçalama = site:** `js/app.js` `kaynakcaParcala` node'da koşturuldu, 24213 farklı kaynak dizgesinde Python bölmesiyle kıyaslandı → **0 fark**.

## 1. Damga dağılımı (madde sayısı)

| damga | dosya kronolojileri | künye kronolojileri | künye `kaynak` alanı |
|---|---:|---:|---:|
| `guvenli` | 12108 | 3847 | 1218 |
| `ikincil` | 2411 | 3867 | 440 |
| `taninmayan` | 2143 | 1987 | 250 |
| `guvensiz` | 499 | 1564 | 99 |
| `bulunamadi` | 757 | 180 | 258 |
| `bos` | 3 | 1927 | 0 |
| **toplam** | 17921 | 13372 | 2265 |
| ↳ `guvensiz` alt neden C | 450 | 1559 | 97 |
| ↳ `guvensiz` alt neden `adsiz` | 49 | 5 | 2 |

- `guvenli` — En az bir A parçası.
- `ikincil` — A yok, en az bir B parçası.
- `taninmayan` — A/B yok; tabloya uymayan (ya da K) parça var — tablo büyütülmeli, parça okunmalı.
- `guvensiz` — A/B/tanınmayan yok; ya en az bir C parçası (alt neden C) ya da yalnız adsız dayanak/not parçaları (alt neden adsiz). SİTEDE GÖSTERİLMEZ (Emre kuralı 14 Ekim 2026).
- `bulunamadi` — Kaynak 'bulunamadı…' ile başlıyor (verinin kendi beyanı).
- `bos` — Kaynak alanı yok ya da boş (VERI-YAPISI: ölçülmemiş, 'kaynaksız' değil).

**`bulunamadi` içinde adı geçen dayanak** ("bulunamadı — … dayanak: X"): dosya A 423 · B 9 · yok 325; künye-kronoloji A 137 · B 3 · yok 40. Bunlar damgada `bulunamadi` kalır (verinin kendi beyanı) ama teyit kampanyasında ucuz kazançtır — tam liste `bulunamadi_dayanakli.tsv`.

## 2. Parça düzeyi

Parça kademeleri: A 21018 · B 8628 · C 6154 · K 1017 · N 2180 · TANINMAYAN 12710 · Y 718

KARIŞIK parça (aynı parçada C ve A/B → C sayıldı): **253** — `karisik_parca.tsv`.

En sık eşleşen tablo kodları: TDV 14426 · VIKIPEDI 4461 · NOT 3217 · BRITANNICA 2773 · AKADEMIK-ESER 2187 · ARCHIVE-ORG 1301 · TRECCANI 1102 · CAMBRIDGE 703 · HISTORY-STATE 653 · IRANICA 644 · UNIV-YAYIN-KISALTMA 624 · POPULER-TARIH 622 · COUNTRYSTUDIES 532 · PDF-KAYNAK 517 · ENCYCLOPEDIA-COM 504 · UNIV-YAYIN 490 · HAKEMLI-DERGI 444 · RESMI-SITE 433 · EL-KITABI 405 · UNIV-SITE 398 · LIVIUS 358 · UN 337 · ADSIZ 315 · SECKIN-KURUM 308 · WORLDHISTORY 307 · MUZE 304 · OXFORD 275 · HABER 267 · NDB 251 · LAROUSSE 209 · DBI 186 · EBSCO-RS 183 · GEC 172 · ENC-UKRAINE 170 · WW1-ONLINE 169 · MEVZUAT 162 · GLOBALSECURITY 155 · ENC-REGIONAL 125 · HRV-ENC 124 · SNL 117

### En sık 30 tanınmayan parça (9635 ayrı parça; tamamı ilk 300 `taninmayan_parca.tsv`)

| # | adet | parça |
|---:|---:|---|
| 1 | 447 | VERI-MS1-1281 |
| 2 | 68 | T5-1000-A-1016 |
| 3 | 62 | SINIR-BENELUX |
| 4 | 45 | nokta kaynağı yerlesimler_mo_*.js |
| 5 | 31 | Hall, D. G. E., A History of South-East Asia, 4. baskı (London: Macmillan, 1981) |
| 6 | 29 | T5-1000-B-1016 |
| 7 | 16 | https://unnc.globalimpact.cn/en/publications/a-revised-chronology-for-the-archaeology-of-the-lower-yangtze-chi |
| 8 | 15 | T5-1000-A-1016 (renk bekleyen, RENK-PAKET-1016 sonrası) |
| 9 | 14 | (madde ONCE1281-GERIYE yerleşim zincirinin devir günü |
| 10 | 14 | Anne Frank Huis (Maastricht) |
| 11 | 13 | devir günü künye f=1260-01-01 (YIL DÜZEYİ |
| 12 | 12 | gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元») |
| 13 | 12 | Scott, W. H., "Filipinos in China before 1500", Asian Studies 21 (1983), s. 1-19 |
| 14 | 12 | Meier JS, Goring-Morris AN, Munro ND 2016, PLoS One 11(11):e0166573, Tablo 1 (Guney Levant, +-50-100 yil |
| 15 | 12 | cal BP->MO: BP-1950) |
| 16 | 12 | Sallaberger & Schrakamp (ed.), History & Philology (ARCANE III), Brepols 2015 |
| 17 | 12 | Rosellón/Conflent'e de üstünlük kurdu |
| 18 | 12 | Liu Xu vd., Jiu Tang shu, juan 53-56 (Li Mi: 號為魏公…二月…即位，稱元年 |
| 19 | 12 | Wang Shichong: 世充僭即皇帝位，建元曰開明，國號鄭 |
| 20 | 12 | Xiao Xian: 自稱梁王…義寧二年，僭稱皇帝 |
| 21 | 11 | ZİNCİR-BK-1024 |
| 22 | 10 | elle doğrulama bekler |
| 23 | 10 | açıldı, okundu |
| 24 | 10 | künye __BOSLUK__ — data/devletler.js |
| 25 | 10 | D. Sharma 1959 |
| 26 | 10 | R.B. Singh 1964) |
| 27 | 10 | Zunes/Mundy 2010 |
| 28 | 9 | Bischof H. 2009, 'Los periodos Arcaico Tardío, Arcaico Final y Formativo Temprano en el valle de Casma: evidencias e hipótesis', Boletín de Arqueología PUCP 13: |
| 29 | 9 | nokta kaynağı yerlesimler_mo_*.js kaynak: alanı |
| 30 | 9 | T5-1000-B-1016 (renk bekleyen, RENK-PAKET-3-1016 sonrası) |

### Tanınmayan parçalardaki en sık 30 alan adı (`taninmayan_alanadi.tsv`)

kotobank.jp 17 · unnc.globalimpact.cn 16 · exoriente.org 14 · blackpast.org 12 · unesdoc.unesco.org 11 · kerma.ch 11 · cssn.cn 10 · booksite.ru 8 · bmgn-lchr.nl 7 · famsi.org 7 · al-bab.com 7 · east.library.utoronto.ca 7 · pbs.org 6 · wp.arcticportal.org 6 · wiesbaden.de 6 · thelatinlibrary.com 6 · nit.tuva.asia 5 · dzieje.pl 5 · muzhp.pl 5 · net.jogtar.hu 5 · talvisota.fi 5 · d.dccam.org 5 · torino.txt 5 · sudak.txt 5 · lrt.lt 5 · gutenberg.net.au 5 · bsk.nios.ru 5 · globalvoices.org 5 · trap.fo 5 · liechtensteinusa.org 5

## 3. Değişmez 2 bağımlılığı

Yöntem: `arac/denetle.py` içe aktarıldı; `degismez2`, `kapsam_disi`, `yil_temsili_ayir` denetle'nin ana akışındaki gibi çağrıldı (çekirdek yerleşimler = `KUYRUK_DOSYALARI` hariç). Madde evreni = `denetle.olaylari_yukle()` (disk glob: `olaylar*.js` + `kronoloji_sinir*.js`), 7332 madde / 167 dosya; birebir aynı kurulduğu doğrulandı. Süzülmüş evrende AÇIK olup tam evrende AÇIK olmayan kırılma = ±30 gün tanıkları YALNIZ süzülen maddeler olan kırılma.

D2 evreninde damga: bos 3 · bulunamadi 89 · guvenli 5029 · guvensiz 183 · ikincil 793 · taninmayan 1235

Taban (tam evren): 2 → 742 kırılma / 0 açık · 2s → 3526 kırılma / 1448 ham açık / 201 AÇIK · 2i → 282 kırılma / 0 açık

| senaryo (gizlenen damgalar) | gizlenen madde | 2 yeni açık | 2s yeni ham açık | 2s yeni AÇIK (kapsam içi, gün hassas) | 2i yeni açık |
|---|---:|---:|---:|---:|---:|
| S1-guvensiz | 183 | 0 | 13 | 3 | 0 |
| S2-guvensiz+bos+bulunamadi | 275 | 2 | 54 | 34 | 0 |
| S3-yalniz-AB-kalir | 1510 | 19 | 414 | 314 | 1 |

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
