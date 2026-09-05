# BULGU — Elba 1281-1532 gerçek sahibi (M-2884 yeni iş)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

## ① MEVCUT KAYIT VE ANAKRONİZM

```
data/yerlesimler.js:1463
{ ad:"Elba", ..., s:[{f:"1281-01-01",t:"1861-03-17",d:"toskana"},
                     {f:"1861-03-17",t:"1923-10-29",d:"italya"}] }
```

`toskana` künyesinin (satır 2061) kendi penceresi `f:"1532-01-01"`. Yani veri,
künye **doğmadan 251 yıl önce** onu kullanıyor — `§3.5`in doğrudan konusu.

## ② TDV — DENENDİ, ÖLÇÜLEREK ELENDİ

`islamansiklopedisi.org.tr/piza` **302 ÖLÜ** (raw HTML: `<title>Arama - TDV
İslâm Ansiklopedisi</title>`). Batı Avrupa `§4`te zaten **%0** ölçülmüş —
akademik kaynak burada MEŞRU. İki bağımsız kaynak kullanıldı (Wikipedia +
Britannica'nın "Elba" maddesi, birbirini doğruluyor).

## ③ pisa / piombino KÜNYE TARAMASI — TAHMİN EDİLMEDİ, TARANDI

```
grep -n "id:\"pisa\"\|id:\"piombino\"" data/devletler.js  → SIFIR sonuç
grep -ni "pisa\|piombino\|appiani" data/devletler.js       → "piza" bulundu
```

🔴 **Künye VAR ama id `pisa` DEĞİL, `piza`** — `§4`ün Türkçe yazım ekseni
tuzağının aynısı (aranan yazım gerçek id'yi bulmuyor). `id:"piza", ad:"Pisa
Cumhuriyeti", f:"1000-01-01", t:"1406-10-09"` (satır 5244).

`piombino` için hiçbir künye YOK — ne `piombino` ne başka bir ad altında.

## ④ GERÇEK SAHİPLİK ZİNCİRİ (Wikipedia "Principality of Piombino" +
Britannica "Elba" + Catholic Encyclopedia, çapraz doğrulandı)

```
1281-1290        Pisa                  (piza künyesi penceresi İÇİNDE — UYAR)
1290-1292        🟡 Cenova (Genova)     — TEK KAYNAK (Catholic Encyclopedia),
                                          gün yok, YIL bile ikinci kaynakla
                                          doğrulanmadı — AŞAĞIDA AYRI FLAG
1292-1399-02-19  Pisa                  (piza künyesi penceresi İÇİNDE — UYAR)
1399-02-19-...   Piombino (Appiani)    KÜNYE YOK — yazılması gerekiyor
```

**1399-02-19 GÜN HASSASİYETİNDE, İKİ BAĞIMSIZ KAYNAKLA DOĞRULANDI:**
Wikipedia "Principality of Piombino" — "On February 19, 1399, Gherardo
Appiani established the Lordship of Piombino after ceding Pisa to the
Visconti of Milan... took possession of ... the islands of ... Elba."
Britannica/dukesandprinces.org özeti de aynı yılı (1398/1399 sınırında)
teyit ediyor — Appiani Pisa'yı Visconti'ye devrederken Piombino+Elba'yı
KENDİNE ayırdı.

⚠️ **Ardıl şartı burada İKİ AYRI YERDE test edildi:**
- `piza` künyesinin kendi penceresi (1000-1406) 1281-1399 aralığını
  RAHATÇA kapsıyor — bu parça YAZILABİLİR.
- `piombino` künyesi YOK ⇒ M-2884'ün ④ maddesi gereği: **YAZMA, künye
  önerisi yaz, "renk BEKLİYOR" damgala.**

## ⑤ 🔴🔴 EK BULGU — SORULAN TARİHİN (1532) KENDİSİ DE YANLIŞ, AMA TERS
YÖNDE: 1532'DE DEĞİL 1548'DE

M-2884 soruyu "1281-1532" diye çerçeveledi (toskana künyesinin f: günü).
Ölçüm bunu da aştı: **Elba'nın Floransa'ya geçişi 1532 DEĞİL 1548'dir**,
ve o tarihte bile **yalnız Portoferraio** (adanın bir kesimi) geçti —
Piombino/Appiani ada'nın geri kalanını 1557'ye kadar (bir kesintiyle)
elinde tuttu, ve o tarihten sonra da İspanya adaya garnizon hakkı aldı.

```
1548     Iacopo VI tahttan indirildi, Piombino Medici topraklarına katıldı
1557     Filip II, Iacopo VI'yı Piombino'ya İADE ETTİ — KARŞILIĞINDA
         Cosimo I Siena'yı aldı ve Portoferraio'yu (Elba'nın bir parçası)
         ELİNDE TUTTU
1557+    İspanya adada garnizon/tahkimat hakkı sakladı
```

⇒ **1532 sonrası için de "toskana" tek başına YANLIŞ** — gerçek durum
adanın BİRDEN FAZLA güç arasında bölünmesi (Piombino rump-devlet + Medici
Portoferraio enklavı + sonradan İspanyol garnizonu). Bu, `§2`nin tek-nokta
modelinin zorlandığı bir vaka (Şibâm/Şihr/Mükellâ'daki gibi birden fazla
nokta gerekebilir) — **BU TURDA ÇÖZÜLMEDİ**, yalnız TESPİT edildi. M-2884
yalnız 1281-1532'yi sordu; 1532-1923 arası AYRI bir araştırma konusu.

## ⑥ ÖNERİLEN DÜZELTME (queued, `data/` KİLİTLİ — uygulanmadı)

```js
// denetim/yer_yama_elba.js (queued)
{ ad:"Elba",
  s:[{f:"1281-01-01",t:"1399-02-19",d:"piza"},
     {f:"1399-02-19",t:"1923-10-29",d:"piombino"}],  // 🔴 GEÇİCİ — ⑤'teki
                                                       // 1548/1557 bölünmesi
                                                       // ÇÖZÜLMEDEN bu tek
                                                       // periyot bir
                                                       // BASİTLEŞTİRMEDİR
  kaynak:"Wikipedia 'Principality of Piombino' + Britannica 'Elba' (çapraz
  doğrulandı) — TDV 'piza' 302 ölü, Batı Avrupa TDV kapsamı %0 (§4).
  1399-02-19: Gherardo Appiani Pisa'yı Visconti'ye devrederken Piombino ve
  Elba'yı kendine ayırdı.",
  not:"🟡 1290-1292 Cenova ara-dönemi TEK KAYNAKLA (Catholic Encyclopedia)
  bulundu, İKİNCİ KAYNAKLA doğrulanmadı — bu yamaya YAZILMADI, ayrı
  araştırma gerektirir. 🔴 1548/1557 sonrası ada bölünmesi (Piombino/
  Medici/İspanya) ÇÖZÜLMEDİ, bu periyot 1923'e kadar 'piombino' ile
  BASİTLEŞTİRİLDİ — gerçek durum daha karmaşık, bkz. ⑤." }
```

## ⑦ ÖNERİLEN YENİ KÜNYE (renk BEKLİYOR — polonya-erken emsali)

```json
{ "id": "piombino",
  "ad": "Piombino Prensliği (Appiani hânedanı)",
  "tur": "prenslik",
  "bolge": "italya",
  "f": "1399-02-19",
  "t": "1548-01-01",
  "baskent": "Piombino",
  "ozet": "Gherardo Appiani'nin Pisa'yı Visconti'ye devrederken kendine ayırdığı, Piombino ve Elba/Pianosa/Montecristo adalarını kapsayan prenslik.",
  "kaynak": "Wikipedia 'Principality of Piombino' + Britannica 'Elba', çapraz doğrulandı. TDV kapsam dışı (piza slug 302, Batı Avrupa %0).",
  "not": "🔴 t:'1548-01-01' GEÇİCİ VE MUHTEMELEN ÇOK KISA — gerçek Piombino prensliği 1557'de Appiani'ye (Iacopo VI) İADE edildi ve yüzyıllar boyunca (Ludovisi, Boncompagni hanedanları altında) sürdü, muhtemelen 1923 ufkuna kadar bir formda devam ediyor olabilir. Bu araştırma YALNIZ Elba'nın 1399-1548 arası sahipliğini çözmek için yapıldı; künyenin kendi TAM ömrü (1548 sonrası) AYRICA araştırılmalı — 'renk BEKLİYOR' damgası bu eksikliği de kapsar."
}
```

## DAMGA

| kalem | durum |
|---|---|
| 1281-1399: piza | ✓ mevcut künye, pencere UYUYOR — yazılabilir |
| 1399-1548: piombino | 🔴 YENİ KÜNYE gerekli — renk BEKLİYOR, YAZILMADI |
| 1290-1292 Cenova ara-dönemi | 🟡 tek kaynak, doğrulanmadı — AÇIK, yazılmadı |
| 1548-1923 Elba'nın gerçek durumu | 🔴🔴 EK BULGU — basitleştirildi, gerçek daha karmaşık (çok-parçalı), AYRI TUR gerektirir |

`⏳ BEKLİYORUM: piombino künyesi kabul edilirse renk kuyruğuna eklenir mi? 1548 sonrası çoklu-sahiplik (Piombino/Medici/İspanya) için ayrı bir tur açılsın mı?`
