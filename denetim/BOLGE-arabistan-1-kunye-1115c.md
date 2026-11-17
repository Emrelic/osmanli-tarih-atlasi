# ARABİSTAN + İRAN + IRAK — adım 1 künye envanteri (UMIT 1115c, 15 Kasım 2026)

Ölçüm: `origin/kasa-1115-umit-birlesim` c317d2d85 üzerinde, `data/devletler.js` (2286 künye) ve `data/yerlesimler*.js` (5646 yerleşim) betikle okundu (UMIT, 15 Kasım 2026).

## Sayılar
- `bolge` ∈ {arabistan, iran, mezopotamya}: **188 künye**, künye-içi kronoloji maddesi **1287** (bu oturumda +5 → 1292; `kacar-esterabad` 0→5).
- 1000-1199'u kesen künye: **46**.
- Künye-içi kronolojisi 2'den az olanlar: `dilmun` (1), `ma-in` (0), `kataban` (0) (antik; kaynak sırası burada TDV değil, Frayne/Shaw konvansiyonu, ertelendi) — `kacar-esterabad` 0 idi, düzeltildi.
- **Renk:** 188 künyenin hepsinin (`harita` ya da `id`) `arac/renkler.py` BOYALAR'da karşılığı var (0 eksik anahtar; `renk_olc.py` çalıştırılmadı).
- **Yerleşimsiz künye (hiçbir yerleşimin `s:`/`d:`/`v:` penceresinde adı geçmeyen): 55** (ölçüm yalnız `s`,`d`,`v` alanlarını sayar; `isg:`/`kd:` sayılmadı → bazıları "yerleşimsiz" görünüp işgal penceresi taşıyor olabilir).

### Yerleşimsiz 55 künye (kimlik | f→t)
sani-emirligi 1871→1913 · sabah-emirligi 1795→1914 (ikiz: `katar`/`kuveyt` yerleşimleri kullanılıyor, SİLİNMEZ) · lubnan-emirligi 1516→1842 · cebel-i-lubnan-mutasarrifligi 1861→1915 · harfusogullari 1521→1850 · badusbani 665→1598 · uyuni 1076→1236 · tahiri-horasan 821→873 · saffari 861→1003 · birlesik-arap-devletleri 1958→61 · aden-kolonisi 1937→63 · gilan-sovyet-cumhuriyeti 1920→21 · cobaniler 1335→57 · ukaydir 866→(açık) · dilmun · isin · esnunna · sealand-1 · isin-2 · mitanni · elymais · saba · hadramavt · uman-ibadi 750→(açık) · taberistan-zeydi 864→900 · kis-egemenlik · uruk-erken-hanedan · ur-1-hanedan · umma-erken-hanedan · awan · manna · dulefi 825→897 · bagdat-memlukleri 1704→1831 · arap-birligi-irak-urdun 1958 · celili-musul 1726→1834 · urfa-toros-beyligi 1095→98 · taberistan-zeydi-ii 914→928 · ubaid/halaf/uruk-gec kültürleri · parsua · teispid-pers · yemame-museylime 631→633 · esved-ansi-yemen 632 · nebhani-umman 1154→1624 (ikiz: `nebhani`) · sacilar 889→929 · azerbaycan-milli-hukumeti 1945→46 · sistan-mihribani 1236→1543 · baban-emirligi 1669→1850 · cizre-emirligi 1508→1627 · bohtan-emirligi 1821→47 · muntefik-basra 1694→97 · afrasiyabiler 1612→68 · ingiliz-mezopotamya-idaresi 1914→21 · irak-sam-islam-devleti 2014→19.

**A (yerleşimsiz künyeye pencere yazma): YAPILMADI.** Gerekçe: bu oturumun süre/kaynak okuma imkânı (TDV'nin yalnız özet-model okuması; Iranica 403; İSAM/DergiPark makaleleri erişilmedi) 55 künyenin her biri için kaynaklı, gün hassasiyetli, Değişmez 1-2-4c'yi ihlal etmeyen yerleşim penceresi yazmaya yetmedi; kaynaksız pencere yazmak brif ve CLAUDE.md'ye aykırı («bulunamadı + neden» yazılır). Öncelikli adaylar (TDV maddesi var, kaynak okunabilir): Bâbân (TDV `baban`) → Süleymaniye/Şehrizor zinciri; Bohtan/Cizre (TDV `cizre`); Lübnan emirliği/Mutasarrıflığı (TDV `lubnan`) → Deyrülkamer, Beyrut civarı (bu pencereler Osmanlı içi özerklik, `s:` yerine `d:` alt sahiplik modeli gerekir — KASA kararı).

**B (eksik devlet):** Bu oturumda **kaynaklı yeni künye YAZILMADI.** Atlasta açık görünen tek bölgesel boşluk: Kiş (Kays) adası 1000-1230 `__BOSLUK__` (TDV adaya sahiplik zinciri vermiyor; Iranica «Hormuz ii» / Kays Emirleri okunamadı). Adaylar (kaynak ARANMADI, doğrulanmadan künye yazılmaz): Kays/Kiş Emirliği, Cuzurî (Cîrûft) emirleri, Muşa'şa öncülleri (künyede `musasa` 1442'den), Hasa kolları. Sorulan: bu liste öneridir, eksik kanıtlı olgu değildir.

**C (1000-1199 seyrek dilim):** 46 künye bu dilimi kesiyor (Büyük Selçuklu, Irak/Kirman Selçukluları, İldenizliler, Salgurlular, Ahmedîlîler, Zengîler, Karmatî, Uyûnî, Suleyhî, Zürey‘î, Necâhî, Resûlî, Eyyûbî-Yemen, İsmâilî Alamut vb.). Bu oturumda 1000-1199'a **ekleme yapılmadı**.

## Hizalama denetimi — künye ucu / yerleşim ucu (özel görevlerle ilgili)
- `hurmuz-sultanligi` t 1514-01-01 ↔ Hürmüz yerleşimi `hurmuz-sultanligi` en çok 1510-12-02'ye kadar (D4c temiz yönde) · yerleşim ucu 1515-04-01 Portekiz.
- `karakoyunlu` t 1469-12-19 ↔ Irak-ı Arab yerleşimlerinde `karakoyunlu` ucu 1469-01-01 (künye ömründen **önce** bitiyor; D4c ihlali değil, ama bkz. Kuyruk Q7).
- `kacar-esterabad` f 1747-06-20/t 1759-02-13 ↔ Esterâbâd penceresi aynı günler ✓.
