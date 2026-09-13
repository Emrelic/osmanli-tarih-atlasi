# -*- coding: utf-8 -*-
"""PAKET-A3 — denetim/YAMA-A3-0913.json ÖNERİ dosyasını üretir. Veriye YAZMAZ.
py denetim/ARAC-A3-YAMA-YAZ-0913.py
Uzun Hasan kaleminin yerleşim listesi ELLE YAZILMAZ: arac/girdi.py evreninde sınırı
tam 1468-04-01 olan karakoyunlu/akkoyunlu dönemleri taranır (dosya + dizin konumu).
"""
import io, json, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
Y = girdi.yukle(sessiz=True)

def donem_bul(ad, kat, **esit):
    for y in Y:
        if y["ad"] != ad:
            continue
        for i, p in enumerate(y.get(kat) or []):
            if all(p.get(k) == v for k, v in esit.items()):
                return y.get("_kaynak"), i, p
    return None, None, None

uzun = []
for y in Y:
    s = y.get("s") or []
    for i, p in enumerate(s):
        if p.get("t") == "1468-04-01" and p.get("d") == "karakoyunlu":
            j = next((k for k, q in enumerate(s) if q.get("f") == "1468-04-01" and q.get("d") == "akkoyunlu"), None)
            uzun.append({"ad": y["ad"], "dosya": y.get("_kaynak"),
                         "degisiklik": [{"alan": f"s[{i}].t", "d": "karakoyunlu", "eski": "1468-04-01", "yeni": "1468-07-01"},
                                        {"alan": f"s[{j}].f", "d": "akkoyunlu", "eski": "1468-04-01", "yeni": "1468-07-01"}]})

ah_d = donem_bul("Ahıska", "d", f="1578-08-01")
ah_s = donem_bul("Ahıska", "s", t="1578-08-01")
urfa = donem_bul("Urfa", "isg", t="1920-04-10")

YAMA = {
  "baslik": "YAMA-A3-0913 — PAKET-A3'ün YERLEŞİM ve BLOKE madde ÖNERİLERİ (13 Eylül 2026). HİÇBİRİ VERİYE YAZILMADI; koşu sonrası koordinatörle birlikte iner.",
  "kural": "1.MURAT M-3781 sonrası: yeni gün bir yerleşim kırılmasını değiştiriyorsa madde de yerleşim de YALNIZ önerilir. Atlas dönemleri dayanak değildir (§4 ATLAS REFERANS DEĞİLDİR); aşağıdaki her gün kaynağıyla birlikte yazıldı.",
  "uretici": "denetim/ARAC-A3-YAMA-YAZ-0913.py (yerleşim konumları girdi.py evreninden taranır, elle yazılmadı)",
  "kalemler": [
    {
      "id": "0032/H-0003 — Uzun Hasan'ın Karakoyunlu'ya son vermesi",
      "durum": "ÖNERİ — madde ve yerleşimler BİRLİKTE inmeli",
      "kaynak": {
        "karakoyunlular": "Hasan Ali'nin ordusu Akkoyunlu ordusu karşısında dağıldı: 'Zilhicce 872 / Temmuz 1468'",
        "uzun-hasan": "Merend'de Hasan Ali bozguna uğratıldı 'Safer 873 / Eylül 1468'; Hasan Ali Hemedan önünde öldürüldü 'Şevval 873 / Nisan-Mayıs 1469'",
        "cihan-sah": "Cihan Şah 12 Rebîülâhir 872 / 10 Kasım 1467'de öldürüldü; Hasan Ali ordunun desteğini kazanamadı (1468)"
      },
      "madde": {"dosya": "data/olaylar_ek7.js", "t_eski": "1468-04-01", "gun_eski": "1468 baharı",
                "t_oneri": "1468-07-01", "gun_oneri": "Zilhicce 872 / Temmuz 1468",
                "hassasiyet": "AY (ayın 1'ine kodlu — §4 ③ ekseni; gun: alanı ayı açıkça söyler). Alternatif: 1468-06-22 (Zilhicce 872'nin ilk günü, kaynakla uyumlu en erken gün) — seçim koordinatörün.",
                "yer_id": "Tebriz korunur — TDV Temmuz 1468 bozgununun yerini vermiyor; Akkoyunlu bundan sonra Tebriz'e hâkim oldu. Harita olay mahalline gitmeli (Emre) sorusu için başka yer dayanağı YOK (ölçülemedi).",
                "kaynak_oneri": "karakoyunlular · uzun-hasan"},
      "yerlesim_sayisi": len(uzun),
      "yerlesim": uzun,
      "risk": "Madde tek başına taşınırsa bu 30 yerleşimin s: kırılması 1468-04-01'de ±30 günde maddesiz kalır (Değişmez 2s +1 gün açık, 60 uç). Yerleşimler tek başına taşınırsa madde 1468-04-01'de kırılmasız kalır.",
      "acik_soru": "Gence · Berde (Karabağ): TDV Hasan Ali'nin bozgundan sonra Gence ve Berde yönüne çekildiğini yazar; bu iki kaydın Akkoyunlu'ya geçişi Eylül 1468 (Merend) ya da 1469'a kayabilir — ÖLÇÜLEMEDİ, kaynak gün vermiyor.",
      "ilgili_borc": "data/olaylar_ek20.js t:1467-01-01 'Uzun Hasan Karakoyunlu Devleti'ne son verdi — Van gölü havzası' ve olaylar_ek5.js t:1467-11-10 aynı olayı (Cihan Şah'ın öldürülmesi) anlatıyor; ek20'nin günü TDV'nin 10 Kasım 1467'sinden 10 ay önce ve Van/Bitlis/Bargiri/Hoşap/Kotur yerleşimlerinin 1467-01-01 kırılmasına bağlı — yerleşim tarafı ayrı B kalemi (öneri: 1467-11-10), üç maddenin konu örtüşmesi editoryal karar."
    },
    {
      "id": "0020/H-0013 — Ahıska",
      "durum": "Madde YAZILDI (data/olaylar_p0049.js t:1578-08-09, kırılma değiştirmiyor). Yerleşim ÖNERİ.",
      "kaynak": {"ahiska": "Ahıska atabegleri Lala Mustafa Paşa'nın Çıldır Savaşı (1578) sonunda Osmanlı idaresine girdi",
                 "cildir-eyaleti": "9 Ağustos 1578 Çıldır Savaşı'nın hemen ardından atabeg ülkesinin geri kalanının fethi tamamlandı",
                 "lala-mustafa-pasa": "Çıldır zaferi 5 Cemâziyelâhir 986 / 9 Ağustos 1578"},
      "yerlesim": [
        {"ad": "Ahıska", "dosya": ah_d[0], "alan": f"d[{ah_d[1]}].f", "eski": "1578-08-01", "yeni": "1578-08-09"},
        {"ad": "Ahıska", "dosya": ah_s[0], "alan": f"s[{ah_s[1]}].t", "d": (ah_s[2] or {}).get("d"), "eski": "1578-08-01", "yeni": "1578-08-09"}
      ],
      "gerekce": "Veri Ahıska'yı savaştan 8 gün ÖNCE Osmanlı yapıyor; bu yüzden değişim FAS'taki Vâdisseyl maddesinin (1578-08-04) altında görünüyordu (Emre'nin gördüğü). Gün KOMŞUDAN (§4 şartlı): Çıldır 9 Ağustos kendi kaynağına dayanıyor.",
      "d147": "1578-08-09 ±30 günde maddesiz kırılma yok (ölçüldü) — sahte kapanış doğmaz."
    },
    {
      "id": "0035/H-0059 B — Denizli 1425",
      "durum": "ÖLÇÜLEMEDİ — öneri YOK",
      "bulgu": "1425-06-01 kırılmasında Denizli germiyan→OSMANLI geçiyor (Emre'nin 'Germiyan ilhak edilmiş gibi görünüyor' gözlemi). TDV germiyanogullari Germiyan'ın ilhakını 1428 görüşmesi ve vasiyete (1429) bağlıyor; Denizli'nin 1425'teki sahibi için kaynak taranmadı. Madde metninden bayat 'aynı tarihte katılanlar' listesi kaldırıldı.",
      "gereken": "Denizli (Lâdik) için TDV denizli maddesi okunmalı."
    },
    {
      "id": "0035/H-0065 B — İbrim",
      "durum": "ÖNERİ YOK — kaynaklar ayrışıyor",
      "bulgu": "Atlas İbrim d:1517-04-13'ten. TDV nube: Mısır fethinin ardından Halfa vadisine kadar kontrol ve İbrim'de idarî teşkilât (yıl yok). TDV sudan: Aşağı Nûbe XVI. yüzyıl ortasında Özdemir Paşa'yla Osmanlı Mısırı'na katıldı, İbrim kalesi onun harekâtında alındı. TDV habes-eyaleti: İbrim sancağı 26 Temmuz 1573'te Habeş eyaletine bağlandı. olaylar_ek5.js 1555-01-01 maddesinin YILI kaynakta yok (ic_not_gun'a yazıldı).",
      "gereken": "Özdemir Paşa'nın Nûbe harekâtının yılı için akademik kaynak (Orhonlu, Habeş Eyaleti) — CLAUDE.md §3.5.1 İbrim vakası."
    },
    {
      "id": "0039/H-0004 B — 1918-1923 doğu/güney yerleşimleri",
      "durum": "ÖNERİ (kimlik soruları var)",
      "kalemler": [
        {"ad": "Kars", "oneri": "isg dönemi 1919-04-12 → 1920-10-30", "kaynak": "TDV kars: 12 Nisan 1919 İngiliz işgali, denetim Ermenilere bırakıldı; 30 Ekim 1920 Karabekir Kars'a girdi",
         "kimlik_sorusu": "12 Nisan 1919'dan sonra İngiliz işgali (ingiltere künyesi VAR) ve Ermeni denetimi (ermenistan-demokratik-cumhuriyeti künyesi VAR) — hangisinin ne zaman boyanacağı ve penceresinin tutup tutmadığı koordinatör kararı. Mevcut d: 1918-05-25→1920-04-23 ve s: tbmm-turkiye 1920-04-23→ bu dönemle çelişir."},
        {"ad": "Ardahan", "oneri": "1919-04 → 1921-02-23 arası Osmanlı/TBMM dışı dönem", "kaynak": "TDV ardahan: 23 Şubat 1921'de Artvin'le birlikte kurtarıldı", "kimlik_sorusu": "Gürcistan (gurcistan-demokratik-cumhuriyeti künyesi VAR) — Ardahan'ın 1919-1921 sahibi için gün kaynağı yok (ölçülemedi)."},
        {"ad": "Artvin", "oneri": "s: sovyet-rusya t 1921-10-13 → 1921-02-23 (TBMM)", "kaynak": "TDV ardahan: 23 Şubat 1921 Artvin kurtarıldı", "not": "Artvin'in 1917-1921 kimliği (sovyet-rusya) da sorgulanmalı — 1918-1921 Gürcistan dönemi."},
        {"ad": "Antalya", "oneri": "isg d:italya 1919-04-29 → 1921-06-01", "kaynak": "TDV antalya: 29 Nisan 1919 İtalyan işgali; 1 Haziran 1921'de İtalyanlar şehri boşaltmaya başladı", "not": "italya künyesi VAR."},
        {"ad": "Urfa", "dosya": urfa[0], "alan": f"isg[{urfa[1]}].t", "eski": "1920-04-10", "yeni": "1920-04-11", "kaynak": "TDV sanliurfa: 10 Nisan 1920 boşaltma kabul edildi, ertesi gün şehri terk ettiler", "not": "mevcut kaydın kendi notu 'TÜRETİLDİ — doğrulanmadı'."}
      ]
    },
    {
      "id": "A1 devri ② — İbrail 1595-1601",
      "durum": "ÖNERİ (hassasiyet YIL)",
      "oneri": {"ad": "İbrail", "alan": "yeni isg ya da s dönemi d:eflak", "f": "1595-01-01", "t": "1601-01-01"},
      "kaynak": "TDV ibrail: 1595 Martında Cesur Mihai zaptetti, 1601'e kadar onun idaresinde kaldı; TDV murad-iii: Eflak ordusu İbrâil Kalesi'ni yaktı (Ocak 1595) — iki TDV maddesi ay düzeyinde ayrışıyor.",
      "d147": "1595-01-01 ±30 günde maddesiz kırılma yok; kırılma p0049 'Tuna kalelerine akınlar' maddesine oturur.",
      "kimlik_sorusu": "Mihail'in idaresi Eflak voyvodalığı (eflak künyesi VAR) — ama 1595-1601 Eflak'ın kendisi Osmanlı'ya karşı; isg mi s mi, koordinatör kararı."
    },
    {
      "id": "A1 devri ① — Timur'un Anadolu'dan çekilişi",
      "durum": "MADDE YAZILMADI — zaten VAR, günü kaynaksız",
      "bulgu": "data/olaylar_ek5.js:53 t:1403-03-15 'Timur'un Anadolu'dan çekilmesi' mevcut (A1 raporu 'bulunamadı' diyordu). Ok penceresi 1403-05-23→1403-09-01 kırpma sonucu; savaslar.js sefer f:1403-03-15 t:1403-08-01 — ikisi de kaynaksız.",
      "kaynak": "TDV timur: Bayezid'in ölüm haberi Mart 1403; 'bir yıl kadar Anadolu'da kalıp' … Muharrem 807 / Temmuz 1404 Semerkant'a döndü. Anadolu'dan çıkış GÜNÜ/AYI yok.",
      "oneri": "Kaynak bulunana kadar yeni madde yazılmaz (mükerrer olur). Ok görünürlüğü için karar savaslar.js/app.js sahibinde (A4/A1)."
    },
    {
      "id": "0042/H-0004 kod notu — Katalan oku",
      "bulgu": "js/app.js seferGuncelle: _fiKirpik = min(max(fi, çapa ti'den önceki son olay), fi + (ti-fi)/2). Çapa = sefer t'si (1305-06-01). 1303-01-01'e yazılan madde bu formülde ÇAPAYI değiştirmez ⇒ ok yine ~1304-07-16'dan itibaren görünür. Kodun kendi yorumu 'madde olsaydı ok orada belirirdi' diyor — bugünkü formülde bu DOĞRU DEĞİL.",
      "oneri": "app.js sahibi: çapa olarak 'seferin f'sine ±30 günde düşen madde varsa o madde' kuralı (D029/D010 negatif testi Katalan ile birlikte sınanmalı)."
    }
  ]
}
yol = os.path.join(KOK, "denetim/YAMA-A3-0913.json")
io.open(yol, "w", encoding="utf-8").write(json.dumps(YAMA, ensure_ascii=False, indent=1))
print("yazıldı:", yol, "· Uzun Hasan yerleşim:", len(uzun), "· Ahıska d/s:", ah_d[1], ah_s[1], "· Urfa isg:", urfa[1])
