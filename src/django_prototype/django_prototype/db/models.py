from django.db import models

# Sample Project model
class Project(models.Model):
    name = models.CharField(max_length=50, default="Project")

    def __str__(self):
        return self.name