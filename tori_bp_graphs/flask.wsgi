import sys

# TODO - Remove hardcoded paths
sys.path.insert(0, '/var/www/tori-bp-graphs-env/tori-bp-graphs/tori_bp_graphs')
activate_this = '/var/www/tori-bp-graphs-env/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))
from application import app as application
