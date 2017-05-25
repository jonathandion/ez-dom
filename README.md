
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

To reduce size all you need is to use bundler with tree shaking support like webpack 2 or Rollup.

You can do imports like below without actually including the entire library content.

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

#### query 

`(selectors: any) => Array<HTMLElement>`

Query one or many element.

```js 
 const el = query('div')
```

#### ready 

`(callback: Function) => void`

Specify a function to execute when the DOM is fully loaded.

```js 
 ez.ready(() => { console.log('ready!') })
```

#### addClass 

`(classes: string, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Adds the specified class(es) to each element in the set of matched elements.

```js
 addClass('myClass')(element)
```

#### append  

`(html: any, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Insert content, specified by the parameter, to the end of each element in the set of matched elements.

```js 
 append(`<div>hi</div>`)(element)
```
#### css 

`(css: object, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Set one or more CSS properties for every matched element.

```js 
 css({ backgroundColor: 'blue', fontSize: '20px' })(element)
```

#### getText 

`(selectors: Array<HTMLElement>) => string`

Get the text of the first element

```js 
 getText(element)
```
#### hide 

`(selectors: Array<HTMLElement>) => Array<HTMLElement>`

Hide the matched elements.

```js 
 hide(element)
```

#### html 

`(selectors: Array<HTMLElement>) => string`

Get the HTML contents of the first element.

```js 
 const html = html(element)
```

#### offset

 `(selectors: Array<HTMLElement>) => Object`


Get the current coordinates of the first element.

```js 
const offset = offset(element)
```

#### on 

`(event: string, callback: Function, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Attach an event handler function for one or more events to the selected elements.

```js 
 on('click')(handleClick)(div)
```

#### remove 

`(selectors: Function) => Array<HTMLElement>`

Remove the set of matched elements from the DOM.

```js 
 remove(element)
```

#### removeClass 

`(classes: string selectors: Array<HTMLElement>) => Array<HTMLElement>`

Remove a single class, multiple classes, or all classes from each element in the set of matched elements

```js 
 removeClass('foo derp')(element)
```

#### setText 

`(text: string, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Set the text contents of the matched elements.

```js 
 setText('foo')(div)
```

#### show 

`(selectors: Array<HTMLElement>) => Array<HTMLElement>`

Display the matched elements.

```js 
 show(div)
```

#### toggleClass 

`(classes: string, selectors: Array<HTMLElement>) => Array<HTMLElement>`

Add or remove one or more classes from each element in the set of matched elements.

```js 
 toggleClass('myToggleClass')(div)
```


#### trigger 

`({event, detail}: { event: string; detail: Object; }, selectors: Array<HTMLElement> ) => Array<HTMLElement>`

Execute all handlers and behaviors attached to the matched elements for the given event type.

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
