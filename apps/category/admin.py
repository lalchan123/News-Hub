from django.contrib import admin
from apps.posts.models import Post
from .models import Category


class PostInstanceInline(admin.TabularInline):
    model = Post
    extra = 0
                    
class CategoryAdmin(admin.ModelAdmin):  
    prepopulated_fields = {'slug': ('category_name',)}
    list_display = ('category_name', 'slug')
    list_per_page = 25
    inlines = [PostInstanceInline]
admin.site.register(Category, CategoryAdmin)


