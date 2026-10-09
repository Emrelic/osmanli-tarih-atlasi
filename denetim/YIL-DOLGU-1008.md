# YIL-DOLGU-1008 — künye `f:`/`t:` üç haneli yıl → `0YYY` (UYGULANMAMIŞ diff)

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (8 Ekim 2026)
Sınav anı: worktree `C:\atlas-dolgu` = `origin/makine/umit` `acda7861` açıldı; yalnız
`GUNNO-PAD-1008.md` okundu, `devletler.js`te yalnız satır sonu sayımı ve `grep` yapıldı,
node eval / `denetle.py` henüz KOŞULMADI. Evren: `data/devletler.js` künye `f:`/`t:`.
1. Evren 65 = değişecek 64 (`f:` 64 · `t:` 0) + değişmeyecek 1 (`mekke-serifligi` `f:"0969-01-01"`).
2. Her hedef kendi künyesinin aralığında TEK eşleşme verir (aynı değer başka alanda — ör.
   `kronoloji[].t:"861-01-01"` — künye aralığında geçebilir ama `f:` anahtarıyla değil).
3. Diff: 64 ekleme baytı; dosya 1.410.368 → 1.410.432 bayt; satır sayısı ve CRLF sayısı aynı.
4. Geri okuma: eval sonrası JSON farkı yalnız 64 `f` alanı; künye sayısı 896.
5. `denetle.py`: çıkış 2 → 2, her değişmez değeri birebir (GUNNO-PAD ölçümüne göre
   künye `f`'yi yalnız `degismez4` okur ve üç haneli `kf`nin yanlış True'su düşüyordu;
   dolgulu `kf` < ATLAS_BASI ⇒ dal hiç girilmez ⇒ sayı yine oynamaz). `odak_olc.py` çıkışı aynı.

## 🔴 HÜKÜM: diff **İNMEZ** (şart ③: evren sayısı tutmadı — koordinatör kararı bekler)
Değişecek kayıt sayısı TUTTU (64 = 64), ama "zaten dolgulu, atlanacak" kümesi **1 değil 46**.
Şart ③ "65 = 64 + 1 (mekke); tutmazsa DUR, İNMEZ" dediği için diff İNMEZ işaretlidir.
Teşhis: diff'in kendisinde kusur bulunmadı (aşağıdaki geri okuma ve kapı temiz); fark
ŞARTNAMENİN öngörüsündedir — `GUNNO-PAD-1008` yalnız ÜÇ haneli yılları saydığı için
önceden dolgulanmış 46 alanı (32 `f` + 14 `t`) hiç görmedi. Bu 46 alan diff'e GİRMEDİ
(dört haneli olana dokunulmadı; "00YYY" üretilmedi). İndirme kararı koordinatörde.

## ÖNGÖRÜ KARNESİ
| öngörü | ölçüm | hüküm |
|---|---|---|
| değişecek 64 (`f` 64 · `t` 0) | 64 (`f` 64 · `t` 0) | ✓ |
| zaten dolgulu 1 (mekke) | **46** (32 `f` + 14 `t`; mekke dahil) | ✗ ÇÜRÜDÜ ⇒ İNMEZ |
| her hedef künye aralığında tekil | 64/64 tekil (`assert` geçti) | ✓ |
| 1.410.368 → 1.410.432 bayt, satır/CRLF aynı | 1.410.432 · `\r\n` 10495→10495 · `\n` 10712→10712 · `\r` 10496→10496 | ✓ |
| eval farkı yalnız 64 `f` | 64 fark, hepsi `f`, değişim listesiyle birebir | ✓ |
| `denetle.py` 2 → 2, birebir | 2 → 2; tohumsuz koşuda 1 satır yer değiştirdi (aşağıda), `PYTHONHASHSEED=0` ile **birebir** | ✓ (açıklamalı) |
| `odak_olc.py` aynı | 0 → 0, çıktı birebir (236 satır) | ✓ |

## ② YÖNTEM
- Kaynak: `origin/makine/umit` `acda7861` (diff `d75bc0ec` üstünde de `git apply --check` temiz;
  iki uç arasında `data/` ve `arac/` değişmedi, yalnız `denetim/`).
- Dosya `git ls-files --eol`: `i/-text w/-text attr/` — `.gitattributes`te devletler.js için
  satır yok; dosya KARIŞIK satır sonlu (10495 CRLF + 217 yalın LF + 1 yalnız CR) ve blob =
  çalışma kopyası bayt bayt aynı (dönüşüm yok). ⇒ bayt düzeyinde yazıldı.
- Hedef: node `vm` eval → künye listesi; her künyenin bayt aralığı = kendi `id:"X"`
  eşleşmesinden (tam 1 kez, `assert`) bir sonraki künyenin `id:`sine kadar; aralıkta
  `(?<![\w$])f\s*:\s*"<eski>"` tam 1 eşleşme (`assert`) → değerin önüne tek bayt `0`
  eklendi, sondan başa. `replace(…,1)` kullanılmadı.
- Diff hunk denetimi: 64 `-` / 64 `+` satır, hepsi `\r` ile biter (CRLF korunmuş);
  her çiftte fark yalnız tek bir `0` eklemesi (64/64, `difflib`).

## ③ GERİ OKUMA (diff uygulanmış kopya, node `vm` gerçek eval)
- künye 896 → 896, `id` sırası aynı, her künyenin anahtar SIRASI aynı.
- JSON karşılaştırması (her künye × her alan): **64 fark, hepsi `f`**, değişim listesiyle
  birebir (eski→yeni). Başka hiçbir alan (kronoloji dahil) değişmedi.
- `mekke-serifligi.f` = `0969-01-01` (aynı). Sonrasında üç haneli künye `f`/`t`: 0.
- Künye-içi `kronoloji[].t` üç haneli: önce 47 · sonra 47 · liste birebir aynı.
- `node --check data/devletler.js`: önce 0 · sonra 0.

## ④ KAPI
| | diff'siz | diff'li |
|---|---|---|
| `denetle.py` çıkış | 2 | 2 |
| çıktı satırı | 349 | 349 |
| ÖLÇÜLEMEDİ | yalnız Değişmez 8 (`devletler_harita.js` YOK) | aynı |
| D1 309/309 · D1c 4 · D1b 0 · D2 624/0 · D2s 1722 / 185 açık (tavan 185) · D2i 171/1 · D2t 13 · D4 0 · D4c 127 · D4d 324 · D4s 5 · D5 0 · D7 733 · konum 0 · R 0 · kaynaksız `s:` 1912 · mükerrer 95 | ✓ | birebir |
| `odak_olc.py` çıkış | 0 | 0 (çıktı birebir) |
| `node --check` | 0 | 0 |

📌 Tohumsuz iki koşuda tek fark: Değişmez 4s'nin örnek listesinde `katalan`/`adal` (ikisi de
"1 dönem") yer değiştirdi. Sebep diff değil: `denetle.py:6813` `saran = _s4c & _s4d` bir
KÜME, `sorted(..., key=-n)` eşit sayılıları küme sırasında bırakıyor ve Python dizgi
özeti süreç başına rastgele. Kanıt: iki ağaç `PYTHONHASHSEED=0` ile koşunca çıktılar
**ham `diff` 0 satır** (çıkış 2/2). ⇒ Ayrı bir küçük kusur: 4s listesi deterministik değil
(öneri: `key=lambda x: (-x[1], x[0])`) — bu görevde yamalanmadı.
Tavan oynamadı ⇒ tavan önerisi YOK.

## ⑤ DOĞRULAMA TABLOSU (65 satır: 64 değişen + mekke)
| # | id | alan | eski → yeni |
|---|---|---|---|
| 1 | bizans | f | 330-05-11 → 0330-05-11 |
| 2 | venedik | f | 697-01-01 → 0697-01-01 |
| 3 | polonya-erken | f | 966-01-01 → 0966-01-01 |
| 4 | papalik | f | 756-01-01 → 0756-01-01 |
| 5 | fransa | f | 987-01-01 → 0987-01-01 |
| 6 | ingiltere | f | 927-01-01 → 0927-01-01 |
| 7 | sirvansah | f | 861-01-01 → 0861-01-01 |
| 8 | yemen-zeydi | f | 897-01-01 → 0897-01-01 |
| 9 | almanya | f | 962-02-02 → 0962-02-02 |
| 10 | danimarka | f | 950-01-01 → 0950-01-01 |
| 11 | dubrovnik | f | 700-01-01 → 0700-01-01 |
| 12 | nube | f | 543-01-01 → 0543-01-01 |
| 13 | norvec-kralligi | f | 872-01-01 → 0872-01-01 |
| 14 | song | f | 960-01-01 → 0960-01-01 |
| 15 | goryeo | f | 918-01-01 → 0918-01-01 |
| 16 | poni | f | 977-01-01 → 0977-01-01 |
| 17 | kanem-bornu | f | 800-01-01 → 0800-01-01 |
| 18 | iskocya | f | 843-01-01 → 0843-01-01 |
| 19 | bretanya | f | 939-01-01 → 0939-01-01 |
| 20 | navarra | f | 824-01-01 → 0824-01-01 |
| 21 | angkor-kmer | f | 802-01-01 → 0802-01-01 |
| 22 | pagan | f | 849-01-01 → 0849-01-01 |
| 23 | sunda-pajajaran | f | 669-01-01 → 0669-01-01 |
| 24 | ziriler | f | 972-01-01 → 0972-01-01 |
| 25 | magrave-sicilmase | f | 976-01-01 → 0976-01-01 |
| 26 | suve-emirligi | f | 896-01-01 → 0896-01-01 |
| 27 | mapungubwe | f | 900-01-01 → 0900-01-01 |
| 28 | liao-hanedani | f | 916-01-01 → 0916-01-01 |
| 29 | dali-kralligi | f | 937-01-01 → 0937-01-01 |
| 30 | tien-le-hanedani | f | 980-01-01 → 0980-01-01 |
| 31 | heian-japonya | f | 794-01-01 → 0794-01-01 |
| 32 | srivijaya | f | 683-01-01 → 0683-01-01 |
| 33 | medang | f | 732-01-01 → 0732-01-01 |
| 34 | bali-warmadewa | f | 914-01-01 → 0914-01-01 |
| 35 | gazneli | f | 963-01-01 → 0963-01-01 |
| 36 | karahanli | f | 840-01-01 → 0840-01-01 |
| 37 | samani | f | 819-01-01 → 0819-01-01 |
| 38 | buveyhi | f | 932-01-01 → 0932-01-01 |
| 39 | ziyari | f | 928-01-01 → 0928-01-01 |
| 40 | revvadi | f | 979-01-01 → 0979-01-01 |
| 41 | bavendi | f | 665-01-01 → 0665-01-01 |
| 42 | annazi | f | 991-01-01 → 0991-01-01 |
| 43 | musafiri | f | 942-01-01 → 0942-01-01 |
| 44 | badusbani | f | 723-01-01 → 0723-01-01 |
| 45 | idil-bulgar | f | 965-01-01 → 0965-01-01 |
| 46 | koco-uygur | f | 911-01-01 → 0911-01-01 |
| 47 | mervani | f | 983-01-01 → 0983-01-01 |
| 48 | endulus-emevi | f | 756-05-15 → 0756-05-15 |
| 49 | leon-kralligi | f | 910-01-01 → 0910-01-01 |
| 50 | barselona-kontlugu | f | 801-01-01 → 0801-01-01 |
| 51 | normandiya | f | 911-01-01 → 0911-01-01 |
| 52 | flandre | f | 862-01-01 → 0862-01-01 |
| 53 | toulouse | f | 849-01-01 → 0849-01-01 |
| 54 | arles-kralligi | f | 933-01-01 → 0933-01-01 |
| 55 | sicilya-emirligi | f | 947-01-01 → 0947-01-01 |
| 56 | izlanda-serbest-devleti | f | 930-01-01 → 0930-01-01 |
| 57 | kiev-rusu | f | 882-01-01 → 0882-01-01 |
| 58 | birinci-bulgar | f | 681-01-01 → 0681-01-01 |
| 59 | hirvatistan-kralligi | f | 925-01-01 → 0925-01-01 |
| 60 | ani-bagratli-kralligi | f | 884-01-01 → 0884-01-01 |
| 61 | kars-vanand-kralligi | f | 962-01-01 → 0962-01-01 |
| 62 | lori-kralligi | f | 982-01-01 → 0982-01-01 |
| 63 | seddadiler-gence | f | 951-01-01 → 0951-01-01 |
| 64 | derbent-hasimi-emirligi | f | 869-01-01 → 0869-01-01 |
| 65 | mekke-serifligi | f | 0969-01-01 — değişmedi, zaten dolguluydu |

## ⑥ ZATEN DOLGULU 46 ALAN (diff'e GİRMEDİ — şart ③'ün göremediği küme)
```
id | alan | değer
norse-gronland | f | 0985-01-01
mekke-serifligi | f | 0969-01-01
cola | f | 0850-01-01
bati-calukya | f | 0973-01-01
dogu-calukya | f | 0624-01-01
pala | f | 0750-01-01
toltek | f | 0900-01-01
ata-pueblo | f | 0850-01-01
abbasi | f | 0749-11-28
ukayli | f | 0990-01-01
mezyedi | f | 0997-01-01
hamdani-halep | f | 0944-10-29
numeyri | f | 0991-01-01
fatimi | f | 0909-01-01
karmati | f | 0899-01-01
medine-emirligi | f | 0969-01-01
hulefa-yi-rasidin | f | 0632-01-01
hulefa-yi-rasidin | t | 0661-01-01
emevi | f | 0661-01-01
emevi | t | 0750-08-05
sasani | f | 0226-01-01
sasani | t | 0651-01-01
tahiri-horasan | f | 0821-01-01
tahiri-horasan | t | 0873-01-01
saffari | f | 0861-01-01
sacogullari | f | 0889-01-01
sacogullari | t | 0929-01-01
tolunogullari | f | 0868-01-01
tolunogullari | t | 0905-01-01
ihsidi | f | 0935-01-01
ihsidi | t | 0969-07-06
aglebi | f | 0800-01-01
aglebi | t | 0909-03-18
idrisi | f | 0789-01-01
idrisi | t | 0985-01-01
rustemi | f | 0777-01-01
rustemi | t | 0909-01-01
midrari | f | 0772-01-01
midrari | t | 0976-01-01
hamdani-musul | f | 0905-01-01
hamdani-musul | t | 0979-01-01
hazar-kaganligi | f | 0630-01-01
hazar-kaganligi | t | 0965-01-01
uygur-kaganligi | f | 0745-01-01
uygur-kaganligi | t | 0840-01-01
ziyadi | f | 0818-01-01
```

## ⑦ KÜNYE-İÇİ kronoloji[].t ÜÇ HANELİ — 47 (diff'e GİRMEDİ, karar koordinatörde)
```
sirvansah | kronoloji[0].t | 861-01-01
nube | kronoloji[0].t | 543-01-01
nube | kronoloji[1].t | 651-01-01
song | kronoloji[0].t | 960-01-01
goryeo | kronoloji[0].t | 918-01-01
poni | kronoloji[0].t | 977-01-01
kanem-bornu | kronoloji[0].t | 800-01-01
iskocya | kronoloji[0].t | 843-01-01
bretanya | kronoloji[0].t | 939-01-01
navarra | kronoloji[0].t | 824-01-01
angkor-kmer | kronoloji[4].t | 802-01-01
ziriler | kronoloji[0].t | 972-01-01
magrave-sicilmase | kronoloji[0].t | 976-01-01
suve-emirligi | kronoloji[0].t | 896-01-01
liao-hanedani | kronoloji[0].t | 916-01-01
dali-kralligi | kronoloji[0].t | 937-01-01
tien-le-hanedani | kronoloji[0].t | 980-01-01
heian-japonya | kronoloji[0].t | 794-01-01
srivijaya | kronoloji[0].t | 683-01-01
medang | kronoloji[0].t | 732-01-01
medang | kronoloji[1].t | 929-01-01
bali-warmadewa | kronoloji[0].t | 914-01-01
gazneli | kronoloji[0].t | 963-01-01
karahanli | kronoloji[0].t | 840-01-01
samani | kronoloji[0].t | 819-01-01
buveyhi | kronoloji[0].t | 932-01-01
ziyari | kronoloji[0].t | 928-01-01
revvadi | kronoloji[0].t | 979-01-01
bavendi | kronoloji[0].t | 665-01-01
annazi | kronoloji[0].t | 991-01-01
musafiri | kronoloji[0].t | 942-01-01
musafiri | kronoloji[1].t | 979-01-01
badusbani | kronoloji[0].t | 723-01-01
mervani | kronoloji[0].t | 983-01-01
normandiya | kronoloji[0].t | 911-01-01
flandre | kronoloji[0].t | 862-01-01
toulouse | kronoloji[0].t | 849-01-01
arles-kralligi | kronoloji[0].t | 933-01-01
arles-kralligi | kronoloji[1].t | 993-01-01
sicilya-emirligi | kronoloji[0].t | 947-01-01
ani-bagratli-kralligi | kronoloji[0].t | 884-01-01
ani-bagratli-kralligi | kronoloji[1].t | 962-01-01
kars-vanand-kralligi | kronoloji[0].t | 962-01-01
lori-kralligi | kronoloji[0].t | 982-01-01
seddadiler-gence | kronoloji[0].t | 951-01-01
seddadiler-gence | kronoloji[1].t | 971-01-01
derbent-hasimi-emirligi | kronoloji[0].t | 869-01-01
```

# TESLİM
## ① ne ölçtüm
- 64 künye `f:` üç haneli → `0YYY`; `t:` üç haneli 0. Diff 64+/64−, CRLF 64/64 korunmuş,
  her satırda fark tek `0`. Eval geri okuma: 896 künye, yalnız 64 `f` farkı.
- `denetle.py` 2→2 birebir (tohumlu); `odak_olc.py` 0→0 birebir; `node --check` 0→0.
- Zaten dolgulu künye alanı: **46** (şartnamede 1).
## ② ne bulamadım
- Şartnamenin "mekke tek dolgulu kayıt" öngörüsünü doğrulayan bir ölçüm bulunamadı — 45 başka
  dolgulu alan var. `-text` işareti `.gitattributes`te bulunamadı (git kendisi `-text` sayıyor:
  karışık satır sonu).
- "0330" ekrana sızar mı: ÖLÇÜLMEDİ (şartname gereği başka ajanın işi).
## ③ ne istiyorum
1. Şart ③ sayısının 65 → 110 (64 + 46) olarak düzeltilip düzeltilmeyeceğine karar; evet ise
   diff olduğu gibi inebilir (`git apply --check` `d75bc0ec` üstünde temiz).
2. 47 `kronoloji[].t` için ayrı karar (ayrı diff).
3. ÖNERİ: `denetle.py:6835` 4s listesinde eşitlik kırıcı (`(-n, ad)`) — çıktı tohumdan bağımsız olsun.
