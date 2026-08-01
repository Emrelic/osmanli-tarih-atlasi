# -*- coding: utf-8 -*-
"""
SEKİZİNCİ DENETİM — anakronizm
===============================
Soru: *bir yerleşim, o tarihte VAR OLMAYAN bir devlete ait mi görünüyor?*

Üç değişmezin hiçbiri bunu sormuyor — hepsi "sahip var mı / maddesi var mı /
merkeziyle uyuyor mu" diye soruyor. Hayalet devlet hatası tam bu sınıftı:

    Bizans 1453'te bitti, Batnoz kaydı 1537'ye kadar sürdürdü      84 yıl
    Memlûk 1517'de bitti, Sevâkin/Masavva 1557'ye kadar sürdü      40 yıl
    Safevî coğrafyası 235 yıl boyunca `iran` kimliğiyle boyandı   235 yıl

Ölçüm: her `s:` döneminin `d:` kimliği, o dönemin tarih aralığında yaşayan bir
devlete mi karşılık geliyor? Köprü `devletler.js`'in `harita:` alanı.

ÇALIŞTIRMA
    py arac/denetle_anakronizm.py            # özet + eşik üstü bulgular
    py arac/denetle_anakronizm.py --dagilim  # eşik seçmek için ham dağılım
    py arac/denetle_anakronizm.py --hepsi    # beyaz liste dahil her şey

⚠️ OGRENILENLER.md §3: eşik ÖLÇÜLMEDEN seçilmez. `--dagilim` bu yüzden var;
eşiği değiştirmeden önce onu koştur.
"""
import io
import os
import sys

# ⚠️ KORUMALI. İki TextIOWrapper aynı buffer'ı sararsa ilki çöp toplandığında
# buffer KAPANIR ve bu modülü İÇE AKTARAN aracın çıktısı
# "ValueError: I/O operation on closed file" ile ölür. Üç kez yaşandı.
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi

KOK = girdi.KOK

# ---------------------------------------------------------------- eşik
# ⚠️ Bu sayı ölçülerek kondu, sezilerek değil — gerekçe raporda.
# Bölgesel teslim gecikmeleri MEŞRUDUR: bir devlet yıkılır ama uzak bir sancağı
# haftalar sonra teslim olur (Mekke'nin memlûk dönemi 1517-07-06'da biter,
# devlet 04-13'te yıkılmıştır → 84 gün). Aylar mertebesi normal, YILLAR değil.
ESIK_GUN = 365

# ---------------------------------------------------------------- beyaz liste
# (boya kimliği, yerleşim adı ya da None=hepsi) -> gerekçe
# ⚠️ Buraya bir satır eklemek "bu anakronizm KASITLI" demektir. Gerekçesiz
# satır yazma; ilerideki oturum onu hata sanıp "düzeltir".
BEYAZ_LISTE = {
    # TDV: Gîlân ve Mâzenderan Safevî merkezî denetimine ancak 1592/1596'da
    # girdi; o tarihe kadar yerel hanedanlardaydı. Ayrı kimlik açmak yerine
    # `iran` bırakıldı — coğrafî olarak İran, siyasî olarak Safevî değil.
    ("iran", "Reşt"): "Gîlân 1592'ye kadar Safevî denetiminde değil (TDV)",
    ("iran", "Sârî"): "Mâzenderan 1596'ya kadar Safevî denetiminde değil (TDV)",
}

# ---------------------------------------------------- kimlik sürekliliği
# ⚠️ ÖLÇÜLDÜ: ham tarama 1091 alarm veriyor ve büyük çoğunluğu HATA DEĞİL.
# Sebep şu: bir BOYA KİMLİĞİ ile bir DEVLET KAYDI aynı şey değil. Boya kimliği
# haritada süregiden bir siyasî varlığı temsil eder; devletler.js kaydı ise
# belirli bir devlet biçimini. Fransa Krallığı 1792'de bitti, `fransa` boyası
# 1923'e kadar sürüyor — bu doğru, çünkü Cumhuriyet/İmparatorluk da Fransa'dır.
#
# Bu küme, "kaydın bitişi bir BİÇİM DEĞİŞİKLİĞİ, yıkılış değil" denilen
# kimlikleri tutar; GEÇ yönlü taşmaları alarm sayılmaz. ERKEN yön ise ayrı
# başlık altında raporlanır, hiç alarm sayılmaz (bkz. rapor).
SUREKLI_KIMLIK = {
    "fransa":    "Krallık 1792'de bitti; Cumhuriyet/İmparatorluk da Fransa'dır",
    "rusya":     "Çarlık 1917'de bitti; kimlik 1923'e kadar sürüyor",
    "isvec":     "kayıt Vasa hanedanıyla başlıyor, kimlik öncesini de kapsıyor",
    "danimarka": "Kalmar Birliği kaydı; Danimarka kimliği süreklidir",
    "ispanya":   "kayıt 1479 birleşmesiyle başlıyor, kimlik öncesini kapsar",
    "avusturya": "kayıt 1526 Habsburg birleşmesi; kimlik öncesini kapsar",
    "umman":     "kayıt Yaruba hanedanıyla başlıyor; Umman kimliği süreklidir",
    "fas":       "kayıt Saadîlerle başlıyor; Fas kimliği süreklidir",
    "sardinya":  "kayıt 1720 Sardinya Krallığı; öncesi Savoy, kimlik sürekli",
    "toskana":   "kayıt 1532 Dukalık; öncesi Floransa Cumhuriyeti",
    "milanoduka":"kayıt 1395 Dukalık; öncesi Milano Komünü",
    "napoli":    "Napoli/İki Sicilya kimliği 1861'e kadar sürekli",
    "eflak":     "voyvodalık kimliği 1859 birleşmesine kadar sürekli",
    "bogdan":    "voyvodalık kimliği 1859 birleşmesine kadar sürekli",
    "somali":    "sultanlıklar kimliği; tek kayıt hepsini temsil ediyor",
    "adal":      "Adal/Harar kimliği; tek kayıt uzun dönemi temsil ediyor",
    "iran":      "İran coğrafî kimliği; Safevî/Afşar/Zend/Kaçar kayıtları ayrı",
}


def _anahtarlari_tirnakla(govde):
    """JS nesne anahtarlarını tırnaklar — DİZGİ İÇİNE DOKUNMADAN.

    ⚠️ `girdi._cevir` bunu regex ile yapıyor ve `devletler.js`'te ÇÖKÜYOR:
    bir `ozet` metninin içinde `(kaynak: TDV, madde: gurcistan)` geçiyor;
    regex `madde:` kısmını anahtar sanıp tırnaklıyor ve JSON bozuluyor.
    yerlesimler.js'te serbest metin az olduğu için sorun görünmemişti.
    Bu yüzden burada karakter karakter yürüyen, dizgi farkında bir çevirici var.
    Bulgu raporlandı: girdi._cevir devletler.js'i okuyamaz.
    """
    cikti = []
    i, n = 0, len(govde)
    dizgi = False
    while i < n:
        c = govde[i]
        if dizgi:
            cikti.append(c)
            if c == "\\" and i + 1 < n:          # kaçış: bir sonrakini olduğu gibi al
                cikti.append(govde[i + 1]); i += 2; continue
            if c == '"':
                dizgi = False
            i += 1
            continue
        if c == '"':
            dizgi = True; cikti.append(c); i += 1; continue
        # dizgi dışındayız: `{` ya da `,` sonrası gelen çıplak anahtarı tırnakla
        if c in "{,":
            cikti.append(c); i += 1
            j = i
            while j < n and govde[j] in " \t\r\n":
                j += 1
            k = j
            while k < n and (govde[k].isalnum() or govde[k] in "_çğıöşüÇĞİÖŞÜ"):
                k += 1
            m = k
            while m < n and govde[m] in " \t\r\n":
                m += 1
            if k > j and m < n and govde[m] == ":":
                cikti.append(govde[i:j]); cikti.append('"' + govde[j:k] + '"')
                cikti.append(govde[k:m]); cikti.append(":")
                i = m + 1
            continue
        cikti.append(c); i += 1
    j = "".join(cikti)
    # JS'te sondaki fazladan virgül geçerli, JSON'da değil
    import re as _re
    return _re.sub(r",(\s*[\]}])", r"\1", j)


def oku_devletler():
    """devletler.js → DEVLETLER."""
    import json as _json
    yol = os.path.join(girdi.DATA, "devletler.js")
    js = io.open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = "window.DEVLETLER = "
    govde = js[js.index(anahtar) + len(anahtar):]
    return _json.loads(_anahtarlari_tirnakla(_dizi_kes(govde)))


def _dizi_kes(govde):
    """`[` ile başlayan gövdeyi EŞLEŞEN `]`'de keser.

    🔴 Eskiden `govde.rindex("]")` idi — dosyanın SON köşeli parantezi. Dosyada
    tek dizi varsa doğru, ama bu varsayım bugün `denetle.py`'de `savaslar.js`
    üzerinde çöktü (dört dizi taşıyor). Burada aynı varsayımın ikinci kopyası
    duruyordu: `devletler.js`'e bugün ikinci bir dizi eklense sessizce bozulurdu.
    Kopyayı düzeltmek yerine bırakmak, aynı hatayı iki kez öğrenmek olurdu.
    """
    derinlik, i, dizge, kacis = 0, 0, None, False
    for i, c in enumerate(govde):
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if dizge:
            if c == dizge:
                dizge = None
            continue
        if c in "\"'":
            dizge = c
        elif c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                break
    if derinlik != 0:
        raise ValueError("dizi kapanmıyor")
    return govde[:i + 1]


def gun_no(s):
    """'YYYY-AA-GG' → gün sayısı. Negatif yıl (MÖ) desteklenir."""
    p = s.split("-")
    if s.startswith("-"):                      # "-0550-01-01"
        y, a, g = -int(p[1]), int(p[2]), int(p[3])
    else:
        y, a, g = int(p[0]), int(p[1]), int(p[2])
    return y * 365.2425 + (a - 1) * 30.44 + g


def omurler(D):
    """boya kimliği → o kimliğe eşlenen devletlerin yaşam aralıklarının BİRLEŞİMİ.

    Bir boya kimliğine birden çok devlet eşlenebilir (ör. ocaklıklar, ardıl
    hanedanlar). O durumda kimlik, aralıkların birleşiminde 'yaşıyor' sayılır —
    aksi hâlde meşru hanedan devirleri yanlış alarm üretirdi.
    """
    ham = {}
    for d in D:
        h = d.get("harita")
        if not h or not d.get("f") or not d.get("t"):
            continue
        ham.setdefault(h, []).append((gun_no(d["f"]), gun_no(d["t"]), d))
    birlesik = {}
    for h, aralik in ham.items():
        aralik.sort()
        parcalar = []
        for f, t, d in aralik:
            if parcalar and f <= parcalar[-1][1]:
                parcalar[-1] = (parcalar[-1][0], max(parcalar[-1][1], t))
            else:
                parcalar.append((f, t))
        birlesik[h] = {"parca": parcalar, "kayit": [x[2] for x in aralik]}
    return birlesik


def tasma(donem_f, donem_t, parcalar):
    """[f,t) aralığının, yaşam parçalarının DIŞINDA kalan kısmı (gün).

    Döner: (erken_gun, gec_gun) — devletin doğuşundan önce ve ölümünden sonra.
    """
    if not parcalar:
        return (donem_t - donem_f, 0.0)
    ilk = min(p[0] for p in parcalar)
    son = max(p[1] for p in parcalar)
    erken = max(0.0, min(donem_t, ilk) - donem_f)
    gec = max(0.0, donem_t - max(donem_f, son))
    return (erken, gec)


def topla(Y, D):
    """Bütün s: dönemlerini tarayıp taşma kayıtlarını döker."""
    omur = omurler(D)
    bulgular, kimliksiz = [], set()
    for y in Y:
        for sp in y.get("s", []):
            kimlik = sp["d"]
            if kimlik not in omur:
                kimliksiz.add(kimlik)
                continue
            f, t = gun_no(sp["f"]), gun_no(sp["t"])
            erken, gec = tasma(f, t, omur[kimlik]["parca"])
            if erken <= 0 and gec <= 0:
                continue
            gerekce = BEYAZ_LISTE.get((kimlik, y["ad"])) or BEYAZ_LISTE.get((kimlik, None))
            bulgular.append({
                "yerlesim": y["ad"], "kimlik": kimlik,
                "donem": (sp["f"], sp["t"]),
                "erken": erken, "gec": gec, "enbuyuk": max(erken, gec),
                "omur": (min(p[0] for p in omur[kimlik]["parca"]),
                         max(p[1] for p in omur[kimlik]["parca"])),
                "omur_yazi": " · ".join(f'{d["f"]}→{d["t"]}' for d in omur[kimlik]["kayit"]),
                "beyaz": gerekce,
            })
    return bulgular, kimliksiz, omur


# ============================================================================
# SAVAŞ TARAFLARI — "devlet öldü ama hâlâ savaşıyor"
# ============================================================================
# A5 üç vakayı ELLE buldu; makine bulmalıydı ve bulamıyordu, çünkü bu araç
# kurulduğunda yalnız `yerlesimler.js` sahipliklerini tarıyordu. `savaslar.js`
# hiç okunmuyordu — yani "hangi devlet ne zaman yaşıyordu" sorusu verinin
# yalnız BİR yüzünde soruluyordu.
#
#     sirbistan-prensligi   ömür 1882'de bitiyor  ↔  1912-13 Balkan kayıtları
#     bulgaristan-prensligi ömür 1908'de bitiyor  ↔  1912-13 Balkan kayıtları
#     rodos-sovalyeleri     ömür 1522'de bitiyor  ↔  1565 Malta · 1571 İnebahtı
#
# ⚠️ Kimliği `omurler()`de ÇÖZÜLEMEYEN taraf, ihlal sayılmaz ama SAYILIR ve
# yazılır. Sessizce atlamak, denetimin kapsamını gizlice daraltırdı: "0 ihlal"
# ile "0 ölçülebilen" arasındaki farkı çıktı söylemeli.
SAVAS_TOLERANS_GUN = 365


def savas_taraflari(om, D):
    """(ölçülen, çözülemeyen_kimlikler, aykırı) — savaş/sefer/antlaşma tarafları.

    🔴 İLK YAZIMDA YANLIŞ EKSENDE ARIYORDU ve sonuç tam §44 deseniydi:
    çıktı "✓ ölçülebilen tarafların hepsi kendi ömrü içinde" diyordu, ama
    A5'in elle bulduğu ÜÇ VAKANIN ÜÇÜ DE "çözülemedi" kovasındaydı
    (rodos-sovalyeleri · sirbistan-prensligi · bulgaristan-prensligi).
    Sebep: `taraf:` alanı `devletler.js`'in **id**'sini kullanıyor, ben ise
    `harita:` boya kimliğiyle arıyordum — iki ayrı eksen.
    Çözülemeyeni GÜRÜLTÜLÜ saydırmasaydım denetim temiz görünecekti; "0 ihlal"
    ile "0 ölçülebilen" arasındaki farkı çıktının söylemesi bu yüzden şart.
    """
    kimlik_omru = {}
    for d in D:
        if d.get("id") and d.get("f") and d.get("t"):
            kimlik_omru[d["id"]] = (gun_no(d["f"]), gun_no(d["t"]))
    import denetle as _d
    kaynaklar = [("savaslar.js", "SAVASLAR"), ("savaslar.js", "SEFERLER"),
                 ("savaslar.js", "ANTLASMALAR")]
    olculen, cozulemeyen, aykiri = 0, {}, []
    for dosya, dizi in kaynaklar:
        try:
            kayitlar = _d.oku_pencere(os.path.join(girdi.DATA, dosya), dizi)
        except Exception as e:
            print("  !  %s/%s okunamadı: %s" % (dosya, dizi, str(e)[:50]))
            continue
        for r in kayitlar:
            t = r.get("t") or r.get("f")
            if not t or not isinstance(r.get("taraf"), list):
                continue
            try:
                g = gun_no(t if len(t) == 10 else (t + "-01-01")[:10])
            except Exception:
                continue
            for kimlik in r["taraf"]:
                if kimlik == "osmanli":
                    continue                  # çekirdek katman, ömrü ayrı iş
                # ÖNCE id ekseni (taraf: bunu kullanıyor), SONRA boya kimliği.
                if kimlik in kimlik_omru:
                    ilk, son = kimlik_omru[kimlik]
                else:
                    bilgi = om.get(kimlik)
                    if not bilgi or not bilgi["parca"]:
                        cozulemeyen[kimlik] = cozulemeyen.get(kimlik, 0) + 1
                        continue
                    ilk = min(p[0] for p in bilgi["parca"])
                    son = max(p[1] for p in bilgi["parca"])
                olculen += 1
                if g > son + SAVAS_TOLERANS_GUN:
                    aykiri.append((t, r.get("ad", "")[:34], kimlik,
                                   "ÖLÜ", (g - son) / 365.2425))
                elif g < ilk - SAVAS_TOLERANS_GUN:
                    aykiri.append((t, r.get("ad", "")[:34], kimlik,
                                   "HENÜZ YOK", (ilk - g) / 365.2425))
    return olculen, cozulemeyen, sorted(aykiri, key=lambda r: -r[4])


def dagilim(bulgular):
    """OGRENILENLER §3: eşiği seçmeden önce dağılımı bas."""
    print("=== TAŞMA DAĞILIMI (eşik seçmek için) ===")
    print(f"toplam taşan dönem: {len(bulgular)}\n")
    kova = [(0, 30, "≤1 ay      — teslim gecikmesi, normal"),
            (30, 90, "1-3 ay     — bölgesel teslim, muhtemelen normal"),
            (90, 365, "3-12 ay    — şüpheli"),
            (365, 365 * 5, "1-5 yıl    — büyük olasılıkla hata"),
            (365 * 5, 365 * 20, "5-20 yıl   — hata"),
            (365 * 20, 10 ** 9, ">20 yıl    — kesin hayalet devlet")]
    for alt, ust, etiket in kova:
        n = [b for b in bulgular if alt < b["enbuyuk"] <= ust]
        beyaz = sum(1 for b in n if b["beyaz"])
        print(f"  {etiket:46} {len(n):4}" + (f"   (beyaz listede {beyaz})" if beyaz else ""))
    print()
    print("En büyük 15 taşma:")
    for b in sorted(bulgular, key=lambda x: -x["enbuyuk"])[:15]:
        yon = "ERKEN" if b["erken"] >= b["gec"] else "GEÇ"
        print(f"  {b['enbuyuk']/365.2425:7.1f} yıl {yon:5} {b['yerlesim'][:22]:22} "
              f"{b['kimlik']:14} {b['donem'][0]}→{b['donem'][1]}  devlet: {b['omur_yazi'][:44]}")


def main():
    argv = sys.argv[1:]
    print("Anakronizm denetimi — yerleşim sahipliği o tarihte yaşayan devlete mi ait?\n")
    Y = girdi.yukle(sessiz=True)
    D = oku_devletler()
    print(f"  {len(Y)} yerleşim · {len(D)} devlet kaydı")

    bulgular, kimliksiz, omur = topla(Y, D)
    print(f"  {len(omur)} boya kimliğinin ömrü devletler.js'ten çözüldü")
    if kimliksiz:
        print(f"\n⚠️ devletler.js'te 'harita:' karşılığı OLMAYAN {len(kimliksiz)} kimlik "
              f"— bu kimlikler denetlenemiyor:")
        for k in sorted(kimliksiz):
            print(f"     {k}")
    print()

    if "--dagilim" in argv:
        dagilim(bulgular)
        return

    hepsi = "--hepsi" in argv
    esik = 0 if hepsi else ESIK_GUN

    # --- ELEME SIRASI (her adımın gerekçesi rapordadır) ---
    # 1) ERKEN yön alarm değildir: boya kimliği neredeyse her zaman kendisine
    #    eşlenen devlet kaydından ESKİDİR (atlas İran'ı 1281'den boyar).
    # 2) Sürekli kimliklerin GEÇ taşması alarm değildir (biçim değişikliği).
    # 3) Beyaz listedeki tekil kayıtlar elenir.
    gec = [b for b in bulgular if b["gec"] > esik]
    surekli = [b for b in gec if b["kimlik"] in SUREKLI_KIMLIK]
    kalan = [b for b in gec if b["kimlik"] not in SUREKLI_KIMLIK and not b["beyaz"]]
    beyazlanan = [b for b in gec if b["kimlik"] not in SUREKLI_KIMLIK and b["beyaz"]]
    erken = [b for b in bulgular if b["erken"] > esik]

    # kimliğe göre grupla: aynı kimlikte çok kayıt alarm veriyorsa sebep
    # yerleşimlerde değil, devletler.js'teki ömürdedir.
    grup = {}
    for b in kalan:
        grup.setdefault(b["kimlik"], []).append(b)
    kimlik_toplam = {}
    for y in Y:
        for sp in y.get("s", []):
            kimlik_toplam[sp["d"]] = kimlik_toplam.get(sp["d"], 0) + 1

    omur_sorunu, tekil = [], []
    for k, bs in grup.items():
        (omur_sorunu if len(bs) / max(1, kimlik_toplam.get(k, 1)) >= 0.60
         else tekil).append((k, bs))

    print(f"=== ANAKRONİZM — devlet ÖLDÜKTEN SONRA süren sahiplik (>{esik} gün) ===")
    print(f"ham taşma {len(bulgular)} · GEÇ yön {len(gec)} · "
          f"sürekli kimlikle elenen {len(surekli)} · beyaz listeyle elenen "
          f"{len(beyazlanan)} · KALAN {len(kalan)}\n")

    print(f"--- A) KİMLİK ÖMRÜ ŞÜPHELİ ({len(omur_sorunu)} kimlik, "
          f"{sum(len(b) for _, b in omur_sorunu)} dönem) ---")
    print("    Aynı kimlikteki dönemlerin ≥%60'ı taşıyor → sebep tek tek")
    print("    yerleşimlerde değil, devletler.js'teki ömürde. Oturum 9'un işi.\n")
    for k, bs in sorted(omur_sorunu, key=lambda x: -len(x[1])):
        enb = max(b["gec"] for b in bs)
        print(f"  {k:14} {len(bs):3}/{kimlik_toplam.get(k,0):3} dönem · en büyük "
              f"{enb/365.2425:6.1f} yıl · devlet: {bs[0]['omur_yazi'][:46]}")

    print(f"\n--- B) TEKİL HAYALET ({len(tekil)} kimlik, "
          f"{sum(len(b) for _, b in tekil)} dönem) ---")
    print("    Aynı kimlikteki çoğu dönem ömre UYUYOR, bunlar sarkmış.")
    print("    Bizans/Memlûk sınıfı — asıl av budur.\n")
    for k, bs in sorted(tekil, key=lambda x: -max(b["gec"] for b in x[1])):
        print(f"  {k}  ({len(bs)}/{kimlik_toplam.get(k,0)} dönem) "
              f"devlet: {bs[0]['omur_yazi'][:46]}")
        for b in sorted(bs, key=lambda x: -x["gec"]):
            print(f"       {b['gec']/365.2425:7.1f} yıl fazla  {b['yerlesim'][:26]:26} "
                  f"{b['donem'][0]}→{b['donem'][1]}")

    if beyazlanan:
        print(f"\n--- beyaz listede (kasıtlı) ---")
        for b in beyazlanan:
            print(f"  {b['gec']/365.2425:6.1f} yıl  {b['yerlesim']} · {b['kimlik']}"
                  f"  → {b['beyaz']}")

    print(f"\n--- C) ERKEN yön: {len(erken)} dönem — ALARM DEĞİL ---")
    print("    Boya kimliği, eşlendiği devlet kaydından eskidir (atlas İran'ı")
    print("    1281'den boyar, Safevî kaydı 1501'de başlar). Kimlik sürekliliği")
    print("    modelinin doğal sonucu; ayrı bir tasarım işi (ETIKETLEME.md §7).")
    ek = {}
    for b in erken:
        ek[b["kimlik"]] = ek.get(b["kimlik"], 0) + 1
    print("    en çok: " + ", ".join(f"{k}×{v}" for k, v in
                                     sorted(ek.items(), key=lambda a: -a[1])[:8]))

    # --- D) SAVAŞ TARAFLARI — bu aracın ESKİDEN HİÇ BAKMADIĞI yüz -----------
    olculen, cozulemeyen, ayk = savas_taraflari(omur, D)
    print(f"\n--- D) SAVAŞ/SEFER/ANTLAŞMA TARAFLARI — {olculen} taraf-kayıt ölçüldü ---")
    print("    'Devlet öldü ama hâlâ savaşıyor.' Bu araç eskiden yalnız")
    print("    yerlesimler.js sahipliklerine bakıyordu; savaslar.js hiç")
    print("    okunmuyordu, yani soru verinin tek yüzünde soruluyordu.")
    if cozulemeyen:
        print(f"    ⚠️ {len(cozulemeyen)} kimlik devletler.js'te ÇÖZÜLEMEDİ "
              f"({sum(cozulemeyen.values())} taraf-kayıt) — ölçüm dışı:")
        print("       " + ", ".join(f"{k}×{v}" for k, v in
                                    sorted(cozulemeyen.items(), key=lambda a: -a[1])[:10]))
    if not ayk:
        print("    ✓ ölçülebilen tarafların hepsi kendi ömrü içinde")
    else:
        print(f"    ✗ {len(ayk)} taraf-kayıt devletin ömrü DIŞINDA "
              f"(tolerans {SAVAS_TOLERANS_GUN} gün):")
        for t, ad, kimlik, yon, yil in ayk:
            print(f"      {t}  {ad:34s} {kimlik:22s} {yon:9s} {yil:5.1f} yıl")

    print()
    print("SONUÇ:", "temiz ✓" if not kalan else
          f"{len(kalan)} anakronik dönem ({len(omur_sorunu)} kimlik ömrü + "
          f"{sum(len(b) for _, b in tekil)} tekil)")
    return 1 if kalan else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
