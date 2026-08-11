# NOKTA HALKA-1 — Çanakkale/Marmara kıyısının dört noktası

## ⓪ KİMLİK — HADDİN

**SEN:** yerleşim araştırma oturumu, adın **NOKTA HALKA-1**.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtamazsın, oturum açamazsın,
üretim koşusu başlatamazsın.
**ÜSTÜN:** ClaudEmre koordinatörü (sana bu mesajı gönderen oturum).
**ALTIN:** kimse.
**YASAKLARIN:** `arac/` altına yazmak · `data/yerlesimler.js`e yazmak ·
`py arac/uret_petek.py` koşturmak · başka bir `oturumlar/` dosyasını
commit'lemek.

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

Kullanıcı (Emre) 14 ayrı şikâyette Çanakkale-Marmara kıyısında **olmaması
gereken Osmanlı toprak parçaları** gördü. Ölçüldü:

```
14 şikâyet  →  8'i zaten kapalı  ·  5'i AÇIK  ·  toplam 1.798 km²
motor kusuru: 0        (motor doğru çalışıyor)
sebep: o kıyı şeridinde HİÇ YERLEŞİM NOKTASI YOK
```

`CLAUDE.md §2`: *"Noktası olmayan bölge, en yakın peteğe emilir ve O
PETEĞİN SAHİBİYLE boyanır."* Yani kusur veride değil, verinin **yokluğunda**.

Emre'nin son sözü (parti-emrelic-0011/H-0002, birebir):
> *"BİRİNCİ FOTOGRAFTA BAK BİR SÜRÜ HATA VAR ŞARKÖY TARAFI VE ÇANAKKALENİN
> KARŞI KIYISI KARESİ İLHAKI İLE ALINMIŞ GİBİ UFAK BİR TOPRAK PARÇASI
> GÖRÜNÜYOR. İKİNCİ FOTOGRAFTA ÇİMPE KALESİ ELE GEÇTİĞİNDE BU SEFER SAROZUN
> KUZEYİNE VE GENE ŞARKÖYDE GÖRÜNEN ŞÜPHELİ OSMANLI TOPRAK PARÇASI VAR"*

---

## ② İŞİN — dört nokta, sırayla

| # | yer | niçin |
|---|---|---|
| 1 | **Behramkale (Assos)** | Edremit körfezi kuzey kıyısı — Karesi ilhakında karşı kıyı boş kalıyor |
| 2 | **Boğaziçi (Beykoz civarı)** | Boğaz'ın Anadolu yakası — noktasız, Rumeli'den emiliyor |
| 3 | **Karabiga karşısı (Şarköy)** | Marmara'nın Rumeli yakası — Emre'nin ikinci kez saydığı yer |
| 4 | **Bolayır karşısı** | Saroz'un kuzeyi — Çimpe görüntüsündeki şüpheli parça |

Her nokta için **şu alanlar** doldurulur (`VERI-YAPISI.md` şeması):
`ad · lat · lon · tur · kur (varsa) · k (kademe) · m` ve **zaman çizgisi**
(`s:` yabancı dönemler · `d:` doğrudan Osmanlı · `v:` tâbi).

### 🔴 Yazmadan önce ZORUNLU üç ölçüm

```
① 3 KM KURALI      py ile mevcut 2308 noktayı tara, 3 km içinde başka
                   nokta var mı. Varsa YENİ NOKTA YAZMA — Emre'nin
                   `§11` "yakın mükerrer yerleşim" tuzağı
② DEVLET ÖMRÜ      `s:` yazdığın her kimlik `data/devletler.js`te o
                   tarihte YAŞIYOR mu (`§3.5` hayalet devlet)
③ RENK VAR MI      kimlik `arac/renkler.py` BOYALAR sözlüğünde var mı;
                   yoksa boyanmaz, harita deliği olur (`§8`)
```

### 🔴 Kırılma günü seçerken
`Değişmez 2s` **ÇEKİRDEĞİ** ölçer. Bir tarih kuyruk dosyasında var diye
"zaten var" sayma — `denetle.py`nin çekirdek kovasına bak (`§11`).

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN      data/yerlesimler_ek23.js   (YENİ dosya, sen yaratacaksın)
              oturumlar/NOKTA-HALKA-1-ILERLEME.md
🔴 DEĞİL      data/yerlesimler.js · başka her data dosyası · arac/ · js/
```

⚠️ Yeni dosyayı `arac/girdi.py`ye **SEN bağlamayacaksın** — koordinatör
bağlayacak. Bağlanmadan önce haber ver.

Commit yalnız kendi ilerleme dosyan, **pathspec'li**:
`git commit -F <dosya> -- oturumlar/NOKTA-HALKA-1-ILERLEME.md`

---

## ④ SENİ BAĞLAYAN YASALAR

- **`CLAUDE.md §4` — KAYNAK KURALI.** TDV birincil. TDV dışına çıkarsan
  kaynak **akademik, güvenilir, bilimsel** olmalı (Emre'nin kırmızı
  çizgisi). Forum/blog/içerik çiftliği **kullanılmaz**. Vikipedi tek
  dayanak değildir.
- **TDV ölü slug tuzağı** — `curl -s -o /dev/null -w "%{http_code}"` ile
  sına: `302` = ölü, `200` = var. Ama `200` "doğru madde" demek değil
  (`ordu` → askerî ordu, şehir maddesi `ordu--sehir`). **İçeriği oku.**
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`. Kaynak bulunamadıysa
  `kaynak:"bulunamadı"` diye **açıkça** yaz.
- **`§11` bash tuzağı:** Türkçe karakter / kesme işareti / `\` kaçışı
  içeren hiçbir düzenlemeyi kabuktan geçirme. `Write` ile betik yaz,
  `py <yol>` ile koştur. Heredoc da dâhil.

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Ekrana yazdığını koordinatör
**görmez** — pencerene "iş üstündeyim" yazmak cevap vermemekle aynı şeydir.

```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu mesajı GÖNDEREN oturumun kimliği
                 (mesajın başındaki "From <ad>" etiketi;
                  bulamazsan mcp__ccd_session_mgmt__list_sessions ile ara)
    message    : cevabın
```

- **AÇILINCA HEMEN:** *"açıldım, brifingi okudum, `yerlesimler_ek23.js` bende"*
- **KALEM KALEM:** her nokta bitince bildir, biriktirme
- **"NE OLDU BİZİM İŞ?" gelirse:** iş sürüyor olsa bile **hemen** üç parçalı
  cevap — *"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*
- 🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa · şartname yanlış çıktıysa ·
  sayı beklenenden ÇOK farklıysa · 3 km kuralı bir noktayı reddediyorsa →
  **bekletmeden** sor. Tahmin etmek, sormaktan kat kat pahalıdır.
- **Bulamadığını `bulunamadı` diye yaz** — negatif sonuç da sonuçtur.

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ 4 nokta yazıldı (ya da 3 km kuralına takılan varsa GEREKÇESİYLE atlandı)
✅ her noktanın kaynağı yazılı ("bulunamadı" da geçerli bir cevap)
✅ dosya py ile ayrıştırılabiliyor (sözdizimi temiz)
✅ hiçbir `s:` kimliği o tarihte ölü bir devleti göstermiyor
✅ hiçbir kimlik BOYALAR'da eksik değil
```

Teslim raporu **sayıyla** ve **mesajla**: *"bitirdim"* değil —
*"4 → 3 yazıldı, dördüncüsü şu sebeple atlandı"*.
Raporu **gönderdikten sonra** kapan; sende kalan bilgi kurtarılamaz.

---

## ⑦ OKUMA LİSTESİ — bu sırayla

```
CLAUDE.md              §2 (emilme) · §3 (değişmezler) · §4 (kaynak) · §11
VERI-YAPISI.md         yerleşim şeması, alan sözlüğü
oturumlar/NOKTA-HALKA-2-1.md   varsa — aynı işin önceki turu, biçim örneği
```
