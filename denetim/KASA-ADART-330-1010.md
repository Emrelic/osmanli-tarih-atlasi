# KASA-ADART-330-1010 — `ahameni.t = makedon.f = -0330-10-18` tanığının ASIL kaynaktan doğrulanması

Görev: YILDIRIM BAYEZIT (② küçük, bloke eden) · Araştırmacı: KASA · salt okuma.
Soru: ADART -330 ay VII (Tašrītu) gün 11 — Sippar'dan Babillilere İskender'in emri — mîlâdî (Jülyen, astronomik yıl
-330 = MÖ 331) karşılığı nedir? Dayanak şu an livius.org (imzasız çeviri). Not kendi içinde tutarsız: "11. gün 18 Ekim"
ise "14. gün" 21 Ekim olmalı, not "22" diyor.

## 0. ÖNGÖRÜ (ölçümden ÖNCE — ayrı commit)
- Parker–Dubberstein'ın Babil takvim tablolarına göre MÖ 331 Tašrītu 1 ≈ 8 Ekim (Jülyen) ⇒ VII 11 = **18 Ekim**,
  VII 14 = **21 Ekim**. ⇒ 18 Ekim TEYİT (%70), notun "22"si HATA (%75; bir kopyalama/kaydırma).
- İmzalı akademik bir aktarım (Sachs–Hunger ADART I'in kendisi ya da van der Spek gibi onu çeviren imzalı bir eser)
  bulunur: %60. Sachs–Hunger'in kendisi çevrimiçi okunur: %30.
- Çürüme (VII 11 başka bir güne denk): %15 — en olası sapma ±1 gün (ay başı gözlem belirsizliği; Babil ayı hilalin
  görüldüğü akşam başlar ⇒ tablo ile gözlem bir gün ayrışabilir).
- ⚠️ Zincir şartı: tarih değişirse `ahameni.t` ve `makedon.f` BİRLİKTE değişir.

## 1. ÖLÇÜM
Kaynak: bir okuyucu (`scratchpad/okuma_adart.md`). ⚠️ P&D tablo satırını KENDİM doğrulayamadım: archive.org metin
dosyası bu sabah 500 döndü (iki deneme). Aşağıdaki alıntılar okuyucunun OCR okumasıdır; bağımsız çapraz kontrol §1.2.
### 1.1 İmzalı kaynak — Parker & Dubberstein, *Babylonian Chronology 626 B.C.–A.D. 45* (SAOC 24, Chicago 1942)
archive.org `saoc-24.-babylonian-chronology-626-b.-c.-a.-d.-45`
- s. 24 (gün sayımı): *"The dates as given are civil days, from midnight to midnight, although in actual practice the
  Babylonian day began in each case with the preceding sunset. The dates given are those of the first day of each month."*
- s. 34, III. Darius 5. yılı = MÖ 331: *"5 331 4/13 5/13 6/11 7/11 8/9 9/8"* · *"10/8 11/6 12/6 330 1/4 2/2 3/4"* ⇒
  ay VI (Ulūlu) **8 Eylül**, ay VII (Tašrītu) **8 Ekim 331** başlar.
- s. 23 (doğruluk): *"70 per cent of all the dates in our tables are astronomically correct to the day, while the
  remaining 30 per cent may be off by one day."*
⇒ **VII 11 = 18 Ekim MÖ 331** (= `-0330-10-18`; Babil günü 17 Ekim gün batımında başlar ⇒ "17/18 Ekim") ·
**VII 14 = 21 Ekim**.
### 1.2 Çapraz kontrol (P&D'den bağımsız)
- Günlüğün KENDİ ay tutulması VI 13'te; tutulma astronomik olarak **20 Eylül MÖ 331** ⇒ VI 1 = 8 Eylül (P&D ile aynı).
- Lendering, BMCR 2004.02.13 (imzalı): *"the lunar eclipse of 20 September 331 BC (eleven nights before the battle of
  Gaugamela)"* ⇒ Gaugamela VI 24 = 1 Ekim; van der Spek'in ay VI günleri (VI 11 = 18 Eyl · VI 24 = 1 Eki) ikincil
  aktarımla aynı.
- Zayıf halka: VI'dan VII'ye geçiş ay VI'nın 30 gün olmasına bağlı — bu P&D'nin hesabı; ADART'ın kendi notu görülmedi.
### 1.3 "11 ↔ 22" tutarsızlığı
**21 Ekim doğru**, 22 bir kopyalama/kaydırma hatası: 18 + 3 = 21; gün batımı başlangıcı tarihi geriye (20/21) çeker,
asla ileri değil. livius.org'un bugünkü sayfası da *"Day 14 (October 21)"* diyor — künye notundaki "22" muhtemelen
eski bir sürümden ya da başka bir livius sayfasından.
### 1.4 Hüküm
- **`-0330-10-18` TEYİT** (P&D 1942, imzalı; tutulma çapraz kontrolü) ⇒ `ahameni.t = makedon.f` zinciri DEĞİŞMEZ.
- `ic_not`taki "22" → **21** düzeltilmeli; dayanak livius.org (imzasız) yerine **P&D 1942 s. 34** yazılmalı (livius
  aktarım olarak kalabilir).
- ÖLÇÜLEMEDİ kalan: Sachs–Hunger ADART I ve van der Spek 2003'ün ay VII satırları (çevrimiçi erişilemedi). P&D'nin %30
  "bir gün kayabilir" çekincesi ⇒ `kesinlik:"gun"` yerine ±1 gün beyanı `ic_not`ta.
- Öngörü: 18 Ekim teyit (%70) ✓ · "22" hata (%75) ✓ · imzalı aktarım bulunur (%60) ✓ (P&D; van der Spek değil) ·
  Sachs–Hunger'in kendisi (%30) ✗.
