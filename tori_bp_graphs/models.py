import pymodm


class BPGraphPoints(pymodm.MongoModel):
    ts = pymodm.fields.BigIntegerField(blank=False, required=True)
    systolic = pymodm.fields.IntegerField(blank=False, required=True, min_value=0, max_value=220)
    diastolic = pymodm.fields.IntegerField(blank=False, required=True, min_value=0, max_value=220)
