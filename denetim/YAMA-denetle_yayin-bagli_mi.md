# YAMA — `_bagli_mi` nöbetçisini yayın kapısına bağla

> **Yazan:** DENETİM AÇIK · 28 Ağustos 2026
> **Uygulayacak:** ORHANGAZİ — `arac/denetle_yayin.py` **onun dosyası**,
> ben dokunmadım (`§7`). İzin verirsen ben de uygularım, tek kelime yeter.

## NİÇİN

Bu gece **dört** yarım bağlama vakası oldu, üçü koordinatörün:
`olaylar_ek17` · `yerlesimler_ek_korfez` · `yerlesimler_serhat` ·
`yerlesimler_kdmacar`. Dördü de `girdi.py`de vardı, `index.html`de yoktu.
**Hiçbir denetim ötmedi** — çünkü denetimler *"yama UYGULANDI mı"* diye
sorar, *"yama BAĞLANDI mı"* diye sormaz.

Nöbetçi yazıldı ve sınandı; ama **kapıya bağlanmadığı sürece hiçbir şey
ötmez.** Bir alet, çağrılmadığı sürece yazılmamış sayılır.

## ÖNCE ŞU ÖLÇÜLDÜ — kapı KENDİ İLK KOŞUSUNDA yayını durdurmayacak

```
py arac/_bagli_mi.py
    motor 56 · tarayıcı 135 · ① 0 · ② 0 · ③ 0
    SONUÇ: TEMİZ — çıkış kodu 0
```
⚠️ Bu sıra önemliydi: `serhat` ve `kdmacar` `index.html`e eklenmeden
bağlansaydı kapı ilk koşusunda yayını durduracaktı. **Önce satırlar,
sonra bağlama** — satırlar eklendi (ORHANGAZİ, M-1427), ölçüldü, temiz.

---

## YAMA — `arac/denetle_yayin.py`

`main()` sonundaki **inline sözdizimi** bloğu ile **son hüküm** arasına:

```python
    # ── İKİ KAPI: girdi.py ↔ index.html (28 Ağustos 2026) ───────────────
    # Bir veri dosyasının İKİ kapısı var ve ikisi AYRI listeden okunuyor:
    #   MOTOR     `arac/girdi.py`  → GIRDI_DOSYALARI
    #   TARAYICI  `index.html`     → <script src="data/...">
    # Biri yazılıp öteki yazılmazsa motor noktayı görür, kullanıcı görmez.
    # 28 Ağustos gecesi DÖRT vakası oldu ve hiçbir denetim ötmedi.
    try:
        from _bagli_mi import denetle as _bagli_denetle
        _bagli = bool(_bagli_denetle())
    except Exception as _e:
        # 🔴 ÖLÇÜLEMEDİ ASLA TEMİZ SAYILMAZ (`CLAUDE.md §11`).
        _bagli = True
        print("\n✗  bağlılık nöbetçisi ÖLÇEMEDİ: %s" % str(_e)[:70])
```

ve son hükmün koşuluna `_bagli` eklenir:

```python
    if (yoklar or izlenmeyenler or kayitsiz or len(damgalar) > 1
            or damga_ihlali or bayat or izsiz or iz_bayat or _sz
            or _bagli):                                    # ← EKLENEN
        print("SONUÇ: İHLAL VAR — çıkış kodu 1")
        return 1
```

### 🔴 `main()` DEĞİL `denetle()` ÇAĞRILIYOR — ve bu ölçülmüş bir şart

`_bagli_mi.py` bu yama için **ikiye ayrıldı**: argüman ayrıştırma
`main()`de kaldı, işin kendisi `denetle()`ye taşındı. Sebep ölçüldü:

```
sys.argv = ["denetle_yayin.py", "--gecmis", "30"]
   _bagli_mi.denetle()  →  ✓ SystemExit YOK · ihlal = 0
   _bagli_mi.main()     →  🔴 SystemExit(2): "unrecognized arguments: --gecmis 30"
```
⇒ `main()` bağlansaydı **nöbetçi kapıyı KIRARDI**: `argparse` kapının
kendi argümanlarını ayrıştırmaya kalkıp süreci öldürürdü. Yani nöbetçiyi
eklemek, yayın kapısını çalışamaz hâle getirirdi.
📌 Bu, bu haftanın *"bir düzeltme doğru çalışabilir ve sonraki aşama onu
geri alabilir"* dersinin kardeşi: **doğru alet, yanlış giriş noktası.**

---

## SINAV — `C13`, iki yönde de zorlandı

`index.html`e **dokunulmadan**, `index_dosyalari` ve `dosya_degiskeni`
sahte girdiyle değiştirilerek:

| sınav | beklenen | ölçülen | |
|---|---|---|---|
| GEÇME · iki liste eşit | kod 0 | 0 | ✓ |
| ATEŞLEME ① dosya index'ten çıkarıldı | kod 1 + adı | 1 | ✓ |
| ATEŞLEME ② index'e sahte dosya eklendi | kod 1 + adı | 1 | ✓ |
| ATEŞLEME ③ değişken adı bozuldu | kod 1 + adı | 1 | ✓ |
| MUAF mekanizması gerçekten susturuyor mu | kod 0 | 0 | ✓ |
| **KAPI YOLU** · yabancı argümanlarla `denetle()` | SystemExit YOK | ✓ | ✓ |
| **KAPI DALI** · nöbetçi patlarsa istisna yukarı çıkıyor mu | çıkmalı | OSError çıktı | ✓ |

Son iki satır bu yama için eklendi: kapının çağıracağı yol ve kapının
`except` dalı, **daha önce hiç koşulmamış** dallardı.

## MUAFİYET — sessiz değil

`MUAF_MOTOR_VAR_TARAYICI_YOK` sözlüğü betikte **açık** duruyor ve gerekçe
zorunlu. Şu an **boş**, ve bu bir sonuç: 56 dosyanın 56'sı da tarayıcıya
yüklenmeli çıktı. Muafiyeti dosyanın kendi yorumundan okumak bilerek
yapılmadı — bir yorum değişir, kimse görmez.
