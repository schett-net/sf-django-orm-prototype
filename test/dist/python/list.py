from setup import *

qs = Project.objects.all()
qs_json = serializers.serialize('json', qs)
print(qs_json)