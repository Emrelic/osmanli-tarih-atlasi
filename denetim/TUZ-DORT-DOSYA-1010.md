# TUZ-DORT-DOSYA-1010 — tuz dört dosya, parmak izi üç dosya: YAMA (diff)

**10 Ekim 2026 · UMIT yazıcı · yalnız diff — UYGULANMADI, commit/push YOK**
Bulgu: `denetim/BULGU-TUZ-DORDUNCU-DOSYA-1010.md` (origin/main, 7e156d63).
🔴 **Bu yama BİR SONRAKİ MOTOR PARTİSİNDE, C3 ile birlikte girer** (`§9.1②`):
`girdi.py` tuzdadır; KOŞU 22 sürerken hiçbir çalışma ağacında dört dosyaya
dokunulmadı. Bütün iş geçici worktree `C:\atlas-umit-tuz4` (origin/main
`6df8c2cd`) içinde yapıldı ve worktree kaldırıldı.

YENİ DOSYALAR: `arac/motor_iz_dosyalari.py` · `denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py`
DEĞİŞEN DOSYALAR: `arac/girdi.py` · `arac/kaynak_durum.py`
TESLİM: `C:\atlas-umit\denetim\TUZ-DORT-DOSYA-1010.diff` (4 dosya, +425/−7, LF, BOM yok, CR 0)

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
