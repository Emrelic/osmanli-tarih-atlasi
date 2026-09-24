# A-OKYANUSYA-0078 — 1923 A katmanı: Okyanusya yerleşim noktaları

Şartname `oturumlar/BITIR-1923-0078.md` · dosyam `data/yerlesimler_a78_okyanusya.js`
→ **`window.YERLESIMLER_A78_OKYANUSYA`** · 61 kayıt · BAĞLANMADI (girdi.py koordinatörün).

## 1. Ölçüm aletleri (üçü de pozitif kontrollü)
| alet | ne ölçer | B9 |
|---|---|---|
| `A-OKYANUSYA-0078-olc.py [--sonra]` | 1923-09-01'de bölge bölge nokta sahipleri | Noumea/Samarai bulundu ✓ |
| `A-OKYANUSYA-0078-sina.py` | ad benzersiz (bütün `yerlesimler*`/`yer_*`/`bekleyen*`), 3 km, künye penceresi (pad), BOYALAR, zincir | bozuk 2 kayıtta 7/7 hata ✓ · gerçek dosya 0 hata |
| `A-OKYANUSYA-0078-alan.py [--sina]` | 0,25° kara ızgarasında en yakın noktanın sahibi — **VEKİL, petek değil** | sahte nokta 61/1105 hücre aldı ✓ |
| `A-OKYANUSYA-0078-denetle.py [--yok]` | `denetle.py`, dosyam `GIRDI_DOSYALARI`na BELLEKTE eklenmiş (girdi.py'ye dokunmaz) | 87 ↔ 88 dosya basıyor |

## 2. ÖNCE → SONRA (1923-09-01)
**Nokta:** Yeni Gine sahipli 6 → 15 · Bismarck/Solomon avustralya 4 → 8 · Avustralya 75 → 95 (+Tazmanya) ·
Yeni Zelanda 3 → 19 · Mikronezya 0 → 5 · Polinezya 2 → 8 · Nauru/Gilbert/Ellice 0 → 3.

**Alan vekili (düz Voronoi; motor ağırlığı/yaslama/maske YOK — kesin alan koşudan sonra):**
| bölge | kara hücresi | sahipsiz ÖNCE → SONRA |
|---|---|---|
| Yeni Gine anakarası | 1105 | %76,4 → **%67,1** (avustralya %13,8→%21,1 · hollanda %9,8→%11,8) |
| Bismarck + Bougainville | 96 | %30,2 → %30,2 · **ingiltere %9,4 → %0** (Bougainville Gizo'ya emiliyordu = TERS YÖN hatası; Kieta düzeltti) |
| Avustralya anakarası | 11022 | %33,9 → %31,3 |
| Tazmanya | 109 | %73,4 → **%20,2** |
| Yeni Zelanda | 466 | %61,4 → **%9,2** |
| Hawaii | 27 | %63,0 → %44,4 |

## 3. `denetle.py` (dosyam bellekte eklenmiş, `--ayrinti` diff'i)
- Değişmez 1 ✓ 299 → 314 sahipsiz (tavan 324) — +15'in hepsi BELGELİ (`kasitli_bosluk`: `kur:`'suz noktaların sömürge öncesi dilimi, emsal Port Moresby/Madang).
- Değişmez 1c ✓ belgesiz 4 (değişmedi) · Boşluk cinsi ✓ (kabile +3, veri-yok +13).
- Değişmez 2s ✓ kırılma 1422 → 1455 · **AÇIK 169 → 169** (yeni kırılmalar KAPSAM DIŞI: 567 → 596).
- Konum ✓ 9 nokta maske önerisine 0,5–3,8 km kaydırıldı → 0.
- **Değişmez 7 ✗ 673 → 678** — beşi de aşağıda; hüküm koordinatörde.

### Değişmez 7'nin beş yeni satırı
| kayıt | sınıf | gerekçe |
|---|---|---|
| Hamilton (YZ) 1864-08-24 — ada Auckland+Hamilton+Whangārei, 176 km | **HAKİKİ** | Te Ara, K. Pollock, 'King Country region — Māori and European contact' (s.5): 1864 Ōrākau'dan sonra Tāwhiao \"retreated south of the Pūniu River, beyond the ancient aukati … hosted in Ngāti Maniapoto territory until the early 1880s\" — arada Taç denetimi yok |
| Taupō 1868-01-01 — ada Auckland+Hamilton+Napier+Taupō…, 164 km | **HAKİKİ** (aynı aukati) | aynı |
| Launceston 1806-01-01 — tek nokta, 162 km | **HAKİKİ** | 1806'da Port Dalrymple ile Hobart arasında İngiliz yerleşimi yok (Companion: Launceston 1806, Oatlands/Campbell Town 1821) |
| Oatlands 1821-06-03 · Campbell Town 1821 — ada Hobart+Launceston+…, 822–864 km | **SAHTE ALARM — DENİZ** | Tazmanya adası; D7 ölçütü denizi bilmez, ada ≤5 nokta olduğu sürece anakaradan 'kopuk' sayar |

`enklav:true` YAZILMADI: alan motorun okuduğu bir hükümdür ("bu dönemde hinterlandı yok",
yetim petek payı devredilmez) — bu beş yerin hinterlandı VAR. Midlands köprüsü (Oatlands,
Campbell Town) 1901 Launceston adasını KAPATTI (önceki koşuda +1 idi) ama 1821'de iki deniz
alarmı açtı; alan ölçümü için tuttum (Tazmanya sahipsiz %27,5 → %20,2).

## 4. Yazılan 61 kayıt — kaynak özeti
- **Yeni Gine (9):** Merauke 1902-02-12 · Fakfak 1898-12-01 (Kroesen raporları, Overweel 1995) ·
  Daru (himaye 1884-11-06 bildirisi; kuruluş BULUNAMADI) · Kokoda 1904 (ANU 2009) ·
  Aitape 1906 · Kavieng 1900 · Kieta 1905 · Lorengau 1911 (Deutsches Kolonial-Lexikon 1920) ·
  Vanimo (kuruluş BULUNAMADI; 1915-16 var — Mackenzie). İşgal günleri Mackenzie, *The
  Australians at Rabaul* (AWM): Kavieng 1914-10-17 · Kieta 1914-12-09 · Lorengau Kasım 1914 (AY).
- **Pasifik (14):** Apia (Te Papa 1900-03-01; 1914-1918-online 1914-08-29) · Pago Pago 1900-04-17 ·
  Nauru (Viviani, ANU 1970: 1888-10-01 · 1914-11-06 İngiliz idaresi · Haziran 1921 Avustralya) ·
  Tarawa 1892-05-27 (FRUS 1892) · Banaba 1900 · Funafuti 1892 · Papeete 1842-09-09 (FranceArchives) ·
  Avarua 1888 / 1901-06-11 (NZ Legislation SR 1901/531) · Hagåtña 1668-06-16 / 1898-06-21 (Guampedia) ·
  Garapan · Kolonia 1887-03-14 (Hezel, micsem) · Jaluit 1885-10-15 / 1914-10-03 (Spennemann, CSU) ·
  Hilo · Lahaina (Britannica; Office of the Historian 1898-08-12).
- **Yeni Zelanda (16):** Te Ara · NZHistory · 1966 Ansiklopedisi.
- **Tazmanya (6):** Companion to Tasmanian History (UTAS).
- **Avustralya (16):** NT Place Names Register · Landgate (WA) · Queensland Places · Britannica · WA Museum · Heritage Council WA.
- Koordinatlar gazetteer (OSM/Nominatim) — kaynaklı DEĞİL.

## 5. Bulunamadı / yazılmadı
- Daru, Vanimo kuruluş yılı · Morobe (kaynak kendiyle çelişiyor: 1909 / 1910-04-01; koordinat belirsiz) ·
  Kerema, Buna, Lae, Sorong, Kaimana, Serui (1923 öncesi idare merkezi) · Wewak (1930'lar).
- Koror, Chuuk: 1914 Japon işgal günü/ayı güvenilir kaynakta YOK (yalnız Vikipedi ← Peattie; kitap açık erişimde değil).
- Port Vila: **BOŞ GÖZ** — İngiliz-Fransız kondominyumu (1906) için künye yok; yazılmadı.
- Strahan, Queenstown (Tas.), Wilcannia: yalnız arama özeti — gövde okunamadı. Tibooburra: kuruluş yok.
- **Alice Springs YAZILAMADI**: atlasın 'Avustralya İç Kesimi (Orta — Arrernte)' beyanı (ek30) aynı yerde (0,2 km).

## 6. Hüküm soruları (koordinatör / Emre)
1. **Zaman penceresiz beyanlar 1923'te sömürge toprağını sahipsiz tutuyor** — dosyaları benim değil:
   `Aotearoa Māori (Kuzey/Güney)` · `Tazmanya (Aborijin Tazmanyalılar)` · `Hawaii Adaları (Birleşme Öncesi)` ·
   `Yap` (ek30) · `Arrernte` (ek30; Alice Springs 1888, NT Register 10219) · `Bau (Fiji Konf.)` (ek30; Fiji 1874 devri) ·
   Yeni Gine iç beyanları (emilme + okyanusya). Hawaii beyanının adı bile "Birleşme Öncesi" ama `bit:` yok.
   Çare: `bit:` ya da sömürge `s:` dönemi — kaynakla, sahibince.
2. **Değişmez 7 tavanı** 673 → 678 (3 hakiki + 2 deniz alarmı) — borç kaydı mı, yoksa D7'ye deniz farkındalığı mı?
3. **`isg:` mi `s:` mi:** Apia 1914-1920, Alman Yeni Ginesi 1914-1921 askerî işgaldi; atlas emsali (Rabaul `s:`) izlendi.
4. `hawaii-kralligi` künyesi 1893-01-17 → 1898-08-12 Geçici Hükümet / Hawaii Cumhuriyeti'ni de kaplıyor (künye işi).
5. Yeni Gine iç kesimi 1923'te hukukî sahip alsın mı? (0077'nin sorusu — hâlâ açık.)
