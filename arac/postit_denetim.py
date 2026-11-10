"""Post-it denetimi (Emre, 10 Kasım 2026) — `/postit-denetim` skill'inin ölçüm betiği.

Açık post-it notlarını (GitHub Issues, etiket harita-notu) bu makinedeki Claude oturum
kayıtlarıyla eşler ve her notu tek kovaya koyar:

  UYUYAN       sıra Claude'da (Emre cevap yazdı) ama sahip oturum Emre'nin cevabından sonra
               hiç çalışmadı → skill o oturumu mesajla uyandırır.
  CALISIYOR    sıra Claude'da, sahip oturum Emre'nin cevabından sonra çalışmış (iş sürüyor).
  BASKA-MAKINE sahip oturum bu makinede yok (KASA/HAVVA…) → buradan dokunulmaz, Emre'ye söylenir.
  SAHIPSIZ     notu alan oturum yok → `/postit` ile alınacak.
  SENDE        sıra Emre'de (son:claude) → Emre'nin cevabı bekleniyor; son Claude yorumunun
               ÖZET'indeki "Senden beklenen" satırı basılır.

Yalnız okur: GitHub'a yazmaz, etiket değiştirmez, oturum başlatmaz/uyandırmaz.
Merkezi izleyici (bekçi) DEĞİLDİR: Emre çağırınca bir kez bakar.

Çıkış: 0 ölçüldü · 2 ölçülemedi (ağ/GitHub/oturum kaydı okunamadı).

    py arac/postit_denetim.py            # insan okur tablo
    py arac/postit_denetim.py --json     # skill için makine okur
"""
import argparse
import datetime
import glob
import importlib.util
import json
import os
import re
import sys

BURA = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("atlas_not", os.path.join(BURA, "not.py"))
NOT = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(NOT)

CLAUDE_YORUM = re.compile(r"^\s*(🤖|\*\*Claude)")


def zaman(s):
    return datetime.datetime.strptime(s, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=datetime.timezone.utc)


def ms_zaman(ms):
    return datetime.datetime.fromtimestamp(ms / 1000, tz=datetime.timezone.utc)


def oturum_kayitlari():
    """{cli kimliğinin ilk 6 hanesi: oturum kaydı} — Claude masaüstü uygulamasının yerel kayıtları.
    `oturum:<id>` etiketi CLAUDE_CODE_SESSION_ID'nin (cli kimliği) ilk 6 hanesidir."""
    kok = os.path.join(os.environ.get("LOCALAPPDATA", ""), "Claude-Data")
    yollar = glob.glob(os.path.join(kok, "*", "claude-code-sessions", "*", "*", "local_*.json"))
    if not yollar:
        raise NOT.Olculemedi("oturum kaydı bulunamadı: %s" % kok)
    harita = {}
    for y in yollar:
        try:
            with open(y, encoding="utf-8") as f:
                o = json.load(f)
        except (OSError, ValueError):
            continue
        for anahtar in ("cliSessionId", "lastAssistantCliSessionId"):
            cli = o.get(anahtar)
            if cli:
                harita.setdefault(cli[:6], o)
    return harita


def ozet_beklenen(govde):
    m = re.search(r"\*\*Senden beklenen:\*\*\s*(.+)", govde or "")
    return m.group(1).strip() if m else ""


def olc():
    kayit = oturum_kayitlari()
    cik = []
    for i in NOT.notlar():
        no = i["number"]
        son = NOT.son_yazan(i) or "?"
        sahipler = [s[len(NOT.OTURUM):] for s in NOT.sahip_etiketleri(i)]
        yorumlar = NOT.gh("/issues/%d/comments?per_page=100" % no) or []
        son_c = max((k for k, c in enumerate(yorumlar) if CLAUDE_YORUM.match(c.get("body") or "")),
                    default=-1)
        emre = yorumlar[son_c + 1:] if son_c >= 0 else yorumlar
        emre_son = emre[-1]["created_at"] if emre else (i["created_at"] if son_c < 0 else "")
        satir = {"no": no, "baslik": i["title"], "son": son, "durum": NOT.coz(i)[1],
                 "sahip": ",".join(sahipler) or "-", "emre_son": emre_son,
                 "oturum": None, "oturum_baslik": None, "oturum_son": None, "arsivli": None,
                 "beklenen": ""}
        o = next((kayit[s] for s in sahipler if s in kayit), None)
        if o:
            satir.update(oturum=o.get("sessionId"), oturum_baslik=o.get("title"),
                         arsivli=bool(o.get("isArchived")),
                         oturum_son=ms_zaman(o["lastActivityAt"]).strftime("%Y-%m-%dT%H:%M:%SZ")
                         if o.get("lastActivityAt") else None)
        if son == "claude":
            satir["kova"] = "SENDE"
            if son_c >= 0:
                satir["beklenen"] = ozet_beklenen(yorumlar[son_c]["body"])
        elif not sahipler:
            satir["kova"] = "SAHIPSIZ"
        elif not o:
            satir["kova"] = "BASKA-MAKINE"
        elif satir["oturum_son"] and emre_son and zaman(satir["oturum_son"]) > zaman(emre_son):
            satir["kova"] = "CALISIYOR"
        else:
            satir["kova"] = "UYUYAN"
        cik.append(satir)
    return cik


SIRA = ["UYUYAN", "BASKA-MAKINE", "SAHIPSIZ", "CALISIYOR", "SENDE"]


def main():
    p = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    p.add_argument("--json", action="store_true")
    a = p.parse_args()
    try:
        cik = olc()
    except (NOT.Olculemedi, RuntimeError) as e:
        print("ÖLÇÜLEMEDİ: %s" % e, file=sys.stderr)
        return 2
    if a.json:
        print(json.dumps(cik, ensure_ascii=False, indent=1))
        return 0
    for kova in SIRA:
        l = [s for s in cik if s["kova"] == kova]
        if not l:
            continue
        print("== %s (%d)" % (kova, len(l)))
        for s in sorted(l, key=lambda s: s["no"]):
            ek = ""
            if s["oturum"]:
                ek = " · %s%s · son iş %s" % (s["oturum"], " [ARŞİVLİ]" if s["arsivli"] else "",
                                             s["oturum_son"])
            elif s["sahip"] != "-":
                ek = " · oturum:%s bu makinede yok" % s["sahip"]
            if s["kova"] in ("UYUYAN", "CALISIYOR") and s["emre_son"]:
                ek += " · Emre'nin cevabı %s" % s["emre_son"]
            print("#%-4d %s%s" % (s["no"], s["baslik"][:70], ek))
            if s["beklenen"]:
                print("       senden beklenen: %s" % s["beklenen"][:160])
    print("— %d açık not" % len(cik))
    return 0


if __name__ == "__main__":
    sys.exit(main())
