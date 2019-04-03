# Voici les changements que j'ai effectué 

## Sur products.scss
 - Pour gérer l'espacement entre les catégories, je n'arrivais pas à les cibler, j'ai donc créé un `li {}`
  ligne 48
 - J'ai modifié quelques margin par ci par là (je ne me souviens plus exactement oups)


## Sur Products/index.js
 - Non ne me tappez pas, normalement je n'ai pas tout cassé. J'ai déplacé `{this.shouldArrowRender('up', 'products')}` à la ligne 80 et `{this.shouldArrowRender('down', 'products')}` à la ligne 101. Il fallait que je les sorte de la div dans laquelle ils étaient pour gérer facilement leur comportement.
 - j'ai ajouter des articles (inutile)

 ## Sur News/index.js
 - j'ai créé  `<div id="news__block>" </div>` à la ligne 45, John m'a bien prévenu que Thibaud n'aimait pas ça, mais il fallait que j'englobe les deux boutons dans une div pour créer un block bouton, news. 

 ## Sur News/news.scss
 - j'ai ajouté `#news_block{}` pour gérer le margin top. 

 ## Sur main.scss
 - J'ai pris des libertés sur le style boutons, mais j'ai laissé commenté le code précédent, de peur que ça ne vous plaise pas.

