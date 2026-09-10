# BAYAT BİR KABUL ÖLÇÜTÜ, YANLIŞ SEBEPTEN GEÇER — ve geçtiği için kimse ona bakmaz.

> Kimlik `D150` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BAYAT BİR KABUL ÖLÇÜTÜ, YANLIŞ SEBEPTEN GEÇER — ve geçtiği için
  kimse ona bakmaz.** *(5 Eylül 2026 · Ö9 sınavı)*

  Merge kuyruğunun ⓪ adımında bir kabul ölçütü duruyordu:
```
Ö9   PETEKLER 2731 → ~3800 · peteksiz oran %28,2 → ~%0
     🔴 Tutmazsa koşu EKSİK BİTMİŞ demektir; yayın yapılmaz.
```
  Sınav koşuldu ve **bugünkü (bayat) çıktıya karşı bile geçti**:
  `PETEKLER 3805 · peteksiz 0 (%0,0)`. Sebep ölçüldü:
```
peteksiz.js (ölçüm betiği)  mtime  4 Eyl 11:32
BULGU-GEOMETRI-0904.md      mtime  4 Eyl 11:49
0e7cb11                            4 Eyl 17:15
   "YAYIN r5635 — KOSU 4 INDI · PETEKSIZ NOKTA 1074 -> 0 · UC KITA HARITAYA"
```
  ⇒ Borç **ölçümden 5,5 saat SONRA ödendi**, ve ödeyen commit'in mesajı
  bunu **açıkça yazıyor.** Ölçüt ödenmiş bir borcu bekliyordu.

  🔴 **VE TEHLİKESİ "boşa iş" DEĞİL, SAHTE GÜVEN:** koşu bitince Ö9
  koşulsaydı **geçecekti**, ve *"demek koşu bütün noktaları kapsadı"*
  diye okunacaktı — oysa o sonuç **bir önceki koşudan** geliyor ve yeni
  koşu hakkında hiçbir şey söylemiyor.
  📌 `§11`in *"kendi ödediğin borcu, kaydını okumadan yeniden iş
  sanabilirsin"* dersinin **ters yüzü**: orada ödenmiş borç yeniden **iş**
  sanılıyordu; burada ödenmiş borç bir **sınav** olarak duruyor ve
  **geçmesi hiçbir şey kanıtlamıyor.**

  🟢 **ÇARE ÖLÇÜTÜ SİLMEK DEĞİL, ANLAMINI DÜZELTMEK:** sınav artık bir
  *"iyileşecek mi"* testi değil bir **GERİLEME** testi — koşu 5b'den sonra
  peteksiz **hâlâ 0** olmalı; yükselirse yeni koşu nokta kaybetmiş demektir.
  ⇒ Aynı sayı, ters yön, ve şimdi gerçekten bir şey ölçüyor.

  ⚠️ **VE SINAVIN KENDİSİ KURTARILDI:** betik yalnız bir oturumun
  **scratchpad'inde** duruyordu ve kuyruk ona *"scratchpad'de
  `peteksiz.js`"* diye atıf yapıyordu. O oturum kapansa kabul ölçütü
  **ölçülemez** hâle gelecekti (`§7.1⑦`). Depoya alındı
  (`denetim/ARAC-PETEKSIZ-0905.js`) ve dış bağımlılığı (geçici bir
  `girdi_listesi.txt`) kaldırıldı.
  🔴 Ve kaldırırken **aynı gecenin dersi sekizinci kez ısırdı**: dosya
  listesini `girdi.py`den REGEX'le çıkarmayı denedim, tembel eşleşme
  listeyi ilk parantezde kesti ve **77 yerine 1 dosya** verdi — betik hata
  vermeden *"TOPLAM 792 nokta · peteksiz 0"* diye **temiz bir sayı** bastı.
  Çare regex'i düzeltmek değil, **Python'a okutmak** oldu.
