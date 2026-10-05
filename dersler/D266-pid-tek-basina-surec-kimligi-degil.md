# D266 — PID tek başına SÜREÇ KİMLİĞİ değildir; yeniden kullanım YANLIŞ ALARM üretir

**Slogan:** Bir damgaya yalnız PID yazmak, süreç kimliğini **saat sonra geçersizleşen** bir
sayıya bağlamaktır. İşletim sistemi PID'leri yeniden kullanır ⇒ ölü bir bekçinin PID'i başka bir
sürece atanınca alet *"süreç AYAKTA"* der ve **tek gerçek alarm durumunu** (`ASILI`) yanlış
tetikler. ⇒ Süreç kimliği **PID + başlangıç zamanı** çiftidir.

Tarih: 6 Ekim 2026 (gece) · Vaka: `HAZIR KITA 2909 1610`

## Ne oldu
Gece turunda `bekci_olc.py` **ASILI 1** bastı — ve `ASILI` nöbet talimatının *"yalnız bu gerçek
alarm"* dediği tek hâl. Üçlü sıra (`D258`) koşturuldu:
```
① teslim gelmiş mi?   GELMİŞ — M-5842, su seviyesinin ALTINDA, yani işlenmiş
② bekçi ne diyor?     ASILI: "süreç VAR, nabız YOK" · 4 sa 13 dk · beklenen ≤ 2 dk
③ oturum erişilebilir mi?  HAYIR — `SendMessage` "No agent named ... is reachable"
```
Damga: `{"pid": 20764, "zaman": "2026-10-05 18:32:28", "ara": 60.0, "tur": 14}`
Ölçüm (PowerShell, `Get-Process -Id 20764`): **PID 20764 YOK.**
Ölçüm (`tasklist /FI "PID eq 20764"`): `INFO: No tasks are running…` ⇒ `_surec_var` **False**.
⇒ Araç ASILI demişti, aynı sorunun cevabı dakikalar sonra **BITMIS** çıktı (`ASILI 0`).

## Teşhis
`bekci_olc.py:59 _surec_var(pid)` doğru yazılmış (üç durumlu: VAR · YOK · BİLİNMİYOR) ve
sınıflandırma da doğru (`canli_surec is True → ASILI`). **Kusur mantıkta değil, KİMLİKTE:**
damga 18:32'de yazılan PID'i taşıyor; 22:4x'te o PID işletim sistemi tarafından **başka bir
sürece** verilmiş olabilir. O an `tasklist` "var" der, alet "bekçi ayakta ama nabız atmıyor"
sonucuna varır. Dakikalar sonra o yabancı süreç de ölünce hâl `BITMIS`e döner — yani **alarm
kendi kendine kayboldu**, ki bu da bir ipucudur: gerçek bir ASILI kendiliğinden geçmez.

## Niçin bu, yanlış BITMIS'ten KÖTÜ
Aletin kendi yorumu uyarıyor: *"Beyanlı bir yanlış pozitif tolere edilebilir; alarm sütununun
TAMAMI yanlış olunca alet GÜVENİLMEZ olur ve bir gün gerçek ölüm de görmezden gelinir."*
`BITMIS` **alarm değil** (nöbet talimatı bunu açıkça yazıyor), `ASILI` ise **tek alarm**. ⇒
Yanlış `ASILI`, alarm kanalının kendisini zehirler: bu turda bir hayaleti kovalamak gerçek iş
yedi (damga okuma, PID sorgulama, oturum erişilebilirliği, kod okuma).

## 🔴 İKİNCİ VAKA — aynı gece, ve bu sefer PID'i BAŞKA BİR PROGRAM tutuyordu
Ders yazıldıktan ~20 dakika sonra `bekci_olc.py` yine **ASILI 1** bastı:
`OPUS HAZIR KITA 2309 0058` (o oturum sonradan `TAHTA-WEB-DENETIM-1006` adını aldı,
iki teslim verdi — `M-5846` · `M-5850` — ve emekliye ayrıldı).
```
damga        : {"pid": 22632, "zaman": "2026-10-05 18:55:36", "ara": 60.0}
Get-Process 22632 → CANLI · ad = msedge · başlangıç = 2026-10-05 23:55:33
```
⇒ PID **canlı**, ama süreç **Microsoft Edge** ve **beş saat sonra** başlamış. Bekçi çoktan
ölmüş; aracın *"süreç ayakta"* dediği şey bir tarayıcı.
🟢 **İlk vakadan daha güçlü kanıt:** orada PID yalnızca yoktu (belirsiz kalabilirdi); burada
PID **başka bir programa ait** ve bunu `StartTime` tek başına ele veriyor —
damga 18:55:36 ↔ süreç 23:55:33, beş saatlik uyuşmazlık.
📌 Nedensel zincir de kayda değer: Emre o gece koşuya yer açmak için Edge'i **kapattırdı**;
Edge yeniden açılınca ölü bekçinin PID'ini aldı. ⇒ PID yeniden kullanımı nadir bir kaza
değil, **makine boşaltıldıkça olasılığı ARTAN** bir olaydır.
⚠️ Ve yanlış alarmın bedeli iki kez ödendi: aynı gecede iki ayrı tur, iki hayalet kovalaması.

## Kural
1. Süreç canlılığı sorulacaksa damga **PID + BAŞLANGIÇ ZAMANI** taşır. `_surec_var` ikisini
   birlikte doğrular; başlangıç zamanı uyuşmazsa PID **başka bir sürecindir** ⇒ `BITMIS`.
   (Windows: `Get-Process -Id N | StartTime` ya da `wmic process where ProcessId=N get CreationDate`.)
2. Yaşı `ara`nın katlarını AŞMIŞ bir damgada süreç "var" görünüyorsa, **önce kimlik doğrulanır**,
   sonra alarm basılır. Yaş ne kadar büyükse PID yeniden kullanım olasılığı o kadar yüksektir.
3. Kendiliğinden geçen bir alarm, **alarmın kendisinden şüphelenmeyi** gerektirir: gerçek bir
   `ASILI` (süreç ayakta, nabız yok) iyileşmez.
4. `--temizle`nin `ASILI`ya dokunmaması DOĞRU kalır (süreç gerçekten ayakta olabilir); çare
   silmek değil **kimliği doğrulamak**tır.

İlgili: [`D258`](D258-sessiz-bekci-iz-birakmali.md) (nabız damgası ve üçlü sıra) ·
[`D265`](D265-olculen-sayi-basilmiyorsa-olculmemistir.md) · `CLAUDE.md §7.2 ④`
