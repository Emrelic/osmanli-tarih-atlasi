# -*- coding: utf-8 -*-
"""
D-GEOARAC — EK OKUMA BAŞLIK + İLGİLİLİK DENETİMİ (DALGA-0057 madde 6).

355 `ekokuma_*.js` kaydının 249'unda `baslik:` alanı YOK; arayüz o zaman
`tur:` değerini ("kimdir" gibi) ham gösteriyor. Bu betik:
  1. BÜTÜN `data/ekokuma_*.js` dosyalarındaki kayıtları okur (kendi
     bracket-eşleştiricimle — `arac/girdi.py`nin `_cevir`'i "dosyanın SON
     ']'i" varsayıyor, ekokuma dosyalarının hepsi tek diziyse sorun yok ama
     garanti değil; D023 gereği ÇEVİRME işini yine `_cevir` yapıyor, yalnız
     doğru SINIRI ben buluyorum — ARAC-ANTLASMA-HARITA-0916.py'deki YÖNTEMİN
     AYNISI, tekrar yazılmadı, BURAYA KOPYALANDI çünkü iki betiğin ortak bir
     modülü yok — bkz. rapor "sıradaki iş").
  2. Eksik `baslik:` için içerikten ('metin'in ilk cümlesi / 'kisa' / id)
     bir ÖNERİ üretir — otomatik YAZMAZ, yalnız ÖNERİR (1.MURAT uygular).
  3. Kartın `olay:["YYYY-MM-DD|anahtar", ...]` bağlarının her biri için
     `data/olaylar*.js` + `data/kronoloji*.js`de o tarihte GEÇEN ve
     ANAHTARI gövdesinde taşıyan bir madde var mı diye BAKAR — yapısal bir
     doğrulama, SEMANTİK bir okuma DEĞİL. `olay_uygun` bu yüzden
     `yontem:"yapisal"` etiketiyle yazılır; gerçek konu ilgisi (kartın
     ANLATTIĞI şeyin olayla GERÇEKTEN ilgili olup olmadığı) — insan/LLM
     okumasıyla yalnız ÖNCELİKLİ küme (Belgrad 1717 / Prens Eugen) için
     ayrıca elle doğrulanıp bu çıktının ÜSTÜNE yazıldı (bkz. rapor).

ÇIKTI: denetim/YAMA-0057-BASLIK.json — şema DALGA-0057.md'nin istediği
{ id: {baslik, olay_uygun, not} } biçiminde, ARTI ölçülebilirlik için ekstra
alanlar (bkz. aşağı).
"""
import glob
import io
import json
import os
import re
import sys
import unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402 — mevcut üretim ayrıştırıcısı (_cevir), D023

CIKTI = os.path.join(KOK, "denetim", "YAMA-0057-BASLIK.json")


def _eslesen_kapanisi_bul(js, acilis_idx, ac="[", kapa="]"):
    """ARAC-ANTLASMA-HARITA-0916.py'deki AYNI fonksiyon — dize-farkında
    derinlik sayarak `ac`ın eşleşen `kapa`sını bulur."""
    derinlik = 0
    i = acilis_idx
    n = len(js)
    icinde_dize = False
    kacis = False
    while i < n:
        c = js[i]
        if icinde_dize:
            if kacis:
                kacis = False
            elif c == "\\":
                kacis = True
            elif c == '"':
                icinde_dize = False
        else:
            if c == '"':
                icinde_dize = True
            elif c == ac:
                derinlik += 1
            elif c == kapa:
                derinlik -= 1
                if derinlik == 0:
                    return i
        i += 1
    raise ValueError("eşleşen kapanış bulunamadı")


def _yorumlari_temizle(js):
    """`_cevir` yalnız YORUM-SATIRI OLAN satırları atıyor (`l.strip().
    startswith("//")`) — ne bir KOD satırının SONUNA eklenmiş `// ...`
    yorumunu (ör. `"olay":[...],  // PAKET-A2 13 Eyl: 1834-01-01'de ...`,
    6 ekokuma dosyasında ÖLÇÜLDÜ) ne de `/* ... */` blok yorumlarını (ör.
    bölüm başlığı `/* ═══ I. DENİZ İMPARATORLUĞU ═══ */`, 2 kronoloji
    dosyasında ÖLÇÜLDÜ) temizliyor — ikisi de JSON'u kırıyor. Dize-farkında,
    TEK GEÇİŞTE: bir `"..."` dizesinin İÇİNDEKİ `//` ya da `/*` dokunulmaz;
    blok yorum durumu SATIRLAR ARASI taşınabilir (çok satırlı olabilir)."""
    cikti = []
    icinde_dize = False
    icinde_satir_yorum = False
    icinde_blok_yorum = False
    kacis = False
    i = 0
    n = len(js)
    while i < n:
        c = js[i]
        if icinde_satir_yorum:
            if c == "\n":
                icinde_satir_yorum = False
                cikti.append(c)
            i += 1
            continue
        if icinde_blok_yorum:
            if c == "*" and i + 1 < n and js[i + 1] == "/":
                icinde_blok_yorum = False
                i += 2
                continue
            if c == "\n":
                cikti.append(c)
            i += 1
            continue
        if icinde_dize:
            cikti.append(c)
            if kacis:
                kacis = False
            elif c == "\\":
                kacis = True
            elif c == '"':
                icinde_dize = False
            i += 1
            continue
        # normal kod bölgesi
        if c == '"':
            icinde_dize = True
            cikti.append(c)
            i += 1
        elif c == "/" and i + 1 < n and js[i + 1] == "/":
            icinde_satir_yorum = True
            i += 2
        elif c == "/" and i + 1 < n and js[i + 1] == "*":
            icinde_blok_yorum = True
            i += 2
        else:
            cikti.append(c)
            i += 1
    return "".join(cikti)


def dizileri_oku(yol):
    """Bir dosyadaki BÜTÜN `window.<AD> = [ ... ];` dizilerini (birden
    fazla olabilir) döner: [(ad, [kayıt, ...]), ...]."""
    ham = io.open(yol, encoding="utf-8").read()
    # ÖNCE yorumları temizle — hem dış parantez eşleştirmesi hem `_cevir`
    # yorumun İÇİNDEKİ olası '[' ']' '{' '}' ya da anahtar-benzeri metinden
    # etkilenmesin (8 dosyada ölçülen kusur — bkz. fonksiyon notu).
    js = _yorumlari_temizle(ham)
    sonuc = []
    for m in re.finditer(r"window\.([A-Z][A-Z0-9_]*)\s*=\s*\[", js):
        ad = m.group(1)
        acilis = m.end() - 1  # '[' konumu
        try:
            kapanis = _eslesen_kapanisi_bul(js, acilis, "[", "]")
        except ValueError:
            continue
        parca = "window.%s = %s;" % (ad, js[acilis : kapanis + 1])
        try:
            sonuc.append((ad, girdi._cevir(parca, ad)))
        except Exception as e:
            print("  UYARI: %s içindeki %s çevrilemedi: %s" % (yol, ad, e))
    return sonuc


_DIZE_NORMALLE = str.maketrans(
    "İIıŞşĞğÜüÖöÇç", "iisssgguuoocc"
)


def normal_kelime(s):
    s = (s or "").translate(_DIZE_NORMALLE).lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s


DURAK_KELIME = set(
    """
    ve veya ile bir bu şu o de da ki mi mu mü için gibi kadar ama fakat
    ancak çünkü diye olan olarak sonra önce arasında üzerinde altında
    değil olduğu oldu oluyor idi ise en daha çok az yalnız yalnızca hem
    """.split()
)


def anahtar_kelimeler(*metinler):
    kume = set()
    for m in metinler:
        for kelime in re.findall(r"[A-Za-zÇĞİÖŞÜçğıöşü]{4,}", m or ""):
            n = normal_kelime(kelime)
            if n and n not in DURAK_KELIME:
                kume.add(n)
    return kume


def baslik_uret(kayit):
    """Eksik `baslik:` için içerikten öneri. Öncelik: metin'in ilk
    tanıtım cümlesi > kisa > id'nin okunur hâli."""
    tur = kayit.get("tur", "")
    metin = kayit.get("metin", "") or ""
    kisa = kayit.get("kisa", "") or ""
    kid = kayit.get("id", "")

    if tur == "kimdir":
        # "KİMDİR. Eugène de Savoie-Carignan (Türkçe kaynaklarda Prens
        # Eugen/Ojen, 1663-1736), ..." -> "Eugène de Savoie-Carignan
        # (Türkçe kaynaklarda Prens Eugen/Ojen)" tarzı bir tanıtım
        # cümlesi ara: ilk büyük harfli özel ad + parantez.
        m = re.search(
            r"([A-ZÀ-ÖØ-Ý][\wÀ-ÖØ-öø-ÿ.'\-]*(?:\s+[A-ZÀ-ÖØ-Ý][\wÀ-ÖØ-öø-ÿ.'\-]*){0,4})"
            r"\s*(\([^)]{3,80}\))",
            metin,
        )
        if m:
            aday = (m.group(1) + " " + m.group(2)).strip()
            if len(aday) <= 90:
                return aday, "metin: ilk özel-ad + parantez deseni"
        # id'den türet: "dunya3-prens-eugen-kimdir" -> "Prens Eugen"
        parca = kid.split("-")
        if parca and re.match(r"^[a-z]+\d*$", parca[0]):
            parca = parca[1:]
        if parca and parca[-1] in ("kimdir", "kimdi"):
            parca = parca[:-1]
        ad = " ".join(p.capitalize() for p in parca if p)
        if ad:
            return ad, "id'den türetildi (metin deseni bulunamadı)"

    # kimdir DEĞİLSE ya da yukarıdaki yollar boş döndüyse: kisa'nın ilk
    # cümlesi/tiresi
    if kisa:
        ilk = re.split(r"(?<=[.!?])\s|\s+—\s+", kisa.strip())[0]
        if 8 <= len(ilk) <= 110:
            return ilk.rstrip(" —"), "kisa alanının ilk cümlesi"
        if kisa:
            return kisa[:100].rsplit(" ", 1)[0] + "…", "kisa alanı kırpıldı"

    # son çare: id'nin okunur hâli
    parca = kid.split("-")
    if parca and re.match(r"^[a-z]+\d*$", parca[0]):
        parca = parca[1:]
    ad = " ".join(p.capitalize() for p in parca if p)
    return ad or kid, "id'den türetildi (kisa/metin yok — ZAYIF öneri, elle bakılmalı)"


def olay_uygunlugunu_olc(kayit, olay_indeksi):
    """`olay:["YYYY-MM-DD|anahtar", ...]` bağlarının her biri için tarih+
    anahtar kelime kronolojide GEÇİYOR mu diye YAPISAL bir kontrol.
    Semantik ilgi DEĞİL — bkz. dosya başı docstring."""
    olaylar = kayit.get("olay") or []
    if not olaylar:
        return "hayır", "kayıtta hiç `olay` bağı yok", []
    kart_kelimeler = anahtar_kelimeler(kayit.get("kisa", ""), kayit.get("id", ""))
    detaylar = []
    evet_sayisi = 0
    for bag in olaylar:
        if "|" not in bag:
            # anahtar kelimesiz, YALNIZ tarih — GEÇERLİ bir biçim (şema
            # zorunlu kılmıyor). 🔴 İLK SÜRÜM bunu "biçim hatalı" sayıp
            # HİÇ değerlendirmiyordu — Belgrad 1739/1456-1521 kartlarının
            # ikisi de BU YÜZDEN yanlışlıkla "hayır" çıktı (elle okumada
            # yakalandı, bkz. rapor). Şimdi: tarih kronolojide VAR MI diye
            # bakılır — anahtar yok diye reddedilmez.
            tarih = bag
            adaylar = olay_indeksi.get(tarih, [])
            if adaylar:
                evet_sayisi += 1
                detaylar.append(
                    {
                        "bag": bag,
                        "sonuc": "yalnız tarih (anahtar yok) — o günde madde VAR",
                        "o_gunku_madde_sayisi": len(adaylar),
                    }
                )
            else:
                detaylar.append({"bag": bag, "sonuc": "yalnız tarih — bu günde HİÇ madde yok"})
            continue
        tarih, anahtar = bag.split("|", 1)
        adaylar = olay_indeksi.get(tarih, [])
        anahtar_n = normal_kelime(anahtar)
        eslesen = None
        for b_metni, kaynak_dosya in adaylar:
            if anahtar_n and anahtar_n in normal_kelime(b_metni):
                eslesen = (b_metni, kaynak_dosya)
                break
        if eslesen:
            evet_sayisi += 1
            b_kelimeler = anahtar_kelimeler(eslesen[0])
            ortak = kart_kelimeler & b_kelimeler
            detaylar.append(
                {
                    "bag": bag,
                    "sonuc": "tarih+anahtar bulundu",
                    "kronoloji_govde_ilk80": eslesen[0][:80],
                    "kaynak_dosya": eslesen[1],
                    "ortak_kelime_sayisi": len(ortak),
                }
            )
        elif adaylar:
            detaylar.append(
                {
                    "bag": bag,
                    "sonuc": "tarih var ama anahtar kelime o günün maddelerinde yok",
                    "o_gunku_madde_sayisi": len(adaylar),
                }
            )
        else:
            detaylar.append({"bag": bag, "sonuc": "bu tarihte HİÇ madde yok"})

    if evet_sayisi == len(olaylar):
        return "evet", "bağların hepsi (tarih+anahtar) kronolojide doğrulandı", detaylar
    if evet_sayisi > 0:
        return "kısmen", "%d/%d bağ doğrulandı" % (evet_sayisi, len(olaylar)), detaylar
    return "hayır", "hiçbir bağ (tarih+anahtar) kronolojide bulunamadı", detaylar


def main():
    print("ek okuma dosyaları okunuyor...")
    kayitlar = []
    for yol in sorted(glob.glob(os.path.join(DATA, "ekokuma_*.js"))):
        for ad, liste in dizileri_oku(yol):
            if not ad.startswith("EKOKUMA"):
                continue
            for k in liste:
                k["_dosya"] = os.path.basename(yol)
                k["_degisken"] = ad
                kayitlar.append(k)
    print("  %d kayıt (window.EKOKUMA_* dizilerinin toplamı)" % len(kayitlar))

    print("kronoloji dosyaları okunuyor (olay_uygun kontrolü için)...")
    olay_indeksi = {}
    dosya_sayisi = 0
    for yol in sorted(
        glob.glob(os.path.join(DATA, "olaylar*.js")) + glob.glob(os.path.join(DATA, "kronoloji*.js"))
    ):
        dosya_sayisi += 1
        for ad, liste in dizileri_oku(yol):
            for o in liste:
                t = o.get("t")
                b = o.get("b")
                if not t or not b:
                    continue
                gun = t[:10] if len(t) >= 10 else t
                olay_indeksi.setdefault(gun, []).append((b, os.path.basename(yol)))
    print(
        "  %d dosya tarandı, %d benzersiz gün, toplam %d madde"
        % (dosya_sayisi, len(olay_indeksi), sum(len(v) for v in olay_indeksi.values()))
    )

    baslikli = sum(1 for k in kayitlar if k.get("baslik"))
    print(
        "eksik başlık: %d / %d (mevcut ölçüm 249/355 ile karşılaştır)"
        % (len(kayitlar) - baslikli, len(kayitlar))
    )

    sonuc = {}
    for k in kayitlar:
        kid = k["id"]
        mevcut_baslik = k.get("baslik")
        if mevcut_baslik:
            baslik_kaydi = {
                "baslik": mevcut_baslik,
                "eylem": "DOKUNMA — zaten var",
            }
            # basit bir sağlık kontrolü: başlık soru biçiminde mi ("kimdir?"
            # ya da tur adının aynısı)
            if mevcut_baslik.strip().lower() in (k.get("tur", "").lower(), "kimdir?"):
                baslik_kaydi["uyari"] = "başlık tur etiketiyle AYNI görünüyor, gözden geçir"
        else:
            oneri, yontem = baslik_uret(k)
            baslik_kaydi = {"baslik": oneri, "eylem": "ÖNERİ — baslik: alanı YOK", "yontem": yontem}

        olay_uygun, gerekce, detay = olay_uygunlugunu_olc(k, olay_indeksi)

        sonuc[kid] = {
            "baslik": baslik_kaydi["baslik"],
            "baslik_eylem": baslik_kaydi["eylem"],
            "baslik_yontem": baslik_kaydi.get("yontem"),
            "baslik_uyari": baslik_kaydi.get("uyari"),
            "olay_uygun": olay_uygun,
            "olay_uygun_yontem": "yapisal (tarih+anahtar kelime kontrolü, SEMANTİK okuma değil)",
            "not": gerekce,
            "olay_detay": detay,
            "_dosya": k["_dosya"],
            "_tur": k.get("tur"),
        }

    with open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(sonuc, f, ensure_ascii=False, indent=2)
    print("yazıldı: %s (%d kayıt)" % (CIKTI, len(sonuc)))

    eksik = sum(1 for v in sonuc.values() if v["baslik_eylem"].startswith("ÖNERİ"))
    print("  öneri üretilen (eksik başlıklı): %d" % eksik)
    dagilim = {}
    for v in sonuc.values():
        dagilim[v["olay_uygun"]] = dagilim.get(v["olay_uygun"], 0) + 1
    print("  olay_uygun dağılımı:", dagilim)
    return sonuc


if __name__ == "__main__":
    main()
