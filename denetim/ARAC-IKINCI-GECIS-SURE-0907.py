# -*- coding: utf-8 -*-
"""İKİNCİ GEÇİŞ SÜRESİ — motoru İÇE AKTARMADAN ölçer.

🔴 NİÇİN YENİ ALET: `ARAC-IKINCI-GECIS-SURE-0906.py` motoru `import
uret_petek` ile alıyordu ve `uret_petek.py:39` bunu REDDEDİYOR — o modül
import edildiği anda 80 dakikalık üretimi başlatır. Koruma DOĞRU, alet
yanlış varsayımla yazılmış.

⇒ Bu alet motoru hiç çağırmıyor. İkinci geçişin maliyetini onu belirleyen
şeyden ölçüyor: **kaç GÖVDE ÇİFTİ sınanacak.** İkinci geçiş "iki devlet
arasındaki boşluğu paylaştır" işidir; maliyet çift sayısına ve parça
karmaşıklığına bağlı, motorun kendisine değil.

⚠️ VE SONUÇ BİR ALT SINIRDIR — bugünkü `A` çıktısı ZATEN düzeltilmiş
(koşu 7b'nin ürünü), yani ikinci geçişin bulacağı boşlukların çoğu
KAPANMIŞ durumda. Ölçüm "bugün ne kadar iş kalır"ı verir, "ham çıktıda
ne kadardı"yı DEĞİL.
"""
import io
import json
import os
import re
import subprocess
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HARITA = os.path.join(KOK, "data", "devletler_harita.js")

# ─── ① KORUMANIN YAŞI — bu bir gerileme mi, tasarım mı? ───────────────
r = subprocess.run(["git", "log", "-1", "--format=%h %ad %s", "--date=short",
                    "-S", "İÇE AKTARILAMAZ", "--", "arac/uret_petek.py"],
                   cwd=KOK, capture_output=True, text=True, encoding="utf-8")
print("KORUMANIN DOĞDUĞU COMMIT:", (r.stdout or "ölçülemedi").strip()[:120])

r2 = subprocess.run(["git", "log", "-1", "--format=%h %ad", "--date=short",
                    "--", "denetim/ARAC-IKINCI-GECIS-SURE-0906.py"],
                    cwd=KOK, capture_output=True, text=True, encoding="utf-8")
print("ALETİN DOĞDUĞU COMMIT   :", (r2.stdout or "ölçülemedi").strip()[:120])
print()

# ─── ② A ÇIKTISINI OKU — node ile, regex YOK ──────────────────────────
JS = r"""
const fs=require("fs"),vm=require("vm");
const ctx={window:{},console:{log(){}}}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2],"utf8"),ctx);
const DH = ctx.window.DEVLET_HARITA || {};
const cikti=[];
// 🔴 `DEVLET_HARITA` bir DİZİ — `Object.entries` anahtar olarak İNDEKS
//    ('0','1','10') veriyor, kimliği DEĞİL. İlk yazımda anahtarı kimlik
//    sandım ve künye penceresi eşleşmesi 0 çıktı — SESSİZ SIFIR. Gerçek
//    kimlik kaydın `id` alanında. §11: `harita:` dolaylamasının kardeşi,
//    ve bu sefer dolaylama değil KABIN CİNSİ yanlış varsayıldı.
for (const [_ix,v] of Object.entries(DH)) {
  const kim = (v && v.id) || _ix;
  const dnm = (v && v.dnm) || [];
  // 🔴 `dnm[].g` bir HALKA dizisi DEĞİL — `petek_govde.js`teki parçalara
  //    işaret eden bir SAYI (indeks) dizisi. İlk yazımda halka sandım ve
  //    alet `(g||[]) is not iterable` ile ÇÖKTÜ. §11: alan yapısı
  //    varsayılmaz, DÖKÜLÜR — döktüm, düzelttim.
  let parca=0;
  for (const d of dnm) parca += ((d.g||[]).length);
  cikti.push({kimlik:kim, donem:dnm.length, parca, nokta:0});
}
process.stdout.write(JSON.stringify(cikti));
"""
gec = os.path.join(os.environ.get("TEMP", "."), "_ab_oku_0907.js")
io.open(gec, "w", encoding="utf-8").write(JS)

t0 = time.time()
h = subprocess.run(["node", "--max-old-space-size=4096", gec, HARITA],
                   capture_output=True, text=True, encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node ÇÖKTÜ: " + (h.stderr or "")[:400])
G = json.loads(h.stdout)
okuma = time.time() - t0
print("A çıktısı okundu: %d kimlik · %.1f sn" % (len(G), okuma))

toplam_parca = sum(g["parca"] for g in G)
toplam_nokta = sum(g["nokta"] for g in G)
dolu = [g for g in G if g["parca"] > 0]
print("   dolu kimlik %d · parça %d · köşe noktası %d"
      % (len(dolu), toplam_parca, toplam_nokta))

# ─── ③ MALİYET SÜRÜCÜSÜ: KAÇ GÖVDE ÇİFTİ ─────────────────────────────
n = len(dolu)
tum_cift = n * (n - 1) // 2
print()
print("=" * 66)
print("İKİNCİ GEÇİŞİN MALİYET SÜRÜCÜSÜ")
print("=" * 66)
print("naif  : bütün kimlik çiftleri            %8d" % tum_cift)

# Gerçek maliyet EŞ ZAMANLI çiftlerde: iki gövde aynı anda sahnede değilse
# aralarında paylaştırılacak boşluk YOKTUR.
try:
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi  # noqa: E402
    dev = girdi.oku_devletler()
    pen = {}
    for d in dev:
        i = d.get("id")
        if i:
            pen[i] = (d.get("f") or "0000-01-01", d.get("t") or "9999-12-31")
    pad = lambda s: s if len(s) >= 10 and s[4] == "-" else s  # noqa: E731
    es = 0
    ad = [g["kimlik"] for g in dolu]
    for i in range(n):
        a = pen.get(ad[i])
        if not a:
            continue
        for j in range(i + 1, n):
            b = pen.get(ad[j])
            if not b:
                continue
            if a[0] < b[1] and b[0] < a[1]:
                es += 1
    print("EŞ ZAMANLI çift (künye penceresinden)   %8d   (%.1f%%)"
          % (es, 100.0 * es / tum_cift if tum_cift else 0))
    print("   ⇒ eş zamanlı olmayan çiftte paylaştırılacak boşluk YOKTUR")
except Exception as e:  # noqa: BLE001
    print("EŞ ZAMANLI çift: ÖLÇÜLEMEDİ — %s" % str(e)[:90])

print()
print("⚠️ SINIR — ve bu bir mazeret değil bir KAPSAM beyanı:")
print("   ① Bu ALT SINIRDIR: bugünkü A çıktısı koşu 7b'nin ürünü, yani")
print("      ZATEN düzeltilmiş. İkinci geçişin ham çıktıda bulacağı iş")
print("      daha büyüktü ve o ÖLÇÜLEMEZ (ham çıktı saklanmıyor).")
print("   ② Çift başına GERÇEK kesişim maliyeti ölçülmedi — o motoru")
print("      çağırmayı gerektirir ve `uret_petek.py:39` importu REDDEDİYOR.")
print("   ③ Ölçülen şey SÜRE değil İŞİN BÜYÜKLÜĞÜ. Süreye çevirmek için")
print("      çift başına kesişim maliyeti gerekir — YOK.")
