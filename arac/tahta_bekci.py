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
bağırır: `[ADRES-TUZAGI]`. Tuzak artık SESSİZ değil.

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
"""
import io
import json
import os
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


def _bas(s):
    """🔴 İKİ SAVUNMA: nöbetçi kendi çıktısında ÖLEMEZ."""
    try:
        print(s, flush=True)
    except Exception:
        try:
            print(s.encode("ascii", "replace").decode("ascii"), flush=True)
        except Exception:
            print("[BEKCI] mesaj basilamadi ama VAR", flush=True)


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


def main(argv):
    if "--kim" not in argv:
        _bas("kullanim: py arac/tahta_bekci.py --kim \"<TAM ADIN>\"")
        _bas("  --kim birden cok kez verilebilir; virgulle de ayrilabilir.")
        _bas("  🔴 TAM anahtarini yaz — tahta TAM ESITLIK ariyor.")
        return 2
    # 🔴 ÇOKLU AD — `--kim` birden çok kez ya da virgüllü verilebilir.
    ham = [argv[i + 1] for i, a in enumerate(argv)
           if a == "--kim" and i + 1 < len(argv)]
    benler = {_sade(x) for a in ham for x in a.split(",") if _sade(x)}
    kim = ham[0] if ham else "?"
    if "--tahta" in argv:
        global TAHTA
        TAHTA = argv[argv.index("--tahta") + 1]
    ara = float(argv[argv.index("--ara") + 1]) if "--ara" in argv else 60.0
    tur = int(argv[argv.index("--tur") + 1]) if "--tur" in argv else 0
    # 🔴 BAYRAK 16 Ağustos'ta TERSİNE ÇEVRİLDİ. Eski hâli `--surekli`ydi ve
    # varsayılan ÇIKMAKtı; o karar YANLIŞ KAPIYA göre verilmişti (aşağıya
    # bak). Doğru kapı Monitor'dür ve orada çıkmak zarardır — çıkışla
    # yeniden kurma arasındaki boşlukta mesaj KAÇAR.
    # `--surekli` eski adıyla kabul ediliyor ki eski çağrılar bozulmasın.
    cik = "--cik" in argv and "--surekli" not in argv
    # `--herkes-acil`: HERKES yayınlarında yalnız ACIL/DURDURUCU olanlar
    # uyandırsın. Adına yazılan mesaj her hâlükârda uyandırır.
    herkes_acil = "--herkes-acil" in argv
    # --dosyam <yol>: HERKES yayınlarında yalnız GÖVDESİNDE bu yol
    # geçenler uyandırsın. ACİL olanlar yine geçer.
    dosyam = (argv[argv.index("--dosyam") + 1]
              if "--dosyam" in argv else "")

    if "--defter-yok" not in argv:
        benler, okundu = _defter_adlari(benler)
        if not okundu:
            _bas("[BEKCI] ⚠️ defter.json okunamadı — YALNIZ elle verilen "
                 "adlar dinleniyor. Adın değiştiyse mesaj KAÇAR.")

    gorulen = {m.get("no") for m in _oku()}
    _bas("[BEKCI] nöbette · %d ad dinleniyor: %s · %d mesaj görüldü · %.0f sn"
         % (len(benler), " | ".join(sorted(benler)), len(gorulen), ara))
    n = 0
    while True:
        time.sleep(ara)
        n += 1
        yeni = []
        tuzak = []
        for m in _oku():
            if m.get("no") in gorulen:
                continue
            gorulen.add(m.get("no"))
            k = _sade(m.get("kime"))
            # 🔴 HERKES SÜZGECİ — 16 Ağustos, Emre ölçtü:
            #   "Bir oturum sürekli 'bana değil, bekliyorum' diyor. Bu
            #    token yiyor mu? Nöbetçi bakması yemiyor demiştin ama
            #    her yazışta bütün bağlamı yeniden yakmıyor mu?"
            # 🟢 HAKLI, ve önceki cevabım EKSİKTİ:
            #   YOKLAMA (mesaj yok)  → hiçbir şey basmaz → 0 token   ✓
            #   MESAJ DÜŞTÜ          → TUR → BÜTÜN BAĞLAM yeniden okunur
            # ⇒ Bir `HERKES` yayını 18 oturumu birden uyandırıyor: biri
            #   gereğini yapıyor, on yedisi "bana değil" deyip uyuyor.
            #   YAYIN BAŞINA ≈ 18 BAĞLAM TURU.
            # ⇒ `--herkes-acil` verilirse HERKES yayınlarının yalnız
            #   ACIL olanları uyandırır. Adına yazılan mesaj HER ZAMAN
            #   uyandırır — süzgeç yalnız yayınları eler.
            # ⚠️ Varsayılan AÇIK DEĞİL: bir oturumun neyi kaçıracağına
            #   koordinatör değil KENDİSİ karar verir. Ölçülmemiş bir
            #   tasarrufu herkese dayatmak, kaçırılan mesaj pahasına
            #   token kazanmaktır.
            if k in benler:
                yeni.append(m)
            elif k == "HERKES":
                # 🔴 EMRE'NİN SORUSU (16 Ağustos) VE ONUN CEVABI:
                #   "Her oturum sadece belli bir dakikada bir tahtaya
                #    baksa ama hiçbir şey yazmasa, uyanmış olma
                #    gerçekleşmez mi? İlgilendirmeyen bir durum varsa
                #    hiç metin eklemesin. Bu mümkün mü?"
                # 🟢 MÜMKÜN — ama karar OTURUMDA DEĞİL BURADA verilmeli.
                #   Oturum "bana değil" dediğinde MASRAF ÖDENMİŞTİR:
                #   uyanmak = bir TUR = bütün bağlamın yeniden okunması.
                #   Cevap yazmamak yalnız İKİNCİ masrafı keser.
                # ⇒ Asıl kazanç HİÇ UYANMAMAK, ve onu ancak bekçi sağlar.
                #
                # ÜÇ SÜZGEÇ, en dardan en genişe:
                #   --dosyam  : yayının GÖVDESİNDE dosyam geçiyor mu
                #   --herkes-acil : yalnız ACIL/DURDURUCU yayınlar
                #   (hiçbiri) : bütün yayınlar — varsayılan
                _t = m.get("mesaj") or ""
                _acil = _sade(m.get("aciliyet")) in ("ACIL", "DURDURUCU")
                if dosyam:
                    # Gövdede dosyam anılıyorsa BENİ ilgilendiriyor.
                    # ⚠️ ACİL yayınlar dosya anılmasa da geçer — bir
                    # kilit ya da arıza duyurusu herkesi bağlar ve onu
                    # kaçırmak, kazanılan turdan pahalıdır.
                    if dosyam in _t or _acil:
                        yeni.append(m)
                elif not herkes_acil or _acil:
                    yeni.append(m)
            elif k and any(b and (k in b or b in k) for b in benler):
                # ① ADRES TUZAĞI — kısmen tutuyor ama TAM eşit değil
                tuzak.append(m)
        for m in yeni:
            _bas("🔔 [TAHTA] %s · %s → %s · %s\n   %s"
                 % (m.get("no"), m.get("kim"), m.get("kime"),
                    m.get("cins") or "", (m.get("mesaj") or "")[:400]))
        for m in tuzak:
            _bas("⚠️ [ADRES-TUZAGI] %s KIME='%s' — benim tam anahtarım '%s'. "
                 "Mesaj bana ULAŞMADI, yazan 'yazıldı' cevabı aldı."
                 % (m.get("no"), m.get("kime"), kim))
        # 🔴🔴 BU BLOK BİR GÜNDE İKİ KEZ YAZILDI — ve ikinci yazım
        # birincisini ÇÜRÜTTÜ. İkisi de kalsın, çünkü ders ikisinin
        # ARASINDA. (16 Ağustos 2026)
        #
        # ① KOORDİNATÖRÜN ÖLÇÜMÜ — doğruydu:
        #    Nöbetçi M-0089…M-0094'ü buldu ve bastı (7.861 bayt, altı 🔔).
        #    Emre deneme mesajı attı, KOORDİNATÖR UYANMADI.
        #    ⇒ hüküm: "mesaj bulunca ÇIK ki oturum uyansın"  🔴 YANLIŞ ÇARE
        #
        # ② NOKTA MENZİL'İN ÖLÇÜMÜ (M-0107) — aynı gün, TERSİ:
        #    Kendi bekçisi ÜÇ KEZ (M-0082 · M-0099 · M-0106) uyandırdı ve
        #    süreç HİÇ ÇIKMADI. Arada Emre'den tek dürtme yok.
        #
        # 🟢 İKİSİ DE DOĞRU, ÇÜNKÜ KAPILAR FARKLIYDI:
        #    Monitor aracı        → her stdout SATIRI bir bildirim
        #    Bash run_in_background → YALNIZ süreç bitince bildirim
        #    Koordinatör kabuğa attı, NOKTA MENZİL Monitor'e verdi.
        #    ⇒ Alet aynı, KAPI farklı. Ve doğrusu Monitor'ün kendi
        #      belgesinde YAZILIYDI; koordinatör yayın yapmadan önce
        #      okumadı.
        #
        # 📌 Ders: *"alet çalıştı ama iş olmadı"* teşhisi konurken, aletin
        #    HANGİ KAPIDAN çağrıldığı da ölçülür. Aynı betik iki kapıdan
        #    iki farklı şey yapar ve ikisi de "çalışıyor" görünür.
        if (yeni or tuzak) and cik:
            _bas("[BEKCI] mesaj var — ÇIKIYORUM ki oturum UYANSIN. "
                 "Yeniden kur: py arac/tahta_bekci.py --kim \"%s\"" % kim)
            return 0
        if tur and n >= tur:
            _bas("[BEKCI] %d tur bitti, çıkıyorum." % tur)
            return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
