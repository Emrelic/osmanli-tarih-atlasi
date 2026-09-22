# -*- coding: utf-8 -*-
"""H-0009 ACIK UCLU KAPSAM TALEBININ OLCUMU (uretim YAPILMAZ, yalniz sayi).

Talep: "tum padisahlarin olum maddesine ovgu ile yergi seklinde ek okuma".
Kapsami yalniz Emre acar; burada kac kayda dokundugu ve kaba maliyeti olculur.
Hicbir dosyaya YAZMAZ.
"""
import io, os, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

pad = io.open(os.path.join(DATA, "padisahlar.js"), encoding="utf-8").read()
padisahlar = re.findall(r'\bad\s*:\s*"([^"]+)"', pad)
print("padisahlar.js kaydi: %d" % len(padisahlar))

vefat = set()
olum_maddesi = []
for ad in sorted(os.listdir(DATA)):
    if not (ad.endswith(".js") and (ad.startswith("olaylar") or ad.startswith("kronoloji"))):
        continue
    metin = io.open(os.path.join(DATA, ad), encoding="utf-8").read()
    for m in re.finditer(r'\bvefat_id\s*:\s*"([^"]+)"', metin):
        vefat.add(m.group(1))
    for m in re.finditer(r'\{[^{}]*?\bt\s*:\s*"(\d{4}[^"]*)"[^{}]*?\bb\s*:\s*"([^"]*)"[^{}]*?\}', metin, re.S):
        b = m.group(2)
        if re.search(r"vefat|ölüm|olumu|hal'?i", b, re.I) and re.search(r"sultan|padişah|I{1,3}\.|IV\.|V\.|VI\.", b):
            olum_maddesi.append((m.group(1), b, ad))

print("vefat_id tasiyan tekil kimlik: %d" % len(vefat))
print("basliginda vefat/olum gecen ve hukumdar anan kronoloji maddesi: %d" % len(olum_maddesi))
print()
print("KABA MALIYET (talep aynen uygulansaydi):")
print("  her padisah icin 1 ovgu + 1 yergi karti  -> %d kart" % (len(padisahlar) * 2))
print("  yalniz vefat_id bagi olanlar icin         -> %d kart" % (len(vefat) * 2))
print("  bu gece uretilen kart basi ortalama kaynak: 1-2 TDV maddesi")
print("  ⇒ 41 padisahin her biri icin ayri bir hukumdar maddesi okunmasi gerekir;")
print("     tek oturumda, %94 dolu haftalik butcede olculebilir bir is DEGILDIR.")
print()
print("ilk on olum maddesi ornegi:")
for t, b, d in olum_maddesi[:10]:
    print("  %-12s %-58s [%s]" % (t, b[:58], d))
