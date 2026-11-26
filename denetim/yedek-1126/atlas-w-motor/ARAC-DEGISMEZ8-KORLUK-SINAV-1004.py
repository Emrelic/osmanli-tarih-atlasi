# -*- coding: utf-8 -*-
"""DEĞİŞMEZ 8 KÖRLÜK YAMASI — SINAV (iki yönde; birim + GERÇEK ölçüm + gerçek `denetle.py` koşusu).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠ çalışıyor.

Sınanan: arac/denetle.py'nin `d8_kor_olc` · `d8_kor_kapi` · `degismez8_kor_rapor` işlevleri ve main() kablolaması
(`--d8-kor-defter-yaz`, `--d8-kor-defter`, çıkış kodları). Bu yama bir şeyi DÜZELTMEZ, GÖRÜNÜR KILAR.

BÖLÜM A — BİRİM (yapay R sözlüğü, anında)
  A1  sınıflama: tam kör (hiçbir günü ölçülmemiş) ↔ yarım ↔ (hat,gün) çiftleri
  A2  defter eşit → yeni 0
  A3  defterde OLMAYAN hat körleşir → yeni çift + yeni hat adı
  A4  ÜYE TAKASI (sayı AYNI): defterde X, ölçümde Y → yeni [Y], kapanan 1  ← "78 sabit, üye değişti"
  A5  iyileşme (defterdeki çift artık ölçülüyor) → yeni 0, kapanan 1 (alarm DEĞİL)
  A6  yarım hat daha da körleşir (ledgerdeki hatta YENİ gün) → çift düzeyinde yeni 1
  A7  rapor: yeni körleşme → `olculemedi` kovasına düşer · temiz → düşmez · defter yok → düşer
  A8  `iki_tarafsiz` satırı SAYISI 0 olsa da BASILIR (③) ve 3 olunca 3 basar
  A9  yaz → oku gidiş-dönüş eşit; `_NOT` gövde damgasını taşır
  A10-A15 ÜÇÜNCÜ SESSİZ SINIF: `parcalar` boş ⇒ atlanan hat · `g>=f` süzgecinde düşen gün · hat MUHASEBESİ
            (ölçülen+tam kör+atlanan+muhasebe dışı = toplam), defter eski sürümse olculemedi, üye takası
BÖLÜM B — GERÇEK ÖLÇÜM (degismez8 BİR kez koşar, ~1 dk; sonra defter varyantları aynı R ile)
  B1  gerçek R: 78 tam kör · 19 yarım · 175 (hat,gün); D8_SINIF tam kör 50 (LAB'ın ölçümü; veri değişince değişir,
      sınav SAYILARI iddia etmez: defterle TUTARLILIĞI ölçer) → yeni 0, olculemedi 0
  B2  defterden bir TAM KÖR hattın çiftleri silindi (= o hat "yeni körleşti") → olculemedi, hat adı mesajda
  B3  üye takası: defterde bir çift sahte `zz¦1500-01-01` ile DEĞİŞTİ (sayı aynı) → olculemedi
  B4  defter yok → olculemedi
BÖLÜM C — GERÇEK `py arac/denetle.py` (iki koşu, her biri ~3 dk)
  C1  taze defterle: çıkış 0, `8a 1517 (tavan 1517)` ve `8b 82 (tavan 82)` satırları AYNEN duruyor, `8k` satırı VAR
  C2  defterden bir hat silinmiş kopya (`--d8-kor-defter`): çıkış 2, "Değişmez 8 körlük", "TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2"
  (`--d8-defter-yaz` akışı değişmedi: bayrak hâlâ tanımlı + yorumsuz diff bu sınavın dışı, `git diff` ile okunur)

KULLANIM:  py denetim/ARAC-DEGISMEZ8-KORLUK-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur) — toplam ~8 dk
"""
import contextlib, importlib.util, io, json, os, shutil, subprocess, sys, tempfile

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:                                   # noqa
    pass
DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
DEFTER = os.path.join(DENETIM, "DEGISMEZ-0086-kor-defter.json")
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""), flush=True)
    if not ok:
        HATA += 1


def rapor(R, yol, yaz=False, ayrinti=False):
    """degismez8_kor_rapor'u sessiz koştur → (çıktı, olculemedi kovasına düşenler)."""
    denetle.OLCULEMEDI_KOVA.clear()
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        denetle.degismez8_kor_rapor(R, ayrinti=ayrinti, yaz=yaz, yol=yol)
    kova = list(denetle.OLCULEMEDI_KOVA)
    denetle.OLCULEMEDI_KOVA.clear()
    return buf.getvalue(), kova


def R_yap(olculemeyen, olculen_hatlar, iki=0, sinif=None, atlanan=None, dusen=None, ids=None):
    """Yapay R. `ids` verilmezse hat kimlikleri = ölçülen ∪ ölçülemeyen ∪ atlanan (muhasebe TUTAR)."""
    atlanan = list(atlanan or [])
    if ids is None:
        ids = {h for h, _ in olculemeyen} | set(olculen_hatlar) | {h for h, _ in atlanan}
    return {"olculemeyen": list(olculemeyen), "olculen_hatlar": list(olculen_hatlar), "iki_tarafsiz": iki,
            "kor_sinif": sinif or {}, "damga": "SINAV-DAMGA", "atlanan": atlanan,
            "dusen_gun": list(dusen or []), "hat_idleri": sorted(ids)}


def defter_yaz_dosya(yol, ciftler, atlanan=(), dusen=(), disi=(), eski_surum=False):
    D = {"_NOT": "sınav", "cift": sorted(ciftler), "tam_kor": [], "yarim": []}
    if not eski_surum:
        D.update({"atlanan": sorted(atlanan), "dusen_gun": sorted(dusen), "muhasebe_disi": sorted(disi)})
    json.dump(D, open(yol, "w", encoding="utf-8"), ensure_ascii=False)


print("=" * 72)
print("DEĞİŞMEZ 8 KÖRLÜK SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="d8kor-sinav-")
try:
    S = "¦"
    # ---------------------------------------------------------------- BÖLÜM A
    print("A) birim")
    R = R_yap([("a", "1500-01-01"), ("a", "1600-01-01"), ("b", "1500-01-01")], ["b"])
    cift, tam, yarim = denetle.d8_kor_olc(R)
    sonuc(tam == ["a"] and yarim == ["b"] and len(cift) == 3 and "a" + S + "1500-01-01" in cift,
          "A1) tam kör ['a'] · yarım ['b'] · 3 (hat,gün) çifti", "%s %s %d" % (tam, yarim, len(cift)))
    D = {"cift": sorted(cift)}
    yeni, yh, kap = denetle.d8_kor_kapi(R, D)
    sonuc(yeni == [] and yh == [] and kap == 0, "A2) defter eşit → yeni 0, kapanan 0")
    R2 = R_yap(R["olculemeyen"] + [("c", "1700-01-01")], ["b"])
    yeni, yh, kap = denetle.d8_kor_kapi(R2, D)
    sonuc(yeni == ["c" + S + "1700-01-01"] and yh == ["c"], "A3) defterde olmayan hat 'c' körleşti → yeni çift + yeni hat adı 'c'", "%s %s" % (yeni, yh))
    R3 = R_yap([("a", "1500-01-01"), ("a", "1600-01-01"), ("z", "1500-01-01")], ["b"])       # b→z takas, SAYI 3 = 3
    yeni, yh, kap = denetle.d8_kor_kapi(R3, D)
    sonuc(len(R3["olculemeyen"]) == len(R["olculemeyen"]) and yeni == ["z" + S + "1500-01-01"] and kap == 1,
          "A4) üye takası, SAYI AYNI (3=3): yeni ['z¦1500-01-01'], kapanan 1 → ÖTER", "%s kapanan %d" % (yeni, kap))
    R4 = R_yap([("a", "1500-01-01"), ("a", "1600-01-01")], ["b"])                              # (b,1500) artık ölçülüyor
    yeni, yh, kap = denetle.d8_kor_kapi(R4, D)
    sonuc(yeni == [] and kap == 1, "A5) iyileşme: defterdeki çift artık ölçülüyor → yeni 0, kapanan 1 (alarm yok)")
    R5 = R_yap(R["olculemeyen"] + [("b", "1600-01-01")], ["b"])
    yeni, yh, kap = denetle.d8_kor_kapi(R5, D)
    sonuc(yeni == ["b" + S + "1600-01-01"] and yh == ["b"],
          "A6) yarım hat 'b' daha da körleşti (YENİ gün) → çift düzeyinde yeni 1", "%s" % yeni)
    d_ok = os.path.join(tmp, "d_ok.json")
    defter_yaz_dosya(d_ok, cift)
    cikti, kova = rapor(R, d_ok)
    sonuc(kova == [], "A7a) temiz → olculemedi kovasına DÜŞMEZ", str(kova))
    cikti, kova = rapor(R2, d_ok)
    sonuc(len(kova) == 1 and kova[0][0] == "Değişmez 8 körlük" and "c" in kova[0][1],
          "A7b) yeni körleşme → olculemedi('Değişmez 8 körlük', …'c'…)", str(kova))
    cikti, kova = rapor(R, os.path.join(tmp, "yok.json"))
    sonuc(len(kova) == 1 and "defteri" in kova[0][1], "A7c) defter yok → olculemedi (körlüğün yeni/eski olduğu bilinmiyor)", str(kova))
    cikti, kova = rapor(R_yap(R["olculemeyen"], ["b"], iki=0), d_ok)
    sonuc("iki taraflı olmayan D kaydı" in cikti and cikti.rstrip().split("\n")[-1].strip().endswith(": 0") or ": 0" in cikti,
          "A8a) iki_tarafsiz = 0 iken satır BASILIR (③)")
    cikti, kova = rapor(R_yap(R["olculemeyen"], ["b"], iki=3), d_ok)
    sonuc("SAYILIR): 3" in cikti, "A8b) iki_tarafsiz = 3 → '3' basılır")
    d_yaz = os.path.join(tmp, "d_yaz.json")
    rapor(R, d_yaz, yaz=True)
    Dy = json.load(open(d_yaz, encoding="utf-8"))
    sonuc(sorted(Dy["cift"]) == sorted(cift) and Dy["tam_kor"] == ["a"] and Dy["yarim"] == ["b"] and "SINAV-DAMGA" in Dy["_NOT"],
          "A9) yaz→oku gidiş-dönüş eşit, tam_kor/yarim doğru, _NOT damgayı taşır")

    # ---- A10-A15: ÜÇÜNCÜ SESSİZ SINIF (atlanan hat) + hat muhasebesi
    Rm = R_yap([("a", "1500-01-01")], ["b"])                                            # ids {a,b}
    atl, dusen, disi = denetle.d8_atlanan_olc(Rm)
    sonuc(atl == set() and dusen == set() and disi == set(), "A10) muhasebe tutuyor (ölçülen+tam kör) → atlanan 0 · düşen 0 · muhasebe dışı 0")
    Rx = R_yap([("a", "1500-01-01")], ["b"], atlanan=[("x", "parça yok")])
    atl, dusen, disi = denetle.d8_atlanan_olc(Rx)
    sonuc(atl == {"x"} and disi == set(), "A11) `parcalar` boş yüzünden atlanan hat 'x' → atlanan {'x'}, muhasebe dışı DEĞİL (kovası var)")
    Rw = R_yap([("a", "1500-01-01")], ["b"], ids={"a", "b", "w"})                       # 'w' hiçbir kovada yok
    atl, dusen, disi = denetle.d8_atlanan_olc(Rw)
    sonuc(disi == {"w"}, "A12) hiçbir kovaya düşmeyen hat 'w' → MUHASEBE DIŞI (adı konmamış yeni sessiz yol)", str(disi))
    Rd = R_yap([("a", "1500-01-01")], ["b"], dusen=[("d", "1699-12-31")])
    atl, dusen, disi = denetle.d8_atlanan_olc(Rd)
    sonuc(dusen == {"d" + S + "1699-12-31"}, "A12b) `g >= f` süzgecinde düşen gün kaydedilir", str(dusen))
    tam_ok = {"cift": ["a" + S + "1500-01-01"], "atlanan": [], "dusen_gun": [], "muhasebe_disi": []}
    ya, yd, yw, eski = denetle.d8_atlanan_kapi(Rm, tam_ok)
    sonuc((ya, yd, yw, eski) == ([], [], [], False), "A13a) defter tam, hepsi boş → yeni 0, eski sürüm değil")
    ya, yd, yw, eski = denetle.d8_atlanan_kapi(Rx, tam_ok)
    sonuc(ya == ["x"] and not eski, "A13b) defterde olmayan atlanan 'x' → yeni ['x']", str(ya))
    ya, yd, yw, eski = denetle.d8_atlanan_kapi(Rw, tam_ok)
    sonuc(yw == ["w"], "A13c) defterde olmayan muhasebe-dışı 'w' → yeni ['w']", str(yw))
    ya, yd, yw, eski = denetle.d8_atlanan_kapi(Rm, {"cift": []})
    sonuc(eski is True, "A13d) ESKİ SÜRÜM defter (atlanan anahtarı yok) → eski_defter=True ('boş' SANILMAZ)")
    Rtakas = R_yap([("a", "1500-01-01")], ["b"], atlanan=[("y", "parça yok")])           # defterde atlanan=[x], ölçümde [y]: SAYI 1=1
    ya, yd, yw, eski = denetle.d8_atlanan_kapi(Rtakas, dict(tam_ok, atlanan=["x"]))
    sonuc(len(Rtakas["atlanan"]) == 1 and ya == ["y"], "A13e) atlanan ÜYE TAKASI (SAYI AYNI 1=1, x→y) → yeni ['y'] ÖTER", str(ya))
    d_a = os.path.join(tmp, "d_a.json")
    defter_yaz_dosya(d_a, ["a" + S + "1500-01-01"])
    cikti, kova = rapor(Rm, d_a)
    sonuc(kova == [] and "Değişmez 8m ✓" in cikti and "0 atlanan" in cikti,
          "A14a) temiz → olculemedi yok; `8m` satırı SAYI 0 iken de BASILIR ('0 atlanan')")
    cikti, kova = rapor(Rx, d_a)
    sonuc(len(kova) == 1 and kova[0][0] == "Değişmez 8 atlanan hat" and "x" in kova[0][1] and "Değişmez 8m ✗" in cikti,
          "A14b) yeni atlanan hat → olculemedi('Değişmez 8 atlanan hat', …'x'…), satır ✗", str(kova))
    d_eski = os.path.join(tmp, "d_eski.json")
    defter_yaz_dosya(d_eski, ["a" + S + "1500-01-01"], eski_surum=True)
    cikti, kova = rapor(Rm, d_eski)
    sonuc(len(kova) == 1 and "eski sürüm" in kova[0][1], "A14c) eski sürüm defter → olculemedi (sessiz 'temiz' YOK)", str(kova))
    d_yz = os.path.join(tmp, "d_yz.json")
    rapor(Rx, d_yz, yaz=True)
    Dz = json.load(open(d_yz, encoding="utf-8"))
    sonuc(Dz.get("atlanan") == ["x"] and Dz.get("dusen_gun") == [] and Dz.get("muhasebe_disi") == [],
          "A15) yaz → defter atlanan/dusen_gun/muhasebe_disi anahtarlarını taşır", str({k: Dz.get(k) for k in ("atlanan", "dusen_gun", "muhasebe_disi")}))

    # ---------------------------------------------------------------- BÖLÜM B
    print("B) gerçek ölçüm (degismez8 koşuyor, ~1 dk)")
    with contextlib.redirect_stdout(io.StringIO()):
        Y = denetle.yerlesimleri_yukle()
        GV = denetle._D8Govde()
        RR = denetle.degismez8(Y, gv=GV)
    cift, tam, yarim = denetle.d8_kor_olc(RR)
    sinif = RR.get("kor_sinif") or {}
    tavan_sinifi = [h for h in tam if sinif.get(h) in denetle.D8_SINIF]
    print("       gerçek R: %d tam kör · %d yarım · %d (hat,gün) · D8_SINIF tam kör %d · iki_tarafsiz %d" %
          (len(tam), len(yarim), len(cift), len(tavan_sinifi), RR["iki_tarafsiz"]))
    D_gercek = json.load(open(DEFTER, encoding="utf-8"))
    yeni, yh, kap = denetle.d8_kor_kapi(RR, D_gercek)
    cikti, kova = rapor(RR, DEFTER)
    sonuc(yeni == [] and kova == [] and len(tam) + len(yarim) > 0,
          "B1) gerçek ölçüm, committeki defterle: yeni 0, olculemedi 0, körlük VAR (0 değil: araç dürüst)",
          "yeni %d · kapanan %d · kova %s" % (len(yeni), kap, kova))
    sonuc(len(tam) == len(D_gercek["tam_kor"]) and len(yarim) == len(D_gercek["yarim"]),
          "B1b) tam kör / yarım hat sayıları defterin beyanıyla TUTARLI", "%d/%d · %d/%d" % (len(tam), len(D_gercek["tam_kor"]), len(yarim), len(D_gercek["yarim"])))
    if tam:
        hedef = tam[0]
        d_b2 = os.path.join(tmp, "d_b2.json")
        defter_yaz_dosya(d_b2, [c for c in D_gercek["cift"] if not c.startswith(hedef + S)])
        cikti, kova = rapor(RR, d_b2)
        sonuc(len(kova) == 1 and hedef in kova[0][1] and ("hat" in kova[0][1]),
              "B2) defterden TAM KÖR bir hat ('%s') silindi = 'yeni körleşti' → olculemedi, hat adı mesajda" % hedef, str(kova)[:120])
    c0 = D_gercek["cift"][0]
    d_b3 = os.path.join(tmp, "d_b3.json")
    defter_yaz_dosya(d_b3, [x for x in D_gercek["cift"] if x != c0] + ["zz-hayalet" + S + "1500-01-01"])
    cikti, kova = rapor(RR, d_b3)
    sonuc(len(D_gercek["cift"]) == len(cift) and len(kova) == 1 and c0.split(S)[0] in kova[0][1],
          "B3) üye takası (defter %d = ölçüm %d, SAYI AYNI): '%s' yeniden körleşmiş sayıldı → olculemedi" % (len(D_gercek["cift"]), len(cift), c0.split(S)[0]),
          str(kova)[:120])
    cikti, kova = rapor(RR, os.path.join(tmp, "yok2.json"))
    sonuc(len(kova) == 1, "B4) defter yok → olculemedi", str(kova)[:80])
    atl, dusen, disi = denetle.d8_atlanan_olc(RR)
    ids, olc = set(RR["hat_idleri"]), set(RR["olculen_hatlar"])
    print("       gerçek hat muhasebesi: %d hat = %d ölçülen + %d tam kör + %d atlanan + %d muhasebe dışı · düşen gün %d" %
          (len(ids), len(olc), len(tam), len(atl), len(disi), len(dusen)))
    sonuc(len(ids) == len(olc) + len(tam) + len(atl) + len(disi) and len(ids) > 0,
          "B1c) gerçek hat muhasebesi TUTUYOR: toplam = ölçülen + tam kör + atlanan + muhasebe dışı", "%d" % len(ids))
    sonuc(D_gercek.get("atlanan") == sorted(atl) and D_gercek.get("dusen_gun") == sorted(dusen)
          and D_gercek.get("muhasebe_disi") == sorted(disi),
          "B1d) gerçek ölçüm defterin atlanan/düşen/muhasebe-dışı beyanıyla TUTARLI", "%d/%d/%d" % (len(atl), len(dusen), len(disi)))

    # B5 — SENTETİK HATLAR: üç sessiz yolu kasten aç (aynı gövde, hızlı)
    sent = [
        {"id": "zz-parcasiz", "hat": [[30.0, 40.0]], "taraflar": ["osmanli", "rusya"], "sinif": "D", "f": "1700-01-01", "t": "1800-01-01"},
        {"id": "zz-gunsuz", "hat": [[30.0, 40.0], [31.0, 41.0]], "taraflar": ["osmanli", "rusya"], "sinif": "D"},
        {"id": "zz-dusen", "hat": [[30.0, 40.0], [31.0, 41.0]], "taraflar": ["osmanli", "rusya"], "sinif": "D",
         "f": "1800-01-01", "t": "1700-01-01"},
    ]
    with contextlib.redirect_stdout(io.StringIO()):
        RS = denetle.degismez8(Y, hatlar=sent, gv=GV)
    atl_s, dusen_s, disi_s = denetle.d8_atlanan_olc(RS)
    sonuc("zz-parcasiz" in atl_s, "B5a) gerçek degismez8: tek noktalı hat → `atlanan`a DÜŞER (eskiden sessizce atlanırdı)", str(sorted(atl_s)))
    sonuc("zz-gunsuz" in disi_s, "B5b) gerçek degismez8: hiç günü olmayan hat → MUHASEBE DIŞI (hiçbir kovada değil)", str(sorted(disi_s)))
    sonuc(any(x.startswith("zz-dusen") for x in dusen_s), "B5c) gerçek degismez8: t<f hat → düşen gün KAYDEDİLİR", str(sorted(dusen_s)))
    d_s = os.path.join(tmp, "d_s.json")
    defter_yaz_dosya(d_s, [])
    cikti, kova = rapor(RS, d_s)
    sonuc(any(k[0] == "Değişmez 8 atlanan hat" for k in kova) and "Değişmez 8m ✗" in cikti,
          "B5d) sentetik hatlar deftere GİRMEMİŞ → olculemedi('Değişmez 8 atlanan hat'), `8m` ✗", str([k[0] for k in kova]))

    # ---------------------------------------------------------------- BÖLÜM C
    print("C) gerçek `py arac/denetle.py` (iki koşu, her biri ~3 dk)")
    env = dict(os.environ, PYTHONIOENCODING="utf-8")

    def denetle_kos(*ek):
        p = subprocess.run([sys.executable, os.path.join(KOK, "arac", "denetle.py")] + list(ek),
                           capture_output=True, env=env, timeout=1500, cwd=KOK)
        return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")

    k1, o1 = denetle_kos()
    sonuc(k1 == 0 and "Değişmez 8a ✓" in o1 and "(tavan 1517)" in o1 and "Değişmez 8b ✓" in o1 and "(tavan 82)" in o1 and "Değişmez 8k ✓" in o1 and "Değişmez 8m ✓" in o1,
          "C1) taze defter: çıkış 0 · 8a/8b satırları (tavan 1517 / 82) AYNEN · 8k ve 8m satırları VAR", "çıkış %d" % k1)
    if k1 != 0:
        print(o1[-1500:])
    if tam:
        d_c2 = os.path.join(tmp, "d_c2.json")
        defter_yaz_dosya(d_c2, [c for c in D_gercek["cift"] if not c.startswith(tam[0] + S)])
        k2, o2 = denetle_kos("--d8-kor-defter", d_c2)
        sonuc(k2 == 2 and "Değişmez 8 körlük" in o2 and tam[0] in o2 and "TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2" in o2,
              "C2) defterden bir hat silinmiş kopya → çıkış 2, 'Değişmez 8 körlük', hat adı, 'TEMİZ DEĞİL'", "çıkış %d" % k2)
        if k2 != 2:
            print(o2[-1500:])
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — yama iki yönde çalışıyor" if HATA == 0 else "%d HATA — yama ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
