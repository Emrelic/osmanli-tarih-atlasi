# UMIT-W33-YAMA-1006 — üç -1004 gerilemesinin çaresi (YALNIZ DIFF, uygulanmadı)

**Temel commit:** `d0877829` (worktree `C:\atlas-w33`). Yama: `denetim/UMIT-W33-YAMA-1006.diff`.
`git apply --check` temiz: hem `d0877829` hem güncel `origin/main` `95c1f3f4` üzerinde. Aradaki commit'ler yamanın
dosyalarına dokunmuyor.
Önceki teşhis: `denetim/UMIT-W33-OTEN-1004-1006.md` (`2697ee22`).

## 0. Düzeltme — önceki raporda bir yanlış
1913-05-30 grubundan çıkan yer **Silistre değil, KÖSTENDİL** (874940ee A1). Yer başına anahtarla ölçüldü:
defterden düşen iki satır `2 (d,v)¦YER KÖRÜ¦1913-05-30¦kayip¦Köstendil` ve `2i (isg)¦YER KÖRÜ¦1918-12-24¦kazanc¦Adana`.
Önceki raporda Silistre'yi yeniden ölçmeden, commit mesajından çıkarmıştım.

## 1. Yamanın içeriği (8 dosya)
| # | dosya | değişiklik |
|---|---|---|
| ① | `data/kronoloji_cok_1dunya_A.js` (1919-09-10 Saint-Germain, s.102) | `taraflar`a `"itilaf-emaneti"` · `kaynak`a md. 91 alıntısı |
| ② | `data/olaylar.js:174` Berlin | listeden `Bükreş, Yaş` çıktı + "(1877'de ayrılmıştı; Berlin tanıdı)" · `ic_not_d` eski ifade |
| ② | `data/olaylar_ek.js:79` Teselya 1881 | listeden `İzdin (Lamia)` çıktı + "(1832 Arta-Volos hattı)" · `ic_not_d` eski ifade |
| ③ | `denetim/ARAC-DEGISMEZ2-YERKORU-1004.py` | defter anahtarı YER BAŞINA satır (grup özeti `ilk3 +N` değil); `--liste` ekranı değişmedi |
| ③ | `denetim/ARAC-DEGISMEZ2-YERKORU-1004.defter.txt` | yeni biçime **ÇEVİRİ** (aşağıda) |
| ①④ | `denetim/ARAC-KUNYE-KRONO-KAPSAM-SINAV-1004.py` | 4/5 için "taban defteri" + stdout/stderr UTF-8 |
| ④ | `denetim/ARAC-DEGISMEZ2-YERKORU-SINAV-1004.py` · `ARAC-LISTE-BAYAT-SINAV-1004.py` | stdout/stderr UTF-8 |

### ① Kaynak — itilaf-emaneti gerçekten taraf mı? (§4)
Antlaşma metni okundu (Wikisource'taki antlaşma metni, Part III; künye FOROST 19190910-1'i gösteriyor). Md. 91: *"Austria
renounces … in favour of the Principal Allied and Associated Powers all rights and title over the territories … [which]
have not at present been assigned to any State."* ⇒ Emanet BU antlaşmanın BU maddesiyle doğuyor ve lehtarı Başlıca
Müttefik ve Ortak Devletler. Künyenin `f:` günü 1919-09-10 = maddenin günü. `taraflar` "o gün vardı" iddiasıdır
(`krono_ortak_1004.ALAN_VARLIK`) ve iddia doğru.
Maddenin kendi `kaynak`ı (TDV birinci-dunya-savasi + 1914-1918-online) md. 91'i ANMIYOR; bu yüzden alıntı `kaynak`a
EKLENDİ, iddia kaynaksız kalmıyor. `odak_kimlik` seçilmedi: kamerayı oynatırdı (§9 odak nöbetçisi), `taraflar` oynatmaz.
⚠️ Wikisource bir aktarım sitesidir; tanık antlaşmanın KENDİ metnidir. Künyenin gösterdiği FOROST ile birebir aynı cümle.

### ② Metin iddiası o gün için hâlâ doğru mu?
- Berlin: "Sırbistan, Karadağ ve Romanya bağımsız oldu" cümlesi DOĞRU kalıyor (uluslararası tanıma), DEĞİŞTİRİLMEDİ.
  Yalnız "aynı tarihte **elden çıkan** yerleşimler: … Bükreş, Yaş" YANLIŞ, çünkü harita onları 1877-05-09'da çıkarıyor
  (`olaylar_ek10.js`, TDV romanya). Köstence listede KALDI: Dobruca Berlin'le Romanya'ya geçti, o gün kırılması var.
- Teselya 1881: İzdin, TDV izdin'e göre (M. Kiel) 1832'de Yunanistan'da kaldı. "1881'de elden çıktı" YANLIŞ; Arta,
  Yenişehir ve Tırhala kaldı.

### ③ YERKORU — 18 kırılmaya NİÇİN yer_id YAZILMADI
`--liste` her kör kırılmayı ±30 gün içinde kapatan "en yakın maddeyi" basıyor. Ölçüm:

| kırılma | kapatan madde | o yeri kapsıyor mu |
|---|---|---|
| 1878-07-13 Sofya kayıp | Berlin Antlaşması | evet (Bulgaristan Prensliği) |
| 1918-11-04 Zadar · 11-06 Şibenik kazanç | Villa Giusti Mütarekesi (11-03) | evet (mütareke hattı Dalmaçya'yı veriyor) |
| 1920-06-04 Trianon grubu (10 yer) | Trianon Antlaşması | evet (K3: gövdede geçiyor) |
| 1920-11-12 Zadar kayıp | Rapallo Antlaşması | evet (K3) |
| 1923-03-15 Lvov kayıp | Büyükelçiler Konferansı | evet (Doğu Galiçya) |
| 1918-11-14 Peçuy | İtilâf donanması İstanbul önlerinde | **HAYIR** |
| 1918-11-22 Lvov | Sırplar Szigetvár'a girdi | **HAYIR** |
| 1918-12-07 Brassó | 1 Aralık SHS/Büyük Romanya birleşmesi | zayıf (Erdel anılıyor, Brassó değil) |
| 1918-12-19 Knin · 12-29 Kassa | Çekoslovakya Alman Bohemyası'nı aldı | **HAYIR** |
| 1919-04-19 Szatmár · 04-20 Varad | Kars'ın İngiliz işgali | **HAYIR** |
| 1919-08-03 Temeşvar · 08-12 Lendava/M. Sobota | Ravalpindi Antlaşması (Afganistan) | **HAYIR** |
| 1921-04-04 Knin | İkinci İnönü | **HAYIR** |
| 1921-06-12 Şibenik | İtalyanlar Antalya'yı boşaltıyor | **HAYIR** |
| 1921-08-22 Peçuy | Irak Krallığı kuruldu | **HAYIR** |

⇒ **11 kırılmayı tesadüfi bir madde kapatıyor.** Değişmez 2i bu 11'ini "kapalı" sayıyor, çünkü ±30 gün içinde HERHANGİ
bir madde var. Bu, YERKORU'nun tam olarak bulmak için yazıldığı körlük. Bu maddelere `yer_id` eklemek YANLIŞ olur
(Kars maddesi Szatmár'ı anlatmıyor).
Kapsayan 5 madde için de `yer_id` yazılmadı. `yer_id` TEKİL bir alan ve kamera odağını belirliyor (Berlin, Padova,
Budapeşte…); onu Sofya/Zadar/Lvov'a çevirmek odak kusuru üretir (`denetle_yayin` odak nöbetçisi). Şemada ikinci yer alanı
yok (`yerler:` yalnız gövde metninde geçen bir sözcük).
**Öneri, koordinatörün kararına:**
- (a) 11 tesadüfi kapanış için YENİ kronoloji maddeleri yazılsın: Peçuy Sırp işgali, Lvov Polonya denetimi, Kassa
  Çekoslovak girişi, Szatmár/Varad Romen ilerleyişi, Temeşvar devri, Prekmurje, Knin/Şibenik İtalyan tahliyesi, Peçuy
  Sırp tahliyesi. Kaynakları zaten `isg:` alanlarında duruyor (fe6ebb85 · 4f390691). Kaynaklı bir yazıcı işi; diff'e
  koymadım.
- (b) Kapsayan 5 madde için ya tavanı üyelikle kabul et (`--defter-yaz`, §3.4) ya da araca "antlaşma maddesinde K3 =
  EŞLİ" kuralı ekle. (b)'yi önermiyorum: K3'ü bilerek zayıf saymak aracın tasarımı.
- Tavan bu yamada YÜKSELTİLMEDİ. 28 yeni satır (aşağıda) gerçek borçtur, defterde değildir; sınav s.10 dürüstçe ÖTMEYE
  devam ediyor.

### ③ Anahtar yaması ve defter ÇEVİRİSİ
- Eski anahtar: `kapı¦KOVA¦gün¦tip¦<ilk 3 ad>[ +N]`. Grup küçülünce anahtar değişiyor ve iyileşme "yeni kör" diye
  ötüyordu (1913, Köstendil). Yeni anahtar: `kapı¦KOVA¦gün¦tip¦<ad>`, yer başına bir satır. Büyüme yalnız yeni yeri,
  küçülme yalnız "düşen" satırı gösteriyor.
- Defter **çevrildi, genişletilmedi.** Yeni araç, eski defterin yazıldığı veri durumunda (`0a24f91b`: eski araç orada
  çıkış 0 veriyor, defter dosyası `d0877829` ile AYNI) `--kok` ile `--defter-yaz` koşturuldu. Eski defterdeki 150 grup
  satırı = 593 yer satırı. Kontrol: yeni araç + çevrilmiş defter `0a24f91b` verisinde **çıkış 0, 593/593**.
- 🔴 **ÜYELİK EŞİTLİĞİ, ADIYLA (UMIT İRTİBAT şartı).** Defter bir tavan dosyası ve onu koordinatör yazar (§3.4);
  çeviri yalnız diff'te duruyor. Kanıt (`d0877829` eski defteri ↔ yama uygulanmış yeni defter): yeni defterin 593 yer
  satırı `(kapı,KOVA,gün,tip)` ile gruplanıp aracın KENDİ `yer_etiketi()`siyle (`:80`, birebir kopya) eski anahtara geri
  basıldı:
  ```
  eski defter satırı (grup) ...... 150
  yeni defter satırı (yer) ....... 593
  yeni → grup anahtarına geri .... 150
  EKLEME  (yeni'de var, eski'de yok): 0
  ÇIKARMA (eski'de var, yeni'de yok): 0
  ```
  Satır satır eşleme (eski satır → yeni yer satırları, adıyla): `denetim/UMIT-W33-DEFTER-ESLEME-1006.tsv` (150 satır).
  ⚠️ Kanıtın sınırı: eski defter "+N"den sonraki adları SAKLAMIYORDU. Yani 4+ yerli bir grupta ilk 3 adı ve SAYIYI
  doğrulayabiliyoruz, gizli adları doğrulayamıyoruz. O adlar, eski defterin yazıldığı veri durumundan (`0a24f91b`:
  eski araç çıkış 0) yeni araçla okundu. Bu, eski formatla erişilebilecek en sıkı kanıt.
  📌 Yan bulgu (eski biçimin ikinci kusuru): toplam sayımı "+N"den ve virgülden çıkarınca 594 çıktı, gerçek 593. Fark
  tek satırda: `2i (isg)¦AÇIK¦1878-09-18¦kazanc¦Bihaç (Bihać), Ostrovica (Stara Ostrovica, Kulen Vakuf)`. Bir yer
  ADININ içinde virgül var ve grup satırı onu iki yer gibi okutuyor. Yer başına anahtarda bu belirsizlik yok.
- Tavan İNDİRİLMEDİ: Köstendil ve Adana satırları defterde duruyor. İndirmek koordinatörün işi (§3.4-3/4), tek komut:
  `--defter-yaz` değil, bu iki satırı elle silmek. Aksi hâlde 28 borç da yazılır.

### ① KUNYE 4/5 — "bir kök, üç hata" çaresi
4. ve 5. sınamalar artık ZZ'siz kopyadan yazılan bir **taban defteriyle** ölçüyor ("4/5 ön koşul" satırı). Gerçek ağaçta
C büyürse onu yalnız (1) söylüyor.
**İki yönde sınandı:** veri yaması GERİ alınınca (itilaf-emaneti anılmıyor) sınav `1 HATA` (yalnız s.1) verdi, eskiden
3 veriyordu. Yamayla `TÜM SINAVLAR GEÇTİ`.

### ④ cp1254
Üç sınava `sys.stdout/stderr.reconfigure(encoding="utf-8")` eklendi (araçların kendisinde zaten vardı). "Sonra"
ölçümü `PYTHONIOENCODING` OLMADAN, dosyaya yönlendirilerek alındı ve çöküş yok.

## 2. ÖNCE / SONRA (temel d0877829)
| ölçüm | ÖNCE | SONRA |
|---|---|---|
| `denetle.py` çıkış | 2 (yalnız Değişmez 8 ÖLÇÜLEMEDİ: `devletler_harita.js` taze ağaçta yok; ORTAM) | 2 (aynı sebep) |
| Değişmez 2 | ✓ 623 kırılma, 0 açık | ✓ 623, 0 açık |
| 2s · 2sk · 2i · 2t | 187 açık · 1665 · 171/1 açık · 13 | **aynı** (tüm `Değişmez` satırları birebir; tam çıktı farkı yalnız `katalan` satırının SIRASI) |
| KUNYE-KRONO-KAPSAM sınavı | çıkış 1 · 3 HATA | **çıkış 0 · TÜM SINAVLAR GEÇTİ** |
| LISTE-BAYAT sınavı | çıkış 1 · 1 HATA | **çıkış 0 · TÜM SINAVLAR GEÇTİ** |
| YERKORU sınavı | çıkış 1 · 1 HATA (19 grup: 18 gerçek + 1 anahtar kusuru) | çıkış 1 · 1 HATA (**28 yer satırı, hepsi gerçek**; anahtar kusuru gitti) |

YERKORU'nun kalan 28 satırı (yer başına): 1878-07-13 Sofya · 1918-11-04 Zadar · 11-06 Şibenik · 11-14 Peçuy · 11-22 Lvov ·
12-07 Brassó · 12-19 Knin · 12-29 Kassa · 1919-04-19 Szatmár · 04-20 Varad · 08-03 Temeşvar · 08-12 Lendava, Murska
Sobota · 1920-06-04 Brassó, Eisenstadt, Erdel, Kassa, Lendava, Murska Sobota, Szatmár, Temeşvar, Varad, Zagreb ·
1920-11-12 Zadar · 1921-04-04 Knin · 06-12 Şibenik · 08-22 Peçuy · 1923-03-15 Lvov.

## 3. Bulamadım / ölçmedim
- Adana 1918-12-24 satırını düşüren commit: `git log -S Adana --since=2026-10-04 -- data/` boş döndü. Bulunamadı.
- `denetle_yayin.py` (odak kapısı) koşturulmadı. Yama `yer_id`/`odak_*` alanlarına dokunmuyor, yalnız `ic_not_d`
  ekliyor (alan `olaylar_ek.js`te zaten kullanılıyor).
- 11 tesadüfi kapanışın kaynakları okunmadı (öneri (a) ayrı iş).

## 4. git status
- `C:\atlas-w33` (temel d0877829), kaldırmadan önce `--porcelain`: tam olarak yamanın 8 dosyası (`M`), başka bir şey yok.
  Diff alındıktan sonra `worktree remove --force` ile kaldırıldı.
- `C:\atlas-w33b` (atıf/çeviri/apply-check ağacı): porcelain **boş**, kaldırıldı. `worktree list`te w33 sayısı: 0.
- `C:\atlas-umit` izlenmeyen: `denetim/UMIT-W33-YAMA-1006.diff` + `.md`. Commit yok. `C:\atlas` ana ağacına dokunulmadı
  (rebase hâlâ ortada).
