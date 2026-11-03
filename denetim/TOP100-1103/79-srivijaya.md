# 79 · Srivijaya — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04

## Özet
- Künye: **1** (`srivijaya`, 0683-01-01 → 1275-01-01). Yerleşim: **2** (Nakhon Si Thammarat 775-1230 ve Jambi) — harita pratikte BOŞ/görünmez. Kırılma 4, **AÇIK 0**, otomatik-maddeyle kapanan 0. Künyede `harita:` alanı yok (BOYALAR'da "srivijaya" `arac/renkler.py:4462` mevcut, ölçer ⚠ basmadı).
- MÜKERRER: yok (srivijaya tek; palembang-sultanligi 1281 sonrası ardıl, malay-sultanliklari, kedah-kadaram ayrı; "sriwijaya" yazımı ayrı künye vermedi).
- En ağır 3 bulgu: (1) **f yanlış/beyan yanlış**: künye f 0683-01-01 «683 = Kedukan Bukit», oysa Coedès Kedukan Bukit'i **23 Nisan 682** tarihler (olaylar:12 zaten 0682-04-23 yazıyor) → künye ile evren-içi madde ÇELİŞİYOR; (2) **başkent Palembang haritada Srivijaya değil**: Palembang s: yalnız 1281'den başlıyor, 682-1281 arası sahip yok; Kedah (Kadaram), Lampung, Bangka, Ligor haritada yok/başka; sınırı Çola 1025 baskınına kadar gösteren yerleşim yok; (3) t 1275 kaynakça ile uyumlu ama «Srivijaya'nın sonu» tartışmalı (Pamalayu 1275 Coedès; Çin Sanfoqi elçilikleri 1370'lere kadar) — beyan edilmiş, tek kaynak (Coedès) yeterli değil; ikinci kaynak (Hall 2011) sayfasız.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| srivijaya | Srivicaya (Śrīvijaya) Krallığı | 0683-01-01 | 1275-01-01 | Tek künye; baskent "Palembang → Jambi (Melayu)"; boya_gerekli:true; `harita:` alanı yok |
| palembang-sultanligi | Palembang Sultanlığı | 1281-01-01 (pencere işareti) | ? | ardıl (başka sıra); Palembang yerleşimi s: yalnız bu künyeyle 1281'den |
| kedah-kadaram | (Kedah) | 0500-01-01 | 1281-01-01 | komşu/bağlı (Çola 1025'te Kadaram yağmalandı) — Srivijaya bağlı olarak boyanabilir |
| medang / chenla | komşu | | | başka sıra |
EKSİK evre: Palembang evresi (682-~11. yy) ve Jambi evresi (Melayu) ayrı s: dönemleriyle yerleşimlerde YOK.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f 0683-01-01 | ic_not_f: «683 = Kedukan Bukit yazıtı (Coedès)» | Coedès, *Indianized States* (EWC 1968), Srivijaya bölümü: «on April 23, 682, a king began an expedition (siddhayatra) by boat» (archive.org, okundu) | Atlasın kendi olaylar:12 (0682-04-23) — atlas referans DEĞİL; ikinci bağımsız akademik kaynak ERİŞİLEMEDİ (Hall 2011; Wolters 1967) | **HATA: künye 683, kaynak 682.** Kedukan Bukit «en eski tarihli belge» = kuruluş değil (ic_not doğru söylüyor). Öneri: f `0682-04-23` (Jülyen, kaynak gün verdi) + ic_not düzelt: «682-04-23 Kedukan Bukit (605 Śaka, Coedès); kuruluş değil, en eski belge». Eşlik eden madde zaten var. Ay-güneş çevirisi: yazıtın Śaka tarihinin Jülyen karşılığını Coedès verdi; ben çevirmedim |
| t 1275-01-01 | ic_not_t: EŞİK, kesin yıkılış kaynakta yok, Pamalayu 1275 | Coedès: «In 1275, taking advantage of the decline of Srivijaya, he [Kritanagara] sent a military expedition to the west which established Javanese suzerainty over Malayu»; «the Javanese expedition of 1275 had snatched mastery of the straits from the heir of Srivijaya» (okundu) | Hall 2011 (künye kaynakçası; sayfa yok, ERİŞİLEMEDİ); Çin kayıtları Sanfoqi 1370'lere kadar (ic_not) | Hüküm: 1275 = «Cava üstünlüğüne girdi» eşiği; bir devletin yıkılış günü değil. TAKVİM: yıl hassasiyeti, gün yok → `1275-01-01` doğru biçim. KABUL, beyanlı; ikinci akademik kaynak ZORUNLU, bulunamadı |
| 1025 Çola baskını | olaylar | Coedès, bölüm IX («Srivijaya and Its Relations with the Cholas of Tanjore (1003-30)»); atlas olaylar'da ISEAS makalesi | K. V. Ramakrishna Rao, «Was Chinese-Sri Vijaya Nexus acting Against the Cholas?», Proc. South Indian History Congress 33 (2013) s.19-21 (yalnız künye çekildi, metin okunmadı) | Yıl 1025 (Rajendra); Coedès bölüm metni bu oturumda okunmadı → "doğrulanmadı" |
Merkez kayması Palembang→Jambi: Coedès/WebSearch: 11. yy; Çin Sanfoqi 1025 sonrası Jambi (WebSearch, ikincil — kaynak kullanılmadı). Kesin gün/yıl ERİŞİLEMEDİ.

## c) Kronoloji
Evren içi VAR:
- 0682-04-23 Kedukan Bukit: `data/olaylar_ortacag_dogu_guneydogu_asya.js:12`; ayrıca `data/kronoloji_sinir_amerika_afrika3_1024.js:7` ✓.
- 0686-02-28 Srivicaya yazıtı (Kota Kapur): `kronoloji_sinir_amerika_afrika3_1024.js:8`; 0942 / 0960 / 0992 `:9-11`.
- 0689-01-01 Malayu (Jambi) Srivijaya'ya katıldı: `data/olaylar_ortacag_bekleyen_acik.js:7`; 0775-01-01 Ligor stelı: `:19` + `olaylar_ortacag_dogu...` benzeri.
- 1025-01-01 Çola seferi: `olaylar_ortacag_dogu_guneydogu_asya.js:24`.
- Künye içi (EVREN DIŞI, `data/devletler.js:11357-11372`): 0683 kuruluş (YANLIŞ yıl), 0775, 1005, 1017, 1025 ×2, 1275 son — sayılmaz.
Eksik (öneri):
```
{ t:"1275-01-01", b:"Singasari'nin Pamalayu seferi Melayu'yu (Jambi) Cava üstünlüğüne soktu; Boğazların hâkimiyeti Srivicaya mirasçısından alındı", yer_id:"Jambi", kaynak:"Coedès 1968 (Kritanagara, 1275 seferi)" }
```
(evren içinde 1275 maddesi yalnız künye içinde; ayrı evren maddesi yok → eklenmeli.) Ayrıca kaydedilmeli: 1286 Padang Roco/Amoghapasa heykeli (Dharmasraya) — Coedès'te geçer, yıl bu oturumda okunmadı.

## d) Harita uyumu
- AÇIK 0 (kırılma 4: f 0683, Ligor katılım, 1230 NST ayrılış, 1275).
- Yerleşim sayısı **2**: haritada görünürlük zayıf. Nakhon Si Thammarat s: 0775-01-01 → 1230-01-01 Coedès Ligor yazıtına dayanıyor (✓ yerleşim sahipliği tutarlı); Jambi: s: ilk dönem Kantoli (500-519), 519-644 BOŞLUK, sonra srivijaya (644?/689?-?) — dökümü kısmen okudum.
- **Palembang**: s: yalnız `1281 → palembang-sultanligi` (`data/yerlesimler_asya.js:4084`, yer_yama_1923_1945.js:2081 aynı). Srivijaya'nın başkenti 682-1281 haritada sahipsiz/ufuk dışı — Değişmez 1/3 uyarısı: Palembang dönem eklenmeli.
- Eklenmesi gereken s: dönemleri (kaynak okundu): Palembang 0682-04-23 → ~1025/Jambi kayması → 1275 (beyanlı yaklaşıklık: Coedès "Srivijaya başkenti"; sonrası "Melayu/Jambi"); Kedah (Kadaram) 1025 baskınında Srivijaya bağlısı (atlas kedah-kadaram boyası zaten 500-1281 — Çola'ya karşı ayrı devlet mi bağlı mı: beyan gerekir); Lampung (s: 1281'den), Bangka (Kota Kapur 686 yazıtı Bangka'da: yerleşim yok), Palembang çevresi, Chaiya (Surat Thani), Kelantan/Terengganu (hepsi 1281'den s:) — ufuk 500-1281 bantları var ama Srivijaya'ya bağlı değil.
- Hiçbir yerleşim bilinen sınırın dışında Srivijaya'ymış gibi görünmüyor (yalnız 2 yerleşim).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:11357` srivijaya: `f:"0682-04-23"`, `ic_not_f` düzelt (682, Jülyen; Coedès). Etki: Jambi/Palembang s: f'leri; `kronoloji_sinir_amerika_afrika3_1024.js:7` zaten 0682-04-23 → tutarlı hale gelir. Değişmez 2: künye ucu ile madde artık çakışır.
2. Palembang ve (varsa) Bangka/Lampung/Kedah/Jambi için srivijaya `s:` dönemleri (Coedès kaynaklı, beyanlı yaklaşıklık).
3. Evren-içi 1275 maddesi.
4. t 1275 için ikinci bağımsız akademik kaynak bulunana kadar `ic_not_t` "tek kaynak (Coedès)" beyanı.
5. Künyeye `harita:"srivijaya"` (BOYALAR'da id var; alan boş — beyan eksikliği? ölçülmedi).

## Erişilemeyen kaynaklar
- K. R. Hall, *A History of Early Southeast Asia* (Rowman & Littlefield 2011), Palembang/Jambi bölümü — «Merkez Palembang'dan Jambi'ye hangi yıl kaydı, Srivijaya'nın son bağımsız elçiliği hangi yıl?»
- O. W. Wolters, *Early Indonesian Commerce* (Cornell 1967) / *The Fall of Śrīvijaya in Malay History* (1970): «Srivijaya'nın çöküş tarihi 1275, 1288 mi 1397 mi?»
- Nilakanta Sastri, *The Cholas* / *Chola-Srivijaya*: 1017 ve 1025 baskınlarının yılları.
- Britannica 403. TDV: «endonezya maddesi Srivicaya'yı ANMIYOR (ölçüldü)» — künye notu; ayrı 'srivicaya/sumatra' araması bu oturumda yapılmadı.
- Coedès bölüm IX ve VII-VIII sayfa numaraları (djvu metinde sayfa yok): sayfa gerekiyorsa baskı elinde okunmalı.
