# Künyesiz kronoloji maddesi — ölçüm ve bağlama (10 Kasım 2026)

Emre: "ortamda künyesi olmayan kronoloji maddesi kalmasın; arkeolojik devirler Arkeoloji künyesinde, devlet olabilenler kendi künyesinde."

## Ne yapıldı
- `data/olay_taraf.js` (`window.OLAY_TARAF`): OLAYLAR* dış (kapsam:"dis") maddesi → künye id dizisi. Anahtar `<t>|<b>`; madde dosyalarına dokunulmadı.
- `js/app.js cokTarafliKronolojiEkle`: eşlemeyi okur, künye penceresi [f,t] dışındakini indirmez, `t` yoksa açık uç sayar.
- `js/suzgec.js`: dış arkeolojik maddeler Osmanlı listesinde hiçbir eşikte görünmez; Arkeoloji künyesi önem süzgecinden muaf.
- Sınıflandırma: 2620 tekil madde, 15 Sonnet ajanı (pilot + 14 parti), kural tabanlı adaylar yalnız öneriydi; kimlik ve pencere betikle doğrulandı (geçersiz id 0, pencere ihlali 0).

## Ölçüm (node, ana veri; tarayıcıda da doğrulandı)
| | önce | sonra |
|---|---|---|
| dış madde, hiçbir künyede yok | 2637 | 284 (89 arkeoloji + 195 başka) |
| eşlenen madde | 0 | 2491 (tarayıcıda 2421: 77'si güvensiz kaynak damgasıyla zaten gizli) |

Sınıflandırma çıktısı: bağlandı 2491 · künye yok 32 · arkeoloji künyesine kalan 86 · genel 1 · belirsiz 10.

## Bulunamadı
- Katalogda künyesi olmayan taraflar (maddeler başka künyelere bağlı, ya da hiçbirine bağlanamadı). Tam serbest metin liste aşağıda; aynı ad bir kez sayıldı:
  - Pontus (pencere dışı, f=-280)
  - Lizimakhos Krallığı (pencere dışı)
  - Antigonos Krallığı (pencere dışı)
  - Rodos (pencere dışı, f -406)
  - Fokaia/Elea
  - Atina (tiranlık dönemi, pencere dışı)
  - Trakya Khersonesos / Atina
  - Atina (arkhonluk dönemi, pencere dışı)
  - Delphi Amfiktyonia / Kirrha
  - Atina (pencere dışı)
  - Miletos/Olbia
  - Lokroi Epizephyrioi
  - Lidya (Mermnad; Lidya künyesi -0679 başlar, pencere dışı)
  - Gela
  - Medya (künye -0677 başlar, pencere dışı)
  - Khalkis, Eretria
  - Rhegion
  - Naksos (Sicilya)
  - Kuşşara/Neşa (Anitta)
  - Xia hanedanı
  - Uruk V. Hanedan (Utu-hegal); gutium pencere dışı (son -2111, madde -2110)
  - akad pencere dışı (son -2153, madde -2141)
  - Srivijaya (683 öncesi)
  - Sufrî Hâricîler (Kayrevan)
  - Rurik/Novgorod (Kiev Rus'u 882'de başlar)
  - Cenova Cumhuriyeti (1056; katalogda 1099'dan)
  - Valensiya (El Cid) Prensliği (pencere dışı, f=1094-06-15)
  - Haçlılar (Elbistan, 1097; Haçlı devletleri henüz kurulmamış)
  - Antakya Prinkepsliği, Cenova (tarih künye penceresi öncesi)
  - Livonya Piskoposluğu
  - Halacî Leknevtî (Bengal) sultanlığı
  - Âl-i Mezkûr (Bûşehr) / Bahreyn 1753
- Osmanlı ana künyesi `DEVLETLER`de yok (`osmanli` sentetik); tarafı Osmanlı olan dış maddeler Osmanlı listesinde zaten duruyor.
- Antik künyeler zayıf: Frig 0 madde, Sümer 4, Akad 8. Bu bir araştırma işidir.
- Arkeoloji ölçütü: etiket `arkeoloji` ≡ `kaynak_turu:"arkeoloji"` (246 madde, uyuşmazlık 0).

## Sınırlar
- Sınıflandırma model çıktısıdır, kaynak değildir; eşleme yalnız "bu madde hangi künyenin listesinde görünsün" sorusunu cevaplar, tarih ya da sınır iddiası taşımaz.
- Örnekleme: 5 partiden 40 madde elle okundu, hata görülmedi (örneklem küçük; ölçülmüş doğruluk değil).
