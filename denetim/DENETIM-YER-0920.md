# DENETIM-YER-0920 — Değişmez 2s'e YER/TARAF şartı

- Oturum: DENETIM-YER-0920 (Opus) · şartname `oturumlar/DALGA-0920.md`
- Kalem: `arac/denetle.py` (yalnız 2s kolu) · `denetim/DENETIM-YER-0920.md` ·
  `denetim/ARAC-DENETIM-YER-0920.py` (+ ürettiği `DENETIM-YER-0920.json`)
- Taban ölçüm: `glm/2S-YER-TARAMA.json` · `glm/SAHTE-343.json` (GLM, 1.MURAT doğruladı)
- Sınav betiği: `py -X utf8 denetim/ARAC-DENETIM-YER-0920.py`

## 1. Kusur — ne sorulmuyordu

`2s`, bir yabancı kırılmayı **±30 gün içinde HERHANGİ bir madde varsa** kapalı sayıyordu.
Maddenin o **yeri** ya da **tarafları** anlatıp anlatmadığını hiç sormuyordu. Ölçülen sonuç:
kapalı 1052 tarihin **343'ünde** madde ne yeri ne tarafları anıyor.

Gerçek ve "kapalı" görünen vakalar:

| kırılma | onu kapatan madde |
|---|---|
| Mankup 1349 (bizans→teodoro, Kırım) | "Mora Despotluğu'nun kuruluşu" |
| Tenochtitlan 1325 (Aztek'in doğuşu) | "Konuralp'in Bolu yöresini fethi" |
| Moskova 1325 (altınorda→moskova) | aynı madde |
| Aztek 1520-09-04 | "Yavuz Sultan Selim'in Çorlu'da vefatı" |

⇒ Takvim yakınlığı bir açıklama değildir. `2s`nin amacı "harita renk değiştirdi, kullanıcı
niçin değiştiğini okuyabiliyor mu" sorusuydu; alakasız madde bu soruya "evet" diyordu.

## 2. Yeni ölçüt

Bir maddenin kırılmayı **kapatması** için ikisinden biri gerekir:

- **(a) YER** — maddenin `yer_id`si kırılmanın yerleşimlerinden biri, ya da metninde
  (başlık + yer + gövde) yerleşimin ad çekirdeği veya `m:` bölgesi kelime sınırıyla geçiyor.
- **(b) TARAF** — taraflardan biri madde **başlığında** geçiyor (maddenin mevzuu odur), ya da
  eski **ve** yeni sahip tam metinde **birlikte** geçiyor (madde devri anlatıyor).

**Gevşek kol kabul edilmedi.** "Gövdede tek kelime devlet adı geçiyor" ölçütü çürüdü:
Marconi'nin radyo maddesi Nijerya'daki bir kırılmayı, Mora Despotluğu maddesi de gövdesindeki
"Bizans" teşhis sözüyle Mankup 1349'u kapatıyordu. **Teşhis sözü mevzu değildir.**

**Soru her yerleşime AYRI sorulur.** Sınav noktası bunu mecbur etti: 1349-01-01 kovasında üç
yerleşim var (Mora · Mankup · İnkirman) ve penceredeki tek madde "Mora Despotluğu'nun
kuruluşu" (`yer_id` = Mora). Mora için bu **doğru** kapanış; Mankup ile İnkirman ise Kırım'da
Bizans'tan Teodoro'ya geçiyor ve maddede yokturlar. "Bir yerleşim açıklandıysa tarih
kapalıdır" ölçütü onları görünmez yapıyordu — **Mankup 1349 sahte kapanışının mekanizması
budur**, kapatan maddenin alakasızlığı değil. Tarih ancak **her** yerleşimi açıklanmışsa kapanır;
rapora giden ad listesi artık **açıklanmayanlardır** (`kapsam_disi` de mesafeyi susan noktadan
ölçer, açıklanmış komşusundan değil).

**Madde seçimi** (şartname md. 2): pencerede birden çok aday varsa artık alâkalı olan seçilir
(YER > TARAF, sınıf içinde en yakın). Eski `yer_id` tercihi bunun içinde kaldı.

**Şart yalnız 2s'de:** `d:`/`v:` (Değişmez 2) ve `isg:` (2i) kolları dokunulmadan eski
davranışta — `degismez2(..., yer_sarti=False)` varsayılandır.

## 3. Önce / sonra

| ölçüm | ÖNCE | SONRA |
|---|---|---|
| yabancı kırılma (tarih) | 1418 | 1418 |
| açık ham | 363 | **952** |
| → KAPSAM DIŞI (maddesi bu kronolojide olamaz) | 350 | 602 |
| → KAPSAM İÇİ | 13 | **350** |
| &nbsp;&nbsp;· gün hassasiyetli AÇIK (tavan) | 13 | **201** |
| &nbsp;&nbsp;· `YYYY-01-01` YIL-TEMSİLÎ BORÇ (ayrı defter) | — | **149** |
| yeni açılan tarih | — | 589 |

- `BEKLENEN_ACIK_S` **121 → 201**. Bu yükseliş bir gerileme değil **itiraftır**: eski sayı
  yanlış sorunun cevabıydı. Aradaki fark hiç ödenmemiş bir borçtu, alakasız maddeler ödenmiş
  gösteriyordu. Tavan buradan **aşağı iner** (her açık bir "madde yaz" işidir).
- `BEKLENEN_2S_YIL_BORC` **= 149**, yeni ve ayrı defter. `YYYY-01-01` bir ölçüm değeri değil
  "günü bilinmiyor" damgasıdır; böyle bir kırılmanın ±30 günlük penceresi takvimsel kurgudur
  ve çaresi "madde yaz" değil **günü bul**. İhlal sayılmaz, çıkış kodunu değiştirmez.
- ⚠️ **Sayı bir anın fotoğrafıdır:** ölçüm sırasında AMERIKA-KRONO-0920
  `data/olaylar_amerika_0920.js`e madde yazıyordu; iki koşu arasında açık ham 960 → 952 düştü.
  Tavanı commit'ten önce yeniden ölçün.

Yeni açılanlardan örnekler (tamamı JSON'da):

| tarih | açıklanmayan yerleşim | eskiden kapatan madde |
|---|---|---|
| 1300-01-01 | Alaşehir, Antalya, Elmalı | Köprühisar'ın alınışı |
| 1324-01-01 | Gao, Kalyari, Sasari | Akyazı ve İmralı Adası'nın fethi |
| 1325-01-01 | Ihuatzio, Moskova, Nijniy Novgorod | Konuralp'in Bolu yöresini fethi |

## 4. İki yönlü sınav (şartname md. 5) — İKİSİ DE GEÇTİ

| sınav | beklenen | ölçülen |
|---|---|---|
| ① sahte kapanış yakalanıyor mu — **Mankup 1349** | AÇILMALI | önce kapalı → sonra **AÇIK** ✓ |
| ② doğru kapanış bozuluyor mu — `yer_id`si tutan gerçek kapanışlar | ≥10 örnek, 0 bozulma | **616 örnek · 0 bozuldu** ✓ |

🔴 **Sınav ②'nin kendi kusuru ölçüldü ve düzeltildi.** İlk yazımda birim TARİH'ti ve "605
örneğin 220'si bozuldu" dedi. Ölçüp baktım: 220'sinde de `yer_id`si tutan yerleşim **kapalı**
kalıyordu; tarihi açan, aynı güne düşen **susan komşularıydı**. Yani sınav kuralın kusurunu
değil **kendi biriminin kabalığını** ölçüyordu. Doğru soru: *"açıklanmış bir yerleşim susuyor
sayıldı mı?"* — cevabı 0.
📌 Ders ailesi: "denetim var ≠ o soruyu soruyor" — bu kez denetimin denetiminde yaşandı.

## 5. Ölçülen ama YAPILMAYAN — yerleşim birimine geçiş

Kapanış birimi hâlâ **tarihtir** (denetle'nin sayacı tarih sayar). Yerleşim birimine geçilirse
evren 1418 değil ~9024 kırılmadır ve bugün **4906'sı** açıklanmamıştır. Bu ayrı ve çok daha
büyük bir reformdur; tavan, rapor ve iş kuyruğu tasarımını birlikte değiştirir. Ölçüldü,
bildirildi, **tek başıma yapmadım** — hüküm 1.MURAT'ındır.

## 6. Değişen dosyalar

- `arac/denetle.py` — yalnız 2s kolu: `_2s_norm` · `_2s_gecer` · `_2s_kunye_adlari` ·
  `_2s_taraf_adaylari` · `_2s_yeri_aniyor` · `_2s_tarafi_aniyor` · `yil_temsili_ayir` ·
  `degismez2(..., yer_sarti=False)` parametresi · `BEKLENEN_ACIK_S` 121→201 ·
  `BEKLENEN_2S_YIL_BORC` = 149 · 2s rapor satırları.
- `denetim/ARAC-DENETIM-YER-0920.py` · `denetim/DENETIM-YER-0920.json` · bu dosya.
- `py arac/denetle.py` → **SONUÇ: temiz**.
