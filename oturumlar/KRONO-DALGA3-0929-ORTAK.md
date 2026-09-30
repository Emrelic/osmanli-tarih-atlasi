# KRONO DALGA 3 — UZAK COĞRAFYA (beş paket · ortak şartname)

> 🔴 OKU: `CLAUDE.md` → `oturumlar/KRONO-DUNYA-0929-ORTAK.md` (**§1 ve §4.1 ŞART**)
> → `oturumlar/KRONO-DALGA2-0929-ORTAK.md` (§1 defter nasıl okunur, §2 üç iş)
> → bu dosya, **yalnız kendi satırın.** Başka belge açma.

Bu dalga, `SENKRON-DEFTER-0929`in gösterdiği ve ilk on iki pakete **girmeyen**
katmandır: haritada toprak değişiyor, hiçbir kronoloji maddesi açıklamıyor,
ve bu coğrafya hiçbir paketin sahibi değil. Toplam **~660 net olay adayı.**

---

## 0. 🔴 KESKİNLİK HEDEFİ — bu dalga %100 DEĞİL, %80'dir

`CLAUDE.md §3.1 ③`: *"YAKINLIK — kullanıcıya/çekirdeğe yakın olan keskinliği hak
eder; uzak olan %80'de bırakılır."* Atlasın çekirdeği **Osmanlı 1281-1923**'tür;
Peru, Japonya ve Okyanusya çekirdeğe uzaktır.

**Bu senin işini kolaylaştırmaz, TANIMLAR:**
```
✅ İSTENEN   haritadaki kırılmanın NE olduğunu söyleyen, kaynaklı, doğru madde
❌ İSTENMEYEN her ülkenin tam millî kronolojisi · derin hanedan listeleri ·
              kaynak bulunamayan yerde tahminle doldurma
```
🔴 Ve %80 hedefi **doğruluktan taviz DEĞİLDİR.** `CLAUDE.md §7.1`: *"doğruluk >
tasarruf > hız · doğruluktan hiçbir şey için taviz yok."* Az madde yaz, ama
yazdığının hepsi kaynaklı olsun. **Kaynak yoksa `kaynak:"bulunamadı"` yaz ve
maddeyi yine de yaz** — `bulunamadı` bir sonuçtur, gizlenmez (`§4`).

⚠️ **TDV bu coğrafyanın çoğunu KAPSAMAZ** ve bu normaldir. `CLAUDE.md §4`:
TDV'nin kapsamadığı coğrafyada **akademik kaynak meşrudur** ve `kaynak:` alanına
AÇIKÇA yazılır. Ama kırmızı çizgi aynen geçerli: forum · blog · içerik çiftliği ·
kaynaksız derleme · YZ üretimi metin · popüler tarih sitesi **KULLANILMAZ**;
Vikipedi tek dayanak değildir.

---

## 1. Paket tablosu — kendi satırını bul, ötekine dokunma

| Paket | Kapsam (defterdeki bölge anahtarları) | net aday | Model |
|---|---|---|---|
| `KRONO-AMERIKA-G-0929` | `guney-amerika` | **232** | Sonnet |
| `KRONO-AMERIKA-K-0929` | `kuzey-amerika` · `orta-amerika` · `orta-amerika-karayip` | **203** | Sonnet |
| `KRONO-ASYA-UZAK-0929` | `dogu-asya` · `orta-asya` · `guney-asya` · `guneydogu-asya` · `okyanusya` | **122** | Sonnet |
| `KRONO-AFRIKA-0929` | `bati-afrika` · `dogu-afrika` · `orta-afrika` · `guney-afrika` | **54** | Sonnet |
| `KRONO-OSMANLI-CEVRE-0929` | `anadolu` · `arabistan` · `?kunyesiz:hicaz` · `:suud` · `:yemen` | **49** | 🔴 **Opus** |

🔴 **Son satır niçin Opus:** Anadolu ve Arabistan **uzak coğrafya değil, atlasın
çekirdeğidir.** Orada TDV birincildir, hassasiyet tavizi yoktur ve %80 hedefi
GEÇMEZ. Ötekilerde model Sonnet'tir çünkü keskinlik hedefi %80 ve kaynak evreni
akademik/kurumsal — **bu bir tasarruf kararı değil, `§3.1 ③` yakınlık kuralının
uygulanmasıdır.**

### Dosya sahipliği — her paket YALNIZ kendi satırındakilere yazar

| Paket | Veri dosyaları (YENİ) | Rapor dosyaları |
|---|---|---|
| AMERIKA-G | `data/kronoloji_cok_guney_amerika.js` | `denetim/KRONO-AMERIKA-G-0929{.md,-DUZELTME.md,-YERLESIM-ONERI.md,-KUNYE.md}` |
| AMERIKA-K | `data/kronoloji_cok_kuzey_amerika.js` · `_orta_amerika.js` | `denetim/KRONO-AMERIKA-K-0929{…}` |
| ASYA-UZAK | `data/kronoloji_cok_dogu_asya.js` · `_orta_asya2.js` · `_okyanusya.js` | `denetim/KRONO-ASYA-UZAK-0929{…}` |
| AFRIKA | `data/kronoloji_cok_afrika.js` | `denetim/KRONO-AFRIKA-0929{…}` |
| OSMANLI-CEVRE | `data/kronoloji_cok_anadolu2.js` · `_arabistan2.js` | `denetim/KRONO-OSMANLI-CEVRE-0929{…}` |

Global adı dosya adından türer: `kronoloji_cok_<x>.js` → `window.KRONOLOJI_COK_<X>`.

🔴 **Mevcut hiçbir `kronoloji_*.js` dosyasına DOKUNMA** — `kronoloji_dogu_afrika.js`
(218) · `kronoloji_orta_asya.js` (205) · `kronoloji_guney_asya.js` (153) ·
`kronoloji_cin.js` (136) · `kronoloji_hindistan.js` (131) · `kronoloji_japonya.js`
(71) · `kronoloji_anadolu.js` (281) · `kronoloji_arabistan.js` (60) ·
`kronoloji_ozbek.js` (73) hepsi **`KRONO-BAGLAMA-0929`un elinde** (şu anda hiçbir
künyeye bağlanmıyorlar, `COK_` yoluna taşınıyorlar). `_ORTA_ASYA2` ve `_ANADOLU2`
adlarındaki `2` bu yüzden var — çakışmayı önlüyor.
⇒ O dosyalarda **kusur bulursan** `denetim/<ADIN>-DUZELTME.md`ye yaz, düzeltme
hükmü koordinatörde.

---

## 2. İş — üç adım

### ① OKU (önce bu, yazmadan önce)
```py
import json, io
d = json.load(io.open(r"denetim/SENKRON-DEFTER-0929.json", encoding="utf-8"))
for k in ["PAKETSIZ:guney-amerika"]:          # ← kendi bölge anahtarların
    print(d["paket"][k])
```
🔴 **Doğru sütun `net_olay_adayi`**, `toplam_kirilma` DEĞİL. Bir fetih/ilhak
dalgası onlarca yerleşimi aynı gün çevirir ve **tek maddeyle** kapanır.
`kuyruk_kunye_kapali_yer` zaten kapalı olanlardır — **dokunma.**

### ② AYIR — bu kırılma GERÇEK mi?
🔴 `CLAUDE.md §2`: *"Noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
SAHİBİYLE boyanır."* Uzak coğrafyada yerleşim noktası seyrektir ⇒ **kırılmaların
bir kısmı gerçek bir devir teslim değil, noktasızlık artefaktıdır.**
Madde yazmak artefaktı KALICILAŞTIRIR. Her aday için sor:
```
gerçek siyasi değişim mi?   → madde YAZ
noktasızlık artefaktı mı?   → madde YAZMA, denetim/<ADIN>-YERLESIM-ONERI.md'ye
                               nokta önerisi yaz (koordinatör koşuya alır)
ölçemedim mi?               → "ölçülemedi" yaz — bu da bir sonuçtur
```
📌 Bu ayrımın **sayısı** raporunun en değerli satırı olacak: kaç aday gerçek,
kaç tanesi artefakt, kaç tanesi ölçülemedi.

### ③ YAZ
`KRONO-DUNYA-0929-ORTAK.md §2`deki on zorunlu alan: `t · b · tur · onem · dunya ·
kapsam · etiket · yer_id · d · kaynak`. `tur` veride 54 değer taşıyor —
**yenisini uydurma**, mevcuttan seç.
- `kapsam:"dis"` mi `"ic"` mi: Osmanlı ile ilişkisi olmayan uzak coğrafya olayı
  `"ic"`tir. Zorlama.
- `dunya:` alanını dürüst kullan — bu coğrafyanın çoğu `dunya:1-2`dir; 5
  "dünya çapında dönüm noktası" demektir.
- 🔴 `yer_id` **uydurma.** Çözülmeyen `yer_id` yayın kapısını kilitler
  (0 tolerans, `CLAUDE.md §9`). Emin değilsen `yer_id:""` bırak.
- 🔴 `kapsam_genis:true` + odak yok ⇒ kamera o günün **Osmanlı sınırına** uçar
  (`app.js:11835`) — uzak coğrafya kronolojisinde bu odaksızlıktan KÖTÜDÜR.

---

## 3. Künye — M-5416 hükmü, bu dalgada çok işleyecek

```
(1) Madde, olayın geçtiği gün VAR OLAN siyasi yapının künyesine bağlanır.
(2) Ardıl künyeye geriye dönük bağlama YASAK — hem tarihen yanlış, hem
    denetle.py 4c/4d "künye penceresini aşıyor mu" denetimini bozar.
(3) Künye yoksa: maddeyi YAZ, `devlet:`e önerdiğin id'yi yaz, künyeyi
    koordinatör açar. Bağlayıcı eşleşmeyen id'yi sayıp konsola basar —
    madde KAYBOLMAZ, künye inince KENDİLİĞİNDEN bağlanır. Rework YOK.
```
`denetim/KUNYE-DUNYA-0929.json` teslim edildi: 678 künye · şüpheli ömür 26 ·
**eksik 46** · eşanlam 15. **Kendi coğrafyan için ONU AÇ**, `devletler.js`i
baştan tarama ve ona **DOKUNMA**.
⚠️ Bu dalgada künye eksiği en yoğun olacak (sömürge yönetimleri, yerli
politeler, kısa ömürlü cumhuriyetler). Önerilerini `denetim/<ADIN>-KUNYE.md`ye
gerekçeli ve kaynaklı yaz — koordinatör hepsini birleştirip `devletler.js`e alacak.

---

## 4. Sömürge kırılması — bu dalganın ana konusu

Dalga 2'nin ATLANTİK kolları (`KRONO-ATLANTIK-A/B-0929`) kendi defterlerindeki
sömürge kayıtlarını **size** havale ediyor: Kanada 1763, Louisiana 1803, Goa,
Brezilya 1822, İspanyol Amerikası 1810-25, Hindistan, Karayipler, Doğu Hint
Adaları. Onlar metropol kronolojisine ait değil — **buraya ait.**
📌 Onlarla **yatay mesaj serbest** (`--kime "KRONO-ATLANTIK-A-0929"`); iş bölümü
hükmü koordinatörde.
🔴 Ama aynı olayı iki kez yazmayın: metropolün kaybı ile sömürgenin bağımsızlığı
**aynı olayın iki yüzüdür**. Hangi tarafın künyesine bağlandığına bakın; ikisine
birden gerekiyorsa `devletler:["id1","id2"]` kullanın — `COK_` yolu aynı `t`+`b`yi
ikinci kez EKLEMEZ.

---

## 5. Denetim ve teslim

```bash
node --check data/kronoloji_cok_<x>.js
py arac/denetle.py        # SONUÇ temiz olmalı
py arac/odak_olc.py       # yeni kırık atıf 0
```
Teslim: TEK tahta mesajı — ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir
sonuçtur) ③ ne istiyorum + değişen dosyalar + commit künyesi. Uzun rapor
`denetim/<ADIN>-0929.md`ye. Sonuna **"bekçimi öldüreyim mi?"**

🔴 **Şartnamemde yanlış bulursan SÖYLE.** Bugün beş oturum şartnamelerimdeki
hataları buldu (M-5390 · M-5393 · M-5424 · M-5428 · M-5403) ve biri bütün bir
dalgayı kurtardı — yanlış adlandırma yüzünden dört paket sitede **erişilemez**
dosya yazacaktı. Doğru davranış itaat değil, **ölçüp itiraz etmektir.**
