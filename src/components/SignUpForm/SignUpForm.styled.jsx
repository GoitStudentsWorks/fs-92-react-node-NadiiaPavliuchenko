import styled from 'styled-components';

export const FormRegisterStyles = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    .form {
      margin-top: 16px;
    }
    .label {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33333;
    }
    .input-container {
      position: relative;
    }

    .input {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.blue};
      border: 1px solid ${({ theme }) => theme.color.paleBlue};
      border-radius: 6px;
      padding: 12px 10px;
      margin-top: 8px;

      height: 44px;
    }
    .input:hover,
    .input:focus {
      outline: none;
    }
    .errorInput {
      border: 1px solid ${({ theme }) => theme.color.red};
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.red};
      border-radius: 6px;
      padding: 12px 10px;
      margin-top: 8px;
    }
    .input::placeholder {
      font-family: 'Roboto-Regular', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: ${({ theme }) => theme.color.skyBlue};
    }
    .watchPasswordIcon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate(0%, -50%);
      cursor: pointer;
    }
    .buttonSignUp {
      border-radius: 10px;
      padding: 8px 30px;
      margin-bottom: 16px;
      /* width: 280px; */
      height: 36px;
      border: none;
      box-shadow: ${({ theme }) => theme.boxShadow.normalButton};
      background-color: ${({ theme }) => theme.color.blue};
      transition: box-shadow 0.3s ease;

      font-family: 'Roboto-Medium';
      font-weight: 500;
      font-size: 16px;
      line-height: 1.25;
      text-align: center;
      color: ${({ theme }) => theme.color.white};
    }
    .buttonSignUp:hover,
    .buttonSignUp:focus {
      box-shadow: ${({ theme }) => theme.boxShadow.hoverButton};
    }
    .buttonSignUp:active {
      box-shadow: ${({ theme }) => theme.boxShadow.activeButton};
    }
    .error {
      color: ${({ theme }) => theme.color.red};
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    .errorInput {
      width: 336px;
    }
    .input-container {
      width: 336px;
    }
    .input {
      width: 336px;
      height: 44px;
    }
    .buttonSignUp {
      width: 336px;
      height: 44px;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    .errorInput {
      width: 384px;
    }
    .input-container {
      width: 384px;
    }
    .input {
      width: 384px;
      height: 44px;
    }
    .buttonSignUp {
      width: 384px;
      height: 44px;
    }
  }
`;
