# -*- coding: utf-8 -*-
"""LİSTE BAYAT ÖLÇÜSÜ (1004) — liste maddesinin sıraladığı adlar atlasta O GÜN gerçekten kırılıyor mu?

D260: "Aynı tarihte katılan öteki yerler / elden çıkan diğer yerleşimler / tâbi katmana geçen…: A, B, C"
biçimli liste maddeleri atlasın KENDİ kırılmalarından üretildi. Liste üretildiği günden beri atlas
değişmiş olabilir: madde bir adı sayıyor ama o ad o gün artık kırılmıyorsa liste BAYATLAMIŞTIR (D260 (c):
kronoloji haritayı YALANLIYOR). Bu araç her liste maddesinin HER ADINI ayrı ölçer; sayı değil ÜYELİK
(madde × ad) verir, çünkü düzeltme madde başına yapılır (D260: (a) silinir, (b) taşınır, (c) doğrulanır).

EVREN: `data/olaylar*.js` + `data/kronoloji*.js` (krono_ortak_1004 — node) × `girdi.yukle()` (HER
yerleşim kaydı, kuyruk dosyaları dahil). LİSTE MADDESİ = `d` metninde
`Aynı tarihte|gün … (yerler|yerleşimler|yer): <virgüllü liste>` kalıbı. Başlık öneki YER SÖZCÜĞÜ ister:
"Aynı gün iki ayrı ferman yayımladı: …" kalıbı geçse de liste değildir (bir yanlış pozitif ölçüldü).

HER AD ÜÇ KOVADAN BİRİNE DÜŞER — biri ötekini gizlemez:
  ✅ UYUYOR     adın kaydında o gün bir kırılma var (`s:`/`d:`/`v:`/`isg:` dönemlerinin f/t günü; ufuk
                uçları ≤1281-01-01 ve ≥1923-10-29 kırılma değil sınır işaretidir, D210).
                Gün karşılaştırması TAM EŞİTLİK: madde `YYYY-AA-GG` ise aynı gün; `YYYY-AA` ise o ay içinde
                herhangi bir gün. `YYYY-01-01` yıl hassasiyeti taşısa bile tam gün aranır — liste o günden
                üretilmişti, 1 Ocak kayması bayatlıktır.
  🔴 YALANLIYOR kayıt BULUNDU ama o gün kırılma YOK. En yakın kırılma ve uzaklığı yazılır (kayma mı,
                hiç mi) — araştırma "taşı / sil / doğrula" kararını buna göre verir.
  ⚪ EŞLEŞMEDİ  ad havuzda bulunamadı ya da belirsiz. 🔴 İLE KARIŞTIRILMAZ: havuzda olmayan ad "harita
                yalanlıyor" DEĞİL, "ölçemedim" demektir. Alt kova: `yok` / `belirsiz`.

AD EŞLEME — projenin TEK OTORİTESİ `arac/ad_esanlam.py` `coz()` (normalleştirme + `data/ad_esanlam.js`
sözlüğü; D215 `İ` tuzağı orada çözülü). Bilinen sınır: sözlükte olmayan ad varyantları (`Diyarbekir` ↔
`Diyarbakır` türü, bkz. sözlüğün kendi `belirsiz` kovası) ⚪'a düşer ve ⚪ KOVASINI ŞİŞİRİR. `esanlam`
ile çözülen ad ✅/🔴 sayılır ama ayrıca `esanlam` sayacında gösterilir. Sözlük yolu depo köküne sabit
(`--kok` ağaçlarında da gerçek sözlük kullanılır).
Liste ayrıştırma: ad listesi PARANTEZ DIŞI virgül/`ve` ile bölünür, cümle sonu parantez dışı `. ` ile biter
(ilk sürüm `Kirmasti (M. Kemalpaşa)`yı noktada kesmişti). Sınır: parantezsiz kısaltma noktası (`St. X`) cümleyi keser.

ÇIKIŞ KODU  0 🔴 kümesinin her üyesi üyelik defterinde · 1 defterde olmayan 🔴 üye girdi ·
            2 ÖLÇÜLEMEDİ (node yok · girdi okunamadı · defter yok · hiç liste maddesi yok …)
🔴 TAVAN ÜYELİKTİR, SAYI DEĞİL (D259): satır `madde-anahtarı¦ad`. Defter bugünkü tavandır, ONAY değil.

KULLANIM
  py denetim/ARAC-LISTE-BAYAT-1004.py                   ölç, kapıyı uygula
  py denetim/ARAC-LISTE-BAYAT-1004.py --liste [Y|E|hepsi]   🔴 (Y) ve/veya ⚪ (E) üyelerini madde+ad adıyla yaz
  py denetim/ARAC-LISTE-BAYAT-1004.py --json YOL
  py denetim/ARAC-LISTE-BAYAT-1004.py --defter-yaz      defteri bugünkü 🔴'ye ayarla (ELLE ONAY işi)
  --kok DİZİN (sınav kopyası)   --defter YOL
"""
import collections, io, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

DEFTER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-LISTE-BAYAT-1004.defter.txt")
UFUK = ("1281-01-01", "1923-10-29")
KALIP = re.compile(r"[Aa]ynı\s+(?:tarih|gün)\w*[^:.]{0,160}?(?<!\w)(?:yerler|yerleşimler|yer)(?!\w)[^:.]{0,40}:\s*(?P<liste>.+)", re.S)


def liste_govdesi(metin):
    """`:` sonrasından cümle sonuna dek. Cümle sonu = PARANTEZ DIŞINDA `.` + boşluk/son
    (`Kirmasti (M. Kemalpaşa)` içindeki nokta cümleyi BÖLMEZ — ilk sürüm bunu bölüp adı kesti)."""
    derin = 0
    for i, c in enumerate(metin):
        if c == "(":
            derin += 1
        elif c == ")":
            derin = max(0, derin - 1)
        elif c == "." and derin == 0 and (i + 1 == len(metin) or metin[i + 1].isspace()):
            return metin[:i]
    return metin


def _gun_no(y, m, d):
    y2 = y - (m <= 2)
    era = (y2 if y2 >= 0 else y2 - 399) // 400
    yoe = y2 - era * 400
    doy = (153 * (m + (-3 if m > 2 else 9)) + 2) // 5 + d - 1
    return era * 146097 + yoe * 365 + yoe // 4 - yoe // 100 + doy


def gun_no(t):
    p = ko.pad_tarih(t)
    return None if not p else _gun_no(p[0], p[1] or 1, p[2] or 1)


def adlari_ayir(liste):
    """Virgül ya da `ve` ile böl — YALNIZ parantez dışında (adın içindeki virgül bölmesin)."""
    parcalar, derin, bas = [], 0, 0
    for i, c in enumerate(liste):
        if c == "(":
            derin += 1
        elif c == ")":
            derin = max(0, derin - 1)
        elif c == "," and derin == 0:
            parcalar.append(liste[bas:i])
            bas = i + 1
    parcalar.append(liste[bas:])
    out = []
    for p in parcalar:
        for q in re.split(r"\s+ve\s+", p) if "(" not in p else [p]:
            q = q.strip().strip("…").strip()
            q = re.sub(r"\s*(?:vb\.?|vs\.?)$", "", q).strip()
            if q and len(q) >= 2:
                out.append(q)
    return out


def kirilmalar(kayit):
    """{YYYY-AA-GG: [kategori]} — ufuk uçları kırılma sayılmaz."""
    out = collections.defaultdict(list)
    for kat in ("s", "d", "v", "isg"):
        for p in kayit.get(kat) or []:
            for g in (p.get("f"), p.get("t")):
                if g and UFUK[0] < g < UFUK[1]:
                    out[g].append(kat)
    return out


def _ad_cozucu():
    sys.path.insert(0, os.path.join(ko.KOK_VARSAYILAN, "arac"))
    try:
        import ad_esanlam
    except Exception as e:                      # noqa
        raise ko.Olculemedi("ad_esanlam.py içe alınamadı: %s" % e)
    return ad_esanlam


def uyuyor_mu(t, kir):
    """→ (uyuyor, en_yakin_gun, uzaklik_gun). `t` tam gün ya da `YYYY-AA`."""
    p = ko.pad_tarih(t)
    if not p:
        raise ko.Olculemedi("liste maddesinin tarihi okunamadı: %r" % t)
    y, m, d = p
    if d is None and m is not None:                 # ay hassasiyeti: ay içindeki herhangi bir gün
        ay = "%04d-%02d-" % (y, m)
        hit = [g for g in kir if g.startswith(ay)]
        return bool(hit), (hit[0] if hit else None), 0
    if d is None:
        raise ko.Olculemedi("liste maddesi yalnız yıl veriyor: %r" % t)
    tam = "%04d-%02d-%02d" % (y, m, d)
    if tam in kir:
        return True, tam, 0
    g0 = _gun_no(y, m, d)
    en, uz = None, None
    for g in kir:
        gg = gun_no(g)
        if gg is None:
            continue
        if uz is None or abs(gg - g0) < uz:
            en, uz = g, abs(gg - g0)
    return False, en, uz


def olc(kok):
    y = ko.yukle(kok)
    Y = ko.yerlesimleri_oku(kok)
    ae = _ad_cozucu()
    atlas_adlari = [r["ad"] for r in Y]
    kayit = {r["ad"]: r for r in Y}
    kir_onbellek = {}
    liste_maddeleri = []
    for m in y["maddeler"]:
        x = KALIP.search(m["d"])
        if x:
            liste_maddeleri.append((m, adlari_ayir(liste_govdesi(x.group("liste")))))
    if not liste_maddeleri:
        raise ko.Olculemedi("hiç liste maddesi bulunamadı (kalıp çürümüş olabilir) — 'bayat yok' DEĞİL")
    sonuc = {"madde": len(liste_maddeleri), "ad": 0, "UYUYOR": 0, "YALANLIYOR": 0, "ESLESMEDI": 0,
             "esanlam": 0, "yok": 0, "belirsiz": 0, "satirlar": []}
    for m, adlar in liste_maddeleri:
        for ad in adlar:
            sonuc["ad"] += 1
            try:
                c = ae.coz(ad, atlas_adlari)
            except Exception as e:              # noqa
                raise ko.Olculemedi("ad_esanlam.coz çöktü (%r): %s: %s" % (ad, type(e).__name__, e))
            durum = c.get("durum")
            satir = {"dosya": m["dosya"], "t": m["t"], "madde": m["b"][:80], "ad": ad,
                     "anahtar": ko.madde_anahtari(m) + "¦" + ad}
            if durum in ("birebir", "esanlam") and c.get("ad") in kayit:
                if durum == "esanlam":
                    sonuc["esanlam"] += 1
                    satir["esanlam"] = c.get("ad")
                r = kayit[c["ad"]]
                if r["ad"] not in kir_onbellek:
                    kir_onbellek[r["ad"]] = kirilmalar(r)
                ok, en, uz = uyuyor_mu(m["t"], kir_onbellek[r["ad"]])
                satir["kayit"] = r["ad"]
                if ok:
                    satir["kova"] = "UYUYOR"
                else:
                    satir["kova"] = "YALANLIYOR"
                    satir["en_yakin"], satir["uzaklik"] = en, uz
            else:
                satir["kova"] = "ESLESMEDI"
                satir["neden"] = "belirsiz" if durum == "belirsiz" else "yok"
                if durum not in ("belirsiz", "yok"):
                    satir["neden"] = "yok (durum=%r)" % (durum,)
                sonuc["belirsiz" if durum == "belirsiz" else "yok"] += 1
            sonuc[satir["kova"]] += 1
            sonuc["satirlar"].append(satir)
    return sonuc


def main(argv):
    try:
        kok = ko.kok_al(argv)
        defter_yolu = argv[argv.index("--defter") + 1] if "--defter" in argv else DEFTER
        s = olc(kok)
        n = s["ad"]
        print("LİSTE BAYAT — %d liste maddesi · %d ad" % (s["madde"], n))
        print("  ✅ UYUYOR (o gün kırılma var) ........ %4d  %5.1f%%" % (s["UYUYOR"], 100.0 * s["UYUYOR"] / n))
        print("  🔴 YALANLIYOR (kayıt var, o gün yok) .. %4d  %5.1f%%   ← ARADIĞIMIZ LİSTE (D260 (c) BAYAT)" %
              (s["YALANLIYOR"], 100.0 * s["YALANLIYOR"] / n))
        print("  ⚪ EŞLEŞMEDİ (havuzda yok/belirsiz) .. %4d  %5.1f%%   ← ölçemedim, 🔴 DEĞİL (yok %d · belirsiz %d)" %
              (s["ESLESMEDI"], 100.0 * s["ESLESMEDI"] / n, s["yok"], s["belirsiz"]))
        print("  i `esanlam` sözlüğüyle çözülen ad: %d (✅/🔴 içinde sayıldı)" % s["esanlam"])
        yal = [r for r in s["satirlar"] if r["kova"] == "YALANLIYOR"]
        esl = [r for r in s["satirlar"] if r["kova"] == "ESLESMEDI"]
        if yal:
            kayma = [r for r in yal if r["uzaklik"] is not None and r["uzaklik"] <= 365]
            print("  🔴 içinde: en yakın kırılma ≤365 gün (KAYMA adayı) %d · >365 gün ya da hiç kırılma yok %d" %
                  (len(kayma), len(yal) - len(kayma)))
            say = collections.Counter(r["madde"] for r in yal)
            print("  🔴 madde dağılımı: " + " · ".join("%s ×%d" % (k[:34], v) for k, v in say.most_common(6)))
        if "--liste" in argv:
            i = argv.index("--liste")
            h = argv[i + 1] if i + 1 < len(argv) and not argv[i + 1].startswith("--") else "hepsi"
            if h in ("Y", "hepsi"):
                print("  --- 🔴 YALANLIYOR (madde × ad) ---")
                for r in sorted(yal, key=lambda r: (r["t"] or "", r["madde"], r["ad"])):
                    en = ("en yakın %s (%sg)" % (r["en_yakin"], r["uzaklik"])) if r["en_yakin"] else "kayıtta hiç kırılma yok"
                    print("    %s | %s [%s] | %s → %s | %s" % (r["t"], r["madde"][:52], r["dosya"], r["ad"], r["kayit"], en))
            if h in ("E", "hepsi"):
                print("  --- ⚪ EŞLEŞMEDİ (madde × ad) ---")
                for r in sorted(esl, key=lambda r: (r["t"] or "", r["madde"], r["ad"])):
                    print("    %s | %s [%s] | %s | %s" % (r["t"], r["madde"][:52], r["dosya"], r["ad"], r["neden"]))
        if "--json" in argv:
            yol = argv[argv.index("--json") + 1]
            with io.open(yol, "w", encoding="utf-8") as f:
                json.dump(s, f, ensure_ascii=False, indent=1)
            print("  JSON yazıldı: " + yol)
        uyeler = {r["anahtar"] for r in yal}
        if "--defter-yaz" in argv:
            ko.defter_yaz(defter_yolu, uyeler,
                          "LİSTE BAYAT — 🔴 YALANLIYOR ÜYELİK DEFTERİ (tavan = üyelik, sayı değil)\n"
                          "Satır: dosya¦t¦başlık-özeti¦ad. 'Defterde var' ≠ 'incelendi ve kabul edildi':\n"
                          "her satır bir düzeltme borcudur (D260: (a) sil · (b) taşı · (c) doğrula).")
            print("  defter yazıldı: %s (%d üye)" % (defter_yolu, len(uyeler)))
            return 0
        tavan = ko.defter_oku(defter_yolu)
        yeni = sorted(uyeler - tavan)
        dusen = len(tavan - uyeler)
        if dusen:
            print("  i defterde olup artık 🔴 olmayan %d üye (iyi haber — defteri daralt)" % dusen)
        if yeni:
            print("🔴 YENİ BAYAT LİSTE ADI — defterde olmayan %d:" % len(yeni))
            for u in yeni[:40]:
                print("     " + u)
            print("SONUÇ: yeni bayat ad, çıkış kodu 1")
            return 1
        print("SONUÇ: temiz — 🔴 %d ad, hepsi defterde. Çıkış kodu 0" % len(uyeler))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(ko.ortam_sar(main, sys.argv[1:]))
