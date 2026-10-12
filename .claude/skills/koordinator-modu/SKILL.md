---
name: koordinator-modu
description: Atlas'ın eski koordinatör/işçi/tahta/bekçi düzenini BU OTURUM için geri açar ya da kapatır. Yalnız Emre "/koordinator-modu ac" ya da "/koordinator-modu kapat" deyince, ya da açıkça "koordinatör moduna geç/çık" dediğinde kullanılır. Olağan düzen (bir iş = bir oturum + alt ajan) CLAUDE.md'dedir; bu mod ara sıra açılan bir istisnadır.
---

# Koordinatör modu — aç / kapat

12 Ekim 2026'dan beri olağan düzen: **bir iş = bir oturum + gerekirse alt ajan** (CLAUDE.md).
Eski düzen (koordinatör → işçi oturumlar, tahta, bekçi, hazır kıta) silinmedi, UYUTULDU.
Bu skill onu **çağıran oturum için** geri açar. Argüman: `ac` | `kapat` | (boş ⇒ `durum`).

Mod dosyası: `oturumlar/MOD.json` (yerel, depoya girmez). Varsa mod AÇIKTIR.

---

## `ac`

Adımları SIRAYLA yap, her çıkış kodunu oku; biri düşerse DUR ve Emre'ye söyle.

1. **Ağaç güncel mi:** `git fetch origin --quiet && git rev-list --count HEAD..origin/main` → 0 değilse önce güncelle.
2. **Aletler hâlâ çalışıyor mu** — uyutulan alet çürür; kullanmadan önce SINA:
   ```bash
   py denetim/ARAC-KILIT-SINAV-1011.py
   py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py
   py denetim/ARAC-TAHTA-BEKCI-SUNUCU-SINAV-1010.py
   ```
   Düşen sınav varsa o parçayı KULLANMA; "şu alet bozulmuş" diye Emre'ye bildir, gerisiyle devam
   edip etmeyeceğini sor.
3. **Kuralları yükle** — yalnız şu bölümleri oku (toplu okuma yok):
   - `arsiv/ESKI-PRENSIPLER-1012.md` **satır 269–451** (§7 oturum düzeni · §7.1 haberleşme ve
     TOKEN KURALI · §7.3 atama protokolü · §7.2 token zinciri, bekçi).
   - İşçi açacaksan: `oturumlar/HAZIR-KITA.md` (işçinin açılış şartnamesi).
   CLAUDE.md'nin bugünkü kuralları (veri, kaynak, kilit, worktree, push kapısı) **geçerli kalır**;
   arşivle çelişirse BUGÜNKÜ CLAUDE.md kazanır. İki istisna: bu modda işçi oturum ve tahta kullanılır.
4. **Tahta sunucusu:** `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8788/` ile bak;
   kapalıysa hangi makinede açılacağını Emre'ye sor (`py arac/tahta_sunucu.py`, sessiz: `pythonw`).
   Kendin başka makinede sunucu AÇMA.
5. **Mod dosyasını yaz** (`Write` ile):
   ```json
   {"mod": "koordinator", "acan": "<oturum adı>", "ne_zaman": "<YYYY-MM-DD HH:MM>", "gerekce": "<Emre'nin sebebi>"}
   ```
6. **Bekçini kur** (yalnız tahtadan mesaj bekleyeceksen): Bash `run_in_background` ile
   `py arac/tahta_bekci.py --kim "<AD>" --cik` — çıkınca mesajı işle, sessizce yeniden kur.
7. Emre'ye tek satır: *"Koordinatör modu AÇIK — sınavlar: …, tahta: …, bekçi: …"* + 3 beep.

**Mod açıkken hatırla:** işçi oturumlar yine kendi worktree'lerinde çalışır ve `main`e yine
yalnız `py arac/push_kapisi.py`dan gidilir. Alt ajanla yapılabilecek işe işçi oturum açma —
oturum yalnız başka makine / saatler süren / Emre'yle konuşacak iş içindir.

## `kapat`

1. Açık teslimi ya da sorusu olan işçi var mı — tahtadan bak; varsa önce Emre'ye söyle.
2. İşçilere tahtadan tek mesaj: *"Koordinatör modu kapandı; teslimini yaptıysan bekçini öldür."*
3. **Kendi** bekçini durdur (TaskStop — yalnız kendi başlattığın görev; başka süreç öldürme).
4. `py arac/kilit.py birak-hepsi --kim "<AD>"`.
5. `oturumlar/MOD.json`u sil.
6. Emre'ye tek satır: *"Koordinatör modu KAPALI — açık kalan: …"* + 3 beep.

## `durum`

`oturumlar/MOD.json` var mı, varsa içeriği · tahta sunucusu cevap veriyor mu · bu makinede
`tahta_bekci.py` süreci var mı (yalnız listele, öldürme) — üçünü sayıyla söyle.
