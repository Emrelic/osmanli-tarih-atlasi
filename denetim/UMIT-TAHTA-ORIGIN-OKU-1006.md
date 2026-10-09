# TAHTA-ORIGIN-OKU-1006 — bekçi tahtayı ORIGIN'den okusun

UMIT · dal `umit-tahta-origin` (temel `origin/makine/umit`) · 6 Ekim 2026

## Sorun
`tahta.py yaz` mesajı origin'e push ediyor, `tahta_bekci.py` ise YEREL çalışma ağacındaki
`oturumlar/tahta.json`u okuyordu. O ağacı kimse pull etmediği için EMRELIC'in 10 görev mesajı
(M-5862…M-5874) UMIT'teki 11 canlı bekçiye 3 saat ulaşmadı. Nabız damgası CANLI diyordu ve
bu doğruydu; ama damga bekçinin hangi kaynağı okuduğunu söylemiyordu. Bu yüzden bayat tahta
taze görünüyordu.

Ek gözlem (`git reflog origin/main`, 15:00–15:28): bu depoda bir süreç (`fetch --porcelain
--no-write-fetch-head …`, büyük olasılıkla masaüstü istemcisi) `origin/main`i birkaç dakikada
bir zaten fetch ediyor. Yani origin'den gelen veri yerel depoya iniyordu, çalışma ağacına
inmiyordu. Arızanın kendisi buydu.

## Ölçülen fetch bedeli (C:\atlas-tahta, gerçek GitHub, `GIT_TRACE_CURL` gövde baytları)

| durum | süre (ms) | alınan / gönderilen HTTP gövdesi | ölçüm sayısı |
|---|---|---|---|
| tahta değişmedi | 815 · 866 · 890 · 1000 · 1061 · 1130 | **256 B / 381 B** | 6 |
| başka değişiklik (10 commit, nesneler yerelde) | 1233 · 1351 | 1068–5245 B / 1364 B | 2 |
| gerçekten yeni küçük commit (e4f108a3, 1 md dosyası, nesneler yerelde YOKTU) | 1134 | 2949 B / 1364 B | 1 |
| `ls-remote` (karşılaştırma) | 1067 | — | 1 |
| fetch'siz okuma turu (rev-parse, önbellekte blob) | 55 | — | 1 |
| ilk okuma (fetch + 17,5 MB blob + JSON + yerel JSON) | 1437 | — | 1 |

**Tahta değişince ne iner?** Ölçüm penceresinde (15:26–15:56) origin'e tahta commit'i
düşmediği için bu satır canlı fetch ile ölçülemedi. Yerine son 8 gerçek tahta commit'inin
(M-5867…M-5874) paketi, sunucunun göndereceği biçimle aynı şekilde (`git pack-objects --revs --thin`)
üretilip ölçüldü:

| commit | thin paket (telde) | delta tabanı olmasaydı |
|---|---|---|
| M-5867 … M-5874 | **4378 – 5256 B** | ~6,03 MB |

Tel üzerindeki bedel küçük. Asıl bedel diskte: her tahta mesajı yerel depoya
**`tahta.json` 6.534.765 B + `TAHTA.md` 6.263.014 B = ~12,8 MB gevşek nesne** olarak iner
(17,6 MB + 15,2 MB ham; ölçüm `C:\atlas\.git\objects`, M-5873/M-5874). Bu bedeli bekçi
getirmiyor; aynı nesneleri `pull` da indirir ve nesne deposu ortak olduğu için makine başına
bir kez ödenir. Bekçi yalnız bu bedeli öne çekiyor (pull'u beklemeden indiriyor).
Bugünkü depo: **4294 gevşek nesne = 1,63 GiB**, ayrıca 17 yarım kalmış `tmp_pack`/`tmp_obj`
çöpü = 496 MiB (yarıda kesilmiş fetch'lerin izi).

**Fetch aralığı kararı:** her turda (`--fetch-ara 60`, `ara 60` ile aynı). Gerekçe: değişmeyen
tahtada bir fetch ~0,9 sn sürüyor ve ~640 B HTTP gövdesi taşıyor. 11 bekçi dakikada 11 fetch
eder; bu da makine başına dakikada ~11 sn git süreci demek, ağda ihmal edilebilir. Asıl
bedel olan 12,8 MB/mesaj fetch sıklığından bağımsız, çünkü her mesaj bir kez iner.
Aralığı seyreltmek gecikmeyi büyütür ama disk bedelini düşürmez. `--fetch-ara N` ayrı bir
ayar olarak duruyor, gerekirse seyreltilebilir.

**Depolama bölünmesi (Emre'nin kararı, yapılmadı):** her mesajda 17,5 MB'lık dosyanın baştan
yazılması mesaj başına ~12,8 MB gevşek nesne demek. Bölmek (ay/hafta başına dosya ya da
yalnız eklenen kütük) ve `TAHTA.md`yi depodan çıkarmak bu bedeli yaklaşık 1000 kat düşürür.

## Tasarım
- Yeni ortak okuyucu `arac/tahta_kaynak.py` (`Okuyucu`). Bekçi ve `tahta.py`nin salt-okur
  komutları bunu kullanıyor.
- Fetch ağaca dokunmaz ve **özel bir ref'e** yapılır: `git -c gc.auto=0 fetch --quiet
  --no-write-fetch-head --no-auto-maintenance --refmap= origin +refs/heads/main:refs/bekci/<AD>`,
  sonra `git rev-parse ref:oturumlar/tahta.json` ve blob değiştiyse `cat-file blob`.
  `pull`/`merge` yok.
  - Neden `origin/main` değil: `tahta.py yaz` aynı depoda `pull --rebase` ile
    `refs/remotes/origin/*`yi günceller. 11 bekçinin dakikada bir aynı ref'i güncellemesi ref
    kilidi yarışı (`cannot lock ref`) doğurur. Özel ref yazıcının ref'lerine hiç dokunmaz.
    `--no-write-fetch-head` seçeneği, `pull`un okuduğu FETCH_HEAD'i ezmemek için konuldu.
  - `GIT_TERMINAL_PROMPT=0`, `GCM_INTERACTIVE=never` ve 45 sn zaman aşımı var. Kimlik sorusu
    ya da asılı ağ durumunda fetch düşer ve bu görünür; süreç asılı kalmaz.
- **Okunan küme origin ∪ yerel.** Kimlik `(no, kimden, zaman)` üçlüsüdür. Push'u düşmüş ya da
  makine dalına gitmiş, aynı makinede yazılmış bir mesaj origin/main'de olmaz. Yalnız origin
  okunsaydı bu sınıf kaybolurdu (eski bekçi onu görüyordu). Yalnız yerelde olanların sayısı
  damgada `yerel_ek` alanına yazılır.
- Bekçinin ilk okuması da aynı kaynaktan yapılır. `--cik` ile `.bekci_son_<AD>` birlikte
  kullanıldığında, son görülen numaradan sonraki origin mesajları ilk turda yeni sayılır.
  Böylece kaçan birikim ilk kurulumda teslim edilir.
- Okuma artık nabızdan önce yapılıyor: damga eldeki turun fetch sonucunu taşıyor, bir önceki
  turunkini değil.
- Uyanan oturum mesajı yerel ağaçta bulamayabilir. Bu durumda bekçi stderr'e
  `Mn YEREL ağaçta YOK … py arac/tahta.py oku --kim "<AD>" --kaynak origin` yazar.
- `--kaynak yerel` eski davranışı geri getirir. O durumda damgaya
  "`--kaynak yerel bayrağı (eski davranış)`" notu düşer.

## Üç şart
1. **Fetch başarısızlığı görünür:** stderr'e `[BEKCI-KAYNAK] 🔴 FETCH DÜŞTÜ (n. ardışık) —
   <fatal satırı> · kaynak YEREL'e düştü` yazılır (ilk hatada, hata metni değişince ve her 10.
   ardışık hatada; düzelince "✓ fetch YENİDEN ÇALIŞIYOR"). Damgaya `fetch_ok:false` ve
   `fetch_hata` düşer. Sınav: S2.
2. **Kaynak damgada:** damga `kaynak` ("origin"/"yerel"), `kaynak_not`, `uzak`, `fetch_ok`,
   `fetch_hata`, `fetch_ms`, `fetch_son_basari` ve `yerel_ek` alanlarını taşır.
   `bekci_olc.py` bunları `kaynak` sütununa basar. Nöbetteki bekçiler için
   `KAYNAK (nöbettekiler): origin N · yerel N · ESKI N` özeti ve yerel okuyanlar için 🔴 satırı
   da basılır. `ESKI`, damgasında `kaynak` alanı olmayan, yama öncesi bekçi demektir; o kod
   yalnız çalışma ağacını okur. Sınav: S1, S5, S5b.
3. **Yerele düşmek yalnız notla:** "yerel"in her hâlinde `kaynak_not` doludur: fetch düştü
   (+son başarılı fetch kaç sn önce), depo yok, bayrak ya da okuyucu arızası. Not stderr'e de
   yazılır. Fetch düştüğünde eldeki bayat origin görüntüsü "origin" diye etiketlenmez.
   Sınav: S0b, S2.

## tahta.py okuyan komutları — ölçüm ve öneri
- `bekleyen`, `teyitsiz`, `kimler` salt-okurdur. `oku`, `--kim` ile birlikte `okundu` damgası
  yazar (`_kaydet` + `_git`).
- **Uygulandı (isteğe bağlı, varsayılan değişmedi):** bu dört komut `--kaynak origin` ile
  aynı okuyucuyu kullanır ve kaynağı basar. Ölçüm: `bekleyen --kaynak origin` 1,6 sn,
  fetch 870 ms. `oku --kim --kaynak origin` `okundu` YAZMAZ: origin görüntüsünü yerel dosyaya
  kaydetmek yazma yolunu değiştirmek olurdu. Yazma yolu (`yaz`→push, `teyit`, `tamam`,
  `kapat`) hiç değişmedi.
- **Öneri (koordinatörün kararı):** ① `bekleyen`/`teyitsiz`/`kimler` için varsayılan
  `--kaynak origin` olsun. Bunlar salt-okur ve bayat görüntü yanlış hüküm verir
  (koordinatörün "cevapsız" sayımı). ② `oku --kim` ile `teyit` yerel kalmalı, ama önce
  `_tazele()` (`pull --rebase`) çağırmalı; `yaz` bunu zaten yapıyor. Aksi hâlde bekçinin
  origin'den gördüğü mesaja `teyit M-xxxx` "yok" der. Bu bir yazma yolu değişikliği olduğu
  için yapılmadı.

## Sınav sonuçları
`py denetim/ARAC-TAHTA-ORIGIN-SINAV-1006.py` → **SONUÇ: temiz (20/20)**. Gerçek git kullanıldı:
geçici bare origin, A (yazar, push eder) ve B (bekçi; ağacı hiç pull edilmez). Bekçi gerçek
`arac/tahta_bekci.py`, `--ara 1`.
- S0 kontrol: `--kaynak yerel` iken origin'deki M-0003 görülmedi. 6 Ekim arızası yeniden
  üretildi, yani sınav iki yönde çalışıyor.
- S1: origin'e push edilen M-0004 görüldü ve bekçi `mesaj-var` ile çıktı (kod 0). Damga:
  `kaynak=origin`, `fetch_ok=True`. B'nin HEAD'i, tahta.json'u ve ağacı değişmedi.
  `origin/main` oynatılmadı; fetch `refs/bekci/ZZ_B`ye yapıldı.
- S2: origin erişilemez. stderr `FETCH DÜŞTÜ … fatal: …` dedi; damga `kaynak=yerel`,
  `fetch_ok=False`, `fetch_hata` dolu. S2b: yerel mesaj yine görüldü.
- S3/S3b: başka ada yazılan mesaj ve HERKES bilgi duyurusu bekçiyi uyandırmadı.
- S4: push edilmemiş yerel mesaj görüldü; `kaynak=origin`, `yerel_ek=1`.
- S5/S5b: `bekci_olc` origin, yerel (+sebep) ve ESKI kaynaklarını ayırt etti; özet ve
  🔴 satırı basıldı.
- S6/S6b/S7: `--kaynak origin` origin mesajını gösterdi, varsayılan (yerel) göstermedi,
  `okundu` yazılmadı.
- S9: gerçek tahta.json ve `oturumlar/bekci` dizinine dokunulmadı.

Eski sınavlar:
- `ARAC-BEKCI-KIMLIK-SINAV-1006.py`: GEÇTİ.
- `ARAC-BEKCI-NABIZ-SINAV-1003.py`: 1 KUSUR (2a: "9 saat sessiz + süreç ayakta → ASILI",
  dönen BITMIS). **Bu kusur yamadan önce de vardı.** `HEAD`deki yamasız dosyalarla
  (`git archive` ile ayrı dizinde) koşturuldu, aynı kusur çıktı. Sebep: sınavın damgasında
  `baslangic` alanı yok ve D266 kuralı gereği "PID sahibi son nabızdan sonra başlamış ⇒
  BITMIS" hükmü veriliyor. Sınav D266'dan sonra bayatlamış. Sınavın sahibi düzeltmeli;
  bu işte dokunulmadı.

## Ölçemediklerim
- Tahta değiştiğinde canlı GitHub fetch'inin süresi ölçülemedi: 30 dakikalık pencerede
  origin'e tahta commit'i düşmedi. Gerçek bir tahta mesajı yazmak kanalı kirleteceği için
  yazılmadı. Tel bedeli thin paketle ölçüldü (4,4–5,3 KB). Delta çözüp 2 × ~6,5 MB gevşek
  nesne yazmanın CPU süresi ölçülmedi.
- Aynı depoda 11 bekçinin eşzamanlı fetch'i gerçek yük altında koşturulmadı. Ref kilidi
  yarışının özel ref ile kalktığı tasarım gereğidir; ölçülmüş değildir.
- GitHub tarafında dakikada 11 (makine başına) fetch'in bir hız sınırına takılıp takılmadığı
  bilinmiyor.

## Açık sorular ve aynı sınıftan bulgular
- **`defter.json` ve `KAYNAK-DURUM.json` da yerelden okunuyor.** Bekçi ad değişikliğini
  (`_defter_adlari`) ve darboğaz yasağını (`kaynak_durum.bekci_yasak_mi`) çalışma ağacından
  okur. Başka makinede yapılan bir ad değişikliği ya da KOSU ilanı da aynı biçimde 3 saat
  görünmeyebilir. Aynı okuyucu bu iki dosyaya da uygulanabilir. Bu işte yapılmadı.
- **Yeniden kurulumda birikim teslimi:** yama inince `--cik` bekçiler, `.bekci_son_<AD>`
  dosyasındaki numaradan sonraki ve kendilerine yazılmış origin mesajlarıyla ilk turda
  uyanacak (ör. M-5862…M-5874). Bu doğru davranış, ama `send_message` ile zaten teslim
  edildiyse mükerrer uyanış olur.
- `bekci_olc.py` çıkış kodu değiştirilmedi: yerel okuyan bekçi uyarı satırı basıyor ama kodu
  1 yapmıyor. Otomasyon koda bakıyorsa, kaynağın kodu 1 yapıp yapmayacağı koordinatörün
  kararı.
- Özel ref'ler (`refs/bekci/<AD>`) ortak depoda birikir. Main'i izledikleri için ek nesne
  tutmazlar; temizlik gerekirse `git for-each-ref refs/bekci` ile listelenir.
