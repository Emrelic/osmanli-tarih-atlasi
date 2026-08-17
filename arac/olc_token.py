# -*- coding: utf-8 -*-
"""TOKEN MUHASEBESI 2 — asil surukleyici hangisi?

Birinci olcum sunu gosterdi: maliyet ACILISTA degil (%0,0), CIKTIDA da
degil (97 M / 29,2 B). Maliyetin %97'si CACHE OKUMA: her istekte butun
baglamin yeniden okunmasi.

  cache okuma = BAGLAM BOYU x ISTEK SAYISI

⇒ Asil soru: ISTEKLER nereden geliyor ve baglam nicin bu kadar buyuk?
Bu betik istekleri KAYNAGINA gore ayirir ve "uyandim-bana-degil"
turunu AYRICA sayar.
"""
import io, json, os, sys, glob, datetime
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DIZIN = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"
BEN = "2ad1685f"

dosyalar = glob.glob(os.path.join(DIZIN, "*.jsonl"))

top_istek = 0
top_read = 0
kisa_bos = 0          # kisa cikti + tahta/sessizlik izi = BOSA UYANMA
kisa_bos_read = 0
tahta_istek = 0
tahta_read = 0
gun = {}
benim = {"istek": 0, "read": 0}
isci = {"istek": 0, "read": 0}
baglam_ornek = []

IZ_BOS = ("bana değil", "bana degil", "beni ilgilendirmiyor", "susuyorum",
          "sessiz kal", "ilgilendirmeyen", "bir şey yapmıyorum",
          "bir sey yapmiyorum", "işlem yapmıyorum")
IZ_TAHTA = ("tahta.py", "tahta.json", "tahta_bekci", "TAHTA]", "M-0")

for yol in dosyalar:
    kid = os.path.basename(yol)[:8]
    try:
        for satir in io.open(yol, encoding="utf-8", errors="replace"):
            satir = satir.strip()
            if not satir:
                continue
            try:
                r = json.loads(satir)
            except Exception:
                continue
            msg = r.get("message") or {}
            u = msg.get("usage") or {}
            if not u:
                continue
            cr = u.get("cache_read_input_tokens", 0) or 0
            cw = u.get("cache_creation_input_tokens", 0) or 0
            ci = u.get("output_tokens", 0) or 0
            baglam = cr + cw
            top_istek += 1
            top_read += baglam
            if kid == BEN:
                benim["istek"] += 1; benim["read"] += baglam
            else:
                isci["istek"] += 1; isci["read"] += baglam
            baglam_ornek.append(baglam)
            # gune gore
            ts = r.get("timestamp") or ""
            if len(ts) >= 10:
                gun[ts[:10]] = gun.get(ts[:10], 0) + baglam
            # icerik izi
            govde = json.dumps(msg.get("content") or "", ensure_ascii=False)
            if any(k in govde for k in IZ_TAHTA):
                tahta_istek += 1; tahta_read += baglam
            if ci < 400 and any(k in govde for k in IZ_BOS):
                kisa_bos += 1; kisa_bos_read += baglam
    except Exception:
        continue

print("=" * 68)
print("ISTEK SAYISI VE BAGLAM — asil surukleyici")
print("=" * 68)
print("  toplam istek        %12s" % f"{top_istek:,}")
print("  toplam baglam okuma %12s token" % f"{top_read:,}")
if top_istek:
    print("  istek basina ORT.   %12s token" % f"{top_read//top_istek:,}")
baglam_ornek.sort()
if baglam_ornek:
    print("  ortanca baglam      %12s token"
          % f"{baglam_ornek[len(baglam_ornek)//2]:,}")
    print("  en buyuk baglam     %12s token" % f"{baglam_ornek[-1]:,}")
print()
print("=" * 68)
print("KIM HARCADI")
print("=" * 68)
t = top_read or 1
print("  KOORDINATOR (bu oturum)  istek %6s · baglam %14s  %%%.1f"
      % (f"{benim['istek']:,}", f"{benim['read']:,}", 100 * benim["read"] / t))
print("  butun ISCI oturumlar     istek %6s · baglam %14s  %%%.1f"
      % (f"{isci['istek']:,}", f"{isci['read']:,}", 100 * isci["read"] / t))
print()
print("=" * 68)
print("BUROKRASI — tahta izi tasiyan istekler")
print("=" * 68)
print("  tahta izli istek    %12s  (%%%.1f)"
      % (f"{tahta_istek:,}", 100 * tahta_istek / (top_istek or 1)))
print("  bunlarin baglami    %12s  (%%%.1f)"
      % (f"{tahta_read:,}", 100 * tahta_read / t))
print()
print("  🔴 'UYANDIM — BANA DEGIL' turu (kisa cikti + sessizlik izi)")
print("     istek           %12s" % f"{kisa_bos:,}")
print("     YAKILAN BAGLAM  %12s  (%%%.1f)"
      % (f"{kisa_bos_read:,}", 100 * kisa_bos_read / t))
print()
print("=" * 68)
print("GUNE GORE (son 10 gun)")
print("=" * 68)
for g in sorted(gun)[-10:]:
    print("  %s  %14s  %s" % (g, f"{gun[g]:,}",
                              "█" * int(40 * gun[g] / max(gun.values()))))
