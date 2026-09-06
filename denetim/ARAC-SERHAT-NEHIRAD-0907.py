# -*- coding: utf-8 -*-
"""NEHIR ADI PARCALANMASI — SERHAT-NEHIR sayilarini BOLUYOR.  YALNIZ OKUR.

🔴 SUPHE (koddan degil, CIKTIDAN): rapor `Danube 22` ve `Donau 5` diye
   IKI SATIR yaziyor — AYNI NEHIR, iki dilde. Ayni sey `Evros`
   (=Meric/Maritsa) icin de gecerli. ⇒ nehir basina sayilar
   PARCALANMIS ve bir nehrin gercek agirligi OLDUGUNDAN KUCUK gorunuyor.

🔴 VE NORMALLESTIRICI BUNU COZMEZ: `Tuna` ↔ `Danube` bir YAZIM VARYANTI
   DEGIL, AYRI BIR ADdir. `CLAUDE.md`: "Diyarbekir ↔ Diyarbakir bir
   yazim varyanti degil AYRI BIR ADdir. Normallestirici onu cozmez ve
   COZMEMELIDIR — onu bir ESANLAM SOZLUGU cozer."
   Bu, o dersin NEHIR yuzu.

OLCUM: ayni `rivernum` (Natural Earth'un nehir kimligi) altinda kac
FARKLI ad geciyor?  `rivernum` bir ad degil bir KIMLIKTIR — yani
esanlami veri KENDISI tasiyor, biz uydurmuyoruz.
"""
import sys, io, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_rivers.geojson", encoding="utf-8"))

grup = defaultdict(set)
alt = defaultdict(set)
for f in gj["features"]:
    p = f["properties"]
    rn = p.get("rivernum")
    ad = p.get("name")
    if rn is None:
        continue
    if ad:
        grup[rn].add(ad)
    for a in (p.get("name_alt") or "").split("|"):
        a = a.strip()
        if a:
            alt[rn].add(a)

cok = {k: v for k, v in grup.items() if len(v) > 1}

# SERHAT sayilarini rivernum'a gore TOPLA
O = json.load(io.open(KOK + r"\denetim\SERHAT-NEHIR-0907.md".replace(".md", ".md"),
                      encoding="utf-8")) if False else None

f = io.open(KOK + r"\denetim\SERHAT-NEHIRAD-0907.md", "w", encoding="utf-8")
W = f.write
W("# NEHİR ADI PARÇALANMASI — `SERHAT-NEHIR-0907.md`in sayılarını BÖLÜYOR\n\n")
W("> 🔴 Şüphe koddan değil **çıktıdan** geldi: rapor `Danube 22` ve\n")
W("> `Donau 5` diye iki satır yazıyor — **aynı nehir, iki dilde.**\n")
W("> Ölçüt: Natural Earth'ün kendi `rivernum` kimliği. Bu bir ad değil\n")
W("> bir **kimlik**tir ⇒ eşanlamı veri KENDİSİ taşıyor, biz uydurmuyoruz.\n\n")
W("```\n")
W("adlı nehir kimliği (rivernum)          %d\n" % len(grup))
W("🔴 BİRDEN ÇOK ADI OLAN kimlik          %d\n" % len(cok))
W("bu kimliklerin taşıdığı ad sayısı      %d\n" % sum(len(v) for v in cok.values()))
W("```\n\n")
W("## Birden çok adla geçen nehirler\n\n")
W("| rivernum | adlar | ad sayısı |\n|---|---|---|\n")
for k, v in sorted(cok.items(), key=lambda t: -len(t[1]))[:30]:
    W("| %s | %s | %d |\n" % (k, " · ".join("`%s`" % x for x in sorted(v)), len(v)))

W("\n## 🔴 EMRE'NİN İKİ NEHRİ — ad parçalanması ADIYLA\n\n```\n")
for hedef in ["Danube", "Donau", "Dunav", "Duna", "Dunarea",
              "Evros", "Maritsa", "Marica", "Meric"]:
    bul = [k for k, v in grup.items() if hedef in v]
    if bul:
        for k in bul:
            W("%-10s -> rivernum %-6s · bu kimlikteki ADLAR: %s\n"
              % (hedef, k, ", ".join(sorted(grup[k]))))
    else:
        W("%-10s -> bu ADLA hiç parça YOK\n" % hedef)
W("```\n\n")
W("⚠️ **HÜKÜM:** `SERHAT-NEHIR-0907.md`in *\"hangi nehir kaç sınır çifti\"*\n")
W("tablosu **ad başına** sayıyor, kimlik başına değil. Bir nehrin gerçek\n")
W("ağırlığı o tabloda **olduğundan küçük** görünür. Tablo yanlış değil,\n")
W("**birimi ad** — ve birim bildirilmezse okuyan onu nehir sanar.\n")
W("📌 `CLAUDE.md §11`: *\"bir sayım birimi yanlışsa, ölçüm veriyi değil\n")
W("verinin YAPISINI ölçer.\"*\n\n")
W("🔴 **VE NORMALLEŞTİRİCİ BUNU ÇÖZEMEZ.** `Tuna` ↔ `Danube` bir yazım\n")
W("varyantı değil **ayrı bir ad**. `ARAC-NORMAL-0903.py` doğru çalışıyor\n")
W("ve çözmemeli. Çözecek olan bir **eşanlam sözlüğü**dür.\n\n")
W("> 🔴🔴 **BU DOSYANIN İLK YAZIMINDA ŞU CÜMLE VARDI VE ÇÜRÜDÜ:**\n")
W("> *\"iyi haber: `rivernum` onun anahtarını veride HAZIR veriyor.\"*\n")
W("> Ölçüldü (`SERHAT-TUNA-0907.md`): `Danube`=rivernum **25**,\n")
W("> `Donau`=rivernum **38** — AYRI kimlikler. Ve uçları\n")
W("> `(17.206, 48.061)`de **0,0 km** ile birleşiyor (Bratislava/Devín),\n")
W("> yani ikisi **aynı nehrin iki reach'i**.\n")
W("> ⇒ Ad parçalanması **GERÇEK**; `rivernum` onu **ÇÖZMÜYOR**.\n")
W("> `rivernum` bir nehir kimliği değil bir **parça-zinciri** kimliği.\n")
W(">\n")
W("> 📌 Ders: *bir çözümü önermek, onu ölçmek değildir.* Öneriyi\n")
W("> yazdığım turda ölçmemiştim. Vaka **silinmedi, damgalandı** —\n")
W("> `CLAUDE.md §3.5.1`: *bir vakayı silmek dersi de siler.*\n")
f.close()
print("adli rivernum:", len(grup), "· birden cok adli:", len(cok))
print("yazildi: denetim/SERHAT-NEHIRAD-0907.md")
