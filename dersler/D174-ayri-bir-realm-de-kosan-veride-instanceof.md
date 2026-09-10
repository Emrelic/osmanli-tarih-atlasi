# AYRI BİR REALM'DE KOŞAN VERİDE `instanceof` SESSİZCE FALSE DÖNER — ve bu kusuru GERÇEK VERİ GÖSTEREMEZ.

> Kimlik `D174` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **AYRI BİR REALM'DE KOŞAN VERİDE `instanceof` SESSİZCE FALSE
  DÖNER — ve bu kusuru GERÇEK VERİ GÖSTEREMEZ.**
  *(7 Eylül 2026 · `.js`→`.json` eşdeğerlik sınavı)*
```
vm.createContext        veriyi AYRI bir realm'de koşturur
v instanceof Date       realm'ler arasında FALSE  ⇒ Date kayıtları KAÇIYOR
çare                    Object.prototype.toString.call(v)
```
  🔴 **Ve kusur ancak ZORLANMIŞ bir dalda göründü:** atlas verisinde
  `Date` yok, yani sınav gerçek veriyle sonsuza kadar *"temiz"* derdi.
  Yalnız elle yazılmış bir fikstür (`denetim/_atesleme/kayipli.js`) onu
  ateşledi, ve düzeltmeden sonra GEÇME dalı yeniden koşuldu (yanlış
  pozitif 0).
  📌 `C13`ün **ATEŞLEME** ayağının en temiz kanıtı: ateşleme dalı yalnız
  denetimi sınamıyor — ***denetimin KENDİ kusurunu buldurdu.***
  ⇒ Ve `§11`in *"veriyi kendi dilinin yorumlayıcısına ver"* kuralının
  bir çekincesi doğdu: yorumlayıcıyı **ayrı bir realm'de** çağırmak
  doğru yoldur, ama o realm tip kimliğini kırar. Doğru araç, **yanlış
  varsayımla** kullanılabilir.
