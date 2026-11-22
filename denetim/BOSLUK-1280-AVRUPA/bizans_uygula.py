import sys, re
sys.stdout.reconfigure(encoding="utf-8")
ON = "1280 UZATMA (emrelic-bosluk-bizans-1122): f 1281-01-01 -> 1280-01-01. "
ISLER = [
 ("data/yerlesimler.js", 'ad:"Sakız"', 's:[{f:"1281-01-01",t:"1304-01-01",d:"bizans",kesinlik:"yil",kaynak:"',
  's:[{f:"1280-01-01",t:"1304-01-01",d:"bizans",kesinlik:"yil",kaynak:"' + ON + "1280 sahibi Bizans: TDV sakiz-adasi (Orenc) 1247 Vatatzes ile ada Bizans'a katildi, 1261 Nif Genoa yalniz imtiyaz, 1304'e kadar sahip degisimi anilmiyor (ilk f=1280-01-01, gun teyitsiz). Q1 VAR (TDV: ada yerlesik liman). · "),
 ("data/yerlesimler.js", 'ad:"Limni"', 's:[{"f":"1281-01-01","t":"1453-05-29","d":"bizans","kaynak":"',
  's:[{"f":"1280-01-01","t":"1453-05-29","d":"bizans","kaynak":"' + ON + "TDV limni: 1207-1279 Navigaioso (Venedik) idaresi, 1277-79 Mihail VIII Palaiokastron kusatmasi, 1279'dan Bizans idaresi => 1280-01-01'de Bizans (gun teyitsiz, yil duzeyi). · "),
 ("data/yerlesimler_seyrek.js", 'ad:"Karabiga"', 's:[{f:"1281-01-01",t:"1297-01-01",d:"bizans",kaynak:"',
  's:[{f:"1280-01-01",t:"1297-01-01",d:"bizans",kaynak:"' + ON + "Q1 VAR: TDV biga--canakkale (Pegai/Pigas, Anna Komnene dönemi kıyı limanı; 1328 Pegai antlaşması); Q2 Bizans: Keçiş, Belleten (XIII-XIV. yy Kuzeybatı Anadolu yol ağları, s.851) Bitinya XIII. yy boyunca Bizans'ta. Gün teyitsiz. · "),
 ("data/yerlesimler.js", 'ad:"Yalova"', 's:[{f:"1281-01-01",t:"1326-01-01",d:"bizans",kesinlik:{t:"yil"},kaynak:"',
  's:[{f:"1280-01-01",t:"1326-01-01",d:"bizans",kesinlik:{t:"yil"},kaynak:"' + ON + "Q1 VAR: TDV yalova (Roma-Bizans yerlesimi, Bafeus 1302 anilisi); Q2 Bizans: Kecis, Belleten (Bitinya XIII. yy Bizans'ta, s.851). Gun teyitsiz. · "),
 ("data/yerlesimler_seyrek.js", 'ad:"İskeçe"', 's:[{f:"1281-01-01",t:"1373-01-01",d:"bizans",kaynak:"',
  's:[{f:"1280-01-01",t:"1373-01-01",d:"bizans",kaynak:"' + ON + "Q1 VAR (Xantheia, ilk anilis 867) ve Q2 Bizans: Yunan Kultur Bakanligi Egnatia rotasi Xanthi sayfasi (culturalegnatia.culture.gov.gr/en/route-stops/xanthi): 1241'de Bizans'a donus; TDV iskece: II. Andronikos (1282-1328) basepiskoposluk yapti => 1280'de Bizans. Gun teyitsiz. · "),
]
for dosya, ankraj, eski, yeni in ISLER:
    s = open(dosya, encoding="utf-8", newline="").read()
    i = s.index(ankraj)
    j = s.index(eski, i)
    # kaydin icinde mi: sonraki kayit basina kadar
    nxt = s.find("\n{ ", i + 5)
    assert nxt == -1 or j < nxt, (dosya, ankraj)
    s = s[:j] + yeni + s[j + len(eski):]
    open(dosya, "w", encoding="utf-8", newline="").write(s)
    print("ok", ankraj)
