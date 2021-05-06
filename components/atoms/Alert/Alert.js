import React from 'react';
import StyledAlert from './styles';

type AlertTypes = 'success' | 'info' | 'warning' | 'error';

type Props = {
  /**
   * Can user close the Alert
   */
  closable?: boolean,
  /**
   * Optional description
   */
  description?: string,
  /**
   * The message you want to show
   */
  message: string,
  /**
   * Handle close
   */
  onClose: Function,
  /**
   * Show icon
   */
  showIcon?: boolean,
  /**
   * There are 4 types of Alert:
   */
  type?: AlertTypes,
};
const Alert = (props: Props) => <StyledAlert {...props} />;

Alert.defaultProps = {
  closable: false,
  description: '',
  showIcon: false,
  type: 'info',
};
export default Alert;
