# 69 · Medya (Med) Krallığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py yeni-babil medya ptolemai`)

## Özet
- Künye 1 (`medya`, devletler.js:20870). İlgili ama ayrı polity: `atropatene` (Med Atropatene, -0320 → 226) — mükerrer değil. `--ara med` ve `medya` → başka Med künyesi yok.
- Ölçer: kırılma günü 2, **açık 0**, yalnız otomatik "dönem ucu" maddesiyle kapanan 1 (-0677-01-01). "Harita anahtarı" uyarısı yok.
- En ağır 3 bulgu:
  1. **Haritada tek nokta: Hemedan (Ekbatana).** Med "imparatorluğu" (614-550) için tek yerleşim; Aşşur/Ninova çevresi, Rey (Ragai), Ganzak vb. yok → harita Medya'yı bir noktadan ibaret gösteriyor (komşu peteklere emilme).
  2. **f belirsizliği beyanlı ama kesinlik fazla dar:** Iranica -678 (onyıl) · TDV Hemedan "Deiokes 728-673; Ekbatana MÖ VII. yy'da kuruldu" · Frye (NCE): Cyaxares imparatorluğun kurucusu (~625) · kuruluş birleşik devlet kanıtı 615'e kadar zayıf (Livius). Önerilen: `kesinlik.f` "onyil" → "yuzyil" + çelişki beyanı.
  3. **t -0549-01-01 yıl-başı:** kaynak "550/549, Nabonid 6. yıl" (ABC 7); TDV İran "550" der; yıl-başına inen -0549 kabul (MÖ 550 → -0549 ✓) ama gün yok; doğru ve beyanlı.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| medya | Medya (Med) Krallığı | -0677-01-01 | -0549-01-01 | TAMAM |
| atropatene | Atropatene (Med Atropatene) | -0320 | 0226 | ardıl-bölge, ayrı polity; Med künyesiyle ilişki yok |
| ahamenis | Ahamenis (Pers) | -0549-01-01 | -0329-01-01 | ardıl; f = medya t (örtüşmüyor) |
Eksik parça: yok. (Skit hâkimiyeti 652-625 Herodotos geleneği; Cyaxares öncesi Med "boşluk" `__BOSLUK__` -0699..-0677 Hemedan'da beyanlı.)

## b) f/t ve evreler
**f (-0677-01-01, onyıl)**
- Kaynak 1: Encyclopaedia Iranica "MEDIA" (Dandamayev & Medvedskaya) — atlas alıntısı «the rise should be dated in the year 678» (**bu turda açılamadı: 403**; atlas kaydından).
- Kaynak 2: TDV İslâm Ans., "Hemedan" (okundu) — Ekbatana, Deiokes (728-673) tarafından «VII. yüzyılda Med İmparatorluğu'nun başşehri olarak kurulmuştur». TDV "İran" maddesi (okundu): Medler Asur'u Bâbilliler'le çökerttiler; «Astyages döneminde (m.ö. 580-550) çökmeye başladılar»; «Milâttan önce 550'de Medler'in başşehri Ekbatana'yı işgal etti».
- Kaynak 3: R. N. Frye, "Medes", *New Catholic Encyclopedia* (Gale; encyclopedia.com'da okundu): ikinci yarı 8. yy konfederasyon (Deioces); 7. yy Phraortes; Cyaxares "founder of the Median empire"; 614 Aššur, 612 Nineveh (Nabopolassar'la), 585 Halys; **549** Astyages yenildi.
- Kaynak 4 (yol gösterici/birincil): Livius "Astyages" (okundu): Cyaxares 614'te kral; Astyages 585/584-550/549 (Nabonid 6. yıl, 10 Mart 550 – 28 Mart 549); «Herodotus lists four Median kings ... suspicious»; Grayson ABC 7 (Livius çevirisi okundu) — «Cyrus <marched> to Ecbatana, the royal city.»
- Hüküm: Çelişki bir **tür** çelişkisi değil, tanım çelişkisi (Herodotos 150 yıl / 728, Iranica 678, Cyaxares 625, "birleşik devlet ancak 615'te belgeli"). TDV (esas) Ekbatana'nın başşehir olarak kuruluşunu "MÖ VII. yy" der: -0677 bu yüzyıl içinde → **TDV ile çelişmez**. f değeri korunabilir, fakat onyıl kesinliği fazla iddialı.
- Önerilen: `f:"-0677-01-01"` kalsın; `kesinlik:{f:"yuzyil", t:"yil"}`; `ic_not_f` iki kaynağıyla: "Iranica 678 (Phraortes) · TDV Hemedan: Ekbatana MÖ VII. yy · NCE (Frye): Cyaxares ≈625 imparatorluğun kurucusu · belgeli birleşik devlet 614 (ABC 3)". (Not: Atlas kendi `ic_not`unda bu kronolojileri beyan ediyor; yalnız kesinlik güncellemesi.)
- Alternatif (Emre kararı): f'yi Cyaxares'a çekmek (-0624-01-01, Livius 625/624; olaylar:68). Bu "Medya haritada Hemedan'ı 53 yıl geç alır". Çelişkide TDV esas kuralı gereği TDV'nin "MÖ VII. yy" ifadesini aşmayan her f kabul.

**t (-0549-01-01, yıl)**
- Kaynak 1: TDV İran — «m.ö. 550'de ... Ekbatana'yı işgal etti». Kaynak 2: Grayson ABC 7 (Nabonid 6. yıl = 550/549; Livius). Kaynak 3: Frye NCE «549 BC».
- Hüküm: ±1 yıl belirsizlik kaynakların kendisinde (550 vs 549): MÖ 550 → -0549 ✓, MÖ 549 → -0548. Mevcut -0549 seçimi TDV + ABC 7'nin ilk yarısı (Nabonid yılı Nisan 550 – Mart 549 → 550/549). Doğru, beyanlı; **çift teyit** yazılabilir (TDV + ABC 7).
- `ic_not`'a eklenecek: "ABC 7 kendi başına gün taşımaz (Nabonid yıl 6, ay okunmadı)". Atropatene ayrı.
Evre: Medya tek evre; Cyaxares/Astyages "iki evre" bölmesi gerekmez (kaynaklar kral listesini şüpheli sayıyor).

## c) Kronoloji
Var:
- olaylar_antik_yakin_dogu.js:68 Kyaksares tahta -0624 (MÖ 625; Livius 625/624) ✓.
- :67 Kyaksares–Nabopolassar ittifakı -0613 (MÖ 614) ✓ (ABC 3 12. yıl).
- olaylar_arkeoloji_mezopotamya.js:8 Ninova -0611 (MÖ 612) ✓ (Med + Babil).
- :58 Halys/Tutulma Savaşı -0584-01-01 (MÖ 585; 28 veya 30 Mayıs; Livius 30 Mayıs).
- olaylar_arkeoloji_afrika-iran.js:36 Ekbatana'nın Kyros'a geçişi -0549-01-01 yıl (MÖ 550) ✓ — **ölçerin t kapanışı bu**; ABC 7 col. ii okundu.
- olaylar_arkeoloji_zincir.js:243 Ekbatana/Hemedan sahipsiz → Medya -0677-01-01 (otomatik "dönem ucu" maddesi: gerçek olay sayılmaz).
- olaylar_antik_yakin_dogu.js:42, :44-45: Fravartiş (Medya isyanı, Behistun) -0520-05-08 vs :44 Gaumata -0521-03-11 — Medya sonrası; kapsam dışı ama Medya'nın Ahameniş altında adının yaşadığını gösterir (kronolojik kontrol: "-0520-05-08 MÖ 521 Adukanaiša" ✓ astronomik).
Eksik (öneri):
1. **Skit hâkimiyeti 652-625 / Kyaksares'in Skitleri yenmesi** (Herodotos 1.103-106; Labat düzeltmesi: 28 yıl Kyaksares saltanatına sayılır) — yok. Kaynak açılmadı: Perseus Herodotos çekilemedi (302 yönlendirme).
2. **Halys günü**: `-0584-05-28/30` gün kesinliği (Jülyen; Livius iki gün veriyor, çatışma `ic_not`ta beyan) — yıl kesinliğinde bırakılması yasak değil; gün isteniyorsa beyanla.
3. **Med–Lidya savaşı (590-585)** başlangıcı yok.
4. **Kyros'un Astyages'e karşı ayaklanması (553)** yok: Nabonid kroniği kırık yıl; kaynak okunmadı.
5. **Astyages'in tahta çıkışı ~585/584** (Livius) yok.
Evren dışı: künyenin `kronoloji:[...]` maddeleri var.

## d) Harita uyumu
- Ölçer: kırılma günü 2 (-0677-01-01 otomatik; -0549-01-01 gerçek madde) → açık 0 + otomatik 1.
- En geniş an: 1 yerleşim (Hemedan) tüm 128 yılda. Değişmez 2 sağlanıyor ama **harita Medya'yı hiç gösteremiyor**.
- Kaynakla Med alanı (Herodotos 1.103-130; Livius): Ekbatana merkezli İran platosu; Asur'un doğu kısmı/yukarı Dicle (Aşşur 614'te Med), Urartu çöküşünden (MÖ ~600; atlas olaylar:62) sonra Doğu Anadolu/Ermenistan, Halys sınırı. **Hiçbiri kaynak okunarak yerleşime bağlanmadı**; Med kapsamı bilimsel olarak tartışmalı (Stronach: 615 öncesi birleşik devlet yok).

| Gün/aralık | Yerleşim | Öneri |
|---|---|---|
| -0613 → -0549 | Aşşur (şimdi -0613'ten sonra sahipsiz) | Aşşur'un Med eline geçişi 614 (ABC 3 «destroyed it»): Med Aşşur'u yıktı → sahibi Med mi Babil mi: **boşluk merdiveni ⑤ gerekli** — ABC 3 yorumu: Aşşur'u yıkan Med; sonraki mülkiyet kaynakta belirsiz → beyanlı yaklaşıklık |
| -0613 → -0549 | Ninova (-0611 sonrası sahipsiz) | Ninova alınan şehir, sonra sahip belirsiz; Babil-Med paylaşımı (CAH III.2 Wiseman; Diakonoff CAH II/IV) → ERİŞİLEMEYEN |
| -0549 | Hemedan | f Ahameniş f ile aynı gün (-0549-01-01) ✓ |
| Rey (Ragai), Ganzak, Hegmatana çevresi | atlasta Rey/Ganzak `s:` yok (ölçülmedi: yalnız Hemedan sorgulandı) | Rey: Iranica "Ray" / Behistun metni; Ganzak: Atropatene kaydı var (-0320) |
- Ölçülemedi: petek boyası/motor çıktısı.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:20870` medya: `kesinlik:{f:"yuzyil",t:"yil"}`; `ic_not_f`'ye TDV Hemedan «VII. yüzyıl» + Frye NCE «Cyaxares founder» + Livius «614'te kral, birleşik devlet 615 öncesi belgesiz» ekle; `ic_not_t`: "çift teyit: TDV İran 550 + Grayson ABC 7 yıl 6 (550/549)".
2. `data/yerlesimler.js:850` Hemedan medya dönemi kesinlik f "onyil" → "yuzyil" (künye ile uyum).
3. Aşşur/Ninova: -0613/-0611'den sonra sahip için ABC 3/ABC 4 (Babil) ve Med paylaşımı kaynakla incele; geçici beyan: "sahibi kaynakta belirsiz; Babil/Med" (BOSLUK değil beyanlı yaklaşıklık değil: kaynak okunmadı).
4. Kronoloji: Skit/Kyaksares maddesi ve Halys günü eklenmesi isteniyorsa kaynağı açıldıktan sonra.
5. Mükerrer: yok.

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica "MEDIA" (Dandamayev & Medvedskaya) — https://iranicaonline.org/articles/media/ — 403. Soru: "678" hangi kral/olay için (Phraortes birleşme mi, isyan mı)?
- Diakonoff, I. M., "Media", CAH II (1985) 36-148 (JSTOR/Cambridge). Soru: Cyaxares'in Asur'un hangi toprağını aldığı (614-612), Med-Babil paylaşımı.
- Brown, S. C., "Ecbatana", Iranica VIII/1 (1997). Soru: Deiokes'e atfedilen kuruluş arkeolojik doğrulanıyor mu.
- Perseus, Herodotos 1.95-130 — yönlendirme 302; soru: Kyaksares 40 yıl, Astyages 35 yıl rakamları (Livius yalnız "şüpheli" diyor).
- Britannica "Media" — 403.
- Labat 1949 / Grantovskij, Stronach (Pasargadae) — "birleşik Med devleti 615 öncesi yok" cümlesinin tam künyesi (web yansımasında okundu; dayanak değil).
