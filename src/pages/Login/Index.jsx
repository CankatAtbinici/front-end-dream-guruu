import React from 'react';
import './index.css';
import { Button, FormGroup, Input, Label } from 'reactstrap';


function Index(props) {

  const submitLoginEventHandler = () => {
    window.location.pathname = "/profile";
  }

    return (
        <div>
             <div className="login-form-parent">
              <section className="login-form-container col-12 col-sm-6">
        <FormGroup>
          <Label htmlFor="username-login">Kullanıcı e-posta </Label>
          <Input
            type="text"
            name="email"
            id="username-login"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password-login">Parola</Label>
          <Input
            type="password"
            name="password"
            id="password-login"
            required
          />
        </FormGroup>

        <FormGroup>
            <div>
            <Button className="btn-dark"
            onClick={submitLoginEventHandler}
            >Gönder
            </Button>
            </div>
        </FormGroup>
      </section>
    </div>
        </div>
    );
}

export default Index;