# KITA 2 — YERLEŞİM İNİŞİ (`data/yerlesimler*.js` TEK SAHİBİ)

| alan | değer |
|---|---|
| **AD** | KITA 2 — YERLEŞİM İNİŞİ |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **SAHİP OLDUĞUN DOSYA** | `data/yerlesimler*.js` (girdi kümesinin tamamı) — **YALNIZ SEN** |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. ZEMİN — ve bu iş SENİN KENDİ ÖLÇÜMÜNÜN DEVAMI

```
🟢 YAYIN İNDİ  a8feb8d · damga r7487 · data/ ve arac/ SERBEST
🟢 SENİN ÇAKIŞMA TARAMAN BİTTİ — denetim/CAKISMA-BEKLEYEN-PAKETLER-0911.md
   hüküm: "GERÇEK ÇATIŞMA: 0". İniş kapısını AÇAN o rapordu.
```

## 1. İŞİN — üç paket, tek dosya ailesi

### ① `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json` — 5 yeni nokta
`Kostajnica · Bosanski Novi · Bosanska Dubica · Jasenovac · Bosanski Brod`
*(Karlofça hattı — senin kendi işindi, kendi çelişkini de kaydetmişsin:
`🔴_CELISKI_TDV_ILE_BIRINCIL_METIN` iki kalem. **Onu önce çöz, sonra yaz.**)*

### ② `denetim/HAZIRLIK-LUBNAN-NOKTA-0911.json` — 4 aday nokta
`Deyrülkamer · Ba'lebek · Sûr (Tyre)` + 1

🔴 **BAĞIMLILIK:** bu noktalar `kid:lubnan-emirligi` / `kid:harfusogullari`
kullanıyor. Bu iki kimlik **KITA 1 `PAKET-KUNYE`yi indirene kadar YOKTUR.**
⇒ KITA 1 bitirdiğini tahtaya yazana kadar Lübnan noktalarını **YAZMA**;
Bosna ve ③ ile başla. KITA 1'e tahtadan sorabilirsin (`§7.1③` serbest).

### ③ `denetim/PAKET-VERI-DUZELTME-A-0911.json` — 14 kayıt
```
iran → hurmuz-sultanligi relabel        3 kayıt (Hürmüz Adası · Kişm · Kiş)
lehistan dönem BÖLME                     9 kayıt   (kırılma 1569-07-01)
toskana dönem BÖLME                      2 kayıt   (kırılma 1532-01-01)
```

🔴🔴 **TEK GERÇEK RİSK, kendi raporunda yazılı:** Toskana'nın
**1532-01-01 kırılmasının kronoloji maddesi PAKETTE YOK** — yalnız
*"adayı hazırlandı"* deniyor. Bu madde **birlikte inmezse `Değişmez 2`
anlık 1 AÇIK verir.**
⇒ **KITA 4 o maddeyi yazıyor.** Toskana bölmesini **KITA 4 maddeyi teslim
edene kadar YAZMA.** Tahtadan teyit al.

⚠️ Ve kendi raporunun `②.4` bulgusu: `iran` sapmasının kalan **5/8**'i
(Tarki · Ağraham burnu · Derbend · Dihistan ovası · Kızılarvat) bu turda
**çözülmüyor** — dokunma, ayrı kalem olarak AÇIK bırak ve teslimde say.

## 2. NASIL YAZILIR

```
① ÖNCE ÖLÇ     py arac/denetle.py  → tabanı KENDİN kur
② MÜKERRER SINAVI ŞART (D002/D054): yeni nokta yazmadan önce
   ARAC-NORMAL (denetim/ARAC-NORMAL-0903.py) ile ara — "atlasta yok"
   hükmü normalleştiricisiz verilemez. 3 km eşiği bir YASAK değil bir
   ŞÜPHE eşiğidir (D066).
③ YAZ           yalnız data/yerlesimler*.js
④ SONRA ÖLÇ     py arac/denetle.py  +  py arac/renk_olc.py  (§9 — ŞART)
⑤ ÖNGÖRÜNÜ ÖNCEDEN YAZ (D022): sahipsiz / enklav / aşan / Değişmez 2
   dört sayısı nasıl değişecek? Kendi raporunda tahminin ZATEN VAR
   (314 · 4 · 650 · 132) — onu sına.
```

🔴 **COMMIT ETME.** `data/` commit'i 1.MURAT'ta.

## 3. TESLİM — sayıyla
```
① kaç nokta yazıldı / kaç aday elendi ve NEDEN
② 14 kaydın kaçı işlendi, hangileri bağımlılık yüzünden bekliyor
③ denetle.py ÖNCE / SONRA · renk_olc yeni çakışma
④ ÖNGÖRÜN TUTTU MU (kendi D022 tahminin)
⑤ iran'ın çözülmeyen 5 kaydı — açık kalem olarak say
```

## 4. HABERLEŞME (`§7.1`)
🔴 Kendi pencerene yazmak = cevap vermemek. Koordinatöre
`mcp__ccd_session_mgmt__send_message`. Yatay (KITA 1 · KITA 4) tahtadan:
`py arac/tahta.py yaz --kim "KITA 2" --kime "KITA 1" --mesaj "..."`
**Aksaklık BEKLEMEZ** (`§7.1⑥`).
