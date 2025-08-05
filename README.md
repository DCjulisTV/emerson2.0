# **Emerson Bot** 
Juliano Schneider
  Você vai precisar de:

| **Item**            | **Descrição**                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| **Node.js**         | Versão 18 ou superior. Baixe em [nodejs.org](https://nodejs.org).             |
| **Git**             | Pra clonar o repositório. Pega em [git-scm.com](https://git-scm.com).        |
| **WhatsApp**        | Um número dedicado pro bot (evite o principal pra não levar ban).             |
| **Internet Estável**| Necessária pra configuração e funcionamento.                                  |
| **Dispositivo**     | PC (Windows, Linux, macOS), Android com Termux, ou servidor (Pterodactyl).    |
| **Recursos Mínimos**| 256MB de RAM e 256MB de armazenamento (512MB RAM e 512MB disco recomendados).     |

#### 📥 **Instalação**

Bora botar o **nazuna Bot** pra rodar:

1. **Clonar o Repositório**  
   Abra o terminal (Prompt de Comando, PowerShell ou Termux) e execute:  
   ```bash
   git clone https://github.com/DCjulisTV/emerson2.0
   cd nazuna
   ```

2. **Instalar Dependências**  
   Rode esses comandos, um por vez:  
   ```bash
   npm run config
   npm run config:install
   ```  
   Isso baixa todas as bibliotecas necessárias.

   > **Deu Erro?**: Confirme se o Node.js tá instalado (`node -v`). Se continuar, tente `npm install`.

---



Pra ligar o **emerson Bot**:  
```bash
npm start
```

Pra manter na última versão:  
```bash
npm run update
```

##### 🐧 **Linux**

1. **Pré-requisitos**  
   Atualize e instale:  
   ```bash
   sudo apt update && sudo apt install -y nodejs git
   ```  
   Verifique:  
   ```bash
   node -v
   git --version
   ```

2. **Clonar e Instalar**  
   ```bash
   git clone https://github.com/DCjulisTV/emerson2.0
   cd nazuna
   npm run config
   npm run config:install
   ```

3. **Rodar o Bot**  
   ```bash
   npm start
   ```

4. **Rodar em Segundo Plano**  
   Use o `pm2`:  
   ```bash
   npm install -g pm2
   pm2 start npm --name "nazuna" -- start
   pm2 save
   ```  
   Monitore com `pm2 logs emerson2.0`.

Desconectou? Reinicie com `pm2 restart nazuna`.


1. **Instalar o Termux**  
   - Baixe pelo [F-Droid](https://f-droid.org/packages/com.termux/) (evite Google Play).  
   - Atualize:  
     ```bash
     pkg update && pkg upgrade -y
     ```

2. **Pré-requisitos**  
   ```bash
   pkg install nodejs git -y
   termux-setup-storage
   ```

3. **Clonar e Instalar**  
   ```bash
   cd /sdcard
   git clone https://github.com/DCjulisTV/emerson2.0
   cd emerson2.0
   npm run config
   npm run config:install
   ```

4. **Rodar o Bot**  
   ```bash
   npm start
   ```

5. **Manter Online**  
   - Evite fechar o Termux; mantenha o celular ligado ou use app de “manter acordado”.  
   - Se parar, reinicie:  
     ```bash
     cd /sdcard/nazuna
     npm start
     ```
