import { Button, ButtonGroup } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <>
        <div style={{height: '200px', background: 'orange', width: '100%'}}>
        <ButtonGroup aria-label="Basic example">
      <Button onClick={() => navigate('/')} variant="secondary">List</Button>
      <Button onClick={() => navigate('/detail/1')} variant="secondary">Detail</Button>
      <Button onClick={() => navigate('/checkout')} variant="secondary">Checkout</Button>
    </ButtonGroup>
        </div>
        <Outlet/>
        </>
    );
}

export default Layout;