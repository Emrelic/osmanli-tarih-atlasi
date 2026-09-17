# -*- coding: utf-8 -*-
"""KOSU13-YAMA — ÖLÇÜM ALETİ (salt okuma). 17 Eylül 2026.

Birleştirilecek harita yamalarının hedef kayıtlarını BUGÜNKÜ veride ölçer:
  ① kayıt var mı, adı tek mi, hangi girdi dosyasında (girdi.yukle)
  ② bugünkü s/d/v/isg dönemleri — yamanın "eski" değeriyle karşılaştırma için
  ③ aynı ad data/yer_yama*.js içinde var mı (VE her koşuda yeniden uygulanıyor:
     `_sahiplik_uygula.py` s: dizisini DEĞİŞTİRİR — bayat kopya düzeltmeyi
     GERİ ALIR, D017)
  ④ künye + renk varlığı (kimlik listesi)
Çıktı: denetim/OLCUM-KOSU13-0917.json
    py denetim/ARAC-KOSU13-OLCUM-0917.py
"""
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

HEDEF = [
    # 0057-SAVA
    "Bosna Brod'u (Bosanski Brod)", "Bosna Dubiçası (Bosanska Dubica)", "Bosna Novi'si (Bosanski Novi)", "Kostayniçe (Kostajnica)", "Jasenovaç (Jasenovac)",
    # 0059-HAZAR / 0063-HAZAR / 0060-KRONO
    "Derbend", "Bakü", "Tarki (Tarku)", "Ağraham burnu", "Lenkeran", "Astara",
    "Salyan", "Kuba", "Şâbüran", "Mahmudâbâd", "Reşt", "Lâhîcan", "Bender Enzeli",
    "Sârî", "Âmül", "Bârfurûş (Bâbil)", "Ferahâbâd", "Eşref (Behşehr)", "Esterâbâd (Gürgân)",
    "Terek deltası (Kızlar)",
    # 0060-IRAN1723 / 0063-IRAN
    "Revan", "Eçmiyadzin", "Şerur (Sharur)", "Mâku", "Gümrü (Aleksandropol)",
    "Nahçıvan", "Ordubad", "Culfa", "Merend", "Urmiye", "Selmâs (Dilman)",
    "Merâga", "Mîyandoab", "Mahabad (Sâvücbulak)", "Senendec (Sine)", "Merîvan",
    "Bâne", "Sakkız", "Serdeşt (Sardasht)", "Bîcâr", "Kotur", "Hoy", "Tebriz",
    "Erdebil", "Halhâl", "Meşkinşehr (Hiyav)", "Sarâb", "Miyâne", "Ahar (Karadağ)",
    "Kliçatak (Suser)", "Norapat", "Şeyh Salû-yi Ulyâ", "Sero", "Kars",
    "Tiflis", "Gence",
]
KIMLIK = ["safevi", "rusya", "habsburg", "avusturya-macaristan", "yugoslavya", "kumuk-samhalligi",
          "kuba-hanligi", "kuba", "afsar", "osmanli"]

Y = girdi.yukle(sessiz=True)
ada = {}
for y in Y:
    ada.setdefault(y["ad"], []).append(y)
norm = getattr(girdi, "norm", None)


def kisa(y):
    return {k: y.get(k) for k in ("s", "d", "v", "isg", "kur", "m", "lat", "lon", "_kaynak")
            if y.get(k) not in (None, [], "")}


# ③ yer_yama kopyaları — node ile, uygulayıcının okuduğu biçimde
JS = r"""
const fs=require('fs');const out=[];
for(const f of fs.readdirSync('data').filter(x=>/^yer_yama.*\.js$/.test(x))){
  global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){out.push({f,hata:String(e).slice(0,80)});continue;}
  for(const k of Object.keys(global.window)){const v=global.window[k];if(!Array.isArray(v))continue;
    for(const r of v){if(r&&r.ad)out.push({f,k,ad:r.ad,s:r.s,d:r.d,v:r.v,isg:r.isg,diger:Object.keys(r)});}}
}
process.stdout.write(JSON.stringify(out));
"""
yy = json.loads(subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                               encoding="utf-8", cwd=KOK).stdout)

sonuc = {"hedef": {}, "bulunamayan": [], "kimlik": {}}
for ad in HEDEF:
    kay = ada.get(ad, [])
    if not kay:
        benzer = [a for a in ada if ad.split(" ")[0].lower() in a.lower()][:8]
        sonuc["bulunamayan"].append({"ad": ad, "benzer": benzer})
        continue
    kopya = []
    for r in yy:
        if r.get("ad") != ad:
            continue
        durum = {}
        for alan in ("s", "d", "v", "isg"):
            if r.get(alan) is None:
                continue
            durum[alan] = "AYNI" if r[alan] == (kay[0].get(alan) or []) else "FARKLI"
        kopya.append({"dosya": r["f"], "alanlar": durum})
    sonuc["hedef"][ad] = {"adet": len(kay), "kayit": kisa(kay[0]), "yer_yama_kopyasi": kopya}

# ④ künye + renk
dev = girdi.oku_devletler() if hasattr(girdi, "oku_devletler") else []
sys.path.insert(0, os.path.join(KOK, "arac"))
try:
    import renkler
    BOY = renkler.BOYALAR
except Exception as e:  # ölçülemedi ≠ yok
    BOY = None
    sonuc["renk_hata"] = str(e)
for k in KIMLIK:
    kun = [d for d in dev if d.get("id") == k]
    harita = kun[0].get("harita") if kun else None
    sonuc["kimlik"][k] = {
        "kunye": {x: kun[0].get(x) for x in ("id", "ad", "f", "t", "harita", "bolge")} if kun else None,
        "renk": (BOY.get(harita or k) if BOY is not None else "ÖLÇÜLEMEDİ"),
    }

io.open("denetim/OLCUM-KOSU13-0917.json", "w", encoding="utf-8").write(
    json.dumps(sonuc, ensure_ascii=False, indent=1))
print("hedef bulunan:", len(sonuc["hedef"]), "| bulunamayan:", len(sonuc["bulunamayan"]))
for b in sonuc["bulunamayan"]:
    print("  YOK:", b["ad"], "→ benzer:", b["benzer"])
print("çok kayıtlı ad:", [a for a, v in sonuc["hedef"].items() if v["adet"] > 1])
for a, v in sonuc["hedef"].items():
    for c in v["yer_yama_kopyasi"]:
        print("  KOPYA", a, c["dosya"], c["alanlar"])
for k, v in sonuc["kimlik"].items():
    print("  KİMLİK", k, (v["kunye"] or {}).get("f"), (v["kunye"] or {}).get("t"),
          "harita=", (v["kunye"] or {}).get("harita"), "renk=", v["renk"], "" if v["kunye"] else "KÜNYE YOK")
