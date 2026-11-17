# Tanık YZ-özet ve birebir kontrolü (UMIT, 17 Kasım 2026)

Ağaç: `sehir-afrika-kuzey-dogu-1116` worktree (UMIT). Tablo: `TANIK-YZ-BIREBIR-KONTROL-UMIT.tsv`.

## Yöntem
Her kaydın `ilk.kaynak` sayfası kendi tarayıcı sekmesinde açıldı; tanık (ve Britannica'ya dayanan `ic_not` alıntıları) JS ile
`document.body.innerText` ve `document.body.textContent` içinde, boşluk/tipografik tırnak normalleştirilerek birebir arandı.
İsabetin DOM konumu okundu: Britannica gövdesi = `p.topic-paragraph` / `section#ref…`; YZ bloğu = gizli `ai-qna-answer`
(“Created from Britannica articles using AI”) SSS akordeonu. İstekler arası ≥5 sn. İndirme yok.

## ① Ölçülen
- **44 kayıt** kontrol edildi: 24 örnek (TANIK-ORNEK-4TE1) + 20 ek Karayip `ilk.kaynak`-Britannica kaydı
  (Karayip'te `ilk.kaynak`ında Britannica geçen toplam 25 kayıt; 5'i örnekteydi).
- **Birebir: 43/44 (%97,7).** Tek ret: `oulu-fi` (cümle kesilip nokta eklenmiş — kısaltma).
- **Tanığı YZ-özet bloğunda çıkan: 0.** Bütün tanıklar görünür makale gövdesinde (innerText E).
- **Destekleyici Britannica alıntısı YZ bloğunda çıkan: 1** — `granada-ni` ic_not'undaki «History of Nicaragua» alıntısı
  `'by 1524 with the founding of Granada and León'` yalnız gizli `ai-qna-answer` bloğunda (innerText H, textContent E).
- Gizli YZ-SSS blokları sayfalarda yaygın: Santo Domingo, Guatemala City, San Salvador, History of Haiti / Guatemala /
  El Salvador / Nicaragua sayfalarında gövdeyle aynı olguların YZ kopyası var; buradaki alıntılar gövdede de birebir
  bulunduğu için güvenli sayıldı.
- Ad+yıl aynı cümlede: 28/44 E, 16/44 H (zamir/“the city/town”/öncül ad; hepsi madde konusu şehir, mevcut ic_not ve
  kesinlik kararlarıyla uyumlu — yeni düşürme gerekmedi).
- **Önizleme/okunamayan: 0.** Önceki turda “YALNIZ ÖNİZLEME” denen Santa Ana ve Matanzas bugün tam gövdeyle okundu.
- **sahip[].kaynak Britannica:** 3 Karayip dosyasında 44 sahip dönemi Britannica'ya dayanıyor; 17 Britannica sayfası
  (Havana/History, San-Jose-Costa-Rica, Costa-Rica/Independence, San-Salvador, Guatemala-City, Santo-Domingo,
  Dominican-Republic/Press-and-broadcasting, Panama-City, Panama/Sports-and-recreation, Gran-Colombia,
  Saint-Kitts-and-Nevis/History, history-of-Haiti, history-of-Guatemala, Quetzaltenango, Honduras/History,
  history-of-El-Salvador, Curacao) açılıp ic_not'taki yıl/alıntılar arandı: **hepsi gövdede**, YZ-bloğuna dayanan sahip
  dönemi yok. İki not: history-of-Guatemala'da “1822” yalnız gizli ilgili-sorular listesinde; ama aynı dönemlerin
  ikinci kaynağı Guatemala-City gövdesinde 1822 var → değişiklik yok. Saint-Kitts/History'de 1702 yok; ic_not 1702'yi
  zaten National Trust'a dayandırıyor.
- `py -I -X utf8 arac/sehir_tarihce.py denetle`: karayip_1/2/3, kuzey_avrupa_1/2/ayri, dogu_borc_1 → **ihlal 0** (çıkış 0).

## Değişen kayıtlar (4)
| dosya | id | eski → yeni |
|---|---|---|
| kuzey_avrupa_2 | oulu-fi | tanık `…marknadsplats, Ulahamn.` (kesik) → tam gövde cümlesi `…Ulahamn, till vars skydd befästningsverk under seklets senare del anlades på en holme i älvmynningen.`; kesinlik belirsiz kaldı |
| karayip_3 | granada-ni | kesinlik `yil` → `belirsiz`; ic_not: YZ alıntısı beyan edildi, gövde cümlesi (“by 1524” üst sınır) ve Britannica şehir gövdesi 1523 yazıldı; hakemli karar eşiği (iki bağımsız kaynak) artık yok. t 1524 (ELAHC) bırakıldı |
| karayip_3 | santa-ana-sv | kaynak beyanı “YALNIZ ÖNİZLEME” → “tam gövde okundu”; ic_not birebir kontrol notu |
| karayip_3 | matanzas-cu | kaynak beyanı (ilk + kur) “YALNIZ ÖNİZLEME” → “tam gövde okundu”; ic_not birebir kontrol notu |

## Açılan siteler
britannica.com (36 ayrı sayfa), lex.dk (10), snl.no (2), uppslagsverket.fi (2), encyclopedia.com (ELAHC, 6),
islamansiklopedisi.org.tr (3), whc.unesco.org (2).

## ② Bulunamayan
- Granada için 1524'ü ELAHC'den bağımsız teyit eden ikinci akademik kaynak bu turda aranmadı (önceki turda adı geçen
  Cabrero Fernández & González Pujana 1992 PDF'i okunmadı).
- lex.dk/snl.no/uppslagsverket/TDV/UNESCO/ELAHC'de YZ-özet benzeri gizli blok görülmedi (innerText = textContent sonucu
  her kayıtta aynı).

## ③ İstek
- Granada: 1523/1524 için hakemli karar (Cabrero Fernández & González Pujana 1992 ya da Herrera neşri) — EMRELİC kuyruğuna.
- Britannica'ya dayanan öteki dosyalarda (Afrika, İran-Kafkasya) aynı innerText/textContent taramasının toplu koşusu:
  tek ret sınıfı “YZ-SSS'te olup gövdede olmayan ic_not alıntısı” — tanıktan çok destekleyici alıntılarda çıkıyor.
