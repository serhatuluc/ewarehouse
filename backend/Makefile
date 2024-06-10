.PHONY: install run migrate migrations superuser test update format add

install:
	   poetry install

add:
	   poetry add $(arg) # Usage is like : make add arg=NAME_OF_THE_MODULE

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

format:
		pre-commit run --all-files

