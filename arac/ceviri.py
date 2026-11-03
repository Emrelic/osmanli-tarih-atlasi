"""ÇEVİRİ BETİĞİ (CEVIRI-1103) — tasarım: denetim/CEVIRI-1103/TASARIM.md

Kaynak dil Türkçe. Çeviri kayıtları data/ceviri_<dil>_<tür>[_NN].js dosyalarında,
her kayıt [metin, kaynak_ozet] taşır; kaynak_ozet = Türkçe metnin FNV-1a 32 özeti
(js/ceviri.js ozet() ile birebir). Türkçe değişince özet tutmaz → kayıt BAYAT;
site o maddede Türkçeyi gösterir, bu betik yalnız bayatı/eksiği yeniden çevirtir.

  py arac/ceviri.py durum  [--dil en]                 # tamam / bayat / eksik / yetim sayıları
  py arac/ceviri.py bayat  --dil en --tur olay --cikti is.json [--sinir 150] [--atla 0]
                                                      # yeniden çevrilecekler (eksik + bayat)
  py arac/ceviri.py uygula --dil en --is is.json --girdi cevap.json
                                                      # cevap: {"tur":..., "kayit":{id: metin | {b,d}}}
  py arac/ceviri.py yaz    [--dil en]                 # dosyaları yeniden böl + data/ceviri_dizin.js
  py arac/ceviri.py temizle --dil en                  # Türkçesi silinmiş (yetim) kayıtları at

`uygula` özeti ÇEVİRİNİN YAPILDIĞI andaki Türkçeden değil, GİRDİDEKİ `kaynak`tan
alır: is.json'daki Türkçe çevirmene gittiği metindir; arada Türkçe değiştiyse
kayıt doğduğu anda bayat olur (doğru davranış — eski metnin çevirisidir).
Çıkış: 0 tamam · 1 hata · 2 ölçülemedi (node yok / çıkarıcı çöktü).
"""
import argparse, hashlib, json, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
DIZIN = os.path.join(DATA, "ceviri_dizin.js")
TURLER = ("arayuz", "devlet", "olay")
PARCA_BAYT = 400_000          # olay dosyası ~400 KB'de bölünür (tek dosya tarayıcıda ağırlaşmasın)

# Dil sırası (EMRELİC 1 KASIM görevi, 3 Kasım 2026): pilot İngilizce, sonra bu liste.
# Yalnız en az bir çeviri dosyası olan dil seçicide görünür.
DILLER = [("tr", "Türkçe"), ("en", "English"), ("ar", "العربية"), ("es", "Español"),
          ("fr", "Français"), ("ru", "Русский"), ("zh", "中文"), ("hi", "हिन्दी"),
          ("pt", "Português"), ("de", "Deutsch"), ("ja", "日本語"), ("fa", "فارسی"),
          ("it", "Italiano"), ("ko", "한국어"), ("pl", "Polski"), ("nl", "Nederlands"),
          ("el", "Ελληνικά")]


try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except AttributeError:
    pass


def ozet(s):
    h = 0x811C9DC5
    for b in (s or "").encode("utf-8", "surrogatepass"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return "%08x" % h


def cikar():
    try:
        r = subprocess.run(["node", os.path.join(KOK, "arac", "ceviri_cikar.js"), KOK],
                           capture_output=True, timeout=600)
    except (OSError, subprocess.TimeoutExpired) as e:
        print("ÖLÇÜLEMEDİ: node çalışmadı:", e)
        sys.exit(2)
    if r.returncode != 0:
        print("ÖLÇÜLEMEDİ: çıkarıcı çöktü:", r.stderr.decode("utf-8", "replace")[:2000])
        sys.exit(2)
    j = json.loads(r.stdout.decode("utf-8"))
    if j["hatalar"]:
        print("uyarı: yüklenemeyen veri:", "; ".join(j["hatalar"]), file=sys.stderr)
    return j


def turkce(j, tur):
    """{id: {alan: türkçe}} — arayüzde id = metnin kendisi."""
    if tur == "olay":
        return {o["id"]: {k: o[k] for k in ("b", "d") if o[k]} for o in j["olay"]}
    if tur == "devlet":
        return {d["id"]: {"ad": d["ad"]} for d in j["devlet"]}
    return {s: {"m": s} for s in j["arayuz"]}


ONEK = re.compile(r'^\s*Ceviri\.ekle\("([a-z]+)","([a-z]+)",', re.S)


def dosyalar(dil, tur):
    d = re.compile(r"^ceviri_%s_%s(_\d+)?\.js$" % (dil, tur))
    return sorted(os.path.join(DATA, f) for f in os.listdir(DATA) if d.match(f))


def oku(dil, tur):
    """Kayıtları yükle → {id: kayıt}. olay kaydı {b:[m,oz], d:[m,oz]}; öteki [m,oz]."""
    kayit = {}
    for yol in dosyalar(dil, tur):
        with open(yol, encoding="utf-8") as f:
            metin = f.read()
        govde = metin[metin.index("Ceviri.ekle("):]
        m = ONEK.match(govde)
        kayit.update(json.loads(govde[m.end():govde.rstrip().rindex(")")]))
    return kayit


def kiyasla(tr, kayit, tur):
    tamam, bayat, eksik = [], [], []
    for id_, alanlar in tr.items():
        r = kayit.get(id_)
        if tur == "olay":
            durum = []
            for a, s in alanlar.items():
                if not r or a not in r: durum.append("eksik")
                elif r[a][1] != ozet(s): durum.append("bayat")
                else: durum.append("tamam")
            (eksik if "eksik" in durum else bayat if "bayat" in durum else tamam).append(id_)
        else:
            s = next(iter(alanlar.values()))
            if not r: eksik.append(id_)
            elif r[1] != ozet(s): bayat.append(id_)
            else: tamam.append(id_)
    yetim = [k for k in kayit if k not in tr]
    return tamam, bayat, eksik, yetim


def yaz_tur(dil, tur, kayit):
    for yol in dosyalar(dil, tur):
        os.remove(yol)
    if not kayit:
        return
    anahtarlar = sorted(kayit)
    parcalar, simdi, boy = [], {}, 0
    for k in anahtarlar:
        s = json.dumps({k: kayit[k]}, ensure_ascii=False)
        if tur == "olay" and simdi and boy + len(s.encode()) > PARCA_BAYT:
            parcalar.append(simdi); simdi, boy = {}, 0
        simdi[k] = kayit[k]; boy += len(s.encode())
    parcalar.append(simdi)
    for i, p in enumerate(parcalar, 1):
        ad = "ceviri_%s_%s.js" % (dil, tur) if len(parcalar) == 1 else "ceviri_%s_%s_%02d.js" % (dil, tur, i)
        satirlar = ",\n".join(json.dumps(k, ensure_ascii=False) + ":" + json.dumps(p[k], ensure_ascii=False) for k in sorted(p))
        with open(os.path.join(DATA, ad), "w", encoding="utf-8", newline="\n") as f:
            f.write("/* ÇEVİRİ %s · %s — arac/ceviri.py ile YAZILDI, elle düzenleme: py arac/ceviri.py uygula.\n"
                    "   Kayıt: id → [metin, kaynak_ozet] (olayda alan başına). Tasarım: denetim/CEVIRI-1103/TASARIM.md */\n"
                    % (dil, tur))
            f.write('Ceviri.ekle("%s","%s",{\n%s\n});\n' % (dil, tur, satirlar))


def dizin_yaz():
    var = []
    dosya = {}
    for kod, ad in DILLER:
        if kod == "tr":
            var.append({"kod": kod, "ad": ad}); continue
        liste = []
        for tur in TURLER:
            for yol in dosyalar(kod, tur):
                with open(yol, "rb") as f:
                    liste.append([os.path.basename(yol), hashlib.sha1(f.read()).hexdigest()[:8]])
        if liste:
            var.append({"kod": kod, "ad": ad}); dosya[kod] = liste
    with open(DIZIN, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* ÇEVİRİ DİZİNİ — arac/ceviri.py yaz ile ÜRETİLDİ. Dil seçicinin dilleri ve tembel\n"
                "   yüklenecek dosyalar (sürüm = içerik özeti). js/ceviri.js'ten ÖNCE yüklenir. */\n")
        f.write("window.CEVIRI_DIZIN = " + json.dumps({"diller": var, "dosyalar": dosya}, ensure_ascii=False, indent=1) + ";\n")
    return var


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("komut", choices=["durum", "bayat", "uygula", "yaz", "temizle"])
    ap.add_argument("--dil")
    ap.add_argument("--tur", choices=TURLER)
    ap.add_argument("--cikti"); ap.add_argument("--girdi"); ap.add_argument("--is", dest="is_")
    ap.add_argument("--sinir", type=int, default=0); ap.add_argument("--atla", type=int, default=0)
    a = ap.parse_args()
    diller = [a.dil] if a.dil else [k for k, _ in DILLER if k != "tr"]

    if a.komut == "yaz":
        for dil in diller:
            for tur in TURLER:
                k = oku(dil, tur)
                if k: yaz_tur(dil, tur, k)
        print("diller:", ", ".join(d["kod"] for d in dizin_yaz()))
        return 0

    j = cikar()
    if a.komut == "durum":
        for dil in diller:
            satir = []
            for tur in TURLER:
                k = oku(dil, tur)
                t, b, e, y = kiyasla(turkce(j, tur), k, tur)
                satir.append("%s tamam %d · bayat %d · eksik %d · yetim %d" % (tur, len(t), len(b), len(e), len(y)))
            if any(dosyalar(dil, tur) for tur in TURLER) or a.dil:
                print("[%s] " % dil + " | ".join(satir))
        return 0

    if not a.dil or (a.komut != "temizle" and a.komut != "uygula" and not a.tur):
        ap.error("--dil (ve bayat için --tur) gerekli")

    if a.komut == "bayat":
        tr = turkce(j, a.tur); k = oku(a.dil, a.tur)
        _, b, e, _ = kiyasla(tr, k, a.tur)
        ids = e + b
        if a.atla: ids = ids[a.atla:]
        if a.sinir: ids = ids[:a.sinir]
        is_ = {"dil": a.dil, "tur": a.tur, "kaynak": {i: tr[i] if a.tur == "olay" else next(iter(tr[i].values())) for i in ids}}
        with open(a.cikti, "w", encoding="utf-8") as f:
            json.dump(is_, f, ensure_ascii=False, indent=1)
        print("yeniden çevrilecek: %d (eksik %d · bayat %d) → %s" % (len(ids), len(e), len(b), a.cikti))
        return 0

    if a.komut == "uygula":
        with open(a.girdi, encoding="utf-8") as f:
            g = json.load(f)
        tur = g["tur"]; dil = g.get("dil", a.dil)
        if dil != a.dil: print("dil uyuşmuyor:", dil, a.dil); return 1
        if "kaynak" not in g:
            if not a.is_: ap.error("girdide kaynak yok: --is <bayat çıktısı> ver")
            with open(a.is_, encoding="utf-8") as f:
                g["kaynak"] = json.load(f)["kaynak"]
        kaynak = g["kaynak"]; k = oku(dil, tur); n = 0; atlanan = []
        for id_, m in g["kayit"].items():
            if id_ not in kaynak: atlanan.append(id_); continue
            if tur == "olay":
                r = k.setdefault(id_, {})
                for alan, s in kaynak[id_].items():
                    if isinstance(m, dict) and m.get(alan): r[alan] = [m[alan], ozet(s)]
            else:
                if not isinstance(m, str) or not m.strip(): atlanan.append(id_); continue
                k[id_] = [m, ozet(kaynak[id_])]
            n += 1
        yaz_tur(dil, tur, k); dizin_yaz()
        print("uygulandı: %d · atlanan %d" % (n, len(atlanan)))
        return 0

    if a.komut == "temizle":
        for tur in TURLER:
            k = oku(a.dil, tur)
            _, _, _, y = kiyasla(turkce(j, tur), k, tur)
            for i in y: del k[i]
            if y: yaz_tur(a.dil, tur, k)
            print(tur, "yetim silindi:", len(y))
        dizin_yaz()
        return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
