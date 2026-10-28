# MO-DENETIM-1028 — MÖ devletlerin künye / kronoloji / yerleşim / harita denetimi

*28 Ekim 2026 · origin/main `b8e3233e` · SALT OKUNUR: hiçbir veri dosyası değişmedi, hiçbir düzeltme uygulanmadı.*

## ① Ölçülen (betik: `ARAC-MO-TARAMA-1028-A.js`, `-B.js`; makine çıktısı `MO-KUNYE-TARAMA-1028.json`)

| Ölçü | Sayı |
|---|---|
| Künye, f < MS 1 | 262 (toplam 2233) |
| Bağlı MÖ kronoloji maddesi (tekil, tüm dosyalar) | 1906 |
| MÖ dönemi olan yerleşim (nokta) | 143 |
| Önceden bayraksız künye | 97 |
| YERLESIM-YOK (hiçbir yerleşimin `s:` dönemi bu künyeyi göstermiyor) | 126 |
| SON-MADDESI-YOK / KURULUS-MADDESI-YOK | 58 / 18 |
| Künye dışına taşan madde | 25 künye |
| Kronolojisi hiç olmayan | 4 (himyar, hadramavt, ma-in, kataban) |
| Haritadaki sahip değişimi (MÖ, tekil) / kronolojide karşılığı olmayan | 182 / 38 |
| MÖ maddelerde yalnız-yıl / günlü | 873 / 22 |

⚠️ SON/KURULUS/KRONOLOJI-YOK bayrakları yalnız MÖ maddeleri saydığı için pozitif yıllı künyelerde **yanlış pozitif** verir (B, D, A ajanları doğruladı). YERLESIM-YOK da kısmen yanıltıcı: nokta var, `s:` dönemi yok.

## ② Ajan hükümleri (5 bölge, 262 künye — `mo_rapor_A..E.md`)

| Grup | Künye | Doğru | Düzelt | Belirsiz |
|---|---:|---:|---:|---:|
| A Afrika + Amerikalar | 46 | 34 | 6 | 6 |
| B Mezopotamya/Levant/Arabistan | 54 | 43 | 3 | 8 |
| C Anadolu/Kafkasya/İran/Orta Asya | 49 | 34 | 11 | 4 |
| D Balkan-Yunan/İtalya/İberya/Avrupa | 54 | 31 | 12 | 11 |
| E Güney-Doğu-GD Asya/Okyanusya | 59 | 43 | 10 | 6 |
| **Toplam** | **262** | **185** | **42** | **35** |

## ③ 🔴 KAYNAK DÜRÜSTLÜĞÜ — bu denetim istenen ölçütü KARŞILAMADI

Ajanların kendi beyanı: sayfası gerçekten **okunan** kaynak her grupta 2-6 tane; hükümlerin çoğu **hafızadan** (raporlarda `[BT]`/"hafızadan" işaretli) veya künyenin kendi kaynak alanından. Britannica, Iranica, UNESCO 403 verdi; Çince/Rusça/Farsça/Arapça kaynak taranmadı. Okunan: A — Dee vd. 2013, TDV Fizan, Livius (Garamantes, Numidia) · B — Vikipedi Larsa tablosu (CLAUDE.md'ye göre tek dayanak olamaz) · C — TDV Sinop (tam metin), Lidya/Hormozdgan/Kroisos (yalnız özet) · D — Lepenski Vir, Vinča, Malta özetleri, Plutarkhos dipnotu · E — Shiji 15 (Wikisource), TDV arama.
⇒ **"DOĞRU" hükümleri doğrulama sayılmaz; "DÜZELT" önerileri uygulanamaz** — her biri kaynak sayfasıyla teyit bekliyor. Ajan A ayrıca: 213 MÖ maddenin 85'i (%40) worldhistory.org / Vikipedi / thecollector / worldatlas / Seshat'a dayanıyor — CLAUDE.md kaynak kuralına aykırı.

## ④ En ağır bulgular (hepsi teyit bekler)

1. **Roma haritada delik** — `s:` -0752..-0751'den sonra `__BOSLUK__`, 1144'e kadar. Atina klasik çağı, Marsilya, İstanbul 73-330, İskenderiye -0029..-0026 de boşluk (D).
2. **Mısır firavun devri (MÖ 3125-525) haritada tamamen boş** (A); Kerma `__BOSLUK__`.
3. **Kudüs** -0585 sonrası 1253'e `__BOSLUK__`; Babil -1209..-0709 boş; Orta-Asur Aşşur'da hiç yok; Yeni-Babil Suriye-Filistin'i boyamıyor (B).
4. **Hint zinciri** (maurya/sunga/kanva/magadha/nanda/satavahana): künyeler Majumdar zincirinde (324-187-75-30), kendi kaynakları Britannica (321/185/73/28), TDV Maurya 321-185 (E).
5. **İskender geçişi** Babil/Susa/Uruk -0330-01-01 (Gaugamela -0330-10-01); Susa sonrası sahipsiz; Persepolis, Hemedan'da sahip yok (C).
6. **Künye içi çelişkiler:** sirakuza t -0210/-0211, atina-demokrasisi t -0337 ↔ kendi maddesi -0321, miken t -1099 (-1199?), Hattuşa s:-1199 / künye t -1179 / madde -1189.
7. **Uydurma gün:** sakiz künyesi t = Vespasianus'un ölüm günü (0079-06-23) (C).
8. **Mükerrer künye:** hitit ⊃ hitit-eski + hitit-imp; antigonos ≈ antigonos-krallik; xiongnu ≡ hunnu-xiongnu; meroe-krallik ≡ kush-krallik; misir-21-hanedan ⊂ misir-3-ara.
9. **Yerleşim:** ~131 mevcut noktaya MÖ `s:` yazılmalı (A 22 · B 35 · C 26 · D 30 · E 18); ~62 yeni nokta (A 14 · B 12 · C 8 · D 15 · E 13) (koordinatlar doğrulanmadı).
10. **Kanıtı okunmuş tek sağlam madde bulguları:** qin-devleti -0339 «Da Liangzao» → MÖ 352 (Shiji 15); dogu-zhou son maddesi MÖ 249 «取東周» eksik.

## ⑤ Emre'ye sorular

1. Sinope: TDV MÖ 220 (II. Mithridates) mı, antik kaynak + EBSCO MÖ 183 (I. Pharnakes) mı esas? (CLAUDE.md: TDV esas — ama çelişki var.)
2. Sakız / Midilli künyelerinin bitişi nasıl tanımlansın?
3. Hint zinciri: TDV/Britannica 321 zinciri mi, Majumdar 324 zinciri mi?
4. Koinon/ittifak devletlerinde (Delos, Peloponnes, 2. Atina, Aitolia, Akhaia) boya hegemona mı üyeye mi?
5. İkinci tur: kaynak sayfasını gerçekten okuyan, bölge başına daha küçük parçalı ajanlarla (TDV + Treccani + DNP + Çince/Rusça akademik) yeniden doğrulama açılsın mı? (Maliyet yüksek.)

---

## ⑥ İKİNCİ TUR — kaynak sayfası gerçekten okunarak (`mo2_rapor_1..5.md`)

Okunan sayfa/metin: P1 Roma-İtalya ~36 · P2 Yunan ~42 · P3 Mısır-Nubya ~26 · P4 Mezopotamya-Anadolu ~28 · P5 Asya ~32 (toplam ~164). Her hükümde URL + alıntı raporlarda. Hâlâ okunamayanlar (Britannica/Iranica 403, Diodoros, Curtius, Tabari, Livy tam metin, NAOJ, Zhushu jinian…) her raporun OKUNAMADI listesinde.

### Kaynakla KESİNLEŞEN düzeltme adayları (uygulanmadı)
- roma-kralligi -0752 / -0508 doğru; Roma yer s: -0507 → -0508. Cumhuriyet t -0026-01-16, roma-imp t 0395-01-17 kesin.
- sirakuza t -0210 → -0211; f -0733 → -0732; Gelon -0490 → -0484; zankle f -0729 → -0723; akragas MÖ 406/5 maddesi EKLE.
- atina-demokrasisi t -0337 → -0321 (kesin); ikinci-atina-birligi f -0376 (kesin); Sparta -0194 → -0191; Rodos sonuç -0304 → -0303; Korint Birliği -0337 → -0336; epir -0166 → -0167.
- tutulma -0584-05-29 → -0584-05-28; Babil'e giriş -0330-10-22 (Gaugamela -0330-10-01); Nebukadnezar -0603 maddesi yanlış; Opis -0538-10; Kudüs yıkım çift maddesi tek olaya birleştirilmeli.
- bati-han t 0008-01-01 → 0009-01-10 (Hanshu 99 戊辰); qin -0339 «Da Liangzao» → -0351; Qin -0770 mükerrer sil (-0769); Maling -0340; dogu-zhou -0248 «取東周» ekle; dian «Shiji MÖ 279» yanlış; yarlung f -0126 kaynaksız.
- ptolemai f 10 Haz → 11 Haz MÖ 323 (-0322-06-11) + ic_not; Kush-Roma «MÖ 27» hiçbir kaynakta yok (saldırı MÖ 23, Napata/barış ~-0021); Tanutamani -0668 → -0663; kush-25 t -0652 → -0655; Psamtik II sefer -0589 → -0592; Djoser mükerrer, tek madde -2648; caral t -1999 → -1799; olmek La Venta s -0799 → -0899; kush-krallik f -0749 → -0729; meroe-krallik ≡ kush-krallik mükerrer.
- sakiz t 0079-06-23 uydurma (TDV: yalnız «Vespasianus zamanında») ⇒ yıl hassasiyetine in; midilli: TDV Roma işgali MÖ 168, atlastaki MÖ 80 TDV'de yok.
- baekje: 1. turdaki «660-07-18» önerisi GERİ ALINDI (Samguk sagi ay-güneş günü; Jülyen tabloyla doğrulanamadı ⇒ ay hassasiyeti).
- Hattuşa: -1199 dayanaksız (Livius c.1190, c.1180).

### Hâlâ ÇELİŞKİLİ — karar Emre'nin
- **Sinope:** TDV MÖ 220 «II. Mithridates zaptetti»; Polybios 4.56 yalnız savaşın başı; Strabon 12.3.11 ilk alanın Pharnakes (MÖ 183). Öneri: -0219 «kuşatma», ele geçirme -0182, TDV farkı ic_not'a.
- **Hint zinciri:** Majumdar 364-324/324-187/187-75/75-30 · TDV Maurya 321-185, Sunga 185-73, Kanva TDV'de yok, Satavahana TDV içinde tutarsız (185/28). Öneri 321 zinciri: nanda -0342..-0320, maurya -0320..-0184, sunga -0184..-0072, kanva -0072..-0027.
- miken t (künye «Miken kültürü» ise LH IIIC ~1050'ye uzanır); lizimakhos f (323 satraplık / 309 Lysimacheia / 305 kral); makedonya-krallik ↔ antigonid çakışması (öneri t -0276); boiotia t; akhaia f; orkney tanıma bağlı; kyrene eyalet yılı 78/74.

### Ek yapısal bulgular
- Xinzheng, Handan, Linzi → Qin; Pingyang, Kanton → Han; Xi'an -0205..-0204 için yeni «Sai (Sima Xin)» devleti gerekir.
- Roma, Capua, Mediolanum, Massalia, Byzantion 73-330, İskenderiye, Atina için kaynaklı boşluk-doldurma zincirleri `mo2_rapor_1.md`de.
- Mısır başkentleri/Kerma/Napata s: tablosu `mo2_rapor_3.md`de (Itj-tawy, Avaris kuruluş yılları OKUNAMADI).

### Uygulama için not
Hiçbiri uygulanmadı. Uygulama: worktree'de, CLAUDE.md düzeniyle (denetle → renk_olc → paketle → damga → push kapısı), Emre'nin kararlarından sonra. Okunamayan maddeler için üçüncü tur gerekir.
