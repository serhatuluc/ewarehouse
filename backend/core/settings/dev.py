from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-*um&iim#3(gig!r7x3m+h8qhy@@+r96xpji3kin&ifcew)awm4"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["example.com", ".example.com", "localhost"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    },
}
