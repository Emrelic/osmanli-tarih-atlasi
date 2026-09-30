"""AVRUPA-SINIR-0077 — yama.txt'in YER düzeltmelerini data/'ya uygular (M-5277).

Kullanım:  py denetim/AVRUPA-SINIR-0077-uygula.py            → KURU KOŞU (varsayılan)
           py denetim/AVRUPA-SINIR-0077-uygula.py --uygula   → yazar
Kurallar: hedef kayıt tek eşleşmeli (yoksa ATLA+bildir) · `eski` parça kaydın içinde
BİREBİR bir kez geçmeli (yoksa YAZMA — kayıt değişmiş) · `yeni` zaten varsa DOKUNMA
("zaten böyle") · idempotent: ikinci koşu 0 değişiklik.
Milano künyesinin GENİŞLETİLMESİ (§3.5 ②) burada YOK — Emre kararı (M-5277).
Gerekçe: denetim/AVRUPA-SINIR-0077.md §3 + denetim/AVRUPA-SINIR-0077-yama.txt
"""
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.environ.get("AVRUPA_KOK") or os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")  # sınav için değiştirilebilir

RAPALLO = ("Rapallo Antlaşması md. 2 — 'Zara and the territory referred to below shall be "
           "recognised as forming part of the Kingdom of Italy' (imza 12 Kasım 1920; LNTS c.18 "
           "s.397-403, metin: forost.ungarisches-institut.de/pdf/19201112-1.pdf) · LZMK 'zadar': "
           "'Rapallskim ugovorom 1920. bio je … pripojen Italiji kao enklava' · 1918-11 → 1920-11-12 "
           "İtalyan işgalinin günü BULUNAMADI, o pencere yugoslavya olarak KALDI (AVRUPA-SINIR-0077)")

BOSLUK = ("BEYAN (AVRUPA-SINIR-0077, D204 'yer yanlış'): milano-dukaligi künyesi 1395-05-11'de "
          "başlar; 1395 öncesi bu şehrin sahibi künyesiz (Scaliger/Carrara/komün/Visconti "
          "senyörlüğü) — hayalet milanoduka SİLİNDİ, komşuya İTİLMEDİ (§3.5.1). Visconti "
          "senyörlüğü dönemleri Milano künyesi genişletilirse (Emre kararı) geri yazılabilir.")


def bos(f, t):
    return f'{{f:"{f}",t:"{t}",d:"__BOSLUK__",kaynak:"{BOSLUK}"}}'


# (dosya, kayıt adı, eski parça, yeni parça)
YAMA = [
    ("yerlesimler_ek.js", "Zadar (Zara)",
     '{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}',
     '{f:"1918-11-11",t:"1920-11-12",d:"yugoslavya"},'
     f'{{f:"1920-11-12",t:"1923-10-29",d:"italya",kaynak:"{RAPALLO}"}}'),
]
for ad, t in [("Verona", "1405-06-22"), ("Padova", "1405-11-22"), ("Brescia", "1426-01-01"),
              ("Bergamo", "1428-01-01"), ("Parma", "1512-06-24")]:
    YAMA.append(("yerlesimler_avrupa.js", ad,
                 f'{{f:"1281-01-01",t:"{t}",d:"milanoduka"}}',
                 bos("1281-01-01", "1395-05-11") + f',{{f:"1395-05-11",t:"{t}",d:"milanoduka"}}'))


def kayit_araligi(satirlar, ad):
    bas = [i for i, s in enumerate(satirlar) if f'ad:"{ad}"' in s]
    if len(bas) != 1:
        return None, len(bas)
    i = bas[0]
    j, derin = i, 0
    while True:
        temiz = re.sub(r'"(?:[^"\\]|\\.)*"', '""', satirlar[j])
        derin += temiz.count("{") - temiz.count("}")
        if derin <= 0:
            break
        j += 1
    return (i, j), 1


def main():
    uygula = "--uygula" in sys.argv
    dosyalar, degisen = {}, 0
    for dosya, ad, eski, yeni in YAMA:
        if dosya not in dosyalar:
            dosyalar[dosya] = open(os.path.join(KOK, dosya), encoding="utf-8").read().split("\n")
        satirlar = dosyalar[dosya]
        ar, n = kayit_araligi(satirlar, ad)
        if ar is None:
            print(f"  ✗ {dosya}:{ad}: {n} eşleşme — ATLANDI"); continue
        i, j = ar
        kayit = "\n".join(satirlar[i:j + 1])
        if yeni in kayit:
            print(f"  = {dosya}:{ad}: zaten böyle — DOKUNULMADI"); continue
        if kayit.count(eski) != 1:
            print(f"  ✗ {dosya}:{ad}: eski parça {kayit.count(eski)} kez — kayıt değişmiş, YAZILMADI"); continue
        yeni_kayit = kayit.replace(eski, yeni)
        satirlar[i:j + 1] = yeni_kayit.split("\n")
        print(f"  ✓ {dosya}:{ad} (satır {i + 1}): {eski}  →  {yeni[:90]}…")
        degisen += 1
    print(f"değişen kayıt: {degisen}/{len(YAMA)}")
    if uygula and degisen:
        for dosya, satirlar in dosyalar.items():
            open(os.path.join(KOK, dosya), "w", encoding="utf-8", newline="").write("\n".join(satirlar))
            print("yazıldı:", dosya)
    elif not uygula:
        print("KURU KOŞU — yazmak için --uygula")


if __name__ == "__main__":
    main()
