# VERİ ZAMAN — ilerleme

**Oturum** tahtada `VERİ ZAMAN 2` · adresi `oturumlar/VERI-ZAMAN.md`
**Tablo satırı** M-0152 · M-0161 (M-0144 · M-0149 · M-0151 · M-0156)
**Dosyam** MEVCUT `data/yerlesimler*.js` — yalnız `kur:` `k:` `kd:` `neden:`

---

## İŞ 1 — 62 HAYALET · ✅ BİTTİ, `Değişmez 5a` 62 → 0

```
kayıt 62 · SİLİNEN dönem 145 · KIRPILAN dönem 58
```
Çare **(b)**: `kur:`tan önce tamamen biten dönem silindi, `kur:`u ortadan
kesen dönemin başı `kur:`a çekildi. Devlet kimliği (`d:` değeri), `t:`,
koordinat, ad — **hiçbirine dokunulmadı.**

### Gerekçe — ÖLÇÜLDÜ, tercih değil
58 kaydın 58'inde ilk dönem `f` değeri **tam olarak `girdi.UFUK[0]`**
(`"1281-01-01"`, `girdi.py:862`) — yani atlasın ufku, araştırılmış bir
tarih değil, **dolgu.** Kalan 4'ünde dolgu ufuk değil ama yine **bölgesel**
bir tarih (Harar'ın işgali · Fransız himayesi · Kondominyum). Aynı yapısal
kusur, farklı maske.

### Kapılar
```
Değişmez 1  sahipsiz   196 → 196   ARTMADI ✓   (kod teyidi: denetle.py:710-712
                                    `if kur and kur > g: continue`)
Değişmez 1b boşluk       0 → 0     ✓
Değişmez 1c belgesiz     7 → 7     ✓
Değişmez 2s             63 → 73    ✓ (tavan 121)
Değişmez 2t             31 → 32    ✓ (tavan 42)
🔴 Değişmez 2            0 → 4     ✗ — M-0174, koordinatörde
```

### Koşuya girdi mi — ÖLÇÜLDÜ
```
son veri yazımım   data/yerlesimler_h2_afrika.js   02:34:35
öteki beş dosya                                    02:28:27
koşu başlangıcı    kosu_egim_16agu.log             02:38:40   ⇒ +4 dk
```
⚠️ Bu bir **GİRİŞ** delili. Çıktıda (`donemler.js`) doğrulanmadı.

### Açtığım 4 kırılma — kronoloji borcu, benim dosyam değil
```
1856-01-01  Cağbûb     TDV `cagbub`: Şeyh Senûsî "1855'te bölgeye yerleşerek
                       ... zâviye yaptıran" · "1856'da Sultan Abdülmecid'in
                       fermanıyla ... vergiden muaf tutulması"
                       ⚠️ kur:1856 FERMAN tarihi olabilir → (a) adayı
1859-04-25  Portsaid   TDV `port-said`: "1859'da Süveyş Kanalı'nın kazı
                       çalışmaları sırasında ... işçiler için kurulan baraka
                       köyü"  ⇒ kur: TUTUYOR
1863-04-27  İsmâiliye  TDV `ismailiye`: "Süveyş Kanalı'nın yapımı sırasında
                       (1862-1869) önce inşaatta çalışan yabancı mühendis ve
                       idarecilerin oturmaları için"  ⇒ TUTUYOR
1869-01-01  Nâsıriye · Ramâdi   TDV ölü (302); `nasiriye--irak` `ramadi--irak`
                       `anbar` de ölü. GENEL madde (`irak` · `basra`)
                       DENENMEDİ ⇒ "bulunamadı" DEMİYORUM
```

### (c) adayları — YAZILMADI, koordinatöre bildirildi
```
Ufa       TDV `ufa`: "arkeolojik kazılar, Ufa'nın olduğu yerde 1574'ten ÖNCE
          bir yerleşim yerinin varlığına AÇIK BİÇİMDE işaret eder" ·
          İbn Haldûn: Altınorda'nın büyük şehirlerinden biri "Başkırt"
Tıtvân    TDV `titvan`: kuruluş 2./8. yy'a çıkıyor; 1483-84'te Endülüs
          göçmenleri şehri "ISSIZ halde buldular", "yeniden kuruldu"
          ⇒ kur:1484 doğru, ama 1281-~1400 ayrı bir yerleşim dönemi
Bodrum    TDV `bodrum`: şövalyeler "1415'TEN İTİBAREN" kaleye girişti
          ⇒ kayıttaki kur:1402 TDV ile ÇELİŞİYOR
St. Ptbg  Nyen/Nyenschantz — ölçülmedi, bilinen aday
```

---

## İŞ 2 — 120 ŞÜPHELİ · 🟡 ÖLÇÜLDÜ, YAZILMADI

### Yapı bulgusu — PAYLAŞILAN GÜN süzgeci
```
120 nokta · 43 AYRI gün
TEK başına gün taşıyan   24   ← gün muhtemelen NOKTANIN KENDİ kuruluşu
PAYLAŞILAN gün taşıyan   96   ← gün BÖLGESEL bir olay

1899-01-19 x23  Mısır-İngiliz Kondominyum   1897-01-01 x17  Menelik
1744-01-01 x 9  Dir'iye/Suudi ittifakı      1635-01-01 x 7  Rus ilerleyişi
1450-01-01 x 5  İrokua Konfederasyonu       1885-01-26 x 3  Hartum'un düşüşü
```
🔴 **UYARI:** `kur:` = ilk dönem başı yazmak bu 96 kayıtta **UYDURMA** olur.
Riyad 1744'te kurulmuş olmaz (1744 Suudi tarihi); Barnaul 1635'te kurulmadı
(~1730); Semipalatinsk 1635'te değil 1718'de.
⚠️ Süzgeç HÜKÜM DEĞİL: `Berezov`+`Surgut` ikisi de 1592 taşıyor ve ikisi de
gerçekten o kampanyada kuruldu.

### Bölgesel dağılım
```
AFRIKA 57 · SIBIRYA 46 · DIGER 11 (Amerika) · DOGU-ASYA 6
```

### Sibirya kutusu (50-73°K / 52-112°D) — 55 nokta
```
kur: VAR 16 · 5b 29 · 5c 10
```
⚠️ Bu sayılar **programla** sayıldı. Daha önce ekrandan gözle sayıp
`33` ve `12` yazmıştım — İKİSİ DE YANLIŞTI (M-0197'de düzeltildi).
📌 Ders: **sayıyı betik saymadıysa sayı yoktur.**

### Sibirya üç kova (önerilen)
```
A ~10  büyük ostroglar — akademik kaynak aranır (isabet yüksek beklenir)
B  ~7  1635-01-01'in yedisi — 1635 HİÇBİRİNİN kuruluşu değil
C  ~6  tur:"bolge" — bir bölgenin "kuruluş tarihi" YOKTUR
       ⇒ `kur:` bunlara uygulanır mı? KOORDİNATÖRE SORULDU (M-0217)
```

---

## KAYNAK DURUMU — ölçüldü

### TDV
```
🟢 CANLI  ufa · bodrum · benderabbas · titvan · ismailiye · cagbub ·
          port-said · cibuti · harar · urgenc · kircaali · sultaniyye ·
          sibir-hanligi · yakutlar
🔴 ÖLÜ    kilitbahir · busehr · susa · ferahabad · senendec · muhammere ·
          erak · ramadi · nasiriye · suvayra · sefsaven · diredava ·
          bursudan · portsaid(→ port-said canlı) · sultaniye(→ sultaniyye)
🔴 ÖLÜ    sibirya · yakutsk · tomsk · irkutsk · omsk · mangazeya · tobolsk ·
   (Sibirya) barnaul · semipalatinsk · vladivostok · sahalin   — 11/11
⚠️ TUZAK  `yenisehir` CANLI ama açtığı madde **Teselya/Larissa Yenişehri**,
          Bursa Yenişehri DEĞİL. Bursa için ayrı madde ARANDI, YOK.
```

### Akademik (TDV susunca, `§4` + M-0218)
```
🔴 Springer      gövde → idp.springer.com (303)     "aradım, ERİŞEMEDİM"
🔴 Forsyth CUP   Internet Archive'da kayıtlı, ödünç  "aradım, ERİŞEMEDİM"
                 kilitli; search-inside uçları boş
🟢 CyberLeninka  AÇIK — Rus hakemli dergileri, açık erişim. ÇALIŞIYOR.
```

### İlk üç ölçüm — biri teyit, ikisi çelişki
```
🟢 Krasnoyarsk  1628, "сыном боярским Андреем Дубенским"    veri 1628 ✓
🔴 Berezov      "основанного в 1593 г. Березова"            veri 1592
                (Solodkin, Novogardia 2020)
🔴 Yakutsk      "Lensky Fort 1632" · "Yakutsky Fort 1643"   veri 1632
                ⇒ İKİ AYRI KALE, TEK KAYIT — (c) sınıfı
🟢 Tomsk        "В сентябре 1604 г." Гаврила Писемский + Василий Тырков;
                yapım emri Moskova'dan Surgut'a 25 Mart 1604
                veri 1604-01-01 ⇒ YIL tutuyor, AY daha hassas
```
### İkinci tur — 4 kayıt daha (CyberLeninka, hakemli)
```
🟢 Yeniseysk    "Енисейский острог ... основан в 1619"        veri 1619 ✓
🟡 Kuznetsk     kaynak "1618-1620" aralığı veriyor            veri 1618
                ⇒ TUTUYOR ama tek gün değil ARALIK
🔴 Turuhansk    kaynak yalnız "начало XVII в." diyor          veri 1607
                ⇒ kaynak GÜN/YIL VERMİYOR → `kur:` YAZILMAZ,
                  "aradım, kaynak yıl vermiyor" damgası
🟡 Mangazeya    keşif seferi 1597/98 Moskova'dan; şehrin kendi
                kuruluşu bu makalede YOK                      veri 1601
                ⇒ ikinci kaynak gerek
```
### Üçüncü tur — 4 kayıt daha
```
🟢 Bratsk ostrogu  "В 1631 г. на притоке Ангары построен Братский острог"
                                                              veri 1631 ✓
🟢 İrkutsk         "основан в 1661"                            veri 1661 ✓
                   ⚠️ ama aynı kaynak: bazıları 1652'yi sayıyor — Yakov
                   (İvan) Pohabov'un Dyaçi adasındaki kışlağı ⇒ (c) NÜANSI
🔴 Nerçinsk        kaynak "основан в 1656"                     veri 1653
                   ⇒ ÜÇ YIL FARK
—  Selenginsk · Ohotsk   bu turda BULUNAMADI, ikinci tur gerek
```

## 🔴 ÖN TUR SONUCU — 11 KAYIT ÖRNEKLENDİ, ve ASIL BULGU BU
```
🟢 TEYİT       5   Krasnoyarsk 1628 · Yeniseysk 1619 · Bratsk 1631 ·
                   İrkutsk 1661 · Tomsk 1604 (yıl)
🟡 KISMÎ       2   Kuznetsk (kaynak 1618-1620 aralığı) · Mangazeya
🔴 ÇELİŞKİ     3   Berezov 1592→1593 · Yakutsk 1632→(Lensky 1632/
                   Yakutsky 1643) · Nerçinsk 1653→1656
🔴 KAYNAK SUSUYOR 1  Turuhansk (yalnız "начало XVII в.")
```
🔴 **11 kaydın 3'ünde mevcut tarih akademik kaynakla ÇELİŞİYOR.**
⇒ *"`kur:` = ilk dönem başı yaz"* yaklaşımı bu üçünde **yanlış tarihi
kalıcılaştırırdı.** Kaynak turu bir formalite değil; ölçülmüş bir gerek.
⚠️ 11 bir ÖRNEKLEM, oran DEĞİL — 29'un tamamına genellemiyorum.

📌 **Yöntem doğrulandı ama verim kısmî:** dört kayıttan biri temiz teyit,
ikisi kısmî, biri kaynağın susması. ⇒ 29 kaydın hepsine `kur:` yazılacağı
beklentisi **gerçekçi değil**; bir kısmı `bulunamadı`/`erişilemedi` olacak
ve bu bir SONUÇtur.

🟢 **Yan bulgu:** `Пустозерск` için müstakil hakemli makale VAR
(*"ПУСТОЗЕРСК — ПЕРВЫЙ РУССКИЙ ГОРОД ЗА ПОЛЯРНЫМ КРУГОМ"*) — koordinatörün
M-0123'te bana verdiği dört `5c` şüphelisinden biri.

### Toplu kaynak ARANDI, YOK
Sibirya vekayinamesi *"Описание о поставлении городов и острогов в Сибири"* —
adı birebir aradığım liste. Makale (Solodkin 2020) onu **metin tenkidi**
açısından inceliyor, **kuruluş listesini AKTARMIYOR.**
📌 `§4` ②'nin akademik hâli: doğru başlık, yanlış içerik.

---

## İŞ 3 — KADEME · ⬜ BAŞLANMADI
```
k: dağılımı  0→1586 · 1→54 · 2→113 · 3→281 · 4→493   (kademeli 941)
kd: yazılı   0        kd_gun() çalışıyor ✓ (sınandı)
k:'sı olmayan 1586'nın türü: sehir 877 · liman 398 · kale 193 · bolge 118
```
ÇIKARIM (ölçüm değil): `bolge` türlü 118 kademe ALMAMALI ⇒ gerçek aday ~1468.

---

## AÇIK SORULAR — koordinatörde
```
M-0174  Değişmez 2'nin 4 açığı → (a) mı?
M-0195  96 "kuruluşu bulunamadı" kaydı `neden:` alanına yazılsın mı?
M-0217  tur:"bolge" 118 nokta — `kur:` ve `k:` bunlara uygulanır mı?
        (en acil: Sibirya 29'un 6'sı bu türde)
```

## BEKLEYEN İŞ
```
Yakut toprakları (Orta Lena)  `veri-yok` → `kabile`
  TDV `yakutlar` CANLI, gövde KENDİM okundu: "yarı uruğlar (küçük kabileler)
  halinde yaşıyordu", her conun başında "kendi beyleri (toyon)", Kurikanlar'ın
  kuzeye göçü "XIII. yüzyılda Cengiz Han döneminden itibaren"
  ⇒ kaynak SUSMUYOR ⇒ hüküm ÇÜRÜK. Kayıt `yerlesimler_sibirya.js:36`.
  M-0190: koordinatör kuyruğa aldı, işaretini bekliyorum.
  🟢 `ek31` oturumu da bağımsız olarak aynı sonuca vardı (M-0205).
```

## DURUM
🔒 GİRDİ KİLİTLİ (M-0184). Veriye tek satır yazmıyorum, `arac/`a bu oturumda
hiç dokunmadım. Diskte 6 `data/*.js` dosyası değişti (İŞ 1), **commit YOK**.
