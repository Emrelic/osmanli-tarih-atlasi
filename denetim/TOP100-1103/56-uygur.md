# 56 · Uygur Kağanlığı (Ötüken, 744-840) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer iki kez koşturuldu; son koşu "otomatik dönem ucu kaydı" satırlı sürümle)

## Özet
- Künye 2 (`uygur`, `uygur-kaganligi`) + 3 ardıl/komşu (koco-uygur, gansu-uygur, ganzhou-uygur — yalnız sınır). **Aynı polity iki künyeye bölünmüş (kopya künye).**
- Ölçer: `uygur` kırılma 2, açık 0; `uygur-kaganligi` kırılma 2, açık 0; "yalnız otomatik maddeyle kapanan" 0 / 0. (Aşağıda d'de ölçerin saymadığı iki zayıf kapanış ayrıca işaretli.)
- Eksik madde önerisi 3. Haritada Uygur: Karakurum (tek yerleşim, 745-840) + Hotan (791-840, `uygur-kaganligi` künyesiyle).
- En ağır 3 bulgu: ① künye mükerrer (`uygur` ↔ `uygur-kaganligi`; ikisi de ayrı renk/BOYALAR, ikisi de kronolojide kullanılıyor); ② kuruluş yılı TDV'nin kendi içinde çelişik (Uygurlar md. 745; Dokuz Oğuzlar ve Hoten md. 744) ve Cambridge/Jiu Tangshu 744 der; ③ Hotan 791-840 Uygur sahipliği şüpheli (Tibet İmparatorluğu bu dönemde Hotan'ı elinde tutuyor olabilir) ve 791 kırılmasını karşılayan madde yalnız Karaşar/Beiting'i anlatan otomatik üretimli bir kayıt.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| uygur | Uygur Kağanlığı (Ötüken) | 0745-01-01 | 0840-01-01 | devletler.js:26919. Karakurum s: zincirinde (yerlesimler_asya.js:2814). Ordu-Balık harabe noktası s:[] boş. |
| uygur-kaganligi | Uygur Kağanlığı (Ötüken) | 0744-01-01 | 0840-01-01 | devletler.js:14378. Yalnız Hotan 791-840 s:'inde (yerlesimler_asya.js:2914 yakını) ve kronoloji_sinir/kronoloji_cok dosyalarında taraf. **KOPYA** |
| koco-uygur | Koço (Turfan) Uygur Devleti | 0911 | 1209 | ardıl, yalnız sınır; TDV Uygurlar «911’de bağımsız hale gelen» ile uyumlu |
| gansu-uygur / ganzhou-uygur | Gansu / Ganzhou Uygur Krallığı | 0894 | 1036 | **ikisi de aynı tarih ve aynı polity — kopya çift** (bu denetimin kapsamı dışı; bilgi). TDV Uygurlar: Kan-chou'da yeni Uygur devleti (840 sonrası, yıl vermiyor) |
| (eksik) | 840-911 Beşbalık/Turfan Uygurları | — | — | künye yok; TDV Uygurlar «Beşbalık Uygurları» der; 840-911 Turfan s: yok (Turfan s: 1000'de başlıyor) |

Karar önerisi: tek künye bırak. Ardıl: `uygur-kaganligi` künyesini kaldır, Hotan s:'ini ve kronoloji_sinir taraflarını `uygur`a çevir (renkler.py BOYALAR'daki ikinci anahtar ancak motor-dondurma kuralı dışında, HAVVA koşusu aralığında silinir; tuz dosyasıdır — Emre onayı).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | `uygur` 0745-01-01; `uygur-kaganligi` 0744-01-01 | TDV «Uygurlar» (Gülçin Çandarlıoğlu, c. 42, 2012, s. 242-244; https://islamansiklopedisi.org.tr/uygurlar, 3.11.2026'da okundu): «745 yılında Uygur yabgusu Basmıl kağanını yenilgiye uğratıp» | TDV «Dokuz Oğuzlar» (Faruk Sümer, 1994; https://islamansiklopedisi.org.tr/dokuz-oguzlar): «Göktürk Devleti’nin sona ermesi üzerine (744) Uygur il teberi (melik) Köl Bilge Kağan unvanını almış»; TDV «Hoten» (22.10.2026'da okunmuş, atlas kaynak notunda): «744 yılında kurulan Büyük Uygur Kağanlığı» | TDV içi çelişki (745 ↔ 744). Dışarıdan: C. Mackerras, «The Uighurs», Cambridge History of Early Inner Asia, 1990, s. 317-342 (DOI 10.1017/CHOL9780521243049.013, özet okundu): 744'te «took upon himself the title of Kutlugh bilgä Köl kaghan», imparatorluk 744-840. Jiu Tang shu 195 «Huihe» (zh.wikisource 舊唐書/卷195): «三載，擊破拔悉密，自稱骨咄祿毗伽闕可汗» — 天寶 3. yıl = 744. Üç bağımsız kaynak 744 der. **Hüküm: kağan ilânı 744; harita Ötüken dilimi ayrı soru** (aşağı). |
| f (harita) | Karakurum dogu-gokturk-2 → uygur 0745-01-01 | Çandarlıoğlu 745 (aynı) | Ötüken'in fiilen geçtiği an: Doğu Göktürk son kağanının (Baimei) ölümü — yalnız Vikipedi özetinde 744-745 (dayanak değil); Chinese primary okunamadı | Karakurum 745-01-01 kalabilir (TDV Uygurlar esas, kağan ölümüyle Ötüken boşalması 745 çevresi); künye f ise 0744-01-01'e çekilirse Karakurum'da 744'te `dogu-gokturk-2` hâlâ sahip olur = **künye f ile s: f arasında 1 yıllık fark**, ihlal değil (dönem künye ömrü içinde). ic_not: "744 ilân / 745 Ötüken'in devri; TDV iç çelişkisi: Uygurlar 745, Dokuz Oğuzlar+Hoten 744". |
| t | 0840-01-01 | TDV Uygurlar: «840 yılındaki Kırgız saldırısı kağanlığın sonunu getirdi» | TDV Dokuz Oğuzlar: «840 yılında Kırgız hücumu sonucunda yıkıldığı»; Mackerras (CHEIA özeti): 744-840, «In 840, the Kirghiz...» | Çift teyit (yıl). Gün yok → 0840-01-01 doğru. Jiu/Xin Tang shu'da 開成五年 gün düzeyi okunamadı (WebFetch Jiu Tang 195 sayfasında 840 pasajı çıkmadı). |
| başkent | Ordu-Balık | TDV Uygurlar başkent adı vermez («Ötüken'de») | Mackerras: capital Karabalghasun on High Orkhon | `uygur` künyesindeki Ordu-Balık (=Karabalgasun) doğru. Karakurum'a ~30 km yaklaşıklık beyanı sürdürülmeli. |
| evre | tek evre | — | — | Evre bölünmesi gerekmiyor. Ardıl künyeler: Koço 911 (TDV ✓), Gansu 894 (TDV yıl vermiyor — künye kaynağı bu denetimde okunmadı). |

## c) Kronoloji (Değişmez 2 evreni: olaylar*.js + kronoloji_sinir*.js)
Var olanlar:
- kronoloji_sinir_asya3_1024.js:32 — 0745-01-01 kuruluş (devlet: `uygur-kaganligi`); :33 — 0759-01-01 Şine-Usu yazıtı (kültür, kırılma değil); :34 — 0821-01-01 gerileme.
- kronoloji_sinir_dogu_500_1281.js:5742 — 0745-01-01 Karakurum "Ötüken Uygurlara geçti" (üretilmiş yerleşim kaydı); :5868 — 0840-01-01 Karakurum Kırgızlar; :5842 — 0840-01-01 Hotan yerel hükümdarlar; :502 — 0762-11-20 Luoyang'ın Tang-Uygur ordusunca geri alınması.
- kronoloji_sinir_asya_zincir_1024.js:89 — 0840-01-01 Yenisey Kırgızları Uygur Devleti'ni yıktı (gerçek olay; en iyi karşılık).
- olaylar_ortacag_cin.js:30 — 0757-11-14 Xiangji Tapınağı (Tang-Uygur, Chang'an'ın geri alınışı); olaylar_ortacag_iran_turan.js:13 — 0840 sonrası Karahanlı.
- Evren dışı (var): künye `kronoloji:` (devletler.js:14378-14396 ve :26919-26948: 745, 758 Kırgızlar'ın bağlanması, 759, 762 Mani, 821, 840); kronoloji_cok_ms1_1000_ortadogu.js:379/410/416/471/473 (744 Basmıl, 758, 762 Mani, 840, 840 Koço); kronoloji_cok_ms1_1000_asya.js:136/177; kronoloji_cok_dogu_500_1281.js ~16150 (758 Kırgızlar).
Tarih doğruluğu: 0744/0745 ayrışması b) altında. 0762 Mani künye kroniğinde Iranica'ya dayanıyor (Iranica erişilemedi; aşağıda listede). Takvim: 1582 öncesi, çeviri gerekmez.
Eksik / önerilen:
```
{ t:"0744-01-01", tur:"kurulus", onem:4, dunya:3, kapsam:"ic", kesinlik:"yil", b:"Uygur yabgusu Basmılları yenip Kutluğ Bilge Köl Kağan unvanını aldı (Büyük Uygur Kağanlığı'nın ilânı)", yer_id:"Ordu-Balık", odak_yer:["Ordu-Balık"], kaynak:"C. Mackerras, 'The Uighurs', Cambridge History of Early Inner Asia (1990), s. 317-342: 744'te «took upon himself the title of Kutlugh bilgä Köl kaghan»; Jiu Tang shu 195: «三載，擊破拔悉密，自稱骨咄祿毗伽闕可汗» (天寶3=744); TDV Dokuz Oğuzlar: «(744)»; TDV Uygurlar 745 verir — çelişki ic_not'ta" }
{ t:"0791-01-01", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", kesinlik:"yil", b:"Hotan: Tang garnizonunun ardından TDV'ye göre Uygur Kağanlığı sınırları (SAHİPLİK ŞÜPHELİ — ayrıntı d)", yer_id:"Hotan", kaynak:"TDV «Hoten» md. (22.10.2026): «744 yılında kurulan Büyük Uygur Kağanlığı sınırlarına dahil olan Hoten»; 791 tarihi TDV'de yok — atlas Beiting düşüşünden çıkarım" }  ← YAZILMASIN; önce 791-840 dilimi çözülsün (d).
{ t:"0840-01-01", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", kesinlik:"yil", b:"Yenisey Kırgızları Ordu-Balık'ı yıktı; Uygurlar Turfan-Beşbalık, Kansu ve Hotan yönlerine dağıldı", yer_id:"Ordu-Balık", kaynak:"TDV Uygurlar: «840 yılındaki Kırgız saldırısı kağanlığın sonunu getirdi» + «Kan-chou şehrinde yeni bir Uygur Devleti kurdu»; TDV Dokuz Oğuzlar «840»; Mackerras CHEIA" }  (zaten zincir_1024:89 var; yalnız `uygur-kaganligi` taraf kimliği `uygur`a çevrilmeli)
```

## d) Harita uyumu
Ölçer sonucu (her iki künye): kırılma 2, açık 0, yalnız-otomatik-maddeyle-kapanan 0. Yerleşim sayısı: `uygur` 1 (Karakurum, 745-840), `uygur-kaganligi` 1 (Hotan, 791-840). Haritada Uygur imparatorluğu toplamda **iki tek hücre**dir.
| gün | yerleşim | durum / öneri |
|---|---|---|
| 0745-01-01 | Karakurum dogu-gokturk-2→uygur | kronoloji_sinir_asya3_1024:32 (taraf `uygur-kaganligi`, künye kimliği ayrı) karşılıyor. Taraf kimliğini `uygur`a çevir. |
| 0840-01-01 | Karakurum uygur→yenisey-kirgiz | zincir_1024:89 karşılıyor ✓ |
| 0791-01-01 | Hotan tang→uygur-kaganligi | **Yalnız** kronoloji_sinir_dogu_500_1281.js:8589 (Karaşar/Beiting, otomatik üretimli kuyruk kaydı; yer listesine Hotan girmiş) kapatıyor. Ölçer bunu "alâkalı" saydı, ben saymıyorum: madde Hotan'ın Uygur'a geçişini anlatmıyor. Gerçek madde yok. |
| 0840-01-01 | Hotan uygur-kaganligi→khotan | dogu_500:5842 var (Hotan yerel hükümdarlar) ✓ |
Sahiplik doğruluğu: **Hotan 791-840** için TDV Hoten md. Uygur sınırı der (yıl yok); dış kaynak (Beckwith, Tibetan Empire in Central Asia, 1987; Iranica «Khotan ii» — okunamadı; web arama özeti «Khotan Tibet'e ~798 civarı düştü, 842 sonrası dağıldı») Hotan'ı Tibet İmparatorluğu'na koyuyor. Çelişki beyanı atlas kaynak notunda yalnız Tang-Uygur ikilisi için; Tibet seçeneği beyan edilmemiş. Öneri: 0791-0840 dilimi `tibet-imparatorlugu` (künyesi 670-692 Hotan'da kullanılıyor; yaşam aralığı künyede kontrol edilmeli) veya BEYANLI BOŞLUK; ya da TDV'yi esas tutup ic_not'a "Beckwith: Tibet ~798-842" beyanı yaz. **Karar kaynak okununca (aşağıda listede).**
Ötüken civarı: Ordu-Balık harabe noktası s:[] bos:"veri-yok" — Karakurum'un 30 km'si; sorun yok. Uygur Kağanlığı'nın bilinen büyük şehirleri: Ordu-Balık (✓ Karakurum üzerinden), Beşbalık (Beiting; Uygur kontrolü 790-791 Tibet'le çekişme, Ecsedy 1964 TDV kaynakçası; s: boş), Karaşar/Kuça (791 sonrası Tibet; atlas __BOSLUK__). Beşbalık için Uygur s: eklenip eklenmeyeceği Mackerras/Ecsedy kaynağı okunmadan önerilmez.
Otomatik "dönem ucu kaydı" notu: 0745 Karakurum (dogu_500:5742) ve 0840 Karakurum (dogu_500:5868) Karakurum için üretilmiş kayıtlardır; ölçer bunları otomatik saymıyor ("0 otomatik"), fakat gerçek olay karşılığı zincir_1024:89 (840) ve asya3_1024:32 (745) olduğundan haritayı kapatıyor.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js: `uygur-kaganligi` (satır 14378 bloğu) ya sil ya `uygur`a birleştir; BOYALAR (arac/renkler.py:994) tuz dosyasıdır → Emre onayı + HAVVA koşusu.
2. data/yerlesimler_asya.js (Hotan s:, `d:"uygur-kaganligi"` 0791→0840): sahiplik kararı bekleyerek `d:"uygur"`a çevir veya Tibet/BOŞLUK; kaynak ic_not'a Tibet seçeneğini beyan et.
3. data/kronoloji_sinir_asya3_1024.js:32-34 ve asya_zincir_1024.js:89 ile dogu_500 satırları 5846, 8593: `devlet/taraflar` değeri `uygur-kaganligi` → `uygur`.
4. `uygur` künyesi: ic_not'a "TDV iç çelişkisi: Uygurlar 745, Dokuz Oğuzlar/Hoten 744; Mackerras ve Jiu Tangshu 744" yaz; f 0745-01-01 kalabilir (Karakurum dilimi) — ya da 0744-01-01 (Emre kararı: TDV Uygurlar esas mı, çoğunluk mu).
5. Yukarıdaki 0744 kuruluş maddesi eklenebilir.
6. gansu-uygur/ganzhou-uygur kopyası ayrı iş olarak bildirilsin.

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica, «Khotan ii. History in the Pre-Islamic Period» (iranicaonline.org/articles/khotan-parent/khotan-ii-history-in-the-pre-islamic-period/) — Soru: Hotan 790'lar–840'larda kimin elinde (Tibet/Uygur)? Çekilemedi, "yok" değil.
- C. Beckwith, The Tibetan Empire in Central Asia (Princeton 1987) — aynı soru + Beiting/Beşbalık 790-791 kimde.
- C. Mackerras, The Uighur Empire (ANU, 1968) tam metin (openresearch-repository.anu.edu.au/bitstream/1885/114690/2/b11093456.pdf, 503 verdi) — Soru: Ötüken'in fiilen Uygur'a geçişi (Baimei'nin ölümü) 744 mü 745 mi; 840 Kırgız saldırısının ayı.
- Xin Tang shu 217 «Huigu» (ctext/wikisource) — Soru: 840 yıl içinde ay/gün.
- Encyclopaedia Iranica «Manicheism i» ve «Chinese Turkestan vii» — Soru: Bögü Kağan'ın Mani'yi kabulü 762 mi (künye kroniği buna dayanıyor).
- Gansu/Ganzhou Uygur 894 künyesinin kaynağı (bu denetimde okunmadı).
