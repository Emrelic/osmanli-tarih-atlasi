# -*- coding: utf-8 -*-
"""RENKSİZ KİMLİK KÜMESİ — merge gecesinin bloke edicisi · SINIR-KAFRIKA-0907

Öngörü ÖNCE: `denetim/ONGORU-SINIR-KAFRIKA-RENK-0907.json`

🔴 LİSTEYİ KÜNYE ÖNERİLERİNDEN TÜRETMİYORUM. Bugün iki liste yazıldı,
   ikisi de kendi kaynağında eksiksizdi, ve eksik olan İKİSİNİN ARASIYDI
   (6 kimlik: künyesi VAR ama yeni künye önerisi OLMADIĞI için birinci
   listeye yapısal olarak giremiyordu).
   ⇒ DOĞRU SORU: *taşıma koşulduktan SONRA hangi kimlik `BOYALAR`da
     olmayacak?* Kaynak: bekleyen yamaların GERÇEKTEN kullandığı
     `d:`/`s:`/`v:` kimlikleri.

🔴 `harita:` DOLAYLAMASI İKİ EKSENDE DE UYGULANIR — renk `harita:`
   anahtarına bakar, `id`ye DEĞİL. Bugün bu bir eksende düzeltilip
   ötekinde düşürüldü ve sayı 11→16 kaydı.

🔴 `arac/renkler.py` PARMAK İZLİ: bu alet onu YALNIZ OKUR (import).
   Okumak parmak izini bozmaz; yazmak koşuyu öldürür.
"""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import renkler as R  # noqa: E402  — YALNIZ OKUMA

KIMLIK_RX = re.compile(r'\b(?:d|kid)\s*:\s*"([^"]{1,80})"')


def js_kimlikleri(yol):
    """Bir yama dosyasindaki d:/kid: kimliklerini cikarir.

    ⚠️ Bu bir REGEX ve proje "kendi ayristiricini yazma" dersini bes kez
    ogrendi. Burada mesru: dosyalarin bir kismi JSON, bir kismi JS, bir
    kismi `window.X = [...]` ve hicbiri girdi.py'nin okudugu bicimde
    DEGIL. Yine de SINIRI basiliyor: yorum satirlarindaki kimlikler de
    yakalanabilir ⇒ sayilar UST SINIRDIR, ve boyle raporlanir.
    """
    try:
        s = io.open(yol, encoding="utf-8", errors="replace").read()
    except Exception:
        return set()
    s = re.sub(r"//[^\n]*", " ", s)          # satir yorumlarini at
    s = re.sub(r"(?s)/\*.*?\*/", " ", s)     # blok yorumlarini at
    return set(KIMLIK_RX.findall(s))


def main():
    # --- BOYALAR: renk anahtarlari ---
    boyali = set(R.BOYALAR.keys())
    print("BOYALAR anahtari        : %d" % len(boyali))

    # --- kunye: id -> harita anahtari ---
    D = girdi.oku_devletler()
    kunye_id = set(d["id"] for d in D)
    harita = {d["id"]: (d.get("harita") or d["id"]) for d in D}
    print("kunye id                : %d" % len(kunye_id))
    print("`harita:` alani FARKLI olan kunye: %d"
          % sum(1 for k, v in harita.items() if k != v))

    # --- BEKLEYEN yamalar ---
    bagli = set(girdi.GIRDI_DOSYALARI)
    data_dir = os.path.join(KOK, "data")
    denetim_dir = os.path.join(KOK, "denetim")

    data_bekleyen = sorted(f for f in os.listdir(data_dir)
                           if f.endswith(".js") and f not in bagli
                           and ("yama" in f or "kademe" in f))
    denetim_bekleyen = sorted(f for f in os.listdir(denetim_dir)
                              if (f.endswith(".js") or f.endswith(".json"))
                              and ("YAMA" in f.upper()))
    print("")
    print("BEKLEYEN dosya:")
    print("   data/ (BAGLANMAMIS yama/kademe) : %d" % len(data_bekleyen))
    print("   denetim/ (YAMA adli)            : %d" % len(denetim_bekleyen))

    kullanilan = {}
    for f in data_bekleyen:
        for k in js_kimlikleri(os.path.join(data_dir, f)):
            kullanilan.setdefault(k, set()).add("data/" + f)
    for f in denetim_bekleyen:
        for k in js_kimlikleri(os.path.join(denetim_dir, f)):
            kullanilan.setdefault(k, set()).add("denetim/" + f)

    print("")
    print("=" * 74)
    print("PAYDA — bekleyen yamalarin KULLANDIGI benzersiz kimlik: %d"
          % len(kullanilan))
    print("=" * 74)

    # --- iki eksende de hesapla ---
    ham_renksiz = sorted(k for k in kullanilan if k not in boyali)
    dolayli_renksiz = sorted(
        k for k in kullanilan
        if harita.get(k, k) not in boyali and k not in boyali)

    print("   HAM  (`id` ile)                 renksiz: %d" % len(ham_renksiz))
    print("   DOLAYLAMALI (`harita:` ile)     renksiz: %d" % len(dolayli_renksiz))
    print("   fark (dolaylama sayesinde kurtulan): %d"
          % (len(ham_renksiz) - len(dolayli_renksiz)))
    kurtulan = sorted(set(ham_renksiz) - set(dolayli_renksiz))
    if kurtulan:
        print("   kurtulanlar:")
        for k in kurtulan:
            print("      %-30s -> harita:%s" % (k, harita.get(k)))

    print("")
    print("=" * 74)
    print("RENKSIZ KIMLIKLER (dolaylamali) — %d" % len(dolayli_renksiz))
    print("=" * 74)
    kunyeli = kunyesiz = 0
    kayit = []
    for k in dolayli_renksiz:
        var = k in kunye_id
        if var:
            kunyeli += 1
        else:
            kunyesiz += 1
        dosyalar = sorted(kullanilan[k])
        kayit.append({"kimlik": k, "kunye_var": var,
                      "harita_anahtari": harita.get(k, k),
                      "dosya": dosyalar})
        print("   %-32s kunye:%-5s  %d dosya  %s"
              % (k, "VAR" if var else "🔴YOK", len(dosyalar),
                 ", ".join(x.split("/")[-1] for x in dosyalar[:3])))
    print("")
    print("   kunyesi VAR : %d      kunyesi YOK : %d" % (kunyeli, kunyesiz))

    cikti = os.path.join(KOK, "denetim", "OLCUM-SINIR-KAFRIKA-RENKSIZ-0907.json")
    with io.open(cikti, "w", encoding="utf-8") as f:
        f.write(json.dumps({
            "_NOT": "Renksiz kimlik olcumu. Kaynak: BEKLEYEN yamalarin "
                    "kullandigi d:/kid: kimlikleri. Regex ile cikarildi "
                    "(dosyalar farkli bicimlerde) ⇒ sayilar UST SINIRDIR.",
            "boyalar": len(boyali),
            "payda_kullanilan_kimlik": len(kullanilan),
            "renksiz_ham": len(ham_renksiz),
            "renksiz_dolaylamali": len(dolayli_renksiz),
            "bekleyen_dosya": {"data": data_bekleyen, "denetim": denetim_bekleyen},
            "renksiz": kayit,
        }, ensure_ascii=False, indent=1))
    print("")
    print("yazildi: %s" % cikti)
    print("")
    print("--oner icin virgullu liste:")
    print(",".join(k for k in dolayli_renksiz))
    return 0


if __name__ == "__main__":
    sys.exit(main())
