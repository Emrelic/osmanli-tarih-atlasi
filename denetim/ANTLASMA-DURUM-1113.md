# ANTLAŞMA OYNATICI — DURUM VE İŞ LİSTESİ (13 Kasım 2026)

Koordinatör: ANTLAŞMA-1113 oturumu. Güncel durum bu dosyadadır; envanter gelince (`denetim/ANTLASMA-ENVANTER-1113.md`, dal `lab-1113-antlasma-envanter`) sıra yeniden doğrulanır.

## 1. "Lozan standardı" (her parti bunu sağlar)
- Dosya: `data/antlasma_madde_<ad>.js`; sözleşme `js/antlasma_oynatici.js` başlığındaki gerçek şema:
  `window.ANTLASMA_MADDELERI.push({id, ad, t:"YYYY-MM-DD", kadraj:[bati,guney,dogu,kuzey], kaynak, yerler:{"Ad":[lon,lat]}, adimlar:[{no, bolum, ozet, yer:[..], konu, kaynak?}]})`.
  (Görev metnindeki `bolge_taraf`/`odak` alanları mevcut şemada yok; ÖNCE|SONRA anahtarı EMRELİC'in genelleme işi, şema eklerse geriye uyumlu olacak.)
- `ad`, kronoloji maddesinin `b` alanında geçmeli; `t` kronoloji günüyle ±60 gün.
- Özet ham metinden KENDİ cümlemizle; kaynak sırası TDV → İSAM/TTK/DergiPark → yabancı akademik → birincil neşir (Düstur, Meray, Hurewitz, Noradounghian). Vikipedi tek dayanak olamaz. Uydurma yok; okunamayan "ölçülmedi"; doğrulanamayan adım "⚠ DOĞRULANMADI"; çelişkide hakemli karar (TDV esas, çelişki iki kaynağıyla beyan).
- Her yeni kayıt Değişmez 2: ilgili kronoloji maddesi (gün) ±30 gün içinde var olmalı; yoksa madde de yazılır.
- Yeni `data/*.js` → `index.html`e `<script>` satırı; `denetle` + `paketle` + push yalnız KASA'da, push_kapisi ile.

## 2. Sıralı iş listesi (geçici; LAB envanteri gelince düzelir)
| Sıra | Antlaşma | Gün (doğrulanacak) | Not |
|---|---|---|---|
| 0 (PİLOT) | Karlofça | 1699-01-26 | Erdel/Macaristan haritası bağlantılı |
| 1 | Pasarofça | 1718-07-21 | |
| 2 | Küçük Kaynarca | 1774-07-21 | |
| 3 | Edirne | 1829-09-14 | |
| 4 | Paris | 1856-03-30 | |
| 5 | Ayastefanos / Berlin | 1878-03-03 / 07-13 | |
| 6 | Bükreş / Londra | 1913-05-30 / 08-10 | |
| 7 | Mondros | 1918-10-30 | |
| — | Lozan, Sevr | 1923-07-24, 1920-08-10 | TAMAM (main'de, UMIT) |

Gün sütunu koordinatör hafızasındandır; parti kendi kaynağıyla teyit eder, atlas kaydı dayanak değildir.

## 3. Parti durumu
| Parti | Antlaşma | Kim | Dal | Durum |
|---|---|---|---|---|
| E0 | Oynatıcı genelleme (ÖNCE/SONRA, otomatik düğme, doğrulama betiği) | EMRELİC | — | bekliyor (tasarım notu gönderilecek) |
| L0 | Envanter | LAB | lab-1113-antlasma-envanter | origin'de henüz yok (13 Kas, kontrol) |
| P0 | Karlofça | UMIT | — | atanmadı |
| P1.. | diğerleri | — | — | sırada |

## 4. Koordinasyon notu
EMRELİC/UMIT/LAB/HAVVA başka makinelerde; bu oturumdan `SendMessage` yalnız KASA 13 KASIM OTURUMU'na ulaşıyor. Brifingler bu dosya + KASA aracılığıyla iletilir.
