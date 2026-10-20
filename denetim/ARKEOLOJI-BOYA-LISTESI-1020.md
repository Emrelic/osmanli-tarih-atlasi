# Arkeoloji kültür künyeleri — YENİ BOYA İHTİYACI (MÖ-MOTOR için belge, 20 Ekim 2026)

VERI-MO-ARKEO `renkler.py`/`uret_petek.py`/`girdi.py`/`motor_onbellek.py` dosyalarına DOKUNMADI (motor dondurma).
`data/devletler.js`e 20 kültür künyesi eklendi (`tur:"kultur"`, `harita:` YOK ⇒ boyanmaz). Motor MÖ'ye açıldığında
her künyeye `harita:` anahtarı ve `renkler.py BOYALAR` karşılığı gerekir; şartname §5.4: **desenli/şeffaf (tarama)**, düz devlet rengiyle karışmaz.

| künye id | ad | bölge | f | t | öneri (tarama ailesi) |
|---|---|---|---|---|---|
| natufiyen | Natufiyen | suriye-filistin | -12649 | -9549 | levant-avcı: ocre-tarama |
| ppna-guney-levant | PPNA Güney Levant | suriye-filistin | -9699 | -8649 | levant-neolitik: ocre-tarama (koyu) |
| ppnb-guney-levant | PPNB Güney Levant | suriye-filistin | -8649 | -6749 | levant-neolitik |
| ppnc-guney-levant | PPNC Güney Levant | suriye-filistin | -6749 | -6399 | levant-neolitik |
| ubaid-kultur | Ubaid | mezopotamya | -6499 | -3799 | mezopotamya-kultur: kil-tarama |
| halaf-kultur | Halaf | mezopotamya | -5899 | -5499 | mezopotamya-kultur |
| uruk-gec-kultur | Geç Uruk (IV–III) | mezopotamya | -3349 | -2999 | mezopotamya-kultur |
| erken-harappa, gec-harappa | Erken/Geç Harappa | guney-asya | -3199/-1899 | -2599/-1599 | indus-kultur: kızıl-tarama |
| naqada-kultur, pre-kerma, erken-hartum, fayum-neolitik | Nil/Nubya kültürleri | misir-sudan | çeşitli | | nil-kultur: yeşil-tarama |
| peiligang, yangshao, shangshan, kuahuqiao, hemudu, liangzhu | Çin Neolitik kültürleri | dogu-asya | çeşitli | | cin-neolitik: gri-yeşil-tarama |
| lepenski-vir-trapez | Lepenski Vir geçiş evresi | balkanlar | -6119 | -5974 | avrupa-neolitik: mavi-tarama |

Kuralı: boya anahtarı eklenince `py arac/renk_olc.py` yeniden koşulur; `BOYALAR` tanımsızsa bölge boyanmaz (CLAUDE.md «Veri kuralları»).
Henüz hiçbir künyede `s:` dönemi yok — yerleşim noktası yoksa petek de yok; boya yalnız MÖ-MOTOR yerleşimleri motora aldığında anlam kazanır.
