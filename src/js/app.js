class AppComponent extends React.AppComponent{
    constructor(props){
    super(props);
       

}
 

render() {
    return (
        <div >
            <UserInput specialcode="okay"/>
            <ZipCodeInput/>
        </div>
    );
};
}
var root=document.getElementById(root);

//ReactDom.render(React.createElement(AppComponent),root);
ReactDom.render( <ZipCodeInput/>,root);
ReactDom.render( <UserAccountInput/>,root);
