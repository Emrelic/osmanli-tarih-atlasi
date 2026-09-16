# KUTU-AYIKLA — eski paketlerdeki 171 açık maddenin ayıklanması · 16 Eylül 2026

Koordinatör: 1.MURAT · Model: Sonnet · Kurallar: `oturumlar/DALGA-0052.md` §0 (aynen geçerli: tahta, pathspec commit, kaynak kuralı).

**Girdi:** `denetim/KUTU-ACIK-LISTE-0916.txt` — 171 satır: `<paket>/<madde> [hüküm] metin || NOT: eski koordinatör notu`.
Tam metin ve görseller: `C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden/parti-emrelic-<paket>/PARTI.md`.

**İş:** her madde için TEK hüküm, ÖLÇEREK (git log --grep, veri/kod dosyasında arama, denetim raporları):
```
YAPILDI     iş gerçekten yapılmış — kanıt: commit kimliği ya da dosya:satır
YAPILMADI   hâlâ açık — aşağıdaki gruplardan birine ata
MUKERRER    0051/0052 dalgasındaki bir maddeyle aynı (oturumlar/DALGA-0052.md tablosu) — hangisi
KARAR       Emre'nin kararını bekliyor — sorunun kendisi tek cümle, şıklarıyla
```
Grup (YAPILMADI için): `EKOKUMA` (ek okuma/kart yazımı) · `KRONOLOJI` (madde ekle/düzelt) ·
`HARITA-VERI` (kaynaklı sahiplik araştırması) · `MOTOR` (geometri/üretim) · `UI` (arayüz) · `RENK`.

**Çıktı (yalnız bunlara yazarsın):** `denetim/KUTU-AYIKLA-0916.md` — dört kovada tablo,
en sonda "YAPILMADI" kalemleri gruplara göre sayılı liste (paket/madde · tek satır özet).
Kanıtsız "YAPILDI" YAZMA; emin değilsen YAPILMADI say.

**Hız:** 171 maddeyi saat başı ~60 hızla bitir. Ara rapor yok; teslimde tahtaya tek mesaj:
kova sayıları + dosya commit kimliği. Sonra dur.
