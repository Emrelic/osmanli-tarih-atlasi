# -*- coding: utf-8 -*-
"""CLAUDE.md §1.5 "Bugün nerede duruyoruz" tablosunu ÜRETİR.

🔴 NİÇİN VAR — elle tutulan durum tablosu İKİ KEZ bayatladı ve iki kez yanılttı:
   1 Ağustos  NOKTA EKLEME oturumu tabloyu ölçüm tabanı olarak kullanmayı REDDETTİ
              (tablo 764·433·34 diyordu, gerçek başkaydı)
   4 Ağustos  ALTI SAYI birden bayattı (976→1713 · 1009→1141 · 213→302 · 104→233)
              ve üç oturum aynı gün bayat tabandan başladı
⇒ Ders: "bugün nerede duruyoruz" bir BELGE değil bir ÖLÇÜMDÜR. Elle yazılan her
  durum satırı, yazıldığı andan itibaren çürümeye başlar.

    py arac/durum_tablosu.py            # tabloyu ekrana bas
    py arac/durum_tablosu.py --yaz      # CLAUDE.md §1.5'i YERİNDE güncelle

⚠️ `--yaz` yalnız §1.5'in TABLO satırlarını değiştirir; altındaki ders metnine
   ve başlığa dokunmaz.
"""
import io, os, re, sys, glob, json, subprocess, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi


def _oku(y):
    return io.open(y, encoding="utf-8", newline="").read()


# ══════════════════════════════════════════════════════════════════════════
# KASITLI BOŞLUK DEYİMİ — 2 Eylül 2026'da kovalandı
#
# `__BOSLUK__` bir devlet kimliği DEĞİL, bir BEYANDIR: *"bu dilimi hiçbir
# künye kapsamıyor ve en yakın kimliğe İTMİYORUZ."* `data/yer_yama_hayalet2.js`
# kendi yorumunda böyle tarif ediyor ve gerekçesi `§3.5.1`dir:
#     "hayalet yok olmadı, TARAF DEĞİŞTİRDİ" — boşluğu komşuya itmek
#     bir hayaleti kapatıp yenisini doğurmaktır.
#
# ⚠️ ÖLÇÜLDÜ (2 Eylül): deyim KASITLI ama MOTORDA KARŞILIĞI YOK.
#     `__BOSLUK__` → arac/*.py 0 eşleşme · js/*.js 0 eşleşme
#     yani boyanmaması "bilinmeyen kimlik → renk yok → çizilmez" yolundan
#     geliyor, ÖZEL BİR DAL'dan değil. Bugün doğru çalışıyor; ama biri
#     `renkler.py`ye `"__BOSLUK__"` diye bir renk yazarsa niyet SESSİZCE
#     bozulur ve hiçbir denetim ötmez.
# 📌 Bu yüzden SÜZGEÇ DEĞİL KOVA: elenirse satır 0/0 der ve deyim görünmez
#   olur; sayılırsa hem kusur sayılmaz hem de yanlış yere yazılırsa görünür.
#
# 🔴 VE TİPO KORUMASI: yalnız TANINAN dizi sarı kovaya girer. `__BOSLK__`
#   gibi deyime BENZEYEN ama tanınmayan bir kimlik KIRMIZI kovada kalır —
#   yoksa bir yazım hatası "kasıtlı" diye etiketlenip görünmez olurdu.
KASITLI_BOSLUK = {"__BOSLUK__"}


def bosluk_kovalari(kul, diz):
    """Dizinde olmayan kimlikleri İKİ KOVAYA ayırır: (eksik, kasitli).

        eksik    🔴 bilinmeyen kimlik — kusur
        kasitli  🟡 tanınan boşluk beyanı — kusur DEĞİL, ama SAYILIR

    🔴 SAF FONKSİYON — C13 dallarının zorlanabilmesi için dosya okumaz.
    """
    eksik, kasitli = {}, {}
    for k, n in kul.items():
        if k in diz:
            continue
        (kasitli if k in KASITLI_BOSLUK else eksik)[k] = n
    return eksik, kasitli


def renk_kovalari(boyalar, diz, kul):
    """RENGİ VAR + DİZİNDE YOK olan kimlikleri İKİ KOVAYA ayırır.

        boyalar : `renkler.py` BOYALAR anahtarları
        diz     : künye `id` ∪ künye `harita:` (takma adlar DÂHİL — bu şart)
        kul     : {kimlik: pencere} — veride kullanım sayacı

    dönüş: (ihlal, olu)
        ihlal  rengi var · dizinde yok · VERİDE KULLANILIYOR  → ÇİZİLİYOR ama
               dizinde görünmüyor; `Değişmez 4` ömrünü denetleyemez (`f`/`t` yok)
        olu    aynısı ama veride hiç kullanılmıyor → bugün zarar YOK, ama o
               kimliği kullanan TEK BİR nokta yazıldığı an sessizce ihlale döner

    📌 İkisini tek sayıda toplamak `§11`in *"ölçülemedi ≠ temiz"* ailesinden
      bir hata olurdu: ölü renk bir kusur değil, BEKLEYEN bir kusurdur.
    🔴 SAF FONKSİYON — dosya okumaz. C13 sınaması bunu sahte evrenle çağırır;
      ölçümü kilitli bir I/O'nun içine gömmek, dalların zorlanmasını
      imkânsız kılardı.
    """
    ihlal, olu = [], []
    for kid in sorted(boyalar):
        if kid in diz:
            continue
        (ihlal if kul.get(kid) else olu).append(kid)
    return ihlal, olu


def _sina():
    """C13 — dört dal, ikisi ZORLANARAK. Gerçek veride temiz hâl YOK."""
    print("C13 SINAMASI — renk_kovalari()")
    gecti = t = 0

    def dal(ad, boyalar, diz, kul, bek_i, bek_o):
        nonlocal gecti, t
        t += 1
        i, o = renk_kovalari(boyalar, diz, kul)
        ok = (len(i) == bek_i and len(o) == bek_o)
        gecti += 1 if ok else 0
        print("  %s %-42s ihlal %d/%d · olu %d/%d"
              % ("OK " if ok else "!!!", ad, len(i), bek_i, len(o), bek_o))

    # ① GEÇME — kusursuz evren. Gerçek veride BÖYLE BİR HÂL YOK ⇒ ZORLANDI.
    dal("1 GECME (kusursuz evren)", {"a", "b"}, {"a", "b"}, {"a": 3}, 0, 0)
    # ② ATEŞLEME — renk var, dizin yok, KULLANILIYOR
    dal("2 ATESLEME (ihlal)", {"a", "yetim"}, {"a"}, {"yetim": 2}, 1, 0)
    # ③ ÖLÜ RENK — aynısı ama kullanılmıyor ⇒ ihlal DEĞİL, ayrı kova
    dal("3 OLU RENK (ihlal degil)", {"a", "olu"}, {"a"}, {"a": 1}, 0, 1)
    # ④ TAKMA AD — `harita:` hedefi `diz` içinde olduğu için SESSİZ kalmalı
    dal("4 TAKMA AD (diz icinde -> sessiz)", {"a", "hicaz"}, {"a", "hicaz"},
        {"hicaz": 5}, 0, 0)
    # ④b — takma ad `diz`den ÇIKARILINCA sahte alarmın DOĞDUĞU gösteriliyor:
    #      kuralın gerekliliğini iddia değil ÖLÇÜM söylesin diye.
    dal("4b TAKMA AD (diz'den cikarilinca SAHTE ALARM)", {"a", "hicaz"},
        {"a"}, {"hicaz": 5}, 1, 0)
    print("C13 SINAMASI — bosluk_kovalari()")

    def bdal(ad, kul, diz, bek_e, bek_k):
        nonlocal gecti, t
        t += 1
        e, k = bosluk_kovalari(kul, diz)
        ok = (len(e) == bek_e and len(k) == bek_k)
        gecti += 1 if ok else 0
        print("  %s %-42s eksik %d/%d · kasitli %d/%d"
              % ("OK " if ok else "!!!", ad, len(e), bek_e, len(k), bek_k))

    # ⑤ GEÇME — her kimliğin dizin karşılığı var. Gerçek veride BU HÂL YOK
    #    (`__BOSLUK__` hep orada) ⇒ ZORLANDI.
    bdal("5 GECME (hepsi dizinde)", {"a": 2, "b": 1}, {"a", "b"}, 0, 0)
    # ⑥ ATEŞLEME — bilinmeyen kimlik KIRMIZI kovada
    bdal("6 ATESLEME (bilinmeyen kimlik)", {"yetim": 3}, set(), 1, 0)
    # ⑦ KASITLI — tanınan beyan SARI kovada, kırmızıyı KİRLETMEZ
    bdal("7 KASITLI (__BOSLUK__ -> sari)", {"__BOSLUK__": 1}, set(), 0, 1)
    # ⑧ TİPO KORUMASI — deyime BENZEYEN ama TANINMAYAN kimlik KIRMIZI kalır.
    #    Desenle (`__.*__`) süzseydim bu yazım hatası "kasıtlı" diye
    #    etiketlenip GÖRÜNMEZ olurdu; tanınan KÜME kullanmanın sebebi bu.
    bdal("8 TIPO (__BOSLK__ -> KIRMIZI kalir)", {"__BOSLK__": 1}, set(), 1, 0)
    print("SINAMA: %d/%d dal beklendigi gibi" % (gecti, t))
    return 0 if gecti == t else 1


def olc():
    o = {}
    Y = girdi.yukle(sessiz=True)
    o["yerlesim"] = len(Y)
    o["girdi_dosya"] = len(girdi.GIRDI_DOSYALARI)

    o["madde"] = sum(len(re.findall(r'\{\s*t:\s*"\d{4}(?:-\d{2}){0,2}"', _oku(f)))
                     for f in sorted(glob.glob("data/olaylar*.js")))
    o["duygu"] = sum(len(re.findall(r"duygu:\[", _oku(f)))
                     for f in glob.glob("data/olaylar*.js"))
    o["yer_id"] = sum(len(re.findall(r"yer_id:", _oku(f)))
                      for f in glob.glob("data/olaylar*.js"))
    o["vefat_id"] = sum(len(re.findall(r"vefat_id:", _oku(f)))
                        for f in glob.glob("data/olaylar*.js"))

    d = _oku("data/devletler.js")
    o["devlet"] = len(re.findall(r'\{\s*id:\s*"', d))
    diz = set(re.findall(r'\bid:\s*"([^"]+)"', d)) | set(re.findall(r'\bharita:\s*"([^"]+)"', d))
    # 🔴 DOSYA KÜMESİ `girdi.py`DEN ALINIR, `glob`dan DEĞİL.
    # İlk sürüm `glob("data/yerlesimler*.js")` kullanıyordu ve `ek10·ek11·ek12`yi
    # sayıyordu — o üçü renk beklediği için BAĞLI DEĞİL, yani haritada ÇİZİLMİYOR.
    # Sonuç: 47 kimlik / 365 pencere. Gerçek (boyanan): 45 / 359.
    # ⚠️ Fark küçük olduğu için "önemsiz sapma" diye geçilebilirdi — ÇAPRAZ AKDENİZ
    # geçmedi ve haklıydı: iki sayı SAPMA değil, İKİ AYRI SORUNUN cevabı.
    #     45/359  "bugün haritada boyanan kaç kimliğin dizin karşılığı yok"
    #     47/365  "ek10-12 merge edilince kaç olacak"
    # 📌 Ve bu, `CLAUDE.md §5`in ÜÇÜNCÜ vakası: desenle dosya okuyan her tarama
    # merge'e hazır olmayan partileri sessizce içeri alıyor ve sayı BÜYÜK çıkıyor.
    # Bu araç bayatlığı önlemek için yazıldı; ilk sürümü tam o kusuru taşıyordu.
    # 🔴 KAPSAM 2 EYLÜL 2026'DA GENİŞLETİLDİ — `s:` YANINA `isg:` EKLENDİ.
    # Koordinatör *"dört alanı da tara (`s`·`d`·`v`·`isg`)"* dedi; ÖLÇTÜM ve
    # ikisi TARANAMAZ, çünkü kimlik TAŞIMIYORLAR:
    #     s:    9787 dönem · anahtar {f,t,d,…}  · 9787'sinde `d:` kimlik VAR
    #     isg:    94 dönem · anahtar {f,t,d,…}  ·   94'ünde `d:` kimlik VAR  ← EKLENDİ
    #     d:    1188 dönem · anahtar {f,t,y}    ·    0 kimlik — Osmanlı İMA EDİLİR
    #     v:     407 dönem · anahtar {f,t,k}    ·    0 kimlik — `k:` bir ETİKET
    #            ("Mısır (Kavalalı)", "Eflak Voyvodalığı"…); 40 farklı değerin
    #            SIFIRI künye id'siyle eşleşiyor, yani dizin anahtarı DEĞİL.
    # ⇒ Dört değil İKİ alan taranır. `d:`/`v:` eklemek, kimlik olmayan yerde
    #   kimlik aramak olurdu — bulunmayan şeyi "temiz" diye raporlardı.
    # 📌 `§11`: aletin EVRENİ, doğruluğundan ayrı ölçülür.
    yer = [f for f in girdi.GIRDI_DOSYALARI if f.startswith("yerlesimler")]
    kul = collections.Counter()
    for f in yer:
        t = _oku(os.path.join("data", f))
        t = "\n".join(l for l in t.split("\n") if not l.lstrip().startswith("//"))
        for kat in (r"\bs:", r"\bisg:"):
            for sm in re.finditer(kat + r"\s*\[(.*?)\]\s*[,}]", t, re.S):
                for m in re.finditer(r'\bd:\s*"([^"]+)"', sm.group(1)):
                    kul[m.group(1)] += 1
    eksik, kasitli = bosluk_kovalari(kul, diz)
    o["kimlik_eksik"] = len(eksik)
    o["kimlik_eksik_pencere"] = sum(eksik.values())
    o["kasitli_bosluk"] = len(kasitli)
    o["kasitli_bosluk_pencere"] = sum(kasitli.values())
    o["kimlik_eksik_ad"] = sorted(eksik)

    # 🔴 RENK SAYACI 2 EYLÜL 2026'DA DÜZELTİLDİ — REGEX 8 FAZLA SAYIYORDU.
    # Eski satır: re.findall(r'^\s*"([a-z0-9\-]+)"\s*:', renkler.py)
    # O desen `renkler.py`deki HER sözlük anahtarını yakalıyordu, yalnız
    # BOYALAR'ı değil. Ölçüldü:
    #     regex 409 · gerçek len(BOYALAR) 401 · fark 8
    #     fazladan sayılanlar: dogrudan · tabi · yabanci   (OPAKLIK sözlüğü,
    #       `app.js`in kopyası — renk DEĞİL, opaklık katsayısı)
    #       bekliyor-kunye · bekliyor-madde · bekliyor-veri · oksuz · curutuldu
    #       (iş kuyruğu listeleri — hiçbiri bir devlet rengi değil)
    # ⇒ `§1.5`teki "renk" sayısı sekiz yıldır değil ama bugüne kadar 8 FAZLAYDI.
    # 📌 Ve bunu bulan şey yeni bir denetim değil, aşağıdaki renk KOVASIYDI:
    #   sekizi "ölü renk" diye raporladı, bakıldı, hiçbiri renk değilmiş.
    #   `§11`: *"kendi yazdığın ayrıştırıcı, var olan bir ayrıştırıcıdan her
    #   zaman kötüdür"* — çare regex'i düzeltmek değil, BIRAKMAK oldu.
    # ⚠️ `renkler` içe aktarılıyor: dosyaya YAZMADIĞI ölçüldü (0 eşleşme),
    #   ama içe aktarımda TANI MESAJI BASIYOR — tabloyu kirletmesin diye
    #   stdout geçici olarak yutuluyor.
    import contextlib
    with contextlib.redirect_stdout(io.StringIO()):
        import renkler
    boyalar = set(renkler.BOYALAR)
    o["renk"] = len(boyalar)
    # ═══ RENK EKSENİ — `§8`in TERS SINIFI, 2 Eylül 2026'da eklendi ═══
    # Yukarıdaki ölçüm VERİDEN başlıyor: "kullanılan ama dizinsiz kimlik".
    # Bu ise RENKTEN başlıyor: "rengi olan ama dizinsiz kimlik".
    # İkisi AYNI SORU DEĞİL ve kümeleri de aynı değil:
    #   · renksiz + künyesiz + kullanılan  → yalnız üstteki bulur
    #   · renkli  + künyesiz + KULLANILMAYAN → yalnız buradaki bulur (🟡 ölü renk)
    # Doğuran vaka: üç dosya bağlandı, RENK kontrol edildi (`§8`: renksiz
    # kimlik boyanmaz) ama KÜNYE kontrol edilmedi ⇒ dizinde görünmeyen
    # üç kimlik çizilmeye başladı (apaci-ovalar · komanci · farukiler),
    # dördüncüsü (panama-cumhuriyeti) 16 Ağustos'tan beri açıktı.
    # ⚠️ `harita:` TAKMA ADLARI HARİÇ — `diz` kümesi onları zaten içeriyor.
    #   Hariç tutulmazsa `hicaz`/`suud` gibi kimlikler SAHTE ALARM verir:
    #   künye `id`leri yoktur ama bir künye onlara `harita:` ile işaret eder.
    #   Ölçüldü: süzgeç kapatılınca 6 sahte alarm doğuyor.
    o["renk_kunyesiz"], o["renk_olu"] = renk_kovalari(boyalar, diz, kul)
    o["padisah"] = len(re.findall(r'\{\s*id:\s*"', _oku("data/padisahlar.js")))
    o["portre"] = len(glob.glob("assets/portreler/*.jpg"))
    o["kart"] = len(re.findall(r"\bovgu:", _oku("data/padisahlar.js") + _oku("data/kisiler.js")))

    m = re.search(r"^BOLGE\s*=.*$", _oku("arac/uret_petek.py"), re.M)
    o["bolge"] = m.group(0).split("=", 1)[1].strip() if m else "?"

    # denetle.py'nin kendi hükümleri — yeniden hesaplamıyoruz, ONA soruyoruz
    try:
        c = subprocess.run([sys.executable if "py" not in sys.executable else "py",
                            "arac/denetle.py"], capture_output=True, timeout=900)
        cik = (c.stdout or b"").decode("utf-8", "replace")
    except Exception:
        cik = ""
    for ad, anahtar in (("d1", r"Değişmez 1 .*?(✓|✗)\s*(.*)"),
                        ("d1b", r"Değişmez 1b\s*(✓|✗)\s*(.*)"),
                        ("d2", r"Değişmez 2 \s*(✓|✗)\s*(.*)"),
                        ("d2s", r"Değişmez 2s\s*(✓|✗)\s*(.*)"),
                        ("d2i", r"Değişmez 2i\s*(✓|✗)\s*(.*)"),
                        ("d2t", r"Değişmez 2t\s*(✓|✗)\s*(.*)"),
                        ("konum", r"konum:\s*(.*)")):
        mm = re.search(anahtar, cik)
        o[ad] = (" ".join(mm.groups())).strip() if mm else "ölçülemedi"

    try:
        o["surum"] = re.search(r"\?v=(r\d+)", _oku("index.html")).group(1)
    except Exception:
        o["surum"] = "?"
    try:
        o["commit"] = subprocess.check_output(["git", "rev-parse", "--short", "HEAD"]).decode().strip()
    except Exception:
        o["commit"] = "?"
    return o


def tablo(o):
    s = []
    s.append("| Katman | Ölçülen durum |")
    s.append("|---|---|")
    s.append("| Yerleşim (motorun okuduğu) | **%d** nokta, %d girdi dosyası |"
             % (o["yerlesim"], o["girdi_dosya"]))
    s.append("| Kronoloji | **%d** madde · %d duygu etiketli · %d `yer_id` · %d `vefat_id` |"
             % (o["madde"], o["duygu"], o["yer_id"], o["vefat_id"]))
    s.append("| Değişmez 1 — sahipsizlik | %s |" % o["d1"])
    s.append("| Değişmez 1b — iç boşluk | %s |" % o["d1b"])
    s.append("| Değişmez 2 — Osmanlı senkronu | %s |" % o["d2"])
    s.append("| Değişmez 2s — yabancı senkron | %s |" % o["d2s"])
    s.append("| Değişmez 2i — işgal senkronu | %s |" % o["d2i"])
    s.append("| Değişmez 2t — kırılmasız madde | %s |" % o["d2t"])
    s.append("| Konum denetimi | %s |" % o["konum"])
    s.append("| Devletler dizini | **%d** künye · **%d** renk (`renkler.py`) |"
             % (o["devlet"], o["renk"]))
    # ⚠️ KAPSAM SATIRIN YANINDA YAZILIR. ÇAPRAZ AKDENİZ (6 Ağustos) haklı
    # olarak uyardı: bu sayı "BUGÜN HARİTADA BOYANAN" sorusunun cevabı.
    # `ek10-12` merge edilince başka bir sayı olur (47/365). İki sayı da
    # doğru, ama AYNI SORUNUN cevabı değil — kapsam yazılmazsa okuyan
    # hangisini gördüğünü bilmez.
    # 🔴 İMLEÇ ŞARTA BAĞLANDI — eskiden SABİT 🔴 idi ve o zaman doğruydu:
    # satır hiç sıfır olmamıştı. `__BOSLUK__` kendi kovasına çıkınca sayı
    # 0'a düştü ve "🔴 0 kimlik" diye okunaksız bir satır çıktı.
    # 📌 Küçük ama gerçek: bir gösterge, ölçtüğü şey sıfırlanabilir hâle
    #   gelince yalan söylemeye başlar. Kovayı ayırmak imleci de bozdu.
    s.append("| Dizinsiz harita kimliği | %s **%d** kimlik / %d pencere "
             "karşılıksız · *kapsam: `girdi.py`nin okuduğu %d dosya, `s:`+`isg:` "
             "alanları — bağlanmamış partiler HARİÇ* |"
             % ("🔴" if o["kimlik_eksik"] else "✓",
                o["kimlik_eksik"], o["kimlik_eksik_pencere"], o["girdi_dosya"]))
    # 🟡 KASITLI BOŞLUK — kusur DEĞİL ama SAYILIR. Elenirse deyim görünmez
    # olur; sayılırsa yanlış yere yazıldığında görünür.
    s.append("| Kasıtlı boşluk kimliği | %s **%d** kimlik / %d pencere · "
             "*`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın "
             "kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |"
             % ("🟡" if o["kasitli_bosluk"] else "✓",
                o["kasitli_bosluk"], o["kasitli_bosluk_pencere"]))
    # KAPSAM YİNE SATIRIN YANINDA: bu ölçüm RENKTEN başlar, üstteki VERİDEN.
    # İkisi ayrı soru; tek satıra sıkıştırmak hangisinin görüldüğünü gizler.
    s.append("| Renkli-künyesiz kimlik | %s **%d** çiziliyor ama dizinsiz%s · "
             "*kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |"
             % ("🔴" if o["renk_kunyesiz"] else "✓",
                len(o["renk_kunyesiz"]),
                (" · 🟡 %d ölü renk (kullanılmıyor)" % len(o["renk_olu"]))
                if o["renk_olu"] else ""))
    s.append("| Padişah · kartvizit | %d kayıt · %d portre · **%d** kartvizit dolu |"
             % (o["padisah"], o["portre"], o["kart"]))
    s.append("| Harita penceresi | `%s` |" % o["bolge"])
    s.append("| Yayın | **%s** · `%s` |" % (o["surum"], o["commit"]))
    return "\n".join(s)


if __name__ == "__main__":
    if "--sina" in sys.argv:          # C13 — I/O'suz, saf fonksiyon üstünde
        raise SystemExit(_sina())
    o = olc()
    t = tablo(o)
    print(t)
    if o["kimlik_eksik_ad"]:
        print("\n🔴 DİZİNSİZ KİMLİK: %s" % ", ".join(o["kimlik_eksik_ad"]))
    if o["renk_kunyesiz"]:
        print("\n🔴 RENKLİ-KÜNYESİZ (çiziliyor, dizinde yok): %s"
              % ", ".join(o["renk_kunyesiz"]))
    if o["renk_olu"]:
        print("🟡 ÖLÜ RENK (dizinsiz ama veride kullanılmıyor): %s"
              % ", ".join(o["renk_olu"][:20]))
    if "--yaz" in sys.argv:
        y = "CLAUDE.md"
        h = _oku(y)
        nl = "\r\n" if "\r\n" in h else "\n"
        # §1.5 basligindan sonraki ILK tabloyu degistir
        m = re.search(r"(## 1\.5 [^\r\n]*(?:\r?\n)+)((?:\|[^\r\n]*(?:\r?\n))+)", h)
        if not m:
            raise SystemExit("!! §1.5 tablosu bulunamadi — elle bakilmali")
        yeni = m.group(1) + t.replace("\n", nl) + nl
        io.open(y, "w", encoding="utf-8", newline="").write(h[:m.start()] + yeni + h[m.end():])
        print("\nCLAUDE.md §1.5 guncellendi.")
