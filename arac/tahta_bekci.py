# -*- coding: utf-8 -*-
"""tahta_bekci.py — OTURUMU TAHTADAN UYANDIRAN NÖBETÇİ.

🔴 DOĞURAN ÖLÇÜM — Emre, 15 Ağustos 2026:
    "Nerede uyandırıyor, hepsini BEN dürtüyorum, `*mgy` yazıyorum.
     Adlarını da ben verdim."

Ve koordinatör aynı mesajda İKİ yanlış çıkarım yapmıştı: oturumların
uyandığını ve adlarını aldığını ÖLÇTÜ, sebebini `send_message`'a yazdı.
İkisini de Emre yapmıştı. ⇒ *"ölçüm doğru, çıkarım yanlış"* — bu proje
o hatayı bir günde altı kez kaydetti, sonra bir mesajda iki kez tekrarladı.

🟢 TEŞHİS OPUS HAZIR KITA 6'NIN (M-0066) ve tam yerinden vuruyor:
    "Bir oturum ancak KENDİSİNE BİR TUR GELİNCE uyanır. Tahtaya düşen
     mesaj bir tur DEĞİLDİR. Yani 'her tur başında tahtayı oku' kuralı
     doğru ama EKSİK — tur gelmiyorsa kural hiç işlemez."

⇒ Kural değil ALET gerekiyordu. Bu, o oturumun kendi scratchpad'inde
yazıp çalıştırdığı bekçinin depoya taşınmış hâlidir. Kendi sözü:
*"Bunu bir alet olarak arac/ altına koymak yerine her yeni oturumun
açılışta kurması daha sağlam: bir betik unutulur, brifing satırı
unutulmaz."* — ikisi de yapıldı: alet burada, satır şartnamelerde.

────────────────────────────────────────────────────────────────────────
🔴🔴 KULLANIM — **KAPI ÖNEMLİ, ALET DEĞİL.** Ölçüldü 16 Ağustos 2026.

    Monitor aracı:  py arac/tahta_bekci.py --kim "NOKTA HALKA 1"
                    description: "tahta mesajları"  ·  persistent: true

**Bu betiği MONITOR aracıyla kur. Kabuğun arka planına ATMA.**

```
Monitor              her stdout SATIRINI ayrı bildirim yapar
                     ⇒ süreç KOŞARKEN uyandırır       ✅ DOĞRU KAPI
Bash run_in_background  YALNIZ süreç BİTİNCE bildirir
                     ⇒ sonsuz döngü = HİÇ bildirim    ❌ hiç uyandırmaz
```
Ve bu Monitor'ün kendi belgesinde yazılıdır: *"Each stdout line is an
event"* · *"a single completion notification when it exits"*.

⚠️ `--cik` bayrağı YALNIZ kabuk arka planına mecbur kalınırsa: ilk
mesajda çıkar, oturum uyanır, ama **çıkışla yeniden kurma arasındaki
boşlukta düşen mesajlar KAÇAR.** Monitor'de böyle bir boşluk yoktur —
bu yüzden varsayılan ÇIKMAMAKTIR.

────────────────────────────────────────────────────────────────────────
🔴 İKİ TUZAK — ikisi de ÖLÇÜLDÜ, ikisi de burada kapalı

**① ADRES TUZAĞI.** `tahta.py:331` TAM EŞİTLİK arar. "HAZIR KITA 6" diye
yazılan mesaj, tam anahtarı "OPUS HAZIR KITA 6" olan oturuma ULAŞMAZ —
ve yazan taraf *"yazıldı"* cevabı alır. Bekçi bunu ayrı bir kovada
bağırır: `[ADRES-TUZAGI]`. Tuzak artık SESSİZ değil — bu uyarı `--toplu`
dahil HER MODDA ANINDA basılır, biriktirilmez.

**② NÖBETÇİNİN KENDİ ÖLÜMÜ.** O bekçi İLK GERÇEK MESAJINDA öldü:
Windows konsolu cp1254, gövdedeki `①` karakteri `UnicodeEncodeError`
attı, betik çıkış kodu 1 ile düştü. **Yani alarm ÖTERKEN öldü** — ve o
ana kadarki tek görevi ötmekti.
📌 Dersi kendi sözüyle: *"bir nöbetçinin ÇALIŞMASI ile ALARM ANINDA
çalışması ayrı şeylerdir. Benimki 76 mesaj boyunca sorunsuz koştu ve ilk
gerçek işinde öldü — çünkü sınadığım şey SESSİZ yoldu."*
⇒ Burada iki savunma var: stdout utf-8'e çevriliyor **ve** her basım
`_bas()` içinden geçiyor; utf-8 tutmazsa ASCII'ye düşerek yine basıyor.
**Alarm SUSMAZ.**

────────────────────────────────────────────────────────────────────────
🔴🔴 KULLANIM — 17 EYLÜL 2026 SADELEŞTİRME (`KADRO-1010-1015.md` ARAC-BEKCI,
Sonnet hazır kıta 1010). Eski `--genis`/`--herkes-acil`/`--durdurucu-da`
katmanı (dar-varsayılan + broşürlü açma bayrakları) ölçüldü ve gereksiz
karmaşıklık çıktı: kimse `--genis` vermeden HERKES'i hiç görmüyordu, ve
`--durdurucu-da` yalnız o dar hâlin bir deliğiydi.

🟢 YENİ VARSAYILAN (bayraksız):
    UYANDIRIR   `kime` == ADIN (defter takma adları dahil)  VEYA  `HERKES`
    UYANDIRMAZ  başka bir ada yazılmış her mesaj — satır BASMAZ

    py arac/tahta_bekci.py --kim "SONNET HAZIR KITA 1010"

Eski bayraklar hâlâ KABUL EDİLİR (argv'de bulunmaları hata vermez) ama
anlamları değişti — artık VARSAYILANI genişletmiyor, onun üstüne İSTEĞE
BAĞLI bir SÜZGEÇ ekliyor:
    --herkes-acil   🔴 artık NO-OP — 22 Eylül 2026'da VARSAYILAN oldu:
                    HERKES yayını yalnız ACİL/DURDURUCU ise uyandırır
    --herkes-hepsi  eski davranışı geri getirir (her HERKES uyandırır)
    --dosyam <yol>  HERKES yayınının GÖVDESİNDE bu yol geçmiyorsa süzer
                    (ACİL/DURDURUCU yine geçer) · `kime` alanında bu yol
                    geçen mesaj HER ZAMAN doğrudan adres sayılır
    --genis         🔴 artık NO-OP — varsayılan zaten HERKES'i kapsıyor
    --durdurucu-da  🔴 artık NO-OP — DURDURUCU zaten `_acil` içinde geçiyor

🟢 `--toplu <SANİYE>` — KOORDİNATÖR İÇİN TOPLU MOD (M-4419 türü kullanım:
`--kim 1.MURAT --toplu 1800`). Anlık `🔔` satırı basmaz; eşleşen mesajları
bir HAVUZ'da biriktirir ve en çok SANİYE'de bir TEK özet satırı basar:
    [BEKCI] 3 yeni: M-4422 SONNET HAZIR KITA 1012 · M-4423 ... · M-4424 ...
Pencere kapanırken havuz BOŞSA hiçbir şey basılmaz (sessiz) — "mesaj
yoksa hiç basmaz" kuralı `--toplu`ya da uygulanır.

────────────────────────────────────────────────────────────────────────
🔴🔴 KULLANIM — 18 EYLÜL 2026 STDOUT/STDERR AYRIMI (1.MURAT'ın ARAC-BEKCI
ek işi, kök sebep Emre'nin şikâyeti). ÖLÇÜLEN KUSUR: Monitor SADECE
stdout'u bildirim yapıyor, ve bekçinin AÇILIŞ BANNER'I ("[BEKCI]
nöbette…") da stdout'a basıyordu — yani her ilk kurulumda süreç HİÇBİR
gerçek mesaj gelmemişken bile bir bildirim üretiyordu, oturum uyanıp
"bekliyorum" yazıyor, Monitor 30 dakikada bir zaman aşımına uğrayıp
yeniden kuruluyor ve döngü SÜREKLİ tekrarlıyordu. Bekçinin TEK görevi
gerçek bir mesaj gelince uyandırmaktı; banner bunu ihlal ediyordu.

🟢 ÇÖZÜM — İKİ KANAL AYRILDI:
    STDOUT   YALNIZ gerçek mesaj içeriği — Monitor bunu bildirim yapar.
             Mesaj yoksa stdout TAMAMEN SESSİZDİR (banner da dahil hiç
             satır yok).
    STDERR   açılış banner'ı, defter okunamadı uyarısı, ADRES-TUZAĞI
             uyarısı, "tur bitti"/"çıkıyorum" durum satırları — hepsi
             BİLGİ/TEŞHİS, gerçek mesaj DEĞİL. Monitor'ün kendi belgesi:
             "Stderr goes to the output file (readable via Read) but
             does not trigger notifications." Kaybolmuyor, sadece
             UYANDIRMIYOR.
Uyandırma satırı artık TEK SATIR ve kısa: `M-xxxx <kimden> → <kime>:
<ilk 120 karakter>` — eski `🔔 [TAHTA] … \n   …` iki satırlı biçimi
kaldırıldı (Monitor'ün "tek stdout satırı = tek bildirim" modeliyle daha
uyumlu, ve ekran/log daha kısa).

⚠️ **Monitor `timeout_ms` en çok 1.800.000 ms (30 dk); süre dolunca
SESSİZCE yenilenir** — bu bir arıza değil, aracın kendi tavanı. İŞSİZ
BİR OTURUM BEKÇİ KURMAZ, DURUR: koordinatör bir mesaj yazdığında oturum
zaten (cross-session mesajıyla ya da bir sonraki göreve atanarak)
uyanır; boşta beklerken 30 dakikada bir "nöbetçi kuruldu, bekliyorum"
yazıp yeniden Monitor kurmak, tam bu belgenin düzelttiği döngüyü BAŞKA
BİR KATMANDA yeniden üretir.
"""
import io
import json
import os
import re
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
# 🔴 SINAMA DİKİŞİ: `--tahta` ile başka bir dosya verilebilir.
# Sebep `C13`: ateşleme dalı gerçek tahtada zorlanamaz — yeni mesaj
# beklemek ölçüm değil ŞANStır, ve tahtaya SAHTE mesaj yazmak kanalı
# kirletir. Zorlanamayan dal, denetimsiz daldır.

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass
try:
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass


def _bas(s):
    """🔴 GERÇEK MESAJ — STDOUT. Monitor bunu bildirim yapar; İKİ SAVUNMA:
    nöbetçi kendi çıktısında ÖLEMEZ (bkz. dosya başı KULLANIM, vaka ②)."""
    try:
        print(s, flush=True)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"), flush=True)
        except Exception:
            print("[BEKCI] mesaj basilamadi ama VAR", flush=True)


def _diag(s):
    """🔴 BİLGİ/TEŞHİS — STDERR. Banner, uyarı, durum satırları buradan
    geçer: Monitor stderr'i bildirime çevirmez (dosya başı KULLANIM,
    18 Eylül 2026 ayrımı) — kaybolmaz, sadece UYANDIRMAZ."""
    try:
        print(s, file=sys.stderr, flush=True)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"),
                  file=sys.stderr, flush=True)
        except Exception:
            pass


def _sade(s):
    for a, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                 ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                 ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        s = (s or "").replace(a, b)
    return " ".join(s.upper().split())


def _oku():
    try:
        d = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return []
    return d if isinstance(d, list) else (d.get("mesajlar") or [])


def _no(x):
    try:
        return int(str(x or "M-0").split("-")[-1])
    except ValueError:
        return 0


# ==================== TAHTA SUNUCUSU (TAHTA-WEB-1004) ====================
# 🔴 Bekçi artık tahtayı SUNUCUDAN okur (`arac/tahta_sunucu.py`): her turda
#   yalnız `son_no`dan SONRAKİ mesajlar gelir — 17 MB'lık dosyayı 60 sn'de
#   bir okumak yerine birkaç yüz bayt. İstemci kodu TEK yerde: `tahta._istek`.
# 🔴 DÜŞÜŞ BEYANLI: sunucuya ulaşılamazsa yerel dosyaya düşer ve bunu
#   STDERR'e basar (uyandırmaz — bekçi sessiz olmak ZORUNDA, §7.2 ④) +
#   nabız damgasına `kaynak: "yerel"` yazar; `bekci_olc.py` okuyabilir.
#   Yalnız HÂL DEĞİŞİNCE basar (sunucu→yerel, yerel→sunucu), her turda değil.
# ⚠️ `--tahta <yol>` verilmişse (SINAMA DİKİŞİ) sunucuya HİÇ sorulmaz —
#   eski sınavlar yerel dosya bekliyor ve bekler.
_KAYNAK = {"son": None, "yerel_zorla": False}


def _getir(son):
    """(son'dan SONRAKİ mesajlar, en büyük no, kaynak). `son`=None ⇒ yalnız
    en büyük numarayı öğren (mesaj döndürmez)."""
    if not _KAYNAK["yerel_zorla"]:
        try:
            sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
            import tahta as _T
            r, sebep = _T._istek("GET", "/tahta/oku", sorgu={
                "hepsi": 1,
                "son_no": str(son) if son else "",
                "limit": "0" if son is None else ""})
        except BaseException as e:            # istemci bekçiyi DÜŞÜREMEZ
            r, sebep = None, "%s: %s" % (type(e).__name__, e)
        if r is not None and r.get("tamam"):
            if _KAYNAK["son"] == "yerel":
                _diag("[BEKCI] 🟢 sunucuya yeniden ulaşıldı — tahta SUNUCUDAN okunuyor.")
            _KAYNAK["son"] = "sunucu"
            return r.get("mesajlar") or [], int(r.get("son_no") or 0), "sunucu"
        if _KAYNAK["son"] != "yerel":
            _diag("[BEKCI] ⚠️ SUNUCUYA ULAŞILAMADI — YEREL okunuyor, çatışma "
                  "riski GERİ DÖNDÜ · sebep: %s" % (sebep or (r or {}).get("sebep")))
        _KAYNAK["son"] = "yerel"
    else:
        _KAYNAK["son"] = "yerel"
    tum = _oku()
    en = max([_no(m.get("no")) for m in tum] or [0])
    if son is None:
        return [], en, "yerel"
    return [m for m in tum if _no(m.get("no")) > son], en, "yerel"


def _defter_adlari(benler):
    """🔴 BU PROJEDE ATAMA = YENİDEN ADLANDIRMADIR.

    Bir oturum iş aldığı anda adı değişiyor, ama bekçisi ESKİ adı
    dinlemeye devam ediyor ⇒ yeni adla yazılan görev mesajı ULAŞMIYOR.

    DOĞURAN VAKA (16 Ağustos 2026): koordinatör beş oturumu birden yeniden
    adlandırdı (M-0115). `NOKTA SİBİRYA 2` görevini aldı ama bekçisi
    `OPUS HAZIR KITA 6` adını dinliyordu; mesajı ELLE arayarak buldu.
    📌 Ve o oturum, adres tuzağını HERKESE bildiren oturumun ta kendisiydi
    (M-0062). **Uyarıyı yazan, kurbanı oldu.**

    ⇒ Defterdeki `takma_adlar` zaten bu bilgiyi tutuyordu; bekçi ona
    hiç sormuyordu. Artık soruyor: verilen adlardan biri bir kaydı
    tutturuyorsa, O KAYDIN BÜTÜN ADLARI dinlenir.
    ⚠️ Defter okunamazsa SESSİZCE geçilir — bekçi defter yüzünden ÖLMEZ,
    ama o zaman yalnız elle verilen adları dinler (`_bas` ile söyler).
    """
    yol = os.path.join(KOK, "oturumlar", "defter.json")
    try:
        d = json.load(io.open(yol, encoding="utf-8"))
    except Exception:
        return benler, False
    ks = d.get("oturumlar") or d
    if isinstance(ks, dict):
        ks = list(ks.values())
    if not isinstance(ks, list):
        return benler, False
    out = set(benler)
    for o in ks:
        if not isinstance(o, dict):
            continue
        adlar = {_sade(o.get("ad"))}
        for t in (o.get("takma_adlar") or []):
            adlar.add(_sade(t))
        adlar.discard("")
        if adlar & out:
            out |= adlar
    return out, True


# ====================== NABIZ DAMGASI (3 Ekim 2026) ======================
# 🔴 VAKA: ODAK-KAPAT'in bekcisi CIKIS 4 ile dustu — `main()` yalniz 0/2/3
#   donuyor, kodda `return 4` YOK ⇒ sureci DISARIDAN dusuruldu. Oturum 9
#   saat uyanmadi. Koordinator sessizligi "isci takildi" diye okudu ve
#   gereksiz bir uyandirma turu yakti.
# ⇒ KOK KUSUR: olu bekci ile SESSIZ bekci AYIRT EDILEMIYOR. Bekci sessiz
#   olmak ZORUNDA (§7.2 ④ — bos uyanis dolu turdan ucuz degil), o yuzden
#   care "konussun" DEGIL: iz BIRAKSIN. Damga dosyaya yazilir, kimseyi
#   uyandirmaz, ve `arac/bekci_olc.py` ile OLCULUR.
# ⚠️ `.bekci_son_<AD>.txt` bu ise YARAMAZ: o yalniz `--cik` ile cikista
#   yazilir, yani "son NABIZ" degil "son OLUM" damgasidir. Ters bilgi.
# 🔴 DAMGA PAYLASILMAZ — `oturumlar/bekci/` gitignore'da. Icinde PID ve
#   makineye ozel canlilik var; commitlenirse EMRELIC, KASA'nin BAYAT
#   damgasini okuyup "bekci canli" sanar. Yanlis alanla olcmek, olcmemekten
#   daha tehlikelidir: sayi verir ve guven telkin eder.
# ⚠️ DIZIN MODUL DUZEYINDE DONDURULMAZ: `main()` içinde `global TAHTA` ile
#   (`--tahta` bayrağı) yeniden atanabiliyor. Modül yüklenirken hesaplanan bir
#   yol o anda BAYATLAR ve nabız YANLIS dizine düşer — damga yazılır, ölçen
#   araç onu bulamaz, bekçi "ölü" görünür. Her çağrıda TAHTA'dan türetilir.
def _nabiz_dizin():
    return os.path.join(os.path.dirname(os.path.abspath(TAHTA)), "bekci")


def _nabiz_yol(kim):
    d = _nabiz_dizin()
    try:
        if not os.path.isdir(d):
            os.makedirs(d)
    except OSError:
        return None
    return os.path.join(d, re.sub(r"[^A-Za-z0-9]+", "_", kim or "?") + ".json")


def _nabiz_yaz(kim, durum, tur_no=0, ara=0, benler=None, sebep="", kaynak=None):
    """Her turda tek satir JSON. ASLA istisna firlatmaz — nabiz damgasi
    bekciyi DUSURMEMELI; teshis arac olmaktan cikip ariza kaynagi olur."""
    y = _nabiz_yol(kim)
    if not y:
        return
    try:
        io.open(y, "w", encoding="utf-8").write(json.dumps({
            "ad": kim,
            "durum": durum,          # nobette | cikti
            "sebep": sebep,          # cikisin sebebi (durum=cikti ise)
            "pid": os.getpid(),
            "zaman": time.strftime("%Y-%m-%d %H:%M:%S"),
            "damga": int(time.time()),
            "tur": tur_no,
            "ara": ara,
            "dinlenen": sorted(benler) if benler else [],
            "kaynak": kaynak or _KAYNAK.get("son") or "?",   # sunucu | yerel
        }, ensure_ascii=False))
    except Exception:
        pass
# ===================== /NABIZ DAMGASI ====================================


def main(argv):
    if "--kim" not in argv:
        _diag("kullanim: py arac/tahta_bekci.py --kim \"<TAM ADIN>\"")
        _diag("  --kim birden cok kez verilebilir; virgulle de ayrilabilir.")
        _diag("  🔴 TAM anahtarini yaz — tahta TAM ESITLIK ariyor.")
        return 2
    # 🔴 ÇOKLU AD — `--kim` birden çok kez ya da virgüllü verilebilir.
    ham = [argv[i + 1] for i, a in enumerate(argv)
           if a == "--kim" and i + 1 < len(argv)]
    # 🔴🔴 29 EYLÜL 2026 — KAYNAK DARBOĞAZI KAPISI (Emre'nin kararı).
    # O gün ölçüldü: RAM 11,9 GB, BOŞ 0,69 GB, pagefile 5.824 MB kullanımda.
    # Koordinatör dört boş kıtanın bekçisini DIŞARIDAN öldürdü; dördü de
    # `HAZIR-KITA.md §2`ye uyup sessizce YENİDEN KURDU — ve haklıydılar.
    # ⇒ Süreci öldürmek talimatı değiştirmez. Karar, bekçinin KENDİ okuduğu
    #   bir yere yazılmalı. Otorite `oturumlar/KAYNAK-DURUM.json`dur.
    # Çıkış 3 = "kurulamadı, TEKRAR DENEME" (2 kullanım hatası, 1 arıza).
    # ⚠️ Kapalıya DÜŞMEZ: dosya yoksa/bozuksa yasak YOKTUR — bir arızanın
    #   bütün ekibi bekçisiz bırakması, bir turluk RAM'den pahalıdır.
    try:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        import kaynak_durum as _kd
        _yasak, _niye = _kd.bekci_yasak_mi(ham[0] if ham else "")
        if _yasak:
            _diag(_niye)
            return 3
    except Exception:
        pass
    benler = {_sade(x) for a in ham for x in a.split(",") if _sade(x)}
    kim = ham[0] if ham else "?"
    if "--tahta" in argv:
        global TAHTA
        TAHTA = argv[argv.index("--tahta") + 1]
        _KAYNAK["yerel_zorla"] = True         # sınama dikişi: sunucuya sorma
    ara = float(argv[argv.index("--ara") + 1]) if "--ara" in argv else 60.0
    tur = int(argv[argv.index("--tur") + 1]) if "--tur" in argv else 0
    # 🔴 BAYRAK 16 Ağustos'ta TERSİNE ÇEVRİLDİ. Eski hâli `--surekli`ydi ve
    # varsayılan ÇIKMAKtı; o karar YANLIŞ KAPIYA göre verilmişti (aşağıya
    # bak). Doğru kapı Monitor'dür ve orada çıkmak zarardır — çıkışla
    # yeniden kurma arasındaki boşlukta mesaj KAÇAR.
    # `--surekli` eski adıyla kabul ediliyor ki eski çağrılar bozulmasın.
    cik = "--cik" in argv and "--surekli" not in argv
    # 🔴 17 Eylül 2026 SADELEŞTİRME (bkz. dosya başı KULLANIM notu):
    #   VARSAYILAN artık `kime`==ADIN (defter dahil) VEYA `kime`==HERKES.
    #   Eskiden HERKES'i görmek için `--genis` gerekiyordu; `--genis` ve
    #   `--durdurucu-da` artık NO-OP (kabul edilir, hatasız geçer, ama
    #   davranışı değiştirmez) — çünkü varsayılan zaten onların eski
    #   işini yapıyor. `--herkes-acil` ve `--dosyam` hâlâ ANLAMLI: ikisi
    #   de HERKES yayınını daha da DARALTAN isteğe bağlı süzgeçlerdir.
    herkes_acil = "--herkes-acil" in argv      # 🔴 ARTIK NO-OP: varsayılan
    # 🔴🔴 22 EYLÜL 2026 — `--herkes-acil` VARSAYILAN OLDU, bayrak NO-OP'a
    # düştü (kabul edilir, hata vermez, davranışı değiştirmez). Sebebi
    # yukarıdaki HERKES bloğunda ölçüsüyle yazılı: bilgi amaçlı bir
    # duyuru, uyandırdığı her oturuma TAM BİR BAĞLAM bedeli ödetiyor.
    # --herkes-hepsi: ESKİ davranış — her HERKES yayını uyandırır. Yalnız
    #   gerçekten her duyuruyu beklemesi gereken oturum kullanır.
    herkes_hepsi = "--herkes-hepsi" in argv
    # --dosyam <yol>: (a) `kime` alanında bu yol geçen mesaj DOĞRUDAN
    #   adres sayılır (her hâlde uyandırır) — (b) verilmişse HERKES
    #   yayınları GÖVDESİNDE bu yol geçmiyorsa süzülür (ACİL/DURDURUCU
    #   yine geçer). Tarihçe: dosya başı KULLANIM notu · eski satır içi
    #   gerekçe M-0503 vakasıydı (adres tuzağının yedincisi).
    dosyam = (argv[argv.index("--dosyam") + 1]
              if "--dosyam" in argv else "")
    # --toplu <SANİYE>: anlık 🔔 yerine tek özet satırı, en çok bu kadar
    # sıklıkla; havuz boşsa hiç basmaz. Bkz. dosya başı KULLANIM notu.
    toplu = (float(argv[argv.index("--toplu") + 1])
             if "--toplu" in argv else 0.0)

    if "--defter-yok" not in argv:
        benler, okundu = _defter_adlari(benler)
        if not okundu:
            _diag("[BEKCI] ⚠️ defter.json okunamadı — YALNIZ elle verilen "
                  "adlar dinleniyor. Adın değiştiyse mesaj KAÇAR.")

    # 🔴 TAHTA-WEB-1004: "görülen numaralar KÜMESİ" yerine "son görülen
    # numara". Sunucu numarayı tek elden ve artan verir ⇒ küme gereksiz;
    # üstelik küme için her turda bütün tahtayı (17 MB) okumak gerekiyordu.
    _, son, _ilk_kaynak = _getir(None)
    # 🔴 19 Eylül 2026 — `--cik` KABUK ARKA PLANINDA (Bash run_in_background)
    # varsayılan yol oldu: Monitor 30 dk'da bir SÜRESİ DOLUP oturumu boşuna
    # uyandırıyordu (Emre: "bekçi neden zırt pırt yeniden kuruluyor").
    # Arka plan kabuğunun süre tavanı yok → oturum YALNIZ mesajla uyanır.
    # Çıkış↔yeniden kurma arasında mesaj kaçmasın diye son görülen no
    # dosyada tutulur; yeniden kurulunca ondan SONRAKİLER yeni sayılır.
    son_dosya = os.path.join(os.path.dirname(os.path.abspath(TAHTA)),
                             ".bekci_son_" + re.sub(r"[^A-Za-z0-9]+", "_", kim) + ".txt")
    if cik and os.path.exists(son_dosya):
        try:
            son = int(open(son_dosya).read().strip() or 0)
        except (OSError, ValueError):
            pass
    # 🔴 BANNER — STDERR (18 Eylül 2026, bkz. dosya başı KULLANIM). Bu
    # satır gerçek bir mesaj DEĞİL; stdout'ta durursa Monitor onu her
    # kurulumda bir bildirim sayar ve boş nöbeti bile uyandırır.
    _diag("[BEKCI] nöbette · %d ad dinleniyor: %s · son görülen M-%04d (%s) · %.0f sn%s"
          % (len(benler), " | ".join(sorted(benler)), son, _ilk_kaynak, ara,
             (" · toplu:%.0f sn" % toplu) if toplu > 0 else ""))
    n = 0
    havuz = []
    son_toplu = time.time()
    # 🔴 ILK NABIZ time.sleep'ten ONCE — yoksa `ara`=1800 sn olan bir bekci
    #   yarim saat boyunca "hic kurulmamis" gorunur ve `bekci_olc.py` onu OLU
    #   sayar. Kurulumun kendisi de bir nabizdir.
    _nabiz_yaz(kim, "nobette", 0, ara, benler)
    while True:
        time.sleep(ara)
        n += 1
        _nabiz_yaz(kim, "nobette", n, ara, benler)
        yeni = []
        tuzak = []
        _gelen, _en, _ = _getir(son)
        son = max(son, _en)
        _nabiz_yaz(kim, "nobette", n, ara, benler)      # kaynak bu turun
        for m in _gelen:
            # 🔴 KENDİ MESAJIM BENİ UYANDIRMAZ (23 Eylül 2026, ölçülerek).
            # Vaka: koordinatör ACİL bir HERKES duyurusu yazdı; duyuru
            # bütün bekçileri uyandırdı — YAZANIN kendi bekçisi dâhil.
            # Oturum uyandı, gelen kutusunda kendi cümlesini buldu ve bir
            # tam turluk bağlam yaktı. Sekiz oturumun sekizi de yayın
            # yaptıkça bu leak sistematik olur.
            # 📌 Emre'nin 23 Eylül emrinin doğrudan karşılığı: "bekçiler
            #   kendilerine mesaj atılmadan asla kendi oturumlarını
            #   uyandırmayacaklar." Kendi yazdığın mesaj, sana atılmış bir
            #   mesaj DEĞİLDİR.
            # ⚠️ Tuzağa değil, kaynağa bakar: `kimden` benlerden biriyse
            #   mesaj görülmüş sayılır (bir daha da bakılmaz) ama hiçbir
            #   kovaya girmez — ne uyandırır, ne basar, ne teşhis düşürür.
            if _sade(m.get("kimden")) in benler:
                continue
            k = _sade(m.get("kime"))
            # 🔴 YENİ VARSAYILAN (17 Eylül 2026, bkz. dosya başı KULLANIM):
            #   `kime`==ADIN (defter dahil) VEYA `kime`==HERKES → uyandırır.
            #   Başka bir ada yazılmış hiçbir mesaj ne uyandırır ne basar.
            if k in benler:
                yeni.append(m)
            elif dosyam and dosyam.lower() in (m.get("kime") or "").lower():
                # DOSYA ADRESİ — `kime` alanında benim dosyam geçiyorsa
                # mesaj DOĞRUDAN bana yazılmış sayılır (adres tuzağının
                # yedinci vakası, M-0503; bkz. dosya başı KULLANIM notu).
                yeni.append(m)
            elif k == "HERKES":
                # 🔴🔴 22 EYLÜL 2026 — VARSAYILAN TERSİNE ÇEVRİLDİ.
                # Eskiden her HERKES mesajı HER oturumu uyandırıyordu.
                # Ölçüldü: son 30 tahta mesajının 3'ü HERKES'ti (%10) ve
                # ikisi SALT BİLGİ idi ("koşu bitti", "gc bitti, commit
                # serbest"). Her biri sekiz oturumu birden uyandırdı;
                # sekizi de bağlamını baştan okudu ve "bana iş yok" deyip
                # kapandı. Yani bir satırlık duyuru, sekiz tam turluk
                # bağlam bedeli ödetti.
                # ⇒ Artık HERKES yalnız ACİL/DURDURUCU ise uyandırır.
                #   Bilgi amaçlı duyuru TAHTAYA YAZILIR ve oturum onu
                #   KENDİ İŞİ İÇİN uyandığında okur — duyuru bir
                #   KÜTÜKTÜR, bir ALARM değil.
                # ⚠️ `--herkes-hepsi` eski davranışı geri getirir; bunu
                #   yalnız gerçekten her duyuruyu beklemesi gereken bir
                #   oturum (ör. koşu nöbetçisi) kullanır.
                # ⚠️ Ve yazana düşen: bir duyuru GERÇEKTEN herkesin işini
                #   durduruyorsa `--aciliyet ACIL` ile yazılır. Aciliyet
                #   artık bir süs değil, bir ANAHTAR.
                _t = m.get("mesaj") or ""
                _acil = _sade(m.get("aciliyet")) in ("ACIL", "DURDURUCU")
                if herkes_hepsi:
                    yeni.append(m)
                elif dosyam:
                    if dosyam in _t or _acil:
                        yeni.append(m)
                elif _acil:
                    yeni.append(m)
                else:
                    _diag("[BEKCI] %s HERKES/bilgi — UYANDIRMIYOR "
                          "(aciliyet '%s'). Kendi turunda okunacak."
                          % (m.get("no"), m.get("aciliyet") or "—"))
            elif k and any(b and (k in b or b in k) for b in benler):
                # ① ADRES TUZAĞI — kısmen tutuyor ama TAM eşit değil.
                # Başka bir ada yazılmış mesaj DEĞİL; bana yazılmaya
                # ÇALIŞILMIŞ bir mesaj — bu yüzden "başka hiçbir mesaj
                # uyandırmaz" kuralının dışında tutulur ve HER MODDA
                # (toplu dahil) anında bildirilir.
                tuzak.append(m)
        for m in tuzak:
            # 🔴 ADRES TUZAĞI da STDERR'e taşındı (18 Eylül 2026) — bu bir
            # BANA gelen mesaj değil, bana gelMEYEN bir mesajın teşhisi;
            # Monitor'ü uyandırmaya değmez, ama log'da (Read ile) durur.
            _diag("⚠️ [ADRES-TUZAGI] %s KIME='%s' — benim tam anahtarım '%s'. "
                  "Mesaj bana ULAŞMADI, yazan 'yazıldı' cevabı aldı."
                  % (m.get("no"), m.get("kime"), kim))
        if toplu > 0:
            # TOPLU MOD — anlık 🔔 yerine havuzda biriktir, pencere
            # kapanınca TEK özet satırı bas; havuz boşsa hiç basma.
            havuz.extend(yeni)
            if time.time() - son_toplu >= toplu:
                if havuz:
                    ozet = " · ".join(
                        "%s %s" % (mm.get("no"), mm.get("kimden"))
                        for mm in havuz)
                    _bas("[BEKCI] %d yeni: %s" % (len(havuz), ozet))
                havuz = []
                son_toplu = time.time()
        else:
            for m in yeni:
                # 🔴 TEK SATIR, KISA — 18 Eylül 2026 (`kim` DEĞİL `kimden`;
                # bkz. eski not, DEĞİŞMEZ 7 ENKLAV/M-1313). Gövde 120
                # karaktere kırpılır ki stdout'ta ASLA ikinci satıra
                # taşmasın — Monitor'ün "1 stdout satırı = 1 bildirim"
                # modeliyle uyumlu kalması bunu gerektiriyor.
                _bas("%s %s → %s: %s"
                     % (m.get("no"), m.get("kimden"), m.get("kime"),
                        (m.get("mesaj") or "")[:120]))
        # 🔴 HAVUZ KAÇAĞI — SINAMADA BULUNDU (17 Eylül 2026, ARAC-BEKCI).
        # Pencere kapanmadan süreç ÇIKARSA (`--tur` ya da `--cik`), o ana
        # kadar havuzda biriken eşleşmiş mesajlar hiç basılmadan gider —
        # ve yeniden kurulan bir bekçi onları "zaten görülmüş" sayıp bir
        # daha HİÇ bildirmez (`gorulen` dosyadan yeniden dolar). Her çıkış
        # yolundan önce havuzu BOŞALTIYORUZ, boşsa zaten hiçbir şey basmaz.
        if toplu > 0 and havuz and ((yeni or tuzak) and cik or (tur and n >= tur)):
            ozet = " · ".join("%s %s" % (mm.get("no"), mm.get("kimden"))
                               for mm in havuz)
            _bas("[BEKCI] %d yeni (çıkış öncesi boşaltma): %s"
                 % (len(havuz), ozet))
            havuz = []
        # 🔴🔴 ÇIKMAK YALNIZ Monitor DIŞINDA (kabuk arka planı) ANLAMLI —
        # bkz. dosya başı KULLANIM (Monitor'de çıkış = boşlukta mesaj kaçar).
        # Bu durum satırları da STDERR — gerçek mesaj değil, teşhis.
        if cik:
            try:
                with open(son_dosya, "w") as f:
                    f.write(str(son))
            except OSError:
                pass
        # 🔴🔴 22 EYLÜL 2026 — `tuzak` ÇIKIŞ SEBEBİ OLMAKTAN ÇIKARILDI.
        # Eskiden koşul `(yeni or tuzak) and cik` idi. Ölçülen sonuç:
        # ADRES TUZAĞI bir MESAJ DEĞİL, bir TEŞHİSTİR — kendi kodu bunu
        # zaten söylüyor: *"Mesaj bana ULAŞMADI"*. Yine de bekçiyi
        # düşürüyordu; oturum uyanıyor, gelen kutusunda KENDİNE AİT
        # HİÇBİR ŞEY bulamıyor, "benlik bir şey yok, bekçiyi yeniden
        # kuruyorum" yazıp kapanıyordu. Her böyle uyanış BÜTÜN BAĞLAMI
        # yeniden okur — yani boş bir uyanış, dolu bir turdan daha ucuz
        # DEĞİLDİR.
        # ⇒ Tuzak artık yalnız `_diag` ile stderr'e düşer (log'da durur,
        #   `Read` ile okunur) ve UYANDIRMAZ. Emre'nin kuralı yazılıydı
        #   ("bekçiler sessiz olsun"), uygulanmıyordu — çünkü kural
        #   insandaydı, ALET tersini yapıyordu.
        if yeni and cik:
            _diag("[BEKCI] mesaj var — ÇIKIYORUM ki oturum UYANSIN. "
                  "Yeniden kur: py arac/tahta_bekci.py --kim \"%s\"" % kim)
            _nabiz_yaz(kim, "cikti", n, ara, benler, "mesaj-var")
            return 0
        if tur and n >= tur:
            _diag("[BEKCI] %d tur bitti, çıkıyorum." % tur)
            _nabiz_yaz(kim, "cikti", n, ara, benler, "tur-doldu")
            return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
