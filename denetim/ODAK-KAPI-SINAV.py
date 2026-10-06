# -*- coding: utf-8 -*-
"""ODAK-KAPI-SINAV — odak nöbetçisi GERÇEKTEN ötüyor mu? İKİ YÖNDE sınar.

🔴 NİÇİN VAR — `CLAUDE.md §11`: *"yeni denetim iki yönde sınanmadan çalışıyor
sayılmaz"* ve *"`0 bulundu` aletin ateşlendiğinin kanıtı değildir"* (`B9`).
Temiz veride `✓` basan bir kapı, hiçbir şeyi ÖLÇMÜYOR da olabilir.

## ÖNGÖRÜ — ölçümden ÖNCE yazıldı (27 Eylül 2026, koordinatör)

    ① tavan indirilirse            → İHLAL ("ODAKSIZ GERİLEDİ")
    ② bilinen borç beyandan silinirse → İHLAL ("YENİ çözülmeyen odak atfı: 1")
    ③ veriye olmayan bir `odak_yer` adı sokulursa → İHLAL (yeni kırık atıf)
    ④ hepsi geri alınınca          → TEMİZ

## NE YAPMAZ

CANLI DOSYAYA YAZMAZ (UMIT-W31-SINAV-YANETKI-1006). Eskiden ③'te `data/`
dosyasına yazıp `git checkout --` ile geri alıyor, ①②'de CANLI kapı tavanı
`denetim/ODAK-TAVAN.json`u yeniden yazıyordu (CRLF→LF: "değişiklik var"
yanılgısı; çökse yarım tavan kalırdı). Şimdi `odak_olc`un `KOK`u ve
`TAVAN_YOL`u GEÇİCİ bir köke çevrilir: odak çözücüsünün okuduğu dosyalar
(`data/devletler.js` · `data/hukuki_sinirlar.js` · `data/kronoloji_*` ·
`data/olaylar*` · `js/suzgec.js`) ve tavan oraya KOPYALANIR; bozma yalnız
kopyada olur. Kopya eksikse çözücü düşer → ⓿ taban ötmüş görünür (kapalıya
düşer, sessiz geçmez). Yerleşim havuzu `girdi.yukle` ile canlıdan OKUNUR.
🆕 W57 (6 Ekim 2026): ODAK-SEKME-1006 ile çözücünün evreni TARAYICIdır —
`index.html` + `js/app.js` (metinle kesim) + index'in yüklediği BÜTÜN
`data/` betikleri (paket künyesi `data/paket_kunye.json` dâhil). Eski
kopya kümesiyle çözücü `index.html`i bulamaz ve ⓿ taban ÖLÇEMEDİ verir;
①②③ ise ÖLÇEMEDİ'yi ihlal sayıp BOŞUNA "geçer" (ölçüldü: 3/2, ③ sahte).
⇒ `index.html` ve `js/` kopyalanır; kalan `data/` dosyaları GEÇİCİ köke
SABİT BAĞ (hardlink, olmazsa kopya) ile konur. Yazılan iki dosya — kurban
ve tavan — yukarıdaki listede GERÇEK kopyadır; bağla konan hiçbir dosyaya
yazılmaz.
Koşmadan önce `git status --short data/` TEMİZ olmalı — kirli `data/`yı
kopyalayıp ölçmek, başkasının yarım işini ölçmektir; betik REDDEDER.

    py denetim/ODAK-KAPI-SINAV.py
"""
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
TAVAN_CANLI = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
KURBAN = "kronoloji_misir.js"          # ③ için; en küçük yüklü dosyalardan
SAHTE = "Zzz Olmayan Yer 0080"

import odak_olc as OO                                        # noqa: E402

gecti = 0
kaldi = 0


def sina(ad, bekle_ihlal):
    global gecti, kaldi
    r = OO.kapi_olcumu()
    v = bool(r["ihlal"])
    ok = (v == bekle_ihlal)
    print("  %s %-46s ihlal=%-5s (beklenen %s)"
          % ("✓" if ok else "🔴 SINAV BAŞARISIZ", ad, v, bekle_ihlal))
    for s in r["satirlar"]:
        if s.strip().startswith("✗"):
            print("        %s" % s.strip())
    if ok:
        gecti += 1
    else:
        kaldi += 1
    return r


def git_temiz_mi():
    r = subprocess.run(["git", "status", "--short", "--", "data"], cwd=KOK,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    return not (r.stdout or "").strip(), (r.stdout or "").strip()


def gecici_kok():
    """Odak çözücüsünün okuduğu dosyaların + tavanın KOPYASI. Dönüş: kök yolu."""
    gk = tempfile.mkdtemp(prefix="odak-kapi-sinav-")
    os.makedirs(os.path.join(gk, "data"))
    os.makedirs(os.path.join(gk, "js"))
    os.makedirs(os.path.join(gk, "denetim"))
    d = os.path.join(KOK, "data")
    for f in os.listdir(d):
        if (f.endswith(".js") and (f.startswith("kronoloji_")
                                   or f.startswith("olaylar")
                                   or f in ("devletler.js", "hukuki_sinirlar.js",
                                            # sekme dalı (GOVDE) bunu okur; yoksa
                                            # kapı ÖLÇÜLEMEDİ der (ODAK-KAPI-KIMLIK-1006)
                                            "devlet_harita_ust.js"))):
            shutil.copy2(os.path.join(d, f), os.path.join(gk, "data", f))
    shutil.copy2(os.path.join(KOK, "js", "suzgec.js"),
                 os.path.join(gk, "js", "suzgec.js"))
    shutil.copy2(TAVAN_CANLI, os.path.join(gk, "denetim", "ODAK-TAVAN.json"))
    # Tarayıcı evreni (W57): index.html + js/ kopya; kalan data/ SABİT BAĞ.
    shutil.copy2(os.path.join(KOK, "index.html"), os.path.join(gk, "index.html"))
    for f in os.listdir(os.path.join(KOK, "js")):
        y = os.path.join(KOK, "js", f)
        if os.path.isfile(y) and not os.path.exists(os.path.join(gk, "js", f)):
            shutil.copy2(y, os.path.join(gk, "js", f))
    for f in os.listdir(d):
        y, h = os.path.join(d, f), os.path.join(gk, "data", f)
        if not os.path.isfile(y) or os.path.exists(h):
            continue                      # kurban/tavan ailesi zaten GERÇEK kopya
        try:
            os.link(y, h)
        except OSError:
            shutil.copy2(y, h)
    return gk


def main():
    temiz, kirli = git_temiz_mi()
    if not temiz:
        print("🔴 `data/` KİRLİ — sınav ÇALIŞMAZ. Başkasının yarım işini geri")
        print("   almak bu betiğin hakkı değil. Kirli dosyalar:")
        print(kirli[:600])
        return 2
    if not os.path.isfile(TAVAN_CANLI):
        print("🔴 tavan yok:", TAVAN_CANLI)
        return 2

    gk = gecici_kok()
    OO.KOK = gk
    OO.TAVAN_YOL = TAVAN = os.path.join(gk, "denetim", "ODAK-TAVAN.json")
    ilk = io.open(TAVAN, encoding="utf-8").read()
    kurban_yol = os.path.join(gk, "data", KURBAN)
    print("=" * 84)
    print("ODAK KAPISI — İKİ YÖNLÜ SINAV")
    print("=" * 84)

    try:
        # ---------- ⓿ taban: olduğu gibi TEMİZ olmalı
        print("\n⓿ TABAN — dokunulmamış hâl")
        sina("taban (hiçbir şey değiştirilmedi)", False)

        # ---------- ① tavan indirilirse GERİLEME ötmeli
        print("\n① GERİLEME — tavan bir eksiğe indirildi")
        tv = json.loads(ilk)
        tv["odaksiz"] = max(tv["odaksiz"] - 1, 0)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(
            json.dumps(tv, ensure_ascii=False, indent=1) + "\n")
        sina("ODAKSIZ tavanı 1 düşük", True)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk)

        # ---------- ② beyanlı borç silinirse YENİ sayılmalı
        print("\n② BEYAN SİLİNDİ — bilinen borç artık beyanlı değil")
        tv = json.loads(ilk)
        onceki = len(tv.get("bilinen_kusur") or [])
        tv["bilinen_kusur"] = []
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(
            json.dumps(tv, ensure_ascii=False, indent=1) + "\n")
        sina("bilinen_kusur boşaltıldı (%d kayıt vardı)" % onceki, onceki > 0)
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk)

        # ---------- ③ veriye OLMAYAN bir odak_yer adı sokulursa
        print("\n③ KIRIK ATIF — veriye olmayan bir `odak_yer` adı sokuldu")
        ham = io.open(kurban_yol, encoding="utf-8").read()
        # ilk `{ t:"…"` kaydına odak_yer ekle — şema bozmadan, tek yerde
        m = re.search(r'\{\s*t\s*:\s*"(\d{4}-\d{2}-\d{2})"', ham)
        if not m:
            print("  🔴 kurban dosyada `{ t:\"…\"` kalıbı bulunamadı — ③ ATLANDI")
            print("     (ATLANDI ≠ GEÇTİ: sınav bu yönü ölçemedi)")
            kaldi_atla = True
        else:
            kaldi_atla = False
            yeni = ham[:m.end()] + (', odak_yer:["%s"]' % SAHTE) + ham[m.end():]
            io.open(kurban_yol, "w", encoding="utf-8", newline="").write(yeni)
            sina("%s içine odak_yer:[%r]" % (KURBAN, SAHTE), True)
            io.open(kurban_yol, "w", encoding="utf-8", newline="").write(ham)

        # ---------- ④ her şey geri alındı: yine TEMİZ
        print("\n④ GERİ ALINDI — kapı yeniden temiz olmalı")
        sina("taban (geri alma sonrası)", False)

    finally:
        OO.KOK = KOK
        OO.TAVAN_YOL = TAVAN_CANLI
        shutil.rmtree(gk, ignore_errors=True)

    print()
    print("=" * 84)
    print("SONUÇ: geçen %d · BAŞARISIZ %d" % (gecti, kaldi))
    if kaldi_atla:
        print("⚠️ ③ ATLANDI — o yön ÖLÇÜLEMEDİ, temiz sayılmaz.")
    temiz2, kirli2 = git_temiz_mi()
    print("geri alma doğrulandı: %s" % ("✓ data/ temiz" if temiz2
                                        else "🔴 KİRLİ KALDI:\n" + kirli2[:400]))
    return 0 if (kaldi == 0 and temiz2 and not kaldi_atla) else 1


if __name__ == "__main__":
    raise SystemExit(main())
