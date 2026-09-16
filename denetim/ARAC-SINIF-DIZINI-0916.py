# -*- coding: utf-8 -*-
"""
denetim/ARAC-SINIF-DIZINI-0916.py — D-KAYNAK (GERIYE-SARMA-0916.md görevi)

Bütün `data/d_sinirlar*.js` dosyalarını okur, `oturumlar/GORUNUM-ABCD-0916.md`
üst bölümünün A-F sınıf şemasına göre her hat kaydına bir `sinif` değeri atar
ve `data/sinir_sinif_dizini.js` (`window.SINIR_SINIF_DIZINI`) üretir.

Kendi ayrıştırıcımızı YAZMIYORUZ (CLAUDE.md D023 dersi): veri JS ile yazılmış,
o yüzden dosyalar `node -e "global.window={};eval(...)"` ile açılır — tıpkı
`arac/denetle.py`'nin `_devletler_yukle()` fonksiyonunun yaptığı gibi.

Eşleme (GORUNUM-ABCD-0916.md §"Eski kategori eşlemesi"):
    kategori "D"     -> sinif "E" (F kanıtı varsa "F")
    kategori "fiili" -> sinif "D" (koordinat kesinse, yani hat != null)
                        -> sinif "YOK" (koordinat yoksa, kaba)
    kategori "C"     -> sinif "C"
    kategori "D-YOK" -> sinif "YOK"
Bir kayıtta ZATEN `sinif` alanı varsa (bölge oturumu Adım 1'i kendi yapmışsa)
dokunulmaz — o beyan esastır.

F kararı: `denetim/TANINMA-1923-0916.json` varsa, iki tarafın da 1923-10-29'dan
önce Milletler Cemiyeti üyesi olup olmadığına bakılır (ikisi de üyeyse F, değilse
E + hangi tarafın eksik olduğu not düşülür). Dosya yoksa hepsi E'de kalır ve
"F kanıtı bekleniyor" notu düşülür (GERIYE-SARMA-0916.md ADIM 1'in kendi kuralı).

Kullanım:
    py denetim/ARAC-SINIF-DIZINI-0916.py            # yalnız özet basar
    py denetim/ARAC-SINIF-DIZINI-0916.py --yaz       # data/sinir_sinif_dizini.js'i YAZAR

🔴 ÜRETİLMİŞ DOSYA ELLE DÜZENLENMEZ — bu betikle yeniden üretilir.
"""
import glob
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
DENETIM = os.path.join(KOK, "denetim")
TANINMA_YOLU = os.path.join(DENETIM, "TANINMA-1923-0916.json")
CIKTI_YOLU = os.path.join(DATA, "sinir_sinif_dizini.js")


def _js_dosyayi_oku(yol):
    """Bir data/d_sinirlar*.js dosyasını node ile eval eder, window.D_SINIRLAR*
    dizisini {anahtar, kayitlar} olarak JSON döndürür."""
    js = (
        "global.window={};"
        "eval(require('fs').readFileSync(%s,'utf8'));"
        "const anahtarlar=Object.keys(window).filter(k=>k.indexOf('D_SINIRLAR')===0);"
        "if(anahtarlar.length!==1){"
        "process.stderr.write('BEKLENMEYEN ANAHTAR SAYISI ('+anahtarlar.length+'): '+anahtarlar.join(','));"
        "process.exit(2);}"
        "process.stdout.write(JSON.stringify({anahtar:anahtarlar[0],kayitlar:window[anahtarlar[0]]}));"
        % json.dumps(yol)
    )
    c = subprocess.run(["node", "-e", js], capture_output=True,
                        encoding="utf-8", timeout=90)
    if c.returncode != 0:
        raise RuntimeError("%s okunamadı: %s" % (yol, c.stderr.strip()))
    return json.loads(c.stdout)


def _taninma_yukle():
    """TANINMA-1923-0916.json varsa, 1923-10-29'dan önce MC üyesi olan id
    kümesini döndürür. Dosya yoksa None (çağıran E'ye düşer, notla)."""
    if not os.path.exists(TANINMA_YOLU):
        return None
    with open(TANINMA_YOLU, encoding="utf-8") as f:
        d = json.load(f)
    taninan = set()
    for r in d.get("mc_uyeleri_1923_10_29", []):
        if (r.get("uyelik_tarihi") or "9999-99-99") <= "1923-10-29":
            taninan.add(r["id"])
    return taninan


def _dayanak_kisa(kayit):
    dayanak = kayit.get("dayanak") or []
    if dayanak:
        ilk = dayanak[0]
        parca = [ilk.get("ad") or "?"]
        if ilk.get("madde"):
            # kaynak dosyalarda "madde" alanı zaten kendi "md./Ek/madde no" önekini
            # taşıyor (ör. "md. 2/1", "Ek 1", "bulunamadı") — ikinci bir önek EKLEME
            parca.append(str(ilk["madde"]))
        if ilk.get("tarih"):
            parca.append("(" + ilk["tarih"] + ")")
        return " ".join(parca)
    degisti = kayit.get("degisti") or {}
    if degisti.get("kaynak"):
        return degisti["kaynak"] + " (dayanak dizisi yok)"
    return "bulunamadı"


def _sinif_ata(kayit, taninan):
    """(sinif, sinif_not) döndürür. taninan=None ise TANINMA tablosu yok demektir."""
    if kayit.get("sinif"):
        return kayit["sinif"], "kaydın kendi beyanı (bölge oturumu Adım 1'i yazmış)"

    kategori = kayit.get("kategori")
    hat_var = bool(kayit.get("hat"))

    if kategori == "D":
        if taninan is None:
            return "E", "F kanıtı bekleniyor (TANINMA-1923-0916.json yok)"
        taraflar = kayit.get("taraflar") or []
        if len(taraflar) == 2 and all(t in taninan for t in taraflar):
            return "F", "iki taraf da 1923-10-29'da MC üyesi (TANINMA-1923-0916.json)"
        eksik = [t for t in taraflar if t not in taninan] or ["? (taraflar alanı 2 eleman değil)"]
        return "E", "F değil — MC üyesi olmayan/tanınmamış taraf: " + ",".join(eksik)

    if kategori == "fiili":
        if hat_var:
            return "D", "eski 'fiili' + koordinat kesin -> yeni şemada D (FİİLÎ kesin sınır)"
        return "YOK", "fiili ama koordinat yok (kaba) -> A/B görünümüne düşer"

    if kategori == "C":
        return "C", "kategori C değişmedi"

    if kategori == "D-YOK":
        return "YOK", "kategori D-YOK: bugünkü çizgi 1923'ü göstermiyor"

    return "YOK", "bilinmeyen/eksik kategori: %r" % (kategori,)


def olustur():
    dosyalar = sorted(glob.glob(os.path.join(DATA, "d_sinirlar*.js")))
    taninan = _taninma_yukle()
    kayitlar = []
    ozet = {}
    for yol in dosyalar:
        rel = os.path.relpath(yol, KOK).replace("\\", "/")
        try:
            sonuc = _js_dosyayi_oku(yol)
        except RuntimeError as e:
            print("UYARI: %s" % e, file=sys.stderr)
            continue
        for kayit in sonuc["kayitlar"]:
            sinif, not_ = _sinif_ata(kayit, taninan)
            satir = {
                "id": kayit.get("id"),
                "taraflar": kayit.get("taraflar"),
                "f": kayit.get("f"),
                "t": kayit.get("t"),
                "sinif": sinif,
                "sinif_not": not_,
                "dayanak_kisa": _dayanak_kisa(kayit),
                "kaynak_dosya": rel,
                "kategori_eski": kayit.get("kategori"),
            }
            kayitlar.append(satir)
            ozet[sinif] = ozet.get(sinif, 0) + 1
    return kayitlar, ozet, dosyalar, taninan is not None


def yaz(kayitlar):
    satirlar = [json.dumps(k, ensure_ascii=False) for k in kayitlar]
    icerik = (
        "// -*- coding: utf-8 -*-\n"
        "// data/sinir_sinif_dizini.js — TÜM data/d_sinirlar*.js dosyalarının SINIF DİZİNİ\n"
        "// Üretici: denetim/ARAC-SINIF-DIZINI-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret:\n"
        "//   py denetim/ARAC-SINIF-DIZINI-0916.py --yaz\n"
        "// Şema: oturumlar/GORUNUM-ABCD-0916.md üst bölüm (A-F ALTI KADEME)\n"
        "// Eşleme: kategori D -> E (F kanıtı TANINMA-1923-0916.json'dan) ·\n"
        "//         fiili+koordinat -> D · C -> C · D-YOK -> YOK\n"
        "// Alanlar: id · taraflar · f · t · sinif · sinif_not (nasıl karar verildi) ·\n"
        "//          dayanak_kisa · kaynak_dosya · kategori_eski (üretici dosyadaki eski alan)\n"
        "\n"
        "window.SINIR_SINIF_DIZINI = [\n"
        + ",\n".join(satirlar)
        + "\n];\n"
    )
    with open(CIKTI_YOLU, "w", encoding="utf-8", newline="\n") as f:
        f.write(icerik)


def main():
    kayitlar, ozet, dosyalar, taninma_var = olustur()
    print("okunan dosya: %d" % len(dosyalar))
    for d in dosyalar:
        print("  ", os.path.relpath(d, KOK))
    print("toplam kayıt: %d" % len(kayitlar))
    print("TANINMA-1923-0916.json bulundu: %s" % taninma_var)
    for sinif in ("F", "E", "D", "C", "YOK"):
        print("  %s: %d" % (sinif, ozet.get(sinif, 0)))
    if "--yaz" in sys.argv:
        yaz(kayitlar)
        print("yazıldı: %s" % os.path.relpath(CIKTI_YOLU, KOK))
    else:
        print("(--yaz verilmedi, dosya YAZILMADI — yalnız özet)")


if __name__ == "__main__":
    main()
