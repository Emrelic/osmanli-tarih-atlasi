# -*- coding: utf-8 -*-
"""ATLAS-BASLANGIC-ADAYLARI-LAB.tsv: kaynaklı kuruluş/ilk anılış yılı atlas başlangıcından >1 yıl ÖNCE olan şehirler (KASA'ya: atlas başlangıcı geri çekilsin; Değişmez 1/2 ölçülerek).
(a) YAZILMIŞ kayıtlar (data/sehir_tarihce_{hint,orta_asya,afrika_gb}.js): ilk.t < atlas ilk günü − 365 gün; atlas ilk günü arac/sehir_tarihce.atlas_ilk_gunleri().
(b) YAZILAMAYAN (borç; zincir boşluğu): elle derlenmiş satırlar (BORC dosyaları 17 Kasım 2026)."""
import csv, io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, 'arac'))
import sehir_tarihce as st
atlas = st.atlas_ilk_gunleri()            # ad -> (ilk gün, ilk sahip)
def teyit(ic):
    ic = ic or ''
    if ic.startswith('ÇİFT TEYİT') or 'ÇİFT TEYİT (LAB' in ic[:60]: return 'çift'
    if re.search(r'çelişki|CELISKI', ic[:400]): return 'çelişkili/hakemli'
    return 'tek'
rows = []
for f, ad in (('hint', 'hint'), ('orta_asya', 'orta-asya'), ('afrika_gb', 'afrika')):
    js = open(os.path.join(KOK, 'data', f'sehir_tarihce_{f}.js'), encoding='utf-8').read()
    for x in json.loads(js[js.index('['):js.rindex(']') + 1]):
        a = x.get('atlas_ad')
        if not a or a not in atlas: continue
        ilk = x['ilk']['t']
        try: fark = st.gun_no(atlas[a][0]) - st.gun_no(ilk)
        except Exception: continue
        if fark > 400:   # >1 yıl (365 gün + artık yıl payı)
            rows.append([ad, x['id'], a, atlas[a][0], atlas[a][1] or '', ilk, round(fark / 365.25, 1), x['ilk'].get('tanik', ''), x['ilk'].get('kaynak', '')[:200], teyit(x.get('ic_not')), 'yazılı kayıt (atlas başlangıcı geri çekilmeli)'])
EL = [  # (blok, ad, atlas_ad, kaynakli_yil, tanik, kaynak, teyit, not)
 ('afrika', 'Akra (Accra)', 'Akra (Accra)', "c.1565", "Accra Circa 1565, the Portuguese built a fort.", "W. W. Claridge, A History of the Gold Coast and Ashanti (1915), Appendix F (archive.org historyofgoldcoa00clarrich, OCR)", 'tek', "kale olgusu; 1578/1580/1583/1642 tanıkları var; atlas 1650 (hollanda) → 85 yıl"),
 ('afrika', 'Freetown', 'Freetown', "1787", "Britannica 'Freetown' (tanık X10 kaydı/borç notunda)", "Encyclopaedia Britannica «Freetown»", 'tek', "atlas 1792-03-11; 5 yıl; Sharp/Sierra Leone Company özel girişim, sahip kaynağı yok"),
 ('hint', 'Faisalabad (Lyallpur)', '(atlasta yok)', "1890/1892/c.1895", "When founded in 1890, it was named for Sir Charles James Lyall (Britannica); Founded and named for Sir James Lyall in 1892 (Gale 'Pakistan')", "Britannica; Gale; Columbia 6th ed.", 'çelişkili', "üç yayıncı üç ayrı yıl, hakem yok; atlas sonu/zincir 1900 → 10 yıl"),
 ('afrika', 'Ogbomosho', '(atlasta yok)', "1840", "Following Ibadan’s victory in 1840 ... the town shifted its allegiance", "Britannica «Ogbomosho»", 'tek', "Columbia yalnız '17th cent.'; atlas 1900 → 1840-1900 zincir kaynaksız"),
 ('afrika', 'Aného (Anécho)', '(atlasta yok)', "1885", "Britannica: capital of German Togoland from 1885 to 1887 (özne zamiri It)", "Britannica «Aného»", 'tek', "1887-1900 sahip zinciri kaynaksız"),
 ('afrika', 'Mindelo', 'Mindelo', "1875", "Britannica: submarine cable station since 1875", "Britannica «Mindelo»", 'tek', "atlas 1975 → 100 yıl; 1875-1975 zincir kaynaksız (Portekiz)"),
 ('afrika', 'Witbank (Emalahleni)', '(atlasta yok)', "1890", "Established in 1890 as Witbank (+ town status 1910)", "Britannica «Witbank»", 'tek', "1890-1900 ZAR/Transvaal zinciri kaynaksız"),
 ('hint', 'Polonnaruwa', 'Polonnaruwa', "368 / 1055", "became the residence of Sri Lanka's kings in 368 ce (Britannica); 1055. Sinhala kingdom moves its capital to Polonnaruwa under King Vijayabahu I (Gale 'Sri Lanka')", "Britannica «Sri Lanka»; Gale", 'çelişkili', "ATLAS ÇELİŞKİSİ: atlas 1017-1070 Polonnaruwa=Chola; Gale 1055'te Sinhala başkenti; UNESCO 201: 993; 368→1017 = 650 yıl"),
 ('afrika', 'Opobo (Opobo Town)', '(atlasta yok)', "1869/1870", "Columbia 'Opobo'/'Jaja' 1869; Britannica 'Jubo Jubogha' 1870", "Columbia 6th ed.; Britannica", 'çelişkili', "iki yayıncı iki yıl; hakem yok; 1869/70-1900 Oil Rivers/İngiliz zinciri kaynaksız"),
 ('afrika', 'Lüderitz', 'Lüderitz', "1883", "Britannica 'Lüderitz' (yıl 1883)", "Britannica «Lüderitz»", 'tek', "atlas 1883-05-01; aynı yıl; sahip tanığı şehir cümlesinde yok"),
 ('afrika', 'Elisabethville (Lubumbashi)', 'Elisabethville (Lubumbashi)', "1910", "Britannica 'Lubumbashi' (1910 kuruluş)", "Britannica «Lubumbashi»", 'tek', "atlas dikişi 1960-07-11; ±30 gün olay günü kaynakta yok (yalnız '1960')"),
 ('orta-asya', 'Şehrisebz (Keş)', 'Şehrisebz', "642", "La seizième année tcheng-koan (642) (Chavannes 1903); His successor in 642, Shashebi (Iranica 'Keš')", "Chavannes, Documents sur les Tou-kiue occidentaux (1903) s.146-147; Encyclopaedia Iranica 'Keš' (aynı Çin zinciri: TEK SOY)", 'tek (tek soy)', "HAKEM13/EMRELİC onayı: ilk_anilis 1380 Ak Saray=bina tarihi; 642 aday; atlas 1281 → 639 yıl zincir (dikiş beyanı); LAB kaydı ilk.t DEĞİŞTİRİLMEDİ"),
 ('afrika', 'Awdaghust (Aoudaghost)', '(atlasta ayrı nokta yok: harabe)', "1054", "Britannica «Ghana»: Abū Bakr took Audaghost in 1054", "Britannica «Ghana»", 'tek', "1054→1900 zincir; atlasta ayrı nokta yok"),
]
for b, ad, a, y, t, k, te, n in EL:
    ilk = atlas.get(a)
    rows.append([b, '', ad, ilk[0] if ilk else '(yok)', (ilk[1] if ilk and ilk[1] else ''), y, '', t, k, te, 'YAZILAMAYAN (borç; zincir boşluğu): ' + n])
with open(os.path.join(KOK, 'denetim', 'SEHIR-DUNYA-1116', 'ATLAS-BASLANGIC-ADAYLARI-LAB.tsv'), 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f, delimiter='\t')
    w.writerow(['blok', 'sehir_kayit_id', 'atlas_ad', 'atlas_baslangic_gun', 'atlas_ilk_sahip', 'kaynakli_ilk_yil', 'fark_yil', 'tanik', 'kaynak', 'bagimsiz_teyit', 'not'])
    w.writerows(rows)
print('satır', len(rows), '| yazılı kayıt', sum(1 for r in rows if r[1]), '| borç', sum(1 for r in rows if not r[1]))
for r in rows:
    if r[1]: print(' ', r[1], '|', r[2], '| atlas', r[3], '| kaynak', r[5], '| fark', r[6], '|', r[9])
