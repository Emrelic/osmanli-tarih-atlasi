"""ÇEVİRİ BETİĞİ (CEVIRI-1103) — tasarım: denetim/CEVIRI-1103/TASARIM.md

Kaynak dil Türkçe. Çeviri kayıtları data/ceviri_<dil>_<tür>[_NN].js dosyalarında,
her kayıt [metin, kaynak_ozet] taşır; kaynak_ozet = Türkçe metnin FNV-1a 32 özeti
(js/ceviri.js ozet() ile birebir). Türkçe değişince özet tutmaz → kayıt BAYAT;
site o maddede Türkçeyi gösterir, bu betik yalnız bayatı/eksiği yeniden çevirtir.

  py arac/ceviri.py durum  [--dil en]                 # tamam / bayat / eksik / yetim sayıları
  py arac/ceviri.py bayat  --dil en --tur olay --cikti is.json [--sinir 150] [--atla 0]
                                                      # yeniden çevrilecekler (eksik + bayat)
  py arac/ceviri.py uygula --dil en --is is.json --girdi cevap.json
                                                      # cevap: {"tur":..., "kayit":{id: metin | {b,d}}}
  py arac/ceviri.py yaz    [--dil en]                 # dosyaları yeniden böl + data/ceviri_dizin.js
  py arac/ceviri.py temizle --dil en                  # Türkçesi silinmiş (yetim) kayıtları at
  py arac/ceviri.py denetim [--dil en]                # eksik/bayat/yetim tablosu + tavan (BEKLENEN_CEVIRI_*)
  py arac/ceviri.py kuyruk  [--dil en] [--cikti klasor]  # dil×tür başına çevrilecekler (is.json biçimi)

`uygula` özeti ÇEVİRİNİN YAPILDIĞI andaki Türkçeden değil, GİRDİDEKİ `kaynak`tan
alır: is.json'daki Türkçe çevirmene gittiği metindir; arada Türkçe değiştiyse
kayıt doğduğu anda bayat olur (doğru davranış — eski metnin çevirisidir).
Çıkış: 0 tamam · 1 hata · 2 ölçülemedi (node yok / çıkarıcı çöktü).
`denetim` çıkışı: 0 tavan aşılmadı (açık borç "borç" diye basılır) · 1 tavan aşıldı (gerileme) ·
2 ölçülemedi. CLAUDE.md "Tavanlar": tavan yalnız iner, iyileşince aynı commit'te düşürülür.
"""
import argparse, hashlib, json, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
DIZIN = os.path.join(DATA, "ceviri_dizin.js")
TURLER = ("arayuz", "devlet", "olay")
PARCA_BAYT = 400_000          # olay dosyası ~400 KB'de bölünür (tek dosya tarayıcıda ağırlaşmasın)

# Dil sırası (EMRELİC 1 KASIM görevi, 3 Kasım 2026): pilot İngilizce, sonra bu liste.
# Yalnız en az bir çeviri dosyası olan dil seçicide görünür.
DILLER = [("tr", "Türkçe"), ("en", "English"), ("ar", "العربية"), ("es", "Español"),
          ("fr", "Français"), ("ru", "Русский"), ("zh", "中文"), ("hi", "हिन्दी"),
          ("pt", "Português"), ("de", "Deutsch"), ("ja", "日本語"), ("fa", "فارسی"),
          ("it", "Italiano"), ("ko", "한국어"), ("pl", "Polski"), ("nl", "Nederlands"),
          ("el", "Ελληνικά")]

# TAVANLAR (CLAUDE.md "Tavanlar"): 4 Kasım 2026 ölçümü, birleşik dal. {dil: {tür: sayı}}.
# Yalnız GERİLEME bloke eder; iyileşince aynı commit'te İNDİRİLİR, YÜKSELTİLMEZ (yeni Türkçe
# madde eklenince çeviri kuyruğu çevrilir — tavan açılmaz). Tamamlanan dil 0'a iner.
# Listede olmayan dil/tür tavanı 0'dır. yetim denetimde yalnız BASILIR (arayüzdeki yetimler
# bilinçli: sözlüğe elle eklenen şablon/birleşik metinler).
# 5 Kasım 2026 (KASA PAZAR, toplama dalı kasa-1105-toplama): tavan AÇILDI — aşım çeviri dalı
# ölçüldükten sonra öteki dallarda eklenen/düzeltilen Türkçe metinlerden: 79 olay maddesi
# (OLAYLAR_EK5 14, EK16 8, OK109 5 …; Hürmüz/Strazburg/Sardinya/Hamid-ili yeni maddeleri ve
# metin düzeltmeleri), 4 arayüz tarih kalıbı ("# (YIL)" vb.), 1 devlet adı (burgonya →
# "Burgonya Dükalığı"). fr/ru/pt eksik İNDİ (birleşen çeviriler). Eski değerler: eksik en/ar/es/de
# olay 2, pt 1119, ru 3518, fr 4718, arayüz/devlet 0; bayat olay 53/53/53/53/41/17/0.
# 10 Kasım 2026 (KRON-DUNYA-BOLGE-1109, oturum-fa12c6): tavan AÇILDI — 22 yeni dış olay
# (data/olaylar_dunya_bolge_1109.js: Timur'un ölümü, Floransa, Mátyás, Alhambra, Şarlken, Şah İsmail/
# Tahmasb/Abbas, Kazan, Astrahan, Poltava, Mahmud Hotakî, II. Katerina, Georgievsk, Gülistan, İran
# Meşrutiyeti, 1907, II. Nikolay, Balfour, Ekim Devrimi) + 2 arayüz gün kalıbı (Poltava Gregoryen/
# Jülyen, Şah Abbas 'Ekim # — ay hassasiyeti'). Çeviri işleri Emre'nin 4 Kasım kararıyla bekliyor.
# Eski değerler: eksik arayüz 4, olay en/ar/es/de 14, pt 1131, ru 3228, fr 4128.
# 10 Kasım 2026 (KRON-GEZGIN-1110, gezginler worktree'si): tavan AÇILDI — Emre'nin kararıyla gezgin/kâşif
# gezileri kronoloji maddesi olarak eklendi (data/olaylar_gezginler.js: 249 madde = 125 ajan maddesi
# [Polo, İbn Battûta, Rubruck, Evliya, Kolomb, Gama, Macellan, Cook…] + 124 yoldan taşınan yolculuk) ve
# 6 yeni arayüz gün kalıbı ("<Ay> # (ay hassasiyeti)": Ocak/Mayıs/Temmuz/Ağustos/Ekim/Aralık).
# Eski değerler: eksik arayüz 6, olay en/ar/es/de 36, pt 1153, ru 3250, fr 4150. Her dilde olay +249, arayüz +6.
# 10 Kasım 2026 (KRON-BOLGE-1110): tavan AÇILDI — 11 yeni dış olay (olaylar_dunya_bolge_1109.js: Krewo,
# Timur Halep, Ugra, Şarlken'in çekilmesi, Romanov, Sarı Sular, Austerlitz, Kanlı Pazar, Rıza Han, Kutsal
# İttifak, Zweibund) + 1 arayüz gün kalıbı. Çeviri işleri Emre'nin 4 Kasım kararıyla bekliyor.
# Eski değerler: eksik arayüz 12, olay en/ar/es/de 285, pt 1402, ru 3499, fr 4399.
# 11 Kasım 2026 (OSMANLI-LISTE-ONEM): tavan AÇILDI — arayüz eksik 13 -> 17: ⚙ Ayarlar'da iki etiket
# yeniden yazıldı (Bölgesel olaylar · Dünya olayları eşiği; 4 dizge). Çeviri işleri Emre'nin 4 Kasım
# kararıyla bekliyor. Eski değer: eksik arayüz 13.
# 11 Kasım 2026 (KRON-ETIKET): arayüz eksik 17 -> 16 — "Dünya olayları eşiği" etiketi "Devletlerin dünya
# kronolojilerini göster" diye birleşti ve 7 dile çevrildi (+ KRON-ETIKET'in 26 bölge/çip dizgesi). İner.
# 11 Kasım 2026 (KRON-UC-OLAY-1111): tavan AÇILDI — 3 yeni dış olay (olaylar_dunya_bolge_1109.js: Petro'nun
# çar ilanı 1682, Üç İmparator Ligi 1881, Fransız-Rus İttifakı 1894) + 1 arayüz gün kalıbı. Çeviri işleri
# Emre'nin 4 Kasım kararıyla bekliyor. Eski değerler (arayüz/olay): en 16/296, ar 16/296, es 16/296, de 16/296, pt 16/1413, ru 16/3510, fr 16/4410.
# 13 Kasım 2026 (POSTIT-156, oturum-397a34): tavan AÇILDI (Emre 1 Kasım kararı: önce ölç, aç, raporla) — Lugos kronoloji maddesinin Türkçe metni değişti (1716-10-13 -> 18, olaylar_senusi_0919.js): çevrilmiş dillerde (en/ar/es/de/pt) eski metin yetim, yeni metin eksik: olay +1. arayüz eksik 17 -> 18 ise taban main'den geliyor (bu dalın değiştirmediği bir dizge). Eski değerler: arayüz 17; olay en/ar/es/de 299, pt 1416.
# 13 Kasım 2026 (KASA UMIT gece partisi, oturum-009bcc): tavan AÇILDI (Emre 1 Kasım kararı) — UMIT B/B2 kronoloji maddeleri: Kırım 1954-02-19, RSFSR 1990-06-12, Alma-Ata 1991-12-21, SSCB sonu 1991-12-25/26 yeniden yazımı, Fransa Troyes/Arras/Pireneler/Basel, Hîve 1740, Estergon 1683, Ryswick 1697: her dilde olay eksik +7. Çeviri işleri Emre'nin 4 Kasım kararıyla bekliyor. Eski değerler: olay en/ar/es/de 300, pt 1417, ru 3513, fr 4413.
# 13 Kasım 2026 (KASA 13 KASIM, dondurma partisi): tavan AÇILDI (Emre 1 Kasım kararı: önce ölç, aç, raporla)
# — postit-173-a (İran 1747-1763): 3 yeni dış olay maddesi (1750-01-01 Kaçar bağımsızlığı, 1751-01-01
# Zend/İsfahan, 1759-02-13 Kaçar yenilgisi; data/olaylar_2s_0919.js) + 1 yeni devlet adı (kacar-esterabad).
# Her dilde olay +3, devlet +1. Çeviri işleri site bitince yapılacak (Emre, 13 Kasım). Eski değerler:
# devlet 1 (her dil); olay en/ar/es/de 307, pt 1424, ru 3520, fr 4420.
# 13 Kasım 2026 (KASA 13 KASIM, altıncı parti: P2 + Lozan-Sevr + ÇELİŞKİ-1113): tavan AÇILDI (Emre 1 Kasım
# kararı: önce ölç, aç, raporla) — arayüz +10: Lozan-Sevr mikro oynatıcısı (Başa, İleri, Oynat / duraklat,
# "adım)", "▶ Maddeleri tek tek oynat (", "⚠ İÇERİK DOĞRULANMADI —"), P2 "kayıt yok (boşluk beyanı)" ve hakemli
# çözümlerden çıkan yeni gün-kalıpları (Lozan/Sevr karşılaştırma, Ekim/Ocak/Mayıs/Temmuz/Aralık ay hassasiyeti,
# "# ilkbahar (…)"); olay +2: "Lozan–Sevr farkları" maddesi ve hakemli çözümde yeniden yazılan bir madde.
# Çeviri işleri site bitince yapılacak (Emre, 13 Kasım). Eski değerler: arayüz 18 (her dil); olay en/ar/es/de 310,
# pt 1427, ru 3523, fr 4423.
# 13 Kasım 2026 (KASA 13 KASIM, sekizinci parti: EMRELİC künye/antik/Roma dalları + UMIT ÇELİŞKİ-2 + LAB kaynak-avrupa):
# tavan AÇILDI (Emre 1 Kasım kararı) — arayüz +5: hakemli çözümlerden çıkan yeni gün-kalıpları (UMIT ÇELİŞKİ-2: Altın
# Orda/Beylikler/Memlûk/Balkan-Halef/İsveç/Timurlu açıklamaları); olay +1 (UMIT ÇELİŞKİ-2'de yeniden yazılan bir madde;
# EMRELİC'in yeni antik/Roma maddeleri data/kronoloji_sinir_antik_*.js çeviri evreninde değil). Çeviri işleri site
# bitince tek seferde (Emre, 13 Kasım). Eski değerler: arayüz 28 (her dil); olay en/ar/es/de 312, pt 1429, ru 3525, fr 4425.
BEKLENEN_CEVIRI_EKSIK = {
    "en": {"arayuz": 33, "devlet": 2, "olay": 313},
    "ar": {"arayuz": 33, "devlet": 2, "olay": 313},
    "es": {"arayuz": 33, "devlet": 2, "olay": 313},
    "de": {"arayuz": 33, "devlet": 2, "olay": 313},
    "pt": {"arayuz": 33, "devlet": 2, "olay": 1430},
    "ru": {"arayuz": 33, "devlet": 2, "olay": 3526},
    "fr": {"arayuz": 33, "devlet": 2, "olay": 4426},
}
BEKLENEN_CEVIRI_BAYAT = {
    "en": {"arayuz": 0, "devlet": 1, "olay": 65},
    "ar": {"arayuz": 0, "devlet": 1, "olay": 65},
    "es": {"arayuz": 0, "devlet": 1, "olay": 65},
    "de": {"arayuz": 0, "devlet": 1, "olay": 65},
    "pt": {"arayuz": 0, "devlet": 1, "olay": 53},
    "ru": {"arayuz": 0, "devlet": 1, "olay": 31},
    "fr": {"arayuz": 0, "devlet": 1, "olay": 7},
}


try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except AttributeError:
    pass


def ozet(s):
    h = 0x811C9DC5
    for b in (s or "").encode("utf-8", "surrogatepass"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return "%08x" % h


def _onbellek_anahtari():
    """index.html + data/*.js (çeviri hariç) + js/*.js boy/zaman damgası → çıkarıcı önbelleği anahtarı."""
    h = hashlib.sha1()
    for kl, desen in (("", "index.html"), ("data", ".js"), ("js", ".js")):
        yol = os.path.join(KOK, kl)
        adlar = [desen] if not kl else sorted(f for f in os.listdir(yol) if f.endswith(desen) and not f.startswith("ceviri_"))
        for ad in adlar:
            st = os.stat(os.path.join(yol, ad))
            h.update(("%s/%s:%d:%d;" % (kl, ad, st.st_size, st.st_mtime_ns)).encode())
    h.update(open(os.path.join(KOK, "arac", "ceviri_cikar.js"), "rb").read())
    return h.hexdigest()[:16]


def cikar():
    # Node çıkarıcısı bütün site verisini belleğe alır (~0,5 GB); veri değişmediyse önbellekten
    # okunur (KASA'da bellek darlığı, 4 Kasım 2026).
    import tempfile
    onb = os.path.join(tempfile.gettempdir(), "atlas_ceviri_cikar_%s.json" % _onbellek_anahtari())
    if os.path.exists(onb):
        with open(onb, encoding="utf-8") as f:
            return json.load(f)
    j = _cikar_node()
    with open(onb, "w", encoding="utf-8") as f:
        json.dump(j, f, ensure_ascii=False)
    return j


def _cikar_node():
    try:
        r = subprocess.run(["node", os.path.join(KOK, "arac", "ceviri_cikar.js"), KOK],
                           capture_output=True, timeout=600)
    except (OSError, subprocess.TimeoutExpired) as e:
        print("ÖLÇÜLEMEDİ: node çalışmadı:", e)
        sys.exit(2)
    if r.returncode != 0:
        print("ÖLÇÜLEMEDİ: çıkarıcı çöktü:", r.stderr.decode("utf-8", "replace")[:2000])
        sys.exit(2)
    j = json.loads(r.stdout.decode("utf-8"))
    if j["hatalar"]:
        print("uyarı: yüklenemeyen veri:", "; ".join(j["hatalar"]), file=sys.stderr)
    return j


def turkce(j, tur):
    """{id: {alan: türkçe}} — arayüzde id = metnin kendisi."""
    if tur == "olay":
        return {o["id"]: {k: o[k] for k in ("b", "d") if o[k]} for o in j["olay"]}
    if tur == "devlet":
        return {d["id"]: {"ad": d["ad"]} for d in j["devlet"]}
    return {s: {"m": s} for s in j["arayuz"]}


ONEK = re.compile(r'^\s*Ceviri\.ekle\("([a-z]+)","([a-z]+)",', re.S)


def dosyalar(dil, tur):
    d = re.compile(r"^ceviri_%s_%s(_\d+)?\.js$" % (dil, tur))
    return sorted(os.path.join(DATA, f) for f in os.listdir(DATA) if d.match(f))


def oku(dil, tur):
    """Kayıtları yükle → {id: kayıt}. olay kaydı {b:[m,oz], d:[m,oz]}; öteki [m,oz]."""
    kayit = {}
    for yol in dosyalar(dil, tur):
        with open(yol, encoding="utf-8") as f:
            metin = f.read()
        govde = metin[metin.index("Ceviri.ekle("):]
        m = ONEK.match(govde)
        kayit.update(json.loads(govde[m.end():govde.rstrip().rindex(")")]))
    return kayit


def kiyasla(tr, kayit, tur):
    tamam, bayat, eksik = [], [], []
    for id_, alanlar in tr.items():
        r = kayit.get(id_)
        if tur == "olay":
            durum = []
            for a, s in alanlar.items():
                if not r or a not in r: durum.append("eksik")
                elif r[a][1] != ozet(s): durum.append("bayat")
                else: durum.append("tamam")
            (eksik if "eksik" in durum else bayat if "bayat" in durum else tamam).append(id_)
        else:
            s = next(iter(alanlar.values()))
            if not r: eksik.append(id_)
            elif r[1] != ozet(s): bayat.append(id_)
            else: tamam.append(id_)
    yetim = [k for k in kayit if k not in tr]
    return tamam, bayat, eksik, yetim


def yaz_tur(dil, tur, kayit):
    for yol in dosyalar(dil, tur):
        os.remove(yol)
    if not kayit:
        return
    anahtarlar = sorted(kayit)
    parcalar, simdi, boy = [], {}, 0
    for k in anahtarlar:
        s = json.dumps({k: kayit[k]}, ensure_ascii=False)
        if tur == "olay" and simdi and boy + len(s.encode()) > PARCA_BAYT:
            parcalar.append(simdi); simdi, boy = {}, 0
        simdi[k] = kayit[k]; boy += len(s.encode())
    parcalar.append(simdi)
    for i, p in enumerate(parcalar, 1):
        ad = "ceviri_%s_%s.js" % (dil, tur) if len(parcalar) == 1 else "ceviri_%s_%s_%02d.js" % (dil, tur, i)
        satirlar = ",\n".join(json.dumps(k, ensure_ascii=False) + ":" + json.dumps(p[k], ensure_ascii=False) for k in sorted(p))
        with open(os.path.join(DATA, ad), "w", encoding="utf-8", newline="\n") as f:
            f.write("/* ÇEVİRİ %s · %s — arac/ceviri.py ile YAZILDI, elle düzenleme: py arac/ceviri.py uygula.\n"
                    "   Kayıt: id → [metin, kaynak_ozet] (olayda alan başına). Tasarım: denetim/CEVIRI-1103/TASARIM.md */\n"
                    % (dil, tur))
            f.write('Ceviri.ekle("%s","%s",{\n%s\n});\n' % (dil, tur, satirlar))


def dizin_yaz():
    var = []
    dosya = {}
    for kod, ad in DILLER:
        if kod == "tr":
            var.append({"kod": kod, "ad": ad}); continue
        liste = []
        for tur in TURLER:
            for yol in dosyalar(kod, tur):
                with open(yol, "rb") as f:
                    liste.append([os.path.basename(yol), hashlib.sha1(f.read()).hexdigest()[:8]])
        if liste:
            var.append({"kod": kod, "ad": ad}); dosya[kod] = liste
    with open(DIZIN, "w", encoding="utf-8", newline="\n") as f:
        f.write("/* ÇEVİRİ DİZİNİ — arac/ceviri.py yaz ile ÜRETİLDİ. Dil seçicinin dilleri ve tembel\n"
                "   yüklenecek dosyalar (sürüm = içerik özeti). js/ceviri.js'ten ÖNCE yüklenir. */\n")
        f.write("window.CEVIRI_DIZIN = " + json.dumps({"diller": var, "dosyalar": dosya}, ensure_ascii=False, indent=1) + ";\n")
    return var


def aktif_diller():
    """Çeviri dosyası olan (dil seçicide görünen) diller, DILLER sırasıyla."""
    return [k for k, _ in DILLER if k != "tr" and any(dosyalar(k, t) for t in TURLER)]


def denetim_olc(j=None, diller=None):
    """{dil: {tür: {tamam,bayat,eksik,yetim}}} — j verilmezse çıkarıcıdan okunur (ölçülemezse SystemExit 2)."""
    j = j or cikar()
    sonuc = {}
    for dil in (diller or aktif_diller()):
        sonuc[dil] = {}
        for tur in TURLER:
            t, b, e, y = kiyasla(turkce(j, tur), oku(dil, tur), tur)
            sonuc[dil][tur] = {"tamam": len(t), "bayat": len(b), "eksik": len(e), "yetim": len(y)}
    return sonuc


def denetim_hukmu(sonuc):
    """(çıkış 0/1, satırlar). 1 = herhangi bir dil×tür×{eksik,bayat} tavanı aşıyor."""
    satirlar = ["%-4s %-7s %7s %7s %7s   %s" % ("dil", "tür", "eksik", "bayat", "yetim", "tavan (eksik/bayat)")]
    asan, borc, indir = [], 0, []
    for dil, turler in sonuc.items():
        for tur, v in turler.items():
            te = BEKLENEN_CEVIRI_EKSIK.get(dil, {}).get(tur, 0)
            tb = BEKLENEN_CEVIRI_BAYAT.get(dil, {}).get(tur, 0)
            isaret = ""
            if v["eksik"] > te or v["bayat"] > tb:
                asan.append((dil, tur)); isaret = "  ✗ TAVAN AŞILDI"
            elif v["eksik"] < te or v["bayat"] < tb:
                indir.append((dil, tur)); isaret = "  ↓ tavan indirilebilir"
            borc += v["eksik"] + v["bayat"]
            satirlar.append("%-4s %-7s %7d %7d %7d   %d/%d%s" % (dil, tur, v["eksik"], v["bayat"], v["yetim"], te, tb, isaret))
    if asan:
        satirlar.append("✗  çeviri tavanı AŞILDI: %s → py arac/ceviri.py kuyruk; çevirt; uygula"
                        % ", ".join("%s/%s" % x for x in asan))
    else:
        satirlar.append("✓  çeviri tavanı aşılmadı · açık borç %d madde (eksik+bayat)" % borc)
    if indir:
        satirlar.append("   (iyileşme: BEKLENEN_CEVIRI_* değerlerini aynı commit'te indir: %s)"
                        % ", ".join("%s/%s" % x for x in indir))
    return (1 if asan else 0), satirlar


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("komut", choices=["durum", "bayat", "uygula", "yaz", "temizle", "denetim", "kuyruk"])
    ap.add_argument("--dil")
    ap.add_argument("--tur", choices=TURLER)
    ap.add_argument("--cikti"); ap.add_argument("--girdi"); ap.add_argument("--is", dest="is_")
    ap.add_argument("--sinir", type=int, default=0); ap.add_argument("--atla", type=int, default=0)
    a = ap.parse_args()
    diller = [a.dil] if a.dil else [k for k, _ in DILLER if k != "tr"]
    ad_diller = [a.dil] if a.dil else None

    if a.komut == "yaz":
        for dil in diller:
            for tur in TURLER:
                k = oku(dil, tur)
                if k: yaz_tur(dil, tur, k)
        print("diller:", ", ".join(d["kod"] for d in dizin_yaz()))
        return 0

    j = cikar()
    if a.komut == "denetim":
        kod, satirlar = denetim_hukmu(denetim_olc(j, ad_diller))
        print("\n".join(satirlar))
        return kod

    if a.komut == "kuyruk":
        import tempfile
        klasor = a.cikti or os.path.join(tempfile.gettempdir(), "atlas_ceviri_kuyruk")
        os.makedirs(klasor, exist_ok=True)
        toplam = 0
        for dil in (ad_diller or aktif_diller()):
            for tur in TURLER:
                tr = turkce(j, tur)
                _, b, e, _ = kiyasla(tr, oku(dil, tur), tur)
                ids = e + b
                yol = os.path.join(klasor, "%s_%s.json" % (dil, tur))
                if not ids:
                    if os.path.exists(yol): os.remove(yol)
                    continue
                is_ = {"dil": dil, "tur": tur,
                       "kaynak": {i: tr[i] if tur == "olay" else next(iter(tr[i].values())) for i in ids}}
                with open(yol, "w", encoding="utf-8") as f:
                    json.dump(is_, f, ensure_ascii=False, indent=1)
                toplam += len(ids)
                print("[%s/%s] eksik %d · bayat %d → %s" % (dil, tur, len(e), len(b), yol))
        print("kuyruk: %d madde · klasör %s · çevirt → py arac/ceviri.py uygula --dil <dil> --is <dosya> --girdi cevap.json" % (toplam, klasor))
        return 0

    if a.komut == "durum":
        for dil in diller:
            satir = []
            for tur in TURLER:
                k = oku(dil, tur)
                t, b, e, y = kiyasla(turkce(j, tur), k, tur)
                satir.append("%s tamam %d · bayat %d · eksik %d · yetim %d" % (tur, len(t), len(b), len(e), len(y)))
            if any(dosyalar(dil, tur) for tur in TURLER) or a.dil:
                print("[%s] " % dil + " | ".join(satir))
        return 0

    if not a.dil or (a.komut != "temizle" and a.komut != "uygula" and not a.tur):
        ap.error("--dil (ve bayat için --tur) gerekli")

    if a.komut == "bayat":
        tr = turkce(j, a.tur); k = oku(a.dil, a.tur)
        _, b, e, _ = kiyasla(tr, k, a.tur)
        ids = e + b
        if a.atla: ids = ids[a.atla:]
        if a.sinir: ids = ids[:a.sinir]
        is_ = {"dil": a.dil, "tur": a.tur, "kaynak": {i: tr[i] if a.tur == "olay" else next(iter(tr[i].values())) for i in ids}}
        with open(a.cikti, "w", encoding="utf-8") as f:
            json.dump(is_, f, ensure_ascii=False, indent=1)
        print("yeniden çevrilecek: %d (eksik %d · bayat %d) → %s" % (len(ids), len(e), len(b), a.cikti))
        return 0

    if a.komut == "uygula":
        with open(a.girdi, encoding="utf-8") as f:
            g = json.load(f)
        tur = g["tur"]; dil = g.get("dil", a.dil)
        if dil != a.dil: print("dil uyuşmuyor:", dil, a.dil); return 1
        if "kaynak" not in g:
            if not a.is_: ap.error("girdide kaynak yok: --is <bayat çıktısı> ver")
            with open(a.is_, encoding="utf-8") as f:
                g["kaynak"] = json.load(f)["kaynak"]
        kaynak = g["kaynak"]; k = oku(dil, tur); n = 0; atlanan = []
        for id_, m in g["kayit"].items():
            if id_ not in kaynak: atlanan.append(id_); continue
            if tur == "olay":
                r = k.setdefault(id_, {})
                for alan, s in kaynak[id_].items():
                    if isinstance(m, dict) and m.get(alan): r[alan] = [m[alan], ozet(s)]
            else:
                if not isinstance(m, str) or not m.strip(): atlanan.append(id_); continue
                k[id_] = [m, ozet(kaynak[id_])]
            n += 1
        yaz_tur(dil, tur, k); dizin_yaz()
        print("uygulandı: %d · atlanan %d" % (n, len(atlanan)))
        return 0

    if a.komut == "temizle":
        # arayüz atlanır: sözlüğe elle eklenen şablon/birleşik metinler (ay adları, "# madde")
        # çıkarıcının aday listesinde yoktur; yetim görünür ama kullanılır.
        for tur in ("devlet", "olay"):
            k = oku(a.dil, tur)
            _, _, _, y = kiyasla(turkce(j, tur), k, tur)
            for i in y: del k[i]
            if y: yaz_tur(a.dil, tur, k)
            print(tur, "yetim silindi:", len(y))
        dizin_yaz()
        return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
