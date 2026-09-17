# -*- coding: utf-8 -*-
"""KOSU13-YAMA · DALGA-0064 uygulanabilir kalemleri (1.MURAT M-4357).
Uygulayıcı: py denetim/ARAC-KOSU13-UYGULA2-0917.py denetim/PAKET-KOSU13-0064-0917.py [--yaz]
YAMA-0064-BALKAN     öneri 1 (Dubica) · 2 (Novi isg) · 4 (Krupa noktası) · 6 (Niş isg günleri)
                     KARAR: 3 (HE yıl sapmaları) · 5 (Yagodina şık A/B) · teyit 7-8-9 dokunulmadı
YAMA-0064-KARADENIZ  KR-1 · KR-2 · KR-5 maddeleri (KR-3/KR-4 çekirdekte ZATEN VAR: olaylar_p0043kirim)
                     H-2 Anapa değişiklikleri veride ZATEN VAR (isg 1791-07-26 · 1828-06-24 · rusya 1829→)
                     KARAR: H-1 (Çerkez künyesi yok) · H-2 1791 günü · H-3 Özi iadesi · H-4 Kabartay/KR-6
⚠️ Dubica (kalem 1): 1.MURAT M-4322 K7 'Dubica dokunma' dedi; M-4357 bu paketin 4 önerisinin
   indirilmesini istedi ve 0064 yeni kaynak getiriyor (Korić 2016 · HE · Karlofça metni) — uygulandı, raporda işaretli.
"""
import collections


def S(f, t, d, **ek):
    p = {"f": f, "t": t, "d": d}
    p.update(ek)
    return p


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


DUB = "Bosna Dubiçası (Bosanska Dubica)"
BROD = ("gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · "
        "HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının "
        "Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1")
ISLEM = collections.OrderedDict([
    (DUB, ("0064-B1", [
        ("d~", W("1538-01-01", "1699-01-26"), W("1538-01-01", "1718-07-21", kaynak=BROD)),
        ("d+", W("1739-09-28", "1908-10-05", kaynak=BROD + " · 1908-10-05 Bosna kayıtlarının ortak günü (Novi ile aynı)")),
        ("s", [S("1699-01-26", "1918-11-11", "avusturya")],
         [S("1718-07-21", "1739-09-28", "avusturya", kaynak=BROD), S("1908-10-05", "1918-11-11", "avusturya")]),
        ("isg=", [], [S("1788-08-26", "1791-08-04", "avusturya",
                        kaynak="Korić 2016, Prilozi za orijentalnu filologiju 65 (26 avgusta 1788 teslim) · Srpska enciklopedija 'Austro-turski ratovi' (Svištov 4. VIII 1791) · HE Kozarska Dubica")]),
    ])),
    ("Bosna Novi'si (Bosanski Novi)", ("0064-B2", [
        ("isg=", [], [S("1788-10-03", "1791-08-04", "avusturya",
                        kaynak="Korić 2016 (3. oktobra 1788) · Srpska enciklopedija (Svištov 4. VIII 1791) · HE Novi Grad (fiilî 1788–95)")]),
    ])),
])
# 0064-B6 Niş — METİN ile (kaydın s: dizisi sırasız yazılmış; ISLEM doğrulayıcısı yanlış çakışma görüyor)

KRUPA = ('{ ad:"Krupa (Bosanska Krupa)", tur:"kale", lat:44.882, lon:16.158, g:0, k:3,\n'
         '  neden:"DALGA-0064 · YAMA-0064-BALKAN #4 (KOSU13-YAMA, 17 Eyl 2026): Bihaç (24 km) ile Novi (25 km) arasında Una sağ yakasındaki Osmanlı sınır kalesi; Bihaç eksklavının ikinci bağı. 1565 öncesi (Hırvat-Macar dönemi) bağlılığı bu pakette araştırılmadı — nokta 1565\'ten önce sahipsiz (kasıtlı).",\n'
         '  kaynak:"HE Bosanska Krupa: \'Osmanlije su zaposjeli Krupu 1565\'; Avusturya 1581, 1690, 1692, 1716\'da kuşattı (alındığı yazılmıyor) · Korić 2016: 1787-88\'de Una üzerinden malzeme gönderilen Osmanlı sınır kalesi · koordinat OSM düğüm 841364318 · 1908 günü Bosna kayıtlarının ortak günü (1878 işgali atlasta ayrı modellenmiyor)",\n'
         '  kur:"1565-01-01",\n'
         '  d:[{f:"1565-01-01",t:"1908-10-05",kaynak:"HE Bosanska Krupa (YIL)"}],\n'
         '  s:[{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}], v:[] },')
EKLE = [("data/yerlesimler_ek29.js", "Krupa (Bosanska Krupa)", KRUPA)]

YENI = r'''
// ─── 17 Eyl 2026 · DALGA-0064 partisi (1.MURAT M-4357) · YAMA-0064-BALKAN · YAMA-0064-KARADENIZ ───

{ t:"1565-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Krupa Kalesi'nin Osmanlılarca alınması", gun:"1565 (gün bilinmiyor)", yer:"Krupa, Una kıyısı (Bosna)", yer_id:"Krupa (Bosanska Krupa)", kisiler:"", d:"Una'nın sağ yakasındaki Krupa kalesi 1565'te Osmanlıların eline geçti. Kale sonraki iki yüzyılda Avusturya kuşatmalarına (1581, 1690, 1692, 1716) karşı Osmanlı'da kaldı ve Bihaç ile Novi arasındaki Una sınır hattının parçası oldu.", ic_not_d:"YAMA-0064-BALKAN #4 · yeni nokta ile birlikte", kaynak:"Hrvatska enciklopedija, 'Bosanska Krupa'" },

{ t:"1736-03-24", k:"savas", etiket:["savas","konu-askeri","konu-diplomasi"], b:"Rusya Azak ve Kırım üzerine yürüdü — Osmanlı-Rus Savaşı fiilen başladı", gun:"24 Mart 1736 (11 Zilkade 1148 — Güler; TDV 'Mart 1736'; Gümüş 10 Nisan 1736 der, çözülmedi)", yer:"Azak, Kırım", yer_id:"Azak", kisiler:"Münnich", d:"Kırım kuvvetlerinin İran cephesine giderken Kabartay'dan geçmesini topraklarına tecavüz sayan Rusya, bunu bahane ederek savaş ilan etmeden Azak ve Kırım üzerine iki koldan yürüdü. Münnich Don'u geçip Azak önündeki kaleleri aldı. Osmanlı divanı ancak 2 Mayıs 1736'da savaş kararı aldı.", ic_not_d:"YAMA-0064-KARADENIZ KR-1 (H-0001)", kaynak:"Güler, Tarih İncelemeleri Dergisi 23 (2008) s.141 · mahmud-i--osmanli" },

{ t:"1739-12-12", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"], b:"Rusya ile barışın ahidnamesi: Kabartay tarafsız, Azak yıkılacak", gun:"12 Aralık 1739 (11 Ramazan 1152)", yer:"Azak, Kabartay", yer_id:"Azak", kisiler:"", d:"Rusya ile barışın ahidnamesi 12 Aralık 1739'da düzenlendi. Azak'ın istihkâmları yıkılıp iki devlet arasında boş bir ara bölge bırakılacak, Kabartay ne Rusya'ya ne Osmanlı'ya bağlı olacaktı (md. 6). Özi ve Kılburun Osmanlı'ya kaldı.", ic_not_d:"YAMA-0064-KARADENIZ KR-2 · 1739-10-03 'Niş Antlaşması' maddesinin günü için belgeli kaynak bulunamadı (bu madde ona dokunmuyor)", kaynak:"mahmud-i--osmanli · Kurtaran, Tarih İncelemeleri Dergisi 29/1 (2014; BOA DVE 83/1) · azak · Manstein s.246" },

{ t:"1788-08-26", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Dubica'nın Avusturya'ya düşüşü", gun:"26 Ağustos 1788", yer:"Dubica (Una kıyısı, Bosna)", yer_id:"Bosna Dubiçası (Bosanska Dubica)", kisiler:"Mareşal Laudon", d:"1788 baharındaki ilk Avusturya saldırıları geri püskürtülmüştü. Ağustosta Mareşal Laudon kuşatmayı yeniden kurdu; yiyeceği ve cephanesi tükenen kale 26 Ağustos 1788'de teslim oldu. Dubica, ekimde düşen Novi ile birlikte Avusturya'nın o yılki tek askerî başarısıydı. Kale 1791 Ziştovi Antlaşması'yla Osmanlı'ya geri verildi.", ic_not_d:"YAMA-0064-BALKAN #1 · isg 1788-08-26→1791-08-04 ile birlikte", kaynak:"Korić, Prilozi za orijentalnu filologiju 65 (2016) · Srpska enciklopedija 'Austro-turski ratovi'" },

{ t:"1788-10-03", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Laudon Una üzerindeki Novi kalesini aldı", gun:"3 Ekim 1788", yer:"Novi (Una kıyısı, Bosna)", yer_id:"Bosna Novi'si (Bosanski Novi)", kisiler:"Mareşal Laudon, kapudan Cerić", d:"Dubica'dan sonra Laudon Una üzerindeki Novi kalesine yürüdü ve 3 Ekim 1788'de kaleyi aldı; kapudan Cerić ile bütün muhafızlar esir düştü. İki kalenin kaybı üzerine Bosna'da genel seferberlik ilan edildi. Novi 1791 Ziştovi Antlaşması'yla geri verildi.", ic_not_d:"YAMA-0064-BALKAN #2 · isg 1788-10-03→1791-08-04 ile birlikte", kaynak:"Korić, Prilozi za orijentalnu filologiju 65 (2016)" },

{ t:"1838-01-01", kesinlik:"yil", k:"kayip", etiket:["savas","konu-askeri"], b:"Ruslar Çerkez kıyısında Soçi ve Tuapse limanlarını aldı", gun:"1838 (gün kaynakta yok)", yer:"Soçi, Tuapse (Çerkez kıyısı)", yer_id:"Soçi (Sâşe)", kisiler:"", d:"Edirne Antlaşması'nı tanımayan ve fiilen bağımsız kalan Çerkezlerin kıyısında Ruslar 1838'de Soçi ve Tuapse limanlarını ele geçirdi. Çerkez içerisinin işgali 1861-1864'te tamamlandı.", ic_not_d:"YAMA-0064-KARADENIZ KR-5 · harita karşılığı H-1 kararına bağlı (Çerkez künyesi yok) — o karara kadar kırılmasız madde", kaynak:"cerkezler · abazalar" },
'''
METIN = [
    ("data/yerlesimler.js", 'isg:[{f:"1737-07-01",t:"1737-10-01",d:"avusturya",kaynak:"nis"}]',
     'isg:[{f:"1737-07-27",t:"1737-10-16",d:"avusturya",kaynak:"nis (Temmuz · Ekim 1737) · Srpska enciklopedija \'Austro-turski ratovi\' (Niş 27. VII 1737) · bitiş günü olaylar_p0063 1737-10-16 maddesiyle aynı (Hambly)"}]',
     ("kayit", "Niş")),
    ("data/olaylar_p0917kosu13.js", "\n];", YENI.rstrip() + "\n\n];"),
]
