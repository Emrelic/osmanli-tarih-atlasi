# UMIT GÖREVİ — Bölge denetimi (KASA, 15 Kasım 2026, Emre'nin talimatı)

Makine: UMIT (eczane SQL makinesi: işlemci ≤%25, tek ajan, Sonnet; Opus yalnız çatışma/karar). Dal: `umit-1115-bolge-<bolge>`; `origin`e iter, `main`e DEĞİL; dal adını KASA'ya bildirir. `data/yerlesimler.js`'e commit YOK (YAYIN BAYAT duvarı, koşu inişine kadar; düzeltmeyi `denetim/YERLESIMLER-JS-KUYRUK-1114-EK*.md` benzeri kuyruk dosyasına yaz). Üretilmiş dosyalar yasak. Önce `git fetch` + `origin/main`den yeni dal.

## Kapsam (sırayla, bir seferde TEK bölge)
1. Moğolistan (EKSİK hükmü, 1691-1911 aktif künye 0) 2. Çinhindi 3. Maritim GD Asya (Endonezya, Malezya, Filipinler, Yeni Gine) 4. Hint alt kıtası (Hindistan, Pakistan, Nepal, Bhutan, Bangladeş, Sri Lanka) 5. Çin (Tibet, Doğu Türkistan dahil) 6. Orta Asya cumhuriyetleri 7. Almanya/HRE 8. İtalya ortaçağ.
Başlangıç verisi: `denetim/KAPSAM-OLCUM-1114.md` (künye/yerleşim/madde sayıları, yerleşimsiz künyeler, seyrek dilimler).

## Her bölge için 7 adım (her adımın çıktısı `denetim/BOLGE-<bolge>-<adim>-1115.md`)
1. **Künye envanteri:** bölgede HER ZAMAN varolmuş devlet/hanedan/sultanlık/krallık (kaynaktan: bölge tarihi + atlas künyeleri), atlasta karşılığı olan/olmayan. Eksik devlet listesi (kaynakla, `f`/`t` gün hassasiyetiyle).
2. **Kronoloji teyidi:** her künyenin her kronoloji maddesi tek tek: gün/ay/yıl kaynakla doğru mu (kaynak sırası: TDV → İSAM/TTK → DergiPark/YÖK → bölgenin KENDİ dillerindeki akademik kaynaklar: Çince, Japonca, Hintçe/Farsça/Urduca, Vietnamca, Tayca, Endonezce, Moğolca, Rusça, Almanca, İtalyanca…; Vikipedi tek dayanak değil). Çelişkide hakemli karar (≥2 bağımsız akademik kaynak, CLAUDE.md). Takvim kuralı: ay-güneş/Jülyen çevirisi `ic_not`ta.
3. **Harita uyumu:** her madde için haritada o değişim görünüyor mu (yer_id/odak_yer çözülüyor mu, yerleşim penceresi kırılması ±30 gün). Eksik kırılma/fazla kırılma listesi (Değişmez 2/2s/2t).
4. **Yerleşim kronolojisi:** her yerleşimin sahneye çıkış tarihi (kuruluş/ilk anılma/devlet geçişleri) kaynakları ve atlas pencereleriyle karşılaştır; yerleşim başına bağımsız kronoloji → genel kronolojiyle örtüştür, farkları listele. Sahipsiz/boşluk (`__BOSLUK__`) varsa boşluk doldurma merdiveni.
5. **Renk:** künyenin `harita:` anahtarı, `renkler.py` BOYALAR, komşu devletlerle ayırt edilebilirlik (`py arac/renk_olc.py`), ölü/çakışan renkler. `renkler.py`'a DOKUNMA (tuz); öneriyi yaz.
6. **Enklav/eksklav:** bölgede başka devletin içinde kalan parçalar (örn. Portekiz Goa/Makao/Diu, Hollanda/İspanya kaleleri, Hanse/serbest şehirler, piskoposluk enklavları, Papalık, San Marino/Venedik kara toprakları); atlasta `s:` pencere ve `eksklav` alanıyla doğru modellendi mi; Değişmez 8 (şehir bölgesi ülke sınırını aşamaz).
7. **Düzeltme:** kaynaklı düzeltmeleri dalda commit'le (veri kuralları: gün yaz, tarih uydurma, mükerrer tara, künye ömrü kontrolü), `py arac/denetle.py` + `odak_olc.py` önce/sonra; D4c/D2 ihlali bırakma; `yerlesimler.js` kısmı kuyruğa.

## Kurallar
- Ölçülmeyen "ölçülmedi" yazılır; okunamayan kaynak "okunmadı" (sayılmaz).
- Tek bölge bitmeden sonrakine geçme; bölge bitince rapor: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum.
- Çeviri işi ertelendi (site bitene kadar); yeni arayüz metni yazma.
- Tavan aşımı olursa ölç, aç, raporla (Emre 1 Kasım kuralı); Değişmez 2 ölçütünü gevşetme.
- Sistemi boğma: ağır koşturma (`denetle` 13 dk, RAM) yalnız eczane yükü düşükken; aynı anda tek ağır süreç.
