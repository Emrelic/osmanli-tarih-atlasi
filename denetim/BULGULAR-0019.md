# parti-emrelic-0019 — 81 maddenin tasnifi

**Oturum:** PAKET 0019 TASNIF · **kip:** yalnız ÖLÇÜM ve HÜKÜM.
Projeye hiçbir düzeltme uygulanmadı. Yazılan dosyalar: bu dosya ve
`…\ClaudEmre\kutu\giden\parti-emrelic-0019\CEVAP.json`.

**Paketin damgası:** 2026-08-13 17:34 · **tasnif:** 2026-08-20
⇒ arada **1383 tahta-dışı commit** var. Bayat madde beklentisi yüksekti ve
ölçüm bunu doğruladı.

---

## 0 · HÜKÜM DAĞILIMI

```
olculecek       36     ölçülmedi, hüküm verilmedi — gereken ölçüm yazıldı
cozuldu         23     bayat: iş sonradan yapılmış, commit'i yazılı
sirada          15     gerçek açık kalem, hiç başlanmamış
senin-kararin    4     tasarım kararı Emre'nin
zaten-dogru      2     kusur yok, sistem zaten öyle çalışıyor
gerek-yok        1     proje kusuru değil (token hesabı)
                ───
                81
```

🔴 **Ölçüm ile çıkarım ayrı:** `olculecek` bir hüküm DEĞİL, hükümsüzlüğün
kaydıdır. 36 maddede görsel açmadım ve tahmin yürütmedim — her birine
*hangi ölçümün gerektiği* yazıldı.

---

## 1 · BAYAT ÇIKAN 23 MADDE — ve onları kapatan commit

| madde | ne isteniyordu | kapatan |
|---|---|---|
| H-0005 · H-0021 · H-0060 | tepe metni ile kronoloji maddesi tutmuyor | **ad42467** (19 Ağu) |
| H-0006 · H-0042 · H-0057 | aynı gün olaylar ①②③ diye sıralansın | `ayniGunGruplaKur` |
| H-0012 | çölde cetvelle çizilmiş sınır | SERBEST KENAR + **3a36b65** |
| H-0014 | 2. Kosova işaretlenmemiş | **4581d71** (19 Ağu) |
| H-0028 · H-0029 · H-0033 · H-0053 · H-0063 | savaş yeri haritada yok | `savaslar.js` 169/169 koordinatlı |
| H-0035 · H-0040 | Mazagan · Zebîd maddesi yok | kronolojide var, `yer_id` dolu |
| H-0044 | kılıç işaretleri kalıcı | `sure` + `sonrakiOlayaKadar` |
| H-0055 | üçgen iğneler + pembe kenar | **3a36b65** (bugün 10:34) |
| H-0031 · H-0071 · H-0072 · H-0073 · H-0079 | 200/300/400 puanlama | **68ac2ab** · **b55c262** · **b3c575c** |
| H-0066 | enklav yaratmadan koridor boyansın | **b55c262** (18 Ağu) |

🟢 **En büyüğü H-0071:** Emre'nin *"200 km 4 puan · 200-300 km 2 puan ·
300-400 km 1 puan · toplam 4 ise boyansın"* önerisi **birebir motorun
bugünkü kuralı.** `uret_petek.py`: `PUAN_ESIK = 4` ·
`PUAN_HALKA = ((200.0, 4), (300.0, 2), (400.0, 1))`.

⚠️ **İki madde "kısmen bayat":** H-0035 ve H-0042'nin birinci yarısı
kapandı, ikinci yarısı (önem puanı · toprak teyidi) açık kaldı ve ayrı
maddelere bağlandı. Tek kelimeyle kapatmak, açık kalan yarıyı görünmez
kılardı.

---

## 2 · EN ÖNEMLİ ON GERÇEK KUSUR — tek satır, nerede düzeltileceğiyle

| # | madde | kusur | nerede |
|---|---|---|---|
| 1 | H-0044 · H-0017 | **`ANTLASMALAR` 41 kaydın 40'ında koordinat YOK** (savaşlarda 169/169 tam) ⇒ antlaşmalar haritada işaretlenmiyor | `data/savaslar.js` |
| 2 | H-0079 | **Nâsıriye sınıfı**: `kur:`i gelmemiş şehrin peteği ne sahipli ne devredilmiş ⇒ Basra-Bağdat'ta 21.599 km² delik; örneklemde **223 yerleşim** | `arac/uret_petek.py` |
| 3 | H-0020 · H-0035 | **`onem:` alanı hiç yok** (0 eşleşme) ⇒ "yalnız 4-5 önemdekileri göster" ayarı kurulamıyor; 1223 maddeye puan gerekiyor | `data/olaylar*.js` |
| 4 | H-0011 | **Devlet seçici yok** — `combobox`/`devletKronoloji` grep'i 0 sonuç; atlas hâlâ yalnız Osmanlı merkezli | `js/app.js` |
| 5 | H-0034 | **Azemmûr kaydı HİÇ YOK** — kronolojide de `savaslar.js`te de 0 eşleşme (yazım farkı ihtimali elenmedi) | kronoloji oturumu |
| 6 | H-0058 | **Böğürdelen'in savaş kaydı yok** ⇒ `yer_id` var ama işaret çıkmıyor (`4581d71`in Granbosa vakasının aynısı) | `data/savaslar.js` |
| 7 | H-0023 | **"Etiketsiz toprak" denetim dalı yok** — `denetle.py`de böyle bir nöbetçi bulunamadı | `arac/denetle.py` |
| 8 | H-0080 | **Deniz rengi kısıtı yok** — palet denetimleri yalnız devlet-devlet çiftini ölçüyor, devlet-ZEMİN çiftini hiç | `arac/renkler.py` |
| 9 | H-0032 | Yeni alınan toprağın yanıp sönmesi yok (`pulse`/`yanip` 0 sonuç) | `js/app.js` |
| 10 | H-0062 | Sefer rotası **bir madde ÖNCE** çiziliyor — renk değil ZAMANLAMA kusuru | `js/app.js` |

---

## 3 · BU TASNİFİN YAN ÜRÜNÜ: `CLAUDE.md §1.5` BAYAT

Ölçüm sırasında belge çürüdü:

```
CLAUDE.md §1.5 diyor    1223 madde · 811 yer_id
bugün ÖLÇTÜM            1223 madde · 1223 yer_id   ⇒ TAŞIMAYAN 0
```

⇒ H-0017'nin (*"bütün olayların haritada gösterilip gösterilmediğini
kontrol edelim"*) cevabı **kapalı** — ama belgeye bakan bir oturum
*"412 madde eksik"* sanıp boşuna iş açardı.

📌 `§1.5` zaten *"bu tablo elle yazılmaz, üretilir"* diyor
(`py arac/durum_tablosu.py --yaz`). Satır yine de bayatlamış.

---

## 4 · ÖLÇMEDİKLERİM — tahmin etmedim, yazıyorum

1. **36 maddenin görselini açmadım.** Şerit aracıyla künyeleri gördüm,
   tam görselleri okumadım.
2. **Fetret devri dört maddesi** (H-0001…H-0004) — hiçbir kesit
   ölçülmedi.
3. **Doğu Anadolu enklav kümesi** (H-0036…H-0039 · H-0064 · H-0068 ·
   H-0069) — hiçbiri ölçülmedi ve ⚠️ **hepsi 17-18 Ağustos'taki iki
   motor değişikliğinden SONRA değişmiş olabilir.** Bu yüzden görsele
   bakmadan hüküm vermek iki kat yanlış olurdu.
4. **H-0077/H-0078 (Van'ın yanındaki pembe toprak)** — ölçmedim, çünkü
   tahtadaki **M-0001** (13 Ağu 22:16) birebir bu soruyu RENK 3'e
   sormuş ve hâlâ *"TEYİT BEKLİYOR"*. Önce o cevap aranmalı.
5. **Yazım farkı elemesi**: H-0034'te yalnız düz `azemmur` arandı;
   `Âzemmûr` gibi bir yazımla kayıtlı olabilir (`§4`in Türkçe yazım
   ekseni tuzağı).

---

## 5 · TASNİFİN KENDİ DERSİ

Bu pakette **23 madde bayattı** ve hiçbiri "yanlış şikâyet" değildi —
hepsi yazıldığı gün DOĞRUYDU. Bayatlatan şey aradaki 1383 commit.

⇒ ***Bir şikâyet, şikâyet edilen şeyden daha hızlı bayatlıyor.***
Ve bunun ölçülebilir bir aleti var: görselin kronoloji panelindeki
`N / TOPLAM başlık` sayısı. **Bugün TOPLAM = 1223.** Daha küçükse
görsel bayat, madde ölçüme hiç girmemeli.

---

*Ölçen: PAKET 0019 TASNIF · 20 Ağustos 2026 · projeye hiçbir düzeltme
uygulanmadı.*
