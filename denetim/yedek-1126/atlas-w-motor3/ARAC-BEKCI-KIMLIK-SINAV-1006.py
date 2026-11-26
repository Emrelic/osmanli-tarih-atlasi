# -*- coding: utf-8 -*-
"""Bekçi SÜREÇ KİMLİĞİ (PID + başlangıç zamanı) sınavı — D266 · UMIT-W10-BEKCI-1006.

GERÇEK süreçlerle (alt süreç açılır/öldürülür), damgalar GEÇİCİ dizinde.
🔴 Gerçek `oturumlar/bekci/` YAZILMAZ: iki modül ayrı adla ithal edilir,
   `tahta_bekci.TAHTA` ve `bekci_olc.DIZIN` geçici yola çevrilir, her vakada assert
   edilir, sonda gerçek dizinin parmak izi öncesiyle karşılaştırılır.

  K0 YAZICI   tahta_bekci._nabiz_yaz `baslangic` yazar, bekci_olc AYNI değeri okur
  A1 ASILI    canlı süreç + eski nabız + başlangıç uyuşuyor           → ASILI
  A2 YENİDEN  canlı süreç + eski nabız + başlangıç UYUŞMUYOR          → BITMIS
  A3 YOK      süreç öldürüldü + eski nabız                             → BITMIS
  A4 ÖLÇÜLEMEDİ sorgu arızası (kimlik okunamıyor) + eski nabız          → OLCULEMEDI
  A5 ESKİ DAMGA başlangıç alanı yok: canlı → OLCULEMEDI · ölü → BITMIS (koordinatör hükmü, D266)
  A6 TAZE     nabız taze ⇒ PID ne olursa olsun CANLI
  E1 ESKİ KOD (1381bf76) A2 damgasında ASILI basar — kusurun kanıtı (eski kod ÖTER, yanlış)
  --temizle (1006b, koordinatör hükmü: OLCULEMEDI SİLİNMEZ):
  T1 eski damga + CANLI sahip → OLCULEMEDI ve `temizle()` sonrası dosya YERİNDE
  T2 aynı turda eski damga + ÖLÜ sahip → BITMIS ve SİLİNDİ (temizle gerçekten çalışıyor)
  T3 TERS YÖN: hüküm BITMIS'e çevrilirse (mutasyon) aynı canlı-sahip damgası SİLİNİR
     ⇒ T1'in "yerinde" kontrolünün dişi var; boş küme doğrulaması değil
  D266 İKİNCİ VAKA (1006c) — eski damgada "sahip son nabızdan SONRA başladı ⇒ BITMIS":
  F1 GERÇEK fikstür: pid 22632 · son nabız 18:55:36 · sahip msedge 23:55:33   → BITMIS
  F1b GERÇEK fikstür: pid 20764 · son nabız 18:32:28 (HAZIR KITA 2909 1610) ·
      sahip remoting_native_messaging_host 2026-10-06 00:05:30               → BITMIS
  F2 TERS: sahip 18:50:00 (nabızdan önce)                                     → OLCULEMEDI
  F3 PAY: sahip 18:55:37 (1 sn sonra, damga saniyeye kesik — pay 2 sn)          → OLCULEMEDI
  F4 1006b davranışı (son nabız bakılmadan) aynı fikstürde                       → OLCULEMEDI
  F5 yamasız main (1381bf76, tasklist "var") aynı fikstürde                       → ASILI
  F6 --temizle, 1006b davranışıyla: msedge damgası SİLİNMEZ (OLCULEMEDI)
  F7 --temizle, 1006c ile: msedge damgası SİLİNİR (BITMIS)
  F8 aynı turda ayrı PID'li ters kol (sahip nabızdan ÖNCE) → OLCULEMEDI, SİLİNMEZ
  Üç kol × iki yön: BITMIS F1↔F2/F3 · ASILI A1↔A2 · OLCULEMEDI F2/A5c↔F1
Kullanım: py denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py [--kok C:\\atlas]
"""
import argparse, hashlib, importlib.util, json, os, subprocess, sys, tempfile, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=r"C:\atlas")
KOK = ap.parse_args().kok
ESKI_REV = "1381bf76"


def yukle(ad, yol):
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(m)
    return m


tb = yukle("tahta_bekci_sinav", os.path.join(KOK, "arac", "tahta_bekci.py"))
bo = yukle("bekci_olc_sinav", os.path.join(KOK, "arac", "bekci_olc.py"))
GERCEK_DIZIN = bo.DIZIN


def parmak(d):
    if not os.path.isdir(d):
        return "YOK"
    h = hashlib.sha256()
    for f in sorted(os.listdir(d)):
        h.update(f.encode())
        p = os.path.join(d, f)
        if os.path.isfile(p):
            h.update(open(p, "rb").read())
    return h.hexdigest()


ONCE = parmak(GERCEK_DIZIN)
dusen = 0


def kontrol(ad, kosul, ayrinti):
    global dusen
    print(("✓ " if kosul else "✗ ") + f"{ad}: {ayrinti}")
    dusen += not kosul


def cocuk():
    p = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(120)"])
    time.sleep(0.3)
    durum, bas = bo._surec_kimlik(p.pid)
    assert durum == "VAR", (durum, bas)
    return p, bas


with tempfile.TemporaryDirectory(prefix="bekci_kimlik_sinav_") as td:
    os.makedirs(os.path.join(td, "oturumlar"))
    tb.TAHTA = os.path.join(td, "oturumlar", "tahta.json")
    bo.DIZIN = os.path.join(td, "oturumlar", "bekci")
    assert os.path.abspath(bo.DIZIN) != os.path.abspath(GERCEK_DIZIN), "GERÇEK DİZİNE YAZACAKTI"
    assert os.path.abspath(tb._nabiz_dizin()) == os.path.abspath(bo.DIZIN)

    def damga(ad, **alan):
        os.makedirs(bo.DIZIN, exist_ok=True)
        d = {"ad": ad, "durum": "nobette", "ara": 60, "tur": 1, "damga": int(time.time()) - 3600}
        d.update(alan)
        d = {k: v for k, v in d.items() if v is not ...}
        json.dump(d, open(os.path.join(bo.DIZIN, ad + ".json"), "w", encoding="utf-8"))

    def hal(ad, modul=bo):
        k = {x["ad"]: x for x in modul.oku()}[ad]
        return k["hal"], k.get("surec", "")

    def temizle_dizin():
        for f in os.listdir(bo.DIZIN) if os.path.isdir(bo.DIZIN) else []:
            os.remove(os.path.join(bo.DIZIN, f))

    # K0 — yazıcı ile okuyucu aynı değeri görüyor mu
    tb._nabiz_yaz("K0", "nobette", tur_no=1, ara=60)
    yazilan = json.load(open(os.path.join(bo.DIZIN, "K0.json"), encoding="utf-8"))
    durum, okunan = bo._surec_kimlik(os.getpid())
    kontrol("K0", yazilan.get("baslangic") is not None and yazilan["baslangic"] == okunan,
            f"yazılan baslangic {yazilan.get('baslangic')} · okunan {okunan} ({durum})")
    # A1 — gerçek ASILI: yazıcının KENDİ damgası, nabız eskitildi
    yazilan["damga"] = int(time.time()) - 3600
    json.dump(yazilan, open(os.path.join(bo.DIZIN, "K0.json"), "w", encoding="utf-8"))
    h, n = hal("K0")
    kontrol("A1", h == "ASILI", f"canlı + eski nabız + başlangıç uyuşuyor → {h} ({n})")

    p, bas = cocuk()
    try:
        damga("A2", pid=p.pid, baslangic=bas + 1)
        h, n = hal("A2")
        kontrol("A2", h == "BITMIS" and "YENİDEN" in n, f"canlı + başlangıç uyuşmuyor → {h} ({n})")
        damga("A2b", pid=os.getpid(), baslangic=bas)     # başka sürecin başlangıcı, bizim PID
        h, n = hal("A2b")
        kontrol("A2b", h == "BITMIS", f"PID bizim, başlangıç ÇOCUĞUN → {h}")
        # E1 — eski kod aynı A2 damgasında ne diyor
        eski_src = subprocess.run(["git", "show", f"{ESKI_REV}:arac/bekci_olc.py"], capture_output=True,
                                  cwd=KOK).stdout
        if eski_src:
            ey = os.path.join(td, "bekci_olc_eski.py")
            open(ey, "wb").write(eski_src)
            eski = yukle("bekci_olc_eski_sinav", ey)
            eski.DIZIN = bo.DIZIN
            assert os.path.abspath(eski.DIZIN) != os.path.abspath(GERCEK_DIZIN)
            eh = {x["ad"]: x for x in eski.oku()}["A2"]["hal"]
            kontrol("E1", eh == "ASILI", f"ESKİ kod ({ESKI_REV}) aynı damgada → {eh} (beklenen YANLIŞ ASILI)")
        else:
            kontrol("E1", False, f"{ESKI_REV} okunamadı")
        # 1006c: eski damga + canlı SAHİP gerçekçi kurulur — damga sahibin başlangıcından
        # SONRA yazılır (ara=1 ⇒ KUSKU eşiği 5 sn), eskiyene kadar beklenir. Eskiden
        # damga "şimdi−3600" idi ve sahip ondan SONRA başlamıştı: 1006c kuralıyla o
        # süreç sahip OLAMAZ (BITMIS) — sınav o gün bunu ölçmüyordu.
        damga("A5c", pid=p.pid, baslangic=..., ara=1, damga=int(time.time()))
        time.sleep(6)
        h, n = hal("A5c")
        kontrol("A5-canlı", h == "OLCULEMEDI", f"eski damga (başlangıç yok) + canlı PID → {h} ({n})")
        damga("A6", pid=p.pid, baslangic=bas + 1, damga=int(time.time()))
        h, _ = hal("A6")
        kontrol("A6", h == "CANLI", f"taze nabız + uyuşmayan başlangıç → {h}")
    finally:
        p.kill(); p.wait()

    p2, bas2 = cocuk()
    p2.kill(); p2.wait(); time.sleep(0.3)
    damga("A3", pid=p2.pid, baslangic=bas2)
    h, n = hal("A3")
    kontrol("A3", h == "BITMIS", f"süreç öldürüldü → {h} ({n})")
    damga("A5o", pid=p2.pid, baslangic=...)
    h, n = hal("A5o")
    kontrol("A5-ölü", h == "BITMIS", f"eski damga + ölü PID → {h} ({n})")

    gercek_kimlik = bo._surec_kimlik
    bo._surec_kimlik = lambda pid: (None, "sınav: sorgu arızası")
    try:
        damga("A4", pid=os.getpid(), baslangic=okunan)
        h, n = hal("A4")
        kontrol("A4", h == "OLCULEMEDI", f"kimlik okunamıyor → {h} ({n})")
    finally:
        bo._surec_kimlik = gercek_kimlik
    d4 = bo._surec_kimlik(4)
    print(f"  (bilgi) PID 4 / System gerçek sorgu: {d4} — erişim reddi ⇒ None beklenir")

    # ── D266 İKİNCİ VAKA — GERÇEK fikstür (koordinatör d1539d8a, 5-6 Ekim) ──────
    # Damga {"pid":22632,"zaman":"2026-10-05 18:55:36","ara":60.0}, başlangıç YOK.
    # PID 22632'nin bugünkü sahibi msedge, StartTime 2026-10-05 23:55:33 (yerel).
    # Sahip sorgusu msedge'in başlangıcını döndürecek şekilde sabitlenir (o süreç
    # bu makinede yok); zamanlar yerel saatten epoch'a AYNI yoldan çevrilir.
    def _ft(yerel):
        return int(round((time.mktime(time.strptime(yerel, "%Y-%m-%d %H:%M:%S")) + 11644473600) * 10**7))
    F_ZAMAN, F_EDGE = "2026-10-05 18:55:36", "2026-10-05 23:55:33"
    f_damga = int(time.mktime(time.strptime(F_ZAMAN, "%Y-%m-%d %H:%M:%S")))
    # ÜÇÜNCÜ FİKSTÜR (koordinatör, 6 Ekim): oturum HAZIR KITA 2909 1610 — ilk D266 vakasının
    # damgası {"pid":20764,"zaman":"2026-10-05 18:32:28"}. O gece PID 20764 bir ara YOKtu, sonra
    # remoting_native_messaging_host (Remote Control köprüsü) 2026-10-06 00:05:30'da aldı.
    R_ZAMAN, R_SAHIP = "2026-10-05 18:32:28", "2026-10-06 00:05:30"
    r_damga = int(time.mktime(time.strptime(R_ZAMAN, "%Y-%m-%d %H:%M:%S")))
    gercek_kimlik = bo._surec_kimlik
    try:
        for ad, pid_, zmn, dmg, sahip_bas, bek in (
                ("F1-msedge", 22632, F_ZAMAN, f_damga, F_EDGE, "BITMIS"),                   # GERÇEK kol
                ("F1b-remoting", 20764, R_ZAMAN, r_damga, R_SAHIP, "BITMIS"),              # GERÇEK kol
                ("F2-ters", 22632, F_ZAMAN, f_damga, "2026-10-05 18:50:00", "OLCULEMEDI"),  # sahip nabızdan ÖNCE
                ("F3-pay", 22632, F_ZAMAN, f_damga, "2026-10-05 18:55:37", "OLCULEMEDI")):  # 1 sn sonra: pay içinde
            bo._surec_kimlik = lambda pid, _b=_ft(sahip_bas): ("VAR", _b)
            damga(ad, pid=pid_, baslangic=..., ara=60.0, zaman=zmn, damga=dmg)
            h, n = hal(ad)
            kontrol(ad, h == bek, f"pid {pid_} · eski damga {zmn[11:]} · sahip başlangıcı {sahip_bas} → {h} "
                                  f"(beklenen {bek}) · {n}")
        # ESKİ KODLAR aynı GERÇEK fikstüre ne diyordu — çelişkinin ölçümü:
        bo._surec_kimlik = lambda pid: ("VAR", _ft(F_EDGE))
        k1006b = bo._surec_var(22632, None)              # son_nabiz verilmeden = 1006b davranışı
        kontrol("F4-1006b", k1006b[0] is None,
                f"1006b (son nabız bakılmadan) → {'OLCULEMEDI' if k1006b[0] is None else k1006b[0]} — "
                f"'yama inince BITMIS'e düşer' beklentisi 1006b'de TUTMUYORDU")
        if eski_src:
            eski2 = yukle("bekci_olc_eski_f", ey)
            eski2.DIZIN = bo.DIZIN
            eski2._surec_var = lambda pid: True          # ölçülen hâl: tasklist "var"
            ek = {x["ad"]: x["hal"] for x in eski2.oku()}
            kontrol("F5-main", ek["F1-msedge"] == "ASILI" and ek["F1b-remoting"] == "ASILI",
                    f"yamasız main ({ESKI_REV}) GERÇEK fikstürlerde → msedge {ek['F1-msedge']} · "
                    f"remoting {ek['F1b-remoting']} (koordinatörün ölçtüğü 'ASILI')")
        # --temizle × GERÇEK fikstür: 1006b'de silinemiyordu (OLCULEMEDI), 1006c'de silinir (BITMIS)
        import contextlib as _cl, io as _io2
        f_yol = os.path.join(bo.DIZIN, "F1-msedge.json")
        # F2/F3 de PID 22632'yi taşıyor ve o PID'in sahibi şu an msedge ⇒ onlar da BITMIS'tir
        # (doğru). Ters kol için AYRI PID: 22633'ün sahibi son nabızdan ÖNCE başlamış.
        sahipler = {22632: _ft(F_EDGE), 20764: _ft(R_SAHIP), 22633: _ft("2026-10-05 18:50:00")}
        bo._surec_kimlik = lambda pid: ("VAR", sahipler[pid])
        temizle_dizin()                                   # yalnız iki fikstür damgası kalsın
        damga("F1-msedge", pid=22632, baslangic=..., ara=60.0, zaman=F_ZAMAN, damga=f_damga)
        damga("F1b-remoting", pid=20764, baslangic=..., ara=60.0, zaman=R_ZAMAN, damga=r_damga)
        damga("F8-ters", pid=22633, baslangic=..., ara=60.0, zaman=F_ZAMAN, damga=f_damga)
        r_yol = os.path.join(bo.DIZIN, "F1b-remoting.json")
        gercek_var = bo._surec_var
        bo._surec_var = lambda pid, b=None, n=None: gercek_var(pid, b)     # 1006b: son nabız YOK sayılır
        try:
            with _cl.redirect_stdout(_io2.StringIO()):
                bo.temizle()
        finally:
            bo._surec_var = gercek_var
        kontrol("F6-1006b-temizle", os.path.exists(f_yol) and os.path.exists(r_yol),
                f"1006b davranışıyla temizle → msedge + remoting damgaları "
                f"{'YERİNDE (silinemiyordu)' if os.path.exists(f_yol) and os.path.exists(r_yol) else 'SİLİNDİ'}")
        with _cl.redirect_stdout(_io2.StringIO()):
            bo.temizle()
        kontrol("F7-1006c-temizle", not os.path.exists(f_yol) and not os.path.exists(r_yol),
                f"1006c ile temizle → msedge + remoting damgaları "
                f"{'SİLİNDİ (BITMIS)' if not os.path.exists(f_yol) and not os.path.exists(r_yol) else 'YERİNDE'}")
        kontrol("F8-ters-korundu", os.path.exists(os.path.join(bo.DIZIN, "F8-ters.json")),
                "aynı temizle turunda F8 (PID 22633, sahip nabızdan ÖNCE ⇒ OLCULEMEDI) damgası YERİNDE")
    finally:
        bo._surec_kimlik = gercek_kimlik

    # ── --temizle × eski damga (1006b) ─────────────────────────────────────
    import contextlib, io as _io
    temizle_dizin()
    p3, _ = cocuk()
    try:
        yol = lambda ad: os.path.join(bo.DIZIN, ad + ".json")
        damga("T1", pid=p3.pid, baslangic=..., ara=1, damga=int(time.time()))  # eski + canlı sahip (A5c gibi)
        damga("T2", pid=p2.pid, baslangic=...)             # eski + ölü sahip (p2 yukarıda öldü)
        time.sleep(6)
        h1, n1 = hal("T1")
        h2, _ = hal("T2")
        assert os.path.abspath(bo.DIZIN) != os.path.abspath(GERCEK_DIZIN)
        with contextlib.redirect_stdout(_io.StringIO()) as tamp:
            bo.temizle()
        kontrol("T1", h1 == "OLCULEMEDI" and os.path.exists(yol("T1")),
                f"eski + canlı sahip → {h1} · temizle sonrası dosya "
                f"{'YERİNDE' if os.path.exists(yol('T1')) else 'SİLİNDİ'} ({n1})")
        kontrol("T2", h2 == "BITMIS" and not os.path.exists(yol("T2")),
                f"eski + ölü sahip → {h2} · temizle sonrası "
                f"{'SİLİNDİ' if not os.path.exists(yol('T2')) else 'YERİNDE'}")
        gercek_var = bo._surec_var
        bo._surec_var = lambda pid, b=None, n=None: (False, "MUTASYON: eski damga BITMIS sayıldı")
        try:
            with contextlib.redirect_stdout(_io.StringIO()):
                bo.temizle()
        finally:
            bo._surec_var = gercek_var
        kontrol("T3", not os.path.exists(yol("T1")),
                "TERS YÖN — hüküm BITMIS olsaydı aynı canlı-sahip damgası "
                f"{'SİLİNİRDİ ✓ (T1 kontrolü dişli)' if not os.path.exists(yol('T1')) else 'YİNE YERİNDE ✗'}")
    finally:
        p3.kill(); p3.wait()

SONRA = parmak(GERCEK_DIZIN)
kontrol("GERÇEK", ONCE == SONRA, f"{GERCEK_DIZIN} dokunulmadı: önce {ONCE[:12]} · sonra {SONRA[:12]}")
print(f"\n{'✓ SINAV GEÇTİ' if not dusen else f'✗ SINAV DÜŞTÜ ({dusen})'}")
sys.exit(1 if dusen else 0)
