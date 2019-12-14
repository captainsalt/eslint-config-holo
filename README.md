# eslint-config-holo
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/eslint-config-holo"><img src="https://img.shields.io/npm/v/eslint-config-holo.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/eslint-config-holo"><img src="https://img.shields.io/npm/dt/eslint-config-holo.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/iCrawl/eslint-config-holo"><img src="https://david-dm.org/iCrawl/eslint-config-holo/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/eslint-config-holo/"><img src="https://nodei.co/npm/eslint-config-holo.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Install

```bash
yarn add -D eslint-config-holo
```

## Usage

Add the ESLint config to your `package.json`:

```json
{
	"name": "my-project",
	...
	"eslintConfig": {
		"extends": "holo"
	}
}
```

Or to `eslintrc.js` or `eslintrc.json`:

```json
{
	"extends": "holo"
}
```

# Targets

If you are developing with Javascript consider adding:

```json
{
	"extends": "holo",
	"env": {
		"browser": true
	}
}
```

or use the platform specific configs for Node.js:

```json
{
	"extends": "holo/node"
}
```

or Vue.js:

```json
{
	"extends": "holo/vue"
}
```

Using the vue extended config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`

```bash
yarn add -D babel-eslint eslint-plugin-vue
```