# TAHTA-ACIL-I-1010 — noktalı İ ile yazılan "ACİL" dayanaksız geçiyor, bekçi HERKESİ uyandırıyordu

Görev: UMIT yazıcı işçisi, 10 Ekim 2026 (P0). **Yalnız diff. Commit, push ve stash yok; gerçek tahtaya yazılmadı.**
Kaynak bulgu: `denetim/YORUM-KONTROL-TARAMA-1010.md` madde 6 / satır 60.

## Taban
- Diff `ba636eee` üzerinde üretildi (worktree `C:\atlas-tahtai`, origin/main'den, detached; iş bitince kaldırıldı).
- `sinav_isirma.py` koşusunda origin/main **`a24a4838`** idi (GERİDE 0). Diff o tabanda `apply --check` temiz geçti ve uygulandı.
- `TAHTA-ACIL-I-1010.diff`: 381 satır, sha256 `e2924ce4567f9e70d40f9a7eada0d61fe2b50e6dc9a020fab0f9ea59054e1138`
- `ARAC-TAHTA-ACIL-I-SINAV-1010.py`: sha256 `eb85fda8…` (diff içindeki kopyayla aynı, satır sonları hariç)

## 1. Ölçüm: iki taraf ayrı işlev kullanıyor
| Taraf | Yer (`ba636eee`) | Tespit |
|---|---|---|
| Yazıcı, `--dayanak` kapısı | `arac/tahta.py:955-956` | `(_t(aciliyet) or "NORMAL").upper() in ("ACIL","DURDURUCU")` |
| Yazıcı, kayda yazılan değer | `arac/tahta.py:1090` | `.upper()`, yani `"ACİL"` olduğu gibi kalır |
| Bekçi, HERKES uyandırma | `arac/tahta_bekci.py:569` | `_sade(aciliyet) in ("ACIL","DURDURUCU")`. `_sade` İ'yi I'ya çevirir |
| Tahta sunucusu, satır rengi | `arac/tahta_sunucu.py:653` | düz eşitlik (üçüncü ayrı tespit) |

`"ACİL".upper()` yine `"ACİL"`dir ve `"ACIL"`a eşit değildir. Sonuç: yazıcı mesajı NORMAL sayar, dayanak istemez ve "KİMSEYİ UYANDIRMAZ" diye basar. Bekçi aynı kaydı `_sade` ile `ACIL` okur ve **bütün bekçileri uyandırır.** Kusur iki kodun hiçbirinde tek başına yok, ikisinin **ayrışmasında**. `tahta.py`de hazır bir `_duzle` (`:825`) vardı ama aciliyet için kullanılmamış.

Yamasız ağaçta (sınav A tarafı, gerçek işlevlerle) ölçülen ayrışma:
- `ACİL` ve `acİl`: yazıcı dayanak İSTEMEDİ, bekçi UYANDIRDI (TR1, TR5). Kusur tam olarak bu.
- `ACİL:`, `🔴 ACİL` ve `🔴🔴 DURDURUCU`: yazıcı da bekçi de tanımadı. Tutarlı, ama gerçek bir ACİL **sessizce kütüğe düşüyor** (R6, R7, R10).
- `ACIL`, `acil`, `Acil`, `DURDURUCU` ve `durdurucu` iki tarafta da doğru tanınıyordu.

Canlı veri (`ba636eee` ağacındaki `oturumlar/tahta.json`, 5904 mesaj, salt okundu): `aciliyet` alanında noktalı İ taşıyan **0** kayıt var. Değer dağılımı: NORMAL 5539 · ACIL 294 (100'ü HERKES) · DURDURUCU 53 (20'si HERKES) · YUKSEK 17 · boş 1. Delik o anki tahtada henüz kullanılmamış. Ama Türkçe yazımın doğal biçimi `ACİL` olduğu için açık bir delik.

## 2. Çare: tek ortak tespit, `arac/aciliyet.py` (YENİ)
- `norm()`, `denetim/ARAC-NORMAL-0903.py`'den **birebir taşındı.** `arac/` araçları çalışma anında `denetim/` dosyasına bağlanmasın diye taşıdım. Eşdeğerliği sınav N1 iki işlevi 16 dizgilik derlemde koşturarak sınıyor. Biri değişirse N1 öter.
- `sinif(s)` sonucu `DURDURUCU`, `ACIL` ya da `''` olur. `uyandirir_mi(s)` ve `kanonik(s)` bu işlevin üstünde çalışır.
- **Üç tüketici artık aynı işlevi soruyor:**
  - `tahta.py`: HERKES kapısı, kayda yazılan `aciliyet` (kanonik değer, yani `ACİL` girilirse `ACIL` yazılır) ve `oku` gösterimi
  - `tahta_bekci.py`: HERKES uyandırma ve `--dosyam` dalı
  - `tahta_sunucu.py`: satır rengi
- Eski kayıtlar ham hâlde okunabilir (`ACİL` gibi). Okuyan taraf da `sinif()` kullandığı için o kayıtlar da doğru sınıflanır.
- Tuz dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunulmadı.

### Kelime sınırı kararı
Eşleşme **tam sözcüktür.** `ACİLEN`, `aciliyet` ve `acilci` ACİL sayılmaz. Gerekçe: `--aciliyet` serbest metin değil, bir anahtar alanı. Alt dizgi eşleşmesi `aciliyet: düşük` gibi bir değeri alarma çevirirdi. Asıl güvence kelime sınırı değil, **tutarlılık**: hangi karar verilirse verilsin yazıcı ve bekçi aynı kararı verir. "Dayanak istenmedi ama uyandırdı" hâli artık yapısal olarak mümkün değil (TB4 ve TB5 bunu sınıyor).
Bilinen yanlış pozitifi bilerek kabul ettim: `ACİL DEĞİL` değeri ACİL sayılır. Bu güvenli yöne düşer: mesaj açık bir gerekçeyle reddedilir, sessizce geçmez.

## 3. Sınav: `denetim/ARAC-TAHTA-ACIL-I-SINAV-1010.py` (41 soru)
Gerçek `tahta.yaz()` ve gerçek `tahta_bekci.main()` süreç içinde çağrılıyor. Yan etkili kenarlar bellek içi taklitle değiştirildi: git, kilit, `_kaydet`, `_tazele`, nabız, KAYNAK-DURUM, defter (`--defter-yok`). Tahta dosyası geçici dizinde. **Gerçek tahtaya hiçbir şey yazılmadı.**
- **R1–R10:** dayanaksız ACİL/DURDURUCU varyantı (10 varyant) yazılınca RED, çıkış 2.
- **K1–K10:** dayanaklı varyant KABUL edilir ve kayıtta kanonik değer durur.
- **TR1–TR10, TB1–TB5:** yazıcı dayanak istedi ⇔ bekçi uyandırdı. Bekçiye gerçek akıştaki kayıt verilir.
- **B1–B5:** bilgi amaçlı HERKES dayanaksız kabul edilir ve **kimseyi uyandırmaz**.
- **N1:** normalleştirici eşdeğerliği.

`arac/sinav_isirma.py` ile ısırma ölçümü (`--taban origin/main` ⇒ `a24a4838`, GERİDE 0):
```
A (yamasız)  çıkış 1 · 33/41    B (yamalı)  çıkış 0 · 41/41
ISIRIYOR 8: R1 R5 R6 R7 R10 TR1 TR5 N1
TESADÜF-YA-DA-SORULMAMIŞ 33 · İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0 · worktree ikisi de kaldırıldı · çıkış 0
```
Tesadüf kovasındaki 33 soru, elle incelendi: bunlar **süreklilik** soruları. Yamanın bozmaması gereken davranışı ölçüyorlar: ASCII varyantlar zaten doğruydu, dayanaklı kabul ve bilgi amaçlı HERKES'in sessizliği. Tesadüf değiller.
İlk koşuda N1'in iki dalı farklı metin bastığı için soru EŞLEŞMEDİ'ye düştü ve araç çıkış 3 verdi. Metnin ilk beş sözcüğünü iki dalda eşitledim, ikinci koşu temiz çıktı.

## Bulunamadı / açık kalanlar
- `tahta_bekci.py:569`'daki `import`, döngünün içinde duruyor (Python önbelleğe aldığı için maliyeti yok). İstenirse dosya başına alınabilir.
- Diğer `.upper()` tabanlı alan karşılaştırmaları (`cins` vb.) taranmadı. Bu görevin kapsamı aciliyetti.
