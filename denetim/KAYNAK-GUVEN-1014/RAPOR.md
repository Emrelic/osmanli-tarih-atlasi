# KAYNAK-GUVEN-1014 — kronoloji kaynaklarının güven damgası

> Bu dosyayı `arac/kaynak_guven.py` ÜRETİR — elle düzenleme. Yeniden: `py arac/kaynak_guven.py`.

- **Ölçüldüğü taban commit:** `183c324e30aa531f9e677e460745bcc4754d2147` + çalışma ağacındaki değişiklikler (M arac/silsile_yukle.js, ?? arac/kaynak_guven.py, ?? data/kaynak_guven.js)
- **Tablo:** `data/kaynak_guven.js` · 138 girdi · sha256[:12] `68f961734761`
- **Evren:** index.html → `arac/paket_coz.py` → 187 `olaylar*/kronoloji*` dosyası (10542 madde) + `data/devletler.js` (1800 künye, 12253 künye-kronoloji maddesi); yükleme `arac/silsile_yukle.js` (node vm).
- **Parçalama = site:** `js/app.js` `kaynakcaParcala` node'da koşturuldu, 15682 farklı kaynak dizgesinde Python bölmesiyle kıyaslandı → **0 fark**.

## 1. Damga dağılımı (madde sayısı)

| damga | dosya kronolojileri | künye kronolojileri | künye `kaynak` alanı |
|---|---:|---:|---:|
| `guvenli` | 7277 | 2918 | 753 |
| `ikincil` | 968 | 3474 | 541 |
| `taninmayan` | 950 | 1668 | 211 |
| `guvensiz` | 39 | 2034 | 23 |
| `adsiz` | 556 | 7 | 2 |
| `bulunamadi` | 739 | 177 | 270 |
| `bos` | 13 | 1975 | 0 |
| **toplam** | 10542 | 12253 | 1800 |

- `guvenli` — En az bir A parçası.
- `ikincil` — A yok, en az bir B parçası.
- `taninmayan` — A/B yok; tabloya uymayan (ya da K) parça var — tablo büyütülmeli, parça okunmalı.
- `guvensiz` — A/B/tanınmayan yok; en az bir C parçası. SİTEDE GÖSTERİLMEZ (Emre kuralı 14 Ekim 2026).
- `adsiz` — Yalnız adsız dayanak (Y) ve/veya not (N) parçaları.
- `bulunamadi` — Kaynak 'bulunamadı…' ile başlıyor (verinin kendi beyanı).
- `bos` — Kaynak alanı yok ya da boş (VERI-YAPISI: ölçülmemiş, 'kaynaksız' değil).

**`bulunamadi` içinde adı geçen dayanak** ("bulunamadı — … dayanak: X"): dosya A 421 · B 8 · yok 310; künye-kronoloji A 136 · B 1 · yok 40. Bunlar damgada `bulunamadi` kalır (verinin kendi beyanı) ama teyit kampanyasında ucuz kazançtır.

## 2. Parça düzeyi

Parça kademeleri: A 13276 · B 6478 · C 4830 · K 214 · N 1335 · TANINMAYAN 6645 · Y 720

KARIŞIK parça (aynı parçada C ve A/B → C sayıldı): **174** — `karisik_parca.tsv`.

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

D2 evreninde damga: adsiz 2 · bos 13 · bulunamadi 70 · guvenli 2032 · guvensiz 35 · ikincil 277 · taninmayan 268

Taban (tam evren): 2 → 642 kırılma / 0 açık · 2s → 2208 kırılma / 1264 ham açık / 189 AÇIK · 2i → 213 kırılma / 1 açık

| senaryo (gizlenen damgalar) | gizlenen madde | 2 yeni açık | 2s yeni ham açık | 2s yeni AÇIK (kapsam içi, gün hassas) | 2i yeni açık |
|---|---:|---:|---:|---:|---:|
| S1-guvensiz | 35 | 0 | 20 | 12 | 0 |
| S2-guvensiz+bos+bulunamadi | 118 | 3 | 66 | 52 | 1 |
| S3-yalniz-AB-kalir | 388 | 13 | 166 | 122 | 2 |

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
- `d2_yalniz_suzulen_tanikli.tsv`

## 5. Emre kararı bekleyen sınıflandırmalar

- **BRITANNICA** (Encyclopædia Britannica) — şimdi `B`. EMRE KARARI: Emre'nin kuralında yeri belirsiz; B'ye konuldu.
- **LIVIUS** (Livius.org (Jona Lendering)) — şimdi `B`. EMRE KARARI: kişisel site, ama yazar akademik eğitimli tarihçi ve birincil metin çevirileri içeriyor. Geçici olarak B; C'ye inerse ölçüm aracı yeniden koşulur.
- **CHINAKNOWLEDGE** (ChinaKnowledge.de (Ulrich Theobald)) — şimdi `B`. EMRE KARARI: livius.org ile aynı durum (sinolog yazarın kişisel başvuru sitesi). Geçici B.
- **HABER** (Haber kuruluşları (ajans ve gazete)) — şimdi `B`. EMRE KARARI: Emre'nin C listesinde haber yok; 20. yüzyıl olaylarında haber çağdaş tanıktır. Geçici B.
- **ARCHONTOLOGY** (Archontology.org (kişisel derleme)) — şimdi `C`. EMRE KARARI: kişisel derleme ama kaynakçalı; worldstatesmen/rulers ile aynı sınıfa konuldu (C).
- **FMG** (Foundation for Medieval Genealogy (MedLands)) — şimdi `C`. EMRE KARARI: amatör soy derlemesi ama birincil kaynak alıntılı; geçici C.
- **KUREANS** (kureansiklopedi.com) — şimdi `C` (görevde C örneği olarak verildi). Veride 30+ parça onu "TDV Vakfı" yayını diye anıyor; yayıncısı TDV ise B'ye çıkabilir.
- **Wikisource üzerinden Britannica 1911** ("Britannica 1911 'Cracow' (Wikisource)") — şimdi `C` (VIKIPEDI deseni wikisource'u kapsıyor, parça KARIŞIK → C). Metin 1911 basılı ansiklopedinin aktarımıdır; B mi C mi?
- **erenow.org** — Bosworth, *New Islamic Dynasties* gibi akademik kitapların izinsiz kopyalarını barındırıyor; şimdi `C` (POPULER-TARIH). İçerik A, barındırıcı C: parça kitaba göre mi sınıflansın?
- **KARIŞIK kuralı** — aynı parçada C ve A/B geçerse parça C sayılıyor ("X, CUP … (Wikipedia üzerinden)", "Wikipedia … atıf dökümü (Majumdar …)"). Bilgi Vikipedi'den devşirildiği için muhafazakâr seçim; Emre onayı.
- **`adsiz` damgası** ("standart akademik kaynak", "el-kitabi" — eser adı yok) — `guvensiz` gibi gizlensin mi, yoksa ayrı damga olarak gösterilsin mi? Şimdi ayrı damga, gizleme kararı YOK.
- **`el-kitabi`** sitede TDV bağına çevriliyor (js/app.js `_KC_SLUG` → islamansiklopedisi.org.tr/el-kitabi): arayüz işinde `tdv_slug.haric` okunmalı.
- **`bulunamadi` + adı geçen dayanak** ("bulunamadı — TDV'de yok, dayanak: P. Jackson, The Delhi Sultanate") — damga `bulunamadi` kalıyor; A dayanaklı olanlar `guvenli` sayılsın mı?
- **ENCYCLOPEDIA-COM** (B, derleme platform) ve **EBSCO-RS** (B; 92 bağın 92'si /research-starters/) — öneri B.
- **Genel sınıf kuralları** RESMI-SITE (.gov/.gob/meclis… → B) ve UNIV-SITE (.edu/.ac.xx → B) — kurum sitesi tek tek sınıflanmadan B sayılıyor; onay.
- **AKADEMIK-ESER** — yazar adıyla tanınan monografiler A sayılıyor (Riasanovsky, Setton, Coedès, Kamen, Payne…); yayınevi yazılmamış olsa bile. Liste yalnız veride sık geçen standart eserlerden.
