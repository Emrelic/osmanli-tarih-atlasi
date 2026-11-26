# KRONO-ATLANTIK-A-0929 — YERLESIM-ONERI.md'nin tablosunu üretir: her öneri için yerleşimin dosyası, satırı ve
# MEVCUT s:/d: kaydı (dosyadan okunur, elle yazılmaz). Çıktı ekrana; .md'ye yerleştirilir.
import json, io, glob, re, sys
sys.stdout.reconfigure(encoding="utf-8")
J = json.load(io.open("denetim/KRONO-ATLANTIK-A-0929-taslak/yeni-acik.json", encoding="utf-8"))
ONER = [dict(x) for x in J.get("yerlesim_onerisi", [])]
EK = [  # Aragon ajanının harita notu + defterin yıl-temsilî Melilla kaydı
 dict(yer="Kalyari (Cagliari)", harita_gunu="1324-01-01 (ceneviz→aragon)", dogru_gun="piza→aragon 1324-06-19 (kale teslimi + barış); tam devir 1326-06-09",
      kaynak="Gran Enciclopèdia Catalana, 'conquesta de Sardenya' ve 'Alfons III de Catalunya-Aragó'. Önceki sahip Pisa (piza), Ceneviz değil."),
 dict(yer="Sasari (Sassari)", harita_gunu="1324-01-01 (ceneviz→aragon)", dogru_gun="1323-07-04 (orta güven); 1325-07-21 – 1326-06 isyan/bağımsızlık",
      kaynak="A. Soddu, 'Corona d'Aragona e Malaspina nella Sardegna del Trecento' (Tola, CDS belge XX, 4 Temmuz 1323) + GEC"),
 dict(yer="Menorka", harita_gunu="1281→ aragon", dogru_gun="1287-01-17'ye dek Müslüman emirlik; 1295–1343 Mayorka Krallığı; 1343-05-25 Aragon",
      kaynak="Consell Insular de Menorca + GEC 'Jaume III de Mallorca'. ⚠️ Mayorka Krallığı künyesi YOK (KUNYE.md)"),
 dict(yer="Perpignan", harita_gunu="1281→ aragon · 1463-01-01 → fransa", dogru_gun="1344'e dek Mayorka Krallığı; Fransız rehni 1462-05-09 (Bayonne), işgal 1463, teslim Mart 1475",
      kaynak="GEC 'tractat de Baiona', 'Pere III el Cerimoniós'"),
 dict(yer="Melîle (Melilla)", harita_gunu="1497-01-01 (merini→ispanya, yıl-temsilî)", dogru_gun="1497-09-17",
      kaynak="madde zaten var: kronoloji_sinir_avrupa_bati.js 1497-09-17 'Melilla'nın alınması' — yalnız harita günü kaynağa çekilmeli (kaynak o maddedeki kaynaktır; ben yeniden ölçmedim)"),
]
satirlar = {}
for f in glob.glob("data/yerlesimler*.js"):
    L = io.open(f, encoding="utf-8").read().split("\n")
    for n, s in enumerate(L, 1):
        m = re.search(r'ad:"([^"]+)"', s)
        # kayıt birden çok satıra yayılabilir: ad satırından sonraki 8 satır (bir sonraki ad:'a kadar)
        if m:
            blok = [s] + [x for x in L[n:n + 8]]
            kes = next((i for i, x in enumerate(blok[1:], 1) if re.search(r'\bad:"', x)), len(blok))
            satirlar.setdefault(m.group(1), (f.replace("\\", "/"), n, " ".join(blok[:kes])))
def bul(ad):
    if ad in satirlar: return satirlar[ad]
    k = [a for a in satirlar if a.startswith(ad.split(" (")[0])]
    return satirlar[k[0]] if k else None
print("| yer | dosya:satır | mevcut s:/d: (dosyadan) | harita günü | önerilen | kaynak |\n|---|---|---|---|---|---|")
for o in ONER + EK:
    b = bul(o["yer"])
    if b:
        f, n, s = b
        pen = re.findall(r'\{f:"[^"]+",t:"[^"]+",d:"[^"]+"', s)
        mev = " ".join(p + "}" for p in pen)[:260] or "(s: aynı satırda değil — dosyada bak)"
        yer = f"`{f}:{n}`"
    else:
        yer, mev = "bulunamadı", "—"
    c = lambda x: str(x).replace("|", "¦").replace("\n", " ")
    print(f"| {o['yer']} | {yer} | `{c(mev)}` | {c(o['harita_gunu'])} | {c(o['dogru_gun'])} | {c(o['kaynak'])[:300]} |")
