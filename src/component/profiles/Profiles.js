import React from 'react'
import Posts from './Posts'
import data from './../../data/MOCK_DATA.json'


export default function Profiles() {
    


    return (
        <div>
            
            {
                data.map((user, index) => {
                    return (
                        <Posts key={index} 
                         index={index}
                         content={user.content} 
                         name={user.name}
                         likeCount={user.linke}
                         commentCount={user.coments}
                         time= {user.time}
                         email={user.email}
                         retweet={user.retweet}
                         share={user.share}
                         isLike={user.islike}
                         />
                    )
                })
            }
        </div>
    )
}
