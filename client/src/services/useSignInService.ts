import { useInput } from 'hooks';
import React from 'react';
import { signIn } from 'libs/apis';
import userStorage from 'libs/utils/userStorage';
import Path from 'routes/Path';

export default function useSignInService() {
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  const onSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { access_token } = await signIn({ email, password });
      userStorage.set(access_token);
      window.location.replace(Path.TODO);
    } catch (e) {
      console.log(e);
      console.log('로그인에 실패했습니다.');
    }
  };

  return {
    email,
    password,
    onSignIn,
    onChangeEmail,
    onChangePassword,
  };
}
