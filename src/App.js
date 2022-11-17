import React from "react";
import FlexContainer from "./components/FlexContainer";
import Column from "./components/Grid/Column";
import Container from "./components/Grid/GridContainer";
import Row from "./components/Grid/Row";
import Header from "./components/Header";
import styles from './App.module.css';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {

        return (
         <FlexContainer fd="row" jc="space-between" ai="center">
            <div className={styles.box}> 1 </div>
            <div className={styles.box}> 2 </div>
            <div className={styles.box}> 3 </div>
            <div className={styles.box}> 4 </div>
            <div className={styles.box}> 5 </div>
         </FlexContainer>
        )
    }
}

export default App;


/*

Зробити компонент ФлексКонтейнер, який буде відображати будь-яку кількість div-дітей.
Він відображає дітей як флекс-дітей. 
Флекс-орієнтація, розташування дітей за головною і побічною віссю - це налаштування компоненти



*/
