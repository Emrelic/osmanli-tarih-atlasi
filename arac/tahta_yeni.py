# -*- coding: utf-8 -*-
"""tahta_yeni.py — KOORDİNATÖRÜN SU SEVİYESİNDEN SONRAKİ mesajları basar.

🔴 NİÇİN VAR (4 Ekim 2026, iki kez yaşandı): koordinatör bir işçinin teslimini
   İKİ KEZ "gelmedi" sandı ve ikisinde de teslim yerindeydi. Kök sebep üç
   katmanlıydı ve üçü de ayrı bir aracın yanlış kullanımı değil, ARACIN
   OLMAMASIYDI:
     ① tahta `tail -2` ile okunuyordu — 5700+ mesajın son ikisi, bana adresli
        bir teslimi göstermez
     ② `bekleyen` bu vakayı YAPISAL OLARAK gösteremez: teslimler
        `cevap: GEREKMEZ` taşır, `bekleyen` ise `cevap == BEKLIYOR` süzer
     ③ `oku --yeni` 500+ okunmamışı EN ESKİDEN listeler VE **salt okunur
        değildir** — çağırmak mesajları "okundu" işaretler ve ölçümü BOZAR
   ⇒ Bu araç: su seviyesinden SONRASINI basar, HİÇBİR ŞEY YAZMAZ.

🔴 SALT OKUNUR — ve bu bir TASARIM TAAHHÜDÜDÜR, yan not değil. `oku`nun
   durum değiştirdiğini ölçerek öğrendik (bir çağrı 513 mesajı "okundu"
   işaretledi). Bu araç tahtaya, damgalara, su seviyesine DOKUNMAZ.
   Su seviyesini YALNIZ koordinatör, mesajı İŞLEDİKTEN SONRA yükseltir.

KULLANIM
  py arac/tahta_yeni.py                 su seviyesinden sonrası (özet)
  py arac/tahta_yeni.py --tam           mesaj gövdeleriyle
  py arac/tahta_yeni.py --kim "<AD>"    başka bir adın kutusu
ÇIKIŞ  0 yeni yok · 1 yeni VAR (otomasyon bunu okur) · 2 kullanım/arıza
"""
import io
import json
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
SEVIYE = os.path.join(KOK, "oturumlar", "KOORDINATOR-SU-SEVIYESI.json")


def main(argv):
    tam = "--tam" in argv
    kim = None
    if "--kim" in argv:
        i = argv.index("--kim")
        if i + 1 >= len(argv):
            sys.stderr.write("--kim bir AD bekler\n")
            return 2
        kim = argv[i + 1].strip().upper()

    try:
        kayit = json.load(io.open(TAHTA, encoding="utf-8"))
    except (OSError, ValueError) as e:
        # 🔴 OKUNAMADI ≠ YENİ YOK. Çıkış 2 ile ayırt edilir; 0 dönmek
        #   "yeni mesaj yok" yalanı olurdu.
        print("🔴 ÖLÇÜLEMEDİ — tahta okunamadı: %s" % e)
        return 2
    try:
        seviye = json.load(io.open(SEVIYE, encoding="utf-8"))["son_islenen"]
    except (OSError, ValueError, KeyError) as e:
        print("🔴 ÖLÇÜLEMEDİ — su seviyesi okunamadı: %s" % e)
        print("   ⇒ Seviye bilinmeden 'yeni yok' DENEMEZ.")
        return 2

    yeni = [m for m in kayit if (m.get("no") or "") > seviye]
    if kim:
        yeni = [m for m in yeni
                if (m.get("kime") or "").upper() == kim
                or (m.get("kime") or "").upper() == "HERKES"]

    print("SU SEVİYESİ: %s   ·   tahtada %d mesaj   ·   SONRASI: %d"
          % (seviye, len(kayit), len(yeni)))
    if not yeni:
        print("yeni mesaj YOK.")
        return 0
    print("-" * 74)
    for m in yeni:
        print("%-8s %s  %s → %s  [%s]"
              % (m.get("no"), m.get("zaman"), m.get("kimden"),
                 m.get("kime"), m.get("cins") or m.get("hal") or ""))
        govde = (m.get("mesaj") or "").replace("\n", " ")
        print("   %s" % (govde if tam else govde[:150] +
                         ("…" if len(govde) > 150 else "")))
    print("-" * 74)
    print("⚠️ Su seviyesini İŞLEDİKTEN SONRA yükselt. Tereddütte DAHA AŞAĞI "
          "bırak: işlenmişi tekrar okumak bir satır, işlenmemişi atlamak bir "
          "TESLİM KAYBI.")
    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
