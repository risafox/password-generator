import React, {Component} from 'react';

function PasswordDisplay(props) {
    return (
        <div>
            <h3>Passwords:</h3>
            <ul>
              {props.data.map(passwords => {
                  return (
                    <li key={passwords.id}>{passwords.password}</li>
                  )}
              )}
            </ul>
        </div>
    )
}

export default PasswordDisplay;