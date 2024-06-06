from datetime import date
from django.db import models
from django.core.exceptions import ValidationError
from django.core.files.images import get_image_dimensions


class Tenant(models.Model):
    name = models.CharField(max_length=255)
    subdomain = models.CharField(max_length=255)


# class TenantAwareModel(models.Model):
#     tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE)


class Product(models.Model):
    tenant = models.ForeignKey(
        Tenant,
        on_delete=models.CASCADE,
        related_name="products",
    )
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to="media")
    sale_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
    )
    is_on_sale = models.BooleanField(default=False)
    expire_date = models.DateField(default=date.today)
    contents = models.TextField()

    def __str__(self) -> str:
        return self.name

    def clean(self):
        if not self.image:
            raise ValidationError("Lütfen bir fotoğraf yükleyin!")
        else:
            w, h = get_image_dimensions(self.image)
            if w != 270 and h != 370:
                raise ValidationError("Fotoğraf 270 x 370 boyutunda olmalıdır!")
