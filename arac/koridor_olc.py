# -*- coding: utf-8 -*-
"""koridor_olc.py — `ALTYAPI ⑤`nin ÖLÇÜM ALETİ.

🔴 `ALTYAPI-DORT-MADDE.md §⑤` şunu yazıyordu: *"⚠️ HİÇBİRİ ÖLÇÜLMEDİ."*
Bu betik o cümleyi ölçüye çevirir — ve elle yazılan sayı bayatlamasın
diye ÜRETEÇtir (`CLAUDE.md §1.5`).

    py arac/koridor_olc.py

────────────────────────────────────────────────────────────────────────
Emre'nin tarifi (12 Ağustos 2026): *"bildiğin örümcek ağı yahut balık ağı
gibi **iplikler ve ipliklerin ortasında boğum noktalardan** oluşuyor"* ve
kapsam *"tüm dünya nezdinde"*.

⇒ Ölçülecek üç şey ayrıdır ve karıştırılırsa yanlış hüküm çıkar:
    ① DÜĞÜM var mı            (boğum noktaları)
    ② DÜĞÜM YERE OTURMUŞ mu   (lat/lon var mı — yoksa çizilemez)
    ③ KAPSAM                  (dünyanın neresi)
📌 ①'in dolu olması ②'yi göstermez: 65 düğüm olabilir ve hiçbiri
haritaya oturmamış olabilir. Bu betik ikisini AYRI sayar.
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSYA = os.path.join(KOK, "data", "koridor.js")

# 🔴 Kendi ayrıştırıcını YAZMA — veri zaten bir dilde yazılıysa o dilin
# yorumlayıcısını çağır (`CLAUDE.md §11`, proje bunu ÜÇ kez öğrendi).
JS = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
      "process.stdout.write(JSON.stringify({d:window.KORIDOR_DUGUM||[],"
      "k:window.KORIDOR_KENAR||[]}));")


def oku():
    if not os.path.exists(DOSYA):
        return None
    try:
        cik = subprocess.run(["node", "-e", JS % json.dumps(DOSYA)],
                             capture_output=True, encoding="utf-8", timeout=60)
    except FileNotFoundError:
        print("🔴 node YOK — ayrıştırılamadı. 'ölçülemedi' ≠ 'boş'.")
        return None
    if cik.returncode != 0:
        print("🔴 koridor.js ayrıştırılamadı: %s" % (cik.stderr or "")[:200])
        return None
    return json.loads(cik.stdout)


def main():
    v = oku()
    print("=" * 70)
    print("KORİDOR AĞI — ALTYAPI ⑤")
    print("=" * 70)
    if v is None:
        print("🔴 data/koridor.js YOK ya da OKUNAMADI.")
        print("   ⚠️ Bu 'ağ yok' demek DEĞİL, 'ölçülemedi' demektir.")
        return 2
    D, K = v["d"], v["k"]
    yerli = [d for d in D if d.get("lat") is not None and d.get("lon") is not None]
    print("① DÜĞÜM        : %d" % len(D))
    print("② YERE OTURMUŞ : %d  (%%%.1f)  ← lat/lon DOLU olan"
          % (len(yerli), 100.0 * len(yerli) / len(D) if D else 0))
    if len(yerli) < len(D):
        print("   🔴 %d düğümün koordinatı YOK — haritada ÇİZİLEMEZ."
              % (len(D) - len(yerli)))
        tip = {}
        for d in D:
            if d.get("lat") is None:
                tip[d.get("tip") or "?"] = tip.get(d.get("tip") or "?", 0) + 1
        print("      sebep dağılımı: %s"
              % ", ".join("%s:%d" % x for x in sorted(tip.items(), key=lambda x: -x[1])))
    print("③ KENAR (iplik): %d" % len(K))
    olculen = [k for k in K if k.get("km")]
    print("   uzunluğu ÖLÇÜLMÜŞ kenar: %d  · süresi ölçülmüş: %d"
          % (len(olculen), len([k for k in K if k.get("saat")])))

    # kapsam — kanat/kol ve coğrafî yayılım
    kanat = {}
    for k in K:
        kanat[k.get("kanat") or "?"] = kanat.get(k.get("kanat") or "?", 0) + 1
    print("\n④ KAPSAM")
    print("   kanat: %s" % ", ".join("%s:%d" % x for x in sorted(kanat.items())))
    if yerli:
        la = [d["lat"] for d in yerli]
        lo = [d["lon"] for d in yerli]
        print("   coğrafî kutu: %.1f–%.1f°K · %.1f–%.1f°D"
              % (min(la), max(la), min(lo), max(lo)))
    print("   🔴 Emre'nin istediği kapsam: TÜM DÜNYA. Bugünkü ağ tek bir")
    print("      kaynağın (Sak-Çetin, Anadolu menzilleri) kapsadığı alandır.")

    # kaynak disiplini — `§4` kırmızı çizgisi
    kk = {}
    for d in D:
        kk[d.get("kaynak") or "YAZILMAMIŞ"] = kk.get(d.get("kaynak") or "YAZILMAMIŞ", 0) + 1
    print("\n⑤ KAYNAK (`§4` kırmızı çizgi — kaynağı yazılmayan bilgi,")
    print("   kaynağı olmayan bilgiden ayırt EDİLEMEZ)")
    for a, n in sorted(kk.items(), key=lambda x: -x[1]):
        im = "🔴" if a == "YAZILMAMIŞ" else "🟢"
        print("   %s %-52s %d" % (im, a[:52], n))

    print("\n" + "=" * 70)
    print("HÜKÜM")
    print("=" * 70)
    print("🟢 Şema KURULMUŞ ve kaynaklı: düğüm/kenar/kanat/kol/dönem var.")
    print("🔴 ÜÇ EKSİK, üçü de ARAŞTIRMA — bir gecede kapanmaz:")
    print("   · %d düğüm yere oturmamış (yerleşim eşleşmesi yok)"
          % (len(D) - len(yerli)))
    print("   · %d/%d kenarın uzunluğu ölçülmemiş" % (len(K) - len(olculen), len(K)))
    print("   · kapsam Anadolu; dünya güzergâh verisi (Viabundus vb.) YOK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
