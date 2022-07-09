from setup import *

project = Project.objects.create(name=argv[1])
qs_json = {
    'pk': project.pk,
    'name': project.name
}
print(json.dumps(qs_json))