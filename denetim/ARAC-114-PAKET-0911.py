# -*- coding: utf-8 -*-
"""
ARAC-114-PAKET-0911.py — 114 PAKET görevi, 11 Eylül 2026

NE YAPAR: `denetim/PAKET-PRENSLIK-PENCERE-0911.json`daki 114 künyeyi
alıp her birine `t_cinsi` bayrağı (gercek|pencere), varsa önerilen
gerçek `t:` tarihini ve varsa `ozet:` eki üretir. `data/*.js`ye TEK
SATIR YAZMAZ — yalnız `denetim/PAKET-114-0911.json`ye yazar (koşu
bitince tek sevkle uygulanacak).

Gerçek tarihler (`GERCEK_TARIH` sözlüğü) 20. yüzyıl dekolonizasyon
tarihleri için GENEL TARİH KONSENSÜSÜdür — TDV kapsamı dışı, akademik
tek-tek doğrulama YAPILMADI (D107: bu bir `okumadım`, `bulunamadı`
değil — bilgi muhtemelen doğru ama BU TURDA sayfa/kaynak düzeyinde
teyit edilmedi).
"""
import io
import json
import re

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
onceki = json.load(io.open(KOK + r"\denetim\PAKET-PRENSLIK-PENCERE-0911.json", encoding="utf-8"))
kayitlar = onceki["kayitlar"]

# PRENSLİK PENCERE'nin ölçtüğü "zaten ozet uyarısı taşıyan 69" kümesi
# BURADA TEKRAR türetiliyor (JSON'a taşınmamıştı) — hangi kayda YENİ
# STANDART_OZET_EKI eklenip hangisine EKLENMEMESİ (zaten organik bir
# uyarısı var, ÇİFT/REDUNDANT metin üretmemek için) için şart.
_txt = io.open(KOK + r"\data\devletler.js", encoding="utf-8").read()
_kunyeler_ham = re.findall(
    r'\{\s*id:"([^"]+)",\s*ad:"([^"]+)"[^{}]*?bolge:"([^"]*)"[^{}]*?'
    r'f:"([\d-]+)",\s*t:"([\d-]+)"[^{}]*?ozet:"((?:[^"\\]|\\.)*)"',
    _txt)
ZATEN_UYARILI = set()
for _kid, _ad, _bolge, _f, _t, _ozet in _kunyeler_ham:
    if _t == "1923-10-29" and re.search(
            r"sonras[ıi]nda? da s[üu]rd[üu]|1923'?[üu]n [öo]tesine|hâl[âa] s[üu]r|"
            r"1923 sonras[ıi]|d[eü]vam ett|hâl[âa] var|bug[üu]n de vard[ıi]",
            _ozet, re.I):
        ZATEN_UYARILI.add(_kid)
print("zaten ozet uyarisi tasiyan (tekrar turetildi):", len(ZATEN_UYARILI))

STANDART_OZET_EKI = ("(t: alanı atlasın 1923-10-29 ufkunun sonudur — devlet/hanedan bu "
                      "tarihte sona ermedi, yalnız atlas buradan sonrasını çizmiyor.)")

# GÜVENİLİR GERÇEK BİTİŞ TARİHLERİ — 20. yy dekolonizasyon, iyi belgeli.
GERCEK_TARIH = {
    "irak-kralligi": ("1958-07-14", "14 Temmuz Devrimi, Kral Faysal II ve hanedan katledildi — genel tarih konsensüsü"),
    "urdun-emirligi": ("1946-05-25", "Londra Antlaşması, Ürdün Krallığı ilanı — genel tarih konsensüsü"),
    "filistin-mandasi": ("1948-05-14", "İngiliz mandasının resmen sona ermesi — genel tarih konsensüsü"),
    "misir-kralligi": ("1953-06-18", "Mısır Cumhuriyeti ilanı (1952 darbesinin ardından) — genel tarih konsensüsü"),
    "ingiliz-sudani": ("1956-01-01", "Sudan bağımsızlığı — genel tarih konsensüsü"),
    "cezayir-fransiz": ("1962-07-05", "Cezayir bağımsızlığı — genel tarih konsensüsü"),
    "kesiri-sultanligi": ("1967-11-30", "Güney Yemen bağımsızlığı, sultanlıkların ilhakı — genel tarih konsensüsü"),
    "kuayti-sultanligi": ("1967-11-30", "Güney Yemen bağımsızlığı — genel tarih konsensüsü"),
    "ingiliz-hindistani": ("1947-08-15", "Hindistan/Pakistan bağımsızlığı — genel tarih konsensüsü"),
    "racput": ("1947-08-15", "Hindistan'a katılım süreci başladı (kesin gün eyalet eyalet değişir) — bulunamadı, YAKLAŞIK"),
    "manipur": ("1949-10-15", "Hindistan Birliği'ne resmî katılım — genel tarih konsensüsü"),
    "travankur": ("1949-07-01", "Travancore-Cochin birleşmesi — genel tarih konsensüsü"),
    "haydarabad-nizam": ("1948-09-17", "Operasyon Polo, Haydarabad'ın Hindistan'a ilhakı — genel tarih konsensüsü"),
    "cammu-kesmir": ("bulunamadı", "Keşmir'in statüsü 1947 sonrası tartışmalı/karmaşık — YAZILMADI"),
    "bahavelpur": ("1955-10-14", "Pakistan'a katılım, Batı Pakistan Bir Ünite planı — bulunamadı, YAKLAŞIK"),
    "bharatpur-cat": ("1948-03-30", "Racasthan Birliği'ne katılım — genel tarih konsensüsü"),
    "bhopal": ("1949-06-01", "Hindistan Birliği'ne resmî katılım (TDV: 1952'ye dek varlığını sürdürdü diyor — ÇELİŞKİ, araştırılmalı)"),
    "cunagadh": ("1948-02-20", "Referandum sonrası Hindistan'a ilhak — genel tarih konsensüsü"),
    "ingiliz-malaya": ("1957-08-31", "Malaya bağımsızlığı — genel tarih konsensüsü"),
    "hollanda-dogu-hint": ("1949-12-27", "Hollanda'nın Endonezya egemenliğini tanıması — genel tarih konsensüsü"),
    "fransiz-cinhindi": ("1954-07-21", "Cenevre Antlaşmaları, Fransız Hindiçin'inin sonu — genel tarih konsensüsü"),
    "nguyen-hanedani": ("1945-08-25", "Bao Dai'nin tahttan çekilmesi — genel tarih konsensüsü"),
    "sarawak-brooke": ("1946-07-01", "Brooke hanedanının Sarawak'ı İngiliz Tacı'na devretmesi — genel tarih konsensüsü"),
    "ingiliz-guyanasi": ("1966-05-26", "Guyana bağımsızlığı — genel tarih konsensüsü"),
    "hollanda-guyanasi": ("1975-11-25", "Surinam bağımsızlığı — genel tarih konsensüsü"),
}

# HÂLÂ VAR / SÜRÜYOR — "pencere" kalmalı, GERÇEK tarih YAZILMAZ (örnek küme)
HALA_VAR_ORNEK = {"abd", "kanada", "ingiltere", "fransa-cumhuriyet", "almanya", "ispanya",
                  "portekiz", "italya", "isvicre", "hollanda", "belcika", "luksemburg",
                  "isvec", "norvec", "danimarka", "finlandiya", "izlanda", "yunanistan",
                  "arjantin-cumhuriyeti", "bolivya-cumhuriyeti", "sili-cumhuriyeti",
                  "paraguay-cumhuriyeti", "peru-cumhuriyeti", "uruguay-cumhuriyeti",
                  "ekvador-cumhuriyeti", "venezuela-cumhuriyeti", "kolombiya-cumhuriyeti",
                  "brezilya-cumhuriyeti", "meksika", "guatemala", "dominik-cumhuriyeti",
                  "kuba-cumhuriyeti", "panama-cumhuriyeti", "haiti", "liberya", "afganistan",
                  "yemen-zeydi", "brunei-sultanligi", "agadez-sultanligi", "avustralya",
                  "tonga-kralligi", "siyam-chakri", "fransiz-guyanasi", "kamboc-kralligi",
                  "yogyakarta", "yeni-zelanda"}

def ozet_eki_gerekli(kid):
    """45'e YENİ uyarı ekle, 69'un ZATEN taşıdığı organik uyarıyı ÇİFTLEME."""
    if kid in ZATEN_UYARILI:
        return None
    return STANDART_OZET_EKI


pk = []
for k in kayitlar:
    kid = k["id"]
    d = dict(k)
    if kid == "tbmm-turkiye":
        d["t_cinsi"] = "gercek"
        d["onerilen_t"] = "1923-10-29"
        d["ozet_eki"] = None
        d["kaynak"] = "zaten doğru — TBMM Hükûmeti Cumhuriyet ilanıyla son buldu"
    elif kid in GERCEK_TARIH:
        yeni_t, kaynak = GERCEK_TARIH[kid]
        if yeni_t == "bulunamadı":
            d["t_cinsi"] = "pencere"
            d["onerilen_t"] = "1923-10-29 (değişmez)"
            d["ozet_eki"] = ozet_eki_gerekli(kid)
            d["kaynak"] = "bulunamadı — " + kaynak
        else:
            d["t_cinsi"] = "gercek"
            d["onerilen_t"] = yeni_t
            d["ozet_eki"] = None
            d["kaynak"] = kaynak
    elif k["damga"] == "🔴(c)":
        d["t_cinsi"] = "gercek"
        d["onerilen_t"] = "bkz. BULGU-PRENSLIK-PENCERE-0911.md (c) — " + k["not"]
        d["ozet_eki"] = None
        d["kaynak"] = k["not"]
    elif k["damga"] == "🟢":
        d["t_cinsi"] = "gercek"
        d["onerilen_t"] = "1923-10-29 (değişmez)"
        d["ozet_eki"] = None
        d["kaynak"] = "TEK kesin isabet — Cumhuriyet ilanı"
    elif k["damga"] == "⚪":
        d["t_cinsi"] = "pencere"
        d["onerilen_t"] = "1923-10-29 (değişmez)"
        d["ozet_eki"] = ozet_eki_gerekli(kid)
        d["kaynak"] = "bulunamadı — " + k["not"]
    else:  # geniş 🔴 grubu — ya hâlâ var ya araştırılmadı
        d["t_cinsi"] = "pencere"
        d["onerilen_t"] = "1923-10-29 (değişmez)"
        d["ozet_eki"] = ozet_eki_gerekli(kid)
        if kid in HALA_VAR_ORNEK:
            d["kaynak"] = "hâlâ var / 2026'da bile sürüyor — gerçek bitiş tarihi YOK, uydurulmaz"
        else:
            d["kaynak"] = "bulunamadı — gerçek bitiş tarihi bu turda araştırılmadı"
    pk.append(d)

toplam_gercek = sum(1 for d in pk if d["t_cinsi"] == "gercek")
toplam_pencere = sum(1 for d in pk if d["t_cinsi"] == "pencere")
print("gercek:", toplam_gercek, "pencere:", toplam_pencere, "toplam:", len(pk))

out = {
    "oturum": "114 PAKET", "tarih": "2026-09-11",
    "sema_onerisi": {
        "alan_adi": "t_cinsi",
        "degerler": ["gercek", "pencere"],
        "gercek_anlami": "t: alanı GERÇEK bir bitiş tarihi iddiasıdır",
        "pencere_anlami": "t: alanı atlasın 1923-10-29 ufkunun sonudur, bir TARİH İDDİASI DEĞİLDİR",
        "tuketici": ("js/app.js kartCiz() (künye kartında '1281 – 1923' tipi aralık basıyor — "
                     "BU ALANI OKUMAZ, kart metni HER İKİ durumda da aynı görünür; okumadığı sürece "
                     "kullanıcı hâlâ yanılabilir). `arac/uret_petek.py`nin künye penceresi hesaplamaları "
                     "bu alanı OKUMAZ — motor davranışı DEĞİŞMEZ, yalnız DİZİN/KART gösterimi için önerilir."),
        "eger_okunmazsa": ("Alan sessizce düşer — künye kaydında durur ama hiçbir görsel/işlevsel "
                           "fark yaratmaz. Bu BİLEREK böyle bırakıldı: `data/` donuk, `js/app.js` "
                           "Oturum 1'in dosyası, bu görev yalnız VERİYİ hazırlıyor."),
        "neden_uc_degil_iki": ("`iran` künyesi (t:2026-08-07) zaten kanıtlıyor: GERÇEK bir tarih, "
                               "atlas ufkunun NE KADAR ötesinde olursa olsun, motoru BOZMUYOR "
                               "(dizin amaçlı kalıyor, haritada boyanmıyor). Ayrı bir "
                               "'gercek_ama_ufuk_disi' değerine GEREK YOK — D022 öngörüsü TUTTU."),
    },
    "ozet": {"gercek": toplam_gercek, "pencere": toplam_pencere, "toplam": len(pk)},
    "kayitlar": pk,
}
outp = KOK + r"\denetim\PAKET-114-0911.json"
io.open(outp, "w", encoding="utf-8").write(json.dumps(out, ensure_ascii=False, indent=1))
print("yazildi:", outp)
