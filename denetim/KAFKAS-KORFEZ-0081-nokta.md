# KAFKAS-KORFEZ-0081 — nokta teslimi (H-0001 · H-0038)

**Sebep (ölçüldü, BOGAZ-OLCUM-0081 ile aynı):** 40.8-44K × 40.5-47D kutusunda Kartli/Kaheti
iç bölgesinde yalnız **Tiflis** ve **Zagem (Kaheti)** var, ikisi de `s:gurcistan` 1281→1801.
Kutaisi 1490'dan `imereti`. ⇒ Harita iki renk gösteriyor, çünkü **Kaheti için boyanan bir
kimlik YOK** — nokta eklemek TEK BAŞINA H-0001'i çözmez (bkz. §2). Noktalar peteği
küçültür, bölünmeyi göstermez.

## 1. Yakın mükerrer taraması (§11) — yapıldı
`denetim/ARAC-NORMAL-0903.py` `norm()` + eşanlam (gori · mtskheta/mtsheta · telavi ·
dusheti/duseti) + 15 km yarıçap, `girdi.yukle()` evreninde (4294 nokta): **0 eşleşme**
(yalnız ad benzeri Podgorica/Holmogorı/Görice, hepsi 1900 km'den uzak).

## 2. Önerilen noktalar
Koordinatlar: GeoNames şehir merkezleri (konum kaynağı; tarih dayanağı değil).
Hedef dosya: koordinatörün seçimi (yeni dosya `girdi.py`ye satır ister = TUZ → yalnız tam inşa;
mevcut bir dosyaya ekleme tuza dokunmaz). Ben `yerlesimler_sinir_kuzey.js` öneririm (aynı bölge).

```js
{"ad":"Gori","tur":"sehir","lat":41.9847,"lon":44.1167,"g":0,"k":1,"m":null,"kaynak":"gurcistan",
 "s":[{"f":"1281-01-01","t":"1801-09-12","d":"gurcistan"},{"f":"1801-09-12","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1918-05-26","d":"transkafkasya"},{"f":"1918-05-26","t":"1921-03-16","d":"gurcistan-demokratik-cumhuriyeti"},{"f":"1921-03-16","t":"1923-10-29","d":"sovyet-rusya"}],
 "v":[{"f":"1578-08-24","t":"1603-01-01","k":"Kartli (tâbi)","kaynak":"TDV gurcistan: «Ağustos 1578 … Osmanlılar, Gori ve Muhran kesimlerindeki Gürcü beylerini itaat altına aldılar» · «1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan geri alıp Kartli'yi hanlık olarak ilân etti» · gün komşudan: Tiflis 1578-08-24 · TDV gurcistan/tiflis (aynı sefer)"}]},
{"ad":"Telavi","tur":"sehir","lat":41.9167,"lon":45.4833,"g":0,"k":1,"m":null,"kaynak":"gurcistan",
 "s":[{"f":"1281-01-01","t":"1801-09-12","d":"gurcistan"},{"f":"1801-09-12","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1918-05-26","d":"transkafkasya"},{"f":"1918-05-26","t":"1921-03-16","d":"gurcistan-demokratik-cumhuriyeti"},{"f":"1921-03-16","t":"1923-10-29","d":"sovyet-rusya"}],
 "v":[{"f":"1578-08-24","t":"1603-01-01","k":"Kaheti krallığı (tâbi)","kid":"kaheti-kralligi","statu":"vassal","kaynak":"TDV gurcistan: «Tiflis'in fethinden sonra İmeret ve Kahet yöneticileri Osmanlılar'a itaatlerini bildirdiler … Kahet ülkesi ocaklık olarak buranın eski hâkimi Alexandre'a bırakıldı» · bitiş: «1603'te … Kahet'te Yenisel Sultanlığı'nı kurdu» (yıl) · gün komşudan: Tiflis 1578-08-24"}]},
{"ad":"Duşeti","tur":"kasaba","lat":42.0851,"lon":44.6960,"g":0,"k":0,"m":null,"kaynak":"gurcistan",
 "s":[{"f":"1281-01-01","t":"1801-09-12","d":"gurcistan"},{"f":"1801-09-12","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1918-05-26","d":"transkafkasya"},{"f":"1918-05-26","t":"1921-03-16","d":"gurcistan-demokratik-cumhuriyeti"},{"f":"1921-03-16","t":"1923-10-29","d":"sovyet-rusya"}]}
```
- **Duşeti'ye Osmanlı penceresi YAZILMADI:** TDV şehir düzeyinde anmıyor (`bulunamadi`);
  "Kartli ve Kahet Tiflis eyaleti haline getirildi" bölge cümlesidir, şehre taşınmadı (D208).
- **Mtsheta ÖNERİLMEDİ:** Tiflis'e 20 km, petek kazancı küçük, kaynaklı ayrı zinciri yok.
- **1723-1735 Osmanlı dönemi** (TDV: «Osmanlılar ise Kartli ve onun büyük şehirleri Tiflis ve
  Gori'yi alıp…») Gori'ye YAZILMADI: cümle yıl vermiyor; Tiflis'in `1723-06-15`'i kendi
  kaynağını taşımıyor ⇒ komşu günü devralınamaz (D207 zincirleme yasağı).
- 1801 sonrası zincir Kutaisi'nin kimlik dizisiyle aynıdır; tarihler künyelerden
  (`transkafkasya` 1917-11-07, `gurcistan-demokratik-cumhuriyeti` 1918-05-26 / 1921-03-16).
  Tiflis'in kendisi hâlâ 1917-11-07'den `sovyet-rusya` — NOKTA-KAFKAS-0077 §6 bunu zaten
  önerdi, ben tekrar yazmıyorum.
- Değişmez 2: yeni kırılmalar 1578-08-24 (Tiflis fethi maddesi), 1603-01-01 (❓ madde
  ölçülmedi — uygulamadan sonra `denetle.py` söyler; yoksa Değişmez 2t borcu), 1801-09-12,
  1917/1918/1921 (var olan maddeler).

## 3. H-0001'i ASIL çözen şey — künye + boya (TAM İNŞAYA)
Üç krallık için harita kimlikleri: **Kartli** = mevcut `gurcistan` (başkent Tiflis, künye
1801 Kartli-Kaheti ilhakıyla biter — yeniden adlandırma gerekmez) · **İmereti** = `imereti`
(var) · **Kaheti** = `kaheti-kralligi` — künye VAR (1578-08-09→1606-01-01) ama
`renkler.py` BOYALAR'da **YOK** ⇒ bugün yalnız `v:kid` metninde yaşıyor.
Gereken üç adım (hiçbiri benim dosyam değil):
1. `data/devletler.js` `kaheti-kralligi`: `f:` → 1490-01-01 (**gurcistan künyesinin kendi
   bölünme maddesi**; TDV yıl VERMİYOR: «Fakat daha sonra Gürcistan üç krallığa
   (Kartliya, Kahetya, İmeretiya) ve beş beyliğe ayrıldı» — yıl `bulunamadi`),
   `t:` → 1762-01-01 (TDV: «1762 yılında Irakli, Kartli ve Kahet'i bir idare altında
   birleştirdi»). Aradaki Osmanlı/Safevî tâbilikleri künyenin `tabi:` alanına.
2. `arac/renkler.py` BOYALAR'a `kaheti-kralligi` — **TUZ DOSYASI, §9.1: yalnız tam inşa
   koşusuna diff olarak.** Renk seçimini `renk_olc.py`ye bırakıyorum (gurcistan ↔ imereti
   ↔ kaheti üçlüsü ΔE ile ölçülmeli).
3. Zagem + Telavi `s:` 1490-01-01→1762-01-01 `kaheti-kralligi`; 1762→1801 `gurcistan`.
⚠️ 1490 yılı TDV'de yok; künye maddesi bir kaynak değildir (§4 "sahte kesinlik").
Kaynaklı yıl isteniyorsa akademik kaynak aranmalı — bu oturumda ARANMADI.
