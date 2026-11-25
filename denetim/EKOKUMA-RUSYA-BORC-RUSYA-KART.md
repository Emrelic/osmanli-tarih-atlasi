# BORÇ — Rusya ek okuma kartları (örnek 8 + parti 02), 25 Kasım 2026, UMIT

Biçim: BORC-DEFTERI.md'ye taşınmak üzere. "Bulunamadı" ile "okunmadı/denenmedi" ayrı yazıldı.

## A. Doğrulama / süreç
1. JS sözdizimi node ile SINANMADI (görev: python/node koşturma). Yalnız tırnak dengesi awk ile sayıldı (6 dosya, tek sayılı satır yok).
2. Bağ sınaması yalnız dökümlerde (rus_ana_maddeler.txt, rus_kunye_ici.txt). data/olaylar*.js ve data/kronoloji*.js'te aynı gün başka madde ÖLÇÜLMEDİ; `ekKartBagliMi` ile tarayıcıda sınanmadı.
3. Parti 02 şartnameye aykırı biçimde Emre'nin 8 örnek onayından ÖNCE yazıldı (koordinatör talimatı); onaysız depoya girmemeli.
4. Parti 02 yalnız 6 kayıt (hedef ≤20): okunmuş kaynak bu kadar taşıyor. Geri kalan 14 yer için tam metin kaynak gerekiyor.

## B. Kronoloji (ek okuma dalında yazılmaz; kronoloji işine)
5. `1568-01-01|rusya|Osmanlı ile ilk çatışma — Astrahan seferi`: Işık s. 141 → 1569 (10 Temmuz–26 Eylül); İnalcık s. 383-384, 397 → "ilk çatışma/savaş" değil. Talimat gereği değiştirilmedi; 3 kayıt bu maddeye bağlı.
6. İnfaz maddesi YOK: 1918-07-17 Yekaterinburg (Coble 2009). 4 kayıt geçici olarak 1917-03-15'e bağlandı.
7. Temmuz Günleri / Bolşeviklere ihanet suçlaması (Temmuz 1917) maddesi YOK.
8. 1570 Novosiltsev elçiliği (kabul 3.VII.1570, İnalcık s. 386) maddesi YOK.
9. `1327-01-01|tver|…50.000 Tatar askeriyle…`: rakam Konak 2012'de YOK → teyitsiz.
10. `1325-01-01|moskova|I. İvan … 'büyük knez' unvanını aldı`: Konak s. 109-110 büyük knezliğin 1328'de paylaşıldığını yazar → çelişki.
11. `1547-01-16` IV. İvan çar unvanı: bu günü veren kaynak okunmadı.
12. `1917-03-15` tahttan çekilme günü (Jülyen/Gregoryen) kaynakla teyit edilmedi.
13. `1696-07-18` (künye içi) ↔ mevcut kartlar `1696-07-19` (bir gün fark, konu listesi §1c-2) değiştirilmedi.

## C. Kaynak
14. OKUNMADI (denenmedi): Kurat, Türkiye ve İdil Boyu (1966); Solovyev; Hammer; Pipes (1990); Zeman-Scharlau (Parvus); Lieven, Nicholas II; Fennell (1968); Halperin (1985); Ostrowski (1998); TDV "Rusya" tam metni (403, önceki tur).
15. İnalcık 1948: yalnız s. 383-386, 397-398 okundu; s. 352-382 ve 387-396 OKUNMADI (Işık'ın İnalcık aktarımları — s. 352, 361-363 — ikinci el kaldı).
16. Lyandres 1995: s. 6-93 OKUNMADI. "Alman altını" kartında iki görüş tek kaynaktan; bağımsız ikinci akademik kaynak gerekli.
17. Coble 2009 s. 1'de kronoloji hatası: tahttan çekilmeyi "Bolşevik devriminden sonra" gösterir; kartlarda kullanılmadı. "200'ü aşkın iddiacı" sayısının dayanağı akademik değil (anma sitesi).
18. Konak 2012 (Türkiyat Mecmuası 22, indirildi: scratchpad\rusya-indir2): Kulikovo, Ugra, Sofya Paleolog/çar unvanı, Üçüncü Roma konularında popüler kaynaklara dayanıyor → bu konularda kaynak olarak KULLANILMADI. Yalnız 1304-1341 Moskova-Tver olayları için kullanıldı (tek kaynak).
19. II. Nikolay ve IV. İvan hükümdar kayıtları TEYİTSİZ: tahta çıkış, doğum, aile, değerlendirme alanları kaynak okunmadığı için boş.
20. Parvus kişi kaydında `devlet` alanı yaklaşık (`rusya`); doğum-ölüm okunmadı.
21. Çareviç Aleksey: doğum yılı ve hemofili okunan kaynakta yok.

## D. Altyapı / karar (Emre)
22. Kişi `tur` değerleri: kisiler.js'te `elci`, `sehzade` yok; `hanedan`/`siyasi` kullanıldı. İran'la ortak karar.
23. 2 kart aynı kaynaktan (Romanov DNA + Anastasya): birleştirilsin mi?
24. Boş alanlı hükümdar kaydı kabul mü?

Açık borç sayısı: A 4 · B 9 · C 8 · D 3 = **24**.
