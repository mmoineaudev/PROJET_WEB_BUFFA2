# Journal

```
sudo npm install -g vue-cli
vue init webpack-simple my-app-vue-cli1
```

* creer un modele basique a copier: 

```
$ vue init webpack-simple my-app-vue-cli1

? Project name my-app-vue-cli1
? Project description A Vue.js project
? Author Maxime M <maxime.moineau.dev@g
mail.com>
? License MIT
? Use sass? No

   vue-cli · Generated "my-app-vue-cli1".

   To get started:
   
     cd my-app-vue-cli1
     npm install
     npm run dev
```

* Pour (peut-etre) avoir des erreurs un peu mieux :

```
npm run build
```

# Infos

* doc : https://vuejs.org/ 

* composant custom : convention de nommage <app-NOM></app-NOM>

* v-bind : c'est la manère d'instancier un objet html de maniere dynamique...

* v-for:"(uneVar, ...) in collection"

* évènements : jamais de majuscules...

* quand on passe $event sur un truc clickable on peut recup le modèle lié

* script src cause des problèmes d'ordres evidémment -> ca se fait pas : 

100% par npm install
Remplacé par import Vue from 'vue'

* Pour impacter le style en fonction d'une méthode 

```
v-bind:style="{color: getColor()}"
```

* Déclarer un composant en vuejs

```
new Vue.component( 'app-NOM', {
props:[lesnomsd'attributs],
data: lesfonctions ???
template: 'untrucenhtmlavecdesdirectivesvuejsquiasesappelsdedirectivesvueJS&demethods'
}),
methods:  { lesdeclarationsdemethodes }
```

* Evenement custom

```
this.$emit('nomdevenement', valeur)
```

* desactiver un clic (dans du html)

```
:disabled="condition"

```

* webpack config 

contient entre autre les paramètres de compilation, ceux sur serveur de developpement, performance hints:true ca veut dire "optimise à la compil"

* assets 

contient les logos

* au dessus de l'initialisation de l'app on déclare le template ou on peut appeler d'autres composants...

Convention d'emplacement des composants : src/components

* Inclure un composant

on met un import avec le chemin relatif vers le .vue qui le contient

pour ca on doit dans le .vue du composant ecrire

```
Vue.component("app-NOM", Nom);
```

* Ca a au moins le mérite d'être réutilisable, et au moins y a pas de cycle de vie tout pourri en 12 étapes à apprendre par coeur