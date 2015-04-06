(function (window, document) {

  var layout   = document.getElementById('layout'),
      menu     = document.getElementById('menu'),
      menuLink = document.getElementById('menuLink');
      songs    = menu.getElementsByTagName('li');
      // songs    = menu.getElementsByClassNames('navigation');

  function toggleClass (element, className) {
    var classes = element.className.split(/\s+/),
        length  = classes.length,
        i       = 0;

    for(; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  menuLink.onclick = function (e) {
    var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  };
  for (var j = 0; j < songs.length; j++) {
    songs[j].onclick = function (e) {
      var active = 'active';

      // console.log('Odelay!');
      // e.preventDefault();
      toggleClass(layout, active); // this toggles the menu
      // toggleClass(menu, active);
      toggleClass(menuLink, active);
    }
  }

}(this, this.document));
