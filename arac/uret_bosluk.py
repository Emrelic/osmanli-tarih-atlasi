# -*- coding: utf-8 -*-
"""uret_bosluk.py — BOŞLUĞUN CİNSİNİ HARİTAYA TAŞIYAN KATMAN.

🔴 NİÇİN — Emre, 15 Ağustos 2026:
    "Câlû'nun çevresinde Evlâd Süleyman diye birinin egemenliği var ise
     bunu ayrı bir renk ve işaretleme tekniği ile gösterelim. Çöl ile
     aynı renkte durmasın."

Veri o ayrımı **zaten taşıyor** — 192 noktada `bos:` alanı var:
```
devletsiz 132 · kabile 34 · insansiz 9 · veri-yok 9 · hata 8
```
Ama ekranda hepsi **aynı beyaz.** Tuareg Amenokal'ının denetlediği Hoggar
ile *"burada kimse yaşamıyordu"* diyen Rub'ul Hâlî birebir aynı görünüyor.

────────────────────────────────────────────────────────────────────────
🔴 VE BİR VAAT ÖLÇÜMLE ÇÜRÜDÜ — kayıt

Emre'ye *"①'i bugün yaparız, app.js `bos:`i okusun, kod işi"* dedim.
**Ölçtüm, yanlıştı:**
```
donemler.js         "Hoggar" geçişi: 0
devletler_harita.js "Hoggar" geçişi: 0   (Tibesti · Karakum · hepsi 0)
```
Motor sahipsiz noktanın peteğini **hiç üretmiyor** — ekrandaki beyaz
çizilmiş bir şey değil, **çizilmemiş olanın arka planı.** Yani app.js'in
okuyacağı bir veri YOK. Petek üretmek 80 dakikalık koşu demekti.

🟢 **AMA PETEK ZATEN YANLIŞ ARAÇTI.** Kendi söylediğim şey buna engel:
*"aşiret sahasının SINIRI yoktur — mevsimlik ve geçirgendir; keskin çizgi
çizersek olmayan bir kesinlik uydurmuş oluruz."* Voronoi çokgeni tam da
keskin çizgidir.
⇒ Doğru çıktı **poligon değil NOKTA + CİNS**: arayüz onu benek bulutu,
doku ya da işaretle çizer. Ve bu, koşu GEREKTİRMEZ.

📌 Yani ölçüm iki şey yaptı: vaadi çürüttü **ve** daha doğru tasarımı
gösterdi. Pahalı yol aynı zamanda yanlış yoldu.

────────────────────────────────────────────────────────────────────────
⚠️ YARIÇAP UYDURULMUYOR

Hoggar tek bir nokta; Kel Ahaggar'ın sahası yüz binlerce km². Bu betik
`yaricap_km: null` yazar — kaynaktan gelmeyen bir yarıçap, olmayan bir
kesinliktir. Arayüz yarıçapsız kaydı **alan değil İŞARET** olarak çizer.
Kaynaklı yarıçap geldikçe alan çizimine geçilir.

    py arac/uret_bosluk.py
"""
import io
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
CIKTI = os.path.join(KOK, "data", "bos_alanlar.js")

# Cins sözlüğü — ARAYÜZ BUNU OKUR, kendi listesini TUTMAZ.
# (Aynı bilgi iki yerde durursa biri güncellenince öteki bayatlar.)
CINSLER = {
    "kabile":    {"ad": "aşiret / konfederasyon denetimi",
                  "aciklama": "devlet değil ama SAHİPSİZ DE DEĞİL — "
                              "sınırı yoktur, mevsimlik ve geçirgendir",
                  "gosterim": "benek"},
    "devletsiz": {"ad": "devletsiz — boş arazi",
                  "aciklama": "kaynak AÇIKÇA söylüyor: burada devlet yoktu, "
                              "ve yerleşim de yok. Emre'nin 4/2/1 puanlaması "
                              "bu toprağı komşusuna katabilir",
                  "gosterim": "bos"},
    # 🔴 20 Ağustos 2026 — Emre: "devletsiz ŞEHİRLER var ise bunları haritada
    # göstermek lâzım … onların hakkını SAKLI TUTALIM o topraklarda."
    # Bu cins boyanMAZ ve GÖRÜNÜR: yerleşimi olan ama merkezî devlete bağlı
    # olmayan yerler. Kayıtların kendi metni: "yerleşim VARDI ama hiçbir
    # devletin idaresinde değildi."
    "devletsiz-yerlesim":
                 {"ad": "devletsiz şehir / yerel idare",
                  "aciklama": "yerleşim VAR ama merkezî bir devlete bağlı "
                              "değil — körfez şeyhliği, Necid kasabası, "
                              "yerli topluluk. Toprağı komşu devlete "
                              "KATILMAZ; hakkı saklıdır",
                  "gosterim": "halka"},
    "insansiz":  {"ad": "insansız",
                  "aciklama": "yerleşim yoktu — coğrafî boşluk",
                  "gosterim": "bos"},
    "veri-yok":  {"ad": "veri yok",
                  "aciklama": "kaynak SUSUYOR — bilmiyoruz, boş olduğunu "
                              "değil BİLMEDİĞİMİZİ gösterir",
                  "gosterim": "soru"},
    "hata":      {"ad": "hata kaydı", "aciklama": "düzeltme bekliyor",
                  "gosterim": "bos"},
}


def main():
    import girdi
    Y = girdi.yukle(sessiz=True)
    kayit = []
    for y in Y:
        c = y.get("bos")
        if not c:
            continue
        # 🔴 EMRE, 20 Ağustos 2026: *"Yerli aşiretler filan ya da DEVLETSİZ
        # ŞEHİRLER var ise bunları haritada göstermek lâzım."* ve
        # *"devletsiz ama yerleşim yeri veya aşiret yapısı filan var ise
        # onların hakkını saklı tutalım o topraklarda."*
        #
        # `devletsiz` tek etiketti ve HİÇ ÇİZİLMİYORDU (gosterim="bos").
        # Ama içinde iki apayrı şey var — ölçüldü, 129 kayıt:
        #    tur="bolge"  37   boş çöl dolgusu ⇒ ekleyici kapı BOYAYACAK,
        #                      işaret gereksiz (toprak artık bir devletin)
        #    yerleşim     92   Riyad · Hâil · Manama · Doha · Abu Dabi ·
        #                      Mukalla · Vladivostok · Taos Pueblo …
        #                      ⇒ boyanMAYACAK ve GÖRÜNMESİ gereken bunlar
        #
        # 📌 AYRIM KAPININKİYLE BİREBİR AYNI (`uret_petek.py:3559`) ve bu
        # KASITLI: iki yerde iki farklı ölçüt kullanılsaydı harita ile
        # işaret katmanı çelişirdi — boyanan yerde işaret, boş yerde hiçbir
        # şey çıkardı. Aynı soruyu iki alet aynı biçimde sormalı.
        if c == "devletsiz" and y.get("tur") != "bolge":
            c = "devletsiz-yerlesim"
        pen = _pencere_kes(_bos_pencereler(y), y)
        if pen == []:      # hiçbir tarihte görünmez (kur sonrası hep sahipli)
            continue
        kayit.append({
            "ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
            "cins": str(c),
            "neden": _okura(y.get("neden") or ""),
            # 🔴 UYDURULMUYOR — kaynaklı yarıçap gelene kadar null
            "yaricap_km": None,
            "p": pen,
        })
    kayit.sort(key=lambda x: (x["cins"], x["ad"]))
    say = {}
    for k in kayit:
        say[k["cins"]] = say.get(k["cins"], 0) + 1

    g = io.StringIO()
    g.write("// BOŞ ALANLAR — boşluğun CİNSİ · ÜRETİLMİŞ DOSYA\n")
    g.write("//\n")
    g.write("// ⚙️ ELLE DÜZENLEME YOK. Üreteci: arac/uret_bosluk.py\n")
    g.write("// Kaynak: yerlesimler*.js içindeki `bos:` ve `neden:` alanları.\n")
    g.write("//\n")
    g.write("// 🔴 NİÇİN VAR: 192 noktada boşluğun cinsi YAZILI ama harita\n")
    g.write("// hepsini AYNI beyaza boyuyordu. Tuareg konfederasyonunun\n")
    g.write("// denetlediği Hoggar ile insansız Rub'ul Hâlî ekranda ayırt\n")
    g.write("// edilemiyordu.\n")
    g.write("//\n")
    g.write("// ⚠️ `yaricap_km: null` — KAYNAKSIZ YARIÇAP UYDURULMADI.\n")
    g.write("// Yarıçapsız kayıt ALAN değil İŞARET olarak çizilir.\n")
    g.write("//\n")
    for c, n in sorted(say.items(), key=lambda x: -x[1]):
        g.write("//   %-12s %4d\n" % (c, n))
    g.write("\nwindow.BOS_CINSLER = ")
    g.write(_js(CINSLER))
    g.write(";\n\nwindow.BOS_ALANLAR = [\n")
    for k in kayit:
        p = k["p"]
        ps = "" if p is None else ", p:[%s]" % ",".join(
            "[%s,%s]" % (_s(a) if a else "null", _s(b) if b else "null") for a, b in p)
        g.write("{ad:%s, lat:%.4f, lon:%.4f, cins:%s, yaricap_km:null, neden:%s%s},\n"
                % (_s(k["ad"]), k["lat"], k["lon"], _s(k["cins"]),
                   _s(k["neden"][:300]), ps))
    g.write("];\n")
    io.open(CIKTI, "w", encoding="utf-8", newline="\n").write(g.getvalue())
    print("🟢 %s yazıldı · %d kayıt" % (os.path.relpath(CIKTI, KOK), len(kayit)))
    for c, n in sorted(say.items(), key=lambda x: -x[1]):
        print("   %-12s %4d   gösterim: %s"
              % (c, n, CINSLER.get(c, {}).get("gosterim", "?")))
    print("\n⚠️ index.html'e SCRIPT SATIRI eklenmeli, yoksa dosya OKUNMAZ.")
    print("   Bu projede bağlanmamış veri dosyası ÜÇ KEZ yaşandı.")
    return 0


# 🔴 KUTU-D-1014 (0052/H-0114, Emre: "1672'de Pavlodar/Barnaul/Semipalatinsk
# 'devletsiz şehir idaresi' diyor … o yeşil renk kimin"). Kayıtların ZAMAN
# BOYUTU yoktu: Barnaul'un `bos:` beyanı "1635 öncesi" içindir, 1635'ten sonra
# nokta `cungar`ın (yeşil) — ama halka her tarihte çiziliyordu.
# ⇒ `p`: yerleşimin HİÇBİR sahiplik dönemiyle (d · v · s · isg) örtülmediği
#    aralıklar, [f, t) — null açık uç. Arayüz halkayı/beneği yalnız bu
#    aralıklarda çizer. Hiç dönemi olmayan kayıtta `p` YAZILMAZ (her zaman boş).
# Ölçüt veriden türüyor, tarih uydurulmuyor: aralık uçları kaydın kendi
# dönem uçlarıdır.
def _bos_pencereler(y):
    dolu = []
    for alan in ("d", "v", "s", "isg"):
        for d in (y.get(alan) or []):
            if isinstance(d, dict) and d.get("f") and d.get("t"):
                dolu.append((str(d["f"]), str(d["t"])))
    if not dolu:
        return None
    dolu.sort()
    birlesik = []
    for f, t in dolu:
        if birlesik and f <= birlesik[-1][1]:
            if t > birlesik[-1][1]:
                birlesik[-1][1] = t
        else:
            birlesik.append([f, t])
    pen = []
    onceki = None
    for f, t in birlesik:
        pen.append((onceki, f))
        onceki = t
    pen.append((onceki, None))
    return pen


# 🔴 ZAMAN PENCERESİ (Emre, 22 Ekim 2026): "aşiret / şehirsiz devlet / soru işaretli
# noktalar zamana bağlı çalışmıyor, en baştan en sona konduğu yerde duruyor."
# `_bos_pencereler` yalnız ilk sahip dönemine KADARKİ aralığı verir; yapının
# kendisinin ne zaman var olduğunu bilmez. İki kesme eklendi:
#   ① otomatik: yerleşimin `kur:` tarihinden önce halka/benek/soru çizilmez
#      (yer henüz yoktu);
#   ② PENCERE tablosu: kaydın kendi `neden:` metni yapının başlangıç (bf) ve/veya
#      bitiş (bt) gününü KAYNAKLI verdiğinde. Tarih uydurulmaz; gün yoksa
#      YYYY-01-01. Tablo burada tutulur (girdi.py motor tuzudur, dokunulmaz).
# Anahtar = yerleşim adı → (bf, bt, gerekçe)
PENCERE = {
    "Tamanrasset": ("1750-01-01", "1902-01-01", "neden: Kel Ahaggar konfederasyonu ~1750'den teşkilatlı; 1902 Tit (Fransız) sonrası biter"),
    "Hoggar": ("1750-01-01", "1902-01-01", "Tamanrasset kaydıyla aynı Kel Ahaggar konfederasyonu (zincir komşudan)"),
    "Hawaii Adaları (Birleşme Öncesi — moku/aliʻi sistemi)": (None, "1795-01-01", "neden: 1795 Kamehameha I birleştirmesine kadar ayrı moku/aliʻi sistemleri"),
    "Bau (Fiji Konfederasyonları)": (None, "1874-10-10", "neden: 1874 İngiliz ilhakına kadar üç konfederasyon; gün Suva kaydından"),
    "Aotearoa Māori Yerleşimi (Kuzey Adası içi)": (None, "1840-02-06", "neden: 1840 Waitangi'ye kadar merkezî devlet yok; gün Whangārei kaydından"),
    "Te Waipounamu Māori Yerleşimi (Güney Ada içi)": (None, "1840-02-06", "neden: 1840'a kadar merkezî devlet yok; gün Whangārei kaydından"),
    "Tazmanya (Aborijin Tazmanyalılar)": (None, "1803-01-01", "neden: 1803 İngiliz yerleşimine kadar merkezî devlet yok"),
    "Oraibi (Hopi, Üçüncü Mesa)": (None, "1821-01-01", "neden: Weber (1992) — Hopi 1821'e kadar fiilen bağımsız"),
    "Pecos Pueblo (Cicuye)": (None, "1598-01-01", "neden: Pueblo köyleri özerk; İspanyol yerleşimi 1598 Oñate ile başladı"),
    "Paquimé (Casas Grandes)": (None, "1560-01-01", "neden: İspanyol idaresi '1560'lardan sonra' ulaştı (on yıl hassasiyeti)"),
    "Wintu (Yukarı Sacramento)": (None, "1850-09-09", "neden: ABD idaresi eyalet oluşuyla 1850-09-09'da başladı"),
    "Yakut toprakları (Orta Lena)": (None, "1632-09-25", "neden: Ruslar 25 Eylül 1632'de Lena Kalesi'ni kurdu"),
    # ── 23 Ekim 2026 ikinci tur: kalan zamansız kayıtlar kaynak merdiveniyle arandı.
    # Yalnız akademik dayanaklı (orta+ güven) bitişler yazıldı; yıl hassasiyeti.
    "Kamçatka (İtelmen toprakları)": (None, "1697-01-01", "Atlasov seferi 1697-98, yasak hemen toplandı (Estonya Kızıl Kitap İtelmen maddesi; Lantzeff doğrulanamadı) — güven orta, yıl"),
    "Penjina havzası (kuzey Koryak)": (None, "1709-01-01", "Penjina (Aklan) ostrogu 1709 sonbaharı — Elert, Science First Hand 52/2 (2019); fiilî denetim zayıf, kısmî — güven orta, yıl"),
    "Mapungubwe": (None, "1320-01-01", "terk ~AD 1320 — Huffman & Woodborne 2021, South African Journal of Science 117 (eski görüş 1290; Chirikure daha geç diyor) — güven orta, yıl"),
    "Yap": (None, "1886-06-29", "İspanyol valisi Manuel de Elisa Yap'a 29 Haziran 1886'da geldi, garnizon kuruldu — History of Micronesia Source Documents c.31; 1885 Alman bayrağı sembolikti — güven orta"),
    "Avustralya İç Kesimi (Orta — Arrernte bölgesi)": (None, "1872-01-01", "Overland Telegraph / Alice Springs telgraf istasyonu 1872; Hermannsburg 1877 (NMA) — güven orta, yıl"),
    "Cape York Yarımadası": (None, "1873-01-01", "Palmer River altın hücumu + Yerli Polis 1873 — Cole, ANU Press; en kuzey uç için doğrulanmadı — güven orta, yıl"),
    "Cape York Yarımadası 2": (None, "1873-01-01", "Cape York Yarımadası ile aynı kaynak ve gerekçe"),
    "Avustralya İç Kesimi (Kuzeydoğu — Cape York)": (None, "1873-01-01", "Cape York Yarımadası ile aynı kaynak ve gerekçe"),
    "Avustralya İç Kesimi (Kuzeybatı — Kimberley)": (None, "1881-01-01", "Batı Avustralya Kimberley pastoral kira tahsisi 1881 — Smith, ANU Press; Bolton 1958 — güven orta, yıl"),
    "Kimberley iç kesimi": (None, "1881-01-01", "Kimberley ile aynı kaynak ve gerekçe"),
}


ERA_BASI = "1281-01-01"   # atlasın çekirdek devri; `neden:` iddiaları "1281-X arası"
ERA_SONU = "1924-01-01"   # sahibi olmayan kaydın iddiası "1281-1923 arası" (dışlayıcı uç)


def _kes(pen, bf, bt):
    """[f,t) aralık listesini [bf,bt) ile kesiştirir; boş kalan aralık düşer."""
    if pen is None:
        pen = [(None, None)]
    sonuc = []
    for f, t in pen:
        f2 = max(x for x in (f, bf) if x) if (f or bf) else None
        t2 = min(x for x in (t, bt) if x) if (t or bt) else None
        if f2 and t2 and f2 >= t2:
            continue
        sonuc.append((f2, t2))
    return sonuc


def _pencere_kes(pen, y):
    # `kur:` iki anlam taşır (VERI-YAPISI.md): yerin kuruluşu ya da SAHİBİN
    # (örn. Rus kalesi) başlangıcı. Sahibin başlangıcıysa kur ≥ pencere sonu
    # olur ve "öncesi devletsiz" penceresini silerdi (Dudinka 1667 vakası) —
    # o durumda kur bu pencereyi KESMEZ.
    kur = str(y["kur"]) if y.get("kur") else None
    ek = PENCERE.get(y["ad"])
    # 🔴 ZAMAN SINIRI (24 Ekim 2026, LAB ölçümü): null başlangıç = "MÖ 12000'den
    # beri" demekti ve 663 çizilen kaydın 652'si (560 null-başlangıç + 92 p'siz)
    # her tarihte görünüyordu. Kayıtların `neden:` metinleri iddiayı atlasın
    # çekirdek devrinde yapar ("1281-1551 arası…", "1281-1923 arasında merkezî
    # devlet kaydı yoktur") — 1281 öncesi için bir iddia YOKTUR. Başlangıcı
    # kaynaklı bir gün (kur · PENCERE) bildirmeyen kayıt ERA_BASI'ndan başlar;
    # sahibi hiç olmayan kayıt (p'siz) ERA_SONU'nda biter. Devir dışında iddia
    # uydurulmaz.
    bf_ek = (ek[0] if ek else None) or ERA_BASI
    bt = ek[1] if ek else None
    if bt is None and not any(y.get(a) for a in ("d", "v", "s", "isg")):
        bt = ERA_SONU
    # `bit:` yerin yok oluşu — bundan sonra nokta çizilmez (1281 öncesi YER-TANIMA
    # kayıtları `bit:"1281-01-01"` taşır; kırpılmazsa 1900'de Pavia'ya "?" konurdu).
    if y.get("bit"):
        bit = str(y["bit"])
        bt = bit if not bt or bit < bt else bt
    if pen is None:
        pen = [(None, None)]
    sonuc = []
    for f, t in pen:
        bf = bf_ek
        if kur and (t is None or kur < t) and (not bf or kur > bf):
            bf = kur
        sonuc.extend(_kes([(f, t)], bf, bt))
    return sonuc


# Okura giden `neden` metninden geliştirici notu ("🔴 … TDV'ye basmıyor") çıkar:
# o not iç denetimin dilidir, popup'ta okura sızıyordu (0052/H-0114).
def _okura(metin):
    metin = metin.strip()
    i = metin.find("🔴")
    if i >= 0:
        metin = metin[:i].rstrip()
    return metin


def _s(x):
    return '"%s"' % (x or "").replace("\\", "\\\\").replace('"', '\\"') \
        .replace("\n", " ")


def _js(d):
    p = []
    for k, v in d.items():
        ic = ", ".join("%s:%s" % (a, _s(b)) for a, b in v.items())
        p.append("  %s: {%s}" % (_s(k), ic))
    return "{\n" + ",\n".join(p) + "\n}"


if __name__ == "__main__":
    sys.exit(main())
