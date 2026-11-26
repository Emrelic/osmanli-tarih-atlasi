# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉔ — SAVAŞ ARALIK SENKRONU: denetim ADAYI (RAPOR SATIRI).

🔴 KAPIYA BAĞLANMIYOR — koordinatörün şartı: `denetle.py`nin ÇIKIŞ KODUNU
   etkilemez. Sebebi ölçülü: koşu 8 bitince `denetle.py` YAYIN KAPISININ
   önünde koşacak; yeni bir denetimi tam orada kapıya bağlamak, onu
   yayın üstünde sınamak olur. Bir temiz koşudan sonra bağlanır.

╔═ ÖLÇÜT — iki katmanda kanıtlandı ═══════════════════════════════════╗
  Ⓐ (bugünkü `savas_senkronu`) açık bulduğu kayıt için:
     [aralık başı − 30, aralık sonu + 30] içinde madde VAR MI
     + AD BENZERLİĞİ (durak kökler ÖLÇÜLEREK elenir)
  aralık:  SEFERLER    [f, t]
           SAVASLAR    [t, bitis]        🔴 `t` burada BAŞLANGIÇ
           ANTLASMALAR [savas_basi, t]
           SERILER     KAPSAM DIŞI (aralık SERBEST METİN)
  kova:    KANITLI · ÖLÇÜLEMEDİ (ad eşleşmiyor) · KESİN MADDESİZ · MAZUR
╚═════════════════════════════════════════════════════════════════════╝

🔴 VERİ NODE İLE OKUNUYOR, `oku_pencere` İLE DEĞİL:
   `oku_pencere` bugün uyarı basıyor — `ANTLASMALAR` `.push()` ile de
   besleniyor ve metin ayrıştırıcı **çalışma zamanı mutasyonunu göremez**
   (31 ↔ 41). Denetim onu kullansaydı 10 kaydı sessizce atlardı.

╔═ ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE, MAZERETİYLE ═══════════════════════════════╗
  SAVASLAR     8 açık → KANITLI 4 · MAZUR 4 (`bitis` yok)
  SEFERLER    18 açık → KANITLI 16 · ÖLÇÜLEMEDİ 2
  ANTLASMALAR  0 açık (31 üzerinden) → 🟡 node 41 okuyor; görünmeyen
               10 kayıtta **0-3 yeni açık** bekliyorum — BİLİNMİYOR
  TOPLAM beklenen: KANITLI 20 · ÖLÇÜLEMEDİ 2 · MAZUR 4 · MADDESİZ 0
  🔴 MAZERET: yalnız `ANTLASMALAR`ın görünmeyen 10'u için. SAVASLAR ve
     SEFERLER sayıları ZATEN ÖLÇÜLDÜ — orada sapma olursa MAZERET YOK.
╚═════════════════════════════════════════════════════════════════════╝
"""
import io
import json
import os
import re
import subprocess
import sys
import unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

P = denetle.SAVAS_PENCERE
DURAK_ESIK = 0.02
ARALIK = {"SEFERLER": ("f", "t"), "SAVASLAR": ("t", "bitis"),
          "ANTLASMALAR": ("savas_basi", "t")}
KAPSAM_DISI = ("SERILER",)

_TR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
       ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u",
       ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c",
       ord("Â"): "a", ord("â"): "a",
       # 🔴 KESME İŞARETİ SİLİNMEZ, BOŞLUĞA ÇEVRİLİR — öngörüm bu yüzden çürüdü.
       # Türkçede kesme bir EK AYIRICIDIR, kelimenin parçası değil:
       #   silersen  "Timur'un" → "timurun" → kök "timuru" ≠ "timur"  ✗
       #   boşlukta  "Timur'un" → "timur un" → kök "timur"  ✓
       # `SEFERLER`de 15/3 çıkan sayı bu yüzdendi; beklenen 16/2.
       ord("’"): " ", ord("'"): " ", ord("‘"): " "}


def kokler(s):
    s = (s or "").translate(_TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return {w[:6] for w in re.findall(r"[a-z0-9]+", s) if len(w) >= 4}


def kumeleri_oku(yol):
    """🔴 NODE ile — `oku_pencere` mutasyonu göremiyor (31↔41)."""
    js = ("global.window={};const fs=require('fs');"
          "eval(fs.readFileSync(%s,'utf8'));"
          "const o={};for(const k of Object.keys(global.window))"
          "if(Array.isArray(global.window[k]))o[k]=global.window[k];"
          "process.stdout.write(JSON.stringify(o));"
          % json.dumps(yol.replace("\\", "/")))
    p = subprocess.run(["node", "-e", js], cwd=KOK, capture_output=True)
    if p.returncode != 0:
        return None
    return json.loads(p.stdout.decode("utf-8"))


def savas_aralik_senkronu(kumeler, O):
    """(satirlar, ozet) — RAPOR, ihlal DEĞİL. Ⓐ'nın açıklarını kovalar."""
    ol = []
    for o in O:
        try:
            ol.append((denetle.gun_no(denetle.tam(o["t"])), o.get("b", "")))
        except Exception:
            pass
    say = {}
    for o in O:
        for k in kokler(o.get("b", "")):
            say[k] = say.get(k, 0) + 1
    durak = {k for k, n in say.items() if n / max(len(O), 1) > DURAK_ESIK}

    def g(x):
        try:
            return denetle.gun_no(denetle.tam(x))
        except Exception:
            return None

    satirlar = []
    ozet = {"KANITLI": 0, "ÖLÇÜLEMEDİ": 0, "KESİN MADDESİZ": 0, "MAZUR": 0}
    for kume, kayitlar in sorted(kumeler.items()):
        if kume in KAPSAM_DISI or kume not in ARALIK:
            continue
        a_ad, b_ad = ARALIK[kume]
        # Ⓐ — bugünkü ölçüt: `t` ±P içinde madde var mı
        for r in kayitlar:
            if not isinstance(r, dict) or not r.get("t"):
                continue
            gt = g(r["t"])
            if gt is None:
                continue
            if any(abs(og - gt) <= P for og, _ in ol):
                continue                      # Ⓐ'da zaten kapalı
            ga, gb = g(r.get(a_ad)), g(r.get(b_ad))
            if ga is None or gb is None:
                ozet["MAZUR"] += 1
                satirlar.append((kume, r.get("ad"), r["t"], "MAZUR",
                                 "`%s`/`%s` yok" % (a_ad, b_ad), []))
                continue
            alt, ust = min(ga, gb) - P, max(ga, gb) + P
            icinde = [(og, b) for og, b in ol if alt <= og <= ust]
            ak = kokler(r.get("ad")) - durak
            esles = [(b, sorted(ak & (kokler(b) - durak))) for _, b in icinde]
            esles = [e for e in esles if e[1]]
            if esles:
                ozet["KANITLI"] += 1
                satirlar.append((kume, r.get("ad"), r["t"], "KANITLI",
                                 esles[0][0][:56], esles[0][1]))
            elif icinde:
                ozet["ÖLÇÜLEMEDİ"] += 1
                satirlar.append((kume, r.get("ad"), r["t"], "ÖLÇÜLEMEDİ",
                                 icinde[0][1][:56], []))
            else:
                ozet["KESİN MADDESİZ"] += 1
                satirlar.append((kume, r.get("ad"), r["t"], "KESİN MADDESİZ",
                                 "", []))
    return satirlar, ozet


def rapor_bas(satirlar, ozet):
    """`denetle.py` üslûbunda RAPOR SATIRI — çıkış koduna etki YOK."""
    n = sum(ozet.values())
    print("Ek denetim  i  savaş ARALIK senkronu: %d açık kayıt kovalandı "
          "(RAPOR, ihlal DEĞİL)" % n)
    print("               KANITLI %d · ÖLÇÜLEMEDİ %d · MADDESİZ %d · MAZUR %d"
          % (ozet["KANITLI"], ozet["ÖLÇÜLEMEDİ"], ozet["KESİN MADDESİZ"],
             ozet["MAZUR"]))
    print("               Ⓐ `t`±%d açık bulduğu kaydı ARALIK+AD ile yeniden"
          % P)
    print("               ölçer. `KANITLI` = ölçüt uyumsuzluğu, veri kusuru")
    print("               DEĞİL. `MAZUR` = kaydın aralık alanı yok.")
    for kume, ad, t, kova, madde, ortak in satirlar:
        if kova in ("KESİN MADDESİZ", "ÖLÇÜLEMEDİ"):
            print("    %-11s %s  %-28s %s" % (kume, t, str(ad)[:28], kova))


# ═══════════════════ C13 — DÖRT AYAK ═══════════════════
print("=" * 78)
print("SAVAŞ ARALIK SENKRONU — denetim adayı · C13 dört ayak")
print("=" * 78)
hata = 0
O = denetle.olaylari_yukle()

# ③ GİRDİ — GERÇEK dosyadan, node ile (bugün `oku_pencere` vakası buradan çıktı)
print("\n③ GİRDİ AYAĞI — gerçek dosya, NODE ile okundu")
K = kumeleri_oku(os.path.join(KOK, "data", "savaslar.js"))
if K is None:
    print("   ⚠️ node YOK — ÖLÇÜLEMEDİ (temiz DEĞİL)")
    sys.exit(2)
for k in sorted(K):
    print("   %-13s %d kayıt" % (k, len(K[k])))
print("   📌 `oku_pencere` ANTLASMALAR'ı 31 okuyor (mutasyon körlüğü);")
print("      node 41 ⇒ denetim node kullanıyor, 10 kayıt ATLANMIYOR.")

# ① GEÇME — gerçek veri
print("\n① GEÇME AYAĞI — gerçek veri")
satirlar, ozet = savas_aralik_senkronu(K, O)
rapor_bas(satirlar, ozet)

# ② ATEŞLEME — enjekte kusur
print("\n② ATEŞLEME AYAĞI")
sahte = dict(K)
sahte["SAVASLAR"] = list(K["SAVASLAR"]) + [
    {"ad": "ZZZ-MADDESIZ-SINAV-QQQ", "t": "1600-01-01", "bitis": "1600-03-01"}]
s2, o2 = savas_aralik_senkronu(sahte, O)
yeni = [r for r in s2 if r[1] == "ZZZ-MADDESIZ-SINAV-QQQ"]
if yeni and yeni[0][3] in ("KESİN MADDESİZ", "ÖLÇÜLEMEDİ"):
    print("   ✓ enjekte MADDESİZ kayıt YAKALANDI → %s" % yeni[0][3])
else:
    print("   🔴 enjekte kayıt kaçtı: %s" % (yeni or "hiç görünmedi"))
    hata += 1
sahte2 = dict(K)
sahte2["SAVASLAR"] = list(K["SAVASLAR"]) + [
    {"ad": "ZZZ-ARALIKSIZ-QQQ", "t": "1600-01-01"}]
s3, o3 = savas_aralik_senkronu(sahte2, O)
y3 = [r for r in s3 if r[1] == "ZZZ-ARALIKSIZ-QQQ"]
if y3 and y3[0][3] == "MAZUR":
    print("   ✓ aralıksız kayıt MAZUR kovasına düştü (ihlal SAYILMADI)")
else:
    print("   🔴 aralıksız kayıt yanlış kovada: %s" % (y3 or "yok"))
    hata += 1

# ④ ÇIKTI — dönüş DÖKÜLEREK
print("\n④ ÇIKTI AYAĞI — dönüş dökülüyor")
print("   tip: (%s, %s) · satır %d · özet anahtarları %s"
      % (type(satirlar).__name__, type(ozet).__name__, len(satirlar),
         sorted(ozet)))
print("   özet toplamı %d == satır sayısı %d : %s"
      % (sum(ozet.values()), len(satirlar),
         "✓" if sum(ozet.values()) == len(satirlar) else "🔴"))
if sum(ozet.values()) != len(satirlar):
    hata += 1

# ── ÖNGÖRÜ SINAVI ────────────────────────────────────────────────────
print("\n" + "=" * 78)
print("ÖNGÖRÜ SINAVI")
print("=" * 78)
bek = {"KANITLI": 20, "ÖLÇÜLEMEDİ": 2, "MAZUR": 4, "KESİN MADDESİZ": 0}
for k in ("KANITLI", "ÖLÇÜLEMEDİ", "MAZUR", "KESİN MADDESİZ"):
    isaret = "✓" if ozet[k] == bek[k] else "🔴 %+d" % (ozet[k] - bek[k])
    print("  %-16s beklenen %2d · ölçülen %2d   %s" % (k, bek[k], ozet[k], isaret))
kume_dag = {}
for s in satirlar:
    kume_dag.setdefault(s[0], []).append(s[3])
print("\n  KÜME DAĞILIMI (mazeret yalnız ANTLASMALAR için geçerliydi):")
for k, v in sorted(kume_dag.items()):
    d = {x: v.count(x) for x in set(v)}
    print("    %-13s %s" % (k, d))

json.dump({"_NOT": ("Savaş ARALIK senkronu — denetim ADAYI, RAPOR SATIRI. "
                    "Çıkış koduna etki YOK. Veri NODE ile okundu "
                    "(oku_pencere mutasyon körü). Öngörü ölçümden ÖNCE."),
           "pencere": P, "ozet": ozet, "beklenen": bek,
           "kume_dagilimi": {k: {x: v.count(x) for x in set(v)}
                             for k, v in kume_dag.items()},
           "satirlar": [{"kume": s[0], "ad": s[1], "t": s[2], "kova": s[3],
                         "madde": s[4], "ortak": s[5]} for s in satirlar]},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-DENETIM-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n%s" % ("✓ C13 dört ayak geçti" if not hata else "🔴 %d ayak DÜŞTÜ" % hata))
print("[YAZILDI] denetim/OLCUM-DEGISMEZ3-DENETIM-0907.json")
sys.exit(1 if hata else 0)
