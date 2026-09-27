# -*- coding: utf-8 -*-
"""NOKTA-ORTADOGU-0077 — başka oturumların dosyalarındaki kayıtlar için YAMA ÖNERİSİ üretir.
HİÇBİR data/ dosyasına YAZMAZ. Çıktı: denetim/NOKTA-ORTADOGU-0077-YAMA.json
Her öneri: ad · dosya · alan · eski · yeni · dayanak. Uygulama kararı koordinatörün."""
import sys
import json
import copy

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
AD = {}
for y in Y:
    AD.setdefault(y["ad"], []).append(y)

TDV_MISIR = ("TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık "
             "haklarını kaldırıp Mısır'ı himayesine aldı\" ve \"Mısır fizikî coğrafya açısından dört bölgeye ayrılır: "
             "Nil vadisi ve deltası, Doğu çölü, Batı çölü, Sînâ yarımadası\". TDV `suveys`: \"Mısır'ın diğer yerleri gibi "
             "kanal bölgesi de\". Sultanlık→Krallık günü 1922-03-15: künye `misir-kralligi` f + Kahire kaydının TDV notu "
             "(unvan değişikliği). NOKTA-ORTADOGU-0077")
TDV_SUDAN = ("TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak "
             "hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye `ingiliz-sudani` f:1899-01-19 aynı gün. "
             "NOKTA-ORTADOGU-0077")
TDV_KATAR = ("TDV `katar` (gövde okundu): \"1871 sonbaharında Katar'da da Osmanlı kontrolü sağlandı\" · \"29 Temmuz "
             "1913'te Londra'da imzalanan ... antlaşmanın ilgili maddesinde Osmanlı Devleti Katar yarımadası üzerindeki "
             "bütün taleplerinden feragat etti\" · \"3 Kasım 1916'da Katar Emîri Abdullah ile ... himaye antlaşması\". "
             "1871 GÜNÜ (09-20) komşudan: Doha (Katar) — TDV yalnız mevsim veriyor. NOKTA-ORTADOGU-0077")

oneriler = []


def ekle(y, alan, yeni, dayanak, not_=""):
    oneriler.append({"ad": y["ad"], "dosya": y.get("_kaynak"), "alan": alan,
                     "eski": y.get(alan), "yeni": yeni, "dayanak": dayanak, "not": not_})


# --- A: Mısır standardı (Sina/Kızıldeniz kıyısı 5 kayıt) -------------------------
for ad in ("Süveyş", "Sefâce", "Kusayr", "Tûr (Sînâ)", "Sina güneyi"):
    y = AD[ad][0]
    s = [k for k in y["s"] if not (k.get("f") == "1914-12-18" and k.get("d") == "ingiltere")]
    s += [{"f": "1914-12-18", "t": "1922-03-15", "d": "misir-sultanligi", "kaynak": TDV_MISIR},
          {"f": "1922-03-15", "t": "1923-10-29", "d": "misir-kralligi", "kaynak": TDV_MISIR}]
    ekle(y, "s", s, TDV_MISIR, "1914-12-18 ingiltere egemenliği → Mısır Sultanlığı/Krallığı (Kahire ve 52 Mısır noktasının kalıbı)")
    isg = copy.deepcopy(y.get("isg") or [])
    isg.append({"f": "1914-12-18", "t": "1923-10-29", "d": "ingiltere", "kaynak": TDV_MISIR})
    ekle(y, "isg", isg, TDV_MISIR, "İngiliz fiilî denetimi işgal taraması olarak sürer (Kahire kalıbı)")
    v = copy.deepcopy(y.get("v") or [])
    for k in v:
        k.setdefault("kid", "misir-kavalali")
        k.setdefault("statu", "vassal")
    ekle(y, "v", v, "HARITA-0076 §4: serbest metin tâbilik kimliği boyanamaz; Kahire'nin v: kaydı kid:misir-kavalali",
         "yalnız kid/statu eklenir, tarih değişmez")

# --- B: Sudan kondominyumu -------------------------------------------------------
B1, B2 = 0, 0
for y in Y:
    lon, lat = float(y["lon"]), float(y["lat"])
    if not (21.8 <= lon <= 38.7 and 3.4 <= lat <= 22.0):
        continue
    s = y.get("s") or []
    if not any(k.get("d") == "ingiltere" and "1884" <= (k.get("f") or "") <= "1909-12-31" and (k.get("t") or "") >= "1923" for k in s):
        continue
    yeni = []
    grup = None
    for k in s:
        if k.get("d") == "ingiltere" and (k.get("t") or "") >= "1923":
            if k["f"] >= "1899-01-19":
                yeni.append(dict(k, d="ingiliz-sudani", kaynak=TDV_SUDAN))
                grup = "B1"
            else:
                yeni.append(dict(k, t="1899-01-19"))
                yeni.append({"f": "1899-01-19", "t": k["t"], "d": "ingiliz-sudani", "kaynak": TDV_SUDAN})
                grup = "B2"
        else:
            yeni.append(k)
    if grup == "B1":
        B1 += 1
        ekle(y, "s", yeni, TDV_SUDAN, "B1 — kondominyum günü ingiltere yazılmış; aynı gün ingiliz-sudani (Abrî kaydının düzeltmesiyle aynı gerekçe)")
    else:
        B2 += 1
        ekle(y, "s", yeni, TDV_SUDAN,
             "B2 — 1899 öncesi İngiliz elindeki kıyı; 1899-01-19'dan sonra ingiliz-sudani. ⚠️ Sevâkin'in kondominyuma "
             "katılış günü (Batı literatüründe 10 Temmuz 1899 ek anlaşması) TDV'de BULUNAMADI — TDV'nin genel 19 Ocak "
             "1899'u kullanıldı, fark bildirildi. Hüküm koordinatörün.")

# --- C: Katar iç dolgusu ---------------------------------------------------------
y = AD["Katar Yarımadası (iç, dolgu)"][0]
v = copy.deepcopy(y.get("v") or [])
v.append({"f": "1871-09-20", "t": "1913-07-29", "k": "Sânî emirliği (Osmanlı kazâsı)", "kid": "katar", "statu": "vassal", "kaynak": TDV_KATAR})
ekle(y, "v", v, TDV_KATAR, "Doha ile aynı zincir; yarımada TDV'de bir bütün olarak Âl-i Sânî'ye bırakılıyor")
s = copy.deepcopy(y.get("s") or [])
s.append({"f": "1913-07-29", "t": "1923-10-29", "d": "katar", "kaynak": TDV_KATAR})
ekle(y, "s", s, TDV_KATAR)
isg = copy.deepcopy(y.get("isg") or [])
isg.append({"f": "1916-11-03", "t": "1923-10-29", "d": "ingiltere", "kaynak": TDV_KATAR})
ekle(y, "isg", isg, TDV_KATAR, "Doha'nın isg: kalıbı (1916 himayesi)")

# --- D: Qaţţīnah (Ceylanpınar ikizi, sınır yardımcı noktası) -----------------------
y = AD["Qaţţīnah"][0]
CEY = AD["Ceylanpınar"][0]
dayanak_q = ("Kaydın KENDİ kaynağı: Ankara İtilafnamesi md. 8 (20.10.1921) — sınır o gün çizildi; ondan önce köy "
             "Ceylanpınar'ın (4,3 km) yakasında. Mevcut 1918-10-26 = Halep'in işgal günü (dönem 1918-10-26 → 1920-07-24 "
             "fransa-cumhuriyet), Ras'ülayn için kaynak YOK. Ceylanpınar'ın zinciri (d → 1920-04-23 tbmm, isg fransa "
             "1918-10-30 → 1921-10-20) aynen devralınır; komşu günü şartlı (§4): gün Ceylanpınar'dan, onun isg kaynağı "
             "'bulunamadı' ⇒ ZİNCİRLEME DEVRALMA SINIRINDA — koordinatör onayı ister. NOKTA-ORTADOGU-0077")
s = [k for k in y["s"] if (k.get("t") or "") <= "1516-08-24"]
s += [{"f": "1920-04-23", "t": "1921-10-20", "d": "tbmm-turkiye"},
      {"f": "1921-10-20", "t": "1923-10-29", "d": "suriye-lubnan-mandasi"}]
ekle(y, "s", s, dayanak_q)
ekle(y, "d", [{"f": "1516-08-24", "t": "1920-04-23"}], dayanak_q)
ekle(y, "isg", copy.deepcopy(CEY.get("isg")), dayanak_q)

json.dump({"uretici": "denetim/NOKTA-ORTADOGU-0077-yama.py", "uygulanmadi": True,
           "sayilar": {"A_misir": 5, "B1_sudan_1899": B1, "B2_sudan_kiyi": B2, "C_katar": 1, "D_qattinah": 1},
           "oneriler": oneriler},
          open(r"C:\atlas\denetim\NOKTA-ORTADOGU-0077-YAMA.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("öneri", len(oneriler), "· A 5 · B1", B1, "· B2", B2, "· C 1 · D 1")
for o in oneriler:
    if o["alan"] == "s" and o["dosya"] and "B" in (o["not"] or "")[:2]:
        pass
print("B dosyaları:", sorted(set(o["dosya"] for o in oneriler if (o["not"] or "").startswith("B"))))
