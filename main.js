const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const indexPath = path.join(__dirname, 'dist/giphy-angular/index.html');

  console.log('Intentando cargar desde:', indexPath);

  if (fs.existsSync(indexPath)) {
    console.log('Archivo index.html encontrado. Cargando...');

    mainWindow.loadURL(
      url.format({
        pathname: indexPath,
        protocol: 'file:',
        slashes: true
      })
    );
  } else {
    console.error('No se pudo encontrar el archivo index.html en la ruta: ', indexPath);
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
