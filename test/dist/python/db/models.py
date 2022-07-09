import sys

try:
    from django.db import models
except Exception:
    print('Exception: Django Not Found, please install it with "pip install django".')
    sys.exit()


# Sample Project model
class Project(models.Model):
    name = models.CharField(max_length=50, default="Project")

    def __str__(self):
        return self.name