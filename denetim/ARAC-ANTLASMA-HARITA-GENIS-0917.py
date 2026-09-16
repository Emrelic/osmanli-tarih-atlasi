# -*- coding: utf-8 -*-
"""
D-GEOARAC — antlaşma haritası aletinin GENİŞLETİLMİŞ sürümü (DALGA-0058,
1.MURAT'ın isteği: "400 maddeye genişlet").

ARAC-ANTLASMA-HARITA-0916.py yalnız `window.ANTLASMALAR` (41, yapılandırılmış
`taraf` alanlı) kaydını işliyordu. Bu betik AYNI çekirdek yöntemi (yerleşim
sahiplik zaman çizelgesi + el değiştirme olayı + ±60 gün pencere — D023,
ARAC-ANTLASMA-HARITA-0916.py'den birebir kopyalandı, iki betiğin ortak bir
modülü yok) `data/olaylar*.js` + `data/kronoloji*.js` içindeki BÜTÜN
"antlaşma/barış/mütareke/sözleşme" başlıklı maddelere (~400) genişletir.

🔴 TEMEL FARK VE RİSK: bu ~400 maddenin ANTLASMALAR gibi yapılandırılmış bir
`taraf` alanı YOK. Taraf listesi `data/devletler.js`teki devlet adlarının
madde metninde (b:) GEÇİP GEÇMEDİĞİNE bakılarak ÇIKARILIYOR — bu YAPISAL
DEĞİL, bir AD-EŞLEŞTİRME SEZGİSİDİR ve ANTLASMALAR'daki gibi güvenilir
DEĞİLDİR. D-KATMAN'ın Pasarofça turunda (M-4190) tam bu yöntemle üretilen
bir eşleşmeyi (Ayamavra) YANLIŞ bulup elediği zaten ÖLÇÜLDÜ — bu yüzden bu
betiğin çıktısı "taraf_yontemi":"ad-eslestirme (dogrulanmadi)" etiketiyle
işaretlenir ve KAYNAK OLARAK DEĞİL ADAY OLARAK sunulur; uygulayan taraf
(1.MURAT/D-KATMAN) her maddeyi ANTLASMALAR turunda olduğu gibi elden
geçirmelidir.

ÇIKTI: denetim/_ANTLASMA-HARITA-GENIS-CIKTI-0917.json
"""
import glob
import io
import json
import os
import re
import sys
import unicodedata
from datetime import date, timedelta

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi  # noqa: E402 — mevcut üretim ayrıştırıcısı (D023)

# ARAC-EKOKUMA-BASLIK-0916.py'nin dize-farkında yorum temizleyicisini VE
# çok-dizili dosya okuyucusunu TEKRAR YAZMADAN kullan (D023) — o betik zaten
# 8 dosyanın (satır-sonu/blok yorumu yüzünden) HİÇ okunamadığını ölçüp
# düzeltmişti; burada aynı hatayı tekrarlamamak için import edildi.
import importlib.util as _ilu

_spec = _ilu.spec_from_file_location(
    "ekokuma_baslik_araci", os.path.join(KOK, "denetim", "ARAC-EKOKUMA-BASLIK-0916.py")
)
_ekb = _ilu.module_from_spec(_spec)
_spec.loader.exec_module(_ekb)

PENCERE_GUN = 60
CIKTI = os.path.join(KOK, "denetim", "_ANTLASMA-HARITA-GENIS-CIKTI-0917.json")

ANTLASMA_ANAHTAR = re.compile(
    r"antla[sş]ma|bar[iı][sş]|m[uü]tareke|s[oö]zle[sş]me|protokol|konvansiyon",
    re.IGNORECASE,
)


def gun_ayir(s):
    parca = s.split("-")
    y = int(parca[0])
    ay = int(parca[1]) if len(parca) > 1 else 1
    gun = int(parca[2]) if len(parca) > 2 else 1
    return date(y, ay, gun)


_DIZE_NORMALLE = str.maketrans("İIıŞşĞğÜüÖöÇç", "iisssgguuoocc")


def normal_kelime(s):
    s = (s or "").translate(_DIZE_NORMALLE).lower()
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if not unicodedata.combining(c))


def zaman_cizelgesi(yerlesim):
    cizelge = []
    for p in yerlesim.get("d") or []:
        cizelge.append((p["f"], p["t"], "osmanli", p.get("y")))
    for p in yerlesim.get("v") or []:
        cizelge.append((p["f"], p["t"], p.get("kid"), p.get("y")))
    for p in yerlesim.get("s") or []:
        cizelge.append((p["f"], p["t"], p.get("d"), p.get("y")))
    cizelge = [c for c in cizelge if c[2]]
    cizelge.sort(key=lambda c: c[0])
    return cizelge


def el_degistirme_olaylari(yerlesim):
    cizelge = zaman_cizelgesi(yerlesim)
    olaylar = []
    for i in range(1, len(cizelge)):
        onceki, sonraki = cizelge[i - 1], cizelge[i]
        if onceki[2] == sonraki[2]:
            continue
        try:
            bosluk = (gun_ayir(sonraki[0]) - gun_ayir(onceki[1])).days
        except Exception:
            bosluk = 0
        if abs(bosluk) > 3 * 365:
            continue
        olaylar.append(
            {"tarih": sonraki[0], "onceki_sahip": onceki[2], "sonraki_sahip": sonraki[2], "y_etiketi": sonraki[3]}
        )
    return olaylar


def devlet_ad_sozlugu():
    """devletler.js -> [(kod, kisa_ad_normal, tam_ad), ...] — eşleştirme için
    KISA AD: parantez öncesi metin, sondaki genel tür sözcükleri (Devleti,
    Sultanlığı, Hanedanı, İmparatorluğu, Krallığı, Cumhuriyeti, Prensliği,
    Hanlığı, Beyliği) atılır. 4 karakterden KISA kısa adlar (yanlış eşleşme
    riski çok yüksek) elenir."""
    D = girdi.oku_devletler()
    GENEL_SUFFIX = (
        "devleti", "sultanligi", "hanedani", "imparatorlugu", "kralligi",
        "cumhuriyeti", "prensligi", "hanligi", "beyligi", "emirligi",
        "yonetimi", "idaresi", "eyaleti",
    )
    sozluk = []
    for d in D:
        ad = d.get("ad") or ""
        kisa = ad.split("(")[0].strip()
        kelimeler = kisa.split()
        while kelimeler and normal_kelime(kelimeler[-1]) in GENEL_SUFFIX:
            kelimeler.pop()
        kisa2 = " ".join(kelimeler).strip()
        if len(normal_kelime(kisa2)) >= 4:
            sozluk.append((d["id"], normal_kelime(kisa2), ad))
    return sozluk


def taraflari_cikar(metin, ad_sozlugu, ev_sahibi_kod):
    n = normal_kelime(metin)
    bulunan = set()
    for kod, kisa_n, tam_ad in ad_sozlugu:
        if kod == ev_sahibi_kod:
            continue
        # kelime sınırı yaklaşık: normalize edilmiş metinde alt-dizgi ara,
        # bitişik harf değilse (Türkçe ek/apostrof problemi zaten kelime
        # kökünü aradığımız için sorun değil — "avusturya'ya" içinde
        # "avusturya" alt-dizgi olarak GEÇER)
        if kisa_n and kisa_n in n:
            bulunan.add(kod)
    return bulunan


def main():
    print("yerleşimler yükleniyor...")
    Y = girdi.yukle(sessiz=True)
    print("  %d yerleşim" % len(Y))

    print("devlet ad sözlüğü kuruluyor...")
    ad_sozlugu = devlet_ad_sozlugu()
    print("  %d devlet (kısa ad >=4 karakter)" % len(ad_sozlugu))

    print("el değiştirme olayları çıkarılıyor...")
    tum_olaylar = []
    for y in Y:
        for o in el_degistirme_olaylari(y):
            try:
                d_ = gun_ayir(o["tarih"])
            except Exception:
                continue
            tum_olaylar.append(
                {
                    "tarih_str": o["tarih"], "tarih": d_, "onceki": o["onceki_sahip"],
                    "sonraki": o["sonraki_sahip"], "ad": y["ad"], "lat": y.get("lat"),
                    "lon": y.get("lon"), "tur": y.get("tur"), "y_etiketi": o["y_etiketi"],
                }
            )
    print("  %d el değiştirme olayı" % len(tum_olaylar))

    print("kronoloji taranıyor (antlaşma/barış/mütareke/sözleşme başlıklı maddeler)...")
    antlasma_maddeleri = []
    dosya_sayisi = 0
    for yol in sorted(
        glob.glob(os.path.join(DATA, "olaylar*.js")) + glob.glob(os.path.join(DATA, "kronoloji*.js"))
    ):
        dosya_sayisi += 1
        for ad, liste in _ekb.dizileri_oku(yol):
            if not (ad.startswith("OLAYLAR") or ad.startswith("KRONOLOJI")):
                continue
            for o in liste:
                b = o.get("b") or ""
                t = o.get("t")
                if not t or not b:
                    continue
                if ANTLASMA_ANAHTAR.search(b):
                    antlasma_maddeleri.append({"t": t, "b": b, "_dosya": os.path.basename(yol)})
    print("  %d dosya tarandı, %d antlaşma/barış-anahtarlı madde bulundu" % (dosya_sayisi, len(antlasma_maddeleri)))

    sonuclar = []
    bulunamadi = 0
    taraf_cikarilamadi = 0
    toplam_eslesen = 0

    disari_elendi = 0
    for madde in antlasma_maddeleri:
        # 🔴 ÖN-SÜZGEÇ (DALGA-0055/0057: "Önce Osmanlı antlaşmaları") — İKİ
        # AŞAMADA ÖLÇÜLDÜ: (1) süzgeçsiz denendi, 343/504 "taraf çıkarılamadı"
        # çıktı çünkü kronoloji_almanya.js/kronoloji_fransa.js gibi KOMŞU
        # ÜLKE dosyaları o ülkenin KENDİ antlaşmalarını da taşıyor (Utrecht,
        # Frankfurt…) — Osmanlı'yla ilgisizler. (2) "gövdede osmanlı/türk
        # geçmeli" süzgeci DENENDİ, 493/504 elendi — çünkü `data/olaylar*.js`
        # (ÇEKİRDEK Osmanlı kronolojisi, CLAUDE.md §5) maddeleri de Osmanlı'yı
        # ÖZNE olarak SUSAR ("Avusturya'yla barış yapıldı" der, "Osmanlı
        # Avusturya'yla..." demez) — kelime araması burada da yanlış sinyal
        # verdi. DOĞRU AYRIM KAYNAK DOSYA TÜRÜNDEN geliyor: `olaylar*.js`
        # zaten ÇEKİRDEK Osmanlı kronolojisi (dosyanın KENDİSİ Osmanlı
        # merkezli, gövde metni değil), `kronoloji_*.js` KOMŞU ÜLKELERİN
        # kendi tarihidir — yalnız BUNLARDA Osmanlı/Türk sözcüğü aranır.
        if madde["_dosya"].startswith("kronoloji_"):
            gn = normal_kelime(madde["b"])
            if "osmanli" not in gn and "turk" not in gn and "tbmm" not in gn:
                disari_elendi += 1
                continue
        try:
            merkez = gun_ayir(madde["t"])
        except Exception:
            continue
        # ev sahibi: 1923'ten sonrası tbmm-turkiye, öncesi osmanli (D1923
        # oturumlarının kullandığı ayrımla TUTARLI)
        ev_sahibi = "tbmm-turkiye" if madde["t"] >= "1920-04-23" else "osmanli"
        taraflar = taraflari_cikar(madde["b"], ad_sozlugu, ev_sahibi)
        if not taraflar:
            taraf_cikarilamadi += 1
            sonuclar.append(
                {
                    "tarih": madde["t"], "govde_ilk100": madde["b"][:100], "_dosya": madde["_dosya"],
                    "taraf_yontemi": "ad-eslestirme (dogrulanmadi)",
                    "taraf_cikarilamadi": True,
                }
            )
            continue

        alt = merkez - timedelta(days=PENCERE_GUN)
        ust = merkez + timedelta(days=PENCERE_GUN)
        taraf_kume = taraflar | {ev_sahibi}
        eslesenler = []
        for o in tum_olaylar:
            if not (alt <= o["tarih"] <= ust):
                continue
            onceki, sonraki = o["onceki"], o["sonraki"]
            if onceki == sonraki:
                continue
            if onceki != ev_sahibi and sonraki != ev_sahibi:
                continue
            oteki = sonraki if onceki == ev_sahibi else onceki
            if oteki not in taraflar:
                continue
            eslesenler.append(
                {
                    "yerlesim": o["ad"], "tur": o["tur"], "lat": o["lat"], "lon": o["lon"],
                    "onceki_sahip": onceki, "sonraki_sahip": sonraki, "tarih": o["tarih_str"],
                    "gun_farki": (o["tarih"] - merkez).days,
                    "y_antlasma_etiketli": o["y_etiketi"] == "antlasma",
                }
            )
        eslesenler.sort(key=lambda e: abs(e["gun_farki"]))
        kayit = {
            "tarih": madde["t"], "govde_ilk100": madde["b"][:100], "_dosya": madde["_dosya"],
            "taraf_cikarilan": sorted(taraflar), "ev_sahibi": ev_sahibi,
            "taraf_yontemi": "ad-eslestirme (dogrulanmadi)",
            "eslesen_yerlesim_sayisi": len(eslesenler), "eslesen_yerlesimler": eslesenler,
        }
        if not eslesenler:
            kayit["bulunamadi"] = True
            bulunamadi += 1
        else:
            toplam_eslesen += len(eslesenler)
        sonuclar.append(kayit)

    print(
        "bitti: %d madde / %d Osmanli-disi (elendi) / %d taraf cikarilamadi / %d eslesme yok / toplam %d yerlesim eslesmesi"
        % (len(antlasma_maddeleri), disari_elendi, taraf_cikarilamadi, bulunamadi, toplam_eslesen)
    )

    cikti = {
        "_not": (
            "GENİŞLETİLMİŞ aday listesi — ARAC-ANTLASMA-HARITA-0916.py'nin (41 ANTLASMALAR "
            "kaydı, yapılandırılmış taraf) tersine, buradaki taraf listesi AD-EŞLEŞTİRME "
            "SEZGİSİYLE çıkarıldı ve DOĞRULANMADI. D-KATMAN'ın Pasarofça turunda AYNI riskten "
            "bir yanlış eşleşme (Ayamavra) zaten yakalanıp elenmişti (M-4190) — bu dosyadaki "
            "HİÇBİR kayıt kaynak olarak KULLANILMADAN önce elden geçirilmeli."
        ),
        "pencere_gun": PENCERE_GUN,
        "madde_sayisi": len(antlasma_maddeleri),
        "osmanli_disi_elenen": disari_elendi,
        "taraf_cikarilamadi": taraf_cikarilamadi,
        "bulunamadi": bulunamadi,
        "toplam_eslesen_yerlesim": toplam_eslesen,
        "maddeler": sonuclar,
    }
    with open(CIKTI, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=2, default=str)
    print("yazıldı: %s" % CIKTI)
    return cikti


if __name__ == "__main__":
    main()
