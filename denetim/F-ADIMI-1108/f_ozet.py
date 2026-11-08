#!/usr/bin/env py
# -*- coding: utf-8 -*-
"""sonuc.json -> OZET.md  (kullanım: py f_ozet.py [sonuc.json] [OZET.md])"""
import collections, json, os, sys
BU = os.path.dirname(os.path.abspath(__file__))
src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BU, "sonuc.json")
dst = sys.argv[2] if len(sys.argv) > 2 else os.path.join(BU, "OZET.md")
R = json.load(open(src, encoding="utf-8"))
L = []
w = L.append
m = R["meta"]
w("# F-ADIMI-1108 — toprak-değişimi maddeleri haritada gösteriliyor mu? (SALT ÖLÇÜM)\n")
w(f"Taban commit: `{m['taban_commit'][:9]}` · tohum {m['tohum']} · {m['zaman']}")
for k in ("data/donemler.js", "data/devletler_harita.js"):
    v = m[k]
    w(f"- {k}: {v['boyut']/1e6:.1f} MB · sha256 `{v['sha256']}`" if isinstance(v, dict) else f"- {k}: YOK")
w("\nYöntem: Değişmez 2 kırılma↔madde çiftleri (denetle.py `degismez2`, yalnız MADDESİ OLAN/kapalı kırılmalar) → bir yerleşim + "
  "±30 günde yer-eşleşen en yakın madde → üretilmiş haritada (Osmanlı `o/v/h` gövdesi + `devletler_harita` gövdeleri) "
  "yerleşimin KOORDİNATI için nokta-içinde-poligon ile sahip kümesi, madde gününün -4..+3 komşuluğunda. "
  "EVET = sahip kümesi madde gün-1 ile gün arasında değişiyor; KAYMA = ±3 gün içinde başka bir günde; YOK = ±3 günde değişmiyor. "
  "Gövde dışı noktalar için 4 km yakınlık yedeği.\n")
O1 = R.get("olcum1")
if O1:
    ex = O1["ornek"]
    w("## ÖLÇÜM 1 — kırılma↔madde çiftinin haritadaki karşılığı\n")
    w("Evren (kapalı kırılma sayısı): " + " · ".join(f"{k}: {v['kapali']} (örnek {v['ornek']})" for k, v in O1["kapali"].items()) + "\n")
    w("| tabaka | n | EVET | ±3g KAYMA | YOK | ÖLÇÜLEMEDİ |\n|---|---|---|---|---|---|")
    ad = {"dv": "Osmanlı d/v", "s": "yabancı s", "isg": "işgal"}
    tot = collections.Counter()
    for k in ("dv", "s", "isg", None):
        sub = [e for e in ex if k is None or e["kat"] == k]
        c = collections.Counter(e["sinif"] for e in sub)
        n = len(sub) or 1
        f = lambda x: f"{c[x]} (%{100*c[x]/n:.0f})"
        w(f"| {ad.get(k,'TOPLAM')} | {len(sub)} | {f('EVET')} | {f('KAYMA')} | {f('YOK')} | {f('OLCULEMEDI')} |")
    w("\nKırılma GÜNÜNDE (veri→harita sadakati, madde değil): " +
      " · ".join(f"{ad[k]} %{100*sum(e['harita_kir_degisti'] for e in ex if e['kat']==k)/max(1,sum(1 for e in ex if e['kat']==k)):.0f}"
                  for k in ("dv", "s", "isg")) + " örnekte harita sahibi kırılma gününde değişiyor.")
    w("Yıl-temsili (YYYY-01-01) kırılma payı: " + ", ".join(
        f"{ad[k]} %{100*sum(e['ocak1'] for e in ex if e['kat']==k)/max(1,sum(1 for e in ex if e['kat']==k)):.0f}" for k in ("dv", "s", "isg")))
    w("Madde yeri adıyla eşleşmeyen (yalnız yakınlık) çift payı: %{:.0f}\n".format(100 * sum(not e["yer_esles"] for e in ex) / len(ex)))
    w("### YOK ve KAYMA nedenleri\n")
    nd = collections.Counter((e["sinif"], e["neden"].split(":")[0] if e["sinif"] == "YOK" else "kayma") for e in ex if e["sinif"] in ("YOK", "KAYMA"))
    for (s, n), c in nd.most_common():
        w(f"- {s} · {n}: {c}")
    for k in ("dv", "s", "isg"):
        sub = [e for e in ex if e["kat"] == k and e["sinif"] == "YOK"]
        c = collections.Counter(e["neden"].split(":")[0] for e in sub)
        w(f"  - {ad[k]} YOK ({len(sub)}): " + "; ".join(f"{a} {b}" for a, b in c.most_common()))
    w("\n### Örnek vakalar (her sınıftan; madde / gün / yerleşim / sonuç)\n")
    w("| id | madde günü | madde | yerleşim | kırılma günü (fark) | harita (gün-1 → gün) | sonuç |\n|---|---|---|---|---|---|---|")
    secim = []
    for s_ in ("EVET", "KAYMA", "YOK", "OLCULEMEDI"):
        sub = [e for e in ex if e["sinif"] == s_]
        secim += sub[:: max(1, len(sub) // (4 if s_ in ("EVET", "YOK") else 2))][: (4 if s_ in ("EVET", "YOK") else 2)]
    for e in secim[:12]:
        mh = e.get("harita_madde_sahipler") or {}
        w(f"| {e['id']} | {e['madde_t']} | {e['madde_b'][:60]} | {e['ad']} | {e['kir']} ({e['madde_fark']:+d}g) | "
          f"{','.join(e['harita_kir_once'] or [])} → {','.join(e['harita_kir_sonra'] or [])} | {e['sinif']} {e['neden']} |")
    w("\nTüm 400 satır: `sonuc.json` → `olcum1.ornek`.\n")
O2 = R.get("olcum2")
if O2:
    g = O2["genel"]
    w("## ÖLÇÜM 2 — Değişmez 2 evreni DIŞINDAKİ kronolojiler\n")
    w(f"Madde: {g.get('madde')} · toprak-etiketli (`toprak-kazanc/kayip/degisimi`): {g.get('etiketli')} · yalnız `tur` toprak (etiketsiz): {g.get('yalniz_tur_toprak',0)}")
    D = O2["dosya"]
    tot = collections.Counter()
    for v in D.values():
        tot.update(v)
    n = tot["olculen"] or 1
    w(f"- UFUK dışı (harita verisi/kırılma tanımsız): {tot['ufuk_disi']} · tarih bozuk: {tot['tarih_bozuk']}")
    w(f"- ÖLÇÜLEN: {tot['olculen']}")
    w(f"- ±30 günde HERHANGİ bir kırılma var (gevşek): {tot['gevsek']} (%{100*tot['gevsek']/n:.0f})")
    w(f"- ±30 günde madde yeri/adıyla EŞLEŞEN kırılma var: {tot['yer_eslesen']} (%{100*tot['yer_eslesen']/n:.0f})")
    w(f"- ±3 günde yer-eşleşen kırılma: {tot['yer_eslesen_3g']} (%{100*tot['yer_eslesen_3g']/n:.0f})")
    w(f"- Eşleşmeyen (yer-eşleşen kırılması yok): {tot['olculen']-tot['yer_eslesen']} (%{100*(tot['olculen']-tot['yer_eslesen'])/n:.0f})\n")
    w("### Dosya bazında (eşleşmeyen sayısına göre ilk 40)\n")
    w("| kronoloji dosyası | etiketli | ölçülen | yer-eşleşen | eşleşmeyen | %eşleşmeyen |\n|---|---|---|---|---|---|")
    sat = sorted(D.items(), key=lambda kv: -(kv[1].get("olculen", 0) - kv[1].get("yer_eslesen", 0)))
    for f, v in sat[:40]:
        o = v.get("olculen", 0)
        w(f"| {f} | {v.get('etiketli',0)} | {o} | {v.get('yer_eslesen',0)} | {o-v.get('yer_eslesen',0)} | %{100*(o-v.get('yer_eslesen',0))/max(1,o):.0f} |")
    w(f"\n(Toplam {len(D)} dosya; tüm eşleşmeyen maddeler `eslesmeyen.tsv`.) Not: 'eşleşmeyen' = +-30 günde madde adını/yerini taşıyan "
      "bir yerleşim kırılması yok; bu hem eksik harita verisi hem de harita-dışı olay (savaş, ölüm vb. yanlış etiket) olabilir — "
      "ayrımı ÖLÇÜM 3'teki elle bakış gösteriyor.\n")
    with open(os.path.join(BU, "eslesmeyen.tsv"), "w", encoding="utf-8") as fo:
        fo.write("dosya\ttarih\tbaslik\tyer_id\tkapsam\tgevsek_kirilma_var\n")
        for r in O2["eslesmeyen"]:
            fo.write("\t".join(str(x).replace("\t", " ") for x in r) + "\n")
O3 = R.get("olcum3")
if O3:
    w("## ÖLÇÜM 3 — D2t 'kırılmasız madde' dökümü\n")
    w(f"Toplam: {O3['toplam']}\n")
    c = collections.Counter(r[6] for r in O3["satirlar"])
    w("Otomatik başlık sınıfı: " + " · ".join(f"{a} {b}" for a, b in c.most_common()))
    w("\nTam döküm: `kirilmasiz.tsv`. Elle bakış (ilk 50) aşağıda `EL-BAKIS.md` içindedir.\n")
    with open(os.path.join(BU, "kirilmasiz.tsv"), "w", encoding="utf-8") as fo:
        fo.write("tarih\tbaslik\ttur\tetiket\tyer\tkapsam\toto_sinif\n")
        for r in O3["satirlar"]:
            fo.write("\t".join(str(x).replace("\t", " ") for x in r) + "\n")
_y = os.path.join(BU, "YORUM.md")
if os.path.exists(_y):
    w("\n" + open(_y, encoding="utf-8").read())
open(dst, "w", encoding="utf-8").write("\n".join(L) + "\n")
print("yazıldı", dst)
