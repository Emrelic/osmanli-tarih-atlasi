# KRONO-ATLANTIK-B-0929 — YERLEŞİM ÖNERİLERİ (Oturum 0'a, koşuya biriktirilmek üzere)

`data/yerlesimler*.js`e DOKUNULMADI (ORTAK §1). Hepsi uygulanabilir biçimde.

## Y-1 🔴 Irak: dört yerleşim Bağdat'ın düştüğü GÜN İngiliz'e geçmiş görünüyor — yanlış

Senkron defterinde B kolunun `acik` kovasındaki 19 Osmanlı→ingiltere kaydından dördü:

| Dosya · satır | Yerleşim | Mevcut `s:` | Önerilen |
|---|---|---|---|
| `yerlesimler.js:1872` | Erbil | `{f:"1917-03-11",t:"1921-08-23",d:"ingiltere"}` | `f:"1918-10-30"` (öncesi `d:` Osmanlı'ya) |
| `yerlesimler.js:1873` | Kifri | aynı | `f:` ≤ `1918-10-30` — kesin gün **bulunamadı** |
| `yerlesimler.js:1875` | Tuz Hurmatu | aynı | `f:` ≤ `1918-10-30` — kesin gün **bulunamadı** |
| `yerlesimler.js:1876` | Halepçe | `{f:"1917-03-11",t:"1923-10-29",d:"ingiltere"}` | `f:"1918-10-30"` |

**Kaynak ve gerekçe:**
- TDV `kutulamare`: Bağdat **Mart 1917**'de İngilizlerin eline geçti. Kuzeydeki kazalar bu tarihte düşmedi.
- TDV `kerkuk`: *"28 Ekim 1918’de başlayan İngiliz hücumları üzerine Osmanlı birlikleri burayı boşaltıp Altınköprü’ye çekildiler."* Yani Ekim 1918 sonuna kadar Kerkük Osmanlı'daydı. Atlasın kendi Kerkük ve Şehrizor satırları da `1918-10-30`'u kullanıyor.
- **Erbil, Altınköprü'nün kuzeyindedir.** Osmanlı ordusunun Ekim 1918'de çekildiği hattın gerisinde kalan bir şehir Mart 1917'de İngiliz'e geçmiş olamaz. Bu bir **çıkarımdır** (kaynak halkası değil, CLAUDE.md §4 bayrak kuralı). Ama atlastaki tarih kesinlikle yanlıştır.
- **Halepçe'nin `m:` alanı "Şehrizor"dur, Şehrizor ise `1918-10-30`'da geçiyor.** Bu, atlasın kendi içindeki bir çelişkidir.
- Kifri ve Tuz Hurmatu, Kerkük'ün güneyinde ve Bağdat'a daha yakındır. 1917 sonu ile 1918 ilkbaharı arasında daha erken işgal edilmiş olabilirler. Bu günlerin kaynağı bu oturumda **bulunamadı**. En azından `1917-03-11`in yanlış olduğu kesindir.
- ⚠️ Ters yön (CLAUDE.md §3.5): düzeltme bu dört noktayı 1917-1918 arası Osmanlı'ya geri verir. Komşu Kerkük zaten Osmanlı'dadır, yeni bir delik açılmaz. Koşudan sonra 8a/8b ölçülmeli.

## Y-2 Hollanda 1795-1813: tarihte üç devir var, haritada hiçbiri yok (b sınıfı)

Senkron defterinde Avrupa'da `hollanda` kaynaklı hiçbir 1795/1806/1810/1813 kırılması yok. Hollanda noktaları 1581-1923 boyunca kesintisiz `hollanda` boyalı. Yeni `kronoloji_cok_hollanda.js` maddeleri (1795-05-16, 1806-03-11, 1810-07-09, 1813-11-30) bu devirleri anlatıyor, ama harita onları göstermiyor.

Öneri, **künye açıldıktan sonra** (bkz. `-KUNYE.md` K-2), bütün Hollanda noktaları için (Amsterdam · Rotterdam · Utrecht · Groningen · Leeuwarden · Middelburg · Nijmegen · Maastricht):
```
{f:"…",         t:"1795-01-19", d:"hollanda"}
{f:"1795-01-19", t:"1810-07-09", d:"batav-cumhuriyeti"}     // Batav Cum. + Holland Krallığı
{f:"1810-07-09", t:"1813-11-30", d:"fransa-cumhuriyet"}     // ilhak (Parlement.com: 9 juli 1810)
{f:"1813-11-30", t:"1923-10-29", d:"hollanda"}
```
Kaynaklar: Parlement.com 'Bestuur in de Bataafs-Franse tijd' (18 Ocak 1795 kaçış, 9 Temmuz 1810 ilhak) · Canon van Nederland kalender 1813-11-30.
⚠️ `1795-01-19` Amsterdam'ın alınma günüdür (mevcut `kronoloji_hollanda.js` maddesi). Fransız işgali Aralık 1794'te başlamıştı (Parlement.com). Bu, noktadan noktaya değişir. Uygulayan tek tek ölçmelidir.
⚠️ Künye ve renk (`renkler.py`) olmadan bu satırlar yazılırsa HARİTA DELİĞİ doğar. Önce künye.

## Y-3 Tanca 1684-02-05: yerleşim gününün kaynağı yok

`yerlesimler.js:1213` Tanca: `{f:"1662-01-30",t:"1684-02-05",d:"ingiltere"}`. TDV `tanca` ve `mevlay-ismail` yalnız **1095/1684** verir. `kronoloji_cok_fas.js` maddesi `1684-01-01`dir, yani 35 gün fark var ve ±30 penceresi dışında kalıyor. Bu yüzden kırılma B kolunun `acik` kovasında duruyor.
Öneri: gün için kaynak bulunamadı. Ya yerleşim sınırı `1684-01-01`e çekilmeli (CLAUDE.md §4: yıl biliniyorsa gün uydurulmaz), ya da günün kaynağı bulunmalı. Hüküm Oturum 0'da. Madde MAGRIB'in dosyasında; bende yazılmadı.
