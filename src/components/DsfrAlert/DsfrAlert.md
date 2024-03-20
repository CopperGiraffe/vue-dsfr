# Alertes - `DsfrAlert`

## 🌟 Introduction

Les alertes permettent d’attirer l’attention de l’utilisateur sur une information sans interrompre sa tâche en cours.

L’alerte est disponible en deux tailles :

- taille médium (MD, par défaut, si la prop `small` est absente ou à `false`) et
- petite taille ‘SM’ si la prop `small` est à `true`.

🏅 La documentation sur l’alerte sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/alerte)

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfralert--docs)

## 📐 Structure

L’alerte est composée des éléments suivants :

- un titre (prop `title`, de type `string`) :
  - obligatoire sur la version MD (si la prop `small` est absente ou à `false`),
  - optionnel sur la version SM (si la prop `small` est à `true`).
- un pictogramme et une couleur déterminés par la prop `type` qui peut valoir une des chaînes suivantes :
  - `'info'` (valeur par défaut si la prop `type` est absente)
  - `'success'`
  - `'warning'`
  - `'error'`
- un texte de description (avec la prop `description`, de type `string`) :
  - optionnel sur la version MD
  - obligatoire sur la version SM
  - le `slot` par défaut peut être utilisé
- une croix de fermeture si la prop `closeable` est à `true`

Autres props :

- `closed` sert à indiquer si l’alerte doit être présente (`false`) ou non (`true`) dans le DOM.
- `titleTag` permet d’indiquer la balise à utiliser pour le `title` : il s’agit de `h3` par défaut, cependant, pour passer les tests RGAA, il faut que les niveaux de titres se suivent et soient cohérents (par exemple, si sur la page il n’y a pas de `<h2>`, il faut passer `'h2'` comme valeur à la prop `titleTag` pour que le titre de la modal soit un `<h2>`).

## 🛠️ Props

|  Nom                   |   Type      |  Défaut         | Obligatoire | Description |
| ----------------------- | ---------   | ---------------- | ------ | ----- |
| `id`                    | *`string`*    | *random string*  | | Valeur de l’attribut `id` de l’alerte
| `type`                  | *`'info' \| 'success' \| 'warning' \| 'error'`*  | `'info'`           | Type de l’alerte
| `title`                 | *`string`*  |      `''`        |  | Titre de l’alerte |
| `description`           | *`string`*  |                  |  | Description de l’alerte |
| `titleTag`              | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'")  |    `'h3'`     | | Balise de la balise de titre de l’alerte |
| `small`                 | *`boolean`* | `false`          | | Est-ce que l’alerte doit être petite (sans `titre`, uniquement `description`) ?|
| `closed`                | *`boolean`* | `false`          | | Est-ce que l’alerte est fermée ? |
| `closeable`             | *`boolean`* | `false`          | | Est-ce que l’alerte peut être fermée ? |

## 📡 Événements

`DsfrAlert` déclenche l’événement `'close'` lors du clic sur le bouton pour fermer l’alerte, sans données (sans *payload*).

|  nom                   |   donnée (*payload*) |
| ---------------------- |  ---------           |
| `'close'`              |       *aucune*       |

## 🧩 Les slots

`DsfrAlert` possède un slot par défaut pour la description de l'alerte.

## 📝 Toutes les variantes 🌈 d’Alertes

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrAlertDemo />
</Story>

<<< docs-demo/DsfrAlertDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrAlert.vue
<<< DsfrAlert.types.ts
:::

<script setup lang="ts">
import DsfrAlertDemo from './docs-demo/DsfrAlertDemo.vue'
</script>
