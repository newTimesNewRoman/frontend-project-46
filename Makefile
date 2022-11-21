install:
		npm ci

run-example:
			node bin/gendiff.js files/file1.json files/file2.json 

publish:
		npm publish --dry-run

lint:
	npx eslint .