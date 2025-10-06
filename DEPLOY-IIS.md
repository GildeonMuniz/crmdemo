# Deploy do CRM Consórcio no IIS

Este guia explica como fazer o deploy da aplicação Angular no IIS (Internet Information Services).

## 📋 Pré-requisitos

### 1. Instalar o IIS
1. Abrir **Painel de Controle** → **Programas** → **Ativar ou desativar recursos do Windows**
2. Marcar **Serviços de Informações da Internet**
3. Expandir e marcar também:
   - **Serviços da Web** → **Recursos de Desenvolvimento de Aplicativos** → **ASP.NET 4.8** (ou versão disponível)
   - **Ferramentas de Gerenciamento da Web** → **Console de Gerenciamento do IIS**
4. Clicar em **OK** e aguardar instalação

### 2. Instalar URL Rewrite Module
**IMPORTANTE**: O Angular Router precisa do módulo de URL Rewrite do IIS!

1. Baixar o módulo: https://www.iis.net/downloads/microsoft/url-rewrite
2. Executar o instalador `rewrite_amd64.msi` ou `rewrite_x86.msi`
3. Seguir o assistente de instalação
4. Reiniciar o IIS após instalação

## 🏗️ Build da Aplicação

### 1. Build de Produção
```bash
pnpm build
```

Este comando irá gerar os arquivos otimizados em `dist/crm-consorcio/browser/`

### 2. Verificar arquivos gerados
Verifique se a pasta contém:
- `index.html`
- `web.config` (configuração do IIS)
- Arquivos `.js` e `.css`
- Pasta `assets/`

## 🚀 Deploy no IIS

### Método 1: Site dedicado (Recomendado)

#### 1. Criar pasta para a aplicação
```bash
mkdir C:\inetpub\wwwroot\crm-consorcio
```

#### 2. Copiar arquivos do build
Copiar todo o conteúdo de `dist/crm-consorcio/browser/` para `C:\inetpub\wwwroot\crm-consorcio\`

#### 3. Configurar no IIS
1. Abrir **Gerenciador do IIS** (Win + R → `inetmgr`)
2. Expandir **Sites** no painel esquerdo
3. Clicar com botão direito em **Sites** → **Adicionar Site**
4. Preencher:
   - **Nome do site**: CRM Consórcio
   - **Caminho físico**: `C:\inetpub\wwwroot\crm-consorcio`
   - **Porta**: 8080 (ou outra disponível)
5. Clicar em **OK**

#### 4. Configurar Application Pool
1. No IIS Manager, clicar em **Pools de Aplicativos**
2. Localizar o pool do site (geralmente com mesmo nome)
3. Clicar com botão direito → **Configurações Básicas**
4. Definir:
   - **Versão do .NET CLR**: Sem Código Gerenciado
5. Clicar em **OK**

#### 5. Testar
Abrir navegador e acessar: `http://localhost:8080`

### Método 2: Subpasta do Default Web Site

#### 1. Copiar arquivos
Copiar conteúdo de `dist/crm-consorcio/browser/` para `C:\inetpub\wwwroot\crm-consorcio\`

#### 2. Converter para aplicação
1. Abrir **Gerenciador do IIS**
2. Expandir **Sites** → **Default Web Site**
3. Clicar com botão direito na pasta **crm-consorcio**
4. Selecionar **Converter em Aplicativo**
5. Clicar em **OK**

#### 3. Atualizar base href (IMPORTANTE!)
Se usar subpasta, precisa ajustar o `base href` no build:

```bash
# Build com base href customizado
ng build --base-href /crm-consorcio/
```

#### 4. Testar
Acessar: `http://localhost/crm-consorcio`

## 🔧 Configuração Avançada

### Habilitar HTTPS (Opcional)

#### 1. Criar certificado auto-assinado (desenvolvimento)
1. No IIS Manager, clicar no servidor (nível raiz)
2. Clicar em **Certificados de Servidor**
3. **Criar Certificado Auto-Assinado**
4. Nome: CRM Consórcio
5. Clicar em **OK**

#### 2. Adicionar binding HTTPS
1. Clicar com botão direito no site → **Editar Ligações**
2. Clicar em **Adicionar**
3. Preencher:
   - **Tipo**: https
   - **Porta**: 443
   - **Certificado SSL**: Selecionar o certificado criado
4. Clicar em **OK**

### Configurar Domínio Customizado

#### No IIS:
1. Clicar com botão direito no site → **Editar Ligações**
2. Selecionar a ligação HTTP → **Editar**
3. Em **Nome do host**, digitar: `crm.suaempresa.local`
4. Clicar em **OK**

#### No arquivo hosts:
1. Abrir como Administrador: `C:\Windows\System32\drivers\etc\hosts`
2. Adicionar linha:
```
127.0.0.1    crm.suaempresa.local
```
3. Salvar e acessar: `http://crm.suaempresa.local`

## 🐛 Troubleshooting

### Erro 404 nas rotas do Angular
**Causa**: URL Rewrite não está instalado ou `web.config` não está presente

**Solução**:
1. Verificar se URL Rewrite está instalado
2. Confirmar que `web.config` existe na pasta do site
3. Reiniciar o site no IIS

### Erro 500.19 - Cannot read configuration file
**Causa**: Problema no `web.config`

**Solução**:
1. Verificar sintaxe XML do `web.config`
2. Instalar URL Rewrite Module
3. Verificar permissões do arquivo

### Página não carrega arquivos JS/CSS
**Causa**: Problemas com MIME types

**Solução**:
1. Verificar se `web.config` está configurado corretamente
2. Adicionar MIME types manualmente no IIS:
   - `.json` → `application/json`
   - `.woff` → `application/font-woff`
   - `.woff2` → `application/font-woff2`

### Aplicação não atualiza após novo deploy
**Causa**: Cache do navegador ou IIS

**Solução**:
1. Limpar cache do navegador (Ctrl + Shift + Delete)
2. Reiniciar o Application Pool no IIS
3. Usar build hash no Angular (já configurado)

## 📦 Script de Deploy Automático

Criar arquivo `deploy.ps1`:

```powershell
# Deploy automático para IIS
param(
    [string]$DestPath = "C:\inetpub\wwwroot\crm-consorcio"
)

Write-Host "Iniciando deploy..." -ForegroundColor Green

# 1. Build de produção
Write-Host "Executando build..." -ForegroundColor Yellow
pnpm build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro no build!" -ForegroundColor Red
    exit 1
}

# 2. Parar site no IIS
Write-Host "Parando site no IIS..." -ForegroundColor Yellow
Import-Module WebAdministration
Stop-WebSite -Name "CRM Consórcio"

# 3. Backup da versão anterior
if (Test-Path $DestPath) {
    $backupPath = "$DestPath-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
    Write-Host "Criando backup em: $backupPath" -ForegroundColor Yellow
    Copy-Item -Path $DestPath -Destination $backupPath -Recurse
    Remove-Item -Path "$DestPath\*" -Recurse -Force
}

# 4. Copiar novos arquivos
Write-Host "Copiando arquivos..." -ForegroundColor Yellow
$sourcePath = ".\dist\crm-consorcio\browser\*"
Copy-Item -Path $sourcePath -Destination $DestPath -Recurse

# 5. Iniciar site
Write-Host "Iniciando site no IIS..." -ForegroundColor Yellow
Start-WebSite -Name "CRM Consórcio"

Write-Host "Deploy concluído com sucesso!" -ForegroundColor Green
Write-Host "Acesse: http://localhost:8080" -ForegroundColor Cyan
```

Executar como Administrador:
```powershell
.\deploy.ps1
```

## 🔒 Segurança

### Recomendações para produção:
1. **Usar HTTPS com certificado válido**
2. **Configurar autenticação** (Windows Auth ou outra)
3. **Restringir permissões** da pasta do site
4. **Habilitar logging** no IIS
5. **Configurar firewall** adequadamente
6. **Remover web.config** da raiz se usar API separada

## 📊 Monitoramento

### Logs do IIS:
Localização padrão: `C:\inetpub\logs\LogFiles\`

### Visualizar logs:
1. IIS Manager → Site → **Logging**
2. Clicar em **Exibir Arquivos de Log**

## 🌐 Próximos Passos

Após deploy bem-sucedido:
1. ✅ Testar todas as rotas da aplicação
2. ✅ Verificar funcionamento mobile
3. ✅ Configurar backend/API (se necessário)
4. ✅ Configurar CORS no backend
5. ✅ Monitorar logs e performance

---

**Suporte**: Para problemas, consulte a documentação oficial do IIS ou Angular
