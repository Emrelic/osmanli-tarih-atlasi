# -*- coding: utf-8 -*-
"""MAKİNE DEFTERİ + ÇIKIŞ KODU SÖZLÜĞÜ SINAVI — TAHTA-WEB-1004 · iki yönde.

Koordinatörün sorusu: yanlış sunucuya bağlı makine HATASIZ çalışır ve kimse
onu görmez; bölünme GÖRÜNÜR olmalı (olumsuz değil OLUMLU kanıt).

🔴 ÖNGÖRÜ — SINAV KOŞMADAN ÖNCE YAZILDI (4 Ekim 2026, CLAUDE.md §11).
   Evren: geçici dizin · sunucunun ag.json'unda makineler {ZZ-UMIT:127.0.0.1,
   ZZ-HAVVA:10.99.99.99} · GERÇEK sunucu + GERÇEK tahta.py (TAHTA_MAKINE ile
   beyan edilen ad).
   M1  ZZ-UMIT yazar, ZZ-KASA yalnız okur → /tahta/makineler: ZZ-UMIT son_yazma
       DOLU · ZZ-KASA son_okuma DOLU, son_yazma BOŞ · ikisi de GÖRÜLDÜ
   M2  ag.json'daki ZZ-HAVVA hiç gelmedi → "GÖRÜLMEDİ — kapalı ya da BAŞKA
       SUNUCUDA" · TERS YÖN: ZZ-UMIT GÖRÜLMEDİ DEĞİL (IP + ad eşleşti)
   M3  sunucu sertçe öldürülüp yeniden başlarsa defter KAYBOLMAZ
   M4  GET /tahta HTML'i makine tablosunu taşır (ZZ-UMIT, ZZ-HAVVA, GÖRÜLMEDİ)
   M5  jetonsuz /tahta/makineler → 401 (defter sızmaz)
   M6  Türkçe ve denetim karakterli beyan: başlık kırılmaz, ad temizlenir
       (yazdırılamaz karakter yok, ≤64), Türkçe harf korunur
   M7  tarayıcıdan /tahta ve /tahta/makineler'e BAKMAK deftere makine eklemez
   M8  ÇIKIŞ KODU SÖZLÜĞÜ yazılı (0·1·2·3·4) ve gerçek davranış ona uyuyor:
       ayar yok → 2 · ikinci sunucu → 4 · SUNUCU ÇATIŞMASI'nda tahta.py çıkışı
       4 (3 DEĞİL — 3, tahta.py'de "yerel dosya yazılamadı" demek)

KULLANIM:  py denetim/ARAC-TAHTA-MAKINELER-SINAV-1004.py
"""
import io
import json
import os
import re
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def bos_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    p = s.getsockname()[1]
    s.close()
    return p


GEC = tempfile.mkdtemp(prefix="tahta_makine_sinav_")
JETON = "makine-sinav-jetonu-0123456789"
AG = os.path.join(GEC, "ag.json")
io.open(AG, "w", encoding="utf-8").write(json.dumps(
    {"jeton": JETON, "makineler": {"ZZ-UMIT": "127.0.0.1", "ZZ-HAVVA": "10.99.99.99"}}))
TAHTA = os.path.join(GEC, "s", "tahta.json")
os.makedirs(os.path.dirname(TAHTA))
io.open(TAHTA, "w", encoding="utf-8").write("[]")
PORT = bos_port()
SUREC = []


def baslat(port=PORT, ag=AG, bekle=True):
    p = subprocess.Popen([sys.executable, os.path.join(ARAC, "tahta_sunucu.py"), "--ag", ag,
                          "--tahta", TAHTA, "--port", str(port), "--bag", "127.0.0.1",
                          "--gunluk", os.path.join(GEC, "s.log")],
                         stdout=subprocess.DEVNULL, stderr=subprocess.PIPE,
                         text=True, encoding="utf-8", errors="replace")
    SUREC.append(p)
    if bekle:
        for _ in range(100):
            if p.poll() is not None:
                break
            try:
                socket.create_connection(("127.0.0.1", port), timeout=0.2).close()
                break
            except OSError:
                time.sleep(0.1)
    return p


def cli(argv, makine):
    e = dict(os.environ, TAHTA_AG=AG, TAHTA_SUNUCU="127.0.0.1:%d" % PORT,
             TAHTA_VERI=os.path.join(GEC, "ist-" + re.sub(r"\W", "_", makine), "tahta.json"),
             TAHTA_MAKINE=makine, PYTHONIOENCODING="utf-8")
    r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta.py")] + argv,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=e, timeout=60)
    return r.returncode, r.stdout + r.stderr


def http(yol, jeton=JETON):
    bas = {"X-Atlas-Jeton": jeton} if jeton else {}
    rq = urllib.request.Request("http://127.0.0.1:%d%s" % (PORT, yol), headers=bas)
    try:
        with urllib.request.urlopen(rq, timeout=10) as r:
            ham = r.read().decode("utf-8")
            return r.status, (json.loads(ham) if ham.startswith("{") else ham)
    except urllib.error.HTTPError as e:
        ham = e.read().decode("utf-8")
        return e.code, (json.loads(ham) if ham.startswith("{") else ham)


def defter():
    k, g = http("/tahta/makineler")
    return {d["beyan"]: d for d in g.get("makineler", [])} if k == 200 else {}


print("=" * 72)
print("MAKINE DEFTERI + CIKIS KODU SINAVI — gecici dizin %s" % GEC)
print("=" * 72)
try:
    s = baslat()
    cli(["yaz", "--kim", "ZZ-OT", "--kime", "ZZ-B", "--mesaj", "umit yazdi"], "ZZ-UMIT")
    cli(["oku", "--kim", "ZZ-B", "--kisa"], "ZZ-KASA")
    d = defter()
    u, ka = d.get("ZZ-UMIT", {}), d.get("ZZ-KASA", {})
    sonuc(u.get("son_yazma") and u.get("durum") == "GÖRÜLDÜ" and u.get("son_kim") == "ZZ-OT",
          "M1) ZZ-UMIT: son_yazma DOLU, GORULDU, son oturum ZZ-OT", str({k: u.get(k) for k in ("son_yazma", "durum", "son_kim")}))
    sonuc(ka.get("son_okuma") and not ka.get("son_yazma") and ka.get("durum") == "GÖRÜLDÜ",
          "M1') ZZ-KASA: yalniz son_okuma DOLU, son_yazma BOS")
    h = d.get("ZZ-HAVVA", {})
    sonuc(h.get("durum", "").startswith("GÖRÜLMEDİ") and "BAŞKA SUNUCUDA" in h.get("durum", ""),
          "M2) ag.json'daki ZZ-HAVVA hic gelmedi -> 'GORULMEDI — kapali ya da BASKA SUNUCUDA'",
          h.get("durum", "YOK"))
    sonuc(not any(x.get("durum", "").startswith("GÖRÜLMEDİ") and x["beyan"] == "ZZ-UMIT" for x in d.values())
          and u.get("ag_json_eslesme") == ["ZZ-UMIT"],
          "M2') TERS YON: ZZ-UMIT GORULMEDI degil, ag.json eslesmesi ZZ-UMIT",
          str(u.get("ag_json_eslesme")))

    s.kill()
    s.wait(timeout=10)
    s = baslat()
    d2 = defter()
    sonuc("ZZ-UMIT" in d2 and "ZZ-KASA" in d2 and d2["ZZ-UMIT"].get("son_yazma") == u.get("son_yazma"),
          "M3) sert olum + yeniden baslama -> defter KAYBOLMADI")

    k, sayfa = http("/tahta")
    sonuc(k == 200 and isinstance(sayfa, str) and "ZZ-UMIT" in sayfa and "ZZ-HAVVA" in sayfa
          and "GÖRÜLMEDİ" in sayfa and "BEYANIDIR" in sayfa,
          "M4) HTML makine tablosunu tasiyor (beyan uyarisi dahil)")

    k, _ = http("/tahta/makineler", jeton=None)
    sonuc(k == 401, "M5) jetonsuz /tahta/makineler -> 401", "donen %s" % k)

    kotu = "ZZ-ÜMİT\x07\n" + "x" * 100
    kod, c = cli(["oku", "--kim", "ZZ-B", "--kisa"], kotu)
    d3 = defter()
    tr = [a for a in d3 if a.startswith("ZZ-ÜMİT")]
    sonuc(kod == 0 and len(tr) == 1 and len(tr[0]) <= 64
          and all(ch.isprintable() for ch in tr[0]),
          "M6) Turkce + denetim karakterli beyan: baslik kirilmadi, ad temiz (<=64), Turkce korundu",
          "kod %d · %r" % (kod, tr[:1]))

    once = set(defter())
    for _ in range(3):
        http("/tahta")
        http("/tahta/makineler")
    sonuc(set(defter()) == once, "M7) /tahta ve /tahta/makineler'e BAKMAK deftere makine eklemedi")

    # M8 — çıkış kodu sözlüğü
    kaynak = io.open(os.path.join(ARAC, "tahta_sunucu.py"), encoding="utf-8").read()
    tablo = kaynak[kaynak.index("ÇIKIŞ KODU SÖZLÜĞÜ"):kaynak.index("CEVAP GÖVDESİNDEKİ")]
    sonuc(all(re.search(r"^\s+%d\s" % n, tablo, re.M) for n in range(5))
          and "KULLANILMAZ" in tablo,
          "M8) sozluk yazili: 0/1/2/3/4, 3 KULLANILMAZ diye isaretli")
    p2 = baslat(port=bos_port(), ag=os.path.join(GEC, "yok.json"), bekle=False)
    p2.wait(timeout=20)
    p3 = baslat(port=bos_port(), bekle=False)
    p3.wait(timeout=20)
    sonuc(p2.returncode == 2 and p3.returncode == 4,
          "M8') gercek davranis sozluge uyuyor: ayar yok -> 2 · ikinci sunucu -> 4",
          "%s / %s" % (p2.returncode, p3.returncode))
    io.open(TAHTA + ".sunucu", "w", encoding="utf-8").write(json.dumps(
        {"makine": "ZZ-BASKA", "pid": 1, "port": 1, "baslangic": "sinav",
         "damga": time.time() + 3600, "nabiz": 20}))
    kod = None
    for _ in range(50):                       # nabız döngüsü 20 sn'de bir bakar
        kod, c = cli(["yaz", "--kim", "ZZ-OT", "--kime", "ZZ-B", "--mesaj", "catisma"], "ZZ-UMIT")
        if "SUNUCU ÇATIŞMASI" in c:
            break
        time.sleep(1)
    sonuc(kod == 4 and "SUNUCU ÇATIŞMASI" in c and "SUNUCUYA ULAŞILAMADI" not in c,
          "M8'') SUNUCU CATISMASI'nda tahta.py cikisi 4 (3 DEGIL), yerele DUSMEDI", "kod %s" % kod)
finally:
    for p in SUREC:
        if p.poll() is None:
            p.kill()
            try:
                p.wait(timeout=10)
            except Exception:
                pass
    shutil.rmtree(GEC, ignore_errors=True)

print("-" * 72)
print("SONUC: %s" % ("temiz — butun ongoruler tuttu" if HATA == 0 else "%d HATA" % HATA))
sys.exit(1 if HATA else 0)
