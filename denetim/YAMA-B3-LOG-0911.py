# -*- coding: utf-8 -*-
"""YAMA (HAZIRLIK, UYGULANMADI) — B3 koridor kuralı için isimli/km² loglama.

🔒 arac/ DONUK. Bu dosya arac/uret_petek.py İÇİNE YAZILMAK ÜZERE hazırlanmış
bir YAMADIR — kendisi çalıştırılamaz, motora YAPIŞTIRILACAK üç parça içerir.
Koşu 9 bitip `arac/` açılınca, aşağıdaki üç değişikliği SIRAYLA uygula.

────────────────────────────────────────────────────────────────────────
BAĞLAM — B KORİDOR II sevki, 1.MURAT (11 Eylül 2026)
────────────────────────────────────────────────────────────────────────
`B UCUZ PARÇALAR` oturumu (`denetim/BULGU-B-UCUZ-PARCALAR-0911.md` §2)
106.123 "koridor ihlali" ölçtü, sonra KENDİ YÖNTEMİNİ ÇÜRÜTTÜ: test ettiği
`data/donemler.js` zaten kıyıya KESİLMİŞ (post-`intersection(KARA)`) veri —
Sina Yarımadası gibi GERÇEK coğrafî şeritleri "koridor" sanıyordu, çünkü B3
GERÇEKTE kıyı kesiminden ÖNCE çalışıyor (ham Voronoi gövdesi üzerinde) ve o
ham hâl hiçbir dosyada saklanmıyor. Çare: pipeline'ın İÇİNE, kıyı
kesiminden ÖNCE bir loglama satırı — bu dosya onu hazırlıyor.

────────────────────────────────────────────────────────────────────────
① BULGU — B3 mekanizması NEREDE, SIRASI NE (satır numaraları BUGÜNKÜ dosyada)
────────────────────────────────────────────────────────────────────────
    _b3_koridor_kirp()      tanım: satır 1614-1685
    gosterim_duzelt()       tanım: satır 1688-1699 (B2+B3'ü sırayla çağırır)
    ÇAĞRI SIRASI (asıl/PARALEL yol, satır 4578-4587):
        4578  g = unary_union([petek_epok(a)[j] for j in aktif])
        4580  g = delikleri_doldur(kapat(g), sahip_ix=aktif)
        4581  g = gosterim_duzelt(g, aktif)      # B2 enklav + B3 koridor  ← BURADA
        4587  g = poligonal(g.intersection(KARA))                          ← KIYI KESİMİ SONRA
    🔴 AYNI SIRA "ESKİ YOL"da (MOTOR_PARALEL_KAPALI=1, satır 4652-4654) da
       TEKRARLANIYOR — ama aşağıdaki yama `_b3_koridor_kirp`nin İÇİNE
       girdiği için İKİ ÇAĞRI YERİNE DE DOKUNMAYA GEREK YOK, otomatik kapsanır.
    ⇒ B UCUZ PARÇALAR'ın bulgusu DOĞRULANDI: B3, satır 4581'de, kıyı
      kesiminden (4587) TAM 6 SATIR ÖNCE çalışıyor.

🔴 ⑤ "AĞIZ GENİŞLİĞİ" — YAZILI TANIMI VAR, ama DOLAYLI:
    Kodda `w_der = 2.0 * c.area / c.length` (satır 1658) — bu bileşenin
    ORTALAMA genişliği (alan/çevre oranı), AĞZIN KENDİSİNDE ölçülen bir
    genişlik DEĞİL. "Derinlik ağzı geçemez" kuralı `d_der <= w_der`
    (satır 1664) ile uygulanıyor: `d_der` = ağızdan (agiz = dışarıya değen
    kesit) en uzak noktaya Hausdorff mesafesi (satır 1660). Yani Emre'nin
    "ağız genişliği" dediği şey YORUMDA KALMAMIŞ, KODA GİRMİŞ — ama
    "ağzın genişliği" değil "gövdenin ortalama genişliği" olarak. İkisi
    çoğu şekil için yakın sonuç verir (dar-uzun bir koridorda ortalama
    genişlik ≈ ağız genişliği) ama İNCE-SONRA-GENİŞLEYEN bir koridorda
    (huni şekli) ayrışabilir — BU YAMA BUNU DEĞİŞTİRMİYOR, yalnız KAYDEDİYOR.

────────────────────────────────────────────────────────────────────────
② LOGLAMA — üç parça, tam metin
────────────────────────────────────────────────────────────────────────

--- PARÇA A — satır 1438-1446'daki _B23_SAYAC bloğunun HEMEN ALTINA ekle ---
# (yeni bir global liste — B3'ün GERÇEKTEN elediği/bıraktığı "derin"
#  bileşenleri, isim+km² ile, PRE-kıyı-kesim, biriktirir)
_B3_KALAN_IHLAL = []   # her öğe: (isim, km2, derinlik_km, genislik_km, sebep)


--- PARÇA B — _b3_koridor_kirp() içinde, satır 1667-1673'ü BUNUNLA DEĞİŞTİR ---
# ESKİ (1667-1673):
#         yasak = _yasakli_mi(c, sahip_ix)
#         if yasak == "kb":
#             _B23_SAYAC["b3_kb"] += 1
#             continue
#         if yasak == "yerlesim":
#             _B23_SAYAC["b3_yerlesim"] += 1
#             continue
#
# YENİ:
        yasak = _yasakli_mi(c, sahip_ix)
        if yasak in ("kb", "yerlesim"):
            # 🔴 BU BİLEŞEN GERÇEKTEN "DERİN" (d_der > w_der) AMA bir
            # muafiyet yüzünden DOLDURULMUYOR — Emre'nin kuralına göre bu
            # PRE-kıyı-kesim GERÇEK bir "kalan ihlal" adayıdır (B UCUZ
            # PARÇALAR'ın 106.123'ünün YERİNE geçecek, güvenilir sayı).
            try:
                q = int(_TUM_AGAC.nearest(c.centroid))
                isim = YERLER[q].get("ad", "?")
            except Exception:
                isim = "?"
            _B3_KALAN_IHLAL.append((
                isim, round(alan_km2(c), 1),
                round(d_der * 111.32, 1), round(w_der * 111.32, 1), yasak))
            if yasak == "kb":
                _B23_SAYAC["b3_kb"] += 1
            else:
                _B23_SAYAC["b3_yerlesim"] += 1
            continue
# ⚠️ NOT: `alan_km2()` satır 2906'da tanımlı — `_b3_koridor_kirp` (1614)
#    ondan ÖNCE tanımlanıyor ama modül tamamen yüklendikten SONRA
#    ÇAĞRILDIĞI için (asıl çağrı satır 4581/4653'te) sorun YOK — Python
#    fonksiyon çağrısını İSİM ÇÖZÜMLEMESİNİ ÇALIŞMA ANINDA yapar.
# ⚠️ 111.32 çarpanı derece→km KABA dönüşümdür (satır 1456'daki
#    `enlem_duzeltmesi()` ile AYNI YAKLAŞIM, enlem düzeltmesi YOK —
#    derinlik/genişlik zaten ORANTI olarak kullanıldığı için bu yama
#    yalnız GÖRÜNTÜLEME amaçlı, YENİ bir karar eşiği YOK.


--- PARÇA C — satır 5158'in (B3 KORİDOR print'i) HEMEN ALTINA ekle ---
# (§9: motor stdout'u tamponlu — bu satır zaten koşunun EN SONUNDA basılan
#  bloğun içinde, yani "log koşarken boş görünür" sorunu YOK, mevcut
#  B2/B3 print'leriyle AYNI yerde ve AYNI zamanda basılıyor)
    if _B3_KALAN_IHLAL:
        _toplam_km2 = sum(r[1] for r in _B3_KALAN_IHLAL)
        print(f"  🔴 B3 KALAN İHLAL (PRE-kıyı-kesim, GÜVENİLİR): "
              f"{len(_B3_KALAN_IHLAL)} bileşen · {_toplam_km2:,.0f} km²")
        # en derin 15'i göster, gerisini say
        for isim, km2, der, gen, sebep in sorted(
                _B3_KALAN_IHLAL, key=lambda r: -r[2])[:15]:
            print(f"       {isim:<28} {km2:>10,.0f} km²  "
                  f"derinlik {der:>6.0f} km · genişlik {gen:>5.0f} km  [{sebep}]")
        if len(_B3_KALAN_IHLAL) > 15:
            print(f"       … +{len(_B3_KALAN_IHLAL) - 15} bileşen daha "
                  f"(tam liste için ayrı bir dökümü iste)")
    else:
        print("  🟢 B3 KALAN İHLAL: 0 — SIĞ dışında hiçbir bileşen "
              "muafiyetle atlanmadı")

────────────────────────────────────────────────────────────────────────
③ D022 ÖNGÖRÜ — ölçümden ÖNCE (bu koşu henüz bitmedi, arac/ donuk)
────────────────────────────────────────────────────────────────────────
En son TAM koşunun (kosu_3eylul_2.log, `BULGU-B-UCUZ-PARCALAR-0911.md`
§2.3'ten alıntı) kendi B3 sayaçları:
    b3_dolduruldu 181.538 · b3_sig 666.244 · b3_kapali 18.845 ·
    b3_yerlesim 3.081 · b3_kb 17          (BİRİM: petek-gün)

🟢 TAHMİN: bu yama uygulanınca `_B3_KALAN_IHLAL`in toplam KAYIT sayısı
(petek-gün, tekil DEĞİL) **~3.000-3.500** olacak — çünkü `b3_yerlesim +
b3_kb` ZATEN bu tanıma uyan sayaçlardır ve en son koşuda 3.098'di (bu
yamanın YENİ bir eşik/kural EKLEMEDİĞİNİ, yalnız VAR OLAN iki sayacın
İÇİNİ isimle DOLDURDUĞUNU doğrular — B2'nin enklav vakasıyla AYNI desen:
`§1.2`'de 49.552 dönem-görünümü yalnız birkaç ONLARCA benzersiz isme
düşmüştü).
🟢 TAHMİN: BENZERSİZ İSİM sayısı ise ÇOK DAHA KÜÇÜK olacak — B2 emsaliyle
(332 karasal görünüm → 8 yeni benzersiz isim, ~%2,4) aynı oranı
uygularsak **~75-100 benzersiz isim** bekliyorum. Bu, 106.123'ün (B UCUZ
PARÇALAR'ın çürüyen ölçümü) YERİNE geçecek gerçek, güvenilir sayı olacak.
🔴 TAHMİN ÇÜRÜRSE (sayı 3.000'den ÇOK uzaksa) bu, `b3_yerlesim`/`b3_kb`
sayaçlarının kosu_3eylul_2.log'dan BUGÜNE (koşu 9, farklı taban — 3805
petek) DEĞİŞMİŞ OLABİLECEĞİNİ gösterir; `§11`in "bir eşik ölçüldüğü
tabanla birlikte taşınır" (`D129`) dersinin bir örneği olurdu.

────────────────────────────────────────────────────────────────────────
④ UYGULAMA NOTU
────────────────────────────────────────────────────────────────────────
Üç parça da EKLEME'dir (mevcut satır SİLİNMİYOR, yalnız üç `continue`'nun
öncesine kod eklendi ve bir yeni print bloğu eklendi) — mevcut davranış
(hangi bileşenin doldurulup hangisinin bırakılacağı) DEĞİŞMİYOR, yalnız
GÖRÜNÜRLÜK ekleniyor. `_B23_SAYAC`in sayıları AYNI KALACAK.

────────────────────────────────────────────────────────────────────────
⑤ PARÇA D — 11 Eylül 2026, KORİDOR AĞZI sevkiyle EKLENDİ
────────────────────────────────────────────────────────────────────────
`denetim/BULGU-KORIDOR-AGZI-0911.md`: kodun tanımı (`w_der = 2*alan/
çevre`, GÖVDENİN ortalaması) ile Emre'nin tanımı (koridorun karaya
bağlandığı yerdeki AĞIZ genişliği) shapely ile sentetik "dogbone"
şekillerinde AYRIŞTIRILDI. Bulgu: ayrışma TEK YÖNLÜ — ağız GENİŞ/gövde
DAR durumunda kod hatalı biçimde DOLDURUR (gerçek kural SIĞ derdi);
tersi (ağız dar/gövde geniş) bu şekil ailesinde hiç bulunamadı.
Ucuz bir ikinci tahmin bulundu: `agiz.length / 2.0` — `agiz` zaten
satır 1652'de hesaplanıyor, EK bir geometrik işlem gerekmiyor, sentetik
testte gerçek ağız genişliğine %0,5'ten yakın isabet etti.

--- PARÇA D — PARÇA B'deki kayıt satırını BUNUNLA DEĞİŞTİR ---
# ESKİ (PARÇA B'nin _B3_KALAN_IHLAL.append çağrısı):
#             _B3_KALAN_IHLAL.append((
#                 isim, round(alan_km2(c), 1),
#                 round(d_der * 111.32, 1), round(w_der * 111.32, 1), yasak))
#
# YENİ — iki genişlik tanımı da kaydedilir:
            try:
                _agiz_genislik = agiz.length / 2.0
            except Exception:
                _agiz_genislik = None
            _B3_KALAN_IHLAL.append((
                isim, round(alan_km2(c), 1),
                round(d_der * 111.32, 1), round(w_der * 111.32, 1), yasak,
                round(_agiz_genislik * 111.32, 1) if _agiz_genislik else None,
                # 🔴 İKİ TANIM AYRIŞIYOR MU — koşu 10'da ÖLÇÜLECEK asıl soru:
                (d_der > w_der) != (d_der > _agiz_genislik)
                if _agiz_genislik else None))
# ⚠️ Son alan `True` ise bu KAYIT kodun kararı (SIĞ/DOLU) ile Emre'nin
#    kuralının kararı FARKLI olurdu demektir — koşu 10'un logunda bu
#    alanın kaç kayıtta `True` olduğu SAYILMALI (§0'daki öngörünün
#    gerçek sınavı budur).
#
# PARÇA C'nin print bloğuna da EKLE (satır formatına bir sütun daha):
#     ayrisan = sum(1 for r in _B3_KALAN_IHLAL if len(r) > 5 and r[6])
#     print(f"       -> bunlarin {ayrisan}'i agiz/govde tanimina gore "
#           f"FARKLI karar verirdi (kod vs Emre'nin kurali)")

────────────────────────────────────────────────────────────────────────
⑥ UYGULANMIŞ NİHAİ HÂL — 12 Eylül 2026, KITA 7 (D179: BİRLEŞİK, TEK KAYNAK)
────────────────────────────────────────────────────────────────────────
Yukarıdaki A/B/C/D parçaları AYRI AYRI yazıldığı için birleştirme
(B'nin gövdesi + D'nin `_B3_KALAN_IHLAL.append` satırı) UYGULAYICIYA
BIRAKILMIŞTI. 1.MURAT'ın uyarısı üzerine (M-3531: "diff bir yedek, asıl
kaynak bu dosya olsun, ikisi AYRIŞMASIN") üç blok TEK PARÇA, doğrudan
yapıştırılabilir hâlde aşağıda — bu, `arac/uret_petek.py` commit
365f4eb'de FİİLEN uygulanmış olan TAM metindir (satır numaraları o
commit'e göre, sürüm ilerledikçe kayabilir, `denetim/
YAMA-B3-UYGULANMIS-0912.diff` tam yedek).

--- BLOK 1 — _B23_SAYAC bloğunun HEMEN ALTINA (bkz. PARÇA A) ---
_B3_KALAN_IHLAL = []   # her öğe: (isim, km2, derinlik_km,
                       #  genislik_km_govde_ort, sebep, genislik_km_agiz,
                       #  tanimlar_ayrisiyor_mu)

--- BLOK 2 — _b3_koridor_kirp() içinde, eski "if yasak == 'kb': ... if
    yasak == 'yerlesim': ..." İKİ AYRI DALIN YERİNE (PARÇA B+D BİRLEŞİK) ---
        yasak = _yasakli_mi(c, sahip_ix)
        if yasak in ("kb", "yerlesim"):
            try:
                q = int(_TUM_AGAC.nearest(c.centroid))
                isim = YERLER[q].get("ad", "?")
            except Exception:
                isim = "?"
            try:
                _agiz_genislik = agiz.length / 2.0
            except Exception:
                _agiz_genislik = None
            _ayrisiyor = ((d_der > w_der) != (d_der > _agiz_genislik)
                          if _agiz_genislik else None)
            _B3_KALAN_IHLAL.append((
                isim, round(alan_km2(c), 1),
                round(d_der * 111.32, 1), round(w_der * 111.32, 1), yasak,
                round(_agiz_genislik * 111.32, 1) if _agiz_genislik else None,
                _ayrisiyor))
            if yasak == "kb":
                _B23_SAYAC["b3_kb"] += 1
            else:
                _B23_SAYAC["b3_yerlesim"] += 1
            continue

--- BLOK 3 — mevcut "🧩 B3 KORİDOR:" print satırının HEMEN ALTINA (PARÇA
    C+D BİRLEŞİK) ---
    if _B3_KALAN_IHLAL:
        _toplam_km2 = sum(r[1] for r in _B3_KALAN_IHLAL)
        _ayrisan = sum(1 for r in _B3_KALAN_IHLAL if len(r) > 6 and r[6])
        print(f"  🔴 B3 KALAN İHLAL (PRE-kıyı-kesim, GÜVENİLİR): "
              f"{len(_B3_KALAN_IHLAL)} bileşen · {_toplam_km2:,.0f} km²")
        for isim, km2, der, gen, sebep, agiz_gen, ayrisiyor in sorted(
                _B3_KALAN_IHLAL, key=lambda r: -r[2])[:15]:
            print(f"       {isim:<28} {km2:>10,.0f} km²  "
                  f"derinlik {der:>6.0f} km · gövde-genişlik {gen:>5.0f} km · "
                  f"ağız-genişlik {agiz_gen if agiz_gen is not None else '?':>5} km  "
                  f"[{sebep}]" + ("  ⚠️AYRIŞIYOR" if ayrisiyor else ""))
        if len(_B3_KALAN_IHLAL) > 15:
            print(f"       … +{len(_B3_KALAN_IHLAL) - 15} bileşen daha "
                  f"(tam liste için ayrı bir dökümü iste)")
        print(f"       -> bunların {_ayrisan}'i ağız/gövde tanımına göre "
              f"FARKLI karar verirdi (kod vs Emre'nin kuralı)")
    else:
        print("  🟢 B3 KALAN İHLAL: 0 — SIĞ dışında hiçbir bileşen "
              "muafiyetle atlanmadı")

⚠️ ESKİ "if yasak == 'kb':" / "if yasak == 'yerlesim':" İKİ AYRI dal
SİLİNİR, BLOK 2 onların YERİNE geçer — iki ayrı `continue` tek bir
birleşik dala indirgeniyor, davranış (hangi bileşen doldurulur/bırakılır)
DEĞİŞMİYOR, yalnız ikisi TEK bir yerde loglanıyor.
"""
