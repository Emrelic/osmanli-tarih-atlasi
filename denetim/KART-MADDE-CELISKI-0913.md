# KART ↔ MADDE ÇELİŞKİLERİ — 13 Eylül 2026

Kaynak liste: `denetim/EKOKUMA-DAGITIM-0913.md` ⑤ (beş kalem).
Kapsam: yalnız kronoloji maddeleri (`data/olaylar*.js`). Kart dosyalarına,
`app.js`e, yerleşim/motor/devletler dosyalarına dokunulmadı. Commit yok.

TDV sluglarının hepsi HTTP ile ölçüldü ve gövdeleri okundu:
`kilitbahir-kalesi` · `bayezid-ii` · `selim-i` · `nedim--divan-sairi` ·
`patrona-isyani` · `nigbolu` · `bayezid-i` · `nigbolu-savasi` · `balkan-savasi`
→ hepsi **200**. `balkan` → **302 (ölü)**.

## Denetim

| | önce | sonra |
|---|---|---|
| Değişmez 2 | 528 kırılma · 0 açık | 528 · **0** |
| Değişmez 2s | 101 açık (tavan 121) | **101** |
| Değişmez 2i | 3 (tavan 3) | **3** |
| Değişmez 2t | 14 (tavan 42) | **14** |
| mükerrer madde | 0 | **0** |
| ÖNEK gözden geçirme listesi | 7 çift | **5** |
| çıkış kodu | 0 | 0 |

⚠️ Arada bir ara koşu **mükerrer 2** verdi (Nedîm maddesi ilk denemede
`1730-09-25`e taşınınca isyan ve Sâdâbâd maddeleriyle aynı gün çakıştı). Madde
kaynağın öteki ucuna (`1730-10-28`) alındı, yeniden koşuldu, temiz.

Düzenlenen yedi dosyanın yedisi de Node `eval` ile ayrıştı.

## ① Kilitbahir — `olaylar_p0036.js`

- **t korundu** `1452-01-01` · gun `1452` → *"İki rivayet: 856/1452 (Evliya Çelebi) · fetihten sonra, 1463-1465 (Tursun Bey, Kritovulos)"*
- d: *"henüz İstanbul'u almadan önce … inşa ettirdi"* → iki rivayet okuyucuya açıkça, TDV'nin tercihi (fetih sonrası) ağırlıklı.
- TDV tanımı: *"İstanbul'un fethinden sonra yapılmış kale."* Evliya: *"fetihten önce 856'da (1452)"*.
- **Niçin t taşınmadı:** Kilitbahir yerleşiminin `kur:` ve `d:` başlangıcı `1452-01-01`; bu madde o Değişmez 2 kırılmasını karşılıyor.
- Eski `ic_not_d` *"fark madde metninde açıkça belirtilir"* diyordu; **metinde yoktu.**
- 🔜 **YERLEŞİM İZİ (koşu sonrası):** Kilitbahir `kur`/`d` 1452 Evliya rivayetine dayanıyor; TDV'nin tercihiyle 1463/1465 olmalı, madde onunla taşınır. Ayrıca `olaylar_ek.js` 1366-08-01 ve 1376-09-01 maddeleri Kilitbahir'i el değiştiren yerleşim sayıyor, `kur:1452` ile çelişik.

## ② II. Bayezid'in ölümü — `olaylar_ek7.js` (+ `olaylar_ek5.js`)

- `1512-05-26` / *"26 Mayıs 1512"* → **`1512-06-10` / *"10 Haziran 1512 (25 Rebîülevvel 918)"***
- yer *"Dimetoka yolu"* → *"Abalar köyü, Çorlu yakını (Dimetoka yolu)"* · yer_id `Dimetoka` → `Çorlu`
- TDV `bayezid-ii`: *"Abalar köyüne varıldığında fenalaştı ve 25 Rebîülevvel 918'de (10 Haziran 1512) vefat etti."* `selim-i` aynı günü verir (TSMA E. 6335).
- 🆕 **Aynı çelişki ikinci maddede:** `olaylar_ek5.js` 1512-04-24 cülus maddesinin metni *"5 Rebîülevvel 918'de (21 Mayıs 1512)"* diyordu, kendi kaynağı `selim-i` ise 25/10 Haziran. Yalnız d düzeltildi.
- Değişmez 2 etkilenmedi.
- 🔜 **İZ:** `padisahlar.js` `olum:"1512-05-26"` · `ekokuma_magazin.js` kart bağı `olay:["1512-05-26",…]` artık maddeye denk gelmiyor.

## ③ Nedîm'in ölümü — `olaylar_ek14.js`

- `1730-06-01` / *"1143 (1730)"* → **`1730-10-28`** / *"Patrona Halil İsyanı'nı (25 Eylül 1730) takip eden günlerde — 28 Ekim 1730'dan önce; ölüm günü bilinmiyor"*
- TDV: *"Patrona Halil İsyanı'nı takip eden günlerde … öldüğüne dair bilgiler yer alır"* · *"kassam hücceti sûreti 15 Rebîülâhir 1143'te (28 Ekim 1730) düzenlendiğine göre şair bu tarihten önce ölmüştür."*
- **Ölüm günü: bulunamadı.** Kaynak yalnız aralık veriyor. `t` = üst sınır (tereke hücceti günü), bir ölüm günü iddiası değil; gun okuyucuya aralığı söylüyor.
- Eski t hem isyandan 4 ay önceydi hem de 1143 yılının dışındaydı (1143 Temmuz 1730'da başlar).
- İsyan günü doğrulandı: TDV `patrona-isyani` *"12 Rebîülevvel 1143'te (25 Eylül 1730)"*. `olaylar.js` 1730-09-25 doğru. (Brifingdeki "28 Eylül" Batı literatürü tarihi; TDV 25 der.)
- d'deki *"kaçmaya çalışırken"* kaynakta yok (Müstakimzâde: *"korkudan evinin damına çıktığını ve oradan düşerek"*), düzeltildi.
- 🔜 **İZ:** `ekokuma_edebiyat.js` `nedim-olumu` bağı `olay:["1730-06-01",…]` · `etiket_yama.js` `{t:"1730-06-01", b:"Nedîm'in…"}` anahtarı artık karşılıksız.

## ④ Niğbolu'nun fethi — `olaylar_ek.js`

- **t korundu** `1395-01-01` · gun *"1395 dolayı"* → *"1395 (bazı Bulgar kroniklerine göre 3 Haziran 1395; bir başka rivayete göre 1394)"*
- **TDV kendi içinde çelişik (§4 tuzak ⑥):**
  - `nigbolu`: *"1395'teki Rovine savaşının ardından Yıldırım Bayezid tarafından alındı … 3 Haziran 1395"*
  - `bayezid-i`: *"Kral Şişman'ı yakalatıp öldürttü (3 Haziran 1395)"*
  - `nigbolu-savasi` (kartın kaynağı): *"1394'te … Silistre ve Niğbolu'yu ele geçiren Yıldırım Bayezid"*
- Madde çoğunluğu (1395) tutar, 1394'ü metinde açıkça söyler. **Kart yanlış değil:** kaynağına sadık.
- Kaynaksız *"batı Bulgaristan'daki son boşluklardan biri"* ifadesi çıkarıldı.
- **Niçin t taşınmadı:** Niğbolu `s: bulgaristan` 1395-01-01'de bitiyor; 06-03'e taşımak 153 gün açar.
- 🔜 **YERLEŞİM İZİ:** kırılma 1395-06-03'e çekilebilir (Ohri aynı güne bağlı, ayrıca doğrulanmalı).

## ⑤ Balkan Savaşları — `olaylar.js` + `olaylar_ek10.js`

- **Gerçek mükerrer:** `olaylar.js` `1912-10` "Balkan Savaşları başladı"nın kendi gun'u *"8 Ekim 1912 (Karadağ'ın savaş ilanı)"* idi; `denetle.py` önek ölçütü de çifti gerçek mükerrer diye listelemişti; `olaylar_ek10.js` başlığı zaten emekliliğini istiyordu.
- `olaylar.js` maddesi **silindi**; `olaylar_ek10.js` `1912-10-08` tek kayıt.
- TDV `balkan-savasi`: *"8 Ekim 1912'de Karadağ'ın Osmanlı Devleti'ne savaş ilân etmesiyle Balkan savaşlarının birinci safhası başlamış oldu."*
- **Taşınan:** etiket `toprak-kayip` · *"Savaş sırasında ordu içindeki siyasî görüş ayrılıkları yenilgide büyük rol oynadı."* (TDV).
- Çatalca 1912-10-23 maddesinde, Edirne'nin geri alınışı 1913-07-21 maddesinde zaten var.
- **Taşınmayan, bulunamadı:** eski kaynak `balkan` ölü (302). *"yüz binlerce muhacir"*, *"seferberliğini tamamlayamayan ordu"*, kisiler *"Nâzım Paşa"* `balkan-savasi` gövdesinde yok. Eski metin kaybolmasın diye `ic_not_d`'ye aynen kondu. `kapsam_genis:true` bayrağı taşınmadı (hedef madde yer_yama ile Yenipazar'a bağlı).
- 🔜 **İZ:** `yer_yama.js` `{dosya:"olaylar.js", t:"1912-10"}` kaydı karşılıksız · `denetle.py:2886` yorumu bu çifti hâlâ açık sayıyor.

## Başkalarının dosyalarına düşen izler (düzeltilmedi)

| dosya | kayıt | ne |
|---|---|---|
| `data/padisahlar.js` | `olum:"1512-05-26"` | → 1512-06-10 |
| `data/ekokuma_magazin.js` | `olay:["1512-05-26",…]`, `t:"1512-05-26"` | → 1512-06-10 |
| `data/ekokuma_edebiyat.js` | `nedim-olumu` `olay:["1730-06-01",…]` | → 1730-10-28 |
| `data/etiket_yama.js` | `{t:"1730-06-01", b:"Nedîm'in Patrona…"}` | → 1730-10-28 |
| `data/yer_yama.js` | `{dosya:"olaylar.js", t:"1912-10", …}` | kaldırılmalı |
| `data/yerlesimler.js` Kilitbahir | `kur`/`d` 1452-01-01 | TDV tercihi 1463/1465 — koşu sonrası |
| `data/yerlesimler.js` Niğbolu (+Ohri) | kırılma 1395-01-01 | 1395-06-03 adayı — koşu sonrası |
