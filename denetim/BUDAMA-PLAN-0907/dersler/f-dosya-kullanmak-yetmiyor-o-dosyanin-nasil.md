# 🔴 -F <dosya> KULLANMAK YETMİYOR — O DOSYANIN NASIL YAZILDIĞI DA

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 648 token

---

- 🔴 **`-F <dosya>` KULLANMAK YETMİYOR — O DOSYANIN NASIL YAZILDIĞI DA
  KURALIN İÇİNDE.** *(altıncı vaka, 10 Ağustos 2026)*

  `§11` şöyle bitiyordu: *"commit mesajı da dosyaya yazılır ve `git commit -F
  <dosya>` ile verilir. Kaçış içeren hiçbir metin kabuktan geçmez."* Bugün o
  kural **harfiyen uygulandı ve amacı yine çiğnendi:**
  ```
  yapılan   printf '%s\n' "... VERİ DEVLET 2 `toga-timur` künyesi önerdi ..." > c11.txt
            git commit -F c11.txt          ← kural burada SAĞLANDI
  olan      backtick PRINTF'İN ARGÜMANINDA, yani mesaj dosyaya yazılmadan
            ÖNCE bash tarafından çalıştırıldı: "toga-timur: command not found"
  inen      "VERİ DEVLET 2  künyesi önerdi"   ← ÖZNE SİLİNDİ
  git       kod=0 · push kod=0 · ekranda tek uyarı YOK
  ```
  ⚠️ Yani `-F` doğru yerdeydi; **delik bir adım YUKARIDAYDI.** Kural
  *"mesajı kabuktan geçirme"* diyor, ama mesajı **kabukta ÜRETMEK** de aynı
  şeydir — metin `-F`e ulaşmadan çoktan bozulmuştur.

  🟢 **TAM BİÇİM:** mesaj **`Write` aracıyla** dosyaya yazılır, bash o
  dosyaya **hiç dokunmaz**, sonra `git commit -F <dosya>`. Üç adımın üçü de
  şart; ikisi yeterli değil.

  📌 Ve asıl ders `§11`in kendi cümlesinin bir kademe ötesi: orada
  *"kural yetmiyor, ALIŞKANLIK gerekiyor"* deniyordu, sonra *"yeter olan tek
  şey ARACI DEĞİŞTİRMEK"*. Bu vaka üçüncüsünü ekliyor: **aracı değiştirmek de
  yetmiyorsa, ARACIN GİRDİSİNİN nereden geldiğine bakılır.** Doğru alete
  bozuk metin vermek, yanlış alet kullanmakla aynı sonucu verir.

  ⚠️ **Düzeltilmedi, KAYDEDİLDİ:** commit push'lanmıştı ve iki işçi oturum
  canlıydı; paylaşılan depoda geçmişi yeniden yazmak (force-push) bu satırı
  kurtarmaktan pahalıdır. `kavalali` vakasında verilen kararın aynısı.

