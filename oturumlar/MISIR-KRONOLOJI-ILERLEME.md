<!-- DURUM: IS-USTUNDEYIM | 2026-08-21 | Misir kronolojisi arastiriliyor, ilk parti hazirlaniyor -->

# MISIR KRONOLOJİ — ilerleme defteri

## Kimlik
- **Aynı oturum:** MEMLÜK KRONOLOJİ'yi teslim eden oturum, koordinatör
  tarafından doğal devam olarak MISIR KRONOLOJİ'ye yönlendirildi.
- **Dinlenen adlar (bekçi):** `MISIR KRONOLOJİ` · `MISIR KRONOLOJI` ·
  `MEMLÜK KRONOLOJİ` · `MEMLUK KRONOLOJI`
- **Görevi veren:** OSMANGAZİ (koordinatör), cross-session-message.
- **Dosyam:** `data/kronoloji_misir.js` → `window.KRONOLOJI_MISIR`
- **Otorite:** `oturumlar/KRONOLOJI-SARTNAME.md`. §1 yoğunluk KOTA DEĞİL.

## Görev
Osmanlı Mısırı + Kavalalı hanedanı, **1517-1923** (406 yıl). Memlük
dosyasının (1281-1517) doğal devamı. Sayı hedeflenmedi.

⚠️ **Osmanlı verisiyle çakışma yüksek** (`data/olaylar*.js`, 1223 madde) —
`dunya` puanlarını mümkün olduğunca oradan al/tutarlı tut, odak MISIR'da:
aynı olay Osmanlı için kayıp, Mısır için kuruluş/dönüm olabilir.

## 2026-08-21 — açılış
1. Şartname zaten biliniyor (Memlük'ten).
2. Coğrafi tarama: `arac/girdi.py` üzerinden Mısır/Osmanlı Mısırı ile
   ilgili yer_id adayları tarandı. Eşleşenler: Kahire, İskenderiye,
   Süveyş, Kavala, Konya, Kütahya, Halep, Şam, Kudüs, Gazze, Akkâ, Yafa,
   Rodos, Girit (Resmo)/Kandiye (Girit), Mora/Mora (Tripoliçe), Yanya,
   Edirne, İstanbul, Dimyat, Dongola, Hartum, Sennar, Asyut, Antep, Sina
   güneyi. **Eşleşmeyenler**: Nizip, Navarin, Reşid (Rosetta), Fayyum,
   İsmailiye, Port Said, Faşoda, Berenik, Tor — bu yer_id'ler boş
   kalacak, raporda sayıyla bildirilecek.
3. Araştırma beş kola bölündü:
   A Osmanlı eyaleti 1517-1798 + Fransız işgali 1798-1801
   B Mehmed Ali'nin yükselişi 1805-1820 (Kal'a katliamı, Vehhabi seferi,
     Sudan fethi)
   C Mora müdahalesi + Birinci/İkinci Mısır Meselesi 1824-1841
   D İsmail Paşa + Süveyş Kanalı + 1882 işgal + 1914 himaye + 1922 krallık
   E Bilim-kültür-toplum (Bulak Matbaası, Tahtâvî, tıp okulu, pamuk
     ekonomisi, Mısırbilim, matbuat/Nahda)

## 🔴 AKSAKLIK — ağ araçları kalıcı arıza (BEKLETMEDEN bildirildi)
Beş araştırma agent'ı (A-E) çağrıldı, HEPSİ "claude-sonnet-5 temporarily
unavailable" sınıflandırıcı hatasıyla başarısız oldu. Tekrar denendi
(3-4 kez), hâlâ başarısız. Bash/curl/WebFetch de aynı hatayı verdi.
PowerShell bazı çağrılarda çalıştı, bazılarında aynı hatayı verdi —
tutarsız, kısmi bir arıza. ⇒ Ağ gerektiren araştırma bu turda YAPILAMADI.

**Çözüm:** Projenin KENDİ Osmanlı kronolojisinde (`data/olaylar_ek4.js`,
`olaylar_ek5.js`, `olaylar_ek6.js`, `olaylar_ek9.js`, `olaylar.js`,
`olaylar_7a4170.js`) Kavalalı Mehmed Ali meselesi ZATEN 44+ maddeyle,
TDV/akademik kaynaklı ve production'da yayında olarak var. Bunu okuyup
Mısır perspektifine uyarladım (kaynak alanına orijinal dosya+madde AÇIKÇA
yazıldı, gizlenmedi). Bu "yeni araştırma" değil ama "bulunamadı" da
değil — zaten doğrulanmış veriyi yeniden kullanma.

## TESLİM: PARTİ 1 (ağ arızası altında), 83 madde
node --check temiz, 0 tekrar, 0 şema hatası. 23 farklı yer_id'nin 23'ü
de gerçek yerleşimle eşleşiyor (py girdi.py ile doğrulandı).

### RAPOR — KRONOLOJI-SARTNAME.md §7
① 0 → 83.
② konu: toprak-kazanc 21 · savaş 24 · siyaset 10 · antlaşma 7 ·
   toprak-kayıp 6 · isyan 4 · idari 4 · iktisat 4 · hükümdar 3.
③ onem 5→28·4→29·3→22·2→4·1→0 — dunya 5→11·4→18·3→27·2→21·1→6.
④ kapsam: dış 72 · iç 11 (beklenen — bu dönem büyük ölçüde dış
   ilişkiler/savaşlar tarihi).
⑤ yer_id: 23 farklı değer, 23/23 eşleşiyor.
⑥ kaynak: 81 madde mevcut Osmanlı kronolojisinden (zaten TDV/akademik
   doğrulanmış) Mısır perspektifine uyarlandı, kaynak dosya+madde AÇIKÇA
   belirtildi · 2 madde "bulunamadı" (Düyûn-ı Umûmiyye 1876, İsmail
   Paşa'nın azli 1879 — TDV'ye bu turda erişilemedi, standart akademik
   tarih yazımıyla [Vatikiotis] yazıldı, damgalandı).
⑦ **EKSİK KALAN, ağ dönünce tamamlanacak:**
   - A) Osmanlı eyaleti 1517-1798 İÇ kısmı: 1523-24 Ahmed Paşa isyanı,
     18.yy Kâzdağlı hizbi, Ali Bey el-Kebîr'in bağımsızlık girişimi
     (1768-73) — ne bu dosyada ne Osmanlı kronolojisinde bulunamadı.
   - E) Bilim-kültür-toplum TAMAMEN eksik: Bulak Matbaası, Tahtâvî,
     Kasrü'l-Aynî tıp okulu, pamuk ekonomisi, Mısır Müzesi/Mısırbilim,
     el-Ahrâm/Nahda — Osmanlı kronolojisinde YOK (beklenen, iç Mısır
     gelişmeleri), gerçek TDV araştırması gerekiyor.
⑧ commit YAPMADIM. Dosya: `data/kronoloji_misir.js`, 83 madde,
   `window.KRONOLOJI_MISIR`.

## 2026-08-21 — Ağ araçları düzeldi, A ve E kolları tamamlandı

TESLİM: PARTİ 2, +37 madde (83 → 120).
- A) Osmanlı eyaleti 1517-1798 iç tarihi: 17 madde — Hâin Ahmed Paşa
  isyanı (1524), İbrahim Paşa Kanunnâmesi (1525), Kāsımiyye-Zülfikāriyye
  fitne (1711), Kazdağlı hizbinin yükselişi (1723-1729), Bulutkapan Ali
  Bey'in bağımsızlık girişimi ve Suriye seferi (1760-1775, Zâhir el-Ömer
  ittifakı, Şam'ın alınması, Ebu'z-Zeheb'in ihaneti, Sâlihiye bozgunu),
  Cezayirli Gazi Hasan Paşa'nın müdahalesi (1786).
- E) Bilim-kültür-toplum: 20 madde — Bulak Matbaası (1821), Tahtâvî'nin
  Paris heyeti ve Telhîsu'l-İbrîz'i, Kasrü'l-Aynî tıp okulu (1827),
  Jumel pamuğu ve Amerikan İç Savaşı etkisi, Hidiv İsmail'in Kahire
  imarı, Dârü'l-Kütüb (1870), Antikiteler Servisi/Mısırbilim (1858),
  el-Ahrâm (1875), Cemâleddin Efgânî ve Muhammed Abduh.

node --check temiz, 0 tekrar (eski-yeni VE yeni-içi tarandı), 0 şema
hatası. 23 farklı yer_id'nin 23'ü de zaten doğrulanmıştı (yeni değer
eklenmedi).

### RAPOR — KRONOLOJI-SARTNAME.md §7 (tüm dosya, 120 madde)
① 0 → 120.
② konu dağılımı geniş: toprak-kazanç, savaş, siyaset, antlaşma, isyan,
   idari, iktisat, bilim, kültür, sosyal — sekiz eksenin hepsi dolu.
③ onem 5→36·4→43·3→35·2→6·1→0 — dunya 5→11·4→18·3→36·2→38·1→17.
④ kapsam: dış 83 · iç 37.
⑤ yer_id: 23 farklı değer, 23/23 eşleşiyor, 0 uyuşmazlık.
⑥ kaynak: parti 2'nin 37 maddesinin ~27'si doğrudan TDV (HTTP+gövde
   doğrulanmış: misir, ahmed-pasa-hain, zahir-el-omer, bulak,
   rifaa-et-tahtavi, kahire, darul-kutubil-misriyye, efgani-cemaleddin,
   muhammed-abduh, pamuk) · geri kalanı TDV+akademik kombinasyonu ya da
   "bulunamadı" (TDV taneçiği kapsamıyor — Ali Bey'in bağımsızlık ilanı,
   Kasrü'l-Aynî'nin kuruluşu, Jumel pamuğu, Antikiteler Servisi,
   el-Ahrâm — dayanak P.M. Holt, D. Crecelius, Britannica, Khaled
   Fahmy, E.R.J. Owen, Donald Malcolm Reid, Ami Ayalon, açıkça damgalı).
   Vikipedi hiçbir maddede tek dayanak olmadı.
⑦ Bulamadıklarım: yok — istenen bütün beş kol (A-E) artık dosyada.
⑧ commit YAPMADIM. Dosya: `data/kronoloji_misir.js`, 120 madde,
   `window.KRONOLOJI_MISIR`.

## Durum
Görev tamamlandı — beş kol da (A-E) yazıldı. Sıradaki tur için hazırım.
