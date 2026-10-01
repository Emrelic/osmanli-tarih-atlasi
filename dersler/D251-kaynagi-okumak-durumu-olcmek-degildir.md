# D251 — Kaynağı okumak DURUMU ölçmek değildir; ve yıkıcı bir işlemin gerekçesi VARSAYIM olamaz

**Slogan:** 🔴 **1 GB'lık motor önbelleğini silme emrini, kaynak koddan okuduğum bir yola dayandırdım — o yol o makinede YOKTU. Önbellek kurtuldu çünkü sabit bağlantıydı; yani sonuç GEREKÇEYLE değil ŞANSLA güvenli oldu.**

## Vaka — 1 Ekim 2026, `C:\atlas-kosu19` worktree'sinin silinmesi

Emre ~500 MB'lık koşu worktree'sinin silinip silinmeyeceğini sordu. Silmeyi
önerdim ve güvenlik gerekçesi olarak şunu yazdım:

> *"Önbellek worktree'nin İÇİNDE DEĞİL — `kos_ve_yayinla.py:136` sabit yola
> koyuyor: `<sistem sürücüsü>/atlas-onbellek`. Kendi yorumu: 'Koşu
> worktree'leri aynı önbelleği PAYLAŞSIN diye SABİT bir yol'
> ⇒ ~1 GB önbellek DURUYOR, bir sonraki koşu hızını kaybetmiyor."*

KOSU-UMIT sildi — ama **önce ölçtü**, ki ben istememiştim:

```
C:\atlas-onbellek                                      YOK
gerçek yer: C:\atlas\_motor_onbellek\motor_onbellek.sqlite
worktree'deki kopya                                    SABİT BAĞLANTI (hard link)
silmeden önce  links = 2
sildikten sonra links = 1 · dosya 1.013,3 MiB SAĞLAM
```

## 🔴 HATANIN ANATOMİSİ — iki satırı okudum, birini varsaydım

`arac/kos_ve_yayinla.py:136`:
```python
if not os.environ.get("MOTOR_ONBELLEK_DIZIN"):
    os.environ["MOTOR_ONBELLEK_DIZIN"] = ... "atlas-onbellek"
```
Sabit yol yalnız **değişken boşsa** atanıyor. Ve `arac/motor_onbellek.py:22`
zaten alternatifi yazmış:
> *"DİZİN: `MOTOR_ONBELLEK_DIZIN` (yoksa `<kök>/_motor_onbellek/`)"*

**İkinci cümleyi okudum.** Ama birinci dalın o makinede hangi kola gittiğini
**ölçmedim** — koşu `kos_ve_yayinla.py` üzerinden değil doğrudan koşturulmuştu,
dolayısıyla varsayılan `<kök>/_motor_onbellek/` kolu geçerliydi.

```
KAYNAK   "koşul sağlanırsa şu yol kullanılır"     ← okudum
DURUM    "bu makinede koşul sağlandı mı"          ← ÖLÇMEDİM
```

## 🔴 VE ASIL DERS: SONUÇ ŞANSLA GÜVENLİ OLDU

Önbellek kurtuldu çünkü worktree'deki **sabit bağlantıydı** — iki bağlantıdan
biri silinince içerik durur. Eğer orada gerçek bir **kopya** olsaydı,
`git worktree remove` 1 GB'ı silecekti **ve ben "güvenli" demiş olacaktım.**

⇒ Gerekçem yanlıştı; sonucu kurtaran şey benim akıl yürütmem değil, dosya
sisteminin bir ayrıntısıydı.

## KURAL

```
① Kaynak kodu NE YAPILABİLECEĞİNİ söyler, NE YAPILDIĞINI söylemez.
   Koşullu bir dal okunduğunda, o makinede hangi kola gidildiği AYRI bir ölçümdür.
② YIKICI bir işlemin gerekçesi VARSAYIM OLAMAZ.
   "Silmek güvenli, çünkü X başka yerde" cümlesi, X'in yeri ÖLÇÜLMEDEN kurulamaz.
③ Silmeden ÖNCE ölç, sildikten SONRA doğrula.
   `links` sayısı · boyut · varlık. Üçü de saniyelik, kaybı saatlerce.
④ Ve emri veren bu adımı YAZMALI. Ben yazmadım; işçi kendiliğinden ekledi.
   Protokolün bir adımı, yalnız işçinin dikkatiyle ayakta duruyorsa protokolde YOKTUR.
```

📌 `D250`nin ikizi: orada **ölçen aletin sürümünü** varsaydım, burada
**ölçülen şeyin yerini**. İkisinde de uzak makinenin durumunu okumadan hüküm
kurdum, ikisinde de aynı işçi düzeltti.

📌 Ve `D204`ün bir yüzü daha: *ölçülemedi ≠ yok ≠ temiz* — buraya beşincisi
ekleniyor: **okundu ≠ ölçüldü.**

## BAĞLI

`D250` (kör ölçümün kaydı) · `D248` (koşturulmamış komut) · `D241`
(commitlenmemiş kumanda) · `D204` (ölçülemedi ≠ yok ≠ temiz) ·
`arac/motor_onbellek.py:22` · `arac/kos_ve_yayinla.py:136`
