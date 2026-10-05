# PAKET-0076-HAT-YASLA-1004 — 8 D-RENK kalemine doktrinin (HUKUM-HAT-YASLANMA-1004 H1-H5) uygulanması

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi. **Öneri; veriye ve koda yazılmadı.**

## 0 · Sonuç
```
🟢 YASLANMALI ve BUGÜN YASLANIYOR (istemci yaslaması indi)   H-0041 · H-0059 · H-0144(E kısmı) · H-0155 · H-0156
🟢 YASLANMALI ama YASLANAMIYOR — KOD KALEMİ (tâbi taraf)       H-0118 · H-0120
⚪ C sınıfı, doktrinin dışında (Emre: "E veya D kategori")    H-0144'ün Tuna kısmı (g3-bg-ro-tuna-p4)
🟡 İŞGAL (kaynakla belgeli boşaltmama)                        0 — kaynaklı aday YOK
📜 H-0042                                                      genel kural = doktrinin kendisi
```
🔴 **② sorusunun cevabı: 8 kalemin 17 hattının HİÇBİRİ "D 42"nin içinde DEĞİL.** 16'sı etkin E, 1'i C.
🔴 **③ — `_D_YASLA_SINIF_HUKUKI`a D EKLENMEMELİ.** "D 42" Emre'nin "D kategori"si değil, FİİLÎ
hatlar (aşağıda §2). Emre'nin "D kategori"si veride `kategori:"D"` alanıdır ve o zaten E'ye
çevrilip yaslanıyor.

## 1 · Ölçüm — 801 hat kaydı, gerçek yükleyici (node, 13 dosya, regex DEĞİL)
`_dEtkinSinif` (js/d_katman.js:222) kuralı: `sinif` varsa o · yoksa `kategori:"D"`→E · `"fiili"`→D · `"C"`→C.
```
kategori → etkin sınıf
  D      → E   221        D-YOK → YOK 351       C → C 131
  fiili  → D    26        D     → D     8  ←    - → E  45 · - → D 8 · - → C 9
  fiili  → YOK   1        E     → E     1
ETKİN D = 42  =  fiili 26  +  kategori D ama sinif D yazılmış 8  +  kategorisiz sinif D 8
```
8 kalemin hatları (hepsi kendi gününde GEÇERLİ, hepsinde `sol_taraf` var, iki taraflı):
```
H-0041  1878-06-04  d1829-osm-rus-1/2                 kategori D · sinif E   E
H-0059  1881-12-20  d1878-ru-ro-prut/tuna-rus-rk      kategori D · sinif E   E
H-0118  1910-05-19  d1910-libya-tunus-osmanli ·
                    d1910-libya-cezayir-gadames-osmanli kategori D · sinif E   E
H-0120  1911-10-08  d1906-filistin-misir-hidivlik     kategori E · sinif E   E
H-0144  1913-06-29  g3-bg-ro-dobruca-p4               kategori D · sinif E   E
                    g3-bg-ro-tuna-p4                  kategori C · sinif C   C
H-0155  1913-11-14  g1-gr-srb-1/2 · d1923-gr-bg-bati  kategori D · sinif E   E
H-0156  1913-11-17  d1913-osm-ir-1/2/3 · g1-osm-ir    kategori D · sinif E   E
```

## 2 · ③ "D eklenirse 42'nin kaçı düzelir?" — EKLENMEMELİ, gerekçesi ölçüldü
`_D_YASLA_SINIF_FIILI = {D,F,E}` — **D zaten FİİLÎ görünümde yaslanıyor.** Hukukî görünüm D'yi hiç
ÇİZMİYOR (`_dAktifKayitlar`: "hukukî görünüm D'yi hiç göstermez"). 42'nin içeriği:
```
fiili 26   örnek: d1920-yunan-isgal-bg · d1922-mudanya-meric · d1918-fr-de-isgal · d1923-es-pt-olivenza
           ⇒ İŞGAL / mütareke / fiilî denetim hatları
kategori D + sinif D 8 — gerekçeleri kayıtta (sinif_not):
   d1923-gr-bg-dogu        "hat Bulgaristan için Neuilly'de kararlaştırıldı (E), ama öbür yakadaki Yunan
                            egemenliğinin dayanağı (Trakya Antl. 1920) 1923-10-29'da yürürlükte DEĞİLDİ"
   d1923-filistin-misir · d1917-filistin-misir-askeri-idare · d1920-filistin-misir-manda
                           "koordinat kesin, iki taraf arasında hukukî teyit yok (1926 … öncesi)"
   d1923-oky-yenigine-* ×4  (gerekçe alanı BOŞ — ⚠️ ayrı borç)
kategorisiz sinif D 8
```
⇒ D'yi hukukî yaslamaya eklemek, **işgal ve mütareke hatlarını egemenlik sınırı gibi BOYAMAK** olur.
Doktrinin H5'i tam tersini söylüyor: hukukî sınır ile fiilî durum ayrılınca hat hukuku gösterir,
fiilî durum **TARANIR** (`isg:`), renge katılmaz. Emre'nin "E veya D kategori" sözü `kategori` alanını
anlatıyor: `kategori:"D"` 221 kaydın 221'i ZATEN etkin E ve yaslanıyor.
📌 Bakılması gereken tek dar küme: `kategori D` olup `sinif D`ye İNDİRİLMİŞ 8 kayıt. 4'ünün gerekçesi
yazılı (fiilî/teyitsiz — indirme doğru görünüyor), **Yeni Gine ×4'ünün gerekçesi YOK** ⇒ o 4 kayıt
için ya gerekçe yazılmalı ya da E'ye dönmeli. Bu bir veri kalemi; kod değil.

## 3 · Bugünkü hâl — tarayıcıda ÖLÇÜLDÜ (localhost, hukukî görünüm)
Yöntem: her kalemin gününe gidildi, `_dYaslaImza = null` ile önbellek bypass edildi, eşzamanlı
`_dYaslaGuncelle(suanki)` çağrıldı, sonra `_dYaslandiMi(id)` ve `_dYaslaSayac.atlanan` okundu
(kodun kendi ölçü alanları; render'a bağımlı değil). Süre 9-38 sn/gün (soğuk).
⚠️ İlk deneme yanlış ölçtü: asenkron dilimli iş imzayı yazmıştı, eşzamanlı çağrı "aynı imza" deyip
HİÇBİR ŞEY yapmadı ⇒ her şey "yaslanmadı" çıktı. İmza sıfırlanınca düzeldi. (İkinci deneme render
tabanlıydı ve gizli bölmede karolar çizilmediği için "BOŞ" okudu — ATILDI.)
```
H-0041  1878-06-04  d1829-osm-rus-1 · -2                YASLANDI ×2
H-0059  1881-12-20  d1878-ru-ro-prut · -tuna            YASLANDI ×2
H-0118  1910-05-19  d1910-libya-tunus-osmanli           YASLANMADI — "tunus-beyligi-fransiz gövdesi o gün yok"
                    d1910-libya-cezayir-gadames-osmanli YASLANMADI — "yön doğrulanamadı (sol 2401/7828 km², sağ 0/0)"
H-0120  1911-10-08  d1906-filistin-misir-hidivlik       YASLANMADI — "misir-kavalali gövdesi o gün yok"
H-0144  1913-06-29  g3-bg-ro-dobruca-p4 (E)             YASLANDI
                    g3-bg-ro-tuna-p4 (C)                YASLANMADI — tasarım: C kaba belge, gövde kesmez
H-0155  1913-11-14  g1-gr-srb-1 · -2 · d1923-gr-bg-bati YASLANDI ×3
H-0156  1913-11-17  d1913-osm-ir-1 · -2 · -3 · g1-osm-ir YASLANDI ×4
```
⇒ Emre'nin uyarısı doğruydu: [E] olanların **12/14'ü bugün yaslanıyor.** Şikâyetler (23 Eylül
görselleri) istemci yaslaması inmeden önceydi. ⚠️ Yaslama 9-38 sn sonra uygulanır; o süre içinde
ekranda ham gövde durur — "düzelmedi" görüntüsünün bir kısmı bu gecikme olabilir.

## 4 · H-0118 · H-0120 — ortak kök: hattın bir yanı OSMANLI TÂBİSİ
Veride (girdi.yukle): 1910-05-19 Tunus noktaları (Mekter, Testûr, Kayrevan, Zağvân, Kef) `v: kid
tunus-beyligi-fransiz` · 1911-10-08 Mısır noktaları (Demenhûr, Dessûk, Reşîd, Tanta) `v: kid
misir-kavalali` ⇒ ikisi de Osmanlı TÂBİ katmanında (vassal) çiziliyor, ayrı devlet gövdesi YOK.
`_dTarafGovdesi` (js/d_katman.js:545) yalnız `osmanli` (doğrudan gövde) ve `devletler2` gövdelerini
tanıyor ⇒ tâbi kid'i bulamıyor ⇒ "gövdesi o gün yok". Gadames'in "sağ 0/0"ı da aynı sınıftan
(cezayir-fransiz yanı şeritte gövde vermiyor).
🔧 **KOD KALEMİ (öneri, uygulama sende):** `_dTarafGovdesi` taraf kimliği o gün bir `v:` kid'i ise
`donemler[aktifDonem].v` (tâbi gövdesi) içinden o kid'in parçasını döndürsün. ⚠️ Tâbi gövdesi tek
birleşik geometri olabilir (kid'e göre bölünmüş mü ÖLÇÜLMEDİ) — önce bu ölçülmeli. Koşu istemez
(istemci kodu), motor tuzuna dokunmaz.

## 5 · 🟡 İŞGAL kovası — 0, ve niçin
Emre'nin cümlesi "kaynakla belirlenmiş şekilde … boşaltmamış ise". Sekiz kalemin hiçbirinde
kaynaklı bir "boşaltmama" bulunamadı. Tek aday H-0041: 1878-06-04'te Kars bölgesi Rusya'da ve 1829
hattının ötesinde — ama bu bir boşaltmama değil SAVAŞ İŞGALİ (1877-11-18 → Berlin 1878-07-13), ve
veride `s: rusya` olarak yazılı (`isg:` değil). Bu, H-0036'nın kökü ("93 Harbi'nde isg: katmanı hiç
yok"); yer-yer işgal günleri için kaynak bulunamadı ⇒ ⚪, işgal DEĞİL.

## 6 · Önerilen hükümler (CEVAP.json'a yazılmadı)
```
H-0041  cozuldu        iki E hattı bugün YASLANIYOR (ölçüldü) · Kars'ın fiilî durumu H-0036'da (sirada)
H-0059  cozuldu        iki E hattı YASLANIYOR
H-0144  cozuldu        E hattı YASLANIYOR · Tuna (C) tasarım gereği yaslanmaz, doktrinin dışında
H-0155  cozuldu        üç E hattı YASLANIYOR
H-0156  cozuldu        dört E hattı YASLANIYOR
H-0118  sirada         kod kalemi: tâbi taraf (tunus-beyligi-fransiz) · §4
H-0120  sirada         kod kalemi: tâbi taraf (misir-kavalali) · §4
H-0042  cozuldu        genel kural = HUKUM-HAT-YASLANMA-1004'ün kendisi; 8 görselin uygulaması yukarıda
```
⚠️ `cozuldu` önerisinin dayanağı istemci yaslamasının BUGÜN indiği ve ölçüldüğü; ama yaslama
gecikmeli (9-38 sn). Gecikme kabul edilmiyorsa ayrı bir performans kalemi.
