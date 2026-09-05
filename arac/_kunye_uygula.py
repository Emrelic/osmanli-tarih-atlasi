# -*- coding: utf-8 -*-
"""YENİ KÜNYELERİ `data/devletler.js`e EKLER — append-only, sınanmış.

🔴 NİÇİN: `_kronoloji_uygula.py` var olan künyelere MADDE ekler; YENİ KÜNYE
ekleyen bir araç yoktu. 5 Eylül gecesi iki oturum 11 künye üretti
(1918-23 halefleri 10 + `norse-gronland` 1) ve bunlar elden yazılan bir
betikle inecekti — 4 Eylül'de 200 madde tam öyle inmişti ve o betik commit
bile edilmedi.

BEŞ KURAL — kardeş aracın aynısı, gerekçeleri de aynı:
 ① VAR OLAN KÜNYEYE DOKUNMAZ. Yalnız `DEVLETLER` dizisinin SONUNA ekler.
 ② KOŞU CANLIYKEN ÇALIŞMAZ — canlılığı KİLİT DOSYASINDAN DEĞİL SÜREÇTEN
   ölçer, ve ÖLÇEMEZSE canlı sayar.
 ③ KİMLİK ÇAKIŞMASI SESSİZ GEÇMEZ: `devletler.js` node ile okunur (regex
   YOK), aynı `id` varsa kayıt REDDEDİLİR ve adıyla basılır.
 ④ `bolge` ALANI UYDURULAMAZ: dosyada GERÇEKTEN kullanılan bölge kümesi
   ölçülür; dışında bir değer REDDEDİLİR. (Bu gece bir oturum
   `mezopotamya`/`suriye-filistin` diye var olmayan iki bölge aradı ve
   "0 künye" ölçtü — sayı doğru, alan yoktu.)
 ⑤ YAZDIKTAN SONRA DOĞRULAR: node ile yeniden okur; künye sayısı
   `eski + inen` değilse ÇIKIŞ KODU 1 ve yedeği söyler.

İKİ YAMA BİÇİMİ DE KABUL — ve bu bir tolerans değil ÖLÇÜM: biçim VARSAYILMAZ,
üst anahtarlar taranır.
    {"kunyeler": [ {...}, {...} ]}     çoklu
    {"kunye":    {...} }               tekil

KULLANIM
    py arac/_kunye_uygula.py                 # KURU KOŞU
    py arac/_kunye_uygula.py --yaz
    py arac/_kunye_uygula.py --hedef <yol>   # sınav kopyası
    py arac/_kunye_uygula.py --yama "denetim/YAMA-KUNYE-*0905*.json"
"""
import glob
import io
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEVLETLER = os.path.join(KOK, "data", "devletler.js")
KILIT = os.path.join(KOK, ".petek.kilit")
VARSAYILAN = "denetim/YAMA-KUNYE-*0905*.json"
ZORUNLU = ("id", "ad", "f", "t", "bolge")
# `ozet` ve `kaynak` zorunlu DEĞİL ama eksikse UYARILIR: §4'ün "kaynağı
# yazılmayan bilgi, kaynağı olmayandan ayırt edilemez" kuralı bir REDDETME
# ölçütü değil bir GÖRÜNÜRLÜK ölçütüdür — reddedersek oturum onu gizlemeye
# değil, uydurmaya yönelir.
ONERILEN = ("ozet", "kaynak")


def yaz(s):
    try:
        print(s, flush=True)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"), flush=True)
        except Exception:
            pass


def _pid_oku():
    try:
        for p in io.open(KILIT, encoding="utf-8").read().split("|"):
            p = p.strip()
            if p.startswith("pid="):
                return int(p[4:])
    except Exception:
        pass
    return None


def _yasiyor(pid):
    try:
        r = subprocess.run(["tasklist", "/FI", "PID eq %d" % pid, "/NH", "/FO", "CSV"],
                           capture_output=True, text=True, timeout=20)
        if r.returncode != 0:
            return True
        return ('"%d"' % pid) in (r.stdout or "")
    except Exception:
        return True


def kosu_canli():
    pid = _pid_oku()
    if pid is None:
        return False, "kilit yok"
    return _yasiyor(pid), "PID %d" % pid


BETIK = """
const fs = require('fs');
global.window = {};
eval(fs.readFileSync(process.argv[2], 'utf8'));
const D = window.DEVLETLER || [];
const b = {};
for (const d of D) b[d.bolge || '(YOK)'] = 1;
process.stdout.write(JSON.stringify({adet: D.length, ids: D.map(d => d.id),
                                     bolgeler: Object.keys(b)}));
"""


def oku(yol):
    bs = os.path.join(KOK, "_ku_oku.js")
    io.open(bs, "w", encoding="utf-8", newline="\n").write(BETIK)
    try:
        r = subprocess.run(["node", bs, yol], capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=180)
        if r.returncode != 0:
            yaz("🔴 node okuyamadı: %s" % (r.stderr or "")[:300])
            return None
        return json.loads(r.stdout)
    finally:
        try:
            os.remove(bs)
        except Exception:
            pass


def kunyeleri_cikar(d):
    """Biçimi VARSAYMA, ÖLÇ. Çoklu liste ya da tekil sözlük."""
    for _, v in d.items():
        if isinstance(v, list) and v and isinstance(v[0], dict) and "id" in v[0]:
            return v
    for _, v in d.items():
        if isinstance(v, dict) and "id" in v and "ad" in v:
            return [v]
    return []


def _js(v):
    return json.dumps(v, ensure_ascii=False)


def kunye_metni(k):
    """Künyeyi devletler.js'in kendi yazım biçiminde üret."""
    sira = ["id", "ad", "tur", "bolge", "f", "t", "baskent", "harita", "ozet", "kaynak"]
    satir = ["{ " + ", ".join("%s:%s" % (a, _js(k[a]))
                              for a in sira[:6] if k.get(a))]
    kuyruk = [a for a in sira[6:] if k.get(a)]
    for a in kuyruk:
        satir.append("  %s:%s" % (a, _js(k[a])))
    kr = k.get("kronoloji") or []
    if kr:
        ic = ",\n".join(
            "    { %s }" % ", ".join("%s:%s" % (x, _js(m[x]))
                                     for x in ("t", "tur", "b", "kaynak") if m.get(x))
            for m in kr)
        satir.append("  kronoloji:[\n%s\n  ]" % ic)
    else:
        satir.append("  kronoloji:[]")
    return ",\n".join(satir) + " }"


def dizi_kapanisi(s):
    """`DEVLETLER` dizisinin KAPANIŞ `]`ini bul — PARANTEZ SAYMADAN.

    🔴 İLK SÜRÜM PARANTEZ SAYIYORDU VE ÇÖKTÜ (5 Eylül 2026):
    dosyada Türkçe `//` yorum satırları var ve içlerinde kesme işareti
    geçiyor (*"Masina Halifeliği'nin"*). Tarayıcı `'` görünce DİZGİ başladı
    sandı, sonraki `'`e kadar her şeyi dizgi saydı, parantez sayacı KAYDI
    ⇒ yanlış `]` bulundu ve 11 künye YANLIŞ YERE yazıldı.
    🟢 node doğrulaması ÖTTÜ ("beklenen 602, gelen 591") ve gerçek dosyaya
      hiçbir şey yazılmadı — `§11`in *"reçete kendi testini geçmeli"*
      kuralının bu araçtaki karşılığı.
    📌 Ve bu proje aynı dersi ALTINCI kez öğreniyor: *veri zaten bir dilde
      yazılmışsa, o dilin yorumlayıcısını çağır.* Bu seferki farkı:
      ayrıştırıcı KODU değil YORUMU yanlış okudu.

    ⇒ Şimdi tek bir çapa: dizi dosyanın SONUNDA `];` ile kapanıyor.
      Bulunamazsa araç DURUR — tahmin etmez.
    """
    i = s.rstrip().rfind("];")
    if i < 0:
        return -1
    # `];`den sonra yalnız boşluk/satır sonu olmalı — ortadaki bir `];`
    # yakalanırsa bu araç yanlış yere yazar, ve sessizce yazmasındansa DURSUN.
    if s[i + 2:].strip():
        return -1
    return i


def main(argv):
    YAZ = "--yaz" in argv
    hedef = argv[argv.index("--hedef") + 1] if "--hedef" in argv else DEVLETLER
    desen = argv[argv.index("--yama") + 1] if "--yama" in argv else VARSAYILAN

    yaz("=" * 66)
    yaz("KÜNYE YAMASI · hedef: %s" % os.path.relpath(hedef, KOK))
    yaz("=" * 66)
    canli, nasil = kosu_canli()
    if YAZ and os.path.abspath(hedef) == os.path.abspath(DEVLETLER) and canli:
        yaz("🔴 KOŞU CANLI (%s) — data/devletler.js'e YAZILMAZ." % nasil)
        return 2
    yaz("koşu: %s%s" % (nasil, " · CANLI" if canli else ""))

    yamalar = sorted(glob.glob(os.path.join(KOK, desen)))
    if not yamalar:
        yaz("🔴 yama yok: %s" % desen)
        return 2
    istek = []
    for y in yamalar:
        L = kunyeleri_cikar(json.load(io.open(y, encoding="utf-8")))
        yaz("  %-36s %2d künye" % (os.path.basename(y), len(L)))
        for k in L:
            istek.append((k, os.path.basename(y)))
    yaz("  TOPLAM istek: %d" % len(istek))

    onceki = oku(hedef)
    if onceki is None:
        return 2
    mevcut, bolgeler = set(onceki["ids"]), set(onceki["bolgeler"])
    yaz("  hedefte künye %d · bölge cinsi %d" % (onceki["adet"], len(bolgeler)))

    kabul, red, uyari = [], [], []
    for k, dosya in istek:
        i = k.get("id", "?")
        eksik = [a for a in ZORUNLU if not k.get(a)]
        if eksik:
            red.append((i, dosya, "şema eksik: " + ",".join(eksik)))
            continue
        if i in mevcut:
            red.append((i, dosya, "KİMLİK ÇAKIŞMASI — zaten var"))
            continue
        if k["bolge"] not in bolgeler:
            red.append((i, dosya, "bölge listede YOK: " + str(k["bolge"])))
            continue
        for a in ONERILEN:
            if not k.get(a):
                uyari.append((i, dosya, "⚠️ `%s` alanı BOŞ" % a))
        kabul.append(k)
        mevcut.add(i)

    yaz("")
    yaz("KABUL %d · RED %d · UYARI %d" % (len(kabul), len(red), len(uyari)))
    for i, dosya, n in red:
        yaz("  🔴 %-24s %-34s %s" % (i, n, dosya))
    for i, dosya, n in uyari:
        yaz("  %-26s %-34s %s" % (i, n, dosya))

    if not YAZ:
        yaz("")
        yaz("KURU KOŞU — hiçbir şey yazılmadı. Yazmak için: --yaz")
        return 0
    if not kabul:
        yaz("yazılacak künye yok.")
        return 0

    s = io.open(hedef, encoding="utf-8").read()
    yedek = hedef + ".kunye-yedek"
    io.open(yedek, "w", encoding="utf-8", newline="").write(s)
    kapa = dizi_kapanisi(s)
    if kapa < 0:
        yaz("🔴 DEVLETLER dizisinin kapanışı bulunamadı — YAZILMADI")
        return 2
    parca = ",\n" + ",\n".join(kunye_metni(k) for k in kabul) + "\n"
    s = s[:kapa] + parca + s[kapa:]
    io.open(hedef, "w", encoding="utf-8", newline="").write(s)
    yaz("  yazıldı: %d künye · yedek: %s" % (len(kabul), os.path.basename(yedek)))

    sonra = oku(hedef)
    if sonra is None:
        yaz("🔴 YAZILDI AMA OKUNAMIYOR — yedeği geri al: %s" % yedek)
        return 1
    bek = onceki["adet"] + len(kabul)
    if sonra["adet"] != bek:
        yaz("🔴 DOĞRULAMA BAŞARISIZ: beklenen %d, gelen %d · yedek: %s"
            % (bek, sonra["adet"], yedek))
        return 1
    inmeyen = [k["id"] for k in kabul if k["id"] not in set(sonra["ids"])]
    if inmeyen:
        yaz("🔴 İNMEYEN KİMLİK: %s · yedek: %s" % (", ".join(inmeyen), yedek))
        return 1
    yaz("🟢 DOĞRULANDI: künye %d → %d · %d kimliğin %d'i dosyada"
        % (onceki["adet"], sonra["adet"], len(kabul), len(kabul)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
