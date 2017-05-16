from PIL import Image
from os import walk
from os import listdir
from os.path import isfile, join

files_list = [f for f in listdir("img/") if isfile(join("img/", f))]
print(files_list)

for file_name in files_list:
	if(file_name == "image_optimise.py"):
		continue
	else:
		with Image.open("img/" + file_name) as img:
			width,height = img.size
			print(str(width) + " " + str(height))


			img.save(file_name, optimize=True, quality=85)