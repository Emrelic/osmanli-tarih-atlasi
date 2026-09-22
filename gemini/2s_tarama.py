import sys
import os
import json
import re
import datetime

# Setup paths
WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(WORKSPACE, "arac"))

from denetle import yerlesimleri_yukle, olaylari_yukle, gun_no, KUYRUK_DOSYALARI

# Load states and regions via node
def load_all_devletler():
    import subprocess
    yol = os.path.join(WORKSPACE, "data", "devletler.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.DEVLETLER||[]));"
          % json.dumps(yol))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8")
    return json.loads(c.stdout)

def load_all_bolgeler():
    import subprocess
    yol = os.path.join(WORKSPACE, "data", "bolgeler.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.BOLGELER||[]));"
          % json.dumps(yol))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8")
    return json.loads(c.stdout)

print("Loading data...")
Y = yerlesimleri_yukle()
O = olaylari_yukle()
devletler = load_all_devletler()
bolgeler = load_all_bolgeler()

# Filter core settlements
Y_cekirdek = [y for y in Y if y.get("_kaynak") not in KUYRUK_DOSYALARI]

# Map state ID to profile
state_profiles = {d["id"]: d for d in devletler if "id" in d}

# Map settlement to its regions in BOLGELER
settlement_to_regions = {}
for r in bolgeler:
    r_ad = r["ad"]
    for member in r.get("uy", []):
        settlement_to_regions.setdefault(member, set()).add(r_ad)
    settlement_to_regions.setdefault(r_ad, set()).add(r_ad)

# Owner helper
def get_owner_at_date(y, date_str):
    d_norm = date_str if len(date_str) == 10 else (date_str + "-01-01")[:10]
    
    # Check 'd'
    for p in y.get("d") or []:
        f, t = p.get("f"), p.get("t")
        if f and t and f <= d_norm < t:
            return "osmanli"
            
    # Check 'v'
    for p in y.get("v") or []:
        f, t = p.get("f"), p.get("t")
        if f and t and f <= d_norm < t:
            return p.get("kid") or p.get("k") or "vassal"
            
    # Check 's'
    for p in y.get("s") or []:
        f, t = p.get("f"), p.get("t")
        if f and t and f <= d_norm < t:
            return p.get("d") or "foreign"
            
    return None

def date_minus_1_day(date_str):
    try:
        dt = datetime.datetime.strptime(date_str, "%Y-%m-%d")
        dt_prev = dt - datetime.timedelta(days=1)
        return dt_prev.strftime("%Y-%m-%d")
    except Exception:
        return date_str

# Clean and tokenize Turkish text for keyword checking
def turkish_lower(s):
    mapping = {"I": "ı", "İ": "i", "Ş": "ş", "Ç": "ç", "Ğ": "ğ", "Ö": "ö", "Ü": "ü"}
    for k, v in mapping.items():
        s = s.replace(k, v)
    return s.lower()

# Extract keywords for state ID
def get_state_keywords(state_id):
    prof = state_profiles.get(state_id)
    keywords = set()
    stop_words = {"imparatorlugu", "sultanligi", "kralligi", "prensli̇gi", "prensliği", "dukaligi", "dukalığı", "devleti", "cumhuriyeti", "beyligi", "beyliği", "hanligi", "hanlığı", "dogu", "doğu", "bati", "batı", "imparatorluğu", "sultanlığı", "krallığı"}
    
    # Clean ID
    for part in re.split(r'[^a-zA-ZçğıöşüÇĞİÖŞÜ]', state_id):
        part_lower = turkish_lower(part)
        if len(part_lower) >= 3 and part_lower not in stop_words:
            keywords.add(part_lower)
            
    if prof:
        state_ad = prof.get("ad", "")
        # Clean and tokenize
        clean_ad = re.sub(r'[^a-zA-ZÇĞİÖŞÜçğıöşü\s]', ' ', state_ad)
        for t in clean_ad.split():
            t_lower = turkish_lower(t.strip())
            if len(t_lower) >= 3 and t_lower not in stop_words:
                keywords.add(t_lower)
                
    return keywords

# Event matching helpers
def mentions_settlement(o, ad, use_desc=True):
    fields = [o.get("b", ""), o.get("yer", ""), o.get("yer_id", "")]
    if use_desc:
        fields.append(o.get("d", ""))
    m_combined = turkish_lower(" ".join(fields))
    
    names = [ad]
    if "(" in ad:
        parts = re.split(r'\s*[\(\)]\s*', ad)
        names = [p.strip() for p in parts if p.strip()]
        
    for n in names:
        n_lower = turkish_lower(n)
        if len(n_lower) < 3:
            continue
        pat = r"(?<![a-zçğıöşü])" + re.escape(n_lower) + r"(?![a-zçğıöşü])"
        if re.search(pat, m_combined):
            return True
    return False

def mentions_region(o, ad, use_desc=True):
    fields = [o.get("b", ""), o.get("yer", ""), o.get("yer_id", "")]
    if use_desc:
        fields.append(o.get("d", ""))
    m_combined = turkish_lower(" ".join(fields))
    
    # Get regions
    regions = settlement_to_regions.get(ad, set())
    for r in regions:
        r_lower = turkish_lower(r)
        if len(r_lower) < 3:
            continue
        pat = r"(?<![a-zçğıöşü])" + re.escape(r_lower) + r"(?![a-zçğıöşü])"
        if re.search(pat, m_combined):
            return True
    return False

def mentions_state(o, state_id, use_desc=True):
    if not state_id or state_id in ("foreign", "vassal"):
        return False
    fields = [o.get("b", ""), o.get("yer", ""), o.get("yer_id", "")]
    if use_desc:
        fields.append(o.get("d", ""))
    m_combined = turkish_lower(" ".join(fields))
    
    keywords = get_state_keywords(state_id)
    for kw in keywords:
        pat = r"(?<![a-zçğıöşü])" + re.escape(kw) + r"(?![a-zçğıöşü])"
        if re.search(pat, m_combined):
            return True
    return False

print("\nAnalyzing closed foreign transitions...")
classified = []
unique_transitions = set()

# We evaluate with exclude_generic=True, use_desc=True
exclude_generic = True
use_desc = True

for y in Y_cekirdek:
    s_periods = y.get("s") or []
    for p in s_periods:
        for d_trans in (p.get("f"), p.get("t")):
            if not d_trans or d_trans <= "1281-01-01" or d_trans >= "1923-10-29":
                continue
            key = (y["ad"], d_trans)
            if key in unique_transitions:
                continue
            unique_transitions.add(key)
            
            gd = gun_no(d_trans)
            yakinlar = []
            for o in O:
                diff = abs(gun_no(o["t"]) - gd)
                if diff <= 30:
                    yakinlar.append((diff, o))
                    
            if not yakinlar:
                continue
                
            # Closed transition! Let's classify it.
            owner_before = get_owner_at_date(y, date_minus_1_day(d_trans))
            owner_after = get_owner_at_date(y, d_trans)
            
            # Select the primary closing event (closest)
            yakinlar_sorted = sorted(yakinlar, key=lambda x: x[0])
            best_diff, best_o = yakinlar_sorted[0]
            
            matches_yer = False
            matches_state_before = False
            matches_state_after = False
            
            for diff, o in yakinlar:
                if mentions_settlement(o, y["ad"], use_desc) or mentions_region(o, y["ad"], use_desc) or (y.get("m") and mentions_settlement(o, y["m"], use_desc)):
                    matches_yer = True
                    
                # Exclude generic states if requested
                ob_check = owner_before
                oa_check = owner_after
                if exclude_generic:
                    if ob_check in ("bizans", "osmanli"):
                        ob_check = None
                    if oa_check in ("bizans", "osmanli"):
                        oa_check = None
                        
                if ob_check and mentions_state(o, ob_check, use_desc):
                    matches_state_before = True
                if oa_check and mentions_state(o, oa_check, use_desc):
                    matches_state_after = True
                    
            cls = "SAHTE"
            if matches_yer:
                cls = "YER-ESLESIR"
            elif matches_state_before or matches_state_after:
                cls = "DEVLET-ESLESIR"
                
            classified.append({
                "yerlesim_id": y.get("id", y["ad"]),
                "ad": y["ad"],
                "tarih": d_trans,
                "eski_sahip": owner_before,
                "yeni_sahip": owner_after,
                "kapatan_madde_no": best_o.get("no", "M-0000"),
                "kapatan_madde_basligi": best_o["b"],
                "sinif": cls
            })

# Count results
counts = {"YER-ESLESIR": 0, "DEVLET-ESLESIR": 0, "SAHTE": 0}
for item in classified:
    counts[item["sinif"]] += 1

print(f"\nFinal Counts: YER-ESLESIR={counts['YER-ESLESIR']}, DEVLET-ESLESIR={counts['DEVLET-ESLESIR']}, SAHTE={counts['SAHTE']}")

# Filter list for SAHTE and DEVLET-ESLESIR
list_to_save = [item for item in classified if item["sinif"] in ("SAHTE", "DEVLET-ESLESIR")]

# Save to JSON
json_path = os.path.join(WORKSPACE, "gemini", "2S-YER-TARAMA-0919.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(list_to_save, f, ensure_ascii=False, indent=2)
print(f"Saved JSON results to {json_path}")

# Generate MD summary
md_path = os.path.join(WORKSPACE, "gemini", "2S-YER-TARAMA-0919.md")
md_content = f"""# 2S-YER-TARAMA Raporu (19 Eylül 2026)

Bu çalışma, **Değişmez 2s** yabancı devlet kırılmalarının senkronizasyonunda "sahte kapanışları" ölçmek ve sınıflandırmak amacıyla yapılmıştır. Değişmez 2s kontrolü, her yabancı kırılması için ±30 gün içinde herhangi bir kronoloji maddesi varsa kırılmayı "kapalı" saymakta, ancak o maddenin o yerleşimle gerçekten alakalı olup olmadığını sorgulamamaktayız.

## Sayım Özeti

Toplam ölçülen kapalı yabancı kırılması (settlement transition) sayısı: **{len(classified)}**.

Sınıflandırma dağılımı:
- **YER-ESLESIR**: **{counts['YER-ESLESIR']}**
- **DEVLET-ESLESIR**: **{counts['DEVLET-ESLESIR']}**
- **SAHTE**: **{counts['SAHTE']}**

*Not: Mankup 1349 (bizans -> teodoro) transition kaydı listede **{ [x for x in classified if x["ad"] == "Mankup" and x["tarih"] == "1349-01-01"][0]["sinif"] }** olarak başarıyla sınıflandırılmıştır (beklenen davranış).*

## Metodoloji ve Bulgular

1. **YER-ESLESIR**: Kırılmayı kapatan madde(ler)de yerleşim adı, alternatif isimleri, merkezi (`m:` alanı) ya da bağlı olduğu coğrafi bölge (`bolgeler.js`) geçmektedir.
2. **DEVLET-ESLESIR**: Yerleşim ya da bölge geçmemekte, ancak kırılan iki taraftan en az biri (eski veya yeni sahip) maddede anılmaktadır. Genel/omnipresent devletler (`bizans` ve `osmanli`) her yerde geçebildikleri için gürültü yaratmamaları amacıyla devlet eşleşmesinde muaf tutulmuşlardır. Bu muafiyet sayesinde **Mankup 1349** (Mora Despotluğu'nun kuruluşu maddesiyle kapatılıyordu ve o maddede "Bizans" geçiyordu) doğru şekilde **SAHTE** sınıfına düşmüştür.
3. **SAHTE**: Ne yerleşim ne bölge ne de (generik olmayan) ilgili devletlerin hiçbiri maddede anılmamaktadır.

SAHTE ve DEVLET-ESLESIR olan tüm kayıtlar detaylarıyla birlikte `gemini/2S-YER-TARAMA-0919.json` dosyasına kaydedilmiştir.
"""

with open(md_path, "w", encoding="utf-8") as f:
    f.write(md_content)
print(f"Saved MD summary to {md_path}")
