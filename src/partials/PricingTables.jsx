import React, { Component } from 'react';
import axios from 'axios';

class GetallCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {

      options: [],
      Code: '',
      Model: '',
      Type: '',
      Name: '',
      categories: []

    };
  }


  componentDidMount() {
    console.log("test")
    axios.get('https://backendserveretcoin.herokuapp.com/rooms/getBEts')
      .then(response => {
        this.setState({ options: response.data });
        console.log(response.data)
        console.log("test1122")
      })
  }

  DeleteReservation(e, ID) {
    const User = {
      id: ID
    }
    axios.post('https://backendserveretcoin.herokuapp.com/rooms/deleteBEt', User)
      .then(response => {

        console.log(response.data.data)
        console.log("test11")
      })
   
  }


 
  UpdateRoom(e, ID) {
    window.location = `/ViewROomByID/${ID}`
}




  render() {
    return (
      <section className="relative">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h1 mb-4" data-aos="fade-up">Active Bets</h1>

            </div>

            {/* Pricing tables */}
            <div>

              {/* Pricing toggle */}


              <div className="max-w-sm mx-auto grid gap-1 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

                {this.state.options.length > 0 && this.state.options.map((item, index) => (
                  <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">


                    <div className="font-medium mb-3">Bet Details:</div>
                    <ul className="text-gray-400 -mb-3 grow">
                      <li className="flex items-center mb-3">

                        <span>Bet Name :- {item.BetName}</span>
                      </li>
                      <li className="flex items-center mb-3">

                        <span>Image URL :- {item.ImageURL}</span>
                      </li>
                      <li className="flex items-center mb-3">

                        <span>Evnet URL :- {item.Team1Logo} </span>
                      </li>
                    </ul>
                    <div className="mb-4 pb-4 border-b border-gray-700">
                      <div className="h4 text-green-600 mb-1">Bet Image</div>
                      <img src={item.ImageURL}></img>

                    </div>
                    <div className="mb-4 pb-4 border-b border-gray-700">
                      <div className="h4 text-green-600 mb-1">Event Image</div>
                      <img src={item.Team1Logo}></img>

                    </div>
                    <div className="border border-gray-700 p-3 mt-6">
                      <a className="btn-sm text-white bg-green-600 hover:bg-green-700 w-full" type="submit"  href="#0">Update Bet</a>
                    </div>
                    <div className="border border-gray-700 p-3 mt-6"  onClick={e => this.DeleteReservation(e, item._id)}>
                      <a className="btn-sm text-white bg-red-600 hover:bg-green-700 w-full" href="#0">Delete Bet</a>
                    </div>
                  </div>




                ))}







              </div>

              {/* Bottom infobox */}

            </div>

          </div>
        </div>
      </section>

    )
  }
}


export default GetallCategories;