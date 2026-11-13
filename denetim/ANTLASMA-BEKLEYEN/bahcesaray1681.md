# Bahçesaray (Bakhchisaray) 1681 — ham madde metni BULUNAMADI (data'ya yazılmadı)

Hazırlayan: EMRELIC ant17-pA (13 Kasım 2026). Kayıt `data/antlasma_madde_bahcesaray1681.js` ÜRETİLMEDİ (uydurma yok).

## Aranan
Rus-Osmanlı-Kırım Hanlığı Bahçesaray barışı/ateşkesi (20 yıl, sınır Dinyeper), madde madde ham/neşir metin.

## Bakılan yerler ve sonuç
- TDV (islamansiklopedisi.org.tr): «Bahçesaray Antlaşması» başlıklı madde YOK (arama yalnız 23 anma listeler; «Çehrin Seferi» ve «Kırım» maddelerinde geçerken anılır). WebFetch özetleyiciyle okundu, ham gövde değil.
- Noradounghian, Recueil d'actes internationaux de l'Empire ottoman, c. I (1897), No 276 (dizin): «1681 Janvier 8 — Traité de paix pour vingt ans avec la Russie; signé à Radzin (1093)» — kaynak olarak Dumont, *Histoire des traités* I s. 239 (yalnız Fransızca ÖZET/extrait), Hammer XII s. 502-504 ve XVI s. 125 (İtalyanca), Schaell IV s. 347. Metin verilmez. (Not: hicrî 1093, tablo hesabıyla Ocak 1681 ile uyumsuz — 1092 Muharrem ≈ 21 Ocak 1681; dizindeki hicrî yıl/yer adı OCR ya da baskı hatası olabilir.)
- Dumont, Corps universel diplomatique t. VII.1-2 (corpsuniverseldi71dumo, corpsuniverseldi72dumo): bu antlaşmanın metni bulunamadı (tarandı).
- K. A. Kochegarov, «Между Батуриным и Бахчисараем: Запорожская Сечь…», *Крымское историческое обозрение* 2025, 12(4), s. 68-98 (okundu; PDF metni çıkarıldı): ikincil ama arşiv (RGADA f. 124, 1681 g.) dayanaklı anlatım — madde madde metin DEĞİL. Aktardığı hükümler: 20 yıllık ateşkes; sınır Dinyeper; Kiev ve çevresi ile Zaporoje Sich Rusya'da; Dinyeper'in iki yakasında kale yapılması/onarılması yasağı (nihai redaksiyonda); sultan ve han Dinyeper-Güney Bug arasındaki Sağ-Yaka Ukrayna'ya yerleşmez; Zaporoje avcılığına yalnız sözlü han vaadi.
- Wikipedia/Ukraynaca ansiklopedi özetleri kullanılmaz (CLAUDE.md: tek dayanak olamaz).

## Gün çelişkisi (hakemli karar için beyan — brifteki 3 Ocak 1681 Gregoryen varsayımı doğrulanamadı)
- Kochegarov (RGADA): ateşkes taslağı «3 Ocak» (Rus belgeleri Jülyen) tarihli; han Murad-Giray andı **4 Mart 1681** (Jülyen) içti; beyaz nüsha Tatarca 9 Ocak (Jülyen). Jülyen 3 Ocak 1681 = **13 Ocak 1681 Gregoryen** (1681'de fark 10 gün).
- Noradounghian dizini: «8 Ocak» (kaynağı Hammer/Schaell; Osmanlı/Batı günü).
- Brif: «3 Ocak 1681 Gregoryen / 24 Aralık 1680 Jülyen» — bu gün okunan hiçbir kaynakta çıkmadı; 3 Ocak'ın Jülyen olduğu görülüyor (Gregoryen ile karıştırılmış olabilir).
- Atlasın mevcut kronoloji maddesi: `data/kronoloji_kirim.js` s. 337, `t:"1681-01-01"` («Bahçesaray Antlaşması ile Osmanlı-Kırım ve Rusya arasında sınır ve barış düzenlendi») — yıl hassasiyetinde; gün yok. Düğme için `antlasma_id` bağlanacak ana madde bu olur; gün netleşince `t` kayıtta 13 Ocak 1681 (Kochegarov/RGADA Jülyen→Gregoryen) ya da TDV/Hammer günüyle ayrışması `ic_not`ta beyan edilmelidir.

## Sıradaki adım (KASA/araştırmacı)
1. PSZ (Rus İmp. Kanunlar Külliyatı, c. II) ya da *Памятники дипломатических сношений Московского государства с Турцией* (PDSMG) neşri «шертная грамота 1681» madde metni; RGADA f. 89 (Сношения России с Турцией); Hammer'in İtalyanca metni (GOR XII s. 502-504).
2. TDV «Çehrin Seferi» maddesinin barış bölümünün ham gövdesi (Cloudflare nedeniyle okunamadı).
3. Metin bulununca madde madde özet, `uret_antlasma.js` hattıyla.
