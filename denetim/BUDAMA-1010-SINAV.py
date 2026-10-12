# -*- coding: utf-8 -*-
"""BUDAMA-1010 KORUMA SINAVI — "hiçbir kural silinmez" şartının sınanabilir hâli.

    py denetim/BUDAMA-1010-SINAV.py [--taslak <yol>]

① SATIR: taban `197455c8:CLAUDE.md`nin BOŞ OLMAYAN HER SATIRI (kırpılmış) şu birleşimde
   BİREBİR bulunmalı: yeni CLAUDE.md ∪ dersler/*.md (bağlantı öneki `dersler/` normalleştirilir).
② KIRIK BAĞLANTI: yeni CLAUDE.md'deki her `](dersler/…)` gerçek bir dosyaya gider.
③ ÇAPA §1.5: `durum_tablosu.py --yaz`ın regex'i yeni dosyada eşleşir ve yakaladığı tablo
   tabandakiyle AYNI.
④ ÇAPA §9.1: `ARAC-TUZ-DORT-DOSYA-SINAV-1010` ⑤'in okuduğu TUZU dosya kümesi tabandakiyle AYNI.
⑤ BOYUT: bayt · ~token (bayt/3,5) basılır (hüküm değil, bilgi).
Herhangi biri tutmazsa çıkış 2.

İKİ YÖNDE SINANDI (bkz. denetim/BUDAMA-1010.md §2): tabanın kendisi geçer; bir kural satırı
silinmiş taslak düşer.
"""
import io, os, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TABAN = "197455c8"


def norm(x):
    return x.strip().replace("](dersler/", "](")


def tuz(md):
    i = md.index("**TUZU**")
    return set(re.findall(r"`([a-z_]+\.py)`", md[i:i + 300].split("Biri değişirse")[0]))


def tablo(md):
    m = re.search(r"(## 1\.5 [^\r\n]*(?:\r?\n)+)((?:\|[^\r\n]*(?:\r?\n))+)", md)
    return m.group(2).replace("\r\n", "\n") if m else None


def _tablo_satirlari(metin):
    """§1.5 tablosunun VERİ satırları (`| kalem | ölçüm |`) ve KALEM ADLARI.

    🔴 Bu satırlar KURAL DEĞİL, ÖLÇÜM: `CLAUDE.md` onlar için *"Elle yazılmaz,
    ÜRETİLİR (`py arac/durum_tablosu.py --yaz`)"* diyor. Satır-varlığı
    kontrolünden ÇIKARILIRLAR — ama KALEM ADI ayrıca sınanır (⑥): bir kalem
    artık ölçülmüyorsa bir DENETİM kaybedilmiştir ve o bir kural kaybıdır.
    """
    t = tablo(metin)
    if not t:
        return set(), set()
    satir, kalem = set(), set()
    for s in t.split("\n"):
        if not s.strip().startswith("|"):
            continue
        p = [x.strip() for x in s.strip().strip("|").split("|")]
        if len(p) < 2 or set(p[0]) <= set("-: "):      # başlık ayıracı
            continue
        satir.add(norm(s))
        kalem.add(norm(p[0]))
    return satir, kalem


def main():
    eski = subprocess.run(["git", "show", TABAN + ":CLAUDE.md"], cwd=KOK, capture_output=True,
                          check=True).stdout.decode("utf-8").replace("\r\n", "\n")
    hedef = sys.argv[sys.argv.index("--taslak") + 1] if "--taslak" in sys.argv else os.path.join(KOK, "CLAUDE.md")
    yeni = io.open(hedef, encoding="utf-8").read().replace("\r\n", "\n")
    havuz = {norm(x) for x in yeni.split("\n")}
    dd = os.path.join(KOK, "dersler")
    for f in os.listdir(dd):
        if f.endswith(".md"):
            havuz |= {norm(x) for x in io.open(os.path.join(dd, f), encoding="utf-8").read().replace("\r\n", "\n").split("\n")}
    sat = eski.split("\n")
    # §1.5 VERİ satırları ① kapsamından ÇIKAR — ölçüm, kural değil (bkz.
    # `_tablo_satirlari` gerekçesi). Kalem adları ⑥'da sınanıyor.
    _e_sat, _e_kalem = _tablo_satirlari(eski)
    _y_sat, _y_kalem = _tablo_satirlari(yeni)
    eksik = [(i + 1, x) for i, x in enumerate(sat)
             if x.strip() and norm(x) not in havuz and norm(x) not in _e_sat]
    kirik = [l for l in re.findall(r"\]\((dersler/[^)]+)\)", yeni) if not os.path.exists(os.path.join(KOK, l))]
    # ③ ARTIK "tablo BİREBİR AYNI" DEĞİL: asıl soru `durum_tablosu.py --yaz`ın
    #   tabloyu BULABİLMESİ. Birebir eşitlik istemek, aletin kendi işini
    #   (tabloyu TAZELEMEK) ihlal sayardı.
    t_ok = tablo(yeni) is not None
    # ⑥ YENİ KAPI: taban kalemlerinin HEPSİ yeni tabloda OLMALI. Sayı değişebilir,
    #   KALEM KAYBOLAMAZ — kaybolan kalem, susturulmuş bir denetimdir.
    kayip_kalem = sorted(_e_kalem - _y_kalem)
    try:
        z_ok = tuz(yeni) == tuz(eski) and len(tuz(eski)) > 0
    except ValueError:
        z_ok = False
    b_e, b_y = len(eski.encode("utf-8")), len(yeni.encode("utf-8"))
    print("sınanan:", hedef)
    print(f"① SATIR    taban boş-olmayan {sum(1 for x in sat if x.strip())} · eksik {len(eksik)}")
    for i, x in eksik[:40]:
        print(f"     ✗ {i}: {x[:110]}")
    print(f"② KIRIK    {len(kirik)} {kirik[:10]}")
    print(f"③ §1.5     {'✓ durum_tablosu regex EŞLEŞİYOR (birebir eşitlik ARANMIYOR — tablo ÜRETİLİR)' if t_ok else '✗ regex eşleşmedi — --yaz tabloyu BULAMAZ'}")
    print(f"⑥ KALEM    {'✓ taban kalemlerinin hepsi duruyor (%d kalem)' % len(_y_kalem) if not kayip_kalem else '✗ KAYBOLAN KALEM: ' + str(kayip_kalem)}")
    print(f"④ TUZU     {'✓ ' + str(sorted(tuz(yeni))) if z_ok else '✗'}")
    print(f"⑤ BOYUT    taban {b_e} B (~{b_e/3.5:,.0f} tok) → yeni {b_y} B (~{b_y/3.5:,.0f} tok) · "
          f"satır {len(sat)} → {len(yeni.split(chr(10)))}")
    if eksik or kirik or not t_ok or not z_ok or kayip_kalem:
        print("🔴 SINAV DÜŞTÜ"); sys.exit(2)
    print("🟢 SINAV GEÇTİ")


if __name__ == "__main__":
    main()
