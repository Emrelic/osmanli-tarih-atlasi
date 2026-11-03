# 71 · Atina (Atina Deniz İmparatorluğu / Delos Birliği) — TOP100-1103 denetimi
Ölçüm: worktree umit-1103-top100 (HEAD 14e8bb95c), 4 Kasım 2026; ölçer `top100_olc.py delos-birligi atina-demokrasisi ikinci-atina-birligi`. Ortaçağ Atina Dukalığı (`atina-dukaligi`, 1204-1458) AYRI devlettir, karıştırılmadı.

## Özet
- Künye: 3 (`delos-birligi`, `atina-demokrasisi`, `ikinci-atina-birligi`). Hepsinde **yerleşim kaydı = 0** → üçü de **haritada görünmüyor**. Kırılma günü 0 → açık kırılma 0 (ölçülecek veri yok; "temiz" değil, "ölçülemedi").
- Atina'nın kendi kaydı (`data/yerlesimler.js:504`) MÖ 85'ten önce **hiç `s:` taşımıyor** (ilk dilim `roma-cumhuriyeti` -0085…-0026, sonra `__BOSLUK__` -0026…1000). MÖ 507-86 arası Atina haritada yok (Değişmez 1 ihlali sayılabilir: var olduğu tarihte sahipsiz).
- Eksik madde: 3 (Otuzlar/demokrasinin geri gelişi, Eurymedon, Müttefikler Savaşı'nın başlangıcı isteğe bağlı) — çekirdek kronoloji (Kleisthenes, Delos kuruluşu, hazine nakli, Otuz Yıl Barışı, Peloponnes, Aigospotamoi, teslim, İkinci Birlik, Sosyal Savaş, Khaironeia) `olaylar_antik_akdeniz.js`te VAR.
- En ağır 3 bulgu: (1) üç künye + sıfır yerleşim: Atina deniz imparatorluğu hiç boyanmıyor; (2) `delos-birligi` t (-0403 = MÖ 404) için yıl, künyede ikinci bağımsız akademik kaynakla hâlâ doğrulanmış değil (Plutarkhos Lysandros 15.1 AY+GÜN verir, YIL vermez); (3) künye `kronoloji:` maddelerinin kaynak alanları worldhistory.org taşıyor (dayanak olamaz; evren dışı).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| delos-birligi | Delos (Atina Deniz) Birliği | -0477-01-01 | -0403-01-01 | ittifak; 0 yerleşim; BOYALAR'da var (renkler.py:373); `harita:` anahtarı yok (ölçer ⚠ vermedi) |
| atina-demokrasisi | Atina (bağımsız demokratik polis) | -0507-01-01 | -0337-01-01 | devlet; 0 yerleşim; BOYALAR'da var (renkler.py:945) |
| ikinci-atina-birligi | İkinci Atina Birliği | -0377-01-01 | -0354-01-01 | ittifak; 0 yerleşim; BOYALAR'da var (renkler.py:386); f ile olay günü 1 yıl ayrışıyor (b'ye bak) |
| atina-dukaligi | Atina Dukalığı | 1204-01-01 | 1458-06-04 | ORTAÇAĞ, bu denetimin dışı (Atina/İstefe/Livadya/Kulluk'ta s: var) |

Eksik evre: (i) MÖ 404-403 Otuzlar/Sparta vesayeti dönemi `atina-demokrasisi` künyesinin içine düşüyor (künye "bağımsız demokratik polis" der; oysa 404/3'te demokrasi askıda); (ii) MÖ 337-322 Makedon hegemonyası altında Atina için künye yok (kapsam dışı olduğu künyede beyanlı); (iii) Delos birliğinin üyeleri (Naksos, Thasos, Samos, Khios, Lesbos, Rodos, Bizans, Miletos, Ephesos…) için yerleşim s: yok.

## b) f/t ve evreler
**delos-birligi f = -0477-01-01 (MÖ 478/7)**
- Kaynak 1: Enciclopedia Italiana «Delio-attica, Lega» (Treccani): «nell'inverno del 478-7» (künyede alıntılı).
- Kaynak 2: Thukydides 1.96-97 («Treasurers for Hellas», ortak hazine Delos'ta; haraç 460 talent) ve Aristoteles, Athenaion Politeia 23.5: Aristeides'in ilk haraç tahmini «two years after the battle of Salamis, in the archonship of Timosthenes» (Salamis MÖ 480 → arkhon Timosthenes = 478/7). Okunan çeviri: classics.mit.edu/Thucydides/pelopwar.mb.txt ve classics.mit.edu/Aristotle/athenian_const.mb.txt (4 Kas 2026 okundu).
- Hüküm: ÇİFT TEYİT (yıl). Kış 478/7 → MÖ 478 sonu / 477 başı; künye -0477-01-01 (MÖ 478) ile arkon yılı 478/7'nin ilk yarısı uyuyor; gün yok → -0477-01-01 doğru biçim. Değişiklik gerekmez; `kaynak:` alanına Thukydides 1.96 + Ath.Pol. 23.5 eklenmeli.

**delos-birligi t = -0403-01-01 (MÖ 404)**
- Kaynak 1: Plutarkhos, Lysandros 15.1 (penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Lysander*.html, okundu): Lysandros gemileri ve surları aldı «on the sixteenth of the month Munychion»; 14.4: ephorların kararıyla Pire ve Uzun Duvarlar yıkılacak, şehirler bırakılacak. → AY (Munykhion ≈ Nisan) + gün (16 Munykhion; Atina takvimi, Jülyen/Gregoryen karşılığı çevrilmedi).
- Kaynak 2: Treccani «Lega delio-attica»: Aigospotamoi (405) «ne segnò… la completa rovina» (YIL 405; 404'ü vermiyor — künye ic_not'u da bunu söylüyor). Atlas olayı `olaylar_antik_akdeniz.js:138` Aigospotamoi'yi Eylül 405 yazar; "birkaç ay sonra" teslim → kış/ilkbahar 404.
- Hüküm: MÖ 404 ilkbahar (Nisan) doğru görünüyor ama YIL, Plutarkhos'ta yazılı değil; yılı bağımsız ikinci akademik kaynak (Cambridge Ancient History V, ch. «The Peloponnesian War»/OCD «Peloponnesian War») veriyor — bu makinede açılamadı (aşağıda). Önerilen satır: değişiklik yok, `ic_not`'a «gün+ay: Plut. Lys. 15.1 (16 Munykhion); yıl 404: çıkarım Aigospotamoi 405 Eylül + kış; CAH V teyidi bekliyor».

**atina-demokrasisi f = -0507-01-01 (MÖ 508/7)**
- Kaynak 1: Aristoteles, Ath. Pol. 20-22 (arkhon Isagoras MÖ 508/7). Kaynak 2: Treccani «Atene»: «Clistene… (508 a.C.)» (künyede). Hüküm: çift teyit; -0507 = MÖ 508 doğru.
**atina-demokrasisi t = -0337-01-01 (MÖ 338)**: Khaironeia Ağustos 338 (atlas `olaylar_antik_akdeniz.js:119`, Livius+Diodoros 16.85-86); Treccani «nel 337… sottomesse» (Korint Birliği, MÖ 338/7). Künyenin ic_not'u "karar verilmedi" diyor; gerçek bağımsızlık sonu Lamia (MÖ 323/2; `olaylar_antik_akdeniz.js:111`, Krannon 5 Eylül -0321 :110). Öneri: -0337 kalsın (Khaironeia = bağımsız dış politikanın sonu, iki kaynakla) ama 404/3 Otuzlar dilimi için künyeye "MÖ 404/3 demokrasi askıda (beyan)" notu.
**ikinci-atina-birligi f = -0377-01-01 (MÖ 378)**: künye ozet MÖ 378/7; Aristoteles kararnamesi IG II² 43 (Diodoros 15.28-30; atlas olayı `olaylar_antik_akdeniz.js:131` t=**-0376** = MÖ 377). Treccani «Atene»: Hammond kuruluşu 378/7 kışına koyar, Cawkwell farklı (künyede alıntılı). Hüküm: künye f ile olay günü 1 yıl ayrışıyor (-0377 vs -0376) → "künye aşımında önce sınıflandır": aynı olay, iki farklı yıl. Öneri: ikisini aynı yıla çek; kararname 377 (MÖ) ilkbaharı ise her ikisi -0376-01-01; Hammond'un 378/7 kışı ise ikisi -0377. Cawkwell (CQ 23.1, 1973, 47-60, ERİŞİLEMEDİ) belirleyici; çözülene dek ikisi de "yıl" hassasiyetiyle -0376 yapılmasını öneririm (kararname tarihli belge = birincil).
**ikinci-atina-birligi t = -0354-01-01 (MÖ 355)**: Sosyal Savaş sonu, Atina müttefik bağımsızlığını tanıdı (Diodoros 16.22; atlas `olaylar_antik_akdeniz.js:124`). Birlik biçimsel olarak Khaironeia'ya dek sürdü (künye ozet beyanlı). Hüküm: t kabul, beyanlı.

## c) Kronoloji (evren: `olaylar_antik_akdeniz.js`, `olaylar_antik_yakin_dogu.js`)
Var olanlar (`olaylar_antik_akdeniz.js`): 158 Kleisthenes (-0507) · 157 Peloponnes Birliği Atina seferi (-0504) · 154 Marathon (-0489) · 152 Salamis/Plataia (-0478) · 151 Delos Birliği kuruldu (-0477) · 149 Thasos (-0462) · 148 hazine Delos→Atina (-0453) · 146 Otuz Yıl Barışı (-0445) · 143 Peloponnes Savaşı (-0430) · 141 Sicilya felaketi (-0412) · 138 Aigospotamoi (-0404) · 136 Atina teslimi (-0403) · 131 İkinci Atina Birliği (-0376) · 124 Sosyal Savaş sonu (-0354) · 125 Amphipolis (-0356) · 119 Khaironeia (-0337) · 118 Korint Birliği (-0337) · 111 Lamia (-0322). `olaylar_antik_yakin_dogu.js:35-36` Kserkses/Atina'nın alınışı ve Salamis. Evren dışı: künye içi `kronoloji:` (Eurymedon MÖ ~466, Samos MÖ 441 — kaynakları worldhistory.org, dayanak olamaz).
Notlar:
1. Delos kuruluş maddesi (satır 151) `yer:"Delos"`, `odak_yer:["Mikonos","Atina"]` — Delos'un yerleşimi YOK (Mikonos 1281'den başlıyor); kamera odağı Mikonos'a düşüyor.
2. Madde 138 Aigospotamoi Eylül 405 → `-0404-01-01` kesinlik ay: biçim "gün yoksa YYYY-01-01" kuralına uygun.
3. Madde 136'daki "teslim yıl hassasiyeti" notu doğru; ek olarak Plutarkhos Lys. 15.1 (16 Munykhion) AY bilgisi `ic_not_d`a yazılabilir.
Eksik madde önerileri:
- `{ t:"-0402-01-01", kesinlik:"yil", b:"Thrasyboulos Pire'den dönüp demokrasiyi yeniden kurdu; Otuzlar yönetimi sona erdi (MÖ 403/2 sonbaharı)", yer_id:"Atina", kaynak:"Xenophon, Hellenika 2.4.43 (Perseus); Aristoteles, Ath. Pol. 40" }` — gün/yıl bu makinede okunmadı (Perseus/Xen. açılamadı) → yalnız öneri, tarih doğrulanmalı.
- `{ t:"-0465-01-01", kesinlik:"yil", b:"Eurymedon: Kimon Pers donanma ve ordusunu yendi (MÖ ~466)", kaynak:"Thukydides 1.100.1" }` — Thuc. 1.100 bu oturumda okunmadı; yıl künye içi kayıttan (worldhistory.org, dayanak değil) geliyor → akademik kaynakla (Meiggs, The Athenian Empire 1972 / CAH V) doğrulanmadan yazılmamalı.
- Delos Birliği'nin Atina tarafından zorlukla ayrılan üyeleri (Naksos MÖ ~470/467, Thukydides 1.98.4): yerleşimi olmadığı için haritada işlenemez → önce yerleşim.

## d) Harita uyumu
Açık kırılma: **0** (kırılma günü 0; 3 künyede 0 yerleşim — "haritada görünmüyor").
Gereken s: dönemleri (kaynakla doğrulanacak; BEYAN gerekir):
| yerleşim | s önerisi | not |
|---|---|---|
| Atina | -0507-01-01 → -0403-01-01 `atina-demokrasisi`; -0403…-0402 sahip: Sparta/`sparta` (Otuzlar vesayeti, Xen. Hell. 2.3) → -0402 → -0337 `atina-demokrasisi` | Şimdi -0085 öncesi s: HİÇ yok |
| Pire / Eleusis / Marathon / Salamis (boğaz) | atina-demokrasisi (Attika çekirdeği) | Marathon/Salamis kayıtları `s:[]` bos:"veri-yok" (yerlesimler_once1281_yt_avrupa.js:103,106) |
| Naksos, Thasos, Samos, Khios, Lesbos (Midilli), Rodos, Bizans, Miletos, Ephesos | `delos-birligi` -0477 → -0403 | yerleşim kayıtları yok/boş (Thasos `s:[]`); Mikonos 1281'den başlıyor |
Mükerrer künye uyarısı: aynı şehir için hem `atina-demokrasisi` (polis) hem `delos-birligi` (ittifak) aynı dönemi kapsıyor; Atina'yı hangisiyle boyayacağına KASA karar vermeli (öneri: Atina+Attika → `atina-demokrasisi`; Ege üyeleri → `delos-birligi`; böylece iki künye çakışmadan haritada olur). Motor/BOYALAR'a dokunulmaz (üçü zaten tanımlı).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `delos-birligi` `kaynak:` → Treccani + Thukydides 1.96-97 + Aristoteles Ath.Pol. 23.5 (f çift teyit) + Plutarkhos Lys. 15.1 (t AY+gün); künye `kronoloji:` kaynaklarından worldhistory.org satırlarını sil.
2. `ikinci-atina-birligi` f ↔ olay yılı hizası (-0377 / -0376): tek yıla çek (öneri -0376, kararname belgesi).
3. `data/yerlesimler.js:504` Atina: `s:` başına `{f:"-0507-01-01",t:"-0403-01-01",d:"atina-demokrasisi"}` + Otuzlar dilimi + `{f:"-0402-01-01",t:"-0337-01-01",...}` + MÖ 337-85 arası Makedonya/Roma zinciri (kaynak gerekir) — şimdi -0085 öncesi boş.
4. Attika ve Ege üyeleri için yeni/boş yerleşim s: eklenmesi (HAVVA koşusu gerekir).
5. `olaylar_antik_akdeniz.js` yeni madde: Thrasyboulos/demokrasinin dönüşü (-0402), yukarıdaki kaynak doğrulamasından sonra.

## Erişilemeyen kaynaklar
- Cawkwell, G. L., «The Foundation of the Second Athenian Confederacy», Classical Quarterly 23.1 (1973) 47-60 — soru: Aristoteles kararnamesi hangi arkhon yılı/ayı (MÖ 378/7 kışı mı 377 ilkbaharı mı)?
- Cambridge Ancient History V (2. bs.), «The Peloponnesian War»/«The End of the War» — soru: Atina'nın teslimi MÖ 404'ün hangi ayı ve YIL bağımsız teyit.
- Oxford Classical Dictionary «Delian League», «Athens (history)» (OCD Online) — soru: Delos kuruluşu MÖ 478/7 kışı ve hazine nakli yılı (454).
- Xenophon Hellenika 2.2.20-23 ve 2.4.43 (Perseus) — açılamadı (URL biçimi redirect verdi); soru: teslim ve demokrasinin dönüş tarihi.

## Hüküm (UMIT SALI, gece yetkisiyle — CLAUDE.md kaynak kuralına göre; Emre sabah görebilir)
- Atina'nın boyanması: şehir noktası **`atina-demokrasisi`** (polity) ile boyansın; `delos-birligi` bir
  ittifak/hegemonya yapısıdır — üye şehirlerin `tabi:`/`ust:` ilişkisi olarak gösterilsin, toprak sahibi olarak değil.
  Aynı noktada iki künyenin çakışması böylece kalkar. worldhistory.org kaynakları üç künyeden çıkarılsın.
