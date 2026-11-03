# 17 · Maurya İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (saat kaydedilmedi)

## Özet
- Künye: 1 (`maurya`); komşu zincir künyeleri `nanda` (t=-0323), `sunga` (f=-0186), `magadha` (t=-0323) var. Eksik künye yok.
- Ölçer: kırılma günü 2, açık kırılma 0 (ikisi de `kronoloji_sinir_asya_zincir_1024.js` maddeleriyle kapalı).
- **Harita: yalnız 1 yerleşim (Patna) Maurya'ya ait.** 137 yıllık imparatorluk haritada tek noktadır. Atlasın kendi -0304 antlaşma maddesi (Kandehar, Kâbil, Taksila Maurya'ya geçti) haritaya yansımıyor.
- En ağır 3 bulgu:
  1. **f/t kaynak çelişkisi, TDV esas ilkesi uygulanmamış:** atlas f=-0323 (MÖ 324), t=-0186 (MÖ 187) = Majumdar. TDV `hindistan` (Azmi Özcan) MÖ 321 ve MÖ 185 der; Rapson CHI I ve Coningham-Young (Cambridge) de 321 civarı. Evrenin kendisi iki değer taşıyor (`-0323` ve `-0320`; `-0186` ve `-0183`).
  2. Haritada Maurya yalnız Patna; Taksila, Kâbil, Kandehar, Peşâver, Uccayn, Vidisha, Cûnâgadh için `s: maurya` dönemi eksik.
  3. Künye içi `kronoloji[]` -0304 antlaşma maddesinin `odak_yer`i "Üstyurt platosu" (Kazakistan) — yanlış yer.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| maurya | Maurya Imparatorlugu | -0323-01-01 | -0186-01-01 | ana künye; kaynak alanı yalnız bölüm başlığı (Cambridge, Coningham-Young), ic_not'ta beyanlı |
| nanda | Nanda Hanedanı (Magadha) | -0363-01-01 | -0323-01-01 | öncül; t Maurya f'ye bağlı |
| sunga | Sunga Hanedani | -0186-01-01 | -0074-01-01 | ardıl; f Maurya t'ye bağlı |
| magadha | Magadha (Haryanka-Sisunaga-Nanda) | -0543-01-01 | -0323-01-01 | öncül zincir |
Eksik evre yok (Maurya tek hanedan). Bölge kayıpları (Aşoka sonrası Baktriya/Kalinga) künye ayrımı gerektirmez.

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Kaynak 3 | Hüküm |
|---|---|---|---|---|---|
| f (Chandragupta, Nanda'nın devrilmesi) | -0323-01-01 (MÖ 324) | TDV `hindistan`, III. Tarih (Azmi Özcan): «milâttan önce 321'de Maurya Krallığı'nı kurdu» | Rapson, CHI vol. I (1922), arkeoloji madde tablosu: «Chandragupta 321-297 b.c.» (atlas `olaylar_arkeoloji_d3-hint-cin.js`ta alıntılı; kitabın kendi sayfasını bu oturumda doğrudan okuyamadım) ve CHI I Bölüm VI okunan kısım: Jainler Chandragupta'yı 313 (312) verir, «eight years later than the Buddhists» ⇒ Budist hesap 321 | Majumdar HCIP II (atlas ic_not'a göre okunmuş): MÖ 324; Coningham-Young (Cambridge UP): c. 321–185 | **-0320-01-01 (MÖ 321).** TDV esas + 2 bağımsız akademik kaynak. Majumdar 324 azınlık görüşü, ic_not'ta beyan |
| t (Brihadratha / Pushyamitra) | -0186-01-01 (MÖ 187) | TDV `hindistan`: «milâttan önce 185'te tamamen yok oldu» | Coningham-Young c. 321–185; Rapson CHI I «c. 184 B.C.» (137 yıl) | Majumdar HCIP II s.95: c. 187 | TDV 185 ⇒ **-0184-01-01 (MÖ 185).** Rapson 184 (⇒ -0183) ve Majumdar 187 (⇒ -0186) ic_not'ta beyan |
| Aşoka | (künye kronolojisinde -0267 tahta çıkış) | TDV `hindistan`: Aşoka «(m.ö. 273-237)» | Majumdar: c. 273-236; Rapson: katılım ≤274, ölüm 237/236 | Britannica (dayanak değil): 268-232 | Evre sınırı değil; madde yeri için TDV/Majumdar/Rapson uyumlu (-0272 civarı). Künye-içi `-0267 (MÖ 268)` maddesi Britannica'ya dayanır ⇒ düzelt |

Astronomik yıl dönüşümü: MÖ 321 → -0320; MÖ 185 → -0184; MÖ 184 → -0183.
Çelişki beyanı (öneri `ic_not`): «TDV hindistan: 321-185; Majumdar HCIP II: 324-187; Rapson CHI I: 321/184; Jain geleneği Chandragupta 313. TDV esas alındı.»

**Zincir sonucu:** f/t değişirse aynı kayıtta şunlar da değişmeli (yoksa Değişmez 1/2 ve dönem çakışması bozulur): `nanda` t, `magadha` t, `sunga` f, Patna'nın `s:` sınırları (Nanda→Maurya -0323→-0320; Maurya→Sunga -0186→-0184), Vidisha `s: sunga` f, `kronoloji_sinir_asya_zincir_1024.js` satır 16 ve 40 maddeleri, `olaylar_arkeoloji_d3-hint-cin.js` -0183 maddesi (c. 184'ten TDV 185'e).

## c) Kronoloji
Değişmez 2 evreninde (olaylar*, kronoloji_sinir*):
| Madde | Dosya:satır | Durum |
|---|---|---|
| Chandragupta, Nanda'yı devirdi, t -0323 | `kronoloji_sinir_asya_zincir_1024.js:16` | Majumdar'a dayalı; TDV ile çelişir ⇒ -0320 |
| Chandragupta dönemi başlar, t -0320 | `olaylar_arkeoloji_d3-hint-cin.js` (~satır 56-66, Rapson CHI I) | TDV ile uyumlu; yukarıdakiyle **aynı olay iki tarihli** |
| Seleukos-Chandragupta antlaşması, t -0304 | `olaylar_antik_yakin_dogu.js:22` | odak_yer Kandehar, Kâbil, Taksila — **haritada karşılığı yok** (bkz. d) |
| Bindusara tahta çıkışı c. MÖ 300 | `kronoloji_sinir_asya3_1024.js:22` (-0299) | Majumdar; künye-içi kronolojide -0296 (Britannica). TDV `peşâver`: Chandragupta ö. m.ö. 296 ⇒ Bindusara -0295 civarı. İki kaynak 300 / 297 verir; evrendeki -0299 'onyıl' hassasiyetiyle kalabilir |
| Aşoka tahta çıkışı c. MÖ 273 / ölümü c. 236 | `kronoloji_sinir_asya3_1024.js:23-24`; `olaylar_arkeoloji_d3-hint-cin.js` | TDV 273-237 ile uyumlu |
| Maurya sona erer, t -0186 | `kronoloji_sinir_asya_zincir_1024.js:40` | Majumdar 187; TDV 185 ⇒ -0184 |
| Maurya sona erer, t -0183 | `olaylar_arkeoloji_d3-hint-cin.js:5-16` (Rapson 184) | **aynı olay, farklı tarih** |
Eksik maddeler (öneri; kaynak okunmadı olanlar işaretli):
- Kalinga fethi (Aşoka): evrende yok, yalnız künye-içi `-0260`. Öneri: `{ t:"-0261-01-01", kesinlik:"yil", b:"Aşoka Kalinga'yı fethetti (XIII. Kaya Fermanı)", yer_id:"Kalinganagara", kaynak:"Rapson CHI I Aşoka kronolojisi: «conquest of Kalinga 262 b.c. at latest»; Majumdar HCIP II" }` — Rapson ≤262 (⇒ -0261), künye-içi Britannica 261 (⇒ -0260); TDV günü/yılı vermiyor.
- Baktriya/Gedrosya devri: -0304 madde var (haritaya yansıtılmalı, d).
Başkent değişimi yok (Pataliputra).

## d) Harita uyumu
Ölçer: harita ömrü -323 → -186 (künyeyle uyumlu), 1 yerleşim, her 6 yılda aynı sayı (1), kırılma 2, AÇIK 0.
**Yerleşim sayısı pratik olarak sıfır (1) — "haritada görünmüyor" sınıfı.** Aşağıdaki mevcut yerleşim kayıtları Maurya dönemi için boş (`s:[]` veya o yıl aralığı yok). Hepsinin kaynağı Majumdar HCIP II/TDV; ben yalnız aday listesi veriyorum, kaynak sayfaları okunmadı (ERİŞİLEMEYEN bölümüne yazıldı):
| Yerleşim | Mevcut `s:` (-0323…-0186) | Öneri | Gerekçe |
|---|---|---|---|
| Taksila (Taxila) | yalnız gandhara-mahajanapada -0549…-0517 | `s: maurya` f=-0320(~) t=-0184 | atlas -0304 madde odak_yer; Majumdar: Taxila Maurya valiliği |
| Kâbil | `[]` (ilk dilim 0500 BOŞLUK) | `s: maurya` f=-0304 (antlaşma, kesinlik onyil); t kaynakta okunmadı (Hindukuş/Baktriya kaybı Aşoka sonrası) ⇒ t için beyanlı BOŞLUK | -0304 madde: Paropamisadai Maurya'ya bırakıldı. Kâbil'in Maurya'da kalış sonu kaynakta okunmadı ⇒ beyanlı BOŞLUK |
| Kandehar / Eski Kandehar | `[]` | `s: maurya` f=-0304 | -0304 madde: Arakosya Maurya'ya; Aşoka'nın Kandehar çift dilli fermanları (kaynak okunmadı) |
| Peşâver | ilk dilim 0078 Kuşan | `s: maurya` | Şahbâzgarhî fermanı bölgede; TDV `peşâver`: Seleukos bölgeyi Chandragupta'ya «terketti (ö. m.ö. 296)» |
| Uccayn (Ujjain) | ilk dilim 0140 Saka | `s: maurya` | Aşoka valiliği (kaynak okunmadı) |
| Vidisha | -0186 Sunga'dan başlar | Maurya öncesi dilim | Sunga f ile birlikte |
| Cûnâgadh (Girnar) | 1281 racput'tan başlar | `s: maurya` | Girnar fermanı, Saurashtra valiliği (kaynak okunmadı) |
| Kalinganagara (Mukhalingam) | `s:[]` | Kalinga fethi -0261'e dek bağımsız, sonra maurya | Rapson ≤262; yer Kalinga'nın başkenti mi, Aşoka çağında mı, kaynak yok ⇒ bekletilmeli |
Madde var, harita yok: `olaylar_antik_yakin_dogu.js:22` -0304 antlaşması (Kandehar, Kâbil, Taksila) — madde `toprak devri` diyor, üç noktanın hiçbirinde sahip değişmiyor.
En geniş yıl (-323..-191 sabit 1 yerleşim): sahiplik doğrulaması anlamsız (tek nokta Patna, doğru).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `maurya`: `f:"-0320-01-01"`, `t:"-0184-01-01"`; `ic_not`a: «TDV hindistan (A. Özcan): 321-185; Rapson CHI I: 321-297/184; Majumdar HCIP II: 324-187; Jain 313. TDV esas.» `kaynak:`a TDV `hindistan` eklenir.
2. Zincir (aynı commit): `nanda` t=-0320; `magadha` t=-0320; `sunga` f=-0184; Patna ve Vidisha `s:` sınırları; `kronoloji_sinir_asya_zincir_1024.js` satır 16 (-0323→-0320) ve 40 (-0186→-0184, taraflar maurya/sunga kalır); `olaylar_arkeoloji_d3-hint-cin.js` Maurya sonu -0183→-0184 (veya ic_not'ta 184 farkı beyan).
3. Künye içi `kronoloji[]` -0304 antlaşma maddesi `odak_yer:["Üstyurt platosu"]` → `["Kandehar","Kâbil","Taksila (Taxila)"]`.
4. `data/yerlesimler_once1281_yt_iran_orta_asya.js` Taksila: `{f:"-0320-01-01",t:"-0184-01-01",d:"maurya",kesinlik:{f:"onyil",t:"onyil"},kaynak:"…"}`; Kâbil ve Kandehar için -0304 antlaşması (kesinlik "onyil") + beyanlı BOŞLUK; Peşâver, Uccayn, Cûnâgadh benzer. Kaynak yazılmadan eklenmemeli.
5. Künye `kaynak:` alanı bölüm başlığı yerine TDV `hindistan` (okunmuş) olur.

## Erişilemeyen kaynaklar
- Majumdar HCIP II (archive.org ageofimperialuni07bhar) sayfa 59-60, 90, 95: atlas ic_not "tam metin okundu" diyor; bu oturumda doğrulanmadı. Soru: Chandragupta 324 ve Pushyamitra 187 yıl tabloları hangi sayfa?
- Rapson CHI vol. I (archive.org cambridgehistory01raps) Maurya bölümü (Bölüm XVI-XVIII): bu oturumda okunan 100000-200000 ve 400000-600000 karakterlerinde Maurya tarihleri yoktu (Vedik/Jain bölümleri). Soru: «Chandragupta 321-297; Aşoka 274-237; dynasty c.184» tablosunun sayfası.
- Coningham & Young, «The Mauryans and the Asokan Ideal (c. 321–185 BCE)», Archaeology of South Asia (CUP 2015) Bölüm 11: yalnız başlık okundu; gövde kapalı. Soru: 321 ve 185'i yazar kendi mi söylüyor?
- Thapar, Asoka and the Decline of the Mauryas (OUP 1961): erişilemedi. Soru: Chandragupta/Aşoka/son kral kronolojisi bölümü.
- Aşoka fermanlarının yer listesi (Kandehar, Şahbâzgarhî, Girnar, Dhauli): kaynak okunmadı.
- TDV `hindistan` yalnız 0-100000. karakter okundu; Bindusara/Seleukos antlaşması bölümü kalan metinde olabilir.

## Iranica / Oxford Reference teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Cambridge History of India I (Rapson): Cambridge Core'da tam metin yok, okunmadı. **Koordinatör hükmü:** TDV `hindistan` 321/185 esas ⇒ f `-0320-01-01`, t `-0184-01-01`; `ic_not`ta 'ikinci bağımsız akademik kaynak bulunamadı; Majumdar 324/187' beyanı.
