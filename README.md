[![CircleCI](https://circleci.com/gh/craftninja/button-masher-server.svg?style=shield)](https://circleci.com/gh/craftninja/button-masher-server)
[![Maintainability](https://api.codeclimate.com/v1/badges/22b6bc7010e4643fce11/maintainability)](https://codeclimate.com/github/craftninja/button-masher-server/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/22b6bc7010e4643fce11/test_coverage)](https://codeclimate.com/github/craftninja/button-masher-server/test_coverage)

# README

### set it up

1. `$ yarn install`
1. `$ cp .env.example .env`
1. `$ createdb button_masher_test`
1. `$ createdb button_masher_development`
1. `$ yarn db:migrate`
1. `$ yarn db:migrate:test`
1. rollback to a specific version:
    * `$ MIGRATE_TO=<TIMESTAMP OF MIGRATION> yarn db:migrate`
1. `$ nodemon start`
    * `$ yarn global add nodemon` if you don't have it... this will restart your server on *most* changes

### deploy to heroku:
1. create app on heroku
1. add Heroku Postgres add-on
1. add needed envs (no need to add test database url or database url, database url should already be created)
1. `$ heroku run yarn db:migrate`
1. `$ heroku logs --tail` if you need to see logs

### Tests, test coverage & reports, and linter
Tests (also runs linter on success)
* `$ yarn test`

Test coverage and reports
* `$ yarn coverage` - runs tests and reports coverage
* `$ yarn report` - generates coverage artifacts
* `$ open coverage/lcov-report/index.html`

Linter alone
1. `$ yarn lint`

### [curl docs](./curl.md)
