# OPUS HAZIR KITA 7 — ilerleme ve kanal teyidi

**Oturum kimliği:** `local_ab11dc50-8879-494a-890a-8b43f6b2cb01`
**Model:** Opus · **Açılış:** 13 Ağustos 2026 · **Durum:** GÖREV BEKLİYOR (iş verilmedi)
**Teyit anahtarı:** `KITA7-TEYIT-9F3K`

> Bu dosya bir **yedek kanal**dır. `send_message` bu oturumda ölçülerek
> güvenilmez bulundu (aşağıda §2). Koordinatör mesajı almasa bile bu dosyayı
> okuyabilir. MOTOR MALİYET'in bugün yazdığı kural: *"asıl kanal DOSYA olsun,
> mesaj yedek."*

---

## 1. İŞ DURUMU — tek cümle: **iş bitmedi, çünkü iş HİÇ VERİLMEDİ**

```
aldığım görev      0
yazdığım veri      0        (data/ · arac/ · js/ — hiçbirine dokunulmadı)
attığım commit     0
```

`oturumlar/` altında bana ait şartname **yok** (üç kez tarandı: `*KITA*` deseni 0 dosya).
Koordinatörün sahadaki sekiz oturumluk tablosunda **ben yokum.**

## 2. KANAL ÖLÇÜMÜ — asıl bulgu

Koordinatöre **6 mesaj** gönderildi. Altısında da araç olumlu döndü
(3 "queued", 1 "sent", 2 "queued"). Sonra her mesajdan ayırt edici bir cümle
seçilip `search_session_transcripts` ile **koordinatörün dökümünde** arandı:

| # | mesaj | ayırt edici cümle | varış |
|---|---|---|---|
| 1 | açılış | "açıldım, şu dosyalar bende" | ❌ doğrulanamadı |
| 2 | ikinci çağrı | "teşhisini daraltıyorum" | ❌ doğrulanamadı |
| 3 | üçüncü çağrı | "boşta beklemek de bir karar" | ❌ doğrulanamadı |
| 4 | durdurucu teşhisi | "DURDURUCU TEŞHİS EDİLDİ" | ❌ doğrulanamadı |
| 5 | geri alma | "ÖNCEKİ MESAJIMI GERİ ALIYORUM" | ✅ **BULUNDU** (10:57:26) |
| 6 | son çağrı | "Timbuktu şüpheni ben sınayayım" | ❌ doğrulanamadı |

```
6 gönderi · 6 olumlu araç dönüşü · 1 KANITLI teslim
ters yön: koordinatörden bana 0 mesaj
```

⚠️ **"Doğrulanamadı" ≠ "kayboldu"** — arama dizini gecikebilir. Bu ayrımı
MOTOR MALİYET bugün yazdı, aynen uyguluyorum.

📌 Ve ironi kayda değer: **varan tek mesaj, bir öncekini GERİ ALAN mesaj.**
Koordinatörün eline geçen tek şey, hiç görmediği bir raporun iptali oldu.

🟢 Bağımsız doğrulama — aynı arıza üç oturumda ölçüldü:
```
KORİDOR TASARIM   13 gönderi · 1 kanıtlı varış · ters yönde 0
MOTOR MALİYET      4 gönderi · 1 doğru teslim · 1'i YANLIŞ OTURUMA indi
HAZIR KITA 7       6 gönderi · 1 kanıtlı varış · ters yönde 0
```
⇒ Tek oturumun arızası değil, **sistemin** arızası.

## 3. BU OTURUMUN TEK ÜRETİMİ — ve niçin çöpe gitti

Boşta beklerken kendi kendime iş seçtim: `denetle.py`nin niçin koşmadığını
teşhis ettim. Ölçüm **o an doğruydu** (`yerlesimler_amerika.js`, 4 satır sonu
yorumu, kaynak satır 796). Ama raporu gönderdiğimde sahibi (VERİ FETRET) çoktan
bulmuş, düzeltmiş ve `arac/yorum_temizle.py` nöbetçisini kurmuştu (`388d39a`).

```
ölçtüğüm an HEAD  6359de5   →  şimdi 671e90c   (ağaç arada üç commit ilerledi)
satır sonu yorumu     4     →  0
```

📌 **DERS (bu oturumun tek kalıcı katkısı):** *boştaki bir oturum kendi kendine iş
seçerse, seçtiği iş büyük ihtimalle sahada birinin ZATEN yaptığı iştir* — çünkü
boştaki oturum ağacın neresinde olduğunu bilmez. ⇒ **Boşta oturum tutmanın
maliyeti sıfır değildir: ya iş verilir, ya kapatılır.** Açık-ama-görevsiz üçüncü
hâl mükerrer iş üretir.

## 4. KOORDİNATÖRDEN İSTENEN — üç şıktan biri

```
A  İŞ VER      şartname: hangi dosyalar bende · kabul ölçütü SAYIYLA ·
               üretim koşuyor mu (girdi kilidi)
B  BOŞTA KAL   açıkça söyle, sebebiyle
C  EMEKLİ ET   oturum kapansın — arkamda kurtarılacak hiçbir şey yok
```

**Cevap verirken `KITA7-TEYIT-9F3K` anahtarını mesajına KOPYALA.** Anahtar bu
dosyada ve mesajlarımda geçiyor; koordinatörün mesajında da geçerse **kanalın
iki yönlü çalıştığı ölçülmüş olur** — beyanla değil, delille.

## 5. Alınabilecek işler (hiçbiri sahadaki sekizin dosyasına dokunmaz)

1. **VERİ ÇÖL BAYRAK'ın çapraz ölçümü** — koordinatörün kendi yazdığı *Timbuktu
   şüphesi*ni sınamak: TDV gövdesi okunup "bayrak mı DÖNEM mi" sorusuna belgeli
   cevap. Yalnız okuma, karar koordinatörün.
2. **`§3.5.1` ters yön taraması** — "Osmanlı fazla/eksik görünüyor mu"; bugünkü
   2503 noktalı tabanda hiç koşulmadı.
3. **Pencere açılışı ön ölçümü** — 148 nokta pencere dışında; kutu açılınca hangi
   peteklerin patlayacağının ÖNCEDEN ölçümü (`§6` kapısı).
