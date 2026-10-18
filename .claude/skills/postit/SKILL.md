---
name: postit
description: Haritadaki post-it notlarından (GitHub Issues, etiket harita-notu) sahipsiz BİR notu bu oturuma alır; not arşive gidene kadar bu oturumun uhdesinde kalır. Önceki Claude yorumlarını okuyup devralır, araştırır, düzeltir, raporu ya da soruyu post-it'in altına yazar ve Emre'nin cevabını arka planda bekler (cevap gelince kendiliğinden devam eder). Emre "/postit", "/postit 12" ya da aynı oturumda "devam" yazınca çalışır. 1 not = 1 oturum; iş bitince oturum kendini emekli eder (arşivler).
---

# /postit — bir post-it, bir oturum

Bu oturum **tek bir notun sahibidir** ve not arşive gidene kadar sahibi kalır. Cevap yazmak notu
bırakmaz. Koordinatör yoktur, koordinasyonu etiketler yapar: `oturum:<id>` notun sahibini,
`son:claude|emre` sıranın kimde olduğunu gösterir.

## 1 · Notu al (ya da kendi notuna dön)

Kendi modelini bil (sistem isteminde yazar) ve `--model`e ver: `opus` ya da `sonnet`.
```bash
py arac/not.py al --model sonnet            # bu oturumun notu varsa onu, yoksa sıradaki sahipsiz not
py arac/not.py al 12 --model sonnet         # Emre numara verdiyse
py arac/not.py al 12 --zorla --model opus   # Emre "/postit 12 zorla" dediyse: başka oturumdan devral
```
- Bu oturumun zaten bir notu varsa `al` YENİ NOT ALMAZ, kendi notunu basar ("— devam"). Emre
  aynı oturumda "devam" ya da yeniden `/postit` yazdıysa yaptığın budur: notu oku, son yoruma bak.
- `--zorla` YALNIZ Emre "zorla" yazdıysa ve yalnız numaralı notta kullanılır.
- Sahipsiz not, son yazan kim olursa olsun alınır. Eski notlarda önceki Claude yorumları vardır;
  onları oku ve **kaldığı yerden devral**. Önceki yorum bir düzeltme önerdiyse yapıldı mı diye
  ölç; yapılmadıysa yap. Emre'nin son yorumu neyi soruyor ya da neyi onaylıyorsa iş odur.
- Önceki Claude yorumu YALNIZ Emre'nin verebileceği bir kararla bittiyse ve Emre cevap vermediyse:
  işe girişme, soruyu kısaltıp şıklı olarak yeniden sor (3. adım, `karar-bekliyor`) ve bekle.
- Çıkış **3** → alınacak not yok → **5. adım (emekli ol)**.
- Çıkış 0 → çıktı notun TAMAMIDIR (metin, bağlam JSON'u, bütün yorumlar). Bağlamı yeniden kurma.
- Başka oturumun notuna **dokunma**. Bu oturumda ikinci not alma.

### Model kapısı — oturum kendi modeline bakar
Notu okuyunca, işe girişmeden önce **notun türüne** ve **kendi modeline** (sistem isteminde yazar) bak.
Oturumun modelini kendin değiştiremezsin; yalnız Emre `/model` yazarak değiştirir. Uyuşmazsa
Emre'den çevirmesini iste.

**Opus ister** (motor/geometri notu): zikzak, sivri çıkıntı, ince girinti/koridor, üçgen/üçken
toprak, katmanların üst üste binmesi, ızgara izi, ya da önceki Claude yorumu teşhisi "motor"
koymuşsa. **Sonnet yeter**: tarih/sahiplik/kaynak soruları, yerleşim eksikliğinden doğan boşluklar,
basit arayüz işleri.

| Oturum | Not | Ne yap |
|---|---|---|
| Opus | motor | uyuyor, devam et |
| Sonnet | Sonnet yeter | uyuyor, devam et |
| **Sonnet** | **motor** | dur. Emre'ye tek satır: `#<no> motor notu, bu oturumu Opus'a çevir: /model opus yaz, sonra "devam" yaz.` 3 beep, bitir. |
| **Opus** | **Sonnet yeter** | dur. Emre'ye tek satır: `#<no> Sonnet'e yeter, bu oturumu Sonnet'e çevir: /model sonnet yaz, sonra "devam" yaz.` 3 beep, bitir. |

- Uyuşmazlıkta araştırmaya, yoruma ya da `yanit`e **girişme**. Not bu oturumda kalır
  (`not.py opus` KULLANMA: o notu bırakır). Emre modeli çevirip "devam" yazınca bu oturum notunu
  `al --model <yeni model>` ile geri alır, kapı bu kez uyuşur ve iş başlar. Konuşma geçmişi korunur.
- Emre "bu modelde kal" / "Opus'ta devam" gibi bir şey yazarsa kapıyı bir daha sorma, devam et.
- İşin ortasında Sonnet motora dayandığını görürse de aynısı: bulguyu bir cümleyle söyle, Opus'a
  çevirmesini iste, `yanit` yazma.
- Emin değilsen (not iki türe de benziyor) Opus'ta sorma, devam et; kapı yalnız net uyuşmazlık içindir.


### Oturumun adını göreve göre değiştir
🔴 **Notu okur okumaz, model kapısından ÖNCE** oturumu yeniden adlandır (uyuşmazlıkta da — Emre
modeli çevirmeden önce bile adı görsün). `al` çıktısının sonundaki ">>> ŞİMDİ ADLANDIR" satırı bu
adımın hatırlatmasıdır; atlama. Emre kenar çubuğunda hangi oturumun hangi notta olduğunu adından görsün:
`mcp__ccd_session_mgmt__set_session_title` · `session_id: "self"` ·
`title: "#<no> <yer/konu> <yıl> — <iş>"` (≤ 50 karakter, Türkçe), örn.
`#3 Berat 1281 — sahibi kim` · `#16 Karesi–Saruhan arası boşluk 1334` · `#13 Harita yazıları büyük`.
Araç yüklü değilse önce `ToolSearch` (`select:mcp__ccd_session_mgmt__set_session_title`).
Uygulama onay isterse ya da reddederse ısrar etme, işe devam et. "Devam" turunda yalnız ad hâlâ
`#<no>` ile başlamıyorsa (ilk tur atlandıysa ya da reddedildiyse) bir kez adlandır; başlıyorsa dokunma.
Kalıp sabittir: `#<no> <yer/konu> <yıl> — <iş>`; kendi yorumunu katma.

## 2 · Araştır ve düzelt

CLAUDE.md kuralları aynen geçerlidir (kaynak kuralı, değişmezler, worktree, kilit, push kapısı).
- Dosya değiştireceksen önce `EnterWorktree` (ad: `postit-<no>`). Yalnız araştırıp cevap
  vereceksen worktree açma.
- "Harita yanlış" notunda ilk soru: *orada yerleşim noktası var mı?* (petek motoru)
- Veri değiştiyse: `denetle.py` → `renk_olc.py` → `paketle.py yenile` → `surum_damgala.py` →
  `push_kapisi.py --kim "oturum-<id>"`. Haritaya yansıması HAVVA koşusunu bekler, raporda söyle.
- Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunma;
  motor çaresi gerekiyorsa öner ve sor.
- Token tasarrufu: geniş tarama yok, alt ajan yok (gerçekten gerekmedikçe), dosyanın yalnız ilgili
  kısmını oku.

## 3 · Raporu / soruyu post-it'e yaz

Metni `Write` ile scratchpad'e yaz (heredoc yasak), sonra:
```bash
py arac/not.py yanit <no> --dosya <yol> --durum <durum>
```
`--durum`: `cozuldu` (düzelttim) · `dogru-bulundu` (harita doğruymuş) · `karar-bekliyor` (sana sorum var).
`son:claude` etiketi kendiliğinden konur, sıra Emre'ye geçer. **`--birak` KULLANMA**: not
arşive kadar bu oturumdadır.

Rapor kısa, okur dilinde:
1. **Ne buldum** — kaynakla (TDV bağlantısı), sayıyla.
2. **Ne yaptım** — dosya + commit kısa kimliği; haritada ne zaman görünür (koşu gerekiyorsa söyle).
   Hiçbir şey değiştirmediysen "değişiklik yok" yaz.
3. **Sorum** (varsa) — TEK soru, şıklı (a/b), önerin hangisi. Soru yoksa bu bölümü yazma.

**En altta HER ZAMAN özet** (Emre yalnız bunu okuyup ne yapacağını anlamalı). Üç satır,
her biri tek kısa cümle; teknik terim, dosya adı, kod yok:
```
---
**ÖZET**
- **Hüküm:** Doğru · Yanlış · Kısmen doğru · Belirsiz — <işaret ettiğin yer hakkında bir cümle>.
- **Senden beklenen:** <verilecek karar, tek cümle> · ya da "Yok."
  - **a)** <seçenek — ne olur, tek cümle> **(önerim)**
  - **b)** <seçenek — ne olur, tek cümle>
- **Bilgi:** <ne yapıldı / ne zaman görünür / senin yapman gereken tek iş> · ya da "Yok."
```
Karar Emre'ye kalıyorsa seçenekler özette MUTLAKA tek tek yazılır (2–3 şık, her biri
sonucuyla birlikte tek cümle, önerin işaretli); Emre cevabında yalnız "a" yazabilmeli.
Karar yoksa şık satırlarını yazma.
Örnek: `Hüküm: Yanlış — 1281'de Üsküp Sırp değil Bizans toprağıydı.` ·
`Senden beklenen: Yok.` · `Bilgi: Düzelttim; haritada bir sonraki koşudan sonra görünecek.`

## 4 · Turu bitir ve bekle

- `py arac/kilit.py birak-hepsi --kim "oturum-<id>"` · worktree açtıysan push kapısından geçtikten
  sonra `ExitWorktree` `remove` · arka planda süreç bırakma. (Bunlar her turun sonunda yapılır;
  notun sahipliği ise sürer.)
- 3 beep. Emre'ye tek satır:
  - soru sorduysan: `#<no> → sorum post-it'te. Sitede cevap yazınca kendiliğimden devam ederim.`
  - çözdüysen: `#<no> → <durum>. Uygunsa sitede "Kaldır (arşivle)"e bas; arşivlenince kendimi emekli ederim.`
- **Sonra beklemeye geç** (her iki durumda da): Bash aracıyla, `run_in_background: true`:
  ```bash
  py arac/not.py bekle <no>
  ```
  Beklerken hiçbir şey yapma, poll etme, `sleep` kurma — betik bitince uygulama seni uyandırır.
  Uyandığında çıkış koduna bak:
  - **0** → Emre cevap yazdı; çıktı yeni yorumlarıdır. Notu yeniden `al` ile çekme, çıktıyı oku
    ve 2. adımdan devam et (rapor → `yanit` → yine `bekle`).
  - **10** → not arşive gitti → **5. adım (emekli ol)**.
  - **11** → not artık bu oturumda değil → **5. adım (emekli ol)**.
  - Başka bir çıkış (betik çöktü) → bir kez yeniden başlat; yine çökerse Emre'ye söyle.
- Emre bu oturuma kendisi yazarsa (betik hâlâ çalışırken) önce onun mesajına bak; işin bitince
  bekleme betiği zaten çalışıyorsa ikincisini başlatma.

Arşivi yalnız Emre yapar (`arsivle`'yi yalnız o isterse çağır). Oturum silinir ya da takılırsa Emre
sitede "🔓 Sahipsiz bırak"a basar; 7 gün hiç ses vermeyen oturumun notu da kendiliğinden düşer.

## 5 · Emekli ol (iş bittiyse oturum kendini arşivler)

Emre'nin kalıcı talimatı (16 Ekim 2026): **işi biten oturum kendini emekli eder.** İş bitti demek:
`bekle` 10 (not arşivlendi) ya da 11 (not başka oturuma geçti) verdi · `al` 3 verdi (alınacak not
yok) · Sonnet notu `opus` ile bıraktı. Sırayla:
1. Kilitleri bırak (`py arac/kilit.py birak-hepsi --kim "oturum-<id>"`); worktree açıksa ve
   push edilmemiş iş yoksa `ExitWorktree` `remove`. Push edilmemiş iş varsa EMEKLİ OLMA, Emre'ye söyle.
2. Arka planda süreç kalmasın (bekleme betiği bitmiş olmalı; çalışan varsa `TaskStop`).
3. 3 beep ve tek satır: `#<no> → <arşivlendi | başka oturuma geçti | Opus'a bırakıldı | not yok>. Kendimi emekli ediyorum.`
4. **Son araç çağrısı:** `mcp__ccd_session_mgmt__archive_session` · `session_id: "self"` ·
   `reason: "#<no> bitti"` (yüklü değilse önce `ToolSearch`
   `select:mcp__ccd_session_mgmt__archive_session`). Bu çağrıdan sonra hiçbir şey yazma.
   Uygulama reddederse ya da onay isterse ısrar etme: "Bu oturumu arşivleyebilirsin." de, bitir.
Arşivlenen oturum silinmez; Emre isterse Arşiv listesinden geri açar.
