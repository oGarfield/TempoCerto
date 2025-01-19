# **TempoCerto**

## **Descrição do Programa**
O TempoCerto é uma aplicação interativa desenvolvida com Angular que apresenta previsões meteorológicas de forma intuitiva e visual. Com funcionalidades como mapas interativos, pesquisa de cidades e detalhes meteorológicos para dias futuros, esta aplicação é ideal para quem precisa de informações meteorológicas rápidas e confiáveis.

A aplicação utiliza a API pública do **IPMA (Instituto Português do Mar e da Atmosfera)** para obter dados de previsão meteorológica e geográficos das regiões de Portugal.

---

## **Funcionalidades**
- **Pesquisa de Cidades**: Autocomplete para procurar cidades e visualizar informações meteorológicas.
- **Mapa Interativo**: Marcadores no mapa mostram ícones meteorológicos, com detalhes ao passar o rato.
- **Lista de Cidades**: Visualize temperaturas mínimas e máximas para hoje, amanhã e nos próximos dias.
- **Detalhes da Localidade**: Informações detalhadas sobre a previsão meteorológica de uma cidade para até 4 dias.
- **Navegação Simples**: Links para páginas principais, como "Cidades", "About us" e "Home".

---

## **APIs Utilizadas**
A aplicação consome dados da **API do IPMA** para fornecer informações meteorológicas atualizadas.  

### **Detalhes da API IPMA**
- **URL Base**: `https://api.ipma.pt`
- **Endpoints Relevantes**:
  - **Cidades e Distritos**: Dados sobre localizações geográficas, incluindo `latitude` e `longitude`.
  - **Previsões Meteorológicas**: Temperaturas mínimas e máximas, probabilidade de precipitação, direção do vento e tipo de tempo.
- **Documentação Oficial**: Consulte [API do IPMA](https://api.ipma.pt) para detalhes sobre os endpoints.

---

## **Requisitos do Sistema**
Antes de executar a aplicação, certifique-se de que tem os seguintes requisitos instalados no seu ambiente:
1. **Node.js** (versão 14 ou superior)
2. **Angular CLI** (versão 15 ou superior)
3. **npm** (gestor de pacotes, incluído com o Node.js)

### **Dependências**
As dependências utilizadas pela aplicação estão listadas em `package.json`. As principais incluem:
- **Angular Framework**: Estrutura principal para desenvolvimento.
- **Bootstrap**: Estilo e design responsivo.
- **Leaflet**: Mapa interativo.
- **ngx-bootstrap**: Funcionalidades adicionais para Bootstrap.
- **FontAwesome**: Ícones para melhorar a experiência do utilizador.

---

## **Como Executar**
Siga os passos abaixo para configurar e executar a aplicação:

### 1. **Clonar o Repositório**
```bash
git clone https://github.com/oGarfield/TempoCerto
cd Metereologia-mperes
```

### 2. **Instalar Dependências**
Execute o seguinte comando para instalar todas as dependências:
```bash
npm install
```

### 3. **Configurar o Ambiente**
Certifique-se de que os endpoints da API IPMA estão acessíveis. Não é necessária nenhuma configuração adicional, pois os serviços já estão configurados na aplicação.

### 4. **Iniciar o Servidor**
Certifique-se de que está dentro da pasta client antes de executar o comando abaixo. Caso contrário, o comando não funcionará:
```bash
cd client
ng serve
```
O servidor estará disponível em: [http://localhost:4200](http://localhost:4200).

---

## **Como Utilizar a Imagem Docker**

Pode executar facilmente a aplicação utilizando Docker seguindo estes passos:

### **1. Obter a Imagem Docker**
Faça o download da imagem pré-construída do Docker Hub:
```bash
docker pull <docker-username>/tempo-certo:latest
```

Substitua `<docker-username>` pelo nome de utilizador da sua conta Docker Hub.

### **2. Executar o Contêiner Docker**
Inicie o contêiner Docker para executar a aplicação:
```bash
docker run -d -p 8080:80 --name tempo-certo-app <docker-username>/tempo-certo:latest
```

**Explicação**:
- `-d`: Executa o contêiner em modo "detached" (em segundo plano).
- `-p 8080:80`: Mapeia a porta 8080 do seu computador para a porta 80 no contêiner (onde a aplicação está a ser executada).
- `--name tempo-certo-app`: Atribui um nome ao contêiner.

### **3. Aceder à Aplicação**
Abra o navegador e aceda ao seguinte endereço:
```
http://localhost:8080
```

A aplicação deverá ser apresentada no navegador.

### **4. Parar o Contêiner Docker**
Para parar o contêiner, utilize:
```bash
docker stop tempo-certo-app
```

### **5. Reexecutar o Contêiner**
Se parou o contêiner mas deseja reiniciá-lo sem fazer novo download da imagem:
```bash
docker start tempo-certo-app
```

### **6. Remover o Contêiner Docker**
Se já não precisar do contêiner, pode removê-lo com o seguinte comando:
```bash
docker rm tempo-certo-app
```

---

## **Como Funciona o Programa**
1. **Estrutura Angular**:
   - O programa é dividido em componentes (e.g., `home`, `map`, `local-detail`) para facilitar a organização e reutilização do código.
   - Os serviços (`distrits.service.ts` e `forecast.service.ts`) fazem chamadas à API do IPMA para obter dados.

2. **Fluxo de Dados**:
   - **Mapa Interativo**: O componente `MapComponent` utiliza o Leaflet para exibir um mapa interativo. Os dados de previsão são associados a marcadores no mapa.
   - **Lista de Cidades**: O componente `ListComponent` mostra as cidades com as temperaturas mínimas e máximas, organizadas por data.
   - **Detalhes de Localidades**: O componente `LocalDetailComponent` apresenta informações detalhadas para uma cidade selecionada.

3. **Interface com API**:
   - O serviço `DistritsService` obtém informações geográficas (localizações, IDs, etc.).
   - O serviço `ForecastService` obtém previsões meteorológicas para diferentes intervalos de tempo.