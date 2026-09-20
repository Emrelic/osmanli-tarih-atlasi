# -*- coding: utf-8 -*-
"""D1923-CIZGI-0920 · E6 "A kovası" yaması — 9 modern ardıl antlaşma okundu,
kayıtlar karara bağlanıyor. Ayrıca 1.MURAT hükmüyle at-hu-olmod/pinka
"kaynak bekliyor" kovasına alınıyor.

YAZMA DİSİPLİNİ (1.MURAT, DALGA-0072):
  ① yazmadan hemen önce dosyayı YENİDEN OKU  ② yaz  ③ kendi satırını GERİ OKU
Dosyada kayıt başına TEK SATIR var; yalnız hedef satırlar değişir, ötekiler
bayt bayt korunur (eşzamanlı yazan öteki oturumlar bozulmasın).

Koşum:  py denetim/ARAC-D1923-E6A-YAMA-0920.py --sina   (kuru koşu, yazmaz)
        py denetim/ARAC-D1923-E6A-YAMA-0920.py --yaz
"""
import json
import math
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAZ = "--yaz" in sys.argv

NE_YOL = os.path.join(KOK, "veri-kaynak", "d_bugunku_sinirlar.geojson")

# ---------------------------------------------------------------- NE vekili
def ne_hat(cift):
    g = json.load(open(NE_YOL, encoding="utf-8"))
    parca = [f for f in g["features"] if f["properties"]["cift"] == cift]
    if not parca:
        raise SystemExit(f"{cift}: NE'de YOK")
    if len(parca) > 1:
        raise SystemExit(f"{cift}: {len(parca)} parça — elle karar gerekir")
    f = parca[0]
    if f["geometry"]["type"] != "LineString":
        raise SystemExit(f"{cift}: {f['geometry']['type']} — elle karar gerekir")
    h = [[round(x, 4), round(y, 4)] for x, y in f["geometry"]["coordinates"]]
    return h, round(f["properties"]["uzunluk_km"], 1)


GK = ("Natural Earth 10m admin-0 (bugünkü sınır, D-GEOARAC çıktısı: "
      "veri-kaynak/d_bugunku_sinirlar.geojson · çift {cift}) — "
      "kullanılabilirliği 'değişmedi' dayanağına bağlı")

# --------------------------------------------------- ÇİZİLECEKLER (E8 oldu)
CIZ = {
    "d1923-cn-fc-BILINMIYOR-laos": {
        # 🔴 SINIF ÖLÇEĞİ: js/d_katman.js `_dEtkinSinif` eski kategori "D"yi
        # YENİ ölçekte "E"ye (hukukî) eşliyor; yeni ölçekte "D" = FİİLÎ.
        # Envanter notundaki "1923'te sınıf D" ESKİ ölçektir ⇒ sinif "E".
        "cift": "CHN-LAO", "sinif": "E", "kategori": "D",
        "kesinlik_km": 2.1,
        "kesinlik_not": ("NE 10m tepe aralığı medyan 2,06 km; 1991/1993 "
                         "tahdidi 1895 hattını YERİNDE işaretledi, ek sapma "
                         "bildirilmedi"),
        "degisti": {
            "deger": False,
            "kaynak": "1991 Çin–Laos Sınır Rejimi Antlaşması + 1993 Ek Protokolü",
            "not": ("1991 antlaşması ve 1993 ek protokolü 20 Haz 1895 Fransız-Çin "
                    "sözleşmesiyle belirlenen hattı BUGÜNKÜ YERİNDE resmîleştirip "
                    "tahdit etti; toprak aktarımı bildirilmedi ⇒ 1923 hattı = "
                    "bugünkü hat. D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [{
            "ad": "Çin–Laos Sınır Rejimi Antlaşması (+ 1993 Ek Protokolü)",
            "tarih": "1991-10", "tur": "antlaşma",
            "not": ("1895 sözleşmesinin hattını yerinde tahdit etti; hassasiyet "
                    "kaynağı olarak DEĞİL, 'değişmedi' dayanağı olarak alındı"),
        }],
        "not_ek": ("· 🟢 D1923-CIZGI-0920 (20 Eyl 2026): 1991/1993 Çin–Laos "
                   "antlaşması okundu, hat DEĞİŞMEDİ ⇒ bugünkü NE çizgisi VEKİL "
                   "olarak bağlandı. Bu hat 1923'te ÖLÇÜLMÜŞ değildir, "
                   "'değişmedi' dayanağıyla bugünden alınmıştır."),
    },
    "d1923-cn-fc-BILINMIYOR-tonkin": {
        "cift": "CHN-VNM", "sinif": "E", "kategori": "D",
        "kesinlik_km": 3.0,
        "kesinlik_not": ("NE 10m tabanı 2,06 km + 1999 antlaşmasının yeniden "
                         "bölüştürdüğü 164 'C bölgesi' (toplam 227 km²; ~113 km² "
                         "Vietnam, ~114 km² Çin) yerel kayma payı ⇒ 3 km. "
                         "Nehir kesimleri 1887/1895 sözleşmelerine AYNEN uyuldu"),
        "degisti": {
            "deger": False,
            "kaynak": "1999-12-31 Çin–Vietnam Kara Sınırı Antlaşması",
            "not": ("Müzakere 1887 ve 1895 Fransız-Çin sözleşmeleri ve onların "
                    "tahdit zabıtları/sütunları üzerine kuruldu; nehir kesimleri "
                    "sözleşmelere aynen uyuldu. Yalnız 164 çekişmeli 'C bölgesi' "
                    "(227 km²) yeniden bölüştürüldü ⇒ hat ÖZÜNDE aynı, kayma "
                    "yerel ve km mertebesinde. D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [{
            "ad": "Çin–Vietnam Kara Sınırı Antlaşması",
            "tarih": "1999-12-31", "tur": "antlaşma",
            "not": ("1887/1895 sözleşmelerini esas aldı; 164 C bölgesi (227 km²) "
                    "bölüşüldü — kesinlik_km bu payı taşır"),
        }],
        "not_ek": ("· 🟢 D1923-CIZGI-0920 (20 Eyl 2026): 1999 Çin–Vietnam kara "
                   "sınırı antlaşması okundu; hat 1887/1895 sözleşmelerinin hattı, "
                   "yalnız 164 yerel C bölgesi bölüşüldü ⇒ bugünkü NE çizgisi "
                   "VEKİL olarak bağlandı, kesinlik_km 227 km²'lik payı taşıyor."),
    },
    "d1923-ih-np-BILINMIYOR": {
        "cift": "IND-NPL", "sinif": "E", "kategori": "D",
        "kesinlik_km": 2.1,
        "kesinlik_not": ("NE 10m tepe aralığı medyan 2,06 km. ⚠️ Kalapani ve "
                         "Susta bugün İHTİLAFLI; ihtilaf 1816 hattının NEREDEN "
                         "geçtiği yorumudur, hattın DEĞİŞTİRİLMESİ değildir. NE "
                         "çizgisi Hindistan yorumunu gösterir ve dönem haritaları "
                         "da Kalapani'yi Hindistan'da gösteriyordu"),
        "degisti": {
            "deger": False,
            "kaynak": "Aitchison 1929 c. XIV + 1981 Ortak Teknik Sınır Komitesi",
            "not": ("21 Ara 1923 antlaşması (onay 8 Nis 1925) sınırı teyit etti; "
                    "1816 Sugauli hattında toprak aktarımı YOK. 1981 komitesi "
                    "sınırın %98'ini netleştirdi, açık kalan yalnız Kalapani ve "
                    "Susta — ikisi de YORUM ihtilafı (nehir kaynağı / yatak "
                    "değişimi), kasıtlı toprak değişimi değil. "
                    "D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [{
            "ad": "Hindistan–Nepal Ortak Teknik Sınır Komitesi (1981–2007)",
            "tarih": "1981", "tur": "resmî komisyon",
            "not": ("sınırın %98'i netleşti; Kalapani ve Susta yorum ihtilafı "
                    "olarak açık kaldı — toprak aktarımı bildirilmedi"),
        }],
        "not_ek": ("· 🟢 D1923-CIZGI-0920 (20 Eyl 2026): 1925 sonrası ayak "
                   "kapatıldı — toprak aktarımı YOK, Kalapani/Susta yorum "
                   "ihtilafı ⇒ bugünkü NE çizgisi VEKİL olarak bağlandı."),
    },
    "d1923-ir-hind-BILINMIYOR": {
        "cift": "IRN-PAK", "sinif": "C", "kategori": "C",
        "kesinlik_km": 2.5,
        "kesinlik_not": ("NE 10m tabanı 2,06 km + 1958–59 yeniden işaretlemesinin "
                         "tahdit toleransı. Hat karma: direk 1–11 (Kuhak–Gorani, "
                         "1896) D; güney (1871) ve kuzey (direk 11 → Malik Siyah) "
                         "C ⇒ bağlayıcı sınıf C"),
        "degisti": {
            "deger": False,
            "kaynak": "IBS 167 (6 Şub 1958 Tahran anlaşması, son protokol 8 Ara 1959)",
            "not": ("1958 Tahran anlaşması hattı AYNI belgelerle (1896 Holdich "
                    "zaptı) yeniden tanımlayıp direk 1–256 ile işaretledi; "
                    "IBS 167'de TOPRAK AKTARIMI bildirilmiyor ⇒ hat aynı, "
                    "yalnız işaretleme toleransı kadar oynamış olabilir. "
                    "D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [],
        "not_ek": ("· 🟢 D1923-CIZGI-0920 (20 Eyl 2026): 1958 Tahran anlaşması "
                   "AYNI belgelerle yeniden tanımlama + işaretlemedir, toprak "
                   "aktarımı yok ⇒ bugünkü NE çizgisi VEKİL olarak bağlandı; "
                   "kesinlik_km işaretleme toleransını taşır."),
    },
}

# ------------------------------------- ÇİZİLMEYECEKLER (E7 / parçalı / bekleme)
GUNCELLE = {
    "d1923-en-cn-BILINMIYOR-hongkong": {
        "degisti": {
            "deger": True,
            "kaynak": "1 Tem 1997 devri (Çin–İngiltere Ortak Bildirisi, 1984)",
            "not": ("1997'den sonra orada ULUSLARARASI SINIR YOK — Sham Chun "
                    "hattı Çin'in iç idarî sınırı oldu ⇒ Natural Earth admin-0'da "
                    "karşılığı yok, alınacak VEKİL ÇİZGİ YOK. Hat değişmemiş bile "
                    "olsa vekil yolu KAPALIDIR. D1923-CIZGI-0920 + 1.MURAT hükmü, "
                    "20 Eyl 2026"),
        },
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026, 1.MURAT hükmü): kayıt "
                   "E6'dan E7'ye DÜŞÜRÜLDÜ. Sebep: 1997 devrinden sonra bu hat "
                   "uluslararası sınır değil, vekil alınacak çizgi yok; 1923 hattı "
                   "1898 Pekin Konvansiyonu metninden/haritasından çıkarılmalı."),
    },
    "d1923-sscb-cn-BILINMIYOR-kazak": {
        "degisti": {
            "deger": True,
            "kaynak": ("26 Nis 1994 Kazakistan–Çin Sınır Antlaşması + "
                       "24 Eyl 1997 ve 4 Tem 1998 ek anlaşmaları"),
            "not": ("1994 antlaşması Jalanaşkol gölü doğusundaki çekişmeli dar "
                    "şeridi (SSCB–Çin 1969 çatışması) ÇİN'e tanıdı; 1997 ve 1998 "
                    "ek anlaşmaları küçük kesimleri yeniden çizdi; tahdit Tem 1998'de, "
                    "son protokol 10 May 2002'de bitti ⇒ bugünkü çizgi 1923'ü "
                    "GÖSTERMEZ. Değişim YEREL — hattın geri kalanı için vekil hâlâ "
                    "tartışılabilir. D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026): E6'dan E7'ye düştü — "
                   "1994/1997/1998 Kazakistan–Çin anlaşmaları hattı YEREL olarak "
                   "değiştirdi (Jalanaşkol doğusu Çin'e). Değişen kesimler adıyla "
                   "çıkarılırsa kalan kesimde vekil kullanılabilir (E7a)."),
    },
    "d1923-sscb-cn-BILINMIYOR-kirgiz": {
        "degisti": {
            "deger": True,
            "kaynak": "1996 ve 1999 Kırgızistan–Çin sınır anlaşmaları",
            "not": ("1996 anlaşması ~30.000 ha, 1999 anlaşması Uzengi-Kuuş "
                    "bölgesinden >90.000 ha (~900 km²) toprağı ÇİN'e bıraktı; "
                    "tahdit 2009'da tamamlandı (Han Tengri'nin bir kısmı Çin'den "
                    "Kırgızistan'a) ⇒ bugünkü çizgi 1923'ü GÖSTERMEZ. "
                    "D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026): E6'dan E7'ye düştü — "
                   "1996/1999 anlaşmalarıyla ~120.000 ha toprak el değiştirdi, "
                   "vekil kullanılamaz. 1923 hattı 1882 Kaşgar / 1884 Novi-Margelan "
                   "protokollerinden çıkarılmalı."),
    },
    "d1923-de-lt-memel": {
        "degisti": {
            "deger": True,
            "kaynak": "1997 Litvanya–Rusya sınır antlaşması",
            "not": ("Bugünkü çizgi 1945'te çizilen SOVYET İÇ SINIRIdır "
                    "(Kaliningrad Oblastı RSFSC ↔ Litvanya SSC); 1997 antlaşması "
                    "onu uluslararası sınır olarak resmîleştirdi. Bu hattın Versay "
                    "md. 28 + Büyükelçiler Konferansı başkanının 18 Tem 1921 "
                    "mektubuyla tespit edilen 1923 hattıyla AYNI olduğunu söyleyen "
                    "kaynak BULUNAMADI. Ayrıca 1923'ün tarafları Almanya × Litvanya; "
                    "bugün Almanya Litvanya'ya komşu DEĞİL ⇒ vekil ancak ardıl "
                    "çiftten (LTU-RUS) alınabilir, bu da ayrı bir hükümdür. "
                    "D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [{
            "ad": "Paris Sözleşmesi (Memel Ülkesi) — Versay md. 28/99 hattı",
            "tarih": "1924-05-08", "tur": "sözleşme",
            "not": ("1923 hattını tanımlayan belge zinciri: Versay md. 28 + "
                    "Büyükelçiler Konferansı başkanının 18 Tem 1921 mektubu; "
                    "Memel'in Litvanya'ya tahsisi 16 Şub 1923 Büyükelçiler "
                    "Konferansı kararı"),
        }],
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026): E6'dan E7'ye düştü. "
                   "1923 hattının kaynağı ARTIK BELLİ (Versay md. 28 + 18 Tem 1921 "
                   "mektubu); bugünkü çizgi ise 1945 Sovyet iç sınırıdır ve "
                   "aynılığı kaynaksız ⇒ vekil kullanılamaz."),
    },
    "d1923-iq-necd-BILINMIYOR": {
        "degisti": {
            "deger": True,
            "kaynak": "1975 idarî bölüşüm + 26 Ara 1981 Irak–Suudi sınır antlaşması",
            "not": ("1981/82 antlaşması 7.044 km²'lik TARAFSIZ BÖLGE'yi iki eşit "
                    "parçaya böldü ve aradan geçen hattı devletler arası sınır "
                    "yaptı ⇒ bugünkü çizgi o kesimde 1923'ü GÖSTERMEZ (1923'te "
                    "orada iki ayrı hat ve ortak bir bölge vardı). Buna karşılık "
                    "bölüşümün saydığı uç noktalar (Avca × Bâtın kavşağı, "
                    "el-Vukube, Ansab, el-Amgar) 1922 Ukayr Protokolü'nün "
                    "noktalarıdır ⇒ Tarafsız Bölge DIŞINDAKİ kesimde hat aynı. "
                    "KAYIT PARÇALI: E3. D1923-CIZGI-0920 ölçümü, 20 Eyl 2026"),
        },
        "yeni_dayanak": [{
            "ad": "Irak–Suudi Arabistan sınır antlaşması (Tarafsız Bölge bölüşümü)",
            "tarih": "1981-12-26", "tur": "antlaşma",
            "not": ("Irak Millî Meclisi onayı 28 Oca 1982; BM'ye tescil "
                    "EDİLMEDİ — Suudi Arabistan önceki sınır anlaşmalarını "
                    "Haz 1991'de tescil ettirdi"),
        }],
        "not_ek": ("· 🟡 D1923-CIZGI-0920 (20 Eyl 2026): E6'dan E3'e (PARÇALI) "
                   "geçti. Tarafsız Bölge DIŞI kesim: 1922 Ukayr noktaları aynı ⇒ "
                   "vekil kullanılabilir. Tarafsız Bölge kesimi: 1981'de ikiye "
                   "bölündü ⇒ 1923'te orada TEK HAT YOKTU, iki hat + ortak bölge "
                   "vardı; ayrı kayda bölünmeli."),
    },
    "d1923-at-hu-olmod": {
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026, 1.MURAT hükmü): kayıt "
                   "E8'den ÇIKARILDI, 'KAYNAK BEKLİYOR' kovasına alındı. Sebep: "
                   "degisti=false'un dayanağı 1947 Paris md. 1(1)'dir ve yalnız "
                   "1938→bugün ayağını kapatır; 1923-10-29 → 1938-01-01 ayağı AÇIK. "
                   "Ólmod (Bleigraben) devrinin günü birincil kaynakta bulunamadı — "
                   "Grandits vd. (Berghahn) cildinin GİRİŞİ okundu, köy adları ve "
                   "devir günleri girişte geçmiyor. Kapatan kaynak: aynı cildin "
                   "ilgili bölümü ya da Murber, Grenzziehung (Böhlau). "
                   "KÜTÜPHANE ERİŞİMİ KALEMİ."),
    },
    "d1923-at-hu-pinka": {
        "not_ek": ("· 🔴 D1923-CIZGI-0920 (20 Eyl 2026, 1.MURAT hükmü): kayıt "
                   "E8'den ÇIKARILDI, 'KAYNAK BEKLİYOR' kovasına alındı. İKİ "
                   "sebep: ① 1923-10-29 → 1938-01-01 ayağı açık (Szentpéterfa/"
                   "Prostrum devrinin günü birincil kaynakta yok) ② KAYIT İÇİ "
                   "ÇELİŞKİ: degisti=false'un kaynağı 1947 antlaşmasıdır, ama "
                   "kaydın kendi künyesi (Rubicon) '1952 takasları'ndan söz ediyor "
                   "— 1947 metni 1952 hakkında tanıklık EDEMEZ. 1952'de AT–HU "
                   "hattında değişiklik olup olmadığı ARANDI, BULUNAMADI. "
                   "KÜTÜPHANE ERİŞİMİ KALEMİ."),
    },
}


def satir_yaz(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":"))


def uygula():
    dosyalar = {}
    # ① yazmadan hemen önce YENİDEN OKU
    for ad in ("d_sinirlar_asya.js", "d_sinirlar_komsu.js",
               "d_sinirlar_avrupa_orta.js"):
        yol = os.path.join(KOK, "data", ad)
        dosyalar[ad] = open(yol, encoding="utf-8").read().split("\n")

    degisen = []
    for kid, tarif in list(CIZ.items()) + list(GUNCELLE.items()):
        bulundu = False
        for ad, satirlar in dosyalar.items():
            for n, s in enumerate(satirlar):
                if f'"id":"{kid}"' not in s:
                    continue
                bulundu = True
                govde = s.rstrip()
                virgul = govde.endswith(",")
                if virgul:
                    govde = govde[:-1]
                k = json.loads(govde)

                if kid in CIZ:
                    h, uz = ne_hat(tarif["cift"])
                    k["hat"] = h
                    k["uzunluk_km"] = uz
                    k["geometri_kaynagi"] = GK.format(cift=tarif["cift"])
                    k["kesinlik_km"] = tarif["kesinlik_km"]
                    k["kesinlik_not"] = tarif["kesinlik_not"]
                    k["sinif"] = tarif["sinif"]
                    k["kategori"] = tarif["kategori"]
                    k["sinif_not"] = ("1923 hattı bugünkü NE çizgisinin VEKİLİdir "
                                      "('değişmedi' dayanağıyla); 1923'te ölçülmüş "
                                      "koordinat DEĞİLDİR")
                if "degisti" in tarif:
                    k["degisti"] = tarif["degisti"]
                for dy in tarif.get("yeni_dayanak", []):
                    k.setdefault("dayanak", []).append(dy)
                if tarif.get("not_ek") and tarif["not_ek"] not in (k.get("not") or ""):
                    k["not"] = ((k.get("not") or "").rstrip() + " "
                                + tarif["not_ek"])

                yeni = satir_yaz(k) + ("," if virgul else "")
                satirlar[n] = yeni
                degisen.append((ad, n + 1, kid, len(s), len(yeni)))
                break
            if bulundu:
                break
        if not bulundu:
            raise SystemExit(f"🔴 {kid} hiçbir dosyada BULUNAMADI — yazılmadı")

    print(f"{'DOSYA':<28}{'SATIR':>7}  {'KAYIT':<40}{'eski→yeni'}")
    for ad, n, kid, e, y in degisen:
        print(f"{ad:<28}{n:>7}  {kid:<40}{e}→{y}")

    if not YAZ:
        print("\n🟡 KURU KOŞU — hiçbir şey yazılmadı (--yaz ile koştur)")
        return

    for ad, satirlar in dosyalar.items():
        yol = os.path.join(KOK, "data", ad)
        with open(yol, "w", encoding="utf-8", newline="") as f:
            f.write("\n".join(satirlar))
    print("\n✅ yazıldı")

    # ③ kendi satırını GERİ OKU
    print("\n== GERİ OKUMA ==")
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "m", os.path.join(KOK, "denetim", "ARAC-D1923-CIZGI-0920.py"))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    yeni_ham = {}
    for a in m.DOSYALAR:
        for k in m.oku(a):
            yeni_ham[k.get("id")] = k
    for kid in CIZ:
        k = yeni_ham[kid]
        print(f"  {kid:<40} hat={len(k['hat']) if k.get('hat') else 0} nokta · "
              f"sinif={k.get('sinif')} · kesinlik_km={k.get('kesinlik_km')} · "
              f"degisti={k['degisti']['deger']}")
    for kid in GUNCELLE:
        k = yeni_ham[kid]
        print(f"  {kid:<40} hat={'YOK' if not k.get('hat') else len(k['hat'])} · "
              f"degisti={(k.get('degisti') or {}).get('deger')} · "
              f"not sonu: …{(k.get('not') or '')[-60:]}")


if __name__ == "__main__":
    uygula()
