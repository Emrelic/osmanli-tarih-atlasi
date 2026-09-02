<!-- DURUM: OLCULDU ¦ 2026-09-02 ¦ OPUS HAZIR KITA 109 ¦ B4 — 1923 CIPASI, GUNEY kolu -->
# BULGU — GÜNEY KOLU: "BUGÜNKÜ SINIR = 1923 SINIRI" VARSAYIMI, KESİM KESİM ÖLÇÜLDÜ

**Oturum:** OPUS HAZIR KITA 109 · **2 Eylül 2026** · koordinatör 1.MURAT
**Şartname:** `oturumlar/GECE-SIRASI-2EYLUL.md` §B4 — *"İLK İŞİN bu varsayımı
ölçmek, nokta yazmak değil."*
**Yazılan nokta: 0.** Bu tur ölçüm turudur.

---

## ⓪ HÜKÜM — VE KOORDİNATÖRÜN UYARISINI KISMEN ÇÜRÜTÜYOR

Şartname şöyle diyordu:
> *"'Bugünkü sınır = 1923 sınırı' varsayımı **Suriye-Irak'ta GEÇMEZ.** 1923'te
> oralar manda düzenindeydi ve sınırlar 1926'ya (Ankara Antlaşması, Musul)
> kadar oturmadı."*

**Ölçüm bunu ikiye ayırdı ve yarısını çürüttü:**

```
5 km'yi aşan ~666 km'lik hattın dağılımı
   🟢 VARSAYIM GEÇİYOR     459 km   ← DÖRT IRAK KESİMİNİN DÖRDÜ DE BURADA
   🔴 VARSAYIM GEÇMİYOR    139 km   ← YALNIZ HATAY
   🟡 ZAYIF / SINANAMADI    68 km   ← kanıt ince, önce nokta gerek
```

⇒ **Uyarı HUKUKÎ sınır için doğru, FİİLÎ sınır için yanlış.** Ayrım şu:

| | 1923'te ne vardı | atlas neyi boyar |
|---|---|---|
| **hukukî sınır** | Türkiye-Irak sınırı **YOKTU** (Lozan md. 3/2 → 1926-06-05 Ankara) | boyamıyor |
| **fiilî tasarruf** | İngiliz mandası Musul vilâyetini 1918'den beri tutuyordu | **BUNU boyar** |

`CLAUDE.md`: ***"Atlas seferi değil TASARRUFU boyar."*** Atlas zaten fiilî
tasarruf modelini kullanıyor (UYGULAMA-1, `BULGU-SINIR-GUNEY.md §⑤`), ve
**fiilî çizgi bugünkü sınırla ölçülebilir biçimde örtüşüyor.**

📌 Yani soru *"1923'te sınır çizilmiş miydi"* değil — o soruya cevap HAYIR ve
şartname haklı. Soru ***"1923'te hangi köy kimin fiilî idaresindeydi, ve o
ayrım bugünkü çizgiyle aynı yerden mi geçiyor"*** — cevap **EVET**, Hatay hariç.

---

## ① YÖNTEM — varsayımı tarihle değil VERİYLE sınadım

Tarih bilgisiyle *"Hatay 1939'da katıldı"* demek bir **iddia**dır; bu turda
onu bir **sınav**a çevirdim:

> Atlasın 1923 sahipliği bir çizgi tanımlar (OSMANLI/tâbi ile yabancının
> arası). Bugünkü ülke poligonu da bir çizgi tanımlar. **İkisi aynı mı?**
> SINAV: her noktanın **1923 sahibi** ile **bugün içinde durduğu ülke**
> birbirini tutuyor mu?
> `Turkey ↔ OSMANLI/tâbi` · `Syria ↔ fransa` · `Iraq ↔ ingiltere` · `Iran ↔ kacar`

Evren: 34,8-38,8°K / 34,8-45,8°D kuşağı, 1923-06-15'te sahibi olan noktalar.
Kesimler `denetim/olc_sinir_sapma.py`nin kendi dökümünden alındı (kendi
kesimlemem değil — var olan aleti çağırdım).

---

## ② 🔴 KENDİ ÖLÇÜMÜMÜN İKİ KUSURUNU DÜZELTTİM — ikisi de ilk geçişte vardı

**Kusur 1 — mesafe sınavım KIYIYI kara sınırı sanıyordu.**
İkinci geçişte İskenderun için *"sınıra 0,9 km"* çıktı ve neredeyse
*"çözünürlük artefaktı"* diye eleyecektim. Oysa o 0,9 km **kıyıya** olan
mesafeydi; İskenderun kara sınırından **41,5 km** içeride.
⇒ Üçüncü geçişte kara sınırı ayrıca kuruldu (Türkiye poligonunun komşu
poligonlara 1,5 km'den yakın kısmı, ~2340 km) ve mesafe ona ölçüldü.
📌 Eleseydim **Hatay artefaktının yarısını görünmez kılacaktım** — yani
düzeltilmemesi gereken kesimi *"düzeltilebilir"* ilan edecektim.

**Kusur 2 — poligon çözünürlüğü ayrışma gibi görünüyor.**
İlk geçiş **üç** ayrışma buldu, üçüncüsü **Kobani**'ydi. Ölçüldü: Kobani kara
sınırından **0,5 km**. Kobani tarihen de bugün de Suriye'dedir; veri
(`fransa-cumhuriyet`) **doğru**, yanılan poligon. ⇒ `<3 km` bandı **ayrı
kovaya** alındı, ayrışma sayılmadı.
⚠️ Elenmemiş olsaydı Kobani **üç ayrı kesimi** birden 🔴 boyayacaktı
(Birecik↔Cerablus · Suruç↔Kobani · Ceylanpınar↔Rakka) — yani **314 km**
yanlışlıkla *"dokunulmaz"* ilan edilecekti.

---

## ③ KESİM KESİM — hüküm tablosu

| kesim | km | en kötü | sınanan nokta | ayrışan | hüküm |
|---|---|---|---|---|---|
| HATAY (Payas↔Antakya) | 139 | −30,9 | 7 | **2** | 🔴 **GEÇMİYOR** |
| Birecik↔Cerablus | 40 | −10,6 | 7 | 0 | 🟢 geçiyor |
| Suruç↔Kobani | 4 | −5,6 | 6 | 0 | 🟢 geçiyor |
| **Ceylanpınar↔Rakka** | **274** | **+67,7** | 8 | 0 | 🟢 **geçiyor** |
| Silopi↔Malikiye | 45 | −14,9 | 2 | 0 | 🟡 zayıf sınav |
| Silopi↔Zaho | 23 | −6,4 | 3 | 0 | 🟡 zayıf sınav |
| Çölemerik↔Duhok | 47 | +12,3 | 4 | 0 | 🟢 geçiyor |
| Yüksekova↔Akra | 57 | +15,8 | 4 | 0 | 🟢 geçiyor |
| Şemdinli↔Rāzhān | 37 | +11,3 | 4 | 0 | 🟢 geçiyor |

**Ayrışan iki nokta ve ikisi de aynı olay:**
```
Antakya      36,202 / 36,161   1923 = fransa-cumhuriyet   bugün = Turkey   kara sınırına 22,3 km
İskenderun   36,587 / 36,173   1923 = fransa-cumhuriyet   bugün = Turkey   kara sınırına 41,5 km
```
⇒ **Hatay Sancağı, 1939.** Veri 1923'ü **doğru** yazmış; ayrışan bugünkü
poligon. `olc_sinir_sapma.py`nin başında duran ⓪ ARTEFAKT SINAVI'nın
tam vakası — ve artık **sayıyla** duruyor: 139 km, iki nokta.

---

## ④ NE YAPILABİLİR — ve bu tur niçin nokta YAZMADI

```
🔴 HATAY 139 km          nokta EKLENMEZ. Sapma kusur değil ARTEFAKT;
                         kapatmak 1923'te Hatay'ı Türk boyamak olur.
🟢 IRAK 164 km           AÇIK — ve bu, şartnamenin kapalı sandığı kesim.
   (Çölemerik↔Duhok · Yüksekova↔Akra · Şemdinli↔Rāzhān · Silopi↔Zaho)
   Fiilî tasarruf çizgisi bugünküyle örtüşüyor ⇒ işaret kuralı İŞLER.
🟢 SURİYE 318 km         AÇIK, ama en büyüğü (Ceylanpınar↔Rakka 274 km)
                         UYGULAMA-1 tarafından zaten arandı ve
                         "gerçek tarihsel seyreklik" diye elendi.
🟡 68 km                 önce nokta, sonra sınav — bugün kanıt ince.
```

**Bu turda nokta yazılmadı, üç sebeple:**
① Şartname *"ilk işin varsayımı ölçmek, nokta yazmak değil"* diyordu.
② Irak kesimlerinin açıldığı **bu ölçümle** anlaşıldı; nokta araştırması
  ayrı bir tur ister ve o turun kabul ölçütü bu tablodan çıkar.
③ `girdi.py` kilitli — açılan dosya bağlanamaz; acele etmenin kazancı yok.

---

## ⑤ YAN BULGU — DOĞU KOLUNUN BİR ÇIPASI ÇÖZÜNÜRLÜK BANDINDA

```
Bacirge (Esendere)   37,711 / 44,601   1923 = OSMANLI   bugün poligonu = Iran
                     kara sınırına 0,4 km
```
Bu nokta **Doğu kolunun yazdığı altı sınır çıpasından biri**
(`yerlesimler_sinir_dogu.js`). Ayrışma **saymadım** — 0,4 km çözünürlük
bandının içinde ve Esendere gerçekten Türkiye'dedir. **Ama bildiriyorum:**
bir çıpa, kendisini sınayan poligonun **yanlış tarafına** düşecek kadar
sınıra yakınsa, o çıpaya dayanan ölçüm (Doğu kolunun *"7,29 → 0,73 km"*
sonucu) çözünürlük gürültüsüne duyarlıdır. **Ölçmedim**, yalnız işaret
ediyorum; Doğu kolunun sonucunu çürütmüyorum.

---

## ⑥ BU ÖLÇÜMÜN SINIRI — ölçmediklerim

- **Nokta yoğunluğu düşük.** Bütün güney kuşağında 1923 sahipliği olan
  **59** nokta var; kesimler 2-8 nokta ile sınandı. 🟢 hükümlerin dayanağı
  bu kadar, ve *"0 ayrışma"* ile *"sınanacak nokta yok"* farkını ayırdım —
  ama 4 noktayla verilen 🟢, 8 noktayla verilenden zayıftır.
- **Suriye-Irak arası sınırı ölçmedim** — yalnız Türkiye'nin güney hattını
  ölçtüm; şartname o kolu istedi.
- **1921 Ankara İtilâfnâmesi hattının bugünküyle birebir aynı olduğunu
  BELGEDEN doğrulamadım.** Veriyle sınadım (7 · 6 · 8 nokta, 0 ayrışma) ve
  sınav geçti; ama bu bir **veri sınavı**, bir **metin doğrulaması** değil.
- **GeoNames rehberini bu turda kullanmadım.** Nokta yazmadığım için
  gerekmedi; `alternatenames` (tarihî ad) ve koordinat kazancı bir sonraki
  turun aleti.
