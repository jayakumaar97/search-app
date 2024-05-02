import React, { useState } from "react";
import "./widgetStyle.css";

function Widget(props) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const bringSuggestion = () => {
    setPopupVisible(true);
  };

  const hideSuggestion = () => {
    setPopupVisible(false);
  };


  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Search for the name of a bus service, flight service or a hotel"
        autoComplete="off"
        onFocus={bringSuggestion}
      />

      <input 
        type="submit" 
        value="Search"
        onClick={hideSuggestion}
        />
        
      {isPopupVisible && (
        <section className="popup">
          <aside>
            <input type="radio" id="buses" name="category" value="Buses" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label for="buses"> Buses </label>
          </aside>
          <aside>
            <input type="radio" id="Flights" name="category" value="Flights" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label for="Flights"> Flights </label>
          </aside>
          <aside>
            <input type="radio" id="Hotels" name="category" value="Hotels" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label for="Hotels"> Hotels </label>
          </aside>
          <aside>
            <input type="radio" id="All"  name="category" value="All" onChange={(e) => setSelectedCategory(e.target.value)} />
            <label for="All"> All </label>
          </aside>
        </section>
      )}
    </div>
  );
}

export default Widget;




























// import React, { Component } from "react";
// import "./widgetStyle.css";

// export default class Widget extends Component {
//   bringSuggestion = () => {
//     document.querySelector(".popup").style.display = "block";
//   };

//   hideSuggestion = () => {
//     //document.querySelector(".popup").style.display = "none";
//   };

//   // generateCard = servID => {};

//   render() {
//     return (
//       <div>
//         <input
//           id="search"
//           type="text"
//           placeholder="Search for the name of a bus service, flight service or a hotel"
//           autoComplete="off"
//           onFocus={this.bringSuggestion}
//           onBlur={this.hideSuggestion}
//         />
//         <input type="submit" value="Search" onClick={this.props.onSubmit} />
//         <section className="popup">
//           <aside>
//             <input type="radio" name="category" value="Buses" />
//             <label> Buses </label>
//           </aside>
//           <aside>
//             <input type="radio" name="category" value="Flights" />
//             <label> Flights </label>
//           </aside>
//           <aside>
//             <input type="radio" name="category" value="Hotels" />
//             <label> Hotels </label>
//           </aside>
//           <aside>
//             <input type="radio" name="category" value="All" />
//             <label> All </label>
//           </aside>
//         </section>
//       </div>
//     );
//   }
// }
