"""BOZKIR-KAZAK yama uygulayıcısı (15 Eylül 2026) — ÖNERİ, canlı ağaca kendiliğinden UYGULANMAZ.

Rapor : denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md
Karar : Emre (15 Eyl 2026) — Kalmuk künye+renk EVET · Zaporojye Seç/Hetmanlık BÖL · önce yama önerisi.

Kullanım:
    py denetim/ARAC-BOZKIR-KAZAK-UYGULA-0915.py <KÖK>          # <KÖK> içindeki dosyaları DEĞİŞTİRİR
    py denetim/ARAC-BOZKIR-KAZAK-UYGULA-0915.py <KÖK> --kuru   # yalnız ne yapacağını söyler
    py denetim/ARAC-BOZKIR-KAZAK-UYGULA-0915.py --json <yol>   # öneriyi JSON olarak döker

<KÖK> bir çalışma ağacının kökü (data/ arac/ index.html içeren). Canlı ağaçta
koşturmak Oturum 0'ın işidir (CLAUDE.md §7); bu betik sınama için bir KOPYADA koşuldu.

Kurallar (D001 · D005 · D046):
  · kayıt ADIYLA bulunur ve dosyada TAM 1 kez geçmesi şarttır (assert);
  · dosya genelinde replace YOK — yalnız kaydın kendi bloğu içinde alan değeri değişir;
  · değiştirilen alan: s · d · v (dizinin tamamı yeniden yazılır) · neden (ÖNÜNE eklenir);
  · hiçbir `eski` dizgi varsayılmaz: blok JS-bilinçli (dize + yorum) ayraç sayımıyla bulunur.
"""
import sys, os, re, io, json, shutil

TARIH = "15 Eyl 2026"
ETIKET = f"BOZKIR-KAZAK {TARIH} (denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md, Emre kararı)"
RUS = [("1917-03-15", "1917-11-07", "rusya-gecici-hukumet"), ("1917-11-07", "1923-10-29", "sovyet-rusya")]

# ── KAYNAK METİNLERİ ─────────────────────────────────────────────────────────
K = {
 "bosluk1502": "BULUNAMADI — 1502 sonrası bu bozkırın sahibi adıyla (Büyük Nogay tasarrufu) dört taramada da bulunamadı; Kırım TASARRUFU kaynakta YOK (TDV kirim yalnız hak iddiası verir, akın/iddia tasarruf değildir — D030).",
 "don_kazak": "Военная энциклопедия (Sytin) 'Донское казачье войско': ordunun kıdemi 1570'ten sayılır (Novosiltsev) · TDV azak · künye don-kazak 1570-1721.",
 "desht": "Kırım tasarrufu KAYNAKTA YOK (TDV kirim · TDV nogaylar · ESBE · IEU — dört tarama). Nokta Don'un BATI yakasında (48,5K'de Don ≈42,8-43,2D), Çir havzası — ВЭ/ESBE'ye göre Don Ordası toprağı. Önceki kodlama 1570-1783 Kazak/Rus kuşatması içinde tek Kırım adası üretiyordu (ölçüldü).",
 "nogay1557": "TDV nogaylar: 'Kadı (Kazi) Mirza'nın idaresinde 964-965 (1557-1558) yıllarında İdil nehrini geçti; Kırım hanından himaye görerek Kabarda bölgesiyle Azak denizi arasındaki topraklara yerleştirildi' · TDV kirim ('Nogaylar'ın hana tâbiiyeti gevşek'). Gün yok ⇒ 1557-01-01 (yıl).",
 "kalmuk1655": "Российская историческая энциклопедия 'Калмыцкое ханство': 1655, 1657, 1661 şertlerine göre Kalmuk otlakları batıda Don bozkırlarına, güneyde Kuzey Kafkas eteklerine kadar · ESBE 'Калмыки': ilk şert 1655 · TDV kalmuklar: 'bir bölümü de Kalmuklar'ın idaresi altına girdi' (TDV nogaylar). Batı otlakları için yalnız yıl ⇒ 1655-01-01.",
 "kalmuk1632": "TDV kalmuklar: '1618'den 1632'ye kadar süren göç dalgaları halinde … İdil (Volga) boylarına taşıyarak orada İdil Kalmukları Hanlığı'nı kurdu (1632)'. Yıl ⇒ 1632-01-01. ⚠️ ESBE 'Калмыки' 1630-32 Volga yerleşimini 'geçici' sayar; nokta Volga'nın BATISINDA — batı yakasının kesin yılı bulunamadı.",
 "kalmuk1771": "RİE 'Калмыцкое ханство': 19(30).10.1771 ukazıyla hanlık kaldırıldı — Gregoryen günü kaynağın kendisinde · ÇELİŞKİ: TDV kalmuklar göçü '1770' der (ESBE 5 Ocak 1771).",
 "kirim_eski": "Emre kararı D (13 Eyl 2026): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE · TDV kirim ('Nogaylar'ın hana tâbiiyeti gevşek').",
 "ochakiv": "IEU 'Ochakiv' (15. yy sonunda kuzey kıyı Kırım denetiminde) · TDV kirim (gevşek) · Emre kararı D.",
 "yedisan_osm": "TDV ozu: Cankirman 'Kanûnî'nin Karaboğdan seferi sonrasında (945/1538) kesin biçimde Osmanlı idaresi altına girmiş olmalıdır'; 1631-32 defterinde müstakil beylerbeyilik · EIU 'Очаківська земля': Dinyester-Bug arası idarî olarak Özi eyaletine bağlı · 1792 Yaş ile Rusya'ya. ⇒ 1538-1792 toprak OSMANLI; ordalar üzerinden Kırım bağı ayrıca v: ile.",
 "yedisan1723": "EIU 'Єдисанська орда' (Panashenko 2005): orda 1715'te Kuban'a, 1723'te Osmanlı ve Kırım üstünlüğünü tanıyıp Dinyeper-Dinyester arasına yerleşti · TDV nogaylar: 'Yedisan … Nogayları, Kırım Hanlığı'nın hâkimiyeti altındaydı' · ÇELİŞKİ: EIU 'Очаківська земля' 1720-30'lar, TDV kirim '18. yy başı'. Yıl ⇒ 1723-01-01. Bitiş 1770: EIU aynı madde — orda 1770'te Rus himayesini tanıdı ve nakledildi (yıl).",
 "sec1711": "EIU 'Олешківська Січ' (Hurjiy): 1711-1728 Seç Kırım hanının toprağında ve himayesinde · EIU 'Кам'янська Січ': 1728/1730-1734 hana bağlı (ÇELİŞKİ 1728/1730) · EIU 'Прутський трактат': Rusya Zaporojye'den el çekti — başlangıç atlasın Prut günü (1711-07-21, olaylar) · EIU 'Адріанопольський договір' (1713): sınır Samara-Orel arasına. Bitiş: EIU 'Нова Січ' (Panaşenko) — Mart 1734 Kamianka terk, Nova Seç Rus tâbiliğinde; §4 ay ⇒ 1734-01-01, ay metinde.",
 "sec_zap": "EIU 'Запорозька Січ' (Şçerbak) · IEU 'Zaporozhian Sich': Seç ~1552 Vişneveçki; 1775 Tekeli yıktı (yeni takvim 15/16 Haziran).",
 "kuma1777": "ESBE 'Ставропольская губерния': Azak-Mozdok hattı 1775'te planlandı, 1777'de Stavropol dahil 10 kaleyle kuruldu. Yıl ⇒ 1777-01-01.",
 "kuma_bosluk": "BULUNAMADI — Kalmuk göçünden (1771) Rus hattına (1777) kadar Kuma bozkırının sahibi kaynakta yok.",
 "zborov": "Енциклопедія історії України (НАН) 'Зборівський договір': 18.08.1649 — Kiev, Bratslav, Çernigov voyvodalıklarında Kazak özerkliği · IEU 'Hetman State' · EIU 'Гетьманщина' (Hurjiy): 1654 öncesi Hetmanlık toprağı Poltava, Kremençuk, Çernigov, Starodub, Hluhiv, Çigirin'i kapsar. Gün kaynağın verdiği gibi.",
 "het_son": "EIU arama önizlemesi (madde AÇILMADI — DOĞRULANACAK): II. Katerina'nın 10(21).11.1764 fermanıyla hetmanlık kaldırıldı · IEU 'Hetman State': alay düzeni 1781-82'ye kadar sürdü. 1654-1764 arası Moskova'ya tâbi özerk (künye tabi).",
 "kiev_het": "Zboriv 1649 (EIU) · Kiev 1667'de Andrusovo ile Rusya'ya: atlas günü 1667-02-09 DEĞİŞTİRİLMEDİ — ⚠️ EIU 30(20).01.1667, IEU 13.01.1667; ikisi de 02-09'a uymuyor (ayrı kalem).",
 "cehrin": "TDV cehrin-seferi: 'Kuşatma 21 Temmuz 1678 günü başladı' · kale kuşatmanın 33. günü 'alındı (21 Ağustos 1678)' — 15 Eyl 2026 gövde yeniden okundu. Eski 1678-07-19 Kara Mustafa'nın varış günü (EIU Haluşka), fethin günü DEĞİL. Hetmanlık dilimi: Çigirin 1648-63 hetman başkenti (IEU), 1669-76 Doroşenko (Osmanlı tâbiliği AYRICA KODLANMADI — Emre kararı: yalnız Seç + Hetmanlık).",
 "hluhiv": "Önceki kayıt 1547-1654 kesintisiz rusya idi — kaynaksız. Deulino (1618) ile Çernigov-Seversk toprakları Lehistan'a: §4 şartlı komşu günü — aynı antlaşma, aynı voyvodalık; gün komşudan: Çernigov / Novgorod-Seversk (1618-12-11). Hluhiv 1708-34 hetman başkenti (IEU Hetman State).",
 "soguc": "ESBE 'Новороссийск': 'В 1722 г. здесь была построена турецкая крепость' · Osmanlı'dan çıkış 1829 Edirne (TDV anapa, Anapa ile aynı antlaşma).",
}

def P(f, t, d=None, **ek):
    o = {"f": f, "t": t}
    if d is not None:
        o["d"] = d
    o.update(ek)
    return o

def rus(f):
    return [P(f, "1917-03-15", "rusya")] + [P(a, b, c) for a, b, c in RUS]

def gevsek(f, t, kaynak):
    return P(f, t, k="Kırım Hanlığı", kid="kirim", statu="gevsek", himaye=True, kaynak=kaynak)

def het(f="1649-08-18", t="1764-11-21"):
    return P(f, t, "kazak-hetmanligi", kaynak=K["zborov"] + " ‖ " + K["het_son"])

# ── KAYIT YAMALARI ───────────────────────────────────────────────────────────
KAYITLAR = [
 dict(dosya="yerlesimler.js", ad="Bozkır (Deşt-i Kıpçak)",
      v=[], s=[P("1281-01-01", "1502-03-01", "altinorda"),
               P("1502-03-01", "1570-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
               P("1570-01-01", "1721-01-01", "don-kazak", kaynak=K["desht"] + " · " + K["don_kazak"])] + rus("1721-01-01"),
      neden="Kırım gevşek 1502-1774 ve Kırım 1774-1783 KALDIRILDI (kaynaksız, enklav); 1502-1570 __BOSLUK__, 1570-1721 don-kazak, 1721 rusya (komşu Don noktalarıyla aynı zincir)."),
 dict(dosya="yerlesimler_ek6.js", ad="Çerkask (Razdory)",
      v=[], s=[P("1281-01-01", "1502-03-01", "altinorda"),
               P("1502-03-01", "1570-01-01", "__BOSLUK__", kaynak=K["bosluk1502"] + " TDV azak yalnız Azak'ı Kefe sancağı kazası olarak verir; Don kasabaları üzerinde han kaydı yok.")]
             + [P("1570-01-01", "1721-01-01", "don-kazak", kaynak=K["don_kazak"])] + rus("1721-01-01"),
      neden="Kırım gevşek 1502-1570 KALDIRILDI (kaynaksız) → __BOSLUK__."),
 dict(dosya="yerlesimler_ek6.js", ad="Donets bozkırı",
      v=[], s=[P("1281-01-01", "1502-03-01", "altinorda"),
               P("1502-03-01", "1570-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
               P("1570-01-01", "1721-01-01", "don-kazak", kaynak=K["don_kazak"] + " ⚠️ ВЭ: 1708 Bulavin sonrası Donets toprakları Bahmut vilayetine verildi — iadesi BULUNAMADI, kodlanmadı.")] + rus("1721-01-01"),
      neden="Kırım gevşek 1502-1570 KALDIRILDI (kaynaksız) → __BOSLUK__."),
 dict(dosya="yerlesimler_ek6.js", ad="Don bozkırı (Sal)",
      v=[gevsek("1557-01-01", "1655-01-01", K["nogay1557"])],
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1557-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1655-01-01", "1771-10-30", "kalmuk", kaynak=K["kalmuk1655"] + " ‖ " + K["kalmuk1771"])] + rus("1771-10-30"),
      neden="Don Kazak 1570-1721 KALDIRILDI: Sal-Manıç Don'un güneyi/doğusu, 1655-1771 Kalmuk sahası (RİE, ESBE); 1557-1655 Küçük Nogay üzerinden Kırım gevşek; 1771 sonrası Rusya (ESBE: Sal-Manıç Don Ordası toprağı, Rus iç birimi)."),
 dict(dosya="yerlesimler.js", ad="Kalmuk bozkırı",
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1632-01-01", "nogay", kaynak="TDV nogaylar (Nogay sahası; Kalmuk istilâsına kadar)"),
         P("1632-01-01", "1771-10-30", "kalmuk", kaynak=K["kalmuk1632"] + " ‖ " + K["kalmuk1771"])] + rus("1771-10-30"),
      neden="rusya 1556-1771 → nogay 1556-1632 + kalmuk 1632-1771: Astarhan'ın 1556 fethi şehri verir, bozkırı değil; Volga Kalmuk Hanlığı künyesi eklendi."),
 dict(dosya="yerlesimler_ek_bozkir.js", ad="Yedisan bozkırı",
      v=[gevsek("1502-03-01", "1538-09-01", K["ochakiv"]),
         gevsek("1723-01-01", "1770-01-01", K["yedisan1723"])],
      d=[P("1538-09-01", "1792-01-09", kaynak=K["yedisan_osm"])],
      s=[P("1281-01-01", "1502-03-01", "altinorda")] + rus("1792-01-09"),
      neden="Kırım gevşek 1502-1774 → 1502-1538 ve 1723-1770 (Yedisan ordası geldiği ve ayrıldığı yıllar); 1538-1792 OSMANLI (Özi eyaleti, d: SÜREKLİ — v: içine yuvalanır, VERI-YAPISI B biçimi); s:kirim 1774-1783 KALDIRILDI (Kaynarca'nın bağımsız alanı Bug'un doğusu — TDV kirim)."),
 dict(dosya="yerlesimler.js", ad="Kuban (Yekaterinodar)",
      v=[gevsek("1557-01-01", "1774-07-21", K["nogay1557"])],
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1557-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1774-07-21", "1783-04-19", "kirim")] + rus("1783-04-19"),
      neden="Kırım gevşek başlangıcı 1502 → 1557 (Küçük Nogay'ın gelişi, TDV nogaylar); 1502-1557 __BOSLUK__."),
 dict(dosya="yerlesimler_ek_bozkir.js", ad="Kuban Nogay bozkırı",
      v=[gevsek("1557-01-01", "1774-07-21", K["nogay1557"])],
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1557-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1774-07-21", "1783-04-19", "kirim")] + rus("1783-04-19"),
      neden="Kırım gevşek başlangıcı 1502 → 1557 (Küçük Nogay, TDV nogaylar); 1502-1557 __BOSLUK__."),
 dict(dosya="yerlesimler_ek_bozkir.js", ad="Stavropol–Kuma bozkırı",
      v=[gevsek("1557-01-01", "1655-01-01", K["nogay1557"] + " ⚠️ Kuma, Küçük Nogay ile Kabartay arasında sınır bölgesi — güven düşük.")],
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1557-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1655-01-01", "1771-10-30", "kalmuk", kaynak=K["kalmuk1655"] + " ‖ " + K["kalmuk1771"]),
         P("1771-10-30", "1777-01-01", "__BOSLUK__", kaynak=K["kuma_bosluk"])] + rus("1777-01-01"),
      neden="Kırım gevşek 1502-1774 → 1557-1655; 1655-1771 Kalmuk/Nogay/Kabartay çekişmeli otlak kalmuk olarak; Rus başlangıcı 1783 → 1777 (Azak-Mozdok hattı, ESBE)."),
 dict(dosya="yerlesimler_ek4.js", ad="Zaporojye Seçi",
      v=[gevsek("1502-03-01", "1552-01-01", K["kirim_eski"] + " ⚠️ 1502-1552 bu turda sınanmadı."),
         P("1711-07-21", "1734-01-01", k="Zaporojye Seçi (Kırım hanının himayesinde)", kid="zaporojye", himaye=True, kaynak=K["sec1711"])],
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1552-01-01", "1711-07-21", "zaporojye", kaynak=K["sec_zap"]),
         P("1734-01-01", "1775-06-16", "zaporojye", kaynak=K["sec_zap"])] + rus("1775-06-16"),
      neden="1711-1734 Seç Kırım hanının himayesinde (Aleşki · Kamianka) — v: himaye, kid zaporojye (iç dolgu Seç'in kendi rengi, statu YOK ⇒ gevşek tonu değil). Künye 'Zaporojye Kazak Hetmanlığı' → 'Zaporojye Seçi'; Hetmanlık ayrı künye (kazak-hetmanligi)."),
 dict(dosya="yerlesimler.js", ad="Poltava",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1569-07-01", "litvanya-buyuk-dukalik"),
         P("1569-07-01", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="lehistan→1654 + rusya 1654→ yerine Kazak Hetmanlığı 1649-1764 (1654'ten Moskova'ya tâbi özerk — künye tabi)."),
 dict(dosya="yerlesimler_ok106.js", ad="Lubnı",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1569-07-01", "litvanya-buyuk-dukalik"),
         P("1569-07-01", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="Kazak Hetmanlığı 1649-1764 (IEU Lubny: 'In the Hetman state it was a regimental capital')."),
 dict(dosya="yerlesimler_ok106.js", ad="Kremençuk",
      s=[P("1571-01-01", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="Kazak Hetmanlığı 1649-1764."),
 dict(dosya="yerlesimler_h2_rusya.js", ad="Baturin",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1569-07-01", "litvanya-buyuk-dukalik"),
         P("1569-07-01", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="Kazak Hetmanlığı 1649-1764 (hetman başkenti 1669-1708 ve 1750-64, IEU). Eski 1654-01-08 (Pereyaslav, Jülyen) Poltava'nın 01-18'iyle çelişiyordu; artık künye tabi."),
 dict(dosya="yerlesimler_h2_rusya.js", ad="Hluhiv",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1503-04-02", "litvanya-buyuk-dukalik"),
         P("1503-04-02", "1547-01-16", "moskova"), P("1547-01-16", "1618-12-11", "rusya"),
         P("1618-12-11", "1649-08-18", "lehistan", kaynak=K["hluhiv"]), het()] + rus("1764-11-21"),
      neden="rusya 1547-1917 kesintisiz → Deulino 1618 Lehistan + Kazak Hetmanlığı 1649-1764."),
 dict(dosya="yerlesimler_ek17.js", ad="Çernigov",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1503-04-02", "litvanya-buyuk-dukalik"),
         P("1503-04-02", "1547-01-16", "moskova"), P("1547-01-16", "1618-12-11", "rusya"),
         P("1618-12-11", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="Kazak Hetmanlığı 1649-1764 (Zboriv: Çernigov voyvodalığı)."),
 dict(dosya="yerlesimler_ek17.js", ad="Novgorod-Seversk",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1503-04-02", "litvanya-buyuk-dukalik"),
         P("1503-04-02", "1547-01-16", "moskova"), P("1547-01-16", "1618-12-11", "rusya"),
         P("1618-12-11", "1649-08-18", "lehistan"), het()] + rus("1764-11-21"),
      neden="Kazak Hetmanlığı 1649-1764 (Zboriv: Çernigov voyvodalığı)."),
 dict(dosya="yerlesimler.js", ad="Kiev",
      s=[P("1281-01-01", "1362-01-01", "altinorda"), P("1362-01-01", "1569-07-01", "litvanya-buyuk-dukalik"),
         P("1569-07-01", "1649-08-18", "lehistan"),
         P("1649-08-18", "1667-02-09", "kazak-hetmanligi", kaynak=K["zborov"] + " ‖ " + K["kiev_het"])] + rus("1667-02-09"),
      neden="Kazak Hetmanlığı 1649-1667; 1667 sonrası Moskova voyvodası (değişmedi)."),
 dict(dosya="yerlesimler.js", ad="Çehrin (Çigirin)",
      s=[P("1281-01-01", "1569-07-01", "litvanya-buyuk-dukalik"), P("1569-07-01", "1649-08-18", "lehistan"),
         P("1649-08-18", "1678-08-21", "kazak-hetmanligi", kaynak=K["zborov"] + " ‖ " + K["cehrin"]),
         P("1699-01-26", "1793-01-23", "lehistan")] + rus("1793-01-23"),
      d=[P("1678-08-21", "1699-01-26", y="kusatma", kaynak=K["cehrin"] + " ⚠️ 1678 sonrası: EIU Osmanlı garnizonu bıraktı der, IEU 'kısa süre sonra terk' der — ÇELİŞKİ, bitiş değiştirilmedi.")],
      neden="Osmanlı başlangıcı 1678-07-19 → 1678-08-21 (TDV cehrin-seferi); 1649-1678 Kazak Hetmanlığı."),
]

# ── YENİ NOKTALAR ────────────────────────────────────────────────────────────
YENI = [
 dict(ad="Ust-Medveditskaya", tur="sehir", lat=49.65, lon=42.08, g=0, k=0, kur="1550-01-01",
      kaynak="ESBE 'Усть-Медведицкая': stanitsanın kuruluşu XVI. yüzyıl ortasına dayanır (yüzyıl ortası ⇒ 1550-01-01, gün/yıl yok). Koordinat: bugünkü Serafimoviç.",
      s=[P("1550-01-01", "1570-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1570-01-01", "1721-01-01", "don-kazak", kaynak=K["don_kazak"])] + rus("1721-01-01"),
      neden="Don dirseğinin kuzeyinde 128 km'lik boşluk (ONERI-BOZKIR-NOKTA-0034 hattı)."),
 dict(ad="Macar (Majar harabesi)", tur="bolge", lat=44.78, lon=44.16, g=0, k=0,
      kaynak="Tatarica (Tatar Ansiklopedisi, İzmaylov · Nedaşkovski) 'Маджар': Altın Orda şehri, 1310-1311'de sikke basıldı; 1395'te Timur yıktı. Nokta 1395 sonrasında Kuma bozkırını temsil eder (tur:bolge).",
      s=[P("1281-01-01", "1502-03-01", "altinorda"),
         P("1502-03-01", "1655-01-01", "__BOSLUK__", kaynak=K["bosluk1502"]),
         P("1655-01-01", "1771-10-30", "kalmuk", kaynak=K["kalmuk1655"] + " ‖ " + K["kalmuk1771"]),
         P("1771-10-30", "1777-01-01", "__BOSLUK__", kaynak=K["kuma_bosluk"])] + rus("1777-01-01"),
      neden="Kuma havzasında 123 km'lik boşluk; şehir 1395'te yıkıldı, nokta bozkır dolgusu olarak kalır."),
 dict(ad="Samara (Novoselitsa)", tur="sehir", lat=48.63, lon=35.25, g=0, k=0, kur="1550-01-01",
      kaynak="IEU 'Novomoskovsk': yerde XVI. yüzyılın ikinci yarısında bir Kazak yerleşimi kuruldu (yıl yok ⇒ 1550-01-01); Samara palankası (EIU 'Вольності'). 1784'te Novomoskovsk.",
      s=[P("1550-01-01", "1552-01-01", "__BOSLUK__", kaynak="BULUNAMADI — yüzyıl yarısı hassasiyeti; Seç kuruluşuna kadar sahip yok."),
         P("1552-01-01", "1711-07-21", "zaporojye", kaynak=K["sec_zap"]),
         P("1734-01-01", "1775-06-16", "zaporojye", kaynak=K["sec_zap"])] + rus("1775-06-16"),
      v=[P("1711-07-21", "1734-01-01", k="Zaporojye Seçi (Kırım hanının himayesinde)", kid="zaporojye", himaye=True, kaynak=K["sec1711"])],
      neden="Zaporojye topraklarında 103 km'lik boşluk; Edirne 1713 sınırının (Samara-Orel) güneyi."),
 dict(ad="Balta", tur="sehir", lat=47.94, lon=29.62, g=0, k=0, kur="1500-01-01",
      kaynak="IEU 'Balta': XVI. yüzyıldan beri var (yüzyıl ⇒ 1500-01-01); 1791'e kadar Türk idaresinde, Yaş (1792) ile Rusya'ya.",
      s=[P("1500-01-01", "1502-03-01", "altinorda")] + rus("1792-01-09"),
      v=[gevsek("1502-03-01", "1538-09-01", K["ochakiv"])],
      d=[P("1538-09-01", "1792-01-09", kaynak=K["yedisan_osm"] + " · IEU Balta")],
      neden="Yedisan kuzeyinde 86 km'lik boşluk; zincir Yedisan bozkırıyla aynı olaylar."),
 dict(ad="Kodak", tur="kale", lat=48.38, lon=35.13, g=0, k=0, kur="1635-01-01",
      kaynak="IEU 'Sulyma': Lehistan'ın 1635'te yaptırdığı Kodak kalesi, Ağustos 1635'te Sulima tarafından yıkıldı · EIU 'Вольності': sonra Zaporojye Kodak palankası. ⚠️ 1649 devri Zboriv günüyle hizalandı (Kodak için ayrı gün BULUNAMADI — güven düşük).",
      s=[P("1635-01-01", "1649-08-18", "lehistan"),
         P("1649-08-18", "1711-07-21", "zaporojye", kaynak=K["sec_zap"]),
         P("1734-01-01", "1775-06-16", "zaporojye", kaynak=K["sec_zap"])] + rus("1775-06-16"),
      v=[P("1711-07-21", "1734-01-01", k="Zaporojye Seçi (Kırım hanının himayesinde)", kid="zaporojye", himaye=True, kaynak=K["sec1711"])],
      neden="Dinyeper eşiklerinin kuzey girişi, 74 km'lik boşluk."),
 dict(ad="Aleşki (Oleşki Seçi)", tur="kale", lat=46.62, lon=32.72, g=0, k=0, kur="1711-07-21",
      kaynak="EIU 'Олешківська Січ' (Hurjiy) · IEU 'Oleshky Sich': Zaporojye Seçi 1711'den 1728'e burada, Kırım hanının toprağında (han tahkimata izin vermedi). ⚠️ Aleşki'nin Seç öncesi Tatar kasabası olarak varlığı BU TURDA SINANMADI — kur: yalnız Seç'i tarihliyor.",
      v=[P("1711-07-21", "1734-01-01", k="Zaporojye Seçi (Kırım hanının himayesinde)", kid="zaporojye", himaye=True, kaynak=K["sec1711"]),
         gevsek("1734-01-01", "1774-07-21", K["kirim_eski"] + " (Yediçkul bozkırı zinciri)")],
      s=[P("1774-07-21", "1783-04-19", "kirim")] + rus("1783-04-19"),
      neden="Kırım himayesindeki Seç'in yeri; Yediçkul batısında 59 km'lik boşluk."),
 dict(ad="Starobilsk (Bilska)", tur="sehir", lat=49.28, lon=38.91, g=0, k=0, kur="1686-01-01",
      kaynak="IEU 'Starobilsk': 1686'da Ostrogojsk alayı Kazaklarınca kuruldu; 1708 Bulavin isyanında yıkıldı (yeniden iskân yılı bu turda bulunamadı — nokta sürekli sayıldı).",
      s=rus("1686-01-01"), neden="Sloboda-Donets arasında 54 km'lik boşluk."),
 dict(ad="Tor (Slavyansk)", tur="kale", lat=48.85, lon=37.61, g=0, k=0, kur="1645-01-01",
      kaynak="IEU 'Sloviansk': 1645'te Kırım Tatar geçidinde geçici tahkimli karakol; 1663 kale; 1784 kasaba.",
      s=rus("1645-01-01"), neden="Donets batısında 40 km'lik boşluk; Tatar geçidi."),
 dict(ad="Soğucak (Sucuk Kale)", tur="kale", lat=44.72, lon=37.78, g=0, k=0, kur="1722-01-01",
      kaynak=K["soguc"],
      d=[P("1722-01-01", "1829-09-14", kaynak=K["soguc"])],
      s=rus("1829-09-14"),
      neden="Çerkes kıyısında Osmanlı kalesi (bugünkü Novorossiysk)."),
 dict(ad="Stavropol", tur="kale", lat=45.04, lon=41.97, g=0, k=0, kur="1777-01-01",
      kaynak=K["kuma1777"], s=rus("1777-01-01"), neden="Azak-Mozdok hattı kalesi."),
 dict(ad="Georgiyevsk", tur="kale", lat=44.15, lon=43.47, g=0, k=0, kur="1777-01-01",
      kaynak="ESBE 'Георгиевск': 1777'de Azak-Mozdok hattı kalesi olarak kuruldu · " + K["kuma1777"],
      s=rus("1777-01-01"), neden="Kuma-Terek arası 73 km'lik boşluk."),
 dict(ad="Mozdok", tur="kale", lat=43.75, lon=44.66, g=0, k=0, kur="1763-01-01",
      kaynak="TDV cerkezler: Mozdok kalesi 1763 · ÇELİŞKİ: ESBE 'Моздок' 1762 (Kurgoko Kançokin) — §4 gereği TDV esas.",
      s=rus("1763-01-01"), neden="Terek hattının ilk Rus kalesi; Kabartay topraklarında."),
]

# ── KÜNYE (data/devletler.js) ────────────────────────────────────────────────
KUNYE_KALMUK = '''{ id:"kalmuk", ad:"Volga (İdil) Kalmuk Hanlığı", tur:"hanlik", bolge:"sibirya-bozkir",
  f:"1632-01-01", t:"1771-10-30", baskent:"(göçebe ordugâh, sabit başkent yok)", harita:"kalmuk",
  kesinlik:{ f:"yil", t:"gun" },
  tabi:[{f:"1724-01-01", t:"1771-10-30", ust:"rusya"}],
  ozet:"Torgut beyi Horluk'un Oyrat uluslarını İdil (Volga) boylarına taşımasıyla kurulan Kalmuk hanlığı; otlakları Yayık'tan Don bozkırlarına ve Kuzey Kafkasya eteklerine uzandı, Kırım, Nogaylar ve Rusya ile savaştı, 1724'te Rusya'ya bağlandı, 1771'de ulusların büyük kısmı Cungarya'ya göç edince hanlık kaldırıldı. (kaynak: TDV, madde: kalmuklar) ⚠️ `cungar` (Cungarya'daki Oyrat hanlığı) AYRI bir devlettir.",
  kaynak:"kalmuklar",
  kronoloji:[
    { t:"1632-01-01", tur:"kurulus", b:"Horluk, 1618-1632 göçlerinin sonunda İdil Kalmukları Hanlığı'nı kurdu", kaynak:"TDV kalmuklar (yıl)" },
    { t:"1655-01-01", tur:"antlasma", b:"Moskova ile ilk şert (yemin) kaydı; batı otlakları Don bozkırlarına kadar tanındı", kaynak:"ESBE 'Калмыки' · Российская историческая энциклопедия 'Калмыцкое ханство' (yıl)" },
    { t:"1690-01-01", tur:"hukumdar", b:"Ayuka'ya Dalai Lama adına han unvanı verildi", kaynak:"Российская историческая энциклопедия 'Калмыцкое ханство' (yıl)" },
    { t:"1724-01-01", tur:"antlasma", b:"Ayuka'nın ölümünden sonra hanlık Rusya'ya bağlandı; hükümdar Rus hükümetince atanmaya başladı", kaynak:"TDV kalmuklar · RİE (yıl)" },
    { t:"1771-01-05", tur:"bolunme", b:"Ubaşi önderliğinde Volga'nın doğusundaki ulusların Cungarya'ya göçü başladı", kaynak:"ESBE 'Калмыки' (5 Ocak 1771, eski takvim — çevrilmedi) · ÇELİŞKİ: TDV kalmuklar '1770'" },
    { t:"1771-10-30", tur:"son", b:"II. Katerina'nın ukazıyla Kalmuk Hanlığı kaldırıldı", kaynak:"Российская историческая энциклопедия 'Калмыцкое ханство': 19(30).10.1771 (Gregoryen günü kaynağın kendisinde)" }
  ]
},'''

KUNYE_HETMAN = '''{ id:"kazak-hetmanligi", ad:"Kazak Hetmanlığı (Hetmanşçina)", tur:"devlet", bolge:"dogu-avrupa",
  f:"1648-01-01", t:"1764-11-21", baskent:"Çigirin → Hadyaç → Baturin → Hluhiv → Baturin", harita:"kazak-hetmanligi",
  kesinlik:{ f:"yil", t:"gun" },
  tabi:[{f:"1654-01-08", t:"1764-11-21", ust:"rusya"}],
  ozet:"Bohdan Hmelnitski ayaklanmasıyla (1648) doğan, Zboriv'de (1649) Kiev, Bratslav ve Çernigov voyvodalıklarında tanınan Kazak devleti; Pereyaslav'dan (1654) sonra Moskova'ya tâbi, Andrusovo'dan (1667) sonra Sol Yaka'ya çekilmiş özerk hetmanlık olarak sürdü ve II. Katerina döneminde kaldırıldı. ⚠️ Aşağı Zaporojye Ordusu (Seç) AYRI bir yapıdır: `zaporojye`. Sağ Yaka'da Doroşenko'nun Osmanlı tâbiliği (1669-1676) ve Yuri Hmelnitski'nin Osmanlı hetmanlığı (1677-1681) bu künyede AYRICA kodlanmadı.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok (TDV ukrayna: Haziran 1648 Hatman Devleti-Osmanlı ittifakı). Dayanak: Енциклопедія історії України (НАН) 'Гетьманщина', 'Військо Запорозьке', 'Зборівський договір' · Internet Encyclopedia of Ukraine 'Hetman State'",
  kronoloji:[
    { t:"1648-01-01", tur:"kurulus", b:"Bohdan Hmelnitski ayaklanması; Kazak hetmanlığı fiilen kuruldu", kaynak:"IEU 'Hetman State' (yıl)" },
    { t:"1649-08-18", tur:"antlasma", b:"Zboriv Antlaşması: Kiev, Bratslav ve Çernigov voyvodalıklarında Kazak özerkliği tanındı", kaynak:"EIU 'Зборівський договір'" },
    { t:"1654-01-08", tur:"antlasma", b:"Pereyaslav Radası: hetmanlık Moskova çarının himayesine girdi", kaynak:"EIU 18(8).01.1654 — atlasın mevcut maddesiyle aynı (eski takvim) günü" },
    { t:"1667-02-09", tur:"bolunme", b:"Andrusovo: Sol Yaka Moskova'ya, Sağ Yaka Lehistan'a bırakıldı", kaynak:"EIU 30(20).01.1667 · IEU 13.01.1667 — atlas günü 02-09 (mevcut madde), ÇELİŞKİ AÇIK" },
    { t:"1669-05-01", tur:"ittifak", b:"Sağ Yaka hetmanı Doroşenko'nun Osmanlı tâbiliği sultanca ilan edildi", kaynak:"IEU 'Doroshenko, Petro' · EIU 'Українсько-турецький договір 1669'" },
    { t:"1672-10-18", tur:"antlasma", b:"Bucaş Antlaşması: Doroşenko Ukraynası Osmanlı'ya tâbi özerk statü aldı", kaynak:"bucas-antlasmasi" },
    { t:"1678-08-21", tur:"toprak-kayip", b:"Hetmanlığın eski başkenti Çigirin (Çehrin) Osmanlı ordusunca alındı", kaynak:"cehrin-seferi" },
    { t:"1764-11-21", tur:"son", b:"II. Katerina'nın fermanıyla hetmanlık makamı kaldırıldı", kaynak:"EIU arama önizlemesi 10(21).11.1764 — madde AÇILMADI, DOĞRULANACAK · IEU: alay düzeni 1781-82'ye dek sürdü" }
  ]
},'''

ZAP_ESKI_BLOK_BAS = '{ id:"zaporojye", ad:"Zaporojye Kazak Hetmanlığı"'
ZAP_YENI = '''{ id:"zaporojye", ad:"Zaporojye Seçi (Aşağı Zaporojye Ordusu)", tur:"cumhuriyet", bolge:"dogu-avrupa",
  f:"1552-01-01", t:"1775-06-16", baskent:"Zaporojye Seçi (Hortitsa → Tomakivka → Bazavluk → Mikitin → Çortomlık → Kamianka → Aleşki → Kamianka → Nova Seç)", harita:"zaporojye",
  kesinlik:{ f:"yil", t:"gun" },
  tabi:[{f:"1686-05-06", t:"1709-05-25", ust:"rusya"}, {f:"1711-07-21", t:"1734-01-01", ust:"kirim"}, {f:"1734-01-01", t:"1775-06-16", ust:"rusya"}],
  ozet:"Dinyeper eşiklerinin aşağısında seçilmiş koşevoy atamanla yönetilen Kazak topluluğu (Aşağı Zaporojye Ordusu); 1649'a dek Lehistan'a nominal bağlı, 1667-1686 Moskova-Lehistan ortak, 1686'dan Moskova; Poltava'dan sonra Seç yıkıldı ve Kazaklar 1711-1734 Kırım hanının himayesinde Aleşki ve Kamianka'da yaşadı, 1734'te Rus tâbiliğine döndü, 1775'te II. Katerina Seç'i dağıttı. ⚠️ Kazak HETMANLIĞI (Çigirin/Baturin devleti) ayrı künyedir: `kazak-hetmanligi`.",
  kaynak:"bulunamadı — TDV'de müstakil maddesi yok. Dayanak: Енциклопедія історії України (НАН) 'Запорозька Січ' (Şçerbak), 'Олешківська Січ' (Hurjiy), 'Нова Січ' (Panaşenko) · Internet Encyclopedia of Ukraine 'Zaporozhian Sich', 'Zaporizhia, The'",
  kronoloji:[
    { t:"1552-01-01", tur:"kurulus", b:"Dmitro Vişneveçki Mala Hortitsa'da ilk Seç'i kurdu (yaklaşık)", kaynak:"IEU 'Zaporozhian Sich' (ca 1552)" },
    { t:"1621-09-02", tur:"ittifak", b:"Hotin Savaşı'nda Lehistan'ın yanında Osmanlı'ya karşı savaştı" },
    { t:"1686-05-06", tur:"antlasma", b:"Ebedî Barış: Seç yalnız Moskova'nın egemenliğine bırakıldı", kaynak:"EIU 'Вічний мир' 6.05.1686 · ÇELİŞKİ: IEU 16 Mayıs" },
    { t:"1709-05-25", tur:"isgal", b:"Rus ordusu Çortomlık Seçi'ni yıktı", kaynak:"IEU 'Chortomlyk Sich'" },
    { t:"1711-07-21", tur:"antlasma", b:"Prut Antlaşması'yla Rusya Zaporojye'den el çekti; Seç Aleşki'de Kırım hanının himayesine girdi", kaynak:"EIU 'Прутський трактат' · EIU 'Олешківська Січ' — gün atlasın Prut maddesinden" },
    { t:"1734-01-01", tur:"antlasma", b:"Kazaklar Kamianka'dan ayrılıp Nova Seç'i kurdu ve Rus tâbiliğine döndü (Mart 1734)", kaynak:"EIU 'Нова Січ' (ay; §4 gereği yıl yazıldı)" },
    { t:"1775-06-16", tur:"son", b:"II. Katerina'nın emriyle Tekeli Seç'i dağıttı", kaynak:"IEU 'New Sich' (yeni takvim) · manifesto 3 Ağustos 1775 (eski takvim)" }
  ]
},'''

RENK_SATIRLARI = '''    # BOZKIR-KAZAK (15 Eyl 2026, denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md) — iki yeni kimlik.
    # Aday: HSV ızgarası, bindirilmiş Lab'da komşulara en uzak (CIE76 ≥12, altlık ≥15).
    # kalmuk  komşu en dar: nogay 28,9 (dE94 17,1) · don-kazak 34,9 · rusya 32,5 · cungar 37,0 · altlık 36,4
    # kazak-hetmanligi komşu en dar: moskova 24,2 · kazak-hanligi 27,2 · lehistan 27,6 · zaporojye 30,4 · altlık 53,6
    #   ⚠️ teodoro (#a224d2) ile aynı aile ama TARİHÇE ÖRTÜŞMÜYOR (teodoro 1475'te bitiyor).
    "kalmuk":        ("Volga Kalmuk Hanlığı",      "#a4eb3b"),
    "kazak-hetmanligi": ("Kazak Hetmanlığı",       "#c73beb"),
'''

OLAYLAR = '''// =====================================================================
// BOZKIR-KAZAK (15 Eylül 2026) — yamanın açtığı kırılmaların maddeleri
// Rapor: denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md · Emre kararı 15 Eyl 2026
// AD ALANI (§7): data/olaylar_bozkir_kazak.js → window.OLAYLAR_BOZKIR_KAZAK
// 🔴 index.html satırı ayrıca eklenmeli (D099).
// =====================================================================

window.OLAYLAR_BOZKIR_KAZAK = [

{ t:"1557-01-01", kesinlik:"yil", k:"diger", kapsam:"dis", etiket:["toprak-kazanc"],
  b:"Küçük Nogay Ordası'nın Kırım himayesinde Kuban bozkırına yerleşmesi",
  gun:"964-965 (1557-1558)", yer:"Kuban ve Kuma bozkırları, Kabarda ile Azak denizi arası", yer_id:"Kuban Nogay bozkırı",
  kisiler:"Kazi (Kadı) Mirza",
  d:"Nogay uruklarının bir bölümü İsmâil Mirza'nın yanından ayrılarak Kazi Mirza'nın idaresinde İdil nehrini geçti. Kırım hanının himayesini görerek Kabarda bölgesi ile Azak denizi arasındaki topraklara yerleştirildiler ve Küçük Nogay Ordası adıyla anıldılar. Kuban bozkırının Kırım Hanlığı'na gevşek bağlılığı bu yerleşimle başlar.",
  kaynak:"nogaylar" },

{ t:"1632-01-01", kesinlik:"yil", k:"kurulus", kapsam:"dis", etiket:["siyaset"],
  b:"İdil (Volga) Kalmuk Hanlığı'nın kuruluşu",
  gun:"1632", yer:"Aşağı İdil bozkırları", yer_id:"Kalmuk bozkırı", kisiler:"Horluk",
  d:"Torgut beyi Horluk, 1618'den itibaren dalgalar hâlinde süren göçlerle ulusunu Cungarya'dan batıya, İdil boylarına taşıdı ve orada İdil Kalmukları Hanlığı'nı kurdu. Kalmukların baskısı Nogayların bir kısmını Osmanlı-Kırım koruması altındaki bölgelere kaçırdı, bir kısmını da Kalmuk idaresine soktu.",
  kaynak:"kalmuklar" },

{ t:"1649-08-18", k:"antlasma", kapsam:"dis", etiket:["antlasma","toprak-kazanc"],
  b:"Zboriv Antlaşması — Kazak Hetmanlığı'nın tanınması",
  gun:"18 Ağustos 1649", yer:"Zboriv; Kiev, Bratslav ve Çernigov voyvodalıkları", yer_id:"Çehrin (Çigirin)", kisiler:"Bohdan Hmelnitski, II. Jan Kazimierz",
  d:"1648'de başlayan Hmelnitski ayaklanmasının ardından Lehistan kralı Zboriv'de Kazak hetmanıyla antlaşma yaptı. Kiev, Bratslav ve Çernigov voyvodalıklarında Kazak özerkliği tanındı ve Çigirin merkezli Kazak Hetmanlığı fiilen bir devlet olarak ortaya çıktı.",
  ic_not_d:"Kaynak: Енциклопедія історії України (НАН), 'Зборівський договір'; sejm onayı 7 Ocak 1650. TDV'de müstakil madde yok (TDV ukrayna Haziran 1648 Hatman Devleti-Osmanlı ittifakını anar).",
  kaynak:"Енциклопедія історії України (НАН), 'Зборівський договір' · Internet Encyclopedia of Ukraine, 'Hetman State'" },

{ t:"1655-01-01", kesinlik:"yil", k:"diplomasi", kapsam:"dis", etiket:["diplomasi"],
  b:"Kalmukların Moskova'ya ilk şert yemini — batı otlakları Don bozkırlarına dek",
  gun:"1655", yer:"İdil ile Don arası bozkır", yer_id:"Don bozkırı (Sal)", kisiler:"Dayçin",
  d:"Kalmuk tayşileri Moskova ile ilk yazılı şert (bağlılık yemini) kaydını verdi. Bu ve takip eden 1657 ve 1661 şertleri, Kalmuk otlaklarının batıda Don bozkırlarına, güneyde Kuzey Kafkasya eteklerine uzandığını gösterir. Bu bölgedeki Nogay ulusları Kalmuk baskısıyla ya Kırım tarafına çekildi ya da Kalmuk idaresine girdi.",
  kaynak:"Российская историческая энциклопедия, 'Калмыцкое ханство' · Brockhaus-Efron, 'Калмыки' · TDV nogaylar" },

{ t:"1711-07-21", k:"diger", kapsam:"dis", etiket:["diplomasi"],
  b:"Zaporojye Seçi'nin Kırım hanının himayesine girmesi (Aleşki)",
  gun:"1711 (Prut Antlaşması'nın ardından)", yer:"Aleşki, Dinyeper'in sol yakası", yer_id:"Aleşki (Oleşki Seçi)",
  d:"Poltava'dan sonra Rus ordusunca yıkılan Zaporojye Seçi'nin Kazakları, Prut Antlaşması'nda Rusya'nın Zaporojye'den el çekmesinin ardından Kırım hanının toprağındaki Aleşki'ye yerleşti. Han burada tahkimat yapılmasına izin vermedi; Kazaklar hana vergi ödedi ve Or Kapı hattında hizmet gördü. 1713 Edirne Antlaşması sınırı Samara ile Orel arasına çekti.",
  ic_not_gun:"Seç'in Aleşki'ye geçiş günü bulunamadı; gün, EIU'nun sebep gösterdiği Prut Antlaşması'nın atlastaki günüdür (§4 komşu olay şartı: aynı süreç).",
  kaynak:"Енциклопедія історії України (НАН), 'Олешківська Січ', 'Прутський трактат', 'Адріанопольський договір'" },

{ t:"1723-01-01", kesinlik:"yil", k:"diger", kapsam:"dis", etiket:["toprak-kazanc"],
  b:"Yedisan Nogaylarının Dinyester ile Bug arasına yerleşmesi",
  gun:"1723", yer:"Yedisan (Dinyester-Bug arası), Özi eyaleti", yer_id:"Yedisan bozkırı",
  d:"Kalmuk baskısıyla Kuban havzasından ayrılan Yedisan ordası, Osmanlı ve Kırım üstünlüğünü tanıyarak Dinyester ile Dinyeper arasındaki bozkıra yerleşti. Toprak idarî olarak Osmanlı'nın Özi eyaletine bağlı kalırken ordalar, Kırım hanının atadığı Yedisan seraskerine bağlandı.",
  ic_not_gun:"ÇELİŞKİ: EIU 'Єдисанська орда' (Panashenko) 1723; EIU 'Очаківська земля' 1720-30'lar; TDV kirim '18. yüzyıl başı'.",
  kaynak:"Енциклопедія історії України (НАН), 'Єдисанська орда' · TDV nogaylar · TDV giray" },

{ t:"1734-01-01", kesinlik:"yil", k:"diger", kapsam:"dis", etiket:["diplomasi"],
  b:"Zaporojye Kazaklarının Rus tâbiliğine dönmesi — Nova Seç",
  gun:"Mart 1734", yer:"Pidpilna nehri, Nova Seç", yer_id:"Zaporojye Seçi",
  d:"1733 tarihli çar beratının ardından Zaporojye Kazakları Kırım hanına bağlı oldukları Kamianka'yı Mart 1734'te terk ederek eski Çortomlık Seçi'nin yakınında Nova Seç'i kurdu. Seç, Kiev genel valisine bağlanarak Rus tâbiliğine döndü ve 1775'teki kaldırılışına kadar burada kaldı.",
  kaynak:"Енциклопедія історії України (НАН), 'Нова Січ' · Internet Encyclopedia of Ukraine, 'New Sich'" },

{ t:"1764-11-21", k:"idari", kapsam:"dis", etiket:["siyaset"],
  b:"Kazak Hetmanlığı'nın kaldırılması",
  gun:"10 (21) Kasım 1764", yer:"Sol Yaka Ukrayna, Hluhiv", yer_id:"Hluhiv", kisiler:"II. Katerina, Kirill Razumovski",
  d:"II. Katerina'nın fermanıyla son hetman Kirill Razumovski'nin makamı kaldırıldı ve Sol Yaka Ukrayna'nın idaresi İkinci Küçük Rusya Kolejyumu'na verildi. Alay düzeni 1780'lerin başına kadar sürdüyse de Kazak Hetmanlığı bir siyasî yapı olarak sona erdi.",
  ic_not_gun:"🔴 DOĞRULANACAK: gün yalnız EIU arama önizlemesinden; 'Друга Малоросійська колегія' maddesi açılmadı.",
  kaynak:"Енциклопедія історії України (НАН), 'Друга Малоросійська колегія' (önizleme) · Internet Encyclopedia of Ukraine, 'Hetman State'" },

{ t:"1770-01-01", kesinlik:"yil", k:"diger", kapsam:"dis", etiket:["toprak-kaybi"],
  b:"Yedisan ve Bucak Nogaylarının Rus himayesini tanıması",
  gun:"1770", yer:"Yedisan bozkırı", yer_id:"Yedisan bozkırı",
  d:"1768-1774 Osmanlı-Rus Savaşı sırasında Yedisan ordası Kırım hanından ayrılarak Rus himayesini tanıdı ve Dinyeper'in doğusuna, Azak ve Kuban yönüne nakledildi. Dinyester ile Bug arasındaki bozkır Nogay ordasından boşaldı; toprak savaşın sonuna kadar Osmanlı'nın Özi eyaletinde kaldı.",
  kaynak:"Енциклопедія історії України (НАН), 'Єдисанська орда'" },

{ t:"1771-10-30", k:"idari", kapsam:"dis", etiket:["siyaset"],
  b:"Volga Kalmuk Hanlığı'nın kaldırılması",
  gun:"19 (30) Ekim 1771", yer:"Aşağı İdil bozkırları", yer_id:"Kalmuk bozkırı", kisiler:"II. Katerina, Ubaşi",
  d:"Ubaşi'nin önderliğinde İdil'in doğusundaki Kalmuk uluslarının büyük kısmı Ocak 1771'de Cungarya'ya göç etti. Geride kalan ulusların üzerindeki hanlık, II. Katerina'nın ukazıyla kaldırıldı ve Kalmuklar Astarhan guberniyası idaresine bağlandı.",
  ic_not_gun:"ÇELİŞKİ: TDV kalmuklar göçü '1770' der; ESBE 5 Ocak 1771, RİE Ocak 1771.",
  kaynak:"Российская историческая энциклопедия, 'Калмыцкое ханство' · Brockhaus-Efron, 'Калмыки' · TDV kalmuklar" },

{ t:"1777-01-01", kesinlik:"yil", k:"kurulus", kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  b:"Azak–Mozdok savunma hattının kurulması — Stavropol",
  gun:"1777", yer:"Kuma ve Kuban arası, Kuzey Kafkasya", yer_id:"Stavropol", kisiler:"",
  d:"Rusya, 1775'te planladığı Azak-Mozdok hattını 1777'de Stavropol dahil on kale ile kurdu. Kalmukların göçünden sonra kaynaklarda sahibi belirsiz kalan Kuma bozkırı böylece Rus askerî hattının içine alındı.",
  kaynak:"Brockhaus-Efron, 'Ставропольская губерния'" },

{ t:"1722-01-01", kesinlik:"yil", k:"idari", kapsam:"ic", etiket:["konu-askeri"],
  b:"Soğucak (Sucuk Kale) kalesinin inşası",
  gun:"1722", yer:"Soğucak, Çerkes kıyısı", yer_id:"Soğucak (Sucuk Kale)",
  d:"Osmanlılar, Karadeniz'in doğu kıyısında Çerkes boylarının yaşadığı sahilde Soğucak'ta bir kale inşa etti. Kale, Anapa ile birlikte kıyıdaki Osmanlı hâkimiyetinin dayanaklarından biri oldu ve 1829 Edirne Antlaşması'na kadar Osmanlı elinde kaldı.",
  ic_not_d:"TDV'de müstakil madde yok (sogucak · sucuk-kale 302). Fedakâr (Vakanüvis Kafkasya özel sayısı) 1724-27 belgelerinde Soğucak kalesini anar; kuruluş yılı ESBE'den.",
  kaynak:"Brockhaus-Efron, 'Новороссийск' · TDV anapa" }

];
'''

# ── AYRIŞTIRICI ──────────────────────────────────────────────────────────────
def js_blok(metin, bas):
    """metin[bas] == '{' → eşleşen '}' indeksi (dize ve yorum bilinçli)."""
    assert metin[bas] == "{", metin[bas:bas + 20]
    i, der, n = bas, 0, len(metin)
    while i < n:
        c = metin[i]
        if c in "\"'`":
            q = c; i += 1
            while metin[i] != q:
                if metin[i] == "\\":
                    i += 1
                i += 1
        elif c == "/" and metin[i + 1] == "/":
            i = metin.index("\n", i)
        elif c == "/" and metin[i + 1] == "*":
            i = metin.index("*/", i) + 1
        elif c in "{[":
            der += 1
        elif c in "}]":
            der -= 1
            if der == 0:
                return i
        i += 1
    raise ValueError("kapanış bulunamadı")


def ust_anahtarlar(blok):
    """blok = '{...}' → {anahtar: (deger_bas, deger_son_dahil)} yalnız derinlik-1."""
    out, i, der, n = {}, 0, 0, len(blok)
    while i < n:
        c = blok[i]
        if c in "\"'`":
            q = c; i += 1
            while blok[i] != q:
                if blok[i] == "\\":
                    i += 1
                i += 1
            i += 1
            continue
        if c == "/" and blok[i + 1] == "/":
            i = blok.index("\n", i) + 1
            continue
        if c in "{[":
            der += 1
        elif c in "}]":
            der -= 1
        elif der == 1:
            m = re.match(r"([A-Za-z_]\w*)\s*:\s*", blok[i:])
            if m and (i == 0 or not (blok[i - 1].isalnum() or blok[i - 1] == "_")):
                vb = i + m.end()
                v0 = blok[vb]
                if v0 in "[{":
                    son = js_blok(blok.replace("[", "{", 1) if False else blok, vb) if v0 == "{" else _dizi_son(blok, vb)
                elif v0 in "\"'":
                    j = vb + 1
                    while blok[j] != v0:
                        if blok[j] == "\\":
                            j += 1
                        j += 1
                    son = j
                else:
                    son = vb + re.match(r"[^,}\n]*", blok[vb:]).end() - 1
                out[m.group(1)] = (vb, son)
                i = son + 1
                continue
        i += 1
    return out


def _dizi_son(metin, bas):
    assert metin[bas] == "["
    i, der = bas, 0
    while True:
        c = metin[i]
        if c in "\"'`":
            q = c; i += 1
            while metin[i] != q:
                if metin[i] == "\\":
                    i += 1
                i += 1
        elif c == "/" and metin[i + 1] == "/":
            i = metin.index("\n", i)
        elif c in "[{":
            der += 1
        elif c in "]}":
            der -= 1
            if der == 0:
                return i
        i += 1


def js_deger(x):
    if isinstance(x, dict):
        return "{" + ",".join(f"{k}:{js_deger(v)}" for k, v in x.items()) + "}"
    if isinstance(x, list):
        return "[" + ",".join(js_deger(v) for v in x) + "]"
    if isinstance(x, bool):
        return "true" if x else "false"
    return json.dumps(x, ensure_ascii=False)


def kayit_yamala(metin, y):
    desen = re.compile(r'\{\s*ad\s*:\s*"' + re.escape(y["ad"]) + r'"')
    bul = list(desen.finditer(metin))
    assert len(bul) == 1, f'{y["ad"]}: kayıt {len(bul)} kez bulundu (1 olmalı)'
    bas = bul[0].start()
    son = js_blok(metin, bas)
    blok = metin[bas:son + 1]
    anah = ust_anahtarlar(blok)
    degis = []   # (bas, son_dahil, yeni) — blok içi indeks
    for alan in ("s", "d", "v"):
        if alan not in y:
            continue
        yeni = js_deger(y[alan])
        if alan in anah:
            degis.append((anah[alan][0], anah[alan][1], yeni))
        else:
            ek = bul[0].end() - bas   # ad:"..." sonrası
            degis.append((ek, ek - 1, f", {alan}:{yeni}"))
    nd = f"{ETIKET}: {y['neden']}"
    if "neden" in anah:
        a, b = anah["neden"]
        eski = json.loads(blok[a:b + 1]) if blok[a] == '"' else blok[a + 1:b]
        degis.append((a, b, json.dumps(nd + " ‖ ÖNCEKİ: " + eski, ensure_ascii=False)))
    else:
        ek = bul[0].end() - bas
        degis.append((ek, ek - 1, f", neden:{json.dumps(nd, ensure_ascii=False)}"))
    for a, b, yeni in sorted(degis, key=lambda t: t[0], reverse=True):
        blok = blok[:a] + yeni + blok[b + 1:]
    return metin[:bas] + blok + metin[son + 1:]


def yeni_nokta_js(y):
    sira = ["ad", "tur", "lat", "lon", "g", "k", "kur", "d", "v", "s", "kaynak", "neden"]
    parca = []
    for a in sira:
        if a in y:
            v = y[a]
            if a == "neden":
                v = f"{ETIKET}: {v}"
            parca.append(f"{a}:{js_deger(v)}")
    for a in ("d", "v"):
        if a not in y:
            parca.insert(6, f"{a}:[]")
    return "{ " + ", ".join(parca) + " },"


def yerlesim_dosyasi():
    govde = "\n".join(yeni_nokta_js(y) for y in YENI)
    return ("// =====================================================================\n"
            "// BOZKIR-KAZAK (15 Eylül 2026) — Kuzey Karadeniz bozkırı, Don, Kuma, Zaporojye noktaları\n"
            "// Rapor: denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md §④ · Emre kararı 15 Eyl 2026\n"
            "// AD ALANI (§7): window.YERLESIMLER_BOZKIR_KAZAK · arac/girdi.py GIRDI_DOSYALARI'na eklenir\n"
            "// Sınama: normalleştirilmiş ad + 3 km (ölçüldü, çakışma 0) · kara maskesi denetle.py konum\n"
            "// =====================================================================\n\n"
            "window.YERLESIMLER_BOZKIR_KAZAK = [\n" + govde + "\n];\n")


def tek_degistir(metin, eski, yeni, ne):
    n = metin.count(eski)
    assert n == 1, f"{ne}: '{eski[:60]}' {n} kez (1 olmalı)"
    return metin.replace(eski, yeni)


def uygula(kok, kuru=False):
    D = os.path.join(kok, "data")
    oku = lambda p: io.open(p, encoding="utf-8", newline="").read()
    yaz = (lambda p, t: None) if kuru else (lambda p, t: io.open(p, "w", encoding="utf-8", newline="").write(t))
    # 1) kayıt yamaları
    dosyalar = {}
    for y in KAYITLAR:
        dosyalar.setdefault(y["dosya"], []).append(y)
    for ad, ys in dosyalar.items():
        yol = os.path.join(D, ad)
        t = oku(yol)
        for y in ys:
            t = kayit_yamala(t, y)
            print(f"  kayıt  {ad:28s} {y['ad']}")
        yaz(yol, t)
    # 2) yeni nokta dosyası + girdi.py
    yaz(os.path.join(D, "yerlesimler_bozkir_kazak.js"), yerlesim_dosyasi())
    print(f"  yeni   yerlesimler_bozkir_kazak.js  {len(YENI)} nokta")
    gp = os.path.join(kok, "arac", "girdi.py")
    g = oku(gp)
    if '"yerlesimler_bozkir_kazak.js"' not in g:
        g = tek_degistir(g, '    "yerlesimler_ek_bozkir.js",',
                         '    "yerlesimler_ek_bozkir.js",\n    "yerlesimler_bozkir_kazak.js",   # BOZKIR-KAZAK 15 Eyl 2026 — Don/Kuma/Zaporojye',
                         "girdi.py")
        yaz(gp, g)
    # 3) olaylar
    yaz(os.path.join(D, "olaylar_bozkir_kazak.js"), OLAYLAR)
    print("  yeni   olaylar_bozkir_kazak.js")
    e5 = os.path.join(D, "olaylar_ek5.js")
    t = oku(e5)
    t = tek_degistir(t, '{ t:"1678-07-19", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Çehrin Kalesi\'nin fethi", gun:"19 Temmuz 1678",',
                     '{ t:"1678-08-21", k:"fetih", etiket:["toprak-kazanc","savas","konu-askeri"], b:"Çehrin Kalesi\'nin fethi", gun:"21 Ağustos 1678", ic_not_gun:"BOZKIR-KAZAK 15 Eyl 2026: eski 19 Temmuz 1678 Kara Mustafa\'nın Çehrin önüne varış günüydü (EIU); TDV cehrin-seferi: kuşatma 21 Temmuz başladı, kale 21 Ağustos 1678 alındı.",',
                     "olaylar_ek5 Çehrin")
    yaz(e5, t)
    print("  madde  olaylar_ek5.js Çehrin 1678-07-19 → 1678-08-21")
    # 4) künyeler
    dp = os.path.join(D, "devletler.js")
    t = oku(dp)
    b = t.index(ZAP_ESKI_BLOK_BAS)
    assert t.count(ZAP_ESKI_BLOK_BAS) == 1
    s = js_blok(t, b)
    t = t[:b] + ZAP_YENI[:-1] + t[s + 1:]
    t = tek_degistir(t, 'tabi:[{f:"1671-01-01", t:"1721-01-01", ust:"rusya"}],',
                     'tabi:[{f:"1671-08-28", t:"1721-01-01", ust:"rusya"}],', "don-kazak tabi")
    t = tek_degistir(t, '{ t:"1671-01-01", tur:"antlasma", b:"Razin ayaklanmasının bastırılmasından sonra orda çara biat etti" }',
                     '{ t:"1671-08-28", tur:"antlasma", b:"Razin ayaklanmasının bastırılmasından sonra orda çara biat etti; dış ilişki yasaklandı", kaynak:"Большая российская энциклопедия (arama özeti) 28.08.1671 · Abaza, Казаки 29.08.1671 — eski takvim, çevrilmedi; 1 gün ÇELİŞKİ" }',
                     "don-kazak kronoloji")
    b = t.index('{ id:"don-kazak"')
    s = js_blok(t, b)
    t = t[:s + 1] + ",\n" + KUNYE_KALMUK[:-1] + ",\n" + KUNYE_HETMAN[:-1] + t[s + 1:]
    yaz(dp, t)
    print("  künye  zaporojye (ad/tabi/kronoloji) · don-kazak tabi · +kalmuk · +kazak-hetmanligi")
    # 5) renk
    rp = os.path.join(kok, "arac", "renkler.py")
    r = oku(rp)
    satir = '    "don-kazak":     ("Don Kazak Ordası",          "#4ac4aa"),\n'
    r = tek_degistir(r, satir, satir + RENK_SATIRLARI, "renkler don-kazak")
    yaz(rp, r)
    print("  renk   kalmuk #a4eb3b · kazak-hetmanligi #c73beb")
    # 6) index.html
    ip = os.path.join(kok, "index.html")
    h = oku(ip)
    m = re.search(r'<script src="data/olaylar_p0051\.js\?v=(r\d+)"></script>', h)
    v = m.group(1)
    if "olaylar_bozkir_kazak.js" not in h:
        h = h.replace(m.group(0), m.group(0) + f'\n<script src="data/olaylar_bozkir_kazak.js?v={v}"></script>', 1)
    m2 = re.search(r'<script src="data/yerlesimler_anadolu_0914\.js\?v=r\d+"></script>', h)
    if "yerlesimler_bozkir_kazak.js" not in h:
        h = h.replace(m2.group(0), m2.group(0) + f'\n<script src="data/yerlesimler_bozkir_kazak.js?v={v}"></script>', 1)
    yaz(ip, h)
    print("  index  iki script satırı")


if __name__ == "__main__":
    a = sys.argv[1:]
    if a and a[0] == "--json":
        io.open(a[1], "w", encoding="utf-8").write(json.dumps(
            {"oturum": "BOZKIR-KAZAK", "tarih": "2026-09-15", "uyari": "YAMA ÖNERİSİ — UYGULANMADI",
             "rapor": "denetim/ARASTIRMA-BOZKIR-KAZAK-0915.md", "kayitlar": KAYITLAR, "yeni_noktalar": YENI,
             "renk": {"kalmuk": "#a4eb3b", "kazak-hetmanligi": "#c73beb"},
             "madde_duzeltme": {"dosya": "data/olaylar_ek5.js", "b": "Çehrin Kalesi'nin fethi", "eski_t": "1678-07-19", "yeni_t": "1678-08-21"}},
            ensure_ascii=False, indent=1))
        print("json yazıldı")
    else:
        kok = a[0]
        kuru = "--kuru" in a
        assert os.path.isdir(os.path.join(kok, "data")), kok
        uygula(kok, kuru)
