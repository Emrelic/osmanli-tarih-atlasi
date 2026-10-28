# UMIT-W8-D7ISG-1006 — Değişmez 7 `isg:` okusun

Ağaç: `C:\atlas-w8` (detached `origin/main` = `8552686e`). Ürün: `denetim/D7-ISG-1006.diff`.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (5 Ekim 2026, kod yazılmadan)
Veride bugün 4299 kayıt · 269 `isg:`'li kayıt · 368 `isg:` dönemi (ölçüldü, `girdi.yukle`).
Kurulacak ölçüt: o gün `isg:` altındaki kayıt `sahip()`te egemeninin kimliğini değil
`isg:<işgalci-ailesi>` döndürür (ayrı ad alanı); kendi `isg:` dönemi başlangıçları ayrı bir
kovada (`I-isgal`) sorulur, ana sayıya KATILMAZ.
- Ö1: bugünkü veride ana D7 sayısı **734'te kalır ya da en çok ±3 oynar** (işgal günleri
  çoğunlukla 1878-1922; o tarihlerde başlayan egemen dönemi az).
- Ö2: `I-isgal` kovası boş değildir, ~10-40 ada (Anadolu 1919-22 ve Mısır 1882 kümeleri).
- Ö3: W5 TAM EMSAL senaryosunda ana sayı 731 kalır; düşen üçü (Radom 1915-07-01 HABSBURG,
  Zamość 1915-07-01 almanya, Kielce 1915-10-01 HABSBURG) `I-isgal` kovasında
  `isg:HABSBURG` / `isg:almanya` olarak yeniden görünür.

## 1. Ne yapıldı (diff: `denetim/D7-ISG-1006.diff`, 348 satır, LF, CR 0)
`arac/denetle.py` `degismez7(Y, isg_kova=None)` — imza geriye uyumlu (eski çağrılar aynen çalışır):
- `ISG[i]` = kaydın `isg:` dönemleri, kimlik `_d7_aile()`'den geçer (avusturya → HABSBURG).
  Ayrıştırıcı yazılmadı: `girdi.yukle()`'nin verdiği `y["isg"]` (f/t/d) okunur.
- **İki görünüm:**
  - `sahip()` HUKUKÎ: o gün `isg:` altındaki kayıt `"isg:<işgalci>"` döndürür, yani **hiçbir
    egemenin bileşenine katılmaz** (ne kendi egemeninin ne işgalcinin egemen gövdesinin).
    Ana sorular (d/v/s dönemleri) bununla sorulur.
  - `sahip_df()` FİİLÎ: işgal altındaki kayıt işgalcinin kimliğini döndürür. Yalnız işgal
    cepleri sorulurken kullanılır: "bu işgal cebi işgalcinin gövdesine bağlı mı?"
- Kendi egemen dönemi **işgal altında başlayan** kayıt sorulmaz, sayılır
  (`isg_kova["egemen-isgal-altinda"]`).
- Egemen soruda geçici-cephe sınavında kaydın KENDİ sahibi de jure okunur (egemenlik işgalle el
  değiştirmez; "izolasyon kapandı" sayılmaz).
- Her `isg:` döneminin başlangıcı aynı beş muafiyetle sorulur; sonuç `isg_kova["ihlal"]`
  (`sahip = "isg:X"`) → **ana sayıya KATILMAZ, tavanı yok.** `main()` tek blokta basar.
- `denetim/ARAC-D7-ISG-SINAV-1006.py` (diff'te, yeni dosya).

## 2. Sınav — iki yön, GEÇTİ (çıkış 0)
YÖN 1 (yapay 5×10 ızgara + uzak B gövdesi): N 1650 A ana listede ada ✓ · eski kod N'yi
görmüyor ✓ (körlük gerçekti) · duvarın 5 kaydı `isg:B` cebi ✓ · ana listede `isg:` yok ✓ ·
egemen-isgal-altinda = 1 ✓.
YÖN 2: yapay ızgara `isg:`'siz → eski/yeni ihlal + muaf birebir ✓ · **gerçek veri, 4299
kaydın 269'undan `isg:` silinerek → eski 734 = yeni 734, liste + muaf birebir** ✓ · kova boş ✓.
Eski kod `git show origin/main:arac/denetle.py`'den ayrı modül olarak yüklenir.

## 3. ÖNCE/SONRA — bugünkü veri (`degismez7` doğrudan)
| | ÖNCE (origin/main) | SONRA (V2, diff) |
|---|---|---|
| ana D7 | **734** | **733** |
| muaf | beyan 77 · tecrit 4696 · ada 8 · küçük 307 · cephe 77 | beyan 77 · tecrit 4672 · ada 8 · küçük 306 · cephe 77 |
| isg kovası | — | 34 cep · egemen-isgal-altinda 176 |

**Şart 1 — sayı değişti (734 → 733); sebebi VERİDE ZATEN `isg:`'li D7 üyesi var, ölçüt değil:**
- DÜŞEN tek üye: `1919-09-10 Lvov itilaf-emaneti` (ada Lvov+Yazlofça, 876 km). Lvov'un
  `isg: polonya 1918-11-22 → 1923-03-15` penceresi var; itilaf-emaneti egemen dönemi o
  işgalin İÇİNDE başlıyor. Ölçüte göre o gün haritada egemen yok → soru sorulmaz.
- YENİ üye: **0**. İşgal altındaki komşuları egemen gövdeden çıkarmak bugünkü veride hiçbir
  yeni ada açmadı.
- Muaf sayacındaki −24 tecrit / −1 küçük-devlet: aynı sebep — işgal altında başlayan 176 egemen
  dönemi artık sorulmuyor (94'ü işgalle AYNI GÜN başlıyor: Mısır 1914-12-18 misir-sultanligi ·
  Tunus 1881-05-12 · Kuveyt 1914-11-22; 82'si işgal İÇİNDE: Anadolu 1920-04-23 tbmm-turkiye
  — İzmir, Manisa, Aydın, Muğla, Antalya, Adana, Tarsus · Mısır 1922-03-15 misir-kralligi).
- Hüküm sizde: Lvov'un düşmesi ölçütün doğal sonucu (işgal altındaki toprak egemenin adası
  sayılmaz). Kabul edilmezse çare tek satır: işgal altında başlayan egemen dönemini atlamak
  yerine işgal BİTİNCE sormak — ölçmedim, öneri.

## 4. Ölçüt seçimi — iki varyant ÖLÇÜLDÜ
| | V1: işgal cebi ayrı ad alanında (`isg:X` yalnız kendi cepleriyle) | V2: işgal cebi işgalcinin FİİLÎ gövdesine bağlanır |
|---|---|---|
| ana D7 | 733 | 733 (aynı — ana soru iki varyantta da hukukî) |
| isg kovası | 24 | 34 |
| isg muaf küçük-devlet | **45** | **0** |
| TAM EMSAL Radom/Kielce | küçük-devlet muafına yutuldu | doğru sınıf (aşağıda) |

V1'de `isg:X` ad alanının "toplamı" yalnız işgal cepleridir; küçük-devlet muafı (`toplam <
3×ada`) bu yüzden 45 cebi yutuyor — muafiyetin anlamı ("devlet KENDİSİ küçük") bozuluyor ve
cebin işgalciye bağlı olup olmadığı hiç sorulmuyor. V2'de soru anlamlı: Hotin 1788
`isg:HABSBURG` cebi Lvov/Çernovitz üzerinden Galiçya'ya bağlanıyor ve ölçüm bunu görüyor.
**⇒ diff V2'dir.**

## 5. W5 TAM EMSAL senaryosu yeni kapıyla (ağaçta geçici, diff'e GİRMEDİ)
Senaryo W5'in `ARAC-UMIT-W5-D7-TAMEMSAL-1006.py`'si birebir (7 KASA penceresi `isg:`'ye, s:
uzatıldı + Lublin `isg: avusturya 1915-07-30 → 1918-11-11`). Taban önce W5'le aynı çıktı:
eski kod 734 / 731.
| | eski kod | yeni kod |
|---|---|---|
| TABAN | 734 | 733 (Lvov) |
| TAM EMSAL + Lublin | 731 | 730 (Lvov) · isg kovası 34 → **35** |
| TAM EMSAL, Lublin'siz | — | 730 · isg kovası 34 → **37** |

731'de düşen üçü **artık görünmez değil**:
- **Lublin'siz:** üçü de işgal cebi olarak geri geliyor:
  `1915-07-01 Radom (Polonya) isg:HABSBURG` (ada Radom, 171 km Krakov, A-koridor) ·
  `1915-07-01 Zamość isg:almanya` (ada Zamość, 185 km Kielce, A-koridor) ·
  `1915-10-01 Kielce isg:HABSBURG` (ada Kielce+Krakov+Radom, 185 km Zamość, A-koridor).
- **Lublin işgali ile:** Zamość cep olarak kalıyor; Radom ve Kielce **isg geçici-cephe
  muafına** geçiyor (isg muaf cephe 3 → 6). Sebep Lublin'in Avusturya işgalinin (1915-07-30)
  bu cepleri bir yıl içinde Habsburg gövdesine bağlaması — W5'in "RADOM+LUBLIN s: avusturya"
  varyantında (732, ikisi geçici-cepheye) ölçtüğüyle aynı mekanizma. Körleşme değil sınıflama.
- 📌 Kayda değer: Zamość 1915 `almanya` kaydı Lublin işgal bölgesinin (Avusturya) içinde;
  cep olarak görünmesi muhtemelen verinin `d:` kimliği sorusudur — W5'in alanı, ölçmedim.

## 6. Tavan
`BEKLENEN_ENKLAV_SORGU = 731`, `KAMPANYA_DONDURMA = True` — DEĞİŞTİRİLMEDİ. Bugün 734 > 731
(dondurma yüzünden ihlal sayılmıyor); diff ile 733. **Öneri:** kampanya sonu hesabında taban
733 + "Lvov 1919 itilaf-emaneti işgal altında başlıyor, sorulmadı" gerekçesi. İşgal kovasına
tavan önermiyorum (bilgi satırı; kapatılacak borç değil, işgal cepleri çoğunlukla meşru).

## 7. YAN SORU — `denetle.py`'de hangi denetim `isg:` okuyor? (origin/main, AST + çağrı okuması)
Ölçüm: her üst düzey işlevde yorumsuz kodda `"isg"` geçişi + `main()`'deki çağrı parametreleri.
| Denetim | isg: okunuyor mu | Not |
|---|---|---|
| Değişmez 1 sahipsizlik (`degismez1`) | hayır — **ilgisiz** | işgal sahiplik değil; motor da okumaz (`girdi.py:177`) |
| Değişmez 1b iç boşluk (`degismez1b`) · boşluk cinsi | hayır — ilgisiz | de jure dönem zinciri |
| Değişmez 2 Osmanlı senkronu (`degismez2(…)` d/v) | hayır — tasarım | 2i ayrı sorar |
| Değişmez 2s yabancı senkron (`("s",)`) | hayır — tasarım | 2i ayrı sorar |
| **Değişmez 2i işgal senkronu** (`("isg",)`, `main` :5736) | **evet** | |
| **Değişmez 2t kırılmasız madde** (`kirilmasiz_madde(…, kir_isg)`) | **evet** | |
| İş kuyruğu ayrımı (`main` :5762-5763, kuyruk partileri) | **hayır — İLGİLİ** | yalnız d/v ve s sayılıyor; kuyruk partisindeki `isg:` kırılması ayrı sayaçta görünmüyor |
| Değişmez 3 (`degismez3`) · 3z (`degismez3z`) | hayır — ilgisiz/tasarım | `m:`/`kd:` merkez çelişkisi de jure sorulur |
| **Değişmez 4 künye penceresi** (`degismez4`) | **evet** (1 Ekim 2026) | |
| Değişmez 5 kur:/bit: (`degismez5`) | **hayır — İLGİLİ** | `kur:` öncesinde ya da `bit:` sonrasında başlayan `isg:` dönemi (hayalet işgal) sorulmuyor — ölçmedim, kaç kayıt olduğu bilinmiyor |
| **Değişmez 7** (`degismez7`) | origin/main: **hayır** → diff ile **evet** | bu iş |
| Değişmez 8 şehir bölgesi (`degismez8`, `_d8_sahip`) | hayır — **BİLEREK** | `:4827` "DE JURE sahibi (motorun gördüğü; `isg:` HARİÇ)"; muafiyet listesinde `isg:` |
| **Dönem sağlığı** (`donem_sagligi`) | **evet** | sıfır/ters/çakışma `isg:` için de |
| Kaynaksızlık tavanı (`kaynaksizlik_olc`) | **hayır — İLGİLİ** | yalnız `s:` taşıyanları sayar; `isg:` dönemlerinin `kaynak:` alanı ölçülmüyor |
| Konum · mükerrer madde · önek · hassasiyet düşüşü · savaş senkronu | hayır — ilgisiz | yerleşim dönemi okumaz ya da kronoloji denetimi |
**Sayı:** yerleşim dönemi okuyan 15 denetim/daldan (tablodaki satırlar, 3/3z ayrı) `isg:` okuyan **4** (2i · 2t · 4 · dönem
sağlığı; diff ile D7 beşinci). origin/main'de okumayan 11'in 1'i D7 (bu iş), 7'si ilgisiz ya da tasarım gereği (1 · 1b · 2 ·
2s · 3 · 3z · 8-bilerek), **3'ü İLGİLİ ve okumuyor: Değişmez 5 (kur:/bit:), kaynaksızlık
tavanı, iş kuyruğu ayrımı.** Ürün tablodur,
düzeltme yapılmadı.

## 8. Tam `denetle.py` ÖNCE/SONRA (ağaç `C:\atlas-w8`)
İkisi de **çıkış 2** (taze ağaçta `devletler_harita.js` yok → D8 ölçülemedi; değişiklikten
bağımsız). 26 özet satırı (`Değişmez…` · `Ek denetim…` · `SONUÇ`) karşılaştırıldı: **tek fark D7**:
```
ÖNCE   Değişmez 7  🧊  734 sorgusuz enklav (beklenen 731)
SONRA  Değişmez 7  🧊  733 sorgusuz enklav (beklenen 731)
                   isg: 34 işgal cebi (… ana sayıya KATILMADI) · 176 egemen dönemi işgal altında başlıyor (sorulmadı)
                        isg muaf: beyan 0 · cografi-tecrit 25 · ada-fethi 2 · kucuk-devlet 0 · gecici-cephe 3
```
Öteki bütün değişmez/ek denetim satırları birebir.

## 9. Öngörü sınavı (§0)
- Ö1 ✓ (733, ±3 içinde) — ama "neden"i öngörmemiştim: oynatan, işgal altında BAŞLAYAN egemen
  dönemleri (176) oldu, komşu dışlaması değil (yeni üye 0).
- Ö2 ✓ (V1 24 · V2 34; ikisi de 10-40 aralığında). Küme öngörüsü kısmen tuttu: Anadolu 1919-22
  ve Mısır var ama Mısır 1882 değil 1798 (Fransız); 1882 Mısır cebi listede yok — sebebi ölçülmedi.
- Ö3 **kısmen çürüdü:** ana sayı 731 değil 730 (Lvov). Üçünün `isg:` kovasında görünmesi
  yalnız Lublin'siz tuttu; Lublin işgaliyle Radom/Kielce geçici-cephe muafına gidiyor (§5).

## 10. Dosyalar
- `C:\atlas-umit\denetim\D7-ISG-1006.diff` — `arac/denetle.py` + yeni
  `denetim/ARAC-D7-ISG-SINAV-1006.py`. LF, CR 0. Taze `origin/main` (8552686e) ağacında
  `git apply --check` ileri ✓ · `-R` ✗.
- Bu rapor. Commit YOK. Motor tuzuna (uret_petek · renkler · girdi · motor_onbellek)
  dokunulmadı. `C:\atlas`'a dokunulmadı.
