import pyodbc
import collections
import json

server = 'gcsocialmedia.database.windows.net'
database = 'JaynesCottages'
username = 'IvyCheng@gcsocialmedia'
password = 'Bdat2019'
driver= '{ODBC Driver 13 for SQL Server}'
cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()
cursor.execute("SELECT * FROM [dbo].[TeamMember]")
row = cursor.fetchone()

dl=[]

while row:
    d = collections.defaultdict(dict)
    print (str(row[0]) + " " + str(row[1]) + str(row[2]))
    d['name']= row[0]
    d['role']= row[2]
    dl.append(d)
    row = cursor.fetchone()

#dumps:to json; dump:to json file
member_json=json.dumps(dl)
f = open("member.json","w")
f.write(member_json)
f.close()   
    
#Driver={ODBC Driver 13 for SQL Server};Server=tcp:gcsocialmedia.database.windows.net,1433;Database=JaynesCottages;Uid=IvyCheng@gcsocialmedia;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;