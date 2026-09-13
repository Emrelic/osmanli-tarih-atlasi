# OLCUM-KITA16-GORUNTU-0913 — H-0011: "Bu görüntü bozulmalarının sebebi ne, nasıl engelleriz?"

**Oturum:** KITA 16 · **Paket:** 0044 · **Tarih:** 2026-09-13 · Koşu 10 sürüyor, `data/`/`arac/` DONUK.

## Öngörü (D022, ölçümden önce)

Dünkü H-0017 ile aynı sınıf: **kıyı/nehir-delta gibi geometrik olarak
karmaşık bir bölgede düşük nokta yoğunluğu.** Beklenti: her iki kutuda da
1-3 nokta çıkacak (sıfır değil, ama Şattülarab deltası/bataklık gibi
girintili bir kıyıyı temsil etmeye yetmeyecek kadar az) ve ışınsal
çıkıntılar **yarıçap tavanı kırpması** ile açıklanacak.

## Görsellerden çıkarılan kutu/tarih

| Görsel | Tarih | Kutu (lat·lon) | Zoom | Madde | Görünen desen |
|---|---|---|---|---|---|
| `H-0011-1.png` | 1546-01-01 | 27,95–30,30K / 47,20–49,04D | 7,3 | Basra'nın ilhakı ve Basra Körfezi'ne çıkış | Fâv çevresinde kıyı boyunca yoğun ışınsal/kirpi desenli çıkıntılar |
| `H-0011-2.png` | 1546-01-01 | 30,46–31,13K / 46,34–47,71D | 8 | (aynı madde) | Kûrne yakınında Hor el-Hammâr bataklığının batı kenarında ışınsal çıkıntılar + üst üste binen koyu poligon lekeleri |

## Ölçüm — `girdi.yukle()`, `lat`/`lon` alanlarıyla

```
toplam nokta: 3818

H-0011-1 kutusu (27.95–30.30K / 47.20–49.04D):
  nokta sayısı: 2  — Kuveyt (29,376·47,977) · Fâv (29,976·48,472)
  kutu merkezine en yakın nokta: Kuveyt, 31,2 km

H-0011-2 kutusu (30.46–31.13K / 46.34–47.71D):
  nokta sayısı: 1  — Kûrne (31,01·47,443)
  kutu merkezine en yakın nokta: Kûrne, 46,6 km
```

⚠️ **Dünkü koordinatör hatası tekrarlanmadı** — `lat`/`lon` kullanıldı, `y`/`x`
DEĞİL (`ORTAK-KOSU10-KURALLARI.md` uyarısı).

## Sınıflama

Dünkü H-0017'nin iki alt sınıfı (Libya kıyısı: **0** nokta → boşluk DOĞRU,
saf yarıçap kırpması · Mısır Batı Çölü: **6** nokta VAR → yine artefakt) ile
karşılaştırıldığında bu ikisi **ARADA bir üçüncü örnek:**

```
H-0011-1   2 nokta, kutu ÇOK BÜYÜK (≈260×180 km) ve kıyı ÇOK GİRİNTİLİ
           (Şattülarab ağzı, kum setleri, kanallar)
           ⇒ SEYREKLİK + KIYI KARMAŞIKLIĞI aynı anda — noktasızlık DEĞİL
           (Fâv ve Kuveyt var) ama bu kıyı tipini 2 noktayla takip etmek
           yapısal olarak imkânsız.
H-0011-2   1 nokta, kutu KÜÇÜK ama bataklık/nehir şekli DALLANMIŞ
           (Hor el-Hammâr) — tek nokta bir dallanmış su kütlesinin
           sınırını hiçbir biçimde kısıtlayamaz.
```

🔴 **HÜKÜM: İkisi de GEOMETRİ ARTEFAKTI, ama kök sebep dünküyle AYNI DEĞİL —
"nokta yok" değil "nokta VAR AMA kıyı biçimi noktanın karşılayabileceğinden
çok daha karmaşık."** `CLAUDE.md §5`'in `motor_kara` notundaki mekanizma
(`TAVAN_KM` yarıçap tavanı + Chaikin yumuşatma, dar/karmaşık kıyı
şeritlerinde kırılıyor) burada da işliyor — ama tetikleyici sıfır nokta
değil, **nokta başına düşen kıyı uzunluğunun/karmaşıklığının çok büyük
olması.**

⚠️ **ÖLÇEMEDİM (D107):** Işınsal çıkıntının TAM olarak yarıçap tavanı mı,
Chaikin yumuşatma mı, yoksa kendiyle kesişen bir poligon mu olduğu — bunu
ayırmak `arac/uret_petek.py`'yi koşturmayı gerektirir ve motor bu koşu
sürerken (koşu 10) DONUK. Ölçtüğüm tek şey **korelasyon**: her iki kutuda
da düşük nokta yoğunluğu + yüksek kıyı karmaşıklığı bir arada, tıpkı
dünkü H-0017'de olduğu gibi.

## "Nasıl engelleriz?" — çare önerisi (nokta YAZILMADI)

```
① EN DÜŞÜK RİSKLİ   Şattülarab deltası ve Hor el-Hammâr bataklığının
                     kenarlarına birkaç DOLGU noktası eklemek (CLAUDE.md
                     §2'nin "Nefud çölü" emsali gibi — sahiplenmeyen,
                     yalnız peteğin nereye kadar uzanacağını sınırlayan
                     noktalar). Yalnız BU bölgeyi düzeltir, motoru
                     etkilemez, kaynak ve tarih taşımaz (dolgu noktası
                     zaten sahipsiz kalacağı için TDV kaynağı gerekmez).
② DAHA RİSKLİ        `TAVAN_KM`/Chaikin parametresini bu kıyı tipi için
                     ayarlamak — TÜM haritayı etkiler, D038 gereği
                     "düzeltmenin HER DALDA doğru olduğu" sınanmalı,
                     motor koşusu gerektirir. Bu turda ÖNERİLMİYOR.
```
🔴 **Nokta YAZILMADI** — görev talimatı gereği (`data/` donuk + kaynaksız
dolgu noktası bile bir coğrafi karar gerektirir, koordinatör onaylamalı).

## Bulunamadı / ölçülemedi

- Işınsal çıkıntının motor içindeki TAM mekanizması (yarıçap tavanı vs
  Chaikin vs kendiyle kesişen poligon) — `arac/` donuk, ölçülemedi.
- Bu iki kutunun dışında aynı desenin (seyreklik + karmaşık kıyı) başka
  nerelerde tekrarlandığı taranmadı — kapsam dışı bırakıldı, ayrı bir iş.
