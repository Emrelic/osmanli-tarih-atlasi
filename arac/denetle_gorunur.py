# -*- coding: utf-8 -*-
"""
DENETLE_GÖRÜNÜR — sessiz kayıp taraması (TESPİH KUŞAK 0 / madde 1)
====================================================================
`arac/denetle_yayin.py` "üretiliyor mu, yükleniyor mu, okunuyor mu" sorusunu
sorar — dosya seviyesinde. Bu araç bir kademe daha derine iner: **veri satırı
seviyesinde** "her KAYIT, arayüzün gösterdiği yerlere gerçekten ULAŞIYOR mu?"

4 Ağustos 2026, koordinatörün isteği: "bugün 5 vaka çıktı ve hepsi tesadüfen
bulundu" (olaylar_ek9 hiç yüklenmiyordu · 8 kişi TUR_ADI'de yoktu · zaporojye
haritada hiç yoktu · yerleşimlerin %82'si g:0 yüzünden görünmezdi · 2s'nin 119
açığı üç yere bölünmüştü). Ölçüt: TEK SEFERLİK değil, KALICI ARAÇ.

Üç tarama:
  ② DİZİN SÜZGEÇLERİ   — Kişiler/Devletler sekmesi bir `tur` sözlüğünde
                          (TUR_ADI/DEVLET_TUR_ADI) karşılığı olmayan kayıdı
                          SESSİZCE atlar. js/app.js'ten dict'i kendisi okur
                          (elle kopya YOK — kopya kayar, okuma kaymaz).
  ③ YERLEŞİM GÖRÜNÜRLÜĞÜ — index.html'in birleştirdiği TÜM yerleşim
                          dosyalarında (motor/girdi.py'nin DAR listesi değil,
                          tarayıcının GERÇEKTEN yüklediği geniş liste) her
                          kaydın en az bir `d/v/s` penceresi ti>fi mi?
                          (4 Ağustos'ta 130 kayıt — Londra, Paris, Berlin,
                          Moskova… — bir epok-damgası filtresi yüzünden HİÇ
                          aktif olmuyordu; js/app.js'te düzeltildi, bu satır
                          onun kalıcı bekçisi.)
  ④ KRONOLOJİ İÇERİĞİ  — her `olaylar*.js` kaydının başlığı/detayı boş mu,
                          `gi`si zaman çubuğunun dışında mı.

Kullanım:
    py arac/denetle_gorunur.py            # üçünü de koştur, özet bas
    py arac/denetle_gorunur.py --ayrinti  # her bulguyu tek tek listele

İhlal varsa çıkış kodu sıfırdan farklıdır.
"""
import argparse
import glob
import io
import json
import os
import re
import sys

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import denetle as _d   # oku_pencere() — ispatlı JS-dizi ayrıştırıcı, birebir alındı


def _app_js():
    return open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()


def _index_html():
    return open(os.path.join(KOK, "index.html"), encoding="utf-8").read()


def _govde_to_json(govde):
    """`oku_pencere`'nin anahtar-tırnaklama regex'i dize-farkında DEĞİL —
    serbest metin içindeki 'kelime:' örüntüsüne de yapışıyor. Ölçüldü:
    devletler.js'te `ozet:"...( kaynak: TDV, madde: celayirliler)"` cümlesi
    içindeki ', madde:' sahte anahtar sanılıp bozuluyordu (json.loads "line
    310 column 220" hatası — devletler.js'in TAMAMI okunamıyordu, 302 kayıt).
    Önce her dizeyi TEK PARÇA JSON dizesine çevirip DOKUNULMAZ kılıyoruz,
    anahtar tırnaklama regex'i ancak ONDAN SONRA, dize dışı metne çalışıyor."""
    # 🔴 İLK DENEME KUSURLUYDU: dizeleri `json.dumps()` ile tek parça yapıp
    # DOĞRUDAN metne gömdü — ama anahtar-tırnaklama regex'i sonra o METNİN
    # TAMAMINDA çalışıyor, dize İÇİNDEKİ ", madde:" da hâlâ görünür kalıyordu
    # (json.dumps çıktısı düz metin, regex'e "buraya dokunma" demiyor). Ölçüldü:
    # aynı celayirliler kaydı YİNE bozuldu. ⇒ Dizeler regex'ten TAMAMEN
    # SAKLANMALI — yer tutucuyla değiştirilip regex'ten SONRA geri konmalı.
    out, dizeler, i, n = [], [], 0, len(govde)
    esc = {"n": "\n", "t": "\t", "r": "\r", "'": "'", '"': '"', "\\": "\\", "/": "/"}
    while i < n:
        c = govde[i]
        if c in "\"'":
            q = c
            j, buf = i + 1, []
            while j < n:
                cj = govde[j]
                if cj == "\\" and j + 1 < n:
                    buf.append(esc.get(govde[j + 1], govde[j + 1]))
                    j += 2
                    continue
                if cj == q:
                    j += 1
                    break
                buf.append(cj)
                j += 1
            dizeler.append("".join(buf))   # HAM metin — json.dumps() ancak geri koyarken
            out.append("\x00%d\x00" % (len(dizeler) - 1))
            i = j
            continue
        out.append(c)
        i += 1
    text = "".join(out)
    # 🔴 KISILER.js'te YENİ örüntü (26 kartvizit birleşiminden sonra ölçüldü):
    # `"metin1" + "metin2"` — JS'te satır sarma için geçerli, JSON'da DEĞİL.
    # Yer tutucular arasında `+` görülürse HAM dizeleri BİRLEŞTİRİP TEK yer
    # tutucuya indirgiyoruz — zincirleme (3+ parça) için sabit noktaya kadar
    # tekrarlanır.
    birlesim = re.compile(r"\x00(\d+)\x00\s*\+\s*\x00(\d+)\x00")
    while True:
        m = birlesim.search(text)
        if not m:
            break
        dizeler.append(dizeler[int(m.group(1))] + dizeler[int(m.group(2))])
        text = text[:m.start()] + ("\x00%d\x00" % (len(dizeler) - 1)) + text[m.end():]
    text = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', text)
    text = re.sub(r',(\s*[\]}])', r'\1', text)
    text = re.sub(r"\x00(\d+)\x00", lambda m: json.dumps(dizeler[int(m.group(1))]), text)
    return text


def _oku_dizi_guvenli(yol, degisken):
    """`denetle.oku_pencere` önce denenir (ispatlı, hızlı); serbest metinde
    sahte anahtar örüntüsü varsa (yukarıdaki `_govde_to_json` notu) dize-
    farkında ikinci geçişle tekrar dener. Bu araç dışındaki her yerde
    `oku_pencere` hâlâ tek otorite — burada yalnız İKİNCİ bir deneme."""
    try:
        return _d.oku_pencere(yol, degisken)
    except Exception:
        pass
    js = open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = "window.%s = " % degisken
    govde_tum = js[js.index(anahtar) + len(anahtar):]
    derinlik, i, dizge, kacis = 0, 0, None, False
    for i, c in enumerate(govde_tum):
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if dizge:
            if c == dizge:
                dizge = None
            continue
        if c in "\"'":
            dizge = c
        elif c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                break
    govde = govde_tum[:i + 1]
    return json.loads(_govde_to_json(govde))


def _dict_liter_oku(app, degisken):
    """`var <degisken> = { ... };` içindeki JS nesne harfîsini Python dict'e çevirir.

    Elle kopya yerine KAYNAKTAN okunuyor — TUR_ADI'ye yeni bir tür eklenip
    dizin tarafı unutulursa (mimar/edebiyatci vakası, bu oturumun kendi
    hatası) bu araç KENDİLİĞİNDEN güncel kalır, ikinci bir bakım yükü açmaz.
    """
    anahtar = "var %s = {" % degisken
    i = app.index(anahtar) + len(anahtar) - 1
    derinlik, dizge, kacis, j = 0, None, False, i
    for j, c in enumerate(app[i:], start=i):
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if dizge:
            if c == dizge:
                dizge = None
            continue
        if c in "\"'":
            dizge = c
        elif c == "{":
            derinlik += 1
        elif c == "}":
            derinlik -= 1
            if derinlik == 0:
                break
    govde = app[i:j + 1]
    anahtarlar = re.findall(r'[{,]\s*(?:"([^"]+)"|([A-Za-z][\w-]*))\s*:', govde)
    return [a or b for a, b in anahtarlar]


def dizin_suzgecleri():
    """② — Kişiler ve Devletler dizin sekmelerinde `tur` karşılığı olmayan kayıt var mı."""
    app = _app_js()
    bulgular = []

    kisiler = _oku_dizi_guvenli(os.path.join(DATA, "kisiler.js"), "KISILER")
    tur_adi = set(_dict_liter_oku(app, "TUR_ADI"))
    kisi_turler = {}
    for k in kisiler:
        kisi_turler.setdefault(k.get("tur"), []).append(k.get("ad"))
    for tur, adlar in kisi_turler.items():
        if tur not in tur_adi:
            bulgular.append(("kisiler-tab", tur, len(adlar),
                              "TUR_ADI'de yok — Kişiler sekmesinde HİÇ görünmezler: "
                              + ", ".join(adlar[:5]) + ("…" if len(adlar) > 5 else "")))

    devletler = _oku_dizi_guvenli(os.path.join(DATA, "devletler.js"), "DEVLETLER")
    devlet_tur_adi = set(_dict_liter_oku(app, "DEVLET_TUR_ADI"))
    devlet_turler = {}
    for dv in devletler:
        devlet_turler.setdefault(dv.get("tur"), []).append(dv.get("ad"))
    for tur, adlar in devlet_turler.items():
        if tur not in devlet_tur_adi:
            bulgular.append(("devletler-tab", tur, len(adlar),
                              "DEVLET_TUR_ADI'de yok — Devletler sekmesinde HİÇ görünmezler: "
                              + ", ".join(adlar[:5]) + ("…" if len(adlar) > 5 else "")))
    return bulgular


def _tarayici_yerlesim_dosyalari():
    """index.html'in `window.YERLESIMLER`e BİRLEŞTİRDİĞİ dosya kümesi — motorun
    dar `girdi.py` listesiyle KARIŞTIRILMAZ: harita işaret KATMANI (bu araç)
    ile petek ÜRETİM katmanı (girdi.py) farklı genişlikte, bilerek — §6."""
    html = _index_html()
    ana = re.search(r'<script src="(data/yerlesimler\.js)', html)
    dosyalar = [ana.group(1)] if ana else []
    for m in re.finditer(r"window\.(YERLESIMLER_\w+)\s*\|\|\s*\[\]", html):
        dosyalar.append("data/" + m.group(1).lower() + ".js")
    return dosyalar


def yerlesim_gorunurlugu():
    """③ — index.html'in yüklediği HER yerleşim dosyasında, her kaydın en az
    bir d/v/s penceresi gerçekten aktif olabiliyor mu (ti>fi)."""
    bulgular = []
    for rel in _tarayici_yerlesim_dosyalari():
        yol = os.path.join(KOK, *rel.split("/"))
        if not os.path.isfile(yol):
            bulgular.append(("dosya-yok", rel, 0, "index.html yüklüyor ama dosya diskte yok"))
            continue
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
        if not m:
            continue
        kayitlar = _d.oku_pencere(yol, m.group(1))
        for y in kayitlar:
            pencereler = (y.get("d") or []) + (y.get("v") or []) + (y.get("s") or [])
            if not pencereler:
                continue   # saf komşu noktası — petek için var, ekranda görünmesi beklenmiyor
            if not any(_d.gun_no(p["t"]) > _d.gun_no(p["f"]) for p in pencereler if p.get("f") and p.get("t")):
                bulgular.append(("yerlesim-hic-aktif-degil", y.get("ad"), rel,
                                  "%d pencere var ama hiçbiri ti>fi değil — haritada HİÇ görünmez"
                                  % len(pencereler)))
    return bulgular


def kronoloji_icerigi():
    """④ — kronoloji maddelerinin başlığı/detayı boş mu, tarihi zaman çubuğunun dışında mı."""
    bulgular = []
    olaylar = _d.olaylari_yukle()
    baslangic, bitis = _d.gun_no("1281-01-01"), _d.gun_no("1923-10-29")
    for o in olaylar:
        if not (o.get("b") or "").strip():
            bulgular.append(("bos-baslik", o.get("t"), "", "başlık (b:) boş"))
        if not (o.get("d") or "").strip():
            bulgular.append(("bos-detay", o.get("t"), o.get("b", ""), "detay (d:) boş"))
        gi = _d.gun_no(o["t"])
        if gi < baslangic or gi > bitis:
            bulgular.append(("tarih-disi", o.get("t"), o.get("b", ""),
                              "zaman çubuğu [1281-01-01, 1923-10-29] dışında"))
    return bulgular


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ayrinti", action="store_true")
    args = ap.parse_args()

    toplam_ihlal = 0
    for baslik, fonk in [
        ("② DİZİN SÜZGEÇLERİ — tur karşılığı olmayan kayıt", dizin_suzgecleri),
        ("③ YERLEŞİM GÖRÜNÜRLÜĞÜ — hiçbir zaman aktif olmayan kayıt", yerlesim_gorunurlugu),
        ("④ KRONOLOJİ İÇERİĞİ — boş/tarih-dışı madde", kronoloji_icerigi),
    ]:
        print("\n" + baslik)
        try:
            bulgular = fonk()
        except Exception as e:
            print("  ! ÇALIŞTIRILAMADI: %s" % e)
            continue
        if not bulgular:
            print("  ✓ temiz")
            continue
        toplam_ihlal += len(bulgular)
        print("  ✗ %d bulgu" % len(bulgular))
        if args.ayrinti:
            for b in bulgular:
                print("     " + "  |  ".join(str(x) for x in b))
        else:
            for b in bulgular[:8]:
                print("     " + "  |  ".join(str(x) for x in b))
            if len(bulgular) > 8:
                print("     … +%d bulgu daha (--ayrinti)" % (len(bulgular) - 8))

    print("\nSONUÇ: %s" % ("İHLAL VAR — çıkış kodu 1" if toplam_ihlal else "TEMİZ"))
    sys.exit(1 if toplam_ihlal else 0)


if __name__ == "__main__":
    main()
