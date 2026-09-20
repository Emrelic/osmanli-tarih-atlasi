# DENETIM-KAPI-0920 — 2s kapısının MERKEZ (`m:`) kolu düzeltildi · 20 Eylül 2026

**Sonuç: `BEKLENEN_ACIK_S` 201 → 195 · `BEKLENEN_2S_YIL_BORC` 149 → 151.**
Ölçülen açık **191 → 195**. Sayı yükseldi çünkü **ölçüt daraldı** — 4 tarih artık
gerçekten açık sayılıyor. Yükseliş yeni borç değil, **görünür olmuş eski borç**.

Aletler: `py denetim/ARAC-DENETIM-KAPI-0920.py` (dört ölçüt) ·
`--sina` (iki yönlü sınav, çıkış kodu döner).

---

## 1. Kusur neydi

2s kapısının YER kolu `m:`yi **bölge** sanıp merkez adını **gövdede de** arıyordu:

```py
Y_BOLGE = {y["ad"]: _2s_norm(y.get("m") or "") for y in Y}   # eski
...
if bolge and _2s_gecer(o["nrm"], bolge):   # nrm = başlık + yer + GÖVDE
```

Oysa `m:` bölge değil — `VERI-YAPISI.md:120`: *"Bağlı olduğu k1/k2 **merkezinin adı**".*
Bir merkez adının gövdede geçmesi, o merkeze bağlı **her** yerleşimin o maddeyle
açıklandığı anlamına gelmez.

Bu, `_2s_tarafi_aniyor`ın gevşek kolunun çürümesiyle **aynı kusur**, bir kol ötede.
Oranın kendi notu zaten diyor: *"Tek tarafın gövdede teşhis sözü olarak geçmesi
SAYILMAZ — gevşek kol ölçüldü ve çürüdü."* Aynı disiplin merkez koluna uygulandı.

## 2. Önce ayrıştırma — 52 kapanışın kaç tanesi gerçek?

`m:` bacağına borçlu **106** (tarih, yerleşim) çifti bulundu. Sınıflandırma:

| merkez adı nerede geçiyor | çift | hüküm |
|---|---|---|
| maddenin **başlığında** | 69 | gerçek |
| maddenin **`yer_id`si merkezin kendisi** | 14 | gerçek |
| maddenin **`yer` alanında** | 8 | çoğu gerçek, 1 bileşik tuzağı |
| **yalnız gövdede (`d`)** | 15 | 🔴 **tesadüf** |

Tesadüf sınıfının örnekleri — dördünde de madde kırılan yeri **anmıyor**:

```
Beykoz   (m:İstanbul) ← "Anadolu Hisarı'nın yapımı"
Segedin  (m:Budin)    ← "Estergon ve İstolni Belgrad'ın fethi"
Butrint  (m:Yanya)    ← "Preveze'nin Fransızlardan alınışı"
Birlad   (m:Yaş)      ← "Berlin Antlaşması"          (yer: Berlin)
Akra     (m:Musul)    ← "Mondros Mütarekesi"         (yer: Limni adası)
```

**Bileşik yer tuzağı ayrıca bulundu:** Cübeyl/Katîf/Ukayr (m:`Basra`) 1795 kırılması,
"Kuveyt'te Sabah emirliği…" maddesine **"Basra *körfezi*"** kelimesiyle bağlanıp
sessizce kapanıyordu. *Basra körfezi, Basra sancağı değildir.*

## 3. Ölçüt seçimi — dördü aynı boru hattında

| ölçüt | AÇIK | yıl borç |
|---|---|---|
| **A** bugünkü — başlık + yer + **gövde** | 191 | 149 |
| **B** koordinatörün önerisi — yalnız başlık ya da `yer_id` | 198 | 151 |
| **F** ← **seçilen** — başlık + `yer` (bileşik korumalı) **veya** `yer_id` | **195** | **151** |
| **D** bacak tamamen kapalı | 244 | 156 |

🔴 **B'yi almadım ve sebebi ölçüldü: B üç GERÇEK kapanışı bozuyor.**

```
1838-10-13  Berc Bû Areric (m:Cezayir) ← "Setif'in işgali"      yer: "Setif (Sétif), İç Cezayir"
1871-04-20  Cübeyl (m:Basra)           ← Midhat Paşa Necid sef.  yer: "Lahsâ (Ahsâ), Necid, Basra"
1885-02-05  Akīk (m:Sevâkin)           ← "Masavva'nın İtalyan işgali"  yer: "Masavva, Sevâkin, …"
```

Üçünde de merkez maddenin **`yer` alanında adıyla yazılı** — başlıkta olmaması onu
alâkasız yapmıyor. Yalnız başlığa bakmak, maddenin **yer bildirdiği alanı** görmezden
geliyor.

Ama `yer_id` şartı da **gerekli**, çünkü tersi vaka var:
`Baf (m:Lefkoşa) ← "Kıbrıs'ın İngiliz idaresine bırakılması"` — `yer` metni *"Kıbrıs"*,
`yer_id`si *"Lefkoşa"*. Yalnız metne bakan ölçüt bu gerçek kapanışı kaybeder.

⇒ **F = ① başlık/`yer`de geçiyor (bileşik tuzağı hariç) **VEYA** ② `yer_id` merkezin kendisi.**

**F ⊂ B ölçüldü:** F'nin açtığı her tarihi B de açıyor, tersi değil (`F\B = 0`).
Yani F, B'nin kesin olarak daha az zarar veren bir daraltmasıdır.

## 4. F'nin açtığı 5 tarih — beşi de tesadüf

```
1395-08-01  Beykoz                                   (m:İstanbul)
1517-05-19  Benhâ · Bilbîs · Bürüllüs · Demenhûr     (m:Kahire)
1543-08-10  Segedin (Szeged)                         (m:Budin)
1795-04-01  Cübeyl · Katîf · Ukayr                   (m:Basra — "körfezi" tuzağı)
1798-10-23  Butrint (Butrinto)                       (m:Yanya)
```

## 5. İki yönlü sınav — `--sina`, 16 madde, hepsi geçti

🔴 **Sınavın birimi (TARİH, YERLEŞİM) çiftidir — TARİH değil. Bu bir hata yapıp
düzelterek öğrenildi.** İlk yazımda ② tarih biriminde kuruldu ve *"1473-08-11 Kelkit
BOZULDU"* dedi. Ölçüldü: **o tarih daraltmadan önce de açıktı**, çünkü aynı gün kırılan
Karahisâr-ı Şarkî'nin (`m:` boş) maddesi yok. Kelkit'in kendisi iki ölçütte de
açıklanmış (`A=True, F=True`). **Kusur ölçütte değil, sınavın birimindeydi.**

Bu, `denetle.py`nin 121→201 notundaki tuzağın birebir aynısı:
*"tarihi açan SUSAN komşularıydı; sınavın kendi birimi kabaydı — kural değil."*
Belgelenmiş bir tuzağa yeniden düşüldü; sınav artık komşudan bağımsız ölçüyor
(`aciklandi_mi()`).

| | içerik | sonuç |
|---|---|---|
| ① | 5 tesadüfî çift **açılmalı** | 5/5 geçti (`A=True → F=False`) |
| ② | 6 gerçek çift **bozulmamalı** | 6/6 geçti (`F=True`) |
| ③ | F, B'nin alt kümesi mi | geçti (`F\B = 0`) |
| ④ | tavan `denetle.py` ile tutuyor mu | 195=195 · 151=151 |
| ⑤ | **sınavın kendi sınavı** | geçti |

**⑤ niçin var:** hep geçen bir sınav hiçbir şey kanıtlamaz (`CLAUDE.md §11`:
*"yeni denetim iki yönde sınanmadan çalışıyor sayılmaz"*). ⑤ aynı iddiaları **yanlış**
ölçütlere karşı koşar ve **kalmalarını** şart koşar: A'da ①'in 5/5'i hâlâ kapalı,
B'de ②'nin tam 3'ü bozuluyor. Sınavın kör olmadığı böyle gösteriliyor.

## 6. Tavanlar

- **`BEKLENEN_ACIK_S` 201 → 195.** `denetle.py:1853` disiplini: *"ödendikçe tavan İNER."*
  195 ölçülen değerdir; 201'de bırakmak 6 birim sessiz pay tanırdı.
- **`BEKLENEN_2S_YIL_BORC` 149 → 151.** Daralma iki `YYYY-01-01` kırılmasını kapalıdan
  bu deftere taşıdı. 🔴 Güncellenmeseydi denetim *"yeni `YYYY-01-01` kırılması yazılmış
  olabilir"* diye uyaracaktı — **yazılmadı**; sonraki oturum olmayan bir kaydı arardı.

## 7. Bilinen artık (düzeltilmedi, beyan ediliyor)

- **Bileşik koruma yalnız merkez kolunda.** Yerleşimin **kendi** adı hâlâ tam metinde
  (`nrm`) aranıyor ve bileşik koruması yok. Kasıtlı: kendi adı gövdede geçtiğinde bu
  güçlü delildir, çünkü kırılan yerin ta kendisidir. Ama `"… Ovası"`/`"… Adası"` biçimli
  yerleşim adlarında aynı tuzak teorik olarak durur — **ölçülmedi**, ayrı iş.
- **`_2S_CINS` listesi elle yazıldı** (körfez · deniz · dağ · ova · nehir · ırmak · boğaz ·
  ada · vadi · havza · yayla · çöl · kıyı · yol). Veriden türetilmedi; eksik bir cins ismi
  aynı tuzağı yeniden açabilir.
- **Kapsam:** yalnız `yer_sarti=True` ile çağrılan **2s** kolu değişti. Değişmez 2 (`d`/`v`)
  ve 2i (`isg`) bu bayrağı kullanmıyor, dokunulmadı — sayıları birebir aynı kaldı
  (587/0 ve 125/1).

## 8. Değişen dosyalar

| dosya | ne | commit |
|---|---|---|
| `arac/denetle.py` | `_2s_merkez_aniyor` eklendi · `_2s_yeri_aniyor` imzası `Y_BOLGE`→`Y_MERKEZ` · `nrm_y` alanı · iki tavan | **1.MURAT'ta** |
| `denetim/ARAC-DENETIM-KAPI-0920.py` | dört ölçüt + iki yönlü sınav (yeni) | adımla |
| `denetim/DENETIM-KAPI-0920.md` | bu rapor (yeni) | adımla |

`data/` altına **dokunulmadı**. Motor koşusu **yapılmadı**. `CLAUDE.md §1.5`
**yazdırılmadı** (1.MURAT yapacak) — oradaki `2s` satırı artık bayat:
*192 AÇIK (tavan 201)* → **195 AÇIK (tavan 195)**, `YIL-TEMSİLÎ BORÇ` 149 → **151**.
