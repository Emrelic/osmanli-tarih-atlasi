---
description: Hazır kıta açılışı — adını HAZIR KITA GGAA.SSDD.ss koy, CLAUDE.md + HAZIR-KITA.md oku, HAZIRIM ver, bekçiyi kur, sus
---

CLAUDE.md ve oturumlar/HAZIR-KITA.md oku, harfiyen uygula. Aşağıdaki sıra onların özetidir;
çelişirse HAZIR-KITA.md esastır (bu dosyayı ondan sonra güncelle).

## 0. Ön koşullar — açılmadan önce Emre'nin vermesi gerekenler
- **Model: Opus** (oturum Opus ile açılır — aşağıda §4: gerekirse görevle birlikte aşağı inilir;
  aşağıdan yukarı çıkmak Emre onayı ister, yukarıdan aşağı inmek istemez).
- **Klasör:** `C:\atlas` (proje kökü). İzin modu: auto.
- **Gereken araçlar:** Bash, `py` (Python), `ccd_session_mgmt` (get_session · set_session_title ·
  set_session_model · send_message · list_sessions). Biri yoksa HAZIRIM'a "eksik: <araç>" yaz.
- Başka belge/şartname GEREKMEZ: görevsiz kıtanın şartnamesi `oturumlar/HAZIR-KITA.md`dir;
  görevin şartnamesi görevle birlikte gelir (`oturumlar/<GÖREV-ADI>.md`).

## 1. Adını koy — TEK biçim, saniyesiyle
```bash
date +%d%m.%H%M.%S          # ör. 0910.2101.55  = 9 Ekim, 21:01:55
```
Ad: **`HAZIR KITA <GGAA.SSDD.ss>`** → ör. `HAZIR KITA 0910.2101.55`.
`set_session_title("self", "<AD>")` ile koy, `get_session("self")` ile GERİ OKU.
- Ad **zaten BÜYÜK HARF** yazılır ⇒ pencere adı = tahta adı, dönüşüm yok (Türkçe `ı/İ`
  büyütme tuzağı `CLAUDE.md §4` · ASCII `KITA` bilerek).
- **Niçin saniye:** aynı dakikada açılan kıtalar çakışıyordu — ölçüldü 9 Ekim 2026:
  `Hazır kıta 0910 10502` / `10503` elle ayrıştırılmak zorunda kalındı. Tahta TAM EŞİTLİK arar;
  iki kıta aynı adı taşırsa birinin görevi ötekini uyandırır.
- Pencere adın zaten bu biçimde ise (Emre koyduysa) DEĞİŞTİRME, onu kullan.

## 2. Makineyi ölç, HAZIRIM'ı ona göre ver
```bash
hostname
```
- **EMRELIC** → tahtaya TEK mesaj (Bash ile; PowerShell çok satırı keser):
  `py arac/tahta.py yaz --kim "<AD>" --kime "YILDIRIM BAYEZIT" --mesaj "HAZIRIM · <model> · görev bekliyorum"`
- **Başka makine (UMIT/HAVVA/KASA/LAB)** → `tahta.py` KULLANMA (yerel `main`de push edilemeyen
  commit biriktirir, makinenin tahtasını kilitler — HAZIR-KITA §1.3). HAZIRIM'ı o makinenin
  İRTİBAT oturumuna (`list_sessions` → başlık `<MAKİNE> İRTİBAT`) `send_message` ile TEK satır ver.

## 3. Bekçini kur — Bash, `run_in_background: true`, **`timeout: 7200000`**, Monitor DEĞİL, `2>&1` YOK
`py arac/tahta_bekci.py --kim "<AD>" --cik`
- timeout verilmezse 30 dk'da düşer. 2 saatte `killed` olması SINIRDIR: sessizce aynı komutla yeniden kur.
- **Çıkış 3** = kaynak darboğazı ilanı → YENİDEN KURMA, dur; görev `send_message` ile gelir.

Sonra **DUR.** Ekrana hiçbir şey yazma — "hazırım", "bekliyorum", "bekçi kuruldu" dâhil.

## 4. Görev gelince — ad, bekçi, şartname, MODEL
1. Adını görev adına çevir (`set_session_title`), eski bekçiyi TaskStop, yeni adla yeniden kur.
2. Şartnameni oku (`oturumlar/<AD>.md`).
3. 🔴 **MODELİ İNDİR — işin gerektirdiği EN UCUZ yeterli modele** (`set_session_model("self", …)`).
   Görev mesajı/şartname model söylüyorsa o uygulanır (MODEL koordinatörün işidir, `CLAUDE.md §7.2 ①`);
   söylemiyorsa kıta şartnameyi okuduktan sonra kendisi karar verir ve kararını teslimde bildirir:
   | Model | Ne zaman |
   |---|---|
   | **Opus** (kalır) | kaynak okuma/yorumlama (TDV, akademik), tarih/künye hükmü, kaynak çelişkisi, motor/denetim kodu tasarımı, belirsiz şartname, birden çok dosyayı birbirine karşı ölçmek |
   | **Sonnet** | şartname adım adım net · kaynak HAZIR verilmiş, yalnız işlenecek · araç koşturup sonucu raporlama · tanımlı biçimde veri taşıma · küçük, tarif edilmiş kod yaması |
   | **Haiku** | YALNIZ mekanik, hükümsüz iş: dosya sayma/listeleme, biçim düzeltme, kaynak/tarih kararı İÇERMEYEN toplu yeniden adlandırma |
   - ⚠️ **Haiku kaynak/veri işinde KULLANILMAZ** (`CLAUDE.md §4`: "Küçük model (Haiku) kullanılmaz").
     Bir işte tek bir kaynak hükmü varsa Haiku'ya inilmez.
   - Doğruluk > tasarruf > hız: şüphedeysen BİR ÜST modelde kal. İş ortasında zorlaşırsa yukarı
     çıkmak Emre onayı ister → tahtadan/irtibattan sor, beklerken durma.
4. Teslim TEK mesaj (HAZIR-KITA §4); sonunda kullandığın modeli yaz (`· model: sonnet`).
