import React, { useEffect, useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { auth } from "../firebase";
import API from "../utils/API";
import { useDropzone } from 'react-dropzone';
import Box from '@material-ui/core/Box';
import './style/signup.css';

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [files, setFiles] = useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'password2') {
      setPassword2(value);
    }
    if (name === 'displayName') {
      setDisplayName(value);
    }
  }

  function handleBtnSubmit(event) {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => saveNewUser(userAuth))
      .catch(error => {
        console.error("Error signing up with email and password", error);
      }
      )
  }

  function saveNewUser(userAuth) {
    let newUser = {
      uid: userAuth.user.uid,
      emailID: email,
      displayName: displayName
    }
    API.createNewUser(newUser)
    .catch(error => {console.log(`Error Saving user to the DB: `, error)});
  }

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps } = useDropzone({
      accept: 'image/jpeg, image/png',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div className='thumbInner'>
        <img
          src={file.preview}
          alt="Profile pic"
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  )
  )


  return (
    <Box display="flex" justifyContent="center">
      <section className="container">
        <h2>Sign Up</h2>
        <div {...getRootProps({ className: 'dropzone' })} >
          <input {...getInputProps()} />
          <p>Drag 'n' drop your profile pic here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
        <aside>
          {/* insert conditional- if image was accept show preview if not show rejected */}
          {/* <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul> */}
          <aside className="thumbsContainer">
            {thumbs}
          </aside>
          {/* <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul> */}
        </aside>
        <SignUpForm
          emailID={email}
          password={password}
          password2={password2}
          displayName={displayName}
          handleInputChange={handleInputChange}
          handleBtnSubmit={handleBtnSubmit}
        />
      </section>
    </Box>
  );
}

export default SignUp;