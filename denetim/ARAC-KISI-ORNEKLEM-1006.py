# UMIT-W16-KISI-ORNEKLEM-1006 — kişi kaynak sayacı + kaynaksız kayıtlardan tekrar üretilebilir rastgele örneklem.
# Kullanım: py denetim/ARAC-KISI-ORNEKLEM-1006.py [kisiler.js yolu]   sayaç (+ evren yetiyorsa örneklem)
#           py denetim/ARAC-KISI-ORNEKLEM-1006.py --sina               iki yönlü sınav (veri okumaz)
# YALNIZ OKUR.
#
# Dört ayrık kova, `kaynak` alanının BAŞINDAN ölçülür (sabit sayı YOK):
#   TDV kaynaklı      = alan "TDV:" ile başlıyor
#   başka kaynaklı    = alan dolu, "TDV:" ile de "bulunamadı" ile de başlamıyor (§4: TDV'nin kapsamadığı
#                       yerde akademik kaynak meşru — ör. bugün 2 Britannica kaydı)
#   bulunamadı BEYANI = alan "bulunamadı" ile başlıyor (§4: bulunamadıysa `bulunamadı` yazılır)
#   kaynaksız         = alan yok ya da boşluktan arınınca boş
# 🔴 Beyan kaynak DEĞİLDİR: ikisini "kaynak dolu" diye toplamak beyanlı borcu kapanmış gösterir
#    (koordinatör KISI-SAYIM, 6 Ekim 2026; D265). Toplam ayrıca basılmaz.
# Ölçüt BAŞLANGIÇ'tır, içerik değil: `burak-reis` "TDV: kemal-reis (… müstakil maddesi TDV'de
#    bulunamadı …)" bir TDV kaynağıdır ve TDV kovasına düşer.
#
# Örneklem (tarihçe): 5 Ekim 2026'da `3e4b3a98` üzerinde 266 kaynaksız kayıttan tohum 1006 ile 20 kayıt
# çekildi (UMIT-W16-KISI-ORNEKLEM-1006.md). Kampanya sonrası kaynaksız evren boşaldığı için örneklem
# yalnız evren N'den büyükse çekilir; aynı sonucu yeniden üretmek için o commit'in kisiler.js'i verilir.
import json, random, subprocess, sys
from collections import Counter

TOHUM = 1006
N = 20
BEYAN = "bulunamadı"


def kova(k):
    s = str(k.get("kaynak") or "").strip()
    if not s:
        return "kaynaksiz"
    if s.lower().startswith(BEYAN):
        return "beyan"
    return "tdv" if s.startswith("TDV:") else "baska"


def say(K):
    c = Counter(kova(k) for k in K)
    return c["tdv"], c["baska"], c["beyan"], c["kaynaksiz"]


def sina():
    ornek = [
        {"id": "a", "kaynak": "TDV: sinan"},
        {"id": "b", "kaynak": "TDV: kemal-reis (Burak Reis'in müstakil maddesi TDV'de bulunamadı — slug 302)"},
        {"id": "c", "kaynak": "bulunamadı — TDV İslâm Ansiklopedisi, 5 Ekim 2026; …"},
        {"id": "d", "kaynak": "  Bulunamadı — baş boşluk ve büyük harf"},
        {"id": "e", "kaynak": ""},
        {"id": "f"},
        {"id": "g", "kaynak": "   "},
        {"id": "h", "kaynak": "Encyclopaedia Britannica, britannica.com/biography/…"},
        {"id": "i", "kaynak": "Britannica (TDV'de bulunamadı)"},
        # 1006b · "başlar"↔"içerir" mutasyonunu öldüren fikstürler: TDV'yi İÇERİR, onunla BAŞLAMAZ.
        # j/k veride BİREBİR duran iki kaydın kaynak metnidir (napolyon-bonapart, francesco-morosini).
        {"id": "j", "kaynak": "Encyclopaedia Britannica, britannica.com/biography/Napoleon-I — TDV'de müstakil madde YOK ('napolyon' 302 ölü), §4 kuralına göre akademik kaynağa geçildi"},
        {"id": "k", "kaynak": "Encyclopaedia Britannica, britannica.com/topic/Morosini-family — TDV'de müstakil madde YOK (Girit/Mora/Atina maddelerinde yalnız adı geçiyor), §4 kuralına göre akademik kaynağa geçildi"},
        {"id": "l", "kaynak": "Britannica · TDV: napolyon karşılaştırıldı, madde yok"},
    ]
    beklenen = {"a": "tdv", "b": "tdv", "c": "beyan", "d": "beyan", "e": "kaynaksiz", "f": "kaynaksiz", "g": "kaynaksiz",
                "h": "baska", "i": "baska", "j": "baska", "k": "baska", "l": "baska"}
    # Üyelik ADIYLA sınanır (yalnız toplam değil): her kayıt kendi kovasında olmalı.
    hata = [(k["id"], kova(k), beklenen[k["id"]]) for k in ornek if kova(k) != beklenen[k["id"]]]
    # yön 1: beyanlı kayıt TDV sayısına girmiyor · yön 2: TDV kaydı (içinde "bulunamadı" geçse bile) beyana
    # girmiyor · ek: TDV-dışı kaynak (içinde "TDV" ya da "TDV:" geçse bile) TDV'ye de beyana da girmiyor;
    # dört kovanın HER BİRİ en az bir üye taşımalı (kova silinirse boş kalır ve öter); kovalar ayrık.
    BEK = (2, 5, 2, 3)
    if say(ornek) != BEK or sum(say(ornek)) != len(ornek):
        hata.append(("sayim", say(ornek), BEK))
    for h in hata:
        print("✗", h)
    print("SINAV", "GEÇTİ (12/12 kayıt, adıyla üyelik + iki yön + TDV-dışı)" if not hata else "KALDI")
    return 0 if not hata else 1


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    if "--sina" in sys.argv:
        sys.exit(sina())
    YOL = sys.argv[1] if len(sys.argv) > 1 else "data/kisiler.js"
    js = ("global.window={};require(require('path').resolve(process.argv[1]));"
          "process.stdout.write(JSON.stringify(window.KISILER))")
    K = json.loads(subprocess.run(["node", "-e", js, YOL], capture_output=True,
                                  check=True, encoding="utf-8").stdout)
    tdv, baska, beyan, bos = say(K)
    print(f"toplam {len(K)}")
    print(f"TDV kaynaklı: {tdv}")
    print(f"başka kaynaklı: {baska}")
    print(f"bulunamadı BEYANI: {beyan}")
    print(f"kaynaksız: {bos}")

    kaynaksiz = [k for k in K if kova(k) == "kaynaksiz"]
    if len(kaynaksiz) < N:
        print(f"\nörneklem çekilmedi: kaynaksız evren {len(kaynaksiz)} < {N}")
        sys.exit(0)
    # Sıra dosya sırasıdır (id'ye göre sıralama YOK); tohumla örneklem.
    secim = random.Random(TOHUM).sample(kaynaksiz, N)
    g, o = Counter(k["tur"] for k in kaynaksiz), Counter(k["tur"] for k in secim)
    print(f"\ntohum {TOHUM} · n {N}\n{'tur':18} {'evren':>12} {'örneklem':>10}")
    for t, s in g.most_common():
        print(f"{t:18} {s:4} ({s/len(kaynaksiz):5.1%}) {o.get(t,0):4} ({o.get(t,0)/N:5.1%})")
    print()
    for i, k in enumerate(secim, 1):
        print(f"{i:2}. {k['id']} | {k['tur']} | {k['ad']} | f={k.get('f','')} t={k.get('t','')} | donem={k.get('donem','')} | devlet={k.get('devlet','')}")
