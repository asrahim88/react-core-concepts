import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    Name: "Abdur Rahim",
    Profession: " Student"
  }
  var person2 = {
    Name: "Shahid Afridi",
    Profession: " Cricketer"
  }
  var style = {
    color: "red",
    backgroundColor: "white",
    margin: "20px",
    padding: "20px",
    boxShadow: "5px 5px 10px 5px red"
    
  }
  const playerName = ["Mashrafi Bin Mortoza", "Tamim Iqbal", "Mushfiqur Rahim", "Mahmudullah Riad", "Sakib Al Hasan", "Imrul Kayes", "Rubel Hossen", "Ziur Rahman"]


  const job = [" Perlament Member", "New Captain" , "Older captain", "Asistent Captain", "T20 Captain", "Cricketer"]

  const description = ["At first he was a great Captain in Bangladesh cricket",  "Mushfiqur Rahim is a Cricketer in Bangladesh Create Team", "Mahmudullah Riad is a Cricketer in Bangladesh Create Team", "Sakib Al Hasan is a Cricketer in Bangladesh Create Team", "Imrul Kayes is a Cricketer in Bangladesh Create Team"]

  const products =[
    {Name: "photoshop", Price: "$19.8"},
    {Name: "Illudrator", Price: "$20"},
    {Name: "Adobe InDesign CC.", Price: "$60"},
    {Name: "Lightroom", Price: "$40"},
    {Name: "Adobe Premiere Pro", Price: "$74"},
    {Name: "Adobe software ", Price: "$55"},
    {Name: "amazon ", Price: "$65"},
    {Name: "hungry", Price: "$19.8"},
    {Name: "Adobe XD", Price: "$90"},
    {Name: "Adobe Spark", Price: "$45"},
    {Name: "Graphics Card", Price: "$45"},
    {Name: "Laptop", Price: "$45"},
    {Name: "Desk top", Price: "$45"}
    
  ]
  const friends = [
    {Name: "Hridoy Khan", idNumber: "Computer Department", Roll: "501"},
    {Name: "Mahdi Hasan", idNumber: "Computer Department", Roll: "502"},
    {Name: "Muna Chaowdhuri", idNumber: "Computer Department", Roll: "503"},
    {Name: "Nisa Chowdhuri", idNumber: "Computer Department", Roll: "504"},
    {Name: "Sazzadur Rahman", idNumber: "Computer Department", Roll: "505"},
    {Name: "Akib shikdar", idNumber: "Computer Department", Roll: "506"},
    {Name: "Fahim Chowdhuri", idNumber: "Computer Department", Roll: "507"},
    {Name: "Arifa Promi", idNumber: "Computer Department", Roll: "508"},
    {Name: "Masudur Rahman", idNumber: "Computer Department", Roll: "509"},
    {Name: "Shawon Ahmed", idNumber: "Computer Department", Roll: "510"},
    {Name: "Showrob Ahmed", idNumber: "Computer Department", Roll: "511"},
    {Name: "Habibul Bashar", idNumber: "Computer Department", Roll: "512"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            playerName.map(player => <li>{player}</li>)
          }
          {
            products.map(productName => <li>{productName.Name}</li>)
          }
        

        </ul>
       
       {
         products.map(pd => <Products name = {pd}></Products>)
       }
       {
         friends.map( student => <FriendsComponent friend = {student}></FriendsComponent>)
       }
        

        <Products name = {products[0]}></Products>
        <Products name = {products[1]}></Products>
        <Products name = {products[2]}></Products>
        <Products name = {products[3]}></Products>
        <Products name = {products[4]}></Products>
        <Products name = {products[5]}></Products>
        <Products name = {products[6]}></Products>
        <Products name = {products[7]}></Products>
        <Products name = {products[8]}></Products>
        <Products name = {products[9]}></Products>

        
        <BigPlay Name = {playerName[0]} Job = {job[0]}  description = {description[0]}></BigPlay>
        <BigPlay Name = {playerName[1]} Job = {job[1]} description = {description[1]}></BigPlay>
        <BigPlay Name = {playerName[2]} Job = {job[2]}  description = {description[2]}></BigPlay>
        <BigPlay Name = {playerName[3]} Job = {job[3]} description = {description[3]}></BigPlay>
        <BigPlay Name = {playerName[4]}Job = {job[4]} description = {description[4]}></BigPlay>
        <BigPlay Name = {playerName[5]} Job = {job[5]} description = {description[5]}></BigPlay>


        <h1> My heading: {(5+5)*5/5-2} </h1>
        <h4 style ={style}> Second Heading: {
        person.Name +" "+
        person.Profession
        } </h4>
        <h4 style = {{
    color: "red",
    backgroundColor: "white",
    margin: "20px",
    padding: "20px",
    boxShadow: "5px 5px 10px 5px red"
    
  }}>
          {
          person2.Name +" "+
          person2.Profession
          
          }
        </h4>
        <p>My first React app</p>
        <Counter></Counter>
       <Users></Users>
      </header>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([])
  useEffect(
    ()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
       .then(res => res.json())
       .then(data => setUser(data))
    }
  )
  return (
    <div>
      <h1>Dynamic Users: {user.length}</h1>
     <ul>
       {
         user.map(user => <li>{user.name}</li>)
       }
     </ul>
     <ul>
       {
         user.map(company => <li>{company.phone}</li>)
       }
     </ul>
     <ul>
       {
         user.map(address => <li>{address.address.zipcode}</li>)
       }
     </ul>
     <ul>
       This is anouther:{
         user.map( data => <li>{data.address.geo.lat}</li>)
       }
     </ul>
    </div>
  )
}



function Counter(props) {
  const [count, setCount] = useState(0)
  
  
  return (
    <div style = {{
      width: "250px",
      height: "250px",
      border: "5px solid white",
      boxShadow: "2px 2px 10px 5px red"
    }}>
      <h5>Count: {count}</h5>
      <button onClick = {() =>setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function BigPlay(props) {
  return (
  <div style = {{
      width: "600px",
      height: "400px",
      border: "2px solid blue",
      boxShadow: "2px 2px 10px 5px",
      borderRadius: "5px",
      margin: "30px",
      padding: "10px",
      color: "white",
      background: "salmon", 
      float: "left"
    }}>
      <h1> BigPlayer Name: {props.Name} </h1>
      <h4> Profession:  {props.Job}</h4>
      <p> Description: {props.description}</p>
  </div>
  )
}

function Products(props) {

  const {Name, Price} = props.name;
  
  return (
    <div style ={{
      width: "550px",
      height: "250px",
      border: "1px solid red",
      color: "white",
      margin: "20px",
      padding: "5px",
      float: "left"
    }}>

  <h1>{Name}</h1>
      <h3>Price: {Price}</h3>
      <button>Buy Now</button>

    </div>
  )
}



function FriendsComponent(props) {
  const {Name, idNumber, Roll} = props.friend
  
  return (
    <div style = {{
      width: "400px",
      height: "250px",
      margin: "30px",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px 5px red",
      background: "#2C1635",
      color: "#F2C1B6",
      border: "3px solid white",
      float: "left",
      textAlign: "left",
      padding: "10px"


    }}>
      <span>Name: {Name}</span>
      <br/>
      <span>Class: {idNumber} </span>
      <br/>
  <span>Roll: {Roll}</span>
    </div>
  )
}




export default App;
