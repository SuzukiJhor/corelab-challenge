## Resolução Desafio Corelab:

####  Link do Readme do desafio: https://github.com/corelabbr/corelab-api-challenge-php/blob/main/Leiame.md

### Ambiente 
 - O Ambiente montado utilizando Docker

### BackEnd
 - Projeto desenvolvido com PHP usando Laravel

### FronEnd
 - Projeto desenvolvido utilizando React.js
 - Validação - Zod e React Hook Form
 - Abordagem Mobile First
 - Node: ^16.15.0
 - Framework: React TS
 - Styled Components

### Banco de Dados
 - SQL

   
## Requisitos: Ter o Docker instalado

## Como Executar      
    git clone https://github.com/SuzukiJhor/corelab-challenge.git

### Navegue até o diretorio do projeto
    cd corelab-challenge

### Crie o Arquivo .env no projeto BackEnd
    cd backend
    cp .env.example .env

### Atualize as variáveis de ambiente do arquivo .env

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost


DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=api-users
DB_USERNAME=root
DB_PASSWORD=root
```

## Suba os containers do projeto

### Certifique de garantir de estar na raiz do projeto, no mesmo local que o arquivo docker-compose.yml
    cd ..
    docker-compose up -d


  
### Acesse o container do BackEnd 
    docker exec -it corelab-challenge-backend-1 bash
  
### Atualize as dependencias do projeto
    composer install

### Gere a key do projeto Laravel
    php artisan key:generate


### Para sair do container 
     exit

### Para atualizar as dependencias do projeto do FrontEnd
    docker exec -it corelab-challenge-frontend-1 sh

### Ao acessar o container do projeto Laravel
    npm install

### Para sair do container 
     exit


     
### Acesse o projeto em seu navegador web
      http://localhost:3000/
 


### Acesse a api em
    http://localhost:8000


### Acesse a documentação da api 
    http://localhost:8000/docs/api
    

