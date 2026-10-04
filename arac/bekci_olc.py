# -*- coding: utf-8 -*-
"""bekci_olc.py — HANGİ BEKÇİ CANLI? Koordinatörün ölçüm aleti.

🔴 NİÇİN VAR (3 Ekim 2026 vakası): ODAK-KAPAT'ın bekçisi **çıkış 4** ile
düştü (`tahta_bekci.py`de `return 4` YOK ⇒ süreç dışarıdan düşürülmüş).
Oturum 9 saat uyanmadı. Koordinatör — yani ben — sessizliği *"işçi takıldı"*
diye okudu ve gereksiz bir uyandırma turu yaktı. Oysa teslim tahtadaydı.

⇒ Kök kusur: **ölü bekçi ile SESSİZ bekçi ayırt edilemiyordu.** Bekçi sessiz
olmak ZORUNDA (§7.2 ④: boş uyanış dolu turdan ucuz değil), bu yüzden çare
"konuşsun" değil **"iz bıraksın"**. `tahta_bekci.py` artık her turda
`oturumlar/bekci/<AD>.json` yazıyor; bu alet o damgaları okur.

⚠️ `.bekci_son_<AD>.txt` bu soruyu CEVAPLAMAZ: o yalnız `--cik` ile çıkışta
yazılır — "son NABIZ" değil "son ÖLÜM" damgasıdır. Ters bilgi verir.

🔴 DAMGALAR PAYLAŞILMAZ (`oturumlar/bekci/` gitignore'da). İçinde PID ve
makineye özel canlılık var; commitlenirse bu makine BAŞKA makinenin bayat
damgasını okuyup "bekçi canlı" sanar. `D222`nin ölçüm yüzü: *yanlış alanla
ölçmek, ölçmemekten daha tehlikelidir — sayı verir ve güven telkin eder.*

KULLANIM
  py arac/bekci_olc.py            tablo
  py arac/bekci_olc.py --ham      JSON (betikten okumak için)
ÇIKIŞ  0 hepsi canlı · 1 en az bir ÖLÜ/KUŞKULU · 2 kullanım hatası
"""
import io
import json
import os
import re
import subprocess
import sys
import time

# 🔴 KONSOL KODLAMASI — ve bu alet tam BUNDAN öldü (4 Ekim 2026).
# Windows konsolu cp1254; `print("🔴 OLU: …")` satırı `UnicodeEncodeError`
# fırlatıyordu. Kusurun sinsi tarafı: çökme YALNIZ `OLU` dalında oluyordu,
# yani **aletin söyleyecek bir şeyi olduğu anda.** Temiz durumda hiç
# görünmüyordu; "çalışıyor" sanılıyordu.
# ⇒ `paketle.py:57`nin deseni: çıktıyı UTF-8'e sabitle, kodlanamayanı değiştir.
#   Böylece ölçüm aleti, raporunun içeriği yüzünden ÖLMEZ.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar", "bekci")

# 🔴 EŞİK NABIZ ARALIĞININ KATIDIR, SABİT SANİYE DEĞİL. `--ara 60` ile koşan
# bir bekçi ile `--ara 1800` ile koşan biri aynı saniyeyle ölçülemez: ikinci
# için 10 dakikalık sessizlik NORMALDİR, birinci için ÖLÜMDÜR. Sabit eşik
# yazmak, yarısını yanlış etiketlerdi.
CANLI_KAT = 2.5      # <= 2.5 tur  -> canlı
KUSKU_KAT = 5.0      # <= 5   tur  -> kuşkulu
TABAN = 90           # `ara` okunamazsa / 0 ise varsayılan saniye


def _surec_var(pid):
    """PID hâlâ koşuyor mu. Bilinemezse None döner — 'yok' DEMEZ.

    🔴 ÖLÇÜLEMEDİ ≠ YOK (CLAUDE.md §11). PID okunamıyorsa ya da sorgulanamıyorsa
    süreci 'ölü' saymak, aletin düzeltmeye çalıştığı yanlış alarmın aynısını
    üretir. Üç cevap var: VAR · YOK · BİLİNMİYOR.
    """
    try:
        pid = int(pid)
    except (TypeError, ValueError):
        return None
    if pid <= 0:
        return None
    try:
        # Windows: tasklist en taşınabilir yol (os.kill(pid,0) burada
        # ayrıcalık hatası verebiliyor ve 'yok' gibi görünüyor).
        p = subprocess.run(["tasklist", "/FI", "PID eq %d" % pid, "/NH"],
                           capture_output=True, timeout=10)
        cik = (p.stdout or b"").decode("utf-8", "replace")
        return str(pid) in cik
    except Exception:
        return None


def oku():
    if not os.path.isdir(DIZIN):
        return []
    out = []
    for ad in sorted(os.listdir(DIZIN)):
        if not ad.endswith(".json"):
            continue
        yol = os.path.join(DIZIN, ad)
        try:
            d = json.load(io.open(yol, encoding="utf-8"))
        except (OSError, ValueError) as e:
            # 🔴 OKUNAMADI ≠ ÖLÜ. Bozuk damga bir ÖLÇÜM ARIZASIDIR; "ölü"
            #   yazmak yanlış hüküm olur (bekçi koşuyor olabilir).
            out.append({"ad": ad[:-5], "hal": "OLCULEMEDI", "sebep": str(e),
                        "yas": None})
            continue
        damga = d.get("damga") or 0
        ara = d.get("ara") or TABAN
        try:
            ara = float(ara) or TABAN
        except (TypeError, ValueError):
            ara = TABAN
        yas = max(0, int(time.time()) - int(damga))
        durum = d.get("durum") or "?"
        # 🔴 SÜREÇ HÂLÂ YAŞIYOR MU — bu soru sorulmadığı için alet dört
        #    YANLIŞ ALARM üretti (4 Ekim). Vaka: bir oturum adını değiştirip
        #    bekçisini YENİ adla kurunca, ESKİ addaki damga bayat kalıyor ve
        #    alet onu CESET sayıyordu. Dört kıta ad değiştirdi ⇒ "ÖLÜ 4",
        #    dördü de YANLIŞ. Beyanlı bir yanlış pozitif tolere edilebilir;
        #    alarm sütununun TAMAMI yanlış olunca alet GÜVENİLMEZ olur ve
        #    bir gün gerçek ölüm de görmezden gelinir.
        # ⇒ Damgadan "ölü mü" ayırt EDİLEMEZ, ama "süreci duruyor mu"
        #   ÖLÇÜLEBİLİR. İki ayrı hâl, iki ayrı anlam:
        #     süreç YOK   → BITMIS  (ad değişmiş YA DA çökmüş — ikisi
        #                   damgadan ayırt edilemez, o yüzden iddia etmiyoruz)
        #     süreç VAR   → ASILI   (🔴 CİDDİ HÂL: süreç ayakta, nabız yok)
        canli_surec = _surec_var(d.get("pid"))
        if durum == "cikti":
            hal = "CIKTI"            # düzgün çıkış — ölüm DEĞİL, bitiş
        elif yas <= ara * CANLI_KAT:
            hal = "CANLI"
        elif yas <= ara * KUSKU_KAT:
            hal = "KUSKULU"
        elif canli_surec is True:
            hal = "ASILI"            # süreç AYAKTA ama nabız atmıyor → ALARM
        elif canli_surec is False:
            hal = "BITMIS"           # süreç YOK: ad değişmiş ya da çökmüş
        else:
            # 🔴 canli_surec is None ⇒ SÜREÇ DURUMU ÖLÇÜLEMEDİ (pid yok/geçersiz,
            #    tasklist başarısız). Bunu "süreç yok" saymak, bu yamanın
            #    DÜZELTTİĞİ hatanın aynısını yeniden yapmak olurdu — ve ilk
            #    yazımımda TAM BUNU yaptım: `elif canli_surec:` yazıp None'ı
            #    sessizce "yok"a kattım, yani üç durumlu yazdığım işlevi iki
            #    duruma indirdim. Sınav yakaladı (2 kusur).
            #    `ölçülemedi ≠ yok ≠ temiz` — kendi yamamda ihlal ettim.
            hal = "OLCULEMEDI"
        out.append({"ad": d.get("ad") or ad[:-5], "hal": hal, "yas": yas,
                    "ara": ara, "tur": d.get("tur"), "pid": d.get("pid"),
                    "zaman": d.get("zaman"), "sebep": d.get("sebep") or "",
                    "dinlenen": d.get("dinlenen") or []})
    return out


def _sure(s):
    if s is None:
        return "-"
    if s < 60:
        return "%d sn" % s
    if s < 3600:
        return "%d dk" % (s // 60)
    return "%d s %d dk" % (s // 3600, (s % 3600) // 60)


ISARET = {"CANLI": "+", "KUSKULU": "?", "ASILI": "!", "BITMIS": "x", "CIKTI": ".",
          "OLCULEMEDI": "?"}


def temizle():
    """BITMIS damgaları siler — süreci olmayan VE eskimiş olanları.

    🔴 NİÇİN BU İŞLEV VAR: çıktının kendisi `--temizle` ÖNERİYORDU ve bayrak
    YOKTU. Yani alet, var olmayan bir komutu tavsiye ediyordu —
    `D255`in ("aracın ÖNERDİĞİ komut, aracın YAPTIĞI şey değildir") daha kaba
    bir hâli: burada araç, HİÇ YAPMADIĞI şeyi öneriyordu. Bir tavsiye de
    çıktıdır ve ölçülmelidir.
    """
    kayit = oku()
    sil = [k for k in kayit if k["hal"] == "BITMIS"]
    if not sil:
        print("Silinecek damga YOK (BITMIS 0).")
        return 0
    # 🔴 YALNIZ `BITMIS` silinir: süreci YOK ve nabzı eski. `ASILI` ASLA
    #   silinmez (süreç ayakta — silmek gerçek alarmı susturmak olur),
    #   `OLCULEMEDI` de silinmez (ölçemediğimiz şeyi yok sayamayız).
    n = 0
    for k in sil:
        y = _nabiz_yol_oku(k["ad"])
        if y and os.path.exists(y):
            try:
                os.remove(y)
                print("  silindi: %s" % k["ad"])
                n += 1
            except OSError as e:
                print("  SİLİNEMEDİ: %s — %s" % (k["ad"], e))
    print("%d damga silindi. (ASILI ve OLCULEMEDI DOKUNULMADI.)" % n)
    return 0


def _nabiz_yol_oku(ad):
    """Damga dosyasının yolu. `tahta_bekci.py`nin ad→dosya kuralıyla AYNI
    olmalı; ayrışırsa `--temizle` yanlış dosyayı siler ya da hiçbirini."""
    if not os.path.isdir(DIZIN):
        return None
    hedef = re.sub(r"[^A-Za-z0-9]+", "_", ad or "?") + ".json"
    for mevcut in os.listdir(DIZIN):
        if mevcut == hedef:
            return os.path.join(DIZIN, mevcut)
    # ad damganın İÇİNDEN okunduğu için dosya adı farklı olabilir; içeriğe bak
    for mevcut in os.listdir(DIZIN):
        if not mevcut.endswith(".json"):
            continue
        try:
            d = json.load(io.open(os.path.join(DIZIN, mevcut), encoding="utf-8"))
        except (OSError, ValueError):
            continue
        if (d.get("ad") or "") == ad:
            return os.path.join(DIZIN, mevcut)
    return None


def main(argv):
    if argv and argv[0] not in ("--ham", "--temizle"):
        sys.stderr.write("Kullanim: py arac/bekci_olc.py [--ham | --temizle]\n")
        return 2
    if "--temizle" in argv:
        return temizle()
    kayit = oku()
    if "--ham" in argv:
        sys.stdout.write(json.dumps(kayit, ensure_ascii=False))
        return 1 if any(k["hal"] in ("ASILI", "OLCULEMEDI") for k in kayit) else 0

    if not os.path.isdir(DIZIN):
        # 🔴 DAMGA DİZİNİ YOK = "bekçi yok" DEĞİL, "ÖLÇÜLEMEDİ". Nabız
        #   yaması inmeden önce kurulmuş bekçiler damga YAZMAZ ve hâlâ
        #   koşuyor olabilirler. Boş küme her öngörüyü doğrular.
        print("OLCULEMEDI — damga dizini yok: oturumlar/bekci/")
        print("  Sebep ADAYLARI: (a) hic bekci kurulmadi (b) bekciler NABIZ")
        print("  yamasindan ONCE kuruldu (c) yol yanlis. (b) ise bekciler")
        print("  CANLI olabilir — 'bekci yok' SONUCU CIKARMA.")
        return 1

    if not kayit:
        print("OLCULEMEDI — dizin var, damga YOK (ayni uc aday gecerli).")
        return 1

    print("=" * 74)
    print("BEKCI NABZI — %s" % time.strftime("%Y-%m-%d %H:%M:%S"))
    print("=" * 74)
    print("%-26s %-11s %-10s %-7s %s" % ("ad", "hal", "son nabiz", "tur", "not"))
    print("-" * 74)
    for k in sorted(kayit, key=lambda x: (x["hal"] not in ("ASILI","BITMIS"), x["ad"])):
        not_ = k.get("sebep") or ""
        if k["hal"] in ("ASILI", "BITMIS"):
            not_ = "beklenen <= %s · SUREC DUSMUS olabilir" % _sure(
                int(k["ara"] * CANLI_KAT))
        elif k["hal"] == "CIKTI":
            not_ = "duzgun cikis (%s) — olum DEGIL" % (not_ or "sebep yazilmamis")
        print("%s%-25s %-11s %-10s %-7s %s"
              % (ISARET.get(k["hal"], " "), k["ad"], k["hal"],
                 _sure(k["yas"]), k.get("tur"), not_))
    print("-" * 74)
    asili = [k["ad"] for k in kayit if k["hal"] == "ASILI"]
    bitmis = [k["ad"] for k in kayit if k["hal"] == "BITMIS"]
    olcx = [k["ad"] for k in kayit if k["hal"] == "OLCULEMEDI"]
    print("CANLI %d · KUSKULU %d · CIKTI %d · ASILI %d · BITMIS %d · OLCULEMEDI %d"
          % (sum(1 for k in kayit if k["hal"] == "CANLI"),
             sum(1 for k in kayit if k["hal"] == "KUSKULU"),
             sum(1 for k in kayit if k["hal"] == "CIKTI"),
             len(asili), len(bitmis), len(olcx)))
    # 🔴 ASILI = SÜREÇ AYAKTA, NABIZ YOK. Tek gerçek alarm bu: bekçi yaşıyor
    #    ama tur atmıyor ⇒ oturum tahtadan UYANMAZ ve kimse farketmez.
    if asili:
        print("🔴 ASILI (süreç var, nabız YOK): %s" % ", ".join(asili))
        print("   ⇒ Bu oturumlar TAHTADAN UYANMAZ. Görev `send_message` ile")
        print("     gider (§7.2). Bekçiyi OTURUM kendisi kurar.")
    # ⚪ BITMIS = süreç yok. Ad değişmiş OLABİLİR, çökmüş OLABİLİR — damgadan
    #    AYIRT EDİLEMEZ, o yüzden iddia edilmiyor. Alarm DEĞİL.
    #    4 Ekim vakası: dört kıta ad değiştirdi, dördü de "ÖLÜ" raporlandı ve
    #    dördü de YANLIŞTI. Alarm sütununun tamamı yanlış olunca alet
    #    güvenilmez olur — ve bir gün GERÇEK ölüm de görmezden gelinir.
    if bitmis:
        print("x BITMIS (süreç yok — ad değişmiş ya da çökmüş, AYIRT EDİLEMEZ):")
        print("   %s" % ", ".join(bitmis))
        print("   ⇒ ALARM DEĞİL. Aynı oturum YENİ adla CANLI listesindeyse")
        print("     damga bayat kalıntıdır; `--temizle` ile silinir.")
    if olcx:
        print("? OLCULEMEDI: %s" % ", ".join(olcx))
    # 🔴 Çıkış kodu YALNIZ gerçek alarmla 1 olur. `BITMIS` kodu kirletmez.
    return 1 if (asili or olcx) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
