import React from 'react' 
import Message from './Message'
import Actions from './Actions'
import ProfileImage from './ProfileImage'
import Timestamp from './Timestamp'
import User from './User'
function Tweet({tweet}) {
    const {user} = tweet;
    return (
    
    <div className="tweet">
      
      <ProfileImage
        image={user.image}
      />

      <div className="body">
        <div className="top">
            <User userData={user}/>
          
          <Timestamp time={tweet.timestamp}/>
        </div>

        <Message mess={tweet.message}/>
       
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
