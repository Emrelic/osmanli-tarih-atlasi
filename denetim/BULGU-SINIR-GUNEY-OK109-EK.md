<!-- DURUM: OLCULDU ¦ 2026-09-02 ¦ OPUS HAZIR KITA 109 ¦ B4 EK — nokta turu -->
# EK — IRAK NOKTA TURU ve CEYLANPINAR↔RAKKA İKİNCİ ARAMASI

**Oturum:** OPUS HAZIR KITA 109 · 2 Eylül 2026 · koordinatör 1.MURAT
**Önceki:** `denetim/BULGU-SINIR-GUNEY-OK109.md` (varsayım ölçümü)
**Yeni evren:** GeoNames `allCountries` (CC BY 4.0, 31 Ağu 2026, 420 MB)
süzüldü → güney kuşağı **13.918 yerleşim** (34,5-38,6°K / 35-46°D · TR·SY·IQ·IR)
**Yazılan nokta: 0.** Sebebi ölçüm, isteksizlik değil — aşağıda.

---

## ① 🟢 GERÇEK BİR EKSİK BULUNDU: **İMÂDİYE** — ve TDV onu adıyla sayıyor

TDV `musul--irak` (HTTP 200, gövde okundu, 48.940 karakter):
> *"1892-1910 yılları arasında Musul vilâyeti Musul, Kerkük ve Süleymaniye
> sancaklarından oluşmaktaydı. **Musul sancağının kazaları Akra, Zibar,
> Dıhok, Zaho, Sincar ve İmâdiye'dir.**"*

```
altı kazanın DÖRDÜ atlasta VAR : Akra · Duhok (Dıhok) · Zaho · Sincar
İKİSİ YOK                      : İMÂDİYE · ZİBAR
```
İmâdiye rehberden doğrulandı — **koordinat tahmin değil**:
```
GeoNames 99611 · Al ‘Amādīyah · 37.09214 / 43.48769 · PPLA2 (ilçe merkezi)
alternatenames: Amêdî · Amedi · Amadia · ‘Amādīya · Amādīyeh · ئامێدى
3 km mükerrer sınavı: en yakın kayıt Duhok 50,8 km  🟢 temiz
ad çakışması: 🟢 yok
```
⇒ Bir Osmanlı **kaza merkezi**, 1923'te tartışmasız vardı, atlasta yok.

## ② 🔴 AMA YAZMADIM — ve sebebini SİMÜLASYONLA ölçtüm

Önce **kendi simülasyonumu doğruladım** (aletin yerine kendi uygulamamı
koyuyorum, o yüzden önce tabanı yeniden üretmesi gerekiyordu):
```
ALET   (olc_sinir_sapma.py) : en kötü +12,3 km @ 37,2534 / 43,5332
BENİM UYGULAMAM             : en kötü +12,5 km @ 37,2527 / 43,5389
fark 0,19 km → 🟢 taban üretildi, simülasyona güvenilebilir
```
Sonra İmâdiye eklendi:
```
                       İmâdiye YOK      İmâdiye VAR
   en kötü               +12,5 km   →     −13,1 km     ⚠️ İŞARET DÖNDÜ
   ortanca                 8,7 km   →       9,9 km     🔴 KÖTÜLEŞTİ
   ≤5 km örnek              1/31    →        1/31      değişmedi
```
⇒ **Doğu kolunun teoremi ikinci bir kesimde doğrulandı:**
> *"Tek taraflı ekleme sapmayı BÜYÜTÜR — `sapma=|dB−dA|/2` olduğu için bir
> yakayı sınıra yaklaştırmak bisektörü karşı yakaya iter."*

İmâdiye sınıra 18 km, karşısındaki Osmanlı noktası (Çölemerik) 35 km.
Tek başına eklenince bisektör Osmanlı tarafına **13 km** kayıyor.
**Simetrik eş arandı** (37,32-37,60°K / 43,20-43,85°D, rehberden):
```
Hakkâri (Çölemerik) 37,574/43,741   ZATEN VAR
Çığlı (Ashitha)     37,323/43,375   1915-18'de boşaldı — 1923 durumu ŞÜPHELİ
Andaç (Alaman/Zap)  37,355/43,262   köy, TDV'de yok
Ortaköy (Aşağı Aruş)37,328/43,281   köy, TDV'de yok
```
Üçünün de TDV dayanağı YOK ve `hakkari` maddesi (Doğu kolunun ölçtüğü gibi)
bu taneciği kapsamıyor. ⇒ **Simetrik eş kaynaklanamadı, çift kurulamadı.**

## ③ 🔴 VE BİR AYRIM: ÖLÇÜT İLE AMAÇ TERS YÖNE İŞARET EDEBİLİYOR

İmâdiye'yi yazmamak *"eksik veriyi yazma"* demek değil. Ama şunu ölçtüm:
```
İmâdiye'nin toprağı bugün Duhok ve Akra peteklerine emiliyor
ikisi de `ingiltere`  ⇒  RENK HATASI YOK
```
⇒ İmâdiye'yi eklemek **hiçbir boyama hatasını düzeltmiyor**; yalnız hücre
yapısını inceltiyor — ve sapma ölçütünü **kötüleştiriyor.**
📌 ***Sapma ölçütü sınır doğruluğunun vekilidir, veri tamlığının değil.
İkisi aynı yöne işaret etmek zorunda değil.*** İmâdiye tamlık için bir
kazanç, sapma için bir kayıp. Hangisinin ağır bastığı bir KARAR, ve o
karar bende değil.

---

## ④ CEYLANPINAR↔RAKKA — İKİNCİ ARAMA, YENİ EVRENDE

🔴 Koordinatörün şartı: *"UYGULAMA-1'in hükmünü sessizce ezme; iki ölçümü
yan yana yaz, aynı yere varsan bile gerekçeler ayrı kalsın."*

| | UYGULAMA-1 (30 Ağustos) | OPUS HAZIR KITA 109 (2 Eylül) |
|---|---|---|
| **evren** | web araması + TDV; rehber YOKTU | GeoNames dünya gazetteer'i, 420 MB |
| **yöntem** | aday aday araştırma (Tell Tamer · el-Haseke) | kutu taraması, nüfus eşikli |
| **bulgu** | Tell Tamer 1930'lar · el-Haseke 1907 garnizon köyü, ORTA güven | 36,30-36,86°K / 38,70-41,60°D kutusunda **Suriye yakasında ≥2000 nüfuslu TEK yerleşim: el-Haseke** (422.445). Öteki altı adayın **beşi Türkiye'de**, biri (Jinnīyah) **terk edilmiş** (PPLQ) |
| **hüküm** | *"gerçek tarihsel seyreklik"* | **aynı hüküm, bağımsız dayanakla** |

⚠️ **Ve bu iki ölçüm AYNI SORU DEĞİL.** UYGULAMA-1 *"1923'te orada ne
vardı"* diye sordu ve kaynak aradı. Ben *"bugün orada ne var"* diye sordum
ve gazetteer taradım. ⇒ Benim bulgum 1923'ü **doğrudan ölçmüyor**; bir
**çıkarım** taşıyor ve onu ayrı yazıyorum:
> **ÖLÇTÜM:** Suriye yakasında bugün ≥2000 nüfuslu tek yerleşim var.
> **ÇIKARDIĞIM:** bir asırlık Fransız manda iskânı, Asurî göçü ve Baas
> köy politikalarından SONRA bile bu kadar seyrek olan bir kuşak, 1923'te
> daha seyrekti. Bu bir çıkarım, ölçüm değil.

🟢 **Sonuç: 274 km'lik boşluk VERİ EKSİĞİ DEĞİL.** İki ayrı soru, iki ayrı
yöntem, aynı cevap — ve ikisi de yazılı kalıyor.

---

## ⑤ ÖLÇMEDİKLERİM

- **ZİBAR yazılmadı ve aranmadı-sayılmaz — ARANDI, GÜVEN ORTA ÇIKTI.**
  Rehberde `Bile` kaydı `Az Zibar · Bilah Zibar · Zibar` alternatif adlarıyla
  36,86321/44,06555'te duruyor ama **nüfusu 0** ve **PPL** (köy) — TDV'nin
  saydığı **kaza merkezi** ile aynı yer olduğu **doğrulanamadı** (Zibar bir
  aşiret/nahiye adı olarak da geçiyor). ⇒ ORTA güven, yazılmadı.
- **Silopi↔Zaho (−6,4 km) için Osmanlı yakası adayı aramadım** — işaret
  kuralı orada Osmanlı yakası istiyor, ama segment 23 km ve öncelik
  büyüklerdeydi. Açık kalem.
- **İmâdiye'nin `d:`/`s:` dönemlerini yazmadım** ama biçimi hazır: kardeş
  kazalarla (Akra · Duhok · Zaho · Sincar) **birebir aynı** desen olurdu
  (`d: 1516-08-24 → 1918-11-08`, `s: … ingiltere 1918-11-08 → 1923-10-29`)
  ve **yeni kırılma günü doğurmazdı** — iki gün de külliyatta var.
- **1918-11-08 gününü TDV doğruluyor:** *"İngilizler … 8 (veya 10) Kasım
  1918'de Musul'a girdi. 15 Kasım'da buradaki Türk kuvvetleri geri
  çekilmek zorunda kaldı."* Verideki gün TDV ile uyumlu; **ölçtüm,
  değiştirmedim.**
