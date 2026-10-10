import csv,io,re,sys,collections; sys.stdout.reconfigure(encoding="utf-8")
SP,D=sys.argv[1],sys.argv[2]
t=open(SP+"/k1_sehir_ek.md",encoding="utf-8").read()
E=list(csv.DictReader(io.StringIO(re.search(r"```(?:csv)?\n(ad,.*?)```",t,re.S).group(1))))
OK="OK (Orta Kronoloji)"
# ad öneki -> (ILK, kesinlik, kaynak(URL+alıntı), not(çapraz denetim))
H={
"Kar-Tukulti":("-1207-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q005858 'I built a large cult center … I called it Kār-Tukultī-Ninurta' (A.0.78.22)","İKİ okuyucu AYNI (-1207, Tukulti-Ninurta I saltanat sonu RIAo 1243–1207); sayfa 'ca. 1233-1197' der ⇒ -1197 alternatifi"),
"Al-Untaş":("-1300-01-01","yuzyil","RlA 14 Untaš-Napiriša (2. yarı 14. yy) — okuyucu A2 · collections.smvk.se MM 1977:023a 'He founded a new capital called either Al-Untash-Napirisha … Period Ca 1260-1235 BC.'","İKİ okuyucu AYRIŞTI: -1300 (RlA 14) ↔ -1235 (müze) ↔ -1240 (Iranica eski); RlA esas, ayrım beyanlı"),
"Kabnak":("-1300-01-01","yuzyil","https://www.staff.uni-mainz.de/mofidi/Hafttape,english/what.html 'the seal of Athibu, Governor of Kabnak … Tepti-Ahar'","İKİ okuyucu AYRIŞTI: 15. yy (Mainz proje sayfası) ↔ 14. yy (Mainz basın) ⇒ iki tanığın GEÇ sınırı -1300 · ⚠️ Iranica HAFT TEPE: ad 'remains in doubt' — kimlik ZAYIF"),
"Marad":("-2340-01-01","yuzyil","CDLI P020449/P020481/P020529 Presargonic Nippur 'lu2 mar2-da{ki}' (okuyucu A2) · cdli.earth/inscriptions/2180744 Naram-Sin dönemi 'ensi2 mar2-da{ki}'","A2 Presargonic (ED IIIb sonu -2340, CDLI dönem etiketi) ↔ A-alt Naram-Sin -2218 ⇒ ERKEN tanık esas; RlA 7 Akkad'dan başlatıyordu (CDLI daha erken)"),
"Dilbat":("-1878-01-01","on_yil","RlA 13 Dilbat: Sumu-la-El (1880–1845) 3. yılında 'chased Alumbiumu from Dilbat' (okuyucu A2)","A-alt bulunamadı (Sabium 9) ↔ A2 -1878 ⇒ erken tanık; Alumbiumu yıl adı 'mu dil-bat{ki} in-dab5' (P307215) daha erken, yılı sabit DEĞİL"),
"Kisurra":("-2064-01-01","yil","CDLI P101958 'sza3 ki-sur-ra{ki}', yıl adı Šulgi 31 (okuyucu A2)","A2 ARCANE Šulgi 2092 başlangıcıyla -2062 verdi; atlasın klasik OK'si (Šulgi 2094–2047, OLAY-A ile aynı) ⇒ -2064 · tablet TARİHİ yıl adının kendi yılı (olay değil ⇒ −1 kaydırması YOK) · A-alt bulunamadı"),
"Der":("-2475-01-01","yuzyil","Sallaberger & Schrakamp ARCANE III: Fara dönemi Abu Salabikh za3-me ilahileri Der'i anar (okuyucu A2)","A2 Fara (-2475, ARCANE) ↔ A-alt Šulgi 11 yıl adı (-2084) ⇒ ERKEN tanık esas; RlA 2 Rimuš'tan başlatıyordu"),
"Tuttul":("-2350-01-01","yuzyil","https://www.encyclopedia.com/…/dagan 'the BE of Tuttul … modern Tell Bīʿa' (Ebla metinleri bağlamı)","⚠️ ZAYIF: alıntıda Ebla adı yok, bağlamdan · Sargon 'Tuttul'da Dagan'a eğildi' (2334–2279) yedek"),
"Ebla":("-2350-01-01","yuzyil","https://cordis.europa.eu/project/id/249394/reporting 'royal archives … dating to c. 2300 BC' · Britannica (Wayback) 'Ebla's archives, dating to the 3rd millennium bce'","Ebla Palace G arşivi; kaynak c.2300 der, arşiv OK sınırı 2400–2350"),
"Emar":("-2350-01-01","yuzyil","https://web.archive.org/web/2023id_/https://www.die-bibel.de/stichwort/17472 'Die ältesten Erwähnungen von Emar finden sich in den Keilschrifttafeln aus … Ebla … um 2400 v. Chr.'",""),
"Karkam":("-2350-01-01","yuzyil","https://web.archive.org/web/2023id_/https://www.die-bibel.de/stichwort/23208 'erscheint Karkemisch in den Archiven von Ebla (24. Jh. v. Chr.)'","Britannica 'ilk Mari mektupları' der — eskimiş"),
"Qatna":("-1761-01-01","on_yil","https://web.archive.org/web/2023id_/https://www.britannica.com/place/Katna 'frequently named as Qatanum in the royal archives of Mari'","⚠️ Zimri-Lim sonu (1761) KAYNAKSIZ eşleme; Yasmah-Addu dönemi (~1782–1775) daha erken olabilir"),
"Halab":("-2350-01-01","yuzyil","https://web.archive.org/web/2023id_/https://www.britannica.com/place/Aleppo 'It is first mentioned in the archives of the ancient city of Ebla'",""),
"Ekalte":("-1301-01-01","yuzyil","Sallaberger 2001, archiv.ub.uni-heidelberg.de propylaeumdok 6201 'eine Datierung in das 14. Jh. wahrscheinlich' (Mayer: 'vor 1446')","⚠️ ZAYIF: alıntı TABLETLERİ tarihliyor, adı açıkça değil"),
"Nagar":("-2350-01-01","yuzyil","https://www.thebritishacademy.ac.uk/documents/2009/pba131p001.pdf 'Contemporary cuneiform tablets from Ebla tell us that in the third millennium Nagar was the dominant city'",""),
"Urke":("-2218-01-01","yuzyil","urkesh.org Buccellati 2003 JCS 55 'our dating of king Tupkish to the Akkadian period, and specifically to early Naram-Sin' + 2007 'ruler (endan) of Urkesh … Tupkish'","Naram-Sin saltanat sonu"),
"Kahat":("-1775-01-01","on_yil","Wayback cdli.ox.ac.uk/wiki/year_names_zimri-lim 'Year in which Zimri-Lim seized Kahat (ZL 01)'","⚠️ ZL 1 = 1775 mutlak eşlemesi KAYNAKSIZ (OLAY-B'de aynı sebeple dışarıda tutuldu) ⇒ kesinlik düşük"),
"Şadikanni":("-967-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q006010/html 'the mooring-pole of the city Šadikanni … At the time of Aššur-rēša-iši (II)'","yalnız kraliyet yazıtı dizini tarandı; Orta Asur arşivleri kontrol edilmedi"),
"Guzana":("-894-01-01","yil","https://oracc.museum.upenn.edu/riao/Q006021/html 'marched to the city Guzāna, which Abi-salamu of the land Bīt-Baḫiāni … held' (eponim Šamaš-abūʾa)",""),
"Til-Barsip":("-858-01-01","yil","https://oracc.museum.upenn.edu/riao/Q004607/html 'I approached the city Tīl-Barsip, the fortified city of Aḫūnu' (Kurkh monoliti, tahta çıkış/1. yıl)","Luvi adı Masuwari ayrı ad"),
"Hindanu":("-1076-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q005929/html 'as far as the city Ḫindānu (Ḫimdānu)' (Tiglat-pileser I 04)","Mari OB kontrol edilmedi"),
"Anat":("-1076-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q005929/html 'Anat of the land Sūḫu' (Tiglat-pileser I 04)","OB Ḫanat muhtemel, doğrulanmadı"),
"Şaduppum":("-1900-01-01","yuzyil","RlA 11 s.488 'ist seit Ḫammi-dušur nachzuweisen' · https://cdli.earth/artifacts/299653 'a-na sza-du-up-pe3-e{ki}' Early OB (2000-1900)","İKİ okuyucu AYNI"),
"Zabalam":("-3000-01-01","yuzyil","RlA 15 s.170 (Molina) 'first attested in a small fragment of a tablet dated to the Uruk III period (ca.3100−2900)' · CDLI P000393 'ZABALAM~a' Uruk III (3200-3000)","D2 -2900 (RlA) ↔ D-alt -3000 (CDLI) ⇒ Ur satırıyla AYNI konvansiyon (CDLI Uruk III üst sınırı -3000) · arkaik işaretin şehir okunuşu YORUM"),
"Bad-tibira":("-2340-01-01","yuzyil","https://cdli.earth/artifacts/431120 Enmetena RIME 1.09.05.04 'e2-musz3 pa5-ti-bir5-ra{ki}-ka' ED IIIb (2500-2340)","D2 -2420 ('Enmetena vers 2420') ↔ D-alt -2340 (ED IIIb sonu) ⇒ Marad ile aynı konvansiyon (dönem sonu) · Sümer Kral Listesi KULLANILMADI"),
"Me-Turan":("-1900-01-01","yuzyil","RlA 8 s.150 'Zuerst altbab. genannt (… OBTI 63: 18)' = CDLI P369493 Early OB","D2 -1900 ↔ D-alt -1818 (Ipiq-Adad II yıl adı, saltanat sonu kaynaksız) ⇒ RlA esas · ⚠️ Pleiades kimliği Tall al-Sīb (Tell Haddad değil) — koordinat Hamrin"),
"Sippar-Amnanum":("-1734-01-01","yil","RlA 12 s.528 'Tell ed-Dēr war bis Samsu-iluna Sippir-rabûm, danach Sippir-Amnānum' + CDLI P510246 Samsu-iluna 16","D2 -1734 ↔ D-alt -1720 (SI 30) ⇒ erken tanık"),
"Dur-Katlimmu":("-1234-01-01","on_yil","https://www.schechhamad.de/ausgrabung/archive.php 'seit Salmanassar I., der den Tempel des Stadtgottes Salmānu von Dūr-Katlimmu gründete'","'wahrscheinlich'; arşiv mektupları çoğunlukla Tukulti-Ninurta I ⇒ -1197 alternatifi"),
"Imgur-Enlil":("-859-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q004504/ 'I reorganized this city (and) named it Imgur-Enlil'","İKİ okuyucu AYNI; ad kralın KENDİ verdiği ad"),
"Tarbisu":("-1296-01-01","on_yil","https://oracc.museum.upenn.edu/riao/Q005737/html '[He … the cities (...)] Tarbiṣi, (and) Kudina' (Arik-dīn-ili 8)","⚠️ kimlik belirsiz; sağlam yedek Šalmaneser III Q004735 (açılmadı)"),
"Kilizu":("-1250-01-01","yuzyil","Wayback iranicaonline.org/articles/kilizu/kilizu-ii-excavations-since-2011 'the city was already part of the Middle-Assyrian empire in the first half of the 13th century BCE'","D2 -1076 (RlA 5: Tiglat-pileser I idari metinleri) ↔ D-alt -1250 (Iranica, DOLAYLI) ⇒ erken tanık, dolaylılık beyanlı"),
"Puzriş-Dagan":("-2056-01-01","yil","Wayback cdli.ucla.edu/tools/yearnames/HTML/T6K2.htm '39 mu … e2-puzur4-isz-{d}da-gan{ki} … mu-du3' · RlA 11 'Vor und nach der Ur III-Zeit ist P. nicht belegt'","A-alt -2056 (klasik Š39) ↔ A2 -2054 (ARCANE) ⇒ klasik OK · yıl adı ADI taşıyor ⇒ ad o yıl yazılı"),
"Maşkan-şapir":("-2154-01-01","yuzyil","Stone & Zimansky 2004 (Steinkeller) repo.library.stonybrook.edu 11401/89161 'The earliest known mention of Mashkan-shapir comes from a Sargonic letter of Nippur provenience' · RlA 7 (SR 83)","A2 -2142 (ARCANE Akkad sonu) ↔ A-alt -2154 ⇒ atlas klasik OK Sargonlu sonu"),
"Alalah":("-1761-01-01","on_yil","https://web.archive.org/web/2023id_/https://www.die-bibel.de/stichwort/12985 'Die Briefe aus Mari legen ein erstes Zeugnis darüber ab'","⚠️ ZL sonu KAYNAKSIZ eşleme"),
}
YENI=[dict(ad="Nerebtum (Iščali)",enlem="33.3015",boylam="44.5831",ILK_KAYIT_TARIHI="-1900-01-01",kesinlik="yuzyil",
  kaynak="https://pleiades.stoa.org/places/357565832 (JSON) 'Nērebtum is a medium-sized Bronze Age settlement located east of Baghdad on the left bank of the Diyala river' · CDLI P289695 YOS 14 075 'lu2 ne-re-eb-tum' Early OB (2000-1900)",
  arkeolojik_katman="",not_=OK+" · konum denetimi (alt-ajan E) ile eklendi; Ipiq-Adad II tuğlası P448197 daha sağlam ama saltanat sonu kaynaksız"),
 dict(ad="Kutalla (Tell Sifr)",enlem="31.2946",boylam="45.9672",ILK_KAYIT_TARIHI="-1835-01-01",kesinlik="yil",
  kaynak="https://cdli.earth/proveniences/167 'Kutalla (mod. Tell Sifr)' · https://cdli.earth/artifacts/270025 'ku-ta-al-la{ki}-a-ke4' (Ṣilli-Adad)",
  arkeolojik_katman="",not_=OK+" · konum denetimi (alt-ajan E) ile eklendi; yalnız bir yazım tarandı, Ur III yazımları kontrol edilmedi")]
S=list(csv.DictReader(open(D+"-SEHIR.csv",encoding="utf-8"))); cols=list(S[0].keys())
c=collections.Counter(); cikan=[]
for r in E:
    if r["ad"].startswith("Upi"): cikan.append(r["ad"]); continue
    k=next(k for k in H if r["ad"].startswith(k))
    ilk,kes,kay,nt=H[k]
    row={x:r.get(x,"") for x in cols}
    row.update(ILK_KAYIT_TARIHI=ilk,kesinlik=kes,kaynak=kay+" · koordinat: "+r["kaynak"][:160],
               **{"not":" · ".join(x for x in (OK,nt) if x)})
    S.append(row); c["eklendi"]+=1; c["ZAYIF/⚠️"]+= "⚠️" in nt
for y in YENI:
    y["not"]=y.pop("not_"); S.append({x:y.get(x,"") for x in cols}); c["eklendi"]+=1
w=csv.DictWriter(open(D+"-SEHIR.csv","w",encoding="utf-8",newline=""),fieldnames=cols); w.writeheader(); [w.writerow(r) for r in S]
print(dict(c),"çıkan",cikan,"toplam",len(S),"tarihli",sum(1 for r in S if r["ILK_KAYIT_TARIHI"].startswith("-")))
