from django.contrib import admin
from Api.models import *
admin.site.register(Megapod)

class Serverpod_1Inline(admin.TabularInline):
    model = Miners
    exclude = ['serverpod_2']

class Serverpod_1Admin(admin.ModelAdmin):
    inlines = [
        Serverpod_1Inline,
    ]
admin.site.register(Serverpod_1, Serverpod_1Admin)

# class Serverpod_2_Inline(admin.TabularInline):
#     model = Miners
#     exclude = ['serverpod_1']

# class Serverpod_2Admin(admin.ModelAdmin):
#     inlines = [
#         Serverpod_2_Inline,
#     ]
# admin.site.register(Serverpod_2, Serverpod_2Admin)

class Serverpod_2_Inline(admin.ModelAdmin):
    model = Serverpod_2
    list_display = ['Serverpod_2_id', ]

admin.site.register(Serverpod_2, Serverpod_2_Inline)
# admin.site.register(Serverpod_1)
# admin.site.register(Serverpod_2)
# admin.site.register(ServerPod_3)
# admin.site.register(ServerPod_4)
# admin.site.register(Miners)