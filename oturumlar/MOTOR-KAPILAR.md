# MOTOR — ÜÇ KAPI (Asya/Avrupa partileri)

> Kullanıcı kararı 2 Ağustos: *"üretim bitince yayınla, sonra kapıları aç."*
> r578 yayınlandı (`c58445e`), `arac/` kilidi kalktı. Kapılar açılıyor.

🔴 **SIRA ÖLÇÜMLE DEĞİŞTİ.** Koordinatör kapıları "Asya için" diye açacaktı.
Ölçüm (2 Ağustos, aşağıdaki betik) bunun **yanlış sıra** olduğunu gösterdi:
**en pahalı kapı en önde duruyordu, en ucuz iki kapı arkada bekliyordu.**

---

## 0. ÖLÇÜM — bu brifingin dayanağı

```
renkler.py BOYALAR                       114 anahtar
BOLGE                                    box(-12, 1.5, 62, 62)

data/yerlesimler_ortaasya2.js    7 nokta ·   9 kimlik · rengi yok:   0 · kutu içi 7/7
data/yerlesimler_avrupa.js     237 nokta ·  35 kimlik · rengi yok:  15 · kutu içi 235/237
data/yerlesimler_asya.js       344 nokta · 147 kimlik · rengi yok: 135 · kutu içi 0/344
                                          lon 65.71 .. 141.35
```

⚠️ **`girdi.py`'deki iki yorum satırı ÇÜRÜMÜŞ** (satır 21-24) — senin dosyan,
düzeltme sende:
```
yazan: "yerlesimler_asya.js  344 nokta — 98 devlet kimliği renkler.py'de YOK"
ölçüm:                                  135 kimlik yok            ← 37 fark
yazan: "yerlesimler_avrupa.js  228 nokta"
ölçüm:                         237 nokta                          ←  9 fark
```
📌 `OGRENILENLER §79` sınıfı: **yorumdaki sayı ölçüm değildir, ölçümün
fotoğrafıdır ve eskir.** İkisi de düzeltilmeli.

---

## KAPI A — `ortaasya2` · BEDAVA, BUGÜN

```
7 nokta · 9 kimlik · rengi olmayan kimlik: 0 · 7/7 kutunun İÇİNDE
```
**Tek iş:** `arac/girdi.py` → `GIRDI_DOSYALARI`'na `"yerlesimler_ortaasya2.js"`.
Renk işi **yok**, `BOLGE` işi **yok**, kimlik işi **yok**.

🔴 Ama `yerlesimler_ek.js`'in dersini uygula (`87b4379`): listeye eklerken
**neden eklendiğini yaz.** İzin listesi glob değil; gerekçesiz satır bir
sonraki oturuma "bu neden burada" diye sorar.

⚠️ Eklemeden önce **çakışma ölçümü**: bu 7 nokta canlı partilerdeki bir
noktaya **3 km'den yakın** mı? Yakınsa petek bozulur (`ASYA-HINDISTAN-CIN §3⑤`).

---

## KAPI B — Avrupa · 15 RENK → 235 NOKTA · 🟢 EN YÜKSEK GETİRİLİ

Bu kapı bugüne kadar **görülmedi** çünkü herkes Asya'ya bakıyordu.

```
235 nokta ZATEN kutunun içinde. BOLGE'ye dokunmadan çizilir.
Önündeki tek engel 15 kimliğin rengi:

aragon · belcika · bretanya · burgonya · ferrara · irlanda · iskocya
isvicre · kastilya · luksemburg · mantua · navarra · parma · piza · siena
```

📌 Kimlik başına **15,7 nokta** düşüyor. Asya'da bu oran **2,5**
(344 ÷ 135). ⇒ **Avrupa'nın renk başına getirisi Asya'nın 6 katı.**

🔴 İki tanesi **zaten VERİ KİMLİK 2'nin kuyruğunda**: `aragon` + `kastilya`
(`VERI-KIMLIK-2.md` kalem 6 — *"ikisi de dizinde var, `harita:` boş"*).
⇒ **Çift iş riski.** Başlamadan önce `oturumlar/VERI-KIMLIK-2-ILERLEME.md`'ye
bak; `⏳ başladım` satırı varsa o ikisini ATLA.

⚠️ Ve `renkler.py`'nin kendi kuralı burada devrede:
> *"Yanlış renk boşluktan KÖTÜDÜR."* (`uret_petek.py:1243`)

15 rengin hepsi **komşu kontrastı ölçülerek** verilmeli — `arac/renk_olc.py`
(1 Ağustos, `ef4a018`) tam bunun için yazıldı ve **ilk koşusunda 87 kusur
buldu** (`OGRENILENLER §83.1`). Bu parti onun **ikinci** koşusu olacak.
📌 Ve bunlar birbirine **komşu** devletler: Kastilya-Aragon-Navarra bitişik,
Parma-Mantua-Ferrara-Siena-Piza bitişik. **Beşi birden aynı tonda çıkarsa
İtalya tek renk olur.** Ölçüm parti olarak yapılmalı, tek tek değil.

---

## KAPI C — `BOLGE` genişletmesi · 🔴 PAHALI, ÖNCE MALİYETİNİ ÖLÇ

```
bugün  box(-12, 1.5,  62, 62)   →  74° genişlik
Asya   lon 141.35'e kadar       → 154° genişlik gerekir  ≈ 2,1 kat
```

🔴 **AÇMADAN ÖNCE ÖLÇ, AÇTIKTAN SONRA DEĞİL.** Gerekçe elimizde:
r578 koşusu **43 dakika** sürdü (10:24 → 11:07). Kara alanı iki katına
çıkarsa bu süre **iki katına çıkmakla kalmaz** — Voronoi kırpması kara
maskesinin karmaşıklığıyla artar ve Güneydoğu Asya takımadaları bugün
haritada bulunan her şeyden **daha parçalı bir kıyı.**

⇒ İstenen: **kutuyu açmadan önce bir maliyet ölçümü.** Ne kadar kara ekleniyor,
maske kaç poligona çıkıyor, tahmini koşu süresi ne. Sayı elimize gelmeden
kutu açılmasın — **bir gecelik koşu bir günü yer** (1 Ağustos'ta 80 dakikalık
bir koşu tam bu yüzden çöpe gitti).

📌 Ve `§82` uyarısı Güneydoğu Asya'da **azami**: motor "nokta = çevresindeki
toprak" varsayar. Takımadada bu varsayım **her adada** bozulur.

🔴 Ayrıca: `BOLGE` **dört dosyada** okunuyor. Üçü kaynaktan okuyor
(`denetle_bosluk.py`, `denetle_kapsama.py`), **biri elle kopya**:
```
arac/denetle.py:962      _BOLGE_KUTU = (-12, 1.5, 62, 62)     ← ELLE KOPYA
```
⚠️ Kutu açılırsa bu satır **sessizce çürür** ve `Değişmez 1` yanlış maskeyle
ölçülür. `denetle_kapsama.py` bir kez tam bu hataya düşmüştü ve `a6215ce`'de
kaynaktan okumaya çevrildi. **Aynı düzeltme `denetle.py:962`'ye de gerekli —
kutu açılmadan ÖNCE.**

---

## SIRALAMA — bağlayıcı

```
1. KAPI A   ortaasya2         bedava, bugün
2. denetle.py:962 kaynaktan okusun   ← C'nin ön koşulu, A ile aynı gün
3. KAPI B   15 Avrupa rengi   renk_olc.py ile, PARTİ hâlinde ölçülerek
4. KAPI C   maliyet ÖLÇÜMÜ    (kutu değil, ölçüm)
5. KAPI C   kutu              ölçüm rakamı koordinatöre gidip karar çıkınca
```

🔴 **Üretimi sen tetikleme.** A ve B bittiğinde koordinatöre haber ver;
tek koşuda ikisi birden çizilir. `ORGANIZASYON`: üretim koordinatörün.

📌 Ve `§14`: rapor yazmadan önce `git log --oneline -5`, raporuna **ölçüm
commit'ini** yaz.
