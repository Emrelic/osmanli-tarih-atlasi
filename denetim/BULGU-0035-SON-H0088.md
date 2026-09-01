# H-0088 — "Osmanlı haritası içinde farklı kırmızı tonda, SAFEVÎ yazan bölgeler"

**Oturum:** OPUS HAZIR KITA 103 · 1 Eylül 2026 · koordinatör 1.MURAT (M-1903)
**Paket:** parti-emrelic-0035 · son üçte bir · madde H-0088 (`olculecek`)

---

## HÜKÜM: `cozuldu` DEĞİL — **`senin-kararin`**

Kusur **gerçek** ve **ölçüldü**; çaresi de yazıldı. Ama çareyi uygulamak
**koordinatörün kararını gerektiriyor**, çünkü aynı üç noktaya dokunan
**ikinci bir yama zaten kuyrukta** ve ikisi birbirini kilitliyor. Ayrıntı §4.

---

## ① EMRE'NİN SORUSU

> *"bu osmanlı haritası içinde görülen farklı kırmızı tonda ve safevi yazan
> bölgeler hata mı yoksa bir tarihi gerçeğe dayanıyor mu bunun sebebi nedir"*

Dört ekran görüntüsü, **dördü de aynı gün**: `1590-03-21`, madde
*"Ferhad Paşa Antlaşması — doğuda en geniş sınırlar"*.

| görsel | kutu | görülen |
|---|---|---|
| H-0088-1 · -4 | 32,85–36,65K / 43,74–48,40D | Hânekîn ile Kirmanşah arasında mor "SAFEVÎ İRAN" kaması |
| H-0088-2 · -3 | 39,42–41,49K / 42,27–46,17D | Kars ile Revan arasında mor "SAFEVÎ İRAN" dili |

## ② CEVAP: **HATA.** Tarihî gerçeğe dayanmıyor.

Ve mekanizması `CLAUDE.md §2`nin emilmesi **değil** — o, noktası olmayan
bölgenin komşuya emilmesidir. Buradaki **KAPSAMA BOŞLUĞU**: nokta *var*,
sahibi *yanlış*.

1590 Ferhad Paşa (İstanbul) Antlaşması ile Osmanlı'ya geçen kuşakta
`d:` dönemi açılan nokta sayısı — ölçüldü, `girdi.yukle()` ile:

```
1590-03-21 Osmanlı dönemi AÇILAN nokta:  5
   Kirmanşah 47,06 · Luristan 48,36 · Nihâvend 48,38 · Hemedan 48,52 · Burûcird 48,75
```

**Beşi de 47,0°–48,8°D arasında, tek bir dar koridorda.** Koridorun
batısında ve kuzeyinde kalan noktalara dokunulmamış; eski `safevi`
dönemleri yerinde durmuş. Kendi gövdesinden kopan nokta, peteğiyle
birlikte Osmanlı gövdesinin **içinde bir ada** olarak çiziliyor.

### Ölçüm — 1590-03-21 kesiti

```
Batı İran kutusu  (32,0–39,5K / 43,5–50,5D)   76 nokta
   OSMANLI 46 · safevi 26 · gilan-kiya 2 · (2 nokta `kur:` ile henüz yok)
Kuzey kutu        (39,2–41,6K / 42,0–46,4D)   18 nokta
```

**Kopuk üç nokta** (en yakın 6 komşusunun kaçı OSMANLI):

| nokta | konum | 6 komşunun | en yakın AYNI sahipli |
|---|---|---|---|
| **Gümrü (Aleksandropol)** | 40,79 / 43,85 | **5'i OSMANLI** | 1/6 — Kars ile Revan'ın *arasında* |
| **Eçmiyadzin** | 40,16 / 44,29 | 4'ü OSMANLI | Revan'a **13 km** |
| **Kasr-ı Şîrîn** | 34,52 / 45,58 | **5'i OSMANLI** | **124 km** (Merîvan) |

> ⚠️ Katı ölçüt (6/6 komşu Osmanlı) yalnız **Başkale**'yi işaretliyor.
> Ama Başkale'nin kaydı `s: safevi 1514-09-06→1639-05-17` + `d: 1639-05-17→`
> diye **tarihli ve kasıtlı** yazılmış (Çaldıran → Kasrışîrin). O bir
> gözden kaçma değil, bir **hüküm**. Dokunmadım — §5'te soruyorum.

### Kusur tek güne ait değil — beş kesitte ölçüldü

```
tarih        Revan     Gümrü/Eçmiyadzin   Kasr-ı Şîrîn / Kirmanşah
1590-03-21   OSMANLI   safevi  🔴         safevi 🔴 / OSMANLI
1600-01-01   OSMANLI   safevi  🔴         safevi 🔴 / OSMANLI
1635-10-01   OSMANLI   safevi  🔴         safevi   / safevi    ✓ doğru
1730-01-01   OSMANLI   safevi  🔴         OSMANLI  / OSMANLI   ✓ doğru
1870-01-01   rusya     rusya   ✓ doğru    kacar    / kacar     ✓ doğru
```

📌 **1870 satırı kusursuz** — yani kayıtların geç dönemi doğru yazılmış.
Kusur *yalnız* Revan'ın Osmanlı pencerelerinde doğuyor.

## ③ NİÇİN "TARİHÎ GERÇEK" DEĞİL — kaynak

**TDV İslâm Ansiklopedisi, "REVAN"** (`islamansiklopedisi.org.tr/revan`):
- Revan **"991 Ramazanı başlarında (Eylül 1583 ortaları)"** Ferhad Paşa
  tarafından alındı; kırk beş günde sekiz kuleli iç kale yapıldı.
- **1590'da Osmanlı tahriri**: "403 hâne", altı mahalle, vilâyet
  **"yirmi yedi"** idarî birime bölünmüş.
- 1603'te Şah Abbas yedi ay kuşatıp aldı; Osmanlılar **1013/1604**'te geri aldı.

⇒ 1590'da Osmanlı o vilâyette **vergi sayımı yapıyordu.** Gümrü, Osmanlı
Kars (40,60/43,09) ile Osmanlı Revan (40,18/44,52) arasında; Eçmiyadzin
Revan'a 13 km. İkisinin de Safevî olması coğrafî olarak imkânsızdır.

**Kasr-ı Şîrîn** için TDV bu tanecikte susuyor (`kasrisirin` sorgusu yalnız
**1639 antlaşması** maddesini veriyor; yerleşimin müstakil maddesi yok —
`§4` taneciklik boşluğu). Dayanak verinin **kendi iç tutarlılığı**:

```
Hânekîn     26 km batıda   d:[{1534-12-04 → 1623-11-28}]   OSMANLI
Kirmanşah  137 km doğuda   d:[{1590-03-21 → 1603-10-21}]   OSMANLI
```
İkisi Bağdat–Kirmanşah yolunun uçlarıdır; Kasr-ı Şîrîn tam ortasındadır.

## ④ 🔴 ÇARE YAZILDI, SONRA **GERİ ÇEKİLDİ** — ve sebebi ölçüldü

`data/yer_yama_ok103.js` yazıldı (3 kayıt, `window.YER_YAMA_OK103`).
Sonra uygulayıcı **kuru koşuldu** ve şunu bastı:

```
[!] ATLANAN — sebebiyle:
  Eçmiyadzin              ÇAKIŞMA: yer_yama_kafkas.js vs yer_yama_ok103.js — KARAR GEREK
  Gümrü (Aleksandropol)   ÇAKIŞMA: yer_yama_kafkas.js vs yer_yama_ok103.js — KARAR GEREK
  Kasr-ı Şîrîn            ÇAKIŞMA: yer_yama_kafkas.js vs yer_yama_ok103.js — KARAR GEREK
```

**Dosyamı geçici olarak kaldırıp tekrar ölçtüm** — tek değişkenli deney:

```
dosyam VARKEN   üçü de ATLANIYOR
dosyam YOKKEN   üçü de UYGULANIYOR:
   Eçmiyadzin              → yerlesimler_ek26.js   d+s+v+kaynak
   Gümrü (Aleksandropol)   → yerlesimler_ek26.js   d+s+v+kaynak
   Kasr-ı Şîrîn            → yerlesimler.js        d+s+v+kaynak
```

⇒ **Kusuru düzeltmek için yazdığım dosya, kuyrukta bekleyen ÜÇ YAMAYI
BLOKLUYORDU.** Dosya `data/`den kaldırıldı; kayıtlar §6'da duruyor.

📌 Ve iki yama **çelişmiyor, tamamlıyor**:
```
yer_yama_kafkas.js   `s:` zincirini onarıyor (ilhanli/akkoyunlu hayaleti,
                     safevî başlangıcı 1534-01-01 → 1514-09-06, rusya 1828)
                     ve Gümrü/Eçmiyadzin için d:[] BIRAKIYOR
bu oturum            `d:` Osmanlı penceresini ekliyor (1583-1604 …)
```
🔴 **Ve kafkas yamasının yazarı tam bu soruyu AÇIK BIRAKMIŞ:**
> *"Eçmiyadzin ↔ Revan arası 19 km, ama Revan safevî'ye 1501-07-01'de,
> Eçmiyadzin 1534-01-01'de geçiyor — 33 YIL fark, 19 km'de. … ÖLÇTÜM,
> hüküm vermedim. ⇒ KOORDİNATÖRE BIRAKIYORUM."*

Bu belge o sorunun cevabıdır. Ama **iki dosya tek ada dokunamıyor**, ve
hangisinin kazanacağına araç değil koordinatör karar verir.

## ⑤ KOORDİNATÖRE ÜÇ SORU

1. **Birleştirme kimin?** Aşağıdaki üç `d:` dizisi `yer_yama_kafkas.js`in
   kendi kayıtlarına eklenirse tek dosya tek ada dokunur ve çakışma
   kalkar. O dosya benim değil — **sen mi ekleyeceksin, kafkas oturumu mu?**
2. **Sıra ne olsun?** Alternatif: önce kafkas uygulansın (`--yaz`), sonra
   kafkas'ın o üç kaydı arşive alınsın, sonra benimki uygulansın. İki
   turluk iş ama kimse kimsenin dosyasına yazmaz.
3. **Başkale?** `s: safevi 1514-09-06→1639-05-17` **kasıtlı** yazılmış ama
   1590'da altı komşusunun altısı da Osmanlı — yani haritada ada. Bu bir
   hüküm mü, yoksa gözden kaçmış bir kalem mi? **Ölçtüm, hüküm vermedim.**

## ⑥ HAZIR KAYITLAR — uygulanmayı bekliyor

Kırılma günü disiplini **ölçüldü**: kullanılan sekiz günün **sekizi de**
veride zaten kırılma günü ⇒ **yeni gün doğurulmadı, sıfır.**

```
1583-06-01  1 (Revan)        1604-06-08  1 (Revan)
1635-08-08  1 (Revan)        1636-04-01  1 (Revan)
1724-09-28  2 (Revan·Hoy)    1735-06-19  8 (Revan·Gence·Tiflis…)
1590-03-21  5 (Kirmanşah·Hemedan·Luristan·Nihâvend·Burûcird)
1603-10-21 18 (Culfa·Hoy·Hemedan·Ahar…)
```
Değişmez 2 kırılmaları **güne** göre kovalar; var olan bir güne ikinci
nokta eklemek yeni kırılma doğurmaz.
⚠️ **ÖLÇMEDİĞİM:** bu günlerin ±30 gününde madde olup olmadığını ayrıca
ölçmedim. Kendi yazdığım ayrıştırıcı 1223 maddenin yalnız **40**'ını gördü
— yani **yanlıştı**, ve yanlış sayı yazmaktansa *ölçmedim* yazıyorum.
Yukarıdaki gerekçe o ölçüme ihtiyaç duymuyor: günler yeni değil.

```js
// Gümrü (Aleksandropol) — GÜVEN: 1583-1604 KESİN · ötekiler ORTA
d: [{ f:"1583-06-01", t:"1604-06-08", y:"kusatma" },
    { f:"1635-08-08", t:"1636-04-01", y:"kusatma" },
    { f:"1724-09-28", t:"1735-06-19", y:"kusatma" }]

// Eçmiyadzin — aynı gerekçe, Revan'a 13 km
d: [{ f:"1583-06-01", t:"1604-06-08", y:"kusatma" },
    { f:"1635-08-08", t:"1636-04-01", y:"kusatma" },
    { f:"1724-09-28", t:"1735-06-19", y:"kusatma" }]

// Kasr-ı Şîrîn — GÜVEN: YÜKSEK. YALNIZ bu pencere; öncesi kasten boş
// (1590 öncesi Kirmanşah da Safevî ⇒ nokta kendi gövdesine bağlı, ada DEĞİL)
d: [{ f:"1590-03-21", t:"1603-10-21", y:"antlasma" }]
```

`kaynak:` alanları — TDV `revan` alıntısı Gümrü/Eçmiyadzin için;
Kasr-ı Şîrîn için `"bulunamadı — TDV bu taneciği kapsamıyor"` + iç
tutarlılık gerekçesi. Tam metinleri koordinatöre ayrıca verilir.

## ⑦ YAN BULGU — kalemimin dışında, kayda geçiyorum

`arac/yama_uygula.js`in mükerrer anahtarı `JSON.stringify([y.dosya, y.t, y.b])`.
`yer_yama_*` **sahiplik** kayıtlarında bu üç alanın **üçü de yok**
(`grep -c "dosya:"` → iran 0 · ferhatpasa 0 · kafkas 0), yani hepsi
`[null,null,null]` anahtarına düşüyor ve **1594 kayıt** "MÜKERRER, AYNI
HÜKÜM — ZARARSIZ" diye raporlanıyor. Sahiplik ailesinde o mükerrer
denetimi **fiilen kör.** Gerçek uygulayıcı `arac/_sahiplik_uygula.py`
ve o ada göre doğru eşleştiriyor — yani **zarar yok, ama rapor yanıltıcı.**
`arac/` kilitli olduğu için dokunmadım; ölçüm burada duruyor.
