# KRONO-DOGU-ISLAM-0929 — ikinci geçiş: TDV YER maddelerinden çıkan günler (ilk geçişte yalnız hânedan/hükümdar
# maddeleri taranmıştı). Var olan `gun:` değerini ve gerekirse `t`yi DEĞİŞTİRİR, `kaynak`a ek düşer.
# Kullanım: py denetim/ARAC-KRONO-DOGU-ISLAM-0929-YAMA2.py [--uygula]
import json, re, sys, os, io
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

YAMA = [
    # (dosya, eski t, b başı, yeni t, yeni gun, kaynak eki)
    ("kronoloji_iran.js", "1387-01-01", "İsfahan katliamı", "1387-11-18",
     "6 Zilkade 789 / 18 Kasım 1387 (TDV `isfahan`, Hâfız-ı Ebrû'ya dayanarak)",
     "isfahan (TDV: \"Timur'un emriyle 6 Zilkade 789'da (18 Kasım 1387) 50.000 kişiyi kılıçtan geçirdiği rivayet edilir\")"),
    ("kronoloji_iran_ardillari.js", "1387-01-01", "Timur İsfahan'da katliam", "1387-11-18",
     "6 Zilkade 789 / 18 Kasım 1387 (TDV `isfahan`) — ilk geçişte `muzafferiler` yalnız yıl verdiği için yıla indirilmişti; yer maddesi günü veriyor",
     "isfahan (TDV: \"6 Zilkade 789'da (18 Kasım 1387)\")"),
    ("kronoloji_safevi.js", "1504-06-01", "Kâşân ve Yezd'in ilhakı", "1504-12-06",
     "Yezd'e giriş: 28 Cemâziyelâhir 910 / 6 Aralık 1504 (TDV `yezd`) · Kâşân için TDV gün vermiyor · eski t 1504-06-01 Iranica'ya dayanıyordu, doğrulanamadı; TDV esas (CLAUDE.md §4)",
     "yezd (TDV: \"Şah İsmâil 28 Cemâziyelâhir 910 (6 Aralık 1504) tarihinde bir aylık bir kuşatmanın ardından şehre girdi\")"),
    ("kronoloji_misir.js", "1798-07-01", "Napolyon'un Mısır'ı işgali", None,
     "Temmuz 1798 — ay hassasiyeti (TDV `misir`: \"Fransızlar'ın Temmuz 1798'deki işgali\") · ⚠️ TDV `iskenderiye` İskenderiye'nin alınışını \"30 Haziran 1798\" veriyor — TDV içi ay farkı, t değiştirilmedi (çekirdek olaylar.js ile aynı gün)",
     None),
]


def js(s):
    return json.dumps(s, ensure_ascii=False)


def main():
    uygula = "--uygula" in sys.argv
    for f, t, bbas, yt, gun, kek in YAMA:
        yol = os.path.join(KOK, "data", f)
        src = io.open(yol, encoding="utf-8").read()
        rx = re.compile(r't:\s*"%s"\s*,\s*b:\s*"((?:[^"\\]|\\.)*)"' % re.escape(t))
        hit = [m for m in rx.finditer(src) if json.loads('"' + m.group(1) + '"').startswith(bbas)]
        if len(hit) != 1:
            print("BULUNAMADI/ÇOK", f, t, bbas, len(hit)); continue
        m = hit[0]
        son = src.find("\n{", m.start() + 2); son = len(src) if son < 0 else son
        blok = src[m.start():son]
        yeni = blok
        if yt:
            yeni = yeni.replace('t:"%s"' % t, 't:"%s"' % yt, 1)
        gm = re.search(r'gun:\s*"((?:[^"\\]|\\.)*)"', yeni)
        yeni = yeni[:gm.start()] + "gun:" + js(gun) + yeni[gm.end():] if gm else yeni
        if kek:
            km = re.search(r'kaynak:\s*"((?:[^"\\]|\\.)*)"', yeni)
            ek = json.loads('"' + km.group(1) + '"') + " · " + kek
            yeni = yeni[:km.start()] + "kaynak:" + js(ek) + yeni[km.end():]
        print("OK", f, t, "→", yt or t, bbas)
        src = src[:m.start()] + yeni + src[son:]
        if uygula:
            io.open(yol, "w", encoding="utf-8", newline="").write(src)


if __name__ == "__main__":
    main()
