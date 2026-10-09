# UMIT-W54-GDANSK-1918-1006 — Gdańsk 1918-11-11 "polonya" dilimi

**Tür:** ölçüm + öneri · **UYGULAMA YOK** (yerleşim ve kronoloji dosyaları koordinatörün).
**Ağaç:** `C:\atlas-w54` = `origin/makine/umit` @ `cac68699` (detached). Bütün denemeler
geçici düzenleme → `denetle.py` → `git checkout --` ile geri alındı; ağaç temiz bırakıldı.
**Ek:** `denetim/UMIT-W54-GDANSK-1006.diff` (2 dosya, +2/−1; `git apply --check` w54'te ve
atlas-umit'te temiz).

## Hüküm
**Kuşku DOĞRU.** `data/yerlesimler.js` Gdansk kaydı `{f:"1918-11-11",t:"1920-11-15",d:"polonya"}`
taşıyor. Danzig hiçbir zaman Polonya'ya verilmedi. 10 Ocak 1920'ye dek Almanya'daydı
(Versay yürürlüğe girene kadar). 10 Ocak 1920'den 15 Kasım 1920'ye dek Başlıca Müttefik
Devletlerin egemenliğindeydi. Kayıt bu kusuru kendisi de not ediyor (`⚠️ … 'polonya' dilimi YANLIŞ
… dokunulmadı, karar 1.MURAT`), yani bulgu yeni değil, **BEKLEYEN KARAR**.
Atlasın hatası: **1918-11-11 → 1920-11-15 arası ~2 yıl yanlış devlet.**
(1939 ilhakı ve 1945 pencere dışında: pencere 1923-10-29'da biter.)

## ① Kayıt (canlı `GIRDI_DOSYALARI`, 93 dosya — Gdansk yalnız `yerlesimler.js`te, tek kayıt)
```
1281-01-01 → 1466-10-19 almanya
1466-10-19 → 1569-07-01 polonya-erken
1569-07-01 → 1793-01-23 lehistan
1793-01-23 → 1807-07-09 prusya
1807-07-09 → 1814-02-04 danzig-serbest-sehri-1807   (Gedanopedia)
1814-02-04 → 1871-01-18 prusya
1871-01-18 → 1918-11-11 almanya
1918-11-11 → 1920-11-15 polonya                      ← YANLIŞ
1920-11-15 → 1923-10-29 danzig-serbest-sehri         (Gedanopedia)
```
`v:` yok · `isg:` yok · `kd:` yok.

## ② Kaynakla sınama
| Soru | Kaynak | Okunan |
|---|---|---|
| Almanya'nın vazgeçmesi + kime | Versay md. 100 (avalon.law.yale.edu/imt/partiii.asp) | *"Germany renounces in favour of the Principal Allied and Associated Powers all rights and title over the territory comprised within the following limits:"* → Polonya'ya DEĞİL, Müttefiklere |
| Serbest şehir yükümlülüğü | Versay md. 102 | *"…undertake to establish the town of Danzig … as a Free City. It will be placed under the protection of the League of Nations."* |
| Vazgeçmenin GÜNÜ | FRUS 1919 c. XIII, not III-100 (history.state.gov frus1919Parisv13/ch12subch11) | *"On entry of the treaty into force on January 10, the limits defined in this article became applicable as to the boundary of the Free City of Danzig with relation to Germany."* |
| Kuruluş günü | aynı not | Büyükelçiler Konferansı kararı 27 Ekim 1920 imza, Danzig 9 Kasım kabul, *"it entered into force on November 15."* → **1920-11-15 ✓** (künye ve kayıt zaten doğru) |
| TDV | `danzig`/`gdansk` slug'ları **302 (ölü)**, başlık araması 0. İçerik araması 7 eşleşme verdi; ilgili olan `polonya` maddesi | *"Polonya'ya verilmeyen Danzig karasal irtibatı (koridor) kurulup serbest şehir haline getirilmekteydi"* → Polonya'ya verilmediğini TDV de söylüyor, gün vermiyor |

**Bulunamayanlar:**
- **Sir Reginald Tower / Müttefik idaresinin fiilî başlangıç günü:** Gedanopedia'nın eski
  URL'si (kayıtta alıntılanan `WOLNE MIASTO GDAŃSK, 1920–1939`) bugün **404** veriyor. Site
  WordPress'e taşınmış ve arama "Reginald Tower" ile "Wolne Miasto Gdańsk" için **sonuç
  döndürmüyor**. Kayıttaki alıntı (*"Od 10 I do 15 XI 1920 … pod zarządem głównych mocarstw
  sprzymierzonych"*) bugün **yeniden doğrulanamadı**. Önerinin dayanağı onsuz da sağlam:
  md. 100 ve FRUS yeter.
- Britannica: 403.
- Kırmızı liste ihlali yok (Vikipedi/blog kullanılmadı).
- ⚠️ Yan bulgu, kapsam dışı: TDV `polonya` 1569 için *"Danzig şehri serbest şehir statüsünde
  bırakıldı"* diyor. Atlas 1569-1793 arası `lehistan` yazıyor. Ayrı bir iş, ölçülmedi.

## ③ Künye taraması (`devletler.js` id ve `bolge:` tarandı, id tahmini yapılmadı)
- `danzig-serbest-sehri` **VAR** (f 1920-11-15, t 1939-09-01, FRUS + Gedanopedia kaynaklı).
  1920-11-15 dilimi doğru, künye değişmez.
- `danzig-serbest-sehri-1807` var (ayrı yapı).
- **Ara dönem (1920-01-10 → 1920-11-15) için emsal künye VAR:** `itilaf-emaneti`
  ("Başlıca Müttefik ve Ortak Devletler emaneti (Saint-Germain md. 91)", f 1919-09-10,
  t 1923-03-15, `boya_gerekli:true`). Saint-Germain md. 91'in dili Versay md. 100 ile
  **birebir aynı kalıptır** (*"renounces … in favour of the Principal Allied and Associated
  Powers"*). Emsal: **Lvov** aynı modelle yazılmış (F8 + D205 ③: `avusturya` → `itilaf-emaneti`
  → atama gününde `polonya`).
  ⇒ Sınıf: §3.5 **③ ardıl yapı**. Ardıl künye zaten var ve penceresi tutuyor (1920-01-10 ve
  1920-11-15, 1919-09-10–1923-03-15 içinde). **Yeni künye gerekmiyor.**
  🟡 Koordinatör kararı: künyenin `ad`/`ozet`/`kaynak` alanı yalnız Saint-Germain'i anıyor.
  Danzig'i (ve aşağıdaki Memel'i) taşıyacaksa ad genişletilmeli (ör. "… (Saint-Germain md. 91
  · Versay md. 99-100)") ya da ayrı bir `itilaf-emaneti-versay` künyesi açılmalı. Diff
  **künyeye dokunmuyor**. Ölçüm: kimlik penceresi denetimleri (4c/4d) değişmedi.

## ④ Ters yön + çevre
**Yakın yerleşimler (Pomerelya taraması, ~15 ad + Almanca adları):** yalnız Elbing,
Toruń, Poznan, Königsberg var. **Sopot · Oliwa · Gdynia · Tczew · Puck · Wejherowo ·
Kartuzy · Chojnice · Bydgoszcz · Grudziądz · Słupsk YOK.**
- Elbing `almanya` 1871→1923 → doğru (Doğu Prusya'da kaldı), dokunulmaz.
- Toruń `polonya` 1920-01-18 → aynı Versay devrinin Polonya tarafı, makul. Bu iş kapsamında
  sınanmadı.
- 🔴 **Petek sonucu (§2):** Danzig ile Toruń arasında nokta olmadığı için Gdansk peteği
  aşağı Vistül'ü ve **Polonya Koridoru'nun kıyısını** (Gdynia/Puck/Wejherowo) emiyor. Bugün
  bu bölge 1918-11-11'den itibaren yanlışlıkla Polonya boyanıyor. Düzeltmeden sonra koridor
  1920'de `itilaf-emaneti`, 1920-11-15'ten sonra `danzig-serbest-sehri` boyanacak. Bu da
  **yanlış** (koridor 1920 başında Polonya'ya geçti), ama yeni bir kusur değil: bugünkü
  veride de 1920-11-15'ten sonra koridor Danzig rengindedir. Düzeltme hatayı 1918-1920
  aralığında **koridora taşıyor**. **Çare nokta yoğunluğu:** Gdynia (54.518, 18.531),
  Tczew (54.092, 18.778), Chojnice ve Bydgoszcz için Polonya'ya geçiş günleri **kaynakla**
  belirlenmeli. Bu ölçümde gün kaynaklanmadı, öneri sayılmaz: **iş önerisi**.
  3 km mükerrer taraması: aday adların hiçbiri canlı girdide yok.
- **Kardeş bulgu, aynı sınıf, ölçüldü:** `yerlesimler_ek7.js` Klaipėda (Memel) 1871-01-18 →
  1923-02-16 `almanya` yazıyor. Versay **md. 99** de aynı kalıpla Müttefikler lehine
  vazgeçmedir (*"Germany renounces in favour of the Principal Allied and Associated Powers
  all rights and title over the territories included between the Baltic, the north-eastern
  frontier of East Prussia … and the former frontier between Germany and Russia."*). Yani
  1920-01-10 → 1923-02-16 arası `almanya` aynı türden hata (~3 yıl). Düzeltilmedi, diff'te
  yok. Ayrı kalem olarak öneriyorum (atama günü 1923-02-16'nın kaynağı ayrıca sınanmalı).

## ④b `denetle.py` ölçümü (w54, taban çıkış **2** = yalnız D8 ÖLÇÜLEMEDİ, `devletler_harita.js` yok — normal)
| Senaryo | 2s AÇIK (tavan 189) | 2sk | çıkış | not |
|---|---|---|---|---|
| **Taban** | 187 | 3236 = 1571 YER + 1665 TARAF | 2 | 1918-11-11 kovası (4): Częstochowa, **Gdansk**, Varşova, … |
| **B** almanya → 1920-11-15 (emanetsiz) | 187 | 3236 | 2 | Gdansk kovadan çıkar. Basit ama **yanlış**: md. 100 vazgeçmesi 1920-01-10'da |
| **A** almanya → 1920-01-10, `itilaf-emaneti` → 1920-11-15 | **188** (+1) | 3235 | 2 | yeni açık: `1920-01-10 Gdansk`. Var olan Versay maddesi Gdansk'ı ve emaneti anmıyor |
| A + yeni madde (Versay başlıklı) | 187 | 3237 | **1** | ✗ mükerrer madde 116 > 113 (başlık öteki 1920-01-10 Versay maddelerine benziyor) |
| **A + yeni madde (önerilen başlık)** | **187** | **3237 = 1572 YER + 1665** | **2** | ✓ yalnız ZAYIF ölçüt 114→116 ("İHLAL DEĞİL"). Başka fark yok |

⇒ **Önerilen = son satır.** Değişmez 2s tavanı ve açık sayısı değişmiyor (187). 2sk'da +1
kırılma YER anılarak kapanıyor (iyileşme). 1918-11-11 kovasından Gdansk çıkıyor.
⚠️ 1918-11-11 kovası **kapanmıyor**: Częstochowa, Varşova, Łódź hâlâ açık. "Gdansk maskesi"
(2sk notu: *"eksik YALNIZ 'Gdansk' ⇒ 122 birim görünmez"*) bu düzeltmeyle KALKMIYOR.
Diff'li koşuda bile not aynı satırı basıyor. Kovanın açık sebebi başka yerleşimler.
Bu ayrı bir iş.

## ⑤ Öneri (diff: `denetim/UMIT-W54-GDANSK-1006.diff`)
1. **`data/yerlesimler.js` Gdansk** (tek satır):
   ```
   1871-01-18 → 1920-01-10 almanya
   1920-01-10 → 1920-11-15 itilaf-emaneti   kaynak: Versay md. 100 + FRUS not III-100 + TDV polonya (F8/D205③, Lvov emsali)
   1920-11-15 → 1923-10-29 danzig-serbest-sehri  (değişmedi)
   ```
   Kayıttaki bayat `⚠️ … dilimi YANLIŞ … karar 1.MURAT` cümlesi silindi (karar uygulanınca
   bayatlar).
2. **`data/kronoloji_sinir_avrupa_orta.js`** — 1920-01-10 Versay/Polonya maddesinin hemen
   altına YENİ madde: `t:"1920-01-10"`, `devlet:"itilaf-emaneti"`,
   `taraflar:["itilaf-emaneti","almanya","polonya"]`,
   `b:"Danzig Müttefik emanetine geçti: Almanya şehirden vazgeçti"`, `yer_id:"Gdansk"`,
   `sinir_id:"d1923-dz"`, `sinif:"E"`. Kaynak md. 100 + FRUS + TDV, birebir alıntılı.
   ±30 gün kuralı: kırılma ile aynı gün.
   1920-11-15 kırılması için madde **zaten var** (`Danzig Serbest Şehri kuruldu`,
   `yer_id:"Gdansk"`), dokunulmadı.
3. **Künye:** dokunulmadı. `itilaf-emaneti` adının Versay'ı da kapsayacak biçimde
   genişletilmesi koordinatör kararı (③).
4. Uygulanırsa **koşu gerekir** (veri koşusu, motor kodu dokunulmadı → §9.1 ① uyar).
   `itilaf-emaneti` `boya_gerekli:true` → tam inşa koşusuna kadar boyası beyanlı borç.
   Lvov ile aynı durum. `denetle.py` çıktısında fark yok. `durum_tablosu.py` ayrıca
   koşturulmadı.
5. Ayrı kalem önerileri: ① Memel md. 99 aynı sınıf · ② Koridor nokta yoğunluğu (Gdynia,
   Tczew, Chojnice, Bydgoszcz) · ③ 1918-11-11 kovasının kalan açıkları · ④ TDV 1569
   Danzig serbest şehir cümlesi.
