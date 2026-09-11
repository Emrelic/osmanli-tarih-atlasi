# -*- coding: utf-8 -*-
"""
ARAC-YANLIS-OLAY-0911.py
Gorev: oturumlar/ (YANLIS OLAY sevki, 11 Eylul 2026)
Soru : kompozit "iki olay tek madde" kayitlarinda `t:` alani LABEL'in
       vurguladigi olaya mi, yoksa KOMSU olaya mi ait?

Emsal ①: afgan-durrani (staging, HAZIRLIK-DALGA2-0911.json) - t: Timur
  Sah'in OLUM gunu, metin Zaman Sah'in CULUSUNU anlatiyor.
Emsal ②: Ibrahim'in olumu (canli, olaylar*.js) - b:"hal'i ve katli",
  gun:"8-18 Agustos", t:08 (hal'/deposition) ama LABEL "katli"yi de
  vurguluyor ve GERCEK idam 18'i (TDV ile onceki gorevde dogrulandi).

KONVANSIYON HIPOTEZI (onceki uc gorevden, olcumden ONCE yazildi):
  "X'in vefati VE Y'nin culusu" bicimindeki kompozit maddelerde veri
  seti TUTARLI olarak IKINCI olayin (culus) gununu kullanir (Selim II
  emsali: DOGRU). Ibrahim'in "hal'i ve katli" maddesi bu konvansiyonu
  BOZUYOR (BIRINCI olayin - hal' - gununu kullaniyor).
  ⇒ Test: t: HANGI ucun (birinci mi ikinci mi olay) gunune denk
    geliyor, ve bu konvansiyonla TUTARLI mi?

YONTEM:
  1. b: metninde IKI olay ceklen (once-biten fiil + sonra-baslayan fiil)
     "ve" ile baglanmis kompozit maddeleri bul.
  2. gun: alaninda ACIKCA IKI ayri gun veren adaylari sec (aralik
     "D1-D2 AY YIL" ya da "D1 AY YIL (olay1) - D2 AY YIL (olay2)").
  3. t:'nin D1'e mi D2'ye mi denk geldigini bul.
  4. KONVANSIYONA gore: t: == D2 (ikinci/sonraki olay) -> DOGRU;
     t: == D1 (birinci/onceki olay) -> YANLIS OLAY adayi.

D124: uc kaynak (CEKIRDEK/KUYRUK/KUNYE_KRONOLOJI) AYRI raporlanir.
D010: iki bilinen pozitif (Ibrahim'in olumu SU AN canli, afgan-durrani
  STAGING'de - ikincil elle dogrulama) ile sinanir.
"""
import json
import os
import re
import subprocess
import sys
import tempfile

REPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
TMP = tempfile.gettempdir()
EXTRACT_JSON = os.path.join(TMP, "yanlis_olay_extract.json")

AYLAR = {
    "ocak": 1, "şubat": 2, "subat": 2, "mart": 3, "nisan": 4,
    "mayıs": 5, "mayis": 5, "haziran": 6, "temmuz": 7,
    "ağustos": 8, "agustos": 8, "eylül": 9, "eylul": 9,
    "ekim": 10, "kasım": 11, "kasim": 11, "aralık": 12, "aralik": 12,
}
_AY_ALT = "|".join(sorted(set(
    [a.capitalize() for a in AYLAR] + list(AYLAR.keys()) +
    ["Şubat", "şubat", "Ağustos", "ağustos", "Eylül", "eylül",
     "Mayıs", "mayıs", "Kasım", "kasım", "Aralık", "aralık"]
), key=len, reverse=True))

# TEK bir olay-anahtar-kelime kumesi — b: icinde EN AZ IKI FARKLI
# anahtar kelime (ORTUSMEYEN) geciyorsa KOMPOZIT (iki-olay-tek-madde)
# adayi sayilir. Ilk tasarim "onceki-biten + sonraki-baslayan" ikilisini
# ZORUNLU tutuyordu ve Ibrahim'in "hal'i ve katli" (AYNI KISININ IKI
# ARDISIK olayi, halef YOK) vakasini KACIRDI (D010 sinamasi bunu
# YAKALADI, arac YAKALAMADI) — D187 uyarisi: bos kume/kacirma once
# ELE VERILDI, sonra DUZELTILDI. Simdi TEK BIRLESIK KUME kullaniliyor.
RX_OLAY = re.compile(
    r"öldü|vefat|katl|katledil|boğdur|idam edil|hal'i|hal etti|"
    r"tahttan (in|çek)|indirilmesi|çekilmesi|sona erdi|"
    r"tahta çı|cülûs|cülus|padişah oldu|hükümdar oldu|"
    r"ilân edildi|iktidar[ıi] ele geçirdi"
)

# gun: icinde IKI AYRI GUN — ya "D1-D2 AY YIL" araligi ya da
# "D1 AY YIL (...) - D2 AY YIL (...)" bicimi.
RX_ARALIK_TEK_AY = re.compile(
    r"(\d{1,2})\s*[–-]\s*(\d{1,2})\s+(" + _AY_ALT + r")\s*(\d{4})?"
)
RX_IKI_TAM_TARIH = re.compile(
    r"(\d{1,2})\s+(" + _AY_ALT + r")\s*(\d{4})?[^0-9]{0,30}?"
    r"[–-][^0-9]{0,10}?(\d{1,2})\s+(" + _AY_ALT + r")\s*(\d{4})?"
)


def ay_no(ad):
    return AYLAR.get(ad.lower().replace("ı", "i").replace("ş", "s")
                      .replace("ğ", "g").replace("ü", "u").replace("ö", "o")
                      .replace("ç", "c"), None)


def extract_all():
    script = r"""
const fs = require('fs');
const path = require('path');
const KOK = process.argv[1];
const OUT = process.argv[2];

function ekle(liste, kaynak, dosya, kunyeId, arr) {
  if (!Array.isArray(arr)) return;
  for (const r of arr) {
    if (r && r.t && r.b) liste.push({kaynak, dosya, kunye: kunyeId || null,
      t: r.t, b: r.b, gun: r.gun || "", tur: r.tur || ""});
  }
}

const sonuc = [];

global.window = {};
const cekirdekDosyalar = fs.readdirSync(path.join(KOK,'data'))
  .filter(f => /^olaylar.*\.js$/.test(f));
for (const f of cekirdekDosyalar) eval(fs.readFileSync(path.join(KOK,'data',f), 'utf8'));
for (const k of Object.keys(global.window)) {
  if (Array.isArray(global.window[k])) ekle(sonuc, 'CEKIRDEK', 'olaylar*.js', null, global.window[k]);
}

global.window = {};
const kuyrukDosyalar = fs.readdirSync(path.join(KOK,'data'))
  .filter(f => /^kronoloji.*\.js$/.test(f));
for (const f of kuyrukDosyalar) eval(fs.readFileSync(path.join(KOK,'data',f), 'utf8'));
for (const k of Object.keys(global.window)) {
  if (Array.isArray(global.window[k])) ekle(sonuc, 'KUYRUK', 'kronoloji*.js', null, global.window[k]);
}

global.window = {};
eval(fs.readFileSync(path.join(KOK,'data','devletler.js'), 'utf8'));
const D = global.window.DEVLETLER || [];
for (const d of D) ekle(sonuc, 'KUNYE_KRONOLOJI', 'devletler.js', d.id, d.kronoloji);

fs.writeFileSync(OUT, JSON.stringify(sonuc));
console.log(JSON.stringify({toplam: sonuc.length}));
"""
    r = subprocess.run(["node", "-e", script, REPO, EXTRACT_JSON],
                        capture_output=True, text=True, encoding="utf-8", cwd=REPO)
    if r.returncode != 0:
        print("HATA:", r.stderr, file=sys.stderr)
        sys.exit(1)
    print("node ozeti:", r.stdout.strip())
    with open(EXTRACT_JSON, "r", encoding="utf-8") as f:
        return json.load(f)


def parse_t_gun(t):
    m = re.match(r"^\d{1,4}-\d{2}-(\d{2})$", t or "")
    return int(m.group(1)) if m else None


def iki_gun_bul(gun_metni):
    """gun: metninden IKI ayri gunu (D1, D2, ay_no) olarak cikarir.
    Once 'D1 AY (...) - D2 AY (...)' TAM bicimi denenir (aylar farkli
    olabilir), sonra 'D1-D2 AY' TEK-AY araligi."""
    if not gun_metni:
        return None
    m = RX_IKI_TAM_TARIH.search(gun_metni)
    if m:
        d1, ay1, _, d2, ay2, _ = m.groups()
        a1, a2 = ay_no(ay1), ay_no(ay2)
        if a1 and a2:
            return (int(d1), a1), (int(d2), a2)
    m = RX_ARALIK_TEK_AY.search(gun_metni)
    if m:
        d1, d2, ay, _ = m.groups()
        a = ay_no(ay)
        if a:
            return (int(d1), a), (int(d2), a)
    return None


def analiz(kayitlar):
    sonuc = {"CEKIRDEK": [], "KUYRUK": [], "KUNYE_KRONOLOJI": []}
    aday_sayaci = {"CEKIRDEK": 0, "KUYRUK": 0, "KUNYE_KRONOLOJI": 0}
    for kayit in kayitlar:
        b = kayit["b"]
        olay_sayisi = len(RX_OLAY.findall(b))
        if olay_sayisi < 2:
            continue  # kompozit gecis degil (tek olay)
        gunler = iki_gun_bul(kayit.get("gun", ""))
        if not gunler:
            continue  # gun: iki ayri tarih vermiyor, bu araclarla olculemez
        aday_sayaci[kayit["kaynak"]] += 1
        (d1, a1), (d2, a2) = gunler
        tg = parse_t_gun(kayit["t"])
        tm = re.match(r"^\d{1,4}-(\d{2})-\d{2}$", kayit["t"])
        tay = int(tm.group(1)) if tm else None
        # KONVANSIYON: t: gun:'in IKINCI (sonraki/daha GEC) tarihine denk
        # gelmeli. d1/d2 gun: metninde YAZILIS SIRASINA gore, cogunlukla
        # kronolojik sira ile ayni (erken->gec).
        if tg is None:
            kova = "OLCULEMEDI"
        elif tg == d2 and tay == a2:
            kova = "DOGRU"
        elif tg == d1 and tay == a1:
            kova = "YANLIS_OLAY"  # t: birinci/erken tarihe denk geliyor
        else:
            kova = "OLCULEMEDI"
        sonuc[kayit["kaynak"]].append({
            **kayit, "gun_ayristirilan": [[d1, a1], [d2, a2]],
            "t_gun_ay": [tg, tay], "kova": kova,
        })
    return sonuc, aday_sayaci


def d010_sinama(kayitlar):
    ibrahim = [k for k in kayitlar if k["kaynak"] == "CEKIRDEK"
               and "İbrahim" in k["b"] and "katl" in k["b"]]
    print("\n--- D010: bilinen pozitif (İbrahim'in ölümü) canlı veride aranıyor ---")
    for k in ibrahim:
        print(" bulundu:", k["t"], "|", k["gun"], "|", k["b"])


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    kayitlar = extract_all()
    d010_sinama(kayitlar)
    sonuc, aday_sayaci = analiz(kayitlar)

    print(f"\nTOPLAM MADDE: {len(kayitlar)}")
    for kaynak in ("CEKIRDEK", "KUYRUK", "KUNYE_KRONOLOJI"):
        print(f"\n=== {kaynak} (gün-çift veren kompozit aday: {aday_sayaci[kaynak]}) ===")
        for kova_ad in ("YANLIS_OLAY", "DOGRU", "OLCULEMEDI"):
            grup = [x for x in sonuc[kaynak] if x["kova"] == kova_ad]
            print(f"  {kova_ad:14s} {len(grup)}")
            for x in grup[:25]:
                kim = x.get("kunye") or x.get("dosya")
                print(f"    [{kim}] t:{x['t']}  gun:{x['gun']!r}")
                print(f"        b:{x['b'][:100]}")

    out_path = os.path.join(REPO, "denetim", "OLCUM-YANLIS-OLAY-0911.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=1)
    print(f"\nTam çıktı: {out_path}")


if __name__ == "__main__":
    main()
