<!-- DURUM: BEKLIYOR ¦ 2026-08-29 ¦ pil %40 toparlanma ¦ 5 kayit disk'te (bagdat cakismasi COZULDU) -->
# UYGULAMA-1 — ilerleme defteri

**Oturum:** UYGULAMA-1 (eski adı TASNİF-D)
**Görev:** `parti-emrelic-0027…0031` (29 madde) tasnif + uygulama, sonra `parti-emrelic-0037`den ek madde.

## BİTTİ
- TASNİF-D: 29/29 madde sınıflandı → `denetim/HUKUM-TASNIF-D.json` + `denetim/BULGU-TASNIF-D.md` (tahta M-1404)
- UYGULAMA-1 tur 1: 20/20 madde işlendi → `denetim/HUKUM-UYGULAMA-1.json` + `denetim/BULGU-UYGULAMA-1.md` (tahta M-1449)

## DİSK'TE HAZIR, HENÜZ COMMIT EDİLMEDİ (🔴 ACİL — pil kısıtı)
```
data/yer_yama_uyg1.js          window.YER_YAMA_UYG1, 5 kayıt (DİZİ):
                                Bağdat · Sivrihisar · İsmail · Kars · Ardahan
                                hepsi TDV kaynaklı, Değişmez 1/2 node ile sınandı
data/savaslar.js:331            Şeyh Bedreddin isyanı koordinatı düzeltildi (satır içi)
denetim/HUKUM-UYGULAMA-1.json   3 madde (p0031/H-0003·H-0016 cozuldu, p0037/H-0001 sirada)
denetim/BULGU-UYGULAMA-1.md     17 madde devir kaydı
```
Bu dosyalar benim `§7` istisnamın (yalnız `oturumlar/UYGULAMA-1-ILERLEME.md`)
DIŞINDA — ben commit edemem, ORHANGAZİ'nin/Oturum 0'ın işi. Pil kısıtı
yüzünden özellikle bunu bildiriyorum: makine söndüğünde bu 5 kayıt ve
koordinat düzeltmesi disk'te commit'siz kalırsa KAYBOLUR.

## AÇIK
- p0037/H-0009 (Kars+Ardahan) uyguladım ama Ardahan'ın 1877-05-17 günü
  ORHANGAZİ'nin taramasında "gün-maddesiz" işaretlendi; ben ±30 gün
  ölçütüyle 23 gün fark bulup itiraz ettim (tahta M-1525), cevap bekliyor.
  Pil kısıtı nedeniyle bu araştırmayı BURADA DURDURUYORUM — yeni ölçüm
  başlatmıyorum.
- 0027-0031'in geri kalan 17 maddesi (motor/arayüz/girdi.py/yeni-nokta)
  benim tarafımda değil, BULGU-UYGULAMA-1.md'de sahiplerine yazılı.

## SIRADAKİ (pil izin verirse)
Yeni bir şey BAŞLATMIYORUM (§ pil kuralı ②). Yalnız tahtayı dinliyorum.

## GÜNCELLEME — pil %40 toparlanma eşiği (M-1615)
- Bağdat çakışması (yer_yama_uyg1.js vs yer_yama_erken.js) ÇÖZÜLDÜ, hüküm
  ORHANGAZİ'ye iletildi (M-1582): benim kaydım (1401-1405 timurlu, TDV
  sourced) kalsın, ERKEN'in 1393-1394 blip'i kaynaksız olduğu için düşsün.
  `--yaz` KOŞMADIM — pil kısıtı, karar ORHANGAZİ'de.
- Ardahan (1877-05-17) itirazım hâlâ cevapsız (M-1525) — bekliyor, üstüne
  gitmiyorum.
- YENİ İŞ BAŞLATMADIM. `uret_petek.py`ye dokunmadım.
- Sıradaki adım: YOK — tahtayı dinliyorum, elektrik/karar gelene kadar
  boştayım.

## GÜNCELLEME 2 — elektrik geldi, Bağdat çakışması TERSİNE döndü (30 Ağu)
🔴 M-1582'deki kendi hükmümü GERİ ÇEKTİM. UYGULAMA-ERKEN yatay yazdı
(M-1667): TDV `bagdat` "iki defa işgal edildi" (1393 VE 1401) diyor, ben
yalnızca 1401'i saymışım — 1393'ü "kalıcı değil" diye atlarken bir WebFetch
özetinin ("idare değişmedi") üstüne fazla kurulmuşum, oysa TDV'nin kendi
metni olayı açıkça sayıyor. ERKEN haklı. `data/yer_yama_uyg1.js`'ten Bağdat
kaydını ÇIKARDIM (4 kayıt kaldı: Sivrihisar·İsmail·Kars·Ardahan), nihai
birleşik kayıt `data/yer_yama_erken.js`'te (commit 540a222). Mükerrer yok.
`savaslar.js` riski ORHANGAZİ tarafından kapatıldı (commit c295e7c).
Pil kısıtı kalktı (elektrik geldi) ama yeni bir araştırma BAŞLATMADIM,
yalnız bu çakışmayı kapattım. Sıradaki adım: ORHANGAZİ'nin koşu emrini
ya da yeni görev bekliyorum.
