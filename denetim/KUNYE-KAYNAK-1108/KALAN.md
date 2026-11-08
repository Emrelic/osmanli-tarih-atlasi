# KUNYE-KAYNAK-1108 — kalan borç (8 Kasım 2026, KUNYE-KAYNAK oturumu)

## Yapılan
- 99 güvensiz künye sınıflandı (`listele.py` → `kunyeler.json`, `goster.py`).
- 5 Karayip künyesi (grenada, dominika, saint-lucia, antigua-barbuda, saint-kitts-nevis) RIT öğrenci
  sayfasından UK Constitution Order SI metinlerine çevrildi; f/t değişmedi; ic_not'ta teyit düzeyi yazıldı.

## BULGU 1 — 99 güvensizin ~75'i SINIFLAYICI YANLIŞ ALARMI (karar Emre'nin)
`data/kaynak_guven.js` `VIKIPEDI` deseni `wikisource` kelimesini içerir. Çin hanedan tarihleri (Jin shu,
Shiji, Sanguozhi, Song shu, Jiu/Xin Tang shu, Wudai shi, Song shi, Hou Han shu…), Goryeosa, Samguk sagi,
Hyakurenshō, Rusya/İtalya/İspanya antlaşma ve kararnamesi: **kaynak birincil metin, okuma kopyası
wikisource**. Kaynak dizgesinde yalnız host adı yüzünden C. Düzeltme iki yoldan biri:
(a) tabloda wikisource'u VIKIPEDI'den çıkarıp, adlandırılmış klasik kaynağı (hanedan tarihi) A "birincil
edisyon" sayan kural; (b) her dizgeye basılı edisyon (Zhonghua shuju) eklemek — okunmamış edisyonu
yazmak olacağı için YAPILMADI. Tablo değişikliği site davranışını (app.js) etkiler → Emre karar versin.
Etkilenen id'ler: `py denetim/KUNYE-KAYNAK-1108/goster.py guvensiz 0 100` (wikisource içerenler).

## BULGU 2 — alt ajan araştırması, UYGULANMAYANLAR (hiçbiri birincil metin tam okunarak doğrulanmadı)
- hollanda-guyanasi: Breda 31 Tem 1667 (atlas f=1667-01-01 yalnız yıl teyitli); t 1975-11-25 tutarlı. Kaynak atfı hâlâ "standart akademik — TEK kaynaklı" (adsız). Öneri: Oostindie & Klinkers 2003.
- fransiz-guyanasi: Portekiz–Fransa sözleşmesi 28 Ağu 1817 (fiilî iade 8 Kas 1817); atlas f=1817-01-01 (yıl teyitli). Adsız kaynak.
- bophuthatswana/venda/ciskei: Status of … Act 89/1977, 107/1979, 110/1981; son 27 Nis 1994 (Anayasa Act 200/1993). Günler atlasla uyumlu ama yalnız arama özetinden; worldstatesmen yerine yasa metni okunup yazılmalı.
- federe-olmayan-malay-devletleri: Anglo-Siyam 10 Mar 1909 İMZA, yürürlük 9 Tem 1909 (atlas f imza günü); Johor 1909 devrinde değil (künyede Johor var) — çelişki, ayrı kaynak gerek.
- rupeniler: Der Nersessian/Setton tek kaynak, taç 6 Oca **1198**; atlas t=1199-01-06 → YIL ÇELİŞKİSİ (ic_not zaten beyan etmişti); f=1092 teyitsiz.
- asturias: akademik kaynak bulunamadı (FMG yasak); 718/722 tutarsız, gün yok.
- alman-isgali-karadag: Tomasevich 2001 s.138-148 yalnız Wikipedia atfı üzerinden; kitap okunmadı.
- wikisource'lu antlaşmalar (rusya-federasyonu, lombardiya-venedik, rio-de-la-plata-valiligi): birincil metin, Bulgu 1 kapsamı.

## Sıradaki
② "bulunamadı" 258 · tanınmayan 251 · ZAYIF KAYNAK (kalan), countrystudies/globalsecurity/archontology 25,
"BRIT" 8, Vikipedi-tek-dayanak — dokunulmadı.
