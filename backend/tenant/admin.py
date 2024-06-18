from django.contrib import admin

from .models import ProductOrderingInformations, ProductSpesifications, Tenant, Product

admin.site.register(Tenant)
admin.site.register(Product)
admin.site.register(ProductSpesifications)
admin.site.register(ProductOrderingInformations)

