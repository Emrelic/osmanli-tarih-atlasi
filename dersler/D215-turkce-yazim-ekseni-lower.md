# Türkçe yazım ekseni ve `"İ".lower()` tuzağı

> Kimlik `D215` · `CLAUDE.md §4` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### 🔴 AYNI TUZAĞIN KİMLİK TARAFI: **TÜRKÇE YAZIM EKSENİ**

8 Ağustos 2026'da ölçüldü. Bir kimliği **İngilizce/yerel yazımıyla** aramak,
**Türkçe yazılmış künyeyi bulmaz** — ve "bulunamadı" hükmü yanlış çıkar:
```
aranan      gerçek `id:`              künye adı
aceh    →   ace-sultanligi            Açe Sultanlığı
gowa    →   gova-makassar             Gova (Makassar)
pattani →   malay-sultanliklari       (Kedah · Patani · Perak — TOPLU künye)
dai-viet→   le · mac · tran · ho · tay-son …   (HÂNEDAN künyeleri)
```
⚠️ Son ikisi ayrı bir alt-sınıf: kimlik **var** ama **başka bir taneciklikte**
— toplu künye ya da hânedan künyeleri hâlinde.
⇒ **Kural:** `d:` yazarken kendi transliterasyonunu değil, `devletler.js`teki
**gerçek `id:`yi** kullan. Ve *"bu kimlik yok"* demeden önce **`bolge:` alanını
tara** — elle yazılmış bir aday listesi gerçek kümenin %40'ını kaçırabiliyor
(ölçüldü: 33 elle · 55 gerçek).

#### 🔴🔴 VE BU EKSENİN **KOD** YÜZÜ: `"İ".lower()` İKİ KOD NOKTASI VERİR
*(3 Eylül 2026 · `DUNYA-KAMERIKA-0903` ölçtü — 377 adayın **58'ini**
sessizce kaçırdıktan sonra)*

Yukarıdaki ders **insan yazımını** anlatıyor (`usku` ≠ `Üsküp`). Bunun
bir de **Python'un kendi davranışından** doğan hâli var ve **daha
sinsi**, çünkü kodu yazan doğru şeyi yaptığını sanır:
```python
"İnyupiak".lower()  →  'i̇nyupiak'      # 'i' + U+0307 BİRLEŞİK NOKTA
"inyupiak" in "İnyupiak".lower()  →  False
len("İstanbul") 8  →  len(.lower()) 9   # dizgi UZUYOR
```
⚠️ **`casefold()` DE ÇÖZMEZ** — aynı sonucu verir. Ve alet **ötmez,
hata vermez, yalnız sessizce kaçırır.**

🟢 **ÇARE — ORTAK NORMALLEŞTİRİCİ** (`denetim/ARAC-NORMAL-0903.py`),
ve `lower()` çağrılmadan **ÖNCE** eşleme yapar:
```python
s.translate({İ→i, I→i, ı→i, Ş→s, Ğ→g, Ü→u, Ö→o, Ç→c, Â→a, ’→' …})
→ NFKD → birleşik işaretleri at → lower()
```
Ölçüldü — `lower()`ın kaçırdığı beşin beşi:
```
aranan       ad             lower()   norm()
inyupiak     İnyupiak       False     True
usku         Üsküp          False     True
egirdir      Eğirdir        False     True
igdir        Iğdır          False     True
diyarbakir   Diyarbekir     False     False  ← 🔴 VE BU DOĞRU
```
🔴 **Son satır kasıtlı:** `Diyarbekir` ↔ `Diyarbakır` bir **yazım
varyantı değil AYRI BİR ADdır.** Normalleştirici onu çözmez ve
**çözmemelidir** — onu bir **eşanlam sözlüğü** çözer (`Budin ↔ Buda`
ile aynı sınıf). İkisini karıştırmak, normalleştiriciyi bir sözlük
sanmaktır.

📌 Ve bu, `§11`in *"aletin gösterdiği ≠ dosyada yazan"* ailesinin
**dil** yüzü: burada yalan söyleyen bir dosya ya da bir birim değil,
**standart kütüphanenin kendisi.**
