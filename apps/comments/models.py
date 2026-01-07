from django.db import models
from apps.posts.models import Post
from django.conf import settings

class Comment(models.Model):
    user_name = models.ForeignKey(settings.AUTH_USER_MODEL,  on_delete=models.CASCADE, related_name="comments",  null=True)
    text = models.TextField(max_length=300)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'comment'
        verbose_name_plural = 'all comments'

    def __str__(self):
        return self.text
