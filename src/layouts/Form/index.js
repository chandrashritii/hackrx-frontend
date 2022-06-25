import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const Form = () => {
  return (
    // <MDBContainer>
    //   <MDBRow>
    //     <MDBCol md="6">
    //       <form>
    //         <p className="h5 text-center mb-4">Write to us</p>
    //         <div className="grey-text">
    //           <MDBInput
    //             label="Your name"
    //             icon="user"
    //             group
    //             type="text"
    //             validate
    //             error="wrong"
    //             success="right"
    //           />
    //           <MDBInput
    //             label="Your email"
    //             icon="envelope"
    //             group
    //             type="email"
    //             validate
    //             error="wrong"
    //             success="right"
    //           />
    //           <MDBInput
    //             label="Subject"
    //             icon="tag"
    //             group
    //             type="text"
    //             validate
    //             error="wrong"
    //             success="right"
    //           />
    //           <MDBInput
    //             type="textarea"
    //             rows="2"
    //             label="Your message"
    //             icon="pencil-alt"
    //           />
    //         </div>
    //         <div className="text-center">
    //           <MDBBtn outline color="secondary">
    //             Send
    //             <MDBIcon far icon="paper-plane" className="ml-1" />
    //           </MDBBtn>
    //         </div>
    //       </form>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
  );
};

export default Form;