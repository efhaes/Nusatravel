from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('', views.home, name='home'),
    path('tentang/', views.about, name='about'),
    path('land-arrangement-services/', views.land_arrangement_service, name='land_arrangement_service'),
    path('kontak/', views.contact, name='contact'),
    path('paket/<int:paket_id>/', views.paket_detail, name='paket_detail'),
    path('paket_list/', views.paket_list, name='paket_list'),
    path('testimonial/', views.testimonial, name='testimonial'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)