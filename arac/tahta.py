# -*- coding: utf-8 -*-
"""TAHTA — oturumlar arası MESAJ PANOSU. Emre'nin tasarımı (13 Ağustos 2026).

    "Proje dosyasında bir mesaj levhası panosu yapıp tüm oturumların bu panoya
     yazmaları sağlanabilir. HANGİ OTURUM yazıyor, HANGİ OTURUMA gönderiyor,
     HANGİ SAATTE ve TARİHTE yazıyor, ve MESAJ olarak ne yazıyor. Bu panoya
     herkes yazar ve kendisini ilgilendiren kısmı gelir oradan okur."

🔴 NİÇİN GEREKTİ — `send_message` ÖLÇÜLDÜ ve ÇALIŞMIYOR:
    araç "Message sent" diyor · mesaj HEDEFE VARMIYOR
    altı oturum bunu BAĞIMSIZ olarak doğruladı (hazır kıta 2·3·6·7·9·10)
    en keskin kanıt: koordinatör KRONOLOJİ YER'e anahtarlı bir sevk gönderdi,
    araç "sent" dedi; oturum ONDAN SONRA ölçtü ve yazdı:
        "grep -ril 'KITA9|HAZIR KITA 9' -> TEK SONUÇ BU DOSYA.
         Depoda bana hitap eden hiçbir satır yok."

📌 `CLAUDE.md §11`: *"araç kendi eyleminin SONUCUNU değil DENEMESİNİ
raporluyor."* `"sent"` bir TESLİM değil bir GİRİŞİM kaydıdır. Koordinatör beş
kez ona güvendi ve beş kez "gönderildi" diye rapor etti.

⇒ Tahta git üzerinden çalışır: **hiçbir yerde oturum kimliği YOK**, bayatlayacak
adres YOK, ve teslim `git log` ile KANITLANABİLİR.

Kullanım:
    py arac/tahta.py yaz  --kim "RENK 3" --kime KOORDINATOR --mesaj "ΔE 2,8 ölçtüm"
    py arac/tahta.py oku  --kim "RENK 3"          # BANA gelenler (+ HERKES)
    py arac/tahta.py oku                           # tahtanın tamamı
    py arac/tahta.py oku  --hepsi --son 30         # son 30 satır, herkes

`yaz` satırı ekler VE commit eder (pathspec'li — paylaşılan index güvenliği).
"""
import datetime
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAHTA = os.path.join(KOK, "oturumlar", "TAHTA.md")
BAS = """# 📋 TAHTA — oturumlar arası mesaj panosu

> Emre'nin tasarımı, 13 Ağustos 2026. `send_message` ölçüldü ve ÇALIŞMIYOR
> ("sent" diyor, hedefe varmıyor — altı oturum bağımsız doğruladı).
> Bu pano **git üzerinden** çalışır: kimlik yok, bayatlayacak adres yok,
> ve teslim `git log` ile KANITLANABİLİR.

## Nasıl kullanılır
```bash
py arac/tahta.py oku --kim "<KENDİ ADIN>"     # sana gelenler
py arac/tahta.py yaz --kim "<KENDİ ADIN>" --kime KOORDINATOR --mesaj "..."
```
🔴 **Her turun başında `git pull --ff-only` sonra `oku`.** Tahta seni
UYANDIRMAZ — okumak senin işin.
⚠️ `--kime HERKES` yazarsan mesajı herkes görür. Kimseye yazmıyorsan yazma:
gürültü, panoyu okunmaz yapar ve okunmayan pano yoktur.

| TARİH SAAT | KİMDEN | KİME | MESAJ |
|---|---|---|---|
"""


def _kur():
    if not os.path.exists(TAHTA):
        os.makedirs(os.path.dirname(TAHTA), exist_ok=True)
        io.open(TAHTA, "w", encoding="utf-8", newline="\n").write(BAS)


def _temiz(s):
    """Boru işareti tabloyu bozar; satır sonu satırı böler."""
    return re.sub(r"\s+", " ", (s or "").replace("|", "¦")).strip()


def yaz(kim, kime, mesaj):
    _kur()
    zaman = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    satir = "| %s | %s | %s | %s |\n" % (
        zaman, _temiz(kim), _temiz(kime).upper(), _temiz(mesaj))
    with io.open(TAHTA, "a", encoding="utf-8", newline="\n") as f:
        f.write(satir)
    print("tahtaya yazildi:")
    print("   " + satir.strip())

    # Commit — pathspec ZORUNLU: git index PAYLAŞILIYOR, yol adı yazılmazsa
    # başka bir oturumun sahnelediği dosya bu commit'e girer (§7).
    ileti = os.path.join(KOK, ".tahta_commit_mesaji")
    io.open(ileti, "w", encoding="utf-8", newline="\n").write(
        "TAHTA — %s -> %s\n\n%s\n" % (kim, kime, mesaj))
    try:
        subprocess.run(["git", "-C", KOK, "add", "--", "oturumlar/TAHTA.md"],
                       check=False, capture_output=True)
        r = subprocess.run(["git", "-C", KOK, "commit", "-F", ileti,
                            "--", "oturumlar/TAHTA.md"],
                           capture_output=True, text=True)
        print("commit: %s" % ("✓" if r.returncode == 0 else "🔴 kod=%d" % r.returncode))
        # ⚠️ pull --rebase ÖNCE, sonra push (§bitir): tek bilgisayarken push
        # hep çalışır; ikinci yazar geldiği an non-fast-forward ile reddedilir.
        subprocess.run(["git", "-C", KOK, "pull", "--rebase"],
                       capture_output=True, text=True)
        p = subprocess.run(["git", "-C", KOK, "push"], capture_output=True, text=True)
        print("push  : %s" % ("✓" if p.returncode == 0 else "🔴 kod=%d" % p.returncode))
        if p.returncode != 0:
            # 🔴 SESSİZ GEÇİLMEZ: push başarısızsa mesaj SENDE KALDI demektir
            print("   " + (p.stderr or "").strip()[:200])
            print("   ⚠️ MESAJ HENÜZ KİMSEYE ULAŞMADI — push başarısız.")
            print("      Bunu KULLANICIYA da söyle (arıza ÜÇ YERE bildirilir).")
    finally:
        if os.path.exists(ileti):
            os.remove(ileti)
    return 0


def _satirlar():
    if not os.path.exists(TAHTA):
        return []
    out = []
    for s in io.open(TAHTA, encoding="utf-8"):
        s = s.strip()
        if not s.startswith("|"):
            continue
        h = [x.strip() for x in s.strip("|").split("|")]
        if len(h) != 4 or h[0].startswith("---") or h[0] == "TARİH SAAT":
            continue
        out.append(h)
    return out


def oku(kim, hepsi, son):
    kayit = _satirlar()
    if not kayit:
        print("tahta BOŞ — henüz kimse yazmadı.")
        return 0
    if kim and not hepsi:
        k = kim.strip().upper()
        secili = [r for r in kayit if r[2] == k or r[2] == "HERKES"]
        baslik = "SANA GELENLER (%s) + HERKES" % kim
    else:
        secili = kayit
        baslik = "TAHTANIN TAMAMI"
    if son:
        secili = secili[-son:]
    print("=" * 74)
    print("%s — %d satır (tahtada toplam %d)" % (baslik, len(secili), len(kayit)))
    print("=" * 74)
    for z, kmn, kme, msj in secili:
        print("%s  %s → %s" % (z, kmn, kme))
        print("   %s" % msj)
    if kim and not hepsi and not secili:
        print("(sana hitap eden satır yok — 'boştayım' diye kendi ilerleme")
        print(" dosyana yaz, KENDİ İŞ SEÇME)")
    return 0


def main(argv):
    if not argv:
        return oku(None, True, 40)
    komut = argv[0]

    def al(ad, vars=None):
        if ad in argv:
            i = argv.index(ad)
            if i + 1 < len(argv):
                return argv[i + 1]
        return vars

    if komut == "yaz":
        kim, kime, mesaj = al("--kim"), al("--kime"), al("--mesaj")
        if not (kim and kime and mesaj):
            print("kullanim: tahta.py yaz --kim <AD> --kime <AD|KOORDINATOR|HERKES> --mesaj <metin>")
            return 2
        return yaz(kim, kime, mesaj)
    if komut == "oku":
        son = al("--son")
        return oku(al("--kim"), "--hepsi" in argv, int(son) if son else None)
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
