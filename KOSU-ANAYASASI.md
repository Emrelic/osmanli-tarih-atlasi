# KOŞU ANAYASASI — TASLAK (Emre onayı bekliyor)

HAVVA · 27 Kasım 2026 · dayanak: `denetim/KOSU-SORUSTURMA-1127.md` (Koşu 40 adli incelemesi).
Bu belge **ilkeleri ve kontrol listelerini** taşır; komut ayrıntısı, bayrak listesi ve iniş zinciri
`KOSU-YAYIN.md`dedir (çelişirse KOSU-YAYIN.md komutta, bu belge kuralda esastır). Onaylanınca
`CLAUDE.md` "Komutlar" bölümüne tek satırlık atıf eklenir.

Sıra: **sağlamlık → az kaynak → hız.** (Emre, 27 Kasım 2026: "Koşu 6 saatte koşacağına 24 saatte
koşsun gerekirse.")

## 1. İlkeler

1. **Yalnız gerekeni hesapla.** Değişmeyen girdinin sonucu önbellekten gelir. Tuz dosyasına
   (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py` · Ⓑ için `dolgu.py`) dokunmak
   tam yeniden inşadır; bilerek ve tek seferde yapılır.
2. **Bitirdiğini bırak.** Bir aşamanın yalnız kendisinin kullandığı yapı aşama sonunda boşaltılır.
   Sınırsız ezber olmaz: her ezberin tavanı ve logda "atılan" sayacı vardır.
3. **Diske akıt, belleğe yığma.** Sonuç üretildikçe diske yazılır; bellekte yalnız o an işlenen
   dilim durur.
4. **Hiçbir çıktı bir sonraki aşamanın rehinesi olmaz.** Bir aşamanın çıktısı, o aşama biter bitmez
   diske yazılır. (Koşu 40: `donemler.js` ve `petek_govde.js` Ⓑ dolgudan SONRA yazılıyordu; Ⓑ
   bitmeyince 21,5 saatlik A çıktısı da diske inemedi.)
5. **Tam koşuda ilk deneme yapılmaz.** Yeni bir aşama ya da yama, tam koşuya girmeden önce dar
   dilimde (≥3 ayrı çağdan ≥20 kesit/gün) koşturulur; birim süre ölçülür, tam koşu süresi ve tepe
   bellek **yazılı** tahmin edilir. Tahmini olmayan yama koşuya girmez. (Koşu 40: Ⓑ yaması 18 Kasım'da
   yazıldı, 19 Kasım'da tam koşuya girdi; 7,6 günde yarısını bitirebildi.)
6. **Sayaçsız aşama koşuya giremez.** 10 dakikadan uzun sürebilecek her aşama en geç 5 dakikada
   bir "kaçıncı birim / toplam birim / tahminî kalan" basar. (Koşu 40 Ⓑ: kesit sayacı yoktu; 6 gün
   boyunca "takıldı mı, yavaş mı" ölçülemedi.)
7. **Süre bütçesi ve durdurma ölçütü koşudan önce yazılır** (§3). Koşu başlatma ve durdurma kararı
   Emre'nindir; ölçüt, kararın hangi sayıyla isteneceğini belirler.
8. **Bir koşu, bir değişken.** Aynı koşuda hem motor yaması, hem yeni aşama, hem yeni işletim ayarı
   (işçi sayısı, öncelik) ilk kez denenmez; denenecekse hangisinin neyi bozduğu ayrılamayacağı
   koşudan önce Emre'ye yazılır.
9. **Ölçülmedi ≠ yok ≠ temiz.** Koşu karnesindeki her sayı bir log satırına ya da ölçüm komutuna
   dayanır.

## 2. Koşudan önce — kontrol listesi

Koşucu oturum sırayla ölçer, sonucu koşu karnesine (§5) yazar. Bir madde tutmuyorsa koşu başlamaz
ya da Emre'ye sayıyla sorulur.

**Girdi (otobüs kuralı, §6)**
- [ ] Kesme anı ilan edildi; kesme anından önce `origin`e itilmiş dallar KASA'da `main`e indi.
- [ ] `git fetch` sonrası koşu ağacı `origin/main`in ilan edilen commit'inde; ağaç temiz.
- [ ] Push kapısı o commit'te temiz geçmiş (`denetle` 0).
- [ ] Bekleyen motor yamaları (`denetim/*.diff`) tek seferde uygulandı; her birinin dar dilim
      provası ve süre/bellek tahmini var (İlke 5).

**Ayar**
- [ ] Bayrak listesi `KOSU-YAYIN.md` ile satır satır karşılaştırıldı; bayrak dosyası koşu klasörüne
      yazıldı.
- [ ] Önbellek: dizin, boyut, tuzun geçen koşuyla aynı mı farklı mı olacağı (log satırı
      "tuz geçen koşudan FARKLI" bekleniyor mu) yazıldı. Tuz farklıysa süre tahmini soğuk koşuya
      göre yapıldı.
- [ ] İşçi sayısı boş RAM'e göre seçildi: `MOTOR_SUREC_ISCI=N` her işçi için ana süreç kadar bellek
      ister. Ölçülmüş tepe × N + 8 GB (makine payı) > fiziksel RAM ise N düşürülür. Şüphede N=1.
- [ ] `veri-kaynak/yukseklik/*.tif` yerinde; `_petek_devam/` altında eski iz varsa dosyaları tek tek
      `pickle.load` ile sınandı.

**Makine**
- [ ] Çalışan başka motor yok (`kosu_kilit`); arka planda ağır oturum yok.
- [ ] Boş disk ≥ 60 GB (önbellek + çıktı + yedek); çıktı parçalarının 100 MiB eşiğine payı ölçüldü.
- [ ] Sayfa dosyası sabit boyutta ve commit tavanı = RAM + sayfa dosyası ≥ beklenen tepe özel
      bellek + 10 GB.
- [ ] Windows güncelleme yeniden başlatması koşu süresince ertelendi; uyku/hazırda bekletme kapalı.
- [ ] Eczane takvimi: mesai ve nöbet saatleri yazıldı; mesaide öncelik betiği devrede
      (`eczane-oncelik` kuralı).
- [ ] Güç: UPS varsa durumu, yoksa "yok" yazıldı. `MOTOR_DEVAM=1` açık.

**Beklenti (yazılı)**
- [ ] Aşama başına beklenen süre (son tamamlanan koşunun bilançosundan) ve toplam bütçe.
- [ ] Beklenen tepe çalışma kümesi ve tepe özel bellek.
- [ ] Durdurma ölçütleri (§3) bu koşu için sayıyla.

## 3. Koşu sırasında

- **Nöbet:** koşucu oturum 60 dakikada bir ölçer: süreç canlı mı, hangi aşama, sayaç ilerledi mi,
  çalışma kümesi, özel bellek, boş commit payı, boş RAM, eczane CPU'su. Ölçüm koşu klasöründeki
  nöbet loguna satır olarak yazılır. Nöbet koşuyu etkilemeyen hafif okumadır.
- **Emre'ye sayıyla haber verilecek haller** (karar Emre'nin):
  1. Bir aşama yazılı bütçesinin **2 katını** aştı.
  2. Sayaç **60 dakikadır** ilerlemiyor.
  3. Boş commit payı **< 5 GB** ya da boş RAM iki ölçümde **< 1 GB**.
  4. İşçi süreç çöktü (koşu sürer; çökme olayı, devlet ve bellek durumu kaydedilir).
  5. Toplam süre yazılı bütçenin **1,5 katını** aştı.
- **Durdurma önerisi** (Emre onayıyla): aşama bütçesinin 3 katı aşıldı ve sayaçtan hesaplanan kalan
  süre toplam bütçeden büyük. Durdurmadan önce önbellek ve o ana dek yazılan çıktılar yedeklenir.
- Koşu sürerken tuz dosyası içeren commit `main`e girmez; koşu klasörüne elle dokunulmaz.
- Eczane işi hiçbir koşulda sekteye uğramaz; mesaide koşu Idle öncelikte, Claude + Python ≤ %25 CPU.

## 4. Koşu sonrasında

- [ ] İniş zinciri beklemeden başlar (`KOSU-YAYIN.md`); `main`e itme KASA'dadır.
- [ ] Koşu karnesi (§5) doldurulur ve `denetim/`e teslim edilir; aşama bilançosu bir önceki
      tamamlanan koşuyla kıyaslanır (eksik aşama ⇒ yayına aday değil).
- [ ] Temizlik: işçi ara dizinleri (`%TEMP%\petek_surec_*`), `_petek_devam/<iz>` (başarıyla bittiyse
      motor siler; kaldıysa neden kaldığı yazılır), nöbet/öncelik betikleri durduruldu, kilit bırakıldı.
- [ ] Önbellek: boyut ölçülür; kullanılmayan kayıt budanır (`MOTOR_ONBELLEK_BUDA_GUN`).
- [ ] Eski koşu klasörleri: son tamamlanan koşu ve bir önceki saklanır; daha eskileri Emre'ye
      listelenir (silme kararı Emre'nin).
- [ ] Yarım kalan koşu: `BORC-DEFTERI.md`ye "durduruldu / çöktü / bitmedi" ayrımıyla yazılır;
      neyin kurtarıldığı (önbellek, ara çıktı) dosya yolu ve boyutla belirtilir.

## 5. Koşu karnesi (her koşu için tek sayfa)

| Alan | Değer |
|---|---|
| Koşu no · klasör · makine | |
| Taban commit · tuz (genel/geo/dolgu) · geçen koşuyla aynı mı | |
| Bayraklar (tam liste) | |
| Girdi boyu: yerleşim · devlet · dönem · kırılma · Ⓑ kesit sayısı | |
| Başlangıç · bitiş · toplam süre · bütçe | |
| Aşama süreleri (duvar / işlemci) | |
| Önbellek isabet/ıska (katman katman) · önbellek boyu | |
| Tepe çalışma kümesi · tepe özel bellek · en düşük boş RAM · en düşük commit payı | |
| İşçi sayısı · çökme · uyarı sayıları | |
| Sonuç: tamamlandı / durduruldu / çöktü · iniş commit'i | |
| Ölçülemeyenler | |

## 6. Otobüs kuralı

Koşu, yeni veri beklemek için ertelenmez; otobüs saatinde kalkar, yetişmeyen bir sonrakine biner.

- **Kesme anı:** koşudan önce ilan edilen gün ve saat. O ana dek `origin`e itilmiş ve KASA'nın
  kapıdan geçirdiği dallar koşuya girer; sonrası bir sonraki sefere kalır.
- **Sefer aralığı:** bir koşu bitip inişi yapılmadan yenisi başlamaz; iniş biter bitmez bir sonraki
  kesme anı ilan edilir.
- **İstisna:** yalnız yayını bozan bir hatanın düzeltmesi kesme anını kaydırabilir; kararı Emre verir.
- Kesme anından sonra gelen veri "yetişmedi" diye `BORC-DEFTERI.md`ye yazılmaz; olağan kuyruktur.

## 7. Motoru değiştirme kuralı

- Değişiklik ayrı dalda yapılır; `py arac/motor_esitlik.py kiyas` ile **iki yönde** sınanır (aynı girdi
  ⇒ bayt bayt aynı çıktı; bilerek bozulan girdi ⇒ fark görülür).
- Yalnız bellek/hız değişikliği çıktıyı değiştirmez; değiştiriyorsa o bir kural değişikliğidir ve
  Emre'nin ayrı onayını ister.
- "Hızlandı" ve "bellek düştü" yalnız ölçümle yazılır: aynı girdi, aynı makine, önce/sonra sayıları.
