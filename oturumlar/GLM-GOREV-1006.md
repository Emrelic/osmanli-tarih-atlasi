# GLM GÖREVİ — 1006 · TDV ÖNBELLEĞİNDE KESİK GÖVDE SAYIMI

**Bu dosya GLM'in penceresine ELLE yapıştırılır** (GLM'in tahta erişimi yok).
Önceki görev (`GLM-GOREV-1005.md` — 34 kovayı birleştirme) **İPTAL DEĞİL, İKİNCİ SIRADA**:
sebebi aşağıda ①'de.

---

## ① NİÇİN BU GÖREV, VE NİÇİN ÖNCE BU
5-6 Ekim 2026 gecesi ölçüldü (`denetim/UMIT-W22-KISI-KAYNAK-YENIDEN-1006.md`):
**TDV madde çıkarıcısı çok bölümlü maddeleri ilk `KAYNAKÇA` başlığında KESİYORDU.**
Ölçülen vaka: `hindistan` maddesi **24 KB** olarak önbelleğe alınmış, gerçek gövde **268 KB**
— yani metnin ~%91'i kayıp.

🔴 **Bunun sonucu bir hata sınıfıdır, tek bir yanlış kayıt değil:** kesik bir gövdede
aranan bilgi "yok" görünür ⇒ **yanlış negatif** üretir, ve yanlış negatif yanlış pozitiften
zararlıdır (kimse onu aramaz). Bu yüzden:
- Önbellekten okuyan her hüküm **şüphelidir**.
- 34 kovayı birleştirmek, kesik gövdeleri **tek yere toplayıp kalıcılaştırmak** olur.
⇒ Önce kesiğin **boyutu** ölçülecek, sonra birleştirme konuşulacak.

Düzeltilmiş çıkarıcı depoda: `denetim/ARAC-TDV-CIKARICI-1006.py` (commit `97ba05f6`).

---

## ② ÖLÇÜLECEK ŞEY — tek soru
> `denetim/*-tdv-onbellek/` altındaki **2.682** `.txt` gövdesinden **kaçı kesik**, ve
> hangileri — **ADIYLA**?

Evren bugün: **35 kova**, **2.682 dosya** (ölçüldü, 6 Ekim).

### Yöntem — iki aşamalı, ikisi de mekanik
**AŞAMA 1 — ÜCRETSİZ ELEME (HTTP yok).** Her `.txt` için:
```
boyut (bayt)
"KAYNAKÇA" geçiyor mu · kaç kez
ilk "KAYNAKÇA"dan SONRA kaç bayt metin var
dosya ilk "KAYNAKÇA"dan hemen sonra mı bitiyor  (= KESİK ADAYI)
```
Çıktı: `denetim/GLM1-TDV-KESIK-ELEME-1006.tsv`
Sütunlar: `kova · dosya · bayt · kaynakca_sayisi · sonrasi_bayt · kesik_adayi(0/1)`

**AŞAMA 2 — KESİN ÖLÇÜM (HTTP var).** Aşama 1'in **kesik adayları** için (ve ayrıca
rastgele 50 adaysız dosya için — **kontrol grubu**, aday üreticinin kendisini sınar):
```
canlı sayfayı çek, gövde boyutunu ölç
oran = onbellek_bayt / canli_bayt
```
Çıktı: `denetim/GLM1-TDV-KESIK-OLCUM-1006.tsv`
Sütunlar: `kova · dosya · url · onbellek_bayt · canli_bayt · oran · hüküm`
`hüküm` ∈ `KESIK` (oran < 0,9) · `TAM` (≥ 0,9) · `OLCULEMEDI` (HTTP hatası/302/boş)

### Rapor — `denetim/GLM1-TDV-KESIK-1006.md`
```
① NE ÖLÇTÜM   sayıyla: toplam dosya · kesik adayı · KESIK · TAM · OLCULEMEDI
              en kötü 20 oran ADIYLA
              kontrol grubunda kaç yanlış negatif çıktı (aday değildi ama KESIK)
② NE BULAMADIM  açıkça. `bulunamadı` BİR SONUÇTUR.
③ NE İSTİYORUM  seçenekliyse önerinle
```

---

## ③ 🔴 KURALLAR — ihlali teslimi geçersiz kılar
1. **HİÇBİR ŞEYİ DÜZELTME.** Bu bir **ölçüm** görevi. `denetim/*-tdv-onbellek/` altındaki
   dosyalara **DOKUNMA**, yeniden çekilen gövdeleri oraya **YAZMA**.
2. **Yalnız şu üç dosyayı yaz:** `GLM1-TDV-KESIK-ELEME-1006.tsv` ·
   `GLM1-TDV-KESIK-OLCUM-1006.tsv` · `GLM1-TDV-KESIK-1006.md`. Başka hiçbir dosyaya yazma.
3. **`data/` ve `arac/` altına HİÇ DOKUNMA.** Bir koşu sürüyor olabilir.
4. **HÜKÜM VERME.** "Bu kayıt düzeltilmeli" yazma; `KESIK` bir ölçümdür, `düzeltilecek`
   bir hükümdür ve hüküm koordinatörde.
5. **302 ÖLÜ SLUG DEMEK, "boş" demek DEĞİL** · `000` bir taşıma arızasıdır, ölü değil ·
   boş gövde ile "çekemedim" **AYRI** satırdır. Üçünü karıştırma.
6. **Oranı kendin yorumlama:** `oran` sayıdır, `hüküm` eşikten türer (0,9). Eşiği
   değiştirme; değiştirilmesi gerektiğini düşünüyorsan ③'te **öner**.
7. **ÖNGÖRÜ ŞART:** ölçmeye başlamadan önce raporun başına *kaç dosyanın kesik olduğunu
   tahmin ettiğini* yaz ve **değiştirme**. Ölçüm bitince tutup tutmadığını yaz. Tahminin
   yanlış çıkması kusur değil — **düzeltmek** kusurdur.
8. İstek arasına **bekleme koy** (TDV'yi yormayalım) ve toplam istek sayısını rapora yaz.

---

## ④ BİTTİĞİNDE
Teslim **tek mesaj**: ①②③ üçlüsü + yazdığın üç dosyanın adı. Başka bir şey yazma.
Bu ölçüm üç ayrı işi açacak: W22'nin yeniden denetim kapsamı · `D218`in %81 isabet
oranının yeniden ölçümü · ve GLM'in **asıl** birleştirme görevinin yapılıp yapılmayacağı.
