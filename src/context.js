import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true
  }
  //get data
  componentDidMount(){
    let rooms = this.formatData(items)
    console.log(rooms)
    let featuredRooms = rooms.filter(room => room.featured === true)
    console.log(featuredRooms)
    this.setState({
      rooms,featuredRooms,sortedRooms:rooms,loading:false
    })
  }
  formatData(items){
     let tempItems = items.map(item => {
       let id = item.sys.id
       let images = item.fields.images.map(image => image.fields.file.url)
       let room = {...item.fields,images,id}
       return room
     })
     return tempItems
  }
  
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;
export default RoomProvider
export {RoomContext,RoomConsumer}