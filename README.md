
![Travis CI](https://travis-ci.org/jonathandion/ez-dom.svg?branch=master)


> ez-dom is a easy library to manipulate the DOM, with a simple API.

## Getting started
ez-dom promotes a functional programming (FP) style to manipulate the DOM. Most methods are auto-curried and data-last(dom element(s)).


#### Curried methods

 cap iteratees to one argument:
 
`addClass`
`append`
`removeClass`
`toggleClass`
`css`
`html`
`trigger`
`setText`

Methods that cap iteratees to two argument:

`on`

Methods that are not curried:

`remove`, `ready`, `show`, `hide`, `offset`, `query`, `getText`

e.g :
`ez.remove(element)`


## Installation

npm
```js
 npm install ez-dom
```

yarn
```js
 yarn add ez-dom
```


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

	const handleClick = function(e, el) {
		e.preventDefault()
		ez.addClass('bar', el)
		console.log(e.detail) // Object {derp: "derp!"}
	}

	const addClassOnClick = ez.on(ez._, handleClick)
	
	addClassOnClick('click')(body)
	addClassOnClick('click', test)

	const trigger = ez.trigger({ event : 'click', detail : { 'derp' : 'derp!' }})
	trigger(body)

	const applyStyle = ez.compose(
		ez.addClass('elon'),
		ez.css({ backgroundColor: 'red' })
	)

	applyStyle(ez.query('div'))

})
```

### API

#### addClass `(classes: string, selectors: array) => array`
```js
 addClass('myClass')(element)
```

#### append  `(html: any, selectors: array) => array`
```js 
 append(`<div>hi</div>`)(element)
```
#### css `(css: object, selectors: array) => array`
```js 
 css({ backgroundColor: 'blue', fontSize: '20px' })(element)
```

#### getText `(selectors: array) => string`
```js 
 getText(element)
```
#### hide `(selectors: array) => array`
```js 
 hide(element)
```

#### html `(selectors: array) => string`
```js 
 const html = html(element)
```

#### offset
```js 
const offset = offset(element)
```

#### on `(event: object, callback: function, selectors: array) => object`
```js 
 on('click')(handleClick)(div)
```

#### query `(selectors: array) => array`
```js 
 const el = query('div')
```

#### ready `(callback: function) => undefined`
```js 
 ez.ready(() => { console.log('ready!') })
```

#### remove `(selectors: array) => array`
```js 
 remove(element)
```

#### removeClass `(classes: string selectors: array) => array`
```js 
 removeClass('foo derp')(element)
```

#### setText `(text: string, selectors: array) => array`
```js 
 setText('foo')(div)
```

#### show `(selectors: array) => array`
```js 
 show(div)
```

#### toggleClass `(classes: string, selectors: array) => array`
```js 
 toggleClass('myToggleClass')(div)
```


#### trigger `({event, detail}: { event: string; detail: object; }, selectors: array) => any`
```js 
 trigger({ event : 'click', detail : { 'test' : 'hi' } })(element)
```

### Placeholder

A special placeholder value used to specify "gaps" within curried functions, allowing partial application of any combination of arguments, regardless of their positions.

e.g:

```js
 const addClassOnClick = ez.on(_, handleClick)
 addClassOnClick('click')(body)
```


#### Browser support

ez-dom works on modern browsers such as Chrome, Firefox, and Safari.

# License

MIT
