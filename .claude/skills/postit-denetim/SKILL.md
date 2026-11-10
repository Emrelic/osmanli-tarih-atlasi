---
name: postit-denetim
description: Açık post-it notlarını (GitHub Issues, etiket harita-notu) bu makinedeki oturumlarla eşler; Emre'nin cevap yazdığı hâlde uyuyan sahip oturumları uyandırır, başka makinede takılı, sahipsiz ve Emre'nin cevabını bekleyen notları kısa listeyle bildirir. Emre "/postit-denetim", "post-it denetimi" ya da "uyuyan notlara bak" deyince çalışır. Yalnız okur ve mesaj gönderir; nota dokunmaz.
---

# /postit-denetim — post-it kuyruğuna bir kez bak

Emre'nin isteği (10 Kasım 2026): dertlerini haritaya post-it olarak yazıp oradan takip eder; bu
skill kuyruğun takılmadığını günde bir kez denetler. **Bekçi değildir:** Emre çağırınca bir kez
bakar, döngü/zamanlayıcı kurmaz. Worktree açma, dosya yazma, commit yok.

## 1 · Ölç

```bash
py arac/postit_denetim.py
```
Çıkış **2** (ağ/GitHub) → bir kez yeniden koştur; yine 2 ise "ölçülemedi" de, bitir.
Betik her açık notu tek kovaya koyar (sahip = `oturum:<id>`, cli kimliğinin ilk 6 hanesi, uygulamanın
yerel oturum kayıtlarıyla eşlenir):

| Kova | Anlamı | Ne yap |
|---|---|---|
| UYUYAN | Emre cevap yazmış, sahip oturum o andan beri hiç çalışmamış | 2. adım: uyandır |
| CALISIYOR | sahip oturum cevaptan sonra çalışmış | dokunma |
| BASKA-MAKINE | sahip oturum bu makinede yok (KASA/HAVVA…) | Emre'ye söyle |
| SAHIPSIZ | notu alan oturum yok | Emre'ye söyle: `/postit <no>` ile yeni oturum |
| SENDE | sıra Emre'de | "senden beklenen" satırını aktar |

## 2 · Uyuyanları uyandır

Her UYUYAN not için `SendMessage` (yüklü değilse `ToolSearch` `select:SendMessage`),
`to: "<local_… oturum kimliği>"`, mesaj:

> Post-it #<no>'e Emre cevap yazmış (son:emre), ama bu oturum o andan beri çalışmadı; bekleme süreci
> düşmüş. `py arac/not.py oku <no>` ile son cevabı oku, postit skill'inin 2-4. adımlarıyla devam et
> ve sonunda yeniden `py arac/not.py bekle <no>`i arka planda başlat.

- Oturum **[ARŞİVLİ]** ise mesaj gönderme; Emre'ye "#<no> sahibi arşivde — sitede 'sahipsiz bırak'
  de, sonra `/postit <no>`" yaz.
- Başka oturumun notunu `al --zorla` ile **devralma**, `birak` çağırma, etiket değiştirme. Bunları
  yalnız Emre yapar (sitede "🔓 Sahipsiz bırak", ya da açıkça "zorla" der).

## 3 · Rapor (Türkçe, kısa)

Kovaları şu sırayla, her not tek satır, oturumları `[başlık](#local_…)` bağlantısıyla:
1. **Uyandırdıklarım** — #no, konu.
2. **Başka makinede takılı** — #no, `oturum:<id>`; öneri: o makinede oturum açıksa "devam" yaz,
   kapandıysa sitede "sahipsiz bırak".
3. **Sahipsiz** — #no; öneri: `/postit <no>`.
4. **Senden bekleyenler** — #no + "senden beklenen" cümlesi. "Yok." diyenleri ayrı topla:
   "işi bitmiş, sitede arşivleyebilirsin".
Boş kovayı yazma. Sonra 3 beep:
`powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"`
