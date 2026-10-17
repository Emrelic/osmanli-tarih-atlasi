# -*- coding: utf-8 -*-
"""OLAY KAYITLARI — data/olaylar*.js'i biçimden bağımsız okur.

İki yol, ikisi birbirini sınar:
- yukle()      dosyayı TARAYICI GİBİ (node, window.*) yükler → kayıt sözlükleri.
               Ölçüm buradan yapılır (denetle_duygu).
- araliklar()  metinde kaydın [bas, son] konumu — dosyaya YAZAN betik içindir
               (uret_duygu). Yorumu, string'i atlar; kaydın içindeki kaydı
               (`alt_kronoloji:[{t:…}]`) ayrı kayıt saymaz.

14 Ekim 2026: eski regex tarayıcı (1) JSON anahtarını (`"t":`) görmüyordu,
(2) `/* */` ve `//` içindeki 3 kaydı canlı sayıyordu, (3) olaylar.js'in 29
`alt_kronoloji` adımını ayrı madde sayıyordu (duygusuz 29 şişikti, üreteç
onlara duygu yazacaktı). Gerçek evren = window.* dizilerinin üst düzey kaydı.
"""
import io, json, re, subprocess

ACILIS = re.compile(r'\{\s*(?:t|"t")\s*:\s*"\d{4}(?:-\d{2}){0,2}"')

_NODE = r"""
const fs=require('fs'),R={};
for(const yol of JSON.parse(fs.readFileSync(0,'utf8'))){
  const W={};
  new Function('window',fs.readFileSync(yol,'utf8'))(W);
  const out=[];
  const gez=x=>{
    if(Array.isArray(x)){x.forEach(gez);return;}
    if(x&&typeof x==='object'){
      if(typeof x.t==='string'&&/^\d{4}/.test(x.t)){out.push(x);return;}
      Object.values(x).forEach(gez);
    }
  };
  Object.values(W).forEach(gez);
  R[yol]=out;
}
process.stdout.write(JSON.stringify(R));
"""


def yukle(yollar):
    """{yol: [kayıt, …]} — ölçülemezse RuntimeError (ölçülemedi ≠ boş)."""
    try:
        c = subprocess.run(["node", "-e", _NODE], input=json.dumps(yollar).encode("utf-8"),
                           capture_output=True, timeout=300)
    except (OSError, subprocess.SubprocessError) as e:
        raise RuntimeError("node koşturulamadı: %s" % e)
    if c.returncode != 0:
        raise RuntimeError("node çıkış %d: %s" % (
            c.returncode, c.stderr.decode("utf-8", "replace")[-200:]))
    return json.loads(c.stdout.decode("utf-8"))


def _atla(t, i):
    """i'de string ya da yorum başlıyorsa bittiği yerin bir sonrası, yoksa None."""
    c = t[i]
    if c == "/" and t.startswith("//", i):
        j = t.find("\n", i)
        return len(t) if j < 0 else j
    if c == "/" and t.startswith("/*", i):
        j = t.find("*/", i + 2)
        return len(t) if j < 0 else j + 2
    if c in "\"'`":
        j = i + 1
        while j < len(t):
            if t[j] == "\\":
                j += 2; continue
            if t[j] == c:
                return j + 1
            j += 1
        return len(t)
    return None


def _kapanis(t, i):
    """t[i] açılış parantezi; eşinin konumu ya da None."""
    d = 0
    while i < len(t):
        j = _atla(t, i)
        if j is not None:
            i = j; continue
        c = t[i]
        if c in "[{(":
            d += 1
        elif c in "]})":
            d -= 1
            if d == 0:
                return i
        i += 1
    return None


def son_kod(t, bas, son):
    """Kaydın kapanış `}`ünden önceki son KOD karakterinin bir sonrası
    (yorum ve boşluk sayılmaz) — yeni alan buraya eklenir; `}` önünde
    `// …` varsa alan yorumun içine düşmesin."""
    i, p = bas + 1, bas + 1
    while i < son:
        j = _atla(t, i)
        if j is not None:
            if t[i] in "\"'`":
                p = j
            i = j; continue
        if not t[i].isspace():
            p = i + 1
        i += 1
    return p


def araliklar(t):
    """Üst düzey, yorumda olmayan kayıtların [(bas, son, metin)] listesi (son dahil)."""
    out, i = [], 0
    while i < len(t):
        j = _atla(t, i)
        if j is not None:
            i = j; continue
        if t[i] == "{" and ACILIS.match(t, i):
            son = _kapanis(t, i)
            if son is None:
                break
            out.append((i, son, t[i:son + 1]))
            i = son + 1
            continue
        i += 1
    return out
