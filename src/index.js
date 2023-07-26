import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './Images/pic-1.jpg';
import profile2 from './Images/pic-2.jpg';
import profile3 from './Images/pic-3.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment 
                    name = 'Alex' 
                    date = 'Today at 5:00 PM' 
                    text = 'It is amazing!'
                    picture = {profile1}
            />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name ='Jack' 
                    date = 'Today at 6:00 PM'
                    text = 'Great job!' 
                    picture = {profile2} 
            />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name = 'Sarah' 
                    date = 'Today at 7:00 PM'
                    text = 'Thanks..'
                    picture = {profile3}
             />
             </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)