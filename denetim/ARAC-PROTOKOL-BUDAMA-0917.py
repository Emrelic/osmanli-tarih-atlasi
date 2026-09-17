# -*- coding: utf-8 -*-
"""CLAUDE.md PROTOKOL BUDAMASI — 17 Eylül 2026 · PROTOKOL-BUDAMA (Opus 1015)

    py denetim/ARAC-PROTOKOL-BUDAMA-0917.py            KURU: blokları bul, boyutları bas
    py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --uygula   dersler/D199.. + dersler/DIZIN.md yaz
    py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina     KORUMA SINAVI (yeni CLAUDE.md yazıldıktan sonra)

EMSAL: `denetim/ARAC-BUDAMA-UYGULA-0910.py` (§11 budaması). Bu sefer §11 dışındaki
bölümlerin VAKA anlatıları taşınır; CLAUDE.md elle, kısa kural satırlarıyla yeniden yazılır.

🔴 KAYNAK METİN `git show HEAD:CLAUDE.md` — çalışma kopyası değil. Böylece sınav, yeni
   CLAUDE.md diske yazıldıktan SONRA da eski metne karşı koşar.
🔴 KORUMA SINAVI (--sina): eski CLAUDE.md'nin BOŞ OLMAYAN HER SATIRI (kırpılmış) şu
   birleşimde BİREBİR bulunmalı:  yeni CLAUDE.md ∪ bu aracın yazdığı dersler dosyaları
   ∪ dersler/DIZIN.md (bağlantı öneki `dersler/` normalleştirilerek). Bir satır bile
   eksikse exit 2 — "hiçbir kural silinmez" şartının sınanabilir hâli.
🔴 İşaretçi (marker) her biri TAM BİR KEZ bulunmalı; yoksa exit 2, diske bir şey yazılmaz.
"""
import io, os, re, subprocess, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DERS = os.path.join(KOK, "dersler")
TARIH = "17 Eylül 2026"

# (kimlik, slug, başlık, bölüm, [(başlangıç işaretçisi, bitiş işaretçisi|None)])
# işaretçi = satırın BAŞI (startswith); başlangıç dahil, bitiş hariç
BLOK = [
    ("D199", "durum-tablosu-elle-yazilmaz", "§1.5 tablosu elle yazılmaz — iki bayatlama vakası", "§1.5",
     [("> ⚙️ **BU TABLO ELLE YAZILMAZ", "## 1.6 Kapsam disiplini")]),
    ("D200", "sekizinci-boyut-acildi", "Yedi boyut ve 8. boyutun açılışı (Emre, 2 Eylül 2026)", "§1.6",
     [("## 1.6 Kapsam disiplini", "## 2. Petek motoru")]),
    ("D201", "petek-motoru-sayilar-logdan", "Petek motoru — tek zayıf nokta ve logdan gelen sayılar", "§2",
     [("## 2. Petek motoru", "## 3. İhlal edilemez")]),
    ("D202", "uc-degismez-tam-metin", "Üç değişmez — eski sayılar, ölçüt tarihi, Değişmez 3 teşhisi", "§3",
     [("## 3. İhlal edilemez", "## 3.5 Denetimin")]),
    ("D203", "hayalet-devletler", "Hayalet devletler — denetimin görmediği hata sınıfı", "§3.5",
     [("## 3.5 Denetimin", "### 🔴🔴 3.5.-1")]),
    ("D204", "devlet-var-yeri-yanlis", "Hayaletin kardeşi: devlet var, yeri yanlış (hafsi · artuklu)", "§3.5.-1",
     [("### 🔴🔴 3.5.-1", "### 🔴🔴 3.5.0")]),
    ("D205", "uc-sinif-careleri-ters", "Künye aşımının üç sınıfı ve ters çareleri (Batnoz · Zend · Ardıl)", "§3.5.0",
     [("### 🔴🔴 3.5.0", "### 3.5.1")]),
    ("D206", "ters-yon-osmanli-fazla", "Ters yön — Osmanlı fazla mı görünüyor; noktasızlık iki yöne hata üretir", "§3.5.1",
     [("### 3.5.1", "## 4. Kaynak kuralı")]),
    ("D207", "atlas-referans-degil", "Atlas referans değildir; komşu günü şartlı serbest (Emre, 13 Eylül)", "§4",
     [("## 4. Kaynak kuralı", "### 🟢🔴 OKUDUĞUN")]),
    ("D208", "bayrak-kurali", "Okunan kesin sahiplik tanıklığı kayda yazılır — bayrak kuralı", "§4",
     [("### 🟢🔴 OKUDUĞUN", "### 🔴🔴 KIRMIZI ÇİZGİ")]),
    ("D209", "kirmizi-cizgi-ara-bolge", "Kırmızı çizgi: dışarı çıkınca nereye; ara bölge", "§4",
     [("### 🔴🔴 KIRMIZI ÇİZGİ", "#### 🔴🔴 HASSASİYET")]),
    ("D210", "hassasiyet-kaynagi-asamaz", "Hassasiyet kaynağı aşamaz — 147 künye vakası", "§4",
     [("#### 🔴🔴 HASSASİYET", "#### 🔴 TDV TUZAK LİSTESİNE İKİ")]),
    ("D211", "tdv-tuzak-5-8-once-ayristir", "TDV tuzakları ⑤–⑧ ve «önce ayrıştır, sonra çelişki ilan et»", "§4",
     [("#### 🔴 TDV TUZAK LİSTESİNE İKİ", "#### 🔴 VE TERSİ DE GEÇERLİ: KAYNAK")]),
    ("D212", "kaynak-yogunlugu-komsuya-tasinmaz", "Kaynak yoğunluğu komşu bölgeye taşınmaz", "§4",
     [("#### 🔴 VE TERSİ DE GEÇERLİ: KAYNAK", "#### 🔴 ÜÇÜNCÜ HASSASİYET")]),
    ("D213", "ay-ayin-birine-kodlanmis", "Üçüncü hassasiyet ekseni: ay, ayın 1'ine kodlanmış", "§4",
     [("#### 🔴 ÜÇÜNCÜ HASSASİYET", "### ⚠️ TDV ölü slug")]),
    ("D214", "tdv-olu-slug-yanlis-madde", "TDV ölü slug ve canlı-slug-yanlış-madde tuzakları", "§4",
     [("### ⚠️ TDV ölü slug", "### 🔴 AYNI TUZAĞIN KİMLİK")]),
    ("D215", "turkce-yazim-ekseni-lower", "Türkçe yazım ekseni ve `\"İ\".lower()` tuzağı", "§4",
     [("### 🔴 AYNI TUZAĞIN KİMLİK", "### 🔴 KAPSAM BOŞLUĞU")]),
    ("D216", "kapsam-boslugu-iki-cins", "Kapsam boşluğu iki cins; boilerplate gövde; genel maddeyi dene", "§4",
     [("### 🔴 KAPSAM BOŞLUĞU", "#### 🔴🔴 VE 2 EYLÜL 2026'DA")]),
    ("D217", "tdv-olay-degil-yer-kisi", "TDV olay değil yer-kişi ansiklopedisidir; ölçülmüş slug listeleri", "§4",
     [("#### 🔴🔴 VE 2 EYLÜL 2026'DA", "### 🔴 Ölçülmüş isabet")]),
    ("D218", "tdv-isabet-orani-81", "TDV slug isabet oranı %81 — çürüyen %19 hep canlı-yanlış-madde", "§4",
     [("### 🔴 Ölçülmüş isabet", "## 5. Dosya haritası")]),
    ("D219", "dosya-haritasi-tam", "Dosya haritası — tam metin ve bayatlama vakaları", "§5",
     [("## 5. Dosya haritası", "## 6. Kapsam")]),
    ("D220", "kapsam-genisleme-sirasi", "Kapsam genişlemesinin zorunlu sırası", "§6",
     [("## 6. Kapsam", "## 7. Oturum düzeni")]),
    ("D221", "dosya-sahipligi-uretim-kilidi", "Dosya sahipliği tablosu ve üretim kilidi (motor «SERBEST» der)", "§7",
     [("## 7. Oturum düzeni", "- 🔴 **NÖBETÇİ DE ALTYAPIYA")]),
    ("D222", "nobetci-altyapiyla-olur", "Nöbetçi de altyapıya bağlıdır ve altyapıyla ölür", "§7",
     [("- 🔴 **NÖBETÇİ DE ALTYAPIYA", "- **Commit ve push yalnız Oturum 0")]),
    ("D223", "commit-istisnasi-pathspec", "Commit istisnası — dizin pathspec yasağı ve iki adımlı pathspec", "§7",
     [("- **Commit ve push yalnız Oturum 0", "- 🔴🔴 **CEVAP KENDİ PENCERENE")]),
    ("D224", "cevap-kanali-ne-oldu-bizim-is", "Cevap kendi pencerene yazılmaz; «ne oldu bizim iş» cevapsız kalmaz", "§7",
     [("- 🔴🔴 **CEVAP KENDİ PENCERENE", "- 🔴🔴 **AYRI DOSYA VERMEK")]),
    ("D225", "ad-alani-kaynak-sahipligi", "Ayrı dosya ≠ ayrı ad alanı; kaynak (CPU/koşu) sahipliği", "§7",
     [("- 🔴🔴 **AYRI DOSYA VERMEK", "## 7.1 HABERLEŞME")]),
    ("D226", "haberlesme-dogusu-kanal", "Haberleşme protokolünün doğuşu; kanal ve mesaj zamanları", "§7.1 ①②",
     [("## 7.1 HABERLEŞME", "### ③ ~~İŞÇİ")]),
    ("D227", "yatay-mesajlasma-serbest", "İşçi işçiye yazmaz kuralının düşmesi — yatay mesajlaşma", "§7.1 ③",
     [("### ③ ~~İŞÇİ", "### ④ NE YAZILIR")]),
    ("D228", "teslim-aksaklik-cember", "Üçlü kural, commit≠teslim, tahta mesaj kaybı, aksaklık, altı durak", "§7.1 ④–⑦",
     [("### ④ NE YAZILIR", "## 8. Veri biçimleri")]),
    ("D229", "komutlar-palet-bayat-yayin", "Komutlar, palet verinin fonksiyonudur, bayat koşu yayını", "§9",
     [("## 9. Komutlar", "## 10. Çalışma")]),
    ("D230", "calisma-protokolu-beep", "Çalışma protokolü — beep kuralları ve bekçi tetiği", "§10",
     [("## 10. Çalışma", "## 11. Tekrarlanmaması")]),
    ("D231", "belge-seti-acilis-sirasi", "Belge seti ve oturum açılış sırası (tam metin)", "Belge seti",
     [("## Belge seti", "## 1. Proje nedir")]),
    ("D232", "proje-nedir-tam", "Dosyanın girişi ve «Proje nedir» — tam metin", "giriş · §1",
     [("# Tarih Atlası", "## Belge seti"), ("## 1. Proje nedir", "## 1.5 Bugün")]),
]
DIZIN_BAS = "## 11. Tekrarlanmaması"


def eski_metin():
    b = subprocess.run(["git", "show", "HEAD:CLAUDE.md"], cwd=KOK,
                       capture_output=True, check=True).stdout
    return b.decode("utf-8").replace("\r\n", "\n")


def bul(sat, isaret):
    k = [i for i, x in enumerate(sat) if x.startswith(isaret)]
    return k


def bloklar(sat):
    hata = []
    cikti = []
    for kim, slug, bas, bol, araliklar in BLOK:
        parca = []
        for a, b in araliklar:
            ka = bul(sat, a)
            kb = bul(sat, b) if b else [len(sat)]
            if len(ka) != 1 or len(kb) != 1 or kb[0] <= ka[0]:
                hata.append(f"{kim}: '{a[:40]}' {len(ka)} kez · '{(b or 'SON')[:40]}' {len(kb)} kez")
                continue
            parca.append("\n".join(sat[ka[0]:kb[0]]).rstrip())
        cikti.append((kim, slug, bas, bol, "\n\n".join(parca)))
    return cikti, hata


def dizin_metni(sat):
    k = bul(sat, DIZIN_BAS)
    if len(k) != 1:
        return None
    govde = "\n".join(sat[k[0] + 1:]).rstrip()
    govde = govde.replace("](dersler/", "](")
    return govde


def dosya_adi(kim, slug):
    return os.path.join(DERS, f"{kim}-{slug}.md")


def main():
    sat = eski_metin().split("\n")
    bl, hata = bloklar(sat)
    dz = dizin_metni(sat)
    if dz is None:
        hata.append("§11 başlığı bulunamadı")
    if hata:
        print("🔴 İŞARETÇİ HATASI — DİSKE HİÇBİR ŞEY YAZILMADI:")
        for h in hata:
            print("  ", h)
        sys.exit(2)
    for kim, slug, bas, bol, govde in bl:
        if os.path.exists(dosya_adi(kim, slug)) is False and any(
                f.startswith(kim + "-") for f in os.listdir(DERS)):
            print(f"🔴 {kim} başka bir adla zaten var — DURDUM"); sys.exit(2)
    toplam = 0
    for kim, slug, bas, bol, govde in bl:
        n = len(govde.encode("utf-8")); toplam += n
        print(f"{kim}  {n:6d} B  {bol:10s} {bas[:60]}")
    print(f"taşınan blok: {len(bl)} · {toplam} B · §11 dizini {len(dz.encode('utf-8'))} B")

    if "--uygula" in sys.argv:
        for kim, slug, bas, bol, govde in bl:
            metin = (f"# {bas}\n\n"
                     f"> Kimlik `{kim}` · `CLAUDE.md {bol}` bölümünden taşındı ({TARIH}, PROTOKOL-BUDAMA).\n"
                     f"> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.\n"
                     f"> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.\n\n"
                     f"---\n\n{govde}\n")
            io.open(dosya_adi(kim, slug), "w", encoding="utf-8", newline="\n").write(metin)
        yeni = "\n".join(f"- **{bas}** — [`{kim}`]({kim}-{slug}.md)" for kim, slug, bas, bol, g in bl)
        dmetin = ("# DERSLER DİZİNİ\n\n"
                  "> Budama öncesi `CLAUDE.md §11`in tam metni (10 Eylül biçimi) + 17 Eylül "
                  "PROTOKOL-BUDAMA ile taşınan bölüm vakaları. Her satır bir dersin SLOGANI; "
                  "vaka bağlantıdaki dosyadadır. Yeni ders: slogan BURAYA tek satır, vaka `D<sıra>-<slug>.md`e.\n\n"
                  "## §11 — Tekrarlanmaması gereken hatalar (D001–D198)\n\n"
                  f"{dz}\n\n"
                  "## 17 Eylül 2026 — CLAUDE.md bölüm vakaları (D199–D232)\n\n"
                  f"{yeni}\n")
        io.open(os.path.join(DERS, "DIZIN.md"), "w", encoding="utf-8", newline="\n").write(dmetin)
        print("🟢 yazıldı:", len(bl), "ders dosyası + dersler/DIZIN.md")

    if "--sina" in sys.argv:
        havuz = set()
        hedef = (sys.argv[sys.argv.index("--taslak") + 1] if "--taslak" in sys.argv
                 else os.path.join(KOK, "CLAUDE.md"))
        print("sınanan:", hedef)
        yeni_claude = io.open(hedef, encoding="utf-8").read()
        kaynaklar = [yeni_claude, io.open(os.path.join(DERS, "DIZIN.md"), encoding="utf-8").read()]
        for kim, slug, bas, bol, g in bl:
            kaynaklar.append(io.open(dosya_adi(kim, slug), encoding="utf-8").read())
        for m in kaynaklar:
            for x in m.replace("\r\n", "\n").split("\n"):
                havuz.add(x.strip().replace("](dersler/", "]("))
        eksik = [(i + 1, x) for i, x in enumerate(sat)
                 if x.strip() and x.strip().replace("](dersler/", "](") not in havuz]
        b = len(yeni_claude.encode("utf-8"))
        print(f"\nKORUMA SINAVI · eski satır {sum(1 for x in sat if x.strip())} · eksik {len(eksik)}")
        print(f"yeni CLAUDE.md {b} B · hedef ≤ 30000 B · {'✓' if b <= 30000 else '✗'}")
        for i, x in eksik[:40]:
            print(f"  ✗ {i}: {x[:100]}")
        # ters yön: yeni CLAUDE.md'deki her dersler/ bağlantısı gerçek bir dosyaya gitmeli
        kirik = [l for l in re.findall(r"\]\((dersler/[^)]+)\)", yeni_claude)
                 if not os.path.exists(os.path.join(KOK, l))]
        print(f"kırık dersler bağlantısı: {len(kirik)}", kirik[:10])
        if eksik or kirik or b > 30000:
            sys.exit(2)
        print("🟢 SINAV GEÇTİ")


if __name__ == "__main__":
    main()
