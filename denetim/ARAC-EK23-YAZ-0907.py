# -*- coding: utf-8 -*-
"""`denetim/OLAYLAR-EK23-HAZIR.js` — HAZIR METIN.
   Kayitlar `_ek23_secim.json`dan okunur, ELLE YAZILMAZ."""
import json, io, sys
sys.dont_write_bytecode = True

S = json.load(io.open('denetim/_ek23_secim.json', encoding='utf-8'))
secili = S['secili']

BASLIK = '''// -*- coding: utf-8 -*-
// OLAYLAR_EK23 — ÇEKİRDEK KRONOLOJİ BORCU · ⑪ KOL · 7 Eylül 2026
// Oturum: ÇEKİRDEK KRONOLOJİ (BALKAN-DOĞU AVRUPA) · Koordinatör: 1.MURAT
//
// 🔴 BU DOSYA `denetim/` ALTINDA — `data/`ye KOYULMADI (Koşu 7b canlı).
//    Koşu bitince koordinatör `data/olaylar_ek23.js` olarak taşıyacak.
// 🔴 `index.html`E SATIR EKLENMELİ — yeni bir veri dosyası (`CLAUDE.md §5`).
//    Ad alanı: `window.OLAYLAR_EK23`.
//
// ═══════════ NİÇİN VAR ═══════════
// `Değişmez 2`nin evreni YALNIZ `data/olaylar*.js`. `data/kronoloji*.js`e
// yazılan madde CANLI olduğu hâlde denetime GÖRÜNMEZ. Dört oturumun
// bekleyen çekirdek maddesi bu dosyada toplandı.
//
// ═══════════ ÖLÇÜM — "bütün bekleyenler" 440 DEĞİL 39 ═══════════
// 23 `denetim/KRONOLOJI-*` artefaktı tarandı, şema TAHMİN EDİLMEDİ, DÖKÜLDÜ:
//   madde görünümlü kayıt TOPLAM                       440
//      /kunyeler[]/eklenen[]                           418  🟡 KÜNYE
//      öteki yollar                                     22  🟢 ÇEKİRDEK
//   + `KRONOLOJI-ISG-FAZ2-cukurova.js`                  17  🟢 ÇEKİRDEK
// 🔴 O 418 `data/devletler.js`teki künyelerin `kronoloji:` dizisine gider,
//    `olaylar*.js`e DEĞİL — altı dosya bunu `hedef_dosya` alanında AÇIKÇA
//    yazıyor. Çekirdeğe dökülselerdi yanlış kovaya girerlerdi.
// 🟢 Ölçüt (yolu `kunyeler` içeren → künye) 13 beyanlı dosyanın 13'ünde de
//    tuttu; beyansız 8 dosya bu ölçütle ayrıldı.
//
// ═══════════ MÜKERRER — İKİ EŞİKLE ÖLÇÜLDÜ ═══════════
// ① `denetle.py`nin kendi eşiği taklit edildi (400 gün · 0.34 benzerlik):
//    **55 eşleşme** verdi ve okununca ÇOĞU SAHTE çıktı —
//      «Tarsus'un kurtuluşu» ↔ «Büyük Taarruz ve İzmir'in kurtuluşu» 0.59
//      «Urfa'nın … işgali»   ↔ «Maraş'ın … işgali»                   0.92
//    ⇒ 0.34 bir TARAMA eşiği, bir HÜKÜM eşiği DEĞİL.
// ② AYNI GÜN ölçüldü (mükerrerlik iddiası için gün eşleşmesi ÖN KOŞUL):
//      çekirdekte aynı günde madde var        4
//         → GERÇEK mükerrer                   1  (Zend)
//         → aynı gün, BAŞKA konu              3
//      çekirdekte o gün hiç madde yok        35
//
// ═══════════ ÜÇ DÜŞÜRME — hepsi ÖLÇÜME dayanıyor ═══════════
// ① `1794-01-01` Zend hânedanının sonu — **ÇEKİRDEKTE ZATEN VAR**
//    (`olaylar_ek22.js`, aynı gün, benzerlik 0.61). Şartname onu
//    "bekliyor" diye sayıyordu; BORÇ ÖDENMİŞ. (`§11`: kendi ödediğin
//    borcu kaydını okumadan yeniden iş sanabilirsin.)
// ② + ③ `1917-03-15` ve `1917-11-07` — `KRONOLOJI-BALKAN`ın sürümleri
//    düşürüldü; `KRONOLOJI-1917-TASIMA`nınkiler KAYNAKLI (Riasanovsky &
//    Steinberg, *A History of Russia*) ve takvimi metinde AÇIKÇA yazıyor.
//    🔴 İkisi de BU OTURUMUN kendi kayıtlarıydı — kendi mükerrerimi
//    düşürüyorum.
//
// ═══════════ 🔴 ŞEMA ÇEVİRİSİ — TAŞIMA BİR KOPYALAMA DEĞİL ═══════════
// İki kova FARKLI ŞEMA kullanıyor ve bu ölçüldü:
//   ÇEKİRDEK (olaylar*.js · 1317 madde)  `k` %96 · `gun` %96 · `kisiler` %97
//                                        · `duygu` %96 · `tur` YALNIZ %4
//   KUYRUK   (kronoloji*.js · 4652 madde) `tur` %100 · `onem` %100
//                                        · `dunya` %100 · `k` %0
// Ve okuyan taraf `k`: `js/app.js:1898` → `MUHAREBE_K[o.k]` ·
// `denetle.py:3371,3389` → `o.get("k")`. ⇒ `tur:` ile gelen bir maddenin
// türü çekirdekte **hiçbir yerde okunmaz** (bugün AVRUPA'nın `not:`
// vakasıyla aynı sınıf).
// 🟢 ÇARE MEKANİK OLDUĞU YERDE UYGULANDI: `tur` değeri çekirdeğin 28
//    değerlik `k` sözlüğünde VARSA `k` olarak da yazıldı; `tur` SİLİNMEDİ.
// 🔴 SÖZLÜKTE OLMAYAN BEŞ DEĞER ÇEVRİLMEDİ — eşleşme UYDURULMAZ:
//      1917-03-15 · 1917-11-07 · 1906-01-01 · 1918-11-26   tur="son"
//      1918-01-01                                tur="toprak-kazanc"
//    Çekirdek `k` sözlüğünde `son` ve `toprak-kazanc` YOK.
//    ⇒ Bu beşinin `k:` değeri bir SEMANTİK KARAR ister (`son` → `taht` mı
//      `siyaset` mi `kayip` mı?) ve o karar bu oturumun değil.
//      **Koordinatör ya da maddenin yazarı seçmeli.**
//
// ═══════════ GÜN HASSASİYETİ (şartname: "gün yaz") ═══════════
//   `YYYY` ya da `YYYY-MM` biçimli madde: **0** — hiçbiri ay hassasiyetinde
//   `YYYY-01-01` (yıl hassasiyeti, `§4`ün kabul edilmiş yazımı): 5
//      1415-01-01 · 1443-01-01 (Arnavutluk) · 1906-01-01 (Agadez) ·
//      1918-01-01 (Besarabya) · 1919-01-01 (Urfa)
//   🟡 Beşi de "yıl biliniyor, gün bilinmiyor" demenin kabul edilmiş yolu;
//     ay hassasiyetinin ayın 1'ine genişlemesi tuzağı BURADA YOK.
//     Her birinin gerekçesi kendi kaynak dosyasında yazılı.
//
// ═══════════ 🔴 TAŞIMA: KUYRUKTAN SİLİNMESİ GEREKENLER ═══════════
// `KRONOLOJI-1917-TASIMA-0906.json`un üç maddesi `data/kronoloji_rusya.js`te
// HÂLÂ DURUYOR. İkisi de `index.html`de yüklü ⇒ **kopyalanırsa madde
// arayüzde İKİ KEZ görünür** ve mükerrer denetimi öter.
//   1917-03-08 · 1917-03-15 · 1917-11-07  →  `kronoloji_rusya.js`ten SİL
//
'''

satir = []
for s in secili:
    m = s['madde']
    sira = ['t', 'b', 'd', 'k', 'tur', 'etiket', 'yer', 'yer_id', 'yer_kon',
            'kisiler', 'gun', 'duygu', 'onem', 'dunya', 'kapsam',
            'kapsam_genis', 'kaynak', 'kesinlik', 'statu_vasal',
            'statu_dogrudan', 'kaybedilen', 'fethedilen']
    parca = []
    for a in sira:
        if a in m:
            parca.append('%s: %s' % (a, json.dumps(m[a], ensure_ascii=False)))
    for a in m:
        if a not in sira:
            parca.append('%s: %s' % (a, json.dumps(m[a], ensure_ascii=False)))
    satir.append('  // [%s]\n  { %s }' % (s['kaynak_dosya'], ',\n    '.join(parca)))

govde = 'window.OLAYLAR_EK23 = [\n' + ',\n\n'.join(satir) + '\n];\n'
io.open('denetim/OLAYLAR-EK23-HAZIR.js', 'w', encoding='utf-8').write(
    BASLIK + '\n' + govde)
print('yazildi: denetim/OLAYLAR-EK23-HAZIR.js · %d madde' % len(secili))
