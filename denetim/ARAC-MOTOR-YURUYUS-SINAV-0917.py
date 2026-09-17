# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-SINAV-0917 — motorun PETEK_D aşamasına kadar olan kısmını
KÜÇÜK BİR KUTUDA koşturur (tam koşu DEĞİL) ve petekleri kaydeder.

NİÇİN: şartname (§2-3) "bayrak kapalıyken çıktı bugünküyle aynı mı; açıkken
öngörüyle karşılaştır — tam koşuyu BAŞLATMA". Motorun kutu modu yok; bu alet
motor metnini aynen alır ve yalnız DÖRT yerini değiştirir:
  ① `BOLGE = box(-180, -60, 180, 85)` → verilen kutu
  ② çift koşu kilidi (kosu_kilit) → atlanır (bu bir üretim değil)
  ③ `.uretim-basladi` damgası → YAZILMAZ (takipçiyi yanıltırdı)
  ④ metin "# ---------------- ÇÖL TAVANI" satırında KESİLİR — PETEK_D,
     kıyı kesimi + tavan/bütçe + ada kuralı + kara-kısıtlı devir SONRASI hâliyle
     (bozuk kenar nöbetçisi dahil) ölçülür. Sonrası (çöl tavanı, epoklar, gövde,
     çıktı yazımı) KOŞMAZ ⇒ data/ ve veri-kaynak/ yazılmaz.
Dosya yolları (veri, DEM) ANA KLASÖRDEN okunur: `__file__` ana klasörün motoru
olarak verilir — worktree'de depo dışı DEM yok.

Kullanım:
  py denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py kos --motor <uret_petek.py> --kutu=26,34,50,44 --ad X [--bayrak 1] [--saat 40]
  py denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py kiyasla X Y
Çıktı: denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.json (ad başına bölüm)
"""
import io, json, os, sys, time, hashlib, argparse

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "ARAC-MOTOR-YURUYUS-SINAV-0917.json")
ANA_MOTOR = os.path.join(KOK, "arac", "uret_petek.py")


def _yukle():
    return json.load(io.open(CIKTI, encoding="utf-8")) if os.path.exists(CIKTI) else {}


def kos(a):
    try:
        import ctypes
        ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)
    except Exception:
        pass
    src = io.open(a.motor, encoding="utf-8", newline="").read().replace("\r\n", "\n")
    sha = hashlib.sha256(src.encode("utf-8")).hexdigest()[:12]

    def degis(eski, yeni):
        nonlocal src
        if src.count(eski) != 1:
            raise SystemExit(f"İŞARET {src.count(eski)} kez: {eski[:60]!r} — alet güncellenmeli")
        src = src.replace(eski, yeni)

    degis("BOLGE = box(-180, -60, 180, 85)\n", f"BOLGE = box({a.kutu})\n")
    degis('if not _KILIT.al("petek"):\n    sys.exit(1)\natexit.register(_KILIT.birak, "petek")\n',
          "pass  # SINAV: kilit atlandı\n")
    i = src.index('io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",')
    j = src.index('+ "\\n")\n', i) + len('+ "\\n")\n')
    if '".uretim-basladi"' not in src[i:j]:
        raise SystemExit("damga satırı tanınmadı")
    src = src[:i] + "pass  # SINAV: .uretim-basladi YAZILMADI\n" + src[j:]
    k = src.index("# ---------------- ÇÖL TAVANI ----------------\n")
    src = src[:k]
    os.environ["MOTOR_YURUYUS"] = "1" if a.bayrak else "0"
    os.environ["MOTOR_YURUYUS_SAAT"] = str(a.saat)
    os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"       # iki tarafta da aynı: ölçüm Dijkstra'ları
    os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"      # üretime karışmaz, süreyi kısaltır
    NS = {"__name__": "__main__", "__file__": ANA_MOTOR}
    t0 = time.time()
    exec(compile(src, a.motor + " [SINAV kesiti]", "exec"), NS)
    sure = round(time.time() - t0)
    import shapely
    from shapely.ops import unary_union
    PD, Y = NS["PETEK_D"], NS["YERLER"]
    km2 = NS["_ham_km2"]
    alan = [km2(g) for g in PD]
    wkb = [hashlib.sha1(shapely.to_wkb(g, hex=False, output_dimension=2)).hexdigest()[:16]
           if g is not None and not g.is_empty else "" for g in PD]
    kara_km2 = km2(NS["KARA"])
    boyali_km2 = km2(unary_union([g for g in PD if g is not None and not g.is_empty]))
    osm = {}
    for gun in ("1520-06-15", "1683-06-15", "1800-06-15"):
        osm[gun] = round(sum(alan[i] for i, y in enumerate(Y)
                             if any(p["f"] <= gun < p["t"] for p in (y.get("d") or []))))
    bos_nokta = [Y[i]["ad"] for i in range(len(PD))
                 if (PD[i] is None or PD[i].is_empty)
                 and NS["BOLGE"].contains(NS["noktalar"][i])]
    kendi_disinda = [Y[i]["ad"] for i in range(len(PD))
                     if PD[i] is not None and not PD[i].is_empty
                     and NS["BOLGE"].contains(NS["noktalar"][i])
                     and NS["KARA"].contains(NS["noktalar"][i])
                     and not PD[i].intersects(NS["noktalar"][i])]
    SON = {"motor": a.motor, "motor_sha_ilk12": sha, "kutu": a.kutu, "bayrak": a.bayrak,
           "saat": a.saat, "sure_sn": sure, "petek": len(PD),
           "muhur": list(NS["_petek_muhru"]()) if "_petek_muhru" in NS else None,
           "kara_km2": round(kara_km2), "boyali_km2": round(boyali_km2),
           "sahipsiz_kara_km2": round(kara_km2 - boyali_km2),
           "osmanli_dogrudan_ham_km2": osm,
           "kutudaki_nokta_petegi_bos": bos_nokta,
           "nokta_kendi_peteginin_disinda": kendi_disinda,
           "alan": [round(x, 1) for x in alan], "wkb": wkb,
           "ad": [y["ad"] for y in Y]}
    H = _yukle()
    H[a.ad] = SON
    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(H, f, ensure_ascii=False)
    print(f"SINAV YAZILDI {a.ad} · {sure} sn · boyalı {boyali_km2:,.0f} / kara {kara_km2:,.0f} km² · "
          f"Osmanlı {osm} · boş nokta {len(bos_nokta)} · kendi dışında {len(kendi_disinda)}")


def kiyasla(x, y):
    sys.stdout.reconfigure(encoding="utf-8")
    H = _yukle()
    A, B = H[x], H[y]
    assert A["ad"] == B["ad"], "yerleşim listesi farklı — kıyas geçersiz"
    fark = [i for i in range(len(A["wkb"])) if A["wkb"][i] != B["wkb"][i]]
    print(f"{x} ({A['motor_sha_ilk12']}, bayrak {A['bayrak']}) ↔ {y} ({B['motor_sha_ilk12']}, bayrak {B['bayrak']})")
    print(f"  mühür  {A['muhur']}\n         {B['muhur']}")
    print(f"  geometrisi BİT BİT FARKLI petek: {len(fark)}")
    print(f"  boyalı {A['boyali_km2']:,} → {B['boyali_km2']:,} · sahipsiz kara "
          f"{A['sahipsiz_kara_km2']:,} → {B['sahipsiz_kara_km2']:,}")
    for g in A["osmanli_dogrudan_ham_km2"]:
        a_, b_ = A["osmanli_dogrudan_ham_km2"][g], B["osmanli_dogrudan_ham_km2"][g]
        print(f"  Osmanlı doğrudan (ham) {g}: {a_:,} → {b_:,}  ({100.0*(b_-a_)/a_ if a_ else 0:+.2f}%)")
    d = sorted(((B["alan"][i] - A["alan"][i], A["ad"][i]) for i in fark), key=lambda t: -abs(t[0]))
    degisen_km2 = sum(abs(t[0]) for t in d) / 2
    print(f"  alan değişimi (|net| toplamının yarısı): {degisen_km2:,.0f} km²")
    for dd, ad in d[:20]:
        print(f"     {dd:>+12,.0f} km²  {ad}")
    print(f"  {y}: kutudaki noktanın peteği boş {len(B['kutudaki_nokta_petegi_bos'])} "
          f"{B['kutudaki_nokta_petegi_bos'][:8]} · nokta kendi peteğinin dışında "
          f"{len(B['nokta_kendi_peteginin_disinda'])} {B['nokta_kendi_peteginin_disinda'][:8]}")
    return len(fark)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "kiyasla":
        sys.exit(0 if kiyasla(sys.argv[2], sys.argv[3]) == 0 else 1)
    ap = argparse.ArgumentParser()
    ap.add_argument("komut", choices=["kos"])
    ap.add_argument("--motor", required=True)
    ap.add_argument("--kutu", required=True)
    ap.add_argument("--ad", required=True)
    ap.add_argument("--bayrak", type=int, default=0)
    ap.add_argument("--saat", type=float, default=40.0)
    kos(ap.parse_args())
