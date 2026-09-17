# PROTOKOL-BUDAMA — 17 Eylül 2026 · Opus 1015 · koordinatör 1.MURAT

Şartname: `oturumlar/KADRO-1010-1015.md` PROTOKOL-BUDAMA satırı + 18 Eylül kapsam genişlemesi
(Emre: "gereksiz ne varsa sadeleştir, token tasarrufu için ne gerekiyorsa yapalım").

## 0. İKİNCİ TUR — 25 KB ve açılış listesi (18 Eylül)
```
CLAUDE.md   28.046 B -> 24.990 B   (hedef <=25.000)                       ✓
KORUMA SINAVI tekrar: eksik 0 · kırık baglanti 0 · §1.5 regexi tutuyor     ✓
```
- **Açılış listesi değişti:** "AÇILIŞTA YALNIZ İKİ BELGE OKUNUR: CLAUDE.md + kendi şartnamen".
  Belge setindeki "her oturumda" ibareleri kalktı; her belge "yalnız iş gerektirirse, adıyla
  ve gerekli bölümüyle". Ölçülen tasarruf: 440 KB/oturum → ~25 KB + şartname.
- **Çıkarılan tek şey:** §3'teki üç `node -e` tek satırlık denetim komutu (2.354 B). Gerçek
  kapı `py arac/denetle.py`; üç komut `D202`de BİREBİR duruyor, yani kaybolmadı.
- 🔴 **ALET TABANI SABİTLENDİ:** sınav eski metni `HEAD:CLAUDE.md`den okuyordu; 1.MURAT
  28 KB'lik sürümü `5bc42ed` ile commit'leyince alet KENDİ ÇIKTISINI ölçmeye başladı ve
  bütün işaretçiler "0 kez" çıktı. Taban artık `d2228e6` (budama öncesi son CLAUDE.md
  commit'i), `--taban <ref>` ile değiştirilebilir. **Ders:** bir "önce/sonra" sınavının
  ÖNCE'si `HEAD`e bağlanamaz — `HEAD` sınavın kendi sonucuyla birlikte kayar.
- 🟡 §8 metnini sararken (satır sonlarını değiştirince) sınav "3 satır kayboldu" dedi ve
  haklıydı: §8 dersler'e taşınmamıştı, birebir duruyordu. Geri alındı. **Taşınmamış bölümde
  biçim değişikliği de içerik değişikliğidir.**

## 0.1 OGRENILENLER.md ve YAPILACAKLAR.md — ÖLÇÜLDÜ, DOKUNULMADI
```
OGRENILENLER.md  199.328 B · 4228 satır · 183 baslik (§1..§N) · son commit 2026-09-03
                 en buyuk tek bolum "### Kural" 18.625 B
YAPILACAKLAR.md   57.890 B · 1022 satır ·  29 baslik ·  73 madde · son commit 2026-09-12
                 "## Şimdi (harita ekseni)" TEK BASINA 25.069 B (%43)
```
**Önerim (uygulanmadı, hüküm 1.MURAT/Emre'de):**
1. `OGRENILENLER.md` §11 emsaliyle budanır: 183 başlığın her biri `ogrenilenler/<kimlik>.md`e
   BİREBİR taşınır, kökte yalnız slogan dizini kalır (~8-10 KB). Alet hazır: bu dizindeki
   `ARAC-PROTOKOL-BUDAMA-0917.py` işaretçi listesi değiştirilerek koşar; koruma sınavı aynen
   kullanılabilir. Tahminî kazanç **~190 KB**.
2. `YAPILACAKLAR.md` ikiye ayrılır: kökte YALNIZ açık işler (~10 KB), kapanmış/anlatı kısmı
   `arsiv/YAPILACAKLAR-KAPANMIS-0918.md`e. Kapanmış madde ayıklaması ölçülmeli — 73 maddenin
   kaçının kapandığını SAYMADIM.
3. İkisi de artık "her oturumda" değil (CLAUDE.md belge seti), yani bu iş token tasarrufunu
   **ikinci kez** getirir: sadeleşme + okunmama.
⚠️ İkisine de DOKUNMADIM (şartname yasakladı); yukarıdaki sayılar ölçümdür, tahmin değil.

## ① Ölçüm
```
CLAUDE.md (HEAD d2228e6)     165.196 B · 2436 satır · 2126 dolu satır
taslak                        28.046 B   (hedef ≤ 30.000)          ✓
taşınan blok                  34 dosya · dersler/D199–D232 · 121 KB (birebir)
§11 dizini                    36 KB → dersler/DIZIN.md (bağlantılar dizine göre göreli)
KORUMA SINAVI                 eski 2126 dolu satırın EKSİK olanı: 0      ✓
kırık dersler/ bağlantısı     0                                         ✓
durum_tablosu.py --yaz regex  taslakta §1.5 tablosunu buluyor (19 satır) ✓
```
Alet: `denetim/ARAC-PROTOKOL-BUDAMA-0917.py` (kuru · `--uygula` · `--sina [--taslak <yol>]`).
Kaynak metin `git show HEAD:CLAUDE.md`; işaretçiler tek eşleşme şartlı, yoksa diske yazmaz.
Sınav, eski dosyanın her dolu satırını (kırpılmış) yeni CLAUDE.md ∪ D199–D232 ∪ DIZIN.md
içinde arar — "hiçbir kural silinmez" şartının makinece sınanan hâli.

Karar: 30 KB tavanı §11 dizinini (36 KB) CLAUDE.md'de tutmaya izin vermiyordu; dizin
`dersler/DIZIN.md`e taşındı, CLAUDE.md §11'de yedi en sık aile özeti + bağlantı kaldı.
Komut blokları (Değişmez 1-2-3, curl, grep, girdi listesi, commit, beep) ve §1.5 tablosu
birebir kaldı; §1 ve §8 kısaltıldı ya da aynen kaldı; TOKEN KURALI aynen kaldı.

## ② Yeni §7.2 TOKEN ZİNCİRİ
Açılış → görevlendirme (ilk satır ad) → tahta → bekçi (adına + HERKES) → yatay mesaj →
koordinatörün 30 dk toplu okuması → teslim → emeklilik. Bağlanan kurallar: §7 koşu nöbetçisi,
§7.1 ①–⑦ + TOKEN KURALI, `arac/tahta_bekci.py`, `ClaudEmre/SARTNAME.md` ⑤.

### Çelişkiler (hüküm bekliyor)
```
Ç1  ClaudEmre/SARTNAME.md ⑤ "ASIL KANAL DOSYADIR … send_message"   ↔ TOKEN: yalnız tahta
Ç2  SARTNAME ⑤ + eski §7.1② "AÇILINCA HEMEN HABER VER"             ↔ KADRO: açılış mesajı YOK
    (taslakta çözüm önerisi: sahiplik görev tablosundaysa mesaj yok, değilse tek satır)
Ç3  SARTNAME ⑤ "arızayı kendi pencerende kullanıcıya söyle"        ↔ TOKEN: ekrana rapor yazma
    (öneri: rapor tahtaya; kullanıcıya YALNIZ kanal arızası bir satırla söylenir)
Ç4  eski §7.1② "KALEM KALEM bildir"                                ↔ TOKEN: teslim TEK mesaj
    (taslak TOKEN'ı uyguladı; ② "soru · aksaklık · teslim"e indirildi)
Ç5  eski §7 "aynı anda en çok 3 oturum"                            ↔ bugünkü 20+ oturumlu kadro
    (taslağa alınmadı, D221'de duruyor — Emre/1.MURAT kuralı düşürmeli ya da yenilemeli)
Ç6  §7.2⑥ koordinatörün 30 dk toplu okuması                         ↔ §7.1⑥ "aksaklık beklemez"
    ACİL cinsi için istisna tanımlı değil (öneri: `--cins ACIL` toplu beklemeden uyandırsın)
Ç7  §7 koşu nöbetçisi "60 dk'da bir canlılık"                       ↔ tahta bekçisi "mesaj yoksa sessiz"
    çelişki DEĞİL, iki ayrı nöbetçi — taslakta ayrım açıkça yazıldı
Ç8  eski §7.1① "tek kanal send_message"                            ↔ tahta.py başlığı: send_message ölçülmüş olarak ÇALIŞMIYOR
```

## ③ ClaudEmre önerileri (dosyalara YAZILMADI)
- `ClaudEmre/SARTNAME.md` ⑤ bloğu: "ASIL KANAL DOSYADIR, MESAJ YEDEKTİR" yerine
  "ASIL KANAL TAHTADIR (`py arac/tahta.py yaz`); send_message yalnız tahta arızasında".
- Aynı blok: "AÇILINCA HEMEN HABER VER" → "görev tablosu dosya sahipliğini taşımıyorsa tek satır".
- Aynı blok: "ARIZA ÜÇ YERE" ③ → "kullanıcıya yalnız kanal arızası tek satırla; rapor tahtaya".
- Bloğa bekleme satırı eklensin: "Monitor + tahta_bekci --kim <AD>; yoklama (ScheduleWakeup,
  /loop, sleep) yasak; işin yoksa sus".

## Bulunamadı / yapılmadı
- `tahta_bekci.py`nin HERKES uyandırması ve `--toplu` bayrağı ARAC-BEKCI'de (Sonnet 1010);
  §7.2 hedef davranışı yazıyor, aletin bugünkü hâlini ölçmedim.
- D199–D232 içindeki `§N` atıfları ve satır numaraları budama ÖNCESİNE ait (her dosyanın
  başında damgalı); yeniden numaralanmadı.
- Taşınan vakalar yeniden okunmadı ya da güncellenmedi — birebir taşındı.
