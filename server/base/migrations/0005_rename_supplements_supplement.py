# Generated by Django 4.1.3 on 2022-11-22 08:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_weight_supplements_cardio'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Supplements',
            new_name='Supplement',
        ),
    ]
