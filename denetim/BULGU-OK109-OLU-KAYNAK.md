<!-- DURUM: OLCULDU ¦ 2026-09-02 ¦ OPUS HAZIR KITA 109 -->
# BULGU — "DOĞRU BİLGİ, ÖLÜ ADRES": 37 kaynak slugu 302 döndürüyor

**Vesile:** `parti-emrelic-0038/H-0007`. Maddenin kendi notu *"`zuhab-antlasmasi`
CANLI"* diyordu; ölçtüm, **ölü** çıktı. Ve külliyattaki `1639-05-17 Kasr-ı Şirin
Antlaşması` maddesi de **ölü bir slugu** gösteriyordu. ⇒ *Tekil vaka mı, desen mi?*

**Yöntem:** `data/olaylar*.js`teki **553 benzersiz `kaynak:` slugu** tek tek HTTP
ile sınandı (`CLAUDE.md §4`: 302 = ölü, 200 = madde var), istekler arası 0,25 sn.

---

## ① SAYI

```
taranan slug            553
🟢 CANLI (200)          515   (%93,1)
🔴 ÖLÜ   (302)           37   (%6,7)
⚠️ ölçülemedi             1
etkilenen kronoloji maddesi   42 / 1303   (%3,2)
```

🔴 **VE TARAMANIN SINIRI — bu rapor iki kova taşır, üçüncüsü YOK:**
```
🔴 ÖLÜ (302)                adres yanlış · düzeltilecek        37
⚪ CANLI ama DOĞRULANMADI   "ölçülemedi" — TEMİZ DEĞİL        515
```
⚠️ **515'i "temiz" saymıyorum.** `200` dönmek *"doğru madde"* demek değildir —
`§4`ün ikinci tuzağı: `ordu` **askerî ordu**dur, şehir maddesi `ordu--sehir`'dir;
`cin` fıkıh terimidir, ülke `cin--ulke`'dir. **Bu tarama o tuzağı ÖLÇMEZ**, ve
ölçmediğim şeyi temiz diye yazmıyorum.

---

## ② 🔴 VE BİR DESEN ÇIKTI — ÖLÜM ORANI SLUG CİNSİNE GÖRE 24 KAT DEĞİŞİYOR

```
cins             ölü/toplam      ölü oranı
OLAY               5 /   5         %100
SAVAŞ             13 /  27          %48
ANTLAŞMA           7 /  25          %28
YER · KİŞİ · YAPI 12 / 502           %2
```

> ***TDV bir OLAY ansiklopedisi değil, bir YER-KİŞİ-KAVRAM ansiklopedisidir.***
> Savaşın, antlaşmanın, fethin **kendi maddesi çoğu zaman yoktur**; anlatı
> **yerin ya da kişinin** maddesinin içinde durur.

**Kanıt, aynı olayın iki adresi:**
```
🔴 kasr-i-sirin-antlasmasi   302   (olay adı)
🟢 murad-iv                  200   ve gövdesi olayı GÜNÜYLE veriyor:
      "Kasrışîrin civarındaki Zühâb mevkiinde İran savaşlarına nihayet veren
       … Kasrışîrin Antlaşması imzalanmıştı (14 Muharrem 1049 / 17 Mayıs 1639)"
```
⇒ Bilgi TDV'de **vardı**; yalnız **yanlış kapıdan** aranmıştı.

📌 Bu, `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"* kuralının **niçin**
işlediğini açıklıyor: kapsayıcı madde genellikle **yer ya da kişi** maddesidir,
ve TDV'nin gerçek tanecikliği odur.

---

## ③ ÖLÜ SLUGLARIN TAMAMI

```
SAVAŞ (13)     balkan-savaslari² · buyuk-taarruz · camurlu-savasi ·
               cildir-savasi · izladi-savasi · kirim-savasi ·
               mesaleler-savasi · preveze-deniz-savasi ·
               sakarya-meydan-muharebesi · salankamen-savasi ·
               sirpsindigi-savasi · varna-savasi · zenta-savasi
ANTLAŞMA (7)   belgrad-antlasmalari · bukres-antlasmasi ·
               edirne-segedin-antlasmasi · ferhad-pasa-antlasmasi² ·
               kasr-i-sirin-antlasmasi · nasuh-pasa-antlasmasi · kutsal-ittifak
OLAY (5)       istanbulun-fethi³ · bab-i-ali-baskini · cumhuriyet ·
               duzmece-mustafa · reji
YER/KİŞİ (12)  anadolu-hisari · candarli-halil-hayreddin-pasa · cimpe-kalesi ·
               derbend² · hasimiler · kirim-hanligi · kosmidion ·
               ozdemiroglu-osman-pasa · ozi · rumeli-hisari ·
               selimiye-camii-ve-kulliyesi · ulubat
```
*(üst simge = kaç maddede geçtiği; işaretsizler 1)*

🟢 **CLAUDE.md bunların üçünü ZATEN biliyordu** (`ferhad-pasa-antlasmasi` ·
`derbend` · `selimiye-camii-ve-kulliyesi`) — yani tarama var olan bilgiyi
**çürütmedi, genişletti**: 3 → 37.

---

## ④ NE YAPILMADI — ve niçin

🔴 **Hiçbir `kaynak:` alanına dokunulmadı.** İki sebep:
1. `data/olaylar.js` ve `olaylar_ek*.js` **çekirdek dosyalar** (`§7`: Oturum 0).
2. Koordinatörün kararı (M-2141): *"tek tek yapma, taramayı bekliyorum,
   hepsini tek turda ben uygularım"* — bir dosyayı iki kez açmamak için.

**Tek doğrulanmış öneri hazır:**
```
kasr-i-sirin-antlasmasi  →  murad-iv     (gövde okundu, olay günüyle içeride)
```
⚠️ **Kalan 36'nın karşılığı ARANMADI.** Her biri için *"bu olay hangi yer/kişi
maddesinde anlatılıyor"* sorusu ayrı bir araştırmadır ve **ölçmedim.**
Desen (② tablosu) hangi yöne bakılacağını söylüyor ama **adresi vermiyor.**

---

## ⑤ PİLOT — SEKİZ SLUG İÇİN ADRES ARANDI: **6/8 BULUNDU**

Öngörü `denetim/ONGORU-OK109-ADRES.json`e **aramadan önce** yazıldı: *"5-6 / 8"*,
ve eşik de önceden konuldu: **BULUNDU = gövde olayı ADIYLA ve TARİHİYLE veriyor**
(tarihsiz anma `ZAYIF` kovasına gider, BULUNDU sayılmaz).

```
varna-savasi                 🟢 BULUNDU   varna
preveze-deniz-savasi         🟢 BULUNDU   barbaros-hayreddin-pasa
istanbulun-fethi             🟢 BULUNDU   istanbul
belgrad-antlasmalari         🟢 BULUNDU   belgrad
zenta-savasi                 🟢 BULUNDU   zenta
nasuh-pasa-antlasmasi        🟢 BULUNDU   nasuh-pasa
sakarya-meydan-muharebesi    🟡 ZAYIF     sakarya   (anılıyor, 1921 YOK)
cimpe-kalesi                 🔴 YOK       —          (üç aday da tutmadı)
                                          BULUNDU 6/8 · ZAYIF 1 · YOK 1
```
🟢 **Ve çürüyen ikisi, öngörüde ÖNCEDEN "en şüpheli" diye işaretlenen ikisiydi**
(`sakarya` — TDV'nin Cumhuriyet dönemi taneciği zayıf · `cimpe-kalesi` — zaten
`YER` cinsinde olduğu hâlde ölü, yani desenin kendi istisnası). Öngörünün
**sayısı** değil **şekli** de tuttu.

### 🔴 VE ALETİME GÜVENMEDİM — dört "BULUNDU"yu ELLE DOĞRULADIM
Birinci geçişin kanıt penceresi dört vakada şüpheliydi (`zenta`nınki **HTML/CSS
artığıydı**). İkinci geçiş yılın etrafında dar pencere alıp etiket kalıntısını
eledi. **Altısı da doğrulandı** — `zenta`nınki gerçekten maddenin kendi tanım
cümlesiymiş: *"ZENTA — 1697'de Osmanlı ordusunun Kutsal İttifak güçleri
tarafından bozguna uğratıldığı yer."*

### 🟢 VE İKİ FAZLADAN BULGU

**① Olayın KENDİ maddesi bazen VAR — adı farklı.** TDV'nin **kendi çapraz
göndermesi** doğru slugu veriyor:
```
`varna` gövdesi:                   "… savaş şehir yakınlarında cereyan etti
                                     (bk. VARNA MUHAREBESİ)"
`barbaros-hayreddin-pasa` gövdesi: "PREVEZE DENİZ MUHAREBESİ — … (945/1538)"
sınandı:  varna-muharebesi          200 🟢
          preveze-deniz-muharebesi  200 🟢
```
⇒ Külliyat *"savaşı"* yazmış, TDV *"muharebesi"* diyor.

**② AMA KÖR YENİDEN ADLANDIRMA ÇALIŞMIYOR — ölçüldü:**
```
"savasi" → "muharebesi" körlemesine denendi:   2 / 10   (%20)
TDV'nin KENDİ çapraz göndermesi izlendi:       2 / 2    (%100)
   ölü kalanlar: zenta · cildir · sirpsindigi · mesaleler ·
                 salankamen · camurlu · izlad · kirim  (hepsi -muharebesi de 302)
```
⇒ ***Kural "eki değiştir" değil, "kaynağın kendi göndermesini izle".*** Bu,
`§4`ün *"kaynağı okumak, kaynağın kendi uyarısını da okumaktır"* dersinin
adres tarafı: **TDV yanlış kapıya gelen okuyucuya doğru kapıyı gösteriyor.**

### KARAR ÖLÇÜTÜ
Koordinatörün eşiği: `≥5/8 ⇒ desen adres de veriyor, kalan 28'i koştur.`
**Ölçüm 6/8** ⇒ eşik **geçildi**.
