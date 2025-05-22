document.addEventListener('DOMContentLoaded', () => {
  const boutonsFiltre = document.querySelectorAll('.filtre-btn');
  const cartesProjet = document.querySelectorAll('.carte-projet');

  boutonsFiltre.forEach(bouton => {
    bouton.addEventListener('click', () => {
      // Retirer la classe 'actif' de tous les boutons
      boutonsFiltre.forEach(btn => btn.classList.remove('actif'));
      // Ajouter la classe 'actif' au bouton cliqué
      bouton.classList.add('actif');

      const filtre = bouton.getAttribute('data-filtre');

      cartesProjet.forEach(carte => {
        const categorie = carte.getAttribute('data-categorie');
        if (filtre === 'tous' || categorie === filtre) {
          carte.style.display = 'block';
        } else {
          carte.style.display = 'none';
        }
      });
    });
  });
});
