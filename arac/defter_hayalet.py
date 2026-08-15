# -*- coding: utf-8 -*-
"""DEFTER HAYALET DENETİMİ — bir kimlik satırı GERÇEK bir oturumu mu gösteriyor?

🔴 DOĞURAN VAKA (15 Ağustos 2026, OPUS HAZIR KITA 5)
Emre bir işçi oturuma sordu: *"koordinatörden gelen şartnameyi ve promptu
almadın mı?"* Cevap hayırdı, ve sebebi kanal değil DEFTERDİ:

    DEFTER.md:20  "Opus hazır kıta 5" -> local_597c562e-e7ff-46d9-b338-c758e39cb4d3
    gerçek oturum                     -> local_b361c76c-c48f-4679-a4b0-d718ef6c0c1a

⇒ Deftere yazılmış bir adres, hiçbir kaynakta karşılığı olmayan bir oturumu
gösteriyordu. Kanal çalışsa bile teslim SESSİZCE yutulurdu: koordinatör
"gönderdim" der, oturum "almadım" der, **ve ikisi de doğrudur.**

═══════════════════════════════════════════════════════════════════════════
🔴 BU ARAÇ İKİ KEZ YANLIŞ KANITA DAYANDI — ikisi de burada kayıtlı
═══════════════════════════════════════════════════════════════════════════
① SÜRÜM 1 — kanıt: `~/.claude/projects/**/<uuid>.jsonl` döküm dosyası.
   **24 HAYALET** dedi. Ölçüldü: `local_17712720` (KOORDİNATÖR, O ANDA
   ÇALIŞIYOR) · `local_b943aa89` (KÜNYE MACARİSTAN, çalışıyor) ·
   `local_cc230a98` (RENK 3, çalışıyor) — üçünün de dökümü YOK.
   ⇒ 24 bulgunun 24'ü YANLIŞ ALARM.

② SÜRÜM 2 — kanıt: `list_sessions` dökümü ("tek otorite" sanıldı).
   **6 HAYALET** dedi. Ölçüldü: altısından dördü tahtaya BUGÜN mesaj yazmış
   canlı oturumlar (`NOKTA MENZİL` 23:01'de M-0088'i yazdı).
   ⇒ Bu sefer 6'nın en az 4'ü yanlış alarm.

🔴 VE ÜÇÜNCÜ ÖLÇÜM İKİSİNİ DE AÇIKLADI — İKİ AYRI KİMLİK EVRENİ VAR:

    döküm uuid'leri     133
    list_sessions       118
    KESİŞİM               2      ← yalnız iki kimlik her ikisinde birden

Yani bu iki kaynak **aynı şeyi ölçmüyor.** Biri ötekinin eksiği değil;
neredeyse ayrık iki küme. Bir kimliğin "yok" olması, **hangi kümede
bakıldığına** bağlı.

📌 DERS: `C13` bir denetimin iki YOLUNU sınar (geçme · ateşleme) ama
**KANIT KAYNAĞINI sınamaz.** Sürüm 1 kendi sınavını GEÇMİŞTİ — çünkü sınav
sahte veriyle koşuluyordu ve sahte veri aynı yanlış varsayımı taşıyordu.
⇒ Üçüncü soru şart: ***"kanıtım gerçekten o şeyi mi ölçüyor?"*** — ve cevabı
**BİLİNEN bir vakayla** sınanır (burada: canlı olduğu bağımsız bilinen
oturumlar). Sahte veri bunu yapamaz.

═══════════════════════════════════════════════════════════════════════════
ÇARE: TEK OTORİTE DEĞİL, ÜÇ KANIT — ve HAYALET yalnız ÜÇÜNDE DE YOKSA
═══════════════════════════════════════════════════════════════════════════
    canli   `list_sessions` dökümü (dışarıdan verilir; Python MCP'ye erişemez)
    dokum   `~/.claude/projects/**/<uuid>.jsonl`
    tahta   `oturumlar/tahta.json` — mesaj YAZMIŞ bir oturum KANITEN vardır

⚠️ `tahta` en zayıf görünen ama en KESİN kanıt: bir kimlik oraya yazmışsa
o oturum gerçekten konuşmuştur. Ötekiler "kayıt var mı" der; bu "iş yaptı mı"
der.

    py arac/defter_hayalet.py --canli <list_sessions.json>
    py arac/defter_hayalet.py --canli <dosya> --hepsi
    py arac/defter_hayalet.py --kendi-testi

⚠️ Dökümü alırken `include_archived: true` ve YÜKSEK `limit` ver — ve şunu
bil: **`list_sessions` ÇAĞIRAN OTURUMU LİSTELEMEZ.** Kendini dökümüne elle
eklemezsen, koordinatör kendi kendini hayalet sanır.

DÖRT KOVA
    🟢 KANITLI      en az bir kaynakta VAR (hangileri olduğu basılır)
    🔴 HAYALET      ÜÇ kaynakta da YOK **ve** satır canlı bir kovada
    🟡 YOK-EMEKLI   üçünde de yok ama satır emekli/emir-bekleyen ⇒ ihlal DEĞİL
    ⚪ ÖLÇÜLEMEDİ   kimlik biçimi tanınmıyor ⇒ ASLA "temiz" değil
    🟠 AD KAYMASI   kimlik canlıda var ama defterdeki ad canlı başlıktan farklı
"""
import io
import json
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VERI = os.path.join(KOK, "oturumlar", "defter.json")
TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
DOKUM_KOK = os.path.join(os.path.expanduser("~"), ".claude", "projects")

CANLI_KOVA = ("hazir-kita", "gorevde", "goreve-donmus")
CANLI_HAL = ("HAZIR", "IS-ISTIYORUM", "ALDIM", "CALISIYORUM", "TIKANDI", "BOSTA")


def _sade(s):
    """defter.py ile AYNI normalleştirme — İ/I farkı iki oturum gibi görünüyordu."""
    for a, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                 ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                 ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        s = (s or "").replace(a, b)
    return " ".join(s.upper().split())


def kaynak_canli(yol):
    if not yol or not os.path.exists(yol):
        return None
    try:
        d = json.load(io.open(yol, encoding="utf-8"))
    except Exception as e:
        print("🔴 canlı döküm OKUNAMADI: %s" % e)
        return None
    if isinstance(d, dict):
        d = d.get("sessions") or d.get("oturumlar") or []
    return {x.get("sessionId"): (x.get("title") or "")
            for x in d if isinstance(x, dict) and x.get("sessionId")}


def kaynak_dokum(kok=DOKUM_KOK):
    if not os.path.isdir(kok):
        return {}
    bulunan = {}
    for proje in os.listdir(kok):
        yol = os.path.join(kok, proje)
        if not os.path.isdir(yol):
            continue
        try:
            for ad in os.listdir(yol):
                if ad.endswith(".jsonl"):
                    bulunan["local_" + ad[:-6]] = proje
        except OSError:
            continue
    return bulunan


def kaynak_tahta(yol=TAHTA):
    """Tahtaya YAZMIŞ kimlikler — 'iş yaptı' kanıtı, 'kayıt var' değil."""
    if not os.path.exists(yol):
        return {}
    try:
        t = json.load(io.open(yol, encoding="utf-8"))
    except Exception:
        return {}
    ms = t.get("mesajlar") if isinstance(t, dict) else t
    out = {}
    for m in ms or []:
        if not isinstance(m, dict):
            continue
        for alan in ("kimden_kimlik", "kimlik"):
            k = m.get(alan)
            if isinstance(k, str) and k.startswith("local_"):
                out.setdefault(k, m.get("kimden") or m.get("kim") or "?")
    return out


def sinifla(satirlar, canli, dokum, tahta):
    s = {"kanitli": [], "hayalet": [], "yok_emekli": [], "olculemedi": [], "ad_kaymasi": []}
    for kimlik, v in sorted(satirlar.items(), key=lambda x: (x[1].get("ad") or "")):
        ad = v.get("ad") or "?"
        kova = (v.get("kova") or "").strip()
        hal = (v.get("hal") or "").strip().upper()
        aktif = kova in CANLI_KOVA or hal in CANLI_HAL

        if not isinstance(kimlik, str) or not kimlik.startswith("local_"):
            s["olculemedi"].append((kimlik, ad, kova, hal, "kimlik biçimi tanınmıyor"))
            continue
        kaynaklar = []
        if canli is not None and kimlik in canli:
            kaynaklar.append("canli")
        if kimlik in dokum:
            kaynaklar.append("dokum")
        if kimlik in tahta:
            kaynaklar.append("tahta")

        if kaynaklar:
            s["kanitli"].append((kimlik, ad, kova, hal, "+".join(kaynaklar)))
            if canli and kimlik in canli and canli[kimlik]:
                takma = [ad] + list(v.get("takma_adlar") or [])
                if not any(_sade(a) == _sade(canli[kimlik]) for a in takma):
                    s["ad_kaymasi"].append((kimlik, ad, kova, hal, canli[kimlik]))
        elif aktif:
            s["hayalet"].append((kimlik, ad, kova, hal, "ÜÇ kaynakta da YOK"))
        else:
            s["yok_emekli"].append((kimlik, ad, kova, hal, "üç kaynakta da yok"))
    return s


def _dok(baslik, kayitlar, son="not"):
    if not kayitlar:
        return
    print("\n" + baslik)
    print("   %-26s %-13s %-12s %s" % ("AD", "KOVA", "HÂL", son.upper()))
    for kimlik, ad, kova, hal, notu in kayitlar:
        print("   %-26s %-13s %-12s %s" % (ad[:26], kova or "—", hal or "—", notu))
        print("     %s" % kimlik)


def bas(s, hepsi=False, canli_verildi=True):
    n = sum(len(s[k]) for k in ("kanitli", "hayalet", "yok_emekli", "olculemedi"))
    print("=" * 78)
    print("DEFTER HAYALET DENETİMİ — %d satır" % n)
    print("=" * 78)
    print("🟢 KANITLI        %4d" % len(s["kanitli"]))
    print("🔴 HAYALET        %4d   ← canlı kovada, ÜÇ kaynakta da yok" % len(s["hayalet"]))
    print("🟡 YOK-EMEKLI     %4d   (ihlal değil)" % len(s["yok_emekli"]))
    print("⚪ ÖLÇÜLEMEDİ     %4d   (temiz DEĞİL)" % len(s["olculemedi"]))
    print("🟠 AD KAYMASI     %4d   (kimlik var, AD farklı)" % len(s["ad_kaymasi"]))
    _dok("🔴 HAYALET — İŞ ATANIRSA TESLİM SESSİZCE YUTULUR", s["hayalet"])
    _dok("⚪ ÖLÇÜLEMEDİ", s["olculemedi"])
    _dok("🟠 AD KAYMASI — defterdeki ad ile canlı başlık AYRI", s["ad_kaymasi"], "canlı başlık")
    if hepsi:
        _dok("🟡 YOK-EMEKLI", s["yok_emekli"])
        _dok("🟢 KANITLI", s["kanitli"], "kaynak")
    print("")
    if not canli_verildi:
        print("⚠️ `--canli` VERİLMEDİ — üç kanıttan biri eksik koşuldu.")
        print("   Bu bir hüküm değil bir EKSİK ÖLÇÜMDÜR; hayalet sayısı ŞİŞMİŞ olabilir.")
    if s["hayalet"]:
        print("🔴 SONUÇ: %d HAYALET." % len(s["hayalet"]))
        print("   ⇒ Doğru kimliği ölç, `defter.py kaydet --kimlik ...` ile YAZ;")
        print("     eski satırı SİLME — `defter.py hal <kimlik> EMEKLI` ile DAMGALA")
        print("     ve KOVASINI da emekli yap (kova canlı kalırsa iş yine oraya gider).")
    else:
        print("🟢 SONUÇ: canlı kovadaki her satırın en az bir kanıtı VAR.")
    if s["olculemedi"]:
        print("⚪ %d satır ÖLÇÜLEMEDİ — ayrıca bakılmalı." % len(s["olculemedi"]))
    return 1 if s["hayalet"] else 0


def kendi_testi():
    """C13 — altı dal, her biri AYRI zorlanır.
    ⚠️ Bu sınav SINIFLANDIRMAYI sınar; KANIT KAYNAĞINI sınamaz. Sürüm 1 bu
    sınavı geçmişti ve kanıtı yanlıştı. Kaynak ancak BİLİNEN bir vakayla
    doğrulanır — sahte veriyle asla."""
    A = {"ad": "A", "kova": "hazir-kita", "hal": "HAZIR"}
    E = {"ad": "E", "kova": "emekli", "hal": "EMEKLI"}
    dallar = [
        ("GEÇME — canlı kaynakta VAR", {"local_a": A}, {"local_a": "A"}, {}, {}, 0,
         lambda s: len(s["kanitli"]) == 1),
        ("ATEŞLEME 1 — üç kaynakta da YOK, canlı kovada", {"local_b": A}, {}, {}, {}, 1,
         lambda s: len(s["hayalet"]) == 1),
        ("ATEŞLEME 2 — EMEKLI ve üçünde de yok: ihlal DEĞİL", {"local_c": E}, {}, {}, {}, 0,
         lambda s: len(s["yok_emekli"]) == 1),
        ("ATEŞLEME 3 — YALNIZ tahtada var: hayalet DEĞİL", {"local_d": A}, {}, {}, {"local_d": "D"}, 0,
         lambda s: s["kanitli"] and s["kanitli"][0][4] == "tahta"),
        ("ATEŞLEME 4 — YALNIZ dökümde var: hayalet DEĞİL", {"local_e": A}, {}, {"local_e": "p"}, {}, 0,
         lambda s: s["kanitli"] and s["kanitli"][0][4] == "dokum"),
        ("ATEŞLEME 5 — kimlik var, AD kaymış", {"local_f": {"ad": "ESKI", "kova": "gorevde", "hal": "CALISIYORUM"}},
         {"local_f": "YENI"}, {}, {}, 0, lambda s: len(s["ad_kaymasi"]) == 1),
        ("ATEŞLEME 6 — kimlik biçimi bozuk: ÖLÇÜLEMEDİ", {"bozuk-kimlik": A}, {}, {}, {}, 0,
         lambda s: len(s["olculemedi"]) == 1 and not s["hayalet"]),
    ]
    tamam = True
    for baslik, satir, canli, dokum, tahta, bek, olcut in dallar:
        print("\nC13 — %s" % baslik)
        s = sinifla(satir, canli, dokum, tahta)
        kod = bas(s)
        ok = (kod == bek) and olcut(s)
        tamam = tamam and ok
        print("   çıkış kodu %d (beklenen %d)  %s" % (kod, bek, "✓" if ok else "🔴 GEÇEMEDİ"))
    print("\n" + ("🟢 YEDİ DALIN HEPSİ SINANDI." if tamam else "🔴 EN AZ BİR DAL GEÇEMEDİ."))
    print("⚠️ Kanıt kaynağı bu sınavın DIŞINDADIR — bilinen vakayla ayrıca ölç.")
    return 0 if tamam else 1


def main(argv):
    if "--kendi-testi" in argv:
        return kendi_testi()
    yol = None
    if "--canli" in argv and argv.index("--canli") + 1 < len(argv):
        yol = argv[argv.index("--canli") + 1]
    if not os.path.exists(VERI):
        print("🔴 defter.json bulunamadı: %s" % VERI)
        return 2
    d = json.load(io.open(VERI, encoding="utf-8"))
    canli = kaynak_canli(yol)
    dokum = kaynak_dokum()
    tahta = kaynak_tahta()
    print("KANITLAR — canli: %s · dokum: %d · tahta: %d" % (
        ("%d" % len(canli)) if canli is not None else "VERİLMEDİ", len(dokum), len(tahta)))
    return bas(sinifla(d.get("oturumlar") or {}, canli, dokum, tahta),
               "--hepsi" in argv, canli is not None)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
