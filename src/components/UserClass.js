





import React from'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        
        };
        

        //console.log(this.props.name +  " child constructor");
    }
    
        

   


    async componentDidMount() {
        //console.log(this.props.name + " child component Did Mount");
        //api call
        //because this is rendered after the component is rendered

        const {githubid} = this.props;

        const data = await fetch(`https://api.github.com/users/${githubid}`);
        const json = await data.json();

        this.setState({
            userInfo:json
        });

        console.log(json);

    }

    componentDidUpdate(){

        //console.log("child component didUpdate");

    }

    componentWillUnmount(){
        //console.log("child component will unmount");
    }



    render() {

        //console.log(this.props.name + " child render");
        const {name , location, avatar_url}  = this.state.userInfo;
        return (
            <div className="user-card-items">
                <h1>Developer</h1>
                <img src={avatar_url}/>
                <h2>Name : {name || this.props.name}</h2>
                <h3>Location : {location || this.props.location}</h3>
                <h4>contact : {this.props.emailid}</h4>
            </div>
        );

    };

};

export default UserClass;


/*
*------MOUNTING-----
*
*Constructor(dummy)
*Render(dummy)
*   <HTML dummy>
*Component Did Mount
*   <Api call>
*   <this.setState>-> State variable is updated
*
*-----UPDATE-----
*   render(API data)
*   <HTML (new API data)>
*   component Did Update
*
*
*
*/ 