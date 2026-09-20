# -*- coding: utf-8 -*-
"""motor_onbellek — uret_petek'in KOŞULAR ARASI önbelleği (M-4537, 18-19 Eylül 2026).

Emre'nin kararı: "Bir ampul için bina yıkılmaz." Motor her koşuda dünyayı sıfırdan
kuruyordu (koşu 12: 19s08dk); bir yerleşim eklemek bile 19 saat demekti.

İLKE — İÇERİK ADRESLİ, ELLE KARAR YOK:
  Her kayıt, hesabın OKUDUĞU GİRDİNİN içeriğinden türetilen bir anahtarla (sha256)
  saklanır. Girdi değişirse anahtar değişir ⇒ eski kayıt hiç bulunmaz, yeniden
  hesaplanır. "Bu değişiklik şunu etkiler mi" diye bir KARAR hiçbir yerde
  verilmez; bayat sonuç okunması YAPISAL olarak imkânsızdır — anahtar eksik
  girdi taşımadığı sürece. (Anahtarın kapsamı her katmanın çağrı yerinde,
  hesabın okuduğu küresel veriyle birlikte belgelenir.)
  KÖKLÜ DEĞİŞİKLİK (motor kodu · renkler · girdi.py · KARA · MOTOR_* bayrakları)
  TUZ'a girer ⇒ bütün anahtarlar değişir ⇒ tam yeniden inşa, kendiliğinden.

DEPO: tek sqlite dosyası (WAL). Süreç paralelliğinde (MOTOR_SUREC_ISCI) işçiler
aynı dosyaya yazar; sqlite kilidi eşzamanlılığı çözer. Değer pickle'dır
(float'lar birebir döner ⇒ okunan sonuç hesaplananla BİT BİT aynı).

KAPATMA: MOTOR_ONBELLEK_KAPALI=1 ⇒ oku() hep "yok" der, yaz() hiçbir şey yapmaz.
DİZİN: MOTOR_ONBELLEK_DIZIN (yoksa <kök>/_motor_onbellek/). Koşu worktree'leri
aynı önbelleği paylaşsın diye kos_ve_yayinla bu değişkeni SABİT bir yola verir.
"""
import hashlib
import os
import pickle
import sqlite3
import threading
import time


class Onbellek:
    def __init__(self, yol, tuz, acik=True):
        self.yol = yol
        self.tuz = tuz if isinstance(tuz, bytes) else str(tuz).encode("utf-8")
        self.acik = acik
        self._yerel = threading.local()
        self.sayac = {}           # katman → [isabet, ıska, yazılan, okuma_sn, yazma_sn]
        self._k = threading.Lock()
        if acik:
            os.makedirs(os.path.dirname(os.path.abspath(yol)), exist_ok=True)
            b = self._baglanti()
            b.execute("CREATE TABLE IF NOT EXISTS kayit (katman TEXT, anahtar TEXT, "
                      "deger BLOB, zaman REAL, PRIMARY KEY (katman, anahtar))")
            b.commit()

    # ---- bağlantı: iş parçacığı başına bir tane (sqlite nesneleri paylaşılmaz)
    def _baglanti(self):
        b = getattr(self._yerel, "b", None)
        if b is None:
            b = sqlite3.connect(self.yol, timeout=600, isolation_level=None)
            b.execute("PRAGMA journal_mode=WAL")
            b.execute("PRAGMA synchronous=NORMAL")
            b.execute("PRAGMA busy_timeout=600000")
            self._yerel.b = b
        return b

    def _say(self, katman, i, dt=0.0, j=None):
        with self._k:
            s = self.sayac.setdefault(katman, [0, 0, 0, 0.0, 0.0])
            s[i] += 1
            if j is not None:
                s[j] += dt

    def anahtar(self, katman, *parcalar):
        """Anahtar = sha256(tuz · katman · parçalar). Parça bytes ya da str olmalı —
        başka tür KABUL EDİLMEZ (repr'ın belirsiz olduğu türler sessizce
        yanlış anahtar üretmesin diye)."""
        h = hashlib.sha256()
        h.update(self.tuz)
        h.update(b"\x00" + katman.encode("utf-8") + b"\x00")
        for p in parcalar:
            if isinstance(p, str):
                p = p.encode("utf-8")
            elif not isinstance(p, (bytes, bytearray)):
                raise TypeError(f"anahtar parçası bytes/str olmalı, {type(p).__name__} geldi")
            h.update(len(p).to_bytes(8, "little"))
            h.update(p)
        return h.hexdigest()

    def oku(self, katman, anahtar):
        """(True, değer) ya da (False, None)."""
        if not self.acik:
            return False, None
        t = time.time()
        r = self._baglanti().execute(
            "SELECT deger FROM kayit WHERE katman=? AND anahtar=?", (katman, anahtar)).fetchone()
        if r is None:
            self._say(katman, 1, time.time() - t, 3)
            return False, None
        v = pickle.loads(r[0])
        # kullanım damgası tazelenir — budama (buda) yalnız UZUN SÜRE
        # kullanılmayanı siler; hata olursa isabet yine geçerlidir.
        try:
            self._baglanti().execute(
                "UPDATE kayit SET zaman=? WHERE katman=? AND anahtar=?",
                (time.time(), katman, anahtar))
        except sqlite3.OperationalError:
            pass
        self._say(katman, 0, time.time() - t, 3)
        return True, v

    def yaz(self, katman, anahtar, deger):
        if not self.acik:
            return
        t = time.time()
        blob = pickle.dumps(deger, protocol=4)
        for deneme in range(20):
            try:
                self._baglanti().execute(
                    "INSERT OR REPLACE INTO kayit VALUES (?,?,?,?)",
                    (katman, anahtar, blob, time.time()))
                break
            except sqlite3.OperationalError:
                time.sleep(0.5 * (deneme + 1))
        self._say(katman, 2, time.time() - t, 4)

    def buda(self, yas_gun):
        """`yas_gun` günden uzun süredir ne yazılmış ne okunmuş kayıtları siler.
        Anahtarlar içerik adresli olduğu için eski kayıt YANLIŞ sonuç vermez,
        yalnız yer kaplar; silinen kayıt gerekirse yeniden hesaplanır.
        Döner: silinen kayıt sayısı."""
        if not self.acik:
            return 0
        sinir = time.time() - yas_gun * 86400.0
        c = self._baglanti().execute("DELETE FROM kayit WHERE zaman < ?", (sinir,))
        return c.rowcount if c.rowcount is not None else 0

    def boyut_mb(self):
        try:
            return os.path.getsize(self.yol) / 1024.0 ** 2
        except OSError:
            return 0.0

    def ozet(self):
        """Katman başına 'isabet/ıska/yazılan' satırları (rapor)."""
        out = []
        for k, (i, m, w, ro, wo) in sorted(self.sayac.items()):
            out.append(f"{k}: isabet {i:,} · ıska {m:,} · yazılan {w:,} · "
                       f"okuma {ro:,.0f} sn · yazma {wo:,.0f} sn")
        return out


def dosya_ozeti(yol):
    """Dosyanın sha256'sı (yoksa 'YOK')."""
    if not os.path.exists(yol):
        return "YOK"
    h = hashlib.sha256()
    with open(yol, "rb") as f:
        for par in iter(lambda: f.read(1 << 20), b""):
            h.update(par)
    return h.hexdigest()
