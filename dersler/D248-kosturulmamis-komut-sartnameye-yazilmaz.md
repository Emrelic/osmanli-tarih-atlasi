# D248 — Koşturulmamış komut şartnameye yazılmaz: bir gecede İKİ kez uzak makineyi durdurdu

**Slogan:** 🔴 **Uzak makineye verilen şartnameye, hiç koşturmadığım komutları yazdım — biri hiç olmayan bir davranış iddia etti (`denetle.py` koşuda kendiliğinden koşar), öteki eksik imzayla yazıldı (`kodla.py yay`) ve çıkış 2 verdi. Şartname emirdir; emrin sınanmamış olması işçiyi durdurur ve her duruş bir tur yakar.**

## Vaka — KOŞU 19 şartnamesi, 1 Ekim 2026

`oturumlar/KOSU-UMIT-ACILIS.md` ve `KOSU-DEVIR-CEVRIMI.md`ye koşu sonrası dört
komut yazdım. İkisi tuttu, ikisi tutmadı — ve ikisi de **aynı kökten.**

### ① "koşu `denetle.py`yi kendi içinde koşturur" — ÖLÇMEDEN yazdım

Şartnameye aynen şunu yazdım: *"`denetle.py`yi ELLE koşturma — koşu kendi
içinde koşturuyor."* Ve yasak koydum.

UMIT koşuyu bitirdi, logu taradı: **`Değişmez` ve `SONUÇ` geçen satır 0.**
Yasağa uyduğu için koşturmadı ve izin istedi. Yani *motor o denetimi hiç
koşturmuyordu* ve ben bir YASAĞI olmayan bir davranış üzerine kurmuşum.

🔴 Zarar yalnız gecikme değil: yasak **sahte bir güvence** üretti. Eğer UMIT
sormasaydı koşu "denetlenmiş" sayılacaktı, çünkü şartname öyle diyordu.

### ② `kodla.py yay` — imzayı OKUMADAN yazdım

Şartnameye yazdım:
```
py -X utf8 arac\kodla.py yay          # 492 MiB ham → ~109 MB kodlanmis
```
Gerçek imza (`arac/kodla.py:967`): **`yay <girdi.js> <dizin> <HEDEF>`**, dört
argüman. Üç argümanlı çağrı `len(a)==4` eşiğini geçmez, kullanım metnini basar,
**çıkış 2** verir ve hiçbir dosya yazmaz.

Ve `HEDEF`in varsayılanı KASITLI yoktur — dosyanın kendi yorumu (`:962`) söylüyor:

> 🔴 HEDEF 4. argümandır ve VARSAYILANI YOKTUR — 'yay' 54 MB'lık bir dosyayı iki
> esere çevirip aslını çöpe atmaya hazırlanır; yanlış hedefle koşmak, bir havuzu
> ötekinin adlarıyla yazmak demektir.

⇒ Yani **cevap dosyanın içinde, tam o satırda, gerekçesiyle yazılıydı.** Ben
komutu ezberden yazdım. Dört hedefin dördü ayrı koşar:

```
yay data\devletler_harita.js data devlet    # 171 MB
yay data\donemler.js          data donem    #  56 MB
yay data\petek_govde.js       data govde    #  11 MB
yay data\ufuk_bantlari.js     data bant     # 254 MB
```

(`kodla.py hedefler` tabloyu basar — ezberlenmez, sorulur.)

## DERS

```
🔴 Şartnameye yazılan komut, YAZILMADAN ÖNCE EN AZ BİR KEZ koşturulmuş olmalı.
   Koşturulamıyorsa (uzun, pahalı, yalnız uzak makinede anlamlı) o zaman
   ① imzası `--help` / kaynak satırından OKUNUR ve
   ② şartnameye "imzayı ben koşturmadım, kaynak satırı şu" diye BEYAN edilir.
```

İki alt kural:
- **"Komut şu" ile "komutun davranışı şu" ayrı iddialardır.** ①'de imza doğruydu,
  DAVRANIŞ uyduruldu. ②'de davranış doğruydu, İMZA eksikti. İkisi ayrı ayrı sınanır.
- **Yasak, var olduğu ölçülmüş bir davranışa dayanmalı.** *"Elle yapma, sistem
  yapıyor"* cümlesi, sistemin yaptığı ölçülmemişse bir yasak değil bir DELİKTİR.

📌 Ve `D244`ün aynısı başka eksende: *"bir kuralı yazmak ihlalini önlemez."*
Burada daha kötüsü oldu — **bir kuralı yazmak, olmayan bir şeyi var saydırdı.**
`D204`ün dili: `ölçülemedi ≠ yok ≠ temiz`; buraya bir dördüncüsü ekleniyor:
**`yazıldı ≠ ölçüldü`.**

📌 Bedel ölçüldü: iki duruş, iki soru-cevap turu, uzak makinede ~20 dakika
bekleme. Her ikisi de şartname yazarken **tek bir `--help` çağrısıyla** önlenirdi.

## 🟢 VE İŞÇİNİN DOĞRU DAVRANIŞI — kayda geçsin

KOSU-UMIT iki kez de doğru yaptı: **yasağı çiğnemedi, ölçtü ve bildirdi.**
İkincisinde ayrıca doğru imzayı kaynaktan kendisi buldu, dört hedefi listeledi
ve *"orada da `yay` tek kelime yazılıysa düzelt"* diye şartnamenin öteki
kopyasını da hatırlattı. `§7.1 ⑥` (*"şartname yanlış → hemen yaz"*) tam bunun
içindir ve işledi.

## BAĞLI

`D244` (kural yazmak ihlali önlemez) · `D204` (ölçülemedi ≠ yok ≠ temiz) ·
`D241` (commitlenmemiş kumanda uzak makinede yalan söyler) · `§7.1 ⑥`
