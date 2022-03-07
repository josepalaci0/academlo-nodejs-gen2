import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setPerson } from "../setting/actions/ToDosAction";
import ComponentAddperson from "./component.addPerson";

const ComponentPerson = () => {
  const [per, setPer] = React.useState([]);
  const dispatch = useDispatch();

  const fetchPerson = async () => {
    const response = await axios
      .get("http://localhost:3001/api/v1/ToDos/person")
      .catch((error) => {
        console.log(error);
      });
    setPer(response.data.data);
  };

  React.useEffect(() => {
    fetchPerson();
    dispatch(setPerson(per));
  }, []);

  if (per == "") {
    return (
      <div>
        <h1> loading ....</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ComponentAddperson />
        {
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th>First Name</th>
                <th>Full Name</th>                
                <th>Address</th>
                <th>City</th>
              </tr>
            </thead>
            {per.person.map((res) => (
              <tbody key={res.id}>
                <tr>
                  <td>{res.id}</td>
                  <td>{res.firstName}</td>
                  <td>{res.lastName}</td>                  
                  <td>{res.address}</td>
                  <td>{res.city}</td>
                </tr>
              </tbody>
            ))}
          </table>
        }
      </div>
    );
  }
};

export default ComponentPerson;
