import React from "react";
import ProductsList from "./components/ProductsList ";
import UserDashboard from "./components/UserDashboard";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {

        return (
        <ProductsList />
        )
    }
}

export default App;

