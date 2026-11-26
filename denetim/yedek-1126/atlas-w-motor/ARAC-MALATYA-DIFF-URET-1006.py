# -*- coding: utf-8 -*-
"""MALATYA-1400-TIMUR-1006 — öneri diff'lerini ÜRETMEK için çalışma ağacında geçici düzenleme.
Yalnız KENDİ worktree'mde koşturulur; diff alındıktan sonra `git checkout --` ile geri alınır.
Kökünü __file__den bulur. Satırı TAM eşleşmeyle bulur; bulamazsa hiçbir şey yazmaz."""
import os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def degistir(yol, eski, yeni, adet=1, satir_basi='{ ad:"Malatya", kd:'):
    """Yalnız `satir_basi` ile başlayan TEK satırda değiştirir (Arapkir/Kâhta aynı dizgiyi taşır)."""
    p = os.path.join(KOK, yol)
    t = open(p, encoding="utf-8", newline="").read()
    satirlar = t.split("\n")
    idx = [i for i, s in enumerate(satirlar) if s.startswith(satir_basi)]
    if len(idx) != 1:
        sys.exit(f"HATA {yol}: satır başı {len(idx)} kez bulundu — yazılmadı")
    s = satirlar[idx[0]]
    n = s.count(eski)
    if n != adet:
        sys.exit(f"HATA {yol}: beklenen {adet} eşleşme, bulunan {n} — yazılmadı")
    satirlar[idx[0]] = s.replace(eski, yeni)
    open(p, "w", encoding="utf-8", newline="").write("\n".join(satirlar))
    print(f"{yol}: satır {idx[0]+1}, {n} değişiklik")
    return


KAY = ("TDV `malatya` (6 Ekim 2026 govde okundu): \\\"1400’de Anadolu’ya giren Timur, önce Sivas ve "
       "Elbistan’ı işgal etti, daha sonra Malatya’ya yöneldi.\\\" · \\\"Timur’un Malatya’dan "
       "ayrılmasının ardından Dulkadıroğulları buraya tekrar hâkim oldu.\\\" — YIL hassasiyeti (ay/gün "
       "kaynakta YOK). BITIS 1402-07-28 KAYNAKSIZ: atlasin onceki Ankara siniri korundu; Dulkadir→Memluk "
       "devrinin yili TDV'de yok (MALATYA-1400-TIMUR-1006)")

if __name__ == "__main__" and sys.argv[1:] == ["koord"]:
    yol = "data/yerlesimler.js"
    degistir(yol, '{f:"1402-07-28",t:"1516-08-24",k:0,m:null}',
                  '{f:"1400-01-01",t:"1516-08-24",k:0,m:null}')
    degistir(yol, '{f:"1338-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}',
                  '{f:"1338-01-01",t:"1399-09-01",d:"memluk"},{f:"1400-01-01",t:"1402-07-28",d:"dulkadir",kaynak:"'
                  + KAY + '"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}')
    degistir(yol, 'd:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1920-04-23"}] },',
                  'd:[{f:"1399-09-01",t:"1400-01-01",y:"savas"},{f:"1516-08-24",t:"1920-04-23"}] },')
elif __name__ == "__main__" and sys.argv[1:] == ["olay"]:
    yol = "data/olaylar_ek.js"
    capa = 'b:"Malatya\'nın alınışı", gun:"1399", yer:"Malatya", yer_id:"Malatya"'
    p = os.path.join(KOK, yol)
    t = open(p, encoding="utf-8", newline="").read()
    if t.count(capa) != 1:
        sys.exit("HATA: çapa bulunamadı")
    i = t.index(capa)
    son = t.index("\n", i) + 1
    madde = ('{ t:"1400-01-01", k:"kayip", etiket:["savas","toprak-kayip","konu-askeri"], '
             'b:"Timur Malatya\'yı aldı — şehir Dulkadıroğulları\'na geçti", '
             'gun:"1400 — YIL hassasiyeti · TDV `malatya` ay/gün vermiyor; TDV `timur`a göre Timur 1399-1400 '
             'kışını Karabağ\'da geçirdi, olay Sivas\'ın düşüşünden SONRA (yılın ortası/sonu) — 01-01 '
             'yalnız yıl işaretidir", yer:"Malatya", yer_id:"Malatya", kisiler:"Timur, Karayülük Osman, '
             'Dulkadıroğlu Nasreddin Mehmed", d:"Yıldırım Bayezid 1399\'da aldığı Malatya\'yı Dulkadıroğlu '
             'Nasreddin Mehmed\'e bırakarak Bursa\'ya dönmüştü. 1400\'de Anadolu\'ya giren Timur önce Sivas ile '
             'Elbistan\'ı, ardından Malatya\'yı aldı; şehir ve çevresi yağmalandı, idaresi Timur\'un yanındaki '
             'Karayülük Osman\'a bırakıldı. Timur bölgeden ayrılınca Malatya\'ya yeniden Dulkadıroğulları hâkim '
             'oldu; Osmanlı hâkimiyeti böylece Ankara\'dan önce sona erdi.", kaynak:"malatya (TDV — 6 Ekim 2026 '
             'gövde okundu; MALATYA-1400-TIMUR-1006)", duygu:["😔"] },')
    t = t[:son] + madde + "\r\n" + t[son:]
    open(p, "w", encoding="utf-8", newline="").write(t)
    print(f"{yol}: 1 madde eklendi")
else:
    sys.exit("kullanım: koord | olay")
