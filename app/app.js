var gui = require('nw.gui');

/* Menu bar */
var menubar = new gui.Menu({
  type: 'menubar'
});

var fileMenu = new gui.Menu();

fileMenu.append(new gui.MenuItem({
  label: 'New File',
  click: function() {
    alert('Clicked to create a new file');
  }
}));

var openRecentMenu = new gui.Menu();

openRecentMenu.append(new gui.MenuItem({
  label: 'Recente File X',
  click: function() {
    alert('Clicked to open a recent file');
  }
}));

menubar.append(new gui.MenuItem({ label: 'File', submenu: fileMenu}));
fileMenu.append(new gui.MenuItem({ label: 'Open Recent File', submenu: openRecentMenu}));

var win = gui.Window.get();
win.menu = menubar;

/* Tray icon */
var tray = new gui.Tray({
  icon : 'images/icon.png',
  title: 'My App Tray'
});

var trayMenu = new gui.Menu();
trayMenu.append(new gui.MenuItem({
  label: 'Do something'
}));

tray.menu = trayMenu;

/* Handling how links are open */
$(document).ready(function() {
  $('a').attr('target', '_blank');

  $('a[target=_blank]').on('click', function() {
    gui.Shell.openExternal(this.href);
    return false;
  });
});

