all: clean build rename
	echo 'done'

build:
	npm run build

clean:
	rm -rf dist

rename:
	rm -rf docs && mv dist docs
	git add docs


PHONY: all build clean rename
