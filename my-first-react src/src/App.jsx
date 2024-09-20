import Footer from './Footer'
import Header from './Header'
import Body from './Body'

export default function App(){
    return(
        <>
        <Header />
        <br />
        <Body />
        <br />
        <Body name = " Carrene" food = " Lasagna" isHealthy = {false} age = {20} />
        <Body name = " Kyla" food = " Cake" isHealthy = {false} age = {21} />
        <Body name = " Erckiel" food = " Chocolate" isHealthy = {false} age = {20} />
        <Body name = " Cazel" food = " Pasta" isHealthy = {false} age = {21} />
        <Body name = " Nuka" food = " Noodles" isHealthy = {true} age = {7} />
        <Footer />
        </>
    )
}
