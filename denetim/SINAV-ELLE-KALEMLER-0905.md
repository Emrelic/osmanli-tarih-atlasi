# SINAV — ELLE YAPILACAKLAR kontrol listesi (M-2903 yeni iş)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

🔴 **Sebep:** bu gece bir beyan (Timbuktu) sessizce düştü ve düşeceğini
önceden yazan uyarı okunmadı. Elle yapılan iş, aracın YAPMADIĞI iş
demektir — hiçbir otomatik denetim bunu yakalamaz. Bu yüzden sınav
**önceden** yazılıyor, merge SIRASINDA değil.

Kaynak: `oturumlar/KOSU-SONRASI-KUYRUK.md` "🔴🔴 ELLE YAPILACAKLAR" bloğu
(dört kalem, koordinatörün kendi derlemesi) — her kalem burada AYRICA
doğrulandı ve gerekirse düzeltildi.

**Ölçülmüş taban (bu turda canlı ölçüldü, kopyalanmadı):**
`py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.yukle(sessiz=True)))"` → **3805**

---

## ① `kur:` — Ndjamena · Şibâm · Şihr

🟡 **KUYRUK METNİYLE FARK BULUNDU:** `KOSU-SONRASI-KUYRUK.md` üçünü de
`kur:` kalemi altında sayıyor, ama BEN yalnız **Ndjamena**'ya `kur:`
verdim (`denetim/yer_yama_belgesiz4.js`) — Şibâm/Şihr'in kendi yaması
(`denetim/yer_yama_hadramut_nokta.js`) `kur:` TAŞIMIYOR, çünkü ikisi de
antik/sürekli yerleşimler ("kuruluş" tarihi yok, tersine `kasitli_bosluk`
ile pre-1450/pre-1881 açık bırakıldı). ⇒ Bu ikisi ② (YENİ NOKTA) kalemine
ait, ①'e değil — kuyruk metni muhtemelen "elle girilecek alanlar"ı tek
listede topladı. **Uygulayan kişi Şibâm/Şihr'e `kur:` ARAMASIN; yoktur.**

```
DOĞRULAMA (merge sonrası):
  grep -n 'ad:"Ndjamena"' data/yerlesimler.js
  BEKLENEN: kur:"1900-01-01" VE s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}]
            İKİSİ DE aynı kayıtta, d:[] KORUNMUŞ (boş kalabilir, dokunulmamalı)
```

**YANLIŞ YAPILIRSA:**
- `kur:` YANLIŞ KAYDA yazılırsa (ad belirsizliği) → sessiz veri bozulması,
  YALNIZ o kaydı `git diff` ile karşılaştırarak fark edilir. **Geri
  alınabilir** (tek satırlık `git revert`/elle silme) ama YALNIZ fark
  edilirse.
- `kur:` alanı henüz `_sahiplik_uygula.py`ye eklenmeden (bkz. aşağıdaki
  "DÖRDÜNCÜ YER" notu) elle girilirse ve SONRA araç `--yaz` ile tekrar
  koşarsa: `kaynak:` ile AYNI sözleşme (`SKALER_KORUNAN`) sayesinde
  ZATEN DOLU alan EZİLMEZ — güvenli, ama sıralama önemli: **önce araç
  düzeltmesi (4 satır), sonra elle giriş, ya da tersi FARK ETMEZ** çünkü
  koruma her iki yönde de çalışır. Tek risk: araç düzeltmesi YAPILMADAN
  yeni bir `yer_yama_*.js` kur: yaması gelirse, o yama SESSİZCE düşer
  (bu bir Ndjamena riski değil, GELECEK bir yama riski — bkz. ONERI-KUR-ALANI).

---

## ② YENİ NOKTA — 50 (48 + Şibâm + Şihr)

```
DOĞRULAMA 1 — SAYI:
  py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.yukle(sessiz=True)))"
  BEKLENEN: 3805 → 3855  (fark tam +50, ne az ne çok)

DOĞRULAMA 2 — 3KM SINAVI (mevcut alet, YENİDEN KOŞULACAK):
  py denetim/ARAC-YENI-NOKTA-3KM-0905-kos.py
  BEKLENEN: 🔴 <3km SIFIR (zaten 5 Eylül 08:45'te 0 ölçülmüştü — bu ELLE
  giriş SIRASINDA bir yazım hatasıyla bozulmadıysa hâlâ 0 olmalı)

DOĞRULAMA 3 — BENİM KENDİ 2 NOKTAM (Şibâm·Şihr) ÖZELİNDE:
  grep -n 'ad:"Şibâm (Hadramut)"\|ad:"Şihr (Hadramut)"' data/yerlesimler*.js
  BEKLENEN Şibâm: kasitli_bosluk:true, bos:"veri-yok",
           s:[{f:"1450-01-01",t:"1923-10-29",d:"kesiri-sultanligi"}]
           (renk BEKLİYOR — kesiri-sultanligi künyesi merge'de EKLENMEDEN
            bu nokta RENKSİZ ÇİZİLECEK, haritada delik AÇAR — sıra şart:
            önce künye+renk, SONRA bu nokta)
  BEKLENEN Şihr:  kasitli_bosluk:true, bos:"kabile",
           s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}],
           isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}],
           v:[{f:"1915-01-01",t:"1919-01-01",k:"..."}]
           (AYNI ŞART — kuayti-sultanligi renklenmeden çizilmemeli)
```

**YANLIŞ YAPILIRSA:**
- lat/lon YAZIM HATASI (bir haneli kayma) → nokta ya (a) mevcut bir
  yerin 3km içine düşer (3km sınavı YAKALAR, ② doğrulama 2 bunu görür)
  ya da (b) yanlış coğrafyaya düşer ve **Voronoi'yi bozarak** komşu
  bölgeyi yanlış boyar (`§2` — 3km sınavı bunu GÖRMEZ, yalnız yakın
  NOKTA çakışmasını görür, yanlış PETEK'i görmez). **Geri alınabilir**
  (koordinat düzeltmesi tek satır) ama yalnız harita üretiminden SONRA
  görsel şikâyetle fark edilirse — pahalı geri bildirim döngüsü.
- Şibâm/Şihr, `kesiri-sultanligi`/`kuayti-sultanligi` künyeleri RENKSİZ
  hâldeyken elle eklenirse: nokta ÇİZİLİR ama **renksiz/varsayılan
  renkte** görünür — `polonya-erken` emsalinin aynısı, harita deliği.
  **Geri alınabilir** (künye rengi üretilince otomatik düzelir, veri
  bozulmaz) ama görsel olarak YANLIŞ bir yayın çıkar ARADA.

---

## ③ Mükellâ — `bos:`/`neden:` silinip himaye kalıbına geçiş

🔴🔴 **EN YÜKSEK RİSKLİ KALEM** — `SKALER_KORUNAN`ın kendi tasarım amacı
tam olarak BUNU (bir araştırmacının beyanını sessizce silmeyi)
ENGELLEMEK; bu düzeltme o korumayı **bilerek ve haklı gerekçeyle**
aşıyor (TDV kanıtı: Kuaytî 1881'de kıyının tamamını aldı, "devletsiz"
YANLIŞ). Araç bunu YAPAMAZ — kasıtlı olarak.

```
DOĞRULAMA:
  grep -n 'ad:"Mukalla"' data/yerlesimler.js
  BEKLENEN (data/yerlesimler.js:1001'in YENİ hâli):
    bos: YOK (satırda hiç geçmemeli)
    neden: YOK (satırda hiç geçmemeli)
    s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}]
    isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}]
    v:[{f:"1915-01-01",t:"1919-01-01",k:"Osmanlı hâkimiyeti (NOMİNAL — bkz. Şihr kaydı)"}]
```

**YANLIŞ YAPILIRSA:**
- `bos:`/`neden:` silinir AMA `s:` yanlış yazılırsa (örn. hâlâ
  `s:"ingiltere"` doğrudan, himaye kalıbı UYGULANMAZSA): araştırmacı
  beyanı (kim ne zaman "devletsiz" dedi, niçin) **GERİ ALINAMAZ** kaybolur
  — yalnız `git log -p -- data/yerlesimler.js` ile ESKİ COMMIT'TEN
  kazılabilir, dosyanın KENDİSİNDE bir iz KALMAZ.
  ⇒ **ÖNLEM: bu satırı değiştiren commit'in mesajına ESKİ DEĞERİ AYNEN
  YAPIŞTIR** (`bos:"devletsiz", neden:"Körfez şeyhliklerinde..."), böylece
  `git log` araması olmadan da geri dönüş metni COMMIT MESAJINDA durur.
- `kuayti-sultanligi` künyesi henüz renksizken bu düzeltme uygulanırsa:
  ②'deki aynı risk (renksiz çizim) — sıra şart, önce renk.

---

## ④ Yakut cinsi — 6 kayıt `devletsiz` → `kabile`

```
DOĞRULAMA — HEM DEĞİŞENİ HEM DEĞİŞMEYENİ SAY (§3.5.1: iki ucu da ölç):
  grep -n 'ad:"Yakutsk"\|ad:"Vilyuysk"\|ad:"Olyokminsk"\|ad:"Jigansk"\|ad:"Verhoyansk"\|ad:"Bulun"' data/yerlesimler*.js
  BEKLENEN: altısının ALTISINDA da bos:"kabile" (devletsiz DEĞİL)

  grep -n 'ad:"Anadır"\|ad:"Çukotka"' data/yerlesimler*.js
  BEKLENEN: ikisinin İKİSİNDE de bos:"devletsiz" KALDI — DOKUNULMADI
```

**YANLIŞ YAPILIRSA:**
- 6 yerine 8'i (Anadır/Çukotka dahil) değiştirilirse: TDV'nin AÇIKÇA
  konuştuğu bir "devletsiz" beyanı (Çukotka: "never paid... their status
  as subjects was little more than a formality") **yanlış cinse** taşınır
  — `§11` NOKTA SİBİRYA'nın kendi sınavının (kaynak konuşuyor mu/susuyor
  mu) İHLALİ olur. **Geri alınabilir** (git log) ama yalnız fark edilirse
  — ve bu kalem tam olarak "39 değil 6" diye bir kez ZATEN daraltılmıştı,
  yani sayı hassasiyeti burada ÖZELLİKLE kırılgan.
- Yamayla İNMEZ (`SKALER_KORUNAN`) — ③'teki gibi araç kasıtlı olarak
  atlıyor, elle giriş ŞART.

---

## SIRA BAĞIMLILIĞI — dört kalem birbirini bekliyor

```
③ ve Şibâm/Şihr(②)  →  RENK BEKLEYEN KÜNYELER (kesiri·kuayti·piombino·
                        agadez·arma·meysur·maratha) ÜRETİLMEDEN
                        TAMAMLANAMAZ — önce renk, sonra bu ikisi
① ④                  →  renkten BAĞIMSIZ, hemen uygulanabilir
```

## ÖZET TABLO

| # | kalem | doğrulama komutu | geri alınabilir mi |
|---|---|---|---|
| ① | kur: (yalnız Ndjamena) | `grep ad:"Ndjamena"` | ✓ kolay, fark edilirse |
| ② | 50 yeni nokta | nokta sayısı 3805→3855 + 3km sınavı | ✓ ama Voronoi hatası pahalı |
| ③ | Mükellâ | `grep ad:"Mukalla"`, bos/neden YOK | 🔴 GİT LOG'SUZ geri alınamaz |
| ④ | Yakut 6+2 | iki grup da ayrı ayrı sayılmalı | ✓ ama sayı kırılgan (39→6 emsali) |

`⏳ BEKLİYORUM: ①'deki Şibâm/Şihr uyuşmazlığı (kur: onlarda YOK) doğru mu okudum, yoksa ayrıca kur: eklemem mi gerekiyordu?`
