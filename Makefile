install:
		npm ci

run-example:
			node bin/gendiff.js __tests__/__fixtures__/file1.json __tests__/__fixtures__/file2.json

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		NODE_OPTIONS=--experimental-vm-modules npx jest