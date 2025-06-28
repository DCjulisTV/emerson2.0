# **Emerson Bot**
 
    

| Ícone | Badge | Descrição |
|-------|-------|-----------|
| 🕒 | ![Última Atualização](https://img.shields.io/github/last-commit/hiudyy/nazuna?color=blue&style=flat-square) | **Última Atualização**: Quando o projeto foi atualizado pela última vez. |
| ⭐ | ![Estrelas](https://img.shields.io/github/stars/hiudyy/nazuna?color=yellow&label=Favoritos&style=flat-square) | **Favoritos**: Quantas pessoas deram estrela no GitHub. |
| 🍴 | ![Forks](https://img.shields.io/github/forks/hiudyy/nazuna?color=green&style=flat-square) | **Forks**: Cópias do projeto feitas por outros devs. |
| 🐞 | ![Issues](https://img.shields.io/github/issues/hiudyy/nazuna?color=red&style=flat-square) | **Issues**: Bugs ou sugestões reportados pela comunidade. |
| 📝 | ![Commits](https://img.shields.io/github/commit-activity/m/hiudyy/nazuna?color=purple&style=flat-square) | **Commits**: Frequência de updates no código. |
| 💾 | ![Tamanho do Repo](https://img.shields.io/github/repo-size/hiudyy/nazuna?color=orange&style=flat-square) | **Tamanho do Repo**: Espaço ocupado no GitHub. |
| 👥 | ![Contribuidores](https://img.shields.io/github/contributors/hiudyy/nazuna?color=cyan&style=flat-square) | **Contribuidores**: Pessoas que ajudaram no bot. |
| 📥 | ![Downloads](https://img.shields.io/github/downloads/hiudyy/nazuna/total?color=pink&style=flat-square) | **Downloads**: Total de downloads do projeto. |
| 🌐 | ![Linguagens](https://img.shields.io/github/languages/top/hiudyy/nazuna?color=teal&style=flat-square) | **Linguagens**: Principais linguagens do projeto. |
| 🔄 | ![PRs](https://img.shields.io/github/issues-pr/hiudyy/nazuna?color=brightgreen&style=flat-square) | **Pull Requests**: Propostas de melhorias enviadas. |
| ⏱️ | ![Tempo de Resposta](https://img.shields.io/github/issues-closed-raw/hiudyy/nazuna?color=blueviolet&style=flat-square) | **Tempo de Resposta**: Média pra resolver issues. |
| 📜 | ![Licença](https://img.shields.io/badge/licença-Copyright-red?style=flat-square) | **Licença**: Projeto protegido por copyright. |
| ✅ | ![Status](https://img.shields.io/badge/STATUS-ATIVO-success?style=flat-square) | **Status**: Projeto ativo e em desenvolvimento. |


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
   git clone https://github.com/hiudyy/nazuna.git
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
   git clone https://github.com/hiudyy/nazuna.git
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
   Monitore com `pm2 logs nazuna`.

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
   git clone https://github.com/hiudyy/nazuna.git
   cd nazuna
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
