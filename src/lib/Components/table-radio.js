import React from "react";
// import Users from "./table-search-data";
import './styles/flx-radio.table.css'

class SelectRadioTableComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      List: props.List,
      data:props.List,
      SelectedList: [],
       };
       this.state.indexOfClickedItem = {indexOfClickedItem: -1};
       this.onClickMethod = this.onClickMethod.bind(this) 
  }


changeColor(){
   this.setState({selected: !this.state.selected})
}
  //---------Table Functionality---------//
  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }


  //--------------search Functionality ----------------//

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
        console.log(event.target.value)
        if(event.target.value !== ""){
            this.globalSearch();
        }else{
            this.setState({data: this.state.List})
        }
    });
  };

  globalSearch = () => {
    let { List, searchInput } = this.state;
    if (searchInput) {
      let filteredData = List.filter(value => {
        return (
          value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.email.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      this.setState({ data: filteredData });
    }
  };

  onClickMethod(index) {
    // removed for brevity
    // When clicked then set the state with the index of clicked item
    this.setState({indexOfClickedItem: index});
 }
//  componentDidMount() {
//   let { list, data} = this.state;
//   console.log(list,data)
//   list = data.map(p => p.Name.substr(3));
//   this.setState({ list })
// }

sortAscending = () => {
    let { data } = this.state;
  data.sort((a, b) => {
    if (a.Name < b.Name) {
      return -1;
    }
  })
  this.setState({ data })
}

sortDescending = () => {
  let { data } = this.state;
  data.sort((a, b) => {
    if (a.Name < b.Name) {
      return -1;
    }
  }).reverse()
  this.setState({ data })
}

  render() {
    // let btn_class = this.state.selected ? "" : "selected";
    return (
      <div className="table-container">   
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="check-box" scope="col">
                  <label className="container">
                 
                    </label>            
                  </th>
                  <th scope="col">Name  <button onClick={this.sortAscending}>asc</button>
                  <button onClick={this.sortDescending}>desc</button></th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Expiry</th>
                  <th scope="col">Penalty</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {this.state.data.map((user,index) => (
                  <tr className={this.state.indexOfClickedItem === index ? 'selected' : ''}  key={user.id} >
                    <td className="check-box">
                    <input className="radio-btn" type="radio" id={user.id} name="radio-group" checked />
                    <label for={user.id}  onClick={this.onClickMethod.bind(this,index)}></label>

                    {/* <input
                        type="checkbox"
                        checked={user.selected}
                        className="btn-checkbox"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                        />  <span class="checkmark"></span> */}
                    </td>
                    <td><span>Name: </span>{user["Name"]}</td>
                    <td><span >Mobile: </span>{user['Mobile']}</td>
                    <td><span>Expiry: </span>{user["Expiry"]}</td>
                    <td><span>Penalty: </span>{user["Penalty"]}</td>

                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    );
  }
}

export default SelectRadioTableComponent;