# ONCE1281-KUNYE-GUNU-1004 — kaç dönem ucunu bir OLAYDAN değil KÜNYEDEN devralmış?

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Tetikleyen: Nabesna/Northway (Alaska) `dene → abd` geçişi **1899-06-21** = `dene` künyesinin `t`'si
(Kanada Antlaşma 8) — Alaska 1867-10-18'de ABD'nin. `D207`: *"künye günü bir KAYNAK DEĞİLDİR."*
**Veriye yazılmadı.** Bütün düzeltmeler öneridir.

## 0. Yöntem — ölçümden ÖNCE sabitlendi

- Evren: `girdi.yukle()` · künye: `girdi.oku_devletler()` (`id` ve `harita:` anahtarı). Regex YOK.
- Her `s:` dönemi için `d`'nin künyesi okunur; **dönemin `t`'si = künyenin `t`'si** ya da **dönemin
  `f`'si = künyenin `f`'si** GÜNÜ GÜNÜNE eşitse dönem ADAYDIR.
- **UFUK işaretleri hariç:** `1281-01-01` ve `1923-10-29` (ve son tarafta `1923-11-01`) künye ucu
  olsa bile ölçüm değil pencere işaretidir (`D210`) — o eşitlikler AYRI sayılır, adaya girmez
  (`f=1281` kenet sınıfı `ONCE1281-SEKIL`de zaten ölçüldü).
- **Yapısal ön ayrım** (kaynağa bakmadan, kovayı DARALTMAK için):
  - `t`-ucu: o gün yere gelen SONRAKİ sahip kim?
    - halef: sonraki sahibin künyesi de **aynı gün** başlıyor (A biter, B doğar) ⇒ 🟢 yapısal aday
    - var olan devlet: sonraki sahibin künyesi **daha önce** başlamış (Nabesna: `abd` 1776) ⇒ 🔴 aday
    - Osmanlı (`d:`/`v:`) ya da sahipsiz ⇒ ayrı kova
  - `f`-ucu: simetrik (önceki sahip o gün bitiyor mu).
- 🔴 adayların bir ÖRNEKLEMİ kaynakla sınanır: kesin SAHTE ancak yerin gerçek el değiştirme günü
  kaynakta AYRI okunursa sayılır; okunamazsa ⚪.

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- `t`-ucu künyeyle eşit (UFUK hariç): **~500** dönem · `f`-ucu: **~400**.
- 🔴 yapısal aday ("var olan devlete devir" günü = ölen künyenin `t`'si): **~120**.
- Mekanizma: **devletsiz halk / kabile künyeleri** (`dene`, `kri`, `mikmak`, `inuit`, Afrika halk
  kimlikleri) künyelerinin `t`'sini bir sömürge antlaşmasından alıyor (Antlaşma 6/8, 1880 Arktik
  devri …) ve o gün halkın BÜTÜN noktalarına kopyalanıyor — noktanın hangi devletin sınırında
  kaldığına bakılmadan. Nabesna tek değil; 141. meridyenin batısındaki her `dene`/`inuit`
  noktasında ve sınır boylarındaki her halkta aynı desen bekliyorum.
- Kaynakla sınanan örneklemde 🔴 adayların **çoğu SAHTE** çıkacak (Nabesna sınıfı); ama halef
  devletlerde (A biter B doğar) eşitlik **çoğunlukla DOĞRU** olacak.

## 2. Ölçüm
(aşağıda)
