import axios from "../../axios";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Loan = ({ id, type, rate }) => {
  const [state, setState] = useState({ id, type, rate });
  const [loading, setLoading] = useState(false);

  const updateHandler = () => {
    setLoading(true);
    axios
      .post("/update/loans", { ...state }, { withCredentials: true })
      .then((res) => {})
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const changeHandler = ({ target: { value, name } }) => {
    let newState = { ...state };
    newState[name] = value;

    setState(newState);
  };

  return (
    <>
      <tr>
        <td>
          <input
            onChange={changeHandler}
            type="text"
            name="type"
            placeholder={type}
          />
        </td>
        <td>
          <input
            onChange={changeHandler}
            type="number"
            name="rate"
            placeholder={rate}
          />
        </td>
        <td>
          <Button
            onClick={updateHandler}
            style={{
              height: 50,
              width: 80,
            }}
          >
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <div>Update</div>
            )}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Loan;
