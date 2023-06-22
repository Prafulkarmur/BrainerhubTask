import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const GuestContainerContainer= ({isAuthenticated, children, fallbackPath = '/' }) => {
  if (isAuthenticated) {
    return <Navigate to={fallbackPath} />;
  }

  return <>{children}</>;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const ConnectedGuestContainer = connect(mapStateToProps)(GuestContainerContainer);
export default ConnectedGuestContainer;

