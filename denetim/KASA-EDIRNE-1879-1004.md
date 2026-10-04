# KASA-EDIRNE-1879-1004 — Rusların Edirne'den çekilişi (1879) için kronoloji maddesi malzemesi (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün talebi (isg: partisi satır 4, bitiş ucunda madde yok)
TDV ham sayfadan okundu; cümleler **harf harf**. **Veriye yazılmadı.**

## HÜKÜM (ölçtüm)
- **Kaynağın kendi tarihi: 1879-03-13 [GÜN]**, TDV `edirne`'den. Atlasın elindeki tarihle **aynı** gün. Atlas bu günü büyük olasılıkla bu cümleden almış. Çelişki yok; günü kaynak veriyor.
- İkinci, bağımsız bir tanık **bulunamadı.** TDV `doksanuc-harbi` (maddenin kendisinin "bk." ile gönderdiği madde) ve `berlin-antlasmasi` çekilişin gününü vermiyor. Web aramasında çıkan ikincil sayfalar aynı TDV ifadesini tekrarlıyor; bağımsız sayılmadı.

## KAYNAK CÜMLELERİ
| uç | gün | kaynak · tam cümle |
|---|---|---|
| **Çekiliş (bitiş)** | **1879-03-13** [GÜN] | TDV `edirne`: "20 Ocak 1878'de Edirne'ye giren Ruslar 13 Mart 1879'a kadar burada kaldılar; bu sırada pek çok mahalle harap oldu, hastalık ve sefalet yüzünden binlerce kişi hayatını kaybetti (bk. DOKSANÜÇ HARBİ)." |
| Giriş (başlangıç, karşılaştırma için) | 1878-01-20 [GÜN] | TDV `doksanuc-harbi`: "İstihkâmları mükemmel olan Edirne, Plevne gibi Ruslar'a uzun süre karşı koyacak bir başka müdafaa mevkii olabilecek durumda iken Vali Eyüp Paşa mühimmat depolarını tahrip ederek geri çekilince şehir 20 Ocak 1878 tarihinde düşmana teslim oldu." · TDV `edirne` (yukarıda) aynı günü veriyor |
| Bağlam (çekilişin gününü vermiyor) | 1879-02-08 [GÜN] | TDV `berlin-antlasmasi`: "8 Şubat 1879'da yapılan İstanbul Antlaşması ile Rusya'ya bırakılan yerlerin bedeli düşüldükten sonra bu tazminat 802.500.000 frank olarak tesbit edilmiş ve yedi yıl zarfında eşit yirmi bir taksitte ödenmesi kararlaştırılmıştır." ⇒ Osmanlı–Rus kesin barışı çekilişten ~5 hafta önce. Bağ kaynakta kurulmuyor; **çıkarım**, madde metnine "sebep" diye yazılmamalı |
| Bağlam (karşı kanıt değil) | — | TDV `ayastefanos-antlasmasi`: "Rus askerleri, Bulgaristan hariç olmak üzere, antlaşmanın imzalanmasından üç ay sonra Rumeli'yi, altı ay sonra da Doğu Anadolu'yu boşaltacaktı." ⇒ Ayastefanos takvimi (≈ Haziran 1878) Edirne'de uygulanmamış; Berlin Ayastefanos'u değiştirdi |

## MADDE MALZEMESİ (öneri; yazım koordinatörde)
```
t:        "1879-03-13"
yer_id:   "Edirne"
başlık:   Rus kuvvetlerinin Edirne'den çekilişi — 14 aylık işgalin sonu
gövde:    20 Ocak 1878'de Vali Eyüp Paşa'nın çekilmesiyle teslim olan Edirne'de
          Rus işgali 13 Mart 1879'a kadar sürdü; bu sırada pek çok mahalle harap
          oldu, hastalık ve sefalet yüzünden binlerce kişi hayatını kaybetti.
kaynak:   edirne (TDV) · giriş günü: doksanuc-harbi (TDV)
kesinlik: GÜN (tek tanık)
```
- ⚠️ Tek tanık: gün yalnız TDV `edirne`'de. `D211` gereği "ikinci kaynakla doğrulanmadı" beyanı önerilir.
- 8 Şubat 1879 İstanbul Antlaşması'nı gövdeye "sebep" olarak yazmak kaynakta olmayan bir bağ kurmak olur (`D210` ailesi). Yalnız ayrı bir cümle olarak, bağ kurmadan anılabilir.

## AYRICA — koordinatörün LAB düzeltmesine bir not (Sahalin)
LAB: *"Sahalin olaylar*'ta Sahalin maddesi HİÇ YOK."*
- **`olaylar*.js` için doğru.** Ama madde **`data/kronoloji_sinir_asya.js:104`**'te duruyor: `t:"1920-01-01"`, `devlet:"meiji-japonya"`. Kaynağı FRUS 1921 ve Pekin Sözleşmesi 1925.
- Değişmez 2'nin evreni yalnız `olaylar*` değil. `denetle.olaylari_yukle()` 24 Eylül'den beri `kronoloji_sinir*.js`'i de okuyor (Emre'nin hükmü, `denetle.py:1104`). Ben maddeyi bu okuyucuyla bulmuştum; LAB yalnız `olaylar*`'a bakmış.
- ⇒ Sahalin'in **başlangıç ucunda madde Değişmez 2 evreninde VAR**. ⚠️ Ama maddenin `t:` alanı 1920-01-01, metni "Temmuz 1920" diyor; Değişmez 2'nin ±30 gün penceresi Temmuz kırılmasını bu maddeyle **kapatmaz**. Pratikte koordinatörün "yok" sonucuna yakın: madde var, tarihi yanlış biçimde kodlu.
- İstanbul ve Tobruk için LAB'ın iki uçlu ölçümü doğru. Şartnameye "iki uç ayrı kovada" eklenmesini not ettim.

## ① NE ÖLÇTÜM · ② NE BULAMADIM · ③ NE İSTİYORUM
- ① Çekiliş günü TDV `edirne`'de 1879-03-13 [GÜN], tam cümleyle. Atlasla aynı.
- ② Bağımsız ikinci tanık bulunamadı. Çekilişin İstanbul Antlaşması'yla (8 Şubat 1879) bağı kaynakta yok.
- ③ Madde tek tanıkla yazılsın mı (beyanlı), yoksa satır 4 ikinci tanık bulunana kadar bekletilsin mi? Sahalin maddesinin `t:` alanı 1920-07-01'e (AY) çekilirse başlangıç ucu kapanır; bu ayrı bir kalem.
