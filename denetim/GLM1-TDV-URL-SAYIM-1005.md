# GLM1-TDV-URL-SAYIM-1005 — veri-atıf adreslerinin canlılık sayımı

Durum: **KOŞUYOR** (6 Ekim 2026, GLM1; şartname `oturumlar/GLM-GOREV-1005.md` ②).
Evren: `data/*.js` içinde atıflı TDV adresleri (şartname ölçüsü: 5 Ekim'de 153 tekil).
İstekler ① önbellek çekimiyle BİRLEŞİK (ayrı tarama yok); aralık 1 sn.

## 0. 🔴 ÖNGÖRÜ — çekime BAŞLAMADAN ÖNCE mühürlendi (6 Ekim, GLM1)

**✅200 ≥ %92 (≈141+ adresten 141'i) · 🔴302+404 ≤ %8 (0-12) · ⚪000/5xx ≤ %3
(yeniden denemeyle çoğu 200'e döner).**

Niçin: veri atıfları insan eli GERÇEK maddelerin TAM slugıyla yazılıyor — 1006F'de
ölü-slug kovasında TAM atıf **0** çıktı ve ölü kovadaki uzun slugların 10/10'u
canlıydı (1006G). Ölenler tuzak-② biçim farkı (kısa/uzun slug) ya da kaldırılmış
madde olur; 302 Location çoğunlukla `arama/` hedeflidir ve yeni slug TAŞIMAZ (1006E).


## 1. SONUÇ — evren 153 adres (şartname ölçümüyle AYNI: 153)

| Kova | Sayı | % |
|---|---|---|
| ✅ 200 CANLI | **152** | %99.3 |
| 🔴 302 ÖLÜ (Location `arama/` → KESİN) | **1** | %0.7 |
| 🔴 404 · ⚪ 000/5xx · ölçülemedi | 0 · 0 · 0 | — |

⚠️ **Alet arızası beyanı:** ilk koşu şemasız URL'lerle atıldı; curl şemasızı `http://`
varsayıp 153 adrese **301** döndürdü — o tur ölçüm üretmedi (gövde çekilmedi, yönlendirme
satırı geldi), https ile yeniden koşuldu. TDV'ye 153 ek istek gitti; kural dışı ama ölçümü
etkilemedi. `-L` (yönlendirme takibi) bilinçli KAPALI: 302'yi görmek gerek.

## 2. 🔴 ÖLÜ — tek öğe, tüm ayrıntısıyla

- `islamansiklopedisi.org.tr/piza` → **302** · Location `https://islamansiklopedisi.org.tr/arama/piza` · veri: devletler.js:7644;paket_05.js:7663

- **Veri bağlamı:** `devletler.js:7644;paket_05.js:7663` — `piza` atfı `piombino`
  künyesinin (Appiani Prensliği, f:1399-02-19) **kaynak alanında BEYAN** olarak duruyor:
  *"TDV kapsam dışı — `islamansiklopedisi.org.tr/piza` 302 ölü (raw HTML doğrulandı),
  Batı Avrupa TDV kapsamı zaten %0 ölçülmüş (§4)"* — yani veri bu ölümü belgelemek için
  atıfta bulunuyor, TDV'yi KAYNAK olarak kullanmıyor; künyenin kaynağı Wikipedia
  'Principality of Piombino' + Britannica 'Elba'. Ölçüm beyanı doğruladı: 302 +
  Location `arama/piza`.
- **Doğru slug araması (kural ⑨):** `arama/?q=piza` → **0 aday** (kod 200, sonuç
  listesi boş) → **bulunamadı**. "TDV'de yok" hükmü verilmez; GET doğrulaması yapılabilecek
  aday çıkmadı. (Türkçe yazımda Pisa maddesi başka adla duruyor olabilir — hüküm
  koordinatörün.)

## 3. ✅ CANLI 152 slug (üyelik listesi — TSV'de url+kod+veri yeri tam durur)

⚠️ Listedeki `arama` ve `ARAMA-` girdileri madde atfı DEĞİL: verideki arama-sayfası
atıflarını (`…/arama`, `…/arama/`) URL deseni yakaladı; ikisi de 200 (canlı sayfa).
Madde atfı evreni fiilen 151 + 1 beyanlı ölü.

abdulaziz-b-suud, abdurrahman-i, abdurrahman-iii, afganistan, ahiska, amerika, amerika-birlesik-devletleri, ammarogullari--trablusgarp, antakya, arama, ARAMA-, arap-birligi, arjantin, arnavutluk, azak, azerbaycan, bahreyn, baki--sair, baku, basra, bati-trakya, batu-han, batum, belcika, belensiye, beyrut, birinci-dunya-savasi, bitlis, bulgar, bulgaristan, burhanpur, cimma, dagistan, darfur, derbend--dagistan, dubrovnik, eflak, eftasiler, emanullah-han, endulus, erdel, erzincan, erzurum, etiyopya, fahreddin-pasa, farukiler, fas, ferec, filistin, fransa, fuzuli, gazze, girit, hafsiler, halep, hayfa, hilafet, hirvatistan, hotin, hudiler, idil-bulgar-hanligi, irak--ulke, isbiliye, iskenderiye, isvec, japonya, kahramanmaras, karlofca, katar, kelbiler, kesmir, kibris, kirmansah, kubbetus-sahre, kudus, kurtuba, kutulamare, kuveyt, liberya, libya, limni, lubnan, macaristan, makedonya, mayurka, medine, mercidabik-muharebesi, mescid-i-nebevi, misir, montro-bogazlar-sozlesmesi, mora, muhammed-v, mulukut-tavaif, murabitlar, murad-iii, mursiye, mus, mustafa-kemal-ataturk, mutevekkil-alellah-yahya-hamiduddin, muvahhidler, nasriler, nedim--divan-sairi, nefi, nepal, nusretiye-camii, oniki-ada, ozbekistan, pasarofca-antlasmasi, polonya, portekiz, rusya, sadabad-pakti, sanliurfa, sarakusta, sarikamis-harekati, sattularap, sehrizor, semadirek, senusiyye, serif-huseyin, sicilya, sirbistan, sofya, somali, suriye, suudi-arabistan, taif, tanca, tasoz, tebriz, trablusgarp-savasi, trabzon, tuleytula, turkiye, turkmenistan, tuva, ukrayna, ulucami, uman, usbune, van, vidin, yafa, yakutlar, yanya, yemen, yugoslavya, yunanistan, zellaka-savasi, zengibar, ziriler, zunnuniler

Önbellek: 88'i Faz B'de zaten vardı · 64'ü bu koşuda çekilip yazıldı
(GLM1-TDV-ONBELLEK = 937 + 64 = **1001** dosya).

## 4. ÖNGÖRİ KARŞILAŞTIRMASI (§0 mührü)

| Mühür | Ölçüm | Tuttu mu |
|---|---|---|
| ✅ ≥ %92 | %99,3 (152/153) | ✓ |
| 🔴 ≤ %8 (0-12) | 1 — üstelik veri tarafından BEYANLI | ✓ (altında) |
| ⚪ ≤ %3 | 0 (000/5xx yok; yalnız alet arızası turu 301) | ✓ |

Mekanizma beklentisi (atıflar insan eli TAM sluglara yazılır; ölüler tuzak-② olur)
tam tuttu — tek ölen bile tuzak-② değil BEYAN sınıfı çıktı; ölçülen evrende
**beklenmedik ölüm 0**.

## 5. TESLİM — üçlü

**① NE ÖLÇTÜM** — 153 atıf adresine https GET (1 sn aralık; 000/5xx yok), kod+Location+
gövde kaydı; önbelleğe 64 yeni gövde. TSV: `GLM1-TDV-URL-SAYIM-1005.tsv`
(url · slug · kod · location · önbellekte_mi · yazıldı_mı · veri_yerleri — 153 satır).
**② NE BULAMADIM** — `piza` için doğru slug: arama 0 aday, **bulunamadı**; 404/000/5xx
hiç olmadı.
**③ NE İSTİYORUM** — tek ölü beyanlı olduğundan ve künye kaynağı TDV-dışı olduğundan
düzeltme ihtiyacı ölçülmedi; `piza` satırının defterde "BEYANLI 302" olarak işlenmesi
önerimdir (hüküm koordinatörün).

