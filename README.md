<h1>E-WAREHOUSE</h1>

<h2>Why?</h2>

:arrow_right: Offers pharmaceutical warehouses to market their products to pharmacies

:arrow_right: Aims to be a platform for pharmacies to exchange their medicines which is a legal activity that is regulated by The Republic of Türkiye Ministry of Health

:arrow_right: With new features it will be a platform for pharmacies to meet their any needs

<br></br>

<h2>Technologies</h2>

Technology    | Version
------------- | -------------
[![Django][Django]][Django-url]   |  5.0.4
[![React][React.js]][React-url]         |  18.3.1
[![PostgreSql][PostgreSql]][PostgreSql-url]    |  14.5 

Tools     | 
------------- | 
[![Bootstrap][Bootstrap]][Bootstrap-url] |
[![Redux][Redux]][Redux-url]         | 
[![Poetry][Poetry]][Poetry-url]     |
[![PyTest][PyTest]][PyTest-url]     |
[![Anaconda][Anaconda]][Anaconda-url]     |



<br></br>

<h2>Technical Details</h2>

:one: Multitenant Architecture
* Since we target more than one organization we should have come up with a multi-tenant application that will be easy to implement and use lower resources as much as possible. 
* We search through the internet and find out different strategies for multi tenancy. We prefer to apply row-based data segregation.


  **Row-based data segregation:**  
  - It is a strategy used in multi-tenant architectures where each tenant's data is stored in the same database tables, but each row includes a tenant identifier to ensure data segregation. This approach requires careful design and implementation to ensure that data access and security are properly enforced.
  
  **Reason for Row Based Data Segregation:**
  * Cost efficiency: Multiple tenants share the same database instance, reducing the need for additional hardware and software resources.
  * Lower Maintenance Costs: Managing a single database instance is simpler and cheaper than managing multiple instances.
  * Dynamic Tenancy: Easily add new tenants without the need for additional database setup.
  * Tenant-Specific Customization: Easier to implement custom features or settings for specific tenants within the shared environment.
  * There are some disadvantages of this strategy such as highload by one tenant will affect other tenants too but since we do not foresee a high number of transactions it will be feasible.


<br></br>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Install Anaconda
* Create Environment
  ```sh
  conda create –name ewarehouse python=3.12.2
  ```
* Install Poetry
  ```sh
  pip install poetry
  ```
* Install Django with Poetry
  ```sh
  poetry add django
  ```
* Install Chocolatey on Windows
* Install Make with Chocolatey
  ```sh
  choco install make
  ```
* Install Chocolatey on Windows
* Edit host file in C:\Windows\System32\drivers\etc to let application works multitenant
  ```sh
  # To allow the same kube context to work on the host and the container:
  127.0.0.1 kubernetes.docker.internal
  127.0.0.1 tenantone.example.com
  127.0.0.1 tenanttwo.example.com
  ```
* Install redux-devtools on your chrome
## Installation

Follow steps below to install and run application in your local.

1. Clone the repo
   ```sh
   git clone https://github.com/serhatuluc/ewarehouse.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open with Vscode
4. Run commands below on two different terminal
   ```sh
   cd backend
   make run
   ```

    ```sh
   cd frontend
   make run
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Django]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green
[Django-url]: https://www.djangoproject.com/
[PostgreSql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSql-url]: https://www.postgresql.org/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Poetry]: https://img.shields.io/badge/Poetry-%233B82F6.svg?style=for-the-badge&logo=poetry&logoColor=0B3D8D
[Poetry-url]: https://python-poetry.org/
[PyTest]: https://img.shields.io/badge/pytest-%23ffffff.svg?style=for-the-badge&logo=pytest&logoColor=2f9fe3
[PyTest-url]: https://docs.pytest.org/en/stable/
[Anaconda]: https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white
[Anaconda-url]: https://docs.pytest.org/en/stable/](https://anaconda.org/

