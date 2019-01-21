import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import ComponentA from './components/ReactComponentA'
ReactDom.render(<div>
    <App title='page1' />
    <ReactComponentA/>
</div>, document.getElementById('test'))