# NOKTA — GÜNEYDOĞU ASYA

> Bu dosya senin **açılış brifingin**. `CLAUDE.md`yi baştan sona oku, sonra burayı.

## ⓪ KİMLİK — HADDİN

**SEN:** yerleşim noktası yazan işçi oturumsun.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
**ÜSTÜN:** KOORDİNATÖR (bu görevi sana veren oturum).
**ALTIN:** kimse.
**YASAKLARIN:** başkasının dosyası · `arac/uret_petek.py` koşturmak ·
`renkler.py` · `devletler.js` · kök `*.md` · commit (kendi ilerleme dosyan hariç).

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

Emre'nin bugünkü talimatı: *"yerleşim yerleri katmanını tüm dünyayı
olabildiğince hızlı doldurmalıyız."* Dünya ölçüldü (8 Ağustos, 2133 nokta):

```
bölge                nokta   ~alan        yoğunluk
Anadolu-Kafkas        307     2,4 mn km²    130,1
Avrupa                960    15,5           62,1
Ortadoğu              355     9,9           35,8
K. Afrika             391    13,7           28,6
Orta Asya             102     7,3           14,1
Güney Asya            135    11,4           11,8
Doğu Asya             171    19,4            8,8
🔴 GÜNEYDOĞU ASYA      97    23,3            4,2   ← SENİN BÖLGEN
```

**Motorun penceresi içindeki EN SEYREK yer burası** — 23,3 milyon km²'ye 97
nokta. Ve `CLAUDE.md §2` seyrekliğin ne yaptığını yazıyor: **noktası olmayan
bölge en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.** Bugün
Sumatra'nın içi Malakka'nın, Borneo'nun ortası Brunei'nin peteğine düşüyor
olabilir.

**Hedef: yoğunluk 4,2 → 25** ⇒ yaklaşık **480 nokta**, yani **+380**.
Bu tek partide bitmez; **ilk parti 120-150 nokta**, kıyı ve nehir
hatlarından başla (nüfus oradaydı).

---

## ② İŞİN — sırayla

1. **Bölgeyi böl ve ölç.** Alt kutular: Birmanya · Siyam · Kamboçya-Laos ·
   Vietnam · Malaya · Sumatra · Java · Borneo · Sulawesi · Filipinler ·
   Moluk-Küçük Sunda. Her biri için bugünkü nokta sayısını ölç ve yaz.
2. **`data/yerlesimler_gdasya.js` yaz.** Değişken adı
   `window.YERLESIMLER_GDASYA`.
3. Her nokta: `ad · tur · lat · lon · g · k` + `s:[{f,t,d}]` egemenlik zinciri.
4. **Bitince teslim raporu** — üç sayı: yazılan nokta · kapatılan yoğunluk ·
   açılan kırılma günü.

---

## ③ YAZMA YETKİSİ

```
✅ data/yerlesimler_gdasya.js          YALNIZ SEN
✅ oturumlar/NOKTA-GDASYA-ILERLEME.md  YALNIZ SEN (commit edebilirsin, pathspec'li)
🔴 başka HİÇBİR ŞEY
```

---

## ④ SENİ BAĞLAYAN KURALLAR — hepsi ölçülmüş bedellerden doğdu

### 🔴 A. `2s` TAVANI DOLU — 121/121
Dosyan `denetle.py` `KUYRUK_DOSYALARI`na **önceden eklendi**, yani kendi
kırılmaların çekirdek tavanını delmez. **Ama yine de ölç ve bildir.**

📌 **En iyi yöntem (NOKTA HALKA-2 1, 8 Ağustos):** *"sıfır kırılma borcu
tasarla"* — yani `f`/`t` değerlerini **canlı veride ZATEN VAR OLAN**
kırılma günlerinden seç. O oturum 181 nokta yazdı ve **tek gün bile
açmadı**. Yeni gün açman gerekiyorsa **maddesini de öner**.

⚠️ **VE BİR TUZAK — aynı gün ölçüldü:** *"bu gün veride zaten var"*
**yetmiyor.** Gün **kuyrukta** olabilir ama **çekirdekte olmayabilir**.
Ölçerken çekirdeği (kuyruk dışı dosyaları) ayrı say.

### 🔴 B. TARİH UYDURMA — `CLAUDE.md §4`
- TDV birincil kaynak. **Güneydoğu Asya kapsaması ölçüldü: %53** — yani
  yarısında akademik kaynağa geçeceksin, bu **meşru**.
- Gün bilinmiyorsa `YYYY-01-01`. Bu bir **beyandır**, uydurma değil.
- 🔴 **Slug tuzağı ②:** `curl -s -o /dev/null -w "%{http_code}"` →
  **302 = ölü**, 200 = var. **Ama 200 "DOĞRU madde" demek değil** —
  içeriği OKU. Ölçülmüş vakalar: `ordu` → askerî ordu · `cin` → cin/fıkıh
  terimi (doğrusu `cin--ulke`) · `saray` → mimarî saray.
- 🟢 **Dar slug tutmazsa GENEL maddeyi dene** — ölçüldü: İtalya/Doğu
  Asya/Amerika pilotta %0 verdi, **ikinci denemede %59** tuttu. Sebep:
  denenen sluglar dar kurum adlarıydı; TDV'nin **genel ülke maddesi**
  (`cin--ulke`) aynı konuyu kapsıyordu.
- **"Bulunamadı" demek bir SONUÇTUR** ve uydurmaktan kat kat değerlidir.
  Ve **"arandı, yok"** ile **"aranmadı, tahmin"** ayrı yazılır.

### 🔴 C. KİMLİK — renksiz/künyesiz kimlik YAZMA
Kullandığın her `d:` değeri hem `arac/renkler.py` `BOYALAR`da hem
`data/devletler.js`te **olmalı**. Olmayanı **koordinatöre bildir, sen yazma**.
📌 RENK 2 sana bölgenin kimlik envanterini çıkarıyor; gelmesini bekle ya da
kendin ölç.
⚠️ Ve `§3.5`: **yeni bir `s:` dönemi yazarken devletin ÖMRÜNÜ kontrol et.**
Hayalet devlet en sık hata. Dün üç tanesi kapatıldı (266 · 414 · 54 yıl).

### 🔴 D. MÜKERRER — 3 km
Yeni nokta eklerken **bütün canlı külliyata** karşı 3 km taraması yap, dar
kutuya değil.
⚠️ **Ve aletinin evreni:** dosyan `girdi.py`ye bağlandığı an `girdi.yukle()`
senin noktalarını da döndürür; kendinle karşılaştırıp **sahte mükerrer**
üretirsin. Üç oturum aynı gün bu tuzağa düştü (181 · 88 · 128 sahte).

### 🔴 E. BASH YASAĞI — `§11`
Kaçış (`\b` `\n` backtick) içeren **hiçbir** metin kabuktan geçirilmez.
`Write` ile scratchpad'e `py` betiği yaz, `py <yol>` ile çalıştır.
**Commit mesajı da dosyaya yazılır, `git commit -F <dosya>` ile verilir.**
📌 Bu kural dün **dört oturumun dördü** tarafından da çiğnendi ve
dördüncüsünde `git commit` **boşa gitti ama "başarılı" bastı.**

---

## ⑤ HABERLEŞME — `CLAUDE.md §7.1`

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Koordinatöre araçla mesaj at:
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
    message    : cevabın
```
**Kendi pencerene yazmak = hiç cevap vermemek.**

```
AÇILINCA     "açıldım, brifingi okudum, şu dosyalar bende"
KALEM KALEM  bir alt bölge bitince HEMEN — biriktirme
SORU GELİNCE "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
AKSAKLIK     BEKLEMEZ — kaynaklar çelişiyorsa, şartname yanlışsa,
             beklenenden ÇOK farklı sayı ölçtüysen HEMEN bildir
BİTİNCE      SAYIYLA. "Bitirdim" değil, "97 → 218, yoğunluk 4,2 → 9,4"
```

Her madde üç şey taşır: **① ne ölçtüm ② neyi bulamadım ③ ne istiyorum.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ yazılan nokta sayısı ve alt bölge dağılımı
✅ yoğunluk 4,2 → ?
✅ mükerrer 0 (3 km, TÜM külliyata karşı)
✅ kullandığın her kimlik RENKLİ + KÜNYELİ (değilse LİSTELE)
✅ açtığın kırılma günü sayısı + her biri için madde önerisi
✅ "bulunamadı" yazdığın her kalem — arandı mı, tahmin mi
```

⚠️ **Ve `denetle.py` temiz demek yetmez** — kendi ölçümünü ayrıca yap.
Dün bir oturum *"'denetle.py temiz' bu partinin kabul ölçütü OLAMAZ"*
diyerek kendi tabanını kurdu ve haklıydı.
