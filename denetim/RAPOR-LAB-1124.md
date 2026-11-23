# RAPOR — LAB makinesi, son 10 gün (14–24 Kasım 2026)

Ölçüm: `list_sessions` (makinedeki bütün oturumlar, arşivli dahil) + her oturumun son turu (`list_events`) + git (`fetch` sonrası
`C:\atlas`, EczAsist, g-zergah). Hazırlayan: LAB 21 KASIM. 24 Kasım. Okunmayan kısım: her oturumun yalnız SON turunu okudum,
gövdesini değil → "bitti" kararı son tura dayanır.

## ① Oturumlar (son etkinlik UTC)

| Oturum | Son etkinlik | Durum |
|---|---|---|
| LAB 21 KASIM (bu oturum) | 24.11 (şimdi) | Çalışıyor. Atlas denetimi + düzeltme turları yapıldı, borçlar açık (③) |
| LAB 19 KASIM OTURUMU | 21.11 09:53 | **Bitti** (iş devredildi). Son iş: `lab19-mukerrer-1121b` @86cbcd5e7 itildi, tam `denetle` 0 |
| VPN programlarını pasife al | 19.11 14:41 | **Bitti** (Tailscale eski hâline döndü). Yarım iş yok; RAV VPN servisi bilerek devre dışı |
| LAB 17 KASIM OTURUMU | 18.11 23:20 | **Yarım/askıda**: devri yaptı, ama iki koordinatör iddiası çakıştığı için kimseden iş almadı (③) |
| LAB 16 KASIM OTURUMU | 17.11 17:42 | **Bitti** (iş LAB 17'ye devredildi; `sehir-afrika-1116` itildi) |
| Eczane ilaç stok ve zam analizi (EczAsist) | 17.11 12:25 | **Yarım**: commit `543be15` yerelde, itilmemiş (⑤) |
| T cetveli veri işleme ve muhasebe takibi (EczAsist) | 14.11 15:41 | **Yarım**: commit `c70f3ad` yerelde, itilmemiş; ekranlar elle denenmedi |
| Guzergah arayüz tasarımı (g-zergah) | 14.11 12:57 | **Bitti** (`8f74a30` master'a itildi); araçta deneme bekliyor (③) |

Bu aralığın dışındaki (≤13 Kasım, 5 atlas + ~50 EczAsist/öteki) oturumlar listelendi, rapora alınmadı.

## ② Yarım / yapılamayan / hata veren işler
- **LAB 21 (ben):** Belgrad, Menorka yılı, Pau/Béarn, Kerç, Sofala, Yarkent/Kopal — yeni kaynak okunmadan yazılamadı (BORÇ). Calais → `artois-kontlugu` boya isteği yazıldı, künye/BOYALAR yok.
  Canlı site doğrulaması yapılamadı (tarayıcı paneli yalnız `file://` statik açtı; yerel sunucu başlatma reddedildi).
  Bu oturumda ayrıca bilgisayarı kapatma komutu (Git Bash `/s` yolu bozdu, PowerShell ile çalıştı) — makine yeniden açılmış.
- **Atlas denetim bulguları** (düzeltilmedi; `denetim/KASA-INIS-DENETIM-1123.md`): Dizin kişi tıklaması 7 yanlış maddeye gidiyor; `en/history` 21. yüzyıl ve MÖ 28 yok;
  Kaynaklar sekmesi yalnız 5193 maddeyi sayıyor; Roma Krallığı 8 madde kaynak bölümü şüpheli; Roma Cumhuriyeti'nde Actium/Rubicon odak=Capua.
- **VPN oturumu:** test sitesinin "VPN benzeri program" uyarısı çözülmedi (Tailscale geri verildi; AnyDesk/sshd/WSL aday, dokunulmadı).
- **T cetveli:** PyMuPDF bağımlılığı terminal bilgisayarlarda `pip install -r requirements.txt` ister; vergi/yatırım ekranları ve canlı veride deneme yapılmadı.
- **LAB 17:** `bn` çevirisi için `DILLER` kaydı ve tavan girişi, `ur`/`az` UMIT çakışması açık (devir raporunda).

## ③ Emre'den bekleyen (oturum adı → soru)
- **LAB 21:** (a) Calais için `artois-kontlugu` BOYA-ISTEKLERİ kararı (motor dondurması bitince). (b) Sofala/Yarkent için kaynak: TDV "Tuva Han", Rashid, Chittick/Pearson.- **LAB 17:** "Havva 19 Kasım koordinatör" ve "UMIT 19 KASIM" iki koordinatör iddiası: "hangisi koordinatör, siz söyleyin ya da iki oturuma bildirin?" (sonradan UMIT 19 KASIM'a devir netleşmiş olabilir; LAB 17 bunu bilmiyor).
- **VPN:** "Hangi adımı yapmamı istersiniz? RAV VPN + Tailscale adaptörü kapatılsın mı / AnyDesk kapatılsın mı (uzak bağlantı kopar) / sshd ve WSL durdurulsun mu?" (Tailscale'i geri vermelerini istedin; kalan sorular cevapsız.)
- **T cetveli:** "Yıllık gelir vergisi 31 Mart + 31 Temmuz diye ikiye bölünsün mü?" · "Bordrodan net maaş borcu da okunsun mu?"
- **Eczane ilaç stok:** `543be15` itilsin mi? (oturum "push etmedim, siz ittiğinizde pull alınır" dedi.)
- **Guzergah:** araçta deneme sonucu: yolculuk başlat/bitir, ⭐ oluşumu, kablo takılıyken Yandex'le başlatma ne yaptı?

## ④ Okunamayan / bulunamayan kaynaklar
- Cambay: TDV "Gucerât" yalnız genel 1296-1316/1299-1305 veriyor; Britannica ve Wikipedia açılamadı. Cambridge History of India III + Campbell 1896 okundu.
- Sofala: Chittick, Pearson, Britannica açılamadı; Barros ve TDV Kilve okundu, 1280 sahibi bulunamadı.
- Yarkent/Kopal: kaynakta başlangıç/bitiş YILI yok; "Kopal" adı hiçbir kaynakta yok (yalnız Kayalik "near Kopal").
- Calais: Curveiller 1996 ikincil; kralla fief ilişkisi (Longnon) okunmadı.
- Roma: Cornell s.215-226 ve Livius bölüm numaraları bu oturumda okunmadı.
- TDV: Cloudflare engeli yüzünden `curl` ile değil WebFetch alt ajanlarıyla okundu.

## ⑤ İtilmemiş commit / dal (ölçüm: `C:\atlas`, `origin` fetch sonrası)
**İtilmemiş (uzakta yok / uzağın önünde):**
- EczAsist `main`: **2 commit ileride**, itilmemiş — `543be15` (Zam Öncesi Sipariş Analizi), `c70f3ad` (T cetveli virman + tahakkuk PDF). Ayrıca commit'siz: `yedek_temizlik_ayarlari.json` (değişik), `ciktilar/` (izlenmeyen; ticari veri, bilerek dışarıda).
- g-zergah `master`: temiz, uzakla aynı.
- Atlas uzağı olmayan yerel dallar (main'in önünde olanlar): `ceviri-az-l`(6) `ceviri-bn-lab`(7) `ceviri-el-l`(1) `ceviri-fa-birlesik`(5) `ceviri-fa-lab`(3) `ceviri-id-l`(20) `ceviri-ja-lab`(5)
  `ceviri-pl-lab`(12) `ceviri-pl-m`(14) `ceviri-sw-a`(4) `ceviri-sw-l`(1) `ceviri-ur-lab`(4) `ceviri-ur-son`(1) `lab17-p3`(1) `lab19-f2-bos-1119f`(2) `lab19-moche-1120`(1) `lab21-argos-madde-1121`(6).
- İtilmiş ama uzağın gerisinde/önünde fark olanlar: `lab19-2s-1119b` (1 itilmemiş commit), `lab-1004` (2090 itilmemiş fark; eski tahta dalı), `lab21-ceviri-bg-1121` (15 itilmemiş, main'in üstünde 0 → muhtemelen zaten main'de), `makine/lab` (main'in üstünde 52, itilmiş).
- **Main'e inmemiş ama itilmiş:** `lab-bosluk-duzeltme-1122` (4 commit), `lab-bosluk-duzeltme-2-1122` (1), `lab19-mukerrer-1121b` kapıda, `lab19-mukerrer-1120`, `lab19-din-*`, `lab19-f2-bos-1119e`, `lab21-borc-1122`, `paket-icnot`, `geo-bellek-a`, `worktree-geo-bellek`, `lab-1113-kaynak-avrupa-r/rr/rrr`, `lab-1114-ham/oynatici`.
- 15 adet `worktree-agent-*` dalı main'in üstünde 0 → temiz, silinebilir (silmedim).

## Arşivleme
**Arşivlemedim.** Arşiv aracı "kullanıcı belirli oturum için açıkça onay verdikten sonra" ister; bu emir başka oturumdan geldi. Arşivlenebilecek (bitmiş, açık işi yok):
LAB 16 KASIM OTURUMU, VPN programlarını pasife al, LAB 19 KASIM OTURUMU (dalları itildi). EMİN OLMADIKLARIM: LAB 17 (koordinatör sorusu), Eczane ilaç stok ve T cetveli (itilmemiş commit), Guzergah (araç denemesi bekliyor).
