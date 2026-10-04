# -*- coding: utf-8 -*-
"""KRONOLOJİ ↔ KÜNYE ORTAK OKUYUCU (1004) — iki ölçüm aracının paylaştığı yükleyici.

KULLANANLAR
  denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.py   (hangi künyeye kronoloji maddesi değiyor)
  denetim/ARAC-KRONO-KUNYE-PENCERE-1004.py  (madde tarihi künye penceresine düşüyor mu)
  denetim/*-SINAV-1004.py                    (iki yönlü sınavlar)

🔴 NİÇİN REGEX DEĞİL: künyeyi regex ile okuyan ilk deneme 895'in 280'ini gördü (D219).
   Künyeler `girdi.oku_devletler()` ile, kronoloji/olay dosyaları ise `node` ile okunur:
   dosya `window`a ne koyuyorsa AYNEN o — tarayıcının gördüğü evren.
   node yoksa ya da bir dosya yüklenmezse `Olculemedi` fırlar; çağıran araç çıkış 2 verir.
   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Sessiz sıfır YASAK.

🔴 BAĞLAMA KURALI app.js:14196-14290'ı AYNEN izler (`derinKronolojiBindir` +
   `cokTarafliKronolojiEkle`):
     KRONOLOJI_<ID>              → dosyanın TÜM maddeleri künye <id>'ye (id = ek küçük harf;
                                    bulunmazsa `_`→`-`)   · tür "dosya"
     KRONOLOJI_(SINIR|COK)_*     → madde `taraflar` ‖ `devletler` ‖ `devlet`teki künyelere · tür "cok"
     OLAYLAR*                    → aynı üç alan                                                 · tür "olay"
   Ek olarak her madde, `taraflar`/`devletler`/`devlet`/`odak_kimlik`te adı geçen künyeyi
   ANAR (bağlama kuralının dışında kalan atıflar da kapsama sayılır; `odak_kimlik` yalnız
   kapsamda sayılır, pencere ölçümüne GİRMEZ — kamera odağı, varlık iddiası değildir).
"""
import io, json, os, re, subprocess, sys

KOK_VARSAYILAN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALAN_VARLIK = ("taraflar", "devletler", "devlet")   # "bu devlet o gün vardı" iddiası
ALAN_ODAK = ("odak_kimlik",)                         # yalnız anma (kapsam)

_NODE = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');
const dir=process.argv[1];
const out={dosyalar:{},hata:{}};
let adlar;
try{adlar=fs.readdirSync(dir).filter(f=>/^(olaylar|kronoloji)[^\/\\]*\.js$/.test(f)).sort();}
catch(e){process.stdout.write(JSON.stringify({dosyalar:{},hata:{'__dizin__':String(e)}}));process.exit(0);}
for(const f of adlar){
  const ctx={window:{}};ctx.self=ctx.window;
  try{
    vm.runInNewContext(fs.readFileSync(path.join(dir,f),'utf8'),ctx,{filename:f});
    const o={};
    for(const k of Object.keys(ctx.window)){
      if(/^(OLAYLAR|KRONOLOJI)(_|$)/.test(k)&&Array.isArray(ctx.window[k])){
        o[k]=ctx.window[k].map(m=>({t:m.t,b:m.b,tur:m.tur,d:m.d,gun:m.gun,yer_id:m.yer_id,yer:m.yer,k:m.k,etiket:m.etiket,
          taraflar:m.taraflar,devletler:m.devletler,devlet:m.devlet,odak_kimlik:m.odak_kimlik}));
      }
    }
    out.dosyalar[f]=o;
  }catch(e){out.hata[f]=String(e).slice(0,300);}
}
process.stdout.write(JSON.stringify(out));
"""


class Olculemedi(Exception):
    """Ölçüm YAPILAMADI — çağıran çıkış 2 verir. 'Yok' ya da 'temiz' DEMEZ."""


def kok_al(argv):
    """`--kok DİZİN` (sınav için bozulmuş kopya) ya da deponun kendi kökü."""
    if "--kok" in argv:
        i = argv.index("--kok")
        if i + 1 >= len(argv):
            raise Olculemedi("--kok değer almadı")
        return os.path.abspath(argv[i + 1])
    return KOK_VARSAYILAN


def pad_tarih(s):
    """'330-05-11' → '0330-05-11'; 'YYYY-AA' → 'YYYY-AA'. Üç haneli yıl dizgi
    karşılaştırmasında pad() şart (D205)."""
    if not isinstance(s, str):
        return None
    m = re.fullmatch(r"(-?\d{1,4})(?:-(\d{2}))?(?:-(\d{2}))?", s.strip())
    if not m:
        return None
    y = int(m.group(1))
    return (y, int(m.group(2)) if m.group(2) else None, int(m.group(3)) if m.group(3) else None)


def kunyeleri_oku(kok):
    sys.path.insert(0, os.path.join(KOK_VARSAYILAN, "arac"))
    try:
        import girdi
    except Exception as e:                      # noqa
        raise Olculemedi("girdi.py içe alınamadı: %s" % e)
    girdi.DATA = os.path.join(kok, "data")
    try:
        D = girdi.oku_devletler()
    except SystemExit as e:
        raise Olculemedi("künyeler okunamadı: %s" % e)
    except Exception as e:                      # noqa
        raise Olculemedi("künyeler okunamadı: %s: %s" % (type(e).__name__, e))
    if not D:
        raise Olculemedi("0 künye döndü — sessiz sıfır yasak")
    ids = [d["id"] for d in D]
    if len(set(ids)) != len(ids):
        raise Olculemedi("künye id'leri tekil değil")
    return D


def yerlesimleri_oku(kok):
    """`girdi.yukle()` — yerleşim kayıtlarının TAMAMI (s:/d:/v:/isg: zincirleriyle).
    girdi.py DONUK dosyadır; yalnız ÇAĞRILIR, değiştirilmez. Okunamazsa Olculemedi."""
    import contextlib
    sys.path.insert(0, os.path.join(KOK_VARSAYILAN, "arac"))
    try:
        import girdi
    except Exception as e:                      # noqa
        raise Olculemedi("girdi.py içe alınamadı: %s" % e)
    girdi.DATA = os.path.join(kok, "data")
    try:
        with contextlib.redirect_stdout(io.StringIO()):
            Y = girdi.yukle(sessiz=True)
    except SystemExit as e:
        raise Olculemedi("yerleşimler okunamadı: %s" % e)
    except Exception as e:                      # noqa
        raise Olculemedi("yerleşimler okunamadı: %s: %s" % (type(e).__name__, e))
    if not Y:
        raise Olculemedi("0 yerleşim döndü — sessiz sıfır yasak")
    return Y


def denetle_yukle(kok):
    """denetle.py'yi İÇE AL (yalnız okunur, değiştirilmez), veri yolunu kok'a çevir →
    (denetle, Y_cekirdek, O). `denetle` içe alınırken stdout kodlamasını OKUR; None kodlamalı
    StringIO içinde içe alınırsa çöker ⇒ içe alma GERÇEK stdout'ta, yükleme sessiz."""
    import contextlib
    sys.path.insert(0, os.path.join(KOK_VARSAYILAN, "arac"))
    veri = os.path.join(kok, "data")
    try:
        import denetle, girdi
        with contextlib.redirect_stdout(io.StringIO()):
            girdi.DATA = veri
            denetle.DATA = veri
            Y = denetle.yerlesimleri_yukle()
            O = denetle.olaylari_yukle()
    except SystemExit as e:
        raise Olculemedi("denetle okunamadı: %s" % e)
    except Exception as e:                      # noqa
        raise Olculemedi("denetle okunamadı: %s: %s" % (type(e).__name__, e))
    if not Y or not O:
        raise Olculemedi("0 yerleşim / 0 madde — sessiz sıfır yasak")
    Y_cek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    if not Y_cek:
        raise Olculemedi("Y_cekirdek boş")
    return denetle, Y_cek, O


def _node_calistir(kok):
    try:
        p = subprocess.run(["node", "-e", _NODE, os.path.join(kok, "data")],
                           capture_output=True, timeout=600)
    except FileNotFoundError:
        raise Olculemedi("node bulunamadı — kronoloji dosyaları okunamaz")
    except subprocess.TimeoutExpired:
        raise Olculemedi("node zaman aşımı")
    if p.returncode != 0:
        raise Olculemedi("node çıkış %d: %s" % (p.returncode, p.stderr.decode("utf-8", "replace")[:300]))
    try:
        return json.loads(p.stdout.decode("utf-8"))
    except ValueError as e:
        raise Olculemedi("node çıktısı JSON değil: %s" % e)


def _liste(v):
    if v is None:
        return []
    return list(v) if isinstance(v, list) else [v]


def _sahip_adaylari(degisken):
    a = degisken[len("KRONOLOJI_"):].lower()
    return [a] + ([a.replace("_", "-")] if "_" in a else [])


def yukle(kok):
    """→ dict(kunyeler, maddeler, eslenmeyen_dosya, dosya_sayisi).
    maddeler: [{dosya, degisken, tur, t, b, varlik:set, anilan:set, kaynak_kunye:None}]
    `varlik` = pencere ölçümüne giren künyeler; `anilan` = kapsamda sayılanlar (varlik ∪ odak)."""
    D = kunyeleri_oku(kok)
    ids = {d["id"] for d in D}
    n = _node_calistir(kok)
    if n["hata"]:
        raise Olculemedi("yüklenemeyen dosya(lar): " + "; ".join(
            "%s → %s" % (k, v) for k, v in sorted(n["hata"].items())))
    if not n["dosyalar"]:
        raise Olculemedi("data/ altında olaylar*/kronoloji* dosyası bulunamadı")
    maddeler, eslenmeyen = [], []
    for dosya, o in n["dosyalar"].items():
        for degisken, liste in o.items():
            sahip = None
            tur = "olay"
            if degisken.startswith("KRONOLOJI_"):
                if re.match(r"KRONOLOJI_(SINIR|COK)_", degisken):
                    tur = "cok"
                else:
                    tur = "dosya"
                    for a in _sahip_adaylari(degisken):
                        if a in ids:
                            sahip = a
                            break
                    if sahip is None:
                        eslenmeyen.append((dosya, degisken, len(liste)))
            for m in liste:
                varlik = set(x for a in ALAN_VARLIK for x in _liste(m.get(a)) if x in ids)
                odak = set(x for a in ALAN_ODAK for x in _liste(m.get(a)) if x in ids)
                if sahip:
                    varlik.add(sahip)
                maddeler.append({"dosya": dosya, "degisken": degisken, "tur": tur,
                                 "t": m.get("t"), "b": m.get("b") or "",
                                 "d": m.get("d") if isinstance(m.get("d"), str) else "",
                                 "gun": m.get("gun") if isinstance(m.get("gun"), str) else "",
                                 "yer_id": m.get("yer_id") if isinstance(m.get("yer_id"), str) else "",
                                 "k": m.get("k") if isinstance(m.get("k"), str) else "",
                                 "etiket": [str(x).strip() for x in (m.get("etiket") if isinstance(m.get("etiket"), list)
                                                                      else str(m.get("etiket") or "").split(","))
                                            if str(x).strip()],
                                 "varlik": varlik, "anilan": varlik | odak})
    if not maddeler:
        raise Olculemedi("0 madde yüklendi — sessiz sıfır yasak")
    return {"kunyeler": D, "maddeler": maddeler, "eslenmeyen_dosya": eslenmeyen,
            "dosya_sayisi": len(n["dosyalar"])}


def madde_anahtari(m):
    """Üyelik defteri için kararlı kimlik: dosya¦t¦başlık-özeti."""
    import hashlib
    h = hashlib.sha1((m["b"] or "").encode("utf-8")).hexdigest()[:8]
    return "%s¦%s¦%s" % (m["dosya"], m["t"], h)


def defter_oku(yol):
    """`dosya¦id` satırları; '#' yorum. Dosya YOKSA Olculemedi (boş tavan sanılmaz)."""
    if not os.path.exists(yol):
        raise Olculemedi("üyelik defteri yok: %s (--defter-yaz ile kur, İNCELEYEREK)" % yol)
    uyeler = set()
    for l in io.open(yol, encoding="utf-8"):
        l = l.rstrip("\n")
        if l.strip() and not l.lstrip().startswith("#"):
            uyeler.add(l.strip())
    return uyeler


def defter_yaz(yol, uyeler, baslik):
    with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
        for s in baslik.strip("\n").split("\n"):
            f.write("# " + s + "\n")
        for u in sorted(uyeler):
            f.write(u + "\n")

def _git(kok, *args):
    import subprocess
    try:
        p = subprocess.run(["git", "-C", kok] + list(args), capture_output=True, timeout=60)
    except Exception:                           # noqa
        return None
    return p.stdout.decode("utf-8", "replace").strip() if p.returncode == 0 else None


def ortam_satiri(kok, an):
    """ORTAM damgası (LAB yöntem kuralı, 4 Ekim 2026): her betik ortamını KENDİ ÇIKTISINA basar —
    `git rev-parse HEAD` başta ve sonda. Kirli ortamda ölçülmüş bir sayı ancak reflog ile anlaşılıyordu;
    çıktıda yazarsa anında görünür. Deponun HEAD'i ve çalışma ağacının kirliliği (izlenen dosya değişikliği)."""
    head = _git(KOK_VARSAYILAN, "rev-parse", "HEAD")
    dal = _git(KOK_VARSAYILAN, "rev-parse", "--abbrev-ref", "HEAD")
    kirli = _git(KOK_VARSAYILAN, "status", "--porcelain", "--untracked-files=no")
    n = len([l for l in kirli.splitlines() if l.strip()]) if kirli is not None else None
    ek = "" if os.path.abspath(kok) == os.path.abspath(KOK_VARSAYILAN) else " · --kok %s" % kok
    return "ORTAM (%s): HEAD %s%s · izlenen değişiklik %s%s" % (
        an, (head or "?")[:12], (" (%s)" % dal) if dal else "", "?" if n is None else n, ek)


def ortam_sar(main, argv):
    """main'i ORTAM damgasıyla sarar: başta ve sonda HEAD basar; ölçüm sürerken HEAD değiştiyse BAĞIRIR."""
    try:
        kok = kok_al(argv)
    except Olculemedi:
        kok = KOK_VARSAYILAN
    bas = ortam_satiri(kok, "başta")
    print(bas)
    kod = main(argv)
    son = ortam_satiri(kok, "sonda")
    print(son)
    if bas.split(" · ")[0].replace("başta", "x") != son.split(" · ")[0].replace("sonda", "x"):
        print("🔴 ORTAM DEĞİŞTİ — ölçüm sürerken HEAD değişti; bu çıktı KARIŞIK ortamdan olabilir")
    return kod
