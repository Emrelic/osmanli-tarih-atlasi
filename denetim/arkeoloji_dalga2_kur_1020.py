"""2. dalga araştırma JSON'larını (denetim/arastirma/2-*.json) kürasyondan geçirir → denetim/arastirma/d2-*.json.
Kürasyon KURALLARI (VERI-MO-ARKEO, 20 Ekim 2026): dayanağı kişisel iletişim / haber ajansı / kitap incelemesi / ham-belirsiz BP / özet-only olanlar ve
önceki dalgayla MÜKERRER olanlar elenir; kalanlara okunur başlık yazılır. Elenenlerin gerekçesi aşağıda (HARIC)."""
import json, os, sys

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "arastirma")

# dosya -> { id: (kur_baslik, bit_baslik, bit_birak) }   bit_birak=True: bit bloğu olay üretmez
KEEP = {
 "anadolu-ege": {
  "akrotiri-thera-patlamasi": (None, "Thera (Santorini) volkanik patlaması", False),
  "gordion-tumulus-mm": ("Midas Tümülüsü (MM): mezar odası ağaçlarının kesim yılı (dendrokronoloji)", None, False),
  "pinarbasi-konya": ("Neolitik iskân başlar (ilk kanıtlı evre)", "iskân sona erer", False),
  "boncuklu-konya": ("Neolitik iskân başlar (erken evre)", "iskân sona erer (geç evre)", False),
  "sardes-pers-fethi": (None, "Pers kralı Kyros Sardes'i alır (Lidya'nın sonu)", False),
 },
 "italya-avrupa": {
  "xaghra-brochtorff-circle": ("kayaya oyulmuş mezarda gömüler başlar", "son gömüler", False),
  "los-millares": ("yerleşim ve kaleler başlar", "yerleşim sona erer", False),
  "el-argar": ("kültür başlar (yaklaşık)", "kültür sona erer (yaklaşık)", False),
  "szederkeny-kukorica-dulo": ("Neolitik yerleşim başlar", "Neolitik yerleşim sona erer", False),
  "lbk-formatif-transdanubia": ("Transdanubia'da Formatif LBK ortaya çıkar", None, False),
  "erken-trypillia": ("Erken Trypillia genişlemesi (A1-2) başlar", None, True),
 },
 "hint-guneydogu": {
  "ban-chiang": ("ilk tarihli gömü (kemik kolajeni, kısa kronoloji)", None, True),
  "khok-phanom-di": ("Neolitik iskân başlar", "iskân sona erer", False),
  "ban-non-wat": ("Neolitik 1 evresi: pirinç çiftçileri yerleşir", None, True),
  "non-nok-tha": ("Tunç Çağı evresi (kısa kronoloji)", None, False),
  "man-bac": ("tarım dönemi iskânı", None, False),
  "sanganakallu-kupgal": ("tepe köyü genişlemesi (Geç Neolitik–Megalitik geçiş)", "terk edilir (yaklaşık)", False),
  "guney-hint-neolitigi": ("Güney Hint: Kodekal'da en eski iskân tabakası (kömür)", None, False),
  "anuradhapura-brahmi": ("Brahmi yazılı çanak çömleğin en erken tarihleri", None, False),
 },
 "cin-dogu-asya": {
  "erlitou-2-liton-arkeolojik": ("Erlitou kültürü I. faz başlar", "IV. faz sona erer", False),
  "xia-yazili-gelenek-2070-1600": ("Xia hanedanı başlar (yazılı gelenek, Dönemlendirme Projesi)", "Xia sona erer, Shang başlar (yazılı gelenek)", False),
  "taosi": ("yerleşim başlar", "yerleşim sona erer", False),
  "shimao": ("kent kurulur", "terk edilir", False),
  "sanxingdui-medeniyet": ("Sanxingdui uygarlığı oluşur (çapraz tarihleme)", "Sanxingdui uygarlığı sona erer", False),
  "sanxingdui-kurban-cukurlari": ("kurban çukurları (K3/K4/K6/K8) gömülür (AMS)", None, False),
  "dadiwan": ("Faz I başlar", "Faz V (Changshan) sona erer", False),
  "odai-yamamoto-1": ("en eski çanak çömlek (Jomon öncesi/erken) icadı", None, False),
  "jomon-sosoki-baslangic": ("Sōsōki (Jomon başlangıç evresi) başlar", "Sōsōki sona erer", False),
  "xiongnu-imparatorlugu": ("Xiongnu İmparatorluğu kurulur (Han kaynakları)", None, True),
  "dogu-zhou-770": ("Doğu Zhou: Ping Wang Luoyi'ye taşınır (gelenek 770)", None, False),
  "qin-birlesme-221": ("Qin altı devleti birleştirir (gelenek 221)", None, False),
 },
 "iran-orta-asya": {
  "susa": ("kent kurulur (yaklaşık, Iranica)", None, False),
  "proto-elam-yazi": ("Proto-Elam yazısı ortaya çıkar", None, True),
  "elam": ("Awan hanedanı (ilk Elam hanedanı) başlar", "Yeni Elam dönemi sona erer", False),
  "tepe-hissar": ("IC/IIA evresi (en eski 14C'li evre) başlar", "IIIC evresi sona erer", False),
  "tepe-yahya": ("Dönem VII başlar (Iranica; geçici tablo)", "Dönem I (son iskân evresi) sona erer", False),
  "jeitun": ("Jeitun yerleşimi başlar (Bayes)", "Jeitun yerleşimi sona erer (Bayes)", False),
  "anau-ia-meana": ("Anau Ia evresi (en alt tabakalar)", None, True),
  "gadachrili-gora": ("Şulaveri-Şomu: höyüğün ilk katmanları", None, False),
  "med-devleti": ("Med devleti: Deioces dönemi başlar (Herodotos geleneği)", None, True),
  "ahamenis-devleti": ("Kyros II Pers tahtına çıkar (559)", "Ahameniş Devleti sona erer (III. Dareios, 330)", False),
 },
 "afrika-amerika": {
  "gobero-nijer": ("Erken Holosen (Kiffian) iskânı başlar", "en genç Tenerean mezarı", False),
  "ramses-ii-tahta-cikisi": ("II. Ramses tahta çıkar (radyokarbon+saltanat modeli)", None, False),
  "amarna-donemi-radyokarbon": ("IV. Amenhotep (Akhenaten) tahta çıkar", "Horemheb tahta çıkar", False),
  "kerma-ancien": ("Eski Kerma başlar", "Eski Kerma sona erer", False),
  "lothagam-north-turkana": ("anıtsal mezarlık platformu kullanımı başlar", "platform kullanımı sona erer", False),
  "ceibal-guatemala": ("Real 1 evresi: ilk yerleşik topluluk", None, True),
  "tilcajete-meydan-yakilmasi": ("meydan yakılır (Monte Albán saldırısı)", None, False),
  "san-jose-mogote-tapinak-yangin": ("Yapı 28 tapınağı yanar", None, False),
  "kotosh-dini-gelenegi": ("Kotosh Dini Geleneği başlar", "Kotosh Dini Geleneği sona erer", False),
  "los-morteros-adobe": ("Amerika'nın en eski kerpiç anıtsal mimarisi", None, True),
  "tehuacan-san-marcos-misir": ("en eski mısır (San Marcos, Tehuacán)", None, False),
 },
}
# Elenenler (gerekçe): hattusa-cokus (kuraklık penceresi ≠ çöküş) · zincirli (yalnız sayfa özeti) · pylos (arkeolojik bağlamdan konvansiyonel tarih) ·
# kosenivka (iki ikinci-el Bayes modeli çelişir) · latium-vetus / roma-forum (periyodizasyon, başlangıç yok) · veii (yuvarlak ifade) · villanova, pithekoussai (kitap incelemesi) ·
# syrakusai (geleneksel tarih) · heuneburg (mezar kesim yılı) · hallstatt-c (ikinci el) · fidene (tipolojik seçim) · dholavira (BP: kalibre mi ham mı belirsiz) ·
# harappa-mezarlik-r37 (kişisel iletişim) · mehrgarh-donem-I (pilotta çift teyit notu) · zhengzhou, xinzhai, longshan-sonu, mumun (haber/konferans/etiket/Korece kaynak yok) ·
# yayoi-baslangic (cin.json kuzey-kyushu-pirinc ile aynı Crema 2022) · yeni-krallik / orta-krallik / naqada (mısır JSON'unda zaten) · hiksoslar (kronoloji karışık) ·
# merimde (veri tabanı), tichitt, nok (sayı yok), ounjougou (proje sayfası), cuello (çelişkili), poverty-point (amerika JSON'unda zaten).

for dosya, ids in KEEP.items():
    d = json.load(open(os.path.join(D, "2-%s.json" % dosya), encoding="utf-8"))
    out = []
    for r in d["kayitlar"]:
        if r["id"] not in ids:
            continue
        kb, bb, birak = ids[r["id"]]
        if kb:
            r["kur_baslik"] = kb
        if bb:
            r["bit_baslik"] = bb
        if birak and r.get("bit"):
            r["bit_kunye"] = r["bit"]
            r["bit"] = None
        # Man Bac: cal BP'den türetilen iskân SÜRESİ (oluş zamanı değil)
        if r["id"] == "man-bac":
            r["kur"]["aralik_turu"] = "yerlesim-suresi"
        # Jomon/sosoki, Erlitou vb. kaynaktan gelen tür korunur
        out.append(r)
    d["kayitlar"] = out
    json.dump(d, open(os.path.join(D, "d2-%s.json" % dosya), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(dosya, len(out), "/", len(ids))
