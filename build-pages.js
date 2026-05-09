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
    let content = fs.readFileSync(indexFile, 'utf8');
    const exportMatch = content.match(/export\s*\{\s*(\w+)\s+as\s+default\s*\};/);
    if (exportMatch) {
      const workerVar = exportMatch[1];
      content = content.replace(exportMatch[0], `export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/assets/') || url.pathname.includes('.')) {
      try {
        const response = await env.ASSETS.fetch(request);
        if (response.status < 400) return response;
      } catch (err) {}
    }
    return ${workerVar}.fetch(request, env, ctx);
  }
};`);
    }
    fs.writeFileSync(workerFile, content);
    fs.rmSync(indexFile);
    console.log('✅ index.js adaptado com proxy ASSETS e renomeado para _worker.js');
  }

  // Remove o wrangler.json da pasta client para não confundir o Pages
  const wranglerFile = path.join(clientDir, 'wrangler.json');
  if (fs.existsSync(wranglerFile)) {
    fs.rmSync(wranglerFile);
  }

  console.log('🚀 Build adaptado para Cloudflare Pages com sucesso!');
}

buildPages();
