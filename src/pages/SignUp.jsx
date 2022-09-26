import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChnageAge = this.onChnageAge.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {

      options: [],
      Full_Name: '',
      Email: '',
      Password: '',
      Age: '',
      Phone: '',
      Sex: '',
      categories: []

    };
  }

  onChangeFullName(e) {
    this.setState({
      Full_Name: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    })
  }

  onChnageAge(e) {
    this.setState({
      Age: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      Phone: e.target.value
    })
  }

  onChangeSex(e) {
    this.setState({
      Sex: e.target.value
    })
  }






  onSelect(selectedList, selectedItem) {
    this.setState({
      categories: selectedList
    })


  }

  onSubmit(e) {
    console.log('opa')
    e.preventDefault();
    const User = {

      BetName: this.state.Full_Name,
      ImageURL: this.state.Email,
      Team1: "-",
      Team2: "Active",
      BetID: "-",
      Team1Logo: this.state.Password,
      Team2Logo: this.state.Phone,
      Team1Score: "-",
      Team2Score: "-"

    };
    console.log(User);
    axios.post('https://backendserveretcoin.herokuapp.com/rooms/addnewBet', User)
      .then(res => console.log(res.data));

  }
  render() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">

          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <PageIllustration />
          </div>

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Add New Bet</h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <form >
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3">

                      </div>
                    </div>
                  </form>

                  <form onSubmit={this.onSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Bet Name <span className="text-red-600">*</span></label>
                        <input id="full-name" value={this.state.Full_Name} onChange={this.onChangeFullName} type="text" className="form-input w-full text-gray-300" placeholder="Bet Name" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Bet Image URL <span className="text-red-600">*</span></label>
                        <input id="company-name" value={this.state.Email} onChange={this.onChangeEmail} type="text" className="form-input w-full text-gray-300" placeholder="Imaeg URL" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Bet Event Image URL <span className="text-red-600">*</span></label>
                        <input id="email" type="text" value={this.state.Password} onChange={this.onChangePassword} className="form-input w-full text-gray-300" placeholder="Event URL" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Game URL Google <span className="text-red-600">*</span></label>
                        <input id="email" type="text" value={this.state.Phone} onChange={this.onChangePhone} className="form-input w-full text-gray-300" placeholder="Google Event URL" required />
                      </div>
                    </div>



                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button type="submit" className="btn text-white bg-green-600 hover:bg-green-700 w-full">Add Bet</button>
                      </div>
                    </div>
                  </form>

                </div>

              </div>
            </div>
          </section>

        </main>

      </div>
    );
  }
}