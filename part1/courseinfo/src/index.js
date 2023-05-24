import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'
import Example from './Example'
import Complex from './Complex'

const Main = () => (
<div>

    <App></App>
    {/*<Example></Example>*/}
    <Complex></Complex>

</div>

);

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)
