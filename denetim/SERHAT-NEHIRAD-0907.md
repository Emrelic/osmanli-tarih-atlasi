# NEHİR ADI PARÇALANMASI — `SERHAT-NEHIR-0907.md`in sayılarını BÖLÜYOR

> 🔴 Şüphe koddan değil **çıktıdan** geldi: rapor `Danube 22` ve
> `Donau 5` diye iki satır yazıyor — **aynı nehir, iki dilde.**
> Ölçüt: Natural Earth'ün kendi `rivernum` kimliği. Bu bir ad değil
> bir **kimlik**tir ⇒ eşanlamı veri KENDİSİ taşıyor, biz uydurmuyoruz.

```
adlı nehir kimliği (rivernum)          1124
🔴 BİRDEN ÇOK ADI OLAN kimlik          4
bu kimliklerin taşıdığı ad sayısı      10
```

## Birden çok adla geçen nehirler

| rivernum | adlar | ad sayısı |
|---|---|---|
| 0 | `Irrawaddy Delta` · `Rio Salinas` · `San Pedro y San Pablo` · `Usumacinta` | 4 |
| 103 | `Columbia` · `Snake` | 2 |
| 255 | `Rhne` · `Rhône` | 2 |
| 303 | `Drau` · `Garonne` | 2 |

## 🔴 EMRE'NİN İKİ NEHRİ — ad parçalanması ADIYLA

```
Danube     -> rivernum 25     · bu kimlikteki ADLAR: Danube
Donau      -> rivernum 38     · bu kimlikteki ADLAR: Donau
Dunav      -> bu ADLA hiç parça YOK
Duna       -> bu ADLA hiç parça YOK
Dunarea    -> bu ADLA hiç parça YOK
Evros      -> rivernum 442    · bu kimlikteki ADLAR: Evros
Maritsa    -> bu ADLA hiç parça YOK
Marica     -> bu ADLA hiç parça YOK
Meric      -> bu ADLA hiç parça YOK
```

⚠️ **HÜKÜM:** `SERHAT-NEHIR-0907.md`in *"hangi nehir kaç sınır çifti"*
tablosu **ad başına** sayıyor, kimlik başına değil. Bir nehrin gerçek
ağırlığı o tabloda **olduğundan küçük** görünür. Tablo yanlış değil,
**birimi ad** — ve birim bildirilmezse okuyan onu nehir sanar.
📌 `CLAUDE.md §11`: *"bir sayım birimi yanlışsa, ölçüm veriyi değil
verinin YAPISINI ölçer."*

🔴 **VE NORMALLEŞTİRİCİ BUNU ÇÖZEMEZ.** `Tuna` ↔ `Danube` bir yazım
varyantı değil **ayrı bir ad**. `ARAC-NORMAL-0903.py` doğru çalışıyor
ve çözmemeli. Çözecek olan bir **eşanlam sözlüğü**dür.

> 🔴🔴 **BU DOSYANIN İLK YAZIMINDA ŞU CÜMLE VARDI VE ÇÜRÜDÜ:**
> *"iyi haber: `rivernum` onun anahtarını veride HAZIR veriyor."*
> Ölçüldü (`SERHAT-TUNA-0907.md`): `Danube`=rivernum **25**,
> `Donau`=rivernum **38** — AYRI kimlikler. Ve uçları
> `(17.206, 48.061)`de **0,0 km** ile birleşiyor (Bratislava/Devín),
> yani ikisi **aynı nehrin iki reach'i**.
> ⇒ Ad parçalanması **GERÇEK**; `rivernum` onu **ÇÖZMÜYOR**.
> `rivernum` bir nehir kimliği değil bir **parça-zinciri** kimliği.
>
> 📌 Ders: *bir çözümü önermek, onu ölçmek değildir.* Öneriyi
> yazdığım turda ölçmemiştim. Vaka **silinmedi, damgalandı** —
> `CLAUDE.md §3.5.1`: *bir vakayı silmek dersi de siler.*
