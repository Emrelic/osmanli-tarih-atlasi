# -*- coding: utf-8 -*-
# NOKTA-KAFKAS-0077 — TDV maddelerinde tarih cümleleri (salt okur)
# kullanım: py denetim/NOKTA-KAFKAS-0077-tdv.py slug1,slug2 [desen]
import sys, re, html, urllib.request, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ONB = os.path.join(os.path.dirname(os.path.abspath(__file__)), "NOKTA-KAFKAS-0077-tdv-onbellek")
os.makedirs(ONB, exist_ok=True)
SLUGLAR = sys.argv[1].split(",")
DESEN = re.compile(sys.argv[2] if len(sys.argv) > 2 else r"19(1[4-9]|2[0-3])")


class Yonlendirme(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None  # 302 = ölü slug (CLAUDE.md §4 tuzak ①) — izlenmez


ac = urllib.request.build_opener(Yonlendirme)
for s in SLUGLAR:
    yol = os.path.join(ONB, s.replace("/", "_") + ".html")
    if not os.path.exists(yol):
        req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + s,
                                     headers={"User-Agent": "Mozilla/5.0"})
        try:
            r = ac.open(req, timeout=40)
            open(yol, "wb").write(r.read())
        except urllib.error.HTTPError as e:
            print(f"## {s}: HTTP {e.code} (ölü slug / yönlendirme)")
            continue
        except Exception as e:
            print(f"## {s}: TAŞIMA HATASI {e}")
            continue
    t = open(yol, encoding="utf-8", errors="replace").read()
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    t = re.sub(r"\s+", " ", t)
    i = t.find("Kopyalama metni")
    govde = t[i:] if i > 0 else t
    cumleler = re.split(r"(?<=[.;])\s", govde)
    isabet = [c for c in cumleler if DESEN.search(c)]
    print(f"## {s}: gövde {len(govde)} kr · {len(isabet)} cümle")
    for c in isabet[:40]:
        print("   ·", c[:500])
