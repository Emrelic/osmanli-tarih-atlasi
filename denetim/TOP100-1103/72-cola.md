# 72 · Çola İmparatorluğu — TOP100-1103 denetimi
Ölçüm: worktree umit-1103-top100 (HEAD 14e8bb95c), 4 Kasım 2026; ölçer `top100_olc.py cola`.

## Özet
- Künye: 1 (`cola`, 0850-01-01 → 1279-01-01). Haritada **2 yerleşim kaydı** (haritada ömür 893 → 1279; her yılda 1-2 yerleşim). Açık kırılma: **0** (4 kırılma, hepsi karşılanmış; otomatik "dönem ucu kaydı" ile kapanan: 0).
- Eksik madde: 3. Ama asıl sorun **kapsama**: imparatorluğun başkenti Tancûr (Thanjavur) ve Madurai, Anuradhapura, Polonnaruva, Talakad, Gangaikondaçolapuram'ın hiçbirinde Çola sahipliği yok; haritada fiilen yalnız Kançipuram (893-1279) boyalı.
- En ağır 3 bulgu: (1) `cola` kaynağı encyclopedia.com (tek yayıncı ailesi) ve **TDV «Hindistan» hanedan listesi bitişi 1273 diyor, atlas 1279** — çelişki beyanlı değil; (2) Tancûr `s:` zinciri 1281'de başlıyor (Çola dönemi 850-1279 boş/delik), Madurai 920-1281 `__BOSLUK__`; (3) kuruluş maddesi (0850) `odak_yer: Kançipuram` — Kançipuram 893'e dek Pallava'dır; Vijayalaya'nın aldığı yer Tancavur.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| cola | Çola (Chola) İmparatorluğu | 0850-01-01 | 1279-01-01 | tek künye, BOYALAR'da var (renkler.py:4472); `harita:` yok; `boya_gerekli:true` |
Öteki ilgili künyeler (ayrı devlet, bu denetimin dışı): pallava, pandya-1, pandya, bati-ganga, hoysala. Eksik evre yok (Çola tek hanedan: Vijayalaya soyu 850-1070, Kulottunga/Çalukya-Çola soyu 1070-1279; HCIP IV/V «extinction of the Vijayalaya line» 1070 hanedan değişimi, devlet sürer → künye bölünmesi gerekmez).

## b) f/t ve evreler
**f = 0850-01-01**
- Kaynak 1: R. C. Majumdar (ed.), HCIP IV «The Age of Imperial Kanauj» (Bhavan, Bombay 1955), s.153, «Cholas of Tanjore» (archive.org ageofimperialkan04bhar, tam metin okundu): Vijayalaya «may be assigned to the period, c. A.D. 850-871» ve Tancavur'u Muttaraiyar'dan aldı.
- Kaynak 2: TDV «Hindistan» (islamansiklopedisi.org.tr/hindistan, hanedan listesi): «Thanjavur Çolaları (Tamil Nadu, 850-1273)» — başlangıç 850.
- Hüküm: ÇİFT TEYİT, ama "yaklaşık" (c. 850). f=0850-01-01 kabul. Gün/ay yok.
**t = 1279-01-01**
- Kaynak 1: HCIP V «The Struggle for Empire» (1957; archive.org struggleforempir05bhar, okundu): «Rajendra III (A.D. 1246-1279)… Rajendra's political position was consequently that of a Pandyan feudatory from about A.D. 1258 to 1279»; Pandya Maravarman Kulasekhara 1279'da Rajendra III ve Hoysala Ramanatha'yı yendi.
- Kaynak 2: encyclopedia.com «Chola Dynasty» («ended in 1279»; künyede) — AYNI yayıncı ailesinin iki maddesi bağımsız sayılmaz (künye ic_not'u da der). Karşı kaynak: **TDV «Hindistan»: 850-1273**.
- Hüküm: ÇELİŞKİ. 1279 (HCIP V, Rajendra III'ün son yılı) ↔ 1273 (TDV listesi). CLAUDE.md "TDV çelişkide esastır": TDV listesi yalnız yıl veriyor, gerekçe/olay vermiyor; HCIP V ise Rajendra III'ün hüküm yılları ve 1279 savaşını veriyor. Öneri: t=1279-01-01 kalsın, `ic_not_t`a «TDV Hindistan listesi 1273 verir; karar: 1279 (HCIP V, Rajendra III hükümdarlığının sonu); Pandya vasallığı fiilen 1258'den itibaren» yazılsın — ama bu TDV'ye karşı karar olduğundan **KASA/Emre onayı** gerekir.
**Evreler:** Pallava'dan devralma c.893 (Aditya I, Tondamandalam: HCIP IV s.157-158 «about A.D. 893»); Pandya Madurai'sinin alınışı c.920 (Parantaka I; HCIP IV: «expulsion of Rajasimha about A.D. 920»); zirve Rajaraja I (985) – Rajendra I (1014-1044; Gangaikondaçolapuram yeni başkent, HCIP V s. ~Bengal seferi sonrası); Pandya vasallığı c.1258; son 1279.

## c) Kronoloji
Evrende (Değişmez 2) VAR:
- `kronoloji_sinir_asya_zincir_1024.js:91` 0893 Aditya I Kançipuram/Tondamandalam; `:93` 0920 Madurai Pandya'dan çıktı; `:103` 1004 Talakad Çola'ya geçti.
- `olaylar_ortacag_dogu_guneydogu_asya.js:24` 1025 Rajendra I'in Srivicaya deniz seferi.
- `kronoloji_sinir_dogu_500_1281.js:4844/4858` Polonnaruva Çolalardan Sinhala'ya (c.1070); `kronoloji_sinir_once1281_geriye.js:402` 1279 Kançipuram: Çola hâkimiyeti sona erdi («devralan kaynakta belirsiz»).
Evren dışı (künye içi `kronoloji:` devletler.js:12350-…): 0850 kuruluş, 0907 Parantaka I, 0985 Rajaraja I, 0993 Anuradhapura, 1010 Brihadisvara, 1014 Rajendra I, 1021 Bengal, 1025 Kedah; bunların bazıları kaynak olarak Wikipedia gösteriyor (dayanak olamaz).
Düzeltmeler / eksikler:
1. `kronoloji_sinir_once1281_geriye.js:402` 1279 maddesi "devralan belirsiz" diyor; HCIP V: Pandya Maravarman Kulasekhara Rajendra III'ü yendi (1279). Madde metni "Pandya fethi/vasallığı" ile güncellenmeli (kaynak: HCIP V; gün yok).
2. Madde 1004 Talakad: HCIP V (Hoysala bölümü, Talakad s.): Hoysala Vishnuvardhana Talakad'ı **1117**'de aldı («The capture of Talakad in A.D. 1117»). Talakad'ın Çola'dan çıkışı için evrende madde YOK ve `yerlesimler_once1281_yt_yer3.js:17` Talakad `s:` 1004'te bati-ganga ile BİTİYOR (1004-1117 Çola dilimi yok, 1117 sonrası Hoysala dilimi yok). Öneri madde: `{ t:"1117-01-01", kesinlik:"yil", b:"Talakad Hoysala Vishnuvardhana'ya geçti: Çola/Ganga hâkimiyeti sona erdi", yer_id:"Talakad", kaynak:"HCIP V, Hoysalas bölümü: «The capture of Talakad in A.D. 1117»" }` (Çola'nın Talakad'da 1004-1117 hâkimiyetinin sürekliliği ikinci kaynakla okunmadı → beyanlı).
3. Eksik: 1258 civarı Pandya Jatavarman Sundara Pandya I seferi, Çola'nın vasala düşüşü (HCIP V: Rajendra III «Pandyan feudatory from about 1258»): yıl hassasiyeti `{ t:"1258-01-01", b:"…", kaynak:"HCIP V" }` (gün yok, "about").
4. Eksik: Gangaikondaçolapuram'ın yeni başkent oluşu (c.1025, Rajendra I): evren dışı künye notunda var, evrende "başkent değişimi" maddesi yok. `{ t:"1025-01-01", kesinlik:"onyil", b:"Rajendra I yeni başkent Gangaikondaçolapuram'ı kurdu", yer_id:"Gangaikondaçolapuram", kaynak:"HCIP V, «Rajendra I»: «the new capital, Gangaikondacholapuram»" }` — kuruluş yılı kaynakta açık yazılı değil, Bengal seferi sonrası ("c. 1021-25"); önce yıl teyidi.
5. Eksik: 993 Anuradhapura/Seylan kuzeyi (Rajaraja I; HCIP V «Mummudi-Cholamandalam»; künye maddesi var ama kaynağı Wikipedia): evren maddesi yok.
6. Kuruluş maddesi `odak_yer:["Kançipuram"]` (0850) → Vijayalaya Tancavur'u aldı (HCIP IV): odak "Tancûr (Thanjavur)" olmalı.

## d) Harita uyumu
Açık kırılma: **0** (+0 otomatik maddeyle kapanan). Ama kapsama zayıf — en geniş örnek yıl 1026: 2 yerleşim (Kançipuram + 1). Kaynaklı bilinen Çola toprakları vs atlas:
| yerleşim | atlasta | öneri (kaynak) |
|---|---|---|
| Kançipuram | 0893-1000 + 1000-1279 cola; 1279-1393 `__BOSLUK__` | doğru; 1279 sonrası Pandya/Kakatiya (IGI) |
| Tancûr (Thanjavur) | s: 1281'de başlıyor; **850-1281 YOK** | 0850-1279 cola (HCIP IV: Vijayalaya Tancavur'u aldı; başkent) — kesinlik yaklaşık (850) |
| Madurai | 0600-0920 pandya-1; **0920-1281 `__BOSLUK__`** | 0920→(Pandya canlanışı) cola: HCIP IV «Parantaka… expulsion of Rajasimha about A.D. 920»; bitiş için Pandya canlanışı tarihi (c.1190 Jatavarman Kulasekhara) ikinci kaynakla okunmadı |
| Talakad | 0450-1004 bati-ganga; sonrası YOK | 1004-1117 cola (HCIP IV s.162-163 «Cholas captured Talakad 1004»; çıkış HCIP V 1117) |
| Anuradhapura | `s:[]`, bos:"veri-yok" | c.993-1070 cola (Mummudi-Cholamandalam; HCIP V/IV Ceylon bölümü) — Polonnaruva 1070'te Sinhala'ya geçti (kronoloji var) |
| Polonnaruva, Gangaikondaçolapuram, Uraiyur | kayıt yok/ölçülmedi | yeni yerleşim gerek (mükerrer tara: normalleştirilmiş ad + 3 km) |
Not: Anuradhapura `s:[]` ile Seylan'ın yarısı "veri-yok"; Çola sahipliği yazılırsa 1070 kırılmasının ±30 gün maddesi (zaten var) ile örtüşür.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:12348` `cola` `kaynak:` → HCIP IV s.153 (850-871) + HCIP V (Rajendra III 1246-1279) + TDV Hindistan (850-1273) çelişki beyanıyla; encyclopedia.com yedek.
2. `data/devletler.js:12350` kuruluş maddesi `odak_yer` → "Tancûr (Thanjavur)".
3. `data/yerlesimler_asya.js:1507` Tancûr: `s:` başına `{f:"0850-01-01",t:"1279-01-01",d:"cola",kesinlik:{f:"onyil"}}` + 1279-1281 dilimi (Pandya?, kaynak gerekir).
4. `data/yerlesimler_asya.js:1518+` Madurai `__BOSLUK__` 0920-1281 kırpılıp 0920-c.1190 cola (bitiş kaynağı gerekli).
5. `data/yerlesimler_once1281_yt_yer3.js:17` Talakad: 1004-1117 cola, 1117→ hoysala (HCIP V).
6. `data/kronoloji_sinir_once1281_geriye.js:402` 1279 madde metni (Pandya yenişi).
7. Yeni evren maddeleri: 1117 Talakad, 1258 Pandya vasallığı, ~1025 Gangaikondaçolapuram.

## Erişilemeyen kaynaklar
- Nilakanta Sastri, K. A., *The Cōḻas* (Madras Univ., 2. bs. 1955) — soru: Rajendra III son kesin yıl/Çola'nın biçimsel sonu (1279 mu 1279 sonrası mı) ve Gangaikondaçolapuram'ın kuruluş yılı.
- TDV «Hindistan» maddesinin 100.000. karakterden sonrası (okunmadı): Çola bahsi var mı, 1273 gerekçesi var mı.
- Cambridge History of India III (Haig, 1928) ch.XVIII — okundu (cam3.txt) fakat Çola ayrıntısı yalnız Rajaraja/Rajendra; Madurai canlanış tarihi (Pandya II. İmparatorluk, c.1190) için ikinci kaynak aranmalı.

## Hüküm (UMIT SALI, gece yetkisiyle — CLAUDE.md kaynak kuralına göre; Emre sabah görebilir)
- Çola t: TDV-esas kuralı «İslâm dünyası, Osmanlı ve komşuları» içindir; Çola (Tamil, Hindu) bu kapsamın
  dışında kalır ⇒ sıradaki akademik kaynaklar belirleyici. HCIP V (III. Rajendra 1246-1279) atlasın **1279**'unu
  destekliyor ⇒ t **1279 kalsın**; `ic_not_t`: "TDV «Hindistan» 1273 der; HCIP V 1279 — Nilakanta Sastri ile
  üçüncü teyit bekliyor". Sastri *The Cōḻas* okunursa o esas.
