# BOLGE-ORTAASYAb-A-yerlesimsiz-1115 — yerleşimsiz künyeler, kunduz-hanligi, Buhara 1868 (UMIT, 15 Kasım 2026)

Dal: `umit-1115b-ortaasya` (origin/main 8fb10bdf1 tabanı). Zaman/araç sınırı nedeniyle 22 yerleşimsiz künyeden YALNIZ 1 tanesi (transkaspi-hukumeti) kapatıldı; kalanı için engel ve aranacak kaynak aşağıda. Ölçülen: sayılar belgenin sonundaki tabloda.

## A1 — Transkaspi Geçici Hükûmeti (transkaspi-hukumeti) — KAPATILDI (1 yerleşim)
- Yerleşim: **Aşkabad** (`data/yerlesimler_ortaasya2.js`, yerlesimler.js DEĞİL). Eski: `sovyet-rusya 1917-11-07 → 1991-10-27`. Yeni:
  | pencere | sahip | kaynak |
  |---|---|---|
  | 1917-11-07 → 1918-07-14 | sovyet-rusya | (mevcut) |
  | 1918-07-14 → 1919-07-15 | **transkaspi-hukumeti** | Sargent 2004 (ARAG Caucasus Series 04/02, s. 9-10; PDF bu oturumda okundu): «Two days later [14 July 1918] a government was formed in Ashkhabad» |
  | 1919-07-15 → 1991-10-27 | sovyet-rusya | Sargent 2004 («Following the Withdrawal»): «evacuated by the government and the army on 15 July 1919» |
- Kronoloji (Değişmez 2): `data/olaylar_ortaasya_1115b.js` (yeni, `window.OLAYLAR_ORTAASYA1115B`, index.html'e `<script>` eklendi) — 1918-07-14 «Aşkabat Komitesi kuruldu» ve 1919-07-15 «Aşkabat boşaltıldı», `yer_id:"Aşkabad"`, `taraflar:["transkaspi-hukumeti","sovyet-rusya"]`. Künye-içi `kronoloji:` öğeleri D2 evreninde değildir; bu yüzden ayrı madde yazıldı.
- Bilmediğim: Bolşeviklerin Aşkabat'a girdiği gün kaynakta yok (Sargent yalnız boşaltma günü verir). Pencere boşaltma gününde kesildi; `ic_not_d`'de beyan edildi.
- Yazılmadı: **Kızılarvat** (cephe boşaltmadan sonra "bir süre" orada tutuldu, gün yok), **Krasnovodsk** ve **Merv** (`data/yerlesimler.js` — yasak dosya; Merv 1918-11-01 işgal [Sargent s.30], Krasnovodsk 1920 [yıl]; kuyruğa): Merv penceresi 1918-07-?? → Mayıs 1919 (Bolşevik işgali, gün okunmadı); Krasnovodsk 1918-07 → 1920.
- Künye `f:"1918-01-01"` (gün yok) iken Sargent 14 Temmuz 1918'i veriyor: künye f 1918-07-14'e çekilebilir (devletler.js; bu oturumda DOKUNULMADI, yeni pencere künye ömrü içinde).

## A2 — kunduz-hanligi tanımsız taraf id'si — ÇÖZÜLMEDİ (belgeye)
`data/kronoloji_cok_orta_asya2.js` 93. satır (1859-05-01 «Dost Muhammed Han Kunduz ve Bedahşan'ı Afgan idaresine kattı», `taraflar:["afganistan","kunduz-hanligi"]`): `kunduz-hanligi` `devletler.js`te yok. Künye eklemek için f/t'nin kaynaklı gün/yıl uçları gerekir. Okunabilen kaynaklar: Wikipedia (dayanak sayılmaz), Schuyler/Becker (Kunduz Hanlığı'nın kuruluş-bitişine dair bilgi içermiyor; arandı), Britannica «1859» (yıl; atlasın kendi maddesinde alıntı), Encyclopaedia Iranica «Qonduz»/«Badakhshan» (403 — okunmadı), TDV (okunamadı), Burnes, *Travels into Bokhara* (1834; birincil, Murad Beg bölümü bu oturumda açılmadı). Sonuç: **bulunamadı** — künye YAZILMADI; "Kunduz Hanlığı (Mîr Murad Beg, ~XIX. yy başı - 1859)" künyesi için Iranica «Qonduz» + Bregel, *Historical Atlas of Central Asia* (2003) + Burnes 1834 okunmalı. Madde `taraflar:`ından id'yi silmek ölçütü sessizce kaçırır; dokunulmadı.

## A3 — Kalan 20 yerleşimsiz künye (hunnu-xiongnu, xianbei, kusan-sasani, hivite-afrigid, kidarit, rouran, cac-tudun, semerkant-ihsid, tatar, basmil, kirgiz-yenisey, memuni-harezm, kerait, kamag-mogol, horasan-oguz-hakimiyeti, muayyed-ay-aba-emirligi, sultan-sah-emirligi, kerayit, nayman/naiman, ogedey-ulusu)
Hepsi YAZILMADI. Nedenler:
- **Pencerelerinin düşeceği yerleşim `data/yerlesimler.js`te** (yasak dosya): memuni-harezm → Köhne Ürgenç (yerlesimler.js:2403; künye notu zaten «Gürgenç yerleşimi s: 1017-05-30'a hizalandı» diyor, ancak pencere başka bir kimlikle duruyor), hivite-afrigid/afrigoglu-harezm → Kât, muayyed-ay-aba/sultan-sah/horasan-oguz → Nîşâbur/Tûs/Merv/Serahs (yerlesimler.js). Hepsi `denetim/YERLESIMLER-JS-KUYRUK-1115-ortaasya.md` K-serisine eklenmelidir: pencere değişimi için ikinci dalga belgesi: yerleşim adı + künye f/t (künyenin kendi kaynağı: TDV memuniler, vb.) yeterlidir; ek kaynak gerekmez, çünkü künye uçları zaten TDV günlü.
- **Kaynak okunamadı:** Xiongnu/Xianbei/Rouran/Kidarit/Çaç/Soğd/Tatar/Basmıl/Kırgız/Kerait/Kamag/Naiman künyelerinin yerleşim noktaları için kaynak (Çin dinastik tarihleri, Barfield, Golden, Bregel) bu oturumda okunamadı; «yerleşim o devirde var mıydı» sorusu (merdiven ④) cevaplanamadı; yazılmadı. Konfederasyon/göçebe birimleri için yerleşim yok olabilir (merdiven ④: kırp).
- **İkizler:** kerait↔kerayit, nayman↔naiman, xueyantuo, hivite-afrigid↔afrigoglu-harezm KASA kararı bekliyor (K12). Penceresiz künyeye pencere yazmak yerine ana künyeye bağlama önerisi geçerli.
- **ogedey-ulusu (1267-1309):** 1281 çekirdeğinde; Almalık/Emil bölgesi pencereleri Çağatay'dan alınmalı. Kaynak okunmadı → yazılmadı.

## EK GÖREV — Buhara resmî himayesi 1868 (TAMAM, hakem)
Atlasın `1868-06-02` günü (kronoloji_rusya.js 595 ve kronoloji_ozbek.js 284; iki madde) **himaye/antlaşma günü değil, Zerabulak savaşının ve ateşkes süresinin bitiş günüdür** (Jülyen 2 Haziran = Gregoryen 14 Haziran). Yeni gün: **1868-07-05**.
| kaynak | ne diyor | okundu mu |
|---|---|---|
| Schuyler, *Turkistan* II (1876), Bukhara bölümü (archive.org `turkistannotesof02schu`) | «by a secret article of the treaty which was signed on June 23 (July 5), 1868» | evet |
| Büyük Rus Ansiklopedisi (bigenc.ru) «Russko-bukharskii dogovor 1868» | önleyici barış antlaşması, Semerkant, 23 Haziran (5 Temmuz); Rus ve bağımsız | yalnız arama özeti okundu (sayfa 401) — sayılırsa Schuyler'le çift teyit; sayılmazsa tek kaynak + Becker ayrımı (aşağıda), karar değişmez |
| Becker, *Russia's Protectorates in Central Asia* (1968; archive.org) s. 41-42 | Zerabulak «final battle of June 2» (Rus yazımıyla; 23 Mayıs'ta elçiler 2 Haziran'a kadar süre aldı); Kaufman 12 Haziran'da emire cevap verdi; **«On July 18 in Karshi Muzaffar ad-Din signed the peace conditions»**; «treaty itself did not refer to Russian protection» (himaye yalnız gizli ek madde 1'de) | evet |
| TDV buhara-hanligi | sayfa gövdesi çekilemedi (JS) | **okunmadı** |
| mooflife.com 18 Haziran | akademik değil | sayılmadı |
Çelişki: Schuyler/BRE antlaşma günü 23 Haziran/5 Temmuz; Becker emirin kendi imzasını (Karşı) 18 Temmuz verir (takvimi belirtmez; ayrı olay). Hakem: iki Rusça/İngilizce kaynak 5 Temmuz'da birleşir; Becker'in 18 Temmuz'u farklı eylemdir (emirin imzası). Seçilen **1868-07-05**; ic_not_gun iki maddeye yazıldı. **Yıl hassasiyetine inilmedi**: gün teyidi var. Not: TDV okunamadığı için TDV'ye karşı hakemlik tamamlanamadı; TDV günü okununca bu karar yeniden bakılabilir. Atlasta bu güne bağlı yerleşim penceresi YOKTUR (Semerkant penceresi 1868-05-14 ayrı olay), dolayısıyla yalnız iki madde taşındı; çeviri anahtarı yok; `b` metni değişmedi (hash bayat değil). Paket dosyaları (`paket_06.js`, `paket_11.js`) eski günü taşıyor: `paketle yenile` ister (push kapısı yapar).
