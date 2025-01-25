from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import PaketUmroh
from .models import LandArrangement

def home(request):
    paket_umroh = PaketUmroh.objects.all()
    return render(request, 'home.html', {'paket_umroh': paket_umroh})


def about(request):
    return render(request, 'about.html')


def land_arrangement_service(request):
    paket_land_arrangement = LandArrangement.objects.all()
    return render(request, 'land_arrangement_services.html', {'paket_land_arrangement': paket_land_arrangement})


def testimonial(request):
    return render(request, 'testimonial.html')

def contact(request):
    return render(request, 'contact.html')

def paket_detail(request, paket_id):
    paket = get_object_or_404(PaketUmroh, id=paket_id)
    paket_umroh = PaketUmroh.objects.all()  # Ambil semua paket
    return render(request, 'paket_detail.html', {'paket': paket, 'paket_umroh': paket_umroh})


def paket_list(request):
    paket_umroh = PaketUmroh.objects.all()  # Ambil semua paket
    return render(request, 'paket_list.html', {'paket_umroh': paket_umroh})


