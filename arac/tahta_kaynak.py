# -*- coding: utf-8 -*-
"""tahta_kaynak.py — TAHTAYI NEREDEN OKUYORUZ? Bekçinin ve salt-okur komutların ortak okuyucusu.

🔴 DOĞURAN ÖLÇÜM (TAHTA-ORIGIN-OKU-1006, 6 Ekim 2026 — koordinatör ölçtü, UMIT İRTİBAT
doğruladı): `tahta.py yaz` mesajı ORIGIN'e push ediyor, ama `tahta_bekci.py` YEREL
çalışma ağacındaki `oturumlar/tahta.json`u okuyordu ve o ağacı kimse pull etmiyordu.
EMRELIC'te yazılan 10 görev mesajı (M-5862…M-5874) UMIT'teki 11 hazır kıtanın CANLI
bekçilerine 3 saat boyunca HİÇ ulaşmadı (UMIT `C:\\atlas` HEAD 16994668 = M-5861).
Bekçiler canlıydı, nabız atıyordu, `bekci_olc.py` CANLI diyordu — ve hiçbiri tahtanın
BAYAT olduğunu söyleyemiyordu, çünkü "hangi kaynaktan okuyorum" sorusu hiç sorulmuyordu.

ÇARE (koordinatör kararı): tahta ORIGIN'den okunur, çalışma ağacına DOKUNULMADAN:
    git fetch  (yalnız <uzak>/<dal>, ÖZEL bir ref'e)      ← ağaca dokunmaz
    git show <ref>:oturumlar/tahta.json
`pull`/`merge` YOK: koşu ortasındaki worktree bozulmasın.

🔴 ÜÇ ŞART ve karşılıkları:
 ① fetch başarısızlığı GÖRÜNÜR → `durum["fetch_hata"]` + `bildir` (stderr) — sessiz düşmez
 ② kaynak ADIYLA → `durum["kaynak"]` = "origin" | "yerel" (+ `kaynak_not`); bekçi bunu
    nabız damgasına yazar, `bekci_olc.py` basar
 ③ yerele düşmek yalnız AÇIK NOTLA → "yerel"in her hâlinde `kaynak_not` dolu ve stderr'e düşer

⚖️ NİÇİN `origin/main` DEĞİL ÖZEL REF (`refs/bekci/<AD>`) — tasarım kararı, ölçüme dayalı:
  · `git fetch origin` varsayılan refspec ile BÜTÜN `refs/remotes/origin/*`yi günceller;
    aynı depoda `tahta.py yaz` da `pull --rebase` koşuyor (AYNI ref'leri günceller).
    11 bekçi × dakikada bir = ref KİLİDİ yarışı (`cannot lock ref`) — yazıcının pull'u
    düşer, numara bayatlar. Özel ref, yazıcının ref'lerine HİÇ dokunmaz.
  · `--no-write-fetch-head`: `git pull` FETCH_HEAD'i okur; bekçinin fetch'i onu ezmemeli.
  · `--refmap=` : komut satırı refspec'i varken git `origin/main`i "fırsatçı" da
    güncellerdi — boş refmap bunu kapatır.
  · `--no-auto-maintenance` + `gc.auto=0`: 11 bekçinin her biri gc tetiklemesin.
  · `GIT_TERMINAL_PROMPT=0` + `GCM_INTERACTIVE=never`: kimlik sorusu bekçiyi ASMASIN —
    soru sorulursa fetch DÜŞER ve bu GÖRÜNÜR (asılı kalmak görünmez).
  · Nesne deposu ortak: bir bekçinin indirdiği nesneyi öbürü bir daha indirmez
    (müzakerede bütün ref'ler "have" olarak gider) — ölçüldü, rapor `denetim/UMIT-TAHTA-ORIGIN-OKU-1006.md`.

🔴 BİRLEŞİM — origin TEK BAŞINA yetmez. Aynı makinede yazılıp push'u DÜŞMÜŞ (ULAŞMADI)
ya da makine DALINA giden bir mesaj origin/main'de yoktur ama yerel ağaçta vardır; eski
bekçi onu görüyordu. Yalnız origin okumak bu sınıfı KAYBEDERDİ (bir kusuru kapatıp
başkasını açmak). ⇒ okunan küme = origin ∪ yerel, kimlik (no, kimden, zaman) üzerinden;
yerelde olup origin'de olmayanların SAYISI `durum["yerel_ek"]`e yazılır (gizlenmez).
"""
import io
import json
import os
import re
import subprocess
import time

ZAMAN_ASIMI = 45          # sn — asılı ağ bekçinin nabzını uzun süre kesmesin


def _git(kok, *a, **kw):
    env = dict(os.environ, GIT_TERMINAL_PROMPT="0", GCM_INTERACTIVE="never")
    return subprocess.run(["git", "-C", kok] + list(a), capture_output=True,
                          env=env, timeout=kw.get("timeout", ZAMAN_ASIMI))


def _ilk_satir(b):
    s = (b or b"").decode("utf-8", "replace").strip().splitlines()
    s = [x.strip() for x in s if x.strip()]
    # "fatal:"/"error:" satırı asıl sebeptir; git'in açıklama satırları ("Please make
    # sure you have the correct access rights…") sebebi gizler.
    for x in s:
        if x.lower().startswith(("fatal:", "error:")):
            return x[:200]
    return (s[0] if s else "").strip()[:200]


def ref_adi(kim):
    """Bekçiye ÖZEL ref — `_nabiz_yol`un ad kuralıyla aynı arıtma."""
    return "refs/bekci/" + (re.sub(r"[^A-Za-z0-9]+", "_", kim or "?").strip("_") or "_")


def anahtar(m):
    """Mesaj KİMLİĞİ. `no` tek başına yetmez: push'u düşmüş yerel bir mesaj ile
    origin'deki başka bir mesaj aynı numarayı taşıyabilir (numara len+1)."""
    return (m.get("no"), m.get("kimden"), m.get("zaman"))


def _liste(d):
    return d if isinstance(d, list) else ((d or {}).get("mesajlar") or [])


class Okuyucu(object):
    """Her `oku()` çağrısı: (gerekirse) fetch → origin blob → yerel → birleşim.

    mod      "origin" (varsayılan) | "yerel" (eski davranış, AÇIK beyanla)
    fetch_ara  iki fetch arası en az saniye (0 = her okumada)
    bildir   tek satırlık teşhis yazıcı (bekçide stderr) — durum DEĞİŞİNCE çağrılır
    """

    def __init__(self, tahta, uzak="origin", dal="main", ref=None, fetch_ara=0.0,
                 mod="origin", bildir=None):
        self.tahta = os.path.abspath(tahta)
        self.uzak, self.dal = uzak, dal
        self.ref = ref or "refs/bekci/_genel"
        self.fetch_ara = float(fetch_ara or 0)
        self.mod = mod
        self.bildir = bildir or (lambda s: None)
        self._son_fetch_t = 0.0
        self._ard_hata = 0
        self._son_hata = None
        self._blob = None
        self._origin_liste = None
        self._yerel_imza = None
        self._yerel_liste = []
        self.durum = {"kaynak": "yerel", "kaynak_not": "henüz okunmadı",
                      "uzak": "%s/%s" % (uzak, dal), "ref": self.ref,
                      "fetch_ok": None, "fetch_hata": "", "fetch_ms": None,
                      "fetch_son_basari": None, "yerel_ek": 0,
                      "origin_sayi": None, "yerel_sayi": None}
        self.kok, self.yol_ic = None, None
        if mod == "origin":
            self._depo_bul()

    # ------------------------------------------------------------ depo
    def _depo_bul(self):
        d = os.path.dirname(self.tahta)
        try:
            r = _git(d, "rev-parse", "--show-toplevel", timeout=20)
        except Exception as e:                      # git yok, zaman aşımı…
            self._depo_hata = "git koşmadı: %s" % type(e).__name__
            return
        if r.returncode != 0:
            self._depo_hata = "git deposu değil (%s)" % _ilk_satir(r.stderr)
            return
        kok = r.stdout.decode("utf-8", "replace").strip()
        self.kok = os.path.abspath(kok)
        self.yol_ic = os.path.relpath(self.tahta, self.kok).replace(os.sep, "/")

    # ------------------------------------------------------------ fetch
    def _fetch(self):
        t0 = time.time()
        try:
            r = _git(self.kok, "-c", "gc.auto=0", "fetch", "--quiet",
                     "--no-write-fetch-head", "--no-auto-maintenance", "--refmap=",
                     self.uzak, "+refs/heads/%s:%s" % (self.dal, self.ref))
            ok, hata = r.returncode == 0, ("" if r.returncode == 0 else
                                           "kod=%d: %s" % (r.returncode, _ilk_satir(r.stderr)))
        except subprocess.TimeoutExpired:
            ok, hata = False, "ZAMAN AŞIMI (%d sn)" % ZAMAN_ASIMI
        except Exception as e:
            ok, hata = False, "fetch koşmadı: %s: %s" % (type(e).__name__, e)
        self._son_fetch_t = time.time()
        self.durum["fetch_ms"] = int((time.time() - t0) * 1000)
        self.durum["fetch_ok"] = ok
        self.durum["fetch_hata"] = hata
        if ok:
            self.durum["fetch_son_basari"] = int(time.time())
            if self._ard_hata:
                self.bildir("[BEKCI-KAYNAK] ✓ fetch YENİDEN ÇALIŞIYOR (%d ardışık hatadan sonra) — "
                            "kaynak: origin (%s/%s)" % (self._ard_hata, self.uzak, self.dal))
            self._ard_hata, self._son_hata = 0, None
        else:
            self._ard_hata += 1
            # Her turda değil: ilk hata · hata metni değişince · her 10. ardışık hatada.
            if self._ard_hata == 1 or hata != self._son_hata or self._ard_hata % 10 == 0:
                self.bildir("[BEKCI-KAYNAK] 🔴 FETCH DÜŞTÜ (%d. ardışık) — %s · kaynak YEREL'e "
                            "düştü: tahta BAYAT olabilir, başka makinenin mesajı GÖRÜNMEZ"
                            % (self._ard_hata, hata))
            self._son_hata = hata
        return ok

    # ------------------------------------------------------------ okuma
    def _origin_oku(self):
        """(liste | None, sebep). Blob değişmediyse önbellekten."""
        try:
            r = _git(self.kok, "rev-parse", "--verify", "--quiet",
                     "%s:%s" % (self.ref, self.yol_ic), timeout=30)
        except Exception as e:
            return None, "rev-parse koşmadı: %s" % type(e).__name__
        if r.returncode != 0:
            return None, "%s içinde %s YOK" % (self.ref, self.yol_ic)
        blob = r.stdout.decode().strip()
        if blob == self._blob and self._origin_liste is not None:
            return self._origin_liste, ""
        try:
            s = _git(self.kok, "cat-file", "blob", blob, timeout=60)
            if s.returncode != 0:
                return None, "cat-file: %s" % _ilk_satir(s.stderr)
            liste = _liste(json.loads(s.stdout.decode("utf-8")))
        except Exception as e:
            return None, "origin tahtası ayrıştırılamadı: %s" % type(e).__name__
        self._blob, self._origin_liste = blob, liste
        return liste, ""

    def _yerel_oku(self):
        try:
            st = os.stat(self.tahta)
            imza = (st.st_mtime_ns, st.st_size)
        except OSError:
            return []
        if imza == self._yerel_imza:
            return self._yerel_liste
        try:
            liste = _liste(json.load(io.open(self.tahta, encoding="utf-8")))
        except Exception:
            # yazım ortasında yakalanmış olabilir — bir önceki görüntü korunur
            return self._yerel_liste
        self._yerel_imza, self._yerel_liste = imza, liste
        return liste

    def oku(self, fetch_zorla=False):
        yerel = self._yerel_oku()
        self.durum["yerel_sayi"] = len(yerel)
        if self.mod != "origin":
            self.durum.update(kaynak="yerel", kaynak_not="--kaynak yerel bayrağı (eski davranış)",
                              yerel_ek=0, origin_sayi=None)
            return list(yerel)
        if self.kok is None:
            not_ = getattr(self, "_depo_hata", "depo bulunamadı")
            if self.durum.get("kaynak_not") != not_:
                self.bildir("[BEKCI-KAYNAK] ⚠️ origin OKUNAMIYOR — %s · kaynak YEREL" % not_)
            self.durum.update(kaynak="yerel", kaynak_not=not_, fetch_ok=None,
                              fetch_hata=not_, yerel_ek=0, origin_sayi=None)
            return list(yerel)
        if fetch_zorla or time.time() - self._son_fetch_t >= self.fetch_ara:
            self._fetch()
        origin, sebep = self._origin_oku()
        if origin is None:
            not_ = "origin görüntüsü yok (%s)" % sebep
            if self.durum.get("fetch_hata"):
                not_ += " · fetch: %s" % self.durum["fetch_hata"]
            if self.durum.get("kaynak_not") != not_:
                self.bildir("[BEKCI-KAYNAK] ⚠️ %s · kaynak YEREL" % not_)
            self.durum.update(kaynak="yerel", kaynak_not=not_, yerel_ek=0, origin_sayi=None)
            return list(yerel)
        okey = {anahtar(m) for m in origin}
        ek = [m for m in yerel if anahtar(m) not in okey]
        self.durum["origin_sayi"] = len(origin)
        self.durum["yerel_ek"] = len(ek)
        if self.durum.get("fetch_ok"):
            self.durum.update(kaynak="origin", kaynak_not="")
        else:
            # 🔴 ŞART ③: fetch düştü — elimizdeki origin görüntüsü BAYAT. "origin"
            #   yazmak bugünkü arızanın aynısı olur (bayat tahta taze görünür).
            yas = (int(time.time()) - self.durum["fetch_son_basari"]
                   if self.durum.get("fetch_son_basari") else None)
            self.durum.update(kaynak="yerel", kaynak_not=(
                "fetch düştü (%s) — yerel ağaç + BAYAT origin görüntüsü (son başarılı fetch: %s)"
                % (self.durum.get("fetch_hata") or "?",
                   ("%d sn önce" % yas) if yas is not None else "bu süreçte HİÇ")))
        return list(origin) + ek
