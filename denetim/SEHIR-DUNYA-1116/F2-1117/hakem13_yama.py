# -*- coding: utf-8 -*-
"""HAKEM13 kararları (EMRELİC onayı 17 Kasım): (a) yama_hakem13.json (KASA uygular), (b) LAB'ın kendi kayıtlarına (karakurum-mn, sehrisebz-kes-uz) ic_not hakem notu."""
import csv, json
D = 'denetim/SEHIR-DUNYA-1116/F2-1117/'
H = {r['konu'].split()[0] + ' ' + r['konu'].split()[1]: r for r in csv.DictReader(open(D + 'HAKEM13.tsv', encoding='utf-8'), delimiter='\t')}
def ic(n): return [r for k, r in H.items() if k.startswith(n)][0]['ic_not_onerisi'].strip()
Y = [
 {'konu': 'Karakurum 1220', 'karar': 'KABUL', 'hedef': [{'dosya': 'sehir_tarihce_orta_asya.js', 'id': 'karakurum-mn'}, {'dosya': 'sehir_tarihce_k12.js', 'id': 'karakurum'}],
  'degisiklik': "ilk.t 1220-01-01 KALIR; ilk olgusu 'Cengiz Han'ın karargâh yeri seçildi/belirlendi' (kuruldu değil); şehrin inşası Ögedey (yılsız, Cüveynî); sur/saray 1235 AYRI olay (Britannica, Bonn kazı projesi, Boyle/Reşîdüddîn n.269); çift teyit yazılmaz (Cüveynî-Reşîdüddîn ortak soy; Britannica kaynakçasız): tek soy beyan.",
  'ic_not': ic('1 KARAKURUM')},
 {'konu': 'Şehrisebz/Keş ilk anılış', 'karar': 'KABUL', 'hedef': [{'dosya': 'sehir_tarihce_orta_asya.js', 'id': 'sehrisebz-kes-uz'}, {'dosya': 'sehir_tarihce_k12.js', 'id': 'sehrisebz'}],
  'degisiklik': "ilk_anilis 0642-01-01 (yıl; Chavannes 1903 s.146-147 'La seizième année tcheng-koan (642)' + Iranica 'Keš' 'His successor in 642, Shashebi' = aynı Çin zinciri, TEK SOY, tek kaynak beyanlı); 1380 Ak Saray BİNA olayı olarak ayrı. ilk.t geri çekilince zincir 642→atlas başlangıcı (1281) gerekir: ATLAS-BASLANGIC-ADAYLARI-LAB.tsv'ye eklendi (dikiş beyanı; 639 yıl fark KASA ölçer). LAB kaydında ilk.t DEĞİŞTİRİLMEDİ (zincir olmadan 'zincir boş' ihlali).",
  'ic_not': ic('2 SEHRISEBZ')},
 {'konu': 'Kahire 969', 'karar': 'KABUL', 'hedef': [{'dosya': 'sehir_tarihce_k3_g1.js/osm.js', 'id': 'cairo'}, {'dosya': 'atlas', 'id': 'Kahire (0969-07-01 başlangıç)'}],
  'degisiklik': "gün 0969-07-06 (Jülyen; 17 Şâban 358, Salı; Fustat'a giriş + aynı gece Kahire'nin temel atılışı); 0969-07-01 ve 0969-07-03 hiçbir kaynakta yok; 9 Temmuz ilk Fâtımî hutbesi AYRI olgu. ic_not: de Slane OCR rakam riski (hafta günü uyumu destekliyor), Makrîzî/EI2/Raymond okunmadı, çift teyit yazılmaz.",
  'ic_not': ic('3 KAHIRE')},
 {'konu': 'Turan Şah ölümü 1250', 'karar': 'EMRELİC: TDV DEĞERİ KALIR', 'hedef': [{'dosya': 'kronoloji (Turan Şah öldürüldü)', 'id': '1250'}, {'dosya': 'şehir olayları (asyut/banha/qena/alexandria/cairo)', 'id': 'Turan Şah'}],
  'degisiklik': "Runciman 1954 s.272 ('on 2 May') + Setton II 1969 ch.XX ('Monday, May 2') ortak Makrîzî dayanağı → BAĞIMSIZ SAYILMAZ; mevcut değer (TDV Eyyûbîler: 30 Nisan 1250) KALIR; 2 Mayıs 1250 İKİNCİ ADAY olarak ic_not'ta iki kaynağıyla; TDV iç çelişkisi (Eyyûbîler 30 Nisan ↔ Şecerüddür 30 Muharrem 648/4 Mayıs) ayrıca beyan edilir; Cambridge Hist. Egypt 27 Muharrem/1 Mayıs; Britannica 30 Nisan.",
  'ic_not': ic('4 TURAN')},
 {'konu': 'Besâsîrî Bağdat girişi', 'karar': 'KABUL', 'hedef': [{'dosya': 'kronoloji_cok_once1281_ortadogu.js', 'id': 't=1058-12-27 Besâsîrî Bağdat işgal'}, {'dosya': 'şehir olayları (baghdad osm-12)', 'id': 'baghdad'}],
  'degisiklik': "27 Aralık 1058 KALIR (Pazar, 8 Zilkâde 450). Kayıt metnindeki 'halifeyi esir aldı' ve 'hutbeyi Fâtımî halifesi adına okuttu (Cuma)' bu güne ait DEĞİL: AYRIŞTIR → doğu yakasına geçiş 16 Zilkâde/4 Ocak 1059, Rusâfa hutbesi ~8 Ocak 1059, halife esiri ~17-18 Ocak 1059 (ayrı olaylar; TDV 'Ocak 1059' bunlara uyar); ic_not'ta İbnü'l-Cevzî 6 Zilkâde/25 Aralık farkı (Richards dipnotu).",
  'ic_not': ic('5 BESASIRI')},
]
json.dump(Y, open(D + 'yama_hakem13.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
# LAB kayıtlarına ic_not
p = D + 'orta_asya_birlesik10.json'
L = json.load(open(p, encoding='utf-8')); n = 0
for x in L:
    if x['id'] == 'karakurum-mn':
        x['ic_not'] = 'HAKEMLİ KARAR (LAB, 17 Kasım 2026; EMRELİC onayı): ' + Y[0]['degisiklik'] + ' || ' + Y[0]['ic_not'] + ' || ' + x['ic_not']; n += 1
    if x['id'] == 'sehrisebz-kes-uz':
        x['ic_not'] = 'HAKEMLİ KARAR (LAB, 17 Kasım 2026; EMRELİC onayı) — ADAY ilk_anilis 0642: ' + Y[1]['degisiklik'] + ' || ' + Y[1]['ic_not'] + ' || ' + x['ic_not']; n += 1
json.dump(L, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('LAB kaydı güncellendi', n, '| yama', len(Y))
