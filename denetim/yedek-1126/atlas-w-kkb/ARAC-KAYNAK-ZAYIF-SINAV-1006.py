# ARAC-KAYNAK-ZAYIF-SINAV-1006 — `durum_tablosu.kaynak_zayif_say/_eki` sınavı
# (UMIT-W7-DALGA6-1006). Koşum: py denetim/ARAC-KAYNAK-ZAYIF-SINAV-1006.py
#   ① N enjeksiyonu 0/1/3 → basılan 0/1/3 (sabit değil)
#   ② alan evrende HİÇ yokken de satır basılır: "…: 0"
#   ③ ölçülemeyen → ÖLÇÜLEMEDİ, rakam yok (0 DEĞİL)
#   ④ eski ad `dogrulanmadi` SAYILMAZ (ad değişimi gerçekten uygulanmış)
#   ⑤ gerçek veri: sayaç = bağımsız node okuyucusu
import os, re, sys, subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import durum_tablosu as D          # stdout'u sarar, chdir(KOK)
import girdi
out = sys.stdout
gecti = toplam = 0


def sina(ad, kosul, ayrinti=""):
    global gecti, toplam
    toplam += 1
    gecti += bool(kosul)
    out.write("%s %s%s\n" % ("✓" if kosul else "✗", ad,
                             ("  — " + ayrinti) if (ayrinti and not kosul) else ""))


def kayit(ad, **ek):
    y = {"ad": ad, "lat": 0.0, "lon": 0.0,
         "s": [{"f": "1500-01-01", "t": "1600-01-01", "d": "x"}]}
    y.update(ek)
    return y


ETIKET = " · kaynak_zayif işaretli kayıt: %d"

# ① enjeksiyon — `false` taşıyan ve alansız kayıt sayılmaz
for n in (0, 1, 3):
    Y = [kayit("a%d" % i, kaynak_zayif=True) for i in range(n)]
    Y += [kayit("yanlis", kaynak_zayif=False), kayit("alansiz")]
    kz = D.kaynak_zayif_say(Y)
    ek = D.kaynak_zayif_eki(kz)
    sina("① %d işaretli → '%s'" % (n, (ETIKET % n).strip()),
         kz.get("n") == n and ek == ETIKET % n, repr(ek))

# dönem düzeyi işaret → kayıt başına BİR
Y = [kayit("donemli", s=[{"f": "1500-01-01", "t": "1600-01-01", "d": "x", "kaynak_zayif": True},
                         {"f": "1600-01-01", "t": "1700-01-01", "d": "y", "kaynak_zayif": True}])]
sina("① dönem düzeyi işaret → 1 kayıt", D.kaynak_zayif_say(Y).get("n") == 1)

# ② alan HİÇ yok → yine basılır, 0
kz = D.kaynak_zayif_say([kayit("a"), kayit("b")])
sina("② alan evrende yok → '…: 0' basılır", D.kaynak_zayif_eki(kz) == ETIKET % 0,
     repr(D.kaynak_zayif_eki(kz)))
o = D.olc()
o2 = dict(o)
o2["kaynak_zayif"] = kz
satir = [l for l in D.tablo(o2).split("\n") if l.startswith("| Yerleşim")]
sina("② tabloda Yerleşim satırı '…: 0 |' ile biter",
     len(satir) == 1 and satir[0].endswith("kaynak_zayif işaretli kayıt: 0 |"), str(satir))

# ③ ölçülemeyen → ÖLÇÜLEMEDİ, rakam yok
for ad, Y in [("Y None", None), ("kayıt sözlük değil", [kayit("a"), "bozuk"]),
              ("dönem listesi değil", [kayit("a", s=7)])]:
    kz = D.kaynak_zayif_say(Y)
    ek = D.kaynak_zayif_eki(kz)
    sina("③ %s → ÖLÇÜLEMEDİ, rakam yok" % ad,
         "hata" in kz and "ÖLÇÜLEMEDİ" in ek and not re.search(r"kayıt: \d", ek), repr(ek))

# ④ eski ad sayılmaz
kz = D.kaynak_zayif_say([kayit("eski", dogrulanmadi=True)])
sina("④ eski ad dogrulanmadi:true → 0", kz.get("n") == 0, str(kz))

# ⑤ gerçek veri — bağımsız okuyucu (node, tarayıcı gibi yükler)
JS = ("const fs=require('fs');let n=0;for(const f of process.argv.slice(1)){"
      "const W={};new Function('window',fs.readFileSync(f,'utf8'))(W);"
      "for(const k in W){if(!/^YERLESIMLER/.test(k)||!Array.isArray(W[k]))continue;"
      "for(const y of W[k]){const ps=['s','d','v','isg'].flatMap(a=>Array.isArray(y[a])?y[a]:[]);"
      "if(y.kaynak_zayif||ps.some(p=>p&&p.kaynak_zayif))n++}}}process.stdout.write(String(n))")
c = subprocess.run(["node", "-e", JS] + [os.path.join("data", f) for f in girdi.GIRDI_DOSYALARI],
                   capture_output=True)
bagimsiz = int(c.stdout) if c.returncode == 0 and c.stdout.strip().isdigit() else None
kz = o["kaynak_zayif"]
sina("⑤ gerçek: sayaç %s = node okuyucusu %s" % (kz.get("n"), bagimsiz),
     bagimsiz is not None and kz.get("n") == bagimsiz,
     c.stderr[-200:].decode("utf-8", "replace"))
sina("⑤ gerçek: tabloda ek basılı",
     (ETIKET % kz.get("n", -1)) + " |" in D.tablo(o))

out.write("SINAV %d/%d\n" % (gecti, toplam))
raise SystemExit(0 if gecti == toplam else 1)
