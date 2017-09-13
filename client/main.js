import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ImageList from './components/ImageList'

const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    )
}


Meteor.startup(() => {
    console.log('wrk')
    ReactDOM.render(<App />, document.querySelector('.root'))
})