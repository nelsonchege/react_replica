# react_replica

HTML code defines the structure and content of a web page, and the DOM represents that structure and content as a set of objects(nodes) that can be manipulated 

the DOM has methods that are used to manipulate the HTML structure,some of the methods include:
- getElementById
- createElement
- innerHTML

modifiying the DOM is quite expensive and thats React.js comes in 
React uses a virtual DOM which is a replica of the actual DOM.

the difference is that when a modifying nodes,the virtual DOM updates parts of the tree that have changed while the DOM would update the whole tree even parts that havent change

the virtual DOM is also in the form of a javascript object which leads to the next concept JSX

### what is JSX?

this is combination of HTML and javascript and when compiled produces a node belonging to  the DOM.
the jsx also represent a React component.
the object created after being compiled has three key value pairs
- props
- type
- children

note:
 the chldren can  be themselves other nodes
 
after React creates the virtual DOM it needs to convert it the actual DOM,now comes the react Render

### what is react Render?
it is a function that takes a React component and a DOM element as arguments, and then renders the component into the DOM element.

note:
  there are differnt react Renders for different platforms i.e mobile and browser

i earlier mentioned that only nodes that have changed will be updated,this is done by React Reconciler

### what is react Reconciler?

is the internal algorithm in the React library that is responsible for managing and updating the Virtual DOM
