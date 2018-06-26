Criar ambiente de Desenvolvimento
=================================

Requisitos:

- Python 3.5+
- Virtualenv
- Postgresql==9.6

**1º - Se você não tem uma pasta para colocar seus projetos, vamos criar uma e depois entrar na pasta. Aqui estamos chamando ela de Projetos, mas você pode dar o nome que quiser.**

`mkdir Projetos`

*Este comando cria uma pasta com o nome Projetos* 

`cd Projetos`

*Este comando entra na pasta* 

**2º - Para desenvolver nosso projeto, vamos criar um ambiente para a instalação do Django e outras bibliotecas de forma a não 'bagunçar' o nosso sistema. Isso permite que o nosso projeto atual não interfira nas dependências de outros projetos que temos ou venhamos a ter em nossa máquina.**

`pip install virtualenv`

*Este comando instala o virtualenv, pacote para criação de ambientes python.* 

**3º - Agora que instalamos o Virtualenv, vamos criar outra pasta apenas para organizar nossos ambientes de desenvolvimento.**

`mkdir Environments`

*Este comando cria uma pasta chamada Environments.* 

`cd Environments`

*Este comando entra na pasta.* 

**4º - Agora, dentro da pasta Environments, vamos criar um ambiente para Python 3.**

`virtualenv -p python3 deputados`

*Se a versão padrão do Python em seu SO for a 3, não é preciso especificar python3 no comando basta:*

`virtualenv deputados`

**5º - Agora que o ambiente foi criado, você precisa ativá-lo.**

*Unix*

`source deputados/bin/activate`

*Windows*

`deputados\Scripts\activate`

**6º - Agora que o ambiente foi ativado, vamos voltar para a nossa pasta de projetos. Dentro dela, nós vamos clonar o Custo Parlamentar.**


`git clone https://github.com/Edely/custo-parlamentar.git`


**7º - Em seguida, entre no repositório do Curto Parlamentar e instale as dependências necessárias. Elas estão listadas no arquivo erquirements.txt. Para fazer a instalação vamos usar o pip novamenete.**

`pip install -r requirements.txt`


**8º - Agora que nossas depedencias foram instaladas, vamos criar o nosso banco de dados no postgresql. Por padrão, nosso ambiente de desenolvimento  vai usar um usuário ntrar no psql e cria usuário 'alba' e banco de dados 'assembleia'.**

`psql -U postgres`

*Este comando entra no cli do Postresql. Lembre-se que você precisa ter acesso de administrador no Postgresql*

`postgres=# create user alba with password '123456';`

*Cria usuário alba*

*Cria banco de dados assembleia*

`postgres=# create database assembleia;`

**9º - Após sair da CLI do Posgresql, importar banco de dados.**

`pg_restore -d assembleia -l assembleia.dump -U postgres`

**10º - Rodar as migrations.**

`python manage.py migrate`