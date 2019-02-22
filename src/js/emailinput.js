class UserInput extends React.Component {
    
    //constructor
    constructor(props) {
        super(props);
        
        this.state = {customer_email: ''};
        this.state={customer_password:''};

        this.handleEmailChange = this.handleEmailChange.bind(this); 
        this.handlePasswordChange = this.handleEmailChange.bind(this);      
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);


    };

    handleEmailChange(event){
        const customer_email = event.target.value;
        this.setState( () => {
                return {
                    customer_email
                }
            }
        );
        const zip=this.state.delivery_email;
    }
    handlePasswordChange(event){
        const customer_password = event.target.value;
        this.setState( () => {
                return {
                    customer_password
                }
            }
        );  
    }

    //button clicked
    handleEmailSubmit(event){

        this.props.handleOrderSubmit(this.state.customer_email);
    }

    render() {
        return (
            <div className="input-group mb-3">
              <p>{this.props.specialcode}</p>
                <input 
                    className="form-control"            
                    id="emailInput"
                    onChange={this.handleEmailChange}
                    placeholder="User email address"
                    type="text"
                    value={this.state.customer_email} />
                <div className="input-group-append">               
                    <button className="btn btn-primary" 
                            id="button-addon2"
                            onClick={this.handleEmailSubmit}>
                        Submit
                    </button>
                </div>
               
                <input 
                    className="form-control"            
                    id="passwordInput"
                    onChange={this.handlePasswordChange}
                    placeholder="user password"
                    type="text"
                    value={this.state.customer_password} />
                <div className="input-group-append">               
                    <button className="btn btn-primary" 
                            id="button-addon2"
                            onClick={this.handlePasswordChange}>
                        Submit
                    </button>
                </div>

            </div>  
        );
        
    }
}