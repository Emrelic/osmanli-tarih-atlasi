# -*- coding: utf-8 -*-
u"""BUGÜNÜN SAHİPSİZ YAMALARI — üç soru  ·  SINAV-KOSU8-0907 · 7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
SEVK (1.MURAT) — 🟢 AÇ: adında `0907` geçen sahipsiz dosyalar
                 🔴 AÇMA: öteki 56 (merge'i bloke etmiyorlar)
    ① hedefi ne? — ve ALANDAN mı METİNDEN mi olduğunu YAZ
    ② bu merge'de İNMESİ GEREKİYOR mu, yoksa ÖLÇÜM/BULGU kaydı mı?
    ③ inecekse hangi ALET? yoksa ELLE mi?
══════════════════════════════════════════════════════════════════════════

🔴 «24» SAYISI YENİDEN ÖLÇÜLÜYOR: o sayı DAR süzgeçle (80 sahipsiz)
   çıkmıştı. Süzgeç genişledi (120 sahipsiz) ⇒ küme büyümüş olabilir.
   Bir sayıyı devralıp üstüne iş kurmak, bu oturumun bugün üç kez
   düzelttiği hata.

🔴 VE ② İÇİN BİR ÖLÇÜT YOK — VEKİL KULLANILIYOR, damgalı:
   Bir dosyanın «uygulanacak» mı «kayıt» mı olduğunu söyleyen
   yapılandırılmış bir alan YOK (bu oturumun kendi bulgusu). O yüzden
   ② bir HÜKÜM değil bir AYIRIM ÖNERİSİ: kayıtların VERİ ALANI taşıyıp
   taşımadığına bakılıyor.
       VERİ ALANI  = ad · id · d · s · v · isg · k · m · f · t · kur
   Kayıtları veri alanı taşıyorsa «uygulanabilir cins», taşımıyorsa
   «ölçüm/bulgu». Bu bir SEZGİ; her dosya için gerekçesi BASILIYOR ki
   okuyan katılmayabilsin.

KOŞULUŞ
    py denetim/SINAV-KOSU8-BUGUN24-0907.py
    py denetim/SINAV-KOSU8-BUGUN24-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import json
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim")

YAMA_KOK = ("kunye", "madde", "yama", "oneri", "eklenen", "kayit")
BEYAN_ALAN = ("_HEDEF", "hedef", "hedef_dosya", "hedef_dosya_onerisi")
SAHIP_ONEK = ("YAMA-KUNYE-", "KRONOLOJI-")
VERI_ALANI = ("ad", "id", "d", "s", "v", "isg", "k", "m", "f", "t", "kur")
# metinde hedef arayan desen — ALANDAN gelmediğini damgalamak için AYRI
YOL_RX = re.compile(r"(data/[A-Za-z0-9_\*\.\-]+\.js|arac/[A-Za-z0-9_\.\-]+\.py)")


def yama_mi(d):
    if isinstance(d, list):
        return any(isinstance(x, dict) and ("id" in x or "ad" in x)
                   for x in d[:5])
    if not isinstance(d, dict):
        return False
    if any(any(k2 in k.lower() for k2 in YAMA_KOK) for k in d):
        return True
    for v in d.values():
        if isinstance(v, list) and v and isinstance(v[0], dict) \
                and ("id" in v[0] or "ad" in v[0]):
            return True
    return False


def hedef(d):
    u"""(değer, kaynak) — kaynak: ALAN | METİN | YOK. İkisi KARIŞTIRILMAZ."""
    if isinstance(d, dict):
        for a in BEYAN_ALAN:
            if isinstance(d.get(a), type(u"")):
                return (d[a][:70], "ALAN:" + a)
    ham = json.dumps(d, ensure_ascii=False)
    yol = YOL_RX.findall(ham)
    if yol:
        # en sık geçeni al
        en = max(set(yol), key=yol.count)
        return (en, "METİN (%d geçiş)" % yol.count(en))
    return ("-", "YOK")


def kayitlar(d):
    u"""Dosyadaki ilk kayıt dizisini ve alanlarını bulur."""
    if isinstance(d, list) and d and isinstance(d[0], dict):
        return ("(üst düzey dizi)", d)
    if not isinstance(d, dict):
        return (None, [])
    for k, v in d.items():
        if isinstance(v, list) and v and isinstance(v[0], dict):
            return (k, v)
    return (None, [])


def cins(d):
    u"""② — «uygulanabilir cins» mi «ölçüm/bulgu» mu? SEZGİ, hüküm değil."""
    ad, kay = kayitlar(d)
    if not kay:
        return ("KAYIT", "kayıt dizisi YOK ⇒ ölçüm/bulgu belgesi")
    alan = set()
    for r in kay[:8]:
        if isinstance(r, dict):
            alan |= set(r.keys())
    ortak = sorted(alan & set(VERI_ALANI))
    if ortak:
        return ("UYGULANABİLİR",
                "`%s` dizisi · %d kayıt · veri alanı: %s"
                % (ad, len(kay), ", ".join(ortak)))
    return ("KAYIT", "`%s` dizisi · %d kayıt · veri alanı YOK (%s)"
            % (ad, len(kay), ", ".join(sorted(alan)[:6])))


def alet(d, dosya_adi):
    u"""③ — hangi alet? ve niçin."""
    if any(dosya_adi.startswith(o) for o in SAHIP_ONEK):
        return "glob sahipleniyor"
    _, kay = kayitlar(d)
    alan = set()
    for r in kay[:8]:
        if isinstance(r, dict):
            alan |= set(r.keys())
    if alan & {"d", "s", "v", "isg"}:
        return ("_sahiplik_uygula — AMA o yalnız `data/yer_yama*.js` tarar; "
                "denetim/'e BAKMIYOR ⇒ ÖNCE data/'ya TAŞINMALI")
    # 🔴 ANAHTAR ADI CİNS DEĞİLDİR — ŞEMA SORULUR.
    #   İlk sürüm yalnız `"kunyeler" in d` diye bakıyordu ve
    #   `OLCUM-ANTLASMA-SLUG-0907` için «31 KÜNYE, alete uygun!» diye
    #   YANLIŞ ALARM üretti. Ölçüldü (bağımsız, iki taraf da):
    #       şema TAM 0/31 · eksik f 31 · t 31 · bolge 31
    #       kayıt {id, ad, kaba_yil, adaylar:[...]} → TDV SLUG ÖLÇÜMÜ
    #   `kunyeler` anahtarı orada ÖLÇÜLEN ÖZNELERİ tutuyor, künye
    #   önerilerini DEĞİL. ⇒ Glob'un onu görmemesi DOĞRU davranıştı.
    #   📌 `YAMA-KUNYE-T-0905` vakasının TAM TERSİ: orada DOSYA ADI
    #     doğru cins yanlıştı, burada ANAHTAR ADI doğru cins yanlış.
    if "kunyeler" in (d if isinstance(d, dict) else {}):
        ky = d["kunyeler"]
        kay = list(ky.values()) if isinstance(ky, dict) else (ky or [])
        tam = sum(1 for k in kay if isinstance(k, dict)
                  and all(k.get(a) for a in ("id", "ad", "f", "t")))
        if tam:
            return ("_kunye_uygula — şema TAM %d/%d, ama adı `YAMA-KUNYE-` "
                    "ile BAŞLAMIYOR" % (tam, len(kay)))
        return ("⚪ anahtar `kunyeler` AMA ŞEMA KÜNYE DEĞİL (%d kaydın "
                "0'ı id+ad+f+t taşıyor) ⇒ ölçüm olabilir, glob'un görmemesi "
                "DOĞRU" % len(kay))
    # 🔴 `b` BURADAN ÇIKARILDI — ve sebebi ölçüldü, tahmin değil:
    #   `SINIR-HUKUKI-ANADOLU-0907.json` (`kenarlar` · `f`,`t` · hedefi
    #   `data/sinir_hukuki_anadolu.js`) bu yüzden «ÇEKİRDEK kronoloji,
    #   ELLE» diye YANLIŞ sınıflandı. `b` çok genel bir ad (bbox · başlık
    #   · gövde) ve tek başına bir kronoloji işareti DEĞİL.
    #   ⇒ Ölçüt sıkılaştırıldı: `gun` ya da `duygu` ya da `yer_id` —
    #     üçü de kronolojiye ÖZGÜ. Ve `b` yalnız BUNLARLA BİRLİKTE sayılır.
    kron = alan & {"gun", "duygu", "yer_id"}
    if kron:
        return ("ÇEKİRDEK kronoloji — ALETİ YOK, ELLE (Oturum 0)  [işaret: %s]"
                % ", ".join(sorted(kron)))
    if alan & {"f", "t"} and "kenarlar" in (d if isinstance(d, dict) else {}):
        return ("YENİ KATMAN (`kenarlar`) — bu merge'in konusu DEĞİL, "
                "üreten oturumun CANLI çıktısı")
    return "ölçülemedi — kayıt alanları bir alete işaret etmiyor"


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("hedef · ALANDAN", ("data/x.js", "ALAN:_HEDEF"),
       hedef({"_HEDEF": "data/x.js"}))
    de("hedef · alan yoksa METİNDEN, ve DAMGALI", "METİN (1 geçiş)",
       hedef({"_NOT": "data/olaylar_ek.js'e yazılacak"})[1])
    de("hedef · hiç yoksa YOK", "YOK", hedef({"x": 1})[1])
    de("cins · veri alanı VARSA uygulanabilir", "UYGULANABİLİR",
       cins({"kayitlar": [{"ad": "X", "s": []}]})[0])
    de("cins · veri alanı YOKSA kayıt", "KAYIT",
       cins({"olcum": [{"deger": 1, "aciklama": "x"}]})[0])
    de("cins · kayıt dizisi YOKSA kayıt", "KAYIT", cins({"_NOT": "x"})[0])
    de("alet · d/s/v alanı → sahiplik + TAŞINMA uyarısı", True,
       "sahiplik_uygula" in alet({"k": [{"ad": "X", "s": []}]}, "X.json"))
    de("alet · gun → ÇEKİRDEK, ELLE", True,
       "ELLE" in alet({"k": [{"gun": "1", "b": "x"}]}, "X.json"))
    # 🔴 İLK SÜRÜMDE OLMAYAN DAL — ve gerçek veride YANLIŞ SINIFLAMA üretti
    de("alet · YALNIZ `b` çekirdek İŞARETİ DEĞİL", False,
       "ÇEKİRDEK" in alet({"kenarlar": [{"b": "x", "f": "1", "t": "2"}]}, "X.json"))
    de("alet · kenarlar+f/t → YENİ KATMAN", True,
       "YENİ KATMAN" in alet({"kenarlar": [{"f": "1", "t": "2"}]}, "X.json"))
    # 🔴 ANAHTAR ADI ≠ CİNS — gerçek veride YANLIŞ ALARM üretmişti
    de("alet · `kunyeler` + ŞEMA TAM → _kunye_uygula", True,
       "_kunye_uygula" in alet(
           {"kunyeler": [{"id": "x", "ad": "X", "f": "1", "t": "2"}]}, "X.json"))
    de("alet · `kunyeler` AMA ŞEMA KÜNYE DEĞİL → alarm VERMEZ", True,
       "ŞEMA KÜNYE DEĞİL" in alet(
           {"kunyeler": [{"id": "x", "ad": "X", "kaba_yil": 1500}]}, "X.json"))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(48) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    secilen = []
    for ad in sorted(os.listdir(DIZIN)):
        if not ad.endswith(".json") or "0907" not in ad:
            continue
        if any(ad.startswith(o) for o in SAHIP_ONEK):
            continue                                  # SAHİPLİ
        try:
            with io.open(os.path.join(DIZIN, ad), encoding="utf-8") as f:
                d = json.load(f)
        except Exception:                             # noqa: BLE001
            continue
        if not yama_mi(d):
            continue
        if isinstance(d, dict) and any(a in d for a in BEYAN_ALAN):
            pass                                      # beyanlı da olsa AÇ
        secilen.append((ad, d))

    print("═" * 78)
    print("BUGÜNÜN SAHİPSİZ YAMALARI — adında `0907`")
    print("═" * 78)
    print("SEÇİLEN: %d dosya" % len(secilen))
    print("⚠️ Sevkte «24» yazıyordu; o sayı DAR süzgeçle çıkmıştı.")
    print("   Bu ölçüm GENİŞ süzgeçle yapıldı ⇒ fark BEKLENİR.")
    print("")
    sayac = {"UYGULANABİLİR": 0, "KAYIT": 0}
    for ad, d in secilen:
        h, kaynak = hedef(d)
        c, gerekce = cins(d)
        sayac[c] = sayac.get(c, 0) + 1
        print("── %s" % ad)
        print("   ① hedef : %-46s [%s]" % (h, kaynak))
        print("   ② cins  : %-14s %s" % (c, gerekce))
        if c == "UYGULANABİLİR":
            print("   ③ alet  : %s" % alet(d, ad))
        print("")
    print("─" * 78)
    print("ÖZET: UYGULANABİLİR %d · ÖLÇÜM/BULGU %d"
          % (sayac.get("UYGULANABİLİR", 0), sayac.get("KAYIT", 0)))
    print("")
    print("🔴 ② BİR HÜKÜM DEĞİL BİR AYIRIM ÖNERİSİ: «uygulanacak mı»yı")
    print("   söyleyen yapılandırılmış bir alan YOK. Ölçüt kayıtların")
    print("   VERİ ALANI taşıyıp taşımadığı — bir SEZGİ, ve her satırın")
    print("   gerekçesi basıldı ki okuyan KATILMAYABİLSİN.")
    print("🔴 ① «ALAN» ile «METİN» KARIŞTIRILMADI: metinden çıkarılan bir")
    print("   hedef, dosyanın BEYANI değil benim ÇIKARIMIMDIR.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
