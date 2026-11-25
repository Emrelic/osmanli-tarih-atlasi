# BORÇ — İRAN ek okuma, AŞAMA 2 (25 Kasım 2026, UMIT umit21-osm5)

BORC-DEFTERI.md'ye aktarılacak (bu oturum depoya yazmadı). "Bulunamadı" ile "okunmadı/denenmedi" ayrı yazıldı.

## A. Okunamayan / okunmayan kaynaklar
1. **Encyclopaedia Iranica** — OKUNAMADI (aşama 1'de 5 madde 403). Bu aşamada yeniden DENENMEDİ. Etkisi: 8 kartın hiçbirinde yabancı akademik kaynak yok; Şah İsmail köken tartışması, Abbas'ın şehzadelere davranışı, Hasan Sabbâh efsanesi ikinci kaynaktan teyitsiz.
2. **TDV «Sâsânîler»** — çekildi ama araç yalnız kısa özet verdi; yazar, cilt, sayfa ALINAMADI. Kart 2 (Sâsânî çöküşü) bu yüzden zayıf; tam okuma gerekir.
3. **Pourshariati, *Decline and Fall of the Sasanian Empire* (2008)** — OKUNMADI (denenmedi). Kart 2'nin ikinci görüşü bu yüzden adıyla verilemedi.
4. **Daftary, *The Assassin Legends* (1994)** — OKUNMADI (denenmedi). Haşhaş/esrar-cennet efsanesi kartı yazılamadı.
5. **İbrahim Kafesoğlu** (Melikşah mektubunun uydurma olduğu görüşü) — kendi eseri OKUNMADI; yalnız TDV aktarımı.
6. **Humeynî / velâyet-i fakih eleştirileri** (Hûî vb.) — ikinci kaynak OKUNMADI; TDV bu itirazları anlatmıyor (araç).
7. Bütün TDV maddeleri **araç özetiyle** okundu (WebFetch); hiçbiri tam metin/basılı sayfa düzeyinde okunmadı. Basılı s. numaraları aracın verdiği künyedir.

## B. Teyit edilemeyen veri
8. **Humeynî velâyet-i fakih dersleri yılı:** araç iki çekimde 1969 ve 1970 verdi → kartta yıl yazılmadı.
9. **I. Abbas ölüm yeri:** TDV özetinde yok → `olum_yer` boş (bulunamadı).
10. **I. Abbas lakap, eşler, çocuk sayısı, şehzadelere davranış:** okunan kaynakta yok → boş.
11. **Halef «Şah Safî» adı:** okunan özette yalnız «torunu Sam Mirza» → teyit gerek.
12. **Kâdisiye modern ordu tahminlerinin sahibi** (9-10 bin / 70-80 bin): TDV araştırmacı adı vermedi.
13. **Aşama 1 notu düzeltmesi:** EKOKUMA-IRAN-KONU.md aday 7'deki «TDV Hasan Sabbâh: haşhaş iddiası efsanedir notu» bu okumada DOĞRULANMADI — TDV hikâyeyi aktarır, çürütmez.

## C. Kronoloji / künye işine devir (ek okuma dalında yazılmaz)
14. **Şah İsmail tahta çıkışı:** TDV sah-ismail 907 (1502) baharı; atlas maddeleri (OLAYLAR_EK7, kronoloji_iran, künye safevi) 1501-07-01 — tarih çelişkisi, hakemli karar gerek.
15. **I. Abbas tahta çıkışı:** künye safevi içi madde 1587-01-01, ana maddeler 1587-10-01 (TDV: Ekim 1587).
16. Aynı olayın birden çok maddesi (1501-07-01 üç madde; 0651, 0627, 1124-05-23, 1587-10-01, 1629-01-19 ikişer) — mükerrer madde temizliği kronoloji işinin konusu.

## D. Altyapı (KASA / arayüz işi)
17. `EKOKUMA_DEVIRAN01` yükleyici listesine (`_EKOKUMA_DOSYA_ADLARI`) ve `index.html`e girmedi.
18. `KISI_IRAN` ve `HUKUMDAR_IRAN` arayüzde okunmuyor; ayrıca kayıtlara eklenen `olay` (bağ önerisi) ve `halef` alanları PADISAHLAR/KISILER şemasında yok — kabul edilip edilmeyeceği karar.
19. KISI_IRAN `tur` değerleri Osmanlı listesinden (yabanci-hukumdar, siyasi); İran dosyasında «yabanci» öneki anlam sorunu.
20. `_ekNorm` normalleştirmesi (ā/â/ı) okunmadı ve tarayıcıda sınanmadı; bağlar yalnız Grep ile sınandı. JS dosyaları node ile sözdizimi sınamasından GEÇİRİLMEDİ (görev gereği node/python koşturulmadı).

## E. Emre'den bekleyen karar
21. 8 kartın üslubu (aşama 3 seri üretimine geçiş onayı).
22. Kart 2 (Sâsânî çöküşü) TDV tam okununcaya kadar yayına alınsın mı?
