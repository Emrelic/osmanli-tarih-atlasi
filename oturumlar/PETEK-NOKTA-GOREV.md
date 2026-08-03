# PETEK / NOKTA — on maddeyi TEK işle kapatan oturum

**Model: Opus.** Araştırma ve karar işi; hangi yerleşim gerçekten vardı,
adı o dönemde neydi — bunlar ölçüm ve kaynak gerektiriyor.

## 🔴 AÇILIŞ — yalnız bunlar

```
① bu dosya (baştan sona)
② CLAUDE.md  §2 petek motorunun bilinen zayıflığı · §4 kaynak kuralı
③ ONCELIK.md §2 altı bütçe kuralı
```
⚠️ **`/claudemre-basla` ÇALIŞTIRMA** — o koordinatör komutudur
(`ORGANIZASYON §17`). Senin açılışın bu dosyadır.

## 🔴 YAZMA YETKİN — TEK dosya

```
data/yerlesimler_kirim.js        ← YENİ, sen oluşturacaksın
```

Başka **hiçbir** dosyaya yazma. Özellikle mevcut `yerlesimler*.js`
dosyalarına dokunma — **motor şu anda koşuyor** ve onlar girdi.
📌 Yeni dosya kaçış yolu değil, kurulu desen: `yerlesimler_ek.js`,
`yerlesimler_avrupa.js`, `yerlesimler_asya.js` hepsi böyle doğdu. Sen
yazarsın, koşu biter, Oturum 0 dosyayı `arac/girdi.py`ye bağlar.

⚠️ Şemayı `VERI-YAPISI.md`den oku ve **birebir** uy. Dosya başına
`window.YERLESIMLER_KIRIM = [` ile başla.


## 🔴 DURUM DAMGASI — her oturum kendini bildirir

Koordinatör senin ne yaptığını **göremez**. Bu yüzden üç anda damga
vurursun; damgasız oturum kutuda "sessiz" görünür ve unutulur.

```
BAŞLARKEN   py <ClaudEmre>/kutu/ekip.py "<proje>" "<OTURUM ADI>" calisiyor "ne yapıyorum"
SORU VARSA  ...aynı komut... soru "cevap bekleyen soru"      🔴 kutuda KIRMIZI
BİTİNCE     ...aynı komut... hazir "teslim ettim, Oturum 0 alsın"
TIKANDIYSAN ...aynı komut... tikandi "engel ne"
```
`<ClaudEmre>` = `~/OneDrive/Desktop/ClaudEmre`
`<proje>`     = bu deponun kökü

📌 **`soru` hâli en önemlisi.** Sohbete soru yazmak yetmez — kullanıcı
mesaj kalabalığında görmeyebilir; kutudaki kırmızı satır görünür kalır.
⚠️ Kendi dosyandan başkasına yazma (`oturumlar/durum/<AD>.json`) —
dosya başına tek sahip kuralı burada da geçerli.

---

## PROBLEM — ölçüldü, tahmin değil

Kullanıcı on ayrı madde yazdı: *"kıymık gibi uzayan gösterim"*,
*"kopuk toprak parçası"*, *"tek noktadan birleşen koridor"*,
*"boğumlu yapı"*, *"şu saçma cetvelle bölünmüş Kırım"*.

**On ayrı hata değil — TEK motor özelliği.** `CLAUDE.md §2`: noktası
olmayan bölge en yakın yerleşimin peteğine katılıp **onun sahibiyle**
boyanır. Petek sınırları iki komşu noktanın **orta dikmesidir** — yani
düz çizgi. Nokta seyrekse çizgi uzar ve cetvel gibi görünür.

```
KIRIM          3 nokta ·  70.868 km²  →  nokta başına 23.623 km²
BATI ANADOLU  60 nokta · 129.265 km²  →  nokta başına  2.154 km²
                                          ⇒ Kırım 11 KAT SEYREK
```
Kırım'daki üç nokta: **Bahçesaray · Kefe · Kerç.** Yarımadayı üçe bölen
o düz çizgiler bu üç noktanın orta dikmeleridir.

🔴 Ve çareyi **kullanıcı söyledi**: *"gerekirse yerleşim yeri sayısını
araştırıp artıralım."* Doğru çare budur.

---

## GÖREV

### ① KIRIM — asıl iş

Kırım Hanlığı'nın gerçek yerleşimleri araştırılıp eklenecek. Aday liste
(**doğrula, körü körüne alma**):

```
Gözleve (Kezlev/Yevpatoriya)   Akmescit (Simferopol)
Karasubazar (Bilohirsk)        Or Kapı (Perekop)
Balaklava (Cembalo)            Sudak (Soldaya)
İnkirman (Kalamita)            Kefe zaten var
Azak (kuzeyde, ayrı bak)       Taman (ayrı bak — B16 açık kalemi)
```

Her nokta için **zorunlu**:
- `lat`/`lon` — kara maskesinin İÇİNDE olmalı (denetim `konum` bunu ölçer)
- `s:` / `d:` dönemleri — sahipsiz bırakma (`Değişmez 1`)
- kaynak — **TDV asıldır** (`kirim-hanligi`, `kefe`, `gozleve`, `sudak`,
  `mankup`…). Wikipedia **tek başına kaynak değildir**.
- `k:` idarî kademe (`VERI-YAPISI.md:32`) ve `m:` bağlı olduğu merkez

⚠️ **Ceneviz kıyı kolonileri ayrı sahiplik ister**: Kefe, Sudak,
Balaklava 1475'e kadar **Ceneviz**, 1475'te Osmanlı. Mankup ise
**Theodoro Prensliği** (Ceneviz değil) — karıştırma.
⚠️ Or Kapı bir kale/geçit; yerleşim sayılıp sayılmayacağına karar ver
ve **gerekçesini yaz**.

### ② SEYREKLİK HARİTASI — ikinci teslimat

Kırım tek örnek değil. Bir ölçüm betiği yaz (**`arac/` altına DEĞİL** —
çıktısını rapor olarak ver) ve şunu üret:

```
kutu içindeki kara alanını ızgaraya böl · her hücreye düşen nokta sayısı
→ EN AÇ 20 BÖLGE, alan ve nokta sayısıyla
```
Bu liste bir sonraki oturumun görev tanımı olacak. **Nokta ekleme,
listeyi çıkarmadan yapılmaz** — yoksa hangi bölgenin daha aç olduğunu
bilmeden rastgele doldurulur.

📌 Ölçüm için hazır: `arac/girdi.py` → `yukle()` bütün noktaları verir,
`veri-kaynak/motor_kara.geojson` kara maskesidir.

---

## KAPATTIĞIN MADDELER

Bitince şunları kapatmış olacaksın (`kutu/giden/` paketlerinden):

```
p3/H-0015  "şu Kırım Hanlığı'nı cetvelle bölünmüş yapıdan kurtaralım"
p3/H-0022  aynısı (tekrar)
p2/H-0019  "bu kıymık gibi uzayan gösterim"
p2/H-0020  "küçük bir toprak parçası kopuk duruyor"
p2/H-0001  Gemlik/Kios kopukluğu          ② seyreklik listesi söyleyecek
p2/H-0012  Biga yarımadası kuzeydoğusu    ② "
p2/H-0014  Saroz körfezi kuzeyi           ② "
p2/H-0018  Gümülcine koridoru             ② "
p3/H-0012  Bosna ucu enklavı              ② "
p3/H-0016  Dubrovnik + Saraybosna enklavı ② "
```
⚠️ ②'ye bağlı olanlar için **"petek artefaktı" demeden önce ölç**:
gerçekten veri hatası olabilir. Seyreklik listesi hangisinin hangisi
olduğunu ayırt ettirir.

## TESLİMAT

`oturumlar/PETEK-NOKTA-ILERLEME.md` dosyasına yaz:
- eklenen her nokta: ad · koordinat · kaynak (TDV maddesi adı) · dönemleri
- **eklemediğin** adaylar ve **niçin** (negatif sonuç da sonuçtur)
- seyreklik listesi: en aç 20 bölge

🔴 **Commit ve push YAPMA.** Bitince "hazır" de, Oturum 0 alır.
🔴 **`arac/uret_petek.py` ÇALIŞTIRMA.** Koşuyu yalnız Oturum 0 tetikler.
