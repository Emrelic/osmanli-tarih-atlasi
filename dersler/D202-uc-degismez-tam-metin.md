# Üç değişmez — eski sayılar, ölçüt tarihi, Değişmez 3 teşhisi

> Kimlik `D202` · `CLAUDE.md §3` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 3. İhlal edilemez değişmezler

Her veri değişikliğinden sonra üçü de denetlenir. Denetim betikleri geçici
dosyalardır; aşağıdaki komutlar kendi kendine yeterlidir.

### Değişmez 1 — Sahipsizlik yok
Hiçbir yerleşim, var olduğu bir tarihte sahipsiz kalmamalı. Sahipsiz nokta haritada
delik demektir.

```bash
node -e "global.window={};eval(require('fs').readFileSync('data/yerlesimler.js','utf8'));const Y=window.YERLESIMLER;const iR=(a,g)=>a&&a.some(p=>p.f<=g&&g<p.t);const b={};for(let y=1300;y<=1920;y+=20){const g=y+'-06-15';for(const t of Y){if(t.kur&&t.kur>g)continue;if(iR(t.d,g)||iR(t.s,g)||iR(t.v,g))continue;(b[t.ad]=b[t.ad]||[]).push(y);}}console.log('yerlesim:',Y.length,'| sahipsiz:',Object.keys(b).length);for(const [a,ys] of Object.entries(b))console.log('  '+a.padEnd(24)+ys.join(','));"
```

**Şu an: 764 yerleşimin 34'ü sahipsiz ve hepsi KASTEN öyle** — Sahra ve Rub'ul Hâlî
çölleri, 1744 öncesi Necid, körfez şeyhlikleri. Bunlar boş kalması *doğru* olan
yerlerdir; çölün emilip Osmanlı boyanmasını engellemek için konmuş dolgu
noktalarıdır. **Sayı 34'ün üstüne çıkarsa yeni bir delik açılmış demektir.**

⚠️ Yukarıdaki tek satırlık komut 1300'den başlar; **kuruluş devrini hiç örneklemez.**
İnegöl ve Bilecik'in 1281-1299 arası sahipsizliği tam bu yüzden aylarca görülmedi.
Gerçek denetim `arac/denetle.py`'dedir ve 1285/1290/1295 kesitlerini de alır — bu
komut yalnız hızlı bir bakış içindir.

### Değişmez 2 — Sessiz toprak değişimi yok
Haritadaki her kırılmanın (bir `d:` ya da `v:` döneminin başı veya sonu) **±30 gün
içinde** bir kronoloji maddesi olmalı. Yoksa değişim, o güne rastgele denk gelen
alakasız bir maddenin altında belirir — kullanıcının en çok şikâyet ettiği hata bu.

```bash
node -e "const fs=require('fs'),K='data/';global.window={};for(const f of ['olaylar.js','olaylar_ek.js','olaylar_ek2.js','olaylar_ek3.js','olaylar_ek4.js','olaylar_ek5.js','olaylar_ek6.js'])eval(fs.readFileSync(K+f,'utf8'));const O=Object.keys(window).filter(k=>k.startsWith('OLAYLAR')).flatMap(k=>window[k]);global.window={};eval(fs.readFileSync(K+'yerlesimler.js','utf8'));const Y=window.YERLESIMLER;const tam=s=>s.length===7?s+'-01':s,g=s=>Math.round(Date.UTC(+s.slice(0,4),+s.slice(5,7)-1,+(s.slice(8,10)||1))/864e5);const ol=O.map(o=>({g:g(tam(o.t)),b:o.b}));const kir={};for(const y of Y)for(const p of (y.d||[]).concat(y.v||[]))for(const [d,t] of [[p.f,'kazanc'],[p.t,'kayip']]){if(!d||d<='1281-01-01'||d>='1923-10-29')continue;(kir[d]=kir[d]||{t,ad:new Set()}).ad.add(y.ad);}const H=Object.keys(kir).sort(),ac=[];for(const d of H){const gd=g(d),e=ol.reduce((a,o)=>Math.abs(o.g-gd)<Math.abs(a.g-gd)?o:a,ol[0]);if(Math.abs(e.g-gd)>30)ac.push([d,kir[d].t,[...kir[d].ad].slice(0,4).join(', '),e.b]);}console.log('kirilma:',H.length,'| ACIK:',ac.length);for(const r of ac)console.log('  '+r.join('  |  '));"
```

**Şu an: 433 kırılmanın 433'ü maddeli, AÇIK = 0.**

> Tarihsel not: bir ara "238/238 maddeli" deniyordu; o ölçüt fazla gevşekti.
> Ölçüt ±30 güne çekilince 51 maddesiz kırılma ortaya çıktı ve hepsine madde yazıldı
> (`olaylar_ek6.js`). **Ölçütü gevşetme.**

### Değişmez 3 — Dört boyut birbiriyle çelişmez 🟡 henüz sağlanmıyor
Verinin dört boyutu var: **tarih × yerleşim × petek × bölge**. Herhangi bir tarihte,
herhangi bir bölgede "hangi yerleşimler var ve kime aitler" sorusunun **tek tutarlı
cevabı** olmalıdır.

Bu değişmez bugün **sağlanmıyor**, çünkü bölge boyutunun (`k`/`m` alanları) zaman
boyutu yok: bir yerleşim bütün tarih boyunca tek bir merkeze bağlı. Ölçüldü —
**359 yerleşim-tarih çiftinde yerleşim ile bağlı olduğu merkez farklı devletlerin
elinde** (1300'de Söğüt Osmanlı ama `m:"Bursa"` ve Bursa Bizans gibi).

⚠️ **Bu satır 8 Ağustos 2026'da 311 → 359 düzeltildi** — sayı veri büyüdükçe
büyüyor, yani `B3`: *belgedeki sayı ölçüm değil, ölçümün fotoğrafıdır.*
🔴 **Ve asıl teşhis o gün kondu (`BOYUTLAR.md`):** kusur `m:` alanının
güncellenmemesi değil, **`m:`nin yanlış eksende olması.** `m:` bir **idarî
merkez** tutuyor — yani **siyasî** bir şey — ama **coğrafî** bir gruplama için
kullanılıyor. ⇒ Mekân ekseni (M) ile konu ekseni (K) birbirine karışıyor ve
**ikisi de bozuluyor.** Doğrusu: `m:` coğrafî alan göstermeli (Bitinya, Trakya),
idarî bağ ise K-siyasî'nin bir katmanı olmalı **ve zaman boyutu taşımalı.**

> 🔴🔴 **BU TEŞHİS ÖLÇÜLDÜ VE ÇOK GENİŞ ÇIKTI — 7 Eylül 2026,
> `DEGISMEZ3-0907`.** Teşhis bir yıl boyunca **sınanmadan** taşındı;
> sınanabilir hâle getirildiğinde payı ölçüldü:
> ```
> ÖNGÖRÜ (ölçümden ÖNCE yazıldı)  coğrafî kova %10-30
> ÖLÇÜM                            çift %1,0 · çift-gün %7,0   ⇒ ÇÜRÜDÜ
> ```
> ```
> 🟠 EKSEN kusuru (saf coğrafî · uyum <%5)     7 çift   (%1,0)
> 🟢 ZAMAN kusuru (siyasî — bir dönem AYNI devlette olmuş)  683   (%93,0)
> 🔴 saf coğrafî (hiç aynı devlette olmamış)     0
> ```
> ⇒ ***`m:` DOĞRU EKSENDE.*** 690 çiftin **683'ünde** yerleşim ile merkez
> gerçekten bir dönem aynı devlette olmuş; eksik olan tek şey **ZAMAN
> PENCERESİ** — yani `kd:`nin çözdüğü şey.
> ⚠️ **Ama %7 «yok» demek değil:** o 7 çifti (6'sı Yanya — Korfu ·
> Otranto · Kefalonya) `kd:` **çözmez**, ve tek satırda raporlansalardı
> *"çözüldü"* sayılıp kaybolurlardı.
>
> 📌 **Ve dersin kendisi:** bir teşhis **doğru olabilir ve yine de
> yanlış BÜYÜKLÜKTE** olabilir. Bu teşhis *"asıl kusur bu"* diye
> yazıldı; ölçüm onu **kusurun onda birinden azına** indirdi. `§11`in
> *"ölçüm doğru, çıkarım yanlış"* ailesinin **ağırlık** yüzü: burada
> çıkarım yanlış değil, **oransız.**
>
> 🟢 **VE TAM SAYI DA ÖLÇÜLDÜ — 493 bir örneklemdi:**
> ```
> 6 kesitlik ölçüm (bugün)      493   (8 Ağu 359 · 4 Ağu 311)
> TAM TARAMA benzersiz çift      690  ·  çelişki aralığı 2531
> 🔴 6 kesitin HİÇ GÖRMEDİĞİ    436 / 690  (%63)
> çelişki EVRENİ                 814  (`m:` taşıyan) — 3805 DEĞİL
> ```
> 🟢 Ve tam tarama **denklik sınavıyla** bağlandı: 6 kesite daraltılınca
> `denetle.degismez3` ile birebir (`493=493 · 486=486`), yoksa
> `exit(1)`. ⇒ `§11`in *"bir aleti taklit eden ölçüm, onun EŞİĞİNİ ve
> KOVA YAPISINI da taşımalı"* dersinin ilk **önceden sınanmış**
> uygulaması — `4s` kovasındaki sessiz ayrışma tekrarlanmadı.

Bugün görsel hataya dönüşmüyor çünkü bölge katmanı yalnız Osmanlı dönemlerinde
çiziliyor. **Dünya kapsamında her devletin idari kademesi gerekecek ve o zaman bu
model çöker.** Ayrıntı ve çözüm: `YOL-HARITASI.md` §6.5.

⚠️ **`OSMANLI` ile `tâbi` çelişki SAYILMAZ.** İkisi de Osmanlı sistemi içindedir ve
ayrımın bilerek yan yana durduğu yerler var: Boğdan voyvodalıktır ama Hotin rayası
doğrudandır, Kırım Hanlığı tâbidir ama Kefe sancağı doğrudandır, Erdel prensliktir
ama Varad eyalettir. `denetle.py` bu çifti muaf tutuyor.

---
