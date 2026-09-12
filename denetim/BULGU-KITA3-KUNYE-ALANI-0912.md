# KITA 3 — `kunye:` ALANI YAMASINI İNDİR — teslim raporu

## ① UYGULAMA — SAYIYLA

KITA 5'in `denetim/YAMA-KUNYE-ALANI-0912.json` kararı, KORU KORUNE
uygulandı (kararlar tartışılmadı, yalnız doğru kayda yazılıp
yazılmadığı doğrulandı):

```
data/kronoloji_misir.js       30 kayıt → kunye: yazıldı
data/kronoloji_ozbek.js        2 kayıt → kunye: yazıldı
data/kronoloji_sirbistan.js    7 kayıt → kunye: yazıldı
data/kronoloji_hindistan.js   11 kayıt → kunye: yazıldı
TOPLAM                        50 / 50 eşleşti, 0 elle-müdahale, 0 kayıp
```

Eşleştirme yöntemi: `tarih (t:) + tam başlık (b:) eşleşmesi`, tek
adayda otomatik, birden çok adayda ÖNCE tam `b:` eşleşmesi (mükerrer
tarihli iki Pânipat kaydı — 1761-01-14 — bu yolla ayrıştırıldı, ikisi
de doğru şekilde `["maratha","afgan-durrani"]` aldı). Hiçbir kayıtta
elle tahmin yapılmadı; `--dry-run` ile önce 48/50, düzeltmeden sonra
50/50 doğrulandı, ANCAK SONRA yazıldı.

`kunye:` şeması KORUNDU (`§ HAZIRLIK-KUNYE-ALANI`): her zaman DİZİ,
boş dizi GERÇEK BOŞLUK (`[]`, `null` DEĞİL) — 2 kayıt (`misir`
1915-01-14, `hindistan` 1554-01-01) bilerek `kunye:[]` aldı, `ozbek`
1569-01-01 de `kunye:[]` aldı (D111+D121: ne 'buhara' ne 'hive' bu
seferin gerçek tarafı, komşuluk kanıt sayılmadı).

## ② YENİ KURAL UYGULANDI — `git log --oneline -1 -- <dosya>`

Görev başlamadan, koordinatörün az önce koyduğu yeni kuralı (bir
şartname bir dosyayı tarif ederken önce doğrula) KENDİM için de
çalıştırdım:

```
data/kronoloji_misir.js       11a2f34 → VAR
data/kronoloji_ozbek.js       11a2f34 → VAR
data/kronoloji_sirbistan.js   d718403 → VAR
data/kronoloji_hindistan.js   11a2f34 → VAR
```

Dördü de dolu geçmişli, "YENİ dosya" tuzağı yok. `misir-eyaleti` ve
`sirbistan-eyaleti` bağımlılığı da `data/devletler.js`de doğrudan
`node -e` ile 10 künyenin (misir-eyaleti, misir-kavalali,
sirp-despotlugu, sirbistan-eyaleti, sirbistan-kralligi, buhara,
sih-imparatorlugu, maratha, afgan-durrani, meysur) hepsi bulunarak
teyit edildi.

## ③ ÖNGÖRÜ (D022) — KARNESİ

`denetim/ONGORU-KITA3-KUNYE-ALANI-0912.json` (yazmadan ÖNCE):
*"denetle.py'nin bütün Değişmez sayıları YAMA ÖNCESİ/SONRASI birebir
aynı kalacak, çünkü `kunye:` hiçbir Değişmez hesaplamasına GİRMİYOR
(`grep -n kunye arac/denetle.py` ile önceden doğrulandı — oradaki tüm
'kunye' geçen satırlar `yerlesimler.js`nin `d:` kimliğiyle ilgili, ayrı
bir kavram)."*

**SONUÇ: BÜYÜK ÖLÇÜDE TUTTU, TEK BİR SATIRLIK KİRLİ SAPMA VAR:**
```
ÖNCE   Değişmez 4c ✗  133 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
SONRA  Değişmez 4c ✓  132 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
       (33 kimlik → 32 kimlik · 4s birleşik 483 → 482)
```
🔴 **BU BENİM YAMAMDAN GELMEDİ — kirli ölçüm, açıkça bildiriyorum.**
Değişmez 4c yalnız `data/yerlesimler.js` × `data/devletler.js`
karşılaştırır; benim yamam bu iki dosyaya HİÇ dokunmadı (yalnız 4
`kronoloji_*.js` dosyası). Ölçüm sırasında `git status --short --
data/yerlesimler.js` **`M`** (değiştirilmiş, commit'siz) gösterdi —
başka bir oturum (muhtemelen KITA 1 ya da paralel bir künye/yerleşim
işi) ÖNCE/SONRA pencerem arasında bu dosyaya yazdı ve bir sahipsiz
dönemi düzeltti (133→132, tavanı KARŞILADI — iyi yönde ama bana ait
değil). Geri kalan HER SATIR (Değişmez 1/1b/1c/2/2s/2i/2t/3z/4/4d/5/
5b/5c/7, konum, dizin, mükerrer madde, savaş senkronu) BİREBİR AYNI —
öngörü bu kapsamda ÇÜRÜMEDİ. Tam diff: aşağıda.

```
100c100
< Değişmez 4c ✗  133 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
---
> Değişmez 4c ✓  132 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
114c114
<                (33 kimlik — tamamı için --ayrinti)
---
>                (32 kimlik — tamamı için --ayrinti)
137c137
<                   4c yalnız 127 · 4d yalnız 350 · ikisi birden 6 · BİRLEŞİK 483
---
>                   4c yalnız 126 · 4d yalnız 350 · ikisi birden 6 · BİRLEŞİK 482
142d141
<     adal                          1 dönem
143a143
>     adal                          1 dönem
```
(Son iki satır yalnız bir liste SIRASI değişimi, "adal" kaydı ikisinde
de var — bir 4c kaydının kümeden çıkmasıyla listenin sıralaması kaydı.)

## ④ EKSİK KÜNYE RAPORU — yeni bir iş kalemi (KITA 5'ten devrediyorum)

KITA 5'in `eksik_kunye_raporu`sundaki 2 kayıt bu turda `kunye:[]`
aldı, ama kimlik hâlâ EKSİK:
```
argun / erguni     (Sind Argun hanedanı) — devletler.js'te KÜNYE YOK
tarhan (Sind)      (Sind Tarhan hanedanı) — devletler.js'te KÜNYE YOK
```
Bu, `data/kronoloji_hindistan.js:1554-01-01` kaydının (*"Erguniler
yıkılıp Sind'de Tarhan hanedanı kuruldu"*) gerçek künyesiz kalmasının
sebebidir — yeni künye yazımı bu görevin kapsamı dışında, dizin
oturumuna (KITA 1 tarzı) devrediliyor.

## ⑤ COMMIT ETMEDİM — `data/` sende (1.MURAT).

Yalnız kendi `denetim/BULGU-KITA3-KUNYE-ALANI-0912.md` ve
`denetim/ONGORU-KITA3-KUNYE-ALANI-0912.json` dosyalarımı commit
ediyorum (§7 istisnası, exact pathspec).
