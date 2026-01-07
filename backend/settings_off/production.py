import dj_database_url
from .base import *

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_USE_TLS = True
EMAIL_PORT = env('EMAIL_PORT')
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = 'info@finance-hub'
DOMAIN = env('DOMAIN')
SITE_NAME = 'Finance Hub'

# Using real time database engine for production
DATABASES = {
    'default': dj_database_url.parse(env("DATABASE_URL"))   
}
