# NOKTA KUTU DEFTERİ — hangi oturum hangi COĞRAFÎ KUTUDA çalışıyor

> Tutan: koordinatör (1.MURAT). **Açılış: 2 Eylül 2026** — ve sebebi
> ölçülmüş bir çakışma.

## 🔴 NİÇİN VAR — DOSYA SAHİPLİĞİ NOKTA İŞİNDE YETMİYOR

`CLAUDE.md §7` dosya sahipliğini koruyor: her dosyanın tek sahibi var,
iki oturum aynı dosyaya yazmaz. **Nokta işinde bu yetmiyor**, çünkü iki
oturum **ayrı dosyalara** yazarken **aynı coğrafyaya** nokta koyabilir.

**Vaka (2 Eylül 2026):** iki Opus oturumu birbirinden habersiz **aynı
Hicaz kolunu** işledi.
```
Hayber   ad AYNI, 0,21 km ·  Ulâ   0,13 km
iki kayıt neredeyse BİREBİR: aynı koordinat (4 ondalık), aynı dönem
zinciri, örtüşen kaynaklar
```
🔴 **VE BU BİR KOŞU ÖLDÜRÜCÜSÜDÜR**, mükerrer nokta değil:
`arac/girdi.py:1139` — `yukle()` ad çakışmasında **`ValueError` ATAR.**
⇒ İki dosya birlikte bağlansaydı **motor hiç başlamazdı.**
Yakalayan: PAKET-0033, kendi kapısında, bağlamadan önce.

📌 Ve `el-Ulâ` aynı gece **üçüncü** kez çıktı (ok101↔ok102, sonra
ok102↔ok107, şimdi ok101↔0033). Üç ayrı çift, tek sebep: **kimse kimin
nerede çalıştığını bilmiyordu.**

## KURAL — nokta kolu alan oturum ÖNCE KUTUSUNU YAZAR

```
py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "
KUTU: <bölge adı> · <güney>-<kuzey>K / <batı>-<doğu>D
"
```
Ve koordinatör onu **buraya** işler. **Kutusu yazılmamış nokta kolu
açılmaz.**

⚠️ Kutu **kaba** olabilir (bir derece hassasiyet yeter) — amaç kesin
sınır değil **çakışmayı görünür kılmak.**

## 🔴 VE YAZMADAN ÖNCE ÜÇ SINAV — ikisi zaten vardı, üçüncüsü yeni
```
① 3 KM        yeni noktanın 3 km'sinde başka nokta var mı
              — bağlı evrende VE kuyrukta bekleyen dosyalarda
② AD          aynı ad başka bir dosyada var mı
              🔴 `girdi.yukle` bunda ValueError ATAR — koşu başlamaz
③ KUTU  🆕    senin kutun başka bir oturumunkiyle örtüşüyor mu
```
Araç: `py arac/_baglama_onsinav.py <dosyan.js>` — ① ve ②'yi ölçer.
③ bu defterden okunur.

---

## DEFTER — yalnız BİLDİRİLMİŞ kutular

| oturum | dosya | kutu | durum |
|---|---|---|---|
| PAKET-0035-A | `yerlesimler_ok101.js` | Hicaz · **Tebük-Medine hac yolu** | bağlı |
| PAKET-0035-B | `yerlesimler_ok102.js` | Hicaz · **Şam hac yolu** (Müdevvere · Medâin-i Sâlih · el-Ulâ) | 🔴 ok107 ile mükerrer, çözülüyor |
| OPUS HAZIR KITA 104 | `yerlesimler_ok104.js` | Arnavutluk · Yemen · Hasankeyf | bağlı |
| OPUS HAZIR KITA 106 | `yerlesimler_ok106.js` | Sloboda / Kırım hattı (İzyum · Yenikale · Çuguyev) | bağlı |
| OPUS HAZIR KITA 107 | `yerlesimler_ok107.js` | Orta Asya · Cizre-Midyat · **Hicaz (Ulâ)** | 🔴 ok102 ile mükerrer |
| OPUS HAZIR KITA 109 | `yerlesimler_ok109.js` | Güney sınır · Musul kazaları · Şırnak | bağlı |
| PAKET-0033 | `yerlesimler_p0033*.js` | **Vardar** · Kanem-Bornu · Orta Asya · Canik | 🆕 bildirildi |
| PAKET-0037 | `yerlesimler_p0037.js` | Besarabya · Podolya (Bolgrad · Kahul · Zamość) | bağlı |

⚠️ **Boş satır bir eksiklik değil, bir ÖLÇÜM BORCUDUR** — ve tahminle
doldurulmaz. Kutusunu bildirmemiş bir oturum bu defterde **yoktur**, ve
onun kutusuyla çakışıp çakışmadığın **bilinmez.**

## 🔴 BİLİNEN ÇAKIŞMALAR — açık
```
el-Ulâ / Ulâ    ok102 ↔ ok107   0,10 km · adlar FARKLI yazılmış
                → sahipleri yatay çözüyor; ikisi de BAĞLANMADI
Hayber · Ulâ    ok101 ↔ PAKET-0033   ad AYNI (Hayber), 0,21 km
                → PAKET-0033 kendi kayıtlarını ÇIKARDI, ok101 kaldı
                🟢 Ve çıkarırken kendisinde olup ötekinde OLMAYAN
                  bilgiyi silmedi, yorumda bıraktı (TDV `vadilkura`:
                  Vâdilkurâ XIII. yy'da harap olmuş, yerini Ulâ'ya
                  bırakmış) — ok101'in kaydı bu gerekçeyi taşımıyor.
```
