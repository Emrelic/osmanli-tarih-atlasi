# -*- coding: utf-8 -*-
"""12 aynı-id çift için LAB kararlarını (yama_cift_id.json) uygular — KASA, 17 Kasım 2026.
Kullanım: py denetim/SEHIR-DUNYA-1116/CIFT-ID/uygula_cift_id.py [--uygula]   (varsayılan DRY-RUN)
  birlestir: dusen_dosya'daki kaydı SİL, tasinan_olay/tasinan_sahip'i kalan kayda EKLE (tarihe göre sıralı, aynı t+b varsa atla),
             silinen kaydın TAMAMI + atlas_sonrasi_* içerik ARSIV-1117.json'a yazılır (bilgi kaybı olmasın).
  id_yeniden_adlandir: dosya içinde eski_id -> yeni_id.
Her dosya, yazmadan önce BİÇİM geri-dönüş sınamasından geçer (JSON yeniden yazım = orijinal bayt bayt)."""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
D = os.path.dirname(os.path.abspath(__file__))
UYGULA = "--uygula" in sys.argv
AD = {"k3_g1": "sehir_tarihce_k3_g1.js", "osm": "sehir_tarihce_osm.js", "k3": "sehir_tarihce_k3.js",
      "magrip": "sehir_tarihce_afrika_magrip.js", "k12": "sehir_tarihce_k12.js"}


def yol(k):
    return os.path.join(KOK, "data", AD.get(k, k if k.endswith(".js") else "sehir_tarihce_" + k + ".js"))


def oku(p):
    s = open(p, encoding="utf-8", newline="").read()
    i = s.index("window.")
    j = s.index("= [", i) + 2
    return s[:i], s[i:j - 2].strip(), json.loads(s[j:].rstrip().rstrip(";")), s


def yaz_metin(ust, ad, veri):
    return ust + ad + " = " + json.dumps(veri, ensure_ascii=False, indent=1) + ";\n"


yamalar = json.load(open(os.path.join(D, "yama_cift_id.json"), encoding="utf-8"))
dosyalar = {}


def al(k):
    p = yol(k)
    if p not in dosyalar:
        ust, ad, veri, orj = oku(p)
        if yaz_metin(ust, ad, veri).replace("\r\n", "\n") != orj.replace("\r\n", "\n"):
            print("BİÇİM BİREBİR DEĞİL:", os.path.basename(p)); sys.exit(1)
        dosyalar[p] = [ust, ad, veri, "\r\n" in orj]
    return dosyalar[p]


def bul(veri, i):
    r = [k for k in veri if k["id"] == i]
    return r[0] if len(r) == 1 else None


arsiv = []
ozet = []
for y in yamalar:
    i = y["id"]
    if y["islem"] == "id_yeniden_adlandir":
        d = al(y["dosya"])
        k = bul(d[2], y["eski_id"])
        if not k:
            ozet.append((i, "ATLA", "eski_id bulunamadı")); continue
        if bul(d[2], y["yeni_id"]):
            ozet.append((i, "ATLA", "yeni_id zaten var")); continue
        k["id"] = y["yeni_id"]
        ozet.append((i, "TAMAM", "%s -> %s (%s)" % (y["eski_id"], y["yeni_id"], y["dosya"])))
        continue
    kd, dd = al(y["kalan_dosya"]), al(y["dusen_dosya"])
    kalan, dusen = bul(kd[2], i), bul(dd[2], i)
    if not kalan or not dusen:
        ozet.append((i, "ATLA", "kalan/düşen kayıt bulunamadı (kalan=%s düşen=%s)" % (bool(kalan), bool(dusen)))); continue
    ekle_o = 0
    for o in y.get("tasinan_olay", []):
        if not any(x.get("t") == o.get("t") and x.get("b") == o.get("b") for x in kalan.get("olay", [])):
            kalan.setdefault("olay", []).append(o); ekle_o += 1
    ekle_s = 0
    for s in y.get("tasinan_sahip", []):
        if not any(x.get("f") == s.get("f") and x.get("d") == s.get("d") for x in kalan.get("sahip", [])):
            kalan.setdefault("sahip", []).append(s); ekle_s += 1
    if ekle_o:
        kalan["olay"].sort(key=lambda x: x.get("t", ""))
    if ekle_s:
        kalan["sahip"].sort(key=lambda x: x.get("f", ""))
    arsiv.append({"id": i, "dusen_dosya": y["dusen_dosya"], "kalan_dosya": y["kalan_dosya"], "dusen_kayit": dusen,
                  "atlas_sonrasi_olay_tasinmadi": y.get("atlas_sonrasi_olay_tasinmadi", []),
                  "atlas_sonrasi_sahip_tasinmadi": y.get("atlas_sonrasi_sahip_tasinmadi", [])})
    dd[2].remove(dusen)
    ozet.append((i, "TAMAM", "kalan %s ← +%d olay +%d sahip; düşen %s kaydı silindi (arşivlendi); atlas sonrası taşınmayan: %d olay %d sahip" % (
        y["kalan_dosya"], ekle_o, ekle_s, y["dusen_dosya"], len(y.get("atlas_sonrasi_olay_tasinmadi", [])), len(y.get("atlas_sonrasi_sahip_tasinmadi", [])))))
for o in ozet:
    print("[%s] %s  %s" % (o[1], o[0], o[2]))
if UYGULA:
    for p, (ust, ad, veri, crlf) in dosyalar.items():
        m = yaz_metin(ust, ad, veri)
        if crlf:
            m = m.replace("\n", "\r\n")
        open(p, "w", encoding="utf-8", newline="").write(m)
        print("yazıldı:", os.path.relpath(p, KOK))
    json.dump(arsiv, open(os.path.join(D, "ARSIV-1117.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("arşiv:", os.path.join(D, "ARSIV-1117.json"), len(arsiv), "kayıt")
else:
    print("DRY-RUN: --uygula ile yazılır")
