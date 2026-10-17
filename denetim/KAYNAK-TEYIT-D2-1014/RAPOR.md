# KAYNAK-TEYIT-D2-1014 — S1 tanıklarının güvenilir kaynakla teyidi

**İş:** `denetim/KAYNAK-GUVEN-1014/d2_yalniz_suzulen_tanikli.tsv` içindeki `S1-guvensiz` satırları
(22 Değişmez 2s kırılması, 22 tanık madde). Kural: Emre, 14 Ekim 2026 — güvensiz kaynaklı madde
A/B kaynakla teyit edilir, edilemezse sitede gösterilmez.

**Yöntem:** Her maddenin iddiası ve GÜNÜ bölgesinin A kaynağında arandı (TDV, Iranica, NDB, DBE,
BM belgesi, FRUS…); A yoksa B (Britannica, Banglapedia, SAHO). Rakamı taşıyan cümle ham metinden
okundu (curl / pypdf / tarayıcı `innerText`; özetleyiciye güvenilmedi). Teyit edilen maddede
`kaynak` alanının BAŞINA güvenilir kaynak eklendi (`; ` ayırıcıyla, künye + URL + ≤15 kelimelik
cümle); eski kaynak silinmedi, `t`/`b`/`d`/`gun` alanlarına dokunulmadı. Gün farklı çıkan maddeye
dokunulmadı.

Ölçüm: UMIT, worktree `agent-afe4841c294899c10`, taban `8cef8be5` + bu işin değişiklikleri.

## Özet

| hüküm | adet |
|---|---:|
| Teyit edildi (gün dahil) — kaynak eklendi | 17 |
| Tarih çelişkisi — dokunulmadı | 3 |
| Teyit edilemedi — dokunulmadı | 2 |
| **toplam** | **22** |

`py arac/kaynak_guven.py` (tam koşu, D2 senaryoları dahil):

| | önce | sonra |
|---|---:|---:|
| S1 · 2s yeni ham açık | 22 | **5** |
| S1 · 2s yeni AÇIK (kapsam içi, gün hassas) | 12 | **3** |
| dosya maddesi `guvensiz` | 597 | 580 |
| dosya maddesi `guvenli` | 7277 | 7288 |
| dosya maddesi `ikincil` | 964 | 970 |

Kalan 5 S1 satırı: 1479-01-20, 1593-03-17, 1775-01-14, 1911-04-12, 1945-08-18 (aşağıda çelişki /
teyit edilemedi bölümleri). `py arac/denetle.py` → çıkış **0** (Değişmez 8 `coz-c` sonrası ölçüldü).

## 1. Teyit edilenler (17)

| # | madde | önceki kaynak | eklenen kaynak (kademe) | hüküm |
|---|---|---|---|---|
| 1 | `kronoloji_sinir_nokta2.js` [8] 1206-03-15 Muizzüddin'in öldürülmesi | newworldencyclopedia, worldhistory.org | TDV, "Gurlular" (A): Demyek'te İsmâilî fedaisince öldürüldü, 602/1206 — **yalnız yıl**; Britannica, "Muʿizz al-Dīn Muḥammad ibn Sām" (B): "died March 15, 1206, Damyak" | teyit; gün B'den (TDV "Muizzüddin Muhammed" maddesi Gurlular'a yönlendirir, gün vermez; Iranica "Ghurids" de yalnız 602/1206) |
| 2 | `nokta2` [18] 1399-10-19 Henry IV Man'ı Percy'ye verdi | Manx Society / isle-of-man.com (C), Vikipedi | Calendar of the Patent Rolls, Henry IV vol. I 1399-1401 (PRO 1903), s. 27 + asıl kayıt "Oct. 19. Westminster" (A) | teyit. Not: maddenin `d`si "İskoçya→İngiltere devri bu kaynaklarla doğrulanamadı" diyor; CPR bunu çözmez (ada Scrope'tan müsadere, İngiliz tacının tasarrufu) — `iskocya→ingiltere` boyası ayrı soru |
| 4 | `nokta2` [21] 1482-03-27 Burgonya Düşesi Maria'nın ölümü | Vikipedi | NDB 16 (1990) s. 188 "Maria, Herzogin von Burgund" (A): "† 27.3.1482 Brügge"; vasiyetle çocukları mirasçı, Maximilian vasi | teyit |
| 5 | `nokta2` [22] 1495-07-21 Württemberg dükalığa yükseldi | EB1911 (Wikisource, C), Vikipedi | NDB 4 (1959) s. 234-235 "Eberhard im Bart" (A): "während des Wormser Reichstags am 21.7.1495" | teyit |
| 7 | `nokta3` [5] 1597-05-27 Dharmapala'nın ölümü, Kotte Portekiz'e | Vikipedi, lakdiva.org.lk (C) | H. W. Codrington, *A Short History of Ceylon*, Macmillan 1926 (archive.org dli.csl.7980): "On May 27, 1597, Dharmapala died" + 1580 bağışı; Britannica "Sri Lanka: The Portuguese…" (B): 1597 — yalnız yıl | teyit (damga `ikincil`: Codrington parçası tabloda tanınmıyor, Britannica B). Codrington aynı eser, lakdiva kopyası yerine basılı künye |
| 8 | `nokta2` [29] 1603-03-24 Ieyasu şogun | samurai-archives (C), Vikipedi | Kasaya Kazuhiko, *Nihon Kenkyū* 7 (1992) s. 89-104, doi:10.15055/00000893 (A): "慶長八年(一六〇三)二月一二日" Fushimi'de şogunluk fermanı | teyit — **ay-güneş takvimi günü**; Miladi 24 Mart 1603 karşılığı çevirimdir, kaynakta Miladi gün yok (beyan `kaynak`ta). Britannica yalnız 1603 |
| 9 | `nokta3` [6] 1656-05-12 Colombo'nun VOC'ye teslimi | sundaytimes.lk (1946 öncesi olay ⇒ C), Vikipedi | Codrington 1926: "capitulate on May 12, 1656"; Britannica (B): "In May 1656 the Portuguese surrendered" — ay düzeyi | teyit (gün Codrington'dan, ay B'den; damga `ikincil`) |
| 10 | `nokta2` [35] 1694-02-06 Palmares'in sonu | Vikipedi, historiadomundo (C) | Britannica, "Palmares" (B): "on Feb. 6, 1694, putting an end to the republic" | teyit (B) |
| 11 | `nokta2` [40] 1757-06-23 Plassey | worldhistory.org, newworldencyclopedia | Banglapedia, "Palashi, The Battle of" (B): "23 June 1757" | teyit (B) |
| 13 | `olaylar_ek12.js` [7] 1815-05-03 Krakov serbest şehir | EB1911 Wikisource (C) | P. Cichoń, *Krakowskie Studia z Historii Państwa i Prawa* 12/4 (2019), doi:10.4467/20844131KS.19.025.11643 (A): "additional treaty signed on 3 May 1815" | teyit. (Encyklopedia PWN çevrimdışı: "Serwis Nieaktywny") |
| 14 | `nokta3` [14] 1899-02-12 İspanya Kuzey Marianaları Almanya'ya | Vikipedi | Pozuelo Mascaraque, *Anales de Historia Contemporánea* 14 (1998), revistas.um.es (A): Almodóvar–Radowitz "Declaración" 12.II.1899; Gaceta de Madrid sayı 164, 13.VI.1899 (birincil): "firmó, el 12 de Febrero … una declaración … cediendo" | teyit — **not:** 12 Şubat devir *deklarasyonu*; antlaşma 30 Haziran 1899'da imzalandı (Pozuelo). Madde "Antlaşma ile" diyor; gün deklarasyonun günüdür |
| 16 | `nokta2` [71] 1918-11-30 Württemberg Kralı II. Wilhelm çekildi | Vikipedi | Archivportal-D "In Focus - Change of System" (Bundesarchiv / Landesarchiv BW; belge HStAS M 743/1 Bü 1 Nr. 10) (A): "On November 30, 1918 … King Wilhelm II"; NDB 28 (2024) "Wilhelm II." — gün yok | teyit |
| 17 | `nokta2` [72] 1918-12-01 Danimarka-İzlanda Birlik Yasası | Vikipedi, timarit.is (1946 öncesi gazete ⇒ C) | Britannica, "Act of Union (Iceland, 1918)" (B): "On December 1, 1918, Iceland became a separate state" | teyit (B). A arandı: lex.dk (B, gün yok), SNL "Islands historie" (B, yalnız yıl), Alþingi sitesi Cloudflare doğrulaması istedi (geçilmedi) |
| 19 | `kronoloji_sinir_halef_1923_2000.js` [201] 1968-01-31 Nauru bağımsızlığı | Vikipedi, newworldencyclopedia | BM GK kararı A/RES/2348 (XXII), 19.XII.1967 (A): "upon the accession of Nauru to independence on 31 January 1968" | teyit (kararlaştırılmış gün; BM belge metni PDF'ten okundu) |
| 20 | `halef` [219] 1974-02-07 Grenada bağımsızlığı | Vikipedi | history.state.gov "Grenada" (A): "recognized Grenada on February 7, 1974, on the occasion of Grenada attaining independence" | teyit |
| 21 | `halef` [241] 1977-12-06 Bophuthatswana "bağımsızlığı" | Vikipedi, worldstatesmen (C) | South African History Online, "Bophuthatswana" (B): "On 6 December 1977 … granted independence by the South African government" | teyit (B) |
| 22 | `halef` [247] 1979-03-13 Grenada darbesi | Vikipedi | FRUS 1977-1980 Vol. XXIII Doc. 313 (A): "The coup began on March 13, while Gairy was in New York" | teyit |

## 2. Tarih çelişkisi (3) — madde DEĞİŞTİRİLMEDİ

Tarih değişikliği haritadaki kırılmayı da taşır (aynı güne bağlı `d:`/`s:` dönemi); karar Emre'nin.

| # | madde | atlas günü | kaynağın günü | kaynak |
|---|---|---|---|---|
| 3 | `nokta2` [20] II. Juan'ın ölümü / Ferdinand'ın Aragon tahtı | **1479-01-20** | **1479-01-19** | DBE (RAH), "Juan II de Aragón y de Navarra": "Barcelona, 19.I.1479" (https://dbe.rah.es/biografias/10845/juan-ii-de-aragon-y-de-navarra → historia-hispanica.rah.es/biografias/25004); Gran Enciclopèdia Catalana "Joan II de Catalunya-Aragó" (B) de 19 Ocak veriyor. 20 Ocak yalnız Vikipedi'de |
| 15 | `olaylar_2s_0918.js` [8] Dâru'l-Kûtî Sultanlığı'nın kaldırılması | **1911-04-12** | **1911-01-12** (Sultan es-Senûsî'nin öldürülmesi) | IRD (Institut de recherche pour le développement) biyografi notu "Jean Julien Vincent Modat": Senoussi "fut tué le 12 janvier 1911", ertesi gün hürriyet ilânı (https://horizon.documentation.ird.fr/exl-doc/pleins_textes/divers16-10/010056752.pdf). Maddenin kendi kaynağı "GÜN KABA" diyor; 12 Nisan dayanaksız görünüyor. Cordell 1985 (Univ. of Wisconsin Press) okunamadı |
| 18 | `nokta2` [77] Mançukuo'nun sonu | **1945-08-18** | **1945-08-17** ("解体" ilânı) | Nihon Daihyakka Zensho (Shōgakukan), "満州国", Kimijima Kazuhiko: "8月17日に「解体」が宣言された"; Yamakawa Nihonshi Shō-jiten aynı (kotobank.jp/word/満州国-137955). Pu Yi'nin tahttan çekilme fermanı çoğu yerde 18 Ağustos; Britannica (Puyi) yalnız "August 1945". Çelişki bir günlük, ±30 gün içinde; yine de A/B kaynakta 18 Ağustos bulunamadı. Not: maddenin "Sovyet Kızıl Ordusu Hsinking'i aldı" kısmı da aynı güne bağlanmış — ayrı olay |

## 3. Teyit edilemedi (2) — dokunulmadı

| # | madde | aranan kaynaklar ve terimler | bulunan |
|---|---|---|---|
| 6 | `nokta3` [4] 1593-03-17 I. Rajasinha'nın ölümü, Sitavaka'nın çöküşü | Britannica (Rajasinha I, Sri Lanka "The Portuguese in Sri Lanka 1505-1658"); Codrington, *A Short History of Ceylon* (1926, archive.org tam metin); DBNL (Hollanda); archive.org Seylan tarihleri | **Yalnız yıl düzeyi:** Britannica "At the death of Rajasinha in 1593"; Codrington "died of blood poisoning early in 1593". 17 Mart yalnız Vikipedi'de. Kaynak eklenmedi (gün uydurulmaz) |
| 12 | `nokta2` [43] 1775-01-14 Lamphun'da Birmanyalıların yenilgisi, Chiang Mai | Britannica "Chiang Mai"; Wyatt, *Thailand: A Short History* (Yale UP) ve Penth, *A Brief History of Lan Na* — çevrimiçi metin yok; KMUTT King Taksin sayfası (Tay dili, kodlama okunamadı); Cambridge History of Southeast Asia erişilemedi | Britannica **1774** diyor ("In 1774 the Siamese king Taksin drove out the Myanmar") — yıl düzeyinde bile çelişki. Gün bulunamadı |

## 4. Değişen dosyalar

- `data/kronoloji_sinir_nokta2.js` (11 madde), `data/kronoloji_sinir_nokta3.js` (3), `data/kronoloji_sinir_halef_1923_2000.js` (4), `data/olaylar_ek12.js` (1) — yalnız `kaynak` alanı.
- `data/paket_*.js`, `data/paket_kunye.json`, `index.html` — `paketle.py yenile` + `surum_damgala.py` (r12310).
- `denetim/KAYNAK-GUVEN-1014/*` — `arac/kaynak_guven.py` tam koşusunun yeniden ürettiği ölçüm.

## 5. Açık notlar

- Tabloda tanınmayan ama akademik iki künye kullanıldı: Codrington 1926 (Macmillan) ve Gaceta de Madrid (boe.es, birincil resmî gazete). İkisi de `taninmayan` parça sayılır; madde damgasını yanındaki A/B parça belirler. `boe.es` (BOE tarihî Gaceta arşivi) tabloya A olarak eklenebilir — öneri.
- Ieyasu maddesinde Miladi gün çevirimdir (Keichō 8/2/12 → 24 Mart 1603); çevirimi bir A kaynakla da bağlamak istenirse NAOJ/NDL takvim tablosu.
- 1899 maddesi "Antlaşma ile" diyor; 12 Şubat deklarasyon günüdür, antlaşma 30 Haziran 1899. Kırılma ±30 gün içinde 12 Şubat'a bağlı; metin düzeltmesi (deklarasyon) önerilir, bu işte metne dokunulmadı.
