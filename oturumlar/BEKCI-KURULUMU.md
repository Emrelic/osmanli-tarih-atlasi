# BEKÇİ KURULUMU — her oturumun ilk işi

> Emre'nin kararı, 3 Eylül 2026: *"İşçi oturumları ve kendi oturumlarını
> bekçileri ile hatırlatıcıları ile ayarla."*
> Bu dosya **her şartnameye referansla girer.**

---

## 🔴 NİÇİN — iki vaka, ikisi de ölçüldü

**① Bir oturum ÜÇ BUÇUK SAAT boş bekledi ve beklediğini BİLMİYORDU.**
Sevki tahtaya düşmemişti; o da sormadı, ben de saymadım.

**② Koşu öldü ve SEKİZ SAAT kimse bilmedi.**
Bilgisayar kapandı, koşu 24 dakikada kesildi — **ve nöbetçim de onunla
birlikte öldü.** Emre sormasaydı sabah *"koşu sürüyor"* diye rapor
edecektim.

📌 İkinci vakanın dersi birincisinden ağır:
> ***Nöbetçi de altyapıya bağlıdır ve altyapıyla birlikte ölür.
> Sessizlik "iyi gidiyor" DEĞİL, "nöbetçi de gitmiş olabilir" demektir.***

⇒ Bir nöbetçi **düzenli olarak "hâlâ nöbetteyim" demelidir.** Yalnız olay
anında konuşan bir nöbetçi, öldüğünde sustuğu için fark edilmez.

---

## ① İŞÇİ OTURUMUN BEKÇİSİ — açılışta, ilk iş

```
Monitor aracıyla (Bash arka planı DEĞİL), persistent:
   py arac/tahta_bekci.py --kim "<TAM ADIN>" --ara 45
```
```
🔴 TAM AD ŞART        "OPUS HAZIR KITA 12" ≠ "OPUS HAZIR KITA 120"
                      Bekçi TAM EŞİTLİK arar; kısaltma ÖTMEZ.
🔴 Monitor, Bash DEĞİL Bash arka planı oturum turuyla ölür; Monitor
                      persistent oturum boyunca yaşar.
🟢 İLK TİK DOĞRULANIR "nöbette · N ad dinleniyor · M mesaj görüldü"
                      satırını GÖRMEDEN kurulmuş sayma.
```

## ② KOORDİNATÖRÜN BEKÇİLERİ — iki tane, ikisi de canlılık raporlu

```
① TAHTA    py arac/tahta_bekci.py --kim "1.MURAT" --ara 45
② KOŞU     PID + `data/donemler.js` damgası izlenir, VE her 60 dakikada
           bir "⏳ koşu SÜRÜYOR · N dk · <son log satırı>" basar
```
🔴 **İkinci nöbetçinin canlılık raporu ZORUNLU.** Bitişte 9 beep, kesilme
hâlinde 3 kalın alçak beep — ama asıl koruma **düzenli tiktir**: bir saat
ses gelmezse *"koşu iyi gidiyor"* değil, ***"nöbetçi ölmüş olabilir"***
diye okunur ve **sorulur.**

## ③ HATIRLATICI — dört zorunlu an (`§7.1②`)

```
AÇILINCA     "açıldım · brifingi okudum · dosyam şu · kutum şu ·
              oturum kimliğim <ÖLÇ>"
             🔴 Bu mesaj olmadan koordinatör dosyanı İKİNCİ oturuma
                verebilir ⇒ SESSİZ VERİ KAYBI
KALEM KALEM  bir kalem bitince HEMEN — biriktirme, gün sonuna saklama
SORULUNCA    iş sürüyor olsa bile HEMEN:
             "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
             ("birazdan bildiririm" cevap DEĞİLDİR)
BİTİNCE      teslim raporu SAYIYLA — "bitirdim" değil,
             "575 → 210, kalan 365'in 300'ü devletsiz, 65'i kaynaksız"
```

### 🔴 VE BEŞİNCİ AN — SESSİZLİK SAYACI
```
Bir saat geçip koordinatörden ses gelmezse SEN YAZ.
Koordinatörün sessizliği "iş yok" demek değil — "mesaj düşmüş olabilir"
demektir. Bugün iki kez öyle oldu.
```

## ④ TESLİM KANITI — "yazıldı" YETMEZ

🔴 Tahta **mesaj kaybedebiliyor** (ölçüldü: `.git/index.lock` 27 dakika
sahipsiz kaldığında iki mesaj ezildi, biri açılış mesajıydı).
```
Kritik bir şey yazdıysan — aksaklık raporu · teslim · karar isteği —
`tahta.json`dan GERİ OKU ve KENDİ KAYDINI ARA.
Aracın "mesaj VAR, TEKRAR YAZMA" talimatı bu arızada YANILTICIDIR.
```

### 🔴 VE GERİ OKURKEN ALAN ADINI VARSAYMA — bu reçete SAHTE ALARM ÜRETTİ
*(3 Eylül 2026, `PRUSYA-0903` yakaladı — reçeteyi yazan bendim)*

Reçetenin ilk hâli *"kendi kaydını ara"* diyordu ama **hangi alanda**
demiyordu. Bir oturum yazar alanını `kim` diye varsaydı, **0 sonuç**
aldı, ve *"açılış mesajım kayboldu"* diye bana **yanlış bir aksaklık
raporu** göndermek üzereydi.

```
GERÇEK ALAN KÜMESİ — ölçüldü (2370 kaydın hepsinde):
   no · zaman · kimden · kime · mesaj · hal · cevap · vade ·
   okuyan · yanit_no · kimden_kimlik · cins · dayanak · aciliyet · teyit
```
⇒ Yazar alanı **`kimden`**, `kim` değil. (`--kim` yalnız komut satırı
bayrağıdır; dosyadaki alan adı başkadır.)

**DOĞRU GERİ OKUMA:**
```python
import io, json
t = json.load(io.open("oturumlar/tahta.json", encoding="utf-8"))
m = t if isinstance(t, list) else t.get("mesajlar", [])
benim = [x for x in m if x.get("kimden") == "<TAM ADIN>"]
print(len(benim), [x["no"] for x in benim][-5:])
```

📌 Bu, `§11`in **altıncı arama ekseni**nin (*"olmayan bir alanı aramak
SESSİZ SIFIR verir"*) haberleşme yüzü — ve **`0`, "yok" ile "bakmadım"
arasında ayrım yapmaz.** Bir kayıp raporu ile bir ölçüm hatası aynı
sayıyı üretiyor, ve ikisinin bedeli çok farklı: gerçek kayıp bir mesajı,
sahte alarm bir koordinatörün dikkatini ve bir turu yakar.
🟢 Çare varsaymamak: **alan kümesini `Object.keys()` / `x.keys()` ile
ÖLÇ**, sonra ara.
⚠️ Ve dosya içeriden tutarlı görünür (0 mükerrer no · 0 boşluk) — **bu
bir sağlık işareti değil**: kayıp iz bırakmaz, çünkü sayaç bir sonraki
yazarın `max+1`iyle dolar.
🟢 Tahta çalışmıyorsa kritik raporu **özel kanaldan** yaz. `§7.1③` yatay
mesajın tahtadan geçmesini şart koşar ÇÜNKÜ TAHTA GÖRÜNÜRDÜR; tahta
çalışmıyorsa o şartın gerekçesi düşer.

## ⑤ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"  ← ÜÇÜ BİRDEN
```
⚠️ Sessizlik bir durum değildir. Sustuğunda koordinatör seni "hâlâ
çalışıyor" sayar; boş kapasiten görünmez ve sana iş gelmez.
⚠️ Ve *"bekliyorum"* tek başına eksiktir — **süresiz bekleme sonsuza
gider.** Ne beklediğini, kimden beklediğini ve **ne zaman tekrar
bakacağını** yaz.
