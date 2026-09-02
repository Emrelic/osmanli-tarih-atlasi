# ARAYÜZ KUYRUK — `js/app.js`in TEK SAHİBİ

**Koordinatör:** 1.MURAT · **Açılış:** 2 Eylül 2026

---

## SEN KİMSİN
`js/app.js` · `index.html` · `css/style.css` üçünün **tek sahibisin**
(`CLAUDE.md §7`, Oturum 1). Bu üç dosyaya senden başkası yazmaz; sen de
onların dışına yazmazsın.

🔴 **VE BUGÜN SAHİPSİZDİLER.** Arayüz kuyruğunda **12 kalem** birikti ve
ikisi doğrudan Emre'nin bugünkü kararı. Kaç oturum açılırsa açılsın bu
kuyruğu **tek bir oturum** işleyebilir — sebebi kapasite değil `§7`.

## AÇILIŞTA YAPACAĞIN İLK ÜÇ ŞEY
```
① CLAUDE.md'yi BAŞTAN SONA oku — özellikle §7 (dosya sahipliği),
   §7.1 (haberleşme) ve §11 (tekrarlanmaması gereken hatalar)
② denetim/KUYRUK-ARAYUZ-P0003.md — SENİN İŞ LİSTEN, 12 kalem
③ Tahtaya AÇILIŞ mesajı at:
   py arac/tahta.py yaz --kim "ARAYUZ" --kime "1.MURAT" --mesaj "
   açıldım · brifingi okudum · js/app.js + index.html + css bende
   oturum kimliğim : <mcp__ccd_session_mgmt__get_session('self') ile ÖLÇ>
   "
   🔴 `session_id`i TAHMİN ETME — scratchpad yolundaki UUID DEĞİLDİR.
     Bir oturum bugün bütün mesajlarını yanlış kimlikle attı.
```

## İŞ SIRASI — ilk ikisi EMRE'NİN BUGÜNKÜ KARARI
```
① HİMAYE ŞERİDİ (kuyruk kalemi ⑫)                    🔴 EMRE'NİN KARARI
   "Himaye ince Osmanlı kırmızısı şerit ile o ülke topraklarını
    çevreleyen bir yapı olarak görülsün, iç bölge ülkenin kendi rengi
    olacak."
   şema: v:[{f,t,k,himaye:true}]  (VERI-YAPISI.md, commit 39278dd)
   🔴 TARAMA DESENİ YASAK — tarama bu projede ZATEN İŞGAL demek
     (app.js:970 isgalDesenleriKur, 83 kayıt). Şerit bir `line` katmanı
     olacak, dolgu değil, ve opaklığı TAM olacak.
   ⚠️ Veri henüz inmedi (başka bir kol işliyor). Sınavı İKİ KEZ yap:
     şimdi sahte kayıtla, veri inince GERÇEK dosyayla.

② "HAKKINDA" ALANI GERİ GELSİN (kuyruk ⑤ · 0024/H-0010)  🔴 EMRE'NİN KARARI
   Minimal bir sürüm damgası: "r4776 · 2 Eylül" gibi. Küçük iş.

③ ALFA-HARMAN (kuyruk ①)                              EN ÇOK RAPOR EDİLEN
   Dört bağımsız oturum, dört ayrı tarihsel örnek, TEK kod konumu:
   devlet-dolgu 0.44 · vassal-dolgu 0.60 · osmanli-dolgu 0.68 — üçü de
   saydam, üst üste gelince renk bozuluyor.
   🔴 Ve ① ile ③ AYNI AİLE: himaye şeridi dördüncü bir SAYDAM katman
     olarak eklenirse bu kuyruğa yeni bir vaka eklersin.

④ SAVASLAR ÖNEK SÜZGECİ (kuyruk ⑪)                    ÖLÇÜLDÜ, CANLI ZARAR
   app.js `OLAYLAR` ve `SEFERLER` için önek deseni yazmış, `SAVASLAR`
   için HİÇ yazmamış — on bir yerde çıplak `window.SAVASLAR`.
   `data/savaslar_ok104.js` (Böğürdelen 1521 kuşatması) BAĞLI ve
   GÖRÜNMÜYOR. `SEFERLER` deseninin birebir eşi yazılacak.

⑤ BOŞLUĞUN CİNSİ HARİTADA GÖRÜNSÜN                    🆕 EMRE'NİN İLKESİ
   Emre bugün: "① siyasî yapı varsa o devletin krallığı şeklinde BOYANIR
   ② aşiret yapısı varsa haritada GÖSTERİLİR ③ hiçbir şey yoksa BOŞ KALIR."
   Veride `bos:` alanı bu cinsleri ZATEN tutuyor (devletsiz · veri-yok ·
   kabile · insansiz · hata) — ama harita onları GÖSTERMİYOR.
   ⇒ ② ve ③'ün görsel karşılığı yok. Bu bir ARAYÜZ borcu.

⑥-⑫  kuyruğun kalanı — sırası sende, ama BANA BİLDİR
```

## KABUL ÖLÇÜTÜ — her kalem için, istisnasız (`C13`, ÜÇ AYAK)
```
① GEÇME      kusur yokken davranış DEĞİŞMEMELİ
② ATEŞLEME   her kusur dalı için AYRI AYRI, gerçekten ötüyor mu
③ GİRDİ      girdiyi GERÇEK kaynağından okuma yolu koşuldu mu
```
🔴 ③ bugün eklendi ve sebebi ölçüldü: bir nöbetçi ①②'yi geçti ama iki
sınav da **enjekte** kayıtla yapılmıştı; ilk gerçek dosyada *"0 kayıt,
TEMİZ"* dedi ve **var olmak için yazıldığı kusuru kendi üzerinde üretti.**

## 🔴 BEŞ YASAK
```
① `data/*.js`e YAZMA — veri başka kolların.
② `arac/uret_petek.py` · `girdi.py` · `renkler.py` — ASLA. Parmak izli;
   koşu sırasında yazmak koşuyu ÖLDÜRÜR (8 Ağustos: 83 dakika).
③ `git commit -m` KULLANMA. Metni `Write` ile dosyaya yaz, `git commit
   -F <dosya> -- <yol>` ile ver. `git add -- <yol>` YETMİYOR —
   pathspec COMMIT'te de olacak (bu gece paylaşılan index'ten başkasının
   silmesi bir commit'e girdi ve bir madde kayboldu).
④ heredoc · `py -c` · `sed` ile Türkçe/backtick metin — YASAK (§11).
⑤ ÖLÇMEDEN "cozuldu" yazma.
```

## RAPOR
Hükmünü `denetim/HUKUM-ARAYUZ-KUYRUK.json`a yaz — `CEVAP.json`a **yazma**,
birleştirmeyi koordinatör yapar.
Kalem kalem bildir, biriktirme. Aksaklığı **bekletmeden** bildir.

## 📌 BUGÜNÜN DERSİ — işine yarayacak
Bugün yedi alet kusuru çıktı ve yedisi tek kökten:
***alet, aradığı şeyin NEREDE OLMAYACAĞINI da bilmeli.***
Ve yedisi de yakalandı çünkü aletler **"BULUNAMADI" diye BASTI.**
⇒ *Sessiz atlama, yanlış sonuçtan pahalıdır.*
