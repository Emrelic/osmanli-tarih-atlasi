# LAB-YER-DAYANAK-1003: beş "dayanaksız" `yer` alanının kapanışı

- Tarih: 2026-10-01 · Makine: EMRE (LAB) · Dal: `lab-odak-1003` (origin/main f07a6be9'dan)
- Konu: LAB-ODAK-ORTADOGU-1002'de "kaydın `yer` alanı kendi kaynağında yok" diye işaretlenen 5 kalem (#27 Suruç daha önce kapatıldı).
- Dosya: `data/kronoloji_cok_once1281_ortadogu.js`. **`yer` alanını değiştirmedim**; aşağıdakiler öneri, uygulama koordinatörün.
- Yöntem: Kaydın gösterdiği TDV maddesi bu kez **eşleşme sınırı olmadan** yeniden tarandı. Kaynakta yoksa başka TDV maddeleri ham olarak indirildi. TDV'de de yoksa Vikipedi düz metni okundu ve "ikincil" diye etiketlendi.

## 🔴 Önce bir düzeltme: #34 yanlış alarmdı
1002'de "#34 İnab Kalesi önü kaynakta yok" demiştim. **Yanlıştı.** Kaydın kendi kaynağı TDV HAÇLILAR (https://islamansiklopedisi.org.tr/haclilar) İnab'ı açıkça veriyor:
> «Antakya Prinkepsi Raimond de Poitiers Mesud'a karşı harekete hazırlanırken Mesud ile anlaşan Nûreddin, **İnab Kalesi önünde** savaşa tutuştuğu Antakya birliklerini yenilgiye uğrattı. Raimond bu savaşta öldü (28 Haziran 1149)…»

Sebep: Aramamı `head -2` ile kısıtlamıştım. İlk iki eşleşme "1149" satırlarıydı, İnab satırı üçüncü sıradaydı ve görünmedi. Sınırsız taramada diğer dört kalemin gerçekten kaynakta olmadığı doğrulandı (sayımlar aşağıda).
**Ders:** "Kaynakta yok" hükmü yalnızca **sınırsız** bir taramayla verilebilir. Kısıtlanmış bir aramada eşleşme çıkmaması "bulunamadı" anlamına gelmez.

## Özet

| # | t | Kaydın `yer` alanı | Hüküm | Atlasta |
|---|---|---|---|---|
| 4 | 1029 | Suriye (Ukhuvâne/Taberiye yöresi) | **DOĞRU, kaynağı eksik.** TDV'nin iki başka maddesi veriyor. `kaynak` alanına eklenmeli. | Ukhuvâne YOK · Taberiye YOK |
| 21 | 1105-08-27 | Remle yöresi (Filistin) | **Doğru görünüyor, TDV kaynağı BULUNAMADI.** Yalnızca Vikipedi (ikincil) veriyor. | Remle YOK |
| 31 | 1135-09-25 | Merâga yöresi | **DOĞRU, kaynağı eksik.** TDV DÜBEYS b. SADAKA veriyor. Metin daraltılabilir: "Merâga (Sultan Mesud'un otağı)". | **`Merâga` VAR** (37,3894 / 46,2381) |
| 34 | 1149-06-28 | İnab Kalesi önü | **DOĞRU, kaynağı zaten var.** (Yanlış alarm, yukarıda.) | İnab YOK |
| 46 | 1192-09-01 | Remle | **SİLİNMELİ.** Hiçbir okunan kaynak antlaşmanın imza yerini vermiyor. Olay 1001/1002'de zaten "yersiz" sayılmıştı. | (Remle YOK) |

**Uygulanabilir tek `yer_id`: #31 → `Merâga`**, `kaynak` alanına TDV dubeys-b-sadaka eklendikten sonra.

## Kalem kalem

### #4 · 1029 · Fâtımî ordusu Mirdâsîleri yendi; Sâlih b. Mirdâs öldü
- Kaydın kaynağı TDV MİRDÂSÎLER: Sınırsız taramada "Ukhuv/Uhuv/Taberiye" için **0 eşleşme**. Yer kaynakta yok (1002'deki tespit doğru).
- a) Olay yeri, **başka TDV maddelerinde**:
  - TDV, SÂLİH b. MİRDÂS (https://islamansiklopedisi.org.tr/salih-b-mirdas): «Taraflar **Taberiye gölü yakınlarındaki Ukhuvâine'de** karşılaştılar (25 Rebîülâhir 420 / 13 Mayıs 1029 veya 18 Cemâziyelevvel 420 / 4 Haziran 1029). Sâlih ile küçük oğlu savaşta öldürüldü.»
  - TDV, ZÂHİR el-FÂTIMÎ (https://islamansiklopedisi.org.tr/zahir-el-fatimi): «…Anuş Tegin ed-Dizberî'nin yönettiği Fâtımî ordusu **Taberiye yakınlarındaki Ukhuvâne'de** müttefik kuvvetlerini mağlûp etti (420/1029). Sâlih b. Mirdâs savaş meydanında öldürüldü…»
- b) Atlasta yok: Ukhuvâne, Taberiye.
- c) **`yer` metni doğru; kaynağı eksikti.** Öneri: `kaynak` alanına TDV salih-b-mirdas eklenmeli. 📌 Ek: TDV iki ayrı gün veriyor (13 Mayıs veya 4 Haziran 1029). Kayıt `1029-01-01` olarak duruyor.

### #21 · 1105-08-27 · Remle yöresinde Fâtımî-Dımaşk ordusu ile Kudüs Haçlıları çarpıştı
- Kaydın kaynağı TDV TUĞTEGİN: "Remle/Ramle" için sınırsız taramada **0 eşleşme**.
- TDV'de taranan diğer maddeler (REMLE, YAFA, HAÇLILAR, FÂTIMÎLER, KUDÜS, ÜRDÜN): 1105 savaşının yerini veren cümle yok. YAFA yalnızca «Efdal'in … Filistin'e düzenlediği dört sefer de (1101, 1105, 1113, 1115) sonuçsuz kaldı» diyor.
- a) Yalnızca **Vikipedi (ikincil)**, "Battle of Ramla (1105)" (https://en.wikipedia.org/wiki/Battle_of_Ramla_(1105)): «The Third Battle of Ramla (or Ramleh) took place on 27 August 1105 between the Kingdom of Jerusalem and the Fatimids of Egypt.» Gün de atlasla aynı.
- b) Atlasta yok: Remle.
- c) **Doğru görünüyor, TDV kaynağı bulunamadı.** Vikipedi `§4` açısından tek başına yeterli sayılmayabilir; karar koordinatörün. Öneri: Vikipedi'nin dayandığı akademik eser okunana kadar `yer` alanı "doğrulanmadı" işaretiyle kalsın, `yer_id`'ye çevrilmesin.

### #31 · 1135-09-25 · Mezyedî emîri II. Dübeys Sultan Mesud tarafından öldürüldü
- Kaydın kaynağı TDV MEZYEDÎLER: "Merâga" için sınırsız taramada **0 eşleşme**.
- a) TDV, DÜBEYS b. SADAKA (https://islamansiklopedisi.org.tr/dubeys-b-sadaka): «Bahtiyar, **sultanın Merâga'daki otağının kapısında** izin almak için bekleyen Dübeys'e habersizce yaklaşıp onu katl[etti]…» Destekleyici: TDV MES'ÛD b. MUHAMMED TAPAR «Merâga şehri yakınında kurulan ordugâhta…» (aynı sefer, halifeyle antlaşma).
- b) **Atlasta VAR: `Merâga`** (37,3894 / 46,2381). ⚠️ `Merga vahası` (19,35 / 26,3) başka bir yer, karıştırılmamalı.
- c) **`yer` metni doğru; kaynağı eksikti.** Öneri: `kaynak` alanına TDV dubeys-b-sadaka eklensin, metin "Merâga (Sultan Mesud'un otağı)" olarak daraltılsın. Bundan sonra `yer_id: "Merâga"` yazılabilir.

### #34 · 1149-06-28 · İnab Savaşı
- a) Kaydın kendi kaynağı TDV HAÇLILAR veriyor (alıntı yukarıda).
- b) Atlasta yok: İnab.
- c) **Doğru, kaynağı da var.** Değişiklik gerekmiyor. 1002'deki işaret geri alınmalı.

### #46 · 1192-09-01 · Selâhaddin ile Richard arasında barış
- Kaydın kaynağı TDV EYYÛBÎLER: "Remle" için sınırsız taramada **0 eşleşme**.
- TDV SELÂHADDÎN-i EYYÛBÎ ve TDV YAFA maddeleri antlaşmayı ve tarihini veriyor (YAFA: «Şâban 588'de (Eylül 1192) yapılan antlaşmaya göre Askalân müslümanlarda kalırken Yafa hıristiyanlara bırakıldı»), ama **imza yerini vermiyor**.
- Vikipedi (ikincil), "Treaty of Jaffa (1192)": «The Treaty of Jaffa, less commonly referred to as the Treaty of Ramla…». Burada "Remle" yalnızca antlaşmanın **az kullanılan adı**; imza yeri olarak geçmiyor.
- c) **SİLİNMELİ.** `yer: "Remle"` muhtemelen antlaşmanın adından türetilmiş (bu bir çıkarım). Olay bir antlaşma ve imza yeri kaynakta yok; 1001 #37 ve 1002 #46'da zaten "yersiz" hükmü verildi.

## Bulamadıklarım
- #21 için TDV'de bir dayanak yok. Vikipedi'nin dayandığı akademik eser belirlenmedi ve okunmadı.
- #46 antlaşmasının imza yeri: hiçbir kaynakta yok.
