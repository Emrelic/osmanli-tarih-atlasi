# SINAV-ISIRMA-1010 — `arac/sinav_isirma.py`

Görev: UMIT İRTİBAT, 10 Ekim 2026. Model: Opus. **Yalnız diff — main'e yazılmadı, commit yok.**
Taban: diff `37770b31` üzerinde üretildi, **`4b76e9b0` (o anki origin/main) üzerinde `apply --check` temiz,
uygulandı ve sınav 18/18 geçti.** Diff yalnız iki YENİ dosya ekler, tuz dosyalarına dokunmaz.

## Dosyalar
| Dosya | Ne |
|---|---|
| `denetim/SINAV-ISIRMA-1010.diff` (617 satır, sha256 `09c9e175…`) | `arac/sinav_isirma.py` (YENİ) + `denetim/ARAC-SINAV-ISIRMA-SINAV-1010.py` (YENİ) |
| `denetim/ARAC-SINAV-ISIRMA-SINAV-1010.py` | sınavın ayrı kopyası (diff'tekiyle aynı içerik, satır sonları hariç) |
| `denetim/SINAV-ISIRMA-1010.md` | bu belge |

## Kullanım
```
py arac/sinav_isirma.py --taban origin/main --diff A.diff [B.diff …] --sinav <yol> [--ek <yardımcı> …]
                        [--ham <dizin>] [--json <yol>] [--ozetsiz] [--zaman 3600] [-- <sınav argümanları>]
```
- `--taban` **ZORUNLU, öntanımsız taban yok** (verilmezse 2). Basılır: ref → SHA, origin/main'e göre GERİDE sayısı.
- A = taban, B = taban + diff'ler (sırayla). Her diff için `apply --check`. ÇAKIŞIRSA `--reverse --check` ile
  **"ZATEN UYGULANMIŞ" mı "gerçek çakışma" mı** ayrılır (`HAZIR-KITA §4.1③`).
- **Sınav iki ağaçta AYNI baytlarla koşar.** Göreli yol önce B'de (diff sonrası) aranır, bulunursa A'ya kopyalanır.
  Ağaç dışı dosyaysa iki ağaca da `denetim/<adı>` olarak kopyalanır. Böylece kökünü `__file__/..`'dan türeten sınav
  (D5-GUN) koşulan ağacı ölçer, kopyalandığı depoyu ölçmez. `{KOK}` argümanı ağaç köküne çözülür.
- Worktree'ler `C:\atlas-isirma-<pid>-A/B`. `finally` içinde kaldırılır, kaldırılamazsa basılır.

## Ayrıştırma — ortak biçim (okunan dört sınav)
| Sınav | Soru satırı | Özet |
|---|---|---|
| ARAC-D5-GUN-SINAV-1010 | `✓ S1   …` / `✗ S1 …` | `SONUÇ: 23 soru · 23 geçti · 0 kaldı` |
| ARAC-CELISKI-ICKAYNAK-SINAV-1010 | `  GEÇTİ  P1 …` / `  KALDI  …` | `SONUÇ: g/n geçti` |
| ARAC-SAHIPLIK-KUR-KAPI-SINAV (diff içinde) | `✓ U1 …` / `✗ BAŞARISIZ U1 …` | `SINAV: g/n geçti`, ardından `  ✗ ad` tekrar listesi |
| ARAC-SAHIPLIK-KAPSAM-SINAV (diff içinde) | aynı (`sina`) | aynı |

Ortak dilbilgisi: `^\s*(✓|✗( BAŞARISIZ)?|GEÇTİ|KALDI)\s+<ID> …`. Özet satırında okuma DURUR, yani tekrar listesi
sayılmaz.
🔴 **ID TEKİL DEĞİL:** ÇELİŞKİ'de P1 ×2, N1 ×2; KAPSAM'da K1 ×7. ESKİ dalları yalnız bir tarafta basılabilir.
⇒ Eşleştirme anahtarı **(ID, ID dahil ilk 5 sözcük, sıra)**. Bir dal tek tarafta basılırsa sonraki sorular
kaymaz; o dal EŞLEŞMEDİ kovasına adıyla düşer (I8 sınıyor).
**SAYAN = BASAN** (taraf başına): ayrıştırılan geçen/toplam = özet, ve kalan var ⇔ çıkış 1. Tutmazsa ya da hiç soru
yoksa, özet yoksa (`--ozetsiz` hariç) veya çıkış 0/1 değilse o taraf **ÖLÇÜLEMEDİ** (3). Sessizce 0 sayılmaz.

## Kovalar ve çıkış
ISIRIYOR · TESADÜF-YA-DA-SORULMAMIŞ (ELLE İNCELENMELİ) · İKİSİNDE-KALAN · GERİLEME · EŞLEŞMEDİ (ölçülemedi sayılır).
Çıkış: 0 rapor · 1 GERİLEME · 2 kullanım · 3 ölçülemedi. GERİLEME + ölçülemedi birlikte varsa çıkış 1 olur, ölçülemedi
bloğu yine basılır (I5d).
⚠️ TESADÜF kovası üç şeyi ayıramaz: ② tesadüf, ③ sorulmamış ve ④ yamanın dokunmadığı bir korumanın **süreklilik**
sorusu (yamanın bozmaması gereken davranış). Araç bunları yalnız ADLANDIRIR. Hükmü insan/ajan verir.

## Ölçümler
**Pozitif kontrol (GERÇEK):** `D5-GUN-1010-v3.diff` + `ARAC-D5-GUN-SINAV-1010.py`, taban origin/main:
```
A (yamasız)  çıkış 1 · 5/23 geçti · özet 5/23 · 20 sn
B (yamalı)   çıkış 0 · 23/23 geçti · özet 23/23 · 17 sn
ISIRIYOR 18: S1 S3 S5 S5b S6 S7 S8 S9 S10 S11 V2 V3 V4 V5 V5b V6 V9 V7
TESADÜF-YA-DA-SORULMAMIŞ 5: S2 S4 S12 V1 V8        ← bilinen sonuçla BİREBİR
İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0 · çıkış 0 · worktree ikisi de kaldırıldı · ~90 sn
```
Üç kez koştu (`37770b31`'de iki kez, `4b76e9b0`'da bir kez G1 içinde), üçünde de aynı sonuç.

**Sınav `ARAC-SINAV-ISIRMA-SINAV-1010.py`: 18/18** (17 sentetik + G1). Sentetik kısım geçici `git init` deposunda koşar.
Dört kova birer kez (Q1–Q4, çıkış 1) · gerilemesiz → 0 · eksik argüman → 2 · biçimsiz / SAYAN≠BASAN / özetsiz /
çıkış-çelişkisi → 3 · GERİLEME+ölçülemedi → 1 ve blok basılı · çakışma ile "zaten inmiş" ayrı teşhis · EŞLEŞMEDİ ·
ID tekrarında kayma yok · diff'in getirdiği sınav · GEÇTİ/KALDI/✗ BAŞARISIZ · {KOK} A≠B · worktree kalmadı.
**Ters yön (mutasyon):** iki bozuk araçla koşturuldu.
① Özette durma kaldırıldı ⇒ I10 KALDI (16/17).
② SAYAN=BASAN doğrulaması kapatıldı ⇒ I4, I5, I5b, I5c, I5d KALDI (12/17).
Sınav ikisini de yakaladı; özgün araç geri kondu (`cmp` aynı).

**İkinci gerçek koşu: KUR-KAPI.** `SAHIPLIK-KUR-KAPI-1010.diff` tek başına uygulanmadı: "gerçek çakışma", çünkü
`ARAC-SAHIPLIK-KAPSAM-SINAV-1010.py`'yi değiştiriyor ve o dosyayı KAPSAM-v3 getiriyor. Yani diff YIĞILMIŞ.
`--diff KAPSAM-v3 KUR-KAPI` ile denendi:
```
A (yamasız)  çıkış 1 · 0/0 · FileNotFoundError: arac/_hukum_listesi.py   ⇒ ÖLÇÜLEMEDİ (3)
B (yamalı)   çıkış 0 · 16/16
```
Doğru hüküm budur, "16 ISIRIYOR" değildir. Sınav aracı kendi deposundan kopyalıyor ve yamasız ağaçta diff'in getirdiği
modül yok. ⇒ **Bu sınıf sınavlar (aracı `KOK/arac`'tan kopyalayan sentetik kollar) yamasız ağaçta koşamaz.**
Isırma ölçümü onlarda sınavın KENDİ "ESKİ = origin/main" koluyla yapılıyor. Araç bunu sessizce geçmiyor, 3 veriyor.

## Bulunamadı / sınırlar
- ARAC-CELISKI-ICKAYNAK sınavı gerçek koşuda denenmedi: ona ait bir diff yok, tarayıcı ağaç dışı bir betik.
  Biçimi sentetik I10 ile sınandı. Koşmak için `--ek ARAC-CELISKI-ICKAYNAK-1010.py -- --kok {KOK}` gerekir.
- Sınavın kendisinin ağaca YAZIP yazmadığı denetlenmiyor. Worktree'ler tek kullanımlık olduğu için zararsız.
  Sınavın mutlak yolla yazdığı yerler (ör. `C:\atlas`) bu aracın kapsamında değil.
- Ölçüm sırası A sonra B (seri, RAM için). Taraf başına zaman aşımı 3600 sn.
