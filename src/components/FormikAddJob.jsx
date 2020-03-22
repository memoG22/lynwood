import React from "react";
import { Formik } from "formik";
// const reg = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");

class FormikAddJob extends React.Component {
  state = {
    form: {}
  };
  onSubmit = values => {
    console.log("values", values);
  };
  render() {
    // const validate = (values, props) => {
    //   let errors = {};

    //   if (!values.password) {
    //     errors.password = "Password field is required";
    //   } else if (!reg.test(values.password)) {
    //     errors.password = "Password must be at least eight characters long";
    //   }
    //   return errors;
    // };
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Formik</h1>
          <div>
            <Formik validate initialValues={this.state.form} />
          </div>
        </div>
      </div>
    );
  }
}
export default FormikAddJob;
