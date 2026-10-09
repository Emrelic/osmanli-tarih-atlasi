# BULGU — önbellek TUZU dört dosya, motor PARMAK İZİ üç dosya

**10 Ekim 2026 · YILDIRIM BAYEZIT (koordinatör) · ölçüm, hüküm değil**
**Düzeltme YAPILMADI — gerekçe aşağıda (§5).**

Bu bulgu aranarak değil, KOŞU 22 öncesi `kaynak_durum.py kapat` koşturulurken
damganın yan ürünü olarak çıktı: damgada **üç** motor dosyası vardı, `CLAUDE.md §9.1`
tuzu **dört** dosya diye tanımlıyor.

---

## 1. ÖLÇÜM — dosya ve satır numarasıyla

**TUZ (önbellek anahtarı) — DÖRT dosya:**
```
arac/uret_petek.py:564   # TUZ = KÖKLÜ DEĞİŞİKLİK: motor kodu
                         #   (uret_petek · renkler · girdi · motor_onbellek)
arac/uret_petek.py:576-580   _ONB_TUZ = json.dumps({... "motor_onbellek.py" ...})
arac/uret_petek.py:590       f" · tuz {_hlo.sha256(_ONB_TUZ...).hexdigest()[:12]}"
```

**PARMAK İZİ (koşu damgası + kapı) — ÜÇ dosya:**
```
arac/girdi.py:769            def motor_izi()                → uret_petek · renkler · girdi
arac/kaynak_durum.py:106     MOTOR_IZ_DOSYALARI = ("uret_petek.py", "renkler.py", "girdi.py")
                             # yorumu: "girdi.motor_izi() ile AYNI"
```
⇒ `arac/motor_onbellek.py` **tuzda VAR, parmak izinde YOK.**

Bugünkü damga bunu gösteriyor (`oturumlar/KOSU-KAPI.json`, 10 Ekim 00:09):
üç sha256 yazılı, dördüncü alan **hiç yok**.

---

## 2. SONUÇ — hangi soru cevapsız kalıyor

`arac/motor_onbellek.py` değişirse:
- **önbelleğin BÜTÜN anahtarları değişir** ⇒ tam yeniden inşa (ölçülen süre 7-8 saat)
- **motor parmak izi "motor değişmedi" der** — çünkü o dosyayı hiç okumuyor
- **`kaynak_durum.py` kapısı GEÇTİ basar** — aynı sebeple

Yani: *koşunun en pahalı sonucunu doğuran bir değişiklik, koşunun kendi
"motor ne durumda" raporunda GÖRÜNMEZ.*

🔴 Ve `CLAUDE.md §9.1③`ün sözü bu dosya için TUTMUYOR:
> "Koşu SÜRERKEN dört dosyaya dokunulmaz — koşu her aşamada motor parmak izini
> sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi)."

`motor_izi_dogrula()` (`girdi.py:830`) `motor_izi()`yi doğrular; o da üç dosya.
⇒ Koşu sürerken `motor_onbellek.py` değişirse **koşu REDDETMEZ.** Dördünden üçü
korunuyor, biri beyansız açıkta. Bugün o cümle 83 dakika değil **7-8 SAAT** demek.

---

## 3. GEÇMİŞTE VURDU MU — ölçüldü, ve EVET, bir kez

`arac/motor_onbellek.py` bugüne kadar **2 commit** aldı:
```
27b76088  2026-09-20  Lego motoru ana dala alindi: artimli uretim
                      (sabit cografya + epok onbellegi + surec paralelligi)
76351781  2026-09-27  KOSU 16 — tam insa (4 motor yamasi) + devirler + r10409
```
`§9.1`in anlattığı vaka tam bu pencerede: *"19-25 Eylül arasında bu dört dosyaya
19 commit girdi ve her koşunun tuzu farklı çıktı… çalışan önbellek katmanları
bile isabet almadı."* **20 Eylül o pencerenin içindedir.**
⇒ O tarihte tuzu değiştiren commit'lerden biri, koşu damgasından OKUNAMAYAN
dosyaydı. §9.1 sayıyı doğru yazmış ama **o 19'un biri damgada görünmüyordu**;
"hangi dosya yüzünden bayatladık" sorusu o gün tam olarak bu yüzden
cevaplanamazdı.

⚠️ ÖLÇÜLEMEDİ: o iki commit'in hangi koşunun önbelleğini gerçekten ıskalattığı
**ölçülmedi.** Yukarıdaki cümle takvim örtüşmesidir, nedensellik kanıtı değil.
"Vurdu" diye değil **"vurmuş olabilir ve göremezdik"** diye okunur.

---

## 4. SINIFI — bu gecenin ailesinden, ama yeni bir yüzü

Bu gece dört kez aynı sınıf çıktı: *bir aracın çıktısını, aracın cevapladığı
sorudan GENİŞ okumak.* Buradaki ters yönü:

> **Kapı var, soruyu soruyor, ama evreni eksik.**
> Üç dosyayı doğru ölçüyor; dördüncüyü sormuyor ve sormadığını SÖYLEMİYOR.

`CLAUDE.md §11`in "Denetim var ≠ o soruyu soruyor" ailesinin alt dalı:
**evren eksikliği, ölçüm hatasından sinsidir** — sayı doğrudur, kapsamı yanlıştır,
ve çıktıya bakan hiç kimse eksiği göremez. Üç sha256 gören bir okuyucu "motor
damgalandı" der; dördüncünün yokluğu ancak tanımla karşılaştırılırsa anlaşılır.

---

## 5. NİÇİN ŞİMDİ DÜZELTİLMEDİ — ve çare nereye yazıldı

Çare `girdi.py:769`a bir satırdır (`motor_izi()`ye dördüncü dosya) + `kaynak_durum.py:106`
aynı anda. **İkisi birlikte değişmek zorunda**, yoksa "AYNI üç" eşitliği kırılır.

🔴 **AMA `girdi.py` TUZDADIR ve KOŞU 22 ŞU AN KOŞUYOR** (başlangıç 10 Ekim 00:11:25,
taban `46f9d882`, HAVVA, ~7-8 saat). `§9.1③`: koşu sürerken o dosyaya dokunulmaz.
Ve `§9.1①`: veri koşusunda motor DONDURULUR; `§9.1②`: biriken yamalar **tek
seferde**, tam inşa koşusunda girer.

⇒ Hüküm: **bu yama bir sonraki MOTOR PARTİSİNE**, C3 yürüyüş diş süzgeci ve Z6'nın
dört renk değişikliğiyle **aynı partiye** yazılır. Tuz bir kez değişir, koşu zaten
sıfırdan inşa eder.

📌 Ve kuralın kendisi de düzeltilecek: `§9.1③`ün "koşu parmak izini sınar ve
reddeder" cümlesi **dördü için değil üçü için** doğrudur. Cümle yanlış değil,
EKSİK — bu gecenin üçüncü "eksik cümle" vakası (`§3.4②` ve "AĞACIN GERİDEYSE DUR"
aynı sınıftı). Düzeltme de aynı partide, çünkü cümlenin doğru hâli yamanın
inmesine bağlı.

---

## 6. AÇIK KALEMLER (beyan — sessiz değil)

| # | kalem | durum |
|---|---|---|
| ① | `motor_izi()` + `MOTOR_IZ_DOSYALARI` dördüncü dosyayı alsın | sonraki motor partisi |
| ② | `CLAUDE.md §9.1③` cümlesi düzeltilsin (üç mü dört mü) | ① ile aynı commit |
| ③ | iki commit'in hangi koşuyu ıskalattığı | ÖLÇÜLEMEDİ — uydurulmadı |
| ④ | `_ONB_GEO_TUZ` (satır 604-608) ayrı tuz: evreni ayrıca sınanmalı | ölçülmedi |

④ ayrıca önemli: `§9.1`in "yapısal çare yolda" dediği `MOTOR-LEGO-0925` yaması
geometri katmanlarına renk/girdi İÇERMEYEN ayrı bir tuz koyuyor. O inince
tuz ailesi ÇOĞALIR — ve parmak izi bugünden eksikse, o gün daha eksik olur.
