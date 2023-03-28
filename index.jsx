let React = {
    createElement:(tag,props,...children)=>{
        if(typeof tag === 'function'){
            return tag(props);
        }
        var elements = {tag,props:{...props,children}}
        console.log(elements)
        return elements
    }
}

// creating react components
const App =()=>(
    <div className="prop-test">
            <div className="p-prop">$61,200</div>
            <p> 2.0L Turbo Inline-4 Gas Engine, and All-Wheel Drive 8-speed automatic transmission.</p>
    </div>
); 

// creating the render function to render to the dom
const render = (reactElement,container)=>{
    if(['string','number'].includes(typeof reactElement)){
        container.appendChild(document.createTextNode(string(reactElement)) )
        return ;
    }
    const actualDomElement = document.createElement(reactElement.tag);
    if(reactElement.props){
        object.keys(reactElement.props).filter(p=> p != 'children').forEach(p => actualDomElement[p] = reactElement[p]);
    }
    if(reactElement.props.children){
        reactElement.props.children.forEach(child => render(child,actualDomElement));
    }
    container.appendChild(actualDomElement);
    
}

// calling the render function to the components
render(<App/>,document.querySelector('#app'));