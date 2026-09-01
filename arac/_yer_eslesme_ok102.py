# -*- coding: utf-8 -*-
"""
`Değişmez 2y` — KIRILMA ↔ MADDE **YER** ve **YÖN** EŞLEŞMESİ
=============================================================
    Değişmez 2   bu kırılmanın ±30 gün içinde bir madde VAR MI?
    Değişmez 2y  eşleşen o madde BU YERLEŞİM hakkında mı? ve AYNI YÖNDE mi?

DOĞURAN VAKA 1 (OPUS 102 · parti-0035/H-0058 zinciri):
    Tiflis  d.f = 1578-08-09  → eşleşen madde "Çıldır Zaferi" (yer_id=Ardahan)
    TDV (`tiflis` + `gurcistan`) Tiflis'i 24 Ağustos diyor ve BİZDE O MADDE
    DE VAR: `kronoloji_gurcistan.js` 1578-08-24 "Tiflis'in fethi".
    ⇒ Harita kendi kronolojisini 15 gün önce yalanlıyor; `Değişmez 2`
      göremiyor çünkü o günde bir madde VAR — ama YANLIŞ madde.

DOĞURAN VAKA 2 (PAKET-0033, tahtadan geldi):
    Tebriz 1514-09-15 **ÇIKIŞ** kırılması ↔ Tebriz'e **GİRİŞ** maddesi.
    Doğru yerleşim, YANLIŞ YÖN. `yer_id` eşitliği bunu yakalamaz. ⇒ §YÖN.

🔴 BU ARAÇ VAR OLAN BİR DENETİMİN YERİNİ ALMAZ — ONA EKSEN EKLER.
   `arac/denetle_eslesme.py` §A aynı soruyu **başlık METNİ** üzerinden soruyor
   (`denetle._madde_yeri_aniyor`) ve doğuran vaka 1'i ZATEN yakalıyor
   (2 Eylül 2026 koşusu: 530 kırılma · 130 şüpheli · tavan 97, ve listesinde
   `1578-08-09 (6) Batum, Hulo | 0g | Çıldır Zaferi` satırı var).
   ⇒ Mükerrer nöbetçi yazmak yerine, onun GÖREMEDİĞİ eksenler ölçülüyor:
       METİN ekseni  başlıkta ad geçiyor mu — yazıma bağlı, bir KAYIT
       yer_id ekseni YAPILANDIRILMIŞ alan  — bir `if` ile sorulur, VERİ
       YÖN ekseni    kazanç mı kayıp mı    — yer doğru, olay ters olabilir
   📌 `CLAUDE.md §11` ⑪: *"bu bilgiyi bir `if` ile sorabiliyor muyum?"*

DÖRT KOVA — ve son ikisi ŞART:
    EŞLEŞİYOR      maddenin yer_id'si kırılmanın yerleşimlerinden biri
    EŞLEŞMİYOR     yer_id VAR ama başka yeri gösteriyor        ← gözden geçirme
    ÖLÇÜLEMEDİ     maddede yer_id YOK                          ← ayrı raporlanır
    YÖN ÇELİŞKİSİ  yer doğru, kazanç/kayıp TERS                ← ayrı raporlanır

ÇALIŞTIRMA
    py arac/_yer_eslesme_ok102.py              # d:/v: kırılmaları
    py arac/_yer_eslesme_ok102.py --s          # s: (yabancı) kırılmaları da
    py arac/_yer_eslesme_ok102.py --ayrinti    # bütün satırlar
    py arac/_yer_eslesme_ok102.py --sinav      # C13: İKİ YÖNÜ DE zorla sına

⚠️ İHLAL DEĞİL, GÖZDEN GEÇİRME KADEMESİDİR (çıkış kodu 0). Sebebi ölçülmüş:
   antlaşma maddeleri onlarca yerleşimi tek kalemde devreder (Londra 1830 →
   21 nokta) ve `yer_id` tek yer tutar; böyle bir satır "eşleşmiyor" çıkar
   ama YANLIŞ DEĞİLDİR. Ayırt edilemeyen bir sınıf ihlal sayılamaz.
"""
import glob
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

PENCERE_GUN = 30      # Değişmez 2 ile aynı; bilerek aynı, gevşetilmez

# Mesafe kademesi — ham "eşleşmiyor" sayısı TEK BAŞINA yanıltıcıdır.
# İlk koşu 131 verdi ve okununca görüldü: çoğu DOĞRU eşleşme.
#   1414-06-01 "Konya kuşatması" (yer_id=Konya) → Beyşehir · Akşehir kıpırdıyor
#   1299-01-01 "Osmanlı Beyliği'nin kuruluşu" (yer_id=Söğüt) → Bilecik · Yarhisar
# Madde harekâtı TEMSİLÎ bir yerle adlandırıyor; bu yanlış eşleşme değildir.
#   1452-01-01 Kilitbahir ↔ yer_id=Kirman            ~3.000 km   ← gerçek aday
#   1417-01-01 Avlonya    ↔ yer_id=Manama (Bahreyn)  ~3.200 km   ← gerçek aday
# ⇒ Ölçüt "eşleşiyor mu" değil **NE KADAR UZAKTA**. Kademe, `renk_olc`un
#   kendi içtihadının aynısı: dört kova ve "ölçülemedi" AYRI.
YAKIN_KM = 150.0
UZAK_KM = 600.0

# ── YÖN sözlüğü — ölçüldü (2 Eylül): k: fetih 272 · kayip 165 ·
#    etiket toprak-kazanc 365 · toprak-kayip 218 · toprak-kaybi 3
KAZANC_K, KAYIP_K = {"fetih"}, {"kayip"}
KAZANC_ET = {"toprak-kazanc", "fetih"}
KAYIP_ET = {"toprak-kayip", "toprak-kaybi"}


def kok(ad):
    """'Şeki (Nuha)' → 'Şeki' — parantezli açıklama atılır."""
    return re.sub(r"\s*\(.*?\)", "", ad or "").strip()


def yer_dizini(Y):
    tam, koklu = {}, {}
    for y in Y:
        tam[y["ad"]] = y["ad"]
        koklu.setdefault(kok(y["ad"]), set()).add(y["ad"])
    return tam, koklu


def kuyrugu_yukle():
    """`data/kronoloji*.js` — `denetle.py`nin OKUMADIĞI kova.

    🔴 Ölçüldü (2 Eylül 2026): çekirdek `olaylar*.js` 29 dosya · 1291 madde;
    KUYRUK `kronoloji*.js` 42 dosya · 4838 madde · %75,1'inde `yer_id`.
    Ve DOĞURAN VAKANIN doğru maddesi (1578-08-24 "Tiflis'in fethi") TAM O
    KUYRUKTA. Yalnız çekirdeği okuyan bir `2y` **sahte "eşleşmiyor"** üretir.
    ⚠️ İki kova BİRLEŞTİRİLMİYOR — Değişmez 2'nin ölçütü çekirdektir ve onu
    değiştirmek bu aracın yetkisi değil. İki AŞAMALI huni kuruluyor (§B).
    """
    out, bozuk = [], []
    for yol in sorted(glob.glob(os.path.join(denetle.DATA, "kronoloji*.js"))):
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(\w+)\s*=", js)
        if not m:
            bozuk.append((os.path.basename(yol), "window.<AD> yok"))
            continue
        try:
            for o in denetle.oku_pencere(yol, m.group(1)):
                o["_dosya"] = os.path.basename(yol)
                out.append(o)
        except Exception as e:                      # ölçülemedi ≠ temiz
            bozuk.append((os.path.basename(yol), type(e).__name__))
    return out, bozuk


def madde_yonu(o):
    """Maddenin yönü: 'kazanc' · 'kayip' · None (madde yönü SÖYLEMİYOR).
    ⚠️ None bir kova değil bir BİLGİSİZLİKTİR — 'çelişki yok' diye
    raporlanmaz, ayrı sayılır."""
    k = (o.get("k") or o.get("tur") or "").strip()
    if k in KAZANC_K:
        return "kazanc"
    if k in KAYIP_K:
        return "kayip"
    et = set(o.get("etiket") or [])
    if k:
        et.add(k)
    if (et & KAZANC_ET) and not (et & KAYIP_ET):
        return "kazanc"
    if (et & KAYIP_ET) and not (et & KAZANC_ET):
        return "kayip"
    return None


def kirilmalar(Y, kategoriler):
    """Kırılma günü → {ad: set, tip: set}. Tip: `f` KAZANÇ, `t` KAYIP
    (Osmanlı bakışı — `d:`/`v:` için doğru olan budur, ve çekirdek kronoloji
    de o bakışla yazılmıştır).
    ⚠️ Sınırlar `denetle.degismez2` ile AYNI; ölçüt ayrışmasın diye oradan
    alınmıştır. Kopya olmasının sebebi: `degismez2` eşleşen MADDEYİ
    döndürmüyor, yalnız açıkları döndürüyor."""
    kir = {}
    for y in Y:
        donemler = []
        for kat in kategoriler:
            donemler += (y.get(kat) or [])
        for p in donemler:
            for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if not d or d <= "1281-01-01" or d >= "1923-10-29":
                    continue
                kayit = kir.setdefault(d, {"ad": set(), "tip": set()})
                kayit["ad"].add(y["ad"])
                kayit["tip"].add(tip)
    return kir


def _hedefler(yid, tam, koklu):
    h = set()
    if yid in tam:
        h.add(yid)
    h |= koklu.get(kok(yid or ""), set())
    return h


def olc(Y, O, kategoriler=("d", "v"), kuyruk=None):
    tam, koklu = yer_dizini(Y)
    ol = [{"g": denetle.gun_no(o["t"]), "o": o} for o in O]
    kir = kirilmalar(Y, kategoriler)

    esles, yok, olculemedi, uzak = [], [], [], []
    for d in sorted(kir):
        adlar, tipler = kir[d]["ad"], kir[d]["tip"]
        gd = denetle.gun_no(d)
        m = min(ol, key=lambda x: abs(x["g"] - gd)) if ol else None
        fark = abs(m["g"] - gd) if m else 10 ** 6
        if m is None or fark > PENCERE_GUN:
            uzak.append({"d": d, "ad": sorted(adlar)})     # Değişmez 2'nin ZATEN açığı
            continue
        o = m["o"]
        s = {"d": d, "ad": sorted(adlar), "tip": tipler, "b": o.get("b", ""),
             "fark": fark, "yid": o.get("yer_id"), "yon": madde_yonu(o)}
        if not s["yid"]:
            olculemedi.append(s)
        elif _hedefler(s["yid"], tam, koklu) & adlar:
            esles.append(s)
        else:
            yok.append(s)

    # ── YÖN ÇELİŞKİSİ — yalnız YERİ DOĞRU olanlara sorulur ────────────────
    yon_celiski, yon_bilinmiyor = [], 0
    for s in esles:
        if s["yon"] is None:
            yon_bilinmiyor += 1
        elif s["yon"] not in s["tip"]:
            yon_celiski.append(s)

    # ── AŞAMA B — eşleşmeyenler için: DOĞRU MADDE HERHANGİ BİR KOVADA VAR MI
    if kuyruk is not None:
        hepsi = [{"g": denetle.gun_no(o["t"]), "o": o, "kova": "kuyruk"} for o in kuyruk]
        hepsi += [{"g": denetle.gun_no(o["t"]), "o": o, "kova": "çekirdek"} for o in O]
        for s in yok:
            s["b_kova"] = None
            en_iyi = None
            for x in hepsi:
                if abs(x["g"] - denetle.gun_no(s["d"])) > PENCERE_GUN:
                    continue
                yid = x["o"].get("yer_id")
                if yid and (_hedefler(yid, tam, koklu) & set(s["ad"])):
                    f = abs(x["g"] - denetle.gun_no(s["d"]))
                    if en_iyi is None or f < en_iyi[0]:
                        en_iyi = (f, x["kova"], x["o"].get("b", ""), x["o"].get("t"))
            if en_iyi:
                s["b_kova"] = en_iyi
    return esles, yok, olculemedi, uzak, kir, yon_celiski, yon_bilinmiyor


def mesafe_kademe(satirlar, Y):
    ix = {}
    for y in Y:
        ix.setdefault(y["ad"], y)
        ix.setdefault(kok(y["ad"]), y)
    temsili, uyari, supheli, cozulemedi = [], [], [], []
    for s in satirlar:
        hedef = ix.get(s["yid"]) or ix.get(kok(s["yid"] or ""))
        en = None
        if hedef:
            en = min((girdi.km(hedef["lat"], hedef["lon"], ix[a]["lat"], ix[a]["lon"])
                      for a in s["ad"] if a in ix), default=None)
        s["km"] = en
        if en is None:
            cozulemedi.append(s)
        elif en < YAKIN_KM:
            temsili.append(s)
        elif en < UZAK_KM:
            uyari.append(s)
        else:
            supheli.append(s)
    return temsili, uyari, supheli, cozulemedi


def dok(baslik, satirlar, ayrinti, sinir=12, km=False):
    print(baslik)
    for s in (satirlar if ayrinti else satirlar[:sinir]):
        ad = ", ".join(s["ad"][:2]) + (f" +{len(s['ad'])-2}" if len(s["ad"]) > 2 else "")
        mesafe = ("%6.0f km" % s["km"]) if km and s.get("km") is not None else "%3dg   " % s["fark"]
        ek = ""
        if s.get("b_kova"):
            f, kova, b, t = s["b_kova"]
            ek = "  ⤷ DOĞRUSU %s'ta: %s (%s, %dg)" % (kova, (b or "")[:32], t, f)
        print("      %-11s %s (%2d) %-26s | yer_id=%-16s | %s%s"
              % (s["d"], mesafe, len(s["ad"]), ad[:26], str(s["yid"])[:16],
                 (s["b"] or "")[:38], ek))
    if not ayrinti and len(satirlar) > sinir:
        print("      … %d satır daha (--ayrinti)" % (len(satirlar) - sinir))


def sinav(Y, O, kuyruk):
    """🔴 C13 — İKİ YÖNÜ DE ZORLA SINA. Hangisinin zorlama gerektireceği
    önceden bilinmez; ikisi de zorlanır."""
    print("=" * 74)
    print("SINAV — C13: geçme yolu VE ateşleme yolu, ikisi de ZORLANIYOR")
    print("=" * 74)
    kod = 0
    esles, yok, olculemedi, uzak, _, yonc, _ = olc(Y, O, kuyruk=kuyruk)

    vaka = [s for s in yok if s["d"] == "1578-08-09"]
    if vaka:
        print("  🟢 ATEŞLEME-1 ✓ doğuran vaka 1 EŞLEŞMİYOR kovasında:")
        print("        %s yer_id=%s | %s" % (vaka[0]["d"], vaka[0]["yid"], vaka[0]["b"]))
        if vaka[0].get("b_kova"):
            print("        ve AŞAMA B doğru maddeyi buldu: %s" % (vaka[0]["b_kova"],))
    else:
        print("  🔴 ATEŞLEME-1 ✗ 1578-08-09 şüpheli çıkmadı. Alet yanlış, veri değil.")
        kod = 1

    # sahte YÖN vakası — gerçek veride olmayabilir, ZORLANIR
    sy = [{"ad": "SINAV-YERİ", "lat": 0.0, "lon": 0.0,
           "d": [{"f": "1500-06-15", "t": "1600-06-15"}]}]
    so = [{"t": "1600-06-15", "b": "SINAV: yer doğru YÖN ters", "yer_id": "SINAV-YERİ",
           "k": "fetih"}]                      # kırılma KAYIP, madde KAZANÇ
    _, _, _, _, _, yc, _ = olc(sy, so)
    if len(yc) == 1:
        print("  🟢 ATEŞLEME-2 ✓ YÖN çelişkisi zorlandı ve ötttü (kayıp ↔ fetih)")
    else:
        print("  🔴 ATEŞLEME-2 ✗ yön çelişkisi ötmedi: %d" % len(yc))
        kod = 1

    so2 = [{"t": "1500-06-15", "b": "SINAV maddesi", "yer_id": "SINAV-YERİ", "k": "fetih"}]
    e2, y2, o2, _, _, yc2, _ = olc(sy, so2)
    if len(e2) == 1 and not y2 and not o2 and not yc2:
        print("  🟢 GEÇME ✓ kusursuz vaka EŞLEŞİYOR, şüpheli 0, yön çelişkisi 0")
    else:
        print("  🔴 GEÇME ✗ esles=%d yok=%d olculemedi=%d yon=%d"
              % (len(e2), len(y2), len(o2), len(yc2)))
        kod = 1

    so3 = [{"t": "1500-06-15", "b": "yer_id'siz SINAV maddesi"}]
    e3, y3, o3, _, _, _, _ = olc(sy, so3)
    if len(o3) == 1 and not y3 and not e3:
        print("  🟢 ÜÇÜNCÜ KOVA ✓ yer_id'siz madde ÖLÇÜLEMEDİ'ye düştü")
    else:
        print("  🔴 ÜÇÜNCÜ KOVA ✗ esles=%d yok=%d olculemedi=%d" % (len(e3), len(y3), len(o3)))
        kod = 1

    so4 = [{"t": "1500-06-15", "b": "başka yerin maddesi", "yer_id": "BAŞKA-YER"}]
    e4, y4, o4, _, _, _, _ = olc(sy, so4)
    if len(y4) == 1 and not e4 and not o4:
        print("  🟢 EŞLEŞMEME ✓ başka yerin yer_id'si ŞÜPHELİ sayıldı")
    else:
        print("  🔴 EŞLEŞMEME ✗ esles=%d yok=%d olculemedi=%d" % (len(e4), len(y4), len(o4)))
        kod = 1
    return kod


def main():
    ayrinti = "--ayrinti" in sys.argv
    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    kuyruk, bozuk = kuyrugu_yukle()

    if "--sinav" in sys.argv:
        sys.exit(sinav(Y, O, kuyruk))

    kategoriler = ("d", "v", "s") if "--s" in sys.argv else ("d", "v")
    esles, yok, olculemedi, uzak, kir, yonc, yon_bilinmiyor = olc(
        Y, O, kategoriler, kuyruk=kuyruk)
    top = len(esles) + len(yok) + len(olculemedi)

    print("=" * 74)
    print("Değişmez 2y — KIRILMA ↔ MADDE YER/YÖN EŞLEŞMESİ  (kategoriler: %s)"
          % "/".join(kategoriler))
    print("=" * 74)
    print("  yerleşim %d · ÇEKİRDEK madde %d · KUYRUK madde %d (%d dosya)"
          % (len(Y), len(O), len(kuyruk), len(glob.glob(os.path.join(denetle.DATA, "kronoloji*.js")))))
    if bozuk:
        print("  ⚠️ AYRIŞTIRILAMAYAN kuyruk dosyası: %d — TEMİZ SAYILMAZ" % len(bozuk))
        for b in bozuk[:5]:
            print("       %s (%s)" % b)
    print("  kırılma günü %d · Değişmez 2'nin maddeli saydığı %d · AÇIK dediği %d"
          % (len(kir), top, len(uzak)))
    print()
    print("  🟢 EŞLEŞİYOR    %4d  (%%%.1f)" % (len(esles), 100.0 * len(esles) / max(1, top)))
    print("  🔴 EŞLEŞMİYOR   %4d  (%%%.1f)" % (len(yok), 100.0 * len(yok) / max(1, top)))
    print("  ⚠️  ÖLÇÜLEMEDİ  %4d  (%%%.1f)  ← maddede yer_id YOK; TEMİZ SAYILMAZ"
          % (len(olculemedi), 100.0 * len(olculemedi) / max(1, top)))
    print()

    # ── YÖN ────────────────────────────────────────────────────────────
    print("  === ② YÖN — yeri DOĞRU olan %d satıra soruldu ===" % len(esles))
    print("      🔴 YÖN ÇELİŞKİSİ   %3d   yer doğru, kazanç/kayıp TERS" % len(yonc))
    print("      ⚠️  YÖN BİLİNMİYOR %3d   madde yönünü söylemiyor — ÇELİŞKİ YOK DEĞİL"
          % yon_bilinmiyor)
    if yonc:
        for s in (yonc if ayrinti else yonc[:10]):
            print("        %-11s kırılma=%-14s madde=%-7s | %s"
                  % (s["d"], "/".join(sorted(s["tip"])), s["yon"], (s["b"] or "")[:44]))
        if not ayrinti and len(yonc) > 10:
            print("        … %d satır daha (--ayrinti)" % (len(yonc) - 10))
    print()

    # ── AŞAMA B — doğru madde başka kovada mı ──────────────────────────
    b_var = [s for s in yok if s.get("b_kova")]
    b_yok = [s for s in yok if not s.get("b_kova")]
    print("  === ③ AŞAMA B — eşleşmeyenlerin DOĞRU maddesi başka yerde var mı ===")
    print("      🟡 DOĞRU MADDE VAR   %3d   ±30 günde bu yerleşimi gösteren bir madde"
          % len(b_var))
    print("         ⇒ GERÇEK AÇIK DEĞİL: madde var, EŞLEŞTİRME yanlış")
    kova_say = {}
    for s in b_var:
        kova_say[s["b_kova"][1]] = kova_say.get(s["b_kova"][1], 0) + 1
    print("         kova dağılımı: %s" % (kova_say or "—"))
    print("      🔴 HİÇBİR KOVADA YOK %3d   ← GERÇEK AÇIK" % len(b_yok))
    print()

    temsili, uyari, supheli, coz = mesafe_kademe(b_yok, Y)
    print("  === ④ GERÇEK AÇIKLARIN MESAFE KADEMESİ ===")
    print("      🟢 TEMSİLÎ  <%.0f km  %4d   yakın bir yerle adlandırma — TASARIM"
          % (YAKIN_KM, len(temsili)))
    print("      🟡 UYARI    %.0f-%.0f km %4d" % (YAKIN_KM, UZAK_KM, len(uyari)))
    print("      🔴 ŞÜPHELİ  >%.0f km  %4d   GERÇEK ADAY" % (UZAK_KM, len(supheli)))
    print("      ⚠️  ÇÖZÜLEMEDİ        %4d   TEMİZ SAYILMAZ" % len(coz))
    print()
    dok("  === 🔴 ŞÜPHELİ (>%.0f km) ===" % UZAK_KM, supheli, ayrinti, 14, km=True)
    print()
    dok("  === 🟡 DOĞRU MADDE BAŞKA KOVADA/GÜNDE ===", b_var, ayrinti, 10)
    print()
    dok("  === ⚠️ ÖLÇÜLEMEDİ — maddede yer_id yok ===", olculemedi, ayrinti, 6)

    # 🔴 ARACIN KENDİ SINIRI — doğuran vaka onu gösteriyor.
    dv = [s for s in yok if s["d"] == "1578-08-09"]
    if dv:
        s = dv[0]
        mesafe_kademe([s], Y)
        print()
        print("  🔴 ARACIN SINIRI — doğuran vaka 1 (1578-08-09 Tiflis): %s"
              % ("%.0f km" % s["km"] if s.get("km") is not None else "ölçülemedi"))
        print("     Mesafe kademesi onu ELER (temsilî). Kusur coğrafî değildi:")
        print("     15 günlük bir TARİH hatasıydı ve onu KAYNAK gösterdi.")
        print("     ⇒ Kademe listeyi DARALTIR, KARAR VERMEZ.")
    print()
    print("  📌 Bu araç İHLAL İLAN ETMEZ (çıkış kodu 0): antlaşma maddeleri")
    print("     onlarca yerleşimi tek kalemde devreder ve `yer_id` tek yer")
    print("     tutar — ayırt edilemeyen bir sınıf ihlal sayılamaz.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
