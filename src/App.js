// import React,{Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// import firebase from "./firestore";
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: '',
//       fullname: '',
//       users: [],
//       a:0
//     };
//   }
  
// //   componentWillMount=()=> {
// //     var usersList = [];
// //     // console.log(usersList);
// //     firebase.firestore().collection('users').get().then((snapshot) => {
// //       snapshot.docs.map((value,key) => {
// //         this.setState({a:key})
// //         usersList.push({
// //           email: value.data().email,
// //           fullname: value.data().fullname  
// //         });        
// //       })
// //     })
// //     this.setState({
// //       users: usersList,
// //     });
     
  
// //   }
// // show =()=>{
  
// // }



//   // updateInput = e => {
//   //   this.setState({
//   //     [e.target.name]: e.target.value
//   //   });

//   // }// khi input thay đổi sẽ lưu vào state
//   // addUser = e => {
//   //   e.preventDefault(); // ngăn chặn load trang 
//   //   const db = firebase.firestore();
//   //   db.settings({
//   //     timestampsInSnapshots: true
//   //   });

//   //   const userRef = db.collection('users').add({// để thêm dữ liệu vào user
//   //     fullname: this.state.fullname,
//   //     email: this.state.email
//   //   }).then((docRef) => {
//   //     this.setState({
//   //       email: '',
//   //       fullname: ''
//   //     });

//   //   })
//   //     .catch((error) => {
//   //       console.error("Error adding document: ", error);
//   //     });
//   //   this.setState({
//   //     fullname: '',
//   //     email: ''
//   //   });

//   // };
//   render() {
//     console.log("aaaaa");
//     // console.log(this.state.users);
//     return (
//       <div>
//         {/* <input
//           type="text"
//           name="fullname"
//           placeholder="Full name"
//           onChange={(e) => this.updateInput(e)}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           onChange={(e) => this.updateInput(e)}
//         />
//         <button onClick={(e) => this.addUser(e)} type="submit">Submit</button> */}

     
//             {this.show()}
      
// aaaa
//       </div>


//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import firebase from "./firestore";

class App extends Component {
  constructor() {
        super();
    
        this.state = {
          email: '',
          fullname: '',
          users: [],
          a:0
        };
      }
  
      componentWillMount=()=> {
            var usersList = [];
            // console.log(usersList);
            var db = firebase.firestore().collection('users').get();
            db.then((snapshot) => {
              snapshot.docs.forEach((doc) => {
                usersList.push({
                  email: doc.data().email,
                  fullname: doc.data().fullname  
                });        
              });
            });
            this.setState({
              users: usersList,
              a:usersList.length
            });         
          }

  render() {
    // this.loadData();
    console.log("aa");
    console.log(this.state.a);
    console.log(this.state.users);
    return (
      <div>
        aaaa
      </div>
    );
  }
}

export default App;