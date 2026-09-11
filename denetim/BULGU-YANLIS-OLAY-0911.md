# YANLIŞ OLAY — kompozit geçiş maddelerinde "hangi olayın günü" taraması

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Sınıf tanımı:** İki bağımsız vaka (afgan-durrani, İbrahim'in ölümü)
aynı kök hatayı gösteriyor: bir madde İKİ olayı (öncekinin bitişi +
sonrakinin başlangıcı) TEK tarih alanıyla temsil ediyor, ve o tarih
LABEL'ın vurguladığı olaya değil KOMŞU olaya ait. `İÇ TUTARSIZLIK`
görevi metin-tarih ÇELİŞKİSİNE bakıyordu (farklı gün); bu görev
metin ile tarih TUTARLI olsa bile YANLIŞ OLAYA işaret ettiği durumları
arıyor — daha ince, mekanik olarak DAHA ZOR yakalanan bir sınıf.

**Gözlenen konvansiyon (önceki 3 görevden çıkan, ölçümden ÖNCE
yazılan bir HİPOTEZ):** "X'in vefatı VE Y'nin cülûsu" tipi kompozit
maddelerde veri seti TUTARLI olarak İKİNCİ olayın (cülûs) gününü
kullanıyor (Selim II örneği: gerçek ölüm 13 Aralık, madde 22 Aralık
— cülûs/duyuru günü, ve bu DOĞRU kabul edildi). İbrahim'in ölüm
maddesi ("hal'i VE katli") bu konvansiyonu BOZUYOR: ikinci olayın
(katl, 18) değil BİRİNCİNİN (hal', 8) gününü kullanıyor. **Öngörü:** bu
konvansiyon-ihlali NADIR olmalı — çoğu kompozit madde muhtemelen
konvansiyona uyuyor, aksi halde daha önceki iki görevde (İÇ TUTARSIZLIK,
PADİŞAH ÇAPRAZ) çok daha fazla sayıda ortaya çıkardı.

**Yöntem:** `b:` metninde İKİ olayı "ve" ile bağlayan kompozit
maddeleri bul (regex: iki fiil öbeği + "ve"), `gun:` alanında AÇIK
biçimde İKİ ayrı gün veren (aralık ya da "X (olay1) – Y (olay2)"
biçimi) adayları seç, `t:`nin hangi güne denk geldiğini ve bunun
konvansiyona (2. olay) uyup uymadığını kontrol et.

**Evren tahmini (ölçümden ÖNCE):**
```
Kompozit "iki-olay-tek-madde" (b: içinde İKİ fiil + "ve"):     100-300
  (olaylar*.js + kronoloji*.js + devletler.js kronolojisi)
`gun:` alanı AÇIKÇA iki ayrı gün veren alt-küme:                 20-50
Konvansiyona UYAN (2. olayın günü kullanılmış, DOĞRU):           15-40
Konvansiyonu BOZAN (1. olayın günü kullanılmış, YANLIŞ OLAY):     1-5
Ölçülemedi (hangi olaya ait belirsiz / takvim şüphesi):           2-8
```

D010: Bilinen iki pozitif — `İbrahim'in ölümü` (canlı veride,
olaylar*.js) ve `afgan-durrani` (STAGING'de, HAZIRLIK-DALGA2-0911.json,
evren dışı — önceki görevlerde olduğu gibi ikincil/elle doğrulama).
Aracın İbrahim'i YAKALAMASI zorunlu; yakalamıyorsa araç güvenilmez.

Bu öngörü ÇÜRÜRSE sebebi raporun sonunda ayrıca yazılacak.

---

## ÖLÇÜM

Araç: [`denetim/ARAC-YANLIS-OLAY-0911.py`](../denetim/ARAC-YANLIS-OLAY-0911.py)
Ham çıktı: [`denetim/OLCUM-YANLIS-OLAY-0911.json`](../denetim/OLCUM-YANLIS-OLAY-0911.json)

### D010 — İKİ BİLİNEN POZİTİF

- **İbrahim'in ölümü** (canlı, `olaylar*.js`): araç **YAKALADI**
  (`t:1648-08-08`, `gun:"8-18 Ağustos 1648"`, b:"hal'i ve katli" →
  🔴 YANLIŞ_OLAY). ⚠️ **İlk tasarım bunu KAÇIRIYORDU** — "önceki-biten +
  sonraki-BAŞLAYAN" (halef) ikilisi arıyordum, İbrahim'in kaydı ise AYNI
  KİŞİNİN iki ardışık olayı (hal' + katl, halef YOK). D187 uyarısı tam
  burada gerçekleşti: boş bir eşleşme kümesi "araç çalışıyor" sanılabilirdi.
  Tek birleşik anahtar-kelime kümesine geçilerek DÜZELTİLDİ.
- **afgan-durrani** (staging, evren dışı): önceki iki görevde zaten elle
  doğrulanmıştı, burada tekrar edilmedi.

### ① EVREN — kompozit (2+ olay anahtar kelimesi) madde sayısı

```
CEKIRDEK (olaylar*.js)          15  — HEPSİNDE `gun:` alanı DOLU
KUYRUK (kronoloji*.js)          51  — HİÇBİRİNDE `gun:` alanı YOK
KUNYE_KRONOLOJI (devletler.js)  17  — HİÇBİRİNDE `gun:` alanı YOK
TOPLAM                          83
```

🔴 **KUYRUK ve KUNYE_KRONOLOJI (68 madde) YAPISAL OLARAK ÖLÇÜLEMİYOR** —
`gun:` alanı bu iki kaynakta HİÇ KULLANILMIYOR (şemanın kendisi böyle),
yani iki olaydan hangisinin günü seçilmiş sorusu bu yöntemle
SORULAMIYOR bile. Elle kontrol edildi: KUYRUK'un 51 kompozit maddesinin
**hiçbiri** metin içinde gün+ay düzeyinde ikinci bir tarih ipucu
TAŞIMIYOR (hepsi yıl hassasiyetinde) — yani bu sınıfın hatası orada
teorik olarak var olabilir ama **hiçbir kaynakla (ne `gun:` ne metin
içi ikinci tarih) test edilemez.** KUNYE_KRONOLOJI'nin 17 maddesi de
aynı durumda. **Bu "temiz" demek DEĞİLDİR — "bu yöntemle görülemez"
demektir** (D015).

### ② CEKIRDEK'İN 15 MADDESİ — TEK TEK

12'sinde `gun:` **TEK bir gün** veriyor (iki olay AYNI GÜN gerçekleşmiş
— hal' ve cülûs aynı gün, ya da tek bir tarih zaten hangi olaya ait
belirsizlik taşımıyor): bunlarda seçilecek "yanlış" bir alternatif YOK,
soru anlamsız. Yalnız **3 madde** `gun:` içinde GERÇEKTEN İKİ FARKLI GÜN
veriyor — yani "hangisi seçildi" sorusu ancak bunlarda sorulabilir:

```
🔴 YANLIŞ_OLAY (1):
   Sultan İbrahim'in hal'i ve katli
   t:1648-08-08  gun:"8-18 Ağustos 1648"
   → t: BİRİNCİ (hal') güne denk geliyor, konvansiyon İKİNCİYİ (katl)
     bekler. TDV (önceki görevde doğrulandı) gerçek idamın 18'i
     olduğunu KENDİ kaynağını düzelterek teyit ediyor.

🟢 DOĞRU (2):
   II. Murad'ın vefatı ve II. Mehmed'in ikinci cülûsu
   t:1451-02-18  gun:"3 Şubat 1451 (vefat) – 18 Şubat 1451 (cülûs)"
   → t: İKİNCİ (cülûs) güne denk geliyor — konvansiyona UYUYOR.

   III. Murad'ın vefatı ve III. Mehmed'in cülûsu
   t:1595-01-16  gun:"15-16 Ocak 1595"
   → t: İKİNCİ güne (16) denk geliyor — konvansiyona UYUYOR.
```

⇒ **Test edilebilir evrende (3/3) sonuç: 1 YANLIŞ OLAY (zaten bilinen
İbrahim vakası), 2 DOĞRU.** Bu görevde YENİ bir "yanlış olay" vakası
BULUNAMADI.

### ③ KONVANSİYON HİPOTEZİ — DOĞRULANDI (küçük örneklemde)

Ölçümden önce yazılan hipotez ("kompozit maddeler İKİNCİ olayın gününü
kullanır") 2/3 vakada TUTARLI çıktı, 1/3'ünde (İbrahim) İHLAL edildi —
ve o ihlal TDV ile bağımsız olarak zaten doğrulanmıştı. Örneklem küçük
(n=3) olduğu için bu bir "kanun" değil, **gözlem** — ama ihlalin TEK
vaka olması, sınıfın YAYGIN olmadığını destekliyor.

### ④ SONUÇ — SAYIYLA

```
① Kompozit (2+ olay) madde:                          83
② `gun:` alanı dolu (test EDİLEBİLİR):                15  (CEKIRDEK'in tamamı)
③ İkisi de AYNI gün (soru anlamsız):                  12
④ GERÇEKTEN test edilebilir (iki FARKLI gün):          3
⑤ 🔴 YANLIŞ OLAY:                                      1  (İbrahim — ZATEN BİLİNEN)
⑥ 🟢 DOĞRU:                                            2
⑦ ⚪ ÖLÇÜLEMEDİ (yapısal — `gun:` yok, KUYRUK+KUNYE):   68
```

**Bu görevde YENİ bir "yanlış olay" vakası bulunamadı.** Sınıf gerçek
(İbrahim doğruluyor) ama şu an ölçülebilen dar evrende (n=3) İZOLE —
DIZIN TAMLIK/İÇ TUTARSIZLIK görevlerindeki "dar ama gerçek" örüntüsünün
bir tekrarı. Asıl açık soru **68 ölçülemeyen kayıtta** kalıyor — onlar
için gün hassasiyetli birincil kaynak (TDV) OKUNMADAN bu sınıf hiç
sınanamaz; kapsamı bu görevin dışında.

### ⑤ ÖNGÖRÜ TUTTU MU?

```
kompozit madde tahmini      100-300         ölçüm 83                TUTTU (alt sınırda)
gun: dolu alt-küme tahmini  20-50           ölçüm 15                ÇÜRÜDÜ (düşük)
konvansiyona uyan tahmini   15-40           ölçüm 2                 ÇÜRÜDÜ (düşük)
YANLIŞ OLAY tahmini         1-5             ölçüm 1                 TUTTU (alt sınırda)
```

**Çürüyen kısım neden çürüdü:** tahminim `gun:` alanının kompozit
maddelerde YAYGIN olacağını varsaydı; ölçüm gösterdi ki `gun:` YALNIZ
ÇEKİRDEK'te var (KUYRUK/KÜNYE hiç kullanmıyor) VE ÇEKİRDEK'in
kendisinde bile çoğu kompozit madde (12/15) tek-gün (iki olay aynı gün)
olduğu için "hangi olay" sorusunu hiç DOĞURMUYOR. Gerçek test-edilebilir
evren (3) tahminimin (20-50) çok altında kaldı — ama bu KÖTÜ bir haber
değil: **soru DAR bir evrende ama TAM olarak sorulabildi**, ve cevap
zaten bilinen tek vakayla TUTARLI çıktı.

