from django_prototype.db.models import Project

from ..init import init

init()

def create_project(name):
    project = Project.objects.create(name=name)
    qs = {
        'pk': project.pk,
        'name': project.name
    }
    return qs

def list_projects():
    from django.core.serializers import serialize

    qs = Project.objects.all()
    return serialize('json', qs)