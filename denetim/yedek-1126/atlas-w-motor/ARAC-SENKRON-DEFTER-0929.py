# -*- coding: utf-8 -*-
"""SENKRON-DEFTER-0929 — Değişmez 2s'nin üç kovasını KAYIT KAYIT döker.

denetle.py'ye DOKUNMAZ: içe aktarır, işlevlerini aynen çağırır
(`denetle.py` main: degismez2(...,("s",),yer_sarti=True) → kapsam_disi →
yil_temsili_ayir). Böylece kovalar kapının kendi kovalarıdır, kopyası değil.

Birimler — karıştırılmasın:
  KIRILMA-GÜNÜ   denetle.py'nin birimi: bir TARİH (o gün değişen bütün s: uçları)
  YER-KIRILMASI  (gün, yerleşim) çifti — açıklanmamış her yerleşim bir satır
  OLAY ADAYI     (gün, eski sahip → yeni sahip) — tek maddeyle kapanabilecek küme

Kullanım:  py -X utf8 denetim/ARAC-SENKRON-DEFTER-0929.py [--json-yaz]
"""
import sys, os, re, json, glob, subprocess, datetime
from collections import Counter, defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D  # noqa: E402

DATA = os.path.join(KOK, "data")
# gun_no() dört haneli yıl ister; üç haneli (ör. "861-..") künye maddesi 2s
# penceresine (1281-1923) zaten düşmez — elenir.
TARIH = re.compile(r"^\d{4}-\d{2}(-\d{2})?$")

# ── Paket ataması: KİMLİK (s: içindeki devlet id'si) → paket ──────────────
# Ölçüt uydurma değil: şartname §8'in adlandırdığı devletlerin devletler.js
# id'leri. Kimlikten atanamayan kayıt künyenin `bolge:` alanına düşer (aşağıda),
# o da tutmazsa PAKETSİZ kalır ve öyle raporlanır.
BB, BD, TU, KF = ("KRONO-BALKAN-B-0929", "KRONO-BALKAN-D-0929",
                  "KRONO-TUNA-0929", "KRONO-KAFKAS-0929")
MG, KZ, OA, IT = ("KRONO-MAGRIB-0929", "KRONO-KUZEY-0929",
                  "KRONO-ORTA-AVRUPA-0929", "KRONO-ITALYA-0929")
AT, DI = "KRONO-ATLANTIK-0929", "KRONO-DOGU-ISLAM-0929"
# ① künye `bolge:` → paket (şartname §8'in coğrafyası)
PAKET_BOLGE = {"iran": DI, "misir-sudan": DI, "kafkasya": KF, "kuzey-afrika": MG,
               "italya": IT, "iberya": AT, "bati-avrupa": AT, "orta-avrupa": OA,
               "dogu-avrupa": KZ}
# ② kimlik düzeyinde istisna/tamamlama — künyesiz `harita:` anahtarları
#    (avusturya, sirbistan…) ve bölgesi pakete denk düşmeyen §8 devletleri
PAKET_KIMLIK = {
    "avusturya": OA, "tabi:Orta Macar Krallığı (Tököli İmre)": OA,
    "tabi:Orta Macar Krallığı — Ilona Zrínyi'nin Munkács savunması": OA,
    "tabi:Macaristan (Zapolya vasal krallığı)": OA,
    "sirbistan": BB, "sirbistan-kralligi": BB, "sirp-despotlugu": BB,
    "sirbistan-nemanjic": BB, "zeta": BB, "hersek": BB, "bosna": BB, "dukagin": BB,
    "yugoslavya": BB, "tabi:Arvanid sancağı — nominal tâbiiyet": BB,
    "bizans": BD, "yunanistan": BD, "bulgaristan": BD, "bulgaristan-kralligi": BD,
    "bulgaristan-prensligi": BD, "katalan": BD,
    "romanya": TU, "romanya-kralligi": TU, "eflak": TU, "bogdan": TU,
    "tabi:Eflak Voyvodalığı": TU, "tabi:Boğdan Voyvodalığı": TU,
    "zaporojye": TU, "tabi:Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)": TU,
    "kirim": TU, "tabi:Kırım Hanlığı": TU, "teodoro": TU,
    "altinorda": KZ, "nogay": KZ, "kazan": KZ, "don-kazak": KZ,
    "transkafkasya": KF, "cerkez": KF,
    "tabi:Çerkez kabileleri (Osmanlı hâkimiyet iddiası)": KF,
    "ceneviz": IT, "sardinya": IT, "sovalye": IT,
    "tabi:Mısır (İbrâhim Paşa)": DI, "tabi:Mısır (Kavalalı)": DI,
    "tabi:Mısır (Hurşid Paşa)": DI, "tabi:eski Memlûk beyleri (Osmanlı desteğiyle)": DI,
    "tabi:Ahmed Bey'in Konstantin beyliği": MG,
    "tabi:Sahra vahalarının özerk idaresi": MG,
}
# ③ sömürge kimlikleri: birincil kendi bölgesi (paketsiz), İKİNCİL anavatan paketi
SOMURGE = {"yeni-ispanya", "ispanyol-peru", "portekiz-brezilyasi",
           "ingiliz-kuzey-amerika", "hollanda-dogu-hint", "ingiliz-hindistani",
           "ingiliz-guyanasi", "hollanda-guyanasi", "fransiz-guyanasi", "ingiliz-malaya"}
# ④ Osmanlı'nın kendi iç kimlikleri — ülke paketinin değil ÇEKİRDEĞİN işi
CEKIRDEK = {"OSMANLI", "suleyman-celebi", "musa-celebi", "mehmed-celebi", "isa-celebi",
            "tbmm-turkiye", "__BOSLUK__", "—"}


def paket_bul(kimlikler, DEV):
    """(birincil, [ikinciller], sinif) — kimlik listesi sırayla: yeniler, sonra eskiler."""
    pk = []
    bolgeler = []
    for s in kimlikler:
        s0 = s[4:] if s.startswith("isg:") else s
        p = PAKET_KIMLIK.get(s0)
        dv = DEV.get(s0) or {}
        b = dv.get("bolge")
        if not p and b:
            p = PAKET_BOLGE.get(b)
        if s0 in SOMURGE:
            p = None
            pk.append(("SOMURGE", AT))
        if p:
            pk.append(("PAKET", p))
        elif b and s0 not in CEKIRDEK:
            bolgeler.append(b)
        elif s0.startswith("tabi:") or s0 in CEKIRDEK:
            pass
        elif not b:
            bolgeler.append("?kunyesiz:" + s0)
    paketler = [p for c, p in pk if c == "PAKET"]
    somurge = [p for c, p in pk if c == "SOMURGE"]
    if paketler:
        bir = paketler[0]
        ikinci = sorted(set(paketler[1:] + somurge) - {bir})
        return bir, ikinci, "paket"
    if bolgeler:
        return "PAKETSIZ:" + bolgeler[0], sorted(set(somurge)), "paketsiz"
    if somurge:
        return "PAKETSIZ:somurge", sorted(set(somurge)), "paketsiz"
    return "CEKIRDEK", [], "cekirdek"


def devletler():
    yol = os.path.join(DATA, "devletler.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.DEVLETLER||[]));" % json.dumps(yol))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8", timeout=90)
    return {d["id"]: d for d in json.loads(c.stdout) if d.get("id")}


def kuyruk_olaylari():
    """Değişmez 2 evreninde OLMAYAN canlı kronoloji dosyaları (kronoloji_*.js,
    kronoloji_sinir* HARİÇ — o zaten evrende)."""
    out, say = [], {}
    for yol in sorted(glob.glob(os.path.join(DATA, "kronoloji*.js"))):
        if os.path.basename(yol).startswith("kronoloji_sinir"):
            continue
        js = open(yol, encoding="utf-8").read()
        adlar = sorted(set(re.findall(r"window\.(KRONOLOJI\w*)\s*=", js)))
        n = 0
        for ad in adlar:
            try:
                kay = D.oku_pencere(yol, ad)
            except Exception as e:  # sayıp bas, sessiz eleme yok
                print(f"  ! okunamadı {os.path.basename(yol)} {ad}: {e}")
                continue
            for o in kay:
                if isinstance(o, dict) and TARIH.match(str(o.get("t") or "")) and o.get("b"):
                    o["_dosya"] = os.path.basename(yol)
                    out.append(o)
                    n += 1
        say[os.path.basename(yol)] = n
    return out, say


def sahip_gecisi(y, d):
    """Yerleşimin o gün BİTEN ve BAŞLAYAN penceresi (s/d/v/isg bütün kollar)."""
    eski, yeni = [], []
    for kol in ("s", "d", "v", "isg"):
        for p in (y.get(kol) or []):
            etiket = (p.get("d") or p.get("k") or "") if kol in ("s", "isg") else (
                "OSMANLI" if kol == "d" else "tabi:" + (p.get("k") or p.get("d") or "?"))
            if kol == "isg":
                etiket = "isg:" + etiket
            if p.get("t") == d:
                eski.append(etiket)
            if p.get("f") == d:
                yeni.append(etiket)
    return "|".join(sorted(set(eski))) or "—", "|".join(sorted(set(yeni))) or "—"


def main():
    json_yaz = "--json-yaz" in sys.argv
    print("Veri okunuyor…")
    Y = D.yerlesimleri_yukle()
    O = D.olaylari_yukle()
    ix = {y["ad"]: y for y in Y}
    Y_cek = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    print(f"  {len(Y)} yerleşim ({len(Y_cek)} çekirdek) · {len(O)} madde (evren)")

    # ── kapının KENDİ zinciri, main()'deki sırayla
    kir_s, acik_ham = D.degismez2(Y_cek, O, ("s",), yer_sarti=True)
    acik_kapsam, disi = D.kapsam_disi(Y, acik_ham)
    yil, acik = D.yil_temsili_ayir(acik_kapsam)
    print(f"  2s: {len(kir_s)} kırılma-günü · AÇIK {len(acik)} · KAPSAM DIŞI {len(disi)}"
          f" · YIL-TEMSİLÎ {len(yil)}  (eşik {D.KAPSAM_ESIGI_KM:.0f} km)")

    DEV = devletler()
    KY, kuyruk_say = kuyruk_olaylari()
    print(f"  kuyruk kronoloji: {len(KY)} madde, {len(kuyruk_say)} dosya")
    # künye içi kronoloji (devletler.js `kronoloji:`) — ekranda detay kartında
    KUNYE_O = []
    for did, dv in DEV.items():
        for o in (dv.get("kronoloji") or []):
            if isinstance(o, dict) and TARIH.match(str(o.get("t") or "")) and o.get("b"):
                KUNYE_O.append(dict(o, _dosya="devletler.js#" + did))

    # ── KAPSAMA: aynı ALÂKA ölçütüyle, genişletilmiş madde evreninde yeniden sor
    kir_kuy, a = D.degismez2(Y_cek, O + KY, ("s",), yer_sarti=True)
    ac_kuy = {r[0] for r in a}
    kir_kun, a = D.degismez2(Y_cek, O + KY + KUNYE_O, ("s",), yer_sarti=True)
    ac_kun = {r[0] for r in a}

    def hala_acik(kirx, acx, d, ad):
        if d not in acx:
            return False
        e = kirx[d].get("eksik")
        return True if not e else (ad in e)

    kayitlar = []
    for kova, liste in (("acik", acik), ("kapsam_disi", disi), ("yil_temsili", yil)):
        for r in liste:
            d = r[0]
            km = r[5] if kova == "kapsam_disi" else None
            tum = kir_s[d].get("eksik") or sorted(kir_s[d]["ad"])
            for ad in tum:
                y = ix.get(ad, {})
                eski, yeni = sahip_gecisi(y, d)
                kayitlar.append({
                    "gun": d, "yerlesim": ad, "kova": kova,
                    "yil_temsili": d[4:] == "-01-01",
                    "eski": eski, "yeni": yeni,
                    "lat": y.get("lat"), "lon": y.get("lon"),
                    "dosya": y.get("_kaynak"), "km": round(km, 1) if km else None,
                    "en_yakin_madde": r[3], "fark_gun": r[4],
                    "kuyrukta_kapali": not hala_acik(kir_kuy, ac_kuy, d, ad),
                    "kunyede_kapali": not hala_acik(kir_kun, ac_kun, d, ad),
                })
    # ── paket + gruplar
    gun_say = Counter(k["gun"] for k in kayitlar)
    olay_say = Counter((k["gun"], k["eski"], k["yeni"]) for k in kayitlar)
    for k in kayitlar:
        sira = k["yeni"].split("|") + k["eski"].split("|")
        k["paket"], k["paket_ikincil"], k["sinif"] = paket_bul(sira, DEV)
        k["gun_grubu"] = gun_say[k["gun"]]
        k["olay_grubu"] = olay_say[(k["gun"], k["eski"], k["yeni"])]

    # ── ④ ÇAPRAZ: 2t kırılmasız maddeler × AÇIK günler · 2i açık
    kir_dv, _ = D.degismez2(Y_cek, O)
    kir_isg, acik_isg = D.degismez2(Y_cek, O, ("isg",))
    ksiz = D.kirilmasiz_madde(kir_dv, kir_s, O, kir_isg)
    acik_gun = [D.gun_no(r[0]) for r in acik]
    capraz = []
    for o in ksiz:
        g = D.gun_no(o["t"])
        yak = [r[0] for r in acik if abs(D.gun_no(r[0]) - g) <= 30]
        capraz.append({"t": o["t"], "b": o.get("b"), "k": o.get("k"),
                       "acik_30g": yak})
    return dict(Y=Y, O=O, kir_s=kir_s, acik=acik, disi=disi, yil=yil,
                DEV=DEV, KY=KY, kuyruk_say=kuyruk_say, kayitlar=kayitlar,
                json_yaz=json_yaz, ksiz=capraz, acik_isg=acik_isg,
                n_kunye_o=len(KUNYE_O))


def ozet(K, anahtar):
    """Bir kayıt kümesinin sayıları: yer · gün · olay adayı · kuyrukta kapalı · net iş."""
    acikta = [k for k in K if not k["kunyede_kapali"]]
    return {
        "toplam_kirilma": len(K),
        "ayri_gun": len({k["gun"] for k in K}),
        "olay_adayi": len({(k["gun"], k["eski"], k["yeni"]) for k in K}),
        "kuyrukta_kapali_yer": sum(k["kuyrukta_kapali"] for k in K),
        "kuyruk_kunye_kapali_yer": sum(k["kunyede_kapali"] for k in K),
        "net_acik_yer": len(acikta),
        "net_acik_gun": len({k["gun"] for k in acikta}),
        "net_olay_adayi": len({(k["gun"], k["eski"], k["yeni"]) for k in acikta}),
    }


def yaz_json(S):
    K = S["kayitlar"]
    rev = subprocess.run(["git", "rev-parse", "--short", "HEAD"], capture_output=True,
                         encoding="utf-8", cwd=KOK).stdout.strip()
    paket = defaultdict(list)
    for k in K:
        paket[k["paket"]].append(k)
        for p in k["paket_ikincil"]:
            paket[p].append(dict(k, birincil=False))
    out = {
        "olcum_ani": datetime.datetime.now().isoformat(timespec="seconds"),
        "denetle_surum": rev,
        "birim_notu": ("denetle.py'de bir 'kırılma' bir GÜNDÜR (degismez2 kir[tarih]). "
                       "kova sayıları GÜN; 'toplam_kirilma' burada (gün, yerleşim) çiftidir."),
        "kova": {"acik": len(S["acik"]), "kapsam_disi": len(S["disi"]),
                 "yil_temsili": len(S["yil"])},
        "kova_ozet": {kv: ozet([k for k in K if k["kova"] == kv], kv)
                      for kv in ("acik", "kapsam_disi", "yil_temsili")},
        "kapsam_esigi_km": D.KAPSAM_ESIGI_KM,
        "kuyruk_dosya": S["kuyruk_say"], "kunye_kronoloji_madde": S["n_kunye_o"],
        "capraz_2t": S["ksiz"],
        "acik_2i": [list(r) for r in S["acik_isg"]],
        "paket": {},
    }
    for p in sorted(paket, key=lambda p: -len(paket[p])):
        kk = paket[p]
        bir = [k for k in kk if k.get("birincil", True)]
        out["paket"][p] = dict(
            ozet(bir, p),
            ikincil_kirilma=len(kk) - len(bir),
            kova={kv: ozet([k for k in bir if k["kova"] == kv], kv)
                  for kv in ("acik", "kapsam_disi", "yil_temsili")},
            kayit=sorted(kk, key=lambda k: (k["gun"], k["yerlesim"])))
    yol = os.path.join(KOK, "denetim", "SENKRON-DEFTER-0929.json")
    json.dump(out, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    return out


if __name__ == "__main__":
    S = main()
    K = S["kayitlar"]
    out = yaz_json(S)
    print("\nPAKET (birincil)   yer · gün · olay · kuyrukta-kapalı · NET açık yer/gün/olay · ikincil")
    for p, v in out["paket"].items():
        print(f"  {p:34s} {v['toplam_kirilma']:5d} {v['ayri_gun']:4d} {v['olay_adayi']:4d}"
              f"  {v['kuyruk_kunye_kapali_yer']:4d}   {v['net_acik_yer']:4d} {v['net_acik_gun']:4d}"
              f" {v['net_olay_adayi']:4d}  +{v['ikincil_kirilma']}")
    print("\n2t × AÇIK:", [(c["t"], c["b"][:40], c["acik_30g"]) for c in S["ksiz"]])
    print("2i açık:", S["acik_isg"])
    print(f"\nYER-KIRILMASI: {len(K)}")
    for kova in ("acik", "kapsam_disi", "yil_temsili"):
        kk = [k for k in K if k["kova"] == kova]
        print(f"  {kova:12s} {len(kk):5d} yer · {len({k['gun'] for k in kk}):4d} gün"
              f" · kuyrukta kapalı {sum(k['kuyrukta_kapali'] for k in kk)}"
              f" · +künye {sum(k['kunyede_kapali'] for k in kk)}")
    c = Counter()
    for k in K:
        for s in (k["eski"] + "|" + k["yeni"]).split("|"):
            c[s] += 1
    print("\nKimlik sıklığı (ilk 80):")
    for s, n in c.most_common(80):
        dv = S["DEV"].get(s.replace("isg:", ""), {})
        print(f"  {n:5d} {s:32s} {dv.get('bolge','')}")
    json.dump(K, open(os.path.join(os.environ.get("TEMP", "."), "senkron_ham.json"), "w",
                      encoding="utf-8"), ensure_ascii=False)
