import profilePic from './assets/BroCodePfp.png'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="class-title">BroCode</h2>
            <p className="card-text">My Card Example</p>
        </div>
    );
}

export default Card;