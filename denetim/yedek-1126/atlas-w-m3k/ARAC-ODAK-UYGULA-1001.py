# -*- coding: utf-8 -*-
"""ODAK-ONERI-1001.json'un GOZLE ONAYLANAN kalemlerini uygular.

🔴 53 ONERININ 33'U UYGULANIR, 20'Si BEKLETILIR. Emre 1 Ekim 2026'da
   "uygula" dedi; uygulamak ONCE OKUMAK demektir (aracin kendi doktrini:
   "uygulayan 53 kalemi tek tek okur, kisayolu yoktur").

🔴 BEKLETILENLERIN ORTAK KUSURU — ONERICININ GOREMEDIGI SINIF:
   Onerilen ad, olayin GECTIGI YER degil, maddede ANILAN BIR TARAF ya da
   BASKA bir yerdir. Arac basliktaki ILK/TEK yer adini alir; cumlenin
   hangi yeri OLAY YERI yaptigini bilemez.
       "Hittin Savasi"                 → Kudus   (olay HITTIN'de)
       "Nureddin DIMASK'i aldi"        → Halep   (olay DIMASK'ta)
       "Epir'in buyuk kismi Iznik'e"   → Iznik   (olay EPIR'de)
       "Zap Suyu Savasi … Musul ordusu"→ Musul   (Musul bir TARAF)
       "Yaroslav Muharebesi … Cernigov"→ Cernigov(Cernigov bir TARAF)
   ⇒ `D249`un kardesi: orada ad KISI'ydi, burada ad OLAY YERI DEGIL.
     Ikisi de dizgiden ayirt edilemez, ikisi de ancak GOZLE gorulur.

UYGULAMA BICIMI — BLOK temelli, dizgi-bilen:
   `yer_id` alani `b:` degerinden HEMEN SONRA eklenir (oteki kayitlarla ayni
   sira). Alan adlari TIRNAKSIZ (olculdu: `b:` 175 · `yer_id:` 87).

   🔴 SATIR TEMELLI OLMAZ — olculdu (1 Ekim 2026, ilk kuru kosu): iki dosya
   AYNI projede IKI FARKLI bicim kullaniyor.
       ince_gd_asya.js        `{ t:"…", b:"…" },`      TEK satir  → 5/6 tuttu
       once1281_anadolu.js    `{ t:"…",`                COK satir  → 0/21 tuttu
                              `  b:"…",`
   Satir varsayimi sessizce 0 eslesme verdi ve "uygulandi" demedi — iyi; ama
   bir arac "0 kalem uyguladim" deyip CIKIS 0 verseydi, hic fark edilmezdi.
   ⇒ `D240` ailesi: okuyucunun modeli, verinin BICIMI degisince yanlisa gecer.
     Care: metnin TAMAMINDA `t:"…"` bul, ondan SONRAKI ilk `b:"…"`ya git.

KULLANIM:  py denetim/ARAC-ODAK-UYGULA-1001.py [--yaz]
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KURU = "--yaz" not in sys.argv

# 1-tabanli sira numaralari (ARAC-ODAK-ONER ciktisindaki listeyle ayni sira)
ONAYLI = {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23,
          24, 31, 34, 39, 40, 41, 43, 44, 47, 48, 49, 50, 51, 53}
BEKLET = {
    10: "olay Tel İfrîn'de, Antakya değil",
    11: "Kanlı Meydan (Ager Sanguinis) Sarmada yakını — Antakya bir TARAF",
    17: "olay Trabzon'un BATI topraklarında, Trabzon'da değil",
    21: "olay EPİR'de; İznik devralan TARAF",
    25: "Tutuş REY yakınında öldü; Halep mirasın konusu",
    26: "olay REMLE yöresinde; Kudüs bir TARAF",
    27: "olay ŞEYZER önünde; Antakya bir TARAF",
    28: "olay yeri belirsiz; Kudüs bir TARAF",
    29: "Ager Sanguinis — Antakya bir TARAF",
    30: "esir düşme yeri belirsiz; Urfa kontluğun adı",
    32: "🔴 olay DIMAŞK'ta (Nûreddin Dımaşk'ı aldı); Halep yanlış",
    33: "olay HÂRİM'de; Musul bir TARAF",
    35: "Zebîd ve San‘a birlikte; tek odak seçilemez",
    36: "🔴 HITTÎN Savaşı; Kudüs krallığın adı",
    37: "Sûr-Yafa KIYISI — iki uç, tek odak seçilemez",
    38: "🔴 ZAP SUYU Savaşı; Musul bir TARAF",
    42: "olay DIMAŞK'ta; Halep el-Nâsır'ın çıkış yeri",
    45: "Resûlîler ZAFÂR'ı aldı; Hadramut ertesi yıl",
    46: "Çandela ülkesi tâbi oldu; Ecmîr tâbi OLUNAN taraf",
    52: "🔴 YAROSLAV Muharebesi (Jarosław); Çernigov bir TARAF",
}

D = json.loads(io.open("denetim/ODAK-ONERI-1001.json", encoding="utf-8").read())
ONERI = D["oneri"]
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  öneri %d · ONAYLI %d · BEKLETİLEN %d"
      % (len(ONERI), len(ONAYLI), len(BEKLET)))
if len(ONAYLI) + len(BEKLET) != len(ONERI):
    print("🔴 ONAYLI+BEKLET (%d) != öneri (%d) — DURDU"
          % (len(ONAYLI) + len(BEKLET), len(ONERI)))
    sys.exit(1)

# dosya -> [(t, b, yer_id)]
isler = {}
for i, o in enumerate(ONERI, 1):
    if i not in ONAYLI:
        continue
    isler.setdefault(o["dosya"], []).append(o)

toplam = 0
for dosya, L in sorted(isler.items()):
    yol = os.path.join("data", dosya)
    s = io.open(yol, encoding="utf-8", newline="").read()
    n = 0
    for o in L:
        bp = o["b"][:28]
        # 🔴 UC BICIM BIRDEN (D240): `t:"…"` · `"t":"…"` · `"t": "…"`
        T = re.compile(r'"?t"?\s*:\s*"%s"' % re.escape(o["t"]))
        B = re.compile(r'"?b"?\s*:\s*"((?:[^"\\]|\\.)*)"')
        hedef = []
        for mt in T.finditer(s):
            mb = B.search(s, mt.end(), mt.end() + 2500)
            if mb and mb.group(1).startswith(bp):
                hedef.append(mb)
        if len(hedef) != 1:
            print("  🔴 %s %s — %d kayıt eşleşti (1 bekleniyordu), ATLANDI"
                  % (dosya, o["t"], len(hedef)))
            continue
        mb = hedef[0]
        kapanis = s.find("}", mb.end())
        govde = s[mb.end():kapanis]
        # 🔴 `yer_id` ZATEN OLABILIR ve BOS olabilir — o zaman EKLENMEZ, DOLDURULUR.
        #   Olculdu: `ince_bati_afrika.js` butun kayitlarda `"yer_id": ""` tasiyor.
        #   Korukorune eklemek AYNI ALANI IKI KEZ yazardi; JS'te ikincisi kazanir,
        #   yani "calisir gorunur" ama dosya bozuk olur ve `node --check` susar.
        mbos = re.search(r'("?yer_id"?\s*:\s*)""', govde)
        if mbos:
            k0 = mb.end() + mbos.start(1)
            k1 = mb.end() + mbos.end()
            s = s[:k0] + mbos.group(1) + '"%s"' % o["yer_id"] + s[k1:]
        elif re.search(r'"?yer_id"?\s*:', govde):
            print("  ⚪ %s %s — zaten DOLU yer_id var, atlandı" % (dosya, o["t"]))
            continue
        else:
            s = s[:mb.end()] + ', yer_id:"%s"' % o["yer_id"] + s[mb.end():]
        n += 1
    if n and not KURU:
        io.open(yol, "w", encoding="utf-8", newline="").write(s)
        r = subprocess.run(["node", "--check", yol], capture_output=True, text=True)
        if r.returncode != 0:
            print("  🔴 node --check BAŞARISIZ: %s" % yol)
            print(r.stderr[:400])
            sys.exit(1)
    print("  %-40s %d kalem%s" % (dosya, n, "" if KURU else " · node --check ✓"))
    toplam += n

print("\nTOPLAM uygulanan: %d" % toplam)
print("\n  BEKLETİLEN %d kalem — gerekçeleriyle:" % len(BEKLET))
for i in sorted(BEKLET):
    o = ONERI[i - 1]
    print("   %2d %-26s %s  %-44s → %s" % (i, o["dosya"].replace("kronoloji_cok_", "")[:26],
                                           o["t"], o["b"][:44], o["yer_id"]))
    print("      ⮡ %s" % BEKLET[i])
print("\n=> uygulamak için --yaz" if KURU else "\n✓ YAZILDI")
