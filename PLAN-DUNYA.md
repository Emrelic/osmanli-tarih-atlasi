<!-- DURUM: HAZIR ¦ 2026-08-15 ¦ Emre'nin sırasıyla dünya planı -->
# DÜNYA PLANI — Emre'nin sırasıyla

> Emre, 15 Ağustos 2026:
> *"Önce tüm dünya topografyasını haritamıza uygulayalım. Sonra tüm
> yerleşimleri koridor ağ sistemi ile yerleştirelim ve topografya tabanlı
> sınırlarımızı çizelim. Ondan sonra bu Voronoi sistemi ya da çöllerin
> boyanması meselesine bakalım."*
> *"Korkma, varsın Kars'ın noktası Çin'i boyasın — ki boyayamaz. Ama en
> azından nerelerde nokta ihtiyacımız olduğu direkt görünür."*

---

## 🔴 ÖNCE: EMRE BİR KURALI ÇÜRÜTTÜ VE HAKLIYDI

`CLAUDE.md §6` şöyle diyor ve bugüne kadar pencereyi kapalı tutan şey buydu:

> *"**Nokta yoğunluğu sağlanmadan `BOLGE` kutusunu açma.** Mevcut 740
> peteğin kenardakileri bütün dünyaya yayılır: **Kars'ın peteği Çin'i**,
> Fas'ınki Atlantik'i boyar."*

**Ölçüldü — bu uyarı BAYAT:**
```
uret_petek.py:595   TAVAN_KM = {1:700, 2:420, 3:280, 4:140, 0:280}
en büyük erişim     700 km  (k:1, yani eyalet merkezi)
Kars → Pekin      6.251 km
⇒ Kars Çin'i BOYAYAMAZ. Tavan 6 kat önce kesiyor.
```

📌 **Uyarı yazıldığında yarıçap tavanı YOKTU** — 740 nokta vardı ve petek
gittiği yere kadar gidiyordu. Tavan (`A1`) sonradan eklendi ve **uyarının
gerekçesini ortadan kaldırdı**, ama uyarı yerinde kaldı.
🔴 Bu, projenin kendi kayıtlı dersinin bir vakası daha: *"bir kuralın
gerekçesi değişince kuralın kendisi YENİDEN ÖLÇÜLÜR; 'hâlâ yazılı' olması
'hâlâ doğru' demek değildir."*

🟢 **Ve Emre'nin asıl noktası daha değerli:** açık pencere bir **teşhis
aleti**. Nokta eksikliği bugün *görünmüyor* — pencere kapalı olduğu için
Amerika'daki 134 nokta hiç çizilmiyor. Açılınca eksiklik **haritanın
kendisinde** görünür hâle gelir.

---

## SIRA — dört aşama, her birinin kapısı ve ölçütü

### ① TOPOGRAFYA — dünya
```
🟢 BİTTİ  dünya DEM'i indi (597 MB · 43200x17280 · 8/8 nokta doğrulandı)
🟢 BİTTİ  sürtünme numpy'a taşındı (3305 kat · dünya 1,4 dk)
🔴 KALAN  uret_petek.py DEM'i HİÇ OKUMUYOR
🔴 KALAN  BOLGE penceresi dünyanın %26'sı
🔴 KALAN  kara tanımı ayrışması: iç bölgede %70 — SEBEBİ ÖLÇÜLMEDİ
```

**Emre'nin özellikle istediği engel katmanları:**
```
🟢 DENİZ    DEM'den bedava geliyor (z ≤ 0) — SONSUZ sürtünme
🟢 GÖL      89 göl zaten motorda (`ne_10m_lakes` + `goller.js`)
🟡 NEHİR    1455 parça var ve BÜYÜKLÜĞE göre ayrılabiliyor:
            `scalerank` 1-9 (1 = en büyük). Nil · Fırat · Dicle · Tuna ·
            Volga · İndus · Ganj · Yangtze · Amazon · Don ADIYLA var.
            🔴 Dinyeper ve Amuderya YOK — ad araması boş döndü.
🔴 DAĞ      DEM'den eğim olarak gelir; ÇARPANI ÖLÇÜLMEDİ (T-0112)
```
⚠️ **Nehir bugün ENGEL DEĞİL, YASLAMA aracı.** Motor nehri sınır
*çekmek* için kullanıyor, *geçişi pahalılaştırmak* için değil. Emre'nin
istediği ikincisi. Prototipte `NEHIR_BEDELI = 8 km` var ama üretimde yok.

### ② YERLEŞİM — "tüm yerleşimleri işaretle"
```
2527 nokta / hedef ~4000 = %63
kademe %37 · türetme kuyusu KURU ⇒ 1364 nokta ARAŞTIRMA borcu
11 bölgede kademe SIFIR · 173 nokta pencere DIŞINDA
```
🔴 **Bu adım MEKANİK DEĞİL.** Her nokta koordinat **ve sahiplik dönemi**
ister; dönemsiz nokta `Değişmez 1`i kırar. "Tüm yerleşimleri işaretle"
tek oturumluk bir iş değil, **araştırma partileri** dizisidir.

🟢 **AMA MEKANİKLEŞTİRİLEBİLİR YANI VAR ve Emre'nin dediği tam bu:**
pencere açılınca *nerede nokta eksik* sorusunu **harita kendisi**
gösterir. Buna ek olarak bir **yoğunluk haritası** üretilebilir:
"şu 500 km'lik karede hiç nokta yok" listesi — araştırma partileri o
listeden beslenir, tahminden değil.

### ③ KORİDOR + AĞ
```
39 düğüm yere oturmuş · yalnız Anadolu-Rumeli
42/64 kenarın uzunluğu ölçülmemiş
Viabundus 48,7°K'nin ALTINA inmiyor — HALKA 3-4 malzemesi
```

### ④ BÖLGE ATAMA — topografya tabanlı sınırlar
```
🟢 prototip var, Çimpe sınavı GEÇTİ (Voronoi 29 hücre → maliyet 0)
🔴 üretimde %0 · eğim çarpanı ölçülmedi
```
⚠️ Emre: *"4/2/1 puanlaması yeni sistemle değişebilir"* — **doğru**, ve o
yüzden `H-0073` prototipi RAFA KALDIRILDI (silinmedi: `arac/puan_alani.py`).
Bileşke-kuvvet fikri maliyet alanının içinde kendiliğinden doğabilir.

---

## YAPILACAK İŞ SIRASI — kapılarıyla

```
A1  kara tanımı ayrışmasını ÇÖZ            (iç bölgede %70, sebebi bilinmiyor)
    ⇒ KAPI: çözülmeden koşu YAPILMAZ. Yoksa koşudan sonra çıkan her
      farkın sebebi belirsiz kalır: "maliyet mi değişti, kara mı?"

A2  DEM'i uret_petek.py'ye BAĞLA           (deniz + göl + nehir + eğim)
    ⇒ eğim çarpanı 0 ile başla — ölçülmeden sayı UYDURULMAZ

A3  ÖNGÖRÜYÜ YAZ, sonra koş                (mazeretiyle birlikte)
    ⇒ `A1 tavanı` vakası: doğru çalışan bir düzeltmeyi sonraki aşama
      geri aldı ve onu yalnız ÖNCEDEN yazılmış bir cümle yakaladı

A4  BOLGE penceresini DÜNYAYA aç
    ⇒ Emre'nin kararı. Tavan Kars'ı 700 km'de kesiyor, Çin'e ulaşamaz.
      Beklenen sonuç: büyük boş alanlar ve tek başına duran çemberler —
      bunlar KUSUR DEĞİL, EKSİK NOKTANIN HARİTASI

A5  YOĞUNLUK HARİTASI üret                 (nerede nokta gerekiyor)
    ⇒ araştırma partileri buradan beslenir

A6  T-0112: eğim çarpanını 41 sefer güzergâhıyla ÖLÇ ve ayarla

A7  koridor halka halka                    (HALKA 2 bölüştürmesi hazır)
```

## ÖLÇÜLMEYENLER — açıkça
```
· kara ayrışmasının %70 iç bölge kısmının SEBEBİ (göl mü, deniz seviyesi
  altı kara mı, gerçek uyuşmazlık mı)
· dünya penceresinde koşunun SÜRESİ (bugünkü 80 dk, %26 pencerede)
· pencere açılınca kaç yeni petek doğacağı
· nehir engelinin sınır çizgisine etkisi
```
