# -*- coding: utf-8 -*-
"""İKİ AYAĞI AYRI ALANA ÇIKARIR — SINIR-KAFRIKA-0907

1.MURAT (M-3225) Eritre–Sudan kaydının `_NOT`una *"1923 dayanağı BULUNDU,
süreklilik GÖSTERİLMEDİ"* yazmamı istedi. Prose olarak ZATEN yazılıydı —
ama `§11`in tek sınavı prose'u geçmez:
    ***bu bilgiyi bir `if` ile sorabiliyor muyum?***
Serbest metne yazılmış bir ders "inmiş sayılmaz"; `grep` bulur, makine
bulamaz. O yüzden ayrımı BİR KENARA değil BÜTÜN KENARLARA açıyorum.

🔴 VE BOOLEAN KULLANMIYORUM. `sureklilik` üç değerli:
    gosterildi   kaynak "PRESENT boundary" diyor — süreklilik OLUMLU kanıt
    curutuldu    kaynak sınırın 1923'ten SONRA kurulduğunu söylüyor
    gosterilmedi ne biri ne öteki — ve bu bir YOKLUK, bir HAYIR DEĞİL
Boolean olsaydı `curutuldu` ile `gosterilmedi` aynı `False`a düşerdi ve
bir sonraki oturum ikisini AYNI iş sanardı. Biri KAPALI, öteki AÇIK.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "denetim", "SINIR-HUKUKI-KAFRIKA-0907.json")

# hal -> (dayanak_1923, sureklilik) varsayilan turetimi
# Kenar bazli istisnalar asagida.
ISTISNA = {
    # 1923 dayanagi ADIYLA bulundu ama bugunku hat BASKA bir belgeden
    ("Chad", "Sudan"): ("bulundu", "curutuldu"),
    ("Central African Republic", "Sudan"): ("bulundu", "curutuldu"),
    ("Libya", "Sudan"): ("bulundu", "curutuldu"),
    ("Algeria", "Libya"): ("bulundu", "curutuldu"),
    ("Algeria", "Morocco"): ("bulundu", "curutuldu"),
    # capa gununde ORTADA BIR CIZGI YOKTU — dayanak "bulunamadi" degil YOK
    ("Egypt", "Libya"): ("yok-1923te-delimite-degildi", "curutuldu"),
    # kenar 1923'te HIC YOKTU
    ("South Sudan", "Sudan"): ("konusuz", "konusuz"),
    # dayanak bulundu, sureklilik GOSTERILMEDI  ← M-3225'in konusu
    ("Eritrea", "Sudan"): ("bulundu", "gosterilmedi"),
    # hic bakilmadi
    ("Algeria", "Tunisia"): ("okumadim", "okumadim"),
    ("Morocco", "Spain"): ("okumadim", "okumadim"),
}


def main():
    d = json.load(io.open(YOL, encoding="utf-8"))
    sayac_d, sayac_s = {}, {}
    for k in d["kenarlar"]:
        p = (k["a"], k["b"])
        if p in ISTISNA:
            dy, su = ISTISNA[p]
        elif k["hal"] in ("hukuki", "ayni-kimlik"):
            # bu kenarlarda kaynak IKISINI BIRDEN kendi cumlesiyle soyluyor
            dy, su = "bulundu", "gosterildi"
        else:
            dy, su = "okumadim", "okumadim"
        k["dayanak_1923"] = dy
        k["sureklilik"] = su
        sayac_d[dy] = sayac_d.get(dy, 0) + 1
        sayac_s[su] = sayac_s.get(su, 0) + 1

    d["_IKI_AYAK"] = (
        "«Bu çizgi 1923'ten beri değişti mi?» sorusunun İKİ ayağı var ve "
        "`hal` ikisini tek değere sıkıştırıyor. Ayrı sorulabilsinler diye "
        "iki alan açıldı. `sureklilik` ÜÇ değerli, boolean DEĞİL: "
        "'curutuldu' (sınır 1923'ten sonra kuruldu — kalem KAPALI) ile "
        "'gosterilmedi' (ne olumlu ne olumsuz kanıt — kalem AÇIK) bir "
        "boolean'da aynı False'a düşer ve bir sonraki oturum ikisini aynı "
        "iş sanır. Biri bitmiş, öteki bekliyor.")
    with io.open(YOL, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1))

    print("dayanak_1923 : %s" % sayac_d)
    print("sureklilik   : %s" % sayac_s)
    print("")
    print("AÇIK KALEM (sureklilik='gosterilmedi' ya da 'okumadim'):")
    for k in d["kenarlar"]:
        if k["sureklilik"] in ("gosterilmedi", "okumadim"):
            print("   %-26s %-26s %8.1f km   dayanak=%s"
                  % (k["a"], k["b"], k["km"], k["dayanak_1923"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
