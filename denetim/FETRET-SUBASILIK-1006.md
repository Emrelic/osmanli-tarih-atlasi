# FETRET-SUBASILIK-1006 — Antalya ve Teke-ili 1402-1423: "şehzadesiz subaşılık" var mı?

Devamı: `P84-TIMUR-SAHIPLIK-1006.md` §3 (Elmalı/Antalya kusuru). Ağaç `C:\atlas-p84-fetret`
(detached, `origin/makine/umit` @ `61751bf0`). TDV gövdeleri bu ölçümde (6 Ekim 2026)
çekildi: `denetim/FETRET-SUBASILIK-1006-tdv/*.txt` (ilk satır = istenen URL | dönen URL).

**Emre'nin kararı (UMIT İRTİBAT üzerinden):** *"Fetret devrinde şehzadeye bağlı olmayan ve
beyliklere de veya Timur devletine de bağlı olmayan SUBAŞILIK var ise SUBAŞILIK olarak
görünsün; tarihî olarak böyle geçiyor ise bunu haritaya uygularız."* Şart: **tarihî olarak
böyle geçiyor ise** — bağımsızlık kaynakla gösterilemezse YAZILMAZ.

## 0. ÖNGÖRÜ (ölçümden önce)
Sayı: TDV'de Fetret'e ait subaşılık cümlesi **1-2** (Antalya + belki Teke Karahisarı);
**0** cümle "şehzadeye bağlı değildi" diyecek. Mekanizma: TDV yer-kişi ansiklopedisidir,
subaşıyı bir makam olarak anar ("Osmanlılar'ın subaşısı"), siyasî bağlılığını tartışmaz.
**Sonuç:** sayı TUTTU (2 cümle, ikisi de Antalya/Teke Karahisarı), mekanizma TUTTU.

## 1. ① KAYNAK — subaşı kim, kime bağlı

### ÖLÇÜM (TDV, birebir)
- `tekeogullari`: "Bu sırada Osmanlılar’ın Antalya subaşılığına getirdikleri Fîruz Bey vefat
  etti, yerine Tekekarahisarı’nda bulunan oğlu Hamza Bey tayin edildi." · "1402-1415 yılları
  arasında Antalya ve Alâiye dışında bütün Teke-ili’ne Karamanoğlu II. Mehmed Bey hâkim oldu."
  · "Bu arada Osman Çelebi, Karamanoğlu Mehmed Bey’in desteğiyle İstanoz’da oturmaya devam
  etti." · Hamza Bey'in gece baskını, Osman Çelebi'nin öldürülmesi, Karaman'ın Antalya
  kuşatması ve "Hamza Bey Teke-ili sancak beyliğine getirildi".
- `antalya`: "Osmanlı kaynaklarında Teke Bey olarak geçen Mehmed Bey’den sonra bir müddet
  daha Tekeoğulları’nın hâkimiyetinde kalan şehir, nihayet Yıldırım Bayezid tarafından
  zaptedilerek muhafızlığı Fîruz Bey’e verildi." · "Ankara Savaşı’ndan (1402) sonra eski
  Antalya hâkimi Mehmed Bey’in oğlu Osman Çelebi, Karamanlılar’ın yardımıyla burayı tekrar
  ele geçirmek istediyse de Osmanlılar’ın Teke Karahisarı subaşısı Hamza tarafından
  yakalanarak öldürüldü (Ocak 1423)." · "Bundan sonra Antalya ve merkezi olduğu Teke-ili’nde
  Osmanlı hâkimiyeti kesin olarak sağlandı." · "Nitekim Yıldırım Bayezid Teke-ili’ni oğlu
  Îsâ Çelebi’ye vermişti." (Ankara ÖNCESİ, sancak tevcihi)
- `isa-celebi`: "Îsâ Çelebi ile Cüneyd Bey, Aydın, Saruhan, Menteşe ve Teke beyleri ittifak
  edip Çelebi Mehmed ile savaşa hazırlandı." (1403 — bir Teke beyi vardı: Osman Çelebi,
  İstanoz'da, Karaman desteğiyle)
- `subasi`: "Subaşı Osmanlılar’ın ilk devirlerinde şehir muhafızı konumundaydı." — makam,
  siyasî birim değil.
- `fetret-devri`, `mehmed-i`, `musa-celebi`, `suleyman-celebi-emir`, `alanya`,
  `alaiye-beyligi`: Antalya / Teke / subaşı (Fetret penceresinde) cümlesi **YOK**.

### HÜKÜM
1. Antalya 1402-1423 boyunca **Osmanlı subaşısının** (Fîruz Bey → oğlu Hamza Bey) elinde
   kaldı; şehir Teke'ye geçmedi, Karaman'ın kuşatması başarısız oldu. ⇒ atlasın
   `s:teke 1402-07-28→1423-01-01` kaydı TDV ile **ÇELİŞİYOR** (iki madde: `tekeogullari`,
   `antalya`). Sınıf `§3.5`: devlet var, yeri yanlış.
2. 🔴 **Emre'nin şartı KARŞILANMIYOR.** TDV subaşıyı "Osmanlılar’ın" subaşısı diye anıyor;
   Fetret'te **hangi şehzadeye bağlı olduğunu söylemiyor, bağımsız olduğunu da
   söylemiyor**. "Şehzade adı geçmiyor" ≠ "şehzadeye bağlı değildi" (`OLCUM-KITA §7`:
   bulunamadı ≠ yok). Ayrıca TDV `subasi` subaşıyı bir **makam** (şehir muhafızı) olarak
   tanımlıyor — kendi başına bir devlet/beylik değil. ⇒ **`antalya-subasiligi` künyesi
   YAZILMADI**, renk diff'i de gerekmedi (motor tuzuna dokunulmadı).
3. Kaynakla gösterilebilen en dar kodlama: **düz Osmanlı `d:`** — "Osmanlılar'ın subaşısı"
   cümlesinin harfiyen karşılığı. Fetret'te şehzade bağlılığı bilinmediği için şehzade
   kimliği (`isa-celebi`, `mehmed-celebi` vb.) de YAZILMADI (zincirleme çıkarım olurdu:
   "Teke-ili Îsâ'nın sancağıydı" Ankara öncesine aittir).

## 2. ② KODLAMA — diff'ler (UYGULANMADI)

### `denetim/FETRET-SUBASILIK-1006-KOORD.diff` — `data/yerlesimler.js` (KOORDİNATÖR)
| kayıt | önce | sonra | kaynak |
|---|---|---|---|
| **Antalya** (`:187`) | `d:` 1392→1402-07-28 · `s:teke` 1402-07-28→1423-01-01 · `d:` 1423→1920 | `d:` **1392-01-01→1920-04-23 kesintisiz** (`y:"savas"`, `kaynak:` TDV iki cümle) | `tekeogullari` · `antalya` |
| **Elmalı** (`:1791`) · **Finike** (`:1787`) · **Kaş** (`:1789`) | `s:teke` 1402-07-28→1423-01-01 | `s:karaman` **1402-07-28→1415-01-01** (`kaynak:`) + `s:teke` 1415-01-01→1423-01-01 (değişmedi) | `tekeogullari` "1402-1415 … Antalya ve Alâiye dışında bütün Teke-ili" |

📌 İlk raporda yalnız Elmalı'yı saymıştım (kutu 36,5K'den başlıyordu); aynı zincir üç
kayıtta: Kaş 36,2K ve Finike 36,3K kutunun dışında kalmıştı. TDV "bütün Teke-ili" dediği
için üçü birlikte.
⚠️ **1415-1423 ölçülemedi:** Karaman'ın Teke-ili hâkimiyetinin 1415'te kime geçtiği TDV'de
YOK. Mevcut `teke` penceresi kaynaksız olarak KORUNDU (değiştirilmedi, uydurulmadı).
`olaylar_ek5.js:115`teki 1415-03-01 antlaşması Hamîd-ili/Said-ili/Beyşehir/Seydişehir/
Akşehir'i sayıyor, Teke-ili'ni SAYMIYOR ⇒ "gün komşudan" şartı (aynı olay) tutmuyor; bitiş
yıl hassasiyetiyle `1415-01-01`.
⚠️ Başlangıç günü `1402-07-28` mevcut kırılmadır (Ankara); TDV yalnız yıl veriyor.

### `denetim/FETRET-SUBASILIK-1006.diff` — `data/olaylar_ek5.js:82` (UMIT)
Madde metni TDV ile çelişiyordu: *"Timur'un diriltmesiyle yeniden kurulan Tekeoğulları
Beyliği, Hamza Bey kumandasındaki Osmanlı kuvvetlerinin Antalya'yı kuşatmasıyla son buldu"*
— TDV'ye göre Antalya'yı kuşatan **Karaman**dı, Hamza Bey şehri **savunuyordu**; Osman
Çelebi İstanoz'da gece baskınında öldürüldü. Diff `b:`, `yer:`, `kisiler:`, `d:`,
`kaynak:` alanlarını TDV'ye göre yeniden yazar, eski iddiaları `ic_not_d:`de adıyla
beyan eder. `t:"1423-01-01"`, `k`, `etiket`, `duygu` değişmedi. ("Timur'un diriltmesi"
iddiası künye `teke` `ozet:`inde de var — `devletler.js:1927` — o dosyaya dokunulmadı,
koordinatöre/UMIT'e not.)

### Ölçülen etki — `py arac/denetle.py`, aynı ağaç, önce/sonra (iki diff birlikte)
İkisi de çıkış **2** (sebep diff değil: `devletler_harita.js` taze ağaçta yok ⇒ D8 ölçülemedi).

| ölçüt | önce | sonra |
|---|---|---|
| D1 · D1b · D2 · D2i · D2t · D4c · D4d | 309 · 0 · 0 açık · 1 · 13 · 127 · 324 | **aynı** |
| D2s AÇIK | 186 (tavan 189) | **186** |
| D2s KAPSAM DIŞI / YIL-TEMSİLÎ BORÇ | 792 / 165 | 791 / **166** (+1: yeni `1415-01-01` karaman→teke kırılması; borç tavanı 151 zaten aşılmış, ihlal değil) |
| D2sk kapalı birim | 4134 | 4133 (−1: Antalya'nın 1402 ve 1423 kırılmaları kalktı) |
| kaynaksız `s:` kaydı | 1929 (tavan 1930) | **1926** (−3; araç: TAVAN GEVŞEK) |
| kucuk-devlet / gecici-cephe muafı | 306 / 77 | 305 / 80 |

📌 Tavan önerisi (`§3.4 ④` — ben yazmıyorum): diff inerse kaynaksız `s:` tavanı aynı
commit'te **1926**'ya iner (ölçüm 1929→1926; P84 diff'i bunu etkilemez).
Birlikte uygulanabilirlik: P84 Serbedârî KOORD diff'i + bu KOORD diff'i aynı ağaçta
sırayla `git apply` — TEMİZ. Her iki diff'te CR 0, `git apply --check` temiz (`61751bf0`).

### Emre "subaşılık künyesi yazılsın" derse (seçenek B — önermiyorum)
Gerekenler: `devletler.js` künyesi (ör. `antalya-subasiligi`, f `1402-07-28`, t
`1413-07-05` — Fetret'in sonu; 1413-1423 düz Osmanlı) · `renkler.py` BOYALAR girdisi
(**motor tuzu** ⇒ ayrı diff, tam inşa koşusunda iner; inene kadar künye `boya_gerekli:true`
ile BEYANLI boya borcu) · Antalya `s:` penceresi · iki kronoloji maddesi (başlangıç/bitiş).
Ama dayanak cümlesi bulunmadığı için künyenin `kaynak:` alanı "bağımsızlık kaynakta yok"
diye başlamak zorunda kalır — bu, Emre'nin şartının tersidir.

## 3. ③ BAŞKA FETRET SUBAŞILIKLARI — yalnız liste
Tarama: elimdeki **628** TDV gövdesi (bu kalem + P84 + `*tdv-onbellek/` klasörleri),
"subaşı" geçen VE 1402-1413 / Fetret / Ankara Savaşı / Timur bağlamı taşıyan cümle.
**Vekil ölçümdür** (`OLCUM-KITA §9`): yalnız elimdeki gövdeler; TDV'nin tamamı değil.
- Antalya — Fîruz Bey → Hamza Bey (yukarıda)
- Teke Karahisarı — Hamza Bey'in subaşılığı (`antalya`); **atlasta noktası YOK**
- `suleyman-celebi-emir`: "subaşı Eyne Bey" — Süleyman Çelebi'nin emîri, toprak birimi değil
  ⇒ bu sınıfa girmez.
**Başka aday bulunamadı.** Denenen ve ölü yollar (6 Ekim 2026): slug `elmali`,
`korkuteli`, `istanoz`, `firuz-bey`, `hamza-bey`, `teke`, `teke-sancagi`,
`hamza-bey-firuz-bey-oglu`, `firuz-bey-camii`, `suleyman-celebi` → arama sayfası (ölü);
`alaiye`, `emir-suleyman`, `hamid-ili` → yönlendirme kısa maddesi. TDV araması "Fîruz Bey",
"Hamza Bey Antalya", "Teke-ili", "subaşı", "Osman Çelebi Teke", "istanoz", "korkuteli",
"teke karahisarı" → 0 aday; "elmalı" → yalnız `elmalili-muhammed-hamdi`. ⚠️ Arama sonuç
yok ≠ madde yok (`CLAUDE.md §4` ⑨).
