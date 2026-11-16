# OrçaFácil Pro — versão iPhone (PWA)

Esta pasta é o OrçaFácil 1.02 tirado do APK e preparado pra rodar no navegador
e ser instalado no iPhone pela Tela de Início. Não precisa de Mac nem de conta
da Apple.

## 1. Publicar no GitHub Pages (uma vez)

1. No GitHub, crie um repositório novo e **público**, por exemplo `orcafacil-ios`.
   (O GitHub Pages grátis só funciona com repositório público.)
2. Clique em **Add file → Upload files** e arraste **o conteúdo** desta pasta
   (index.html, manifest.webmanifest, sw.js e as pastas assets e icons).
   O index.html tem que ficar na raiz do repositório, não dentro de outra pasta.
3. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em "Branch", escolha `main` e a pasta `/ (root)`. Salve.
5. Espere 1 ou 2 minutos. O link vai ser:
   `https://SEU-USUARIO.github.io/orcafacil-ios/`

## 2. Instalar no iPhone do funcionário

1. Abrir o link **no Safari**. Chrome no iPhone também funciona nas versões
   novas do iOS, mas o Safari é o caminho garantido.
2. Tocar no botão **Compartilhar** (quadrado com a seta pra cima).
3. **Adicionar à Tela de Início** → Adicionar.
4. Abrir sempre pelo ícone, não pelo Safari. Os dados ficam guardados no ícone.

## 3. Cuidados

- **Os dados ficam só naquele iPhone.** Se ele apagar o ícone, os orçamentos
  vão junto. Não existe nuvem: a tela "Sincronizado com o servidor" do app é
  só animação, nenhum dado é enviado.
- **Para publicar uma versão nova:** suba os arquivos novos e, no `sw.js`,
  mude a linha `const CACHE = 'orcafacil-v1.02'` (por exemplo, para v1.03).
  Assim o iPhone baixa a atualização. Ela aparece quando o app for fechado e
  aberto de novo.
