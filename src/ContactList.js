import React, { Component } from "react";

class UserCard extends Component {
  state = {};

  render() {
    const { contacts } = this.props;

    return (
      <ol className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.name}>{contact.name}</li>
        ))}
      </ol>
    );
  }
}

export default UserCard;
