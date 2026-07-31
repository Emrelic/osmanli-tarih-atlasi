# YER DİZİNİ (U4) — görev tanımı

> `ORGANIZASYON.md Karar 2` gereği dosyaya yazıldı. Oturum bunu okur, mesaj
> beklemez.

| | |
|---|---|
| **Kod** | `U4` · **YER DİZİNİ** |
| **Model** | Opus |
| **Dosyan** | `data/cografya.js` (yeni) · `oturumlar/YERDIZINI-*.md` |
| **Yazmadığın** | `data/olaylar*.js` · `yerlesimler*.js` · `js/` · `arac/` |
| **İlerleme dosyan** | `oturumlar/YERDIZINI-ILERLEME.md` |

📌 **Neden Opus:** *"Anadolu bir alt bölge mi, bir ülke mi?"* · *"1453'te
Bulgaristan var mı?"* — bu soruların yanlış cevabı **hata vermez**, süzgeçte
sessizce yanlış sonuç üretir. `ORGANIZASYON §2`'nin ölçütü birebir bu.

---

## 1. NE İÇİN VARSIN

Kullanıcı kronolojinin **on eksenden** süzülmesini istedi (`PLAN-ETIKET.md`).
Coğrafya ekseni bugün kurulamıyor, çünkü maddelerin `yer:` alanı **serbest
metin.** Senin işin o eksenin **sözlüğünü** kurmak.

## 2. 🔴 TABAN — DENETÇİ ölçtü, tasarımını buna göre yap

```
benzersiz `yer:` değeri              674   (433'ü virgüllü)
virgül ayrıştırılınca ayrı yer       910
bilinen bir yerleşime ÇÖZÜLEN        583   (%64)
ÇÖZÜLMEYEN                           327
```

🔴 **Ve asıl bulgu sayı değil: 327'nin çoğu HATA DEĞİL.** `yer:` alanı **tek
bir eksene ait değil** — kullanıcının on ekseninden en az dördünü aynı serbest
metinde taşıyor, artı hiçbirine girmeyen bir sınıf:

```
Anadolu · Arnavutluk · Abhazya · Attika · Acara      → BÖLGE / ÜLKE
Amanoslar · Allahuekber dağları · Aras vadisi        → COĞRAFÎ OLUŞUM
Atmeydanı · Akropolis · Ayastefanos (Yeşilköy)       → ŞEHİR İÇİ MEVKİ
Adriyatik girişi · Ambrakya körfezi                  → DENİZ / BOĞAZ
```

⇒ **İlk kararın bu:** kaç tür yer var ve hangileri hiyerarşiye girer? Dağ,
körfez ve meydan bir *kapsama ağacının* düğümü müdür, yoksa ayrı bir tür müdür?
**Ölçmeden karar verme** — 327'yi tek tek sınıflandır, dağılımı gör, sonra karar.

## 3. 🔴🔴 EN BÜYÜK TUZAK — bunu baştan yazıyorum

> **"Ülke" tarih boyunca değişir. 1453'te Bulgaristan diye bir ülke yoktur.**

Kuracağın hiyerarşi **BUGÜNKÜ coğrafyadır ve yalnız SÜZME İSKELESİDİR —
TARİHÎ İDDİA DEĞİLDİR.** Bu cümle `data/cografya.js`'in en başına yazılmazsa
atlas kendi kendine anakronizm üretir ve akademik güvenilirliğinin tamamı
oraya dayanıyor.

Pratik karşılığı: süzgeçte **"Bulgaristan"** demek *"bugün Bulgaristan sınırları
içinde kalan yerler"* demektir. Haritada 1453'te Bulgaristan **devleti**
gösterilmez — o `devletler.js`'in işidir ve **ayrı bir eksendir.**
⚠️ İki ekseni karıştırmak bu projenin en pahalı hatası olur: harita tarihî,
süzgeç modern. Aynı ada sahip iki farklı şey.

## 4. ⛔ YAZMAYACAĞIN ŞEY — madde 4 türetilir

Kullanıcının *"bir ülke ve irtibatlı olduğu her yer"* ekseni (İngiltere →
Avustralya, Hindistan, Kenya…) **elle yazılmaz.** O küme `yerlesimler*.js`'te
zaten var: bir devletin herhangi bir tarihte `d:`/`v:`/`s:`/`isg:` ile tuttuğu
yerler. Tek sorgu, sıfır bakım.
📌 Projenin kuralı: **türetilebiliyorsa yazma.**

## 5. İŞ SIRASI

1. **327 çözülmeyeni sınıflandır** — tür dağılımını çıkar. Rapor: `YERDIZINI-*.md`.
2. **Tür şemasını öner** — kaç kademe, hangi türler ağaçta hangileri yanda.
   Bana getir, birlikte kararlaştıralım; `VERI-YAPISI.md` bende.
3. **`data/cografya.js`'i kur** — karar verilince.
4. ⏳ Maddelerin `yer_id:` alanına bağlanması **senin işin değil**; şema
   kesinleşince U1/YAMACI uygular.

## 6. ELİNDE HAZIR DURAN BİR KAYNAK

COĞRAFYA oturumu Natural Earth envanterini çıkardı, pencerede:
```
Continent 3 · Geoarea 12 · Pen/cape 7 · Island group 10
Range 61 · Desert 31 · Plateau 18
```
📌 Ve önemli bir gözlemi var: bu katmanların *"yaslama için etiket lekesi"*
olması **hiyerarşi için kusur değil, tam tersine uygunluk** — *"ANATOLIA" bir
sınır değildir ama bir SÜZME BAŞLIĞIDIR.* Ondan iste, hazır bekliyor.

## 7. İKİ KURAL — ikisi de bugün pahalıya mal oldu

**7.1** Kapsam ölçümü **projenin ayrıştırıcısıyla** yapılır (`arac/girdi.py`),
kendi regex'inle değil. Bugün beş oturum bu yüzden yanlış saydı.
**7.2** Bir ölçümün geçerli olması için **başka bir cevap verebileceği bir
dünya** olmalı (`OGRENILENLER §34`). Cevabı yoksa ölçüm değil törendir.

**7.3** Bitirdiğini ilerleme dosyana yaz. Mesaj yalnız acil kesme içindir.
`/compact` öncesi mutlaka yaz — sıkıştırma dosyaya yazılmamış olanı kaybeder
(`ORGANIZASYON Karar 2b`).
