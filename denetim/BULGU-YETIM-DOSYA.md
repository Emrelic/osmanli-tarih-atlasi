# BULGU — yayın kapısındaki "yetim dosya" 45 → 8, ve kalan 8 GERÇEK

**Tarih:** 29 Ağustos 2026 · **Ölçen:** ORHANGAZİ

---

## Kusur: doğru alet, YANLIŞ SORU

`denetle_yayin.py` 45 dosyayı *"yetim"* sayıyordu:

> *"ne index.html ne girdi.py okuyor"*

Kırkı **`yer_yama_*` yama dosyasıydı.** Soru yanlış kurulmuştu — bir yama
dosyasını tarayıcı **hiçbir zaman** yüklemez, motor **hiçbir zaman**
okumaz. Bu tasarım. Doğru soru: ***uygulayıcısı var mı?***

**Ölçüldü:**

```
yer_yama_* ailesi   →  8 tüketici
   arac/yama_uygula.js · _sahiplik_uygula.py · _kademe_uygula.py ·
   _kademe_olc.py · _yama_sinav.py · _bagli_mi.py · _isci_nabzi.py · renkler.py
```

⇒ `ARA_CIKTI` kovasına alındı. **45 → 8.**

## 🟢 Ve muafiyet ELLE LİSTE DEĞİL, KANITA BAĞLI

Kırk dosya adını tek tek yazmak, yarın kırk birincisi geldiğinde yalan
söylerdi. Onun yerine **uygulayıcının varlığı sınanıyor**: dosya duruyor
ve içinde dizin taraması varsa muafiyet geçerli; uygulayıcı silinirse
**muafiyet de ölür** ve dosyalar yeniden öter.

📌 `CLAUDE.md` bunun tersini öğretmişti: *"kabul edilmiş bir borç kayıtsız
kalırsa yarın kusur diye yeniden bulunur."* Bu, aynı kuralın öteki yüzü:
***gerekçesi ortadan kalkmış bir muafiyet, sessizce YALAN söylemeye
başlar.***

---

## 🔴 KALAN 8 — ve ikisi hariç hiçbirinin gerekçesi YAZILI DEĞİL

| dosya | tüketici | durum |
|---|---|---|
| `olaylar_ek19.js` | yok | 🟡 **gerekçeli** — 8. boyut, ARAYÜZ süzgeci bekliyor (Emre'nin ② kararı: varsayılan KAPALI) |
| `gecitler.js` | yok | 🟡 **gerekçeli** — 63 geçit noktası, motorda nehir sürtünmesi yazılmadı (22 Ağu) |
| `yerlesimler_kafkas_duzeltme.js` | yok | 🔴 **YERLEŞİM DÜZELTMESİ, BAĞLANMAMIŞ** |
| `etiket_sozluk.js` | yok | 🔴 gerekçe yazılı değil |
| `etiket_yama.js` | yok | 🔴 gerekçe yazılı değil |
| `yama_kronoloji_eslesme.js` | yok | 🔴 gerekçe yazılı değil |
| `yer_kron_anadolu.js` | yok | 🔴 gerekçe yazılı değil |
| `yer_kron_dogu.js` | yok | 🔴 gerekçe yazılı değil |

### 🔴 ÖLÇÜLDÜ — `yerlesimler_kafkas_duzeltme.js`in **19 kaydının 19'u DA İNMEMİŞ**

```
🟢 İNMİŞ  (canlı veri dosyayla aynı) :  0
🔴 İNMEMİŞ (canlı veri FARKLI)       : 19
   Kars · Ardahan · Derbend · Kutaisi · Gence · Revan · Hemedan ·
   Kirmanşah · Gümrü (Aleksandropol) · Eçmiyadzin · Digor ·
   Arpaçay (Akyaka) · Iğdır · Başkale · Çaldıran · Özalp (Saray) ·
   Yüksekova (Gever) · Doğubayazıt · Kasr-ı Şîrîn
```

🔴 **VE İÇİNDE EMRE'NİN AÇIK PAKET SORULARININ CEVAPLARI VAR:**
```
Eçmiyadzin · Gümrü   → paket 0038/H-0005  ("İran savaşı sırasında Osmanlı
                        tarafından ele geçmiş olmalı, enklav hâlinde
                        Safevî'de kalmamış olmalı")
Kasr-ı Şîrîn         → paket 0038/H-0007
```
Yani üç turdur *"ölçülecek"* diye bekleyen maddelerin aday verisi **diskte
duruyor ve hiçbir şey okumuyor.**

⚠️ **AMA TOPLU UYGULANMAZ — dosyanın bir günü ZATEN ÇÜRÜTÜLDÜ.**
`yer_yama_ferhatpasa.js`in `kaynak:` alanı:
> *"DEVREDİLEN YAMANIN (yerlesimler_kafkas_duzeltme.js) BAŞLANGIÇ GÜNÜ
> DÜZELTİLDİ: 1555-07-23 → 1578-08-09. Yamanın günü **HİNDİSTAN'a ait**
> (Delhi/Agra/Mathura, sur-hanedani→babur)."*

⇒ Dosya bir **aday kümesidir**, kabul edilmiş bir düzeltme değil. Bir
oturum onu kayıt kayıt doğruluyor ve bir günün yanlış olduğunu **ölçerek**
buldu. Toplu uygulamak, çürütülmüş bir günü geri getirmek olurdu.

**HÜKÜM:** kayıt kayıt doğrulanacak, `yer_yama_*` biçiminde yeniden
yazılacak, `_sahiplik_uygula.py` ile inecek. **Dosyanın kendisi asla
bağlanmayacak** — bağlanırsa doğrulanmamış 19 kayıt bir koşuda haritaya
girer.

### Eski not: `yerlesimler_kafkas_duzeltme.js`

Bu bir **yerleşim düzeltmesi** ve ne motor okuyor ne tarayıcı. İçinde
Kutaisi ve Eçmiyazin kayıtları var (`yer_yama_ferhatpasa.js`in `kaynak:`
alanı ona atıf yapıyor: *"DEVREDİLEN YAMANIN başlangıç günü
düzeltildi..."*). Yani bir oturum onu **kaynak olarak kullanmış**, ama
dosyanın kendisi hiçbir yere bağlı değil.

⚠️ **Bu, `CLAUDE.md`nin ölçülmüş bir vakasının tekrarı olabilir:**
> *"OPUS HAZIR KITA 82: satır eklenmediği için bu veri DİSKTE DURUYOR AMA
> MOTOR OKUMUYOR."*

⇒ **Ölçülmesi gereken:** içindeki kayıtlar `yerlesimler*.js`e inmiş mi,
yoksa yalnız o dosyada mı duruyor? İnmişse dosya **arşive**; inmemişse
**uygulanmalı.**

### `yer_kron_*` ikilisi

Adları "yerleşim-kronoloji" bağı düşündürüyor — muhtemelen
`yama_uygula.js`in ailesine ait ama **önek deseni tutmuyor**
(`yer_kron_`, `yer_yama_` değil). `CLAUDE.md §7`nin *"ayrı dosya vermek
ayrı ad alanı vermek değildir"* dersinin komşusu: **önek tabanlı bir
süzgeç, öneki tutmayan kardeşi sessizce eler.**

---

## Sıradaki iş

- [ ] `yerlesimler_kafkas_duzeltme.js` — kayıtları inmiş mi ÖLÇ
- [ ] `yer_kron_*` — hangi uygulayıcıya ait, öneki mi yanlış
- [ ] `etiket_*` ikilisi — etiket sistemi nerede duruyor
- [ ] `olaylar_ek19` · `gecitler` — `BEKLEYEN` sözlüğüne gerekçesiyle geç
      (bugün yalnız `CIZILMEYEN_MUAF`ta yazılı, o BAŞKA bir dal)
