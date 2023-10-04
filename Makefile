install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

test:
	npm test

.PHONY: test