# MOTOR 2 — GÖREV TANIMI (2 Ağustos, Fable 5)

> Ana brifing: **`oturumlar/MOTOR-KAPILAR.md`** — ölçümler, gerekçeler ve
> üç kapının tamamı orada. Bu dosya **senin bugünkü kesitini** tanımlar.

---

## 0. 🔴 ÖNCE İKİ UYARI

**① Yanlış dizindesin.** Oturum `Projeler\Uibul`'da açıldı. Proje:
```
C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
```
**`cd` YAPMA, mutlak yolla çalış.** Git index paylaşılıyor
(`ORGANIZASYON §13`) ve commit'te **yol adı** yaz:
```bash
git -C "C:/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ" commit -F - -- arac/girdi.py
```

**② Kapsamın ana brifingin TAMAMI DEĞİL.** `MOTOR-KAPILAR.md`'de üç kapı
var; sende **A ve C-ölçümü** var, **Kapı B (15 Avrupa rengi) SENDE DEĞİL.**
Sebebi kabiliyet değil **sıra**: renk işi komşu kontrastı muhakemesi
gerektiriyor ve koordinatör onu ayrı ele alacak. **Kapı B'ye başlama.**

---

## 1. İŞ A — `ortaasya2` girdiye alınsın 🟢 BEDAVA

Ölçüldü (2 Ağustos): **7 nokta · 9 kimlik · rengi olmayan 0 · 7/7 kutunun
İÇİNDE.** Yani renk işi yok, `BOLGE` işi yok.

```
arac/girdi.py  →  GIRDI_DOSYALARI listesine  "yerlesimler_ortaasya2.js"
```

🔴 **Eklemeden ÖNCE çakışma ölçümü:** bu 7 nokta, canlı partilerdeki
(`yerlesimler.js` · `_afrika` · `_ek`) bir noktaya **3 km'den yakın** mı?
Yakınsa petek bozulur. **Ölç, sayıyı raporla, sonra ekle.**

⚠️ Listeye eklerken **neden eklendiğini yaz** — `87b4379`'un dersi. İzin
listesi glob değil; gerekçesiz satır bir sonraki oturuma "bu neden burada"
diye sorar.

**Kabul ölçütü:** `py arac/denetle.py` koşar ve **yeni sahipsizlik
AÇMAZ.** Açarsa geri al ve raporla.

---

## 2. İŞ B — `denetle.py:962` kaynaktan okusun 🔴 KAPI C'NİN ÖN KOŞULU

Bugün orada **elle kopya bir sabit** duruyor:
```python
_BOLGE_KUTU = (-12, 1.5, 62, 62)     # arac/denetle.py:962
```

`BOLGE` dört dosyada okunuyor; üçü kaynaktan okuyor, **yalnız bu elle
kopya.** Kutu genişletildiği an bu satır **sessizce çürür** ve `Değişmez 1`
yanlış maskeyle ölçülür — yani denetim yeşil yanarken harita bozulur.

🔴 **Emsali AYNI DEPODA var, onu kopyala:** `arac/denetle_kapsama.py:50`
`uret_petek.py`'yi okuyup `BOLGE` satırını regex ile çıkarıyor ve
bulamazsa `SystemExit` ile **duruyor**. `a6215ce` commit'i tam bu
düzeltmeydi.

**Kabul ölçütü, iki uçlu** (`YASALAR B8`):
```
① degistirmeden once: py arac/denetle.py  → cikti X
② degistirdikten sonra: ayni kosu         → cikti AYNI X olmali
③ uret_petek.py'deki BOLGE'yi GECICI degistir → denetle.py YENI degeri gormeli
   (sonra geri al!)
```
③ olmadan ① ve ② hiçbir şey kanıtlamaz: sabit okunmuyor olsa da aynı sonucu
verirdi (`YASALAR B12` — ölçüt ile ölçülen aynı kaynaktan beslenirse ölçüt
sıfır bilgi taşır).

---

## 3. İŞ C — `BOLGE` genişletmesinin MALİYETİ 📏 YALNIZ ÖLÇÜM

🔴 **KUTUYU AÇMA.** Bu iş kutuyu genişletmek değil, **genişletmenin ne
kadara mal olacağını ölçmek.** Karar koordinatörün.

```
bugün   box(-12, 1.5,  62, 62)      74° genişlik
Asya    lon 141.35'e kadar         154° genişlik gerekir  ≈ 2,1 kat
```

Ölçülmesi istenen dört sayı:
```
① bugünkü kara maskesinin ALANI ve POLİGON SAYISI
② kutu 142°'ye açılınca aynı ikisi ne oluyor
③ eklenen noktanın sayısı (yerlesimler_asya.js'ten kutuya girenler)
④ ①-② oranına dayanarak TAHMİNİ koşu süresi
```
📌 Dayanak: r578 koşusu **43 dakika** sürdü (10:24 → 11:07).

⚠️ **④'ü türetimiyle birlikte raporla** (`YASALAR B5`): hangi orandan,
hangi varsayımla. "Yaklaşık iki katı" yetmez; **nasıl bulduğunu yaz.**
Ve tahmin doğrusal olmayabilir — Güneydoğu Asya takımadası bugün haritada
bulunan her şeyden **daha parçalı bir kıyı**; bunu gördüysen söyle.

🔴 Ölçüm için `uret_petek.py`'yi **çalıştırma** — maske kurma kısmını ayrı
bir betikte taklit et ya da import et. Tam koşu 43 dakika ve **üretimi
yalnız koordinatör tetikler.**

---

## 4. YAZMA YETKİN

```
✅ arac/girdi.py                     İş A
✅ arac/denetle.py                   İş B (yalnız _BOLGE_KUTU satırı)
✅ oturumlar/MOTOR-2-ILERLEME.md     kendi defterin
❌ arac/renkler.py                   Kapı B — SENDE DEĞİL
❌ arac/uret_petek.py                BOLGE'yi KALICI değiştirme (İş B③ geçici, geri al)
❌ data/*.js                         veri oturumlarının
❌ kök *.md                          koordinatörün
```

🔴 **`py arac/uret_petek.py` ÇALIŞTIRMA.** Üretimi koordinatör tetikler.

---

## 5. ÇALIŞMA DÜZENİ

1. Başlamadan `oturumlar/MOTOR-2-ILERLEME.md`'ye `⏳ başladım: <iş> — <saat>`
   yaz ve **commit et.** (Çakışma önleme — kilit yok, dosya claim'i var.)
2. `git diff --cached` **commit'ten ÖNCE**
3. Koordinatöre **iş iş** haber ver, üçünü biriktirme
4. Raporunda **ölçüm commit'ini** yaz (`git log --oneline -5`)

⚠️ **Bulamadığını `bulunamadı` diye yaz.** Negatif sonuç da sonuçtur — ve
İş A'da 3 km çakışması **çıkmaması** beklenen sonuçtur; çıkmadıysa bunu
açıkça yaz.

📌 Ve en sık hata: **tablodan okunan sayıyı taze sanmak.** `girdi.py:21-24`
şu anda **çürük iki sayı** taşıyor (yazan 98/228, ölçüm 135/237) — İş A'ya
dokunurken **onları da düzelt**, ama düzeltmeden önce **kendin ölç.**
