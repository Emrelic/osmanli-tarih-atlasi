# -*- coding: utf-8 -*-
"""_baskent_ad_olcum.py — ARAYÜZ, tek kullanımlık ÖLÇÜM betiği (M-1831).

ORHANGAZİ'nin istediği ölçüm: `devletler.js`'teki `baskent:` alanlarının,
yerleşim külliyatındaki `ad:` alanlarıyla TAM eşleşme oranı — kendi
HUKUM-ARAYUZ.json'ımdaki "ölçmedim" beyanının cevabı.

Ayrıştırma `arac/girdi.py`nin KENDİ fonksiyonlarıyla yapılıyor
(`yukle()` · `oku_devletler()`) — CLAUDE.md §11: "kendi yazdığın
ayrıştırıcı, var olan bir ayrıştırıcıdan her zaman kötüdür."

Üç kova:
  ① TAM     — baskent: == ad: harfi harfine
  ② KATLAMA — yalnız Türkçe katlamayla eşleşiyor (ı/i·ş/s·ğ/g·ç/c·ö/o·ü/u
              + â/î/û) — RİSKLİ, insan gözden geçirmeli (katlama yanlış
              pozitif de üretebilir: "Sam" ile "Şam" katlanınca eşitlenir
              ama aynı yer OLMAYABİLİR)
  ③ YOK     — hiçbiri eşleşmiyor

Ayrıca: yerleşim `ad:` havuzunun KENDİ İÇİNDE katlama çakışması var mı —
iki farklı gerçek yer aynı katlanmış anahtara düşüyor mu. Bu, ②
kovasının ne kadar güvenilmez olduğunun bağımsız, veri-genelinde bir
ölçüsü (tek tek `baskent:` adaylarından bağımsız).

Yalnız OKUR — hiçbir dosyaya yazmaz.
"""
import sys
import io

sys.path.insert(0, "arac")
import girdi  # noqa: E402

CIFT = {
    "I": "i", "ı": "i", "İ": "i", "i": "i",
    "Ş": "s", "ş": "s",
    "Ğ": "g", "ğ": "g",
    "Ç": "c", "ç": "c",
    "Ö": "o", "ö": "o",
    "Ü": "u", "ü": "u",
    "Â": "a", "â": "a",
    "Î": "i", "î": "i",
    "Û": "u", "û": "u",
}


def katla(s):
    """Türkçe katlama. Python'un `.lower()`INA GÜVENMİYOR — 'İ'.lower() bazı
    ortamlarda çift karakter (i̇) üretir (bilinen 'Turkish I problemi').
    Türkçeye özgü harfler TABLODAN, geri kalanı ASCII .lower() ile."""
    if not s:
        return s
    out = []
    for c in s:
        out.append(CIFT[c] if c in CIFT else c.lower())
    return "".join(out)


def main():
    out = io.open("_baskent_ad_olcum_ciktisi.txt", "w", encoding="utf-8")

    Y = girdi.yukle(sessiz=True)
    ad_kumesi = set()
    katlanmis = {}
    for y in Y:
        ad = y.get("ad") or ""
        if not ad:
            continue
        ad_kumesi.add(ad)
        katlanmis.setdefault(katla(ad), []).append(ad)

    # ── Yerleşim havuzunun KENDİ İÇİNDE katlama çakışması ────────────
    cakisan = {k: sorted(set(v)) for k, v in katlanmis.items() if len(set(v)) > 1}
    out.write("=== ① YERLEŞİM HAVUZUNDA KATLAMA ÇAKIŞMASI ===\n")
    out.write("toplam ad: %d · katlanmış anahtar: %d · çakışan anahtar: %d\n"
               % (len(ad_kumesi), len(katlanmis), len(cakisan)))
    for k in sorted(cakisan):
        out.write("  %-20s <- %s\n" % (k, " | ".join(cakisan[k])))

    D = girdi.oku_devletler()
    out.write("\n=== ② BAŞKENT ↔ AD EŞLEŞMESİ (%d künye) ===\n" % len(D))
    tam, katlama, yok = [], [], []
    for d in D:
        bas = (d.get("baskent") or "").strip()
        if not bas:
            continue
        if bas in ad_kumesi:
            tam.append((d.get("id"), bas))
            continue
        kb = katla(bas)
        adaylar = katlanmis.get(kb)
        if adaylar:
            katlama.append((d.get("id"), bas, sorted(set(adaylar))))
        else:
            yok.append((d.get("id"), bas))

    toplam_baskentli = len(tam) + len(katlama) + len(yok)
    out.write("baskent: alanı dolu künye: %d\n" % toplam_baskentli)
    out.write("  TAM eşleşen     : %d  (%%%.1f)\n"
               % (len(tam), 100.0 * len(tam) / toplam_baskentli if toplam_baskentli else 0))
    out.write("  KATLAMA eşleşen : %d  (%%%.1f) — RİSKLİ, tek tek incelendi aşağıda\n"
               % (len(katlama), 100.0 * len(katlama) / toplam_baskentli if toplam_baskentli else 0))
    out.write("  HİÇ eşleşmeyen  : %d  (%%%.1f)\n"
               % (len(yok), 100.0 * len(yok) / toplam_baskentli if toplam_baskentli else 0))

    out.write("\n── KATLAMA eşleşenler (id · baskent: · katlanmış aday(lar)) ──\n")
    for id_, bas, adaylar in katlama:
        out.write("  %-28s %-20s -> %s\n" % (id_, bas, " | ".join(adaylar)))

    # ── ③ "HİÇ EŞLEŞMEYEN"İN KENDİSİ TEK KOVA DEĞİL — alt sınıflandırma ──
    # ORHANGAZİ: "eşleşmeyenleri DÖK: kaç tane, hangileri, sebep ne
    # (yazım farkı mı · yerleşim gerçekten yok mu · farklı ad mı)".
    # `baskent:` çoğu zaman TEK BİR ŞEHİR ADI DEĞİL — zincir/liste/düzyazı.
    # Bu, benim ARAYÜZ kodumun (yabanciBaskentMi) NEDEN sessizce boş
    # kaldığının asıl açıklaması — Türkçe yazım ekseninden ÖNCE gelen,
    # daha büyük bir sebep.
    zincir, veri_yok, gocebe, tek_ad_eksik = [], [], [], []
    for id_, bas in yok:
        b = bas.strip()
        if b in ("—", "-", ""):
            veri_yok.append((id_, bas))
        elif "belirtilmemiş" in b or "TDV'de" in b:
            veri_yok.append((id_, bas))
        elif "göçebe" in b or "sabit başkent yok" in b or "yarı-göçebe" in b:
            gocebe.append((id_, bas))
        elif "→" in b or "/" in b or "," in b or ";" in b:
            zincir.append((id_, bas))
        else:
            tek_ad_eksik.append((id_, bas))

    out.write("\n=== ③ 'HİÇ EŞLEŞMEYEN' 265 KAYDIN ALT SINIFLARI ===\n")
    out.write("  ZİNCİR/ÇOK-DEĞERLİ (→ · / · ,)   : %d\n" % len(zincir))
    out.write("  VERİ YOK (TDV belirtmemiş/'—')   : %d\n" % len(veri_yok))
    out.write("  GÖÇEBE/SABİT BAŞKENTSİZ          : %d\n" % len(gocebe))
    out.write("  TEK AD GİBİ GÖRÜNÜYOR AMA YOK    : %d  <- ASIL İNCELENMESİ GEREKEN\n"
               % len(tek_ad_eksik))

    out.write("\n── TEK AD GİBİ GÖRÜNÜYOR AMA YOK (id · baskent:) ──\n")
    for id_, bas in tek_ad_eksik:
        out.write("  %-28s %s\n" % (id_, bas))

    out.write("\n── ZİNCİR/ÇOK-DEĞERLİ örnekleri (ilk 15) ──\n")
    for id_, bas in zincir[:15]:
        out.write("  %-28s %s\n" % (id_, bas))

    out.close()
    print("yazildi: _baskent_ad_olcum_ciktisi.txt")


if __name__ == "__main__":
    main()
