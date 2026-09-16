# EKO-TOPLUM — TESLİM RAPORU

**Oturum:** EKO-TOPLUM · **Tarih:** 16 Eylül 2026 · **Paket:** 0052 (DALGA-0052.md)
**Dosya:** `data/ekokuma_toplum.js` → `window.EKOKUMA_TOPLUM` — 16 kart, `node --check` temiz.

---

## ① SAYIYLA — 13 madde, 16 kart

| Madde | Konu (Emre'nin kendi ifadesi) | Yazıldı mı | Kart(lar) |
|---|---|---|---|
| H-0029 | kahve/tütün + spor + kahvehane kültürü | 🟡 KISMEN | `kahve-kahvehane-yasagi` · `tutun-yasagi-kaldirilmasi` — spor ve içki kültürü ARAŞTIRILMADI |
| H-0033 | Osmanlı ekonomisi (Avrupa karşılaştırmalı) | 🟡 KISMEN | `timar-avrupa-feodalizm-farki` — yalnız toprak/asker ekseni, kilise/burjuvazi/sanayi devrimi eksenleri değil |
| H-0034 | sosyal yaşam (genel) | 🟡 KISMEN | `mahalle-teskilati-sorumluluk` — yalnız mahalle idaresi |
| H-0053 | mehter bölüğü | ✅ | `mehter-yeniceriyle-birlikte-lagvi` |
| H-0054 | topçuluk/gemicilik/matbaacılık/dokumacılık/atölyecilik | 🟡 KISMEN | `muteferrika-matbaasi-kurulusu` — yalnız matbaacılık |
| H-0115 | şenlikler (sünnet/evlilik/doğum/ölüm) | 🟡 KISMEN | `sehzade-mehmed-sunnet-dugunu-1582` — yalnız sünnet, doğum/ölüm törenleri değil |
| H-0116 | hanedan evlilik/nikah/cariye/çokeşlilik | ✅ | `hanedan-evlilik-cariyelik-nikahi` |
| H-0117 | harem teşkilatı/hiyerarşi | ✅ | `darussaade-agasi-harem-hiyerarsisi` |
| H-0118 | kölelik | ✅ | `kolelik-pencik-kanunundan-kalkisa` |
| H-0119 | ticaret | ✅ | `osmanli-ingiliz-ticaret-mekanizmasi-1580` |
| H-0120 | sanayi | ✅ | `feshane-osmanli-sanayilesme-girisimi` |
| H-0121 | esnaf/zanaatkarlar | ✅ | `lonca-esnaf-teskilati` |
| H-0127 | hat/ebru/çini | ✅ | `hat-sanati-sheyh-hamdullah-hafiz-osman` · `ebru-sanati-ipek-yolundan-istanbula` · `iznik-cinicilik-cokusu` |

**8/13 madde TAM, 5/13 madde KISMEN** (her biri en az bir sağlam, kaynaklı kart aldı; geniş konu başlıklarının TAMAMI tek turda YAZILMADI — gerekçe §④).

`olay:` bağlantısı: 17 referans, **17/17 canlı `data/olaylar*.js`de programatik doğrulandı** (node ile, `t:` birebir eşleşme). 3 kart (`darussaade-agasi-harem-hiyerarsisi`, `ebru-sanati-ipek-yolundan-istanbula`, `iznik-cinicilik-cokusu`) kronolojide karşılığı olmadığı için `olay:[]` — sebep her kartın kendi `bag`/`not` alanında açık.

## ② NEYİ BULAMADIM

- **1574** Habeşî Mehmed Ağa'nın darüssaade ağalığının müstakilleşmesi — TDV yılı veriyor, kronolojide GÜNÜ yok (madde adayı olarak not edildi).
- **1847/1857/1890/1909** Osmanlı köle ticareti yasakları — kronolojide bu tarihlerde Osmanlı'ya özgü BİR madde bulunamadı (aranan kayıtlar başka ülkelere aitti: Portekiz 1761, Britanya 1807).
- **Ebru ve İznik çiniciliğinin KESİN tarihleri** — TDV kendisi belirsiz olduğunu söylüyor; `olay:[]` bırakıldı, uydurulmadı.
- **1580-02-01 tarihi STALE ÇIKTI** — kendi ilk taramamda (3 gün önceki bir oturumdan hatırladığım) bu tarihi kullanmıştım; canlı veriden okuyunca KITA 14'ün 13 Eylül'de `1580-02-01 → 1580-01-01` diye düzelttiğini gördüm (TDV yalnız yıl veriyor, ay uydurulmaz). Kartı GÜNCEL değere göre yazdım — **atlas değil, canlı kayıt** dayanak oldu.
- **Peirce/Ahmed Refik tarzı ikincil akademik kaynaklar bu turda ARANMADI** — hepsi TDV'ye dayanıyor; TDV'nin kapsamadığı hiçbir alt-başlık bu turda çıkmadı (hepsi TDV'de madde bulundu).

## ③ MÜKERRER TARAMASI — iki çapraz bulundu, kartlar ona göre daraltıldı

- `data/merak.js` **id:siyasi-evlilikler** ile `hanedan-evlilik-cariyelik-nikahi` — aynı 1534 olayına dayanıyor ama FARKLI soru soruyor (biri "dışarıdan kız almayı niçin bıraktı", öteki "içeride nikah mı cariyelik mi"). Üç görüş TEKRAR EDİLMEDİ, `bag` alanında çapraz atıf var.
- `data/ekokuma.js` **id:ahi-birlikleri-ankara** ile `lonca-esnaf-teskilati` — aynı kişi/hareket (Ahi Evran) ama FARKLI sonuç (biri Ankara'nın siyasi yönetimi, öteki esnaf/gedik teşkilatlanması). Çapraz atıf var.

## ④ NE İSTİYORUM

Bu bir **PİLOT teslimdir** — DALGA-0052'nin "yeni iş icat etme" kuralına uyarak, 13 geniş maddenin HER birine en az bir sağlam kart yazıp DURDUM; hiçbirini tek turda tüketmeye çalışmadım (ONCELIK.md çöl seyyahı ilkesi). Kapsam dışı bırakılanlar (spor, içki kültürü, doğum/ölüm törenleri, gemicilik/topçuluk/dokumacılık, tımarın kilise/burjuvazi eksenleri, sosyal yaşamın mahalle dışındaki yönleri) **AYRI bir sevk beklemeli** — kendim seçip devam etmiyorum.

**UI oturumuna — ENGEL, bekletmeden bildiriyorum:** `js/app.js:8241` `_EKOKUMA_DOSYA_ADLARI` dizisini CANLI okudum (varsayımla değil) — `"ekokuma_toplum"` dizide YOK (sh104/tartisma/kadin/ekonomi/dalga2/hanedan/statu/celali/ibrahim/kasrisirin/savas3/antlasma3/mimari2/kirimrus var, toplum yok). DALGA-0052 §1 gereği bu satırı UI oturumu ekliyor — tek satır istiyorum: `"ekokuma_toplum",` (yorumla: `// EKO-TOPLUM, DALGA-0052`). Eklenene kadar kart `_ekHavuz()`e HİÇ girmez, buton hiç çıkmaz — kod dokunulmadan geldiğinde otomatik toplanacağı doğru (regex `^EKOKUMA(_[A-Z0-9]+)?\$`), yalnız DOSYA ADI listede eksik.

**Commit:** `data/ekokuma_toplum.js` + `denetim/EKO-TOPLUM-0916.md`, ADIYLA, iki adımda pathspec.
