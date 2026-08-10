# TDV TARİH TURU — ilerleme

**Oturum:** TDV TARİH TURU · araştırmacı/çapraz · Opus
**Şartname:** `oturumlar/TDV-TARIH-TURU.md`
**Rapor:** `denetim/TDV-TARIH.md`
**Tarih:** 10 Ağustos 2026

---

## Durum: **TESLİM EDİLDİ**

```
12 soru  →  🟢 NET 9  ·  🟡 TARTIŞMALI 3  ·  ⚪ ÖLÇMEDİM 1  ·  🟢 zaten KAPANMIŞ 1
```

Şartname 11 kalem diyordu; `sebep:TARİH` etiketi tam 11 ama `p3/H-0008` =
`p2/H-0025` (10 ayrı soru) ve İlhanlı üçlüsü `hayalet` etiketli (11'in dışında).
Koordinatör onayıyla **12 soru** araştırıldı.

## Ölçüm tabanı — devralınmadı

```
başlangıç   yerleşim 2308 · künye 392 · kronoloji 1188 · girdi dosyası 36
```
Şartnamedeki iki sayı düzeltildi: künye **390 → 392**, kronoloji **1161 → 1188**.
Kronoloji farkı bir kalemi **kapatmış** (Kalem 7).

## Yapılanlar

- [x] `CLAUDE.md` + şartname + `denetim/KUTU-BULGULAR.md` okundu
- [x] Kendi ölçüm tabanı kuruldu (`arac/girdi.py` içe aktarılarak — regex yazılmadı)
- [x] 60 TDV slugu HTTP'den geçirildi · 26 madde gövdesi **okundu**
- [x] 12 kalem araştırıldı, her biri **tam alıntıyla** raporlandı
- [x] Her önerinin kırılma günü **çekirdekte var mı** ölçüldü (`§11` kova dersi)
- [x] Her önerinin ±30 gününde **kronoloji maddesi var mı** ölçüldü (Değişmez 2)
- [x] `denetim/TDV-TARIH.md` yazıldı
- [x] Koordinatöre kalem kalem bildirildi

## Yazdığım dosyalar

```
denetim/TDV-TARIH.md                (bu turun teslimi)
oturumlar/TDV-TARIH-ILERLEME.md     (bu dosya)
```
**Veriye, `arac/*`ye, `js/*`ye, kök `*.md`ye DOKUNULMADI.** Üretim koşarken
`arac/` kilidine uyuldu.

## Koordinatöre açık bırakılan kararlar

1. **Bağdat** — Ahmed Celâyir'in 1393 sonrası dönüş yılı TDV'de **yok**.
   Önerim: dönüşü hiç modelleme (yanlış gün yazmaktansa).
2. **Sivrihisar** — TAM sürüm (4 yeni madde) mü, UCUZ sürüm (yalnız sahiplik,
   0 yeni madde) mü. Önerim: UCUZ.
3. **Tuzla** — TDV gün değil **aralık** veriyor (872/1467-68 … 1474 Nisanı).
   Önerim: `1468-01-01`, "yıl beyanı" damgasıyla.
4. **Arapkir** — TDV bu taneciklikte konuşmuyor; Divriği-Malatya paketine
   dahil edilsin mi?
5. **Ankara** — İlhanlı tâbiiyetinin (`v:`) veri modelinde karşılığı var mı?

## Sırada (kapsam açılırsa)

```
· `ahilik` · `ahi-evran` · `sahib-ataogullari` gövdeleri (HTTP 200, okunmadı)
· `anadolu-selcuklulari` · `mesud-ii` → 1297/1300/1308 üçlemesinin sınanması
· Eflak'ın 1281-1330 arası sahibi (§3.5.1 iki uç)
```
