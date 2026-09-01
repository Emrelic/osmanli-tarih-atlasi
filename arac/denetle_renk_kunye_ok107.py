# -*- coding: utf-8 -*-
"""RENKLİ-KÜNYESİZ NÖBETÇİSİ — `§8`in TERS SINIFI.

    py arac/denetle_renk_kunye_ok107.py            normal koşu
    py arac/denetle_renk_kunye_ok107.py --sina     C13 SINAMASI (dört dal)

╔══════════════════════════════════════════════════════════════════════════╗
║ NİÇİN VAR                                                                ║
╚══════════════════════════════════════════════════════════════════════════╝
`CLAUDE.md §8` şunu söylüyor: *"`s:[{d:"..."}]` içindeki devlet kimliği
`BOYALAR` sözlüğünde tanımlı olmalı; yoksa bölge boyanmaz."* Proje bu yönü
yıllardır denetliyor — **KÜNYESİ VAR, RENGİ YOK** ⇒ harita deliği.

Bu nöbetçi **TERS YÖNÜ** soruyor ve o yönü hiçbir denetim sormuyordu:

        RENGİ VAR · KÜNYESİ YOK · VE VERİDE KULLANILIYOR

Böyle bir kimlik haritada **çizilir** ama `devletler.js` dizininde
**görünmez**. Sonucu üç kat:
    ① dizin penceresinde yok — kullanıcı tıklayacak bir künye bulamaz
    ② `Değişmez 4` (devletin ömrü) onu DENETLEYEMEZ — `f`/`t` yok, yani
      `§3.5`in *hayalet devlet* taraması o kimliğin üstünden atlar
    ③ hiçbir mevcut nöbetçi ötmez, çünkü hepsi "renk var mı" diye sorar

╔══════════════════════════════════════════════════════════════════════════╗
║ DOĞURAN VAKA — 2 Eylül 2026, ve kusuru KOORDİNATÖR kendi açtı            ║
╚══════════════════════════════════════════════════════════════════════════╝
Üç dosya bağlandı (`yerlesimler_4ff22b.js` · `_amerika2.js` · `_hindistan.js`).
Bağlarken `§8` gereği **renk kontrol edildi**, ama **künye kontrol edilmedi.**
Sonuç: dizinde olmayan üç kimlik çizilmeye başladı.

    apaci-ovalar · komanci · farukiler          ← o gün doğdu
    panama-cumhuriyeti                          ← daha önceden

Koordinatörün kendi teşhisi: *"yeni bir yol açıp nöbetçiyi o yola bakmaya
çağırmamak"* — aynı gün ÜÇÜNCÜ kez. Bu betik o çağrıdır.

╔══════════════════════════════════════════════════════════════════════════╗
║ 🔴 EN ÖNEMLİ TASARIM KARARI: `harita:` TAKMA ADLARI HARİÇ                ║
╚══════════════════════════════════════════════════════════════════════════╝
Bir künyenin `harita:` alanı, o künyenin haritada HANGİ anahtarla boyandığını
söyler. Yani `hicaz` ve `suud` gibi kimliklerin künye `id`si YOKTUR ama
**bir künye onlara `harita:` ile işaret eder** — bunlar yetim değil, TASARIM.

⚠️ Bu satır yazılmadan önce ölçüldü: `harita:` kümesi hariç tutulmazsa
   **6 SAHTE ALARM** çıkıyor. İlk taramamda tam buraya düştüm; kural bu
   yüzden kodun içinde değil, BAŞLIĞINDA duruyor.
📌 `§11`: *"bir süzgeci kaldırmadan önce süzgecin neyi KORUDUĞUNU oku."*
   Buradaki ters hâli: **bir süzgeci EKLEMEDEN önce neyi ELEDİĞİNİ ölç.**

╔══════════════════════════════════════════════════════════════════════════╗
║ İKİ KOVA — ve ayrımları ölçülebilir                                      ║
╚══════════════════════════════════════════════════════════════════════════╝
    🔴 İHLAL     renk VAR · künye YOK · takma ad DEĞİL · VERİDE KULLANILIYOR
                 ⇒ çiziliyor ama dizinde yok. Çıkış kodu 1.
    🟡 ÖLÜ RENK  aynısı ama veride HİÇ kullanılmıyor
                 ⇒ bugün zarar vermiyor; yarın bir nokta yazıldığında
                   sessizce İHLAL'e döner. Çıkış kodunu DEĞİŞTİRMEZ.
📌 İkisini tek satırda saymak, `§11`in *"ölçülemedi ≠ temiz"* ailesinden bir
   hata olurdu: ölü renk bir kusur değil, bir BEKLEYEN kusurdur.

╔══════════════════════════════════════════════════════════════════════════╗
║ C13 — İKİ YÖN DE SINANDI (`--sina`)                                      ║
╚══════════════════════════════════════════════════════════════════════════╝
`CLAUDE.md §11`: *"yeni yazılan denetim, iki yönde de sınanmadan çalışıyor
sayılmaz"* — ve `C13`ün eksik ayağı: **hangi yönün zorlanacağı önceden
bilinmez.** Burada:
    ATEŞLEME  gerçek veride 4 yetim VAR ⇒ dal kendiliğinden koşuyor
    GEÇME     gerçek veride temiz hâl YOK ⇒ **ZORLANDI** (sahte evren)
    TAKMA AD  gerçek veride var ama SESSİZ olması gerekiyor ⇒ ZORLANDI
              (takma ad süzgeci kapatılıp sahte alarmın DOĞDUĞU gösterildi)
    ÖLÜ RENK  gerçek veride var mı bilinmiyor ⇒ ZORLANDI
Dördü de `--sina` ile koşturulur; zorlanamayan dal DENETİMSİZ daldır.
"""
import io
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ARAC = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(ARAC)
sys.path.insert(0, ARAC)


# ══════════════════════════════════════════════════════════════════════════
# EVREN TOPLAMA — üçü de KENDİ DİLİNDE okunur, regex yazılmaz
#   `CLAUDE.md §11`: "veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını
#   çağır." renkler.py bir Python sözlüğü TAŞIR ⇒ import edilir.
# ══════════════════════════════════════════════════════════════════════════
def evren_oku():
    import girdi                                   # noqa: E402
    import renkler                                 # noqa: E402

    boyalar = set(renkler.BOYALAR)
    kunyeler = girdi.oku_devletler()
    kunye_id = {k["id"] for k in kunyeler if k.get("id")}
    # `harita:` hedefleri — bunlar YETİM DEĞİL, TAKMA AD
    takma = {k.get("harita") for k in kunyeler if k.get("harita")}
    kullanilan = {}
    for y in girdi.yukle(sessiz=True):
        for kat in ("s", "d", "v", "isg"):
            for p in (y.get(kat) or []):
                kid = p.get("d")
                if kid:
                    kullanilan.setdefault(kid, []).append(y["ad"])
    return boyalar, kunye_id, takma, kullanilan


# ══════════════════════════════════════════════════════════════════════════
# ÇEKİRDEK — saf fonksiyon, sahte evrenle de çağrılabilir (C13 için ŞART)
# ══════════════════════════════════════════════════════════════════════════
def olc(boyalar, kunye_id, takma, kullanilan, takma_suzgeci=True):
    """(ihlal, olu_renk) — ikisi de [(kimlik, ornekler)] listesi."""
    ihlal, olu = [], []
    for kid in sorted(boyalar):
        if kid in kunye_id:
            continue                                # künyesi var, mesele yok
        if takma_suzgeci and kid in takma:
            continue                                # `harita:` takma adı
        yerler = kullanilan.get(kid) or []
        if yerler:
            ihlal.append((kid, yerler))
        else:
            olu.append((kid, []))
    return ihlal, olu


def bas(ihlal, olu, boyalar, kunye_id, takma):
    print("=" * 78)
    print("RENKLİ-KÜNYESİZ DENETİMİ — `§8`in ters sınıfı")
    print("=" * 78)
    print("BOYALAR anahtarı : %4d" % len(boyalar))
    print("künye id         : %4d" % len(kunye_id))
    print("`harita:` takma  : %4d   (yetim SAYILMAZ — tasarım)" % len(takma))
    print()
    if ihlal:
        print("🔴 İHLAL — rengi var, künyesi yok, VE VERİDE KULLANILIYOR: %d" % len(ihlal))
        for kid, yerler in ihlal:
            print("   %-26s %3d dönem · ör: %s"
                  % (kid, len(yerler), ", ".join(sorted(set(yerler))[:3])))
        print("   ⇒ Bu kimlikler HARİTADA ÇİZİLİYOR ama `devletler.js`te YOK.")
        print("     `Değişmez 4` ömürlerini denetleyemez (`f`/`t` yok).")
    else:
        print("🟢 İHLAL YOK — çizilen her kimliğin künyesi var.")
    print()
    if olu:
        print("🟡 ÖLÜ RENK — künyesiz ama veride kullanılmıyor: %d" % len(olu))
        for kid, _ in olu[:20]:
            print("   %s" % kid)
        if len(olu) > 20:
            print("   … ve %d tane daha" % (len(olu) - 20))
        print("   ⇒ Bugün zarar vermiyor. Ama o kimliği kullanan TEK BİR nokta")
        print("     yazıldığı an SESSİZCE İHLAL'e döner — bu yüzden ayrı kova.")
    else:
        print("🟢 ÖLÜ RENK YOK.")
    print()
    print("HÜKÜM: %s" % ("🔴 İHLAL VAR (çıkış 1)" if ihlal else "🟢 TEMİZ (çıkış 0)"))
    return 1 if ihlal else 0


# ══════════════════════════════════════════════════════════════════════════
# C13 SINAMASI — dört dal, ikisi ZORLANARAK
# ══════════════════════════════════════════════════════════════════════════
def sina():
    print("=" * 78)
    print("C13 SINAMASI — dört dal ayrı ayrı ateşlenecek")
    print("=" * 78)
    gecti = 0
    toplam = 0

    def dal(ad, boyalar, kunye, takma, kullanilan, bek_ihlal, bek_olu,
            takma_suzgeci=True):
        nonlocal gecti, toplam
        toplam += 1
        i, o = olc(boyalar, kunye, takma, kullanilan, takma_suzgeci)
        tamam = (len(i) == bek_ihlal and len(o) == bek_olu)
        gecti += 1 if tamam else 0
        print("%s %-34s ihlal %d (bek %d) · ölü %d (bek %d)"
              % ("🟢" if tamam else "🔴", ad, len(i), bek_ihlal, len(o), bek_olu))
        return i, o

    # ── ① GEÇME YOLU — kusursuz evren. Gerçek veride BÖYLE BİR HÂL YOK,
    #     o yüzden ZORLANDI (sahte evren). C13: zorlanamayan dal denetimsizdir.
    dal("① GEÇME (kusursuz evren)",
        {"a", "b", "c"}, {"a", "b", "c"}, set(), {"a": ["X"]}, 0, 0)

    # ── ② ATEŞLEME · İHLAL — renk var, künye yok, VERİDE KULLANILIYOR
    dal("② ATEŞLEME (ihlal)",
        {"a", "yetim"}, {"a"}, set(), {"yetim": ["Nokta1", "Nokta2"]}, 1, 0)

    # ── ③ ÖLÜ RENK — aynısı ama veride kullanılmıyor ⇒ İHLAL DEĞİL
    dal("③ ÖLÜ RENK (uyarı, ihlal değil)",
        {"a", "olu"}, {"a"}, set(), {"a": ["X"]}, 0, 1)

    # ── ④ TAKMA AD — `harita:` hedefi SESSİZ kalmalı.
    #     Ve süzgeç KAPATILINCA sahte alarmın DOĞDUĞU gösteriliyor:
    #     kuralın ne kadar gerekli olduğunu iddia değil ÖLÇÜM söylüyor.
    dal("④ TAKMA AD (süzgeç AÇIK → sessiz)",
        {"a", "hicaz"}, {"a"}, {"hicaz"}, {"hicaz": ["Medine"]}, 0, 0)
    dal("④b TAKMA AD (süzgeç KAPALI → sahte alarm DOĞUYOR)",
        {"a", "hicaz"}, {"a"}, {"hicaz"}, {"hicaz": ["Medine"]}, 1, 0,
        takma_suzgeci=False)

    print("-" * 78)
    print("SINAMA: %d/%d dal beklendiği gibi" % (gecti, toplam))
    return 0 if gecti == toplam else 1


if __name__ == "__main__":
    if "--sina" in sys.argv:
        raise SystemExit(sina())
    b, k, t, ku = evren_oku()
    raise SystemExit(bas(*olc(b, k, t, ku), boyalar=b, kunye_id=k, takma=t))
