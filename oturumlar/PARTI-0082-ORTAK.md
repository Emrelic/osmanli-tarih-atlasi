# PARTI-0082-ORTAK — sekiz paketin ORTAK doktrini (30 Eylül 2026)

> 🔴 OKU: `CLAUDE.md` → bu dosya → kendi şartnamen. Üçü de kısa.

## 0 · Bu iş nedir
Emre 30 Eylül 01:50'de **102 maddelik** bir parti gönderdi
(`C:/claudemre/kutu/giden/parti-emrelic-0082/PARTI.md`). Çoğu ekran
görüntüsüyle sorulmuş **harita teyidi**: *"bu tarihte burası gerçekten
şu devletin miydi"*. Bir kısmı arayüz isteği.

## 1 · 🔴 SEN HİÇBİR ŞEY UYGULAMIYORSUN — HÜKÜM YAZIYORSUN
Her maddeye bir **hüküm** ve **gerekçe** yazılır; `data/` dosyalarına
DOKUNULMAZ. Uygulama koordinatörde, çünkü çoğu düzeltme petek koşusu
ister ve koşuyu yalnız Oturum 0 başlatır (`CLAUDE.md §7`).
⇒ Çıktın TEK dosya: `denetim/<PAKET-ADIN>-CEVAP.md`

## 2 · Hüküm sözlüğü — her madde bunlardan BİRİNİ alır
```
✔ dogru          atlas ZATEN doğru — Emre'nin gördüğü kusur değil, sebebi yazılır
✗ hatali         atlas YANLIŞ — doğrusu + kaynağı + önerilen düzeltme
◔ olculemedi     kaynak bulunamadı ("bulunamadı" BİR SONUÇTUR, boş bırakma)
▷ kosu-bekliyor  hüküm net ama uygulaması petek koşusuna bağlı
? emre-karari    iki meşru seçenek var, sayılarıyla sun — SEN SEÇME
∅ kapsam-disi    `ONCELIK.md` gereği bu proje bunu yapmıyor — gerekçesiyle
```

## 3 · 🔴 NOKTASIZLIK TUZAĞI — bu partinin YARISI bu olabilir
*"Burası neden şu devlette görünüyor"* sorularının çoğunun cevabı sınır
verisi değil **yerleşim noktası yokluğudur**: noktası olmayan bölge en
yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır (`CLAUDE.md §2`).
⇒ **İlk soru her zaman:** *o bölgede yerleşim noktası var mı?*
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI))"
```
Noktasızlıksa hüküm `▷ kosu-bekliyor` + `denetim/<PAKETİN>-YERLESIM-ONERI.md`ye
önerilen nokta (ad · lat · lon · kaynak). **`yerlesimler.js`e DOKUNMA.**
⚠️ Ve `D206`: bir sınır kayması önerirken **iki uç da ölçülür** — düzeltme
hatayı öbür tarafa taşıyabilir.

## 4 · Kaynak kuralı (`CLAUDE.md §4`, kısaltılmadan geçerli)
İslâm dünyası ve Osmanlı komşuları: **TDV birincil**. Vikipedi tek dayanak
DEĞİL. Forum · blog · içerik çiftliği · YZ metni **KULLANILMAZ**.
🔴 **Atlas kendi kendinin kaynağı olamaz** (`D207`): "atlasta böyle
yazıyor" bir dayanak değildir; çelişkide ATLAS düzelir.
🔴 **Tarih uydurma yok:** gün bilinmiyorsa `YYYY-01-01`, yıl bilinmiyorsa
yıl YAZILMAZ. Künyenin `f:`/`t:` günü bir KAYNAK DEĞİLDİR.

## 5 · Haberleşme (`CLAUDE.md §7.1`)
Tek kanal **tahta**: `py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "…"`.
Ekrana yazılan rapor koordinatöre ULAŞMAZ. Bir teslim = TEK mesaj.
Üçlü kural: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum.
Aksaklık BEKLEMEZ — şartname yanlışsa, sayı beklenenden çok farklıysa,
kalemin yetkini aşıyorsa HEMEN yaz.

## 6 · Bekçi ve kaynak
Açılışta bekçi: `py arac/tahta_bekci.py --kim "<ADIN>" --cik` (Bash
`run_in_background`). **Çıkış 3 = kurulamadı, TEKRAR DENEME** (kaynak
darboğazı ilanı).
🔴 **`denetle.py` YALNIZ teslimden önce BİR KEZ** — tepe 2,4 GB ölçüldü,
dördü aynı anda koşunca makine takas ediyor. Söz dizimi için
`node --check <dosya>` bedavaya yakın.
Teslimden sonra: commit (kendi dosyaların, **adıyla** pathspec) + TEK tahta
mesajı + **"bekçiyi öldürdüm, duruyorum"**.

## 7 · Sıra
```
① Şartnamendeki madde listesini PARTI.md'den OKU (numarasıyla)
② Her madde için: ekran görüntüsünün anlattığı yeri ve tarihi bul
③ Atlasın o gün ne gösterdiğini ÖLÇ (veri + `donemler.js`/`devletler_harita.js`)
④ Kaynağa sor (TDV önce)
⑤ Hüküm + gerekçe + (varsa) düzeltme önerisi yaz
⑥ Teslim: TEK tahta mesajı
```
📌 **Ölçemediğini "temiz" sayma.** Boş küme her öngörüyü doğrular.
