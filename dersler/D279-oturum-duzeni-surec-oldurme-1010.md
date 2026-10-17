# Oturum düzeni: makine rolleri · SÜREÇ ÖLDÜRME · dizin paylaşımı (10 Ekim hâli)

> Kimlik `D279` · `CLAUDE.md §7` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL
Bölme ölçütü **dosyadır**; her dosyanın tek sahibi var. Oturum 0 (koordinatör, YILDIRIM BAYEZIT):
`yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök `*.md`. Öteki oturumlar
şartnamelerinin verdiği dosyalara yazar; **emin değilsen sor**; rapor/denetim oturumları
düzeltme yapmaz. [`D221`](dersler/D221-dosya-sahipligi-uretim-kilidi.md)
- 🆕 🔴 **MAKİNE ROLLERİ (Emre, 4 Ekim 2026) — `oturumlar/TOPOLOJI.md`.** EMRELIC
  koordinatör/paketleyici/plan · **HAVVA koşucu + yayıncı** · UMIT yazıcı (kod) ·
  KASA araştırmacı (yalnız metin) · LAB denetleyici. Çalışma tipleri TİP1–TİP5.
  **İki eski kuralı değiştirir:** ① koşuyu artık HAVVA koşturur (aşağıdaki
  "yalnız Oturum 0" satırı TİP1 içindir) ② motor tuzu donması makineler arası
  olduğu için SÖZ YETMEZ — koşucu `py arac/kaynak_durum.py kapat --kod KOSU`
  ile ilan eder, UMIT'in yazıcı oturumları bekçi **çıkış 3** alıp durur.
  🔴 **Ve `main`in TEK YAZICISI koordinatördür:** her makine kendi dalına push
  eder. Ölçüldü (4 Ekim): son 200 commit'in **%39'u tahta mesajı**, en çok
  değişen iki dosya `TAHTA.md`+`tahta.json` (üçüncünün 8 katı) — UMIT'i
  kilitleyen sınıf buydu. KASA dal kullandı, çatışma 0; UMIT `main`e yazdı,
  kilitlendi. Üretilen `data/*.js` çatışması **birleştirilmez, yeniden
  üretilir**.
- **`uret_petek.py`yi yalnız Oturum 0 koşturur** (TİP1; TİP3+ için HAVVA — üstteki satır). Koşu sürerken `data/` VE `arac/`
  donmuştur; motorun "girdi dosyaları SERBEST" satırı koşunun sağlığını söyler, çıktının
  yayınlanabilirliğini değil. Koşular ayrı worktree'de koşar. Başlatan "girdi kilitli" /
  bitince "dosya senin" der; devir sözle yapılır.
- **Uzun bir işi (koşu) başlatmadan önce** tahtaya "BEN BAŞLATIYORUM · ne · ~süre" yaz ve
  60 sn bekle; çakışmada beyana değil süreç damgasına bak. [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- 🆕 🔴 **SÜREÇ ÖLDÜRME — ADLA, ZAMAN PENCERESİYLE YA DA KOMUT SATIRI
  DESENİYLE ASLA.** `Stop-Process`
  yalnız **KENDİ başlattığın PID ve onun ALT AĞACI** için kullanılır
  (`taskkill /T /PID <kendi>`). Bu makinede aynı anda birden çok oturum `git`,
  `py` ve `node` koşturuyor. ⚠️ Ölçülen vaka (UMIT, 10 Ekim 2026, öz-ihbar):
  `Get-Process git | ? StartTime -gt <X> | Stop-Process -Force` **sahibine
  bakmadan** o 13 saniyelik pencerede başlamış BÜTÜN `git` süreçlerini
  öldürdü — kurbanları Z5 v4'ün boş mesajlı *"KAPI ÖLÇEMEDİ — git diff hata:"*
  satırı ve o anda koşan `SAHIPLIK-KAPSAM` ölçümleri. `§7.2`de aynı sınıfın
  eski bir vakası var (koordinatör dört kıtanın bekçisini dışarıdan öldürdü);
  o zaman zarar GÖRÜNMEMİŞTİ, bu gece GÖRÜLDÜ.
  🔴 **VE AYNI GECE İKİNCİ VAKA — kural yazılmadan ÖNCE** (UMIT'in ikinci
  öz-ihbarı): bir ajan eskimiş sınav süreçlerini **KOMUT SATIRI DESENİNE**
  göre durdurdu, ve desen `_sahiplik_uygula` içeriyordu ⇒ **başka bir oturumun
  süreci de etkilenmiş olabilir** (hangisi olduğu `ÖLÇÜLEMEDİ`). ⇒ Kuralın
  ilk yazımı *"adla ya da zaman penceresiyle"* diyordu ve bu üçüncü biçimi
  **kapsamıyordu.** Artık kapsıyor:
  > **Hedefi SÜREÇ KİMLİĞİNDEN BAŞKA bir şeyle seçen her öldürme yasaktır** —
  > ad · zaman penceresi · komut satırı deseni · başlık · çalışma dizini.
  > Tek meşru ölçüt: **KENDİ başlattığın PID ve onun ALT AĞACI.**
  📌 İki vaka da aynı dersi veriyor: *bir süreci "benim gibi görünüyor" diye
  öldürmek, aynı makinede çalışan başka bir oturumun işini öldürmektir.*
  🆕 🔴 **VE AYNI KÖKÜN İKİNCİ YÜZÜ: AJANLAR BİRBİRİNİN DİZİNİNE DE YAZMAZ.**
  Ölçülen vaka (10 Ekim): bir sınav **17/18** verdi ve tek kalan soru *"koşu
  sırasında başka bir ajan AYNI DİZİNE yazdı"* yüzündendi — yani sonuç ölçüm
  değil **kirlenme**ydi. ⇒ **Her ajan KENDİ dizinine yazar** (scratchpad ya da
  kendi worktree'si); paylaşılan `denetim/` yalnız **TESLİM** içindir, çalışma
  alanı değil.
  🆕 🔴 **ŞERH — `scratchpad` OTURUM başınadır, AJAN başına DEĞİL** (UMIT'in
  öz-ihbarı, 10 Ekim): bir oturumun BÜTÜN alt ajanları AYNI scratchpad'i
  paylaşır; bir ajan ötekinin dizininde dosya bulup oraya yanlışlıkla
  `git init` yaptı (hasar yok, kendi `.git`ini sildi). ⇒ **`scratchpad/<GÖREV-ADI>/`
  alt dizini ZORUNLU.** Yukarıdaki cümle "scratchpad" derken paylaşılan bir
  dizini işaret ediyordu — yani kural kendi yasakladığı şeyi gösteriyordu.
  📌 Birlikte okunur: *aynı makinede çalışan ajanlar süreçleri, dosyaları ve
  dizinleri PAYLAŞIR.* Bir sınavın çıktısı başka bir ajanın yazdığı dosyayla
  kirlendiğinde o sınav **"geçti" ya da "kaldı" der ve sebebi ÖLÇÜM DEĞİLDİR**
  — `D269`un (*kanal da bir alettir*) dosya sistemi yüzü.
  🔴 **VE ÇIKIŞ KODU TUZAĞI — bu makinede ÖLÇÜLDÜ, genel bilgi DEĞİL:**
```
  Stop-Process -Force (python.exe / py.exe)  →  127
  taskkill /F   ·   taskkill /F /T   ·   TaskStop  →  1
```
  Yani Git Bash'te **127 "komut bulunamadı" DEMEK ZORUNDA DEĞİL**: burada
  *"dışarıdan sonlandırıldı"* da demek. Ayırt edici **çıktı başlamış mı**
  sorusudur (eksik bir ikili çıktı üretmez; ölçülen vakada iki log 370.667
  bayt gerçek çıktı taşıyordu). ⇒ **Genel bilgi, bu makinedeki ölçümün yerine
  geçmez** (`§3`in *"vakaya dayanıp bugünkü durum hükmü verilmez"* kuralının
  ortam yüzü) — ve bu tuzağa koordinatör de düştü: işçinin "makine yükü"
  tahminini "127 = command not found" diye düzeltti, ölçüm İKİSİNİ de çürüttü.
- **Koşu nöbetçisi** düzenli canlılık basar (60 dk'da bir); sessizlik "nöbetçi ölmüş
  olabilir"dir (tahta bekçisi mesaj yoksa sessizdir — §7.2). [`D222`](dersler/D222-nobetci-altyapiyla-olur.md)
- **Commit:** push ve paylaşılan dosyalar Oturum 0'da. Oturum KENDİ ürettiklerini
  (`oturumlar/<ADI>.md`, `denetim/<ÖNEKİ>…`) **adıyla** commit eder; dizin pathspec'i ve
  `git add -A` YASAK; pathspec commit'te de tekrarlanır, `git show --name-only` ile
  doğrulanır (`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>`).
  Commit teslim değildir. [`D223`](dersler/D223-commit-istisnasi-pathspec.md)
- **Ayrı dosya ≠ ayrı ad alanı:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`;
  dosya verirken değişken adı da verilir. Süzgeç tanımadığını sessizce elemez, sayıp basar.
  [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- **Cevap kendi pencerene yazılmaz; "ne oldu bizim iş?" cevapsız kalmaz** ("iş üstündeyim ·
  aşama · ~kalan"). Koordinatör ölü ilan etmeden önce oturumun gerçekten çalışıp
  çalışmadığına BAKAR. [`D224`](dersler/D224-cevap-kanali-ne-oldu-bizim-is.md)
- Yeni oturumun görev tanımı `oturumlar/` altına yazılır (§7.2 ②).
