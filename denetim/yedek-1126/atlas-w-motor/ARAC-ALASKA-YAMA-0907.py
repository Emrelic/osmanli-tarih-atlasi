# -*- coding: utf-8 -*-
"""ALASKA-DEVIR-0907 — beş Alaska noktasının devir zinciri.

🔴 SEVKİN ① MADDESİ UYGULANAMADI, ve sebebi `denetle.py`nin KENDİ yorumu.
   Sevk şunu diyordu: *"4 nokta: `bos:"devletsiz"` 1281→1799 · rus-amerika
   1799→1867-06-20 · abd 1867-06-20→1923-10-29"*. Ölçüldü:
```
   bos: KAYIT seviyesinde 328 kayıt · DÖNEM seviyesinde 0
   degismez1  yalnız `kur:` ve `bit:`i muaf tutar — `kasitli_bosluk`u ve
              `bos:`u HİÇ OKUMAZ (denetle.py:952-961)
   denetle.py:1008 (kendi yorumu):
      "aralık düzeyinde boşluk beyanı NE ŞEMADA NE VERİDE VAR; `bos:`
       NOKTA düzeyinde ve «hangi ARALIK kasıtlı» DİYEMİYOR"
```
   ⇒ `bos:"devletsiz"` yazmak 1281-1799'u muaf tutMAZ; `Değişmez 1`
   dört noktayı SAHİPSİZ bildirir ve `1b`nin BEYANSIZ boşluğu 0'dan 4'e
   çıkar. `§1.5` o satırı *"0 (beklenen 0)"* diye tutuyor.
   📌 `§11`: *"aracın söylediğini yapmadan önce aracın ne ÖLÇTÜĞÜNÜ anla"* —
   ve bu tam olarak `M-0609` vakasının tekrarı: orada da bir reçete
   *"boşlukları `kasitli_bosluk` ile kapat"* diyordu ve `1b`yi kapatmıyordu.

🟢 SEÇİLEN YOL — kapsamayı BOZMADAN, ve iddiayı BÜYÜTMEDEN:
```
   ingiltere              1281-01-01 → 1763-02-10   DOKUNULMADI (yanlış, flagged)
   ingiliz-kuzey-amerika  1763-02-10 → 1799-01-01   KISALTILDI (1867→1799)
   rus-amerika            1799-01-01 → 1867-06-20   YENİ, kaynaklı
   abd                    1867-06-20 → 1923-10-29   YENİ, kaynaklı
```
   Boşluk 0 · kapsama aynı · her dönem künyesinin içinde. Kalan yanlış
   iddia (1281-1799 İngiliz) KÜÇÜLÜYOR, büyümüyor — ve `not:` alanında
   ADIYLA beyan ediliyor. Model onu bugün ifade edemiyor: TDV *"1791'den
   itibaren hiçbir devlete ait olmayan bir bölge"* diyor ve atlasın
   dönem katmanında *"kimsenin değil"* diye bir kimlik YOK.

🟢 FORT YUKON AYRI TUTULDU — ve iddia ÖLÇÜLDÜ, `olculemedi` DEĞİL:
   1825 Rus-İngiliz antlaşması iç Alaska'nın doğu sınırını 141. meridyene
   çekiyor; Fort Yukon 145,274°B'de, yani çizginin BATISINDA = Rus tarafı.
   1847-1868 boyunca RAC ile HBC orta Yukon'da RAKİP karakollar tuttu, ve
   ABD 1869'da HBC yöneticisini ÇIKARDI.
   ⇒ DE JURE Rus, DE FACTO İngiliz. Egemenlik zinciri ötekilerle AYNI
     (`rus-amerika` → `abd`), ama zinciri 1847'de başlıyor ⇒ dört kalıba
     SOKULMADI, kendi tarifiyle yazıldı.
   ⚠️ `isg:` örtüsü YAZILMADI: HBC'nin ÇIKARILMA GÜNÜ kaynakta yok
     (Raymond 1869-07-31'de vardı, çıkarma ONDAN SONRA). Gün uydurmaktansa
     `not:`a beyan edildi. `§4`: tarih uydurma.
"""
import io
import json
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi  # noqa: E402

KOK = os.path.join(os.path.dirname(__file__), "..")
UFUK_SON = "1923-10-29"
RA_F, RA_T = "1799-01-01", "1867-06-20"
AD_ALANI = "YER_YAMA_ALASKA_DEVIR_0907"
DOSYA = "yer_yama_alaska_devir_0907.js"

DORT = ["Alatna / Allakaket", "Nikolai (Yukarı Kuskokwim)",
        "Nuchalawoya (Tanana)", "Telida / Denali eteği (Atabask)"]
FY = "Fort Yukon"

K_ORTAK = (
    "rus-amerika: TDV `rusya` (kapsayici madde; dar sluglar `alaska` ve "
    "`rus-amerika` 302 OLU) — «1799'da Rus-Amerika Kumpanyasi kuruldu». "
    "KAYNAK YIL VERIYOR, GUN VERMIYOR ⇒ §4 geregi 1799-01-01. "
    "abd devri: Avalon Project (Yale Law School), 'Russian Treaty; March "
    "30, 1867' — imza 1867-03-30, TASDIK TEATISI 1867-06-20, ve "
    "antlasmanin IV. maddesi devir anini ACIKCA adlandiriyor: «the "
    "cession ... to be deemed COMPLETE AND ABSOLUTE ON THE EXCHANGE OF "
    "RATIFICATIONS, without waiting for such formal delivery». 18 Ekim "
    "1867 bir TESLIM TORENIDIR, devrin sarti DEGIL.")

N_DORT = (
    "🔴 KALAN YANLIS IDDIA, ADIYLA: bu kaydin 1281-1799 arasi hala "
    "`ingiltere`/`ingiliz-kuzey-amerika` yaziyor ve bu TARIHEN YANLIS — "
    "TDV `rusya`: «1791'den itibaren HICBIR DEVLETE AIT OLMAYAN bir bolge "
    "olarak Alaska ... zaptedildi». DUZELTILEMEDI cunku atlasin donem "
    "katmaninda «kimsenin degil» diye bir kimlik YOK: `bos:` NOKTA "
    "duzeyinde ve hangi ARALIGIN kasitli oldugunu diyemiyor "
    "(denetle.py:1008). Bu yama iddiayi 1867'den 1799'a KISALTIYOR, "
    "kaldirmiyor. Kaldirmak bir MODEL isidir.")

N_FY = (
    "🟢 DE JURE RUS, DE FACTO INGILIZ — ve iddia OLCULDU. 1825 Rus-Ingiliz "
    "antlasmasi ic Alaska'nin dogu sinirini 141. meridyene cekiyor; Fort "
    "Yukon 145,274°B'de, yani cizginin BATISINDA = RUS tarafi. 1847-1868 "
    "boyunca Rus-Amerika Kumpanyasi ile Hudson's Bay Company orta "
    "Yukon'da RAKIP karakollar tuttu; ABD 1869'da HBC yoneticisini "
    "CIKARDI (yuzbasi Charles Raymond 1869-07-31'de Fort Yukon'a vardi). "
    "Kaynak: U.S. National Park Service (Golden Places: The History of "
    "Alaska-Yukon Mining) · Library of Congress · University of Alaska "
    "ScholarWorks ('Dynamics of the fur trade on the middle Yukon River, "
    "Alaska, 1839 to 1868'). "
    "⚠️ `isg:` ORTUSU YAZILMADI: HBC'nin CIKARILMA GUNU kaynakta YOK "
    "(Raymond 1869-07-31'de VARDI, cikarma ONDAN SONRA). Gun uydurmaktansa "
    "burada beyan edildi — §4: tarih uydurma. Ortu, gun kaynaklanirsa "
    "AYRI bir kalem olarak yazilabilir.")


def main():
    Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
    D = {x["id"]: x for x in girdi.oku_devletler()}
    # 🔴 `rus-amerika` HENUZ INMEDI (kunye onerisi denetim/ altinda bekliyor)
    #   ⇒ kunye sinavini ONERI dosyasindan BESLE, yoksa sinav "KUNYE YOK"
    #     diye oter ve o OTUS DOGRU olur ama YANILTICI olur.
    oneri = json.load(io.open(os.path.join(
        KOK, "denetim", "YAMA-KUNYE-RUS-AMERIKA-0907.json"), encoding="utf-8"))
    for k in oneri["kunye"]:
        D.setdefault(k["id"], k)

    kayitlar, hata, rapor = [], [], []

    def kur(ad, yeni_s, kaynak, not_):
        eski = sorted(Y[ad]["s"], key=lambda p: p["f"])
        yeni = sorted(yeni_s, key=lambda p: p["f"])
        if eski[0]["f"] != yeni[0]["f"] or eski[-1]["t"] != yeni[-1]["t"]:
            hata.append("%s: KAPSAMA %s..%s -> %s..%s"
                        % (ad, eski[0]["f"], eski[-1]["t"],
                           yeni[0]["f"], yeni[-1]["t"]))
        for a, b in zip(yeni, yeni[1:]):
            if a["t"] != b["f"]:
                hata.append("%s: BOSLUK %s | %s" % (ad, a["t"], b["f"]))
        for p in yeni:
            if p["f"] >= p["t"]:
                hata.append("%s: TERS/SIFIR %s..%s" % (ad, p["f"], p["t"]))
            k = D.get(p["d"])
            if k is None:
                hata.append("%s: KUNYE YOK -> %s" % (ad, p["d"]))
            elif p["f"] < k["f"] or p["t"] > k["t"]:
                hata.append("%s: PENCERE ASILDI %s [%s..%s] vs %s..%s"
                            % (ad, p["d"], k["f"], k["t"], p["f"], p["t"]))
        kayitlar.append({"ad": ad, "s": yeni, "kaynak": kaynak, "not": not_})
        rapor.append({"ad": ad,
                      "eski": ["%s..%s %s" % (p["f"], p["t"], p["d"])
                               for p in eski],
                      "yeni": ["%s..%s %s" % (p["f"], p["t"], p["d"])
                               for p in yeni]})

    # ── DÖRT NOKTA ──────────────────────────────────────────────────
    for ad in DORT:
        e = sorted(Y[ad]["s"], key=lambda p: p["f"])
        yeni = []
        for p in e:
            if p["d"] == "ingiltere":
                yeni.append(dict(p))
            elif p["d"] == "ingiliz-kuzey-amerika":
                yeni.append(dict(p, t=RA_F))     # 1867-07-01 -> 1799-01-01
            elif p["d"] == "kanada":
                continue                          # DÜŞÜRÜLÜYOR
            else:
                yeni.append(dict(p))
        yeni.append({"f": RA_F, "t": RA_T, "d": "rus-amerika"})
        yeni.append({"f": RA_T, "t": UFUK_SON, "d": "abd"})
        kur(ad, yeni, K_ORTAK, N_DORT)

    # ── FORT YUKON — dört kalıbına SOKULMADI ────────────────────────
    e = sorted(Y[FY]["s"], key=lambda p: p["f"])
    yeni = []
    for p in e:
        if p["d"] == "kanada":
            continue
        if p["d"] == "ingiliz-kuzey-amerika":
            # zincir 1847'de başlıyor; egemenlik DE JURE Rus'tu
            yeni.append({"f": p["f"], "t": RA_T, "d": "rus-amerika"})
            continue
        yeni.append(dict(p))
    yeni.append({"f": RA_T, "t": UFUK_SON, "d": "abd"})
    kur(FY, yeni, K_ORTAK, N_FY)

    print("kayit: %d · SINAV HATASI: %d" % (len(kayitlar), len(hata)))
    for h in hata:
        print("  🔴 %s" % h)
    if hata:
        print("\n🔴 YAMA YAZILMADI.")
        return 1

    basl = io.open(os.path.join(os.path.dirname(__file__),
                                "_alaska_baslik.txt"), encoding="utf-8").read()
    yol = os.path.join(KOK, "denetim", DOSYA)
    with io.open(yol, "w", encoding="utf-8") as f:
        f.write(basl)
        f.write("window.%s = %s;\n"
                % (AD_ALANI, json.dumps(kayitlar, ensure_ascii=False,
                                        indent=1)))
    print("\nyazildi: %s" % yol)
    for r in rapor:
        print("\n  %s" % r["ad"])
        print("    ESKI: %s" % " | ".join(r["eski"]))
        print("    YENI: %s" % " | ".join(r["yeni"]))
    with io.open(os.path.join(KOK, "denetim", "ALASKA-DEVIR-0907.json"),
                 "w", encoding="utf-8") as f:
        json.dump({"_NOT": "Alaska devir yamasi — kalem kalem.",
                   "kalemler": rapor}, f, ensure_ascii=False, indent=1)
    return 0


if __name__ == "__main__":
    sys.exit(main())
