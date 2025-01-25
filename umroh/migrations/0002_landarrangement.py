# Generated by Django 4.2.7 on 2025-01-23 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('umroh', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LandArrangement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nama_paket', models.CharField(max_length=255)),
                ('harga', models.DecimalField(decimal_places=2, max_digits=10)),
                ('hotel_mekkah', models.CharField(max_length=255)),
                ('hotel_madinah', models.CharField(max_length=255)),
                ('deskripsi', models.TextField()),
                ('gambar', models.ImageField(upload_to='land_arrangement/')),
            ],
        ),
    ]
