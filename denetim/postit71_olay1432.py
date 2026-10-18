yol = "data/olaylar_ek5.js"
s = open(yol, encoding="utf-8", newline="").read()
nl = "\r\n" if "\r\n" in s else "\n"
isaret = '{ t:"1409-01-01", k:"siyaset", etiket:["siyaset","toprak-kayip","konu-askeri","konu-siyasi","konu-hanedan"], b:"Artuklu hanedanının sonu'
i = s.index(isaret)
j = s.index(nl, i) + len(nl)
yeni = ('{ t:"1432-01-01", k:"siyaset", etiket:["siyaset","toprak-kazanc","konu-siyasi"], kapsam:"dis", onem:2, '
        'b:"Mardin Karakoyunlu muhafızından Akkoyunlu Karayülük Osman Bey\'e geçti", gun:"1432", yer:"Mardin", yer_id:"Mardin", '
        'kisiler:"Karayülük Osman Bey, Emîr Nâsır", '
        'd:"Kara Yûsuf\'un 1409\'da aldığı Mardin\'i Karakoyunlular valilerle yönetti; muhafız bırakılan Emîr Nâsır şehri 835\'te (1432) Akkoyunlu Karayülük Osman Bey\'e teslim etti. Akkoyunlu yönetimi XVI. yüzyıl başına kadar sürdü.", '
        'kaynak:"TDV `mardin` — Karayülük Osman Bey\'in Emîr Nâsır\'dan Mardin\'i 835\'te (1432) teslim alması · hassasiyet: YIL, gün kaynakta yok · POSTIT-71", ic_not:"POSTIT-71: Mardin zincirinin Karakoyunlu→Akkoyunlu geçişi 1467-11-10\'dan (kaynaksız) 1432-01-01\'e çekildi" },' + nl)
open(yol, "w", encoding="utf-8", newline="").write(s[:j] + yeni + s[j:])
print("tamam")
