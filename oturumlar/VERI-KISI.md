# VERİ KİŞİ — kronolojide adı geçen ama kartı olmayan kişiler

## ⓪ KİMLİK — HADDİN
```
SEN         : YAPIMCI oturum · adın VERİ KİŞİ
DEĞİLSİN    : koordinatör DEĞİLSİN · ÇAPRAZ DEĞİLSİN
ÜSTÜN       : KOORDİNATÖR (Oturum 0)      ALTIN : kimse
YASAKLARIN  : iş dağıtmak · `data/` altında kisiler.js DIŞINDA hiçbir şey ·
              `arac/*` · `js/*` · `index.html` · kök `*.md`
```

## ① NİÇİN VARSIN — ölçülmüş, ve bugün CANLI bir kusurdan doğdu
```
data/kisiler.js   281 kayıt
```
Bugün bir ÇAPRAZ oturum, kronoloji maddelerinin `kisiler` alanını taradı ve
şunu buldu: **1770 Kartal Bozgunu maddesi, 1916 Kût kumandanının kartını
açıyordu — 146 yıl.** Eşleştirici (`kisiBul`) **doğru** çalışıyordu; kusur
**verideydi**: `kisiler.js`te Halil adlı dört kayıt var ve 1770'in adamı
**İvazzâde Halil Paşa YOK.** Alet elindekinin en iyisini seçiyordu.

📌 Ders (`B10`): hüküm *"yanlış kişi açılıyor"* **doğruydu**, teşhis
*"eşleştirici bozuk"* **yanlıştı.**

Koordinatör eşleştiriciyi düzeltti (ölçüt simetrik yapıldı, 22 yanlış eşleşme
düştü). Artık **yanlış kart açılmıyor** — ama **hiç kart açılmıyor.** Kodun
kendi yorumu bu takası bilinçli yapmış: *"eksik bağlantı sessiz yokluk,
yanlış bağlantı yanlış bilgi; ikincisi kullanıcıya doğrudan yanlış bilgi
veriyordu."* Doğrusu bu. **Ama borç kayıtsız kalırsa yarın kusur diye
yeniden bulunur** — bu şartname onun kaydı.

## ② İŞİN — ALTI KART, sırayla
```
1  İvazzâde Halil Paşa   1770 Kartal (Kagul) Bozgunu'nun serdârı · 🔴 EN ACİL
2  I. Ahmed              SEKİZ maddede geçiyor (1603-1617), kartı YOK
3  Kemal Reis            1499 Sapienza · Osmanlı denizciliğinin kurucularından
4  Burak Reis            aynı dönem denizci
5  Cüneyd Bey            İzmiroğlu · Fetret ve sonrası, Aydın'ın dirilişi
6  Hadım Ali Paşa        Şahkulu isyanında ölen sadrazam
   (+ Elvend Bey — Akkoyunlu, varsa)
```
**Sıra ölçütü `FAYDA ÷ EMEK`:** kaç maddede geçiyorsa o kadar çok görünür.
`I. Ahmed` sekiz maddede geçiyor — muhtemelen en görünür olan o.

⚠️ **ÖNCE VAR OLAN 281 KAYDIN ŞEMASINI OKU** ve aynen kullan. Yeni alan
gerekiyorsa **koordinatöre sor** (arayüz onu çizmiyor olabilir).
⚠️ **`I. Ahmed` bir PADİŞAH** — `padisahlar.js`te kaydı olabilir. Önce bak;
varsa `kisiler.js`e ikinci bir kayıt açmak **iki otorite** doğurur ve bu
depoda üç kez ısırdı. Çakışıyorsa **yazma, bildir.**

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/kisiler.js
           oturumlar/VERI-KISI-ILERLEME.md
🔴 DEĞİL   öteki data/* · arac/* · js/* · index.html · kök *.md
```
🔒 **ÜRETİM KOŞUYORSA:** `arac/*.py`ye **DOKUNMA** — kopyalanmıyor, yazmak
koşuyu ÖLDÜRÜR (83 dakikalık bir koşu böyle kaybedildi). `data/*.js` yazmak
güvenli; yalnız o koşuya **girmez**, sonrakine girer.
Commit: yalnız kendi `oturumlar/` dosyan, pathspec'li. `kisiler.js`i **sen
commit etme** — koordinatör yapar. Sen yaz, "hazır" de.

## ④ SENİ BAĞLAYAN KURALLAR
- **`§4` — TDV birincil.** Altısının da TDV maddesi muhtemelen VAR
  (`kemal-reis` · `burak-reis` · `cuneyd-bey` · `ahmed-i`…). Ölü slug
  tuzağının dört alt-sınıfı: 302 · yanlış madde · boş gövde · boilerplate.
  **Gövdeyi OKU**, başlığa güvenme.
- 🔴 **KIRMIZI ÇİZGİ (Emre, 9 Ağustos):** TDV dışına çıkarsan **yalnız
  AKADEMİK, GÜVENİLİR, BİLİMSEL** kaynak. Forum · blog · içerik çiftliği ·
  YZ metni **KULLANILMAZ.** Vikipedi tek dayanak değildir.
  `kaynak:` alanına **açıkça yaz**; bulunamadıysa `bulunamadı` yaz.
- **TARİH UYDURMA.** Doğum/ölüm yılı tartışmalıysa **tartışmayı yaz**.
- 🔴 **ADI TAM YAZ.** Bu partinin doğuş sebebi budur: *"Halil Paşa"* iki öz
  ada inmediği için yanlış kişiye tutuyordu. Kart adları **ayırt edici**
  olmalı (`İvazzâde Halil Paşa`, `Halil Paşa` değil).

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
**Cevabın KENDİ PENCERENE YAZILMAZ — koordinatör ekranını GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDERENİN kimliği ("From <ad>" etiketi)
    message    : cevabın
```
```
AÇILINCA   "açıldım, brifingi okudum, data/kisiler.js bende"
KALEM KALEM her kart bitince HEMEN
SORULUNCA  iş sürerken bile HEMEN: "İŞ ÜSTÜNDEYİM · şu kartta · ~ne kadar"
BİTİNCE    teslim SAYIYLA
```
🔴 **AKSAKLIK BEKLEMEZ:** `I. Ahmed` `padisahlar.js`te çıkarsa · kaynaklar
çelişirse · bir kişi hiç bulunamazsa → **bekletmeden bildir.**

## ⑥ BİTİŞ ÖLÇÜTÜ — SAYIYLA
```
kisiler.js 281 → 287   (altı kart + varsa Elvend Bey)
her kartta `kaynak:` DOLU — bulunamadıysa `bulunamadı` yazılı
```
🟢 **Ve bitince ŞUNU SINA** — işin gerçek sınavı bu:
```
1770-08-01 Kartal maddesindeki "İvazzâde Halil Paşa" artık kart AÇIYOR mu?
```
Teslim raporu *"bitirdim"* değil: **"281 → 286, biri (Elvend Bey) bulunamadı;
1770 maddesi artık doğru kartı açıyor, sınadım"** bu biçimde.
