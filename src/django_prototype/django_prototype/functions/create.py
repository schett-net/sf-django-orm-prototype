import json
from django_prototype.db.models import Project

import argparse

parser = argparse.ArgumentParser(description="Create a project",
                                 formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("name", help="Project name")
args = parser.parse_args()
config = vars(args)

def create_project(name):
    project = Project(name=name)
    project.save()
    
    data = {
        "id": project.id,
        "name": project.name
    }

    return json.dumps(data)

print(create_project(config["name"]))