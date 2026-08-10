# ⚪ VERİ SORGUSUYLA KAPANAN KALEMLER

> **Yazan:** İÇERİK oturumu · 10 Ağustos 2026
> **Kapsam:** `DOCX-TESLIM.md §②`nin *"veri ölçümü yeter"* kümesi
> **Sınır:** 🔴 **TDV'ye GİRİLMEDİ.** Veri sorgusuyla kapanmayan kalem
> `TDV gerekli` kovasına ayrıldı, zorlanmadı.

**Alet:** `kirilma.js` — *"bu günde kaç yerleşim el değiştiriyor"*.
**Taban:** 36 girdi dosyası · **2308 nokta** (`§1.5` ile birebir).

---

## ⓪ SAYIYLA

```
ölçülen kalem                21
├─ 🟢 KAPANDI (harita DEĞİŞİYOR, veri doğru)      9
├─ 🟡 TEMA ①'e TAŞINDI (kırılmasız ama DOĞRU)     6
├─ 🔴 YENİ GERÇEK EKSİK (kronolojide 0 madde)     4
└─ ⚪ ölçülmedi (ayrı sorgu ister)                 2
```

⚠️ **Ve bir uyarı, koordinatörün isteğiyle:** ilk üç örnek (`Solnok · Azak ·
Lahsa`) `zaten-doğru` çıkmıştı; **dördüncüsünü varsaymadım.** İyi ki de —
altısı `kırılmasız` çıktı ve **dördü gerçek eksik.**

---

## ① 🟢 KAPANDI — harita değişiyor, şikâyet artık geçerli değil

| kalem | Emre'nin sözü | ölçüm |
|---|---|---|
| `h2 #1` | *"Taman yarımadasının alınışında haritada hiçbir değişiklik olmuyor"* | `1482-06-01` → **2 kırılma** · Taman `ceneviz` → **OSMANLI** |
| `h2 #3` | *"Sapienza ve İnebahtı'nın fethinde gösterim olmuyor gibi"* | `1499-08-26` → **2 kırılma** · İnebahtı `venedik` → **OSMANLI** |
| `h9 #3` | *"Özi Kalesi'nin Ruslara düşüşünde haritada aksiyon olmuyor"* | `1737-07-13` → **2 kırılma** · Özi OSMANLI → `rusya` |
| `h9 #6` | *"Özi'nin geri alınması ve Kırım'ın kurtarılmasının gösterimi yok"* | `1738-08-01` → **4 kırılma** · Özi **ve** Semendire geri alınıyor |
| `h10 #25` | *"Kırım'ın Rusya'ya ilhakı haritada görülmüyor"* | `1783-04-19` → **34 KIRILMA** · Kefe · Bahçesaray · Gözleve · Kuban · Deşt-i Kıpçak… |
| `h13 #5` | *"Karaman'ın ilk ilhakında toprakların hepsi geçiyor mu, bir kısmı geride kalıyor gibi"* | `1397-07-01` → **8 kırılma**: Konya · Karaman · Ermenek · Aksaray. 🟢 **Sorusunun cevabı da bu:** *hepsi geçmiyor*, gerisi `1468` kesin ilhaka kadar `karaman` kalıyor — **iki maddeli olması doğru** |
| `h7 #2` | *"Parkan bozgunu ve Estergon'un kaybı haritada görünmüyor"* | `1683-10-09` → **2 kırılma** · Estergon OSMANLI → `avusturya` |
| `h9 #14`·`h16 #4` | *"Basra'nın İran işgali normal mi, verilen toprak bu kadar küçük olabilir mi"* | `1776-04-16` → **2 kırılma** · Basra OSMANLI → `zend`. 🔴 **Emre haklı bir şey görmüş: işgal TEK NOKTAYLA modellenmiş** — "bu kadarcık" gözlemi veriyle örtüşüyor. Genişletilmesi **TDV kalemi**, ölçüm değil |
| `h6 #3` | *"Bozcaada'nın geri alınmasında Limni geri alındı mı, karşıda mı kaldı"* | `1656-07-13` → Semadirek **ve** Bozcaada kaybı · `1657-08-25` → **yalnız Bozcaada** geri alınıyor. 🟢 **Cevap: Limni bu kırılmalarda HİÇ GEÇMİYOR** — ⚠️ Limni'nin ayrı bir noktası olup olmadığı **ölçülmedi** |

📌 **Ortak sebep:** dokuzunun sekizi **bir ya da iki noktalık** değişim. Geniş
ölçekte tek peteğin rengi değişince göz almıyor. ⇒ Kusur veride değil
**görünürlükte** — ve `h10#25` bunu çürütüyor: **34 nokta** değişiyor ve Emre
yine *"görülmüyor"* demiş. ⇒ Demek ki sorun ölçek değil, **değişimin
vurgulanmaması** (tema ①).

---

## ② 🟡 TEMA ①'E TAŞINDI — kırılmasız, ama **doğru** kırılmasız

Bunlar *"haritada görünmüyor"* diye bildirilmiş ama **haritada görünecek bir şey
yok** — hiçbiri toprak el değiştirmiyor:

| kalem | olay | kırılma | niçin doğru |
|---|---|---|---|
| `h2 #3b` | Sapienza (Zonchio) Deniz Zaferi `1499-08-28` | **0** | **deniz muharebesi** — kara el değiştirmiyor |
| `h9 #5` | Banaluka Zaferi `1737-08-04` | **0** | **savunma zaferi** — işgal püskürtüldü, sınır aynı |
| `h9 #7` | Hisarcık (Grocka) Zaferi `1739-07-22` | **0** | meydan muharebesi; toprak `1739-09-18` Belgrad Antlaşması'yla dönüyor |
| `h9 #11` | Kozluca Bozgunu `1774-06-20` | **0** | yenilgi; toprak `1774-07-21` Küçük Kaynarca'yla gidiyor |
| `h5 #2` | Karayazıcı Abdülhalim ayaklanması `1599-06-01` | **0** | **iç isyan** — devlet sınırı değişmiyor |
| `h16 #7` | Akkâ Savunması `1799-05-20` | **0** | Napolyon püskürtüldü — **başarılı savunma toprak değiştirmez** |

🔴 **Bu altısı `Değişmez 2t`nin ("kırılmasız madde", tavan 42) borcu DEĞİL —
tasarımın kendisi.** Bir savunma zaferinin haritayı değiştirmemesi **doğru**.
⇒ Emre'nin istediği şey veri değil **işaret**: savaşın yeri, oku, sonucu.
**Tema ① (ok ile gösterim) + `K9`** (*"kazanılan kaybedilen savaşların hepsi
haritada gösterilmeli"*) tam olarak bunu karşılıyor.
📌 ⇒ **Altı kalem 🔴'dan 🟡'ye taşındı** ve tema ①'in vaka sayısı **18 → 24.**

---

## ③ 🔴 YENİ GERÇEK EKSİK — kronolojide **0 madde**

| kalem | Emre'nin sözü | ölçüm |
|---|---|---|
| `h13 #13` | *"1479 Arnavutluk ve İşkodra ile birlikte İyonya adaları da ele geçiriliyor galiba, madde olarak yazmalısın"* | **`İyonya` → 0 madde** |
| `h13 #14` | *"Zakintos Venedik'e bırakılırken Karadağ'da ele geçiriliyor galiba ama kronolojide zikredilmiyor"* | **`Zakintos` → 0 madde** |
| `h12 #7` | *"Bursa'nın, Edirne'nin, İstanbul'un başkent oluşu kronolojik maddeleri mevcut mu, yoksa ekleyelim"* | **başkent oluşuna dair madde YOK** (3 `başkent` maddesi var, üçü de alâkasız: Budin'in kaybı · Avrupa elçilikleri · Muaskar) |
| `h13 #4` | *"Timur Bağdat'ı ele geçiriyor ama haritada gösterimi yok"* | Bağdat'ın 7 maddesi arasında **Timur yok** (`1411` Karakoyunlu, `1508` Safevî…) |

⚠️ Dördü de **kronoloji kalemi**, veri değil. `h12 #7` özellikle dikkate değer:
**başkent değişimi bu atlasın omurgası** (Söğüt → Bursa → Edirne → İstanbul) ve
kronolojide maddesi yok — üstelik `parti-0002/H-0011`de Emre *"başkent yıldızla
gösterilsin"* diye ayrıca istemişti.

---

## ④ ⚪ ÖLÇÜLMEDİ — ayrı sorgu ister

```
h10 #7   "Azak Kalesi'nin kaybıyla Azak denizinin DOĞU YAKASINDAN büyük bir
          toprak parçası gitmiş görünüyor — doğu yakası da elden çıktı mı"
          → kutu sorgusu gerekiyor (kırılma sorgusu yetmez)
h16 #9   "Sohum Ruslara kaybedildi ama Anapa hâlâ elimizde duruyor mu"
          → iki noktanın dönem karşılaştırması; Sohum ölçüldü (d: →1810-07-01),
            Anapa ÖLÇÜLMEDİ
```

---

## ⑤ SONUÇ — kova hareketi

```
ÖNCE   ⚪ "veri sorgusu yeter"  ~20-21 kalem
SONRA  🟢 kapandı                 9
       🟡 tema ①'e taşındı        6      ← tema ① 18 → 24 vaka
       🔴 yeni kronoloji eksiği   4      ← DOCX-TESLIM §①A: 5 → 9 kalem
       ⚪ kaldı                    2
```

🔴 **Ve beklenmeyen sonuç bu:** küme *"muhtemelen hepsi zaten-doğru çıkar"*
diye açılmıştı. **Çıkmadı** — dokuzu kapandı, ama **dördü yeni gerçek eksik**
ve altısı **yanlış kovadaydı.**
📌 Koordinatörün uyarısı (*"üçü zaten-doğru çıktı diye dördüncüsünü varsayma"*)
**ölçümle doğrulandı**: varsaysaydım dört eksik madde ve altı yanlış sınıflandırma
devredilecekti.
