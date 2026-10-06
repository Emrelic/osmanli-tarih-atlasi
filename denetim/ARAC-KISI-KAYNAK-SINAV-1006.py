# ARAC-KISI-KAYNAK-SINAV-1006 — `durum_tablosu.kisi_kova/kisi_kaynak_say/_satiri`
# sınavı (UMIT-W7-DALGA11-1006). Koşum: py denetim/ARAC-KISI-KAYNAK-SINAV-1006.py
#   ① 12 fikstür (W16'nın a-l'si) ADIYLA doğru kovada — j/k/l TDV'yi İÇERİR ama
#      onunla BAŞLAMAZ ⇒ "başka"
#   ② TEK TANIM: durum_tablosu.kisi_kova ↔ W16 `ARAC-KISI-ORNEKLEM-1006.kova`
#      fikstürde ve GERÇEK veride kayıt kayıt eşit (tanım iki yerde ayrışmasın)
#   ③ gerçek veri: "başka" kovası ADIYLA {napolyon-bonapart, francesco-morosini};
#      tdv/başka/beyan sınıfları hâlâ var
#   ④ İKİ YÖNLÜ YAPAY: kisiler.js'in geçici kopyasına her kovadan birer kayıt
#      → her kova tam +1, iki tanım yine eşit
#   ⑤ ÖLÇÜLEMEDİ: dosya yok · KISILER dizi değil · bozuk JS → sebep, RAKAM YOK
#   ⑥ MUTASYON (negatif kontrol): beş yanlış tanım ①-③'ten SAĞ ÇIKAMAZ
# Bağımlılık: denetim/KISI-SAYIM-AYRI-1006(b).diff (W16'nın 4 kovalı kova()).
import importlib.util, io, os, re, shutil, subprocess, sys, tempfile, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import durum_tablosu as D          # stdout'u sarar, chdir(KOK)
out = sys.stdout
gecti = toplam = 0


def sina(ad, kosul, ayrinti=""):
    global gecti, toplam
    toplam += 1
    gecti += bool(kosul)
    out.write("%s %s%s\n" % ("✓" if kosul else "✗", ad,
                             ("  — " + ayrinti) if (ayrinti and not kosul) else ""))


FIKSTUR = [  # W16 KISI-SAYIM-AYRI-1006b ile BİREBİR
    ({"id": "a", "kaynak": "TDV: sinan"}, "tdv"),
    ({"id": "b", "kaynak": "TDV: kemal-reis (Burak Reis'in müstakil maddesi TDV'de bulunamadı — slug 302)"}, "tdv"),
    ({"id": "c", "kaynak": "bulunamadı — TDV İslâm Ansiklopedisi, 5 Ekim 2026; …"}, "beyan"),
    ({"id": "d", "kaynak": "  Bulunamadı — baş boşluk ve büyük harf"}, "beyan"),
    ({"id": "e", "kaynak": ""}, "kaynaksiz"),
    ({"id": "f"}, "kaynaksiz"),
    ({"id": "g", "kaynak": "   "}, "kaynaksiz"),
    ({"id": "h", "kaynak": "Encyclopaedia Britannica, britannica.com/biography/…"}, "baska"),
    ({"id": "i", "kaynak": "Britannica (TDV'de bulunamadı)"}, "baska"),
    ({"id": "j", "kaynak": "Encyclopaedia Britannica, britannica.com/biography/Napoleon-I — TDV'de müstakil madde YOK ('napolyon' 302 ölü), §4 kuralına göre akademik kaynağa geçildi"}, "baska"),
    ({"id": "k", "kaynak": "Encyclopaedia Britannica, britannica.com/topic/Morosini-family — TDV'de müstakil madde YOK (Girit/Mora/Atina maddelerinde yalnız adı geçiyor), §4 kuralına göre akademik kaynağa geçildi"}, "baska"),
    ({"id": "l", "kaynak": "Britannica · TDV: napolyon karşılaştırıldı, madde yok"}, "baska"),
]
BASKA_GERCEK = {"napolyon-bonapart", "francesco-morosini"}


def _w16():
    yol = os.path.join(KOK, "denetim", "ARAC-KISI-ORNEKLEM-1006.py")
    spec = importlib.util.spec_from_file_location("w16_kisi", yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def _kisiler(yol):
    js = ("const W={};new Function('window',require('fs').readFileSync(process.argv[1],'utf8'))(W);"
          "process.stdout.write(JSON.stringify(W.KISILER))")
    return json.loads(subprocess.run(["node", "-e", js, yol], capture_output=True,
                                     check=True).stdout.decode("utf-8"))


W16 = _w16()
GERCEK = _kisiler(os.path.join(KOK, "data", "kisiler.js"))


def cekirdek(kova, yaz=True):
    """①-③ — kova işlevine karşı; başarısız soru adlarını döner (mutasyon için)."""
    olen = []

    def s(ad, kosul, ayr=""):
        if yaz:
            sina(ad, kosul, ayr)
        if not kosul:
            olen.append(ad)
    for k, b in FIKSTUR:
        s("① fikstür %s → %s" % (k["id"], b), kova(k) == b, "bulunan %s" % kova(k))
    s("② fikstürde iki tanım eşit", all(kova(k) == W16.kova(k) for k, _ in FIKSTUR))
    fark = [k.get("id") for k in GERCEK if kova(k) != W16.kova(k)]
    s("② gerçek veride iki tanım kayıt kayıt eşit (%d kişi)" % len(GERCEK), not fark,
      "ayrışan: %s" % fark[:5])
    baska = {k.get("id") for k in GERCEK if kova(k) == "baska"}
    s("③ gerçek 'başka' kovası ADIYLA {napolyon-bonapart, francesco-morosini}",
      baska == BASKA_GERCEK, "bulunan %s" % sorted(baska))
    for kv in ("tdv", "baska", "beyan"):
        s("③ gerçek veride '%s' sınıfı hâlâ var" % kv, any(kova(k) == kv for k in GERCEK))
    return olen


cekirdek(D.kisi_kova)

# ③b — durum_tablosu'nun kendi yolu (node yükleme + sayım) W16'nın say()'ıyla eşit
R = D.kisi_kaynak_say()
w = W16.say(GERCEK)
sina("③b kisi_kaynak_say = W16 say (tdv/başka/beyan/kaynaksız)",
     "hata" not in R and (R["tdv"], R["baska"], R["beyan"], R["kaynaksiz"]) == tuple(w),
     "dt %s · w16 %s" % (R, w))
sina("③b satır biçimi", D.kisi_kaynak_satiri(R) ==
     "TDV %d · başka %d · bulunamadı BEYANI %d · kaynaksız %d" % tuple(w))

# ④ İKİ YÖNLÜ YAPAY — geçici kopya, data/ değişmez
YAPAY = [{"id": "__y_tdv__", "kaynak": "TDV: yapay"},
         {"id": "__y_baska__", "kaynak": "Britannica · TDV: yapay karşılaştırıldı, madde yok"},
         {"id": "__y_beyan__", "kaynak": "bulunamadı — yapay"},
         {"id": "__y_bos__", "kaynak": "  "}]
td = tempfile.mkdtemp(prefix="kisiyapay_")
try:
    metin = D._oku(os.path.join("data", "kisiler.js"))
    m = re.search(r"window\.KISILER\s*=\s*\[[^\n]*\n", metin)
    kopya = os.path.join(td, "kisiler.js")
    io.open(kopya, "w", encoding="utf-8", newline="").write(
        metin[:m.end()] + "".join(json.dumps(y, ensure_ascii=False) + ",\n" for y in YAPAY)
        + metin[m.end():])
    Ry = D.kisi_kaynak_say(kopya)
    sina("④ YAPAY: her kova tam +1",
         "hata" not in Ry and all(Ry[k] - R[k] == 1 for k in ("tdv", "baska", "beyan", "kaynaksiz")),
         "%s ← %s" % (Ry, R))
    sina("④ YAPAY: iki tanım yine eşit",
         all(D.kisi_kova(k) == W16.kova(k) for k in _kisiler(kopya)))
    # ⑤ ÖLÇÜLEMEDİ
    bozuk = os.path.join(td, "bozuk.js")
    io.open(bozuk, "w", encoding="utf-8").write("window.KISILER = [ { id:'a' ,, ];")
    dizisiz = os.path.join(td, "dizisiz.js")
    io.open(dizisiz, "w", encoding="utf-8").write("window.KISILER = {};")
    for ad, yol in (("dosya yok", os.path.join(td, "yok.js")), ("bozuk JS", bozuk),
                    ("KISILER dizi değil", dizisiz)):
        H = D.kisi_kaynak_say(yol)
        st = D.kisi_kaynak_satiri(H)
        sina("⑤ %s → ÖLÇÜLEMEDİ, rakam yok" % ad,
             "hata" in H and "ÖLÇÜLEMEDİ" in st and not re.search(r"(TDV|başka|BEYANI|kaynaksız) \d", st),
             st[:120])
finally:
    shutil.rmtree(td, ignore_errors=True)


# ⑥ MUTASYON — her biri ①-③'ten en az bir soruyla ÖLMELİ
def _m(f):
    return f


def m_tdv_in(k):          # "TDV" İÇERİR
    s = str(k.get("kaynak") or "").strip()
    if not s:
        return "kaynaksiz"
    if s.lower().startswith(D.KISI_BEYAN):
        return "beyan"
    return "tdv" if "TDV" in s else "baska"


def m_tdvkolon_in(k):     # "TDV:" İÇERİR (yalnız l öldürür — gerçek veri "TDV'de" der)
    s = str(k.get("kaynak") or "").strip()
    if not s:
        return "kaynaksiz"
    if s.lower().startswith(D.KISI_BEYAN):
        return "beyan"
    return "tdv" if "TDV:" in s else "baska"


def m_beyan_in(k):        # "bulunamadı" İÇERİR
    s = str(k.get("kaynak") or "").strip()
    if not s:
        return "kaynaksiz"
    if D.KISI_BEYAN in s.lower():
        return "beyan"
    return "tdv" if s.startswith("TDV:") else "baska"


def m_baska_tdv(k):       # başka kovası SİLİNDİ → TDV'ye
    v = D.kisi_kova(k)
    return "tdv" if v == "baska" else v


def m_baska_bos(k):       # başka kovası SİLİNDİ → kaynaksıza
    v = D.kisi_kova(k)
    return "kaynaksiz" if v == "baska" else v


for ad, f in (("TDV in", m_tdv_in), ('"TDV:" in', m_tdvkolon_in), ("beyan in", m_beyan_in),
              ("başka→TDV", m_baska_tdv), ("başka→kaynaksız", m_baska_bos)):
    olen = cekirdek(f, yaz=False)
    sina("⑥ MUTANT '%s' ÖLDÜ (%d soru öttü: %s)" % (ad, len(olen), ", ".join(olen[:3])),
         len(olen) > 0)

out.write("SINAV %d/%d\n" % (gecti, toplam))
raise SystemExit(0 if gecti == toplam else 1)
