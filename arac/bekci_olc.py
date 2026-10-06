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


def _surec_kimlik(pid):
    """("VAR", başlangıç) · ("YOK", None) · (None, sebep) — PID'in ŞU ANKİ sahibi.

    Windows: kernel32 OpenProcess + GetExitCodeProcess + GetProcessTimes.
    `tahta_bekci.py` başlangıcı AYNI API ile yazar ⇒ karşılaştırma birebir.
      hata 87 (geçersiz parametre)  → süreç YOK
      çıkış kodu ≠ 259 (STILL_ACTIVE) → süreç bitmiş, tutamaç kalıntı → YOK
      hata 5 (erişim reddi) ve öteki → BİLİNMİYOR (None)
    🔴 `os.kill(pid, 0)` Windows'ta süreci ÖLDÜRÜR (TerminateProcess) — kullanılmaz.
    Eski yol `tasklist` idi: yalnız PID sorar, başlangıç vermez (D266'nın kökü).
    """
    if os.name != "nt":
        return None, "Windows dışı: başlangıç zamanı okunmuyor"
    try:
        import ctypes
        from ctypes import wintypes
        k32 = ctypes.WinDLL("kernel32", use_last_error=True)
        k32.OpenProcess.restype = wintypes.HANDLE
        k32.OpenProcess.argtypes = [wintypes.DWORD, wintypes.BOOL, wintypes.DWORD]
        k32.GetExitCodeProcess.argtypes = [wintypes.HANDLE, ctypes.POINTER(wintypes.DWORD)]
        k32.GetProcessTimes.argtypes = [wintypes.HANDLE] + [ctypes.POINTER(wintypes.FILETIME)] * 4
        k32.CloseHandle.argtypes = [wintypes.HANDLE]
        h = k32.OpenProcess(0x1000, False, pid)        # PROCESS_QUERY_LIMITED_INFORMATION
        if not h:
            hata = ctypes.get_last_error()
            if hata == 87:
                return "YOK", None
            return None, "OpenProcess hata %d" % hata
        try:
            kod = wintypes.DWORD()
            if not k32.GetExitCodeProcess(h, ctypes.byref(kod)):
                return None, "GetExitCodeProcess hata %d" % ctypes.get_last_error()
            if kod.value != 259:
                return "YOK", None
            c, e, kk, u = (wintypes.FILETIME() for _ in range(4))
            if not k32.GetProcessTimes(h, ctypes.byref(c), ctypes.byref(e),
                                       ctypes.byref(kk), ctypes.byref(u)):
                return None, "GetProcessTimes hata %d" % ctypes.get_last_error()
            return "VAR", (c.dwHighDateTime << 32) | c.dwLowDateTime
        finally:
            k32.CloseHandle(h)
    except Exception as e:
        return None, "sorgu arızası: %s" % e


def _ft_epoch(ft):
    """FILETIME (1601'den 100 ns, UTC) → Unix epoch saniye."""
    return ft / 1e7 - 11644473600


# Damganın `damga` alanı int(time.time()) — saniyeye KESİLMİŞ. Bekçi açılır açılmaz
# ilk nabzını aynı saniye içinde yazarsa başlangıç, kesilmiş damgadan <1 sn SONRA
# görünür. Bu pay o kesmeyi örter; "sahip olamaz" hükmü yalnız bunun ötesinde verilir.
NABIZ_PAY_SN = 2


def _surec_var(pid, baslangic=None, son_nabiz=None):
    """(True|False|None, açıklama) — DAMGAYI YAZAN süreç hâlâ koşuyor mu.

    🔴 SÜREÇ KİMLİĞİ = PID + BAŞLANGIÇ ZAMANI (D266). PID yeniden kullanılır:
    damganın PID'i bugün BAŞKA bir sürece ait olabilir. Vaka (5 Ekim):
    {"pid":20764} 18:32 damgası, PID başka sürece verilmiş, `tasklist` "var"
    dedi, alet ASILI bastı — yanlış alarm, kanal zehirlendi.
      PID'in sahibi yok                                  → False (BITMIS)
      sahip var, başlangıç damgayla AYNI                  → True  (bizim süreç ayakta)
      sahip var, başlangıç FARKLI                         → False (PID yeniden kullanılmış)
      sahip var, damgada başlangıç YOK (eski) ve
        sahibin başlangıcı SON NABIZDAN SONRA              → False (o süreç yazamazdı)
        sahibin başlangıcı son nabızdan önce / ölçülemez   → None  (kimlik doğrulanamaz)
      sorgulanamadı                                      → None
    🔴 ÖLÇÜLEMEDİ ≠ YOK (CLAUDE.md §11): None "yok" sayılmaz.
    `son_nabiz`: damganın `damga` alanı (epoch sn, UTC). Başlangıç FILETIME'ı ile
    aynı eksene `_ft_epoch` çevirir; saat dilimi yoktur.
    """
    try:
        pid = int(pid)
    except (TypeError, ValueError):
        return None, "damgada geçerli PID yok"
    if pid <= 0:
        return None, "damgada geçerli PID yok"
    durum, deger = _surec_kimlik(pid)
    if durum is None:
        return None, deger
    if durum == "YOK":
        return False, "süreç yok"
    if baslangic is None:
        # ⚖️ ESKİ DAMGA (başlangıç alanı yazılmadan önceki bekçi). PID'in bir
        #    sahibi var ama onun bizim bekçi olduğu doğrulanamaz.
        #    HÜKÜM (koordinatör, D266, 6 Ekim 2026): ÖLÇÜLEMEDİ — BITMIS DEĞİL.
        #    ASILI demek D266'nın yanlış alarmını sürdürür; BITMIS demek gerçek
        #    bir asılı bekçiyi susturur VE `--temizle` onu SİLER. ÖLÇÜLEMEDİ
        #    `--temizle`den geçmez (yalnız BITMIS silinir). Sınav:
        #    `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py` T1-T3.
        # 🔴 AMA BİR SINIR ÖLÇÜLEBİLİR (D266 ikinci vaka, 5-6 Ekim): damga
        #    {"pid":22632,"zaman":"18:55:36"} — PID'in bugünkü sahibi msedge,
        #    23:55:33'te başlamış, son nabızdan 5 SAAT SONRA. Damgayı yazan süreç
        #    son nabızdan ÖNCE başlamış olmak ZORUNDA ⇒ sonra başlayan süreç sahip
        #    OLAMAZ ⇒ BITMIS. Bu, başlangıç alanı OLMADAN verilebilen tek kesin
        #    hükümdür. Ters yön (başlangıç ≤ son nabız) hiçbir şey kanıtlamaz:
        #    OLCULEMEDI kalır. Ölçüldü: yamasız main bu damgaya ASILI, 1006b
        #    OLCULEMEDI diyordu; "yama inince BITMIS'e düşer" beklentisi tutmuyordu.
        #    Üçüncü vaka aynı gece: {"pid":20764,"zaman":"18:32:28"} (ilk D266
        #    damgası) — PID arada YOKtu, 00:05:30'da remoting_native_messaging_host
        #    (Remote Control köprüsü) aldı. Aynı kural: BITMIS.
        # 📌 ŞARTNAME CÜMLESİ (koordinatör): PID yeniden kullanımı koordinasyon
        #    trafiğiyle (Remote Control köprü süreçleri) ve bellek boşaltmayla
        #    (Edge kapat/aç) artar; bu kusur en yoğun gecede öter, yani alarm
        #    kanalı tam ihtiyaç duyulduğu anda en gürültülüdür.
        try:
            nabiz = float(son_nabiz)
        except (TypeError, ValueError):
            nabiz = None
        if nabiz and deger is not None and _ft_epoch(deger) > nabiz + NABIZ_PAY_SN:
            return False, ("PID %d'in bugünkü sahibi son nabızdan %d sn SONRA başlamış — "
                           "damgayı o yazamaz (eski damga)" % (pid, _ft_epoch(deger) - nabiz))
        return None, "eski damga: başlangıç zamanı yok, PID %d'in sahibi doğrulanamıyor" % pid
    try:
        baslangic = int(baslangic)
    except (TypeError, ValueError):
        return None, "damgadaki başlangıç okunamadı: %r" % (baslangic,)
    if deger == baslangic:
        return True, "süreç ayakta (PID + başlangıç uyuşuyor)"
    return False, "PID %d YENİDEN KULLANILMIŞ (başlangıç uyuşmuyor)" % pid


def _kaynak(d):
    """(kaynak, not) — bekçi tahtayı NEREDEN okuyor (TAHTA-ORIGIN-OKU-1006).

    🔴 VAKA (6 Ekim 2026): UMIT'teki 11 bekçi CANLI idi ve bu alet CANLI dedi —
    doğruydu. Ama hepsi YEREL çalışma ağacını okuyordu, ağaç 3 saattir pull
    edilmemişti, EMRELIC'in 10 görev mesajı hiçbirine ulaşmadı. "Canlı mı"
    sorusu sorulup "NEYİ okuyor" sorusu sorulmadığı için CANLI = SAĞIR ayırt
    edilemiyordu.
      "origin"   fetch ✓ — uzak tahta (∪ yerel) okunuyor
      "yerel"    fetch ✗ ya da --kaynak yerel ya da depo yok — not ZORUNLU
      "ESKI"     damgada `kaynak` alanı YOK ⇒ yama ÖNCESİ bekçi; o kod
                 YALNIZ çalışma ağacını okur (kodla sabit, tahmin değil)
    """
    k = d.get("kaynak")
    if not k:
        return "ESKI", "yama öncesi bekçi — YALNIZ yerel çalışma ağacını okur, bayat olabilir"
    not_ = d.get("kaynak_not") or ""
    if k != "origin" and not not_:
        not_ = "sebep yazılmamış"
    return k, not_


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
        canli_surec, surec_not = _surec_var(d.get("pid"), d.get("baslangic"), d.get("damga"))
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
            #    sorgu başarısız, ESKİ damgada başlangıç yok — D266). Bunu "süreç yok" saymak, bu yamanın
            #    DÜZELTTİĞİ hatanın aynısını yeniden yapmak olurdu — ve ilk
            #    yazımımda TAM BUNU yaptım: `elif canli_surec:` yazıp None'ı
            #    sessizce "yok"a kattım, yani üç durumlu yazdığım işlevi iki
            #    duruma indirdim. Sınav yakaladı (2 kusur).
            #    `ölçülemedi ≠ yok ≠ temiz` — kendi yamamda ihlal ettim.
            hal = "OLCULEMEDI"
        kaynak, kaynak_not = _kaynak(d)
        out.append({"ad": d.get("ad") or ad[:-5], "hal": hal, "yas": yas,
                    "ara": ara, "tur": d.get("tur"), "pid": d.get("pid"),
                    "zaman": d.get("zaman"), "sebep": d.get("sebep") or "",
                    "surec": surec_not, "baslangic": d.get("baslangic"),
                    "dinlenen": d.get("dinlenen") or [],
                    "kaynak": kaynak, "kaynak_not": kaynak_not,
                    "fetch_hata": d.get("fetch_hata") or "",
                    "yerel_ek": d.get("yerel_ek")})
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
    print("%-26s %-11s %-10s %-7s %-7s %s" % ("ad", "hal", "son nabiz", "tur", "kaynak", "not"))
    print("-" * 74)
    for k in sorted(kayit, key=lambda x: (x["hal"] not in ("ASILI","BITMIS"), x["ad"])):
        not_ = k.get("sebep") or ""
        if k["hal"] in ("ASILI", "BITMIS"):
            not_ = "beklenen <= %s · %s" % (_sure(int(k["ara"] * CANLI_KAT)),
                                            k.get("surec") or "")
        elif k["hal"] == "OLCULEMEDI" and k.get("surec"):
            not_ = k["surec"]
        elif k["hal"] == "CIKTI":
            not_ = "duzgun cikis (%s) — olum DEGIL" % (not_ or "sebep yazilmamis")
        if k.get("kaynak") != "origin" and k.get("kaynak_not") and k["hal"] in ("CANLI", "KUSKULU"):
            not_ = (not_ + " · " if not_ else "") + "kaynak: " + k["kaynak_not"]
        print("%s%-25s %-11s %-10s %-7s %-7s %s"
              % (ISARET.get(k["hal"], " "), k["ad"], k["hal"],
                 _sure(k["yas"]), k.get("tur"), k.get("kaynak") or "?", not_))
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
    # 🔴 KAYNAK (TAHTA-ORIGIN-OKU-1006): nöbetteki (CANLI/KUSKULU) bir bekçi
    #    origin'i okumuyorsa CANLI ama SAĞIR olabilir — 6 Ekim vakasının tam hâli.
    nobet = [k for k in kayit if k["hal"] in ("CANLI", "KUSKULU")]
    kay = {}
    for k in nobet:
        kay.setdefault(k.get("kaynak") or "?", []).append(k["ad"])
    print("KAYNAK (nöbettekiler): " + (" · ".join(
        "%s %d" % (x, len(kay[x])) for x in sorted(kay)) or "—"))
    for x in sorted(kay):
        if x == "origin":
            continue
        print("🔴 %s okuyan nöbetçi: %s" % (x.upper(), ", ".join(kay[x])))
        print("   ⇒ Başka makinede yazılan mesajı GÖRMEYEBİLİR (tahta bayat olabilir)."
              " Sebep satırında; 'ESKI' = bekçiyi yeniden kur.")
    # 🔴 Çıkış kodu YALNIZ gerçek alarmla 1 olur. `BITMIS` kodu kirletmez.
    return 1 if (asili or olcx) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
