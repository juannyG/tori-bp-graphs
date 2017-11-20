import slugify
import json

from flask_restful import reqparse, Resource, Api
from pymodm import errors
from application import app
from models import BPGraphPoints

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('systolic')
parser.add_argument('diastolic')
parser.add_argument('ts')


class BPGraphViews(Resource):
    def get(self, *args, **kwargs):
        return list(
            {"systolic": bp.systolic, "diastolic": bp.diastolic, "ts": bp.ts}\
            for bp in BPGraphPoints.objects.all()
        )

    def post(self):
        args = parser.parse_args()
        bp_point = BPGraphPoints(**args)
	try:
	    bp_point.full_clean()
	except errors.ValidationError, e:
            return e.message, 400
        bp_point.save()
        return args, 201

api.add_resource(BPGraphViews, "/bp-data")
