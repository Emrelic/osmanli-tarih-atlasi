# TUZ-DORT-DOSYA-1010 — tuz dört dosya, parmak izi üç dosya: YAMA (diff)

**10 Ekim 2026 · UMIT yazıcı · yalnız diff — UYGULANMADI, commit/push YOK**
Bulgu: `denetim/BULGU-TUZ-DORDUNCU-DOSYA-1010.md` (origin/main, 7e156d63).
🔴 **Bu yama BİR SONRAKİ MOTOR PARTİSİNDE, C3 ile birlikte girer** (`§9.1②`):
`girdi.py` tuzdadır; KOŞU 22 sürerken hiçbir çalışma ağacında dört dosyaya
dokunulmadı. Bütün iş geçici worktree `C:\atlas-umit-tuz4` (origin/main
`6df8c2cd`) içinde yapıldı ve worktree kaldırıldı.

YENİ DOSYALAR: `arac/motor_iz_dosyalari.py` · `denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py`
DEĞİŞEN DOSYALAR: `arac/girdi.py` · `arac/kaynak_durum.py`
🆕🆕 **TESLİM (v3, GEÇERLİ):** `C:\atlas-umit\denetim\TUZ-DORT-DOSYA-1010-v3.diff` — **ALTI
dosya** (gun + yukseklik), origin/main `6af3ca8f`'ye karşı, 4 dosya +539/−7, LF, BOM yok,
CR 0. v2 diff'i diskten kaldırıldı (geçmişte kalır). **Önce en sondaki "§ v3" bölümünü okuyun.**
(tarihî) TESLİM (v2): `C:\atlas-umit\denetim\TUZ-DORT-DOSYA-1010-v2.diff` — **BEŞ dosya**
(gun.py dahil), origin/main `97a59d5e`'ye karşı, 4 dosya +511/−7, LF, BOM yok, CR 0.
v1 diff'i (`TUZ-DORT-DOSYA-1010.diff`, dört dosya) **silindi** — yanlışlıkla
uygulanmasın. Ad tarihî kaldı. **Önce aşağıdaki "§ v2 (gun.py)" bölümünü okuyun;**
§1-§7 v1'in kaydıdır, "dört" geçen yerleri v2 bölümü günceller.

---

## 1. Ölçülen kusur — satırlar güncel origin/main'de (6df8c2cd) adla doğrulandı

| yer | ne | dosya sayısı |
|---|---|---|
| `uret_petek.py:576-582` `_ONB_TUZ` | `"motor": _MOTOR_IZI` (= `girdi.motor_izi()`, satır 560) + `"onbellek_modulu": dosya_ozeti("motor_onbellek.py")` | **4** |
| `girdi.py:769` `motor_izi()` | elle `("uret_petek.py","renkler.py","girdi.py")` | 3 |
| `kaynak_durum.py:106` `MOTOR_IZ_DOSYALARI` | elle aynı üç, yorumu "girdi.motor_izi() ile AYNI" | 3 |
| `girdi.py:830` `motor_izi_dogrula()` | `motor_izi()`yi çağırır ⇒ üç | 3 |

Bulgunun satır numaraları tutuyor (564 yorum · 576-580 tuz · 769 · 106 · 830).

## 2. Tasarım — TEK OTORİTE, ve niçin `uret_petek.py` ithal EDİLMEDİ

**Yeni modül `arac/motor_iz_dosyalari.py`**: içinde yalnız bir demet literali
`MOTOR_IZ_DOSYALARI = ("uret_petek.py", "renkler.py", "girdi.py", "motor_onbellek.py")`.

- `girdi.py` onu **ithal eder** (`girdi_listesi.py` ile aynı kalıp) ve `motor_izi()`
  bu demeti dolaşır.
- `kaynak_durum.py` onu **ithal ETMEZ** — `ast.literal_eval` ile **KAPI AĞACININ**
  (`--kapi-kok`) kendi kopyasından OKUR. İki gerekçe: ① kod koşturulmaz
  (`kaynak_durum` zaten "ithal ETMEDEN (girdi tuzda)" ilkesindeydi) ② ilan ağacı
  (EMRELIC/C:\atlas) ile koşu ağacı (HAVVA) farklı commit'te olabilir; damga,
  o ağacın motorunun `URETIM_IZI.motor`a yazacağı anahtar kümesini taşımalı.
  - Kapı ağacında dosya YOKSA (10 Ekim öncesi commit) → o ağacın motoru eski
    üçlüyü yazar, `kaynak_durum` da eski üçlüyü kullanır **ve damgaya
    `"motor_iz_liste": "ESKI-UCLU"` beyanı düşer** (sessiz geri düşüş yok).
  - Dosya var ama literal okunamıyorsa → liste `None`, iz `{"__LISTE__": "OKUNAMADI…"}`
    ve `kosu_damgasi_yaz` **False döner ⇒ ilan reddi (mevcut çıkış 6 yolu)**.
    Ölçülemeyen iz, ölçülmüş iz gibi yazılmaz.
- `uret_petek.py` **DEĞİŞMEDİ**: `_ONB_TUZ["motor"]` zaten `girdi.motor_izi()`dir ⇒
  yamadan sonra tuzun kod ekseni = `MOTOR_IZ_DOSYALARI` (dördü). `onbellek_modulu`
  alanı artık aynı özeti ikinci kez taşır (fazlalık, zararsız); yapısını bozmak
  `uret_petek.py`ye dokunmayı gerektirirdi, gerek yok.

**Niçin `uret_petek.py`deki listeyi ithal etmek seçilmedi (ölçüldü):** `uret_petek.py`
modül düzeyinde motordur — 560. satırda `girdi.motor_izi()`, 570-590 önbellek
SQLite'ını AÇAR (`_mob.Onbellek(...)`), 611-640 `tuz_karsilastir` ile önbelleğin
`meta` tablosuna **YAZAR**, 697+ DEM'i arar ve yoksa `SystemExit`. İthal etmek
ölçüm aracının önbelleği kirletmesi demektir. Bu yüzden `uret_petek` tarafı
**AST ile** (koşturmadan) sınavda doğrulanıyor.

**Tuza girmez mi?** `motor_iz_dosyalari.py` tuza girmez, girmesi de gerekmez
(`girdi_listesi.py` emsali): ad eklenir/çıkarılırsa `motor_izi()` anahtar kümesi,
dolayısıyla `_ONB_TUZ["motor"]` ve tuz değişir. Yalnız yorum değişirse hiçbir
şey değişmez.

**"Listeler üç yerde elle tutulmasın":** artık tek yerde elle tutuluyor; geri
kalan iki yer TÜRETİYOR, `uret_petek` + `CLAUDE.md §9.1` ise sınavın (c)
maddesinde ASSERT ediliyor.

## 3. Sınav — `denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` (iki yönde, GERÇEK dosyaya dokunmaz)

Her senaryo `tempfile` altına kopyalanan `arac/`ta ayrı süreçte koşar;
sonda kök ağaçtaki dört dosyanın sha256'sı başla karşılaştırılır.
(Eski `ARAC-TUZ-SINAV-0924.py` gerçek `girdi.py`yi yerinde değiştiriyordu —
koşu sürerken tuz dosyasına dokunmak demek; bu sınav onu yapmaz.)

| | senaryo | sonuç |
|---|---|---|
| (a) YAMASIZ (7e156d63 kopyası) | motor_onbellek.py'ye zararsız satır | tuz `92126fc0c100→1aad974cff17` DEĞİŞTİ · `motor_izi()` **DEĞİŞMEDİ** · kaynak_durum izi **DEĞİŞMEDİ** · `motor_izi_dogrula` **çıkış 0** ⇒ KUSURUN KANITI |
| (b) YAMALI | aynı satır | tuz değişti · `motor_izi()` değişti · kd izi değişti · `motor_izi_dogrula` **çıkış 1**: `MOTOR KODU KOSU SIRASINDA DEGISTI: motor_onbellek.py` |
| (c) EŞİTLİK | ① tek otorite ② `girdi.motor_izi()` ③ `kaynak_durum._motor_izi()` ④ `uret_petek._ONB_TUZ` (AST: `_MOTOR_IZI=girdi.motor_izi()` ∪ `dosya_ozeti` literalleri) ⑤ `CLAUDE.md §9.1` | 5/5 aynı küme = dört dosya |
| (d) YANLIŞ ALARM YOK | değişiklik yok · `girdi_listesi.py` · `denetle.py` | iz/kd/tuz AYNI, çıkış 0 (3/3); ve dördünün HER BİRİ tek başına → RED (4/4) |
| (e) GERİYE UYUM | liste dosyasız ağaç · bozuk liste | `ESKI-UCLU` + üç anahtar · `OKUNAMADI` (eski üçlüye düşmez) · damga YAZILMADI |

**Yamalı ağaçta: `✓ SINAV GEÇTİ — 24/24`, çıkış 0.**
**Ters yön — yamasız ağaçta (`--kok C:\atlas`): `✗ SINAV KALDI — 7/20`, çıkış 1**
(b2 b3 b4 c1 c2 c3 ve d/motor_onbellek kaldı; (e) ÖLÇÜLEMEDİ'ye düştü — eski
`kaynak_durum`da işlev yok). Kapı iki yönde de ötüyor.
Mevcut `ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py` ve `…-SINAMA-SINAV-1006.py` yamalı
ağaçta yeniden koşturuldu: **ikisi de GEÇTİ** (D1 yalnız iki anahtara bakıyor,
dördüncü anahtar onu bozmuyor).

## 4. Geriye uyumluluk — ölçüldü

Mevcut damgaların hepsi ÜÇ anahtarlı:
```
oturumlar/KOSU-KAPI.json (KOŞU 22, 10 Eki 00:09)   girdi · renkler · uret_petek
oturumlar/KOSU-KAPI-DEFTERI.jsonl                   1 satır, aynı üç
data/donemler_ust.js · bolgeler.js · devlet_harita_ust.js · petek_govde_ust.js
  URETIM_IZI.motor                                   aynı üç
```
**Bu damgaları yeni izle KARŞILAŞTIRAN kod YOK** — `motor` sözlüğünü okuyan bütün
yerler tarandı (`get("motor")`/`["motor"]`): `denetle.py:5193` yalnız
`uret_petek.py` özetinin ilk 8 hanesini BASAR; `denetle_yayin.py:309` yalnız
`"uret_petek.py" in motor` sorar (motor ürünü mü) — ikisi de dört anahtarlı izde
aynı cevabı verir. `iz_kapsami` hükmü yalnız `girdi` eksenindedir.
`motor_izi_dogrula` koşu BAŞINDA aynı süreçte alınan izle karşılaştırır ⇒ eski
biçimle hiç karşılaşmaz.
⇒ **Bir sonraki koşuda yanlış RED ÜRETMEZ.** Eski damgalar okunmaya devam eder.

**Beyan edilen, kabul edilen bedeller:**
1. **Genel tuz değişir** (zaten `girdi.py` değişiyor) ⇒ k1·col·kusat·dolgu tam inşa.
   Koşu başı satırı: `tuz geçen koşudan FARKLI (değişen: motor:girdi.py, motor:motor_onbellek.py)`.
2. 🔴 **GEO tuzu da değişir — yalnız bu yama yüzünden bile.** `_ONB_GEO_TUZ["motor"]`
   `renkler`/`girdi`yi süzer; artık `motor_onbellek.py` anahtarını da taşır
   (önce `{uret_petek.py}`, sonra `{uret_petek.py, motor_onbellek.py}`) ⇒
   govde·osm·sb da bir kez ıskalar (`değişen: motor:motor_onbellek.py`).
   `onbellek_modulu` alanı o dosyayı zaten taşıdığı için koruma değeri sıfır,
   bedeli bir tam inşa. **Aynı partide `uret_petek.py` değişiyorsa (C3) bu bedel
   zaten ödeniyor, ek değil.** Değişmiyorsa bilinçli kabul ya da
   `uret_petek.py:606` süzgecine `"motor_onbellek.py"` eklenir — o satır motor
   kodu, benim kapsamımda değil, koordinatör hükmü.
3. `_sr_iz` (`uret_petek.py:~6992`) `_MOTOR_IZI`yi hashler ⇒ değişir (aynı partide
   zaten değişiyor).
4. Yeni koşu kapı damgaları dört anahtar + `"motor_iz_liste"` alanı taşır; eski
   ağaçtan ilan edilirse `"ESKI-UCLU"` yazar.

## 5. İki tabana uyum — `git apply --check`

| taban | sonuç |
|---|---|
| temiz origin/main `6df8c2cd` | ✓ |
| origin/main + `ZAMAN-PAKET-1009-v2.diff` (-C1) | ✓ (bağlam düşürmeden) ve `-C1` ile de ✓ |
| ters sıra: önce bu yama, sonra ZAMAN (-C1 --check) | ✓ |
| ZAMAN + bu yama birleşik ağaçta sınav | ✓ 24/24 (ZAMAN `uret_petek.py`yi değiştiriyor; (c)④ AST hâlâ tutuyor) |

## 6. `CLAUDE.md §9.1` için düzeltme ÖNERİSİ (koordinatörün dosyası — uygulanmadı)

Paragraf başı (satır ~648) aynen kalır; ③ maddesi şöyle olsun:

> 3. **Koşu SÜRERKEN dört dosyaya dokunulmaz** — koşu her aşamada motor parmak
>    izini sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi;
>    bugün bu 7-8 SAAT demektir). Dört dosyanın listesi **tek yerde** durur:
>    `arac/motor_iz_dosyalari.py` — tuz (`_ONB_TUZ["motor"]`), parmak izi
>    (`girdi.motor_izi()`), koşu sınaması (`motor_izi_dogrula`) ve koşu kapı
>    damgası (`kaynak_durum.py`) onu okur; eşitlik `py
>    denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` ile ASSERT edilir.
>    ⚠️ 10 Ekim 2026'ya dek tuz DÖRT, parmak izi ÜÇ dosyaydı
>    (`motor_onbellek.py` yoktu): o dosya değişince önbellek ölüyor ama koşu
>    reddetmiyor, damga göstermiyordu. Cümle yanlış değil EKSİKti.

📌 Bu cümle yamanın inmesine bağlıdır ⇒ **yama ile AYNI commit'te** (`§3.4②` ruhu).
Sınavın (c)⑤ maddesi `CLAUDE.md`deki `**TUZU**` satırını okuyor; o satırın
"`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`" biçimi
korunmalı (değişirse sınav ÖLÇÜLEMEDİ der, sessiz geçmez).

## 7. Ölçtüm · bulamadım · istiyorum

**Ölçtüm:** kusur yamasız kopyada kanıtlandı (tuz değişir, iz/kd/kapı susar, çıkış 0);
yamalıda kapandı (çıkış 1, mesajda `motor_onbellek.py`); beş liste eşit; yanlış
alarm yok (3/3 aynı, 4/4 eksen RED); sınav yamalı 24/24 · yamasız 7/20 KALDI;
iki eski kaynak_durum sınavı geçti; diff iki tabanda ve ters sırada `--check` ✓;
eski damgaları karşılaştıran kod 0 ⇒ yanlış RED yok; GEO tuzu bu yamayla
değişiyor (beyan §4②).

**Bulamadım / ölçülemedi:**
- `C:\atlas-kosu22` bu makinede yok (HAVVA) — KOŞU 22'nin kendi ağacındaki damga
  doğrudan okunamadı; main'deki `oturumlar/KOSU-KAPI.json` (10 Eki 00:09) okundu.
- C3'ün `uret_petek.py`ye dokunup dokunmadığı ölçülmedi (§4② bedelinin ek mi
  değil mi olduğu buna bağlı). `ZAMAN-PAKET-1009-v2` `uret_petek.py`ye dokunuyor.
- `_ONB_GEO_TUZ` evreni (bulgu ⑥④) ayrıca sınanmadı; sınav yalnız `_ONB_TUZ`u ölçer.

**Bayatlayan, dokunmadığım yorumlar (sahipleri başka):**
`denetim/ARAC-TUZ-SINAV-0924.py` (tuz modelini üç dosya sayıyor, gerçek
`girdi.py`yi yerinde değiştiriyor) · `arac/_baglama_onsinav.py:31` ·
`arac/_guzergah_ok106.py:21` · `uret_petek.py:564` yorumu (doğru, dört diyor).

**İstiyorum:**
1. Yama bir sonraki motor partisine C3 ile girsin; §6 önerisi aynı commit'te.
2. Hüküm: GEO tuzunun bu yamayla bir kez ölmesi kabul mü, yoksa aynı partide
   `uret_petek.py:606` süzgecine `motor_onbellek.py` eklensin mi (C3 `uret_petek`e
   dokunuyorsa fark yok).
3. `ARAC-TUZ-SINAV-0924.py`nin emekliye ayrılması ya da yenisine yönlendirilmesi.

---

## § v2 (gun.py) — 10 Ekim 2026, koordinatör isteği (NEGATIF-YIL-1010-B)

**Sebep:** NEG-B ile `arac/gun.py` motorun bağımlılığı oluyor. `girdi.yukle` ve
`uret_petek` (ör. `KESIT_SON = _gun.Tarih(...)`) `gun.Tarih`/`gun.gun` kullanıyor;
dolayısıyla gun.py değişirse motor çıktısı da değişir. v1 + NEG birlikte uygulanınca
v1 sınavı 2/13 ÖLÇÜLEMEDİ veriyordu (geçici kopyada `gun.py` yoktu).

**Değişen (v1'e göre):**
- `arac/motor_iz_dosyalari.py`: `MOTOR_IZ_DOSYALARI` beş dosya oldu: uret_petek ·
  renkler · girdi · motor_onbellek · **gun**. `girdi.py` ve `kaynak_durum.py`
  v1'deki gibi kaldı; listeyi zaten bu dosyadan türetiyorlar.
- Sınav (aynı ad) şöyle güncellendi:
  - geçici kopyaya `gun.py` de giriyor;
  - **(a')** v1 listesi (dört dosya) + NEG ağacında gun.py değişince iz DEĞİŞMİYOR,
    kapı çıkış 0. Bu, kusurun ikinci yüzünün kanıtı. Ön şart olarak gun'un
    gerçekten ithal edildiği AST ile ölçülüyor: `girdi.py`, `uret_petek.py`.
  - **(b5)** yamalı ağaçta gun.py değişince iz, kd ve tuz değişiyor; kapı **RED, çıkış 1**
    (`MOTOR KODU KOSU SIRASINDA DEGISTI: gun.py`).
  - **(c)** beş listenin eşitliği artık beş dosya üzerinden.
  - **(d)** dosya dosya sınamaya gun.py eklendi; yanlış alarm yok.
  - 🆕 **(f) BAĞIMLILIK KAPANIŞI.** Beş motor dosyasının ithal ettiği her yerel
    `arac/` modülü AST ile taranıyor. Her modül ya listede olmalı ya da
    `BEYANLI_ISTISNA`da adı ve gerekçesiyle durmalı. Beyansız yeni bir ithal
    (bir sonraki "gun") sınavı düşürür. Artık ithal edilmeyen ölü istisna da düşürür (`§3.4⑤`).
  - `--claude-md <yol>`: (c)⑤ maddesi önerilen CLAUDE.md metnine karşı da koşabiliyor.

### 🔴 v2'nin YENİ BULGUSU — kapanış taraması üç yerel ithal daha buldu
Motorun ithal ettiği yerel modüller (AST, birleşik ağaç):
```
LİSTEDE   girdi · gun · motor_onbellek · renkler   (+ uret_petek kendisi)
BEYANLI   girdi_listesi       VERİ; etkisi parmak_izi() ile çıktıya yazılır (bilinçli dışarıda)
BEYANLI   motor_iz_dosyalari  listenin kendisi; etkisi anahtar kümesinden geçer
BEYANLI   kosu_kilit          İŞLETİM (çift koşu kilidi); sonucu değiştirmez
🔴 AÇIK   yukseklik           uret_petek:709-714 yalnız `tam_mi()` çağırıyor (DEM bütünlüğü);
                              hangi DEM'in SEÇİLDİĞİNİ değiştirebilir ⇒ çıktıyı etkileyebilir
🔴 AÇIK   dolgu               uret_petek:8180 B katmanı, MOTOR_B_DOLGU=1 bayrağı arkasında
                              (bayrak tuzda); önbelleğe girmiyor ama data/dolgu.js'i ÜRETİYOR
                              ⇒ o çıktının "hangi koddan" izi eksik
```
Bu iki 🔴 kalemi **listeye eklemedim**. İstek beş dosyaydı, ve tuz evrenini
genişletmek koordinatör hükmüdür. Sessiz de bırakmadım: sınavda **BEYANLI AÇIK**
olarak adlarıyla duruyorlar. Hüküm verilince ya listeye girerler (tuz bir kez
daha değişir; aynı motor partisindeyse ek bedeli yok) ya da gerekçeleri "açık"
yerine kalıcı beyana çevrilir.

### Geo tuzu beyanı — v2 güncellemesi
`_ONB_GEO_TUZ["motor"]` (`uret_petek.py:606`) yalnız `renkler.py` ve `girdi.py`'yi
süzüyor. v2 ile geo tuzunun motor ekseni `{uret_petek, motor_onbellek, gun}` oluyor.
- **Ölçüldü:** `denetim/ARAC-LEGO-zincir.py --kok <birleşik ağaç>` çıkış 0 verdi.
  Geo zinciri 33 işlev / 119 modül düzeyi ad içeriyor, `_gun` ya da `KESIT_SON`
  okumuyor. Yani gun.py, renkler ve girdi gibi, geo zincirine ad yoluyla girmiyor;
  tarihlerin etkisi anahtar içeriğinden (aktif üyelik) geçiyor.
- ⇒ Yalnız gun.py'ye dokunan bir değişiklik geo önbelleğini (govde · osm · sb)
  **gereksiz yere** öldürür. `motor_onbellek.py` için de aynısı geçerli (v1 §4②).
- **Önerilen çare (motor kodu, koordinatör hükmü):** aynı partide `uret_petek.py:606`
  süzgecine `"gun.py"` ve `"motor_onbellek.py"` eklensin. `motor_onbellek`
  zaten `onbellek_modulu` alanında var; gun için de LEGO taramasının yasak-ad
  evrenine `gun` eklenirse bu hükmün sınavı olur.
- Bu partide `uret_petek.py` zaten değişiyor (NEG ve C3), bu yüzden geo tuzu
  **bu partide** her durumda bir kez ölüyor; v2'nin bu partiye **ek bedeli yok**.
  Süzgeç sonraki partilerin bedeli için önemli.

### `--check` uyumu — üç sıra, ADIYLA (origin/main `97a59d5e`, her sıra temiz ağaçta)
| sıra | TUZ-v2 | NEG-B | C3 | ortaya çıkan ağaç (`git diff HEAD` sha256) |
|---|---|---|---|---|
| **TUZ-v2 → NEG → C3** (NEG'in istediği parti sırası) | ✓ | ✓ | ✓ | `b411a4c0e47e772f` |
| NEG → TUZ-v2 → C3 | ✓ | ✓ | ✓ | `b411a4c0e47e772f` |
| C3 → TUZ-v2 → NEG | ✓ | ✓ | ✓ | `b411a4c0e47e772f` |

Her adımda düz `--check` geçti, `-C1` hiç gerekmedi. Üç sıra **bayt bayt aynı ağacı**
veriyor (6 dosya, +402/−27; yeni dosyalar `add -N` ile sayıldı).
TUZ+NEG sonrası `git diff --stat HEAD`: denetle · girdi · gun · kaynak_durum ·
motor_esitlik · uret_petek (6 dosya, +270/−27). Bu, NEG'in kendi listesi ile TUZ'un
iki dosyasının birleşimi. ZAMAN-PAKET artık main'de olduğu için ayrıca sınanmadı.

### Birleşik ağaçta üç sınav (TUZ-v2 + NEG + C3)
| sınav | sonuç |
|---|---|
| `ARAC-TUZ-DORT-DOSYA-SINAV-1010.py --claude-md <öneri kopyası>` | **✓ 31/31, çıkış 0** |
| aynı sınav, mevcut `CLAUDE.md` ile ("dört" diyor) | ✗ 1/31 (c2) — **BEKLENEN.** CLAUDE.md yamayla aynı commit'te güncellenmezse sınav öter (`§3.4②`) |
| `ARAC-NEGATIF-YIL-B-SINAV-1010.py <kök>` | **✓ 67/67, çıkış 0** (`PYTHONIOENCODING=utf-8` gerekiyor; boru hattında cp1254 `②` basamıyor, bu sınavın kendi kusuru) |
| `ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py`, `C3_TABAN=<TUZ+NEG ağacı>` | **✓ 187/187, çıkış 0** |

C3 sınavı yamasız kolunu `C3_TABAN:arac/uret_petek.py`'den okuyor. Varsayılan
`origin/main` olurdu ve birleşik tabanı sınamazdı. Bu yüzden TUZ+NEG ağacı geçici
bir index ile `git write-tree` yapılarak tree nesnesine çevrildi (`98db227f…`).
Commit ve ref yok; yalnız sahipsiz nesne kaldı, gc temizler.

### §9.1 öneri metni — v2 (BEŞ dosya; §6'nın yerine geçer)
Satır ~648 başlığı:
> Önbelleğin **TUZU** beş dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
> `girdi.py` · `motor_onbellek.py` · `gun.py`. Biri değişirse **bütün anahtarlar değişir** ⇒

⚠️ Sınavın (c)⑤ maddesi bu satırın biçimini okuyor. Ters tırnaklı adlar ve `Biri değişirse`
ifadesi korunmalı.

③ maddesi:
> 3. **Koşu SÜRERKEN beş dosyaya dokunulmaz.** Koşu her aşamada motor parmak
>    izini sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi;
>    bugün bu 7-8 SAAT demektir). Beş dosyanın listesi **tek yerde** durur:
>    `arac/motor_iz_dosyalari.py`. Tuz (`_ONB_TUZ["motor"]`), parmak izi
>    (`girdi.motor_izi()`), koşu sınaması (`motor_izi_dogrula`) ve koşu kapı
>    damgası (`kaynak_durum.py`) onu okur. Eşitlik ve bağımlılık kapanışı
>    `py denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` ile ASSERT edilir: motorun
>    ithal ettiği yerel modül ya listededir ya da sınavda adıyla beyanlıdır.
>    ⚠️ 10 Ekim 2026'ya dek tuz DÖRT, parmak izi ÜÇ dosyaydı
>    (`motor_onbellek.py` yoktu); aynı gün `gun.py` motorun bağımlılığı oldu.
>    Cümle yanlış değil EKSİKti.

Paragraftaki "dört dosyaya 19 commit" (tarihî ölçüm) **değişmez**.

### v2 — ölçtüm · bulamadım · istiyorum
**Ölçtüm:**
- (a') v1 listesiyle gun.py değişikliği kapıdan geçiyor (çıkış 0); yamalıda RED veriyor (çıkış 1).
- Beş liste eşit; dosya dosya sınamada 5/5 RED, yanlış alarm yok (3/3).
- Üç sıranın üçü de `--check` ✓ ve aynı ağacı veriyor.
- Birleşik ağaçta üç sınav da geçti: 31/31 · 67/67 · 187/187.
- Geo zinciri gun okumuyor (LEGO aracı, çıkış 0).
- Kapanış taraması iki açık yerel ithal buldu: `yukseklik` · `dolgu`.

**Bulamadım / ölçmedim:**
- `yukseklik.tam_mi` değişince çıktının gerçekten değişip değişmediğini koşturarak ölçmedim
  (motor koşturulmaz).
- `dolgu` çıktısının (`data/dolgu.js`) URETIM_IZI'sinde hangi betiklerin yazdığını okumadım.
- NEG sınavının cp1254 kusurunu düzeltmedim; dosya NEG'in.

**İstiyorum:**
1. v2 bu partide TUZ-v2 → NEG → C3 sırasıyla girsin. §9.1 v2 metni aynı commit'te insin.
2. `yukseklik` ve `dolgu` için hüküm: listeye mi girsinler, yoksa kalıcı beyan mı olsunlar?
3. Geo süzgecine `gun.py` ve `motor_onbellek.py` eklensin mi? (`uret_petek.py:606`, motor kodu)
4. NEG sahibine not: `ARAC-NEGATIF-YIL-B-SINAV-1010.py`'nin başına
   `sys.stdout.reconfigure(encoding="utf-8")` eklenmeli.

---

## § v3 (yukseklik) — 10 Ekim 2026, koordinatör hükümleri

**Hükümler:**
- `yukseklik` listeye girdi: DEM seçimi değişirse çıktı değişir, öyleyse tuzda olmalı.
- `dolgu` beyanlı istisna olarak kaldı.
- C3 hükmü: Tarih (NEG-B) kalıyor.

**Liste ALTI dosya:** uret_petek · renkler · girdi · motor_onbellek · gun · yukseklik.

**Değişen (v2'ye göre):**
- `arac/motor_iz_dosyalari.py`: `yukseklik.py` eklendi. Gerekçe yorumu yazıldı, DEM dosyası uyarısı da var (aşağıda).
- Sınav (aynı ad):
  - `DORT` altı dosya oldu; geçici kopyaya `yukseklik.py` de giriyor.
  - **(b6)** `yukseklik.py`'ye zararsız bir satır eklenince iz, kaynak_durum izi ve tuz değişiyor; kapı **RED, çıkış 1** (`MOTOR KODU KOSU SIRASINDA DEGISTI: yukseklik.py`).
  - Dosya dosya sınamada altı dosyanın altısı da RED.
  - `BEYANLI_ISTISNA`dan `yukseklik` çıktı. `dolgu` beyanı şunu söylüyor: *"data/dolgu.js bir gün motor GİRDİSİ olursa bu istisna DÜŞER"*.
  - 🆕 **(f3)** bu şart artık sınanıyor: `dolgu.js` ne `girdi_listesi.py` kodunda ne de `girdi.py`'de geçmeli. **İki yönde sınandı.** Bugün ✓. Geçici kopyada `GIRDI_DOSYALARI`na `"dolgu.js"` ekleyince ✗ (`SINAV KALDI — 1/34: f3`). Dosya sonra geri yüklendi ve `git diff --quiet` ✓ verdi.

### yukseklik geo tuzunda KALMALI (ölçüldü)
Zincir şöyle:
- `uret_petek.py:709-716` → `yukseklik.tam_mi()` hangi DEM'in seçileceğine karar verir (`EGIM_DEM`).
- `:1456` → DEM okunur.
- `:1490` → `_kvsurt = 1 + EGIM_CARPANI × eğim`.
- `:1876` → `_kv_dijkstra(_kvsurt, …)`, yürüyüş sahipliği buradan çıkar.

`denetim/ARAC-LEGO-zincir.py --kok <birleşik ağaç>` (çıkış 0) ölçtü: **geo zinciri
(govde · osm · sb) `_kvsurt`, `_YR_SAHIP`, `_YR_SAHIP_SIRA` ve `MOTOR_YURUYUS` okuyor**, ayrıca
`_yr_yerel_dijkstra` ve `_yr_etiket_poligon` işlevlerini çağırıyor. Yani DEM geo
geometrisini **doğrudan** etkiliyor.

⇒ **ÖNERİ:** `uret_petek.py:606` süzgecine (koordinatör yazacak) **yalnız** `"gun.py"` ve
`"motor_onbellek.py"` eklensin. `yukseklik.py` **eklenmesin**, geo tuzunda kalsın.
Süzgeçten sonra geo tuzunun motor ekseni `{uret_petek.py, yukseklik.py}` olur.
(Ölçüm: aynı LEGO çıktısında `_gun` ve `KESIT_SON` geo zincirinde yok — gun süzülebilir.)

🔴 **YENİ BULGU — DEM DOSYASININ KENDİSİ hiçbir tuzda yok.** `_ONB_TUZ` / `_ONB_GEO_TUZ`
içinde `EGIM_DEM` yolu ya da tif'in özeti geçmiyor. `uret_petek.py`'de `EGIM_DEM` yalnız
701, 716, 720 ve 1456. satırlarda var. `_kvsurt` da `_onb_parca_anahtar` içinde yok.
- `yukseklik.py` listeye girince yalnız **seçim kodu** korunuyor.
- `etopo2022_30s_*.tif` değişirse ya da öteki tif seçilirse (ör. biri bozulup `tam_mi` öbürüne
  düşerse), önbellek **eski eğimle hesaplanmış geometriyi isabet sayar** ve bu sessiz olur.
- Çare motor kodudur ve kapsamım dışında. Öneri: tuza `"dem": dosya_ozeti(EGIM_DEM)` ya da en
  azından seçilen DEM'in adı ve boyutu eklensin. Tif 183 MB, özeti ~1 sn sürer. Ölçmedim.

### `--check` — üç sıra, ADIYLA (origin/main `6af3ca8f`, her sıra temiz ağaçta)
| sıra | TUZ-v3 | NEG-B v2 | C3 | ağaç (`git diff HEAD` sha256, izlenmeyenler `add -N` ile) |
|---|---|---|---|---|
| **TUZ-v3 → NEG → C3** (parti sırası) | ✓ | ✓ | ✓ | `e878e3aa37ae9e1a` |
| NEG → TUZ-v3 → C3 | ✓ | ✓ | ✓ | `e878e3aa37ae9e1a` |
| C3 → TUZ-v3 → NEG | ✓ | ✓ | ✓ | `e878e3aa37ae9e1a` |

`-C1` gerekmedi. Üç sıranın üçü de aynı ağacı veriyor: 9 dosya, +1156/−27.
⚠️ **v2 bölümündeki `b411a4c0…` özetinin evreni EKSİKTİ.** O ölçümde `add -N` glob'u
başarısız olmuştu; yeni dosyalar (sınavlar ve `motor_iz_dosyalari.py`) özete girmemişti.
"Bayt bayt aynı" hükmü o gün yalnız izlenen 6 dosya için geçerliydi. v3 ölçümü 9 dosyanın
tamamını kapsıyor.

### Birleşik ağaçta üç sınav (TUZ-v3 + NEG-B v2 + C3)
| sınav | sonuç |
|---|---|
| TUZ, önerilen **"altı"** CLAUDE.md ile (`--claude-md`, geçici kopya) | **✓ 34/34, çıkış 0** |
| TUZ, **bugünkü "dört"** CLAUDE.md ile | **✗ 1/34 (c2), çıkış 1.** ⑤ = 4 dosya — beklenen; sınav kendi önerdiği metinle tutarlı |
| NEG-B v2, `> dosya` (PYTHONIOENCODING **YOK**) | **✓ 67/67, çıkış 0** |
| C3, `C3_TABAN` = TUZ-v3 + NEG ağacı (`8d185c57…`, geçici index, commit ve ref yok) | **✓ 187/187, çıkış 0** |

### §9.1 öneri metni — v3 (ALTI dosya; §6 ve v2 metninin yerine geçer)
Satır ~648 başlığı:
> Önbelleğin **TUZU** altı dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
> `girdi.py` · `motor_onbellek.py` · `gun.py` · `yukseklik.py`. Biri değişirse **bütün anahtarlar değişir** ⇒

③ maddesi:
> 3. **Koşu SÜRERKEN altı dosyaya dokunulmaz.** Koşu her aşamada motor parmak
>    izini sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi;
>    bugün bu 7-8 SAAT demektir). Altı dosyanın listesi **tek yerde** durur:
>    `arac/motor_iz_dosyalari.py`. Tuz (`_ONB_TUZ["motor"]`), parmak izi
>    (`girdi.motor_izi()`), koşu sınaması (`motor_izi_dogrula`) ve koşu kapı
>    damgası (`kaynak_durum.py`) onu okur. Eşitlik ve bağımlılık kapanışı
>    `py denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` ile ASSERT edilir: motorun
>    ithal ettiği yerel modül ya listededir ya da sınavda adıyla beyanlıdır
>    (`dolgu`: B katmanı, `data/dolgu.js` girdi olursa istisna düşer).
>    ⚠️ Liste yalnız KODU kapsar; DEM dosyası (`etopo2022_*.tif`) tuzda DEĞİL.
>    ⚠️ 10 Ekim 2026'ya dek tuz DÖRT, parmak izi ÜÇ dosyaydı
>    (`motor_onbellek.py` yoktu); aynı gün `gun.py` ve `yukseklik.py` eklendi.
>    Cümle yanlış değil EKSİKti.

Sınavın (c)⑤ maddesi bu başlığın biçimini okuyor. Bu metinle ✓, bugünkü metinle ✗ (ölçüldü, yukarıda).

### 📌 Parti şartı (koordinatör, C3 hükmü)
**Parti koşusunun logu, aşama sürelerini KOŞU 21 ve 22 ile karşılaştıracak.** NEG-B
(Tarih) motorun tarih ayrıştırma ve sıralama yoluna giriyor. Bu partide tuz zaten bir kez
ölüyor (tam inşa), dolayısıyla süre farkı iki bileşenli olacak: önbelleksiz inşa ve
`gun.Tarih` maliyeti. Karşılaştırma aşama aşama yapılmalı (`⏱ <aşama> — süre` satırları),
yalnız toplam süreye bakılmamalı.

### NEG-B v2 (ayrı teslim: `NEGATIF-YIL-1010-B-v2.diff`)
- Tek değişiklik sınav dosyasında: ithal satırından hemen sonra
  `if hasattr(sys.stdout, "reconfigure"): sys.stdout.reconfigure(encoding="utf-8")`.
  v1 ile v2'nin ağaç farkı yalnız bu 5 satır (ölçüldü: iki ağacın `git diff HEAD`
  karşılaştırması). Diff 6 dosya, origin/main `6af3ca8f`'ye karşı, LF, CR 0.
- **Ters yön:**
  - v1 sınavı `> dosya` ile koşunca **çıkış 1**, `UnicodeEncodeError: 'charmap' … '\u2462'`.
  - v2 aynı koşulda **çıkış 0, 67/67**.
  - v2 PowerShell `| Out-String` ile **çıkış 0, 67/67**.
- ⚠️ **StringIO altında (`sys.stdout = io.StringIO()` + runpy):** sınavın kendi koruması
  çalışıyor, satır 266'ya kadar ilerliyor. Ama ithal ettiği **`arac/denetle.py:32`** düşüyor:
  `getattr(sys.stdout,"encoding","").lower()`, StringIO'nun `encoding`'i `None` olduğu için
  `AttributeError` veriyor. Kusur **origin/main'deki denetle.py'de** (NEG değişikliği değil).
  "Başka hiçbir değişiklik yok" hükmü gereği dokunmadım. Çaresi:
  `(getattr(sys.stdout,"encoding",None) or "").lower()`.
- `C:\atlas-umit\denetim\ARAC-NEGATIF-YIL-B-SINAV-1010.py` (diff dışındaki tek başına kopya)
  **v1 olarak duruyor**, güncellemedim. Diff v2'dir.

### v3 — ölçtüm · bulamadım · istiyorum
**Ölçtüm:**
- (b6) `yukseklik.py` değişikliği kapıda RED; 6/6 dosya RED; yanlış alarm yok.
- (f3) dolgu şartı iki yönde sınandı.
- Geo zinciri DEM türevlerini (`_kvsurt`, `_YR_SAHIP`) okuyor, yani yukseklik geo tuzunda kalmalı.
- DEM dosyası hiçbir tuzda yok.
- Üç sıra ✓ ve aynı ağacı veriyor (9 dosya).
- Birleşik ağaçta sınavlar: 34/34 · 67/67 · 187/187. Bugünkü "dört" metninde TUZ sınavı ✗ veriyor.
- NEG v2 boruda ve yönlendirmede çökmüyor; v1 çöküyor.

**Bulamadım / ölçmedim:**
- DEM tif özetinin süresi.
- `yukseklik.py`'nin içinde başka işlevlerin motorca kullanılıp kullanılmadığı. AST yalnız
  `tam_mi` çağrısını gösterdi; `_yk.` geçen tek satır 714.

**İstiyorum:**
1. Parti TUZ-v3 → NEG-B v2 → C3 sırasıyla girsin; §9.1 "altı" metni aynı commit'te insin.
2. Geo süzgecine (`:606`) yalnız `gun.py` ve `motor_onbellek.py` eklensin; `yukseklik` eklenmesin.
3. DEM dosyasını tuza almak için hüküm (motor kodu).
4. `denetle.py:32` StringIO kusuru için ayrı iş.
