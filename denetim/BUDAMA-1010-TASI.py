# -*- coding: utf-8 -*-
"""BUDAMA-1010 — CLAUDE.md'nin 13 bölümünü BİREBİR dersler/D273…D285'e taşır.

    py denetim/BUDAMA-1010-TASI.py           KURU: blokları bul, boyut bas
    py denetim/BUDAMA-1010-TASI.py --uygula  dersler dosyalarını yaz + DIZIN.md'ye 13 satır ekle

🔴 KAYNAK `git show 197455c8:CLAUDE.md` (TABAN SABİT) — çalışma kopyası değil; yeni CLAUDE.md
   diske yazıldıktan sonra da aynı metni taşır (17 Eylül aletinin `TABAN` dersi).
🔴 Her blok satır aralığıyla tanımlı VE ilk satırı birebir sınanır; tutmazsa çıkış 2, hiçbir şey yazılmaz.
"""
import io, os, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DERS = os.path.join(KOK, "dersler")
TABAN = "197455c8"
# (kimlik, slug, başlık, bölüm, ilk satır no, son satır no (dahil), ilk satırın başı)
BLOK = [
 ("D273", "belge-seti-agac-geride-1010", "Belge seti ve açılış — AĞACIN GERİDEYSE DUR (10 Ekim hâli)", "giriş · Belge seti", 1, 44, "# Tarih Atlası"),
 ("D274", "degismezler-kapinin-yeri-1010", "Değişmezler: üç çıkış kodu · kapının YERİ · tek otorite (10 Ekim hâli)", "§3", 108, 199, "## 3. İhlal edilemez"),
 ("D275", "tavan-disiplini-1010", "Tavan disiplini ⓪–⑦ — tam metin ve vakalar (10 Ekim hâli)", "§3.4", 200, 264, "### 3.4 "),
 ("D276", "gorulmeyen-siniflar-bosluk-delik-1010", "Denetimin görmediği sınıflar + BEYANLI BOŞLUK = DELİK (10 Ekim hâli)", "§3.5", 265, 311, "## 3.5 Denetimin"),
 ("D277", "kaynak-kurali-hicri-sozlesme-1010", "Kaynak kuralı: TDV olgu/tarih · HİCRÎ GÜN SÖZLEŞMESİ · tuzaklar (10 Ekim hâli)", "§4", 314, 463, "## 4. Kaynak kuralı"),
 ("D278", "dosya-haritasi-uc-yuz-1010", "Dosya haritası ve canlılığın üç yüzü: girdi · çıktı · log (10 Ekim hâli)", "§5", 466, 570, "## 5. Dosya haritası"),
 ("D279", "oturum-duzeni-surec-oldurme-1010", "Oturum düzeni: makine rolleri · SÜREÇ ÖLDÜRME · dizin paylaşımı (10 Ekim hâli)", "§7", 577, 665, "## 7. Oturum düzeni"),
 ("D280", "token-kurali-olcturme-1010", "Haberleşme/TOKEN kuralı: koordinatör ÖLÇTÜRÜR, iki yanlılık (10 Ekim hâli)", "§7.1", 668, 768, "## 7.1 Haberleşme"),
 ("D281", "atama-protokolu-1010", "Atama protokolü ①–⑧ — tam metin ve vakalar (10 Ekim hâli)", "§7.3", 769, 855, "## 7.3 "),
 ("D282", "token-zinciri-bekci-1010", "Token zinciri ①–⑧: bekçi tavanı · nabız · darboğaz (10 Ekim hâli)", "§7.2", 856, 972, "## 7.2 TOKEN ZİNCİRİ"),
 ("D283", "komutlar-kosu-bayraklari-1010", "Komutlar: KOŞU BAYRAKLARI · zincir yayın yapamaz · kabul ölçütü (10 Ekim hâli)", "§9", 991, 1137, "## 9. Komutlar"),
 ("D284", "motor-dondurma-kapsam-1010", "Motor kodu dondurma ve kapsamı (10 Ekim hâli)", "§9.1", 1138, 1192, "## 9.1 "),
 ("D285", "tekrarlanmamasi-gereken-1010", "§11 ailesi: kapının beş üyesi · öneri sayısı · desen (10 Ekim hâli)", "§11", 1207, 1347, "## 11. Tekrarlanmaması"),
]


def taban():
    b = subprocess.run(["git", "show", TABAN + ":CLAUDE.md"], cwd=KOK, capture_output=True, check=True).stdout
    return b.decode("utf-8").replace("\r\n", "\n").split("\n")


def main():
    sat = taban()
    hata, cikti = [], []
    for kim, slug, bas, bol, a, z, ilk in BLOK:
        if not sat[a - 1].startswith(ilk):
            hata.append(f"{kim}: satır {a} '{sat[a-1][:50]}' ≠ '{ilk}'")
        if any(f.startswith(kim + "-") for f in os.listdir(DERS)) and not os.path.exists(os.path.join(DERS, f"{kim}-{slug}.md")):
            hata.append(f"{kim} başka adla zaten var")
        cikti.append((kim, slug, bas, bol, "\n".join(sat[a - 1:z]).rstrip()))
    if hata:
        print("🔴 HATA — hiçbir şey yazılmadı:"); [print("  ", h) for h in hata]; sys.exit(2)
    for kim, slug, bas, bol, g in cikti:
        print(f"{kim} {len(g.encode('utf-8')):6d} B  {bol:10s} {bas[:70]}")
    if "--uygula" in sys.argv:
        for kim, slug, bas, bol, g in cikti:
            m = (f"# {bas}\n\n"
                 f"> Kimlik `{kim}` · `CLAUDE.md {bol}` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).\n"
                 f"> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `{TABAN}`.\n"
                 f"> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.\n\n"
                 f"---\n\n{g}\n")
            io.open(os.path.join(DERS, f"{kim}-{slug}.md"), "w", encoding="utf-8", newline="\n").write(m)
        dz = os.path.join(DERS, "DIZIN.md")
        eski = io.open(dz, encoding="utf-8").read()
        if "BUDAMA-1010" not in eski:
            ek = ("\n\n## 10 Ekim 2026 — CLAUDE.md bölüm vakaları, BUDAMA-1010 (D273–D285)\n\n"
                  + "\n".join(f"- **{bas}** — [`{kim}`]({kim}-{slug}.md)" for kim, slug, bas, bol, g in cikti) + "\n")
            nl = "\r\n" if "\r\n" in eski else "\n"          # DIZIN'in kendi satır sonu
            io.open(dz, "w", encoding="utf-8", newline="").write(eski.rstrip("\r\n") + ek.replace("\n", nl))
        print("🟢 yazıldı:", len(cikti), "ders + DIZIN.md eki")


if __name__ == "__main__":
    main()
