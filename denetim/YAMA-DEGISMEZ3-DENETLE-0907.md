# YAMA ÖNERİSİ — `arac/denetle.py` · `DEGISMEZ3-0907`

> 🔴 **`arac/denetle.py`ye DOKUNULMADI.** Prototip çalışıyor ve sınandı:
> `denetim/ARAC-DEGISMEZ3-YAMA-0907.py` — **çıkış kodu 0, dört ayak da
> geçti.** Uygulama tek elden, koşu 8'den sonra.
>
> ⚠️ Bu yama uygulanınca `denetim/ARAC-DEGISMEZ3-TABAN-0907.py` kırılır
> (`degismez3`i eski imzayla çağırıyor). O benim aletim, uyarlarım —
> **başka çağıran yok**, ölçüldü: `degismez3` tek yerden (`:3393`),
> `degismez3z` tek yerden (`:3419`).

---

## Y1 · SESSİZ `continue` SAYILSIN VE BASILSIN

### Sorun
```python
denetle.py:1487     m = ix.get(y["m"])
                    if not m:
                        continue          # ← SESSİZ. Sayısı HİÇ basılmıyor.
```
Merkezi atlasta bulunamayan kayıt ölçüme **hiç girmiyor** ve bu bir sonuç
gibi görünüyor. Bugün **4 kayıt**:
```
m:"Üsküb"  → Prizren                                   (atlasta `Üsküp`, b/p)
m:"Lutsk"  → Kovel · Rivne (Równe) · Volodymyr-Volynskyi
                                        (atlasta `Lutsk (Łuck)`, parantezli ek)
```
`§11`: *"`0`, «yok» ile «bakmadım» arasında ayrım yapmaz"* — burada `0` bile
yok, yalnız bir **yokluk** var.

### Çare — imzayı değiştir, AYRI FONKSİYON AÇMA
```python
def degismez3(Y):
    ...
    celiskiler, atlanan = [], {}
    for g in (...):
        for y in Y:
            if not y.get("m"):
                continue
            m = ix.get(y["m"])
            if not m:
                atlanan.setdefault(y["m"], set()).add(y["ad"])   # ← EKLENEN
                continue
            ...
    return celiskiler, {k: sorted(v) for k, v in atlanan.items()}   # ← DEĞİŞEN
```
🔴 **Niçin ayrı bir `degismez3_atlanan()` fonksiyonu DEĞİL:** o zaman aynı
şart iki yerde durur ve ileride biri değişince **sessizce ayrışır** —
`uret_bekleyenler` dersinin (*"iki otorite doğar ve ayrışır"*) birebir
tekrarı olurdu. Şart `degismez3`ün kendi `continue` dalıdır; sayaç da orada
durmalı.

### Çağrı yeri (`:3393`)
```python
celiskiler, atlanan = degismez3(Y)          # ← imza
...                                          # mevcut sayaç bloğu AYNEN kalır
n_atlanan = sum(len(v) for v in atlanan.values())
print(f"Sayaç       ·  merkezi atlasta BULUNAMAYAN kayıt: {n_atlanan} "
      f"({len(atlanan)} ayrı merkez adı)")
if not atlanan:
    print( "               ⚪ 0 — bakılmayan kayıt yok.")
else:
    print( "               🔴 Bu kayıtlar ÇELİŞKİSİZ DEĞİL, ÖLÇÜLMEMİŞ.")
    print( "               Sebep genellikle AD VARYANTI (`§4` eşanlam borcu).")
    for m_ad, kimler in sorted(atlanan.items()):
        print(f"                 m:{m_ad:<16} {', '.join(kimler)[:60]}")
```
⚠️ **SIFIR OLSA BİLE BASILIR** (koordinatör şartı). Sınandı: `m:` alanı
boşaltılmış kopya kümede `0` basıyor ve satır görünüyor.

⚠️ **İhlal DEĞİL, çıkış koduna etki YOK.** `Değişmez 3` zaten bir sayaç
(`:3395` yorumu); bu onun **kapsam** satırı. Tavan koymuyorum — tavan
ölçütündür, sayacın tavanı olmaz.

---

## Y2 · `gercek_kd` BEYANI YANLIŞ **VE BİR SINAV SESSİZCE ÖLDÜ** 🆕

### Sorun — iki katmanlı
```python
denetle.py:3424     if gercek_kd == 0:
                        ...
                        if n3z != n3:
                            ihlal = True
                            print("🔴 `kd_oku` türetmesi BOZUK")   # ← SINAV
                    else:
                        print(f"🟢 {gercek_kd} kayıt gerçek zaman derinliği")
```
`gercek_kd` **0'dan 192'ye çıktı** ve aynı anda iki şey oldu:

**① BEYAN YANLIŞLAŞTI.** Ölçüldü:
```
kd: taşıyan                        192
  tek dönemli                      175  (168'i anlamlı VARLIK penceresi)
  çok dönemli                       17
    k: değişen                       3
    🔴 m: GERÇEKTEN değişen           4  ← `Değişmez 3`ü ÇÖZEN sayı
⇒ beyan borcun ödenen kısmını 48 KAT büyük gösteriyor
```

**② OKUYUCU SAĞLIK SINAVI ÖLDÜ.** `kd_oku` türetmesi bugün bozulsa
**hiçbir dal ötmez** — sınav bir eşiğe değil bir **veri değerine**
(`gercek_kd == 0`) bağlanmıştı ve veri o değeri terk etti.
📌 `§11`in *"bir denetimin kapsamı, doğruluğundan ayrı ölçülür"* dersinin
yeni bir yüzü: dal **doğru çalışıyordu, sonra ÇALIŞMAZ oldu** ve kimse fark
etmedi. Bu, *"denetim var ≠ o soruyu soruyor"* değil ***"denetim vardı,
artık sormuyor"***.

### Çare — iki satır ve BİR SINAV
```python
zamanli, gercek_kd = degismez3z(Y)
m_degisen = sum(1 for y in Y if y.get("kd")
                and len(set(p.get("m") for p in y["kd"])) > 1)
print(f"\nDeğişmez 3z ·  zamansız {n3}  |  zamanlı {n3z}"
      f"  |  `kd:` yazılı {gercek_kd}  |  🔴 `m:` DEĞİŞEN {m_degisen}")
print( "               Borcun ödenen kısmı `m:` DEĞİŞEN sayısıdır;")
print( "               `kd:` yazılı olmak tek başına zaman derinliği DEĞİLDİR.")

# ÖLEN SINAVIN YERİNE — `gercek_kd`ye BAĞLI DEĞİL, yani ölmez
ayrisan = []
for y in Y:
    if y.get("kd"):
        continue                      # gerçek kd: — ayrışması MEŞRU
    for g in KESITLER:
        if girdi.kd_gun(y, g)[1] != y.get("m"):
            ayrisan.append(y["ad"])
            break
if ayrisan:
    ihlal = True
    print(f"               🔴 `kd_oku` TÜRETMESİ BOZUK — {len(ayrisan)} kayıtta")
    print( "               `kd:` YOKKEN kd_gun(m) ≠ m:. Denetim değil OKUYUCU hatası.")
```
🟢 **Yeni sınav `kd:` TAŞIMAYAN kayıtlara bakar** — orada türetme dışında bir
kaynak yok, yani ayrışma **yalnız** okuyucu hatasıyla açıklanabilir. Ve
kayıtlara `kd:` yazıldıkça küme küçülür ama **sıfırlanmaz**, çünkü bugün
3805 kaydın 3613'ünde `kd:` yok.

**Bugünkü ölçüm: ayrışan 0 ⇒ türetme SAĞLAM.** (Ölen sınavın hiç
koşturamadığı şey bu.)

---

## Y3 · AYNI SESSİZ DAL `degismez3z`DE DE VAR — ve KOMŞULARINA BAKARAK bulundu

Koordinatörün dersi (*"bir bayat satır bulunca komşularına bak"*) `denetle.py`nin
**72 `continue` dalına** uygulandı. Aynı desen — *bir kaydı arayıp bulamayınca
sessizce atlama* — iki yerde daha çıktı:

```
:1831  degismez4    🟢 SESSİZ DEĞİL — `kunyesiz.append(...)` ile kovaya konuyor
                       ve raporlanıyor.  ⇒ EMSAL
:2379  degismez3z   🔴 SESSİZ — ve Y1 yaması bunu KAPSAMIYORDU
```

📌 **`degismez4` bu işi zaten doğru yapıyor.** Yani Y1/Y3 bir yenilik değil,
**aynı dosyadaki mevcut emsale hizalama** — kabul gerekçesi bu.

### Ölçüm
```
degismez3  atlanan : 4 kayıt / 2 merkez adı  ['Lutsk', 'Üsküb']
degismez3z atlanan : 4 kayıt / 2 merkez adı  ['Lutsk', 'Üsküb']
İKİ KÜME BUGÜN AYNI ✓
```

🔴 **AMA BUGÜNKÜ EŞİTLİĞE DAYANIP TEK SAYAÇ PAYLAŞTIRMAYIN — zorlandı ve
kümeler AYRIŞTI:**
```
sahte kayıt:  m:None  +  kd:[{… m:"ZZZ-YALNIZ-KD-MERKEZI-QQQ"}]
  degismez3  görür mü : HAYIR     ← m: boş, dal hiç koşmuyor
  degismez3z görür mü : EVET      ← merkez kd:'den geliyor
```
⇒ Bir kayda `kd:` yazılıp içine atlasta olmayan bir merkez konduğu gün
kümeler ayrışır. **İki dal AYRI AYRI sayılır**, tek sayı paylaşılmaz.

📌 `§11`in *"veri penceresi ile künye penceresi ayrı şeylerdir — biri BUGÜNKÜ,
öteki YARINKİ kusuru bulur"* dersinin bu alandaki hâli: bugün eşit olan iki
sayaç, borç ödendikçe (yani `kd:` yazıldıkça) **ayrışacak** — ve ayrışma
beklenen davranıştır.

### Çare
`degismez3z` de `(zamanli, gercek_kd, atlanan_z)` döndürsün ve `atlanan_z`
**kendi satırında** basılsın — Y1'in `atlanan`ıyla aynı satırda değil.

---

## C13 — DÖRT AYAKLI SINAV, KOŞULDU

| ayak | ne sınandı | sonuç |
|---|---|---|
| ③ GİRDİ | `girdi.yukle()` — **gerçek dosyadan**, enjekte değil (77 dosya · 3805 nokta) | ✓ |
| ① GEÇME | yamalı `degismez3` çelişki listesini **birebir** koruyor mu | ✓ 493 = 493, liste aynı |
| ② ATEŞLEME | gerçek veride ötüyor mu · **enjekte** kusuru yakalıyor mu · **sıfır dalı** basıyor mu | ✓ 4 · ✓ yakaladı · ✓ 0 basıldı |
| ④ ÇIKTI | dönüş **dökülerek** okundu (tip · uzunluk · anahtar · değer tipi) ve bağımsız sayımla karşılaştırıldı | ✓ 4 = 4 |

```
SONUÇ: dört ayak da geçti · çıkış kodu 0
```
📌 ②'nin üçüncü dalı (**sıfır**) ayrıca zorlandı: `m:` alanı boşaltılmış bir
kopya kümede sayaç `0` basıyor. Gerçek veride o dal hiç koşmayacaktı —
`§11`in *"zorlanamayan dal, denetimsiz daldır"* kuralı.

---

## ÖLÇMEDİKLERİM — açıkça
- Yamanın **koşu süresine** etkisi: `atlanan` sözlüğü 6 kesitte aynı kaydı
  tekrar ekliyor (`set` yutuyor), maliyeti ölçmedim — ihmal edilebilir
  görünüyor ama **ölçmedim**.
- `ihlal = True` bayrağının Y2'de doğru yere bağlandığı: prototipte
  `ihlal` yok, `denetle.py`nin akışında sınadım **değil**. Uygulayan taraf
  bayrağın kapsamını doğrulasın.
- Y1'in `--ayrinti` bayrağıyla etkileşimi.
