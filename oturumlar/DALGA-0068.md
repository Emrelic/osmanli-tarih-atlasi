# DALGA-0068 — paket 0068 (29 madde) · 17-18 Eylül 2026 · 1.MURAT

Görseller: `ClaudEmre/kutu/giden/parti-emrelic-0068/H-00NN-*.png` · metin: aynı klasör `PARTI.json`.
Ortak açılış ve haberleşme: **CLAUDE.md §7.2 TOKEN ZİNCİRİ** (tahta tek kanal · açılış mesajı yok · işin
yoksa sus · teslimden sonra dur) + `oturumlar/KADRO-1010-1015.md` ORTAK AÇILIŞ.
Kaynak: TDV birincil · yalnız akademik · Vikipedi tek dayanak olamaz · tarih uydurma · atlas referans değildir.
Yerleşim dosyalarına doğrudan yazma → `denetim/YAMA-<ADIN>-0918.json`.

## A. Mevcut oturumlar (işin doğrudan devamı)
| Oturum | Madde | İş | Çıktı |
|---|---|---|---|
| **BAGLAMA** (app.js onda) | H-0025 · H-0018 | 0025: toprak değişimi maddelerindeki "yakıp söndür" düğmesi çalışmıyor — onar ya da kaldır (hangisi olduğunu ölç, gerekçesini yaz). 0018: ek okuma metinleri paragraf/bölüm ayrımı olmadan üst üste biniyor — okunur düzen | `js/app.js` · `css/style.css` |
| **SEFER-1768** (sefer oku dosyası onda) | H-0027 · H-0028 · H-0029 | Napolyon: Mısır'ın işgali, Suriye'ye yürüyüş, Akkâ'da durdurulması ve geri çekilme — adım adım oklar (tarihli), işgal edilen toprak taraması için gereken kayıtları da öner. 0029: Fransızların Suriye'de ilerleyip geriletilmesine ait kronoloji maddelerinin haritada karşılığı yok | `data/seferler_p0068.js` (window.SEFERLER_P0068) + `denetim/YAMA-SEFER-NAPOLYON-0918.json` |
| **MOTOR-YURUYUS** (motor onda) | H-0010 · H-0012 | 0010: iki ülke arasında sahipsiz şerit — veri kusuru mu, motorun yürüyüş/tavan hesabı mı? ÖLÇ, hüküm ver. 0012: Anapa'nın kuzey etki alanı oradaki nehri geçemeyip nehre yaslanıyor mu (yürüyüş motoru açıkken)? 🔴 KOŞU 13 SÜRÜYOR — `arac/uret_petek.py`yi DEĞİŞTİRME, yalnız ölç ve öner | `denetim/OLCUM-SAHIPSIZ-SERIT-0918.md` |
| **EKO-KURUM2** (Mühendishâne-i Bahrî onda) | H-0020 · H-0014 | 0020: Mühendishâne-i Berrî + Bahrî — bu okullar sonra hangi okullara dönüştü. 0014: Nizâm-ı Cedîd — sebep, sonuç, önem, etkiler, merak/magazin | `data/ekokuma_kurum2.js` |
| **BASRA-KORFEZ** (körfez onda) | H-0019 | Petrol öncesi körfez emirliklerinin (Kuveyt · Katar · Bahreyn) ekonomisi: inci, hurma, ticaret, kervan, korsanlık — fakir bölgeler miydi | `data/ekokuma_korfez.js` |
| **EKO-IHTILAL** (ihtilal dönemi onda) | H-0024 · H-0022 | 0024: Napolyon'un Mısır'ı işgal amacı, Mısır niçin Fransa'nın iştahını kabarttı. 0022: Venedik niçin ve nasıl paylaşıldı, ana toprakları kime kaldı, düşüşünün ve yok oluşunun sonuçları | `data/ekokuma_ihtilal.js` |
| **EKO-TARTISMA** (tartışma türü onda) | H-0016 ek okuma · H-0021 | 0016: Lehistan'ın ikinci paylaşımı — sebep, sonuç; Lehistan'ın gücü niçin yetmedi. 0021: Kaçarlardan sonra İran'ı niçin bir Türk hanedanı yönetmedi, yönetim Perslere nasıl geçti | `data/ekokuma_tartisma.js` |
| **EKO-RIVAYET** (magazin/rivayet onda) | H-0004 ek okuma | I. Abdülhamid'in Özi'nin düşüşünü öğrenince felç geçirip ölmesi; haberin padişahtan gizlenmesi. 🔴 Kaynakla doğrulanmayan kısım "rivayet" damgalı | `data/ekokuma_rivayet.js` |

## B. Yeni oturum gerektiren dört küme (Emre'ye bildirildi)
| Yeni AD | Model | Madde | İş | Çıktı |
|---|---|---|---|---|
| **ISGAL-1787** | Opus | H-0002 · H-0003 · H-0005 · H-0007 · H-0008 · H-0009 · H-0011 · H-0026 | 1787-92 Osmanlı-Rus-Avusturya savaşında haritada **karşılığı olmayan** kronoloji maddeleri: Novi (3 Ekim 1788), Bükreş'in Avusturya tarafından işgali, Bender · Kili · İsmail kalelerinin Ruslara geçişi (yalnız İsmail boyanıyor), 0005/0007'de o tarihte işgal sürüyor muydu. Her madde için: kırılma var mı, yok ise kaynaklı yerleşim/işgal (`isg:`) yaması | `denetim/YAMA-ISGAL-1787-0918.json` |
| **SAVAS-ANLATI** | Opus | H-0004 sıralama · H-0006 | 0006: her büyük savaş için standart anlatı şeması — ① savaşa giden süreç ② savaşın başlangıcı ③ savaş olayları ④ savaşın sonu ⑤ barış antlaşması. Önce mevcut kronolojide 1787-92 savaşını bu şemaya karşı ölç, eksikleri listele, şemayı `VERI-YAPISI.md`ye öneri olarak yaz. 0004: Özi'nin düşüşü → I. Abdülhamid'in ölümü → III. Selim'in cülûsu → Nizâm-ı Cedîd sıralaması bozuk; aynı güne düşen maddelerin sırasını düzeltmenin yolunu öner (gün içi sıra alanı var mı, yoksa öner) | `denetim/SAVAS-ANLATI-0918.md` + `denetim/YAMA-SIRA-0918.json` |
| **ISGAL-TARAMA** | Sonnet | H-0001 · H-0023 · H-0017 · H-0015 · H-0016 görsel | 🔴 Emre'nin kuralı (H-0001): bir bölge işgal edilince **işgal edenin rengi baskın** olacak, işgal edilenin rengi yalnız ince çizgilerle taranacak. Bugün tersi/karışık: 0023 Mısır'da iki ayrı tarama biçimi (tek güç işgal ettiyse tek biçim olmalı), 0017 Zend→Kaçar geçişinde iki koyu pembe leke (anlamsız, kaldırılmalı; İran'ı komple gösterip rengi/etiketi değiştirmek yeterli), 0015 Paris çevresinde 5-6 koyu mavi bölge (cumhuriyetin ilanı bütün Fransa'yı ilgilendirir), 0016 ikinci paylaşımda Prusya payları koyu, Rus payları değil. ⚠️ `js/app.js` BAGLAMA'da — o bitirince devralacaksın, önce tahtadan `--kime "BAGLAMA"` sor | `js/app.js` (devirle) + `denetim/ISGAL-TARAMA-0918.md` |
| **EKO-AKDENIZ** | Sonnet | H-0013 | Vehrân (Oran) şehrinin önemi: askerî, idarî, siyasî, ekonomik, stratejik; 1792'de İspanyolların boşaltıp Cezayir'e devretmesi bağlamıyla | `data/ekokuma_akdeniz.js` (window.EKOKUMA_AKDENIZ) |
