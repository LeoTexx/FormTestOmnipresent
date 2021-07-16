import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import countries from "../data/countries.json";

const schema = yup.object().shape({
  country: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthDate: yup.date().required(),
  holidayAllowance: yup.number().positive().integer().required(),
  maritalStatus: yup.string(),
  socialInsuranceNumber: yup.number().positive().integer(),
  numberOfChildren: yup.number().positive().integer(),
  workingHours: yup.number().positive().integer(),
});

export default function Form() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);

    toast.dark(<DataToast data={data} />, { autoClose: false });
    toast.success("Success, your Employee was added!");
  };

  const DataToast = ({ data }) => {
    return (
      <div
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ul>
          {Object.keys(data).map((value, key) => {
            console.log(JSON.stringify(value));
            return (
              <li style={{ marginBottom: 16 }} key={key}>
                {JSON.stringify(value)}:
              </li>
            );
          })}
        </ul>
        <ul>
          {Object.values(data).map((value, key) => {
            console.log(JSON.stringify(value));
            return (
              <li style={{ marginBottom: 16 }} key={key}>
                {JSON.stringify(value)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const SpainException = () => {
    return (
      <>
        <input
          id="input-5"
          type="number"
          min={30}
          max={365}
          placeholder="Holiday Allowance"
          {...register("holidayAllowance")}
          required
        />
        <label for="input-5">
          <span className="label-text">Holiday Allowance</span>
          <span className="nav-dot"></span>
        </label>
        <input
          {...register("maritalStatus")}
          id="input-6"
          type="text"
          placeholder="Marital Status"
        />
        <label for="input-6">
          <span className="label-text">Marital Status</span>
          <span className="nav-dot"></span>
        </label>

        <input
          {...register("socialInsuranceNumber")}
          id="input-7"
          type="number"
          placeholder="Social Insurance Number"
        />
        <label for="input-7">
          <span className="label-text">Social Insurance Number</span>
          <span className="nav-dot"></span>
        </label>
      </>
    );
  };
  const GhanaException = () => {
    return (
      <>
        <input
          id="input-5"
          type="number"
          min={1}
          max={365}
          placeholder="Holiday Allowance"
          {...register("holidayAllowance")}
          required
        />
        <label for="input-5">
          <span className="label-text">Holiday Allowance</span>
          <span className="nav-dot"></span>
        </label>
        <input
          {...register("maritalStatus")}
          id="input-6"
          type="text"
          placeholder="Marital Status"
        />
        <label for="input-6">
          <span className="label-text">Marital Status</span>
          <span className="nav-dot"></span>
        </label>

        <input
          {...register("numberOfChildren")}
          id="input-7"
          type="number"
          placeholder="Number of Children"
        />
        <label for="input-7">
          <span className="label-text">Number of Children</span>
          <span className="nav-dot"></span>
        </label>
      </>
    );
  };
  const BrazilException = () => {
    return (
      <>
        <input
          id="input-5"
          type="number"
          min={1}
          max={40}
          placeholder="Holiday Allowance"
          {...register("holidayAllowance")}
          required
        />
        <label for="input-5">
          <span className="label-text">Holiday Allowance</span>
          <span className="nav-dot"></span>
        </label>
        <input
          {...register("workingHours")}
          id="input-6"
          type="number"
          placeholder="Working Hours"
        />
        <label for="input-6">
          <span className="label-text">Working Hours</span>
          <span className="nav-dot"></span>
        </label>
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select
        id="input-1"
        name="Country of work"
        {...register("country")}
        onChange={(e) => setSelectedCountry(e.target.value)}
        required
      >
        {countries.map((country) => {
          return (
            <option
              key={country.code}
              className="country-option"
              value={country.name}
            >
              {country.name}
            </option>
          );
        })}
      </select>

      <label for="input-1">
        <span className="label-text">Country of work </span>
        <span className="nav-dot"></span>
        <div className="add-button-trigger">Add Employee</div>
      </label>

      <input
        {...register("firstName")}
        id="input-2"
        type="text"
        placeholder="First Name"
        required
      />
      <label for="input-2">
        <span className="label-text">First Name</span>
        <span className="nav-dot"></span>
      </label>

      <input
        {...register("lastName")}
        id="input-3"
        type="text"
        placeholder="Last Name"
        required
      />
      <label for="input-3">
        <span className="label-text">Last Name</span>
        <span className="nav-dot"></span>
      </label>

      <input
        {...register("birthDate")}
        id="input-4"
        type="date"
        placeholder="mm/dd/yyyy"
        min="1900-01-01"
        max="2021-01-01"
        required
      />
      <label for="input-4">
        <span className="label-text">Date of Birth</span>
        <span className="nav-dot"></span>
      </label>

      {selectedCountry === "Spain" && <SpainException />}
      {selectedCountry === "Ghana" && <GhanaException />}
      {selectedCountry === "Brazil" ? (
        <BrazilException />
      ) : (
        <>
          {" "}
          <input
            id="input-5"
            type="number"
            min={1}
            max={365}
            placeholder="Holiday Allowance"
            {...register("holidayAllowance")}
            required
          />
          <label for="input-5">
            <span className="label-text">Holiday Allowance</span>
            <span className="nav-dot "></span>
          </label>
        </>
      )}

      <button id="input-8" onClick={() => onSubmit} type="submit">
        Submit Employee Data
      </button>
      <label for="input-8" id="submit-button">
        <div>Submit Data</div>
        <span id="bigball"></span>
      </label>

      <ToastContainer
        position="bottom-center"
        draggablePercent={60}
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "100%" }}
      />
      <p className="tip">Press Tab</p>
      <div className="add-button">Add Employee</div>
    </form>
  );
}
