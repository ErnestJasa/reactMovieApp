
const Movie= (props)=>{
        return(
            <div className="card col" >
                <img src={props.img && props.img} width="80%" alt=""/>
                <h5 className="card-title">{props.title}</h5>
            </div>
        )
}

export default Movie