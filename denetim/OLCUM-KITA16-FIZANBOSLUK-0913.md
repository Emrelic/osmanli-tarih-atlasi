# OLCUM-KITA16-FIZANBOSLUK-0913 — H-0012: "Fizan sonrası Trablusgarp'ta ortadaki boşluk"

**Oturum:** KITA 16 · **Paket:** 0045 · **Tarih:** 2026-09-13 · Koşu 10 sürüyor, `data/`/`arac/` DONUK.

## Öngörü (D022, ölçümden önce)

Dünkü "Libya kıyısı" (H-0017-2) vakasıyla aynı sınıf olacağını tahmin
ediyorum: **gerçek bir çöl plâtosu (Trablus kıyı kuşağı ile Fizan vaha
zinciri arasındaki Hamâde el-Hamrâ benzeri bölge), nokta yok, TAVAN_KM
(200 km) yarıçap sınırının da ötesinde ⇒ boşluk DOĞRU, kusur değil.**
Koordinatörün uyardığı Hafsî/296-yıl yanlış atfının (`§3.5.-1`) DÜZELTİLMİŞ
olduğunu da bekliyorum.

## Görselden çıkarılan kutu/tarih

| Alan | Değer |
|---|---|
| Tarih | 1577-01-01 |
| Kutu | 25,83–31,48K / 8,15–15,74D |
| Zoom | 5,3 |
| Madde | "Fizan sancağının Trablusgarp'a bağlanışı — Murzuk ve Sahra kervan kavşağı" |
| Görünen desen | "Trablus bölgesi" etiketinin çevresinde, Osmanlı kırmızısı ortasında İKİ beyaz/boyanmamış leke |

## Ölçüm ① — Hafsî atfı düzeltilmiş mi? (koordinatörün istediği çapraz kontrol)

`CLAUDE.md §3.5.-1`'in bahsettiği 12 Fizan noktası (Murzuk, Gât, Sokna,
Sebha, Ubârî …) tek tek okundu:

```
Murzuk (Fizan)  s: 1281→1577-01-01 "kanem-bornu" (ARTIK hafsi DEĞİL)
Sebha            s: 1281→1577-01-01 "kanem-bornu"
Ubârî            s: 1281→1577-01-01 "kanem-bornu"
```

🟢 **DÜZELTİLMİŞ.** Üçü de artık TDV'nin kendi anlattığı hanedanı
(Kânim Sultanlığı/Kânim-Bornu) taşıyor, Tunus'taki Hafsîler değil.
296 yıllık yanlış atıf ARTIK YOK.

⚠️ **AMA BAŞKA, ZATEN BİLİNEN BİR BORÇ VAR** (yeni değil, `data/olaylar_ek8.js`
satır 116-126'da ÖNCEDEN belgelenmiş): kronoloji maddesinin kendi notu
şöyle diyor: *"TDV BU SÜRECİ 1551'E BAĞLAR, 1577'YE DEĞİL"* — TDV `fizan`
gövdesi (bu turda ben de bağımsız okudum, WebFetch): *"1551'de Trablusgarp'ı
ele geçirerek eyalet haline getirdiler ve Fizan da bu eyalete bağlı bir
sancak olarak teşkilâtlandırıldı."* Atlas verisi 1577'yi kullanıyor
(26 yıllık fark) ve bu **BEN BULMADIM, zaten kayıtlı** — tekrar
raporlamıyorum, yalnız H-0012'nin tarihiyle örtüştüğü için not düşüyorum.

## Ölçüm ② — kutu içi ve blob konumlarında nokta sayımı

```
kutu ici (25.83-31.48K / 8.15-15.74D): 12 nokta
  Murzuk, Mizde, Zâdâmis(Ghadames), Sebha, Ubârî, Sinâvin, Derc,
  Türgan, Zevîle, Üllüzü + 2 kasıtlı-boşluk erg noktası
  (İdehân Murzuk 26,2K/12,4D · İdehân Ubârî 25,9K/11,3D — bos:"devletsiz")

DAR bant (27-31K / 8-15D, blob'ların göründüğü orta şerit): SADECE 3 nokta
  Derc (30,155K) · Ghadames (30,133K) · Sebha (27,038K)
  ⇒ 27,5-29,5K arası, kutunun BÜYÜK KISMINDA (≈2° enlem × 6° boylam)
    HİÇBİR nokta yok — ne yerleşim ne dolgu.
```

Blob merkezleri görselin piksel oranlarından enlem/boylama çevrildi ve
en yakın noktaya mesafe ölçüldü:

```
BLOB-1 (büyük, sağ-üst)   ~28,37K/12,51D → en yakın: Ubârî, 200,1 km
BLOB-2 (küçük, sol-alt)   ~27,52K/9,67D  → en yakın: Üllüzü, 166,3 km
```

⚠️ Blob merkezleri görselden PİKSEL ORANIYLA tahmin edildi, kesin değil —
ama ikisi de `CLAUDE.md §5`'in belgelediği **150-200 km "kırılma bandı"**
içinde/sınırında çıkıyor (*"kaplama 0-150 km bandında %89-100, 200 km'de
kırılıyor"*). BLOB-1 tam sınırda (200,1 km ≈ TAVAN_KM).

## Sınıflama

🟢 **NOKTASIZLIK, ve BOŞLUK muhtemelen DOĞRU — ama dünkünden bir kademe
farklı: BELGESİZ.**

```
Dün (H-0017) Libya kıyısı    0 nokta, TDV ad vermiyor, DOĞRU boşluk
Dün (H-0011) Şattülarab      nokta VAR (1-2), kıyı çok karmaşık, artefakt
Bugün (H-0012) bu bölge      nokta YOK (geniş bantta), TAVAN_KM sınırında/
                             ötesinde, AMA — komşu erg'lerin (İdehân
                             Murzuk/Ubârî) aksine — bir bos:/kasıtlı_bosluk
                             DOLGU NOKTASI ile hiç BELGELENMEMİŞ
```

Bu bölge coğrafi olarak **Hamâde el-Hamrâ** benzeri bir kayalık/kumluk
Sahra plâtosudur — Trablus kıyı kuşağının (Derc, Ghadames, Mizde) güneyi
ile Fizan vaha zincirinin (Sebha, Ubârî, Murzuk) kuzeyi arasında, tarihte
hiçbir zaman yerleşim veya devlet denetimi taşımamış bir alan. TDV
`fizan`/`berka` maddeleri buraya ayrıca bir isim/idare atfetmiyor (bu
turda ayrıca aranmadı, dünkü Libya kıyısı ölçümüyle aynı desen — kapsam
dışı bırakıldı).

⚠️ **ÖLÇEMEDİM (D107):** Boşluğun TAM motor mekanizması (`TAVAN_KM` kırpması
mı, yoksa `unary_union` birleşiminin bu iki uzak petek arasında hiç
kesişmemesi mi) — `arac/uret_petek.py` donuk, koşturulamadı. Ölçtüğüm
yalnız KORELASYON: nokta yokluğu + 166-200 km mesafe + `CLAUDE.md`'nin
kendi belgelediği kırılma bandı üst üste düşüyor.

## "Nasıl engelleriz?" — çare önerisi (nokta YAZILMADI)

```
① BELGELEMEK (en düşük risk)  Komşu erg'lerdeki (İdehân Murzuk/Ubârî)
   emsalle AYNI YÖNTEMLE bir-iki DOLGU noktası eklemek (ör. "Hamâde
   el-Hamrâ" adıyla, bos:"devletsiz", kasitli_bosluk:true) — boşluğu
   KAPATMAZ (zaten kapanması YANLIŞ olur, orası gerçekten sahipsizdi)
   ama en yakın peteğin oraya doğru YARIÇAP TAVANINI aşarak ışınsal
   çıkıntı üretmesini önler (H-0011/H-0017'nin dolgu-nokta çaresiyle
   AYNI mantık). Kaynak gerekmez (sahipsiz kalacağı için).
② HİÇBİR ŞEY YAPMAMAK  Boşluk zaten muhtemelen DOĞRU (kusur değil);
   yalnız görsel olarak "delik" izlenimi veriyor. Emre'nin sorusu bir
   ONAY isterse ①'in ZORUNLU olmadığı söylenebilir.
```
🔴 Nokta YAZILMADI — `data/` donuk, ve dolgu noktası bile bir coğrafi
karar (tam sınırlar, ad) gerektiriyor.

## Bulunamadı / ölçülemedi

- Blob'ların TAM piksel-koordinat karşılığı (yalnız oransal tahmin).
- Motorun ışınsal artefaktı ürettiği TAM mekanizma (motor donuk).
- TDV `berka`/`fizan` maddelerinin bu spesifik plâtoya (varsa) bir ad
  verip vermediği — bu turda AYRICA aranmadı (dünkü Libya kıyısı
  ölçümüyle aynı desen varsayıldı, kapsam dışı).
