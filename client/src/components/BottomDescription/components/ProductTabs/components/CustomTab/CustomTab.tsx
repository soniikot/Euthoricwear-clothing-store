import { Tab } from '@mui/material';
import { FC } from 'react';
interface CustomTabProps {
  label: string;
  value: string;
}

export const CustomTab: FC<CustomTabProps> = ({ label, value }) => {
  return (
    <Tab
      sx={{
        width: {
          xs: 100,
          sm: 200,
        },
        fontSize: {
          xs: '10px',
          sm: '16px',
        },
      }}
      label={label}
      value={value}
    />
  );
};
