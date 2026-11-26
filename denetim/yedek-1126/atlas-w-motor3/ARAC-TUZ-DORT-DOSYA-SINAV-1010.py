# -*- coding: utf-8 -*-
"""SINAV — TUZ DÖRT DOSYA, PARMAK İZİ ÜÇ DOSYA (TUZ-DORT-DOSYA-1010) · v3: ALTI DOSYA.

🆕 v3 (koordinatör hükmü, 10 Ekim 2026): `yukseklik.py` LİSTEYE girdi (DEM seçimi ⇒
eğim ⇒ sürtünme ⇒ sahiplik); `dolgu` BEYANLI istisna kalır. (b6) yukseklik.py → RED.

🆕 v2 (10 Ekim 2026, NEGATIF-YIL-1010-B): `arac/gun.py` motorun bağımlılığı oldu
(`girdi.yukle` ve `uret_petek` `gun.Tarih` kullanıyor) ⇒ liste BEŞ dosya. Ad tarihî
kaldı. v2 ekleri: (a') v1 listesiyle gun.py değişikliği SUSAR (kusurun ikinci yüzü) ·
(b5) gun.py → RED · (f) BAĞIMLILIK KAPANIŞI: motor dosyalarının ithal ettiği her YEREL
modül ya listede ya BEYANLI istisnada (adıyla + gerekçesiyle) — beyansız yeni ithal
ve ÖLÜ istisna sınavı düşürür. (c)⑤ `--claude-md` ile önerilen metne karşı da koşar.

Bulgu: `denetim/BULGU-TUZ-DORDUNCU-DOSYA-1010.md`. Önbellek tuzu dört dosyanın
sha256'sı (uret_petek · renkler · girdi · motor_onbellek); `girdi.motor_izi()` ve
`kaynak_durum._motor_izi()` yalnız ilk üçü. `motor_onbellek.py` değişince bütün
önbellek ölüyor, iz "motor değişmedi" diyor, `motor_izi_dogrula` REDDETMİYOR.

İKİ YÖNDE + iki ek (C13: tek yönlü sınav sınav değildir):
  (a) YAMASIZ  — `--yamasiz-ref` (vars. 7e156d63, bulgunun commit'i) dosyaları
                 GEÇİCİ KOPYADA: motor_onbellek.py'ye zararsız satır → TUZ DEĞİŞİR,
                 motor_izi DEĞİŞMEZ, kaynak_durum izi DEĞİŞMEZ, motor_izi_dogrula
                 çıkış 0 (kapı geçer)  ⇒ KUSURUN KANITI. Bu yönde "beklenen" kusurdur.
  (b) YAMALI   — `--kok` ağacının dosyaları GEÇİCİ KOPYADA: aynı değişiklik → tuz
                 DEĞİŞİR, motor_izi DEĞİŞİR, kaynak_durum izi DEĞİŞİR,
                 motor_izi_dogrula çıkış ≠ 0 (RED).
  (c) EŞİTLİK  — beş liste aynı küme olmalı (ASSERT):
                 ① motor_iz_dosyalari.MOTOR_IZ_DOSYALARI (tek otorite)
                 ② girdi.motor_izi() anahtarları
                 ③ kaynak_durum._motor_izi() anahtarları (ithalsiz okuyucu)
                 ④ uret_petek._ONB_TUZ'un hashlediği dosyalar — AST ile, motor
                    KOŞTURULMADAN: "motor": _MOTOR_IZI (= girdi.motor_izi()) ∪
                    dosya_ozeti(..."<ad>") literalleri
                 ⑤ CLAUDE.md §9.1 "TUZU dört dosyanın sha256'sıdır:" satırının adları
  (d) YANLIŞ ALARM YOK — hiçbir şey değişmezse ve dört dosya DIŞINDA bir arac/
                 dosyası (girdi_listesi.py, denetle.py) değişirse iz AYNI kalır,
                 motor_izi_dogrula çıkış 0.
  (e) GERİYE UYUM — `motor_iz_dosyalari.py` OLMAYAN ağaç (eski commit) için
                 kaynak_durum eski üçlüyü okur ve "ESKI-UCLU" beyan eder; liste
                 dosyası BOZUKSA koşu kapı damgası YAZILMAZ (ilan reddi).

🔴 GERÇEK DOSYALARA DOKUNULMAZ: her senaryo `tempfile.mkdtemp` altına kopyalanan
`arac/`ta koşar (ARAC-TUZ-SINAV-0924.py gerçek dosyayı yerinde değiştiriyordu —
koşu sürerken tuz dosyasına dokunmak `§9.1③` ihlalidir). Sınav sonunda kök
ağaçtaki dört dosyanın sha256'sı başla karşılaştırılır.

Kullanım:  py denetim/ARAC-TUZ-DORT-DOSYA-SINAV-1010.py [--kok <ağaç>] [--yamasiz-ref <commit>]
Çıkış: 0 geçti · 1 kaldı · 2 ölçülemedi (ref okunamadı vb.)
"""
import argparse
import ast
import hashlib
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ap.add_argument("--yamasiz-ref", default="7e156d63")
ap.add_argument("--claude-md", default=None,
                help="§9.1 TUZU satırının okunacağı CLAUDE.md (vars. <kök>/CLAUDE.md). "
                     "Yama CLAUDE.md'den ÖNCE sınanıyorsa önerilen metnin kopyası verilir.")
A = ap.parse_args()
KOK = os.path.abspath(A.kok)
ARAC = os.path.join(KOK, "arac")

ESKI_DORT = ("uret_petek.py", "renkler.py", "girdi.py", "motor_onbellek.py")   # v1 (yamasız tuz)
DORT = ESKI_DORT + ("gun.py", "yukseklik.py")   # v3: ALTI dosya (ad tarihî — değişken adı da)
# Senaryo ağacına kopyalanan dosyalar (motor_iz_dosyalari.py yamasızda YOK)
KOPYA = DORT + ("girdi_listesi.py", "kaynak_durum.py", "motor_iz_dosyalari.py", "denetle.py")

# 🔴 BEYANLI İSTİSNA — motor dosyalarının ithal ettiği ama İZE GİRMEYEN yerel modüller.
#   Sayı değil LİSTE (`CLAUDE.md §3.4⑤`); her girdi tüketicisine göre CANLI olmalı —
#   artık ithal edilmeyen istisna ÖLÜDÜR ve sınavı düşürür. Yeni beyansız ithal de düşürür.
BEYANLI_ISTISNA = {
    "girdi_listesi": "VERİ, kod değil — etkisi parmak_izi() ile çıktıya yazılır; "
                     "ize girmesi önbelleği her dosya bağlamada öldürür (girdi_listesi.py başlığı)",
    "motor_iz_dosyalari": "listenin kendisi — etkisi izin ANAHTAR KÜMESİNDEN geçer",
    "kosu_kilit": "İŞLETİM (çift koşu kilidi) — sonucu değiştirmez",
    "dolgu": "B katmanı (koordinatör hükmü, 10 Ekim 2026: istisna KALIR) — MOTOR_B_DOLGU=1 "
             "bayrağı arkasında (bayrak tuzda), önbelleğe girmez, A boru hattını okumaz; yalnız "
             "data/dolgu.js'i ÜRETİR. 🔴 data/dolgu.js bir gün motor GİRDİSİ olursa bu istisna DÜŞER",
}

SONUC = []
OLCULEMEDI = []


def kontrol(ad, kosul, ayrinti):
    SONUC.append((ad, bool(kosul)))
    print(("✓ " if kosul else "✗ ") + ad + ": " + ayrinti)


def sha(yol):
    return hashlib.sha256(io.open(yol, "rb").read()).hexdigest()


GERCEK_ONCE = {a: sha(os.path.join(ARAC, a)) for a in DORT if os.path.exists(os.path.join(ARAC, a))}

# ── senaryo içi ölçüm betiği (ayrı süreçte; kopya ağacın arac/'ını ithal eder) ──
OLCER = r'''
import sys, os, io, json, hashlib, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ARAC = sys.argv[1]; DEGISTIR = sys.argv[2]; KIP = sys.argv[3]
sys.path.insert(0, ARAC)
import girdi, motor_onbellek as mob
spec = importlib.util.spec_from_file_location("kd_sinav", os.path.join(ARAC, "kaynak_durum.py"))
kd = importlib.util.module_from_spec(spec); spec.loader.exec_module(kd)
KOKU = os.path.dirname(ARAC)

def tuz():
    # uret_petek._ONB_TUZ'un KOD EKSENİ (AST ile doğrulandı, (c) ④): "motor" + "onbellek_modulu"
    return hashlib.sha256(json.dumps({"motor": girdi.motor_izi(),
        "onbellek_modulu": mob.dosya_ozeti(os.path.join(ARAC, "motor_onbellek.py"))},
        sort_keys=True).encode("utf-8")).hexdigest()

once = {"iz": girdi.motor_izi(), "kd": kd._motor_izi(KOKU), "tuz": tuz()}
if DEGISTIR != "-":
    with io.open(os.path.join(ARAC, DEGISTIR), "ab") as f:
        f.write(b"\n# SINAV: zararsiz satir (TUZ-DORT-DOSYA-1010)\n")
sonra = {"iz": girdi.motor_izi(), "kd": kd._motor_izi(KOKU), "tuz": tuz()}
print("JSON:" + json.dumps({"once": once, "sonra": sonra}, sort_keys=True))
sys.stdout.flush()
if KIP == "kapi":
    girdi.motor_izi_dogrula(once["iz"], "TUZ-DORT-DOSYA sinavi")   # SystemExit(str) => cikis 1
'''


def senaryo(kaynak, degistir, etiket):
    """kaynak: {ad: bayt}. Döner (ölçüm sözlüğü, kapı çıkış kodu, kapı çıktısı)."""
    td = tempfile.mkdtemp(prefix="tuz4_" + etiket + "_")
    try:
        os.makedirs(os.path.join(td, "arac"))
        for ad, b in kaynak.items():
            io.open(os.path.join(td, "arac", ad), "wb").write(b)
        olcer = os.path.join(td, "olcer.py")
        io.open(olcer, "w", encoding="utf-8").write(OLCER)
        r = subprocess.run([sys.executable, "-X", "utf8", olcer, os.path.join(td, "arac"), degistir, "kapi"],
                           capture_output=True, encoding="utf-8", errors="replace", cwd=td, timeout=300)
        js = [s for s in r.stdout.splitlines() if s.startswith("JSON:")]
        if not js:
            OLCULEMEDI.append("%s: ölçer çıktı vermedi (çıkış %d): %s" % (etiket, r.returncode, r.stderr[-500:]))
            return None, r.returncode, r.stderr
        return json.loads(js[0][5:]), r.returncode, r.stderr
    finally:
        shutil.rmtree(td, ignore_errors=True)


def kok_kaynak():
    return {a: io.open(os.path.join(ARAC, a), "rb").read() for a in KOPYA
            if os.path.exists(os.path.join(ARAC, a))}


def ref_kaynak(ref):
    out = {}
    for a in KOPYA:
        r = subprocess.run(["git", "-C", KOK, "show", "%s:arac/%s" % (ref, a)], capture_output=True)
        if r.returncode == 0:
            out[a] = r.stdout
    return out


# ═══ (a) YAMASIZ — kusurun kanıtı ═════════════════════════════════════════════
print("── (a) YAMASIZ (%s) — motor_onbellek.py'ye zararsız satır" % A.yamasiz_ref)
YK = ref_kaynak(A.yamasiz_ref)
if not all(a in YK for a in ESKI_DORT):
    OLCULEMEDI.append("(a) yamasız ref %s okunamadı: %s" % (A.yamasiz_ref, sorted(set(ESKI_DORT) - set(YK))))
else:
    kontrol("a0 yamasız ağaçta motor_iz_dosyalari.py YOK (gerçekten yamasız)",
            "motor_iz_dosyalari.py" not in YK, "dosyalar: %s" % sorted(YK))
    m, kod, err = senaryo(YK, "motor_onbellek.py", "a")
    if m:
        kontrol("a1 TUZ DEĞİŞTİ", m["once"]["tuz"] != m["sonra"]["tuz"],
                "%s → %s" % (m["once"]["tuz"][:12], m["sonra"]["tuz"][:12]))
        kontrol("a2 KUSUR: girdi.motor_izi() DEĞİŞMEDİ", m["once"]["iz"] == m["sonra"]["iz"],
                "anahtarlar %s" % sorted(m["once"]["iz"]))
        kontrol("a3 KUSUR: kaynak_durum izi DEĞİŞMEDİ", m["once"]["kd"] == m["sonra"]["kd"],
                "anahtarlar %s" % sorted(m["once"]["kd"]))
        kontrol("a4 KUSUR: motor_izi_dogrula GEÇTİ (çıkış 0) — koşu reddetmezdi", kod == 0,
                "çıkış %d" % kod)

# ═══ (b) YAMALI — kusur kapandı ═══════════════════════════════════════════════
print("── (b) YAMALI (%s) — aynı değişiklik" % KOK)
KK = kok_kaynak()
m, kod, err = senaryo(KK, "motor_onbellek.py", "b")
if m:
    kontrol("b1 TUZ DEĞİŞTİ", m["once"]["tuz"] != m["sonra"]["tuz"],
            "%s → %s" % (m["once"]["tuz"][:12], m["sonra"]["tuz"][:12]))
    kontrol("b2 girdi.motor_izi() DEĞİŞTİ (motor_onbellek.py ekseninde)",
            m["once"]["iz"] != m["sonra"]["iz"]
            and m["once"]["iz"].get("motor_onbellek.py") != m["sonra"]["iz"].get("motor_onbellek.py"),
            "anahtarlar %s" % sorted(m["once"]["iz"]))
    kontrol("b3 kaynak_durum izi DEĞİŞTİ", m["once"]["kd"] != m["sonra"]["kd"],
            "anahtarlar %s" % sorted(m["once"]["kd"]))
    son = (err.strip().splitlines() or ["?"])[-1]
    kontrol("b4 motor_izi_dogrula RED (çıkış ≠ 0, mesajda motor_onbellek.py)",
            kod != 0 and "motor_onbellek.py" in err, "çıkış %d · %s" % (kod, son[:140]))

# ═══ (a') v1 LİSTESİ + gun.py — kusurun İKİNCİ yüzü ═══════════════════════════
print("── (a') v1 listesi (dört dosya) + gun.py'ye zararsız satır")
def yerel_ithal(kaynak_bayt):
    agac = ast.parse(kaynak_bayt.decode("utf-8"))
    s = set()
    for n in ast.walk(agac):
        if isinstance(n, ast.Import):
            s |= {x.name.split(".")[0] for x in n.names}
        elif isinstance(n, ast.ImportFrom) and n.module and n.level == 0:
            s.add(n.module.split(".")[0])
    return s
gun_kullanan = sorted(a for a in ("girdi.py", "uret_petek.py") if a in KK and "gun" in yerel_ithal(KK[a]))
if "gun.py" not in KK:
    OLCULEMEDI.append("(a') kök ağaçta arac/gun.py yok")
elif not gun_kullanan:
    print("   (gun.py bu ağaçta motorca ithal EDİLMİYOR — NEG uygulanmamış; (a') atlandı, kusur yok)")
else:
    V1 = dict(KK)
    V1["motor_iz_dosyalari.py"] = ('MOTOR_IZ_DOSYALARI = ("uret_petek.py", "renkler.py", '
                                   '"girdi.py", "motor_onbellek.py")\n').encode("utf-8")
    m, kod, err = senaryo(V1, "gun.py", "a2")
    if m:
        kontrol("a'1 gun.py motorca ithal ediliyor (bağımlılık GERÇEK)", True, ", ".join(gun_kullanan))
        kontrol("a'2 KUSUR: v1 listesiyle gun.py değişince motor_izi DEĞİŞMEDİ",
                m["once"]["iz"] == m["sonra"]["iz"], "anahtarlar %s" % sorted(m["once"]["iz"]))
        kontrol("a'3 KUSUR: v1 listesiyle motor_izi_dogrula GEÇTİ (çıkış 0)", kod == 0, "çıkış %d" % kod)

print("── (b5) YAMALI — gun.py'ye zararsız satır")
m, kod, err = senaryo(KK, "gun.py", "b5")
if m:
    son = (err.strip().splitlines() or ["?"])[-1]
    kontrol("b5 gun.py → iz DEĞİŞTİ · kd DEĞİŞTİ · tuz DEĞİŞTİ · dogrula RED",
            m["once"]["iz"].get("gun.py") not in (None, m["sonra"]["iz"].get("gun.py"))
            and m["once"]["kd"] != m["sonra"]["kd"] and m["once"]["tuz"] != m["sonra"]["tuz"]
            and kod != 0 and "gun.py" in err, "çıkış %d · %s" % (kod, son[:120]))

print("── (b6) YAMALI — yukseklik.py'ye zararsız satır (v3)")
m, kod, err = senaryo(KK, "yukseklik.py", "b6")
if m:
    son = (err.strip().splitlines() or ["?"])[-1]
    kontrol("b6 yukseklik.py → iz DEĞİŞTİ · kd DEĞİŞTİ · tuz DEĞİŞTİ · dogrula RED",
            m["once"]["iz"].get("yukseklik.py") not in (None, m["sonra"]["iz"].get("yukseklik.py"))
            and m["once"]["kd"] != m["sonra"]["kd"] and m["once"]["tuz"] != m["sonra"]["tuz"]
            and kod != 0 and "yukseklik.py" in err, "çıkış %d · %s" % (kod, son[:120]))

# ═══ (c) EŞİTLİK — beş liste ══════════════════════════════════════════════════
print("── (c) EŞİTLİK — beş liste aynı küme")
L = {}
m, kod, err = senaryo(KK, "-", "c")
sys.path.insert(0, ARAC)
try:
    import importlib.util
    sp = importlib.util.spec_from_file_location("miz_sinav", os.path.join(ARAC, "motor_iz_dosyalari.py"))
    miz = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(miz)
    L["① motor_iz_dosyalari"] = set(miz.MOTOR_IZ_DOSYALARI)
    kontrol("c0 tek otoritede mükerrer ad yok",
            len(miz.MOTOR_IZ_DOSYALARI) == len(set(miz.MOTOR_IZ_DOSYALARI)), str(miz.MOTOR_IZ_DOSYALARI))
except Exception as e:  # noqa: BLE001
    OLCULEMEDI.append("① motor_iz_dosyalari.py okunamadı: %s" % e)
if m:
    L["② girdi.motor_izi()"] = set(m["once"]["iz"])
    L["③ kaynak_durum._motor_izi()"] = set(m["once"]["kd"])

# ④ uret_petek._ONB_TUZ — AST, motor koşturulmadan
try:
    agac = ast.parse(io.open(os.path.join(ARAC, "uret_petek.py"), encoding="utf-8").read())
    motor_izi_atandi = any(
        isinstance(d, ast.Assign) and any(isinstance(t, ast.Name) and t.id == "_MOTOR_IZI" for t in d.targets)
        and isinstance(d.value, ast.Call) and isinstance(d.value.func, ast.Attribute)
        and d.value.func.attr == "motor_izi" for d in agac.body)
    tuz_dugum = [d for d in agac.body if isinstance(d, ast.Assign)
                 and any(isinstance(t, ast.Name) and t.id == "_ONB_TUZ" for t in d.targets)]
    if not (motor_izi_atandi and len(tuz_dugum) == 1):
        raise ValueError("_MOTOR_IZI = girdi.motor_izi() ya da tek _ONB_TUZ ataması bulunamadı")
    sozluk = [n for n in ast.walk(tuz_dugum[0].value) if isinstance(n, ast.Dict)][0]
    alan = {k.value: v for k, v in zip(sozluk.keys, sozluk.values) if isinstance(k, ast.Constant)}
    if not (isinstance(alan.get("motor"), ast.Name) and alan["motor"].id == "_MOTOR_IZI"):
        raise ValueError("_ONB_TUZ['motor'] artık _MOTOR_IZI değil — tuz modeli değişti, sınavı güncelle")
    ek = set()
    for n in ast.walk(tuz_dugum[0].value):
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute) and n.func.attr == "dosya_ozeti":
            for c in ast.walk(n):
                if isinstance(c, ast.Constant) and isinstance(c.value, str) and c.value.endswith(".py"):
                    ek.add(c.value)
    if m:
        L["④ uret_petek._ONB_TUZ (AST)"] = set(m["once"]["iz"]) | ek
        print("   ④ ayrıştırma: motor=_MOTOR_IZI=girdi.motor_izi() ∪ dosya_ozeti%s" % sorted(ek))
except Exception as e:  # noqa: BLE001
    OLCULEMEDI.append("④ uret_petek.py tuz yapısı ayrıştırılamadı: %s" % e)

# ⑤ CLAUDE.md §9.1
try:
    md = io.open(A.claude_md or os.path.join(KOK, "CLAUDE.md"), encoding="utf-8").read()
    i = md.index("**TUZU**")
    parca = md[i:i + 300].split("Biri değişirse")[0]
    L["⑤ CLAUDE.md §9.1"] = set(re.findall(r"`([a-z_]+\.py)`", parca))
except Exception as e:  # noqa: BLE001
    OLCULEMEDI.append("⑤ CLAUDE.md §9.1 TUZU satırı bulunamadı: %s" % e)

for ad, kume in L.items():
    print("   %-34s %s" % (ad, sorted(kume)))
kumeler = list(L.values())
kontrol("c1 beş liste ölçüldü", len(L) == 5, "%d/5" % len(L))
kontrol("c2 hepsi AYNI küme", len(kumeler) == 5 and all(k == kumeler[0] for k in kumeler),
        "fark: %s" % sorted({a for k in kumeler for a in k} - set.intersection(*kumeler)) if kumeler else "boş")
kontrol("c3 küme = altı motor dosyası (v3)", bool(kumeler) and kumeler[0] == set(DORT), str(sorted(kumeler[0]) if kumeler else []))

# ═══ (f) BAĞIMLILIK KAPANIŞI — yeni bir `gun` sessiz geçmesin ═══════════════════
print("── (f) BAĞIMLILIK KAPANIŞI (AST, motor dosyalarının yerel ithalleri)")
yerel = {f[:-3] for f in os.listdir(ARAC) if f.endswith(".py")}
liste = {a[:-3] for a in L.get("① motor_iz_dosyalari", set())}
ithal = {}
for a in sorted(liste):
    if os.path.exists(os.path.join(ARAC, a + ".py")):
        for mod in yerel_ithal(io.open(os.path.join(ARAC, a + ".py"), "rb").read()) & yerel:
            ithal.setdefault(mod, set()).add(a + ".py")
beyansiz = sorted(m_ for m_ in ithal if m_ not in liste and m_ not in BEYANLI_ISTISNA)
olu = sorted(m_ for m_ in BEYANLI_ISTISNA if m_ not in ithal)
for m_ in sorted(ithal):
    kova = "LİSTEDE" if m_ in liste else ("BEYANLI" if m_ in BEYANLI_ISTISNA else "🔴 BEYANSIZ")
    print("   %-20s %-11s ← %s%s" % (m_, kova, ", ".join(sorted(ithal[m_])),
                                    ("  · " + BEYANLI_ISTISNA[m_]) if kova == "BEYANLI" else ""))
kontrol("f1 BEYANSIZ yerel ithal yok", not beyansiz, str(beyansiz))
kontrol("f2 ÖLÜ istisna yok (her beyan hâlâ ithal ediliyor)", not olu, str(olu))
# f3 — dolgu istisnasının ŞARTI (koordinatör hükmü): data/dolgu.js motor GİRDİSİ değil.
#      Girdi olursa istisna DÜŞER ⇒ dolgu listeye girmeli. Ölçüt: girdi listesinde YOK ve
#      girdi.py kaynağı dolgu.js'i ANMIYOR (uret_petek onu yalnız YAZAR: dolgu.kosudan).
try:
    gl = io.open(os.path.join(ARAC, "girdi_listesi.py"), encoding="utf-8").read()
    gp = io.open(os.path.join(ARAC, "girdi.py"), encoding="utf-8").read()
    gl_kod = "\n".join(s.split("#")[0] for s in gl.splitlines())
    kontrol("f3 dolgu istisnasının şartı: data/dolgu.js motor girdisi DEĞİL",
            "dolgu.js" not in gl_kod and "dolgu.js" not in gp,
            "girdi_listesi: %s · girdi.py: %s" % ("dolgu.js" in gl_kod, "dolgu.js" in gp))
except OSError as e:
    OLCULEMEDI.append("f3 ölçülemedi: %s" % e)

# ═══ (d) YANLIŞ ALARM YOK ═════════════════════════════════════════════════════
print("── (d) YANLIŞ ALARM YOK")
for degistir in ("-", "girdi_listesi.py", "denetle.py"):
    m, kod, err = senaryo(KK, degistir, "d")
    if m:
        kontrol("d %-16s → iz AYNI · kd AYNI · tuz AYNI · dogrula çıkış 0" % degistir,
                m["once"] == m["sonra"] and kod == 0, "çıkış %d" % kod)
# ve dördünden HER BİRİ tek başına izi değiştirir (eksen eksen)
for degistir in DORT:
    m, kod, err = senaryo(KK, degistir, "d4")
    if m:
        kontrol("d %-16s → iz DEĞİŞTİ · dogrula RED" % degistir,
                m["once"]["iz"].get(degistir) != m["sonra"]["iz"].get(degistir)
                and m["once"]["kd"] != m["sonra"]["kd"] and kod != 0, "çıkış %d" % kod)

# ═══ (e) GERİYE UYUM — kaynak_durum eski/bozuk ağaç ═══════════════════════════
print("── (e) GERİYE UYUM")
try:
    sp = importlib.util.spec_from_file_location("kd_sinav_e", os.path.join(ARAC, "kaynak_durum.py"))
    kd = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(kd)
    td = tempfile.mkdtemp(prefix="tuz4_e_")
    try:
        os.makedirs(os.path.join(td, "arac"))
        for a in DORT:
            shutil.copyfile(os.path.join(ARAC, a), os.path.join(td, "arac", a))
        d, k = kd.motor_iz_dosyalari(td)
        iz = kd._motor_izi(td)
        kontrol("e1 liste dosyası YOK (eski ağaç) → eski üçlü + ESKI-UCLU beyanı",
                k == "ESKI-UCLU" and set(iz) == {"uret_petek.py", "renkler.py", "girdi.py"}, "%s · %s" % (k, sorted(iz)))
        io.open(os.path.join(td, "arac", "motor_iz_dosyalari.py"), "w", encoding="utf-8").write(
            "MOTOR_IZ_DOSYALARI = tuple(x for x in 'ab')\n")
        d, k = kd.motor_iz_dosyalari(td)
        kontrol("e2 liste literal DEĞİL → OKUNAMADI (eski üçlüye SESSİZ düşmez)",
                d is None and k.startswith("OKUNAMADI"), k)
        kayit = {"ilan": "SINAV", "ilan_eden": "SINAV", "kod": "SINAMA",
                 "kapi": {"durum": "GECTI", "kok": td, "ozet": []}}
        eski_defter = kd.DEFTER
        kd.DEFTER = os.path.join(td, "DEFTER.jsonl")          # gerçek deftere YAZILMAZ
        tamam, aciklama = kd.kosu_damgasi_yaz(kayit)
        kd.DEFTER = eski_defter
        kontrol("e3 bozuk liste → koşu kapı damgası YAZILMADI (ilan reddi)",
                not tamam and not os.path.exists(os.path.join(td, "oturumlar", "KOSU-KAPI.json")),
                aciklama[:120])
    finally:
        shutil.rmtree(td, ignore_errors=True)
except Exception as e:  # noqa: BLE001
    OLCULEMEDI.append("(e) koşamadı: %s" % e)

# ═══ gerçek dosyalar ══════════════════════════════════════════════════════════
GERCEK_SONRA = {a: sha(os.path.join(ARAC, a)) for a in GERCEK_ONCE}
kontrol("GERÇEK altı dosyaya dokunulmadı", GERCEK_ONCE == GERCEK_SONRA,
        " · ".join("%s %s" % (a, v[:8]) for a, v in sorted(GERCEK_SONRA.items())))

print()
if OLCULEMEDI:
    print("ÖLÇÜLEMEDİ:")
    for s in OLCULEMEDI:
        print("   - " + s)
kalan = [a for a, ok in SONUC if not ok]
if kalan:
    print("✗ SINAV KALDI — %d/%d: %s" % (len(kalan), len(SONUC), ", ".join(kalan)))
    sys.exit(1)
if OLCULEMEDI:
    print("? SINAV ÖLÇÜLEMEDİ (%d kontrol geçti ama %d soru sorulamadı)" % (len(SONUC), len(OLCULEMEDI)))
    sys.exit(2)
print("✓ SINAV GEÇTİ — %d/%d" % (len(SONUC), len(SONUC)))
sys.exit(0)
