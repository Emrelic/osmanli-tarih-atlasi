# -*- coding: utf-8 -*-
"""
ON BİRİNCİ DENETİM — kronoloji ↔ harita eşleşmesi
==================================================
Tek kök sebep, iki yüzü:

    **Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU olduğunu sormaz.**

±30 gün penceresi en yakın maddeyi eşleştirir ve alâkasız bir madde de "en
yakın" olabilir. Yaşanmış vakalar:

    Kudüs ve Nablus 1831-11-08'de el değiştiriyor
        → eşleşen madde: "İlk resmî gazete: Takvîm-i Vekāyi"
    Konstantin 1837-10-13'te Fransa'ya geçiyor
        → eşleşen madde: "Cebel-i Dürûz ayaklanması"  (Suriye'de!)
    Murzuk'un 215.000 km²'lik peteği 1577'de renk değiştiriyor
        → eşleşen madde: "İstanbul Rasathanesi kuruldu"

Aynı bağın ters yönü kullanıcının başka bir şikâyeti (hatalar 13 md.2):

    "Bir yerin fethinden bahsediliyorsa haritada O YERİN gösterilmesi lazım."
    → "Varna alınıyor ama Varna etiketi haritada yok."

İkisi de tek soruya bakıyor — *bu madde ile bu yer birbirine ait mi* — ama
zıt yönlerden: A kırılmadan maddeye, B maddeden yerleşime.

ÇALIŞTIRMA
    py arac/denetle_eslesme.py             # özet
    py arac/denetle_eslesme.py --ayrinti   # bütün satırlar

⚠️ İKİSİ DE İHLAL DEĞİL, GÖZDEN GEÇİRME KADEMESİ — sebebi ölçümde (§A).
"""
import io
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import girdi
import denetle

if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

PENCERE_GUN = 30            # Değişmez 2 ile aynı; bilerek aynı

# ⚠️ ÖLÇÜLDÜ (30 Temmuz 2026 · 939 yerleşim · 971 madde · 452 kırılma):
#     A) kırılma 452 · adı geçen 395 · GEÇMEYEN 57  (%13)
#     B) toprak maddesi 366 · şehri çözülen 346 · çözülemeyen ~18 (%5)
# Hiçbiri "yüzlerce" değil, yani tavan/borç deseni gerekmiyor. Ama İHLAL de
# olamazlar ve sebebi A'nın içinde: 57'nin bir kısmı DOĞRU eşleşmedir.
# Londra Protokolü 1830 (21 nokta), Mondros 1918 (9 nokta), Küçük Kaynarca
# 1774 (5 nokta) — antlaşma maddeleri onlarca yerleşimi tek kalemde devreder
# ve adlarını saymaz. Bunlar yanlış eşleşme değil, EKSİK `yer:` alanıdır.
# Ölçüt onları ayırt edemiyor; edemediği için de ihlal ilan edemez.
# ⚠️ A'NIN TAVANI HAREKETLİ HEDEFTİR ve bunu bilerek yazıyorum: kırılma sayısı
# her içerik oturumuyla artıyor (452 → …), şüpheli sayısı da onunla birlikte
# artar. 57 ilk ölçümdü, veri büyüyünce 68 oldu. Tavanı her veri artışında
# yükseltmek denetimi işlevsizleştirir; doğru okuma ORANDIR (%13 → %15).
# Oran ciddi biçimde yükselirse yeni yazılan maddeler yerinden bahsetmiyor
# demektir. Sayı tavanı yalnız kaba bir emniyet kemeri.
# 68 -> 97: SAYI ARTTI AMA VERİ KÖTÜLEŞMEDİ — araç körlüğünü kaybetti.
# `d:` gövdesi eşleştirmeden çıkarılınca (§26 üretilmiş ek) 28 kırılmanın
# sahte geçişi ortaya döküldü, iki yanlı kelime sınırı da bir kısmını ekledi.
# Tavanı yükseltmek burada GERİLEME DEĞİL, ölçüm düzelmesidir.
BEKLENEN_A = 97
# B'nin tavanı ölçüldü: 14. İlk ölçüm 18'di ve fark ARACIN DÜZELMESİNDEN geldi
# — kelime sınırı eklenince Niş, Şam, Özi çözüldü. Veri değişmedi, körlük azaldı.
# 14 -> 17: aynı sebep — sağ kelime sınırı "Roma ⊂ Romanya" gibi sahte
# çözümleri kaldırdı, o maddeler artık "şehri çözülemeyen" sayılıyor.
BEKLENEN_B = 17
# ÖLÇÜLDÜ (31 Temmuz 2026 · 951 yerleşim · 984 madde): 184 madde birden çok
# yerleşim anıyor, **113'ünde anılan yerlerin bir kısmı kıpırdamıyor**
# (fetih 58 · kayip 35 · antlasma 20).
# ⚠️ TAVAN İLK KOŞUDAN SONRA KONDU, önce değil. Bu dosyada tavanı ölçmeden
# yazmak iki kez yanlış çıktı (bkz. denetim/BITISIKLIK-2026-07-30.md).
# 113 -> 92: ARABISTAN'in hal eki + `yer:` ayrimi olcutu uygulandi. Dususun
# 17'si `antlasma` sinifindan, yani kural tam hedefledigi yeri kesti.
# ⚠️ Tavan ARACIN KENDI kosusundan alindi (93), on-olcum betiginden (92)
# degil. Bir fark vardi ve kaynagi onemli degil - onemli olan tavanin
# denetimi kosturan kodun ciktisindan gelmesi.
# 93 -> 73: kapsayan yer muafiyeti (RAFINE). Ham hali 61 veriyordu ama
# MEKKE'YI OLDURUYORDU - denetimin var olma sebebini. Rafine kural
# kapsayiciyi yalniz BASLIKTA ANILMAMISSA muaf tutuyor.
BEKLENEN_C = 73

# ⚠️ AD EŞLEŞTİRME İKİ KEZ YANLIŞ KURULDU; ikisi de kayda geçsin.
#   1) "en az 4 harf" filtresi Niş, Şam, Özi'yi eliyordu — üçü de veride VARDI.
#   2) Sonra SOL kelime sınırı eklendi ama SAĞ sınır konmadı. Türkçe eklemeli
#      bir dil olduğu için bu sessizce yanlış eşleşme üretti:
#         "Bar (Podolya)"  ⊂  "barışı"        → 26 maddede hayalet yerleşim
#         "Roma"           ⊂  "Romanya"
#         "Kazan"          ⊂  "kazanıldı"
#         "Kavala"         ⊂  "Kavalalı"
#         "Ordu"           ⊂  "ordusunun"
#      ARABİSTAN oturumu §19'da parça eşleşme uyardı; ölçünce çoklu-yer
#      denetiminde 151 bulgunun 38'inin bu hayaletlerden geldiği çıktı.
# ŞİMDİKİ KURAL: iki yanda da harf olmayacak. Türkçe eki kesme işareti ayırır
# ("Bağdat'ın" → "Bağdat" + "'"), o yüzden apostrof sağ sınır sayılır ve
# yumuşak/kıvrık apostrof düz apostrofa normalize edilir.
HARF = "a-zçğıöşüâîû"

# `s:`/`d:` kayıtlarında ad parantezli alternatif taşıyabiliyor. Bazıları
# GENEL COĞRAFYA sözcüğü ("Batı çölü (Mısır)", "Üstyurt platosu (doğu)") ve
# alt dize aramasında her metne uyar. Ölçümde iki yanlış eşleşme üretti.
GENEL_SOZCUK = {"doğu", "batı", "kuzey", "güney", "iç", "orta", "yukarı",
                "aşağı", "mısır", "necid", "yemen", "sudan", "libya"}


def _adlar(y):
    """Bir yerleşimin metinde aranacak adları — asıl ad + parantezli karşılık."""
    ham = y["ad"]
    A = {re.sub(r"\s*\(.*?\)", "", ham).strip()}
    m = re.search(r"\((.*?)\)", ham)
    if m:
        alt = m.group(1).strip()
        if alt.lower() not in GENEL_SOZCUK:
            A.add(alt)
    return {a for a in A if len(a) >= 3}


def indeks(Y):
    """(desen, yerleşim) çiftleri — HER ad iki yanlı kelime sınırıyla derlenir."""
    ix = []
    for y in Y:
        for a in _adlar(y):
            d = re.compile(f"(?<![{HARF}])" + re.escape(a.lower()) + f"(?![{HARF}])")
            ix.append((d, y, a.lower()))
    return ix


def gecen(ix, metin):
    """ORTAK TEST — bu metin hangi yerleşimlerden bahsediyor?

    A ve B bölümleri de, ileride yazılacak başka denetimler de bunu çağırır.
    Tek yerde durmasının sebebi ölçülmüş bir hata: "en az 4 harf" kuralı bir
    kopyada düzeltilip diğerinde unutulsa iki araç aynı veriye farklı cevap
    verirdi — bu depoda `girdi.py` tam bu yüzden tek okuma noktası yapıldı.
    """
    m = (metin or "").lower().replace("’", "'")
    return [y for desen, y, _ in ix if desen.search(m)]


def _sahipli(y, g):
    for kat in ("d", "v", "s"):
        for p in (y.get(kat) or []):
            if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
                return True
    return False


# ------------------------------------------- A) kırılma → madde (§18)
def a_yanlis_eslesme(Y, O, ix):
    # ⚠️ `d:` GÖVDESİ BİLEREK DIŞARIDA. OGRENILENLER §26: gövdenin sonundaki
    # "Aynı tarihte elden çıkan diğer yerleşimler: …" cümlesi ÜRETİLMİŞ bir ektir
    # ve zaten kırılması olan adları sayar. Onu eşleştirmeye katmak denetimin
    # kendi kuyruğunu ısırması demek: kırılma, kendi ürettiği listede adı geçtiği
    # için "maddesi var" sayılıyordu. Ölçüldü — 28 kırılma bu yolla sessizce
    # geçmiş (67 → 95). Yenbu' 1811-11-01 tam bu 28'in içindeydi.
    ol = [{"g": denetle.gun_no(o["t"]),
           "m": (o.get("b", "") + " " + o.get("yer", "")),
           "b": o.get("b", "")} for o in O]
    kir = {}
    for y in Y:
        for p in (y.get("d") or []) + (y.get("v") or []):
            for dt in (p.get("f"), p.get("t")):
                if not dt or dt <= "1281-01-01" or dt >= "1923-10-29":
                    continue
                kir.setdefault(dt, set()).add(y["ad"])

    supheli = []
    for dt, yerler in sorted(kir.items()):
        gd = denetle.gun_no(dt)
        yakin = [o for o in ol if abs(o["g"] - gd) <= PENCERE_GUN]
        if not yakin:
            continue                     # Değişmez 2'nin işi, burada sayılmaz
        if any(any(a["ad"] in yerler for a in gecen(ix, o["m"])) for o in yakin):
            continue
        en = min(yakin, key=lambda o: abs(o["g"] - gd))
        supheli.append((dt, sorted(yerler), en["b"], abs(en["g"] - gd)))
    return len(kir), supheli


# ------------------------------------ B) toprak maddesi → yerleşim (Varna)
def b_madde_sehri(O, ix):
    yok, donemsiz = [], []
    for o in O:
        if o.get("k") not in ("fetih", "kayip"):
            continue
        bulunan = gecen(ix, (o.get("yer", "") + " " + o.get("b", "")))
        if not bulunan:
            yok.append((o["t"], (o.get("yer") or "")[:24], o.get("b", "")[:46]))
            continue
        g = denetle.tam(o["t"])
        if not any(_sahipli(y, g) for y in bulunan):
            donemsiz.append((o["t"], bulunan[0]["ad"], o.get("b", "")[:44]))
    return yok, donemsiz


# --------------------- C) ÇOKLU YER — maddenin andığı HER yer kıpırdıyor mu
# ARABİSTAN oturumunun bulduğu sınıf (hatalar 16 md.8). Kullanıcı şunu gördü:
#
#   ek5:300 (1803-05-15) "Vehhâbîlerin MEKKE ve TÂİF'i ele geçirmesi"
#                        → haritada yalnız TÂİF döner, Mekke'de 1803 dönemi YOK
#   ek6:85  (1806-02-01) "MEKKE'nin Vehhâbîlere kaybı"  → MEKKE döner
#
# "Mekke alındı" başlığı iki kez okunuyor, harita birincisinde başka yeri
# boyuyor. Kullanıcının "iki kez farklı yerlerde aksiyon" şikâyeti bu.
#
# ÜÇ DENETİM DE KAÇIRIYOR ve sebebi aynı — hepsi VARLIK sorar, KAPSAM sormaz:
#   Değişmez 2  : "her kırılmanın maddesi var mı"  → Tâif'in kırılması var, geçer
#   Değişmez 2t : "her maddenin kırılması var mı"  → aynı sebeple geçer
#   mükerrer    : ±400 gün bakar, iki madde arası 993 gün → menzil dışı
# Hiçbiri "maddenin andığı HER yerleşimin kırılması var mı" sormuyor.
#
# ⚠️ MÜKERRER DEĞİLLER. TDV `mekke` Mekke'nin iki kez düştüğünü veriyor
# (30 Nisan 1803 işgal → ~6 Ağustos 1803 Şerif Gālib geri alır → Ocak 1806
# ikinci düşüş → 23 Ocak 1813 Tosun Paşa). Mükerrer kademesi doğru davrandı.
# ---- KALINTI YANLIŞ POZİTİF AYIKLAYICISI (ARABİSTAN oturumunun ölçütü) ----
# "Modon'un VENEDİK'e kaybı" — Venedik toprak değiştirmiyor, karşı taraf.
# Kaldıraç Türkçe HÂL EKİ: toprak değiştiren yer ile karşı taraf farklı hâlde
# duruyor ve apostrof eki zaten ayırıyor (§19'da kurulan makine).
#
#   TUT  tamlayan -ın/-in · belirtme -ı/-i · bulunma -de/-da
#        ⚠️ bulunma ATILMAZ: "Katar'da Osmanlı kontrolünün kurulması"nda
#           Katar gerçekten el değiştiriyor.
#   AT   yönelme -e/-a  ·  çıkma -den/-dan     → karşı taraf
#   AT   özel ad tamlaması: "İstanbul Antlaşması", "Preveze Deniz Muharebesi"
#
# 🔴 D) İSTİSNA — bu olmazsa Mekke vakası KENDİ KURALIYLA ELENİR:
#   "Vehhâbîlerin MEKKE ve TÂİF'i ele geçirmesi" → Mekke ÇIPLAK, eki yok.
#   Türkçede ek yalnız son öğeye gelir. Bağlaçla (ve/ile/virgül) bağlanmış
#   çıplak yer adı da TUTULUR.
#
# ⚠️ ÖLÇÜLDÜ, ÖNCE SINANDI SONRA UYGULANDI (ARABİSTAN kendi önerisi için
# "bunu ölçmedim" dedi ve haklıydı — kâğıt üstünde doğru görünen ölçüt burada
# iki kez yanlış çıkmıştı). Sonuç:
#     şimdiki                113 (fetih 58 · kayip 35 · antlasma 20)
#     yalnız `yer:` ayrımı   107
#     yalnız hâl eki         107
#     İKİSİ BİRDEN            92 (fetih 57 · kayip 32 · antlasma  3)
# Düşüşün 17'si `antlasma` — yani kural tam hedeflediği sınıfı kesti, geri
# kalanı değil. Beş kabul sınamasının beşi de sağ kaldı:
#   Mekke 1/2 · Cüneyd 5/5 · Bosna 3/3 · İyon 4/4 · Karesi 2/7
CIKMA_YONELME = tuple(sorted(("den", "dan", "ten", "tan", "ye", "ya", "e", "a"),
                             key=len, reverse=True))
BULUNMA_TAMLAYAN = tuple(sorted(("nın", "nin", "nun", "nün", "ın", "in", "un", "ün",
                                 "yı", "yi", "yu", "yü", "ı", "i", "u", "ü",
                                 "de", "da", "te", "ta"), key=len, reverse=True))
TAMLAMA_BASI = ("antlaşması", "muahedesi", "sözleşmesi", "barışı", "mütarekesi",
                "kongresi", "konferansı", "seferi", "savaşı", "harbi",
                "muharebesi", "kuşatması", "bozgunu", "baskını", "fermanı",
                "protokolü", "itilâfnâmesi", "ahidnâmesi")


def _katilimci_mi(baslik, ad):
    """Bu ad başlıkta TOPRAK DEĞİŞTİREN mi, yoksa karşı taraf / antlaşma adı mı?"""
    m = baslik.lower().replace("’", "'")
    a = ad.lower()
    kararlar = []
    for mt in re.finditer(re.escape(a), m):
        son = m[mt.end():]
        if son.startswith("'"):
            ek = son[1:]
            uzun_tut = max((len(t) for t in BULUNMA_TAMLAYAN if ek.startswith(t)),
                           default=0)
            uzun_at = max((len(e) for e in CIKMA_YONELME if ek.startswith(e)),
                          default=0)
            kararlar.append("AT" if uzun_at > uzun_tut else "TUT")
            continue
        if any(son.lstrip().startswith(b) for b in TAMLAMA_BASI):
            kararlar.append("AT")
            continue
        kararlar.append("TUT")          # çıplak ad (D istisnası dahil)
    return "TUT" in kararlar if kararlar else True


def _adlar_ad(Y, ad):
    y = next((x for x in Y if x["ad"] == ad), None)
    return _adlar(y) if y else {ad}


def _merkez(Y, ad):
    y = next((x for x in Y if x["ad"] == ad), None)
    return (y or {}).get("m")


def _ust_zincir(Y, ad):
    """`m:` zinciri — bir yerleşimin bağlı olduğu bütün üst merkezler."""
    z, imlec = set(), ad
    for _ in range(6):
        ust = _merkez(Y, imlec)
        if not ust or ust in z:
            break
        z.add(ust)
        imlec = ust
    return z


def c_coklu_yer(Y, O, ix):
    kir = {}
    for y in Y:
        for kat in ("d", "v", "s"):
            for p in (y.get(kat) or []):
                for dt in (p.get("f"), p.get("t")):
                    if dt:
                        kir.setdefault(y["ad"], set()).add(denetle.gun_no(dt))
    coklu, eksik = 0, []
    for o in O:
        if o.get("k") not in ("fetih", "kayip", "antlasma"):
            continue
        # ⚠️ `antlasma` maddelerinde `yer:` İMZA YERİDİR, el değiştiren yer değil:
        # "Baltalimanı Sözleşmesi" → yer:"Baltalimanı, İstanbul" — ikisi de toprak
        # değiştirmiyor, masanın adresi. Ölçüldü: bu ayrım tek başına antlasma
        # bulgularını 20'den 14'e, hâl ekiyle birlikte 3'e indiriyor.
        baslik = o.get("b", "")
        yer = "" if o.get("k") == "antlasma" else o.get("yer", "")
        anilan = set()
        for y in gecen(ix, baslik + " " + yer):
            # `yer:` çıplak ad listesidir, ek almaz — oradan gelen ad her zaman
            # katılımcıdır. Hâl eki ölçütü YALNIZ `b:` başlığına uygulanır.
            if yer and any(a.lower() in yer.lower() for a in _adlar(y)):
                anilan.add(y["ad"])
            elif any(_katilimci_mi(baslik, a) for a in _adlar(y)):
                anilan.add(y["ad"])
        if len(anilan) < 2:
            continue
        coklu += 1
        g = denetle.gun_no(o["t"])
        kipirdayan = {a for a in anilan
                      if any(abs(x - g) <= PENCERE_GUN for x in kir.get(a, ()))}
        eksik_ad = anilan - kipirdayan
        # ---- KAPSAYAN YER MUAFİYETİ (ARABİSTAN'ın ikinci önerisi, RAFİNE)
        # "Koron'un Venedik'e kaybı" · yer:"Mora kıyıları" — Koron kıpırdıyor,
        # Mora bölge olarak kıpırdamıyor ve kıpırdaması da BEKLENMEZ: Koron
        # zaten Mora'nın içinde. `m:` zinciri bu kapsamayı veride tutuyor.
        #
        # ⚠️ HAM HÂLİYLE UYGULAMADIM ÇÜNKÜ ÖLÇÜNCE MEKKE'Yİ ÖLDÜRÜYORDU.
        # Mekke, Tâif'in `m:` zincirinde; ham muafiyet 93 → 61 indiriyor ama
        # bu denetimin VAR OLMA SEBEBİ olan vakayı da eliyor — D istisnasında
        # kaçtığımız tuzağın aynısı, başka kılıkta.
        # RAFİNE KURAL: kapsayıcı **başlıkta anılmışsa muaf DEĞİLDİR.**
        #   "Vehhâbîlerin MEKKE ve Tâif'i…" → Mekke başlıkta, iddia ediliyor → TUT
        #   "Koron'un Venedik'e kaybı" + yer:"Mora kıyıları" → Mora yalnız
        #    konum belirtiyor, iddia edilmiyor → MUAF
        # Ölçüldü: 93 → 73, beş kabul sınamasının beşi de sağ.
        def _kapsayici_mi(a):
            if any(x.lower() in baslik.lower() for x in _adlar_ad(Y, a)):
                return False                      # başlıkta anılmış → iddia
            return any(a in _ust_zincir(Y, k) for k in kipirdayan)
        eksik_ad = {a for a in eksik_ad if not _kapsayici_mi(a)}
        if eksik_ad:
            eksik.append((len(eksik_ad), len(anilan), o["t"],
                          o.get("k", ""), o.get("b", ""), sorted(eksik_ad)))
    eksik.sort(reverse=True)
    return coklu, eksik


# ============================================================================
# 🔴 DOĞURAN VAKA SINAMASI — bu blok bir denetim değil, denetimin BEKÇİSİ
# ============================================================================
# İki kez aynı şey oldu ve ikisi de "iyileştirme" kılığındaydı:
#
#   · hâl eki kuralı  → D istisnası olmasa Mekke'yi silecekti
#   · `m:` muafiyeti  → rafine hâli olmasa Mekke'yi sildi (ölçüldü: 93 → 61)
#
# İki farklı mekanizma, AYNI KURBAN: denetimin var olma sebebi olan vaka.
# Sebep yapısal — her iyileştirme "gürültüyü azaltmak" için yazılır ve
# motive edici vaka çoğu zaman EN ATİPİK olandır, yani en kırılgan.
# Ve sayı düştüğü için **başarı gibi görünür.**
#
# ARABİSTAN oturumunun önerisi: kabul sınamalarını elle koşmak yerine koda
# göm. Bir sonraki iyileştirme "93 → 61, harika" dediğinde bu blok itiraz eder.
#
# Buraya yalnız GERÇEK, KAYNAĞA DAYALI vaka girer — sentetik örnek değil.
DOGURAN_VAKALAR = [
    # (tarih, başlıkta geçen ibare, eksik çıkması BEKLENEN yerleşim, kim buldu)
    ("1878-07-29", "Bosna-Hersek", "Saraybosna", "çoklu-yer ölçümü"),
    ("1345-01-01", "Karesi Beyliği", "Mihaliç (Karacabey)", "çoklu-yer ölçümü"),
]


# ── ÖDENMİŞ VAKALAR — BEKÇİNİN TERS YÜZÜ ─────────────────────────────────
# 🔴 2 Eylül 2026: yukarıdaki listenin ÜÇ vakası "artık yakalanmıyor" diye
# ötüyordu. OPUS 102 çatalı ölçtü — bekçinin kendi cümlesiyle:
#     "son değişikliği geri al ya da vakanın gerçekten DÜZELTİLDİĞİNİ
#      DOĞRULA; ikisi aynı şey değildir."
# Ölçüm: ÜÇÜ DE (b) — VERİ DÜZELDİ, gerileme YOK. Beklenen yerleşimin kendi
# kırılması artık VERİDE VAR:
#     Aydın      1422-01-01  d-kayıp + s-kazanç(aydin)
#     Kefalonya  1479-08-01  d-kazanç + s-kayıp(napoli)
#     Mekke      1803-04-30  v-kayıp + s-kazanç(suud)
# Ve Mekke en güçlü biçimde ödenmiş: bekçinin aradığı `1803-05-15` diye bir
# madde ARTIK YOK — birleşik madde İKİ GERÇEK OLAYA bölünmüş (1803-02-01
# Tâif · 1803-04-30 Mekke) ve zincirin tamamı yazılmış (1803 alınış ·
# 1803-08-06 geri alış · 1806-01-01 tekrar kayıp · 1813-01-23 geri alış).
# ⇒ Kusur "kapatılmadı", ÇÖZÜLDÜ. (`denetim/BULGU-BEKCI-CATAL-OK102.md`)
#
# 🔴 AMA ÜÇÜNÜ LİSTEDEN SİLİP GEÇMEK KORUMA KAYBIDIR: yarın biri Mekke'nin
# 1803-04-30 kırılmasını silse ya da iki maddeyi yeniden birleştirse
# HİÇBİR ŞEY ÖTMEZ. Bekçiyi silmek yalan güven, bırakmak yalan alarm.
# ⇒ ÜÇÜNCÜ YOL: soru TERSİNE ÇEVRİLİYOR.
#     DOGURAN_VAKALAR  "bu kusur HÂLÂ yakalanmalı"        (açık borç)
#     ODENMIS_VAKALAR  "bu kusur ARTIK OLMAMALI, ve ödemenin KENDİSİ
#                       (şu kırılma) VERİDE DURMALI"      (ödenmiş borç)
# 📌 `CLAUDE.md §11`in *"kabul edilmiş bir borç kayıtsız kalırsa yarın kusur
#    diye yeniden bulunur"* dersinin TERS YÜZÜ: ödenmiş bir borç da kayıtsız
#    kalırsa yarın GERİ ALINABİLİR ve kimse fark etmez. Kayıt iki yöne de
#    gerekiyor — ve `if` ile sorulabilir olmalı (§11 ⑪).
ODENMIS_VAKALAR = [
    # (yerleşim, ödemenin kırılma günü, ödeme biçimi)
    ("Mekke", "1803-04-30",
     "birleşik madde İKİYE BÖLÜNDÜ (1803-02-01 Tâif · 1803-04-30 Mekke); "
     "zincir 1803/1806/1813 modellendi"),
    ("Aydın", "1422-01-01",
     "Aydın'ın kendi kırılması yazıldı (d bitiş → s:aydin)"),
    ("Kefalonya", "1479-08-01",
     "Kefalonya'nın kendi kırılması yazıldı (d kazanç, s:napoli kayıp)"),
]


# ============================================================================
# A DEFTERİ — tavan bir SAYI, defter bir KÜMEDİR
# ============================================================================
# 2026-08-01'de tavan aşıldı: 97 → 109. Sayıya bakıp "veri büyüdü" demek
# mümkündü (476 → 482 kırılma) ama SAYI BU SORUYU CEVAPLAYAMIYOR: kırılma 6
# arttı, şüpheli 12. Demek ki en az 6 tanesi ESKİDEN TEMİZ OLAN kırılmaydı.
# Hangileri? Tavan söyleyemez — çünkü tavan bir sayıdır, küme değil.
#
# Aynı ders boşluk envanterinde de çıktı ve orada baştan doğru kurulmuştu:
# kararlı kimlik + defter. Burada eksikti. Defter iki yönü de adlandırır:
#     YENİ    → bu koşuda ortaya çıkan şüpheli (gerileme adayı)
#     KAPANAN → defterde olup artık çıkmayan (borç ödenmiş)
# Tavanın kendisi kalıyor; defter onun neden değiştiğini SÖYLEYEN kısım.
A_DEFTERI = os.path.join(denetle.KOK, "denetim", "ESLESME-A-DEFTERI.json")
B_DEFTERI = os.path.join(denetle.KOK, "denetim", "ESLESME-B-DEFTERI.json")


def _a_kimlik(kayit):
    """(tarih, kırılan ilk yer) — kırılmanın kararlı kimliği.

    ⚠️ Madde başlığı kimliğe GİRMEZ: madde düzeltilince kimlik değişir ve
    aynı kırılma "kapandı + yeni açıldı" diye iki kez görünürdü.
    """
    dt, yerler = kayit[0], kayit[1]
    return "%s|%s" % (dt, yerler[0] if yerler else "?")


def _defter(yol, simdi, yaz, not_metni):
    """(yeni, kapanan, defter_boyu). A ve B aynı mantığı paylaşır.

    ⚠️ Tek gövde, çünkü iki kopya yazmak bu depoda beş kez "bayat kopya"
    üretti: biri düzeltiliyor, öteki eskisiyle kalıyor ve ikisi çelişince
    hangisinin doğru olduğu bilinmiyor.
    """
    eski = {}
    if os.path.exists(yol):
        try:
            eski = json.load(io.open(yol, encoding="utf-8"))
            eski.pop("_NOT", None)
        except Exception:
            print("  !  %s okunamadı — bozuk olabilir" % os.path.basename(yol))
    yeni = sorted(k for k in simdi if k not in eski)
    kapanan = sorted(k for k in eski if k not in simdi)
    if yaz:
        kayit = dict(simdi)
        kayit["_NOT"] = not_metni
        io.open(yol, "w", encoding="utf-8", newline="").write(
            json.dumps(kayit, ensure_ascii=False, indent=1, sort_keys=True))
    return yeni, kapanan, len(eski)


_A_NOT = ("TEMEL DEFTER, 2026-08-01. ⚠️ TAVAN AŞILMIŞ HÂLDEYKEN yazıldı "
          "(109 şüpheli / tavan 97). Yani bu defterdeki üyelerin yaklaşık "
          "12'si tavan konduktan SONRA ortaya çıkmış ve TEK TEK "
          "İNCELENMEMİŞTİR — 'defterde var' demek 'incelendi ve kabul edildi' "
          "DEMEK DEĞİLDİR. Defterin işlevi ileriye dönük: bundan sonraki her "
          "ekleme YENİ diye adıyla raporlanır. Geriye dönük temizlik ayrı iş.")

_B_NOT = ("TEMEL DEFTER, 2026-08-01. ⚠️ TAVAN AŞILMIŞ HÂLDEYKEN yazıldı "
          "(19 / tavan 17). Üyelerin çoğu BÖLGE adıdır (Teselya, Dobruca, "
          "Bosna, Kıbrıs) — yerleşim kaydı beklenmez ama haritada da hiçbir "
          "nokta yanmaz; yani hepsi 'kabul edilmiş' değil, 'bilinen'dir. "
          "'Defterde var' ≠ 'incelendi ve kabul edildi'.")


def a_defteri(supheli, yaz=False):
    return _defter(A_DEFTERI, {_a_kimlik(k): k[2] for k in supheli},
                   yaz, _A_NOT)


def b_defteri(yok, yaz=False):
    """B kimliği: `tarih|yer:` — madde başlığı kimliğe GİRMEZ (A'daki gerekçe)."""
    return _defter(B_DEFTERI,
                   {"%s|%s" % (t, (y or "?")): b for t, y, b in yok},
                   yaz, _B_NOT)


def odenmis_vaka_sinamasi(Y):
    """ÖDENMİŞ borç GERİ ALINDI mı? — bekçinin ters yüzü.

    Soru: ödemenin kendisi (o kırılma) VERİDE hâlâ duruyor mu?
    ⚠️ `bit:`/`kur:` bakılmaz — kırılmanın VARLIĞI sorulur, geçerliliği değil;
    kayıt silinirse ya da günü kaydırılırsa bu blok öter.
    """
    geri_alinan = []
    for ad, gun, nasil in ODENMIS_VAKALAR:
        var = False
        for y in Y:
            if y["ad"] != ad:
                continue
            for kat in ("d", "v", "s"):
                for p in (y.get(kat) or []):
                    if p.get("f") == gun or p.get("t") == gun:
                        var = True
        if not var:
            geri_alinan.append((ad, gun, nasil))
    return geri_alinan


def doguran_vaka_sinamasi(eksik):
    """Denetimi doğuran vakalar HÂLÂ yakalanıyor mu?"""
    bulgu = {(r[2], tuple(r[5])) for r in eksik}
    kayip = []
    for tarih, ibare, beklenen, kim in DOGURAN_VAKALAR:
        if not any(t == tarih and beklenen in adlar for t, adlar in bulgu):
            kayip.append((tarih, ibare, beklenen, kim))
    return kayip


def main():
    ayrinti = "--ayrinti" in sys.argv
    Y = girdi.yukle(sessiz=True)
    O = denetle.olaylari_yukle()
    ix = indeks(Y)
    print("Eşleşme denetimi — madde ile yer birbirine ait mi?\n")
    print(f"  {len(Y)} yerleşim · {len(O)} madde · {len(ix)} ad deseni · pencere ±{PENCERE_GUN} gün")
    ihlal = 0

    n_kir, supheli = a_yanlis_eslesme(Y, O, ix)
    print(f"\n=== A) KIRILMA → MADDE — {n_kir} kırılma ===")
    print( "    Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU olduğunu sormaz.")
    print(f"    Eşleşen maddelerin hiçbiri kırılmanın yerinden bahsetmiyor: "
          f"{len(supheli)} (%{100*len(supheli)//max(1,n_kir)})")
    if len(supheli) > BEKLENEN_A:
        ihlal += 1
        print(f"  ✗ {len(supheli)} şüpheli (tavan {BEKLENEN_A}) — YENİ YANLIŞ EŞLEŞME")
    else:
        print(f"  i {len(supheli)} şüpheli (tavan {BEKLENEN_A}) — İHLAL DEĞİL, gözden geçirme")
    print( "    ⚠️ Bir kısmı DOĞRU eşleşmedir: antlaşma maddeleri onlarca yerleşimi")
    print( "       tek kalemde devreder ve adlarını saymaz (Londra 1830 → 21 nokta,")
    print( "       Mondros 1918 → 9 nokta). Onlarınki yanlış eşleşme değil, eksik `yer:`.")
    for dt, yerler, b, fark in (supheli if ayrinti else
                                sorted(supheli, key=lambda r: -len(r[1]))[:16]):
        print(f"      {dt}  ({len(yerler):3d}) {', '.join(yerler[:2])[:32]:32s}"
              f" | {fark:2d}g | {b[:44]}")
    if not ayrinti and len(supheli) > 16:
        print(f"      … {len(supheli)-16} satır daha (--ayrinti)")

    # ---- A DEFTERİ: tavanın NEDEN değiştiğini söyleyen kısım --------------
    yeni_a, kapanan_a, defter_boyu = a_defteri(supheli, yaz="--defter-yaz" in sys.argv)
    if defter_boyu == 0:
        print("    i A defteri BOŞ — ilk kez yazmak için: --defter-yaz")
    else:
        print(f"    A defteri: {defter_boyu} kayıt · YENİ {len(yeni_a)} · KAPANAN {len(kapanan_a)}")
        for k in yeni_a[:12]:
            print(f"      + YENİ    {k}")
        if len(yeni_a) > 12:
            print(f"      … +{len(yeni_a)-12} yeni daha")
        for k in kapanan_a[:8]:
            print(f"      - KAPANAN {k}")
        if yeni_a:
            print("      → YENİ olanlar gerileme adayıdır: kırılma eskiden bir maddenin")
            print("        andığı yerdeydi, artık değil. Veri mi değişti, madde mi?")

    yok, donemsiz = b_madde_sehri(O, ix)
    n_top = sum(1 for o in O if o.get("k") in ("fetih", "kayip"))
    print(f"\n=== B) TOPRAK MADDESİ → YERLEŞİM — {n_top} madde ===")
    print( "    'Bir yerin fethinden bahsediliyorsa haritada O YER gösterilmeli.'")
    if len(yok) > BEKLENEN_B:
        ihlal += 1
        print(f"  ✗ şehri hiç çözülemeyen: {len(yok)} (tavan {BEKLENEN_B})")
    else:
        print(f"  i şehri hiç çözülemeyen: {len(yok)} (tavan {BEKLENEN_B}) — gözden geçirme")
    print( "    → çoğu BÖLGE adıdır ('Teselya', 'Dobruca', 'Bosna'): yerleşim")
    print( "      kaydı beklenmez, ama haritada da hiçbir nokta yanmaz.")
    for dt, yer, b in (yok if ayrinti else yok[:14]):
        print(f"      {dt}  yer:{yer:24s} {b}")
    if not ayrinti and len(yok) > 14:
        print(f"      … {len(yok)-14} satır daha (--ayrinti)")

    # ---- B DEFTERİ: A ile aynı gerekçe — 19 > 17 diyor, HANGİ İKİSİ demiyor
    yeni_b, kapanan_b, b_boyu = b_defteri(yok, yaz="--defter-yaz" in sys.argv)
    if b_boyu == 0:
        print("    i B defteri BOŞ — ilk kez yazmak için: --defter-yaz")
    else:
        print(f"    B defteri: {b_boyu} kayıt · YENİ {len(yeni_b)} · KAPANAN {len(kapanan_b)}")
        for k in yeni_b[:10]:
            print(f"      + YENİ    {k}")
        for k in kapanan_b[:10]:
            print(f"      - KAPANAN {k}")
    if donemsiz:
        ihlal += 1
        print(f"  ✗ şehir VAR ama o tarihte hiçbir döneme ait DEĞİL: {len(donemsiz)}")
        for dt, ad, b in donemsiz:
            print(f"      {dt}  {ad:24s} {b}")
    else:
        print( "  ✓ çözülen şehirlerin hepsi o tarihte bir döneme ait")

    print( "\n    ⚠️ ÜÇÜNCÜ SINIF BU ARAÇLA ÖLÇÜLEMEZ — kullanıcının Varna şikâyeti")
    print( "       tam orada: Varna yerlesimler.js'te VAR ve 1391-01-01'de Osmanlı")
    print( "       oluyor, yani A ve B temiz. Sorun ETİKETİN EKRANDA ÇIKMAMASI")
    print( "       (`g:0`, k:3 — düşük gösterim kademesi). O eşik js/app.js'in ve")
    print( "       Oturum 1'in işi; bu araç veriye bakar, ekrana bakamaz.")

    n_coklu, eksik = c_coklu_yer(Y, O, ix)
    print()
    print(f"=== C) ÇOKLU YER — {n_coklu} madde birden çok yerleşim anıyor ===")
    print( "    Madde N yer anıyor ama yalnız M'si kıpırdıyor (M < N).")
    print( "    Değişmez 2 VARLIK sorar, bu KAPSAM sorar.")
    if len(eksik) > BEKLENEN_C:
        ihlal += 1
        print(f"  ✗ eksik kırılmalı: {len(eksik)} (tavan {BEKLENEN_C}) — YENİ EKSİK")
    else:
        print(f"  i eksik kırılmalı: {len(eksik)} (tavan {BEKLENEN_C}) — bilinen borç")
    say = {}
    for r in eksik:
        say[r[3]] = say.get(r[3], 0) + 1
    print("    tür dağılımı: " + ", ".join(f"{k}×{v}" for k, v in
                                           sorted(say.items(), key=lambda x: -x[1])))
    print( "    ⚠️ KALINTI YANLIŞ POZİTİF SINIFI VAR ve ayrıştırılamıyor: madde")
    print( "       karşı TARAFI ya da ANTLAŞMA ADINI anabilir ('Modon'un")
    print( "       VENEDİK'e kaybı', 'İSTANBUL Antlaşması') — o adlar toprak")
    print( "       değiştirmez. Bu yüzden ihlal değil, gözden geçirme kademesi.")
    for r in (eksik if ayrinti else eksik[:14]):
        print(f"      {r[0]:2d}/{r[1]:2d} eksik  {r[2]}  {r[3]:9s} {r[4][:42]:42s} {r[5][:3]}")
    if not ayrinti and len(eksik) > 14:
        print(f"      … {len(eksik)-14} satır daha (--ayrinti)")

    kayip = doguran_vaka_sinamasi(eksik)
    print()
    print("=== DOĞURAN VAKA SINAMASI — denetimin bekçisi ===")
    print( "    Bir iyileştirme, denetimi doğuran vakayı silebilir; sayı")
    print( "    düştüğü için de BAŞARI gibi görünür. Bu blok itiraz eder.")
    if kayip:
        ihlal += 1
        print(f"  ✗ {len(kayip)}/{len(DOGURAN_VAKALAR)} DOĞURAN VAKA ARTIK YAKALANMIYOR:")
        for tarih, ibare, beklenen, kim in kayip:
            print(f"      {tarih}  \"{ibare}\" → {beklenen} bekleniyordu   ({kim})")
        print( "      → son değişikliği geri al ya da vakanın gerçekten")
        print( "        düzeltildiğini DOĞRULA; ikisi aynı şey değildir.")
    else:
        print(f"  ✓ {len(DOGURAN_VAKALAR)}/{len(DOGURAN_VAKALAR)} doğuran vaka hâlâ yakalanıyor")

    geri = odenmis_vaka_sinamasi(Y)
    print()
    print("=== ÖDENMİŞ VAKA SINAMASI — bekçinin ters yüzü ===")
    print( "    Ödenmiş bir borç KAYITSIZ kalırsa yarın geri alınabilir ve")
    print( "    kimse fark etmez. Bu blok ödemenin KENDİSİNİ bekler.")
    if geri:
        ihlal += 1
        print(f"  ✗ {len(geri)}/{len(ODENMIS_VAKALAR)} ÖDEME GERİ ALINMIŞ:")
        for ad, gun, nasil in geri:
            print(f"      {ad} — {gun} kırılması VERİDE YOK   ({nasil})")
        print( "      → ödeme silinmiş ya da günü kaymış olabilir; kaydı")
        print( "        bulup DOĞRULA, gerekiyorsa ODENMIS_VAKALAR'ı güncelle.")
    else:
        print(f"  ✓ {len(ODENMIS_VAKALAR)}/{len(ODENMIS_VAKALAR)} ödeme veride duruyor")

    print()
    print("SONUÇ:", "temiz ✓" if not ihlal else f"İHLAL VAR ({ihlal} başlık) — çıkış kodu 1")
    return 1 if ihlal else 0


if __name__ == "__main__":
    sys.exit(main() or 0)
