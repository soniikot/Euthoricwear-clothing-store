import { FC, FormEvent, useState } from 'react';
import style from './styles.module.scss';
import { TextButton } from '@/shared/components/TextButton/TextButton';
import loginImage from '@/assets/login-img.jpeg';
import { Link } from 'react-router-dom';
import { TextButtonWithLink } from '@/shared/components/TextButtonWithLink/TextButtonWithLink';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { setUsername } from '@/features/user/userSlice';

export const LoginPage: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [formVisible, setFormVisible] = useState(true);

  const username = useAppSelector((state: RootState) => state.user.username);

  const dispatch = useAppDispatch();

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setMessage('');
    const formData = new FormData(event.target as HTMLFormElement);
    const jsonData = Object.fromEntries(formData.entries());

    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const req = await fetch(
        'http://localhost:1337/api/auth/local',
        reqOptions
      );
      const res = await req.json();

      if (res.error) {
        setMessage(res.error.message);
        return;
      }

      if (res.jwt && res.user) {
        setMessage('Login successful.');
        dispatch(setUsername(res.user.username));
        setFormVisible(false);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.image_wrapper}>
          <img src={loginImage} alt="happy people ready to buy clothes" />
        </div>

        {username ? (
          <div className={style.success_message}>
            <h4>You are logged in as {username}</h4>
            <p>You haven't order anything yet</p>
            <TextButtonWithLink
              text="Start Shopping"
              buttonColor="purple"
              link="/"
            />
          </div>
        ) : (
          <form className={style.form_wrapper} onSubmit={login}>
            <h2>Login</h2>
            <h4>
              If you don't have an account, please
              <span className="purple">
                <Link to="/sign-in"> sign in</Link>
              </span>
            </h4>
            <label htmlFor="identifier">Username/Email</label>
            <input type="text" id="identifier" name="identifier" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <TextButton text="Login" buttonColor="purple" type="submit" />
            <div>{message && <p>{message}</p>}</div>
          </form>
        )}
      </div>
    </div>
  );
};
