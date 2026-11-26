# -*- coding: utf-8 -*-
"""KD-ZAMAN-0920 — `m:` BAĞININ KENDİSİNİ SORGULAYAN ÖLÇÜM (SALT OKUR, YAZMAZ)

🔴 NİÇİN VAR: `kd:` yaması bugüne kadar TEK BİR SORU sordu — *"bu bağ NE ZAMAN
geçerli?"* Hiçbir zaman *"bu bağ DOĞRU MU?"* diye sormadı. İkisinin ayrı sorular
olduğunu İzmir vakası gösterdi (21 Eylül 2026): TDV `izmir` İzmir'in 1841'e kadar
**kendisi bağlı bir kaza** olduğunu yazıyor, yani ona bağlanan 18 kaydın `m:`i
1841 öncesinde YANLIŞ YÖNDE. Pencere yazmak böyle bir bağı düzeltmez, yalnız
Değişmez 3'ün uyarı ışığını söndürür (1.MURAT hükmü M-4931: "en dar seçenek RED").

Bu araç üç ölçüt basar (hepsi VERİ İÇİ, kaynak gerektirmez):

  Ö1 · TERS YÖN      — kaydın kendi `k:`si 1 ya da 2 (yani KENDİSİ merkez) olduğu
                        hâlde bir `m:` taşıyor. `uret_petek.k12_merkez` zinciri
                        k1/k2'de DURUR; böyle bir kayıt hem merkez hem bağımlıdır.
                        Vakalar: Söğüt · Eskişehir · İzmit · Tire · Manisa.
  Ö2 · MERKEZ DEĞİL  — `m:`in gösterdiği kaydın `k:`si 1/2 DEĞİL (3, 4 ya da 0):
                        bağ bir sancak/eyalet merkezine değil, başka bir bağımlıya
                        gidiyor. (Motor bunu geçişli zincirle telafi ediyor ama
                        `m:`in kendisi yanlış kademeyi gösteriyor.)
  Ö3 · ANAKRONİK     — merkezin Osmanlı'ya katılışı, kaydınkinden SONRA. Bağ, kayıt
                        Osmanlı olduğunda henüz var olamaz (Bergama/İzmir kalıbı).

Ayrıca **`m:` DOĞRULANMAMIŞ** kovasını (`KD-ZAMAN-M-SUPHELI-0921.md`) üretir:
`kd:` yazılmış ve pencerelerinden biri kaydın bugünkü `m:`ini AYNEN taşıyan her
kayıt — bir TDV cümlesiyle merkezi açıkça doğrulananlar hariç (liste aşağıda,
gerekçeleri `denetim/KD-ZAMAN-0920.md` §4, §7, §12, §17, §21, §31, §33'te).

Kullanım: py denetim/ARAC-KD-ZAMAN-M-SUPHELI-0921.py
"""
import sys, io, os, collections

sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import girdi

LISTE = "denetim/KD-ZAMAN-M-SUPHELI-0921.md"

# Merkezi bir TDV cümlesiyle AÇIKÇA doğrulanan kayıtlar (rapor §7-§31).
DOGRULANMIS = {
    "Katîf", "Kuba", "Sohum", "Artvin", "Babadağı (Babadag)", "Nakşa", "Eğriboz",
    "Sakız", "Modon", "Anabolu (Nauplion)", "Malatya", "Rakka", "Bergama", "Denizli",
    "Butrint (Butrinto)", "Parga", "Lahsa", "Derbend",
}

Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}


def ilk_osmanli(y):
    en = None
    for kat in ("d", "v"):
        for p in (y.get(kat) or []):
            if en is None or p["f"] < en:
                en = p["f"]
    return en


ters, merkez_degil, anakronik, mekan_yok = [], [], [], []
for y in Y:
    m = y.get("m")
    if not m:
        continue
    k = y.get("k") or 0
    my = ix.get(m)
    if k in (1, 2):
        ters.append((y["ad"], k, m))
    if my is None:
        mekan_yok.append((y["ad"], m))
        continue
    if (my.get("k") or 0) not in (1, 2):
        merkez_degil.append((y["ad"], m, my.get("k")))
    a, b = ilk_osmanli(y), ilk_osmanli(my)
    if a and b and b > a:
        anakronik.append((y["ad"], a, m, b))

print("`m:` taşıyan kayıt: %d" % sum(1 for y in Y if y.get("m")))
print("Ö1 TERS YÖN      (kendi k:si 1/2 ama m: var) : %d" % len(ters))
print("Ö2 MERKEZ DEĞİL  (m:in k:si 1/2 değil)       : %d" % len(merkez_degil))
print("Ö3 ANAKRONİK     (merkez SONRA Osmanlı oldu) : %d" % len(anakronik))
print("   m: adı atlasta YOK                        : %d" % len(mekan_yok))

print("\nÖ1 — TERS YÖN (hepsi):")
for ad, k, m in sorted(ters):
    print("   k:%d  %-26s -> %s" % (k, ad, m))

print("\nÖ3 — ANAKRONİK, merkeze göre ilk 15:")
say = collections.Counter(t[2] for t in anakronik)
for m, n in say.most_common(15):
    print("   %-22s %3d kayıt" % (m, n))

# ---- m: DOĞRULANMAMIŞ kovası ----
kova = []
for y in Y:
    m, kd = y.get("m"), y.get("kd")
    if not (m and kd) or y["ad"] in DOGRULANMIS:
        continue
    if any(p.get("m") == m for p in kd):
        etiket = []
        if (y.get("k") or 0) in (1, 2):
            etiket.append("TERS-YÖN")
        my = ix.get(m)
        if my and (my.get("k") or 0) not in (1, 2):
            etiket.append("MERKEZ-DEĞİL")
        a, b = ilk_osmanli(y), ilk_osmanli(my) if my else None
        if a and b and b > a:
            etiket.append("ANAKRONİK")
        kova.append((y["ad"], m, ",".join(etiket) or "—"))
print("\n`m:` DOĞRULANMAMIŞ kova: %d kayıt" % len(kova))

sat = ["# KD-ZAMAN-M-ŞÜPHELİ — `kd:` yazıldı ama `m:` DOĞRULANMADI", "",
       "1.MURAT'ın M-4931 hükmüyle açıldı. `KD-ZAMAN-EKSEN-BEKLIYOR-0921.md` bir kaydın",
       "**`d:` başlangıcının kaynaksızlığını** taşıyor; bu liste bambaşka bir şeyi taşıyor:",
       "**`m:` bağının kendisi doğrulanmadı.**", "",
       "`kd:` yaması bugüne kadar tek soru sordu — *\"bu bağ ne zaman geçerli?\"*. Aşağıdaki",
       "kayıtlarda bugünkü `m:` **aynen** bir `kd:` penceresine taşındı; ölçü düzeldi, **bağ",
       "doğrulanmadı**. İzmir vakası (rapor §35) bu ikisinin ayrı sorular olduğunu ölçtü.", "",
       "⚠️ Liste bir KUSUR listesi DEĞİLDİR — bağların çoğu doğru olabilir. Ölçülen tek şey,",
       "**doğruluğunun sorulmamış olduğudur** (`ölçülemedi ≠ yok ≠ temiz`).", "",
       "Etiketler: **TERS-YÖN** = kaydın kendi `k:`si 1/2 (kendisi merkez) · **MERKEZ-DEĞİL**",
       "= `m:`in gösterdiği kaydın `k:`si 1/2 değil · **ANAKRONİK** = merkez, kayıttan SONRA",
       "Osmanlı oldu.", "",
       "Üretim: `py denetim/ARAC-KD-ZAMAN-M-SUPHELI-0921.py`", "",
       "| # | kayıt | `m:` | işaret |", "|---|---|---|---|"]
for i, (ad, m, et) in enumerate(sorted(kova), 1):
    sat.append("| %d | %s | %s | %s |" % (i, ad, m, et))
io.open(LISTE, "w", encoding="utf-8", newline="\n").write("\n".join(sat) + "\n")
print("liste yazıldı:", LISTE)
