# 🔴 BİR KURALIN YAZILI OLMASI, UYGULANDIĞI ANLAMINA GELMİYOR — ve ihlaller

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 777 token

---

- 🔴 **BİR KURALIN YAZILI OLMASI, UYGULANDIĞI ANLAMINA GELMİYOR — ve ihlaller
  GİDEREK SESSİZLEŞİYOR.** `§11`in *"kaçış içeren hiçbir düzeltme bash'ten
  geçirilmez"* kuralı 8 Ağustos'ta **dört oturumun dördü tarafından da**
  ihlal edildi (koordinatör beş kez). Ama asıl bulgu sayı değil **dizilim**:
  ```
  ① betik patladı                        gürültülü — hemen görülür
  ② betik patladı                        gürültülü
  ③ metin sessizce boşaldı               sessiz — gözle bulunur
  ④ commit BOŞA GİTTİ ama "başarılı" BASTI   ← EN TEHLİKELİSİ
  ```
  Dördüncüsünde `git commit` backtick yüzünden hiç çalışmadı, **ama ekrana
  "commit tamam" yazıldı.** Fark edilmeseydi o oturumun bütün raporu
  commit'siz kalacaktı — yani **rapor vardı, dayanağı yoktu.**
  ⇒ *"Patlayan → sessizce bozan → başarılı görünen."* Aynı kural, giderek
  daha zor fark edilen üç biçimde çiğnendi.
  📌 Teşhis RENK 2'nin: ***"Kural yetmiyor, ALIŞKANLIK gerekiyor."***

  🔴 **VE KURAL, KENDİ COMMIT'İNDE BEŞİNCİ KEZ ÇİĞNENDİ — aynı gün, aynı saat.**
  Yukarıdaki dersi yazan commit'in mesajı `py -c "…"` ile kabuktan geçirildi
  ve içindeki `` `kavalali` `` backtick'i **çalıştı**:
  ```
  yazılan  "Ve aynı gün bedeli ölçüldü: `kavalali` bir yıl boyunca…"
  inen     "Ve aynı gün bedeli ölçüldü:  bir yıl boyunca…"
  git      kod=0 · push kod=0 · ekranda hiçbir uyarı YOK
  ```
  Cümlenin **öznesi silindi**, commit *"başarılı"* göründü, ve kusur ancak
  `git log` okunarak bulundu. ⇒ Dizilimin dördüncü basamağının **canlı
  örneği**, ve dersi yazan metnin kendisinde.
  ⚠️ **Düzeltilmedi:** commit push'lanmış ve üstüne başka bir oturum commit
  atmıştı; geçmişi yeniden yazmak paylaşılan index'te daha pahalıdır. **Kusur
  silinmedi, KAYDEDİLDİ** — bu satır onun kaydıdır.
  📌 Ve asıl ders şu: **kuralı bilmek, hatta o anda yazıyor olmak bile
  yetmiyor.** Yeter olan tek şey **aracı değiştirmek**: metin `Write` ile
  dosyaya yazılır, `git commit -F <dosya>` ile verilir, kabuk hiç görmez.
  **Çare:** commit mesajı da dosyaya yazılır ve `git commit -F <dosya>` ile
  verilir. Kaçış içeren hiçbir metin kabuktan geçmez — **ne veri, ne betik,
  ne commit mesajı.**

