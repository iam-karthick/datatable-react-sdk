import React from "react";
import './styles/flx-search.table.css';

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: props.List,
      data:props.List,
      MasterChecked: false,
      SelectedList: [],
    };
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
        console.log(user.id)
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


  render() {
   
    return (
      <div className="table-container">
        {/* <input
          size="large"
          name="searchInput"
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        /> */}         
            <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="check-box" scope="col">
                  <label class="container">
                  <input
                      type="checkbox"
                      className="btn-checkbox"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                    <span class="checkmark"></span>
                    </label>            
                  </th>
                  <th scope="col">BNR</th>
                  <th scope="col">Company Name</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {this.state.data.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <td className="check-box">
                    <label class="container">
                    <input
                        type="checkbox"
                        checked={user.selected}
                        className="btn-checkbox"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                        />  <span class="checkmark"></span>
                    </label>
                    </td>
                    <td>{user.BRN}</td>
                    <td>{user["Name"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    );
  }
}

export default SelectTableComponent;