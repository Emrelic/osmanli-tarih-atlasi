# PAKET-0035 — TEK BAŞINA 38 MADDE

**Koordinatör:** 1.MURAT · **Açılış:** 2 Eylül 2026

---

## SEN KİMSİN
`parti-emrelic-0035` paketinin **tek işçisisin**. 102 maddenin **38'i
açık** — bugün kalan 131 açık maddenin **%29'u**, ve tek bir pakette.
Öteki paketler 2-11 madde taşıyor; bu yüzden ayrı bir oturumsun.

```
py arac/_acik_madde.py parti-emrelic-0035
    sirada 26 · olculecek 12
```

## AÇILIŞTA YAPACAĞIN ÜÇ ŞEY
```
① CLAUDE.md — BAŞTAN SONA. §4 (kaynak kuralı ve TDV slug tuzakları),
   §7 (dosya sahipliği), §7.1 (haberleşme), §11 (hatalar).
② `py arac/_acik_madde.py parti-emrelic-0035` — 38 maddeyi OKU.
③ Tahtaya açılış mesajı; `session_id`ini
   `mcp__ccd_session_mgmt__get_session('self')` ile ÖLÇ, TAHMİN ETME.
```

## YÖNTEM — her madde için, sırayla
```
① OKU      notu sonuna kadar. Bir önceki turun ölçümü orada.
② DOĞRULA  devraldığın HİÇBİR rakamı doğrulamadan aktarma.
           Bugün beş sayı bu yüzden çürüdü ve beşini de işçi oturumlar
           yakaladı.
③ AYIR     "ölçtüm" ile "çıkardım" AYRI SATIR olsun.
           Bir günde ALTI vakada ölçüm doğruydu ve ÇIKARIM yanlıştı;
           tek satırda birleşince çıkarım, ölçümün güvenilirliğini
           ödünç alıyor.
④ YAZ      düzeltilecek veri varsa KENDİ ad alanında:
           `data/<tur>_p0035.js` → `window.<TUR>_P0035`
           🔴 `yerlesimler*.js`e DOKUNMA — yama olarak yaz.
⑤ BİLDİR   kalem kalem, biriktirmeden.
```

## 🔴 DÖRT KIRMIZI ÇİZGİ
```
① TARİH UYDURMA. Gün bilinmiyorsa `YYYY-01-01`. Kaynak susuyorsa
   `bulunamadı` yaz — o bir SONUÇTUR ve uydurmaktan kat kat değerlidir.
② TDV SLUG TUZAĞI — dört cinsi var ve testleri farklı:
      ① ölü slug           302  (arama sayfasına yönlenir)
      ② canlı slug, YANLIŞ madde   200 + yanlış başlık (`ordu`→askerî ordu,
                                   doğrusu `ordu--sehir`)
      ③ canlı slug, BOŞ gövde      200 + doğru başlık
      ④ canlı slug, BOİLERPLATE    200 ama içerik HİÇ gelmez
   ⇒ "Sayfa açıldı" ≠ "madde var". Ve dar slug tutmazsa KAPSAYICI
     maddeyi dene — bu bugün yedi kez işe yaradı.
③ TÜRKÇE YAZIM EKSENİ. Bir adı ASCII ile aramak Türkçe yazılmışı
   BULMAZ: `"Üsküp".toLowerCase()` = `"üsküp"`, içinde `"usku"` YOK.
   🔴 Bugün bu tuzak altı MÜKERRER NOKTA yazdırmak üzereydi (`Budin`in
     yanına `Buda`, `Üsküp`ün yanına `Skopje`) ve ilk düşen KOORDİNATÖRDÜ.
④ 3 KM KURALI. Yeni nokta yazmadan önce 3 km içinde başka nokta var mı
   diye BAK — ve yalnız bağlı evrende değil, YAZILMAYI BEKLEYEN
   dosyalarda da. Bu gece `el-Ulâ` 100 metre arayla iki dosyada çıktı ve
   tek tek sınavda GÖRÜNMÜYORDU.
   Araç: `py arac/_baglama_onsinav.py <dosyan.js>`
```

## 🟢 EMRE'NİN BUGÜNKÜ İKİ İLKESİ — bu pakete doğrudan değiyor
```
① NOKTA YAZMANIN ÖLÇÜTÜ MESAFE DEĞİL TARİHÎ VARLIKTIR
   "Yerleşim var ise nokta konur. Yok ise uyduracak halimiz yok.
    Devasa boşluklar olacaksa olsun."
   ⇒ Bir boşluğu kapatmak için nokta ÜRETME. Boşluk kusur değil SONUÇ.
② BOŞLUĞUN CİNSİ KAYDEDİLİR
   siyasî yapı var → o devletin krallığı olarak boyanır
   aşiret yapısı var → haritada gösterilir
   hiçbir şey yok → boş kalır
   Veride karşılığı `bos:` alanı (devletsiz · veri-yok · kabile ·
   insansiz · hata). Sınavı: kaynağa sor — KONUŞUYORSA `devletsiz`,
   SUSUYORSA `veri-yok`.
```

## RAPOR
`denetim/HUKUM-PAKET-0035.json` · `CEVAP.json`a **YAZMA** (§7).
Her hüküm bir ölçüme ya da Emre'nin bir kararına dayanacak; **dayanaksız
"cozuldu" YOK.**
🔴 Ve `senin-kararin` damgası artık İŞLİYOR — bugün iki alet kusuru
düzeltildi (koordinatörün verdiği kararlar geri sekiyordu). Gerçekten
karar gerektiren bir madde varsa o damgayı yaz, çekinme.

## 📌 BUGÜNÜN DERSİ
Yedi alet kusuru çıktı ve yedisi tek kökten:
***alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli.***
Ve yedisi de yakalandı çünkü aletler **"BULUNAMADI" diye BASTI.**
⇒ *Sessiz atlama, yanlış sonuçtan pahalıdır* — yanlış sonuç bir gün fark
edilir, sessiz atlama hiçbir iz bırakmaz ve üstüne "tamamlandı" yazılır.
