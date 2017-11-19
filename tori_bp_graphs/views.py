import slugify
import json

from flask import request
from flask_restful import Resource, Api
from application import app
from models import BPGraphPoints

api = Api(app)


class BPGraphViews(Resource):
    def get(self, *args, **kwargs):
        return list(BPGraphPoints.objects.all())

    def post(self, *args, **kwargs):
        print request.json
        return 'POST!',201


api.add_resource(BPGraphViews, "/bp-data")
