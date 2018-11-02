from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '6inbnsa4z7zfl^1e7af1+w4pnri+rufkf!mr7tug)vtyl!oi43'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', ['127.0.0.1', 'localhost'])

INTERNAL_IPS = os.environ.get('INTERNAL_IPS', ['127.0.0.1'])

MIDDLEWARE +=(
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

INSTALLED_APPS += (
    'debug_toolbar',
)

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'assembleia',
        'USER': 'alba',
        'PASSWORD': '123456',
        'HOST': '127.0.0.1',
        'PORT': '5432'
    }
}    