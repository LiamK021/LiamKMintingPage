import React from "react";
import "./Announcement.css";

class Announcement extends React.Component {
    render() {
        return (

            <div className="cont"style={{textAlign: "center"}}>
                <h1>A collection of <text style={{color: "#ED1B76"}}>5697</text> unique $quid Games NFTs are on their way to <text style={{color: "#249F9C"}}>Jeju island</text>.<br></br> 
                    By owning a $quid Games NFT you will be granted access to participate in our games which will include <text style={{color: "#ED1B76"}}>unimaginable prizes.</text></h1>
            </div>
        );
    }
}

export default Announcement;