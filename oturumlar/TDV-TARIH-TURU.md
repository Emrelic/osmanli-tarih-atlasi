# TDV TARİH TURU — KUTU DENETİM'in bilerek boş bıraktığı günleri bul

## ⓪ KİMLİK — HADDİN
```
SEN         : ARAŞTIRMACI/ÇAPRAZ oturum · adın TDV TARİH TURU
DEĞİLSİN    : koordinatör DEĞİLSİN · genel koordinatör DEĞİLSİN
ÜSTÜN       : KOORDİNATÖR (Oturum 0)      ALTIN : kimse
YASAKLARIN  : iş dağıtmak · 🔴 VERİYE DOKUNMAK — sen ARAŞTIRIR ve
              RAPORLARSIN, düzeltmezsin · `arac/*` · `data/*` · `js/*` ·
              `index.html` · kök `*.md`
```
🔴 `CLAUDE.md §7`: *"Oturum 2 ve 6 düzeltme yapmaz, yalnız rapor yazar.
Düzeltmeyi 0 uygular; yoksa iki oturum aynı satırı ters yönlerde değiştirir."*

## ① NİÇİN VARSIN — ölçülmüş boşluk
KUTU DENETİM oturumu Emre'nin **71 açık maddesini** ölçtü ve teslim etti. Ama
teslim raporunda şunu **açıkça** yazdı:

> *"**TDV'ye HİÇ BAKMADIM.** Bütün 'şu tarih şüpheli' hükümlerim veri içi
> tutarsızlığa, madde başlığına ve künye ömrüne dayanıyor — **kaynağa
> değil.** Doğru günler raporda **bilerek BOŞ**; uydurmamak için."*

⇒ Yani **11 tarih kalemi** teşhis edilmiş ama **doğru tarihi kimse aramamış.**
Sen o boşluğu doldurmak için varsın. Bu, ölçüm ile kaynak arasındaki
işbölümünün ikinci yarısı.

## ② İŞİN
**Çalışma dosyan:** `denetim/KUTU-BULGULAR.md` — `sebep: tarih` etiketli
kalemler (11 tane) ve rapor §⑥'daki dağıtım listesi.

**En büyük dördü (koordinatörün ölçtüğü, sen DOĞRULA):**
```
42 yıl  ERZİNCAN   d:1473-08-11 — o gün OTLUKBELİ SAVAŞI'nın günü.
                   🔴 Bir SAVAŞ günü FETİH günü olarak yazılmış olabilir.
                   SORU: Erzincan Osmanlı idaresine gerçekte NE ZAMAN girdi?
27 yıl  SİVRİHİSAR Germiyan'ın öteki noktalarından ayrık duruyor.
                   SORU: çeyizle mi (1381?) yoksa başka tarihte mi geçti?
        ÇANKIRI    veri 1354-08-01 diyor; 1392 iddiası var (ölçülmemiş).
13 yıl  İLHANLI    Konya·Aksaray·Niğde s:ilhanli → 1366, künye t:1353.
                   SORU: bu üç şehir 1353-1366 arası GERÇEKTE kimindi?
                   (Eretna mı, Karaman mı — `§3.5.1`: İKİ UÇ DA ölçülür)
        ANKARA     s:ahiler 1281→1354-08-01, künye 1290→1354-01-01
                   ⇒ iki uçtan da taşıyor: 9,0 yıl erken · 0,6 yıl geç
```
Her kalem için **üç şey** üret:
```
① DOĞRU TARİH   TDV'nin verdiği gün/ay/yıl — TAM ALINTIYLA
② SLUG          hangi madde, ve HTTP kodu + gövde okundu mu
③ GÜVEN         net · tartışmalı · bulunamadı
```
⚠️ Kaynak gün vermiyorsa **`YYYY-01-01` öner ve "yıl beyanı" diye işaretle.**
**TARİH UYDURMA.**

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/TDV-TARIH.md   (sen oluşturacaksın)
           oturumlar/TDV-TARIH-ILERLEME.md
🔴 DEĞİL   data/* · arac/* · js/* · index.html · kök *.md · ClaudEmre/*
```
Commit: yalnız kendi `oturumlar/` dosyan, pathspec'li.

## ④ SENİ BAĞLAYAN KURALLAR
- **`§4` — TDV birincil.** Ölü slug tuzağının **DÖRT** alt-sınıfı var ve
  hepsi sana çıkacak:
  ```
  ① 302 → ölü.  curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
  ② 200 + YANLIŞ madde   ordu→askerî ordu (doğrusu ordu--sehir) · cin→fıkıh
  ③ 200 + doğru başlık, GÖVDE BOŞ   mogadisu (doğrusu makdisu)
  ④ 200 + doğru başlık, BOİLERPLATE — içerik HİÇ gelmez (mazenderan)
     ⇒ ④'te "TDV'de yok" demek YANLIŞ; doğru hüküm "çekilemedi, tekrar denenecek"
  ```
  🔴 **Kod ve başlık maddenin VAR olduğunu söyler, DOĞRU madde olduğunu
  söylemez.** Onu yalnız **gövdeyi okumak** ele verir.
- 🟢 **Dar slug tutmazsa GENEL maddeyi dene.** Ölçüldü: %0 sanılan bir grup
  ikinci denemede **%59** tuttu; tek `amerika` maddesi beş kaydı doğruladı.
- 🔴 **KIRMIZI ÇİZGİ (Emre, 9 Ağustos):** TDV dışına çıkarsan **yalnız
  AKADEMİK, GÜVENİLİR, BİLİMSEL** kaynak — Encyclopaedia Iranica ·
  Cambridge History · üniversite yayını · hakemli dergi · standart el kitabı.
  🔴 Forum · blog · içerik çiftliği · kaynaksız derleme · YZ metni ·
  "tarih sayfası" tipi popüler site **KULLANILMAZ.** Vikipedi **tek dayanak
  değildir** — yalnız *"hangi maddeye bakayım"* sorusunu cevaplar.
- **`§3.5.1` — İKİ UÇ DA ÖLÇÜLÜR.** Bir tarihi geri çekmek başka bir devleti
  fazla gösterebilir. *"Bu tarafta fazlalık var mı"* yetmez.
- **`§3.5` — devletin yıkılışı ≠ o yerin fethi.** 1517-04-13 Memlük'ün
  sonudur, Kızıldeniz kıyısının fethi DEĞİLDİR.
- **🔴 `bulunamadı` diye yaz** — *arandı-yok*, *araştırılmadı*'dan kat kat
  değerlidir. Ve **`ölçmedim` diye yaz** — ölçülmüş ile hatırlanmış yan yana
  durursa okuyan ikisini de ölçülmüş sanır.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
**Cevabın KENDİ PENCERENE YAZILMAZ — koordinatör ekranını GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDERENİN kimliği ("From <ad>" etiketi)
    message    : cevabın
```
```
AÇILINCA   "açıldım, brifingi okudum, denetim/TDV-TARIH.md bende"
KALEM KALEM her tarih kalemi bitince HEMEN — biriktirme
SORULUNCA  iş sürerken bile HEMEN: "İŞ ÜSTÜNDEYİM · şu kalemde · ~ne kadar"
BİTİNCE    teslim SAYIYLA
```
🔴 **AKSAKLIK BEKLEMEZ:** iki kaynak çelişiyorsa **hangisini seçeceğine sen
karar verme, SOR** · bir kalem senin yetkin dışına taşıyorsa bildir · bir
slug ④ sınıfına düşerse (boilerplate) hemen söyle, tekrar denenecek.

## ⑥ BİTİŞ ÖLÇÜTÜ — SAYIYLA
```
11 tarih kaleminin 11'i için: doğru tarih · slug · güven damgası
   (bulunamayanlar `bulunamadı` diye YAZILI — boş bırakılmaz)
```
Teslim raporu *"bitirdim"* değil: **"11 → 7 net · 2 tartışmalı · 2
bulunamadı; en büyüğü Erzincan: TDV `erzincan` maddesi fethi 1473 değil
15xx-xx-xx veriyor, alıntı şu"** bu biçimde.

📌 Ve senin raporun doğrudan **veri düzeltmesine** dönüşecek — koordinatör
uygulayacak. O yüzden her tarihin yanında **hangi kayda** yazılacağı da
belirtilsin (yerleşim adı + alan: `d:` / `s:` / `v:`).
