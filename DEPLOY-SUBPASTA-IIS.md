# 🚀 Deploy do CRM Consórcio como SUBPASTA em Site Existente (IIS)

Este guia é específico para quando você já tem um site rodando no IIS e quer adicionar o CRM como uma aplicação dentro dele.

---

## 📍 Cenário

**Você tem:**
- Um site já funcionando no IIS (ex: `http://seusite.com`)
- Quer adicionar o CRM em uma subpasta

**O CRM ficará:**
- `http://seusite.com/crm` ✅
- `http://seusite.com/crm-consorcio` ✅
- `http://seusite.com/qualquer-nome` ✅

---

## ⚠️ PASSO CRÍTICO: Escolher o Nome da Subpasta

Antes de tudo, decida qual será o caminho da aplicação. Este nome será usado em TODOS os passos.

**Exemplos:**
- `/crm` → Aplicação ficará em `http://seusite.com/crm`
- `/crm-consorcio` → `http://seusite.com/crm-consorcio`
- `/app` → `http://seusite.com/app`

**Vamos usar `/crm` nos exemplos. Ajuste conforme sua escolha.**

---

## 📋 Pré-requisitos

### 1. URL Rewrite Module (OBRIGATÓRIO! ⚠️)
O Angular precisa deste módulo para funcionar corretamente.

**Verificar se já está instalado:**
1. Abrir **Gerenciador do IIS** (Win + R → `inetmgr`)
2. Clicar no seu site
3. Se aparecer ícone **URL Rewrite** → já está instalado ✅
4. Se NÃO aparecer → instalar agora 👇

**Instalar:**
1. Download: https://www.iis.net/downloads/microsoft/url-rewrite
2. Executar `rewrite_amd64_en-US.msi` (ou versão disponível)
3. Seguir o assistente
4. Reiniciar o IIS: `iisreset` no CMD

---

## 🏗️ Passo 1: Build com Base Href Correto

**ESTE É O PASSO MAIS IMPORTANTE! ⚠️**

O Angular precisa saber em qual subpasta ele vai rodar. Sem isso, os arquivos CSS/JS não carregarão.

### Se a aplicação ficará em `/crm`:
```bash
ng build --base-href /crm/
```

### Se ficará em `/crm-consorcio`:
```bash
ng build --base-href /crm-consorcio/
```

### Se ficará em `/app`:
```bash
ng build --base-href /app/
```

**⚠️ ATENÇÃO:**
- A barra `/` no INÍCIO é obrigatória
- A barra `/` no FINAL é obrigatória
- Use o mesmo nome que escolheu anteriormente

**Executar o build:**
```bash
# No terminal, na pasta do projeto
pnpm build -- --base-href /crm/
```

Aguardar conclusão. Os arquivos serão gerados em:
```
C:\Funchal\dist\crm-consorcio\browser\
```

---

## 📂 Passo 2: Localizar a Pasta Física do Site Existente

Você precisa descobrir onde está a pasta do seu site no servidor.

1. Abrir **Gerenciador do IIS**
2. Expandir **Sites** no painel esquerdo
3. Clicar no seu site existente (ex: "Default Web Site" ou nome customizado)
4. No painel direito → clicar em **Configurações Básicas...**
5. Anotar o **Caminho físico**

**Exemplos comuns:**
- `C:\inetpub\wwwroot` (Default Web Site)
- `C:\inetpub\wwwroot\seusite`
- `D:\Sites\seusite`

---

## 📁 Passo 3: Criar a Subpasta

Criar a pasta onde o CRM ficará.

**Exemplo se o site está em `C:\inetpub\wwwroot`:**
```bash
mkdir C:\inetpub\wwwroot\crm
```

**Exemplo se o site está em `C:\inetpub\wwwroot\seusite`:**
```bash
mkdir C:\inetpub\wwwroot\seusite\crm
```

**Ajuste conforme o caminho físico do SEU site.**

---

## 📦 Passo 4: Copiar Arquivos do Build

Copiar TODO o conteúdo da pasta `dist/crm-consorcio/browser/` para a subpasta criada.

**Se o site está em `C:\inetpub\wwwroot`:**
```bash
xcopy /E /I "C:\Funchal\dist\crm-consorcio\browser\*" "C:\inetpub\wwwroot\crm\"
```

**Se o site está em `C:\inetpub\wwwroot\seusite`:**
```bash
xcopy /E /I "C:\Funchal\dist\crm-consorcio\browser\*" "C:\inetpub\wwwroot\seusite\crm\"
```

**Resultado esperado:**
```
C:\inetpub\wwwroot\crm\
  ├── index.html
  ├── web.config
  ├── main-*.js
  ├── polyfills-*.js
  ├── styles-*.css
  └── assets/
```

---

## 🌐 Passo 5: Converter em Aplicação no IIS

**ESTE PASSO É ESSENCIAL! ⚠️**

Sem converter para aplicação, o `web.config` não funcionará e as rotas do Angular darão erro 404.

### Passos:
1. Abrir **Gerenciador do IIS** (Win + R → `inetmgr`)
2. Expandir **Sites** → expandir seu site existente
3. Você verá a pasta **crm** com ícone de pasta 📁
4. **Clicar com botão direito** na pasta **crm**
5. Selecionar **Converter em Aplicativo...**
6. Uma janela abrirá:

**Na janela "Adicionar Aplicativo":**
- **Alias**: `crm` (já preenchido, não mexer)
- **Pool de aplicativos**:
  - Opção 1: Clicar em **Selecionar** e escolher o pool do site pai
  - Opção 2: Deixar criar um novo pool (recomendado)
- **Caminho físico**: Já estará preenchido (ex: `C:\inetpub\wwwroot\crm`)

7. Clicar em **OK**

**Verificar:** O ícone da pasta mudará de 📁 para 🌐 (aplicação web)

---

## ⚙️ Passo 6: Configurar o Application Pool

Configurar o pool para aplicações Angular (sem .NET gerenciado).

1. No **Gerenciador do IIS**, clicar em **Pools de Aplicativos** (painel esquerdo)
2. Localizar o pool da aplicação:
   - Se criou novo: geralmente se chama `crm`
   - Se usou existente: nome do pool do site pai
3. **Clicar com botão direito** no pool → **Configurações Básicas...**
4. Configurar:
   - **Versão do .NET CLR**: **Sem Código Gerenciado** ⚠️ (IMPORTANTE!)
   - **Modo de pipeline**: Integrado
5. Clicar em **OK**
6. **Clicar com botão direito** no pool → **Reciclar...**

---

## ✅ Passo 7: Testar

### Abrir navegador e acessar:

**Se rodando localmente:**
```
http://localhost/crm
```

**Se rodando em servidor com domínio:**
```
http://seusite.com/crm
```

**O que deve acontecer:**
- ✅ Página de login carrega
- ✅ Estilos aplicados corretamente
- ✅ Ao fazer login, navega para dashboard
- ✅ Todas as rotas funcionam (leads, analytics, etc)

---

## 🐛 Problemas Comuns e Soluções

### ❌ Página carrega MAS sem estilos (aparece texto simples)

**Causa:** Base href incorreto no build

**Solução:**
1. Verificar no navegador: F12 → Console
2. Se aparecer erros 404 de arquivos `.css` e `.js` → base href errado
3. Refazer o build com base href correto:
   ```bash
   pnpm build -- --base-href /crm/
   ```
4. Copiar arquivos novamente para a pasta

---

### ❌ Erro 404 ao clicar nos links (navegação entre páginas)

**Causa:**
- Pasta não foi convertida em aplicação OU
- `web.config` não está presente OU
- URL Rewrite não instalado

**Solução:**

1. **Verificar se é aplicação:**
   - No IIS, verificar se ícone é 🌐 (aplicação)
   - Se for 📁 (pasta), voltar ao Passo 5

2. **Verificar web.config:**
   ```bash
   dir C:\inetpub\wwwroot\crm\web.config
   ```
   Se não existir, copiar novamente os arquivos do build

3. **Verificar URL Rewrite:**
   - IIS Manager → clicar no site
   - Procurar ícone "URL Rewrite"
   - Se não existir, instalar o módulo (Pré-requisitos)

---

### ❌ Erro 500.19 - Internal Server Error

**Causa:** Problema no `web.config` ou URL Rewrite não instalado

**Solução:**
1. Instalar URL Rewrite Module
2. Reiniciar IIS: `iisreset` no CMD
3. Verificar se `web.config` tem conteúdo válido
4. Reiniciar o Application Pool

---

### ❌ Página em branco, nenhum erro

**Causa:** Application Pool com configuração errada

**Solução:**
1. IIS → Pools de Aplicativos
2. Botão direito no pool → Configurações Básicas
3. Mudar para **"Sem Código Gerenciado"**
4. OK → Reciclar o pool

---

### ❌ Funciona em localhost mas não no servidor

**Causa:** Firewall, DNS ou binding incorreto

**Solução:**
1. Verificar se o site pai está acessível
2. Testar com IP direto: `http://192.168.1.X/crm`
3. Verificar bindings do site no IIS
4. Verificar firewall do Windows

---

## 📝 Checklist Rápido

Use este checklist para garantir que tudo foi feito:

- [ ] URL Rewrite instalado no IIS
- [ ] Build feito com `--base-href /crm/` (ou seu caminho)
- [ ] Pasta criada no local correto do site existente
- [ ] Arquivos copiados (incluindo `web.config`)
- [ ] Pasta convertida em Aplicação no IIS (ícone 🌐)
- [ ] Application Pool configurado como "Sem Código Gerenciado"
- [ ] Application Pool reciclado
- [ ] Teste: `http://localhost/crm` carrega a aplicação
- [ ] Teste: Login funciona
- [ ] Teste: Navegação entre páginas funciona

---

## 🔄 Atualizar a Aplicação (Deploy de Nova Versão)

Quando fizer alterações no código e quiser atualizar:

### Script PowerShell (Executar como Administrador):
```powershell
# Ajustar variáveis conforme seu ambiente
$basehref = "/crm/"
$destino = "C:\inetpub\wwwroot\crm"
$poolname = "crm"

Write-Host "1. Building..." -ForegroundColor Yellow
pnpm build -- --base-href $basehref

Write-Host "2. Parando pool..." -ForegroundColor Yellow
Import-Module WebAdministration
Stop-WebAppPool -Name $poolname

Write-Host "3. Copiando arquivos..." -ForegroundColor Yellow
Remove-Item "$destino\*" -Recurse -Force
Copy-Item -Path ".\dist\crm-consorcio\browser\*" -Destination $destino -Recurse

Write-Host "4. Iniciando pool..." -ForegroundColor Yellow
Start-WebAppPool -Name $poolname

Write-Host "Deploy concluído!" -ForegroundColor Green
```

Salvar como `deploy-subpasta.ps1` e executar:
```powershell
.\deploy-subpasta.ps1
```

---

## 🎯 Resumo dos Comandos

**1. Build:**
```bash
pnpm build -- --base-href /crm/
```

**2. Criar pasta (ajustar caminho):**
```bash
mkdir C:\inetpub\wwwroot\crm
```

**3. Copiar arquivos (ajustar caminhos):**
```bash
xcopy /E /I "C:\Funchal\dist\crm-consorcio\browser\*" "C:\inetpub\wwwroot\crm\"
```

**4. No IIS:**
- Botão direito na pasta → Converter em Aplicativo
- Pools de Aplicativos → Configurar como "Sem Código Gerenciado"
- Reciclar pool

**5. Testar:**
```
http://localhost/crm
```

---

## 📞 Suporte

Se continuar com problemas:
1. Verificar logs do IIS: `C:\inetpub\logs\LogFiles\`
2. Verificar console do navegador (F12)
3. Confirmar que URL Rewrite está instalado
4. Confirmar que `web.config` está presente

---

**Boa sorte com o deploy! 🚀**
