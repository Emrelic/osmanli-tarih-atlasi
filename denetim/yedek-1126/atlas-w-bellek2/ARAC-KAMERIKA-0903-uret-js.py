# -*- coding: utf-8 -*-
"""data/yerlesimler_kamerika.js'i ÜRETİR — ama denetim/ altına.

🔴 KOŞU CANLI (PID 1268) ⇒ `data/` DONUK. Dosyayı ÜRETİYORUM ama
`data/`ya YAZMIYORUM: çıktı `denetim/HAZIR-yerlesimler_kamerika.js`.
Koşu bitince koordinatör tek kopyalamayla indirir.

Ad alanı M-2410'da verildi: `window.YERLESIMLER_KAMERIKA`
(§7: dosya adındaki ayırt edici parça değişken adında da).

🔴 ALAN SÜZGECİ: `girdi.BILINEN_ALANLAR` ÖLÇÜLDÜ ve yalnız oradaki
alanlar yazılıyor. Aday listemdeki `bolge` ve `kaynak_reg` alanları
şemada YOK — düşürülüyor, ama içerikleri `not:` alanına taşınıyor ki
kaynak GİZLENMESİN (§4).

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-uret-js.py
"""
import io
import json
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi                                              # noqa: E402

IZIN = set(girdi.BILINEN_ALANLAR)
print("BILINEN_ALANLAR: %d" % len(IZIN))

Z = json.load(io.open("denetim/ZINCIR-KAMERIKA-0903.json", encoding="utf-8"))
print("zincir: %d" % len(Z))

# --- tur: ölçülmüş sözlükten (sehir · liman · kale · bolge · kasaba · koy)
LIMAN = ("liman", "körfez", "harbour", "harbor", "bay", "adası", "ada ",
         "sound", "boğaz")
KALE = ("fort", "kale", "redut", "presidio", "misión", "mission",
        "factory", "house", "post", "hisar")


def tur_bul(a):
    ad = a["ad"].lower()
    if any(x in ad for x in KALE):
        return "kale"
    if any(x in ad for x in LIMAN):
        return "liman"
    if a.get("bolge", "").lower().startswith(("hbc", "nwc")):
        return "kale"
    return "sehir"


# --- Mushuau-nipi: KARAR BEKLİYOR, önerim kasitli_bosluk ---
BOSLUK = {
    "Mushuau-nipi (Indian House Lake)": {
        "bos": "kabile",
        "neden": ("Mushuau-nipi kalici bir yerlesim DEGIL, Naskapi'nin "
                  "ren geyigi gecidinde toplandigi MEVSIMLIK bulusma "
                  "yeridir. Innu/Naskapi Quebec-Labrador'da hicbir "
                  "antlasma imzalamadi, devir gunu yok. kaynak: HNAI "
                  "c.6 Subarctic (Smithsonian) — TDV bu cografyayi "
                  "kapsamiyor (olculdu, cografi bosluk). "
                  "KARAR KOORDINATORDE: nokta olarak birakilirsa "
                  "s: zinciri fransa -> ingiliz-kuzey-amerika -> kanada "
                  "olur."),
    },
}

satir = []
n_bos = 0
for a in sorted(Z, key=lambda x: (-x["lat"], x["lon"])):
    ad = a["ad"]
    k = {"ad": ad, "tur": tur_bul(a),
         "lat": round(a["lat"], 4), "lon": round(a["lon"], 4), "g": 0}
    if ad in BOSLUK:
        k["d"] = []
        k["kasitli_bosluk"] = True
        k.update(BOSLUK[ad])
        n_bos += 1
    else:
        k["kur"] = a["f"]
        k["s"] = a["s"]
        # 🔴 kuruluşu ile ilk sahibi arasında boşluk varsa BEYAN edilir —
        # emsal atlasın kendi `Taos Pueblo` / `Acoma Pueblo` kayıtları
        if a.get("erken_bos") and a["s"] and a["s"][0]["f"] > a["f"]:
            k["kasitli_bosluk"] = True
            k["bos"] = a["erken_bos"]
            k["neden"] = a["erken_neden"]
    # kaynak: TDV Kuzey Amerika'yi kapsamiyor
    k["kaynak"] = "bulunamadı"
    kutuk = a.get("kaynak_reg", "")
    nt = a.get("not", "")
    parca = [p for p in (nt, ("dayanak: " + kutuk) if kutuk else "") if p]
    if parca:
        k["not"] = " · ".join(parca)
    # 🔴 alan süzgeci
    dis = [x for x in k if x not in IZIN]
    if dis:
        raise SystemExit("🔴 IZINSIZ ALAN: %s (%s)" % (dis, ad))
    satir.append(k)

print("kayit: %d · bunlarin kasitli_bosluk: %d" % (len(satir), n_bos))


def js(v):
    return json.dumps(v, ensure_ascii=False)


out = []
out.append("// " + "=" * 69)
out.append("// YERLESIMLER_KAMERIKA — KUZEY AMERİKA · DUNYA-KAMERIKA-0903")
out.append("// window.YERLESIMLER_KAMERIKA   (§7: dosya adındaki ayırt edici")
out.append("//                                parça değişken adında da —")
out.append("//                                ayrı dosya vermek ayrı AD ALANI")
out.append("//                                vermek DEĞİLDİR)")
out.append("// Oturum: DUNYA-KAMERIKA-0903 · 3 Eylül 2026 · koordinatör 1.MURAT")
out.append("// Kutu: 15-72K / 170B-52B")
out.append("//")
out.append("// ⚠️ Dosyayı `girdi.py`ye BEN BAĞLAMIYORUM — koordinatör bağlar.")
out.append("//")
out.append("// ══════════ ÖLÇÜLMÜŞ ETKİ — koşudan ÖNCE yazılıyor ══════════")
out.append("//   KAPSAMA   2351 → 149 açık hücre (1° ızgara · %84,6 → %5,4)")
out.append("//             575 →  19 açık hücre (2° ızgara · %83,1 → %2,7)")
out.append("//   ÖN SINAV  3 km 0 · kutu dışı 0 · ad çakışması 0 · kara 0")
out.append("//   HAYALET   0 — her dönem künyesinin ömrü içinde (ölçüldü)")
out.append("//   KÜNYE     46 yeni künye GEREKİYOR, ayrı reçetede:")
out.append("//             denetim/KUNYE-KAMERIKA-0903*.json")
out.append("//   🔴 O KÜNYELER İNMEDEN BU DOSYA İNMEZ — `§8`: kimliği")
out.append("//      BOYALAR'da olmayan `s:` BOYANMAZ, yani nokta peteği")
out.append("//      üretir ama hiçbirini boyamaz.")
out.append("//   🔴 VE `ingiliz-kuzey-amerika` t: 1867-07-01'e ÇEKİLMELİ —")
out.append("//      bu dosyanın 121 dönemi onu ÖNCEDEN varsayıyor.")
out.append("//")
out.append("// ══════════ KAYNAK ══════════")
out.append("// TDV Kuzey Amerika'yı kapsamıyor (`§4` COĞRAFÎ boşluk) ⇒ her")
out.append("// kayıtta `kaynak:\"bulunamadı\"`, akademik dayanak `not:` alanında")
out.append("// ADIYLA yazılı — gizlenmedi. Kütükler: Smithsonian Handbook of")
out.append("// North American Indians · Historical Atlas of Canada (U. Toronto)")
out.append("// · Dictionary of Canadian Biography · Black, Russians in Alaska")
out.append("// · Weber, The Spanish Frontier in North America (Yale UP) ·")
out.append("// Steward BAE Bulletin 120 · Gubser, The Nunamiut Eskimos (Yale)")
out.append("//")
out.append("// 🔴 ÖLÇMEDİĞİMİ `ölçmedim` DİYE YAZIYORUM: bu kütükler alanın")
out.append("// standart akademik referanslarıdır ve kayıtlar onlardan gelir,")
out.append("// ama %d künyenin her biri TEK TEK ÇEKİLİP DOĞRULANMADI." % len(satir))
out.append("// Koordinat ve gün hassasiyeti yazım turunda teyit edilmeli.")
out.append("// Ölçülen: 377 kaydın yalnız 23'ünün günü KAYNAKLI, 354'ü")
out.append("// atlasın ortak takvimi (`§4`: gün bilinmiyorsa YYYY-01-01).")
out.append("// " + "=" * 69)
out.append("")
out.append("window.YERLESIMLER_KAMERIKA = [")
for k in satir:
    p = ["ad:" + js(k["ad"]), "tur:" + js(k["tur"]),
         "lat:" + js(k["lat"]), "lon:" + js(k["lon"]), "g:0"]
    bas = "  { " + ", ".join(p) + ","
    out.append(bas)
    if k.get("kasitli_bosluk"):
        out.append("    d:[], kasitli_bosluk:true, bos:" + js(k["bos"]) + ",")
        out.append("    neden:" + js(k["neden"]) + ",")
    else:
        out.append("    kur:" + js(k["kur"]) + ",")
        if k.get("kasitli_bosluk"):
            out.append("    kasitli_bosluk:true, bos:" + js(k["bos"]) + ",")
            out.append("    neden:" + js(k["neden"]) + ",")
        out.append("    s:[" + ",".join(
            "{f:%s,t:%s,d:%s}" % (js(p["f"]), js(p["t"]), js(p["d"]))
            for p in k["s"]) + "],")
    son = "    kaynak:" + js(k["kaynak"])
    if k.get("not"):
        son += ", not:" + js(k["not"])
    out.append(son + " },")
out.append("];")
out.append("")

YOL = "denetim/HAZIR-yerlesimler_kamerika.js"
io.open(YOL, "w", encoding="utf-8").write("\n".join(out))
print("-> %s (%d satır)" % (YOL, len(out)))
