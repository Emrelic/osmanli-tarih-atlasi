# KORİDOR ŞEMA — ilerleme

**13 Ağustos 2026 · KORİDOR TASARIM'ın devamı** (araştırma bitti, yapım başladı)

---

## ⓪ AÇILIŞTA İKİ AKSAKLIK — ikisi de başka oturumları vurabilir

### ① Şartnamedeki `session_id` ÖLÜ
```
KORIDOR-SEMA.md §⑤   local_2ad1685f-dd0a-4c8c-8b9d-a89c216d56e6
denendi              → "Session not found."
çalışan adres        local_17712720-a5a0-4315-8986-48c222eeeadf ("KOORDİNATÖR")
```
⚠️ Aynı kimlik başka şartnamelere kopyalanmışsa **o oturumların raporları
hiçbir yere gitmiyor.** `send_message` hata döndürmeseydi kimse fark
etmezdi. Koordinatöre bildirildi.

### ② Dokuz saat kaybettim — kusur BENDE
```
00:08  raporu commit ettim (c631c31)
00:31  koordinatör CEVAP VERDİ — oturumlar/KORIDOR-SEMA.md yazdı
00:31 → 09:5x   OKUMADIM. Eski brifingden çalışmaya devam ettim.
```
📌 Ders genel: bir işçi oturum **yeni şartname dosyasını yoklamıyor**,
mesaj bekliyor. `§7.1` kanal kuralı **işçi→koordinatör** yönünü tarif
ediyor, **ters yönü tarif etmiyor.** ⇒ *"Dosya yazmak teslim değildir"*
(`§7.1 ⑤`) kuralının **koordinatör tarafı** yazılı değil.

### 🔴 Ve şartnamedeki bir teşhis yanlış — düzeltiyorum
`KORIDOR-SEMA.md §⑤`: *"Tur 1'de raporu dosyaya yazdın, mesaj atmadın."*
**Mesaj attım — dört kez** (tur 1 · EK · EK-2 · EK-3). Kusur *"mesaj
atmamak"* değildi, muhtemelen **adres ikiliği.**
📌 Düzeltmemin sebebi savunma değil: **yanlış teşhis kayda geçerse yanlış
çare uygulanır** (`§11`, `merini` vakası).

---

## ① İŞ 1 — 62 DURAK VERİDE ARANDI

**Kaynak:** İzzet Sak – Cemal Çetin, *"XVII. ve XVIII. Yüzyıllarda Osmanlı
Devleti'nde Menziller ve Fonksiyonları: Akşehir Menzilleri Örneği"*,
DergiPark `article-file/258113`, gövdesi okundu (`pypdf`).
Arşiv dayanağı: Konya Şer'iye Sicili · Mühimme defterleri.

**Yöntem:** `girdi.yukle()` — 36 girdi dosyasının tamamı. Ad
sadeleştirilerek (Türkçe harf katlama + noktalama atma) eşleştirildi.
Tutmayanlara **literatürde bilinen ikinci adlar** denendi; uydurma ad
kullanılmadı. Betik `Write` ile yazıldı, bash'ten kaçış geçmedi (`§11`).

### 🔴 SONUÇ
```
BENZERSİZ DURAK   65   (6 kolun 63 girdisi − 5 mükerrer + 5 ek menzil)
EŞLEŞTİ           39   (%60)   — 38'i birebir, 1'i takma adla
EŞLEŞMEDİ         26   (%40)
```

### EŞLEŞMEYEN 26 DURAK — harita bugün buralarda NOKTASIZ
```
ANADOLU orta   Üsküdar · Tosya · Hasan Çelebi · Harput
ANADOLU sol    Lâdik · Karahisar-ı Şarkî · Kelkit · Aşkale · Hasankale
RUMELİ  sağ    Vize · Prevadi · Karasu · Babadağı · İshakçı
RUMELİ  orta   Silivri · Yagodina
RUMELİ  sol    Firecik · Pravişte · Lanzaka · Yenişehir · İzdin · İstefe
EK menzil      İshaklı · Ilgın · Karapınar · Ulukışla
```
⚠️ **Üsküdar da yok** — Anadolu'nun her iki kolunun BAŞLANGIÇ düğümü.

### 🔴 TAKMA ADLAR NEREDEYSE HİÇ TUTMADI — bu ayrı bir bulgu
Denenen 15 takma addan **yalnız 1'i** tuttu (`Kırım → Bahçesaray`).
Tutmayanlar: Şebinkarahisar · Pasinler · Ferecik · Provadiya · İsakçı ·
Babadağ · Hasançelebi · Ladik · Zeytun · Lamia · Langaza · Praviste ·
Yenişehir-i Fener · Oçakov · Kefe.
⇒ **Eşleşmeme sebebi YAZIM DEĞİL, YOKLUK.** Bu önemli: yazım sorunu olsa
düzeltme ucuzdu; yokluk **nokta araştırması** demek.

### ÖLÇTÜĞÜM ve ÇIKARDIĞIM — ayrı satırlar
**ÖLÇTÜĞÜM:** Osmanlı ana yol sisteminin 65 adlı durağının 26'sının
`girdi.yukle()` evreninde kaydı yok.

**ÇIKARDIĞIM:** `CLAUDE.md §2` uyarınca bu 26 nokta **haritada delik
değil, YANLIŞ SAHİPLİK** üretiyor — çevrelerindeki toprak en yakın peteğe
emiliyor. Ve bunlar sıradan yerler değil: **imparatorluğun kendi posta ve
ordu güzergâhının durakları.** Yani en çok geçilen koridor, haritada en
zayıf temsil edilen yer olabilir.
⚠️ Bunu **ölçmedim** — hangi peteğe emildiklerine bakmadım. Ölçülmesi
gereken bir sonraki adım.

📌 Şartname *"bu sayı Emre'nin ② maddesinin de ölçüsüdür"* diyordu.
Ölçü: **26 durak.**

---

---

## ② İŞ 2'nin `git grep` AYAĞI — 42 DOSYANIN TAMAMINDA

Şartname *"önce `git grep`"* diyor. Regex kullanmadım — `girdi.yukle()`
çağırdım (`§11`: *veri zaten bir dilde yazılıysa o dilin yorumlayıcısını
çağır*).

### 🔴 ÖNCE: ŞARTNAMENİN BİR SAYISI BAYAT
```
şartname   "36 dosyanın TAMAMINDA"     ölçüm   42 dosya
şartname   2369 nokta                  ölçüm   2369  ✓
şartname   m: 721 / 2369 (%30)         ölçüm   721   ✓
şartname   kd: 0 / 2369                ölçüm   0     ✓
şartname   tur: sehir 1252 · liman 523 · kale 434 · bolge 122 ·
           kasaba 36 · koy 2           ölçüm   ALTISI DA BİREBİR ✓
```
⇒ Beş sayıdan dördü tuttu, **dosya sayısı tutmadı: 36 değil 42.**
📌 Küçük ama `§5`'in dersi: *"ayrıştırıcıyı doğrulamak yetmiyor, hangi
DOSYALARI okuduğunu da doğrulamak gerekiyor."*

### ALAN DOLULUĞU — 2369 nokta üzerinden
```
ad · tur · lat · lon · g · k    2369  %100
s                               2299  %97,0
d                                725  %30,6
m                                721  %30,4
v                                341  %14,4
kur                              201   %8,5
kasitli_bosluk · bos             138   %5,8
neden                            133   %5,6
isg                               83   %3,5
go 13 · bit 7
kd                                 0   %0     ← şema VAR, veri BOŞ
```

### 🔴 BOĞUM DÜĞÜMÜ İÇİN HİÇBİR ALAN YOK — ölçüldü
`tur:` altı değer taşıyor ve **altısı da YERLEŞİM cinsi**:
```
sehir 1252 · liman 523 · kale 434 · bolge 122 · kasaba 36 · koy 2
```
Viabundus'un dokuz özniteliğiyle karşılaştırma:
| Viabundus | bizde | durum |
|---|---|---|
| settlement / town | `tur:"sehir"·"kasaba"·"koy"` | 🟢 VAR |
| harbour | `tur:"liman"` (523) | 🟢 VAR |
| — | `tur:"kale"` (434) | 🟡 **BİZE ÖZGÜ** — Viabundus'ta yok |
| toll (derbend) | — | 🔴 YOK |
| bridge (köprü) | — | 🔴 YOK |
| ferry (geçit) | — | 🔴 YOK |
| staple · fair · lock | — | 🔴 YOK |
| *öznitelik-siz = kavşak* | — | 🔴 **YOK — ve asıl eksik bu** |

⇒ **ÖLÇTÜĞÜM:** boğum düğümünün hiçbir cinsi veride ifade edilemiyor.
**ÇIKARDIĞIM:** `tur:` alanı genişletilebilir görünüyor **ama tipolojisi
kirli** — `bolge` (122) bir *alan*, ötekiler *nokta*. Aynı alanda iki ayrı
şey duruyor. Bunu şemada çözmek gerekecek (İŞ 2'nin tasarım ayağı).

### `k:` DAĞILIMI
```
k0 1580 (%67) · k4 481 · k3 246 · k2 58 · k1 4
kale'nin 434'ünün 194'ü k=0 · 166'sı k=4  ⇒ kaleler ağırlıkça en altta
```

---

## ③ İŞ 3'ÜN ÖN ÖLÇÜMÜ — `m:` GERÇEKTEN BİR ÇİZGE Mİ?

```
m: dolu                721 kenar
m: hedefi VERİDE YOK     4 kenar   ← YETİM, aşağıda
DÖNGÜ                    0         ← çizge ASİKLİK
KÖK (zincir orada biter) 1648
ortalama zincir derinliği 1,31
EN DERİN ZİNCİR             3
```

### 🔴 DÖRT YETİM KENARIN SEBEBİ TEK BİR YAZIM FARKI
```
Ceylanpınar · Nusaybin · Silopi · Malikiye (Derik)
   hepsi   m:"Diyarbekir"
   veride  "Diyarbakır"      ← ad böyle yazılı
```
⇒ Dört kenar **tek bir harf kümesi yüzünden kopuk.** Somut, ucuz,
düzeltilebilir bir kusur — **ama yerleşim dosyaları benim değil**,
koordinatöre bildirdim, dokunmadım.

### HÜKÜM ADAYI (henüz KARAR DEĞİL — İŞ 3'te bağlayacağım)
**ÖLÇTÜĞÜM:** `m:` döngüsüz, köklü bir **ORMAN** — ve **çok sığ**
(en derin zincir 3, ortalama 1,31).
**ÇIKARDIĞIM:** bu bir **hiyerarşi**, bir **ağ değil**. Koridor kenarı
komşuluk ifade eder ve **simetriktir**; `m:` ise yukarı-aşağı bir
bağlılık, **yönlü ve tek ebeveynli.** İkisi aynı şey olamaz.
⚠️ Bu hâlâ bir **eğilim**. Kararı, `m:` bağlarının ortalama km'sini ve
`Değişmez 3`ün 359 çiftinin çizgede nerede toplandığını ölçtükten sonra
vereceğim.

---

---

## ④ KOORDİNAT SINAVI — *"ad tuttu"* ≠ *"yer doğru"*

Kendi şüphemi sınadım: `Karasu` · `Yenişehir` gibi **çok anlamlı adlar**
veride başka bir yeri gösteriyor olabilirdi. Yöntem: her kolda **ardışık
eşleşen durakların** arasındaki gerçek mesafe ölçüldü; aşırı atlama yanlış
eşleşme şüphesidir.

### 🟢 SONUÇ: YANLIŞ EŞLEŞME KANITI YOK
```
39 eşleşmenin ardışık mesafeleri: 48 – 375 km arası, hepsi MAKUL
şüpheli atlama: 2 — ve İKİSİ DE AÇIKLANIYOR, hata değil
```
```
Şam → Mekke            1390 km   Arabistan çölü; kaynağın durak listesi
                                 orada zaten SEYREK (surre: 54 menzil,
                                 12 adlı düğüm)
Kırklareli → Akkirman   556 km   arada Prevadi·Karasu·Babadağı·İshakçı
                                 DÖRDÜ DE EKSİK — atlamanın sebebi
                                 yanlış eşleşme değil, YOKLUK
```
📌 Ve şüphemin kaynağı olan iki ad (`Karasu` · `Yenişehir`) **zaten hiç
eşleşmedi** — yani yanlış eşleşme riski **gerçekleşmedi.**
⇒ Şüphe boşa çıktı, **ama sınamak boşa değildi**: sınamasaydım *"39 doğru"*
demek bir **varsayım** olacaktı; şimdi **ölçüm.**

### 🔴🔴 VE ASIL BULGU BURADA ÇIKTI — 26 EKSİK RASTGELE DEĞİL

Eksikler dağınık değil, **üç tutarlı koridor PARÇASINDA** kümeleniyor:
```
① DOĞU ANADOLU YAYLASI     Lâdik · Karahisar-ı Şarkî · Kelkit · Aşkale ·
   (Anadolu sol kol)        Hasankale                            5 durak
   ⇒ Niksar'dan Erzurum'a 375 km, ARADA HİÇBİR NOKTA YOK

② DOBRUCA / KARADENİZ KIYISI  Prevadi · Karasu · Babadağı · İshakçı  4 durak
   (Rumeli sağ kol)           ⇒ Kırklareli'den Akkirman'a 556 km BOŞ

③ VIA EGNATIA'NIN BATISI    Pravişte · Lanzaka · Yenişehir · İzdin ·
   (Rumeli sol kol)          İstefe                               5 durak
   ⇒ kol Gümülcine'de BİTİYOR; Yunanistan ayağı BÜTÜNÜYLE yok
```
Kalan 12 eksik dağınık (Üsküdar · Tosya · Hasan Çelebi · Harput · Vize ·
Silivri · Yagodina · Firecik · İshaklı · Ilgın · Karapınar · Ulukışla).

**ÇIKARDIĞIM:** *"26 dağınık nokta eksik"* demek ile *"üç koridor parçası
kopuk"* demek **aynı ölçüm, farklı iş tarifi.** İkincisi araştırma
partisine bölünebilir; birincisi bölünemez.
🔴 ⇒ Koordinatöre **üç parça** olarak öneriyorum, 26 madde olarak değil.

---

## SIRADAKİ
```
İŞ 2   şema TASARIMI (grep ayağı BİTTİ)
İŞ 3   `m:` hükmünü karara bağla — km ölçümü + 359 çiftin yeri
İŞ 4   kapsam itirazı / kademe
```

## ÖLÇMEDİKLERİM
```
· 26 eşleşmeyen durağın bugün HANGİ peteğe emildiği
· eşleşen 39 durağın koordinat DOĞRULUĞU (ad tuttu diye yer doğru sanmadım)
· "Karasu" ve "Yenişehir" gibi ÇOK ANLAMLI adlar — veride başka bir
  Karasu/Yenişehir olabilir ve yanlış eşleşme üretmiş olabilir.
  Eşleşenlerin hiçbirinin koordinatını kolun güzergâhıyla SINAMADIM.
```
