"""KOSU10-KALAN birleştirici — altı grup ölçümünü tek yama dosyasına toplar.

Kullanım: py denetim/ARAC-KOSU10-KALAN-BIRLESTIR-0917.py <grup_dizini>
Girdi   : <grup_dizini>/G1.json … G6.json (alt ölçümler; şema ORTAK-TALIMAT)
Çıktı   : denetim/YAMA-KOSU10-KALAN-0917.json  (YAMA-KOSU13-BIRLESIK biçimi:
          kalemler = {uygulanabilir, karar, bloke, bildirim, kapandi})
Dönüşüm : tek `eski` alanında '||' ile birleştirilmiş çok satırlı çapalar
          `degisiklikler[]` altında AYRI kayıtlara bölünür ("(satır N) …").
Veriye YAZMAZ. Sınav: py denetim/ARAC-KOSU10-KALAN-SINA-0917.py <çıktı>
"""
import io, json, os, re, sys, glob, datetime
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

KOVA = {"UYGULA": "uygulanabilir", "KARAR": "karar", "BLOKE": "bloke",
        "BILDIRIM": "bildirim", "KAPANDI": "kapandi"}
GRUP = {"G1": "Doğu Anadolu · KITA29 Ferhatpaşa", "G2": "Ferhat Paşa cephesi · Kirmanşah",
        "G3": "Cizre-Bohtan · Kartli-Kaheti · A6c · ARAS0048",
        "G4": "Budin · Debrecen · KITA14 · KRON3 · A6a",
        "G5": "2S-Rusya · RUS · A6b · Fizan · Kavalalı", "G6": "Malaka · Niğbolu · Kilitbahir · KRON2 · HALKA-ADAY",
        "G7": "uzlaştırma — Emre kararı (Nahçıvan kümesi 1586)"}


def bol(k):
    """'(satır 91) X || (satır 93) Y' → degisiklikler[] (yeni tarafı da aynı sırayla bölünür)."""
    e, y = k.get("eski") or "", k.get("yeni") or ""
    if "||" not in e:
        return
    ep = [p.strip() for p in e.split("||")]
    yp = [p.strip() for p in y.split("||")] if "||" in y else [None] * len(ep)
    yol = re.match(r"^(data/[\w.\-]+\.js)", k.get("dosya", ""))
    d = []
    for i, p in enumerate(ep):
        m = re.match(r"^\(satır (\d+)\)\s*(.*)$", p, re.S)
        yn = yp[i] if i < len(yp) else None
        if yn:
            yn = re.sub(r"^\(satır \d+\)\s*", "", yn)
        if m and yol:
            d.append({"dosya": "%s:%s" % (yol.group(1), m.group(1)), "eski": m.group(2), "yeni": yn})
        else:
            d.append({"dosya": k.get("dosya"), "eski": p, "yeni": yn})
    k.setdefault("degisiklikler", [])
    k["degisiklikler"] = d + k["degisiklikler"]
    k["eski"] = k["yeni"] = None
    k["not_birlestirici"] = "çok satırlı çapa '||' ile yazılmıştı — degisiklikler[] altına bölündü"


# UZLAŞTIRMA — gruplar arası AYNI KAYDA dokunan kalemler (ölçüldü, 17 Eylül).
# kod → (yeni kova, gerekçe). Kalem SİLİNMEZ, bildirime iner; gerekçe kaleme yazılır.
UZLASTIR = {
    "G2-MAKU": ("BILDIRIM", "MÜKERRER — K29-A1-MAKU aynı satır, aynı dönem (1574→1639-05-17); G1 kalemi uygulanır"),
    "G2-GENCE-BERDE": ("BILDIRIM", "MÜKERRER — K29-A3-GENCE + K29-A3-BERDE aynı değişiklik; G1 kalemleri uygulanır"),
    "G3-A6C-P0058A": ("BILDIRIM", "MÜKERRER — G2-TIFLIS aynı satır, aynı gün (1578-08-24); BİR KEZ uygulanır (KOSU10-SONRASI A6c)"),
    "K29-C2-GUMRU": ("BILDIRIM", "Emre kararı 11 (13 Eyl) Gümrü'yü ÖRTÜLÜ Osmanlı saydı → G2-GUMRU uygulanır. G1'in 'sahibi için kaynak yok' tespiti doğru ve G2 kaynak metninde 'örtülü — Emre kararı' olarak beyanlı"),
    "G2-ECMIYADZIN": ("BILDIRIM", "AYNI DÖNEM K29-B1-ECMIYADZIN'de (1583-09-13→1604-06-08); G1 kaynak metni belge alıntısı taşıyor (Köse 2024 · Bilgili 2016) → G1 uygulanır, kaynak metnine 'Emre kararı 11' eklenir. ⚠️ G2 'Karbi 1590 için belgesiz' diyor, G1 TD 633 listesinde Karbi'yi alıntılıyor — G1'in alıntısı esas"),
    "K29-A2-SERUR": ("BILDIRIM", "Emre kararı 14 Eyl (EMRE5 E3+E4: 'EVET TAŞI', Şerur = Nahçıvan günü) → G2-SERUR (1586-01-01) uygulanır. G1'in şartlı-komşu itirazı kayıtta: karar Emre'nin"),
    "K29-B2-NAHCIVAN": ("BILDIRIM", "Emre kararı 14 Eyl ('EVET TAŞI', 1585→1586) → G7-NAHCIVAN-1586 uygulanır. G1'in Bilge 1587-88 Safevî arası notu açık araştırma kalemi"),
}


# EK KOPYA RİSKİ — `SINA --kopya` + `KOPYAALAN` ölçümü (17 Eylül). Yalnız kalemin
# DEĞİŞTİRDİĞİ alanı yeniden yazan ve `_sahiplik_uygula`nın okuduğu (/^yer_yama.*\.js$/)
# dosyalar. Gürültü (k/m kademe, koridor geometrisi, yalnız v: kopyası, hukuki_sinirlar
# düğüm adları) listeye ALINMADI.
EK_KOPYA = {
    "K2-BITLIS-YER": "data/yer_yama_tbmm_1920_0905.js (Bitlis — d: VE s: dizisinin tamamı) → aynı partide aynı değişiklik",
    "G4-A6A-Y6-MANISA": "data/yer_yama_tbmm_1920_0905.js (Manisa — d: VE s: dizisinin tamamı) → aynı partide aynı değişiklik",
    "G4-A6A-Y1b-ERZINCAN": "data/yer_yama_tbmm_1920_0905.js:2528 (Erzincan s: — 1348-1379 dilimi de) · G6-HALKA-ERZINCAN ile aynı partide",
    "G4-A6A-Y8-FILISTIN": "data/yer_yama_manda_0906.js (Nablus — s: dizisinin tamamı, memluk t 1516-12-28) → aynı partide",
    "G5-RUS-BUKRES-YAS-1806-1828": "data/yer_yama_gece_v3.js (Bükreş · Yaş — isg: dizisinin tamamı, 1806-11-30 / 1828-05-01) → aynı partide; data/yama_p0037_bekleyen.js aynı isg: dizisini taşıyor (uygulayıcı globunda DEĞİL — emekli damgası önerilir)",
    "G5-RUS-1739-YAS": "data/yer_yama_gece_v3.js (Yaş — isg: dizisinin tamamı; 1739 penceresi eklenmezse geri alınır)",
    "G5-RUS-1788-89-AVUSTURYA": "data/yer_yama_gece_v3.js (Bükreş — isg: dizisinin tamamı)",
    "G5-RUS-1828-PRENS": "data/yama_p0037_bekleyen.js (Roman isg:) — uygulayıcı globunda değil; bilgi",
}


def main():
    D = sys.argv[1]
    out = {k: [] for k in KOVA.values()}
    say = {}
    for f in sorted(glob.glob(os.path.join(D, "G[1-7].json"))):
        g = json.load(io.open(f, encoding="utf-8"))
        grup = g.get("grup") or os.path.basename(f)[:2]
        for k in g["kalemler"]:
            k["grup"] = grup
            bol(k)
            if k.get("kod") in EK_KOPYA:
                k["kopya_riski_ek"] = EK_KOPYA[k["kod"]]
            if k.get("kod") in UZLASTIR:
                k["kova_ilk"] = k.get("kova")
                k["kova"], k["uzlastirma"] = UZLASTIR[k["kod"]]
            kova = KOVA.get(str(k.get("kova", "")).upper())
            if not kova:
                kova = "bildirim"
                k["not_birlestirici"] = "tanınmayan kova '%s' → bildirim" % k.get("kova")
            out[kova].append(k)
            say.setdefault(grup, {}).setdefault(kova, 0)
            say[grup][kova] += 1
    Y = {
        "paket": "KOSU10-KALAN-0917",
        "tarih": datetime.date.today().isoformat(),
        "yazan": "KOSU10-KALAN (eski 1DUNYA-A / OPUS HAZIR KITA 1006) · sevk 1.MURAT",
        "durum": "ÖNERİ — VERİYE YAZILMADI. KOSU13-YAMA yerleşim dosyalarında çalışıyor; sırayı 1.MURAT verir.",
        "girdi": "denetim/KOSU10-DOGRULA-0917.md 'İNMEDİ' 24 kalemi · oturumlar/KOSU10-SONRASI.md",
        "rapor": "denetim/YAMA-KOSU10-KALAN-RAPOR-0917.md",
        "arac": "denetim/ARAC-KOSU10-KALAN-BIRLESTIR-0917.py (bu dosyayı ÜRETİR) · ARAC-KOSU10-KALAN-SINA-0917.py (çapa sınavı) · ARAC-KOSU10-KALAN-OLCUM-0917.py · ARAC-KOSU10-KALAN-GUN-0917.py · ARAC-KOSU10-KALAN-KRON2-0917.py",
        "yontem": "Altı grup, her grup bugünkü veriyi (55a5b28 KOSU13 inişi dahil) girdi.yukle + ham satır ile ölçtü; yamanın beyan ettiği kaynak mümkün olduğunca AÇILIP cümlesi okundu (kaynak_durumu alanı). Kaynaklar günde çelişiyorsa taraf seçilmedi → karar. 'eski' metinlerin dosyada birebir durduğu SINA aletiyle sınandı.",
        "gruplar": GRUP,
        "sayim": say,
        "kalemler": out,
    }
    yol = "denetim/YAMA-KOSU10-KALAN-0917.json"
    with io.open(yol, "w", encoding="utf-8", newline="\n") as h:
        json.dump(Y, h, ensure_ascii=False, indent=1)
    print(yol)
    for k, v in out.items():
        print("  %-14s %d" % (k, len(v)))
    for g in sorted(say):
        print("  %s %s" % (g, say[g]))


main()
