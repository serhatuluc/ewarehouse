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


class Product(TenantAwareModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to="media", default="")
    sale_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
    )
    is_on_sale = models.BooleanField(default=False)
    expire_date = models.DateField(default=date.today)
    contents = models.TextField(default="")

    def __str__(self) -> str:
        return self.name

    def clean(self):
        if not self.image:
            raise ValidationError("Lütfen bir fotoğraf yükleyin!")
        else:
            w, h = get_image_dimensions(self.image)
            if w != 270 and h != 370:
                raise ValidationError("Fotoğraf 270 x 370 boyutunda olmalıdır!")


class ProductSpesifications(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    key = models.CharField(max_length=20)
    value = models.CharField(max_length=4000)

    def __str__(self):
        return f"{self.product.name}'s settings"


class ProductOrderingInformations(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    material = models.CharField(max_length=20)
    description = models.CharField(max_length=4000)
    packaging = models.CharField(max_length=4000)

    def __str__(self):
        return f"{self.product.name}'s settings"
