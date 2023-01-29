from django.contrib import admin
from .models import User,Weight,Cardio,Supplement

# Register your models here.
admin.site.register(User)
admin.site.register(Weight)
admin.site.register(Cardio)
admin.site.register(Supplement)

