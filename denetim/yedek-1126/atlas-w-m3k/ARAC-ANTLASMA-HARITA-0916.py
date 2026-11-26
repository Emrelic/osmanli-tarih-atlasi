# -*- coding: utf-8 -*-
"""
D-GEOARAC — ANTLAŞMA HARİTASI VERİ ALETİ (DALGA-0055 §B).

Görev: her antlaşma için (tarih ± pencere, taraflar) yerleşim dönemlerinden
(data/yerlesimler*.js) EL DEĞİŞTİREN yerleri çıkarmak. Önce Osmanlı
antlaşmaları — kaynak: data/savaslar.js `window.ANTLASMALAR` (41 kayıt,
hepsi taraf+tarih içeriyor, en yoğun/en güvenilir küme).

🔴 KENDİ JS AYRIŞTIRICIMI YAZMADIM (D023) — arac/girdi.py'nin ÜRETİMDE
KULLANILAN `yukle()`/`oku_devletler()` fonksiyonlarını olduğu gibi çağırıyorum.

YÖNTEM:
  1. Her yerleşim için d:/v:/s: dizilerini TEK bir sahiplik zaman çizelgesine
     birleştir (d -> "osmanli", v -> period.kid, s -> period.d).
  2. Ardışık iki dönem arasında SAHİP DEĞİŞİYORSA bunu bir "el değiştirme
     olayı" say: tarih = sonraki dönemin f'si.
  3. Her ANTLASMALAR kaydı için: tarih ± PENCERE_GUN içinde, İKİ ucundan biri
     "taraf[0]" (osmanlı/tbmm-turkiye) olan ve öteki ucu da o antlaşmanın
     taraf listesinde geçen olayları eşleştir. (Yalnız "ikisi de tarafta"
     değil, "biri EV SAHİBİ" şartı da aranır — yoksa ilgisiz bir üçüncü
     taraf-üçüncü taraf değişimi yanlışlıkla antlaşmaya bağlanabilir.)
  4. `y:` alanı "antlasma" ise ek güven etiketi ("y_antlasma": true) eklenir
     ama şart DEĞİLDİR (çoğu s:/v: kaydında bu alan hiç yok).
  5. Eşleşme YOKSA kayıt `bulunamadi: true` ile boş listelenir — UYDURULMAZ.

ÇIKTI: denetim/_ANTLASMA-HARITA-CIKTI-0916.json (İNCELEME dosyası — henüz
data/antlasma_haritalari.js'e YAZILMADI, D-KATMAN'la şema mutabakatı
tahtadan bekleniyor, DALGA-0055.md §B notu).
"""
import io
import json
import os
import sys
from datetime import date, timedelta

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402  — mevcut üretim ayrıştırıcısı (D023)

PENCERE_GUN = 60
CIKTI = os.path.join(KOK, "denetim", "_ANTLASMA-HARITA-CIKTI-0916.json")


def gun_ayir(s):
    """'YYYY-MM-DD' ya da 'YYYY-MM' ya da 'YYYY' -> date (eksikler 01'e tamamlanır)."""
    parca = s.split("-")
    y = int(parca[0])
    ay = int(parca[1]) if len(parca) > 1 else 1
    gun = int(parca[2]) if len(parca) > 2 else 1
    return date(y, ay, gun)


def zaman_cizelgesi(yerlesim):
    """d:/v:/s: dizilerini TEK sahiplik listesine birleştirir: [(f, t, sahip, y)]."""
    cizelge = []
    for p in yerlesim.get("d") or []:
        cizelge.append((p["f"], p["t"], "osmanli", p.get("y")))
    for p in yerlesim.get("v") or []:
        cizelge.append((p["f"], p["t"], p.get("kid"), p.get("y")))
    for p in yerlesim.get("s") or []:
        cizelge.append((p["f"], p["t"], p.get("d"), p.get("y")))
    cizelge = [c for c in cizelge if c[2]]  # sahipsiz/kid'siz kayıt atla
    cizelge.sort(key=lambda c: c[0])
    return cizelge


def el_degistirme_olaylari(yerlesim):
    """Ardışık dönemler arasında sahip değişimi -> (tarih, onceki, sonraki, y)."""
    cizelge = zaman_cizelgesi(yerlesim)
    olaylar = []
    for i in range(1, len(cizelge)):
        onceki = cizelge[i - 1]
        sonraki = cizelge[i]
        if onceki[2] == sonraki[2]:
            continue
        # ardışıklık: onceki.t ile sonraki.f arasında BÜYÜK boşluk varsa
        # (>3 yıl) bu iki dönem muhtemelen İLİŞKİSİZ — atla (sahipsiz ara
        # dönem, D020 "sahipsizliğin iki cinsi").
        try:
            bosluk = (gun_ayir(sonraki[0]) - gun_ayir(onceki[1])).days
        except Exception:
            bosluk = 0
        if abs(bosluk) > 3 * 365:
            continue
        olaylar.append(
            {
                "tarih": sonraki[0],
                "onceki_sahip": onceki[2],
                "sonraki_sahip": sonraki[2],
                "y_etiketi": sonraki[3],
            }
        )
    return olaylar


def _eslesen_kapanisi_bul(js, acilis_idx, ac="[", kapa="]"):
    """`ac` konumundan başlayıp DİZE-FARKINDA derinlik sayarak eşleşen `kapa`
    indeksini döner. savaslar.js'te ANTLASMALAR son dizi DEĞİL (arkasında
    SEFERLER vb. var) — girdi._cevir'in "dosyanın son ']'i" varsayımı burada
    tutmuyor, bu yüzden doğru sınırı KENDİMİZ buluyoruz (JSON'a ÇEVİRME işini
    yine _cevir yapıyor, D023 ihlal edilmiyor — yalnız SINIR bulma eklendi)."""
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
    raise ValueError("eşleşen kapanış bulunamadı ('%s' için)" % ac)


def antlasmalari_oku():
    """data/savaslar.js -> window.ANTLASMALAR (ana dizi + iki `.push(...)`
    bloğu) TEK dizi olarak, mevcut ayrıştırıcıyla (_cevir)."""
    yol = os.path.join(KOK, "data", "savaslar.js")
    js = io.open(yol, encoding="utf-8").read()

    anahtar = "window.ANTLASMALAR = "
    ana_baslangic = js.index(anahtar) + len(anahtar)
    ana_son = _eslesen_kapanisi_bul(js, ana_baslangic, "[", "]")
    ana_govde = js[ana_baslangic + 1 : ana_son]  # köşeli parantezlerin İÇİ

    parca_govdeler = [ana_govde]
    aranan = ana_son
    while True:
        idx = js.find("window.ANTLASMALAR.push(", aranan)
        if idx < 0:
            break
        paren_ac = js.index("(", idx)
        paren_kapa = _eslesen_kapanisi_bul(js, paren_ac, "(", ")")
        parca_govdeler.append(js[paren_ac + 1 : paren_kapa])
        aranan = paren_kapa

    # üç gövdeyi tek bir dizi içine birleştirip _cevir'e VEREbileceği (son
    # ']'nin dosyanın gerçek sonu olduğu) biçimde yeniden yazıyoruz.
    birlesik = "window.ANTLASMALAR = [\n" + ",\n".join(parca_govdeler) + "\n];"
    return girdi._cevir(birlesik, "ANTLASMALAR")


def main():
    print("yükleniyor: yerleşimler...")
    Y = girdi.yukle(sessiz=True)
    print("  %d yerleşim" % len(Y))
    print("yükleniyor: ANTLASMALAR...")
    antlasmalar = antlasmalari_oku()
    print("  %d antlaşma kaydı" % len(antlasmalar))

    print("yerleşim olayları çıkarılıyor...")
    tum_olaylar = []  # (tarih:date, onceki, sonraki, yerlesim_ad, lat, lon, tur, y_etiketi)
    for y in Y:
        for o in el_degistirme_olaylari(y):
            try:
                d = gun_ayir(o["tarih"])
            except Exception:
                continue
            tum_olaylar.append(
                {
                    "tarih_str": o["tarih"],
                    "tarih": d,
                    "onceki": o["onceki_sahip"],
                    "sonraki": o["sonraki_sahip"],
                    "ad": y["ad"],
                    "lat": y.get("lat"),
                    "lon": y.get("lon"),
                    "tur": y.get("tur"),
                    "y_etiketi": o["y_etiketi"],
                }
            )
    print("  %d el değiştirme olayı (bütün veri, bütün tarihler)" % len(tum_olaylar))

    sonuclar = []
    bulunamadi_sayisi = 0
    toplam_eslesen_yerlesim = 0

    for a in antlasmalar:
        try:
            merkez = gun_ayir(a["t"])
        except Exception:
            sonuclar.append(
                {
                    "id": a.get("ad"),
                    "tarih": a.get("t"),
                    "bulunamadi": True,
                    "sebep": "antlaşma tarihi ayrıştırılamadı",
                }
            )
            continue
        alt = merkez - timedelta(days=PENCERE_GUN)
        ust = merkez + timedelta(days=PENCERE_GUN)
        taraf = a.get("taraf") or []
        if not taraf:
            sonuclar.append(
                {
                    "id": a.get("ad"),
                    "tarih": a.get("t"),
                    "bulunamadi": True,
                    "sebep": "ANTLASMALAR kaydında taraf listesi yok",
                }
            )
            continue
        ev_sahibi = taraf[0]  # ANTLASMALAR kuralı: ilk taraf hep osmanli/tbmm-turkiye
        taraf_kume = set(taraf)

        eslesenler = []
        adaylar = []  # bir uç ev sahibi ama ÖTEKİ UÇ taraf listesinde YOK
        for o in tum_olaylar:
            if not (alt <= o["tarih"] <= ust):
                continue
            onceki, sonraki = o["onceki"], o["sonraki"]
            if onceki == sonraki:
                continue
            if onceki != ev_sahibi and sonraki != ev_sahibi:
                continue  # ikisi de ev sahibi değil -> bu antlaşmayla ilgisiz
            oteki = sonraki if onceki == ev_sahibi else onceki
            kayit_ortak = {
                "yerlesim": o["ad"],
                "tur": o["tur"],
                "lat": o["lat"],
                "lon": o["lon"],
                "onceki_sahip": onceki,
                "sonraki_sahip": sonraki,
                "tarih": o["tarih_str"],
                "gun_farki": (o["tarih"] - merkez).days,
                "y_antlasma_etiketli": o["y_etiketi"] == "antlasma",
            }
            if oteki in taraf_kume:
                eslesenler.append(kayit_ortak)
            else:
                kayit_ortak["oteki_taraf_ANTLASMALAR_disinda"] = oteki
                adaylar.append(kayit_ortak)

        eslesenler.sort(key=lambda e: abs(e["gun_farki"]))
        adaylar.sort(key=lambda e: abs(e["gun_farki"]))
        kayit = {
            "id": a.get("ad"),
            "tarih": a.get("t"),
            "taraf": taraf,
            "taraf_metin": a.get("taraf_metin"),
            "topraklar_metni": a.get("topraklar"),
            "pencere_gun": PENCERE_GUN,
            "eslesen_yerlesim_sayisi": len(eslesenler),
            "eslesen_yerlesimler": eslesenler,
        }
        if adaylar:
            # AYRI alan — KAYNAKSIZ EŞLEŞME DEĞİL, sadece "taraf listesi dar
            # olduğu için otomatik onaylanmadı" diye İŞARETLİ bir ipucu.
            kayit["aday_eslesmeler_taraf_disi"] = adaylar
        if not eslesenler:
            kayit["bulunamadi"] = True
            bulunamadi_sayisi += 1
        else:
            toplam_eslesen_yerlesim += len(eslesenler)
        sonuclar.append(kayit)

    print(
        "bitti: %d antlaşmadan %d'inde EŞLEŞME YOK (bulunamadı), toplam %d "
        "yerleşim eşleşmesi"
        % (len(antlasmalar), bulunamadi_sayisi, toplam_eslesen_yerlesim)
    )

    cikti = {
        "not": (
            "İNCELEME dosyası — data/antlasma_haritalari.js DEĞİL. Şema mutabakatı "
            "D-KATMAN ile tahtadan bekleniyor (DALGA-0055.md §B). Kaynak: "
            "data/savaslar.js window.ANTLASMALAR (41 kayıt) + data/yerlesimler*.js "
            "sahiplik dönemleri. Pencere ±60 gün. Eşleşme şartı: bir uç taraf[0] "
            "(ev sahibi: osmanlı/tbmm-türkiye), öteki uç antlaşmanın taraf "
            "listesinde. Kaynaksız/eşleşmeyen antlaşma 'bulunamadi:true' ile "
            "boş bırakıldı, UYDURULMADI."
        ),
        "pencere_gun": PENCERE_GUN,
        "antlasma_sayisi": len(antlasmalar),
        "bulunamadi_sayisi": bulunamadi_sayisi,
        "toplam_eslesen_yerlesim": toplam_eslesen_yerlesim,
        "antlasmalar": sonuclar,
    }
    with open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=2, default=str)
    print("yazıldı: %s" % CIKTI)
    return cikti


if __name__ == "__main__":
    main()
