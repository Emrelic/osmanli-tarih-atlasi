# KİLİT KANCASI — KURULUM (yalnız Emre yapar)

> Emre, 11 Ekim 2026: *"2 numarada ne yapmam lazım, settingsden ayarlamam mı
> lazım. bir dosya iki işçi tarafından kapılmasın diye ayar mı yapmam lazım,
> ne yapmam lazım."*

**Evet — tek bir dosyaya tek bir blok eklemek.** `settings` senin alanın;
hiçbir oturum (koordinatör dâhil) ona dokunmaz. Bu dosya sana **ne
yapıştıracağını** verir, o kadar.

---

## 1. NEYİ ÇÖZÜYOR — ve neyi çözmüyor

| | |
|---|---|
| ✅ İki oturum **aynı dosyaya aynı anda yazamaz** — ikincisi engellenir, sıraya girer |
| ✅ Serbest bir dosya **ilk yazmada kendiliğinden kilitlenir** — oturumun hatırlamasına gerek yok |
| ✅ Engellenen oturum ekrana şunu basar ve sana bildirir: *"BU DOSYA ŞU ANDA KULLANIMDA, KULLANIM BİTENE KADAR BEKLİYORUM"* + sıradaki yeri |
| ✅ Birinci bitirince **sıradaki kendiliğinden alır** ve devir **tahtaya yazılır** |
| ❌ **Makineler arası DEĞİL** — kilit bu makineye aittir. KASA'daki bir kilit EMRELIC'te görünmez (beyanlı sınır) |
| ❌ Okuma engellenmez — yalnız `Write` · `Edit` · `MultiEdit` · `NotebookEdit` |

🔴 **Kanca KURULMADAN da `arac/kilit.py` çalışır** — ama o zaman oturumun
kilidi *kendisi istemesi* gerekir, yani bir **dilek**tir. Kanca onu bir
**kapı** yapar: unutmak mümkün olmaz. (Bu projede *"jetonu sohbete yazma"*
uyarısı yazılıydı ve sızıntı ona RAĞMEN oldu — **bir uyarı bir denetim
değil bir dilektir.**)

---

## 2. YAPILACAK — `C:\atlas\.claude\settings.json`

Dosyada **şu an** böyle bir blok var (§11 backtick nöbetçisi):

```json
"hooks": {
  "PreToolUse": [
    { "matcher": "Bash",
      "hooks": [ { "type": "command", "command": "py arac/kabuk_nobetci.py",
                   "timeout": 15, "statusMessage": "§11 nobetcisi" } ] }
  ]
}
```

🔴 **O bloğu SİLME. Yanına İKİNCİ bir kayıt ekle** (virgülle):

```json
"hooks": {
  "PreToolUse": [
    { "matcher": "Bash",
      "hooks": [ { "type": "command", "command": "py arac/kabuk_nobetci.py",
                   "timeout": 15, "statusMessage": "§11 nobetcisi" } ] },
    { "matcher": "Write|Edit|MultiEdit|NotebookEdit",
      "hooks": [ { "type": "command", "command": "py arac/kilit_kanca.py",
                   "timeout": 15, "statusMessage": "dosya kilidi" } ] }
  ]
}
```

📌 Yol **göreli** (`py arac/...`) — mevcut kayıtla aynı üslup; çalışma dizini
projedir. Mutlak yol da çalışır ama iki üslubu karıştırmak, bir gün biri
taşındığında hangisinin bozulduğunu gizler.

⚠️ Kanca **yeni oturumlarda** yürürlüğe girer; açık oturumlar eski ayarla
devam eder.

---

## 3. ÇALIŞTIĞINI NASIL GÖRÜRSÜN

```bash
py arac/kilit.py durum
```

Kurulumdan sonra bir oturum bir dosyaya yazdığında o dosya burada **sahibiyle**
görünür. İki oturum aynı dosyayı istediğinde ikincisinin ekranında engelleme
cümlesi çıkar ve `durum` çıktısında **sıra** satırı belirir.

🟢 Aletin kendi sınavı (37 madde, iki yönde):

```bash
py denetim/ARAC-KILIT-SINAV-1011.py
```

Çıkış **0** olmalı. Bu sınav gerçek kilit dosyasına ve gerçek tahtaya
**dokunmaz** (geçici dizinde koşar) — ve dokunmadığını **ekrana basarak**
söyler, çünkü *sessiz bir kaçış kapısı, kapı olmayan bir kapıdır.*

---

## 4. BİR ŞEY TERS GİDERSE

- **Kapatmak:** eklediğin ikinci kaydı sil, oturumu yeniden aç.
- **Bir dosya takılı kaldıysa** (sahibi durmuş): kilit **kendiliğinden
  DÜŞMEZ** — bu kasıtlı. `kosu_kilit.py` bunu bir kez *"en uzun makul koşu
  4 saat"* tavanıyla öğrendi ve koşu **16 saat 09 dakika** sürdü: **yaş bir
  vekildir.** Düşürmeyi insan yapar ve gerekçesi kayda geçer:
  ```bash
  py arac/kilit.py zorla-birak <dosya> --gerekce "sahibi 6 saattir sessiz"
  ```
- **Çıkış kodları:** `0` kilit sende · `1` başkasında, sıradasın · `2`
  **ÖLÇÜLEMEDİ — yazma** · `3` yanlış kullanım.
  🔴 `2`nin yönü kasıtlı: ölçemediğimizde dosyayı **serbest değil MEŞGUL**
  sayıyoruz. Ters yön iki oturumu aynı dosyaya sokar; bu yön yalnız bekletir.

---

## 5. MUAF TUTULANLAR — ve niçin

`oturumlar/kilit.json` · `oturumlar/tahta.json` · `oturumlar/defter.json` ·
`oturumlar/TAHTA.md` kilitlenmez. Bunlar **aletlerin kendi kayıt
dosyaları**; kilitlenirse tahta ile kilit birbirini kilitler. Bir aracın
kaydını başka bir araçla korumak **döngü** üretir — ve döngüyü yazdığın gün
değil, iki alet aynı anda koştuğu gün görürsün.

Kapsam da sınırlı: `data/` · `arac/` · `denetim/` · `oturumlar/` · `js/` ·
`css/` · `dersler/`. scratchpad, geçici dosya, başka depo **serbest** —
kilit bir çakışma aletidir, bir yasak aleti değil.
