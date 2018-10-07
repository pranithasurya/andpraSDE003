from flask import Flask, request
import os

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

def getdata(cmd, filename):
	os.system(cmd)
	try:
		fileloc = os.path.join(app.root_path,filename)
		print(fileloc)
		print(os.path.isfile(fileloc))
		file = open(fileloc, "r")
		if file:
			print(file.read())
		str = ""
		with open(fileloc,"r") as f:
			str+=f.read()

		return str
	except:
		print("could not find file")
		return []

@app.route('/posts', endpoint='posts', methods=['GET','POST', 'OPTIONS'])
def get():
	return getdata('python expedia_fb_posts_parser.py', 'posts.json')

@app.route('/quotes',endpoint='quotes', methods=['GET','POST', 'OPTIONS'])
def get():
	return getdata('python marktwain_quote_parser.py', 'quotes.json')


if __name__ == '__main__':
	app.run(port='4300')