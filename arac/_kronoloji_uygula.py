# -*- coding: utf-8 -*-
"""KRONOLOJİ YAMALARINI `data/devletler.js`e İNDİRİR — append-only.

🔴 NİÇİN BİR ARAÇ: 4 Eylül'de 200 madde **elden yazılmış bir betikle** indi ve
o betik commit EDİLMEDİ. 5 Eylül gecesi beş oturum 166 madde daha üretti ve
aynı iş yeniden yazılacaktı. `CLAUDE.md §11`: *"kendi yazdığın ayrıştırıcı,
var olan bir ayrıştırıcıdan her zaman kötüdür"* — ve her seferinde YENİDEN
yazılan bir ayrıştırıcı, o dersin en pahalı hâlidir.

TASARIM — beş kural, hepsi ölçülmüş bir kusurdan doğdu:

① VAR OLAN SATIRA DOKUNMAZ. Yalnız `kronoloji:[ … ]` dizisinin SONUNA ekler.
   Bir maddeyi değiştirmek gerekiyorsa bu aracın işi DEĞİLDİR.

② KOŞU CANLIYKEN ÇALIŞMAZ — ve bunu KİLİT DOSYASINDAN DEĞİL SÜREÇTEN ölçer.
   4/5 Eylül gecesi koordinatör iki saat "PID canlı" diye rapor etti çünkü
   dosyayı okuyordu; PID'in YAŞADIĞINI hiç ölçmedi. Bu araç `tasklist` ile
   bakar, ve ÖLÇEMEZSE **canlı sayar** (yanlış alarm, sessiz zarardan iyidir).

③ KÜNYE KİMLİĞİNİ VARSAYMAZ, ÖLÇER. `devletler.js` **node ile** okunur —
   regex'le değil. Bu proje aynı dersi beş kez öğrendi (girdi.py tek tırnak ·
   bagla.py CRLF · renkler.py · _bk_nobetci · tahta).
   ⚠️ Ve id eşleşmesi TAM olmalı: `vollayta` ≠ `vollayta-kralligi` (§4).

④ MÜKERRER MADDE SESSİZCE İNMEZ. Aynı `t:` + aynı `tur:` varsa ATLANIR ve
   RAPORLANIR. *"Sessiz atlama, yanlış sonuçtan pahalıdır"* — bu yüzden
   atlanan her madde adıyla basılır.

⑤ YAZDIKTAN SONRA DOĞRULAR: dosya node ile yeniden okunur, künye sayısı
   DEĞİŞMEMİŞ ve her künyenin madde sayısı `eski + inen` olmalıdır. Tutmazsa
   araç **çıkış kodu 1** verir ve yedeği söyler.

KULLANIM
    py arac/_kronoloji_uygula.py                # KURU KOŞU (varsayılan)
    py arac/_kronoloji_uygula.py --yaz          # gerçekten yaz
    py arac/_kronoloji_uygula.py --hedef <yol>  # başka bir dosyaya yaz (sınav)
    py arac/_kronoloji_uygula.py --yama "denetim/KRONOLOJI-*0905*.json"
"""
import glob
import io
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEVLETLER = os.path.join(KOK, "data", "devletler.js")
KILIT = os.path.join(KOK, ".petek.kilit")
VARSAYILAN_YAMA = "denetim/KRONOLOJI-*0905*.json"
ZORUNLU = ("t", "tur", "b")


def yaz(s):
    """Konsol cp1254 olabilir — bir NÖBETÇİ kendi çıktısında ÇÖKMEZ."""
    try:
        print(s, flush=True)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"), flush=True)
        except Exception:
            pass


# ═══════════════════════════════════════════════════════════════════
# ② KOŞU CANLI MI — SÜREÇTEN
# ═══════════════════════════════════════════════════════════════════
def _pid_oku():
    try:
        for p in io.open(KILIT, encoding="utf-8").read().split("|"):
            p = p.strip()
            if p.startswith("pid="):
                return int(p[4:])
    except Exception:
        pass
    return None


def _yasiyor(pid):
    """ÜÇ DURUM, İKİSİ DEĞİL: canlı / ölü / ÖLÇÜLEMEDİ.
    Ölçülemedi ⇒ CANLI say: bu araç veri yazıyor, yanlış tarafa düşmesi
    sessiz bir bozulmadan iyidir."""
    try:
        r = subprocess.run(["tasklist", "/FI", "PID eq %d" % pid, "/NH", "/FO", "CSV"],
                           capture_output=True, text=True, timeout=20)
        if r.returncode != 0:
            return True
        return ('"%d"' % pid) in (r.stdout or "")
    except Exception:
        return True


def kosu_canli():
    pid = _pid_oku()
    if pid is None:
        return False, "kilit yok (koşu yok sayıldı)"
    return _yasiyor(pid), "PID %d" % pid


# ═══════════════════════════════════════════════════════════════════
# ③ devletler.js'i NODE ile oku — regex YOK
# ═══════════════════════════════════════════════════════════════════
BETIK = """
const fs = require('fs');
global.window = {};
eval(fs.readFileSync(process.argv[2], 'utf8'));
const D = window.DEVLETLER || [];
const c = {};
for (const d of D) c[d.id] = (d.kronoloji || []).map(m => [m.t || '', m.tur || '']);
process.stdout.write(JSON.stringify({adet: D.length, kronoloji: c}));
"""


def devletleri_oku(yol):
    bs = os.path.join(KOK, "_kron_oku.js")
    io.open(bs, "w", encoding="utf-8", newline="\n").write(BETIK)
    try:
        r = subprocess.run(["node", bs, yol], capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=180)
        if r.returncode != 0:
            yaz("🔴 node okuyamadı: %s" % (r.stderr or "")[:300])
            return None
        return json.loads(r.stdout)
    finally:
        try:
            os.remove(bs)
        except Exception:
            pass


# ═══════════════════════════════════════════════════════════════════
# EKLEME NOKTASI — `kronoloji:[` dizisinin KAPANIŞ `]`ini bul
# ═══════════════════════════════════════════════════════════════════
def _kunye_bas(s, slug):
    """Künyenin `id:"slug"` yazımını bul. İki tırnak biçimini de dener."""
    for kal in ('id:"%s"' % slug, "id:'%s'" % slug,
                '"id":"%s"' % slug, '"id": "%s"' % slug):
        i = s.find(kal)
        if i >= 0:
            return i
    return -1


def _kronoloji_kapanis(s, bas):
    """`bas`tan sonraki ilk `kronoloji:[`in KAPANIŞ köşeli parantezini döndür.

    ⚠️ Parantez sayarken DİZGİ İÇİ karakterler atlanır — bir `b:` metninde
    geçen `]` yüzünden yanlış yere yazmak, bu aracın yapabileceği en sessiz
    hatadır.
    """
    for kal in ("kronoloji:[", "kronoloji: [", '"kronoloji":['):
        k = s.find(kal, bas)
        if k >= 0 and k - bas < 6000:
            break
    else:
        return -1, -1
    i = s.index("[", k)
    derinlik = 0
    j = i
    dizgi = None
    while j < len(s):
        c = s[j]
        if dizgi:
            if c == "\\":
                j += 2
                continue
            if c == dizgi:
                dizgi = None
        elif c in "\"'":
            dizgi = c
        elif c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                return i, j
        j += 1
    return i, -1


def _js_dizgi(v):
    """Metni JS çift tırnaklı dizgiye çevir — ters eğik çizgi ve tırnak kaçar.

    🔴 `json.dumps` KULLANILIYOR ve `ensure_ascii=False`: Türkçe harfler
    kaçış dizisine dönerse dosya OKUNUR ama gövde metni bozulur.
    """
    return json.dumps(v, ensure_ascii=False)


def madde_satiri(m):
    p = ['t:%s' % _js_dizgi(m["t"]), 'tur:%s' % _js_dizgi(m["tur"]),
         'b:%s' % _js_dizgi(m["b"])]
    if m.get("kaynak"):
        p.append("kaynak:%s" % _js_dizgi(m["kaynak"]))
    return "    { %s }" % ", ".join(p)


def main(argv):
    YAZ = "--yaz" in argv
    hedef = DEVLETLER
    if "--hedef" in argv:
        hedef = argv[argv.index("--hedef") + 1]
    desen = VARSAYILAN_YAMA
    if "--yama" in argv:
        desen = argv[argv.index("--yama") + 1]

    yaz("=" * 66)
    yaz("KRONOLOJİ YAMASI · hedef: %s" % os.path.relpath(hedef, KOK))
    yaz("=" * 66)

    # ② koşu kapısı — yalnız GERÇEK hedefe yazarken
    canli, nasil = kosu_canli()
    if YAZ and os.path.abspath(hedef) == os.path.abspath(DEVLETLER) and canli:
        yaz("🔴 KOŞU CANLI (%s) — data/devletler.js'e YAZILMAZ." % nasil)
        yaz("   Koşu sırasında data/ yazmak koşuyu öldürmez ama ÇIKTIYI")
        yaz("   YAYINLANAMAZ kılar (CLAUDE.md §7, 2 Eylül vakası).")
        return 2
    yaz("koşu durumu: %s%s" % (nasil, " · CANLI" if canli else " · yok"))

    # yamaları oku
    yamalar = sorted(glob.glob(os.path.join(KOK, desen)))
    if not yamalar:
        yaz("🔴 yama bulunamadı: %s" % desen)
        return 2
    istek = []          # (slug, madde, dosya)
    for y in yamalar:
        d = json.load(io.open(y, encoding="utf-8"))
        ky = d.get("kunyeler")
        cift = (ky.items() if isinstance(ky, dict)
                else [(k.get("id"), k) for k in (ky or [])])
        n = 0
        for slug, k in cift:
            ek = (k.get("eklenen") if isinstance(k, dict) else None) or []
            for m in ek:
                istek.append((slug, m, os.path.basename(y)))
                n += 1
        yaz("  yama %-38s %3d madde" % (os.path.basename(y), n))
    yaz("  TOPLAM istek: %d madde" % len(istek))

    # ③ künyeleri NODE ile oku
    onceki = devletleri_oku(hedef)
    if onceki is None:
        return 2
    yaz("  hedefte künye: %d" % onceki["adet"])

    # ayıklama: şema · kimlik · mükerrer
    kabul, red = [], []
    for slug, m, dosya in istek:
        if not isinstance(m, dict) or any(not m.get(a) for a in ZORUNLU):
            red.append((slug, dosya, "şema eksik (t/tur/b)", str(m)[:60]))
            continue
        if slug not in onceki["kronoloji"]:
            red.append((slug, dosya, "KÜNYE YOK (id tam eşleşmiyor)", m.get("t", "")))
            continue
        var = onceki["kronoloji"][slug]
        if [m["t"], m["tur"]] in var:
            red.append((slug, dosya, "MÜKERRER (aynı t + tur)", m["t"]))
            continue
        kabul.append((slug, m, dosya))
        var.append([m["t"], m["tur"]])          # aynı parti içinde de mükerrer olmasın

    yaz("")
    yaz("KABUL %d · RED %d" % (len(kabul), len(red)))
    for slug, dosya, neden, ek in red:
        yaz("  🔴 %-28s %-22s %s  (%s)" % (slug, neden, ek, dosya))

    if not YAZ:
        yaz("")
        yaz("KURU KOŞU — hiçbir şey yazılmadı. Yazmak için: --yaz")
        return 0
    if not kabul:
        yaz("yazılacak madde yok.")
        return 0

    # yaz
    s = io.open(hedef, encoding="utf-8").read()
    yedek = hedef + ".yedek"
    io.open(yedek, "w", encoding="utf-8", newline="").write(s)
    grup = {}
    for slug, m, _ in kabul:
        grup.setdefault(slug, []).append(m)

    yazilan = 0
    for slug, maddeler in grup.items():
        bas = _kunye_bas(s, slug)
        if bas < 0:
            yaz("🔴 %s: künye metinde bulunamadı — ATLANDI" % slug)
            continue
        ac, kapa = _kronoloji_kapanis(s, bas)
        if kapa < 0:
            yaz("🔴 %s: kronoloji dizisi kapanışı bulunamadı — ATLANDI" % slug)
            continue
        bos = s[ac + 1:kapa].strip() == ""
        parca = ",\n".join(madde_satiri(m) for m in maddeler)
        ek = ("\n" + parca + "\n  ") if bos else (",\n" + parca + "\n  ")
        s = s[:kapa] + ek + s[kapa:]
        yazilan += len(maddeler)

    io.open(hedef, "w", encoding="utf-8", newline="").write(s)
    yaz("  yazıldı: %d madde · yedek: %s" % (yazilan, os.path.basename(yedek)))

    # ⑤ DOĞRULA
    sonra = devletleri_oku(hedef)
    if sonra is None:
        yaz("🔴 YAZILDI AMA OKUNAMIYOR — yedeği geri al: %s" % yedek)
        return 1
    hata = []
    if sonra["adet"] != onceki["adet"]:
        hata.append("künye sayısı %d → %d" % (onceki["adet"], sonra["adet"]))
    for slug, maddeler in grup.items():
        bek = len(onceki["kronoloji"].get(slug, []))     # zaten +len(maddeler) eklendi
        gel = len(sonra["kronoloji"].get(slug, []))
        if gel != bek:
            hata.append("%s: beklenen %d, gelen %d" % (slug, bek, gel))
    if hata:
        yaz("🔴 DOĞRULAMA BAŞARISIZ — yedek: %s" % yedek)
        for h in hata[:20]:
            yaz("   " + h)
        return 1
    yaz("🟢 DOĞRULANDI: künye %d · %d künyede madde sayısı beklenenle birebir"
        % (sonra["adet"], len(grup)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
