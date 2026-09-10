# PLAN — BİRİKMİŞ PAKET İŞİ · 10 Eylül 2026 · 1.MURAT (Oturum 0)

> 🔴 **Bu belge compact-güvenlidir.** Buradaki hiçbir sayı hafızadan
> gelmiyor; hepsi ölçüldü ve ölçüm yolu yazıldı.

## ⓪ DURUM — ölçüldü

```
işlenmemiş paket 3 · toplam 53 madde
   parti-emrelic-0042  10 Eylül 12:31  43 madde  0/43
   parti-emrelic-0041  06 Eylül 18:30   1 madde  0/1
   parti-emrelic-0040  04 Eylül 10:42   9 madde  0/9
ek olarak: 💬 19 cevapsız sohbet · 138 açık madde
```

🔴 **NİÇİN GÖRÜNMÜYORDU:** `kutu/ozet.py:86` `_ayni()` takma ad tablosunu
okumuyordu; `ozet.py "Osmanlı Tarih Atlası"` → **0 paket**, `ozet.py
"TARİH COĞRAFYA SİTESİ"` → **41 paket**. Düzeltildi (`16b51c3`), iki ad
artık aynı sonucu veriyor ve EczAsist yalıtımı bozulmadı.
⚠️ Ve en sinsi yanı: `/claudemre-basla` *"kutuyu PROJE ADIYLA çağır"*
diyor — **kanonik adı kullanan koordinatör kendi kutusunu gizliyordu.**
Doktrine uymak kusuru tetikliyordu. `0040` altı gün, `0041` dört gün
bu yüzden bekledi.

## ① SIRA KARARI — 0040 → 0041 → 0042 (mekanik değil, BAĞIMLILIK)

`0042/H-0002` şöyle diyor: *"A görünümü açısından yapacak bir şey yok…
ama **B görünümünde** bu boşlukları paylaştırmamız gerekiyor **biliyorsun**."*
O **A/B görünüm** fikri `0041/H-0001`de önerilmiş ve **hiç cevaplanmamış.**
⇒ 0042'ye önce başlanırsa, cevaplanmamış bir öneri kabul edilmiş sayılır.

## ② 0042'NİN TASNİFİ — 43 madde = 10 küme + 16 tekil = 26 iş

```
①  GÖVDE KENARI (örtüşme·binme·boşluk)  5   H-0002 0008 0013 0016 0039
②  SÜRTÜNME İŞLİYOR MU (su·dağ)         4   H-0005 0009 0012 0015
③  UZAK ZOOM'DA SAVAŞ İŞARETİ           3   H-0023 0024 0026
④  SEFER GÜZERGÂH OKLARI                3   H-0004 0035 0036
⑤  FETİH SIRASI (Trakya-Meriç)          2   H-0018 0019
⑥  MERSİN                               2   H-0014 0033
⑦  PİROT / ŞEHİRKÖY                     2   H-0034 0042
⑧  BAĞDAT — TİMURLU ENKLAVI             2   H-0030 0032
⑨  YANLIŞ PORTRE (anakronizm)           2   H-0040 0041
⑩  ÖNEM ÖLÇÜTÜ (kapsam politikası)      2   H-0017 0020
TEKİL 16  H-0001 0003 0006 0007 0010 0011 0021 0022 0025 0027 0028
          0029 0031 0037 0038 0043
```

**Cins dağılımı:**
```
🔴 KOŞU ŞART (motor+geometri)   ① ② + H-0001        10 madde
🟡 VERİ / TARİH ARAŞTIRMASI     ⑤⑥⑦⑧ + 11 tekil    19 madde
🟢 ARAYÜZ (koşusuz)             ③ ④ + H-0003 0022    8 madde
🟢 GÖRSEL / RENK (koşusuz)      ⑨ + H-0038           3 madde
⚪ EMRE'NİN KARARI              ⑩ + H-0003           3 madde
```
⚠️ **①'in cevabı ②'ye bağlı.** Kenar örtüşmemesi, sürtünmenin
çalışmamasının belirtisi OLABİLİR. Ayrı iş sanıp ayrı çözmek, aynı
kusuru iki kez yanlış düzeltmektir — **önce ② ölçülür.**

## ③ GEÇMİŞTEN DOĞRULANAN DÖRT BULGU (elle okundu, eşleştirici değil)

Emre sordu: *"bunları daha önce de söylemiştim; sistem yapmadı mı,
yapamaz mı buldu, yoksa doğrusu bu muydu?"* — dört ihtimalin **dördü de
gerçek çıktı**, her biri farklı bir maddede:

```
H-0001  → 0029/H-0003  🟢 zaten-doğru   DOĞRUSU BUYMUŞ
   Söğüt-Domaniç bir YAYLAK-KIŞLAK çifti; Harmankaya TDV'ye göre 1313'e
   kadar gerçekten Bizans. Kopukluk 1299'da TARİHEN kapanıyor.
   ⚪ AÇIK: görsel bağ için `SEFERLER`e "yaylak-kışlak göçü" kaydı
     önerilmiş (toprak iddiası OLMADAN) — karar Emre'ye bırakılmış,
     HİÇ CEVAPLANMAMIŞ.

H-0004  → 0029/H-0004  ✅ çözüldü       YAPILDI — VE BU ŞİKÂYETİ O DOĞURDU
   Ok, kendi maddesinden 21 AY ÖNCE beliriyordu; çare çapaya kırpmaktı.
   Ödünleşme AÇIKÇA yazılmış: "uzun seferlerde ok artık seferin TAMAMI
   boyunca değil, ÇAPASINDAN İTİBAREN görünür."
   ⇒ Bugünkü "gösterim yok" muhtemelen o düzeltmenin BEDELİ.

H-0005  → 0030/H-0004  🔵 sırada        YAPILMADI — VE TEŞHİS ÇÜRÜTÜLMÜŞ
   "Kusur topografyada değil NOKTASIZLIKTA. Petek sınırı komşunun
   ortasından geçer; KOMŞU YOKSA sınır değil TAVAN vardır. Maliyet-
   mesafe çalışması bu kalemi ÇÖZMEZ. Çare: NOKTA."
   ⇒ Bu, ② kümenin TAMAMINI yeniden çerçeveliyor.

H-0002  → 0041/H-0001  ⬜ HÜKÜMSÜZ      HİÇ CEVAPLANMADI
   A/B görünüm önerisi. Emre bugün onun üstüne inşa ediyor.
```

## ④ SİCİL BORCU — tekrarı kesen defter BEŞ HAFTADIR YAZILMIYOR

```
kutu/SICIL.md      11 kayıt · hepsi 1-3 Ağustos · sonrası BOŞ
işlenen paket      41
külliyat           478 hüküm · 111'i commit'li   (CEVAP.json'larda)
```
Külliyat **duruyor ama aranabilir değil.** Bu yüzden bir eşleştirici
yazıldı ve **43 maddenin 43'üne** eşleşme buldu — yani gürültülü
(`§11`: *isabet oranı aday kümesiyle birlikte artıyorsa ölçülen şey
anahtar uzayıdır*). Dördü elle doğrulandı; kalan 39 aynı muameleyi
bekliyor.

🔴 **KURAL — bu turda uygulanacak:** her hüküm `CEVAP.json`a **VE**
`SICIL.md`ye yazılır. `S-011`in dersi: *"karar verildi" ile "uygulandı"
AYRI OLAYLARDIR*, ve `✅ ÇÖZÜLDÜ` **commit numarası olmadan yazılamaz.**

## ⑤ BUGÜN İNENLER (bu oturum)

```
8da209f  BUDAMA — CLAUDE.md 402.984 → 143.024 karakter · 192 ders taşındı
bed0808  BUDAMA 2 DURDURULDU — §4·§3.5·§7'de mekanik ölçüt YOK
16b51c3  kutu süzgeci takma ad tablosunu okumuyordu — 53 madde göründü
a54ec30  mahrem.py üç fail-open yolu kapandı
273bb6e  hasat yanlış çekmeceye konmuş — arşiv taşındı
22408e0  tahta birleştirildi (iki bilgisayar · 40 mesaj · kayıp 0)
```

## ⑥ AÇIK KALEMLER — koşu 9'un kuyruğu (dünden)

```
① Mersin mükerrer `s:`/`d:` anahtarı — 164 YILLIK HAYALET OSMANLI
   ⇒ ve bu, 0042/H-0014 + H-0033'ün TAM SEBEBİ. Emre belirtiyi
     bağımsız gördü; teşhis doğrulanmış sayılır.
② mükerrer anahtar 6 kayıt (Şırnak · Mersin · Yagodina · Yedisan ·
   İmâdiye · Honolulu) — `denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py`
③ evren genişletme: `devletler.js` · `olaylar*.js` · bekleyen yamalar
④ mükerrer anahtar DENETİMİ — ②'den SONRA (borç ödenmeden nöbetçi
   eklenirse ilk işi kendi projesini durdurmak olur)
⑤ Mersin/Çukurova KAPSAM sorusu: 7 komşunun 7'si 1920-04-23'te TBMM,
   Mersin değil — ama Fransız işgali Ocak 1922'ye sürdü. Kaynak sorusu.
⑥ ENKLAV yaması 661→652 · SINIR-KAFRIKA 3 künye · CAKISMA küme 3 ·
   renk (17 kimlik renksiz)
```

## ⑥b 🔴 EMRE'NİN TALİMATI (10 Eylül) — TEK KÜLLİYAT, SONRA KAPAT

> *"tüm mesajları geriye doğru oku, aynı olanları ya da paralel olanları
> BİRLEŞTİR, bu işi komple bitirip kapatalım."*

⇒ Tasnif **tek paketin içinde değil**, şu külliyatın tamamında yapılır:
```
0042  43 madde  +  0041  1  +  0040  9   = 53
19 cevapsız sohbet                        = 72 kalem TEK KÜME
```
Ve kümeleme **paket sınırını tanımaz**: `0042/H-0002` ile `0041/H-0001`
aynı işin iki yüzü (A/B görünüm) — ayrı hüküm yazmak aynı kararı iki kez
vermektir, ve ikisi farklı çıkabilir.

📌 Sıra kuralı: `②` kümesi (sürtünme) **önce ölçülür**, çünkü `①`in
(gövde kenarı) cevabı ona bağlı. Ve `H-0005`in geçmiş hükmü teşhisi
zaten çürütmüş: *kusur topografyada değil noktasızlıkta.*

## ⑦ SIRADAKİ ADIM

0040 (9 madde) → 0041 (1 madde) → 0042 (43 madde), her hüküm sicile.
Koşu gerektiren 10 madde ayrı kova: hükümleri yazılır ama **uygulama
koşu 9'a bağlanır** — `data/` koşu sürerken donuktur.
