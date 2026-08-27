# -*- coding: utf-8 -*-
"""denetim/HUKUM-*.json dosyalarini kutu CEVAP.json'larina BIRLESTIRIR.

🔴 NICIN AYRI BIR ADIM: `CEVAP.json`a yalniz KOORDINATOR yazar. Uc oturum
   ayni dosyaya yazsaydi biri otekini SESSIZCE ezerdi (§7). Isciler kendi
   `HUKUM-*.json`ini yazar, birlestirmeyi tek el yapar.

🔴 SESSIZ EZME YASAK: var olan bir hukmun UZERINE yazmaz; uzerine yazilmasi
   gereken varsa EKRANA BASAR ve karari insana birakir.
"""
import io, json, os, glob, datetime, sys

PROJE = os.environ["ATLAS_KOK"]
KUTU = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
GECERLI = {"cozuldu", "zaten-dogru", "tekrar", "sirada",
           "olculecek", "gerek-yok", "senin-kararin"}
GEREKCE_SART = {"gerek-yok", "senin-kararin"}
# ACIK = "is henuz bitmedi" diyen hukumler. Bunlardan HERHANGI bir hukme
# gecis ILERLEMEDIR ve uygulanir; tersi (kapali -> acik) insana sorulur.
ACIK = {"sirada", "olculecek", "tekrar"}

def yaz(s):
    print(str(s).encode("ascii", "replace").decode("ascii"))

kaynaklar = sorted(glob.glob(os.path.join(PROJE, "denetim", "HUKUM-*.json")))
if not kaynaklar:
    yaz("[!] denetim/HUKUM-*.json bulunamadi — DUR.")
    sys.exit(2)

toplam_yeni = toplam_atlanan = toplam_red = toplam_zengin = 0
for ky in kaynaklar:
    yaz("")
    yaz("== %s" % os.path.basename(ky))
    try:
        veri = json.load(io.open(ky, encoding="utf-8"))
    except Exception as e:
        yaz("   [!] okunamadi: %s" % e)
        continue
    for paket, maddeler in veri.items():
        cy = os.path.join(KUTU, paket, "CEVAP.json")
        if not os.path.isdir(os.path.join(KUTU, paket)):
            yaz("   [!] paket yok: %s" % paket)
            continue
        mevcut = {}
        if os.path.exists(cy):
            try:
                mevcut = json.load(io.open(cy, encoding="utf-8"))
            except Exception:
                mevcut = {}
        mad = mevcut.get("maddeler") or {}
        yeni = atlanan = red = zengin = 0
        for no, kayit in (maddeler or {}).items():
            h = (kayit or {}).get("hukum", "")
            notu = (kayit or {}).get("not", "")
            if h not in GECERLI:
                yaz("   🔴 RED %s/%s — gecersiz hukum '%s'" % (paket, no, h))
                red += 1
                continue
            if h in GEREKCE_SART and not notu.strip():
                yaz("   🔴 RED %s/%s — '%s' GEREKCESIZ yazilamaz" % (paket, no, h))
                red += 1
                continue
            if no in mad and mad[no].get("hukum"):
                eski = mad[no].get("hukum")
                if eski != h:
                    # 🟢 ILERLEME EZME DEGILDIR — 27 Agustos 2026 duzeltmesi.
                    #   Ilk surum HER hukum degisikligini "cakisma" sayiyordu
                    #   ve isin AMACINI reddediyordu: bir isci `sirada`yi
                    #   `cozuldu` yapmak icin calisiyor. 410 hukum boyle
                    #   atlandi ve hicbiri gercek bir cakisma degildi.
                    #   ⚠️ Ama ters yon GERCEKTEN tehlikeli: kapali bir hukmu
                    #   yeniden acmak, verilmis bir karari sessizce iptal
                    #   etmektir. O yuzden yon SORULUYOR, degisiklik degil.
                    if eski in ACIK:
                        mad[no] = dict(kayit)
                        mad[no]["onceki_hukum"] = eski
                        mad[no]["ilerleten"] = os.path.basename(ky)
                        yaz("   -> ILERLEME %s/%s: %s -> %s"
                            % (paket, no, eski, h))
                        yeni += 1
                        continue
                    yaz("   [!] CAKISMA %s/%s: mevcut '%s' (KAPALI) <- yeni '%s' "
                        "- UZERINE YAZMADIM, karar insana"
                        % (paket, no, eski, h))
                    atlanan += 1
                    continue
                # 🟢 HUKUM AYNI ise GEREKCEYI ZENGINLESTIR.
                #   Ilk yazimda burasi da atliyordu ve bu YANLISTI: BAYAT
                #   taramasi 109 maddenin hukmunu KORUYUP `not`una "nicin
                #   hala acik" yaziyordu. Atlasaydim o gerekceler dusenirdi
                #   — ve bu gece olculen dersin ta kendisi: `sirada` kovasi,
                #   NICIN'i yazilmadigi icin dokunulmaz hale geliyor.
                #   ⚠️ Hukum DEGISMIYOR; degisen yalniz GEREKCE.
                yn = (notu or "").strip()
                es = (mad[no].get("not") or "").strip()
                if yn and yn != es and len(yn) > len(es):
                    mad[no]["not"] = notu
                    mad[no]["gerekce_guncellendi"] = os.path.basename(ky)
                    zengin += 1
                else:
                    atlanan += 1
                continue
            mad[no] = {"hukum": h, "not": notu,
                       "olcen": "GECE NOBETI 27 Agustos 2026 · "
                                + os.path.basename(ky)}
            yeni += 1
        mevcut.update({"paket": paket,
                       "damga": mevcut.get("damga", ""),
                       "cevap_tarihi": datetime.datetime.now()
                                       .strftime("%Y-%m-%d %H:%M"),
                       "maddeler": mad})
        io.open(cy, "w", encoding="utf-8").write(
            json.dumps(mevcut, ensure_ascii=False, indent=1))
        yaz("   %-22s YENI %3d · gerekce+ %3d · zaten %3d · RED %d  (toplam %d)"
            % (paket, yeni, zengin, atlanan, red, len(mad)))
        toplam_yeni += yeni
        toplam_atlanan += atlanan
        toplam_red += red
        toplam_zengin += zengin

yaz("")
yaz("TOPLAM: yeni %d · gerekce zenginlestirildi %d · zaten %d · RED %d"
    % (toplam_yeni, toplam_zengin, toplam_atlanan, toplam_red))
