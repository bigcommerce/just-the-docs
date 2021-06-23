(function() {
  /**
   * Adds the 'active' class to the currently selected nav link, its list item and its ancestral links/items.
   */
  function selectActiveNav() {
    var activeLink = document.querySelector("a.nav-list-link[href='" + window.location.pathname + "']");
    if (activeLink !== null) {
      var navItem = activeLink.closest('.nav-list-item');
      while (navItem !== null) {
        navItem.classList.add('active');
        navItem.querySelector('.nav-list-link').classList.add('active');

        navItem = navItem.parentElement.closest('.nav-list-item');
      }
    }
  }

  jtd.onReady(function() {
    selectActiveNav();
  });
})();
