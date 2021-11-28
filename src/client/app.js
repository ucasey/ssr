import React from "react";
import {hot} from 'react-hot-loader/root'

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>react ssr init</h1>
            </div>
        )
    }
}
export default hot(App)