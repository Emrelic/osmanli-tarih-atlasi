# Motor kodu dondurma ve kapsamı (10 Ekim hâli)

> Kimlik `D284` · `CLAUDE.md §9.1` bölümünden taşındı (10 Ekim 2026, BUDAMA-1010).
> Kural CLAUDE.md'de kısa satır; gerekçe ve vakalar burada — metin BİREBİR, taban `197455c8`.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 9.1 🔴 MOTOR KODU DONDURMA — koşular arası (Emre onayı, 25 Eylül 2026)
Önbelleğin **TUZU** dört dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
`girdi.py` · `motor_onbellek.py`. Biri değişirse **bütün anahtarlar değişir** ⇒
tam yeniden inşa, elle karar yok. Bu bir kusur değil doğruluk sigortasıdır:
motor değiştiyse eski sonuç güvenilmez.
🔴 **AMA ÖLÇÜLDÜ (MOTOR-LEGO-0925):** 19-25 Eylül arasında bu dört dosyaya
**19 commit** girdi ve her koşunun tuzu farklı çıktı (koşu 5 `7c843c40` · 6
`169495a2` · 14 `22742ea1` · 15 `0e8e7049`). Sonuç: **çalışan önbellek
katmanları bile isabet almadı** — koşu 14: `col` 0/549 · `kusat` 0/2437 ·
`dolgu` 8/1920 · `osm` 10/579. Önbellek iki haftadır VARDI ve HİÇ çalışmadı.
📌 Ve 19 commit'in **12'si yalnız `renkler.py` + `girdi.py`**ydi; gövde
hesabı o iki dosyayı **okumuyor** bile (AST ile ölçüldü: 30 işlev/91 ad, renk
okuyan yok). Yani bayatlığın çoğu **boşunaydı**.

**KURAL — üç madde:**
1. **Veri koşusu (yalnız `data/` değişti):** motor kodu **DONDURULUR.** Dört
   dosyaya dokunulmaz — yorum satırı bile. Dokunmak zorundaysan koşuyu
   erteler ya da ② ye geçersin.
2. **Tam inşa koşusu:** biriken motor yamaları **tek seferde** girer, tuz bir
   kez değişir, o koşu zaten sıfırdan inşa eder. Yamalar `denetim/*.diff`
   olarak bekletilir (`git apply --check` temiz tutulur).
3. **Koşu SÜRERKEN dört dosyaya dokunulmaz** — koşu her aşamada motor parmak
   izini sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi).
   🆕 🔴 **KAPSAM (10 Ekim 2026, UMIT sordu): "hiçbir ağaçta" DEĞİL —
   DONAN, KOŞUNUN OKUDUĞU AĞAÇTIR.** Bu madde tek makineli düzende
   yazılmıştı; beş makinede koşu HAVVA'nın kendi worktree'sinde koşar
   (`C:\atlas-kosu22`) ve UMIT'teki bir ÖLÇÜM AĞACI onun girdisi DEĞİLDİR.
   ⇒ Ayrı bir makinede, tek kullanımlık bir ölçüm worktree'sinde tuz
   dosyalarına dokunmak **SERBESTTİR**, dört şartla:
```
   ① 🔴 ÖNBELLEK İZOLASYONU UYGULAMADAN ÖNCE ÖLÇÜLÜR — `MOTOR_ONBELLEK_DIZIN`
      ve varsayılan `<arac>/../_motor_onbellek` yolu koşucunun kullandığıyla
      AYNI OLMAMALI (ağ yolu · OneDrive eşitlemesi · paylaşılan sürücü ⇒ İZİN
      DÜŞER). **Ölçülür, BEYAN EDİLMEZ.**
   ② `uret_petek.py` KOŞTURULMAZ — tuz hash'i tuz İŞLEVLERİ çağrılarak
      hesaplanır
   ③ o ağaç PUSH EDİLMEZ ve ölçüm sonunda KALDIRILIR
   ④ koşu bitene kadar tuz dosyası İÇEREN hiçbir commit `main`e girmez
```
   ⚠️ Kural **gevşemiyor, YERİ DÜZELİYOR:** donma koşunun GİRDİSİNİ korur,
   bir dosya adını korumaz. Ve ① olmadan izin yoktur — paylaşılan bir
   önbellek, ayrı ağaçları **aynı ağaç** yapar.
   📌 Ve bu kuralı bir işçi SORDU, ben yazmamıştım: *"tuza hiçbir ağaçta
   yazılmaz"* ile *"yamalı ağaçta denetle koştur"* talimatlarımı yan yana
   koyup **çelişkiyi bana getirdi** — belirsiz izni kendi lehine
   yorumlamadı. `§7.1 ⑥`nın (*şartname yanlış → hemen yaz*) doğru hâli.
⚠️ **Ve bu kural yazılmadan tutulmadı:** 24 Eylül'de koordinatörün kendisi
`girdi.py`ye dokunup 279 MB'lık önbelleği öldürdü — aynı sabah şartnameye
"motorun tuzuna dokunulmaz" yazdıktan sonra. Kural yazılı olmayan kural değil,
UNUTULAN kuraldır.
📌 Yapısal çare de yolda: geometri katmanlarına (`govde`/`osm`/`sb`) renk ve
girdi listesi İÇERMEYEN ayrı bir tuz (`MOTOR-LEGO-0925` yaması). İndiğinde
bu kuralın yükü azalır ama **kalkmaz**: `uret_petek.py` hâlâ tuzdadır ve
orada OLMALIDIR.
