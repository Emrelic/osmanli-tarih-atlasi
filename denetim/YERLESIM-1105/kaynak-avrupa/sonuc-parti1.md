# PARTİ 1 sonuç (13 Kasım 2026) — 50 yerleşim, 78 dönem

Uygulama: `uygula_parti1.py` 78/78 nesneye `kaynak:` ekledi (beklenen 78, ESİT). `node --check` iki dosyada temiz; `dogrula_parti1.py` kaynaklar geri alınınca dosyalar HEAD ile özdeş (yalnız ekleme). Değişen: `data/yerlesimler_avrupa.js` (72 dönem), `data/yerlesimler_seyrek.js` (6 dönem). Ham sayfa metinleri `_ham/` altında; her alıntı bu metinde (boşluk-normalleştirilmiş) birebir aranarak doğrulandı (TDV hariç, aşağıya bak).

## ① Basamak sayıları
- TDV: 5 dönem (Tedmür v:, Dûmetülcendel, Teymâ, İskeçe, Karabiga). TDV sayfaları Cloudflare 403 verdiği için WebFetch ile okundu; bu 5 alıntı küçük model aracılığıyla alındı, ham metinle doğrulanamadı (elle teyit önerilir).
- Ulusal akademik ansiklopedi: 68 dönem (Treccani ve Britannica 11. basım 1911 / Wikisource tam metin).
- Hakemli/akademik sözlük: 4 dönem (Dictionary of Welsh Biography, Owain Glyndwr: Aberystwyth ve Harlech glyndwr-galler ve geri alış dönemleri; Aberystwyth/Harlech ilk dönemler Britannica 1911).
- bulunamadı: 1 dönem (Rın kumulları, Sovyet Rusya 1917-1991).
- Süre nedeniyle bırakılan: 0.

## ② ÇELİŞKİ listesi (dönem dokunulmadı, kaynakta `ÇELİŞKİ —` ile başlar)
1. Teymâ, suud-ucuncu 1921-11-02 → 1932-09-18: TDV Teymâ: 1830'dan itibaren yarı bağımsız Rummân emirleri arasında el değiştirdi; Suudî hâkimiyetine geçiş 1950 (Abdülkerîm b. Rummân'ın öldürülmesi). Atlas dönemi 1950'den önce erken.
2. İskeçe, bizans 1281 → 1373: TDV: 1345'te Umur Bey, Momçila'yı sona erdirdi; 1366'da İskeçe Uglješa (Sırp) sınırları içinde; Osmanlı fethi 1361 (eski kaynak) / 1373 (modern). t=1373 TDV ile uyumlu ama Bizans sürekliliği (1345-1366 aralığı) çelişkili.
3. Brest, bretanya 1281 → 1532: Britannica 1911: 1342'de John of Montfort İngilizlere verdi, 1397'ye kadar İngiliz elinde.
4. Athlone, irlanda 1281 → 1603: Britannica 1911: 1210'da İngiliz Kralığı justiciar'ı (John de Grey) kale+köprü yaptırdı; ‘irlanda’ devlet kimliğiyle ilişki belirsiz.

Not-düzeyi (kaynak metne `[NOT: ...]`/`[BEYAN: ...]` yazıldı, dönem çelişmez ama karar gerekebilir):
- İrlanda dönemleri (Sligo, Tralee, Belfast, Derry): kaynaklar Anglo-Norman/İngiliz kurucu veya hami gösteriyor (Fitzgerald 1252, Geraldine 1213, de Courcy 1177, Edward II→de Burgh 1311); atlas ‘irlanda’ kimliğiyle uyumu ana oturum doğrulasın.
- 7 Bretanya/Fransa Cumhuriyeti dönemi: Treccani Convenzione 21 Eylül 1792 diyor, atlas f=1792-09-22 (1 gün).
- 7 İskoçya dönemi (1707 sonrası): Treccani Birlik 1 Mayıs 1707, atlas 1707-05-12 (gün farkı; tüm İskoç yerleşimleri).
- Kirkwall/Lerwick f=1472-02-20: Britannica 1911 parlamento kararını 20 Şubat 1471 (eski takvim yılı) verir.
- Nantes: Treccani 1487'de (Francesco II ölümü) Fransa krallarına geçti; atlas t=1532-08-13 (Britannica Vannes: 1532 kesin birleşme).
- Tedmür v: f=1832-06-15, TDV İbrâhim Paşa 16 Haziran der; TDV Tedmür maddesi 1832-41'i yazmaz (bölge kaynağı, BEYANLI).

## ③ Bulunamayan / kısmi
- Rın kumulları: TDV, Treccani, Britannica 1911, genel arama (yalnız coğrafya/arkeoloji) — Sovyet idaresini gösteren akademik madde yok.
- Kısmi destek (`[KISMİ DESTEK]` etiketli; sayfa yalnızca yerleşimin İngiltere'de/devlet ülkesinde olduğunu gösterir, 1281 tarihli sahiplik veya gün yok): Norwich, Plymouth, Southampton, Newcastle, Birmingham, Hull, Quimper, Saint-Malo (Bretanya ilk dönem), Dumfries (3), Rouen (3. dönem), Cardiff/Cambridge/Exeter/Aberystwyth ilk dönem (dolaylı). Tüm İskoç dönemlerinde yer-özel alıntı olmayan 1660-1707 ve 1707+ dilimleri genel Treccani 'Scozia' alıntısına dayanır.
- Gün düzeyinde teyit sağlanan dönem yok; sağlanan, yıl düzeyinde.

## ④ Sayfa çekilemedi
- TDV doğrudan (curl) Cloudflare 403; Britannica.com doğrudan 403 (yerine 1911 basımı Wikisource). Treccani 'rennes' ilk denemede DNS hatası, sonradan çekildi. Treccani'de maddesi olmayanlar (Penzance, Aberystwyth, Harlech, Dumfries, Wick, Stornoway, Kirkwall, Derry, Quimper, Vannes) Britannica 1911 ile karşılandı.
