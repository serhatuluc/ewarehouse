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


<br></br>

<!-- GETTING STARTED -->
## Getting Started

Follow steps below to run the application in your local.

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

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
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

