import CustomSelect from '../Select/Select';

const Status = ({ value = '', onChange, label = '', sx, options }) => {
  const defaultOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];

  return (
    <div>
      <CustomSelect
        value={value}
        label={label}
        options={options || defaultOptions}
        onChange={onChange}
        sx={sx}
      />
    </div>
  );
};

export default Status;
