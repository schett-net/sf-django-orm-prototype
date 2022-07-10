from django.core.serializers import serialize

from django_prototype.db.models import Project

def list_projects():
    qs = Project.objects.all()
    return serialize('json', qs)

print(list_projects())