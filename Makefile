all:
	git add .
	git commit -m "$(msg)"
	git push -u origin