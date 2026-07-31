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


# ------------------------------------------------- D) isg: işgal örtüsü
# ŞEMA KARARI (merkez oturum, 043e911): işgal bir dönem TÜRÜ değil, ÖRTÜ
# KATMANIDIR.
#
#     d: / v: / s:   DE JURE sahiplik   → haritanın taban rengi
#     isg:           DE FACTO denetim   → üstteki tarama
#
#   isg:[{f:"1878-07-29", t:"1908-10-05", d:"avusturya", y:"berlin-antlasmasi"}]
#
# 🔴 BURAYA YAZILI OLMASININ SEBEBİ — kural sezgiye ters, yazılmazsa bir sonraki
# oturum "düzeltir":
#     Saraybosna'nın `d:` dönemi 1908'e kadar sürüyor, ama Osmanlı 1878-1908
#     arası Bosna'yı FİİLEN idare etmiyordu. `d:` = "doğrudan idare" olduğuna
#     göre bu, kelimenin dar anlamıyla yanlış görünür.
#     BUNA RAĞMEN DOĞRU OLAN BUDUR: `d:` haritanın TABAN rengini belirler ve o
#     dönemde nominal hükümran Osmanlı'ydı — Berlin'de Bosna ilhak edilmedi,
#     "işgal ve idare" edildi, 1908'e kadar padişahın adı hutbede okundu.
#     Alternatif (1878'den itibaren `s:`) tabanı Avusturya yapar ve İLHAKI 30
#     YIL ÖNE ÇEKERDİ. O gerçekten yanlış olurdu.
# → Bir `isg:` örtüsünün altındaki `d:` ile çakışması İHLAL DEĞİLDİR. Örtünün
#   çakışMAMASI ihlaldir (§D-3).
#
# KAYNAK ALANI `kaynak:` — `y:` DEĞİL (şema düzeltmesi f8d4550).
# İlk yazımda `isg:` kaynak slug'ını `y:` alanına koyuyordu ve bu sessiz bir
# tuzaktı: `d:`/`s:` içinde `y:` KAZANIM BİÇİMİ enum'udur (savas | kusatma |
# antlasma | miras | vassal | ilhak). Aynı ada sahip iki alan, iki anlam —
# `y:`yi enum sanan araç slug'a takılır, kaynak sanan araç "savas"ı açmaya
# çalışır. D-5 bunu yakaladı, merkez oturum alanı `kaynak:`a taşıdı. Yeni ad
# uydurulmadı: `olaylar.js` kaynak slug'ı için zaten `kaynak:` kullanıyor.
#
# ⚠️ ESKİ ŞEMANIN KALINTISI DA İHLALDİR. Göç dakikalar içinde yapıldı ama üç
# kayıt yerine otuz olsaydı bir kısmı `y:` ile kalırdı; `y:` **bilinen** bir
# dönem alanı olduğu için girdi.py'nin alan kütüğü ona ses ÇIKARMAZ. Yani bu
# kalıntıyı yakalayacak tek yer burasıdır.
KAZANIM_ENUM = ("savas", "kusatma", "antlasma", "miras", "vassal", "ilhak")


def d_isgal_ortusu(Y, ol):
    """Beş soru sorar; her biri ayrı liste döndürür.

    D-1 `d:` (işgalci) alanı var mı        — kim işgal etti belli değilse çizilemez
    D-2 örtü altındaki de jure dönemle tam çakışıyor mu — açıkta tarama kalmasın
    D-3 işgalci = de jure sahip mi         — kendi kendini işgal anlamsız
    D-4 örtünün sınırlarının maddesi var mı — tarama ekranda BELİRİR/KAYBOLUR
    D-5 `kaynak:` slug'ı var mı / eski `y:` şemasından kalıntı var mı
    """
    dsiz, acikta, kendi, maddesiz, ksiz = [], [], [], [], []
    for y in Y:
        ortuler = y.get("isg") or []
        if not ortuler:
            continue
        taban = [(p.get("f"), p.get("t"), "d") for p in (y.get("d") or [])] + \
                [(p.get("f"), p.get("t"), "v") for p in (y.get("v") or [])] + \
                [(p.get("f"), p.get("t"), p.get("d")) for p in (y.get("s") or [])]
        taban = [t for t in taban if t[0] and t[1]]
        for p in ortuler:
            f, t, isgalci = p.get("f"), p.get("t"), p.get("d")
            if not (f and t):
                continue
            if not isgalci:
                dsiz.append((y["ad"], f, t))
            if not p.get("kaynak"):
                ksiz.append((y["ad"], f, t, "kaynak: YOK"))
            if p.get("y"):
                # `y:` isg: içinde ARTIK ANLAMSIZ. Değeri enum'dan olsa da
                # olmasa da kalıntıdır: enum'dansa kazanım biçimi örtüye
                # yazılmış, değilse eski kaynak şeması unutulmuş demektir.
                ne = "kazanım enum'u" if p["y"] in KAZANIM_ENUM else "eski kaynak şeması"
                ksiz.append((y["ad"], f, t,
                             f'y:"{p["y"]}" — {ne}; isg: içinde `kaynak:` kullanılır'))

            # D-2: örtünün her günü bir de jure dönemin içinde olmalı. Aralık
            # aritmetiği yerine gün gün taramak 927 yerleşimde pahalı; kesişimleri
            # birleştirip örtüyü kaplıyorlar mı diye bakılıyor.
            parca = sorted((max(f, a), min(t, b)) for a, b, _ in taban
                           if a < t and f < b)
            kapali, imlec = [], f
            for a, b in parca:
                if a > imlec:
                    kapali.append((imlec, a))
                imlec = max(imlec, b)
            if imlec < t:
                kapali.append((imlec, t))
            if kapali:
                acikta.append((y["ad"], f, t, kapali))

            # D-3: örtünün altındaki de jure sahip işgalcinin kendisi olamaz.
            for a, b, sahip in taban:
                if sahip == isgalci and a < t and f < b:
                    kendi.append((y["ad"], f, t, isgalci))
                    break

            # D-4: örtünün başı ve sonu haritada GÖRÜNÜR değişimdir — tarama
            # belirir ve kaybolur. Değişmez 2'nin örtü boyutu; aynı ±30 pencere.
            for g, ne in ((f, "işgal başlangıcı"), (t, "işgal sonu")):
                if g <= "1281-01-01" or g >= "1923-10-29":
                    continue
                if not any(abs(o["g"] - _gun(g)) <= PENCERE_GUN for o in ol):
                    maddesiz.append((g, ne, y["ad"], isgalci))
    return dsiz, acikta, kendi, maddesiz, ksiz


# ------------------------------------------ E) `k:` etiketi anakronizmi
# 🔴 GÖRÜNMEZ HATA SINIFI. `k:` alanını MOTOR OKUMUYOR (girdi.py:129) — etiket
# değişince harita renk değiştirmez, geometri değişmez, kırılma doğmaz. Yedi
# denetimin hiçbirine takılmaz. **Yalnız kullanıcı panelde okuyunca görür.**
#
# Yaşanmış (merkez oturum, 2026-07-31): dört kaydın anakronik
# `k:"Cezayir Ocaklığı (dayı idaresi)"` etiketi DEĞİŞTİRİLDİ; oysa dönemi
# BÖLMEK gerekiyordu. Ocaklık 1830'da lağvedildi ama 1671-1830 arası gerçekten
# ocaklıktı. 2-3 yıllık bir anakronizm düzeltilirken kayıt başına 159 YILLIK
# yenisi yazıldı — anakronizm yok olmadı, YÖNÜ TERSİNE DÖNDÜ. Hiçbir araç görmedi.
#
# Bu, §3.5'teki hayalet devlet denetiminin `v:` ETİKETLERİNE uygulanmış hâli.
#
# ⚠️ SÖZLÜK YALNIZ DOĞRULANABİLDİĞİM KURUMLARI İÇERİR. Ömrünü kaynağa
# dayandıramadığım etiket buraya YAZILMAZ ve "denetlenmiyor" diye raporlanır —
# denetle_anakronizm.py'nin `harita:` karşılığı olmayan 6 kimlik için yaptığının
# aynısı. Uydurma bir ömür, denetimi kendi uydurmasını doğrulayan şeye çevirir.
KURUM_OMRU = {
    "Cezayir Ocaklığı (dayı idaresi)": ("1671-01-01", "1830-07-05"),
    "Tunus Ocaklığı (Hüseynîler)": ("1705-07-15", "1881-05-12"),
    "Trablusgarp Ocaklığı (Karamanlılar)": ("1711-03-01", "1835-05-26"),
    "Macaristan (Zapolya vasal krallığı)": ("1526-09-01", "1541-08-29"),
    "Erdel Prensliği": ("1541-08-29", "1687-08-12"),
    "Crnojeviç Zetası (Osmanlı tâbii)": ("1451-01-01", "1499-01-01"),
    # Ahmed Bey Konstantin'i 1826'da devraldı, Fransızlar 1848'de sürgün etti.
    # ⚠️ Veride bir varyantı 1671'de başlıyor — 155 yıl erken, yukarıdaki vaka.
    "Ahmed Bey'in Konstantin beyliği": ("1826-01-01", "1848-06-25"),
    "Ahmed Bey'in Konstantin beyliği (Osmanlı adına)": ("1826-01-01", "1848-06-25"),
    # Hidiv unvanı 8 Haziran 1867'de verildi; öncesinde vali/paşadır.
    "Mısır Hidivliği": ("1867-06-08", "1914-12-18"),
    "Mısır ordusu (işgal)": ("1831-11-01", "1841-02-25"),
    "Osmanlı hükümranlık iddiası (ocaklık lağvedildi)": ("1830-07-05", "1837-10-13"),
}
# Ölçüldü: 27 ayrı `k:` değeri, 261 `v:` dönemi. Sözlükte olmayanların ömrü
# doğrulanamadı (Mekke Şerifliği, Boğdan/Eflak Voyvodalığı, Kırım Hanlığı,
# Sabah/Sânî emirlikleri…) — hepsi uzun ömürlü kurumlar ve veri aralıkları
# makul görünüyor, ama "makul görünüyor" ölçüm değildir; denetlenmiyor.
ETIKET_TASMA_GUN = 365      # bölgesel gecikme meşru, YIL mertebesi değil


def e_etiket_anakronizmi(Y):
    """(taşan, denetlenemeyen) — `k:` etiketi kurumun ömrünün dışına çıkıyor mu?"""
    tasan, bilinmeyen = [], {}
    for y in Y:
        for p in (y.get("v") or []):
            k = (p.get("k") or "").strip()
            f, t = p.get("f"), p.get("t")
            if not (k and f and t):
                continue
            if k not in KURUM_OMRU:
                bilinmeyen.setdefault(k, 0)
                bilinmeyen[k] += 1
                continue
            kf, kt = KURUM_OMRU[k]
            erken = _gun(kf) - _gun(f)
            gec = _gun(t) - _gun(kt)
            if erken > ETIKET_TASMA_GUN:
                tasan.append((erken / 365.2425, "ERKEN", y["ad"], f, t, k, kf, kt))
            if gec > ETIKET_TASMA_GUN:
                tasan.append((gec / 365.2425, "GEÇ", y["ad"], f, t, k, kf, kt))
    tasan.sort(reverse=True)
    return tasan, bilinmeyen


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

    # ---------------- D  (isg: örtüsü)
    dsiz, acikta, kendi, isg_maddesiz, ksiz = d_isgal_ortusu(Y, ol)
    n_ortu = sum(len(y.get("isg") or []) for y in Y)
    n_yer = sum(1 for y in Y if y.get("isg"))
    print(f"\n=== D) isg: İŞGAL ÖRTÜSÜ — {n_ortu} örtü / {n_yer} yerleşim ===")
    print("    de jure sahiplik d:/v:/s: · de facto denetim isg: — BAĞIMSIZ")
    print("    katmanlar, üst üste binerler. Örtünün altındaki `d:` ile")
    print("    ÇAKIŞMASI kuralın kendisidir, İHLAL DEĞİLDİR (şema kararı 043e911).")
    if not n_ortu:
        print("    i henüz örtü yok — denetim ileriye dönük bekçi olarak duruyor.")
    for ad, bulunan in (("işgalci `d:` alanı YOK", dsiz),
                        ("işgalci = de jure sahip (kendi kendini işgal)", kendi),
                        ("örtü altında DE JURE SAHİP YOK (açıkta tarama)", acikta),
                        ("örtü sınırının maddesi yok", isg_maddesiz),
                        ("`kaynak:` slug alanı sorunlu", ksiz)):
        if bulunan:
            ihlal += 1
            print(f"  ✗ {ad}: {len(bulunan)} (beklenen 0)")
            for r in (bulunan if ayrinti else bulunan[:8]):
                print(f"      {r}")
        elif n_ortu:
            print(f"  ✓ {ad}: 0")

    # ---------------- E) k: etiketi anakronizmi
    tasan, bilinmeyen = e_etiket_anakronizmi(Y)
    print(f"\n=== E) `k:` ETİKETİ ANAKRONİZMİ — GÖRÜNMEZ HATA SINIFI ===")
    print( "    `k:` alanını MOTOR OKUMUYOR: etiket değişince harita renk")
    print( "    değiştirmez, kırılma doğmaz, yedi denetimin hiçbirine takılmaz.")
    print( "    Yalnız kullanıcı panelde okuyunca görür.")
    if tasan:
        ihlal += 1
        print(f"  ✗ kurumun ömrü dışına taşan etiket: {len(tasan)} (beklenen 0)")
        for yil, yon, ad, f, t, k, kf, kt in (tasan if ayrinti else tasan[:10]):
            print(f"      {yil:6.1f} yıl {yon:5s} {ad:22s} {f}→{t}")
            print(f"                    k:\"{k}\"  kurum: {kf}→{kt}")
        if not ayrinti and len(tasan) > 10:
            print(f"      … {len(tasan)-10} satır daha (--ayrinti)")
    else:
        print( "  ✓ sözlükteki kurumların hepsi ömrü içinde")
    print(f"  i ömrü DOĞRULANAMAYAN {len(bilinmeyen)} etiket denetlenmiyor "
          f"({sum(bilinmeyen.values())} dönem):")
    print( "      " + ", ".join(sorted(bilinmeyen)[:6]) +
          (f" … +{len(bilinmeyen)-6}" if len(bilinmeyen) > 6 else ""))
    print( "      → uydurma ömür yazmaktansa denetlenmiyor demek doğru;")
    print( "        kaynağa dayandırılan her ömür KURUM_OMRU'ne eklenebilir.")

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
