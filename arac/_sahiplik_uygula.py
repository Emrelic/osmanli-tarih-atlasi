# -*- coding: utf-8 -*-
# 🔴 BU ARACI --yaz İLE KOŞTURMA — glob'daki İNMİŞ yamalar 174 kaydı GERİ ALIR (63'ü kaynaklı dönem
#    siler, 93'ü kid'li tâbi dönemi siler; ölçüldü 6 Ekim 2026, denetim/YALAN-DAMGA-YERYAMA-1006.md).
#    Geri alma kapısı inene ve inmiş yamalar glob dışına taşınana kadar (koordinatör hükmü) koşturulmaz.
# 🟢 GERİ ALMA KAPISI İNDİ (SAHIPLIK-UYGULA-KAPI-1006): `arac/_bayat_yama_kapi.py` ŞARTTIR —
#    yoksa / soramazsa araç ÇIKIŞ 3 ile durur; bayat yama bulursa HİÇBİR ŞEY YAZMADAN ÇIKIŞ 2.
#    Taşıma (inmiş yamaların glob dışına alınması) koordinatörün ayrı işidir; o inene kadar
#    kapı bugünkü korpusta bayat kayıtları adıyla durdurur.
"""SAHİPLİK YAMASI UYGULAYICI — yer_yama*.js  ->  yerlesimler*.js

    py arac/_sahiplik_uygula.py           KURU KOŞU (hiçbir şey yazmaz)
    py arac/_sahiplik_uygula.py --yaz     gerçekten yaz
    --yama-glob <regex>                   yama dosyası süzgeci (öntanımlı ^yer_yama.*\.js$)

ÇIKIŞ: 0 temiz · 1 node hatası · 2 BAYAT YAMA (yazılmadı) · 3 geri alma kapısı ölçemedi ·
       4 (SAHIPLIK-UYGULA-KUSUR-1008) GERİ OKUMA doğrulamadı ya da TANINMAYAN kayıt var.
       Geri okuma: değişen her dosya motorun okuyucusuyla (`girdi._cevir`) yeniden
       ayrıştırılır; kaydın son değeri = yazılan değer, öteki her şey birebir aynı olmalı.
       Önce bellekte (tutmazsa HİÇBİR ŞEY yazılmaz), yazımdan sonra DİSKTEN.

═══ NİÇİN VAR ═══
Üç yama ailesi ölçüldü, ikisinin uygulayıcısı vardı, ÜÇÜNCÜSÜNÜNKİ YOKTU:

    A) KRONOLOJİ EŞLEŞME  {dosya,t,b,yer_id|yer_kon} -> olaylar*.js
                          arac/yama_uygula.js        ✓ 1561 indi
    B) KADEME             {yerlesim,mevcut.k,oneri.k} -> yerlesimler*.js
                          arac/_kademe_uygula.py     ✓ 1128 indi
    C) SAHİPLİK           {ad, d|s|v|isg}            -> yerlesimler*.js
                          ???                        🔴 37 kayıt BEKLİYORDU

⇒ Sekiz oturum sahiplik yaması yazdı ve hiçbiri inmedi. `CLAUDE.md §7`:
  *"denetimler 'yama UYGULANDI mı' diye sorar, 'yama OKUNDU mu' diye
  SORMAZ."* Bu betik ikinci sorunun cevabıdır.

═══ DÖRT KORUMA — dördü de bu projede ısırmış vakalardan ═══
① AD BELİRSİZSE UYGULANMAZ. Ad birden çok kayıtta geçiyorsa hangisinin
   kastedildiği belirsizdir; yanlış kaydı değiştirmek SESSİZ veri
   bozulmasıdır. (`_kademe_uygula.py`nin kendi kuralı.)

② ÇAKIŞAN YAMA UYGULANMAZ. Aynı `ad:` için İKİ DOSYADA farklı içerik
   varsa, dosya adının alfabetik sırası KARAR VEREMEZ.
   🔴 Ölçülmüş vaka: İğneada · Rezve · Ahtapolu hem `yer_yama_emilme2.js`
     hem `yer_yama_p19.js` içinde, ve p19 `bizans 1281-1361` açılışını
     taşıyor, emilme2 taşımıyor. Alfabetik sıra emilme2'yi seçerdi —
     yani DAHA EKSİK olanı. `yama_uygula.js` bu dersi zaten yazmış:
     *"karar yargıyla değil dosya adının alfabetik sırasıyla veriliyordu."*

③ KENDİ KİLİDİNE SAYGI. Kayıtta `d2_gerek` varsa yazarı onu BİLEREK
   kilitlemiştir (Halepçe: *"1554-08-22 için kronoloji maddesi ŞART.
   Madde inmeden UYGULAMA."*). Kilit ancak o gün külliyata girince açılır.

④ KIRILMA GÜNÜ MADDESİZSE UYGULANMAZ. `Değişmez 2` Osmanlı için ±30 gün
   içinde madde ister ve tavan 0. Maddesiz bir günü yazmak, Emre'nin en
   çok şikâyet ettiği kusuru ÜRETMEKTİR: değişim, o güne rastgele denk
   gelen alâkasız bir maddenin altında belirir.
   ⚠️ Bu süzgeç yalnız `d:` (doğrudan Osmanlı) günlerine uygulanır —
     `Değişmez 2` onu denetler. `s:` yabancı günleri `2s`nin işi ve onun
     tavanı 121, yani doluluk payı var; orada UYARI verilir, ENGEL değil.
"""
import bisect
import collections
import io
import json
import os
import re
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.getcwd()
VERI = os.path.join(KOK, "data")
YAZ = "--yaz" in sys.argv
# `--yama-glob <regex>` — hangi `data/` dosyaları YAMA sayılır (öntanımlı `^yer_yama.*\.js$`).
#   SAHIPLIK-UYGULA-KUSUR-1008: sınavın tek bir yamayı, inmiş yamaların glob'u
#   (174 kaydı geri alır — dosya başı) DIŞINDA koşturabilmesi için.
YAMA_GLOB = r"^yer_yama.*\.js$"
if "--yama-glob" in sys.argv:
    YAMA_GLOB = sys.argv[sys.argv.index("--yama-glob") + 1]
# Sınav kancası (yalnız `denetim/ARAC-SAHIPLIK-UYGULA-SINAV-1008.py`): adı verilen kaydın
# yazılacak metnine yapay bir MÜKERRER anahtar eklenir — geri okumanın onu yakaladığı
# (çıkış 4, hiçbir dosya yazılmadan) İKİNCİ YÖNDE sınanır. Gerçek koşuda boştur.
SINAV_BOZ = os.environ.get("SAHIPLIK_SINAV_BOZ", "")

# ─────────────────────────────────────────────────────────── ① yamaları oku
JS = r"""
global.window = {};
const fs = require('fs');
const kaynak = {};
const GLOB = new RegExp(process.env.YAMA_GLOB);
for (const f of fs.readdirSync('data').filter(x => GLOB.test(x))) {
  const onceki = new Set(Object.keys(global.window));
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) if (!onceki.has(k)) kaynak[k] = f;
}
const cik = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (!Array.isArray(v)) continue;
  for (const r of v) {
    // 🔴 SÜZGEÇ 1 Eylül 2026'da GENİŞLETİLDİ — ve dar hâli bir DAL ÖLDÜRÜYORDU.
    //   Python tarafına `m:`/`kaynak:` desteği yazıldı, sonra sınandı ve
    //   HİÇ ATEŞLEMEDİ: skaler-only kayıtlar BURADA eleniyordu, yani yeni
    //   kod Python'a hiç ULAŞMIYORDU. `CLAUDE.md §11`: *"ölçemediğini
    //   eleyen bir süzgeç, onu TEMİZ sayar."* Sınanmasaydı bu betik
    //   "skaler yamaları destekliyor" sanılacak, ve yazılan her `m:`
    //   yaması SESSİZCE hiçbir şey yapmayacaktı — tam da bu betiğin
    //   önlemek için var olduğu kusur.
    // 🔴 2 Eylül 2026 — SÜZGEÇ YİNE GENİŞLETİLDİ, AYNI SEBEPTEN.
    //   `bos:`/`neden:`/`not:` eklenmeden önce bu satır onları da elerdi:
    //   yalnız bu üç alanı taşıyan (d/s/v/isg/m/kaynak'sız) bir kayıt
    //   Python'a HİÇ ULAŞMAZDI — "SÜZGEÇ 1"in ta kendisi, iki alan ötede.
    if (r && r.ad !== undefined &&
        (r.d || r.s || r.v || r.isg || r.m !== undefined ||
         r.kaynak !== undefined || r.bos !== undefined ||
         r.neden !== undefined || r.not !== undefined ||
         r.kur !== undefined)) {
      cik.push({ __dosya: kaynak[k] || '?', __alan: k, r: r });
    }
  }
}
process.stdout.write(JSON.stringify(cik));
"""
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True,
                   env=dict(os.environ, YAMA_GLOB=YAMA_GLOB))
if p.returncode != 0:
    print("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:800])
    raise SystemExit(1)
yama = json.loads(p.stdout.decode("utf-8"))
print("YAMA KAYDI: %d" % len(yama))

# ───────────────────────────────────────────────── ② kronoloji günleri
gunler = set()
for f in os.listdir(VERI):
    if not f.startswith("olaylar") or not f.endswith(".js"):
        continue
    s = io.open(os.path.join(VERI, f), encoding="utf-8", errors="replace").read()
    gunler |= set(re.findall(r't:\s*"(\d{4}-\d{2}-\d{2})"', s))
    gunler |= set(re.findall(r'"t":\s*"(\d{4}-\d{2}-\d{2})"', s))
print("KRONOLOJİ: %d benzersiz gün" % len(gunler))

_G = sorted(gunler)


def _sayi(g):
    y, a, gg = int(g[:4]), int(g[5:7]), int(g[8:10])
    return y * 372 + (a - 1) * 31 + gg          # kaba ama tekdüze


_GS = sorted(_sayi(g) for g in _G)


def maddesi_var(gun, tolerans=30):
    """±tolerans gün içinde kronoloji maddesi var mı.

    🔴 SINIR GÜNLERİ MUAF — ve bu satır BİR KUSURU DÜZELTİYOR.
      İlk sürüm sınırı muaf tutmuyordu ve `1923-10-29`u "maddesiz gün"
      sayıp BEŞ DOĞRU KAYDI engelledi (Ardahan · Erzincan · Kars ·
      Mersin · Sivrihisar). Oysa `1923-10-29` bir kırılma değil atlasın
      KAPANIŞ SINIRI; her dönemin son `t:`si odur.
      `denetle.py:916` ve `:1634` ikisi de aynı muafiyeti taşıyor:
          if not d or d <= "1281-01-01" or d >= "1923-10-29": continue
      ⇒ Süzgecim gerçek değişmezden DAHA SIKIYDI, ve fazla sıkı bir
        süzgeç doğru işi engeller — gevşek olan yanlış işi geçirir.
        İkisi de kusur; bu, az konuşulan yönü.
    """
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", gun or ""):
        return True                             # ay/yıl hassasiyeti: sorma
    if gun <= "1281-01-01" or gun >= "1923-10-29":
        return True                             # atlasın sınırı, kırılma DEĞİL
    h = _sayi(gun)
    import bisect
    i = bisect.bisect_left(_GS, h)
    for j in (i - 1, i):
        if 0 <= j < len(_GS) and abs(_GS[j] - h) <= tolerans * 1.03:
            return True
    return False


# ────────────────────────────────────── ③ veride ad -> (dosya, satır)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

# 🔴 GERİ ALMA KAPISI — ŞART (koordinatör hükmü, 6 Ekim 2026). Modül yoksa araç KOŞMAZ:
#   kapısız bir uygulayıcı, glob'daki inmiş yamalarla sonraki düzeltmeleri SESSİZCE geri alır
#   (ölçüldü: 177 değişimin 174'ü — `denetim/YALAN-DAMGA-YERYAMA-1006.md`).
try:
    import _bayat_yama_kapi as KAPI  # noqa: E402
except Exception as _e:  # noqa: BLE001
    print("🔴 GERİ ALMA KAPISI YÜKLENEMEDİ (%s: %s) — araç KOŞMAZ (çıkış 3)."
          % (type(_e).__name__, _e))
    raise SystemExit(3)

# ══ ALAN ARAMASI DİZGE İÇİNİ ATLAR — 7 Eylül 2026, 1.MURAT ══════════════
# 🔴 VE BU BİR VERİ BOZULMASINDAN DOĞDU, teoriden değil.
#   `Zagem (Kaheti)` kaydına bir `neden:` beyanı indi ve o beyanın METNİ
#   şu cümleyi içeriyordu:
#       "Veri de aynı günle teyit ediyor: v:[{f:"1578-08-09",…}]"
#   `ALAN_RX["v"]` = `\bv:\s*\[` o düzyazıdaki `v:[`i YAKALADI, `dizi_sonu`
#   cümlenin içindeki `]`i buldu, ve aralığı HAM JS ile değiştirdi.
#   Sonuç: `neden:` dizgesi ortasından kapandı, `yerlesimler.js`
#   AYRIŞTIRILAMAZ hâle geldi (`denetle.py` JSONDecodeError ile öldü).
#
# 📌 §11'in *"bir alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli"*
#   ailesinin YENİ ekseni. Önceki üyeler yorumda · başlıkta · önsözde
#   arıyordu; bu **kaydın KENDİ DÜZYAZISINDA** arıyor — ve o düzyazı
#   veriyle aynı sözdizimini taşıyor, çünkü veriyi ANLATIYOR.
#   ⚠️ Kusur yıllardır oradaydı ve ateşlemedi: ancak `v:[…]` içeren bir
#     metin, `v:` alanı da olan bir kayda inince patlar.
def _dizge_maskesi(s):
    """Her karakter için 1 = JS dizgesinin ya da YORUMUN İÇİNDE.

    Yorumlar da maskelenir: bir kaydın üstündeki `// d: 1352'de başlıyordu`
    yorumu, `d:` alanı sanılmamalı.
    """
    maske = bytearray(len(s))
    tirnak = None
    kacis = False
    i = 0
    n = len(s)
    while i < n:
        c = s[i]
        if kacis:
            kacis = False
            maske[i] = 1
            i += 1
            continue
        if tirnak:
            maske[i] = 1
            if c == "\\":
                kacis = True
            elif c == tirnak:
                tirnak = None
            i += 1
            continue
        if c in "\"'":
            tirnak = c
            maske[i] = 1
            i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "/":
            while i < n and s[i] != "\n":
                maske[i] = 1
                i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "*":
            maske[i] = maske[i + 1] = 1
            i += 2
            while i < n and not (s[i] == "*" and i + 1 < n and s[i + 1] == "/"):
                maske[i] = 1
                i += 1
            while i < n and i < len(s) and s[i] in "*/":
                maske[i] = 1
                i += 1
            continue
        i += 1
    return maske


DOSYALAR = list(girdi.GIRDI_DOSYALARI)
# 🔴 SAHIPLIK-UYGULA-KUSUR-1008 · K1 — TIRNAKLI ANAHTAR (`"ad":`) DA ANAHTARDIR.
#   Ölçüldü (ZAMAN-Z5-1008 ④-2): `yerlesimler_sinir_guney/kuzey.js` JSON biçimli
#   (`{"ad":"Sincan",…,"s":[…]}`); eski `\bad:` onu GÖRMÜYOR, kayıt "veride-yok"
#   sayılıyor ve 28 kayıt (Sincan dahil) düşüyordu. Ve kusur yalnız `AD_RX`te
#   DEĞİLDİ: `ALAN_RX` · `SKALER_RX` · `ARALIK_RX` · `mukerrer_alanlar` da tırnaklı
#   anahtarı görmüyordu ⇒ yalnız `AD_RX` düzeltilseydi `s:` "yok" sanılıp İKİNCİ bir
#   `"s"` eklenecekti (K2'nin JSON kopyası) ve kapsam-daralma koruması JSON kayıtta
#   KÖR kalacaktı (eski kapsam boş okunur ⇒ "kayıp yok"). Hepsi `_anahtar_rx`ten geçer.
#   Tırnaksız dal ESKİ desenin BİREBİR aynısıdır (gerileme sınavı ölçer).


def _anahtar_rx(alan):
    """`alan:` (tırnaksız, eski desen) ya da `"alan":` (JSON) — anahtar + `:`."""
    return r'(?:\b%s|"%s"\s*)' % (alan, alan) + ":"


AD_RX = re.compile(_anahtar_rx("ad") + r'\s*"((?:[^"\\]|\\.)*)"')


def _disarida(maske, metin, p):
    """`p`de başlayan eşleşme DİZGE/YORUM DIŞINDA mı.

    Tırnaklı anahtarın ilk karakteri bir dizgenin AÇILIŞ tırnağıdır ve maskede 1'dir;
    o yüzden ölçüt: açılış tırnağının ÖNCESİ dizge dışında mı. (Dizge İÇİNDEKİ kaçışlı
    tırnak ters bölüden sonra gelir, ters bölü maskelidir ⇒ reddedilir.)"""
    if not maske[p]:
        return True
    return metin[p] == '"' and (p == 0 or not maske[p - 1])


def _coz(ham):
    """JS dizge gövdesini (tırnaksız) çözer; çözemezse HAM döner."""
    try:
        return json.loads('"%s"' % ham)
    except ValueError:
        return ham


# 🔴 KAYIT BİR SATIR DEĞİL, BİR ARALIKTIR — ve bu ÖLÇÜLDÜ.
#   İlk sürüm satır tabanlıydı ve `Şehrizor`da "d:[ kapanmıyor" dedi.
#   Tek bir kayıt sanıp elle düzeltmeye kalkmadan önce sayıldı:
#       TEK satırlık kayıt :  900
#       ÇOK satırlı  kayıt : 1724      ⇒ verinin %66'sı
#   Yani alet, dokunabildiğini sandığı verinin ancak ÜÇTE BİRİNE
#   ulaşıyordu — ve bunu hiç söylemiyordu, çünkü inen 24 kaydın
#   hepsi rastlantıyla tek satırlıktı.
# 📌 "Şehrizor'u elle düzelt" kararı, %66'lık bir körlüğü BİR VAKA
#   sanmak olurdu. Ölçüm on saniye sürdü.
# 🔴 SAHIPLIK-UYGULA-KUSUR-1008 · K2 — ARALIK `ad:` SATIRINDAN DEĞİL, KAYDIN `{`…`}`
#   ÇİFTİNDEN kurulur. Eski hâl aralığı `ad:` satırından başlatıp satır dengesini
#   sayıyordu; `{` bir ÜST satırdaysa (Honolulu · Antananarivo · İmâdiye · Taraz ·
#   Sayram) `ad: "…",` satırının dengesi 0 ⇒ aralık TEK SATIR ⇒ `s:` "yok" sanılıp
#   `ad:`ın ardına EKLENİYOR, eski `s:` aşağıda KALIYOR ⇒ JS'te aynı anahtar iki kez,
#   SONUNCUSU (eski) kazanır, yama düşer — ve araç "uygulandı" diyordu.
#   `mukerrer_alanlar` da aynı tek satıra baktığı için mükerreri GÖREMİYORDU.
#   Şimdi: dosya bir kez maskelenir, dizinin ÜST SEVİYE nesneleri (`[` içinde
#   derinlik 1 `{…}`) kayıttır, `ad` anahtarı O NESNENİN kendi seviyesinde aranır
#   (yorumdaki / iç nesnedeki `ad:` kayıt SAYILMAZ). Aralık = `{` satırı … `}` satırı.
konum = collections.defaultdict(list)
icerik = {}
json_stili = {}          # (dosya, i) -> kayıt anahtarları TIRNAKLI mı
eksik_dosya = []
paylasimli = {}          # ad -> sebep  (iki kayıt aynı satırı paylaşıyor)
for dosya in DOSYALAR:
    ad_d = os.path.basename(dosya)
    yol = os.path.join(VERI, ad_d)
    if not os.path.exists(yol):
        eksik_dosya.append(ad_d)            # D225: sessizce elenmez, aşağıda basılır
        continue
    metin = io.open(yol, encoding="utf-8", newline="").read()
    satirlar = metin.split("\n")
    icerik[ad_d] = satirlar
    maske = _dizge_maskesi(metin)
    bas_ofs = [0]
    for _l in satirlar[:-1]:
        bas_ofs.append(bas_ofs[-1] + len(_l) + 1)
    yigin = []
    nesneler = []
    for p, ch in enumerate(metin):
        if maske[p]:
            continue
        if ch in "{[":
            yigin.append((ch, p))
        elif ch in "}]":
            if not yigin:
                continue
            ac, q = yigin.pop()
            if ch == "}" and ac == "{" and len(yigin) == 1 and yigin[0][0] == "[":
                nesneler.append((q, p))
    dosya_ar = []
    for q, p in nesneler:
        govde = metin[q:p + 1]
        gm = maske[q:p + 1]
        bul = None
        for m in AD_RX.finditer(govde):
            if not _disarida(gm, govde, m.start()):
                continue
            der = 0
            for k in range(m.start()):
                if gm[k]:
                    continue
                if govde[k] in "{[":
                    der += 1
                elif govde[k] in "}]":
                    der -= 1
            if der == 1:
                bul = m
                break
        if not bul:
            continue
        i = bisect.bisect_right(bas_ofs, q) - 1
        j = bisect.bisect_right(bas_ofs, p) - 1
        ad = _coz(bul.group(1))
        konum[ad].append((ad_d, i, j))     # ARALIK: [i..j]
        json_stili[(ad_d, i)] = govde[bul.start()] == '"'
        dosya_ar.append((i, j, ad))
    # İki kayıt aynı satırı paylaşıyorsa satır aralığıyla yazmak ÖTEKİNİ de ezer ⇒ yazılmaz.
    dosya_ar.sort()
    for (i1, j1, a1), (i2, j2, a2) in zip(dosya_ar, dosya_ar[1:]):
        if i2 <= j1:
            paylasimli[a1] = paylasimli[a2] = "%s:%d — '%s' ile '%s' aynı satırı paylaşıyor" % (
                ad_d, i2 + 1, a1, a2)
_cs = sum(1 for l in konum.values() for x in l if x[2] > x[1])
print("TABAN: %d benzersiz ad, %d dosya (%d kayıt ÇOK SATIRLI)"
      % (len(konum), len(icerik), _cs))
if eksik_dosya:
    print("  🔴 GIRDI_DOSYALARI'nda olup DİSKTE OLMAYAN %d dosya: %s"
          % (len(eksik_dosya), ", ".join(eksik_dosya)))

# ── TANIMA SINAVI (D225: süzgeç tanımadığını sessizce elemez, SAYIP BASAR) ─────
#   Tarayıcının gördüğü kayıt kümesi, motorun okuyucusunun (`girdi.oku_dosya`)
#   gördüğüyle dosya dosya karşılaştırılır. Okuyucunun gördüğü ama tarayıcının
#   GÖREMEDİĞİ her kayıt ADIYLA basılır; yamada geçiyorsa "veride-yok" DEĞİL
#   "TANINMADI" sayılır ve araç ÇIKIŞ 4 verir (K1 tam böyle saklanıyordu).
girdi_kayit = {}         # ad -> (dosya, kayıt)  — motorun okuduğu hâl
girdi_degisken = {}
taninmayan_dosya = collections.defaultdict(list)
for ad_d, satirlar in icerik.items():
    _m = re.search(r"window\.(YERLESIMLER\w*)\s*=", "\n".join(satirlar))
    girdi_degisken[ad_d] = _m.group(1) if _m else None
    try:
        _kl = girdi.oku_dosya(ad_d)
    except (ValueError, SystemExit) as _e:
        print("  🔴 %s motor okuyucusuyla AYRIŞTIRILAMADI (%s) — kayıtları SINANAMADI"
              % (ad_d, _e))
        continue
    _gor = {a for a, l in konum.items() for x in l if x[0] == ad_d}
    for _y in _kl:
        girdi_kayit[_y["ad"]] = (ad_d, _y)
        if _y["ad"] not in _gor:
            taninmayan_dosya[ad_d].append(_y["ad"])
_tn = sum(len(v) for v in taninmayan_dosya.values())
if _tn:
    print("  🔴 TANINMAYAN KAYIT: %d — motor okuyor, bu araç GÖREMİYOR (yama inemez):" % _tn)
    for _d, _l in sorted(taninmayan_dosya.items()):
        print("       %-36s %4d  %s%s" % (_d, len(_l), ", ".join(_l[:6]),
                                         " …" if len(_l) > 6 else ""))
else:
    print("  ✓ tanıma: motorun okuduğu %d kaydın HEPSİ bu araçça görülüyor" % len(girdi_kayit))
if paylasimli:
    print("  🟡 SATIR PAYLAŞAN KAYIT: %d — bunlara satır aralığıyla YAZILMAZ" % len(paylasimli))

# ────────────────────────────────────────── ④ ÇAKIŞMA — aynı ad, iki yama
gruplu = collections.defaultdict(list)
for x in yama:
    gruplu[x["r"]["ad"]].append(x)

# 🔴 İMZA ALAN ALAN KURULUR — KAYDIN TAMAMINDAN DEĞİL.
#   Bulan: PAKET-0039 (OPUS HAZIR KITA 109), 2 Eylül 2026. Ve kusur
#   VERİDE DEĞİL ALETTEYDİ:
#     `yer_yama_romanya.js`ın 20 kaydının 18'i indi; Bükreş ve Yaş İNMEDİ.
#     Sebep: `gece_v3` yalnız `isg:`e, `romanya` yalnız `s:`e dokunuyor.
#     ÇATIŞMIYORLAR — ama imza kaydın TAMAMINDAN kurulduğu için iki
#     sözlük farklı çıkıyor ve İKİSİ DE bloke ediliyor.
#   ⇒ Çakışmanın gerçek birimi KAYIT değil ALAN: iki yama ancak AYNI
#     alanı FARKLI değerle yazıyorsa çatışır.
#   Ölçüm: 8 çakışmanın 2'si SAHTE, 6'sı gerçek.
#
# ⚠️ VE AYNI DÜZELTME BENİM KENDİ KUSURUMU DA KAPATIYOR:
#   `m:`/`kaynak:` desteğini eklerken bu imzaya EKLEMEYİ UNUTTUM. İki
#   yama aynı `m:`i FARKLI değerlerle yazsa çakışma HİÇ GÖRÜNMEZDİ —
#   sessizce biri ötekini ezerdi. Yeni alan eklerken çakışma imzasını
#   güncellememek, `§11`in *"denetim var ≠ o soruyu soruyor"* ailesinin
#   en sessiz üyesi.
#   ⚠️ Burada `SKALER_ALANLAR` sabitine BAKILMAZ: o aşağıda tanımlanıyor
#     ve buraya taşımak dosyanın okunma sırasını bozar. İki yerde duran
#     bir liste AYRIŞIR (`§11`: "bir bilgi iki yerde duruyorsa biri
#     güncellenince öteki bayatlar") — o yüzden aşağıdaki tanım bu
#     satırla SINANIYOR, ve ayrışırsa betik DURUYOR (en altta assert).
#
# 🔴 2 Eylül 2026 — `bos` · `neden` · `not` EKLENDİ (1.MURAT sevki,
#   Timbuktu 1430-1468 vakası — `denetim/BULGU-S121-YAMA-ALAN.md`).
#   Bu üçü de artık SKALER_ALANLAR'da (aşağı bak); ikisi ayrışmasın diye
#   BURAYA da eklendi. ⇒ İki yama aynı `bos:`i FARKLI değerle yazarsa
#   TAM ÇAKIŞMA sayılır (bloke), `kaynak`ın "yalnız o alan ayrışıyorsa
#   veriyi geçir" istisnası bunlara UYGULANMADI — bir BEYAN alanında
#   hangisinin doğru olduğu, dosya adının alfabetik sırasıyla da
#   sessizce geçmekle de belirlenemez (1.MURAT'ın sevki, ölçülmedi
#   çünkü bugünkü yamalarda bu üç alan hiç çakışmıyor — aşağıya bak).
CATISABILIR = ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not",
                "kur")
# Yazıcının GERÇEKTEN yazabildiği alanlar — dizi (`ALAN_RX`) ve skaler
# (`SKALER_ALANLAR`, satır ~504) kümelerinin birleşimi ve `CATISABILIR`
# ile birebir aynı. Ayrı bir ad taşıması kasıtlı: burada sorulan soru
# "çatışır mı" değil "YAZILABİLİR Mİ".
YAZILABILIR = frozenset(CATISABILIR)

cakisan = {}
cakisan_alan = {}
sahte_cakisma = 0
kaynak_ayrisan = []   # yalnız `kaynak` ayrışıyor VE hedefin kaynağı BOŞ:
                      # veri iner, `kaynak` YAZILMAZ, uyarı basılır

# ══ DÖNEM İÇİ BEYAN — 7 Eylül 2026, 1.MURAT ═════════════════════════════
# 🔴 ÖLÇÜLDÜ (`denetim/ARAC-CAKISMA-ICKAYNAK-0907.py`): 60 veri
#   çatışmasının **37'sinde** dönemlerin `f`/`t`/`d` ÇEKİRDEĞİ BİREBİR
#   AYNI; ayrışan tek şey dönem nesnesinin İÇİNDEKİ `kaynak:`.
#       ada_kaynak  isg:[{f,t,d, kaynak:"oniki-ada"}]
#       onikiada    isg:[{f,t,d}]
#   Aletin `kaynak` muafiyeti KAYIT seviyesinde (`== ["kaynak"]`); bu
#   `kaynak` DÖNEM seviyesinde ⇒ muafiyet ATEŞLENMİYOR ve bir BELGELEME
#   yaması, belgelediği VERİ yamasıyla çatışıyor gibi görünüyor.
#
# 🟢 VE BU, KAYIT SEVİYESİNDEKİ VAKADAN FARKLI — çare de farklı olmalı:
#   orada iki taraf FARKLI BİR ŞEY SÖYLÜYORDU (ikisini de yazamayız,
#   birini seçmek alfabetik kaza olurdu ⇒ hiçbiri yazılmaz).
#   Burada bir taraf SUSUYOR. **Sessizlik rakip bir iddia değildir.**
#   ⇒ Tek konuşan varsa onu YAZ; iki konuşan AYRI şey diyorsa BLOKE ET.
# 🔴 AD "BEYAN" AMA ÖLÇÜT "TEK KONUŞAN BİRLEŞİR" — 7 Eylül 2026 genişletildi.
#   `kid` ve `statu` birer BEYAN değil, birer KİMLİK/STATÜ alanı. Yine de
#   AYNI kuralın altına giriyorlar, çünkü kural değerin CİNSİNE değil
#   ÇATIŞMANIN BİÇİMİNE bakıyor:
#       bir taraf yazmış, öteki SUSMUŞ  → sessizlik rakip iddia DEĞİL, birleş
#       İKİSİ DE yazmış ve FARKLI       → gerçek çatışma, BLOKE
#   `donem_birlestir` ikinci hâli zaten yakalıyor (`sesler` kümesi >1 ise
#   `(None, True)` döner) ⇒ genişletme bir gevşetme DEĞİL.
#
#   ÖLÇÜLDÜ: `kid20` yaması (20 mekanik `kid` + 11 eksik `statu`) inince
#   çakışma 26 → 42 fırladı. Sebep veri anlaşmazlığı değildi: `vassal_kid_0906`
#   aynı dönemler için SUSUYOR, benimki konuşuyor, ve ikisi "farklı çekirdek"
#   sayılıyordu. Genişletmeden sonra 42 → ölçülecek.
DONEM_BEYAN = ("kaynak", "neden", "not", "kesinlik", "kid", "statu")


def _donem_cekirdek(p):
    return json.dumps({k: v for k, v in p.items() if k not in DONEM_BEYAN},
                      sort_keys=True, ensure_ascii=False)


def donem_birlestir(diziler):
    """Çekirdeği aynı dönemlerin beyan alt-alanlarını birleştirir.

    Döner: (birleşmiş_dizi, çatışma_var_mı). Çekirdek ayrışıyorsa ya da
    iki yama AYNI alt-alana FARKLI değer yazıyorsa (None, True).
    """
    n = len(diziler[0])
    if any(len(d) != n for d in diziler):
        return None, True
    for i in range(n):
        if len({_donem_cekirdek(d[i]) for d in diziler}) > 1:
            return None, True
    sonuc = []
    for i in range(n):
        p = dict(diziler[0][i])
        for k in DONEM_BEYAN:
            sesler = {json.dumps(d[i][k], sort_keys=True, ensure_ascii=False)
                      for d in diziler if k in d[i]}
            if len(sesler) > 1:
                return None, True        # İKİ AYRI BEYAN ⇒ gerçek çatışma
            for d in diziler:
                if k in d[i]:
                    p[k] = d[i][k]
                    break
        sonuc.append(p)
    return sonuc, False


donem_birlesen = collections.Counter()
alan_birlesen = collections.Counter()

for ad, liste in gruplu.items():
    if len(liste) < 2:
        continue
    catisan_alanlar = []
    birlesmis = {}
    for alan in CATISABILIR:
        yazanlar = [x for x in liste if alan in x["r"]]
        if len(yazanlar) < 2:
            continue                     # tek yazan ⇒ çatışma YOK
        degerler = {json.dumps(x["r"][alan], sort_keys=True,
                               ensure_ascii=False) for x in yazanlar}
        if len(degerler) <= 1:
            continue
        if alan in ("d", "s", "v", "isg"):
            birlesik, catisti = donem_birlestir([x["r"][alan] for x in yazanlar])
            if not catisti:
                birlesmis[alan] = birlesik
                donem_birlesen[alan] += 1
                continue
        catisan_alanlar.append(alan)     # AYNI alan, FARKLI değer ⇒ ÇATIŞMA

    # ══ AYRIK ALAN BİRLEŞTİRME — ve bu, ölçülmüş bir SESSİZ KAYIP ══════
    # 🔴 `_sahiplik_uygula` bir ad için YALNIZ `liste[0]`ı uyguluyordu.
    #   Ölçüldü (`denetim/ARAC-AYRIK-KAYIP2-0907.js`): `liste[1:]`in
    #   taşıdığı **151 alan** canlı veriden FARKLI, yani HİÇ İNMİYOR —
    #   ve **133'ü tek bir dosyadan**: `yer_yama_vassal_kid_0906.js`
    #   `v:` alanı. Sebep tarihsel değil ALFABETİK: dosya adı `v` ile
    #   başladığı için o yama neredeyse her zaman `liste[1:]`e düşüyor.
    #   ⚠️ Ve alet bunu İYİ HABER diye basıyordu:
    #       "175 ad … AYRIK alanlara dokunuyor — çakışma DEĞİL"
    #   O satır, tam da düşürdüğü kayıtlar hakkında güven veriyordu.
    #   📌 Bu aletin kendi başlığı alfabetik seçimi mahkûm ediyor; burada
    #     alfabetik seçim bir SEÇİM bile değildi — bir DÜŞÜRMEYDİ.
    # 🔴 YALNIZ YAZILABİLİR ALAN BİRLEŞTİRİLİR. İlk sürüm `x["r"]`nin
    #   BÜTÜN anahtarlarını birleştirdi ve `hukum` · `parti` · `eski` ·
    #   `koordinat_kontrol` gibi RAPOR alanlarını kayda kattı. Yazıcı
    #   onları zaten yazmıyor (yalnız d/s/v/isg + SKALER_ALANLAR), yani
    #   zararsızdılar — ama kayda giren her alan bir sonraki ölçümde
    #   VERİ sanılır. §11: "bir alet, aradığı şeyin NEREDE OLMAYACAĞINI
    #   da bilmeli" — burada tersi: YAZAMAYACAĞINI da bilmeli.
    for x in liste[1:]:
        for alan, deger in x["r"].items():
            if alan not in YAZILABILIR or alan in catisan_alanlar:
                continue
            if alan in birlesmis or alan in liste[0]["r"]:
                continue
            birlesmis[alan] = deger
            alan_birlesen[alan] += 1

    if birlesmis:
        liste[0] = dict(liste[0])
        liste[0]["r"] = dict(liste[0]["r"], **birlesmis)
    # 🔴 YALNIZ `kaynak` AYRIŞIYORSA BU BİR VERİ ÇATIŞMASI DEĞİLDİR.
    #   *(2 Eylül 2026 — OPUS HAZIR KITA 109 ölçtü, koordinatör daralttı)*
    #
    #   Ölçüm: 27 çatışmanın **9'unda** ayrışan tek alan `kaynak`tı. O dokuz
    #   kaydın GEOMETRİSİ tartışmasız — bloke olan şey tartışmasız veriydi.
    #
    #   🔴 VE ÖNCE İKİ YANLIŞ ÖNERİ ÖLÇÜLDÜ, İKİSİ DE ÇÜRÜDÜ:
    #   ① "kaynak zaten ezilmiyor (SKALER kuralı), o hâlde çatışma ÂTIL"
    #      → ÇÜRÜDÜ: dokuz hedefin DOKUZUNDA `kaynak:` BOŞ; hangi yamanın
    #        seçildiği gerçekten belgeyi değiştiriyor.
    #   ② "`kaynak`ı CATISABILIR'den çıkar"
    #      → ÇÜRÜDÜ: çıkarılsaydı alet `liste[0]`ı, yani DOSYA ADININ
    #        ALFABETİK SIRASINI seçerdi — bu aletin kendi başlığının
    #        mahkûm ettiği davranış.
    #   ⇒ Bugünkü davranış YANLIŞ DEĞİL, **FAZLA GENİŞ.** Çare çıkarmak
    #     değil DALLANDIRMAK.
    #
    #   İKİ dal (işçi oturum ÜÇ önerdi, koordinatör İKİYE indirdi):
    #     veri alanı (d·s·v·isg·m) ayrışıyor  → BLOKE  (değişmedi)
    #     yalnız `kaynak` ayrışıyor           → VERİYİ UYGULA, `kaynak`
    #                                           YAZMA, ve UYARI BAS
    #
    #   🟢 NİÇİN İKİ, ÜÇ DEĞİL: öneri hedefin `kaynak:`ı DOLU olan hâli
    #   ayrı (sessiz) bir dala koyuyordu. Ama iki hâlin SONUCU AYNI —
    #   `SKALER_ALANLAR` kuralı zaten dolu bir `kaynak`ı ezmiyor, yani
    #   dolu hâlde de yazmıyoruz. Ayrım yalnız UYARININ basılıp
    #   basılmamasını değiştiriyordu; fazla uyarmak, az uyarmaktan
    #   güvenli. (Ve o dalın bugünkü vaka sayısı ölçüldü: 0.)
    #   ⚠️ Bir yan sebep daha: hedefin `kaynak:`ını okumak `konum`
    #   sözlüğünden geçmiyor — o SATIR ARALIĞI tutuyor, ayrıştırılmış
    #   kayıt değil. Okumak için metni yeniden ayrıştırmak gerekirdi ve
    #   bu projede "kendi ayrıştırıcını yazma" dersi pahalı öğrenildi.
    #
    #   Tartışmasız geometri iner, belge sorusu AÇIK ve GÖRÜNÜR kalır,
    #   alfabetik kaza olmaz.
    #
    # ⚠️ `kaynak` `CATISABILIR`den ÇIKARILMADI — `assert` onu bekliyor
    #    (satır ~298) ve iki listenin ayrışmasını o assert koruyor.
    #
    # 🔴 2 Eylül 2026 — BU İSTİSNA `bos`/`neden`/`not`E BİLEREK TAŞINMADI.
    #   1.MURAT'ın sorusu: "iki yamada `bos:` farklıysa çatışma sayılmalı
    #   mı?" Cevap EVET — `kaynak`la aynı gerekçe DEĞİL: `kaynak` ayrışması
    #   VERİYİ değiştirmiyordu (geometri tartışmasızdı, yalnız BELGE
    #   sorusu açıktı). `bos`/`neden` bizzat BEYANIN KENDİSİ — ikisi
    #   çelişirse "hangi yerleşim neden sahipsiz" sorusunun tartışmasız
    #   bir cevabı YOK, sessizce birini seçmek ALFABETİK KAZAYA döner.
    #   ⇒ Yalnız `== ["kaynak"]` ise bu dala düşer; `bos`/`neden`/`not`
    #   ayrışması `elif catisan_alanlar:` dalına gider ve TAM ÇAKIŞMA
    #   sayılır (bloke). ÖLÇÜLDÜ: bugünkü yamalarda bu üç alanın hiçbiri
    #   hiçbir addA ayrışmıyor (`denetim/BULGU-S121-YAMA-ALAN.md`) — yani
    #   bu dal bugün ATEŞLENMİYOR, karar SAHTE GİRDİYLE sınandı.
    if catisan_alanlar == ["kaynak"]:
        kaynak_ayrisan.append(ad)        # veri iner, `kaynak` YAZILMAZ
    elif catisan_alanlar:
        cakisan[ad] = liste
        cakisan_alan[ad] = catisan_alanlar
    else:
        # Aynı adı birden çok yama taşıyor ama AYRIK alanlara dokunuyorlar.
        # Eski alet bunu çakışma sayıyordu; SAYMIYORUZ — ama SESSİZ de
        # geçmiyoruz: kaç tanesinin böyle olduğu BASILIYOR.
        sahte_cakisma += 1
if sahte_cakisma:
    print("  i %d ad birden çok yamada geçiyor ama AYRIK alanlara dokunuyor"
          " — çakışma DEĞİL (eski alet bunları bloke ediyordu)"
          % sahte_cakisma)
if donem_birlesen:
    print("  🟢 DÖNEM İÇİ BEYAN birleştirildi: %s — çekirdek (f/t/d) aynı,"
          " yalnız `kaynak`/`neden` alt-alanı bir tarafta VAR bir tarafta YOK"
          % " · ".join("%s %d" % (a, n) for a, n in donem_birlesen.most_common()))
if alan_birlesen:
    print("  🟢 AYRIK ALAN birleştirildi: %s — eskiden `liste[0]` dışındaki"
          " yamaların bu alanları SESSİZCE DÜŞÜYORDU"
          % " · ".join("%s %d" % (a, n) for a, n in alan_birlesen.most_common()))

if kaynak_ayrisan:
    print("  🟡 %d adda YALNIZ `kaynak` ayrışıyor — veri İNECEK, kaynak "
          "YAZILMAYACAK (hangisi doğru: KARARA BAĞLANMALI)" % len(kaynak_ayrisan))
    for _a in sorted(kaynak_ayrisan):
        print("       %-28s %s" % (_a, " vs ".join(sorted(
            {y["__dosya"] for y in gruplu[_a]}))))

# ───────────────────────────────────────────────────── ⑤ alanı değiştir
# K1: tırnaklı anahtar da (`"s":[`) — grup(1) anahtar+`:`+boşluk, DEĞER `[`ten başlar.
ALAN_RX = {a: re.compile(r'(%s\s*)\[' % _anahtar_rx(a)) for a in ("d", "s", "v", "isg")}

# ══ SKALER ALANLAR — 1 Eylül 2026, 1.MURAT ══════════════════════════════
# 🔴 NİÇİN EKLENDİ — ölçülmüş bir TIKANMA:
#   PAKET-0023 sekiz maddeyi ölçtü, birini çözdü, ve ALTISI *"kimin
#   dosyası, kim yazsın"* sorusunda durdu. Üçü tam olarak bu iki alandı:
#     Kelkit·Tosya·Karapınar·Ulukışla·Ilgın   `m:` alanı YOK (beşinde de)
#     Niş·Vidin·Kragujevac·Çaçak              `kaynak:` alanı YOK
#   Bu betik `d·s·v·isg` DİZİLERİNİ indiriyordu; `m:` ve `kaynak:`
#   SKALER, ve dizi mantığı onlarda ÇALIŞMAZ (`dizi_sonu` `[` arar).
#   ⇒ Yama YAZILABİLİYOR ama İNECEK YOL YOKTU.
#
# 📌 Ve bu, bu betiğin KENDİ doğuş sebebinin tekrarı: sekiz oturum
#   sahiplik yaması yazmış, hiçbiri inmemişti, betik onun için yazıldı.
#   `CLAUDE.md §7`: *"denetimler 'yama UYGULANDI mı' diye sorar, 'yama
#   OKUNDU mu' diye SORMAZ."* Aynı boşluk, iki alan ötede.
#
# 🔴🔴 2 Eylül 2026 — `bos` · `neden` · `not` EKLENDİ, Timbuktu vakası.
#   `Değişmez 1b`nin TEK beyansız boşluğu Timbuktu (1430-1468, 13.879 gün)
#   idi — ama beyan ZATEN YAZILMIŞTI (`data/yer_yama_ok107.js`, kaynaklı):
#     bos:"veri-yok", neden:"kunye-yok — ...", not:"H-0013 · ..."
#   Yamayı yazan oturum bunu ÖNCEDEN uyarmıştı ("bu alanlar İNMEZ; dosya
#   sahibinin elle koyması gerekiyor") — uyarı okunmadı, öngördüğü kusur
#   gerçekleşti: `d·s·v·isg·m·kaynak` indi, `bos·neden·not` SESSİZCE düştü.
#   ⇒ Bu üç alan SKALER (dizi değil, tek dize) ve dizi mantığı (`ALAN_RX`)
#   onlarda ÇALIŞMAZ — `m`/`kaynak`'ın doğuş sebebinin BİREBİR tekrarı.
#
# ⚠️ ARALARINDAKİ FARK KASITLI:
#   m:      ÜZERİNE YAZILIR    — bir kaydın tek bir bağlı merkezi olur;
#                                yamanın amacı zaten onu düzeltmek
#   kaynak: ÜZERİNE YAZILMAZ   — dolu bir `kaynak:`ı ezmek, DOĞRULANMIŞ
#                                bir dayanağı silmektir. Yalnız BOŞSA yazılır;
#                                doluysa `kaynak-dolu` diye sayılır ve
#                                ATLANIR. Değiştirmek isteyen ELLE yapar.
#   bos/neden/not: ÜZERİNE YAZILMAZ — `kaynak`la AYNI GEREKÇE: ikisi de
#                                bir ARAŞTIRMACI BEYANI taşır (261 kayıtta
#                                `data/yerlesimler*.js` içine ELLE yazılmış
#                                hâlde zaten VAR — ölçüldü). Sessizce
#                                ezmek, "kimse bu yeri araştırmadı" ile
#                                "biri araştırdı ve şu sonuca vardı"
#                                arasındaki farkı SİLER. `kaynak`ın aynı
#                                korumasını `SKALER_KORUNAN`da paylaşıyor.
# 🔴 5 Eylul 2026 — `kur` EKLENDI, ve kusur `bos:`/`neden:`in birebir
#   tekrarıydı, iki alan otede. Olculdu (KURE GORUNUM · M-3012):
#   `kur:` tasıyan 10 kayıt var ve alan bu dosyada HIC gecmiyordu ⇒
#   IKI BAGIMSIZ yoldan kayboluyordu:
#     yalnız-`kur` yama   -> node suzgecinde elenir, Python'a HIC ULASMAZ
#     `kur`+`kaynak` yama -> suzgeci GECER, ama burada olmadıgı icin alan
#                            HIC OKUNMAZ ve `atlanan`a KAYIT DUSMEZ.
#   Ikincisi SESSIZDIR: Ndjamena yaması `kaynak:` tasıdıgı icin suzgeci
#   geciyor, sonra `kur:` iz bırakmadan yok oluyordu. Bir kusuru iki ayrı
#   yerden duzeltmek gerekiyorsa, birini duzeltmek otekini GIZLER.
SKALER_ALANLAR = ("m", "kaynak", "bos", "neden", "not", "kur")
# ÜZERİNE YAZILMAYAN skalerler — yalnız BOŞSA doldurulur, DOLUYSA atlanır.
# `m` bilerek DIŞARIDA: onun sözleşmesi tersi (bkz. yukarı).
# `kur` KORUNAN: bir kurulus tarihi arastırma urunudur; sessizce ezmek
# `kaynak`ı ezmekle aynı sınıf. Iki yama ayrı gun soyluyorsa CATISABILIR
# onu CAKISMA diye bildirir — dogru davranıs budur, sessiz secim degil.
SKALER_KORUNAN = ("kaynak", "bos", "neden", "not", "kur")
# 🔴 İKİ LİSTE AYRIŞMASIN — `CATISABILIR` yukarıda elle yazılı (o blok bu
#   satırdan ÖNCE koşuyor). Bir bilgi iki yerde durunca biri güncellenip
#   öteki bayatlar; bu `assert` o bayatlamayı SESSİZ olmaktan çıkarır.
#   Yeni bir skaler alan eklersen ikisini de güncelle — yoksa burası durur.
assert set(CATISABILIR) == {"d", "s", "v", "isg"} | set(SKALER_ALANLAR), (
    "CATISABILIR ile SKALER_ALANLAR AYRIŞTI: %r vs %r — yeni alan "
    "eklenirken çakışma imzası güncellenmemiş." % (CATISABILIR, SKALER_ALANLAR))
SKALER_RX = {a: re.compile(r'(%s\s*)"((?:[^"\\]|\\.)*)"' % _anahtar_rx(a))
             for a in SKALER_ALANLAR}
# `m:null` de geçerli bir yazım — ayrıca aranır, yoksa "alan yok" sanılır
SKALER_NULL_RX = {a: re.compile(r'%s\s*null\b' % _anahtar_rx(a)) for a in SKALER_ALANLAR}

# 🔴 SAHIPLIK-UYGULA-KUSUR-1008 · K3 — `not:` EZİLMEZ ama EKLENİR.
#   Ölçüldü (ZAMAN-Z5-1008): 707 kayıtta `not:` zaten dolu ve korunan skaler kuralı
#   yüzünden yamanın beyanı HİÇ inmiyordu ("ZATEN DOLU, ezilmedi"). `not` bir
#   ARAŞTIRMA SONUCU değil, birikimli bir NOT DEFTERİDİR: eskisini silmek de yenisini
#   düşürmek de bilgi kaybı. ⇒ Eski metin KORUNUR, yeni beyan `NOT_AYRAC` ile sonuna
#   eklenir. Yeni beyan eskinin İÇİNDE zaten geçiyorsa eklenmez (tekrar koşu ikiler
#   yazmasın). `kaynak`/`bos`/`neden`/`kur` DEĞİŞMEDİ — onlar hâlâ yalnız BOŞSA dolar.
NOT_AYRAC = " · "
SKALER_EKLENEN = ("not",)


def js_metin(s):
    """Bir Python dizesini JS çift tırnaklı dizesi olarak yazar."""
    return '"%s"' % s.replace("\\", "\\\\").replace('"', '\\"')


def deger_yaz(deger, jsn):
    """Kaydın kendi üslûbunda değer: JSON kayıtta JSON, öteki kayıtta eski `js_yaz`."""
    if jsn:
        return json.dumps(deger, ensure_ascii=False, separators=(",", ":"))
    return js_yaz(deger)


def metin_yaz(s, jsn):
    return json.dumps(s, ensure_ascii=False) if jsn else js_metin(s)


def anahtar_yaz(alan, jsn):
    return ('"%s":' % alan) if jsn else ("%s:" % alan)


def mukerrer_alanlar(kayit, alanlar):
    """Kaydın ÜST SEVİYESİNDE iki kez yazılmış alanlar.

    🔴 NİÇİN ENGEL: JS aynı anahtarın SONUNCUSUNU okur; bu betik ise
    `ara_disi` ile İLKİNE yazar ⇒ yama SESSİZCE ÖLÜR. Ölçülmüş vaka
    (`Mersin`, `yerlesimler_ek27.js`) ve kaydın KENDİ notu bunu yazıyor:
        «MÜKERRER `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve
         düzeltme motora hiç girmiyordu»
    ⇒ Sessiz başarısızlık, GÖRÜNÜR başarısızlığa çevrilir.
    📌 `§11`: *"sessiz atlama, yanlış sonuçtan pahalıdır — yanlış sonuç
      bir sayı gösterir, sessiz atlama HİÇBİR ŞEY göstermez."*
    """
    maske = _dizge_maskesi(kayit)
    bulunan = []
    for alan in alanlar:
        rx = re.compile(_anahtar_rx(alan))        # K1: `"s":` de sayılır
        say = 0
        for m in rx.finditer(kayit):
            if not _disarida(maske, kayit, m.start()):
                continue
            d = 0
            for p in range(m.start()):
                if maske[p]:
                    continue
                ch = kayit[p]
                if ch in "{[":
                    d += 1
                elif ch in "}]":
                    d -= 1
            if d == 1:
                say += 1
        if say > 1:
            bulunan.append("%s x%d" % (alan, say))
    return bulunan


def olu_kopyalari_sil(kayit, alanlar):
    """K2 (kayıtta ZATEN mükerrer anahtar): ÜST SEVİYEDE iki kez yazılmış alanın SONUNCUSU
    (JS'in okuduğu, CANLI olan) bırakılır, öncekiler (ÖLÜ kopyalar) silinir.

    🔴 SAHIPLIK-UYGULA-KUSUR-1008 — ölçüldü: Taraz (Evliya-Ata) · Sayram (İsficâb)
      (`yerlesimler_ok107.js`) `s:`yi İKİ KEZ taşıyor; ikincisi `kaynak:`tan sonra
      tırnaklı (`"s":[…]`) ve ESKİ aracın K2 kusurunun bıraktığı izdir. Eski koruma
      bunları atlıyordu (doğru — ilkine yazmak yamayı öldürürdü) ama yamayı da
      İNDİRMİYORDU. Ölü kopyayı silmek ANLAMI DEĞİŞTİRMEZ (JS onu zaten okumuyor);
      geri okuma bunu ayrıca sınar (dokunulmayan alan değişirse DOĞRULANAMADI).
    Döner: (yeni_kayit, ["s x2", …]) — silinen yoksa liste boş."""
    silinen = []
    for alan in alanlar:
        maske = _dizge_maskesi(kayit)
        konumlar = []
        for m in re.finditer(_anahtar_rx(alan), kayit):
            if not _disarida(maske, kayit, m.start()):
                continue
            d = 0
            for p in range(m.start()):
                if maske[p]:
                    continue
                if kayit[p] in "{[":
                    d += 1
                elif kayit[p] in "}]":
                    d -= 1
            if d == 1:
                konumlar.append(m)
        if len(konumlar) < 2:
            continue
        kesim = []
        for m in konumlar[:-1]:                     # SONUNCU kalır
            v = m.end()
            while v < len(kayit) and kayit[v] in " \t\r\n":
                v += 1
            son = -1
            if v < len(kayit) and kayit[v] in "[{" and not maske[v]:
                der = 0
                for k in range(v, len(kayit)):
                    if maske[k]:
                        continue
                    if kayit[k] in "[{":
                        der += 1
                    elif kayit[k] in "]}":
                        der -= 1
                        if der == 0:
                            son = k
                            break
            elif v < len(kayit) and kayit[v] == '"':
                k = v + 1
                while k < len(kayit) and maske[k]:
                    k += 1
                son = k - 1                         # kapanış tırnağı
            else:
                mm = re.match(r"[^,}\n]*", kayit[v:])
                son = v + len(mm.group(0)) - 1
            if son < v:
                return kayit, []                    # çözülemedi: koruma (aşağıda) yazmaz
            bas, bit = m.start(), son + 1
            k = bit
            while k < len(kayit) and kayit[k] in " \t":
                k += 1
            if k < len(kayit) and kayit[k] == ",":
                bit = k + 1                         # ardındaki virgülle birlikte
            else:
                k = bas - 1
                while k >= 0 and (kayit[k] in " \t\r\n" or maske[k]):
                    k -= 1
                if k >= 0 and kayit[k] == ",":
                    bas = k                         # sondaysa öndeki virgülle
            kesim.append((bas, bit))
        for bas, bit in sorted(kesim, reverse=True):
            kayit = kayit[:bas] + kayit[bit:]
        silinen.append("%s x%d" % (alan, len(konumlar)))
    return kayit, silinen


def ara_disi(rx, metin):
    """`rx`in DİZGE DIŞINDAKİ ilk eşleşmesi; yoksa None."""
    maske = _dizge_maskesi(metin)
    for m in rx.finditer(metin):
        if _disarida(maske, metin, m.start()):
            return m
    return None


def dizi_sonu(satir, bas):
    """`[` konumundan başlayıp eşleşen `]`in İNDEKSİNİ döndürür."""
    derinlik = 0
    tirnak = False
    kacis = False
    for i in range(bas, len(satir)):
        c = satir[i]
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if c == '"':
            tirnak = not tirnak
            continue
        if tirnak:
            continue
        if c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                return i
    return -1


# K1: JSON dönemi `{"f":"…","t":"…"}` de — yoksa kapsam-daralma koruması JSON kayıtta KÖR.
ARALIK_RX = re.compile(r'\{\s*"?f"?\s*:\s*"([^"]+)"\s*,\s*"?t"?\s*:\s*"([^"]+)"')


def _dilim(satir, alan):
    """Satırdaki `<alan>:[ ... ]` diziSİNİN metnini döndürür; yoksa ''."""
    m = ara_disi(ALAN_RX[alan], satir)     # düzyazıdaki `s:[` kapsam sayılmaz
    if not m:
        return ""
    son = dizi_sonu(satir, m.end() - 1)
    return satir[m.end() - 1:son + 1] if son > 0 else ""


def araliklar(metin):
    """`{f:"..",t:".."}` çiftlerini toplar."""
    return [(a, b) for a, b in ARALIK_RX.findall(metin or "")]


def birlestir(par):
    """[(f,t)] listesini örtüşmesiz, sıralı bir kapsama indirger."""
    if not par:
        return []
    par = sorted(par)
    cik = [list(par[0])]
    for f, t in par[1:]:
        if f <= cik[-1][1]:
            cik[-1][1] = max(cik[-1][1], t)
        else:
            cik.append([f, t])
    return [tuple(x) for x in cik]


def eksilen(eski, yeni):
    """ESKİ kapsamda olup YENİ kapsamda OLMAYAN aralıkları döndürür."""
    kayip = []
    for f, t in eski:
        imlec = f
        for yf, yt in yeni:
            if yt <= imlec or yf >= t:
                continue
            if yf > imlec:
                kayip.append((imlec, min(yf, t)))
            imlec = max(imlec, yt)
            if imlec >= t:
                break
        if imlec < t:
            kayip.append((imlec, t))
    return [(f, t) for f, t in kayip if f < t]


def js_yaz(deger):
    """Python nesnesini yerlesimler.js üslûbunda JS'e çevirir."""
    if isinstance(deger, list):
        return "[" + ",".join(js_yaz(x) for x in deger) + "]"
    if isinstance(deger, dict):
        return "{" + ",".join(
            '%s:%s' % (k, js_yaz(v)) for k, v in deger.items()) + "}"
    if isinstance(deger, str):
        return '"' + deger.replace("\\", "\\\\").replace('"', '\\"') + '"'
    if deger is None:
        return "null"
    if isinstance(deger, bool):
        return "true" if deger else "false"
    return str(deger)


# ──────────────────────────────────────────────────────────── ⑥ uygula
ist = collections.Counter()
atlanan = []
degisiklik = collections.defaultdict(int)
inen = []
duzenleme = []        # (dosya, i, j, yeni_satirlar) — TERSTEN uygulanır
kapi_aday = []        # geri alma kapısına gidecek her değişim (yazmadan ÖNCE sorulur)
beklenen = collections.defaultdict(dict)   # dosya -> ad -> {alan: GERİ OKUMADA beklenen}


def _tirnaksiz(s):
    """JSON kaydın anahtarlarını tırnaksız gösterir — YALNIZ geri alma kapısının görünümü."""
    return re.sub(r'"([A-Za-z_]\w*)"\s*:', r"\1:", s)

for ad, liste in sorted(gruplu.items()):
    x = liste[0]
    r = x["r"]

    if ad in cakisan:
        ist["cakisma"] += 1
        atlanan.append((ad, "ÇAKIŞMA: %s — içerik farklı, KARAR GEREK"
                        % " vs ".join(sorted({y["__dosya"] for y in liste}))))
        continue
    if r.get("d2_gerek"):
        ist["kendi-kilidi"] += 1
        atlanan.append((ad, "KENDİ KİLİDİ: %s" % str(r["d2_gerek"])[:70]))
        continue

    yerler = konum.get(ad, [])
    if not yerler and ad in girdi_kayit:
        # K1'in sınıfı: motor bu kaydı OKUYOR, araç GÖREMİYOR. "veride-yok" demek YALANDIR.
        ist["taninmadi"] += 1
        atlanan.append((ad, "🔴 TANINMADI — kayıt %s içinde VAR (motor okuyor) ama bu araç "
                            "göremiyor; yama İNMEDİ (çıkış 4)" % girdi_kayit[ad][0]))
        continue
    if not yerler:
        ist["veride-yok"] += 1
        atlanan.append((ad, "veride YOK — yeni nokta, yama ile yazılmaz"))
        continue
    if len(yerler) > 1:
        ist["belirsiz"] += 1
        atlanan.append((ad, "%d kayıtta birden geçiyor" % len(yerler)))
        continue
    if ad in paylasimli:
        ist["satir-paylasimli"] += 1
        atlanan.append((ad, "SATIR PAYLAŞIMLI — %s; satır aralığıyla yazmak öteki kaydı "
                            "da ezer" % paylasimli[ad]))
        continue

    # `d:` günleri Değişmez 2'nin menzilinde — maddesiz gün ENGEL
    kayip = []
    for d in (r.get("d") or []):
        for anahtar in ("f", "t"):
            g = d.get(anahtar)
            if g and not maddesi_var(g):
                kayip.append(g)
    if kayip:
        ist["gun-maddesiz"] += 1
        atlanan.append((ad, "MADDESİZ GÜN (Değişmez 2 açılır): %s"
                        % ", ".join(sorted(set(kayip))[:4])))
        continue

    # `s:` yabancı günleri — UYARI, engel değil (2s tavanı 121)
    zayif = []
    for d in (r.get("s") or []):
        for anahtar in ("f", "t"):
            g = d.get(anahtar)
            if g and not maddesi_var(g):
                zayif.append(g)

    dosya, i, j = yerler[0]
    # Kaydın TAMAMI — çok satırlıysa satırlar birleştirilip öyle yamanır,
    # sonra aynı aralığa geri yazılır (aşağıda, TERSTEN sırayla).
    satir = "\n".join(icerik[dosya][i:j + 1])

    # 🔴 MÜKERRER ÜST-SEVİYE ANAHTAR ⇒ YAZMA. JS sonuncuyu okur, bu betik
    #   ilkine yazar; sessizce ölür. Ölçüldü: 6 kayıt (7 Eylül 2026).
    #   🔴 1008: önce ÖLÜ kopyalar silinir (sonuncu = canlı kalır), sonra koruma
    #   yeniden sorar — silme başaramadıysa kayıt yine ATLANIR, sessiz geçmez.
    satir_orj = satir
    satir, _tekil = olu_kopyalari_sil(satir, [a for a in CATISABILIR if a in r])
    if _tekil:
        ist["mukerrer-tekillendi"] += 1
        print("  🟡 MÜKERRER ANAHTAR TEKİLLENDİ: %-28s %s — ölü kopya silindi, canlı "
              "(sonuncu) yamalandı" % (ad[:28], ", ".join(_tekil)))
    _muk = mukerrer_alanlar(satir, [a for a in CATISABILIR if a in r])
    if _muk:
        ist["mukerrer-anahtar"] += 1
        atlanan.append((ad, "MÜKERRER ÜST-SEVİYE ANAHTAR (%s) — JS SONUNCUYU "
                            "okur, bu betik İLKİNE yazar ⇒ yama SESSİZCE "
                            "ÖLÜRDÜ. Kayıt önce tekilleştirilmeli "
                            "(`denetim/ARAC-MUKERRER-TEKILLE-0907.js`)"
                        % ", ".join(_muk)))
        continue

    jsn = json_stili.get((dosya, i), False)      # K1: kaydın KENDİ üslûbunda yaz
    eski_kayit = girdi_kayit.get(ad, (None, {}))[1]
    bek = {}                                     # geri okumada BEKLENEN son değerler
    yeni_satir = satir
    dokunulan = []
    hata = None
    for alan in ("d", "s", "v", "isg"):
        if alan not in r:
            continue
        m = ara_disi(ALAN_RX[alan], yeni_satir)   # düzyazıdaki `v:[` DEĞİL
        yeni_js = deger_yaz(r[alan], jsn)
        if m:
            son = dizi_sonu(yeni_satir, m.end() - 1)
            if son < 0:
                hata = "%s:[ kapanmıyor" % alan
                break
            yeni_satir = yeni_satir[:m.end() - 1] + yeni_js + yeni_satir[son + 1:]
        else:
            # alan YOK — `ad:"..."`ın hemen ardına ekle
            ma = ara_disi(AD_RX, yeni_satir)
            if not ma:
                hata = "ad: çıpası yok"
                break
            yeni_satir = (yeni_satir[:ma.end()] + ",%s%s" % (anahtar_yaz(alan, jsn), yeni_js)
                          + yeni_satir[ma.end():])
        bek[alan] = r[alan]
        dokunulan.append(alan)

    # ── SKALER ALANLAR (`m:` · `kaynak:`) — dizi mantığından AYRI ──────
    for alan in SKALER_ALANLAR:
        if hata or alan not in r:
            continue
        # 🔴 YALNIZ `kaynak` AYRIŞAN AD: veri indi, ama HANGİ kaynağın
        #   doğru olduğu KARARA BAĞLANMADI. Alfabetik olarak ilk dosyanın
        #   kaynağını yazmak, kararı yargıyla değil dosya adıyla vermek
        #   olur — bu aletin başlığının adıyla mahkûm ettiği şey.
        #   ⇒ Kaynak YAZILMAZ, soru AÇIK ve GÖRÜNÜR kalır.
        if alan == "kaynak" and ad in kaynak_ayrisan:
            atlanan.append((ad, "kaynak: %d yama FARKLI kaynak yazıyor — "
                                "VERİ İNDİ, kaynak YAZILMADI; hangisinin "
                                "doğru olduğu KARARA BAĞLANMALI"
                            % len(gruplu[ad])))
            continue
        deger = r[alan]
        if deger is None or deger == "":
            atlanan.append((ad, "%s: yamada BOŞ — boş değer yazılmaz" % alan))
            continue
        m = ara_disi(SKALER_RX[alan], yeni_satir)
        mn = ara_disi(SKALER_NULL_RX[alan], yeni_satir)
        if m:
            # 🔴 KORUNAN ALANLAR (`kaynak`/`bos`/`neden`/`not`) DOLUYSA
            #   EZİLMEZ — doğrulanmış bir beyanı silmek, eksik beyandan
            #   kötüdür. Sessizce geçmez, SAYILIR. (`m` bilerek dışarıda —
            #   onun sözleşmesi tersi, bkz. `SKALER_KORUNAN` tanımı.)
            if alan in SKALER_EKLENEN and m.group(2).strip():
                # K3: EZME YOK, EKLE. Eski metin HAM hâliyle korunur (yeniden
                #   kodlanmaz), yeni beyan ayraçla sonuna eklenir.
                eski_deger = _coz(m.group(2))
                if deger in eski_deger:
                    ist["%s-zaten-icinde" % alan] += 1
                    continue
                ek = metin_yaz(NOT_AYRAC + deger, jsn)[1:-1]
                yeni_satir = (yeni_satir[:m.start()] + m.group(1) + '"' + m.group(2)
                              + ek + '"' + yeni_satir[m.end():])
                ist["%s-eklendi" % alan] += 1
                bek[alan] = eski_kayit.get(alan, eski_deger) + NOT_AYRAC + deger
                dokunulan.append(alan + "+")
                continue
            if alan in SKALER_KORUNAN and m.group(2).strip():
                ist["%s-dolu" % alan] += 1
                atlanan.append((ad, "%s: ZATEN DOLU, ezilmedi — "
                                    "değiştirmek isteyen elle yapar" % alan))
                continue
            yeni_satir = (yeni_satir[:m.start()] + m.group(1)
                          + metin_yaz(deger, jsn) + yeni_satir[m.end():])
        elif mn:
            # `m:null` → gerçek değer. Bu bir DOLDURMADIR, ezme değil.
            yeni_satir = (yeni_satir[:mn.start()] + "%s%s" % (anahtar_yaz(alan, jsn),
                                                              metin_yaz(deger, jsn))
                          + yeni_satir[mn.end():])
        else:
            ma = ara_disi(AD_RX, yeni_satir)
            if not ma:
                hata = "ad: çıpası yok (%s)" % alan
                break
            yeni_satir = (yeni_satir[:ma.end()] + ",%s%s" % (anahtar_yaz(alan, jsn),
                                                             metin_yaz(deger, jsn))
                          + yeni_satir[ma.end():])
        bek[alan] = deger
        dokunulan.append(alan)

    if hata:
        ist["cipa-yok"] += 1
        atlanan.append((ad, hata))
        continue
    if yeni_satir == satir_orj:
        ist["zaten-boyle"] += 1
        continue

    # ⑤ KAPSAM DARALMASI — ve bu koruma BİR VERİ KAYBINDAN DOĞDU.
    #
    # 🔴 ÖLÇÜLMÜŞ VAKA (29 Ağustos 2026): Çaçak yaması `s:`e 1689-1690
    #   Avusturya arasını EKLEMEK istiyordu; uygulayıcı diziyi
    #   DEĞİŞTİRDİ ve altı dönemin beşi SİLİNDİ:
    #       önce  sirbistan · sirp-despotlugu · avusturya(1717-1739) ·
    #             sirbistan-prensligi · sirbistan-kralligi · yugoslavya
    #       sonra avusturya(1689-1690)
    #   Sonuç: 1717-08-18 → 1830-11-08 arası 113 YIL SAHİPSİZ. Denetim
    #   yakaladı (`Değişmez 1` 215→217, `1b` 0→2) ve yazım geri alındı.
    #
    # ⇒ Kusur ne yamada ne uygulayıcıdaydı — SÖZLEŞMEDEYDİ: yama biçimi
    #   *"bu dizi YERİNE"* mi *"bu diziye EK"* mi olduğunu SÖYLEMİYOR.
    #   İki okuma da savunulabilir, ve yanlış okuma SESSİZCE veri siler.
    # 🟢 Çare bir varsayım seçmek değil, DARALMAYI YASAKLAMAK: yeni
    #   kapsam eskinin bir gününü bile kaybediyorsa kayıt UYGULANMAZ ve
    #   kaybolan aralık ADIYLA raporlanır. Genişleme serbest, daralma
    #   insan kararı ister.
    # 📌 `isg:` kapsama SAYILMAZ — o bir işgal ÖRTÜSÜdür, sahiplik değil.
    eski_kap = birlestir(sum(
        (araliklar(_dilim(satir, alan)) for alan in ("d", "s", "v")), []))
    yeni_kap = birlestir(sum(
        (araliklar(_dilim(yeni_satir, alan)) for alan in ("d", "s", "v")), []))
    kayip_ar = eksilen(eski_kap, yeni_kap)
    if kayip_ar:
        ist["kapsam-daraldi"] += 1
        atlanan.append((ad, "KAPSAM DARALDI — %s (yama EKLEME mi DEĞİŞTİRME mi belirsiz)"
                        % "; ".join("%s→%s" % x for x in kayip_ar[:3])))
        continue

    # 🔴 HEMEN YAZMA — aralık değişimi sonraki kayıtların satır
    #   numaralarını kaydırır. Bütün düzenlemeler toplanır ve dosya
    #   sonundan başına doğru (TERSTEN) uygulanır; böylece henüz
    #   uygulanmamış aralıkların indeksleri geçerli kalır.
    if SINAV_BOZ and ad == SINAV_BOZ:
        # Sınav kancası: yapay MÜKERRER anahtar — geri okuma bunu yakalamalı.
        _k = yeni_satir.rindex("}")
        yeni_satir = yeni_satir[:_k] + ",%s[]" % anahtar_yaz("s", jsn) + yeni_satir[_k:]
        print("  ⚠️ SINAV KANCASI ETKİN: '%s' kaydına yapay mükerrer `s` eklendi" % ad)
    duzenleme.append((dosya, i, j, yeni_satir.split("\n")))
    beklenen[dosya][ad] = bek
    # Geri alma kapısı yalnız TIRNAKSIZ anahtarı okur (`_bayat_yama_kapi.dilim`:
    #   `(?<![\w"])s:`) ⇒ JSON kayıtta dizi GÖRÜNMEZ ve kapı soruyu SORMADAN "taze"
    #   derdi. Kapıya JSON kaydın tırnaksız GÖRÜNÜMÜ verilir; yazılan metin değişmez.
    kapi_aday.append({"ad": ad, "dosya_yol": "data/" + dosya, "i": i + 1, "j": j + 1,
                      "eski": _tirnaksiz(satir_orj) if jsn else satir_orj,
                      "yeni": _tirnaksiz(yeni_satir) if jsn else yeni_satir})
    ist["uygulandi"] += 1
    degisiklik[dosya] += 1
    inen.append((ad, dosya, "+".join(dokunulan), zayif,
                 (j - i + 1) if j > i else 1))

# ───────────────────────────────────────────────────────────── ⑦ rapor
print()
print("=== SAHİPLİK YAMASI — %s ===" % ("YAZILDI" if YAZ else "KURU KOŞU"))
print("benzersiz ad: %d" % len(gruplu))
_SIRA = ("uygulandi", "zaten-boyle", "cakisma", "kendi-kilidi",
         "gun-maddesiz", "belirsiz", "veride-yok", "cipa-yok")
# D225: sayaçta olup sabit listede OLMAYAN kova da basılır (eskiden `mukerrer-anahtar` ·
#   `kapsam-daraldi` · `*-dolu` sayılıyor ama ÖZETTE GÖRÜNMÜYORDU).
for k in list(_SIRA) + sorted(k for k in ist if k not in _SIRA):
    if ist[k]:
        print("  %-20s %4d" % (k, ist[k]))

if inen:
    print()
    print("İNEN (%d):" % len(inen))
    for ad, dosya, alanlar, zayif, nsat in inen:
        ek = ("  ⚠️ 2s zayıf gün: " + ", ".join(sorted(set(zayif))[:3])) if zayif else ""
        cs = ("  [%d satır]" % nsat) if nsat > 1 else ""
        print("  %-28s %-30s %s%s%s" % (ad[:28], dosya, alanlar, cs, ek))

if degisiklik:
    print()
    print("DOSYA DOSYA (%d):" % len(degisiklik))
    for d, n in sorted(degisiklik.items(), key=lambda x: -x[1]):
        print("  %-38s %4d" % (d, n))

if atlanan:
    print()
    print("[!] ATLANAN (%d) — sebebiyle:" % len(atlanan))
    for ad, sebep in atlanan:
        print("  %-28s %s" % (ad[:28], sebep))

# ─────────────────────────────── ⑦b GERİ OKUMA — "yazdım" değil "OKUNUYOR" (ŞART)
# 🔴 SAHIPLIK-UYGULA-KUSUR-1008: K2'de araç yeni `s:`yi YAZDI, rapora "uygulandı" BASTI,
#   ama JS aynı anahtarın SONUNCUSUNU (eskisini) okuduğu için yama ÖLÜYDÜ. "Yazdığım
#   metin dosyada" bir kanıt değildir; kanıt, dosyanın MOTORUN OKUYUCUSUYLA
#   (`girdi._cevir`, JSON ⇒ sonuncu anahtar kazanır, JS ile aynı) yeniden
#   ayrıştırılmasında o kaydın son değerinin beklenen değer olmasıdır. Ayrıca:
#   dokunulmayan HER kayıt ve dokunulan kaydın dokunulmayan HER alanı birebir aynı
#   kalmalı (yan etki), kayıt sayısı ve sırası değişmemeli.
#   Doğrulanamayan kayıt "UYGULANDI" sayılmaz ⇒ HİÇBİR DOSYA YAZILMAZ, ÇIKIŞ 4.
def _degerlendir(dosya, eski_metin, yeni_metin, bek_dosya):
    """[(ad, sebep)] — boşsa dosyanın bütün beklentileri tuttu."""
    deg = girdi_degisken.get(dosya)
    try:
        eski = girdi._cevir(eski_metin, deg)
        yeni = girdi._cevir(yeni_metin, deg)
    except (ValueError, SystemExit) as e:
        return [(a, "dosya AYRIŞTIRILAMADI: %s" % e) for a in bek_dosya] or [
            ("<%s>" % dosya, "dosya AYRIŞTIRILAMADI: %s" % e)]
    hatalar = []
    if [y.get("ad") for y in eski] != [y.get("ad") for y in yeni]:
        hatalar.append(("<%s>" % dosya, "kayıt sayısı/sırası DEĞİŞTİ (%d → %d)"
                        % (len(eski), len(yeni))))
        return hatalar
    for e, y in zip(eski, yeni):
        a = e.get("ad")
        b = bek_dosya.get(a)
        if b is None:
            if e != y:
                hatalar.append((a, "YAN ETKİ — dokunulmaması gereken kayıt değişti"))
            continue
        for alan, v in b.items():
            if alan not in y:
                hatalar.append((a, "%s: geri okumada YOK" % alan))
            elif y[alan] != v:
                hatalar.append((a, "%s: geri okunan değer yazılanla AYNI DEĞİL "
                                   "(mükerrer anahtar / yanlış yer?)" % alan))
        for alan in set(e) | set(y):
            if alan in b:
                continue
            if e.get(alan, KeyError) != y.get(alan, KeyError):
                hatalar.append((a, "%s: dokunulmaması gereken alan DEĞİŞTİ" % alan))
    return hatalar


def geri_oku(yeni_icerik):
    hatalar = []
    for dosya in degisiklik:
        eski_metin = "\n".join(icerik[dosya])
        hatalar += [(dosya, a, s) for a, s in
                    _degerlendir(dosya, eski_metin, yeni_icerik[dosya], beklenen[dosya])]
    return hatalar


def _uygula_bellekte():
    out = {}
    kopya = {d: list(icerik[d]) for d in degisiklik}
    # 🔴 TERSTEN — dosya SONUNDAN başına doğru (bkz. aşağıdaki yazım bloğu).
    for dosya, i, j, yeni in sorted(duzenleme, key=lambda x: (x[0], -x[1])):
        kopya[dosya][i:j + 1] = yeni
    for d in kopya:
        out[d] = "\n".join(kopya[d])
    return out


def _dogrulama_bas(hatalar, baslik):
    kotu = sorted({(d, a) for d, a, _ in hatalar})
    print("🔴 %s: %d kayıt DOĞRULANAMADI — 'uygulandı' SAYILMAZ:" % (baslik, len(kotu)))
    for d, a, s in sorted(hatalar):
        print("  %-28s %-34s %s" % (a[:28], d, s))
    return kotu


print()
_bellek = _uygula_bellekte()
_hatalar = geri_oku(_bellek)
_toplam_bek = sum(len(v) for v in beklenen.values())
if _hatalar:
    _dogrulama_bas(_hatalar, "GERİ OKUMA (yazmadan önce, bellekte)")
    print("   ⇒ HİÇBİR DOSYA YAZILMADI (çıkış 4).")
    raise SystemExit(4)
print("GERİ OKUMA: %d/%d kayıt motorun okuyucusuyla yeniden ayrıştırıldı — son değer = "
      "yazılan değer, yan etki 0 ✓" % (_toplam_bek, _toplam_bek))

# ─────────────────────────────────────────── ⑧ GERİ ALMA KAPISI (ŞART)
# Kuru koşuda da sorulur: "177 iner" demek, 174'ü geri almaysa YALAN bir rapordur.
print()
print("GERİ ALMA KAPISI: %d değişim, her biri kendi satır geçmişine (git log -L) soruluyor…"
      % len(kapi_aday))
try:
    bayat = KAPI.tara(KOK, kapi_aday)
except KAPI.KapiOlcemedi as _e:
    print("🔴 KAPI ÖLÇEMEDİ — %s" % _e)
    print("   ölçülemedi ≠ temiz ⇒ araç KOŞMAZ, hiçbir dosya yazılmadı (çıkış 3).")
    raise SystemExit(3)
except Exception as _e:  # noqa: BLE001
    print("🔴 KAPI ÇALIŞMADI — %s: %s ⇒ araç KOŞMAZ, hiçbir dosya yazılmadı (çıkış 3)."
          % (type(_e).__name__, _e))
    raise SystemExit(3)
if bayat:
    print("🔴 BAYAT YAMA: %d kayıt — yamanın yazacağı dizi O KAYDIN geçmişinde VARDI ve bugün"
          " YOK ⇒ yama bir kez inmiş, kayıt sonra düzeltilmiş; yazmak o düzeltmeyi GERİ ALIR."
          % len(bayat))
    for ad, yol, satir_no, alanlar in sorted(bayat):
        print("  %-28s %s:%d  %s" % (ad[:28], yol, satir_no, " · ".join(
            "%s (geçmişte: %s)" % (a, ", ".join("%s %s" % hg for hg in isabet[:3]))
            for a, isabet in alanlar)))
    print("   ⇒ HİÇBİR DOSYA YAZILMADI (çıkış 2). Çare: inmiş yamayı glob dışına al "
          "(`data/yer_yama_arsiv/`), ya da kaydın bugünkü hâlini yamaya işle.")
    raise SystemExit(2)
print("  ✓ bayat yama yok — %d değişim TAZE." % len(kapi_aday))

if YAZ:
    # 🔴 TERSTEN — dosya SONUNDAN başına doğru. Bir kaydın satır sayısı
    #   değişirse (çok satırlı kayıt tek satıra inebilir) ondan SONRAKİ
    #   kayıtların indeksleri kayar; tersten yazınca henüz uygulanmamış
    #   aralıklar hep geçerli kalır.
    #   (1008) Diske YAZILAN, bellekte DOĞRULANAN metnin KENDİSİDİR (`_bellek`, yukarıda
    #   `_uygula_bellekte` aynı tersten sırayla kurdu) — düzenlemeyi ikinci kez uygulamak
    #   iki ayrı yol açar. 📌 Ölçüldü: bu yamanın ilk sürümü düzenlemeyi İKİ KEZ uyguladı;
    #   bellek sınavı geçti, DİSKTEN geri okuma bozulmayı yakaladı (1.832 kayıt DOĞRULANAMADI,
    #   çıkış 4, "UYGULANDI" denmedi) — bu kapı tam bu sınıf için var.
    for dosya in degisiklik:
        io.open(os.path.join(VERI, dosya), "w", encoding="utf-8",
                newline="").write(_bellek[dosya])
    print()
    print("%d dosya yazıldı." % len(degisiklik))
    # 🔴 DİSKTEN GERİ OKUMA — bellekteki sınav yazılanın kanıtı değildir.
    _disk = {d: io.open(os.path.join(VERI, d), encoding="utf-8", newline="").read()
             for d in degisiklik}
    _hatalar = geri_oku(_disk)
    if _hatalar:
        _dogrulama_bas(_hatalar, "DİSKTEN GERİ OKUMA")
        print("   ⇒ dosyalar YAZILDI ama doğrulanmadı — `git diff` ile incele (çıkış 4).")
        raise SystemExit(4)
    print("DİSKTEN GERİ OKUMA: %d/%d kayıt ✓ — UYGULANDI. 🔴 ŞİMDİ `py arac/denetle.py` KOŞTUR."
          % (_toplam_bek, _toplam_bek))
else:
    print()
    print("(kuru koşu — hiçbir dosya yazılmadı; --yaz ile çalıştır)")

if ist["taninmadi"]:
    print()
    print("🔴 TANINMAYAN %d yama kaydı İNMEDİ (adları ATLANAN'da '🔴 TANINMADI') — çıkış 4."
          % ist["taninmadi"])
    raise SystemExit(4)
