<h1>E-WAREHOUSE</h1>

<h2>Why?</h2>

:arrow_right: Offers pharmaceutical warehouses to market their products to pharmacies

:arrow_right: Aims to be a platform for pharmacies to exchange their medicines which is a legal activity that is regulated by The Republic of Türkiye Ministry of Health

:arrow_right: With new features it will be a platform for pharmacies to meet their any needs



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


<br></br>

<h2>Getting Started</h2>

:one: Arrange NHibernate Configuration

Change password and database name in configuration with your own settings

 ```"ConnectionStrings": {
    "PostgreSqlConnection": "User ID=postgres;Password=YourMasterPasswordForPostgre;Server=localhost;Port=5432;Database=YourDatabaseName;Integrated Security=true;Pooling=true;"
  },
  ```

:two: Adding Admin to database

Insert admin to database using sql query below. As it can be seen password is hashed.

This is the information needed to log in as admin -> ``` UserName = Admin , Password = Admin123 ```

```mysql
INSERT INTO account (id , name, username,email,password,role,lastactivity) 
VALUES ( 1, 'Admin', 'Admin','Admin@gmail.com','e64b78fc3bc91bcbc7dc232ba8ec59e0','Admin','2022-09-17 21:53:16.2522')
```
<br></br>

<h2>Structure of Project</h2>

In this project, Onion Architecture has been applied as an example of Clean Archtitecture . Firstly, I should have to give credit [Güven Barış Çakan](https://github.com/guvenbaris) and his fellows [Kader Uzuner](https://github.com/KaderUzuner) and [Osman Mahmut Cepoğlu](https://github.com/osmanmahmutcepoglu) since they were an inspiration for
me to prefer using Onion Architecture.

In Onion Architecture, deeper the layer the fewer dependency it has. Deepest layer which is Domain has no dependency. The layer on Domain which is Application layer has dependency to domain. So outer layer are allowed to reference the layers that are directly below them.   
<br></br>

[<img src="https://miro.medium.com/max/640/1*0Pg6_UsaKiiEqUV3kf2HXg.png">](http://google.com.au/)


**Domain layer**

:arrow_right:Domain has no dependency. It holds application domain objects. Entities are placed here.
<br></br>


**Application layer**

:arrow_right:Application layer holds interfaces and services. Bussiness logic is implemented in this layer. Service interface are kept seperate to ensure loose coupling.
<br></br>

**Persistence Layer**

:arrow_right:Migrations and database configuration is implemented in this layer. No bussiness logic ismplemented. Only this layer knows database.
<br></br>

**Infrastructure Layer**

:arrow_right:Log and email service is configured here. No bussiness logic is implemented.

<br></br>

<h2>ER Diagram</h2>
:arrow_right: Both offer and product has Status field. Status field is true by default. If product is sold or offer is disapproved then status will be false. 
It can be assumed as active and passive.

<br></br>


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

