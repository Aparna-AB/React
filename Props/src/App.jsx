// import MyForm from "./form.jsx";
// import {Footer} from "./footer.jsx";
// import "./App.css"
// function App() {
//   return (
//     <div>
//       <h1> Heyy </h1>
//       <MyForm />
//       <MyButton btnContent="Signup" heading="my heading" />
//       <MyButton
//         btnContent="Login"
//         heading="heading 2 "
//         imgUrl="https://i.ytimg.com/vi/oH6xPFytf2E/maxresdefault.jpg"
//       />
//       <MyButton btnContent="click " />
//       <MyButton btnContent="hai" />
//       <Footer />
//     </div>
//   );
// }

// function MyButton({ btnContent, heading, imgUrl }) {
//   return (
//     <div>
//       <img className="my-img" src={imgUrl} alt="" />
//       <h1> {heading} </h1>
//       <button> {btnContent}</button>
//     </div>
//   );
// }
// export default App;

import { Footer } from "./footer.jsx";
import Card from "./card.jsx";
import "./pic.css";
import "./App.css"

function App() {
    return (
        <>
                <h1>Heading</h1>

            <div className="container">
                <Head />
                <div className="mainCard">
                <Card
                    imgUrl="https://picsum.photos/200/300"
                    Heading="Card title"
                    para="Some quick example text to build on the card title and make up the bulk of the card's content. "
                />
                  <Card
                    imgUrl="https://picsum.photos/200/300"
                    Heading="Heading"
                    para="Details of the picture "
                />
                </div>
              
               
                <Footer />
            </div>
        </>
    )
}
export default App;

function Head() {
    return (
        <>
            <div className="header">
                <h1>Profile Card Design</h1>
            </div>
        </>
    )
}

