# PAKET-EK-B — Sultan İbrahim ek okumaları · I. Mustafa hal'i · magazin düzeni

14 Eylül 2026 · kutu parti-emrelic-0050 · H-0008 + H-0003 + H-0007 (içerik kısmı) · koordinatör 1.MURAT
Commit ATILMADI (şartname gereği).

## 1. Ne yazıldı — sayıyla

| Dosya | Durum | Kart | Olay bağı |
|---|---|---|---|
| `data/ekokuma_ibrahim.js` (`window.EKOKUMA_IBRAHIM`) | YENİ | 12 | 15 |
| `data/ekokuma_magazin.js` | düzenlendi | 24 → 25 (+1 I. Mustafa) | 31 → 33 |
| `data/ekokuma_kadin.js` · `data/ekokuma_hanedan.js` | DOKUNULMADI | — | — |

**Sınavlar (hepsi koşuldu, çıktı ölçüldü):**
```
node --check data/ekokuma_ibrahim.js · data/ekokuma_magazin.js     ✓
node denetim/ARAC-A2-BAG-0913.js --hepsi   öz-sınav 7/7 · BAĞ 585/585 · HATA 0 · exit 0
   yeni 13 kartın hiçbirine ③ "çok maddeli gün" uyarısı düşmüyor (0)
okur alanı taraması (not·kaynak·baslik·soru): ⚠ / HTTP / 302 / "gövde okundu" /
   "bulunamadı" / "doğrulanamadı" / olaylar*.js   →  0
soru ≤ 52 karakter (app.js ipucu sınırı)   →  37/37
```
⚠️ İlk bağ sınamasında `1642-01-01` tek madde sanılmıştı (kendi dar evren betiğim); tam evrende **4 madde** çıktı → `"1642-01-01|Cinci"` ayırt edicisi kondu. Alet yakaladı, ben değil.

## 2. H-0008 — İbrahim kartları (Emre'nin saydıkları + kaynakta bulunanlar)

| # | id | bağlandığı madde | Emre'nin kalemi | kesinlik |
|---|---|---|---|---|
| 1 | ibrahim-culus-iki-kez-bakti-1640 | 1640-02-09 cülus | cülus / "ayak gıdıklama" | tartismali |
| 2 | ibrahim-cinci-hoca-nefes-ve-dam-1642 | 1642-01-01\|Cinci · 1648-08-08 | Cinci Hoca | kesin |
| 3 | ibrahim-kosem-anne-ogul-cekismesi | 1644-01-01\|Deli İbrahim · 1648-08-08 | + Kösem ile ilişkisi | tartismali |
| 4 | ibrahim-ot-arabasi-salih-pasa-1647 | 1644-01-01\|Deli İbrahim | + (kaynakta bulundu) | tartismali |
| 5 | ibrahim-samur-meraki-falci-hikayesi | 1647-01-01\|Samur | samur vergisi | tartismali |
| 6 | ibrahim-telli-haseki-nikahi | 1647-01-01\|Samur | + Telli Haseki | kesin |
| 7 | ibrahim-hasekiler-pasmaklik-eyaletler | 1648-05-01\|Varvar | Şişman Kadın → hasekiler / hass | tartismali |
| 8 | varvar-ali-pasa-perihan-hanim-1648 | 1648-05-01\|Varvar | Varvar Ali Paşa isyanı | tartismali |
| 9 | girit-seferi-sunbul-aga-gemisi-1645 | 1645-04-01 | + (kaynakta bulundu) | kesin |
| 10 | ibrahim-cocuk-yastaki-kizlar-damat-vezirler | 1645-08-22\|Hanya'nın fethi | + (kaynakta bulundu) | kesin |
| 11 | hezarpare-ahmed-pasa-bin-parca-1648 | 1648-08-18 | Hezarpâre Ahmed Paşa | tartismali |
| 12 | ibrahim-hal-gunu-yumruk-ve-oda-1648 | 1648-08-08 · 1648-08-18 | kafese konulması | tartismali |
| — | ibrahim-katli-kim-emretti-1648 (MEVCUT, magazin.js) | 1648-08-18 | kafeste katledilmesi | tartismali |

"Kafese konup kafeste katledilmesi" iki kartla karşılanıyor: #12 (hal' ve kapatılma) ile mevcut katl kartı (kilide akıtılan kurşun, sorumluluk tartışması). Mükerrer yazılmadı, #12 katl sahnesini tekrar etmiyor.

Rivayetler okur diliyle çerçevelendi ("…'ya göre", "bir rivayete göre", "yalnız X'in anlatısında geçer"). Geliştirici damgaları yalnız `ic_not`ta.

## 3. H-0003 — I. Mustafa hal'i

`data/ekokuma_magazin.js` → **mustafa1-kizlar-agasi-cikaran-indiren-1618**. Öteki padişah magazin kartları bu dosyada, şema aynı. Bağı: `1618-02-26` (hal' maddesi, tek madde) + `1617-11-22|ekberiyet`.
İçerik TDV `mustafa-i` gövdesinden:
- Peçuylu İbrâhim: Kızlar Ağası Mustafa Ağa kendi çıkarı için "ileride düzelir" telkiniyle cülusu etkiledi.
- Peçuylu ve Kâtib Çelebi: garip haller (altınları balıklara atmak, vezirlerin tülbendini çekmek).
- Hasanbeyzâde: aynı ağa, önü alınmazsa "hazineyi boşaltır, şehzadeleri öldürtür" haberini yayarak hal'i başlattı.
- Topçular Kâtibi: padişah kendi isteğiyle çekildi.

"Komik" ton kaynağın kendi ironisinden geliyor: çıkaran da indiren de aynı ağa, arada 96 gün (sayıldı). Abartı eklenmedi.
Halk arasındaki "kızlarağası onu odaya kilitledi" hikâyesi TDV'de YOK, yazılmadı.

## 4. H-0007 — magazin kartlarının içerik düzeni

**Ölçüm — "nasıl bilirdiniz" / övgü-yergi nerede duruyor:**
```
data/padisahlar.js   kartvizit: dogum·olum·esler·cocuk·skandal·ovgu·yergi·tartisma·tarihciler (39 ovgu)
data/kisiler.js      aynı alanlar (sadrazam/komutan kişiler)
js/app.js:7481-7575  KV_SEKME_TANIM "🎭 Magazin" sekmesi = esler+cocuk+skandal;
                     ".kv-nasil-bilirdiniz" = ovgu·yergi·tartisma·tarihciler
data/ekokuma_*.js    ek okuma kartları (tur:"magazin" yalnız ekokuma_magazin.js + ekokuma_ibrahim.js)
```
⇒ Övgü-yergi ve kişi kartları **ek okuma dosyalarında değil**, `padisahlar.js` / `kisiler.js`te. İkisi de bu paketin dosyası değil (§7), bu yüzden **düzeltilmedi, aşağıda listelendi.**

**ekokuma_magazin.js'de yapılan (17 kart):**
- Okura görünen `not` ve `kaynak` alanlarındaki üretim notları `ic_not`a taşındı. Taşınanlar: HTTP kodları, "gövde okundu", "ölü: … (302)", "kronoloji maddesi bulunamadı", "Bağlı madde…", "⚠️ … koordinatörce sınanmalı", dosya adları. Eski metinler `ic_not` içinde AYNEN duruyor. `app.js _icNotAyikla` bunları çizmeden önce ayıklıyor.
- `kaynak` alanları okur biçimine indirildi: `TDV: slug · slug`.
- **Metne dokunulan TEK kart: `bayezid1-esaret-aksehir-1403`.** "Özel hayat / akıbet" ilkesine göre yeniden sıralandı: aynı olgular, yeni bilgi yok.
- Başlık yorumundaki bayat "BU DOSYA BUGÜN EKRANA GELMEZ" satırı düzeltildi. `_EKOKUMA_DOSYA_ADLARI` artık onu yüklüyor.
- Öz-sınav (betikte): öteki 23 kartın `metin/t/soru/baslik/kesinlik/olay` alanları byte byte aynı.

⚠️ **Kendi hatam, kendim düzelttim:** ilk yeniden yazım başlığı İLK `window.EKOKUMA_MAGAZIN` geçişinde kesti. O geçiş bir yorum satırının içindeydi, ~40 satır başlık yorumu kayboldu. Başlık HEAD'den geri alındı (satır başı çapası). Kart verisi JSON karşılaştırmasıyla birebir doğrulandı.

**İlkeye uyum ölçümü** (siyasî/askerî özet kopyası mı?):
```
bayezid1-esaret-aksehir-1403  savaş özeti ağırlıklıydı → yeniden sıralandı
fatih-gizli-mektup-1451       cülus anlatısı ama düğün + gizli mektup kişisel → bırakıldı
diğer 22                      kişisel hikâye / rivayet / ölüm sahnesi → uygun
```
Okur metninde "TDV'ye göre" biçiminde kaynak adı geçen cümleler çok. Bunlar kaynak atfı, geliştirici notu değil; dokunulmadı. `yavuz-baba-zehir-soylentisi` metnindeki "doğrulanamadığını yazar" ifadesi TDV'nin tarih yazımı hükmünün aktarımı, damga değil; bırakıldı.

## 5. Arayüz oturumu için — gereken satır

```js
// js/app.js  _EKOKUMA_DOSYA_ADLARI dizisine:
  "ekokuma_ibrahim",    // window.EKOKUMA_IBRAHIM — Sultan İbrahim dönemi magazin (0050/H-0008)
```
`index.html`e satır GEREKMEZ. Ek okuma dosyaları `<script>` ile değil, `ekOkumaMerakYukle` ile tembel yükleniyor (`index.html:489`). Satır eklenmezse 12 kart diskte durur ama **hiç görünmez** (D099).

## 6. Tutarlılık bulguları — sahibi başka dosyalar (DÜZELTMEDİM)

| # | Dosya | Bulgu | Öneri |
|---|---|---|---|
| a | `data/padisahlar.js` murad4 | `olum:"1640-02-08"` · kronoloji maddesi `1640-02-09` · Gökpınar/Topçular Kâtibi 9 Şubat · TDV biat 9 Şubat Perşembe (TDV'nin "8 Şubat Perşembe"si iç tutarsız) | kaynağa göre 9 Şubat; sahibi karar versin |
| b | `data/olaylar_ek17.js` 1639-01-20 | OKURA GÖRÜNEN `b:` ve `d:` metninde "⚠️ RİVAYET DOĞRULANAMADI" ve "kızlarağası rivayeti doğrulanamadı" | damga `ic_not_d`ye; hikâye artık 1618 kartında |
| c | `data/padisahlar.js` ibrahim | `skandal` alanı YOK → Magazin sekmesi yalnız eş/çocuk gösteriyor | kısa skandal cümlesi (samur/Telli/Cinci) — kaynak `ekokuma_ibrahim.js` kartları |
| d | `data/padisahlar.js` mustafa1 | `skandal`: "Kızlar Ağası'nın … desteklediği rivayet edilir"; TDV bunu Peçuylu'nun beyanı olarak veriyor, halk rivayeti değil | "Peçuylu'ya göre" |
| e | `data/olaylar_ek7.js` 1876-06-04 | (eski magazin notundan taşındı, hâlâ AÇIK) ölüm yeri "Çırağan", sonuç "intihar"; TDV abdulaziz: Fer'iye Sarayı, 1881 soruşturması cinayet | kronoloji sahibi sınasın |
| f | `data/olaylar_ek5.js` 1645-08-22 | TDV Hanya'nın teslimini 19 Ağustos 1645 verir | kaynağa göre gün |
| g | `ekokuma_hanedan.js` ↔ `ekokuma_magazin.js` | Contarini rivayeti iki kartta (tartışma + magazin), tür farklı | bilinçli bırakıldı |
| h | `data/olaylar_ek17.js` 1644-01-01 tartışma + `padisahlar.js` ibrahim tartisma | "Deli" lakabı iki yerde, çelişki yok | — |

## 7. Kaynaklar

**TDV (gövde metni çıkarılıp okundu):** ibrahim--padisah (42.926 kr gövde) · mustafa-i · kosem-sultan · huseyin-efendi-cinci-hoca · hezarpare-ahmed-pasa · varvar-ali-pasa · salih-pasa · haseki · kemankes-mustafa-pasa · valide-sultan · turhan-sultan · karacelebizade-abdulaziz-efendi.
Slug ölçümü: `cinci-hoca` 200 ama yönlendirme kütüğü (D109). `kizlar-agasi` 200 kütük (bk. DÂRÜSSAÂDE). Ölü: `telli-haseki` `sekerpare` `samur` `kafes` `darussaade-agasi` `mustafa-aga` `silahdar-yusuf-pasa` `cinci-huseyin-efendi` (302).

**Akademik (DergiPark PDF, pypdf ile okundu):**
- Bekir Gökpınar, "Osmanlı Kronikleri Işığında Sultan İbrahim ve Dönemi (1640-1648)", *ETÜ Sosyal Bilimler Enstitüsü Dergisi* 10 (2020)
- Volkan Çeribaş, "Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü: Kemankeş Kara Mustafa Paşa ve Hezarpâre Ahmed Paşa", *OTAM* 51 (2022), 99-125
- Birol Gündoğdu, "Delegitimizing Sultan Ibrahim", *Mukaddime* 17/1 (2026), 128-155 (samur takıntısına arşivden karşı görüş)

**OKUNMADI** (yalnız ikincil atıfla bilinir, içeriğine iddia kurulmadı): Peirce 1993 · Uluçay, *Padişahların Kadınları ve Kızları* · Naîmâ/Vecîhî/Kâtib Çelebi/Karaçelebizâde'nin kendileri (yukarıdaki yayınların aktarımıyla, adlarıyla anıldı).
**Kullanılmadı:** Vikipedi, İstanbul Ansiklopedisi (Koçu, kaynaksız madde), ekşi/TikTok/gazete köşe yazıları.

## 8. BULUNAMADI

| Emre'nin kalemi | Aranan yer | Sonuç |
|---|---|---|
| İbrahim'in IV. Murad'ın ölüsünün **ayaklarını gıdıklaması** | TDV ibrahim · kosem · Gökpınar (Naîmâ aktarımı) · Çeribaş · Gündoğdu · TR+EN web | **bulunamadı.** Kaynaklı sahne "cesedine iki kez baktı" (Naîmâ), karta o yazıldı |
| **Şişman Kadın** (Şivekâr'ın "en şişman kadın" aranarak bulunması) | TDV ibrahim (yalnız ad) · Gökpınar (yalnız ad) · Çeribaş · Gündoğdu · dergipark araması | **akademik kaynakta bulunamadı.** Vikipedi Uluçay'a atfediyor, Uluçay okunmadı. Kart 7 hasekiler/hass konusunu kaynaklı biçimde anlatıyor |
| **Yeni Valide Mescidi** ile dönem bağı | okunan TDV maddeleri + üç makale | **bulunamadı** |
| "Hotin'e…" (şartnamede yarım kalan kalem) | — | anlaşılamadı, aranmadı |
| Telli Haseki nikâh günü | TDV · Gökpınar · Çeribaş | **bulunamadı** (gün yazılmadı) |
| Sünbül Ağa baskınının yılı | TDV gövdesi "1641" diyor, bağlam 1644 | **kaynak kendi içinde tutarsız** — yıl okura yazılmadı |
