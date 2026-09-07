# -*- coding: utf-8 -*-
"""BUDAMA-0907 · HAZIRLIK PAKETİ ÜRETECİ

🔴 BU ALET `CLAUDE.md`YE DOKUNMAZ — yalnız OKUR. Bütün çıktı
   `denetim/BUDAMA-PLAN-0907/` altına yazılır.

ÜRETTİĞİ:
    BUDAMA-PLAN-0907/YENI-CLAUDE-11.md   budanmış §11'in TAM METNİ
    BUDAMA-PLAN-0907/dersler/<slug>.md   çıkan vaka anlatıları (N adet)
    BUDAMA-PLAN-0907/ESLEME-0907.json    ders → dosya eşlemesi (makine okunur)

KORUMA KURALI — `CLAUDE.md`de KALAN satırlar:
  ① MANŞET            bloğun ilk satırı (kuralın kendisi)
  ② HÜKÜM satırları   `📌` · `⇒` · `KURAL` · `HÜKÜM` ile başlayan/işaretli
  ③ DAMGA satırları   ÇÜRÜDÜ · DAMGALANDI · BAYATLADI · BORÇ KAPANDI …
                      🔴 Bunlar bir dersin BUGÜNKÜ GEÇERLİLİĞİNİ taşır;
                      vakayla birlikte inerse bir oturum çürümüş bir dersi
                      geçerli sanır.
  ④ KÜNYE             üretilen tek satır: tarih · oturum · bağlantı
  ⑤ TABAN GÜVENCESİ   ①-③'ten hiçbir şey tutmayan bir derste, gövdenin
                      ilk anlamlı satırı yine de tutulur — bir ders ASLA
                      yalnız manşetle kalmaz.

DEĞİŞMEZ — ve sınavı `ARAC-BUDAMA-SINAV-0907.py`da:
    eski §11'in HER SATIRI, ya yeni §11'de ya bir `dersler/*.md` içinde
    bulunur. KAYIP SATIR: 0.
"""
import os
import re
import sys
import json
import unicodedata

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAN = os.path.join(KOK, "denetim", "BUDAMA-PLAN-0907")
DERSLER = os.path.join(PLAN, "dersler")

import tiktoken
ENC = tiktoken.get_encoding("o200k_base")
tok = lambda s: len(ENC.encode(s))

# ⑥ EŞİK — bu token sayısının altındaki ders YERİNDE kalır.
# Ölçüldü: eşiksiz üretimde 4 ders BÜYÜDÜ (net +122 token), çünkü künye
# satırı + bağlantı, çıkan vakadan pahalıydı. Taşımanın maliyeti
# kazancından büyükse taşınmaz.
ESIK = 150

# ⑧ Bir dersi taşımak için gereken EN AZ net kazanç (token).
# Bunun altında kalan ders YERİNDE bırakılır: ayrı dosya + künye satırı
# + bağlantı, kazandırdığından pahalıya gelir.
MIN_KAZANC = 40

# ⑦ KAPAK — bir derste en çok kaç HÜKÜM PARAGRAFI kalsın (0 = sınırsız).
# Komut satırından: `py … --kapak 2`
KAPAK = 0
for _i, _a in enumerate(sys.argv):
    if _a == "--kapak":
        KAPAK = int(sys.argv[_i + 1])

# ② HÜKÜM satırı
HUKUM = re.compile(r"^\s*(📌|⇒|🟢\s*\*{0,2}(KURAL|HÜKÜM)|🔴\s*\*{0,2}(KURAL|HÜKÜM)"
                   r"|⚠️\s*\*{0,2}(KURAL|HÜKÜM)|\*{0,2}(KURAL|HÜKÜM)\s*[:—-])")
# ③ DAMGA satırı — dersin bugünkü geçerliliği
DAMGA = re.compile(
    r"(ÇÜRÜDÜ|ÇÜRÜTÜLDÜ|ÇÜRÜTTÜ|DAMGALANDI|BAYATLADI|BORÇ KAPANDI|"
    r"ARTIK YÜRÜRLÜKTE DEĞİL|ARTIK YANLIŞ|KURAL DEĞİŞTİ|DERS SİLİNMEDİ|"
    r"DEVRALDIM|GERİ ÇEKİLDİ|KAPSAM DARALTILDI)")
AYLAR = ("Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|"
         "Kasım|Aralık")
KUNYE_RX = re.compile(r"\((\d{1,2}\s+(?:%s)\s+\d{4}[^)]*)\)" % AYLAR)


def slugla(etiket, kullanilan):
    s = etiket
    s = re.sub(r"[*`~]", "", s)
    s = "".join(c for c in s if not unicodedata.category(c).startswith("S"))
    s = s.translate(str.maketrans("ıİşŞğĞüÜöÖçÇâîûÂÎÛ", "iissgguuooccaiuAIU"))
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^A-Za-z0-9]+", "-", s).strip("-").lower()
    s = "-".join([p for p in s.split("-") if p][:7])[:56] or "ders"
    ad, n = s, 2
    while ad in kullanilan:
        ad = "%s-%d" % (s, n)
        n += 1
    kullanilan.add(ad)
    return ad


def s11_oku():
    """CLAUDE.md'nin §11'ini okur: (onsoz_satirlari, [blok_satirlari…])"""
    ham = open(os.path.join(KOK, "CLAUDE.md"), "rb").read().decode("utf-8")
    satirlar = ham.split("\n")
    bas = None
    for i, s in enumerate(satirlar):
        if s.startswith("## 11."):
            bas = i
            break
    if bas is None:
        raise SystemExit("🔴 §11 bulunamadı — başlık kalıbı değişmiş")
    kesit = satirlar[bas:]
    onsoz, bloklar, su = [], [], None
    for s in kesit:
        if re.match(r"^- \S", s):
            if su:
                bloklar.append(su)
            su = [s]
        elif su is not None:
            su.append(s)
        else:
            onsoz.append(s)
    if su:
        bloklar.append(su)
    return bas + 1, onsoz, bloklar


def paragrafa_ayir(blok):
    """(manşet paragrafı, [gövde paragrafları…])

    🔴 NİÇİN PARAGRAF, SATIR DEĞİL: bu belgede cümleler satır sonunda
    BİTMEZ — bir `⇒` ya da manşet iki-üç satıra sarar. Satır bazlı seçim
    ilk denemede cümleleri ORTASINDAN kesti ve *"…diye eledi. Bu,"* gibi
    yarım hükümler üretti. Kusur ölçümde değil OKUMADAYDI; örnek
    çıkarılmasaydı görünmeyecekti.

    Paragraf = ardışık boş-olmayan satırlar. Kod çiti kendi birimidir.
    """
    par, su, fence = [], [], False
    for l in blok:
        cit = l.strip().startswith("```")
        if cit:
            if su and not fence:
                par.append(su)
                su = []
            su.append(l)
            if fence:
                par.append(su)
                su = []
            fence = not fence
            continue
        if fence:
            su.append(l)
            continue
        if l.strip():
            su.append(l)
        elif su:
            par.append(su)
            su = []
    if su:
        par.append(su)
    return (par[0] if par else list(blok[:1])), par[1:]


def kunye(blok_metin, slug):
    m = KUNYE_RX.search(blok_metin)
    ic = m.group(1).strip() if m else "künye yok"
    ic = re.sub(r"\s+", " ", ic)[:90]
    return "  → vaka: `denetim/BUDAMA-PLAN-0907/dersler/%s.md`  · %s" % (slug, ic)


def main():
    bas_satir, onsoz, bloklar = s11_oku()
    os.makedirs(DERSLER, exist_ok=True)
    kullanilan, esleme = set(), []
    yeni = list(onsoz)
    eski_tok = tok("\n".join(onsoz + [l for b in bloklar for l in b]))

    yerinde = []
    for b in bloklar:
        manset = b[0]
        etiket = re.sub(r"\s+", " ", re.sub(r"[*`]", "", manset[2:])).strip()
        blok_tok = tok("\n".join(b))

        # ⑥ EŞİK — taşımanın maliyeti kazancından büyükse TAŞIMA.
        # Ölçüldü: 150 token altındaki 4 derste künye satırı + bağlantı,
        # çıkan vakadan PAHALI (net +122 token). Onlar YERİNDE kalır:
        # vaka dosyası yok, künye satırı yok, blok aynen durur.
        if blok_tok <= ESIK:
            yeni.extend(b + [""])
            yerinde.append({"etiket": etiket, "token": blok_tok})
            continue

        slug = slugla(etiket[:96], kullanilan)
        manset_par, govde = paragrafa_ayir(b)
        tut, tutulan_par, damga_par = [], [], []
        for par in govde:
            if par[0].strip().startswith("```"):
                continue          # kod bloğu VAKAdır
            # HÜKÜM: paragrafın herhangi bir satırı `📌`/`⇒`/KURAL ile BAŞLIYORSA
            # DAMGA : yalnız paragrafın İLK satırında geçiyorsa
            #   🔴 Niçin yalnız ilk satır: "DEVRALDIM"/"ÇÜRÜDÜ" uzun bir
            #   anlatının ortasında da geçiyor; her geçtiği paragrafı tutmak
            #   kazancı 79.671'den 38.770'e düşürdü ve VAKAYI yukarı taşıdı.
            #   Bir DAMGA paragrafı, damgayla BAŞLAYAN paragraftır.
            if DAMGA.search(par[0]):
                damga_par.append(par)          # 🔴 ASLA kapağa takılmaz
            elif any(HUKUM.match(l) for l in par):
                tutulan_par.append(par)
        # ⑦ KAPAK — en çok kaç HÜKÜM paragrafı kalsın?
        #   Bir ders çoğu zaman AYNI hükmü birkaç yönden söyler. Kapak,
        #   paragrafı ORTASINDAN KESMEDEN sadeleştirir: ilk N paragraf kalır,
        #   gerisi vakaya iner. Ölçülen bant için PLAN.md §②.
        #   🔴 DAMGA PARAGRAFLARI KAPAĞIN DIŞINDADIR: `KAPAK=1` ilk denemede
        #   bir dersin «BU İKİ SATIR ERTESİ GÜN BAYATLADI» damgasını düşürdü.
        #   Damga dersin BUGÜNKÜ GEÇERLİLİĞİDİR; düşerse bir oturum çürümüş
        #   bir dersi geçerli sanar — yani kapak, tasarrufu KUSURDAN üretir.
        if KAPAK:
            tutulan_par = tutulan_par[:KAPAK]
        for par in tutulan_par + damga_par:
            tut.extend(par)
        if not tut:  # ⑤ taban güvencesi
            for par in govde:
                if par[0].strip() and not par[0].strip().startswith("```"):
                    tut = list(par)
                    break

        kalan = manset_par + tut + [kunye("\n".join(b), slug)]

        # ⑧ NET KAZANÇ KAPISI — ölçüt token BÜYÜKLÜĞÜ değil KAZANÇ.
        #   ESIK (büyüklük) yeterli değildi: KAPAK=1 ile üretilen son
        #   kademede 37 dersin toplam kazancı **-221 token** çıktı — yani
        #   taşımak PAHALIYA geliyordu. Bir dersi taşımak, ancak ölçülen
        #   kazanç MIN_KAZANC'ı geçiyorsa yapılır.
        if blok_tok - tok("\n".join(kalan)) < MIN_KAZANC:
            yeni.extend(b + [""])
            yerinde.append({"etiket": etiket, "token": blok_tok})
            kullanilan.discard(slug)
            continue
        yeni.extend(kalan + [""])

        # --- vaka dosyası: ORİJİNAL blok, kılı kıpırdamadan ---
        basl = [
            "# %s" % etiket,
            "",
            "> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**",
            "> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;",
            "> burada duran, o kuralı doğuran VAKADIR.",
            "> Eski konum: `CLAUDE.md` satır **%d** · %d token" % (
                0, tok("\n".join(b))),
            "",
            "---",
            "",
        ]
        with open(os.path.join(DERSLER, slug + ".md"), "w",
                  encoding="utf-8", newline="\n") as f:
            f.write("\n".join(basl + b) + "\n")

        esleme.append({
            "slug": slug, "etiket": etiket,
            "eski_token": tok("\n".join(b)),
            "kalan_token": tok("\n".join(kalan)),
            "eski_satir": len(b), "kalan_satir": len(kalan),
            "tutulan_hukum": len(tut),
        })

    yeni_metin = "\n".join(yeni).rstrip() + "\n"
    with open(os.path.join(PLAN, "YENI-CLAUDE-11.md"), "w",
              encoding="utf-8", newline="\n") as f:
        f.write(yeni_metin)
    with open(os.path.join(PLAN, "ESLEME-0907.json"), "w",
              encoding="utf-8") as f:
        json.dump({"s11_bas_satir": bas_satir, "ders": len(bloklar),
                   "eski_token": eski_tok, "yeni_token": tok(yeni_metin),
                   "esik": ESIK, "yerinde": yerinde,
                   "esleme": esleme}, f, ensure_ascii=False, indent=1)

    yt = tok(yeni_metin)
    print("HAZIRLIK PAKETİ ÜRETİLDİ — CLAUDE.md'ye DOKUNULMADI")
    print()
    print("  ders (blok)          : %d" % len(bloklar))
    print("  vakası TAŞINAN       : %d" % len(esleme))
    print("  YERİNDE kalan (≤%d tok): %d ders · %d token" % (
        ESIK, len(yerinde), sum(x["token"] for x in yerinde)))
    print("  §11 ESKİ             : %6d token · %d satır" % (
        eski_tok, len(onsoz) + sum(len(b) for b in bloklar)))
    print("  §11 YENİ             : %6d token · %d satır" % (
        yt, len(yeni)))
    print("  KAZANÇ               : %6d token  (%%%.1f)" % (
        eski_tok - yt, 100.0 * (eski_tok - yt) / eski_tok))
    print()
    hic = [e for e in esleme if e["tutulan_hukum"] == 0]
    print("  hüküm satırı bulunamayıp taban güvencesine düşen ders: %d" % len(hic))
    print("  ders başına kalan: ortalama %d token (eski ortalama %d)" % (
        sum(e["kalan_token"] for e in esleme) // len(esleme),
        sum(e["eski_token"] for e in esleme) // len(esleme)))
    print()
    print("  yazıldı: denetim/BUDAMA-PLAN-0907/YENI-CLAUDE-11.md")
    print("           denetim/BUDAMA-PLAN-0907/dersler/*.md  (%d dosya)" % len(esleme))
    print("           denetim/BUDAMA-PLAN-0907/ESLEME-0907.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
