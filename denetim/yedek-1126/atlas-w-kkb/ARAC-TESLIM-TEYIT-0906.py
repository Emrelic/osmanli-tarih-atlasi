# -*- coding: utf-8 -*-
"""TESLİM TEYİDİ — "gönderdim" ile "indi" ayrı şeylerdir.

Bu alet ÜÇ soruyu sorar ve üçü de `CLAUDE.md`de KAYITLI kusur sınıfıdır:

  --commit <kaynak>   Son commit mesajı, `-F` ile verilen dosyayla
                      BİREBİR mi? §11: `kavalali` ve `toga-timur`
                      backtick yüzünden SİLİNDİ, git "başarılı" bastı,
                      İKİSİ DE PUSH'LANDI ve ancak `git log` okunarak
                      bulundu. Bir kelime eksilmesi çıktıda GÖRÜNMEZ.

  --tahta <ad> <kaynak>  O adın SON tahta mesajı gönderilen metinle
                      eşleşiyor mu? §7.1⑤b: tahta kayıp güncelleme
                      yarışı yaşıyor ve bir rapor tam "M-xxxx yazıldı"
                      cevabını aldığı hâlde KAYBOLDU. Kayıp İZ
                      BIRAKMAZ — sayaç bir sonraki yazarın max+1'iyle
                      dolar, ne mükerrer numara ne boşluk kalır.

  --gelen <ad>        O ada, KENDİ son mesajından sonra gelen mesaj
                      var mı? §7: nöbetçi altyapıyla birlikte ölür ve
                      sessizliği "iyi gidiyor" diye okunur — bir kez
                      fark edilmesi SEKİZ SAAT sürdü. Bekçi ölüyse
                      bu tarama ELLE yapılır.

⇒ Üçünün ortak kökü: BAŞARI CEVABI TESLİM KANITI DEĞİLDİR.

TASARIM KARARLARI
  · Alan adları VARSAYILMAZ, DÖKÜLÜR (§11: bir ölçüm `kim` diye sordu,
    alanın adı `kimden`di, "0 mesaj" dedi — gerçek 37).
  · Tahta yolu VARSAYILMAZ, ARANIR.
  · Metin BASH'TEN GEÇMEZ — dosyadan okunur (§11).
  · CRLF/LF normalleştirilir; tahta metni tek satıra indirdiği için
    orada boşluk-normalleştirmeli karşılaştırma yapılır ve fark
    AÇIKÇA raporlanır, sessizce yutulmaz.

KULLANIM
  py denetim/ARAC-TESLIM-TEYIT-0906.py --commit <mesaj-dosyasi>
  py denetim/ARAC-TESLIM-TEYIT-0906.py --tahta "<AD>" <mesaj-dosyasi>
  py denetim/ARAC-TESLIM-TEYIT-0906.py --gelen "<AD>"
  py denetim/ARAC-TESLIM-TEYIT-0906.py --kendini-sina

ÇIKIŞ KODU  0 temiz · 1 kullanım hatası · 2 TESLİM DOĞRULANMADI
"""
import glob
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _oku(yol):
    return io.open(yol, encoding="utf-8", errors="replace").read()


def _nrm(s):
    return s.replace("\r\n", "\n").strip()


def _tek_satir(s):
    """Tahta metni tek satıra indirir; aynı normalleştirmeyi uygular."""
    return re.sub(r"\s+", " ", s.replace("\r\n", "\n")).strip()


def tahta_bul():
    """Tahta dosyasını ARAR — yolu varsaymaz."""
    for kalip in ("oturumlar/tahta.json", "denetim/tahta.json",
                  "tahta.json", "**/tahta*.json"):
        for y in glob.glob(os.path.join(KOK, kalip), recursive=True):
            if ".git" in y:
                continue
            try:
                j = json.loads(_oku(y))
            except Exception:
                continue
            k = j if isinstance(j, list) else \
                (j.get("mesajlar") or j.get("kayitlar"))
            if isinstance(k, list) and k:
                return y, k
    return None, None


def alan_bul(ornek, *adaylar):
    """Alan adını DÖKEREK bulur, varsaymaz."""
    for a in adaylar:
        if a in ornek:
            return a
    for a in adaylar:
        for gercek in ornek:
            if a.lower() in gercek.lower():
                return gercek
    return None


def _no(k, alan):
    m = re.search(r"(\d+)", str(k.get(alan, "")))
    return int(m.group(1)) if m else -1


def commit_teyit(kaynak_yol):
    print("=" * 62)
    print("COMMIT TEYİDİ — mesaj bozulmadan indi mi")
    print("=" * 62)
    yazilan = _nrm(_oku(kaynak_yol))
    inen = _nrm(subprocess.run(
        ["git", "log", "-1", "--format=%B"], cwd=KOK,
        capture_output=True, text=True, encoding="utf-8").stdout)
    tik = chr(96)
    for ad, s in (("yazılan", yazilan), ("inen   ", inen)):
        print("%s: %d bayt · %d satır · %d backtick"
              % (ad, len(s), s.count("\n") + 1, s.count(tik)))
    if yazilan == inen:
        print("\n🟢 BİREBİR AYNI — hiçbir kelime silinmedi")
        return 0
    print("\n🔴 AYRIŞIYOR — satır satır:")
    a, b = yazilan.split("\n"), inen.split("\n")
    for i in range(max(len(a), len(b))):
        x = a[i] if i < len(a) else "<YOK>"
        y = b[i] if i < len(b) else "<YOK>"
        if x != y:
            print("  %3d yazılan: %s" % (i + 1, x))
            print("      inen   : %s" % y)
    return 2


def tahta_teyit(ad, kaynak_yol):
    print("=" * 62)
    print("TAHTA TESLİM TEYİDİ — %s" % ad)
    print("=" * 62)
    yol, kayit = tahta_bul()
    if not kayit:
        print("🔴 TAHTA BULUNAMADI")
        return 2
    print("tahta: %s · %d kayıt" % (os.path.relpath(yol, KOK), len(kayit)))
    ornek = kayit[0]
    print("ALAN KÜMESİ (dökülmüş): %s" % sorted(ornek))
    a_kim = alan_bul(ornek, "kimden", "kim")
    a_no = alan_bul(ornek, "no", "id")
    a_msj = alan_bul(ornek, "mesaj", "metin")
    print("kullanılan: kimden=%r no=%r mesaj=%r" % (a_kim, a_no, a_msj))

    benden = [k for k in kayit if ad in str(k.get(a_kim, ""))]
    print("\n%s adına yazılmış: %d" % (ad, len(benden)))
    if not benden:
        print("🔴 HİÇ KAYIT YOK — mesaj İNMEMİŞ")
        return 2
    son = max(benden, key=lambda k: _no(k, a_no))
    inen = str(son.get(a_msj, ""))
    print("son kayıt: %s" % son.get(a_no))

    yazilan = _oku(kaynak_yol)
    print("gönderilen %d bayt · tahtadaki %d bayt"
          % (len(yazilan), len(inen)))

    if _tek_satir(yazilan) == _tek_satir(inen):
        print("\n🟢 TESLİM DOĞRULANDI — %s (boşluk normalleştirmesi "
              "dışında birebir)" % son.get(a_no))
        return 0

    # birebir değilse: metnin AYIRT EDİCİ parçaları yerinde mi
    print("\n🟡 birebir değil — ayırt edici parçalar sınanıyor:")
    parca = [p.strip() for p in re.split(r"\s{2,}|\n", yazilan)
             if len(p.strip()) >= 25][:12]
    eksik = [p for p in parca if _tek_satir(p) not in _tek_satir(inen)]
    for p in parca:
        yok = p in eksik
        print("  %s %s" % ("🔴" if yok else "🟢", p[:66]))
    if eksik:
        print("\n🔴 %d PARÇA EKSİK — mesaj BOZULMUŞ ya da KAYIP"
              % len(eksik))
        return 2
    print("\n🟢 %d parçanın %d'i yerinde — TESLİM DOĞRULANDI (%s)"
          % (len(parca), len(parca), son.get(a_no)))
    return 0


def gelen_tara(ad):
    print("=" * 62)
    print("GELEN TARAMASI — %s (bekçi ölüyse TEK yol budur)" % ad)
    print("=" * 62)
    yol, kayit = tahta_bul()
    if not kayit:
        print("🔴 TAHTA BULUNAMADI")
        return 2
    ornek = kayit[0]
    a_kim = alan_bul(ornek, "kimden", "kim")
    a_kime = alan_bul(ornek, "kime")
    a_no = alan_bul(ornek, "no", "id")
    a_msj = alan_bul(ornek, "mesaj", "metin")
    print("tahta: %s · %d kayıt · alanlar kimden=%r kime=%r"
          % (os.path.relpath(yol, KOK), len(kayit), a_kim, a_kime))

    benim = max((_no(k, a_no) for k in kayit
                 if ad in str(k.get(a_kim, ""))), default=-1)
    print("%s'in son mesajı: M-%d" % (ad, benim))

    bana = [k for k in kayit if ad in str(k.get(a_kime, ""))
            and _no(k, a_no) > benim]
    herkes = [k for k in kayit if _no(k, a_no) > benim
              and str(k.get(a_kime, "")).strip().upper()
              in ("HERKES", "TUM", "TÜM", "*")]
    anan = [k for k in kayit if _no(k, a_no) > benim
            and ad in str(k.get(a_msj, ""))
            and ad not in str(k.get(a_kim, ""))]

    print("\nson mesajından SONRA:")
    print("  doğrudan BANA      : %d" % len(bana))
    print("  HERKESE duyuru     : %d" % len(herkes))
    print("  adı GEÇEN (3. şahıs): %d" % len(anan))
    for etiket, kume in (("BANA", bana), ("HERKES", herkes),
                         ("ANILDI", anan)):
        for k in kume:
            print("\n  🔴 %s %s  %s → %s"
                  % (etiket, k.get(a_no), k.get(a_kim), k.get(a_kime)))
            print("     %s" % str(k.get(a_msj, ""))[:420])
    if not (bana or herkes or anan):
        print("\n🟢 CEVAPSIZ BORÇ YOK")
    return 0


def kendini_sina():
    """C13: geçme · ateşleme · girdi · çıktı — DÖRDÜ de zorlanır."""
    print("=" * 62)
    print("KENDİNİ SINAMA (C13 · dört ayak)")
    print("=" * 62)
    import tempfile
    hata = 0

    # ① GEÇME — birebir metin temiz demeli
    t = tempfile.mkdtemp()
    a = os.path.join(t, "a.txt")
    io.open(a, "w", encoding="utf-8").write("satır bir\nsatır iki\n")
    if _nrm(_oku(a)) == _nrm("satır bir\nsatır iki\n"):
        print("🟢 ① GEÇME — özdeş metin ayrışmıyor")
    else:
        print("🔴 ① GEÇME BAŞARISIZ"); hata += 1

    # ② ATEŞLEME — bir kelime SİLİNİRSE yakalanmalı (kavalali vakası)
    bozuk = "satır bir\nsatır  iki\n".replace("satır  iki", "satır ")
    if _nrm(_oku(a)) != _nrm(bozuk):
        print("🟢 ② ATEŞLEME — silinen kelime YAKALANDI")
    else:
        print("🔴 ② ATEŞLEME BAŞARISIZ — silinmeyi görmedi"); hata += 1

    # ③ GİRDİ — tahta GERÇEK dosyadan okunuyor mu (enjekte değil)
    yol, kayit = tahta_bul()
    if kayit:
        print("🟢 ③ GİRDİ — tahta gerçek dosyadan okundu: %s · %d kayıt"
              % (os.path.relpath(yol, KOK), len(kayit)))
    else:
        print("🔴 ③ GİRDİ BAŞARISIZ — tahta okunamadı"); hata += 1

    # ④ ÇIKTI — alan adı DÖKÜLEREK bulunuyor mu (kim/kimden vakası)
    sahte = {"kimden": "X", "kime": "Y", "no": "M-1", "mesaj": "z"}
    if alan_bul(sahte, "kim") == "kimden":
        print("🟢 ④ ÇIKTI — 'kim' sorgusu gerçek alan 'kimden'i buldu")
    else:
        print("🔴 ④ ÇIKTI BAŞARISIZ — alan adı dökülmüyor"); hata += 1

    print("\n%s" % ("🟢 DÖRT AYAK DA GEÇTİ" if not hata
                    else "🔴 %d AYAK BAŞARISIZ" % hata))
    return 2 if hata else 0


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__)
        raise SystemExit(1)
    if a[0] == "--kendini-sina":
        raise SystemExit(kendini_sina())
    if a[0] == "--commit" and len(a) == 2:
        raise SystemExit(commit_teyit(a[1]))
    if a[0] == "--tahta" and len(a) == 3:
        raise SystemExit(tahta_teyit(a[1], a[2]))
    if a[0] == "--gelen" and len(a) == 2:
        raise SystemExit(gelen_tara(a[1]))
    print(__doc__)
    raise SystemExit(1)
