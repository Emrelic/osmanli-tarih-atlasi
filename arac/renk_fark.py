# -*- coding: utf-8 -*-
"""RENK FARK — bir koşudan ÖNCE ve SONRA renk denetimini karşılaştırır.

⚠️ NEDEN VAR (7 Ağustos 2026, RENK 2):
   `renk_olc.py` "0 çakışma" der ve bu **yetmez**. Aynı gün üç kez şu oldu:
   denetim temizken veri değişti ve yeni bir çift eşiğin altına düştü —
   hiçbir hex'e dokunulmadan (`cungar↔buhara` · `norvec↔portekiz` ·
   `cohor↔kamboc`). Sayı sabit kalıp İÇERİK değişebilir: iki çift kapanıp
   iki yeni çift açılırsa toplam yine "0 çakışma" görünür.

   ⇒ Bu araç SAYIYA değil KÜMEYE bakar: hangi komşuluk çifti DOĞDU, hangisi
     ÖLDÜ, hangi ΔE eşiği geçti/geçemedi.

   📌 Ve iki nöbetçi FARKLI şeyi ölçer — karıştırılırsa yanlış yerde aranır:
     renk_olc    komşuluğu NOKTALARDAN kurar (Voronoi + gün düzeyinde
                 örtüşme). Nehir/dağ/engel poligonu bunu ETKİLEMEZ.
                 Kusur burada çıkarsa sebep NOKTA ya da DÖNEM değişimidir.
     renk_cikti  ÇİZİLİ gövdelerin değmesine bakar. Nehir ve engeller gövde
                 şeklini değiştirir ⇒ GEOMETRİ değişince kusur BURADA çıkar.

KOMUT
   py arac/renk_fark.py --taban        koşudan ÖNCE: durumu kaydet
   py arac/renk_fark.py                koşudan SONRA: farkı bas
"""
import io
import json
import os
import sys

# ⚠️ stdout SARILMAZ — `renk_olc` import anında kendisi sarıyor. Burada da
#   sarılırsa iki TextIOWrapper aynı `sys.stdout.buffer`ı devralır, ilki
#   çöp toplamada kapanır ve ilk `print` "I/O operation on closed file"
#   ile patlar. (Bu tuzağa bugün üç kez düşüldü: iki scratchpad betiği ve
#   bu aletin ilk hâli. Sarmalama İTHAL EDİLEN modülün işi.)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import renk_olc as R          # noqa: E402  — stdout'u bu import sarıyor
import girdi                  # noqa: E402

TABAN = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "denetim", "renk-taban.json")


def durum():
    """(komşu çiftleri, eşikaltı çiftler, kimlik→hex) — hepsi ölçülür."""
    k, n = R.komsuluk()
    cift, cak = {}, {}
    for a in sorted(R.BOYALAR):
        La = R.gorunen(a)
        for b in sorted(k.get(a, ())):
            if b <= a or b not in R.BOYALAR:
                continue
            d = R.dE(La, R.gorunen(b))
            cift["%s|%s" % (a, b)] = round(d, 1)
            if d < R.DE_KOMSU:
                cak["%s|%s" % (a, b)] = round(d, 1)
    z = zincir()
    return {"nokta": n, "kimlik": len(R.BOYALAR), "cift": cift, "cakisma": cak,
            "hex": {a: v[1].lower() for a, v in R.BOYALAR.items()},
            "zincir": {ad: len(v) for ad, v in z.items()}}


# ═══════════ ④ ZİNCİR — künye → renk → veri ═══════════
def zincir():
    """Üç halkanın birbirini tutup tutmadığı. Dört dal döner.

    🔴 NEDEN VAR (7 Ağustos 2026, RENK 2 ölçtü):
      künyesi olup rengi olmayan   65 kimlik
      rengi olup künyesi olmayan   41 kimlik
      veride kullanılıp biri eksik  0 kimlik
      ⇒ İlk ikisi bugün SESSİZ, ve sessizliğin sebebi renklerinin olması
        DEĞİL — **verilerinin hiç gelmemesi.** Veri geldiği gün 65'i birden
        harita deliği olur.
      📌 Yani zincirin ilk iki halkası KOPTUĞUNDA değil, KULLANILDIĞINDA
        ötüyor; ve o ana kadar üçüncü satırın temizliği ilk ikisini gizliyor.
      Doğuran vaka: `moskova` künyesi yazıldı, rengi verilmedi, veride 0
      kullanıldı — üç adımlı zincirin ORTASI boş kaldı ve hiçbir denetim
      "künye var ama renk yok" diye SORMADIĞI için kimse fark etmedi.
      Kardeşi: `harita:` alanının beş kez atlanması (hokand · sibir · ryazan
      · evfat dörtlüsü) — aynı boşluğun öteki yüzü.

    ⚠️ ÇIKIŞ KODU YALNIZ VERİDE KULLANILAN dallara bağlıdır. 65 ve 41 birer
      BORÇTUR, ihlal değil — onları hata saymak aracı her koşuda kırmızı
      yapar ve gerçek kusuru boğar. Bunun yerine SAYILARI tabana yazılır ve
      fark() BÜYÜMEYİ bildirir: 65 → 70 görünür olur.
    """
    D = girdi.oku_devletler()
    kunye = {(d.get("harita") or d.get("id")) for d in D
             if (d.get("harita") or d.get("id"))}
    Y = girdi.yukle(sessiz=True)
    veride = set()
    for y in Y:
        for kat in ("s", "v"):
            for p in (y.get(kat) or []):
                if p.get("d"):
                    veride.add(p["d"])
    return {
        "kunye_var_renk_yok": sorted(kunye - set(R.BOYALAR)),
        "renk_var_kunye_yok": sorted(set(R.BOYALAR) - kunye),
        "veride_renk_yok":    sorted(veride - set(R.BOYALAR)),
        "veride_kunye_yok":   sorted(veride - kunye),
    }


def zincir_bas(z, eski=None):
    """Dört dalı basar; veride kullanılan iki dal KUSURDUR."""
    print("\n" + "=" * 72)
    print("④ ZİNCİR — künye → renk → veri")
    print("=" * 72)
    ETIKET = [
        ("kunye_var_renk_yok", "künyesi var, rengi yok", False),
        ("renk_var_kunye_yok", "rengi var, künyesi yok", False),
        ("veride_renk_yok",    "VERİDE kullanılıyor, rengi YOK", True),
        ("veride_kunye_yok",   "VERİDE kullanılıyor, künyesi YOK", True),
    ]
    kusur = 0
    for ad, metin, kritik in ETIKET:
        n = len(z[ad])
        d = ""
        if eski and ad in (eski.get("zincir") or {}):
            fark = n - eski["zincir"][ad]
            if fark:
                d = "   (%+d)" % fark
        print("  %-36s %4d%s%s" % (metin, n, "  🔴" if (kritik and n) else "", d))
        if kritik and n:
            kusur += n
            for a in z[ad][:12]:
                print("       %s" % a)
    if not kusur:
        print("\n  ✓ veride kullanılan her kimliğin künyesi de rengi de var")
        print("  ⚠️ ama üstteki iki sayı BORÇ: bugün sessizler çünkü verileri")
        print("     yok. Veri geldiği gün delik olurlar.")
    return kusur


def yaz():
    d = durum()
    os.makedirs(os.path.dirname(TABAN), exist_ok=True)
    # 🔴 ÖNCE .tmp, SONRA atomik taşı. Kesip-yazan tek adım yarıda kalırsa
    #   veri kaybıdır; bu proje o hatayı bir kez yaşadı (6 Ağustos, ilerleme
    #   dosyası bir commit boyunca boşaldı).
    io.open(TABAN + ".tmp", "w", encoding="utf-8").write(
        json.dumps(d, ensure_ascii=False))
    os.replace(TABAN + ".tmp", TABAN)
    print("taban yazıldı: %s" % TABAN)
    print("  %d nokta · %d kimlik · %d komşu çifti · %d çakışma"
          % (d["nokta"], d["kimlik"], len(d["cift"]), len(d["cakisma"])))


def fark():
    if not os.path.exists(TABAN):
        raise SystemExit("!! taban yok: %s — önce --taban ile kaydet "
                         "('fark yok' ile 'karşılaştırmadım' aynı görünemez)"
                         % TABAN)
    eski = json.loads(io.open(TABAN, encoding="utf-8").read())
    yeni = durum()

    print("=" * 72)
    print("%-22s %10s → %-10s" % ("", "TABAN", "ŞİMDİ"))
    for ad, an in (("nokta", "nokta"), ("kimlik", "kimlik")):
        print("%-22s %10s → %-10s%s"
              % (ad, eski[an], yeni[an],
                 "" if eski[an] == yeni[an] else "   ← DEĞİŞTİ"))
    print("%-22s %10d → %-10d" % ("komşu çifti", len(eski["cift"]),
                                  len(yeni["cift"])))
    print("%-22s %10d → %-10d" % ("çakışma", len(eski["cakisma"]),
                                  len(yeni["cakisma"])))

    ec, yc = set(eski["cift"]), set(yeni["cift"])
    dogan, olen = sorted(yc - ec), sorted(ec - yc)
    print("\n" + "=" * 72)
    print("KOMŞULUK ÇİFTİ — doğan %d · ölen %d" % (len(dogan), len(olen)))
    print("=" * 72)
    # ⚠️ Doğan çiftlerin YALNIZ eşiği geçemeyenleri kusurdur; ötekiler bilgi.
    kotu = [c for c in dogan if yeni["cift"][c] < R.DE_KOMSU]
    print("  doğan ve ΔE < %.0f  →  %d" % (R.DE_KOMSU, len(kotu)))
    for c in kotu:
        print("    🔴 %-46s ΔE %5.1f" % (c.replace("|", "  ↔  "),
                                         yeni["cift"][c]))
    if dogan and not kotu:
        print("    (doğan çiftlerin hepsi eşiğin üstünde)")

    # renk değişmeden eşiğin altına düşenler — asıl aranan sınıf
    dusen = [c for c in (ec & yc)
             if eski["cift"][c] >= R.DE_KOMSU > yeni["cift"][c]]
    print("\n  VAR OLAN çiftten eşiğin ALTINA düşen → %d" % len(dusen))
    for c in dusen:
        print("    🔴 %-40s %5.1f → %5.1f"
              % (c.replace("|", "  ↔  "), eski["cift"][c], yeni["cift"][c]))

    deg = [a for a in yeni["hex"]
           if a in eski["hex"] and eski["hex"][a] != yeni["hex"][a]]
    print("\n  hex'i değişen kimlik: %d%s"
          % (len(deg), ("  — " + ", ".join(deg)) if deg else ""))
    yeni_k = sorted(set(yeni["hex"]) - set(eski["hex"]))
    print("  yeni kimlik: %d%s"
          % (len(yeni_k), ("  — " + ", ".join(yeni_k[:8])
                           + ("…" if len(yeni_k) > 8 else "")) if yeni_k else ""))

    zk = zincir_bas(zincir(), eski)

    print("\n" + "=" * 72)
    print("  " + ("✓ TEMİZ — eşiğin altına düşen ya da doğan kusur yok"
                  if not kotu and not dusen and not zk
                  else "🔴 %d doğan kusur · %d düşen çift · %d zincir kusuru"
                       % (len(kotu), len(dusen), zk)))
    return 1 if (kotu or dusen or zk) else 0


if __name__ == "__main__":
    if "--taban" in sys.argv:
        yaz()
    else:
        sys.exit(fark())
