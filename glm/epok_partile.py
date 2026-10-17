# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P — inceleme (review) partileri üretir.

epok_asamaN.jsonl → glm/epok_incele/part-XX.txt: madde BULUNMUŞ noktalar
(http=200, gövde > 0) kompakt bloklar halinde. Kovası otomatik olanlar
(④/⑤) partiye GİRMEZ — yalnız özet sayılır. Gövde 0'lı 200'ler 'BOZUK'
işaretlenir (düzeltme-geçişi adayı).

kullanım: py glm/epok_partile.py --asama 1 --boyut 70 [--parca 3]
"""
import sys, io, os, json, argparse, math
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def kes(c, n=260):
    return c if len(c) <= n else c[:n - 1] + "…"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--asama", type=int, required=True)
    ap.add_argument("--boyut", type=int, default=70)
    ap.add_argument("--parca", type=int, default=0, help="yalnız bu parti (1-tabanlı)")
    a = ap.parse_args()

    src = os.path.join(KOK, "glm", f"epok_asama{a.asama}.jsonl")
    recs = [json.loads(l) for l in io.open(src, encoding="utf-8")]
    sayi = {"200": 0, "302": 0, "404": 0, "000": 0, "503": 0, "BOZUK": 0}
    incelemelik = []
    for r in recs:
        h = str(r.get("http", ""))
        if h == "200":
            if (r.get("govde_uzunluk") or 0) == 0:
                sayi["BOZUK"] += 1
                continue
            sayi["200"] += 1
            incelemelik.append(r)
        elif h.startswith("000"):
            sayi["000"] += 1
        elif h.startswith("5"):
            sayi["503"] += 1
        elif h in ("302", "404"):
            sayi[h] += 1
        else:
            sayi.setdefault(h[:12] + "…", 0)
            sayi[h[:12] + "…"] += 1
    npart = math.ceil(len(incelemelik) / a.boyut)
    dizin = os.path.join(KOK, "glm", "epok_incele")
    os.makedirs(dizin, exist_ok=True)
    print(f"kayıt {len(recs)} · madde 200 {sayi['200']} · 302 {sayi['302']} · "
          f"404 {sayi['404']} · 000 {sayi['000']} · 503 {sayi['503']} · BOZUK {sayi['BOZUK']} "
          f"· parti {npart} × {a.boyut}")
    for i in range(npart):
        no = i + 1
        if a.parca and no != a.parca:
            continue
        parc = incelemelik[i * a.boyut:(i + 1) * a.boyut]
        yol = os.path.join(dizin, f"asama{a.asama}-part-{no:02d}.txt")
        with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
            for j, r in enumerate(parc, 1):
                f.write(f"##{(i*a.boyut)+j:04d} {r['ad']} [{r['bolge']}] · "
                        f"SAHIP={r['sahip_id']} ({kes(r['sahip_ad'],36)}) · "
                        f"{r['slug']} · yer={int(bool(r.get('yer_ipucu')))}\n")
                for y, c in (r.get("c_yil") or [])[:8]:
                    f.write(f"  Y[{y}] {kes(c)}\n")
                for y, c in (r.get("c_ek") or [])[:4]:
                    f.write(f"  E[{y}] {kes(c)}\n")
                f.write("\n")
        print("->", yol, f"({len(parc)} nokta)")


if __name__ == "__main__":
    main()
