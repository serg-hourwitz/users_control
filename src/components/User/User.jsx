import CustomSelect from '../Select/Select';

const User = ({ value, onChange, label = '', sx, options }) => {
  return (
    <div>
      <CustomSelect
        value={value}
        label={label}
        options={options}
        onChange={onChange}
        sx={sx}
      />
    </div>
  );
};
export default User;
