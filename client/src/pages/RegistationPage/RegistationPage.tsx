import { useState } from 'react';
import style from './styles.module.scss';
import loginImage from '@/assets/login-img.jpeg';
import { TextButton } from '@/shared/components/TextButton/TextButton';

export default function RegistrationPage() {
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null); // Reset message before making a new request

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const req = await fetch(
        'http://localhost:1337/api/auth/local/register',
        reqOptions
      );
      const res = await req.json();

      if (res.error) {
        setMessage(res.error.message);
        return;
      }

      if (res.jwt && res.user) {
        setMessage('Successful registration.');
      }
    } catch (error) {
      setMessage('An error occurred during registration.');
    }
  };

  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.image_wrapper}>
          <img src={loginImage} alt="happy people ready to buy clothes" />
        </div>

        <form className={style.form_wrapper} onSubmit={register}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <TextButton text="Sign in" buttonColor="purple" type="submit" />
          <div className="message">{message && <p>{message}</p>}</div>
        </form>
      </div>
    </div>
  );
}
