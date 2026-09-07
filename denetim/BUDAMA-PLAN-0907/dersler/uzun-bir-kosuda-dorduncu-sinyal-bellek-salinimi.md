# 🟡 UZUN BİR KOŞUDA DÖRDÜNCÜ SİNYAL: BELLEK SALINIMI — ve sınırı

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 478 token

---

- 🟡 **UZUN BİR KOŞUDA DÖRDÜNCÜ SİNYAL: BELLEK SALINIMI — ve sınırı
  ÖNCEDEN yazılmalı.** *(5 Eylül 2026 · koşu 5b, 18. saat)*

  Koşu tarihî azamiyi (16s09dk) **2 saat 40 dakika** aştı ve *"takıldı
  mı"* sorusu üç sinyalle cevaplanamadı: PID canlı (zayıf) · CPU deltası
  tam çekirdek (*"çalışıyor"* der, *"İLERLİYOR"* demez) · bekçi raporlu
  (yalnız canlılık). Dördüncüsü gözlendi:
```
bellek (MB, sırayla)  192 · 211 · 444 · 482 · 578 · 608 · 688 ·
                      2691 · 2369 · 1892 · 1425 · 1010 · 1038
```
  ⇒ Büyük **salınımlar**: art arda tahsis ve serbest bırakma. Sıkı bir
  döngüde dönen bir süreç tipik olarak **düz** bellek gösterir; salınım
  **aşama geçişlerinin** izidir.

  ⚠️ **VE SINIRI: BU ZAYIF BİR SİNYALDİR.** Bir yeniden-deneme döngüsü de
  salınabilir. ⇒ Tek başına *"ilerliyor"* diye okunamaz; CPU deltasıyla
  **birlikte** okunduğunda *"yeni şeyler hesaplıyor"* ile *"aynı şeyi
  tekrarlıyor"* arasını ayırır — ve ayırdığı tek şey budur.
  📌 Bu, `§11`in *"ölçülemedi ≠ temiz"* ailesine bir **kademe** ekliyor:
  ilerleme hâlâ **ölçülemiyor** (aşama tablosu tamponda), ama artık
  *"hiçbir şey bilmiyorum"* ile *"zayıf bir kanıtım var"* ayrı.

