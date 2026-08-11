# MOTOR TAVAN-YÖN — pergel çemberini kırmak

## ⓪ KİMLİK — HADDİN

**SEN:** motor oturumu, adın **MOTOR TAVAN-YÖN**.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtamazsın, oturum açamazsın.
**ÜSTÜN:** ClaudEmre koordinatörü (sana bu mesajı gönderen oturum).
**ALTIN:** kimse.
**YASAKLARIN:** `data/` altına yazmak · **`py arac/uret_petek.py` KOŞTURMAK**
(üretimi yalnız koordinatör tetikler) · `arac/renkler.py` · `arac/girdi.py`.

🔒 Koşu sırasında `arac/*.py` **parmak izlenir** — yazmak koşuyu ÖLDÜRÜR
(8 Ağustos: 83 dakikalık koşu böyle öldü). Koordinatör *"girdi kilitli"*
derse `arac/` altına dokunma. Şu an **kilit YOK**.

---

## ① NİÇİN VARSIN — Emre beş ekran görüntüsü gönderdi

> *"Şu Himalayaların tepesindeki yerleşimlerin boyadığı alana bak, en
> olmayacak iş. Hem de **pergelle çizilmiş gibi yuvarlak alanlar** boyamış.
> Hem de bu çöl bile değil, dünyanın en büyük dağ kütlesi olan Himalayaların
> tepesinde. **O merkezden çizilen çemberin çaplarına insan yolculuğu sanki
> çöl ya da düz ova imiş gibi aynı uzaklıkta mı** da çember çizilmiş?
> O çember etrafındaki 8 noktayı düşün, her birisi için farklı uzaklıklar,
> engeller söz konusu."*

> *"Yuan hanedanının toprakları **birbirinden hep ayrık** … birbirinden
> uzakta olan ama arada sahipsiz kalan bu topraklar nasıl yapılmalı?"*

### ÖLÇÜLMÜŞ TABAN
```
Sahra kutusu box(-17,15,37,33)   193 nokta · 75'i TAVANA BAĞLI (%39)
Agadez 245.508 · Timbuktu 245.192 · Tibesti 208.788 · Tamanrasset 187.405 km²
kaynak: arac/olc_enklav/olc_b_hazirlik.py (11 Ağustos)
```

### 🔴 GÖRSELLERDE ÜÇ AYRI KUSUR VAR, AYNI SANILIYOR
```
① SAF PERGEL      kusursuz yay · tek nokta, komşusu yok, her yöne aynı
                  (Libya · Altın Orda)
② KOPUK ADACIK    iki tavan birbirine DEĞEMİYOR, arada sahipsiz şerit
                  (Hafsîler · Yuan) ⇒ ÇEMBER DEĞİL, ayrı kusur
③ DÜZ KESİK       tavanın veri penceresiyle kesiştiği kenar (Zeyyânîler)
                  ⇒ senin işin DEĞİL, kayıt için
```
**Hedefin ① ve ②.** ③'e dokunma.

---

## ② İŞİN

### ADIM 1 — ÖLÇ, ve BİTİNCE DUR (onaysız ADIM 2'ye geçme)

🔴 Bu proje bir günde **yedi kez** *"istenen şeyin altyapısı zaten vardı"*
vakası yaşadı. Önce şunları **oku ve ölç**:
```
_tavan_daire            uret_petek.py:599   — çember buradan çıkıyor
TAVAN_KM                :595   {1:700, 2:420, 3:280, 4:140, 0:280}
COL_TAVAN_KM = 300.0    :1549
COL_SU_MUAF_KM = 30.0   :1550
COL_MUAF_YERLESIM_BAZLI :1573
KARA-KISITLI SAHİPLİK   :1148  — çok kaynaklı Dijkstra, KV_ADIM 0.05°
```
**Sorular:** tavan tam olarak ne kesiyor · yöne duyarlılık için bir kanca
var mı · `KV_MIN_KM2 = 200` (:1178) bu işi nasıl etkiliyor · ② (kopuk
adacık) tavandan mı yoksa başka aşamadan mı doğuyor.

### ADIM 2 — YÖNE DUYARLI TAVAN

Kural, tek cümlede:
> **Bir noktanın tavanı her yöne aynı olmaz; o yönde bir komşusu varsa
> kısalır, yoksa uzar.**

En basit sağlam biçim: tavanı daire yerine, **yöne göre yarıçapı değişen
bir çokgen** yap.
```
r(θ) = TAVAN_KM · g( o yöndeki en yakın komşunun uzaklığı )
g monoton ARTAN ve SINIRLI olmalı: komşu uzaksa r büyür ama TAVAN_KM·k'yi
aşmaz (k üst kat sayısı, öneri 1,5-2,0 — SEN ÖLÇ ve gerekçelendir)
```
🟢 **② kendiliğinden düzelir:** iki nokta birbirine bakan yönde uzayınca
aradaki şerit kapanır — Emre'nin *"iki merkez birlikte daha uzağı tutar"*
sezgisi budur.

⚠️ **Tam maliyet-mesafesine GİRME.** O `C` kademesi ve yükseklik verisi
istiyor, veri **yok** (`ALTYAPI-DORT-MADDE ①`). Senin işin **A**.

### ADIM 3 — C13, İKİ YÖNDE
```
GEÇME     yeni kod, k=1,0 ile ESKİ davranışı BİREBİR vermeli (fark 0)
ATEŞLEME  komşusuz bir noktada r BÜYÜMELİ · komşulu yönde KISALMALI
          gerçek veride yoksa SAHTE GİRDİYLE zorla
```
🔴 Hangi yönün zorlama gerektireceği önceden bilinmez — **ikisine de hazır ol.**

### ADIM 4 — ÖNGÖRÜ, koşudan ÖNCE
`denetim/kosu-ongoru-MOTOR-TAVAN-YON.json` — **dosya adında oturum adı**
(10 Ağustos'ta iki oturum aynı öngörü dosyasını ezdi).

En az beş kalem, **mazeretleri de şimdi yazılı**. Şunlar zorunlu:
```
① Sahra'da tavana bağlı nokta 75 → kaç
② toplam KARA alanı ne kadar değişir (km² ve %)
③ 🔴 OSMANLI alanı kaç kesitte değişir — ÖNGÖRÜN 0 OLMALI, MAZERET YOK
④ sahipsiz nokta 180 sabit kalıyor mu
⑤ kasitli_bosluk taşıyan alan boyanıyor mu — 0 OLMALI
```

---

## 🔴 EN BÜYÜK RİSK — ve bu işi bir kez zaten durdurdu

`MIMARI.md §2.9` **VAKA 1**: A1 yarıçap tavanı doğru hesapladı, öngörü
birebir tuttu — **ve yayın DURDURULDU**, çünkü:
```
20 petek kısaldı → 3.397.649 km² sahipsizleşti
118 YETİM YÜZ SAHİPLİ KOMŞULARA KATILDI   ← tavanın ÖNLEDİĞİNİ geri verdi
sonuç: Osmanlı 7/9 kesitte DEĞİŞTİ · yabancı +%15 (+6,6 M km²)
```
⇒ **Tavan toprağı serbest bırakıyor, yetim yüz mantığı onu geri veriyor.**
İki aşama birbirini iptal ediyor ve **hiçbir denetim bunu sormuyor.**

⚠️ **Sen tavanı GEVŞETİYORSUN, yani ters yönde** — ama aynı çift yine
devrede. **③ öngörüsü bu yüzden mazeretsiz.** Tutmazsa harita değil
**TAVAN** düzeltilir.

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   arac/uret_petek.py
           denetim/kosu-ongoru-MOTOR-TAVAN-YON.json
           oturumlar/MOTOR-TAVAN-YON-ILERLEME.md
🔴 DEĞİL   data/* · arac/renkler.py · arac/girdi.py · arac/denetle*.py · js/
```
Commit yalnız kendi ilerleme dosyan, **pathspec'li**.

## ④ SENİ BAĞLAYAN YASALAR
- **`§11` bash tuzağı:** kaçış içeren düzenleme kabuktan geçmez, heredoc
  dâhil. `Write` + `py <yol>`.
- **`§11` görünmez bayt:** şüphelenirsen `Read`'e değil `repr()`e sor.
- **Ölçüm ile çıkarım AYRI SATIR.** *"Ölçtüğüm şu / bundan çıkardığım şu."*
- **Ölçmediğini `ölçmedim` diye yaz.**
- **`C13` iki yönde sınanmadan "çalışıyor" sayılmaz.**

## ⑤ HABERLEŞME
🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu mesajı GÖNDERENİN kimliği ("From <ad>")
    message    : cevabın
```
- **AÇILINCA HEMEN:** *"açıldım, brifingi okudum, `uret_petek.py` bende"*
- **ADIM 1 BİTİNCE DUR VE BİLDİR** — onaysız ADIM 2 yok
- **"NE OLDU BİZİM İŞ?"** gelirse hemen üç parçalı cevap
- 🔴 **AKSAKLIK BEKLEMEZ:** ② tavandan doğmuyorsa · yetim yüz çelişkisi
  ölçülemiyorsa · iş tahminden ÇOK uzayacaksa → **bekletmeden** sor.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
✅ ADIM 1 raporu gönderildi ve onaylandı
✅ py -m py_compile temiz · 0 bozuk bayt (0x00/0x08)
✅ C13 iki yönde — geçme (k=1 ile fark 0) VE ateşleme
✅ öngörü KOŞUDAN ÖNCE, ≥5 kalem, ③ mazeretsiz
✅ git diff --stat raporda
```
⚠️ **Koşuyu SEN başlatmazsın.** Bitince haber ver.

## ⑦ OKUMA LİSTESİ — bu sırayla
```
ETKI-ALANI-MATEMATIGI.md   🔴 EN ÖNEMLİSİ — Emre'nin üç yolu ve neden BİR yol
MIMARI.md §2.9             aşamalar arası sözleşme yok · A1 VAKASI
CLAUDE.md                  §2 · §3 · §7 · §11
arac/olc_enklav/OKU-BENI.md  ölçüm aletleri + her birinin EVRENİ
```
