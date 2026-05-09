import fs from 'node:fs';
import path from 'node:path';

function buildPages() {
  const clientDir = path.resolve('dist', 'client');
  const serverDir = path.resolve('dist', 'server');

  console.log('Adaptando build para Cloudflare Pages...');
  
  if (!fs.existsSync(serverDir)) {
    console.error('Erro: Pasta dist/server não encontrada.');
    return;
  }

  // Copia os arquivos do server para o client
  fs.cpSync(serverDir, clientDir, { recursive: true });
  console.log('✅ Arquivos do servidor copiados para dist/client');

  // Renomeia o index.js do servidor para _worker.js (padrão do Cloudflare Pages SSR)
  const indexFile = path.join(clientDir, 'index.js');
  const workerFile = path.join(clientDir, '_worker.js');
  
  if (fs.existsSync(indexFile)) {
    fs.renameSync(indexFile, workerFile);
    console.log('✅ index.js renomeado para _worker.js');
  }

  // Remove o wrangler.json da pasta client para não confundir o Pages
  const wranglerFile = path.join(clientDir, 'wrangler.json');
  if (fs.existsSync(wranglerFile)) {
    fs.rmSync(wranglerFile);
  }

  console.log('🚀 Build adaptado para Cloudflare Pages com sucesso!');
}

buildPages();
