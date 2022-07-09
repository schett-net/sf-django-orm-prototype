import sys
import os
import django
import json
from sys import argv
from django.core import serializers

sys.dont_write_bytecode = True
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')
django.setup()