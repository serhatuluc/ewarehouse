from datetime import date
from django.db import models
from django.core.exceptions import ValidationError
from django.core.files.images import get_image_dimensions


class Tenant(models.Model):
    name = models.CharField(max_length=255)
    subdomain = models.CharField(max_length=255, unique=True)


class TenantAwareModel(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)

    class Meta:
        """
        To make the model an abstract base class, meaning it won't create a table in the DB,
        but its fields will be included in any model that inherits from it.
        """

        abstract = True



