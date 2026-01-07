from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    category_name = models.CharField(max_length=100,  verbose_name=_("Category Name"), unique=True)
    slug = models.CharField(max_length=100, verbose_name=_("Category Slug"), unique=True)
    description = models.CharField(max_length=255, verbose_name=_("Description"), blank=True)
    category_img = models.ImageField(blank=True)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.category_name

