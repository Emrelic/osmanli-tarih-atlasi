# -*- coding: utf-8 -*-
"""ARAC-ODAK-Z8-GECIS-1006 — Z8 (UMIT-W57) tavanını ELLE kurar ve GEÇİŞ dosyasını yazar.

🔴 NİÇİN `--tavan-yaz` DEĞİL: koordinatör kararı (UMIT İRTİBAT, 6 Ekim 2026) —
   tavan ELLE yazılır, her kimliğin hangi kovadan hangisine geçtiği ADIYLA
   gösterilir (`CLAUDE.md §3.4 ⓪`). `odak_olc.tavan_yaz` ikinci kilidi
   (kapıda ✗ varken REDDET) burada doğru olarak engel olur: eski tavan ESKİ
   evrenin listesidir, yeni evrende "gerileme" görünmesi beklenen şeydir.
   Bu araç o kilidi AŞMAZ, kendi işini yapar: ölçer, karşılaştırır, ADIYLA yazar.

GİRDİ   --eski <yol>    W39d kimlik tavanı (ESKİ = disk evreni); verilmezse canlı
                        `denetim/ODAK-TAVAN.json`. Z8 indikten SONRA canlı tavan
                        YENİdir ⇒ eskiyi `git show <taban>:denetim/ODAK-TAVAN.json`
                        ile ver.
        + bugünkü ölçüm (`odak_olc.olc()`, YENİ = tarayıcı evreni)
ÇIKTI   --tavan <yol>   yeni tavan (W39d biçimi, `odak_olc._json_yaz`)
        --gecis <yol>   TSV: kova · yön · kimlik · eski dosya · yeni yol/sınıf/dal/dosya · neden
        stdout          kova kova özet (rapora girer)

    py denetim/ARAC-ODAK-Z8-GECIS-1006.py [--eski <yol>] --tavan <yol> --gecis <yol>
`--tavan` canlı dosyayı GÖSTERİRSE yazar — bu, tavanın ELLE inişidir; araç
`evren`i GENİŞLETMEZ (eskisinden aynen kopyalar). Commit'ten HEMEN ÖNCE
yeniden ölçmek için `--tavan`ı geçici bir yola ver ve canlı tavanla `cmp` et.
"""
import io
import json
import os
import subprocess
import sys
import tempfile
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import odak_olc as OO                                        # noqa: E402


def sor(kimlikler):
    """Eski listedeki kimlikleri YENİ evrende sorar (`odak_cozum.js` `G.sor`)."""
    ek = OO.etiket_kaynak()
    q = []
    for k in sorted(kimlikler):
        t, _, b = k.partition("|")
        q.append({"t": t, "b": b})
    fd, yol = tempfile.mkstemp(suffix=".json", text=True)
    os.close(fd)
    try:
        io.open(yol, "w", encoding="utf-8").write(json.dumps(
            {"kok": KOK.replace("\\", "/"), "etiket_kaynak": ek,
             "disk": OO.disk_dosyalari(), "sor": q}, ensure_ascii=False))
        r = subprocess.run(["node", OO.COZUCU, yol], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
    finally:
        os.unlink(yol)
    D = json.loads(r.stdout)
    if D.get("hata"):
        raise SystemExit("ÖLÇÜLEMEDİ: " + D["hata"])
    cev = {}
    for s in D["soru"]:
        k = s["soru"]["t"] + "|" + s["soru"]["b"]
        # `b` İÇERİR araması geniş: yalnız TAM kimliği tutanı al
        cev[k] = [c for c in s["cevap"] if c.get("k") == k]
    return cev


def durum(c):
    if not c:
        return "YOK", "", "", ""
    x = c[0]
    dal = (x.get("sekme") or {}).get("dal", "") if x.get("sekme") else ""
    return x["yol"], x.get("sinif") or "", dal, x["dosya"]


def main():
    tav = OO._arg("--tavan")
    gec = OO._arg("--gecis")
    if not tav or not gec:
        print(__doc__)
        return 2
    ey = OO._arg("--eski")
    eski = json.loads(io.open(ey, encoding="utf-8").read()) if ey else OO.tavan_oku()
    if not eski or "odaksiz_kimlik" not in eski:
        print("🔴 eski tavan kimlik listesi değil")
        return 2
    if "z8_not" in eski:
        print("🔴 eski tavan ZATEN Z8 tavanı — W39d tavanını `--eski` ile ver")
        return 2
    D = OO.olc()
    if D.get("hata"):
        print("🔴 ÖLÇÜLEMEDİ:", D["hata"])
        return 2
    T, beyan_yab, kusur = OO.ozetle(D)
    K = OO.kimlik_ozetle(D)
    if K["hata"] or K["sekme_olculemedi"]:
        print("🔴 ÖLÇÜLEMEDİ — dondurulmaz:", K["hata"], K["sekme_olculemedi"])
        return 2
    ev = set(eski["evren"])

    # ---- YENİ listeler (tavan_yaz ile AYNI biçim; evren ESKİDEN aynen)
    od, yk, ss, ok, yb, cb = [], [], [], [], [], []
    for d in D["dosyalar"]:
        ad = d["dosya"]
        for x in d.get("odaksiz") or []:
            (od if ad in ev else yk).append({"k": x["k"], "d": ad})
        for x in d.get("sekme_sessiz") or []:
            ss.append({"k": x["k"], "kunye": x["kunye"], "d": ad})
        for x in d.get("okunmayan") or []:
            ok.append({"k": x["k"], "kunye": x["kunye"], "d": ad})
        for x in d.get("beyanli") or []:
            (cb if x.get("yol") == "OLAYLAR" else yb).append({"k": x["k"], "d": ad})
    srt = lambda L: sorted(L, key=lambda x: (x["k"], x.get("kunye", ""), x["d"]))  # noqa: E731
    tv = dict(eski)
    tv.update({
        "odaksiz": len(od), "odaksiz_kimlik": srt(od),
        "yeni_kapsam_kimlik": srt(yk),
        "sekme_sessiz": len(ss), "sekme_sessiz_kimlik": srt(ss),
        "sekme_okunmayan": len(ok), "sekme_okunmayan_kimlik": srt(ok),
        "beyanli_yabanci": len(yb), "yabanci_beyanli_kimlik": srt(yb),
        "beyanli_cekirdek": len(cb), "cekirdek_beyanli_kimlik": srt(cb),
        "konumlu": T["KONUMLU"], "kutulu": T["KUTULU"], "madde": sum(T.values()),
        "bilinen_kusur": [{"k": x["k"], "t": x["t"], "alan": x["alan"],
                           "deger": x["deger"], "niye": x["niye"]} for x in kusur],
        "evren_ozet": "".join(sorted(K["ozet"])),
        "z8_not": (
            "UMIT-W57 Z8 (6 Ekim 2026): kimlik listeleri TARAYICI evreninde yeniden "
            "olculdu (odak_cozum.js index.html'in betiklerini kosturur). `d` = maddenin "
            "tarayicidaki KAYNAK dosyasi; yabanci/cekirdek BEYANLI ayrimi YOLDAN (SEKME/"
            "OLAYLAR); sekme_sessiz ve sekme_okunmayan cifti (kimlik, ILK kunye), tekil. "
            "Tavan ELLE kuruldu (--tavan-yaz DEGIL); her kimligin gecisi "
            "denetim/ODAK-Z8-GECIS-1006.tsv'de ADIYLA."),
    })

    # ---- GEÇİŞ — eski ↔ yeni, kova kova, kimlik kimlik
    def ms(L, iki=False):
        return Counter((x["k"], x["kunye"]) if iki else x["k"] for x in (L or []))
    eski_od = ms(eski.get("odaksiz_kimlik"))
    eski_yk = ms(eski.get("yeni_kapsam_kimlik"))
    eski_ss = ms(eski.get("sekme_sessiz_kimlik"), True)
    eski_yb = ms(eski.get("yabanci_beyanli_kimlik"))
    eski_cb = ms(eski.get("cekirdek_beyanli_kimlik"))
    yeni = {"odaksiz": ms(od), "yeni_kapsam": ms(yk), "sekme_sessiz": ms(ss, True),
            "sekme_okunmayan": ms(ok, True), "yabanci_beyanli": ms(yb), "cekirdek_beyanli": ms(cb)}
    eskiler = {"odaksiz": eski_od, "yeni_kapsam": eski_yk, "sekme_sessiz": eski_ss,
               "sekme_okunmayan": Counter(), "yabanci_beyanli": eski_yb, "cekirdek_beyanli": eski_cb}
    eski_dosya = {}
    for alan in ("odaksiz_kimlik", "yeni_kapsam_kimlik", "sekme_sessiz_kimlik",
                 "yabanci_beyanli_kimlik", "cekirdek_beyanli_kimlik"):
        for x in eski.get(alan) or []:
            eski_dosya.setdefault(x["k"], set()).add(x["d"])
    eozet = eski.get("evren_ozet") or ""
    eozet = {eozet[i:i + 8] for i in range(0, len(eozet), 8)}

    sorulacak = set()
    for kova in eskiler:
        for key in (eskiler[kova] - yeni[kova]):
            sorulacak.add(key[0] if isinstance(key, tuple) else key)
    C = sor(sorulacak)

    satirlar = []
    ozet = Counter()
    for kova in ("odaksiz", "yeni_kapsam", "yabanci_beyanli", "cekirdek_beyanli",
                 "sekme_sessiz", "sekme_okunmayan"):
        e, y = eskiler[kova], yeni[kova]
        for key, n in sorted((e - y).items(), key=lambda r: str(r[0])):
            k = key[0] if isinstance(key, tuple) else key
            kid = key[1] if isinstance(key, tuple) else ""
            yol, sinif, dal, dsy = durum(C.get(k))
            if yol == "YOK":
                neden = "tarayıcıda madde olarak YOK (yüklenmeyen dosya ya da sekmedeki t+b ikizinin kopyası)"
            elif yol == "ACILAMAZ":
                neden = "AÇILAMAZ — künyesiz KRONOLOJI_*/iki parçalı OLAYLAR_*: hiçbir ekranda açılmaz, sayımdan çıktı"
            elif kova in ("odaksiz", "yeni_kapsam") and sinif == "ODAKSIZ":
                neden = "hâlâ ODAKSIZ, öbür odaksız kovada (kaynak dosya %s, evren %s)" % (
                    dsy, "İÇİ" if dsy in ev else "DIŞI")
            elif kova in ("odaksiz", "yeni_kapsam"):
                neden = "sınıf değişti → %s (AD_KONUM havuzu / tarayıcı bağlaması)" % sinif
            elif kova == "yabanci_beyanli" and sinif == "BEYANLI":
                neden = "BEYANLI ama yolu %s — yabancı/çekirdek artık DOSYA ADINDAN değil YOLDAN" % yol
            elif kova in ("yabanci_beyanli", "cekirdek_beyanli"):
                neden = "sınıf değişti → %s" % sinif
            elif kova == "sekme_sessiz" and yol == "SEKME" and dal == "SEKME_SESSIZ":
                neden = "hâlâ SESSİZ ama başka künye çiftinde (tekil sayım: İLK künye %s)" % (
                    (C.get(k) or [{}])[0].get("kunye"))
            elif kova == "sekme_sessiz":
                neden = "sekme dalı → %s%s" % (dal or yol, (" (yol %s)" % yol) if yol != "SEKME" else "")
            else:
                neden = "?"
            if dsy and dsy not in eski_dosya.get(k, ()) and yol not in ("YOK", "ACILAMAZ"):
                # Aynı t+b'nin İKİ kopyası var; tarayıcı İLK yükleneni bağlar
                # (çok taraflı ekleyici t+b ikizini eklemez). Sınıfı o kopya belirler.
                neden += (" · TARAYICININ GÖSTERDİĞİ KOPYA %s (eski ölçü %s kopyasını "
                          "sayıyordu; o kopyadaki odak/beyan alanları ekranda YOK)"
                          % (dsy, ",".join(sorted(eski_dosya.get(k, ())))))
            ozet[(kova, "ÇIKTI", neden.split(" (")[0].split(" —")[0][:60]
                  + (" · başka kopya" if "GÖSTERDİĞİ KOPYA" in neden else ""))] += n
            for _ in range(n):
                satirlar.append([kova, "ÇIKTI", k, kid, ",".join(sorted(eski_dosya.get(k, ()))),
                                 yol, sinif, dal, dsy, neden])
        for key, n in sorted((y - e).items(), key=lambda r: str(r[0])):
            k = key[0] if isinstance(key, tuple) else key
            kid = key[1] if isinstance(key, tuple) else ""
            onceki = [ad for ad, L in eskiler.items() if (key in L)]
            if kova == "sekme_okunmayan":
                neden = "YENİ ALAN — W39d tavanında OKUNMAYAN listesi yoktu"
            elif onceki:
                neden = "eski kovası: %s" % ",".join(onceki)
            elif OO._sha8(k) in eozet:
                neden = "eski evrende VARDI, bu kovada değildi (eski ölçü onu başka sınıfta/dosya adıyla sayıyordu)"
            else:
                neden = "eski DİSK evreninde YOKTU (tarayıcı evreni: künye-içi `devletler.js` / satır içi / paket)"
            ozet[(kova, "GİRDİ", neden.split(" (")[0][:60])] += n
            for _ in range(n):
                satirlar.append([kova, "GİRDİ", k, kid, ",".join(sorted(eski_dosya.get(k, ()))),
                                 "", "", "", "", neden])

    # bilinen kusur
    for x in eski.get("bilinen_kusur") or []:
        c = C.get(x["k"]) or sor({x["k"]}).get(x["k"])
        yol, sinif, dal, dsy = durum(c)
        kus = (c or [{}])[0].get("kusur")
        neden = ("KAPANDI — madde %s/%s, kusur listesi %s: `%s` artık app.js'in GERÇEK "
                 "`adKonumBul` (AD_KONUM) havuzunda çözülüyor; eski araç kendi d/v/s "
                 "süzgeçli havuzunu kuruyordu (W13 O2)" % (yol, sinif, json.dumps(kus), x["deger"])) \
            if c and not kus else "AÇIK — %s" % json.dumps(kus, ensure_ascii=False)
        ozet[("bilinen_kusur", "ÇIKTI" if c and not kus else "KALDI", neden[:60])] += 1
        satirlar.append(["bilinen_kusur", "ÇIKTI" if c and not kus else "KALDI", x["k"],
                         x["alan"] + "=" + str(x["deger"]), "", yol, sinif, dal, dsy, neden])

    io.open(gec, "w", encoding="utf-8", newline="\n").write(
        "kova\työn\tkimlik\tkünye/alan\teski_dosya\tyeni_yol\tyeni_sinif\tyeni_dal\tyeni_dosya\tneden\n"
        + "".join("\t".join(str(v).replace("\t", " ") for v in r) + "\n" for r in satirlar))
    print("ÖZET (kova · yön · neden · adet)")
    for (kova, yon, neden), n in sorted(ozet.items()):
        print("  %-17s %-6s %5d  %s" % (kova, yon, n, neden))
    print()
    for kova in eskiler:
        print("  %-17s eski %5d → yeni %5d" % (kova, sum(eskiler[kova].values()), sum(yeni[kova].values())))
    print("  bilinen_kusur     eski %5d → yeni %5d" % (len(eski.get("bilinen_kusur") or []), len(kusur)))

    OO.TAVAN_YOL = os.path.abspath(tav)
    OO._json_yaz(tv)
    print("\n✓ tavan → %s · geçiş → %s (%d satır)" % (tav, gec, len(satirlar)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
