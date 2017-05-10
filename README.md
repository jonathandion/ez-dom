
![Travis CI](https://travis-ci.org/jonathandion/ez-dom.svg?branch=master)


> ez-dom is a easy library to manipulate the DOM, with a simple API.

## Install

npm
```js
 npm install ez-dom
```

yarn
```js
 yarn add ez-dom
```

## Getting started

```js
import * as ez from 'ez-dom'
```
or destructuring
```js
import { addClass }  from 'ez-dom'
```

you can also do

```js
import ready from 'ez-dom/lib/dom/ready'
import query from 'ez-dom/lib/dom/query'
import addClass from 'ez-dom/lib/dom/addClass'
```

## Examples

```js
ez.ready(() => {

	const body = ez.query('body')
	const test = ez.query('.test')

	const handleClick = function(e) {
		e.preventDefault()
		ez.addClass('bar')(this)
	}

	const addClassOnClick = ez.on('click', handleClick)

	addClassOnClick(body)
	addClassOnClick(test) 

	ez.chain(
		ez.query('div'),
		ez.addClass('derp'),
		ez.css({ backgroundColor: 'red' })
	)

})
```

### Browser support

ez-dom works on modern browsers such as Chrome, Firefox, and Safari.

# License

MIT
