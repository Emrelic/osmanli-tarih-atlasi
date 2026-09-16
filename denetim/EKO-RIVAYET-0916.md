# EKO-RIVAYET — teslim raporu, DALGA-0052 (+ 51/H-0005, 51/H-0006, 51/H-0001)

Yazan: EKO-RIVAYET · 16 Eylül 2026 · koordinatör 1.MURAT

⚠️ **Ad düzeltmesi**: Bu oturum açılışta yanlışlıkla "EKO-DUNYA" adıyla tahtaya
yazdı (M-3990) ve o kimlikle dünya-tarihi araştırmasına başlamıştı (Girit
savaşları, İpek Yolu, coğrafi keşifler vb.). Koordinatör düzeltti: gerçek
kimlik **EKO-RIVAYET**. `data/ekokuma_dunya.js`'e HİÇBİR ŞEY YAZILMADI —
yalnız WebSearch/WebFetch araştırması yapılmıştı, dosyaya dokunulmadı. Düzeltme
tahtaya M-3995 ile bildirildi. Bu rapor yalnız EKO-RIVAYET'in gerçek
maddelerini kapsar.

## Yazılan dosyalar

- `data/olaylar_p0059.js` — yeni, `window.OLAYLAR_P0059`, 1 kronoloji maddesi
- `data/ekokuma_rivayet.js` — yeni, `window.EKOKUMA_RIVAYET`, 9 ek okuma kartı
- `denetim/YAMA-RIVAYET-0916.json` — 3 madde-değişikliği önerisi (uygulama koordinatörde)
- `denetim/EKO-RIVAYET-0916.md` — bu rapor

Her iki `.js` dosyası `node --check` ile, JSON dosyası `JSON.parse` ile
sınandı — üçü de temiz. Bütün `olay:` tarihleri tam korpus (`olaylar*.js`,
1436 madde) üzerinde node ile arandı ve BİREBİR var olduğu doğrulandı; iki
`zincir:` referansı (`sebep-sonuc-zitvatorok-1606`, `sebep-sonuc-vasvar-1664`)
`ekokuma_antlasma2.js`'te bulunup doğrulandı.

## Madde madde

| # | Sonuç | Not |
|---|---|---|
| H-0003 | ✅ YAZILDI | 1594 üç voyvodalık isyanı: yeni kronoloji maddesi (`olaylar_p0059.js`, t:1594-11-13) + sebep-sonuc kartı. `olaylar_ek10.js`'in kendi yorumu bu boşluğu ÖNCEDEN ölçmüştü ("1593-1596 arası tek madde yok") ama hiç yazılmamıştı. |
| H-0007 | 🟡 TEŞHİS, YAMA'ya yazıldı | "Nevşehirli Damad İbrahim Paşa" ek okuması diye görünen şey bir ekokuma dosyası DEĞİL — `js/app.js:7606` `kisiBul()` fuzzy eşleştiricisi, 1596 maddesindeki `kisiler:"...Damad İbrahim Paşa"` serbest metnini `kisiler.js`'te bu örüntüye uyan TEK kayda (`nevsehirli-damad-ibrahim-pasa`) bağlıyor — çünkü 1596-1601 döneminin KENDİ Damad İbrahim Paşa'sı için ayrı bir kayıt yok. Çare `kisiler.js`'e yeni kayıt (Oturum 5'in dosyası, YAMA'da önerildi). |
| H-0008 | ✅ YAZILDI | Kanije/Tiryaki Hasan Paşa: TDV-belgeli çekirdek (9000 kişi, 70 gece, 18 Kasım 1601 zaferi) ile Osmanlı anlatı geleneğine dayanan taktik hikâyeler (topların gizlenmesi, sahte mektuplar — TDV'nin KENDİ maddesinde yok) AÇIKÇA ayrıştırıldı. Emre'nin "araştırma usulü" sorusuna yöntem önerisi: kaynak SAYISI/TÜRÜ ayrımı (1453 gemilerin karadan yürütülmesi ÇOK kaynaklı-belgeli, Lagari Hasan Çelebi TEK kaynaklı). |
| H-0020 | ✅ YAZILDI | Bağdat 1623: TDV'ye göre resmî bir savaş ilanı YOK — Bekir Subaşı'nın iç isyanını Şah Abbas devraldı, Temmuz 1623'te doğrudan kuşattı, 28 Kasım'da ihanetle teslim alındı. |
| H-0024, H-0025, H-0027, H-0044 | ⛔ BENİM DOSYALARIMDA DEĞİL | Dördü de AYNI kusuru dört ayrı örnekle gösteriyor: kronoloji maddelerinin sonundaki "🗺 Bu maddenin haritadaki karşılığı ... belirlenemedi" gibi geliştirici notları son kullanıcıya GÖRÜNÜYOR. Bu `js/app.js`in render mantığı — UI oturumunun H-0047/H-0096 maddesiyle AYNI kusur. Ayrı çözülmemeli, UI tek seferde ikisini birlikte kapatmalı. |
| H-0028 | ⛔ İNDİRME GEREKTİRİYOR | Kâtib Çelebi/Lagari Hasan Çelebi/Hezarfen'e görsel isteği — kamu malı görsel ARAMA yapıldı ama İNDİRME yapılmadı: (a) dosya indirmek açık kullanıcı izni gerektirir, (b) bu dalga UI'ye "yeni görsel indirme YOK" diyor (H-0128), aynı ihtiyat burada da uygulandı. Görsel adayları bulunursa ayrı bir turda, izinle indirilebilir. |
| H-0039 | 🟡 KISMEN | Nef'î'nin idamı zaten TDV kaynaklı bir kronoloji maddesi (mevcut). Emre'nin istediği İKİNCİ katman — "idam edilen her şair/sanatçı/bilim adamı için AYRI kart" — kapsam çok geniş (onlarca kişi); bu turda yalnız mevcut kapsam doğrulandı, yeni kart YAZILMADI. Bu, `ONCELIK.md`'nin "en çok X" disiplinine göre AYRI bir oturuma (belki EKO-KURUM/PADİŞAH ile birlikte) sevk edilmeli. |
| H-0042 | ✅ YAZILDI + YAMA | Hezarfen'in uçuşu: TDV yıl VERMİYOR (yalnız "XVII. yüzyıl"), tek kaynak Evliya Çelebi. Araştırma sırasında atlasın KENDİSİNDE bir kusur bulundu: AYNI olay için İKİ tarihli (1632 ve 1638) iki ayrı kayıt var, ve 1638 tarihli kayıt TDV'nin söylemediği "belgelenmiş ilk uzun mesafeli planör uçuşu" hükmünü TDV'ye mal ediyor (D144 ailesi). YAMA'ya yazıldı. |
| H-0071 | ⛔ ZATEN VAR, YAZILMADI | Samur vergisi/Samur Vakası — `ekokuma_ibrahim.js`'teki `ibrahim-samur-meraki-falci-hikayesi` kartı (tur:magazin, olay:1647-01-01\|Samur) bunu ZATEN kapsıyor. Not: Emre'nin metni "III. Selim" diye anmıştı, olay aslında **Sultan İbrahim** (Deli İbrahim) dönemine ait — kendisi de muhtemelen bunu biliyordu, kontrol edildi. Mükerrer yazılmadı (D094). |
| H-0072 | ✅ YAZILDI | Cihannümâ: yazılış sebebi, iki bölümlü yapısı, İKİ KEZ yazılıp İKİ KEZ yarım kalması, 1732'de basılması. |
| H-0076 | ✅ YAZILDI | Çınar Vak'ası (1656): sebep (Girit seferi mali krizi) → sonuç (idamlar) → bağ: altı ay sonraki Köprülü Mehmed Paşa atamasına (15 Eylül 1656, olağanüstü şartlarla) giden zincir kuruldu — bu bağlantı önceden hiçbir kartta yoktu. |
| H-0082 | ✅ YAZILDI | Keşfü'z-Zünûn: yirmi yıllık araştırma, kapsamı, Batı'daki referans statüsü. |
| H-0083 / 51-H-0006 | ✅ YAZILDI | Yanova (1658) → Varad (1660) → Rákóczi'nin ölümü → 1663-64 Osmanlı-Avusturya savaşı → Vasvar (1664) zinciri kuruldu (`zincir:["sebep-sonuc-vasvar-1664"]`). Mevcut iki kronoloji maddesi zaten vardı, bu kart onları BAĞLADI. |
| 51/H-0001 | 🟡 TEŞHİS, YAMA'ya yazıldı | İbrahim'in hal'i (8 Ağustos) ile IV. Mehmed'in cülusu (8 Ağustos) arasındaki "terslik" ölçüldü: `olaylar_ek2.js`'teki kayıt hal'i katille (18 Ağustos) aynı tarihe bağladığı için cülustan SONRAYMIŞ gibi sıralanıyor. İki çözüm önerisiyle YAMA'ya yazıldı. |
| 51/H-0005 | ✅ YAZILDI | Kâtib Çelebi kimdir kartı — hayatı, kişiliği (medrese eleştirisi, mezhep taassubuna karşı duruş), üç eseri, Babinger'in es-Süyûtî benzetmesi. |

**Toplam: 16 madde. 9 ek okuma kartı + 1 kronoloji maddesi yazıldı, 3 madde
YAMA önerisi olarak koordinatöre/ilgili dosya sahibine devredildi, 2 madde
(H-0028 görsel indirme, H-0039'un ikinci katmanı) kapsam/izin gerekçesiyle
ertelendi, 4 madde (H-0024/25/27/44) benim dosyalarım dışında (UI'ye
devredildi), 1 madde (H-0071) zaten mevcuttu.**

## Kaynak yöntemi

TDV birincil kaynak (CLAUDE.md §4): eflak · bogdan · tiryaki-hasan-pasa ·
kanije · hezarfen-ahmed-celebi · bagdat · katib-celebi ·
cihannuma--katip-celebi · cinar-vakasi · koprulu-mehmed-pasa — hepsi bu turda
WebFetch ile çekildi (HTTP 200) ve gövdesi okundu. Tiryaki Hasan Paşa
kartındaki taktik ayrıntılar (topların gizlenmesi, sahte mektuplar) TDV'nin
kendi maddesinde YOK — bu AÇIKÇA ayrı kaynak (Osmanlı anlatı geleneği,
ikincil Türkçe yazın) olarak işaretlendi, TDV'ye mal edilmedi.

## Ölçülmüş iki kusur (D144 ailesi: "beyan edilen kaynak iddiayı taşımıyor")

Araştırma sırasında atlasın kendi verisinde tesadüfen iki gerçek kusur
bulundu (ikisi de `denetim/YAMA-RIVAYET-0916.json`'a yazıldı, ikisi de kendi
dosyalarım DIŞINDA olduğu için doğrudan düzeltilmedi):

1. **Hezarfen'in uçuşu iki tarihte, ikisi de aynı kaynağı gösteriyor** —
   `olaylar_ek2.js` (1632, hedgeli) ve `olaylar_ek7.js` (1638, "TDV'ye göre
   belgelenmiş ilk uzun mesafeli planör uçuşu" — TDV bunu SÖYLEMİYOR).
2. **Kişi eşleştirme kusuru** — `js/app.js`'in fuzzy `kisiBul()` fonksiyonu,
   kisiler.js'te "Damad İbrahim Paşa" örüntüsüne uyan TEK kaydın (Nevşehirli,
   1718-1730) 1596-1601 dönemine ait BAŞKA bir Damad İbrahim Paşa'nın yerine
   geçmesine yol açıyor. Kod hatası değil, kisiler.js'te eksik bir kayıt.

## Aksaklık/karar gerektiren tek kalem

`js/app.js`'in `_EKOKUMA_DOSYA_ADLARI` listesine `"ekokuma_rivayet"` ve
`index.html`'e `data/olaylar_p0059.js` `<script>` satırının eklenmesi bu
oturumun dosyaları DEĞİL (CLAUDE.md §7). UI oturumuna tahtadan bildirildi.
