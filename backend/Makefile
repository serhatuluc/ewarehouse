.PHONY: install run migrate migrations superuser test update

install:
	   poetry install

run: 
	   poetry run python manage.py runserver 

migrate:
	   poetry run python manage.py migrate

migrations:
	   poetry run python manage.py makemigrations

superuser:
	   poetry run python manage.py createsuperuser

test:
	   poetry run python manage.py test

update: install migrate
	   
