import React, { Component } from 'react';
import axios from 'axios';


class AddVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullName=this.onChangeFullName.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChnageAge=this.onChnageAge.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeSex=this.onChangeSex.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     

        
        this.state = {

            options: [],
            Full_Name: '',
            Email: '',
            Password: '',
            Age: '',
            Phone:'',
            Sex:'',
            categories :[],
            idx:''

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
            categories:selectedList
        })
       

    }

    onSubmit(e){
        e.preventDefault();
        const User ={
            
            id:this.state.idx,
            "BetName":this.state.Full_Name,
            "ImageURL":this.state.Email,
            "Team1":'',
            Team2:"-",
            BetID:this.state.Sex,
            Team1Logo:this.state.Password,
            Team2Logo:"-",
            Team1Score:"-",
            Team2Score:"-"

        };
        console.log(User);
        axios.post('https://backendserveretcoin.herokuapp.com/rooms/updateBet', User)
            .then(res => console.log(res.data));
            window.location = `/viewRooms`
       
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        const Room={
            id:this.props.match.params.id
        }
        axios.post('https://backendserveretcoin.herokuapp.com/rooms/getBetByID',Room)
        .then(response => {
      

         
          this.setState({ idx: response.data._id });
        
          this.setState({ Full_Name: response.data.BetName });
          this.setState({ Email: response.data.ImageURL });
          this.setState({ Password: response.data.Team1Logo });
          this.setState({ Sex: response.data.BetID });
          console.log(response.data,"hsh")
          console.log("test1221")
        })
        
      }
    render() {
        return (
            <div className="container">

                <h3>Update BET</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label>Bet Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Full_Name}
                            onChange={this.onChangeFullName}

                        />
                    </div>
                    <div className="form-group">
                        <label>Bet Image URL: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEmail}

                        />
                    </div>
                    <div className="form-group">
                        <label>Event URL: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Password}
                            onChange={this.onChangePassword}

                        />
                    </div>

               
                   
                   
                  

                    <br></br>

                    <div className="form-group">
                        <input type="submit" value="Update Room" className="btn btn-primary" />
                    </div>
                </form>


            </div>
        )
    }
}

export default AddVehicle;