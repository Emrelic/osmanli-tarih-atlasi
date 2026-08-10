# MOTOR DENİZAŞIRI — ilerleme

> Oturum: MOTOR DENİZAŞIRI (Opus) · 10 Ağustos 2026
> Şartname: `oturumlar/MOTOR-DENIZASIRI.md`
> **Motora DOKUNULMADI.** `arac/uret_petek.py` okundu, değiştirilmedi.

---

## DURUM: ADIM 1 BİTTİ · ADIM 2 ÖNERİSİ SUNULDU · ONAY BEKLENİYOR

**Hüküm: motor değiştirilmemeli.** Ölçüm 19/19 noktasızlık dedi.

---

## ① ŞARTNAMEDE ÜÇ AKSAKLIK BİLDİRİLDİ (üçü de kabul edildi)

| # | aksaklık | sonuç |
|---|---|---|
| 1 | "14 vaka" vs "7 vaka" çelişkisi | 13 somut vaka + `h17#3b` tarama isteği — şartname düzeltildi |
| 2 | `DOCX-TESLIM.md` / `DOCX-KALAN-16.md` ad çelişkisi | üçü de asıl, `⑦` düzeltildi |
| 3 | `⑦` `kosu9.log`u gösteriyordu, `⑦b` onu çürütüyordu | `kosu7.log`a düzeltildi |

---

## ② EN BÜYÜK BULGU — ÇÖZÜM MOTORDA ZATEN VAR

`arac/uret_petek.py` okundu. Şartnamenin *"tasarlanacak seçenek (a)"* dediği
kural **uygulanmış durumda**, ve yalnız o değil:

```
satır  997  ADA KURALI              "petek KENDİ kara parçasının dışına taşamaz"
                                    yorumu Emre'nin vakalarını adıyla sayıyor
satır 1085  KARA-KISITLI SAHİPLİK   kara üzerinden Dijkstra; Oran→İspanya için yazılmış
satır 1026  koşu-4b hatası düzeltilmiş (tavanı yetim yüz geri alıyordu)
```

---

## ③ ÖLÇÜM — koşu yapılmadan, `petek_govde.js` üzerinde

Ölçülen: motorun **son aşamada** (satır 2820) yazdığı gövde — ada kuralı +
kara-kısıtlı sahiplik + çöl tavanı **uygulandıktan sonra**. 2308 yerleşim,
5089 parça havuzu.

### Motorun kendi ölçütleriyle dört kova
```
IHLAL      2 parça    12.108 km²   kendi noktaları olan başka bileşenden toprak
BOĞAZ    197 parça    94.470 km²   aynı bileşen, düz hat denizden geçiyor
BOŞLUK 2.447 parça   341.335 km²   noktasız bileşene taşma — TASARIM (motor:1015)
KARA     149 parça   126.728 km²   kopuk ama kara yolu var — normal
```

### K4 ölçütü — Emre'nin kendi cümlesinden
> *"…EĞER GERÇEK BİR DURUM DEĞİL İSE ÇÖZÜMLENMELİ."* (`h17#3b`)

⇒ Ölçüt su genişliği değil: **parçanın sahibi o tarihte bütün kara
komşularından farklı mı** (= ekranda yanlış renkte ada).
Kesitler: 1300 · 1345 · 1400 · 1453 · 1500 · 1600 · 1700 · 1800 · 1900.

```
aday (≥50 km²)          80 parça · 104.695 km²
🔴 GÖRÜNÜR KUSUR        19 parça ·   8.862 km²   (%8,5)
🟢 GERÇEK / görünmez    61 parça ·  95.833 km²   (%91,5) ← DOKUNULMAZ
```

**Ölçüt kendini doğruladı:** `Tromsø` 20.902 km² (fiyort 15,7 km) **görünmez**
çıktı — motorun kendi kabul testi (*"Oslo · Königsberg · Azak meşrudur ve
0 km² kaybetmelidir"*) korunuyor. `Kilitbahir` 1.444 km² **görünür** çıktı.
Su genişliği ölçütü ikisini ayıramıyordu.

⚠️ **Sabahki raporum bir satırda düzeltildi:** `Pag (Pago)` 7.277 km² kural
ihlali ama **ekranda kusur değil** (8 komşusu, hepsi aynı sahip).

---

## 🔴 ④ ÇARE ÖLÇÜMÜ — 19/19 NOKTASIZLIK

`CLAUDE.md §2`: *"ilk sorulacak soru: o bölgede yerleşim noktası var mı?"*
```
NOKTA EKLE   19 parça · 8.862 km²   parçanın İÇİNDE hiç nokta YOK
MOTOR         0 parça ·     0 km²
```
**Tek bir vaka bile motor değişikliği gerektirmiyor.**

---

## ⑤ ON ÜÇ VAKA — tek tek

```
🟢 KAPANDI (8)  h1#6 · h1#8 · h1#10 · h4#7 · h4#8 · h8#2 · h10#29 · h15#19
🔴 AÇIK (5)     h12#5 · h17#3 · h17#14 · h17#15 · h18 — hepsi Çanakkale/Marmara
                Kilitbahir 1.444 · Çimpe 161 · Karabiga 124 · Bolayır 93 km²
```
📌 `h1#8` ayrımı: **Midilli'nin peteğinde 0 parça** — şikâyetin öznesi temiz.
Kalan 76 km² ters yönde (Ayvalık'tan adaya).

### `h17#3` çözüldü — Emre'nin hükmü doğru, teşhisi yanlış
Emre *"Biga'nın ucu ← Midilli'deki Ceneviz alanının taşması"* demişti.
Ölçüm: **Midilli 0 parça.** O 1.444 km² **Kilitbahir'in** peteği, merkezi
`39,79 · 26,28` = **Behramkale/Assos**, ve o iki ad **veride hiç yok.**

---

## ⑥ EMRE'YE GİDECEK LİSTE — `h17#3b` teslimi

19 parça; ad · km² · hangi deniz · su km · görünür tarihler · boşluğun merkezi.
Tam liste koordinatöre gönderildi; ham veri `scratchpad/gorunur_kusur.json`.
En büyük dördü:
```
Vardø        4.831 km²  Barents        1300→1900   70,49 · 29,71  Varanger
Kilitbahir   1.444 km²  Çanakkale      1300 · 1345 39,79 · 26,28  Behramkale
Tralee         503 km²  Atlantik       1300→1600   52,70 · −9,46  Loop Head
Pontianak      199 km²  G. Çin         1800        −0,78 · 109,31 Borneo batı
```

---

## ⑦ SUNULAN ÜÇ SEÇENEK

| | ne | kazanç | risk | önerim |
|---|---|---|---|---|
| **A** | 19 nokta ekle | 8.862 km², 5 vaka kapanır | düşük | 🟢 **BU** |
| B | motor: per-tarih kesme | aynı | 🔴 yüksek — 61 görünmez parçayı kesme riski | hayır |
| C | `enklav:` damgası (Vardø + Kilitbahir) | 6.275 km² (%71) | orta, ölçülmedi | belki |

---

---

# ADIM 2a — MEKANİZMA BULUNDU · İKİ HÜKÜM DÜZELTİLDİ

## 🔴 A · KENDİ BAŞLIĞIMI DÜZELTİYORUM

Yukarıda *"MOTOR kusuru 0 parça"* yazdım. **Çare olarak doğru, SEBEP olarak
yanlış.** Ölçüldü:

### Pag ve Vardø ölçüm artığı DEĞİL
```
maskenin dışına düşen 10 tohum: Sofala · Mozambik Adası · Angoche · Quelimane ·
  Port Moresby · Finschhafen · Koryak · Petropavlovsk · Anadır · Çukotka
  (hepsi CLAUDE.md §11'in bildiği PENCERE DIŞI vakaları)
Pag ve Vardø bu listede YOK — tohumları kendi ada bileşenlerinin İÇİNDE
  Pag   → bileşen #351   (0,031  derece²)
  Vardø → bileşen #1886  (0,00097 derece²)
```

### Mekanizma: ızgara çözünürlüğü
Motorun kendi ızgarası kuruldu (`KV_ADIM = 0.05` ≈ 5,5 km, `uret_petek.py:1114`):
```
Pag     ızgara bileşeni 4.084 / bölgedeki kara 4.868 hücre = %83,9  → ANAKARAYA BAĞLI
Vardø   ızgara bileşeni 3.307 / 3.307                       = %100  → ANAKARAYA BAĞLI
```
0,05°lik ızgara Vardø'nun 2,5 km'lik boğazını ve Pag'ın ~1-2 km'lik kanalını
**göremiyor.**

> **⇒ `ADA KURALI` KESİYOR, `KARA-KISITLI SAHİPLİK` GERİ VERİYOR.**

📌 Şartnamenin `④`te uyardığı desenin ta kendisi: *"bir düzeltme doğru
çalışabilir ve SONRAKİ AŞAMA onu geri alabilir."* A1 tavanı buna yakalanmıştı;
**aynı motorda ikinci vakası.**

**Düzeltilmiş hüküm:**
```
ÇARE olarak   19/19 nokta ekleyerek kapanır — A seçeneği HÂLÂ GEÇERLİ
SEBEP olarak  19'un 2'sinde kök sebep noktasızlık DEĞİL, ızgara çözünürlüğü
```

## 🔴 B · KOORDİNATÖRÜN "KARA YOLU / DÜZ HAT ORANI" HİPOTEZİ — ÇÜRÜDÜ

```
                    km²   su km  düz km  kara km   ORAN   görünür?
Kilitbahir         1444    11,8      41       43   1,06   🔴 GÖRÜNÜR
Vardø              4831     2,5      54       64   1,19   🔴 GÖRÜNÜR
Tromsø            20902    15,7     100       96   0,96   🟢 görünmez
İnebahtı            575    12,3      33      272   8,18   🟢 görünmez
Sumbawa            1189    28,2      59      178   3,01   🟢 görünmez

GÖRÜNÜR  : 1,06 – 1,19        görünmez : 0,91 – 8,18
⇒ görünmez küme görünürleri TAMAMEN içine alıyor. TEK EŞİK AYIRAMAZ.
```
🔴 **Ve ters yönde çıktı:** görünür kusurların oranı **düşük**. Sebep aynı
mekanizma — Kilitbahir'in "kara yolu" 43 km, çünkü **ızgara Çanakkale
Boğazı'nı da göremiyor.** ⇒ *Hipotezin ölçemediği şey, kusurun sebebinin
kendisi.*

**Aday ölçüt (ÖLÇMEDİM):** *"su açıklığı ızgara adımından dar mı"* — Vardø 2,5 ·
Boğaziçi 2,6 · Pag ~1-2 km hepsi 5,5 km altında. Ama Helsinki 127 km ve
Camboyluk 76 km de görünür ⇒ tek başına yetmez.

## C · TESLİM — 19 NOKTA, İKİ HALKA

### HALKA 1 — Emre'nin şikâyet ettiği yer · 4 nokta · 1.798 km² · BEŞ VAKA
```
Kilitbahir         1.444 km²  39,788 · 26,276  Behramkale/Assos  h12#5·h17#3·h17#14·h17#15·h18
Boğaziçi (Rumeli)    137 km²  41,196 · 29,191  Beykoz/Şile       (taramadan)
Karabiga             124 km²  40,678 · 27,190  Şarköy/Trakya     h12#5·h17#3·h17#14
Bolayır               93 km²  40,343 · 26,928  Karabiga/Biga     h12#5·h17#15
```
🔴 **Behramkale tek başına 1.444 km² ve beş vakanın beşi.** Veride hiç yok.

### HALKA 2 — taramadan çıkan, sorulmamış · 15 nokta · 7.064 km²
```
Vardø 4.831 · Tralee 503 · Pontianak 199 · Helsinki 197 · Tallinn 186 ·
İnari 179 · La Rochelle 158 · Camboyluk 152 · Sebte 123 · Tønsberg 107 ·
Bombay 106 · Stralsund 101+80 · Tenggarong 90 · Draç 53
```
⚠️ Vardø (70,5°K) ve İnari (70,8°K) **kutup kuşağında** — `BEKLENEN_SAHIPSIZ =
180` tavanının kasıtlı boşluk bölgesine düşüyor olabilirler. Nokta yazacak
oturum önce bunu ölçsün.

## D · IZGARA KUSURU İÇİN ÜÇ YOL (hiçbiri uygulanmadı)
```
(i)   KV_ADIM 0,05 → 0,02      ızgara 6,25× büyür · koşu süresi ÖLÇÜLMEDİ
(ii)  Dijkstra'yı bileşene kısıtla  🟢 en temiz: iki aşama artık çelişmez
(iii) dokunma                   nokta eklenince zaten kapanıyor
```
Önerim **(ii)**, ama **ölçmeden** söylüyorum.

---

## ⑧ ÖLÇMEDİĞİM ŞEYLER (açıkça)

- **`Değişmez 1` etkisi** — ölçemiyorum, çünkü etki **yazılacak dönemlere**
  bağlı ve o dönemler henüz yok. Nokta sahipsizliği *azaltır* (dönem yazılırsa)
  ya da *artırır* (dönemsiz kalırsa). Rakam veriye bağlı, motora değil.
- **(i) ve (ii) şıklarının koşu süresine etkisi.**
- **"su açıklığı ızgaradan dar mı" ölçütünün** 19 vakanın kaçını açıkladığı.
- **19 noktanın `Değişmez 1`e etkisi** — sahipsizliği azaltması beklenir, ölçmedim.
- **C seçeneğinin işe yarayıp yaramayacağı** — `enklav:` yetim yüzü kapatır,
  taşmayı kapatır mı bilmiyorum.
- **`BOĞAZ` kovasının <50 km²lik kuyruğu** — 117 parça ölçüm dışı bırakıldı.

---

## ⑨ ALETLER (hepsi salt-okuma, scratchpad'de)

```
disa_aktar_petek.js   petek_govde.js → NDJSON (parça havuzunu çözer)
olc_denizasiri.py     v1 — ÇÜRÜDÜ (ölçüt fazla genişti, her adacığı yakaladı)
olc_denizasiri2.py    v2 — kovalar örtüşüyordu
olc_denizasiri3.py    v3 — dört kova + 13 vakanın sınanması  ✅
olc_gorunur.py        K4 ölçütü — görünür kusur, 9 kesit      ✅
olc_care.py           nokta mı motor mu                        ✅
```
📌 v1 ve v2 **kasten duruyor**: v1'in ölçütü *"farklı kara bileşeni"*ydi ve
Cebu'nun komşu adacığını da ihlal saydı. Motorun kendi yorumu (`:1015`
*"noktasız kara parçası: eski davranış"*) onu çürüttü. **Yanlış ölçüt de bir
sonuçtur; silinmiyor.**
