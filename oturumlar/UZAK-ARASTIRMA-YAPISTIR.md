# UZAK MAKİNE — YAPIŞTIRILACAK METİN (depo gerektirmez)

*Emre: başka bir bilgisayarda Claude Code (ya da Claude) açıp aşağıdaki
metni yapıştır. `<<BÖLGE>>` ve `<<KÜNYE LİSTESİ>>` yerlerini doldur.
Aynı metni farklı bölgelerle birkaç makinede PARALEL kullanabilirsin.*

🔴 **Bu görev DEPO İSTEMEZ.** Klonlama, kurulum, git yok — 1 saatlik pencerede
780 MB indirmek zaman kaybı olurdu. Uzak makine **yalnız araştırır** ve çıktıyı
tek bir metin bloğu olarak verir; ben onu buraya alıp doğrulayıp bağlarım.

---

## ▼▼▼ BURADAN AŞAĞISI YAPIŞTIRILACAK ▼▼▼

Sen bir tarih atlası projesi için **kaynak araştırması** yapıyorsun. Kod
yazmıyorsun, dosya değiştirmiyorsun, depo yok. Çıktın tek bir JS dizisi.

## GÖREV
Aşağıdaki devletlerin her biri için **3-8 kronoloji maddesi** üret.
Bölge: **<<BÖLGE>>**
Devletler (kimlik = `taraflar` alanına AYNEN yazılacak dizgi):
```
<<KÜNYE LİSTESİ>>
```

## ÇIKTI BİÇİMİ — tek blok, başka hiçbir şey yazma
```js
window.KRONOLOJI_COK_UZAK_<<BÖLGE>> = [
  { t:"1335-11-30", k:"siyasi", b:"tek satırlık başlık",
    gun:"30 Kasım 1335", yer:"Karabağ", kisiler:"Ebû Said Bahadır Han",
    d:"Olayın anlatısı — iki üç cümle. Kullanıcı bunu okuyacak.",
    kaynak:"TDV: ilhanlilar (İLHANLILAR)",
    taraflar:["ilhanli"],
    etiket:["konu-siyasi"] },
];
```
Alanların anlamı: `t` sıralama tarihi (ISO) · `k` tür
(`savas`·`siyasi`·`antlasma`·`kultur`·`iktisat`) · `b` başlık · `gun` insan
okunur tarih · `yer` yer adı · `kisiler` kişi adları · `d` anlatı paragrafı ·
`kaynak` **kaynağın adı** · `taraflar` yukarıdaki kimlik dizgisi · `etiket`
serbest.

## 🔴 KAÇ MADDE, NEYİ YAZ
Devlet başına **en az 3, en çok 8.** Mutlaka olması gerekenler:
**kuruluş · toprak kazanç/kayıp · hanedan-rejim değişimi · yıkılış/ardıla
geçiş.** Süs olay yazma.

## 🔴 KAYNAK KURALLARI — bunlar pazarlığa açık değil
- **İslâm dünyası, Osmanlı ve komşuları için TDV İslâm Ansiklopedisi
  BİRİNCİLDİR** (`islamansiklopedisi.org.tr`). Başka kaynakla çelişirse
  **TDV esastır.** `kaynak:` alanına `TDV: <slug> (<BAŞLIK>)` biçiminde yaz.
- TDV'nin kapsamadığı coğrafyada (Kuzey Amerika halkları, Uzakdoğu, Sahra
  altı, Polinezya, Avrupa içi) **akademik kaynak meşrudur** ve `kaynak:`
  alanına **ADIYLA** yazılır: yazar + eser + varsa sayfa.
- 🔴 **KULLANILMAZ:** forum · blog · içerik çiftliği · kaynaksız derleme ·
  **yapay zekâ üretimi metin** · popüler tarih sitesi.
  **Vikipedi TEK DAYANAK OLAMAZ** — başka kaynakla destekle ya da yazma.
- 🔴 **KAYNAK GİZLENMEZ.** Bulamadıysan `kaynak:"bulunamadı"` yaz ve maddeyi
  yine ver — *bulunamadı bir sonuçtur, boş bırakmak değil.*
- 🔴 **ALINTI UYDURMA.** Bu projede ölçülmüş bir vaka var: bir model
  *"TDV'den alıntı"* dediği cümlelerin çoğu TDV'de **birebir yoktu.** Alıntı
  yazacaksan gerçekten gördüğün metinden kelimesi kelimesine kopyala;
  göremediysen alıntı yazma.
- 🔴 **Emin olmadığın bir olayı YAZMA.** Uydurma bir madde, yazılmamış bir
  maddeden **kötüdür** — çünkü denetim onu doğru sanır. Şüphen varsa
  `ic_not:"şüpheli — <sebep>"` alanı ekle; o alan kullanıcıya gösterilmez.

## 🔴 TARİH KURALLARI — en çok burada hata yapılır
```
gün biliniyor          t:"1335-11-30"   gun:"30 Kasım 1335"
gün BİLİNMİYOR         t:"YYYY-01-01"   gun:"(kaynak yıl verir)"
ay var gün yok         t:"YYYY-01-01"   gun:"Kasım 1335 (gün bilinmiyor)"
YIL BİLİNMİYOR         🔴 MADDEYİ YAZMA
```
🔴 **AY YAZMA.** `t:"1335-11"` biçimi bu projede sıralamayı bozuyor —
ayın 1'ine genişliyor ve gün hassasiyetli kayıtların ÖNÜNE geçiyor.
🔴 **Sahte kesinlik yasak.** "Yaklaşık", "temsilî", "civarı" bir gün
uydurmayı meşrulaştırmaz. Kaynak yıl diyorsa yıl yaz.
🔴 `1281-01-01` ve `1923-10-29` bu projede **"araştırılmamış" işaretidir** —
kuruluş/bitiş günü olarak YAZMA.

## ÇIKTIYI NASIL VER
Tek bir kod bloğu, başında sonunda açıklama olmadan. Sonuna ayrı bir kısa
liste ekle:
```
ÖLÇÜM: kaç madde · kaç devlete dokundum · kaçında gün var kaçında yıl
       · kaç maddede kaynak "bulunamadı" · hangi devletler için HİÇ kaynak
         bulamadım (adlarıyla)
```
Bu son liste önemli: *"bulamadım"* bir sonuçtur ve kayda geçer.

## ▲▲▲ BURADAN YUKARISI YAPIŞTIRILACAK ▲▲▲

---

## Emre için — çıktı geldiğinde

Uzak makinenin verdiği bloğu bana yapıştır. Ben:
① `node --check` ile sınarım
② her `taraflar[]` kimliğinin `data/devletler.js`te var olduğunu doğrularım
   (bugün 2084 madde tam bu kapıda takılı kaldığı için ölçülüyor)
③ kaynak alanlarını tarar, `bulunamadı` sayısını bildiririm
④ geçenleri `data/kronoloji_cok_uzak_<bölge>.js` olarak bağlarım

⚠️ **Uzak makineye git yetkisi verilmedi** ve bu kasıtlı: koordinatörün
görmediği bir commit, yayına yarım iş taşır — bugün bir kez tam bunun
yüzünden site kırıldı.
