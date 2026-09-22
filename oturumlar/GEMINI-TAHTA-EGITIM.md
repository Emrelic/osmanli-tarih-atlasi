# GEMINI'ye yapıştırılacak mesaj — tahta ve bekçi eğitimi + G15 görevi

*(21 Eylül 2026 · Emre bu metni Gemini'nin ekranına yapıştıracak. Aşağıdaki
blok olduğu gibi kopyalanır; başlık ve bu paragraf DAHİL EDİLMEZ.)*

---

GEMINI — TAHTA VE BEKÇİ EĞİTİMİ + YENİ GÖREV (G15)

Proje kökü: `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
Bütün komutlar bu klasörün içinden koşar. Tahta adın: **GEMINI** (tam
eşitlik aranır, harfi harfine bu).

## 1. NİÇİN BU MESAJ — ölçülmüş bir kopukluk var

Arazi envanteri raporunu yazdın: `denetim/GEMINI-FLASH-ARAZI-0921.md`,
256 satır, işe yaradı. Üç bulgun kayda geçti (orman maskesi 0 katman ·
Asya tundrası 0 poligon · elde yalnız 4 tundra poligonu, 3'ü Kuzey
Amerika) ve bir kararı doğrudan değiştirdi: arazi sınıfına göre maske
kurma yolu kapandı.

**Ama o raporu tahtaya HİÇ teslim etmedin.** Senin son tahta mesajın
20 Eylül 23:01. Raporu ben ancak `denetim/` klasörüne kendim baktığım
için gördüm. Haber verilmeyen iş, yapılmamış işten ayırt edilemez —
kural bu yüzden var, ceza olsun diye değil.

Bu bölüm iki şeyi öğretiyor: tahtaya nasıl yazılır, ve iş bitince nasıl
boşta durulmaz.

## 2. TAHTAYI OKUMAK

🔴 **`py arac/tahta.py oku` KULLANMA.** O komut gördüğün görmediğin
BÜTÜN mesajları "okundu" damgalar; çıktının yalnız kuyruğuna bakarsan
ortadakiler sessizce kaybolur. Bu gerçekten yaşandı: dört maddelik bir
teslim 1,5 saat kayıp sayıldı.

Bunun yerine tahtanın kendi dosyasını oku ve kendine geleni süz:

```
py -c "import json,io;d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);[print(x.get('no'),x.get('kim'),'->',x.get('kime')) for x in m if x.get('kime') in ('GEMINI','HERKES')][-15:]"
```

Bir mesajın TAM metnini numarasıyla aç (ör. M-4983):

```
py -c "import json,io;d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);print([x for x in m if str(x.get('no')).endswith('4983')][0].get('mesaj'))"
```

📌 **Sana şu an bekleyen bir mesaj var: M-4983.** Önce onu aç ve oku.

## 3. TAHTAYA YAZMAK — kısa mesaj

```
py arac/tahta.py yaz --kim "GEMINI" --kime "1.MURAT" --mesaj "tek satirlik kisa mesaj"
```

## 4. TAHTAYA YAZMAK — uzun ya da Türkçe mesaj 🔴

Uzun metni komut satırına GÖMME. Türkçe karakter, tırnak ve satır sonu
kabukta bozulur; metin sessizce yarım gider. Doğru yol iki adım:

1. Metni bir dosyaya yaz (ör. `gemini/teslim.txt`) — kendi düzenleyicinle,
   `printf`/`echo` ile DEĞİL.
2. Dosyayı tahtaya ver:

```
py arac/tahta.py yaz --kim "GEMINI" --kime "1.MURAT" --mesaj-dosya gemini/teslim.txt
```

Kritik bir mesajsa yazdıktan sonra `oturumlar/tahta.json`dan geri oku ve
tam gittiğini gör. "Yazdım" teslim kanıtı değildir.

## 5. BEKÇİ — iş bitince boşta durma

Sen kullanıcı yazmadıkça uyanmıyorsun. Bekçi tam bunun çaresi: **ön planda**
koşar, mesaj gelene kadar BLOKLAR, mesaj gelince çıkar.

```
py arac/tahta_bekci.py --kim "GEMINI" --cik --ara 30
```

- `--kim "GEMINI"` — yalnız sana ya da HERKES'e gelen mesajda uyanır
- `--cik` — ilk mesajda çıkar (arka plan gerekmez, ön planda çalışır)
- `--ara 30` — 30 saniyede bir bakar

Döngün şu ve her turda aynı:

```
① bekçiyi koştur → mesaj gelene kadar bekler, gelince çıkar
② çıktıdaki M-numarasını tahta.json'dan TAM oku (§2'deki ikinci komut)
③ görevi yap
④ TEK tahta mesajıyla teslim et (§3 ya da §4)
⑤ başa dön — bekçiyi YENİDEN koştur
```

"Bekliyorum" diye mesaj YAZMA. Bekçi sessizdir, sessizliği doğrudur.

## 6. TESLİM BİÇİMİ — üç şey, eksiksiz

① **ne ölçtüm** — sayıyla (kaç dosya, kaç satır, kaç kayıt)
② **ne bulamadım** — açıkça. `bulunamadı` bir sonuçtur; "yok" demek değil.
③ **ne istiyorum** — tek cümle; seçenekliyse şıklarıyla.

## 7. DOKUNMA SINIRI — değişmez

Değiştirmeyeceğin yerler: `data/` · `arac/` · `js/` · `index.html` ·
`CLAUDE.md` · `oturumlar/` (tahtayı yalnız `arac/tahta.py` yazar).
Yazacağın tek yer `gemini/` klasörü ve şartnamende adı geçen rapor dosyası.
Commit ETME. 🔴 Şu an ayrıca tam koşu sürüyor: `data/` ve `arac/` DONMUŞ,
okumak serbest, yazmak yasak.

## 8. ŞİMDİ SIRAYLA YAP

1. **ALINDI yaz** (M-4983'ü okumadan önce, hemen):

```
py arac/tahta.py yaz --kim "GEMINI" --kime "1.MURAT" --mesaj "ALINDI M-4983 · bekci: KURULACAK"
```

2. **M-4983'ü tam oku** (§2'deki ikinci komutla) — G15 görevinin şartnamesi
   orada: katman seçicide sınıflandırılmamış 15 katmanın envanteri
   (`guven-*` · `olcum-*` · `d-sinir-hat-*` · `antlasma-harita-*`).
   Çıktı dosyası: `gemini/G15-KATMAN-0921.md`.
3. **Görevi yap.**
4. **Tek mesajla teslim et** (§6 biçiminde, uzunsa §4 yoluyla).
5. **Bekçiyi kur** (§5) ve bekle.
