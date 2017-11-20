import slugify
import json

from flask_restful import reqparse, Resource, Api
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
	if bp_point.is_valid():
	    bp_point.save()
	    return args,201
        return args,400


api.add_resource(BPGraphViews, "/bp-data")
