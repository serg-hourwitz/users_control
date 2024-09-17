import { Button } from '@mui/material';


const Buttons = ({ variant, color, sx, title, onClick }) => {
  return (
    <>
      <Button variant={variant} color={color} sx={sx} onClick={onClick}>
        {title}
      </Button>
    </>
  );
};

export default Buttons;