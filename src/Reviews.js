import React from 'react';
import './App.css';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
      {
        "id": 1,
        "name": "Dian",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren!",
        "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id": 2,
        "name": "Anin",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren!",
        "photo": "https://images.pexels.com/photos/3756920/pexels-photo-3756920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id": 3,
        "name": "Dita",
        "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren!",
        "photo": " https://images.pexels.com/photos/995966/pexels-photo-995966.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
    const listReview = users.map((itemReview) =>
    <div key={itemReview.id} className="items">
    <img alt="woman" src={itemReview.photo} />
    <div className="User">
      <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
    </div>
  </div>
    );
    return(
      <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
    );
  }
export default Reviews;