# 🚀 Guia de Deploy na Vercel - Mextill Loja

## ✅ Correções Aplicadas

Este projeto foi corrigido para resolver o erro 404 na Vercel. As seguintes alterações foram feitas:

### 1. **Arquivo `vercel.json` criado**
   - Define como a Vercel deve servir os arquivos estáticos
   - Configura rotas para evitar erro 404

### 2. **Arquivo `package.json` criado**
   - Ajuda a Vercel a identificar o tipo de projeto
   - Define metadados do projeto

### 3. **Arquivo `.vercelignore` criado**
   - Otimiza o deploy ignorando arquivos desnecessários

### 4. **Estrutura de pastas organizada**
   - Todos os arquivos estão na raiz correta
   - Sem pastas duplicadas

---

## 📦 Método 1: Deploy via Interface Web da Vercel (Recomendado)

### Passo 1: Acesse a Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Faça login ou crie uma conta gratuita

### Passo 2: Importe o Projeto
1. Clique em **"Add New..."** → **"Project"**
2. Escolha **"Import Git Repository"** ou **"Deploy from CLI"**

### Passo 3: Upload dos Arquivos
Se você não usa Git:
1. Clique em **"Browse"** ou arraste a pasta `mextill-loja-fixed`
2. **NÃO** envie o ZIP, envie a pasta descompactada
3. A Vercel detectará automaticamente que é um site estático

### Passo 4: Configurações do Projeto
- **Framework Preset**: Selecione "Other" ou deixe em branco
- **Root Directory**: Deixe como `./` (raiz)
- **Build Command**: Deixe vazio (não é necessário)
- **Output Directory**: Deixe vazio ou coloque `./`

### Passo 5: Deploy
1. Clique em **"Deploy"**
2. Aguarde 1-2 minutos
3. Seu site estará online! 🎉

---

## 🖥️ Método 2: Deploy via CLI da Vercel

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Fazer Login
```bash
vercel login
```

### Passo 3: Navegar até a Pasta do Projeto
```bash
cd mextill-loja-fixed
```

### Passo 4: Deploy
```bash
vercel
```

Siga as instruções:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → No (primeira vez)
- **Project name?** → mextill-loja (ou o nome que preferir)
- **In which directory is your code located?** → `./`

### Passo 5: Deploy em Produção
```bash
vercel --prod
```

---

## 🔧 Solução de Problemas

### Erro 404 Ainda Aparece?

**Verifique se:**
1. O arquivo `vercel.json` está na raiz do projeto
2. Você fez upload da pasta correta (não a pasta duplicada)
3. O arquivo `index.html` está na raiz do projeto

**Solução:**
```bash
# Verifique a estrutura:
mextill-loja-fixed/
├── index.html          ← Deve estar aqui!
├── vercel.json         ← Deve estar aqui!
├── package.json
├── css/
├── js/
└── images/
```

### Erro: "No Output Directory"

**Solução:**
- Na configuração do projeto na Vercel, deixe **Output Directory** vazio
- Ou defina como `./`

### CSS/JS Não Carregam

**Verifique:**
1. Os caminhos no `index.html` estão corretos (relativos, sem `/` no início)
2. Exemplo correto: `href="css/style.css"` ✅
3. Exemplo errado: `href="/css/style.css"` ❌

---

## 🎯 Estrutura Final do Projeto

```
mextill-loja-fixed/
├── .vercelignore       # Arquivos a ignorar no deploy
├── vercel.json         # Configuração da Vercel
├── package.json        # Metadados do projeto
├── index.html          # Página principal
├── payment_form.html   # Página de pagamento
├── README.md           # Documentação
├── css/
│   └── style.css       # Estilos
├── js/
│   ├── app.js          # Lógica principal
│   └── payment.js      # Lógica de pagamento
└── images/             # Imagens (se houver)
```

---

## 🌐 Após o Deploy

1. **URL do Site**: A Vercel fornecerá uma URL como `mextill-loja.vercel.app`
2. **Domínio Customizado**: Você pode adicionar seu próprio domínio nas configurações
3. **HTTPS Automático**: A Vercel já fornece SSL/TLS gratuitamente
4. **Atualizações**: Basta fazer novo deploy para atualizar o site

---

## 📱 Testando o Site

Após o deploy, teste:
- ✅ Página inicial carrega
- ✅ Produtos aparecem
- ✅ Carrinho funciona
- ✅ Checkout abre
- ✅ Chaves PIX aparecem
- ✅ WhatsApp funciona

---

## 💡 Dicas Extras

1. **Deploy Automático**: Conecte um repositório GitHub para deploy automático a cada commit
2. **Preview Deployments**: A Vercel cria previews automáticos para cada branch
3. **Analytics**: Ative Vercel Analytics para ver estatísticas de acesso
4. **Variáveis de Ambiente**: Configure na dashboard se precisar de API keys

---

## 🆘 Precisa de Ajuda?

Se ainda tiver problemas:
1. Verifique os logs na dashboard da Vercel
2. Confirme que todos os arquivos foram enviados
3. Teste localmente primeiro: abra `index.html` no navegador
4. Verifique se não há erros no console do navegador (F12)

---

**Desenvolvido com ❤️ para Mextill**

🚀 Bom deploy!
