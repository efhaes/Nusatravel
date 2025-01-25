from django.db import models

class PaketUmroh(models.Model):
    nama_paket = models.CharField(max_length=255)
    harga = models.DecimalField(max_digits=10, decimal_places=2)
    diskon = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    tanggal_keberangkatan = models.CharField(max_length=100)  # Menggunakan CharField untuk tanggal
    maskapai = models.CharField(max_length=100)
    hotel_mekkah = models.CharField(max_length=255)
    hotel_madinah = models.CharField(max_length=255)
    gambar = models.ImageField(upload_to='paket_umroh/')
    deskripsi = models.TextField()

    def __str__(self):
        return self.nama_paket
    
    
class LandArrangement(models.Model):
    NAMA_PAKET_CHOICES = [
        ('Bronze', 'Paket Bronze'),
        ('Silver', 'Paket Silver'),
        ('Gold', 'Paket Gold'),
        ('Platinum', 'Paket Platinum'),
    ]
    nama_paket = models.CharField(max_length=255)
    harga = models.DecimalField(max_digits=10, decimal_places=2)
    hotel_mekkah = models.CharField(max_length=255)
    hotel_madinah = models.CharField(max_length=255)
    deskripsi = models.TextField()

    def __str__(self):
        return self.nama_paket
