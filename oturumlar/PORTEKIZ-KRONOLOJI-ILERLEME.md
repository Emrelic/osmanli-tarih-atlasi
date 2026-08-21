# PORTEKİZ KRONOLOJİ — ilerleme defteri

## Kimlik
- **Ad (tahtada):** `PORTEKİZ KRONOLOJİ` (eski ad: `SONNET HAZIR KITA 53`)
- **Görevlendiren:** OSMAN GAZİ (koordinatör), cross-session mesajla
- Çalışma dizini `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`

## Görev
`oturumlar/KRONOLOJI-SARTNAME.md` uyarınca `data/kronoloji_portekiz.js`
(`window.KRONOLOJI_PORTEKIZ`) yazıldı. Kapsam 1281-1923, sayı hedefi yok
(şartname §1 — kaynak ne veriyorsa).

## Tur 1 — 21 Ağustos 2026, teslim edildi

**① madde sayısı:** 0 → 86. (642 yıl / 86 madde = 0,13 madde/yıl —
Osmanlı ölçütünün 1,9'unun çok altında; venedik (86) ve fransa (184)
gibi bu da bir ilk tur, "kaynak bu kadarını verdi" kaydıyla teslim
ediliyor.)

**② konu dağılımı (§2'deki altı kova):**
```
askerî-siyasî-toprak-antlaşma-ittifak-isyan-hükümdar   54  (%63)
idarî-hukukî-malî reformlar                             6  (%7)
bilim-teknoloji                                        10  (%12)
kültür-sanat                                            3  (%3)
sosyal-dinî-felsefî                                    10  (%12)
iktisadî                                                3  (%3)
```
🔴 **ÖLÇÜM ile ÇIKARIM ayrı satırda:** ölçüm yukarıdaki — çıkarım şu:
dosya, şartnamenin uyardığı hataya kısmen düştü ("savaş-siyaset kolay ve
eksiktir"). Hedef %40/15/15/15/10/5 iken elimde %63/7/12/3/12/3 var.
Sebebi kısmen yapısal: koordinatörün istediği özgün omurga (Osmanlı-
Portekiz Kızıldeniz/Hint Okyanusu mücadelesi) doğası gereği askerî. Ama
kültür-sanat kovası (%3) gerçekten zayıf — Manuelino mimarisi ve
Camões'ten fazlası yazılabilirdi (fado, azulejo geleneği, resim). Bir
sonraki tur önceliği burası olmalı.

**③ onem/dunya dağılımı:**
```
onem   2=5 · 3=22 · 4=34 · 5=25   (5 oranı %29)
dunya  1=13 · 2=43 · 3=21 · 4=7 · 5=2
```
🔴 `dunya` HİZALAMA UYARISI: 1498-05-20 (Vasco da Gama) ve 1509-02-03
(Diu) `data/kronoloji_memluk.js` ile birebir hizalandı (sırasıyla 5 ve
4). Ama `data/kronoloji_hindistan.js:513` aynı Diu olayına `dunya:3`
vermiş — **iki dosya çelişiyor, KUSURDUR (§3.2).** Ben memluk'un
hakemli akademik kaynağını (Winter 2024, SAGE Journals) esas aldım;
hüküm koordinatörün.

**④ kapsam:** dış 51 · iç 35.

**⑤ yer_id:** dolu 56 · `kapsam_genis:true` 11 · boş 19 (bunların 8'i
"yeri gerçekten bilinmiyor/nokta yok" — Bojador, Cabral'ın Brezilya'ya
ilk değdiği yer, Vâdisseyl savaş alanı, Seylan, Alfarrobeira, Aden'in
tam konumu zaten Aden noktası var ama bazı stratejik-rapor maddeleri
`kapsam_genis` işaretli). Bütün `yer_id` değerleri `arac/girdi.py`nin
okuduğu 2593 noktalık külliyata karşı **birebir doğrulandı** (node
script ile, hiçbiri uydurulmadı).

**⑥ kaynak:** dolu 86/86 (%100) · "bulunamadı — gün DOĞRULANMADI"
damgalı 11 madde (hepsinde yıl/ay standart akademik kaynakla teyitli,
yalnız gün belirsiz). Dayanılan kaynaklar: TDV `portekiz` · `hurmuz--
iran` · `seydi-ali-reis` · `piri-reis` · `habes-eyaleti` · `sadiler`
(hepsi gövdesi okunarak) + Encyclopaedia Britannica · EBSCO Research
Starters · Encyclopaedia of Portuguese Expansion (FCSH/Universidade
Nova de Lisboa) · MacTutor History of Mathematics (St Andrews) ·
akademik özet kaynaklarla çapraz doğrulanmış standart tarihler. Forum/
blog/AI üretimi içerik kullanılmadı.

**⑦ NEYİ BULAMADIM:**
- Vâdisseyl/Alcácer Quibir savaşının TDV'de müstakil maddesi yok
  (`vadissyl`, `alcazarquivir` ikisi de 302) — `portekiz` ve `sadiler`
  maddelerinden birleştirildi.
- 11 maddede gün doğrulanamadı (yukarıda listelendi), yıl/ay sağlam.
- Kültür-sanat kovası zayıf kaldı (yukarıda ②'de açıklandı).
- `dunya` çelişkisi (Diu 1509, memluk=4 vs hindistan=3) çözülmedi,
  koordinatöre bırakıldı.
- 1640 sonrası (Restorasyon-Cumhuriyet) omurga olaylarla kaplandı ama
  17-19. yüzyıl sömürge idaresinin (Angola, Mozambik) iç tarihi hâlâ
  çok seyrek — sıradaki tur adayı.

**⑧ commit:** henüz commit edilmedi — `§7` gereği commit yalnız
Oturum 0'dan (koordinatörden) yapılır, dosya hazır bekliyor.
`index.html`e bağlanması gereken dosya: `data/kronoloji_portekiz.js`
(`window.KRONOLOJI_PORTEKIZ`).

## Durum
**TESLİM EDİLDİ, KOORDİNATÖRDEN CEVAP BEKLENİYOR.** `node --check` temiz,
`yer_id` doğrulaması temiz, kronolojik sıra temiz, mükerrer madde 0.
