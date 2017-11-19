import pymodm


class BPGraphPoints(pymodm.MongoModel):
    ts = pymodm.fields.CharField()
    high = pymodm.fields.CharField()
    low = pymodm.fields.CharField()
