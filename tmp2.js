import data from '/Users/spencer/mountain/fr-compromise/data/models/adjective/index.js'

Object.keys(data).forEach(k => {
  if (k === data[k][0] && k === data[k][1] && k === data[k][2]) {
    console.log(k)

  }
  if (k.endsWith("eux")) {
  }
})

//"voyant": ["voyante", "voyants", "voyantes"],
let obj = {
  "affreux": ["", "", ""],
  "ambitieux": ["", "", ""],
  "anxieux": ["", "", ""],
  "audacieux": ["", "", ""],
  "avantageux": ["", "", ""],
  "aventureux": ["", "", ""],
  "chaleureux": ["chaleureuse", "chaleureux", "chaleureuses"],
  "chanceux": ["chanceuse", "chanceux", "chanceuses"],
  "contagieux": ["contagieuse", "contagieux", "contagieuses"],
  "copieux": ["copieuse", "copieux", "copieuses"],
  "courageux": ["courageuse", "courageux", "courageuses"],
  "crémeux": ["crémeuse", "crémeux", "crémeuses"],
  "curieux": ["curieuse", "curieux", "curieuses"],
  "dangereux": ["dangereuse", "dangereux", "dangereuses"],
  "ennuyeux": ["ennuyeuse", "ennuyeux", "ennuyeuses"],
  "fabuleux": ["fabuleuse", "fabuleux", "fabuleuses"],
  "gracieux": ["gracieuse", "gracieux", "gracieuses"],
  "harmonieux": ["harmonieuse", "harmonieux", "harmonieuses"],
  "heureux": ["heureuse", "heureux", "heureuses"],
  "hideux": ["hideuse", "hideux", "hideuses"],
  "honteux": ["honteuse", "honteux", "honteuses"],
  "joyeux": ["joyeuse", "joyeux", "joyeuses"],
  "défectueux": ["", "", ""],
  "délicieux": ["", "", ""],
  "douloureux": ["", "", ""],
  "douteux": ["", "", ""],
  "frileux": ["", "", ""],
  "furieux": ["", "", ""],
  "généreux": ["", "", ""],
  "glorieux": ["", "", ""],
  "juteux": ["", "", ""],
  "majestueux": ["", "", ""],
  "malheureux": ["", "", ""],
  "merveilleux": ["", "", ""],
  "minutieux": ["", "", ""],
  "miraculeux": ["", "", ""],
  "moelleux": ["", "", ""],
  "monstrueux": ["", "", ""],
  "morveux": ["", "", ""],
  "mystérieux": ["", "", ""],
  "nerveux": ["", "", ""],
  "nombreux": ["", "", ""],
  "parcimonieux": ["", "", ""],
  "paresseux": ["", "", ""],
  "périlleux": ["", "", ""],
  "pieux": ["", "", ""],
  "populeux": ["", "", ""],
  "précieux": ["", "", ""],
  "prestigieux": ["", "", ""],
  "prodigieux": ["", "", ""],
  "religieux": ["", "", ""],
  "rigoureux": ["", "", ""],
  "scandaleux": ["", "", ""],
  "séditieux": ["", "", ""],
  "sérieux": ["", "", ""],
  "silencieux": ["", "", ""],
  "somptueux": ["", "", ""],
  "vaniteux": ["", "", ""],
  "vertueux": ["", "", ""],
  "vicieux": ["", "", ""],
  "vieux": ["", "", ""],
  "vigoureux": ["", "", ""],
}