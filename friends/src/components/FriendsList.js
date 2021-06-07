import React from 'react'
import AddFriendForm from './AddFriendForm'


import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'
import Megrim from '../utils/fonts/Megrim-Regular.ttf'

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res)
                this.setState({
                    friendsList: res.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (<>
            <div className='friends'>
                <div className='title-wrapper'>
                    <div className='title'>
                        <div className='inner-wrapper'>
                            <div className='top-title'>Friends</div>

                        </div>

                    </div>
                </div>
                <div className='cards-wrapper'>
                    {this.state.friendsList.map((friend) => {
                        return (
                            <FriendCard friend={friend} key={friend.id} />

                        )
                    })}
                </div>
            </div>
            <AddFriendForm friends={this.friendsList} getData={this.getData} />

        </>
        )
    }
}
export default FriendsList