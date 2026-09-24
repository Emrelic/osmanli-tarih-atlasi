# SINIR-D-ORTADOGU-0077 — Kuzey Afrika (Mağrip) kayıtlarının üreticisi (24 Eylül 2026)
# Çıktı: JSON satırları (stdout) — data/d_sinirlar_ortadogu.js'e elle (Edit) eklenir.
# Çıpalar: GeoNames ülke dökümleri DZ/MA/LY (download.geonames.org/export/dump, 24 Eyl 2026).
# Geometri: veri-kaynak/d_bugunku_sinirlar.geojson (NE 10m) — YALNIZ çıpalarla sınanan kesimde.
import json, math, sys
sys.stdout.reconfigure(encoding="utf-8")

NE = json.load(open(r"C:\atlas\veri-kaynak\d_bugunku_sinirlar.geojson", encoding="utf-8"))
def ne(cift):
    return [f for f in NE["features"] if f["properties"]["cift"] == cift][0]["geometry"]["coordinates"]
def km(h):
    t = 0
    for (x0, y0), (x1, y1) in zip(h, h[1:]):
        kx = 111.32 * math.cos((y0 + y1) / 2 * math.pi / 180)
        t += math.hypot((x1 - x0) * kx, (y1 - y0) * 110.57)
    return round(t, 1)
def r5(p): return [round(p[0], 5), round(p[1], 5)]
def enyakin(h, p):
    """h üzerinde p'ye en yakın nokta: (parça indeksi i, nokta) — nokta h[i]..h[i+1] arasında"""
    en = (1e18, None, None)
    for i in range(len(h) - 1):
        a, b = h[i], h[i + 1]
        kx = math.cos(p[1] * math.pi / 180)
        ax, ay, bx, by = (a[0] - p[0]) * kx, a[1] - p[1], (b[0] - p[0]) * kx, b[1] - p[1]
        dx, dy = bx - ax, by - ay
        L2 = dx * dx + dy * dy
        t = 0 if L2 == 0 else max(0, min(1, -(ax * dx + ay * dy) / L2))
        d = (ax + t * dx) ** 2 + (ay + t * dy) ** 2
        if d < en[0]:
            en = (d, i, [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])])
    return en[1], en[2]
def paralelde_kes(h, lat):
    """h'nin lat paralelini ilk kestiği yer: (i, nokta)"""
    for i in range(len(h) - 1):
        a, b = h[i], h[i + 1]
        if (a[1] - lat) * (b[1] - lat) <= 0 and a[1] != b[1]:
            t = (lat - a[1]) / (b[1] - a[1])
            return i, [a[0] + t * (b[0] - a[0]), lat]
    raise ValueError("paralel kesilmedi")

SN_F = "F adayı değerlendirilmedi"
C_NOT = "belge var ama milimetrik değil ⇒ C (renk bu hatta OTURTULMAZ)"
out = []

# ── 1) Cezayir–Fas · Lalla Magniye 18 Mart 1845 md.3 · kıyı → Teniet es-Sassi ──────────────
dm = ne("DZA-MAR")                       # güneyden (Tinduf) kuzeye (Kiss ağzı)
TENIET = (-1.64713, 34.10684)            # DZ 2537700 Teniet Sassi (PASS)
i, p = enyakin(dm, TENIET)
hat = [r5(p)] + [r5(c) for c in dm[i + 1:]]   # kuzeye doğru ilerler ⇒ SOL = batı = Fas
out.append({
  "id": "d1845-cezayir-fas-lalla-magniye", "taraflar": ["fas", "cezayir-fransiz"],
  "f": "1845-03-18", "t": "1923-10-29", "kategori": "C", "sinif": "C", "sinif_not": C_NOT + "; md.1 'taşlarla işaretlenmeyecek'",
  "sol_taraf": "fas", "hat": hat, "uzunluk_km": km(hat),
  "geometri_kaynagi": "Natural Earth 10m admin-0 DZA–MAR (bugünkü sınır), Teniet es-Sassi'den denize — VEKİL; kullanılabilirliği bu oturumun ÇIPA ÖLÇÜMÜNE dayanır (10 adlı nokta, hatta 0,2–6,0 km, ortanca 2,4)",
  "degisti": {"deger": None, "kaynak": "ölçüm (bu oturum) — akademik teyit BULUNAMADI",
              "not": "1845 md.3'ün GeoNames'te bulunan 10 noktası (Foum el-Kiss, Adjeroud, Zoudj el-Beghal ×2, Aïn Takbalet, Rhar Roubane, Ras Asfour, Sidi Aïssa, Kheneg el-Ahda, Teniet Sassi) bugünkü hatta 0,2–6,0 km ⇒ kuzey kesim büyük ölçüde 1845 hattı. 1972 Rabat sözleşmesinin bu kesimi teyit ettiği bilgisi D4 envanterinde 'doğrulanamadı'."},
  "tahdit": {"t": None, "not": "1845 md.1: sınır 'ne sera pas désignée par des pierres'"},
  "kesinlik_km": 6.0, "kesinlik_not": "NE 1:10m + çıpa sapması en çok 6,0 km (Rhar Roubane); Ras el-Aïoun, Drâ el-Doum, El-Aoudj, Haouch Sidi Aïed, Djerf el-Baroud, Kerkour Sidi Hamza, Sidi Zahir, El-Mechêmiche, Koudiet el-Debbagh BULUNAMADI",
  "dayanak": [
    {"ad": "Lalla Magniye Antlaşması (Fransa–Fas)", "madde": "md. 3", "tarih": "1845-03-18", "tur": "antlaşma metni",
     "kaynak": "de Clercq, Recueil des traités de la France c.5 s.271 — mjp.univ-perp.fr baskısı",
     "url": "https://mjp.univ-perp.fr/constit/ma1845.htm",
     "alinti": "Cette ligne commence à l'embouchure de l'oued Adjeroud dans la mer"},
    {"ad": "Lalla Magniye Antlaşması (Fransa–Fas)", "madde": "md. 1", "tarih": "1845-03-18", "tur": "antlaşma metni",
     "url": "https://mjp.univ-perp.fr/constit/ma1845.htm", "alinti": "elle ne sera pas désignée par des pierres"}],
  "not": "Tell kesimi: Kiss ağzı → Kiss ırmağı → Zoudj el-Beghal → Aïn Takbalet → Roubban → Ras Asfour → Sidi Aïssa → Kheneg el-Hada → Teniet es-Sassi (md.3). Güneyi (Sahra) 1845 md.4-6'ya göre sınırsız — kayıt yok. 1912 Fransız himayesi hattı değiştirmedi (iki yan da Fransız idaresi; Fas künyesi atlasta tek). ⚠️ Ölçüldü 1923-09-01: Lalla Magniye kasabası (34.85K 1.73B, Cezayir yakası) `fas` gövdesinde — A katmanı sorusu, koordinatöre bildirildi.",
  "kategori_tarihi": True})

# ── 2) Libya–Cezayir · Gat paraleli → Nijer üçlüsü (12 Eyl 1919) ─────────────────────────
dl = ne("DZA-LBY")                       # kuzeyden (Gadames) güneye (Nijer üçlüsü)
GAT_LAT = 24.96334                       # LY 2217351 Ghat (PPLA) — "Büyük Cami paraleli" vekili
i, p = paralelde_kes(dl, GAT_LAT)
hat = [r5(p)] + [r5(c) for c in dl[i + 1:]]   # güneye/güneydoğuya ⇒ SOL = doğu = Libya
out.append({
  "id": "d1919-libya-cezayir-gat-nijer", "taraflar": ["italya", "cezayir-fransiz"],
  "f": "1919-09-12", "t": "1923-10-29", "kategori": "C", "sinif": "C", "sinif_not": C_NOT + "; IBS 001: 1919 tahdidi 'lacked detail'",
  "sol_taraf": "italya", "hat": hat, "uzunluk_km": km(hat),
  "geometri_kaynagi": "Natural Earth 10m admin-0 DZA–LBY (bugünkü sınır), Gat paralelinden Nijer üçlüsüne — VEKİL; IBS 001'e göre bu kesim 1919'dan beri değişmedi",
  "degisti": {"deger": False, "kaynak": "IBS 001 s.2", "not": "1956 değişikliği yalnız Gadames–Gat kesimi; Gat–Nijer 1955 antlaşmasında 'çok genel' olarak Takharkhouri geçidi, Anai geçidi ve 1010 noktasından geçer"},
  "tahdit": {"t": None, "not": "işaretsiz; IBS 001: 'no maps ... in sufficient detail to be definitive'"},
  "kesinlik_km": 20.0, "kesinlik_not": "1919 metni AÇILMADI; IBS 001 ayrıntılı tahdit yok diyor · güney ucu NE üçlüsü, IBS 001 astronomik noktasına (23°30'54\"K 11°59'54,6\"D) 3,0 km",
  "dayanak": [
    {"ad": "Fransız–İtalyan Düzenlemesi", "tarih": "1919-09-12", "tur": "antlaşma (metni açılmadı — IBS 001 aktarımı)",
     "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs001.pdf", "sayfa": "s.2",
     "alinti": "first delimited between Ghudamis (Rhadames or Ghadames) and the present Niger tripoint"},
    {"ad": "IBS No. 001 Algeria–Libya (1961)", "sayfa": "s.2, s.5", "tur": "resmî sınır çalışması",
     "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs001.pdf",
     "alinti": "There is no detailed delimitation of this segment of the boundary available."}],
  "not": "Kuzey ucu d1923-libya-cezayir-gadames'e (taş 233) bağlanmaz: arada Gadames–Gat kesimi (d1919-libya-cezayir-gadames-gat-YOK) var. Güney ucu 1923'te İtalyan Libyası–Fransız Cezayiri–Fransız Batı Afrikası (Nijer) üçlüsü; Nijer yakası SINIR-D-AFRIKA-0077'nin.",
  "kategori_tarihi": True})

# ── 3) Libya–Cezayir · Gadames (taş 233) → Gat — YOK ─────────────────────────────────────
out.append({
  "id": "d1919-libya-cezayir-gadames-gat-YOK", "taraflar": ["italya", "cezayir-fransiz"],
  "f": "1919-09-12", "t": "1923-10-29", "kategori": "D-YOK", "hat": None,
  "kutu": [9.4, 24.9, 10.3, 30.05],
  "degisti": {"deger": True, "kaynak": "IBS 001 s.2-5", "not": "26 Ara 1956 Fransız–Libya anlaşması A–T noktalarıyla yeniden tahdit etti; bugünkü hat 1923'ü GÖSTERMEZ"},
  "kesinlik_km": None, "kesinlik_not": "kutu TAHMİNİ: taş 233 (Garet Hamel, Gadames'in ~14 km GB'sı) ile Gat paraleli arası",
  "dayanak": [{"ad": "IBS No. 001 Algeria–Libya (1961)", "sayfa": "s.2", "tur": "resmî sınır çalışması",
               "url": "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs001.pdf",
               "alinti": "the Franco - Libyan Agreement of 1956 changed the part between Ghudamis and Ghat"}],
  "not": "1919 metni BULUNAMADI (IBS 001 yalnız 'ayrıntıdan yoksun' diyor; Brownlie African Boundaries açılamadı) ⇒ bu kutuda çizgi YOK, A/B geçerli. 1956 A–T noktalarını 1923'e yazmak anakronizm olur.",
  "sinif": "YOK", "kategori_tarihi": True})

for r in out:
    print(json.dumps(r, ensure_ascii=False) + ",")
for r in out:
    print(r["id"], r["sinif"], r.get("uzunluk_km"), len(r["hat"]) if r["hat"] else 0, file=sys.stderr)
