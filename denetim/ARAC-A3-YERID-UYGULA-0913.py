# -*- coding: utf-8 -*-
"""PAKET-A3 · 0045/H-0008 — YAMA-YER-ID-0913.json'un DOĞRULANMIŞ önerilerini uygular.

py denetim/ARAC-A3-YERID-UYGULA-0913.py [--uygula]      (vars. KURU KOŞU)

Karar tablosu KARAR aşağıda — her satır PAKET-A3'ün kendi doğrulamasıdır:
  yer_id  → hedef ad `arac/girdi.py` evreninde TAM ADLA ve dönemli VAR (ölçüldü)
  yer_kon → yerleşim yok; öneri koordinatı şehir merkeziyle karşılaştırıldı
  kapsam_genis → `yer:` alanı birden çok ayrı yer sayıyor (okundu)
  yer_id_duzelt → Dârfûr → Darfur (yerleşim adı ASCII, arayüz TAM eşleşme arıyor)
Güvenlik:
  · madde `b` öneki dosyada TAM BİR KEZ geçmeli ve önündeki 600 karakterde kaydın `t`si olmalı
  · nesnede zaten yer_id / yer_kon / kapsam_genis varsa (düzeltme hariç) ATLANIR ve basılır
  · stil korunur: `b:"…"` dosyasında `, yer_id:"…"`; `"b": "…"` dosyasında `, "yer_id": "…"`
"""
import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
uygula = "--uygula" in sys.argv

KARAR = {  # (t, b öneki ilk 25 kr) -> (islem, deger)
    ("1468-01-01", "Kâsım Han'ın ölümü"): ("yer_id", "Kasimov"),
    ("1573-01-01", "Kasım Hanlığı hükümdarı"): ("yer_id", "Kasimov"),   # yama kapsam_genis diyordu; H-0008 odağı Kasım Hanlığı
    ("1609-01-01", "Rus kuvvetlerinin Kasım "): ("yer_id", "Kasimov"),
    ("1400-01-01", "Dârfûr'da Dâcû hâkimiye"): ("yer_id_duzelt", "Darfur"),
    ("1695-01-01", "Dârfûr Sultanlığı'nın k"): ("yer_id_duzelt", "Darfur"),
    ("1794-01-01", "Zend hânedanının sonu —"): ("yer_id", "Kirman"),
    ("1840-10-08", "Hawaii'nin ilk yazılı a"): ("yer_id", "Honolulu"),
    ("1887-07-06", "Süngü Anayasası — Kral "): ("yer_id", "Honolulu"),
    ("1894-07-04", "Hawaii Cumhuriyeti ilan"): ("yer_id", "Honolulu"),
    ("1893-09-19", "Yeni Zelanda kadınlara "): ("yer_id", "Wellington"),
    ("1920-10-08", "Buhara Halk Sovyet Cumh"): ("yer_id", "Buhara"),
    ("1921-09-01", "Buhara Halk Sovyet Cumh"): ("yer_id", "Buhara"),
    ("1918-11-18", "İmparator Karl'ın çekil"): ("yer_id", "Viyana"),
    ("1918-10-31", "Pat Çiçeği Devrimi — Ma"): ("yer_kon", [47.4979, 19.0402]),
    ("1807-07-09", "Tilsit Antlaşması — Pru"): ("yer_kon", [55.0864, 21.8892]),
    ("1893-02-18", "I. George Tupou'nun ölü"): ("yer_kon", [-21.1394, -175.2018]),
    ("1918-04-05", "II. George Tupou'nun öl"): ("yer_kon", [-21.1394, -175.2018]),
    ("1921-08-14", "Tannu Tuva Halk Cumhuri"): ("yer_kon", [51.7191, 94.4378]),
    ("1922-03-03", "Tannu Tuva hükûmeti fii"): ("yer_kon", [51.7191, 94.4378]),
    ("1923-10-12", "Tannu Tuva'nın ilk Büyü"): ("yer_kon", [51.7191, 94.4378]),
    ("1793-05-20", "Timur Şah'ın ölümü, Zam"): ("yer_kon", [34.5553, 69.2075]),
    ("1920-04-26", "Hârizm Halk Cumhuriyeti"): ("yer_kon", [41.3775, 60.3617]),
    ("1921-09-05", "Hârizm Sovyet Sosyalist"): ("yer_kon", [41.3775, 60.3617]),
}
KAPSAM_GENIS = {"1648-10-24", "1819-11-01", "1901-06-11", "1924-01-01", "1918-10-28", "1918-10-30",
                "1918-11-03", "1918-11-11", "1918-12-01", "1919-09-10", "1920-06-04", "1919-06-28", "1919-11-27"}

Y = json.load(open(os.path.join(KOK, "denetim/YAMA-YER-ID-0913.json"), encoding="utf-8"))
say = {"uygulandi": 0, "atlandi": 0, "kararsiz": 0}
metinler = {}
for r in Y["kayitlar"]:
    if r.get("kova") == "zaten-dogru":
        continue
    eslesen = [v for (tt, on), v in KARAR.items() if tt == r["t"] and r["b"].startswith(on)]
    if len(eslesen) == 1:
        islem, deger = eslesen[0]
    elif r.get("kova") == "cok-yer-kapsamgenis-onerisi" and r["t"] in KAPSAM_GENIS:
        islem, deger = "kapsam_genis", True
    else:
        say["kararsiz"] += 1
        print(f"KARARSIZ  {r['dosya']} {r['t']} {r['b'][:50]}")
        continue
    yol = os.path.join(KOK, r["dosya"].replace("\\", "/"))
    if yol not in metinler:
        metinler[yol] = io.open(yol, encoding="utf-8").read()
    m = metinler[yol]
    onek = json.dumps(r["b"], ensure_ascii=False)[:-1]
    bul = [x.start() for x in re.finditer(re.escape(onek), m)]
    if len(bul) != 1:
        say["atlandi"] += 1
        print(f"ATLANDI   {r['t']} {r['b'][:40]} — b öneki {len(bul)} kez (1 olmalı)")
        continue
    i = bul[0]
    if r["t"] not in m[max(0, i - 600):i]:
        say["atlandi"] += 1
        print(f"ATLANDI   {r['t']} {r['b'][:40]} — önceki 600 kr'de t yok")
        continue
    j = i + 1  # b değerinin kapanış tırnağı
    while True:
        if m[j] == "\\":
            j += 2; continue
        if m[j] == '"':
            break
        j += 1
    son = j + 1
    nxt = re.search(r'(\n\s*\{|\bt:\s*"|"t":\s*")', m[son:])
    bas = m.rfind(r["t"], 0, i)            # nesnenin t alanı — yer_id b'den ÖNCE de durabilir
    bas = max(bas, m.rfind("{", 0, bas))
    tban = bas
    govde = m[tban: son + (nxt.start() if nxt else 1500)]
    son_ofs = tban                          # govde içi konumların dosya ofseti
    json_stil = bool(re.search(r'"b"\s*:\s*$', m[max(0, i - 8):i]))
    if islem == "yer_id_duzelt":
        eski = re.search(r'(yer_id\s*:\s*|"yer_id"\s*:\s*)"Dârfûr"', govde)
        if not eski:
            say["atlandi"] += 1; print(f"ATLANDI   {r['t']} Darfur — eski yer_id bulunamadı"); continue
        a, b = son_ofs + eski.start(), son_ofs + eski.end()
        yeni = m[a:b].replace('"Dârfûr"', '"Darfur"')
    else:
        if re.search(r'\b(yer_id|yer_kon|kapsam_genis)\b', govde):
            say["atlandi"] += 1
            print(f"ATLANDI   {r['t']} {r['b'][:40]} — nesnede zaten yer_id/yer_kon/kapsam_genis var")
            continue
        val = json.dumps(deger, ensure_ascii=False)
        a = b = son
        yeni = (f', "{islem}": {val}' if json_stil else f", {islem}:{val}")
    metinler[yol] = m[:a] + yeni + m[b:]
    say["uygulandi"] += 1
    print(f"{'UYGULA' if uygula else 'KURU  '}    {os.path.basename(yol):22} {r['t']} {islem}={deger}  «{r['b'][:40]}»")
if uygula:
    for yol, m in metinler.items():
        io.open(yol, "w", encoding="utf-8", newline="").write(m)
print(say, "· YAZILDI" if uygula else "· KURU KOŞU (yazılmadı)")
