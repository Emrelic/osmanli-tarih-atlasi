# 🏔 COĞRAFYA KATMANI — ölçülmüş kapsam, askerî çerçeve, öncelik planı

> 7 Ağustos 2026 · Emre'nin talebi: *"tüm coğrafî yapıları… tüm dünya için
> parça parça kıta kıta bölge bölge ele alalım ve şu anda hangi kapsamda
> olduğumuzu tespit edelim"*
> Bütün sayılar bugün `veri-kaynak/` dosyalarından **sayılarak** çıkarıldı.

---

## 1. BUGÜNKÜ KAPSAM — ölçüldü

| katman | dünyada | **penceremizde** | motor kullanıyor | keskinlik |
|---|---|---|---|---|
| **Dağ sırtı** (`Range/mtn`) | 222 | **127** | **126** | 🟢 **%99** |
| **Çöl** (`Desert`) | 58 | **38** | **38** | 🟢 **%100** |
| **Kara / kıyı** | — | — | tam maske | 🟢 **%100** |
| **Göl** | 1355 | 645 | **305** (boyut süzgeci) | 🟡 kasıtlı |
| 🔴 **Nehir** | 1455 parça · 1073 ad | **780 parça · 593 ad** | **43 parça · 31 ad** | 🔴 **%5** |
| **Plato / yayla** (`Plateau`) | 72 | **34** | **0** | 🔴 %0 |
| **Boğaz-geçit** (`Gorge`) | 3 | 2 | 0 | 🔴 %0 |
| **Bataklık** (`Wetlands`) | 3 | 1 | 0 | 🔴 %0 |
| **Tundra** | 4 | 1 | 0 | 🔴 %0 |
| **Bozkır / geoarea** | 43 | 23 | 0 | 🔴 %0 |
| **Ova** (`Plain`) | 30 | 16 | 0 | ⚪ **doğru** — ova engel değil |
| **Ada / takımada** | 455 | 174 | kara maskesinde | 🟢 dolaylı tam |
| **Orman** | — | **VERİ YOK** | — | ⚫ kaynak yok |

### 🔴 Tek büyük eksik NEHİR — ve sebebi pencere DEĞİL, BEYAZ LİSTE

`uret_petek.py` nehirleri **isimden** süzüyor: bir parçanın adı `BUYUK_SADE`
kümesinde yoksa **atlanıyor**. Küme 31 ad taşıyor ve tamamı Osmanlı kuşağı
(Fırat · Dicle · Tuna · Sakarya · Kızılırmak · Nil · Don · Kuban…).

⇒ **Pencerede 593 adlı nehir var, motor 31'ini kullanıyor.**
Batı Avrupa (Ren · Rhône · Loire · Po · Elbe · Vistül · Oder), Asya
(İndus · Ganj · Amuderya · Siriderya · Yangtze), Sahra altı (Nijer · Kongo)
— hiçbiri yok. **Veri duruyor, süzgeç geçirmiyor.**

### Çözüm ölçüldü: `scalerank` süzgeci

Natural Earth her nehir parçasına **önem derecesi** veriyor. Pencerede:
```
scalerank ≤ 1   →   21 parça          ≤ 5   →  157 parça
scalerank ≤ 2   →   46               ≤ 6   →  267
scalerank ≤ 3   →   77               ≤ 7   →  447
scalerank ≤ 4   →  124               ≤ 9   →  780  (hepsi)
```
**Öneri: `scalerank ≤ 5` → 157 parça** (bugün 43). Yaklaşık **3,6 kat**, ve
hâlâ *"büyük nehir"* sınıfı — dereye yaslanma riski yok.

📌 **Ve bu bir VERİ TOPLAMA işi değil, SÜZGEÇ işi.** Beyaz liste yerine
`scalerank` eşiği konur; **bir avuç satır + bir üretim koşusu.** Dünyanın
tamamı için ayrı ayrı araştırma gerekmiyor — pencere neredeyse hepsini
zaten içeriyor.

---

## 2. ASKERÎ COĞRAFYA — literatürdeki liste

Emre sordu: *"askerî açıdan hangi meseleler dert oluyor, literatürde bir
listesi var mı?"* **Var, ve standarttır.**

### ⭐ OCOKA / OAKOC — NATO ve ABD ordusu doktrininin arazi analizi listesi

Beş başlık; her arazi değerlendirmesi bu beşten geçer:
```
O  Observation & fields of fire   gözetleme ve ateş sahaları
A  Avenues of approach            yaklaşma istikametleri  ← BİZİM İŞİMİZ
K  Key terrain                    hâkim/kilit arazi       ← BİZİM İŞİMİZ
O  Obstacles                      engeller                ← BİZİM İŞİMİZ
C  Cover & concealment            örtü ve gizlenme
```
⇒ **Beşinin üçü doğrudan bizim katmanımız.** Gözetleme ve örtü **muharebe
ölçeğinde** anlamlı; biz sınır çiziyoruz, muharebe çizmiyoruz.

### Engel sınıflandırması — doktrinin kendi ayrımı
```
MEVCUT (existing)      doğal ya da hâlihazırda orada olan   ← bizim katmanımız
TAKVİYE (reinforcing)  kazılan/döşenen (hendek, mayın, tahkimat)
```
ve arazinin geçirgenliği üç kademe:
```
UNRESTRICTED           serbest manevra          ova · bozkır
RESTRICTED             yavaşlatır, kanalize eder  orman · bataklık · yayla
SEVERELY RESTRICTED    ancak istihkâmla geçilir   sıradağ · geniş nehir · çöl
```

### Klasik literatür — kavramın kaynakları
| yazar | eser | bize bakan yüzü |
|---|---|---|
| **Clausewitz** | *Vom Kriege*, V. Kitap ("Arazi ve Zemin") | arazinin üç etkisi: **yürüyüşe engel** · görüşe engel · ateşe siper |
| **Jomini** | *Précis de l'art de la guerre* | **doğal sınır** (frontière naturelle) · harekât hatları · **kilit nokta** |
| **Mahan** | *The Influence of Sea Power upon History* | **deniz dar boğazları** — Çanakkale · İstanbul · Cebelitarık · Hürmüz · Bâbülmendeb |
| **Mackinder** | *The Geographical Pivot of History* | **Kalpgâh (Heartland)** — bozkır koridoru ve çevre kuşağı |
| **Ratzel / Kjellén** | siyasî coğrafya | devletin **doğal sınırlara** yaslanma eğilimi |

### 📌 Ve bu liste bizim veri modelimizle birebir örtüşüyor

| doktrindeki engel | bizdeki karşılığı | durum |
|---|---|---|
| sıradağ (severely restricted) | `Range/mtn` | 🟢 %99 |
| geniş nehir (severely restricted) | `ne_10m_rivers` | 🔴 %5 |
| çöl (severely restricted) | `Desert` | 🟢 %100 |
| deniz / kıyı | kara maskesi | 🟢 %100 |
| **dar boğaz (chokepoint)** | `Gorge` + boğazlar | 🔴 %0 — **ayrı liste gerekir** |
| bataklık (restricted) | `Wetlands` | 🔴 %0 |
| yayla/plato (restricted) | `Plateau` | 🔴 %0 |
| orman (restricted) | — | ⚫ **Natural Earth'te yok** |
| bozkır (unrestricted — engel DEĞİL, KORİDOR) | `Geoarea` | 🔴 %0 |

⚠️ **Bozkır ters işaretlidir ve bu proje için önemlidir:** bozkır engel
değil **otoyoldur**. Deşt-i Kıpçak, Kırım akınlarının ve Moğol ilerleyişinin
sebebi tam olarak budur — sınır orada **durmaz**, o yüzden Karadeniz'in
kuzeyinde devlet sınırları yüzyıllarca oynak kalmıştır. Motor bugün bozkırı
hiç bilmiyor; bilseydi oradaki sınırları **daha az** doğal hatta yaslardı.

⚫ **Orman verisi yok** ve bu gerçek bir boşluk: Ardennes · Teutoburg ·
Karpat ormanları · Rus ormanı (Zaseçnaya çerta) askerî tarihte birinci
sınıf engellerdir. Natural Earth'te ayrı katman olarak bulunmuyor;
gerekirse ayrı bir kaynak (ör. ESA/Copernicus arazi örtüsü) araştırılır —
**ama bu ayrı ve büyük bir iştir.**

---

## 3. ÖNCELİK PLANI — Emre'nin keskinlik sınıflarıyla

> *"4. sınıf (%91,25) hep birden biterse çok güzel · belli kısımlar 3. sınıf
> (%82,5) da olur · önemi çok uzaksa en kötü 2. sınıf (%75)"*

### 🟢 KADEME 1 — UCUZ VE HEPSİNİ BİRDEN BİTİRİR (öneri: hemen)
```
① NEHİR SÜZGECİ    beyaz liste → scalerank ≤ 5
                   43 → 157 parça · pencerenin TAMAMI için, halka halka DEĞİL
                   maliyet: bir avuç satır + bir üretim koşusu
                   ⇒ nehir keskinliği %5 → 4. SINIF üstü
② PLATO EKLE       `Plateau` sırt kümesine katılır (34 poligon)
③ BOĞAZ + BATAKLIK `Gorge` (2) + `Wetlands` (1) aynı kümeye
                   maliyet: ①'in içinde, ayrı koşu gerektirmez
```
**Niçin halka halka değil:** ①-③ **süzgeç değişikliği**, veri toplama değil.
Osmanlı çemberi için ayrı, Avrupa için ayrı yapmanın anlamı yok — aynı satır
hepsini birden açıyor. `ONCELIK.md`nin halka sırası **veri toplanan** işler
içindir; bu iş o sınıfa girmiyor.

### 🟡 KADEME 2 — ölçülür, sonra karar (öneri: tespihe, acil değil)
```
④ BOZKIR KORİDORU  `Geoarea` (23 poligon) — TERS işaretli katman.
                   Motorun "yaslanma"sını AZALTMASI gerekir, artırması değil.
                   ⚠️ Yeni mantık ister, süzgeç değişikliği DEĞİL.
⑤ DAR BOĞAZ LİSTESİ İstanbul · Çanakkale · Cebelitarık · Hürmüz · Bâbülmendeb ·
                   Kerç · Öresund · Malakka — Natural Earth'te yok, ELLE yazılır.
                   Küçük liste (~15 kalem), yüksek anlam.
```

### ⚪ KADEME 3 — büyük iş, ertelenir
```
⑥ ORMAN KATMANI    kaynak YOK, ayrı veri seti araştırması gerekir
⑦ PENCERE DIŞI     Amerika · Sahra altı · Doğu Asya (146°D ötesi)
                   ⚠️ `CLAUDE.md §6`: nokta yoğunluğu sağlanmadan pencere
                   AÇILMAZ. Yani bu, coğrafya işi değil YERLEŞİM işi.
```

---

## 4. KARARIM

**Kademe 1 yapılır ve tek seferde bütün pencereyi kapsar** — çünkü maliyeti
bir süzgeç satırı ve zaten koşacak bir üretim. Emre'nin *"çok maliyet
olmayacaksa tüm dünyayı yapıp bitirip bu işi arkamızda bırakalım"* şartı
**sağlanıyor**: dağ ve çöl zaten bitmiş, nehir tek satırla bitiyor.

**Kademe 2 tespihe girer**, kademe 3 `YOL-HARITASI`na.

📌 Ve şunu ölçüm gösterdi: bu iş **sanıldığından çok daha ileride.** *"Katman
bitti mi"* sorusunun cevabı — dağ **%99**, çöl **%100**, kıyı **%100**,
göl kasıtlı süzgeçli. Geride kalan tek büyük kalem nehirdi ve onun sebebi de
eksik veri değil, **31 adlık bir beyaz liste.**
