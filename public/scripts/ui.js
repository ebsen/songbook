(function (window, document) {

  var layout   = document.getElementById('layout'),
      menu     = document.getElementById('menu'),
      menuLink = document.getElementById('menuLink'),
      homeLink = document.getElementById('homeLink'),
      songs    = menu.getElementsByTagName('li'),
      active   = 'active';

  function toggleClass (element, className) {
    var classes = element.className.split(/\s+/),
        length  = classes.length,
        i       = 0;

    for(; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1); // removes this element from array
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function navigate (e) {
    // e.preventDefault();
    toggleClass(layout, active); // this toggles the menu
    // toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  menuLink.onclick = function (e) {
    // var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  };

  // Custom event handlers for our navigation items
  homeLink.onclick = navigate;
  for (var j = 0; j < songs.length; j++) {
    songs[j].onclick = navigate;
  }

}(this, this.document));
