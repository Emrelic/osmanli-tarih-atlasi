# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · TDV okumasindan cikan DAYANAKLARI kayitlara isler.
Sartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md §V · sema ONERI-KADEME-C-MODEL-0907.md

🔴 BU ALET HUKUM VERMEZ - okunmus TDV cumlelerini kayda TASIR. Her kalem
   icin dayanagin ALINTISI `not` alanina konur ki bir sonraki oturum
   kaynagi ACIP sinayabilsin (§4: kaynagi yazilmayan bilgi, kaynagi
   olmayandan ayirt edilemez).

🔴 `kesinlik` alani DOLDURULMADI ve sebebi OLCULDU:
   koridor.js  kesinlik: 1 ve 3   (TAMSAYI)
   yerlesim donemleri  kesinlik: "ay" · "yuzyil"  (DIZGI)
   ⇒ AYNI AD, IKI AYRI DEGER ALANI. Hangi olcegin gectigi bu katmanda
     KARARLASTIRILMAMIS; tahminle doldurmak ucuncu bir yazim uretirdi.
"""
import sys, io, os, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-ASYA-0907.json")

# (ne_a, ne_b) -> yama
YAMA = {
    ("Afghanistan", "Pakistan"): {
        "hal": "hukuki",
        "cins": "1893-durand",
        "dayanak": "Durand Hattı Antlaşması",
        "dayanak_t": "1893-11-12",
        "madde": "bulunamadı — TDV madde numarası vermiyor",
        "kaynak": "afganistan",
        "ne_degisti": False,
        "not_ek": (
            "🟢 DAYANAK BULUNDU · TDV `afganistan` gövdesi, iki ayrı cümlede: "
            "«Abdurrahman Han, 12 Kasım 1893'te, \"Durand Hattı\" olarak "
            "bilinen antlaşmayı imzalamak mecburiyetinde kaldı» VE «İngilizler'in "
            "Hindistan'dan çekilmesi üzerine, 1947'de Pakistan ve Hindistan adı "
            "altında iki ayrı devlet kuruldu; ancak DAHA ÖNCE DURAND HATTI İLE "
            "HİNDİSTAN'A BIRAKILMIŞ OLAN Afganlar'la meskûn yerleri Afganistan'ın "
            "istemesi Pakistan ile ihtilâfa yol açtı.» "
            "⇒ Çizgi 1893'te çizildi, 1947'de Pakistan'a OLDUĞU GİBİ geçti; "
            "ihtilâf hattın MEŞRUİYETİ hakkında, YERİ hakkında değil. "
            "1923-10-29'da bu çizgi ZATEN yürürlükteydi ve bugün de aynı yerde. "
            "⚠️ SINIRI: TDV «koordinatları hiç değişmedi» DEMİYOR; hükmü "
            "«1947'de olduğu gibi devredildi» ifadesinden çıkardım. Bu bir "
            "ÇIKARIM — ikinci bir kaynak (antlaşma metni) onu SINAMALI. "
            "1923 kimliği: afganistan / ingiliz-hindistani."),
    },
    ("India", "Nepal"): {
        "dayanak": "Suguali (Sugauli) Antlaşması",
        "dayanak_t": "1816-01-01",
        "madde": "bulunamadı",
        "kaynak": "nepal",
        "not_ek": (
            "🟡 DAYANAK BULUNDU, DEĞİŞİM SORUSU AÇIK · TDV `nepal`: «1814-1816 "
            "yıllarındaki İngiliz-Nepal savaşının ardından yapılan Suguali "
            "Antlaşması ile nüfusun yoğunlaştığı Terai topraklarının büyük kısmı "
            "İngilizler'e geçti.» ⇒ Hattın DAYANAĞI 1816'dır. Ama gövde "
            "«bu hat 1923'ten bugüne değişmedi» DEMİYOR ve `hal` ONU ister. "
            "⇒ `hukuki` YAZILMADI. Kapatmak için gereken: 1816 hattının "
            "sonraki değişikliği olup olmadığı (Terai'nin bir kısmı 1860'ta "
            "iade edilmiş olabilir — ÖLÇMEDİM, TDV bu gövdede söylemiyor). "
            "🟡 Antlaşmanın günü TDV'de YOK: yalnız «1814-1816» aralığı "
            "veriliyor ⇒ `dayanak_t` YIL hassasiyetinde yazıldı, GÜN UYDURULMADI "
            "(§4: kaynak yıl diyorsa yıl yazılır)."),
    },
    ("Iran", "Turkmenistan"): {
        "not_ek": (
            "⚪ ARANDI, TDV BU GÖVDELERDE SUSUYOR · `turkmenistan` (61.825 kr) "
            "ve `iran` (306.546 kr) ve `merv` (28.725 kr) okundu; 1881 Ahal "
            "(Ahal Teke) antlaşması ya da 1893 Horasan sınır tahdidi HİÇBİRİNDE "
            "geçmiyor. "
            "🔴 VE BU KALEM `§4⑧` TUZAĞININ CANLI ÖRNEĞİ: «Ahal» araması "
            "EŞLEŞTİ — ama cümle «Türkmenler'in AHAL TEKE ATI da dünyaca "
            "ünlüdür» idi. Bir SAYAÇ bunu «Ahal antlaşması bulundu» diye "
            "raporlardı. Aletim cümleyi BASTIĞI için yakalandı. "
            "⇒ damga: OKUNDU, BULUNAMADI (aramadım değil)."),
    },
    ("Afghanistan", "Iran"): {
        "not_ek": (
            "⚪ ARANDI, BULUNAMADI · TDV `afganistan` ve `sistan` okundu. "
            "`sistan` gövdesi 13.590 kr ama eşleşen cümlelerin bir kısmı SAYFA "
            "MOBİLYASI («Arama yenilendi», «Kopyalama metni») — yani gövde "
            "kısmen boilerplate (`§4④`). Goldsmid hakemliği (1872) ya da "
            "1903-05 Sîstan tahdidi HİÇ GEÇMİYOR."),
    },
    ("Mongolia", "Russia"): {
        "cins": "tannu-tuva-boslugu",
        "not_ek": (
            "🔴 ÖLÇÜLDÜ VE BİR VERİ BOŞLUĞU ÇIKTI · `devletler.js`te "
            "`tannu-tuva` künyesi VAR (1921-08-14 → 1923-10-29) ama VERİDE "
            "HİÇ KULLANILMIYOR (0 dönem, tarandı). ⇒ Atlas bugün Tuva'yı "
            "1923'te düz `sovyet-rusya` boyuyor. Bugünkü Rusya-Moğolistan "
            "sınırının bir bölümü 1923'te Tuva-Moğolistan sınırıydı ve atlas "
            "bunu İFADE ETMİYOR. "
            "⚠️ Bu benim dosyam DEĞİL — kayıt için. "
            "⚪ Ve sınır sorusu ayrıca AÇIK: TDV `mogolistan` (22.708 kr) "
            "okundu, 1921 ve 1924 olaylarını veriyor ama Tuva'yı ve SINIR "
            "HATTINI hiç anmıyor."),
    },
    ("China", "India"): {
        "not_ek": (
            "⚪ ARANDI, BULUNAMADI · TDV `tibet` (15.204 kr) okundu; 1904 "
            "İngiliz Lhasa seferini veriyor, 1914 Simla / McMahon hattını "
            "HİÇ ANMIYOR. ⇒ Bu kenarın 1923 dayanağı TDV'den çıkmıyor; "
            "`§4`in akademik kapısı gerekiyor. "
            "🟢 Ama 1923 KİMLİĞİ ölçüldü ve atlasta SAĞLAM: kenarın Çin yanı "
            "`tibet-ganden-phodrang` (Lhasa · Şigatse · Gyantse · Çamdo — "
            "8 dönem, 1912-02-12'den 1923'e). Yani bu kenar 1923'te "
            "Tibet-İngiliz Hindistanı sınırıydı, Çin-Hindistan DEĞİL."),
    },
}


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    n = 0
    for k in d["kenarlar"]:
        y = YAMA.get((k["ne_a"], k["ne_b"]))
        if not y:
            continue
        n += 1
        ek = y.pop("not_ek", None) if "not_ek" in y else None
        for alan, deger in y.items():
            k[alan] = deger
        if ek:
            k["not"] = k["not"] + "  ══ " + ek
        y["not_ek"] = ek                      # yamayi bozmadan geri koy
    d["_DAYANAK_TURU"] = ("TDV gövdeleri okundu (denetim/_tdv_onbellek/). "
                          "Eşleşen cümleler OLCUM-SINIR-ASYA-TDV-0907.json'da.")
    json.dump(d, io.open(YOL, "w", encoding="utf-8"),
              ensure_ascii=False, separators=(",", ":"))
    import collections
    print("yamalanan kenar:", n)
    print("hal :", dict(collections.Counter(x["hal"] for x in d["kenarlar"])))
    print("cins:", dict(collections.Counter(x["cins"] for x in d["kenarlar"])))
    print("dosya:", os.path.getsize(YOL), "bayt")


if __name__ == "__main__":
    main()
