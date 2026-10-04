# -*- coding: utf-8 -*-
"""bekci_olc.py — HANGİ BEKÇİ CANLI? Koordinatörün ölçüm aleti.

🔴 NİÇİN VAR (3 Ekim 2026 vakası): ODAK-KAPAT'ın bekçisi **çıkış 4** ile
düştü (`tahta_bekci.py`de `return 4` YOK ⇒ süreç dışarıdan düşürülmüş).
Oturum 9 saat uyanmadı. Koordinatör — yani ben — sessizliği *"işçi takıldı"*
diye okudu ve gereksiz bir uyandırma turu yaktı. Oysa teslim tahtadaydı.

⇒ Kök kusur: **ölü bekçi ile SESSİZ bekçi ayırt edilemiyordu.** Bekçi sessiz
olmak ZORUNDA (§7.2 ④: boş uyanış dolu turdan ucuz değil), bu yüzden çare
"konuşsun" değil **"iz bıraksın"**. `tahta_bekci.py` artık her turda
`oturumlar/bekci/<AD>.json` yazıyor; bu alet o damgaları okur.

⚠️ `.bekci_son_<AD>.txt` bu soruyu CEVAPLAMAZ: o yalnız `--cik` ile çıkışta
yazılır — "son NABIZ" değil "son ÖLÜM" damgasıdır. Ters bilgi verir.

🔴 DAMGALAR PAYLAŞILMAZ (`oturumlar/bekci/` gitignore'da). İçinde PID ve
makineye özel canlılık var; commitlenirse bu makine BAŞKA makinenin bayat
damgasını okuyup "bekçi canlı" sanar. `D222`nin ölçüm yüzü: *yanlış alanla
ölçmek, ölçmemekten daha tehlikelidir — sayı verir ve güven telkin eder.*

KULLANIM
  py arac/bekci_olc.py            tablo
  py arac/bekci_olc.py --ham      JSON (betikten okumak için)
ÇIKIŞ  0 hepsi canlı · 1 en az bir ÖLÜ/KUŞKULU · 2 kullanım hatası
"""
import io
import json
import os
import sys
import time

# 🔴 KONSOL KODLAMASI — ve bu alet tam BUNDAN öldü (4 Ekim 2026).
# Windows konsolu cp1254; `print("🔴 OLU: …")` satırı `UnicodeEncodeError`
# fırlatıyordu. Kusurun sinsi tarafı: çökme YALNIZ `OLU` dalında oluyordu,
# yani **aletin söyleyecek bir şeyi olduğu anda.** Temiz durumda hiç
# görünmüyordu; "çalışıyor" sanılıyordu.
# ⇒ `paketle.py:57`nin deseni: çıktıyı UTF-8'e sabitle, kodlanamayanı değiştir.
#   Böylece ölçüm aleti, raporunun içeriği yüzünden ÖLMEZ.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar", "bekci")

# 🔴 EŞİK NABIZ ARALIĞININ KATIDIR, SABİT SANİYE DEĞİL. `--ara 60` ile koşan
# bir bekçi ile `--ara 1800` ile koşan biri aynı saniyeyle ölçülemez: ikinci
# için 10 dakikalık sessizlik NORMALDİR, birinci için ÖLÜMDÜR. Sabit eşik
# yazmak, yarısını yanlış etiketlerdi.
CANLI_KAT = 2.5      # <= 2.5 tur  -> canlı
KUSKU_KAT = 5.0      # <= 5   tur  -> kuşkulu
TABAN = 90           # `ara` okunamazsa / 0 ise varsayılan saniye


def oku():
    if not os.path.isdir(DIZIN):
        return []
    out = []
    for ad in sorted(os.listdir(DIZIN)):
        if not ad.endswith(".json"):
            continue
        yol = os.path.join(DIZIN, ad)
        try:
            d = json.load(io.open(yol, encoding="utf-8"))
        except (OSError, ValueError) as e:
            # 🔴 OKUNAMADI ≠ ÖLÜ. Bozuk damga bir ÖLÇÜM ARIZASIDIR; "ölü"
            #   yazmak yanlış hüküm olur (bekçi koşuyor olabilir).
            out.append({"ad": ad[:-5], "hal": "OLCULEMEDI", "sebep": str(e),
                        "yas": None})
            continue
        damga = d.get("damga") or 0
        ara = d.get("ara") or TABAN
        try:
            ara = float(ara) or TABAN
        except (TypeError, ValueError):
            ara = TABAN
        yas = max(0, int(time.time()) - int(damga))
        durum = d.get("durum") or "?"
        if durum == "cikti":
            hal = "CIKTI"            # düzgün çıkış — ölüm DEĞİL, bitiş
        elif yas <= ara * CANLI_KAT:
            hal = "CANLI"
        elif yas <= ara * KUSKU_KAT:
            hal = "KUSKULU"
        else:
            hal = "OLU"
        out.append({"ad": d.get("ad") or ad[:-5], "hal": hal, "yas": yas,
                    "ara": ara, "tur": d.get("tur"), "pid": d.get("pid"),
                    "zaman": d.get("zaman"), "sebep": d.get("sebep") or "",
                    "dinlenen": d.get("dinlenen") or []})
    return out


def _sure(s):
    if s is None:
        return "-"
    if s < 60:
        return "%d sn" % s
    if s < 3600:
        return "%d dk" % (s // 60)
    return "%d s %d dk" % (s // 3600, (s % 3600) // 60)


ISARET = {"CANLI": "+", "KUSKULU": "?", "OLU": "!", "CIKTI": ".",
          "OLCULEMEDI": "?"}


def main(argv):
    if argv and argv[0] not in ("--ham",):
        sys.stderr.write("Kullanim: py arac/bekci_olc.py [--ham]\n")
        return 2
    kayit = oku()
    if "--ham" in argv:
        sys.stdout.write(json.dumps(kayit, ensure_ascii=False))
        return 1 if any(k["hal"] in ("OLU", "OLCULEMEDI") for k in kayit) else 0

    if not os.path.isdir(DIZIN):
        # 🔴 DAMGA DİZİNİ YOK = "bekçi yok" DEĞİL, "ÖLÇÜLEMEDİ". Nabız
        #   yaması inmeden önce kurulmuş bekçiler damga YAZMAZ ve hâlâ
        #   koşuyor olabilirler. Boş küme her öngörüyü doğrular.
        print("OLCULEMEDI — damga dizini yok: oturumlar/bekci/")
        print("  Sebep ADAYLARI: (a) hic bekci kurulmadi (b) bekciler NABIZ")
        print("  yamasindan ONCE kuruldu (c) yol yanlis. (b) ise bekciler")
        print("  CANLI olabilir — 'bekci yok' SONUCU CIKARMA.")
        return 1

    if not kayit:
        print("OLCULEMEDI — dizin var, damga YOK (ayni uc aday gecerli).")
        return 1

    print("=" * 74)
    print("BEKCI NABZI — %s" % time.strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 74)
    print("%-26s %-11s %-10s %-7s %s" % ("ad", "hal", "son nabiz", "tur", "not"))
    print("-" * 74)
    for k in sorted(kayit, key=lambda x: (x["hal"] != "OLU", x["ad"])):
        not_ = k.get("sebep") or ""
        if k["hal"] == "OLU":
            not_ = "beklenen <= %s · SUREC DUSMUS olabilir" % _sure(
                int(k["ara"] * CANLI_KAT))
        elif k["hal"] == "CIKTI":
            not_ = "duzgun cikis (%s) — olum DEGIL" % (not_ or "sebep yazilmamis")
        print("%s%-25s %-11s %-10s %-7s %s"
              % (ISARET.get(k["hal"], " "), k["ad"], k["hal"],
                 _sure(k["yas"]), k.get("tur"), not_))
    print("-" * 74)
    olu = [k["ad"] for k in kayit if k["hal"] == "OLU"]
    olcx = [k["ad"] for k in kayit if k["hal"] == "OLCULEMEDI"]
    print("CANLI %d · KUSKULU %d · CIKTI %d · OLU %d · OLCULEMEDI %d"
          % (sum(1 for k in kayit if k["hal"] == "CANLI"),
             sum(1 for k in kayit if k["hal"] == "KUSKULU"),
             sum(1 for k in kayit if k["hal"] == "CIKTI"),
             len(olu), len(olcx)))
    if olu:
        print("🔴 OLU: %s" % ", ".join(olu))
        print("   ⇒ Bu oturumlar TAHTADAN UYANMAZ. Gorev `send_message` ile")
        print("     gider (§7.2 uyandirma notu). Bekciyi OTURUM kendisi")
        print("     kurar — koordinator disaridan kurmaz.")
    if olcx:
        print("? OLCULEMEDI: %s" % ", ".join(olcx))
    return 1 if (olu or olcx) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
