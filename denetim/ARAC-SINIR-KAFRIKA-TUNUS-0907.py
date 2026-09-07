# -*- coding: utf-8 -*-
"""KALEM Ⓑ — Tunus'un adsız `v:` dönemleri · SINIR-KAFRIKA-0907

Öngörü ÖNCE yazıldı: `denetim/ONGORU-SINIR-KAFRIKA-TUNUS-0907.json`.
`data/` DONUK (koşu 8) ⇒ YALNIZ OKUR.

🔴 Ⓐ'NIN DERSİ UYGULANIYOR: önce BEYAN aranır, sonra kusur ilan edilir.
   Ⓐ'da `9999`u nadir olduğu için kusur sandım; tasarım yapan şey
   nadirlik değil BEYANDI.
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402


def main():
    Y = girdi.yukle()
    print("AN: (disk) — bekleyen yamalar UYGULANMADI. Sayilar bu ana ait.")
    print("")

    # --- ① kuresel adsiz `v:` donemleri ---
    print("=" * 74)
    print("① KURESEL `v:` DAGILIMI")
    print("=" * 74)
    top = kid_var = k_var_kid_yok = adsiz = 0
    adsiz_kayit = []
    for y in Y:
        for p in (y.get("v") or []):
            top += 1
            kid = p.get("kid")
            k = p.get("k")
            if kid:
                kid_var += 1
            elif k:
                k_var_kid_yok += 1
            else:
                adsiz += 1
                adsiz_kayit.append((y, p))
    print("   `v:` donemi TOPLAM        : %d" % top)
    print("   kid VAR                   : %d" % kid_var)
    print("   kid yok ama k VAR         : %d" % k_var_kid_yok)
    print("   NE k NE kid (ADSIZ)       : %d" % adsiz)

    # --- ② adsizlar hangi dosyada / nerede ---
    print("")
    print("=" * 74)
    print("② ADSIZLAR NEREDE")
    print("=" * 74)
    dosya = {}
    for y, p in adsiz_kayit:
        dosya[y.get("_kaynak")] = dosya.get(y.get("_kaynak"), 0) + 1
    for d, n in sorted(dosya.items(), key=lambda x: -x[1]):
        print("   %-40s %d" % (d, n))

    # Tunus kutusu (kabaca) — NE poligonu yerine kutu, ucuz ve yeterli
    tun = [(y, p) for y, p in adsiz_kayit
           if 30.0 <= y["lat"] <= 37.6 and 7.5 <= y["lon"] <= 11.6]
    print("")
    print("   Tunus kutusunda (30,0-37,6 K / 7,5-11,6 D): %d" % len(tun))
    print("   Tunus DISINDA                              : %d"
          % (len(adsiz_kayit) - len(tun)))
    if len(adsiz_kayit) - len(tun):
        print("   --- Tunus disindakiler ---")
        for y, p in adsiz_kayit:
            if (y, p) not in tun:
                print("      %-24s %7.3f %8.3f  %s -> %s  [%s]"
                      % (y["ad"], y["lat"], y["lon"], p.get("f"), p.get("t"),
                         y.get("_kaynak")))

    # --- ③④⑤ alanlar ---
    print("")
    print("=" * 74)
    print("③④⑤ ADSIZ KAYITLARIN ALANLARI")
    print("=" * 74)
    kd_var = m_var = isg_var = 0
    isg_kimlik = {}
    donem_bicim = {}
    for y, p in adsiz_kayit:
        if y.get("kd"):
            kd_var += 1
        if y.get("m"):
            m_var += 1
        ig = y.get("isg") or []
        if ig:
            isg_var += 1
            for q in ig:
                isg_kimlik[q.get("d") or q.get("kid")] = \
                    isg_kimlik.get(q.get("d") or q.get("kid"), 0) + 1
        donem_bicim[(p.get("f"), p.get("t"), p.get("statu"))] = \
            donem_bicim.get((p.get("f"), p.get("t"), p.get("statu")), 0) + 1
    n = len(adsiz_kayit)
    print("   `kd:` alani DOLU     : %d / %d" % (kd_var, n))
    print("   `m:`  alani DOLU     : %d / %d   (Degismez 3'un evreni)" % (m_var, n))
    print("   `isg:` ortusu VAR    : %d / %d" % (isg_var, n))
    print("   isg kimlikleri       : %s" % isg_kimlik)
    print("")
    print("   benzersiz (f, t, statu) demeti: %d" % len(donem_bicim))
    for k, v in sorted(donem_bicim.items(), key=lambda x: -x[1])[:6]:
        print("      %s  x%d" % (str(k), v))

    # --- ⑥ BEYAN ARANIYOR (Ⓐ'nin dersi) ---
    print("")
    print("=" * 74)
    print("⑥ BEYAN VAR MI — once BUNU sor")
    print("=" * 74)
    beyan = 0
    for y, p in adsiz_kayit:
        for alan in ("neden", "bos", "not"):
            if y.get(alan):
                beyan += 1
                print("   %-24s %s: %s" % (y["ad"], alan, str(y[alan])[:150]))
                break
    print("   yuklenmis kayitta beyan alani DOLU: %d / %d" % (beyan, n))

    # ham dosyada girdi.py'nin okumadigi alanlar olabilir
    print("")
    print("   --- ham dosya taramasi (girdi.py okumasa da gorunsun) ---")
    for d in dosya:
        yol = os.path.join(KOK, "data", d)
        if not os.path.exists(yol):
            print("   %-40s DOSYA YOK" % d)
            continue
        s = io.open(yol, encoding="utf-8", errors="replace").read()
        for alan in ("neden", "not", "kd"):
            print("   %-40s `%s:` gecis %d"
                  % (d, alan, len(re.findall(r'\b' + alan + r'\s*:', s))))
        # dosya basindaki yorum blogu bir beyan tasiyor olabilir
        bas = s[:1400]
        yorumlar = [x.strip() for x in re.findall(r"//[^\n]*", bas)]
        if yorumlar:
            print("   --- %s dosya BASI yorumlari ---" % d)
            for x in yorumlar[:14]:
                print("      %s" % x[:120])
    return 0


if __name__ == "__main__":
    sys.exit(main())
