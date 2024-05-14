from django.urls import path
from tenant.views import product_views as views

urlpatterns =[
    path("", views.get_products, name="get_products"),
]