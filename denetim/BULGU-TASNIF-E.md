# BULGU — TASNİF-E (HAZIR KITA SONNET 93)

Paketler: `parti-emrelic-0032 · 0033 · 0036` — **34 madde** ölçüldü
(`SINIFLANMADI.md`de bu üç paket için tam olarak 34 satır var; ORHANGAZİ'nin
şartnamedeki "~39" tahmini kaba sayıydı, gerçek sayı ölçüldü).

Her madde için iki ölçüm yapıldı: `git log -S` (zaten yapılmış mı) +
`py arac/_yer_ara.py` (kayıt var mı, aleti kullandım).

```
34 madde → 🟢 kapanmış 7   🟠 uygulanmadı 2   🔵 kümeye git 24   🔴 senin-kararin 1
```

---

## 🟢 KAPANMIŞ (7) — `denetim/HUKUM-TASNIF-E.json`'a yazıldı

| parti | madde | hüküm | özet |
|---|---|---|---|
| 0033 | H-0002 | zaten-dogru | Astarhan Hanlığı kimliği+renk+5 nokta ZATEN var (commit 75db3d4) |
| 0033 | H-0021 | zaten-dogru | r3556'da TABİ kademesi indi, Murzuk/Zilla artık v: taşıyor, d: değil |
| 0036 | H-0002 | cozuldu | TARALI ALAN fix (e53c86a) damgaya girdi (beb4744, r3535), şimdi r3556 |
| 0036 | H-0003 | zaten-dogru | Aynı kök, üç alt-soru zaten doğruydu, yayın adımı da bitti |
| 0036 | H-0004 | cozuldu | Aynı kök, aynı yayın |
| 0036 | H-0006 | tekrar | H-0007 ile aynı sahne |
| 0036 | H-0014 | cozuldu | Aynı TARALI ALAN kökü, damga güncel |

---

## 🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI (2) — `data/yer_yama_uyg2.js`'e YAZILDI (UYGULAMA-2 aşaması)

| parti | madde | durum |
|---|---|---|
| 0033 | H-0001 | Erzincan d: 41 yıl erken. Çare `BULGU-PAKET-0033-0034.md`de yazılıydı, veriye hiç işlenmemişti. **UYGULAMA-2'de yer_yama_uyg2.js'e yazıldı.** |
| 0033 | H-0003 | İran Koridoru (`data/yer_yama_iran.js`, 27 Ağu) Hoy+Mîyandoab için d: ekleri hazırlamıştı, girdi.py'ye/uygulamaya hiç bağlanmamıştı. **UYGULAMA-2'de yer_yama_uyg2.js'e yazıldı** (Sulduz/Dizmâr/Sarukurgân/Saidâbâd/Urmiye/Selmâs kalıcı bulunamadı kaldı). |

---

## 🔵 KÜMEYE GİT (24)

### icerik-talebi (5)
| parti | madde | özet |
|---|---|---|
| 0032 | H-0003 | Karakoyunlu-Uzun Hasan savaş yeri/tarihi — TDV yetersiz, Encyclopaedia Iranica gerek |
| 0032 | H-0009 | Topkapı Sarayı ek-okuma/merak kartı yazımı |
| 0032 | H-0010 | Sultani (ilk Osmanlı altını) görsel araştırması (telif dahil) |
| 0032 | H-0014 | MERAK.md kuyruğunda zaten #4 kayıtlı — yeni iş değil, sırasını bekliyor |
| 0033 | H-0018 | Tebriz harekâtı güzergâhı — Emre'nin kendi isteği, dedicated çok-kaynaklı araştırma |

### emilme (8) — yeni nokta/koordinat araştırması gerektiriyor, bu turda YAZILMADI
| parti | madde | özet |
|---|---|---|
| 0032 | H-0016 | Bug-Dinyester arası (Yedisan civarı) sıfır nokta |
| 0033 | H-0006 | Çağatay Hanlığı seyrek nokta |
| 0033 | H-0007 | Kazak Hanlığı seyrek nokta |
| 0033 | H-0008 | Sibir Hanlığı seyrek nokta |
| 0033 | H-0009 | Nogay Ordası/Buhara arası (Aral/Üstyurt) boş şerit |
| 0033 | H-0010 | Kandehar seyrek nokta |
| 0033 | H-0014 | Kanem-Bornu 2 nokta 500 km ayrı, ara nokta gerek |
| 0036 | H-0015 | Polesya/Pinsk sıfır nokta |

### degismez2 (3)
| parti | madde | özet |
|---|---|---|
| 0033 | H-0015 | Nusaybin/Derik/Silopi 1515-01-01 kırılması hangi olaylar*.js maddesiyle eşleşiyor — kontrol gerek |
| 0033 | H-0016 | Erzurum/Aşkale/Palu/.../Nusaybin fetih sırası + enklav sorusu birlikte toparlanmalı |
| 0036 | H-0012 | Şammar/Reşîdî kuruluşu (devletler.js künyesi zaten f:1835 diye düzeltilmiş) kronolojide (olaylar*.js) hiç yok — Hail noktası da veride yok, madde yazımı KRONOLOJİ İÇERİK'in işi |

### cizim-geometri (3)
| parti | madde | özet |
|---|---|---|
| 0033 | H-0013 | Songhay küçük boyama parçası — canlı haritada zoom gerekiyor |
| 0033 | H-0019 | Tebük-Medine 1517 görseli belirsiz, tekrar bakılmalı |
| 0036 | H-0005 | Ahıska/Ahılkelek arası üçgen boşluk — veri doğru, Voronoi görseli kontrol edilmeli |

### sahiplik-teyidi (4 — bu turda kısmen UYGULAMA-2'de yazıldı, geri kalanı bağımlı)
| parti | madde | özet |
|---|---|---|
| 0033 | H-0020 | Manama/Bahreyn zinciri — **UYGULAMA-2'de kısmen yazıldı** (1602-1783 açık kaldı) |
| 0036 | H-0007 | Dörtyol/Erzin/Yumurtalık v: boş — **UYGULAMA-2'de yazıldı** |
| 0036 | H-0008 | Urfa v: yanlış — **UYGULAMA-2'de kısmen yazıldı** (bitiş tahmini) |
| 0036 | H-0009 | Güzergah fikri, H-0007/H-0008'e bağlı — onlar yazıldıktan sonra değerlendirilebilir |
| 0036 | H-0011 | Maraş v: yanlış — **UYGULAMA-2'de kısmen yazıldı** (bitiş tahmini) |

---

## 🔴 SENİN-KARARIN (1)

| parti | madde | özet |
|---|---|---|
| 0033 | H-0017 | Gürcistan'ın Kafkas kuzeyine dar taşması görseli DOĞRU (nokta yok o bölgede). Tasarım kararı: nokta eklensin mi (tek kimlik kalır) yoksa gurcistan alt-krallıklara mı bölünsün (Kartli/Kaheti/İmereti/Samtskhe) — KAFKAS KRONOLOJİ kapsamına giren bir seçim, TASNİF seçemez. |

---

## AKSAKLIK — bekletmeden bildiriyorum

`SINIFLANMADI.md`deki 0033/H-0020 notu "1602-1717 Safevî/Hürmüz, 1717-1783
Umman" diyordu; TDV `bahreyn` maddesini doğrudan okudum, bu iddia METİNDE
YOK — TDV o aralığı "İranlılarla Arap kabileleri arasında hakimiyet
mücadelesine sahne oldu" diye çekişmeli tanımlıyor, tek devlet adı
vermiyor. Notun kaynağı TDV değilmiş gibi görünüyor; ben TDV'siz olan
kısmı YAZMADIM (§3.5 hayalet devlet riski). Umman/Hürmüz iddiasını
doğrulamak isteyen bir sonraki tur ayrı kaynak taramalı.
