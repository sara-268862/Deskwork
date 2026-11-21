Deskwork – simulations professionnelles
Ouvrez `index.html` dans un navigateur : aucun serveur n'est nécessaire.
Structure
`css/style.css` : styles et thèmes clair/sombre
`js/core/` : outils, constantes, illustrations, audio, état
`js/data/fields/` : une spécialité par fichier (rôle, contexte, décisions rapides)
`js/data/banks/` : une banque de scénarios par spécialité (10 scénarios par niveau)
`js/data/speakers.js`, `levels.js` : personnages et niveaux
`js/engine/rounds.js` : transforme une banque en questions
`js/views/` : écrans (accueil, spécialités, réglages, jeu, rapport, progression)
Ajouter ou compléter une spécialité
Créer `js/data/banks/<nom>.js` avec `BANK['Nom exact de la spécialité']={deb:[...],int:[...],hard:[...]}`.
Chaque scénario : `[personnage, compétence, [scénario, question], meilleure option, option moyenne, mauvaise option, explication]`.
Ajouter la balise `<script>` dans `index.html`, après `controle-gestion.js` (déjà fait pour les 8 spécialités).
Les 8 banques sont complètes : 10 scénarios Débutant, 10 Intermédiaire et 10 Difficile par spécialité (240 au total).
Pédagogie par niveau
Débutant : indication « Pour comprendre » affichée dès le début.
Intermédiaire : indice facultatif, affiché uniquement au clic.
Difficile : aucun indice ni aide avant la réponse.
Tous niveaux : bonne réponse et explication affichées après la validation.
