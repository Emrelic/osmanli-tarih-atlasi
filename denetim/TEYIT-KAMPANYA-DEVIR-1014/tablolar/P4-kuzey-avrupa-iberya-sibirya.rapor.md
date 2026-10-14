# P4 — Kuzey Avrupa, İberya, Sibirya-bozkır: teyit raporu

Girdi: `P4-kuzey-avrupa-iberya-sibirya.tsv` (62 madde, hepsi `data/devletler.js` künye kronolojisi).
Çıktı: `P4-kuzey-avrupa-iberya-sibirya.cikti.tsv` (62 satır, anahtar/dosya/t/b girdiyle birebir, betikle denetlendi).
Süre: 15:03 – 15:40 (yaklaşık 37 dk). Betikler: `scratchpad/teyit_is_P4/` (f.py, s.py, dogrula.py, ham.py).

## Hüküm sayıları
| hüküm | sayı |
|---|---|
| teyit | 41 |
| teyit-yil | 6 |
| tarih-celiski | 5 |
| teyit-edilemedi | 10 |

### tarih-celiski (Emre karar verir)
- `danimarka#9` 1985-01-01 → **1985-02-01** (Christian Science Monitor 1 Şubat 1985. Hollanda antlaşma bankasında yürürlük 01-02-1985. lex.dk yalnız yıl verir.)
- `cebelitarik-ingiliz#1` 1779-06-24 → **1779-06-21** (EBSCO Research Starters. İkinci kaynak bulunamadı.)
- `schleswig-holstein-1848#6` 1850-07-24 → **1850-07-25** (lex.dk «Isted» ve «de slesvigske krige». Madde metninin kendisi "24-25" diyor.)
- `norvec-1814#2` 1814-07-27 → **1814-07-26** (SNL «krigen i 1814» ve «1814»)
- `uzak-dogu-cumhuriyeti#6` 1922-06-24 → **1922-07-19** (BSE «Чанчуньская конференция». Japonya'nın 24 Haziran'daki tek taraflı açıklaması ayrı bir olay olabilir.)

## Kaynaklar (yeni_kaynak, kaynak_guven.js'te sınıflandı)
SNL 15 · lex.dk (LEX-DK) 10 · Gran Enciclopèdia Catalana (GEC) 12 · BSE (gufo.me) 4 · TDV 3 · EBSCO-RS 2 · HISTORY-STATE (FRUS) 1 · MEVZUAT (Hansard) 1 · RESMI-SITE (parlamento.pt) 1 · SECKIN-KURUM (europa.eu) 1 · HABER (csmonitor) 1 · tablo dışı 1.
Bütün `yeni_kaynak` metinleri tek parça. `dogrula.py` her birini tablonun desenleriyle sınıfladı: hepsi A ya da B (C/KARIŞIK yok), tek istisna aşağıda.

**TABLODA-YOK önerisi:** `ENC-ZABAYKALYE`: Энциклопедия Забайкалья (ez.chita.ru, Zabaykalya Devlet Üniversitesi, imzalı maddeler). Yalnız `uzak-dogu-cumhuriyeti#1` (Gongota) için kullanıldı. ENC-REGIONAL gibi B önerilir.

## Ham doğrulama
Oturumun ortasında Bash/PowerShell bir süre engellendi (ana oturum worktree'ye geçmişti), o arada WebFetch kullanıldı. Kabuk geri gelince `ham.py`, 52 `yeni_kaynak` alıntısının hepsini ham sayfadan (urllib; snl.no/lex.dk için .json API) yeniden doğruladı: **52/52 tamam**. İkisi (europa.eu "State : since", SNL "Hamina ,") yalnız HTML boşluk farkıyla elle doğrulandı.
- Universalis «Angola» ham sayfası JS ile yükleniyor, doğrulanamadı. Bu yüzden `portekiz#9` için ham doğrulanan lex.dk «Angola – historie» kullanıldı, Universalis yalnız `not`ta.
- `not` sütununda geçen ama yeni_kaynak olmayan bazı yan tanıklar **yalnız WebFetch ile** okundu: verdragenbank.overheid.nl (danimarka#9), Museo Militaria (FDR#3), schleswig-holstein.de ve bpb.de (schleswig-holstein maddeleri). stjornarradid.is (izlanda-norvec-danimarka#4) ise ham okundu.

## Zorluklar
- **Britannica** (403), **CVCE** (BotStopper), **Infopédia** (403) ve **web.archive.org** erişilemedi. Bot koruması aşılmaya çalışılmadı.
- **DBE** artık historia-hispanica.rah.es'e yönleniyor ve gövde JS ile yükleniyor, okunamadı. İberya ortaçağı bu yüzden GEC'ye dayandı. León 1038 taç giyme, Coria 754, Oviedo ~810, Porto 868 ve Zamora 893 bu yüzden teyit edilemedi.
- **BRE** (bigenc.ru) bre.ruwiki.ru'ya yönleniyor ve 401 dönüyor. Sibirya için BSE (gufo.me) ve Encyclopedia of Transbaikalia kullanıldı.
- PDF'ler (Hispania Sacra, bir Polonya dergisi) metne çevrilemedi.
- İç çelişkiler `not`ta beyan edildi:
  - SNL'de Ísleifur için hem 1056 hem 1057 geçiyor.
  - GEC'de Hermeric için hem 438 hem 441 geçiyor.

## Teyit edilemeyenler (10)
leon-kralligi#3, izlanda-serbest-devleti#8 (Flugumýri), schleswig-holstein-1848#2 (12 Nisan Diyet kararı), finlandiya-demokratik-cumhuriyeti#3 (Summa 16-22 Aralık), alas-ozerkligi#2, uzak-dogu-cumhuriyeti#3, asturias#3, #5, #9, #10. Aranan yerler her satırın `not`unda.
