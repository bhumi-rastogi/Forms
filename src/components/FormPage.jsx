import React, { useState } from 'react';


const Form = () => {
  const [data, setdata] = useState({
    name: '',
    lastName: '',
    email: '',
    contacts: '',
  });
  const [isSubmitSuccess, setisSubmitSuccess] = useState(false);
  const [err, seterr] = useState({});

  const change = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();

    const newerr = {};
    for (const x in data) {
      if (!data[x]) {
        newerr[x] = `Please enter your ${x}!`;
      }
    }
    if (Object.keys(newerr).length > 0) {
      seterr(newerr);
    } else {
      setisSubmitSuccess(true);
    }
  };

  return (
    <div className="box">
      {isSubmitSuccess && <p className="submited">Submission successful!!!</p>}
      <form onSubmit={submit}>
        {Object.keys(data).map((x) => (
          <label style={{fontSize: '29pxpx'}} key={x}>
            {x.charAt(0).toUpperCase() + x.slice(1)}:
            {x === 'contacts' ? (
              <textarea value={data[x]} name={x} onChange={change} />
            ) : (
              <input type={x === 'email' ? 'email' : 'text'} value={data[x]} name={x} onChange={change} />
            )}
            {err[x] && <p className="error">{err[x]}</p>}
          </label>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;