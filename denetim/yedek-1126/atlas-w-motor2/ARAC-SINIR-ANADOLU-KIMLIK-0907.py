# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-KIMLIK-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

Bolgemin NE adlari icin ATLAS KIMLIGI adaylarini arar.

🔴 §4 TURKCE YAZIM EKSENI: bir kimligi "YOK" ilan etmeden once `devletler.js`
   TARANIR, TAHMIN EDILEN id ARANMAZ. (`ingiliz-hindistani` vakasi: sonda bir
   'i' eksik oldugu icin bir hukum curudu.)
🔴 §4 `"İ".lower()` IKI KOD NOKTASI VERIR — ortak normallestirici kullanilir,
   `lower()` DEGIL. (`usku` aramasi `Üsküp`u BULMAZ.)
🔴 VE IKI SORU AYRIDIR:  kimlik_bugun (NE'nin 2020'ler ulkesi)
                         kimlik_1923  (o toprak 1923-10-29'da KIMDI)
   Ikincisi MEKANIK DOLDURULAMAZ: `Syria` bugun devlet, 1923'te Fransiz mandasi.

`devletler.js`i REGEX'le degil NODE ile okur (§11: "veri zaten bir dilde
yazilmissa, o dilin yorumlayicisini cagir" — bu proje bu dersi BES kez ogrendi).
"""
import json, io, sys, os, re, subprocess, unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "OLCUM-KIMLIK-ANADOLU-0907.json")

CEVIRI = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
          ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u", ord("Ö"): "o",
          ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c", ord("Â"): "a", ord("â"): "a",
          ord("Î"): "i", ord("î"): "i", ord("Û"): "u", ord("û"): "u", ord("’"): "'"}


def norm(s):
    s = (s or "").translate(CEVIRI)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


# NE adi -> aranacak Turkce anahtar kelimeler
ARAMA = {
    "Turkey":       ["turkiye", "tbmm", "osmanli"],
    "Iran":         ["iran", "kacar", "pehlevi"],
    "Iraq":         ["irak"],
    "Syria":        ["suriye"],
    "Georgia":      ["gurcistan", "gurcu"],
    "Armenia":      ["ermenistan", "ermeni"],
    "Azerbaijan":   ["azerbaycan"],
    "Russia":       ["rusya", "sovyet", "sscb"],
    "Bulgaria":     ["bulgaristan", "bulgar"],
    "Greece":       ["yunanistan", "yunan"],
    "Turkmenistan": ["turkmenistan", "turkmen", "hive", "buhara"],
    "Afghanistan":  ["afganistan", "afgan"],
    "Pakistan":     ["pakistan", "hindistan"],
}


def devletleri_oku():
    js = r"""
const fs=require('fs');global.window={};
eval(fs.readFileSync(process.argv[2],'utf8'));
const D=window.DEVLETLER||[];
console.log(JSON.stringify(D.map(d=>({id:d.id,ad:d.ad,f:d.f,t:d.t,harita:d.harita,bolge:d.bolge}))));
"""
    yol = os.path.join(KOK, "denetim", "_kunye_oku_anadolu.js")
    open(yol, "w", encoding="utf-8").write(js)
    p = subprocess.run(["node", yol, os.path.join(KOK, "data", "devletler.js")],
                       capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        print("🔴 node hatasi:", p.stderr[:400]); sys.exit(1)
    return json.loads(p.stdout)


def main():
    D = devletleri_oku()
    print("kunye:", len(D))
    CIPA = "1923-10-29"
    sonuc = {}
    for ne, anahtarlar in ARAMA.items():
        bulunan = []
        for d in D:
            n = norm(d["ad"]) + " " + norm(d["id"])
            if any(a in n for a in anahtarlar):
                canli = (d.get("f") or "") <= CIPA <= (d.get("t") or "9999")
                bulunan.append({"id": d["id"], "ad": d["ad"], "f": d.get("f"),
                                "t": d.get("t"), "harita": d.get("harita"),
                                "cipada_canli": canli})
        bulunan.sort(key=lambda r: (not r["cipada_canli"], r["id"]))
        sonuc[ne] = bulunan
        canlilar = [b for b in bulunan if b["cipada_canli"]]
        print("\n%-14s aday %2d · 1923-10-29'da CANLI %d" % (ne, len(bulunan), len(canlilar)))
        for b in bulunan[:8]:
            im = "🟢" if b["cipada_canli"] else "  "
            print("   %s %-28s %-34s %s → %s" % (im, b["id"], b["ad"][:34], b["f"], b["t"]))
    json.dump({"_NOT": "NE adi -> atlas kimligi ADAYLARI. Bu bir ESLEME TABLOSU DEGIL, "
                       "bir ADAY listesidir; secim elle ve gerekceyle yapilir.",
               "cipa": CIPA, "adaylar": sonuc},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("\nyazildi:", CIKTI)


if __name__ == "__main__":
    main()
