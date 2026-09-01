# `Değişmez 2y` — KIRILMA ↔ MADDE YER EŞLEŞMESİ

**Oturum:** OPUS HAZIR KITA 102 · **Sevk:** 1.MURAT · **Tarih:** 2 Eylül 2026
**Alet:** `arac/_yer_eslesme_ok102.py` (yeni) · **Kilitli üçlüye dokunulmadı**

---

## 0. 🔴 ÖNCE BUNU OKU — ŞARTNAMENİN İKİ MADDESİ ÇÜRÜDÜ

Şartname *"o nöbetçi YOK"* diyordu. **İki ölçüm yaptım (`M-1903 §⑥`: "bu iş
zaten yapılmış mı" + tarih karşılaştırması) ve ikisi de aksini söyledi.**

### ① NÖBETÇİ VAR — VE DOĞURAN VAKAYI ZATEN YAKALIYOR
```
arac/denetle_eslesme.py     1 Ağustos 2026 · 30.831 bayt
  §A "KIRILMA → MADDE"      Değişmez 2 maddenin VAR olduğunu sorar,
                            DOĞRU olduğunu sormaz.
  bugünkü koşu              530 kırılma · 130 şüpheli (tavan 97)
  ve listesinde AYNEN ŞU SATIR VAR:
     1578-08-09  (6) Batum, Hulo (Acara)  | 0g | Çıldır Zaferi — doğu savaşı başladı
```
⇒ **Tiflis vakası zaten yakalanıyordu.** Duplicate bir nöbetçi yazmadım.

### ② TASARIM NOTU DA YAZILIYDI — `denetle.py`nin kendi içinde
> *"📌 Cozum tasarimi ACIK IS: kirilmanin yer/devlet kimligi ile maddenin
> `yer_id:`/`kisiler:`/metni arasinda bir ORTUSME sarti aranmali. Bugun
> uygulanmadi cunku 649 kirilmanin tamamini yeniden tartar ve tek oturumda
> olculemez. **Yazildi ki kaybolmasin.**"*

⇒ İstenen iş **açık iş olarak kayıtlıydı**; benim yaptığım onu *icat etmek*
değil, **`yer_id` ayağını uygulamak** oldu.
📌 `CLAUDE.md §11`: *"istenen şeyin altyapısı zaten vardı"* — 10 Ağustos'ta
bir günde beş kez oldu. Bu altıncısı olurdu; **iki ölçüm 10 saniye sürdü.**

### ③ VE ŞARTNAMEDEKİ SAYI DA BAYAT — devraldığımı doğrulamadan aktarmadım
```
şartname   "1223 maddenin 811'inde yer_id var, yani 412'sinde YOK"
ölçüm      1282 madde · yer_id DOLU 1197 (%93,4) · YOK 85 (%6,6)
           ve dolu olanların %99,7'si bir yerleşim adına ÇÖZÜLÜYOR
           kırılmayla eşleşen maddelerde yer_id'siz olan: yalnız 16
```
Kaynağı belli: `CLAUDE.md §1.5` tablosu (1223 madde · 811 `yer_id`) — o tablo
bayat. **Üçüncü kova 412 değil 16.** Yine de AYRI raporlanıyor (`§11`:
*ölçülemedi asla temiz diye raporlanmaz*).

---

## 1. NE YAPTIM — var olan ekseni tekrarlamadım, EKSİK EKSENİ EKLEDİM

```
METİN ekseni   (denetle_eslesme §A)  madde BAŞLIĞINDA yerleşimin adı geçiyor mu
                                     → Türkçe kelime-sınırı regex'i, yazıma bağlı
yer_id ekseni  (BU ARAÇ)             YAPILANDIRILMIŞ alan — bir `if` ile sorulur
```
📌 `CLAUDE.md §11` ⑪: *"bu bilgiyi bir `if` ile sorabiliyor muyum? Sorulamıyorsa
kayıt vardır, VERİ YOKTUR."* Metin ekseni bir kayıttır; `yer_id` ekseni veridir.

**Üç kova + mesafe kademesi + iki eksenin ayrışma ölçümü + zorlanmış C13 sınavı.**

---

## 2. ÖLÇÜM — `d:`/`v:` kırılmaları

```
yerleşim 2624 · madde 1282 · kırılma günü 530
Değişmez 2'nin maddeli saydığı 530 · AÇIK dediği 0

🟢 EŞLEŞİYOR    383   (%72,3)
🔴 EŞLEŞMİYOR   131   (%24,7)
⚠️  ÖLÇÜLEMEDİ   16   (%3,0)   maddede yer_id YOK — TEMİZ SAYILMAZ
```

### 🔴 VE HAM SAYI TEK BAŞINA YANILTICI — MESAFE KADEMESİ ŞART
131'in içi okununca görüldü: çoğu **doğru** eşleşme. Madde harekâtı temsilî
bir yerle adlandırıyor, yanındaki noktalar da onunla el değiştiriyor:
```
1414-06-01  "Konya kuşatması" (yer_id=Konya)   → Beyşehir · Akşehir · Seydişehir
1299-01-01  "Osmanlı Beyliği'nin kuruluşu"     → Bilecik · Yarhisar (yer_id=Söğüt)
```
⇒ Ölçüt *"eşleşiyor mu"* değil, ***"ne kadar uzakta"***. Dört kova
(`renk_olc`un kendi içtihadı):
```
🟢 TEMSİLÎ  <150 km      43    aynı harekât sahası — TASARIM
🟡 UYARI    150-600 km   32    bakılmalı
🔴 ŞÜPHELİ  >600 km      56    GERÇEK ADAY
⚠️  ÇÖZÜLEMEDİ            0    yer_id yerleşime çözülemedi
```

### 🔴 EN KESKİN ONU — hepsi GERÇEK toprak değişimi, madde ALAKASIZ
```
1417-01-01  3229 km  Avlonya · Berat +3      ↔ "Bahreyn adalarının Cebrîler'e geçmesi"
1547-01-01  3221 km  Sana                    ↔ "Üsküdar İskele Külliyesi'nin yapımı"
1452-01-01  3002 km  Kilitbahir              ↔ "Karakoyunlu Cihan Şah'ın Timurlu İran'ı"
1521-01-01  2605 km  Fornoz · Nikarya        ↔ "Portekiz'in Bahreyn'i alışı"
1557-01-01  2086 km  Akīk · Arkîko +11       ↔ "Seydi Ali Reis'in Mir'âtü'l-Memâlik'i"
1559-01-01  1817 km  Zeyla                   ↔ "Osmanlı'nın Bahreyn seferi"
1577-01-01  1620 km  Câlû · Gât +10          ↔ "Drina (Sokullu) Köprüsü'nün yapımı"
1534-01-01  1207 km  Arpaçay · Digor +1      ↔ "Matrakçı Nasuh'un Irakeyn güzergâhı"
1515-01-01  1145 km  Malikiye · Nusaybin +1  ↔ "Tersâne-i Âmire'nin İstanbul'a taşınması"
1513-01-01   906 km  Sin (Sinj)              ↔ "Pîrî Reis'in dünya haritası"
```
📌 `1577-01-01 Câlû · Gât` satırı, `denetle_eslesme.py`nin **kendi başlığında**
örnek olarak yazılı olan Murzuk vakasının ta kendisi: *"Murzuk'un 215.000 km²'lik
peteği 1577'de renk değiştiriyor → eşleşen madde: İstanbul Rasathanesi kuruldu."*
**Bir yıldır yazılı duran vaka hâlâ açık** — bugün 12 nokta ve 1620 km.

---

## 3. İKİ EKSEN NEREDE AYRIŞIYOR — ve ikisi de gerekli

```
yer_id "EŞLEŞMİYOR" diyor, METİN "adı geçiyor" diyor  :  9
   ⇒ METİN ekseninin GÖREMEDİĞİ şüpheliler
     1302-08-01 yer_id=İznik    | "İznik'in ilk kuşatması ve Marmaracık'ın fethi"
     1414-06-01 yer_id=Konya    | "Konya kuşatması: Beyşehir, Seydişehir, Akşehir"
     1452-08-31 yer_id=Boğaziçi | "Rumeli Hisarı tamamlandı"
     (başlıkta ad GEÇİYOR ama yer_id BAŞKA yeri gösteriyor)

yer_id "EŞLEŞİYOR" diyor, METİN "adı geçmiyor" diyor  : 44
   ⇒ METİN ekseninin YANLIŞ ŞÜPHELENDİKLERİ — yer_id onları TEMİZE ÇIKARIYOR
     1393-09-01 yer_id=Silistre | "Dobruca'nın katılışı"
     1394-01-01 yer_id=Tırhala  | "Teselya'ya iniş"
     1413-07-05 yer_id=Sofya    | "Çamurlu Savaşı"
```
⇒ **İkisi farklı şey görüyor.** `denetle_eslesme §A`nın bugünkü 130 şüphelisinin
**44'ü `yer_id` ekseninde temiz** — yani o sayının üçte biri kadarı gürültü.
🟢 Bu, §A'nın tavanını (97) tartışmak için **ölçülmüş** bir zemin verir.

---

## 4. C13 — İKİ YÖN DE ZORLANDI, DÖRT DAL DA SINANDI

```
🟢 ATEŞLEME     doğuran vaka (1578-08-09) EŞLEŞMİYOR kovasında ✓
                yer_id=Ardahan · madde "Çıldır Zaferi"
🟢 GEÇME        kusursuz sahte vaka EŞLEŞİYOR, şüpheli 0 ✓   (ZORLANDI)
🟢 ÜÇÜNCÜ KOVA  yer_id'siz madde ÖLÇÜLEMEDİ'ye düştü, "eşleşmiyor" SAYILMADI ✓
🟢 EŞLEŞMEME    başka yerin yer_id'si ŞÜPHELİ sayıldı ✓
py arac/_yer_eslesme_ok102.py --sinav   → çıkış kodu 0
```
⚠️ Gerçek veride *"kusursuz vaka"*yı aramak yeterli olmazdı — **sahte girdiyle
zorlandı** (`C13`: hangi yönün zorlama gerektireceği önceden bilinmez).

---

## 5. 🔴 ARACIN KENDİ SINIRI — ve onu DOĞURAN VAKA gösteriyor

```
Tiflis (1578-08-09) mesafe kademesi: TEMSİLÎ · 68 km
```
**Mesafe kademesi doğuran vakayı ELER.** Çünkü kusur coğrafî değildi:
15 günlük bir **tarih** hatasıydı ve onu **kaynak (TDV)** gösterdi.
⇒ ***Kademe listeyi DARALTIR, KARAR VERMEZ.*** Bu cümle aracın kendi
çıktısına da basılıyor, bir sonraki oturum onu ekranda görsün diye.

---

## 6. 🔴 YAN BULGU — `denetle_eslesme.py` BUGÜN KIRMIZI

Kendi işimi ölçerken var olan aracı koşturdum ve **çıkış kodu 1** verdi:
```
§A  130 şüpheli (tavan 97)      — YENİ YANLIŞ EŞLEŞME
§C  117 eksik kırılmalı (tavan 73) — YENİ EKSİK
DOĞURAN VAKA SINAMASI: 3/5 vaka ARTIK YAKALANMIYOR
    1803-05-15 "Mekke ve Tâif" → Mekke bekleniyordu
    1422-01-01 "Cüneyd Bey" → Aydın bekleniyordu
    1479-08-01 "İyon adaları" → Kefalonya bekleniyordu
```
⚠️ Son blok en ciddisi: aracın **kendi bekçisi** *"bir iyileştirme denetimi
doğuran vakayı silmiş olabilir"* diye itiraz ediyor. **Ben dokunmadım**
(o dosya benim değil), yalnız bildiriyorum.

---

## 7. NE ÖLÇMEDİM

- `--s` (yabancı `s:` kırılmaları) **koşturulmadı** — `Değişmez 2s`nin kendi
  tavanı ve kapsam-dışı kovası var; onunla birleştirmeden sayı üretmek
  yanıltıcı olurdu.
- 56 şüphelinin **hiçbiri tek tek araştırılmadı** — bu bir liste, hüküm değil.
- `kisiler:` ekseni (tasarım notunun üçüncü ayağı) **uygulanmadı**.
- `denetle.py`ye **bağlanmadı**: `Değişmez 2y` henüz resmî bir değişmez değil;
  bağlama kararı koordinatörün.
