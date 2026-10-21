"""3. dalga araştırma JSON'larını (denetim/arastirma/3-*.json) kürasyondan geçirir → denetim/arastirma/d3-*.json.
(mezopotamya-iran dalga-3'ü şehir-kontrol olarak ayrı işlenir: arkeoloji_devlet_zincir_1020.py)
Kürasyon (VERI-MO-ARKEO, 21 Ekim 2026): MS ucu taşıyanlar (Hopewell, Cahokia, Tzacualli, Güneş Piramidi…) bu MÖ üreticisinin kapsamı DIŞI (antik MS katmanı ayrı dilim);
ikincil/özet-only/mükerrer/sayısız kayıtlar elenir; kalanlara okunur başlık yazılır.
KEEP[dosya][id] = (kur_baslik, bit_baslik, bit_birak)"""
import json, os

D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "arastirma")

KEEP = {
 "anadolu-ege": {
  "troya-i": ("Troya Ia evresi başlar (Weninger 1995)", None, False),
  "troya-ii-iii": ("Troya III evresi başlar", "Troya III evresi sona erer", False),
  "troya-proto-iv-iv": ("Troya IV evresi başlar", "Troya IV evresi sona erer (veya daha geç)", False),
  "troya-v-via": ("Troya Va evresi (tek örnek)", "Troya V sonu / VI başı (uzlaşı değeri)", False),
  "hitit-eski-krallik-hattusili-i": ("I. Hattusili dönemi (hMC geleneksel değer)", None, True),
  "hitit-suppiluliuma-ii-tahta-cikis": ("II. Şuppiluliuma tahta çıkar (son Hitit kralı)", None, False),
  "ugarit-tell-tweini-deniz-kavimleri": (None, "Ugarit/Tell Tweini yıkılır (Deniz Kavimleri çağı)", False),
  "hattusa-terk-guncelleme-3-dalga": (None, "Hattuşa terk edilir; Hitit İmparatorluğu çöker (yaklaşık 1200)", False),
  "urartu-krallik": ("Urartu devleti oluşur (9. yy)", None, True),
  "klimonas-shillourokambos-kibris": ("Kıbrıs'ta ilk yerleşik köyler (Klimonas)", "Klimonas/Shillourokambos iskânı sona erer", False),
  "santorini-minos-patlamasi-guncel": (None, "Thera (Santorini) patlaması — Manning 2022 modeli", False),
 },
 "italya-avrupa": {
  "yunan-geometrik-donemi-sindos-14c": ("Orta Geometrik II başlar (Sindos 14C: geleneksel 800'e karşı 930)", None, True),
  "latial-ii-iii-gecisi-yuksek-kronoloji": ("Latium: Latial II → III geçişi (yüksek kronoloji)", None, False),
  "roma-kurulus-gelenegi-yazili": ("Roma'nın kuruluşu (yazılı gelenek, Dionysios)", None, False),
  "roma-krallik-cumhuriyet-gecisi-gelenek": ("Roma: Krallık sona erer, Cumhuriyet (gelenek)", None, False),
  "hallstatt-c-d-gecisi-dietfurt": ("Hallstatt C → D geçişi (14C modeli)", None, False),
  "karthago-kurulus-814-vs-760": ("Kartaca: kesintisiz iskânın başı (arkeolojik)", None, False),
 },
 "misir-afrika": {
  "hierakonpolis-hk11c-iskan": ("Hierakonpolis HK11C iskânı (Naqada IB/IC)", "HK11C iskânı sona erer (Naqada IIB/IIC)", False),
  "kerma-moyen": ("Orta Kerma başlar", "Orta Kerma sona erer", False),
  "kerma-classique": ("Klasik Kerma başlar", "Klasik Kerma sona erer", False),
  "kerma-recent-final": ("Son Kerma başlar", "Son Kerma sona erer", False),
  "kerma-misir-isgali-1480": ("Nubya'da Mısır işgali başlar", "Nubya'da Mısır işgali sona erer", False),
  "ounjougou-ilk-seramik": ("Afrika'nın en erken çanak çömleği (Ounjougou)", None, False),
  "nok-kulturu-1500-1": ("Nok Kültürü başlar", "Nok Kültürü sona erer", False),
  "hiksos-avaris-sonu-ahmose-fethi": (None, "Avaris Ahmose'ye geçer (Hiksos sonu)", False),
  "iskenderiye-kurulus-332-331": ("İskenderiye kurulur (gelenek)", None, False),
  "roma-misiri-30mo": ("Roma Mısır'ı alır (Octavian)", None, False),
 },
 "hint-cin": {
  "dholavira": ("Dholavira iskânı başlar", "Dholavira Aşama VII sona erer", False),
  "lothal": ("Lothal iskânı başlar", "Lothal'in gerilemesi", False),
  "magadha-haryanka-bimbisara": ("Bimbisara Magadha tahtına çıkar", "Ajatashatru tahta çıkar (Bimbisara'nın sonu)", False),
  "nanda-hanedani": ("Dhana-Nanda Magadha'da (İskender çağı)", "Nanda'dan Maurya'ya geçiş", False),
  "maurya-imparatorlugu": ("Maurya İmparatorluğu: Chandragupta dönemi başlar", "Maurya hanedanı sona erer", False),
  "asoka-saltanati-fermanlar": ("Aşoka tahta çıkar", "Aşoka ölür", False),
  "buda-parinirvana-tarihi": ("Buda'nın parinirvanası (Cambridge History tarihi)", None, False),
  "banpo-yerlesimi-3": ("Banpo yerleşimi (Yangshao)", None, False),
  "jiangzhai-yerlesimi-3": ("Jiangzhai yerleşimi (Yangshao)", None, False),
  "shang-donemi-sinirlari-3": ("Shang dönemi başlar (14C modeli)", "Shang sona erer (Zhou fethi)", False),
  "hongshan-niuheliang-3": ("Hongshan (Niuheliang) dönemi başlar", "Niuheliang dönemi sona erer", False),
  "chulmun-donemi-kore": ("Chulmun dönemi başlar (Kore)", "Chulmun kültürü ortadan kalkar", False),
  "mumun-baslangic-kalibre-kore": ("Mumun dönemi başlar (Kore)", None, True),
  "zhou-shang-fethi-celiski-1046-1045-1040": ("Zhou Shang'ı yener (1046; kaynaklar 1045/1044/1040/1050 diyor)", None, False),
  "chunqiu-baslangici-722": ("Chunqiu dönemi başlar", "Chunqiu dönemi sona erer", False),
  "han-kurulusu-202": ("Batı Han hanedanı kurulur", None, False),
 },
 "amerika-pasifik": {
  "tikal-eb-kompleksi-ilk-iskan": ("Tikal: Eb seramik kompleksi (ilk iskân)", None, True),
  "izapa-orta-formatif-baslangici": ("Izapa: Orta Formatif iskânı", None, True),
  "san-jose-mogote-ilk-koy-ve-terk": ("San José Mogote köyü kurulur", "Rosario evresi sonu: nüfusun çoğu Monte Albán'a gider", False),
  "la-blanca-san-marcos-conchas": ("La Blanca: anıtsal merkezin yükselişi", "La Blanca'nın gerilemesi", False),
  "kaminaljuyu-providencia-fazi": ("Kaminaljuyú: Providencia evresi", "Providencia evresi sona erer", False),
  "tehuacan-coxcatlan": ("Tehuacán: Coxcatlán evresi", None, False),
  "tehuacan-purron": ("Tehuacán: Purrón evresi", None, False),
  "tehuacan-ajalpan": ("Tehuacán: Ajalpan evresi", None, False),
  "sechin-bajo": ("Sechín Bajo: Geç Arkaik iskân başlar", "Sechín Bajo'da Formatif iskân sona erer", False),
  "cerro-sechin": ("Cerro Sechín: en eski kalibre tarihler", "Cerro Sechín dönemi sona erer", False),
  "sechin-alto": ("Sechín Alto: Haldas öncesi iskân", "Sechín Alto: en geç Haldas tarihi", False),
  "paracas-kulturu-ica": ("Paracas kültürü (Ica) yerleşik düzeyine ulaşır", "Geç Paracas sona erer", False),
  "topara-jahuay-baslangici": ("Topará: Jahuay iskânı başlar", None, False),
  "hamacas-jequetepeque-formatif": ("Hamacas evresi başlar (Jequetepeque)", "Töreni merkezler terk edilir", False),
  "wairajirca-seramik-jancao": ("Wairajirca seramiği başlar (Jancao)", "Wairajirca seramiği sona erer", False),
  "lapita-bismarck-baslangic": ("Lapita Bismarck Takımadaları'nda ortaya çıkar", None, False),
  "kamgot-anir-erken-lapita": ("Kamgot (Anir) erken Lapita iskânı", None, False),
  "talepakemalai-mussau-eca": ("Talepakemalai (Mussau) Lapita iskânı", None, False),
  "nukuleka-tonga-lapita": ("Nukuleka: Tonga'nın ilk Lapita iskânı", "Tongatapu Lapita evresi sona erer", False),
  "mulifanua-samoa-lapita": ("Mulifanua: Samoa'da Lapita iskânı", None, False),
  "slab-grave-mogolistan": ("Slab Grave kültürü başlar", "Slab Grave gömüleri sona erer (medyan)", False),
  "geyik-tasi-hirigsuur-mogolistan": ("Hirigsuur (Geyik Taşı) mezar anıtları başlar", None, False),
  "malta-sibirya-ma1": ("Mal'ta (MA-1): Üst Paleolitik Sibirya iskânı (ufuk dışı)", None, False),
  "afontova-gora-2": ("Afontova Gora-2: Üst Paleolitik Sibirya iskânı (ufuk dışı)", None, False),
 },
}
for dosya, ids in KEEP.items():
    d = json.load(open(os.path.join(D, "3-%s.json" % dosya), encoding="utf-8"))
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
        # yalnız-bit kayıtlar: kur bloğu boş bırakılmışsa olduğu gibi (uretici None kur'u atlar)
        out.append(r)
    d["kayitlar"] = out
    json.dump(d, open(os.path.join(D, "d3-%s.json" % dosya), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(dosya, len(out), "/", len(ids))
