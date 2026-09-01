# -*- coding: utf-8 -*-
"""
`Değişmez 2y` — KIRILMA ↔ MADDE **YER** EŞLEŞMESİ (yer_id ekseni)
==================================================================
    Değişmez 2   bu kırılmanın ±30 gün içinde bir madde VAR MI?
    Değişmez 2y  eşleşen o madde BU YERLEŞİM hakkında mı?

DOĞURAN VAKA (OPUS 102, 2 Eylül 2026 · parti-0035/H-0058 zinciri):
    Tiflis  d.f = 1578-08-09  → eşleşen madde "Çıldır Zaferi"
    Oysa TDV (`tiflis` + `gurcistan`, iki ayrı madde) Tiflis'i 24 Ağustos
    diyor ve BİZİM KRONOLOJİMİZDE O MADDE DE VAR:
        kronoloji_gurcistan.js  1578-08-24  "Tiflis'in fethi"
    ⇒ Harita kendi kronolojisini 15 gün önce yalanlıyor, ve `Değişmez 2`
      bunu göremiyor çünkü o günde bir madde VAR — ama YANLIŞ madde.

🔴 BU ARAÇ VAR OLAN BİR DENETİMİN YERİNİ ALMAZ — ONA İKİNCİ BİR EKSEN EKLER.
   `arac/denetle_eslesme.py` §A aynı soruyu **başlık METNİ** üzerinden soruyor
   (`denetle._madde_yeri_aniyor`: madde başlığında yerleşimin adı geçiyor mu)
   ve doğuran vakayı ZATEN yakalıyor. Ölçüldü, 2 Eylül 2026:
       §A: 530 kırılma · 130 şüpheli (tavan 97)
       ve listesinde `1578-08-09 (6) Batum, Hulo (Acara) | 0g | Çıldır Zaferi`
   ⇒ Yeni bir nöbetçi YAZMAK yerine, o nöbetçinin GÖREMEDİĞİ ekseni ölçüyoruz:
       METİN ekseni  başlıkta ad geçiyor mu   — Türkçe kelime sınırı regex'i,
                     ada bağlı, yazım farkına ve parantezli adlara duyarlı
       yer_id ekseni YAPILANDIRILMIŞ alan     — bir `if` ile sorulabilir
   📌 `CLAUDE.md §11` ⑪: *"bu bilgiyi bir `if` ile sorabiliyor muyum?
      Sorulamıyorsa kayıt vardır, VERİ YOKTUR."* Metin ekseni bir kayıttır;
      `yer_id` ekseni veridir. İkisi AYRI şeyi görür ve fark ÖLÇÜLÜYOR (§D).

ÜÇ KOVA — ve üçüncüsü ŞART:
    EŞLEŞİYOR      maddenin yer_id'si kırılmanın yerleşimlerinden biri
    EŞLEŞMİYOR     yer_id VAR ama başka bir yeri gösteriyor      ← şüpheli
    ÖLÇÜLEMEDİ     maddede yer_id YOK                            ← ayrı raporlanır
⚠️ `CLAUDE.md §11`: *"ölçülemedi ASLA temiz diye raporlanmaz."* Üçüncü kovayı
   "eşleşmiyor"a katmak da yanlış olurdu: o maddeler hakkında hiçbir şey
   bilmiyoruz, yanlış oldukları ölçülmedi.

ÇALIŞTIRMA
    py arac/_yer_eslesme_ok102.py              # d:/v: kırılmaları (Osmanlı)
    py arac/_yer_eslesme_ok102.py --s          # s: (yabancı) kırılmaları da
    py arac/_yer_eslesme_ok102.py --ayrinti    # bütün şüpheli satırlar
    py arac/_yer_eslesme_ok102.py --sinav      # C13: İKİ YÖNÜ DE zorla sına

⚠️ İHLAL DEĞİL, GÖZDEN GEÇİRME KADEMESİDİR — sebebi `denetle_eslesme.py`de
   ölçülmüş: antlaşma maddeleri onlarca yerleşimi tek kalemde devreder
   (Londra 1830 → 21 nokta) ve `yer_id` tek bir yer tutar. Böyle bir madde
   "eşleşmiyor" çıkar ama YANLIŞ DEĞİLDİR. Bu yüzden çıkış kodu 0'dır;
   sayı bir TAVANLA değil, bir BAKIŞLA yönetilir.
"""
import io
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

PENCERE_GUN = 30      # Değişmez 2 ile aynı; bilerek aynı, gevşetilmez


def kok(ad):
    """'Şeki (Nuha)' → 'Şeki' — parantezli açıklama atılır."""
    return re.sub(r"\s*\(.*?\)", "", ad or "").strip()


def yer_dizini(Y):
    """ad → {ad} ve kök → {ad...} — yer_id'yi yerleşime çözmek için."""
    tam, koklu = {}, {}
    for y in Y:
        tam[y["ad"]] = y["ad"]
        koklu.setdefault(kok(y["ad"]), set()).add(y["ad"])
    return tam, koklu


def kirilmalar(Y, kategoriler):
    """Kırılma günü → o gün kıpırdayan yerleşimlerin adları.
    ⚠️ Bu blok `denetle.degismez2`nin kırılma kurma mantığının AYNISIDIR
    (aynı sınırlar: 1281-01-01 ve 1923-10-29 dışarıda). Kopya olmasının
    sebebi: `degismez2` eşleşen MADDEYİ döndürmüyor, yalnız açıkları
    döndürüyor. Ölçüt ayrışmasın diye eşikler oradan alınmıştır."""
    kir = {}
    for y in Y:
        donemler = []
        for kat in kategoriler:
            donemler += (y.get(kat) or [])
        for p in donemler:
            for d in (p.get("f"), p.get("t")):
                if not d or d <= "1281-01-01" or d >= "1923-10-29":
                    continue
                kir.setdefault(d, set()).add(y["ad"])
    return kir


def en_yakin_madde(ol, gd):
    """Değişmez 2'nin eşleştirdiği maddeyi döndürür — aynı kural."""
    if not ol:
        return None, None
    o = min(ol, key=lambda x: abs(x["g"] - gd))
    return o, abs(o["g"] - gd)


def olc(Y, O, kategoriler=("d", "v")):
    tam, koklu = yer_dizini(Y)
    ol = [{"g": denetle.gun_no(o["t"]), "o": o} for o in O]
    kir = kirilmalar(Y, kategoriler)

    esles, esleme_yok, olculemedi, uzak = [], [], [], []
    for d in sorted(kir):
        adlar = kir[d]
        m, fark = en_yakin_madde(ol, denetle.gun_no(d))
        if m is None or fark > PENCERE_GUN:
            # Değişmez 2'nin ZATEN "AÇIK" dediği kırılma — bu aracın konusu değil
            uzak.append((d, sorted(adlar)))
            continue
        o = m["o"]
        yid = o.get("yer_id")
        satir = (d, sorted(adlar), o.get("b", ""), fark, yid)
        if not yid:
            olculemedi.append(satir)
            continue
        hedef = set()
        if yid in tam:
            hedef.add(yid)
        hedef |= koklu.get(kok(yid), set())
        if hedef & adlar:
            esles.append(satir)
        else:
            esleme_yok.append(satir)
    return esles, esleme_yok, olculemedi, uzak, kir


def metin_ekseni(satirlar):
    """Aynı satırları `denetle_eslesme.py` §A'nın ölçütüyle (başlık METNİ)
    tartar. Amaç: iki eksenin NEREDE AYRIŞTIĞINI ölçmek."""
    aniyor, anmiyor = [], []
    for s in satirlar:
        (aniyor if denetle._madde_yeri_aniyor(s[2], s[1]) else anmiyor).append(s)
    return aniyor, anmiyor


# ── MESAFE KADEMESİ — ham "eşleşmiyor" sayısı TEK BAŞINA yanıltıcıdır ──────
# İlk koşu 131 şüpheli verdi ve okununca görüldü: çoğu DOĞRU eşleşme.
#   1414-06-01  Konya kuşatması (yer_id=Konya) → kıpırdayan Beyşehir, Akşehir…
#   1299-01-01  Osmanlı Beyliği'nin kuruluşu (yer_id=Söğüt) → Bilecik, Yarhisar
# Madde harekâtı TEMSİLÎ bir yerle adlandırıyor; yakınındaki yerleşimler de o
# harekâtla el değiştiriyor. Bu yanlış eşleşme DEĞİL.
#   1452-01-01  Kilithisar kırılması ↔ yer_id=Kirman        ~3.000 km
#   1417-01-01  Avlonya/Berat       ↔ yer_id=Manama (Bahreyn) ~4.000 km
# İşte bunlar gerçek aday. ⇒ Ölçüt "eşleşiyor mu" değil, **NE KADAR UZAKTA**.
# 📌 Kademe, projenin kendi `renk_olc` içtihadının aynısı: tek eşik yerine
#    dört kova, ve "ölçülemedi" AYRI (CLAUDE.md §11).
YAKIN_KM = 150.0     # aynı harekât sahası sayılır — tasarım
UZAK_KM = 600.0      # bunun ötesi gerçek aday


def mesafe_kademe(satirlar, Y):
    ix = {}
    for y in Y:
        ix.setdefault(y["ad"], y)
        ix.setdefault(kok(y["ad"]), y)
    temsili, uyari, supheli, cozulemedi = [], [], [], []
    for s in satirlar:
        d, adlar, b, fark, yid = s
        hedef = ix.get(yid) or ix.get(kok(yid or ""))
        if not hedef:
            cozulemedi.append(s + (None,))
            continue
        en = min((girdi.km(hedef["lat"], hedef["lon"], ix[a]["lat"], ix[a]["lon"])
                  for a in adlar if a in ix), default=None)
        if en is None:
            cozulemedi.append(s + (None,))
        elif en < YAKIN_KM:
            temsili.append(s + (en,))
        elif en < UZAK_KM:
            uyari.append(s + (en,))
        else:
            supheli.append(s + (en,))
    return temsili, uyari, supheli, cozulemedi


def dok_km(baslik, satirlar, ayrinti, sinir=14):
    print(baslik)
    for s in (satirlar if ayrinti else satirlar[:sinir]):
        d, adlar, b, fark, yid, km = s
        ad = ", ".join(adlar[:2]) + (f" +{len(adlar)-2}" if len(adlar) > 2 else "")
        print("      %-11s %6s km  (%2d) %-26s | yer_id=%-16s | %s"
              % (d, ("%.0f" % km) if km is not None else "—", len(adlar),
                 ad[:26], str(yid)[:16], (b or "")[:40]))
    if not ayrinti and len(satirlar) > sinir:
        print("      … %d satır daha (--ayrinti)" % (len(satirlar) - sinir))


def dok(baslik, satirlar, ayrinti, sinir=12):
    print(baslik)
    for s in (satirlar if ayrinti else satirlar[:sinir]):
        d, adlar, b, fark, yid = s
        ad = ", ".join(adlar[:2])
        if len(adlar) > 2:
            ad += f" +{len(adlar)-2}"
        print("      %-11s (%2d) %-34s |%3dg | yer_id=%-18s | %s"
              % (d, len(adlar), ad[:34], fark, str(yid)[:18], (b or "")[:46]))
    if not ayrinti and len(satirlar) > sinir:
        print("      … %d satır daha (--ayrinti)" % (len(satirlar) - sinir))


def sinav(Y, O):
    """🔴 C13 — İKİ YÖNÜ DE ZORLA SINA. Hangisinin zorlama gerektireceği
    önceden bilinmez; ikisi de zorlanır."""
    print("=" * 74)
    print("SINAV — C13: geçme yolu VE ateşleme yolu, ikisi de ZORLANIYOR")
    print("=" * 74)
    kod = 0

    # ── ATEŞLEME: doğuran vaka bulunmalı ────────────────────────────────
    esles, yok, olculemedi, uzak, _ = olc(Y, O)
    vaka = [s for s in yok if s[0] == "1578-08-09"]
    if vaka:
        print("  🟢 ATEŞLEME ✓ doğuran vaka EŞLEŞMİYOR kovasında:")
        print("        %s  yer_id=%s  madde=%s" % (vaka[0][0], vaka[0][4], vaka[0][2]))
    else:
        nerede = ("EŞLEŞİYOR" if any(s[0] == "1578-08-09" for s in esles)
                  else "ÖLÇÜLEMEDİ" if any(s[0] == "1578-08-09" for s in olculemedi)
                  else "hiç yok")
        print("  🔴 ATEŞLEME ✗ 1578-08-09 şüpheli çıkmadı (%s). "
              "Alet yanlış, veri değil." % nerede)
        kod = 1

    # ── GEÇME: kusursuz bir kırılma TEMİZ sayılıyor mu ──────────────────
    # Sahte ama kusursuz bir vaka kurulur: maddesi aynı gün ve yer_id'si
    # tam o yerleşim. Gerçek veride aramak yetmez — ZORLANARAK sınanır.
    sahte_y = [{"ad": "SINAV-YERİ", "lat": 0.0, "lon": 0.0,
                "d": [{"f": "1500-06-15", "t": "1600-06-15"}]}]
    sahte_o = [{"t": "1500-06-15", "b": "SINAV maddesi", "yer_id": "SINAV-YERİ"}]
    e2, y2, o2, u2, _ = olc(sahte_y, sahte_o)
    if len(e2) >= 1 and not y2 and not o2:
        print("  🟢 GEÇME ✓ kusursuz vaka EŞLEŞİYOR kovasında (%d), şüpheli 0" % len(e2))
    else:
        print("  🔴 GEÇME ✗ kusursuz vaka temiz sayılmadı: "
              "esles=%d yok=%d olculemedi=%d" % (len(e2), len(y2), len(o2)))
        kod = 1

    # ── ÜÇÜNCÜ KOVA da zorlanır: yer_id'siz madde ÖLÇÜLEMEDİ olmalı ─────
    sahte_o2 = [{"t": "1500-06-15", "b": "yer_id'siz SINAV maddesi"}]
    e3, y3, o3, u3, _ = olc(sahte_y, sahte_o2)
    if len(o3) == 1 and not y3 and not e3:
        print("  🟢 ÜÇÜNCÜ KOVA ✓ yer_id'siz madde ÖLÇÜLEMEDİ'ye düştü, "
              "'eşleşmiyor' SAYILMADI")
    else:
        print("  🔴 ÜÇÜNCÜ KOVA ✗ esles=%d yok=%d olculemedi=%d" % (len(e3), len(y3), len(o3)))
        kod = 1

    # ── YANLIŞ EŞLEŞME de zorlanır: başka yerin yer_id'si ───────────────
    sahte_o3 = [{"t": "1500-06-15", "b": "başka yerin maddesi", "yer_id": "BAŞKA-YER"}]
    e4, y4, o4, u4, _ = olc(sahte_y, sahte_o3)
    if len(y4) == 1 and not e4 and not o4:
        print("  🟢 EŞLEŞMEME ✓ başka yerin yer_id'si ŞÜPHELİ sayıldı")
    else:
        print("  🔴 EŞLEŞMEME ✗ esles=%d yok=%d olculemedi=%d" % (len(e4), len(y4), len(o4)))
        kod = 1
    return kod


def main():
    ayrinti = "--ayrinti" in sys.argv
    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()

    if "--sinav" in sys.argv:
        sys.exit(sinav(Y, O))

    kategoriler = ("d", "v", "s") if "--s" in sys.argv else ("d", "v")
    esles, yok, olculemedi, uzak, kir = olc(Y, O, kategoriler)
    top = len(esles) + len(yok) + len(olculemedi)

    print("=" * 74)
    print("Değişmez 2y — KIRILMA ↔ MADDE YER EŞLEŞMESİ  (kategoriler: %s)"
          % "/".join(kategoriler))
    print("=" * 74)
    print("  yerleşim %d · madde %d · kırılma günü %d" % (len(Y), len(O), len(kir)))
    print("  Değişmez 2'nin maddeli saydığı: %d   (±%d gün)" % (top, PENCERE_GUN))
    print("  Değişmez 2'nin ZATEN AÇIK dediği: %d — bu aracın konusu DEĞİL" % len(uzak))
    print()
    print("  🟢 EŞLEŞİYOR    %4d  (%%%.1f)" % (len(esles), 100.0 * len(esles) / max(1, top)))
    print("  🔴 EŞLEŞMİYOR   %4d  (%%%.1f)  ← gözden geçirme" % (len(yok), 100.0 * len(yok) / max(1, top)))
    print("  ⚠️  ÖLÇÜLEMEDİ  %4d  (%%%.1f)  ← maddede yer_id YOK; TEMİZ SAYILMAZ"
          % (len(olculemedi), 100.0 * len(olculemedi) / max(1, top)))
    print()

    # ── MESAFE KADEMESİ — ham sayıyı dört kovaya ayırır ─────────────────
    temsili, uyari, supheli, coz = mesafe_kademe(yok, Y)
    print("  === EŞLEŞMİYOR'UN İÇİ — mesafe kademesi ===")
    print("      🟢 TEMSİLÎ  <%.0f km  %4d   madde harekâtı yakın bir yerle"
          " adlandırıyor — TASARIM" % (YAKIN_KM, len(temsili)))
    print("      🟡 UYARI    %.0f-%.0f km %4d   aynı sahne olabilir, bakılmalı"
          % (YAKIN_KM, UZAK_KM, len(uyari)))
    print("      🔴 ŞÜPHELİ  >%.0f km  %4d   GERÇEK ADAY" % (UZAK_KM, len(supheli)))
    print("      ⚠️  ÇÖZÜLEMEDİ        %4d   yer_id bir yerleşime çözülmedi"
          " — TEMİZ SAYILMAZ" % len(coz))
    print()
    dok_km("  === 🔴 ŞÜPHELİ (>%.0f km) — gözden geçirilecek liste ===" % UZAK_KM,
           supheli, ayrinti)
    print()
    dok_km("  === 🟡 UYARI (%.0f-%.0f km) ===" % (YAKIN_KM, UZAK_KM), uyari, ayrinti, 8)
    print()
    if coz:
        dok_km("  === ⚠️ ÇÖZÜLEMEDİ — yer_id yerleşim değil ===", coz, ayrinti, 8)
        print()
    if ayrinti:
        dok_km("  === 🟢 TEMSİLÎ (<%.0f km) — tasarım sayılanlar ===" % YAKIN_KM,
               temsili, ayrinti)
        print()

    # 🔴 ARACIN KENDİ SINIRI — ve DOĞURAN VAKA ONU GÖSTERİYOR.
    # Tiflis (1578-08-09) `EŞLEŞMİYOR` kovasında ama mesafe kademesinde
    # TEMSİLÎ çıkıyor: eşleşen madde "Çıldır Zaferi", yer_id=Ardahan ve
    # Ardahan kıpırdayan noktalara ~100-200 km. Yani **mesafe kademesi tek
    # başına doğuran vakayı ELER.** Kusur 15 GÜNLÜK bir tarih hatasıydı ve
    # onu ancak KAYNAK (TDV) gösterdi, coğrafya değil.
    # ⇒ Kademe listeyi DARALTMAK için vardır, KARAR VERMEK için değil.
    dv = [s for s in temsili + uyari + supheli + coz if s[0] == "1578-08-09"]
    if dv:
        kmv = dv[0][5]
        kademe = ("TEMSİLÎ" if kmv is not None and kmv < YAKIN_KM else
                  "UYARI" if kmv is not None and kmv < UZAK_KM else "ŞÜPHELİ")
        print("  🔴 ARACIN SINIRI — doğuran vaka (1578-08-09 Tiflis) kademesi: %s"
              " (%.0f km)" % (kademe, kmv if kmv is not None else -1))
        print("     Mesafe kademesi onu ELER. Kusur 15 günlük bir TARİH hatasıydı;")
        print("     ancak KAYNAK gösterdi, coğrafya göstermedi. Kademe listeyi")
        print("     DARALTIR, KARAR VERMEZ. (--ayrinti ile TEMSİLÎ kovası da basılır.)")
        print()
    dok("  === ÖLÇÜLEMEDİ — maddede yer_id yok ===", olculemedi, ayrinti, 8)

    # ── D) İKİ EKSENİN AYRIŞMASI ────────────────────────────────────────
    print()
    print("  === D) İKİ EKSEN NEREDE AYRIŞIYOR ===")
    print("      METİN ekseni = denetle_eslesme.py §A'nın ölçütü (başlıkta ad geçiyor mu)")
    m_var, m_yok = metin_ekseni(yok)
    print("      yer_id EŞLEŞMİYOR diyor, METİN 'adı geçiyor' diyor : %d" % len(m_var))
    print("        ⇒ METİN ekseninin GÖREMEDİĞİ şüpheliler bunlar")
    for s in (m_var if ayrinti else m_var[:6]):
        print("          %-11s yer_id=%-16s | %s" % (s[0], str(s[4])[:16], (s[2] or "")[:44]))
    if not ayrinti and len(m_var) > 6:
        print("          … %d satır daha (--ayrinti)" % (len(m_var) - 6))
    e_var, e_yok = metin_ekseni(esles)
    print("      yer_id EŞLEŞİYOR diyor, METİN 'adı geçmiyor' diyor  : %d" % len(e_yok))
    print("        ⇒ METİN ekseninin YANLIŞ ŞÜPHELENDİKLERİ (yer_id onları temize çıkarıyor)")
    for s in (e_yok if ayrinti else e_yok[:6]):
        print("          %-11s yer_id=%-16s | %s" % (s[0], str(s[4])[:16], (s[2] or "")[:44]))
    if not ayrinti and len(e_yok) > 6:
        print("          … %d satır daha (--ayrinti)" % (len(e_yok) - 6))

    print()
    print("  📌 Bu araç İHLAL İLAN ETMEZ (çıkış kodu 0). Sebebi ölçülmüş:")
    print("     antlaşma maddeleri onlarca yerleşimi tek kalemde devreder ve")
    print("     `yer_id` tek yer tutar — böyle bir satır 'eşleşmiyor' çıkar")
    print("     ama YANLIŞ DEĞİLDİR. Ayırt edilemeyen bir sınıf ihlal sayılamaz.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
