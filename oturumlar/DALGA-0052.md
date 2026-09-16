# DALGA 0052 — 129 maddelik paket · 16 Eylül 2026 · koordinatör 1.MURAT

Paket: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden/parti-emrelic-0052/PARTI.md`
(maddelerin TAM metni ve görselleri `H-00NN-*.png` orada). **Yalnız kendi maddelerini oku.**

Bitiş hedefi: **Perşembe 17 Eylül 23:00** (haftalık limit Cuma 00:00'da tazeleniyor).

## 0. KURALLAR — hepsi bağlayıcı

1. **Koordinatöre `send_message` ATMA. Ekrana rapor yazmak da rapor değildir.**
   Tek kanal tahta, ve yalnız ÜÇ an:
   ```
   AÇILIŞ   py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "açıldım · şu dosyalar bende: …"
   ENGEL    (yalnız işi durduran şey: kaynak çelişkisi, başka oturumun dosyası, karar gerekiyor)
   TESLİM   tek mesaj, sayıyla: madde madde "H-00NN yapıldı/yapılmadı + neden" · commit kimlikleri
   ```
   Koordinatör tahtayı **20 dakikada bir toplu** okur. Ara rapor yazma — token yakar.
   Başka bir oturuma sorun varsa tahtadan doğrudan ona yaz (`--kime "<AD>"`).
2. **Koşu 12 ayrı bir kopyada (`C:/atlas-kosu12`) koşuyor — ana klasör SERBEST.**
   `C:/atlas-kosu12` klasörüne **hiçbir şey yazma, orada komut çalıştırma.**
   Ana klasöre yazdığın her şey koşu 13'e girer.
3. **Yalnız aşağıdaki tabloda sana verilen dosyalara yaz.** Başka dosya gerekiyorsa sahibine tahtadan sor.
4. **Commit kendin yap, ADIYLA, iki adımda da pathspec:**
   `git add -- <dosyalar>` ve `git commit -F <mesaj-dosyası> -- <aynı dosyalar>` · sonra
   `git pull --rebase --autostash` + `git push`. Dizin pathspec'i (`denetim/`) ve `git add -A` YASAK.
   Commit mesajının sonuna: `Co-Authored-By: Claude <noreply@anthropic.com>`
5. **Kaynak:** TDV İslâm Ansiklopedisi birincil; dışarısı yalnız akademik (Iranica, Cambridge,
   üniversite/hakemli yayın). Forum/blog/YZ metni YOK. Vikipedi tek dayanak olamaz. Tarih UYDURMA —
   bilinmiyorsa `bulunamadı` yaz. Alıntı en çok 15 kelime. **Atlas referans değildir** (CLAUDE.md §4).
   Rivayet yazılabilir ama **"rivayet" diye etiketlenir ve kaynağıyla** (örn. Evliya Çelebi).
6. Görsel yalnız kamu malı / CC0, `gorsel_kaynak:` alanıyla.
7. İşin bitince teslim mesajını yaz ve **dur**. Yeni iş icat etme.

## 1. EK OKUMA DOSYA BİÇİMİ (EKO oturumları)

Örnek: `data/ekokuma_savas3.js` — aynı şemayı kullan. Her dosya YALNIZ kendi değişkenini tanımlar:
`data/ekokuma_<kısa>.js` → `window.EKOKUMA_<KISA>`. Kartı ilgili kronoloji maddesine bağlama
alanı da o örnekte. `js/app.js`e DOKUNMA — yükleyici satırını UI oturumu ekler (tahtadan haber ver).
Bitince `node --check data/ekokuma_<kısa>.js`.

## 2. DAĞILIM

| Oturum | Model | Maddeler | Yazabildiği dosyalar |
|---|---|---|---|
| **EKO-KURUM** | Sonnet | 31 32 51 52 55 56 75 85 86 87 91 93 94 | `data/ekokuma_kurum.js` · `denetim/EKO-KURUM-0916.md` |
| **EKO-TOPLUM** | Sonnet | 29 33 34 53 54 115 116 117 118 119 120 121 127 | `data/ekokuma_toplum.js` · `denetim/EKO-TOPLUM-0916.md` |
| **EKO-DUNYA** | Sonnet | 6 35 36 37 38 40 41 70 78 79 88 90 | `data/ekokuma_dunya.js` · `denetim/EKO-DUNYA-0916.md` |
| **EKO-VEZIR** | Sonnet | 23 26 30 46 59 60 61 62 63 64 65 66 67 68 73 80 | `data/ekokuma_vezir.js` · `denetim/EKO-VEZIR-0916.md` |
| **EKO-PADISAH** | Sonnet | 4 5 16 17 18 45 48 49 50 57 58 74 | `data/ekokuma_padisah.js` · `denetim/EKO-PADISAH-0916.md` |
| **EKO-RIVAYET** | Sonnet | 3 7 8 20 24 25 27 28 39 42 44 71 72 76 82 83 | `data/ekokuma_rivayet.js` · `data/olaylar_p0059.js` · `denetim/YAMA-RIVAYET-0916.json` · `denetim/EKO-RIVAYET-0916.md` |
| **UI** | Sonnet | 1 9 47 84 89 96 122 128 129 + yükleyici bağlama | `js/app.js` · `css/style.css` · `index.html` · `denetim/UI-0916.md` |
| **HARITA-VERI** | Opus | 10 11 13 14 15 19 21 43 77 81 92 95 98 111 113 114 123 125 | yalnız `denetim/YAMA-0052-*.json` · `denetim/HARITA-VERI-0916.md` (veriye YAZMAZ) |
| **MOTOR** | Opus | nehir sürtünmesi kodlaması + 100 101 104 105 106 112 | `arac/uret_petek.py` · `denetim/MOTOR-0916.md` · `denetim/ARAC-MOTOR-*-0916.*` |
| **GEOMETRI** | Opus | 12 69 97 99 102 103 107 108 109 110 124 | yalnız `denetim/GEOMETRI-0916.md` · `denetim/ARAC-GEO-*-0916.*` (teşhis; çare MOTOR'a ya da HARITA-VERI'ye tahtadan) |
| **UYGULA** | Opus | bekleyen yamalar + HARITA-VERI yamaları | `data/yerlesimler*.js` · `data/yer_yama_*.js` · `data/devletler.js` · `arac/renkler.py` · `arac/girdi.py` · `denetim/UYGULA-0916.md` |

Maddeler `H-00NN` kısaltmasıdır (31 = H-0031).
**Koordinatörde kalanlar:** H-0022 (koşuyu Claude'suz çalıştırmak — cevap zaten var: `py arac/kos_ve_yayinla.py`) · `arac/denetle.py` · kutu cevabı.
**Emre'nin kendi TK Kırım oturumunda:** H-0002 · H-0126 (Kırım/Kuban/Çerkes bozkırları). UYGULA ve HARITA-VERI
Kuzey Kafkasya–Kırım kayıtlarına o oturum bitene kadar **dokunmaz**; H-0125 (Kabartay) yalnız araştırılır.

### 2b. EK — önceki paket 0051 (8 madde, `…/parti-emrelic-0051/PARTI.md`), maddeleri `51/H-00NN` diye an

| Oturum | 0051 maddeleri |
|---|---|
| EKO-RIVAYET | 51/H-0001 (İbrahim'in halli ↔ IV. Mehmed cülusu sırası → yama) · 51/H-0005 (Kâtib Çelebi ek okuma; 0052 H-0027/H-0082 ile birlikte) · 51/H-0006 (= 0052 H-0083) |
| EKO-PADISAH | 51/H-0002 (şüpheli ölümler kartı; 0052 H-0045 ile birlikte) |
| EKO-DUNYA | 51/H-0003 (Otuz Yıl Savaşları + Vestfalya ek okuma; haritanın Vestfalya'ya odaklanması → UI'ya tahtadan) |
| GEOMETRI | 51/H-0004 (renk bozulması / katman üst üste binmesi) |
| HARITA-VERI | 51/H-0007 (= 0052 H-0015 Levant özerk görünümü) · 51/H-0008 (= 0052 H-0092 Lahsa–Katar bozuk desen) |

## 3. OTURUMA ÖZEL NOTLAR

**EKO-DUNYA** — H-0006 büyük: savaş başlangıç/sebep/bedel/antlaşma kartlarını ilgili savaş maddelerine bağla;
bütün savaşlar değil, en çok 10 büyük savaş (öncelik: Osmanlı'nın taraf olduğu). H-0041 bir ek okuma kartıdır
(Karadeniz'in kuzeyindeki halklar; Kazak adı karışıklığı).

**EKO-RIVAYET** — H-0003: üç voyvodalığın 1594 isyanı maddesi `olaylar_p0059.js`e (yeni dosya, `window.OLAYLAR_P0059`).
H-0007 / H-0028 / H-0044 / H-0083 mevcut maddelerde değişiklik ister → doğrudan yazma, `denetim/YAMA-RIVAYET-0916.json`
(madde kimliği · alan · eski · yeni · kaynak). Koordinatör uygular.

**UI** — H-0084 Emre'nin tasarım isteği: tâbi devletin iç dolgusu Osmanlı kırmızısı ailesinden, sınırı kalın tâbi rengi çerçeve.
H-0047/H-0096: iç denetim notları son kullanıcıya gösterilmesin. H-0128 portre albümü: yalnız mevcut
`assets/portreler/` ile başla, yeni görsel indirme YOK. H-0129 sağ tık mesafe ölçer.
EKO oturumları tahtaya "dosyam hazır" yazınca `_EKOKUMA_DOSYA_ADLARI`na ekle; EKO-RIVAYET'in
`olaylar_p0059.js` satırını `index.html`e ekle. Sürüm damgasına DOKUNMA.

**HARITA-VERI** — her madde için: kaynak ne diyor → atlas ne gösteriyor → çare (yerleşim/dönem yaması ya da
"motor kusuru → GEOMETRI"). Yama biçimi: `denetim/YAMA-ANADOLU-0914.json` ile aynı. Renk istekleri (11 Kabartay,
13 Venedik-Avusturya) → yeni HEX önerisi + `py arac/renk_olc.py` mantığıyla ΔE gerekçesi. Bitti diye tahtaya
yazınca UYGULA uygular.

**MOTOR** — Nehir geçiş bedelini Dijkstra sürtünmesine ekle. Araştırma hazır: commit 9151774 (`denetim/` altındaki
NEHİR GEÇİŞ dosyaları). Özne kararı (Emre henüz vermedi): **varsayılan = rutin idare/kafile**; ordu katsayısı
ayrı bir sabit olarak dursun, kapalı. Nehir hücresine geçiş bedeli = nehrin önem sınıfına göre ek saat;
geçit/köprü noktası verisi varsa orada bedel düşük. Etkiyi ölç: aynı ızgarada nehirli/nehirsiz sahiplik farkı (hücre %).
Koşu SÜRMEZ — yalnız ölçüm betiği. H-0100/101/104/112: "B görünümü" (boşluk/enklav birleştirme) ne aşamada —
ölç ve raporla. H-0105/106: 200 km / 5 gün yürüme bedeli neden şu yerleşimlerde görünmüyor — teşhis.
`py -m py_compile arac/uret_petek.py` şart.

**GEOMETRI** — ince uzun üçgen/şerit gövdeler, örtüşme ve boşluklar, kıyıya oturmayan dolgu. Her madde için
sebebi ölç (hangi petek, hangi aşama). Motor kusuru ise MOTOR'a tahtadan tek mesajda somut öneri gönder;
nokta eksikliği ise HARITA-VERI'ye.

**UYGULA** — sıra: ① bekleyen yamalar: `denetim/YAMA-TRAKYA-0914.json` · `YAMA-ISGAL1919-0914.json`
(+ `denetim/ARAC-ISGAL1919-YAMA-0914.py`) · `YAMA-ANADOLU-0914.json` · `YAMA-ARAP-0914.json` ·
`YAMA-KARADENIZ-0914.json` · `YAMA-KUZEY-0914.json` · `YAMA-UZAK-0914.json` · `YAMA-P12-0914.json`;
her birinin raporu `denetim/P0x-*-0914.md`. ② HARITA-VERI'nin `YAMA-0052-*.json`ları (tahtadan haber gelince).
Her yamadan sonra `py arac/denetle.py` — sayı değişirse (D1, D2, 2s, D7…) gerekçesiyle rapora yaz;
`arac/denetle.py`nin beklenen değerlerini koordinatör değiştirir (tahtadan istersin). Çakışan / kaynaksız kalemi UYGULAMA, raporla.
