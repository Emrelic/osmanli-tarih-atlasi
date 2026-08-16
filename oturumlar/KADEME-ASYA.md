# KADEME-ASYA — KADEME + kd:, bölge: GÜNEY + DOĞU + GÜNEYDOĞU ASYA

**MODEL** Opus · **DİZİN** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
**ClaudEmre** HAYIR · **ADIN** Emre ne verdiyse o

## 🔴 ÖNCE ŞUNU OKU — kuralların TAMAMI ORADA

    oturumlar/KADEME-KD.md

Bu dosya onun **bölge ayağıdır** ve yalnız iki şeyi belirler: hangi
kutuyu taradığın, hangi dosyaya yazdığın. Kademe kuralları, `kd:`
şeması, kaynak kırmızı çizgisi, kabul kapısı, nöbetçi kurulumu — hepsi
`KADEME-KD.md`de. **Kopyalamadım**; kopyalanan kural bayatlar.

## SENİN BÖLGEN

```
GÜNEY + DOĞU + GÜNEYDOĞU ASYA
lat -11..55 / lon 63..146 — **536 kademesiz nokta, EN BÜYÜK KÜME.** Hint · Çin · Japonya · Kore · Güneydoğu Asya. TDV kapsaması %53-57, yani `bulunamadı` çok olacak ve bu bir SONUÇTUR.
```

## 🔴 VE BİR DÜZELTME — `k:` OSMANLI KATEGORİSİ DEĞİL

`k:1` veride zaten *"Osmanlı eyalet merkezi"* demek değil,
***"kendi siyasî yapısının başkenti"*** demek. Ölçüldü: `k:1` kümesinde
Bursa ve Edirne ile birlikte **Tenochtitlan · Cusco · Lima · Mohawk ·
Acoma** duruyor.
⇒ Eşleme **ada göre değil MERTEBEYE göre**:
```
k:1  o devletin BAŞKENTİ / vilâyet düzeyi merkez
k:2  ikinci kademe (sancak · kaymakamlık · duchy · han)
k:3  üçüncü kademe (kaza · KADILIK · parish · prefecture)
k:4  kasaba · köy · kale
```
⚠️ Kaynağın **kendi terimini** `neden:` alanına yaz. Osmanlı adını
UYDURMA — Çin'de "sancak" yoktu.
⚠️ Emin olamadığın yerde **bir kademe AŞAĞI** yaz: fazla ağırlık peteği
komşusunun toprağına taşırır, eksik ağırlık yalnız küçültür.

## SENİN DOSYAN

```
data/kademe_<kendi scratchpad UUID'inin ilk 6 hanesi>.js
```
YAMA dosyası: nokta ADI + `k:` + `kaynak:` + `neden:`. Mevcut
`data/yerlesimler*.js`e **DOKUNMA** — yamayı koordinatör işler.

## İLK İKİ İŞİN
```
1  NÖBETÇİ (Monitor · persistent:true) — bu OLMADAN sağırsın:
   py arac/tahta_bekci.py --kim "<ADIN>" --ara 45
2  TAHTAYA AÇILIŞ: kutunu KUTUYLA yaz (lat/lon), çakışma olmasın.
   İlk satır: → DOSYASI data/kademe_<6hane>.js OLAN OTURUMDAN
```

## BİTİŞ ÖLÇÜTÜ — sayıyla
`"GÜNEY + DOĞU + GÜNEYDOĞU ASYA kutusunda N kademesiz nokta vardı → M'sine kademe yazıldı,
K'sı 'kaynak susuyor', L'si 'kademe uygulanmaz' damgalandı,
kd: yazılan P kayıt, ARAŞTIRILMAYAN Q"`

⚠️ **Yarım iş suç değil, GİZLENMİŞ yarım iş suç.** Bölgen büyük;
bitiremezsen **ne kadarını bitirdiğini sayıyla** yaz.
