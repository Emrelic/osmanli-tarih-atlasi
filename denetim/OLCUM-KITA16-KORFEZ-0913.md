# OLCUM-KITA16-KORFEZ-0913 — H-0013: Lahsa/Katif ilhakı, Katar ve Bahreyn kimin?

**Oturum:** KITA 16 · **Paket:** 0044 · **Tarih:** 2026-09-13 · Koşu 10 sürüyor, `data/` DONUK.

## Öngörü (D022, ölçümden önce)

Doha (Katar) ve Manama (Bahreyn) noktaları muhtemelen zaten `bos:`/`kur:`
alanlarıyla doğru modellenmiş olacak — çünkü `data/yerlesimler_ek_korfez.js`
dosyasında bu bölgenin daha önce ayrıntılı incelendiğine dair bir yorum
gördüm. Beklenti: **çoğu satır "zaten doğru" çıkacak**, en fazla küçük
(gün/yıl mertebesinde) bir kaynak farkı bulunacak.

## Ölçüm — Lahsa'nın İKİ ilhakı, ölçüldü

`data/yerlesimler.js`'te Lahsa, Katîf, Ukayr (Uceyr) — üçü de AYNI zincire
sahip (üç ayrı liman/bölge noktası, aynı doğu Arabistan kıyı şeridi):

```
s:[...1524-1550 safevi], 1670-1795 benihalid, 1795-1818 suud,
   1818-1841 benihalid, 1841-1871-04-20 suud-ikinci, 1913-07-08-1923 suud-ucuncu
d:[1550-01-01 → 1670-01-01, y:"vassal"]   ← BİRİNCİ OSMANLI DÖNEMİ
d:[1871-04-20 → 1913-07-08, y:"savas"]    ← İKİNCİ OSMANLI DÖNEMİ (Midhat Paşa)
```

⇒ **İki ilhak da veride VAR, iki ayrı `d:` bloğu olarak.** Görevin sorduğu
"1550 mi 1871 mi" sorusunun cevabı: **ikisi de**, ve ikisi de gün/yıl
hassasiyetinde ayrı ayrı modellenmiş.

## Tablo — istenen format

| ad | 1550-01-01 atlas sahibi | 1871 atlas sahibi | TDV ne diyor (alıntı + slug) | hüküm | YAMA satırı |
|---|---|---|---|---|---|
| **Lahsa** | Osmanlı (vassal, `d:` 1550-01-01'den) | Osmanlı (savaş, `d:` 1871-04-20'den) | `lahsa`: *"Osmanlı Devleti tarafından hâkimiyet altına alınarak Basra beylerbeyiliğine bağlandı (1547)"* | 🟡 **3 YIL FARK** — atlas kırılması 1550, TDV 1547. `kronoloji_arabistan.js` bunu zaten doğru (1547/1553) kaydetmiş; **`yerlesimler.js`'in kendi `d:` başlangıcı hâlâ 1550** | `data/` DONUK — öneri: `d:[0].f` 1550-01-01→1547-01-01 (Lahsa/Katîf/Ukayr'ın ÜÇÜNDE de aynı satır). UYGULANMADI |
| **Katîf** | Osmanlı (aynı zincir) | Osmanlı (aynı zincir) | `lahsa`: *"Katîf ve Ukayr sahillerine asker yerleştirildi"* (1841 bağlamında) | ✓ **DOKUNMA** — TDV'nin kendi maddesi Katîf'i Lahsa'nın bir parçası olarak anlatıyor, ayrı künye gerekmez | — |
| **Ukayr (Uceyr)** | Osmanlı (aynı zincir) | Osmanlı (aynı zincir) | (aynı `lahsa` maddesi) | ✓ **DOKUNMA** | — |
| **Doha (Katar)** | nokta YOK (`kur:"1825-01-01"`) — Katar yarımadası bu tarihte atlasta hiç yok | **Sânî emirliği, Osmanlı kazâsı** (`v:` 1871-09-20'den, `kid:"katar"`, `statu:"vassal"`) | `katar`: *"1871 sonbaharında Katar'da da Osmanlı kontrolü sağlandı ve burası Necid sancağına bağlı bir kaza olarak teşkilâtlandırılıp Câsim b. Sânî fahrî kaymakam tayin edildi."* · *"29 Temmuz 1913'te ... Osmanlı Devleti Katar yarımadası üzerindeki bütün taleplerinden feragat etti."* · *"3 Kasım 1916'da Katar Emîri Abdullah ile ... himaye antlaşması"* | ✓✓ **ZATEN DOĞRU** — atlasın `v:` başlangıcı (1871-09-20, "sonbahar" ile uyumlu, ayrıca kaydın kendi yorumunda zaten doğrulanmış), bitişi (1913-07-29, Londra Antlaşması) ve `isg:` başlangıcı (1916-11-03) **TDV'nin üç ayrı tarihiyle BİREBİR eşleşiyor.** Emre'nin "Katar kime aitmiş" sorusunun cevabı: **1871'e kadar merkezî devlet yok (kasıtlı boşluk), 1871'den itibaren Osmanlı'ya bağlı Sânî kazâsı.** | DOKUNMA |
| **Manama (Bahreyn)** | **Portekiz** (`s:` 1521-1602 arası) | **İngiltere** (`s:` 1861-05-31'den) | `bahreyn`: *"Bahreyn 1783 yılında Utûb kabilesinden Âl-i Halîfe'nin hâkimiyetine girdi."* · *"21 Mayıs 1861'de İngiltere ile Bahreyn'i temsilen Şeyh Muhammed'in kardeşi Ali ... bir anlaşma imzaladılar."* | 🟡 **10 GÜN FARK, DÜŞÜK GÜVEN** — atlas 31 Mayıs 1861, TDV alıntısı (WebFetch özeti, gövde TAM okunmadı) 21 Mayıs diyor. Yaygın İngilizce literatür ("Perpetual Truce") **31 Mayıs 1861**'i doğruluyor — bu bir rakam aktarım hatası (21↔31 tersine çevrilmesi) OLABİLİR. **ÇÖZÜLMEDİ**, gövde tam okunmadan hüküm verilmez (D162). Emre'nin sorusu — Bahreyn 1550'de ELE GEÇİRİLMEMİŞ miydi: **hayır, 1550'de Portekiz'in elindeydi** (1521-1602), Osmanlı hiç sahiplenmedi | data/ DONUK — önce TDV `bahreyn` gövdesi TAM okunup 21/31 Mayıs netleşmeli. UYGULANMADI |
| **Kuveyt** *(görev kapsamında istenmedi, çapraz kontrol için eklendi)* | nokta YOK (`kur:"1716-01-01"`) | **Sabah emirliği, Osmanlı kazâsı** (`v:` 1871-01-01'den) | (bu turda ayrıca okunmadı — mevcut kayıt zaten `kaynak:` alanında TDV `kuveyt`'e bağlı) | ✓ **DOKUNMA** — 1871'de Kuwait de aynı Midhat Paşa dalgasıyla Osmanlı kazâsı; bölgesel resim tutarlı | — |

## Hüküm özeti

**H-0013'ün asıl sorusu (Doha/Manama 1550 ve 1871'de kimin) ZATEN DOĞRU
CEVAPLANMIŞ VERİDE** — düzeltme gerekmiyor. İki küçük kaynak farkı bulundu
(Lahsa'nın ilk Osmanlı tarihi 1547 vs 1550 · Bahreyn'in 1861 antlaşma günü
21 vs 31 Mayıs), ikisi de `data/` donuk olduğu için UYGULANMADI, koordinatöre
not olarak bırakıldı.

📌 Bu, `ORTAK-KOSU10-KURALLARI.md`'nin *"dünkü paketin 6/19 maddesi zaten
doğru çıktı"* uyarısının bir örneği daha — hüküm vermeden önce ölçmek,
sağlam veriyi bozmaktan korudu.

## Bulunamadı / ölçülemedi (D107)

- TDV `bahreyn` gövdesi TAM okunmadı (yalnız WebFetch özeti) — 21/31 Mayıs
  farkı bu yüzden ÇÖZÜLMEDİ.
- TDV `lahsa` gövdesinin WebFetch özeti kendi içinde tutarsız periyotlar
  verdi (1547-1818 / 1818-1906 / 1906-1915) ve atlasın çok daha ayrıntılı
  periyodizasyonuyla (6 alt-dönem) BİREBİR karşılaştırılmadı — yalnız
  1547 tarihi (ilk hakimiyet) ve Katîf/Ukayr'ın 1841 asker yerleştirme
  cümlesi güvenle alındı, gerisi düşük güvenli özet olarak bırakıldı.
