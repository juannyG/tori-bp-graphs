import pymodm


class BPGraphPoints(pymodm.MongoModel):
    ts = pymodm.fields.BigIntegerField(blank=False, required=True)
    systolic = pymodm.fields.CharField(blank=False, required=True)
    diastolic = pymodm.fields.CharField(blank=False, required=True)
