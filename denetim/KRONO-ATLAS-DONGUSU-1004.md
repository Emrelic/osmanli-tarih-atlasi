# KRONO-ATLAS-DONGUSU-1004 — kronoloji maddesi atlasın kendi boyamasından mı türetilmiş?

Oturum: KRONO-DOGRULUK-ORNEKLEM-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`KRONO-ORNEKLEM-2-1004.md`](KRONO-ORNEKLEM-2-1004.md) §2.4 (304 Şam 1918 "Hama, Humus").
**Veriye yazılmadı, düzeltme yapılmadı.**

## 0. Evren, sayım ve seçim — ÖLÇÜMDEN ÖNCE DONDURULDU

- Kronoloji evreni: `data/olaylar*.js` **1761 madde** (node `vm` dökümü, 1. ve 2. turla aynı).
- Yerleşim evreni: `girdi.yukle()` — **4298 nokta** (regex DEĞİL; yükleyicinin kendisi).
- Kalıp araması `d` + `b` alanlarında, büyük/küçük harf duyarsız:

| kalıp | madde |
|---|---|
| "aynı tarihte" | **77** |
| "ile birlikte" | 28 |
| "aynı gün" | 26 |
| "birlikte elden çıktı" | 0 |
| **en az biri** | **130** (99'u `ek*`) |
| ⤷ "aynı tarihte … yerler/yerleşimler:" LİSTE biçimi | **76** |
| ⤷ kalıplı cümlede en az bir `girdi` yerleşim adı geçen | 107 |

- Sıralama ölçütü: kalıbı taşıyan cümle(ler)de geçen **farklı `girdi` yerleşim adı sayısı**
  (uzun ad önce eşlenir, alt dizgi tekrarı sayılmaz). Eşitlikte küçük indis önce.
  Betik: scratchpad `dongu1.py` (sayım) · `dongu2.py` (döküm).
- **Seçilen 10** (sayı = kalıplı cümledeki yerleşim adı):

| sıra | # | dosya | t | başlık | ad | kalıp | `kaynak:` |
|---|---|---|---|---|---|---|---|
| 1 | 9 | olaylar.js | 1402-07-28 | Ankara Savaşı — Fetret Devri | **116** | aynı tarihte elden çıkan | `ankara-savasi` |
| 2 | 64 | olaylar.js | 1878-07-13 | Berlin Antlaşması | 10 | aynı tarihte elden çıkan | `berlin-antlasmasi` |
| 3 | 786 | olaylar_ek4.js | 1841-02-25 | Mısır ordusu Suriye ve Çukurova'yı boşalttı | 10 | aynı tarihte elden çıkan | `suriye` |
| 4 | 731 | olaylar_ek4.js | 1805-07-03 | Mısır valiliği fermanı | 8 | aynı tarihte tâbi katmana geçen | `misir` |
| 5 | 291 | olaylar_ek.js | 1812-05-28 | Bükreş Antlaşması — Besarabya | 5 | aynı tarihte elden çıkan | `bukres-antlasmalari` |
| 6 | 22 | olaylar.js | 1517-01-22 | Ridaniye — Mısır'ın fethi | 4 | aynı tarihte katılan | `ridaniye-savasi` |
| 7 | 55 | olaylar.js | 1821-03-25 | Yunan İsyanı başladı | 4 | aynı tarihte elden çıkan | `mora` |
| 8 | 65 | olaylar.js | 1881-05-12 | Tunus'un işgali | 4 | aynı tarihte elden çıkan | `duyun-i-umumiyye` |
| 9 | 295 | olaylar_ek.js | 1881-07-02 | Teselya'nın Yunanistan'a bırakılması | 4 | aynı tarihte elden çıkan | `tesalya` |
| 10 | 519 | olaylar_ek16.js | 1308-01-01 | Aydınoğulları Beyliği'nin kuruluşu | 4 | ile birlikte | `aydinogullari` |

📌 Ölçümden önce görülen ama hükme katılmayan iz: #22'nin `ic_not_d` alanı **"eski ifade:
Aynı tarihte haritaya katılan diğer yerleşimler:"** diyor — yani kalıbın eski biçimi
"HARİTAYA katılan" idi. #786 ve #731 metinleri de "Haritada … geçer" diye haritayı anlatıyor.
Bu, sınıfın kökeni hakkında bir ipucu; ölçüm değil.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- **② evet + ① hayır: 8 / 10 (aralık 6–9).**
- Mekanizma: "Aynı tarihte (elden çıkan | katılan | tâbi katmana geçen) diğer yerleşimler:
  …" son eki, yerleşim dosyalarındaki aynı-gün kırılmalarından MEKANİK olarak üretilmiş
  ve maddenin ana metnine eklenmiş. Kaynak (çıplak TDV slug) bu adları saymıyor.
- Beklenen istisnalar: **#519** (kalıp "ile birlikte", TDV cümlesinden geliyor — ①
  muhtemelen evet) ve antlaşma maddelerinden biri (#64 Berlin ya da #291 Bükreş: kaynak
  bazı adları — ör. Bender, Akkirman, Varna — sayıyor olabilir, ① kısmen).
- ③ öngörüsü: liste uzadıkça bağımsız kaynak desteği düşer; **#9 Ankara'nın 116 adının
  çoğu (ör. Bursa, Edirne, İznik) 1402'de "elden çıkmadı"** — Osmanlı şehzadelerinin elinde
  kaldı. Yani ③ bu madde için yalnız "desteksiz" değil, "yanlış" çıkacak.
- ② ölçümü: her ad için `girdi.yukle()` kaydının `s:` dönemlerinde `t` gününde biten /
  başlayan bir dönem var mı (sahip değişimi tam o gün mü). `v:` (tâbi) ayrıca bakılır
  (#731 "tâbi katmana" diyor).

## 2. Ölçüm

(aşağıda)
