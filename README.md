# Journal

```
sudo npm install -g vue-cli
```

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

# Infos
 
composant custom : convention de nommage <app-NOM></app-NOM>

v-bind : c'est la manère d'instancier un objet html de maniere dynamique...

v-for:"(uneVar, ...) in collection"

évènements : jamais de majuscules...

quand on passe $event sur un truc clickable on peut recup le modèle lié

script src -> ca se fait pas 100% par npm install