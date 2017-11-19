import slugify
import json

from flask_restful import reqparse, Resource, Api
from application import app
from models import BPGraphPoints

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('high')
parser.add_argument('low')
parser.add_argument('ts')


class BPGraphViews(Resource):
    def get(self, *args, **kwargs):
        return list(
	    {"high": bp.high, "low": bp.low, "ts": bp.ts} for bp in BPGraphPoints.objects.all()
	)

    def post(self):
	args = parser.parse_args()
	BPGraphPoints(**args).save()
        return args,201


api.add_resource(BPGraphViews, "/bp-data")
