# 90 · Sokoto Halifeliği — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (top100_olc.py: sokoto)

## Özet
- Künye 1 (`sokoto`, 1804-01-01 → 1903-07-27); bağlı künyeler: `hausa-sehir-devletleri` (1000-1808, öncül), `rabih` ve `kanem-bornu` (komşu). Yerleşim 8 (Sokoto, Kano, Katsina, Zaria, Bauci, Yola, Bida, İlorin); en geniş an 1862: 8.
- Ölçer: 14 kırılma, **açık 10**, yalnız otomatik maddeyle kapanan 0. Kapalı 4: 1806 Zaria, 1897-02-16 İlorin, 1901 Yola, 1903-07-27 Bauci.
- En ağır 3 bulgu: (1) **Sokoto şehri `t:1903-01-15`, ama TDV `sokoto` işgali «15 Mart 1903» verir** (atlas yerleşim yorumundaki «15 Ocak» TDV'de yok; evren maddesi olaylar_2s_1019.js:471 zaten 15 Mart yazıyor) ⇒ Sokoto kırılması 60 gün önceye yazılmış. (2) **İlorin `f:1817-01-01` kaynaksız ve yanlış**: Hiskett (1984) 1817'yi Afonja ayaklanması olarak verir; İlorin Sokoto'ya bağlı eyalet ancak Malam Salih'in ölümünden (1238/1823) ve Abdüsselam'ın Gwandu bayrağını almasından sonra olur. (3) Bauci/Bida/İlorin/Yola/Katsina dilimlerinin `kaynak:`ı «bulunamadı — standart akademik el kitabı» (kaynaksız f/t); 10 açığın 8'i maddesiz sahip değişimi.
- Eksik evren maddesi: 8 öneri. Eksik yerleşim: Gwandu, Gombe, Hadeija, Kontagora, Katagum, Kazaure, Daura, Gobir (Alkalava), Zamfara, Muri, Nasarawa-Keffi, Yauri.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| sokoto | Sokoto Halifeliği | 1804-01-01 | 1903-07-27 | VAR; kaynak alanı yalnız slug `sokoto` (tam künye değil); 8 yerleşim, harita ömrü 1806→1903 |
| hausa-sehir-devletleri | Hausa Şehir Devletleri | 1000-01-01 | 1808-01-01 | VAR, öncül; t 1808 = Alkalava düşüşü (TDV osman-b-fudi 1808); Kano 1807, Katsina/Zaria yerleşim uçlarıyla tutarsız (Zaria 1806 `s`) — künye ucu «çapa» |
| rabih / kanem-bornu | komşu | — | — | ayrı (89); TDV: Sokoto'nun doğu eyaleti Bornu'yu kaybı |
EKSİK evre: Kebbi'nin 1849'da bağımsızlaşması (TDV `sokoto` 1849 Yakubu? — künye kronolojisinde) ve ayrılan emirlikler (Kano 8 yıllık isyan, Hadeija, Gombe, Kontagora) künyesiz. Yeni künye gerekmez; yerleşim `s:` dilimleri yeter. MÜKERRER: bulunmadı.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f | 1804-01-01 | TDV `osman-b-fudi`: «Gudu'ya göç + cihad ilanı **1803**», Tabkin Kwatto **21 Haziran 1804** (gün) | Britannica `Usman dan Fodio` (özet, başlık düzeyi okundu): «in 1804 he called on followers»; Hiskett 1984 (Özköse trc. 2003) Sokoto «kuruluşu» 1812/1817 | ÇELİŞKİ: cihad ilanı TDV 1803 / Britannica 1804; devletin kurumsal kuruluşu TDV 1812 (`sokoto`: «Devlet 1812'de Sokoto Sultanlığı olarak kuruldu») / Hiskett «Hilafetin kuruluşu 1232/1817» (alt başlık) | f `1804-01-01` kalsın (kesinlik yil; ilk yerleşim kazancı 1806 Zaria), `ic_not`: «TDV 1803 hicret/cihad ilanı; 1804 Tabkin Kwatto, Britannica; kurumsal halifelik 1812 (TDV sokoto), 1817 (Hiskett)». TDV esas: f için 1803 de savunulabilir — **KASA'nın kararı** |
| Sokoto'nun başkent/halifelik ilanı | künye kronoloji (evren dışı) 1809-01-01 «halifelik resmen kuruldu» | TDV `osman-b-fudi`: «1812: Sokoto halifeliğinin kuruluşunu ilân etti» | TDV `sokoto`: «Devlet 1812'de kuruldu» (aynı yazar); Britannica özet: «In 1812 administration reorganized (Abdullahi/Bello)» | künye kronoloji 1809 YANLIŞ (TDV 1812). Yerleşim Sokoto `kur/f 1812` doğru | künye kronolojisi 1809 → 1812 |
| Bornu kaybı | künye kronoloji 1809 «Bornu elinden çıktı» | TDV `osman-b-fudi`: 1809 Bornu alındı, Kânimî aynı yıl geri aldı | TDV `sokoto`: «Bornu'nun kaybı» ifadesi YOK | anlamsal hata: Bornu Sokoto'ya hiç katılmadı | evren dışı; yalnız not |
| Bello / Osman ölümü | künye kronolojisi 1817-04-20 | TDV `osman-b-fudi`: 3 Cemâziyelâhir 1232 = 20 Nisan 1817 | Hiskett: ölüm 1232/1817 | uyumlu (çift) | — |
| t | 1903-07-27 | TDV `sokoto`: Muhammed I. Tâhir'in Burmi'de ölümü «27 Temmuz 1903» siyasî hâkimiyet sonu | Hiskett (trc.): 1903 İngiliz işgali; «Halifeleri 1903 yılına kadar devam etmiştir» (gün yok) | uyumlu (siyasi egemenlik sonu, gün TDV) | — |
| Sokoto işgali | yerleşim `t:1903-01-15` | TDV `sokoto`: «15 Mart 1903» | TDV (künye kronolojisi satırı 1903-03-15; evren olaylar_2s_1019.js:471-478 aynı) | **HATA** — atlas yorumu «TDV 15 Ocak» diyor; okunan TDV 15 Mart | yerlesimler_e9353f.js:276-277: `t:"1903-03-15"` (ve `ingiltere f` aynı) |
| Kano | `s f:1807-01-01` | TDV `kano`: «1807'de Fûlânîler tarafından alındı» | TDV `hevsa` (atlas yorumu) | uyumlu (yıl) | madde ekle |
| Kano/Katsina/Zaria t | 1903-01-01 | TDV `kano`: «İngilizler Kano'yu 1903'te işgal etti» (yıl) | TDV `sokoto`: «1903'e dek» | yıl; Zaria için kaynak yok (ÇAPA) | Zaria/Katsina 1903 ucu kaynaksız — beyan |
| Yola | f 1841, t 1901 | TDV `adamava`: «1841'de Yola şehrini merkez yaparak»; «1901'de Adamava paylaşıldı» | olaylar_2s_0918.js:85-92 | uyumlu (yıl) | f=1841 madde ekle |
| İlorin | f 1817-01-01, t 1897-02-16 | Hiskett 1984 (Özköse trc. 2003, GÜÇİFD 2/4, 173-202): «Malam Salih … 1232-3/1817 Alafin'e karşı ayaklanma»; «Malam Salih 1238/1823'te öldü; … Abdüsselam … Gwandu Emiri bayrak takdim etti. Böylece İlorin Sokoto Halifeliği'ne bağlı bir eyalet oldu» | Britannica/Flint (t için, evrende zaten) | f YANLIŞ olasılığı yüksek: 1817 Sokoto'ya katılım değil Afonja ayaklanması. Bağlanma ≥1823 | `f` → `1823-01-01` (kesinlik yil; alt sınır beyanı: «Abdüsselam'ın bayrak alışı 1823 sonrası, tam yıl okunmadı»); 1817-1823 İlorin: Oyo/Afonja karmaşası ⇒ BOŞLUK beyanı |
| Bida (Nupe) | f 1859, t 1897-01-01 | kaynak: «bulunamadı» | — | f ve t kaynaksız. Hiskett: Nupe 1810'dan Malam Dendo ile Fûlânî eyaleti (Osman Zeki sonrası emir); Bida'nın 1859 başkent oluşu okunmadı | f/t kaynak bulunana dek beyanlı; t gün: Bida'nın Kraliyet Nijer Şirketi'ne düşüşü 1897 Ocak sonu (gün okunmadı) |
| Bauci | f 1809-01-01, t 1903-07-27 | kaynak: «bulunamadı» | — | f kaynaksız; t: Bauchi emirliğinin İngilizlere teslim yılı (1902?) okunmadı — şüpheli: Burmi savaşı Gombe'dedir, Bauci şehri değil | f/t araştır; t'yi Burmi'ye bağlamak gevşek |

## c) Kronoloji
Evren (Değişmez 2) VAR:
- `data/olaylar_2s_0919.js:432-435` — 1806-01-01 Zaria alındı (TDV osman-b-fudi, yıl) ✓
- `data/olaylar_2s_0918.js:152` — 1897-02-16 İlorin, Kraliyet Nijer Şirketi ✓ (kaynak «standart ansiklopedik»; Flint, Britannica 'Ilorin' okunmadı)
- `data/olaylar_2s_0918.js:85-92` — Adamava 1899-1901 paylaşımı (TDV adamava 1901) ✓
- `data/olaylar_2s_1019.js:471-478` — 1903-03-15 Sokoto işgali (TDV sokoto, gün) ✓ — ama `yer_id:Sokoto` ve yerleşim t 1903-01-15 ile 60 gün farklı
- `data/olaylar_2s_0919.js:366-369` — 1903-07-27 Burmi, yer_id Bauci ✓ (TDV sokoto + `elfa-ha…`)
- `data/olaylar_2s_0919.js:356-357` — 1897 Bagirmi himayesi (komşu)
Evren DIŞI (künye `kronoloji:`): 1804 cihad ilanı, 1804-06-21 Tabkin Kwatto, 1806, 1808 Alkalava, 1809 «Sokoto kuruldu» (YANLIŞ→1812) ve «Bornu kaybı» (anlamsız), 1817, 1849 Kebbi, 1903 (devletler.js:6063-6083).

Eksik, önerilen maddeler:
```
{ t:"1804-06-21", b:"Tabkin Kwatto muharebesi: Osman b. Fûdî'nin cihad kuvvetleri Gobir ordusunu yendi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Sokoto", kaynak:"TDV `osman-b-fudi` — «21 Haziran 1804: Tabkin Kwatto muharebesinde zafer» · hassasiyet: GÜN (tek kaynak TDV; ikinci okunamadı)" }
{ t:"1807-01-01", kesinlik:"yil", b:"Kano Fûlânîler'in eline geçti: Sokoto emirliği oldu", tur:"fetih", yer_id:"Kano", kaynak:"TDV `kano` — «1807'de Fûlânîler tarafından alındı»; TDV `hevsa`" }
{ t:"1808-01-01", kesinlik:"yil", b:"Gobir'in başşehri Alkalava düştü: Hausa şehir devletlerinin örgütlü direnci kırıldı", tur:"fetih", yer_id:"Sokoto", kaynak:"TDV `osman-b-fudi` — «1808: Alkalava'nın fethi»; TDV `sokoto` aynı yıl" }   // Katsina/Bauci kırılmaları için de çapa; Katsina için ayrıca kaynak gerekir
{ t:"1812-01-01", kesinlik:"yil", b:"Osman b. Fûdî Sokoto halifeliğinin kuruluşunu ilân etti; Sokoto başşehir oldu", tur:"kurulus", yer_id:"Sokoto", kaynak:"TDV `osman-b-fudi` — 1812 kuruluş ilanı; TDV `sokoto` — «Devlet 1812'de kuruldu»; Hiskett 1984: «1227/1812» (Özköse trc. 2003) · Hassasiyet YIL" }
{ t:"1823-01-01", kesinlik:"yil", b:"İlorin Gwandu emirliğine bağlı Sokoto eyaleti oldu (Abdüsselam'ın bayrak alışı, Malam Salih'in ölümü sonrası)", tur:"toprak-kazanc", yer_id:"İlorin", kaynak:"Hiskett 1984, The Development of Islam in West Africa, s. 172-193 (Özköse trc., Gazi Üniv. Çorum İlahiyat Fak. Dergisi 2003/2, 173-202) — «Malam Salih 1238/1823'te öldü … Abdüsselam … bayrak … İlorin Sokoto Halifeliği'ne bağlı eyalet oldu» · ALT SINIR; yıl okunmadı" }
{ t:"1841-01-01", kesinlik:"yil", b:"Adama Yola'yı Adamava (Fombina) Emirliği'nin merkezi yaptı", tur:"kurulus", yer_id:"Yola", kaynak:"TDV `adamava` — «1841'de Yola şehrini merkez yaparak»" }
{ t:"1897-01-01", kesinlik:"yil", b:"Bida (Nupe Emirliği) Kraliyet Nijer Şirketi'ne düştü", tur:"toprak-kayip", yer_id:"Bida (Nupe)", kaynak:"okunmadı — Goldie seferinin Bida'ya girişi Ocak 1897 sonu (gün doğrulanmadı); akademik kaynak (Flint 1960; Britannica `Bida`) açılmadı" }   // gün kaynaksız: YIL hassasiyetiyle yazılmalı ya da kaynak bulunana dek madde eklenmemeli
{ t:"1903-02-01", ... }  // Kano'nun İngilizlerce işgali — TDV `kano` yalnız 1903; gün ve Zaria/Katsina için kaynak okunmadı: yıl maddesi: { t:"1903-01-01", kesinlik:"yil", b:"Kano İngilizlerce işgal edildi", yer_id:"Kano", kaynak:"TDV `kano` — «İngilizler Kano'yu 1903'te işgal etti»" }
```

## d) Harita uyumu
Açık: 10 (+0). Tamamı sahip kazancı/kaybı; kategori: 7 maddesiz kazanç + 3 kayıp.
| gün | yerleşim | öneri |
|---|---|---|
| 1807-01-01 kazanç | Kano | c) 1807 maddesi (TDV kano) |
| 1808-01-01 kazanç | Katsina | f=1808 «çapa, kaynak değil» (yerlesimler_e9353f.js yorumu). Kaynak bulunana dek beyanlı (Fûlânî Katsina'sı 1806 civarı — okunmadı). Madde 1808 Alkalava'ya yer bağla; ya da f'yi 'TDV `sokoto` emirlik listesi' ile yıl-belirsiz yaz |
| 1809-01-01 kazanç | Bauci | kaynak «bulunamadı»; f kaynaksız |
| 1812-01-01 kazanç | Sokoto | c) 1812 maddesi |
| 1817-01-01 kazanç | İlorin | f → 1823 + madde (b tablosu) |
| 1841-01-01 kazanç | Yola | c) 1841 maddesi |
| 1859-01-01 kazanç | Bida | kaynak yok; Nupe emirliğinin Bida'ya taşınma yılı araştır |
| 1897-01-01 kayıp | Bida | c) 1897 maddesi (gün okunmadı) |
| 1903-01-01 kayıp | Kano, Katsina, Zaria | c) 1903 yıl maddesi (Kano); Zaria/Katsina günü TDV'de yok |
| 1903-01-15 kayıp | Sokoto | `t` → 1903-03-15 (HATA düzeltmesi); mevcut madde 1903-03-15 (olaylar_2s_1019.js:471) kapatır |

En geniş an (1862): 8 yerleşim; Sokoto'nun gerçek yayılımına göre (Yola'dan Katsina'ya, İlorin'den Bida'ya) çok ince: Gwandu (eş-başkent, batı yarısı), Gombe, Hadeija, Katagum, Kazaure, Daura, Kontagora, Zamfara (Anka), Gobir (Alkalava/Sabon Birni), Yauri, Muri, Nasarawa/Keffi eksik. Çoğu «noktası olmayan bölge en yakın peteğe emilir» etkisiyle Sokoto/Kano peteklerine boyanıyor olabilir — ölçülmedi. Kebbi 1849'dan sonra TDV `sokoto` ile Sokoto dışı (Yakubu bağımsızlığı) — Kebbi/Argungu noktası eklenirse BEYANLI sahip.
Bauci: Burmi savaşı Gombe emirliğindedir; Bauci şehri 1903-07-27'ye kadar Sokoto'da kabul etmek (madde yer_id:Bauci) gevşek — Bauchi emirliğinin İngiliz işgali ayrı (okunmadı).
1923-10-29 izi: bu devletin dönem uçlarında bulunmadı (Nijerya/Çad `ingiltere`→`nijerya` 1960-10-01, `fransa-cumhuriyet`→`cad` 1960-08-11).

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler_e9353f.js:276-277`: Sokoto `s t:"1903-01-15"` → `"1903-03-15"` (ve `ingiltere f` aynı gün); yorum 15 Ocak ifadesi düzeltilsin (TDV sokoto 15 Mart).
2. `data/yerlesimler_afrika2.js:626-627`: İlorin `f:"1817-01-01"` → `"1823-01-01"` (kesinlik yil, Hiskett beyanı) ve eski dilim BOŞLUK; `kur` da.
3. Yeni evren maddeleri: 1804-06-21, 1807, 1808, 1812, 1823 (İlorin), 1841, 1897 Bida (kaynak bulunursa), 1903 Kano.
4. `data/devletler.js:6063` künye `kaynak:` slug yerine tam künye (TDV «Sokoto» + «Osman b. Fûdî»); `ic_not`: f çelişkisi (TDV 1803 / Britannica 1804 / TDV 1812).
5. Künye kronolojisi 1809 satırı «halifelik resmen kuruldu» → 1812; «Bornu halifeliğin elinden çıktı» ifadesi düzeltilsin (evren dışı).
6. Bauci/Bida/Katsina/Zaria `kaynak:"bulunamadı"` alanları kaynak bulunana dek beyanlı; aksi hâlde Veri kuralı «Beyansız yaklaşıklık».

## Erişilemeyen kaynaklar
- Last, Murray (1967) *The Sokoto Caliphate* · Hiskett (1984) tam kitap (yalnız Özköse çevirisi okundu).
- Britannica «Sokoto», «Usman dan Fodio», «Kano», «Ilorin», «Bida» — 403; soru: Bida'nın düşüş günü (1897 Ocak), Kano'nun işgal günü (Şubat 1903?), Zaria/Katsina/Bauci'nin İngiliz geçiş yılı.
- UNESCO GHA VI (Ajayi 1989) Sokoto ve Nupe/İlorin bölümleri. Soru: Katsina'nın Fûlânî eline geçiş yılı; Bida başkent oluşu (1859?).
- DergiPark: Özköse (2003) çevirisi okundu; TDV `nupe`, `ilorin`, `bida`, `katsina` slug'ları çekilemedi/ölü — «yok» değil «çekilemedi».
- Flint, J. *Sir George Goldie and the Making of Nigeria* (1960): Bida/İlorin 1897 günleri.
