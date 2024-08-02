from django.contrib import admin

from .models import ProductOrderingInformations, ProductSpesifications, Product

admin.site.register(Product)
admin.site.register(ProductSpesifications)
admin.site.register(ProductOrderingInformations)
