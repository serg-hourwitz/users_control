import CustomSelect from '../Select/Select';

const Department = ({
  value = '',
  onChange,
  label = 'Department',
  sx,
  options,
}) => {
  const defaultOptions = [
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'HR', label: 'HR' },
    { value: 'Finance', label: 'Finance' },
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

export default Department;
