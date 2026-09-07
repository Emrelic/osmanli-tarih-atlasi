# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑲ — `SAVASLAR`ın 8 AÇIĞI: Ⓒ + AD BENZERLİĞİ ölçütü.

Bu, `SEFERLER`de kurulan ölçütün **çapalamadığı yerde** sınanmasıdır
(`§11`: *"tek vakada test edilen bir ölçüt test edilmiş sayılmaz"*).

╔═ ① AD BENZERLİĞİ ÖLÇÜTÜ — ÖLÇÜMDEN ÖNCE TARİF EDİLİYOR ═══════════════╗
  ADIM 1  Türkçe normalleştir: İ/I/ı→i · ş→s · ğ→g · ü→u · ö→o · ç→c ·
          â/î/û→a/i/u · kesme işaretleri düşer   (`§4` yazım ekseni)
  ADIM 2  kelimelere ayır, uzunluğu ≥ 4 olanları al
  ADIM 3  6 harflik köke indir (Türkçe ek yığılmasını kırmak için —
          "kusatmasi"/"kusatma"/"kusatan" hepsi "kusatm" olur)
  ADIM 4  🔴 DURAK KÖKLERİ ELE — VE LİSTE ELLE YAZILMIYOR, ÖLÇÜLÜYOR:
          bir kök kronoloji maddelerinin **> %2**'sinde geçiyorsa AYIRT
          EDİCİ DEĞİLDİR ve atılır.
          ⚠️ Elle liste (savas·sefer·kusatma…) yazmak ölçütü KEYFÎ yapar;
             eşik ise ölçülebilir ve bu betik listeyi BASAR.
  ADIM 5  iki kök kümesinin kesişimi BOŞ DEĞİLSE → "ad eşleşti"
  ⚠️ Bu ölçüt bir KANIT değil bir GÜÇLENDİRİCİDİR: eşleşme varsa Ⓒ'nin
     kapanışı kanıtlı sayılır; yoksa `ÖLÇÜLEMEDİ` — `KESİN maddesiz` DEĞİL.
╚═══════════════════════════════════════════════════════════════════════╝

╔═ ② ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE, MAZERETİYLE ═════════════════════════════╗
  Ⓐ'daki 8 açığın adları (önceki tur): Cecora +387g · Rodos kuşatması
  +66g · II. Viyana kuşatması +60g · Bağdat kuşatması +39g … — çoğu
  **KUŞATMA**, yani uzun süreli.
  ⇒ ÖNGÖRÜ: 8 açığın **çoğu `savas_basi` TAŞIYOR** ve Ⓒ ile kapanacak.
     Bant: **8 → 2-4 arası** (Ⓒ+ad ile kanıtlı kapanan ≥ 4).
  MAZERET: `savas_basi` **taşımayan** kayıtlarda aralık YOKTUR ⇒ Ⓒ
     uygulanamaz, onlar Ⓐ'da kalır ve bu MAZUR.
     🔴 `savas_basi` TAŞIYANLAR için MAZERET YOK — kapanmazlarsa
        ölçüt seferlerde işleyip savaşlarda işlemiyor demektir ve
        BUNU YAZARIM.
  ÖLÇÜM: `denetle.gun_no`/`tam`, birim GÜN; pencere `SAVAS_PENCERE`.
╚═══════════════════════════════════════════════════════════════════════╝

⚠️ DENETİM YAZILMIYOR — ölçüm ve öneri (koordinatörün şartı).
"""
import io
import json
import os
import re
import sys
import unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

P = denetle.SAVAS_PENCERE
DURAK_ESIK = 0.02          # maddelerin %2'sinden fazlasında geçen kök = durak

_TR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
       ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u",
       ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c",
       ord("Â"): "a", ord("â"): "a", ord("Î"): "i", ord("î"): "i",
       ord("Û"): "u", ord("û"): "u", ord("’"): "", ord("'"): "", ord("‘"): ""}


def kokler(s):
    s = (s or "").translate(_TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return {w[:6] for w in re.findall(r"[a-z0-9]+", s) if len(w) >= 4}


O = denetle.olaylari_yukle()
S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), "SAVASLAR")

# ── ADIM 4: DURAK KÖKLERİ ÖLÇ (elle yazma) ───────────────────────────
say = {}
for o in O:
    for k in kokler(o.get("b", "")):
        say[k] = say.get(k, 0) + 1
DURAK = {k for k, n in say.items() if n / len(O) > DURAK_ESIK}
print("=" * 76)
print("`SAVASLAR` 8 AÇIK — Ⓒ + AD BENZERLİĞİ")
print("=" * 76)
print("kronoloji maddesi %d · savaş kaydı %d · pencere ±%d" % (len(O), len(S), P))
print("\n[ADIM 4 — DURAK KÖKLER ÖLÇÜLDÜ, elle yazılmadı]  eşik: maddelerin >%%%.0f'i"
      % (DURAK_ESIK * 100))
print("  durak kök sayısı : %d" % len(DURAK))
print("  en sık 18        : %s"
      % ", ".join(k for k, _ in sorted(say.items(), key=lambda x: -x[1])[:18]))

ol = []
for o in O:
    try:
        ol.append((denetle.gun_no(denetle.tam(o["t"])), o.get("b", "")))
    except Exception:
        pass


def g(x):
    try:
        return denetle.gun_no(denetle.tam(x))
    except Exception:
        return None


# ── Ⓐ: bugünkü ölçüt ─────────────────────────────────────────────────
n_top, ayk = denetle.savas_senkronu(S, O)
acik_adlar = {a[1] for a in ayk}
print("\n[Ⓐ BUGÜNKÜ ÖLÇÜT] %d/%d senkron · AÇIK %d" % (n_top - len(ayk), n_top, len(ayk)))

# ── Ⓒ + ad benzerliği, YALNIZ açıklar için ───────────────────────────
detay = []
for r in S:
    ad = r.get("ad", "?")
    if ad not in acik_adlar:
        continue
    gb, gt = g(r.get("savas_basi")), g(r.get("t"))
    ak = kokler(ad) - DURAK
    if gb is None:                       # aralık YOK → MAZUR
        detay.append({"ad": ad, "savas_basi": None, "t": r.get("t"),
                      "kova": "MAZUR — savas_basi YOK", "madde": "",
                      "ortak": []})
        continue
    alt, ust = min(gb, gt) - P, max(gb, gt) + P
    icinde = [(og, b) for og, b in ol if alt <= og <= ust]
    esles = [(og, b, sorted(ak & (kokler(b) - DURAK))) for og, b in icinde]
    esles = [e for e in esles if e[2]]
    if esles:
        kova = "ÖLÇÜT UYUMSUZLUĞU — KANITLI"
        madde, ortak = esles[0][1], esles[0][2]
    elif icinde:
        kova = "ÖLÇÜLEMEDİ — Ⓒ kapatıyor, ad eşleşmiyor"
        madde, ortak = icinde[0][1], []
    else:
        kova = "🔴 KESİN MADDESİZ"
        madde, ortak = "", []
    detay.append({"ad": ad, "savas_basi": r.get("savas_basi"), "t": r.get("t"),
                  "kova": kova, "madde": madde[:64], "ortak": ortak})

print("\n[Ⓒ + AD BENZERLİĞİ — %d açığın ayrımı]" % len(detay))
kova_say = {}
for d in detay:
    kova_say[d["kova"]] = kova_say.get(d["kova"], 0) + 1
    print("\n  %-34s %s" % (d["ad"][:34], d["kova"]))
    print("     savas_basi:%s  t:%s" % (d["savas_basi"] or "—", d["t"]))
    if d["madde"]:
        print("     aralıkta  : %s" % d["madde"])
    if d["ortak"]:
        print("     ORTAK KÖK : %s" % ", ".join(d["ortak"]))

print("\n" + "=" * 76)
print("[KOVA ÖZETİ]")
for k, n in sorted(kova_say.items(), key=lambda x: -x[1]):
    print("  %-44s %d" % (k, n))

# ── ÖNGÖRÜ SINAVI ────────────────────────────────────────────────────
kanitli = kova_say.get("ÖLÇÜT UYUMSUZLUĞU — KANITLI", 0)
mazur = kova_say.get("MAZUR — savas_basi YOK", 0)
basli = len(detay) - mazur
print("\n" + "=" * 76)
print("ÖNGÖRÜ SINAVI")
print("=" * 76)
print("  öngörü : 'çoğu `savas_basi` taşıyor · Ⓒ+ad ile kanıtlı kapanan ≥ 4'")
print("  ölçüm  : `savas_basi` taşıyan %d/%d · KANITLI kapanan %d"
      % (basli, len(detay), kanitli))
tuttu = kanitli >= 4
print("  ⇒ %s" % ("TUTTU ✓" if tuttu else "🔴 ÇÜRÜDÜ"))
if not tuttu and basli:
    print("  🔴 MAZERET YOK (`savas_basi` taşıyan %d kayıt vardı): ölçüt"
          % basli)
    print("     SEFERLER'de işleyip SAVASLAR'da İŞLEMİYOR demektir.")

json.dump({"_NOT": ("SAVASLAR 8 açığı, Ⓒ + ad benzerliği. Durak kökler "
                    "ÖLÇÜLDÜ (elle yazılmadı), eşik %.0f%%. Öngörü ölçümden "
                    "ÖNCE docstring'e yazıldı." % (DURAK_ESIK * 100)),
           "pencere": P, "durak_kok": len(DURAK),
           "A_acik": len(ayk), "kova": kova_say, "detay": detay,
           "ongoru": {"beklenen": "kanıtlı >= 4", "olculen": kanitli,
                      "tuttu": tuttu, "savas_basi_tasiyan": basli}},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-SAVASACIK-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-SAVASACIK-0907.json")
