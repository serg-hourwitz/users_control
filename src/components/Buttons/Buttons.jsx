import { Button } from '@mui/material';


const Buttons = ({variant, color, sx, title}) => {
  return (
    <>
      <Button variant={variant} color={color} sx={sx}>
        {title}
      </Button>
    </>
  );
}

export default Buttons;