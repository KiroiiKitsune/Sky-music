import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLogin, getToken } from '../../api/Api';
import { addUser } from '../../store/actions/creators/creators';
import logo from '../../img/logo-black.png';
import * as S from './styles';

function Login() {
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email) throw new Error('Не введена почта');
    if (!password) throw new Error('Не введен пароль');
  };

  const getError = (newUser) => {
    if (newUser.email) throw new Error(newUser.email[0]);
    if (newUser.username) throw new Error(newUser.username[0]);
    if (newUser.password) throw new Error(newUser.password[0]);
    if (newUser.detail) throw new Error(newUser.detail);
  };

  const handleLogin = async () => {
    try {
      setDisabled(true);
      validateInput();
      const newUser = await getLogin({ email, password });
      if (!newUser.id) getError(newUser);
      const newToken = await getToken({ email, password });
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('tokenRefresh', JSON.stringify(newToken.refresh));
      localStorage.setItem('tokenAccess', JSON.stringify(newToken.access));
      dispatch(addUser(newUser));
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to='/login'>
          <S.ModalLogo>
            <S.ModalLogoImage src={logo} alt='logo' />
          </S.ModalLogo>
        </Link>
        <S.Inputs>
          <S.ModalInput
            type='text'
            name='login'
            placeholder='Почта'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <S.ModalInput
            type='password'
            name='password'
            placeholder='Пароль'
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </S.Inputs>
        {errorLog && <S.Error>{errorLog}</S.Error>}
        <S.Buttons>
          <S.PrimaryButton
            type='button'
            onClick={handleLogin}
            disabled={disabled}
          >
            Войти
          </S.PrimaryButton>
          <Link to='/register'>
            <S.SecondaryButton type='button' disabled={disabled}>
              Зарегистрироваться
            </S.SecondaryButton>
          </Link>
        </S.Buttons>
      </S.ModalForm>
    </S.PageContainer>
  );
}

export default Login;
