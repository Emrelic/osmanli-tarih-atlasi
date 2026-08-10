# KRONOLOJİ 16 — 121 açık yabancı kırılmaya madde yaz

## ⓪ KİMLİK — HADDİN
```
SEN         : YAPIMCI oturum · adın KRONOLOJİ 16
DEĞİLSİN    : koordinatör DEĞİLSİN · ÇAPRAZ DEĞİLSİN
ÜSTÜN       : KOORDİNATÖR (Oturum 0)      ALTIN : kimse
YASAKLARIN  : iş dağıtmak · `data/yerlesimler*.js`e DOKUNMAK ·
              `data/devletler.js`e dokunmak (VERİ DEVLET 2'nin) ·
              `arac/*` · `js/*` · `index.html` · kök `*.md`
```

## ① NİÇİN VARSIN — ölçülmüş
```
Değişmez 2s   712 YABANCI kırılması · 120 AÇIK · TAVAN 121 → BİR PUAN BOŞLUK (koordinatör 121→120 indirdi)
```
🔴 **Tavan dolu demek: bir sonraki nokta partisi bir kırılma açarsa değişmez
KIRILIR ve yayın durur.** Sen bu basıncı almak için varsın.

*Açık kırılma* = haritada bir yabancı devletin toprağı el değiştiriyor ama
±30 gün içinde onu anlatan **hiçbir kronoloji maddesi yok** — yani kullanıcı
değişimi görüyor, sebebini **okuyamıyor.** Kullanıcının en çok şikâyet ettiği
hata sınıfı budur.

## ② İŞİN
```bash
py arac/denetle.py --ayrinti        # 121 açık kırılmanın TAM listesi burada
```
Her açık kırılma için: **gün · hangi yerleşimler · hangi devletten hangi
devlete** bilgisi listede var. Sen o güne bir madde yazacaksın.

**Sıra:** en çok yerleşim taşıyan kırılma önce (bir madde çok deliği kapatır).

Madde biçimi (`VERI-YAPISI.md`'ye bak, ama özü):
```js
{ t:"YYYY-AA-GG", tur:"fetih|antlasma|savas|kayip|siyaset", b:"...",
  ayrinti:"2-4 cümle", kaynak:"<slug ya da bulunamadı>", duygu:"..." }
```
🔴 **GÜN YAZ.** Ay hassasiyetli `t:"1526-08"` ayın 1'ine genişler ve gün
hassasiyetli yerleşim değişimlerinden ÖNCE sıralanır — senkron bozulur.
Gün bilinmiyorsa `YYYY-01-01` yaz (bu, *"yıl biliniyor, gün bilinmiyor"*
demenin kabul edilmiş yoludur).

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/olaylar_ek16.js  (YENİ dosya — sen oluşturacaksın)
           oturumlar/KRONOLOJI-16-ILERLEME.md
🔴 DEĞİL   öteki data/* · arac/* · js/* · index.html · kök *.md
```
⚠️ **Yeni dosya `index.html`e VE `arac/girdi.py`ye bağlanmalı** — ikisi de
BENDE. Dosyayı aç, birkaç madde yaz, **bana haber ver**, ben bağlarım.
Bağlanmadan yazdığın madde **görünmez** ve denetim onu **saymaz**.

## ④ SENİ BAĞLAYAN KURALLAR
- **`CLAUDE.md §4` — TDV birincil.** Ölü slug tuzağının dört alt-sınıfı var;
  `curl -s -o /dev/null -w "%{http_code}"` ile sına (302 = ölü).
- 🔴 **KIRMIZI ÇİZGİ (Emre, 9 Ağustos):** TDV dışına çıkarsan **yalnız
  akademik/bilimsel** kaynak. Forum · blog · içerik çiftliği · kaynaksız
  derleme · YZ metni **KULLANILMAZ.** Vikipedi tek dayanak değildir.
  `kaynak:` alanına **açıkça yaz**; bulunamadıysa `bulunamadı` yaz.
- **TARİH UYDURMA.** Kaynak gün vermiyorsa `YYYY-01-01`.
- **`CLAUDE.md §3.5` — hayalet devlet.** Madde yazarken devletin o tarihte
  yaşadığını doğrula.
- **Ölçütü GEVŞETME.** "Aynı yıl" değil, **±30 gün**.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
**Cevabın KENDİ PENCERENE YAZILMAZ — koordinatör ekranını GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDERENİN kimliği ("From <ad>" etiketi)
    message    : cevabın
```
```
AÇILINCA   "açıldım, brifingi okudum, data/olaylar_ek16.js bende"
İLK 5 MADDE yazınca HEMEN haber ver → dosyayı BAĞLAYAYIM
KALEM KALEM her 10 maddede bir bildir, biriktirme
SORULUNCA  iş sürerken bile HEMEN: "İŞ ÜSTÜNDEYİM · şu aşamada · ~ne kadar"
BİTİNCE    teslim SAYIYLA: "121 → N açık kaldı, şu N'i şu sebeple"
```
🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa **sen karar verme, sor** ·
bir kırılma anlaşılmıyorsa sor · sayı beklenenden çok farklıysa bildir.

## ⑥ BİTİŞ ÖLÇÜTÜ — SAYIYLA
```
2s AÇIK: 120 → hedef ≤ 60   (yarıya inmesi tavanı rahatlatır)
```
Her tur sonunda `py arac/denetle.py` koştur ve **açık sayısının düştüğünü
GÖSTER.** Düşmüyorsa maddeler yanlış güne yazılmış demektir.
⚠️ Ve `bulunamadı` yazmaktan çekinme — **arandı-yok**, *araştırılmadı*'dan
kat kat değerlidir.
