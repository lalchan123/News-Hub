from django.contrib import admin
from apps.comments.models import Comment
from .models import Post, PostViews


class CommentInstanceInline(admin.TabularInline):
    model = Comment
    extra = 0


class PostAdmin(admin.ModelAdmin):
    list_filter = ('author', 'date_created', 'category')
    list_display_links = ['id', 'title']
    list_display = ('id', 'title', 'date_created', 'last_updated', 'category', 'views', 'author')
    list_per_page = 25
    inlines = [CommentInstanceInline]
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Post, PostAdmin)
admin.site.register(PostViews)
