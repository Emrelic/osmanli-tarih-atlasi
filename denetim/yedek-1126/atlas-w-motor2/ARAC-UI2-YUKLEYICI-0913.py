# PAKET-UI2 · 13 Eylül 2026 · salt okuma.
# arac/denetle_yayin.py'nin DİNAMİK ad ayrıştırıcısını (aynı regex'ler, birebir kopya
# DEĞİL — satırlar oradan okunup çalıştırılıyor) js/app.js üzerinde koşar ve
# _EKOKUMA_DOSYA_ADLARI listesinden hangi adların okunduğunu, hangilerinin diskte olduğunu basar.
#   py denetim/ARAC-UI2-YUKLEYICI-0913.py
import io, os, re, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
kaynak = io.open(os.path.join(KOK, "arac", "denetle_yayin.py"), encoding="utf-8").read()
# denetle_yayin.py'nin kullandığı iki regex'i dosyanın KENDİSİNDEN al (ayrışmasın)
kurucu_var = r'"data/"\s*\+\s*ad\s*\+\s*"\.js"' in kaynak or 'data/"\\s*\\+\\s*ad' in kaynak
liste_rx = r"\s*=\s*\[(.*?)\];"
ad_rx = r'"([a-z0-9_]+)"'
if liste_rx.replace("\\", "") not in kaynak.replace("\\", "") or ad_rx not in kaynak:
    print("✗ denetle_yayin.py regex'leri bu aletin varsaydığı biçimde değil — alet bayat")
    sys.exit(1)
app = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8", errors="replace").read()
print("yol kurucusu app.js'te:", bool(re.search(r'"data/"\s*\+\s*ad\s*\+\s*"\.js"', app)))
for liste in ("_EKOKUMA_DOSYA_ADLARI", "_KAYNAKLI_HALKA_DOSYA_ADLARI"):
    dz = re.search(liste + liste_rx, app, re.S)
    if not dz:
        print("✗", liste, "bulunamadı")
        continue
    govde = re.sub(r"//[^\n]*", "", dz.group(1))
    adlar = re.findall(ad_rx, govde)
    print("%s: %d ad" % (liste, len(adlar)))
    for a in adlar:
        var = os.path.exists(os.path.join(KOK, "data", a + ".js"))
        print("   %-24s %s" % (a, "diskte" if var else "YOK (yükleyici sessiz atlar, sayar)"))
for yeni in ("ekokuma_hanedan", "ekokuma_statu", "ekokuma_celali"):
    dz = re.search("_EKOKUMA_DOSYA_ADLARI" + liste_rx, app, re.S)
    ok = dz and yeni in re.findall(ad_rx, re.sub(r"//[^\n]*", "", dz.group(1)))
    print("yeni ad %-18s ayrıştırıcı okuyor: %s" % (yeni, "EVET" if ok else "HAYIR"))
