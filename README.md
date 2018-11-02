Criar ambiente de Desenvolvimento
=================================

Requisitos:

- Python 3.5+
- Virtualenv
- Postgresql==9.6

**1º - Criar uma pasta para projetos e entrar nela.**

`mkdir Projetos`

`cd Projetos`

**2º - Instalar o virtualenv**

`pip install virtualenv`

**3º - Criar a pasta para ambientes de desenvolvimento dentro da pasta Projetos e entrar nela.**

`mkdir Environments`

`cd Environments`

**4º - Dentro da pasta Environments criar um environment de Python 3.**

`virtualenv -p python3 deputados`

*Se a versão padrão do Python for a 3, não é preciso especificar no comando*

`virtualenv deputados`

**5º - Ativar o environment.**

*Unix*

`source deputados/bin/activate`

*Windows*

`deputados\Scripts\activate`

**6º - Clonar o repositório dentro da pasta de Projetos.**

`cd ../../`

`git clone https://gitlab.com/edelygomes/deputados.git`


**7º - Entrar na pasta do projeto e instalar os requirements.**

`pip install -r requirements`


**8º - Entrar no psql e cria usuário 'alba' e banco de dados 'assembleia'.**

*Entra no cli do Postresql*

`psql -U postgres`

*Cria usuário alba*

`postgres=# create user alba with password '123456';`

*Cria banco de dados assembleia*

`postgres=# create database assembleia;`

**9º - Após sair da CLI do Posgresql, importar banco de dados.**

`psql -h localhost -p 5432 -U alba -f assembleia.sql assembleia`

**10º - Rodar as migrations.**

`python manage.py migrate`

**11º - Iniciar servidor no ambiente local.**

`python manage.py runserver --settings=mysite.settings.local`