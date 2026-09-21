# -*- coding: utf-8 -*-
"""UYDURMA NOKTA ENVANTERİ — hangi nokta gerçek yerleşim, hangisi dolgu?

Emre'nin hükmü (21 Eylül 2026): *"gerçek yerleşimler kalsın uydurma noktalar
silinsin. bu çölde eğer bir şehir bir yerleşim yeri var ise oraya nokta
koyabilirsin. yerleşim yeri yok ise koymamalısın."*

Bu alet SİLMEZ — üç kovaya ayırır ve her kovanın ölçütünü yazar. Silme,
kova ② için TEK KOMUTLUK; kova ③ için nokta nokta kaynağa sorulacak iştir.

KOVALAR:
  ① GERÇEK      `tur` yerleşim türlerinden biri (sehir/kasaba/kale/liman)
                ⇒ Emre'nin "gerçek yerleşim" dediği sınıf, DOKUNULMAZ
  ② UYDURMA     adı koordinattan ya da bir arazi adının NUMARALANMASINDAN
                türetilmiş (`Beyan G10.5 B52.5`, `Büyük Victoria Çölü 5`)
                ⇒ bir insan bu adı koymaz; bunlar boşluk doldurmak için
                  üretilmiş noktalardır
  ③ SORULACAK   `tur:"bolge"` ama adı gerçek bir yer adı (Hoggar, Kufra,
                Tibesti) ⇒ içlerinde MESKÛN VAHA var (Kufra, Tâzirbû,
                Rebyâne gerçek yerleşimlerdir) ve sırf arazi adı da var
                (Nûbe çölü, Serîr Kalanşû). Toplu silmek gerçek yeri
                götürür; tek tek TDV'ye sorulacak.

⚠️ NİÇİN "adı gerçek" tek başına yetmiyor: `tur:"bolge"` alanı zaten
   *"bu bir yerleşim değil"* demektir. Ama veri bu alanı MESKÛN vahalar için
   de kullanmış — yani alan, sorunun cevabı değil sorunun kendisidir.

Koşu:  py denetim/ARAC-UYDURMA-NOKTA-0921.py
       py denetim/ARAC-UYDURMA-NOKTA-0921.py --json  (silme betiğine girdi)
"""
import json
import os
import re
import sys
from collections import Counter, defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

YERLESIM_TUR = {"sehir", "kasaba", "kale", "liman", "koy", "vaha"}
# ② uydurma ad kalıpları — ikisi de ÖLÇÜLDÜ, tahmin edilmedi:
#    `Beyan G<enlem> B<boylam>`   46 nokta, hepsi yerlesimler_gamerika.js
#    `<arazi adı> <sayı>`         bir arazi adının numaralanmış kopyaları
KOORDINAT_AD = re.compile(r"^Beyan\s+[GK]\d", re.IGNORECASE)
NUMARALI_AD = re.compile(r"^(.+?)\s+(\d{1,2})$")


def main():
    json_kip = "--json" in sys.argv
    Y = girdi.yukle(sessiz=True)

    # Numaralı ad tek başına kusur DEĞİL ("III. Selim" değil ama "Roma 2"
    # evet). Ölçüt: aynı KÖK ada sahip numaralı nokta BİRDEN ÇOK olmalı —
    # tek başına "Şam 2" bir yazım kusuru olabilir, altı tane "Büyük
    # Victoria Çölü 2..7" bir ÜRETİM kalıbıdır.
    kok_sayaci = Counter()
    for y in Y:
        m = NUMARALI_AD.match(y.get("ad", "") or "")
        if m:
            kok_sayaci[m.group(1)] += 1

    kova = defaultdict(list)
    for y in Y:
        ad = y.get("ad", "") or ""
        tur = y.get("tur") or "?"
        m = NUMARALI_AD.match(ad)
        if KOORDINAT_AD.match(ad):
            kova["②a koordinattan türetilmiş ad"].append(y)
        elif m and kok_sayaci[m.group(1)] >= 2 and tur not in YERLESIM_TUR:
            kova["②b numaralanmış arazi adı"].append(y)
        elif tur in YERLESIM_TUR:
            kova["① gerçek yerleşim"].append(y)
        else:
            kova["③ sorulacak (tur=bolge, adı gerçek)"].append(y)

    if json_kip:
        cik = {k: [{"ad": y.get("ad"), "lat": y.get("lat"), "lon": y.get("lon"),
                    "tur": y.get("tur"),
                    "dosya": os.path.basename(y.get("_kaynak", "?")),
                    "s_var": bool(y.get("s")), "kur": y.get("kur")}
                   for y in v]
               for k, v in kova.items() if not k.startswith("①")}
        print(json.dumps(cik, ensure_ascii=False, indent=1))
        return 0

    print(f"toplam nokta: {len(Y):,}")
    for k in sorted(kova):
        v = kova[k]
        print(f"\n{k}: {len(v)}")
        if k.startswith("①"):
            for t, n in Counter(y.get("tur") for y in v).most_common():
                print(f"   {n:5}  {t}")
            continue
        for d, n in Counter(os.path.basename(y.get("_kaynak", "?"))
                            for y in v).most_common():
            print(f"   {n:5}  {d}")
        if k.startswith("②"):
            print("   ── adlar ──")
            for y in sorted(v, key=lambda t: t.get("ad", ""))[:50]:
                print(f"     {y.get('ad',''):<34} "
                      f"{y.get('lon',0):8.2f},{y.get('lat',0):7.2f}  "
                      f"{'s-dönemi VAR' if y.get('s') else ''}")
            if len(v) > 50:
                print(f"     … ve {len(v)-50} tane daha")

    ikinci = sum(len(v) for k, v in kova.items() if k.startswith("②"))
    ucuncu = sum(len(v) for k, v in kova.items() if k.startswith("③"))
    print(f"\nÖZET: silinecek (②) {ikinci} · sorulacak (③) {ucuncu} · "
          f"dokunulmayan (①) {len(kova['① gerçek yerleşim'])}")
    print("⚠️ ② kovasındaki noktaların `s` dönemi varsa silinince o devletin "
          "orada görünürlüğü DÜŞER — Değişmez 1 ve 2 yeniden ölçülmeli.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
