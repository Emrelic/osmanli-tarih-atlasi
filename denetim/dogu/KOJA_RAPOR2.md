# KOJA (Kore + Japonya + Ryukyu) — Tur 2 raporu

Yöntem: zh/ja/ko.wikisource birincil metin neşirleri (MediaWiki ham metin API'si; `curl` yerine aynı uç noktalara Python `urllib` ile GET), Jülyen gün hesabı için sexagenary gün işaretleri (2000-01-01 = 戊午 çapasıyla doğrulandı; kontrol: Abaoji'nin ölümü 辛巳 = 926-09-06) ve ortalama yeniay hesabı (± 1 gün).

## 1. Sayılar
| Dilim | Kayıt | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 |
| B | 1 | 0 | 1 | 0 |
| C | 16 | 5 | 11 | 0 |
| D | 10 | 6 | 4 | 0 |
| E | 9 | 3 | 4 | 2 |
| Toplam | 36 | 14 | 20 | 2 |

Eşleme: eksik 23 · var 7 · var-f-t-farkli 6. Eklenen yeni kayıt: 0 (D/E'de var olan taslaklar yeniden sınıflandırıldı: `taira-rejimi` Antoku Batı sarayı olarak yeniden tanımlandı, `bodeok-goguryeo` t 674→683, `dongdan`, `jeongan-krallik` f/t null). Elenen: 0 (aday: okjeo, dongye, masakado-shinno — şeflik/epizot ölçütü). `KOJA_ELENEN.json` açılmadı; kararı Emre verir.

Kayıt düzeltmeleri (taslak değeri `ic_not`'ta): balhae t, nara f/t, heian f/t, hubaekje f, taebong t, baekje-restorasyon, bodeok, dongdan, jeongan, masakado (takvim hatası: ay-güneş sayıları solar sanılmış), goryeo f ve **t** (1392-07-17 → 1392-08-04; sillok «7. ay 17» ay-güneş günü), silla t, goguryeo t, baekje t, yamato f.

## 2. Ulaşılamayan / okunamayan kaynaklar
- archive.org tam metinleri (Cambridge History of Japan 1-3, Lee *A New History of Korea*, Rabinovitch *Shōmonki*): `_djvu.txt` boş döndü (ödünç sınırlı). Bu yüzden Kamakura f için 1183 Ekim sarayı yetkisi, 1192 şogunluk, Fujiwara-Ōshū 1189, Zenkunen/Gosannen ve Shōmonki'nin kendi metni okunamadı.
- Azuma Kagami: Wikisource'ta yalnız j.1-5 (1180-1185) var. j.6+ (Ōshū seferi 1189) yok.
- ja.wikisource'ta Shoku Nihongi, Nihon Kōki, Shōmonki, Mutsu waki YOK; zh.wikisource'ta Shoku Nihongi/Nihon Kōki/Fusō ryakki/Hyakurenshō kısmen var (Mutsu waki ve Gosannen yok).
- Samguk yusa (Gojoseon MÖ 2333, Garak-guk gi Suro 42), Weilue, Goryeosa Tamna-hyeon Sukjong 10 cümlesi, Nihon Shoki Mimana 562, Cambridge History of Korea, TDV: bu oturumda açılamadı/okunmadı.
- WebSearch (standart) Oshū Fujiwara ve Masakado için yalnız Vikipedi türevi sayfalar döndürdü — kaynak olarak kullanılmadı.

## 3. İstekler / kararlar (Emre)
1. **Goryeo t ve Joseon f**: `1392-07-17` takvim hatası (ay-güneş 17. gün). Doğru: Gongyang indirildi 1392-07-31, Taejo tahta 1392-08-05 (Jülyen). Atlas Joseon künyesi de kontrol edilmeli.
2. **Heian-Japonya t=1185**: imparatorluk sarayı 1868'e sürer; künye dönem sınırı mı, polity mi (KOJA_REF.json).
3. **Kamakura f**: kurumsal 1185-12-22 / fiilî 1180-11-04.
4. **Nagaoka-kyō (784-794)** ayrı kayıt/dönem mi (şu an Nara kaydına eritildi).
5. **Okjeo, Dongye, Masakado-shinno**: kaynaklar şeflik/epizot gösteriyor, polity ölçütü (kral + belirli toprak + birkaç yıl) zayıf — elensin mi?
6. Jeongan, Mahan, Jinhan, Byeonhan, Jin devleti, Buyeo, Okjeo, Dongye, Na, Yamatai, Gojoseon: f/t kaynakta olmadığı için **null**. Atlas çizimi için Emre'nin "tahmin yaz" demesi gerekir.
7. **Dongdan t** (şu an 929-01 ay): Liao shi 928 halk taşıması + 930 Bei kaçışı; Vikipedi 936 dayanaksız. Dongdan'ın 938'e dek idarî ad olarak sürdüğü ipucu var (Liao shi j.4).
8. Dong-Buyeo, Jolbon-Buyeo, Geumgwan Gaya/Daegaya ayrı, Choe rejimi (1196-1258), Mongol Ssangseong/Dongnyeong ve Kyushu/Izumo/Kibi Yayoi-Kofun şeflikleri: eklenmedi (kaynak/ölçüt yetersiz); gerekirse ayrı oturum.
9. TDV'de Kore/Japonya maddeleri bu oturumda aranmadı (ilgi sınırlı); Emre isterse tek tek TDV ve Cambridge History taraması ayrı iş.

Ayrıntılı künye düzeltme listesi: `denetim/once1281/dilimler/KOJA_REF.json` (15 madde).
