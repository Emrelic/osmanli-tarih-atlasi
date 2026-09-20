# -*- coding: utf-8 -*-
"""SINIR-DIS-0070 — sınır boyundaki ışınsal dişlerin ÖLÇÜM aleti.

Soru (Emre, H-0003 · H-0004): sahiplik sınırının dış kenarındaki güneş ışını gibi
üçgen dişlerin kaynağı hangi aşama?

Bu alet YALNIZ ÖLÇER, hiçbir dosyayı değiştirmez. Ölçtüğü şeyler:
  ① o tarihte hangi SERBEST hatları ekranda, belirsizlikleri (u) ne
  ② hat segmentlerinin uzunluğu (km ve piksel) — ekrandaki genişlikle ORANI
  ③ köşe keskinliği (dönüş açısı) ve köşeden dışarı fırlayan lob boyu
  ④ diş sayısı: (dönüş ≥ EŞIK_DONUS) ∧ (genişlik/segment ≥ EŞIK_ORAN) olan köşeler
  ⑤ aynı desenin öteki dönem/bölgelerde ne kadar yaygın olduğu
  ⑥ (--dolgu) dolgu geometrisinde (PARCALAR) gerçek ince mızrak var mı —
     yani diş ÇİZİMDE mi GEOMETRİDE mi

Kullanım:
  py denetim/ARAC-SINIR-DIS-0070.py                 # kutu ölçümü + yaygınlık
  py denetim/ARAC-SINIR-DIS-0070.py --dolgu         # + PARCALAR mızrak taraması (60 MB, yavaş)
  py denetim/ARAC-SINIR-DIS-0070.py --json <yol>    # ölçümü JSON olarak yaz
"""
import json
import math
import sys
import os

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DONEMLER_JS = os.path.join(KOK, "data", "donemler.js")

# Emre'nin iki ekran görüntüsünün künyesi (görselin alt şeridinden birebir).
KUTULAR = [
    # ad,        gorsel,        lat0,  lat1,  lon0,  lon1,  zoom
    ("K-A Bağdat–Şam çölü", "H-0003-1.png", 24.93, 34.90, 36.19, 47.06, 5.4),
    ("K-B Mısır–Sina",      "H-0004-1.png", 16.44, 23.37, 30.72, 36.80, 5.2),
]
HEDEF_TARIH = "1798-07-21"

# js/app.js:1650-1705 — ekranda çizilen genişlik/bulanıklık (k çarpanları birebir)
TAVAN_PX = 80.0
K_HALE, K_HALE_BULANIK = 1.0, 0.85
K_CEKIRDEK, K_CEK_BULANIK = 0.35, 0.28
APP_PAYDA = 67.8          # app.js sabiti (30° enlem çıpası) — enlemden BAĞIMSIZ kullanılıyor

EŞIK_DONUS = 25.0         # derece — bundan keskin köşe "diş adayı"
EŞIK_ORAN = 8.0           # genişlik_px / segment_px — 19 Ağustos raporunun K'sı


def px_km(zoom, lat):
    """Gerçek Web Mercator piksel/km (ekranda ölçülen)."""
    return (2.0 ** zoom) / (78.27 * max(0.05, math.cos(math.radians(lat))))


def genislik_px(u_km, zoom, k, tavan_k):
    """app.js yerOlcek(k) — enlemden bağımsız, 67.8 paydalı, tavanlı."""
    return min(u_km * k * (2.0 ** zoom) / APP_PAYDA, TAVAN_PX * tavan_k)


def km(la1, lo1, la2, lo2):
    R = 6371.0
    p1, p2 = math.radians(la1), math.radians(la2)
    dp = p2 - p1
    dl = math.radians(lo2 - lo1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(a)))


def veri_oku():
    S = U = D = None
    with open(DONEMLER_JS, encoding="utf-8") as f:
        for satir in f:
            if satir.startswith("window.SERBEST ="):
                S = json.loads(satir.split("=", 1)[1].strip().rstrip(";"))
            elif satir.startswith("window.SERBEST_U"):
                U = json.loads(satir.split("=", 1)[1].strip().rstrip(";"))
            elif satir.startswith("window.DONEMLER"):
                D = json.loads(satir.split("=", 1)[1].strip().rstrip(";"))
                break
    return S, U, D


def donem_bul(D, tarih):
    for d in D:
        if d["f"] <= tarih <= d.get("t", "9999-12-31"):
            return d
    return None


def kutuda(nokta, kutu):
    _, _, la0, la1, lo0, lo1, _ = kutu
    return la0 <= nokta[1] <= la1 and lo0 <= nokta[0] <= lo1


def hat_olc(hat, u, zoom, kutu=None):
    """Bir SERBEST hattının segment/köşe ölçüsü. kutu verilirse yalnız kutuya
    düşen köşeler sayılır (ekranda görünen diş)."""
    n = len(hat)
    segler = []
    for i in range(n - 1):
        (lo1, la1), (lo2, la2) = hat[i], hat[i + 1]
        segler.append(km(la1, lo1, la2, lo2))
    kose = []
    for i in range(1, n - 1):
        if kutu and not kutuda(hat[i], kutu):
            continue
        (xa, ya), (xb, yb), (xc, yc) = hat[i - 1], hat[i], hat[i + 1]
        lat = yb
        co = math.cos(math.radians(lat))
        v1 = ((xa - xb) * co, ya - yb)
        v2 = ((xc - xb) * co, yc - yb)
        n1 = math.hypot(*v1)
        n2 = math.hypot(*v2)
        if n1 == 0 or n2 == 0:
            continue
        cosv = max(-1.0, min(1.0, (v1[0] * v2[0] + v1[1] * v2[1]) / (n1 * n2)))
        ic_aci = math.degrees(math.acos(cosv))       # 180° = düz gidiş
        donus = 180.0 - ic_aci                       # 0° = düz
        s_once, s_sonra = segler[i - 1], segler[i]
        pk = px_km(zoom, lat)
        w_hale = genislik_px(u, zoom, K_HALE, K_HALE)
        kisa_px = min(s_once, s_sonra) * pk
        oran = w_hale / kisa_px if kisa_px > 0 else float("inf")
        # 19 Ağustos raporunun lob formülü: köşenin bisektörü boyunca dışarı uzanım
        yari = max(1e-6, math.cos(math.radians(donus / 2.0)))
        lob_px = min(1.0 / yari, 2.0) * w_hale / 2.0
        kose.append({
            "i": i, "lon": xb, "lat": yb,
            "ic_aci": round(ic_aci, 1), "donus": round(donus, 1),
            "seg_once_km": round(s_once, 3), "seg_sonra_km": round(s_sonra, 3),
            "kisa_seg_px": round(kisa_px, 2),
            "genislik_px": round(w_hale, 1),
            "oran": round(oran, 1) if oran != float("inf") else None,
            "lob_px": round(lob_px, 1),
            "lob_km": round(lob_px / pk, 1),
            "dis": bool(donus >= EŞIK_DONUS and oran >= EŞIK_ORAN),
        })
    return segler, kose


def yuzde(dizi, p):
    if not dizi:
        return None
    d = sorted(dizi)
    k = max(0, min(len(d) - 1, int(round((len(d) - 1) * p))))
    return d[k]


def kutu_olcumu(S, U, donem, kutu):
    ad, gorsel, la0, la1, lo0, lo1, zoom = kutu
    sonuc = {"kutu": ad, "gorsel": gorsel, "zoom": zoom,
             "kutu_derece": [la0, la1, lo0, lo1], "hatlar": [], "dis_sayisi": 0}
    for idx in donem.get("sb", []):
        if idx >= len(S):
            continue
        hat = S[idx]
        if not any(kutuda(p, kutu) for p in hat):
            continue
        u = U[idx] if idx < len(U) else 60.0
        segler, kose = hat_olc(hat, u, zoom, kutu)
        disler = [k for k in kose if k["dis"]]
        sonuc["dis_sayisi"] += len(disler)
        sonuc["hatlar"].append({
            "sb": idx, "u_km": u, "kose_sayisi": len(hat),
            "kutudaki_kose": len(kose),
            "uzunluk_km": round(sum(segler), 1),
            "seg_min_km": round(min(segler), 3) if segler else None,
            "seg_medyan_km": round(yuzde(segler, 0.5), 3) if segler else None,
            "hale_px": round(genislik_px(u, zoom, K_HALE, K_HALE), 1),
            "cekirdek_px": round(genislik_px(u, zoom, K_CEKIRDEK, K_CEKIRDEK), 1),
            "dis": len(disler),
            "en_keskin": sorted(disler, key=lambda k: (-k["oran"] if k["oran"] else 0))[:5],
        })
    return sonuc


def yayginlik(S, U, D):
    """⑤ Aynı desen başka dönem/bölgede var mı: her dönemde ekrana gelen sb
    hatlarının kaç tanesi 'diş üretir' sınıfında (u büyük + kısa segment + keskin köşe).
    Zoom olarak ekrandaki en sık kullanılan z5,0 alınır."""
    z = 5.0
    onbellek = {}
    donem_disli = 0
    disli_hatlar = set()
    toplam_hat = set()
    for d in D:
        var = False
        for idx in d.get("sb", []):
            if idx >= len(S):
                continue
            toplam_hat.add(idx)
            if idx not in onbellek:
                u = U[idx] if idx < len(U) else 60.0
                _, kose = hat_olc(S[idx], u, z)
                onbellek[idx] = sum(1 for k in kose if k["dis"])
            if onbellek[idx] > 0:
                var = True
                disli_hatlar.add(idx)
        if var:
            donem_disli += 1
    return {
        "zoom": z,
        "donem_toplam": len(D),
        "donem_dis_ureten": donem_disli,
        "hat_toplam_kullanilan": len(toplam_hat),
        "hat_dis_ureten": len(disli_hatlar),
        "dis_kose_toplam": sum(onbellek.values()),
        "u_medyan": yuzde([U[i] for i in toplam_hat if i < len(U)], 0.5),
        "u_max": max([U[i] for i in toplam_hat if i < len(U)], default=None),
    }


def dolgu_mizrak(donem, kutu, esik_aci=20.0, esik_km=5.0):
    """⑥ Dolgu geometrisinde (PARCALAR) gerçek ince mızrak var mı.
    Diş ÇİZİMDEN geliyorsa burada mızrak ÇIKMAMALI."""
    P = None
    with open(DONEMLER_JS, encoding="utf-8") as f:
        for satir in f:
            if satir.startswith("window.PARCALAR"):
                P = json.loads(satir.split("=", 1)[1].strip().rstrip(";"))
                break
    ad, gorsel, la0, la1, lo0, lo1, zoom = kutu
    mizrak = 0
    incelenen = 0
    ornek = []
    for idx in list(donem.get("o", [])) + list(donem.get("v", [])):
        if idx >= len(P):
            continue
        halka = P[idx]
        if not any(la0 <= p[1] <= la1 and lo0 <= p[0] <= lo1 for p in halka):
            continue
        incelenen += 1
        n = len(halka)
        for i in range(n):
            a, b, c = halka[(i - 1) % n], halka[i], halka[(i + 1) % n]
            if not (la0 <= b[1] <= la1 and lo0 <= b[0] <= lo1):
                continue
            co = math.cos(math.radians(b[1]))
            v1 = ((a[0] - b[0]) * co, a[1] - b[1])
            v2 = ((c[0] - b[0]) * co, c[1] - b[1])
            n1, n2 = math.hypot(*v1), math.hypot(*v2)
            if n1 == 0 or n2 == 0:
                continue
            cosv = max(-1.0, min(1.0, (v1[0] * v2[0] + v1[1] * v2[1]) / (n1 * n2)))
            aci = math.degrees(math.acos(cosv))
            boy = min(km(a[1], a[0], b[1], b[0]), km(b[1], b[0], c[1], c[0]))
            if aci <= esik_aci and boy >= esik_km:
                mizrak += 1
                if len(ornek) < 8:
                    ornek.append({"parca": idx, "lon": b[0], "lat": b[1],
                                  "uc_aci": round(aci, 1), "boy_km": round(boy, 1)})
    return {"kutu": ad, "incelenen_parca": incelenen, "mizrak_kose": mizrak,
            "esik": {"uc_aci_max": esik_aci, "boy_min_km": esik_km}, "ornek": ornek}


def dp_sadelestir(hat, tol_derece):
    """Douglas–Peucker (saf python) — köşe atar, sapma tol'u AŞMAZ."""
    if len(hat) < 3:
        return list(hat), 0.0
    tut = [False] * len(hat)
    tut[0] = tut[-1] = True
    yigin = [(0, len(hat) - 1)]
    en_buyuk_sapma = 0.0
    while yigin:
        a, b = yigin.pop()
        if b <= a + 1:
            continue
        (xa, ya), (xb, yb) = hat[a], hat[b]
        dx, dy = xb - xa, yb - ya
        norm = math.hypot(dx, dy)
        en, eni = -1.0, None
        for i in range(a + 1, b):
            x, y = hat[i]
            if norm == 0:
                d = math.hypot(x - xa, y - ya)
            else:
                d = abs(dy * x - dx * y + xb * ya - yb * xa) / norm
            if d > en:
                en, eni = d, i
        if en > tol_derece:
            tut[eni] = True
            en_buyuk_sapma = max(en_buyuk_sapma, 0.0)
            yigin.append((a, eni))
            yigin.append((eni, b))
        else:
            en_buyuk_sapma = max(en_buyuk_sapma, en)
    return [p for p, t in zip(hat, tut) if t], en_buyuk_sapma


def care_olcumu(S, U, donem):
    """④ ÇARE ÖLÇÜMÜ — iki eksen, ikisi de ÇİZİM/GEOMETRİ tarafında:
       ① piksel tavanını düşürmek (app.js TAVAN_PX)
       ② hat geometrisini sadeleştirmek (motor ya da app.js yüklerken)
    Her ikisinin de DİŞ sayısına etkisi ve BEDELİ (bilgi kaybı / sapma) ölçülür."""
    rapor = {"tavan": [], "sadelestirme": []}
    for tavan in (80.0, 48.0, 32.0, 24.0, 16.0):
        satir = {"tavan_px": tavan, "kutular": []}
        for kutu in KUTULAR:
            ad, _, la0, la1, lo0, lo1, zoom = kutu
            dis = 0
            hale_km_kaybi = []
            for idx in donem.get("sb", []):
                if idx >= len(S):
                    continue
                hat = S[idx]
                if not any(kutuda(p, kutu) for p in hat):
                    continue
                u = U[idx] if idx < len(U) else 60.0
                eski = min(u * (2.0 ** zoom) / APP_PAYDA, TAVAN_PX)
                yeni = min(u * (2.0 ** zoom) / APP_PAYDA, tavan)
                lat = (la0 + la1) / 2
                pk = px_km(zoom, lat)
                hale_km_kaybi.append((eski - yeni) / pk)
                segler, kose = hat_olc(hat, u, zoom, kutu)
                for k in kose:
                    oran = yeni / k["kisa_seg_px"] if k["kisa_seg_px"] > 0 else float("inf")
                    if k["donus"] >= EŞIK_DONUS and oran >= EŞIK_ORAN:
                        dis += 1
            satir["kutular"].append({"kutu": ad, "dis": dis,
                                     "hale_daralmasi_km_medyan":
                                         round(yuzde(hale_km_kaybi, 0.5) or 0.0, 1)})
        rapor["tavan"].append(satir)
    for tol_km in (1.0, 2.0, 5.0, 10.0):
        tol_der = tol_km / 111.32
        satir = {"tol_km": tol_km, "kutular": [], "havuz": {}}
        eski_k = yeni_k = 0
        for idx, hat in enumerate(S):
            yeni, _ = dp_sadelestir(hat, tol_der)
            eski_k += len(hat)
            yeni_k += len(yeni)
        satir["havuz"] = {"kose_eski": eski_k, "kose_yeni": yeni_k,
                          "azalma_yuzde": round(100.0 * (eski_k - yeni_k) / max(1, eski_k), 1)}
        for kutu in KUTULAR:
            ad, _, la0, la1, lo0, lo1, zoom = kutu
            dis = 0
            sapma = 0.0
            for idx in donem.get("sb", []):
                if idx >= len(S):
                    continue
                hat = S[idx]
                if not any(kutuda(p, kutu) for p in hat):
                    continue
                u = U[idx] if idx < len(U) else 60.0
                sade, s = dp_sadelestir(hat, tol_der)
                sapma = max(sapma, s * 111.32)
                _, kose = hat_olc(sade, u, zoom, kutu)
                dis += sum(1 for k in kose if k["dis"])
            satir["kutular"].append({"kutu": ad, "dis": dis,
                                     "en_buyuk_sapma_km": round(sapma, 2)})
        rapor["sadelestirme"].append(satir)
    return rapor


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    S, U, D = veri_oku()
    donem = donem_bul(D, HEDEF_TARIH)
    print(f"SERBEST havuzu: {len(S)} hat · SERBEST_U: {len(U)} · DONEM: {len(D)}")
    print(f"{HEDEF_TARIH} dönemi: {donem['f']}..{donem['t']} · sb {len(donem.get('sb', []))} hat\n")
    cikti = {"tarih": HEDEF_TARIH, "donem": [donem["f"], donem["t"]],
             "esik": {"donus": EŞIK_DONUS, "oran": EŞIK_ORAN}, "kutular": []}
    for kutu in KUTULAR:
        s = kutu_olcumu(S, U, donem, kutu)
        cikti["kutular"].append(s)
        print(f"── {s['kutu']} ({s['gorsel']}) z{s['zoom']} — kutuya düşen hat: "
              f"{len(s['hatlar'])} · DİŞ: {s['dis_sayisi']}")
        for h in s["hatlar"]:
            print(f"   sb{h['sb']:>4}  u={h['u_km']:>6.1f} km  hale={h['hale_px']:>5.1f} px  "
                  f"çekirdek={h['cekirdek_px']:>5.1f} px  köşe={h['kutudaki_kose']:>4}  "
                  f"seg_min={h['seg_min_km']:>6.3f} km  seg_medyan={h['seg_medyan_km']:>6.3f} km  "
                  f"diş={h['dis']}")
            for k in h["en_keskin"]:
                print(f"        köşe#{k['i']:<5} ({k['lon']:.3f} · {k['lat']:.3f})  "
                      f"dönüş {k['donus']:>5.1f}°  kısa seg {k['kisa_seg_px']:>6.2f} px  "
                      f"oran {k['oran']:>7.1f}×  lob {k['lob_px']:>5.1f} px = {k['lob_km']:.0f} km")
        print()
    y = yayginlik(S, U, D)
    cikti["yayginlik"] = y
    print(f"── YAYGINLIK (z{y['zoom']}): diş üreten dönem {y['donem_dis_ureten']}/{y['donem_toplam']} · "
          f"diş üreten hat {y['hat_dis_ureten']}/{y['hat_toplam_kullanilan']} · "
          f"toplam dişli köşe {y['dis_kose_toplam']} · u medyan {y['u_medyan']} / max {y['u_max']}\n")
    if "--dolgu" in sys.argv:
        cikti["dolgu"] = []
        for kutu in KUTULAR:
            m = dolgu_mizrak(donem, kutu)
            cikti["dolgu"].append(m)
            print(f"── DOLGU MIZRAK {m['kutu']}: parça {m['incelenen_parca']} · "
                  f"mızrak köşe {m['mizrak_kose']} (uç açı ≤{m['esik']['uc_aci_max']}°, "
                  f"boy ≥{m['esik']['boy_min_km']} km)")
            for o in m["ornek"]:
                print(f"        parça {o['parca']} ({o['lon']:.3f} · {o['lat']:.3f}) "
                      f"uç {o['uc_aci']}° boy {o['boy_km']} km")
    if "--havuz" in sys.argv:
        z = 5.4
        segler = []
        oranlar = []
        for idx, hat in enumerate(S):
            u = U[idx] if idx < len(U) else 60.0
            w = genislik_px(u, z, K_HALE, K_HALE)
            for i in range(len(hat) - 1):
                (lo1, la1), (lo2, la2) = hat[i], hat[i + 1]
                d = km(la1, lo1, la2, lo2)
                segler.append(d)
                pk = px_km(z, la1)
                if d > 0:
                    oranlar.append(w / (d * pk))
        h = {"segment_sayisi": len(segler),
             "seg_min_km": round(min(segler), 4), "seg_medyan_km": round(yuzde(segler, 0.5), 3),
             "seg_q1_km": round(yuzde(segler, 0.25), 3), "seg_q3_km": round(yuzde(segler, 0.75), 3),
             "seg_500m_altı": sum(1 for d in segler if d < 0.5),
             "seg_1km_altı": sum(1 for d in segler if d < 1.0),
             "oran_medyan": round(yuzde(oranlar, 0.5), 1),
             "oran_q3": round(yuzde(oranlar, 0.75), 1),
             "oran_max": round(max(oranlar), 1),
             "oran_8_ustu_yuzde": round(100.0 * sum(1 for o in oranlar if o >= EŞIK_ORAN) / len(oranlar), 1)}
        cikti["havuz"] = h
        print(f"── HAVUZ (z{z}, bütün SERBEST): segment {h['segment_sayisi']} · "
              f"min {h['seg_min_km']} km · Q1 {h['seg_q1_km']} · medyan {h['seg_medyan_km']} · "
              f"Q3 {h['seg_q3_km']} km\n   500 m altı {h['seg_500m_altı']} · 1 km altı {h['seg_1km_altı']} · "
              f"genişlik/segment medyan {h['oran_medyan']}× · Q3 {h['oran_q3']}× · max {h['oran_max']}× · "
              f"≥{EŞIK_ORAN}× olan segment %{h['oran_8_ustu_yuzde']}\n")
    if "--uyarlamali" in sys.argv:
        # Sabit tolerans yerine UYARLAMALI: tolerans hattın kendi belirsizliğinin
        # bir oranı (tol = u/N). Gerekçe: hâlenin genişliği zaten u ile ölçülüyor;
        # o hâlenin altında kalan ayrıntı ZATEN görünmez.
        print("── ÇARE ②b UYARLAMALI SADELEŞTİRME (tol = u/N)")
        for N in (40, 20, 10):
            satir = []
            e_k = y_k = 0
            for idx, hat in enumerate(S):
                u = U[idx] if idx < len(U) else 60.0
                sade, _ = dp_sadelestir(hat, (u / N) / 111.32)
                e_k += len(hat)
                y_k += len(sade)
            for kutu in KUTULAR:
                ad, _, la0, la1, lo0, lo1, zoom = kutu
                dis = 0
                sap = 0.0
                for idx in donem.get("sb", []):
                    if idx >= len(S):
                        continue
                    hat = S[idx]
                    if not any(kutuda(p, kutu) for p in hat):
                        continue
                    u = U[idx] if idx < len(U) else 60.0
                    sade, s = dp_sadelestir(hat, (u / N) / 111.32)
                    sap = max(sap, s * 111.32)
                    _, kose = hat_olc(sade, u, zoom, kutu)
                    dis += sum(1 for k in kose if k["dis"])
                satir.append(f"{ad.split()[0]}: diş {dis:>3} (sapma ≤{sap:.2f} km)")
            print(f"   tol = u/{N:<3} → " + " · ".join(satir) +
                  f" · havuz köşe {e_k}→{y_k} (−%{100.0*(e_k-y_k)/max(1,e_k):.1f})")
        # KARMA kural: tol = u/10, ama 1 km'den küçük 5 km'den büyük olmasın.
        # (Dar belirsizlikli hatta ayrıntı korunur, geniş olanda tavan kesilir.)
        satir = []
        e_k = y_k = 0
        for idx, hat in enumerate(S):
            u = U[idx] if idx < len(U) else 60.0
            sade, _ = dp_sadelestir(hat, max(1.0, min(5.0, u / 10.0)) / 111.32)
            e_k += len(hat)
            y_k += len(sade)
        for kutu in KUTULAR:
            ad, _, la0, la1, lo0, lo1, zoom = kutu
            dis = 0
            sap = 0.0
            for idx in donem.get("sb", []):
                if idx >= len(S):
                    continue
                hat = S[idx]
                if not any(kutuda(p, kutu) for p in hat):
                    continue
                u = U[idx] if idx < len(U) else 60.0
                sade, s = dp_sadelestir(hat, max(1.0, min(5.0, u / 10.0)) / 111.32)
                sap = max(sap, s * 111.32)
                _, kose = hat_olc(sade, u, zoom, kutu)
                dis += sum(1 for k in kose if k["dis"])
            satir.append(f"{ad.split()[0]}: diş {dis:>3} (sapma ≤{sap:.2f} km)")
        print(f"   tol = kıskaç(u/10, 1..5 km) → " + " · ".join(satir) +
              f" · havuz köşe {e_k}→{y_k} (−%{100.0*(e_k-y_k)/max(1,e_k):.1f})")
        print()
    if "--care" in sys.argv:
        c = care_olcumu(S, U, donem)
        cikti["care"] = c
        print("── ÇARE ① PİKSEL TAVANI (app.js TAVAN_PX) — diş sayısı / hâle daralması")
        for s in c["tavan"]:
            par = " · ".join(f"{k['kutu'].split()[0]}: diş {k['dis']:>3} "
                             f"(hâle −{k['hale_daralmasi_km_medyan']:.0f} km)"
                             for k in s["kutular"])
            print(f"   tavan {s['tavan_px']:>5.0f} px → {par}")
        print("\n── ÇARE ② GEOMETRİ SADELEŞTİRME (Douglas–Peucker) — diş sayısı / sapma")
        for s in c["sadelestirme"]:
            par = " · ".join(f"{k['kutu'].split()[0]}: diş {k['dis']:>3} "
                             f"(sapma ≤{k['en_buyuk_sapma_km']:.2f} km)"
                             for k in s["kutular"])
            print(f"   tol {s['tol_km']:>5.1f} km → {par} · havuz köşe "
                  f"{s['havuz']['kose_eski']}→{s['havuz']['kose_yeni']} "
                  f"(−%{s['havuz']['azalma_yuzde']})")
        print()
    if "--json" in sys.argv:
        yol = sys.argv[sys.argv.index("--json") + 1]
        with open(yol, "w", encoding="utf-8") as f:
            json.dump(cikti, f, ensure_ascii=False, indent=1)
        print(f"\nJSON yazıldı: {yol}")


if __name__ == "__main__":
    main()
