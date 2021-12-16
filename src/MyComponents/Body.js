import Home from './Home'
import Mens from './Mens'
import Womens from './Womens'
import Accessories from './Accessories'

function Body(props){
    console.log(props)
    switch (props.newState.currentState){
        case 'Home':
            return <Home props={props}/>
        case 'Mens':
            return <Mens props={props}/>
        case 'Womens':
            return <Womens props={props}/>
        case 'Accessories':
            return <Accessories props={props}/>
        default:
            return <Home props={props}/>
    } 
}
export default Body;