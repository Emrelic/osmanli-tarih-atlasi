# KRONO-TUNA-0929 — mevcut maddelerdeki kusurlar (SİLİNMEDİ, DEĞİŞTİRİLMEDİ)

> 29 Eylül 2026 · ORTAK §5.3: hüküm ve düzeltme koordinatörde. Her satırda kaynak ve gerekçe.
> Sınıflar: **Y** = yıl/gün yanlış (kaynak açıkça başka diyor) · **T** = takvim karışması (aynı olay
> Jülyen ve Gregoryen günüyle iki yerde) · **K** = gün kaynaksız (kaynak gün vermiyor, kayıt veriyor) ·
> **S** = kaynağın kendi iç çelişkisi (bildirilir, çözülmez).

## A. Künyelerin kendi (`data/devletler.js` içi) maddeleri

| # | sınıf | kayıt | bugün | kaynak ne diyor | öneri |
|---|---|---|---|---|---|
| A1 | **Y** | `bogdan` kronoloji | `1476-01-10` "Ştefan cel Mare, Vaslui'de Osmanlı'yı yendi" | TDV `bogdan` ve `romanya`: Hadım Süleyman Paşa'nın yenilgisi **1475**. Çekirdek `olaylar_ek5.js` ve `savaslar.js` de `1475-01-10` yazıyor | `1475-01-10` — YIL hatası, künye kendi çekirdeğiyle çelişiyor |
| A2 | **Y?** | `eflak` kronoloji | `1395-05-17` "Rovine" | TDV `eflak`: *"Rovine'deki çetin savaşta (1394)"* | TDV esas (CLAUDE.md §4) ⇒ 1394; ama Batı literatürü 17 Mayıs 1395 verir — gün hangi kaynaktan geldiği bilinmiyor. Ölçülsün |
| A3 | **K** | `bogdan` kronoloji | `1512-01-01` "Osmanlı vasalı statüsü kesinleşti" | TDV `bogdan`: haraç **Eylül 1455** (Petru Aron); TDV `romanya`: İstefan **1484**'te haraçgüzârlığı kabul etti. 1512 TDV'de YOK | kaynak sorulsun; bu pakette 1455 ve 1484 ayrı maddeler olarak yazıldı |
| A4 | **T** | `romanya` kronoloji | `1877-05-21` bağımsızlık ilanı | TDV `romanya`: *"9 Mayıs 1877 tarihinde bağımsızlığını ilân etti"* (Romanya o gün Jülyen kullanıyordu; 21 Mayıs Gregoryen karşılığı) | Atlas geleneği Jülyen + TDV esas ⇒ `1877-05-09`. VERI-YAPISI takvim kuralı |
| A5 | **S** | `eflak`/`bogdan`/`romanya` | `1859-01-24` birleşme | TDV `bogdan`: Cuza *"5 Şubat 1859'da … Boğdan prensliğine seçilen … 24 Şubat günü Eflak'ta da seçilmiş"*; TDV `eflak` yalnız *"1859'da"* | TDV iki günü karıştırmış görünüyor (künyenin 24 Ocak'ı Eflak seçiminin Jülyen günüyle uyuşur); künyeye dokunulmasın, TDV çelişkisi kayda geçsin |
| A6 | **?** | `erdel` kronoloji | `1690-12-04` Diploma Leopoldinum | KRONO-ORTA-AVRUPA-0929 (M-5432) aynı belgeye `1691-12-04` yazıyor | bu pakette kaynakla SINANMADI; ORTA-AVRUPA'nın kaynağı sorulsun (M-5434'te iletildi) |
| A7 | **S** | `erdel` künyesi `tabi:` | `t:"1711-04-30"` | TDV `erdel`, `romanya`: Osmanlı'dan ayrılış **1699** Karlofça | KUNYE.md Ö-2 |

## B. Takvim karışması — aynı olay iki günle (Jülyen ↔ Gregoryen)

VERI-YAPISI.md: *"Batı kaynağından gelen tarih kaynağın hangi takvimde olduğu ÖLÇÜLÜR."* Aşağıdakilerde
aynı olay iki dosyada iki günde; ikisi de "doğru", farkı takvimdir. Bu paket kendi maddelerinde
hangisini kullandığını `gun:` alanına yazdı.

| # | olay | dosya · gün | fark |
|---|---|---|---|
| B1 | Pereyaslav 1654 | `olaylar_ek16.js` **01-08** · `kronoloji_lehistan.js` / `kronoloji_rusya.js` **01-18** · harita Çernigov/Baturin **01-08**, Poltava **01-18** | 10 gün — haritada bile üç noktada iki gün (YERLESIM-ONERI Ö-Y5) |
| B2 | Andrusovo 1667 | `kronoloji_lehistan.js`, `kronoloji_rusya.js` **01-30** · `olaylar_ek16.js` ve harita Kiev **02-09** | 10 gün |
| B3 | Poltava 1709 | `kronoloji_rusya.js` **06-27** · `kronoloji_isvec.js`, `kronoloji_lehistan.js` **07-08** | 11 gün. TDV `ukrayna` 8 Temmuz verir (Gregoryen) |
| B4 | İstanbul Antlaşması 1700 | `olaylar_ek5.js` **07-14** · EoU «Mazepa» **3 Temmuz** | 11 gün; bu paketin maddesi EoU'nun günüyle yazıldı ve fark `gun:`da |
| B5 | Besarabya'nın Romanya'ya katılması 1918 | `kronoloji_sinir_avrupa_orta.js` **04-08** · EoU «Bessarabia» **27 Mart 1918** | 27 Mart Jülyen = 9 Nisan Gregoryen ⇒ **04-08 ikisine de uymuyor** (bir gün kayık — ayrıca ölçülsün) |

## C. Gün kaynaksız — kayıt gün veriyor, gösterdiği kaynak vermiyor (**K**)

| # | kayıt | gün | gösterilen kaynak | ölçüm |
|---|---|---|---|---|
| C1 | `olaylar_ek2.js` "Eflak seferi: Kazıklı Voyvoda" | `1462-06-01` | `eflak` | TDV `eflak` yalnız *"1462'de"* der; 06-01 beyansız ay-temsilî |
| C2 | `olaylar_ek5.js` "Bukovina'nın … Avusturya'ya terki" | `1775-05-07` | `hotin` | TDV `hotin`: *"1775'te Bukovina … işgal edildi"* — gün yok |
| C3 | `olaylar_ek5.js` "Baltalimanı Sözleşmesi" | `1849-05-01` | `eflak` | TDV `eflak` senedi tarihsiz anlatır |
Üçü de haritadaki kırılmayı karşılıyor (Değişmez 2 temiz); gün muhtemelen doğru ama **okunmuş kaynağa
dayanmıyor**. Bu paket kendi maddelerinde bu günleri DEVRALMADI (CLAUDE.md §4 "zincirleme devralma").

## D. TDV'nin kendi iç çelişkileri (**S**) — bildirilir, çözülmez

| # | madde | ne diyor | neden şüpheli |
|---|---|---|---|
| D1 | `erdel` | *"Avusturya orduları Macaristan ve Budin'i aldıktan sonra **1697**'de Erdel'i de işgal ettiler"* | Budin 1686'da alındı, ardından gelen cümle 1693'ü anlatıyor, Karlofça 1699 — bağlam 1687'yi gösteriyor (dizgi hatası olabilir). Harita 1687-08-12 kullanıyor |
| D2 | `ukrayna` | *"Brest-Litovsk Antlaşması (**3 Mart 1918**) uyarınca Avusturya-Macaristan ve Almanya'nın Ukrayna'yı koruma iddiasıyla…"* | 3 Mart Sovyet Rusya ile yapılan barıştır; Ukrayna ile barış **9 Şubat 1918** (EoU «Ukrainian National Republic»). Bu paketin maddesi 9 Şubat'la yazıldı |
| D3 | `bogdan` | Vasile Lupu *"dönemi (1634-1635)"* | cümle uzun bir voyvodalığı anlatıyor; bitiş muhtemelen dizgi hatası. Madde bitiş yılı YAZMADAN yazıldı |
| D4 | `cehrin-seferi` ↔ `hatman` | tampon beylik *"(1668)"* ↔ himaye *"1669 Haziranında"* | EoU: ilan **1 Mayıs 1669**. Madde EoU günüyle yazıldı, çelişki `ic_not_d`de |
| D5 | `ibrail` ↔ `romanya` | İbrail'in ilhakı *"1538-1540 arasında … yıl belli değil"* ↔ *"1538'deki Boğdan seferi sonucunda"* | madde 1538 yılıyla, çelişki `ic_not_d`de |
| D6 | `yas-antlasmasi` | *"15 Cemâziyelevvel 1206 (10 Ocak 1792) Pazartesi"* | 10 Ocak 1792 Gregoryen'de SALI; Pazartesi 9 Ocak'a düşer. Atlas 9 Ocak kullanıyor ve haftagünü onu destekliyor — veriye dokunma gerekmez |
