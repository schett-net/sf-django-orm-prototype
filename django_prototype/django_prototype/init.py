"""
Setups the django environment.
"""

import sys
import os
import django


def init():
    """
    Initializes the django environment.
    """
    sys.dont_write_bytecode = True
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_prototype.settings')
    django.setup()