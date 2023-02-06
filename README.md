## flx table npm package


### Install

Install using `npm install jawblia`

### Usage 
In a React app, use the Checkbox Button Table or Multi Select Table components:  
`import { SelectRadioTableComponent } from 'flx-table'`  
`import { SelectTableComponent } from 'flx-table'`  

   <div className="App">
      <h1>Table</h1>
      <SelectTableComponent List={Users}  />
      <SelectRadioTableComponent List={data1} />
    </div>

#### Button props

| Name        | Description      
| ----------- | -----------      
| Users        |  {
        id: 1,
        Name:"John",
        Mobile: '8899 7654',
        Expiry: 'Dec 2022',
        Penalty: '$606'
    }
| data1    | {
      id: 1,
      selected: false,
      Name: "Blue Ocean",
      BRN: "1-770-736",
      Expiry: "Dec 2022",
      Penalty: "$500",
    }       


