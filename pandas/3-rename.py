#!/usr/bin/env python3

import pandas as pd
from_file = __import__('2-from_file').from_file

df = from_file('coinbaseUSD_1-min_data_2014-12-01_to_2019-01-09.csv', ',')

# Start of my code
df = df[["Timestamp", "Close"]]
df = df.rename(columns={'Timestamp': 'Datetime'})
# End of my code

print(df.tail())
