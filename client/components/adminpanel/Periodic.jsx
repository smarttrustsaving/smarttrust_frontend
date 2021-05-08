import axios from "../../axios";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

const Periodic = ({ id, period, quaterly, yearly, maturity }) => {
  const [state, setState] = useState({
    id,
    period,
    quaterly,
    yearly,
    maturity,
  });
  const [loading, setLoading] = useState(false);

  const updateHandler = () => {
    setLoading(true);
    axios
      .post("/update/periodics", { ...state }, { withCredentials: true })
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
            name="period"
            placeholder={period}
          />
        </td>
        <td>
          <input
            onChange={changeHandler}
            type="number"
            name="quaterly"
            placeholder={quaterly}
          />
        </td>
        <td>
          <input
            onChange={changeHandler}
            type="number"
            name="yearly"
            placeholder={yearly}
          />
        </td>
        <td>
          <input
            onChange={changeHandler}
            type="number"
            name="maturity"
            placeholder={maturity}
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

export default Periodic;
