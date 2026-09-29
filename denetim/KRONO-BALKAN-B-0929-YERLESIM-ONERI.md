# KRONO-BALKAN-B-0929 — YERLEŞİM (`s:`/`d:`/`v:`) ÖNERİLERİ

29 Eylül 2026 · `data/yerlesimler*.js`e DOKUNULMADI (Oturum 0'ın dosyası, ORTAK §1).
Koşuda uygulanmak üzere biriktirilir.

---

## §1 🔴 Sırp özerkliği — üç yerleşim, `1830-11-08` → `1830-10-17`

Gerekçe ve kaynak: `-DUZELTME.md` §1 (TDV `sirbistan`: "17 Ekim 1830'da verilen bir imtiyaz
fermanıyla Sırplar muhtar bir idare elde etti"). **Çekirdek madde `olaylar_ek.js:73` ile
BİRLİKTE uygulanmalı.**

| Dosya:satır | Yerleşim | Mevcut | Önerilen |
|---|---|---|---|
| `yerlesimler.js:2312` | Kragujevac | `d:[…,{f:"1739-09-18",t:"1830-11-08"}]` · `v:[{f:"1830-11-08",t:"1878-07-13",…}]` | `t:"1830-10-17"` · `f:"1830-10-17"` |
| `yerlesimler.js:2313` | Çaçak | aynı | aynı |
| `yerlesimler_ek29.js:469-470` | Yagodina (Jagodina) | `d:[…,{f:"1739-09-18",t:"1830-11-08"}]` · `v:[{f:"1830-11-08",t:"1878-07-13"}]` | `t:"1830-10-17"` · `f:"1830-10-17"` |

⚠️ Sınama: `1830-11-08` başka yerleşimde geçmiyor (grep, 29 Eylül: yalnız bu üç kayıt).
Değişmez 1 (sahipsizlik): `d` bitişi ile `v` başlangıcı aynı güne çekildiği için boşluk açılmaz.

---

## §2 🟡 Serez — `bizans→sirbistan` kırılması yıl-temsilî `1345-01-01` → `1345-09-25`

| Dosya:satır | Yerleşim | Mevcut | Önerilen |
|---|---|---|---|
| `yerlesimler.js:367` | Serez | `{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1383-09-19",d:"sirbistan"}` | `t:"1345-09-25"` · `f:"1345-09-25"` |

Kaynak: TDV `serez` yılı veriyor ("1345'te Sırp Kralı Stefan Duşan tarafından ele geçirildiğinde
Sırp İmparatorluğu'nun başşehri yapıldı"); gün J. V. A. Fine, *The Late Medieval Balkans*
(1987). Yeni madde: `kronoloji_cok_sirbistan.js` 1345-09-25.
⚠️ Aynı yıl-temsilî kırılmayı taşıyan öteki yedi yerleşim (Drama, Karaferye, Vodina, Kılkış,
Gevgili, Petriç, Nevrokop) için gün **bulunamadı** — Duşan'ın Makedonya fethi 1342-1345'e
yayılır, Serez'in günü onlara TAŞINMAZ (CLAUDE.md §4: komşu günü şartlı; aynı olay değil).
⚠️ `kronoloji_cok_*` dosyaları bugün Değişmez 2 evreninde DEĞİL (SENKRON-DEFTER M-5398) —
bu öneri uygulansa da kapı yeni maddeyi görmez; evren kararı koordinatörde.

---

## §3 🟢 Akçahisar (Kruja) — `1478-06-15` → `1478-06-16` (düşük öncelik)

| Dosya:satır | Yerleşim | Mevcut | Önerilen |
|---|---|---|---|
| `yerlesimler.js:437` | Akçahisar (Kruja) | `s:[{f:"1281-01-01",t:"1478-06-15",d:"arnavutluk"},…]` · `d:[{f:"1478-06-15",…}]` | `1478-06-16` (iki uç) |

Kaynak: TDV `kruya` "15 Rebîülevvel 883'te (16 Haziran 1478)". Çekirdek `olaylar_ek5.js:131`
ile birlikte. **Leş ve Mat'a (`yerlesimler_ok104.js`) DOKUNULMAMALI** — onların 06-15'i ayrı
bir TDV cümlesine dayanıyor (dosyanın kendi başlık notu).

---

## §4 — Ölçülen ama öneri ÇIKARILAMAYAN açık kırılmalar (SENKRON-DEFTER, paket BALKAN-B)

| Gün | Yerleşim | eski → yeni | Durum |
|---|---|---|---|
| 1460-01-01 (yıl-t.) | Tuzla (Bosna) | bosna → OSMANLI | Kaynak **bulunamadı** (TDV `bosna-hersek`/`bosna-eyaleti` Tuzla'nın düşüş yılını vermiyor). |
| 1466-06-01 | Trebinye | hersek → OSMANLI | Kaynak **bulunamadı**; en yakın madde Arnavutluk seferi. |
| 1482-01-01 (yıl-t.) | Herseknovi | bosna → OSMANLI | Harita TDV ile uyumlu; kapanması çekirdek maddenin 1483→1482 düzeltmesine bağlı (`-DUZELTME.md` §4). ⚠️ `eski` kimliği `bosna` — `hersek` olması gerekmez mi? (Herceg Novi Kosača kalesiydi; ölçülmedi.) |
| 1439-08-27 | Kragujevac · Yagodina · Çaçak | sirbistan → OSMANLI | Çekirdek madde aynı günde var ("Semendire'nin ilk alınışı") ama kova AÇIK diyor; sebebi (madde yerleşimi adıyla anmıyor mu?) bu pakette ölçülmedi. |
| 1919-08-12 | Lendava · Murska Sobota | macaristan-naiplik → yugoslavya | **Kapatıldı (içerik):** `kronoloji_cok_sirbistan.js` 1919-08-12 Prekmurje maddesi, `yer_id:"Murska Sobota"`. Kapı görmez (evren dışı). |
| 1345 · 1383 · 1385-1395 | Makedonya yerleşimleri | sirbistan → OSMANLI | Çekirdek fetih maddeleri var; birincil paket KRONO-BALKAN-D ile ortak — onlara bırakıldı. |
