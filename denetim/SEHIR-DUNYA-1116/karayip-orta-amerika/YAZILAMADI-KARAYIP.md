# YAZILAMADI — Karayip + Orta Amerika F2 (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_karayip_1.js`. **Yazılamadı ≠ kayıt yok**: bu şehirlerin tarihçesi var; bu turda
kurallara (tanık cümlesi, ≤3 km, ikinci kaynak) uyan bir başlangıç yazılamadı.

| Şehir | Liste koordinatı | Neden yazılamadı | Ne okundu | Sonraki tur |
|---|---|---|---|---|
| Panama City (Panamá) | 8.99360, -79.51973 | **≤3 km kuralı.** Britannica iki kuruluş yeri verir: Panamá Viejo 1519 ve Casco Viejo 1674 (eski yerin ~8 km güneybatısında). GeoNames 'Old Panama' (RUIN) 9°00′28.37″N 79°29′22.74″W → liste noktasına ≈3,7 km (>3). Casco Viejo'nun koordinatı okunmadı; Britannica'daki 8 km'ye göre o da büyük olasılıkla >3 km. Liste noktası iki tarihî çekirdeğin arasında, 20. yy kentinin içinde kalıyor → hangi kuruluşun bu noktaya ait olduğu kaynakla gösterilemedi. | Britannica «Panama City» tam gövde; GeoNames arama sayfası; UNESCO 790 → HTTP 404 (alan 2025'te 1582 «Colonial Transisthmian Route» ile ilişkilendirilmiş; 1582 sayfası kuruluş tarihi vermiyor) | Casco Viejo koordinatı (GeoNames/TGN) ölçülsün; ≤3 km ise ilk.t 1674 (Britannica tanığı: "rebuilt about 5 miles (8 km) southwest of the old Panamá Viejo site in 1674"), değilse liste noktası Casco Viejo'ya kaydırılsın. Panamá Viejo ayrı kayıt. |
| Managua | 12.13282, -86.25040 | **İlk tanık yok.** Britannica sömürge dönemi için yıl vermez ("Throughout the Spanish colonial period, Managua was recognized only as an Indian town"). Yazılı ilk yıllı tanık 1857 başkentlik cümlesidir ve şehir adını taşımaz ("Its choice as a permanent capital in 1857…"). | Britannica «Managua» tam gövde | Nikaragua akademik kaynağı (ör. 1819 'Leal Villa de Santiago de Managua' unvanı; bu turda KAYNAKLA okunmadı, hafızadan yazılmadı). |

Kapsam dışı bırakılan yok: istenen 12 şehirden 10'u yazıldı, 2'si burada.

`tarihce_var` iki yönlü kontrol: 12 hedefin hiçbiri yerel `data/sehir_tarihce_*.js` (32 dosya) ve
`origin/main` (49 dosya) içinde ≤3 km ya da aynı adla kayıtlı değil (ölçüldü, 17 Kasım 2026).

## F2B güncellemesi (UMIT, 17 Kasım 2026)

Panamá ve Managua `data/sehir_tarihce_karayip_2.js`e YAZILDI (panama-viejo-pa, panama-city-casco-pa, managua-ni); ayrıntı `denetim/SEHIR-DUNYA-1116/KARAYIP-F2B-RAPOR-UMIT.md`. Managua zayıf: tek tanık (Rodgers, NLR 49, 2008; 1852), başkent yılı çelişkisi 1852/1855/1857 çözülmedi.
