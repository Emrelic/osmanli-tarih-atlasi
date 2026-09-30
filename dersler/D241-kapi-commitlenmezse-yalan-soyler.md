# D241 — Makineler arası bir kumanda, commitlenmemiş bir dosyada yaşarsa BAŞKA MAKİNEDE YALAN SÖYLER

**Slogan:** Kaynak kapısı gibi bir kumandanın durumu yerel bir dosyadaysa, o
kapı yalnız **onu ilan eden makinede** doğrudur; her öteki makine **son
commitlenmiş** hâli görür. Ve tehlikeli yön, beklenenin tersidir.

---

## VAKA — 30 Eylül / 1 Ekim 2026 gecesi

Koşu UMIT makinesine taşındı ve orada bir Claude oturumu (`KOSU-UMIT`) açıldı.
İlk işi bekçisini kurmaktı. Kuramadı:

```
py arac/tahta_bekci.py --kim "KOSU-UMIT" --cik --ara 45
→ çıkış 3   (kurulamadı, TEKRAR DENEME)
sebep: oturumlar/KAYNAK-DURUM.json → KOSU yasağı, 2026-09-30 15:28
       "Petek koşusu sürüyor; makine koşuya ayrıldı."
       muaf: YILDIRIM BAYEZIT · GEMINI · AGY · GLM
```

İşçi kurala uydu, **yeniden denemedi**, ve sebebini gerekçesiyle bildirdi.
Koordinatör ölçtü:

```
YEREL  oturumlar/KAYNAK-DURUM.json    bekci_yasak: false · kaldirildi 18:33
HEAD'deki (UMIT'in çektiği) hâli      bekci_yasak: true
koordinatörün makinesinde KURULU bekçi: 42      ⇒ kapı gerçekten AÇIK
```

Yasak **15:28'de ilan edilmiş, 18:33'te kaldırılmış, ama kaldırma
COMMITLENMEMİŞTİ.** UMIT dört saat önce kaldırılmış bir yasağı okudu.

🔴 **İşçi haklıydı; yalan söyleyen dosyaydı.** Süreci öldürmek talimatı
değiştirmez (`D222` ailesi) — ama talimatın kendisi bayatsa, ona uymak
doğru davranışın kendisidir ve **kusuru ortaya çıkaran şey o uyumdur.**

---

## SEBEP — kapı bir DOSYA kapısıdır

`arac/tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur
(`CLAUDE.md §7.2 ④`). `arac/kaynak_durum.py kapat/ac` o dosyayı **yazar**,
ama **commit ETMEZ.** Tek makineli bir dünyada bu görünmez: dosya sistemi
zaten paylaşılıyordu. İkinci makine gelir gelmez kapı ayrıştı.

```
ilan eden makinede   →  YEREL DOSYA geçerli  →  doğru
her ÖTEKİ makinede   →  son COMMITLENMİŞ hâl →  bayat
```

---

## 🔴 TEHLİKELİ YÖN, BEKLENENİN TERSİ

Bu vakada zarar küçüktü: kaldırılmış bir yasak bir bekçiyi geciktirdi.
**Ters yön çok daha kötüdür:**

```
yasak İLAN EDİLİR ama commitlenmezse
  ⇒ uzak makine darboğazdan HABERSİZ bekçi kurar
  ⇒ RAM/işlemci darboğazında kapı HİÇ YOKMUŞ gibi davranır
  ⇒ ve kimse bunu göremez, çünkü ilan eden makinede kapı KAPALI görünür
```

Yani kapı iki yönde de bozuk ama yalnız bir yönde şikâyet üretiyor.

---

## KURAL

1. **Makineler arası bir kumandanın durumu commitlenir.** `kaynak_durum.py`nin
   `kapat`/`ac` adımlarına commit+push eklenecek (kalem açıldı).
2. **Bir kapıyı okuyan uzak oturum, kapının TARİHİNİ de okur.** `ilan` ve
   `kaldirildi` alanları dosyada var; "bugünün tarihinden çok eskiyse
   koordinatöre sor" bir işçi disiplinidir.
3. **Kapı dosyası yoksa ya da bozuksa yasak YOKTUR** (kapalıya düşmez) —
   bu zaten yazılıydı ve doğrudur; ama "bayat" hâli "yok" hâlinden **farklıdır**
   ve bugün ayırt edilemiyor.

---

## BAĞLI DERSLER

- `D222` bekçi altyapıyla olur · `D239` dağıtım yazmakla bitmez, teslim
  alıcının uyanmasıyla ölçülür — üçü aynı aileden: **bir kumandanın yazılması,
  o kumandanın ULAŞMASI demek değildir.**
- `CLAUDE.md §11` "bayatlayan belge/sayı" ailesi: burada bayatlayan şey bir
  sayı değil bir **hâl**, ve fotoğrafı commitlenmediği için başka makinede
  görünmüyordu.

📌 **`KOSU-DEVIR-CEVRIMI.md §4`** bu vakayı çevrim belgesinde de taşıyor —
üç makineli düzende okunacak ilk uyarılardan biri.
