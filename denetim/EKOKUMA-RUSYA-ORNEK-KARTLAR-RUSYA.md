# RUSYA ek okuma — Aşama 2: 8 örnek kayıt (TASLAK, Emre üslup onayı bekliyor)

25 Kasım 2026 · UMIT (umit21-osm5) · şartname `origin/ekokuma-sartname-1125` · konu listesi
`origin/ekokuma-rusya-1125:denetim/EKOKUMA-RUSYA-KONU.md`. Depoya yazılmadı; dosyalar bu klasörde.
JS dosyaları node/python ile SINANMADI (görev gereği koşturulmadı); elle yazıldı, sözdizimi denetimi BORÇ.

## Kayıtlar (8 = 5 kart + 1 hükümdar + 2 kişi; 5 tür)

| # | Dosya / id | Tür | Bağ (`olay`) | Kaynak etiketi |
|---|---|---|---|---|
| 1 | ekokuma_dev_rusya_01 / `rusya-teknik-don-volga-kanali-1569` | teknik-bilimsel | `1568-01-01\|Astrahan seferi` | Işık 2018 TAM METİN OKUNDU; İnalcık 1948 KISMEN (s. 383-386, 397-398) |
| 2 | … / `rusya-tartisma-1569-astrahan-bozgunu` | tartisma | `1568-01-01\|Astrahan seferi` | aynı |
| 3 | … / `rusya-tartisma-bolsevik-alman-altini-1917` | tartisma | `1917-11-07\|Ekim İhtilâli — Bolşevikler Petrograd` | Lyandres 1995 KISMEN (s. 1-5, 94-104) |
| 4 | … / `rusya-teknik-romanov-dna-kimlik` | teknik-bilimsel | `1917-03-15\|Romanov hanedanı sona erdi` | Coble ve diğ. 2009 TAM METİN OKUNDU |
| 5 | … / `rusya-karsi-anastasya-kurtuldu-mu` | karsi-anlati | aynı | aynı |
| 6 | hukumdar_rusya / `rusya-nikolay2` | hükümdar kaydı | aynı | Coble 2009 okundu; **TEYİTSİZ** (saltanat alanları için kaynak okunmadı, alanlar boş + ic_not) |
| 7 | kisi_rusya / `rusya-carevic-aleksey` | kişi (`hanedan`) | aynı | Coble 2009 TAM METİN OKUNDU |
| 8 | kisi_rusya / `rusya-elci-novosiltsev-1570` | kişi (`siyasi`) | `1568-01-01\|Astrahan seferi` | İnalcık 1948 KISMEN (kullanılan s. 386 okundu) |

Ad alanları: `window.EKOKUMA_DEVRUSYA01`, `window.HUKUMDAR_RUSYA`, `window.KISI_RUSYA`.

## Üslup kararı için Emre'ye sorular
1. **Kaynak darlığı:** 8 kaydın hepsi yalnız 4 açık erişim kaynağa dayanıyor (Işık, İnalcık, Lyandres, Coble).
   Bu, konu listesinin ilk 40'ındaki büyük konuların (Normanizm, Moğol boyunduruğu, IV. İvan, I. Petro,
   1932-33 kıtlığı…) hiçbirinin bu turda yazılamadığı anlamına gelir: hiçbirinin tam metni okunmadı.
2. **4 ve 5 numara aynı kaynaktan** iki kart (yöntem / efsane). Tek karta indirilsin mi?
3. **Hükümdar kaydı (II. Nikolay)** alanların çoğu boş; şablonu göstermek için bırakıldı. Boş alanlı
   kayıt kabul mü, yoksa hükümdar kayıtları kaynak okunana dek hiç yazılmasın mı?
4. **İnfaz maddesi yok:** 4, 5, 6, 7 numaralar 1918-07-17 infazına ait ama kronolojide madde olmadığı için
   1917-03-15 tahttan çekilme maddesine bağlandı. Kronoloji işine madde önerisi BORÇ'ta.
5. **1569 maddesi:** 1, 2, 8 numara `1568-01-01` künye içi maddeye bağlı; kaynak 1569 diyor. Talimat
   gereği gün değiştirilmedi; kartta yıl 1569 yazıldı (madde ile kart arasında görünür çelişki kalır).

## Bağ sınaması
Yalnız verilen dökümlerde (rus_ana_maddeler.txt, rus_kunye_ici.txt) yapıldı. `data/olaylar*.js` ve
`data/kronoloji*.js`te aynı günün başka maddesi ÖLÇÜLMEDİ (BORÇ).
