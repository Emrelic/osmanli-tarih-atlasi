# UMIT-W54b — Memel 1920 + Saar: "Müttefik/MC emaneti doğrudan ardıla yazılmış" sınıfı

**Tür:** ölçüm + öneri · **UYGULAMA YOK.** **Ağaç:** `C:\atlas-w54` = `origin/makine/umit`
@ `47290f11`. Her deneme geçici yapıldı ve `git checkout -- data/ arac/` ile geri alındı. Ağaç temiz.
**Ek diff'ler (ayrı ayrı; hepsi 47290f11'de `git apply --check` temiz):**
| Diff | Dosya | Sahip / ne zaman |
|---|---|---|
| `UMIT-W54b-YERLESIM-1006.diff` | `yerlesimler_ek7.js` (Memel) · `yerlesimler_avrupa.js` (+Saarbrücken) | koordinatör, veri koşusu |
| `UMIT-W54b-KRONOLOJI-1006.diff` | `kronoloji_sinir_avrupa_orta.js` (+2 madde) | koordinatör |
| `UMIT-W54b-DEVLETLER-1006.diff` | `devletler.js`: `itilaf-emaneti` kaynak (+md.100, +md.99) · `saar-havzasi-mandasi` `boya_gerekli:true` | koordinatör |
| `UMIT-W54b-RENK-TAMINSA-1006.diff` | `arac/renkler.py` +2 boya | 🔴 **MOTOR TUZU** — §9.1 ②, yalnız TAM İNŞA koşusunda |

⚠️ `devletler.js` karışık satır sonu taşıyor (10.493 CRLF / 10.710 satır). İlk denemem LF'ye
çevirip 20.989 satırlık bir diff üretti (D264 tuzağı). Diff `newline=''` ile yeniden
üretildi, sonuç 2+/2−.

---

## ① MEMEL — Gdańsk ile AYNI SINIF ✓
**Kayıt** (`yerlesimler_ek7.js`, canlı, tek kayıt):
`almanya 1281→1701 · prusya →1871 · almanya 1871-01-18→1923-02-16 · litvanya 1923-02-16→1923-10-29`

**Kaynak:**
- Versay **md. 99** (Avalon, birebir): *"Germany renounces in favour of the Principal Allied
  and Associated Powers all rights and title over the territories included between the
  Baltic, the north-eastern frontier of East Prussia as defined in Article 28 … and the former
  frontier between Germany and Russia."* Kalıp md. 100 (Danzig) ve SG md. 91 ile birebir aynı.
- Yürürlük **1920-01-10** (FRUS 1919 c. XIII).
- Atama: FRUS not III-99 (frus1919Parisv13/ch12subch10): *"The Conference of Ambassadors on
  February 16, 1923 assigned the territory of Memel to Lithuania"* → atlasın **1923-02-16**
  günü DOĞRU. Yanlış olan yalnız 1920-01-10 → 1923-02-16 arasındaki `almanya` dilimi (~3 yıl).
- Memel Sözleşmesi 8 Mayıs 1924, yürürlük 25 Ağustos 1925 (aynı not): pencere dışı,
  egemenliği değiştirmiyor.
- **TDV:** `memel` ve `klaipeda` slug'ları 302. İçerik araması: "klaipeda" 0, "memel" 25
  eşleşme ama 3 sayfanın üçü de "meme/memeli" gürültüsü ⇒ **TDV'de Memel yok.**

**Bulunamayan:** Fransız idaresinin başlangıç günü ve Ocak 1923 Litvanya ayaklanmasının
günleri. FRUS notlarında yok (ABSENT diye sorgulandı). ⇒ `isg:` (Fransız fiilî idaresi /
Litvanya fiilî girişi) **önerilmedi**, kaynak gerekli.

**Künye:** `itilaf-emaneti` (f 1919-09-10, t 1923-03-15) penceresi 1920-01-10 ve 1923-02-16'yı
kapsıyor ⇒ **yeterli, yeni künye gerekmez.** Model F8 + D205 ③ (Lvov, Gdańsk emsali).

**Öneri (yerleşim diff'i):**
`almanya 1871-01-18→1920-01-10 · itilaf-emaneti 1920-01-10→1923-02-16 (md.99 + FRUS) ·
litvanya 1923-02-16→1923-10-29 (kaynak: FRUS not III-99)`.
Sonuç: Memel `kaynaksız s:` sayısı 1930 → 1929'a iniyor.

**Kronoloji:** 1920-01-10 maddesi *"Memel Müttefik emanetine geçti: Almanya bölgeden
vazgeçti"* (`yer_id:"Klaipėda (Memel)"`, taraflar itilaf-emaneti/almanya/litvanya, md. 99
birebir). 1923-02-16 kırılması bugün zaten kapalı (2s açık listesinde Memel yok).

**Ters yön, çevre:** en yakın noktalar Königsberg (117 km, almanya ✓ Doğu Prusya kaldı),
Šiauliai (138 km, litvanya), Kaunas. Memel bölgesinin ikinci kasabası Heydekrug/Šilutė ve
Pogegen **yok**. Petek Memel'in kendi noktası. Kuzeyde Litvanya, güneyde Königsberg
yarı-uzaklık sınırı Neman hattına kabaca denk düşüyor. Ölçülmedi, motor çıktısı gerekir.

## ② SAAR — AYNI SINIF DEĞİL: "noktasızlık" sınıfı (§2)
**Tarama:** canlı 93 dosyada "saar/sarre" adlı yerleşim **0**. Saarbrücken (49.233, 6.997)
çevresinde en yakın noktalar: **Metz 61 km** (1920'den sonra `fransa-cumhuriyet`) ve **Trier
63 km** (`almanya`, 1281-1923 tek dönem). ⇒ Havza Metz ve Trier petekleri arasında bölünüyor.
1920-1935 arası havza **yarı Fransız yarı Alman** boyanıyor; ikisi de yanlış. Yerleşim
"ardıla yazılmış" değil, **hiç yok.**

**Künye (`devletler.js` tarandı, id tahmin edilmedi):** `saar-havzasi-mandasi` **VAR**
("Saar Havzası Bölgesi (Milletler Cemiyeti İdaresi)", f 1920-01-10, t 1935-03-01,
FRUS + Staatskanzlei + LVR kaynaklı; künyenin kendi notu "mandası" kelimesinin teknik
olarak yanlış olduğunu söylüyor, ad doğru). Koordinatörün uyarısı doğru: **MC emaneti,
Müttefik emaneti DEĞİL.** Versay md. 49 (Avalon, birebir): *"Germany renounces in favour of
the League of Nations, in the capacity of trustee, the government of the territory defined
above."* ⇒ `itilaf-emaneti` KULLANILMADI, var olan MC künyesi kullanıldı. Yeni künye
gerekmiyor. TDV `saar` 302 (künye kaydı da öyle diyor).
⚠️ Bayat yorum: `data/d_sinirlar_avrupa_orta.js:8` hâlâ *"devletler.js'te OLMAYAN taraf
kimlikleri: danzig-serbest-sehri, saar-havzasi-mandasi"* diyor. İkisi de artık VAR.

**Öneri:** yeni nokta **Saarbrücken** (`yerlesimler_avrupa.js`, Trier'in önüne):
`almanya 1281-01-01→1920-01-10 · saar-havzasi-mandasi 1920-01-10→1923-10-29` +
kayıt düzeyinde `kaynak:` (md. 45-50).
- 🔴 **Bilinen borç, beyanlı:** 1793-1815 Fransız dönemi bu işte KAYNAKLANMADI. Komşu Trier
  ile aynı borç (Trier de 1281-1923 tek `almanya`). Kayıt `kaynak:`ında yazılı.
- İlk denemede kayıt düzeyinde `kaynak:` yoktu ve kapı öttü (*"DÖNEM-YALNIZ YENİ …
  kaynak kayıt düzeyine yazılmalı"*, kayıt-kaynaksız 2302 > 2301, çıkış 1). Kaynak eklendi,
  kapı temizlendi.
- 3 km mükerrer: havzada hiç nokta yok ✓.

**Kronoloji:** 1920-01-10 maddesi *"Saar Havzası Milletler Cemiyeti idaresine geçti"*
(`yer_id:"Saarbrücken"`, md. 45 ve 49 birebir).
📌 Ölçüm: madde **olmadan da** 2s açık listesine Saarbrücken DÜŞMÜYOR (sebebi ölçülmedi;
büyük olasılıkla künye-içi 1920-01-10 kuruluş kaydı). Madde haritadaki değişimi okura anlattığı
için öneriliyor, sayıyı değiştirmiyor. İstenirse çıkarılabilir.

**🔴 Boya — HARİTA DELİĞİ:** `durum_tablosu.py` "Renksiz künye — HARİTA DELİĞİ" kovası
(`s:`'de kullanılan ama boyanmayan) **tabanda zaten 1**: `itilaf-emaneti` (Lvov). Ölçüldü,
`renksiz_delik = ['itilaf-emaneti']`.
- Memel bu kovaya yeni kimlik eklemiyor (aynı kimlik).
- Saarbrücken **ikinci kimliği** ekliyor (1 → 2).
- ⚠️ `boya_gerekli:true` BU kovayı düşürmüyor: `durum_tablosu.py:663` beyanı yalnız
  *kullanılmayan* (sessiz) kovaya uyguluyor, `renksiz_delik`e uygulamıyor. Yine de
  devletler diff'ine eklendi (beyan doğru, Saar haritada boyasız kalacak). Kovanın beyanı
  okumaması ayrı bir alet sorusu.
- **Çare:** `UMIT-W54b-RENK-TAMINSA-1006.diff`:
  `itilaf-emaneti` `#b0863a` · `saar-havzasi-mandasi` `#5c8fa3`. `renkler.py` içe aktarımı
  temiz. İlk seçilen gri `#9e9e9e` altlıktan ayrışmıyordu (DE 11,9 < 15), değiştirildi.
  **`renk_olc.py` komşu çakışması SINANMADI.** Tam inşa koşusundan önce koşturulmalı.
  ⇒ Seçenek: Saarbrücken noktası renk yamasıyla AYNI tam inşa koşusunda insin, delik hiç
  görünmesin. Ya da veri koşusunda insin ve delik beyanlı borç olarak tam inşayı beklesin.
  **Karar koordinatörün.**

## ③ `itilaf-emaneti` (koordinatör hükmü uygulandı)
**Ad DEĞİŞMEDİ.** `kaynak:` sonuna eklendi: *"· AYNI KALIP, Versay (yürürlük 10 Ocak 1920 —
FRUS 1919 c. XIII): md. 100 (Danzig) '…' — atama: Büyükelçiler Konferansı kararı, yürürlük
15 Kasım 1920 (FRUS not III-100) · md. 99 (Memel) '…' — atama: Büyükelçiler Konferansı,
16 Şubat 1923 (FRUS not III-99)"*. Alıntılar birebir.
`ozet:` hâlâ yalnız Avusturya topraklarını sayıyor. Dokunulmadı, istenirse tek cümle eklenir.
(Not: renk yamasındaki *görünen ad* "Müttefik emaneti (SG md. 91 · Versay md. 99-100)".
Bu `renkler.py` lejant metni, künye `ad:` değil. İstenmezse künye adıyla eşitlenir.)

## ④ `denetle.py` — kovalar ADIYLA (taban 47290f11, çıkış 2 = D8 ölçülemedi)
| Senaryo | çıkış | 2s AÇIK (t.189) | 2sk kapalı (YER+TARAF) · y-t görünür+maskeli (t.2245) | açılan / kapanan |
|---|---|---|---|---|
| Taban | 2 | 187 | 3236 (1588+1648) · 2245 | — |
| MEMEL (maddesiz) | 2 | **188** | 3235 · maske TARAF 597→598 | AÇILAN: **1920-01-10 Klaipėda (Memel)** (var olan Versay maddesi Memel'i ve emaneti anmıyor) |
| MEMEL + madde | 2 | 187 | **3237 (1589+1648)** · 2245 | KAPANAN: 1920-01-10 Memel, **YER anılarak** · 1923-02-16 zaten kapalı |
| SAAR + DEV (kayıt kaynaksız) | **1** | 187 | 3236 | ✗ kayıt-kaynaksız 2302 > 2301 → kaynak eklendi |
| **HEPSİ (son diff'ler)** | **2** | **187** | **3237 (1589+1648)** · 2245 | Saarbrücken 2s'te ne açıyor ne kapatıyor · kaynaksız `s:` 1930→1929 · zayıf mükerrer 76→78 (İHLAL DEĞİL) · Değişmez 1: 309 sahipsiz değişmedi |

**Sahte kapanış sorusu (Gdańsk vakasının dersi, ③):** Memel 1920-01-10 kırılması bugün
**kapalı değil, AÇIK** çıkıyor (maddesiz senaryo). Yani hiçbir madde onu YALNIZ TARAF ile
sahte kapatmıyor. Önerilen madde onu **YER** koluyla kapatıyor. Saarbrücken yeni nokta,
sahte kapanış sorusu doğmuyor. Bugünkü veride Memel'in 1923-02-16 kırılmasının hangi
kolla kapandığı ayrıca okunmadı.

## ⑤ Ayrı kalemler (bu işte yapılmadı)
① Memel fiilî idare (`isg:` Fransız 1920–1923 · Litvanya Ocak 1923) için kaynak bulunmalı ·
② Trier 1794–1814 Fransız dönemi (ve yeni Saarbrücken noktası) · ③ `durum_tablosu.py`
`renksiz_delik` kovası `boya_gerekli` beyanını okumuyor · ④ `d_sinirlar_avrupa_orta.js:8`
bayat yorum · ⑤ Gdańsk düzeltmesi umit dalında henüz yok (47290f11'de Gdansk hâlâ
1918-11-11 `polonya`). Koordinatörde bekliyor, bu diff'ler onunla çakışmıyor (farklı satırlar).
