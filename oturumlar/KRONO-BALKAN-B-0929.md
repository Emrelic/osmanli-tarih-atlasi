# KRONO-BALKAN-B-0929 — şartname (Batı Balkanlar)

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus

## Kapsam — dört ülke, üçünün kronolojisi HİÇ YOK

| Ülke | Bugün | Ölçüm (29 Eylül 2026) |
|---|---|---|
| **Bosna-Hersek** | 🔴 dosya YOK | metinlerde 219 anılma · künyede 16 eşleşme |
| **Karadağ** | 🔴 dosya YOK | 157 anılma · 6 künye eşleşmesi |
| **Arnavutluk** | 🔴 dosya YOK | 70 anılma · 15 künye eşleşmesi |
| **Sırbistan** | 🟡 35 madde | 364 anılma · 37 künye — **en zayıf mevcut dosya** |

Emre: *"Osmanlıya bağlı olan … sırbistan arnavutluk bosna-hersek karadağ …
kronolojilerini de ayrıca ele alalım ve doldurulalım."*

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Global adı | Durum |
|---|---|---|
| `data/kronoloji_bosna.js` | `window.KRONOLOJI_BOSNA` | YENİ — sen doğuracaksın |
| `data/kronoloji_karadag.js` | `window.KRONOLOJI_KARADAG` | YENİ |
| `data/kronoloji_arnavut.js` | `window.KRONOLOJI_ARNAVUT` | YENİ |
| `data/kronoloji_sirbistan.js` | `window.KRONOLOJI_SIRBISTAN` | **SENİN** — genişlet |
| `denetim/KRONO-BALKAN-B-0929.md` | — | raporun |
| `denetim/KRONO-BALKAN-B-0929-YERLESIM-ONERI.md` | — | `s:` önerileri |
| `denetim/KRONO-BALKAN-B-0929-DUZELTME.md` | — | mevcut maddelerdeki kusurlar |

`index.html`e bağlamak koordinatörde — sen ekleme, teslimde söyle.

## 🔴 MÜKERRER TUZAĞI — bu dosyalar senin coğrafyanı ZATEN kapsıyor

Yazmaya başlamadan bunları tara, yoksa var olan maddeyi ikinci kez yazarsın:

```
data/kronoloji_balkan.js       177 madde  ← EN KRİTİK, bölgesel torba
data/kronoloji_sirbistan.js     35 madde  ← senin dosyan
data/kronoloji_bizans.js        97 madde  ← 1453 öncesi
data/kronoloji_atina_dukaligi.js 25 · kronoloji_venedik.js 86 ← Adriyatik kıyısı
data/olaylar*.js              1736 madde  ← Osmanlı çekirdeği, fetihler BURADA
```

🔴 **Ölçülmüş vaka — tam senin dosyanda:** "Sırbistan özerklik fermanı" veride
**üç ayrı günde** duruyor ve iki kronoloji maddesi birbiriyle çelişiyor:
```
savaslar.js            1830-08-30
kronoloji_sirbistan.js 1830-10-17  "Özerklik fermanı (Hatt-ı Şerif) yayımlandı"
olaylar_ek.js          1830-11-08  "irsî knezlik ve garnizon şartı"
```
**Bu senin ilk işlerinden biri olsun:** TDV'de `sirbistan` maddesini aç, hangi
günün doğru olduğunu söyle. Ötekileri **silme** — `-DUZELTME.md`ye yaz.
(Bir ek okuma kartı bu yüzden bağsız duruyor; kaynaklı cevap onu da kurtarır.)

## Sana özel — dört uyarı

**① Bosna'nın iki katmanı ayrı.** Bosna Krallığı (1377-1463) ile Osmanlı Bosna
eyaleti/vilâyeti ayrı şeylerdir; 1463 fethi çekirdekte olabilir — tara. 1878
Berlin ile Avusturya işgali, 1908 ilhak: `kapsam:"dis"`, ve bunlar Habsburg
paketiyle de kesişir (yatay mesaj serbest).

**② Karadağ'ın süreklilik sorusu.** Cetinje vladikalığı → knezlik → krallık
zinciri kesintili mi sürekli mi? 🔴 `D205` **üç sınıf**: künye ömrünü kısaltmak
mı, genişletmek mi, ardıl künye mi? **İlk iş SINIFLANDIRMA.** Künyeye dokunma,
`denetim/KUNYE-DUNYA-0929.json`u (kardeş paket) bekle ya da ölçüp öner.

**③ Arnavutluk'un 70 anılması en düşüğü.** İskender Bey (1443-1468) ve 1912
bağımsızlığı dışında neredeyse hiç yok. Arnavut coğrafyası Osmanlı'da
İşkodra/Yanya/Manastır sancaklarına dağılmıştır — **ülke adıyla arayıp
"kaynak yok" deme**, yerle ve kişiyle ara (`CLAUDE.md §4`, TDV yer-kişi
ansiklopedisidir).

**④ Sırbistan 35 madde ile mevcut dosyaların en zayıfı.** Ama 364 anılma var —
yani olaylar BAŞKA dosyalarda yazılı. Yeni madde yazmadan önce **o 364'ü tara**;
işin bir kısmı yazmak değil, **var olanı senin dosyana taşımayı önermek** olabilir
(taşıma kararı koordinatörün; sen öner).

## Sıra ve denetim

`ORTAK.md §6`daki altı adım. Yazdıktan sonra mutlaka:
```bash
node --check data/kronoloji_bosna.js     # her yeni dosya için
py arac/denetle.py                       # SONUÇ temiz olmalı
py arac/odak_olc.py                      # yeni kırık atıf 0
```
🔴 `yer_id` uydurma — çözülmeyen `yer_id` yayın kapısını kilitler (0 tolerans).

## Teslim
Tek tahta mesajı, üçlü kural + dosya listesi + commit. Sonuna: **"bekçimi öldüreyim mi?"**
