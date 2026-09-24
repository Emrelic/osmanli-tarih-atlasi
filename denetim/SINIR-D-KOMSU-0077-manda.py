# -*- coding: utf-8 -*-
"""SINIR-D-KOMSU-0077 — ORTADOĞU'nun devrettiği manda kayıtlarını (M-5080, hüküm B) KOMSU dosyasına uygular.

Girdi: denetim/SINIR-D-ORTADOGU-0077-komsu-devir.json (5 kayıt, hepsi C). Devralınan hüküm kaynak DEĞİLDİR
(D207); bu oturum şunları KENDİ kaynağıyla doğruladı (denetim/SINIR-D-KOMSU-0077.md §3c):
  · 1920 Sözleşmesi md.1 metni — FRUS 1921 c.I belge 113 (Ebu Kemal → Imtar düz hattı, Nasib güneyi, Semakh)
  · Ukayr md.1(a)(b)(d) — IBS 111 s.11-12 (işaretleme 'has not been accomplished' ⇒ C)
  · çıpalar — GeoNames allCountries (Cümeyme, Akabe, Useymîn, Cedîdetü Ar'ar, Amgar, Ebu Kemal, Imtan birebir)
  · bugünkü çizginin 1920 düz hattına uzaklığı — denetim/SINIR-D-KOMSU-0077-manda-olc.py
Değiştirilen YOK kayıtları SİLİNMEZ, yerine hatlı ardılları konur (aynı f/t; id değişir, eski id not'ta durur):
  d1923-iq-sy-DEGISTI      → d1923-iq-sy-1920
  d1923-sy-jo-DEGISTI      → d1923-sy-jo-1920
  d1923-iq-necd-BILINMIYOR → d1923-iq-necd-ukayr + -tarafsiz-kuzey + -tarafsiz-guney
Koşu: py denetim/SINIR-D-KOMSU-0077-manda.py [--yaz]
"""
import io, json, sys

sys.stdout.reconfigure(encoding="utf-8")
DOSYA = "data/d_sinirlar_komsu.js"
DEVIR = json.load(io.open("denetim/SINIR-D-ORTADOGU-0077-komsu-devir.json", encoding="utf-8"))
DEVIR = {k["id"]: k for k in DEVIR}
ESLEME = {
    "d1923-iq-sy-DEGISTI": ["d1923-iq-sy-1920"],
    "d1923-sy-jo-DEGISTI": ["d1923-sy-jo-1920"],
    "d1923-iq-necd-BILINMIYOR": ["d1923-iq-necd-ukayr", "d1923-iq-necd-tarafsiz-kuzey", "d1923-iq-necd-tarafsiz-guney"],
}
DOGRULAMA = {
    "d1923-iq-sy-1920": {"ad": "FRUS 1921 c.I, belge 113 (1920 Sözleşmesi metni)", "tur": "resmî yayın",
                         "url": "https://history.state.gov/historicaldocuments/frus1921v01/d113",
                         "alinti": "thence a straight line to Imtar to the south of Jebul Druse"},
    "d1923-sy-jo-1920": {"ad": "FRUS 1921 c.I, belge 113 (1920 Sözleşmesi metni)", "tur": "resmî yayın",
                         "url": "https://history.state.gov/historicaldocuments/frus1921v01/d113",
                         "alinti": "then a line to the south of Nasib on the Hedjaz Railway"},
}
OLCU = {
    "d1923-iq-sy-1920": "KOMSU ölçüsü: bugünkü IRQ–SYR çizgisi Fırat güneyinde 1920 Ebu Kemal–Imtar doğrusundan medyan 1,3 · en çok 7,1 km (22 köşe); Fırat geçişi Ebu Kemal'den 6,9 km",
    "d1923-sy-jo-1920": "KOMSU ölçüsü: bugünkü JOR–SYR çizgisi 1920 düz hatlarından — 36,9°D doğusu medyan 5,8/en çok 8,5 km · Imtar–Nasib 12,2/14,1 km · Nasib batısı (Nasib–Semakh doğrusuna) 6,5/10,0 km",
}

satirlar = io.open(DOSYA, encoding="utf-8").read().split("\n")
cikti, bulunan = [], 0
for s in satirlar:
    if s.startswith('{"id":"'):
        kid = s[7:s.index('"', 7)]
        if kid in ESLEME:
            eski = json.loads(s.rstrip(","))
            assert eski["sinif"] == "YOK", kid
            bulunan += 1
            for yid in ESLEME[kid]:
                k = dict(DEVIR[yid])
                assert k["sinif"] == "C" and k.get("hat") and len(k["hat"]) >= 2, yid
                assert k["f"] == eski["f"] and k["t"] == eski["t"], (yid, k["f"], eski["f"], k["t"], eski["t"])
                assert set(k["taraflar"]) == set(eski["taraflar"]), yid
                assert k["sol_taraf"] in k["taraflar"], yid
                if yid in DOGRULAMA:
                    k["dayanak"] = k["dayanak"] + [DOGRULAMA[yid]]
                if yid in OLCU:
                    k["kesinlik_not"] = k["kesinlik_not"] + " · " + OLCU[yid]
                k["degisti"] = eski.get("degisti")
                k["not"] = (k.get("not") or "") + " · YOK→C (SINIR-D-KOMSU-0077, 24 Eyl 2026; geometri SINIR-D-ORTADOGU-0077 devri M-5080, doğrulama KOMSU) · önceki id: " + kid
                cikti.append(json.dumps(k, ensure_ascii=False, separators=(",", ":")) + ",")
                print("%-30s → %-32s C  %6.1f km  sol=%s  nokta=%d" % (kid, yid, k["uzunluk_km"], k["sol_taraf"], len(k["hat"])))
            continue
    cikti.append(s)
print("değiştirilen YOK:", bulunan, "/", len(ESLEME))
assert bulunan == len(ESLEME)
if "--yaz" in sys.argv:
    io.open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(cikti))
    print("yazıldı:", DOSYA)
