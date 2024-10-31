import { TabPanel } from '@mui/lab';
import { FC } from 'react';
import { ReactNode } from 'react';

interface CustomTabPanelProps {
  value: string;
  content: ReactNode;
}

export const CustomTabPanel: FC<CustomTabPanelProps> = ({ content, value }) => {
  return (
    <TabPanel
      value={value}
      sx={{
        width: {
          xs: 300,
          sm: 610,
        },
        height: 350,
        overflowY: 'auto',
      }}
    >
      {content}
    </TabPanel>
  );
};
