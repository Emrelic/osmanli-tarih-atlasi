# NEHİR SÜRTÜNMESİ — araştırma ve katsayı önerisi

```
AD        NEHİR SÜRTÜNME
MODEL     Opus            (akademik kaynak + hüküm gerektiriyor; `M3`:
                           kendi çıktısını sorgulaması gereken iş küçük
                           modele VERİLMEZ)
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre bu dosya senin AÇILIŞ PROMPT'undur
```

## 🔒 ÖNCE KISIT — ŞU AN KOŞU VAR

```
KOŞU 5 · 4 Eylül 21:26:47 başladı · ~16 saat · uret_petek.py PID 19380
🔴 SANA YASAK : arac/uret_petek.py · arac/renkler.py · arac/girdi.py
                (motor_izi bu ÜÇÜNÜ parmak izliyor — yazarsan KOŞU ÖLÜR)
🔴 YAZMA      : data/*.js  (koşuyu öldürmez ama ÇIKTIYI YAYINLANAMAZ kılar)
🟢 SENİN      : denetim/BULGU-NEHIR-0904.md  ·  oturumlar/NEHIR-SURTUNME-0904.md
```
⇒ **Bu tur ARAŞTIRMA ve ÖNERİ turudur.** Motora dokunmayacaksın; koşu
bitince koordinatör uygulayacak. Emre'nin sözü: *"araştırıp… ne şekilde bir
katsayı ile yazabiliriz."*

## ① NE ÖLÇÜLDÜ (devral, ama DOĞRULA — `B10`)

Sürtünme yüzeyinin **tamamı** tek satır (`uret_petek.py:2214`):
```python
_kvsurt = 1.0 + EGIM_CARPANI * _kvegim        # YALNIZ EĞİM
_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt)     # Dijkstra bunu kullanıyor
```
```
nehri ENİNE geçmek     BEDAVA   ← olması gereken: en güçlü engel
nehir BOYUNCA gitmek   BEDAVA   ← olması gereken: en ucuz yol
GEÇİT / KÖPRÜ          hiç modellenmemiş
GÖL · BATAKLIK         maliyette YOK
```
Nehirler bugün yalnız **çizimde** ve petek sınırının **yaslanmasında** var.
Motor 293 nehir parçası · 211 adlı akarsu yüklüyor.

🟡 `denetim/BULGU-HUKUM-ALANI-0904.md` §⑷ oran ölçtü, **ama o rapor
akademik tur raporudur, motor ölçümü değil** — doğrula:
```
deniz ~1/50 · nehir aşağı ~1/5 · nehir YUKARI ~1/2,5   (yön önemli)
```

## ② İLK SOMUT İPUCU — KOORDİNATÖR ÖLÇTÜ

Koşu logunda Tuna **iki ayrı adla** geçiyor: `Danube` **ve** `Donau`.
⇒ Aynı nehir iki kayıt olabilir ve **birleştirilmemiş** olabilir. Bu, senin
Tuna örneğinin tam kalbi. **ÖLÇ**: kaç parça, uçları birleşiyor mu, aradaki
kopukluk nerede.
⚠️ Bu bir öncüldür, ölçüm değil — koordinatör `grep`le gördü. Doğrula.

## ③ İŞİN — dört soru, Emre'nin kendi sırasıyla

```
① HANGİ NEHİR NE KADAR ENGEL?
   Genişlik · debi · mevsimsellik · donma. Tuna ile başla (Romanya-Bulgaristan
   sınırı), sonra dünyaya genelle. Bir nehir HER YERDE aynı engel değildir:
   Tuna Viyana'da ve Demirkapı'da aynı şey mi?
② GEÇİT NOKTALARI NEREDE?
   Tarihî geçitler/köprüler/sığlıklar. `§4`: TDV varsa TDV; yoksa akademik
   ve `kaynak:` alanına AÇIKÇA yaz.
③ KATSAYI NASIL YAZILIR?
   Bugünkü biçim `surt = 1 + EGIM_CARPANI × |∇z|`. Nehir bu ifadeye NASIL
   girer? Öneri BİÇİMİYLE gelsin — hücre bazlı çarpan mı, kenar bazlı ek
   maliyet mi, geçitte İSTİSNA mı.
④ YÖN ÖNEMLİ Mİ?
   Nehir boyunca aşağı/yukarı maliyeti farklı. Bugünkü Dijkstra yönsüz bir
   ızgara üzerinde. Yön modellenebilir mi, yoksa ortalama mı alınmalı?
```

## ④ KABUL ÖLÇÜTÜ — ÖNCEDEN YAZILDI, sonradan gevşetilmez

```
① Tuna için SAYIYLA bir öneri: hangi katsayı, hangi gerekçe, hangi kaynak
② En az 3 GEÇİT NOKTASI adıyla ve koordinatıyla
③ Öneri MOTORUN BUGÜNKÜ BİÇİMİNE oturmalı — "şöyle olsa iyi olur" değil,
   `_kvsurt` satırına giren somut bir ifade
④ ÖLÇÜLMEYEN her cümle `ölçmedim` diye İŞARETLİ  (`§11`)
⑤ Ve BEDELİ tahmin et: bu katsayı Osmanlı gövdesini büyütür mü küçültür mü?
   🔴 9 Ağustos vakası: bir tavan gevşetmesi "yetim yüz" mantığıyla birlikte
   Osmanlı'yı %15 şişirdi. Bir maliyet değişikliği ASLA tek yönlü değildir.
```

## ⑤ HABERLEŞME — `§7.1`

```
KANAL   py arac/tahta.py yaz --kim "NEHIR SURTUNME" --kime "1.MURAT" --mesaj "..."
        🔴 KENDİ PENCERENE YAZMAK = HİÇ CEVAP VERMEMEK
AÇILINCA  "açıldım, brifingi okudum, şu dosyalar bende"
KALEM KALEM  bir bulgu bitince HEMEN — gün sonuna saklama
AKSAKLIK  BEKLETMEDEN: kaynaklar çelişiyorsa, şartname yanlışsa, beklenenden
        ÇOK farklı bir sayı ölçtüysen
TESLİM   SAYIYLA. "Bitirdim" değil, "Tuna için katsayı şu, 3 geçit şurada,
        şu ikisini ölçemedim"
```
