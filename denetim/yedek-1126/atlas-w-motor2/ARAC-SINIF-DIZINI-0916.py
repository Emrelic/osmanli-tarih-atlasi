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

F kararı (1.MURAT M-4129, 16 Eylül 2026 22:12 — GÖRÜNÜM ölçütü): bir "D" (eski
kategori) kaydı, KENDİ `f` (yürürlük) TARİHİNDE iki tarafın da uluslararası
tanınmış olmasıyla F olur:
    f >= 1920-01-10 (Cemiyet Misakı yürürlüğe girdi) -> taraf, o tarihte zaten
        Milletler Cemiyeti üyesiyse (`uyelik_tarihi <= f`) tanınmış sayılır
    f <  1920-01-10 -> Cemiyet henüz yok; büyük devletlerce tanınma gerekir ama
        TANINMA-1923-0916.json bu tarih aralığı için veri TAŞIMIYOR (yalnız
        MC üyelik tarihleri + ~15 özel devletin 1920-sonrası notları var)
        -> "ölçülemedi", TEMKİNLE E'de kalır (uydurulmaz)
İki taraftan biri MC-dışı listede AÇIKÇA tanınmadığı yazılıysa (ör. SSCB,
Türkiye 1923-10-29'da) da E'de kalır, gerekçesiyle. Dosya yoksa (TANINMA
tablosu yok) hepsi E'de kalır, "F kanıtı bekleniyor" notuyla.
🔴 Bu, önceki sürümün hatasını düzeltir: eskisi tanınmayı dizinin SABİT
1923-10-29 anına göre ölçüyordu — bir sınırın f'si MC kuruluşundan önce olsa
bile, taraflar YILLAR SONRA üye olunca F sayılıyordu. Doğru soru "bu sınır
KENDİ YÜRÜRLÜK ANINDA iki tanınmış devlet arasında mıydı" sorusudur.

Kayıtta ZATEN `sinif` alanı varsa (bölge oturumu Adım 1'i kendi yazmışsa) o
BEYAN esastır, dokunulmaz — çıktıda `sinif_kaynak:"veri"` ile işaretlenir.
Bu betiğin ürettiği her satır `sinif_kaynak:"turetildi"` taşır.

Kullanım:
    py denetim/ARAC-SINIF-DIZINI-0916.py            # yalnız özet basar
    py denetim/ARAC-SINIF-DIZINI-0916.py --yaz       # data/sinir_sinif_dizini.js'i YAZAR

🔴 ÜRETİLMİŞ DOSYA ELLE DÜZENLENMEZ — bu betikle yeniden üretilir.
🔴 Bölge dosyalarına (`data/d_sinirlar*.js`) YAZILMAZ — yalnız bu dizin üretilir
   (1.MURAT M-4129: "Bölge dosyalarına YAZMA").
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

# Milletler Cemiyeti Misakı'nın yürürlüğe girdiği gün (ilk 'kurucu' uyelik_tarihi,
# TANINMA-1923-0916.json'daki en erken tarih). Bundan ÖNCEKİ f tarihleri için MC
# üyeliği ölçütü ANLAMSIZDIR (Cemiyet henüz yok) — ölçülemedi'ye düşülür.
MC_KURULUS_TARIHI = "1920-01-10"


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
    """TANINMA-1923-0916.json'u (uyelik_tarihi_by_id, mc_disi_aciklama_by_id)
    olarak döndürür. Dosya yoksa (None, None) — çağıran E'ye düşer, notla."""
    if not os.path.exists(TANINMA_YOLU):
        return None, None
    with open(TANINMA_YOLU, encoding="utf-8") as f:
        d = json.load(f)
    uyelik = {}
    for r in d.get("mc_uyeleri_1923_10_29", []):
        if r.get("id") and r.get("uyelik_tarihi"):
            uyelik[r["id"]] = r["uyelik_tarihi"]
    mc_disi = {}
    for r in d.get("mc_uyesi_olmayan_onemli_devletler", []):
        if r.get("id"):
            mc_disi[r["id"]] = r.get("aciklama", "")
    return uyelik, mc_disi


def _tanindi_mi(taraf_id, f_tarihi, uyelik, mc_disi):
    """(durum, kaynak) döndürür. durum: True=tanındı · False=tanınmadığı bilinen
    · None=ölçülemedi (veri yok)."""
    if f_tarihi < MC_KURULUS_TARIHI:
        return None, ("1920 öncesi (Cemiyet henüz yok); büyük devlet tanıma "
                       "verisi TANINMA-1923-0916.json'da yok")
    uyelik_tarihi = uyelik.get(taraf_id)
    if uyelik_tarihi:
        if uyelik_tarihi <= f_tarihi:
            return True, "MC üyesi (%s)" % uyelik_tarihi
        return False, "MC üyeliği f'den SONRA (%s)" % uyelik_tarihi
    if taraf_id in mc_disi:
        return False, "MC-dışı: " + mc_disi[taraf_id][:140]
    return None, "id TANINMA-1923-0916.json'da yok — ölçülemedi"


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


def _sinif_ata(kayit, uyelik, mc_disi):
    """(sinif, sinif_not, sinif_kaynak) döndürür. uyelik=None ise TANINMA tablosu
    yok demektir.

    🔴 M-4129: "E kaydı, F ölçütünü karşılıyorsa dizinde F" — yani bölge
    oturumunun kendi yazdığı `sinif:"E"` beyanı SABİT değildir, F testinden
    GEÇER. Yalnız "D"/"C"/"F"/"YOK" beyanları olduğu gibi bırakılır (E/F
    merdiveninin dışındalar ya da zaten tavandalar)."""
    beyan = kayit.get("sinif")
    kategori = kayit.get("kategori")
    hat_var = bool(kayit.get("hat"))

    e_adayi = (beyan == "E") or (not beyan and kategori == "D")
    if e_adayi:
        if uyelik is None:
            kaynak = "veri" if beyan else "turetildi"
            return "E", "F kanıtı bekleniyor (TANINMA-1923-0916.json yok)", kaynak
        taraflar = kayit.get("taraflar") or []
        f_tarihi = kayit.get("f") or "9999-99-99"
        if len(taraflar) != 2:
            kaynak = "veri" if beyan else "turetildi"
            return "E", "taraflar alanı 2 eleman değil, F ölçülemedi", kaynak
        sonuclar = [(t,) + _tanindi_mi(t, f_tarihi, uyelik, mc_disi) for t in taraflar]
        detay = "; ".join("%s: %s" % (t, k) for t, _, k in sonuclar)
        if all(s[1] is True for s in sonuclar):
            return "F", "f=%s tarihinde iki taraf da tanınmış — %s" % (f_tarihi, detay), "turetildi"
        kaynak = "veri" if beyan else "turetildi"
        return "E", "F değil (f=%s) — %s" % (f_tarihi, detay), kaynak

    if beyan:
        return beyan, "kaydın kendi beyanı (bölge oturumu Adım 1'i yazmış)", "veri"

    if kategori == "fiili":
        if hat_var:
            return "D", "eski 'fiili' + koordinat kesin -> yeni şemada D (FİİLÎ kesin sınır)", "turetildi"
        return "YOK", "fiili ama koordinat yok (kaba) -> A/B görünümüne düşer", "turetildi"

    if kategori == "C":
        return "C", "kategori C değişmedi", "turetildi"

    if kategori == "D-YOK":
        return "YOK", "kategori D-YOK: bugünkü çizgi 1923'ü göstermiyor", "turetildi"

    return "YOK", "bilinmeyen/eksik kategori: %r" % (kategori,), "turetildi"


def olustur():
    dosyalar = sorted(glob.glob(os.path.join(DATA, "d_sinirlar*.js")))
    uyelik, mc_disi = _taninma_yukle()
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
            sinif, not_, sinif_kaynak = _sinif_ata(kayit, uyelik, mc_disi)
            satir = {
                "id": kayit.get("id"),
                "taraflar": kayit.get("taraflar"),
                "f": kayit.get("f"),
                "t": kayit.get("t"),
                "sinif": sinif,
                "sinif_kaynak": sinif_kaynak,
                "sinif_not": not_,
                "dayanak_kisa": _dayanak_kisa(kayit),
                "kaynak_dosya": rel,
                "kategori_eski": kayit.get("kategori"),
            }
            kayitlar.append(satir)
            ozet[sinif] = ozet.get(sinif, 0) + 1
    return kayitlar, ozet, dosyalar, uyelik is not None


def yaz(kayitlar):
    satirlar = [json.dumps(k, ensure_ascii=False) for k in kayitlar]
    icerik = (
        "// -*- coding: utf-8 -*-\n"
        "// data/sinir_sinif_dizini.js — TÜM data/d_sinirlar*.js dosyalarının SINIF DİZİNİ\n"
        "// Üretici: denetim/ARAC-SINIF-DIZINI-0916.py — 🔴 ELLE DÜZENLEME, yeniden üret:\n"
        "//   py denetim/ARAC-SINIF-DIZINI-0916.py --yaz\n"
        "// Şema: oturumlar/GORUNUM-ABCD-0916.md üst bölüm (A-F ALTI KADEME)\n"
        "// Eşleme: kategori D -> E, kaydın KENDİ f tarihinde iki taraf da\n"
        "//         TANINMA-1923-0916.json'a göre tanınmışsa F (bkz. betiğin docstring'i) ·\n"
        "//         fiili+koordinat -> D · C -> C · D-YOK -> YOK\n"
        "// Alanlar: id · taraflar · f · t · sinif · sinif_kaynak ('veri': kaydın kendi\n"
        "//          beyanı | 'turetildi': bu betik hesapladı) · sinif_not (nasıl karar\n"
        "//          verildi) · dayanak_kisa · kaynak_dosya · kategori_eski (eski alan)\n"
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
