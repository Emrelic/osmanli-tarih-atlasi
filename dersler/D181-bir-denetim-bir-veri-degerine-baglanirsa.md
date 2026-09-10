# BİR DENETİM BİR VERİ DEĞERİNE BAĞLANIRSA, VERİ O DEĞERİ TERK ETTİĞİNDE SESSİZCE ÖLÜR — «denetim var ≠ o soruyu soruyor» DEĞİL, «denetim VARDI, ARTIK SORMUYOR».

> Kimlik `D181` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BİR DENETİM BİR VERİ DEĞERİNE BAĞLANIRSA, VERİ O DEĞERİ TERK
  ETTİĞİNDE SESSİZCE ÖLÜR — «denetim var ≠ o soruyu soruyor» DEĞİL,
  «denetim VARDI, ARTIK SORMUYOR».**
  *(7 Eylül 2026 · `DEGISMEZ3-0907` · `denetle.py:3424`)*

  Bu belge *"denetim var ≠ o soruyu soruyor"* ailesini uzun uzun
  kaydetti; hepsinde denetim **hiç sormamıştı.** Bu farklı: denetim
  **soruyordu ve sormayı bıraktı.**
```python
if gercek_kd == 0:
    ...  n3z != n3 ise → ihlal: "kd_oku türetmesi BOZUK"    ← SINAV
else:
    print(f"🟢 {gercek_kd} kayıt gerçek zaman derinliği")    ← BUGÜN BU
```
  `gercek_kd` **0 → 192** olunca **iki şey birden** oldu:
```
① BEYAN YANLIŞLAŞTI  "192 kayıt gerçek zaman derinliği" — gerçek 4 (48 KAT)
② SINAV ÖLDÜ         `kd_oku` türetmesi bugün bozulsa HİÇBİR DAL ÖTMEZ
```
  🔴 Ve ölümü **sessiz**: dal `else`e düştü, ekrana yeşil bir satır
  bastı, ve o satır bir **başarı** gibi okundu.
  ⇒ ***Sınav bir EŞİĞE değil bir VERİ DEĞERİNE bağlanmıştı*** (`== 0`),
  ve veri o değeri **borç ödendikçe** terk etti. Yani denetim, tam
  **iyileşme başladığında** kör oldu.

  🟢 **ÇARE — sınavı BOŞALAMAYAN bir kümeye bağla:** yerine geçen sınav
  `kd:` **taşımayan** kayıtta `kd_gun(y,g)[1] != y["m"]` arıyor; orada
  türetme dışında kaynak yok ⇒ ayrışma **yalnız** okuyucu hatasıyla
  açıklanabilir. Küme **3613 kayıt** ve `kd:` yazıldıkça **büyümüyor,
  küçülüyor ama sıfırlanmıyor.**
  📌 Bu, aynı gün ölçülen *"eşiği sabit sayı değil İLİŞKİ olarak yaz"*
  dersinin kardeşi: orada eşik tabanını taşıyordu, burada **sınav
  varlığını** bir veri değerine borçluydu.

  🟢 **VE İKİ DALIN AYRI SAYILMASI GEREKTİĞİ ZORLANARAK GÖSTERİLDİ:**
```
bugün      degismez3 atlanan 4 · degismez3z atlanan 4 · AYNI küme
zorlama    m:None + kd:[{m:"ZZZ-OLMAYAN-MERKEZ"}]
           degismez3  görür mü : HAYIR  (m: boş, dal hiç koşmuyor)
           degismez3z görür mü : EVET   (merkez kd:'den geliyor)
```
  ⇒ Bugünkü eşitlik bir **tesadüf**, ve ayrışma `kd:` yazıldıkça —
  yani **borç ödendikçe** — gelecek. Tek sayaç konsaydı **tam o gün**
  kör olurdu.
  📌 ***Bir sayacın bugün doğru olması, yarın doğru olacağı anlamına
  gelmez; ve iki dalın bugün aynı sayıyı vermesi onları
  birleştirmek için gerekçe DEĞİLDİR.***

  🟢 **Ve yamanın kabul gerekçesi bir yenilik değil, EMSAL:**
  `denetle.py:1831` `degismez4` bu işi **zaten doğru yapıyor** —
  bulamadığını `kunyesiz` kovasına koyup raporluyor. ⇒ Yama, aynı
  dosyadaki emsale **hizalama.** Bir düzeltmeyi savunmanın en ucuz
  yolu, aynı depoda onu zaten yapan bir yer göstermektir.
