// importando os modulos app e browserwindow do electron  
const { app, BrowserWindow } = require('electron/main')
// define a função createwindow que é responsavel cria uma nova janelado aplicativo electron 
const createWindow = () => {
    // criando uma nova instãncia do browserwindow com as dimensões especificadas 
  const win = new BrowserWindow({
    width: 800,// define a largura da janela 
    height: 600// define a altura da janela 
  })
//
  win.loadFile('index.html')// carregar o arquivo index.html na janela criada 
}
//quando o aplicativo estiver pronto , chama a função createwindow para criar a janela principal 
app.whenReady().then(() => {
    // executa a função createwindow para criar a janela principal 
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})