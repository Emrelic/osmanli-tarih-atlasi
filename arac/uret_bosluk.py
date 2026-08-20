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
        kayit.append({
            "ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
            "cins": str(c),
            "neden": (y.get("neden") or "").strip(),
            # 🔴 UYDURULMUYOR — kaynaklı yarıçap gelene kadar null
            "yaricap_km": None,
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
        g.write("{ad:%s, lat:%.4f, lon:%.4f, cins:%s, yaricap_km:null, neden:%s},\n"
                % (_s(k["ad"]), k["lat"], k["lon"], _s(k["cins"]),
                   _s(k["neden"][:300])))
    g.write("];\n")
    io.open(CIKTI, "w", encoding="utf-8", newline="\n").write(g.getvalue())
    print("🟢 %s yazıldı · %d kayıt" % (os.path.relpath(CIKTI, KOK), len(kayit)))
    for c, n in sorted(say.items(), key=lambda x: -x[1]):
        print("   %-12s %4d   gösterim: %s"
              % (c, n, CINSLER.get(c, {}).get("gosterim", "?")))
    print("\n⚠️ index.html'e SCRIPT SATIRI eklenmeli, yoksa dosya OKUNMAZ.")
    print("   Bu projede bağlanmamış veri dosyası ÜÇ KEZ yaşandı.")
    return 0


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
