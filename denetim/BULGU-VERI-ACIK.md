# BULGU — VERİ AÇIK

> Görev: 284 açık maddenin VERİ türü (91) alt kümesinden, nokta/dönem/
> tarih/kaynak isteyenleri kapatmak. Yamam: `data/yer_yama_acik.js`
> (`window.YER_YAMA_ACIK`). Var olan `data/yerlesimler*.js`, `arac/*.py`
> dosyalarına dokunulmadı.

## ⚠️ KİLİT DURUMU — okunmadan uygulanmasın

Koşu bugün 13:23'te başladı, ~17:00'de bitecek; girdi anlık görüntüsü
alınmış durumda. **Bu yamadaki hiçbir düzeltme BU koşuya girmez, bir
SONRAKİ koşuya girer.** Uygulanıp koşuya sokulmadan "yapıldı ama haritada
yok" diye ikinci kez aranmasın.

## Kapsam ve yöntem

91 maddenin kesin H-ID listesi elimde yoktu (koordinatör dört türün
sayısını verdi, ID listesini vermedi). 5 `HUKUM-*.json` dosyasını
(0031-0032, 0033-0034, 0035, 0036, BAYAT) taradım — toplam **276 açık
madde** (`sirada`+`olculecek`), kaba anahtar-kelime sınıflandırmasıyla
**~129'u VERİ** görünüyor (kesin 91 sayısını tutturamadım, kovaları farklı
tanımlamış olabiliriz — bu bir eksiklik olarak bildiriliyor, gizlenmiyor).

Zamanı en yüksek getiriye harcamak için önceliği şuna verdim: **zaten
tam TDV kaynaklı araştırılmış ama hiç uygulanmamış** kalemler. Bulundu:
`denetim/TDV-TARIH.md` (10 Ağustos 2026, TDV TARİH TURU oturumu) 12 soru
araştırmış, 9'unu 🟢 NET diye işaretlemiş, ve **hiçbiri 17 gündür
uygulanmadı.** Bugün node ile tek tek sorguladım — hepsi hâlâ eski
(yanlış) hâlleriyle duruyor. Bunları yamaya çevirmek sıfır yeni araştırma
gerektiriyor; en ucuz kazanç buydu.

## Yazılan yama — 9 kalem, ~20 yerleşim kaydı

`data/yer_yama_acik.js` içinde, hepsi ad-eşleştirmeli (yeni koordinat yok):

| no | konu | tür | kapsadığı kayıt |
|---|---|---|---|
| TDV-K1 | Erzincan: 42 yıl erken Osmanlı + eksik Karakoyunlu | veri | 1 |
| TDV-K2 | Konya/Aksaray/Niğde: 1335 Eretna kırılması eksik + Niğde'de 5 yıllık Osmanlı eksik | veri | 3 |
| TDV-K3 | Sivrihisar: sahip Germiyan değil Karaman (27+13 yıl) | veri | 1 |
| TDV-K4 | Çankırı: 38 yıl erken Osmanlı | veri | 1 |
| TDV-K10 | Eflak (11 şehir): tâbiiyet 45 yıl geç, 1462 rejim değişimi tâbiiyet başlangıcı sanılmış | veri | 11 |
| TDV-K11b | Malatya: 34 yıl erken Memlük + 114 yıl yanlış sahip (Dulkadır olmalı) + 27 gün yanlış fetih günü | veri | 1 |
| TDV-K11a | Divriği: memluk 110 yıl erken (bitiş doğru, başlangıç öncesi araştırılmadı) | **olculecek** | 1 |
| H-0008/0011 | Urfa: 1832 Mısır işgali TDV ile çelişiyor (TDV: 1839) | **olculecek** | 1 |
| H-0011 | Maraş: Mısır işgal süresi ~7 yıl fazla, başlangıcı da yanlış | **olculecek** | 1 |

**Toplam: 6 kalem tam patch-hazır (cozuldu-oneri, ~19 yerleşim kaydı),
3 kalem olculecek (netleştirilecek nokta belirtilerek).**

## 🔴 EN DEĞERLİ BULGU — iki dosya sadece YANLIŞ İSİMLİ, içerik zaten hazır

Kilit notundaki "tuzak" uyarısını okuyunca kontrol ettim ve **birebir aynı
tuzağa düşmüş iki dosya buldum:**

```
data/yerlesimler_kafkas_duzeltme.js   509 satır · içerik zaten {ad, kaynak,
                                       neden} formatında YAMA (kendi başlığı
                                       "Bu bir YAMA dosyasıdır" diyor) ·
                                       34 şehir (Kars/Ardahan/Derbend/
                                       Kutaisi/Gence/Revan/Hemedan/
                                       Kırmanşah/Van hattı) · 6 GÜNDÜR
                                       girdi.py ValueError attığı için
                                       BAĞLANAMIYOR

data/yerlesimler_ek_korfez.js         54 satır · aynı desen · Manama/
                                       Bahreyn ekleyici-kapı düzeltmesi
                                       (H-0007+H-0021/parti-emrelic-0021)
```

**Bu dosyalara ben dokunamam** (var olan `yerlesimler*.js` bana kapalı) ama
düzeltme trivial: **adlarını `yer_yama_kafkas.js` / `yer_yama_korfez.js`
olarak değiştirip `girdi.py`'nin doğru yükleme dalına (yeni nokta değil,
yama dalına) taşımak.** İçerikleri zaten araştırılmış ve doğru biçimde
yazılmış — bu tek işlem, benim 9 kalemimin üstüne **34+ ek yerleşim
kaydını** hiçbir yeni araştırma yapmadan kurtarır. `arac/*.py` kilitli
olduğu için bunu yalnız sen ya da Oturum 0 yapabilir.

## Kapsanmayan (91'e ulaşmak için kalan iş)

Kendi önceki iki turumdan (BAYAT AVCISI + parti-emrelic-0036) zaten
diagnoze ettiğim ama TAM tarih/kaynak netliği olmadığı için bu yamaya
KOYMADIĞIM kalemler (gerçek araştırma gerekiyor, uydurmadım):
- Bağdat: celayirli 1335-1411 kesintisiz, Timur'un 1393/1401 seferleri yok (BULGU-BAYAT-TARAMA.md grup-A)
- Musul/Rewândiz/Akra/Duhok/Zaho/Telafer/Sincar: hepsi Mercidabık gününe (1516-08-24) toplu yazılmış, 646 km fazlalık (grup-F2/H-0043)
- Mersin: Ramazanoğulları/Karaman dönemi hiç yok (grup-F1/H-0008)
- Manisa/Saruhan + Karesi: Ankara Savaşı sonrası neredeyse hiç diriltilmemiş (grup-F1/H-0001)
- Dörtyol/Erzin/Yumurtalık/Antep/Elbistan/Behisni: Mısır dönemi v: tamamen boş (BULGU-PAKET-0036.md)
- Uyvar/Nitra: 1526 öncesi macaristan dönemi hâlâ eksik (birden çok pakette tekrarlanan kalem)
- prusya/kurlandiya/livonya: devletler.js künyesi hiç yok (renkler.py de gerekiyor — MOTOR sınırına yakın, sana bırakıyorum)

Bunların hepsi zaten `denetim/BULGU-BAYAT-TARAMA.md` ve
`denetim/BULGU-PAKET-0036.md`'de gerekçeli olarak duruyor; bir sonraki
VERİ turu doğrudan oradan devam edebilir.

## Sayıyla teslim

```
tam patch (cozuldu-oneri):   6 kalem · ~19 yerleşim kaydı
olculecek (netleştirilecek):  3 kalem · 3 yerleşim
kapsanmayan ama teşhisli:     7+ kalem (yukarıda listeli, başka BULGU dosyalarında)
en ucuz ek kazanç:            2 dosya YANLIŞ İSİMLİ, rename yeterli (~34 kayıt)
```

Bekçim açık, sıradaki işi bekliyorum.
