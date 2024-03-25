import './pic.css';
function Card({imgUrl,Heading,para}) {
    // let imgUrl = "https://picsum.photos/200/300";
    // let Heading = "Title";
    // let para = "know more about it";
    return (
        <>
            <div className="card-content">

                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{Heading}</h5>
                        <p className="card-text">{para}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Card;