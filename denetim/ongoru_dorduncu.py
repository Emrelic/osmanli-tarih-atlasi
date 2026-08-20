# -*- coding: utf-8 -*-
"""DÖRDÜNCÜ SINIF — ÖLÇÜMDEN ÖNCE YAZILMIŞ ÖNGÖRÜ.

    damga  : 2026-08-20 16:5x  (tam ölçüm HENÜZ yapılmadı)
    yazan  : KRONOLOJİ ŞEMASI (eski: OSMANGAZI, SONNET HAZIR KITA 31)
    görev  : koordinatörün M-0873 çağrısı — "kapının dördüncü kusur sınıfı"
    taban  : `1ff92b5` (KAPI KARNESİ, PAKET 0019 TASNIF) — Nâsıriye örneği,
             26 günlük/%5 örneklemde 2635 petek-gün delik, %48 kapanabilir,
             223 yerleşim etkilendi. Tahtaya M-0845 ile gitti.

🔴 NİÇİN ÖNCE YAZILIYOR (CLAUDE.md §11):
   Sonradan yazılan beklenti ölçümü gördükten sonra ona göre şekillenir ve
   hiçbir zaman yanlış çıkmaz — yani hiçbir şey öğretmez. Önce yazılan
   yanlış çıkabilir, ve ancak yanlış çıkabilen bir şey bilgi taşır. Her
   kalemin mazereti de ÖNCEDEN yazılı — mazeret sonradan eklenirse her
   yanlış öngörü açıklanabilir hâle gelir ve hiçbiri çürümez.

═══════════════════════════════════════════════════════════════════════════
0 · TABAN — bunlar ÖNGÖRÜ DEĞİL, salt okuma ile ÖLÇÜLDÜ (arac/girdi.py
    üzerinden, arac/uret_petek.py'ye HİÇ dokunmadan — geometri gerekmiyor,
    yalnız kur:/bit:/s:/d:/v:/bos:/tur: alanları)
═══════════════════════════════════════════════════════════════════════════
T1  Toplam yerleşim 2593 · kur: taşıyan 320 · bit: taşıyan 13.
T2  EPOK (1281-01-01) gününde "kur: > EPOK VE _sahipli(EPOK)=YANLIŞ" olan
    nokta — yani devir_kumesi() BUGÜNKÜ KURALLA bunları hiç görmüyor: 312.
T3  Bu 312'nin `_dolgu_kumesi`nin bugünkü kabul şartına (bos ∈ {hata} veya
    tur=="bolge" + bos boş/devletsiz) UYANI: yalnız 3. UYMAYANI: 309.
    ⇒ Nâsıriye tekil bir vaka DEĞİL — aynı yapısal boşluğun 309 örneğinden
    biri. Kapı bunların %99'unu (309/312) HİÇ GÖREMİYOR.
T4  Bu 309'un `tur:` dağılımı: sehir 194 · liman 67 · kale 47 · bolge 1.
T5  Kuruluş yüzyılı dağılımı: 13.yy 2 · 14.yy 27 · 15.yy 39 · 16.yy 87 ·
    17.yy 61 · 18.yy 51 · 19.yy 42 · 20.yy 3 — ağırlık 16-18. yüzyılda (%64).
T6  ÖLÇEMEDİM (ve öngörüde de kullanmıyorum): `_kusatilmis(g)` — bu ölçüt
    GEOMETRİ (PETEK_D sınır kesişimi) ister, ben yalnız veri katmanındayım.
    Yani T2-T5'teki 312/309, kuşatılmışlığın YAKALAYABİLECEĞİ noktaları da
    İÇERİYOR — gerçek "delik" alt kümesi bundan KÜÇÜK olacak. Aşağıdaki
    ölçümde kuşatılmışlık YERİNE aynı `_dolgu_kumesi` puanlama formülünü
    (PUAN_HALKA/PUAN_ESIK, uret_petek.py:3391-3392) bu 309 noktaya da
    uygulayıp "kapanabilir mi" diye soracağım — KAPI KARNESİ'nin (1ff92b5)
    yaptığı gibi, geometri yerine PUAN kullanan bir vekil (proxy) ölçüt.

═══════════════════════════════════════════════════════════════════════════
1 · ÖNGÖRÜLER — ölçümden ÖNCE, sayıyla
═══════════════════════════════════════════════════════════════════════════
"""

ONGORU = [

    dict(
        no="D1",
        konu="TAM ÖLÇÜM (örneklem değil) — toplam petek-gün, global `tarihler`"
             " ızgarasında (~511-540 kırılma günü), snapshot-sayım yöntemiyle"
             " (motor logunun kendi 'petek-gün' tanımıyla aynı: her checkpoint"
             " günündeki delik nokta sayısının toplamı, takvim günüyle"
             " ağırlıklanmadan).",
        tahmin="30.000 - 70.000 petek-gün arası. Nokta tahminim: 45.000.",
        gerekce=(
            "1ff92b5'in 26 günlük/~%5 örneklemi (511'in ~26'sı) 2635 buldu. "
            "Doğrusal ölçeklersem 2635/0,051 ≈ 51.700 çıkar ama benim aday "
            "havuzum (312) onların gözlemlediği 223'ten geniş, bu da yukarı "
            "iter; öte yandan erken yüzyıllarda (13-15.yy, T5'e göre %21) "
            "daha az nokta aktif olacağından ortalama aşağı da çekebilir. "
            "İki etki ters yönde, geniş aralık bu yüzden."),
        mazeret="VAR — farklı örneklem tabanından ekstrapolasyon, yüksek belirsizlik.",
    ),

    dict(
        no="D2",
        konu="KAPANABİLİR ORAN (puan ≥ eşik, tek kazanan) — tam ölçümde",
        tahmin="%40-55 arası. Nokta tahminim: %48 (1ff92b5'in kendi oranıyla AYNI).",
        gerekce=(
            "1ff92b5'in örneklemi zaten aynı puanlama formülünü (PUAN_HALKA/"
            "PUAN_ESIK) kullandı ve %48 buldu. Coğrafi dağılım örneklem ile "
            "tam ölçüm arasında çok değişmemeli — aynı nokta kümesinin farklı "
            "günlerdeki hâli, temel coğrafyası sabit."),
        mazeret="VAR — 26 günlük örneklem hangi NOKTALARI kapsadı bilmiyorum, "
                "tam kümede yeni bir alt-küme (örn. hep sınırda duran noktalar) "
                "baskın çıkarsa oran kayabilir.",
    ),

    dict(
        no="D3",
        konu="COĞRAFİ YIĞILMA — hangi bölge petek-gün toplamında en büyük pay",
        tahmin="Rusya'nın Volga/Ural/Sibirya genişleme şehirleri (Ufa, Perm, "
               "Saratov, Tsaritsyn, Rostov, St. Petersburg tipi) TEK BAŞINA "
               "toplamın EN AZ %25'ini oluşturur.",
        gerekce=(
            "T5'e göre 16-18. yüzyıl ağırlıklı (%64) ve bu tam Rusya'nın doğu/"
            "güney genişleme dönemi; bu şehirlerin çoğu `s:` kaydı yalnız "
            "Rusya'ya katıldıkları GEÇ tarihte başlıyor (T2/T3 örneklerinde "
            "6/15 örnek zaten bu grup), yani gap-pencereleri uzun."),
        mazeret="VAR — coğrafi kümeleme HENÜZ yapılmadı, izlenim örnek 15 "
                "kayıttan çıkarıldı, tam liste farklı çıkabilir.",
    ),

    dict(
        no="D4",
        konu="ÇEKİŞMELİ ORAN (iki devlet eşit puanda) — tam ölçümde",
        tahmin="%1-3 arası, 1ff92b5'in %0,8'ine (21/2635) yakın.",
        gerekce="Çekişme yalnız iki devletin puanı TAM eşitken doğar — nadir "
                "bir sayısal çakışma, örneklem büyüklüğünden bağımsız kalmalı.",
        mazeret="YOK — bu, puanlama formülünün doğrudan istatistiksel özelliği; "
                "büyük sapma çıkarsa formülü YANLIŞ uyguladığım anlamına gelir.",
    ),

    dict(
        no="D5",
        konu="ÖLÜ NOKTA (bit:) analog sınıfı — aynı sorunun ters ucu",
        tahmin="İhmal edilebilir küçük: toplam etki 20 petek-gün'ün ALTINDA "
               "(D1'in tam toplamının binde birinden az).",
        gerekce="Yalnız 13 nokta bit: taşıyor (T1) — kur:'in 320'sine kıyasla "
                "çok küçük bir havuz, aynı oranda delik üretse bile mutlak "
                "sayı küçük kalır.",
        mazeret="VAR — bu 13 noktanın ölümden SONRAKİ s:/d:/v: durumunu ayrıca "
                "ölçmedim; hepsi ölümden hemen sonra yeniden sahiplenmiş "
                "olabilir ya da hiç olmayabilir.",
    ),

    dict(
        no="D6",
        konu="🔴 ÇARE ÖNERİSİ — kapı şartını genişletmenin YAN ETKİSİ",
        tahmin="Dolgu eligibility'yi 'devir_kumesi()=YANLIŞ VE _sahipli()="
               "YANLIŞ olan HER nokta' şeklinde genişletmek (tur/bos şartı "
               "olmadan) MEVCUT `devletsiz`/`hata` dolgu davranışını "
               "DEĞİŞTİRMEZ — yalnız YENİ bir üçüncü giriş yolu ekler, çünkü "
               "eski iki şart (`bos in {hata}` / `tur==bolge`) zaten "
               "ayrık bir alt kümeydi.",
        gerekce="Yeni koşul ESKİ iki koşulla VEYA bağlanacak (birleşim), "
                "kesişim değil — mevcut 3 nokta (T3) zaten iki tarafta da "
                "olabilir ama küme küçülmez, yalnız büyür.",
        mazeret="YOK — bu, önerilen değişikliğin doğrudan mantıksal sonucu; "
                "tutmazsa önerdiğim çare formülü yanlış kurulmuş demektir.",
    ),
]


def bas():
    print("DÖRDÜNCÜ SINIF — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)")
    print("taban: 312 aday nokta (T2) · 309 kapı-dışı (T3) · 1ff92b5 örneklemi")
    print("=" * 78)
    for o in ONGORU:
        print("\n" + o["no"] + "  " + o["konu"])
        print("   tahmin  : " + o["tahmin"])
        print("   gerekçe : " + o["gerekce"])
        print("   mazeret : " + o["mazeret"])
    print("\n" + "=" * 78)
    mazeretsiz = [o["no"] for o in ONGORU if o["mazeret"].startswith("YOK")]
    print("MAZERETSİZ kalemler: " + ", ".join(mazeretsiz) +
          "  — bunlar tutmazsa TEŞHİS/FORMÜL yanlıştır, ölçüm değil.")


if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")
    bas()
