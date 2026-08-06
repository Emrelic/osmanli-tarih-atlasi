# -*- coding: utf-8 -*-
"""BEKLEYENLER.md  →  data/bekleyenler.js

Kullanıcının "Hakkında" menüsünde göreceği bekleyen iş tablosunu üretir.

🔴 NEDEN ÜRETİCİ, NEDEN ELLE KOPYA DEĞİL
Tablo iki yerde durursa iki OTORİTE doğar ve ayrışır. Bu projede aynı sınıf
üç kez yaşandı ve üçünde de bedeli ödendi:
  · `y:` yöntem simgeleri  → veri · app.js · VERI-YAPISI.md, ÜÇÜ de birbirini
                             tutmuyordu (vassal 13 / ilhak 11 / miras 2 kayıt
                             simgesiz çiziliyordu)
  · `BOLGE` sabiti         → dört dosyada; `denetle_kapsama.py` elle kopyaydı
                             ve pencere açıldığı an çürüyecekti (a6215ce'de
                             kaynaktan okumaya çevrildi)
  · 1446 tarihi            → olaylar*.js 1446-05-05 ↔ padisahlar.js 1446-09,
                             119 gün fark, iki dosya da yanlıştı
⇒ Tek kaynak `BEKLEYENLER.md`; bu betik onu makine okunur hâle çevirir.

📌 Ve bu zincir `denetle_yayin.py` tarafından izlenebilir: md değişip js
değişmezse "üretiliyor ama çizilmiyor" diye öter. Tutarsızlık SESSİZ kalamaz.

⚠️ SESSİZ BAŞARISIZLIK YASAK (DENETÇİ, 1 Ağustos): ayrıştırma tutmazsa bu
betik `SystemExit` ile durur; boş liste ya da eski değer DÖNDÜRMEZ. Sebebi
ölçüldü — `denetle_kapsama.py`'de bir `.get()` hep `None` dönüyordu ve iki
hata birbirini örtüyordu.

Kullanım:  py arac/uret_bekleyenler.py
"""
import io
import json
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "BEKLEYENLER.md")
HEDEF = os.path.join(KOK, "data", "bekleyenler.js")

# Başlık → çıktı anahtarı. Başlık metninde ARANAN parça (tam eşleşme değil),
# çünkü başlıklarda emoji ve açıklama var.
BOLUMLER = [
    ("SENDEN BEKLENEN", "bekleyen"),
    ("GÖRSEL DOĞRULAMA", "gorsel"),
    ("KARAR BEKLEYENLER", "karar"),
    ("İSTERSEN", "istege_bagli"),
    # 6 Agustos 2026: gunun oturumlarindan cikan SAHIPSIZ kalemler.
    # Hicbiri sikayet uretmiyor (acil degil) ama olculmus ve yazili.
    # `istege_bagli` anahtarina baglandi -- arayuz yeni anahtar
    # bilmiyor, ve bu kalemlerin sinifi zaten "istersen".
    ("HASADI", "istege_bagli"),
    # Acilmasi ONERILEN ama HENUZ ACILMAMIS oturumlar. Kullaniciyi
    # bagliyor (oturum acmayi koordinator yapamaz) ama ACIL degil.
    ("SIRADAKİ DALGA", "istege_bagli"),
    # "Bugun verdigin iki karar" gibi ALT basliklar: karar zaten
    # verilmis, uygulamasi bende. Kullanicidan bir sey beklenmiyor.
    ("VERDİĞİN", "kapanan"),
    ("KAPANANLAR", "kapanan"),
]

# Tablosu olduğu hâlde hiçbir bölüme bağlanmayan başlık = SESSİZ KAYIP.
# 🔴 2 Ağustos'ta yaşandı ve tam bu betiğin var oluş gerekçesini deldi:
# koordinatör "ŞU AN SENDEN BEKLENEN" başlığı altına DÖRT iş yazdı, betik
# başlığı tanımadığı için tabloyu hiç okumadı, "toplam 0" dedi ve sitenin
# menüsü "bekleyen yok" gösterdi. İki `dur()` çağrısı vardı ama ikisi de
# "HİÇBİR bölüm bulunamadı" diye soruyordu; iki bölüm bulunduğu için
# sessiz kaldı. ⇒ Kısmî tanıma da başarısızlıktır.
BOS_BOLUM_MAZERETI = ("SORUNDAN DOĞAN İŞ",)


def dur(mesaj):
    """Sessizce devam etmek yerine gürültüyle öl."""
    print("HATA: " + mesaj)
    print("      BEKLEYENLER.md'nin yapısı değişmiş olabilir. Betik güncellenmeli;")
    print("      eski çıktı KORUNMADI, çünkü bayat tablo yanlış tablodan kötüdür.")
    raise SystemExit(1)


def hucreler(satir):
    """Markdown tablo satırını hücrelere böler. Kenar boruları atılır."""
    s = satir.strip()
    if s.startswith("|"):
        s = s[1:]
    if s.endswith("|"):
        s = s[:-1]
    return [h.strip() for h in s.split("|")]


def sadelestir(m):
    """Markdown vurgularını ekrandaki metne çevirir.

    Kalın/eğik/kod işaretleri kaldırılır ama İÇERİK korunur — çünkü tabloda
    `⏳` gibi durum imleri ve `BOLGE` gibi kod adları anlam taşıyor.
    """
    m = re.sub(r"\*\*([^*]+)\*\*", r"\1", m)
    m = re.sub(r"\*([^*]+)\*", r"\1", m)
    m = re.sub(r"`([^`]+)`", r"\1", m)
    m = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", m)   # [metin](bağ) → metin
    return m.strip()


def tablo_oku(satirlar, bas):
    """`bas` indisinden itibaren ilk markdown tablosunu okur.

    Dönen: (başlık listesi, satırlar) — satırlar hücre listesi listesi.
    Tablo bulunamazsa (None, []) döner; çağıran karar verir.
    """
    i = bas
    while i < len(satirlar):
        s = satirlar[i].strip()
        if s.startswith("## "):          # bir sonraki bölüm başladı, tablo yok
            return None, []
        if s.startswith("|"):
            break
        i += 1
    if i >= len(satirlar):
        return None, []

    baslik = hucreler(satirlar[i])
    i += 1
    # ayraç satırı (|---|---|) atlanır
    if i < len(satirlar) and set(satirlar[i].strip()) <= set("|-: "):
        i += 1

    kayitlar = []
    while i < len(satirlar) and satirlar[i].strip().startswith("|"):
        h = hucreler(satirlar[i])
        if len(h) == len(baslik):
            kayitlar.append([sadelestir(x) for x in h])
        i += 1
    return [sadelestir(b) for b in baslik], kayitlar


def main():
    if not os.path.exists(KAYNAK):
        dur("BEKLEYENLER.md bulunamadı: " + KAYNAK)

    ham = open(KAYNAK, encoding="utf-8").read()
    satirlar = ham.split("\n")

    # Başlıkların satır indisleri
    basliklar = [(i, s.strip()) for i, s in enumerate(satirlar) if s.strip().startswith("## ")]
    if not basliklar:
        dur("dosyada hiç '## ' başlığı yok")

    cikti = {}
    bulunan = []
    sahipli = set()
    for aranan, anahtar in BOLUMLER:
        idx = None
        for i, s in basliklar:
            if aranan in s.upper():
                idx = i
                break
        if idx is None:
            cikti[anahtar] = {"baslik": [], "satir": []}
            continue
        bulunan.append(aranan)
        sahipli.add(idx)
        bas, kayit = tablo_oku(satirlar, idx + 1)
        cikti[anahtar] = {"baslik": bas or [], "satir": kayit}

    if not bulunan:
        dur("beklenen bölüm başlıklarının HİÇBİRİ bulunamadı: "
            + ", ".join(a for a, _ in BOLUMLER))

    # 🔴 SAHİPSİZ TABLO DENETİMİ — kısmî tanımanın sessiz kalmasını engeller.
    # Yukarıdaki `if not bulunan` yalnız TAM başarısızlığı yakalıyordu; iki
    # bölüm tanınıp üçüncüsü kaçtığında betik memnun görünüyordu.
    for i, s in basliklar:
        if i in sahipli or any(m in s.upper() for m in BOS_BOLUM_MAZERETI):
            continue
        _, kayit = tablo_oku(satirlar, i + 1)
        if kayit:
            dur("başlığı tanınmayan bir bölümde %d satırlık TABLO var ve\n"
                "      hiçbir yere yazılmıyor:  %s\n"
                "      → BOLUMLER listesine ekle, ya da tabloyu kaldır."
                % (len(kayit), s))

    # Açık iş sayısı.
    # 🔴 ESKİ ÖLÇÜT VEKİLDİ ve yanlış sayıyordu: satırda `⏳` arıyordu, oysa
    # açıklığı belirleyen şey satırın HANGİ BÖLÜMDE durduğudur. İki karar
    # (K1, K3) günlerce açıkken rozet `0` gösterdi, çünkü satırlarda o simge
    # yoktu. ⇒ Açık bölümdeki satır açıktır; `✅` taşıyan satır kapalıdır.
    def acik_say(anahtar):
        return sum(1 for r in cikti[anahtar]["satir"]
                   if "✅" not in " ".join(r))

    ozet = {
        "bekleyen_acik": acik_say("bekleyen"),
        "gorsel_acik": acik_say("gorsel"),
        "karar_acik": acik_say("karar"),
        "istege_bagli": acik_say("istege_bagli"),   # rozete GİRMEZ, acele değil
    }
    ozet["toplam_acik"] = (ozet["bekleyen_acik"] + ozet["gorsel_acik"]
                           + ozet["karar_acik"])

    govde = json.dumps({"bolum": cikti, "ozet": ozet}, ensure_ascii=False, indent=1)

    with open(HEDEF, "w", encoding="utf-8", newline="\n") as f:
        f.write("// Otomatik üretildi — ELLE DÜZENLEMEYİN.\n")
        f.write("// Kaynak: BEKLEYENLER.md · Betik: arac/uret_bekleyenler.py\n")
        f.write("//\n")
        f.write("// ⚠️ Bu dosyayı elle düzenlemek TEK KAYNAK kuralını bozar: tablo iki\n")
        f.write("//    yerde durursa ayrışır ve kullanıcı yanlış olana bakar. Değişiklik\n")
        f.write("//    BEKLEYENLER.md'ye yazılır, sonra bu betik koşturulur.\n")
        f.write("window.BEKLEYENLER = " + govde + ";\n")
        # Üretim izi (İş G) — girdi tek dosya: BEKLEYENLER.md. İz yazılamazsa
        # uretim_izi_js SystemExit atar; bu betiğin dur() disipliniyle uyumlu.
        import girdi
        f.write(girdi.uretim_izi_js(["BEKLEYENLER.md"], ["uret_bekleyenler.py"]))

    print("data/bekleyenler.js yazıldı")
    for aranan, anahtar in BOLUMLER:
        n = len(cikti[anahtar]["satir"])
        isaret = "✓" if aranan in bulunan else "—"
        print("   %s %-22s %2d satır" % (isaret, aranan, n))
    print("   açık iş: beklenen %d · görsel %d · karar %d  →  ROZET %d"
          % (ozet["bekleyen_acik"], ozet["gorsel_acik"], ozet["karar_acik"],
             ozet["toplam_acik"]))
    print("   (isteğe bağlı %d — rozete girmez)" % ozet["istege_bagli"])


if __name__ == "__main__":
    main()
