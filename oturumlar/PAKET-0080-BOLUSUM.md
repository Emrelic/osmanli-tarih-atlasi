# parti-emrelic-0080 — 30 maddenin oturumlara bölüşümü

**27 Eylül 2026 · hüküm: YILDIRIM BAYEZIT** · kaynak paket:
`C:/claudemre/kutu/giden/parti-emrelic-0080/PARTI.md`

🔴 **BÖLME ÖLÇÜTÜ SINIFTIR, MADDE SIRASI DEĞİL.** Paket 30 madde ama 30 iş
değil: maddelerin **11'i tek bir sınıftır** ve tek sahibi olmalı — yoksa
on bir ayrı yerde on bir ayrı yöntem icat edilir (`D234`).

---

## ① SINIF DÖKÜMÜ — ölçüldü, 30/30 madde yerleştirildi

| sınıf | madde | sayı |
|---|---|---|
| **A · KORİDOR/EKSKLAV teyidi** | H-0007 H-0008 H-0011 H-0013 H-0018 H-0019 H-0024 H-0025 H-0028 H-0029 H-0030 | **11** |
| **B · petek suyu/boğazı aşıyor (MOTOR)** | H-0009 H-0010 H-0020 | 3 |
| **C · künye + toprak teyidi** | H-0003 H-0004 H-0005 H-0016 | 4 |
| **D · kronoloji SIRASI (aynı gün)** | H-0014 H-0017 | 2 |
| **E · arayüz** | H-0001 H-0012 H-0015 H-0027 | 4 |
| **F · ek okuma** | H-0006 H-0022 H-0023 H-0026 | 4 |
| **G · ufuk bantları (5/7/10 gün)** | H-0002 H-0021 | 2 |
| | | **30** |

---

## ② SINIF A — paketin ağırlık merkezi, ve zaten ÖLÇÜLMÜŞ

Emre'nin on bir maddede tekrarladığı tek cümle: *"bir şehir ele geçirilirken
ondan coğrafî olarak DAHA YAKIN olan aradaki şehirlerin durumu teyit
edilmeli."*

🔴 **Bu sınıfın sayısı bugün ölçülü ve paketten büyük.** `denetle.py`
Değişmez 7 (27 Eylül koşusu):

```
725 sorgusuz enklav (beklenen 731) — kopuk gövde, koridor SORULMADI
```

⇒ Emre'nin gördüğü 10 vaka, **725'lik bir kovanın görünen ucudur.** Paketi
madde madde kapatmak `D234`ün tam tarif ettiği hatadır: kayıt düzelir,
sınıf açık kalır, aynı şikâyet katlanarak döner.

Emre'nin kendi dört ihtimali (H-0011'de yazdığı) yöntemin iskeletidir:
```
① koridor gerçekten PAS GEÇİLDİ      → eksklav DOĞRU, belgeyle işaretlenir
② koridor da BİRLİKTE alındı         → kronoloji maddesi eksik, yazılır
③ koridor adı anılmayacak önemde     → ötedeki fetih onu KAPSAR
④ koridor fethedilene TÂBİ küçük yer → toprak olarak katılır
```
Sahibi bu dördünü **ölçüt** hâline getirecek, sonra 725'i o ölçütle
sınıflandıracak; paketin 10 vakası yöntemin SINAVIDIR, işin tamamı değil.

---

## ③ ATAMA — §7.3 ile ölçülerek

🔴 **Ölçüm (`list_sessions`, 27 Eylül 23:20):** canlı 45 oturumun
**hiçbiri SICAK değil** — en tazesi 5 sa 50 dk önce. ⇒ §7.3 ③'ün
"İLGİLİ + SICAK → ona ver" dalı bu gece **hiç kimse için açık değil.**
Ölçüt zorunlu olarak yalnız **İLGİ**ye indi; bunu gizlemiyorum.

📌 Ve ikinci ölçüm: yedi `ODAK-*-0080` kolunun **yedisi de TESLİM ETTİ**
(M-5301…M-5308) ve "bekçimi öldüreyim mi?" sorusu cevapsız duruyor.
Yani soğukluklarının sebebi tükenme değil, **cevap beklemek.**

| sınıf | oturum | gerekçe |
|---|---|---|
| **A** (11) | **KORIDOR-0081** · TAZE | Hiçbir oturum bu sınıfı tutmuyor; 725'lik kova kendi doktrinini ister. Taze açmanın bedeli 82.561 token, yanlış sahibin bedeli 725 kayıtta yöntem ayrışması. |
| **B** (3) | **koordinatör (bende)** | Motor sorusu; `arac/uret_petek.py` yalnız Oturum 0'da (§7). Ölçüm §④'te. |
| **C** (4) | **ODAK-OSMANLI-ANADOLU-0080** → `KUNYE-ANADOLU-0081` | H-0005 Eretna · H-0016 Timur/Karaman · H-0003 Habsburg · H-0004 Debrecen. Bu kol bugün tam o dosyaları yeniden ayrıştırdı — ilgi ölçülü, tecrübe diskte değil BAĞLAMDA. |
| **D** (2) | **ARAYUZ-0077** | Aynı gün iki maddenin çaprazlanması bir SIRALAMA kuralıdır; `js/app.js` sahipliği ARAYUZ ailesinde. 🔴 Önce ÖLÇÜM: kusur `t:` hassasiyetinde mi, sıralama işlevinde mi — teşhis atanmadan çare atanmaz. |
| **E** (4) | **SEFER-OK-0077** → H-0012 (ok başı: adı işi) · **ARAYUZ-0077-B** → H-0015 (kaynakça) · **TAZE `FETIH-1453-0081`** → H-0027 · **beklet** → H-0001 | H-0027 bir madde değil bir ALT UYGULAMA (madde içi harita + gün be gün kuşatma). H-0001 açılış animasyonu: `ONCELIK.md` sorusu, kalemi Emre'ye bırakıyorum. |
| **F** (4) | **EKOKUMA-0077-A/B/C** | Üçü de canlı ve tam bu işin sahibi; dördü aralarında bölünür. |
| **G** (2) | **koordinatör (bende)** | Motor bayrağı + çöl kelepçesi kararı; §⑤. |

⚠️ **ARAYUZ-0077-B'nin üstünde bugün ZATEN iki iş var** (ODAK-MEKANIZMA
yaması + "ek devlet ilan edemiyorum"). H-0015 üçüncü olarak veriliyor ve
SIRASI sona yazılıyor — sıralamayı o seçer (§7.1 ⑥).

---

## ④ SINIF B — teşhis ÖLÇÜLDÜ, yama değil

H-0009/H-0010: *"Anadolu yakasındaki yerleşimin bölgesi Boğaz'ı geçip
Avrupa yakasını boyuyor."*

```
KOŞU 16 ÖLÇÜMÜ (kosu16.log:441)
  ızgara 0.05°  ·  7200 × 2900 = 20.880.000 hücre  ·  kara 6.095.287
  41° enleminde hücre:  boylamda 4,20 km  ·  enlemde 5,53 km
  İstanbul Boğazı genişliği:  0,70 km (en dar) – 3,40 km (en geniş)
```

🔴 **Boğaz, ızgaranın TEK HÜCRESİNDEN dar.** Yani kara-kısıtlı yürüyüş
Boğaz'ı "geçmiyor" — Boğaz o çözünürlükte **hiç yok.** Bu bir yama
sorusu değil bir TEMSİL sorusu: 0,05° ızgara Çanakkale'yi, Boğaz'ı,
Kerç'i, Bab-ül Mendeb'i ayrı su hattı olarak taşıyamaz.

⚠️ **Ve burada ölçtüğümle çıkarımı ayırıyorum:** hücre genişliğini
ÖLÇTÜM; motorun o hücreyi kara mı deniz mi saydığını ÖLÇMEDİM. Sınav
şudur ve pahalı değildir: Boğaz hattı üzerindeki hücrelerin
`kara` maskesindeki değerini ve `_kvsahip` etiketini bas. Sonuç iki
şıktan biri olur:
```
(a) hücre KARA sayılıyor  → çare: su hatlarına ayrı bir GEÇİŞ BEDELİ
    (nehir yatağı mekanizması zaten var: `_KVNEHIR` kenar bedeli)
(b) hücre DENİZ sayılıyor → yürüyüş geçmiyor, boyama başka aşamadan
    geliyor (petek kıyı kesimi / ada kuralı) — teşhis TAMAMEN değişir
```
Ölçmeden yama yazmak, `§11`in "ölçüm doğru, çıkarım yanlış" ailesidir.

H-0020 (Tiflis'in kuzeye uzanan üçgeni): aynı aletle ölçülür — *"5 günlük
yürüyüş buraya uygulanıyor mu"* sorusunun cevabı `MOTOR_YURUYUS`
bayrağıdır ve koşu 16'da **AÇIKTI**; yani evet uygulanıyor, üçgen
yürüyüşün ÜRÜNÜ. Doğru soru "uygulanıyor mu" değil, "o koridorda 5 günde
yürünür mü" — ve onu eğim alanı söyler.

---

## ⑤ SINIF G — 7 ve 10 gün: mekanizma VAR, bayrak KAPALI

Ayrıntı ve karar: **`oturumlar/UFUK-BANT-0081.md`** (aynı gün yazıldı).
Özet: ek koşu GEREKMEZ, tek koşu üç bandı birlikte üretir; ama çöl
kelepçesi kararı koşudan ÖNCE verilmelidir.

---

## ⑥ NE YAPILMAYACAK — açıkça

- **H-0019'u "dünya çapında tara" diye tek mesajla kimseye vermedim.**
  725 enklav, yöntemi kurulmadan taranırsa 725 ayrı karar demektir.
  KORIDOR-0081'in ilk teslimi bir TARAMA değil bir ÖLÇÜTtür.
- **H-0001 (açılış animasyonu) atanmadı.** Kapsam kalemi: `ONCELIK.md`
  sıralamasında nereye düştüğünü Emre söylemeli. Ölçüm yapmadan
  "yaparız" demek, yapılacaklar listesini şişirmektir.
- **H-0027 (İstanbul'un fethi pasajı) küçük bir madde SAYILMADI.** Madde
  içi harita, gün be gün kuşatma, animasyon, surlar/zincir/toplar — bu
  bir alt uygulamadır ve taze oturum ister.
