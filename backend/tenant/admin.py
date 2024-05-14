from django.contrib import admin

from .models import Tenant, Product

admin.site.register(Tenant)
admin.site.register(Product)
