# DEVİR: UMIT 21 KASIM → UMIT 26 KASIM (UMIT makinesinin koordinatörü) — 26 Kasım 2026 Perşembe, 01:00

## Komuta
- **Genel koordinatör: EMRELİC 26 KASIM** (`EMRELİC 26 KASIM — genel koordinatör`, Remote Control açık; ListAgents'ta görünüyor).
- UMIT 26 KASIM bu makinenin koordinatörüdür. Eş oturum iletisi Emre'nin onayı sayılmaz (silme, arşiv, kapatma,
  bekleyen sorular): Emre'nin o oturumdaki kendi sözü gerekir.
- Devir doğrulanmadan UMIT 21 arşivlenmez.

## Kurallar (önce CLAUDE.md ve hafıza: C:\Users\user\.claude\projects\C--atlas\memory\MEMORY.md)
- UMIT yalnız araştırma + yazma: tam denetle / paketle / surum_damgala / push_kapisi YOK, main'e push YOK.
  Dal düz `git push origin <dal>`.
- **ECZANE MESAİSİ Pzt-Cmt 09:00-19:00: en çok 2 hafif ajan, makine kasmayacak; ağır dalga 19:00'dan sonra.**
  Bugün Perşembe. (Önceki talimat: 08:45'te ağır dalgayı kes.)
- Alt ajan brifine AYNEN: «curl/wget'te User-Agent ya da tarayıcı başlığı taklidi YASAK; engel/403 verirse "okunamadı" yaz».
- Numaralı paket veren her toplayıcı n↔paket sınaması + sayı uyumu yapar (LAB notu: uzunluk testini ALAN BAZLI ölç).
- ceviri.py / js/ceviri.js yeni diller için LAB'ın (tek elden).

## Durum — teslimler (hiçbiri main'e UMIT tarafından itilmedi)
Ayrıntılı rapor: origin/umit-rapor-1126 → denetim/RAPOR-UMIT-1126.md.
- Yeni diller (taban origin/yeni-diller-altyapi-1126; YALNIZ UÇLAR): bs 8671c18b2 · sq f50704d8b · hy d4dbd4c53 ·
  ka e9df3cfda · ku 167de3791 (dallar ceviri-<kod>-1126; her biri arayüz 2034 / devlet 2315 / olay 5196).
- ceviri-tr1125-umit @589c5ad13 (10 dil, yalnız denetim/CEVIRI-TR1125/; KASA uygular).
- ceviri-teyit-<en de fr es it pt nl bg>-1125-u (çakışmalar denetim/CEVIRI-TEYIT-1125-U/; bg 217). 25.11 22:31'de
  main'e KASA teyit turu indi; bu -u dallarının inip inmediği ÖLÇÜLMEDİ.
- ceviri-denetim-<13 dil>-1125: main'de.
- ekokuma-iran-1125 @3f96c0535 (konu listesi; 7 teyitsiz kayıt; Sâsânî kartı dışarıda)
- ekokuma-rusya-1125 @1b12aab70 (72 aday + 14 teyitsiz taslak; kararlar: ufuk 31.12.2000, İran-Rusya ortak konu tek kart)
- dunya-eksik-1125 @3db0e446f · umit-rapor-1124 · BOŞLUK-1280 zinciri ucu umit-bosluk-dasya1-1122

## Açık işler / kuyruk (öncelik sırası koordinatörden)
1. Yeni diller: anlam için ikinci göz; zayıf dilde (hy ka ku sq) 20 kayıtlık Opus karşılaştırması; ad sözlüğü
   tekleştirme turu; hy/ka yazı tipi tarayıcıda sınanacak (?dil=hy, ?dil=ka); turkce-metin main'e inince bayatlar.
2. Ek okuma: İran seri üretim ve Rusya sonraki parti (üslup onayı aşağıda).
3. 13+8 dilde Latin harfli kalan adlar (ortak ad sözlüğü ister) — Emre cevabı bekliyor.
4. Post-it: not.py GitHub 401 (token Emre yenileyecek). Dağıtıcı DURDURULDU.

## Emre'den cevap bekleyen (UMIT 21 ekranında soruldu, cevap gelmedi)
a) İran parti 02'nin 20 kaydı (TDV 403'ü tarayıcı kimliğiyle aşılarak yazıldı; HİÇBİR DALDA YOK, yalnız eski
   oturumun scratchpad'inde: ...\d3b36855-329a-4c95-837c-f6abcfa49563\scratchpad\iran\p02\): kullanılmasın (önerim) mı,
   kurala uygun yeniden mi yazılsın. İndirilen metinler iran\p02\tdv_indir\ altında; silme Emre'nin sözüyle.
b) BOŞLUK-1280'in TDV'ye dayanan verisi: 7 alt ajanın 18 TDV komutu tarayıcı kimlikliydi (bir kısmı 22.11 BOŞLUK);
   aşıp aşmadığı ölçülmedi. Yeniden doğrulama (önerim) mi, not düşmek mi.
c) CEVAPLANDI — Emre, UMIT 21 oturumunda 26.11 ~01:05, aynen: «Evet, İran kartlarının üslubunu onaylıyorum».
   İran seri üretimi üslup bakımından onaylı. Onay ÜSLUBA aittir: kaynak ölçütü gevşemez (tam metin okunmayan
   «teyitsiz», yayın adayı değil; Sâsânî kartı dışarıda); (a) maddesindeki 20 kaydın akıbetini KARARA BAĞLAMAZ.
d) Latin harfli adlar ikinci turu. e) Eski atlas oturumlarını arşivleme (0 arşiv).

## Türkçe kaynak şüpheleri (rapor §7 ve dal listeleri)
Lozan onayı 23↔2 Ağustos (doğrulandı) · ham {"f":"yuzyil"...} · «Serdarabad» (doğrulanmadı) · ARKEOLOJI_ZINCIR
uyumsuzlukları · \\\" kaçışları · n=3639 yarım · 4238 kesik.

## Makine / ortam
- 00:57: boş RAM 4,4 GB; atlas ile ilgili çalışan py/node süreci YOK; arka plan görevi ve alt ajan YOK.
- Haftalık limit 00:00'da yenilendi (00:57'de %6).
- Eski oturum worktree'si: C:\atlas\.claude\worktrees\umit21-osm5 (dal umit-rapor-1126, ağaç temiz). Yeni oturum
  KENDİ worktree'sine geçer (EnterWorktree). ~290 yerel dal, eski worktree'ler duruyor; silme kararı yok.
- kilit.py'de yalnız süresi aşmış eski kilit kayıtları görünüyor (benim adıma açık kilit olup olmadığı tek tek bakılmadı).
- C:\atlas (main klasörü) kirli: UMIT 19 ara .tsv dosyaları + bash.exe.stackdump (dokunulmadı).
- C:\atlas-artik-YEDEK-1124 (eski klon, 818 MB zip içinde): silme Emre'nin.
- ceviri.py dosya silerken UMIT'te ara ara WinError 32 (A1 Defender dışlaması bekliyor).

## Araçlar (kopyaları bu dalda denetim/DEVIR-UMIT-1126/)
yeni_topla.py (toplayıcı, n↔paket + yıl sınaması, temiz yeniden üretim) · nsinama.py · dal_sina.py · kayma_sina.py ·
dogrula_ortak.py · TALIMAT-yeni-dil.md. Betikler eski scratchpad yollarını ve worktree yolunu gömülü taşır:
yeniden kullanırken yolları değiştir.

## Yeni oturumun ilk işi
1. Bu belgeyi ve hafızayı oku. 2. Remote Control'ün açık olduğunu Emre'ye teyit ettir. 3. EMRELİC 26 KASIM'a adıyla
«hazırım» yaz (devri doğruladığını da: dal uçlarını `git ls-remote` ile ölç). 4. İş emri bekle; mesai kuralına uy.
