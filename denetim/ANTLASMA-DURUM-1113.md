# ANTLAŞMA OYNATICI — DURUM VE İŞ LİSTESİ (13 Kasım 2026)

Koordinatör: ANTLAŞMA-1113 oturumu. Girdi: `denetim/ANTLASMA-ENVANTER-1113.md` (LAB, dal `lab-1113-antlasma-envanter`, 88f9630cf).
KAPSAM (Emre, KASA'dan): dört ayak — (1) araştırma, (2) haritaya uygulama (ÖNCE/SONRA, `antlasma_haritalari.js`, odak/kadraj; petek motoru ve tuz dosyalarına dokunma), (3) kronolojiyi düzenleme (gün/kaynak/ic_not/Değişmez 2, mükerrer tek madde), (4) mikro oynatıcı ve maddeleri ayarlama.

## 1. "Lozan standardı"
- Dosya `data/antlasma_madde_<ad>.js`; sözleşme `js/antlasma_oynatici.js` başlığındaki gerçek şema:
  `window.ANTLASMA_MADDELERI.push({id, ad, t:"YYYY-MM-DD", kadraj:[bati,guney,dogu,kuzey], kaynak, yerler:{"Ad":[lon,lat]}, adimlar:[{no, bolum, ozet, yer:[..], konu, kaynak?}]})`. (`bolge_taraf`/`odak` alanları mevcut şemada yok; ÖNCE/SONRA EMRELİC'in genelleme işi, geriye uyumlu eklenir.)
- Eşleşme: kronoloji maddesinin `b` alanı kayıt `ad`ını içerir, `t` ±60 gün.
- Özet ham metinden KENDİ cümlemizle; kaynak sırası TDV → İSAM/TTK/DergiPark → yabancı akademik → birincil neşir. Vikipedi tek dayanak olamaz. Uydurma yok; okunamayan "ölçülmedi"; doğrulanamayan "⚠ DOĞRULANMADI"; çelişkide hakemli karar.
- Yeni `data/*.js` için `index.html`e `<script>` satırı; `denetle`/`paketle`/push yalnız KASA'da, push_kapisi ile.

## 2. Sıralı iş listesi (envanterin sayı/önem/kaynak sütunları "kaba tahmin"; kaynak sayfası açılıp teyit edilir)
**İlk dalga (önem≥4 + kaynak A):**
1. Karlofça 1699-01-26 (PİLOT, dört ayakla)
2. Pasarofça 1718-07-21 · 3. Belgrad 1739-09-18 · 4. Küçük Kaynarca 1774-07-21 · 5. Ziştovi 1791-08-04 · 6. Yaş 1792-01-10
7. Bükreş 1812-05-28 · 8. Edirne 1829-09-14 · 9. Paris 1856-03-30 · 10. Ayastefanos 1878-03-03 · 11. Berlin 1878-07-13 · 12. Mondros 1918-10-30

**İkinci dalga (A):** Zitvatorok 1606, Prut 1711, Akkirman 1826, Londra Protokolü 1830, Hünkâr İskelesi 1833, Londra 1840, Alman ittifakı 1914, Brest-Litovsk 1918, Moskova/Kars/Ankara İtilâfnâmesi 1921, Mudanya 1922.

**Üçüncü dalga (önem≥4 + B):** İstanbul 1479, Amasya 1555, Edirne 1568, Venedik 1573, Kasr-ı Şirin 1639, Bucaş 1672, İstanbul 1700, İstanbul 1724, Niş 1739, Kütahya 1833, Atina 1913, Gümrü 1920.

Oynatıcıya DEĞMEZ: tek maddelik/mütareke/kaynak-C düzenlemeler (düz kronoloji metni kalır). Londra 1827 ve Bükreş 1913: Osmanlı taraf değil, dışarıda. Tamam: Lozan, Sevr.

## 3. Parti durumu
| Parti | İş | Kim | Dal | Durum |
|---|---|---|---|---|
| L0 | Envanter | LAB | lab-1113-antlasma-envanter | TAMAM |
| P0 | Karlofça pilot | LAB (alt ajan 1) | lab-1113-karlofca | başladı; UMIT'in `umit-1113-antlasma-araclar` dalı araçları kullanılıyor |
| E0 | Oynatıcı genelleme: ÖNCE/SONRA, otomatik düğme, doğrulama betiği | EMRELİC | — | bekliyor |
| U0 | Araçlar / seri veri yazımı | UMIT | umit-1113-antlasma-araclar | RAM bekliyor |
| H0 | Boşta kapasite | HAVVA | — | ≥19:00 adayı |
| K0 | Kronoloji eksik maddeler (plan aşağıda) | bu oturum (alt ajan ≤1) | — | plan KASA onayında; yazılmadı |

## 4. Kronoloji ayağı planı (YAZILMADI, KASA onayı bekler)
Yeni dosya `data/olaylar_antlasma_1113.js` (`index.html`e `<script>` satırı; şema `VERI-YAPISI.md`ndan okunur, örnek `olaylar_ek5.js`). Her madde: gün, `k:"antlasma"`, `b` başlıkta antlaşma adı, kaynak sırası yukarıdaki; gün teyitsizse `YYYY-01-01` + beyan; hicrî/Jülyen kuralları CLAUDE.md'ye göre. Yeni maddeler sınır kırılması yaratmaz; Değişmez 2 etkilenmez.
- (a) Mevcut maddeye `k:"antlasma"` eklenir (yeni madde değil, mükerrer yaratma): Balta Limanı 1838-08-16 (`kronoloji_cok_ingiltere.js`), İstanbul 1832-07-21 Arta-Volos (`kronoloji_balkan.js`), Venedik 1540-10-02 (`kronoloji_naksa_dukaligi.js`), Fransız 1536 (`kronoloji_fransa.js`), İsveç 1737 (`kronoloji_isvec.js`), Zuravno 1676 (`kronoloji_lehistan.js`), İngiliz ahidnâmesi 1580. O dosyalar kilide girer.
- (b) Kronolojide hiç olmayan, yeni yazılacak: Kıbrıs Sözleşmesi 1878-06-04, 1897 İstanbul barışı, Londra 1913-05-30, Rusya 1569. Günler benim hafızamdandır, teyitsiz; kaynaktan doğrulanacak.
- (c) Mükerrer: Gelibolu 1403 ×3, Karlofça ×6, Edirne 1829 ×6 — madde silinmez; hepsi oynatıcıda tek kayda bağlanır (`b` içinde `ad`); birleştirme gerekçesi `ic_not`ta.

## 5. Koordinasyon
EMRELİC/UMIT/LAB/HAVVA başka makinelerde; bu oturum yalnız KASA 13 KASIM OTURUMU'na `SendMessage` atabilir, KASA iletir.
