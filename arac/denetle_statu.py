# -*- coding: utf-8 -*-
"""
DOKUZUNCU DENETİM — statü tutarlılığı
=====================================
Soru: *bir yerleşimin STATÜSÜ değiştiğinde (doğrudan ↔ tâbi ↔ yabancı),
bu değişimin bir kaydı var mı ve doğru kutuya yazılmış mı?*

Merkez oturum bunu "Sonnet oturumlarının en olası hata sınıfı" diye işaretledi
ve haklı: altı içerik oturumu aynı anda `s:`/`d:`/`v:` yazacak, üçünün anlamı
birbirine yakın ve yanlış kutuya yazmak SESSİZ bir hatadır — üç değişmez de
temiz raporlar, harita yanlış boyanır.

Üç ayrı soru sorulur; ikisi tasarım gereği FARKLI kademelerde:

  A) d: ↔ v: sıçraması        — Osmanlı toprağı tâbi oldu / tâbi toprak ilhak
                                 edildi. Değişmez 2 bu günlerin MADDESİ olmasını
                                 zaten şart koşuyor; buradaki ek soru maddenin
                                 STATÜDEN bahsedip bahsetmediği.
  B) s: → s: yabancı devir     — ⚠️ DEĞİŞMEZ 2'NİN KÖR NOKTASI. Değişmez 2 yalnız
                                 `d:` ve `v:` sınırlarını kırılma sayar; iki
                                 YABANCI devlet arasındaki el değiştirme
                                 (Venedik → Avusturya, 1797) haritayı boyar ama
                                 hiçbir denetim maddesini sormaz.
  C) işgal kodlaması           — işgal `s:` mi `v:` mi? Ölçüldü: İKİSİ DE
                                 kullanılıyor ve ayırt edici alan YOK. Envanter.

ÇALIŞTIRMA
    py arac/denetle_statu.py             # özet
    py arac/denetle_statu.py --ayrinti   # bütün satırlar
    py arac/denetle_statu.py --dagilim   # eşik seçmek için ham dağılım

⚠️ OGRENILENLER.md §3: eşik ÖLÇÜLMEDEN seçilmez. Aşağıdaki her sabitin yanında
onu üreten ölçüm yazılı; gerekçe `denetim/STATU-2026-07-30.md`'de.
"""
import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle

# ⚠️ SARMALAYICI İMPORT'LARDAN SONRA KURULUR — denetle.py da stdout'u sarıyor.
# İki TextIOWrapper aynı buffer'ı sararsa ilki çöp toplandığında buffer'ı KAPATIR
# ve araç "ValueError: I/O operation on closed file" ile ölür. Ölçüm betiğinde
# bir kez yaşandı; burada da yaşanacaktı.
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = girdi.KOK

# ---------------------------------------------------------------- sabitler
# Değişmez 2 ile AYNI pencere. Bilerek aynı: statü değişimi de bir toprak
# değişimidir, iki denetimin ölçütü ayrışırsa hangisinin geçerli olduğu
# tartışmaya açılır. Değişmez 2'nin ±30'u ölçülerek seçilmişti (CLAUDE.md §3:
# "aynı yıl" gevşekliği 51 maddesiz kırılmayı gizliyordu).
PENCERE_GUN = 30

# ⚠️ B'nin tavanı — ÖLÇÜLDÜ, sezilmedi (30 Temmuz 2026, 927 yerleşim):
#     s:→s: yabancı el değiştirme          234 olay
#     ±30 günde maddesi YOK                154 olay  (%66)
#       ├─ tarihi YYYY-01-01'e yuvarlanmış  73       ← "yıl biliniyor, gün yok"
#       └─ GERÇEK GÜN taşıyor               81       ← tartışılmaz eksik
#
# 154'ün tamamı bugün İHLAL sayılsaydı denetim ilk koşuda 154 alarm verirdi ve
# OGRENILENLER §3 gereği kimse bakmazdı. Bu yüzden Değişmez 3'ün deseni
# uygulandı: BİLİNEN BORÇ + TAVAN. Tavan aşılırsa YENİ borç eklenmiş demektir.
#
# Yuvarlanmış tarihler ayrı tutuldu çünkü onlarda "±30 gün" ölçütü haksız:
# 1297-01-01 gerçek bir gün değil, "1297" demenin yazım biçimi (CLAUDE.md §4).
BEKLENEN_SS_MADDESIZ_GERCEKGUN = 81
BEKLENEN_SS_MADDESIZ_YUVARLAK = 73

# A'nın bugünkü ölçümü: 13 ayrı (gün, yön) geçişi, ±30 günde maddesi olmayan 0,
# maddesi statüden bahsetmeyen 1 (Modon 1825-02-24). 13 örneklik bir kümede
# eşik ayarlanmaz — bu yüzden statü-kelimesi ölçütü İHLAL DEĞİL, gözden geçirme
# kademesidir. Maddesi HİÇ olmayan geçiş ise İHLAL'dir (bugün 0).
BEKLENEN_DV_STATUSUZ = 1

# Statü değişimini anlatan maddeyi tanıyan sözcük kümesi. Ölçüldü: bugünkü 13
# geçişin 12'sinin maddesi bunlardan en az birini içeriyor. Küme genişletilirse
# denetim körleşir — yeni kelime eklemeden önce hangi vakayı kurtardığını yaz.
STATU_SOZCUKLERI = (
    "tâbi", "tabi", "vasal", "voyvoda", "ocaklık", "ocaklığ", "hanlık", "hanlığ",
    "imtiyaz", "ilhak", "muhtar", "özerk", "himaye", "prenslik", "şerif",
    "hidiv", "eyalet", "sancak", "beylerbey", "doğrudan", "işgal", "bağlılık",
    "haraç", "harâc", "statü", "idare", "bey", "krallık",
)

# C) İşgal envanteri — "kısa sandviç s: dönemi" (Osmanlı → yabancı → Osmanlı)
# işgal ADAYIDIR ama tek başına ölçüt DEĞİLDİR. Ölçüldü: 15 yıldan kısa 380
# sandviçin 381'i... daha doğrusu:
#     süleyman-celebi 138 · mehmed-celebi 108 · musa-celebi 86 · isa-celebi 49
# yani 381'i FETRET DEVRİ şehzadeleri — işgal değil, Osmanlı iç savaşı.
# Süre ölçütüne dayalı bir "işgal bulucu" %88 yanlış alarm verirdi. Bu yüzden C
# bir DENETİM değil ENVANTERdir: karar verilecek veriyi listeler, karar vermez.
FETRET_KIMLIKLERI = ("suleyman-celebi", "mehmed-celebi", "musa-celebi",
                     "isa-celebi", "mustafa-celebi", "duzmece-mustafa")
ISGAL_ADAY_YIL = 15


def _gun(s):
    return denetle.gun_no(s)


def _statu_mu(metin):
    m = (metin or "").lower()
    return any(s in m for s in STATU_SOZCUKLERI)


# ------------------------------------------------- A) d: ↔ v: statü sıçraması
def a_dv_sicramasi(Y, ol):
    """(maddesiz, statusuz) — ikisi de liste.

    Bitişik geçiş: bir `d:` dönemi biterken AYNI GÜN bir `v:` dönemi başlıyor
    (ya da tersi). Aynı gün olması şart: arada boşluk varsa o zaten Değişmez
    1b'nin (pencere arası boşluk) işidir, burada iki kez raporlanmaz.
    """
    gecis = {}
    for y in Y:
        D = [(p.get("f"), p.get("t")) for p in (y.get("d") or [])]
        V = [(p.get("f"), p.get("t")) for p in (y.get("v") or [])]
        for df, dt in D:
            for vf, vt in V:
                if dt and dt == vf:
                    gecis.setdefault((dt, "d→v"), set()).add(y["ad"])
                if vt and vt == df:
                    gecis.setdefault((df, "v→d"), set()).add(y["ad"])

    maddesiz, statusuz = [], []
    for (g, yon), adlar in sorted(gecis.items()):
        gd = _gun(g)
        yakin = [o for o in ol if abs(o["g"] - gd) <= PENCERE_GUN]
        if not yakin:
            maddesiz.append((g, yon, sorted(adlar)))
            continue
        if not any(_statu_mu(o["b"] + " " + o["d"]) for o in yakin):
            en = min(yakin, key=lambda o: abs(o["g"] - gd))
            statusuz.append((g, yon, sorted(adlar), en["b"]))
    return gecis, maddesiz, statusuz


# ------------------------------------------- B) s: → s: yabancı el değiştirme
def b_yabanci_devir(Y, ol):
    """(tum, gercekgun_maddesiz, yuvarlak_maddesiz).

    Değişmez 2 `d:` ve `v:` sınırlarını kırılma sayar — YABANCI devletler
    arasındaki devri saymaz. Ama harita o gün renk değiştirir: 1797-10-17'de
    Kefalonya Venedik mavisinden Fransa rengine döner ve kronoloji susar.
    Kullanıcının en çok şikâyet ettiği hata sınıfının (Değişmez 2) yabancı
    devletlerdeki tam karşılığıdır; dünya kapsamı açıldıkça ana sınıf olacak.
    """
    devir = {}
    for y in Y:
        S = sorted([(p.get("f"), p.get("t"), p.get("d")) for p in (y.get("s") or [])])
        for i in range(len(S) - 1):
            if S[i][1] and S[i][1] == S[i + 1][0] and S[i][2] != S[i + 1][2]:
                devir.setdefault((S[i][1], S[i][2], S[i + 1][2]), set()).add(y["ad"])

    gercek, yuvarlak = [], []
    for (g, a, b), adlar in sorted(devir.items()):
        gd = _gun(g)
        if any(abs(o["g"] - gd) <= PENCERE_GUN for o in ol):
            continue
        (yuvarlak if g.endswith("-01-01") else gercek).append((g, a, b, sorted(adlar)))
    return devir, gercek, yuvarlak


# ----------------------------------------------------- C) işgal kodlaması
def c_isgal_envanteri(Y):
    """(v_isgal, s_sandvic, fetret) — işgal iki ayrı kutuya yazılıyor mu?"""
    v_isgal, s_sandvic, fetret = [], [], []
    for y in Y:
        for p in (y.get("v") or []):
            k = (p.get("k") or "")
            if "işgal" in k.lower() or "isgal" in k.lower():
                v_isgal.append((p.get("f"), p.get("t"), y["ad"], k))
        D = sorted([(p.get("f"), p.get("t")) for p in (y.get("d") or [])])
        for p in (y.get("s") or []):
            f, t, dev = p.get("f"), p.get("t"), p.get("d")
            if not (f and t):
                continue
            if not ([x for x in D if x[1] and x[1] <= f] and
                    [x for x in D if x[0] and x[0] >= t]):
                continue
            yil = (_gun(t) - _gun(f)) / 365.2425
            if yil >= ISGAL_ADAY_YIL:
                continue
            (fetret if dev in FETRET_KIMLIKLERI else s_sandvic).append(
                (yil, f, t, y["ad"], dev))
    s_sandvic.sort()
    return v_isgal, s_sandvic, fetret


# ---------------------------------------------------- v: etiket bütünlüğü
def v_etiketleri(Y):
    """`k:` etiketi olmayan tâbi dönemleri — objektif şema kuralı, eşiksiz.

    Bugün 0. Etiket yoksa kullanıcı kimin tâbii olduğunu göremez: harita açık
    tonda boyar, lejant boş kalır. Altı Sonnet oturumu `v:` yazmak üzere; bu
    ileriye dönük bir bekçi.
    """
    return [(y["ad"], p.get("f"), p.get("t")) for y in Y
            for p in (y.get("v") or []) if not (p.get("k") or "").strip()]


def main():
    ayrinti = "--ayrinti" in sys.argv
    dagilim = "--dagilim" in sys.argv

    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    ol = [{"g": _gun(o["t"]), "b": o.get("b", ""), "d": o.get("d", "")} for o in O]

    print("Statü tutarlılığı denetimi — d: ↔ v: ↔ s: geçişleri kayıtlı mı?\n")
    print(f"  {len(Y)} yerleşim · {len(O)} kronoloji maddesi · pencere ±{PENCERE_GUN} gün")

    ihlal = 0

    # ---------------- A
    gecis, maddesiz, statusuz = a_dv_sicramasi(Y, ol)
    print(f"\n=== A) d: ↔ v: STATÜ SIÇRAMASI — {len(gecis)} ayrı (gün, yön) ===")
    if maddesiz:
        ihlal += 1
        print(f"  ✗ ±{PENCERE_GUN} günde HİÇ maddesi olmayan geçiş: {len(maddesiz)}"
              f" (beklenen 0)")
        for g, yon, adlar in maddesiz:
            print(f"      {g}  {yon}  ({len(adlar)} nokta) {', '.join(adlar[:4])}")
    else:
        print(f"  ✓ maddesiz geçiş: 0 — hepsi Değişmez 2 tarafından da kapsanıyor")

    im = "i" if len(statusuz) <= BEKLENEN_DV_STATUSUZ else "✗"
    if len(statusuz) > BEKLENEN_DV_STATUSUZ:
        ihlal += 1
    print(f"  {im} maddesi var ama STATÜDEN bahsetmiyor: {len(statusuz)}"
          f" (bilinen {BEKLENEN_DV_STATUSUZ})")
    print(f"      → İHLAL DEĞİL, gözden geçirme: 13 örneklik kümede eşik ayarlanmaz.")
    for g, yon, adlar, b in (statusuz if ayrinti else statusuz[:8]):
        print(f"      {g}  {yon}  ({len(adlar):3d}) {adlar[0][:22]:22s}"
              f" | en yakın: {b[:52]}")

    # ---------------- v: etiket
    etiketsiz = v_etiketleri(Y)
    if etiketsiz:
        ihlal += 1
        print(f"\n  ✗ `k:` etiketi olmayan tâbi dönemi: {len(etiketsiz)} (beklenen 0)")
        for ad, f, t in (etiketsiz if ayrinti else etiketsiz[:10]):
            print(f"      {ad:26s} {f} → {t}")
    else:
        print(f"\n  ✓ tâbi dönemlerinin tamamının `k:` etiketi var")

    # ---------------- B
    devir, gercek, yuvarlak = b_yabanci_devir(Y, ol)
    print(f"\n=== B) s: → s: YABANCI EL DEĞİŞTİRME — {len(devir)} olay ===")
    print("    ⚠️ Değişmez 2 bu kırılmaları HİÇ saymıyor: yalnız `d:`/`v:`")
    print("       sınırlarına bakıyor. Harita bu günlerde renk değiştirir.")
    top = len(gercek) + len(yuvarlak)
    print(f"    maddesiz: {top}/{len(devir)}"
          f"  ({len(gercek)} gerçek gün + {len(yuvarlak)} yuvarlanmış)")

    for ad, bulunan, beklenen in (("GERÇEK GÜN taşıyan", gercek, BEKLENEN_SS_MADDESIZ_GERCEKGUN),
                                  ("YYYY-01-01'e yuvarlanmış", yuvarlak, BEKLENEN_SS_MADDESIZ_YUVARLAK)):
        if len(bulunan) > beklenen:
            ihlal += 1
            print(f"  ✗ {ad}: {len(bulunan)} (tavan {beklenen}) — YENİ BORÇ EKLENDİ")
        else:
            print(f"  i {ad}: {len(bulunan)} (tavan {beklenen}) — bilinen borç")

    print("    → gerçek gün taşıyan bir devir, tarihin bir KAYNAKTAN geldiği")
    print("      anlamına gelir; maddesini yazmak yeni araştırma istemez.")
    for g, a, b, adlar in (gercek if ayrinti else gercek[:12]):
        print(f"      {g}  {str(a):14s} → {str(b):14s} ({len(adlar):3d}) {adlar[0][:24]}")
    if not ayrinti and len(gercek) > 12:
        print(f"      … {len(gercek)-12} satır daha (--ayrinti)")

    if dagilim:
        print("\n  --- yüzyıl dağılımı (maddesiz devirler) ---")
        c = {}
        for g, *_ in gercek + yuvarlak:
            c[int(g[:4]) // 100 + 1] = c.get(int(g[:4]) // 100 + 1, 0) + 1
        for yy in sorted(c):
            print(f"      {yy:2d}. yy  {'#' * c[yy]} {c[yy]}")

    # ---------------- C
    v_isgal, s_sandvic, fetret = c_isgal_envanteri(Y)
    print(f"\n=== C) İŞGAL KODLAMASI — ENVANTER, denetim değil ===")
    print(f"    `v:` içinde '(işgal)' etiketiyle yazılan : {len(v_isgal)} dönem")
    print(f"    `s:` sandviç (<{ISGAL_ADAY_YIL} yıl, Osmanlı→X→Osmanlı): {len(s_sandvic)} dönem")
    print(f"    bunun dışında Fetret şehzadeleri         : {len(fetret)} dönem (işgal DEĞİL)")
    print("    ⚠️ AYNI OLGU İKİ KUTUYA YAZILIYOR ve ayırt edici alan YOK.")
    print("       js/app.js:822 üçüncü gösterimi (taralı işgal alanı) bekliyor;")
    print("       `window.ISGALLER` üreticisi henüz yok, katman BOŞ diziyle çalışıyor.")
    print("       Karar VERİ SAHİBİNİN: ya `s:` dönemine `isg:1` bayrağı, ya işgalin")
    print("       tamamı `v:`e taşınır. Bu araç karar vermez, envanteri verir.")
    # Süreye göre sıralamak listeyi Timur'un 1402'deki 19 noktasıyla dolduruyor
    # ve okuyan kişi "işgal = Timur" sanıyordu. DEVLETE göre gruplanıyor: karar
    # tek tek yerleşim için değil, işgalci başına verilecek.
    grup = {}
    for yil, f, t, ad, dev in s_sandvic:
        grup.setdefault(dev, []).append((yil, f, t, ad))
    for dev, kayit in sorted(grup.items(), key=lambda x: -len(x[1])):
        yil, f, t, ad = kayit[0]
        print(f"      {len(kayit):3d} nokta  {str(dev):14s} örn {f} → {t}"
              f" ({yil:4.1f} y) {ad[:22]}")
        if ayrinti:
            for yil, f, t, ad in kayit[1:]:
                print(f"                {'':14s}     {f} → {t} ({yil:4.1f} y) {ad[:22]}")
    if v_isgal:
        print("    --- `v:` tarafında yazılmış olanlar ---")
        for f, t, ad, k in v_isgal:
            print(f"      {ad:24s} {f} → {t}   k:\"{k}\"")

    print()
    print("SONUÇ:", "temiz ✓" if not ihlal else f"İHLAL VAR ({ihlal} başlık) — çıkış kodu 1")
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
