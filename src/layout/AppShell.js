import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AppShell = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return (
          <>
          <Header />
            <Outlet />
          </>
        );
      }
    
      return <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
export default connect(mapStateToProps)(AppShell);
