import { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Holds the data fetched from the API
      isLoading: true, // Tracks loading state
      error: null, // Tracks errors
    };
  }
  componentDidMount() {
    // Replace with your API endpoint
    fetch("http://localhost:4000/api/student")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
        <div>
          <h1>Student Table</h1>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default Dashboard;
