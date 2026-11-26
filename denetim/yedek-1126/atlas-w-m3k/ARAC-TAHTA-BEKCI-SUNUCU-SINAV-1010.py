# -*- coding: utf-8 -*-
"""TAHTA-BEKCI-1010 sınavı — bekçi tahtayı SUNUCUDAN okuyor mu, sunucu ölünce ÖLMÜYOR mu.

Evren: geçici dizinde KUM HAVUZU — yerel BARE "origin" + bekçinin klonu (uzak YALNIZ
o bare; push gerçek origin'e imkânsız) · 127.0.0.1'de (tercihen 8799) GERÇEK
`arac/tahta_sunucu.py` ALT SÜRECİ (kendi `--ag/--tahta/--gunluk`u) · bekçi GERÇEK
alt süreç (`--ara 1`), stdout satırları ve nabız damgası okunur · jeton `secrets`.

İLERİ YÖN:
  B1 sunucu AYAKTA → banner + damga `kaynak: sunucu`; sunucuya yazılan mesaj bekçinin
     STDOUT'una düşer (uyandırır)
  B2 `--toplu 3` sunucu kolunda: iki mesaj TEK özet satırında
  B3 ISARETLE ÖLÇÜMÜ (bekçiye bağlanmadı): damga `kim` ADINA düşer, makineye değil —
     aynı ad başka makine beyanıyla ikinci kez damgalanmaz, başka ad ayrı damgalanır
TERS YÖN:
  B4 sunucu koşu ORTASINDA öldürülür → bekçi ÖLMEZ, origin'e (bare) yazılan mesajı
     git kolundan görür, damga `kaynak: git` + `sunucu düştü (N tur)` + `sunucu_ard`,
     stderr'de "SUNUCU DÜŞTÜ" ADIYLA
  B5 sunucu YENİDEN açılır → stderr "YENİDEN ÇALIŞIYOR", damga `kaynak: sunucu`, yeni
     sunucu mesajı uyandırır (aynı süreç, hiç yeniden kurulmadan)
  B6 yanlış jeton → damga `kaynak: git`, not "JETON"; bekçi koşmaya devam
GERİLEME:
  R1 ag.json YOK: eski (yama öncesi taban ff4a832d5) ve yeni bekçi aynı evrende → AYNI stdout, AYNI damga
     anahtarları, `kaynak` ikisinde de origin; yeni damgada `sunucu*` alanı YOK

KULLANIM:  py denetim/ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py
ÇIKIŞ (CLAUDE.md §3): 0 temiz · 1 İHLAL · 2 ÖLÇÜLEMEDİ
"""
import io
import json
import os
import secrets
import shutil
import socket
import subprocess
import sys
import tempfile
import threading
import time
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
DOSYALAR = ("tahta.py", "tahta_kaynak.py", "tahta_sunucu.py", "tahta_bekci.py",
            "kaynak_durum.py", "bekci_olc.py")
HATA, OLCULEMEDI, SAY = [], [], [0]
SURECLER = []
# Yama ÖNCESİ taban (TAHTA-BEKCI-1010) — HEAD DEĞİL: yama inince HEAD = yeni olur
ESKI_REF = "ff4a832d5"


def sina(ok, ad, ayr=""):
    SAY[0] += 1
    print(("  OK   " if ok else "  HATA ") + ad + ((" | " + ayr) if ayr else ""))
    if not ok:
        HATA.append(ad)


def bos_port(tercih=None):
    for p in ([tercih] if tercih else []) + [0]:
        s = socket.socket()
        try:
            s.bind(("127.0.0.1", p))
            return s.getsockname()[1]
        except OSError:
            continue
        finally:
            s.close()


def git(*a, cwd=None):
    r = subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if r.returncode != 0:
        raise RuntimeError("git %s: %s" % (" ".join(a), r.stderr.strip()))
    return r.stdout.strip()


def mesaj(no, kimden, kime, metin, aciliyet="NORMAL"):
    return {"no": no, "zaman": "2026-10-10 12:%02d" % (int(no[2:]) % 60), "kimden": kimden,
            "kime": kime, "kimden_kimlik": "", "mesaj": metin, "hal": "ACIK",
            "cevap": "GEREKMEZ", "vade": "", "okuyan": {}, "yanit_no": "", "cins": "BILGI",
            "teyit": {}, "kapanis": "", "dayanak": "", "aciliyet": aciliyet}


def evren(gec, ad, kaynaklar):
    """bare origin + bekçi klonu (+ yazıcı klonu). kaynaklar: {dosya: bayt}."""
    R = os.path.join(gec, ad + "_origin.git")
    A = os.path.join(gec, ad + "_kur")
    git("init", "-q", "--bare", "-b", "main", R)
    os.makedirs(os.path.join(A, "arac"))
    os.makedirs(os.path.join(A, "oturumlar"))
    for d, b in kaynaklar.items():
        io.open(os.path.join(A, "arac", d), "wb").write(b)
    io.open(os.path.join(A, "oturumlar", "tahta.json"), "w", encoding="utf-8").write(json.dumps(
        [mesaj("M-0001", "SINAV A", "SINAV B", "tohum")], ensure_ascii=False))
    io.open(os.path.join(A, ".gitignore"), "w", encoding="utf-8").write(
        "/oturumlar/ag.json\n/oturumlar/bekci/\n/oturumlar/.bekci_son_*\n")
    git("init", "-q", "-b", "main", cwd=A)
    for k, v in (("user.name", "sinav"), ("user.email", "sinav@yerel.invalid")):
        git("config", k, v, cwd=A)
    git("add", ".", cwd=A)
    git("commit", "-q", "-m", "tohum", cwd=A)
    git("remote", "add", "origin", R, cwd=A)
    git("push", "-q", "-u", "origin", "main", cwd=A)
    B = os.path.join(gec, ad + "_bekci")
    git("clone", "-q", R, B)
    for k, v in (("user.name", "sinav"), ("user.email", "sinav@yerel.invalid")):
        git("config", k, v, cwd=A)
    if git("remote", "get-url", "origin", cwd=B).replace("\\", "/") != R.replace("\\", "/"):
        raise RuntimeError("bekçi klonunun uzağı bare değil — durdum")
    return R, A, B


def origin_yaz(A, m):
    y = os.path.join(A, "oturumlar", "tahta.json")
    k = json.load(io.open(y, encoding="utf-8"))
    k.append(m)
    io.open(y, "w", encoding="utf-8").write(json.dumps(k, ensure_ascii=False))
    git("commit", "-q", "-am", "TAHTA %s" % m["no"], cwd=A)
    git("push", "-q", cwd=A)


def sunucu_baslat(S, ag, port):
    p = subprocess.Popen([sys.executable, os.path.join(S, "arac", "tahta_sunucu.py"),
                          "--ag", ag, "--tahta", os.path.join(S, "oturumlar", "tahta.json"),
                          "--gunluk", ag + ".log", "--bag", "127.0.0.1", "--port", str(port),
                          "--nabiz", "2"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    SURECLER.append(p)
    son = time.time() + 20
    while time.time() < son:
        if p.poll() is not None:
            raise RuntimeError("sunucu açılmadı, çıkış %s" % p.returncode)
        try:
            socket.create_connection(("127.0.0.1", port), timeout=0.5).close()
            return p
        except OSError:
            time.sleep(0.2)
    raise RuntimeError("sunucu 20 sn'de port açmadı")


def istek(port, yontem, yol, govde, jeton, makine="SINAV"):
    r = urllib.request.Request("http://127.0.0.1:%d%s" % (port, yol), method=yontem,
                               data=json.dumps(govde).encode("utf-8") if govde is not None else None)
    r.add_header("Content-Type", "application/json")
    r.add_header("X-Atlas-Jeton", jeton)
    r.add_header("X-Atlas-Makine", makine)
    try:
        with urllib.request.urlopen(r, timeout=30) as c:
            return c.status, json.loads(c.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return e.code, {}


class Bekci(object):
    def __init__(self, B, *arg):
        self.B = B
        try:                      # önceki koşunun damgası yeni süreci "hazır" göstermesin
            os.remove(os.path.join(B, "oturumlar", "bekci", "SINAV_B.json"))
        except OSError:
            pass
        self.p = subprocess.Popen([sys.executable, os.path.join(B, "arac", "tahta_bekci.py"),
                                   "--kim", "SINAV B", "--defter-yok", "--ara", "1",
                                   "--fetch-ara", "1"] + list(arg),
                                  stdout=subprocess.PIPE, stderr=subprocess.PIPE, cwd=B,
                                  env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        SURECLER.append(self.p)
        self.out, self.err = [], []
        for akis, hedef in ((self.p.stdout, self.out), (self.p.stderr, self.err)):
            threading.Thread(target=self._oku, args=(akis, hedef), daemon=True).start()

    @staticmethod
    def _oku(akis, hedef):
        for s in iter(akis.readline, b""):
            hedef.append(s.decode("utf-8", "replace").rstrip())

    def bekle(self, kosul, sn=30):
        son = time.time() + sn
        while time.time() < son:
            if kosul():
                return True
            time.sleep(0.2)
        return kosul()

    def damga(self):
        try:
            return json.load(io.open(os.path.join(self.B, "oturumlar", "bekci", "SINAV_B.json"),
                                     encoding="utf-8"))
        except (OSError, ValueError):
            return {}

    def durdur(self):
        if self.p.poll() is None:
            self.p.kill()
        self.p.wait(10)


def kaynaklar(ref=None):
    out = {}
    for d in DOSYALAR:
        if ref:
            out[d] = git("show", "%s:arac/%s" % (ref, d), cwd=KOK).encode("utf-8")
        else:
            out[d] = io.open(os.path.join(ARAC, d), encoding="utf-8").read().encode("utf-8")
    return out


def sunucu_evreni(gec, ad, jeton):
    S = os.path.join(gec, ad + "_sunucu")
    os.makedirs(os.path.join(S, "arac"))
    os.makedirs(os.path.join(S, "oturumlar"))
    for d, b in kaynaklar().items():
        io.open(os.path.join(S, "arac", d), "wb").write(b)
    io.open(os.path.join(S, "oturumlar", "tahta.json"), "w", encoding="utf-8").write(json.dumps(
        [mesaj("M-0001", "SINAV A", "SINAV B", "tohum")], ensure_ascii=False))
    # `T.yaz`ın `_git_yarim` kapısı git dizini ister ⇒ UZAĞI OLMAYAN depo
    git("init", "-q", "-b", "sinav", cwd=S)
    for k, v in (("user.name", "sinav"), ("user.email", "sinav@yerel.invalid")):
        git("config", k, v, cwd=S)
    git("add", ".", cwd=S)
    git("commit", "-q", "-m", "tohum", cwd=S)
    if git("remote", cwd=S):
        raise RuntimeError("sunucu havuzunda UZAK VAR — durdum")
    ag = os.path.join(gec, ad + "_sunucu_ag.json")
    io.open(ag, "w", encoding="utf-8").write(json.dumps({"jeton": jeton}))
    return S, ag


def ag_yaz(B, jeton, port):
    io.open(os.path.join(B, "oturumlar", "ag.json"), "w", encoding="utf-8").write(
        json.dumps({"jeton": jeton, "tahta_sunucu": "127.0.0.1:%d" % port}))


# ─────────────────────────────────────────────────────────────── ileri + ters
def sunucu_kolu(gec):
    jeton = secrets.token_hex(24)
    S, sag = sunucu_evreni(gec, "s", jeton)
    port = bos_port(8799)
    sp = sunucu_baslat(S, sag, port)
    print("SUNUCU — sınav örneği 127.0.0.1:%d pid %d" % (port, sp.pid))
    R, A, B = evren(gec, "s", kaynaklar())
    ag_yaz(B, jeton, port)
    b = Bekci(B, "--tur", "90")
    try:
        ok = b.bekle(lambda: b.damga().get("kaynak") == "sunucu", 30)
        sina(ok and any("kaynak: SUNUCU" in s for s in b.err),
             "B1a banner + damga `kaynak: sunucu`", "damga=%s" % b.damga().get("kaynak"))
        k, c = istek(port, "POST", "/tahta/yaz",
                     {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "sunucudan uyan"}, jeton)
        ok = b.bekle(lambda: any("sunucudan uyan" in s for s in b.out), 20)
        sina(k == 200 and ok, "B1b sunucuya yazılan mesaj STDOUT'a düştü (uyandırdı)",
             "HTTP %s no=%s" % (k, c.get("no")))
        # ── B4: sunucu ölür, mesaj origin'e (bare) gider
        origin_yaz(A, mesaj("M-0050", "SINAV C", "SINAV B", "gitten uyan"))
        sp.kill()
        sp.wait(10)
        ok = b.bekle(lambda: any("gitten uyan" in s for s in b.out), 30)
        d = b.damga()
        sina(ok and b.p.poll() is None, "B4a sunucu öldü → bekçi YAŞIYOR, git kolundan uyandı",
             "poll=%s" % b.p.poll())
        b.bekle(lambda: (b.damga().get("sunucu_ard") or 0) >= 2, 20)
        d = b.damga()
        sina(d.get("kaynak") == "git" and "sunucu düştü" in (d.get("kaynak_not") or "")
             and (d.get("sunucu_ard") or 0) >= 2 and d.get("sunucu_ok") is False,
             "B4b damga `kaynak: git` + `sunucu düştü (N tur)` + sunucu_ard≥2",
             "kaynak=%s ard=%s not=%r" % (d.get("kaynak"), d.get("sunucu_ard"),
                                          (d.get("kaynak_not") or "")[:70]))
        sina(any("SUNUCU DÜŞTÜ" in s for s in b.err)
             and not any("SUNUCU DÜŞTÜ" in s for s in b.out),
             "B4c düşüş stderr'de ADIYLA (stdout'u kirletmedi — kimseyi boşuna uyandırmaz)")
        # ── B5: sunucu döner
        sp = sunucu_baslat(S, sag, port)
        ok = b.bekle(lambda: b.damga().get("kaynak") == "sunucu", 30)
        k, c = istek(port, "POST", "/tahta/yaz",
                     {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "sunucu dondu uyan"}, jeton)
        ok2 = b.bekle(lambda: any("sunucu dondu uyan" in s for s in b.out), 20)
        sina(ok and ok2 and any("YENİDEN ÇALIŞIYOR" in s for s in b.err) and b.p.poll() is None,
             "B5 sunucu döndü → `kaynak: sunucu`, 'YENİDEN ÇALIŞIYOR', yeni mesaj uyandırdı")
        tekrar = [s for s in b.out if "sunucudan uyan" in s]
        sina(len(tekrar) == 1, "B5b dönüşte eski mesaj İKİNCİ kez uyandırmadı", "%d" % len(tekrar))
    finally:
        b.durdur()
    # ── B2: --toplu sunucu kolunda
    b = Bekci(B, "--tur", "40", "--toplu", "3")
    try:
        b.bekle(lambda: b.damga().get("kaynak") == "sunucu" and b.damga().get("tur", 0) >= 1, 30)
        for i in (1, 2):
            istek(port, "POST", "/tahta/yaz",
                  {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "toplu %d" % i}, jeton)
        ok = b.bekle(lambda: any(s.startswith("[BEKCI] 2 yeni:") for s in b.out), 25)
        sina(ok and not any("toplu 1" in s for s in b.out),
             "B2 `--toplu 3` sunucu kolunda: iki mesaj TEK özet satırı", repr(b.out[-1:]))
    finally:
        b.durdur()
    # ── B6: yanlış jeton
    ag_yaz(B, secrets.token_hex(24), port)
    b = Bekci(B, "--tur", "30")
    try:
        ok = b.bekle(lambda: b.damga().get("kaynak") == "git", 30)
        d = b.damga()
        sina(ok and "JETON" in (d.get("kaynak_not") or "") and b.p.poll() is None,
             "B6 yanlış jeton → `kaynak: git`, not 'JETON', bekçi koşuyor",
             "not=%r" % (d.get("kaynak_not") or "")[:60])
    finally:
        b.durdur()
    # ── B3: isaretle ölçümü (bekçiye BAĞLANMADI)
    no = c.get("no") or "M-0002"
    k1, c1 = istek(port, "POST", "/tahta/isaretle", {"kim": "OTURUM X", "nolar": [no]}, jeton, "MAKINE-1")
    k2, c2 = istek(port, "POST", "/tahta/isaretle", {"kim": "OTURUM X", "nolar": [no]}, jeton, "MAKINE-2")
    k3, c3 = istek(port, "POST", "/tahta/isaretle", {"kim": "OTURUM Y", "nolar": [no]}, jeton, "MAKINE-2")
    kay = json.load(io.open(os.path.join(S, "oturumlar", "tahta.json"), encoding="utf-8"))
    okuyan = next((m.get("okuyan") or {} for m in kay if m.get("no") == no), {})
    sina(c1.get("yeni") == 1 and c2.get("yeni") == 0 and c3.get("yeni") == 1
         and set(okuyan) >= {"OTURUM X", "OTURUM Y"} and not any("MAKINE" in x for x in okuyan),
         "B3 isaretle: damga `kim` ADINA (oturum adı), makineye DEĞİL — global tek kayıt",
         "X@M1 yeni=%s · X@M2 yeni=%s · Y@M2 yeni=%s · okuyan=%s"
         % (c1.get("yeni"), c2.get("yeni"), c3.get("yeni"), sorted(okuyan)))
    sp.kill()
    sp.wait(10)
    sina(all(p.poll() is not None for p in SURECLER), "S başlatılan bütün süreçler DURDU (%d)" % len(SURECLER))


# ─────────────────────────────────────────────────────────────── gerileme
def gerileme(gec):
    print("GERİLEME — ag.json YOK: eski (%s) ve yeni bekçi aynı evrende" % ESKI_REF)
    try:
        eski = kaynaklar(ESKI_REF)
    except RuntimeError as e:
        OLCULEMEDI.append("R1")
        print("  ÖLÇÜLEMEDİ R1 | %s" % e)
        return
    sonuc = {}
    for ad, kay in (("eski", eski), ("yeni", kaynaklar())):
        R, A, B = evren(gec, "r" + ad, kay)
        b = Bekci(B, "--tur", "8")
        b.bekle(lambda: b.damga().get("tur", 0) >= 1, 30)
        origin_yaz(A, mesaj("M-0002", "SINAV A", "SINAV B", "gerileme mesajı"))
        origin_yaz(A, mesaj("M-0003", "SINAV A", "HERKES", "bilgi"))
        b.bekle(lambda: b.p.poll() is not None, 60)
        b.durdur()
        sonuc[ad] = (b.p.returncode, list(b.out), b.damga(),
                     [s for s in b.err if s.startswith("[BEKCI]") and "nöbette" not in s])
    e, y = sonuc["eski"], sonuc["yeni"]
    sina(e[0] == y[0] == 0 and e[1] == y[1] and any("gerileme mesajı" in s for s in y[1]),
         "R1a aynı çıkış kodu + BİREBİR stdout", "eski=%s yeni=%s" % (e[1], y[1]))
    sina(set(e[2]) == set(y[2]) and e[2].get("kaynak") == y[2].get("kaynak") == "origin"
         and not any(k.startswith("sunucu") for k in y[2]),
         "R1b damga anahtarları AYNI, kaynak origin, `sunucu*` alanı YOK",
         "fark=%s" % sorted(set(e[2]) ^ set(y[2])))
    sina(e[3] == y[3], "R1c stderr [BEKCI] durum satırları AYNI", "%s / %s" % (e[3][-2:], y[3][-2:]))


def main():
    gec = tempfile.mkdtemp(prefix="tahta_bekci_sunucu_sinav_")
    try:
        gerileme(gec)
        sunucu_kolu(gec)
    finally:
        for p in SURECLER:
            if p.poll() is None:
                p.kill()
        shutil.rmtree(gec, ignore_errors=True)
    print("-" * 72)
    print("SONUÇ: %d/%d · hata %d · ölçülemedi %d" % (SAY[0] - len(HATA), SAY[0], len(HATA),
                                                     len(OLCULEMEDI)))
    return 1 if HATA else (2 if OLCULEMEDI else 0)


if __name__ == "__main__":
    sys.exit(main())
